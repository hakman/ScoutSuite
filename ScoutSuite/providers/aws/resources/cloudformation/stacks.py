import re

from ScoutSuite.providers.aws.facade.base import AWSFacade
from ScoutSuite.providers.aws.resources.base import AWSResources
from ScoutSuite.core.console import print_exception


class Stacks(AWSResources):
    def __init__(self, facade: AWSFacade, region: str):
        super().__init__(facade)
        self.region = region

    async def fetch_all(self):
        raw_stacks = await self.facade.cloudformation.get_stacks(self.region)
        parsing_error_counter = 0
        for raw_stack in raw_stacks:
            try:
                name, stack = self._parse_stack(raw_stack)
                self[name] = stack
            except Exception as e:
                parsing_error_counter += 1
        if parsing_error_counter > 0:
            print_exception(
                'Failed to parse {} resource: {} times'.format(self.__class__.__name__, parsing_error_counter))

    def _parse_stack(self, raw_stack):
        raw_stack['id'] = raw_stack.pop('StackId')
        raw_stack['name'] = raw_stack.pop('StackName')
        raw_stack['drifted'] = raw_stack.pop('DriftInformation')[
                                   'StackDriftStatus'] == 'DRIFTED'
        raw_stack['termination_protection'] = raw_stack['EnableTerminationProtection']
        raw_stack['arn'] = raw_stack['id']
        raw_stack['notificationARNs'] = raw_stack['NotificationARNs']
        template = raw_stack.pop('template')
        raw_stack['deletion_policy'] = self.has_deletion_policy(template)

        if hasattr(template, 'keys'):
            for group in template.keys():
                if 'DeletionPolicy' in template[group]:
                    raw_stack['deletion_policy'] = template[group]
                    break

        return raw_stack['name'], raw_stack

    @staticmethod
    def has_deletion_policy(template):
        """
        Return region to be used for global calls such as list bucket and get bucket location
        :param template: The api response containing the stack's template
        :return:
        """
        has_dp = True
        # If a ressource is found to not have a deletion policy or have it to delete, the boolean is switched to
        # false to indicate that the ressource will be deleted once the stack is deleted
        if isinstance(template, dict):
            template = template['Resources']
            for group in template.keys():
                if 'DeletionPolicy' in template[group]:
                    if template[group]['DeletionPolicy'] == 'Delete':
                        has_dp = False
                else:
                    has_dp = False
        if isinstance(template, str):
            if re.match(r'\"DeletionPolicy\"\s*:\s*\"Delete\"', template):
                has_dp = False
            elif not re.match(r'\"DeletionPolicy\"', template):
                has_dp = False
        return has_dp

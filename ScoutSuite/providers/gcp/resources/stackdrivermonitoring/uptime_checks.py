from ScoutSuite.providers.base.resources.base import Resources
from ScoutSuite.providers.gcp.facade.base import GCPFacade
from ScoutSuite.providers.utils import get_non_provider_id
from ScoutSuite.core.console import print_exception


class UptimeChecks(Resources):
    def __init__(self, facade: GCPFacade, project_id: str):
        super().__init__(facade)
        self.project_id = project_id

    async def fetch_all(self):
        raw_uptime_checks = await self.facade.stackdrivermonitoring.get_uptime_checks(self.project_id)
        parsing_error_counter = 0
        for raw_uptime_check in raw_uptime_checks:
            try:
                uptime_check_name, uptime_check = self._parse_uptime_check(raw_uptime_check)
                self[uptime_check_name] = uptime_check
            except Exception as e:
                parsing_error_counter += 1
        if parsing_error_counter > 0:
            print_exception(
                'Failed to parse {} resource: {} times'.format(self.__class__.__name__, parsing_error_counter))

    def _parse_uptime_check(self, raw_uptime_check):
        uptime_check_dict = {}
        uptime_check_dict['id'] = get_non_provider_id(raw_uptime_check.name)
        uptime_check_dict['name'] = raw_uptime_check.display_name
        uptime_check_dict['monitored_resource'] = raw_uptime_check.monitored_resource
        uptime_check_dict['http_check'] = raw_uptime_check.http_check
        uptime_check_dict['period'] = raw_uptime_check.period
        uptime_check_dict['timeout'] = raw_uptime_check.timeout
        return uptime_check_dict['id'], uptime_check_dict

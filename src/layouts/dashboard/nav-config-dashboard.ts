import type { NavSectionProps } from '@/components/nav-section';
import { paths } from '@/routes/paths';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InventoryIcon from '@mui/icons-material/Inventory';
import GrassIcon from '@mui/icons-material/Grass';
import ScienceIcon from '@mui/icons-material/Science';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';

const icon = (component: React.ElementType) => component;

export const navData: NavSectionProps['data'] = [
  {
    subheader: 'Overview',
    items: [{ title: 'Dashboard', path: paths.dashboard.root, icon: icon(DashboardIcon) }],
  },
  {
    subheader: 'Farm Management',
    items: [
      { title: 'Greenhouses', path: paths.dashboard.greenhouses, icon: icon(AgricultureIcon) },
      { title: 'Packets', path: paths.dashboard.packets, icon: icon(InventoryIcon) },
      { title: 'Crops', path: paths.dashboard.crops, icon: icon(GrassIcon) },
    ],
  },
  {
    subheader: 'Monitoring',
    items: [
      { title: 'Soil Monitoring', path: paths.dashboard.soil, icon: icon(ScienceIcon) },
      { title: 'Irrigation', path: paths.dashboard.irrigation, icon: icon(WaterDropIcon) },
      { title: 'Plant Analysis', path: paths.dashboard.analysis, icon: icon(CameraAltIcon) },
    ],
  },
  {
    subheader: 'Intelligence',
    items: [
      { title: 'AI Advisor', path: paths.dashboard.advisor, icon: icon(SmartToyIcon) },
      { title: 'Reports', path: paths.dashboard.reports, icon: icon(AnalyticsIcon) },
      { title: 'Settings', path: paths.dashboard.settings, icon: icon(SettingsIcon) },
    ],
  },
];

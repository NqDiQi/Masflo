import {
  Factory,
  Droplets,
  Waves,
  Droplet,
  Cylinder,
  Filter,
  Atom,
  RefreshCw,
  FireExtinguisher,
  Building2,
  Snowflake,
  GlassWater,
  Scroll,
  Leaf,
  Plug,
  FlaskConical,
  Building,
  LucideIcon,
  Fish,
  Warehouse,
  Hospital,
  Plane,
  Home,
  Car,
  WavesLadder,
  CloudRain,
  Factory as IndustryIcon,
  Landmark,
  Wind,
  Settings,
  Shirt,
  Fuel,
  RadioTower,
  ArrowUpDown,
} from "lucide-react";

/* ========= APPLICATION KEY ========= */
export type ApplicationKey =
  | "Industry"
  | "Residential buildings"
  | "Commercial buildings"
  | "High-rise complexes"
  | "Water supply in buildings and irrigation"
  | "Sprinkler irrigation systems"
  | "Agricultural irrigation and sprinkler systems"
  | "Boiler feed"
  | "Fire fighting systems"
  | "Hot & cold water and coolant circulation"
  | "DM plant"
  | "Reverse osmosis (RO)"
  | "Industrial washing"
  | "Cooling water"
  | "Drinking water facilities"
  | "Energy facilities"
  | "Chemical and petrochemical plants"
  | "Paper industry"
  | "Waste water treatment plants"
  | "Textile dyeing machines"
  | "Power plants"
  | "Fish farms"
  | "Dewatering"
  | "Warehouses"
  | "Hospitals"
  | "Airports"
  | "Basements"
  | "Garages"
  | "Pools"
  | "Rainwater drainage"
  | "Storm water drainage"
  | "Flood control"
  | "Sump & lift stations"
  | "Septic & sewage pits"
  | "Municipal wastewater"
  | "Industrial wastewater";

/* ========= LABEL + ICON MAP ========= */
export const applicationLabels: Record<
  ApplicationKey,
  { en: string; vi: string; icon: LucideIcon }
> = {
  Industry: {
    en: "Industry",
    vi: "Ứng dụng công nghiệp",
    icon: IndustryIcon,
  },

  "Residential buildings": {
    en: "Residential buildings",
    vi: "Nhà ở & chung cư",
    icon: Home,
  },

  "Commercial buildings": {
    en: "Commercial buildings",
    vi: "Tòa nhà thương mại",
    icon: Landmark,
  },

  "High-rise complexes": {
    en: "High-rise complexes",
    vi: "Khu cao tầng",
    icon: Building2,
  },

  "Water supply in buildings and irrigation": {
    en: "Water supply in buildings and irrigation",
    vi: "Cấp nước & hệ thống tưới",
    icon: Droplet,
  },

  "Sprinkler irrigation systems": {
    en: "Sprinkler irrigation systems",
    vi: "Hệ thống tưới phun mưa",
    icon: Droplets,
  },

  "Agricultural irrigation and sprinkler systems": {
    en: "Agricultural irrigation and sprinkler systems",
    vi: "Tưới tiêu nông nghiệp",
    icon: Leaf,
  },

  "Boiler feed": {
    en: "Boiler feed",
    vi: "Cấp nước lò hơi",
    icon: Cylinder,
  },

  "Fire fighting systems": {
    en: "Fire fighting systems",
    vi: "Hệ thống phòng cháy chữa cháy",
    icon: FireExtinguisher,
  },

  "Hot & cold water and coolant circulation": {
    en: "Hot & cold water and coolant circulation",
    vi: "Tuần hoàn nước nóng lạnh & làm mát",
    icon: RefreshCw,
  },

  "DM plant": {
    en: "DM plant",
    vi: "Hệ thống khử khoáng (DM)",
    icon: Atom,
  },

  "Reverse osmosis (RO)": {
    en: "Reverse osmosis (RO)",
    vi: "Hệ thống RO",
    icon: Filter,
  },

  "Industrial washing": {
    en: "Industrial washing",
    vi: "Rửa công nghiệp",
    icon: Settings,
  },

  "Cooling water": {
    en: "Cooling water",
    vi: "Nước làm mát",
    icon: Snowflake,
  },

  "Drinking water facilities": {
    en: "Drinking water facilities",
    vi: "Hệ thống nước sạch",
    icon: GlassWater,
  },

  "Energy facilities": {
    en: "Energy facilities",
    vi: "Nhà máy năng lượng",
    icon: Fuel,
  },

  "Chemical and petrochemical plants": {
    en: "Chemical and petrochemical plants",
    vi: "Nhà máy hóa chất & lọc dầu",
    icon: FlaskConical,
  },

  "Paper industry": {
    en: "Paper industry",
    vi: "Công nghiệp giấy",
    icon: Scroll,
  },

  "Waste water treatment plants": {
    en: "Waste water treatment plants",
    vi: "Nhà máy xử lý nước thải",
    icon: Factory,
  },

  "Textile dyeing machines": {
    en: "Textile dyeing machines",
    vi: "Ngành dệt nhuộm",
    icon: Shirt,
  },

  "Power plants": {
    en: "Power plants",
    vi: "Nhà máy điện",
    icon: RadioTower,
  },

  "Fish farms": {
    en: "Fish farms",
    vi: "Trang trại nuôi thủy sản",
    icon: Fish,
  },

  Dewatering: {
    en: "Dewatering",
    vi: "Hút & thoát nước công trình",
    icon: ArrowUpDown,
  },

  Warehouses: {
    en: "Warehouses",
    vi: "Nhà kho",
    icon: Warehouse,
  },

  Hospitals: {
    en: "Hospitals",
    vi: "Bệnh viện",
    icon: Hospital,
  },

  Airports: {
    en: "Airports",
    vi: "Sân bay",
    icon: Plane,
  },

  Basements: {
    en: "Basements",
    vi: "Tầng hầm",
    icon: Building,
  },

  Garages: {
    en: "Garages",
    vi: "Nhà xe",
    icon: Car,
  },

  Pools: {
    en: "Pools",
    vi: "Hồ bơi",
    icon: WavesLadder,
  },

  "Rainwater drainage": {
    en: "Rainwater drainage",
    vi: "Thoát nước mưa",
    icon: CloudRain,
  },

  "Storm water drainage": {
    en: "Storm water drainage",
    vi: "Thoát nước mưa đô thị",
    icon: Wind,
  },

  "Flood control": {
    en: "Flood control",
    vi: "Chống ngập",
    icon: Waves,
  },

  "Sump & lift stations": {
    en: "Sump & lift stations",
    vi: "Trạm bơm nâng",
    icon: Plug,
  },

  "Septic & sewage pits": {
    en: "Septic & sewage pits",
    vi: "Hố ga & hầm tự hoại",
    icon: Droplet,
  },

  "Municipal wastewater": {
    en: "Municipal wastewater",
    vi: "Nước thải đô thị",
    icon: Landmark,
  },

  "Industrial wastewater": {
    en: "Industrial wastewater",
    vi: "Nước thải công nghiệp",
    icon: Factory,
  },
};

/* ========= SAFE GETTER ========= */
export function getApplicationData(key: string) {
  if (key in applicationLabels) {
    return applicationLabels[key as ApplicationKey];
  }
  return null;
}

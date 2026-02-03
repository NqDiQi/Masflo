export type Product = {
  name: string;
  category: string;
  image: string;
  slug: string;
  usage: string;

  applications?: string[];
  specs: string[];

  specifications?: { label: string; value: string }[];
  operatingRanges?: { label: string; value: string }[];

  material?:
    | {
        mode: "simple";
        items: {
          part: string;
          material: string;
        }[];
      }
    | {
        mode: "typed"; // C / S / N (GIỮ NGUYÊN)
        items: {
          part: string;
          typeC: string;
          typeS: string;
          typeN: string;
        }[];
      }
    | {
        mode: "versioned"; // 👈 MỚI
        versions: string[]; // ["Bronze Version", "Cast Iron Version"]
        items: {
          part: string;
          values: Record<string, string>;
        }[];
      };
};

export const products: Product[] = [
  {
    name: "PRESSURE BOOSTER PUMPS – ISOBARIC SERIES",
    category: "domestic",
    image: "/images/products/boosterpumps.jpg",
    slug: "pressure-booster-pumps-isobaric-series",
    usage:
      "Complete booster systems designed for hassle‑free water pressure boosting. ISOBARIC Series pumps deliver consistent performance with reliable multistage centrifugal design, making them ideal for residential buildings, irrigation, and industry.",
    applications: [
      "Industry",
      "Residential buildings",
      "Sprinkler irrigation systems",
    ],
    specs: [
      "Automatic cascade control of pumps by means of one/ two pressure switch(es).",
      "Automatic change-over at any start/ stop cycle.",
      "Emergency push button in case of series faults",
      "Start & stop delays to prevent simultaneous starting / stopping of the pumps.",
      "Dry running protection by means of current sensing program.",
      "Automatic circuit breaker protecting the motor against short circuit and overload.",
      "Factory tested complete system mounted on a rigid base frame",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 7.5 kW" },
      { label: "Max. Flow Rate", value: "Up to 80 m³/hr" },
      { label: "Max. Pressure", value: "Up to 5 bar" },
      { label: "Max. Liquid Temperature", value: "70°C" },
      { label: "Manifold Material", value: "G.I / Stainless Steel" },
    ],
  },
  {
    name: "PRESSURE BOOSTER PUMPS – MV SERIES",
    category: "domestic",
    image: "/images/products/mv-series-booster-pumps.jpg",
    slug: "mv-series-booster-pumps",
    usage:
      "Vertical multistage inline pumps engineered with decades of expertise. MV Series ensures durability, superior workmanship, and trouble‑free service life, offering high efficiency and quiet operation for building and industrial water systems.",
    applications: [
      "Industry",
      "Residential buildings",
      "Sprinkler irrigation systems",
    ],
    specs: [
      "Stainless steel impellers, shaft and stage casings (SS 304 / SS 316)",
      "Thermal motor protector for single phase motors",
      "Strengthened cartridge mechanical seals",
      "High hydraulic efficiency",
      "Low noise and vibration levels",
      "Environment-friendly design",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 110 kW" },
      { label: "Max. Flow Rate", value: "Up to 200 m³/hr" },
      { label: "Max. Total Head", value: "Up to 300 m" },
      { label: "Liquid Temperature", value: "-15°C to +120°C" },
    ],
    material: {
      mode: "typed",
      items: [
        {
          part: "Outer Shell",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Head",
          typeC: "Cast Iron",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Base",
          typeC: "Cast Iron",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Base Plate",
          typeC: "-",
          typeS: "Cast Iron",
          typeN: "Cast Iron",
        },
        {
          part: "Impeller",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Diffuser (Chamber)",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Shaft",
          typeC: "SS 304 / SS 431",
          typeS: "SS 304 / SS 431",
          typeN: "SS 316 / SS 329",
        },
        {
          part: "Bearing Ring",
          typeC: "SiC & Tungsten Carbide",
          typeS: "SiC & Tungsten Carbide",
          typeN: "SiC & Tungsten Carbide",
        },
        {
          part: "Mechanical Seal",
          typeC: "SiC vs SiC / Viton",
          typeS: "SiC vs SiC / Viton",
          typeN: "SiC vs SiC / Viton",
        },
      ],
    },
  },
  {
    name: "PRESSURE BOOSTER PUMPS – MVHS SERIES",
    category: "domestic",
    image: "/images/products/pressure-booster-pumps-mvhs-series.jpg",
    slug: "pressure-booster-pumps-mvhs-series",
    usage:
      "Hydro‑pneumatic systems built for modern water supply. MVHS Series combines advanced multistage technology with VFD control, delivering smooth, quiet, and efficient operation while eliminating water hammer and roof tank pollution.",
    applications: [
      "Industry",
      "Residential buildings",
      "Boiler feed",
      "Reverse osmosis (RO)",
    ],

    specs: [
      "C.R.I. Vertical multistage pump maximize performance, demonstrates high degree of consistency and is economical",
      "Pumps with VFD lasts longer as they can adjust the work load to meet the system requirement",
      "Extremely quiet and low vibration when in operation. The smooth, automated start and stop, reduces water hammer",
      "It avoids water pollution caused by roof tanks",
      "It also serves as the best replacement for the traditional roof tank water supply way, which is a source of water pollution",
    ],
    specifications: [
      { label: "Max. Flow Range", value: "up to 1200 m3/hr" },
      { label: "Head Range", value: "up to 160 m" },
      { label: "Max. Working Pressure", value: "16 bar" },
      { label: "Temperature", value: "0°C to + 70° C" },
    ],
    operatingRanges: [
      { label: "Flow Range", value: "up to 450m3/h, up to 125lps" },
      { label: "Power Range", value: "0.37 - 45 kW, 05. - 60 HP" },
      { label: "Input supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Head Range", value: "up to 160m" },
      { label: "Water Temperature", value: "0° C to 70° C" },
      { label: "Max. Working Pressure", value: "16 bar" },
      { label: "Ambient Temperature", value: "40° c" },
    ],
  },
  {
    name: "VERTICAL MULTISTAGE INLINE PUMPS – MV SERIES",
    category: "domestic",
    image: "/images/products/vertical-multistage-inline-pumps-mvseries.jpg",
    slug: "vertical-multistage-inline-pumps-mvseries",
    usage:
      "Reliable inline multistage pumps for pressure boosting, boiler feed, RO, and firefighting. MV Series is engineered for maximum efficiency, low noise, and long service life in both industrial and building applications.",
    applications: [
      "Industry",
      "Residential buildings",
      "Boiler feed",
      "Reverse osmosis (RO)",
      "DM plant",
      "Hot & cold water and coolant circulation",
      "Fire fighting systems",
      "Industrial washing",
      "Water supply in buildings and irrigation",
    ],
    specs: [
      "Stainless steel impellers, shaft and stage casings (SS 304/SS 316)",
      "All single phase motors are fitted with thermal motor protector",
      "Strengthened cartridge seals",
      "Enhanced hydraulic efficiency",
      "Good compatibility and environment friendly",
      "Low noise level and low vibration level",
    ],
    specifications: [
      { label: "Power Range", value: "0.37 kW to 45kW" },
      { label: "Maximum Flow Rate", value: "up to 90 m³/hr" },
      { label: "Maximum Total Head", value: "up to 300 mtrs" },
      { label: "Max. Liquid Temperature", value: "-15°C to +120°C" },
    ],
  },
  {
    name: "PRESSURE BOOSTER PUMPS – ISOBARIC SERIES",
    category: "building",
    image: "/images/products/boosterpumps.jpg",
    slug: "pressure-booster-pumps-isobaric-series",
    usage:
      "Complete booster systems designed for hassle‑free water pressure boosting. ISOBARIC Series pumps deliver consistent performance with reliable multistage centrifugal design, making them ideal for residential buildings, irrigation, and industry.",
    applications: [
      "Industry",
      "Residential buildings",
      "Sprinkler irrigation systems",
    ],
    specs: [
      "Automatic cascade control of pumps by means of one/ two pressure switch(es).",
      "Automatic change-over at any start/ stop cycle.",
      "Emergency push button in case of series faults",
      "Start & stop delays to prevent simultaneous starting / stopping of the pumps.",
      "Dry running protection by means of current sensing program.",
      "Automatic circuit breaker protecting the motor against short circuit and overload.",
      "Factory tested complete system mounted on a rigid base frame",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 7.5 kW" },
      { label: "Max. Flow Rate", value: "Up to 80 m³/hr" },
      { label: "Max. Pressure", value: "Up to 5 bar" },
      { label: "Max. Liquid Temperature", value: "70°C" },
      { label: "Manifold Material", value: "G.I / Stainless Steel" },
    ],
  },
  {
    name: "PRESSURE BOOSTER PUMPS – MV SERIES",
    category: "building",
    image: "/images/products/mv-series-booster-pumps.jpg",
    slug: "mv-series-booster-pumps",
    usage:
      "Vertical multistage inline pumps engineered with decades of expertise. MV Series ensures durability, superior workmanship, and trouble‑free service life, offering high efficiency and quiet operation for building and industrial water systems.",
    applications: [
      "Industry",
      "Residential buildings",
      "Sprinkler irrigation systems",
    ],
    specs: [
      "Stainless steel impellers, shaft and stage casings (SS 304 / SS 316)",
      "Thermal motor protector for single phase motors",
      "Strengthened cartridge mechanical seals",
      "High hydraulic efficiency",
      "Low noise and vibration levels",
      "Environment-friendly design",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 110 kW" },
      { label: "Max. Flow Rate", value: "Up to 200 m³/hr" },
      { label: "Max. Total Head", value: "Up to 300 m" },
      { label: "Liquid Temperature", value: "-15°C to +120°C" },
    ],
    material: {
      mode: "typed",
      items: [
        {
          part: "Outer Shell",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Head",
          typeC: "Cast Iron",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Base",
          typeC: "Cast Iron",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Base Plate",
          typeC: "-",
          typeS: "Cast Iron",
          typeN: "Cast Iron",
        },
        {
          part: "Impeller",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Diffuser (Chamber)",
          typeC: "SS 304",
          typeS: "SS 304",
          typeN: "SS 316",
        },
        {
          part: "Pump Shaft",
          typeC: "SS 304 / SS 431",
          typeS: "SS 304 / SS 431",
          typeN: "SS 316 / SS 329",
        },
        {
          part: "Bearing Ring",
          typeC: "SiC & Tungsten Carbide",
          typeS: "SiC & Tungsten Carbide",
          typeN: "SiC & Tungsten Carbide",
        },
        {
          part: "Mechanical Seal",
          typeC: "SiC vs SiC / Viton",
          typeS: "SiC vs SiC / Viton",
          typeN: "SiC vs SiC / Viton",
        },
      ],
    },
  },
  {
    name: "PRESSURE BOOSTER PUMPS – MVHS SERIES",
    category: "building",
    image: "/images/products/pressure-booster-pumps-mvhs-series.jpg",
    slug: "pressure-booster-pumps-mvhs-series",
    usage:
      "Hydro‑pneumatic systems built for modern water supply. MVHS Series combines advanced multistage technology with VFD control, delivering smooth, quiet, and efficient operation while eliminating water hammer and roof tank pollution.",
    applications: [
      "Industry",
      "Residential buildings",
      "Boiler feed",
      "Reverse osmosis (RO)",
    ],
    specs: [
      "C.R.I. Vertical multistage pump maximize performance, demonstrates high degree of consistency and is economical",
      "Pumps with VFD lasts longer as they can adjust the work load to meet the system requirement",
      "Extremely quiet and low vibration when in operation. The smooth, automated start and stop, reduces water hammer",
      "It avoids water pollution caused by roof tanks",
      "It also serves as the best replacement for the traditional roof tank water supply way, which is a source of water pollution",
    ],
    specifications: [
      { label: "Max. Flow Range", value: "up to 1200 m3/hr" },
      { label: "Head Range", value: "up to 160 m" },
      { label: "Max. Working Pressure", value: "16 bar" },
      { label: "Temperature", value: "0°C to + 70° C" },
    ],
    operatingRanges: [
      { label: "Flow Range", value: "up to 450m3/h, up to 125lps" },
      { label: "Power Range", value: "0.37 - 45 kW, 05. - 60 HP" },
      { label: "Input supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Head Range", value: "up to 160m" },
      { label: "Water Temperature", value: "0° C to 70° C" },
      { label: "Max. Working Pressure", value: "16 bar" },
      { label: "Ambient Temperature", value: "40° c" },
    ],
  },
  {
    name: "VERTICAL MULTISTAGE INLINE PUMPS – MV SERIES",
    category: "building",
    image: "/images/products/vertical-multistage-inline-pumps-mvseries.jpg",
    slug: "vertical-multistage-inline-pumps-mvseries",
    usage:
      "Reliable inline multistage pumps for pressure boosting, boiler feed, RO, and firefighting. MV Series is engineered for maximum efficiency, low noise, and long service life in both industrial and building applications.",
    applications: [
      "Industry",
      "Residential buildings",
      "Boiler feed",
      "Reverse osmosis (RO)",
      "DM plant",
      "Hot & cold water and coolant circulation",
      "Fire fighting systems",
      "Industrial washing",
      "Water supply in buildings and irrigation",
    ],
    specs: [
      "Stainless steel impellers, shaft and stage casings (SS 304/SS 316)",
      "All single phase motors are fitted with thermal motor protector",
      "Strengthened cartridge seals",
      "Enhanced hydraulic efficiency",
      "Good compatibility and environment friendly",
      "Low noise level and low vibration level",
    ],
    specifications: [
      { label: "Power Range", value: "0.37 kW to 45kW" },
      { label: "Maximum Flow Rate", value: "up to 90 m³/hr" },
      { label: "Maximum Total Head", value: "up to 300 mtrs" },
      { label: "Max. Liquid Temperature", value: "-15°C to +120°C" },
    ],
  },
  {
    name: "NORM Series Centrifugal Pumps",
    category: "industry",
    image: "/images/products/norm.jpg",
    slug: "norm-series-centrifugal-pumps",

    usage:
      "Versatile centrifugal pumps for clean or dirty low‑viscosity liquids. NORM Series is trusted across industries from firefighting to irrigation, offering continuous duty capability and robust performance.",
    applications: [
      "Industry",
      "Residential buildings",
      "Fire fighting systems",
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
      "Waste water treatment plants",
      "Paper industry",
      "Cooling water",
      "Power plants",
      "Textile dyeing machines",
      "Chemical and petrochemical plants",
    ],

    specs: [
      "Suitable for clean/dirty low-viscosity liquids",
      "Non-abrasive, no solid particles",
      "Continuous duty capable",
    ],

    specifications: [
      { label: "Pump Type", value: "Centrifugal, end suction" },
      { label: "Operation", value: "Continuous 24/7 possible" },
      {
        label: "Liquid Types",
        value: "Clean, dirty, low-viscosity, non-abrasive",
      },
    ],

    material: {
      mode: "versioned",
      versions: ["Bronze Version", "Cast Iron Version"],
      items: [
        {
          part: "Pump Casing",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast Iron",
          },
        },
        {
          part: "Impeller",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast Iron",
          },
        },
        {
          part: "Shaft",
          values: {
            "Bronze Version": "Stainless Steel",
            "Cast Iron Version": "Stainless Steel",
          },
        },
      ],
    },
  },
  {
    name: "Split Case Pump CEP",
    category: "industry",
    image: "/images/products/cep.jpg",
    slug: "split-case-cep",
    usage:
      "High‑capacity double suction split case pumps designed for cooling water, drinking water, and heavy industry. CEP Series delivers flows up to 3000 L/s with easy maintenance and unmatched reliability.",
    applications: [
      "Cooling water",
      "Drinking water facilities",
      "Fire fighting systems",
      "Energy facilities",
      "Paper industry",
      "Chemical and petrochemical plants",
    ],

    specs: [
      "Double suction impeller, single stage",
      "Axially split casing for easy maintenance",
      "Heavy-duty bearings with grease lubrication",
      "Optional oil lubrication",
      "Clockwise rotation (viewed from drive end)",
    ],
    specifications: [
      { label: "Flow Range", value: "15 – 3000 L/s" },
      { label: "Head Range", value: "8 – 175 m" },
      { label: "Operating Temperature", value: "-10°C to +120°C" },
      { label: "Bearings", value: "3 heavy-duty type" },
      { label: "Rotation", value: "Clockwise (optional reverse)" },
    ],
    material: {
      mode: "versioned",
      versions: ["Bronze Version", "Cast Iron Version"],
      items: [
        {
          part: "Casing",
          values: {
            "Bronze Version": "Cast iron (GJL 250) (EN-JL 1040)",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Impeller",
          values: {
            "Bronze Version": "Bronze / AISI 316",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Wear ring",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Shaft",
          values: {
            "Bronze Version": "Stainless steel (AISI 420) (1.4021)",
            "Cast Iron Version": "Carbon steel (1.0501)",
          },
        },
        {
          part: "Shaft sleeve",
          values: {
            "Bronze Version": "Stainless steel (AISI 420) (1.4021)",
            "Cast Iron Version": "Stainless steel (1.4021)",
          },
        },
        {
          part: "Shaft sealing",
          values: {
            "Bronze Version": "Soft packing / Mechanical seal",
            "Cast Iron Version": "Soft packing / Mechanical seal",
          },
        },
        {
          part: "Painting",
          values: {
            "Bronze Version": "RAL 5010",
            "Cast Iron Version": "RAL 5010",
          },
        },
      ],
    },
  },
  {
    name: "NORM Series Centrifugal Pumps",
    category: "water",
    image: "/images/products/norm.jpg",
    slug: "norm-series-centrifugal-pumps",

    usage:
      "Versatile centrifugal pumps for clean or dirty low‑viscosity liquids. NORM Series is trusted across industries from firefighting to irrigation, offering continuous duty capability and robust performance.",
    applications: [
      "Industry",
      "Residential buildings",
      "Fire fighting systems",
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
      "Waste water treatment plants",
      "Paper industry",
      "Cooling water",
      "Power plants",
      "Textile dyeing machines",
      "Chemical and petrochemical plants",
    ],

    specs: [
      "Suitable for clean/dirty low-viscosity liquids",
      "Non-abrasive, no solid particles",
      "Continuous duty capable",
    ],

    specifications: [
      { label: "Pump Type", value: "Centrifugal, end suction" },
      { label: "Operation", value: "Continuous 24/7 possible" },
      {
        label: "Liquid Types",
        value: "Clean, dirty, low-viscosity, non-abrasive",
      },
    ],
    material: {
      mode: "versioned",
      versions: ["Bronze Version", "Cast Iron Version"],
      items: [
        {
          part: "Pump Casing",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast Iron",
          },
        },
        {
          part: "Impeller",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast Iron",
          },
        },
        {
          part: "Shaft",
          values: {
            "Bronze Version": "Stainless Steel",
            "Cast Iron Version": "Stainless Steel",
          },
        },
      ],
    },
  },
  {
    name: "Split Case Pump CEP",
    category: "water",
    image: "/images/products/cep.jpg",
    slug: "split-case-cep",
    usage:
      "High‑capacity double suction split case pumps designed for cooling water, drinking water, and heavy industry. CEP Series delivers flows up to 3000 L/s with easy maintenance and unmatched reliability.",
    applications: [
      "Cooling water",
      "Drinking water facilities",
      "Fire fighting systems",
      "Energy facilities",
      "Paper industry",
      "Chemical and petrochemical plants",
    ],

    specs: [
      "Double suction impeller, single stage",
      "Axially split casing for easy maintenance",
      "Heavy-duty bearings with grease lubrication",
      "Optional oil lubrication",
      "Clockwise rotation (viewed from drive end)",
    ],
    specifications: [
      { label: "Flow Range", value: "15 – 3000 L/s" },
      { label: "Head Range", value: "8 – 175 m" },
      { label: "Operating Temperature", value: "-10°C to +120°C" },
      { label: "Bearings", value: "3 heavy-duty type" },
      { label: "Rotation", value: "Clockwise (optional reverse)" },
    ],
    material: {
      mode: "versioned",
      versions: ["Bronze Version", "Cast Iron Version"],
      items: [
        {
          part: "Casing",
          values: {
            "Bronze Version": "Cast iron (GJL 250) (EN-JL 1040)",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Impeller",
          values: {
            "Bronze Version": "Bronze / AISI 316",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Wear ring",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast iron (GJL 250) (EN-JL 1040)",
          },
        },
        {
          part: "Shaft",
          values: {
            "Bronze Version": "Stainless steel (AISI 420) (1.4021)",
            "Cast Iron Version": "Carbon steel (1.0501)",
          },
        },
        {
          part: "Shaft sleeve",
          values: {
            "Bronze Version": "Stainless steel (AISI 420) (1.4021)",
            "Cast Iron Version": "Stainless steel (1.4021)",
          },
        },
        {
          part: "Shaft sealing",
          values: {
            "Bronze Version": "Soft packing / Mechanical seal",
            "Cast Iron Version": "Soft packing / Mechanical seal",
          },
        },
        {
          part: "Painting",
          values: {
            "Bronze Version": "RAL 5010",
            "Cast Iron Version": "RAL 5010",
          },
        },
      ],
    },
  },
  {
    name: "Fire Pump Sets",
    category: "fire",
    image: "/images/products/fire-pump-sets.jpg",
    slug: "fire-pump-sets",
    usage:
      "Certified UL Listed and FM Approved fire pump sets built with NORM and CEP pumps. Available with electric or diesel drives, equipped with jockey pumps for constant pressure, ensuring safe and reliable fire protection for commercial and industrial facilities.",
    applications: [
      "Commercial buildings",
      "Industrial facilities",
      "Warehouses",
      "Hospitals",
      "Airports",
      "High-rise complexes",
    ],

    specs: [
      "Horizontal end suction NORM pumps",
      "Split case CEP pumps",
      "UL Listed and FM Approved",
      "Available with electric motor and diesel engine",
      "Includes jockey pump for pressure stabilization",
    ],

    specifications: [
      { label: "Standards", value: "NFPA20, UL Listed, FM Approved" },
      {
        label: "Pump Types",
        value: "Horizontal end suction NORM, Split case CEP",
      },
      { label: "Drive Options", value: "Electric motor, Diesel engine" },
      { label: "Controller", value: "UL Listed / FM Approved controllers" },
      { label: "Auxiliary Pump", value: "Jockey pump" },
    ],

    operatingRanges: [
      { label: "UL Range", value: "50–2000 gpm, 50–156 m head" },
      { label: "FM Range", value: "300–1000 gpm, 56–104 m head" },
    ],

    material: {
      mode: "versioned",
      versions: ["Bronze Version", "Cast Iron Version"],
      items: [
        {
          part: "Pump casing",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast iron",
          },
        },
        {
          part: "Impeller",
          values: {
            "Bronze Version": "Bronze",
            "Cast Iron Version": "Cast iron",
          },
        },
        {
          part: "Shaft",
          values: {
            "Bronze Version": "Stainless steel",
            "Cast Iron Version": "Stainless steel",
          },
        },
      ],
    },
  },
  {
    name: "DAC-SC and DAS Series Submersible Waste Water / Sewage Pumps",
    category: "industry",
    image: "/images/products/dacsc.jpg",
    slug: "dac-sc-das-submersible-sewage-pumps",
    usage:
      "Turbosan DAC-SC and DAS Series submersible pumps are designed for pumping sewage and waste water containing solids, ensuring reliable operation in treatment plants and industrial facilities.",
    applications: [
      "Domestic and industrial raw sewage water pumping",
      "Waste water treatment plants",
      "Biological cleaning plants (active sludge)",
      "Settlement pools with floating solids",
      "Industrial and chemical waste water",
      "Rain water drainage",
      "General dewatering in industrial plants",
    ],
    specs: [
      "Submersible sewage pump design",
      "Non-clogging impeller for solids handling",
      "Suitable for wet or dry installation",
      "High efficiency and reliable performance",
      "Manufactured according to CE directive",
      "Recommended periodic operation every 25–30 days if idle",
    ],
    specifications: [
      { label: "Power Range", value: "3 kW – 400 kW" },
      { label: "Max. Flow Rate", value: "3 – 800 l/s" },
      { label: "Max. Total Head", value: "2 – 60 m" },
      { label: "Max. Solid Size", value: "Ø 30 – Ø 200 mm" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
    ],
    material: {
      mode: "simple",
      items: [
        {
          part: "Motor casing - volute casing",
          material: "Cast iron GG-25 (EN-JL 1040)",
        },
        { part: "Impeller", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Shaft", material: "Stainless steel (1.4021)" },
        { part: "Bolts - Nuts", material: "Stainless steel" },
        { part: "Mechanical seal", material: "SIC/SIC" },
        { part: "Cable", material: "H07RN-F" },
        { part: "Primer coating", material: "Epoxy primer" },
        { part: "Final coating", material: "Coal tar epoxy paint" },
        { part: "Inner surface coating", material: "Rapid primer" },
      ],
    },
  },
  {
    name: "DAC-SC and DAS Series Submersible Waste Water / Sewage Pumps",
    category: "water",
    image: "/images/products/dacsc.jpg",
    slug: "dac-sc-das-submersible-sewage-pumps",
    usage:
      "Turbosan DAC-SC and DAS Series submersible pumps are designed for pumping sewage and waste water containing solids, ensuring reliable operation in treatment plants and industrial facilities.",
    applications: [
      "Domestic and industrial raw sewage water pumping",
      "Waste water treatment plants",
      "Biological cleaning plants (active sludge)",
      "Settlement pools with floating solids",
      "Industrial and chemical waste water",
      "Rain water drainage",
      "General dewatering in industrial plants",
    ],
    specs: [
      "Submersible sewage pump design",
      "Non-clogging impeller for solids handling",
      "Suitable for wet or dry installation",
      "High efficiency and reliable performance",
      "Manufactured according to CE directive",
      "Recommended periodic operation every 25–30 days if idle",
    ],
    specifications: [
      { label: "Power Range", value: "3 kW – 400 kW" },
      { label: "Max. Flow Rate", value: "3 – 800 l/s" },
      { label: "Max. Total Head", value: "2 – 60 m" },
      { label: "Max. Solid Size", value: "Ø 30 – Ø 200 mm" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
    ],
    material: {
      mode: "simple",
      items: [
        {
          part: "Motor casing - volute casing",
          material: "Cast iron GG-25 (EN-JL 1040)",
        },
        { part: "Impeller", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Shaft", material: "Stainless steel (1.4021)" },
        { part: "Bolts - Nuts", material: "Stainless steel" },
        { part: "Mechanical seal", material: "SIC/SIC" },
        { part: "Cable", material: "H07RN-F" },
        { part: "Primer coating", material: "Epoxy primer" },
        { part: "Final coating", material: "Coal tar epoxy paint" },
        { part: "Inner surface coating", material: "Rapid primer" },
      ],
    },
  },
  {
    name: "CAP Series Sewage and Waste Water Pumps",
    category: "industry",
    image: "/images/products/cap.jpg",
    slug: "cap-series-sewage-pumps",
    usage:
      "Designed for heavy‑duty sewage and wastewater applications, CAP Series pumps handle viscous liquids and solids with ease. They provide continuous, trouble‑free operation for municipal and industrial treatment plants.",
    applications: [
      "Waste water treatment plants",
      "Industrial facilities",
      "Residential buildings",
      "Domestic and industrial raw sewage water pumping",
    ],
    specs: [
      "Centrifugal sewage and waste water pump design",
      "Handles high viscosity liquids and suspensions",
      "Available in different mounting types",
      "High efficiency and robust construction",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 400 kW" },
      { label: "Max. Flow Rate", value: "Up to 800 l/s" },
      { label: "Max. Total Head", value: "Up to 60 m" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
      { label: "Max. Solid Size", value: "Ø 30 – Ø 200 mm" },
    ],
    material: {
      mode: "simple",
      items: [
        { part: "Pump casing", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Impeller", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Shaft", material: "Stainless steel (1.4021)" },
        { part: "Bolts - Nuts", material: "Stainless steel" },
        { part: "Mechanical seal", material: "SIC/SIC" },
        { part: "Cable", material: "H07RN-F" },
        { part: "Primer coating", material: "Epoxy primer" },
        { part: "Final coating", material: "Coal tar epoxy paint" },
        { part: "Inner surface coating", material: "Rapid primer" },
      ],
    },
  },
  {
    name: "CAP Series Sewage and Waste Water Pumps",
    category: "water",
    image: "/images/products/cap.jpg",
    slug: "cap-series-sewage-pumps",
    usage:
      "Designed for heavy‑duty sewage and wastewater applications, CAP Series pumps handle viscous liquids and solids with ease. They provide continuous, trouble‑free operation for municipal and industrial treatment plants.",
    applications: [
      "Waste water treatment plants",
      "Industrial facilities",
      "Residential buildings",
      "Domestic and industrial raw sewage water pumping",
    ],
    specs: [
      "Centrifugal sewage and waste water pump design",
      "Handles high viscosity liquids and suspensions",
      "Available in different mounting types",
      "High efficiency and robust construction",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 400 kW" },
      { label: "Max. Flow Rate", value: "Up to 800 l/s" },
      { label: "Max. Total Head", value: "Up to 60 m" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
      { label: "Max. Solid Size", value: "Ø 30 – Ø 200 mm" },
    ],
    material: {
      mode: "simple",
      items: [
        { part: "Pump casing", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Impeller", material: "Cast iron GG-25 (EN-JL 1040)" },
        { part: "Shaft", material: "Stainless steel (1.4021)" },
        { part: "Bolts - Nuts", material: "Stainless steel" },
        { part: "Mechanical seal", material: "SIC/SIC" },
        { part: "Cable", material: "H07RN-F" },
        { part: "Primer coating", material: "Epoxy primer" },
        { part: "Final coating", material: "Coal tar epoxy paint" },
        { part: "Inner surface coating", material: "Rapid primer" },
      ],
    },
  },
  {
    name: "KAT Series Horizontal Multi Stage Pumps",
    category: "industry",
    image: "/images/products/kat.jpg",
    slug: "kat-series-horizontal-multi-stage-pumps",
    usage:
      "Multi‑stage horizontal pumps designed for high‑pressure applications such as boiler feed and industrial water supply. KAT Series combines superior efficiency with rugged durability for continuous service.",
    applications: [
      "Boiler feed",
      "Industry",
      "Energy facilities",
      "Water supply in buildings and irrigation",
    ],
    specs: [
      "Horizontal multi-stage centrifugal pump design",
      "Closed type impellers and diffusers",
      "Suitable for clean water and low viscosity liquids",
      "High pressure capability",
      "Robust construction for industrial use",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 400 kW" },
      { label: "Max. Flow Rate", value: "Up to 500 m³/hr" },
      { label: "Max. Total Head", value: "Up to 600 m" },
      { label: "Liquid Temperature", value: "0°C – 105°C" },
    ],
    material: {
      mode: "simple",
      items: [
        { part: "Pump casing", material: "Cast iron GG-25 (EN-JL 1040)" },
        {
          part: "Impellers",
          material: "Cast iron / Bronze / Stainless steel (depending on model)",
        },
        { part: "Shaft", material: "Stainless steel (1.4021)" },
        { part: "Bolts - Nuts", material: "Stainless steel" },
        { part: "Mechanical seal", material: "SIC/SIC" },
        { part: "Coating", material: "Epoxy primer + Coal tar epoxy paint" },
      ],
    },
  },
  {
    name: "EKS Series Axial And Mixed Flow Pumps",
    category: "water",
    image: "/images/products/eks.jpg",
    slug: "eks-series-axial-mixed-flow-pumps",
    usage:
      "Perfect for potable water supply and irrigation, EKS Series pumps deliver extremely high flow at low head. Energy‑efficient and robust, they are trusted for city water networks and agricultural projects.",
    applications: [
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
      "Cooling water",
      "Fish farms",
    ],
    specs: [
      "Vertical suspended construction",
      "Column pipe design",
      "High capacity with low discharge head",
      "Suitable for clean water and irrigation",
      "Robust design for continuous operation",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 1500 kW" },
      { label: "Max. Flow Rate", value: "Up to 25,000 m³/hr" },
      { label: "Max. Total Head", value: "Up to 30 m" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
    ],
  },
  {
    name: "EKS Series Axial And Mixed Flow Pumps",
    category: "agriculture",
    image: "/images/products/eks.jpg",
    slug: "eks-series-axial-mixed-flow-pumps",
    usage:
      "Perfect for potable water supply and irrigation, EKS Series pumps deliver extremely high flow at low head. Energy‑efficient and robust, they are trusted for city water networks and agricultural projects.",
    applications: [
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
      "Cooling water",
      "Fish farms",
    ],
    specs: [
      "Vertical suspended construction",
      "Column pipe design",
      "High capacity with low discharge head",
      "Suitable for clean water and irrigation",
      "Robust design for continuous operation",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 1500 kW" },
      { label: "Max. Flow Rate", value: "Up to 25,000 m³/hr" },
      { label: "Max. Total Head", value: "Up to 30 m" },
      { label: "Liquid Temperature", value: "0°C – 40°C" },
    ],
  },
  {
    name: "Process Series Pumps",
    category: "industry",
    image: "/images/products/process.jpg",
    slug: "process-series-pumps",
    usage:
      "Turbosan Process Series pumps are single-stage, end-suction, open impeller, volute type pumps designed for low and medium discharge pressure applications with high efficiency.",
    applications: [
      "Industrial water pumping",
      "Chemical plants",
      "Refineries",
      "Food processing",
      "Petrochemical plants",
      "Paper and pulp industry",
      "Pumping of low viscosity fluids",
      "Industrial process water containing solids with limited dimensions",
    ],
    specs: [
      "Single-stage, end-suction design",
      "Open impeller for solids handling",
      "Volute type construction",
      "High efficiency operation",
      "Suitable for low and medium discharge pressures",
    ],
    specifications: [
      { label: "Power Range", value: "Up to 400 kW" },
      { label: "Max. Flow Rate", value: "Up to 1,500 m³/hr" },
      { label: "Max. Total Head", value: "Up to 100 m" },
      { label: "Liquid Temperature", value: "0°C – 90°C" },
    ],
  },
  {
    name: "NORM-HP Series Hot Water Pumps",
    category: "industry",
    image: "/images/products/normHp.jpg",
    slug: "norm-hp-series-hot-water-pumps",
    usage:
      "Reliable hot water circulation pumps for industrial heating and boiler feed. NORM‑HP Series is engineered for high‑temperature performance, offering consistent efficiency and durability.",
    applications: [
      "Boiler feed",
      "Hot & cold water and coolant circulation",
      "Residential buildings",
      "Industry",
    ],
    specs: [
      "Horizontal, single stage centrifugal pump",
      "Closed impeller design",
      "Heavy-duty bearings with oil lubrication",
      "Mechanical seal cooled externally",
    ],
    specifications: [
      { label: "Capacity", value: "up to 1000 m³/h" },
      { label: "Head", value: "15 – 90 m" },
      { label: "Temperature", value: "up to +230 °C" },
      { label: "Discharge Size", value: "Ø50 – Ø250 mm" },
    ],
  },
  {
    name: "API 610 Process Pumps",
    category: "industry",
    image: "/images/products/api610.jpg",
    slug: "api-610-process-pumps",
    usage:
      "Engineered to meet API 610 standards, these pumps deliver reliable performance in refineries, petrochemical plants, and power stations. Built for demanding environments, they ensure safety, durability, and efficiency.",
    applications: [
      "Industry",
      "Chemical and petrochemical plants",
      "Energy facilities",
      "Power plants",
    ],
    specs: [
      "API 610 compliant design",
      "Single stage, end suction",
      "Available in multiple material classes",
    ],
    specifications: [
      { label: "Capacity", value: "50 – 1000 m³/h" },
      { label: "Head", value: "15 – 90 m" },
      { label: "Temperature", value: "up to +230 °C" },
      { label: "Discharge Size", value: "Ø50 – Ø250 mm" },
    ],
  },
  {
    name: "KYP Series Hot Oil Pumps",
    category: "industry",
    image: "/images/products/kyp.jpg",
    slug: "kyp-series-hot-oil-pumps",
    usage:
      "Specially built for thermal oil circulation, KYP Series pumps withstand temperatures up to 300°C. They ensure safe, efficient, and long‑lasting operation in industrial hot oil systems.",
    applications: [
      "Industry",
      "Energy facilities",
      "Chemical and petrochemical plants",
      "Power plants",
    ],
    specs: [
      "Designed for thermal oil circulation",
      "Handles temperatures up to 300°C",
      "Reliable sealing system for safety",
      "High efficiency and durable construction",
    ],
    specifications: [
      { label: "Capacity", value: "up to 400 m³/h" },
      { label: "Head", value: "up to 90 m" },
      { label: "Temperature", value: "up to +300 °C" },
    ],
  },
  {
    name: "DAC-E/K Series Submersible Pumps With Tube",
    category: "water",
    image: "/images/products/dacek.jpg",
    slug: "dac-e-k-series-submersible-pumps",
    usage:
      "High‑capacity submersible pumps for irrigation and cooling water systems. DAC‑E/K Series delivers massive flow rates with dependable performance, making them ideal for large‑scale water management projects.",
    applications: [
      "Agricultural irrigation and sprinkler systems",
      "Cooling water",
      "Water supply in buildings and irrigation",
      "Fish farms",
      "Dewatering",
    ],
    specs: [
      "Vertical suspended construction",
      "Column pipe design",
      "High capacity with low head",
    ],
    specifications: [
      { label: "Capacity", value: "up to 25,000 m³/h" },
      { label: "Head", value: "up to 30 m" },
      { label: "Temperature", value: "0 – 40 °C" },
    ],
  },
  {
    name: "DAC-E/K Series Submersible Pumps With Tube",
    category: "agriculture",
    image: "/images/products/dacek.jpg",
    slug: "dac-e-k-series-submersible-pumps",
    usage:
      "High‑capacity submersible pumps for irrigation and cooling water systems. DAC‑E/K Series delivers massive flow rates with dependable performance, making them ideal for large‑scale water management projects.",
    applications: [
      "Agricultural irrigation and sprinkler systems",
      "Cooling water",
      "Water supply in buildings and irrigation",
      "Fish farms",
      "Dewatering",
    ],
    specs: [
      "Vertical suspended construction",
      "Column pipe design",
      "High capacity with low head",
    ],
    specifications: [
      { label: "Capacity", value: "up to 25,000 m³/h" },
      { label: "Head", value: "up to 30 m" },
      { label: "Temperature", value: "0 – 40 °C" },
    ],
  },
  {
    name: "Submersible Drainage Sewage Pumps",
    category: "building",
    image: "/images/products/drainage-sewage.jpg",
    slug: "submersible-drainage-sewage-pumps",
    usage:
      "Portable submersible pumps for drainage of basements, garages, pools, and rainwater.",
    applications: ["Basements", "Garages", "Pools", "Rainwater drainage"],
    specs: [
      "Portable submersible design",
      "Suitable for clean/dirty water without abrasives",
    ],
    specifications: [
      { label: "Capacity", value: "up to 50 m³/h" },
      { label: "Head", value: "up to 20 m" },
      { label: "Temperature", value: "0 – 40 °C" },
    ],
  },
  {
    name: "DAS Series Submersible Waste Water and Sewage Pumps",
    category: "industry",
    image: "/images/products/das.jpg",
    slug: "das-series-submersible-sewage-pumps",
    usage:
      "Reliable submersible pumps for sewage and wastewater containing solids. DAS Series ensures uninterrupted operation in industrial facilities and municipal treatment plants, with non‑clogging design and easy service.",
    applications: [
      "Domestic and industrial raw sewage water pumping",
      "Waste water treatment plants",
      "Biological cleaning plants (active sludge)",
      "Settlement pools with floating solids",
      "Industrial and chemical waste water",
      "Rain water drainage",
      "General dewatering in industrial plants",
    ],
    specs: [
      "Non-clogging impeller",
      "Handles solids up to Ø200 mm",
      "Continuous duty operation",
    ],
    specifications: [
      { label: "Capacity", value: "3 – 800 l/s" },
      { label: "Head", value: "2 – 60 m" },
      { label: "Power", value: "3 – 400 kW" },
      { label: "Temperature", value: "up to 50 °C" },
    ],
  },
  {
    name: "DAS Series Submersible Waste Water and Sewage Pumps",
    category: "water",
    image: "/images/products/das.jpg",
    slug: "das-series-submersible-sewage-pumps",
    usage:
      "Reliable submersible pumps for sewage and wastewater containing solids. DAS Series ensures uninterrupted operation in industrial facilities and municipal treatment plants, with non‑clogging design and easy service.",
    applications: [
      "Domestic and industrial raw sewage water pumping",
      "Waste water treatment plants",
      "Biological cleaning plants (active sludge)",
      "Settlement pools with floating solids",
      "Industrial and chemical waste water",
      "Rain water drainage",
      "General dewatering in industrial plants",
    ],
    specs: [
      "Non-clogging impeller",
      "Handles solids up to Ø200 mm",
      "Continuous duty operation",
    ],
    specifications: [
      { label: "Capacity", value: "3 – 800 l/s" },
      { label: "Head", value: "2 – 60 m" },
      { label: "Power", value: "3 – 400 kW" },
      { label: "Temperature", value: "up to 50 °C" },
    ],
  },
  {
    name: "PARPO Series Submersible Pumps With Grinder Blade",
    category: "building",
    image: "/images/products/parpo.jpg",
    slug: "parpo-series-submersible-pumps",
    usage:
      "Heavy‑duty submersible pumps equipped with grinder blades, designed to handle sewage and wastewater with solids. PARPO Series ensures reliable operation in municipal, residential, and agricultural applications where clogging risk is high.",
    applications: [
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
      "Cooling water",
      "Fish farms",
      "Domestic and industrial raw sewage water pumping",
      "Waste water treatment plants",
    ],
    specs: [
      "Equipped with grinder blade for solids handling",
      "Heavy-duty submersible design",
      "Non-clogging impeller for reliable operation",
      "Suitable for municipal and industrial wastewater",
      "High efficiency with easy maintenance",
    ],
    specifications: [
      { label: "Capacity", value: "up to 20 l/s" },
      { label: "Head", value: "up to 40 m" },
      { label: "Temperature", value: "0 – 40 °C" },
    ],
  },
  {
    name: "Blok Norm Pumps",
    category: "industry",
    image: "/images/products/blok.jpg",
    slug: "blok-norm-pumps",
    usage:
      "Compact yet powerful, Blok Norm Pumps are the perfect solution for industrial water supply, building systems, and irrigation. Easy to maintain and space‑saving, they combine efficiency with reliability.",
    applications: [
      "Industry",
      "Residential buildings",
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
    ],
    specs: ["Compact block design", "Closed impeller", "EN 733 compliant"],
    specifications: [
      { label: "Capacity", value: "up to 2000 m³/h" },
      { label: "Head", value: "up to 160 m" },
      { label: "Temperature", value: "-10 – +105 °C" },
    ],
  },
  {
    name: "Blok Norm Pumps",
    category: "water",
    image: "/images/products/blok.jpg",
    slug: "blok-norm-pumps",
    usage:
      "Compact yet powerful, Blok Norm Pumps are the perfect solution for industrial water supply, building systems, and irrigation. Easy to maintain and space‑saving, they combine efficiency with reliability.",
    applications: [
      "Industry",
      "Residential buildings",
      "Water supply in buildings and irrigation",
      "Agricultural irrigation and sprinkler systems",
    ],
    specs: ["Compact block design", "Closed impeller", "EN 733 compliant"],
    specifications: [
      { label: "Capacity", value: "up to 2000 m³/h" },
      { label: "Head", value: "up to 160 m" },
      { label: "Temperature", value: "-10 – +105 °C" },
    ],
  },
];

export type Product = {
  name: string;
  category: string;
  image: string;
  slug: string;
  usage: string;
  applications?: string[];
  specs: string[];
  specifications?: { label: string; value: string }[];
  material?: { part: string; material: string }[];
};

export const products: Product[] = [
  // Industrial Pumps (12)
  {
    name: "BC Pump",
    category: "industrial",
    image: "/images/products/industrial/bc-pump.jpg",
    slug: "bc-pump",
    usage: "General industrial water supply and circulation.",
    applications: ["Industrial", "Domestic", "Irrigation", "Agriculture", "Farms"],
    specs: ["High operating efficiency", "Durable construction", "Designed for wide voltage operation", "Easy maintenance", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "0.75 kW – 1.5 kW" },
      { label: "Voltage", value: "220V, 50Hz" },
      { label: "Max Head", value: "214 m" },
      { label: "Max Flow Rate", value: "0.9 lps (3.4 m³/h)" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Diffuser Chamber", material: "Noryl" },
      { part: "Pump Shaft", material: "SS-304 / 431 / 410" },
      { part: "Motor Base", material: "Cast Iron" },
      { part: "Shaft", material: "SS 431" },
    ],
  },
  {
    name: "China SCP Split Case",
    category: "industrial",
    image: "/images/products/industrial/china-scp-split-case.jpg",
    slug: "china-scp-split-case",
    usage: "Large flow applications such as HVAC and fire fighting.",
    applications: ["Industrial", "HVAC", "Fire Fighting"],
    specs: ["Large flow capacity", "Durable construction", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "5 kW – 20 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Close Coupling MMP",
    category: "industrial",
    image: "/images/products/industrial/close-coupling-mmp.jpg",
    slug: "close-coupling-mmp",
    usage: "Compact pump for small industrial systems.",
    applications: ["Industrial", "Domestic"],
    specs: ["Compact design", "Easy installation"],
    specifications: [
      { label: "Power Range", value: "0.5 kW – 2 kW" },
      { label: "Voltage", value: "220V" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },
  {
    name: "End Suction MES MMB",
    category: "industrial",
    image: "/images/products/industrial/end-suction-mes-mmb.jpg",
    slug: "end-suction-mes-mmb",
    usage: "Standard end suction pump for water transfer.",
    applications: ["Industrial", "Domestic"],
    specs: ["Durable construction", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1 kW – 5 kW" },
      { label: "Voltage", value: "220V" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "End Suction Norm",
    category: "industrial",
    image: "/images/products/industrial/end-suction-norm.jpg",
    slug: "end-suction-norm",
    usage: "General purpose end suction pump.",
    applications: ["Industrial", "Domestic"],
    specs: ["Easy maintenance", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1 kW – 3 kW" },
      { label: "Voltage", value: "220V" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },
  {
    name: "Horizontal MH MHI MBI MBN",
    category: "industrial",
    image: "/images/products/industrial/horizontal-mh-mhi-mbi-mbn.jpg",
    slug: "horizontal-mh-mhi-mbi-mbn",
    usage: "Horizontal multistage pump for high pressure.",
    applications: ["Industrial", "High Pressure"],
    specs: ["High operating efficiency", "Durable construction"],
    specifications: [
      { label: "Power Range", value: "2 kW – 10 kW" },
      { label: "Voltage", value: "380V" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Monobloc MB MBS",
    category: "industrial",
    image: "/images/products/industrial/monobloc-mb-mbs.jpg",
    slug: "monobloc-mb-mbs",
    usage: "Compact monobloc pump for industrial water.",
    applications: ["Industrial", "Domestic"],
    specs: ["Compact design", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1 kW – 3 kW" },
      { label: "Voltage", value: "220V" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },
  {
    name: "Multistage KAT",
    category: "industrial",
    image: "/images/products/industrial/multistage-kat.jpg",
    slug: "multistage-kat",
    usage: "High pressure multistage pump for process industries.",
    applications: ["Industrial", "Process"],
    specs: ["High pressure", "Durable construction"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Single Stage MEP",
    category: "industrial",
    image: "/images/products/industrial/single-stage-mep.jpg",
    slug: "single-stage-mep",
    usage: "Single stage pump for general water transfer.",
    applications: ["Industrial", "Domestic"],
    specs: ["Easy maintenance", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1 kW – 4 kW" },
      { label: "Voltage", value: "220V" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },
  {
    name: "Split Case CEP",
    category: "industrial",
    image: "/images/products/industrial/split-case-cep.jpg",
    slug: "split-case-cep",
    usage: "High capacity split case pump.",
    applications: ["Industrial", "HVAC"],
    specs: ["High capacity", "Durable construction"],
    specifications: [
      { label: "Power Range", value: "5 kW – 25 kW" },
      { label: "Voltage", value: "380V" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Split Case HS HT",
    category: "industrial",
    image: "/images/products/industrial/split-case-hs-ht.jpg",
    slug: "split-case-hs-ht",
    usage: "Heavy duty split case pump for large installations.",
    applications: ["Industrial", "HVAC"],
    specs: ["Heavy duty", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "10 kW – 30 kW" },
      { label: "Voltage", value: "380V" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Self Priming Pump MSP",
    category: "industrial",
    image: "/images/products/industrial/self-priming-pump-msp.jpg",
    slug: "self-priming-pump-msp",
    usage: "Self-priming pump for drainage and wastewater.",
    applications: ["Industrial", "Drainage", "Wastewater"],
    specs: ["Self-priming", "Robust design", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1.5 kW – 7.5 kW" },
      { label: "Voltage", value: "220/380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },

  // Booster Pumps (2)
  {
    name: "Drive Booster Package",
    category: "booster",
    image: "/images/products/booster/drive-booster-package.jpg",
    slug: "drive-booster-package",
    usage: "Pressure boosting for high-rise buildings.",
    applications: ["Domestic", "Commercial", "High-rise"],
    specs: ["Stable pressure", "Energy efficient", "Low noise"],
    specifications: [
      { label: "Power Range", value: "2 kW – 10 kW" },
      { label: "Voltage", value: "220/380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "SS-304" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Silent Booster MSS",
    category: "booster",
    image: "/images/products/booster/silent-booster-mss.jpg",
    slug: "silent-booster-mss",
    usage: "Low-noise booster system.",
    applications: ["Domestic", "Industrial", "Commercial"],
    specs: [
      "Low noise operation",
      "Compact design",
      "Durable construction",
      "Continuous duty",
    ],
    specifications: [
      { label: "Power Range", value: "1.5 kW – 3.0 kW" },
      { label: "Voltage", value: "220V, 50Hz" },
      { label: "Max Head", value: "120 m" },
      { label: "Max Flow Rate", value: "2.5 lps (9 m³/h)" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-304" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },

  // Fire Fighting (2)
  {
    name: "Fire Pump Sets",
    category: "fire",
    image: "/images/products/fire/fire-pump-sets.jpg",
    slug: "fire-pump-sets",
    usage: "Reliable fire protection pump systems for industrial buildings.",
    applications: ["Fire protection", "Industrial", "Commercial"],
    specs: [
      "Compliant with NFPA standards",
      "Electric / Diesel driven options",
      "High reliability in emergency operation",
    ],
    specifications: [
      { label: "Power Range", value: "7.5 kW – 30 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "ULFM Fire Pump",
    category: "fire",
    image: "/images/products/fire/ulfm-fire-pump.jpg",
    slug: "ulfm-fire-pump",
    usage: "UL/FM certified fire pump.",
    applications: ["Fire protection", "Industrial", "Commercial"],
    specs: [
      "UL/FM approval",
      "High reliability",
      "Durable construction",
      "Continuous duty",
    ],
    specifications: [
      { label: "Power Range", value: "5.0 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
      { label: "Max Head", value: "150 m" },
      { label: "Max Flow Rate", value: "10 lps (36 m³/h)" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
      { part: "Motor Base", material: "Cast Iron" },
    ],
  },

  // Sewage & Wastewater (9)
  {
    name: "Sewage CAP",
    category: "sewage",
    image: "/images/products/sewage/sewage-cap.jpg",
    slug: "sewage-cap",
    usage: "Submersible sewage pump for domestic use.",
    applications: ["Domestic", "Wastewater", "Drainage"],
    specs: ["Submersible design", "Clog-resistant", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "0.75 kW – 2.2 kW" },
      { label: "Voltage", value: "220V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage DAC SC Y",
    category: "sewage",
    image: "/images/products/sewage/sewage-dac-sc-y.jpg",
    slug: "sewage-dac-sc-y",
    usage: "Industrial sewage pump with cutter.",
    applications: ["Industrial", "Wastewater", "Drainage"],
    specs: ["Cutter impeller", "Heavy duty motor", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1.5 kW – 5.5 kW" },
      { label: "Voltage", value: "220/380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage DAS",
    category: "sewage",
    image: "/images/products/sewage/sewage-das.jpg",
    slug: "sewage-das",
    usage: "General sewage transfer.",
    applications: ["Domestic", "Industrial", "Wastewater"],
    specs: ["Clog-resistant", "Robust construction", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1.1 kW – 4 kW" },
      { label: "Voltage", value: "220/380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage DSB DHS",
    category: "sewage",
    image: "/images/products/sewage/sewage-dsb-dhs.jpg",
    slug: "sewage-dsb-dhs",
    usage: "High flow sewage pump.",
    applications: ["Municipal", "Industrial", "Wastewater"],
    specs: ["Large capacity", "Continuous duty", "Robust motor"],
    specifications: [
      { label: "Power Range", value: "3 kW – 11 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage Grinder PARPO",
    category: "sewage",
    image: "/images/products/sewage/sewage-grinder-parpo.jpg",
    slug: "sewage-grinder-parpo",
    usage: "Grinder pump for sewage with solids.",
    applications: ["Industrial", "Wastewater", "Drainage"],
    specs: ["Grinder impeller", "Handles tough solids", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "2.2 kW – 7.5 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage Large MSL",
    category: "sewage",
    image: "/images/products/sewage/sewage-large-msl.jpg",
    slug: "sewage-large-msl",
    usage: "Large sewage pump for municipal systems.",
    applications: ["Municipal", "Industrial", "Wastewater"],
    specs: ["High capacity", "Robust design", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "5.5 kW – 22 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Sewage MS",
    category: "sewage",
    image: "/images/products/sewage/sewage-ms.jpg",
    slug: "sewage-ms",
    usage: "Compact sewage pump.",
    applications: ["Domestic", "Wastewater", "Drainage"],
    specs: ["Easy installation", "Reliable motor", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "0.75 kW – 2.2 kW" },
      { label: "Voltage", value: "220V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage Submersible",
    category: "sewage",
    image: "/images/products/sewage/sewage-submersible.jpg",
    slug: "sewage-submersible",
    usage: "Submersible sewage pump.",
    applications: ["Domestic", "Industrial", "Wastewater"],
    specs: ["Waterproof motor", "Continuous operation", "Clog-resistant"],
    specifications: [
      { label: "Power Range", value: "1.1 kW – 5.5 kW" },
      { label: "Voltage", value: "220/380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Sewage XD Series",
    category: "sewage",
    image: "/images/products/sewage/sewage-xd-series.jpg",
    slug: "sewage-xd-series",
    usage: "Heavy duty sewage pump series.",
    applications: ["Industrial", "Municipal", "Wastewater"],
    specs: ["Multiple models", "High durability", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },

  // Vertical & Inline Pumps (6)
  {
    name: "Vertical Centrifugal MIP",
    category: "vertical-inline",
    image: "/images/products/vertical-inline/vertical-centrifugal-mip.jpg",
    slug: "vertical-centrifugal-mip",
    usage: "Vertical centrifugal inline pump for general water circulation.",
    applications: ["HVAC", "Industrial", "Circulation"],
    specs: ["Compact footprint", "Inline design", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1.5 kW – 7.5 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-304" },
    ],
  },
  {
    name: "Vertical Inline MIL",
    category: "vertical-inline",
    image: "/images/products/vertical-inline/vertical-inline-mil.jpg",
    slug: "vertical-inline-mil",
    usage: "Inline pump suitable for HVAC and chilled water systems.",
    applications: ["HVAC", "Chilled Water", "Industrial"],
    specs: ["Energy efficient", "Easy installation", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "2.2 kW – 11 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Vertical Multistage MV MVI MVN",
    category: "vertical-inline",
    image:
      "/images/products/vertical-inline/vertical-multistage-mv-mvi-mvn.jpg",
    slug: "vertical-multistage-mv-mvi-mvn",
    usage: "Multistage vertical inline pump for high pressure applications.",
    applications: ["Industrial", "Process", "High Pressure"],
    specs: ["High head", "Multiple impellers", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "SS-304" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Vertical Multistage MV MVI",
    category: "vertical-inline",
    image: "/images/products/vertical-inline/vertical-multistage-mv-mvi.jpg",
    slug: "vertical-multistage-mv-mvi",
    usage: "Compact multistage inline pump for industrial use.",
    applications: ["Industrial", "Process", "Circulation"],
    specs: ["Durable casing", "Continuous duty", "Compact design"],
    specifications: [
      { label: "Power Range", value: "2.2 kW – 11 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "SS-304" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Vertical Multistage Stainless",
    category: "vertical-inline",
    image: "/images/products/vertical-inline/vertical-multistage-stainless.jpg",
    slug: "vertical-multistage-stainless",
    usage: "Stainless steel vertical multistage pump for clean water.",
    applications: ["Clean Water", "Industrial", "Hygienic"],
    specs: ["Corrosion resistant", "Hygienic design", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "1.5 kW – 7.5 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "SS-304" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Vertical Multistage XVM",
    category: "vertical-inline",
    image: "/images/products/vertical-inline/vertical-multistage-xvm.jpg",
    slug: "vertical-multistage-xvm",
    usage: "High efficiency vertical multistage pump for municipal systems.",
    applications: ["Municipal", "Industrial", "High Pressure"],
    specs: ["Robust shaft", "High efficiency", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "SS-304" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },

  // Submersible Pumps (6)
  {
    name: "Mixed Flow Axial DAC",
    category: "submersible",
    image: "/images/products/submersible/mixed-flow-axial-dac.jpg",
    slug: "mixed-flow-axial-dac",
    usage:
      "Submersible mixed flow pump for irrigation, drainage, and flood control.",
    applications: ["Irrigation", "Drainage", "Flood Control"],
    specs: ["High flow capacity", "Axial flow impeller", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "5.5 kW – 22 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Propeller DAC EK",
    category: "submersible",
    image: "/images/products/submersible/propeller-dac-ek.jpg",
    slug: "propeller-dac-ek",
    usage: "Propeller type submersible pump for large water transfer.",
    applications: ["Irrigation", "Drainage", "Large Transfer"],
    specs: [
      "Very high flow rate",
      "Efficient propeller design",
      "Continuous duty",
    ],
    specifications: [
      { label: "Power Range", value: "7.5 kW – 30 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Cast Iron" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Turbine Pump EKS",
    category: "submersible",
    image: "/images/products/submersible/turbine-pump-eks.jpg",
    slug: "turbine-pump-eks",
    usage: "Vertical turbine submersible pump for deep well water supply.",
    applications: ["Deep Well", "Municipal", "Industrial"],
    specs: ["High head capability", "Multiple stages", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Turbine Pump MVP",
    category: "submersible",
    image: "/images/products/submersible/turbine-pump-mvp.jpg",
    slug: "turbine-pump-mvp",
    usage:
      "Submersible turbine pump for municipal and industrial water systems.",
    applications: ["Municipal", "Industrial", "Deep Well"],
    specs: ["Reliable operation", "Handles large volumes", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "4 kW – 18 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Turbine Pump",
    category: "submersible",
    image: "/images/products/submersible/turbine-pump.jpg",
    slug: "turbine-pump",
    usage: "General turbine pump for deep well and high lift applications.",
    applications: ["Deep Well", "Agriculture", "Industrial"],
    specs: ["High efficiency", "Robust shaft and bearings", "Continuous duty"],
    specifications: [
      { label: "Power Range", value: "3 kW – 15 kW" },
      { label: "Voltage", value: "380V, 50Hz" },
    ],
    material: [
      { part: "Impeller", material: "Bronze" },
      { part: "Pump Shaft", material: "SS-316" },
    ],
  },
  {
    name: "Well Pump MP",
    category: "submersible",
    image: "/images/products/submersible/well-pump-mp.jpg",
    slug: "well-pump-mp",
    usage: "Submersible well pump for domestic and agricultural water supply.",
    applications: ["Domestic", "Agriculture", "Deep Well"],
    specs: [
      "Compact design",
      "Continuous duty motor",
      "High operating efficiency",
      "Durable construction",
    ],
    specifications: [
      { label: "Power Range", value: "0.75 kW – 1.5 kW" },
      { label: "Voltage", value: "220V, 50Hz" },
      { label: "Max Head", value: "214 m" },
      { label: "Max Flow Rate", value: "0.9 lps (3.4 m³/h)" },
    ],
    material: [
      { part: "Impeller", material: "Noryl" },
      { part: "Diffuser Chamber", material: "Noryl" },
      { part: "Pump Shaft", material: "SS-304 / 431 / 410" },
      { part: "Motor Base", material: "Cast Iron" },
      { part: "Shaft", material: "SS 431" },
    ],
  },
];

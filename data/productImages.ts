export type ProductImage = {
  slug: string;
  src: string; // đường dẫn trong public
  alt: string;
};

export const productImages: ProductImage[] = [
  // Industrial
  {
    slug: "bc-pump",
    src: "/images/products/industrial/bc-pump.jpg",
    alt: "BC Pump industrial water supply",
  },
  {
    slug: "china-scp-split-case",
    src: "/images/products/industrial/china-scp-split-case.jpg",
    alt: "China SCP Split Case pump",
  },
  {
    slug: "close-coupling-mmp",
    src: "/images/products/industrial/close-coupling-mmp.jpg",
    alt: "Close Coupling MMP pump",
  },
  {
    slug: "end-suction-mes-mmb",
    src: "/images/products/industrial/end-suction-mes-mmb.jpg",
    alt: "End Suction MES MMB pump",
  },
  {
    slug: "end-suction-norm",
    src: "/images/products/industrial/end-suction-norm.jpg",
    alt: "End Suction Norm pump",
  },
  {
    slug: "horizontal-mh-mhi-mbi-mbn",
    src: "/images/products/industrial/horizontal-mh-mhi-mbi-mbn.jpg",
    alt: "Horizontal MH MHI MBI MBN pump",
  },
  {
    slug: "monobloc-mb-mbs",
    src: "/images/products/industrial/monobloc-mb-mbs.jpg",
    alt: "Monobloc MB MBS pump",
  },
  {
    slug: "multistage-kat",
    src: "/images/products/industrial/multistage-kat.jpg",
    alt: "Multistage KAT pump",
  },
  {
    slug: "single-stage-mep",
    src: "/images/products/industrial/single-stage-mep.jpg",
    alt: "Single Stage MEP pump",
  },
  {
    slug: "split-case-cep",
    src: "/images/products/industrial/split-case-cep.jpg",
    alt: "Split Case CEP pump",
  },
  {
    slug: "split-case-hs-ht",
    src: "/images/products/industrial/split-case-hs-ht.jpg",
    alt: "Split Case HS HT pump",
  },
  {
    slug: "self-priming-pump-msp",
    src: "/images/products/industrial/self-priming-pump-msp.jpg",
    alt: "Self Priming Pump MSP",
  },

  // Booster
  {
    slug: "drive-booster-package",
    src: "/images/products/booster/drive-booster-package.jpg",
    alt: "Drive Booster Package",
  },
  {
    slug: "silent-booster-mss",
    src: "/images/products/booster/silent-booster-mss.jpg",
    alt: "Silent Booster MSS",
  },

  // Fire
  {
    slug: "fire-pump-sets",
    src: "/images/products/fire/fire-pump-sets.jpg",
    alt: "Fire Pump Sets",
  },
  {
    slug: "ulfm-fire-pump",
    src: "/images/products/fire/ulfm-fire-pump.jpg",
    alt: "ULFM Fire Pump",
  },

  // Sewage
  {
    slug: "sewage-cap",
    src: "/images/products/sewage/sewage-cap.jpg",
    alt: "Sewage CAP pump",
  },
  {
    slug: "sewage-dac-sc-y",
    src: "/images/products/sewage/sewage-dac-sc-y.jpg",
    alt: "Sewage DAC SC Y pump",
  },
  {
    slug: "sewage-das",
    src: "/images/products/sewage/sewage-das.jpg",
    alt: "Sewage DAS pump",
  },
  {
    slug: "sewage-dsb-dhs",
    src: "/images/products/sewage/sewage-dsb-dhs.jpg",
    alt: "Sewage DSB DHS pump",
  },
  {
    slug: "sewage-grinder-parpo",
    src: "/images/products/sewage/sewage-grinder-parpo.jpg",
    alt: "Sewage Grinder PARPO pump",
  },
  {
    slug: "sewage-large-msl",
    src: "/images/products/sewage/sewage-large-msl.jpg",
    alt: "Sewage Large MSL pump",
  },
  {
    slug: "sewage-ms",
    src: "/images/products/sewage/sewage-ms.jpg",
    alt: "Sewage MS pump",
  },
  {
    slug: "sewage-submersible",
    src: "/images/products/sewage/sewage-submersible.jpg",
    alt: "Sewage Submersible pump",
  },
  {
    slug: "sewage-xd-series",
    src: "/images/products/sewage/sewage-xd-series.jpg",
    alt: "Sewage XD Series pump",
  },

  // Submersible
  {
    slug: "mixed-flow-axial-dac",
    src: "/images/products/submersible/mixed-flow-axial-dac.jpg",
    alt: "Mixed Flow Axial DAC pump",
  },
  {
    slug: "propeller-dac-ek",
    src: "/images/products/submersible/propeller-dac-ek.jpg",
    alt: "Propeller DAC EK pump",
  },
  {
    slug: "turbine-pump-eks",
    src: "/images/products/submersible/turbine-pump-eks.jpg",
    alt: "Turbine Pump EKS",
  },
  {
    slug: "turbine-pump-mvp",
    src: "/images/products/submersible/turbine-pump-mvp.jpg",
    alt: "Turbine Pump MVP",
  },
  {
    slug: "turbine-pump",
    src: "/images/products/submersible/turbine-pump.jpg",
    alt: "Turbine Pump",
  },
  {
    slug: "well-pump-mp",
    src: "/images/products/submersible/well-pump-mp.jpg",
    alt: "Well Pump MP",
  },

  // Vertical & Inline
  {
    slug: "vertical-centrifugal-mip",
    src: "/images/products/vertical-inline/vertical-centrifugal-mip.jpg",
    alt: "Vertical Centrifugal MIP pump",
  },
  {
    slug: "vertical-inline-mil",
    src: "/images/products/vertical-inline/vertical-inline-mil.jpg",
    alt: "Vertical Inline MIL pump",
  },
  {
    slug: "vertical-multistage-mv-mvi-mvn",
    src: "/images/products/vertical-inline/vertical-multistage-mv-mvi-mvn.jpg",
    alt: "Vertical Multistage MV MVI MVN pump",
  },
  {
    slug: "vertical-multistage-mv-mvi",
    src: "/images/products/vertical-inline/vertical-multistage-mv-mvi.jpg",
    alt: "Vertical Multistage MV MVI pump",
  },
  {
    slug: "vertical-multistage-stainless",
    src: "/images/products/vertical-inline/vertical-multistage-stainless.jpg",
    alt: "Vertical Multistage Stainless pump",
  },
  {
    slug: "vertical-multistage-xvm",
    src: "/images/products/vertical-inline/vertical-multistage-xvm.jpg",
    alt: "Vertical Multistage XVM pump",
  },
];

// Helper: lấy ảnh theo slug
export function getImage(slug: string): ProductImage | undefined {
  return productImages.find((p) => p.slug === slug);
}

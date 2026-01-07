"use client";

import { useLanguage } from "@/context/LanguageContext";

type Props = {
  title: string;
  titleVI?: string;
};

export default function CategoryBannerTitle({ title, titleVI }: Props) {
  const { language } = useLanguage();
  const isVI = language === "vi";

  return <span>{isVI && titleVI ? titleVI : title}</span>;
}

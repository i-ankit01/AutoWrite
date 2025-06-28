import React, { JSX } from "react";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";
import {
  BlogIcon,
  LinkTreeLogo,
  LinkedInLogo,
  XLogo,
  YoutubeLogo,
  Help,
  Question,
  Code,
  IdeaLogo,
  FileText,
  NewspaperLogo,
  Email,
  GooglePlay,
} from "@/app/(data)/Icon";

const TemplateCard = ({ item }: { item: TEMPLATE }) => {
  const ICONS: Record<
    string,
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  > = {
    blog: BlogIcon,
    code: Code,
    youtube: YoutubeLogo,
    linktree: LinkTreeLogo,
    linkedin: LinkedInLogo,
    xlogo: XLogo,
    googleplay: GooglePlay,
    email: Email,
    newspaper: NewspaperLogo,
    idea: IdeaLogo,
    filetext: FileText,
    help: Help,
    question: Question,
  };

  const Icon = item?.icon ? ICONS[item.icon] : null;
  return (
    <Link
      href={"/dashboard/content/" + item.slug}
      className="w-72 p-4 md:p-6 rounded-2xl border border-primary backdrop-blur-sm bg-gradient-to-br border-light-primary/10 hover:border-light-primary/20 transition-all duration-300 hover:shadow-lg from-light-primary/20 to-light-secondary/20 hover:scale-102 cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 md:w-17 md:h-17 rounded-xl flex items-center justify-center bg-light-primary/20">
          {Icon && <Icon />}
        </div>
        <h3 className="text-lg md:text-[20px] font-bold mb-1 text-light-tertiary mt-3">
          {item.name}
        </h3>
        <p className="text-xs md:text-sm text-center font-semibold text-light-primary">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default TemplateCard;

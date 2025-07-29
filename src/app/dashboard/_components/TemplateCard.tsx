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
      href={`/dashboard/content/${item.slug}`}
      className="group relative w-72 p-6 rounded-2xl border border-primary/70 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-lg hover:shadow-black-200/20 hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
            {Icon && (
              <Icon className="w-7 h-7 text-slate-600 group-hover:text-slate-700 transition-colors duration-300" />
            )}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
          {item.name}
        </h3>

        <p className="text-sm text-slate-600 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {item.description}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-slate-300/0 group-hover:border-slate-300/30 transition-all duration-500" />
    </Link>
  );
};

export default TemplateCard;

import {
  BiBriefcaseAlt2 as BusinessIcon,
  BiNotepad as NoteIcon,
  BiCoffee as CoffeeIcon,
  BiFile as PDFIcon,
  BiPin as WebsiteIcon,
} from "react-icons/bi";

import { LinkProps } from "../types/link";

export const LINKS: LinkProps[] = [
  {
    label: "Personal Website & Portfolio",
    icon: <WebsiteIcon size={21} className="text-neutral-600" />,
    href: "https://ibrahimelgibran.com",
    className: "bg-emerald-700",
    target: "_blank",
  },
  {
    label: "Resume & Curriculum Vitae",
    icon: <PDFIcon size={21} className="text-neutral-600" />,
    href: "https://drive.google.com/file/d/1p6yqSrLsh35Ze2DUqRDMGm5n5doYAvi0/view",
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "Notes",
    icon: <NoteIcon size={21} className="text-neutral-600" />,
    href: "https://www.ibrahimelgibran.com/notes",
    className: "bg-rose-600",
    target: "_blank",
  },
  {
    label: "Buy me a Food or Drink",
    icon: <CoffeeIcon size={21} className="text-neutral-600" />,
    href: "#",
    className: "bg-neutral-800",
    target: "",
  },
];

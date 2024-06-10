import { TSidebarLink } from "@/types/general.types";
import { BaggageClaim, LayoutDashboard, Settings } from "lucide-react";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/dashboard",
  },
  {
    title: "Products",
    icon: <BaggageClaim />,
    path: "/product",
  },
  {
    title: "Tasks",
    icon: <BaggageClaim />,
    path: "/tasks",
  },
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

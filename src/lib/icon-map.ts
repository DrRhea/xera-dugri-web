import React from "react";
import { Megaphone, Sparkles, Users } from "lucide-react";

export const getIconByName = (iconName: string) => {
  if (iconName === "users") {
    return React.createElement(Users, { className: "h-5 w-5" });
  }
  if (iconName === "megaphone") {
    return React.createElement(Megaphone, { className: "h-5 w-5" });
  }
  return React.createElement(Sparkles, { className: "h-5 w-5" });
};

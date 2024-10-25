import React from "react";
import { Link } from "react-router-dom"; // Adjust this based on your routing setup
import CustomBreadcrumb from "./CutomBreadcrumb";
import { MinusIcon } from "@chakra-ui/icons";

const NavBreadcrumbs = ({ nav }) => {
  // Function to recursively flatten submenu items and add parent titles
  const flattenNav = (items, parentTitle = "") => {
    let breadcrumbs = [];
    items.forEach((item) => {
      if (item.submenu) {
        // Add parent title if present
        breadcrumbs.push({
          label: parentTitle ? `${parentTitle} ${<MinusIcon/>} ${item.title}` : item.title,
          link: null, // Adjust link as per your routing setup
        });
        // Recursively flatten submenu items
        breadcrumbs = [
          ...breadcrumbs,
          ...flattenNav(item.submenu, `${parentTitle} ${<MinusIcon/>} ${item.title}`),
        ];
      } else {
        // If no submenu, add current item as breadcrumb
        breadcrumbs.push({
          label: parentTitle ? `${parentTitle} ${<MinusIcon/>} ${item.title}` : item.title,
          link: item.path, // Adjust link as per your routing setup
        });
      }
    });
    return breadcrumbs;
  };

  // Flatten nav array into breadcrumbs
  const flattenedNav = flattenNav(nav);


  return <CustomBreadcrumb items={flattenedNav} />;
};

export default NavBreadcrumbs;

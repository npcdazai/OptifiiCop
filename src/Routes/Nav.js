import { TbSquareRoundedFilled } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuMousePointerClick } from "react-icons/lu";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";


export const nav = [
  {
    title: "Dashboard",
    type: "single",
    path: "/",
    Icon: AiOutlineHome,
  },
  {
    title: "ANALYTICS",
    type: "title",
  },
  {
    title: "Manage Human Resource",
    Icon: TbAlignBoxBottomCenter,
    path: "/home",
    submenu: [
      {
        title: "Employees",
        path: "/employees",
        icon: TbSquareRoundedFilled,
        colorCode:"#70a1ff"
      },
      {
        title: "Approvers",
        path: "/approvers",
        icon: TbSquareRoundedFilled,
        colorCode:"#7bed9f",
        submenu: [
          {
            title: "Dashboard",
            path: "/employees",
            icon: TbSquareRoundedFilled,
            colorCode:"#70a1ff"
          },
          {
            title: "Approver list", 
            path: "/approvers",
            icon: TbSquareRoundedFilled,
            colorCode:"#7bed9f"
          },
        ],
      },
      {
        title: "Manage department & roles",
        path: "/Manage-roles",
        icon: TbSquareRoundedFilled,
        colorCode:"#7bed9f"
      },
    ],
    type: "accordion",
  },
  {
    title: "OptiFii Expense",
    Icon: RiMoneyDollarBoxLine,
    path: "/home",
    submenu: [
      {
        title: "Dashboard",
        path: "/optiFii-expense-dashboard",
        colorCode:"#70a1ff"
      },
      {
        title: "Wallet program",
        path: "/wallet-program",
        colorCode:"#70a1ff"
      },
      {
        title: "Reimbursement request",
        path: "/reimbursement-request",
        colorCode:"#7bed9f"
      },
      {
        title: "Advance expense request",
        path: "/advance-expense-request",
        colorCode:"#7bed9f"
      },
    ],
    type: "accordion",
  },
  {
    title: "OptiFii Tax Benefit",
    type: "single",
    path: "/optiFii-benefit",
    Icon: LuMousePointerClick,
  },
  // {
  //   title: "OptiFii Gifs & Vouchers",
  //   type: "single",
  //   path: "/optiFii-vouchers",
  //   Icon: LuMousePointerClick,
  // },
  {
    title: "OptiFii Gifs & Vouchers",
    Icon: LuMousePointerClick,
    path: "/home",
    submenu: [
      {
        title: "Dashboard",
        path: "/optifii-gifts-dashboard",
        colorCode:"#70a1ff"
      },
      {
        title: "Gift card",
        path: "/gift-card",
        colorCode:"#70a1ff"
      },
      {
        title: "Brand voucher",
        path: "/brand-voucher",
        colorCode:"#7bed9f"
      },
    ],
    type: "accordion",
  },
  {
    title: "SHOP",
    type: "title",
  },
  {
    title: "Reports",
    type: "single",
    path: "/reports",
    Icon: TbAlignBoxBottomCenter,
  },
  {
    title: "Support & Ticket",
    type: "single",
    path: "/support-ticket",
    Icon: MdOutlineNotifications,
  },
  {
    title: "Notification",
    type: "single",
    path: "/notification",
    Icon: TbAlignBoxBottomCenter,
  },
  {
    title: "Settings",
    type: "single",
    path: "/setting",
    Icon: IoSettingsOutline,
  },
  // {
  //   title: "Settings",
  //   type: "title",
  // },
  // {
  //   title: "Settings",
  //   type: "single",
  //   path: "/settings",
  //   Icon: IoSettingsOutline,
  // },
];

// export const nestedNav = [
//   {
//     title: "MAIN MENU",
//     type: "accordion",
//     accArray: [
//       {
//         title: "Master",
//         submenu: [
//           {
//             title: "Sponser",
//             path: "/sponser",
//             icon: RiMoneyDollarBoxLine,
//           },
//           {
//             title: "Exchange rate",
//             path: "/exchange-rate",
//             icon: RiExchangeBoxLine,
//           },
//           {
//             title: "Asset classes",
//             path: "/view",
//             icon: VscSymbolClass,
//           },
//         ],
//         type: "accordion",
//         Icon: TbBrandMedium,
//       },
//       {
//         title: "User",
//         submenu: [
//           {
//             title: "Sponser",
//             path: "/loop",
//             icon: TbBrandMedium,
//           },
//           {
//             title: "Class",
//             path: "/class",
//             icon: TbBrandMedium,
//           },
//           {
//             title: "View",
//             path: "/view",
//             icon: TbBrandMedium,
//           },
//         ],
//         type: "accordion",
//         Icon: HiOutlineNewspaper,
//       },
//     ],
//   },
//   {
//     title: "User",
//     submenu: [
//       {
//         title: "Sponser",
//         path: "/loop",
//         icon: TbBrandMedium,
//       },
//       {
//         title: "Class",
//         path: "/class",
//         icon: TbBrandMedium,
//       },
//       {
//         title: "View",
//         path: "/view",
//         icon: TbBrandMedium,
//       },
//     ],
//     type: "accordion",
//     Icon: FiUsers,
//   },
//   {
//     title: "SPONSER",
//     type: "title",
//   },
//   {
//     title: "Single Link",
//     type: "single",
//     path: "/",
//     Icon: HiOutlineNewspaper,
//   },
// ];

import Dashbaord from "../Pages/Dashboard/Dashbaord";
import Requests from "../Pages/Requests/Requests";
import Expenses from "../Pages/Expenses/Expenses";
import HelpAndSupport from "../Pages/HelpAndSupport/HelpAndSupport";
import OptiFiiTaxBenefit from "../Pages/OptiFiiTaxBenefit/OptiFiiTaxBenefit";
import OptiFiiGifsAndVouchers from "../Pages/OptiFiiGifsAndVouchers/OptiFiiGifsAndVouchers";
import Report from "../Pages/Report/Report";
import SupportAndTicket from "../Pages/SupportAndTicket/SupportAndTicket";
import Settings from "../Pages/Settings/Settings";
import Employees from "../Pages/ManageHumanResource/Employees";
import Approvers from "../Pages/ManageHumanResource/Approvers";
import WalletProgram from "../Pages/OptiFiiExpense/WalletProgram";
import ReimbursementRequest from "../Pages/OptiFiiExpense/ReimbursementRequest";
import AdvanceExpenseRequest from "../Pages/OptiFiiExpense/AdvanceExpenseRequest";
import ManageDepartmentAndRoles from "../Pages/ManageHumanResource/ManageDepartmentAndRoles/ManageDepartmentAndRoles";
import Department from "../Pages/ManageHumanResource/ManageDepartmentAndRoles/Department";
import Roles from "../Pages/ManageHumanResource/ManageDepartmentAndRoles/Roles";
import OptiFiiExpenseDashboard from "../Pages/OptiFiiExpense/OptiFiiExpenseDashboard";
import GiftCard from "../Pages/OptiFiiGifsAndVouchers/GiftCard";
import ApplicationStatus from "../Pages/OptiFiiGifsAndVouchers/id/ApplicationStatus";
import DigitalApplicationStatus from "../Pages/OptiFiiGifsAndVouchers/id/DigitalApplication";
import CreateWallet from "../Pages/OptiFiiExpense/wallet/CreateWallet";
import GiftDashboard from "../Pages/OptiFiiGifsAndVouchers/GiftDashboard";
import AdvanceExpenseRequestView from "../Pages/OptiFiiExpense/AdvanceExpenseRequestView";
import ReimbursementRequestView from "../Pages/OptiFiiExpense/ReimbursementRequestView";
import EmployeesPullBackFunds from "../Pages/ManageHumanResource/EmployeesPullBackFunds";
import EmployeesView from "../Pages/ManageHumanResource/EmployeesView";
import EmployeesViewRecentReports from "../Pages/ManageHumanResource/EmployeesViewRecentReports";
import EmployeesViewRecentTransaction from "../Pages/ManageHumanResource/EmployeesViewRecentTransaction";
import EmployeesViewRecentReportsView from "../Pages/ManageHumanResource/EmployeesViewRecentReportsView";
import BrandVoucher from "../Pages/OptiFiiGifsAndVouchers/BrandVoucher";
// import ReimbursementRequestView from "../Pages/OptiFiiExpense/ReimbursementRequestView";
// import AdvanceExpenseRequestView from "../Pages/OptiFiiExpense/AdvanceExpenseRequestView";
import BuyVoucher from "../Pages/OptiFiiGifsAndVouchers/BuyVoucher";
import BuySingleVouchers from "../Pages/OptiFiiGifsAndVouchers/BuySingleVouchers";
import Preview from "../Pages/OptiFiiGifsAndVouchers/Preview";
import BrandVoucherTable from "../Pages/OptiFiiGifsAndVouchers/BrandVoucherTable";
import PaymentaVoucher from "../Pages/OptiFiiGifsAndVouchers/Payment/PaymentaVoucher";
import Profile from "../Pages/Profile/Profile";
import WalletsPullBackFunds from "../Pages/ManageHumanResource/WalletsPullBackFunds";
import ViewReports from "../Pages/Report/ViewReports";
import ApplyForGiftCard from "../Pages/OptiFiiGifsAndVouchers/ApplyForGiftCard/ApplyForGiftCard";
import ApplyForDigitalCard from "../Pages/OptiFiiGifsAndVouchers/ApplyForGiftCard/ApplyForDigitalCard";
import BenifitOverView from "../Pages/OptiFiiTaxBenefit/BeinifitOverView";
import ViewTicket from "../Pages/SupportAndTicket/ViewTicket";
import Notification from "../Pages/Notification/Notification";
import WalletRequest from "../Pages/OptiFiiExpense/WalletRequest"
import OnboardingDirectorDetails from "../Pages/Onboarding/OnboardingDirectorDetails";
import BenifitOverViewView from "../Pages/OptiFiiTaxBenefit/BenefitOverviewView";
import BenefitViewFood from "../Pages/OptiFiiTaxBenefit/BenefitViewFood"
import ExpenseOverView from "../Pages/Expenses/ExpenseOverView"
import ExpenseView from "../Pages/Expenses/ExpenseView"

export const RouteLink = [
  { path: "/", Component: Dashbaord },
  { path: "/expenses", Component: Expenses },
  { path: "/requests", Component: Requests },
  { path: "/help-support", Component: HelpAndSupport },
  { path: "/employees", Component: Employees },
  { path: "/approvers", Component: Approvers },
  { path: "/Manage-roles", Component: ManageDepartmentAndRoles },
  { path: "/wallet-program", Component: WalletProgram },
  { path: "/reimbursement-request", Component: ReimbursementRequest },
  { path: "/reimbursement-request-view", Component: ReimbursementRequestView },
  { path: "/advance-expense-request", Component: AdvanceExpenseRequest },
  {path :"/OnboardingDirectorDetails"  , Component : OnboardingDirectorDetails },
  

  // Notification 

  { path: "/notification", Component: Notification },


  {
    path: "/advance-expense-request-view",
    Component: AdvanceExpenseRequestView,
  },
  // { path: "/optiFii-benefit", Component: OptiFiiTaxBenefit },
  { path: "/optiFii-benefit", Component: OptiFiiExpenseDashboard },
  { path: "/optiFii-vouchers", Component: OptiFiiGifsAndVouchers },
  { path: "/reports", Component: Report },
  { path: "/reports/view-report", Component: ViewReports },
  { path: "/support-ticket", Component: SupportAndTicket },
  { path: "/settings", Component: Settings },
  { path: "/department", Component: Department },
  { path: "/roles", Component: Roles },
  { path: "/optiFii-expense-dashboard", Component: OptiFiiExpenseDashboard },
  { path: "/gift-card", Component: GiftCard },
  { path: "/gift-card/application-status", Component: ApplicationStatus },
  {
    path: "/gift-card/digital-application-status",
    Component: DigitalApplicationStatus,
  },
  { path: "/wallet-program/create-wallet", Component: CreateWallet },
  { path: "/employees/pull-back-funds", Component: EmployeesPullBackFunds },
  { path: "/employees/view", Component: EmployeesView },
  {
    path: "/employees/view/recent-reports",
    Component: EmployeesViewRecentReports,
  },
  // { path: "/employees/view/recent-reports/view", Component: EmployeesViewRecentReportsView },
  {
    path: "/employees/view/recent-transaction",
    Component: EmployeesViewRecentTransaction,
  },
  {
    path: "/employees/view/recent-reports",
    Component: EmployeesViewRecentReports,
  },
  {
    path: "/employees/view/recent-reports/view",
    Component: EmployeesViewRecentReportsView,
  },
  {
    path: "/employees/view/recent-transaction",
    Component: EmployeesViewRecentTransaction,
  },
  {
    path: "/employees/view/wallet-pull-back-funds",
    Component: WalletsPullBackFunds,
  },
  {
    path: "/dashboard/beinefit-overview",
    Component: BenifitOverView,
  },
  {
    path:"/dashboard/beinefit-overview/benefit-request/beinefit-overview-view",
    Component :BenifitOverViewView
  },
  {
    path: "/gift-card/digital-application-status",
    Component: DigitalApplicationStatus,
  },
  {
    path: "/dashboard/expense-over-View",
    Component : ExpenseOverView
  },
  {
    path:"/dashboard/expense-over-View/expense-view",
    Component : ExpenseView
  },
  {
    path: "/dashboard/beinefit-overview/benefit-request",
    Component: BenefitViewFood
  },
  { path: "/wallet-program/create-wallet", Component: CreateWallet },
  { path: "/optifii-gifts-dashboard/apply-for-giftcards", Component: ApplyForGiftCard },
  {path :"dashboard/wallet-request",Component : WalletRequest},
  {
    path: "/dashboard/apply-for-giftcards/apply-for-digitalcard",
    Component: ApplyForDigitalCard,
  },
  // =======================[ Gift Voucher ]==============
  { path: "/optifii-gifts-dashboard", Component: GiftDashboard },
  { path: "/brand-voucher", Component: BrandVoucher },
  { path: "/brand-voucher/buy-voucher", Component: BuyVoucher },
  { path: "/brand-voucher/buy-voucher-card", Component: BuySingleVouchers },
  { path: "/brand-voucher/buy-voucher-card/preview", Component: Preview },
  {
    path: "/brand-voucher/buy-voucher-card/preview/Apply-For-GiftCard",
    Component: BrandVoucherTable,
  },
  { path: "/brand-voucher/voucher-payment", Component: PaymentaVoucher },

  // =======================[ Gift Voucher ]==============

  { path: "/profile", Component: Profile },
  { path: "/support-ticket/view-ticket", Component: ViewTicket },
];

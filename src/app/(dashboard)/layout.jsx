import DashboardNav from "./DashboardNav";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <DashboardNav />
      {children}
    </section>
  );
}

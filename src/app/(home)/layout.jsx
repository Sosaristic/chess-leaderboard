import Link from "next/link";
import TopNavBar from "./TopNavBar";

export default function layout({ children }) {
  return (
    <section>
      <header className="mb-2">
        <nav>
          <TopNavBar />
        </nav>
      </header>
      {children}
    </section>
  );
}

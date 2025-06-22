import Navbar from "./navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="relative">{children}</main>
    </div>
  );
}

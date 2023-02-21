import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="text-white">
      <Header />
      <main className="min-h-[calc(100vh-120px)]">{children}</main>
    </div>
  );
}

import { SimpleWidget } from "@/components";
import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Main Page</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetsGrid />
    </div>
  );
}

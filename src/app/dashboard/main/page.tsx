import { SimpleWidget } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Main Page</h1>
      <span className="text-xl">Informacion general</span>
      <div className="flex flex-wrap p-2">
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
      </div>
    </div>
  );
}

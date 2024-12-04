import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/main");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

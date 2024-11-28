import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/counter");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

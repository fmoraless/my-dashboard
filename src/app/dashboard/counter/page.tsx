import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter Page",
  description: "A simple counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en carrito</span>
      <CartCounter value={16} />
    </div>
  );
}

import Image from "next/image";
import Greet from "./components/greet";
import Counter from "./components/counter";

export default function Home() {
  return (
    <>
    <Greet />
    <Counter />
    <h1 className="text-green-700">Welcome to Next.Js</h1>
    </>
  );
}

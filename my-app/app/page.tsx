import Image from "next/image";

// Hot module replacement

// Server components are rendered on server
// Html output sent to client
// Access server side resources directly
export default function Home() {
  console.log("What am I? -- Server");
  return <h1 className="text-3xl">Welcome to next JS</h1>;
}

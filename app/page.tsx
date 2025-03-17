import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-jwBackground bg-[radial-gradient(#21202e_1px,#000000_1px)] bg-[size:20px_20px]">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

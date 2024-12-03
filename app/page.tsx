import Header from "../components/Header";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Gallery />
      </main>
    </div>
  );
}

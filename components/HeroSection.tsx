import { Popcorn, Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative h-[70vh] w-full ">
      <div className="w-5/12 z-10 top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center flex-col mb-4 gap-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-red-500 shadow-lg mb-4">
            <Popcorn className="w-7 h-7" />
          </div>
          <h1 className="text-7xl font-black tracking-tight">Next Movie</h1>
          <p className="text-2xl tracking-tight font-light mb-4 text-santas-gray">
            Discover the latest movies, reviews, and trailers all in one place.
          </p>
        </div>
        <div className="relative h-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-santas-gray" />
          <input
            className="mb-10 w-full h-full rounded-xl pl-10 pr-10 outline-none border-none bg-dark-black"
            placeholder="Search for movies..."
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 opacity-60 absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <Image
              src={`/movie-img/movie-${i + 1}.webp`}
              alt={`Movie ${i + 1}`}
              className="h-full w-full object-cover"
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke via-woodsmoke/80 to-transparent"></div>
      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke/90 via-transparent to-woodsmoke/90"></div>
    </header>
  );
}

"use client";
import HeroSection from "@/components/HeroSection";
import { API_URL, IMAGE_PATH } from "@/constants";
import IMovie from "@/types/movie";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

  const [movies, setMovies] = useState<IMovie[]>([]);

  const faceMobile = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/discover/movie`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      });
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching mobile data:", error);
    }
  }, []);

  useEffect(() => {
    faceMobile();
  }, [faceMobile]);

  return (
    <>
      <HeroSection />
      <div className="flex flex-col m-10 mt-0">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-alabaster mb-3">Popular Right Now</h2>
          <p className="text-lg text-santas-gray">Discover the most popular movies and TV shows currently trending.</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="group">
            <div className="relative overflow-hidden cursor-pointer group rounded-xl">
              <Image src={movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : "/placeholder.jpg"} width={250} height={250} alt={movie.title} className="group-hover:scale-110 duration-500 h-full w-full object-cover"/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
 
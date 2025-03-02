"use client"

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  const router = useRouter();
  const handleRedirectClick = () => router.push(`/fsw-donalds`)
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">fsw-donalds</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <Button 
          variant="destructive" 
          className="w-full rounded-full"
          onClick={handleRedirectClick}
        >
          Clique aqui para entrar
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

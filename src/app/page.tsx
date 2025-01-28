import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";


export const dynamic = "force-dynamic";

async function Images() { 
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
        {images.map((img) => (
          <div key={img.id} className="w-48 h-40 flex flex-col">
            <div className="relative h-32">
              <Image 
                src={img.url}
                className="object-cover"
                alt={img.name}
                fill={true}
              />
            </div>  
            <div className="mt-1">{img.name}</div>
          </div>
        ))}
      </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

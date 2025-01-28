"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    const router = useRouter();
  return (
    <nav className="flex justify-between items-center w-full p-4 text-xl font-semibold border-b p-4 mb-6">
      <div> Test App Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
        <UploadButton 
            endpoint="imageUploader"
            onClientUploadComplete={(metadata) => {
                router.refresh();
            }}    
        />
        <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

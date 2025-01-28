import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex justify-between items-center w-full p-4 text-xl font-semibold border-b p-4 mb-6">
      <div> Test App Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
        <SimpleUploadButton />  
        <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

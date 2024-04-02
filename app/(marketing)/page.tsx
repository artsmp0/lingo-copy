import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex flex-col items-center justify-center lg:flex-row">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src={"/hero.svg"} alt="Hero" fill />
      </div>
      <div className="flex flex-col gap-y-8 w-full items-center">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new languages with Lingo.
        </h1>
        <div className="flex flex-col gap-y-3 max-w-[330px] w-full justify-center align-center">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button size={"lg"} variant={"primaryOutline"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size={"lg"} variant={"secondary"} className="w-full">
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

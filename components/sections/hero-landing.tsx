import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export async function HeroLanding() {

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* Want animations? Check here: https://github.com/mickasmt/next-saas-stripe-starter/blob/76eb9f2b70b29c7a734ff0e5b047796ed2dac28d/app/(marketing)/page.tsx */}
        <h1
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}>

          <span className="mr-3">🚀</span> Powered by OpenAI

        </h1>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Automate faceless shorts videos on{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            Autopilot.
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          
          100% automated. Script, editing, posting.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Go Pricing</span>
            <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

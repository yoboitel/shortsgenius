import Image from "next/image";

export function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <div className="container max-w-7xl">
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <video className="size-full object-cover object-center" autoPlay muted loop>
        <source src="/images/hero.mp4" />
      </video>
          </div>
        </div>
      </div>
    </div>
  );
}

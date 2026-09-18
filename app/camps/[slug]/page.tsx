import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import AccommodationModal from "@/components/AccommodationModal";
import CampMap from "@/components/CampMap";
import { ParallaxImage, Reveal } from "@/components/DetailMotion";
import { camps, getCamp } from "../campData";

type CampPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return camps.map((camp) => ({ slug: camp.slug }));
}

export function generateMetadata({ params }: CampPageProps): Metadata {
  const camp = getCamp(params.slug);

  return {
    title: camp ? `${camp.name} — Mongolia Stays` : "Mongolia Stays",
    description: camp?.description,
  };
}

export default function CampPage({ params }: CampPageProps) {
  const camp = getCamp(params.slug);

  if (!camp) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f2eee5] text-[#211b16]">
      <SmoothScroll />

      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 text-white md:px-10 md:py-8">
        <a
          href="/"
          className="text-[11px] font-semibold uppercase tracking-[.3em]"
        >
          MONGOLIA / STAYS
        </a>
        <a
          href="/"
          className="flex items-center gap-3 text-[9px] uppercase tracking-[.25em] text-white/70 transition-colors hover:text-white"
        >
          <span className="text-base leading-none">←</span> All stays
        </a>
      </header>

      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#26382f] text-white">
        <ParallaxImage
          src={camp.image}
          alt={camp.name}
          className="absolute inset-0 h-full w-full"
          imageClassName="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f]/90 via-[#17120f]/20 to-[#17120f]/25" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-12 pt-40 md:px-10 md:pb-16">
          <div className="flex items-end justify-between gap-8">
            <Reveal>
              <p className="mb-5 text-[10px] uppercase tracking-[.42em] text-[#e5ce9d]/80">
                {camp.number} · {camp.label}
              </p>
              <h1 className="max-w-4xl text-5xl font-medium leading-[.88] tracking-[-.055em] md:text-8xl">
                {camp.name}
              </h1>
            </Reveal>
            <div className="flex h-20 w-20 shrink-0 aspect-square items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-lg md:h-40 md:w-40 md:p-5">
              <img
                src={camp.logo}
                alt={`${camp.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#211b16]/15 px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[.7fr_1.3fr] md:items-center">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.4em] text-[#211b16]/45">
              01 · The experience
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[.2em] text-[#b89a67]">
              {camp.region} · {camp.country}
            </p>
          </Reveal>
          <Reveal>
            <h2 className="max-w-5xl text-4xl font-light leading-[1.03] tracking-[-.04em] md:text-7xl">
              {camp.experience}
            </h2>
            {/* <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={camp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-5 border border-[#211b16]/30 px-5 py-4 text-[9px] uppercase tracking-[.24em] transition-colors hover:bg-[#211b16] hover:text-[#f2eee5]"
              >
                Visit official site{" "}
                <span className="text-base leading-none">↗</span>
              </a>
              <span className="text-[9px] uppercase tracking-[.2em] text-[#211b16]/40">
                {camp.description}
              </span>
            </div> */}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e8e0d2] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[.65fr_1.35fr] md:gap-20 md:items-center">
          <Reveal>
            <div className="border-t border-[#211b16]/20 pt-4">
              <p className="text-[10px] uppercase tracking-[.4em] text-[#211b16]/50">
                02 · Stay with us
              </p>
              <h2 className="mt-8 max-w-sm text-4xl font-light leading-[.98] tracking-[-.04em] md:text-6xl">
                Accommodations
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#211b16]/60">
                {camp.accommodationCaption}
              </p>
              <span className="mt-8 block text-[10px] uppercase tracking-[.2em] text-[#b89a67]">
                Tap to explore
              </span>
            </div>
          </Reveal>
          <Reveal>
            <AccommodationModal
              name={camp.name}
              images={camp.accommodationGallery}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#211b16]/15 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.4em] text-[#211b16]/45">
              03 · Restaurant
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[.2em] text-[#b89a67]">
              A taste of Mongolia
            </p>
          </Reveal>
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-light leading-[1.02] tracking-[-.04em] md:text-7xl">
              Slow meals, local flavour, wide-open tables.
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#211b16]/65">
              Taste the landscape through generous local flavours, warm
              hospitality and slow meals shared beneath the wide Mongolian sky.
              Seasonal details and the character of each camp shape every table.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#211b16] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-end justify-between border-t border-white/20 pt-4">
            <h2 className="text-[10px] uppercase tracking-[.4em] text-white/60">
              Gallery
            </h2>
            <span className="text-[10px] uppercase tracking-[.2em] text-[#d9bd82]">
              04 · {camp.number}
            </span>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[300px] md:grid-cols-4">
            {camp.gallery.map((image, index) => (
              <Reveal
                key={image}
                className={`group relative overflow-hidden ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                      ? "col-span-2"
                      : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${camp.name} gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#211b16]/15 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[.7fr_1.3fr] md:items-center md:gap-20">
          <Reveal>
            <div className="border-t border-[#211b16]/20 pt-4">
              <p className="text-[10px] uppercase tracking-[.4em] text-[#211b16]/50">
                05 · How to get there
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[.2em] text-[#b89a67]">
                Arrival guide
              </p>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#211b16]/65">
                {camp.arrivalCaption ??
                  `Your journey begins in ${camp.region}. Plan your route and arrival before setting out.`}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <CampMap
              name={camp.name}
              mapUrl={camp.mapUrl}
              mapCenter={camp.mapCenter}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#d9c39c] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.4em] text-[#211b16]/55">
              06 · Contact us
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[.2em] text-[#211b16]/55">
              Begin your stay
            </p>
          </Reveal>
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-light leading-[1.02] tracking-[-.04em] md:text-7xl">
              Make space for something memorable.
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#211b16]/70">
              Ask about availability, experiences and planning your stay. The
              camp&apos;s official team can help shape the details of your
              journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[9px] uppercase tracking-[.2em]">
              <a
                href={`mailto:${camp.contactEmail}`}
                className="border-b border-[#211b16]/50 pb-2 transition-colors hover:border-[#211b16]"
              >
                Email · {camp.contactEmail}
              </a>
              <a
                href={`tel:${camp.contactPhone}`}
                className="border-b border-[#211b16]/50 pb-2 transition-colors hover:border-[#211b16]"
              >
                Phone · {camp.contactPhone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#f2eee5] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between border-t border-[#211b16]/15 pt-5 text-[9px] uppercase tracking-[.22em] text-[#211b16]/40">
          <a href="/">Mongolia Stays</a>
          <a href="/" className="transition-colors hover:text-[#211b16]">
            Back to collection ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

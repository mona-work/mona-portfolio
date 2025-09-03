import Image from "next/image";

const LOGOS = [
  { src: "/logos/apple.svg",       alt: "Apple",        href: "#" },
  { src: "/logos/jpmorgan.png",    alt: "JPMorgan",     href: "#" },
  { src: "/logos/ubs.svg",         alt: "UBS",          href: "#" },
  { src: "/logos/biocharlife.png", alt: "BiocharLife",  href: "/case/biocharlife" },
  { src: "/logos/elevarsalud.png", alt: "ElevarSalud",  href: "/case/elevar" },
];

export default function CompanyLogos() {
  return (
    <section className="mt-8">
      <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">
        Experience includes
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {LOGOS.map((l) => (
          <a
            key={l.alt}
            href={l.href}
            aria-label={l.alt}
            className="opacity-70 hover:opacity-100 transition"
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={96}
              height={28}
              className="h-7 w-auto grayscale hover:grayscale-0"
              priority={false}
            />
          </a>
        ))}
      </div>
    </section>
  );
}


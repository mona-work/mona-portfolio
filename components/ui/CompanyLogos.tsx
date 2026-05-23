import Image from "next/image";

const LOGOS = [
  { src: "/logos/meta.svg",        alt: "Meta",         href: "#",                  height: "h-9"  },
  { src: "/logos/apple.svg",       alt: "Apple",        href: "#",                  height: "h-9"  },
  { src: "/logos/jpmorgan.png",    alt: "JPMorgan",     href: "#",                  height: "h-9"  },
  { src: "/logos/ubs.jpg",         alt: "UBS",          href: "#",                  height: "h-9"  },
  { src: "/logos/biocharlife.png", alt: "BiocharLife",  href: "/case/biocharlife",  height: "h-7"  },
  { src: "/logos/elevarsalud.png", alt: "ElevarSalud",  href: "/case/elevar",       height: "h-7"  },
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
              width={120}
              height={40}
              className={`${l.height} w-auto grayscale hover:grayscale-0`}
              priority={false}
            />
          </a>
        ))}
      </div>
    </section>
  );
}


"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { EVENT_HIGHLIGHTS } from "@/data/events";

/**
 * Event Highlights Section — "Flashback: CREANOMIC"
 * Responsive 4-column grid of event highlight cards.
 * Each card: placeholder image + category chip + title + description.
 */
export default function EventSection() {
  const hasEvents = EVENT_HIGHLIGHTS.length > 0;

  // Placeholder event cards for when data is empty
  const placeholderCards = [
    { title: "Business Competition",      cat: "Kompetisi",  variant: "creative" as const },
    { title: "Creative Expo",             cat: "Pameran",    variant: "innovation" as const },
    { title: "Workshop & Seminar",        cat: "Edukasi",    variant: "innovation" as const },
    { title: "Cultural Night",            cat: "Budaya",     variant: "creative" as const },
  ];

  return (
    <section
      id="event"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Sky Blue bloom top-right */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, var(--brand-sky-blue) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader
          eyebrow="Kilas Balik"
          title={`Flashback: CREANOMIC ${new Date().getFullYear() - 1}`}
          subtitle="Momen-momen berkesan dari perjalanan CREANOMIC yang terus menginspirasi."
          className="mb-14"
        />

        {hasEvents ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENT_HIGHLIGHTS.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                category={event.category}
                badgeVariant={event.category === "Kompetisi" || event.category === "Budaya" ? "creative" : "innovation"}
              />
            ))}
          </div>
        ) : (
          /* Placeholder grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {placeholderCards.map((card, i) => (
              <EventCard
                key={i}
                title={card.title}
                description="Deskripsi event akan tersedia segera. Tambahkan data di data/events.ts"
                category={card.cat}
                badgeVariant={card.variant}
                isPlaceholder
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────
function EventCard({
  title,
  description,
  category,
  badgeVariant = "innovation",
  isPlaceholder = false,
}: {
  title: string;
  description: string;
  category?: string;
  badgeVariant?: "innovation" | "creative";
  isPlaceholder?: boolean;
}) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border transition-all duration-300"
      style={{
        backgroundColor: "var(--card-bg-subtle)",
        borderColor: "var(--card-border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--card-border-hover)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "var(--glow-purple)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--card-border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <PlaceholderImage label={`Event Photo: ${title}`} ratio="4/3" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {category && (
          <Badge variant={badgeVariant}>{category}</Badge>
        )}
        <h3
          className="text-sm font-semibold leading-snug transition-colors duration-200"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--on-surface)",
          }}
        >
          {title}
        </h3>
        {!isPlaceholder && (
          <p
            className="text-xs leading-relaxed line-clamp-2"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

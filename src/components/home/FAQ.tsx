"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const { faq } = siteContent;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionHeader title={faq.title} subtitle={faq.subtitle} centered />
      <div className="max-w-2xl mx-auto space-y-3">
        {faq.items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden transition-soft"
            style={{
              background: "var(--card)",
              border: `1px solid ${open === i ? "var(--purple)" : "var(--border)"}`,
              boxShadow: open === i ? "0 4px 20px rgba(91,58,142,.12)" : "none",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
              aria-expanded={open === i}
            >
              <span
                className="font-semibold text-sm md:text-base"
                style={{ color: "var(--text)" }}
              >
                {item.question}
              </span>
              <ChevronDown
                {...lucideBrand}
                size={18}
                className="flex-shrink-0 transition-transform duration-200"
                style={{
                  color: open === i ? "var(--purple)" : "var(--muted)",
                  transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <div
              style={{
                maxHeight: open === i ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(.22,.61,.36,1)",
              }}
            >
              <p
                className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Mail, MessageCircle } from "lucide-react";

export function Community() {
  const { community, newsletter } = siteContent;

  return (
    // Fondo beige base
    <Section id="comunidad">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* WhatsApp — acento lila */}
        <Card
          className="transition-soft hover:shadow-lg"
          style={{ borderTop: "3px solid var(--lavender)" }}
        >
          <CardBody className="text-center py-10">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: "rgba(180,151,214,.15)" }}
            >
              <MessageCircle size={32} style={{ color: "var(--lavender)" }} />
            </div>
            <h3 className="title text-2xl mb-3">{community.title}</h3>
            <p className="mb-6" style={{ color: "var(--muted)" }}>
              {community.description}
            </p>
            <Button
              variant="primary"
              onClick={() => window.open(community.whatsappLink, "_blank")}
            >
              Unirme ahora
            </Button>
          </CardBody>
        </Card>

        {/* Newsletter — acento dorado */}
        <Card
          className="transition-soft hover:shadow-lg"
          style={{ borderTop: "3px solid var(--gold-deep)" }}
        >
          <CardBody className="py-10">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: "rgba(201,169,110,.15)" }}
            >
              <Mail size={32} style={{ color: "var(--gold-deep)" }} />
            </div>
            <h3 className="title text-2xl mb-3">{newsletter.title}</h3>
            <p className="mb-6" style={{ color: "var(--muted)" }}>
              {newsletter.description}
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Funcionalidad de newsletter por implementar");
              }}
            >
              <input
                type="email"
                placeholder={newsletter.placeholder}
                required
                className="rounded-2xl px-4 py-3 text-sm focus:outline-none"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}
              />
              <Button type="submit" variant="ghost">
                Suscribirme
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}

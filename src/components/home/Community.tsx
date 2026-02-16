"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Mail, MessageCircle } from "lucide-react";

export function Community() {
  const { community, newsletter } = siteContent;

  return (
    <Section id="comunidad">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Comunidad WhatsApp */}
        <Card className="bg-gradient-to-br from-accent/5 to-transparent">
          <CardBody className="text-center py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <MessageCircle size={32} className="text-accent" />
            </div>

            <h3 className="title text-2xl mb-3">{community.title}</h3>
            <p className="text-muted mb-6">{community.description}</p>

            <Button
              variant="primary"
              onClick={() => window.open(community.whatsappLink, "_blank")}
            >
              Unirme ahora
            </Button>
          </CardBody>
        </Card>

        {/* Newsletter */}
        <Card className="bg-gradient-to-br from-gold/5 to-transparent">
          <CardBody className="py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
              <Mail size={32} className="text-gold" />
            </div>

            <h3 className="title text-2xl mb-3">{newsletter.title}</h3>
            <p className="text-muted mb-6">{newsletter.description}</p>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Aquí conectarías con tu servicio de email
                alert("Funcionalidad de newsletter por implementar");
              }}
            >
              <input
                type="email"
                placeholder={newsletter.placeholder}
                required
                className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
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

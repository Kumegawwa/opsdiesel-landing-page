import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import gEngine from "@/assets/g-engine.jpg";
import gScanner from "@/assets/g-scanner.jpg";
import gRam from "@/assets/g-ram.jpg";
import gTruck from "@/assets/g-truck.jpg";
import gTools from "@/assets/g-tools.jpg";
import gTurbo from "@/assets/g-turbo.jpg";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OPS DIESEL — Mecânica Diesel Premium e Dodge RAM | Curitiba" },
      { name: "description", content: "OPS DIESEL: autoridade em mecânica diesel pesada, Dodge RAM, injeção Common Rail, remap e diagnóstico avançado em Curitiba. Mais de 14 anos de experiência." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "OPS DIESEL",
          image: "/og.jpg",
          telephone: "+554132726940",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Alexandre Marcoski, 308",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            postalCode: "82015-570",
            addressCountry: "BR",
          },
          url: "https://opsdiesel.com.br",
          priceRange: "$$$",
          openingHours: "Mo-Fr 08:00-18:00 Sa 08:00-12:00",
        }),
      },
    ],
  }),
});

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Oficina OPS DIESEL com Dodge RAM em diagnóstico"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
            Especialistas Diesel · Curitiba/PR
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase">
            A Autoridade Definitiva em <span className="text-gradient-lime">Mecânica Diesel</span> e Dodge RAM em Curitiba.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Especialistas em diagnóstico eletrônico avançado, injeção Common Rail, remap de potência
            e manutenção premium para utilitários e linha pesada.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5541991549500"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold uppercase tracking-wider text-primary-foreground transition lime-glow hover:brightness-110 text-center"
            >
              Falar Imediatamente com Especialista
              <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-6 py-4 font-semibold uppercase tracking-wider text-foreground hover:border-primary/60 hover:text-primary transition text-center"
            >
              Solicitar Orçamento Técnico
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "14+", l: "Anos de experiência" },
              { v: "2.500+", l: "Veículos atendidos" },
              { v: "100%", l: "Especialização diesel" },
            ].map((s) => (
              <div key={s.l} className="border-l border-primary/40 pl-4">
                <div className="font-display text-3xl font-bold text-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest">
        <span>scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <img src={founder} alt="Heverson Kredens — fundador OPS DIESEL" className="relative rounded-lg border border-border w-full object-cover aspect-[4/5]" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 bg-surface border border-border rounded-lg p-5 border-glow">
              <div className="font-display text-4xl font-bold text-primary">14+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">anos de estrada</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Sobre a Oficina</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            Engenharia automotiva diesel, com precisão de laboratório.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A OPS DIESEL nasceu da trajetória técnica de <strong className="text-foreground">Heverson Kredens</strong>,
            com mais de 14 anos dedicados a mecânica diesel pesada, elétrica avançada e veículos premium.
            Hoje somos referência em Curitiba para quem exige diagnóstico real, transparência e performance comprovada.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nosso laboratório opera com scanners de última geração, bancadas de teste e parceria estratégica
            com a <strong className="text-foreground">Drift Performance</strong> para remap e preparação diesel.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              "Laboratório eletrônico próprio",
              "Scanners multimarca avançados",
              "Especialista Dodge RAM",
              "Parceria Drift Performance",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-md border border-border bg-surface/60 p-4">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVIÇOS ---------------- */
const services = [
  { t: "Injeção Eletrônica Diesel", d: "Common Rail, bicos, bombas e calibração precisa.", icon: "M3 12h3l2-7 4 14 2-7h7" },
  { t: "Diagnóstico Computadorizado", d: "Scanners avançados multimarca para falhas reais.", icon: "M9 17v-6h6v6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" },
  { t: "Remap & Performance", d: "Reprogramação de centrais para potência e torque.", icon: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
  { t: "Turbinas", d: "Revisão, balanceamento e upgrade de turbinas.", icon: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" },
  { t: "Motor Completo", d: "Retífica, montagem e diagnóstico de motores diesel.", icon: "M6 3h12l3 9-3 9H6l-3-9 3-9z" },
  { t: "Suspensão Pesada", d: "Geometria, molas, amortecedores para linha pesada.", icon: "M3 12h18M6 6h12M6 18h12" },
  { t: "Freios", d: "Sistemas pneumáticos, hidráulicos e ABS.", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 2" },
  { t: "Câmbio", d: "Manutenção e revisão de transmissões pesadas.", icon: "M12 2v20M2 12h20" },
  { t: "Elétrica Avançada", d: "Diagnóstico de chicotes, módulos e CAN.", icon: "M13 2L3 14h7v8l10-12h-7V2z" },
  { t: "Preventiva", d: "Planos de manutenção para máxima durabilidade.", icon: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
  { t: "Atendimento de Frota", d: "Gestão técnica e prioridade para frotistas.", icon: "M3 7h13l5 5v5h-3M3 7v10h3M9 17h6M6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
];

function Servicos() {
  return (
    <section id="servicos" className="relative py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Serviços</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            Soluções técnicas de <span className="text-gradient-lime">ponta a ponta</span> em diesel.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 40}>
              <div className="group relative h-full rounded-lg border border-border bg-surface p-6 transition hover:border-primary/60 hover:-translate-y-1 hover:bg-surface-elevated">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition" />
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <a 
                  href={`https://wa.me/5541991549500?text=${encodeURIComponent(`Olá, gostaria de saber o prazo e os detalhes para o serviço de ${s.t} para o meu veículo.`)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARCAS ---------------- */
const brands = ["RAM", "Volvo", "Scania", "Mercedes-Benz", "MAN", "Iveco", "Ford", "Cummins", "MWM"];
function Marcas() {
  const loop = [...brands, ...brands];
  return (
    <section id="marcas" className="relative py-24 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Marcas Atendidas</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
            Especialistas em Dodge RAM. Autoridade na linha pesada.
          </h2>
        </Reveal>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {loop.map((b, i) => (
            <div
              key={i}
              className={`shrink-0 flex items-center justify-center px-8 py-6 font-display text-3xl sm:text-4xl font-black uppercase tracking-wider transition ${
                b === "RAM"
                  ? "text-primary lime-glow rounded-md border border-primary/30 bg-primary/5"
                  : "text-muted-foreground/60 hover:text-foreground"
              }`}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFERENCIAIS ---------------- */
const diffs = [
  { t: "Laboratório eletrônico", d: "Estrutura dedicada para diagnóstico fino de módulos e injeção." },
  { t: "Scanner avançado", d: "Equipamentos multimarca de última geração." },
  { t: "Equipe especializada", d: "Técnicos com formação contínua em diesel premium." },
  { t: "Transparência total", d: "Diagnóstico aberto, peças mostradas e relatório técnico." },
  { t: "Garantia escrita", d: "Todo serviço acompanha garantia formal." },
  { t: "Peças premium", d: "Trabalhamos só com originais e linha homologada." },
  { t: "Expertise Dodge RAM", d: "Referência em manutenção e performance RAM." },
  { t: "Performance tuning", d: "Remap dinamométrico com parceria Drift Performance." },
];
function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Diferenciais</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            Por que somos a escolha de quem entende de diesel.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diffs.map((d, i) => (
            <Reveal key={d.t} delay={i * 30}>
              <div className="h-full rounded-lg border border-border bg-surface/60 p-6 hover:bg-surface-elevated hover:border-primary/40 transition">
                <div className="font-display text-5xl font-black text-primary/40">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-lg font-bold uppercase">{d.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALERIA (SEO Otimizado) ---------------- */
const gallery = [
  { src: gEngine, alt: "Mecânico especialista da Ops Diesel realizando manutenção em motor diesel Common Rail na oficina no bairro São Braz em Curitiba", span: "row-span-2" },
  { src: gRam, alt: "Manutenção especializada e diagnóstico avançado em picape Dodge RAM na oficina Ops Diesel em Curitiba" },
  { src: gScanner, alt: "Diagnóstico eletrônico avançado com scanner em caminhão linha pesada na Ops Diesel, Região Metropolitana de Curitiba" },
  { src: gTools, alt: "Bancada de ferramentas e laboratório eletrônico de alta precisão para motores diesel na Ops Diesel, São Braz", span: "row-span-2" },
  { src: gTruck, alt: "Manutenção preventiva e corretiva em frota de caminhão linha pesada na oficina mecânica em Curitiba" },
  { src: gTurbo, alt: "Revisão e calibração de turbina diesel com alta performance na Ops Diesel Acessórios Automotivos" },
];

function Galeria() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="galeria" className="relative py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Galeria</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            Bastidores do nosso <span className="text-gradient-lime">laboratório</span>.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 50} className={g.span ?? ""}>
              <button
                onClick={() => setOpen(g.src)}
                className="group relative h-full w-full overflow-hidden rounded-lg border border-border"
              >
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img src={open} alt="" className="max-h-full max-w-full rounded-lg border border-border" />
        </div>
      )}
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
const testimonials = [
  { n: "Rafael M.", c: "Curitiba/PR", v: "Dodge RAM 2500", t: "Levei minha RAM com falha intermitente que ninguém resolvia. Em um dia identificaram, mostraram o defeito e entregaram pronta. Outro patamar." },
  { n: "Eduardo S.", c: "São José dos Pinhais", v: "Volvo FH 540", t: "Atendimento de frota impecável. Relatório técnico transparente e prazo cumprido. Recomendo para qualquer frotista sério." },
  { n: "Bruno T.", c: "Pinhais/PR", v: "RAM 3500 Laramie", t: "Fiz remap com a parceria Drift. Resposta absurda no torque e consumo melhor. Equipe entende muito de diesel." },
];
function Depoimentos() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Depoimentos</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            A confiança de quem já passou pelo nosso box.
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-surface p-7 flex flex-col">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="mt-5 text-foreground/90 leading-relaxed flex-1">“{t.t}”</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-display font-bold uppercase tracking-wider">{t.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.c} · {t.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCALIZAÇÃO ---------------- */
function Localizacao() {
  const endereco = "Rua Alexandre Marcoski, 308 - São Braz, Curitiba - PR, 82015-570";
  return (
    <section id="localizacao" className="relative py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-stretch">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Onde Estamos</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">São Braz · Curitiba/PR</h2>
          <p className="mt-4 text-muted-foreground">Atendemos toda Curitiba e região metropolitana.</p>
          <div className="mt-8 space-y-5">
            <Info label="Endereço" value="Rua Alexandre Marcoski, 308 — São Braz, Curitiba/PR · CEP 82015-570" />
            <Info label="Horário" value="Seg a Sex · 08h–18h · Sáb · 08h–12h" />
            <Info label="WhatsApp" value="+55 41 99154-9500" />
            <Info label="Telefone" value="+55 41 3272-6940" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=$${encodeURIComponent(endereco)}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:brightness-110">Google Maps</a>
            <a target="_blank" rel="noopener noreferrer" href={`https://waze.com/ul?q=${encodeURIComponent(endereco)}&navigate=yes`} className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/60 hover:text-primary">Waze</a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden border border-border">
            <iframe
              title="Mapa OPS DIESEL"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 h-full w-full"
              style={{ filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)" }}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-primary">{label}</div>
      <div className="mt-1 text-foreground">{value}</div>
    </div>
  );
}

/* ---------------- FORMULÁRIO ---------------- */
function Contato() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "");
    const wpp = String(fd.get("whatsapp") || "");
    const veiculo = String(fd.get("veiculo") || "");
    const ano = String(fd.get("ano") || "");
    const servico = String(fd.get("servico") || "");
    const problema = String(fd.get("problema") || "");
    const msg = `Olá OPS DIESEL!%0A%0ANome: ${nome}%0AWhatsApp: ${wpp}%0AVeículo: ${veiculo} ${ano}%0AServiço: ${servico}%0AProblema: ${problema}`;
    setSending(true);
    setTimeout(() => {
      window.open(`https://wa.me/5541991549500?text=${msg}`, "_blank");
      setSending(false);
      setSent(true);
    }, 600);
  }

  return (
    <section id="contato" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Orçamento Técnico</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            Conte o que precisa. <span className="text-gradient-lime">Nós resolvemos.</span>
          </h2>
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-surface/70 backdrop-blur p-6 sm:p-10 border-glow grid sm:grid-cols-2 gap-5">
            <Field name="nome" label="Nome completo" required />
            <Field name="whatsapp" label="WhatsApp" required placeholder="(41) 99999-9999" />
            <Field name="veiculo" label="Veículo" required placeholder="Ex: Dodge RAM 2500" />
            <Field name="ano" label="Ano" required placeholder="2022" />
            <div className="sm:col-span-2">
              <Label>Serviço desejado</Label>
              <select name="servico" required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none">
                <option value="">Selecione</option>
                {services.map((s) => <option key={s.t}>{s.t}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <Label>Descreva o problema</Label>
              <textarea name="problema" rows={5} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none resize-none" />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">Resposta em até 1h em horário comercial.</p>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold uppercase tracking-wider text-primary-foreground hover:brightness-110 disabled:opacity-60 lime-glow w-full sm:w-auto"
              >
                {sending ? "Enviando..." : sent ? "Enviado ✓" : "Enviar para WhatsApp"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{children}</label>;
}
function Field({ name, label, required, placeholder }: { name: string; label: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary lime-glow" />
            <span className="font-display text-xl font-bold tracking-widest">OPS<span className="text-primary">.</span>DIESEL</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Mecânica diesel premium e especialistas Dodge RAM em Curitiba/PR.
            Engenharia, precisão e performance há mais de 14 anos.
          </p>
          <a href="https://www.instagram.com/opsdiesel____/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            @opsdiesel____
          </a>
        </div>
        <div>
          <div className="font-display text-sm uppercase tracking-widest text-primary mb-4">Navegação</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {links.slice(0, 6).map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-sm uppercase tracking-widest text-primary mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Rua Alexandre Marcoski, 308</li>
            <li>São Braz · Curitiba/PR</li>
            <li>CEP 82015-570</li>
            <li><a href="tel:+554132726940" className="hover:text-primary">+55 41 3272-6940</a></li>
            <li><a href="https://wa.me/5541991549500" className="hover:text-primary">+55 41 99154-9500</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Ops Diesel Acessórios Automotivos Ltda · CNPJ 46.859.630/0001-17</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#marcas", label: "Marcas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Marcas />
        <Diferenciais />
        <Galeria />
        <Depoimentos />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
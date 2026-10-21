import type { Metadata } from "next";
import { Fragment } from "react";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "about - zvonimir konjevic",
  description: "About Zvonimir Konjevic, Machine Learning Engineer.",
};

const experience = [
  {
    role: "AI Engineer",
    company: "Intelligentia",
    period: "Aug 2024 - Present",
    description:
      "Building NLP and LLM-based systems that automate document processing, agentic RAG and database query workflows for enterprise clients, primarily fileAI, a Singapore platform processing 200M+ files annually.",
  },
  {
    role: "Machine Learning Engineer",
    company: "Vegvisir",
    period: "Jan 2024 - Aug 2024",
    description:
      "Developed end-to-end computer vision and deep learning solutions for Mixed Reality and head-mounted tactical displays.",
  },
];

const ownName = "Z. Konjević";

const publications = [
  {
    title:
      "Graph-Based Multimodal Integration of Histological and Gene Expression Data for AI-Assisted Cancer Tissue Analysis",
    authors: "Z. Konjević, et al.",
    venue: "35th International Conference on Organization and Technology of Maintenance (OTO 2026)",
    status: "Paper, accepted",
    date: "Dec 2026",
  },
  {
    title:
      "Reading Proliferative State and Tissue Architecture of Prostate Cancer from H&E: A Spatial Graph-Learning Approach",
    authors: "M. Habjan*, Z. Konjević*, et al. (*co-first authors)",
    venue: "EMBO Scientists' Forum (ESF) 2026",
    status: "Poster, accepted",
    date: "Oct 2026",
  },
];

export default function About() {
  return (
    <div className="max-w-[70rem] mx-auto px-6 md:px-8">
      <div className="md:px-4 lg:px-8 pt-24 md:pt-32 pb-16">
        <header className="mb-20 max-w-3xl flex flex-col sm:flex-row items-start gap-8 md:gap-10">
          <div className="flex-1 min-w-0">
            <h1
              className="reveal font-heading text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4"
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              about
            </h1>
            <div
              className="reveal space-y-4 text-text-secondary text-base md:text-lg leading-relaxed"
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              <p>
                building agentic systems @ <strong className="font-medium text-text">intelligentia</strong>, mostly
                llm agents, document processing and evaluation pipelines for enterprise clients.
              </p>
              <p>
                most of that work has been for <strong className="font-medium text-text">fileai</strong>, a Singapore-based startup for document automation, on its document processing pipeline, per-customer fine-tuning and agents working on top of processed data.
              </p>
              <p>
                previously real-time computer vision on edge hardware @{" "}
                <strong className="font-medium text-text">vegvisir</strong>, shipping object detection for mixed reality
                and head-mounted tactical displays on nvidia jetson.
              </p>
              <p>
                in free time tinkering with scalability, distributed systems & ai research, lately graph learning for computational pathology and sharing interesting stuff I learn along the way.
              </p>
            </div>
          </div>
          <div
            className="reveal order-first sm:order-none shrink-0 flex flex-col sm:items-center gap-4"
            style={{ "--reveal-i": 2 } as React.CSSProperties}
          >
            <img
              src="/images/about/about-photo.png"
              alt="Zvonimir Konjevic"
              width={240}
              height={240}
              className="w-24 h-24 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full object-cover"
            />
            <div className="flex flex-col sm:items-center gap-1 text-sm">
              <span className="inline-flex items-center gap-1.5 text-text-secondary">
                <MapPin aria-hidden="true" className="w-3.5 h-3.5" />
                Osijek, Croatia
              </span>
              <span className="font-medium">AI Engineer @ Intelligentia</span>
            </div>
          </div>
        </header>

        <h2 className="reveal label mb-3" style={{ "--reveal-i": 3 } as React.CSSProperties}>
          Experience
        </h2>
        <ul className="max-w-3xl">
          {experience.map((job, index) => (
            <li
              key={job.company}
              className="reveal py-3"
              style={{ "--reveal-i": 4 + index } as React.CSSProperties}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="text-base md:text-lg font-medium leading-snug">
                  {job.role} <span className="text-text-secondary font-normal">at {job.company}</span>
                </span>
                <span className="font-mono text-xs text-text-muted shrink-0">{job.period}</span>
              </div>
              <p className="mt-1.5 text-sm md:text-base text-text-secondary leading-relaxed">{job.description}</p>
            </li>
          ))}
        </ul>

        <h2
          className="reveal label mt-16 mb-3"
          style={{ "--reveal-i": 4 + experience.length } as React.CSSProperties}
        >
          Publications
        </h2>
        <ul className="max-w-3xl">
          {publications.map((publication, index) => (
            <li
              key={publication.title}
              className="reveal py-3"
              style={{ "--reveal-i": 5 + experience.length + index } as React.CSSProperties}
            >
              <span className="block text-base md:text-lg font-medium leading-snug">{publication.title}</span>
              <span className="block mt-1 text-sm md:text-base text-text-secondary">
                {publication.authors.split(ownName).map((part, i) => (
                  <Fragment key={i}>
                    {i > 0 && <strong className="font-semibold text-text">{ownName}</strong>}
                    {part}
                  </Fragment>
                ))}
              </span>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <span className="text-sm text-text-secondary leading-relaxed">
                  {publication.venue} <span className="text-text-muted">({publication.status})</span>
                </span>
                <span className="font-mono text-xs text-text-muted shrink-0">{publication.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

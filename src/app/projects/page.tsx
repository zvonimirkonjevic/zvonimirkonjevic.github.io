import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "projects - zvonimir konjevic",
  description: "Projects by Zvonimir Konjevic, Machine Learning Engineer.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    name: "Distributed Agent Workers",
    tag: "LLM Agents",
    description:
      "Scalable, distributed worker architecture for LangGraph agents using FastAPI WebSockets, Postgres Pub/Sub and PgBouncer.",
    href: "https://github.com/zvonimirkonjevic/distributed-agent-workers",
  },
  {
    name: "PyTorch Distributed ML System",
    tag: "MLOps",
    description:
      "End-to-end distributed ML system for scaling model training and dynamic inference with PyTorch, Kubernetes, Kubeflow and TorchServe.",
    href: "https://github.com/zvonimirkonjevic/pytorch-distributed-ml-system",
  },
  {
    name: "Serverless ML on AWS",
    tag: "MLOps",
    description:
      "End-to-end ML system for predicting telco customer churn, deployed with Terraform on AWS SageMaker, ECS Fargate, Lambda and API Gateway.",
    href: "https://github.com/zvonimirkonjevic/terraform-serverless-ml",
  },
  {
    name: "Vision Transformer",
    tag: "Paper Implementation",
    description:
      "PyTorch implementation of \"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale\" from Google Brain.",
    href: "https://github.com/zvonimirkonjevic/vit-pytorch",
  },
  {
    name: "STORM",
    tag: "Paper Implementation",
    description:
      "LangChain implementation of STORM, which uses LLMs to research a topic and write Wikipedia-like articles from scratch.",
    href: "https://github.com/zvonimirkonjevic/storm-langchain",
  },
];

export default function Projects() {
  return (
    <div className="max-w-[70rem] mx-auto px-6 md:px-8">
      <div className="md:px-4 lg:px-8 pt-24 md:pt-32 pb-16">
        <header className="mb-16 max-w-3xl">
          <h1
            className="reveal font-heading text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4"
            style={{ "--reveal-i": 0 } as React.CSSProperties}
          >
            projects
          </h1>
          <p
            className="reveal text-text-secondary text-base md:text-lg leading-relaxed"
            style={{ "--reveal-i": 1 } as React.CSSProperties}
          >
            Here's an overview of some of the projects I've worked on recently.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className="reveal"
              style={{ "--reveal-i": 2 + index } as React.CSSProperties}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full p-5 rounded-lg border border-border hover:bg-surface transition-colors duration-200"
              >
                <h2 className="text-base md:text-lg font-medium leading-snug">
                  {project.name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="inline-block w-4 h-4 ml-1 align-[-0.125em] text-text-muted group-hover:text-text transition-colors duration-200"
                  />
                </h2>
                <span className="font-mono text-xs text-text-muted mt-1 mb-3">{project.tag}</span>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

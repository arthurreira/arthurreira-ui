import { CardGrid } from "@/components/ui/card-grid";
import type { CardItem } from "@/lib/cards";

const cards: CardItem[] = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Track product usage, conversion, and revenue trends.",
    size: "large",
    tags: ["Dashboard", "Reports"],
    highlight: "Live data",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Create repeatable workflows for common team tasks.",
    size: "tall",
    tags: ["Workflow", "Ops"],
  },
  {
    id: "docs",
    title: "Docs",
    description: "Publish changelogs, specs, and onboarding guides.",
    size: "wide",
    url: "#docs",
  },
  {
    id: "security",
    title: "Security",
    description: "Review access, audit events, and policy changes.",
    size: "medium",
    tags: ["Audit"],
  },
  {
    id: "support",
    title: "Support",
    description: "Manage customer conversations from one queue.",
    size: "small",
  },
];

export const cardGrid = {
  name: "card-grid",
  components: {
    Default: (
      <div className="w-full max-w-4xl p-4">
        <CardGrid cards={cards} />
      </div>
    ),
  },
};

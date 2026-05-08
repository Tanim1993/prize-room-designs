import { createFileRoute } from "@tanstack/react-router";
import SponsorCards from "@/components/SponsorCards";

export const Route = createFileRoute("/")({
  component: SponsorCards,
  head: () => ({
    meta: [
      { title: "Prize Room Card Concepts" },
      { name: "description", content: "Premium sponsored Zikr room card design explorations." },
    ],
  }),
});

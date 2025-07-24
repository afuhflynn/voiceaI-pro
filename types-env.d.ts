// Define the allowed categories
type Category =
  | "feature"
  | "workflow"
  | "integration"
  | "troubleshooting"
  | "best practice"
  | "architecture"
  | "data model"
  | "other";

// The shape of a knowledge‑base entry
interface KnowledgeEntity {
  /** Unique identifier (e.g. CUID or UUID) */
  id: string;

  /** Concise title (5–8 words max) */
  title: string;

  /** One of the predefined categories */
  category: Category;

  /** 2–4 sentence summary of the entry */
  description: string;

  /** Tags capturing key concepts, technologies, contexts */
  tags: string[];

  /** ISO‑formatted creation timestamp */
  createdAt: string;

  /** ISO‑formatted last update timestamp */
  updatedAt: string;
}

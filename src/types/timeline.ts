import { ReactNode } from "react";

/** One entry of the Timeline component. */
export type TimelineItem = {
  /** Date marker shown above the title. */
  date: string;
  /** Entry headline. */
  title: string;
  /** Free-form entry body. */
  description: ReactNode;
};

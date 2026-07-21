/**
 * A single navigation entry of the {@link Header} component.
 * Entries with a `submenu` render as a dropdown instead of a plain link.
 */
export type MenuItem = {
  /** Unique id; also used as React key and to track the open submenu. */
  id: number;
  /** Visible link text. */
  title: string;
  /** Link target. Falls back to "#" when omitted (e.g. for pure dropdown parents). */
  path?: string;
  /** Opens the link in a new tab when true. */
  newTab?: boolean;
  /** Child entries rendered as a dropdown below this item. */
  submenu?: MenuItem[];
};

/** @deprecated Use `MenuItem` instead. */
export type Menu = MenuItem;

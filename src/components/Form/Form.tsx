import React from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "block w-full rounded-lg border border-stroke bg-white p-2.5 text-sm text-black placeholder:text-manatee focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark dark:bg-blacksection dark:text-white";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Prestyled text input matching the library theme. Forwards its ref and all
 * native attributes, so it works with form libraries like react-hook-form.
 *
 * @example
 * <Input type="email" placeholder="jane@example.com" {...register("mail")} />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldClasses, className)} {...props} />
));
Input.displayName = "Input";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Prestyled multi-line text field; see Input for details. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldClasses, className)} {...props} />
  ),
);
Textarea.displayName = "Textarea";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

/** Form field label; pair with a control via htmlFor. */
const Label = ({ className, children, ...props }: LabelProps) => (
  <label
    className={cn("mb-2 block text-sm font-medium text-black dark:text-white", className)}
    {...props}
  >
    {children}
  </label>
);

export { Input, Textarea, Label };

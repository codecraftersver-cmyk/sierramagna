type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-3 md:mb-14 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sm-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none tracking-[0.04em] text-sm-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl font-sans text-base leading-relaxed text-sm-gray/80 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

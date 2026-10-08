interface HighlightedTextProps {
  text: string;
  highlight: string;
  className: string;
  breakBefore?: boolean;
  breakAfter?: boolean;
}

export default function HighlightedText({
  text,
  highlight,
  className,
  breakBefore = false,
  breakAfter = false,
}: HighlightedTextProps) {
  const start = text.indexOf(highlight);

  if (!highlight || start < 0) {
    return text;
  }

  const prefix = text.slice(0, start);
  const suffix = text.slice(start + highlight.length);

  return (
    <>
      {breakBefore ? prefix.trimEnd() : prefix}
      {breakBefore && <br />}
      <span className={className}>{highlight}</span>
      {breakAfter && <br />}
      {breakAfter ? suffix.trimStart() : suffix}
    </>
  );
}
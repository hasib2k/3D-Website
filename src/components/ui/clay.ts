/** Shared claymorphism style tokens */

export const clay = {
  /** Outer card — puffy raised look */
  card: {
    background: "#e0e5ec",
    borderRadius: 24,
    boxShadow: "6px 6px 14px rgba(163,177,198,0.45), -2px -2px 6px rgba(255,255,255,0.25)",
    border: "none",
  } as React.CSSProperties,

  /** Pressed-in / inset well */
  inset: {
    background: "#d9dee5",
    borderRadius: 16,
    boxShadow: "inset 3px 3px 6px rgba(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.25)",
    border: "none",
  } as React.CSSProperties,

  /** Small pill / button — softer raised */
  pill: {
    background: "#e0e5ec",
    borderRadius: 50,
    boxShadow: "4px 4px 8px rgba(163,177,198,0.4), -2px -2px 5px rgba(255,255,255,0.2)",
    border: "none",
  } as React.CSSProperties,

  /** Pressed button state */
  pillPressed: {
    background: "#d9dee5",
    borderRadius: 50,
    boxShadow: "inset 3px 3px 5px rgba(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.2)",
    border: "none",
  } as React.CSSProperties,

  /** Subtle raised icon box */
  iconBox: {
    background: "#e0e5ec",
    borderRadius: 14,
    boxShadow: "3px 3px 6px rgba(163,177,198,0.35), -2px -2px 4px rgba(255,255,255,0.15)",
    border: "none",
  } as React.CSSProperties,

  /** Input field — pressed in */
  input: {
    background: "#d9dee5",
    borderRadius: 14,
    boxShadow: "inset 2px 2px 5px rgba(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.2)",
    border: "none",
    outline: "none",
    transition: "all 0.15s ease",
  } as React.CSSProperties,

  /** Colored raised button */
  colorButton: (color: string, shadowColor: string): React.CSSProperties => ({
    background: `linear-gradient(135deg, ${color}, ${color}dd)`,
    borderRadius: 16,
    boxShadow: `4px 4px 10px ${shadowColor}, -2px -2px 5px rgba(255,255,255,0.15)`,
    border: "none",
  }),
};

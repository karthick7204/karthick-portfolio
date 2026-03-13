// components/BlurOverlay.tsx
export default function BlurOverlay() {
  return (
    <>
      {/* Top */}
      <div
        className="fixed top-0 left-0 right-0 h-8 b-12 z-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #1b191b 0%, transparent 100%)" }}
      />

      {/* Bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 h-8 z-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #1b191b 0%, transparent 100%)" }}
      />
    </>
  );
}
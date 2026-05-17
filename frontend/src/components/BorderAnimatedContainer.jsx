// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/

function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#2F313E,theme(colors.slate.800)_50%,#2F313E)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,#555FCE_86%,_theme(colors.blue.300)_90%,#555FCE_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;

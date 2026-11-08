import { ImageResponse } from "next/og";

export const alt = "Writivia — specific feedback for stronger college essays";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"76px 86px", background:"#f6f2e9", color:"#0c1e3f", fontFamily:"Georgia, serif" }}>
      <div style={{ display:"flex", alignItems:"center", fontSize:42, fontWeight:700, letterSpacing:"-2px" }}>Writivia<span style={{ color:"#b54837" }}>.</span></div>
      <div style={{ display:"flex", flexDirection:"column" }}>
        <div style={{ fontSize:78, lineHeight:1.02, maxWidth:980, letterSpacing:"-3px" }}>Write a college essay only you could have written.</div>
        <div style={{ marginTop:28, fontFamily:"Arial, sans-serif", fontSize:25, color:"#43516a" }}>Specific feedback. Complete annotated examples. Your voice stays yours.</div>
      </div>
      <div style={{ display:"flex", gap:14, alignItems:"center", fontFamily:"Arial, sans-serif", fontSize:18, color:"#1e3a8a", textTransform:"uppercase", letterSpacing:"3px" }}><span style={{ width:54, height:3, background:"#b54837" }} /> College essay review</div>
    </div>, size,
  );
}

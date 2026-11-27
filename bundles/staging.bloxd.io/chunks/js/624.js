export const id = 624;
export const ids = [624];
export const modules = {
  54280: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      parseShaderPack: () => Zr
    });

    function Zr(rr) {
      var Sr, Qr;
      const Zr = rr.get("shaderPackUrl"),
        Wr = null !== (Sr = rr.get("shaderPackMode")) && void 0 !== Sr ? Sr : "strict";
      if (null === Zr) {
        if (rr.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== rr.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(rr) {
          return "strict" === rr || "allow" === rr
        }(Wr)) throw new Error(`Unknown shaderPackMode "${Wr}" - use strict or allow`);
      const ar = (null !== (Qr = rr.get("variants")) && void 0 !== Qr ? Qr : "").split(",").find((rr => rr.trim().startsWith("liteShaderPack")));
      if (void 0 !== ar) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${ar.trim()}`);
      return {
        url: Zr,
        mode: Wr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
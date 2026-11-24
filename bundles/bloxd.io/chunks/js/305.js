export const id = 305;
export const ids = [305];
export const modules = {
  41743: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      parseShaderPack: () => Xk
    });

    function Xk(kk) {
      var Fk, Ik;
      const Xk = kk.get("shaderPackUrl"),
        Tk = null !== (Fk = kk.get("shaderPackMode")) && void 0 !== Fk ? Fk : "strict";
      if (null === Xk) {
        if (kk.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== kk.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(kk) {
          return "strict" === kk || "allow" === kk
        }(Tk)) throw new Error(`Unknown shaderPackMode "${Tk}" - use strict or allow`);
      const ik = (null !== (Ik = kk.get("variants")) && void 0 !== Ik ? Ik : "").split(",").find((kk => kk.trim().startsWith("liteShaderPack")));
      if (void 0 !== ik) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${ik.trim()}`);
      return {
        url: Xk,
        mode: Tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
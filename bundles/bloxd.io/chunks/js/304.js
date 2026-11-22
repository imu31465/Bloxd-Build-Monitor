export const id = 304;
export const ids = [304];
export const modules = {
  41321: (kk, ek, ik) => {
    ik.d(ek, {
      parseShaderPack: () => Dk
    });

    function Dk(kk) {
      var ek, ik;
      const Dk = kk.get("shaderPackUrl"),
        fk = null !== (ek = kk.get("shaderPackMode")) && void 0 !== ek ? ek : "strict";
      if (null === Dk) {
        if (kk.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== kk.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(kk) {
          return "strict" === kk || "allow" === kk
        }(fk)) throw new Error(`Unknown shaderPackMode "${fk}" - use strict or allow`);
      const Sk = (null !== (ik = kk.get("variants")) && void 0 !== ik ? ik : "").split(",").find((kk => kk.trim().startsWith("liteShaderPack")));
      if (void 0 !== Sk) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Sk.trim()}`);
      return {
        url: Dk,
        mode: fk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
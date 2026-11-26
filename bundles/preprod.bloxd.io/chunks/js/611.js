export const id = 611;
export const ids = [611];
export const modules = {
  44441: (UU, XU, zU) => {
    zU.d(XU, {
      parseShaderPack: () => cU
    });

    function cU(UU) {
      var XU, zU;
      const cU = UU.get("shaderPackUrl"),
        yU = null !== (XU = UU.get("shaderPackMode")) && void 0 !== XU ? XU : "strict";
      if (null === cU) {
        if (UU.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== UU.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(UU) {
          return "strict" === UU || "allow" === UU
        }(yU)) throw new Error(`Unknown shaderPackMode "${yU}" - use strict or allow`);
      const QU = (null !== (zU = UU.get("variants")) && void 0 !== zU ? zU : "").split(",").find((UU => UU.trim().startsWith("liteShaderPack")));
      if (void 0 !== QU) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${QU.trim()}`);
      return {
        url: cU,
        mode: yU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
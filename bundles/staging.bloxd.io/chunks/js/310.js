export const id = 310;
export const ids = [310];
export const modules = {
  42012: (uu, Eu, ju) => {
    ju.d(Eu, {
      parseShaderPack: () => su
    });

    function su(uu) {
      var Eu, ju;
      const su = uu.get("shaderPackUrl"),
        Uu = null !== (Eu = uu.get("shaderPackMode")) && void 0 !== Eu ? Eu : "strict";
      if (null === su) {
        if (uu.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== uu.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(uu) {
          return "strict" === uu || "allow" === uu
        }(Uu)) throw new Error(`Unknown shaderPackMode "${Uu}" - use strict or allow`);
      const Zu = (null !== (ju = uu.get("variants")) && void 0 !== ju ? ju : "").split(",").find((uu => uu.trim().startsWith("liteShaderPack")));
      if (void 0 !== Zu) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Zu.trim()}`);
      return {
        url: su,
        mode: Uu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
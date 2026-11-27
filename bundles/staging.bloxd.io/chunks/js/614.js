export const id = 614;
export const ids = [614];
export const modules = {
  44936: (ee, ie, He) => {
    He.d(ie, {
      parseShaderPack: () => ye
    });

    function ye(ee) {
      var ie, He;
      const ye = ee.get("shaderPackUrl"),
        be = null !== (ie = ee.get("shaderPackMode")) && void 0 !== ie ? ie : "strict";
      if (null === ye) {
        if (ee.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
        return null
      }
      if ("lite" !== ee.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
      if (! function(ee) {
          return "strict" === ee || "allow" === ee
        }(be)) throw new Error(`Unknown shaderPackMode "${be}" - use strict or allow`);
      const Me = (null !== (He = ee.get("variants")) && void 0 !== He ? He : "").split(",").find((ee => ee.trim().startsWith("liteShaderPack")));
      if (void 0 !== Me) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Me.trim()}`);
      return {
        url: ye,
        mode: be
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
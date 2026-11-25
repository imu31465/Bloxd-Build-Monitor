export const id = 362;
export const ids = [362];
export const modules = {
  61893: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      applyLightFoOffset: () => yG,
      getFloatingOriginOffset: () => SG,
      lightFoVersion: () => LG,
      wrapRenderableForFO: () => kG
    });
    var wG = ZG(42177);

    function SG(GG) {
      const bG = GG.camera;
      if (!bG) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ZG = bG.worldMatrix;
      return {
        x: ZG[12],
        y: ZG[13],
        z: ZG[14]
      }
    }

    function LG(GG) {
      return GG.camera ? GG.camera.worldMatrixVersion : 0
    }

    function yG(GG, bG) {
      const ZG = bG.camera?.worldMatrix;
      if (!ZG) return;
      const SG = ZG[12],
        LG = ZG[13],
        yG = ZG[14];
      let kG = 0;
      for (const UG of bG.lights) {
        if (kG >= wG.b) break;
        if (!UG._writeLightUbo) continue;
        const bG = 4 + 16 * kG,
          ZG = GG[bG + 3];
        if (0 === ZG || 2 === ZG) {
          const ZG = UG.worldMatrix;
          GG[bG] = ZG[12] - SG, GG[bG + 1] = ZG[13] - LG, GG[bG + 2] = ZG[14] - yG
        }
        kG++
      }
    }

    function kG(GG, bG, ZG) {
      let wG = -1;
      return () => {
        const SG = bG.camera ? bG.camera.worldMatrixVersion : -1;
        SG !== wG && (ZG(), wG = SG), GG()
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
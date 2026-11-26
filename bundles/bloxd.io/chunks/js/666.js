export const id = 666;
export const ids = [666];
export const modules = {
  64186: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      applyLightFoOffset: () => hH,
      getFloatingOriginOffset: () => rH,
      lightFoVersion: () => SH,
      wrapRenderableForFO: () => tH
    });
    var AH = LH(45215);

    function rH(HH) {
      const BH = HH.camera;
      if (!BH) return {
        x: 0,
        y: 0,
        z: 0
      };
      const LH = BH.worldMatrix;
      return {
        x: LH[12],
        y: LH[13],
        z: LH[14]
      }
    }

    function SH(HH) {
      return HH.camera ? HH.camera.worldMatrixVersion : 0
    }

    function hH(HH, BH) {
      const LH = BH.camera?.worldMatrix;
      if (!LH) return;
      const rH = LH[12],
        SH = LH[13],
        hH = LH[14];
      let tH = 0;
      for (const zH of BH.lights) {
        if (tH >= AH.e) break;
        if (!zH._writeLightUbo) continue;
        const BH = 4 + 16 * tH,
          LH = HH[BH + 3];
        if (0 === LH || 2 === LH) {
          const LH = zH.worldMatrix;
          HH[BH] = LH[12] - rH, HH[BH + 1] = LH[13] - SH, HH[BH + 2] = LH[14] - hH
        }
        tH++
      }
    }

    function tH(HH, BH, LH) {
      let AH = -1;
      return () => {
        const rH = BH.camera ? BH.camera.worldMatrixVersion : -1;
        rH !== AH && (LH(), AH = rH), HH()
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
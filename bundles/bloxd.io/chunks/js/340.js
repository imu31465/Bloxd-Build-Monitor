export const id = 340;
export const ids = [340];
export const modules = {
  59485: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      applyLightFoOffset: () => XJ,
      getFloatingOriginOffset: () => UJ,
      lightFoVersion: () => eJ,
      wrapRenderableForFO: () => AJ
    });
    var FJ = ZJ(40450);

    function UJ(JJ) {
      const cJ = JJ.camera;
      if (!cJ) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ZJ = cJ.worldMatrix;
      return {
        x: ZJ[12],
        y: ZJ[13],
        z: ZJ[14]
      }
    }

    function eJ(JJ) {
      return JJ.camera ? JJ.camera.worldMatrixVersion : 0
    }

    function XJ(JJ, cJ) {
      const ZJ = cJ.camera?.worldMatrix;
      if (!ZJ) return;
      const UJ = ZJ[12],
        eJ = ZJ[13],
        XJ = ZJ[14];
      let AJ = 0;
      for (const qJ of cJ.lights) {
        if (AJ >= FJ.e) break;
        if (!qJ._writeLightUbo) continue;
        const cJ = 4 + 16 * AJ,
          ZJ = JJ[cJ + 3];
        if (0 === ZJ || 2 === ZJ) {
          const ZJ = qJ.worldMatrix;
          JJ[cJ] = ZJ[12] - UJ, JJ[cJ + 1] = ZJ[13] - eJ, JJ[cJ + 2] = ZJ[14] - XJ
        }
        AJ++
      }
    }

    function AJ(JJ, cJ, ZJ) {
      let FJ = -1;
      return () => {
        const UJ = cJ.camera ? cJ.camera.worldMatrixVersion : -1;
        UJ !== FJ && (ZJ(), FJ = UJ), JJ()
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
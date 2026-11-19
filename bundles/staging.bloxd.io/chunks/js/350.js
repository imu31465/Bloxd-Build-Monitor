export const id = 350;
export const ids = [350];
export const modules = {
  60091: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      applyLightFoOffset: () => WT,
      getFloatingOriginOffset: () => zT,
      lightFoVersion: () => kT,
      wrapRenderableForFO: () => XT
    });
    var iT = IT(40563);

    function zT(TT) {
      const oT = TT.camera;
      if (!oT) return {
        x: 0,
        y: 0,
        z: 0
      };
      const IT = oT.worldMatrix;
      return {
        x: IT[12],
        y: IT[13],
        z: IT[14]
      }
    }

    function kT(TT) {
      return TT.camera ? TT.camera.worldMatrixVersion : 0
    }

    function WT(TT, oT) {
      const IT = oT.camera?.worldMatrix;
      if (!IT) return;
      const zT = IT[12],
        kT = IT[13],
        WT = IT[14];
      let XT = 0;
      for (const BT of oT.lights) {
        if (XT >= iT.e) break;
        if (!BT._writeLightUbo) continue;
        const oT = 4 + 16 * XT,
          IT = TT[oT + 3];
        if (0 === IT || 2 === IT) {
          const IT = BT.worldMatrix;
          TT[oT] = IT[12] - zT, TT[oT + 1] = IT[13] - kT, TT[oT + 2] = IT[14] - WT
        }
        XT++
      }
    }

    function XT(TT, oT, IT) {
      let iT = -1;
      return () => {
        const zT = oT.camera ? oT.camera.worldMatrixVersion : -1;
        zT !== iT && (IT(), iT = zT), TT()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
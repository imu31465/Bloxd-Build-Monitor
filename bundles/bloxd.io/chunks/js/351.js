export const id = 351;
export const ids = [351];
export const modules = {
  60636: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      applyLightFoOffset: () => OT,
      getFloatingOriginOffset: () => MT,
      lightFoVersion: () => KT,
      wrapRenderableForFO: () => yT
    });
    var lT = cT(41304);

    function MT(TT) {
      const kT = TT.camera;
      if (!kT) return {
        x: 0,
        y: 0,
        z: 0
      };
      const cT = kT.worldMatrix;
      return {
        x: cT[12],
        y: cT[13],
        z: cT[14]
      }
    }

    function KT(TT) {
      return TT.camera ? TT.camera.worldMatrixVersion : 0
    }

    function OT(TT, kT) {
      const cT = kT.camera?.worldMatrix;
      if (!cT) return;
      const MT = cT[12],
        KT = cT[13],
        OT = cT[14];
      let yT = 0;
      for (const fT of kT.lights) {
        if (yT >= lT.c) break;
        if (!fT._writeLightUbo) continue;
        const kT = 4 + 16 * yT,
          cT = TT[kT + 3];
        if (0 === cT || 2 === cT) {
          const cT = fT.worldMatrix;
          TT[kT] = cT[12] - MT, TT[kT + 1] = cT[13] - KT, TT[kT + 2] = cT[14] - OT
        }
        yT++
      }
    }

    function yT(TT, kT, cT) {
      let lT = -1;
      return () => {
        const MT = kT.camera ? kT.camera.worldMatrixVersion : -1;
        MT !== lT && (cT(), lT = MT), TT()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
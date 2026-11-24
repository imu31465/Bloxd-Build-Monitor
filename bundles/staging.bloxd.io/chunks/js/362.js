export const id = 362;
export const ids = [362];
export const modules = {
  61222: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      applyLightFoOffset: () => gT,
      getFloatingOriginOffset: () => zT,
      lightFoVersion: () => MT,
      wrapRenderableForFO: () => nT
    });
    var WT = mT(41868);

    function zT(TT) {
      const UT = TT.camera;
      if (!UT) return {
        x: 0,
        y: 0,
        z: 0
      };
      const mT = UT.worldMatrix;
      return {
        x: mT[12],
        y: mT[13],
        z: mT[14]
      }
    }

    function MT(TT) {
      return TT.camera ? TT.camera.worldMatrixVersion : 0
    }

    function gT(TT, UT) {
      const mT = UT.camera?.worldMatrix;
      if (!mT) return;
      const zT = mT[12],
        MT = mT[13],
        gT = mT[14];
      let nT = 0;
      for (const HT of UT.lights) {
        if (nT >= WT.c) break;
        if (!HT._writeLightUbo) continue;
        const UT = 4 + 16 * nT,
          mT = TT[UT + 3];
        if (0 === mT || 2 === mT) {
          const mT = HT.worldMatrix;
          TT[UT] = mT[12] - zT, TT[UT + 1] = mT[13] - MT, TT[UT + 2] = mT[14] - gT
        }
        nT++
      }
    }

    function nT(TT, UT, mT) {
      let WT = -1;
      return () => {
        const zT = UT.camera ? UT.camera.worldMatrixVersion : -1;
        zT !== WT && (mT(), WT = zT), TT()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
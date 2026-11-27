export const id = 675;
export const ids = [675];
export const modules = {
  64479: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      applyLightFoOffset: () => PW,
      getFloatingOriginOffset: () => EW,
      lightFoVersion: () => NW,
      wrapRenderableForFO: () => LW
    });
    var mW = OW(53901);

    function EW(WW) {
      const iW = WW.camera;
      if (!iW) return {
        x: 0,
        y: 0,
        z: 0
      };
      const OW = iW.worldMatrix;
      return {
        x: OW[12],
        y: OW[13],
        z: OW[14]
      }
    }

    function NW(WW) {
      return WW.camera ? WW.camera.worldMatrixVersion : 0
    }

    function PW(WW, iW) {
      const OW = iW.camera?.worldMatrix;
      if (!OW) return;
      const EW = OW[12],
        NW = OW[13],
        PW = OW[14];
      let LW = 0;
      for (const cW of iW.lights) {
        if (LW >= mW.b) break;
        if (!cW._writeLightUbo) continue;
        const iW = 4 + 16 * LW,
          OW = WW[iW + 3];
        if (0 === OW || 2 === OW) {
          const OW = cW.worldMatrix;
          WW[iW] = OW[12] - EW, WW[iW + 1] = OW[13] - NW, WW[iW + 2] = OW[14] - PW
        }
        LW++
      }
    }

    function LW(WW, iW, OW) {
      let mW = -1;
      return () => {
        const EW = iW.camera ? iW.camera.worldMatrixVersion : -1;
        EW !== mW && (OW(), mW = EW), WW()
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
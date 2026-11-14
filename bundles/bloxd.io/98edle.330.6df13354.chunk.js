export const id = 330;
export const ids = [330];
export const modules = {
  58676: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      applyLightFoOffset: () => AW,
      getFloatingOriginOffset: () => CW,
      lightFoVersion: () => zR,
      wrapRenderableForFO: () => bR
    });
    var wW = MW(39201);

    function CW(WW) {
      const RW = WW.camera;
      if (!RW) return {
        x: 0,
        y: 0,
        z: 0
      };
      const MW = RW.worldMatrix;
      return {
        x: MW[12],
        y: MW[13],
        z: MW[14]
      }
    }

    function zR(WW) {
      return WW.camera ? WW.camera.worldMatrixVersion : 0
    }

    function AW(WW, RW) {
      const MW = RW.camera?.worldMatrix;
      if (!MW) return;
      const CW = MW[12],
        zR = MW[13],
        AW = MW[14];
      let bR = 0;
      for (const yR of RW.lights) {
        if (bR >= wW.e) break;
        if (!yR._writeLightUbo) continue;
        const RW = 4 + 16 * bR,
          MW = WW[RW + 3];
        if (0 === MW || 2 === MW) {
          const MW = yR.worldMatrix;
          WW[RW] = MW[12] - CW, WW[RW + 1] = MW[13] - zR, WW[RW + 2] = MW[14] - AW
        }
        bR++
      }
    }

    function bR(WW, RW, MW) {
      let wW = -1;
      return () => {
        const CW = RW.camera ? RW.camera.worldMatrixVersion : -1;
        CW !== wW && (MW(), wW = CW), WW()
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
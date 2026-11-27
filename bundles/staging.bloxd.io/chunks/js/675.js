export const id = 675;
export const ids = [675];
export const modules = {
  64212: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      applyLightFoOffset: () => ZR,
      getFloatingOriginOffset: () => tR,
      lightFoVersion: () => uR,
      wrapRenderableForFO: () => qR
    });
    var yR = GR(53745);

    function tR(RR) {
      const JR = RR.camera;
      if (!JR) return {
        x: 0,
        y: 0,
        z: 0
      };
      const GR = JR.worldMatrix;
      return {
        x: GR[12],
        y: GR[13],
        z: GR[14]
      }
    }

    function uR(RR) {
      return RR.camera ? RR.camera.worldMatrixVersion : 0
    }

    function ZR(RR, JR) {
      const GR = JR.camera?.worldMatrix;
      if (!GR) return;
      const tR = GR[12],
        uR = GR[13],
        ZR = GR[14];
      let qR = 0;
      for (const iR of JR.lights) {
        if (qR >= yR.d) break;
        if (!iR._writeLightUbo) continue;
        const JR = 4 + 16 * qR,
          GR = RR[JR + 3];
        if (0 === GR || 2 === GR) {
          const GR = iR.worldMatrix;
          RR[JR] = GR[12] - tR, RR[JR + 1] = GR[13] - uR, RR[JR + 2] = GR[14] - ZR
        }
        qR++
      }
    }

    function qR(RR, JR, GR) {
      let yR = -1;
      return () => {
        const tR = JR.camera ? JR.camera.worldMatrixVersion : -1;
        tR !== yR && (GR(), yR = tR), RR()
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
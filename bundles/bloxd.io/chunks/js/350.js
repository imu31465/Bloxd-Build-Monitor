export const id = 350;
export const ids = [350];
export const modules = {
  60285: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      applyLightFoOffset: () => RY,
      getFloatingOriginOffset: () => AY,
      lightFoVersion: () => IY,
      wrapRenderableForFO: () => OY
    });
    var FY = DY(40800);

    function AY(YY) {
      const rY = YY.camera;
      if (!rY) return {
        x: 0,
        y: 0,
        z: 0
      };
      const DY = rY.worldMatrix;
      return {
        x: DY[12],
        y: DY[13],
        z: DY[14]
      }
    }

    function IY(YY) {
      return YY.camera ? YY.camera.worldMatrixVersion : 0
    }

    function RY(YY, rY) {
      const DY = rY.camera?.worldMatrix;
      if (!DY) return;
      const AY = DY[12],
        IY = DY[13],
        RY = DY[14];
      let OY = 0;
      for (const gY of rY.lights) {
        if (OY >= FY.c) break;
        if (!gY._writeLightUbo) continue;
        const rY = 4 + 16 * OY,
          DY = YY[rY + 3];
        if (0 === DY || 2 === DY) {
          const DY = gY.worldMatrix;
          YY[rY] = DY[12] - AY, YY[rY + 1] = DY[13] - IY, YY[rY + 2] = DY[14] - RY
        }
        OY++
      }
    }

    function OY(YY, rY, DY) {
      let FY = -1;
      return () => {
        const AY = rY.camera ? rY.camera.worldMatrixVersion : -1;
        AY !== FY && (DY(), FY = AY), YY()
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
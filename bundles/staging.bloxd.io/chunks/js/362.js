export const id = 362;
export const ids = [362];
export const modules = {
  61389: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      applyLightFoOffset: () => GB,
      getFloatingOriginOffset: () => JB,
      lightFoVersion: () => oB,
      wrapRenderableForFO: () => vB
    });
    var TB = ZB(41757);

    function JB(BB) {
      const IB = BB.camera;
      if (!IB) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ZB = IB.worldMatrix;
      return {
        x: ZB[12],
        y: ZB[13],
        z: ZB[14]
      }
    }

    function oB(BB) {
      return BB.camera ? BB.camera.worldMatrixVersion : 0
    }

    function GB(BB, IB) {
      const ZB = IB.camera?.worldMatrix;
      if (!ZB) return;
      const JB = ZB[12],
        oB = ZB[13],
        GB = ZB[14];
      let vB = 0;
      for (const kB of IB.lights) {
        if (vB >= TB.b) break;
        if (!kB._writeLightUbo) continue;
        const IB = 4 + 16 * vB,
          ZB = BB[IB + 3];
        if (0 === ZB || 2 === ZB) {
          const ZB = kB.worldMatrix;
          BB[IB] = ZB[12] - JB, BB[IB + 1] = ZB[13] - oB, BB[IB + 2] = ZB[14] - GB
        }
        vB++
      }
    }

    function vB(BB, IB, ZB) {
      let TB = -1;
      return () => {
        const JB = IB.camera ? IB.camera.worldMatrixVersion : -1;
        JB !== TB && (ZB(), TB = JB), BB()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
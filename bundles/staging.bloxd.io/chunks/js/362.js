export const id = 362;
export const ids = [362];
export const modules = {
  61513: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      applyLightFoOffset: () => IB,
      getFloatingOriginOffset: () => nB,
      lightFoVersion: () => dB,
      wrapRenderableForFO: () => NB
    });
    var QB = zB(41821);

    function nB(BB) {
      const jB = BB.camera;
      if (!jB) return {
        x: 0,
        y: 0,
        z: 0
      };
      const zB = jB.worldMatrix;
      return {
        x: zB[12],
        y: zB[13],
        z: zB[14]
      }
    }

    function dB(BB) {
      return BB.camera ? BB.camera.worldMatrixVersion : 0
    }

    function IB(BB, jB) {
      const zB = jB.camera?.worldMatrix;
      if (!zB) return;
      const nB = zB[12],
        dB = zB[13],
        IB = zB[14];
      let NB = 0;
      for (const uB of jB.lights) {
        if (NB >= QB.b) break;
        if (!uB._writeLightUbo) continue;
        const jB = 4 + 16 * NB,
          zB = BB[jB + 3];
        if (0 === zB || 2 === zB) {
          const zB = uB.worldMatrix;
          BB[jB] = zB[12] - nB, BB[jB + 1] = zB[13] - dB, BB[jB + 2] = zB[14] - IB
        }
        NB++
      }
    }

    function NB(BB, jB, zB) {
      let QB = -1;
      return () => {
        const nB = jB.camera ? jB.camera.worldMatrixVersion : -1;
        nB !== QB && (zB(), QB = nB), BB()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
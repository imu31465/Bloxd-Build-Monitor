export const id = 340;
export const ids = [340];
export const modules = {
  59794: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      applyLightFoOffset: () => lB,
      getFloatingOriginOffset: () => yB,
      lightFoVersion: () => pB,
      wrapRenderableForFO: () => JB
    });
    var VB = dB(40446);

    function yB(BB) {
      const TB = BB.camera;
      if (!TB) return {
        x: 0,
        y: 0,
        z: 0
      };
      const dB = TB.worldMatrix;
      return {
        x: dB[12],
        y: dB[13],
        z: dB[14]
      }
    }

    function pB(BB) {
      return BB.camera ? BB.camera.worldMatrixVersion : 0
    }

    function lB(BB, TB) {
      const dB = TB.camera?.worldMatrix;
      if (!dB) return;
      const yB = dB[12],
        pB = dB[13],
        lB = dB[14];
      let JB = 0;
      for (const YB of TB.lights) {
        if (JB >= VB.e) break;
        if (!YB._writeLightUbo) continue;
        const TB = 4 + 16 * JB,
          dB = BB[TB + 3];
        if (0 === dB || 2 === dB) {
          const dB = YB.worldMatrix;
          BB[TB] = dB[12] - yB, BB[TB + 1] = dB[13] - pB, BB[TB + 2] = dB[14] - lB
        }
        JB++
      }
    }

    function JB(BB, TB, dB) {
      let VB = -1;
      return () => {
        const yB = TB.camera ? TB.camera.worldMatrixVersion : -1;
        yB !== VB && (dB(), VB = yB), BB()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
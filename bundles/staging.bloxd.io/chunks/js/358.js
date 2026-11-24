export const id = 358;
export const ids = [358];
export const modules = {
  61108: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      applyLightFoOffset: () => rD,
      getFloatingOriginOffset: () => sD,
      lightFoVersion: () => KD,
      wrapRenderableForFO: () => LD
    });
    var pD = wD(41634);

    function sD(DD) {
      const zD = DD.camera;
      if (!zD) return {
        x: 0,
        y: 0,
        z: 0
      };
      const wD = zD.worldMatrix;
      return {
        x: wD[12],
        y: wD[13],
        z: wD[14]
      }
    }

    function KD(DD) {
      return DD.camera ? DD.camera.worldMatrixVersion : 0
    }

    function rD(DD, zD) {
      const wD = zD.camera?.worldMatrix;
      if (!wD) return;
      const sD = wD[12],
        KD = wD[13],
        rD = wD[14];
      let LD = 0;
      for (const cD of zD.lights) {
        if (LD >= pD.d) break;
        if (!cD._writeLightUbo) continue;
        const zD = 4 + 16 * LD,
          wD = DD[zD + 3];
        if (0 === wD || 2 === wD) {
          const wD = cD.worldMatrix;
          DD[zD] = wD[12] - sD, DD[zD + 1] = wD[13] - KD, DD[zD + 2] = wD[14] - rD
        }
        LD++
      }
    }

    function LD(DD, zD, wD) {
      let pD = -1;
      return () => {
        const sD = zD.camera ? zD.camera.worldMatrixVersion : -1;
        sD !== pD && (wD(), pD = sD), DD()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
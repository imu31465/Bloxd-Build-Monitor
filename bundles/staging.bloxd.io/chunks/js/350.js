export const id = 350;
export const ids = [350];
export const modules = {
  60483: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      applyLightFoOffset: () => fD,
      getFloatingOriginOffset: () => pD,
      lightFoVersion: () => iD,
      wrapRenderableForFO: () => bD
    });
    var ID = cD(40830);

    function pD(DD) {
      const CD = DD.camera;
      if (!CD) return {
        x: 0,
        y: 0,
        z: 0
      };
      const cD = CD.worldMatrix;
      return {
        x: cD[12],
        y: cD[13],
        z: cD[14]
      }
    }

    function iD(DD) {
      return DD.camera ? DD.camera.worldMatrixVersion : 0
    }

    function fD(DD, CD) {
      const cD = CD.camera?.worldMatrix;
      if (!cD) return;
      const pD = cD[12],
        iD = cD[13],
        fD = cD[14];
      let bD = 0;
      for (const QD of CD.lights) {
        if (bD >= ID.b) break;
        if (!QD._writeLightUbo) continue;
        const CD = 4 + 16 * bD,
          cD = DD[CD + 3];
        if (0 === cD || 2 === cD) {
          const cD = QD.worldMatrix;
          DD[CD] = cD[12] - pD, DD[CD + 1] = cD[13] - iD, DD[CD + 2] = cD[14] - fD
        }
        bD++
      }
    }

    function bD(DD, CD, cD) {
      let ID = -1;
      return () => {
        const pD = CD.camera ? CD.camera.worldMatrixVersion : -1;
        pD !== ID && (cD(), ID = pD), DD()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
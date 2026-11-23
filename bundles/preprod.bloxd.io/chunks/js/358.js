export const id = 358;
export const ids = [358];
export const modules = {
  61016: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      applyLightFoOffset: () => nC,
      getFloatingOriginOffset: () => wC,
      lightFoVersion: () => bC,
      wrapRenderableForFO: () => fC
    });
    var QC = ZC(41543);

    function wC(CC) {
      const zC = CC.camera;
      if (!zC) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ZC = zC.worldMatrix;
      return {
        x: ZC[12],
        y: ZC[13],
        z: ZC[14]
      }
    }

    function bC(CC) {
      return CC.camera ? CC.camera.worldMatrixVersion : 0
    }

    function nC(CC, zC) {
      const ZC = zC.camera?.worldMatrix;
      if (!ZC) return;
      const wC = ZC[12],
        bC = ZC[13],
        nC = ZC[14];
      let fC = 0;
      for (const oC of zC.lights) {
        if (fC >= QC.b) break;
        if (!oC._writeLightUbo) continue;
        const zC = 4 + 16 * fC,
          ZC = CC[zC + 3];
        if (0 === ZC || 2 === ZC) {
          const ZC = oC.worldMatrix;
          CC[zC] = ZC[12] - wC, CC[zC + 1] = ZC[13] - bC, CC[zC + 2] = ZC[14] - nC
        }
        fC++
      }
    }

    function fC(CC, zC, ZC) {
      let QC = -1;
      return () => {
        const wC = zC.camera ? zC.camera.worldMatrixVersion : -1;
        wC !== QC && (ZC(), QC = wC), CC()
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
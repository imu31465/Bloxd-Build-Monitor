export const id = 666;
export const ids = [666];
export const modules = {
  63981: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      applyLightFoOffset: () => aM,
      getFloatingOriginOffset: () => SM,
      lightFoVersion: () => jM,
      wrapRenderableForFO: () => PM
    });
    var OM = iM(44384);

    function SM(MM) {
      const rM = MM.camera;
      if (!rM) return {
        x: 0,
        y: 0,
        z: 0
      };
      const iM = rM.worldMatrix;
      return {
        x: iM[12],
        y: iM[13],
        z: iM[14]
      }
    }

    function jM(MM) {
      return MM.camera ? MM.camera.worldMatrixVersion : 0
    }

    function aM(MM, rM) {
      const iM = rM.camera?.worldMatrix;
      if (!iM) return;
      const SM = iM[12],
        jM = iM[13],
        aM = iM[14];
      let PM = 0;
      for (const nM of rM.lights) {
        if (PM >= OM.b) break;
        if (!nM._writeLightUbo) continue;
        const rM = 4 + 16 * PM,
          iM = MM[rM + 3];
        if (0 === iM || 2 === iM) {
          const iM = nM.worldMatrix;
          MM[rM] = iM[12] - SM, MM[rM + 1] = iM[13] - jM, MM[rM + 2] = iM[14] - aM
        }
        PM++
      }
    }

    function PM(MM, rM, iM) {
      let OM = -1;
      return () => {
        const SM = rM.camera ? rM.camera.worldMatrixVersion : -1;
        SM !== OM && (iM(), OM = SM), MM()
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
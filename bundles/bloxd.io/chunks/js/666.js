export const id = 666;
export const ids = [666];
export const modules = {
  63895: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      applyLightFoOffset: () => Ke,
      getFloatingOriginOffset: () => be,
      lightFoVersion: () => Me,
      wrapRenderableForFO: () => Ue
    });
    var ye = He(44924);

    function be(ee) {
      const ie = ee.camera;
      if (!ie) return {
        x: 0,
        y: 0,
        z: 0
      };
      const He = ie.worldMatrix;
      return {
        x: He[12],
        y: He[13],
        z: He[14]
      }
    }

    function Me(ee) {
      return ee.camera ? ee.camera.worldMatrixVersion : 0
    }

    function Ke(ee, ie) {
      const He = ie.camera?.worldMatrix;
      if (!He) return;
      const be = He[12],
        Me = He[13],
        Ke = He[14];
      let Ue = 0;
      for (const Fe of ie.lights) {
        if (Ue >= ye.b) break;
        if (!Fe._writeLightUbo) continue;
        const ie = 4 + 16 * Ue,
          He = ee[ie + 3];
        if (0 === He || 2 === He) {
          const He = Fe.worldMatrix;
          ee[ie] = He[12] - be, ee[ie + 1] = He[13] - Me, ee[ie + 2] = He[14] - Ke
        }
        Ue++
      }
    }

    function Ue(ee, ie, He) {
      let ye = -1;
      return () => {
        const be = ie.camera ? ie.camera.worldMatrixVersion : -1;
        be !== ye && (He(), ye = be), ee()
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
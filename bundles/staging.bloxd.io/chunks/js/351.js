export const id = 351;
export const ids = [351];
export const modules = {
  60957: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      applyLightFoOffset: () => Pd,
      getFloatingOriginOffset: () => Nd,
      lightFoVersion: () => Wd,
      wrapRenderableForFO: () => Zd
    });
    var pd = kd(41692);

    function Nd(dd) {
      const Jd = dd.camera;
      if (!Jd) return {
        x: 0,
        y: 0,
        z: 0
      };
      const kd = Jd.worldMatrix;
      return {
        x: kd[12],
        y: kd[13],
        z: kd[14]
      }
    }

    function Wd(dd) {
      return dd.camera ? dd.camera.worldMatrixVersion : 0
    }

    function Pd(dd, Jd) {
      const kd = Jd.camera?.worldMatrix;
      if (!kd) return;
      const Nd = kd[12],
        Wd = kd[13],
        Pd = kd[14];
      let Zd = 0;
      for (const gd of Jd.lights) {
        if (Zd >= pd.e) break;
        if (!gd._writeLightUbo) continue;
        const Jd = 4 + 16 * Zd,
          kd = dd[Jd + 3];
        if (0 === kd || 2 === kd) {
          const kd = gd.worldMatrix;
          dd[Jd] = kd[12] - Nd, dd[Jd + 1] = kd[13] - Wd, dd[Jd + 2] = kd[14] - Pd
        }
        Zd++
      }
    }

    function Zd(dd, Jd, kd) {
      let pd = -1;
      return () => {
        const Nd = Jd.camera ? Jd.camera.worldMatrixVersion : -1;
        Nd !== pd && (kd(), pd = Nd), dd()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
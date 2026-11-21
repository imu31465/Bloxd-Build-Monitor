export const id = 352;
export const ids = [352];
export const modules = {
  60963: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd, Nd, Wd, Pd) {
      const Zd = Jd,
        gd = pd,
        Cd = kd;
      dd[Cd + 0] = Zd[gd + 0], dd[Cd + 1] = Zd[gd + 1], dd[Cd + 2] = Zd[gd + 2], dd[Cd + 3] = Zd[gd + 3], dd[Cd + 4] = Zd[gd + 4], dd[Cd + 5] = Zd[gd + 5], dd[Cd + 6] = Zd[gd + 6], dd[Cd + 7] = Zd[gd + 7], dd[Cd + 8] = Zd[gd + 8], dd[Cd + 9] = Zd[gd + 9], dd[Cd + 10] = Zd[gd + 10], dd[Cd + 11] = Zd[gd + 11], dd[Cd + 12] = Zd[gd + 12] - Nd, dd[Cd + 13] = Zd[gd + 13] - Wd, dd[Cd + 14] = Zd[gd + 14] - Pd, dd[Cd + 15] = Zd[gd + 15]
    }

    function Nd(dd) {
      return (Jd, kd, Nd, Wd) => {
        const Pd = dd.camera;
        if (!Pd) return void pd(Jd, kd, Nd, Wd, 0, 0, 0);
        const Zd = Pd.worldMatrix;
        pd(Jd, kd, Nd, Wd, Zd[12], Zd[13], Zd[14])
      }
    }
    kd.r(Jd), kd.d(Jd, {
      makePackMeshWorld: () => Nd,
      packMat4IntoF32WithOffset: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
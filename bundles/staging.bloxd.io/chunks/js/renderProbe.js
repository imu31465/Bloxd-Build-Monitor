export const id = 49;
export const ids = [49];
export const modules = {
  43238: (dd, Jd, kd) => {
    kd.d(Jd, {
      startRenderProbe: () => od
    });
    var pd = kd(614),
      Nd = kd(4233),
      Wd = kd(2704),
      Pd = kd(4369);
    const Zd = 1e3,
      gd = 36e5,
      Cd = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Kd(dd, Jd, kd) {
      var Nd, Wd;
      return `${dd}; ${kd?`os ${kd.os}, gpu ${null!==(Nd=kd.gpuFamily)&&void 0!==Nd?Nd:"unknown"} ${null!==(Wd=kd.gpuModel)&&void 0!==Wd?Wd:"unknown"}`:"device unknown"}, version ${pd.c}; ${Jd}`
    }

    function od(dd) {
      var Jd;
      const kd = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Jd ? Jd : "none";
      if ("webgl" !== kd) {
        const dd = (0, Pd.h)();
        for (const {
            field: Jd
          }
          of Cd) delete dd[Jd];
        return void(0, Wd.h)("renderprobe", `decode and particle probes not run: the renderer is ${kd}, and they read WebGL2's draws`)
      }
      const pd = (0, Pd.h)();
      for (const {
          field: od,
          name: ld
        }
        of Cd)(0, Pd.l)(pd, od, ["1", "pending"], gd, Zd).then((dd => {
        void 0 !== dd && (0, Wd.h)("renderprobe", Kd(ld, dd, (0, Nd.b)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
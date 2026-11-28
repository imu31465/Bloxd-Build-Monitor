export const id = 59;
export const ids = [59];
export const modules = {
  55078: (dd, Od, md) => {
    md.d(Od, {
      startRenderProbe: () => td
    });
    var Wd = md(708),
      Fd = md(5030),
      Rd = md(3903),
      Xd = md(5169);
    const Kd = 1e3,
      hd = 36e5,
      vd = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Qd(dd, Od, md) {
      var Fd, Rd;
      return `${dd}; ${md?`os ${md.os}, gpu ${null!==(Fd=md.gpuFamily)&&void 0!==Fd?Fd:"unknown"} ${null!==(Rd=md.gpuModel)&&void 0!==Rd?Rd:"unknown"}`:"device unknown"}, version ${Wd.c}; ${Od}`
    }

    function td(dd) {
      var Od;
      const md = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Od ? Od : "none";
      if ("webgl" !== md) {
        const dd = (0, Xd.i)();
        for (const {
            field: Od
          }
          of vd) delete dd[Od];
        return void(0, Rd.k)("renderprobe", `decode and particle probes not run: the renderer is ${md}, and they read WebGL2's draws`)
      }
      const Wd = (0, Xd.i)();
      for (const {
          field: td,
          name: od
        }
        of vd)(0, Xd.j)(Wd, td, ["1", "pending"], hd, Kd).then((dd => {
        void 0 !== dd && (0, Rd.k)("renderprobe", Qd(od, dd, (0, Fd.b)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
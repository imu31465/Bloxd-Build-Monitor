export const id = 51;
export const ids = [51];
export const modules = {
  51210: (pp, ip, cp) => {
    cp.d(ip, {
      startRenderProbe: () => Ap
    });
    var Op = cp(643),
      op = cp(4483),
      Ip = cp(2908),
      Sp = cp(4596);
    const xp = 1e3,
      Lp = 36e5,
      Yp = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Dp(pp, ip, cp) {
      var op, Ip;
      return `${pp}; ${cp?`os ${cp.os}, gpu ${null!==(op=cp.gpuFamily)&&void 0!==op?op:"unknown"} ${null!==(Ip=cp.gpuModel)&&void 0!==Ip?Ip:"unknown"}`:"device unknown"}, version ${Op.c}; ${ip}`
    }

    function Ap(pp) {
      var ip;
      const cp = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.backend) && void 0 !== ip ? ip : "none";
      if ("webgl" !== cp) {
        const pp = (0, Sp.f)();
        for (const {
            field: ip
          }
          of Yp) delete pp[ip];
        return void(0, Ip.n)("renderprobe", `decode and particle probes not run: the renderer is ${cp}, and they read WebGL2's draws`)
      }
      const Op = (0, Sp.f)();
      for (const {
          field: Ap,
          name: Pp
        }
        of Yp)(0, Sp.i)(Op, Ap, ["1", "pending"], Lp, xp).then((pp => {
        void 0 !== pp && (0, Ip.n)("renderprobe", Dp(Pp, pp, (0, op.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
export const id = 49;
export const ids = [49];
export const modules = {
  42710: (vv, zv, Pv) => {
    Pv.d(zv, {
      startRenderProbe: () => Tv
    });
    var hv = Pv(628),
      Sv = Pv(4154),
      ev = Pv(2682),
      gv = Pv(4264);
    const pv = 1e3,
      dv = 36e5,
      Nv = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function lv(vv, zv, Pv) {
      var Sv, ev;
      return `${vv}; ${Pv?`os ${Pv.os}, gpu ${null!==(Sv=Pv.gpuFamily)&&void 0!==Sv?Sv:"unknown"} ${null!==(ev=Pv.gpuModel)&&void 0!==ev?ev:"unknown"}`:"device unknown"}, version ${hv.c}; ${zv}`
    }

    function Tv(vv) {
      var zv;
      const Pv = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.backend) && void 0 !== zv ? zv : "none";
      if ("webgl" !== Pv) {
        const vv = (0, gv.f)();
        for (const {
            field: zv
          }
          of Nv) delete vv[zv];
        return void(0, ev.i)("renderprobe", `decode and particle probes not run: the renderer is ${Pv}, and they read WebGL2's draws`)
      }
      const hv = (0, gv.f)();
      for (const {
          field: Tv,
          name: Wv
        }
        of Nv)(0, gv.g)(hv, Tv, ["1", "pending"], dv, pv).then((vv => {
        void 0 !== vv && (0, ev.i)("renderprobe", lv(Wv, vv, (0, Sv.c)()))
      }))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
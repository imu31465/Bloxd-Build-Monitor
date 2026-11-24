export const id = 51;
export const ids = [51];
export const modules = {
  51293: (tt, et, Vt) => {
    Vt.d(et, {
      startRenderProbe: () => Qt
    });
    var Ot = Vt(712),
      qt = Vt(4503),
      Dt = Vt(2902),
      mt = Vt(4646);
    const dt = 1e3,
      jt = 36e5,
      Ht = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Xt(tt, et, Vt) {
      var qt, Dt;
      return `${tt}; ${Vt?`os ${Vt.os}, gpu ${null!==(qt=Vt.gpuFamily)&&void 0!==qt?qt:"unknown"} ${null!==(Dt=Vt.gpuModel)&&void 0!==Dt?Dt:"unknown"}`:"device unknown"}, version ${Ot.d}; ${et}`
    }

    function Qt(tt) {
      var et;
      const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.backend) && void 0 !== et ? et : "none";
      if ("webgl" !== Vt) {
        const tt = (0, mt.f)();
        for (const {
            field: et
          }
          of Ht) delete tt[et];
        return void(0, Dt.n)("renderprobe", `decode and particle probes not run: the renderer is ${Vt}, and they read WebGL2's draws`)
      }
      const Ot = (0, mt.f)();
      for (const {
          field: Qt,
          name: lt
        }
        of Ht)(0, mt.i)(Ot, Qt, ["1", "pending"], jt, dt).then((tt => {
        void 0 !== tt && (0, Dt.n)("renderprobe", Xt(lt, tt, (0, qt.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
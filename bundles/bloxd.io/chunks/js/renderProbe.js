export const id = 50;
export const ids = [50];
export const modules = {
  50985: (mm, Tm, fm) => {
    fm.d(Tm, {
      startRenderProbe: () => pm
    });
    var hm = fm(658),
      Am = fm(4328),
      am = fm(2813),
      xm = fm(4448);
    const wm = 1e3,
      Dm = 36e5,
      im = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Rm(mm, Tm, fm) {
      var Am, am;
      return `${mm}; ${fm?`os ${fm.os}, gpu ${null!==(Am=fm.gpuFamily)&&void 0!==Am?Am:"unknown"} ${null!==(am=fm.gpuModel)&&void 0!==am?am:"unknown"}`:"device unknown"}, version ${hm.d}; ${Tm}`
    }

    function pm(mm) {
      var Tm;
      const fm = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.backend) && void 0 !== Tm ? Tm : "none";
      if ("webgl" !== fm) {
        const mm = (0, xm.e)();
        for (const {
            field: Tm
          }
          of im) delete mm[Tm];
        return void(0, am.g)("renderprobe", `decode and particle probes not run: the renderer is ${fm}, and they read WebGL2's draws`)
      }
      const hm = (0, xm.e)();
      for (const {
          field: pm,
          name: Em
        }
        of im)(0, xm.f)(hm, pm, ["1", "pending"], Dm, wm).then((mm => {
        void 0 !== mm && (0, am.g)("renderprobe", Rm(Em, mm, (0, Am.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
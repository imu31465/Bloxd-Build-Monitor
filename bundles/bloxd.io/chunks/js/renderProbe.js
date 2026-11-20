export const id = 49;
export const ids = [49];
export const modules = {
  42819: (TT, kT, cT) => {
    cT.d(kT, {
      startRenderProbe: () => AT
    });
    var lT = cT(623),
      MT = cT(4385),
      KT = cT(2853),
      OT = cT(4491);
    const yT = 1e3,
      fT = 36e5,
      xT = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function IT(TT, kT, cT) {
      var MT, KT;
      return `${TT}; ${cT?`os ${cT.os}, gpu ${null!==(MT=cT.gpuFamily)&&void 0!==MT?MT:"unknown"} ${null!==(KT=cT.gpuModel)&&void 0!==KT?KT:"unknown"}`:"device unknown"}, version ${lT.d}; ${kT}`
    }

    function AT(TT) {
      var kT;
      const cT = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== kT ? kT : "none";
      if ("webgl" !== cT) {
        const TT = (0, OT.g)();
        for (const {
            field: kT
          }
          of xT) delete TT[kT];
        return void(0, KT.k)("renderprobe", `decode and particle probes not run: the renderer is ${cT}, and they read WebGL2's draws`)
      }
      const lT = (0, OT.g)();
      for (const {
          field: AT,
          name: CT
        }
        of xT)(0, OT.h)(lT, AT, ["1", "pending"], fT, yT).then((TT => {
        void 0 !== TT && (0, KT.k)("renderprobe", IT(CT, TT, (0, MT.b)()))
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
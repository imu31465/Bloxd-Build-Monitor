export const id = 51;
export const ids = [51];
export const modules = {
  51127: (TT, UT, mT) => {
    mT.d(UT, {
      startRenderProbe: () => lT
    });
    var WT = mT(662),
      zT = mT(4498),
      MT = mT(2929),
      gT = mT(4619);
    const nT = 1e3,
      HT = 36e5,
      kT = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function jT(TT, UT, mT) {
      var zT, MT;
      return `${TT}; ${mT?`os ${mT.os}, gpu ${null!==(zT=mT.gpuFamily)&&void 0!==zT?zT:"unknown"} ${null!==(MT=mT.gpuModel)&&void 0!==MT?MT:"unknown"}`:"device unknown"}, version ${WT.d}; ${UT}`
    }

    function lT(TT) {
      var UT;
      const mT = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== UT ? UT : "none";
      if ("webgl" !== mT) {
        const TT = (0, gT.e)();
        for (const {
            field: UT
          }
          of kT) delete TT[UT];
        return void(0, MT.m)("renderprobe", `decode and particle probes not run: the renderer is ${mT}, and they read WebGL2's draws`)
      }
      const WT = (0, gT.e)();
      for (const {
          field: lT,
          name: LT
        }
        of kT)(0, gT.g)(WT, lT, ["1", "pending"], HT, nT).then((TT => {
        void 0 !== TT && (0, MT.m)("renderprobe", jT(LT, TT, (0, zT.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
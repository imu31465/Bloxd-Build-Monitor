export const id = 57;
export const ids = [57];
export const modules = {
  53764: (MM, rM, iM) => {
    iM.d(rM, {
      startRenderProbe: () => LM
    });
    var OM = iM(632),
      SM = iM(4754),
      jM = iM(3122),
      aM = iM(4895);
    const PM = 1e3,
      nM = 36e5,
      QM = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function zM(MM, rM, iM) {
      var SM, jM;
      return `${MM}; ${iM?`os ${iM.os}, gpu ${null!==(SM=iM.gpuFamily)&&void 0!==SM?SM:"unknown"} ${null!==(jM=iM.gpuModel)&&void 0!==jM?jM:"unknown"}`:"device unknown"}, version ${OM.c}; ${rM}`
    }

    function LM(MM) {
      var rM;
      const iM = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.backend) && void 0 !== rM ? rM : "none";
      if ("webgl" !== iM) {
        const MM = (0, aM.d)();
        for (const {
            field: rM
          }
          of QM) delete MM[rM];
        return void(0, jM.k)("renderprobe", `decode and particle probes not run: the renderer is ${iM}, and they read WebGL2's draws`)
      }
      const OM = (0, aM.d)();
      for (const {
          field: LM,
          name: mM
        }
        of QM)(0, aM.e)(OM, LM, ["1", "pending"], nM, PM).then((MM => {
        void 0 !== MM && (0, jM.k)("renderprobe", zM(mM, MM, (0, SM.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
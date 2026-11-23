export const id = 50;
export const ids = [50];
export const modules = {
  50730: (CC, zC, ZC) => {
    ZC.d(zC, {
      startRenderProbe: () => WC
    });
    var QC = ZC(603),
      wC = ZC(4321),
      bC = ZC(2800),
      nC = ZC(4445);
    const fC = 1e3,
      oC = 36e5,
      qC = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function FC(CC, zC, ZC) {
      var wC, bC;
      return `${CC}; ${ZC?`os ${ZC.os}, gpu ${null!==(wC=ZC.gpuFamily)&&void 0!==wC?wC:"unknown"} ${null!==(bC=ZC.gpuModel)&&void 0!==bC?bC:"unknown"}`:"device unknown"}, version ${QC.e}; ${zC}`
    }

    function WC(CC) {
      var zC;
      const ZC = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.backend) && void 0 !== zC ? zC : "none";
      if ("webgl" !== ZC) {
        const CC = (0, nC.f)();
        for (const {
            field: zC
          }
          of qC) delete CC[zC];
        return void(0, bC.i)("renderprobe", `decode and particle probes not run: the renderer is ${ZC}, and they read WebGL2's draws`)
      }
      const QC = (0, nC.f)();
      for (const {
          field: WC,
          name: NC
        }
        of qC)(0, nC.i)(QC, WC, ["1", "pending"], oC, fC).then((CC => {
        void 0 !== CC && (0, bC.i)("renderprobe", FC(NC, CC, (0, wC.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
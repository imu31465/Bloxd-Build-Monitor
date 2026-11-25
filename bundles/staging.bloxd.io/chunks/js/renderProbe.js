export const id = 51;
export const ids = [51];
export const modules = {
  51432: (GG, bG, ZG) => {
    ZG.d(bG, {
      startRenderProbe: () => pG
    });
    var wG = ZG(612),
      SG = ZG(4409),
      LG = ZG(2801),
      yG = ZG(4527);
    const kG = 1e3,
      UG = 36e5,
      YG = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function VG(GG, bG, ZG) {
      var SG, LG;
      return `${GG}; ${ZG?`os ${ZG.os}, gpu ${null!==(SG=ZG.gpuFamily)&&void 0!==SG?SG:"unknown"} ${null!==(LG=ZG.gpuModel)&&void 0!==LG?LG:"unknown"}`:"device unknown"}, version ${wG.e}; ${bG}`
    }

    function pG(GG) {
      var bG;
      const ZG = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.backend) && void 0 !== bG ? bG : "none";
      if ("webgl" !== ZG) {
        const GG = (0, yG.e)();
        for (const {
            field: bG
          }
          of YG) delete GG[bG];
        return void(0, LG.j)("renderprobe", `decode and particle probes not run: the renderer is ${ZG}, and they read WebGL2's draws`)
      }
      const wG = (0, yG.e)();
      for (const {
          field: pG,
          name: fG
        }
        of YG)(0, yG.f)(wG, pG, ["1", "pending"], UG, kG).then((GG => {
        void 0 !== GG && (0, LG.j)("renderprobe", VG(fG, GG, (0, SG.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
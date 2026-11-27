export const id = 59;
export const ids = [59];
export const modules = {
  54656: (RR, JR, GR) => {
    GR.d(JR, {
      startRenderProbe: () => KR
    });
    var yR = GR(688),
      tR = GR(5167),
      uR = GR(3960),
      ZR = GR(5316);
    const qR = 1e3,
      iR = 36e5,
      fR = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function VR(RR, JR, GR) {
      var tR, uR;
      return `${RR}; ${GR?`os ${GR.os}, gpu ${null!==(tR=GR.gpuFamily)&&void 0!==tR?tR:"unknown"} ${null!==(uR=GR.gpuModel)&&void 0!==uR?uR:"unknown"}`:"device unknown"}, version ${yR.d}; ${JR}`
    }

    function KR(RR) {
      var JR;
      const GR = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.backend) && void 0 !== JR ? JR : "none";
      if ("webgl" !== GR) {
        const RR = (0, ZR.c)();
        for (const {
            field: JR
          }
          of fR) delete RR[JR];
        return void(0, uR.k)("renderprobe", `decode and particle probes not run: the renderer is ${GR}, and they read WebGL2's draws`)
      }
      const yR = (0, ZR.c)();
      for (const {
          field: KR,
          name: wR
        }
        of fR)(0, ZR.e)(yR, KR, ["1", "pending"], iR, qR).then((RR => {
        void 0 !== RR && (0, uR.k)("renderprobe", VR(wR, RR, (0, tR.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
export const id = 49;
export const ids = [49];
export const modules = {
  42729: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      startRenderProbe: () => HQ
    });
    var LQ = wQ(626),
      qQ = wQ(4251),
      oQ = wQ(2753),
      DQ = wQ(4352);
    const kQ = 1e3,
      vQ = 36e5,
      mQ = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function uQ(QQ, FQ, wQ) {
      var qQ, oQ;
      return `${QQ}; ${wQ?`os ${wQ.os}, gpu ${null!==(qQ=wQ.gpuFamily)&&void 0!==qQ?qQ:"unknown"} ${null!==(oQ=wQ.gpuModel)&&void 0!==oQ?oQ:"unknown"}`:"device unknown"}, version ${LQ.b}; ${FQ}`
    }

    function HQ(QQ) {
      var FQ;
      const wQ = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.backend) && void 0 !== FQ ? FQ : "none";
      if ("webgl" !== wQ) {
        const QQ = (0, DQ.h)();
        for (const {
            field: FQ
          }
          of mQ) delete QQ[FQ];
        return void(0, oQ.m)("renderprobe", `decode and particle probes not run: the renderer is ${wQ}, and they read WebGL2's draws`)
      }
      const LQ = (0, DQ.h)();
      for (const {
          field: HQ,
          name: bQ
        }
        of mQ)(0, DQ.j)(LQ, HQ, ["1", "pending"], vQ, kQ).then((QQ => {
        void 0 !== QQ && (0, oQ.m)("renderprobe", uQ(bQ, QQ, (0, qQ.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
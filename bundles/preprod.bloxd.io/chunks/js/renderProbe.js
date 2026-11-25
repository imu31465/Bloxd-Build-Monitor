export const id = 53;
export const ids = [53];
export const modules = {
  51238: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      startRenderProbe: () => JQ
    });
    var wQ = XQ(670),
      qQ = XQ(4699),
      TQ = XQ(3045),
      zQ = XQ(4821);
    const sQ = 1e3,
      FQ = 36e5,
      PQ = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function gQ(QQ, WQ, XQ) {
      var qQ, TQ;
      return `${QQ}; ${XQ?`os ${XQ.os}, gpu ${null!==(qQ=XQ.gpuFamily)&&void 0!==qQ?qQ:"unknown"} ${null!==(TQ=XQ.gpuModel)&&void 0!==TQ?TQ:"unknown"}`:"device unknown"}, version ${wQ.c}; ${WQ}`
    }

    function JQ(QQ) {
      var WQ;
      const XQ = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.backend) && void 0 !== WQ ? WQ : "none";
      if ("webgl" !== XQ) {
        const QQ = (0, zQ.f)();
        for (const {
            field: WQ
          }
          of PQ) delete QQ[WQ];
        return void(0, TQ.j)("renderprobe", `decode and particle probes not run: the renderer is ${XQ}, and they read WebGL2's draws`)
      }
      const wQ = (0, zQ.f)();
      for (const {
          field: JQ,
          name: rQ
        }
        of PQ)(0, zQ.h)(wQ, JQ, ["1", "pending"], FQ, sQ).then((QQ => {
        void 0 !== QQ && (0, TQ.j)("renderprobe", gQ(rQ, QQ, (0, qQ.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
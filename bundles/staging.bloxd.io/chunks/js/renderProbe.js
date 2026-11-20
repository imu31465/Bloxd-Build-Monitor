export const id = 49;
export const ids = [49];
export const modules = {
  43076: (qq, Eq, gq) => {
    gq.d(Eq, {
      startRenderProbe: () => Bq
    });
    var Yq = gq(600),
      lq = gq(4227),
      Oq = gq(2733),
      mq = gq(4340);
    const xq = 1e3,
      Aq = 36e5,
      cq = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function uq(qq, Eq, gq) {
      var lq, Oq;
      return `${qq}; ${gq?`os ${gq.os}, gpu ${null!==(lq=gq.gpuFamily)&&void 0!==lq?lq:"unknown"} ${null!==(Oq=gq.gpuModel)&&void 0!==Oq?Oq:"unknown"}`:"device unknown"}, version ${Yq.e}; ${Eq}`
    }

    function Bq(qq) {
      var Eq;
      const gq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.backend) && void 0 !== Eq ? Eq : "none";
      if ("webgl" !== gq) {
        const qq = (0, mq.c)();
        for (const {
            field: Eq
          }
          of cq) delete qq[Eq];
        return void(0, Oq.m)("renderprobe", `decode and particle probes not run: the renderer is ${gq}, and they read WebGL2's draws`)
      }
      const Yq = (0, mq.c)();
      for (const {
          field: Bq,
          name: Wq
        }
        of cq)(0, mq.g)(Yq, Bq, ["1", "pending"], Aq, xq).then((qq => {
        void 0 !== qq && (0, Oq.m)("renderprobe", uq(Wq, qq, (0, lq.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
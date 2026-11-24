export const id = 51;
export const ids = [51];
export const modules = {
  51163: (BB, jB, zB) => {
    zB.d(jB, {
      startRenderProbe: () => pB
    });
    var QB = zB(667),
      nB = zB(4506),
      dB = zB(2912),
      IB = zB(4635);
    const NB = 1e3,
      uB = 36e5,
      UB = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function aB(BB, jB, zB) {
      var nB, dB;
      return `${BB}; ${zB?`os ${zB.os}, gpu ${null!==(nB=zB.gpuFamily)&&void 0!==nB?nB:"unknown"} ${null!==(dB=zB.gpuModel)&&void 0!==dB?dB:"unknown"}`:"device unknown"}, version ${QB.b}; ${jB}`
    }

    function pB(BB) {
      var jB;
      const zB = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== jB ? jB : "none";
      if ("webgl" !== zB) {
        const BB = (0, IB.e)();
        for (const {
            field: jB
          }
          of UB) delete BB[jB];
        return void(0, dB.n)("renderprobe", `decode and particle probes not run: the renderer is ${zB}, and they read WebGL2's draws`)
      }
      const QB = (0, IB.e)();
      for (const {
          field: pB,
          name: rB
        }
        of UB)(0, IB.g)(QB, pB, ["1", "pending"], uB, NB).then((BB => {
        void 0 !== BB && (0, dB.n)("renderprobe", aB(rB, BB, (0, nB.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
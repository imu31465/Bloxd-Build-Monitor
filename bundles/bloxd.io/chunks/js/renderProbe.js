export const id = 51;
export const ids = [51];
export const modules = {
  51071: (BB, IB, ZB) => {
    ZB.d(IB, {
      startRenderProbe: () => hB
    });
    var TB = ZB(671),
      JB = ZB(4572),
      oB = ZB(2973),
      GB = ZB(4698);
    const vB = 1e3,
      kB = 36e5,
      cB = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function nB(BB, IB, ZB) {
      var JB, oB;
      return `${BB}; ${ZB?`os ${ZB.os}, gpu ${null!==(JB=ZB.gpuFamily)&&void 0!==JB?JB:"unknown"} ${null!==(oB=ZB.gpuModel)&&void 0!==oB?oB:"unknown"}`:"device unknown"}, version ${TB.b}; ${IB}`
    }

    function hB(BB) {
      var IB;
      const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== IB ? IB : "none";
      if ("webgl" !== ZB) {
        const BB = (0, GB.g)();
        for (const {
            field: IB
          }
          of cB) delete BB[IB];
        return void(0, oB.o)("renderprobe", `decode and particle probes not run: the renderer is ${ZB}, and they read WebGL2's draws`)
      }
      const TB = (0, GB.g)();
      for (const {
          field: hB,
          name: zB
        }
        of cB)(0, GB.j)(TB, hB, ["1", "pending"], kB, vB).then((BB => {
        void 0 !== BB && (0, oB.o)("renderprobe", nB(zB, BB, (0, JB.c)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
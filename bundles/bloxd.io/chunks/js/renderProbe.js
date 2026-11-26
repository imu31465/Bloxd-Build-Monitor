export const id = 58;
export const ids = [58];
export const modules = {
  54076: (BB, OB, GB) => {
    GB.d(OB, {
      startRenderProbe: () => PB
    });
    var YB = GB(645),
      DB = GB(4801),
      QB = GB(3136),
      oB = GB(4923);
    const jB = 1e3,
      yB = 36e5,
      JB = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function MB(BB, OB, GB) {
      var DB, QB;
      return `${BB}; ${GB?`os ${GB.os}, gpu ${null!==(DB=GB.gpuFamily)&&void 0!==DB?DB:"unknown"} ${null!==(QB=GB.gpuModel)&&void 0!==QB?QB:"unknown"}`:"device unknown"}, version ${YB.b}; ${OB}`
    }

    function PB(BB) {
      var OB;
      const GB = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== OB ? OB : "none";
      if ("webgl" !== GB) {
        const BB = (0, oB.d)();
        for (const {
            field: OB
          }
          of JB) delete BB[OB];
        return void(0, QB.m)("renderprobe", `decode and particle probes not run: the renderer is ${GB}, and they read WebGL2's draws`)
      }
      const YB = (0, oB.d)();
      for (const {
          field: PB,
          name: zB
        }
        of JB)(0, oB.e)(YB, PB, ["1", "pending"], yB, jB).then((BB => {
        void 0 !== BB && (0, QB.m)("renderprobe", MB(zB, BB, (0, DB.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 58;
export const ids = [58];
export const modules = {
  53764: (UU, XU, zU) => {
    zU.d(XU, {
      startRenderProbe: () => YU
    });
    var cU = zU(654),
      yU = zU(4792),
      QU = zU(3099),
      AU = zU(4947);
    const FU = 1e3,
      oU = 36e5,
      DU = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function EU(UU, XU, zU) {
      var yU, QU;
      return `${UU}; ${zU?`os ${zU.os}, gpu ${null!==(yU=zU.gpuFamily)&&void 0!==yU?yU:"unknown"} ${null!==(QU=zU.gpuModel)&&void 0!==QU?QU:"unknown"}`:"device unknown"}, version ${cU.d}; ${XU}`
    }

    function YU(UU) {
      var XU;
      const zU = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.backend) && void 0 !== XU ? XU : "none";
      if ("webgl" !== zU) {
        const UU = (0, AU.g)();
        for (const {
            field: XU
          }
          of DU) delete UU[XU];
        return void(0, QU.l)("renderprobe", `decode and particle probes not run: the renderer is ${zU}, and they read WebGL2's draws`)
      }
      const cU = (0, AU.g)();
      for (const {
          field: YU,
          name: NU
        }
        of DU)(0, AU.j)(cU, YU, ["1", "pending"], oU, FU).then((UU => {
        void 0 !== UU && (0, QU.l)("renderprobe", EU(NU, UU, (0, yU.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 57;
export const ids = [57];
export const modules = {
  53966: (VV, eV, xV) => {
    xV.d(eV, {
      startRenderProbe: () => ZV
    });
    var JV = xV(660),
      YV = xV(4831),
      UV = xV(3142),
      yV = xV(4981);
    const pV = 1e3,
      QV = 36e5,
      nV = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function wV(VV, eV, xV) {
      var YV, UV;
      return `${VV}; ${xV?`os ${xV.os}, gpu ${null!==(YV=xV.gpuFamily)&&void 0!==YV?YV:"unknown"} ${null!==(UV=xV.gpuModel)&&void 0!==UV?UV:"unknown"}`:"device unknown"}, version ${JV.e}; ${eV}`
    }

    function ZV(VV) {
      var eV;
      const xV = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.backend) && void 0 !== eV ? eV : "none";
      if ("webgl" !== xV) {
        const VV = (0, yV.f)();
        for (const {
            field: eV
          }
          of nV) delete VV[eV];
        return void(0, UV.i)("renderprobe", `decode and particle probes not run: the renderer is ${xV}, and they read WebGL2's draws`)
      }
      const JV = (0, yV.f)();
      for (const {
          field: ZV,
          name: vV
        }
        of nV)(0, yV.g)(JV, ZV, ["1", "pending"], QV, pV).then((VV => {
        void 0 !== VV && (0, UV.i)("renderprobe", wV(vV, VV, (0, YV.c)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
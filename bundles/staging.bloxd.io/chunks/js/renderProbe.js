export const id = 50;
export const ids = [50];
export const modules = {
  50792: (DD, zD, wD) => {
    wD.d(zD, {
      startRenderProbe: () => AD
    });
    var pD = wD(625),
      sD = wD(4415),
      KD = wD(2811),
      rD = wD(4527);
    const LD = 1e3,
      cD = 36e5,
      gD = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function RD(DD, zD, wD) {
      var sD, KD;
      return `${DD}; ${wD?`os ${wD.os}, gpu ${null!==(sD=wD.gpuFamily)&&void 0!==sD?sD:"unknown"} ${null!==(KD=wD.gpuModel)&&void 0!==KD?KD:"unknown"}`:"device unknown"}, version ${pD.e}; ${zD}`
    }

    function AD(DD) {
      var zD;
      const wD = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.backend) && void 0 !== zD ? zD : "none";
      if ("webgl" !== wD) {
        const DD = (0, rD.f)();
        for (const {
            field: zD
          }
          of gD) delete DD[zD];
        return void(0, KD.l)("renderprobe", `decode and particle probes not run: the renderer is ${wD}, and they read WebGL2's draws`)
      }
      const pD = (0, rD.f)();
      for (const {
          field: AD,
          name: UD
        }
        of gD)(0, rD.j)(pD, AD, ["1", "pending"], cD, LD).then((DD => {
        void 0 !== DD && (0, KD.l)("renderprobe", RD(UD, DD, (0, sD.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
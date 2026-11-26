export const id = 58;
export const ids = [58];
export const modules = {
  54562: (HH, BH, LH) => {
    LH.d(BH, {
      startRenderProbe: () => XH
    });
    var AH = LH(625),
      rH = LH(4772),
      SH = LH(3105),
      hH = LH(4921);
    const tH = 1e3,
      zH = 36e5,
      CH = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function EH(HH, BH, LH) {
      var rH, SH;
      return `${HH}; ${LH?`os ${LH.os}, gpu ${null!==(rH=LH.gpuFamily)&&void 0!==rH?rH:"unknown"} ${null!==(SH=LH.gpuModel)&&void 0!==SH?SH:"unknown"}`:"device unknown"}, version ${AH.d}; ${BH}`
    }

    function XH(HH) {
      var BH;
      const LH = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.backend) && void 0 !== BH ? BH : "none";
      if ("webgl" !== LH) {
        const HH = (0, hH.g)();
        for (const {
            field: BH
          }
          of CH) delete HH[BH];
        return void(0, SH.j)("renderprobe", `decode and particle probes not run: the renderer is ${LH}, and they read WebGL2's draws`)
      }
      const AH = (0, hH.g)();
      for (const {
          field: XH,
          name: GH
        }
        of CH)(0, hH.k)(AH, XH, ["1", "pending"], zH, tH).then((HH => {
        void 0 !== HH && (0, SH.j)("renderprobe", EH(GH, HH, (0, rH.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
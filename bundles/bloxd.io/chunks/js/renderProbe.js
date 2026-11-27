export const id = 59;
export const ids = [59];
export const modules = {
  54813: (WW, iW, OW) => {
    OW.d(iW, {
      startRenderProbe: () => ZW
    });
    var mW = OW(649),
      EW = OW(5058),
      NW = OW(3866),
      PW = OW(5217);
    const LW = 1e3,
      cW = 36e5,
      wW = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function tW(WW, iW, OW) {
      var EW, NW;
      return `${WW}; ${OW?`os ${OW.os}, gpu ${null!==(EW=OW.gpuFamily)&&void 0!==EW?EW:"unknown"} ${null!==(NW=OW.gpuModel)&&void 0!==NW?NW:"unknown"}`:"device unknown"}, version ${mW.d}; ${iW}`
    }

    function ZW(WW) {
      var iW;
      const OW = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.backend) && void 0 !== iW ? iW : "none";
      if ("webgl" !== OW) {
        const WW = (0, PW.d)();
        for (const {
            field: iW
          }
          of wW) delete WW[iW];
        return void(0, NW.m)("renderprobe", `decode and particle probes not run: the renderer is ${OW}, and they read WebGL2's draws`)
      }
      const mW = (0, PW.d)();
      for (const {
          field: ZW,
          name: xW
        }
        of wW)(0, PW.e)(mW, ZW, ["1", "pending"], cW, LW).then((WW => {
        void 0 !== WW && (0, NW.m)("renderprobe", tW(xW, WW, (0, EW.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
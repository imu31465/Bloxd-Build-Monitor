export const id = 50;
export const ids = [50];
export const modules = {
  51018: (SS, HS, gS) => {
    gS.d(HS, {
      startRenderProbe: () => fS
    });
    var tS = gS(687),
      bS = gS(4515),
      XS = gS(2953),
      xS = gS(4648);
    const NS = 1e3,
      qS = 36e5,
      uS = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function IS(SS, HS, gS) {
      var bS, XS;
      return `${SS}; ${gS?`os ${gS.os}, gpu ${null!==(bS=gS.gpuFamily)&&void 0!==bS?bS:"unknown"} ${null!==(XS=gS.gpuModel)&&void 0!==XS?XS:"unknown"}`:"device unknown"}, version ${tS.b}; ${HS}`
    }

    function fS(SS) {
      var HS;
      const gS = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.backend) && void 0 !== HS ? HS : "none";
      if ("webgl" !== gS) {
        const SS = (0, xS.c)();
        for (const {
            field: HS
          }
          of uS) delete SS[HS];
        return void(0, XS.i)("renderprobe", `decode and particle probes not run: the renderer is ${gS}, and they read WebGL2's draws`)
      }
      const tS = (0, xS.c)();
      for (const {
          field: fS,
          name: kS
        }
        of uS)(0, xS.e)(tS, fS, ["1", "pending"], qS, NS).then((SS => {
        void 0 !== SS && (0, XS.i)("renderprobe", IS(kS, SS, (0, bS.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
export const id = 49;
export const ids = [49];
export const modules = {
  42715: (bb, ub, hb) => {
    hb.d(ub, {
      startRenderProbe: () => Hb
    });
    var Bb = hb(595),
      Ob = hb(4149),
      Gb = hb(2633),
      Ub = hb(4270);
    const Lb = 1e3,
      Yb = 36e5,
      Sb = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function ab(bb, ub, hb) {
      var Ob, Gb;
      return `${bb}; ${hb?`os ${hb.os}, gpu ${null!==(Ob=hb.gpuFamily)&&void 0!==Ob?Ob:"unknown"} ${null!==(Gb=hb.gpuModel)&&void 0!==Gb?Gb:"unknown"}`:"device unknown"}, version ${Bb.b}; ${ub}`
    }

    function Hb(bb) {
      var ub;
      const hb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ub ? ub : "none";
      if ("webgl" !== hb) {
        const bb = (0, Ub.e)();
        for (const {
            field: ub
          }
          of Sb) delete bb[ub];
        return void(0, Gb.l)("renderprobe", `decode and particle probes not run: the renderer is ${hb}, and they read WebGL2's draws`)
      }
      const Bb = (0, Ub.e)();
      for (const {
          field: Hb,
          name: wb
        }
        of Sb)(0, Ub.i)(Bb, Hb, ["1", "pending"], Yb, Lb).then((bb => {
        void 0 !== bb && (0, Gb.l)("renderprobe", ab(wb, bb, (0, Ob.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
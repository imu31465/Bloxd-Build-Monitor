export const id = 59;
export const ids = [59];
export const modules = {
  54887: (bb, wb, Mb) => {
    Mb.d(wb, {
      startRenderProbe: () => Ob
    });
    var eb = Mb(667),
      Hb = Mb(5215),
      pb = Mb(4060),
      Vb = Mb(5354);
    const gb = 1e3,
      lb = 36e5,
      Lb = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Ib(bb, wb, Mb) {
      var Hb, pb;
      return `${bb}; ${Mb?`os ${Mb.os}, gpu ${null!==(Hb=Mb.gpuFamily)&&void 0!==Hb?Hb:"unknown"} ${null!==(pb=Mb.gpuModel)&&void 0!==pb?pb:"unknown"}`:"device unknown"}, version ${eb.e}; ${wb}`
    }

    function Ob(bb) {
      var wb;
      const Mb = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== wb ? wb : "none";
      if ("webgl" !== Mb) {
        const bb = (0, Vb.f)();
        for (const {
            field: wb
          }
          of Lb) delete bb[wb];
        return void(0, pb.j)("renderprobe", `decode and particle probes not run: the renderer is ${Mb}, and they read WebGL2's draws`)
      }
      const eb = (0, Vb.f)();
      for (const {
          field: Ob,
          name: Ub
        }
        of Lb)(0, Vb.h)(eb, Ob, ["1", "pending"], lb, gb).then((bb => {
        void 0 !== bb && (0, pb.j)("renderprobe", Ib(Ub, bb, (0, Hb.c)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
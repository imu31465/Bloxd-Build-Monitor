export const id = 59;
export const ids = [59];
export const modules = {
  55161: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      startRenderProbe: () => xr
    });
    var Zr = Qr(692),
      Wr = Qr(5086),
      ar = Qr(3909),
      jr = Qr(5270);
    const Ir = 1e3,
      fr = 36e5,
      Er = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function pr(rr, Sr, Qr) {
      var Wr, ar;
      return `${rr}; ${Qr?`os ${Qr.os}, gpu ${null!==(Wr=Qr.gpuFamily)&&void 0!==Wr?Wr:"unknown"} ${null!==(ar=Qr.gpuModel)&&void 0!==ar?ar:"unknown"}`:"device unknown"}, version ${Zr.e}; ${Sr}`
    }

    function xr(rr) {
      var Sr;
      const Qr = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.backend) && void 0 !== Sr ? Sr : "none";
      if ("webgl" !== Qr) {
        const rr = (0, jr.e)();
        for (const {
            field: Sr
          }
          of Er) delete rr[Sr];
        return void(0, ar.l)("renderprobe", `decode and particle probes not run: the renderer is ${Qr}, and they read WebGL2's draws`)
      }
      const Zr = (0, jr.e)();
      for (const {
          field: xr,
          name: mr
        }
        of Er)(0, jr.i)(Zr, xr, ["1", "pending"], fr, Ir).then((rr => {
        void 0 !== rr && (0, ar.l)("renderprobe", pr(mr, rr, (0, Wr.e)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
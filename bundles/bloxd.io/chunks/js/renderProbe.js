export const id = 50;
export const ids = [50];
export const modules = {
  50977: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      startRenderProbe: () => tk
    });
    var Xk = Ik(633),
      Tk = Ik(4367),
      ik = Ik(2744),
      yk = Ik(4502);
    const lk = 1e3,
      ak = 36e5,
      qk = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Lk(kk, Fk, Ik) {
      var Tk, ik;
      return `${kk}; ${Ik?`os ${Ik.os}, gpu ${null!==(Tk=Ik.gpuFamily)&&void 0!==Tk?Tk:"unknown"} ${null!==(ik=Ik.gpuModel)&&void 0!==ik?ik:"unknown"}`:"device unknown"}, version ${Xk.b}; ${Fk}`
    }

    function tk(kk) {
      var Fk;
      const Ik = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== Fk ? Fk : "none";
      if ("webgl" !== Ik) {
        const kk = (0, yk.g)();
        for (const {
            field: Fk
          }
          of qk) delete kk[Fk];
        return void(0, ik.g)("renderprobe", `decode and particle probes not run: the renderer is ${Ik}, and they read WebGL2's draws`)
      }
      const Xk = (0, yk.g)();
      for (const {
          field: tk,
          name: Zk
        }
        of qk)(0, yk.h)(Xk, tk, ["1", "pending"], ak, lk).then((kk => {
        void 0 !== kk && (0, ik.g)("renderprobe", Lk(Zk, kk, (0, Tk.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
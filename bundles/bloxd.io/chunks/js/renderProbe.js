export const id = 50;
export const ids = [50];
export const modules = {
  50557: (kk, ek, ik) => {
    ik.d(ek, {
      startRenderProbe: () => Kk
    });
    var Dk = ik(600),
      fk = ik(4349),
      Sk = ik(2752),
      bk = ik(4449);
    const rk = 1e3,
      Pk = 36e5,
      mk = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Mk(kk, ek, ik) {
      var fk, Sk;
      return `${kk}; ${ik?`os ${ik.os}, gpu ${null!==(fk=ik.gpuFamily)&&void 0!==fk?fk:"unknown"} ${null!==(Sk=ik.gpuModel)&&void 0!==Sk?Sk:"unknown"}`:"device unknown"}, version ${Dk.c}; ${ek}`
    }

    function Kk(kk) {
      var ek;
      const ik = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== ek ? ek : "none";
      if ("webgl" !== ik) {
        const kk = (0, bk.h)();
        for (const {
            field: ek
          }
          of mk) delete kk[ek];
        return void(0, Sk.l)("renderprobe", `decode and particle probes not run: the renderer is ${ik}, and they read WebGL2's draws`)
      }
      const Dk = (0, bk.h)();
      for (const {
          field: Kk,
          name: xk
        }
        of mk)(0, bk.i)(Dk, Kk, ["1", "pending"], Pk, rk).then((kk => {
        void 0 !== kk && (0, Sk.l)("renderprobe", Mk(xk, kk, (0, fk.d)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
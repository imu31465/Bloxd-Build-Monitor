export const id = 358;
export const ids = [358];
export const modules = {
  61356: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      applyLightFoOffset: () => yk,
      getFloatingOriginOffset: () => Tk,
      lightFoVersion: () => ik,
      wrapRenderableForFO: () => lk
    });
    var Xk = Ik(41729);

    function Tk(kk) {
      const Fk = kk.camera;
      if (!Fk) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Ik = Fk.worldMatrix;
      return {
        x: Ik[12],
        y: Ik[13],
        z: Ik[14]
      }
    }

    function ik(kk) {
      return kk.camera ? kk.camera.worldMatrixVersion : 0
    }

    function yk(kk, Fk) {
      const Ik = Fk.camera?.worldMatrix;
      if (!Ik) return;
      const Tk = Ik[12],
        ik = Ik[13],
        yk = Ik[14];
      let lk = 0;
      for (const ak of Fk.lights) {
        if (lk >= Xk.b) break;
        if (!ak._writeLightUbo) continue;
        const Fk = 4 + 16 * lk,
          Ik = kk[Fk + 3];
        if (0 === Ik || 2 === Ik) {
          const Ik = ak.worldMatrix;
          kk[Fk] = Ik[12] - Tk, kk[Fk + 1] = Ik[13] - ik, kk[Fk + 2] = Ik[14] - yk
        }
        lk++
      }
    }

    function lk(kk, Fk, Ik) {
      let Xk = -1;
      return () => {
        const Tk = Fk.camera ? Fk.camera.worldMatrixVersion : -1;
        Tk !== Xk && (Ik(), Xk = Tk), kk()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
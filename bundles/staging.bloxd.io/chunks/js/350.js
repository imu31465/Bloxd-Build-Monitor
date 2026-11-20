export const id = 350;
export const ids = [350];
export const modules = {
  60990: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      applyLightFoOffset: () => Xk,
      getFloatingOriginOffset: () => tk,
      lightFoVersion: () => ak,
      wrapRenderableForFO: () => bk
    });
    var Rk = Bk(41154);

    function tk(kk) {
      const Fk = kk.camera;
      if (!Fk) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Bk = Fk.worldMatrix;
      return {
        x: Bk[12],
        y: Bk[13],
        z: Bk[14]
      }
    }

    function ak(kk) {
      return kk.camera ? kk.camera.worldMatrixVersion : 0
    }

    function Xk(kk, Fk) {
      const Bk = Fk.camera?.worldMatrix;
      if (!Bk) return;
      const tk = Bk[12],
        ak = Bk[13],
        Xk = Bk[14];
      let bk = 0;
      for (const wk of Fk.lights) {
        if (bk >= Rk.d) break;
        if (!wk._writeLightUbo) continue;
        const Fk = 4 + 16 * bk,
          Bk = kk[Fk + 3];
        if (0 === Bk || 2 === Bk) {
          const Bk = wk.worldMatrix;
          kk[Fk] = Bk[12] - tk, kk[Fk + 1] = Bk[13] - ak, kk[Fk + 2] = Bk[14] - Xk
        }
        bk++
      }
    }

    function bk(kk, Fk, Bk) {
      let Rk = -1;
      return () => {
        const tk = Fk.camera ? Fk.camera.worldMatrixVersion : -1;
        tk !== Rk && (Bk(), Rk = tk), kk()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
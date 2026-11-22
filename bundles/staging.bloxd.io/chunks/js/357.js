export const id = 357;
export const ids = [357];
export const modules = {
  60752: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      applyLightFoOffset: () => bk,
      getFloatingOriginOffset: () => fk,
      lightFoVersion: () => Sk,
      wrapRenderableForFO: () => rk
    });
    var Dk = ik(41309);

    function fk(kk) {
      const ek = kk.camera;
      if (!ek) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ik = ek.worldMatrix;
      return {
        x: ik[12],
        y: ik[13],
        z: ik[14]
      }
    }

    function Sk(kk) {
      return kk.camera ? kk.camera.worldMatrixVersion : 0
    }

    function bk(kk, ek) {
      const ik = ek.camera?.worldMatrix;
      if (!ik) return;
      const fk = ik[12],
        Sk = ik[13],
        bk = ik[14];
      let rk = 0;
      for (const Pk of ek.lights) {
        if (rk >= Dk.b) break;
        if (!Pk._writeLightUbo) continue;
        const ek = 4 + 16 * rk,
          ik = kk[ek + 3];
        if (0 === ik || 2 === ik) {
          const ik = Pk.worldMatrix;
          kk[ek] = ik[12] - fk, kk[ek + 1] = ik[13] - Sk, kk[ek + 2] = ik[14] - bk
        }
        rk++
      }
    }

    function rk(kk, ek, ik) {
      let Dk = -1;
      return () => {
        const fk = ek.camera ? ek.camera.worldMatrixVersion : -1;
        fk !== Dk && (ik(), Dk = fk), kk()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
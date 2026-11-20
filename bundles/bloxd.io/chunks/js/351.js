export const id = 351;
export const ids = [351];
export const modules = {
  60674: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      applyLightFoOffset: () => Ub,
      getFloatingOriginOffset: () => Ob,
      lightFoVersion: () => Gb,
      wrapRenderableForFO: () => Lb
    });
    var Bb = hb(41194);

    function Ob(bb) {
      const ub = bb.camera;
      if (!ub) return {
        x: 0,
        y: 0,
        z: 0
      };
      const hb = ub.worldMatrix;
      return {
        x: hb[12],
        y: hb[13],
        z: hb[14]
      }
    }

    function Gb(bb) {
      return bb.camera ? bb.camera.worldMatrixVersion : 0
    }

    function Ub(bb, ub) {
      const hb = ub.camera?.worldMatrix;
      if (!hb) return;
      const Ob = hb[12],
        Gb = hb[13],
        Ub = hb[14];
      let Lb = 0;
      for (const Yb of ub.lights) {
        if (Lb >= Bb.e) break;
        if (!Yb._writeLightUbo) continue;
        const ub = 4 + 16 * Lb,
          hb = bb[ub + 3];
        if (0 === hb || 2 === hb) {
          const hb = Yb.worldMatrix;
          bb[ub] = hb[12] - Ob, bb[ub + 1] = hb[13] - Gb, bb[ub + 2] = hb[14] - Ub
        }
        Lb++
      }
    }

    function Lb(bb, ub, hb) {
      let Bb = -1;
      return () => {
        const Ob = ub.camera ? ub.camera.worldMatrixVersion : -1;
        Ob !== Bb && (hb(), Bb = Ob), bb()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
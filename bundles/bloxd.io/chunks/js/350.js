export const id = 350;
export const ids = [350];
export const modules = {
  60661: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      applyLightFoOffset: () => Tb,
      getFloatingOriginOffset: () => Wb,
      lightFoVersion: () => ab,
      wrapRenderableForFO: () => Ub
    });
    var kb = sb(41133);

    function Wb(bb) {
      const cb = bb.camera;
      if (!cb) return {
        x: 0,
        y: 0,
        z: 0
      };
      const sb = cb.worldMatrix;
      return {
        x: sb[12],
        y: sb[13],
        z: sb[14]
      }
    }

    function ab(bb) {
      return bb.camera ? bb.camera.worldMatrixVersion : 0
    }

    function Tb(bb, cb) {
      const sb = cb.camera?.worldMatrix;
      if (!sb) return;
      const Wb = sb[12],
        ab = sb[13],
        Tb = sb[14];
      let Ub = 0;
      for (const Ib of cb.lights) {
        if (Ub >= kb.c) break;
        if (!Ib._writeLightUbo) continue;
        const cb = 4 + 16 * Ub,
          sb = bb[cb + 3];
        if (0 === sb || 2 === sb) {
          const sb = Ib.worldMatrix;
          bb[cb] = sb[12] - Wb, bb[cb + 1] = sb[13] - ab, bb[cb + 2] = sb[14] - Tb
        }
        Ub++
      }
    }

    function Ub(bb, cb, sb) {
      let kb = -1;
      return () => {
        const Wb = cb.camera ? cb.camera.worldMatrixVersion : -1;
        Wb !== kb && (sb(), kb = Wb), bb()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
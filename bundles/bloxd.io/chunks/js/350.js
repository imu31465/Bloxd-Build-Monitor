export const id = 350;
export const ids = [350];
export const modules = {
  60338: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      applyLightFoOffset: () => Eb,
      getFloatingOriginOffset: () => Mb,
      lightFoVersion: () => Tb,
      wrapRenderableForFO: () => Yb
    });
    var Ab = Ub(40854);

    function Mb(bb) {
      const ab = bb.camera;
      if (!ab) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Ub = ab.worldMatrix;
      return {
        x: Ub[12],
        y: Ub[13],
        z: Ub[14]
      }
    }

    function Tb(bb) {
      return bb.camera ? bb.camera.worldMatrixVersion : 0
    }

    function Eb(bb, ab) {
      const Ub = ab.camera?.worldMatrix;
      if (!Ub) return;
      const Mb = Ub[12],
        Tb = Ub[13],
        Eb = Ub[14];
      let Yb = 0;
      for (const Bb of ab.lights) {
        if (Yb >= Ab.b) break;
        if (!Bb._writeLightUbo) continue;
        const ab = 4 + 16 * Yb,
          Ub = bb[ab + 3];
        if (0 === Ub || 2 === Ub) {
          const Ub = Bb.worldMatrix;
          bb[ab] = Ub[12] - Mb, bb[ab + 1] = Ub[13] - Tb, bb[ab + 2] = Ub[14] - Eb
        }
        Yb++
      }
    }

    function Yb(bb, ab, Ub) {
      let Ab = -1;
      return () => {
        const Mb = ab.camera ? ab.camera.worldMatrixVersion : -1;
        Mb !== Ab && (Ub(), Ab = Mb), bb()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
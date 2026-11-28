export const id = 676;
export const ids = [676];
export const modules = {
  64495: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      applyLightFoOffset: () => Vb,
      getFloatingOriginOffset: () => Hb,
      lightFoVersion: () => pb,
      wrapRenderableForFO: () => gb
    });
    var eb = Mb(53949);

    function Hb(bb) {
      const wb = bb.camera;
      if (!wb) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Mb = wb.worldMatrix;
      return {
        x: Mb[12],
        y: Mb[13],
        z: Mb[14]
      }
    }

    function pb(bb) {
      return bb.camera ? bb.camera.worldMatrixVersion : 0
    }

    function Vb(bb, wb) {
      const Mb = wb.camera?.worldMatrix;
      if (!Mb) return;
      const Hb = Mb[12],
        pb = Mb[13],
        Vb = Mb[14];
      let gb = 0;
      for (const lb of wb.lights) {
        if (gb >= eb.e) break;
        if (!lb._writeLightUbo) continue;
        const wb = 4 + 16 * gb,
          Mb = bb[wb + 3];
        if (0 === Mb || 2 === Mb) {
          const Mb = lb.worldMatrix;
          bb[wb] = Mb[12] - Hb, bb[wb + 1] = Mb[13] - pb, bb[wb + 2] = Mb[14] - Vb
        }
        gb++
      }
    }

    function gb(bb, wb, Mb) {
      let eb = -1;
      return () => {
        const Hb = wb.camera ? wb.camera.worldMatrixVersion : -1;
        Hb !== eb && (Mb(), eb = Hb), bb()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 338;
export const ids = [338];
export const modules = {
  59787: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      applyLightFoOffset: () => Zy,
      getFloatingOriginOffset: () => hy,
      lightFoVersion: () => fy,
      wrapRenderableForFO: () => cb
    });
    var Uy = Wy(40208);

    function hy(yb) {
      const bb = yb.camera;
      if (!bb) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Wy = bb.worldMatrix;
      return {
        x: Wy[12],
        y: Wy[13],
        z: Wy[14]
      }
    }

    function fy(yb) {
      return yb.camera ? yb.camera.worldMatrixVersion : 0
    }

    function Zy(yb, bb) {
      const Wy = bb.camera?.worldMatrix;
      if (!Wy) return;
      const hy = Wy[12],
        fy = Wy[13],
        Zy = Wy[14];
      let cb = 0;
      for (const Py of bb.lights) {
        if (cb >= Uy.b) break;
        if (!Py._writeLightUbo) continue;
        const bb = 4 + 16 * cb,
          Wy = yb[bb + 3];
        if (0 === Wy || 2 === Wy) {
          const Wy = Py.worldMatrix;
          yb[bb] = Wy[12] - hy, yb[bb + 1] = Wy[13] - fy, yb[bb + 2] = Wy[14] - Zy
        }
        cb++
      }
    }

    function cb(yb, bb, Wy) {
      let Uy = -1;
      return () => {
        const hy = bb.camera ? bb.camera.worldMatrixVersion : -1;
        hy !== Uy && (Wy(), Uy = hy), yb()
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
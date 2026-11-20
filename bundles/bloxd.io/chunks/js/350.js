export const id = 350;
export const ids = [350];
export const modules = {
  60401: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      applyLightFoOffset: () => Oz,
      getFloatingOriginOffset: () => Wz,
      lightFoVersion: () => Xz,
      wrapRenderableForFO: () => oz
    });
    var Fz = sz(40849);

    function Wz(zz) {
      const tz = zz.camera;
      if (!tz) return {
        x: 0,
        y: 0,
        z: 0
      };
      const sz = tz.worldMatrix;
      return {
        x: sz[12],
        y: sz[13],
        z: sz[14]
      }
    }

    function Xz(zz) {
      return zz.camera ? zz.camera.worldMatrixVersion : 0
    }

    function Oz(zz, tz) {
      const sz = tz.camera?.worldMatrix;
      if (!sz) return;
      const Wz = sz[12],
        Xz = sz[13],
        Oz = sz[14];
      let oz = 0;
      for (const vz of tz.lights) {
        if (oz >= Fz.e) break;
        if (!vz._writeLightUbo) continue;
        const tz = 4 + 16 * oz,
          sz = zz[tz + 3];
        if (0 === sz || 2 === sz) {
          const sz = vz.worldMatrix;
          zz[tz] = sz[12] - Wz, zz[tz + 1] = sz[13] - Xz, zz[tz + 2] = sz[14] - Oz
        }
        oz++
      }
    }

    function oz(zz, tz, sz) {
      let Fz = -1;
      return () => {
        const Wz = tz.camera ? tz.camera.worldMatrixVersion : -1;
        Wz !== Fz && (sz(), Fz = Wz), zz()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
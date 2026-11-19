export const id = 350;
export const ids = [350];
export const modules = {
  60400: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      applyLightFoOffset: () => lz,
      getFloatingOriginOffset: () => nz,
      lightFoVersion: () => iz,
      wrapRenderableForFO: () => Mz
    });
    var Ez = bz(40946);

    function nz(zz) {
      const uz = zz.camera;
      if (!uz) return {
        x: 0,
        y: 0,
        z: 0
      };
      const bz = uz.worldMatrix;
      return {
        x: bz[12],
        y: bz[13],
        z: bz[14]
      }
    }

    function iz(zz) {
      return zz.camera ? zz.camera.worldMatrixVersion : 0
    }

    function lz(zz, uz) {
      const bz = uz.camera?.worldMatrix;
      if (!bz) return;
      const nz = bz[12],
        iz = bz[13],
        lz = bz[14];
      let Mz = 0;
      for (const tz of uz.lights) {
        if (Mz >= Ez.b) break;
        if (!tz._writeLightUbo) continue;
        const uz = 4 + 16 * Mz,
          bz = zz[uz + 3];
        if (0 === bz || 2 === bz) {
          const bz = tz.worldMatrix;
          zz[uz] = bz[12] - nz, zz[uz + 1] = bz[13] - iz, zz[uz + 2] = bz[14] - lz
        }
        Mz++
      }
    }

    function Mz(zz, uz, bz) {
      let Ez = -1;
      return () => {
        const nz = uz.camera ? uz.camera.worldMatrixVersion : -1;
        nz !== Ez && (bz(), Ez = nz), zz()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
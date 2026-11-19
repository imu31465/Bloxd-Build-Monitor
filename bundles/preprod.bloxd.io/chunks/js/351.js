export const id = 351;
export const ids = [351];
export const modules = {
  60409: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez, nz, iz, lz) {
      const Mz = uz,
        tz = Ez,
        Hz = bz;
      zz[Hz + 0] = Mz[tz + 0], zz[Hz + 1] = Mz[tz + 1], zz[Hz + 2] = Mz[tz + 2], zz[Hz + 3] = Mz[tz + 3], zz[Hz + 4] = Mz[tz + 4], zz[Hz + 5] = Mz[tz + 5], zz[Hz + 6] = Mz[tz + 6], zz[Hz + 7] = Mz[tz + 7], zz[Hz + 8] = Mz[tz + 8], zz[Hz + 9] = Mz[tz + 9], zz[Hz + 10] = Mz[tz + 10], zz[Hz + 11] = Mz[tz + 11], zz[Hz + 12] = Mz[tz + 12] - nz, zz[Hz + 13] = Mz[tz + 13] - iz, zz[Hz + 14] = Mz[tz + 14] - lz, zz[Hz + 15] = Mz[tz + 15]
    }

    function nz(zz) {
      return (uz, bz, nz, iz) => {
        const lz = zz.camera;
        if (!lz) return void Ez(uz, bz, nz, iz, 0, 0, 0);
        const Mz = lz.worldMatrix;
        Ez(uz, bz, nz, iz, Mz[12], Mz[13], Mz[14])
      }
    }
    bz.r(uz), bz.d(uz, {
      makePackMeshWorld: () => nz,
      packMat4IntoF32WithOffset: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
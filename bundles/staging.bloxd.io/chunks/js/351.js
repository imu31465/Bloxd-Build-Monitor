export const id = 351;
export const ids = [351];
export const modules = {
  60407: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const oz = tz,
        vz = Fz,
        Uz = sz;
      zz[Uz + 0] = oz[vz + 0], zz[Uz + 1] = oz[vz + 1], zz[Uz + 2] = oz[vz + 2], zz[Uz + 3] = oz[vz + 3], zz[Uz + 4] = oz[vz + 4], zz[Uz + 5] = oz[vz + 5], zz[Uz + 6] = oz[vz + 6], zz[Uz + 7] = oz[vz + 7], zz[Uz + 8] = oz[vz + 8], zz[Uz + 9] = oz[vz + 9], zz[Uz + 10] = oz[vz + 10], zz[Uz + 11] = oz[vz + 11], zz[Uz + 12] = oz[vz + 12] - Wz, zz[Uz + 13] = oz[vz + 13] - Xz, zz[Uz + 14] = oz[vz + 14] - Oz, zz[Uz + 15] = oz[vz + 15]
    }

    function Wz(zz) {
      return (tz, sz, Wz, Xz) => {
        const Oz = zz.camera;
        if (!Oz) return void Fz(tz, sz, Wz, Xz, 0, 0, 0);
        const oz = Oz.worldMatrix;
        Fz(tz, sz, Wz, Xz, oz[12], oz[13], oz[14])
      }
    }
    sz.r(tz), sz.d(tz, {
      makePackMeshWorld: () => Wz,
      packMat4IntoF32WithOffset: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
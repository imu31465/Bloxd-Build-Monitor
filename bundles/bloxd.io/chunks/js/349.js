export const id = 349;
export const ids = [349];
export const modules = {
  60391: (zz, uz, bz) => {
    bz.d(uz, {
      allocateF64Mat4: () => nz
    });
    var Ez = bz(40939);

    function nz() {
      return new Ez.e(16)
    }
    nz["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
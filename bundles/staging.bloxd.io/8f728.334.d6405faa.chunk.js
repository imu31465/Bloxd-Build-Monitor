export const id = 334;
export const ids = [334];
export const modules = {
  59167: (cB, Bc, nc) => {
    nc.d(Bc, {
      allocateF64Mat4: () => Ic
    });
    var Vc = nc(39678);

    function Ic() {
      return new Vc.f(16)
    }
    Ic["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);
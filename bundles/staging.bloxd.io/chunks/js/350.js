export const id = 350;
export const ids = [350];
export const modules = {
  60659: (vv, zv, Pv) => {
    Pv.d(zv, {
      allocateF64Mat4: () => Sv
    });
    var hv = Pv(41033);

    function Sv() {
      return new hv.h(16)
    }
    Sv["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
export const id = 665;
export const ids = [665];
export const modules = {
  64378: (VV, eV, xV) => {
    xV.d(eV, {
      allocateF64Mat4: () => YV
    });
    var JV = xV(44625);

    function YV() {
      return new JV.f(16)
    }
    YV["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
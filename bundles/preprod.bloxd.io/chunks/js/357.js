export const id = 357;
export const ids = [357];
export const modules = {
  61010: (CC, zC, ZC) => {
    ZC.d(zC, {
      allocateF64Mat4: () => wC
    });
    var QC = ZC(41532);

    function wC() {
      return new QC.g(16)
    }
    wC["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
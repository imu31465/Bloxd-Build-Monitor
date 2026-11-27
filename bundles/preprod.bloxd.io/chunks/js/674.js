export const id = 674;
export const ids = [674];
export const modules = {
  64470: (WW, iW, OW) => {
    OW.d(iW, {
      allocateF64Mat4: () => EW
    });
    var mW = OW(53896);

    function EW() {
      return new mW.g(16)
    }
    EW["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
export const id = 329;
export const ids = [329];
export const modules = {
  58668: (WW, RW, MW) => {
    MW.d(RW, {
      allocateF64Mat4: () => CW
    });
    var wW = MW(39189);

    function CW() {
      return new wW.g(16)
    }
    CW["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
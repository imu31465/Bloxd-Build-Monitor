export const id = 357;
export const ids = [357];
export const modules = {
  61106: (DD, zD, wD) => {
    wD.d(zD, {
      allocateF64Mat4: () => sD
    });
    var pD = wD(41620);

    function sD() {
      return new pD.f(16)
    }
    sD["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
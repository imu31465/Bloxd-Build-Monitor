export const id = 350;
export const ids = [350];
export const modules = {
  60629: (TT, kT, cT) => {
    cT.d(kT, {
      allocateF64Mat4: () => MT
    });
    var lT = cT(41299);

    function MT() {
      return new lT.f(16)
    }
    MT["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
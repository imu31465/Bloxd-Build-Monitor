export const id = 339;
export const ids = [339];
export const modules = {
  59792: (BB, TB, dB) => {
    dB.d(TB, {
      allocateF64Mat4: () => yB
    });
    var VB = dB(40432);

    function yB() {
      return new VB.f(16)
    }
    yB["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
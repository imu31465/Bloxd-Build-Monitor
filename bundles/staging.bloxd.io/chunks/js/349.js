export const id = 349;
export const ids = [349];
export const modules = {
  60616: (UU, RU, gU) => {
    gU.d(RU, {
      allocateF64Mat4: () => pU
    });
    var tU = gU(41085);

    function pU() {
      return new tU.e(16)
    }
    pU["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
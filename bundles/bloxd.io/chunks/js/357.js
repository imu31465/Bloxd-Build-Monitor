export const id = 357;
export const ids = [357];
export const modules = {
  61407: (mm, Tm, fm) => {
    fm.d(Tm, {
      allocateF64Mat4: () => Am
    });
    var hm = fm(41735);

    function Am() {
      return new hm.h(16)
    }
    Am["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
export const id = 665;
export const ids = [665];
export const modules = {
  63976: (MM, rM, iM) => {
    iM.d(rM, {
      allocateF64Mat4: () => SM
    });
    var OM = iM(44379);

    function SM() {
      return new OM.g(16)
    }
    SM["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
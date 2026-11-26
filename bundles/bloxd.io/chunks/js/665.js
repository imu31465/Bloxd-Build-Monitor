export const id = 665;
export const ids = [665];
export const modules = {
  63957: (BB, OB, GB) => {
    GB.d(OB, {
      allocateF64Mat4: () => DB
    });
    var YB = GB(44854);

    function DB() {
      return new YB.g(16)
    }
    DB["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
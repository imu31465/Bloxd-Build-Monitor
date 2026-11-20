export const id = 349;
export const ids = [349];
export const modules = {
  60329: (bb, ab, Ub) => {
    Ub.d(ab, {
      allocateF64Mat4: () => Mb
    });
    var Ab = Ub(40840);

    function Mb() {
      return new Ab.e(16)
    }
    Mb["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
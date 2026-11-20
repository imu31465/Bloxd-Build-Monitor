export const id = 349;
export const ids = [349];
export const modules = {
  60657: (bb, cb, sb) => {
    sb.d(cb, {
      allocateF64Mat4: () => Wb
    });
    var kb = sb(41128);

    function Wb() {
      return new kb.c(16)
    }
    Wb["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
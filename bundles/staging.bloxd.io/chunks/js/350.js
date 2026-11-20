export const id = 350;
export const ids = [350];
export const modules = {
  60665: (bb, ub, hb) => {
    hb.d(ub, {
      allocateF64Mat4: () => Ob
    });
    var Bb = hb(41184);

    function Ob() {
      return new Bb.f(16)
    }
    Ob["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 675;
export const ids = [675];
export const modules = {
  64488: (bb, wb, Mb) => {
    Mb.d(wb, {
      allocateF64Mat4: () => Hb
    });
    var eb = Mb(53947);

    function Hb() {
      return new eb.e(16)
    }
    Hb["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
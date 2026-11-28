export const id = 675;
export const ids = [675];
export const modules = {
  64850: (dd, Od, md) => {
    md.d(Od, {
      allocateF64Mat4: () => Fd
    });
    var Wd = md(54149);

    function Fd() {
      return new Wd.f(16)
    }
    Fd["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
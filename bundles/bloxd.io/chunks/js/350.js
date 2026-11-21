export const id = 350;
export const ids = [350];
export const modules = {
  60954: (dd, Jd, kd) => {
    kd.d(Jd, {
      allocateF64Mat4: () => Nd
    });
    var pd = kd(41685);

    function Nd() {
      return new pd.g(16)
    }
    Nd["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
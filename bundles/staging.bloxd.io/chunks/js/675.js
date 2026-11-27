export const id = 675;
export const ids = [675];
export const modules = {
  64688: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      allocateF64Mat4: () => Wr
    });
    var Zr = Qr(54256);

    function Wr() {
      return new Zr.f(16)
    }
    Wr["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
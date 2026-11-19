export const id = 349;
export const ids = [349];
export const modules = {
  60283: (YY, rY, DY) => {
    DY.d(rY, {
      allocateF64Mat4: () => AY
    });
    var FY = DY(40786);

    function AY() {
      return new FY.f(16)
    }
    AY["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
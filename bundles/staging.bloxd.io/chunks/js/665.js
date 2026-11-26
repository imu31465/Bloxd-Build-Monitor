export const id = 665;
export const ids = [665];
export const modules = {
  64180: (HH, BH, LH) => {
    LH.d(BH, {
      allocateF64Mat4: () => rH
    });
    var AH = LH(45211);

    function rH() {
      return new AH.g(16)
    }
    rH["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
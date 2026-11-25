export const id = 361;
export const ids = [361];
export const modules = {
  61385: (BB, IB, ZB) => {
    ZB.d(IB, {
      allocateF64Mat4: () => JB
    });
    var TB = ZB(41754);

    function JB() {
      return new TB.f(16)
    }
    JB["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 662;
export const ids = [662];
export const modules = {
  64010: (UU, XU, zU) => {
    zU.d(XU, {
      allocateF64Mat4: () => yU
    });
    var cU = zU(44417);

    function yU() {
      return new cU.f(16)
    }
    yU["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
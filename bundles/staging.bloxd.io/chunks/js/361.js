export const id = 361;
export const ids = [361];
export const modules = {
  61441: (pp, ip, cp) => {
    cp.d(ip, {
      allocateF64Mat4: () => op
    });
    var Op = cp(41971);

    function op() {
      return new Op.g(16)
    }
    op["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
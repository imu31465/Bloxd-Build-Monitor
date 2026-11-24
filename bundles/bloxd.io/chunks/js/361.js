export const id = 361;
export const ids = [361];
export const modules = {
  61509: (BB, jB, zB) => {
    zB.d(jB, {
      allocateF64Mat4: () => nB
    });
    var QB = zB(41817);

    function nB() {
      return new QB.d(16)
    }
    nB["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
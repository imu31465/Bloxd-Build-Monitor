export const id = 357;
export const ids = [357];
export const modules = {
  61400: (SS, HS, gS) => {
    gS.d(HS, {
      allocateF64Mat4: () => bS
    });
    var tS = gS(41732);

    function bS() {
      return new tS.d(16)
    }
    bS["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
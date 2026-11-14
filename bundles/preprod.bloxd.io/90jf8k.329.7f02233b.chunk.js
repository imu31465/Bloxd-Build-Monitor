export const id = 329;
export const ids = [329];
export const modules = {
  58976: (FF, WF, SF) => {
    SF.d(WF, {
      allocateF64Mat4: () => AF
    });
    var CF = SF(39579);

    function AF() {
      return new CF.f(16)
    }
    AF["@@MAT4_STORAGE_F64@@"] = !0
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
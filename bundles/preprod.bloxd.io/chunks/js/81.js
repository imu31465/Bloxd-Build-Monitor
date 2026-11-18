export const id = 81;
export const ids = [81];
export const modules = {
  4068: (yb, bb, Wy) => {
    Wy.d(bb, {
      Howl: () => Uy.Howl,
      d: () => Uy.Howler
    });
    var Uy = Wy(4072);
    Uy.Howler._mobileUnloaded = !0
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
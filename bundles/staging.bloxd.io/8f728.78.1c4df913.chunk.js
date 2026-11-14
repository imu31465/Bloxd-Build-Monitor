export const id = 78;
export const ids = [78];
export const modules = {
  3907: (cB, Bc, nc) => {
    nc.d(Bc, {
      Howl: () => Vc.Howl,
      d: () => Vc.Howler
    });
    var Vc = nc(3909);
    Vc.Howler._mobileUnloaded = !0
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);
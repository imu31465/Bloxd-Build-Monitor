export const id = 343;
export const ids = [343];
export const modules = {
  42364: (zz, tz, sz) => {
    sz.d(tz, {
      gamePackSource: () => Xz
    });
    var Fz = sz(4605),
      Wz = sz(1466);

    function Xz(zz) {
      return {
        packKey: async tz => (await Wz.d.getGame(zz, tz, !0)).customTexturePackKey,
        fetchPack: Fz.c
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
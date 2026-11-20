export const id = 344;
export const ids = [344];
export const modules = {
  42707: (bb, ub, hb) => {
    hb.d(ub, {
      gamePackSource: () => Gb
    });
    var Bb = hb(4756),
      Ob = hb(1398);

    function Gb(bb) {
      return {
        packKey: async ub => (await Ob.e.getGame(bb, ub, !0)).customTexturePackKey,
        fetchPack: Bb.e
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
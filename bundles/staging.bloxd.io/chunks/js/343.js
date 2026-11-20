export const id = 343;
export const ids = [343];
export const modules = {
  42668: (bb, cb, sb) => {
    sb.d(cb, {
      gamePackSource: () => ab
    });
    var kb = sb(4688),
      Wb = sb(1474);

    function ab(bb) {
      return {
        packKey: async cb => (await Wb.b.getGame(bb, cb, !0)).customTexturePackKey,
        fetchPack: kb.e
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
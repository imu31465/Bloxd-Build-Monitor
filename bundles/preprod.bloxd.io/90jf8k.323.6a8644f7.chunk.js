export const id = 323;
export const ids = [323];
export const modules = {
  41176: (FF, WF, SF) => {
    SF.d(WF, {
      gamePackSource: () => uF
    });
    var CF = SF(3987),
      AF = SF(1336);

    function uF(FF) {
      return {
        packKey: async WF => (await AF.b.getGame(FF, WF, !0)).customTexturePackKey,
        fetchPack: CF.e
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
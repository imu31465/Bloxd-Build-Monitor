export const id = 276;
export const ids = [276];
export const modules = {
  41194: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      gamePackSource: () => MT
    });
    var WT = mT(5078),
      zT = mT(1613);

    function MT(TT) {
      return {
        packKey: async UT => (await zT.b.getGame(TT, UT, !0)).customTexturePackKey,
        fetchPack: WT.c
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
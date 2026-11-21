export const id = 344;
export const ids = [344];
export const modules = {
  42714: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      gamePackSource: () => oQ
    });
    var LQ = wQ(4832),
      qQ = wQ(1489);

    function oQ(QQ) {
      return {
        packKey: async FQ => (await qQ.b.getGame(QQ, FQ, !0)).customTexturePackKey,
        fetchPack: LQ.d
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
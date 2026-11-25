export const id = 280;
export const ids = [280];
export const modules = {
  41265: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      gamePackSource: () => TQ
    });
    var wQ = XQ(5340),
      qQ = XQ(1548);

    function TQ(QQ) {
      return {
        packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
        fetchPack: wQ.e
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
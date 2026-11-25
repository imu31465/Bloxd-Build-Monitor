export const id = 57;
export const ids = [57];
export const modules = {
  51265: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      startPageTexturePackFeed: () => zQ
    });
    var wQ = XQ(1238),
      qQ = XQ(43),
      TQ = XQ(51250);

    function zQ(QQ, WQ) {
      const XQ = new TQ.d({
        store: qQ.f,
        warn: QQ,
        oneShot: WQ,
        fetchLatest: async QQ => {
          const WQ = await fetch(`${wQ.clientSideServerUrls.texturePackUrl}/${QQ}.json`, {
            cache: "reload"
          });
          if (!WQ.ok) throw new Error(`fetching texture pack ${QQ} answered HTTP ${WQ.status}`);
          return await WQ.json()
        }
      });
      return (0, TQ.f)(XQ), XQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
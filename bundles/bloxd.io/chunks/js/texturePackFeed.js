export const id = 52;
export const ids = [52];
export const modules = {
  42765: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      startPageTexturePackFeed: () => DQ
    });
    var LQ = wQ(1213),
      qQ = wQ(27),
      oQ = wQ(42750);

    function DQ(QQ, FQ) {
      const wQ = new oQ.e({
        store: qQ.h,
        warn: QQ,
        oneShot: FQ,
        fetchLatest: async QQ => {
          const FQ = await fetch(`${LQ.clientSideServerUrls.texturePackUrl}/${QQ}.json`, {
            cache: "reload"
          });
          if (!FQ.ok) throw new Error(`fetching texture pack ${QQ} answered HTTP ${FQ.status}`);
          return await FQ.json()
        }
      });
      return (0, oQ.g)(wQ), wQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
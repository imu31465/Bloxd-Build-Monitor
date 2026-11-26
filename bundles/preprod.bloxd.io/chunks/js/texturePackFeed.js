export const id = 66;
export const ids = [66];
export const modules = {
  53793: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      startPageTexturePackFeed: () => AU
    });
    var cU = zU(1203),
      yU = zU(42),
      QU = zU(53776);

    function AU(UU, XU) {
      const zU = new QU.d({
        store: yU.g,
        warn: UU,
        oneShot: XU,
        fetchLatest: async UU => {
          const XU = await fetch(`${cU.clientSideServerUrls.texturePackUrl}/${UU}.json`, {
            cache: "reload"
          });
          if (!XU.ok) throw new Error(`fetching texture pack ${UU} answered HTTP ${XU.status}`);
          return await XU.json()
        }
      });
      return (0, QU.e)(zU), zU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
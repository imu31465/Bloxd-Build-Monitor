export const id = 67;
export const ids = [67];
export const modules = {
  55183: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      startPageTexturePackFeed: () => jr
    });
    var Zr = Qr(1262),
      Wr = Qr(43),
      ar = Qr(55176);

    function jr(rr, Sr) {
      const Qr = new ar.e({
        store: Wr.h,
        warn: rr,
        oneShot: Sr,
        fetchLatest: async rr => {
          const Sr = await fetch(`${Zr.clientSideServerUrls.texturePackUrl}/${rr}.json`, {
            cache: "reload"
          });
          if (!Sr.ok) throw new Error(`fetching texture pack ${rr} answered HTTP ${Sr.status}`);
          return await Sr.json()
        }
      });
      return (0, ar.g)(Qr), Qr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
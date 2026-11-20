export const id = 51;
export const ids = [51];
export const modules = {
  42393: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      startPageTexturePackFeed: () => Oz
    });
    var Fz = sz(1191),
      Wz = sz(44),
      Xz = sz(42384);

    function Oz(zz, tz) {
      const sz = new Xz.b({
        store: Wz.e,
        warn: zz,
        oneShot: tz,
        fetchLatest: async zz => {
          const tz = await fetch(`${Fz.clientSideServerUrls.texturePackUrl}/${zz}.json`, {
            cache: "reload"
          });
          if (!tz.ok) throw new Error(`fetching texture pack ${zz} answered HTTP ${tz.status}`);
          return await tz.json()
        }
      });
      return (0, Xz.f)(sz), sz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
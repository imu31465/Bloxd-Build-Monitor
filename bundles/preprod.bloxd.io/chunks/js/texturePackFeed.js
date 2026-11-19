export const id = 51;
export const ids = [51];
export const modules = {
  42628: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      startPageTexturePackFeed: () => lz
    });
    var Ez = bz(1195),
      nz = bz(33),
      iz = bz(42615);

    function lz(zz, uz) {
      const bz = new iz.b({
        store: nz.d,
        warn: zz,
        oneShot: uz,
        fetchLatest: async zz => {
          const uz = await fetch(`${Ez.clientSideServerUrls.texturePackUrl}/${zz}.json`, {
            cache: "reload"
          });
          if (!uz.ok) throw new Error(`fetching texture pack ${zz} answered HTTP ${uz.status}`);
          return await uz.json()
        }
      });
      return (0, iz.c)(bz), bz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
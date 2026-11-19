export const id = 343;
export const ids = [343];
export const modules = {
  42594: (zz, uz, bz) => {
    bz.d(uz, {
      gamePackSource: () => iz
    });
    var Ez = bz(4737),
      nz = bz(1473);

    function iz(zz) {
      return {
        packKey: async uz => (await nz.c.getGame(zz, uz, !0)).customTexturePackKey,
        fetchPack: Ez.c
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
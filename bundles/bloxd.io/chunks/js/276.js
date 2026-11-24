export const id = 276;
export const ids = [276];
export const modules = {
  41273: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      gamePackSource: () => Ip
    });
    var Op = cp(5103),
      op = cp(1520);

    function Ip(pp) {
      return {
        packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
        fetchPack: Op.d
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
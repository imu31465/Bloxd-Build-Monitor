export const id = 299;
export const ids = [299];
export const modules = {
  42165: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      gamePackSource: () => jM
    });
    var OM = iM(5388),
      SM = iM(1573);

    function jM(MM) {
      return {
        packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
        fetchPack: OM.d
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
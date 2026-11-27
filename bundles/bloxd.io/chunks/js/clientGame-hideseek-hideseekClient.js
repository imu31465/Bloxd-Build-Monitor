export const id = 21;
export const ids = [21];
export const modules = {
  40765: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => mW
    });
    const mW = () => ({
      plugins: {
        cosmeticCompanions: null
      }
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
export const id = 23;
export const ids = [23];
export const modules = {
  40780: (WW, iW, OW) => {
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
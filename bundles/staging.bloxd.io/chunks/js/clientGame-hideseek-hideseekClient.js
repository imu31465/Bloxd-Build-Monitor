export const id = 21;
export const ids = [21];
export const modules = {
  40557: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => OM
    });
    const OM = () => ({
      plugins: {
        cosmeticCompanions: null
      }
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
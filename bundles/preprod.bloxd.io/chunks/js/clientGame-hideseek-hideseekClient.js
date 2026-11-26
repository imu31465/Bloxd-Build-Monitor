export const id = 21;
export const ids = [21];
export const modules = {
  40213: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => YB
    });
    const YB = () => ({
      plugins: {
        cosmeticCompanions: null
      }
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 23;
export const ids = [23];
export const modules = {
  40226: (BB, OB, GB) => {
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
export const id = 23;
export const ids = [23];
export const modules = {
  40569: (MM, rM, iM) => {
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
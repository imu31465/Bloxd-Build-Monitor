export const id = 20;
export const ids = [20];
export const modules = {
  39164: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Ku
    });
    var Eu = yu(34);
    const Ku = function(uu, Ru, yu) {
      let Ku;
      return {
        onCreate: uu => {
          Ku = uu
        },
        onPlayerClick: (uu, Ru, yu, Qu, mu, Ju) => {
          Ru || "Workbench" !== Ku.getMetaInfo(Ju).rootName || Eu.k.Op("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
export const id = 20;
export const ids = [20];
export const modules = {
  39749: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Uu
    });
    var su = ju(24);
    const Uu = function(uu, Eu, ju) {
      let Uu;
      return {
        onCreate: uu => {
          Uu = uu
        },
        onPlayerClick: (uu, Eu, ju, Zu, Xu, lu) => {
          Eu || "Workbench" !== Uu.getMetaInfo(lu).rootName || su.h.TY("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
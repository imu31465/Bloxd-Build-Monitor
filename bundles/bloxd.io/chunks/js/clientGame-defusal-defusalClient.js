export const id = 16;
export const ids = [16];
export const modules = {
  39725: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => su
    });
    const su = function(uu, Eu, ju) {
      let su;
      return {
        onCreate: uu => {
          su = uu
        },
        onPlayerAltAction: (uu, Eu, ju, Uu, Zu, Xu) => {
          Xu && "Mesh" === su.getEntityType(Xu) && su.openShop(uu, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
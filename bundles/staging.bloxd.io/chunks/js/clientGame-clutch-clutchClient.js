export const id = 13;
export const ids = [13];
export const modules = {
  39584: (uu, Eu, ju) => {
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
          Xu && "Mesh" === su.getEntityType(Xu) && "Quartermaster" === su.getEntityName(Xu) && su.openShop(uu, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
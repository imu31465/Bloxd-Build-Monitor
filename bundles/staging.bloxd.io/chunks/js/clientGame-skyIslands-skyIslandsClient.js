export const id = 24;
export const ids = [24];
export const modules = {
  39830: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => su
    });
    const su = function() {
      let uu;
      return {
        onCreate: Eu => {
          uu = Eu
        },
        onPlayerAltAction: (Eu, ju, su, Uu, Zu, Xu) => {
          if (!Xu || "Mesh" !== uu.getEntityType(Xu)) return;
          const lu = uu.getEntityName(Xu);
          "Perks" === lu ? uu.openShop(Eu, !1, "Perks") : "Returning Bonus" === lu && uu.openShop(Eu, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
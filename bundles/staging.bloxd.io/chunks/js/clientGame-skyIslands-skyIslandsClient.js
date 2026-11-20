export const id = 24;
export const ids = [24];
export const modules = {
  39254: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Eu
    });
    const Eu = function() {
      let uu;
      return {
        onCreate: Ru => {
          uu = Ru
        },
        onPlayerAltAction: (Ru, yu, Eu, Ku, Qu, mu) => {
          if (!mu || "Mesh" !== uu.getEntityType(mu)) return;
          const Ju = uu.getEntityName(mu);
          "Perks" === Ju ? uu.openShop(Ru, !1, "Perks") : "Returning Bonus" === Ju && uu.openShop(Ru, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
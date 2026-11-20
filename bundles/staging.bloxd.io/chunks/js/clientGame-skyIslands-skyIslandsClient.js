export const id = 24;
export const ids = [24];
export const modules = {
  39109: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Rk
    });
    const Rk = function() {
      let kk;
      return {
        onCreate: Fk => {
          kk = Fk
        },
        onPlayerAltAction: (Fk, Bk, Rk, tk, ak, Xk) => {
          if (!Xk || "Mesh" !== kk.getEntityType(Xk)) return;
          const bk = kk.getEntityName(Xk);
          "Perks" === bk ? kk.openShop(Fk, !1, "Perks") : "Returning Bonus" === bk && kk.openShop(Fk, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
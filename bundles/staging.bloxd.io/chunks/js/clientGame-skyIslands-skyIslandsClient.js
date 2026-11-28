export const id = 30;
export const ids = [30];
export const modules = {
  41250: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Wd
    });
    const Wd = function() {
      let dd;
      return {
        onCreate: Od => {
          dd = Od
        },
        onPlayerAltAction: (Od, md, Wd, Fd, Rd, Xd) => {
          if (!Xd || "Mesh" !== dd.getEntityType(Xd)) return;
          const Kd = dd.getEntityName(Xd);
          "Perks" === Kd ? dd.openShop(Od, !1, "Perks") : "Returning Bonus" === Kd && dd.openShop(Od, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
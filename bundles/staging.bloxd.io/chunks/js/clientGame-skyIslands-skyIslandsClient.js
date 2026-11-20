export const id = 24;
export const ids = [24];
export const modules = {
  38877: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Fz
    });
    const Fz = function() {
      let zz;
      return {
        onCreate: tz => {
          zz = tz
        },
        onPlayerAltAction: (tz, sz, Fz, Wz, Xz, Oz) => {
          if (!Oz || "Mesh" !== zz.getEntityType(Oz)) return;
          const oz = zz.getEntityName(Oz);
          "Perks" === oz ? zz.openShop(tz, !1, "Perks") : "Returning Bonus" === oz && zz.openShop(tz, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
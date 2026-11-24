export const id = 24;
export const ids = [24];
export const modules = {
  39763: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Ot
    });
    const Ot = function() {
      let tt;
      return {
        onCreate: et => {
          tt = et
        },
        onPlayerAltAction: (et, Vt, Ot, qt, Dt, mt) => {
          if (!mt || "Mesh" !== tt.getEntityType(mt)) return;
          const dt = tt.getEntityName(mt);
          "Perks" === dt ? tt.openShop(et, !1, "Perks") : "Returning Bonus" === dt && tt.openShop(et, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
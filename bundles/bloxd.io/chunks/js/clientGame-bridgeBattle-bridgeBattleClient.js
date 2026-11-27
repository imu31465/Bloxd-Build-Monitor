export const id = 10;
export const ids = [10];
export const modules = {
  40858: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Zr
    });
    const Zr = function(rr, Sr, Qr) {
      let Zr;
      return {
        onCreate: rr => {
          Zr = rr
        },
        onPlayerAltAction: (rr, Sr, Qr, Wr, ar, jr) => {
          jr && "Mesh" === Zr.getEntityType(jr) && ("Permanent Upgrades" === Zr.getEntityName(jr) ? Zr.openShop(rr, !1, "Upgrades") : "Items" === Zr.getEntityName(jr) ? Zr.openShop(rr, !1, "Items") : "Prestige" === Zr.getEntityName(jr) && Zr.openShop(rr, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
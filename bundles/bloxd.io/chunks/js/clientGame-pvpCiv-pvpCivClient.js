export const id = 27;
export const ids = [27];
export const modules = {
  41221: (rr, Sr, Qr) => {
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
          null !== jr && "Mesh" === Zr.getEntityType(jr) && "Weaponmaster" === Zr.getEntityName(jr) && Zr.openShop(rr, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
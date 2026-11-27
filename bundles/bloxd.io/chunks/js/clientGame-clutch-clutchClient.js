export const id = 14;
export const ids = [14];
export const modules = {
  40879: (rr, Sr, Qr) => {
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
          jr && "Mesh" === Zr.getEntityType(jr) && "Quartermaster" === Zr.getEntityName(jr) && Zr.openShop(rr, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
export const id = 17;
export const ids = [17];
export const modules = {
  41036: (rr, Sr, Qr) => {
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
          jr && "Mesh" === Zr.getEntityType(jr) && Zr.openShop(rr, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
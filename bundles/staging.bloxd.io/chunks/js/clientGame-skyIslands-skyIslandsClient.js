export const id = 30;
export const ids = [30];
export const modules = {
  41236: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Zr
    });
    const Zr = function() {
      let rr;
      return {
        onCreate: Sr => {
          rr = Sr
        },
        onPlayerAltAction: (Sr, Qr, Zr, Wr, ar, jr) => {
          if (!jr || "Mesh" !== rr.getEntityType(jr)) return;
          const Ir = rr.getEntityName(jr);
          "Perks" === Ir ? rr.openShop(Sr, !1, "Perks") : "Returning Bonus" === Ir && rr.openShop(Sr, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
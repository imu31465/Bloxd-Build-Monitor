export const id = 25;
export const ids = [25];
export const modules = {
  39818: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => wQ
    });
    const wQ = function() {
      let QQ;
      return {
        onCreate: WQ => {
          QQ = WQ
        },
        onPlayerAltAction: (WQ, XQ, wQ, qQ, TQ, zQ) => {
          if (!zQ || "Mesh" !== QQ.getEntityType(zQ)) return;
          const sQ = QQ.getEntityName(zQ);
          "Perks" === sQ ? QQ.openShop(WQ, !1, "Perks") : "Returning Bonus" === sQ && QQ.openShop(WQ, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
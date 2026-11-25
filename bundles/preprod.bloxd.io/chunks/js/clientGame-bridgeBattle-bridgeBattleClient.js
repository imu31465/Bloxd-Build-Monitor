export const id = 10;
export const ids = [10];
export const modules = {
  39569: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => wQ
    });
    const wQ = function(QQ, WQ, XQ) {
      let wQ;
      return {
        onCreate: QQ => {
          wQ = QQ
        },
        onPlayerAltAction: (QQ, WQ, XQ, qQ, TQ, zQ) => {
          zQ && "Mesh" === wQ.getEntityType(zQ) && ("Permanent Upgrades" === wQ.getEntityName(zQ) ? wQ.openShop(QQ, !1, "Upgrades") : "Items" === wQ.getEntityName(zQ) ? wQ.openShop(QQ, !1, "Items") : "Prestige" === wQ.getEntityName(zQ) && wQ.openShop(QQ, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
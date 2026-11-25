export const id = 24;
export const ids = [24];
export const modules = {
  39810: (QQ, WQ, XQ) => {
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
          null !== zQ && "Mesh" === wQ.getEntityType(zQ) && "Weaponmaster" === wQ.getEntityName(zQ) && wQ.openShop(QQ, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
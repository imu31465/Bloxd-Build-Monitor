export const id = 23;
export const ids = [23];
export const modules = {
  39056: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => LQ
    });
    const LQ = function(QQ, FQ, wQ) {
      let LQ;
      return {
        onCreate: QQ => {
          LQ = QQ
        },
        onPlayerAltAction: (QQ, FQ, wQ, qQ, oQ, DQ) => {
          null !== DQ && "Mesh" === LQ.getEntityType(DQ) && "Weaponmaster" === LQ.getEntityName(DQ) && LQ.openShop(QQ, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
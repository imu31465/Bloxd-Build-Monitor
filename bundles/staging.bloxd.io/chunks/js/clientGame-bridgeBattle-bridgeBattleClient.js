export const id = 10;
export const ids = [10];
export const modules = {
  38802: (QQ, FQ, wQ) => {
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
          DQ && "Mesh" === LQ.getEntityType(DQ) && ("Permanent Upgrades" === LQ.getEntityName(DQ) ? LQ.openShop(QQ, !1, "Upgrades") : "Items" === LQ.getEntityName(DQ) ? LQ.openShop(QQ, !1, "Items") : "Prestige" === LQ.getEntityName(DQ) && LQ.openShop(QQ, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
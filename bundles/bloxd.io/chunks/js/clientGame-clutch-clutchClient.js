export const id = 13;
export const ids = [13];
export const modules = {
  38813: (QQ, FQ, wQ) => {
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
          DQ && "Mesh" === LQ.getEntityType(DQ) && "Quartermaster" === LQ.getEntityName(DQ) && LQ.openShop(QQ, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
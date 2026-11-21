export const id = 24;
export const ids = [24];
export const modules = {
  39065: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => LQ
    });
    const LQ = function() {
      let QQ;
      return {
        onCreate: FQ => {
          QQ = FQ
        },
        onPlayerAltAction: (FQ, wQ, LQ, qQ, oQ, DQ) => {
          if (!DQ || "Mesh" !== QQ.getEntityType(DQ)) return;
          const kQ = QQ.getEntityName(DQ);
          "Perks" === kQ ? QQ.openShop(FQ, !1, "Perks") : "Returning Bonus" === kQ && QQ.openShop(FQ, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
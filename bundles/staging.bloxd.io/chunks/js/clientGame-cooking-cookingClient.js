export const id = 15;
export const ids = [15];
export const modules = {
  38931: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => qQ
    });
    const LQ = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      qQ = function(QQ, FQ, wQ) {
        let qQ;
        return {
          onCreate: QQ => {
            qQ = QQ
          },
          onPlayerAltAction: (QQ, FQ, wQ, oQ, DQ, kQ) => {
            LQ.some((QQ => QQ[0] === FQ && QQ[2] === oQ)) && qQ.openShop(QQ, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
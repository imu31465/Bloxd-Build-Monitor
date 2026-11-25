export const id = 16;
export const ids = [16];
export const modules = {
  39702: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => qQ
    });
    const wQ = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      qQ = function(QQ, WQ, XQ) {
        let qQ;
        return {
          onCreate: QQ => {
            qQ = QQ
          },
          onPlayerAltAction: (QQ, WQ, XQ, TQ, zQ, sQ) => {
            wQ.some((QQ => QQ[0] === WQ && QQ[2] === TQ)) && qQ.openShop(QQ, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
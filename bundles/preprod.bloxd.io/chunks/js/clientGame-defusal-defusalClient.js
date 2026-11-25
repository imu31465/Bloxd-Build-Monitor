export const id = 17;
export const ids = [17];
export const modules = {
  39707: (QQ, WQ, XQ) => {
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
          zQ && "Mesh" === wQ.getEntityType(zQ) && wQ.openShop(QQ, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
export const id = 14;
export const ids = [14];
export const modules = {
  39581: (QQ, WQ, XQ) => {
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
          zQ && "Mesh" === wQ.getEntityType(zQ) && "Quartermaster" === wQ.getEntityName(zQ) && wQ.openShop(QQ, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
export const id = 21;
export const ids = [21];
export const modules = {
  39730: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => qQ
    });
    var wQ = XQ(31);
    const qQ = function(QQ, WQ, XQ) {
      let qQ;
      return {
        onCreate: QQ => {
          qQ = QQ
        },
        onPlayerClick: (QQ, WQ, XQ, TQ, zQ, sQ) => {
          WQ || "Workbench" !== qQ.getMetaInfo(sQ).rootName || wQ.k.mB("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
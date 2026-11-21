export const id = 20;
export const ids = [20];
export const modules = {
  38958: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => qQ
    });
    var LQ = wQ(22);
    const qQ = function(QQ, FQ, wQ) {
      let qQ;
      return {
        onCreate: QQ => {
          qQ = QQ
        },
        onPlayerClick: (QQ, FQ, wQ, oQ, DQ, kQ) => {
          FQ || "Workbench" !== qQ.getMetaInfo(kQ).rootName || LQ.l.GA("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
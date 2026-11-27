export const id = 24;
export const ids = [24];
export const modules = {
  41129: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Wr
    });
    var Zr = Qr(34);
    const Wr = function(rr, Sr, Qr) {
      let Wr;
      return {
        onCreate: rr => {
          Wr = rr
        },
        onPlayerClick: (rr, Sr, Qr, ar, jr, Ir) => {
          Sr || "Workbench" !== Wr.getMetaInfo(Ir).rootName || Zr.i.Jp("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
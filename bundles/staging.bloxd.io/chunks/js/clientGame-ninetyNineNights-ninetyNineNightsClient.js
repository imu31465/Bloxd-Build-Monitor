export const id = 20;
export const ids = [20];
export const modules = {
  39661: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => qt
    });
    var Ot = Vt(31);
    const qt = function(tt, et, Vt) {
      let qt;
      return {
        onCreate: tt => {
          qt = tt
        },
        onPlayerClick: (tt, et, Vt, Dt, mt, dt) => {
          et || "Workbench" !== qt.getMetaInfo(dt).rootName || Ot.j.sw("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
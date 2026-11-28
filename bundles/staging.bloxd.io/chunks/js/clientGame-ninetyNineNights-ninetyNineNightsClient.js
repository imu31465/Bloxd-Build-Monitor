export const id = 24;
export const ids = [24];
export const modules = {
  41121: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Fd
    });
    var Wd = md(32);
    const Fd = function(dd, Od, md) {
      let Fd;
      return {
        onCreate: dd => {
          Fd = dd
        },
        onPlayerClick: (dd, Od, md, Rd, Xd, Kd) => {
          Od || "Workbench" !== Fd.getMetaInfo(Kd).rootName || Wd.j.lQ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
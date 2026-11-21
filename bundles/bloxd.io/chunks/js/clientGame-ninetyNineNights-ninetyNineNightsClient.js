export const id = 20;
export const ids = [20];
export const modules = {
  39555: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Nd
    });
    var pd = kd(29);
    const Nd = function(dd, Jd, kd) {
      let Nd;
      return {
        onCreate: dd => {
          Nd = dd
        },
        onPlayerClick: (dd, Jd, kd, Wd, Pd, Zd) => {
          Jd || "Workbench" !== Nd.getMetaInfo(Zd).rootName || pd.j.nO("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
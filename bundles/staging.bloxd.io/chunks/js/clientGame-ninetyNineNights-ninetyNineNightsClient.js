export const id = 20;
export const ids = [20];
export const modules = {
  39364: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => lq
    });
    var Yq = gq(31);
    const lq = function(qq, Eq, gq) {
      let lq;
      return {
        onCreate: qq => {
          lq = qq
        },
        onPlayerClick: (qq, Eq, gq, Oq, mq, xq) => {
          Eq || "Workbench" !== lq.getMetaInfo(xq).rootName || Yq.i.TV("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
export const id = 16;
export const ids = [16];
export const modules = {
  39340: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Yq
    });
    const Yq = function(qq, Eq, gq) {
      let Yq;
      return {
        onCreate: qq => {
          Yq = qq
        },
        onPlayerAltAction: (qq, Eq, gq, lq, Oq, mq) => {
          mq && "Mesh" === Yq.getEntityType(mq) && Yq.openShop(qq, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
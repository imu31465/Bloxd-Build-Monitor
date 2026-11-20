export const id = 13;
export const ids = [13];
export const modules = {
  39229: (qq, Eq, gq) => {
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
          mq && "Mesh" === Yq.getEntityType(mq) && "Quartermaster" === Yq.getEntityName(mq) && Yq.openShop(qq, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
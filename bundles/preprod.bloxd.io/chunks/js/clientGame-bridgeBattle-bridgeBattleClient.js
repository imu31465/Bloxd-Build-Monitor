export const id = 10;
export const ids = [10];
export const modules = {
  39212: (qq, Eq, gq) => {
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
          mq && "Mesh" === Yq.getEntityType(mq) && ("Permanent Upgrades" === Yq.getEntityName(mq) ? Yq.openShop(qq, !1, "Upgrades") : "Items" === Yq.getEntityName(mq) ? Yq.openShop(qq, !1, "Items") : "Prestige" === Yq.getEntityName(mq) && Yq.openShop(qq, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
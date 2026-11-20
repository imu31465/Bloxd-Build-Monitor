export const id = 24;
export const ids = [24];
export const modules = {
  39449: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Yq
    });
    const Yq = function() {
      let qq;
      return {
        onCreate: Eq => {
          qq = Eq
        },
        onPlayerAltAction: (Eq, gq, Yq, lq, Oq, mq) => {
          if (!mq || "Mesh" !== qq.getEntityType(mq)) return;
          const xq = qq.getEntityName(mq);
          "Perks" === xq ? qq.openShop(Eq, !1, "Perks") : "Returning Bonus" === xq && qq.openShop(Eq, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
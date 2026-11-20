export const id = 23;
export const ids = [23];
export const modules = {
  39445: (qq, Eq, gq) => {
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
          null !== mq && "Mesh" === Yq.getEntityType(mq) && "Weaponmaster" === Yq.getEntityName(mq) && Yq.openShop(qq, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
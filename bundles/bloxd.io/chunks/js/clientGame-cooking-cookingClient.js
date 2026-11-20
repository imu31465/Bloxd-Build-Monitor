export const id = 15;
export const ids = [15];
export const modules = {
  39331: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => lq
    });
    const Yq = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      lq = function(qq, Eq, gq) {
        let lq;
        return {
          onCreate: qq => {
            lq = qq
          },
          onPlayerAltAction: (qq, Eq, gq, Oq, mq, xq) => {
            Yq.some((qq => qq[0] === Eq && qq[2] === Oq)) && lq.openShop(qq, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
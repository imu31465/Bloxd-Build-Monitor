export const id = 15;
export const ids = [15];
export const modules = {
  39722: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Uu
    });
    const su = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Uu = function(uu, Eu, ju) {
        let Uu;
        return {
          onCreate: uu => {
            Uu = uu
          },
          onPlayerAltAction: (uu, Eu, ju, Zu, Xu, lu) => {
            su.some((uu => uu[0] === Eu && uu[2] === Zu)) && Uu.openShop(uu, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
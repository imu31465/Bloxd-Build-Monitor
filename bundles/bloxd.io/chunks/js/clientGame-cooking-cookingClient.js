export const id = 15;
export const ids = [15];
export const modules = {
  38995: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => tk
    });
    const Rk = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      tk = function(kk, Fk, Bk) {
        let tk;
        return {
          onCreate: kk => {
            tk = kk
          },
          onPlayerAltAction: (kk, Fk, Bk, ak, Xk, bk) => {
            Rk.some((kk => kk[0] === Fk && kk[2] === ak)) && tk.openShop(kk, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
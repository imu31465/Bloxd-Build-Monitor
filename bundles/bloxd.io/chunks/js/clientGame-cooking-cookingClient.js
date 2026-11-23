export const id = 15;
export const ids = [15];
export const modules = {
  39432: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Tk
    });
    const Xk = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Tk = function(kk, Fk, Ik) {
        let Tk;
        return {
          onCreate: kk => {
            Tk = kk
          },
          onPlayerAltAction: (kk, Fk, Ik, ik, yk, lk) => {
            Xk.some((kk => kk[0] === Fk && kk[2] === ik)) && Tk.openShop(kk, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
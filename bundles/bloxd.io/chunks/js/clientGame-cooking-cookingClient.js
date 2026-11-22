export const id = 15;
export const ids = [15];
export const modules = {
  38993: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => fk
    });
    const Dk = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      fk = function(kk, ek, ik) {
        let fk;
        return {
          onCreate: kk => {
            fk = kk
          },
          onPlayerAltAction: (kk, ek, ik, Sk, bk, rk) => {
            Dk.some((kk => kk[0] === ek && kk[2] === Sk)) && fk.openShop(kk, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
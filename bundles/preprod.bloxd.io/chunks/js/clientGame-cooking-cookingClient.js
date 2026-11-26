export const id = 16;
export const ids = [16];
export const modules = {
  40264: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => yU
    });
    const cU = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      yU = function(UU, XU, zU) {
        let yU;
        return {
          onCreate: UU => {
            yU = UU
          },
          onPlayerAltAction: (UU, XU, zU, QU, AU, FU) => {
            cU.some((UU => UU[0] === XU && UU[2] === QU)) && yU.openShop(UU, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
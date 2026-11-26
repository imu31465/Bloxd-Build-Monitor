export const id = 17;
export const ids = [17];
export const modules = {
  40271: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => cU
    });
    const cU = function(UU, XU, zU) {
      let cU;
      return {
        onCreate: UU => {
          cU = UU
        },
        onPlayerAltAction: (UU, XU, zU, yU, QU, AU) => {
          AU && "Mesh" === cU.getEntityType(AU) && cU.openShop(UU, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
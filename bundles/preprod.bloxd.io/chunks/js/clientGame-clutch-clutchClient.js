export const id = 14;
export const ids = [14];
export const modules = {
  40155: (UU, XU, zU) => {
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
          AU && "Mesh" === cU.getEntityType(AU) && "Quartermaster" === cU.getEntityName(AU) && cU.openShop(UU, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
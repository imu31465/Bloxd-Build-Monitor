export const id = 27;
export const ids = [27];
export const modules = {
  40416: (UU, XU, zU) => {
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
          null !== AU && "Mesh" === cU.getEntityType(AU) && "Weaponmaster" === cU.getEntityName(AU) && cU.openShop(UU, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 29;
export const ids = [29];
export const modules = {
  40427: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => cU
    });
    const cU = function() {
      let UU;
      return {
        onCreate: XU => {
          UU = XU
        },
        onPlayerAltAction: (XU, zU, cU, yU, QU, AU) => {
          if (!AU || "Mesh" !== UU.getEntityType(AU)) return;
          const FU = UU.getEntityName(AU);
          "Perks" === FU ? UU.openShop(XU, !1, "Perks") : "Returning Bonus" === FU && UU.openShop(XU, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
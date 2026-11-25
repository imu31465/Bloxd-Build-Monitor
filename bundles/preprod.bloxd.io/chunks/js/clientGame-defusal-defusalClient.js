export const id = 17;
export const ids = [17];
export const modules = {
  40511: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => OM
    });
    const OM = function(MM, rM, iM) {
      let OM;
      return {
        onCreate: MM => {
          OM = MM
        },
        onPlayerAltAction: (MM, rM, iM, SM, jM, aM) => {
          aM && "Mesh" === OM.getEntityType(aM) && OM.openShop(MM, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
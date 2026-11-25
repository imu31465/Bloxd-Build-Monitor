export const id = 14;
export const ids = [14];
export const modules = {
  40383: (MM, rM, iM) => {
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
          aM && "Mesh" === OM.getEntityType(aM) && "Quartermaster" === OM.getEntityName(aM) && OM.openShop(MM, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
export const id = 24;
export const ids = [24];
export const modules = {
  40575: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => SM
    });
    var OM = iM(22);
    const SM = function(MM, rM, iM) {
      let SM;
      return {
        onCreate: MM => {
          SM = MM
        },
        onPlayerClick: (MM, rM, iM, jM, aM, PM) => {
          rM || "Workbench" !== SM.getMetaInfo(PM).rootName || OM.i.Tz("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
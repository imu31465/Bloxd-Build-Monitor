export const id = 156;
export const ids = [156];
export const modules = {
  7154: (MM, rM, iM) => {
    iM.d(rM, {
      encodeBinaryMessageWithMetricsCookies: () => SM
    });
    var OM = iM(4129);

    function SM(MM) {
      return OM.i.toBuffer(MM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
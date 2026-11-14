export const id = 126;
export const ids = [126];
export const modules = {
  7022: (FF, WF, SF) => {
    SF.d(WF, {
      encodeBinaryMessageWithMetricsCookies: () => AF
    });
    var CF = SF(2940);

    function AF(FF) {
      return CF.j.toBuffer(FF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
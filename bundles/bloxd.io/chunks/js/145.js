export const id = 145;
export const ids = [145];
export const modules = {
  8216: (BB, IB, ZB) => {
    ZB.d(IB, {
      encodeBinaryMessageWithMetricsCookies: () => JB
    });
    var TB = ZB(3911);

    function JB(BB) {
      return TB.m.toBuffer(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
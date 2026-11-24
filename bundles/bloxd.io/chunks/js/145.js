export const id = 145;
export const ids = [145];
export const modules = {
  8039: (BB, jB, zB) => {
    zB.d(jB, {
      encodeBinaryMessageWithMetricsCookies: () => nB
    });
    var QB = zB(3849);

    function nB(BB) {
      return QB.j.toBuffer(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
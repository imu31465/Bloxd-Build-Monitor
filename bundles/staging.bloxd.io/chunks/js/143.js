export const id = 143;
export const ids = [143];
export const modules = {
  8239: (SS, HS, gS) => {
    gS.d(HS, {
      encodeBinaryMessageWithMetricsCookies: () => bS
    });
    var tS = gS(3870);

    function bS(SS) {
      return tS.o.toBuffer(SS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
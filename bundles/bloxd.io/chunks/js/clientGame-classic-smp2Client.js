export const id = 13;
export const ids = [13];
export const modules = {
  40376: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      makeSmp2ClientGame: () => jM
    });
    const OM = "smp2FirstSpawn";
    var SM = iM(1744);

    function jM() {
      let MM = !1;
      return {
        onReceivedMessageFromServer: rM => {
          rM !== OM || MM || (MM = !0, (0, SM.c)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
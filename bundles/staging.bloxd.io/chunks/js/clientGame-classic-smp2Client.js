export const id = 13;
export const ids = [13];
export const modules = {
  40007: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      makeSmp2ClientGame: () => QB
    });
    const YB = "smp2FirstSpawn";
    var DB = GB(1723);

    function QB() {
      let BB = !1;
      return {
        onReceivedMessageFromServer: OB => {
          OB !== YB || BB || (BB = !0, (0, DB.h)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
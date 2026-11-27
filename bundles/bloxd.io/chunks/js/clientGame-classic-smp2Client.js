export const id = 13;
export const ids = [13];
export const modules = {
  40128: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      makeSmp2ClientGame: () => Me
    });
    const ye = "smp2FirstSpawn";
    var be = He(1653);

    function Me() {
      let ee = !1;
      return {
        onReceivedMessageFromServer: ie => {
          ie !== ye || ee || (ee = !0, (0, be.h)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
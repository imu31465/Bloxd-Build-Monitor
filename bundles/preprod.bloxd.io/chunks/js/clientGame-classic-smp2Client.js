export const id = 13;
export const ids = [13];
export const modules = {
  40151: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      makeSmp2ClientGame: () => QU
    });
    const cU = "smp2FirstSpawn";
    var yU = zU(1709);

    function QU() {
      let UU = !1;
      return {
        onReceivedMessageFromServer: XU => {
          XU !== cU || UU || (UU = !0, (0, yU.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
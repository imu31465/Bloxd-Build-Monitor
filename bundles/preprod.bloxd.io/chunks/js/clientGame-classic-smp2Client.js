export const id = 13;
export const ids = [13];
export const modules = {
  39578: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      makeSmp2ClientGame: () => TQ
    });
    const wQ = "smp2FirstSpawn";
    var qQ = XQ(1722);

    function TQ() {
      let QQ = !1;
      return {
        onReceivedMessageFromServer: WQ => {
          WQ !== wQ || QQ || (QQ = !0, (0, qQ.d)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
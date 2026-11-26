export const id = 13;
export const ids = [13];
export const modules = {
  40261: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      makeSmp2ClientGame: () => SH
    });
    const AH = "smp2FirstSpawn";
    var rH = LH(1689);

    function SH() {
      let HH = !1;
      return {
        onReceivedMessageFromServer: BH => {
          BH !== AH || HH || (HH = !0, (0, rH.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
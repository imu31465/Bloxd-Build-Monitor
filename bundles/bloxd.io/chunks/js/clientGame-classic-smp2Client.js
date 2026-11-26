export const id = 13;
export const ids = [13];
export const modules = {
  40509: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      makeSmp2ClientGame: () => UV
    });
    const JV = "smp2FirstSpawn";
    var YV = xV(1759);

    function UV() {
      let VV = !1;
      return {
        onReceivedMessageFromServer: eV => {
          eV !== JV || VV || (VV = !0, (0, YV.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
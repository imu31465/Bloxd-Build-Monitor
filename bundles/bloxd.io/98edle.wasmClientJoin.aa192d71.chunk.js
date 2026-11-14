export const id = 46;
export const ids = [46];
export const modules = {
  40745: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      joinRoom: () => bR
    });
    var wW = MW(5487),
      CW = MW(3773),
      zR = MW(38367),
      AW = MW(38482);
    async function bR(WW, RW) {
      var MW, bR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const {
        signal: NW
      } = yR, eW = null !== (MW = yR.setTimer) && void 0 !== MW ? MW : (WW, RW) => {
        setTimeout(WW, RW)
      }, BW = () => (0, AW.b)(RW.endpoint, RW.roomName, RW.joinOptions, yR), {
        early: tR
      } = yR, TW = tR ? null !== (bR = await tR.take(NW)) && void 0 !== bR ? bR : await tR.reserveInstead(BW, NW) : await BW();
      (0, wW.j)(NW);
      const gR = (0, AW.c)(RW.endpoint, TW),
        iR = yR.createSocket ? yR.createSocket(gR) : new WebSocket(gR);
      let YW = null,
        JW = null;
      const PW = [];
      let IW = !1;
      const oW = (WW, RW) => {
          var MW;
          if (WW === CW.w.Activated) IW = !0, null === (MW = JW) || void 0 === MW || MW.resolve();
          else if (WW === CW.w.Error) {
            var wW;
            null === (wW = JW) || void 0 === wW || wW.reject(new zR.b(`the room refused the join (code ${RW})`, "roomError", RW))
          } else {
            var AW;
            null === (AW = JW) || void 0 === AW || AW.reject(new zR.b("the room socket closed before the join", "closed", RW))
          }
        },
        lW = WW.onConnection(((WW, RW, MW) => {
          null === YW ? PW.push([WW, RW, MW]) : WW === YW && oW(RW, MW)
        })),
        FW = WW.attachSocket(iR);
      if (null === FW) throw lW(), new zR.b("the core could not take the room socket", "attach");
      YW = FW;
      let fW = !1;
      const QW = () => {
        if (fW) return;
        fW = !0, lW();
        IW && WW.leaveRoom(FW) || WW.sendRaw(FW, zR.i) ? eW((() => {
          WW.closeSocket(FW)
        }), zR.d) : WW.closeSocket(FW)
      };
      try {
        await new Promise(((WW, RW) => {
          const MW = () => {
            RW((0, wW.e)(NW))
          };
          null === NW || void 0 === NW || NW.addEventListener("abort", MW, {
            once: !0
          }), JW = {
            resolve: () => {
              null === NW || void 0 === NW || NW.removeEventListener("abort", MW), WW()
            },
            reject: WW => {
              null === NW || void 0 === NW || NW.removeEventListener("abort", MW), RW(WW)
            }
          };
          for (const [wW, CW, zR] of PW.splice(0)) wW === YW && oW(CW, zR)
        }))
      } catch (rR) {
        throw QW(), rR
      }
      return {
        conn: FW,
        seat: TW,
        Cw: QW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
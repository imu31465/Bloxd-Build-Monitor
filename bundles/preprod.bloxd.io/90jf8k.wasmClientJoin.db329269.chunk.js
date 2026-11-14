export const id = 46;
export const ids = [46];
export const modules = {
  41165: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      joinRoom: () => bW
    });
    var CF = SF(5458),
      AF = SF(3786),
      uF = SF(38733),
      hF = SF(38869);
    async function bW(FF, WF) {
      var SF, bW;
      let dF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const {
        signal: PF
      } = dF, RF = null !== (SF = dF.setTimer) && void 0 !== SF ? SF : (FF, WF) => {
        setTimeout(FF, WF)
      }, iW = () => (0, hF.e)(WF.endpoint, WF.roomName, WF.joinOptions, dF), {
        early: eF
      } = dF, EF = eF ? null !== (bW = await eF.take(PF)) && void 0 !== bW ? bW : await eF.reserveInstead(iW, PF) : await iW();
      (0, CF.h)(PF);
      const QF = (0, hF.g)(WF.endpoint, EF),
        rW = dF.createSocket ? dF.createSocket(QF) : new WebSocket(QF);
      let gW = null,
        tW = null;
      const TF = [];
      let aW = !1;
      const kW = (FF, WF) => {
          var SF;
          if (FF === AF.F.Activated) aW = !0, null === (SF = tW) || void 0 === SF || SF.resolve();
          else if (FF === AF.F.Error) {
            var CF;
            null === (CF = tW) || void 0 === CF || CF.reject(new uF.b(`the room refused the join (code ${WF})`, "roomError", WF))
          } else {
            var hF;
            null === (hF = tW) || void 0 === hF || hF.reject(new uF.b("the room socket closed before the join", "closed", WF))
          }
        },
        qW = FF.onConnection(((FF, WF, SF) => {
          null === gW ? TF.push([FF, WF, SF]) : FF === gW && kW(WF, SF)
        })),
        VF = FF.attachSocket(rW);
      if (null === VF) throw qW(), new uF.b("the core could not take the room socket", "attach");
      gW = VF;
      let NF = !1;
      const DF = () => {
        if (NF) return;
        NF = !0, qW();
        aW && FF.leaveRoom(VF) || FF.sendRaw(VF, uF.h) ? RF((() => {
          FF.closeSocket(VF)
        }), uF.e) : FF.closeSocket(VF)
      };
      try {
        await new Promise(((FF, WF) => {
          const SF = () => {
            WF((0, CF.b)(PF))
          };
          null === PF || void 0 === PF || PF.addEventListener("abort", SF, {
            once: !0
          }), tW = {
            resolve: () => {
              null === PF || void 0 === PF || PF.removeEventListener("abort", SF), FF()
            },
            reject: FF => {
              null === PF || void 0 === PF || PF.removeEventListener("abort", SF), WF(FF)
            }
          };
          for (const [CF, AF, uF] of TF.splice(0)) CF === gW && kW(AF, uF)
        }))
      } catch (LF) {
        throw DF(), LF
      }
      return {
        conn: VF,
        seat: EF,
        AC: DF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
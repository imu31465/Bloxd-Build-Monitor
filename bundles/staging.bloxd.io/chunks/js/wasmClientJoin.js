export const id = 50;
export const ids = [50];
export const modules = {
  41964: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      joinRoom: () => jJ,
      leaveHeldSeat: () => GJ,
      resumeRoom: () => hJ
    });
    var FJ = ZJ(3122),
      UJ = ZJ(38019),
      eJ = ZJ(2538),
      XJ = ZJ(4189),
      AJ = ZJ(39602),
      qJ = ZJ(39697);
    async function jJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await YJ(JJ, cJ, ZJ)
      } catch (UJ) {
        var FJ;
        const eJ = await (null === (FJ = cJ.optionsAfterRefusal) || void 0 === FJ ? void 0 : FJ.call(cJ, UJ));
        if (!eJ) throw UJ;
        return YJ(JJ, {
          ...cJ,
          joinOptions: eJ
        }, {
          ...ZJ,
          early: void 0
        })
      }
    }
    async function YJ(JJ, cJ, ZJ) {
      var UJ;
      const {
        signal: eJ
      } = ZJ, XJ = () => (0, qJ.j)(cJ.endpoint, cJ.roomName, cJ.joinOptions, ZJ), {
        early: AJ
      } = ZJ, jJ = AJ ? null !== (UJ = await AJ.take(eJ)) && void 0 !== UJ ? UJ : await AJ.reserveInstead(XJ, eJ) : await XJ();
      return (0, FJ.l)(eJ), nJ(JJ, cJ.endpoint, jJ, ZJ, !1)
    }
    async function hJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const XJ = await (0, qJ.f)(cJ, ZJ, UJ, eJ);
      return (0, FJ.l)(eJ.signal), nJ(JJ, cJ, XJ, eJ, !0)
    }

    function DJ(JJ, cJ, ZJ) {
      const FJ = (0, qJ.m)(JJ, cJ);
      return ZJ.createSocket ? ZJ.createSocket(FJ) : new WebSocket(FJ)
    }

    function sJ(JJ, cJ, ZJ) {
      var FJ;
      let UJ = !1;
      return (null !== (FJ = JJ.setTimer) && void 0 !== FJ ? FJ : (JJ, cJ) => {
        setTimeout(JJ, cJ)
      })((() => {
        UJ || cJ()
      }), ZJ), () => {
        UJ = !0
      }
    }
    async function nJ(JJ, cJ, ZJ, qJ, jJ) {
      const {
        signal: YJ
      } = qJ, hJ = DJ(cJ, ZJ, qJ);
      let nJ = null,
        GJ = null;
      const fJ = [];
      let xJ = !1,
        rJ = !1;
      const vJ = JJ => {
        var cJ;
        rJ = !0, null === (cJ = GJ) || void 0 === cJ || cJ.reject(new AJ.b("the room socket closed before the resume", "closed", JJ.code))
      };
      jJ && hJ.addEventListener("close", vJ);
      const mJ = (JJ, cJ) => {
          var ZJ;
          if (JJ === (jJ ? XJ.G.Resumed : XJ.G.Activated)) xJ = !0, null === (ZJ = GJ) || void 0 === ZJ || ZJ.resolve();
          else if (!jJ || JJ !== XJ.G.ResumeRefused && JJ !== XJ.G.Activated)
            if (JJ === XJ.G.Error) {
              var FJ;
              null === (FJ = GJ) || void 0 === FJ || FJ.reject(new AJ.b(`the room refused the join (code ${cJ})`, "roomError", cJ))
            } else {
              var UJ;
              null === (UJ = GJ) || void 0 === UJ || UJ.reject(new AJ.b("the room socket closed before the join", "closed", cJ))
            }
          else {
            var eJ;
            null === (eJ = GJ) || void 0 === eJ || eJ.reject(new AJ.l("the core refused the resume: it held no game"))
          }
        },
        QJ = JJ.onConnection(((JJ, cJ, ZJ) => {
          null === nJ ? fJ.push([JJ, cJ, ZJ]) : JJ === nJ && mJ(cJ, ZJ)
        })),
        EJ = JJ.attachSocket(hJ);
      if (null === EJ) throw QJ(), new AJ.b("the core could not take the room socket", "attach");
      var VJ;
      (nJ = EJ, jJ) && (null === (VJ = qJ.onAttached) || void 0 === VJ || VJ.call(qJ));
      const KJ = jJ ? null : new eJ.d(UJ.d, (() => {
        var cJ, ZJ;
        null === (cJ = JJ.flushNet) || void 0 === cJ || cJ.call(JJ), null === (ZJ = GJ) || void 0 === ZJ || ZJ.reject(new UJ.h)
      }));
      let yJ = !1;
      const SJ = () => {
        if (yJ) return;
        if (yJ = !0, QJ(), jJ && (hJ.removeEventListener("close", vJ), !xJ && !(null !== YJ && void 0 !== YJ && YJ.aborted && (0, FJ.e)(YJ) instanceof AJ.m))) return void(rJ || JJ.closeSocket(EJ));
        xJ && JJ.leaveRoom(EJ) || JJ.sendRaw(EJ, AJ.g) ? sJ(qJ, (() => {
          JJ.closeSocket(EJ)
        }), AJ.d) : JJ.closeSocket(EJ)
      };
      try {
        await new Promise(((cJ, ZJ) => {
          const UJ = () => {
            var cJ;
            jJ && (null === (cJ = JJ.flushNet) || void 0 === cJ || cJ.call(JJ));
            ZJ((0, FJ.e)(YJ))
          };
          null === YJ || void 0 === YJ || YJ.addEventListener("abort", UJ, {
            once: !0
          }), GJ = {
            resolve: () => {
              null === YJ || void 0 === YJ || YJ.removeEventListener("abort", UJ), cJ()
            },
            reject: JJ => {
              null === YJ || void 0 === YJ || YJ.removeEventListener("abort", UJ), ZJ(JJ)
            }
          };
          for (const [JJ, FJ, eJ] of fJ.splice(0)) JJ === nJ && mJ(FJ, eJ)
        }))
      } catch (IJ) {
        throw SJ(), IJ
      } finally {
        null === KJ || void 0 === KJ || KJ.stop()
      }
      jJ && hJ.removeEventListener("close", vJ);
      return {
        conn: EJ,
        seat: ZJ,
        cn: SJ,
        detach: () => {
          yJ = !0, QJ()
        }
      }
    }
    async function GJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const UJ = DJ(JJ, await (0, qJ.f)(JJ, cJ, ZJ, FJ), FJ);
        UJ.binaryType = "arraybuffer", await new Promise((JJ => {
          const cJ = sJ(FJ, (() => {
            UJ.close(), JJ()
          }), AJ.d);
          UJ.addEventListener("open", (() => {
            UJ.send(AJ.g)
          })), UJ.addEventListener("close", (() => {
            cJ(), JJ()
          }))
        }))
      } catch (UJ) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", UJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
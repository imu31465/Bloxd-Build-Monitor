export const id = 50;
export const ids = [50];
export const modules = {
  42021: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      joinRoom: () => gB,
      leaveHeldSeat: () => uB,
      resumeRoom: () => kB
    });
    var VB = dB(3138),
      yB = dB(38015),
      pB = dB(2512),
      lB = dB(4186),
      JB = dB(39576),
      YB = dB(39669);
    async function gB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await oB(BB, TB, dB)
      } catch (yB) {
        var VB;
        const pB = await (null === (VB = TB.optionsAfterRefusal) || void 0 === VB ? void 0 : VB.call(TB, yB));
        if (!pB) throw yB;
        return oB(BB, {
          ...TB,
          joinOptions: pB
        }, {
          ...dB,
          early: void 0
        })
      }
    }
    async function oB(BB, TB, dB) {
      var yB;
      const {
        signal: pB
      } = dB, lB = () => (0, YB.f)(TB.endpoint, TB.roomName, TB.joinOptions, dB), {
        early: JB
      } = dB, gB = JB ? null !== (yB = await JB.take(pB)) && void 0 !== yB ? yB : await JB.reserveInstead(lB, pB) : await lB();
      return (0, VB.k)(pB), DB(BB, TB.endpoint, gB, dB, !1)
    }
    async function kB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const lB = await (0, YB.d)(TB, dB, yB, pB);
      return (0, VB.k)(pB.signal), DB(BB, TB, lB, pB, !0)
    }

    function LB(BB, TB, dB) {
      const VB = (0, YB.h)(BB, TB);
      return dB.createSocket ? dB.createSocket(VB) : new WebSocket(VB)
    }

    function OB(BB, TB, dB) {
      var VB;
      let yB = !1;
      return (null !== (VB = BB.setTimer) && void 0 !== VB ? VB : (BB, TB) => {
        setTimeout(BB, TB)
      })((() => {
        yB || TB()
      }), dB), () => {
        yB = !0
      }
    }
    async function DB(BB, TB, dB, YB, gB) {
      const {
        signal: oB
      } = YB, kB = LB(TB, dB, YB);
      let DB = null,
        uB = null;
      const HB = [];
      let EB = !1,
        vB = !1;
      const mB = BB => {
        var TB;
        vB = !0, null === (TB = uB) || void 0 === TB || TB.reject(new JB.d("the room socket closed before the resume", "closed", BB.code))
      };
      gB && kB.addEventListener("close", mB);
      const iB = (BB, TB) => {
          var dB;
          if (BB === (gB ? lB.v.Resumed : lB.v.Activated)) EB = !0, null === (dB = uB) || void 0 === dB || dB.resolve();
          else if (!gB || BB !== lB.v.ResumeRefused && BB !== lB.v.Activated)
            if (BB === lB.v.Error) {
              var VB;
              null === (VB = uB) || void 0 === VB || VB.reject(new JB.d(`the room refused the join (code ${TB})`, "roomError", TB))
            } else {
              var yB;
              null === (yB = uB) || void 0 === yB || yB.reject(new JB.d("the room socket closed before the join", "closed", TB))
            }
          else {
            var pB;
            null === (pB = uB) || void 0 === pB || pB.reject(new JB.s("the core refused the resume: it held no game"))
          }
        },
        NB = BB.onConnection(((BB, TB, dB) => {
          null === DB ? HB.push([BB, TB, dB]) : BB === DB && iB(TB, dB)
        })),
        tB = BB.attachSocket(kB);
      if (null === tB) throw NB(), new JB.d("the core could not take the room socket", "attach");
      var fB;
      (DB = tB, gB) && (null === (fB = YB.onAttached) || void 0 === fB || fB.call(YB));
      const sB = gB ? null : new pB.c(yB.e, (() => {
        var TB, dB;
        null === (TB = BB.flushNet) || void 0 === TB || TB.call(BB), null === (dB = uB) || void 0 === dB || dB.reject(new yB.i)
      }));
      let MB = !1;
      const zB = () => {
        if (MB) return;
        if (MB = !0, NB(), gB && (kB.removeEventListener("close", mB), !EB && !(null !== oB && void 0 !== oB && oB.aborted && (0, VB.c)(oB) instanceof JB.w))) return void(vB || BB.closeSocket(tB));
        EB && BB.leaveRoom(tB) || BB.sendRaw(tB, JB.m) ? OB(YB, (() => {
          BB.closeSocket(tB)
        }), JB.f) : BB.closeSocket(tB)
      };
      try {
        await new Promise(((TB, dB) => {
          const yB = () => {
            var TB;
            gB && (null === (TB = BB.flushNet) || void 0 === TB || TB.call(BB));
            dB((0, VB.c)(oB))
          };
          null === oB || void 0 === oB || oB.addEventListener("abort", yB, {
            once: !0
          }), uB = {
            resolve: () => {
              null === oB || void 0 === oB || oB.removeEventListener("abort", yB), TB()
            },
            reject: BB => {
              null === oB || void 0 === oB || oB.removeEventListener("abort", yB), dB(BB)
            }
          };
          for (const [BB, VB, pB] of HB.splice(0)) BB === DB && iB(VB, pB)
        }))
      } catch (wB) {
        throw zB(), wB
      } finally {
        null === sB || void 0 === sB || sB.stop()
      }
      gB && kB.removeEventListener("close", mB);
      return {
        conn: tB,
        seat: dB,
        lD: zB,
        detach: () => {
          MB = !0, NB()
        }
      }
    }
    async function uB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const yB = LB(BB, await (0, YB.d)(BB, TB, dB, VB), VB);
        yB.binaryType = "arraybuffer", await new Promise((BB => {
          const TB = OB(VB, (() => {
            yB.close(), BB()
          }), JB.f);
          yB.addEventListener("open", (() => {
            yB.send(JB.m)
          })), yB.addEventListener("close", (() => {
            TB(), BB()
          }))
        }))
      } catch (yB) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", yB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
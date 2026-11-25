export const id = 296;
export const ids = [296];
export const modules = {
  41510: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CharacterPreview: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(2821),
      Dt = Vt(1325),
      mt = Vt(2652),
      dt = Vt(34412),
      jt = Vt(3702),
      Ht = Vt(1188);
    const Xt = .6 * Math.PI,
      Qt = (0, Ot.memo)((0, Ot.forwardRef)((function(tt, et) {
        let {
          onReady: Vt,
          onDrawn: Qt,
          owner: lt = "other",
          framing: Et = "player",
          forcedCosmetics: ft,
          rd: wt,
          emotePlaySeq: yt,
          turntableFromYaw: Nt = null
        } = tt;
        const Mt = (0, Ot.useRef)(null),
          {
            width: bt,
            height: Jt
          } = (0, qt.d)(Mt),
          Ct = (0, Ot.useRef)(null),
          ut = (0, Ot.useRef)({}),
          Kt = (0, Ot.useRef)({}),
          [ht, vt] = (0, Ot.useState)(!1),
          Wt = (0, Ot.useRef)(Vt);
        Wt.current = Vt;
        const St = (0, Ot.useRef)(Qt);
        St.current = Qt;
        const ct = (0, Ot.useRef)(null),
          Rt = (0, Ot.useRef)(!1),
          It = (0, Ot.useRef)(!1),
          Pt = (0, Ot.useCallback)((() => {
            const tt = Ct.current;
            if (!tt || !St.current || Rt.current || !It.current) return;
            const et = {};
            ct.current = et, queueMicrotask((() => {
              if (ct.current !== et) return;
              const Vt = Promise.all(Dt.A.map((et => tt.untilDrawn(et)))).catch((tt => {
                  console.error("Failed to draw the character preview", tt)
                })),
                Ot = new Promise((tt => {
                  setTimeout(tt, 1e4)
                }));
              Promise.race([Vt, Ot]).then((() => {
                var Vt;
                Ct.current !== tt || ct.current !== et || Rt.current || (Rt.current = !0, null === (Vt = St.current) || void 0 === Vt || Vt.call(St))
              }))
            }))
          }), []);
        return (0, Ot.useImperativeHandle)(et, (() => {
          const tt = (tt, et) => {
            var Vt;
            (ut.current[tt] = et, null !== ft && void 0 !== ft && ft[tt]) || (null === (Vt = Ct.current) || void 0 === Vt || Vt.setCosmetic(tt, et), Pt())
          };
          return {
            updateCosmetic: tt,
            setAllCosmetics(et) {
              for (const Ot of Dt.A) {
                var Vt;
                tt(Ot, null !== (Vt = et[Ot]) && void 0 !== Vt ? Vt : (0, mt.d)(Ot))
              }
            },
            isReady() {
              var tt, et;
              return null !== (tt = null === (et = Ct.current) || void 0 === et ? void 0 : et.isReady()) && void 0 !== tt && tt
            },
            resetCamera() {
              var tt;
              null === (tt = Ct.current) || void 0 === tt || tt.resetCamera()
            },
            setOrbit(tt) {
              var et;
              null === (et = Ct.current) || void 0 === et || et.setOrbit(tt)
            },
            async ensureReadyForCapture(tt) {
              var et;
              await (null === (et = Ct.current) || void 0 === et ? void 0 : et.untilDrawn(tt))
            },
            getDevTools() {
              var tt;
              return null !== (tt = Ct.current) && void 0 !== tt && tt.isReady() ? Ct.current.dev : null
            }
          }
        }), [ft, Pt]), (0, Ot.useEffect)((() => {
          const tt = jt.c.register(lt),
            et = dt.l.openCharacter(Mt.current, Et);
          Ct.current = et;
          let Vt = !0;
          return et.ready.then((() => {
            Vt && (vt(!0), Wt.current())
          })).catch((tt => {
            console.error("Failed to set up the character preview", tt)
          })), () => {
            Vt = !1, tt(), et.resetCamera(), et.close(), Ct.current = null
          }
        }), []), (0, Ot.useEffect)((() => {
          bt <= 0 || Jt <= 0 || Ct.current.resize(bt, Jt)
        }), [bt, Jt]), (0, Ot.useEffect)((() => {
          if (!ht) return;
          const tt = Kt.current;
          for (const et of Dt.A) {
            const Vt = null === ft || void 0 === ft ? void 0 : ft[et],
              Ot = tt[et];
            Vt && Vt !== Ot ? Ct.current.setCosmetic(et, Vt) : !Vt && Ot && ut.current[et] && Ct.current.setCosmetic(et, ut.current[et])
          }
          Kt.current = {
            ...ft
          }, It.current = !0, Pt()
        }), [ft, ht, Pt]), (0, Ot.useEffect)((() => {
          ht && Ct.current.playEmote(null !== wt && void 0 !== wt ? wt : null)
        }), [wt, yt, ht]), (0, Ot.useEffect)((() => {
          if (!ht || null === Nt) return;
          const tt = Ct.current,
            {
              pitch: et,
              radius: Vt
            } = dt.e[Et];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return tt.setOrbit({
            yaw: Nt + Xt,
            pitch: et,
            radius: Vt
          }), () => {
            tt.resetCamera()
          };
          const Ot = performance.now();
          let qt = 0;
          const Dt = mt => {
            tt.setOrbit({
              yaw: Nt + (mt - Ot) / 6e3 * 2 * Math.PI,
              pitch: et,
              radius: Vt
            }), qt = requestAnimationFrame(Dt)
          };
          return qt = requestAnimationFrame(Dt), () => {
            cancelAnimationFrame(qt), tt.resetCamera()
          }
        }), [ht, Nt]), (0, Ht.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Mt
        })
      })))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
export const id = 282;
export const ids = [282];
export const modules = {
  40391: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CharacterPreview: () => Lb
    });
    var Ab = Ub(52),
      Mb = Ub(2531),
      Tb = Ub(1189),
      Eb = Ub(8383),
      Yb = Ub(8945),
      Bb = Ub(3306),
      eb = Ub(1023);
    const vb = .6 * Math.PI,
      Lb = (0, Ab.memo)((0, Ab.forwardRef)((function(bb, ab) {
        let {
          onReady: Ub,
          onDrawn: Lb,
          owner: Pb = "other",
          framing: Xb = "player",
          forcedCosmetics: jb,
          UY: Rb,
          emotePlaySeq: kb,
          turntableFromYaw: yb = null
        } = bb;
        const Zb = (0, Ab.useRef)(null),
          {
            width: Db,
            height: zb
          } = (0, Mb.e)(Zb),
          xb = (0, Ab.useRef)(null),
          ib = (0, Ab.useRef)({}),
          fb = (0, Ab.useRef)({}),
          [mb, pb] = (0, Ab.useState)(!1),
          Nb = (0, Ab.useRef)(Ub);
        Nb.current = Ub;
        const Wb = (0, Ab.useRef)(Lb);
        Wb.current = Lb;
        const Hb = (0, Ab.useRef)(null),
          Ib = (0, Ab.useRef)(!1),
          db = (0, Ab.useRef)(!1),
          Fb = (0, Ab.useCallback)((() => {
            const bb = xb.current;
            if (!bb || !Wb.current || Ib.current || !db.current) return;
            const ab = {};
            Hb.current = ab, queueMicrotask((() => {
              if (Hb.current !== ab) return;
              const Ub = Promise.all(Tb.s.map((ab => bb.untilDrawn(ab)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                Ab = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([Ub, Ab]).then((() => {
                var Ub;
                xb.current !== bb || Hb.current !== ab || Ib.current || (Ib.current = !0, null === (Ub = Wb.current) || void 0 === Ub || Ub.call(Wb))
              }))
            }))
          }), []);
        return (0, Ab.useImperativeHandle)(ab, (() => {
          const bb = (bb, ab) => {
            var Ub;
            (ib.current[bb] = ab, null !== jb && void 0 !== jb && jb[bb]) || (null === (Ub = xb.current) || void 0 === Ub || Ub.setCosmetic(bb, ab), Fb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(ab) {
              for (const Ab of Tb.s) {
                var Ub;
                bb(Ab, null !== (Ub = ab[Ab]) && void 0 !== Ub ? Ub : (0, Eb.e)(Ab))
              }
            },
            isReady() {
              var bb, ab;
              return null !== (bb = null === (ab = xb.current) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = xb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var ab;
              null === (ab = xb.current) || void 0 === ab || ab.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var ab;
              await (null === (ab = xb.current) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = xb.current) && void 0 !== bb && bb.isReady() ? xb.current.dev : null
            }
          }
        }), [jb, Fb]), (0, Ab.useEffect)((() => {
          const bb = Bb.b.register(Pb),
            ab = Yb.l.openCharacter(Zb.current, Xb);
          xb.current = ab;
          let Ub = !0;
          return ab.ready.then((() => {
            Ub && (pb(!0), Nb.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            Ub = !1, bb(), ab.resetCamera(), ab.close(), xb.current = null
          }
        }), []), (0, Ab.useEffect)((() => {
          Db <= 0 || zb <= 0 || xb.current.resize(Db, zb)
        }), [Db, zb]), (0, Ab.useEffect)((() => {
          if (!mb) return;
          const bb = fb.current;
          for (const ab of Tb.s) {
            const Ub = null === jb || void 0 === jb ? void 0 : jb[ab],
              Ab = bb[ab];
            Ub && Ub !== Ab ? xb.current.setCosmetic(ab, Ub) : !Ub && Ab && ib.current[ab] && xb.current.setCosmetic(ab, ib.current[ab])
          }
          fb.current = {
            ...jb
          }, db.current = !0, Fb()
        }), [jb, mb, Fb]), (0, Ab.useEffect)((() => {
          mb && xb.current.playEmote(null !== Rb && void 0 !== Rb ? Rb : null)
        }), [Rb, kb, mb]), (0, Ab.useEffect)((() => {
          if (!mb || null === yb) return;
          const bb = xb.current,
            {
              pitch: ab,
              radius: Ub
            } = Yb.e[Xb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: yb + vb,
            pitch: ab,
            radius: Ub
          }), () => {
            bb.resetCamera()
          };
          const Ab = performance.now();
          let Mb = 0;
          const Tb = Eb => {
            bb.setOrbit({
              yaw: yb + (Eb - Ab) / 6e3 * 2 * Math.PI,
              pitch: ab,
              radius: Ub
            }), Mb = requestAnimationFrame(Tb)
          };
          return Mb = requestAnimationFrame(Tb), () => {
            cancelAnimationFrame(Mb), bb.resetCamera()
          }
        }), [mb, yb]), (0, eb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Zb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
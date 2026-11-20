export const id = 282;
export const ids = [282];
export const modules = {
  40713: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CharacterPreview: () => Mb
    });
    var kb = sb(64),
      Wb = sb(2598),
      ab = sb(1253),
      Tb = sb(8431),
      Ub = sb(8956),
      Ib = sb(3422),
      Hb = sb(1087);
    const fb = .6 * Math.PI,
      Mb = (0, kb.memo)((0, kb.forwardRef)((function(bb, cb) {
        let {
          onReady: sb,
          onDrawn: Mb,
          owner: Xb = "other",
          framing: nb = "player",
          forcedCosmetics: mb,
          yU: lb,
          emotePlaySeq: Qb,
          turntableFromYaw: eb = null
        } = bb;
        const Cb = (0, kb.useRef)(null),
          {
            width: Nb,
            height: Vb
          } = (0, Wb.b)(Cb),
          Lb = (0, kb.useRef)(null),
          ub = (0, kb.useRef)({}),
          Yb = (0, kb.useRef)({}),
          [hb, Jb] = (0, kb.useState)(!1),
          gb = (0, kb.useRef)(sb);
        gb.current = sb;
        const Bb = (0, kb.useRef)(Mb);
        Bb.current = Mb;
        const tb = (0, kb.useRef)(null),
          yb = (0, kb.useRef)(!1),
          Pb = (0, kb.useRef)(!1),
          Db = (0, kb.useCallback)((() => {
            const bb = Lb.current;
            if (!bb || !Bb.current || yb.current || !Pb.current) return;
            const cb = {};
            tb.current = cb, queueMicrotask((() => {
              if (tb.current !== cb) return;
              const sb = Promise.all(ab.p.map((cb => bb.untilDrawn(cb)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                kb = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([sb, kb]).then((() => {
                var sb;
                Lb.current !== bb || tb.current !== cb || yb.current || (yb.current = !0, null === (sb = Bb.current) || void 0 === sb || sb.call(Bb))
              }))
            }))
          }), []);
        return (0, kb.useImperativeHandle)(cb, (() => {
          const bb = (bb, cb) => {
            var sb;
            (ub.current[bb] = cb, null !== mb && void 0 !== mb && mb[bb]) || (null === (sb = Lb.current) || void 0 === sb || sb.setCosmetic(bb, cb), Db())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(cb) {
              for (const kb of ab.p) {
                var sb;
                bb(kb, null !== (sb = cb[kb]) && void 0 !== sb ? sb : (0, Tb.d)(kb))
              }
            },
            isReady() {
              var bb, cb;
              return null !== (bb = null === (cb = Lb.current) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = Lb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var cb;
              null === (cb = Lb.current) || void 0 === cb || cb.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var cb;
              await (null === (cb = Lb.current) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = Lb.current) && void 0 !== bb && bb.isReady() ? Lb.current.dev : null
            }
          }
        }), [mb, Db]), (0, kb.useEffect)((() => {
          const bb = Ib.b.register(Xb),
            cb = Ub.h.openCharacter(Cb.current, nb);
          Lb.current = cb;
          let sb = !0;
          return cb.ready.then((() => {
            sb && (Jb(!0), gb.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            sb = !1, bb(), cb.resetCamera(), cb.close(), Lb.current = null
          }
        }), []), (0, kb.useEffect)((() => {
          Nb <= 0 || Vb <= 0 || Lb.current.resize(Nb, Vb)
        }), [Nb, Vb]), (0, kb.useEffect)((() => {
          if (!hb) return;
          const bb = Yb.current;
          for (const cb of ab.p) {
            const sb = null === mb || void 0 === mb ? void 0 : mb[cb],
              kb = bb[cb];
            sb && sb !== kb ? Lb.current.setCosmetic(cb, sb) : !sb && kb && ub.current[cb] && Lb.current.setCosmetic(cb, ub.current[cb])
          }
          Yb.current = {
            ...mb
          }, Pb.current = !0, Db()
        }), [mb, hb, Db]), (0, kb.useEffect)((() => {
          hb && Lb.current.playEmote(null !== lb && void 0 !== lb ? lb : null)
        }), [lb, Qb, hb]), (0, kb.useEffect)((() => {
          if (!hb || null === eb) return;
          const bb = Lb.current,
            {
              pitch: cb,
              radius: sb
            } = Ub.c[nb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: eb + fb,
            pitch: cb,
            radius: sb
          }), () => {
            bb.resetCamera()
          };
          const kb = performance.now();
          let Wb = 0;
          const ab = Tb => {
            bb.setOrbit({
              yaw: eb + (Tb - kb) / 6e3 * 2 * Math.PI,
              pitch: cb,
              radius: sb
            }), Wb = requestAnimationFrame(ab)
          };
          return Wb = requestAnimationFrame(ab), () => {
            cancelAnimationFrame(Wb), bb.resetCamera()
          }
        }), [hb, eb]), (0, Hb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Cb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
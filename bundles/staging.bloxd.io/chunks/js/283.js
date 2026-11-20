export const id = 283;
export const ids = [283];
export const modules = {
  40739: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CharacterPreview: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(2548),
      Gb = hb(1133),
      Ub = hb(8549),
      Lb = hb(9122),
      Yb = hb(3417),
      Sb = hb(1007);
    const ab = .6 * Math.PI,
      Hb = (0, Bb.memo)((0, Bb.forwardRef)((function(bb, ub) {
        let {
          onReady: hb,
          onDrawn: Hb,
          owner: wb = "other",
          framing: Zb = "player",
          forcedCosmetics: Xb,
          FS: pb,
          emotePlaySeq: ob,
          turntableFromYaw: Ab = null
        } = bb;
        const lb = (0, Bb.useRef)(null),
          {
            width: Kb,
            height: Wb
          } = (0, Ob.b)(lb),
          Cb = (0, Bb.useRef)(null),
          db = (0, Bb.useRef)({}),
          rb = (0, Bb.useRef)({}),
          [jb, nb] = (0, Bb.useState)(!1),
          Db = (0, Bb.useRef)(hb);
        Db.current = hb;
        const xb = (0, Bb.useRef)(Hb);
        xb.current = Hb;
        const zb = (0, Bb.useRef)(null),
          gb = (0, Bb.useRef)(!1),
          ib = (0, Bb.useRef)(!1),
          vb = (0, Bb.useCallback)((() => {
            const bb = Cb.current;
            if (!bb || !xb.current || gb.current || !ib.current) return;
            const ub = {};
            zb.current = ub, queueMicrotask((() => {
              if (zb.current !== ub) return;
              const hb = Promise.all(Gb.y.map((ub => bb.untilDrawn(ub)))).catch((bb => {
                  console.error("Failed to draw the character preview", bb)
                })),
                Bb = new Promise((bb => {
                  setTimeout(bb, 1e4)
                }));
              Promise.race([hb, Bb]).then((() => {
                var hb;
                Cb.current !== bb || zb.current !== ub || gb.current || (gb.current = !0, null === (hb = xb.current) || void 0 === hb || hb.call(xb))
              }))
            }))
          }), []);
        return (0, Bb.useImperativeHandle)(ub, (() => {
          const bb = (bb, ub) => {
            var hb;
            (db.current[bb] = ub, null !== Xb && void 0 !== Xb && Xb[bb]) || (null === (hb = Cb.current) || void 0 === hb || hb.setCosmetic(bb, ub), vb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(ub) {
              for (const Bb of Gb.y) {
                var hb;
                bb(Bb, null !== (hb = ub[Bb]) && void 0 !== hb ? hb : (0, Ub.c)(Bb))
              }
            },
            isReady() {
              var bb, ub;
              return null !== (bb = null === (ub = Cb.current) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = Cb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var ub;
              null === (ub = Cb.current) || void 0 === ub || ub.setOrbit(bb)
            },
            async ensureReadyForCapture(bb) {
              var ub;
              await (null === (ub = Cb.current) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = Cb.current) && void 0 !== bb && bb.isReady() ? Cb.current.dev : null
            }
          }
        }), [Xb, vb]), (0, Bb.useEffect)((() => {
          const bb = Yb.c.register(wb),
            ub = Lb.j.openCharacter(lb.current, Zb);
          Cb.current = ub;
          let hb = !0;
          return ub.ready.then((() => {
            hb && (nb(!0), Db.current())
          })).catch((bb => {
            console.error("Failed to set up the character preview", bb)
          })), () => {
            hb = !1, bb(), ub.resetCamera(), ub.close(), Cb.current = null
          }
        }), []), (0, Bb.useEffect)((() => {
          Kb <= 0 || Wb <= 0 || Cb.current.resize(Kb, Wb)
        }), [Kb, Wb]), (0, Bb.useEffect)((() => {
          if (!jb) return;
          const bb = rb.current;
          for (const ub of Gb.y) {
            const hb = null === Xb || void 0 === Xb ? void 0 : Xb[ub],
              Bb = bb[ub];
            hb && hb !== Bb ? Cb.current.setCosmetic(ub, hb) : !hb && Bb && db.current[ub] && Cb.current.setCosmetic(ub, db.current[ub])
          }
          rb.current = {
            ...Xb
          }, ib.current = !0, vb()
        }), [Xb, jb, vb]), (0, Bb.useEffect)((() => {
          jb && Cb.current.playEmote(null !== pb && void 0 !== pb ? pb : null)
        }), [pb, ob, jb]), (0, Bb.useEffect)((() => {
          if (!jb || null === Ab) return;
          const bb = Cb.current,
            {
              pitch: ub,
              radius: hb
            } = Lb.e[Zb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: Ab + ab,
            pitch: ub,
            radius: hb
          }), () => {
            bb.resetCamera()
          };
          const Bb = performance.now();
          let Ob = 0;
          const Gb = Ub => {
            bb.setOrbit({
              yaw: Ab + (Ub - Bb) / 6e3 * 2 * Math.PI,
              pitch: ub,
              radius: hb
            }), Ob = requestAnimationFrame(Gb)
          };
          return Ob = requestAnimationFrame(Gb), () => {
            cancelAnimationFrame(Ob), bb.resetCamera()
          }
        }), [jb, Ab]), (0, Sb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: lb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
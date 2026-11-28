export const id = 611;
export const ids = [611];
export const modules = {
  45153: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CharacterPreview: () => tb
    });
    var eb = Mb(64),
      Hb = Mb(4005),
      pb = Mb(1313),
      Vb = Mb(3724),
      gb = Mb(35366),
      lb = Mb(5003),
      Lb = Mb(1364);
    let Ib = null;
    const Ob = [],
      Ub = .6 * Math.PI,
      tb = (0, eb.memo)((0, eb.forwardRef)((function(bb, wb) {
        let {
          onReady: Mb,
          onDrawn: tb,
          onSetupFailed: Cb,
          owner: Eb = "other",
          framing: Fb = "player",
          forcedCosmetics: Bb,
          Og: sb,
          emotePlaySeq: mb,
          turntableFromYaw: hb = null,
          nametag: zb
        } = bb;
        const Xb = (0, eb.useRef)(null),
          {
            width: xb,
            height: jb
          } = (0, Hb.b)(Xb),
          Kb = (0, eb.useRef)({
            width: xb,
            height: jb
          });
        Kb.current = {
          width: xb,
          height: jb
        };
        const rb = (0, eb.useRef)(null),
          Rb = (0, eb.useRef)({}),
          Db = (0, eb.useRef)({}),
          [cb, Yb] = (0, eb.useState)(!1),
          Zb = (0, eb.useRef)(Mb);
        Zb.current = Mb;
        const fb = (0, eb.useRef)(tb);
        fb.current = tb;
        const Ab = (0, eb.useRef)(Cb);
        Ab.current = Cb;
        const Wb = (0, eb.useRef)(null),
          Jb = (0, eb.useRef)(!1),
          Sb = (0, eb.useRef)(zb);
        Sb.current = zb;
        const Nb = (0, eb.useRef)(!0),
          vb = (0, eb.useRef)(!1),
          Qb = (0, eb.useCallback)((() => {
            const bb = rb.current;
            if (!bb || !fb.current || Jb.current || !vb.current) return;
            const wb = {};
            Wb.current = wb, queueMicrotask((() => {
              if (Wb.current !== wb) return;
              const Mb = Promise.all(pb.u.map((wb => bb.untilDrawn(wb)))).then((() => !0), (bb => (console.error("Failed to draw the character preview", bb), !1))),
                eb = new Promise((bb => {
                  setTimeout((() => {
                    bb(!1)
                  }), 1e4)
                }));
              Promise.race([Mb, eb]).then((Mb => {
                const eb = fb.current;
                rb.current === bb && Wb.current === wb && !Jb.current && eb && (Jb.current = !0, eb(Mb))
              }))
            }))
          }), []);
        return (0, eb.useImperativeHandle)(wb, (() => {
          const bb = (bb, wb) => {
            var Mb;
            (Rb.current[bb] = wb, null !== Bb && void 0 !== Bb && Bb[bb]) || (null === (Mb = rb.current) || void 0 === Mb || Mb.setCosmetic(bb, wb), Qb())
          };
          return {
            updateCosmetic: bb,
            setAllCosmetics(wb) {
              for (const eb of pb.u) {
                var Mb;
                bb(eb, null !== (Mb = wb[eb]) && void 0 !== Mb ? Mb : (0, Vb.b)(eb))
              }
            },
            isReady() {
              var bb, wb;
              return null !== (bb = null === (wb = rb.current) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
            },
            resetCamera() {
              var bb;
              null === (bb = rb.current) || void 0 === bb || bb.resetCamera()
            },
            setOrbit(bb) {
              var wb;
              null === (wb = rb.current) || void 0 === wb || wb.setOrbit(bb)
            },
            turnCamera(bb) {
              var wb;
              const Mb = gb.e[Fb];
              null === (wb = rb.current) || void 0 === wb || wb.setOrbit({
                ...Mb,
                yaw: Mb.yaw + bb
              })
            },
            async ensureReadyForCapture(bb) {
              var wb;
              await (null === (wb = rb.current) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
            },
            getDevTools() {
              var bb;
              return null !== (bb = rb.current) && void 0 !== bb && bb.isReady() ? rb.current.dev : null
            },
            setNametagShown(bb) {
              var wb, Mb;
              Nb.current = bb, null === (wb = rb.current) || void 0 === wb || wb.setNametag(bb && null !== (Mb = Sb.current) && void 0 !== Mb ? Mb : null)
            }
          }
        }), [Bb, Fb, Qb]), (0, eb.useEffect)((() => {
          const bb = lb.e.register(Eb);
          let wb = !0;
          const Mb = bb => {
            const Mb = rb.current,
              eb = gb.i.openCharacter(Xb.current, Fb);
            if (rb.current = eb, Ib = eb, Mb) {
              Mb.close();
              const {
                width: bb,
                height: wb
              } = Kb.current;
              bb > 0 && wb > 0 && eb.resize(bb, wb)
            }
            Db.current = {}, Yb(!1), eb.ready.then((() => {
              if (wb && rb.current === eb)
                if (Yb(!0), bb) {
                  eb.resetCamera();
                  for (const bb of pb.u) {
                    var Mb;
                    eb.setCosmetic(bb, null !== (Mb = Rb.current[bb]) && void 0 !== Mb ? Mb : (0, Vb.b)(bb))
                  }
                } else Zb.current()
            })).catch((bb => {
              var Mb;
              (console.error("Failed to set up the character preview", bb), wb && rb.current === eb) && (null === (Mb = Ab.current) || void 0 === Mb || Mb.call(Ab))
            }))
          };
          Mb(!1);
          const eb = {
            reopen: () => {
              Mb(!0)
            }
          };
          return Ob.push(eb), () => {
            wb = !1, bb();
            const Mb = rb.current;
            Ib === Mb && (Mb.resetCamera(), Ib = null), Mb.close(), rb.current = null;
            const Hb = Ob.indexOf(eb);
            if (Ob.splice(Hb, 1), Hb === Ob.length && Hb > 0) {
              const bb = Ob[Hb - 1];
              queueMicrotask((() => {
                Ob.at(-1) === bb && null === Ib && gb.i.sharesCharacter() && bb.reopen()
              }))
            }
          }
        }), []), (0, eb.useEffect)((() => {
          xb <= 0 || jb <= 0 || rb.current.resize(xb, jb)
        }), [xb, jb]), (0, eb.useEffect)((() => {
          if (!cb) return;
          const bb = Db.current;
          for (const wb of pb.u) {
            const Mb = null === Bb || void 0 === Bb ? void 0 : Bb[wb],
              eb = bb[wb];
            Mb && Mb !== eb ? rb.current.setCosmetic(wb, Mb) : !Mb && eb && Rb.current[wb] && rb.current.setCosmetic(wb, Rb.current[wb])
          }
          Db.current = {
            ...Bb
          }, vb.current = !0, Qb()
        }), [Bb, cb, Qb]), (0, eb.useEffect)((() => {
          cb && rb.current.playEmote(null !== sb && void 0 !== sb ? sb : null)
        }), [sb, mb, cb]), (0, eb.useEffect)((() => {
          cb && Nb.current && rb.current.setNametag(null !== zb && void 0 !== zb ? zb : null)
        }), [zb, cb]), (0, eb.useEffect)((() => {
          if (!cb || null === hb) return;
          const bb = rb.current,
            {
              pitch: wb,
              radius: Mb
            } = gb.e[Fb];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return bb.setOrbit({
            yaw: hb + Ub,
            pitch: wb,
            radius: Mb
          }), () => {
            Ib === bb && bb.resetCamera()
          };
          const eb = performance.now();
          let Hb = 0;
          const pb = Vb => {
            rb.current === bb && (bb.setOrbit({
              yaw: hb + (Vb - eb) / 6e3 * 2 * Math.PI,
              pitch: wb,
              radius: Mb
            }), Hb = requestAnimationFrame(pb))
          };
          return Hb = requestAnimationFrame(pb), () => {
            cancelAnimationFrame(Hb), Ib === bb && bb.resetCamera()
          }
        }), [cb, hb]), (0, Lb.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Xb
        })
      })))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
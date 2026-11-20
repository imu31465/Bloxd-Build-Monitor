export const id = 283;
export const ids = [283];
export const modules = {
  41011: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CharacterPreview: () => Bq
    });
    var Yq = gq(57),
      lq = gq(2660),
      Oq = gq(1226),
      mq = gq(8794),
      xq = gq(9313),
      Aq = gq(3501),
      cq = gq(1070);
    const uq = .6 * Math.PI,
      Bq = (0, Yq.memo)((0, Yq.forwardRef)((function(qq, Eq) {
        let {
          onReady: gq,
          onDrawn: Bq,
          owner: Wq = "other",
          framing: Nq = "player",
          forcedCosmetics: aq,
          Dc: Vq,
          emotePlaySeq: dq,
          turntableFromYaw: jq = null
        } = qq;
        const Hq = (0, Yq.useRef)(null),
          {
            width: oq,
            height: Pq
          } = (0, lq.e)(Hq),
          Qq = (0, Yq.useRef)(null),
          yq = (0, Yq.useRef)({}),
          tq = (0, Yq.useRef)({}),
          [rq, vq] = (0, Yq.useState)(!1),
          hq = (0, Yq.useRef)(gq);
        hq.current = gq;
        const nq = (0, Yq.useRef)(Bq);
        nq.current = Bq;
        const bq = (0, Yq.useRef)(null),
          iq = (0, Yq.useRef)(!1),
          Zq = (0, Yq.useRef)(!1),
          fq = (0, Yq.useCallback)((() => {
            const qq = Qq.current;
            if (!qq || !nq.current || iq.current || !Zq.current) return;
            const Eq = {};
            bq.current = Eq, queueMicrotask((() => {
              if (bq.current !== Eq) return;
              const gq = Promise.all(Oq.w.map((Eq => qq.untilDrawn(Eq)))).catch((qq => {
                  console.error("Failed to draw the character preview", qq)
                })),
                Yq = new Promise((qq => {
                  setTimeout(qq, 1e4)
                }));
              Promise.race([gq, Yq]).then((() => {
                var gq;
                Qq.current !== qq || bq.current !== Eq || iq.current || (iq.current = !0, null === (gq = nq.current) || void 0 === gq || gq.call(nq))
              }))
            }))
          }), []);
        return (0, Yq.useImperativeHandle)(Eq, (() => {
          const qq = (qq, Eq) => {
            var gq;
            (yq.current[qq] = Eq, null !== aq && void 0 !== aq && aq[qq]) || (null === (gq = Qq.current) || void 0 === gq || gq.setCosmetic(qq, Eq), fq())
          };
          return {
            updateCosmetic: qq,
            setAllCosmetics(Eq) {
              for (const Yq of Oq.w) {
                var gq;
                qq(Yq, null !== (gq = Eq[Yq]) && void 0 !== gq ? gq : (0, mq.e)(Yq))
              }
            },
            isReady() {
              var qq, Eq;
              return null !== (qq = null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
            },
            resetCamera() {
              var qq;
              null === (qq = Qq.current) || void 0 === qq || qq.resetCamera()
            },
            setOrbit(qq) {
              var Eq;
              null === (Eq = Qq.current) || void 0 === Eq || Eq.setOrbit(qq)
            },
            async ensureReadyForCapture(qq) {
              var Eq;
              await (null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
            },
            getDevTools() {
              var qq;
              return null !== (qq = Qq.current) && void 0 !== qq && qq.isReady() ? Qq.current.dev : null
            }
          }
        }), [aq, fq]), (0, Yq.useEffect)((() => {
          const qq = Aq.d.register(Wq),
            Eq = xq.i.openCharacter(Hq.current, Nq);
          Qq.current = Eq;
          let gq = !0;
          return Eq.ready.then((() => {
            gq && (vq(!0), hq.current())
          })).catch((qq => {
            console.error("Failed to set up the character preview", qq)
          })), () => {
            gq = !1, qq(), Eq.resetCamera(), Eq.close(), Qq.current = null
          }
        }), []), (0, Yq.useEffect)((() => {
          oq <= 0 || Pq <= 0 || Qq.current.resize(oq, Pq)
        }), [oq, Pq]), (0, Yq.useEffect)((() => {
          if (!rq) return;
          const qq = tq.current;
          for (const Eq of Oq.w) {
            const gq = null === aq || void 0 === aq ? void 0 : aq[Eq],
              Yq = qq[Eq];
            gq && gq !== Yq ? Qq.current.setCosmetic(Eq, gq) : !gq && Yq && yq.current[Eq] && Qq.current.setCosmetic(Eq, yq.current[Eq])
          }
          tq.current = {
            ...aq
          }, Zq.current = !0, fq()
        }), [aq, rq, fq]), (0, Yq.useEffect)((() => {
          rq && Qq.current.playEmote(null !== Vq && void 0 !== Vq ? Vq : null)
        }), [Vq, dq, rq]), (0, Yq.useEffect)((() => {
          if (!rq || null === jq) return;
          const qq = Qq.current,
            {
              pitch: Eq,
              radius: gq
            } = xq.c[Nq];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return qq.setOrbit({
            yaw: jq + uq,
            pitch: Eq,
            radius: gq
          }), () => {
            qq.resetCamera()
          };
          const Yq = performance.now();
          let lq = 0;
          const Oq = mq => {
            qq.setOrbit({
              yaw: jq + (mq - Yq) / 6e3 * 2 * Math.PI,
              pitch: Eq,
              radius: gq
            }), lq = requestAnimationFrame(Oq)
          };
          return lq = requestAnimationFrame(Oq), () => {
            cancelAnimationFrame(lq), qq.resetCamera()
          }
        }), [rq, jq]), (0, cq.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Hq
        })
      })))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
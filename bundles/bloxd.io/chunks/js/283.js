export const id = 283;
export const ids = [283];
export const modules = {
  40672: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CharacterPreview: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(2657),
      oQ = wQ(1254),
      DQ = wQ(8582),
      kQ = wQ(9137),
      vQ = wQ(3511),
      mQ = wQ(1107);
    const uQ = .6 * Math.PI,
      HQ = (0, LQ.memo)((0, LQ.forwardRef)((function(QQ, FQ) {
        let {
          onReady: wQ,
          onDrawn: HQ,
          owner: bQ = "other",
          framing: YQ = "player",
          forcedCosmetics: xQ,
          ou: AQ,
          emotePlaySeq: tQ,
          turntableFromYaw: eQ = null
        } = QQ;
        const MQ = (0, LQ.useRef)(null),
          {
            width: GQ,
            height: pQ
          } = (0, qQ.c)(MQ),
          cQ = (0, LQ.useRef)(null),
          CQ = (0, LQ.useRef)({}),
          SQ = (0, LQ.useRef)({}),
          [iQ, WQ] = (0, LQ.useState)(!1),
          RQ = (0, LQ.useRef)(wQ);
        RQ.current = wQ;
        const OQ = (0, LQ.useRef)(HQ);
        OQ.current = HQ;
        const sQ = (0, LQ.useRef)(null),
          rQ = (0, LQ.useRef)(!1),
          IQ = (0, LQ.useRef)(!1),
          UQ = (0, LQ.useCallback)((() => {
            const QQ = cQ.current;
            if (!QQ || !OQ.current || rQ.current || !IQ.current) return;
            const FQ = {};
            sQ.current = FQ, queueMicrotask((() => {
              if (sQ.current !== FQ) return;
              const wQ = Promise.all(oQ.w.map((FQ => QQ.untilDrawn(FQ)))).catch((QQ => {
                  console.error("Failed to draw the character preview", QQ)
                })),
                LQ = new Promise((QQ => {
                  setTimeout(QQ, 1e4)
                }));
              Promise.race([wQ, LQ]).then((() => {
                var wQ;
                cQ.current !== QQ || sQ.current !== FQ || rQ.current || (rQ.current = !0, null === (wQ = OQ.current) || void 0 === wQ || wQ.call(OQ))
              }))
            }))
          }), []);
        return (0, LQ.useImperativeHandle)(FQ, (() => {
          const QQ = (QQ, FQ) => {
            var wQ;
            (CQ.current[QQ] = FQ, null !== xQ && void 0 !== xQ && xQ[QQ]) || (null === (wQ = cQ.current) || void 0 === wQ || wQ.setCosmetic(QQ, FQ), UQ())
          };
          return {
            updateCosmetic: QQ,
            setAllCosmetics(FQ) {
              for (const LQ of oQ.w) {
                var wQ;
                QQ(LQ, null !== (wQ = FQ[LQ]) && void 0 !== wQ ? wQ : (0, DQ.e)(LQ))
              }
            },
            isReady() {
              var QQ, FQ;
              return null !== (QQ = null === (FQ = cQ.current) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
            },
            resetCamera() {
              var QQ;
              null === (QQ = cQ.current) || void 0 === QQ || QQ.resetCamera()
            },
            setOrbit(QQ) {
              var FQ;
              null === (FQ = cQ.current) || void 0 === FQ || FQ.setOrbit(QQ)
            },
            async ensureReadyForCapture(QQ) {
              var FQ;
              await (null === (FQ = cQ.current) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
            },
            getDevTools() {
              var QQ;
              return null !== (QQ = cQ.current) && void 0 !== QQ && QQ.isReady() ? cQ.current.dev : null
            }
          }
        }), [xQ, UQ]), (0, LQ.useEffect)((() => {
          const QQ = vQ.d.register(bQ),
            FQ = kQ.d.openCharacter(MQ.current, YQ);
          cQ.current = FQ;
          let wQ = !0;
          return FQ.ready.then((() => {
            wQ && (WQ(!0), RQ.current())
          })).catch((QQ => {
            console.error("Failed to set up the character preview", QQ)
          })), () => {
            wQ = !1, QQ(), FQ.resetCamera(), FQ.close(), cQ.current = null
          }
        }), []), (0, LQ.useEffect)((() => {
          GQ <= 0 || pQ <= 0 || cQ.current.resize(GQ, pQ)
        }), [GQ, pQ]), (0, LQ.useEffect)((() => {
          if (!iQ) return;
          const QQ = SQ.current;
          for (const FQ of oQ.w) {
            const wQ = null === xQ || void 0 === xQ ? void 0 : xQ[FQ],
              LQ = QQ[FQ];
            wQ && wQ !== LQ ? cQ.current.setCosmetic(FQ, wQ) : !wQ && LQ && CQ.current[FQ] && cQ.current.setCosmetic(FQ, CQ.current[FQ])
          }
          SQ.current = {
            ...xQ
          }, IQ.current = !0, UQ()
        }), [xQ, iQ, UQ]), (0, LQ.useEffect)((() => {
          iQ && cQ.current.playEmote(null !== AQ && void 0 !== AQ ? AQ : null)
        }), [AQ, tQ, iQ]), (0, LQ.useEffect)((() => {
          if (!iQ || null === eQ) return;
          const QQ = cQ.current,
            {
              pitch: FQ,
              radius: wQ
            } = kQ.b[YQ];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return QQ.setOrbit({
            yaw: eQ + uQ,
            pitch: FQ,
            radius: wQ
          }), () => {
            QQ.resetCamera()
          };
          const LQ = performance.now();
          let qQ = 0;
          const oQ = DQ => {
            QQ.setOrbit({
              yaw: eQ + (DQ - LQ) / 6e3 * 2 * Math.PI,
              pitch: FQ,
              radius: wQ
            }), qQ = requestAnimationFrame(oQ)
          };
          return qQ = requestAnimationFrame(oQ), () => {
            cancelAnimationFrame(qQ), QQ.resetCamera()
          }
        }), [iQ, eQ]), (0, mQ.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: MQ
        })
      })))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
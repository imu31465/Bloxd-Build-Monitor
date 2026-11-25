export const id = 300;
export const ids = [300];
export const modules = {
  41521: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CharacterPreview: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(2978),
      TQ = XQ(1273),
      zQ = XQ(2678),
      sQ = XQ(34541),
      FQ = XQ(3862),
      PQ = XQ(1145);
    const gQ = .6 * Math.PI,
      JQ = (0, wQ.memo)((0, wQ.forwardRef)((function(QQ, WQ) {
        let {
          onReady: XQ,
          onDrawn: JQ,
          owner: rQ = "other",
          framing: IQ = "player",
          forcedCosmetics: jQ,
          Rs: BQ,
          emotePlaySeq: yQ,
          turntableFromYaw: VQ = null
        } = QQ;
        const DQ = (0, wQ.useRef)(null),
          {
            width: pQ,
            height: GQ
          } = (0, qQ.d)(DQ),
          UQ = (0, wQ.useRef)(null),
          bQ = (0, wQ.useRef)({}),
          vQ = (0, wQ.useRef)({}),
          [dQ, HQ] = (0, wQ.useState)(!1),
          aQ = (0, wQ.useRef)(XQ);
        aQ.current = XQ;
        const lQ = (0, wQ.useRef)(JQ);
        lQ.current = JQ;
        const hQ = (0, wQ.useRef)(null),
          iQ = (0, wQ.useRef)(!1),
          cQ = (0, wQ.useRef)(!1),
          AQ = (0, wQ.useCallback)((() => {
            const QQ = UQ.current;
            if (!QQ || !lQ.current || iQ.current || !cQ.current) return;
            const WQ = {};
            hQ.current = WQ, queueMicrotask((() => {
              if (hQ.current !== WQ) return;
              const XQ = Promise.all(TQ.x.map((WQ => QQ.untilDrawn(WQ)))).catch((QQ => {
                  console.error("Failed to draw the character preview", QQ)
                })),
                wQ = new Promise((QQ => {
                  setTimeout(QQ, 1e4)
                }));
              Promise.race([XQ, wQ]).then((() => {
                var XQ;
                UQ.current !== QQ || hQ.current !== WQ || iQ.current || (iQ.current = !0, null === (XQ = lQ.current) || void 0 === XQ || XQ.call(lQ))
              }))
            }))
          }), []);
        return (0, wQ.useImperativeHandle)(WQ, (() => {
          const QQ = (QQ, WQ) => {
            var XQ;
            (bQ.current[QQ] = WQ, null !== jQ && void 0 !== jQ && jQ[QQ]) || (null === (XQ = UQ.current) || void 0 === XQ || XQ.setCosmetic(QQ, WQ), AQ())
          };
          return {
            updateCosmetic: QQ,
            setAllCosmetics(WQ) {
              for (const wQ of TQ.x) {
                var XQ;
                QQ(wQ, null !== (XQ = WQ[wQ]) && void 0 !== XQ ? XQ : (0, zQ.e)(wQ))
              }
            },
            isReady() {
              var QQ, WQ;
              return null !== (QQ = null === (WQ = UQ.current) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
            },
            resetCamera() {
              var QQ;
              null === (QQ = UQ.current) || void 0 === QQ || QQ.resetCamera()
            },
            setOrbit(QQ) {
              var WQ;
              null === (WQ = UQ.current) || void 0 === WQ || WQ.setOrbit(QQ)
            },
            turnCamera(QQ) {
              var WQ;
              const XQ = sQ.c[IQ];
              null === (WQ = UQ.current) || void 0 === WQ || WQ.setOrbit({
                ...XQ,
                yaw: XQ.yaw + QQ
              })
            },
            async ensureReadyForCapture(QQ) {
              var WQ;
              await (null === (WQ = UQ.current) || void 0 === WQ ? void 0 : WQ.untilDrawn(QQ))
            },
            getDevTools() {
              var QQ;
              return null !== (QQ = UQ.current) && void 0 !== QQ && QQ.isReady() ? UQ.current.dev : null
            }
          }
        }), [jQ, IQ, AQ]), (0, wQ.useEffect)((() => {
          const QQ = FQ.e.register(rQ),
            WQ = sQ.h.openCharacter(DQ.current, IQ);
          UQ.current = WQ;
          let XQ = !0;
          return WQ.ready.then((() => {
            XQ && (HQ(!0), aQ.current())
          })).catch((QQ => {
            console.error("Failed to set up the character preview", QQ)
          })), () => {
            XQ = !1, QQ(), WQ.resetCamera(), WQ.close(), UQ.current = null
          }
        }), []), (0, wQ.useEffect)((() => {
          pQ <= 0 || GQ <= 0 || UQ.current.resize(pQ, GQ)
        }), [pQ, GQ]), (0, wQ.useEffect)((() => {
          if (!dQ) return;
          const QQ = vQ.current;
          for (const WQ of TQ.x) {
            const XQ = null === jQ || void 0 === jQ ? void 0 : jQ[WQ],
              wQ = QQ[WQ];
            XQ && XQ !== wQ ? UQ.current.setCosmetic(WQ, XQ) : !XQ && wQ && bQ.current[WQ] && UQ.current.setCosmetic(WQ, bQ.current[WQ])
          }
          vQ.current = {
            ...jQ
          }, cQ.current = !0, AQ()
        }), [jQ, dQ, AQ]), (0, wQ.useEffect)((() => {
          dQ && UQ.current.playEmote(null !== BQ && void 0 !== BQ ? BQ : null)
        }), [BQ, yQ, dQ]), (0, wQ.useEffect)((() => {
          if (!dQ || null === VQ) return;
          const QQ = UQ.current,
            {
              pitch: WQ,
              radius: XQ
            } = sQ.c[IQ];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return QQ.setOrbit({
            yaw: VQ + gQ,
            pitch: WQ,
            radius: XQ
          }), () => {
            QQ.resetCamera()
          };
          const wQ = performance.now();
          let qQ = 0;
          const TQ = zQ => {
            QQ.setOrbit({
              yaw: VQ + (zQ - wQ) / 6e3 * 2 * Math.PI,
              pitch: WQ,
              radius: XQ
            }), qQ = requestAnimationFrame(TQ)
          };
          return qQ = requestAnimationFrame(TQ), () => {
            cancelAnimationFrame(qQ), QQ.resetCamera()
          }
        }), [dQ, VQ]), (0, PQ.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: DQ
        })
      })))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
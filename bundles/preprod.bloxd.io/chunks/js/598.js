export const id = 598;
export const ids = [598];
export const modules = {
  43986: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CharacterPreview: () => YU
    });
    var cU = zU(61),
      yU = zU(3021),
      QU = zU(1258),
      AU = zU(2772),
      FU = zU(34900),
      oU = zU(3990),
      DU = zU(1305);
    const EU = .6 * Math.PI,
      YU = (0, cU.memo)((0, cU.forwardRef)((function(UU, XU) {
        let {
          onReady: zU,
          onDrawn: YU,
          owner: NU = "other",
          framing: IU = "player",
          forcedCosmetics: pU,
          GA: aU,
          emotePlaySeq: tU,
          turntableFromYaw: gU = null
        } = UU;
        const kU = (0, cU.useRef)(null),
          {
            width: GU,
            height: BU
          } = (0, yU.d)(kU),
          ZU = (0, cU.useRef)(null),
          RU = (0, cU.useRef)({}),
          PU = (0, cU.useRef)({}),
          [WU, dU] = (0, cU.useState)(!1),
          LU = (0, cU.useRef)(zU);
        LU.current = zU;
        const eU = (0, cU.useRef)(YU);
        eU.current = YU;
        const CU = (0, cU.useRef)(null),
          wU = (0, cU.useRef)(!1),
          qU = (0, cU.useRef)(!1),
          OU = (0, cU.useCallback)((() => {
            const UU = ZU.current;
            if (!UU || !eU.current || wU.current || !qU.current) return;
            const XU = {};
            CU.current = XU, queueMicrotask((() => {
              if (CU.current !== XU) return;
              const zU = Promise.all(QU.v.map((XU => UU.untilDrawn(XU)))).catch((UU => {
                  console.error("Failed to draw the character preview", UU)
                })),
                cU = new Promise((UU => {
                  setTimeout(UU, 1e4)
                }));
              Promise.race([zU, cU]).then((() => {
                var zU;
                ZU.current !== UU || CU.current !== XU || wU.current || (wU.current = !0, null === (zU = eU.current) || void 0 === zU || zU.call(eU))
              }))
            }))
          }), []);
        return (0, cU.useImperativeHandle)(XU, (() => {
          const UU = (UU, XU) => {
            var zU;
            (RU.current[UU] = XU, null !== pU && void 0 !== pU && pU[UU]) || (null === (zU = ZU.current) || void 0 === zU || zU.setCosmetic(UU, XU), OU())
          };
          return {
            updateCosmetic: UU,
            setAllCosmetics(XU) {
              for (const cU of QU.v) {
                var zU;
                UU(cU, null !== (zU = XU[cU]) && void 0 !== zU ? zU : (0, AU.d)(cU))
              }
            },
            isReady() {
              var UU, XU;
              return null !== (UU = null === (XU = ZU.current) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
            },
            resetCamera() {
              var UU;
              null === (UU = ZU.current) || void 0 === UU || UU.resetCamera()
            },
            setOrbit(UU) {
              var XU;
              null === (XU = ZU.current) || void 0 === XU || XU.setOrbit(UU)
            },
            turnCamera(UU) {
              var XU;
              const zU = FU.c[IU];
              null === (XU = ZU.current) || void 0 === XU || XU.setOrbit({
                ...zU,
                yaw: zU.yaw + UU
              })
            },
            async ensureReadyForCapture(UU) {
              var XU;
              await (null === (XU = ZU.current) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
            },
            getDevTools() {
              var UU;
              return null !== (UU = ZU.current) && void 0 !== UU && UU.isReady() ? ZU.current.dev : null
            }
          }
        }), [pU, IU, OU]), (0, cU.useEffect)((() => {
          const UU = oU.c.register(NU),
            XU = FU.h.openCharacter(kU.current, IU);
          ZU.current = XU;
          let zU = !0;
          return XU.ready.then((() => {
            zU && (dU(!0), LU.current())
          })).catch((UU => {
            console.error("Failed to set up the character preview", UU)
          })), () => {
            zU = !1, UU(), XU.resetCamera(), XU.close(), ZU.current = null
          }
        }), []), (0, cU.useEffect)((() => {
          GU <= 0 || BU <= 0 || ZU.current.resize(GU, BU)
        }), [GU, BU]), (0, cU.useEffect)((() => {
          if (!WU) return;
          const UU = PU.current;
          for (const XU of QU.v) {
            const zU = null === pU || void 0 === pU ? void 0 : pU[XU],
              cU = UU[XU];
            zU && zU !== cU ? ZU.current.setCosmetic(XU, zU) : !zU && cU && RU.current[XU] && ZU.current.setCosmetic(XU, RU.current[XU])
          }
          PU.current = {
            ...pU
          }, qU.current = !0, OU()
        }), [pU, WU, OU]), (0, cU.useEffect)((() => {
          WU && ZU.current.playEmote(null !== aU && void 0 !== aU ? aU : null)
        }), [aU, tU, WU]), (0, cU.useEffect)((() => {
          if (!WU || null === gU) return;
          const UU = ZU.current,
            {
              pitch: XU,
              radius: zU
            } = FU.c[IU];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return UU.setOrbit({
            yaw: gU + EU,
            pitch: XU,
            radius: zU
          }), () => {
            UU.resetCamera()
          };
          const cU = performance.now();
          let yU = 0;
          const QU = AU => {
            UU.setOrbit({
              yaw: gU + (AU - cU) / 6e3 * 2 * Math.PI,
              pitch: XU,
              radius: zU
            }), yU = requestAnimationFrame(QU)
          };
          return yU = requestAnimationFrame(QU), () => {
            cancelAnimationFrame(yU), UU.resetCamera()
          }
        }), [WU, gU]), (0, DU.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: kU
        })
      })))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 282;
export const ids = [282];
export const modules = {
  40675: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CharacterPreview: () => GU
    });
    var tU = gU(56),
      pU = gU(2533),
      EU = gU(1238),
      PU = gU(8447),
      TU = gU(9027),
      qU = gU(3308),
      KU = gU(1090);
    const cU = .6 * Math.PI,
      GU = (0, tU.memo)((0, tU.forwardRef)((function(UU, RU) {
        let {
          onReady: gU,
          onDrawn: GU,
          owner: jU = "other",
          framing: uU = "player",
          forcedCosmetics: CU,
          qT: hU,
          emotePlaySeq: QU,
          turntableFromYaw: eU = null
        } = UU;
        const WU = (0, tU.useRef)(null),
          {
            width: fU,
            height: xU
          } = (0, pU.d)(WU),
          mU = (0, tU.useRef)(null),
          IU = (0, tU.useRef)({}),
          JU = (0, tU.useRef)({}),
          [wU, nU] = (0, tU.useState)(!1),
          bU = (0, tU.useRef)(gU);
        bU.current = gU;
        const oU = (0, tU.useRef)(GU);
        oU.current = GU;
        const ZU = (0, tU.useRef)(null),
          aU = (0, tU.useRef)(!1),
          YU = (0, tU.useRef)(!1),
          BU = (0, tU.useCallback)((() => {
            const UU = mU.current;
            if (!UU || !oU.current || aU.current || !YU.current) return;
            const RU = {};
            ZU.current = RU, queueMicrotask((() => {
              if (ZU.current !== RU) return;
              const gU = Promise.all(EU.r.map((RU => UU.untilDrawn(RU)))).catch((UU => {
                  console.error("Failed to draw the character preview", UU)
                })),
                tU = new Promise((UU => {
                  setTimeout(UU, 1e4)
                }));
              Promise.race([gU, tU]).then((() => {
                var gU;
                mU.current !== UU || ZU.current !== RU || aU.current || (aU.current = !0, null === (gU = oU.current) || void 0 === gU || gU.call(oU))
              }))
            }))
          }), []);
        return (0, tU.useImperativeHandle)(RU, (() => {
          const UU = (UU, RU) => {
            var gU;
            (IU.current[UU] = RU, null !== CU && void 0 !== CU && CU[UU]) || (null === (gU = mU.current) || void 0 === gU || gU.setCosmetic(UU, RU), BU())
          };
          return {
            updateCosmetic: UU,
            setAllCosmetics(RU) {
              for (const tU of EU.r) {
                var gU;
                UU(tU, null !== (gU = RU[tU]) && void 0 !== gU ? gU : (0, PU.c)(tU))
              }
            },
            isReady() {
              var UU, RU;
              return null !== (UU = null === (RU = mU.current) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
            },
            resetCamera() {
              var UU;
              null === (UU = mU.current) || void 0 === UU || UU.resetCamera()
            },
            setOrbit(UU) {
              var RU;
              null === (RU = mU.current) || void 0 === RU || RU.setOrbit(UU)
            },
            async ensureReadyForCapture(UU) {
              var RU;
              await (null === (RU = mU.current) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
            },
            getDevTools() {
              var UU;
              return null !== (UU = mU.current) && void 0 !== UU && UU.isReady() ? mU.current.dev : null
            }
          }
        }), [CU, BU]), (0, tU.useEffect)((() => {
          const UU = qU.c.register(jU),
            RU = TU.g.openCharacter(WU.current, uU);
          mU.current = RU;
          let gU = !0;
          return RU.ready.then((() => {
            gU && (nU(!0), bU.current())
          })).catch((UU => {
            console.error("Failed to set up the character preview", UU)
          })), () => {
            gU = !1, UU(), RU.resetCamera(), RU.close(), mU.current = null
          }
        }), []), (0, tU.useEffect)((() => {
          fU <= 0 || xU <= 0 || mU.current.resize(fU, xU)
        }), [fU, xU]), (0, tU.useEffect)((() => {
          if (!wU) return;
          const UU = JU.current;
          for (const RU of EU.r) {
            const gU = null === CU || void 0 === CU ? void 0 : CU[RU],
              tU = UU[RU];
            gU && gU !== tU ? mU.current.setCosmetic(RU, gU) : !gU && tU && IU.current[RU] && mU.current.setCosmetic(RU, IU.current[RU])
          }
          JU.current = {
            ...CU
          }, YU.current = !0, BU()
        }), [CU, wU, BU]), (0, tU.useEffect)((() => {
          wU && mU.current.playEmote(null !== hU && void 0 !== hU ? hU : null)
        }), [hU, QU, wU]), (0, tU.useEffect)((() => {
          if (!wU || null === eU) return;
          const UU = mU.current,
            {
              pitch: RU,
              radius: gU
            } = TU.e[uU];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return UU.setOrbit({
            yaw: eU + cU,
            pitch: RU,
            radius: gU
          }), () => {
            UU.resetCamera()
          };
          const tU = performance.now();
          let pU = 0;
          const EU = PU => {
            UU.setOrbit({
              yaw: eU + (PU - tU) / 6e3 * 2 * Math.PI,
              pitch: RU,
              radius: gU
            }), pU = requestAnimationFrame(EU)
          };
          return pU = requestAnimationFrame(EU), () => {
            cancelAnimationFrame(pU), UU.resetCamera()
          }
        }), [wU, eU]), (0, KU.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: WU
        })
      })))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
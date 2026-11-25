export const id = 296;
export const ids = [296];
export const modules = {
  41319: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CharacterPreview: () => hB
    });
    var TB = ZB(63),
      JB = ZB(2896),
      oB = ZB(1300),
      GB = ZB(2696),
      vB = ZB(34230),
      kB = ZB(3811),
      cB = ZB(1153);
    const nB = .6 * Math.PI,
      hB = (0, TB.memo)((0, TB.forwardRef)((function(BB, IB) {
        let {
          onReady: ZB,
          onDrawn: hB,
          owner: zB = "other",
          framing: FB = "player",
          forcedCosmetics: NB,
          Mv: gB,
          emotePlaySeq: qB,
          turntableFromYaw: yB = null
        } = BB;
        const UB = (0, TB.useRef)(null),
          {
            width: WB,
            height: dB
          } = (0, JB.e)(UB),
          CB = (0, TB.useRef)(null),
          QB = (0, TB.useRef)({}),
          sB = (0, TB.useRef)({}),
          [wB, OB] = (0, TB.useState)(!1),
          YB = (0, TB.useRef)(ZB);
        YB.current = ZB;
        const iB = (0, TB.useRef)(hB);
        iB.current = hB;
        const pB = (0, TB.useRef)(null),
          aB = (0, TB.useRef)(!1),
          HB = (0, TB.useRef)(!1),
          MB = (0, TB.useCallback)((() => {
            const BB = CB.current;
            if (!BB || !iB.current || aB.current || !HB.current) return;
            const IB = {};
            pB.current = IB, queueMicrotask((() => {
              if (pB.current !== IB) return;
              const ZB = Promise.all(oB.y.map((IB => BB.untilDrawn(IB)))).catch((BB => {
                  console.error("Failed to draw the character preview", BB)
                })),
                TB = new Promise((BB => {
                  setTimeout(BB, 1e4)
                }));
              Promise.race([ZB, TB]).then((() => {
                var ZB;
                CB.current !== BB || pB.current !== IB || aB.current || (aB.current = !0, null === (ZB = iB.current) || void 0 === ZB || ZB.call(iB))
              }))
            }))
          }), []);
        return (0, TB.useImperativeHandle)(IB, (() => {
          const BB = (BB, IB) => {
            var ZB;
            (QB.current[BB] = IB, null !== NB && void 0 !== NB && NB[BB]) || (null === (ZB = CB.current) || void 0 === ZB || ZB.setCosmetic(BB, IB), MB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(IB) {
              for (const TB of oB.y) {
                var ZB;
                BB(TB, null !== (ZB = IB[TB]) && void 0 !== ZB ? ZB : (0, GB.b)(TB))
              }
            },
            isReady() {
              var BB, IB;
              return null !== (BB = null === (IB = CB.current) || void 0 === IB ? void 0 : IB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = CB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var IB;
              null === (IB = CB.current) || void 0 === IB || IB.setOrbit(BB)
            },
            async ensureReadyForCapture(BB) {
              var IB;
              await (null === (IB = CB.current) || void 0 === IB ? void 0 : IB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = CB.current) && void 0 !== BB && BB.isReady() ? CB.current.dev : null
            }
          }
        }), [NB, MB]), (0, TB.useEffect)((() => {
          const BB = kB.e.register(zB),
            IB = vB.i.openCharacter(UB.current, FB);
          CB.current = IB;
          let ZB = !0;
          return IB.ready.then((() => {
            ZB && (OB(!0), YB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            ZB = !1, BB(), IB.resetCamera(), IB.close(), CB.current = null
          }
        }), []), (0, TB.useEffect)((() => {
          WB <= 0 || dB <= 0 || CB.current.resize(WB, dB)
        }), [WB, dB]), (0, TB.useEffect)((() => {
          if (!wB) return;
          const BB = sB.current;
          for (const IB of oB.y) {
            const ZB = null === NB || void 0 === NB ? void 0 : NB[IB],
              TB = BB[IB];
            ZB && ZB !== TB ? CB.current.setCosmetic(IB, ZB) : !ZB && TB && QB.current[IB] && CB.current.setCosmetic(IB, QB.current[IB])
          }
          sB.current = {
            ...NB
          }, HB.current = !0, MB()
        }), [NB, wB, MB]), (0, TB.useEffect)((() => {
          wB && CB.current.playEmote(null !== gB && void 0 !== gB ? gB : null)
        }), [gB, qB, wB]), (0, TB.useEffect)((() => {
          if (!wB || null === yB) return;
          const BB = CB.current,
            {
              pitch: IB,
              radius: ZB
            } = vB.b[FB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: yB + nB,
            pitch: IB,
            radius: ZB
          }), () => {
            BB.resetCamera()
          };
          const TB = performance.now();
          let JB = 0;
          const oB = GB => {
            BB.setOrbit({
              yaw: yB + (GB - TB) / 6e3 * 2 * Math.PI,
              pitch: IB,
              radius: ZB
            }), JB = requestAnimationFrame(oB)
          };
          return JB = requestAnimationFrame(oB), () => {
            cancelAnimationFrame(JB), BB.resetCamera()
          }
        }), [wB, yB]), (0, cB.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: UB
        })
      })))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 296;
export const ids = [296];
export const modules = {
  41710: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CharacterPreview: () => pG
    });
    var wG = ZG(51),
      SG = ZG(2732),
      LG = ZG(1198),
      yG = ZG(2537),
      kG = ZG(34515),
      UG = ZG(3625),
      YG = ZG(1067);
    const VG = .6 * Math.PI,
      pG = (0, wG.memo)((0, wG.forwardRef)((function(GG, bG) {
        let {
          onReady: ZG,
          onDrawn: pG,
          owner: fG = "other",
          framing: QG = "player",
          forcedCosmetics: KG,
          Ak: hG,
          emotePlaySeq: dG,
          turntableFromYaw: JG = null
        } = GG;
        const rG = (0, wG.useRef)(null),
          {
            width: zG,
            height: EG
          } = (0, SG.d)(rG),
          oG = (0, wG.useRef)(null),
          XG = (0, wG.useRef)({}),
          uG = (0, wG.useRef)({}),
          [iG, CG] = (0, wG.useState)(!1),
          WG = (0, wG.useRef)(ZG);
        WG.current = ZG;
        const mG = (0, wG.useRef)(pG);
        mG.current = pG;
        const IG = (0, wG.useRef)(null),
          FG = (0, wG.useRef)(!1),
          vG = (0, wG.useRef)(!1),
          aG = (0, wG.useCallback)((() => {
            const GG = oG.current;
            if (!GG || !mG.current || FG.current || !vG.current) return;
            const bG = {};
            IG.current = bG, queueMicrotask((() => {
              if (IG.current !== bG) return;
              const ZG = Promise.all(LG.x.map((bG => GG.untilDrawn(bG)))).catch((GG => {
                  console.error("Failed to draw the character preview", GG)
                })),
                wG = new Promise((GG => {
                  setTimeout(GG, 1e4)
                }));
              Promise.race([ZG, wG]).then((() => {
                var ZG;
                oG.current !== GG || IG.current !== bG || FG.current || (FG.current = !0, null === (ZG = mG.current) || void 0 === ZG || ZG.call(mG))
              }))
            }))
          }), []);
        return (0, wG.useImperativeHandle)(bG, (() => {
          const GG = (GG, bG) => {
            var ZG;
            (XG.current[GG] = bG, null !== KG && void 0 !== KG && KG[GG]) || (null === (ZG = oG.current) || void 0 === ZG || ZG.setCosmetic(GG, bG), aG())
          };
          return {
            updateCosmetic: GG,
            setAllCosmetics(bG) {
              for (const wG of LG.x) {
                var ZG;
                GG(wG, null !== (ZG = bG[wG]) && void 0 !== ZG ? ZG : (0, yG.d)(wG))
              }
            },
            isReady() {
              var GG, bG;
              return null !== (GG = null === (bG = oG.current) || void 0 === bG ? void 0 : bG.isReady()) && void 0 !== GG && GG
            },
            resetCamera() {
              var GG;
              null === (GG = oG.current) || void 0 === GG || GG.resetCamera()
            },
            setOrbit(GG) {
              var bG;
              null === (bG = oG.current) || void 0 === bG || bG.setOrbit(GG)
            },
            async ensureReadyForCapture(GG) {
              var bG;
              await (null === (bG = oG.current) || void 0 === bG ? void 0 : bG.untilDrawn(GG))
            },
            getDevTools() {
              var GG;
              return null !== (GG = oG.current) && void 0 !== GG && GG.isReady() ? oG.current.dev : null
            }
          }
        }), [KG, aG]), (0, wG.useEffect)((() => {
          const GG = UG.b.register(fG),
            bG = kG.d.openCharacter(rG.current, QG);
          oG.current = bG;
          let ZG = !0;
          return bG.ready.then((() => {
            ZG && (CG(!0), WG.current())
          })).catch((GG => {
            console.error("Failed to set up the character preview", GG)
          })), () => {
            ZG = !1, GG(), bG.resetCamera(), bG.close(), oG.current = null
          }
        }), []), (0, wG.useEffect)((() => {
          zG <= 0 || EG <= 0 || oG.current.resize(zG, EG)
        }), [zG, EG]), (0, wG.useEffect)((() => {
          if (!iG) return;
          const GG = uG.current;
          for (const bG of LG.x) {
            const ZG = null === KG || void 0 === KG ? void 0 : KG[bG],
              wG = GG[bG];
            ZG && ZG !== wG ? oG.current.setCosmetic(bG, ZG) : !ZG && wG && XG.current[bG] && oG.current.setCosmetic(bG, XG.current[bG])
          }
          uG.current = {
            ...KG
          }, vG.current = !0, aG()
        }), [KG, iG, aG]), (0, wG.useEffect)((() => {
          iG && oG.current.playEmote(null !== hG && void 0 !== hG ? hG : null)
        }), [hG, dG, iG]), (0, wG.useEffect)((() => {
          if (!iG || null === JG) return;
          const GG = oG.current,
            {
              pitch: bG,
              radius: ZG
            } = kG.b[QG];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return GG.setOrbit({
            yaw: JG + VG,
            pitch: bG,
            radius: ZG
          }), () => {
            GG.resetCamera()
          };
          const wG = performance.now();
          let SG = 0;
          const LG = yG => {
            GG.setOrbit({
              yaw: JG + (yG - wG) / 6e3 * 2 * Math.PI,
              pitch: bG,
              radius: ZG
            }), SG = requestAnimationFrame(LG)
          };
          return SG = requestAnimationFrame(LG), () => {
            cancelAnimationFrame(SG), GG.resetCamera()
          }
        }), [iG, JG]), (0, YG.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: rG
        })
      })))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
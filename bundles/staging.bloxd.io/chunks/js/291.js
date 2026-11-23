export const id = 291;
export const ids = [291];
export const modules = {
  41104: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CharacterPreview: () => WC
    });
    var QC = ZC(48),
      wC = ZC(2734),
      bC = ZC(1183),
      nC = ZC(2534),
      fC = ZC(34185),
      oC = ZC(3569),
      qC = ZC(1056);
    const FC = .6 * Math.PI,
      WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
        let {
          onReady: ZC,
          onDrawn: WC,
          owner: NC = "other",
          framing: MC = "player",
          forcedCosmetics: gC,
          Bn: SC,
          emotePlaySeq: pC,
          turntableFromYaw: PC = null
        } = CC;
        const GC = (0, QC.useRef)(null),
          {
            width: RC,
            height: AC
          } = (0, wC.e)(GC),
          xC = (0, QC.useRef)(null),
          JC = (0, QC.useRef)({}),
          IC = (0, QC.useRef)({}),
          [iC, vC] = (0, QC.useState)(!1),
          eC = (0, QC.useRef)(ZC);
        eC.current = ZC;
        const hC = (0, QC.useRef)(WC);
        hC.current = WC;
        const KC = (0, QC.useRef)(null),
          YC = (0, QC.useRef)(!1),
          dC = (0, QC.useRef)(!1),
          mC = (0, QC.useCallback)((() => {
            const CC = xC.current;
            if (!CC || !hC.current || YC.current || !dC.current) return;
            const zC = {};
            KC.current = zC, queueMicrotask((() => {
              if (KC.current !== zC) return;
              const ZC = Promise.all(bC.y.map((zC => CC.untilDrawn(zC)))).catch((CC => {
                  console.error("Failed to draw the character preview", CC)
                })),
                QC = new Promise((CC => {
                  setTimeout(CC, 1e4)
                }));
              Promise.race([ZC, QC]).then((() => {
                var ZC;
                xC.current !== CC || KC.current !== zC || YC.current || (YC.current = !0, null === (ZC = hC.current) || void 0 === ZC || ZC.call(hC))
              }))
            }))
          }), []);
        return (0, QC.useImperativeHandle)(zC, (() => {
          const CC = (CC, zC) => {
            var ZC;
            (JC.current[CC] = zC, null !== gC && void 0 !== gC && gC[CC]) || (null === (ZC = xC.current) || void 0 === ZC || ZC.setCosmetic(CC, zC), mC())
          };
          return {
            updateCosmetic: CC,
            setAllCosmetics(zC) {
              for (const QC of bC.y) {
                var ZC;
                CC(QC, null !== (ZC = zC[QC]) && void 0 !== ZC ? ZC : (0, nC.e)(QC))
              }
            },
            isReady() {
              var CC, zC;
              return null !== (CC = null === (zC = xC.current) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
            },
            resetCamera() {
              var CC;
              null === (CC = xC.current) || void 0 === CC || CC.resetCamera()
            },
            setOrbit(CC) {
              var zC;
              null === (zC = xC.current) || void 0 === zC || zC.setOrbit(CC)
            },
            async ensureReadyForCapture(CC) {
              var zC;
              await (null === (zC = xC.current) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
            },
            getDevTools() {
              var CC;
              return null !== (CC = xC.current) && void 0 !== CC && CC.isReady() ? xC.current.dev : null
            }
          }
        }), [gC, mC]), (0, QC.useEffect)((() => {
          const CC = oC.c.register(NC),
            zC = fC.k.openCharacter(GC.current, MC);
          xC.current = zC;
          let ZC = !0;
          return zC.ready.then((() => {
            ZC && (vC(!0), eC.current())
          })).catch((CC => {
            console.error("Failed to set up the character preview", CC)
          })), () => {
            ZC = !1, CC(), zC.resetCamera(), zC.close(), xC.current = null
          }
        }), []), (0, QC.useEffect)((() => {
          RC <= 0 || AC <= 0 || xC.current.resize(RC, AC)
        }), [RC, AC]), (0, QC.useEffect)((() => {
          if (!iC) return;
          const CC = IC.current;
          for (const zC of bC.y) {
            const ZC = null === gC || void 0 === gC ? void 0 : gC[zC],
              QC = CC[zC];
            ZC && ZC !== QC ? xC.current.setCosmetic(zC, ZC) : !ZC && QC && JC.current[zC] && xC.current.setCosmetic(zC, JC.current[zC])
          }
          IC.current = {
            ...gC
          }, dC.current = !0, mC()
        }), [gC, iC, mC]), (0, QC.useEffect)((() => {
          iC && xC.current.playEmote(null !== SC && void 0 !== SC ? SC : null)
        }), [SC, pC, iC]), (0, QC.useEffect)((() => {
          if (!iC || null === PC) return;
          const CC = xC.current,
            {
              pitch: zC,
              radius: ZC
            } = fC.c[MC];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return CC.setOrbit({
            yaw: PC + FC,
            pitch: zC,
            radius: ZC
          }), () => {
            CC.resetCamera()
          };
          const QC = performance.now();
          let wC = 0;
          const bC = nC => {
            CC.setOrbit({
              yaw: PC + (nC - QC) / 6e3 * 2 * Math.PI,
              pitch: zC,
              radius: ZC
            }), wC = requestAnimationFrame(bC)
          };
          return wC = requestAnimationFrame(bC), () => {
            cancelAnimationFrame(wC), CC.resetCamera()
          }
        }), [iC, PC]), (0, qC.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: GC
        })
      })))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
export const id = 610;
export const ids = [610];
export const modules = {
  44996: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CharacterPreview: () => rR
    });
    var yR = GR(66),
      tR = GR(3909),
      uR = GR(1336),
      ZR = GR(3644),
      qR = GR(35193),
      iR = GR(4955),
      fR = GR(1378);
    let VR = null;
    const KR = [],
      wR = .6 * Math.PI,
      rR = (0, yR.memo)((0, yR.forwardRef)((function(RR, JR) {
        let {
          onReady: GR,
          onDrawn: rR,
          onSetupFailed: eR,
          owner: aR = "other",
          framing: LR = "player",
          forcedCosmetics: nR,
          wq: UR,
          emotePlaySeq: WR,
          turntableFromYaw: AR = null,
          nametag: CR
        } = RR;
        const XR = (0, yR.useRef)(null),
          {
            width: MR,
            height: BR
          } = (0, tR.b)(XR),
          lR = (0, yR.useRef)({
            width: MR,
            height: BR
          });
        lR.current = {
          width: MR,
          height: BR
        };
        const pR = (0, yR.useRef)(null),
          gR = (0, yR.useRef)({}),
          bR = (0, yR.useRef)({}),
          [vR, OR] = (0, yR.useState)(!1),
          xR = (0, yR.useRef)(GR);
        xR.current = GR;
        const NR = (0, yR.useRef)(rR);
        NR.current = rR;
        const DR = (0, yR.useRef)(eR);
        DR.current = eR;
        const HR = (0, yR.useRef)(null),
          oR = (0, yR.useRef)(!1),
          cR = (0, yR.useRef)(CR);
        cR.current = CR;
        const PR = (0, yR.useRef)(!0),
          IR = (0, yR.useRef)(!1),
          mR = (0, yR.useCallback)((() => {
            const RR = pR.current;
            if (!RR || !NR.current || oR.current || !IR.current) return;
            const JR = {};
            HR.current = JR, queueMicrotask((() => {
              if (HR.current !== JR) return;
              const GR = Promise.all(uR.w.map((JR => RR.untilDrawn(JR)))).then((() => !0), (RR => (console.error("Failed to draw the character preview", RR), !1))),
                yR = new Promise((RR => {
                  setTimeout((() => {
                    RR(!1)
                  }), 1e4)
                }));
              Promise.race([GR, yR]).then((GR => {
                const yR = NR.current;
                pR.current === RR && HR.current === JR && !oR.current && yR && (oR.current = !0, yR(GR))
              }))
            }))
          }), []);
        return (0, yR.useImperativeHandle)(JR, (() => {
          const RR = (RR, JR) => {
            var GR;
            (gR.current[RR] = JR, null !== nR && void 0 !== nR && nR[RR]) || (null === (GR = pR.current) || void 0 === GR || GR.setCosmetic(RR, JR), mR())
          };
          return {
            updateCosmetic: RR,
            setAllCosmetics(JR) {
              for (const yR of uR.w) {
                var GR;
                RR(yR, null !== (GR = JR[yR]) && void 0 !== GR ? GR : (0, ZR.c)(yR))
              }
            },
            isReady() {
              var RR, JR;
              return null !== (RR = null === (JR = pR.current) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
            },
            resetCamera() {
              var RR;
              null === (RR = pR.current) || void 0 === RR || RR.resetCamera()
            },
            setOrbit(RR) {
              var JR;
              null === (JR = pR.current) || void 0 === JR || JR.setOrbit(RR)
            },
            turnCamera(RR) {
              var JR;
              const GR = qR.d[LR];
              null === (JR = pR.current) || void 0 === JR || JR.setOrbit({
                ...GR,
                yaw: GR.yaw + RR
              })
            },
            async ensureReadyForCapture(RR) {
              var JR;
              await (null === (JR = pR.current) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
            },
            getDevTools() {
              var RR;
              return null !== (RR = pR.current) && void 0 !== RR && RR.isReady() ? pR.current.dev : null
            },
            setNametagShown(RR) {
              var JR, GR;
              PR.current = RR, null === (JR = pR.current) || void 0 === JR || JR.setNametag(RR && null !== (GR = cR.current) && void 0 !== GR ? GR : null)
            }
          }
        }), [nR, LR, mR]), (0, yR.useEffect)((() => {
          const RR = iR.b.register(aR);
          let JR = !0;
          const GR = RR => {
            const GR = pR.current,
              yR = qR.g.openCharacter(XR.current, LR);
            if (pR.current = yR, VR = yR, GR) {
              GR.close();
              const {
                width: RR,
                height: JR
              } = lR.current;
              RR > 0 && JR > 0 && yR.resize(RR, JR)
            }
            bR.current = {}, OR(!1), yR.ready.then((() => {
              if (JR && pR.current === yR)
                if (OR(!0), RR) {
                  yR.resetCamera();
                  for (const RR of uR.w) {
                    var GR;
                    yR.setCosmetic(RR, null !== (GR = gR.current[RR]) && void 0 !== GR ? GR : (0, ZR.c)(RR))
                  }
                } else xR.current()
            })).catch((RR => {
              var GR;
              (console.error("Failed to set up the character preview", RR), JR && pR.current === yR) && (null === (GR = DR.current) || void 0 === GR || GR.call(DR))
            }))
          };
          GR(!1);
          const yR = {
            reopen: () => {
              GR(!0)
            }
          };
          return KR.push(yR), () => {
            JR = !1, RR();
            const GR = pR.current;
            VR === GR && (GR.resetCamera(), VR = null), GR.close(), pR.current = null;
            const tR = KR.indexOf(yR);
            if (KR.splice(tR, 1), tR === KR.length && tR > 0) {
              const RR = KR[tR - 1];
              queueMicrotask((() => {
                KR.at(-1) === RR && null === VR && qR.g.sharesCharacter() && RR.reopen()
              }))
            }
          }
        }), []), (0, yR.useEffect)((() => {
          MR <= 0 || BR <= 0 || pR.current.resize(MR, BR)
        }), [MR, BR]), (0, yR.useEffect)((() => {
          if (!vR) return;
          const RR = bR.current;
          for (const JR of uR.w) {
            const GR = null === nR || void 0 === nR ? void 0 : nR[JR],
              yR = RR[JR];
            GR && GR !== yR ? pR.current.setCosmetic(JR, GR) : !GR && yR && gR.current[JR] && pR.current.setCosmetic(JR, gR.current[JR])
          }
          bR.current = {
            ...nR
          }, IR.current = !0, mR()
        }), [nR, vR, mR]), (0, yR.useEffect)((() => {
          vR && pR.current.playEmote(null !== UR && void 0 !== UR ? UR : null)
        }), [UR, WR, vR]), (0, yR.useEffect)((() => {
          vR && PR.current && pR.current.setNametag(null !== CR && void 0 !== CR ? CR : null)
        }), [CR, vR]), (0, yR.useEffect)((() => {
          if (!vR || null === AR) return;
          const RR = pR.current,
            {
              pitch: JR,
              radius: GR
            } = qR.d[LR];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return RR.setOrbit({
            yaw: AR + wR,
            pitch: JR,
            radius: GR
          }), () => {
            VR === RR && RR.resetCamera()
          };
          const yR = performance.now();
          let tR = 0;
          const uR = ZR => {
            pR.current === RR && (RR.setOrbit({
              yaw: AR + (ZR - yR) / 6e3 * 2 * Math.PI,
              pitch: JR,
              radius: GR
            }), tR = requestAnimationFrame(uR))
          };
          return tR = requestAnimationFrame(uR), () => {
            cancelAnimationFrame(tR), VR === RR && RR.resetCamera()
          }
        }), [vR, AR]), (0, fR.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: XR
        })
      })))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
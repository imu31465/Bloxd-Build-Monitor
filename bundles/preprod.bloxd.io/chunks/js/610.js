export const id = 610;
export const ids = [610];
export const modules = {
  44898: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CharacterPreview: () => lW
    });
    var mW = OW(62),
      EW = OW(3809),
      NW = OW(1230),
      PW = OW(3540),
      LW = OW(35264),
      cW = OW(4846),
      wW = OW(1283);
    let tW = null;
    const ZW = [],
      xW = .6 * Math.PI,
      lW = (0, mW.memo)((0, mW.forwardRef)((function(WW, iW) {
        let {
          onReady: OW,
          onDrawn: lW,
          onSetupFailed: AW,
          owner: bW = "other",
          framing: jW = "player",
          forcedCosmetics: UW,
          LL: kW,
          emotePlaySeq: sW,
          turntableFromYaw: MW = null,
          nametag: KW
        } = WW;
        const SW = (0, mW.useRef)(null),
          {
            width: YW,
            height: yW
          } = (0, EW.d)(SW),
          TW = (0, mW.useRef)({
            width: YW,
            height: yW
          });
        TW.current = {
          width: YW,
          height: yW
        };
        const JW = (0, mW.useRef)(null),
          hW = (0, mW.useRef)({}),
          HW = (0, mW.useRef)({}),
          [nW, uW] = (0, mW.useState)(!1),
          oW = (0, mW.useRef)(OW);
        oW.current = OW;
        const dW = (0, mW.useRef)(lW);
        dW.current = lW;
        const eW = (0, mW.useRef)(AW);
        eW.current = AW;
        const vW = (0, mW.useRef)(null),
          gW = (0, mW.useRef)(!1),
          DW = (0, mW.useRef)(KW);
        DW.current = KW;
        const VW = (0, mW.useRef)(!0),
          pW = (0, mW.useRef)(!1),
          fW = (0, mW.useCallback)((() => {
            const WW = JW.current;
            if (!WW || !dW.current || gW.current || !pW.current) return;
            const iW = {};
            vW.current = iW, queueMicrotask((() => {
              if (vW.current !== iW) return;
              const OW = Promise.all(NW.p.map((iW => WW.untilDrawn(iW)))).then((() => !0), (WW => (console.error("Failed to draw the character preview", WW), !1))),
                mW = new Promise((WW => {
                  setTimeout((() => {
                    WW(!1)
                  }), 1e4)
                }));
              Promise.race([OW, mW]).then((OW => {
                const mW = dW.current;
                JW.current === WW && vW.current === iW && !gW.current && mW && (gW.current = !0, mW(OW))
              }))
            }))
          }), []);
        return (0, mW.useImperativeHandle)(iW, (() => {
          const WW = (WW, iW) => {
            var OW;
            (hW.current[WW] = iW, null !== UW && void 0 !== UW && UW[WW]) || (null === (OW = JW.current) || void 0 === OW || OW.setCosmetic(WW, iW), fW())
          };
          return {
            updateCosmetic: WW,
            setAllCosmetics(iW) {
              for (const mW of NW.p) {
                var OW;
                WW(mW, null !== (OW = iW[mW]) && void 0 !== OW ? OW : (0, PW.d)(mW))
              }
            },
            isReady() {
              var WW, iW;
              return null !== (WW = null === (iW = JW.current) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
            },
            resetCamera() {
              var WW;
              null === (WW = JW.current) || void 0 === WW || WW.resetCamera()
            },
            setOrbit(WW) {
              var iW;
              null === (iW = JW.current) || void 0 === iW || iW.setOrbit(WW)
            },
            turnCamera(WW) {
              var iW;
              const OW = LW.d[jW];
              null === (iW = JW.current) || void 0 === iW || iW.setOrbit({
                ...OW,
                yaw: OW.yaw + WW
              })
            },
            async ensureReadyForCapture(WW) {
              var iW;
              await (null === (iW = JW.current) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
            },
            getDevTools() {
              var WW;
              return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
            },
            setNametagShown(WW) {
              var iW, OW;
              VW.current = WW, null === (iW = JW.current) || void 0 === iW || iW.setNametag(WW && null !== (OW = DW.current) && void 0 !== OW ? OW : null)
            }
          }
        }), [UW, jW, fW]), (0, mW.useEffect)((() => {
          const WW = cW.b.register(bW);
          let iW = !0;
          const OW = WW => {
            const OW = JW.current,
              mW = LW.f.openCharacter(SW.current, jW);
            if (JW.current = mW, tW = mW, OW) {
              OW.close();
              const {
                width: WW,
                height: iW
              } = TW.current;
              WW > 0 && iW > 0 && mW.resize(WW, iW)
            }
            HW.current = {}, uW(!1), mW.ready.then((() => {
              if (iW && JW.current === mW)
                if (uW(!0), WW) {
                  mW.resetCamera();
                  for (const WW of NW.p) {
                    var OW;
                    mW.setCosmetic(WW, null !== (OW = hW.current[WW]) && void 0 !== OW ? OW : (0, PW.d)(WW))
                  }
                } else oW.current()
            })).catch((WW => {
              var OW;
              (console.error("Failed to set up the character preview", WW), iW && JW.current === mW) && (null === (OW = eW.current) || void 0 === OW || OW.call(eW))
            }))
          };
          OW(!1);
          const mW = {
            reopen: () => {
              OW(!0)
            }
          };
          return ZW.push(mW), () => {
            iW = !1, WW();
            const OW = JW.current;
            tW === OW && (OW.resetCamera(), tW = null), OW.close(), JW.current = null;
            const EW = ZW.indexOf(mW);
            if (ZW.splice(EW, 1), EW === ZW.length && EW > 0) {
              const WW = ZW[EW - 1];
              queueMicrotask((() => {
                ZW.at(-1) === WW && null === tW && LW.f.sharesCharacter() && WW.reopen()
              }))
            }
          }
        }), []), (0, mW.useEffect)((() => {
          YW <= 0 || yW <= 0 || JW.current.resize(YW, yW)
        }), [YW, yW]), (0, mW.useEffect)((() => {
          if (!nW) return;
          const WW = HW.current;
          for (const iW of NW.p) {
            const OW = null === UW || void 0 === UW ? void 0 : UW[iW],
              mW = WW[iW];
            OW && OW !== mW ? JW.current.setCosmetic(iW, OW) : !OW && mW && hW.current[iW] && JW.current.setCosmetic(iW, hW.current[iW])
          }
          HW.current = {
            ...UW
          }, pW.current = !0, fW()
        }), [UW, nW, fW]), (0, mW.useEffect)((() => {
          nW && JW.current.playEmote(null !== kW && void 0 !== kW ? kW : null)
        }), [kW, sW, nW]), (0, mW.useEffect)((() => {
          nW && VW.current && JW.current.setNametag(null !== KW && void 0 !== KW ? KW : null)
        }), [KW, nW]), (0, mW.useEffect)((() => {
          if (!nW || null === MW) return;
          const WW = JW.current,
            {
              pitch: iW,
              radius: OW
            } = LW.d[jW];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return WW.setOrbit({
            yaw: MW + xW,
            pitch: iW,
            radius: OW
          }), () => {
            tW === WW && WW.resetCamera()
          };
          const mW = performance.now();
          let EW = 0;
          const NW = PW => {
            JW.current === WW && (WW.setOrbit({
              yaw: MW + (PW - mW) / 6e3 * 2 * Math.PI,
              pitch: iW,
              radius: OW
            }), EW = requestAnimationFrame(NW))
          };
          return EW = requestAnimationFrame(NW), () => {
            cancelAnimationFrame(EW), tW === WW && WW.resetCamera()
          }
        }), [nW, MW]), (0, wW.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: SW
        })
      })))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
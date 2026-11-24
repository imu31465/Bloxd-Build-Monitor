export const id = 28;
export const ids = [28];
export const modules = {
  8895: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => HB,
      e: () => YB,
      h: () => iB
    });
    var TB = ZB(63),
      JB = ZB(4728),
      oB = ZB(1179),
      GB = ZB(1507),
      vB = ZB(24),
      kB = ZB(3605),
      cB = ZB(2333),
      nB = ZB(1300),
      hB = ZB(2696),
      zB = ZB(1995),
      FB = ZB(2054),
      NB = ZB(1248),
      gB = ZB(20),
      qB = ZB(1711),
      yB = ZB(1091),
      UB = ZB.n(yB),
      WB = ZB(8904),
      dB = ZB(8913),
      CB = ZB(8917),
      QB = ZB(8835),
      sB = ZB(8920),
      wB = (ZB(8927), ZB(1153));
    let OB = null;

    function YB() {
      return null !== OB
    }

    function iB() {
      return "pad" === OB
    }

    function pB() {
      return "inGame" === gB.d.get("gameState") && !(0, qB.n)()
    }

    function aB(BB) {
      return (0, dB.u)(BB, nB.o, dB.f, dB.j, dB.m)
    }
    const HB = (0, TB.memo)((function() {
      const {
        t: BB
      } = (0, NB.G)(), {
        userContext: IB
      } = (0, oB.d)(), [ZB, gB] = (0, TB.useState)(null), [yB, YB] = (0, TB.useState)(null), iB = (0, TB.useRef)(null), HB = (0, TB.useCallback)((BB => {
        iB.current = BB, YB(BB)
      }), []), MB = (0, TB.useRef)(0), jB = (0, TB.useRef)(null), PB = (0, TB.useRef)({
        x: 0,
        y: 0
      }), [RB, rB] = (0, TB.useState)(0), mB = (0, TB.useMemo)((() => function(BB) {
        const IB = [];
        for (let TB = 0; TB < nB.o; TB++) {
          var ZB;
          IB.push(null !== (ZB = BB[TB]) && void 0 !== ZB ? ZB : null)
        }
        return IB
      }((0, hB.h)(IB.getPlayerCosmetics().emote))), [IB, RB]);
      (0, FB.c)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.Ho)) && rB((BB => BB + 1))
      }));
      const XB = (0, TB.useRef)(!1),
        LB = (0, TB.useCallback)((function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, CB.h)(), XB.current = IB, PB.current = {
            x: 0,
            y: 0
          }, HB(null), gB(BB)
        }), [HB]),
        eB = (0, TB.useCallback)((() => {
          gB(null), HB(null), PB.current = {
            x: 0,
            y: 0
          }
        }), [HB]),
        uB = (0, TB.useCallback)((BB => {
          if (Date.now() < MB.current) return;
          const IB = (0, cB.j)(BB),
            ZB = !!IB.holdUntilMove,
            TB = ZB ? 600 : Math.ceil(1e3 * IB.animation.animation_length / cB.d) + 200;
          MB.current = Date.now() + TB, jB.current = BB, zB.gameBridge.send("playEmote", BB), zB.gameBridge.send("applyTemporaryThirdPerson", ZB ? {} : {
            durationMs: TB
          })
        }), []);
      (0, GB.d)("requestToggleEmoteWheel", (() => {
        null === ZB ? pB() && LB("click") : eB()
      })), (0, GB.d)("requestEmoteWheelHoldOpen", (() => {
        null === ZB && pB() && LB((0, WB.e)() ? "hold" : "click")
      })), (0, GB.d)("requestEmoteWheelPadOpen", (BB => {
        null !== ZB || !pB() || (0, QB.c)() || (0, sB.p)() || LB("pad", BB)
      })), (0, GB.d)("requestEmoteRepeatLast", (() => {
        if (null !== ZB || !pB() || (0, QB.c)() || (0, sB.p)()) return;
        const BB = jB.current;
        null !== BB && mB.includes(BB) ? uB(BB) : LB("pad", !0)
      }));
      const fB = () => {
        const BB = iB.current,
          IB = null !== BB ? mB[BB] : null;
        null !== IB && "pad" === ZB && Date.now() < MB.current || (eB(), null !== IB && uB(IB))
      };
      (0, GB.d)("emoteWheelPadAim", (BB => {
        if ("pad" !== ZB) return;
        const IB = (0, dB.F)(BB, nB.o, iB.current);
        HB(null !== IB && null !== mB[IB] ? IB : null)
      })), (0, GB.d)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== ZB || BB && XB.current || fB()
      })), (0, GB.d)("appManagerUpdated|activeInputDevice", (BB => {
        null !== ZB && "pad" === ZB !== ("gamepad" === BB) && eB()
      })), (0, TB.useLayoutEffect)((() => (OB = ZB, (0, kB.s)("emoteWheel", "pad" === ZB), vB.l.Gq(kB.j), () => {
        OB = null, (0, kB.s)("emoteWheel", !1), vB.l.Gq(kB.j)
      })), [ZB]), (0, GB.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZB && fB()
      })), (0, GB.d)("requestEmoteWheelClose", (() => {
        null !== ZB && eB()
      })), (0, GB.d)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && eB()
      }));
      const lB = () => {
        (0, qB.n)() && eB()
      };
      if ((0, GB.d)("appManagerUpdated|openEverythingMenuName", lB), (0, GB.d)("appManagerUpdated|openInGameMenuName", lB), (0, GB.d)("pointerLockUpdate", (BB => {
          BB || "hold" !== ZB || eB()
        })), (0, TB.useEffect)((() => {
          if (null === ZB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), eB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [ZB, eB]), (0, JB.e)(!0, "click" === ZB, "EmoteWheelOverlay"), (0, TB.useEffect)((() => {
          if ("hold" === ZB) return zB.gameBridge.send("holdEmoteWheel", !0), () => {
            zB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZB]), (0, TB.useEffect)((() => {
          if ("hold" !== ZB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            IB = dB.r * BB,
            TB = dB.p * BB,
            JB = BB => {
              let ZB = PB.current.x + BB.movementX,
                JB = PB.current.y + BB.movementY;
              const oB = Math.hypot(ZB, JB);
              if (oB > IB) {
                const BB = IB / oB;
                ZB *= BB, JB *= BB
              }
              PB.current = {
                x: ZB,
                y: JB
              }, HB(function(BB, IB, ZB, TB) {
                if (Math.hypot(BB, IB) < ZB) return null;
                const JB = (0, dB.v)(BB, IB, nB.o);
                return null === TB[JB] ? null : JB
              }(ZB, JB, TB, mB))
            };
          return document.addEventListener("mousemove", JB), () => {
            document.removeEventListener("mousemove", JB)
          }
        }), [ZB, mB, HB]), null === ZB) return null;
      const AB = "hold" === ZB || "pad" === ZB,
        tB = null !== yB ? mB[yB] : null,
        bB = null !== tB ? (0, cB.j)(tB).displayName : BB("emotes:pickEmote");
      return (0, wB.jsx)("div", {
        className: UB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && eB()
        },
        children: (0, wB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * dB.r + "rem",
            height: 2 * dB.r + "rem"
          },
          children: [(0, wB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${dB.o} ${dB.o}`,
            children: [mB.map(((IB, ZB) => {
              const TB = null !== IB,
                JB = AB && ZB === yB;
              return (0, wB.jsx)("path", {
                d: aB(ZB),
                className: UB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: JB,
                  EmoteWheelWedgeDisabled: !TB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== IB && (BB => {
                    eB(), uB(BB)
                  })(IB)
                },
                "aria-label": null !== IB ? (0, cB.j)(IB).displayName : BB("emotes:emptySlot")
              }, ZB)
            })), (0, wB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: dB.f,
              cy: dB.f,
              r: dB.m
            }), (0, wB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: dB.f,
              cy: dB.f,
              r: dB.j
            }), AB && null !== yB && (0, wB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: aB(yB)
            })]
          }), mB.map(((BB, IB) => {
            const ZB = null !== BB,
              TB = AB && IB === yB,
              JB = (0, dB.z)(IB, nB.o),
              oB = dB.b * Math.cos(JB),
              GB = dB.b * Math.sin(JB);
            return (0, wB.jsx)("div", {
              className: UB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: TB,
                EmoteWheelSlotIconDisabled: !ZB
              }),
              style: {
                left: `calc(50% + ${oB}rem)`,
                top: `calc(50% + ${GB}rem)`,
                backgroundImage: ZB ? `url(/textures/charSkins/previews/emote_${BB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, IB)
          })), (0, wB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: bB
          })]
        })
      })
    }))
  },
  9001: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => yB,
      h: () => dB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(2590),
      GB = ZB(3589);
    const vB = 6,
      kB = 4;

    function cB(BB) {
      let {
        slotsLeft: IB,
        slotsRight: ZB,
        width: TB,
        height: JB,
        zoneRight: oB,
        rowTop: GB,
        besideBottom: cB,
        obstacles: nB
      } = BB;
      const hB = Math.max(0, Math.floor(ZB - IB - TB)),
        zB = null === oB ? 0 : Math.min(hB, Math.max(0, Math.ceil(oB + vB - IB))),
        FB = IB + zB - vB,
        NB = IB + zB + TB + vB,
        gB = nB.filter((BB => BB.left < NB && BB.right > FB));
      let qB = cB;
      for (let vB = 0; vB <= gB.length; vB++) {
        const BB = gB.filter((BB => BB.top < qB + kB && BB.bottom > qB - JB - kB));
        if (0 === BB.length) break;
        qB = Math.min(...BB.map((BB => BB.top))) - kB
      }
      return {
        shift: zB,
        rise: qB === cB ? null : Math.ceil(GB - qB)
      }
    }

    function nB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function hB(BB) {
      return function(BB) {
        const IB = [],
          ZB = (BB, TB) => {
            const JB = BB.getBoundingClientRect();
            if (JB.width > 0 && JB.height > 0) IB.push(BB);
            else if (TB < 2)
              for (const IB of Array.from(BB.children)) ZB(IB, TB + 1)
          };
        for (const TB of BB) ZB(TB, 0);
        return IB
      }(nB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function zB(BB) {
      var IB;
      const ZB = BB.getBoundingClientRect();
      if (0 === ZB.width) return null;
      const TB = null === (IB = BB.parentElement) || void 0 === IB ? void 0 : IB.getBoundingClientRect();
      return TB && TB.width > 0 ? Math.min(ZB.right, TB.left + TB.width * FB) : ZB.right
    }
    const FB = .35,
      NB = new WeakMap,
      gB = ".BottomScreenMessage, [role='status']",
      qB = new WeakMap;

    function yB(BB) {
      UB(BB) && UB(BB)
    }

    function UB(BB) {
      var IB, ZB, TB, JB, oB, GB;
      const vB = BB.documentElement.classList;
      if (!vB.contains("TouchHotbar") || vB.contains("TouchHotbarKeysAbove") || vB.contains("HudMove-inventory") || vB.contains("HudLocked-inventory") || null === (IB = BB.defaultView) || void 0 === IB || null === (ZB = IB.matchMedia) || void 0 === ZB || !ZB.call(IB, WB).matches) return !1;
      const nB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        FB = null === nB || void 0 === nB ? void 0 : nB.parentElement,
        yB = null === nB || void 0 === nB ? void 0 : nB.closest(".BottomMiddleElements"),
        UB = null === yB || void 0 === yB ? void 0 : yB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!nB || !FB || !yB || !UB || yB.classList.contains("TouchInventoryOpen")) return !1;
      const dB = nB.getBoundingClientRect();
      if (0 === dB.width) return !1;
      const CB = BB.querySelector(".JoystickZone"),
        QB = UB.getBoundingClientRect(),
        sB = FB.getBoundingClientRect().top,
        wB = null === (TB = yB.querySelector(":scope > .AuraBarWrapper")) || void 0 === TB ? void 0 : TB.getBoundingClientRect(),
        OB = hB(yB),
        YB = {
          slotsLeft: QB.left,
          slotsRight: QB.right,
          width: dB.width,
          height: dB.height,
          zoneRight: CB ? zB(CB) : null,
          rowTop: sB,
          besideBottom: (wB && wB.height > 0 ? wB.top : sB) - kB,
          obstacles: OB.map((BB => BB.getBoundingClientRect()))
        },
        iB = cB({
          ...YB,
          obstacles: OB.filter((BB => !BB.matches(gB))).map((BB => BB.getBoundingClientRect()))
        }),
        pB = BB.defaultView,
        aB = `${null===pB||void 0===pB?void 0:pB.innerWidth}x${null===pB||void 0===pB?void 0:pB.innerHeight}:${iB.shift}:${Math.round(dB.width)}:${Math.round(sB)}`,
        HB = qB.get(yB),
        MB = (null === HB || void 0 === HB ? void 0 : HB.at) === aB ? (jB = HB.rise, PB = iB.rise, null === jB ? PB : null === PB ? jB : Math.max(jB, PB)) : iB.rise;
      var jB, PB;
      const RB = cB({
          ...YB,
          besideBottom: null === MB ? YB.besideBottom : sB - MB
        }),
        rB = {
          shift: iB.shift,
          rise: null !== (JB = RB.rise) && void 0 !== JB ? JB : MB
        },
        mB = NB.get(yB);
      return (null !== (oB = null === mB || void 0 === mB ? void 0 : mB.shift) && void 0 !== oB ? oB : 0) === rB.shift && qB.set(yB, {
        at: aB,
        rise: MB
      }), (null === mB || void 0 === mB ? void 0 : mB.shift) !== rB.shift && yB.style.setProperty("--touch-shop-above-shift", `${rB.shift}px`), (null === mB || void 0 === mB ? void 0 : mB.rise) !== rB.rise && (yB.classList.toggle("ShopAboveUp", null !== rB.rise), null === rB.rise ? yB.style.removeProperty("--touch-shop-above-rise") : yB.style.setProperty("--touch-shop-above-rise", `${rB.rise}px`)), NB.set(yB, rB), (null !== (GB = null === mB || void 0 === mB ? void 0 : mB.shift) && void 0 !== GB ? GB : 0) !== rB.shift
    }
    const WB = "(orientation: landscape) and (max-height: 500px)";

    function dB(BB, IB, ZB) {
      (0, TB.useLayoutEffect)((() => {
        var IB;
        const TB = null === (IB = BB.current) || void 0 === IB ? void 0 : IB.closest(".BottomMiddleElements");
        if (!TB || ZB) return;
        const vB = new ResizeObserver((() => {
            FB(!1)
          })),
          kB = () => {
            vB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const IB of [BB, TB, TB.querySelector(".HotBarGameItemsContainer"), ...hB(TB)]) IB && vB.observe(IB)
          };
        let cB = null,
          zB = !1;
        const FB = BB => {
            zB ||= BB, cB ??= requestAnimationFrame((() => {
              cB = null, zB && (zB = !1, kB()), yB(document)
            }))
          },
          NB = new MutationObserver((() => {
            FB(!0)
          }));
        NB.observe(TB, {
          childList: !0
        });
        for (const BB of nB(TB)) NB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        yB(document), kB();
        const gB = () => {
            FB(!0)
          },
          qB = [(0, JB.p)(oB.e, gB), (0, JB.p)(GB.e, gB)];
        return () => {
          null !== cB && cancelAnimationFrame(cB), vB.disconnect(), NB.disconnect();
          for (const BB of qB) BB()
        }
      }), [BB, IB, ZB])
    }
  },
  5143: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB,
      h: () => WB,
      j: () => gB,
      m: () => UB
    });
    var TB = ZB(63),
      JB = ZB(5150),
      oB = ZB(4545),
      GB = ZB(1421),
      vB = ZB(5177),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1403),
      hB = ZB(1805),
      zB = ZB(5186),
      FB = ZB(1153);

    function NB(BB) {
      let {
        label: IB,
        onClick: ZB,
        checked: TB,
        circleInfoText: JB,
        className: vB,
        disabled: kB,
        note: nB
      } = BB;
      return (0, FB.jsxs)("div", {
        "aria-disabled": kB || void 0,
        "data-pad-focusable": !0,
        className: cB()("SettingBox CheckboxContainer", {
          [vB]: vB,
          SettingBoxDisabled: kB
        }),
        onClick: () => {
          kB || ZB(!TB)
        },
        children: [(0, FB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, FB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, FB.jsx)(oB.d, {
              className: "SettingsCheckbox",
              checked: TB,
              disabled: kB,
              onChange: () => {}
            })
          }), (0, FB.jsxs)("div", {
            className: "CheckboxText",
            children: [IB, JB && (0, FB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, FB.jsx)(GB.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: JB
              })
            })]
          })]
        }), nB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: nB
        })]
      })
    }

    function gB(BB) {
      let {
        name: IB,
        onChange: ZB,
        min: JB,
        max: oB,
        step: vB,
        initValue: kB,
        circleInfoText: nB,
        format: hB,
        className: zB,
        padStep: NB,
        disabled: gB = !1,
        selectableMax: qB,
        cappedNote: UB,
        onChangeComplete: WB
      } = BB;
      const [dB, CB] = (0, TB.useState)(kB), QB = (0, TB.useRef)(kB);
      (0, TB.useEffect)((() => {
        QB.current = kB, CB(kB)
      }), [kB]);
      const sB = void 0 !== qB && qB < oB,
        wB = sB ? {
          "--slider-selectable": (qB - JB) / (oB - JB)
        } : void 0;
      return (0, FB.jsxs)("div", {
        className: cB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: gB,
          SliderCapped: sB
        }),
        style: wB,
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [`${IB}: ${hB?hB(dB):dB}`, nB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: nB
          })]
        }), (0, FB.jsx)("div", {
          className: "SliderDiv",
          children: (0, FB.jsx)(yB, {
            value: dB,
            min: JB,
            max: oB,
            step: vB,
            onChange: BB => {
              if (sB && BB >= qB && dB === qB) return;
              const IB = sB ? Math.min(BB, qB) : BB;
              QB.current = IB, CB(IB), ZB(IB)
            },
            onChangeComplete: WB && (() => {
              WB(QB.current)
            }),
            format: hB,
            padStep: NB,
            disabled: gB
          })
        }), sB && UB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: UB
        })]
      })
    }
    const qB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yB(BB) {
      var IB;
      let {
        value: ZB,
        min: oB,
        max: GB,
        step: vB,
        onChange: kB,
        orientation: cB,
        reverse: nB,
        setIsChanging: hB,
        tooltip: NB,
        labels: gB,
        handleLabel: yB,
        format: UB,
        onChangeStart: WB,
        onChangeComplete: dB,
        padStep: CB,
        disabled: QB = !1
      } = BB;
      const sB = (0, TB.useRef)(null),
        wB = (0, TB.useRef)(null);
      (0, TB.useLayoutEffect)((() => {
        var BB, IB, ZB;
        const TB = null !== (BB = null === (IB = sB.current) || void 0 === IB ? void 0 : IB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === TB || void 0 === TB || TB.setAttribute("data-pad-slider", ""), null === TB || void 0 === TB || TB.setAttribute("data-pad-focusable", ""), null === TB || void 0 === TB || null === (ZB = TB.querySelector(".rangeslider__handle")) || void 0 === ZB || ZB.setAttribute("data-pad-slider-handle", ""), wB.current = TB
      }), []), (0, TB.useLayoutEffect)((() => {
        var BB, IB;
        QB ? null === (BB = wB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (IB = wB.current) || void 0 === IB || IB.removeAttribute("aria-disabled")
      }), [QB]);
      const OB = (null !== (IB = String(vB).split(".")[1]) && void 0 !== IB ? IB : "").length,
        YB = BB => {
          const IB = Number((Math.round((BB - oB) / vB) * vB + oB).toFixed(OB));
          return Math.min(GB, Math.max(oB, IB))
        },
        iB = (0, TB.useRef)(dB);
      iB.current = dB, (0, TB.useEffect)((() => {
        const BB = sB.current;
        if (!BB) return;
        const IB = BB => {
          var IB;
          qB.has(BB.key) && (null === (IB = iB.current) || void 0 === IB || IB.call(iB))
        };
        return BB.addEventListener("keyup", IB), () => {
          BB.removeEventListener("keyup", IB)
        }
      }), []);
      const pB = (0, TB.useRef)(!1);
      return (0, zB.f)(wB, {
        adjust: BB => {
          if (QB) return;
          const IB = null !== CB && void 0 !== CB ? CB : Math.max(vB, Math.round((GB - oB) / 20 / vB) * vB),
            TB = YB(ZB + BB * IB * (nB ? -1 : 1));
          TB !== ZB && (null === WB || void 0 === WB || WB(), kB(TB), null === dB || void 0 === dB || dB())
        },
        setFraction: BB => {
          if (QB) return;
          const IB = YB(oB + (nB ? 1 - BB : BB) * (GB - oB));
          IB !== ZB && (pB.current || (pB.current = !0, null === WB || void 0 === WB || WB()), kB(IB))
        },
        endDrag: () => {
          pB.current && (pB.current = !1, null === dB || void 0 === dB || dB())
        }
      }), (0, FB.jsx)("div", {
        ref: sB,
        style: {
          display: "contents"
        },
        children: (0, FB.jsx)(JB.d, {
          value: ZB,
          min: oB,
          max: GB,
          step: vB,
          onChange: kB,
          orientation: cB,
          reverse: nB,
          tooltip: NB,
          labels: gB,
          handleLabel: yB,
          format: UB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === hB || void 0 === hB || hB(!0)
          },
          onChangeComplete: () => {
            null === hB || void 0 === hB || hB(!1), null === dB || void 0 === dB || dB()
          }
        })
      })
    }
    async function UB() {
      const BB = nB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, hB.reloadBloxd)()
    }

    function WB(BB) {
      let {
        label: IB,
        options: ZB,
        value: TB,
        onChange: JB,
        circleInfoText: oB
      } = BB;
      return (0, FB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [IB, oB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, FB.jsx)(vB.d, {
          ariaLabel: IB,
          options: ZB,
          value: TB,
          onChange: JB
        })]
      })
    }
  },
  5177: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1153);

    function GB(BB) {
      let {
        options: IB,
        value: ZB,
        onChange: TB,
        ariaLabel: GB,
        className: vB,
        reselectable: kB = !1,
        keepsFocus: cB = !1,
        padTabs: nB
      } = BB;
      const hB = void 0 !== nB;
      return (0, oB.jsx)("div", {
        className: JB()("SegmentedToggle", vB),
        role: "group",
        "aria-label": GB,
        "data-pad-tabs": nB,
        children: IB.map((BB => {
          const IB = BB.value === ZB;
          return (0, oB.jsx)("button", {
            type: "button",
            "aria-pressed": IB,
            "data-pad-tab": hB || void 0,
            "data-pad-selected": hB && IB ? "true" : void 0,
            "data-pad-default-focus": hB && IB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: JB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: IB
            }),
            onMouseDown: cB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              IB && !kB || TB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  8868: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      c: () => oB
    });
    var TB = ZB(2074);
    const JB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      oB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && JB.test(BB.keycode),
      GB = BB => "Space" === BB ? "_" : TB.h[BB]
  },
  8904: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(20);

    function JB() {
      return !TB.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8997: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => zB,
      B: () => cB,
      D: () => NB,
      F: () => oB,
      c: () => JB,
      d: () => vB,
      g: () => TB,
      k: () => gB,
      l: () => FB,
      n: () => nB,
      r: () => GB,
      s: () => qB,
      v: () => hB,
      z: () => kB
    });
    const TB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function JB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function oB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, IB) => ({
        left: Math.min(BB.left, IB.left),
        top: Math.min(BB.top, IB.top),
        right: Math.max(BB.right, IB.right),
        bottom: Math.max(BB.bottom, IB.bottom)
      })))
    }

    function GB(BB, IB) {
      const ZB = Math.max(0, (IB - (BB.right - BB.left)) / 2),
        TB = Math.max(0, (IB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - ZB,
        top: BB.top - TB,
        right: BB.right + ZB,
        bottom: BB.bottom + TB
      }
    }

    function vB(BB, IB) {
      return IB.x >= BB.left && IB.x <= BB.right && IB.y >= BB.top && IB.y <= BB.bottom
    }

    function kB(BB, IB, ZB) {
      let TB = null,
        oB = 1 / 0;
      for (const {
          id: JB,
          box: GB
        }
        of IB) {
        const IB = (GB.right - GB.left) * (GB.bottom - GB.top);
        vB(GB, BB) && IB < oB && (oB = IB, TB = JB)
      }
      if (null !== TB) return TB;
      let kB = 1 / 0;
      for (const {
          id: cB,
          box: nB
        }
        of IB) {
        if (!vB(GB(nB, ZB), BB)) continue;
        const IB = JB(nB),
          oB = Math.hypot(BB.x - IB.x, BB.y - IB.y);
        oB < kB && (kB = oB, TB = cB)
      }
      return TB
    }

    function cB(BB, IB, ZB) {
      return {
        left: ZB.left,
        top: ZB.top,
        right: BB - ZB.right,
        bottom: IB - ZB.bottom
      }
    }

    function nB(BB, IB, ZB, TB) {
      const JB = (BB, IB, ZB) => Math.max(Math.min(IB, 0), Math.min(Math.max(ZB, 0), BB));
      return {
        x: JB(IB, TB.left - BB.left, TB.right - BB.right),
        y: JB(ZB, TB.top - BB.top, TB.bottom - BB.bottom)
      }
    }

    function hB(BB, IB, ZB, TB, JB) {
      const oB = BB.dx * TB + IB,
        GB = BB.dy * JB + ZB,
        vB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: vB(oB / TB),
        dy: vB(GB / JB)
      }
    }

    function zB(BB, IB, ZB, TB) {
      return IB <= 0 || ZB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / IB, TB / ZB))
    }

    function FB(BB, IB, ZB) {
      return Math.min(BB.right, IB.right) - Math.max(BB.left, IB.left) > ZB && Math.min(BB.bottom, IB.bottom) - Math.max(BB.top, IB.top) > ZB
    }

    function NB(BB, IB) {
      const ZB = (BB, IB, ZB, TB) => IB - BB > TB - ZB ? ZB - BB > IB - TB ? TB - IB : ZB - BB : BB < ZB ? ZB - BB : IB > TB ? TB - IB : 0;
      return {
        x: ZB(BB.left, BB.right, IB.left, IB.right),
        y: ZB(BB.top, BB.bottom, IB.top, IB.bottom)
      }
    }

    function gB(BB, IB, ZB) {
      return FB(BB, {
        left: 0,
        top: 0,
        right: IB,
        bottom: ZB
      }, 0)
    }

    function qB(BB, IB) {
      let {
        avoid: ZB = null,
        bounds: TB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, JB = 0, oB = 1 / 0;
      return BB.forEach(((BB, GB) => {
        const vB = IB.filter((IB => FB(BB, IB, 0))).length,
          kB = null !== TB && (BB.left < TB.left || BB.top < TB.top || BB.right > TB.right || BB.bottom > TB.bottom),
          cB = vB + (ZB && FB(BB, ZB, 0) ? 1e3 : 0) + (kB ? 1e6 : 0);
        cB < oB && (JB = GB, oB = cB)
      })), JB
    }
  },
  8999: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => kB,
      e: () => vB,
      i: () => oB,
      m: () => JB,
      o: () => GB,
      q: () => hB,
      u: () => nB,
      w: () => cB
    });
    var TB = ZB(2555);
    const JB = ["J", "C", "A", "P", "U", "X", "G"],
      oB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function GB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const vB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: TB.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function kB(BB, IB, ZB) {
      const TB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!TB) return vB;
      const oB = {},
        GB = {};
      for (const vB of JB) {
        const BB = TB.querySelector(`.TouchSlot${vB} > .TouchKey`);
        if (BB) {
          var kB, cB;
          oB[vB] = BB.cloneNode(!0);
          const IB = (null !== (kB = null === (cB = BB.querySelector(".TouchKeyLabel")) || void 0 === cB ? void 0 : cB.textContent) && void 0 !== kB ? kB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          IB && (GB[vB] = IB)
        }
      }
      const nB = IB => {
          const ZB = BB.querySelector(`.InGameUi ${IB}`);
          return null !== ZB && !ZB.classList.contains("Hidden")
        },
        hB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(oB).length > 0 ? oB : null,
        names: GB,
        shop: nB(".TouchInventoryKey.ShopKey"),
        bag: nB(".TouchInventoryKey.BagKey"),
        sprint: nB(".TouchSprintHit"),
        items: hB.length > 0 ? hB : null,
        rowIcons: IB,
        pinnedIcons: ZB
      }
    }

    function cB(BB, IB) {
      const ZB = {};
      for (const TB of [...GB(IB), "G"]) {
        const IB = BB.names[TB];
        IB && (ZB[oB[TB]] = IB)
      }
      return ZB
    }

    function nB(BB, IB) {
      const {
        faces: ZB
      } = BB;
      if (null === ZB) return [];
      const TB = new Set(Object.keys(ZB).map((BB => oB[BB])));
      return GB(IB).filter((BB => !TB.has(oB[BB])))
    }

    function hB(BB, IB) {
      BB.replaceChildren(...[...IB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  8913: (BB, IB, ZB) => {
    ZB.d(IB, {
      D: () => zB,
      F: () => FB,
      b: () => oB,
      f: () => vB,
      j: () => cB,
      m: () => kB,
      o: () => GB,
      p: () => JB,
      r: () => TB,
      u: () => NB,
      v: () => hB,
      z: () => nB
    });
    const TB = 14,
      JB = 6,
      oB = (TB + JB) / 2,
      GB = 200,
      vB = GB / 2,
      kB = GB / 2 - 1,
      cB = JB / TB * (GB / 2),
      nB = (BB, IB) => -Math.PI / 2 + 2 * BB * Math.PI / IB,
      hB = (BB, IB, ZB) => {
        const TB = 2 * Math.PI / ZB;
        return (Math.round((Math.atan2(IB, BB) + Math.PI / 2) / TB) % ZB + ZB) % ZB
      },
      zB = .5,
      FB = (BB, IB, ZB) => Math.hypot(BB.x, BB.y) < zB ? ZB : hB(BB.x, BB.y, IB),
      NB = (BB, IB, ZB, TB, JB) => {
        const oB = Math.PI / IB,
          GB = nB(BB, IB),
          vB = GB - oB,
          kB = GB + oB,
          cB = (BB, IB) => `${ZB+BB*Math.cos(IB)} ${ZB+BB*Math.sin(IB)}`;
        return [`M ${cB(TB,vB)}`, `L ${cB(JB,vB)}`, `A ${JB} ${JB} 0 0 1 ${cB(JB,kB)}`, `L ${cB(TB,kB)}`, `A ${TB} ${TB} 0 0 0 ${cB(TB,vB)}`, "Z"].join(" ")
      }
  },
  8940: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(63),
      JB = ZB(8885),
      oB = ZB(2526);

    function GB() {
      const BB = (0, oB.d)("shopInfo"),
        [, IB] = (0, TB.useReducer)((BB => BB + 1), 0);
      return (0, oB.c)("shopInfo", IB), !(0, JB.d)(BB)
    }
  },
  8297: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      e: () => oB,
      h: () => zB,
      i: () => hB,
      m: () => cB,
      p: () => vB,
      t: () => TB,
      x: () => FB,
      z: () => NB
    });
    const TB = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      JB = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: TB
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      oB = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      GB = ["pickBlock", "perspective"],
      vB = BB => GB.includes(BB) ? GB : [BB],
      kB = Object.fromEntries(JB.flatMap((BB => {
        let {
          group: IB,
          actions: ZB
        } = BB;
        return ZB.map((BB => [BB, IB]))
      }))),
      cB = BB => kB[BB],
      nB = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      hB = BB => {
        var IB;
        return [cB(BB), ...null !== (IB = nB[BB]) && void 0 !== IB ? IB : []]
      },
      zB = new Set(["menu", "inventory", "keyboard"]),
      FB = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      NB = new Set(["forward", "backward", "left", "right"])
  },
  8291: (BB, IB, ZB) => {
    ZB.d(IB, {
      C: () => wB,
      E: () => WB,
      H: () => YB,
      I: () => nB,
      M: () => OB,
      O: () => aB,
      b: () => UB,
      f: () => CB,
      g: () => zB,
      j: () => FB,
      n: () => MB,
      p: () => pB,
      r: () => iB,
      v: () => dB,
      y: () => HB
    });
    var TB = ZB(8297),
      JB = ZB(8303),
      oB = ZB(8282),
      GB = ZB(8316);
    const vB = BB => "pickBlock" === BB ? "perspective" : BB,
      kB = (BB, IB) => {
        var ZB;
        const JB = vB(IB);
        return null !== (ZB = BB[JB]) && void 0 !== ZB ? ZB : TB.e[JB]
      },
      cB = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((BB => {
        let [IB, ZB] = BB;
        return [
          [IB, ZB],
          [ZB, IB]
        ]
      }))),
      nB = (BB, IB) => null !== BB && void 0 !== BB ? BB : "nintendo" === IB,
      hB = BB => nB((0, JB.i)().swapConfirmBack, (0, JB.l)()) && cB.get(BB) || BB,
      zB = BB => kB((0, JB.i)().bindings, hB(BB)),
      FB = BB => TB.e[hB(BB)],
      NB = Object.keys(TB.e),
      gB = BB => "gameplay" === (0, TB.m)(BB) ? ["gameplay"] : (0, TB.i)(BB),
      qB = (BB, IB) => {
        const ZB = gB(IB);
        return gB(BB).some((BB => ZB.includes(BB)))
      },
      yB = (BB, IB, ZB) => {
        const JB = kB(BB, IB),
          GB = new Set((0, TB.p)(IB)),
          cB = [...GB];
        for (let TB = cB.pop(); TB; TB = cB.pop())
          for (const IB of NB) {
            const oB = kB(BB, IB);
            GB.has(IB) || oB !== ZB && oB !== JB || !qB(TB, IB) || (GB.add(IB), cB.push(IB))
          }
        const nB = {
          ...BB
        };
        for (const hB of GB) {
          const IB = kB(BB, hB) === JB ? ZB : JB,
            GB = (0, TB.i)(hB).some((BB => TB.h.has(BB)));
          if ((0, oB.F)(IB) && GB) return null;
          nB[vB(hB)] = IB
        }
        for (const oB of Object.keys(nB)) nB[oB] === TB.e[oB] && delete nB[oB];
        return nB
      },
      UB = (BB, IB) => null !== yB((0, JB.i)().bindings, hB(BB), IB),
      WB = (BB, IB) => {
        if (zB(BB) === IB) return !0;
        const ZB = yB((0, JB.i)().bindings, hB(BB), IB);
        return !!ZB && ((0, JB.o)({
          bindings: ZB
        }), !0)
      },
      dB = (BB, IB) => {
        const ZB = (0, TB.p)(IB);
        return NB.filter((IB => vB(IB) === IB && !ZB.includes(IB) && kB(BB, hB(IB)) !== zB(IB)))
      },
      CB = ["southpaw", "triggersSwapped"],
      QB = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      sB = BB => Object.keys(QB[BB]),
      wB = (BB, IB) => "southpaw" === BB ? IB.swapSticks : sB(BB).every((ZB => kB(IB.bindings, ZB) === QB[BB][ZB])),
      OB = (BB, IB) => {
        const ZB = (0, JB.i)();
        let oB = ZB.bindings;
        for (const JB of sB(BB)) {
          const ZB = IB ? QB[BB][JB] : TB.e[JB];
          if (oB = yB(oB, JB, ZB), !oB) return !1
        }
        return (0, JB.o)({
          swapSticks: "southpaw" === BB ? IB : ZB.swapSticks,
          bindings: oB
        }), !0
      },
      YB = () => {
        (0, JB.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      iB = () => (0, JB.i)().swapSticks ? "RightStick" : "LeftStick",
      pB = () => (0, JB.i)().swapSticks ? "LeftStick" : "RightStick",
      aB = BB => (0, JB.i)().swapSticks && (0, oB.F)(BB),
      HB = BB => aB(BB) ? iB() : pB(),
      MB = BB => {
        if (TB.z.has(BB)) return iB();
        const IB = TB.x[BB];
        return IB && ("leaderboard" !== IB || (0, GB.f)(BB, (0, GB.b)())) ? zB(IB) : null
      }
  },
  8274: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ControllerCategory: () => Cv,
      ControllerGlyph: () => QJ,
      ControllerRoot: () => CG,
      PadLobbyShortcuts: () => XG,
      PadSneakChip: () => pG,
      PadTooltip: () => HG,
      attachPressToContinue: () => bG,
      getBoundButton: () => nB.g,
      getControllerSettings: () => zB.i,
      getGlyphForNoaAction: () => nB.n,
      getInventoryCursorState: () => sv,
      getMenuShortcutButton: () => AZ,
      getPadGlyphIconName: () => OG,
      getPadGlyphIconUrl: () => YG,
      getPadRepeatTiming: () => gB.g,
      handOverPadFocus: () => Ov,
      hasActivePad: () => Qv,
      isPadSteppingSlots: () => wv
    });
    const TB = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var JB = ZB(1248),
      oB = ZB(1469),
      GB = ZB(8277),
      vB = ZB(82),
      kB = ZB(20),
      cB = ZB(24),
      nB = ZB(8291),
      hB = ZB(8325),
      zB = ZB(8303),
      FB = ZB(8334),
      NB = ZB(8282),
      gB = ZB(8766),
      qB = ZB(8771),
      yB = ZB(1738);
    const UB = (BB, IB, ZB) => Math.max(IB, Math.min(ZB, BB)),
      WB = BB => Math.min(BB.width, BB.height) / 720,
      dB = BB => Math.max(.15, BB);
    class CB {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(BB, IB) {
        const ZB = Math.hypot(BB.x, BB.y) >= (BB => Math.max(.3, BB))(IB);
        return this.locked ? (this.locked = ZB, !1) : ZB
      }
    }
    const QB = (BB, IB) => {
        const ZB = UB(IB.dtMs, 0, 100),
          TB = ZB / 1e3,
          JB = WB(IB.viewport) * (IB.cursorSpeedPercent / 100),
          oB = (0, NB.i)(IB.stick, dB(IB.moveDeadzone)),
          GB = Math.hypot(oB.x, oB.y),
          vB = ((BB, IB, ZB) => {
            if (IB < .3) return 0;
            const TB = ZB / 350;
            return IB >= .85 ? Math.min(1, BB + TB) : Math.max(0, BB - TB)
          })(BB.speedRamp, GB, ZB);
        let kB = BB.x,
          cB = BB.y;
        if (GB > 0) {
          const BB = .45 + .55 * vB,
            ZB = IB.context.overInteractive ? .45 : 1,
            nB = 1400 * (BB => {
              const IB = UB(BB, 0, 1);
              return .3 * IB + .7 * IB * IB
            })(GB) * JB * BB * ZB;
          kB += oB.x / GB * nB * TB, cB += oB.y / GB * nB * TB
        }
        const nB = Math.hypot(IB.dpad.x, IB.dpad.y);
        if (nB > 0) {
          const BB = 500 * JB;
          kB += IB.dpad.x / nB * BB * TB, cB += IB.dpad.y / nB * BB * TB
        }
        const hB = IB.context.magnetTarget;
        if (hB && GB < .3 && 0 === nB) {
          const BB = ((BB, IB, ZB, TB, JB) => {
            const oB = IB.x - BB.x,
              GB = IB.y - BB.y,
              vB = Math.hypot(oB, GB);
            if (0 === vB) return {
              x: 0,
              y: 0
            };
            const kB = Math.min(vB, JB * (1 - TB / .3));
            let cB = oB / vB * kB,
              nB = GB / vB * kB;
            if (TB > 0) {
              const BB = ZB.x / TB,
                IB = ZB.y / TB,
                JB = cB * BB + nB * IB;
              JB < 0 && (cB -= JB * BB, nB -= JB * IB)
            }
            return {
              x: cB,
              y: nB
            }
          })({
            x: kB,
            y: cB
          }, hB, oB, GB, 120 * WB(IB.viewport) * TB);
          kB += BB.x, cB += BB.y
        }
        return {
          x: UB(kB, 0, Math.max(0, IB.viewport.width - 1)),
          y: UB(cB, 0, Math.max(0, IB.viewport.height - 1)),
          speedRamp: vB
        }
      },
      sB = BB => {
        const IB = (0, NB.i)(BB, .2);
        return 0 !== IB.x || 0 !== IB.y
      },
      wB = (BB, IB) => {
        const ZB = (0, NB.i)(BB, .2),
          TB = Math.hypot(ZB.x, ZB.y);
        if (0 === TB) return {
          x: 0,
          y: 0
        };
        const JB = TB * TB * 1600,
          oB = UB(IB, 0, 100) / 1e3;
        return {
          x: ZB.x / TB * JB * oB,
          y: ZB.y / TB * JB * oB
        }
      },
      OB = (BB, IB) => "y" === IB ? BB.scrollHeight > BB.clientHeight + 1 : BB.scrollWidth > BB.clientWidth + 1,
      YB = (BB, IB) => {
        if (!OB(BB, IB)) return !1;
        const ZB = getComputedStyle(BB),
          TB = "y" === IB ? ZB.overflowY : ZB.overflowX;
        return "auto" === TB || "scroll" === TB
      },
      iB = (BB, IB, ZB) => {
        for (let oB = BB instanceof HTMLElement ? BB : null !== (TB = null === BB || void 0 === BB ? void 0 : BB.parentElement) && void 0 !== TB ? TB : null; oB; oB = oB.parentElement) {
          var TB;
          if (YB(oB, IB)) return oB;
          if (oB === ZB) return null
        }
        if (ZB) return null;
        const JB = document.scrollingElement;
        return JB instanceof HTMLElement && OB(JB, IB) ? JB : null
      },
      pB = new WeakMap,
      aB = (BB, IB) => {
        const ZB = performance.now(),
          TB = pB.get(BB);
        if (TB && TB.axis === IB && ZB - TB.atMs < 500 && (!TB.container || TB.container.isConnected)) return TB.container;
        const JB = HB(BB, IB);
        return pB.set(BB, {
          axis: IB,
          atMs: ZB,
          container: JB
        }), JB
      },
      HB = (BB, IB) => {
        let ZB = YB(BB, IB) ? BB : null,
          TB = ZB ? ZB.clientWidth * ZB.clientHeight : 0;
        for (const JB of BB.querySelectorAll("*")) {
          const BB = JB.clientWidth * JB.clientHeight;
          BB > TB && YB(JB, IB) && (ZB = JB, TB = BB)
        }
        return ZB
      },
      MB = (BB, IB, ZB) => "y" === IB ? ZB < 0 ? BB.scrollTop > 0 : BB.scrollTop + BB.clientHeight < BB.scrollHeight - 1 : ZB < 0 ? BB.scrollLeft > 0 : BB.scrollLeft + BB.clientWidth < BB.scrollWidth - 1,
      jB = (BB, IB, ZB) => {
        "y" === IB ? BB.scrollBy({
          top: ZB,
          behavior: "instant"
        }) : BB.scrollBy({
          left: ZB,
          behavior: "instant"
        })
      },
      PB = BB => {
        if (!BB || BB === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const IB = BB.getBoundingClientRect(),
          ZB = Math.max(0, IB.left),
          TB = Math.max(0, IB.top);
        return new DOMRect(ZB, TB, Math.min(window.innerWidth, IB.right) - ZB, Math.min(window.innerHeight, IB.bottom) - TB)
      },
      RB = (BB, IB) => BB.left < IB.right && IB.left < BB.right && BB.top < IB.bottom && IB.top < BB.bottom;
    var rB = ZB(63),
      mB = ZB(1091),
      XB = ZB.n(mB),
      LB = ZB(1153);
    let eB = 0,
      uB = !1;
    class fB {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(BB) {
        this.element = BB, this.shownKey = "", this.gap = null
      }
      show(BB) {
        const IB = this.element;
        if (!IB) return;
        const ZB = BB ? this.keepOnScreen(IB, BB) : null,
          TB = ZB ? `${ZB.left},${ZB.top},${ZB.width},${ZB.height}` : "";
        if (TB === this.shownKey) return;
        const JB = "" === this.shownKey;
        this.shownKey = TB, IB.classList.toggle("Visible", null !== ZB), ZB && (IB.classList.toggle("Snap", JB), IB.style.width = `${ZB.width}px`, IB.style.height = `${ZB.height}px`, IB.style.transform = `translate(${ZB.left}px, ${ZB.top}px)`, JB && (IB.offsetWidth, IB.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(BB, IB) {
        var ZB;
        const TB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!uB){uB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(BB),new ResizeObserver((()=>{eB++})).observe(BB)}return String(eB)})()}`;
        (null === (ZB = this.gap) || void 0 === ZB ? void 0 : ZB.key) !== TB && (this.gap = {
          px: parseFloat(getComputedStyle(BB).paddingLeft) || 0,
          key: TB
        });
        const JB = this.gap.px + 2,
          oB = Math.max(IB.left, JB),
          GB = Math.max(IB.top, JB),
          vB = Math.min(IB.left + IB.width, window.innerWidth - JB),
          kB = Math.min(IB.top + IB.height, window.innerHeight - JB);
        return vB <= oB || kB <= GB ? IB : {
          left: oB,
          top: GB,
          width: vB - oB,
          height: kB - GB
        }
      }
    }
    const lB = BB => {
      let {
        placer: IB,
        className: ZB
      } = BB;
      const TB = (0, rB.useCallback)((BB => {
        IB.setElement(BB)
      }), [IB]);
      return (0, LB.jsx)("div", {
        ref: TB,
        className: XB()("PadReticle", ZB),
        "aria-hidden": !0
      })
    };
    var AB = ZB(8779);
    const tB = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const bB = new class {
      constructor() {
        this.state = tB, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(BB) {
        if (IB = this.state, ZB = BB, (IB.visible || ZB.visible) && (IB.visible !== ZB.visible || IB.x !== ZB.x || IB.y !== ZB.y || IB.pressed !== ZB.pressed)) {
          var IB, ZB;
          this.state = BB;
          for (const IB of this.listeners) IB(BB)
        }
      }
      hide() {
        this.set(tB)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    };
    var xB = ZB(8792);
    const EB = (BB, IB) => {
        let {
          kind: ZB,
          holding: TB,
          hasPress: JB,
          hasBack: oB,
          slotHasItem: GB
        } = IB;
        switch (BB) {
          case "primary":
            return "slot" === ZB ? "slotPrimary" : "recipe" === ZB || "button" === ZB ? JB ? "pressPrimary" : "click" : "textField" === ZB ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ZB ? "slotSecondary" : "button" !== ZB && "recipe" !== ZB || !JB ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ZB && GB ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ZB && GB && !TB ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return TB ? "cancel" : oB ? "pressBack" : "close"
        }
      },
      DB = BB => {
        const IB = [];
        if (BB.hotbarPicking) return IB.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), IB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), IB;
        if (BB.holding) "slot" === BB.kind ? (IB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), IB.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === BB.kind && IB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), IB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), IB.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), BB.openButtonCloses && IB.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ZB;
          "slot" === BB.kind && BB.slotHasItem ? (IB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), IB.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), IB.push({
            actions: ["inventoryQuickMove"],
            labelKey: BB.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), IB.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), IB.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== BB.kind && "recipe" !== BB.kind || !BB.pressHints ? "button" === BB.kind || "recipe" === BB.kind ? IB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === BB.kind && IB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (BB.pressHints.primary && IB.push({
            actions: ["inventoryPrimary"],
            labelKey: BB.pressHints.primary
          }), BB.pressHints.secondary && IB.push({
            actions: ["inventorySecondary"],
            labelKey: BB.pressHints.secondary
          }));
          const TB = null === (ZB = BB.pressHints) || void 0 === ZB ? void 0 : ZB.back;
          TB && IB.push({
            actions: ["inventoryClose"],
            labelKey: TB
          });
          const JB = [];
          BB.openButtonCloses && JB.push("inventory"), TB || JB.push("inventoryClose"), JB.length > 0 && IB.push({
            actions: JB,
            labelKey: "inventoryClose"
          })
        }
        return IB.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), BB.hasCategories ? IB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : BB.hasList && IB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), IB
      };
    var KB = ZB(8806),
      VB = ZB(8797);
    class SB {
      constructor(BB) {
        this.probes = BB, this.byContainer = new Map, this.byParent = new Map
      }
      find(BB, IB) {
        const ZB = iB(BB, "y", IB);
        if (!ZB) return null;
        let TB = this.byContainer.get(ZB);
        return TB || (this.probes.push({
          element: ZB,
          rect: TI(ZB.getBoundingClientRect())
        }), TB = {
          container: ZB,
          box: PB(ZB),
          group: ZI(ZB)
        }, this.byContainer.set(ZB, TB)), TB
      }
      findForParent(BB, IB) {
        let ZB = this.byParent.get(BB);
        return void 0 === ZB && (ZB = this.find(BB, IB), this.byParent.set(BB, ZB)), ZB
      }
    }
    const BI = new WeakMap;
    let II = 0;
    const ZI = BB => {
        let IB = BI.get(BB);
        return IB || (IB = "el:" + II++, BI.set(BB, IB)), IB
      },
      TI = BB => ({
        left: BB.left,
        top: BB.top,
        width: BB.width,
        height: BB.height
      }),
      JI = BB => BB.width > 0 && BB.height > 0,
      oI = (BB, IB) => JI(BB) && BB.left + BB.width > 0 && BB.top + BB.height > 0 && BB.left < IB.width && BB.top < IB.height,
      GI = (BB, IB, ZB) => {
        const TB = BB.top + BB.height / 2;
        return oI(BB, IB) && (!ZB || TB >= ZB.top && TB <= ZB.bottom)
      },
      vI = BB => ({
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }),
      kI = (BB, IB, ZB) => BB < 0 ? ZB >= 0 ? 0 : IB - 1 : ((BB + ZB) % IB + IB) % IB,
      cI = BB => "Left" === BB || "Right" === BB,
      nI = (BB, IB, ZB) => {
        const TB = cI(ZB),
          JB = TB ? BB.top : BB.left,
          oB = TB ? BB.height : BB.width,
          GB = TB ? IB.top : IB.left,
          vB = TB ? IB.height : IB.width,
          kB = Math.max(0, Math.max(GB - (JB + oB), JB - (GB + vB)));
        return oB > 1.5 * vB ? {
          gap: kB,
          offset: Math.max(0, GB - JB) + .1 * Math.max(0, JB - GB)
        } : {
          gap: kB,
          offset: Math.abs(GB + vB / 2 - (JB + oB / 2))
        }
      },
      hI = (BB, IB, ZB) => {
        const TB = ((BB, IB, ZB) => {
          const TB = vI(BB),
            JB = vI(IB),
            oB = cI(ZB) ? Math.min(BB.width, IB.width) / 4 : Math.min(BB.height, IB.height) / 4;
          switch (ZB) {
            case "Right":
              return JB.x - TB.x >= oB ? Math.max(0, IB.left - (BB.left + BB.width)) : null;
            case "Left":
              return TB.x - JB.x >= oB ? Math.max(0, BB.left - (IB.left + IB.width)) : null;
            case "Down":
              return JB.y - TB.y >= oB ? Math.max(0, IB.top - (BB.top + BB.height)) : null;
            case "Up":
              return TB.y - JB.y >= oB ? Math.max(0, BB.top - (IB.top + IB.height)) : null
          }
        })(BB, IB, ZB);
        if (null === TB) return null;
        const JB = nI(BB, IB, ZB);
        return TB + 3 * JB.gap + .5 * JB.offset
      },
      zI = (BB, IB) => IB.visible || null !== IB.scrollGroup && IB.scrollGroup === BB.scrollGroup,
      FI = (BB, IB, ZB, TB) => {
        let JB = null,
          oB = 1 / 0;
        for (const GB of IB) {
          if (GB.key === BB.key || !zI(BB, GB) || !TB(GB)) continue;
          const IB = hI(BB.rect, GB.rect, ZB);
          null !== IB && IB < oB && (JB = GB, oB = IB)
        }
        return JB
      },
      NI = (BB, IB, ZB) => {
        const TB = FI(BB, IB, ZB, (() => !0));
        if (!TB || cI(ZB) || null === BB.scrollGroup || TB.scrollGroup === BB.scrollGroup) return TB;
        const JB = FI(BB, IB, ZB, (IB => 0 === nI(BB.rect, IB.rect, ZB).gap));
        return null !== JB && void 0 !== JB ? JB : TB
      },
      gI = (BB, IB, ZB) => {
        let TB = null,
          JB = 1 / 0;
        for (const oB of IB) {
          if (!oB.visible || ZB && !ZB(oB)) continue;
          const IB = vI(oB.rect),
            GB = Math.hypot(IB.x - BB.x, IB.y - BB.y);
          GB < JB && (TB = oB, JB = GB)
        }
        return TB
      },
      qI = BB => {
        const {
          rect: IB,
          clip: ZB
        } = BB;
        if (!ZB) return IB;
        const TB = Math.max(IB.left, ZB.left),
          JB = Math.max(IB.top, ZB.top);
        return {
          left: TB,
          top: JB,
          width: Math.min(IB.left + IB.width, ZB.left + ZB.width) - TB,
          height: Math.min(IB.top + IB.height, ZB.top + ZB.height) - JB
        }
      },
      yI = (BB, IB) => IB.x >= BB.left && IB.x < BB.left + BB.width && IB.y >= BB.top && IB.y < BB.top + BB.height,
      UI = (BB, IB) => {
        let ZB = null,
          TB = 1 / 0;
        for (const JB of IB) {
          const IB = qI(JB);
          (JB.visible || JB.clip) && yI(IB, BB) && (IB.width * IB.height < TB && (ZB = JB, TB = IB.width * IB.height))
        }
        return ZB
      },
      WI = BB => {
        let IB = null;
        for (const ZB of BB) {
          if (!ZB.visible) continue;
          if (!IB) {
            IB = ZB;
            continue
          }
          const BB = Math.min(IB.rect.height, ZB.rect.height) / 2,
            TB = ZB.rect.top - IB.rect.top;
          (TB < -BB || Math.abs(TB) <= BB && ZB.rect.left < IB.rect.left) && (IB = ZB)
        }
        return IB
      },
      dI = (BB, IB, ZB, TB, JB) => {
        const oB = JB % IB,
          GB = Math.floor(JB / IB);
        return {
          left: BB.left + oB * ZB,
          top: BB.top + GB * TB,
          width: BB.width,
          height: BB.height
        }
      },
      CI = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      QI = ".LazyLoadedItemWrapper",
      sI = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      wI = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      OI = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      YI = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, VB.x)(BB) ? "info" : (0, AB.T)(BB) ? "textField" : "button",
      iI = (BB, IB) => "slot" === IB ? Number(BB.getAttribute("data-inven-idx")) : null,
      pI = BB => BB.matches(QI) ? BB.querySelector(sI) : BB,
      aI = BB => {
        var IB, ZB;
        return {
          element: BB,
          recipe: null !== (IB = BB && (null === (ZB = pI(BB)) || void 0 === ZB ? void 0 : ZB.getAttribute("data-recipe-key"))) && void 0 !== IB ? IB : null
        }
      },
      HI = BB => {
        const IB = pI(BB);
        if (!IB) return {
          kind: "pending",
          idx: null
        };
        const ZB = YI(IB);
        return {
          kind: ZB,
          idx: iI(IB, ZB)
        }
      },
      MI = BB => {
        const IB = [];
        for (const [ZB, TB] of wI) {
          BB.matches(TB) && IB.push([ZB, BB]);
          for (const JB of BB.querySelectorAll(TB)) IB.push([ZB, JB])
        }
        return IB
      },
      jI = (BB, IB) => {
        for (const [ZB, TB] of BB)
          if (TB.contains(IB)) return ZB;
        return "other"
      },
      PI = (BB, IB, ZB, TB, JB, oB, GB, vB) => {
        var kB;
        const cB = BB.children,
          nB = TI(cB[0].getBoundingClientRect()),
          hB = [{
            element: cB[0],
            rect: nB
          }];
        if (oB.push(hB[0]), 0 === nB.width || 0 === nB.height) return;
        let zB = 1;
        for (; zB < cB.length && Math.abs(cB[zB].getBoundingClientRect().top - nB.top) < 1;) zB++;
        const FB = BB => {
            const IB = {
              element: cB[BB],
              rect: TI(cB[BB].getBoundingClientRect())
            };
            return oB.push(IB), hB.push(IB), IB.rect
          },
          NB = zB > 1 ? FB(1).left - nB.left : nB.width,
          gB = cB.length > zB ? FB(zB).top - nB.top : nB.height,
          qB = GB.find(BB, IB);
        let yB = null;
        if (qB) {
          var UB;
          const {
            container: BB,
            box: IB
          } = qB;
          yB = null !== (UB = vB.get(BB)) && void 0 !== UB ? UB : null, yB || (yB = {
            top: BB.scrollTop,
            left: BB.scrollLeft,
            box: IB,
            viewport: TB,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, vB.set(BB, yB)), yB.probes.push(...hB)
        }
        const WB = JB.length;
        for (let sB = 0; sB < cB.length; sB++) {
          var dB, CB, QB;
          const BB = cB[sB],
            IB = dI(nB, zB, NB, gB, sB),
            oB = BB.firstElementChild ? BB.querySelector(sI) : null,
            GB = oB ? YI(oB) : "pending";
          JB.push({
            key: ZI(BB),
            rect: IB,
            panel: ZB,
            scrollGroup: null !== (dB = null === qB || void 0 === qB ? void 0 : qB.group) && void 0 !== dB ? dB : null,
            visible: GI(IB, TB, null === qB || void 0 === qB ? void 0 : qB.box),
            clip: null !== (CB = null === qB || void 0 === qB ? void 0 : qB.box) && void 0 !== CB ? CB : null,
            element: BB,
            kind: GB,
            idx: oB ? iI(oB, GB) : null,
            scrollContainer: null !== (QB = null === qB || void 0 === qB ? void 0 : qB.container) && void 0 !== QB ? QB : null
          })
        }
        null === (kB = yB) || void 0 === kB || kB.targets.push(...JB.slice(WB))
      },
      RI = BB => BB instanceof Element && null !== BB.closest(QI),
      rI = BB => null !== BB.scrollContainer && RI(BB.element);
    class mI {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(BB, IB, ZB, TB) {
        this.latched = {
          source: BB,
          focusKey: IB,
          sinceMs: ZB,
          hold: {
            id: ++this.presses,
            holdMs: TB
          }
        }
      }
      update(BB, IB, ZB) {
        const TB = this.latched;
        return TB ? BB && IB === TB.focusKey ? ZB - TB.sinceMs < TB.hold.holdMs ? null : (this.latched = null, TB.source) : (this.latched = null, null) : null
      }
      getHold() {
        var BB, IB;
        return null !== (BB = null === (IB = this.latched) || void 0 === IB ? void 0 : IB.hold) && void 0 !== BB ? BB : null
      }
      reset() {
        this.latched = null
      }
    }
    var XI = ZB(8809);
    const LI = {
        kind: "none"
      },
      eI = BB => ({
        x: BB.clientX,
        y: BB.clientY
      }),
      uI = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class fI {
      constructor() {
        this.hovered = LI, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(BB, IB, ZB, TB, JB) {
        const oB = null !== IB ? {
            kind: "slot",
            idx: IB
          } : ZB ? {
            kind: "element",
            element: ZB
          } : LI,
          GB = `${JB}|${Math.round(TB.clientX)},${Math.round(TB.clientY)}`,
          vB = (kB = this.hovered, cB = oB, "slot" === kB.kind && "slot" === cB.kind ? kB.idx === cB.idx : "element" === kB.kind && "element" === cB.kind ? kB.element === cB.element : kB.kind === cB.kind);
        var kB, cB;
        if (vB && GB === this.signature) return;
        const nB = !vB || JB !== this.holding || "" === this.signature;
        this.signature = GB, this.holding = JB, this.lastPoint = TB;
        const hB = this.hovered;
        if (this.hovered = oB, "slot" === oB.kind) return this.leaveElement(hB, null, TB), void(nB ? BB.hover(oB.idx, TB) : BB.moveTo(TB));
        if (vB) return void("element" === oB.kind ? (0, AB.u)(oB.element, oB.element, eI(TB)) : BB.hover(null, TB));
        BB.hover(null, TB);
        const zB = "element" === oB.kind ? oB.element : null;
        "element" === hB.kind ? (0, AB.u)(hB.element, zB, eI(TB)) : zB && (0, AB.u)(null, zB, eI(TB))
      }
      invalidate() {
        this.signature = ""
      }
      clear(BB) {
        const IB = this.hovered;
        this.hovered = LI, this.signature = "", "none" !== IB.kind && (this.leaveElement(IB, null, this.lastPoint), BB && "slot" === IB.kind && BB.hover(null, this.lastPoint))
      }
      leaveElement(BB, IB, ZB) {
        "element" === BB.kind && (0, AB.u)(BB.element, IB, eI(ZB))
      }
    }
    class lI {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(BB, IB) {
        sB(BB) && (this.lastTiltedMs = IB)
      }
      allowsClick(BB) {
        return BB - this.lastTiltedMs > 150
      }
    }
    class AI {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(BB) {
        return 0 !== (0, NB.i)(BB, .2).y
      }
      step(BB, IB, ZB) {
        BB !== this.container && (this.container = BB, this.remainder = 0);
        const TB = wB(IB, ZB).y;
        if (0 === TB) return this.remainder = 0, !1;
        const JB = this.remainder + TB,
          oB = Math.trunc(JB);
        if (this.remainder = JB - oB, 0 === oB) return !1;
        const GB = BB.scrollTop;
        return BB.scrollTop = GB + oB, BB.scrollTop !== GB
      }
      current() {
        var BB;
        return null !== (BB = this.container) && void 0 !== BB && BB.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var tI = ZB(8818);
    const bI = "[data-pad-inventory-default]",
      xI = ".HotBarGameItemsContainer .InvenItem.Selected",
      EI = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      DI = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      KI = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      VI = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      SI = [...KI, ...VI],
      BZ = () => {
        return BB = (0, nB.g)("inventory"), !SI.map(nB.g).includes(BB) && !(0, NB.F)(BB);
        var BB
      },
      IZ = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ZZ = (BB, IB) => {
        const ZB = !(null === IB || void 0 === IB || !IB.isHolding());
        return function(BB, IB) {
          const ZB = BB.find((BB => BB.visible && IB(BB)));
          if (ZB) return ZB;
          for (var TB = arguments.length, JB = new Array(TB > 2 ? TB - 2 : 0), oB = 2; oB < TB; oB++) JB[oB - 2] = arguments[oB];
          for (const GB of JB) {
            const IB = WI(BB.filter(GB));
            if (IB) return IB
          }
          return WI(BB)
        }(BB, (BB => {
          const {
            element: IB
          } = BB;
          return IB.matches(bI) || null !== IB.querySelector(bI) || IB.matches(xI)
        }), (BB => "slot" === BB.kind ? ZB || null !== BB.idx && !(null === IB || void 0 === IB || !IB.hasItemAt(BB.idx)) : "recipe" === BB.kind || "pending" === BB.kind), (BB => "slot" === BB.kind || "button" === BB.kind))
      };
    class TZ {
      constructor() {
        this.set = null, this.observer = new MutationObserver((BB => {
          BB.some((BB => !RI(BB.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = BB => {
          this.scrolled(BB.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const BB = [],
              IB = [];
            let ZB = !1;
            const TB = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              JB = new Map,
              oB = new SB(IB);
            for (const hB of document.querySelectorAll(CI)) {
              const nB = MI(hB);
              ZB ||= null !== hB.querySelector(".CreativeCategoryTab");
              for (const ZB of hB.querySelectorAll(`${QI}:first-child`)) {
                const GB = ZB.parentElement;
                PI(GB, hB, jI(nB, GB), TB, BB, IB, oB, JB)
              }
              for (const ZB of hB.querySelectorAll(sI)) {
                var GB, vB, kB, cB;
                if (ZB.closest(QI) || ZB.closest("[data-pad-ignore]")) continue;
                const zB = null === (GB = ZB.parentElement) || void 0 === GB ? void 0 : GB.closest(sI);
                if (zB && hB.contains(zB)) continue;
                const FB = YI(ZB),
                  NB = iI(ZB, FB);
                if (-1 === NB) continue;
                const gB = TI(ZB.getBoundingClientRect());
                IB.push({
                  element: ZB,
                  rect: gB
                });
                const qB = oB.findForParent(ZB.parentElement, hB),
                  yB = qB && !JB.has(qB.container) ? qB : null;
                (yB ? JI(gB) : oI(gB, TB)) && BB.push({
                  key: ZI(ZB),
                  rect: gB,
                  panel: jI(nB, ZB),
                  scrollGroup: null !== (vB = null === yB || void 0 === yB ? void 0 : yB.group) && void 0 !== vB ? vB : null,
                  visible: GI(gB, TB, null === yB || void 0 === yB ? void 0 : yB.box),
                  clip: null !== (kB = null === yB || void 0 === yB ? void 0 : yB.box) && void 0 !== kB ? kB : null,
                  element: ZB,
                  kind: FB,
                  idx: NB,
                  scrollContainer: null !== (cB = null === yB || void 0 === yB ? void 0 : yB.container) && void 0 !== cB ? cB : null
                })
              }
            }
            for (const [hB, zB] of JB) zB.holdsOthers = IB.some((BB => BB.element !== hB && hB.contains(BB.element) && !BB.element.closest(QI)));
            const nB = new Map;
            for (const hB of BB) nB.set(hB.element, hB);
            return {
              targets: BB,
              byElement: nB,
              hasCategories: ZB,
              probes: IB,
              scrollers: JB
            }
          })(), this.observer.disconnect();
          for (const BB of document.querySelectorAll(CI)) this.observer.observe(BB, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(BB) {
        !this.set || BB instanceof Element && ((BB, IB) => {
          const ZB = BB.scrollers.get(IB);
          if (!ZB || ZB.holdsOthers || IB.scrollLeft !== ZB.left) return !1;
          const TB = IB.scrollTop - ZB.top;
          if (0 === TB) return !0;
          ZB.top = IB.scrollTop;
          for (const JB of ZB.probes) JB.rect.top -= TB;
          for (const JB of ZB.targets) JB.rect.top -= TB, JB.visible = GI(JB.rect, ZB.viewport, ZB.box);
          return !0
        })(this.set, BB) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((BB => {
          return IB = BB.rect, ZB = BB.element.getBoundingClientRect(), !(IB.left === ZB.left && IB.top === ZB.top && IB.width === ZB.width && IB.height === ZB.height);
          var IB, ZB
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const JZ = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(NB.y.map((BB => [BB, (0, gB.d)(NB.B)]))), this.stickRepeat = new NB.d((0, gB.d)(NB.$)), this.pageUpTimer = (0, gB.d)(NB.Y), this.pageDownTimer = (0, gB.d)(NB.Y), this.stickGate = new CB, this.pointer = null, this.activePress = null, this.dropLatch = new mI, this.scroller = new AI, this.scrollStickClick = new lI, this.hover = new fI, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new fB, this.targets = new TZ, this.hasCategories = !1, this.wasShowing = !1, this.state = XI.c, this.isActive = () => (0, KB.h)(), this.isShowing = () => "inventory" === hB.c.getActiveConsumerName() && (0, FB.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, KB.e)()), (0, KB.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var BB;
            this.reopenSlotIdx = null !== (BB = this.focused ? HI(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, KB.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = BB => {
            (0, vB.unstable_batchedUpdates)((() => {
              this.frame(BB)
            }))
          }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, yB.t)(BB) && this.isShowing(), this.noteRealPointer = BB => {
            BB instanceof MouseEvent && BB.isTrusted && !(0, yB.t)(BB) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = BB.clientX, this.lastRealPointer.y = BB.clientY)
          }, this.wakePressActs = BB => {
            var IB;
            return BB === (0, nB.g)("inventoryClose") ? !(null !== (IB = (0, KB.e)()) && void 0 !== IB && IB.isHolding()) : !(BB !== (0, nB.g)("inventory") || !BZ()) || ((0, NB.F)(BB) ? this.isNavButton(BB) : VI.some((IB => (0, nB.g)(IB) === BB)))
          }
        }
        frame(BB) {
          var IB, ZB, TB, JB, oB;
          const GB = (0, KB.e)();
          if (!(0, FB.i)()) return void(this.wasShowing && (this.endInteraction(GB), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === GB || void 0 === GB || !GB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, zB.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const vB = performance.now();
          this.handleNavigation(BB, vB), this.handlePanels(BB), this.handlePaging(BB, vB), this.handleScroll(BB), this.handleButtons(BB, vB, GB), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const kB = this.ensureFocus(),
            cB = this.focusContext(GB);
          this.ring.show(kB);
          const hB = "slot" === cB.kind ? cB.idx : null,
            NB = null !== (IB = null === (ZB = cB.actionElement) || void 0 === ZB ? void 0 : ZB.querySelector(".DoCraftItem")) && void 0 !== IB ? IB : cB.actionElement;
          this.pointer ? (this.hover.sync(GB, hB, NB, ((BB, IB) => {
            const ZB = IB ? uI() : 0;
            return {
              clientX: BB.x - ZB,
              clientY: BB.y - ZB
            }
          })(this.pointer, cB.holding), cB.holding), bB.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: BB.isHeld((0, nB.g)("inventoryPrimary"))
          })) : kB && this.focused && this.hover.sync(GB, hB, NB, ((BB, IB) => {
            if (!IB) return {
              clientX: BB.left + BB.width - 10,
              clientY: BB.top + BB.height / 2 - 10
            };
            const ZB = uI();
            return {
              clientX: BB.left + BB.width / 2 - ZB,
              clientY: BB.top + BB.height / 2 - ZB
            }
          })(kB, cB.holding), cB.holding), this.publishState({
            showing: !0,
            kind: cB.kind,
            holding: cB.holding,
            slotHasItem: cB.slotHasItem,
            pressHints: null !== (TB = null === (JB = cB.press) || void 0 === JB ? void 0 : JB.hints) && void 0 !== TB ? TB : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && rI(this.focusTarget),
            openButtonCloses: BZ(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === cB.kind && !(null === (oB = cB.actionElement) || void 0 === oB || !oB.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(BB) {
          var IB;
          const ZB = (0, FB.c)();
          if (!ZB) return;
          this.targets.revalidate();
          const TB = this.getTargets().targets;
          this.setFocus(null !== (IB = UI(ZB, TB)) && void 0 !== IB ? IB : BB ? gI(ZB, TB, (BB => {
            let {
              rect: IB
            } = BB;
            const TB = Math.max(IB.left - ZB.x, 0, ZB.x - (IB.left + IB.width)),
              JB = Math.max(IB.top - ZB.y, 0, ZB.y - (IB.top + IB.height));
            return Math.hypot(TB, JB) <= Math.min(IB.width, IB.height) / 2
          })) : null, !1), "cursor" === (0, zB.i)().inventoryNavigation && (this.pointer = {
            x: ZB.x,
            y: ZB.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const BB = this.lastRealPointer;
          if (!BB || "keyboardMouse" !== kB.d.get("activeInputDevice")) return;
          const IB = document.elementFromPoint(BB.x, BB.y);
          IB && (0, AB.u)(null, IB, BB)
        }
        endInteraction(BB) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const IB of this.dpadTimers.values()) IB.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(XI.c)
        }
        getTargets() {
          const BB = this.targets.get();
          return this.hasCategories = BB.hasCategories, BB
        }
        currentTarget() {
          var BB;
          return this.focused && null !== (BB = this.getTargets().byElement.get(this.focused)) && void 0 !== BB ? BB : null
        }
        readFocusRect() {
          const BB = this.focused;
          if (null === BB || void 0 === BB || !BB.isConnected || !BB.closest(CI)) return null;
          const IB = BB.getBoundingClientRect();
          return IB.width > 0 && IB.height > 0 ? {
            left: IB.left,
            top: IB.top,
            width: IB.width,
            height: IB.height
          } : null
        }
        ensureFocus() {
          const BB = this.readFocusRect();
          if (BB || this.pointer) return BB;
          const {
            targets: IB,
            byElement: ZB
          } = this.getTargets();
          let TB = null,
            JB = !1;
          if (this.lastRect) TB = gI(vI(this.lastRect), IB);
          else {
            var oB, GB;
            const BB = ((BB, IB) => {
                const ZB = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ZB ? ZZ(BB.filter((BB => ZB.contains(BB.element))), IB) : null
              })(IB, (0, KB.e)()),
              vB = IB.find((BB => null !== BB.idx && BB.idx === this.reopenSlotIdx)),
              kB = document.querySelector(xI);
            JB = null !== BB || void 0 !== vB, TB = null !== (oB = null !== (GB = null !== BB && void 0 !== BB ? BB : vB) && void 0 !== GB ? GB : kB && ZB.get(kB)) && void 0 !== oB ? oB : WI(IB)
          }
          return this.setFocus(TB, JB), this.lastRect
        }
        setFocus(BB) {
          let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          BB && (this.focused = BB.element, this.focusTarget = BB, this.panelMemory.set(BB.panel, BB.element), IB && BB.scrollContainer && ((BB, IB) => {
            const ZB = BB.getBoundingClientRect(),
              TB = PB(IB),
              JB = IB.scrollTop;
            return ZB.top < TB.top ? IB.scrollTop -= TB.top - ZB.top : ZB.bottom > TB.bottom && (IB.scrollTop += ZB.bottom - TB.bottom), IB.scrollTop !== JB
          })(BB.element, BB.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, zB.i)().inventoryNavigation) {
              if (this.lastRect) {
                const BB = vI(this.lastRect);
                this.pointer = {
                  x: BB.x,
                  y: BB.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const BB = this.lastRect ? vI(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: BB.x,
            y: BB.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, bB.hide()
        }
        hoverAtPointer() {
          var BB;
          const IB = UI(this.pointer, this.getTargets().targets);
          this.focusTarget = IB, (null === IB || void 0 === IB ? void 0 : IB.element) !== this.focused && (this.focused = null !== (BB = null === IB || void 0 === IB ? void 0 : IB.element) && void 0 !== BB ? BB : null, IB && (this.panelMemory.set(IB.panel, IB.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(BB, IB) {
          const ZB = this.focusTarget,
            TB = ZB && (0, zB.i)().cursorMagnetism ? vI(qI(ZB)) : null;
          this.pointer = QB(this.pointer, {
            stick: BB.leftStick,
            moveDeadzone: (0, zB.i)().moveDeadzone,
            dpad: IB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, zB.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: TB
            }
          })
        }
        move(BB) {
          this.targets.revalidate();
          const IB = this.currentTarget();
          IB && this.setFocus(NI(IB, this.getTargets().targets, BB))
        }
        step(BB) {
          const IB = this.pointer;
          if (IB && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((BB, IB, ZB) => {
            var TB;
            const JB = {
              key: "",
              rect: {
                left: BB.x,
                top: BB.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (TB = NI(JB, IB, ZB)) && void 0 !== TB ? TB : gI(BB, IB)
          })(IB, this.getTargets().targets, BB));
          this.move(BB)
        }
        isNavButton(BB) {
          return !KI.some((IB => (0, nB.g)(IB) === BB)) && !(BB === (0, nB.g)("inventory") && BZ())
        }
        handleNavigation(BB, IB) {
          const ZB = (0, zB.i)().inventoryNavigation,
            TB = {
              x: 0,
              y: 0
            };
          let JB = null;
          for (const kB of NB.y) {
            const oB = this.isNavButton(kB) && BB.isHeld(kB);
            oB && (TB.x += EI[kB].x, TB.y += EI[kB].y), this.dpadTimers.get(kB).update(oB, IB) && "cursor" !== ZB && (JB ??= kB)
          }
          const oB = this.stickGate.update(BB.leftStick, (0, zB.i)().moveDeadzone);
          if (JB && (this.step(JB), this.stickGate.lock()), "slot" !== ZB) {
            const IB = ((BB, IB, ZB, TB) => "hybrid" !== BB ? "cursor" === BB : !TB && (IB || ZB))(ZB, null !== this.pointer, oB, null !== JB);
            return IB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === ZB ? TB : {
              x: 0,
              y: 0
            }))
          }
          const GB = (0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone),
            vB = this.stickRepeat.update(oB ? (0, NB.bb)(GB) : null, IB);
          vB && this.move(vB)
        }
        applyCategoryPlace() {
          const BB = this.placeAfterCategory;
          if (!BB) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const IB = gI(vI(BB.rect), this.getTargets().targets, (IB => IB.scrollGroup === BB.scrollGroup));
          this.setFocus(IB, !1)
        }
        applyFocusRequest() {
          const BB = (0, KB.t)();
          BB && (this.targets.invalidate(), this.setFocus((0, KB.c)(this.getTargets().targets, BB)))
        }
        handlePanels(BB) {
          var IB, ZB, TB;
          const JB = BB.wasPressed((0, nB.g)("inventoryPanelPrevious")),
            oB = BB.wasPressed((0, nB.g)("inventoryPanelNext"));
          if (!JB && !oB) return;
          const {
            targets: GB
          } = this.getTargets(), vB = (kB = ((BB, IB) => {
            const ZB = [];
            for (const JB of BB) JB.visible && !ZB.includes(JB.panel) && ZB.push(JB.panel);
            const TB = BB => {
              const TB = IB.indexOf(BB);
              return -1 === TB ? IB.length + ZB.indexOf(BB) : TB
            };
            return ZB.sort(((BB, IB) => TB(BB) - TB(IB)))
          })(GB, OI), cB = null !== (IB = null === (ZB = this.focusTarget) || void 0 === ZB ? void 0 : ZB.panel) && void 0 !== IB ? IB : null, hB = oB ? 1 : -1, 0 === kB.length ? null : kB[kI(null === cB ? -1 : kB.indexOf(cB), kB.length, hB)]);
          var kB, cB, hB;
          if (null === vB) return;
          const zB = this.panelMemory.get(vB),
            FB = GB.filter((BB => BB.panel === vB)),
            NB = null !== (TB = FB.find((BB => BB.element === zB && BB.visible))) && void 0 !== TB ? TB : ZZ(FB, (0, KB.e)());
          this.setFocus(NB)
        }
        handlePaging(BB, IB) {
          const ZB = (0, nB.g)("menuPageUp"),
            TB = (0, nB.g)("menuPageDown"),
            JB = this.pageUpTimer.update(BB.isHeld(ZB), IB),
            oB = this.pageDownTimer.update(BB.isHeld(TB), IB);
          if (!JB && !oB) return;
          const GB = oB ? 1 : -1;
          if (!BB.wasPressed(oB ? TB : ZB) && this.hasCategories) return;
          if ((BB => {
              const IB = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === IB.length) return !1;
              const ZB = IB.findIndex((BB => BB.classList.contains("Selected"))),
                TB = IB[kI(ZB, IB.length, BB)];
              return (0, AB.q)(TB, (0, AB.H)(TB)), !0
            })(GB)) {
            var vB, kB;
            this.targets.invalidate();
            const BB = null !== (vB = null === (kB = this.focusTarget) || void 0 === kB ? void 0 : kB.scrollGroup) && void 0 !== vB ? vB : null,
              IB = this.readFocusRect();
            return void(this.placeAfterCategory = null !== BB && IB && !this.pointer ? {
              rect: IB,
              scrollGroup: BB
            } : null)
          }
          const {
            targets: cB
          } = this.getTargets(), hB = this.currentTarget(), zB = hB && rI(hB) ? hB : cB.find((BB => rI(BB) && BB.visible));
          if (!zB) return;
          const FB = ((BB, IB, ZB, TB) => {
            if (null === BB.scrollGroup) return null;
            const JB = vI(BB.rect),
              oB = JB.x,
              GB = JB.y + ("Down" === ZB ? TB : -TB);
            let vB = null,
              kB = 1 / 0;
            for (const cB of IB) {
              if (cB.scrollGroup !== BB.scrollGroup || cB.key === BB.key) continue;
              const IB = vI(cB.rect);
              if ("Down" === ZB ? IB.y <= JB.y : IB.y >= JB.y) continue;
              const TB = Math.hypot(IB.x - oB, IB.y - GB);
              TB < kB && (vB = cB, kB = TB)
            }
            return vB
          })(zB, cB, GB > 0 ? "Down" : "Up", zB.scrollContainer.clientHeight);
          this.setFocus(null !== FB && void 0 !== FB ? FB : zB)
        }
        handleScroll(BB) {
          var IB, ZB, TB, JB, oB, GB;
          if (!this.scroller.isScrolling(BB.rightStick)) return void this.scroller.reset();
          const {
            targets: vB
          } = this.getTargets(), kB = this.pointer, cB = !kB && this.focusTarget && rI(this.focusTarget) ? this.focusTarget.scrollContainer : null, nB = kB && (null === (IB = vB.find((BB => BB.clip && yI(BB.clip, kB)))) || void 0 === IB ? void 0 : IB.scrollContainer), hB = null !== (ZB = null !== (TB = null !== (JB = this.scroller.current()) && void 0 !== JB ? JB : nB) && void 0 !== TB ? TB : cB) && void 0 !== ZB ? ZB : null === (oB = vB.find(rI)) || void 0 === oB ? void 0 : oB.scrollContainer;
          if (!hB || !this.scroller.step(hB, BB.rightStick, BB.dtMs)) return;
          this.targets.scrolled(hB);
          const zB = kB || (null === (GB = this.focusTarget) || void 0 === GB ? void 0 : GB.scrollContainer) !== hB ? null : this.readFocusRect();
          if (!zB) return;
          const FB = PB(hB),
            NB = vI(zB);
          if (NB.y < FB.top || NB.y > FB.bottom) {
            const BB = this.focusTarget.scrollGroup,
              IB = gI(NB, this.getTargets().targets, (IB => IB.scrollGroup === BB));
            this.setFocus(IB, !1)
          }
        }
        focusContext(BB) {
          const {
            kind: IB,
            idx: ZB
          } = this.focused ? HI(this.focused) : {
            kind: null,
            idx: null
          }, TB = this.focused ? pI(this.focused) : null, JB = TB ? (0, tI.e)(TB) : null;
          return {
            kind: IB,
            idx: ZB,
            actionElement: TB,
            press: JB,
            hasPress: null !== JB,
            hasBack: !(null === JB || void 0 === JB || !JB.back),
            holding: BB.isHolding(),
            slotHasItem: null !== ZB && BB.hasItemAt(ZB)
          }
        }
        handleButtons(BB, IB, ZB) {
          var TB, JB;
          if (!this.activePress || BB.isHeld(this.activePress.button) && (TB = this.activePress.target, JB = this.focused, null !== TB.recipe ? aI(JB).recipe === TB.recipe : JB === TB.element) || this.releasePress(), this.scrollStickClick.update(BB.rightStick, IB), !this.handleHotbarPick(BB, ZB)) {
            for (const [TB, JB] of DI) {
              const oB = (0, nB.g)(JB);
              if (!BB.wasPressed(oB) || "openButton" === TB && !BZ()) continue;
              if ("RS" === oB && !this.scrollStickClick.allowsClick(IB)) continue;
              const GB = this.focusContext(ZB),
                vB = EB(TB, GB);
              vB && this.runIntent(vB, GB, oB, ZB)
            }
            this.handleDrop(BB, IB, ZB)
          }
        }
        handleHotbarPick(BB, IB) {
          const ZB = this.hotbarPick;
          if (!ZB) return !1;
          const TB = BB.wasPressed((0, nB.g)("inventoryPrimary")) || BB.wasPressed((0, nB.g)("inventoryHotbarSwap"));
          if (!TB && !BB.wasPressed((0, nB.g)("inventoryClose")) && !IB.isHolding()) return !(BB.wasPressed((0, nB.g)("inventory")) && BZ());
          const JB = this.focusTarget;
          TB && "hotbar" === (null === JB || void 0 === JB ? void 0 : JB.panel) && null !== JB.idx && JB.idx !== ZB.idx && (IB.swapWithHotbar(JB.idx, ZB.idx), this.afterAction()), this.hotbarPick = null;
          const oB = ZB.element.isConnected ? this.getTargets().byElement.get(ZB.element) : void 0;
          return oB && this.setFocus(oB), !0
        }
        startHotbarPick(BB) {
          var IB;
          const {
            targets: ZB,
            byElement: TB
          } = this.getTargets(), JB = document.querySelector(xI), oB = null !== (IB = JB && TB.get(JB)) && void 0 !== IB ? IB : ZB.find((BB => "hotbar" === BB.panel));
          oB && this.focused && (this.hotbarPick = {
            idx: BB,
            element: this.focused
          }, this.setFocus(oB))
        }
        focusKey() {
          return this.focused ? ZI(this.focused) : null
        }
        handleDrop(BB, IB, ZB) {
          const TB = (0, nB.g)("inventoryDrop");
          if (BB.wasPressed(TB)) {
            const BB = (JB = this.focusContext(ZB)).holding ? {
              kind: "sv"
            } : "slot" === JB.kind && JB.slotHasItem && null !== JB.idx ? {
              kind: "slot",
              idx: JB.idx
            } : null;
            return void(BB && (this.dropFrom(BB, !1, ZB), this.dropLatch.press(BB, this.focusKey(), IB, qB.c[(0, zB.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var JB;
          const oB = this.dropLatch.update(BB.isHeld(TB), this.focusKey(), IB);
          oB && ((BB, IB, ZB) => "sv" === BB.kind ? IB : !IB && ZB(BB.idx))(oB, ZB.isHolding(), ZB.hasItemAt) && (this.dropFrom(oB, !0, ZB), this.afterAction())
        }
        dropFrom(BB, IB, ZB) {
          "sv" === BB.kind ? ZB.dropHeld(IB, this.slotPoint()) : ZB.dropSlot(BB.idx, IB)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (BB => {
            const IB = vI(BB);
            return {
              clientX: IB.x,
              clientY: IB.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(BB, IB, ZB, TB) {
          const JB = IB.idx,
            oB = IB.actionElement;
          switch (oB && IZ.has(BB) && (0, yB.z)(oB), BB) {
            case "slotPrimary":
              TB.primary(JB, this.slotPoint());
              break;
            case "slotSecondary":
              TB.secondary(JB, this.slotPoint());
              break;
            case "slotQuickMove":
              TB.quickMove(JB, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(JB);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(IB.press, "pressPrimary" === BB ? "primary" : "secondary", ZB);
              break;
            case "click":
              (0, AB.q)(oB, (0, AB.H)(oB));
              break;
            case "openKeyboard":
              (0, AB.T)(oB) && (0, AB.R)(oB);
              break;
            case "pressBack":
              IB.press.back();
              break;
            case "cancel":
              TB.cancel();
              break;
            case "close":
              return this.releasePress(), void TB.close()
          }
          this.afterAction()
        }
        startPress(BB, IB, ZB) {
          this.releasePress(), BB.press(IB) && (this.activePress = {
            handlers: BB,
            button: ZB,
            target: aI(this.focused)
          })
        }
        releasePress() {
          var BB, IB, ZB;
          null === (BB = this.activePress) || void 0 === BB || null === (IB = (ZB = BB.handlers).release) || void 0 === IB || IB.call(ZB), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(BB) {
          ((BB, IB) => {
            var ZB, TB, JB, oB, GB, vB;
            return BB.showing === IB.showing && BB.kind === IB.kind && BB.holding === IB.holding && BB.slotHasItem === IB.slotHasItem && (null === (ZB = BB.pressHints) || void 0 === ZB ? void 0 : ZB.primary) === (null === (TB = IB.pressHints) || void 0 === TB ? void 0 : TB.primary) && (null === (JB = BB.pressHints) || void 0 === JB ? void 0 : JB.secondary) === (null === (oB = IB.pressHints) || void 0 === oB ? void 0 : oB.secondary) && (null === (GB = BB.pressHints) || void 0 === GB ? void 0 : GB.back) === (null === (vB = IB.pressHints) || void 0 === vB ? void 0 : vB.back) && BB.hasCategories === IB.hasCategories && BB.hasList === IB.hasList && BB.openButtonCloses === IB.openButtonCloses && BB.steppingSlots === IB.steppingSlots && BB.hotbarPicking === IB.hotbarPicking && BB.quickMoveToHotbar === IB.quickMoveToHotbar && BB.dropStackHold === IB.dropStackHold
          })(BB, this.state) || (this.state = BB, cB.l.Gq(XI.g, BB))
        }
      },
      oZ = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var GZ = ZB(8824),
      vZ = ZB(342),
      kZ = ZB(1711),
      cZ = ZB(8297);
    const nZ = "[data-pad-secondary]",
      hZ = BB => BB instanceof HTMLElement && (0, VB.r)(BB) && !(0, VB.x)(BB),
      zZ = BB => {
        const IB = BB.querySelector(nZ);
        if (IB && hZ(IB)) return IB;
        for (const JB of null !== (ZB = null === (TB = BB.parentElement) || void 0 === TB ? void 0 : TB.children) && void 0 !== ZB ? ZB : []) {
          var ZB, TB;
          if (JB !== BB && JB.matches(nZ) && hZ(JB)) return JB
        }
        return null
      },
      FZ = (BB, IB, ZB, TB) => Math.max(0, Math.max(BB, ZB) - Math.min(IB, TB)),
      NZ = (BB, IB, ZB, TB) => Math.max(0, Math.min(IB, TB) - Math.max(BB, ZB)),
      gZ = (BB, IB, ZB) => {
        const TB = (BB.left + BB.right) / 2,
          JB = (BB.top + BB.bottom) / 2,
          oB = (IB.left + IB.right) / 2,
          GB = (IB.top + IB.bottom) / 2;
        if ("Left" === ZB || "Right" === ZB) {
          const vB = "Right" === ZB ? 1 : -1;
          return {
            forwardGap: "Right" === ZB ? IB.left - BB.right : BB.left - IB.right,
            centreForward: (oB - TB) * vB,
            sidewaysGap: FZ(BB.top, BB.bottom, IB.top, IB.bottom),
            sidewaysOverlap: NZ(BB.top, BB.bottom, IB.top, IB.bottom),
            centreSideways: Math.abs(GB - JB),
            startSideways: Math.abs(IB.top - BB.top),
            fromSidewaysSize: BB.bottom - BB.top,
            toSidewaysSize: IB.bottom - IB.top,
            toLength: IB.right - IB.left
          }
        }
        const vB = "Down" === ZB ? 1 : -1;
        return {
          forwardGap: "Down" === ZB ? IB.top - BB.bottom : BB.top - IB.bottom,
          centreForward: (GB - JB) * vB,
          sidewaysGap: FZ(BB.left, BB.right, IB.left, IB.right),
          sidewaysOverlap: NZ(BB.left, BB.right, IB.left, IB.right),
          centreSideways: Math.abs(oB - TB),
          startSideways: Math.abs(IB.left - BB.left),
          fromSidewaysSize: BB.right - BB.left,
          toSidewaysSize: IB.right - IB.left,
          toLength: IB.bottom - IB.top
        }
      },
      qZ = BB => BB.centreForward > .5 && BB.forwardGap >= -BB.toLength / 2,
      yZ = BB => {
        const IB = BB.sidewaysOverlap > 0 ? 0 : 2 * BB.fromSidewaysSize,
          ZB = BB.fromSidewaysSize > 1.5 * BB.toSidewaysSize ? BB.startSideways : BB.centreSideways;
        return Math.max(0, BB.forwardGap) + 3 * BB.sidewaysGap + IB + .1 * ZB
      },
      UZ = (BB, IB) => NZ(BB.top, BB.bottom, IB.top, IB.bottom) > 0 || IB.bottom - IB.top > IB.right - IB.left,
      WZ = (BB, IB, ZB, TB, JB, oB) => {
        const GB = JB ? CZ(BB, IB, ZB, JB) : new Set,
          vB = sZ(BB, IB, ZB, GB);
        return vB < 0 && GB.size > 0 && oB ? dZ(BB, IB, ZB, oB) : TB && vB >= 0 ? QZ(BB, IB, ZB, TB, vB, GB) : vB
      },
      dZ = (BB, IB, ZB, TB) => {
        const JB = new Set,
          oB = sZ(BB, IB, "Up", JB) >= 0,
          GB = sZ(BB, IB, "Down", JB) >= 0,
          vB = new Set;
        return IB.forEach(((IB, ZB) => {
          const JB = IB.top + IB.bottom < BB.top + BB.bottom;
          TB[ZB] && !(JB ? oB : GB) || vB.add(ZB)
        })), sZ(BB, IB, ZB, vB)
      },
      CZ = (BB, IB, ZB, TB) => {
        const JB = new Set;
        return "Left" !== ZB && "Right" !== ZB || IB.forEach(((IB, ZB) => {
          TB[ZB] && NZ(BB.top, BB.bottom, IB.top, IB.bottom) <= 0 && JB.add(ZB)
        })), JB
      },
      QZ = (BB, IB, ZB, TB, JB, oB) => {
        const GB = gZ(BB, IB[JB], ZB).forwardGap;
        let vB = JB,
          kB = TB[JB],
          cB = 1 / 0;
        return IB.forEach(((IB, nB) => {
          const hB = TB[nB];
          if (oB.has(nB) || hB < kB || hB === kB && vB === JB) return;
          const zB = gZ(BB, IB, ZB);
          if (!qZ(zB) || zB.forwardGap < 0 || zB.forwardGap >= GB) return;
          const FB = yZ(zB);
          (hB > kB || FB < cB) && (vB = nB, kB = hB, cB = FB)
        })), vB
      },
      sZ = (BB, IB, ZB, TB) => {
        let JB = -1,
          oB = 1 / 0;
        if (IB.forEach(((IB, GB) => {
            const vB = ((BB, IB, ZB) => {
              const TB = gZ(BB, IB, ZB);
              if (!qZ(TB)) return null;
              const JB = Math.max(0, TB.forwardGap);
              return TB.sidewaysOverlap <= 0 && TB.sidewaysGap > 2 * (JB + 1) ? null : yZ(TB)
            })(BB, IB, ZB);
            null !== vB && vB < oB && !TB.has(GB) && (oB = vB, JB = GB)
          })), JB < 0) return -1;
        const GB = IB[JB],
          vB = gZ(BB, GB, ZB).forwardGap;
        let kB = vB,
          cB = JB;
        return IB.forEach(((IB, oB) => {
          if (oB === JB || TB.has(oB) || !((BB, IB, ZB) => {
              const TB = "Left" === ZB || "Right" === ZB,
                JB = TB ? NZ(BB.top, BB.bottom, IB.top, IB.bottom) : NZ(BB.left, BB.right, IB.left, IB.right),
                oB = TB ? Math.min(BB.bottom - BB.top, IB.bottom - IB.top) : Math.min(BB.right - BB.left, IB.right - IB.left);
              return JB > 0 && JB >= oB / 2
            })(IB, GB, ZB)) return;
          const nB = gZ(BB, IB, ZB);
          qZ(nB) && nB.forwardGap + nB.toLength <= vB + 1 && nB.forwardGap < kB && (kB = nB.forwardGap, cB = oB)
        })), cB
      },
      wZ = (BB, IB) => {
        let ZB = -1,
          TB = 1 / 0;
        return IB.forEach(((IB, JB) => {
          const oB = Math.max(IB.left - BB.x, 0, BB.x - IB.right),
            GB = Math.max(IB.top - BB.y, 0, BB.y - IB.bottom),
            vB = Math.hypot(oB, GB);
          vB < TB && (TB = vB, ZB = JB)
        })), ZB
      },
      OZ = (BB, IB) => {
        const ZB = Math.min(BB.bottom - BB.top, IB.bottom - IB.top) / 2;
        return Math.abs(BB.top - IB.top) > ZB ? BB.top - IB.top : BB.left - IB.left
      },
      YZ = BB => {
        let IB = -1;
        for (let ZB = 0; ZB < BB.length; ZB++)(IB < 0 || OZ(BB[ZB], BB[IB]) < 0) && (IB = ZB);
        return IB
      };
    var iZ = ZB(1752),
      pZ = ZB(8827),
      aZ = ZB(8835);
    const HZ = BB => {
        if ("death" !== BB || "inGame" !== kB.d.get("gameState") || "off" === (0, zB.i)().quickChat || null === (0, iZ.d)()) return !1;
        const IB = (0, nB.g)("chat");
        return IB !== (0, nB.g)("menuConfirm") && IB !== (0, nB.g)("menuBack")
      },
      MZ = new pZ.e;
    var jZ = ZB(4469),
      PZ = ZB(8840),
      RZ = ZB(8843);
    const rZ = BB => {
        let IB = null;
        for (const ZB of BB.querySelectorAll("[data-pad-tabs]"))(0, VB.r)(ZB) && (!IB || Number(ZB.dataset.padTabs) < Number(IB.dataset.padTabs)) && (IB = ZB);
        return IB
      },
      mZ = (BB, IB, ZB, TB) => {
        BB.focusWhenFound((() => {
          const JB = BB.pickInitial(IB);
          if (JB && !ZB.has(JB) && (null === TB || void 0 === TB || !TB.contains(JB))) return JB;
          const oB = ((BB, IB) => {
              const ZB = IB => BB.getEnabledCandidates(IB).filter((BB => !BB.closest("[data-pad-tabs]")));
              for (const TB of (0, VB.i)(IB)) {
                const BB = ZB(TB);
                if (BB.length > 0) return BB
              }
              return ZB(IB)
            })(BB, IB).filter((BB => !ZB.has(BB))),
            GB = YZ(oB.map((BB => BB.getBoundingClientRect())));
          return GB >= 0 ? oB[GB] : null
        }), 3e3)
      },
      XZ = (BB, IB, ZB, TB) => {
        var JB;
        const oB = ((BB, IB) => {
          if (0 === BB.length) return null;
          const ZB = BB.findIndex((BB => "true" === BB.dataset.padSelected));
          return ZB < 0 ? IB > 0 ? BB[0] : BB[BB.length - 1] : BB[(ZB + IB + BB.length) % BB.length]
        })([...ZB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, VB.r)(BB) && !(0, VB.x)(BB))), TB);
        if (!oB) return;
        const GB = null !== (JB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== JB ? JB : null,
          vB = !(null === GB || void 0 === GB || !GB.isConnected) && ZB.contains(GB),
          kB = BB && !vB ? new Set(BB.getEnabledCandidates(IB)) : null;
        (0, AB.e)(oB), BB && (kB ? mZ(BB, IB, kB, ZB) : BB.setFocus(oB, {
          byUser: !0
        }))
      },
      LZ = BB => {
        var IB;
        const ZB = PB(null !== (IB = iB(BB, "x")) && void 0 !== IB ? IB : BB),
          TB = (0, VB.e)(BB).filter((BB => !(0, VB.x)(BB))),
          JB = TB.filter((BB => RB(BB.getBoundingClientRect(), ZB)));
        return (JB.length > 0 ? JB : TB).sort(((BB, IB) => OZ(BB.getBoundingClientRect(), IB.getBoundingClientRect())))
      },
      eZ = (BB, IB, ZB) => {
        const TB = [...IB.querySelectorAll("[data-pad-row]")].filter(VB.r),
          JB = BB.getFocused(),
          oB = JB ? TB.findIndex((BB => BB.contains(JB))) : -1;
        let GB = 0,
          vB = ZB > 0 ? 0 : TB.length - 1;
        if (oB >= 0 && JB) GB = Math.max(0, LZ(TB[oB]).indexOf(JB)), vB = oB + ZB;
        else if (JB) {
          const BB = JB.getBoundingClientRect(),
            IB = TB.map((IB => {
              const TB = IB.getBoundingClientRect();
              return ZB > 0 ? TB.top >= BB.top : TB.bottom <= BB.bottom
            }));
          vB = ZB > 0 ? IB.indexOf(!0) : IB.lastIndexOf(!0)
        }
        for (let kB = vB; kB >= 0 && kB < TB.length; kB += ZB) {
          const IB = LZ(TB[kB]);
          if (IB.length > 0) return void BB.setFocus(IB[Math.min(GB, IB.length - 1)], {
            byUser: !0
          })
        }
      },
      uZ = (BB, IB, ZB) => {
        var TB, JB;
        const oB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== TB ? TB : null,
          GB = null !== oB && void 0 !== oB && oB.closest("[data-pad-row]") ? "x" : "y",
          vB = null !== (JB = oB ? iB(oB, GB, IB) : null) && void 0 !== JB ? JB : aB(IB, GB);
        if (!vB) return;
        const kB = oB ? (0, AB.H)(oB) : null;
        if (jB(vB, GB, ZB * ("y" === GB ? vB.clientHeight : vB.clientWidth) * .85), !BB || !kB) return;
        const cB = PB(vB),
          nB = BB.getEnabledCandidates(IB).filter((BB => vB.contains(BB) && RB(BB.getBoundingClientRect(), cB))),
          hB = wZ(kB, nB.map((BB => BB.getBoundingClientRect())));
        hB >= 0 && BB.setFocus(nB[hB], {
          scroll: !1,
          byUser: !0
        })
      };
    let fZ = null;
    const lZ = (BB, IB) => {
        var ZB, TB;
        const JB = IB.querySelector("[data-pad-friends-column]"),
          oB = BB.getFocused();
        if (!JB || !oB || !JB.contains(oB)) return !1;
        const GB = BB.getEnabledCandidates(IB).filter((BB => !JB.contains(BB))),
          vB = wZ((0, AB.H)(oB), GB.map((BB => BB.getBoundingClientRect()))),
          kB = null === (ZB = fZ) || void 0 === ZB ? void 0 : ZB.deref();
        return BB.setFocus(null !== kB && void 0 !== kB && kB.isConnected ? kB : null !== (TB = GB[vB]) && void 0 !== TB ? TB : null, {
          byUser: !0
        }), !0
      },
      AZ = BB => {
        const IB = (0, nB.g)(BB);
        return (0, NB.F)(IB) || cZ.t.some((BB => (0, nB.g)(BB) === IB)) ? null : IB
      },
      tZ = (BB, IB) => {
        const ZB = AZ(IB);
        return null !== ZB && BB.wasPressed(ZB)
      },
      bZ = function(BB, IB, ZB) {
        let TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const JB = (BB => {
            var IB, ZB;
            return null !== (IB = null === (ZB = rZ(BB)) || void 0 === ZB ? void 0 : ZB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== IB ? IB : null
          })(IB),
          oB = BB && JB ? new Set(BB.getEnabledCandidates(IB)) : null;
        (0, GZ.c)(), ZB === vZ.q.SETTINGS && (0, kZ.h)(kB.d.get("openEverythingMenuName")) ? kB.d.set({
          openEverythingMenuName: ZB
        }) : (0, kZ.x)((0, RZ.e)("padMenuShortcut"), ZB, TB), BB && oB && JB && mZ(BB, IB, oB, JB.closest("[data-pad-tabs]"))
      },
      xZ = BB => null !== BB.closest(".Dropdown-root") || null !== BB.querySelector(".Dropdown-root.is-open"),
      EZ = BB => null !== (0, PZ.e)() && "popup" !== BB.layer.kind && !rZ(BB.root) && !xZ(BB.root),
      DZ = (0, gB.d)(NB.Y),
      KZ = (0, gB.d)(NB.Y),
      VZ = (BB, IB, ZB) => {
        if (((BB, IB) => {
            const ZB = (0, nB.g)("chat");
            return HZ(IB) && BB.isHeld(ZB) ? "hold" === MZ.update(BB.wasPressed(ZB), BB.isHeld(ZB), performance.now(), qB.c[(0, zB.i)().tapHoldTime].wheelMs) && (hB.c.consumeButton(ZB), cB.l.Gq(aZ.l), !0) : (MZ.release(), !1)
          })(IB, ZB.layer.kind)) return !0;
        const TB = ZB.root;
        for (const [GB, vB] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (IB.wasPressed((0, nB.g)(GB))) {
            const IB = xZ(TB) ? null : rZ(TB);
            if (IB) XZ(BB, TB, IB, vB);
            else if (EZ(ZB)) {
              var JB;
              const IB = BB ? new Set(BB.getEnabledCandidates(TB)) : null;
              null !== (JB = (0, PZ.e)()) && void 0 !== JB && JB(vB) && BB && IB && mZ(BB, TB, IB, null)
            } else BB && eZ(BB, TB, vB);
            return !0
          } for (const [GB, vB, kB] of [
            ["menuPageUp", -1, DZ],
            ["menuPageDown", 1, KZ]
          ]) {
          const ZB = (0, nB.g)(GB);
          if (IB.wasPressed(ZB) && kB.reset(), kB.update(IB.isHeld(ZB), performance.now())) return uZ(BB, TB, vB), !0
        }
        const oB = "popup" === ZB.layer.kind;
        return tZ(IB, "pause") ? (oB || (0, kZ.p)() && "menu" !== ZB.layer.kind || bZ(BB, TB, (0, kZ.p)() ? vZ.q.SETTINGS : (0, jZ.d)()), !0) : !!tZ(IB, "leaderboard") && ("home" === ZB.layer.kind ? (BB => {
          const IB = [...BB.querySelectorAll("[data-pad-notifications]")].find(VB.r);
          IB && (0, AB.e)(IB)
        })(TB) : oB || bZ(BB, TB, vZ.q.LOBBY_LEADERBOARD, "inGame" === kB.d.get("gameState")), !0)
      },
      SZ = (BB, IB, ZB) => {
        if (VZ(BB, IB, ZB)) return !0;
        const TB = "home" === ZB.layer.kind;
        if (IB.wasPressed((0, nB.g)("menuSecondary"))) {
          const IB = BB.getFocused(),
            JB = IB ? zZ(IB) : null;
          if (JB) return (0, AB.e)(JB), !0;
          if (TB) {
            const IB = ZB.root.querySelector("[data-pad-search] input");
            return IB && (0, VB.u)(IB, ZB.root) ? (BB.setFocus(IB, {
              byUser: !0
            }), (0, AB.e)(IB)) : kB.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!TB || !tZ(IB, "inventory")) && (((BB, IB) => {
          var ZB, TB;
          const JB = IB.querySelector("[data-pad-friends-column]");
          if (!JB || !(0, VB.r)(JB)) return void(0, kZ.x)((0, RZ.e)("padMenuShortcut"), vZ.q.SOCIAL);
          if (lZ(BB, IB)) return;
          const oB = null !== (ZB = null === (TB = JB.querySelector("[data-pad-friends-start]")) || void 0 === TB ? void 0 : TB.getBoundingClientRect().top) && void 0 !== ZB ? ZB : -1 / 0,
            GB = BB.getEnabledCandidates(JB),
            vB = GB.filter((BB => BB.getBoundingClientRect().top >= oB)),
            kB = vB.length > 0 ? vB : GB,
            cB = YZ(kB.map((BB => BB.getBoundingClientRect())));
          BB.setFocus(cB >= 0 ? kB[cB] : null, {
            byUser: !0
          })
        })(BB, ZB.root), !0)
      },
      BT = BB => {
        var IB, ZB, TB;
        const JB = (0, AB.K)(BB);
        if (null !== JB) return JB;
        const oB = (null !== (IB = null !== (ZB = null !== (TB = BB.getAttribute("aria-label")) && void 0 !== TB ? TB : BB.getAttribute("title")) && void 0 !== ZB ? ZB : BB.textContent) && void 0 !== IB ? IB : "").replace(/\s+/g, " ").trim();
        return oB ? `${BB.tagName}:${oB.slice(0,100)}` : null
      };
    class IT {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(BB) {
        const IB = this.history.indexOf(BB);
        if (IB >= 0) {
          for (const BB of this.history.splice(IB + 1)) this.remembered.delete(BB);
          return !0
        }
        return this.remembered.delete(BB), this.history.push(BB), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(BB) {
        this.remembered.delete(BB);
        const IB = this.history.indexOf(BB);
        IB >= 0 && this.history.splice(IB, 1)
      }
      remember(BB, IB, ZB, TB) {
        const JB = BT(IB),
          oB = (0, AB.K)(IB),
          GB = null !== oB && ((BB, IB) => {
            let ZB = 0;
            for (const TB of BB.querySelectorAll("[data-pad-key], [href]"))
              if ((TB.getAttribute("data-pad-key") === IB || TB.getAttribute("href") === IB) && (ZB++, ZB > 1)) return !0;
            return !1
          })(ZB, oB) ? Math.max(0, this.twins(TB(), oB).indexOf(IB)) : 0;
        this.remembered.set(BB, {
          element: new WeakRef(IB),
          identity: JB,
          ordinal: GB
        })
      }
      has(BB) {
        return this.remembered.has(BB)
      }
      recall(BB, IB) {
        var ZB, TB;
        const JB = this.remembered.get(BB);
        if (!JB) return null;
        const oB = JB.element.deref();
        if (oB && IB.includes(oB)) return oB;
        if (null === JB.identity) return null;
        const GB = this.twins(IB, JB.identity);
        return null !== (ZB = null !== (TB = GB[JB.ordinal]) && void 0 !== TB ? TB : GB[0]) && void 0 !== ZB ? ZB : null
      }
      twins(BB, IB) {
        return BB.filter((BB => BT(BB) === IB))
      }
    }
    var ZT = ZB(1343);
    const TT = BB => {
        const IB = [];
        let ZB = BB;
        for (; ZB && ZB !== document.body;) {
          const BB = getComputedStyle(ZB).zIndex;
          "auto" !== BB && IB.push(Number(BB) || 0), ZB = ZB.parentElement
        }
        return IB.reverse()
      },
      JT = (BB, IB) => {
        const ZB = ((BB, IB) => {
          const ZB = Math.max(BB.length, IB.length);
          for (let oB = 0; oB < ZB; oB++) {
            var TB, JB;
            const ZB = (null !== (TB = BB[oB]) && void 0 !== TB ? TB : 0) - (null !== (JB = IB[oB]) && void 0 !== JB ? JB : 0);
            if (0 !== ZB) return ZB
          }
          return 0
        })(TT(BB), TT(IB));
        if (0 !== ZB) return ZB > 0;
        if (BB.contains(IB)) return !1;
        if (IB.contains(BB)) return !0;
        const TB = BB.compareDocumentPosition(IB);
        return !!(TB & Node.DOCUMENT_POSITION_PRECEDING) || !(TB & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      oT = (BB, IB) => {
        var ZB;
        return null !== (ZB = JT(BB.root, IB.root)) && void 0 !== ZB ? ZB : BB.order > IB.order
      },
      GT = (BB, IB) => IB.some((IB => !IB.contains(BB) && !BB.contains(IB) && !0 === JT(IB, BB)));
    let vT = null,
      kT = null,
      cT = -1;
    const nT = () => {
        var BB;
        const IB = null === (BB = document.timeline) || void 0 === BB ? void 0 : BB.currentTime,
          ZB = "number" === typeof IB ? IB : null;
        if (null !== ZB && ZB === kT && cT === (0, ZT.d)()) return vT;
        let TB = null;
        const JB = [],
          oB = [...document.querySelectorAll("[data-pad-covers]")].filter(VB.r);
        for (const GB of (0, ZT.f)()) {
          const BB = GB.getRoot(),
            IB = !!BB && (0, VB.r)(BB) && !GT(BB, oB);
          if (GB.shown && !IB && JB.push(GB), GB.shown = IB, !BB || !IB) continue;
          const ZB = {
            layer: GB,
            root: BB,
            order: GB.order
          };
          TB && !oT(ZB, TB) || (TB = ZB)
        }
        vT = TB, kT = ZB, cT = (0, ZT.d)();
        for (const GB of JB)(0, ZT.h)(GB);
        return vT
      },
      hT = () => {
        const BB = nT();
        return !(null === BB || void 0 === BB || !BB.layer.close) && (BB.layer.close(), kT = null, !0)
      },
      zT = () => {
        var BB, IB;
        return null !== (BB = null === (IB = nT()) || void 0 === IB ? void 0 : IB.root) && void 0 !== BB ? BB : null
      },
      FT = BB => BB ? {
        ...BB,
        root: zT()
      } : null;
    let NT = null,
      gT = null,
      qT = (0, zB.i)().menuNavigation,
      yT = null;
    const UT = new CB;
    let WT = null;
    cB.l.subscribe(zB.f, (() => {
      const BB = (0, zB.i)().menuNavigation;
      BB !== qT && (qT = BB, NT = null, gT = null)
    }));
    const dT = () => {
        var BB;
        return null !== (BB = NT) && void 0 !== BB ? BB : (0, zB.i)().menuNavigation
      },
      CT = BB => {
        if (OT()) {
          if (yT = FT(BB), "hybrid" === dT()) return UT.lock(), void(gT = gT ? null : zT());
          NT = "focus" === dT() ? "cursor" : "focus"
        }
      },
      QT = () => {
        const BB = yT;
        return yT = null, BB
      };
    let sT = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const wT = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZB = sT.root === BB,
          TB = ZB ? sT.firstSeenMs : IB,
          JB = sT.has || IB - TB > 1e3;
        return (!ZB || !JB || IB - sT.atMs > 250) && (sT = {
          root: BB,
          firstSeenMs: TB,
          atMs: IB,
          has: (0, VB.m)(BB)
        }), sT.has
      },
      OT = () => {
        const BB = zT();
        return null !== BB && wT(BB)
      },
      YT = () => {
        const BB = nT();
        return gT && (null === BB || void 0 === BB ? void 0 : BB.root) !== gT && (gT = null), (BB => {
          let {
            mode: IB,
            hasLayer: ZB,
            hasCandidates: TB,
            hybridCursorEngaged: JB
          } = BB;
          return ZB ? "cursor" !== IB && TB() ? "hybrid" === IB && JB ? "cursor" : "focus" : "cursor" : null
        })({
          mode: dT(),
          hasLayer: null !== BB,
          hasCandidates: () => null !== BB && wT(BB.root),
          hybridCursorEngaged: null !== gT
        })
      },
      iT = () => "hybrid" === dT() && OT(),
      pT = "pad-focused";
    var aT = ZB(4732),
      HT = ZB(5186);
    const MT = "[data-pad-destructive]",
      jT = `${MT}, [data-pad-back]`,
      PT = BB => ({
        rect: BB.getBoundingClientRect(),
        destructive: BB.matches(MT),
        closes: null !== BB.closest("[data-pad-close-button]"),
        unavailable: BB.matches("[data-pad-unavailable]")
      }),
      RT = BB => {
        let {
          destructive: IB,
          closes: ZB,
          unavailable: TB
        } = BB;
        return IB ? ZB ? 2 : 3 : TB ? 1 : 0
      },
      rT = BB => {
        let IB = -1;
        for (let ZB = 0; ZB < BB.length; ZB++) {
          if (IB < 0) {
            IB = ZB;
            continue
          }
          const TB = BB[ZB],
            JB = BB[IB];
          RT(TB) === RT(JB) ? OZ(TB.rect, JB.rect) < 0 && (IB = ZB) : RT(TB) < RT(JB) && (IB = ZB)
        }
        return IB
      },
      mT = "[data-pad-tabs]",
      XT = "[data-pad-tab]",
      LT = (BB, IB) => {
        const ZB = BB.querySelector(`${XT}[data-pad-selected='true']`);
        return ZB && IB.includes(ZB) ? ZB : null
      },
      eT = (BB, IB) => {
        let ZB = IB;
        for (let TB = IB.parentElement; TB && !TB.contains(BB); TB = TB.parentElement) ZB = TB;
        return ZB
      };
    class uT {
      constructor() {
        this.contentReturn = null
      }
      redirect(BB, IB, ZB, TB) {
        var JB, oB;
        const GB = BB.closest(mT),
          vB = IB.closest(mT);
        var kB;
        if (vB && vB !== GB) return GB || (this.contentReturn = new WeakRef(BB)), null !== (kB = LT(vB, ZB)) && void 0 !== kB ? kB : IB;
        if (!GB || vB) return IB;
        const cB = eT(BB, IB),
          nB = null === (JB = this.contentReturn) || void 0 === JB ? void 0 : JB.deref();
        return nB && cB.contains(nB) && ZB.includes(nB) ? nB : null !== (oB = this.pickRegionStart(cB, iB(IB, "y", TB), ZB)) && void 0 !== oB ? oB : IB
      }
      findTabContent(BB, IB, ZB) {
        const TB = BB.closest(mT);
        if (!TB || !BB.matches(XT) || TB.contains(IB)) return null;
        const JB = IB.closest(mT);
        if (JB && Number(JB.dataset.padTabs) <= Number(TB.dataset.padTabs)) return null;
        const oB = eT(BB, IB);
        return ZB.some((BB => oB.contains(BB) && !BB.closest(jT))) || !IB.closest(jT) ? oB : null
      }
      pickContentStart(BB, IB, ZB) {
        return this.contentReturn = null, this.pickRegionStart(BB, iB(BB, "y", ZB), IB)
      }
      pickReplacedContentStart(BB, IB, ZB, TB) {
        if (!IB.contains(BB)) return null;
        const JB = eT(IB, BB),
          oB = ZB.filter((BB => IB.contains(BB) && !JB.contains(BB) && !BB.closest(jT)));
        return 0 === oB.length ? null : (this.contentReturn = null, this.pickRegionStart(IB, iB(oB[0], "y", TB), oB))
      }
      backToStrip(BB, IB, ZB) {
        if (BB.closest(mT)) return null;
        const TB = rZ(ZB);
        for (const JB of ZB.querySelectorAll(mT)) {
          if (Number(JB.dataset.padTabs) <= 1 || JB === TB) continue;
          const oB = LT(JB, IB),
            GB = oB ? eT(BB, JB).parentElement : null;
          if (oB && GB && GB !== ZB && ZB.contains(GB)) return this.contentReturn = new WeakRef(BB), oB
        }
        return null
      }
      pickRegionStart(BB, IB, ZB) {
        const TB = PB(IB),
          JB = BB => {
            const IB = ZB.filter((IB => BB.contains(IB) && !IB.closest(mT) && RB(IB.getBoundingClientRect(), TB))),
              JB = rT(IB.map(PT));
            return JB >= 0 ? IB[JB] : null
          };
        for (const oB of (0, VB.i)(BB)) {
          const BB = JB(oB);
          if (BB) return BB
        }
        for (const oB of BB.querySelectorAll(mT)) {
          const BB = LT(oB, ZB);
          if (BB) return BB
        }
        return JB(BB)
      }
    }
    const fT = "[data-pad-default-focus], .Dropdown-option.is-selected",
      lT = ".Dropdown-root.is-open > .Dropdown-menu",
      AT = "[data-pad-no-step-in]",
      tT = "[data-pad-tabs]",
      bT = "[data-pad-press-area]",
      xT = BB => {
        let IB = BB;
        for (let ZB = 0; IB && ZB <= 4; ZB++, IB = IB.parentElement) {
          const ZB = IB.querySelector(".CircleInfo");
          if (ZB) return IB === BB || IB.querySelectorAll(VB.b).length <= 1 ? ZB : null;
          if (IB !== BB && IB.querySelectorAll(VB.b).length > 1) return null
        }
        return null
      },
      ET = (BB, IB, ZB) => {
        (0, AB.u)(BB, IB, ZB);
        const TB = null !== BB && void 0 !== BB && BB.isConnected ? xT(BB) : null,
          JB = xT(IB);
        TB !== JB && (0, AB.u)(TB, JB, JB ? (0, AB.H)(JB) : ZB, {
          leaveBelow: BB,
          enterBelow: IB
        })
      },
      DT = BB => BB.getBoundingClientRect(),
      KT = (BB, IB, ZB) => {
        const TB = new Set(ZB);
        for (let JB = BB; JB; JB = JB === IB ? null : JB.parentElement)
          if (TB.has(JB)) return JB;
        return null
      },
      VT = (BB, IB) => !BB.root || BB.root === IB || IB.matches(lT) && BB.root.contains(IB);
    const ST = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new IT, this.tabStripNav = new uT, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, gB.d)(NB.s), this.dpadRepeats = new Map(NB.y.map((BB => [BB, (0, gB.d)(NB.B)]))), this.stickRepeat = new NB.d((0, gB.d)(NB.$)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const BB = hB.c.register({
            name: "focus",
            isActive: () => (0, FB.i)() && "focus" === YT(),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: BB => (0, hB.f)(BB) || BB === (0, nB.g)("menuConfirm") && (0, AB.N)((0, FB.c)())
          }),
          IB = (0, ZT.j)((BB => {
            const IB = (0, ZT.r)(BB);
            null === BB.memoryKey && this.memory.forget(IB), IB === this.layerKey && (this.layerKey = null)
          }));
        let ZB = -1 / 0;
        const TB = GB.h.onFrame((BB => {
            (0, FB.i)() || BB.timestampMs - ZB < 100 || (ZB = BB.timestampMs, nT())
          })),
          JB = BB => {
            BB.isTrusted && BB.target instanceof Element && GB.h.getActivePad() && this.noteChosenStop(BB.target)
          };
        return document.addEventListener("click", JB, !0), () => {
          BB(), IB(), TB(), document.removeEventListener("click", JB, !0), this.deactivate()
        }
      }
      noteChosenStop(BB) {
        var IB, ZB;
        const TB = nT();
        if (!TB || !TB.root.contains(BB)) return;
        const JB = null !== (IB = null === (ZB = BB.closest(".Dropdown-root")) || void 0 === ZB ? void 0 : ZB.querySelector(".Dropdown-control")) && void 0 !== IB ? IB : BB,
          oB = KT(JB, TB.root, this.getEnabledCandidates(TB.root));
        if (!oB) return;
        const GB = (0, ZT.r)(TB.layer);
        GB === this.layerKey && TB.root === this.layerRoot || this.beginLayer(TB, GB), this.wasActive ? this.setFocus(oB, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = oB, this.lastFocusedCentre = (0, AB.H)(oB), this.rememberFocus(oB), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      deactivate() {
        var BB;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const BB of this.dpadRepeats.values()) BB.reset();
          this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && ET(this.focused, null, (0, AB.H)(this.focused)), this.notify()
        }
      }
      setFocus(BB) {
        var IB;
        let {
          scroll: ZB = !0,
          byUser: TB = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (TB && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), BB === this.focused) return;
        const JB = null !== (IB = this.focused) && void 0 !== IB && IB.isConnected ? this.focused : null;
        if (this.focused = BB, BB) {
          ZB && (BB.classList.add(pT), BB.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), TB && ((BB, IB) => {
            const ZB = IB.closest("[data-pad-friends-column]");
            ZB && BB && !ZB.contains(BB) && (fZ = new WeakRef(BB))
          })(JB, BB);
          const IB = (0, AB.H)(BB);
          this.lastFocusedCentre = IB, this.movedInLayer && this.rememberFocus(BB), ET(JB, BB, IB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, AB.e)(BB)
        } else JB && ET(JB, null, (0, AB.H)(JB));
        this.notify()
      }
      rememberFocus(BB) {
        const IB = this.layerRoot;
        this.layerKey && IB && this.memory.remember(this.layerKey, BB, IB, (() => this.getEnabledCandidates(IB)))
      }
      noteCursorActivation(BB) {
        const IB = nT();
        if (!IB || !IB.root.contains(BB)) return;
        const ZB = this.getEnabledCandidates(IB.root),
          TB = new Set(ZB);
        let JB = BB;
        for (; JB && !TB.has(JB);) JB = JB === IB.root ? null : JB.parentElement;
        if (!(JB instanceof HTMLElement)) return;
        const oB = (0, ZT.r)(IB.layer);
        this.memory.enter(oB), this.memory.remember(oB, JB, IB.root, (() => ZB))
      }
      notePageEnteredByCursor(BB) {
        return this.memory.enter(BB)
      }
      recallStop(BB, IB) {
        return this.findRemembered(BB, IB)
      }
      focusWhenFound(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: BB,
          untilMs: performance.now() + IB,
          holdWhile: ZB
        }
      }
      getEnabledCandidates(BB) {
        return (0, VB.e)(BB).filter((BB => !(0, VB.x)(BB)))
      }
      onFrame(BB) {
        var IB;
        const ZB = nT();
        if (!ZB) return;
        const TB = null !== (IB = this.findOpenDropdown(ZB)) && void 0 !== IB ? IB : ZB,
          JB = performance.now(),
          oB = (0, ZT.r)(TB.layer);
        if (oB !== this.layerKey || TB.root !== this.layerRoot) {
          const IB = this.focused;
          if (null !== this.layerKey && TB.root === this.layerRoot && IB && (0, VB.u)(IB, TB.root)) this.continueLayer(oB, IB), this.wasActive || this.resume(TB.root, JB);
          else {
            const IB = !this.wasActive && !BB.wokeDevice,
              GB = "death" === this.layerKind || IB,
              vB = this.enterLayer(TB, oB);
            "popup" !== TB.layer.kind || TB !== ZB || vB ? "menu" === TB.layer.kind && GB && "inGame" === kB.d.get("gameState") && !(0, GZ.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = JB + aT.c) : (this.pressGuardExtends = IB, this.pressGuardUntilMs = JB + (IB ? aT.c : GB ? 500 : 250))
          }
        } else this.wasActive || this.resume(TB.root, JB);
        if (this.layerKind = TB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(TB.root), this.validateFocus(TB, JB), JB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, nB.g)("menuConfirm")) || BB.wasPressed((0, nB.g)("menuBack"))) && (this.pressGuardUntilMs = JB + aT.c), JB >= this.pressGuardUntilMs && this.handleButtons(BB, TB)) return;
        const GB = "hybrid" === dT();
        if (GB && (BB => {
            const IB = zT();
            return IB !== WT && (WT = IB, UT.lock()), UT.update(BB, (0, zB.i)().moveDeadzone)
          })(BB.leftStick)) return vB = this.getHandoff(), yT = FT(vB), gT = zT(), void hB.c.handOffHeldInput();
        var vB;
        this.handleDirections(BB, TB, JB, !GB), this.handleScroll(BB, TB)
      }
      findOpenDropdown(BB) {
        const IB = BB.root.querySelector(lT);
        if (!IB || !(0, VB.r)(IB)) return null;
        let ZB = this.dropdownLayers.get(IB);
        return ZB || (this.dropdownLayerCounter++, ZB = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: BB.layer.kind,
          getRoot: () => IB,
          close: () => {
            (0, AB.n)(IB)
          },
          memoryKey: null
        }, this.dropdownLayers.set(IB, ZB)), {
          layer: ZB,
          root: IB,
          order: BB.order
        }
      }
      focusPointedStop(BB) {
        const IB = (0, FB.c)(),
          ZB = IB ? document.elementFromPoint(IB.x, IB.y) : null;
        if (!ZB || !BB.contains(ZB)) return;
        const TB = KT(ZB, BB, this.getEnabledCandidates(BB));
        TB && this.setFocus(TB, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(BB, IB) {
        const ZB = this.beginLayer(BB, IB),
          TB = QT();
        return TB && VT(TB, BB.root) ? (this.takeOver(BB.root, TB, this.enteredLayerAtMs), ZB) : (this.restoreLayerFocus(BB.root, ZB), ZB)
      }
      beginLayer(BB, IB) {
        return this.layerKey = IB, this.layerRoot = BB.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(IB)
      }
      restoreLayerFocus(BB, IB) {
        const ZB = IB && this.layerKey ? this.findRemembered(BB, this.layerKey) : null;
        this.restoredFromMemory = null !== ZB, this.setFocus(null !== ZB && void 0 !== ZB ? ZB : this.pickInitial(BB, {
          waitForContent: !0
        }))
      }
      continueLayer(BB, IB) {
        this.layerKey = BB;
        const ZB = this.memory.enter(BB);
        this.restoreOnFocusLoss = ZB, this.movedInLayer && !ZB && this.rememberFocus(IB)
      }
      resume(BB, IB) {
        var ZB;
        const TB = QT();
        TB && VT(TB, BB) ? this.takeOver(BB, TB, IB) : null !== (ZB = this.focused) && void 0 !== ZB && ZB.isConnected && ET(null, this.focused, (0, AB.H)(this.focused))
      }
      pickPreferred(BB) {
        var IB;
        return null !== (IB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== IB ? IB : this.pickInitial(BB, {
          waitForContent: !0
        })
      }
      findRemembered(BB, IB) {
        return this.memory.has(IB) ? this.memory.recall(IB, this.getEnabledCandidates(BB)) : null
      }
      getHandoff() {
        var BB, IB, ZB;
        const TB = null !== (BB = this.focused) && void 0 !== BB && BB.isConnected ? this.focused : null,
          JB = null !== (IB = this.layerRoot) && void 0 !== IB && IB.isConnected ? this.layerRoot : null;
        return {
          point: TB ? (0, AB.H)(TB) : null !== (ZB = this.lastFocusedCentre) && void 0 !== ZB ? ZB : this.getLayerStartPoint(JB),
          element: TB,
          direction: null
        }
      }
      getLayerStartPoint(BB) {
        if (!BB) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const IB = this.pickInitial(BB, {
          includeDisabled: !0
        });
        return (0, AB.H)(null !== IB && void 0 !== IB ? IB : BB)
      }
      takeOver(BB, IB, ZB) {
        const {
          element: TB,
          direction: JB,
          point: oB
        } = IB, GB = TB instanceof HTMLElement && (0, VB.u)(TB, BB) ? TB : null;
        if (!JB) {
          const IB = this.focused;
          return GB ? this.setFocus(GB, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(BB, oB), void(this.focused && this.focused === IB && this.focused.isConnected && ET(null, this.focused, (0, AB.H)(this.focused)))
        }
        if (this.dpadRepeats.get(JB).update(!0, ZB), GB) return this.setFocus(GB, {
          scroll: !1,
          byUser: !0
        }), void this.move(BB, JB, ZB, !0);
        const vB = this.getEnabledCandidates(BB),
          kB = vB.map(DT),
          cB = WZ(new DOMRect(oB.x, oB.y, 0, 0), kB, JB),
          nB = cB >= 0 ? cB : wZ(oB, kB);
        this.setFocus(nB >= 0 ? vB[nB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      focusNearest(BB, IB) {
        const ZB = this.getEnabledCandidates(BB),
          TB = wZ(IB, ZB.map(DT));
        this.setFocus(TB >= 0 ? ZB[TB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      pickDefault(BB) {
        let {
          includeDisabled: IB = !1,
          exclude: ZB = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const TB = [...BB.querySelectorAll(fT)].filter((TB => (null === ZB || void 0 === ZB || !ZB.has(TB)) && (IB ? (0, VB.y)(TB, BB) : (0, VB.u)(TB, BB)))),
          JB = rT(TB.map(PT));
        return JB >= 0 ? TB[JB] : null
      }
      pickNewAreaStart(BB, IB) {
        const ZB = [...BB.querySelectorAll(bT)].filter(VB.r);
        for (const TB of [...(0, VB.i)(BB), ...ZB]) {
          if (IB.has(TB)) continue;
          const BB = this.getEnabledCandidates(TB),
            ZB = rT(BB.map(PT));
          if (ZB >= 0) return BB[ZB]
        }
        return null
      }
      pickInitial(BB) {
        let {
          includeDisabled: IB = !1,
          waitForContent: ZB = !1,
          enteredAtMs: TB = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const JB = this.pickDefault(BB, {
          includeDisabled: IB
        });
        if (JB) return JB;
        const oB = BB => IB ? (0, VB.e)(BB) : this.getEnabledCandidates(BB);
        let GB = [];
        for (const zB of (0, VB.i)(BB))
          if (GB = oB(zB), GB.length > 0) break;
        if (0 === GB.length) {
          if (ZB && performance.now() - TB < 1e4 && (0, VB.o)(BB)) return null;
          GB = oB(BB)
        }
        const vB = GB.map(DT),
          kB = PB(null),
          cB = GB.filter(((BB, IB) => RB(vB[IB], kB))),
          nB = cB.length > 0 ? cB : GB,
          hB = rT(nB.map(PT));
        return hB >= 0 ? nB[hB] : null
      }
      validateFocus(BB, IB) {
        if (this.pendingFocus) {
          var ZB, TB;
          const JB = this.pendingFocus.find();
          if (JB && (0, VB.u)(JB, BB.root)) return this.pendingFocus = null, void this.setFocus(JB, {
            byUser: !0
          });
          IB > this.pendingFocus.untilMs && (null === (ZB = (TB = this.pendingFocus).holdWhile) || void 0 === ZB || !ZB.call(TB)) && (this.pendingFocus = null)
        }
        const JB = this.focused,
          oB = !!JB && (0, VB.u)(JB, BB.root);
        if (!(!oB && JB && JB === this.lastActivated && IB - this.lastActivatedAtMs < 5e3 && BB.root.contains(JB) && (0, VB.r)(JB) && (0, VB.x)(JB))) {
          if (!oB && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = IB, void this.restoreLayerFocus(BB.root, !0);
          if ((!oB || !this.movedInLayer && !this.scrolledInLayer) && !(IB - this.lastRefocusCheckMs < (oB ? 200 : 50)))
            if (this.lastRefocusCheckMs = IB, oB) {
              const ZB = IB - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(BB.root) : null,
                TB = null !== ZB && void 0 !== ZB ? ZB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
              TB && TB !== JB && this.setFocus(TB)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const IB = this.pendingFocus;
                return this.focusNearest(BB.root, this.lastFocusedCentre), void(this.pendingFocus = IB)
              }
              this.setFocus(this.pickPreferred(BB.root))
            }
        }
      }
      handleButtons(BB, IB) {
        if (BB.wasPressed((0, nB.g)("menuToggleCursor"))) return CT(this.getHandoff()), !0;
        if (BB.wasPressed((0, nB.g)("menuBack"))) {
          const BB = (0, AB.n)(IB.root);
          return BB ? this.setFocus(BB, {
            byUser: !0
          }) : lZ(this, IB.root) || ((0, AB.h)(IB.root) ? this.returnToOpener(IB.root) : this.backToStrip(IB.root) || hT()), !0
        }
        const ZB = (0, nB.g)("menuConfirm");
        var TB, JB;
        BB.wasPressed(ZB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (TB = null === (JB = this.focused) || void 0 === JB ? void 0 : JB.getAttribute("data-pad-repeat")) && void 0 !== TB ? TB : null, this.confirmRepeated = BB.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (BB.wasReleased(ZB)) {
          const BB = this.confirmPressedOn;
          if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, VB.x)(BB)) {
            const ZB = BB.matches("[data-pad-tab]") ? BB.closest(tT) : null;
            ZB ? this.enterTab(BB, ZB, IB.root, performance.now()) : this.activate(BB)
          }
          return !0
        }
        return this.repeatConfirm(BB, ZB), SZ(this, BB, IB)
      }
      repeatConfirm(BB, IB) {
        const ZB = this.confirmPressedOn;
        ZB && null !== this.confirmRepeatKey && BB.isHeld(IB) && (ZB === this.focused && ZB.isConnected && !(0, VB.x)(ZB) && ZB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ZB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ZB)) : this.confirmRepeatKey = null)
      }
      backToStrip(BB) {
        const IB = this.focused;
        if (!(0, zB.i)().menuBackToCategories) return !1;
        const ZB = null !== IB && void 0 !== IB && IB.isConnected ? this.tabStripNav.backToStrip(IB, this.getEnabledCandidates(BB), BB) : null;
        return ZB && this.setFocus(ZB, {
          byUser: !0
        }), null !== ZB
      }
      returnToOpener(BB) {
        const IB = this.lastActivatedKey;
        IB && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var ZB;
          return null !== (ZB = this.getEnabledCandidates(BB).find((BB => (0, AB.K)(BB) === IB))) && void 0 !== ZB ? ZB : null
        })))
      }
      activate(BB) {
        var IB;
        if ((0, HT.b)(BB) || (0, AB.L)(BB)) return;
        this.lastActivatedKey = null !== (IB = (0, AB.K)(BB)) && void 0 !== IB ? IB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
        const ZB = this.layerRoot;
        if (ZB) {
          const IB = new Set(ZB.querySelectorAll(fT)),
            TB = new Set(ZB.querySelectorAll(`[data-pad-initial-area], ${bT}`)),
            JB = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var JB;
            return (0, VB.u)(BB, ZB) ? null : null !== (JB = this.pickDefault(ZB, {
              exclude: IB
            })) && void 0 !== JB ? JB : this.pickNewAreaStart(ZB, TB)
          }), 5e3, (() => BB.isConnected && (0, VB.x)(BB) && performance.now() - JB < 6e4))
        }(0, AB.e)(BB), (0, AB.j)(BB)
      }
      handleDirections(BB, IB, ZB, TB) {
        const JB = HZ(IB.layer.kind) ? (0, nB.g)("chat") : null;
        for (const vB of NB.y) {
          this.dpadRepeats.get(vB).update(BB.isHeld(vB), ZB) && (vB !== JB || BB.wasPressed(vB)) && this.move(IB.root, vB, ZB, !0)
        }
        const oB = TB ? (0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          GB = this.stickRepeat.update((0, NB.bb)(oB), ZB);
        if (GB && this.move(IB.root, GB, ZB, !0), this.retryMove && ZB >= this.retryMove.atMs) {
          const {
            direction: BB
          } = this.retryMove;
          this.retryMove = null, this.move(IB.root, BB, ZB, !1)
        }
      }
      move(BB, IB, ZB, TB) {
        var JB;
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (JB = this.tabOpenWait) || void 0 === JB ? void 0 : JB.wait) && IB === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const GB = this.focused;
        if (!GB || !GB.isConnected) {
          const IB = this.pickInitial(BB);
          return void(IB && this.setFocus(IB, {
            byUser: !0
          }))
        }
        const vB = "Left" === IB || "Right" === IB,
          kB = vB ? (0, HT.b)(GB) : null;
        if (kB) return void kB.adjust("Left" === IB ? -1 : 1);
        const cB = BB => null !== BB.closest("[data-pad-friends-column]"),
          nB = cB(GB),
          hB = DT(GB),
          zB = vB || GB.closest(tT) ? null : (BB => {
            const IB = new Map;
            return ZB => {
              const TB = ZB.closest(tT);
              if (!TB) return !1;
              let JB = IB.get(TB);
              if (void 0 === JB) {
                const ZB = DT(TB);
                JB = UZ(BB, ZB) && (ZB.right <= BB.left || ZB.left >= BB.right), IB.set(TB, JB)
              }
              return JB
            }
          })(hB),
          FB = null !== GB.closest(AT),
          NB = this.getEnabledCandidates(BB).filter((BB => BB !== GB && (vB || cB(BB) === nB) && !(null !== zB && void 0 !== zB && zB(BB)) && (FB || !BB.closest(AT)))),
          gB = NB.map(DT),
          qB = iB(GB, "y", BB),
          yB = PB(qB);
        if (!oB && !RB(hB, yB)) {
          const BB = NB.filter(((BB, IB) => RB(gB[IB], yB)));
          if (BB.length > 0) {
            const IB = {
              x: yB.left + yB.width / 2,
              y: yB.top + yB.height / 2
            };
            return void this.setFocus(BB[wZ(IB, BB.map(DT))], {
              byUser: !0
            })
          }
        }
        const UB = vB ? ((BB, IB, ZB) => {
            const TB = DT(BB),
              JB = BB.closest(tT),
              oB = JB ? DT(JB) : null;
            return IB.map(((IB, GB) => {
              const vB = ZB[GB];
              if (vB.bottom > TB.top && vB.top < TB.bottom) return !0;
              const kB = IB.closest(tT);
              if (JB && oB) return kB !== JB && (null !== kB || vB.bottom <= oB.top || vB.top >= oB.bottom);
              if (kB) return !UZ(TB, DT(kB));
              let cB = BB;
              for (let ZB = BB.parentElement; ZB && !ZB.contains(IB); ZB = ZB.parentElement) cB = ZB;
              const nB = DT(cB);
              return vB.right > nB.left && vB.left < nB.right
            }))
          })(GB, NB, gB) : void 0,
          WB = vB && !GB.closest(tT) ? (BB => BB.map((BB => !BB.closest(jT))))(NB) : void 0,
          dB = ((BB, IB) => {
            const ZB = [];
            for (let JB = BB; JB; JB = JB.parentElement) ZB.push(JB);
            const TB = new Map;
            return ZB.forEach(((BB, IB) => {
              TB.set(BB, ZB.length - 1 - IB)
            })), IB.map((BB => {
              for (let IB = BB; IB; IB = IB.parentElement) {
                const BB = TB.get(IB);
                if (void 0 !== BB) return BB
              }
              return -1
            }))
          })(GB, NB),
          CB = vB ? "x" : "y",
          QB = iB(GB, CB, BB);
        let sB = WZ(hB, gB, IB, dB, UB, WB);
        if (sB >= 0 && QB && !QB.contains(NB[sB])) {
          const BB = NB.flatMap(((BB, IB) => QB.contains(BB) ? [IB] : [])),
            ZB = IB => IB && BB.map((BB => IB[BB])),
            TB = WZ(hB, BB.map((BB => gB[BB])), IB, BB.map((BB => dB[BB])), ZB(UB), ZB(WB));
          sB = TB >= 0 ? BB[TB] : sB
        }
        if (sB >= 0) return void this.moveTo(GB, NB[sB], NB, BB, IB, oB);
        if (!TB) return;
        const wB = "Right" === IB || "Down" === IB ? 1 : -1;
        if (QB && MB(QB, CB, wB)) {
          const BB = "y" === CB ? QB.clientHeight : QB.clientWidth;
          jB(QB, CB, wB * BB * .5), this.retryMove = {
            direction: IB,
            atMs: ZB + 80
          }
        }
      }
      moveTo(BB, IB, ZB, TB, JB, oB) {
        const GB = this.tabStripNav.findTabContent(BB, IB, ZB);
        GB && "true" !== BB.dataset.padSelected ? this.openTab(BB, GB, TB, JB) : oB && !GB || this.setFocus(this.tabStripNav.redirect(BB, IB, ZB, TB), {
          byUser: !0
        })
      }
      openTab(BB, IB, ZB, TB) {
        const JB = IB.parentElement;
        (0, AB.e)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : IB.isConnected ? this.tabStripNav.pickContentStart(IB, this.getEnabledCandidates(ZB), ZB) : JB ? this.tabStripNav.pickReplacedContentStart(BB, JB, this.getEnabledCandidates(ZB), ZB) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: TB
        }
      }
      enterTab(BB, IB, ZB, TB) {
        this.move(ZB, (BB => {
          const IB = [...BB.querySelectorAll(XT)].filter((IB => IB.closest(mT) === BB));
          if (IB.length >= 2) {
            const BB = IB[0].getBoundingClientRect(),
              ZB = IB[1].getBoundingClientRect();
            return Math.abs(ZB.top - BB.top) > Math.abs(ZB.left - BB.left) ? "Right" : "Down"
          }
          const ZB = BB.getBoundingClientRect();
          return ZB.height > ZB.width ? "Right" : "Down"
        })(IB), TB, !1, !0), this.focused !== BB || this.pendingFocus || this.activate(BB)
      }
      handleScroll(BB, IB) {
        const ZB = (0, NB.i)(BB.rightStick, .2);
        if (0 === ZB.x && 0 === ZB.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const TB = BB.dtMs / 1e3;
        for (const oB of ["x", "y"]) {
          var JB;
          const BB = ZB[oB];
          if (0 === BB) continue;
          const GB = null !== (JB = iB(this.focused, oB, IB.root)) && void 0 !== JB ? JB : aB(IB.root, oB);
          if (!GB) continue;
          const vB = Math.sign(BB) * BB * BB * 1500 * TB + this.scrollRemainder[oB],
            kB = Math.trunc(vB);
          this.scrollRemainder[oB] = vB - kB, 0 !== kB && (jB(GB, oB, kB), this.scrolledInLayer = !0)
        }
      }
    };
    var BJ = ZB(8341);
    var IJ = ZB(8849);
    const ZJ = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      TJ = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...ZJ,
          minIntervalMs: 1e3
        },
        preview: {
          ...ZJ,
          minIntervalMs: 0
        }
      };
    const JJ = new class {
        constructor(BB) {
          this.deps = BB, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = BB => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", BB))
          }
        }
        play(BB, IB) {
          const ZB = TJ[BB];
          if (!this.deps.isVibrationOn() || ZB.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const TB = this.lastPlayedMs[BB];
          if (void 0 !== TB && IB - TB < ZB.minIntervalMs) return !1;
          const JB = this.deps.getActuator();
          if (!JB) return !1;
          this.lastPlayedMs[BB] = IB;
          const {
            duration: oB,
            strongMagnitude: GB,
            weakMagnitude: vB
          } = ZB;
          try {
            JB.playEffect("dual-rumble", {
              duration: oB,
              strongMagnitude: GB,
              weakMagnitude: vB
            }).catch(this.logFailure)
          } catch (kB) {
            this.logFailure(kB)
          }
          return !0
        }
      }({
        getActuator: () => (BB => {
          const IB = null === BB || void 0 === BB ? void 0 : BB.vibrationActuator;
          return "function" === typeof(null === IB || void 0 === IB ? void 0 : IB.playEffect) ? IB : null
        })(GB.h.getActiveGamepad()),
        isVibrationOn: () => (0, zB.i)().vibration,
        isPadInUse: FB.i
      }),
      oJ = BB => {
        JJ.play(BB, performance.now())
      };
    var GJ = ZB(8345),
      vJ = ZB(3088),
      kJ = ZB(121),
      cJ = ZB(36),
      nJ = ZB(696);
    class hJ {
      constructor(BB) {
        this.deps = BB
      }
      check() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const IB = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!IB) return "skipped";
        const ZB = BB ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ZB || this.deps.readReportedVisitId() === ZB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZB), this.deps.JN(IB, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const zJ = "controllerUsageReportedVisit";
    var FJ = ZB(1403),
      NJ = ZB(1805),
      gJ = ZB(684),
      qJ = ZB(1507),
      yJ = ZB(1310);
    const UJ = BB => ({
        translationKey: `controller:${BB}`
      }),
      WJ = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: UJ("padButtonView"),
        Menu: UJ("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: UJ("padButtonDpadUp"),
        Down: UJ("padButtonDpadDown"),
        Left: UJ("padButtonDpadLeft"),
        Right: UJ("padButtonDpadRight"),
        Home: UJ("padButtonHome"),
        LeftStick: UJ("padButtonLeftStick"),
        RightStick: UJ("padButtonRightStick")
      },
      dJ = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: UJ("padButtonCreate"),
          Menu: UJ("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      CJ = (BB, IB) => {
        var ZB;
        const TB = null !== (ZB = dJ[BB][IB]) && void 0 !== ZB ? ZB : WJ[IB];
        return "string" === typeof TB ? TB : (0, JB.C)(yJ.h.get().getCurrentLanguageCode(), TB.translationKey)
      },
      QJ = BB => {
        let {
          glyph: IB,
          family: ZB,
          className: TB
        } = BB;
        const JB = (0, FB.B)(),
          oB = null !== ZB && void 0 !== ZB ? ZB : JB,
          GB = (0, GJ.c)(oB, IB);
        return (0, LB.jsx)("span", {
          className: XB()("ControllerGlyph", TB),
          role: "img",
          "aria-label": CJ(oB, IB),
          style: {
            "--pad-glyph-mask": `url(${GB})`,
            "--pad-glyph-aspect": (0, GJ.b)(oB, IB)
          }
        })
      };
    var sJ = ZB(1960);
    const wJ = BB => {
      let {
        action: IB
      } = BB;
      const {
        t: ZB
      } = (0, JB.G)();
      switch (IB.kind) {
        case "reload":
          return (0, LB.jsx)("span", {
            children: ZB("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, LB.jsx)(sJ.e, {
            text: IB.description ? [{
              icon: IB.icon
            }, ` ${IB.description}`] : [{
              icon: IB.icon
            }]
          });
        case "touchButton":
          return (0, LB.jsx)(sJ.e, {
            text: IB.label
          })
      }
    };
    var OJ = ZB(8857);
    const YJ = BB => {
      let {
        hold: IB
      } = BB;
      return (0, LB.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${IB.holdMs}ms`
        },
        children: (0, LB.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, IB.id)
    };
    var iJ = ZB(8877),
      pJ = ZB(8881),
      aJ = ZB(8883),
      HJ = ZB(8871);
    const MJ = () => {
        const {
          gameState: BB
        } = (0, kB.o)(["gameState"]), IB = (0, FB.A)(), [TB, JB] = (0, rB.useState)(!1), [oB, GB] = (0, rB.useState)(!1);
        return (0, rB.useEffect)((() => {
          "inGame" === BB && JB(!0)
        }), [BB]), (0, rB.useEffect)((() => {
          if (!TB) return;
          let BB = null,
            IB = !1;
          return (gJ.B ? Promise.all([ZB.e(73), ZB.e(90), ZB.e(273), ZB.e(191), ZB.e(229), ZB.e(228), ZB.e(89)]).then((() => ZB(40591))).then((BB => BB.startWasmPadGameplay)) : Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(98), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(187), ZB.e(233), ZB.e(78), ZB.e(90), ZB.e(188), ZB.e(227), ZB.e(97), ZB.e(239), ZB.e(230), ZB.e(246), ZB.e(121), ZB.e(215), ZB.e(87), ZB.e(247), ZB.e(77), ZB.e(160), ZB.e(248), ZB.e(229), ZB.e(200)]).then((() => ZB(40723))).then((BB => BB.startPadGameplay))).then((ZB => {
            IB || (BB = ZB())
          })).catch((BB => {
            console.error("Pad gameplay failed to load", BB), IB || GB(!0)
          })), () => {
            var ZB;
            IB = !0, null === (ZB = BB) || void 0 === ZB || ZB()
          }
        }), [TB]), (0, rB.useEffect)((() => {
          oB && IB && (GB(!1), FJ.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((BB => {
            !0 === BB && (0, NJ.reloadBloxd)()
          })))
        }), [oB, IB]), (0, LB.jsxs)(LB.Fragment, {
          children: [(0, LB.jsx)(jJ, {}), (0, LB.jsx)(PJ, {}), (0, LB.jsx)(RJ, {})]
        })
      },
      jJ = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, FB.A)(), {
          gameState: ZB,
          isUiHidden: TB
        } = (0, kB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: oB
        } = (0, zB.r)(), GB = (0, OJ.l)(), vB = (0, OJ.m)(), [cB, hB] = (0, rB.useState)(aJ.e);
        return (0, qJ.d)(HJ.o, hB), !IB || oB || TB || "inGame" !== ZB || !GB && !cB ? null : (0, LB.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [GB && (0, LB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, LB.jsx)(QJ, {
              glyph: (0, nB.g)("actionButton")
            }), (0, LB.jsx)(wJ, {
              action: GB
            }), vB && (0, LB.jsx)("span", {
              className: "PadActionHintMore",
              children: BB("controller:gameplayActionWheelHint")
            })]
          }), cB && (0, LB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, LB.jsx)(QJ, {
              glyph: (0, nB.g)("pickBlock")
            }), (0, LB.jsx)("span", {
              children: BB("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      PJ = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, FB.A)(), {
          gameState: ZB,
          isUiHidden: TB
        } = (0, kB.o)(["gameState", "isUiHidden"]), [oB, GB] = (0, rB.useState)(iJ.d);
        return (0, qJ.d)(HJ.l, GB), IB && !TB && "inGame" === ZB && oB ? (0, LB.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, LB.jsx)("span", {
            children: BB("controller:gameplayDropStack")
          }), (0, LB.jsx)(YJ, {
            hold: oB
          })]
        }) : null
      },
      RJ = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, FB.A)(), {
          gameState: ZB,
          isUiHidden: TB
        } = (0, kB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: oB
        } = (0, zB.r)(), [GB, vB] = (0, rB.useState)(pJ.b);
        return (0, qJ.d)(HJ.h, vB), IB && !TB && "inGame" === ZB && GB ? (0, LB.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!oB && (0, LB.jsx)(QJ, {
            glyph: (0, nB.g)("attack")
          }), (0, LB.jsx)("span", {
            children: BB("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var rJ = ZB(8885),
      mJ = ZB(2029),
      XJ = ZB(2526),
      LJ = ZB(8316);
    const eJ = BB => BB && !(0, rJ.d)(mJ.c.get("shopInfo")),
      uJ = () => {
        const BB = "inGame" === (0, kB.o)(["gameState"]).gameState;
        return (0, XJ.c)("shopInfo", (() => {
          (0, LJ.j)(eJ(BB))
        })), (0, rB.useEffect)((() => {
          (0, LJ.j)(eJ(BB))
        }), [BB]), null
      },
      fJ = () => {
        const {
          t: BB
        } = (0, JB.G)(), {
          hideButtonHints: IB
        } = (0, zB.r)();
        (0, FB.B)();
        const ZB = (0, XI.o)();
        return (0, rB.useEffect)((() => (() => {
          const BB = hB.c.register({
              name: "inventory",
              isActive: JZ.isActive,
              onFrame: JZ.onFrame,
              onDeactivate: JZ.onDeactivate,
              wakePressActs: JZ.wakePressActs
            }),
            IB = BB => {
              JZ.noteRealPointer(BB), JZ.shouldBlockRealPointer(BB) && BB.stopPropagation()
            };
          for (const GB of oZ) window.addEventListener(GB, IB, !0);
          const ZB = (0, KB.k)((() => {
              "inventory" !== hB.c.getActiveConsumerName() && JZ.forgetSurface()
            })),
            TB = BB => {
              const IB = BB.target;
              (0, FB.i)() && (0, xB.g)(IB) && IB.closest(CI) && (0, KB.h)() && (0, KB.q)(IB)
            };
          document.addEventListener("focusout", TB, !0);
          const {
            invalidate: JB,
            onScroll: oB
          } = JZ.targets;
          return document.addEventListener("scroll", oB, !0), window.addEventListener("resize", JB), () => {
            BB(), ZB();
            for (const BB of oZ) window.removeEventListener(BB, IB, !0);
            document.removeEventListener("scroll", oB, !0), document.removeEventListener("focusout", TB, !0), window.removeEventListener("resize", JB), JZ.targets.disconnect()
          }
        })()), []), (0, LB.jsxs)(LB.Fragment, {
          children: [(0, LB.jsx)(lB, {
            placer: JZ.ring,
            className: "InventorySlotCursorRing"
          }), ZB.showing && !IB && (0, LB.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: DB(ZB).map((IB => {
              let {
                actions: TB,
                labelKey: JB
              } = IB;
              return (0, LB.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [TB.map((BB => (0, LB.jsx)(QJ, {
                  glyph: (0, nB.g)(BB)
                }, BB))), (0, LB.jsx)("span", {
                  children: BB(`controller:${JB}`)
                }), "inventoryDrop" === JB && ZB.dropStackHold && (0, LB.jsx)(YJ, {
                  hold: ZB.dropStackHold
                })]
              }, JB)
            }))
          })]
        })
      },
      lJ = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      AJ = BB => Array.from(BB).map((BB => ({
        type: "char",
        char: BB,
        width: 1
      }))),
      tJ = function(BB) {
        return {
          type: "command",
          command: BB,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      bJ = [tJ("page", 2), tJ("otherPage"), tJ("caretLeft"), tJ("space", 3), tJ("caretRight"), tJ("close", 1.5), tJ("submit", 1.5)],
      xJ = [tJ("page", 2), tJ("otherPage"), tJ("caretLeft"), tJ("space", 2), tJ("caretRight"), tJ("newline"), tJ("close", 1.5), tJ("submit", 1.5)],
      EJ = [
        [...AJ("1234567890"), tJ("backspace")], AJ("qwertyuiop/"), AJ("asdfghjkl'?"), [tJ("shift", 2), ...AJ("zxcvbnm,.")]
      ],
      DJ = [
        [...AJ("1234567890"), tJ("backspace")], AJ("!@#$%^&*()/"), AJ('-_=+[]{};:"'), AJ("~`|\\<>'\u20ac\xa3,.")
      ],
      KJ = {
        letters: EJ,
        accents: [
          [...AJ("1234567890"), tJ("backspace")], AJ("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), AJ("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [tJ("shift", 2), ...AJ("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: DJ
      },
      VJ = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      SJ = (BB, IB) => "letters" === BB ? IB ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === BB ? "symbols" : "accents"
      },
      Bo = function(BB, IB) {
        const ZB = ((BB, IB) => [...KJ[BB], IB ? xJ : bJ])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === IB) return ZB;
        const TB = Math.min(2, Io(ZB[0]) / IB);
        return [Array.from({
          length: IB
        }, ((BB, IB) => ({
          type: "phrase",
          phraseIndex: IB,
          width: TB
        }))), ...ZB]
      },
      Io = BB => BB.reduce(((BB, IB) => BB + IB.width), 0),
      Zo = BB => Math.max(...BB.map(Io)),
      To = (BB, IB) => {
        const ZB = BB[IB.row];
        let TB = (Zo(BB) - Io(ZB)) / 2;
        for (let JB = 0; JB < IB.col; JB++) TB += ZB[JB].width;
        return TB + ZB[IB.col].width / 2
      },
      Jo = (BB, IB, ZB) => {
        let TB = 0,
          JB = 1 / 0;
        for (let oB = 0; oB < BB[IB].length; oB++) {
          const GB = Math.abs(To(BB, {
            row: IB,
            col: oB
          }) - ZB);
          GB < JB - 1e-9 && (TB = oB, JB = GB)
        }
        return TB
      },
      oo = (BB, IB) => {
        const ZB = Math.max(0, Math.min(BB.length - 1, IB.row));
        return {
          row: ZB,
          col: Math.max(0, Math.min(BB[ZB].length - 1, IB.col))
        }
      },
      Go = (BB, IB, ZB) => "once" === BB && IB - ZB <= 400 ? "caps" : "off" === BB ? "once" : "off",
      vo = (BB, IB) => "once" === BB && (BB => BB.toLowerCase() !== BB.toUpperCase())(IB) ? "off" : BB,
      ko = (BB, IB, ZB) => {
        if ("symbols" === IB || "off" === ZB) return BB;
        const TB = BB.toUpperCase();
        return 1 === TB.length ? TB : BB
      };
    var co = ZB(8764);
    const no = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const ho = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(BB) {
          return !(BB - this.lastSendMs < 2e3) && (this.lastSendMs = BB, !0)
        }
      },
      zo = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      Fo = ["xG", "nameTag"],
      No = BB => {
        const IB = BB.target instanceof HTMLTextAreaElement && !Fo.includes(BB.kind);
        return Bo(BB.page, "chat" === BB.kind ? no.length : 0, IB)
      },
      go = BB => {
        const IB = BB.getBoundingClientRect(),
          ZB = window.innerHeight,
          TB = IB.top + IB.height / 2 < ZB / 2 ? "bottom" : "top",
          JB = "bottom" === TB ? ZB - IB.bottom - 6 : IB.top - 6;
        return {
          placement: TB,
          maxHeightPx: Math.min(.46 * ZB, Math.max(.3 * ZB, JB))
        }
      },
      qo = BB => {
        (0, iZ.g)(BB) ? (0, iZ.d)().close(): (ST.noteChosenStop(BB), BB.blur())
      };
    class yo {
      constructor(BB) {
        this.host = BB, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(BB, IB) {
        this.phraseTexts = BB, this.phrasesFill = IB
      }
      pressKey(BB) {
        const IB = this.host.getState(),
          ZB = No(IB),
          TB = ZB[BB.row][BB.col];
        this.host.setState({
          ...IB,
          focus: BB,
          preferredX: To(ZB, BB)
        }), "char" === TB.type ? this.typeChar(TB.char) : "command" === TB.type ? this.runCommand(TB.command) : this.sendPhrase(TB.phraseIndex)
      }
      runCommand(BB) {
        const IB = this.host.getState();
        switch (BB) {
          case "backspace":
            (0, xB.c)(IB.target);
            break;
          case "space":
            (0, xB.f)(IB.target, " ");
            break;
          case "newline":
            (0, xB.f)(IB.target, "\n");
            break;
          case "caretLeft":
            (0, xB.j)(IB.target, -1);
            break;
          case "caretRight":
            (0, xB.j)(IB.target, 1);
            break;
          case "shift": {
            const BB = performance.now();
            this.host.setState({
              ...IB,
              shift: Go(IB.shift, BB, this.lastShiftPressMs)
            }), this.lastShiftPressMs = BB;
            break
          }
          case "page":
          case "otherPage": {
            const ZB = SJ(IB.page, IB.accentsFirst)[BB];
            this.host.setState({
              ...IB,
              page: ZB,
              focus: oo(No({
                ...IB,
                page: ZB
              }), IB.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, iZ.g)(IB.target) && (0, iZ.d)().selectNextChannel()
        }
      }
      submit() {
        var BB, IB;
        const {
          target: ZB
        } = this.host.getState();
        this.host.hide(), (0, iZ.g)(ZB) ? (0, iZ.d)().submit() : (ST.noteChosenStop(ZB), null === (BB = (IB = (0, iZ.f)(ZB)).submit) || void 0 === BB || BB.call(IB), document.activeElement === ZB && ZB.blur())
      }
      close() {
        const {
          target: BB
        } = this.host.getState();
        this.host.hide(), qo(BB)
      }
      typeChar(BB) {
        const {
          target: IB,
          page: ZB,
          shift: TB
        } = this.host.getState();
        (0, xB.f)(IB, ko(BB, ZB, TB)), this.host.setState({
          ...this.host.getState(),
          shift: vo(TB, BB)
        })
      }
      sendPhrase(BB) {
        if (this.phrasesFill) {
          const {
            target: IB
          } = this.host.getState(), ZB = this.phraseTexts[BB];
          ZB && (IB.setSelectionRange(0, IB.value.length), (0, xB.f)(IB, ZB))
        } else ho.claim(performance.now()) && (this.host.hide(), (0, iZ.d)().sendLine(this.phraseTexts[BB]))
      }
    }
    var Uo = ZB(8785);
    const Wo = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Co = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Qo {
      constructor(BB, IB) {
        this.host = BB, this.editor = IB, this.lastDirection = null, this.navRepeat = new NB.d((0, gB.d)(Wo)), this.commandRepeats = new Map(lJ.filter((BB => {
          let {
            repeats: IB
          } = BB;
          return IB
        })).map((BB => {
          let {
            command: IB
          } = BB;
          return [IB, (0, gB.d)(Co)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const BB of this.commandRepeats.values()) BB.reset()
      }
      onVisibleFrame(BB) {
        const IB = performance.now();
        for (const {
            command: JB,
            action: oB
          }
          of lJ) {
          const ZB = (0, nB.g)(oB),
            TB = this.commandRepeats.get(JB);
          if ((TB ? TB.update(BB.isHeld(ZB), IB) : BB.wasPressed(ZB)) && (this.editor.runCommand(JB), !this.host.getState().visible)) return
        }
        if (BB.wasPressed((0, nB.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ZB = this.readNavDirection(BB);
        this.lastDirection = ZB;
        const TB = this.navRepeat.update(ZB, IB);
        TB && this.navigate(TB)
      }
      onHiddenFrame(BB, IB) {
        var ZB;
        if (BB.wasPressed((0, nB.g)("keyboardClose"))) return void qo(IB);
        const TB = (0, nB.g)("keyboardType");
        if (BB.wasPressed(TB)) return hB.c.consumeButton(TB), void this.host.open(IB);
        const JB = this.readNavDirection(BB),
          oB = null !== JB && JB !== this.lastDirection;
        if (this.lastDirection = JB, !oB || (0, iZ.g)(IB)) return;
        const GB = (null === (ZB = nT()) || void 0 === ZB ? void 0 : ZB.root.contains(IB)) || null !== IB.closest(".EntireInventoryWrapper");
        qo(IB), GB && hB.c.handOffHeldInput()
      }
      navigate(BB) {
        const IB = this.host.getState();
        if ("Up" === BB && 0 === IB.focus.row && "chat" === IB.kind) return (0, iZ.d)().stepHistory(), void this.host.setState({
          ...IB
        });
        const ZB = ((BB, IB, ZB, TB) => {
          if ("Left" === ZB || "Right" === ZB) {
            const TB = BB[IB.row].length,
              JB = (IB.col + ("Right" === ZB ? 1 : -1) + TB) % TB,
              oB = {
                row: IB.row,
                col: JB
              };
            return {
              pos: oB,
              preferredX: To(BB, oB)
            }
          }
          const JB = (IB.row + ("Down" === ZB ? 1 : -1) + BB.length) % BB.length;
          return {
            pos: {
              row: JB,
              col: Jo(BB, JB, TB)
            },
            preferredX: TB
          }
        })(No(IB), IB.focus, BB, IB.preferredX);
        this.host.setState({
          ...IB,
          focus: ZB.pos,
          preferredX: ZB.preferredX
        })
      }
      readNavDirection(BB) {
        for (const IB of NB.y)
          if (BB.isHeld(IB)) return IB;
        return (0, NB.bb)((0, NB.i)(BB.leftStick, (0, zB.i)().moveDeadzone))
      }
    }
    const so = ["Up", "Down", "Left", "Right"],
      wo = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Oo = new class {
      constructor() {
        this.state = zo, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new yo(this), this.padInput = new Qo(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(BB) {
        const IB = BB.visible !== this.state.visible;
        this.state = BB;
        for (const ZB of this.listeners) ZB();
        IB && cB.l.Gq(Uo.c, BB.visible)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      install() {
        const BB = hB.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, xB.g)(document.activeElement),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: BB => so.includes(BB) || !this.state.visible && BB === (0, nB.g)("keyboardType")
          }),
          IB = BB => {
            const IB = BB.target;
            (0, xB.g)(IB) && (IB === this.pendingChatInput || (0, FB.i)() ? this.open(IB) : this.state.visible && IB !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ZB = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          TB = BB => {
            BB.isTrusted && this.state.visible && (BB => !BB.repeat && !wo.has(BB.key) && !(0, co.b)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
          },
          JB = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...go(this.state.target)
            })
          };
        document.addEventListener("focusin", IB, !0), document.addEventListener("focusout", ZB, !0), window.addEventListener("keydown", TB, !0), window.addEventListener("resize", JB);
        const oB = cB.l.subscribe(HJ.e, (() => {
            this.openChat()
          })),
          GB = cB.l.subscribe(Uo.d, (BB => {
            this.openForField(BB)
          }));
        return () => {
          BB(), document.removeEventListener("focusin", IB, !0), document.removeEventListener("focusout", ZB, !0), window.removeEventListener("keydown", TB, !0), window.removeEventListener("resize", JB), cB.l.unsubscribe(oB), cB.l.unsubscribe(GB), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const BB = (0, iZ.d)();
        BB ? document.activeElement !== BB.input ? (this.clearPendingChat(), this.pendingChatInput = BB.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), BB.open()) : this.open(BB.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(BB) {
        (0, xB.g)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
      }
      open(BB) {
        var IB;
        if (this.clearPendingChat(), this.ownedField = BB, this.state.visible && this.state.target === BB) return;
        this.restoreInputMode(), (0, xB.m)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
        const ZB = {
          ...zo,
          visible: !0,
          target: BB,
          kind: (0, iZ.g)(BB) ? "chat" : null !== (IB = (0, iZ.f)(BB).kind) && void 0 !== IB ? IB : null,
          accentsFirst: (TB = yJ.h.get().getCurrentLanguageCode(), VJ.has(TB)),
          ...go(BB)
        };
        var TB;
        const JB = No(ZB),
          oB = ((BB, IB) => {
            for (let ZB = 0; ZB < BB.length; ZB++) {
              const TB = BB[ZB].findIndex((BB => "char" === BB.type && BB.char === IB));
              if (-1 !== TB) return {
                row: ZB,
                col: TB
              }
            }
            return null
          })(JB, "q");
        this.padInput.reset(), this.setState({
          ...ZB,
          focus: oB,
          preferredX: To(JB, oB)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(zo))
      }
      onFrame(BB) {
        if (this.releaseLostField()) return;
        const IB = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, xB.g)(IB) && this.padInput.onHiddenFrame(BB, IB)
      }
      releaseLostField() {
        const BB = this.ownedField;
        return !(null === BB || BB.isConnected && document.activeElement === BB) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: BB
        } = this.state;
        BB && (null === this.savedInputMode ? BB.removeAttribute("inputmode") : BB.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Yo = ZB(3801);
    const io = new Map(lJ.map((BB => {
        let {
          command: IB,
          action: ZB
        } = BB;
        return [IB, ZB]
      }))),
      po = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      ao = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        xG: "controller:keyboardTargetBookTitle"
      },
      Ho = BB => {
        const IB = (() => {
          const [, BB] = (0, rB.useReducer)((BB => BB + 1), 0);
          return BB
        })();
        (0, rB.useEffect)((() => {
          if (!BB) return;
          const ZB = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const JB of ZB) BB.addEventListener(JB, IB);
          document.addEventListener("selectionchange", IB);
          const TB = new MutationObserver(IB);
          return TB.observe(BB, {
            attributeFilter: ["placeholder"]
          }), () => {
            TB.disconnect();
            for (const TB of ZB) BB.removeEventListener(TB, IB);
            document.removeEventListener("selectionchange", IB)
          }
        }), [BB, IB])
      },
      Mo = BB => {
        BB.preventDefault()
      },
      jo = BB => {
        "mouse" !== BB.pointerType && BB.preventDefault()
      },
      Po = () => {
        var BB;
        const {
          t: IB
        } = (0, JB.G)(), ZB = (() => {
          const [BB, IB] = (0, rB.useState)(Oo.getState());
          return (0, rB.useEffect)((() => Oo.subscribe((() => {
            IB(Oo.getState())
          }))), []), BB
        })(), TB = (0, FB.A)(), oB = (0, rB.useRef)(null);
        (0, zB.r)(), (0, FB.B)(), (0, rB.useEffect)((() => {
          const BB = Oo.install(),
            IB = null;
          return () => {
            BB(), null === IB || void 0 === IB || IB()
          }
        }), []);
        const GB = (0, rB.useMemo)((() => no.map((BB => IB(BB)))), [IB]),
          vB = ZB.visible && "chat" === ZB.kind ? ZB.target : null;
        Ho(vB);
        const kB = null !== (BB = null === vB || void 0 === vB ? void 0 : vB.value) && void 0 !== BB ? BB : "",
          cB = ((BB, IB, ZB) => {
            if (!BB.startsWith("/")) return [];
            const TB = [];
            for (let JB = IB.length - 1; JB >= 0 && TB.length < ZB; JB--) {
              const ZB = IB[JB].trim();
              ZB.startsWith(BB) && ZB !== BB && !TB.includes(ZB) && TB.push(ZB)
            }
            return TB
          })(kB, kB.startsWith("/") ? (0, Yo.f)() : [], no.length),
          hB = kB.startsWith("/"),
          NB = hB ? no.map(((BB, IB) => {
            var ZB;
            return null !== (ZB = cB[IB]) && void 0 !== ZB ? ZB : ""
          })) : GB;
        if ((0, rB.useEffect)((() => {
            Oo.editor.setPhraseRow(NB, hB)
          })), (0, rB.useEffect)((() => {
            const BB = oB.current;
            if (BB) return BB.addEventListener("touchstart", Mo, {
              passive: !1
            }), () => {
              BB.removeEventListener("touchstart", Mo)
            }
          }), [ZB.visible]), !ZB.visible) return null;
        const gB = No(ZB),
          qB = Zo(gB),
          yB = BB => "char" === BB.type ? ko(BB.char, ZB.page, ZB.shift) : "phrase" === BB.type ? NB[BB.phraseIndex] : (BB => {
            switch (BB) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ZB.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return po[SJ(ZB.page, ZB.accentsFirst)[BB]];
              case "space":
                return IB("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return IB("chat" === ZB.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(BB.command),
          UB = BB => {
            Oo.editor.pressKey(BB)
          };
        return (0, LB.jsxs)("div", {
          ref: oB,
          className: XB()(iZ.o, "top" === ZB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ZB.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": gB.length,
            "--pad-keyboard-height": `${ZB.maxHeightPx}px`
          },
          onPointerDown: jo,
          onMouseDown: Mo,
          children: [(0, LB.jsx)(Ro, {
            target: ZB.target,
            label: ZB.kind ? IB(ao[ZB.kind]) : ZB.target.placeholder || IB("controller:keyboardTargetText")
          }), (0, LB.jsx)("div", {
            className: "PadKeyboardRows",
            children: gB.map(((BB, IB) => (0, LB.jsx)("div", {
              className: XB()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === BB[0].type
              }),
              children: BB.map(((BB, JB) => {
                const oB = TB && ZB.focus.row === IB && ZB.focus.col === JB,
                  GB = "command" === BB.type ? io.get(BB.command) : void 0;
                return (0, LB.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: BB.width / qB * 100 + "%"
                  },
                  children: (0, LB.jsxs)("div", {
                    className: XB()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: oB,
                      PadKeyboardKeyCommand: "command" === BB.type,
                      PadKeyboardKeyPhrase: "phrase" === BB.type,
                      PadKeyboardKeyActive: "command" === BB.type && "shift" === BB.command && "off" !== ZB.shift,
                      PadKeyboardKeySubmit: "command" === BB.type && "submit" === BB.command
                    }),
                    role: "button",
                    onClick: () => {
                      UB({
                        row: IB,
                        col: JB
                      })
                    },
                    onTouchEnd: BB => {
                      var ZB, TB;
                      BB.preventDefault(), ZB = BB.changedTouches[0], TB = BB.currentTarget.getBoundingClientRect(), ZB && ZB.clientX >= TB.left && ZB.clientX <= TB.right && ZB.clientY >= TB.top && ZB.clientY <= TB.bottom && UB({
                        row: IB,
                        col: JB
                      })
                    },
                    children: [(0, LB.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: yB(BB)
                    }), TB && GB && (0, LB.jsx)(QJ, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, nB.g)(GB)
                    })]
                  })
                }, JB)
              }))
            }, IB)))
          })]
        })
      },
      Ro = BB => {
        let {
          target: IB,
          label: ZB
        } = BB;
        Ho(IB);
        const TB = (0, rB.useRef)(null),
          JB = (0, rB.useRef)(null),
          oB = IB instanceof HTMLTextAreaElement;
        (0, rB.useLayoutEffect)((() => {
          const BB = TB.current,
            IB = JB.current;
          oB ? BB.scrollTop = IB.offsetTop - BB.clientHeight / 2 : BB.scrollLeft = IB.offsetLeft - BB.clientWidth / 2
        }));
        const {
          value: GB,
          start: vB,
          end: kB
        } = (0, xB.q)(IB), cB = "password" === IB.type ? "\u2022".repeat(GB.length) : GB;
        return (0, LB.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, LB.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ZB
          }), (0, LB.jsxs)("div", {
            ref: TB,
            className: XB()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: oB
            }),
            children: [(0, LB.jsx)("span", {
              children: cB.slice(0, vB)
            }), (0, LB.jsx)("span", {
              ref: JB,
              className: "PadKeyboardCaret"
            }), vB !== kB && (0, LB.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: cB.slice(vB, kB)
            }), (0, LB.jsx)("span", {
              children: cB.slice(kB)
            }), 0 === cB.length && IB.placeholder && IB.placeholder !== ZB && (0, LB.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: IB.placeholder
            })]
          })]
        })
      };
    var ro = ZB(1454),
      mo = ZB(3605);
    const Xo = function() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return IB.map(nB.g)
      },
      Lo = (BB, IB) => {
        const ZB = AZ(BB);
        return ZB ? [{
          glyphs: [ZB],
          labelKey: IB
        }] : []
      },
      eo = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      uo = "--pad-hint-bar-clearance",
      fo = "[data-pad-hint-bar-avoid]",
      Ao = BB => {
        const IB = [];
        for (const ZB of BB)(0, VB.r)(ZB) && IB.push(ZB.getBoundingClientRect());
        return IB
      },
      to = BB => {
        if (!BB) return null;
        const IB = nT(),
          ZB = IB ? Ao(((BB, IB) => {
            const ZB = BB.closest(fo);
            return ZB ? [ZB] : ("popup" === IB ? document : BB).querySelectorAll(fo)
          })(IB.root, IB.layer.kind)) : [],
          TB = !IB || IB.root.hasAttribute("data-pad-shows-hud");
        if (((0, mo.f)(null === IB || void 0 === IB ? void 0 : IB.layer.kind, (0, mo.g)()) || TB) && ZB.push(...Ao(document.querySelectorAll(eo.join(",")))), 0 === ZB.length) return null;
        const {
          width: JB,
          height: oB
        } = BB.getBoundingClientRect(), GB = window.innerHeight - 8, vB = (0, mo.m)(GB, {
          width: JB,
          height: oB
        }, window.innerWidth / 2, ZB, 8);
        return vB === GB ? null : Math.round(window.innerHeight - vB)
      },
      bo = BB => {
        const IB = document.documentElement.style,
          ZB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
        IB.getPropertyValue(uo) !== ZB && (ZB ? IB.setProperty(uo, ZB) : IB.removeProperty(uo))
      },
      xo = () => {
        const {
          t: BB
        } = (0, JB.G)(), {
          hideButtonHints: IB
        } = (0, zB.r)(), ZB = (0, FB.A)(), [TB, oB] = (0, rB.useState)(!1), [GB, cB] = (0, rB.useState)([]), [gB, qB] = (0, rB.useState)(null), yB = (0, rB.useRef)(null), UB = (0, rB.useRef)(null);
        (0, qJ.d)(Uo.c, (BB => {
          oB(BB)
        })), (0, qJ.d)(mo.j, (() => {
          var BB;
          null === (BB = UB.current) || void 0 === BB || BB.call(UB)
        }));
        const WB = ZB && !IB && !TB;
        return (0, rB.useEffect)((() => {
          if (!WB) return;
          let BB = null;
          const IB = () => {
            const IB = (() => {
                var BB;
                const IB = hB.c.getActiveConsumerName(),
                  ZB = (0, mo.e)();
                if (ZB) {
                  const BB = (0, nB.g)(ZB),
                    IB = "emoteWheel" === ZB && "wheel" === (0, zB.i)().emoteButton || !(0, NB.J)(hB.c.getLastFrame().values, BB) ? {
                      glyphs: Xo("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [BB],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, nB.y)(BB)],
                    labelKey: "controller:wheelChoose"
                  }, IB, {
                    glyphs: Xo("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const TB = nT();
                if (!TB || "focus" !== IB && "cursor" !== IB) return (0, mo.b)(nB.g);
                const JB = [],
                  oB = {
                    glyphs: Xo("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  GB = (0, AB.E)(TB.root),
                  vB = GB ? !(0, VB.x)(GB) : Boolean(TB.layer.close),
                  cB = !GB && TB.layer.closeLabelKey ? TB.layer.closeLabelKey : oB.labelKey,
                  FB = vB ? [{
                    ...oB,
                    labelKey: cB
                  }] : [],
                  gB = HZ(TB.layer.kind) ? [{
                    glyphs: Xo("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === IB) return JB.push({
                  glyphs: Xo("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), JB.push({
                  glyphs: Xo("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), JB.push(...FB), JB.push(...gB), JB.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), OT() && JB.push({
                  glyphs: Xo("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), JB;
                const qB = ST.getFocused();
                qB && (0, HT.b)(qB) ? JB.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : qB && (0, AB.L)(qB) ? JB.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : JB.push({
                  glyphs: Xo("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const yB = qB ? null === (BB = zZ(qB)) || void 0 === BB ? void 0 : BB.dataset.padSecondary : void 0;
                yB && JB.push({
                  glyphs: Xo("menuSecondary"),
                  labelKey: yB
                }), JB.push(...null !== qB && void 0 !== qB && qB.closest("[data-pad-friends-column]") ? [oB] : FB), JB.push(...gB);
                const UB = "home" === TB.layer.kind;
                xZ(TB.root) || !rZ(TB.root) && !EZ(TB) ? UB && JB.push({
                  glyphs: Xo("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : JB.push({
                  glyphs: Xo("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), UB && (JB.push(...Lo("inventory", "controller:menusFriends")), yB || JB.push({
                  glyphs: Xo("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), JB.push(...Lo("pause", "controller:menusSettings")), JB.push(...Lo("leaderboard", "controller:menusNotifications")));
                const WB = kB.d.get("openEverythingMenuName");
                return "inGame" === kB.d.get("gameState") && "popup" !== TB.layer.kind && null !== WB && ((0, kZ.h)(WB) ? JB.push(...Lo("leaderboard", "controller:menusClose")) : WB !== vZ.q.LOBBY_LEADERBOARD && JB.push(...Lo("leaderboard", "controller:menusLobby"))), JB.push({
                  glyphs: Xo("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), JB
              })(),
              ZB = to(yB.current),
              TB = ((BB, IB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${IB}`)(IB, ZB);
            TB !== BB && (BB = TB, (0, vB.unstable_batchedUpdates)((() => {
              cB(IB), qB(ZB)
            }))), bo(yB.current)
          };
          IB(), UB.current = IB;
          const ZB = requestAnimationFrame(IB),
            TB = setInterval(IB, 150);
          return () => {
            UB.current = null, cancelAnimationFrame(ZB), clearInterval(TB), bo(null)
          }
        }), [WB]), (0, rB.useLayoutEffect)((() => {
          if (!WB) return;
          if (0 === GB.length) return void bo(null);
          const BB = to(yB.current);
          BB === gB ? bo(yB.current) : qB(BB)
        }), [WB, GB, gB]), WB && 0 !== GB.length ? (0, LB.jsx)("div", {
          ref: yB,
          className: "PadButtonHintBar SmallTextBold",
          style: null === gB ? void 0 : {
            bottom: gB
          },
          "aria-hidden": !0,
          children: GB.map((IB => (0, LB.jsxs)("div", {
            className: "PadButtonHint",
            children: [IB.glyphs.map((BB => (0, LB.jsx)(QJ, {
              glyph: BB,
              className: "PadButtonHintGlyph"
            }, BB))), (0, LB.jsx)("span", {
              children: BB(IB.labelKey)
            })]
          }, IB.labelKey)))
        }) : null
      };
    var Eo = ZB(1814);
    const Do = [VB.b, "label", "[data-pad-slider]"].join(","),
      Ko = "data-pad-cursor-probe",
      Vo = BB => {
        var IB;
        const ZB = (BB => {
          const IB = [];
          for (let TB = BB; TB && TB !== document.body && TB !== document.documentElement && (IB.push(TB), !(IB.length > 8)); TB = TB.parentElement);
          const ZB = document.documentElement.classList.contains(FB.s) ? IB[IB.length - 1] : void 0;
          null === ZB || void 0 === ZB || ZB.setAttribute(Ko, "");
          try {
            return IB.map((BB => ({
              element: BB,
              cursor: getComputedStyle(BB).cursor
            })))
          } finally {
            null === ZB || void 0 === ZB || ZB.removeAttribute(Ko)
          }
        })(BB);
        if ("pointer" !== (null === (IB = ZB[0]) || void 0 === IB ? void 0 : IB.cursor)) return null;
        let TB = 0;
        for (; TB + 1 < ZB.length && "pointer" === ZB[TB + 1].cursor;) TB++;
        return ZB[TB].element
      },
      So = (BB, IB, ZB, TB) => {
        const JB = TB.root.contains(BB) ? TB.root : null;
        for (let oB = BB; oB && oB !== document.body && oB !== document.documentElement; oB = oB.parentElement) {
          if (oB instanceof HTMLElement && YB(oB, IB) && MB(oB, IB, ZB)) return oB;
          if (oB === JB) break
        }
        return "home" === TB.layer.kind || "gamePage" === TB.layer.kind ? ((BB, IB) => {
          const ZB = document.scrollingElement;
          return ZB instanceof HTMLElement && ![document.documentElement, document.body].some((IB => {
            const ZB = getComputedStyle(IB),
              TB = "y" === BB ? ZB.overflowY : ZB.overflowX;
            return "hidden" === TB || "clip" === TB
          })) && MB(ZB, BB, IB) ? ZB : null
        })(IB, ZB) : null
      };
    const BG = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, gB.d)(NB.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const BB = hB.c.register({
              name: "cursor",
              isActive: () => "cursor" === YT(),
              onFrame: BB => {
                this.onFrame(BB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: BB => (0, hB.f)(BB) || BB === (0, nB.g)("menuConfirm") && (0, AB.N)((0, FB.c)())
            }),
            IB = (0, ZT.j)((BB => {
              const IB = BB.getRoot();
              IB && this.layerPoints.delete(IB), IB === this.layerRoot && (this.layerRoot = null)
            })),
            ZB = cB.l.subscribe("appManagerUpdated|activeInputDevice", (BB => {
              "gamepad" !== BB && this.active && !this.hidden && this.hide()
            }));
          return () => {
            BB(), IB(), cB.l.unsubscribe(ZB), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, FB.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Gq()
        }
        activate(BB) {
          this.active = !0, this.hidden = !1;
          const IB = QT();
          !IB || IB.root && IB.root !== BB.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(BB), this.jumpTo(IB.point))
        }
        jumpTo(BB) {
          this.state = {
            x: BB.x,
            y: BB.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Gq())
        }
        onFrame(BB) {
          const IB = nT();
          if (!IB) return;
          if (this.active || this.activate(IB), this.followPage(IB)) return;
          this.followLayer(IB);
          const ZB = BB.wokeDevice ? (0, FB.c)() : null;
          if (ZB && this.jumpTo(ZB), !(0, FB.i)()) return void this.hide();
          const TB = (0, nB.g)("menuToggleCursor");
          if (BB.wasPressed(TB)) return hB.c.consumeButton(TB), void CT(this.getHandoff(null));
          if (this.handBackToFocus(BB)) return;
          const JB = (0, nB.g)("menuConfirm"),
            oB = (0, nB.g)("menuSecondary");
          if (BB.wasPressed((0, nB.g)("menuBack"))) return (0, AB.n)(IB.root) || (0, AB.h)(IB.root) || hT(), void this.Gq();
          if (VZ(null, BB, IB)) return BB.wasReleased(JB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, JB)), void this.Gq();
          if (document.pointerLockElement) return void this.hide();
          const GB = iT() ? {
              x: 0,
              y: 0
            } : (BB => {
              const IB = (BB, IB) => (BB ? 1 : 0) - (IB ? 1 : 0);
              return {
                x: IB(BB.isHeld("Right"), BB.isHeld("Left")),
                y: IB(BB.isHeld("Down"), BB.isHeld("Up"))
              }
            })(BB),
            vB = (0, zB.i)().moveDeadzone,
            kB = ((BB, IB) => {
              const ZB = (0, NB.i)(BB, dB(IB));
              return Math.hypot(ZB.x, ZB.y)
            })(BB.leftStick, vB) > 0 || 0 !== GB.x || 0 !== GB.y;
          if (this.hidden) {
            const IB = BB.wasPressed(JB),
              ZB = BB.wasPressed(oB);
            if (!kB && !sB(BB.rightStick) && !IB && !ZB && !BB.wokeDevice) return void this.Gq();
            if (this.hidden = !1, this.updateHit(!1), IB || ZB) return IB && (this.press = {
              kind: "ignored"
            }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Gq()
          }
          this.movePendingPageStart(kB);
          const cB = this.getPoint();
          this.state = QB(this.state, {
            stick: BB.leftStick,
            moveDeadzone: vB,
            dpad: GB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, zB.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const gB = this.state.x !== cB.x || this.state.y !== cB.y,
            qB = [JB, oB].some((IB => BB.wasPressed(IB) || BB.wasReleased(IB)));
          (gB || qB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(gB), this.updateConfirm(BB, JB), this.updateSecondary(BB, oB), this.updateScroll(BB, IB), this.Gq()
        }
        followPage(BB) {
          const IB = "home" === BB.layer.kind || "gamePage" === BB.layer.kind,
            ZB = this.page;
          if (this.page = IB ? {
              key: (0, ZT.r)(BB.layer),
              root: BB.root
            } : null, !this.page || !ZB || ZB.root !== BB.root || ZB.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(BB), "hybrid" === dT()) return yT = null, gT = null, UT.lock(), !0;
          const {
            key: TB
          } = this.page;
          return this.pendingPageStart = {
            root: BB.root,
            key: TB,
            returning: ST.notePageEnteredByCursor(TB),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(BB) {
          const IB = this.pendingPageStart;
          if (!IB) return;
          if (BB || IB.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ZB = IB.returning ? ST.recallStop(IB.root, IB.key) : null;
          if (!ZB && IB.returning && performance.now() - IB.enteredAtMs < 1e3) return;
          const TB = null !== ZB && void 0 !== ZB ? ZB : ST.pickInitial(IB.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: IB.enteredAtMs
          });
          TB && (this.pendingPageStart = null, this.jumpTo((0, AB.H)(TB)))
        }
        setLayer(BB) {
          this.layerRoot = BB.root, this.layerOrder = BB.order
        }
        followLayer(BB) {
          var IB;
          if (BB.root === this.layerRoot) return;
          null !== (IB = this.layerRoot) && void 0 !== IB && IB.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ZB = this.layerPoints.get(BB.root),
            TB = ZB && BB.order <= this.layerOrder ? ZB : ST.getLayerStartPoint(BB.root);
          this.setLayer(BB), this.jumpTo(TB)
        }
        getHandoff(BB) {
          var IB;
          return {
            point: this.getPoint(),
            element: null !== (IB = this.interactive) && void 0 !== IB ? IB : this.findDraggedSliderNearby(),
            direction: BB
          }
        }
        findDraggedSliderNearby() {
          const BB = this.draggedSlider;
          if (null === BB || void 0 === BB || !BB.isConnected) return null;
          const IB = BB.getBoundingClientRect(),
            {
              y: ZB
            } = this.getPoint();
          return ZB >= IB.top - 40 && ZB <= IB.bottom + 40 ? BB : null
        }
        handBackToFocus(BB) {
          if (!iT()) return !1;
          const IB = NB.y.find((IB => BB.wasPressed(IB)));
          return !!IB && (ZB = this.getHandoff(IB), yT = FT(ZB), gT = null, UT.lock(), hB.c.handOffHeldInput(), !0);
          var ZB
        }
        getAssistContext() {
          const BB = this.interactive;
          if (null === BB || void 0 === BB || !BB.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const IB = BB.getBoundingClientRect();
          if (IB.width > .4 * window.innerWidth || IB.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ZB = (0, zB.i)().cursorMagnetism && !(0, Eo.d)(BB) && !BB.closest("[data-pad-slider]"),
            TB = this.magnet && this.magnet !== BB && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : IB;
          return {
            overInteractive: !0,
            magnetTarget: ZB ? {
              x: TB.left + TB.width / 2,
              y: TB.top + TB.height / 2
            } : null
          }
        }
        updateHit(BB) {
          this.lastHitTestMs = performance.now();
          const IB = this.getPoint(),
            ZB = document.elementFromPoint(IB.x, IB.y),
            TB = ZB && !(0, yB.s)(ZB) && (BB => {
              var IB;
              const ZB = nT();
              return !(ZB && !ZB.root.contains(BB) && !BB.closest(".tooltip-container")) || !(null !== (IB = document.getElementById("root")) && void 0 !== IB && IB.contains(BB))
            })(ZB) ? ZB : null;
          if (TB !== this.hit) return (0, AB.u)(this.hit, TB, IB), this.hit = TB, void this.setInteractive(TB ? (BB => {
            const IB = BB.closest(Do);
            if (IB) {
              var ZB, TB;
              const BB = null !== (ZB = null === (TB = IB.parentElement) || void 0 === TB ? void 0 : TB.closest("[data-pad-focusable]")) && void 0 !== ZB ? ZB : IB;
              return (0, VB.x)(BB) ? {
                element: null,
                magnet: null
              } : {
                element: BB,
                magnet: IB
              }
            }
            const JB = Vo(BB);
            return {
              element: JB,
              magnet: JB
            }
          })(TB) : {
            element: null,
            magnet: null
          });
          BB && TB && (0, AB.u)(TB, TB, IB)
        }
        setInteractive(BB) {
          let {
            element: IB,
            magnet: ZB
          } = BB;
          this.interactive = IB, this.magnet = ZB
        }
        clearHover() {
          this.hit && (0, AB.u)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const BB = this.hit;
          if (!BB || (0, AB.L)(BB)) return {
            kind: "ignored"
          };
          const IB = (0, HT.b)(BB),
            ZB = BB.closest("[data-pad-slider]");
          return IB && ZB ? {
            kind: "slider",
            slider: ZB,
            adjuster: IB
          } : ((0, AB.x)(BB, this.getPoint()), {
            kind: "pointer",
            target: BB
          })
        }
        applySliderFraction(BB) {
          var IB;
          const ZB = BB.slider.getBoundingClientRect(),
            TB = ZB.height > ZB.width,
            JB = null === (IB = BB.slider.querySelector("[data-pad-slider-handle]")) || void 0 === IB ? void 0 : IB.getBoundingClientRect(),
            oB = JB ? TB ? JB.height : JB.width : 0,
            GB = (TB ? ZB.height : ZB.width) - oB;
          if (GB <= 0) return;
          const vB = TB ? ZB.bottom - oB / 2 - this.state.y : this.state.x - ZB.left - oB / 2;
          BB.adjuster.setFraction(Math.max(0, Math.min(1, vB / GB)))
        }
        updateConfirm(BB, IB) {
          BB.wasPressed(IB) && (this.press = BB.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ZB = this.press;
          if (!ZB) return;
          if (BB.isHeld(IB)) return "slider" === ZB.kind && this.applySliderFraction(ZB), void this.updateRepeat();
          this.press = null;
          const TB = this.repeated;
          if (this.endRepeat(), !BB.wasReleased(IB)) return void this.endPressWithoutClick(ZB);
          const JB = this.getPoint(),
            oB = this.hit;
          if ("slider" === ZB.kind && ZB.adjuster.endDrag(), "pointer" === ZB.kind) {
            const BB = null !== oB && void 0 !== oB ? oB : ZB.target.isConnected ? ZB.target : null;
            BB && (0, AB.B)(BB, JB);
            const IB = oB && ZB.target.isConnected && !TB ? ((BB, IB) => {
              for (let ZB = BB; ZB; ZB = ZB.parentElement)
                if (ZB.contains(IB)) return ZB;
              return null
            })(ZB.target, oB) : null;
            IB && (ST.noteCursorActivation(IB), (0, yB.h)(IB, new MouseEvent("click", (0, AB.V)(JB, 0, 0))), (0, AB.j)(IB), (0, AB.T)(IB) && (0, AB.R)(IB))
          }
        }
        beginRepeat() {
          var BB, IB, ZB;
          const TB = null !== (BB = null === (IB = this.hit) || void 0 === IB ? void 0 : IB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
          this.repeatStop = TB, this.repeatKey = null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.getAttribute("data-pad-repeat")) && void 0 !== ZB ? ZB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const BB = this.repeatStop;
          if (!BB) return;
          const IB = this.hit;
          BB.isConnected && !(0, VB.x)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && IB && BB.contains(IB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, ST.noteCursorActivation(BB), (0, yB.h)(BB, new MouseEvent("click", (0, AB.V)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(BB) {
          "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, AB.B)(BB.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(BB, IB) {
          BB.wasPressed(IB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(IB) && (this.secondaryArmed = !1, BB.wasReleased(IB) && this.hit && (0, AB.q)(this.hit, this.getPoint(), 2))
        }
        updateScroll(BB, IB) {
          const ZB = wB(BB.rightStick, BB.dtMs);
          if (0 === ZB.x && 0 === ZB.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ZB.x,
            y: this.scrollRemainder.y + ZB.y
          };
          const TB = Math.trunc(this.scrollRemainder.x),
            JB = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - TB,
            y: this.scrollRemainder.y - JB
          };
          const oB = this.hit;
          if (!oB) return;
          let GB = !1;
          if (0 !== JB) {
            const BB = So(oB, "y", JB > 0 ? 1 : -1, IB);
            BB && (BB.scrollBy({
              top: JB,
              behavior: "instant"
            }), GB = !0)
          }
          if (0 !== TB) {
            const BB = So(oB, "x", TB > 0 ? 1 : -1, IB);
            BB && (BB.scrollBy({
              left: TB,
              behavior: "instant"
            }), GB = !0)
          }
          GB && (this.lastHitTestMs = -1 / 0)
        }
        Gq() {
          bB.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      IG = () => {
        const BB = (0, rB.useMemo)((() => new fB), []),
          IB = (0, FB.A)();
        return (0, rB.useEffect)((() => {
          if (!IB) return;
          let ZB = 0,
            TB = {
              of: null,
              atMs: 0,
              list: []
            };
          const JB = document.getElementsByClassName(pT),
            oB = BB => {
              for (const IB of [...JB]) IB !== BB && IB.classList.remove(pT)
            },
            GB = () => {
              var IB;
              ZB = requestAnimationFrame(GB);
              const JB = (() => {
                const BB = ST.getFocused();
                if (ST.isActive() && null !== BB && void 0 !== BB && BB.isConnected) return BB;
                const IB = BG.getHighlighted();
                return null !== IB && void 0 !== IB && IB.isConnected ? IB : null
              })();
              oB(JB), JB && !JB.classList.contains(pT) && JB.classList.add(pT);
              const vB = null !== (IB = null === JB || void 0 === JB ? void 0 : JB.closest("[data-pad-reticle-box]")) && void 0 !== IB ? IB : JB;
              BB.show(vB ? ((BB, IB) => {
                let ZB = BB.left,
                  TB = BB.top,
                  JB = BB.right,
                  oB = BB.bottom;
                for (const GB of IB) {
                  if (!GB) continue;
                  const BB = PB(GB);
                  ZB = Math.max(ZB, BB.left), TB = Math.max(TB, BB.top), JB = Math.min(JB, BB.right), oB = Math.min(oB, BB.bottom)
                }
                return JB <= ZB || oB <= TB ? null : {
                  left: ZB,
                  top: TB,
                  width: JB - ZB,
                  height: oB - TB
                }
              })(vB.getBoundingClientRect(), (BB => {
                const IB = performance.now();
                return (TB.of !== BB || IB - TB.atMs > 500) && (TB = {
                  of: BB,
                  atMs: IB,
                  list: [iB(BB, "y"), iB(BB, "x")]
                }), TB.list
              })(vB)) : null)
            };
          return ZB = requestAnimationFrame(GB), () => {
            cancelAnimationFrame(ZB), oB(null), BB.hide()
          }
        }), [IB, BB]), (0, LB.jsx)(lB, {
          placer: BB,
          className: "PadFocusRing"
        })
      },
      ZG = (BB, IB) => {
        BB.style.transform = `translate3d(${IB.x}px, ${IB.y}px, 0)`, BB.classList.toggle("Visible", IB.visible), BB.classList.toggle("Pressed", IB.pressed)
      },
      TG = () => {
        const BB = (0, rB.useRef)(null);
        return (0, rB.useEffect)((() => {
          const IB = bB.subscribe((IB => {
            BB.current && ZG(BB.current, IB)
          }));
          return BB.current && ZG(BB.current, bB.get()), IB
        }), []), (0, LB.jsx)("div", {
          ref: BB,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, LB.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      JG = "#ncmp__modal.ncmp__active",
      oG = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(JG) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(JG),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      GG = "PadOverThirdParty",
      vG = new Set(oG.map((BB => BB.id))),
      kG = () => {
        const BB = oG.map((BB => {
            let {
              id: IB,
              find: ZB,
              startSelectors: TB
            } = BB;
            return (0, ZT.n)({
              id: IB,
              kind: "popup",
              getRoot: () => {
                const BB = ZB(),
                  IB = BB ? ((BB, IB) => {
                    var ZB;
                    for (const TB of IB) {
                      const IB = BB.querySelector(TB);
                      if (IB) return IB
                    }
                    return null !== (ZB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZB ? ZB : null
                  })(BB, TB) : null;
                if (BB && IB && !IB.hasAttribute("data-pad-default-focus")) {
                  for (const IB of BB.querySelectorAll("[data-pad-default-focus]")) IB.removeAttribute("data-pad-default-focus");
                  for (const IB of BB.querySelectorAll("[data-pad-hint-bar-avoid]")) IB.removeAttribute("data-pad-hint-bar-avoid");
                  IB.setAttribute("data-pad-default-focus", ""), ((BB, IB) => {
                    let ZB = BB;
                    for (let TB = BB.parentElement; TB && IB.contains(TB) && !(TB.getBoundingClientRect().height >= window.innerHeight / 2); TB = TB.parentElement) ZB = TB;
                    return ZB
                  })(IB, BB).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return BB
              },
              close: null,
              memoryKey: null
            })
          })),
          IB = document.documentElement,
          ZB = GB.h.onFrame((() => {
            const BB = (0, FB.i)() ? nT() : null,
              ZB = !!BB && (TB = BB.layer, vG.has(TB.id));
            var TB;
            IB.classList.contains(GG) !== ZB && IB.classList.toggle(GG, ZB)
          }));
        return () => {
          for (const IB of BB) IB();
          ZB(), IB.classList.remove(GG)
        }
      },
      cG = "PadLargePointer",
      nG = () => {
        (0, rB.useEffect)((() => {
          const BB = (0, yB.n)(document.body),
            IB = ST.install(),
            ZB = BG.install(),
            TB = kG();
          return () => {
            BB(), IB(), ZB(), TB()
          }
        }), []);
        const {
          largePointer: BB
        } = (0, zB.r)(), IB = (0, ro.x)() && BB;
        return (0, rB.useEffect)((() => {
          if (IB) return document.documentElement.classList.add(cG), () => {
            document.documentElement.classList.remove(cG)
          }
        }), [IB]), (0, vB.createPortal)((0, LB.jsxs)(LB.Fragment, {
          children: [(0, LB.jsx)(xo, {}), (0, LB.jsx)(IG, {}), (0, LB.jsx)(TG, {})]
        }), document.body)
      };
    var hG = ZB(8895),
      zG = ZB(8920),
      FG = ZB(8913);
    ZB(8927);
    const NG = (BB, IB) => {
        const [ZB, TB] = (0, rB.useState)(!1), [JB, oB] = (0, rB.useState)(null), GB = (0, rB.useRef)(null), vB = (0, rB.useCallback)((BB => {
          GB.current = BB, oB(BB)
        }), []), kB = (0, rB.useCallback)((() => {
          TB(!1), vB(null)
        }), [vB]), nB = (0, rB.useCallback)((() => {
          TB(!0)
        }), []), hB = (0, rB.useCallback)(((BB, IB) => {
          vB((0, FG.F)(BB, IB, GB.current))
        }), [vB]);
        (0, rB.useLayoutEffect)((() => (IB(ZB), (0, mo.s)(BB, ZB), cB.l.Gq(mo.j), () => {
          IB(!1), (0, mo.s)(BB, !1), cB.l.Gq(mo.j)
        })), [ZB, BB, IB]), (0, qJ.d)("appManagerUpdated|activeInputDevice", (BB => {
          "gamepad" !== BB && kB()
        })), (0, qJ.d)("appManagerUpdated|gameState", (BB => {
          "inGame" !== BB && kB()
        }));
        const zB = () => {
          (0, kZ.n)() && kB()
        };
        return (0, qJ.d)("appManagerUpdated|openEverythingMenuName", zB), (0, qJ.d)("appManagerUpdated|openInGameMenuName", zB), {
          open: ZB,
          picked: JB,
          pickedRef: GB,
          show: nB,
          aim: hB,
          close: kB
        }
      },
      gG = BB => {
        let {
          className: IB,
          slotCount: ZB,
          picked: TB,
          slotLabel: JB,
          renderSlot: oB,
          centre: GB
        } = BB;
        const vB = Array.from({
          length: ZB
        }, ((BB, IB) => IB));
        return (0, LB.jsx)("div", {
          className: XB()("EmoteWheelOverlay PadRadialWheel", IB),
          children: (0, LB.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * FG.r + "rem",
              height: 2 * FG.r + "rem"
            },
            children: [(0, LB.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${FG.o} ${FG.o}`,
              children: [vB.map((BB => (0, LB.jsx)("path", {
                d: (0, FG.u)(BB, ZB, FG.f, FG.j, FG.m),
                className: XB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: BB === TB
                }),
                "aria-label": JB(BB)
              }, BB))), (0, LB.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: FG.f,
                cy: FG.f,
                r: FG.m
              }), (0, LB.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: FG.f,
                cy: FG.f,
                r: FG.j
              }), null !== TB && (0, LB.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, FG.u)(TB, ZB, FG.f, FG.j, FG.m)
              })]
            }), vB.map((BB => {
              const IB = (0, FG.z)(BB, ZB);
              return (0, LB.jsx)("div", {
                className: XB()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: BB === TB
                }),
                style: {
                  left: `calc(50% + ${FG.b*Math.cos(IB)}rem)`,
                  top: `calc(50% + ${FG.b*Math.sin(IB)}rem)`
                },
                "aria-hidden": !0,
                children: oB(BB)
              }, BB)
            })), (0, LB.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: GB
            })]
          })
        })
      },
      qG = no.length,
      yG = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = NG("chat", aZ.n), ZB = (0, rB.useMemo)((() => no.map((IB => BB(IB)))), [BB]);
        return (0, qJ.d)(aZ.l, (() => {
          IB.open || (0, hG.e)() || (0, zG.p)() || "inGame" !== kB.d.get("gameState") || (0, kZ.n)() || !(0, iZ.d)() || IB.show()
        })), (0, qJ.d)(aZ.d, (BB => {
          IB.open && IB.aim(BB, qG)
        })), (0, qJ.d)(aZ.j, (() => {
          var BB;
          if (!IB.open) return;
          const TB = IB.pickedRef.current;
          null !== TB ? ho.claim(performance.now()) && (IB.close(), null === (BB = (0, iZ.d)()) || void 0 === BB || BB.sendLine(ZB[TB])) : IB.close()
        })), (0, qJ.d)(aZ.g, IB.close), IB.open ? (0, LB.jsx)(gG, {
          className: "QuickChatWheel",
          slotCount: qG,
          picked: IB.picked,
          slotLabel: BB => ZB[BB],
          renderSlot: BB => ZB[BB],
          centre: null !== IB.picked ? ZB[IB.picked] : BB("controller:quickChatPick")
        }) : null
      },
      UG = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = NG("actionButton", zG.t), [ZB, TB] = (0, rB.useState)([]);
        if ((0, qJ.d)(zG.i, (BB => {
            IB.open || (0, hG.e)() || (0, aZ.c)() || "inGame" !== kB.d.get("gameState") || (0, kZ.n)() || (TB(BB), IB.show())
          })), (0, qJ.d)(zG.c, (BB => {
            IB.open && IB.aim(BB, ZB.length)
          })), (0, qJ.d)(zG.g, (() => {
            if (!IB.open) return;
            const BB = IB.pickedRef.current;
            IB.close(), null !== BB && cB.l.Gq(zG.l, ZB[BB])
          })), (0, qJ.d)(zG.e, IB.close), !IB.open) return null;
        const oB = null !== IB.picked ? ZB[IB.picked] : null;
        return (0, LB.jsx)(gG, {
          className: "ActionWheel",
          slotCount: ZB.length,
          picked: IB.picked,
          slotLabel: IB => {
            const TB = ZB[IB];
            return "reload" === TB.kind ? BB("controller:gameplayReload") : "customButton" === TB.kind ? TB.description || TB.icon : "touchButton" === TB.kind && "string" === typeof TB.label ? TB.label : ""
          },
          renderSlot: BB => (0, LB.jsx)(wJ, {
            action: ZB[BB]
          }),
          centre: oB ? (0, LB.jsx)(wJ, {
            action: oB
          }) : BB("controller:actionWheelPick")
        })
      };
    var WG = ZB(105);
    const dG = () => ((0, rB.useEffect)((() => {
        var BB, IB;
        const ZB = (0, yB.n)(document.getElementById("root")),
          TB = (0, FB.d)(),
          JB = (() => {
            const BB = [cB.l.subscribe(IJ.d, (() => {
                oJ("blockBreak")
              })), cB.l.subscribe("damagedByOtherPlayer", (() => {
                oJ("damage")
              })), cB.l.subscribe("yourAttackHit", (BB => {
                let {
                  hitSelf: IB
                } = BB;
                IB || oJ("hit")
              }))],
              IB = GB.h.onActivePadChanged((BB => {
                BB && oJ("connect")
              }));
            return () => {
              for (const IB of BB) cB.l.unsubscribe(IB);
              IB()
            }
          })(),
          oB = (() => {
            const BB = new hJ({
              getVisitId: nJ.i,
              peekVisitId: nJ.peekVisitSessionId,
              readReportedVisitId: () => {
                const BB = cJ.n.getItem(zJ);
                return "string" === typeof BB ? BB : null
              },
              writeReportedVisitId: BB => {
                cJ.n.setItem(zJ, BB)
              },
              isPadActive: FB.i,
              getPadFamily: () => {
                var BB, IB;
                return null !== (BB = null === (IB = GB.h.getActivePad()) || void 0 === IB ? void 0 : IB.family) && void 0 !== BB ? BB : null
              },
              canReport: vJ.isBloxdGa4Ready,
              getInputType: kJ.e,
              JN: vJ.logControllerUsedToGtag
            });
            let IB = 0,
              ZB = null;
            const TB = JB => {
                null === ZB && ("notReady" !== BB.check(JB) || null !== ZB || IB >= 20 || (IB++, ZB = setTimeout((() => {
                  ZB = null, TB(!1)
                }), 3e3)))
              },
              JB = cB.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
                TB(!0)
              })),
              oB = (0, nJ.l)((() => {
                IB = 0, TB(!0)
              }));
            return () => {
              cB.l.unsubscribe(JB), oB(), null !== ZB && clearTimeout(ZB)
            }
          })(),
          vB = GB.h.onFrame(((BB, IB, ZB) => {
            const TB = (0, FB.p)(BB, ZB);
            hB.c.dispatch(BB, IB, TB)
          }));
        let nB = null !== (BB = null === (IB = GB.h.getActivePad()) || void 0 === IB ? void 0 : IB.family) && void 0 !== BB ? BB : null;
        const NB = GB.h.onActivePadChanged((BB => {
            var IB, ZB;
            (hB.c.reset(), (0, FB.w)(), cB.l.Gq(GB.e, BB), (null !== (IB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== IB ? IB : null) !== nB) && (nB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== ZB ? ZB : null, cB.l.Gq(zB.d, (0, zB.i)()));
            !BB && (0, FB.i)() && (0, FB.y)(kB.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          gB = () => {
            "visible" !== document.visibilityState && hB.c.clear()
          },
          qB = () => {
            hB.c.clear()
          };
        document.addEventListener("visibilitychange", gB), window.addEventListener("blur", qB), GB.h.start(), (0, GJ.f)();
        const UB = null;
        return () => {
          ZB(), TB(), JB(), oB(), vB(), NB(), document.removeEventListener("visibilitychange", gB), window.removeEventListener("blur", qB), GB.h.stop(), null === UB || void 0 === UB || UB()
        }
      }), []), (0, LB.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, LB.jsx)(MJ, {}), (0, LB.jsx)(uJ, {}), (0, LB.jsx)(fJ, {}), (0, LB.jsx)(Po, {}), (0, LB.jsx)(nG, {}), (0, LB.jsx)(yG, {}), (0, LB.jsx)(UG, {})]
      })),
      CG = () => WG.featureFlags.useControllerSupport ? (0, LB.jsx)(dG, {}) : null;
    var QG = ZB(8309),
      sG = ZB(8935);
    const wG = new Set(GJ.e),
      OG = BB => `${sG.p}${(0,zB.l)()}/${BB}`,
      YG = BB => {
        if (!(0, sG.m)(BB)) return null;
        const [IB, ZB] = BB.slice(sG.p.length).split("/");
        return (0, QG.g)(IB) && wG.has(ZB) ? (0, GJ.c)(IB, ZB) : null
      };
    var iG = ZB(8937);
    const pG = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, FB.A)(), {
          gameState: ZB,
          isUiHidden: TB
        } = (0, kB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: oB,
          sneakMode: GB
        } = (0, zB.r)(), [vB, cB] = (0, rB.useState)(iG.c);
        return (0, qJ.d)(HJ.s, cB), IB && !TB && "inGame" === ZB && vB ? (0, LB.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!oB && (0, LB.jsx)(QJ, {
            glyph: (0, nB.g)("toggle" === GB ? "sneak" : "sneakToggle")
          }), (0, LB.jsx)("span", {
            children: BB("controller:gameplaySneaking")
          })]
        }) : null
      },
      aG = 12,
      HG = BB => {
        let {
          trigger: IB,
          className: ZB,
          children: TB
        } = BB;
        const JB = (0, rB.useRef)(null);
        return (0, rB.useEffect)((() => {
          let BB = 0;
          const ZB = iB(IB, "y"),
            TB = () => {
              BB = requestAnimationFrame(TB);
              const oB = JB.current;
              if (!oB || null === IB || void 0 === IB || !IB.isConnected) return;
              const {
                left: GB,
                top: vB
              } = function(BB, IB, ZB) {
                let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const oB = BB.left + BB.width / 2,
                  GB = Math.max(aG, ZB.width - aG - IB.width),
                  vB = Math.min(Math.max(oB - IB.width / 2, aG), GB),
                  kB = ZB.height - TB;
                let cB = 0,
                  nB = kB;
                if (JB) {
                  const BB = Math.max(0, JB.top),
                    TB = Math.min(kB, JB.bottom);
                  TB - BB >= Math.max(ZB.height / 2, IB.height + 24) && (cB = BB, nB = TB)
                }
                const hB = BB.top + BB.height / 2 < (cB + nB) / 2 ? nB - aG - IB.height : cB + aG;
                return {
                  left: vB,
                  top: Math.max(aG, hB)
                }
              }(IB.getBoundingClientRect(), {
                width: oB.offsetWidth,
                height: oB.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(uo)) || 0, null !== ZB && void 0 !== ZB && ZB.isConnected ? ZB.getBoundingClientRect() : null);
              oB.style.transform = `translate3d(${Math.round(GB)}px, ${Math.round(vB)}px, 0)`, oB.style.visibility = "visible"
            };
          return TB(), () => {
            cancelAnimationFrame(BB)
          }
        }), [IB]), (0, LB.jsx)("div", {
          ref: JB,
          className: ZB,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: TB
        })
      };
    var MG = ZB(1102),
      jG = ZB(8940),
      PG = ZB(1516),
      RG = ZB(8946),
      rG = ZB(8951);
    const mG = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      XG = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, FB.A)(), ZB = (0, jG.e)(), TB = (0, XJ.d)("_tasks"), oB = (0, XJ.d)("_availableLeaderboards");
        if (!IB) return null;
        const GB = (BB => {
          let {
            hasShop: IB,
            hasTasksOrLeaderboards: ZB,
            canInvite: TB
          } = BB;
          const JB = [];
          return IB && JB.push("shop"), ZB && JB.push("tasks"), TB && JB.push("invite"), JB.push("leave"), JB
        })({
          hasShop: ZB,
          hasTasksOrLeaderboards: !(!TB && !oB),
          canInvite: !!WG.featureFlags.canUseInviteLinks
        });
        return (0, LB.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: GB.map((IB => {
            const {
              icon: ZB,
              labelKey: TB
            } = mG[IB], JB = "leave" === IB ? PG.M : PG.g;
            return (0, LB.jsx)(JB, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (BB => {
                  switch (BB) {
                    case "shop":
                      return cB.l.Gq(rG.k), void kB.d.set({
                        openEverythingMenuName: vZ.q.SHOP
                      });
                    case "tasks":
                      return void cB.l.Gq("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void cB.l.Gq("toggleMenu", "inviteLink");
                    case "leave":
                      (0, RG.b)()
                  }
                })(IB)
              },
              children: (0, LB.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, LB.jsx)(MG.d, {
                  name: ZB
                }), (0, LB.jsx)("span", {
                  children: BB(TB)
                })]
              })
            }, IB)
          }))
        })
      };
    var LG = ZB(2066);
    const eG = NB.w,
      uG = ["forward", "backward", "left", "right", "sprint"],
      fG = BB => BB.ctrlKey || BB.altKey || "Alt" === BB.key || "ArrowUp" === BB.key || "ArrowDown" === BB.key || "Tab" === BB.code || "/" === BB.key || "Slash" === BB.code;
    class lG {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(NB.S).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(BB) {
        this.armed = BB
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || IB ? !BB.repeat && this.swallowedKeys.delete(BB.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(BB.code),
          continues: !1
        } : "Escape" === BB.key || BB.repeat && !this.swallowedKeys.has(BB.code) ? {
          swallow: !1,
          continues: !1
        } : ZB ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(BB.code), {
          swallow: !0,
          continues: (0, FB.e)(BB)
        })
      }
      onKeyUp(BB) {
        return this.swallowedKeys.delete(BB.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const JB = (0, NB.r)(BB.values, this.previousHeld),
          oB = null === ZB ? -1 : (0, NB.l)(ZB),
          GB = oB >= 0 && JB[oB] && !this.previousHeld[oB],
          vB = JB.some(((BB, IB) => BB && !this.previousHeld[IB] && IB !== oB)),
          kB = Math.hypot(BB.leftStick.x, BB.leftStick.y) >= eG,
          cB = Math.hypot(BB.rightStick.x, BB.rightStick.y) >= eG,
          nB = kB && !this.leftStickWasPressed || cB && !this.rightStickWasPressed;
        this.previousHeld = JB, this.leftStickWasPressed = kB, this.rightStickWasPressed = cB;
        let hB = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, hB = !0);
        const zB = !IB && GB && !TB,
          FB = !zB && this.armed && !IB && (vB || nB);
        return (zB || FB) && (this.consumeNextFrame = !0, this.consumeAfterContinue = FB, hB = !0), {
          continues: FB,
          back: zB,
          consumeHeld: hB
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const AG = new Set([...LG.m, ...LG.C]),
      tG = BB => ((BB, IB, ZB) => {
        const TB = Object.keys(IB).filter((TB => !ZB.has(TB) && IB[TB].includes(BB)));
        return TB.length > 0 && TB.every((BB => uG.includes(BB)))
      })(BB, LG.u, AG),
      bG = (BB, IB, ZB) => {
        const TB = new lG,
          JB = BB => {
            if (!BB.isTrusted) return;
            const {
              swallow: ZB,
              continues: JB
            } = TB.onKeyDown(BB, !(0, FB.D)(BB) || (0, BJ.i)() || (0, kZ.n)(), tG(BB.code));
            ZB && (BB.stopImmediatePropagation(), fG(BB) && BB.preventDefault()), JB && ((0, FB.y)("keyboardMouse"), IB())
          },
          oB = BB => {
            BB.isTrusted && TB.onKeyUp(BB) && (BB.stopImmediatePropagation(), fG(BB) && BB.preventDefault())
          },
          vB = () => {
            TB.forgetKeys()
          };
        window.addEventListener("keydown", JB, !0), window.addEventListener("keyup", oB, !0), window.addEventListener("blur", vB);
        const kB = GB.h.onFrame((BB => {
            const JB = hB.c.getActiveConsumerName(),
              oB = ZB(),
              GB = oB ? (0, nB.g)("menuBack") : null,
              vB = null !== JB && "gameplay" !== JB,
              {
                continues: kB,
                back: cB,
                consumeHeld: NB
              } = TB.onPadFrame(BB, vB, GB, (0, FB.l)(BB));
            if (NB) {
              const BB = (0, zB.i)().swapSticks ? "right" : "left";
              hB.c.consumeAllHeld(TB.consumeLeavesMoveStick() ? BB : null)
            }
            cB ? null === oB || void 0 === oB || oB() : kB && IB()
          })),
          cB = (0, BJ.k)(`pressToContinue:${BB}`, (() => TB.blocksGameplay()));
        return {
          setArmed: BB => {
            TB.setArmed(BB)
          },
          dispose: () => {
            window.removeEventListener("keydown", JB, !0), window.removeEventListener("keyup", oB, !0), window.removeEventListener("blur", vB), kB(), cB()
          }
        }
      };
    var xG = ZB(5143),
      EG = ZB(3613),
      DG = ZB(3294),
      KG = ZB(8312);
    const VG = BB => {
        let {
          text: IB
        } = BB;
        return (0, LB.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: IB
        })
      },
      SG = BB => {
        let {
          label: IB,
          hint: ZB,
          options: TB,
          value: oB,
          onChange: GB
        } = BB;
        const {
          t: vB
        } = (0, JB.G)();
        return (0, LB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, LB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, LB.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, LB.jsx)("div", {
                className: "SliderText",
                children: IB
              }), ZB && (0, LB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ZB
              })]
            }), (0, LB.jsx)(DG.c, {
              options: TB.map((BB => ({
                label: "label" in BB ? BB.label : vB(BB.labelKey),
                value: BB.value
              }))),
              value: oB,
              onChange: BB => {
                GB(BB.value)
              }
            })]
          })
        })
      },
      Bv = BB => {
        let {
          settingKey: IB,
          label: ZB,
          range: TB,
          format: JB
        } = BB;
        const oB = (0, zB.r)();
        return (0, LB.jsx)(xG.j, {
          name: ZB,
          min: TB.min,
          max: TB.max,
          step: TB.step,
          padStep: TB.step,
          initValue: oB[IB],
          format: JB,
          onChange: BB => {
            (0, zB.o)({
              [IB]: (0, KG.v)(BB, TB)
            })
          }
        })
      };
    var Iv = ZB(8956),
      Zv = ZB(8960);
    const Tv = BB => BB instanceof DOMException && ("SecurityError" === BB.name || "NotAllowedError" === BB.name),
      Jv = BB => {
        const [IB] = [...BB.controllers].sort(((BB, IB) => Zv.t[BB] - Zv.t[IB]));
        return Zv.q[IB]
      },
      ov = BB => {
        (0, Iv.d)().allowPhoneMotion().catch((IB => {
          BB && Tv(IB) ? BB() : console.warn("Could not enable the motion sensor", IB)
        }))
      },
      Gv = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      vv = BB => {
        let {
          status: IB
        } = BB;
        const {
          t: ZB
        } = (0, JB.G)(), [TB, oB] = (0, rB.useState)(null), GB = `${IB.controllers.join(",")}|${IB.phoneMotion}`;
        (0, rB.useEffect)((() => {
          oB(null)
        }), [GB]);
        const vB = () => {
          (0, Iv.d)().connectController().then((BB => {
            oB(BB > 0 ? "openFailed" : null)
          })).catch((BB => {
            Tv(BB) ? oB("needsClick") : console.warn("Could not connect motion controller", BB)
          }))
        };
        if (IB.hidSupported) {
          let BB = ZB("controller:settingsGyroConnectHint");
          return "needsClick" === TB ? BB = ZB("controller:settingsGyroConnectNeedsClick") : "openFailed" === TB ? BB = ZB("controller:settingsGyroOpenFailed") : IB.controllers.length > 0 && (BB = ZB("controller:settingsGyroConnected", {
            name: Jv(IB)
          })), (0, LB.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, LB.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, LB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: BB
              }), (0, LB.jsx)(PG.g, {
                onClick: vB,
                children: ZB("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === IB.phoneMotion) return (0, LB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, LB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === TB && (0, LB.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ZB("controller:settingsGyroAllowNeedsTap")
            }), (0, LB.jsx)(PG.g, {
              onClick: () => {
                ov((() => {
                  oB("needsTap")
                }))
              },
              children: ZB("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const kB = Gv[IB.phoneMotion];
        return kB ? (0, LB.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ZB(kB)
        }) : null
      },
      kv = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, zB.r)(), ZB = (0, Iv.f)(), TB = (0, FB.B)(), oB = !ZB.hidSupported && ZB.phoneSupported && !ZB.padConnected, GB = (ZB.hidSupported || ZB.phoneSupported) && !oB, vB = (0, nB.g)("pause");
        return (0, LB.jsxs)(LB.Fragment, {
          children: [(0, LB.jsx)(VG, {
            text: BB("controller:settingsGyro")
          }), oB && (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroPhoneNeedsController")
          }), !GB && !oB && (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB(ZB.hidBlocked || ZB.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), GB && (0, LB.jsx)(xG.e, {
            label: BB(ZB.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: IB.gyroAiming,
            onClick: BB => {
              var IB, ZB;
              (0, zB.o)({
                gyroAiming: BB
              });
              const TB = null === (IB = null === (ZB = navigator.userActivation) || void 0 === ZB ? void 0 : ZB.isActive) || void 0 === IB || IB;
              if (!BB || !TB) return;
              const JB = (0, Iv.d)(),
                oB = JB.getStatus();
              oB.hidSupported ? JB.connectControllerIfNoneGranted().catch((BB => {
                console.warn("Motion controller picker unavailable", BB)
              })) : "needsPermission" === oB.phoneMotion && ov()
            },
            circleInfoText: BB(ZB.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), GB && ZB.hidSupported && (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroSteamHint")
          }), GB && IB.gyroAiming && (0, LB.jsxs)(LB.Fragment, {
            children: [(0, LB.jsx)(vv, {
              status: ZB
            }), (0, LB.jsx)(Bv, {
              settingKey: "gyroSensitivity",
              label: BB("controller:settingsGyroSensitivity"),
              range: KG.L,
              format: KG.F
            }), (0, LB.jsx)(SG, {
              label: BB("controller:settingsGyroActivation"),
              hint: "aiming" === IB.gyroActivation && (0, LB.jsx)(EG.c, {
                text: BB("controller:settingsGyroAimingHint", {
                  button: EG.e
                }),
                glyph: (0, nB.g)("use")
              }),
              options: KG.J,
              value: IB.gyroActivation,
              onChange: BB => {
                (0, zB.o)({
                  gyroActivation: BB
                })
              }
            }), "button" === IB.gyroActivation && (0, LB.jsx)(SG, {
              label: BB("controller:settingsGyroButton"),
              hint: BB("controller:settingsGyroButtonHint"),
              options: KG.s.filter((BB => BB !== vB || BB === IB.gyroButton)).map((BB => ({
                label: CJ(TB, BB),
                value: BB
              }))),
              value: IB.gyroButton,
              onChange: BB => {
                (0, zB.o)({
                  gyroButton: BB
                })
              }
            })]
          })]
        })
      };
    var cv = ZB(1919);
    const nv = () => {
      const {
        t: BB
      } = (0, JB.G)(), IB = (0, zB.r)(), ZB = (0, FB.B)();
      return (0, LB.jsxs)(LB.Fragment, {
        children: [(0, LB.jsx)(VG, {
          text: BB("controller:settingsAccessibility")
        }), (0, LB.jsx)(xG.e, {
          label: BB("controller:settingsSwapConfirmBack"),
          checked: (0, nB.I)(IB.swapConfirmBack, ZB),
          onClick: BB => {
            (0, zB.o)({
              swapConfirmBack: BB === (0, nB.I)(null, ZB) ? null : BB
            }), cv.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: BB("controller:settingsSwapConfirmBackInfo")
        }), (0, LB.jsx)(SG, {
          label: BB("controller:settingsButtonRepeat"),
          hint: BB("controller:settingsButtonRepeatHint"),
          options: KG.o,
          value: IB.buttonRepeat,
          onChange: BB => {
            (0, zB.o)({
              buttonRepeat: BB
            })
          }
        }), (0, LB.jsx)(SG, {
          label: BB("controller:settingsTapHoldTime"),
          hint: BB("controller:settingsTapHoldTimeHint"),
          options: KG.sb,
          value: IB.tapHoldTime,
          onChange: BB => {
            (0, zB.o)({
              tapHoldTime: BB
            })
          }
        }), (0, LB.jsx)(SG, {
          label: BB("controller:settingsEmoteButton"),
          hint: BB("wheel" === IB.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: KG.z,
          value: IB.emoteButton,
          onChange: BB => {
            (0, zB.o)({
              emoteButton: BB
            })
          }
        }), (0, LB.jsx)(SG, {
          label: BB("controller:settingsAttackMode"),
          hint: BB("toggle" === IB.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: KG.k,
          value: IB.attackMode,
          onChange: BB => {
            (0, zB.o)({
              attackMode: BB
            })
          }
        }), (0, LB.jsx)(xG.e, {
          label: BB("controller:settingsLargePointer"),
          checked: IB.largePointer,
          onClick: BB => {
            (0, zB.o)({
              largePointer: BB
            })
          },
          circleInfoText: BB("controller:settingsLargePointerInfo")
        })]
      })
    };
    var hv = ZB(8969);
    const zv = new class {
        constructor(BB) {
          this.router = BB, this.current = null
        }
        claim(BB, IB) {
          const ZB = this.current;
          ZB && (this.current = null, ZB.release(), ZB.onTakenOver());
          const TB = this.router.register({
              ...BB,
              name: "capture"
            }),
            JB = {
              release: TB,
              onTakenOver: IB
            };
          return this.current = JB, () => {
            this.current === JB && (this.current = null), TB()
          }
        }
      }(hB.c),
      Fv = BB => {
        (0, rB.useEffect)((() => {
          if (!BB) return;
          const IB = BB();
          let ZB = !1;
          const TB = () => {
              ZB || (ZB = !0, IB.onEnd())
            },
            JB = zv.claim({
              isActive: () => !ZB,
              onFrame: BB => {
                IB.onFrame(BB, TB)
              }
            }, TB),
            oB = void 0 === IB.timeoutMs ? void 0 : window.setTimeout(TB, IB.timeoutMs),
            GB = BB => {
              "Escape" === BB.key && (BB.preventDefault(), BB.stopPropagation(), TB())
            };
          return window.addEventListener("keydown", GB, !0), () => {
            ZB = !0, JB(), window.clearTimeout(oB), window.removeEventListener("keydown", GB, !0)
          }
        }), [BB])
      },
      Nv = BB => {
        let {
          row: IB,
          capturing: ZB,
          onCapture: TB,
          holdFillRef: oB,
          onRebind: GB,
          swapped: vB
        } = BB;
        const {
          t: kB
        } = (0, JB.G)();
        if ("fixed" === IB.kind) return (0, LB.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, LB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, LB.jsx)("div", {
              className: "ControlName",
              children: kB(IB.labelKey)
            }), (0, LB.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, LB.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, LB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, LB.jsx)(QJ, {
                    glyph: "move" === IB.stick ? (0, nB.r)() : (0, nB.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: cB
        } = IB, hB = (0, nB.g)(cB), zB = (0, nB.j)(cB), FB = hB !== zB && (0, nB.b)(cB, zB);
        return (0, LB.jsxs)("div", {
          className: XB()("ControlRow PadControlRow", {
            Capturing: ZB
          }),
          children: [(0, LB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, LB.jsx)("div", {
              className: "ControlName",
              children: kB(KG.g[cB])
            }), (0, LB.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ZB && (0, LB.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, LB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    TB(cB)
                  },
                  children: (0, LB.jsx)(QJ, {
                    glyph: hB
                  })
                }), FB && (0, LB.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: kB("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    GB(cB, zB)
                  },
                  children: (0, LB.jsx)(MG.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), ZB && (0, LB.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, LB.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, LB.jsx)("span", {
                    children: kB("controller:settingsCapturePrompt")
                  }), (0, LB.jsx)("div", {
                    ref: oB,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, LB.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    TB(null)
                  },
                  children: "\xd7"
                })]
              }), ZB && (0, LB.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, LB.jsx)(EG.c, {
                  text: kB((0, nB.b)(cB, (0, nB.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: EG.e
                  }),
                  glyph: (0, nB.g)("menuBack")
                })
              })]
            })]
          }), vB.map((BB => (0, LB.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, LB.jsx)(EG.c, {
              text: kB("controller:settingsSwapNotice", {
                action: kB(KG.g[BB]),
                button: EG.e
              }),
              glyph: (0, nB.g)(BB)
            })
          }, BB))), ZB && (0, LB.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${KG.u}ms`
            }
          })]
        })
      },
      gv = [],
      qv = BB => {
        let {
          layoutSetting: IB
        } = BB;
        const {
          t: ZB
        } = (0, JB.G)(), TB = (0, zB.r)();
        (0, FB.B)();
        const oB = (0, rB.useRef)(null),
          [GB, vB] = (0, rB.useState)(null),
          kB = (0, rB.useCallback)(((BB, IB) => {
            const ZB = (0, zB.i)().bindings;
            (0, nB.E)(BB, IB);
            const TB = (0, nB.v)(ZB, BB);
            vB(TB.length > 0 ? {
              action: BB,
              swapped: TB
            } : null)
          }), []),
          [cB, gB] = ((BB, IB) => {
            const [ZB, TB] = (0, rB.useState)(null), JB = (0, rB.useMemo)((() => ZB ? () => {
              const JB = (0, nB.g)("menuBack"),
                oB = new KG.c(JB, (0, nB.g)("menuConfirm"), (BB => (0, nB.b)(ZB, BB)));
              return {
                onFrame: (TB, GB) => {
                  var vB;
                  const kB = TB.frame.timestampMs,
                    cB = oB.update({
                      ...TB,
                      isDown: BB => (0, NB.J)(TB.frame.values, BB)
                    }, kB);
                  null === (vB = BB.current) || void 0 === vB || vB.style.setProperty("width", 100 * oB.getBindHoldProgress(kB) + "%"), cB && ("bind" === cB.kind ? (hB.c.consumeButton(cB.button), IB(ZB, cB.button)) : hB.c.consumeButton(JB), GB())
                },
                onEnd: () => {
                  TB(null)
                },
                timeoutMs: KG.u
              }
            } : null), [ZB, BB, IB]);
            return Fv(JB), [ZB, TB]
          })(oB, kB),
          qB = BB => {
            BB && vB(null), gB(BB)
          };
        (0, rB.useEffect)((() => {
          if (!GB) return;
          const BB = window.setTimeout((() => {
            vB(null)
          }), KG.pb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [GB]);
        const yB = !TB.swapSticks && 0 === Object.keys(TB.bindings).length;
        return (0, LB.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, LB.jsx)("div", {
            className: "SliderText",
            children: ZB("controller:settingsRemap")
          }), (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ZB("controller:settingsRemapHint")
          }), (0, LB.jsx)(PG.M, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: yB,
            onClick: () => {
              qB(null), vB(null), (0, nB.H)()
            },
            children: ZB("controller:settingsResetAll")
          }), IB, KG.eb.map(((BB, IB) => (0, LB.jsx)(hv.e, {
            title: ZB(BB.titleKey),
            defaultOpen: 0 === IB,
            children: BB.rows.map((BB => (0, LB.jsx)(Nv, {
              row: BB,
              capturing: "action" === BB.kind && BB.action === cB,
              onCapture: qB,
              holdFillRef: oB,
              onRebind: kB,
              swapped: "action" === BB.kind && (null === GB || void 0 === GB ? void 0 : GB.action) === BB.action ? GB.swapped : gv
            }, "action" === BB.kind ? BB.action : BB.labelKey)))
          }, BB.titleKey)))]
        })
      },
      yv = BB => {
        let {
          deadzone: IB,
          dotRef: ZB,
          labelKey: TB
        } = BB;
        const {
          t: oB
        } = (0, JB.G)();
        return (0, LB.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, LB.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, LB.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * IB + "%",
                height: 100 * IB + "%"
              }
            }), (0, LB.jsx)("div", {
              ref: ZB,
              className: "ControllerTesterDot"
            })]
          }), (0, LB.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: oB(TB)
          })]
        })
      },
      Uv = (BB, IB, ZB, TB) => {
        var JB;
        BB && (BB.style.left = 50 + 50 * Math.max(-1, Math.min(1, IB.x)) + "%", BB.style.top = 50 + 50 * Math.max(-1, Math.min(1, IB.y)) + "%", null === (JB = BB.parentElement) || void 0 === JB || JB.classList.toggle("Active", TB || Math.hypot(IB.x, IB.y) > ZB))
      },
      Wv = BB => {
        const IB = {
            deadzone: BB.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ZB = {
            deadzone: BB.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return BB.swapSticks ? {
          left: ZB,
          right: IB
        } : {
          left: IB,
          right: ZB
        }
      },
      dv = () => {
        const {
          t: BB
        } = (0, JB.G)(), IB = (() => {
          const [BB, IB] = (0, rB.useState)((() => GB.h.getActivePad()));
          return (0, qJ.d)(GB.e, (() => {
            IB(GB.h.getActivePad())
          })), BB
        })(), ZB = Wv((0, zB.r)()), TB = (0, rB.useRef)(null), oB = (0, rB.useRef)(null), vB = (0, rB.useRef)([]), kB = (0, rB.useRef)(null), cB = (0, rB.useRef)(null), [FB, gB] = (BB => {
          const [IB, ZB] = (0, rB.useState)(!1), TB = (0, rB.useMemo)((() => IB ? () => {
            const IB = (0, nB.g)("menuBack"),
              TB = new KG.d;
            return {
              onFrame: (ZB, JB) => {
                var oB;
                const GB = TB.update({
                  pressed: ZB.wasPressed(IB),
                  sv: ZB.isHeld(IB)
                }, ZB.frame.timestampMs);
                null === (oB = BB.current) || void 0 === oB || oB.style.setProperty("width", 100 * GB + "%"), GB >= 1 && (hB.c.consumeButton(IB), JB())
              },
              onEnd: () => {
                ZB(!1)
              }
            }
          } : null), [IB, BB]);
          return Fv(TB), [IB, ZB]
        })(oB);
        (0, rB.useEffect)((() => {
          const BB = BB => {
            for (const ZB of NB.U) {
              const IB = (0, NB.l)(ZB),
                TB = vB.current[IB];
              if (!TB) continue;
              const JB = BB.values[IB];
              TB.classList.toggle("Pressed", JB >= NB.w), (0, NB.K)(IB) && TB.style.setProperty("--trigger-fill", `${Math.round(100*JB)}%`)
            }
            const IB = Wv((0, zB.i)());
            Uv(kB.current, BB.leftStick, IB.left.deadzone, BB.values[(0, NB.l)("LS")] >= NB.w), Uv(cB.current, BB.rightStick, IB.right.deadzone, BB.values[(0, NB.l)("RS")] >= NB.w)
          };
          return IB || BB((0, NB.t)()), GB.h.onFrame(BB)
        }), [IB]), (0, rB.useEffect)((() => {
          IB || gB(!1)
        }), [IB, gB]), (0, rB.useEffect)((() => {
          var BB;
          FB && (null === (BB = TB.current) || void 0 === BB || BB.scrollIntoView({
            block: "nearest"
          }))
        }), [FB]);
        const qB = KG._.find((BB => BB.value === (null === IB || void 0 === IB ? void 0 : IB.family)));
        return (0, LB.jsxs)("div", {
          ref: TB,
          className: XB()("SettingBox ControllerTester", {
            Testing: FB
          }),
          children: [(0, LB.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, LB.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [IB && (0, LB.jsx)("div", {
                children: BB("controller:settingsTesterFamily", {
                  family: qB ? BB(qB.labelKey) : IB.family
                })
              }), IB && (0, LB.jsx)("div", {
                className: "ControllerTesterPadId",
                children: IB.id
              }), !IB && (0, LB.jsx)("div", {
                children: BB("controller:settingsTesterNoPad")
              })]
            }), (IB || FB) && (0, LB.jsx)(PG.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                gB(!FB)
              },
              children: BB(FB ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), IB && !FB && (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsTesterHint")
          }), FB && (0, LB.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, LB.jsx)(EG.c, {
              text: BB("controller:settingsTesterTesting", {
                button: EG.e
              }),
              glyph: (0, nB.g)("menuBack")
            }), (0, LB.jsx)("div", {
              ref: oB,
              className: "ControllerTesterExitFill"
            })]
          }), (0, LB.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, LB.jsx)(yv, {
              deadzone: ZB.left.deadzone,
              dotRef: kB,
              labelKey: ZB.left.labelKey
            }), (0, LB.jsx)("div", {
              className: "ControllerTesterButtons",
              children: NB.U.map((BB => {
                const ZB = (0, NB.l)(BB);
                return (0, LB.jsx)("div", {
                  ref: BB => {
                    vB.current[ZB] = BB
                  },
                  className: (0, NB.K)(ZB) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, LB.jsx)(QJ, {
                    glyph: BB,
                    family: null === IB || void 0 === IB ? void 0 : IB.family
                  })
                }, BB)
              }))
            }), (0, LB.jsx)(yv, {
              deadzone: ZB.right.deadzone,
              dotRef: cB,
              labelKey: ZB.right.labelKey
            })]
          })]
        })
      },
      Cv = (0, rB.memo)((function() {
        const {
          t: BB
        } = (0, JB.G)(), IB = (0, zB.r)(), [ZB, TB] = (0, rB.useState)(!1);
        return (0, rB.useEffect)((() => {
          if (!ZB) return;
          const BB = window.setTimeout((() => {
            TB(!1)
          }), KG.pb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [ZB]), (0, LB.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, LB.jsx)(VG, {
            text: BB("controller:settingsLook")
          }), (0, LB.jsx)(Bv, {
            settingKey: "lookSensitivityX",
            label: BB("controller:settingsLookSensitivityX"),
            range: KG.ib,
            format: KG.H
          }), (0, LB.jsx)(Bv, {
            settingKey: "lookSensitivityY",
            label: BB("controller:settingsLookSensitivityY"),
            range: KG.ib,
            format: KG.H
          }), (0, LB.jsx)(Bv, {
            settingKey: "aimLookSensitivity",
            label: BB("controller:settingsAimLookSensitivity"),
            range: KG.j,
            format: KG.H
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsLookCurve"),
            hint: BB("controller:settingsLookCurveHint"),
            options: KG.T,
            value: IB.lookCurve,
            onChange: BB => {
              (0, zB.o)({
                lookCurve: BB
              })
            }
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsInvertLookX"),
            checked: IB.invertLookX,
            onClick: BB => {
              (0, zB.o)({
                invertLookX: BB
              })
            }
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsInvertLookY"),
            checked: IB.invertLookY,
            onClick: BB => {
              (0, zB.o)({
                invertLookY: BB
              })
            }
          }), (0, LB.jsx)(Bv, {
            settingKey: "lookDeadzone",
            label: BB("controller:settingsLookDeadzone"),
            range: KG.x,
            format: KG.C
          }), (0, LB.jsx)(kv, {}), (0, LB.jsx)(VG, {
            text: BB("controller:settingsMovement")
          }), (0, LB.jsx)(Bv, {
            settingKey: "moveDeadzone",
            label: BB("controller:settingsMoveDeadzone"),
            range: KG.x,
            format: KG.C
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsAutoSprint"),
            checked: IB.autoSprint,
            onClick: BB => {
              (0, zB.o)({
                autoSprint: BB
              })
            },
            circleInfoText: BB("controller:settingsAutoSprintInfo")
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsSneak"),
            options: KG.lb,
            value: IB.sneakMode,
            onChange: BB => {
              (0, zB.o)({
                sneakMode: BB
              })
            }
          }), (0, LB.jsx)(VG, {
            text: BB("controller:settingsButtons")
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsPromptFamily"),
            options: KG._,
            value: IB.promptFamily,
            onChange: BB => {
              (0, zB.o)({
                promptFamily: BB
              })
            }
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsHideButtonHints"),
            checked: IB.hideButtonHints,
            onClick: BB => {
              (0, zB.o)({
                hideButtonHints: BB
              })
            }
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsVibration"),
            checked: IB.vibration,
            onClick: BB => {
              (0, zB.o)({
                vibration: BB
              }), BB && oJ("preview")
            }
          }), (0, LB.jsx)(Bv, {
            settingKey: "cursorSpeed",
            label: BB("controller:settingsCursorSpeed"),
            range: KG.w,
            format: KG.H
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsCursorMagnetism"),
            checked: IB.cursorMagnetism,
            onClick: BB => {
              (0, zB.o)({
                cursorMagnetism: BB
              })
            }
          }), (0, LB.jsx)(xG.e, {
            label: BB("controller:settingsMenuBackToCategories"),
            checked: IB.menuBackToCategories,
            onClick: BB => {
              (0, zB.o)({
                menuBackToCategories: BB
              })
            }
          }), (0, LB.jsx)(qv, {
            layoutSetting: (0, LB.jsxs)(LB.Fragment, {
              children: [nB.f.map((ZB => (0, LB.jsx)(xG.e, {
                label: BB(KG.O[ZB]),
                checked: (0, nB.C)(ZB, IB),
                onClick: BB => {
                  TB(!(0, nB.M)(ZB, BB))
                }
              }, ZB))), ZB && (0, LB.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: BB("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, LB.jsx)(nv, {}), (0, LB.jsx)(VG, {
            text: BB("controller:settingsAlternatives")
          }), (0, LB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsAlternativesHint")
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsMenuNavigation"),
            hint: BB("controller:settingsMenuNavigationHint"),
            options: KG.W,
            value: IB.menuNavigation,
            onChange: BB => {
              (0, zB.o)({
                menuNavigation: BB
              })
            }
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsInventoryNavigation"),
            hint: BB("controller:settingsInventoryNavigationHint"),
            options: KG.M,
            value: IB.inventoryNavigation,
            onChange: BB => {
              (0, zB.o)({
                inventoryNavigation: BB
              })
            }
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsQuickChat"),
            hint: BB("controller:settingsQuickChatHint"),
            options: KG.bb,
            value: IB.quickChat,
            onChange: BB => {
              (0, zB.o)({
                quickChat: BB
              })
            }
          }), (0, LB.jsx)(SG, {
            label: BB("controller:settingsLeaderboardButton"),
            hint: BB("controller:settingsLeaderboardButtonHint"),
            options: KG.Q,
            value: IB.leaderboardButton,
            onChange: BB => {
              (0, zB.o)({
                leaderboardButton: BB
              })
            }
          }), (0, LB.jsx)(VG, {
            text: BB("controller:settingsTester")
          }), (0, LB.jsx)(dv, {})]
        })
      }));
    (0, JB.c)(TB);
    for (const Yv of (0, oB.k)()) Yv.connected ? GB.h.handleConnectionEvent(Yv) : GB.h.handleDisconnectionEvent(Yv);
    const Qv = () => null !== GB.h.getActivePad(),
      sv = () => JZ.getState(),
      wv = () => JZ.isSteppingSlots(),
      Ov = (BB, IB) => {
        const ZB = ST.getFocused();
        ST.isActive() && ZB && BB.contains(ZB) && ST.setFocus(IB, {
          scroll: !1
        })
      }
  },
  8285: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      f: () => cB
    });
    var TB = ZB(1487),
      JB = ZB(1483);
    const oB = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      GB = "28de",
      vB = new Set(["1205"]),
      kB = (BB, IB) => {
        const ZB = (0, TB.b)(BB);
        if ((null === ZB || void 0 === ZB ? void 0 : ZB.vendor) === GB) return vB.has(ZB.product) ? "steamdeck" : "xbox";
        if (ZB && oB[ZB.vendor]) return oB[ZB.vendor];
        if ((0, JB.e)(BB)) return "nintendo";
        const kB = `${BB} ${null!==IB&&void 0!==IB?IB:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(kB) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(kB) ? "nintendo" : /steam deck/.test(kB) ? "steamdeck" : "xbox"
      },
      cB = BB => {
        var IB;
        return (null === (IB = (0, TB.b)(BB)) || void 0 === IB ? void 0 : IB.vendor) === GB
      }
  },
  8325: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      f: () => vB
    });
    var TB = ZB(8282);
    const JB = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      oB = new Set(["capture", "gameplay"]),
      GB = ["Up", "Down", "Left", "Right"],
      vB = BB => GB.includes(BB),
      kB = .25;
    const cB = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.sv = new Array(TB.S).fill(!1), this.previousHeld = new Array(TB.S).fill(!1), this.consumedButtons = new Array(TB.S).fill(!1), this.suppressedReleases = new Array(TB.S).fill(!1), this.wakeOwned = new Array(TB.S).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, TB.t)()
      }
      register(BB) {
        return this.consumers.has(BB.name) && console.warn(`Controller consumer "${BB.name}" registered twice; the newer one replaces it.`), this.consumers.set(BB.name, BB), () => {
          var IB;
          this.consumers.get(BB.name) === BB && (this.activeName === BB.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (IB = this.peek) || void 0 === IB ? void 0 : IB.over) === BB.name && (this.peek = null), this.consumers.delete(BB.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(BB) {
        return this.sv[(0, TB.l)(BB)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.sv = new Array(TB.S).fill(!1), this.previousHeld = new Array(TB.S).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, TB.t)()
      }
      dispatch(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = BB, this.previousHeld = this.sv, this.sv = (0, TB.r)(BB.values, this.previousHeld);
        for (let oB = 0; oB < TB.S; oB++) this.suppressedReleases[oB] = !this.sv[oB] && this.consumedButtons[oB], this.sv[oB] || (this.consumedButtons[oB] = !1), this.wakeOwned[oB] && (this.sv[oB] ? (this.consumedButtons[oB] = !0, this.wakeOwned[oB] = !1) : BB.values[oB] < TB.R && (this.wakeOwned[oB] = !1));
        Math.hypot(BB.leftStick.x, BB.leftStick.y) < kB && (this.leftStickConsumed = !1), Math.hypot(BB.rightStick.x, BB.rightStick.y) < kB && (this.rightStickConsumed = !1);
        const JB = this.pickActive();
        if ((null === JB || void 0 === JB ? void 0 : JB.name) !== this.activeName) {
          var GB, vB, cB, nB, hB, zB;
          const BB = this.activeName,
            IB = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ZB = null !== (GB = null === JB || void 0 === JB || null === (vB = JB.peek) || void 0 === vB ? void 0 : vB.call(JB)) && void 0 !== GB ? GB : null,
            oB = null === BB && !!ZB && !(null === (cB = this.consumers.get(ZB.over)) || void 0 === cB || !cB.onPeekFrame),
            kB = ZB && (ZB.over === BB || oB) ? ZB : null,
            FB = null !== this.peek && this.peek.over === (null === JB || void 0 === JB ? void 0 : JB.name) ? this.peek : null;
          this.deactivateCurrent(null !== kB, null !== FB), this.activeName = null !== (nB = null === JB || void 0 === JB ? void 0 : JB.name) && void 0 !== nB ? nB : null, null === BB || this.handOffPending || this.consumeAllHeld();
          const NB = null === (hB = null !== kB && void 0 !== kB ? kB : FB) || void 0 === hB ? void 0 : hB.stick;
          "left" === NB && IB.left ? this.leftStickConsumed = !1 : "right" === NB && IB.right && (this.rightStickConsumed = !1), this.peek = kB, JB || null === BB ? JB && (null === (zB = this.idleResume) || void 0 === zB ? void 0 : zB.name) === JB.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: BB,
            left: IB.left && this.leftStickConsumed,
            right: IB.right && this.rightStickConsumed
          }, JB && (this.idleResume = null);
          for (let JB = 0; JB < TB.S; JB++) this.previousHeld[JB] && !this.sv[JB] && (this.suppressedReleases[JB] = !0)
        }
        var FB, NB;
        (this.handOffPending = !1, JB) && (ZB && !oB.has(JB.name) && this.consumeWakePress(JB), JB.onFrame(this.buildInput(BB, IB, ZB)), this.peek && (null === (FB = this.consumers.get(this.peek.over)) || void 0 === FB || null === (NB = FB.onPeekFrame) || void 0 === NB || NB.call(FB, this.buildInput(BB, IB, !1, this.peek.stick))))
      }
      consumeWakePress(BB) {
        for (let JB = 0; JB < TB.S; JB++) {
          var IB, ZB;
          const oB = TB.U[JB];
          (null !== (IB = null === (ZB = BB.wakePressActs) || void 0 === ZB ? void 0 : ZB.call(BB, oB)) && void 0 !== IB ? IB : GB.includes(oB)) || (this.sv[JB] ? this.consumedButtons[JB] = !0 : this.lastFrame.values[JB] >= TB.N && (this.wakeOwned[JB] = !0))
        }
      }
      pickActive() {
        for (const BB of JB) {
          const IB = this.consumers.get(BB);
          if (IB && IB.isActive()) return IB
        }
        return null
      }
      deactivateCurrent() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ZB, TB, JB, oB;
        this.activeName && (null === (ZB = this.consumers.get(this.activeName)) || void 0 === ZB || null === (TB = ZB.onDeactivate) || void 0 === TB || TB.call(ZB, BB));
        this.peek && !IB && (null === (JB = this.consumers.get(this.peek.over)) || void 0 === JB || null === (oB = JB.onDeactivate) || void 0 === oB || oB.call(JB, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let JB = 0; JB < TB.S; JB++) this.sv[JB] && (this.consumedButtons[JB] = !0);
        const {
          leftStick: IB,
          rightStick: ZB
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== BB && (this.leftStickConsumed || Math.hypot(IB.x, IB.y) >= kB), this.rightStickConsumed = "right" !== BB && (this.rightStickConsumed || Math.hypot(ZB.x, ZB.y) >= kB)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(BB) {
        const IB = (0, TB.l)(BB);
        this.sv[IB] && (this.consumedButtons[IB] = !0)
      }
      buildInput(BB, IB, ZB, JB) {
        const oB = this.sv,
          GB = this.previousHeld,
          vB = JB ? new Array(TB.S).fill(!0) : [...this.consumedButtons],
          kB = JB ? vB : [...this.suppressedReleases],
          cB = !this.leftStickConsumed && (!JB || "left" === JB),
          nB = !this.rightStickConsumed && (!JB || "right" === JB);
        return {
          frame: BB,
          dtMs: IB,
          isHeld: BB => {
            const IB = (0, TB.l)(BB);
            return oB[IB] && !vB[IB]
          },
          wasPressed: BB => {
            const IB = (0, TB.l)(BB);
            return oB[IB] && !GB[IB] && !vB[IB]
          },
          wasReleased: BB => {
            const IB = (0, TB.l)(BB);
            return !oB[IB] && GB[IB] && !kB[IB]
          },
          value: IB => {
            const ZB = (0, TB.l)(IB);
            return vB[ZB] ? 0 : BB.values[ZB]
          },
          leftStick: cB ? BB.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: nB ? BB.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ZB
        }
      }
    }
  },
  8303: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB.f,
      f: () => hB.g,
      i: () => iB,
      l: () => pB,
      o: () => aB,
      r: () => HB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(1507),
      GB = ZB(36),
      vB = ZB(8309),
      kB = ZB(8282),
      cB = ZB(8297),
      nB = ZB(8277),
      hB = ZB(2089),
      zB = ZB(8312);
    const FB = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      NB = "controllerSettings",
      gB = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      qB = ["auto", ...vB.d],
      yB = (BB, IB) => "string" === typeof IB && BB.includes(IB),
      UB = BB => IB => "number" === typeof IB && Number.isFinite(IB) ? (0, zB.v)(IB, BB) : void 0,
      WB = BB => "boolean" === typeof BB ? BB : void 0,
      dB = BB => IB => yB(BB, IB) ? IB : void 0,
      CB = {
        lookSensitivityX: UB(zB.ib),
        lookSensitivityY: UB(zB.ib),
        aimLookSensitivity: UB(zB.j),
        invertLookX: WB,
        invertLookY: WB,
        lookCurve: dB(kB.M),
        lookDeadzone: UB(zB.x),
        moveDeadzone: UB(zB.x),
        swapSticks: WB,
        autoSprint: WB,
        sneakMode: dB(["toggle", "hold"]),
        tapHoldTime: dB(["short", "medium", "long"]),
        attackMode: dB(["hold", "toggle"]),
        promptFamily: dB(qB),
        hideButtonHints: WB,
        vibration: WB,
        cursorSpeed: UB(zB.w),
        cursorMagnetism: WB,
        buttonRepeat: dB(kB.n),
        largePointer: WB,
        menuBackToCategories: WB,
        swapConfirmBack: WB,
        menuNavigation: dB(["hybrid", "focus", "cursor"]),
        inventoryNavigation: dB(["hybrid", "slot", "cursor"]),
        quickChat: dB(["wheel", "off"]),
        leaderboardButton: dB(["shop", "leaderboard"]),
        gyroAiming: WB,
        gyroSensitivity: UB(zB.L),
        gyroActivation: dB(["always", "aiming", "button"]),
        gyroButton: dB(kB.U),
        emoteButton: dB(["tapHold", "wheel"])
      },
      QB = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      sB = BB => {
        const IB = {};
        if ("object" !== typeof BB || null === BB) return IB;
        for (const [ZB, TB] of Object.entries(BB)) Object.prototype.hasOwnProperty.call(cB.e, ZB) && yB(kB.U, TB) && (IB[ZB] = TB);
        return IB
      },
      wB = BB => {
        const IB = {};
        for (const ZB of Object.keys(FB))("bindings" === ZB ? Object.keys(BB.bindings).length > 0 : BB[ZB] !== FB[ZB]) && (IB[ZB] = BB[ZB]);
        0 !== Object.keys(IB).length ? GB.m.setItem(NB, IB) : GB.m.removeItem(NB)
      };
    let OB = (() => {
        const BB = GB.m.getItem(NB),
          IB = (BB => {
            const IB = "object" === typeof BB && null !== BB ? BB : {},
              ZB = {
                ...FB,
                bindings: sB(IB.bindings)
              };
            for (const JB of Object.keys(CB)) {
              const BB = CB[JB](IB[JB]);
              void 0 !== BB && (ZB[JB] = BB)
            }
            const TB = Object.keys(IB).filter((BB => !!Object.prototype.hasOwnProperty.call(FB, BB) && ("bindings" === BB ? "object" !== typeof IB.bindings || null === IB.bindings || Object.keys(IB.bindings).length !== Object.keys(ZB.bindings).length : ZB[BB] !== IB[BB])));
            return TB.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${TB.join(", ")}`), ZB
          })(BB);
        return null !== BB && void 0 !== BB && wB(IB), IB
      })(),
      YB = {
        ...OB,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const BB = {},
            IB = new URLSearchParams(window.location.search);
          for (const {
              param: ZB,
              key: TB
            }
            of QB) {
            const JB = CB[TB](IB.get(ZB));
            void 0 !== JB && (BB[TB] = JB)
          }
          return BB
        })()
      };
    const iB = () => YB,
      pB = () => {
        var BB, IB;
        const ZB = iB().promptFamily;
        return "auto" !== ZB ? ZB : null !== (BB = null === (IB = nB.h.getActivePad()) || void 0 === IB ? void 0 : IB.family) && void 0 !== BB ? BB : "xbox"
      },
      aB = BB => {
        const IB = YB;
        OB = {
          ...OB,
          ...BB
        }, wB(OB), YB = {
          ...YB,
          ...BB
        }, (BB => {
          JB.l.Gq(hB.g, YB), gB.some((IB => BB[IB] !== YB[IB])) && JB.l.Gq(hB.f, YB)
        })(IB)
      },
      HB = () => {
        const [BB, IB] = (0, TB.useState)(YB);
        return (0, oB.d)(hB.g, IB), BB
      }
  },
  8764: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    const TB = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      JB = BB => TB.has(BB)
  },
  8277: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => gB.e,
      h: () => WB
    });
    var TB = ZB(8282),
      JB = ZB(8285);
    const oB = .1,
      GB = .3;
    class vB {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(BB, IB) {
        const ZB = null === this.lastMs ? 0 : Math.min(Math.max(0, IB - this.lastMs), 100);
        this.lastMs = IB;
        const TB = Math.hypot(BB.x, BB.y);
        if (TB >= GB) return this.anchor = null, void(this.returning = !0);
        TB >= oB || (this.returning = !1);
        const JB = this.anchor;
        if (!JB || Math.hypot(BB.x - JB.x, BB.y - JB.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: BB.x,
          y: BB.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ZB, this.steadyMs < 1e3) return;
        const vB = Math.max(TB, Math.hypot(JB.x, JB.y));
        vB < oB ? this.deadzone = 0 : this.returning && (this.deadzone = vB + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(BB) {
        return Math.hypot(BB.x, BB.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : BB
      }
    }
    const kB = (BB, IB) => {
        var ZB, TB;
        return null !== (ZB = BB && (null === (TB = Object.getOwnPropertyDescriptor(BB, IB)) || void 0 === TB ? void 0 : TB.get)) && void 0 !== ZB ? ZB : null
      },
      cB = BB => {
        const IB = BB.vendorName;
        return "string" === typeof IB ? IB : void 0
      },
      nB = ((BB, IB) => {
        const ZB = kB(BB, "index"),
          TB = kB(BB, "id"),
          JB = kB(BB, "connected"),
          oB = kB(BB, "mapping"),
          GB = kB(BB, "buttons"),
          vB = kB(BB, "axes"),
          nB = kB(IB, "pressed"),
          hB = kB(IB, "value");
        return ZB && TB && JB && oB && GB && vB && nB && hB ? BB => {
          const IB = GB.call(BB),
            kB = vB.call(BB),
            zB = {
              index: Number(ZB.call(BB)),
              id: String(TB.call(BB)),
              connected: !0 === JB.call(BB),
              mapping: String(oB.call(BB)),
              buttons: [],
              axes: [],
              vendorName: cB(BB)
            };
          for (let ZB = 0; ZB < IB.length; ZB++) zB.buttons.push({
            pressed: !0 === nB.call(IB[ZB]),
            value: Number(hB.call(IB[ZB]))
          });
          for (let ZB = 0; ZB < kB.length; ZB++) zB.axes.push(Number(kB[ZB]));
          return zB
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      hB = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var zB = ZB(1477),
      FB = ZB(1483);
    const NB = BB => ({
      pressed: BB,
      value: BB ? 1 : 0
    });
    var gB = ZB(2089);
    const qB = GB,
      yB = BB => {
        const IB = new Array(TB.S).fill(0);
        for (let ZB = 0; ZB < TB.S && ZB < BB.buttons.length; ZB++) {
          const JB = BB.buttons[ZB];
          IB[ZB] = JB.pressed && !(0, TB.K)(ZB) ? Math.max(JB.value, TB.w) : JB.value
        }
        return IB
      },
      UB = (BB, IB) => {
        var ZB, TB;
        return {
          x: null !== (ZB = BB.axes[IB]) && void 0 !== ZB ? ZB : 0,
          y: null !== (TB = BB.axes[IB + 1]) && void 0 !== TB ? TB : 0
        }
      };
    const WB = new class {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB;
        this.readGamepads = BB, this.requireTrustedPads = IB, this.nativeReader = ZB, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = BB => {
          BB.isTrusted && this.trustedIndices.add(BB.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = BB => {
          this.trustedIndices.delete(BB.gamepad.index)
        }, this.Iz = BB => {
          if (this.rafId = 0, !this.running) return;
          const IB = 0 === this.lastTimestampMs ? 16 : Math.min(100, BB - this.lastTimestampMs);
          this.lastTimestampMs = BB;
          try {
            this.poll(BB, IB)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Iz))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(BB) {
        return this.frameListeners.add(BB), () => {
          this.frameListeners.delete(BB)
        }
      }
      onActivePadChanged(BB) {
        return this.connectionListeners.add(BB), () => {
          this.connectionListeners.delete(BB)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(BB) {
        return this.connectedListeners.add(BB), () => {
          this.connectedListeners.delete(BB)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const BB = this.readPads()[this.activeInfo.index],
          IB = BB ? this.readPad(BB) : null;
        return IB && IB.id === this.activeInfo.id ? BB : null
      }
      poll(BB, IB) {
        var ZB, JB;
        const oB = this.readPads();
        let GB = null,
          kB = !1;
        const cB = [],
          nB = Math.max(oB.length, this.slots.length);
        for (let WB = 0; WB < nB; WB++) {
          var hB;
          const IB = WB < oB.length ? oB[WB] : null,
            ZB = IB ? this.readPad(IB) : null;
          if (!ZB || !ZB.connected || !this.isUsable(ZB)) {
            this.slots[WB] = null;
            continue
          }
          let JB = this.slots[WB];
          JB && JB.id === ZB.id || (JB = {
            id: ZB.id,
            sv: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new vB,
            rightRest: new vB
          }, this.slots[WB] = JB);
          const nB = UB(ZB, 0),
            zB = UB(ZB, 2);
          !JB.leftSettled && Math.hypot(nB.x, nB.y) < qB && (JB.leftSettled = !0), !JB.rightSettled && Math.hypot(zB.x, zB.y) < qB && (JB.rightSettled = !0), JB.leftRest.observe(nB, BB), JB.rightRest.observe(zB, BB);
          const FB = yB(ZB),
            NB = (0, TB.r)(FB, JB.sv),
            gB = JB.sv,
            dB = NB.map(((BB, IB) => BB && !gB[IB]));
          JB.sv = NB;
          const CB = {
            pad: ZB,
            slot: JB,
            values: FB
          };
          WB === (null === (hB = this.activeInfo) || void 0 === hB ? void 0 : hB.index) && ZB.id === this.activeInfo.id ? (GB = CB, kB = dB.includes(!0)) : dB.includes(!0) && cB.push({
            polled: CB,
            rose: dB
          })
        }
        const zB = this.slots.some((BB => null !== BB));
        if (zB !== this.anyPadConnected) {
          this.anyPadConnected = zB;
          for (const BB of this.connectedListeners) BB()
        }
        const FB = null !== (ZB = null === (JB = GB) || void 0 === JB ? void 0 : JB.slot.sv) && void 0 !== ZB ? ZB : [],
          NB = kB ? void 0 : cB.find((BB => {
            let {
              rose: IB
            } = BB;
            return IB.some(((BB, IB) => BB && !FB[IB]))
          }));
        if (NB ? (GB = NB.polled, this.setActive(NB.polled.pad)) : this.activeInfo && !GB && this.setActive(null), !GB || !this.activeInfo) return;
        const gB = ((BB, IB) => {
          let {
            pad: ZB,
            slot: JB,
            values: oB
          } = BB;
          const GB = (0, TB.t)(IB);
          return GB.values = oB, JB.leftSettled && (GB.leftStick = JB.leftRest.apply(UB(ZB, 0))), JB.rightSettled && (GB.rightStick = JB.rightRest.apply(UB(ZB, 2))), GB
        })(GB, BB);
        for (const TB of this.frameListeners) TB(gB, IB, this.activeInfo)
      }
      readPad(BB) {
        const IB = this.readSnapshot(BB);
        return IB && (0, FB.i)(IB) ? (BB => {
          const IB = IB => {
              var ZB;
              return null !== (ZB = BB.buttons[IB]) && void 0 !== ZB ? ZB : NB(!1)
            },
            ZB = IB => {
              var ZB;
              return null !== (ZB = BB.axes[IB]) && void 0 !== ZB ? ZB : 0
            },
            TB = BB.axes.length > 9,
            JB = TB ? (BB => {
              const IB = 0 !== BB;
              return {
                up: IB && (BB >= -1 && BB < -.7 || BB >= .95 && BB <= 1),
                right: IB && BB >= -.75 && BB < -.1,
                down: IB && BB >= -.2 && BB < .45,
                left: IB && BB >= .4 && BB <= 1
              }
            })(ZB(9)) : {
              up: ZB(5) < -.5,
              down: ZB(5) > .5,
              left: ZB(4) < -.5,
              right: ZB(4) > .5
            };
          return {
            ...BB,
            mapping: "standard",
            buttons: [IB(1), IB(2), IB(0), IB(3), IB(4), IB(5), IB(6), IB(7), IB(8), IB(9), IB(10), IB(11), NB(JB.up), NB(JB.down), NB(JB.left), NB(JB.right), IB(12)],
            axes: [ZB(0), ZB(1), ZB(2), ZB(TB ? 5 : 3)]
          }
        })(IB) : IB
      }
      readSnapshot(BB) {
        if (this.nativeReader) try {
          return this.nativeReader(BB)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (BB => {
          const IB = BB;
          return {
            index: IB.index,
            id: IB.id,
            connected: IB.connected,
            mapping: IB.mapping,
            buttons: Array.from(IB.buttons, (BB => ({
              pressed: BB.pressed,
              value: BB.value
            }))),
            axes: Array.from(IB.axes),
            vendorName: cB(BB)
          }
        })(BB)
      }
      isUsable(BB) {
        return !(0, zB.e)(BB.id) && ("standard" !== BB.mapping ? (this.warnedNonStandardIds.has(BB.id) || (this.warnedNonStandardIds.add(BB.id), console.warn(`Controller "${BB.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(BB.index))
      }
      setActive(BB) {
        this.activeInfo = BB ? {
          index: BB.index,
          id: BB.id,
          family: (0, JB.d)(BB.id, BB.vendorName)
        } : null;
        for (const IB of this.connectionListeners) IB(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (BB) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", BB)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Iz))
      }
    }((() => hB ? hB.call(navigator) : []), !0);
    WB.listenForConnections()
  },
  8859: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => GB,
      d: () => vB,
      g: () => JB
    });
    var TB = ZB(8868);
    const JB = BB => {
        const IB = [];
        BB.holdingGun && IB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && IB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const oB of null !== (ZB = null === (JB = BB.customButtons) || void 0 === JB ? void 0 : JB.filter(TB.c)) && void 0 !== ZB ? ZB : []) {
          var ZB, JB;
          IB.push({
            kind: "customButton",
            id: oB.id,
            icon: oB.icon,
            description: oB.description
          })
        }
        return IB
      },
      oB = BB => BB.length >= 2,
      GB = BB => "specialAction" !== BB.kind,
      vB = (BB, IB) => {
        if (null === BB || null === IB) return BB === IB;
        if (BB.kind !== IB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === IB.action;
          case "customButton":
            return BB.id === IB.id && BB.icon === IB.icon;
          case "touchButton":
            return BB.label === IB.label
        }
      }
  },
  8771: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    const TB = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  8857: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      h: () => FB,
      l: () => hB,
      m: () => NB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(1507),
      GB = ZB(8859),
      vB = ZB(8871);
    let kB = null;
    const cB = () => kB,
      nB = BB => {
        (0, GB.d)(kB, BB) || (kB = BB, JB.l.Gq(vB.f, kB))
      },
      hB = () => {
        const [BB, IB] = (0, TB.useState)(cB);
        return (0, oB.d)(vB.f, IB), BB
      };
    let zB = !1;
    const FB = BB => {
        BB !== zB && (zB = BB, JB.l.Gq(vB.g, BB))
      },
      NB = () => {
        const [BB, IB] = (0, TB.useState)(zB);
        return (0, oB.d)(vB.g, IB), BB
      }
  },
  8881: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      c: () => vB
    });
    var TB = ZB(24),
      JB = ZB(8871);
    let oB = !1;
    const GB = () => oB,
      vB = BB => {
        BB !== oB && (oB = BB, TB.l.Gq(JB.h, oB))
      }
  },
  8877: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      e: () => kB
    });
    var TB = ZB(24),
      JB = ZB(8871);
    let oB = null,
      GB = 0;
    const vB = () => oB,
      kB = BB => {
        null === BB && null === oB || (oB = null === BB ? null : {
          id: ++GB,
          holdMs: BB
        }, TB.l.Gq(JB.l, oB))
      }
  },
  8871: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => TB,
      g: () => JB,
      h: () => vB,
      l: () => kB,
      o: () => cB,
      s: () => GB
    });
    const TB = "controllerActionHintChanged",
      JB = "controllerActionWheelHintChanged",
      oB = "controllerOpenChat",
      GB = "controllerSneakToggledChanged",
      vB = "controllerAttackLatchedChanged",
      kB = "controllerDropStackHoldChanged",
      cB = "controllerPickBlockHintChanged"
  },
  8883: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      h: () => vB
    });
    var TB = ZB(24),
      JB = ZB(8871);
    let oB = !1;
    const GB = () => oB,
      vB = BB => {
        BB !== oB && (oB = BB, TB.l.Gq(JB.o, oB))
      }
  },
  8937: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      f: () => vB
    });
    var TB = ZB(24),
      JB = ZB(8871);
    let oB = !1;
    const GB = () => oB,
      vB = BB => {
        BB !== oB && (oB = BB, TB.l.Gq(JB.s, oB))
      }
  },
  8827: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor() {
        this.downAtMs = null
      }
      update(BB, IB, ZB, TB) {
        if (BB) return this.downAtMs = ZB, null;
        if (null === this.downAtMs) return null;
        const JB = ZB - this.downAtMs >= TB;
        return IB ? JB ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, JB ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8345: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      c: () => zB,
      e: () => vB,
      f: () => WB,
      j: () => UB
    });
    var TB = ZB(36),
      JB = ZB(8309),
      oB = ZB(8282);
    const GB = (() => {
        try {
          return ZB(8354)
        } catch {
          return null
        }
      })(),
      vB = [...oB.U, "LeftStick", "RightStick"],
      kB = new Map,
      cB = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      nB = (new Set(Object.values(cB)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      hB = (BB, IB) => {
        var ZB, TB;
        return null !== (ZB = null === (TB = nB[cB[BB]]) || void 0 === TB ? void 0 : TB[IB]) && void 0 !== ZB ? ZB : 1
      },
      zB = (BB, IB) => {
        const ZB = `./${cB[BB]}/${IB}.svg`;
        let TB = kB.get(ZB);
        return void 0 === TB && (TB = GB ? GB(ZB) : "", kB.set(ZB, TB)), TB
      },
      FB = new Set,
      NB = [],
      gB = BB => {
        if (!FB.has(BB)) {
          FB.add(BB);
          for (const IB of vB) {
            const ZB = zB(BB, IB);
            if (ZB) {
              const BB = new Image;
              BB.crossOrigin = "anonymous", BB.src = ZB, NB.push(BB)
            }
          }
        }
      },
      qB = "controllerGlyphFamily";
    let yB = null;
    const UB = BB => {
        BB !== yB && (yB = BB, TB.m.setItem(qB, BB), gB(BB))
      },
      WB = () => {
        const BB = TB.m.getItem(qB);
        (0, JB.g)(BB) && BB !== yB && (yB = BB, gB(BB))
      }
  },
  8956: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => XB,
      f: () => LB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(1507),
      GB = ZB(8291),
      vB = ZB(8277),
      kB = ZB(8325),
      cB = ZB(8303);
    const nB = {
        x: 0,
        y: 0,
        z: 0
      },
      hB = Math.PI / 180,
      zB = BB => Math.hypot(BB.x, BB.y, BB.z),
      FB = (BB, IB) => ({
        x: BB.x * IB,
        y: BB.y * IB,
        z: BB.z * IB
      }),
      NB = (BB, IB) => ({
        x: BB.x + IB.x,
        y: BB.y + IB.y,
        z: BB.z + IB.z
      }),
      gB = (BB, IB) => ({
        x: BB.x - IB.x,
        y: BB.y - IB.y,
        z: BB.z - IB.z
      }),
      qB = BB => {
        const IB = zB(BB);
        return 0 === IB ? nB : FB(BB, 1 / IB)
      },
      yB = BB => ({
        min: {
          ...BB
        },
        max: {
          ...BB
        }
      }),
      UB = (BB, IB) => ({
        min: {
          x: Math.min(BB.min.x, IB.x),
          y: Math.min(BB.min.y, IB.y),
          z: Math.min(BB.min.z, IB.z)
        },
        max: {
          x: Math.max(BB.max.x, IB.x),
          y: Math.max(BB.max.y, IB.y),
          z: Math.max(BB.max.z, IB.z)
        }
      }),
      WB = (BB, IB) => BB.max.x - BB.min.x <= IB && BB.max.y - BB.min.y <= IB && BB.max.z - BB.min.z <= IB;
    class dB {
      constructor() {
        this.bias = nB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = nB, this.windowSec = 0
      }
      update(BB) {
        const IB = this.gyroRange ? UB(this.gyroRange, BB.gyro) : yB(BB.gyro),
          ZB = BB.accel ? this.accelRange ? UB(this.accelRange, BB.accel) : yB(BB.accel) : null;
        if (!WB(IB, 1) || ZB && !WB(ZB, .01)) return void this.restartWindow(BB);
        if (this.gyroRange = IB, this.accelRange = ZB, this.sum = NB(this.sum, FB(BB.gyro, BB.dtSec)), this.windowSec += BB.dtSec, this.windowSec < 1) return;
        const TB = FB(this.sum, 1 / this.windowSec);
        if (zB(TB) > 5) return;
        const JB = gB(TB, this.bias);
        let oB = 0;
        !this.calibrated || this.windowSec >= 3 ? oB = 1 : zB(JB) <= 1 && (oB = Math.min(1, BB.dtSec / 1)), this.bias = NB(this.bias, FB(JB, oB)), this.calibrated = this.calibrated || oB > 0
      }
      correct(BB) {
        return gB(BB, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = nB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = nB, this.windowSec = 0
      }
      restartWindow(BB) {
        this.gyroRange = yB(BB.gyro), this.accelRange = BB.accel ? yB(BB.accel) : null, this.sum = nB, this.windowSec = 0
      }
    }
    class CB {
      constructor() {
        this.down = null
      }
      update(BB, IB, ZB) {
        const TB = qB(FB(IB, -1));
        if (!this.down) return this.down = TB, TB;
        const JB = FB(BB, hB * ZB),
          oB = this.down,
          GB = {
            x: oB.x - (JB.y * oB.z - JB.z * oB.y),
            y: oB.y - (JB.z * oB.x - JB.x * oB.z),
            z: oB.z - (JB.x * oB.y - JB.y * oB.x)
          },
          vB = 0 === zB(TB) ? 0 : Math.min(1, ZB / .25);
        var kB, cB;
        return this.down = qB((cB = vB, NB(kB = GB, FB(gB(TB, kB), cB)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class QB {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(BB, IB, ZB) {
        const TB = Math.hypot(BB, IB),
          JB = Math.max(0, Math.min(1, (TB - 2) / 2)),
          oB = {
            yaw: BB * (1 - JB),
            pitch: IB * (1 - JB),
            dtSec: ZB
          };
        for (this.entries.push(oB), this.windowSec += ZB; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let GB = 0,
          vB = 0;
        for (const cB of this.entries) GB += cB.yaw * cB.dtSec, vB += cB.pitch * cB.dtSec;
        const kB = this.windowSec > 0 ? {
          yaw: GB / this.windowSec,
          pitch: vB / this.windowSec
        } : {
          yaw: oB.yaw,
          pitch: oB.pitch
        };
        return {
          yaw: BB * JB + kB.yaw,
          pitch: IB * JB + kB.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class sB {
      constructor() {
        this.calibrator = new dB, this.gravity = new CB, this.smoother = new QB
      }
      process(BB, IB, ZB) {
        const TB = Math.max(0, Math.min(.05, IB));
        this.calibrator.update({
          ...BB,
          dtSec: TB
        });
        const JB = this.calibrator.correct(BB.gyro);
        let oB = JB.y;
        "player" === ZB && BB.accel && (oB = ((BB, IB) => {
          const ZB = BB.y * IB.y + BB.z * IB.z;
          return -Math.sign(ZB) * Math.min(1.41 * Math.abs(ZB), Math.hypot(BB.y, BB.z))
        })(JB, this.gravity.update(JB, BB.accel, TB)));
        const GB = this.smoother.apply(oB, JB.x, TB),
          vB = ((BB, IB) => {
            const ZB = Math.hypot(BB, IB);
            if (ZB >= 1) return {
              yaw: BB,
              pitch: IB
            };
            const TB = ZB / 1;
            return {
              yaw: BB * TB,
              pitch: IB * TB
            }
          })(GB.yaw, GB.pitch);
        return {
          yawDeg: vB.yaw * TB,
          pitchDeg: vB.pitch * TB
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const wB = (BB, IB) => {
      var ZB, TB, JB;
      const oB = IB * hB,
        GB = null !== (ZB = BB.beta) && void 0 !== ZB ? ZB : 0,
        vB = null !== (TB = BB.gamma) && void 0 !== TB ? TB : 0;
      return {
        x: GB * Math.cos(oB) - vB * Math.sin(oB),
        y: GB * Math.sin(oB) + vB * Math.cos(oB),
        z: null !== (JB = BB.alpha) && void 0 !== JB ? JB : 0
      }
    };
    var OB = ZB(8960);
    class YB {
      constructor(BB, IB, ZB) {
        this.hid = BB, this.sink = IB, this.onControllersChanged = ZB, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = BB => {
          this.openController(BB.device).catch((BB => {
            console.warn("Could not open motion controller", BB)
          }))
        }, this.onDisconnect = BB => {
          this.opening.has(BB.device) && this.disconnectedWhileOpening.add(BB.device);
          const IB = this.controllers.get(BB.device);
          IB && (this.forget(IB), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const BB = await this.hid.getDevices();
        for (const IB of BB) await this.openController(IB).catch((BB => {
          console.warn("Could not open motion controller", BB)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const BB of [...this.controllers.values()]) this.forget(BB);
        this.onControllersChanged()
      }
      async request() {
        const BB = await this.hid.requestDevice({
          filters: OB.o
        });
        let IB = 0;
        for (const ZB of BB) await this.openController(ZB).catch((BB => {
          console.warn("Could not open motion controller", BB), IB++
        }));
        return IB
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((BB => null !== (0, OB.i)(BB.vendorId, BB.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((BB => BB.kind))
      }
      forget(BB) {
        BB.device.removeEventListener("inputreport", BB.onReport), this.controllers.get(BB.device) === BB && this.controllers.delete(BB.device)
      }
      async openController(BB) {
        const IB = (0, OB.i)(BB.vendorId, BB.productId);
        if (!IB || !this.running || this.controllers.has(BB) || this.opening.has(BB)) return;
        this.opening.add(BB);
        let ZB = !1;
        try {
          BB.opened || await BB.open()
        } finally {
          this.opening.delete(BB), ZB = this.disconnectedWhileOpening.delete(BB)
        }
        if (ZB) return void BB.close().catch((BB => {
          console.debug("Could not close an unplugged motion controller", BB)
        }));
        if (!this.running) return;
        const TB = {
          device: BB,
          kind: IB,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: BB => {
            this.onReport(TB, BB)
          }
        };
        this.controllers.set(BB, TB), BB.addEventListener("inputreport", TB.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(TB)
        } catch (JB) {
          console.warn(`Could not turn on motion for ${IB}`, JB), this.controllers.get(BB) === TB && (this.forget(TB), this.onControllersChanged())
        }
      }
      async enableMotion(BB) {
        let {
          device: IB,
          kind: ZB
        } = BB;
        if ((0, OB.m)(ZB))
          for (const TB of OB.B[ZB]) await IB.receiveFeatureReport(TB).catch((BB => {
            console.debug(`Motion controller feature report ${TB} unavailable`, BB)
          }));
        else
          for (let TB = 0; TB < 2; TB++)
            for (const {
                subcommand: BB,
                args: ZB
              }
              of OB.F) await IB.sendReport(OB.I, (0, OB.e)(this.switchPacketCounter++, BB, ZB)), await new Promise((BB => {
              setTimeout(BB, 60)
            }))
      }
      onReport(BB, IB) {
        const ZB = (0, OB.v)(BB.kind, IB.reportId, IB.data, BB.device.productId);
        if (!ZB) return;
        const TB = null === BB.lastEventMs ? 0 : (IB.timeStamp - BB.lastEventMs) / 1e3;
        BB.lastEventMs = IB.timeStamp;
        let JB = ZB.dtSec;
        if (null !== JB && TB > 0 && (JB = Math.max(.001, Math.min(.017, TB / ZB.readings.length))), null === JB && null !== ZB.sensorClock && (0, OB.m)(BB.kind)) {
          const IB = (0, OB.z)(BB.kind, BB.lastClock, ZB.sensorClock);
          BB.lastClock = ZB.sensorClock, JB = 0 === IB ? null : IB
        }
        if (BB.lastReadingMs = IB.timeStamp, this.isPreferred(BB, IB.timeStamp))
          for (const GB of ZB.readings) {
            var oB;
            this.sink(GB, null !== (oB = JB) && void 0 !== oB ? oB : TB, `hid${BB.openedOrder}`)
          }
      }
      isPreferred(BB, IB) {
        const ZB = BB => 1e6 * OB.t[BB.kind] + BB.openedOrder;
        for (const TB of this.controllers.values())
          if (TB !== BB && IB - TB.lastReadingMs < 500 && ZB(TB) < ZB(BB)) return !1;
        return !0
      }
    }
    var iB = ZB(105);
    const pB = () => DeviceMotionEvent,
      aB = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, iB.isMobile)(),
      HB = () => {
        var BB;
        const IB = null === (BB = window.screen.orientation) || void 0 === BB ? void 0 : BB.angle;
        return "number" === typeof IB ? IB : "number" === typeof window.orientation ? window.orientation : 0
      };
    class MB {
      constructor(BB, IB) {
        this.sink = BB, this.onStateChanged = IB, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((BB => {
            console.warn("Could not enable the motion sensor", BB)
          }))
        }, this.onMotion = BB => {
          const IB = BB.rotationRate;
          if (!IB || null === IB.alpha && null === IB.beta && null === IB.gamma) return;
          const ZB = null === this.lastEventMs ? 0 : (BB.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = BB.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: wB(IB, HB()),
            accel: null
          }, ZB, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof pB().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const BB = pB().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof BB) return void this.listen();
        let IB;
        this.disarmGestureRequest();
        try {
          IB = await BB.call(DeviceMotionEvent)
        } catch (ZB) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ZB
        }
        this.wanted && ("granted" === IB ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(BB) {
        this.state !== BB && (this.state = BB, this.onStateChanged())
      }
    }
    const jB = "controllerGyroStatusChanged",
      PB = {
        YH: 0,
        iH: 0
      },
      RB = BB => {
        var IB, ZB;
        return "undefined" === typeof document || (null === (IB = null === (ZB = document.featurePolicy) || void 0 === ZB ? void 0 : ZB.allowsFeature(BB)) || void 0 === IB || IB)
      };
    class rB {
      constructor() {
        this.processor = new sB, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = BB => {
          const IB = BB.gyroAiming && vB.h.hasConnectedPad();
          var ZB, TB;
          IB !== this.phoneRunning && (this.phoneRunning = IB, IB ? null === (ZB = this.phone) || void 0 === ZB || ZB.start() : null === (TB = this.phone) || void 0 === TB || TB.stop());
          if (BB.gyroAiming !== this.running) {
            var JB, oB;
            if (this.running = BB.gyroAiming, this.running) null === (JB = this.hid) || void 0 === JB || JB.start().catch((BB => {
              console.warn("Could not open motion controllers", BB)
            }));
            else null === (oB = this.hid) || void 0 === oB || oB.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          JB.l.Gq(jB, this.getStatus())
        };
        const BB = (() => {
            var BB;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (BB = navigator.hid) && void 0 !== BB ? BB : null
          })(),
          IB = RB("hid");
        this.hidBlocked = null !== BB && !IB, this.hid = BB && IB ? new YB(BB, ((BB, IB, ZB) => {
          this.lastHidReadingMs = performance.now(), this.feed(BB, IB, "player", ZB)
        }), this.publishStatus) : null;
        const ZB = RB("accelerometer") && RB("gyroscope");
        this.phoneBlocked = aB() && !ZB, this.phone = aB() && ZB ? new MB(((BB, IB, ZB) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(BB, IB, "local", ZB)
        }), this.publishStatus) : null, JB.l.subscribe(cB.f, this.syncWithSettings), vB.h.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, cB.i)()), this.publishStatus()
        })), this.syncWithSettings((0, cB.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var BB, IB, ZB, TB;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (BB = null === (IB = this.hid) || void 0 === IB ? void 0 : IB.getConnectedKinds()) && void 0 !== BB ? BB : [],
          phoneMotion: null !== (ZB = null === (TB = this.phone) || void 0 === TB ? void 0 : TB.getState()) && void 0 !== ZB ? ZB : "off",
          padConnected: vB.h.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var BB;
        await (null === (BB = this.phone) || void 0 === BB ? void 0 : BB.requestPermission())
      }
      drainLookDelta() {
        const BB = performance.now();
        BB - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = BB;
        const IB = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ZB = (0, cB.i)();
        return ZB.gyroAiming && (BB => {
          let {
            activation: IB,
            isHeld: ZB,
            useButton: TB,
            gyroButton: JB
          } = BB;
          return "always" === IB || ZB("aiming" === IB ? TB : JB)
        })({
          activation: ZB.gyroActivation,
          isHeld: BB => kB.c.isButtonHeld(BB),
          useButton: (0, GB.g)("use"),
          gyroButton: ZB.gyroButton
        }) ? ((BB, IB) => ({
          YH: -BB.yawDeg * IB * hB,
          iH: -BB.pitchDeg * IB * hB
        }))(IB, ZB.gyroSensitivity) : PB
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(BB, IB) {
        this.feed(BB, IB, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(BB, IB, ZB, TB) {
        this.source !== TB && (this.processor.reset(), this.source = TB);
        const JB = this.processor.process(BB, IB, ZB);
        this.pendingYawDeg += JB.yawDeg, this.pendingPitchDeg += JB.pitchDeg
      }
    }
    let mB = null;
    const XB = () => (mB || (mB = new rB), mB),
      LB = () => {
        const [BB, IB] = (0, TB.useState)((() => XB().getStatus()));
        return (0, oB.d)(jB, IB), (0, TB.useEffect)((() => {
          IB(XB().getStatus())
        }), []), BB
      }
  },
  8960: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => sB,
      F: () => QB,
      I: () => WB,
      e: () => CB,
      i: () => kB,
      m: () => TB,
      o: () => vB,
      q: () => cB,
      t: () => nB,
      v: () => UB,
      z: () => qB
    });
    const TB = BB => "dualShock4" === BB || "dualSense" === BB,
      JB = 1356,
      oB = 1406,
      GB = [{
        vendorId: JB,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: JB,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: JB,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: JB,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: JB,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: oB,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: oB,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: oB,
        productId: 8199,
        kind: "joyConRight"
      }],
      vB = GB.map((BB => {
        let {
          vendorId: IB,
          productId: ZB
        } = BB;
        return {
          vendorId: IB,
          productId: ZB
        }
      })),
      kB = (BB, IB) => {
        var ZB, TB;
        return null !== (ZB = null === (TB = GB.find((ZB => ZB.vendorId === BB && ZB.productId === IB))) || void 0 === TB ? void 0 : TB.kind) && void 0 !== ZB ? ZB : null
      },
      cB = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      nB = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      hB = 2e3 / 32767,
      zB = 1 / 8192,
      FB = 936 / 13371,
      NB = (BB, IB, ZB) => ({
        x: BB.getInt16(IB, !0) * ZB,
        y: BB.getInt16(IB + 2, !0) * ZB,
        z: BB.getInt16(IB + 4, !0) * ZB
      }),
      gB = BB => 0 === BB.x && 0 === BB.y && 0 === BB.z,
      qB = (BB, IB, ZB) => null === IB ? null : "dualShock4" === BB ? 16 * (ZB - IB & 65535) / 3 / 1e6 : (ZB - IB >>> 0) / 3 / 1e6,
      yB = (BB, IB) => "joyConRight" === IB ? {
        x: BB.y,
        y: -BB.z,
        z: -BB.x
      } : {
        x: -BB.y,
        y: BB.z,
        z: -BB.x
      },
      UB = (BB, IB, ZB, JB) => TB(BB) ? ((BB, IB, ZB, TB) => {
        const JB = ((BB, IB, ZB) => "dualShock4" === BB ? 1 === IB && ZB >= 63 ? 0 : 17 === IB && ZB >= 65 ? 2 : null : 1 === IB && ZB >= 62 ? 0 : 49 === IB && ZB >= 63 ? 1 : null)(BB, IB, ZB.byteLength);
        if (null === JB) return null;
        if (2976 === TB && 1 === IB && 0 !== (4 & ZB.getUint8(30))) return null;
        const oB = JB + ("dualShock4" === BB ? 12 : 15),
          GB = NB(ZB, oB, hB),
          vB = NB(ZB, oB + 6, zB);
        return gB(GB) && gB(vB) ? null : {
          readings: [{
            gyro: GB,
            accel: vB
          }],
          dtSec: null,
          sensorClock: "dualShock4" === BB ? ZB.getUint16(JB + 9, !0) : ZB.getUint32(JB + 27, !0)
        }
      })(BB, IB, ZB, JB) : ((BB, IB, ZB) => {
        if (48 !== IB && 49 !== IB || ZB.byteLength < 48) return null;
        const TB = [];
        for (let JB = 0; JB < 3; JB++) {
          const IB = NB(ZB, 12 + 12 * JB, 244e-6),
            oB = NB(ZB, 18 + 12 * JB, FB);
          if (gB(oB) && gB(IB)) return null;
          TB.push({
            gyro: yB(oB, BB),
            accel: yB(IB, BB)
          })
        }
        return {
          readings: TB,
          dtSec: .005,
          sensorClock: null
        }
      })(BB, IB, ZB),
      WB = 1,
      dB = [0, 1, 64, 64, 0, 1, 64, 64],
      CB = (BB, IB, ZB) => new Uint8Array([15 & BB, ...dB, IB, ...ZB]),
      QB = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      sB = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8334: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => rB,
      d: () => lB,
      e: () => QB,
      i: () => FB.j,
      l: () => LB,
      p: () => XB,
      s: () => sB,
      w: () => eB,
      y: () => FB.p,
      A: () => FB.x,
      B: () => AB,
      D: () => FB.F,
      H: () => MB
    });
    var TB = ZB(63),
      JB = ZB(20),
      oB = ZB(24),
      GB = ZB(1507),
      vB = ZB(1353),
      kB = ZB(8303),
      cB = ZB(8341),
      nB = ZB(8285),
      hB = ZB(8277),
      zB = ZB(8345),
      FB = ZB(1454),
      NB = ZB(8282),
      gB = ZB(8764),
      qB = ZB(4557),
      yB = ZB(121);
    class UB {
      constructor(BB) {
        this.deps = BB, this.pads = new Map
      }
      observe(BB, IB, ZB) {
        if (!this.deps.touchOnly) return;
        const TB = this.pads.get(IB.id);
        "proven" !== TB && ZB ? (this.pads.set(IB.id, "proven"), void 0 !== TB && this.deps.onReleased(IB, BB, BB.timestampMs - TB)) : void 0 === TB && (this.pads.set(IB.id, BB.timestampMs), this.deps.onHeld(IB, BB)), this.deps.setMayHide("proven" === this.pads.get(IB.id))
      }
    }
    const WB = BB => BB.values.flatMap(((BB, IB) => BB >= NB.N ? [String(IB)] : [])).join(",") || "none",
      dB = (BB, IB, TB, JB, oB) => {
        const GB = (0, FB.e)(),
          vB = document.visibilityState,
          kB = document.hasFocus();
        Promise.all([Promise.resolve().then((() => ZB(3088))), Promise.resolve().then((() => ZB(1125))), Promise.resolve().then((() => ZB(140)))]).then((ZB => {
          let [{
            logControllerHudHoldToGtag: cB
          }, {
            logClientLineFromEveryPage: nB
          }, {
            siteUsed: hB
          }] = ZB;
          cB(BB, IB.family, null === oB ? void 0 : Math.round(oB / 1e3)), nB(`touch HUD pad ${BB}`, CB(IB, TB, JB, oB, GB, vB, kB, hB))
        }), (() => {}))
      },
      CB = (BB, IB, ZB, TB, JB, oB, GB, vB) => {
        var kB;
        const cB = {
          pad_id: BB.id.slice(0, 120),
          pad_family: BB.family,
          pad_mapping: null !== (kB = null === ZB || void 0 === ZB ? void 0 : ZB.mapping) && void 0 !== kB ? kB : "unread",
          pad_axes: ZB ? String(ZB.axes.length) : "unread",
          pad_buttons: ZB ? String(ZB.buttons.length) : "unread",
          pressed: WB(IB),
          ms_since_touch: null === JB ? "none" : String(Math.round(IB.timestampMs - JB)),
          visibility: oB,
          focused: String(GB),
          site: vB
        };
        return null !== TB && (cB.held_ms = String(Math.round(TB))), cB
      };
    const QB = BB => !BB.repeat && !(0, gB.b)(BB.key),
      sB = "PadHidesCursor";
    let wB = !1;
    const OB = BB => {
        BB !== wB && (wB = BB, document.documentElement.classList.toggle(sB, BB))
      },
      YB = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(BB) {
          let IB = !1,
            ZB = !1;
          BB.values.forEach(((BB, TB) => {
            const JB = BB >= (this.buttonsDown[TB] ? NB.R : NB.N);
            JB && !this.buttonsDown[TB] && (IB = !0, ZB = !0), this.buttonsDown[TB] = JB
          }));
          return [BB.leftStick, BB.rightStick].forEach(((BB, TB) => {
            const JB = this.stickAnchors[TB];
            Math.hypot(BB.x, BB.y) < (JB ? NB.R : .3) ? this.stickAnchors[TB] = null : (!JB || Math.hypot(BB.x - JB.x, BB.y - JB.y) >= .3) && (this.stickAnchors[TB] = {
              x: BB.x,
              y: BB.y
            }, IB = !0, ZB ||= !JB)
          })), IB && (this.lastActivityMs = BB.timestampMs), this.onlyMovedOn = IB && !ZB, IB
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(BB) {
          return !(BB - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((BB => BB)) || this.stickAnchors.some((BB => null !== BB)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((BB => null !== BB))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      iB = (pB = () => hB.h.getActiveGamepad(), new UB({
        touchOnly: "touchOnly" === (0, yB.e)(),
        setMayHide: FB.t,
        onHeld: (BB, IB) => {
          dB("sv", BB, IB, pB(), null)
        },
        onReleased: (BB, IB, ZB) => {
          dB("released", BB, IB, pB(), ZB)
        }
      }));
    var pB;
    let aB = null,
      HB = !1;
    const MB = () => HB;
    let jB = null,
      PB = !1,
      RB = null;
    const rB = () => RB;
    let mB = !1;
    const XB = (BB, IB) => {
        if (!YB.observe(BB)) return !1;
        if (iB.observe(BB, IB, YB.isStickOffRest()), mB && YB.wasOnlyMoveOn() && !(0, FB.j)()) return !1;
        mB = !1, HB = !1;
        const ZB = !(0, FB.j)();
        return ZB && (aB = BB, RB = !wB && PB && jB ? {
          ...jB
        } : null), PB = !1, (0, FB.p)("gamepad"), OB(!0), (0, zB.j)((0, kB.l)()), ZB
      },
      LB = BB => !(0, FB.j)() || BB === aB,
      eB = () => {
        YB.reset()
      },
      uB = () => {
        const BB = JB.d.get("activeInputDevice"),
          IB = "gamepad" === BB ? hB.h.getActivePad() : null;
        return {
          device: BB,
          inGame: (0, vB.w)(),
          padMovesMouse: null !== IB && (0, nB.f)(IB.id)
        }
      },
      fB = BB => {
        document.pointerLockElement ? jB = null : (jB ??= {
          x: 0,
          y: 0
        }, jB.x = BB.clientX, jB.y = BB.clientY)
      },
      lB = () => {
        const BB = new qB.c,
          IB = IB => {
            BB.reset(), mB = !1, (0, FB.p)(IB)
          },
          ZB = BB => {
            if (BB.isTrusted) {
              if (BB instanceof KeyboardEvent) {
                if ((0, FB.l)(BB), !QB(BB)) return;
                HB = !0
              }
              if (BB instanceof PointerEvent && "touch" === BB.pointerType) return jB = null, void IB("touch");
              BB instanceof PointerEvent && (fB(BB), PB = !0), ("pointerdown" !== BB.type || (BB => {
                let {
                  device: IB,
                  inGame: ZB,
                  padMovesMouse: TB
                } = BB;
                return !("gamepad" === IB && TB && ZB)
              })(uB())) && IB("keyboardMouse")
            }
          },
          TB = BB => {
            BB.isTrusted && (jB = null, IB("touch"))
          },
          GB = BB => {
            BB.isTrusted && "touch" !== BB.pointerType && !BB.relatedTarget && (jB = null)
          },
          vB = ZB => {
            if (!ZB.isTrusted || "touch" === ZB.pointerType) return;
            fB(ZB);
            const TB = ZB.movementX || 0,
              oB = ZB.movementY || 0;
            if (0 === TB && 0 === oB) return;
            if (PB = !0, OB(!1), "keyboardMouse" === JB.d.get("activeInputDevice")) return;
            const GB = YB.isHolding(ZB.timeStamp),
              vB = uB(),
              kB = (BB => {
                let {
                  device: IB,
                  inGame: ZB,
                  padMovesMouse: TB,
                  padHolding: JB
                } = BB;
                return ("gamepad" !== IB || !TB) && "keyboardMouse" !== IB && (ZB || !JB)
              })({
                ...vB,
                inGame: vB.inGame && (0, cB.h)(),
                padHolding: GB
              });
            kB && BB.add(TB, oB, ZB.timeStamp) && (IB("keyboardMouse"), mB = YB.isStickOffRest())
          },
          kB = BB => {
            OB("gamepad" === BB)
          },
          nB = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ZB, nB), window.addEventListener("pointerdown", ZB, nB), window.addEventListener("wheel", ZB, nB), window.addEventListener("touchstart", TB, nB), window.addEventListener("pointermove", vB, nB), window.addEventListener("pointerout", GB, nB);
        const hB = oB.l.subscribe("appManagerUpdated|activeInputDevice", kB);
        return kB(JB.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ZB, nB), window.removeEventListener("pointerdown", ZB, nB), window.removeEventListener("wheel", ZB, nB), window.removeEventListener("touchstart", TB, nB), window.removeEventListener("pointermove", vB, nB), window.removeEventListener("pointerout", GB, nB), jB = null, oB.l.unsubscribe(hB), OB(!1)
        }
      },
      AB = () => {
        const [BB, IB] = (0, TB.useState)(kB.l);
        return (0, GB.d)(kB.d, (() => {
          IB((0, kB.l)())
        })), (0, GB.d)(hB.e, (() => {
          IB((0, kB.l)())
        })), BB
      }
  },
  8309: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => JB
    });
    const TB = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      JB = BB => TB.includes(BB)
  },
  8809: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      k: () => kB,
      o: () => vB
    });
    var TB = ZB(1507),
      JB = ZB(1469);
    const oB = "controllerInventoryCursorChanged",
      GB = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      vB = () => {
        var BB, IB;
        return (0, TB.h)(oB, null !== (BB = null === (IB = (0, JB.d)()) || void 0 === IB ? void 0 : IB.getInventoryCursorState()) && void 0 !== BB ? BB : GB)
      },
      kB = () => {
        var BB, IB;
        return null !== (BB = null === (IB = (0, JB.d)()) || void 0 === IB ? void 0 : IB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  8806: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      e: () => vB,
      h: () => kB,
      k: () => GB,
      n: () => oB,
      q: () => nB,
      t: () => hB
    });
    let TB = null;
    const JB = new Set,
      oB = BB => (TB = BB, () => {
        if (TB === BB) {
          TB = null;
          for (const BB of JB) BB()
        }
      }),
      GB = BB => (JB.add(BB), () => {
        JB.delete(BB)
      }),
      vB = () => TB,
      kB = () => null !== TB;
    let cB = null;
    const nB = BB => {
        cB = BB
      },
      hB = () => {
        const BB = cB;
        return cB = null, BB
      },
      zB = (BB, IB) => {
        var ZB, TB;
        return null !== (ZB = null !== (TB = BB.find((BB => BB.element === IB))) && void 0 !== TB ? TB : BB.find((BB => BB.element.contains(IB)))) && void 0 !== ZB ? ZB : null
      }
  },
  8818: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => GB
    });
    var TB = ZB(63);
    const JB = new WeakMap,
      oB = BB => {
        var IB, ZB;
        return null !== (IB = null === (ZB = JB.get(BB)) || void 0 === ZB ? void 0 : ZB.current) && void 0 !== IB ? IB : null
      },
      GB = (BB, IB) => {
        const ZB = (0, TB.useRef)(IB);
        ZB.current = IB;
        const oB = (0, TB.useRef)(null);
        (0, TB.useEffect)((() => {
          const IB = BB.current,
            TB = oB.current;
          IB !== TB && (TB && JB.get(TB) === ZB && JB.delete(TB), oB.current = IB, IB && JB.set(IB, ZB))
        })), (0, TB.useEffect)((() => () => {
          const BB = oB.current;
          BB && JB.get(BB) === ZB && JB.delete(BB), oB.current = null
        }), [])
      }
  },
  8935: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      h: () => cB,
      k: () => hB,
      m: () => nB,
      p: () => kB,
      r: () => FB
    });
    var TB = ZB(24),
      JB = ZB(2089),
      oB = ZB(1469),
      GB = ZB(1454);
    const vB = BB => {
        var IB, ZB;
        return (0, GB.j)() && null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getGlyphForNoaAction(BB)) && void 0 !== IB ? IB : null
      },
      kB = "controllerGlyph:",
      cB = BB => {
        var IB, ZB;
        return null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getPadGlyphIconName(BB)) && void 0 !== IB ? IB : `${kB}xbox/${BB}`
      },
      nB = BB => BB.startsWith(kB),
      hB = BB => {
        var IB, ZB;
        return nB(BB) && null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getPadGlyphIconUrl(BB)) && void 0 !== IB ? IB : null
      },
      zB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", GB.d, JB.f, JB.e],
      FB = BB => {
        const IB = zB.map((IB => TB.l.subscribe(IB, BB)));
        return () => {
          for (const BB of IB) TB.l.unsubscribe(BB)
        }
      }
  },
  8785: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => TB
    });
    const TB = "controllerOpenKeyboard",
      JB = "controllerKeyboardVisible"
  },
  8341: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      h: () => nB,
      i: () => kB,
      k: () => vB
    });
    var TB = ZB(20),
      JB = ZB(1711),
      oB = ZB(1814);
    const GB = new Map,
      vB = (BB, IB) => (GB.has(BB) && console.warn(`Gameplay blocker "${BB}" registered twice; the newer one replaces it.`), GB.set(BB, IB), () => {
        GB.get(BB) === IB && GB.delete(BB)
      }),
      kB = () => (0, oB.d)(document.activeElement),
      cB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [IB, ZB] of GB)
          if (!BB.includes(IB) && ZB()) return IB;
        return null
      },
      nB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === TB.d.get("gameState") && (!(0, JB.n)() && (!kB() && null === cB(BB)))
      }
  },
  8282: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => HB,
      B: () => aB,
      F: () => dB,
      J: () => yB,
      K: () => qB,
      M: () => cB,
      N: () => zB,
      R: () => FB,
      S: () => JB,
      U: () => TB,
      Y: () => QB,
      _: () => iB,
      bb: () => CB,
      d: () => MB,
      f: () => pB,
      h: () => nB,
      i: () => kB,
      l: () => vB,
      n: () => wB,
      r: () => UB,
      s: () => sB,
      t: () => oB,
      w: () => hB,
      y: () => WB
    });
    const TB = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      JB = TB.length,
      oB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(JB).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: BB
        }
      },
      GB = Object.fromEntries(TB.map(((BB, IB) => [BB, IB]))),
      vB = BB => GB[BB],
      kB = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const TB = Math.hypot(BB.x, BB.y);
        if (TB <= IB) return {
          x: 0,
          y: 0
        };
        const JB = Math.min(1, (TB - IB) / Math.max(1e-4, ZB - IB));
        return {
          x: BB.x / TB * JB,
          y: BB.y / TB * JB
        }
      },
      cB = ["exponential", "linear", "boost"],
      nB = (BB, IB) => {
        const ZB = Math.hypot(BB.x, BB.y);
        if (0 === ZB) return {
          x: 0,
          y: 0
        };
        const TB = ((BB, IB) => {
          const ZB = Math.max(0, Math.min(1, BB));
          return "linear" === IB ? ZB : ZB * ZB
        })(ZB, IB);
        return {
          x: BB.x / ZB * TB,
          y: BB.y / ZB * TB
        }
      },
      hB = .5,
      zB = .3,
      FB = .2,
      NB = vB("LT"),
      gB = vB("RT"),
      qB = BB => BB === NB || BB === gB,
      yB = (BB, IB) => {
        const ZB = vB(IB);
        return qB(ZB) ? BB[ZB] > .35 : BB[ZB] >= hB
      },
      UB = (BB, IB) => BB.map(((BB, ZB) => qB(ZB) ? IB[ZB] ? BB > .35 : BB >= .55 : BB >= hB)),
      WB = ["Up", "Down", "Left", "Right"],
      dB = BB => WB.includes(BB),
      CB = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(BB.x, BB.y) < IB ? null : Math.abs(BB.x) > Math.abs(BB.y) ? BB.x > 0 ? "Right" : "Left" : BB.y > 0 ? "Down" : "Up"
      },
      QB = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      sB = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      wB = ["default", "slow", "off"],
      OB = 800,
      YB = 250,
      iB = (BB, IB) => "off" === IB ? null : "slow" === IB ? {
        initialDelayMs: Math.max(BB.initialDelayMs, OB),
        intervalMs: Math.max(BB.intervalMs, YB)
      } : BB;
    class pB {
      constructor(BB) {
        this.readTiming = BB, this.sv = !1, this.timing = null, this.nextFireMs = 0
      }
      update(BB, IB) {
        return BB ? this.sv ? !!(this.timing && IB >= this.nextFireMs) && (this.nextFireMs = IB + this.timing.intervalMs, !0) : (this.sv = !0, this.timing = this.readTiming(), this.nextFireMs = IB + (null !== (ZB = null === (TB = this.timing) || void 0 === TB ? void 0 : TB.initialDelayMs) && void 0 !== ZB ? ZB : 0), !0) : (this.sv = !1, !1);
        var ZB, TB
      }
      reset() {
        this.sv = !1
      }
    }
    const aB = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      HB = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class MB {
      constructor(BB) {
        this.timer = BB, this.direction = null
      }
      update(BB, IB) {
        return BB !== this.direction && (this.timer.reset(), this.direction = BB), this.timer.update(null !== BB, IB) ? BB : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB
    });
    let TB = -1 / 0;
    const JB = () => {
        TB = performance.now()
      },
      oB = BB => performance.now() - TB < BB
  },
  8766: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      g: () => oB
    });
    var TB = ZB(8303),
      JB = ZB(8282);
    const oB = BB => (0, JB._)(BB, (0, TB.i)().buttonRepeat),
      GB = BB => new JB.f((() => oB(BB)))
  },
  8316: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      f: () => oB,
      j: () => vB
    });
    var TB = ZB(24),
      JB = ZB(8303);
    const oB = (BB, IB) => "OpenShop" === BB ? "shop" === IB : "OpenLobbyLeaderboard" !== BB || "leaderboard" === IB;
    let GB = !1;
    const vB = BB => {
        BB !== GB && (GB = BB, TB.l.Gq(JB.d, (0, JB.i)()))
      },
      kB = () => ((BB, IB) => "shop" === BB && IB ? "shop" : "leaderboard")((0, JB.i)().leaderboardButton, GB)
  },
  8312: (BB, IB, ZB) => {
    ZB.d(IB, {
      C: () => zB,
      F: () => FB,
      H: () => hB,
      J: () => dB,
      L: () => cB,
      M: () => yB,
      O: () => YB,
      Q: () => WB,
      T: () => gB,
      W: () => qB,
      _: () => NB,
      bb: () => UB,
      c: () => PB,
      d: () => rB,
      eb: () => HB,
      g: () => iB,
      ib: () => oB,
      j: () => GB,
      k: () => OB,
      lb: () => QB,
      o: () => sB,
      pb: () => RB,
      s: () => MB,
      sb: () => wB,
      u: () => jB,
      v: () => nB,
      w: () => kB,
      x: () => vB,
      z: () => CB
    });
    var TB = ZB(8297),
      JB = ZB(8282);
    const oB = {
        min: 25,
        max: 500,
        step: 5
      },
      GB = {
        min: 25,
        max: 100,
        step: 5
      },
      vB = {
        min: 0,
        max: .4,
        step: .01
      },
      kB = {
        min: 25,
        max: 300,
        step: 5
      },
      cB = {
        min: .5,
        max: 6,
        step: .1
      },
      nB = (BB, IB) => {
        if (!Number.isFinite(BB)) return IB.min;
        const ZB = IB.min + Math.round((BB - IB.min) / IB.step) * IB.step,
          TB = Math.min(IB.max, Math.max(IB.min, ZB));
        return Math.round(1e3 * TB) / 1e3
      },
      hB = BB => `${Math.round(BB)}%`,
      zB = BB => hB(100 * BB),
      FB = BB => `${BB.toFixed(1)}\xd7`,
      NB = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      gB = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      qB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      yB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      UB = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      WB = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      dB = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      CB = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      QB = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      sB = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      wB = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      OB = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      YB = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      iB = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      pB = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      aB = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      HB = TB.b.map((BB => {
        let {
          group: IB,
          actions: ZB
        } = BB;
        const TB = ZB.map((BB => ({
          kind: "action",
          action: BB
        })));
        return {
          titleKey: pB[IB],
          rows: "gameplay" === IB ? [...aB, ...TB] : TB
        }
      })),
      MB = JB.U.filter((BB => "Home" !== BB)),
      jB = 1e4;
    class PB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = BB, this.openButton = IB, this.accepts = ZB, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(BB, IB) {
        var ZB;
        this.updateIgnored(BB, IB);
        const TB = IB - (null !== (ZB = this.startMs) && void 0 !== ZB ? ZB : IB) >= 250;
        for (const JB of MB)
          if (JB !== this.cancelButton && TB && !this.ignoredUntilMs.has(JB) && BB.wasPressed(JB) && this.accepts(JB)) return {
            kind: "bind",
            button: JB
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (BB.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = IB
        }
        return null === this.cancelDownAtMs ? null : BB.isHeld(this.cancelButton) && IB - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : BB.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(BB) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (BB - this.cancelDownAtMs) / 700)
      }
      updateIgnored(BB, IB) {
        if (null === this.startMs) {
          this.startMs = IB;
          for (const IB of MB) BB.isDown(IB) && this.ignoredUntilMs.set(IB, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, IB + 250)
        }
        for (const [ZB, TB] of this.ignoredUntilMs) {
          const JB = BB.isDown(ZB);
          TB === 1 / 0 ? JB || ZB !== this.openButton ? JB || this.ignoredUntilMs.delete(ZB) : this.ignoredUntilMs.set(ZB, IB + 250) : IB >= TB ? this.ignoredUntilMs.delete(ZB) : JB && this.ignoredUntilMs.set(ZB, 1 / 0)
        }
      }
    }
    const RB = 6e3;
    class rB {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(BB, IB) {
        let {
          pressed: ZB,
          sv: TB
        } = BB;
        if (ZB) {
          const BB = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== BB && IB - BB < 1500 ? [...this.pressesAtMs, IB] : [IB], this.pressesAtMs.length >= 3) return 1
        }
        return TB ? (this.downAtMs ??= IB, Math.min(1, (IB - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  5186: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      f: () => GB
    });
    var TB = ZB(63);
    const JB = new WeakMap,
      oB = BB => {
        var IB;
        const ZB = BB.closest("[data-pad-slider]");
        return ZB && null !== (IB = JB.get(ZB)) && void 0 !== IB ? IB : null
      },
      GB = (BB, IB) => {
        const ZB = (0, TB.useRef)(IB);
        ZB.current = IB, (0, TB.useEffect)((() => {
          if (BB.current) return ((BB, IB) => (JB.set(BB, IB), () => {
            JB.get(BB) === IB && JB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              ZB.current.adjust(BB)
            },
            setFraction: BB => {
              ZB.current.setFraction(BB)
            },
            endDrag: () => {
              ZB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  8920: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      e: () => GB,
      g: () => oB,
      i: () => TB,
      l: () => vB,
      p: () => cB,
      t: () => nB
    });
    const TB = "controllerActionWheelOpen",
      JB = "controllerActionWheelAim",
      oB = "controllerActionWheelCommit",
      GB = "controllerActionWheelClose",
      vB = "controllerActionWheelPick";
    let kB = !1;
    const cB = () => kB,
      nB = BB => {
        kB = BB
      }
  },
  8917: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      h: () => JB
    });
    let TB = 0;
    const JB = () => {
        TB++
      },
      oB = () => TB
  },
  8835: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      d: () => JB,
      g: () => GB,
      j: () => oB,
      l: () => TB,
      n: () => cB
    });
    const TB = "controllerQuickChatWheelOpen",
      JB = "controllerQuickChatWheelAim",
      oB = "controllerQuickChatWheelCommit",
      GB = "controllerQuickChatWheelClose";
    let vB = !1;
    const kB = () => vB,
      cB = BB => {
        vB = BB
      }
  },
  8849: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      d: () => JB
    });
    var TB = ZB(24);
    const JB = "localBlockBroken";

    function oB() {
      return {
        onPlayerChangeBlock(BB, IB, ZB, oB, GB, vB) {
          "Air" === vB && TB.l.Gq(JB)
        }
      }
    }
  },
  8985: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      d: () => kB
    });
    var TB = ZB(20),
      JB = ZB(1382),
      oB = ZB(105);
    const GB = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function vB() {
      return (0, oB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const kB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, IB) {
        var ZB;
        if (!this.deps.enabled()) return;
        const TB = GB[BB],
          JB = null !== IB && void 0 !== IB ? IB : TB.pattern;
        if (null === JB) return void console.warn("No vibration pattern for", BB);
        const oB = this.deps.now();
        oB - this.lastAnyAt < 40 && TB.priority < this.playingPriority || oB - (null !== (ZB = this.lastAt.get(BB)) && void 0 !== ZB ? ZB : -1 / 0) < TB.minGapMs || oB < this.playingUntil && TB.priority < this.playingPriority || (this.lastAt.set(BB, oB), this.lastAnyAt = oB, this.playingUntil = oB + JB.reduce(((BB, IB) => BB + IB), 0), this.playingPriority = TB.priority, this.deps.vibrate(JB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => vB() && TB.d.get("isTouchScreen") && TB.d.get("clientEscMenuOptions").vibration && !(0, JB.e)()
    })
  },
  8843: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(1317);

    function JB(BB, IB) {
      var ZB, JB;
      try {
        const ZB = (0, TB.d)();
        if ("function" === typeof ZB) {
          const TB = new ZB(BB, IB);
          if (TB.type === BB) return TB
        }
      } catch {}
      const oB = document.createEvent("Event");
      return oB.initEvent(BB, null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.bubbles) && void 0 !== ZB && ZB, null !== (JB = null === IB || void 0 === IB ? void 0 : IB.cancelable) && void 0 !== JB && JB), oB
    }
  },
  8885: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(8890),
      JB = ZB(665),
      oB = ZB(140);

    function GB(BB) {
      var IB, ZB;
      if ((0, JB.L)(BB)) return !0;
      const GB = null !== (IB = null === (ZB = oB.siteUsedData[oB.siteUsed]) || void 0 === ZB ? void 0 : ZB.adConfig.showRewardedAds) && void 0 !== IB && IB;
      for (const JB in BB) {
        const IB = BB[JB];
        if (null !== IB && void 0 !== IB && IB.items)
          for (const BB in IB.items)
            if ((0, TB.o)(IB.items[BB], GB)) return !1
      }
      return !0
    }
  },
  8890: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return !BB.hidden && (IB || !BB.isRewardedAd)
    }

    function JB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function oB(BB, IB) {
      var ZB;
      if ("dropdown" === (null === (ZB = BB.userInput) || void 0 === ZB ? void 0 : ZB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const ZB of BB.userInput.dropdownOptions)
          if (JB(ZB) === IB) return "object" === typeof ZB ? ZB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", IB)
      }
      return BB.cost
    }

    function GB(BB, IB, ZB) {
      var TB;
      const JB = null !== (TB = ZB.excludedPlayers) && void 0 !== TB ? TB : [IB];
      return BB.filter((BB => !JB.includes(BB)))
    }
    ZB.d(IB, {
      e: () => oB,
      i: () => JB,
      l: () => GB,
      o: () => TB
    })
  },
  8927: () => {},
  8354: (BB, IB, ZB) => {
    var TB = {
      "./nintendo/A.svg": 8359,
      "./nintendo/B.svg": 8365,
      "./nintendo/Down.svg": 8369,
      "./nintendo/Home.svg": 8375,
      "./nintendo/LB.svg": 8384,
      "./nintendo/LS.svg": 8386,
      "./nintendo/LT.svg": 8394,
      "./nintendo/Left.svg": 8397,
      "./nintendo/LeftStick.svg": 8401,
      "./nintendo/Menu.svg": 8410,
      "./nintendo/RB.svg": 8413,
      "./nintendo/RS.svg": 8415,
      "./nintendo/RT.svg": 8424,
      "./nintendo/Right.svg": 8426,
      "./nintendo/RightStick.svg": 8433,
      "./nintendo/Up.svg": 8438,
      "./nintendo/View.svg": 8440,
      "./nintendo/X.svg": 8447,
      "./nintendo/Y.svg": 8456,
      "./playstation/A.svg": 8461,
      "./playstation/B.svg": 8463,
      "./playstation/Down.svg": 8467,
      "./playstation/Home.svg": 8475,
      "./playstation/LB.svg": 8478,
      "./playstation/LS.svg": 8480,
      "./playstation/LT.svg": 8486,
      "./playstation/Left.svg": 8492,
      "./playstation/LeftStick.svg": 8496,
      "./playstation/Menu.svg": 8505,
      "./playstation/RB.svg": 8510,
      "./playstation/RS.svg": 8519,
      "./playstation/RT.svg": 8527,
      "./playstation/Right.svg": 8532,
      "./playstation/RightStick.svg": 8541,
      "./playstation/Up.svg": 8549,
      "./playstation/View.svg": 8552,
      "./playstation/X.svg": 8556,
      "./playstation/Y.svg": 8563,
      "./steamdeck/A.svg": 8567,
      "./steamdeck/B.svg": 8571,
      "./steamdeck/Down.svg": 8580,
      "./steamdeck/Home.svg": 8589,
      "./steamdeck/LB.svg": 8597,
      "./steamdeck/LS.svg": 8604,
      "./steamdeck/LT.svg": 8610,
      "./steamdeck/Left.svg": 8618,
      "./steamdeck/LeftStick.svg": 8625,
      "./steamdeck/Menu.svg": 8627,
      "./steamdeck/RB.svg": 8634,
      "./steamdeck/RS.svg": 8637,
      "./steamdeck/RT.svg": 8643,
      "./steamdeck/Right.svg": 8646,
      "./steamdeck/RightStick.svg": 8648,
      "./steamdeck/Up.svg": 8657,
      "./steamdeck/View.svg": 8661,
      "./steamdeck/X.svg": 8663,
      "./steamdeck/Y.svg": 8668,
      "./xbox/A.svg": 8673,
      "./xbox/B.svg": 8676,
      "./xbox/Down.svg": 8682,
      "./xbox/Home.svg": 8689,
      "./xbox/LB.svg": 8695,
      "./xbox/LS.svg": 8703,
      "./xbox/LT.svg": 8709,
      "./xbox/Left.svg": 8715,
      "./xbox/LeftStick.svg": 8717,
      "./xbox/Menu.svg": 8719,
      "./xbox/RB.svg": 8728,
      "./xbox/RS.svg": 8730,
      "./xbox/RT.svg": 8735,
      "./xbox/Right.svg": 8739,
      "./xbox/RightStick.svg": 8741,
      "./xbox/Up.svg": 8747,
      "./xbox/View.svg": 8753,
      "./xbox/X.svg": 8755,
      "./xbox/Y.svg": 8758
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 8354
  },
  8359: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8365: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8369: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8375: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8384: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8386: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8394: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8397: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8401: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8410: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8413: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8415: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8424: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8426: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8433: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8438: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8440: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8447: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8456: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8461: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8463: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8467: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8475: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8478: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8480: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8486: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8492: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8496: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8505: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8510: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8519: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8527: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8532: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8541: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8549: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8552: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8556: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8563: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8567: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8571: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8580: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8589: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8597: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8604: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8610: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8618: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8625: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8627: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8634: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8637: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8643: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8646: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8648: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8657: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8661: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8663: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8668: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8673: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8676: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8682: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8689: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8695: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8703: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8709: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8715: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8717: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8719: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8728: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8730: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8735: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8739: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8741: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8747: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8753: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8755: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8758: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
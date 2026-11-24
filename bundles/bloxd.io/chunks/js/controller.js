export const id = 28;
export const ids = [28];
export const modules = {
  8903: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => aT,
      e: () => xT,
      i: () => dT
    });
    var WT = mT(63),
      zT = mT(4650),
      MT = mT(1225),
      gT = mT(1567),
      nT = mT(31),
      HT = mT(3524),
      kT = mT(2355),
      jT = mT(1336),
      lT = mT(2685),
      LT = mT(2046),
      pT = mT(2089),
      BT = mT(1288),
      ZT = mT(25),
      cT = mT(1752),
      vT = mT(1126),
      fT = mT.n(vT),
      qT = mT(8912),
      iT = mT(8918),
      bT = mT(8923),
      OT = mT(8847),
      eT = mT(8925),
      YT = (mT(8933), mT(1188));
    let JT = null;

    function xT() {
      return null !== JT
    }

    function dT() {
      return "pad" === JT
    }

    function wT() {
      return "inGame" === ZT.b.get("gameState") && !(0, cT.l)()
    }

    function tT(TT) {
      return (0, iT.y)(TT, jT.j, iT.i, iT.l, iT.o)
    }
    const aT = (0, WT.memo)((function() {
      const {
        t: TT
      } = (0, BT.z)(), {
        userContext: UT
      } = (0, MT.d)(), [mT, ZT] = (0, WT.useState)(null), [vT, xT] = (0, WT.useState)(null), dT = (0, WT.useRef)(null), aT = (0, WT.useCallback)((TT => {
        dT.current = TT, xT(TT)
      }), []), yT = (0, WT.useRef)(0), XT = (0, WT.useRef)(null), IT = (0, WT.useRef)({
        x: 0,
        y: 0
      }), [QT, sT] = (0, WT.useState)(0), FT = (0, WT.useMemo)((() => function(TT) {
        const UT = [];
        for (let WT = 0; WT < jT.j; WT++) {
          var mT;
          UT.push(null !== (mT = TT[WT]) && void 0 !== mT ? mT : null)
        }
        return UT
      }((0, lT.l)(UT.getPlayerCosmetics().emote))), [UT, QT]);
      (0, pT.e)("cosmeticsUpdated", (TT => {
        TT.some((TT => TT.local && "emote" === TT.wM)) && sT((TT => TT + 1))
      }));
      const PT = (0, WT.useRef)(!1),
        VT = (0, WT.useCallback)((function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === TT && (0, bT.h)(), PT.current = UT, IT.current = {
            x: 0,
            y: 0
          }, aT(null), ZT(TT)
        }), [aT]),
        uT = (0, WT.useCallback)((() => {
          ZT(null), aT(null), IT.current = {
            x: 0,
            y: 0
          }
        }), [aT]),
        CT = (0, WT.useCallback)((TT => {
          if (Date.now() < yT.current) return;
          const UT = (0, kT.h)(TT),
            mT = !!UT.holdUntilMove,
            WT = mT ? 600 : Math.ceil(1e3 * UT.animation.animation_length / kT.c) + 200;
          yT.current = Date.now() + WT, XT.current = TT, LT.gameBridge.send("playEmote", TT), LT.gameBridge.send("applyTemporaryThirdPerson", mT ? {} : {
            durationMs: WT
          })
        }), []);
      (0, gT.g)("requestToggleEmoteWheel", (() => {
        null === mT ? wT() && VT("click") : uT()
      })), (0, gT.g)("requestEmoteWheelHoldOpen", (() => {
        null === mT && wT() && VT((0, qT.e)() ? "hold" : "click")
      })), (0, gT.g)("requestEmoteWheelPadOpen", (TT => {
        null !== mT || !wT() || (0, OT.c)() || (0, eT.o)() || VT("pad", TT)
      })), (0, gT.g)("requestEmoteRepeatLast", (() => {
        if (null !== mT || !wT() || (0, OT.c)() || (0, eT.o)()) return;
        const TT = XT.current;
        null !== TT && FT.includes(TT) ? CT(TT) : VT("pad", !0)
      }));
      const rT = () => {
        const TT = dT.current,
          UT = null !== TT ? FT[TT] : null;
        null !== UT && "pad" === mT && Date.now() < yT.current || (uT(), null !== UT && CT(UT))
      };
      (0, gT.g)("emoteWheelPadAim", (TT => {
        if ("pad" !== mT) return;
        const UT = (0, iT.F)(TT, jT.j, dT.current);
        aT(null !== UT && null !== FT[UT] ? UT : null)
      })), (0, gT.g)("requestEmoteWheelPadCommit", (TT => {
        "pad" !== mT || TT && PT.current || rT()
      })), (0, gT.g)("appManagerUpdated|activeInputDevice", (TT => {
        null !== mT && "pad" === mT !== ("gamepad" === TT) && uT()
      })), (0, WT.useLayoutEffect)((() => (JT = mT, (0, HT.q)("emoteWheel", "pad" === mT), nT.j.EZ(HT.n), () => {
        JT = null, (0, HT.q)("emoteWheel", !1), nT.j.EZ(HT.n)
      })), [mT]), (0, gT.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === mT && rT()
      })), (0, gT.g)("requestEmoteWheelClose", (() => {
        null !== mT && uT()
      })), (0, gT.g)("appManagerUpdated|gameState", (TT => {
        "inGame" !== TT && uT()
      }));
      const KT = () => {
        (0, cT.l)() && uT()
      };
      if ((0, gT.g)("appManagerUpdated|openEverythingMenuName", KT), (0, gT.g)("appManagerUpdated|openInGameMenuName", KT), (0, gT.g)("pointerLockUpdate", (TT => {
          TT || "hold" !== mT || uT()
        })), (0, WT.useEffect)((() => {
          if (null === mT) return;
          const TT = TT => {
            "Escape" === TT.key && (TT.stopImmediatePropagation(), TT.preventDefault(), uT())
          };
          return document.addEventListener("keydown", TT, !0), () => {
            document.removeEventListener("keydown", TT, !0)
          }
        }), [mT, uT]), (0, zT.d)(!0, "click" === mT, "EmoteWheelOverlay"), (0, WT.useEffect)((() => {
          if ("hold" === mT) return LT.gameBridge.send("holdEmoteWheel", !0), () => {
            LT.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [mT]), (0, WT.useEffect)((() => {
          if ("hold" !== mT) return;
          const TT = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            UT = iT.u * TT,
            WT = iT.t * TT,
            zT = TT => {
              let mT = IT.current.x + TT.movementX,
                zT = IT.current.y + TT.movementY;
              const MT = Math.hypot(mT, zT);
              if (MT > UT) {
                const TT = UT / MT;
                mT *= TT, zT *= TT
              }
              IT.current = {
                x: mT,
                y: zT
              }, aT(function(TT, UT, mT, WT) {
                if (Math.hypot(TT, UT) < mT) return null;
                const zT = (0, iT.A)(TT, UT, jT.j);
                return null === WT[zT] ? null : zT
              }(mT, zT, WT, FT))
            };
          return document.addEventListener("mousemove", zT), () => {
            document.removeEventListener("mousemove", zT)
          }
        }), [mT, FT, aT]), null === mT) return null;
      const ST = "hold" === mT || "pad" === mT,
        GT = null !== vT ? FT[vT] : null,
        NT = null !== GT ? (0, kT.h)(GT).displayName : TT("emotes:pickEmote");
      return (0, YT.jsx)("div", {
        className: fT()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === mT
        }),
        onMouseDown: TT => {
          TT.target === TT.currentTarget && uT()
        },
        children: (0, YT.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * iT.u + "rem",
            height: 2 * iT.u + "rem"
          },
          children: [(0, YT.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${iT.p} ${iT.p}`,
            children: [FT.map(((UT, mT) => {
              const WT = null !== UT,
                zT = ST && mT === vT;
              return (0, YT.jsx)("path", {
                d: tT(mT),
                className: fT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: zT,
                  EmoteWheelWedgeDisabled: !WT
                }),
                onClick: TT => {
                  TT.stopPropagation(), null !== UT && (TT => {
                    uT(), CT(TT)
                  })(UT)
                },
                "aria-label": null !== UT ? (0, kT.h)(UT).displayName : TT("emotes:emptySlot")
              }, mT)
            })), (0, YT.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: iT.i,
              cy: iT.i,
              r: iT.o
            }), (0, YT.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: iT.i,
              cy: iT.i,
              r: iT.l
            }), ST && null !== vT && (0, YT.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: tT(vT)
            })]
          }), FT.map(((TT, UT) => {
            const mT = null !== TT,
              WT = ST && UT === vT,
              zT = (0, iT.D)(UT, jT.j),
              MT = iT.e * Math.cos(zT),
              gT = iT.e * Math.sin(zT);
            return (0, YT.jsx)("div", {
              className: fT()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: WT,
                EmoteWheelSlotIconDisabled: !mT
              }),
              style: {
                left: `calc(50% + ${MT}rem)`,
                top: `calc(50% + ${gT}rem)`,
                backgroundImage: mT ? `url(/textures/charSkins/previews/emote_${TT}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, UT)
          })), (0, YT.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: NT
          })]
        })
      })
    }))
  },
  9011: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => vT,
      h: () => iT
    });
    var WT = mT(63),
      zT = mT(31),
      MT = mT(2608),
      gT = mT(3511);
    const nT = 6,
      HT = 4;

    function kT(TT) {
      let {
        slotsLeft: UT,
        slotsRight: mT,
        width: WT,
        height: zT,
        zoneRight: MT,
        rowTop: gT,
        besideBottom: kT,
        obstacles: jT
      } = TT;
      const lT = Math.max(0, Math.floor(mT - UT - WT)),
        LT = null === MT ? 0 : Math.min(lT, Math.max(0, Math.ceil(MT + nT - UT))),
        pT = UT + LT - nT,
        BT = UT + LT + WT + nT,
        ZT = jT.filter((TT => TT.left < BT && TT.right > pT));
      let cT = kT;
      for (let nT = 0; nT <= ZT.length; nT++) {
        const TT = ZT.filter((TT => TT.top < cT + HT && TT.bottom > cT - zT - HT));
        if (0 === TT.length) break;
        cT = Math.min(...TT.map((TT => TT.top))) - HT
      }
      return {
        shift: LT,
        rise: cT === kT ? null : Math.ceil(gT - cT)
      }
    }

    function jT(TT) {
      return Array.from(TT.children).filter((TT => !TT.classList.contains("HotBarRow")))
    }

    function lT(TT) {
      return function(TT) {
        const UT = [],
          mT = (TT, WT) => {
            const zT = TT.getBoundingClientRect();
            if (zT.width > 0 && zT.height > 0) UT.push(TT);
            else if (WT < 2)
              for (const UT of Array.from(TT.children)) mT(UT, WT + 1)
          };
        for (const WT of TT) mT(WT, 0);
        return UT
      }(jT(TT).flatMap((TT => TT.classList.contains("AuraBarWrapper") ? [] : TT.classList.contains("BottomScreenStatBarList") ? Array.from(TT.children) : [TT])))
    }

    function LT(TT) {
      var UT;
      const mT = TT.getBoundingClientRect();
      if (0 === mT.width) return null;
      const WT = null === (UT = TT.parentElement) || void 0 === UT ? void 0 : UT.getBoundingClientRect();
      return WT && WT.width > 0 ? Math.min(mT.right, WT.left + WT.width * pT) : mT.right
    }
    const pT = .35,
      BT = new WeakMap,
      ZT = ".BottomScreenMessage, [role='status']",
      cT = new WeakMap;

    function vT(TT) {
      fT(TT) && fT(TT)
    }

    function fT(TT) {
      var UT, mT, WT, zT, MT, gT;
      const nT = TT.documentElement.classList;
      if (!nT.contains("TouchHotbar") || nT.contains("TouchHotbarKeysAbove") || nT.contains("HudMove-inventory") || nT.contains("HudLocked-inventory") || null === (UT = TT.defaultView) || void 0 === UT || null === (mT = UT.matchMedia) || void 0 === mT || !mT.call(UT, qT).matches) return !1;
      const jT = TT.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        pT = null === jT || void 0 === jT ? void 0 : jT.parentElement,
        vT = null === jT || void 0 === jT ? void 0 : jT.closest(".BottomMiddleElements"),
        fT = null === vT || void 0 === vT ? void 0 : vT.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!jT || !pT || !vT || !fT || vT.classList.contains("TouchInventoryOpen")) return !1;
      const iT = jT.getBoundingClientRect();
      if (0 === iT.width) return !1;
      const bT = TT.querySelector(".JoystickZone"),
        OT = fT.getBoundingClientRect(),
        eT = pT.getBoundingClientRect().top,
        YT = null === (WT = vT.querySelector(":scope > .AuraBarWrapper")) || void 0 === WT ? void 0 : WT.getBoundingClientRect(),
        JT = lT(vT),
        xT = {
          slotsLeft: OT.left,
          slotsRight: OT.right,
          width: iT.width,
          height: iT.height,
          zoneRight: bT ? LT(bT) : null,
          rowTop: eT,
          besideBottom: (YT && YT.height > 0 ? YT.top : eT) - HT,
          obstacles: JT.map((TT => TT.getBoundingClientRect()))
        },
        dT = kT({
          ...xT,
          obstacles: JT.filter((TT => !TT.matches(ZT))).map((TT => TT.getBoundingClientRect()))
        }),
        wT = TT.defaultView,
        tT = `${null===wT||void 0===wT?void 0:wT.innerWidth}x${null===wT||void 0===wT?void 0:wT.innerHeight}:${dT.shift}:${Math.round(iT.width)}:${Math.round(eT)}`,
        aT = cT.get(vT),
        yT = (null === aT || void 0 === aT ? void 0 : aT.at) === tT ? (XT = aT.rise, IT = dT.rise, null === XT ? IT : null === IT ? XT : Math.max(XT, IT)) : dT.rise;
      var XT, IT;
      const QT = kT({
          ...xT,
          besideBottom: null === yT ? xT.besideBottom : eT - yT
        }),
        sT = {
          shift: dT.shift,
          rise: null !== (zT = QT.rise) && void 0 !== zT ? zT : yT
        },
        FT = BT.get(vT);
      return (null !== (MT = null === FT || void 0 === FT ? void 0 : FT.shift) && void 0 !== MT ? MT : 0) === sT.shift && cT.set(vT, {
        at: tT,
        rise: yT
      }), (null === FT || void 0 === FT ? void 0 : FT.shift) !== sT.shift && vT.style.setProperty("--touch-shop-above-shift", `${sT.shift}px`), (null === FT || void 0 === FT ? void 0 : FT.rise) !== sT.rise && (vT.classList.toggle("ShopAboveUp", null !== sT.rise), null === sT.rise ? vT.style.removeProperty("--touch-shop-above-rise") : vT.style.setProperty("--touch-shop-above-rise", `${sT.rise}px`)), BT.set(vT, sT), (null !== (gT = null === FT || void 0 === FT ? void 0 : FT.shift) && void 0 !== gT ? gT : 0) !== sT.shift
    }
    const qT = "(orientation: landscape) and (max-height: 500px)";

    function iT(TT, UT, mT) {
      (0, WT.useLayoutEffect)((() => {
        var UT;
        const WT = null === (UT = TT.current) || void 0 === UT ? void 0 : UT.closest(".BottomMiddleElements");
        if (!WT || mT) return;
        const nT = new ResizeObserver((() => {
            pT(!1)
          })),
          HT = () => {
            nT.disconnect();
            const TT = document.querySelector(".JoystickZone");
            for (const UT of [TT, WT, WT.querySelector(".HotBarGameItemsContainer"), ...lT(WT)]) UT && nT.observe(UT)
          };
        let kT = null,
          LT = !1;
        const pT = TT => {
            LT ||= TT, kT ??= requestAnimationFrame((() => {
              kT = null, LT && (LT = !1, HT()), vT(document)
            }))
          },
          BT = new MutationObserver((() => {
            pT(!0)
          }));
        BT.observe(WT, {
          childList: !0
        });
        for (const TT of jT(WT)) BT.observe(TT, {
          childList: !0,
          subtree: !0
        });
        vT(document), HT();
        const ZT = () => {
            pT(!0)
          },
          cT = [(0, zT.k)(MT.d, ZT), (0, zT.k)(gT.c, ZT)];
        return () => {
          null !== kT && cancelAnimationFrame(kT), nT.disconnect(), BT.disconnect();
          for (const TT of cT) TT()
        }
      }), [TT, UT, mT])
    }
  },
  5090: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => BT,
      f: () => qT,
      j: () => ZT,
      l: () => fT
    });
    var WT = mT(63),
      zT = mT(5095),
      MT = mT(4468),
      gT = mT(1475),
      nT = mT(5116),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(1457),
      lT = mT(1863),
      LT = mT(5123),
      pT = mT(1188);

    function BT(TT) {
      let {
        label: UT,
        onClick: mT,
        checked: WT,
        circleInfoText: zT,
        className: nT,
        disabled: HT,
        note: jT
      } = TT;
      return (0, pT.jsxs)("div", {
        "aria-disabled": HT || void 0,
        "data-pad-focusable": !0,
        className: kT()("SettingBox CheckboxContainer", {
          [nT]: nT,
          SettingBoxDisabled: HT
        }),
        onClick: () => {
          HT || mT(!WT)
        },
        children: [(0, pT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, pT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, pT.jsx)(MT.d, {
              className: "SettingsCheckbox",
              checked: WT,
              disabled: HT,
              onChange: () => {}
            })
          }), (0, pT.jsxs)("div", {
            className: "CheckboxText",
            children: [UT, zT && (0, pT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, pT.jsx)(gT.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: zT
              })
            })]
          })]
        }), jT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: jT
        })]
      })
    }

    function ZT(TT) {
      let {
        name: UT,
        onChange: mT,
        min: zT,
        max: MT,
        step: nT,
        initValue: HT,
        circleInfoText: jT,
        format: lT,
        className: LT,
        padStep: BT,
        disabled: ZT = !1,
        selectableMax: cT,
        cappedNote: fT,
        onChangeComplete: qT
      } = TT;
      const [iT, bT] = (0, WT.useState)(HT), OT = (0, WT.useRef)(HT);
      (0, WT.useEffect)((() => {
        OT.current = HT, bT(HT)
      }), [HT]);
      const eT = void 0 !== cT && cT < MT,
        YT = eT ? {
          "--slider-selectable": (cT - zT) / (MT - zT)
        } : void 0;
      return (0, pT.jsxs)("div", {
        className: kT()("SettingBox SettingsSliderDiv", {
          [LT]: LT,
          SettingBoxDisabled: ZT,
          SliderCapped: eT
        }),
        style: YT,
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [`${UT}: ${lT?lT(iT):iT}`, jT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: jT
          })]
        }), (0, pT.jsx)("div", {
          className: "SliderDiv",
          children: (0, pT.jsx)(vT, {
            value: iT,
            min: zT,
            max: MT,
            step: nT,
            onChange: TT => {
              if (eT && TT >= cT && iT === cT) return;
              const UT = eT ? Math.min(TT, cT) : TT;
              OT.current = UT, bT(UT), mT(UT)
            },
            onChangeComplete: qT && (() => {
              qT(OT.current)
            }),
            format: lT,
            padStep: BT,
            disabled: ZT
          })
        }), eT && fT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: fT
        })]
      })
    }
    const cT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vT(TT) {
      var UT;
      let {
        value: mT,
        min: MT,
        max: gT,
        step: nT,
        onChange: HT,
        orientation: kT,
        reverse: jT,
        setIsChanging: lT,
        tooltip: BT,
        labels: ZT,
        handleLabel: vT,
        format: fT,
        onChangeStart: qT,
        onChangeComplete: iT,
        padStep: bT,
        disabled: OT = !1
      } = TT;
      const eT = (0, WT.useRef)(null),
        YT = (0, WT.useRef)(null);
      (0, WT.useLayoutEffect)((() => {
        var TT, UT, mT;
        const WT = null !== (TT = null === (UT = eT.current) || void 0 === UT ? void 0 : UT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === WT || void 0 === WT || WT.setAttribute("data-pad-slider", ""), null === WT || void 0 === WT || WT.setAttribute("data-pad-focusable", ""), null === WT || void 0 === WT || null === (mT = WT.querySelector(".rangeslider__handle")) || void 0 === mT || mT.setAttribute("data-pad-slider-handle", ""), YT.current = WT
      }), []), (0, WT.useLayoutEffect)((() => {
        var TT, UT;
        OT ? null === (TT = YT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (UT = YT.current) || void 0 === UT || UT.removeAttribute("aria-disabled")
      }), [OT]);
      const JT = (null !== (UT = String(nT).split(".")[1]) && void 0 !== UT ? UT : "").length,
        xT = TT => {
          const UT = Number((Math.round((TT - MT) / nT) * nT + MT).toFixed(JT));
          return Math.min(gT, Math.max(MT, UT))
        },
        dT = (0, WT.useRef)(iT);
      dT.current = iT, (0, WT.useEffect)((() => {
        const TT = eT.current;
        if (!TT) return;
        const UT = TT => {
          var UT;
          cT.has(TT.key) && (null === (UT = dT.current) || void 0 === UT || UT.call(dT))
        };
        return TT.addEventListener("keyup", UT), () => {
          TT.removeEventListener("keyup", UT)
        }
      }), []);
      const wT = (0, WT.useRef)(!1);
      return (0, LT.g)(YT, {
        adjust: TT => {
          if (OT) return;
          const UT = null !== bT && void 0 !== bT ? bT : Math.max(nT, Math.round((gT - MT) / 20 / nT) * nT),
            WT = xT(mT + TT * UT * (jT ? -1 : 1));
          WT !== mT && (null === qT || void 0 === qT || qT(), HT(WT), null === iT || void 0 === iT || iT())
        },
        setFraction: TT => {
          if (OT) return;
          const UT = xT(MT + (jT ? 1 - TT : TT) * (gT - MT));
          UT !== mT && (wT.current || (wT.current = !0, null === qT || void 0 === qT || qT()), HT(UT))
        },
        endDrag: () => {
          wT.current && (wT.current = !1, null === iT || void 0 === iT || iT())
        }
      }), (0, pT.jsx)("div", {
        ref: eT,
        style: {
          display: "contents"
        },
        children: (0, pT.jsx)(zT.d, {
          value: mT,
          min: MT,
          max: gT,
          step: nT,
          onChange: HT,
          orientation: kT,
          reverse: jT,
          tooltip: BT,
          labels: ZT,
          handleLabel: vT,
          format: fT,
          onChangeStart: () => {
            null === qT || void 0 === qT || qT(), null === lT || void 0 === lT || lT(!0)
          },
          onChangeComplete: () => {
            null === lT || void 0 === lT || lT(!1), null === iT || void 0 === iT || iT()
          }
        })
      })
    }
    async function fT() {
      const TT = jT.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await TT.getResult() && (0, lT.reloadBloxd)()
    }

    function qT(TT) {
      let {
        label: UT,
        options: mT,
        value: WT,
        onChange: zT,
        circleInfoText: MT
      } = TT;
      return (0, pT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [UT, MT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MT
          })]
        }), (0, pT.jsx)(nT.c, {
          ariaLabel: UT,
          options: mT,
          value: WT,
          onChange: zT
        })]
      })
    }
  },
  5116: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1188);

    function gT(TT) {
      let {
        options: UT,
        value: mT,
        onChange: WT,
        ariaLabel: gT,
        className: nT,
        reselectable: HT = !1,
        keepsFocus: kT = !1,
        padTabs: jT
      } = TT;
      const lT = void 0 !== jT;
      return (0, MT.jsx)("div", {
        className: zT()("SegmentedToggle", nT),
        role: "group",
        "aria-label": gT,
        "data-pad-tabs": jT,
        children: UT.map((TT => {
          const UT = TT.value === mT;
          return (0, MT.jsx)("button", {
            type: "button",
            "aria-pressed": UT,
            "data-pad-tab": lT || void 0,
            "data-pad-selected": lT && UT ? "true" : void 0,
            "data-pad-default-focus": lT && UT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: UT
            }),
            onMouseDown: kT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              UT && !HT || WT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  8874: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      g: () => MT
    });
    var WT = mT(2111);
    const zT = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      MT = TT => "string" === typeof TT.icon && "" !== TT.icon && "string" === typeof TT.keycode && zT.test(TT.keycode),
      gT = TT => "Space" === TT ? "_" : WT.j[TT]
  },
  8912: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(25);

    function zT() {
      return !WT.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8996: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => gT,
      E: () => cT,
      I: () => lT,
      J: () => HT,
      L: () => LT,
      N: () => kT,
      Q: () => BT,
      T: () => MT,
      e: () => zT,
      i: () => nT,
      m: () => WT,
      q: () => ZT,
      t: () => pT,
      x: () => jT
    });
    const WT = TT => ({
      left: TT.left,
      top: TT.top,
      right: TT.right,
      bottom: TT.bottom
    });

    function zT(TT) {
      return {
        x: (TT.left + TT.right) / 2,
        y: (TT.top + TT.bottom) / 2
      }
    }

    function MT(TT) {
      return 0 === TT.length ? null : TT.reduce(((TT, UT) => ({
        left: Math.min(TT.left, UT.left),
        top: Math.min(TT.top, UT.top),
        right: Math.max(TT.right, UT.right),
        bottom: Math.max(TT.bottom, UT.bottom)
      })))
    }

    function gT(TT, UT) {
      const mT = Math.max(0, (UT - (TT.right - TT.left)) / 2),
        WT = Math.max(0, (UT - (TT.bottom - TT.top)) / 2);
      return {
        left: TT.left - mT,
        top: TT.top - WT,
        right: TT.right + mT,
        bottom: TT.bottom + WT
      }
    }

    function nT(TT, UT) {
      return UT.x >= TT.left && UT.x <= TT.right && UT.y >= TT.top && UT.y <= TT.bottom
    }

    function HT(TT, UT, mT) {
      let WT = null,
        MT = 1 / 0;
      for (const {
          id: zT,
          box: gT
        }
        of UT) {
        const UT = (gT.right - gT.left) * (gT.bottom - gT.top);
        nT(gT, TT) && UT < MT && (MT = UT, WT = zT)
      }
      if (null !== WT) return WT;
      let HT = 1 / 0;
      for (const {
          id: kT,
          box: jT
        }
        of UT) {
        if (!nT(gT(jT, mT), TT)) continue;
        const UT = zT(jT),
          MT = Math.hypot(TT.x - UT.x, TT.y - UT.y);
        MT < HT && (HT = MT, WT = kT)
      }
      return WT
    }

    function kT(TT, UT, mT) {
      return {
        left: mT.left,
        top: mT.top,
        right: TT - mT.right,
        bottom: UT - mT.bottom
      }
    }

    function jT(TT, UT, mT, WT) {
      const zT = (TT, UT, mT) => Math.max(Math.min(UT, 0), Math.min(Math.max(mT, 0), TT));
      return {
        x: zT(UT, WT.left - TT.left, WT.right - TT.right),
        y: zT(mT, WT.top - TT.top, WT.bottom - TT.bottom)
      }
    }

    function lT(TT, UT, mT, WT, zT) {
      const MT = TT.dx * WT + UT,
        gT = TT.dy * zT + mT,
        nT = TT => Math.max(-1, Math.min(1, TT));
      return {
        dx: nT(MT / WT),
        dy: nT(gT / zT)
      }
    }

    function LT(TT, UT, mT, WT) {
      return UT <= 0 || mT <= 0 ? 1 : Math.max(.05, Math.min(1, TT / UT, WT / mT))
    }

    function pT(TT, UT, mT) {
      return Math.min(TT.right, UT.right) - Math.max(TT.left, UT.left) > mT && Math.min(TT.bottom, UT.bottom) - Math.max(TT.top, UT.top) > mT
    }

    function BT(TT, UT) {
      const mT = (TT, UT, mT, WT) => UT - TT > WT - mT ? mT - TT > UT - WT ? WT - UT : mT - TT : TT < mT ? mT - TT : UT > WT ? WT - UT : 0;
      return {
        x: mT(TT.left, TT.right, UT.left, UT.right),
        y: mT(TT.top, TT.bottom, UT.top, UT.bottom)
      }
    }

    function ZT(TT, UT, mT) {
      return pT(TT, {
        left: 0,
        top: 0,
        right: UT,
        bottom: mT
      }, 0)
    }

    function cT(TT, UT) {
      let {
        avoid: mT = null,
        bounds: WT = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, zT = 0, MT = 1 / 0;
      return TT.forEach(((TT, gT) => {
        const nT = UT.filter((UT => pT(TT, UT, 0))).length,
          HT = null !== WT && (TT.left < WT.left || TT.top < WT.top || TT.right > WT.right || TT.bottom > WT.bottom),
          kT = nT + (mT && pT(TT, mT, 0) ? 1e3 : 0) + (HT ? 1e6 : 0);
        kT < MT && (zT = gT, MT = kT)
      })), zT
    }
  },
  9003: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => MT,
      k: () => zT,
      n: () => gT,
      p: () => lT,
      s: () => jT,
      w: () => kT,
      x: () => HT
    });
    var WT = mT(2589);
    const zT = ["J", "C", "A", "P", "U", "X", "G"],
      MT = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function gT(TT) {
      return TT ? ["X"] : ["P", "X"]
    }
    const nT = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: WT.B,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function HT(TT, UT, mT) {
      const WT = TT.querySelector(".InGameUi .TouchComponentsButtons");
      if (!WT) return nT;
      const MT = {},
        gT = {};
      for (const nT of zT) {
        const TT = WT.querySelector(`.TouchSlot${nT} > .TouchKey`);
        if (TT) {
          var HT, kT;
          MT[nT] = TT.cloneNode(!0);
          const UT = (null !== (HT = null === (kT = TT.querySelector(".TouchKeyLabel")) || void 0 === kT ? void 0 : kT.textContent) && void 0 !== HT ? HT : "").split(/\s+/).filter((TT => !/[\d\xd7]/.test(TT))).join(" ");
          UT && (gT[nT] = UT)
        }
      }
      const jT = UT => {
          const mT = TT.querySelector(`.InGameUi ${UT}`);
          return null !== mT && !mT.classList.contains("Hidden")
        },
        lT = [...TT.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((TT => TT.cloneNode(!0)));
      return {
        faces: Object.keys(MT).length > 0 ? MT : null,
        names: gT,
        shop: jT(".TouchInventoryKey.ShopKey"),
        bag: jT(".TouchInventoryKey.BagKey"),
        sprint: jT(".TouchSprintHit"),
        items: lT.length > 0 ? lT : null,
        rowIcons: UT,
        pinnedIcons: mT
      }
    }

    function kT(TT, UT) {
      const mT = {};
      for (const WT of [...gT(UT), "G"]) {
        const UT = TT.names[WT];
        UT && (mT[MT[WT]] = UT)
      }
      return mT
    }

    function jT(TT, UT) {
      const {
        faces: mT
      } = TT;
      if (null === mT) return [];
      const WT = new Set(Object.keys(mT).map((TT => MT[TT])));
      return gT(UT).filter((TT => !WT.has(MT[TT])))
    }

    function lT(TT, UT) {
      TT.replaceChildren(...[...UT.childNodes].map((TT => TT.cloneNode(!0))))
    }
  },
  8918: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => lT,
      D: () => jT,
      E: () => LT,
      F: () => pT,
      e: () => MT,
      i: () => nT,
      l: () => kT,
      o: () => HT,
      p: () => gT,
      t: () => zT,
      u: () => WT,
      y: () => BT
    });
    const WT = 14,
      zT = 6,
      MT = (WT + zT) / 2,
      gT = 200,
      nT = gT / 2,
      HT = gT / 2 - 1,
      kT = zT / WT * (gT / 2),
      jT = (TT, UT) => -Math.PI / 2 + 2 * TT * Math.PI / UT,
      lT = (TT, UT, mT) => {
        const WT = 2 * Math.PI / mT;
        return (Math.round((Math.atan2(UT, TT) + Math.PI / 2) / WT) % mT + mT) % mT
      },
      LT = .5,
      pT = (TT, UT, mT) => Math.hypot(TT.x, TT.y) < LT ? mT : lT(TT.x, TT.y, UT),
      BT = (TT, UT, mT, WT, zT) => {
        const MT = Math.PI / UT,
          gT = jT(TT, UT),
          nT = gT - MT,
          HT = gT + MT,
          kT = (TT, UT) => `${mT+TT*Math.cos(UT)} ${mT+TT*Math.sin(UT)}`;
        return [`M ${kT(WT,nT)}`, `L ${kT(zT,nT)}`, `A ${zT} ${zT} 0 0 1 ${kT(zT,HT)}`, `L ${kT(WT,HT)}`, `A ${WT} ${WT} 0 0 0 ${kT(WT,nT)}`, "Z"].join(" ")
      }
  },
  8953: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(63),
      zT = mT(8894),
      MT = mT(2552);

    function gT() {
      const TT = (0, MT.f)("shopInfo"),
        [, UT] = (0, WT.useReducer)((TT => TT + 1), 0);
      return (0, MT.d)("shopInfo", UT), !(0, zT.d)(TT)
    }
  },
  8300: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT,
      h: () => LT,
      i: () => lT,
      m: () => kT,
      q: () => nT,
      r: () => WT,
      u: () => pT,
      w: () => BT
    });
    const WT = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      zT = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: WT
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      MT = {
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
      gT = ["pickBlock", "perspective"],
      nT = TT => gT.includes(TT) ? gT : [TT],
      HT = Object.fromEntries(zT.flatMap((TT => {
        let {
          group: UT,
          actions: mT
        } = TT;
        return mT.map((TT => [TT, UT]))
      }))),
      kT = TT => HT[TT],
      jT = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      lT = TT => {
        var UT;
        return [kT(TT), ...null !== (UT = jT[TT]) && void 0 !== UT ? UT : []]
      },
      LT = new Set(["menu", "inventory", "keyboard"]),
      pT = {
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
      BT = new Set(["forward", "backward", "left", "right"])
  },
  8295: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => YT,
      D: () => qT,
      F: () => xT,
      G: () => jT,
      J: () => JT,
      M: () => tT,
      e: () => fT,
      h: () => bT,
      i: () => LT,
      m: () => pT,
      q: () => yT,
      r: () => wT,
      t: () => dT,
      u: () => iT,
      y: () => aT
    });
    var WT = mT(8300),
      zT = mT(8305),
      MT = mT(8282),
      gT = mT(8325);
    const nT = TT => "pickBlock" === TT ? "perspective" : TT,
      HT = (TT, UT) => {
        var mT;
        const zT = nT(UT);
        return null !== (mT = TT[zT]) && void 0 !== mT ? mT : WT.g[zT]
      },
      kT = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((TT => {
        let [UT, mT] = TT;
        return [
          [UT, mT],
          [mT, UT]
        ]
      }))),
      jT = (TT, UT) => null !== TT && void 0 !== TT ? TT : "nintendo" === UT,
      lT = TT => jT((0, zT.k)().swapConfirmBack, (0, zT.l)()) && kT.get(TT) || TT,
      LT = TT => HT((0, zT.k)().bindings, lT(TT)),
      pT = TT => WT.g[lT(TT)],
      BT = Object.keys(WT.g),
      ZT = TT => "gameplay" === (0, WT.m)(TT) ? ["gameplay"] : (0, WT.i)(TT),
      cT = (TT, UT) => {
        const mT = ZT(UT);
        return ZT(TT).some((TT => mT.includes(TT)))
      },
      vT = (TT, UT, mT) => {
        const zT = HT(TT, UT),
          gT = new Set((0, WT.q)(UT)),
          kT = [...gT];
        for (let WT = kT.pop(); WT; WT = kT.pop())
          for (const UT of BT) {
            const MT = HT(TT, UT);
            gT.has(UT) || MT !== mT && MT !== zT || !cT(WT, UT) || (gT.add(UT), kT.push(UT))
          }
        const jT = {
          ...TT
        };
        for (const lT of gT) {
          const UT = HT(TT, lT) === zT ? mT : zT,
            gT = (0, WT.i)(lT).some((TT => WT.h.has(TT)));
          if ((0, MT.D)(UT) && gT) return null;
          jT[nT(lT)] = UT
        }
        for (const MT of Object.keys(jT)) jT[MT] === WT.g[MT] && delete jT[MT];
        return jT
      },
      fT = (TT, UT) => null !== vT((0, zT.k)().bindings, lT(TT), UT),
      qT = (TT, UT) => {
        if (LT(TT) === UT) return !0;
        const mT = vT((0, zT.k)().bindings, lT(TT), UT);
        return !!mT && ((0, zT.m)({
          bindings: mT
        }), !0)
      },
      iT = (TT, UT) => {
        const mT = (0, WT.q)(UT);
        return BT.filter((UT => nT(UT) === UT && !mT.includes(UT) && HT(TT, lT(UT)) !== LT(UT)))
      },
      bT = ["southpaw", "triggersSwapped"],
      OT = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      eT = TT => Object.keys(OT[TT]),
      YT = (TT, UT) => "southpaw" === TT ? UT.swapSticks : eT(TT).every((mT => HT(UT.bindings, mT) === OT[TT][mT])),
      JT = (TT, UT) => {
        const mT = (0, zT.k)();
        let MT = mT.bindings;
        for (const zT of eT(TT)) {
          const mT = UT ? OT[TT][zT] : WT.g[zT];
          if (MT = vT(MT, zT, mT), !MT) return !1
        }
        return (0, zT.m)({
          swapSticks: "southpaw" === TT ? UT : mT.swapSticks,
          bindings: MT
        }), !0
      },
      xT = () => {
        (0, zT.m)({
          swapSticks: !1,
          bindings: {}
        })
      },
      dT = () => (0, zT.k)().swapSticks ? "RightStick" : "LeftStick",
      wT = () => (0, zT.k)().swapSticks ? "LeftStick" : "RightStick",
      tT = TT => (0, zT.k)().swapSticks && (0, MT.D)(TT),
      aT = TT => tT(TT) ? dT() : wT(),
      yT = TT => {
        if (WT.w.has(TT)) return dT();
        const UT = WT.u[TT];
        return UT && ("leaderboard" !== UT || (0, gT.e)(TT, (0, gT.d)())) ? LT(UT) : null
      }
  },
  8268: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ControllerCategory: () => On,
      ControllerGlyph: () => ez,
      ControllerRoot: () => ig,
      PadLobbyShortcuts: () => Fg,
      PadSneakChip: () => dg,
      PadTooltip: () => tg,
      attachPressToContinue: () => Gg,
      getBoundButton: () => jT.i,
      getControllerSettings: () => LT.k,
      getGlyphForNoaAction: () => jT.q,
      getInventoryCursorState: () => Yn,
      getMenuShortcutButton: () => Gm,
      getPadGlyphIconName: () => Yg,
      getPadGlyphIconUrl: () => Jg,
      getPadRepeatTiming: () => ZT.f,
      handOverPadFocus: () => xn,
      hasActivePad: () => en,
      isPadSteppingSlots: () => Jn
    });
    const WT = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var zT = mT(1288),
      MT = mT(1526),
      gT = mT(8277),
      nT = mT(85),
      HT = mT(25),
      kT = mT(31),
      jT = mT(8295),
      lT = mT(8331),
      LT = mT(8305),
      pT = mT(8338),
      BT = mT(8282),
      ZT = mT(8790),
      cT = mT(8793),
      vT = mT(1783);
    const fT = (TT, UT, mT) => Math.max(UT, Math.min(mT, TT)),
      qT = TT => Math.min(TT.width, TT.height) / 720,
      iT = TT => Math.max(.15, TT);
    class bT {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(TT, UT) {
        const mT = Math.hypot(TT.x, TT.y) >= (TT => Math.max(.3, TT))(UT);
        return this.locked ? (this.locked = mT, !1) : mT
      }
    }
    const OT = (TT, UT) => {
        const mT = fT(UT.dtMs, 0, 100),
          WT = mT / 1e3,
          zT = qT(UT.viewport) * (UT.cursorSpeedPercent / 100),
          MT = (0, BT.j)(UT.stick, iT(UT.moveDeadzone)),
          gT = Math.hypot(MT.x, MT.y),
          nT = ((TT, UT, mT) => {
            if (UT < .3) return 0;
            const WT = mT / 350;
            return UT >= .85 ? Math.min(1, TT + WT) : Math.max(0, TT - WT)
          })(TT.speedRamp, gT, mT);
        let HT = TT.x,
          kT = TT.y;
        if (gT > 0) {
          const TT = .45 + .55 * nT,
            mT = UT.context.overInteractive ? .45 : 1,
            jT = 1400 * (TT => {
              const UT = fT(TT, 0, 1);
              return .3 * UT + .7 * UT * UT
            })(gT) * zT * TT * mT;
          HT += MT.x / gT * jT * WT, kT += MT.y / gT * jT * WT
        }
        const jT = Math.hypot(UT.dpad.x, UT.dpad.y);
        if (jT > 0) {
          const TT = 500 * zT;
          HT += UT.dpad.x / jT * TT * WT, kT += UT.dpad.y / jT * TT * WT
        }
        const lT = UT.context.magnetTarget;
        if (lT && gT < .3 && 0 === jT) {
          const TT = ((TT, UT, mT, WT, zT) => {
            const MT = UT.x - TT.x,
              gT = UT.y - TT.y,
              nT = Math.hypot(MT, gT);
            if (0 === nT) return {
              x: 0,
              y: 0
            };
            const HT = Math.min(nT, zT * (1 - WT / .3));
            let kT = MT / nT * HT,
              jT = gT / nT * HT;
            if (WT > 0) {
              const TT = mT.x / WT,
                UT = mT.y / WT,
                zT = kT * TT + jT * UT;
              zT < 0 && (kT -= zT * TT, jT -= zT * UT)
            }
            return {
              x: kT,
              y: jT
            }
          })({
            x: HT,
            y: kT
          }, lT, MT, gT, 120 * qT(UT.viewport) * WT);
          HT += TT.x, kT += TT.y
        }
        return {
          x: fT(HT, 0, Math.max(0, UT.viewport.width - 1)),
          y: fT(kT, 0, Math.max(0, UT.viewport.height - 1)),
          speedRamp: nT
        }
      },
      eT = TT => {
        const UT = (0, BT.j)(TT, .2);
        return 0 !== UT.x || 0 !== UT.y
      },
      YT = (TT, UT) => {
        const mT = (0, BT.j)(TT, .2),
          WT = Math.hypot(mT.x, mT.y);
        if (0 === WT) return {
          x: 0,
          y: 0
        };
        const zT = WT * WT * 1600,
          MT = fT(UT, 0, 100) / 1e3;
        return {
          x: mT.x / WT * zT * MT,
          y: mT.y / WT * zT * MT
        }
      },
      JT = (TT, UT) => "y" === UT ? TT.scrollHeight > TT.clientHeight + 1 : TT.scrollWidth > TT.clientWidth + 1,
      xT = (TT, UT) => {
        if (!JT(TT, UT)) return !1;
        const mT = getComputedStyle(TT),
          WT = "y" === UT ? mT.overflowY : mT.overflowX;
        return "auto" === WT || "scroll" === WT
      },
      dT = (TT, UT, mT) => {
        for (let MT = TT instanceof HTMLElement ? TT : null !== (WT = null === TT || void 0 === TT ? void 0 : TT.parentElement) && void 0 !== WT ? WT : null; MT; MT = MT.parentElement) {
          var WT;
          if (xT(MT, UT)) return MT;
          if (MT === mT) return null
        }
        if (mT) return null;
        const zT = document.scrollingElement;
        return zT instanceof HTMLElement && JT(zT, UT) ? zT : null
      },
      wT = new WeakMap,
      tT = (TT, UT) => {
        const mT = performance.now(),
          WT = wT.get(TT);
        if (WT && WT.axis === UT && mT - WT.atMs < 500 && (!WT.container || WT.container.isConnected)) return WT.container;
        const zT = aT(TT, UT);
        return wT.set(TT, {
          axis: UT,
          atMs: mT,
          container: zT
        }), zT
      },
      aT = (TT, UT) => {
        let mT = xT(TT, UT) ? TT : null,
          WT = mT ? mT.clientWidth * mT.clientHeight : 0;
        for (const zT of TT.querySelectorAll("*")) {
          const TT = zT.clientWidth * zT.clientHeight;
          TT > WT && xT(zT, UT) && (mT = zT, WT = TT)
        }
        return mT
      },
      yT = (TT, UT, mT) => "y" === UT ? mT < 0 ? TT.scrollTop > 0 : TT.scrollTop + TT.clientHeight < TT.scrollHeight - 1 : mT < 0 ? TT.scrollLeft > 0 : TT.scrollLeft + TT.clientWidth < TT.scrollWidth - 1,
      XT = (TT, UT, mT) => {
        "y" === UT ? TT.scrollBy({
          top: mT,
          behavior: "instant"
        }) : TT.scrollBy({
          left: mT,
          behavior: "instant"
        })
      },
      IT = TT => {
        if (!TT || TT === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const UT = TT.getBoundingClientRect(),
          mT = Math.max(0, UT.left),
          WT = Math.max(0, UT.top);
        return new DOMRect(mT, WT, Math.min(window.innerWidth, UT.right) - mT, Math.min(window.innerHeight, UT.bottom) - WT)
      },
      QT = (TT, UT) => TT.left < UT.right && UT.left < TT.right && TT.top < UT.bottom && UT.top < TT.bottom;
    var sT = mT(63),
      FT = mT(1126),
      PT = mT.n(FT),
      VT = mT(1188);
    let uT = 0,
      CT = !1;
    class rT {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(TT) {
        this.element = TT, this.shownKey = "", this.gap = null
      }
      show(TT) {
        const UT = this.element;
        if (!UT) return;
        const mT = TT ? this.keepOnScreen(UT, TT) : null,
          WT = mT ? `${mT.left},${mT.top},${mT.width},${mT.height}` : "";
        if (WT === this.shownKey) return;
        const zT = "" === this.shownKey;
        this.shownKey = WT, UT.classList.toggle("Visible", null !== mT), mT && (UT.classList.toggle("Snap", zT), UT.style.width = `${mT.width}px`, UT.style.height = `${mT.height}px`, UT.style.transform = `translate(${mT.left}px, ${mT.top}px)`, zT && (UT.offsetWidth, UT.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(TT, UT) {
        var mT;
        const WT = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!CT){CT=!0;const TT=document.createElement("div");TT.setAttribute("aria-hidden","true"),TT.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(TT),new ResizeObserver((()=>{uT++})).observe(TT)}return String(uT)})()}`;
        (null === (mT = this.gap) || void 0 === mT ? void 0 : mT.key) !== WT && (this.gap = {
          px: parseFloat(getComputedStyle(TT).paddingLeft) || 0,
          key: WT
        });
        const zT = this.gap.px + 2,
          MT = Math.max(UT.left, zT),
          gT = Math.max(UT.top, zT),
          nT = Math.min(UT.left + UT.width, window.innerWidth - zT),
          HT = Math.min(UT.top + UT.height, window.innerHeight - zT);
        return nT <= MT || HT <= gT ? UT : {
          left: MT,
          top: gT,
          width: nT - MT,
          height: HT - gT
        }
      }
    }
    const KT = TT => {
      let {
        placer: UT,
        className: mT
      } = TT;
      const WT = (0, sT.useCallback)((TT => {
        UT.setElement(TT)
      }), [UT]);
      return (0, VT.jsx)("div", {
        ref: WT,
        className: PT()("PadReticle", mT),
        "aria-hidden": !0
      })
    };
    var ST = mT(8799);
    const GT = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const NT = new class {
      constructor() {
        this.state = GT, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(TT) {
        if (UT = this.state, mT = TT, (UT.visible || mT.visible) && (UT.visible !== mT.visible || UT.x !== mT.x || UT.y !== mT.y || UT.pressed !== mT.pressed)) {
          var UT, mT;
          this.state = TT;
          for (const UT of this.listeners) UT(TT)
        }
      }
      hide() {
        this.set(GT)
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    };
    var ET = mT(8812);
    const hT = (TT, UT) => {
        let {
          kind: mT,
          holding: WT,
          hasPress: zT,
          hasBack: MT,
          slotHasItem: gT
        } = UT;
        switch (TT) {
          case "primary":
            return "slot" === mT ? "slotPrimary" : "recipe" === mT || "button" === mT ? zT ? "pressPrimary" : "click" : "textField" === mT ? "openKeyboard" : null;
          case "secondary":
            return "slot" === mT ? "slotSecondary" : "button" !== mT && "recipe" !== mT || !zT ? null : "pressSecondary";
          case "quickMove":
            return "slot" === mT && gT ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === mT && gT && !WT ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return WT ? "cancel" : MT ? "pressBack" : "close"
        }
      },
      DT = TT => {
        const UT = [];
        if (TT.hotbarPicking) return UT.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), UT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), UT;
        if (TT.holding) "slot" === TT.kind ? (UT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), UT.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === TT.kind && UT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), UT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), UT.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), TT.openButtonCloses && UT.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var mT;
          "slot" === TT.kind && TT.slotHasItem ? (UT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), UT.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), UT.push({
            actions: ["inventoryQuickMove"],
            labelKey: TT.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), UT.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), UT.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== TT.kind && "recipe" !== TT.kind || !TT.pressHints ? "button" === TT.kind || "recipe" === TT.kind ? UT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === TT.kind && UT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (TT.pressHints.primary && UT.push({
            actions: ["inventoryPrimary"],
            labelKey: TT.pressHints.primary
          }), TT.pressHints.secondary && UT.push({
            actions: ["inventorySecondary"],
            labelKey: TT.pressHints.secondary
          }));
          const WT = null === (mT = TT.pressHints) || void 0 === mT ? void 0 : mT.back;
          WT && UT.push({
            actions: ["inventoryClose"],
            labelKey: WT
          });
          const zT = [];
          TT.openButtonCloses && zT.push("inventory"), WT || zT.push("inventoryClose"), zT.length > 0 && UT.push({
            actions: zT,
            labelKey: "inventoryClose"
          })
        }
        return UT.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), TT.hasCategories ? UT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : TT.hasList && UT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), UT
      };
    var oT = mT(8817),
      AT = mT(8815);
    class RT {
      constructor(TT) {
        this.probes = TT, this.byContainer = new Map, this.byParent = new Map
      }
      find(TT, UT) {
        const mT = dT(TT, "y", UT);
        if (!mT) return null;
        let WT = this.byContainer.get(mT);
        return WT || (this.probes.push({
          element: mT,
          rect: WU(mT.getBoundingClientRect())
        }), WT = {
          container: mT,
          box: IT(mT),
          group: mU(mT)
        }, this.byContainer.set(mT, WT)), WT
      }
      findForParent(TT, UT) {
        let mT = this.byParent.get(TT);
        return void 0 === mT && (mT = this.find(TT, UT), this.byParent.set(TT, mT)), mT
      }
    }
    const TU = new WeakMap;
    let UU = 0;
    const mU = TT => {
        let UT = TU.get(TT);
        return UT || (UT = "el:" + UU++, TU.set(TT, UT)), UT
      },
      WU = TT => ({
        left: TT.left,
        top: TT.top,
        width: TT.width,
        height: TT.height
      }),
      zU = TT => TT.width > 0 && TT.height > 0,
      MU = (TT, UT) => zU(TT) && TT.left + TT.width > 0 && TT.top + TT.height > 0 && TT.left < UT.width && TT.top < UT.height,
      gU = (TT, UT, mT) => {
        const WT = TT.top + TT.height / 2;
        return MU(TT, UT) && (!mT || WT >= mT.top && WT <= mT.bottom)
      },
      nU = TT => ({
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }),
      HU = (TT, UT, mT) => TT < 0 ? mT >= 0 ? 0 : UT - 1 : ((TT + mT) % UT + UT) % UT,
      kU = TT => "Left" === TT || "Right" === TT,
      jU = (TT, UT, mT) => {
        const WT = kU(mT),
          zT = WT ? TT.top : TT.left,
          MT = WT ? TT.height : TT.width,
          gT = WT ? UT.top : UT.left,
          nT = WT ? UT.height : UT.width,
          HT = Math.max(0, Math.max(gT - (zT + MT), zT - (gT + nT)));
        return MT > 1.5 * nT ? {
          gap: HT,
          offset: Math.max(0, gT - zT) + .1 * Math.max(0, zT - gT)
        } : {
          gap: HT,
          offset: Math.abs(gT + nT / 2 - (zT + MT / 2))
        }
      },
      lU = (TT, UT, mT) => {
        const WT = ((TT, UT, mT) => {
          const WT = nU(TT),
            zT = nU(UT),
            MT = kU(mT) ? Math.min(TT.width, UT.width) / 4 : Math.min(TT.height, UT.height) / 4;
          switch (mT) {
            case "Right":
              return zT.x - WT.x >= MT ? Math.max(0, UT.left - (TT.left + TT.width)) : null;
            case "Left":
              return WT.x - zT.x >= MT ? Math.max(0, TT.left - (UT.left + UT.width)) : null;
            case "Down":
              return zT.y - WT.y >= MT ? Math.max(0, UT.top - (TT.top + TT.height)) : null;
            case "Up":
              return WT.y - zT.y >= MT ? Math.max(0, TT.top - (UT.top + UT.height)) : null
          }
        })(TT, UT, mT);
        if (null === WT) return null;
        const zT = jU(TT, UT, mT);
        return WT + 3 * zT.gap + .5 * zT.offset
      },
      LU = (TT, UT) => UT.visible || null !== UT.scrollGroup && UT.scrollGroup === TT.scrollGroup,
      pU = (TT, UT, mT, WT) => {
        let zT = null,
          MT = 1 / 0;
        for (const gT of UT) {
          if (gT.key === TT.key || !LU(TT, gT) || !WT(gT)) continue;
          const UT = lU(TT.rect, gT.rect, mT);
          null !== UT && UT < MT && (zT = gT, MT = UT)
        }
        return zT
      },
      BU = (TT, UT, mT) => {
        const WT = pU(TT, UT, mT, (() => !0));
        if (!WT || kU(mT) || null === TT.scrollGroup || WT.scrollGroup === TT.scrollGroup) return WT;
        const zT = pU(TT, UT, mT, (UT => 0 === jU(TT.rect, UT.rect, mT).gap));
        return null !== zT && void 0 !== zT ? zT : WT
      },
      ZU = (TT, UT, mT) => {
        let WT = null,
          zT = 1 / 0;
        for (const MT of UT) {
          if (!MT.visible || mT && !mT(MT)) continue;
          const UT = nU(MT.rect),
            gT = Math.hypot(UT.x - TT.x, UT.y - TT.y);
          gT < zT && (WT = MT, zT = gT)
        }
        return WT
      },
      cU = TT => {
        const {
          rect: UT,
          clip: mT
        } = TT;
        if (!mT) return UT;
        const WT = Math.max(UT.left, mT.left),
          zT = Math.max(UT.top, mT.top);
        return {
          left: WT,
          top: zT,
          width: Math.min(UT.left + UT.width, mT.left + mT.width) - WT,
          height: Math.min(UT.top + UT.height, mT.top + mT.height) - zT
        }
      },
      vU = (TT, UT) => UT.x >= TT.left && UT.x < TT.left + TT.width && UT.y >= TT.top && UT.y < TT.top + TT.height,
      fU = (TT, UT) => {
        let mT = null,
          WT = 1 / 0;
        for (const zT of UT) {
          const UT = cU(zT);
          (zT.visible || zT.clip) && vU(UT, TT) && (UT.width * UT.height < WT && (mT = zT, WT = UT.width * UT.height))
        }
        return mT
      },
      qU = TT => {
        let UT = null;
        for (const mT of TT) {
          if (!mT.visible) continue;
          if (!UT) {
            UT = mT;
            continue
          }
          const TT = Math.min(UT.rect.height, mT.rect.height) / 2,
            WT = mT.rect.top - UT.rect.top;
          (WT < -TT || Math.abs(WT) <= TT && mT.rect.left < UT.rect.left) && (UT = mT)
        }
        return UT
      },
      iU = (TT, UT, mT, WT, zT) => {
        const MT = zT % UT,
          gT = Math.floor(zT / UT);
        return {
          left: TT.left + MT * mT,
          top: TT.top + gT * WT,
          width: TT.width,
          height: TT.height
        }
      },
      bU = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      OU = ".LazyLoadedItemWrapper",
      eU = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      YU = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      JU = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      xU = TT => TT.hasAttribute("data-inven-idx") ? "slot" : TT.hasAttribute("data-recipe-key") ? "recipe" : TT.hasAttribute("data-craft-ingredient") || (0, AT.t)(TT) ? "info" : (0, ST.J)(TT) ? "textField" : "button",
      dU = (TT, UT) => "slot" === UT ? Number(TT.getAttribute("data-inven-idx")) : null,
      wU = TT => TT.matches(OU) ? TT.querySelector(eU) : TT,
      tU = TT => {
        var UT, mT;
        return {
          element: TT,
          recipe: null !== (UT = TT && (null === (mT = wU(TT)) || void 0 === mT ? void 0 : mT.getAttribute("data-recipe-key"))) && void 0 !== UT ? UT : null
        }
      },
      aU = TT => {
        const UT = wU(TT);
        if (!UT) return {
          kind: "pending",
          idx: null
        };
        const mT = xU(UT);
        return {
          kind: mT,
          idx: dU(UT, mT)
        }
      },
      yU = TT => {
        const UT = [];
        for (const [mT, WT] of YU) {
          TT.matches(WT) && UT.push([mT, TT]);
          for (const zT of TT.querySelectorAll(WT)) UT.push([mT, zT])
        }
        return UT
      },
      XU = (TT, UT) => {
        for (const [mT, WT] of TT)
          if (WT.contains(UT)) return mT;
        return "other"
      },
      IU = (TT, UT, mT, WT, zT, MT, gT, nT) => {
        var HT;
        const kT = TT.children,
          jT = WU(kT[0].getBoundingClientRect()),
          lT = [{
            element: kT[0],
            rect: jT
          }];
        if (MT.push(lT[0]), 0 === jT.width || 0 === jT.height) return;
        let LT = 1;
        for (; LT < kT.length && Math.abs(kT[LT].getBoundingClientRect().top - jT.top) < 1;) LT++;
        const pT = TT => {
            const UT = {
              element: kT[TT],
              rect: WU(kT[TT].getBoundingClientRect())
            };
            return MT.push(UT), lT.push(UT), UT.rect
          },
          BT = LT > 1 ? pT(1).left - jT.left : jT.width,
          ZT = kT.length > LT ? pT(LT).top - jT.top : jT.height,
          cT = gT.find(TT, UT);
        let vT = null;
        if (cT) {
          var fT;
          const {
            container: TT,
            box: UT
          } = cT;
          vT = null !== (fT = nT.get(TT)) && void 0 !== fT ? fT : null, vT || (vT = {
            top: TT.scrollTop,
            left: TT.scrollLeft,
            box: UT,
            viewport: WT,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, nT.set(TT, vT)), vT.probes.push(...lT)
        }
        const qT = zT.length;
        for (let eT = 0; eT < kT.length; eT++) {
          var iT, bT, OT;
          const TT = kT[eT],
            UT = iU(jT, LT, BT, ZT, eT),
            MT = TT.firstElementChild ? TT.querySelector(eU) : null,
            gT = MT ? xU(MT) : "pending";
          zT.push({
            key: mU(TT),
            rect: UT,
            panel: mT,
            scrollGroup: null !== (iT = null === cT || void 0 === cT ? void 0 : cT.group) && void 0 !== iT ? iT : null,
            visible: gU(UT, WT, null === cT || void 0 === cT ? void 0 : cT.box),
            clip: null !== (bT = null === cT || void 0 === cT ? void 0 : cT.box) && void 0 !== bT ? bT : null,
            element: TT,
            kind: gT,
            idx: MT ? dU(MT, gT) : null,
            scrollContainer: null !== (OT = null === cT || void 0 === cT ? void 0 : cT.container) && void 0 !== OT ? OT : null
          })
        }
        null === (HT = vT) || void 0 === HT || HT.targets.push(...zT.slice(qT))
      },
      QU = TT => TT instanceof Element && null !== TT.closest(OU),
      sU = TT => null !== TT.scrollContainer && QU(TT.element);
    class FU {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(TT, UT, mT, WT) {
        this.latched = {
          source: TT,
          focusKey: UT,
          sinceMs: mT,
          hold: {
            id: ++this.presses,
            holdMs: WT
          }
        }
      }
      update(TT, UT, mT) {
        const WT = this.latched;
        return WT ? TT && UT === WT.focusKey ? mT - WT.sinceMs < WT.hold.holdMs ? null : (this.latched = null, WT.source) : (this.latched = null, null) : null
      }
      getHold() {
        var TT, UT;
        return null !== (TT = null === (UT = this.latched) || void 0 === UT ? void 0 : UT.hold) && void 0 !== TT ? TT : null
      }
      reset() {
        this.latched = null
      }
    }
    var PU = mT(8823);
    const VU = {
        kind: "none"
      },
      uU = TT => ({
        x: TT.clientX,
        y: TT.clientY
      }),
      CU = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class rU {
      constructor() {
        this.hovered = VU, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(TT, UT, mT, WT, zT) {
        const MT = null !== UT ? {
            kind: "slot",
            idx: UT
          } : mT ? {
            kind: "element",
            element: mT
          } : VU,
          gT = `${zT}|${Math.round(WT.clientX)},${Math.round(WT.clientY)}`,
          nT = (HT = this.hovered, kT = MT, "slot" === HT.kind && "slot" === kT.kind ? HT.idx === kT.idx : "element" === HT.kind && "element" === kT.kind ? HT.element === kT.element : HT.kind === kT.kind);
        var HT, kT;
        if (nT && gT === this.signature) return;
        const jT = !nT || zT !== this.holding || "" === this.signature;
        this.signature = gT, this.holding = zT, this.lastPoint = WT;
        const lT = this.hovered;
        if (this.hovered = MT, "slot" === MT.kind) return this.leaveElement(lT, null, WT), void(jT ? TT.hover(MT.idx, WT) : TT.moveTo(WT));
        if (nT) return void("element" === MT.kind ? (0, ST.r)(MT.element, MT.element, uU(WT)) : TT.hover(null, WT));
        TT.hover(null, WT);
        const LT = "element" === MT.kind ? MT.element : null;
        "element" === lT.kind ? (0, ST.r)(lT.element, LT, uU(WT)) : LT && (0, ST.r)(null, LT, uU(WT))
      }
      invalidate() {
        this.signature = ""
      }
      clear(TT) {
        const UT = this.hovered;
        this.hovered = VU, this.signature = "", "none" !== UT.kind && (this.leaveElement(UT, null, this.lastPoint), TT && "slot" === UT.kind && TT.hover(null, this.lastPoint))
      }
      leaveElement(TT, UT, mT) {
        "element" === TT.kind && (0, ST.r)(TT.element, UT, uU(mT))
      }
    }
    class KU {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(TT, UT) {
        eT(TT) && (this.lastTiltedMs = UT)
      }
      allowsClick(TT) {
        return TT - this.lastTiltedMs > 150
      }
    }
    class SU {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(TT) {
        return 0 !== (0, BT.j)(TT, .2).y
      }
      step(TT, UT, mT) {
        TT !== this.container && (this.container = TT, this.remainder = 0);
        const WT = YT(UT, mT).y;
        if (0 === WT) return this.remainder = 0, !1;
        const zT = this.remainder + WT,
          MT = Math.trunc(zT);
        if (this.remainder = zT - MT, 0 === MT) return !1;
        const gT = TT.scrollTop;
        return TT.scrollTop = gT + MT, TT.scrollTop !== gT
      }
      current() {
        var TT;
        return null !== (TT = this.container) && void 0 !== TT && TT.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var GU = mT(8832);
    const NU = "[data-pad-inventory-default]",
      EU = ".HotBarGameItemsContainer .InvenItem.Selected",
      hU = {
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
      DU = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      oU = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      AU = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      RU = [...oU, ...AU],
      Tm = () => {
        return TT = (0, jT.i)("inventory"), !RU.map(jT.i).includes(TT) && !(0, BT.D)(TT);
        var TT
      },
      Um = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      mm = (TT, UT) => {
        const mT = !(null === UT || void 0 === UT || !UT.isHolding());
        return function(TT, UT) {
          const mT = TT.find((TT => TT.visible && UT(TT)));
          if (mT) return mT;
          for (var WT = arguments.length, zT = new Array(WT > 2 ? WT - 2 : 0), MT = 2; MT < WT; MT++) zT[MT - 2] = arguments[MT];
          for (const gT of zT) {
            const UT = qU(TT.filter(gT));
            if (UT) return UT
          }
          return qU(TT)
        }(TT, (TT => {
          const {
            element: UT
          } = TT;
          return UT.matches(NU) || null !== UT.querySelector(NU) || UT.matches(EU)
        }), (TT => "slot" === TT.kind ? mT || null !== TT.idx && !(null === UT || void 0 === UT || !UT.hasItemAt(TT.idx)) : "recipe" === TT.kind || "pending" === TT.kind), (TT => "slot" === TT.kind || "button" === TT.kind))
      };
    class Wm {
      constructor() {
        this.set = null, this.observer = new MutationObserver((TT => {
          TT.some((TT => !QU(TT.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = TT => {
          this.scrolled(TT.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const TT = [],
              UT = [];
            let mT = !1;
            const WT = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              zT = new Map,
              MT = new RT(UT);
            for (const lT of document.querySelectorAll(bU)) {
              const jT = yU(lT);
              mT ||= null !== lT.querySelector(".CreativeCategoryTab");
              for (const mT of lT.querySelectorAll(`${OU}:first-child`)) {
                const gT = mT.parentElement;
                IU(gT, lT, XU(jT, gT), WT, TT, UT, MT, zT)
              }
              for (const mT of lT.querySelectorAll(eU)) {
                var gT, nT, HT, kT;
                if (mT.closest(OU) || mT.closest("[data-pad-ignore]")) continue;
                const LT = null === (gT = mT.parentElement) || void 0 === gT ? void 0 : gT.closest(eU);
                if (LT && lT.contains(LT)) continue;
                const pT = xU(mT),
                  BT = dU(mT, pT);
                if (-1 === BT) continue;
                const ZT = WU(mT.getBoundingClientRect());
                UT.push({
                  element: mT,
                  rect: ZT
                });
                const cT = MT.findForParent(mT.parentElement, lT),
                  vT = cT && !zT.has(cT.container) ? cT : null;
                (vT ? zU(ZT) : MU(ZT, WT)) && TT.push({
                  key: mU(mT),
                  rect: ZT,
                  panel: XU(jT, mT),
                  scrollGroup: null !== (nT = null === vT || void 0 === vT ? void 0 : vT.group) && void 0 !== nT ? nT : null,
                  visible: gU(ZT, WT, null === vT || void 0 === vT ? void 0 : vT.box),
                  clip: null !== (HT = null === vT || void 0 === vT ? void 0 : vT.box) && void 0 !== HT ? HT : null,
                  element: mT,
                  kind: pT,
                  idx: BT,
                  scrollContainer: null !== (kT = null === vT || void 0 === vT ? void 0 : vT.container) && void 0 !== kT ? kT : null
                })
              }
            }
            for (const [lT, LT] of zT) LT.holdsOthers = UT.some((TT => TT.element !== lT && lT.contains(TT.element) && !TT.element.closest(OU)));
            const jT = new Map;
            for (const lT of TT) jT.set(lT.element, lT);
            return {
              targets: TT,
              byElement: jT,
              hasCategories: mT,
              probes: UT,
              scrollers: zT
            }
          })(), this.observer.disconnect();
          for (const TT of document.querySelectorAll(bU)) this.observer.observe(TT, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(TT) {
        !this.set || TT instanceof Element && ((TT, UT) => {
          const mT = TT.scrollers.get(UT);
          if (!mT || mT.holdsOthers || UT.scrollLeft !== mT.left) return !1;
          const WT = UT.scrollTop - mT.top;
          if (0 === WT) return !0;
          mT.top = UT.scrollTop;
          for (const zT of mT.probes) zT.rect.top -= WT;
          for (const zT of mT.targets) zT.rect.top -= WT, zT.visible = gU(zT.rect, mT.viewport, mT.box);
          return !0
        })(this.set, TT) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((TT => {
          return UT = TT.rect, mT = TT.element.getBoundingClientRect(), !(UT.left === mT.left && UT.top === mT.top && UT.width === mT.width && UT.height === mT.height);
          var UT, mT
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const zm = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(BT.y.map((TT => [TT, (0, ZT.e)(BT.B)]))), this.stickRepeat = new BT.d((0, ZT.e)(BT.cb)), this.pageUpTimer = (0, ZT.e)(BT.Z), this.pageDownTimer = (0, ZT.e)(BT.Z), this.stickGate = new bT, this.pointer = null, this.activePress = null, this.dropLatch = new FU, this.scroller = new SU, this.scrollStickClick = new KU, this.hover = new rU, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new rT, this.targets = new Wm, this.hasCategories = !1, this.wasShowing = !1, this.state = PU.d, this.isActive = () => (0, oT.i)(), this.isShowing = () => "inventory" === lT.e.getActiveConsumerName() && (0, pT.m)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, oT.f)()), (0, oT.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var TT;
            this.reopenSlotIdx = null !== (TT = this.focused ? aU(this.focused).idx : null) && void 0 !== TT ? TT : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, oT.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = TT => {
            (0, nT.unstable_batchedUpdates)((() => {
              this.frame(TT)
            }))
          }, this.shouldBlockRealPointer = TT => TT.isTrusted && !(0, vT.u)(TT) && this.isShowing(), this.noteRealPointer = TT => {
            TT instanceof MouseEvent && TT.isTrusted && !(0, vT.u)(TT) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = TT.clientX, this.lastRealPointer.y = TT.clientY)
          }, this.wakePressActs = TT => {
            var UT;
            return TT === (0, jT.i)("inventoryClose") ? !(null !== (UT = (0, oT.f)()) && void 0 !== UT && UT.isHolding()) : !(TT !== (0, jT.i)("inventory") || !Tm()) || ((0, BT.D)(TT) ? this.isNavButton(TT) : AU.some((UT => (0, jT.i)(UT) === TT)))
          }
        }
        frame(TT) {
          var UT, mT, WT, zT, MT;
          const gT = (0, oT.f)();
          if (!(0, pT.m)()) return void(this.wasShowing && (this.endInteraction(gT), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), TT.wokeDevice && this.focusWakePointer(!(null === gT || void 0 === gT || !gT.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, LT.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const nT = performance.now();
          this.handleNavigation(TT, nT), this.handlePanels(TT), this.handlePaging(TT, nT), this.handleScroll(TT), this.handleButtons(TT, nT, gT), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const HT = this.ensureFocus(),
            kT = this.focusContext(gT);
          this.ring.show(HT);
          const lT = "slot" === kT.kind ? kT.idx : null,
            BT = null !== (UT = null === (mT = kT.actionElement) || void 0 === mT ? void 0 : mT.querySelector(".DoCraftItem")) && void 0 !== UT ? UT : kT.actionElement;
          this.pointer ? (this.hover.sync(gT, lT, BT, ((TT, UT) => {
            const mT = UT ? CU() : 0;
            return {
              clientX: TT.x - mT,
              clientY: TT.y - mT
            }
          })(this.pointer, kT.holding), kT.holding), NT.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: TT.isHeld((0, jT.i)("inventoryPrimary"))
          })) : HT && this.focused && this.hover.sync(gT, lT, BT, ((TT, UT) => {
            if (!UT) return {
              clientX: TT.left + TT.width - 10,
              clientY: TT.top + TT.height / 2 - 10
            };
            const mT = CU();
            return {
              clientX: TT.left + TT.width / 2 - mT,
              clientY: TT.top + TT.height / 2 - mT
            }
          })(HT, kT.holding), kT.holding), this.publishState({
            showing: !0,
            kind: kT.kind,
            holding: kT.holding,
            slotHasItem: kT.slotHasItem,
            pressHints: null !== (WT = null === (zT = kT.press) || void 0 === zT ? void 0 : zT.hints) && void 0 !== WT ? WT : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && sU(this.focusTarget),
            openButtonCloses: Tm(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === kT.kind && !(null === (MT = kT.actionElement) || void 0 === MT || !MT.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(TT) {
          var UT;
          const mT = (0, pT.e)();
          if (!mT) return;
          this.targets.revalidate();
          const WT = this.getTargets().targets;
          this.setFocus(null !== (UT = fU(mT, WT)) && void 0 !== UT ? UT : TT ? ZU(mT, WT, (TT => {
            let {
              rect: UT
            } = TT;
            const WT = Math.max(UT.left - mT.x, 0, mT.x - (UT.left + UT.width)),
              zT = Math.max(UT.top - mT.y, 0, mT.y - (UT.top + UT.height));
            return Math.hypot(WT, zT) <= Math.min(UT.width, UT.height) / 2
          })) : null, !1), "cursor" === (0, LT.k)().inventoryNavigation && (this.pointer = {
            x: mT.x,
            y: mT.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const TT = this.lastRealPointer;
          if (!TT || "keyboardMouse" !== HT.b.get("activeInputDevice")) return;
          const UT = document.elementFromPoint(TT.x, TT.y);
          UT && (0, ST.r)(null, UT, TT)
        }
        endInteraction(TT) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const UT of this.dpadTimers.values()) UT.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(TT), this.ring.hide(), this.releasePointer(), this.publishState(PU.d)
        }
        getTargets() {
          const TT = this.targets.get();
          return this.hasCategories = TT.hasCategories, TT
        }
        currentTarget() {
          var TT;
          return this.focused && null !== (TT = this.getTargets().byElement.get(this.focused)) && void 0 !== TT ? TT : null
        }
        readFocusRect() {
          const TT = this.focused;
          if (null === TT || void 0 === TT || !TT.isConnected || !TT.closest(bU)) return null;
          const UT = TT.getBoundingClientRect();
          return UT.width > 0 && UT.height > 0 ? {
            left: UT.left,
            top: UT.top,
            width: UT.width,
            height: UT.height
          } : null
        }
        ensureFocus() {
          const TT = this.readFocusRect();
          if (TT || this.pointer) return TT;
          const {
            targets: UT,
            byElement: mT
          } = this.getTargets();
          let WT = null,
            zT = !1;
          if (this.lastRect) WT = ZU(nU(this.lastRect), UT);
          else {
            var MT, gT;
            const TT = ((TT, UT) => {
                const mT = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return mT ? mm(TT.filter((TT => mT.contains(TT.element))), UT) : null
              })(UT, (0, oT.f)()),
              nT = UT.find((TT => null !== TT.idx && TT.idx === this.reopenSlotIdx)),
              HT = document.querySelector(EU);
            zT = null !== TT || void 0 !== nT, WT = null !== (MT = null !== (gT = null !== TT && void 0 !== TT ? TT : nT) && void 0 !== gT ? gT : HT && mT.get(HT)) && void 0 !== MT ? MT : qU(UT)
          }
          return this.setFocus(WT, zT), this.lastRect
        }
        setFocus(TT) {
          let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          TT && (this.focused = TT.element, this.focusTarget = TT, this.panelMemory.set(TT.panel, TT.element), UT && TT.scrollContainer && ((TT, UT) => {
            const mT = TT.getBoundingClientRect(),
              WT = IT(UT),
              zT = UT.scrollTop;
            return mT.top < WT.top ? UT.scrollTop -= WT.top - mT.top : mT.bottom > WT.bottom && (UT.scrollTop += mT.bottom - WT.bottom), UT.scrollTop !== zT
          })(TT.element, TT.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, LT.k)().inventoryNavigation) {
              if (this.lastRect) {
                const TT = nU(this.lastRect);
                this.pointer = {
                  x: TT.x,
                  y: TT.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const TT = this.lastRect ? nU(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, NT.hide()
        }
        hoverAtPointer() {
          var TT;
          const UT = fU(this.pointer, this.getTargets().targets);
          this.focusTarget = UT, (null === UT || void 0 === UT ? void 0 : UT.element) !== this.focused && (this.focused = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.element) && void 0 !== TT ? TT : null, UT && (this.panelMemory.set(UT.panel, UT.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(TT, UT) {
          const mT = this.focusTarget,
            WT = mT && (0, LT.k)().cursorMagnetism ? nU(cU(mT)) : null;
          this.pointer = OT(this.pointer, {
            stick: TT.leftStick,
            moveDeadzone: (0, LT.k)().moveDeadzone,
            dpad: UT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, LT.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: WT
            }
          })
        }
        move(TT) {
          this.targets.revalidate();
          const UT = this.currentTarget();
          UT && this.setFocus(BU(UT, this.getTargets().targets, TT))
        }
        step(TT) {
          const UT = this.pointer;
          if (UT && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((TT, UT, mT) => {
            var WT;
            const zT = {
              key: "",
              rect: {
                left: TT.x,
                top: TT.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (WT = BU(zT, UT, mT)) && void 0 !== WT ? WT : ZU(TT, UT)
          })(UT, this.getTargets().targets, TT));
          this.move(TT)
        }
        isNavButton(TT) {
          return !oU.some((UT => (0, jT.i)(UT) === TT)) && !(TT === (0, jT.i)("inventory") && Tm())
        }
        handleNavigation(TT, UT) {
          const mT = (0, LT.k)().inventoryNavigation,
            WT = {
              x: 0,
              y: 0
            };
          let zT = null;
          for (const HT of BT.y) {
            const MT = this.isNavButton(HT) && TT.isHeld(HT);
            MT && (WT.x += hU[HT].x, WT.y += hU[HT].y), this.dpadTimers.get(HT).update(MT, UT) && "cursor" !== mT && (zT ??= HT)
          }
          const MT = this.stickGate.update(TT.leftStick, (0, LT.k)().moveDeadzone);
          if (zT && (this.step(zT), this.stickGate.lock()), "slot" !== mT) {
            const UT = ((TT, UT, mT, WT) => "hybrid" !== TT ? "cursor" === TT : !WT && (UT || mT))(mT, null !== this.pointer, MT, null !== zT);
            return UT && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(TT, "cursor" === mT ? WT : {
              x: 0,
              y: 0
            }))
          }
          const gT = (0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone),
            nT = this.stickRepeat.update(MT ? (0, BT.fb)(gT) : null, UT);
          nT && this.move(nT)
        }
        applyCategoryPlace() {
          const TT = this.placeAfterCategory;
          if (!TT) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const UT = ZU(nU(TT.rect), this.getTargets().targets, (UT => UT.scrollGroup === TT.scrollGroup));
          this.setFocus(UT, !1)
        }
        applyFocusRequest() {
          const TT = (0, oT.r)();
          TT && (this.targets.invalidate(), this.setFocus((0, oT.d)(this.getTargets().targets, TT)))
        }
        handlePanels(TT) {
          var UT, mT, WT;
          const zT = TT.wasPressed((0, jT.i)("inventoryPanelPrevious")),
            MT = TT.wasPressed((0, jT.i)("inventoryPanelNext"));
          if (!zT && !MT) return;
          const {
            targets: gT
          } = this.getTargets(), nT = (HT = ((TT, UT) => {
            const mT = [];
            for (const zT of TT) zT.visible && !mT.includes(zT.panel) && mT.push(zT.panel);
            const WT = TT => {
              const WT = UT.indexOf(TT);
              return -1 === WT ? UT.length + mT.indexOf(TT) : WT
            };
            return mT.sort(((TT, UT) => WT(TT) - WT(UT)))
          })(gT, JU), kT = null !== (UT = null === (mT = this.focusTarget) || void 0 === mT ? void 0 : mT.panel) && void 0 !== UT ? UT : null, lT = MT ? 1 : -1, 0 === HT.length ? null : HT[HU(null === kT ? -1 : HT.indexOf(kT), HT.length, lT)]);
          var HT, kT, lT;
          if (null === nT) return;
          const LT = this.panelMemory.get(nT),
            pT = gT.filter((TT => TT.panel === nT)),
            BT = null !== (WT = pT.find((TT => TT.element === LT && TT.visible))) && void 0 !== WT ? WT : mm(pT, (0, oT.f)());
          this.setFocus(BT)
        }
        handlePaging(TT, UT) {
          const mT = (0, jT.i)("menuPageUp"),
            WT = (0, jT.i)("menuPageDown"),
            zT = this.pageUpTimer.update(TT.isHeld(mT), UT),
            MT = this.pageDownTimer.update(TT.isHeld(WT), UT);
          if (!zT && !MT) return;
          const gT = MT ? 1 : -1;
          if (!TT.wasPressed(MT ? WT : mT) && this.hasCategories) return;
          if ((TT => {
              const UT = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === UT.length) return !1;
              const mT = UT.findIndex((TT => TT.classList.contains("Selected"))),
                WT = UT[HU(mT, UT.length, TT)];
              return (0, ST.p)(WT, (0, ST.x)(WT)), !0
            })(gT)) {
            var nT, HT;
            this.targets.invalidate();
            const TT = null !== (nT = null === (HT = this.focusTarget) || void 0 === HT ? void 0 : HT.scrollGroup) && void 0 !== nT ? nT : null,
              UT = this.readFocusRect();
            return void(this.placeAfterCategory = null !== TT && UT && !this.pointer ? {
              rect: UT,
              scrollGroup: TT
            } : null)
          }
          const {
            targets: kT
          } = this.getTargets(), lT = this.currentTarget(), LT = lT && sU(lT) ? lT : kT.find((TT => sU(TT) && TT.visible));
          if (!LT) return;
          const pT = ((TT, UT, mT, WT) => {
            if (null === TT.scrollGroup) return null;
            const zT = nU(TT.rect),
              MT = zT.x,
              gT = zT.y + ("Down" === mT ? WT : -WT);
            let nT = null,
              HT = 1 / 0;
            for (const kT of UT) {
              if (kT.scrollGroup !== TT.scrollGroup || kT.key === TT.key) continue;
              const UT = nU(kT.rect);
              if ("Down" === mT ? UT.y <= zT.y : UT.y >= zT.y) continue;
              const WT = Math.hypot(UT.x - MT, UT.y - gT);
              WT < HT && (nT = kT, HT = WT)
            }
            return nT
          })(LT, kT, gT > 0 ? "Down" : "Up", LT.scrollContainer.clientHeight);
          this.setFocus(null !== pT && void 0 !== pT ? pT : LT)
        }
        handleScroll(TT) {
          var UT, mT, WT, zT, MT, gT;
          if (!this.scroller.isScrolling(TT.rightStick)) return void this.scroller.reset();
          const {
            targets: nT
          } = this.getTargets(), HT = this.pointer, kT = !HT && this.focusTarget && sU(this.focusTarget) ? this.focusTarget.scrollContainer : null, jT = HT && (null === (UT = nT.find((TT => TT.clip && vU(TT.clip, HT)))) || void 0 === UT ? void 0 : UT.scrollContainer), lT = null !== (mT = null !== (WT = null !== (zT = this.scroller.current()) && void 0 !== zT ? zT : jT) && void 0 !== WT ? WT : kT) && void 0 !== mT ? mT : null === (MT = nT.find(sU)) || void 0 === MT ? void 0 : MT.scrollContainer;
          if (!lT || !this.scroller.step(lT, TT.rightStick, TT.dtMs)) return;
          this.targets.scrolled(lT);
          const LT = HT || (null === (gT = this.focusTarget) || void 0 === gT ? void 0 : gT.scrollContainer) !== lT ? null : this.readFocusRect();
          if (!LT) return;
          const pT = IT(lT),
            BT = nU(LT);
          if (BT.y < pT.top || BT.y > pT.bottom) {
            const TT = this.focusTarget.scrollGroup,
              UT = ZU(BT, this.getTargets().targets, (UT => UT.scrollGroup === TT));
            this.setFocus(UT, !1)
          }
        }
        focusContext(TT) {
          const {
            kind: UT,
            idx: mT
          } = this.focused ? aU(this.focused) : {
            kind: null,
            idx: null
          }, WT = this.focused ? wU(this.focused) : null, zT = WT ? (0, GU.b)(WT) : null;
          return {
            kind: UT,
            idx: mT,
            actionElement: WT,
            press: zT,
            hasPress: null !== zT,
            hasBack: !(null === zT || void 0 === zT || !zT.back),
            holding: TT.isHolding(),
            slotHasItem: null !== mT && TT.hasItemAt(mT)
          }
        }
        handleButtons(TT, UT, mT) {
          var WT, zT;
          if (!this.activePress || TT.isHeld(this.activePress.button) && (WT = this.activePress.target, zT = this.focused, null !== WT.recipe ? tU(zT).recipe === WT.recipe : zT === WT.element) || this.releasePress(), this.scrollStickClick.update(TT.rightStick, UT), !this.handleHotbarPick(TT, mT)) {
            for (const [WT, zT] of DU) {
              const MT = (0, jT.i)(zT);
              if (!TT.wasPressed(MT) || "openButton" === WT && !Tm()) continue;
              if ("RS" === MT && !this.scrollStickClick.allowsClick(UT)) continue;
              const gT = this.focusContext(mT),
                nT = hT(WT, gT);
              nT && this.runIntent(nT, gT, MT, mT)
            }
            this.handleDrop(TT, UT, mT)
          }
        }
        handleHotbarPick(TT, UT) {
          const mT = this.hotbarPick;
          if (!mT) return !1;
          const WT = TT.wasPressed((0, jT.i)("inventoryPrimary")) || TT.wasPressed((0, jT.i)("inventoryHotbarSwap"));
          if (!WT && !TT.wasPressed((0, jT.i)("inventoryClose")) && !UT.isHolding()) return !(TT.wasPressed((0, jT.i)("inventory")) && Tm());
          const zT = this.focusTarget;
          WT && "hotbar" === (null === zT || void 0 === zT ? void 0 : zT.panel) && null !== zT.idx && zT.idx !== mT.idx && (UT.swapWithHotbar(zT.idx, mT.idx), this.afterAction()), this.hotbarPick = null;
          const MT = mT.element.isConnected ? this.getTargets().byElement.get(mT.element) : void 0;
          return MT && this.setFocus(MT), !0
        }
        startHotbarPick(TT) {
          var UT;
          const {
            targets: mT,
            byElement: WT
          } = this.getTargets(), zT = document.querySelector(EU), MT = null !== (UT = zT && WT.get(zT)) && void 0 !== UT ? UT : mT.find((TT => "hotbar" === TT.panel));
          MT && this.focused && (this.hotbarPick = {
            idx: TT,
            element: this.focused
          }, this.setFocus(MT))
        }
        focusKey() {
          return this.focused ? mU(this.focused) : null
        }
        handleDrop(TT, UT, mT) {
          const WT = (0, jT.i)("inventoryDrop");
          if (TT.wasPressed(WT)) {
            const TT = (zT = this.focusContext(mT)).holding ? {
              kind: "fn"
            } : "slot" === zT.kind && zT.slotHasItem && null !== zT.idx ? {
              kind: "slot",
              idx: zT.idx
            } : null;
            return void(TT && (this.dropFrom(TT, !1, mT), this.dropLatch.press(TT, this.focusKey(), UT, cT.e[(0, LT.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var zT;
          const MT = this.dropLatch.update(TT.isHeld(WT), this.focusKey(), UT);
          MT && ((TT, UT, mT) => "fn" === TT.kind ? UT : !UT && mT(TT.idx))(MT, mT.isHolding(), mT.hasItemAt) && (this.dropFrom(MT, !0, mT), this.afterAction())
        }
        dropFrom(TT, UT, mT) {
          "fn" === TT.kind ? mT.dropHeld(UT, this.slotPoint()) : mT.dropSlot(TT.idx, UT)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (TT => {
            const UT = nU(TT);
            return {
              clientX: UT.x,
              clientY: UT.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(TT, UT, mT, WT) {
          const zT = UT.idx,
            MT = UT.actionElement;
          switch (MT && Um.has(TT) && (0, vT.z)(MT), TT) {
            case "slotPrimary":
              WT.primary(zT, this.slotPoint());
              break;
            case "slotSecondary":
              WT.secondary(zT, this.slotPoint());
              break;
            case "slotQuickMove":
              WT.quickMove(zT, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(zT);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(UT.press, "pressPrimary" === TT ? "primary" : "secondary", mT);
              break;
            case "click":
              (0, ST.p)(MT, (0, ST.x)(MT));
              break;
            case "openKeyboard":
              (0, ST.J)(MT) && (0, ST.I)(MT);
              break;
            case "pressBack":
              UT.press.back();
              break;
            case "cancel":
              WT.cancel();
              break;
            case "close":
              return this.releasePress(), void WT.close()
          }
          this.afterAction()
        }
        startPress(TT, UT, mT) {
          this.releasePress(), TT.press(UT) && (this.activePress = {
            handlers: TT,
            button: mT,
            target: tU(this.focused)
          })
        }
        releasePress() {
          var TT, UT, mT;
          null === (TT = this.activePress) || void 0 === TT || null === (UT = (mT = TT.handlers).release) || void 0 === UT || UT.call(mT), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(TT) {
          ((TT, UT) => {
            var mT, WT, zT, MT, gT, nT;
            return TT.showing === UT.showing && TT.kind === UT.kind && TT.holding === UT.holding && TT.slotHasItem === UT.slotHasItem && (null === (mT = TT.pressHints) || void 0 === mT ? void 0 : mT.primary) === (null === (WT = UT.pressHints) || void 0 === WT ? void 0 : WT.primary) && (null === (zT = TT.pressHints) || void 0 === zT ? void 0 : zT.secondary) === (null === (MT = UT.pressHints) || void 0 === MT ? void 0 : MT.secondary) && (null === (gT = TT.pressHints) || void 0 === gT ? void 0 : gT.back) === (null === (nT = UT.pressHints) || void 0 === nT ? void 0 : nT.back) && TT.hasCategories === UT.hasCategories && TT.hasList === UT.hasList && TT.openButtonCloses === UT.openButtonCloses && TT.steppingSlots === UT.steppingSlots && TT.hotbarPicking === UT.hotbarPicking && TT.quickMoveToHotbar === UT.quickMoveToHotbar && TT.dropStackHold === UT.dropStackHold
          })(TT, this.state) || (this.state = TT, kT.j.EZ(PU.e, TT))
        }
      },
      Mm = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var gm = mT(8837),
      nm = mT(351),
      Hm = mT(1752),
      km = mT(8300);
    const jm = "[data-pad-secondary]",
      lm = TT => TT instanceof HTMLElement && (0, AT.r)(TT) && !(0, AT.t)(TT),
      Lm = TT => {
        const UT = TT.querySelector(jm);
        if (UT && lm(UT)) return UT;
        for (const zT of null !== (mT = null === (WT = TT.parentElement) || void 0 === WT ? void 0 : WT.children) && void 0 !== mT ? mT : []) {
          var mT, WT;
          if (zT !== TT && zT.matches(jm) && lm(zT)) return zT
        }
        return null
      },
      pm = (TT, UT, mT, WT) => Math.max(0, Math.max(TT, mT) - Math.min(UT, WT)),
      Bm = (TT, UT, mT, WT) => Math.max(0, Math.min(UT, WT) - Math.max(TT, mT)),
      Zm = (TT, UT, mT) => {
        const WT = (TT.left + TT.right) / 2,
          zT = (TT.top + TT.bottom) / 2,
          MT = (UT.left + UT.right) / 2,
          gT = (UT.top + UT.bottom) / 2;
        if ("Left" === mT || "Right" === mT) {
          const nT = "Right" === mT ? 1 : -1;
          return {
            forwardGap: "Right" === mT ? UT.left - TT.right : TT.left - UT.right,
            centreForward: (MT - WT) * nT,
            sidewaysGap: pm(TT.top, TT.bottom, UT.top, UT.bottom),
            sidewaysOverlap: Bm(TT.top, TT.bottom, UT.top, UT.bottom),
            centreSideways: Math.abs(gT - zT),
            startSideways: Math.abs(UT.top - TT.top),
            fromSidewaysSize: TT.bottom - TT.top,
            toSidewaysSize: UT.bottom - UT.top,
            toLength: UT.right - UT.left
          }
        }
        const nT = "Down" === mT ? 1 : -1;
        return {
          forwardGap: "Down" === mT ? UT.top - TT.bottom : TT.top - UT.bottom,
          centreForward: (gT - zT) * nT,
          sidewaysGap: pm(TT.left, TT.right, UT.left, UT.right),
          sidewaysOverlap: Bm(TT.left, TT.right, UT.left, UT.right),
          centreSideways: Math.abs(MT - WT),
          startSideways: Math.abs(UT.left - TT.left),
          fromSidewaysSize: TT.right - TT.left,
          toSidewaysSize: UT.right - UT.left,
          toLength: UT.bottom - UT.top
        }
      },
      cm = TT => TT.centreForward > .5 && TT.forwardGap >= -TT.toLength / 2,
      fm = TT => {
        const UT = TT.sidewaysOverlap > 0 ? 0 : 2 * TT.fromSidewaysSize,
          mT = TT.fromSidewaysSize > 1.5 * TT.toSidewaysSize ? TT.startSideways : TT.centreSideways;
        return Math.max(0, TT.forwardGap) + 3 * TT.sidewaysGap + UT + .1 * mT
      },
      qm = (TT, UT) => Bm(TT.top, TT.bottom, UT.top, UT.bottom) > 0 || UT.bottom - UT.top > UT.right - UT.left,
      im = (TT, UT, mT, WT, zT, MT) => {
        const gT = zT ? Om(TT, UT, mT, zT) : new Set,
          nT = Ym(TT, UT, mT, gT);
        return nT < 0 && gT.size > 0 && MT ? bm(TT, UT, mT, MT) : WT && nT >= 0 ? em(TT, UT, mT, WT, nT, gT) : nT
      },
      bm = (TT, UT, mT, WT) => {
        const zT = new Set,
          MT = Ym(TT, UT, "Up", zT) >= 0,
          gT = Ym(TT, UT, "Down", zT) >= 0,
          nT = new Set;
        return UT.forEach(((UT, mT) => {
          const zT = UT.top + UT.bottom < TT.top + TT.bottom;
          WT[mT] && !(zT ? MT : gT) || nT.add(mT)
        })), Ym(TT, UT, mT, nT)
      },
      Om = (TT, UT, mT, WT) => {
        const zT = new Set;
        return "Left" !== mT && "Right" !== mT || UT.forEach(((UT, mT) => {
          WT[mT] && Bm(TT.top, TT.bottom, UT.top, UT.bottom) <= 0 && zT.add(mT)
        })), zT
      },
      em = (TT, UT, mT, WT, zT, MT) => {
        const gT = Zm(TT, UT[zT], mT).forwardGap;
        let nT = zT,
          HT = WT[zT],
          kT = 1 / 0;
        return UT.forEach(((UT, jT) => {
          const lT = WT[jT];
          if (MT.has(jT) || lT < HT || lT === HT && nT === zT) return;
          const LT = Zm(TT, UT, mT);
          if (!cm(LT) || LT.forwardGap < 0 || LT.forwardGap >= gT) return;
          const pT = fm(LT);
          (lT > HT || pT < kT) && (nT = jT, HT = lT, kT = pT)
        })), nT
      },
      Ym = (TT, UT, mT, WT) => {
        let zT = -1,
          MT = 1 / 0;
        if (UT.forEach(((UT, gT) => {
            const nT = ((TT, UT, mT) => {
              const WT = Zm(TT, UT, mT);
              if (!cm(WT)) return null;
              const zT = Math.max(0, WT.forwardGap);
              return WT.sidewaysOverlap <= 0 && WT.sidewaysGap > 2 * (zT + 1) ? null : fm(WT)
            })(TT, UT, mT);
            null !== nT && nT < MT && !WT.has(gT) && (MT = nT, zT = gT)
          })), zT < 0) return -1;
        const gT = UT[zT],
          nT = Zm(TT, gT, mT).forwardGap;
        let HT = nT,
          kT = zT;
        return UT.forEach(((UT, MT) => {
          if (MT === zT || WT.has(MT) || !((TT, UT, mT) => {
              const WT = "Left" === mT || "Right" === mT,
                zT = WT ? Bm(TT.top, TT.bottom, UT.top, UT.bottom) : Bm(TT.left, TT.right, UT.left, UT.right),
                MT = WT ? Math.min(TT.bottom - TT.top, UT.bottom - UT.top) : Math.min(TT.right - TT.left, UT.right - UT.left);
              return zT > 0 && zT >= MT / 2
            })(UT, gT, mT)) return;
          const jT = Zm(TT, UT, mT);
          cm(jT) && jT.forwardGap + jT.toLength <= nT + 1 && jT.forwardGap < HT && (HT = jT.forwardGap, kT = MT)
        })), kT
      },
      Jm = (TT, UT) => {
        let mT = -1,
          WT = 1 / 0;
        return UT.forEach(((UT, zT) => {
          const MT = Math.max(UT.left - TT.x, 0, TT.x - UT.right),
            gT = Math.max(UT.top - TT.y, 0, TT.y - UT.bottom),
            nT = Math.hypot(MT, gT);
          nT < WT && (WT = nT, mT = zT)
        })), mT
      },
      xm = (TT, UT) => {
        const mT = Math.min(TT.bottom - TT.top, UT.bottom - UT.top) / 2;
        return Math.abs(TT.top - UT.top) > mT ? TT.top - UT.top : TT.left - UT.left
      },
      dm = TT => {
        let UT = -1;
        for (let mT = 0; mT < TT.length; mT++)(UT < 0 || xm(TT[mT], TT[UT]) < 0) && (UT = mT);
        return UT
      };
    var wm = mT(1799),
      tm = mT(8841),
      am = mT(8847);
    const ym = TT => {
        if ("death" !== TT || "inGame" !== HT.b.get("gameState") || "off" === (0, LT.k)().quickChat || null === (0, wm.d)()) return !1;
        const UT = (0, jT.i)("chat");
        return UT !== (0, jT.i)("menuConfirm") && UT !== (0, jT.i)("menuBack")
      },
      Xm = new tm.e;
    var Im = mT(4380),
      Qm = mT(8852),
      sm = mT(8856);
    const Fm = TT => {
        let UT = null;
        for (const mT of TT.querySelectorAll("[data-pad-tabs]"))(0, AT.r)(mT) && (!UT || Number(mT.dataset.padTabs) < Number(UT.dataset.padTabs)) && (UT = mT);
        return UT
      },
      Pm = (TT, UT, mT, WT) => {
        TT.focusWhenFound((() => {
          const zT = TT.pickInitial(UT);
          if (zT && !mT.has(zT) && (null === WT || void 0 === WT || !WT.contains(zT))) return zT;
          const MT = ((TT, UT) => {
              const mT = UT => TT.getEnabledCandidates(UT).filter((TT => !TT.closest("[data-pad-tabs]")));
              for (const WT of (0, AT.k)(UT)) {
                const TT = mT(WT);
                if (TT.length > 0) return TT
              }
              return mT(UT)
            })(TT, UT).filter((TT => !mT.has(TT))),
            gT = dm(MT.map((TT => TT.getBoundingClientRect())));
          return gT >= 0 ? MT[gT] : null
        }), 3e3)
      },
      Vm = (TT, UT, mT, WT) => {
        var zT;
        const MT = ((TT, UT) => {
          if (0 === TT.length) return null;
          const mT = TT.findIndex((TT => "true" === TT.dataset.padSelected));
          return mT < 0 ? UT > 0 ? TT[0] : TT[TT.length - 1] : TT[(mT + UT + TT.length) % TT.length]
        })([...mT.querySelectorAll("[data-pad-tab]")].filter((TT => (0, AT.r)(TT) && !(0, AT.t)(TT))), WT);
        if (!MT) return;
        const gT = null !== (zT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== zT ? zT : null,
          nT = !(null === gT || void 0 === gT || !gT.isConnected) && mT.contains(gT),
          HT = TT && !nT ? new Set(TT.getEnabledCandidates(UT)) : null;
        (0, ST.d)(MT), TT && (HT ? Pm(TT, UT, HT, mT) : TT.setFocus(MT, {
          byUser: !0
        }))
      },
      um = TT => {
        var UT;
        const mT = IT(null !== (UT = dT(TT, "x")) && void 0 !== UT ? UT : TT),
          WT = (0, AT.h)(TT).filter((TT => !(0, AT.t)(TT))),
          zT = WT.filter((TT => QT(TT.getBoundingClientRect(), mT)));
        return (zT.length > 0 ? zT : WT).sort(((TT, UT) => xm(TT.getBoundingClientRect(), UT.getBoundingClientRect())))
      },
      Cm = (TT, UT, mT) => {
        const WT = [...UT.querySelectorAll("[data-pad-row]")].filter(AT.r),
          zT = TT.getFocused(),
          MT = zT ? WT.findIndex((TT => TT.contains(zT))) : -1;
        let gT = 0,
          nT = mT > 0 ? 0 : WT.length - 1;
        if (MT >= 0 && zT) gT = Math.max(0, um(WT[MT]).indexOf(zT)), nT = MT + mT;
        else if (zT) {
          const TT = zT.getBoundingClientRect(),
            UT = WT.map((UT => {
              const WT = UT.getBoundingClientRect();
              return mT > 0 ? WT.top >= TT.top : WT.bottom <= TT.bottom
            }));
          nT = mT > 0 ? UT.indexOf(!0) : UT.lastIndexOf(!0)
        }
        for (let HT = nT; HT >= 0 && HT < WT.length; HT += mT) {
          const UT = um(WT[HT]);
          if (UT.length > 0) return void TT.setFocus(UT[Math.min(gT, UT.length - 1)], {
            byUser: !0
          })
        }
      },
      rm = (TT, UT, mT) => {
        var WT, zT;
        const MT = null !== (WT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== WT ? WT : null,
          gT = null !== MT && void 0 !== MT && MT.closest("[data-pad-row]") ? "x" : "y",
          nT = null !== (zT = MT ? dT(MT, gT, UT) : null) && void 0 !== zT ? zT : tT(UT, gT);
        if (!nT) return;
        const HT = MT ? (0, ST.x)(MT) : null;
        if (XT(nT, gT, mT * ("y" === gT ? nT.clientHeight : nT.clientWidth) * .85), !TT || !HT) return;
        const kT = IT(nT),
          jT = TT.getEnabledCandidates(UT).filter((TT => nT.contains(TT) && QT(TT.getBoundingClientRect(), kT))),
          lT = Jm(HT, jT.map((TT => TT.getBoundingClientRect())));
        lT >= 0 && TT.setFocus(jT[lT], {
          scroll: !1,
          byUser: !0
        })
      };
    let Km = null;
    const Sm = (TT, UT) => {
        var mT, WT;
        const zT = UT.querySelector("[data-pad-friends-column]"),
          MT = TT.getFocused();
        if (!zT || !MT || !zT.contains(MT)) return !1;
        const gT = TT.getEnabledCandidates(UT).filter((TT => !zT.contains(TT))),
          nT = Jm((0, ST.x)(MT), gT.map((TT => TT.getBoundingClientRect()))),
          HT = null === (mT = Km) || void 0 === mT ? void 0 : mT.deref();
        return TT.setFocus(null !== HT && void 0 !== HT && HT.isConnected ? HT : null !== (WT = gT[nT]) && void 0 !== WT ? WT : null, {
          byUser: !0
        }), !0
      },
      Gm = TT => {
        const UT = (0, jT.i)(TT);
        return (0, BT.D)(UT) || km.r.some((TT => (0, jT.i)(TT) === UT)) ? null : UT
      },
      Nm = (TT, UT) => {
        const mT = Gm(UT);
        return null !== mT && TT.wasPressed(mT)
      },
      Em = function(TT, UT, mT) {
        let WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = (TT => {
            var UT, mT;
            return null !== (UT = null === (mT = Fm(TT)) || void 0 === mT ? void 0 : mT.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== UT ? UT : null
          })(UT),
          MT = TT && zT ? new Set(TT.getEnabledCandidates(UT)) : null;
        (0, gm.d)(), mT === nm.k.SETTINGS && (0, Hm.g)(HT.b.get("openEverythingMenuName")) ? HT.b.set({
          openEverythingMenuName: mT
        }) : (0, Hm.s)((0, sm.e)("padMenuShortcut"), mT, WT), TT && MT && zT && Pm(TT, UT, MT, zT.closest("[data-pad-tabs]"))
      },
      hm = TT => null !== TT.closest(".Dropdown-root") || null !== TT.querySelector(".Dropdown-root.is-open"),
      Dm = TT => null !== (0, Qm.e)() && "popup" !== TT.layer.kind && !Fm(TT.root) && !hm(TT.root),
      om = (0, ZT.e)(BT.Z),
      Am = (0, ZT.e)(BT.Z),
      Rm = (TT, UT, mT) => {
        if (((TT, UT) => {
            const mT = (0, jT.i)("chat");
            return ym(UT) && TT.isHeld(mT) ? "hold" === Xm.update(TT.wasPressed(mT), TT.isHeld(mT), performance.now(), cT.e[(0, LT.k)().tapHoldTime].wheelMs) && (lT.e.consumeButton(mT), kT.j.EZ(am.m), !0) : (Xm.release(), !1)
          })(UT, mT.layer.kind)) return !0;
        const WT = mT.root;
        for (const [gT, nT] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (UT.wasPressed((0, jT.i)(gT))) {
            const UT = hm(WT) ? null : Fm(WT);
            if (UT) Vm(TT, WT, UT, nT);
            else if (Dm(mT)) {
              var zT;
              const UT = TT ? new Set(TT.getEnabledCandidates(WT)) : null;
              null !== (zT = (0, Qm.e)()) && void 0 !== zT && zT(nT) && TT && UT && Pm(TT, WT, UT, null)
            } else TT && Cm(TT, WT, nT);
            return !0
          } for (const [gT, nT, HT] of [
            ["menuPageUp", -1, om],
            ["menuPageDown", 1, Am]
          ]) {
          const mT = (0, jT.i)(gT);
          if (UT.wasPressed(mT) && HT.reset(), HT.update(UT.isHeld(mT), performance.now())) return rm(TT, WT, nT), !0
        }
        const MT = "popup" === mT.layer.kind;
        return Nm(UT, "pause") ? (MT || (0, Hm.m)() && "menu" !== mT.layer.kind || Em(TT, WT, (0, Hm.m)() ? nm.k.SETTINGS : (0, Im.d)()), !0) : !!Nm(UT, "leaderboard") && ("home" === mT.layer.kind ? (TT => {
          const UT = [...TT.querySelectorAll("[data-pad-notifications]")].find(AT.r);
          UT && (0, ST.d)(UT)
        })(WT) : MT || Em(TT, WT, nm.k.LOBBY_LEADERBOARD, "inGame" === HT.b.get("gameState")), !0)
      },
      TW = (TT, UT, mT) => {
        if (Rm(TT, UT, mT)) return !0;
        const WT = "home" === mT.layer.kind;
        if (UT.wasPressed((0, jT.i)("menuSecondary"))) {
          const UT = TT.getFocused(),
            zT = UT ? Lm(UT) : null;
          if (zT) return (0, ST.d)(zT), !0;
          if (WT) {
            const UT = mT.root.querySelector("[data-pad-search] input");
            return UT && (0, AT.s)(UT, mT.root) ? (TT.setFocus(UT, {
              byUser: !0
            }), (0, ST.d)(UT)) : HT.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!WT || !Nm(UT, "inventory")) && (((TT, UT) => {
          var mT, WT;
          const zT = UT.querySelector("[data-pad-friends-column]");
          if (!zT || !(0, AT.r)(zT)) return void(0, Hm.s)((0, sm.e)("padMenuShortcut"), nm.k.SOCIAL);
          if (Sm(TT, UT)) return;
          const MT = null !== (mT = null === (WT = zT.querySelector("[data-pad-friends-start]")) || void 0 === WT ? void 0 : WT.getBoundingClientRect().top) && void 0 !== mT ? mT : -1 / 0,
            gT = TT.getEnabledCandidates(zT),
            nT = gT.filter((TT => TT.getBoundingClientRect().top >= MT)),
            HT = nT.length > 0 ? nT : gT,
            kT = dm(HT.map((TT => TT.getBoundingClientRect())));
          TT.setFocus(kT >= 0 ? HT[kT] : null, {
            byUser: !0
          })
        })(TT, mT.root), !0)
      },
      UW = TT => {
        var UT, mT, WT;
        const zT = (0, ST.z)(TT);
        if (null !== zT) return zT;
        const MT = (null !== (UT = null !== (mT = null !== (WT = TT.getAttribute("aria-label")) && void 0 !== WT ? WT : TT.getAttribute("title")) && void 0 !== mT ? mT : TT.textContent) && void 0 !== UT ? UT : "").replace(/\s+/g, " ").trim();
        return MT ? `${TT.tagName}:${MT.slice(0,100)}` : null
      };
    class mW {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(TT) {
        const UT = this.history.indexOf(TT);
        if (UT >= 0) {
          for (const TT of this.history.splice(UT + 1)) this.remembered.delete(TT);
          return !0
        }
        return this.remembered.delete(TT), this.history.push(TT), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(TT) {
        this.remembered.delete(TT);
        const UT = this.history.indexOf(TT);
        UT >= 0 && this.history.splice(UT, 1)
      }
      remember(TT, UT, mT, WT) {
        const zT = UW(UT),
          MT = (0, ST.z)(UT),
          gT = null !== MT && ((TT, UT) => {
            let mT = 0;
            for (const WT of TT.querySelectorAll("[data-pad-key], [href]"))
              if ((WT.getAttribute("data-pad-key") === UT || WT.getAttribute("href") === UT) && (mT++, mT > 1)) return !0;
            return !1
          })(mT, MT) ? Math.max(0, this.twins(WT(), MT).indexOf(UT)) : 0;
        this.remembered.set(TT, {
          element: new WeakRef(UT),
          identity: zT,
          ordinal: gT
        })
      }
      has(TT) {
        return this.remembered.has(TT)
      }
      recall(TT, UT) {
        var mT, WT;
        const zT = this.remembered.get(TT);
        if (!zT) return null;
        const MT = zT.element.deref();
        if (MT && UT.includes(MT)) return MT;
        if (null === zT.identity) return null;
        const gT = this.twins(UT, zT.identity);
        return null !== (mT = null !== (WT = gT[zT.ordinal]) && void 0 !== WT ? WT : gT[0]) && void 0 !== mT ? mT : null
      }
      twins(TT, UT) {
        return TT.filter((TT => UW(TT) === UT))
      }
    }
    var WW = mT(1376);
    const zW = TT => {
        const UT = [];
        let mT = TT;
        for (; mT && mT !== document.body;) {
          const TT = getComputedStyle(mT).zIndex;
          "auto" !== TT && UT.push(Number(TT) || 0), mT = mT.parentElement
        }
        return UT.reverse()
      },
      MW = (TT, UT) => {
        const mT = ((TT, UT) => {
          const mT = Math.max(TT.length, UT.length);
          for (let MT = 0; MT < mT; MT++) {
            var WT, zT;
            const mT = (null !== (WT = TT[MT]) && void 0 !== WT ? WT : 0) - (null !== (zT = UT[MT]) && void 0 !== zT ? zT : 0);
            if (0 !== mT) return mT
          }
          return 0
        })(zW(TT), zW(UT));
        if (0 !== mT) return mT > 0;
        if (TT.contains(UT)) return !1;
        if (UT.contains(TT)) return !0;
        const WT = TT.compareDocumentPosition(UT);
        return !!(WT & Node.DOCUMENT_POSITION_PRECEDING) || !(WT & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      gW = (TT, UT) => {
        var mT;
        return null !== (mT = MW(TT.root, UT.root)) && void 0 !== mT ? mT : TT.order > UT.order
      },
      nW = (TT, UT) => UT.some((UT => !UT.contains(TT) && !TT.contains(UT) && !0 === MW(UT, TT)));
    let HW = null,
      kW = null,
      jW = -1;
    const lW = () => {
        var TT;
        const UT = null === (TT = document.timeline) || void 0 === TT ? void 0 : TT.currentTime,
          mT = "number" === typeof UT ? UT : null;
        if (null !== mT && mT === kW && jW === (0, WW.d)()) return HW;
        let WT = null;
        const zT = [],
          MT = [...document.querySelectorAll("[data-pad-covers]")].filter(AT.r);
        for (const gT of (0, WW.e)()) {
          const TT = gT.getRoot(),
            UT = !!TT && (0, AT.r)(TT) && !nW(TT, MT);
          if (gT.shown && !UT && zT.push(gT), gT.shown = UT, !TT || !UT) continue;
          const mT = {
            layer: gT,
            root: TT,
            order: gT.order
          };
          WT && !gW(mT, WT) || (WT = mT)
        }
        HW = WT, kW = mT, jW = (0, WW.d)();
        for (const gT of zT)(0, WW.f)(gT);
        return HW
      },
      LW = () => {
        const TT = lW();
        return !(null === TT || void 0 === TT || !TT.layer.close) && (TT.layer.close(), kW = null, !0)
      },
      pW = () => {
        var TT, UT;
        return null !== (TT = null === (UT = lW()) || void 0 === UT ? void 0 : UT.root) && void 0 !== TT ? TT : null
      },
      BW = TT => TT ? {
        ...TT,
        root: pW()
      } : null;
    let ZW = null,
      cW = null,
      vW = (0, LT.k)().menuNavigation,
      fW = null;
    const qW = new bT;
    let iW = null;
    kT.j.subscribe(LT.g, (() => {
      const TT = (0, LT.k)().menuNavigation;
      TT !== vW && (vW = TT, ZW = null, cW = null)
    }));
    const bW = () => {
        var TT;
        return null !== (TT = ZW) && void 0 !== TT ? TT : (0, LT.k)().menuNavigation
      },
      OW = TT => {
        if (xW()) {
          if (fW = BW(TT), "hybrid" === bW()) return qW.lock(), void(cW = cW ? null : pW());
          ZW = "focus" === bW() ? "cursor" : "focus"
        }
      },
      eW = () => {
        const TT = fW;
        return fW = null, TT
      };
    let YW = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const JW = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const mT = YW.root === TT,
          WT = mT ? YW.firstSeenMs : UT,
          zT = YW.has || UT - WT > 1e3;
        return (!mT || !zT || UT - YW.atMs > 250) && (YW = {
          root: TT,
          firstSeenMs: WT,
          atMs: UT,
          has: (0, AT.n)(TT)
        }), YW.has
      },
      xW = () => {
        const TT = pW();
        return null !== TT && JW(TT)
      },
      dW = () => {
        const TT = lW();
        return cW && (null === TT || void 0 === TT ? void 0 : TT.root) !== cW && (cW = null), (TT => {
          let {
            mode: UT,
            hasLayer: mT,
            hasCandidates: WT,
            hybridCursorEngaged: zT
          } = TT;
          return mT ? "cursor" !== UT && WT() ? "hybrid" === UT && zT ? "cursor" : "focus" : "cursor" : null
        })({
          mode: bW(),
          hasLayer: null !== TT,
          hasCandidates: () => null !== TT && JW(TT.root),
          hybridCursorEngaged: null !== cW
        })
      },
      wW = () => "hybrid" === bW() && xW(),
      tW = "pad-focused";
    var aW = mT(4653),
      yW = mT(5123);
    const XW = "[data-pad-destructive]",
      IW = `${XW}, [data-pad-back]`,
      QW = TT => ({
        rect: TT.getBoundingClientRect(),
        destructive: TT.matches(XW),
        closes: null !== TT.closest("[data-pad-close-button]"),
        unavailable: TT.matches("[data-pad-unavailable]")
      }),
      sW = TT => {
        let {
          destructive: UT,
          closes: mT,
          unavailable: WT
        } = TT;
        return UT ? mT ? 2 : 3 : WT ? 1 : 0
      },
      FW = TT => {
        let UT = -1;
        for (let mT = 0; mT < TT.length; mT++) {
          if (UT < 0) {
            UT = mT;
            continue
          }
          const WT = TT[mT],
            zT = TT[UT];
          sW(WT) === sW(zT) ? xm(WT.rect, zT.rect) < 0 && (UT = mT) : sW(WT) < sW(zT) && (UT = mT)
        }
        return UT
      },
      PW = "[data-pad-tabs]",
      VW = "[data-pad-tab]",
      uW = (TT, UT) => {
        const mT = TT.querySelector(`${VW}[data-pad-selected='true']`);
        return mT && UT.includes(mT) ? mT : null
      },
      CW = (TT, UT) => {
        let mT = UT;
        for (let WT = UT.parentElement; WT && !WT.contains(TT); WT = WT.parentElement) mT = WT;
        return mT
      };
    class rW {
      constructor() {
        this.contentReturn = null
      }
      redirect(TT, UT, mT, WT) {
        var zT, MT;
        const gT = TT.closest(PW),
          nT = UT.closest(PW);
        var HT;
        if (nT && nT !== gT) return gT || (this.contentReturn = new WeakRef(TT)), null !== (HT = uW(nT, mT)) && void 0 !== HT ? HT : UT;
        if (!gT || nT) return UT;
        const kT = CW(TT, UT),
          jT = null === (zT = this.contentReturn) || void 0 === zT ? void 0 : zT.deref();
        return jT && kT.contains(jT) && mT.includes(jT) ? jT : null !== (MT = this.pickRegionStart(kT, dT(UT, "y", WT), mT)) && void 0 !== MT ? MT : UT
      }
      findTabContent(TT, UT, mT) {
        const WT = TT.closest(PW);
        if (!WT || !TT.matches(VW) || WT.contains(UT)) return null;
        const zT = UT.closest(PW);
        if (zT && Number(zT.dataset.padTabs) <= Number(WT.dataset.padTabs)) return null;
        const MT = CW(TT, UT);
        return mT.some((TT => MT.contains(TT) && !TT.closest(IW))) || !UT.closest(IW) ? MT : null
      }
      pickContentStart(TT, UT, mT) {
        return this.contentReturn = null, this.pickRegionStart(TT, dT(TT, "y", mT), UT)
      }
      pickReplacedContentStart(TT, UT, mT, WT) {
        if (!UT.contains(TT)) return null;
        const zT = CW(UT, TT),
          MT = mT.filter((TT => UT.contains(TT) && !zT.contains(TT) && !TT.closest(IW)));
        return 0 === MT.length ? null : (this.contentReturn = null, this.pickRegionStart(UT, dT(MT[0], "y", WT), MT))
      }
      backToStrip(TT, UT, mT) {
        if (TT.closest(PW)) return null;
        const WT = Fm(mT);
        for (const zT of mT.querySelectorAll(PW)) {
          if (Number(zT.dataset.padTabs) <= 1 || zT === WT) continue;
          const MT = uW(zT, UT),
            gT = MT ? CW(TT, zT).parentElement : null;
          if (MT && gT && gT !== mT && mT.contains(gT)) return this.contentReturn = new WeakRef(TT), MT
        }
        return null
      }
      pickRegionStart(TT, UT, mT) {
        const WT = IT(UT),
          zT = TT => {
            const UT = mT.filter((UT => TT.contains(UT) && !UT.closest(PW) && QT(UT.getBoundingClientRect(), WT))),
              zT = FW(UT.map(QW));
            return zT >= 0 ? UT[zT] : null
          };
        for (const MT of (0, AT.k)(TT)) {
          const TT = zT(MT);
          if (TT) return TT
        }
        for (const MT of TT.querySelectorAll(PW)) {
          const TT = uW(MT, mT);
          if (TT) return TT
        }
        return zT(TT)
      }
    }
    const KW = "[data-pad-default-focus], .Dropdown-option.is-selected",
      SW = ".Dropdown-root.is-open > .Dropdown-menu",
      GW = "[data-pad-no-step-in]",
      NW = "[data-pad-tabs]",
      EW = "[data-pad-press-area]",
      hW = TT => {
        let UT = TT;
        for (let mT = 0; UT && mT <= 4; mT++, UT = UT.parentElement) {
          const mT = UT.querySelector(".CircleInfo");
          if (mT) return UT === TT || UT.querySelectorAll(AT.d).length <= 1 ? mT : null;
          if (UT !== TT && UT.querySelectorAll(AT.d).length > 1) return null
        }
        return null
      },
      DW = (TT, UT, mT) => {
        (0, ST.r)(TT, UT, mT);
        const WT = null !== TT && void 0 !== TT && TT.isConnected ? hW(TT) : null,
          zT = hW(UT);
        WT !== zT && (0, ST.r)(WT, zT, zT ? (0, ST.x)(zT) : mT, {
          leaveBelow: TT,
          enterBelow: UT
        })
      },
      oW = TT => TT.getBoundingClientRect(),
      AW = (TT, UT, mT) => {
        const WT = new Set(mT);
        for (let zT = TT; zT; zT = zT === UT ? null : zT.parentElement)
          if (WT.has(zT)) return zT;
        return null
      },
      RW = (TT, UT) => !TT.root || TT.root === UT || UT.matches(SW) && TT.root.contains(UT);
    const Tz = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new mW, this.tabStripNav = new rW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, ZT.e)(BT.t), this.dpadRepeats = new Map(BT.y.map((TT => [TT, (0, ZT.e)(BT.B)]))), this.stickRepeat = new BT.d((0, ZT.e)(BT.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const TT = lT.e.register({
            name: "focus",
            isActive: () => (0, pT.m)() && "focus" === dW(),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: TT => (0, lT.g)(TT) || TT === (0, jT.i)("menuConfirm") && (0, ST.H)((0, pT.e)())
          }),
          UT = (0, WW.j)((TT => {
            const UT = (0, WW.n)(TT);
            null === TT.memoryKey && this.memory.forget(UT), UT === this.layerKey && (this.layerKey = null)
          }));
        let mT = -1 / 0;
        const WT = gT.e.onFrame((TT => {
            (0, pT.m)() || TT.timestampMs - mT < 100 || (mT = TT.timestampMs, lW())
          })),
          zT = TT => {
            TT.isTrusted && TT.target instanceof Element && gT.e.getActivePad() && this.noteChosenStop(TT.target)
          };
        return document.addEventListener("click", zT, !0), () => {
          TT(), UT(), WT(), document.removeEventListener("click", zT, !0), this.deactivate()
        }
      }
      noteChosenStop(TT) {
        var UT, mT;
        const WT = lW();
        if (!WT || !WT.root.contains(TT)) return;
        const zT = null !== (UT = null === (mT = TT.closest(".Dropdown-root")) || void 0 === mT ? void 0 : mT.querySelector(".Dropdown-control")) && void 0 !== UT ? UT : TT,
          MT = AW(zT, WT.root, this.getEnabledCandidates(WT.root));
        if (!MT) return;
        const gT = (0, WW.n)(WT.layer);
        gT === this.layerKey && WT.root === this.layerRoot || this.beginLayer(WT, gT), this.wasActive ? this.setFocus(MT, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = MT, this.lastFocusedCentre = (0, ST.x)(MT), this.rememberFocus(MT), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      deactivate() {
        var TT;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const TT of this.dpadRepeats.values()) TT.reset();
          this.stickRepeat.reset(), null !== (TT = this.focused) && void 0 !== TT && TT.isConnected && DW(this.focused, null, (0, ST.x)(this.focused)), this.notify()
        }
      }
      setFocus(TT) {
        var UT;
        let {
          scroll: mT = !0,
          byUser: WT = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (WT && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), TT === this.focused) return;
        const zT = null !== (UT = this.focused) && void 0 !== UT && UT.isConnected ? this.focused : null;
        if (this.focused = TT, TT) {
          mT && (TT.classList.add(tW), TT.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), WT && ((TT, UT) => {
            const mT = UT.closest("[data-pad-friends-column]");
            mT && TT && !mT.contains(TT) && (Km = new WeakRef(TT))
          })(zT, TT);
          const UT = (0, ST.x)(TT);
          this.lastFocusedCentre = UT, this.movedInLayer && this.rememberFocus(TT), DW(zT, TT, UT), "false" === TT.getAttribute("aria-pressed") && TT.closest("[data-pad-select-on-focus]") && (0, ST.d)(TT)
        } else zT && DW(zT, null, (0, ST.x)(zT));
        this.notify()
      }
      rememberFocus(TT) {
        const UT = this.layerRoot;
        this.layerKey && UT && this.memory.remember(this.layerKey, TT, UT, (() => this.getEnabledCandidates(UT)))
      }
      noteCursorActivation(TT) {
        const UT = lW();
        if (!UT || !UT.root.contains(TT)) return;
        const mT = this.getEnabledCandidates(UT.root),
          WT = new Set(mT);
        let zT = TT;
        for (; zT && !WT.has(zT);) zT = zT === UT.root ? null : zT.parentElement;
        if (!(zT instanceof HTMLElement)) return;
        const MT = (0, WW.n)(UT.layer);
        this.memory.enter(MT), this.memory.remember(MT, zT, UT.root, (() => mT))
      }
      notePageEnteredByCursor(TT) {
        return this.memory.enter(TT)
      }
      recallStop(TT, UT) {
        return this.findRemembered(TT, UT)
      }
      focusWhenFound(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: TT,
          untilMs: performance.now() + UT,
          holdWhile: mT
        }
      }
      getEnabledCandidates(TT) {
        return (0, AT.h)(TT).filter((TT => !(0, AT.t)(TT)))
      }
      onFrame(TT) {
        var UT;
        const mT = lW();
        if (!mT) return;
        const WT = null !== (UT = this.findOpenDropdown(mT)) && void 0 !== UT ? UT : mT,
          zT = performance.now(),
          MT = (0, WW.n)(WT.layer);
        if (MT !== this.layerKey || WT.root !== this.layerRoot) {
          const UT = this.focused;
          if (null !== this.layerKey && WT.root === this.layerRoot && UT && (0, AT.s)(UT, WT.root)) this.continueLayer(MT, UT), this.wasActive || this.resume(WT.root, zT);
          else {
            const UT = !this.wasActive && !TT.wokeDevice,
              gT = "death" === this.layerKind || UT,
              nT = this.enterLayer(WT, MT);
            "popup" !== WT.layer.kind || WT !== mT || nT ? "menu" === WT.layer.kind && gT && "inGame" === HT.b.get("gameState") && !(0, gm.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = zT + aW.d) : (this.pressGuardExtends = UT, this.pressGuardUntilMs = zT + (UT ? aW.d : gT ? 500 : 250))
          }
        } else this.wasActive || this.resume(WT.root, zT);
        if (this.layerKind = WT.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), TT.wokeDevice && this.focusPointedStop(WT.root), this.validateFocus(WT, zT), zT < this.pressGuardUntilMs && this.pressGuardExtends && (TT.wasPressed((0, jT.i)("menuConfirm")) || TT.wasPressed((0, jT.i)("menuBack"))) && (this.pressGuardUntilMs = zT + aW.d), zT >= this.pressGuardUntilMs && this.handleButtons(TT, WT)) return;
        const gT = "hybrid" === bW();
        if (gT && (TT => {
            const UT = pW();
            return UT !== iW && (iW = UT, qW.lock()), qW.update(TT, (0, LT.k)().moveDeadzone)
          })(TT.leftStick)) return nT = this.getHandoff(), fW = BW(nT), cW = pW(), void lT.e.handOffHeldInput();
        var nT;
        this.handleDirections(TT, WT, zT, !gT), this.handleScroll(TT, WT)
      }
      findOpenDropdown(TT) {
        const UT = TT.root.querySelector(SW);
        if (!UT || !(0, AT.r)(UT)) return null;
        let mT = this.dropdownLayers.get(UT);
        return mT || (this.dropdownLayerCounter++, mT = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: TT.layer.kind,
          getRoot: () => UT,
          close: () => {
            (0, ST.n)(UT)
          },
          memoryKey: null
        }, this.dropdownLayers.set(UT, mT)), {
          layer: mT,
          root: UT,
          order: TT.order
        }
      }
      focusPointedStop(TT) {
        const UT = (0, pT.e)(),
          mT = UT ? document.elementFromPoint(UT.x, UT.y) : null;
        if (!mT || !TT.contains(mT)) return;
        const WT = AW(mT, TT, this.getEnabledCandidates(TT));
        WT && this.setFocus(WT, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(TT, UT) {
        const mT = this.beginLayer(TT, UT),
          WT = eW();
        return WT && RW(WT, TT.root) ? (this.takeOver(TT.root, WT, this.enteredLayerAtMs), mT) : (this.restoreLayerFocus(TT.root, mT), mT)
      }
      beginLayer(TT, UT) {
        return this.layerKey = UT, this.layerRoot = TT.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(UT)
      }
      restoreLayerFocus(TT, UT) {
        const mT = UT && this.layerKey ? this.findRemembered(TT, this.layerKey) : null;
        this.restoredFromMemory = null !== mT, this.setFocus(null !== mT && void 0 !== mT ? mT : this.pickInitial(TT, {
          waitForContent: !0
        }))
      }
      continueLayer(TT, UT) {
        this.layerKey = TT;
        const mT = this.memory.enter(TT);
        this.restoreOnFocusLoss = mT, this.movedInLayer && !mT && this.rememberFocus(UT)
      }
      resume(TT, UT) {
        var mT;
        const WT = eW();
        WT && RW(WT, TT) ? this.takeOver(TT, WT, UT) : null !== (mT = this.focused) && void 0 !== mT && mT.isConnected && DW(null, this.focused, (0, ST.x)(this.focused))
      }
      pickPreferred(TT) {
        var UT;
        return null !== (UT = this.layerKey ? this.findRemembered(TT, this.layerKey) : null) && void 0 !== UT ? UT : this.pickInitial(TT, {
          waitForContent: !0
        })
      }
      findRemembered(TT, UT) {
        return this.memory.has(UT) ? this.memory.recall(UT, this.getEnabledCandidates(TT)) : null
      }
      getHandoff() {
        var TT, UT, mT;
        const WT = null !== (TT = this.focused) && void 0 !== TT && TT.isConnected ? this.focused : null,
          zT = null !== (UT = this.layerRoot) && void 0 !== UT && UT.isConnected ? this.layerRoot : null;
        return {
          point: WT ? (0, ST.x)(WT) : null !== (mT = this.lastFocusedCentre) && void 0 !== mT ? mT : this.getLayerStartPoint(zT),
          element: WT,
          direction: null
        }
      }
      getLayerStartPoint(TT) {
        if (!TT) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const UT = this.pickInitial(TT, {
          includeDisabled: !0
        });
        return (0, ST.x)(null !== UT && void 0 !== UT ? UT : TT)
      }
      takeOver(TT, UT, mT) {
        const {
          element: WT,
          direction: zT,
          point: MT
        } = UT, gT = WT instanceof HTMLElement && (0, AT.s)(WT, TT) ? WT : null;
        if (!zT) {
          const UT = this.focused;
          return gT ? this.setFocus(gT, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(TT, MT), void(this.focused && this.focused === UT && this.focused.isConnected && DW(null, this.focused, (0, ST.x)(this.focused)))
        }
        if (this.dpadRepeats.get(zT).update(!0, mT), gT) return this.setFocus(gT, {
          scroll: !1,
          byUser: !0
        }), void this.move(TT, zT, mT, !0);
        const nT = this.getEnabledCandidates(TT),
          HT = nT.map(oW),
          kT = im(new DOMRect(MT.x, MT.y, 0, 0), HT, zT),
          jT = kT >= 0 ? kT : Jm(MT, HT);
        this.setFocus(jT >= 0 ? nT[jT] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      focusNearest(TT, UT) {
        const mT = this.getEnabledCandidates(TT),
          WT = Jm(UT, mT.map(oW));
        this.setFocus(WT >= 0 ? mT[WT] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      pickDefault(TT) {
        let {
          includeDisabled: UT = !1,
          exclude: mT = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const WT = [...TT.querySelectorAll(KW)].filter((WT => (null === mT || void 0 === mT || !mT.has(WT)) && (UT ? (0, AT.w)(WT, TT) : (0, AT.s)(WT, TT)))),
          zT = FW(WT.map(QW));
        return zT >= 0 ? WT[zT] : null
      }
      pickNewAreaStart(TT, UT) {
        const mT = [...TT.querySelectorAll(EW)].filter(AT.r);
        for (const WT of [...(0, AT.k)(TT), ...mT]) {
          if (UT.has(WT)) continue;
          const TT = this.getEnabledCandidates(WT),
            mT = FW(TT.map(QW));
          if (mT >= 0) return TT[mT]
        }
        return null
      }
      pickInitial(TT) {
        let {
          includeDisabled: UT = !1,
          waitForContent: mT = !1,
          enteredAtMs: WT = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zT = this.pickDefault(TT, {
          includeDisabled: UT
        });
        if (zT) return zT;
        const MT = TT => UT ? (0, AT.h)(TT) : this.getEnabledCandidates(TT);
        let gT = [];
        for (const LT of (0, AT.k)(TT))
          if (gT = MT(LT), gT.length > 0) break;
        if (0 === gT.length) {
          if (mT && performance.now() - WT < 1e4 && (0, AT.o)(TT)) return null;
          gT = MT(TT)
        }
        const nT = gT.map(oW),
          HT = IT(null),
          kT = gT.filter(((TT, UT) => QT(nT[UT], HT))),
          jT = kT.length > 0 ? kT : gT,
          lT = FW(jT.map(QW));
        return lT >= 0 ? jT[lT] : null
      }
      validateFocus(TT, UT) {
        if (this.pendingFocus) {
          var mT, WT;
          const zT = this.pendingFocus.find();
          if (zT && (0, AT.s)(zT, TT.root)) return this.pendingFocus = null, void this.setFocus(zT, {
            byUser: !0
          });
          UT > this.pendingFocus.untilMs && (null === (mT = (WT = this.pendingFocus).holdWhile) || void 0 === mT || !mT.call(WT)) && (this.pendingFocus = null)
        }
        const zT = this.focused,
          MT = !!zT && (0, AT.s)(zT, TT.root);
        if (!(!MT && zT && zT === this.lastActivated && UT - this.lastActivatedAtMs < 5e3 && TT.root.contains(zT) && (0, AT.r)(zT) && (0, AT.t)(zT))) {
          if (!MT && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = UT, void this.restoreLayerFocus(TT.root, !0);
          if ((!MT || !this.movedInLayer && !this.scrolledInLayer) && !(UT - this.lastRefocusCheckMs < (MT ? 200 : 50)))
            if (this.lastRefocusCheckMs = UT, MT) {
              const mT = UT - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(TT.root) : null,
                WT = null !== mT && void 0 !== mT ? mT : this.restoredFromMemory ? null : this.pickDefault(TT.root);
              WT && WT !== zT && this.setFocus(WT)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const UT = this.pendingFocus;
                return this.focusNearest(TT.root, this.lastFocusedCentre), void(this.pendingFocus = UT)
              }
              this.setFocus(this.pickPreferred(TT.root))
            }
        }
      }
      handleButtons(TT, UT) {
        if (TT.wasPressed((0, jT.i)("menuToggleCursor"))) return OW(this.getHandoff()), !0;
        if (TT.wasPressed((0, jT.i)("menuBack"))) {
          const TT = (0, ST.n)(UT.root);
          return TT ? this.setFocus(TT, {
            byUser: !0
          }) : Sm(this, UT.root) || ((0, ST.g)(UT.root) ? this.returnToOpener(UT.root) : this.backToStrip(UT.root) || LW()), !0
        }
        const mT = (0, jT.i)("menuConfirm");
        var WT, zT;
        TT.wasPressed(mT) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (WT = null === (zT = this.focused) || void 0 === zT ? void 0 : zT.getAttribute("data-pad-repeat")) && void 0 !== WT ? WT : null, this.confirmRepeated = TT.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (TT.wasReleased(mT)) {
          const TT = this.confirmPressedOn;
          if (this.confirmPressedOn = null, TT && !this.confirmRepeated && TT === this.focused && TT.isConnected && !(0, AT.t)(TT)) {
            const mT = TT.matches("[data-pad-tab]") ? TT.closest(NW) : null;
            mT ? this.enterTab(TT, mT, UT.root, performance.now()) : this.activate(TT)
          }
          return !0
        }
        return this.repeatConfirm(TT, mT), TW(this, TT, UT)
      }
      repeatConfirm(TT, UT) {
        const mT = this.confirmPressedOn;
        mT && null !== this.confirmRepeatKey && TT.isHeld(UT) && (mT === this.focused && mT.isConnected && !(0, AT.t)(mT) && mT.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? mT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(mT)) : this.confirmRepeatKey = null)
      }
      backToStrip(TT) {
        const UT = this.focused;
        if (!(0, LT.k)().menuBackToCategories) return !1;
        const mT = null !== UT && void 0 !== UT && UT.isConnected ? this.tabStripNav.backToStrip(UT, this.getEnabledCandidates(TT), TT) : null;
        return mT && this.setFocus(mT, {
          byUser: !0
        }), null !== mT
      }
      returnToOpener(TT) {
        const UT = this.lastActivatedKey;
        UT && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var mT;
          return null !== (mT = this.getEnabledCandidates(TT).find((TT => (0, ST.z)(TT) === UT))) && void 0 !== mT ? mT : null
        })))
      }
      activate(TT) {
        var UT;
        if ((0, yW.e)(TT) || (0, ST.D)(TT)) return;
        this.lastActivatedKey = null !== (UT = (0, ST.z)(TT)) && void 0 !== UT ? UT : this.lastActivatedKey, this.lastActivated = TT, this.lastActivatedAtMs = performance.now(), this.rememberFocus(TT);
        const mT = this.layerRoot;
        if (mT) {
          const UT = new Set(mT.querySelectorAll(KW)),
            WT = new Set(mT.querySelectorAll(`[data-pad-initial-area], ${EW}`)),
            zT = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var zT;
            return (0, AT.s)(TT, mT) ? null : null !== (zT = this.pickDefault(mT, {
              exclude: UT
            })) && void 0 !== zT ? zT : this.pickNewAreaStart(mT, WT)
          }), 5e3, (() => TT.isConnected && (0, AT.t)(TT) && performance.now() - zT < 6e4))
        }(0, ST.d)(TT), (0, ST.k)(TT)
      }
      handleDirections(TT, UT, mT, WT) {
        const zT = ym(UT.layer.kind) ? (0, jT.i)("chat") : null;
        for (const nT of BT.y) {
          this.dpadRepeats.get(nT).update(TT.isHeld(nT), mT) && (nT !== zT || TT.wasPressed(nT)) && this.move(UT.root, nT, mT, !0)
        }
        const MT = WT ? (0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          gT = this.stickRepeat.update((0, BT.fb)(MT), mT);
        if (gT && this.move(UT.root, gT, mT, !0), this.retryMove && mT >= this.retryMove.atMs) {
          const {
            direction: TT
          } = this.retryMove;
          this.retryMove = null, this.move(UT.root, TT, mT, !1)
        }
      }
      move(TT, UT, mT, WT) {
        var zT;
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (zT = this.tabOpenWait) || void 0 === zT ? void 0 : zT.wait) && UT === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const gT = this.focused;
        if (!gT || !gT.isConnected) {
          const UT = this.pickInitial(TT);
          return void(UT && this.setFocus(UT, {
            byUser: !0
          }))
        }
        const nT = "Left" === UT || "Right" === UT,
          HT = nT ? (0, yW.e)(gT) : null;
        if (HT) return void HT.adjust("Left" === UT ? -1 : 1);
        const kT = TT => null !== TT.closest("[data-pad-friends-column]"),
          jT = kT(gT),
          lT = oW(gT),
          LT = nT || gT.closest(NW) ? null : (TT => {
            const UT = new Map;
            return mT => {
              const WT = mT.closest(NW);
              if (!WT) return !1;
              let zT = UT.get(WT);
              if (void 0 === zT) {
                const mT = oW(WT);
                zT = qm(TT, mT) && (mT.right <= TT.left || mT.left >= TT.right), UT.set(WT, zT)
              }
              return zT
            }
          })(lT),
          pT = null !== gT.closest(GW),
          BT = this.getEnabledCandidates(TT).filter((TT => TT !== gT && (nT || kT(TT) === jT) && !(null !== LT && void 0 !== LT && LT(TT)) && (pT || !TT.closest(GW)))),
          ZT = BT.map(oW),
          cT = dT(gT, "y", TT),
          vT = IT(cT);
        if (!MT && !QT(lT, vT)) {
          const TT = BT.filter(((TT, UT) => QT(ZT[UT], vT)));
          if (TT.length > 0) {
            const UT = {
              x: vT.left + vT.width / 2,
              y: vT.top + vT.height / 2
            };
            return void this.setFocus(TT[Jm(UT, TT.map(oW))], {
              byUser: !0
            })
          }
        }
        const fT = nT ? ((TT, UT, mT) => {
            const WT = oW(TT),
              zT = TT.closest(NW),
              MT = zT ? oW(zT) : null;
            return UT.map(((UT, gT) => {
              const nT = mT[gT];
              if (nT.bottom > WT.top && nT.top < WT.bottom) return !0;
              const HT = UT.closest(NW);
              if (zT && MT) return HT !== zT && (null !== HT || nT.bottom <= MT.top || nT.top >= MT.bottom);
              if (HT) return !qm(WT, oW(HT));
              let kT = TT;
              for (let mT = TT.parentElement; mT && !mT.contains(UT); mT = mT.parentElement) kT = mT;
              const jT = oW(kT);
              return nT.right > jT.left && nT.left < jT.right
            }))
          })(gT, BT, ZT) : void 0,
          qT = nT && !gT.closest(NW) ? (TT => TT.map((TT => !TT.closest(IW))))(BT) : void 0,
          iT = ((TT, UT) => {
            const mT = [];
            for (let zT = TT; zT; zT = zT.parentElement) mT.push(zT);
            const WT = new Map;
            return mT.forEach(((TT, UT) => {
              WT.set(TT, mT.length - 1 - UT)
            })), UT.map((TT => {
              for (let UT = TT; UT; UT = UT.parentElement) {
                const TT = WT.get(UT);
                if (void 0 !== TT) return TT
              }
              return -1
            }))
          })(gT, BT),
          bT = nT ? "x" : "y",
          OT = dT(gT, bT, TT);
        let eT = im(lT, ZT, UT, iT, fT, qT);
        if (eT >= 0 && OT && !OT.contains(BT[eT])) {
          const TT = BT.flatMap(((TT, UT) => OT.contains(TT) ? [UT] : [])),
            mT = UT => UT && TT.map((TT => UT[TT])),
            WT = im(lT, TT.map((TT => ZT[TT])), UT, TT.map((TT => iT[TT])), mT(fT), mT(qT));
          eT = WT >= 0 ? TT[WT] : eT
        }
        if (eT >= 0) return void this.moveTo(gT, BT[eT], BT, TT, UT, MT);
        if (!WT) return;
        const YT = "Right" === UT || "Down" === UT ? 1 : -1;
        if (OT && yT(OT, bT, YT)) {
          const TT = "y" === bT ? OT.clientHeight : OT.clientWidth;
          XT(OT, bT, YT * TT * .5), this.retryMove = {
            direction: UT,
            atMs: mT + 80
          }
        }
      }
      moveTo(TT, UT, mT, WT, zT, MT) {
        const gT = this.tabStripNav.findTabContent(TT, UT, mT);
        gT && "true" !== TT.dataset.padSelected ? this.openTab(TT, gT, WT, zT) : MT && !gT || this.setFocus(this.tabStripNav.redirect(TT, UT, mT, WT), {
          byUser: !0
        })
      }
      openTab(TT, UT, mT, WT) {
        const zT = UT.parentElement;
        (0, ST.d)(TT), this.focusWhenFound((() => "true" !== TT.dataset.padSelected ? null : UT.isConnected ? this.tabStripNav.pickContentStart(UT, this.getEnabledCandidates(mT), mT) : zT ? this.tabStripNav.pickReplacedContentStart(TT, zT, this.getEnabledCandidates(mT), mT) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: WT
        }
      }
      enterTab(TT, UT, mT, WT) {
        this.move(mT, (TT => {
          const UT = [...TT.querySelectorAll(VW)].filter((UT => UT.closest(PW) === TT));
          if (UT.length >= 2) {
            const TT = UT[0].getBoundingClientRect(),
              mT = UT[1].getBoundingClientRect();
            return Math.abs(mT.top - TT.top) > Math.abs(mT.left - TT.left) ? "Right" : "Down"
          }
          const mT = TT.getBoundingClientRect();
          return mT.height > mT.width ? "Right" : "Down"
        })(UT), WT, !1, !0), this.focused !== TT || this.pendingFocus || this.activate(TT)
      }
      handleScroll(TT, UT) {
        const mT = (0, BT.j)(TT.rightStick, .2);
        if (0 === mT.x && 0 === mT.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const WT = TT.dtMs / 1e3;
        for (const MT of ["x", "y"]) {
          var zT;
          const TT = mT[MT];
          if (0 === TT) continue;
          const gT = null !== (zT = dT(this.focused, MT, UT.root)) && void 0 !== zT ? zT : tT(UT.root, MT);
          if (!gT) continue;
          const nT = Math.sign(TT) * TT * TT * 1500 * WT + this.scrollRemainder[MT],
            HT = Math.trunc(nT);
          this.scrollRemainder[MT] = nT - HT, 0 !== HT && (XT(gT, MT, HT), this.scrolledInLayer = !0)
        }
      }
    };
    var Uz = mT(8344);
    var mz = mT(8859);
    const Wz = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      zz = {
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
          ...Wz,
          minIntervalMs: 1e3
        },
        preview: {
          ...Wz,
          minIntervalMs: 0
        }
      };
    const Mz = new class {
        constructor(TT) {
          this.deps = TT, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = TT => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", TT))
          }
        }
        play(TT, UT) {
          const mT = zz[TT];
          if (!this.deps.isVibrationOn() || mT.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const WT = this.lastPlayedMs[TT];
          if (void 0 !== WT && UT - WT < mT.minIntervalMs) return !1;
          const zT = this.deps.getActuator();
          if (!zT) return !1;
          this.lastPlayedMs[TT] = UT;
          const {
            duration: MT,
            strongMagnitude: gT,
            weakMagnitude: nT
          } = mT;
          try {
            zT.playEffect("dual-rumble", {
              duration: MT,
              strongMagnitude: gT,
              weakMagnitude: nT
            }).catch(this.logFailure)
          } catch (HT) {
            this.logFailure(HT)
          }
          return !0
        }
      }({
        getActuator: () => (TT => {
          const UT = null === TT || void 0 === TT ? void 0 : TT.vibrationActuator;
          return "function" === typeof(null === UT || void 0 === UT ? void 0 : UT.playEffect) ? UT : null
        })(gT.e.getActiveGamepad()),
        isVibrationOn: () => (0, LT.k)().vibration,
        isPadInUse: pT.m
      }),
      gz = TT => {
        Mz.play(TT, performance.now())
      };
    var nz = mT(8348),
      Hz = mT(3047),
      kz = mT(115),
      jz = mT(44),
      lz = mT(696);
    class Lz {
      constructor(TT) {
        this.deps = TT
      }
      check() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const UT = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!UT) return "skipped";
        const mT = TT ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === mT || this.deps.readReportedVisitId() === mT ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(mT), this.deps.Gp(UT, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const pz = "controllerUsageReportedVisit";
    var Bz = mT(1457),
      Zz = mT(1863),
      cz = mT(681),
      vz = mT(1567),
      fz = mT(1345);
    const qz = TT => ({
        translationKey: `controller:${TT}`
      }),
      iz = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: qz("padButtonView"),
        Menu: qz("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: qz("padButtonDpadUp"),
        Down: qz("padButtonDpadDown"),
        Left: qz("padButtonDpadLeft"),
        Right: qz("padButtonDpadRight"),
        Home: qz("padButtonHome"),
        LeftStick: qz("padButtonLeftStick"),
        RightStick: qz("padButtonRightStick")
      },
      bz = {
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
          View: qz("padButtonCreate"),
          Menu: qz("padButtonOptions")
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
      Oz = (TT, UT) => {
        var mT;
        const WT = null !== (mT = bz[TT][UT]) && void 0 !== mT ? mT : iz[UT];
        return "string" === typeof WT ? WT : (0, zT.v)(fz.f.get().getCurrentLanguageCode(), WT.translationKey)
      },
      ez = TT => {
        let {
          glyph: UT,
          family: mT,
          className: WT
        } = TT;
        const zT = (0, pT.D)(),
          MT = null !== mT && void 0 !== mT ? mT : zT,
          gT = (0, nz.g)(MT, UT);
        return (0, VT.jsx)("span", {
          className: PT()("ControllerGlyph", WT),
          role: "img",
          "aria-label": Oz(MT, UT),
          style: {
            "--pad-glyph-mask": `url(${gT})`,
            "--pad-glyph-aspect": (0, nz.d)(MT, UT)
          }
        })
      };
    var Yz = mT(2023);
    const Jz = TT => {
      let {
        action: UT
      } = TT;
      const {
        t: mT
      } = (0, zT.z)();
      switch (UT.kind) {
        case "reload":
          return (0, VT.jsx)("span", {
            children: mT("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, VT.jsx)(Yz.e, {
            text: UT.description ? [{
              icon: UT.icon
            }, ` ${UT.description}`] : [{
              icon: UT.icon
            }]
          });
        case "touchButton":
          return (0, VT.jsx)(Yz.e, {
            text: UT.label
          })
      }
    };
    var xz = mT(8861);
    const dz = TT => {
      let {
        hold: UT
      } = TT;
      return (0, VT.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${UT.holdMs}ms`
        },
        children: (0, VT.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, UT.id)
    };
    var wz = mT(8880),
      tz = mT(8888),
      az = mT(8892),
      yz = mT(8876);
    const Xz = () => {
        const {
          gameState: TT
        } = (0, HT.h)(["gameState"]), UT = (0, pT.B)(), [WT, zT] = (0, sT.useState)(!1), [MT, gT] = (0, sT.useState)(!1);
        return (0, sT.useEffect)((() => {
          "inGame" === TT && zT(!0)
        }), [TT]), (0, sT.useEffect)((() => {
          if (!WT) return;
          let TT = null,
            UT = !1;
          return (cz.B ? Promise.all([mT.e(73), mT.e(90), mT.e(273), mT.e(191), mT.e(229), mT.e(228), mT.e(89)]).then((() => mT(40666))).then((TT => TT.startWasmPadGameplay)) : Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(98), mT.e(76), mT.e(75), mT.e(74), mT.e(187), mT.e(233), mT.e(78), mT.e(90), mT.e(188), mT.e(227), mT.e(97), mT.e(239), mT.e(230), mT.e(246), mT.e(121), mT.e(215), mT.e(87), mT.e(247), mT.e(77), mT.e(160), mT.e(248), mT.e(229), mT.e(200)]).then((() => mT(40810))).then((TT => TT.startPadGameplay))).then((mT => {
            UT || (TT = mT())
          })).catch((TT => {
            console.error("Pad gameplay failed to load", TT), UT || gT(!0)
          })), () => {
            var mT;
            UT = !0, null === (mT = TT) || void 0 === mT || mT()
          }
        }), [WT]), (0, sT.useEffect)((() => {
          MT && UT && (gT(!1), Bz.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((TT => {
            !0 === TT && (0, Zz.reloadBloxd)()
          })))
        }), [MT, UT]), (0, VT.jsxs)(VT.Fragment, {
          children: [(0, VT.jsx)(Iz, {}), (0, VT.jsx)(Qz, {}), (0, VT.jsx)(sz, {})]
        })
      },
      Iz = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, pT.B)(), {
          gameState: mT,
          isUiHidden: WT
        } = (0, HT.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: MT
        } = (0, LT.n)(), gT = (0, xz.h)(), nT = (0, xz.j)(), [kT, lT] = (0, sT.useState)(az.c);
        return (0, vz.g)(yz.t, lT), !UT || MT || WT || "inGame" !== mT || !gT && !kT ? null : (0, VT.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [gT && (0, VT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, VT.jsx)(ez, {
              glyph: (0, jT.i)("actionButton")
            }), (0, VT.jsx)(Jz, {
              action: gT
            }), nT && (0, VT.jsx)("span", {
              className: "PadActionHintMore",
              children: TT("controller:gameplayActionWheelHint")
            })]
          }), kT && (0, VT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, VT.jsx)(ez, {
              glyph: (0, jT.i)("pickBlock")
            }), (0, VT.jsx)("span", {
              children: TT("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Qz = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, pT.B)(), {
          gameState: mT,
          isUiHidden: WT
        } = (0, HT.h)(["gameState", "isUiHidden"]), [MT, gT] = (0, sT.useState)(wz.c);
        return (0, vz.g)(yz.p, gT), UT && !WT && "inGame" === mT && MT ? (0, VT.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, VT.jsx)("span", {
            children: TT("controller:gameplayDropStack")
          }), (0, VT.jsx)(dz, {
            hold: MT
          })]
        }) : null
      },
      sz = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, pT.B)(), {
          gameState: mT,
          isUiHidden: WT
        } = (0, HT.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: MT
        } = (0, LT.n)(), [gT, nT] = (0, sT.useState)(tz.e);
        return (0, vz.g)(yz.l, nT), UT && !WT && "inGame" === mT && gT ? (0, VT.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!MT && (0, VT.jsx)(ez, {
            glyph: (0, jT.i)("attack")
          }), (0, VT.jsx)("span", {
            children: TT("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Fz = mT(8894),
      Pz = mT(2067),
      Vz = mT(2552),
      uz = mT(8325);
    const Cz = TT => TT && !(0, Fz.d)(Pz.d.get("shopInfo")),
      rz = () => {
        const TT = "inGame" === (0, HT.h)(["gameState"]).gameState;
        return (0, Vz.d)("shopInfo", (() => {
          (0, uz.i)(Cz(TT))
        })), (0, sT.useEffect)((() => {
          (0, uz.i)(Cz(TT))
        }), [TT]), null
      },
      Kz = () => {
        const {
          t: TT
        } = (0, zT.z)(), {
          hideButtonHints: UT
        } = (0, LT.n)();
        (0, pT.D)();
        const mT = (0, PU.k)();
        return (0, sT.useEffect)((() => (() => {
          const TT = lT.e.register({
              name: "inventory",
              isActive: zm.isActive,
              onFrame: zm.onFrame,
              onDeactivate: zm.onDeactivate,
              wakePressActs: zm.wakePressActs
            }),
            UT = TT => {
              zm.noteRealPointer(TT), zm.shouldBlockRealPointer(TT) && TT.stopPropagation()
            };
          for (const gT of Mm) window.addEventListener(gT, UT, !0);
          const mT = (0, oT.j)((() => {
              "inventory" !== lT.e.getActiveConsumerName() && zm.forgetSurface()
            })),
            WT = TT => {
              const UT = TT.target;
              (0, pT.m)() && (0, ET.f)(UT) && UT.closest(bU) && (0, oT.i)() && (0, oT.n)(UT)
            };
          document.addEventListener("focusout", WT, !0);
          const {
            invalidate: zT,
            onScroll: MT
          } = zm.targets;
          return document.addEventListener("scroll", MT, !0), window.addEventListener("resize", zT), () => {
            TT(), mT();
            for (const TT of Mm) window.removeEventListener(TT, UT, !0);
            document.removeEventListener("scroll", MT, !0), document.removeEventListener("focusout", WT, !0), window.removeEventListener("resize", zT), zm.targets.disconnect()
          }
        })()), []), (0, VT.jsxs)(VT.Fragment, {
          children: [(0, VT.jsx)(KT, {
            placer: zm.ring,
            className: "InventorySlotCursorRing"
          }), mT.showing && !UT && (0, VT.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: DT(mT).map((UT => {
              let {
                actions: WT,
                labelKey: zT
              } = UT;
              return (0, VT.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [WT.map((TT => (0, VT.jsx)(ez, {
                  glyph: (0, jT.i)(TT)
                }, TT))), (0, VT.jsx)("span", {
                  children: TT(`controller:${zT}`)
                }), "inventoryDrop" === zT && mT.dropStackHold && (0, VT.jsx)(dz, {
                  hold: mT.dropStackHold
                })]
              }, zT)
            }))
          })]
        })
      },
      Sz = [{
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
      Gz = TT => Array.from(TT).map((TT => ({
        type: "char",
        char: TT,
        width: 1
      }))),
      Nz = function(TT) {
        return {
          type: "command",
          command: TT,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Ez = [Nz("page", 2), Nz("otherPage"), Nz("caretLeft"), Nz("space", 3), Nz("caretRight"), Nz("close", 1.5), Nz("submit", 1.5)],
      hz = [Nz("page", 2), Nz("otherPage"), Nz("caretLeft"), Nz("space", 2), Nz("caretRight"), Nz("newline"), Nz("close", 1.5), Nz("submit", 1.5)],
      Dz = [
        [...Gz("1234567890"), Nz("backspace")], Gz("qwertyuiop/"), Gz("asdfghjkl'?"), [Nz("shift", 2), ...Gz("zxcvbnm,.")]
      ],
      oz = [
        [...Gz("1234567890"), Nz("backspace")], Gz("!@#$%^&*()/"), Gz('-_=+[]{};:"'), Gz("~`|\\<>'\u20ac\xa3,.")
      ],
      Az = {
        letters: Dz,
        accents: [
          [...Gz("1234567890"), Nz("backspace")], Gz("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Gz("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Nz("shift", 2), ...Gz("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: oz
      },
      Rz = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      TM = (TT, UT) => "letters" === TT ? UT ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === TT ? "symbols" : "accents"
      },
      UM = function(TT, UT) {
        const mT = ((TT, UT) => [...Az[TT], UT ? hz : Ez])(TT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === UT) return mT;
        const WT = Math.min(2, mM(mT[0]) / UT);
        return [Array.from({
          length: UT
        }, ((TT, UT) => ({
          type: "phrase",
          phraseIndex: UT,
          width: WT
        }))), ...mT]
      },
      mM = TT => TT.reduce(((TT, UT) => TT + UT.width), 0),
      WM = TT => Math.max(...TT.map(mM)),
      zM = (TT, UT) => {
        const mT = TT[UT.row];
        let WT = (WM(TT) - mM(mT)) / 2;
        for (let zT = 0; zT < UT.col; zT++) WT += mT[zT].width;
        return WT + mT[UT.col].width / 2
      },
      MM = (TT, UT, mT) => {
        let WT = 0,
          zT = 1 / 0;
        for (let MT = 0; MT < TT[UT].length; MT++) {
          const gT = Math.abs(zM(TT, {
            row: UT,
            col: MT
          }) - mT);
          gT < zT - 1e-9 && (WT = MT, zT = gT)
        }
        return WT
      },
      gM = (TT, UT) => {
        const mT = Math.max(0, Math.min(TT.length - 1, UT.row));
        return {
          row: mT,
          col: Math.max(0, Math.min(TT[mT].length - 1, UT.col))
        }
      },
      nM = (TT, UT, mT) => "once" === TT && UT - mT <= 400 ? "caps" : "off" === TT ? "once" : "off",
      HM = (TT, UT) => "once" === TT && (TT => TT.toLowerCase() !== TT.toUpperCase())(UT) ? "off" : TT,
      kM = (TT, UT, mT) => {
        if ("symbols" === UT || "off" === mT) return TT;
        const WT = TT.toUpperCase();
        return 1 === WT.length ? WT : TT
      };
    var jM = mT(8787);
    const lM = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const LM = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(TT) {
          return !(TT - this.lastSendMs < 2e3) && (this.lastSendMs = TT, !0)
        }
      },
      pM = {
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
      BM = ["rg", "nameTag"],
      ZM = TT => {
        const UT = TT.target instanceof HTMLTextAreaElement && !BM.includes(TT.kind);
        return UM(TT.page, "chat" === TT.kind ? lM.length : 0, UT)
      },
      cM = TT => {
        const UT = TT.getBoundingClientRect(),
          mT = window.innerHeight,
          WT = UT.top + UT.height / 2 < mT / 2 ? "bottom" : "top",
          zT = "bottom" === WT ? mT - UT.bottom - 6 : UT.top - 6;
        return {
          placement: WT,
          maxHeightPx: Math.min(.46 * mT, Math.max(.3 * mT, zT))
        }
      },
      vM = TT => {
        (0, wm.i)(TT) ? (0, wm.d)().close(): (Tz.noteChosenStop(TT), TT.blur())
      };
    class fM {
      constructor(TT) {
        this.host = TT, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(TT, UT) {
        this.phraseTexts = TT, this.phrasesFill = UT
      }
      pressKey(TT) {
        const UT = this.host.getState(),
          mT = ZM(UT),
          WT = mT[TT.row][TT.col];
        this.host.setState({
          ...UT,
          focus: TT,
          preferredX: zM(mT, TT)
        }), "char" === WT.type ? this.typeChar(WT.char) : "command" === WT.type ? this.runCommand(WT.command) : this.sendPhrase(WT.phraseIndex)
      }
      runCommand(TT) {
        const UT = this.host.getState();
        switch (TT) {
          case "backspace":
            (0, ET.b)(UT.target);
            break;
          case "space":
            (0, ET.e)(UT.target, " ");
            break;
          case "newline":
            (0, ET.e)(UT.target, "\n");
            break;
          case "caretLeft":
            (0, ET.h)(UT.target, -1);
            break;
          case "caretRight":
            (0, ET.h)(UT.target, 1);
            break;
          case "shift": {
            const TT = performance.now();
            this.host.setState({
              ...UT,
              shift: nM(UT.shift, TT, this.lastShiftPressMs)
            }), this.lastShiftPressMs = TT;
            break
          }
          case "page":
          case "otherPage": {
            const mT = TM(UT.page, UT.accentsFirst)[TT];
            this.host.setState({
              ...UT,
              page: mT,
              focus: gM(ZM({
                ...UT,
                page: mT
              }), UT.focus)
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
            (0, wm.i)(UT.target) && (0, wm.d)().selectNextChannel()
        }
      }
      submit() {
        var TT, UT;
        const {
          target: mT
        } = this.host.getState();
        this.host.hide(), (0, wm.i)(mT) ? (0, wm.d)().submit() : (Tz.noteChosenStop(mT), null === (TT = (UT = (0, wm.e)(mT)).submit) || void 0 === TT || TT.call(UT), document.activeElement === mT && mT.blur())
      }
      close() {
        const {
          target: TT
        } = this.host.getState();
        this.host.hide(), vM(TT)
      }
      typeChar(TT) {
        const {
          target: UT,
          page: mT,
          shift: WT
        } = this.host.getState();
        (0, ET.e)(UT, kM(TT, mT, WT)), this.host.setState({
          ...this.host.getState(),
          shift: HM(WT, TT)
        })
      }
      sendPhrase(TT) {
        if (this.phrasesFill) {
          const {
            target: UT
          } = this.host.getState(), mT = this.phraseTexts[TT];
          mT && (UT.setSelectionRange(0, UT.value.length), (0, ET.e)(UT, mT))
        } else LM.claim(performance.now()) && (this.host.hide(), (0, wm.d)().sendLine(this.phraseTexts[TT]))
      }
    }
    var qM = mT(8804);
    const iM = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      bM = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class OM {
      constructor(TT, UT) {
        this.host = TT, this.editor = UT, this.lastDirection = null, this.navRepeat = new BT.d((0, ZT.e)(iM)), this.commandRepeats = new Map(Sz.filter((TT => {
          let {
            repeats: UT
          } = TT;
          return UT
        })).map((TT => {
          let {
            command: UT
          } = TT;
          return [UT, (0, ZT.e)(bM)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const TT of this.commandRepeats.values()) TT.reset()
      }
      onVisibleFrame(TT) {
        const UT = performance.now();
        for (const {
            command: zT,
            action: MT
          }
          of Sz) {
          const mT = (0, jT.i)(MT),
            WT = this.commandRepeats.get(zT);
          if ((WT ? WT.update(TT.isHeld(mT), UT) : TT.wasPressed(mT)) && (this.editor.runCommand(zT), !this.host.getState().visible)) return
        }
        if (TT.wasPressed((0, jT.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const mT = this.readNavDirection(TT);
        this.lastDirection = mT;
        const WT = this.navRepeat.update(mT, UT);
        WT && this.navigate(WT)
      }
      onHiddenFrame(TT, UT) {
        var mT;
        if (TT.wasPressed((0, jT.i)("keyboardClose"))) return void vM(UT);
        const WT = (0, jT.i)("keyboardType");
        if (TT.wasPressed(WT)) return lT.e.consumeButton(WT), void this.host.open(UT);
        const zT = this.readNavDirection(TT),
          MT = null !== zT && zT !== this.lastDirection;
        if (this.lastDirection = zT, !MT || (0, wm.i)(UT)) return;
        const gT = (null === (mT = lW()) || void 0 === mT ? void 0 : mT.root.contains(UT)) || null !== UT.closest(".EntireInventoryWrapper");
        vM(UT), gT && lT.e.handOffHeldInput()
      }
      navigate(TT) {
        const UT = this.host.getState();
        if ("Up" === TT && 0 === UT.focus.row && "chat" === UT.kind) return (0, wm.d)().stepHistory(), void this.host.setState({
          ...UT
        });
        const mT = ((TT, UT, mT, WT) => {
          if ("Left" === mT || "Right" === mT) {
            const WT = TT[UT.row].length,
              zT = (UT.col + ("Right" === mT ? 1 : -1) + WT) % WT,
              MT = {
                row: UT.row,
                col: zT
              };
            return {
              pos: MT,
              preferredX: zM(TT, MT)
            }
          }
          const zT = (UT.row + ("Down" === mT ? 1 : -1) + TT.length) % TT.length;
          return {
            pos: {
              row: zT,
              col: MM(TT, zT, WT)
            },
            preferredX: WT
          }
        })(ZM(UT), UT.focus, TT, UT.preferredX);
        this.host.setState({
          ...UT,
          focus: mT.pos,
          preferredX: mT.preferredX
        })
      }
      readNavDirection(TT) {
        for (const UT of BT.y)
          if (TT.isHeld(UT)) return UT;
        return (0, BT.fb)((0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone))
      }
    }
    const eM = ["Up", "Down", "Left", "Right"],
      YM = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const JM = new class {
      constructor() {
        this.state = pM, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new fM(this), this.padInput = new OM(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(TT) {
        const UT = TT.visible !== this.state.visible;
        this.state = TT;
        for (const mT of this.listeners) mT();
        UT && kT.j.EZ(qM.c, TT.visible)
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      install() {
        const TT = lT.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, ET.f)(document.activeElement),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: TT => eM.includes(TT) || !this.state.visible && TT === (0, jT.i)("keyboardType")
          }),
          UT = TT => {
            const UT = TT.target;
            (0, ET.f)(UT) && (UT === this.pendingChatInput || (0, pT.m)() ? this.open(UT) : this.state.visible && UT !== this.state.target && (this.ownedField = null, this.hide()))
          },
          mT = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          WT = TT => {
            TT.isTrusted && this.state.visible && (TT => !TT.repeat && !YM.has(TT.key) && !(0, jM.e)(TT.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(TT.key))(TT) && this.hide()
          },
          zT = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...cM(this.state.target)
            })
          };
        document.addEventListener("focusin", UT, !0), document.addEventListener("focusout", mT, !0), window.addEventListener("keydown", WT, !0), window.addEventListener("resize", zT);
        const MT = kT.j.subscribe(yz.c, (() => {
            this.openChat()
          })),
          gT = kT.j.subscribe(qM.g, (TT => {
            this.openForField(TT)
          }));
        return () => {
          TT(), document.removeEventListener("focusin", UT, !0), document.removeEventListener("focusout", mT, !0), window.removeEventListener("keydown", WT, !0), window.removeEventListener("resize", zT), kT.j.unsubscribe(MT), kT.j.unsubscribe(gT), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const TT = (0, wm.d)();
        TT ? document.activeElement !== TT.input ? (this.clearPendingChat(), this.pendingChatInput = TT.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), TT.open()) : this.open(TT.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(TT) {
        (0, ET.f)(TT) ? (document.activeElement !== TT && TT.focus(), document.activeElement === TT && this.open(TT)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", TT)
      }
      open(TT) {
        var UT;
        if (this.clearPendingChat(), this.ownedField = TT, this.state.visible && this.state.target === TT) return;
        this.restoreInputMode(), (0, ET.i)(TT), this.savedInputMode = TT.getAttribute("inputmode"), TT.setAttribute("inputmode", "none");
        const mT = {
          ...pM,
          visible: !0,
          target: TT,
          kind: (0, wm.i)(TT) ? "chat" : null !== (UT = (0, wm.e)(TT).kind) && void 0 !== UT ? UT : null,
          accentsFirst: (WT = fz.f.get().getCurrentLanguageCode(), Rz.has(WT)),
          ...cM(TT)
        };
        var WT;
        const zT = ZM(mT),
          MT = ((TT, UT) => {
            for (let mT = 0; mT < TT.length; mT++) {
              const WT = TT[mT].findIndex((TT => "char" === TT.type && TT.char === UT));
              if (-1 !== WT) return {
                row: mT,
                col: WT
              }
            }
            return null
          })(zT, "q");
        this.padInput.reset(), this.setState({
          ...mT,
          focus: MT,
          preferredX: zM(zT, MT)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(pM))
      }
      onFrame(TT) {
        if (this.releaseLostField()) return;
        const UT = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(TT) : (0, ET.f)(UT) && this.padInput.onHiddenFrame(TT, UT)
      }
      releaseLostField() {
        const TT = this.ownedField;
        return !(null === TT || TT.isConnected && document.activeElement === TT) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: TT
        } = this.state;
        TT && (null === this.savedInputMode ? TT.removeAttribute("inputmode") : TT.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var xM = mT(3732);
    const dM = new Map(Sz.map((TT => {
        let {
          command: UT,
          action: mT
        } = TT;
        return [UT, mT]
      }))),
      wM = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      tM = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        rg: "controller:keyboardTargetBookTitle"
      },
      aM = TT => {
        const UT = (() => {
          const [, TT] = (0, sT.useReducer)((TT => TT + 1), 0);
          return TT
        })();
        (0, sT.useEffect)((() => {
          if (!TT) return;
          const mT = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const zT of mT) TT.addEventListener(zT, UT);
          document.addEventListener("selectionchange", UT);
          const WT = new MutationObserver(UT);
          return WT.observe(TT, {
            attributeFilter: ["placeholder"]
          }), () => {
            WT.disconnect();
            for (const WT of mT) TT.removeEventListener(WT, UT);
            document.removeEventListener("selectionchange", UT)
          }
        }), [TT, UT])
      },
      yM = TT => {
        TT.preventDefault()
      },
      XM = TT => {
        "mouse" !== TT.pointerType && TT.preventDefault()
      },
      IM = () => {
        var TT;
        const {
          t: UT
        } = (0, zT.z)(), mT = (() => {
          const [TT, UT] = (0, sT.useState)(JM.getState());
          return (0, sT.useEffect)((() => JM.subscribe((() => {
            UT(JM.getState())
          }))), []), TT
        })(), WT = (0, pT.B)(), MT = (0, sT.useRef)(null);
        (0, LT.n)(), (0, pT.D)(), (0, sT.useEffect)((() => {
          const TT = JM.install(),
            UT = null;
          return () => {
            TT(), null === UT || void 0 === UT || UT()
          }
        }), []);
        const gT = (0, sT.useMemo)((() => lM.map((TT => UT(TT)))), [UT]),
          nT = mT.visible && "chat" === mT.kind ? mT.target : null;
        aM(nT);
        const HT = null !== (TT = null === nT || void 0 === nT ? void 0 : nT.value) && void 0 !== TT ? TT : "",
          kT = ((TT, UT, mT) => {
            if (!TT.startsWith("/")) return [];
            const WT = [];
            for (let zT = UT.length - 1; zT >= 0 && WT.length < mT; zT--) {
              const mT = UT[zT].trim();
              mT.startsWith(TT) && mT !== TT && !WT.includes(mT) && WT.push(mT)
            }
            return WT
          })(HT, HT.startsWith("/") ? (0, xM.d)() : [], lM.length),
          lT = HT.startsWith("/"),
          BT = lT ? lM.map(((TT, UT) => {
            var mT;
            return null !== (mT = kT[UT]) && void 0 !== mT ? mT : ""
          })) : gT;
        if ((0, sT.useEffect)((() => {
            JM.editor.setPhraseRow(BT, lT)
          })), (0, sT.useEffect)((() => {
            const TT = MT.current;
            if (TT) return TT.addEventListener("touchstart", yM, {
              passive: !1
            }), () => {
              TT.removeEventListener("touchstart", yM)
            }
          }), [mT.visible]), !mT.visible) return null;
        const ZT = ZM(mT),
          cT = WM(ZT),
          vT = TT => "char" === TT.type ? kM(TT.char, mT.page, mT.shift) : "phrase" === TT.type ? BT[TT.phraseIndex] : (TT => {
            switch (TT) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === mT.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return wM[TM(mT.page, mT.accentsFirst)[TT]];
              case "space":
                return UT("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return UT("chat" === mT.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(TT.command),
          fT = TT => {
            JM.editor.pressKey(TT)
          };
        return (0, VT.jsxs)("div", {
          ref: MT,
          className: PT()(wm.n, "top" === mT.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: mT.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": ZT.length,
            "--pad-keyboard-height": `${mT.maxHeightPx}px`
          },
          onPointerDown: XM,
          onMouseDown: yM,
          children: [(0, VT.jsx)(QM, {
            target: mT.target,
            label: mT.kind ? UT(tM[mT.kind]) : mT.target.placeholder || UT("controller:keyboardTargetText")
          }), (0, VT.jsx)("div", {
            className: "PadKeyboardRows",
            children: ZT.map(((TT, UT) => (0, VT.jsx)("div", {
              className: PT()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === TT[0].type
              }),
              children: TT.map(((TT, zT) => {
                const MT = WT && mT.focus.row === UT && mT.focus.col === zT,
                  gT = "command" === TT.type ? dM.get(TT.command) : void 0;
                return (0, VT.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: TT.width / cT * 100 + "%"
                  },
                  children: (0, VT.jsxs)("div", {
                    className: PT()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: MT,
                      PadKeyboardKeyCommand: "command" === TT.type,
                      PadKeyboardKeyPhrase: "phrase" === TT.type,
                      PadKeyboardKeyActive: "command" === TT.type && "shift" === TT.command && "off" !== mT.shift,
                      PadKeyboardKeySubmit: "command" === TT.type && "submit" === TT.command
                    }),
                    role: "button",
                    onClick: () => {
                      fT({
                        row: UT,
                        col: zT
                      })
                    },
                    onTouchEnd: TT => {
                      var mT, WT;
                      TT.preventDefault(), mT = TT.changedTouches[0], WT = TT.currentTarget.getBoundingClientRect(), mT && mT.clientX >= WT.left && mT.clientX <= WT.right && mT.clientY >= WT.top && mT.clientY <= WT.bottom && fT({
                        row: UT,
                        col: zT
                      })
                    },
                    children: [(0, VT.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: vT(TT)
                    }), WT && gT && (0, VT.jsx)(ez, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, jT.i)(gT)
                    })]
                  })
                }, zT)
              }))
            }, UT)))
          })]
        })
      },
      QM = TT => {
        let {
          target: UT,
          label: mT
        } = TT;
        aM(UT);
        const WT = (0, sT.useRef)(null),
          zT = (0, sT.useRef)(null),
          MT = UT instanceof HTMLTextAreaElement;
        (0, sT.useLayoutEffect)((() => {
          const TT = WT.current,
            UT = zT.current;
          MT ? TT.scrollTop = UT.offsetTop - TT.clientHeight / 2 : TT.scrollLeft = UT.offsetLeft - TT.clientWidth / 2
        }));
        const {
          value: gT,
          start: nT,
          end: HT
        } = (0, ET.m)(UT), kT = "password" === UT.type ? "\u2022".repeat(gT.length) : gT;
        return (0, VT.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, VT.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: mT
          }), (0, VT.jsxs)("div", {
            ref: WT,
            className: PT()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: MT
            }),
            children: [(0, VT.jsx)("span", {
              children: kT.slice(0, nT)
            }), (0, VT.jsx)("span", {
              ref: zT,
              className: "PadKeyboardCaret"
            }), nT !== HT && (0, VT.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: kT.slice(nT, HT)
            }), (0, VT.jsx)("span", {
              children: kT.slice(HT)
            }), 0 === kT.length && UT.placeholder && UT.placeholder !== mT && (0, VT.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: UT.placeholder
            })]
          })]
        })
      };
    var sM = mT(1513),
      FM = mT(3524);
    const PM = function() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return UT.map(jT.i)
      },
      VM = (TT, UT) => {
        const mT = Gm(TT);
        return mT ? [{
          glyphs: [mT],
          labelKey: UT
        }] : []
      },
      uM = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      CM = "--pad-hint-bar-clearance",
      rM = "[data-pad-hint-bar-avoid]",
      KM = TT => {
        const UT = [];
        for (const mT of TT)(0, AT.r)(mT) && UT.push(mT.getBoundingClientRect());
        return UT
      },
      SM = TT => {
        if (!TT) return null;
        const UT = lW(),
          mT = UT ? KM(((TT, UT) => {
            const mT = TT.closest(rM);
            return mT ? [mT] : ("popup" === UT ? document : TT).querySelectorAll(rM)
          })(UT.root, UT.layer.kind)) : [],
          WT = !UT || UT.root.hasAttribute("data-pad-shows-hud");
        if (((0, FM.f)(null === UT || void 0 === UT ? void 0 : UT.layer.kind, (0, FM.j)()) || WT) && mT.push(...KM(document.querySelectorAll(uM.join(",")))), 0 === mT.length) return null;
        const {
          width: zT,
          height: MT
        } = TT.getBoundingClientRect(), gT = window.innerHeight - 8, nT = (0, FM.o)(gT, {
          width: zT,
          height: MT
        }, window.innerWidth / 2, mT, 8);
        return nT === gT ? null : Math.round(window.innerHeight - nT)
      },
      GM = TT => {
        const UT = document.documentElement.style,
          mT = TT ? `${Math.round(window.innerHeight-TT.getBoundingClientRect().top)}px` : "";
        UT.getPropertyValue(CM) !== mT && (mT ? UT.setProperty(CM, mT) : UT.removeProperty(CM))
      },
      NM = () => {
        const {
          t: TT
        } = (0, zT.z)(), {
          hideButtonHints: UT
        } = (0, LT.n)(), mT = (0, pT.B)(), [WT, MT] = (0, sT.useState)(!1), [gT, kT] = (0, sT.useState)([]), [ZT, cT] = (0, sT.useState)(null), vT = (0, sT.useRef)(null), fT = (0, sT.useRef)(null);
        (0, vz.g)(qM.c, (TT => {
          MT(TT)
        })), (0, vz.g)(FM.n, (() => {
          var TT;
          null === (TT = fT.current) || void 0 === TT || TT.call(fT)
        }));
        const qT = mT && !UT && !WT;
        return (0, sT.useEffect)((() => {
          if (!qT) return;
          let TT = null;
          const UT = () => {
            const UT = (() => {
                var TT;
                const UT = lT.e.getActiveConsumerName(),
                  mT = (0, FM.e)();
                if (mT) {
                  const TT = (0, jT.i)(mT),
                    UT = "emoteWheel" === mT && "wheel" === (0, LT.k)().emoteButton || !(0, BT.H)(lT.e.getLastFrame().values, TT) ? {
                      glyphs: PM("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [TT],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, jT.y)(TT)],
                    labelKey: "controller:wheelChoose"
                  }, UT, {
                    glyphs: PM("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const WT = lW();
                if (!WT || "focus" !== UT && "cursor" !== UT) return (0, FM.b)(jT.i);
                const zT = [],
                  MT = {
                    glyphs: PM("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  gT = (0, ST.w)(WT.root),
                  nT = gT ? !(0, AT.t)(gT) : Boolean(WT.layer.close),
                  kT = !gT && WT.layer.closeLabelKey ? WT.layer.closeLabelKey : MT.labelKey,
                  pT = nT ? [{
                    ...MT,
                    labelKey: kT
                  }] : [],
                  ZT = ym(WT.layer.kind) ? [{
                    glyphs: PM("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === UT) return zT.push({
                  glyphs: PM("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), zT.push({
                  glyphs: PM("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), zT.push(...pT), zT.push(...ZT), zT.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), xW() && zT.push({
                  glyphs: PM("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), zT;
                const cT = Tz.getFocused();
                cT && (0, yW.e)(cT) ? zT.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : cT && (0, ST.D)(cT) ? zT.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : zT.push({
                  glyphs: PM("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const vT = cT ? null === (TT = Lm(cT)) || void 0 === TT ? void 0 : TT.dataset.padSecondary : void 0;
                vT && zT.push({
                  glyphs: PM("menuSecondary"),
                  labelKey: vT
                }), zT.push(...null !== cT && void 0 !== cT && cT.closest("[data-pad-friends-column]") ? [MT] : pT), zT.push(...ZT);
                const fT = "home" === WT.layer.kind;
                hm(WT.root) || !Fm(WT.root) && !Dm(WT) ? fT && zT.push({
                  glyphs: PM("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : zT.push({
                  glyphs: PM("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), fT && (zT.push(...VM("inventory", "controller:menusFriends")), vT || zT.push({
                  glyphs: PM("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), zT.push(...VM("pause", "controller:menusSettings")), zT.push(...VM("leaderboard", "controller:menusNotifications")));
                const qT = HT.b.get("openEverythingMenuName");
                return "inGame" === HT.b.get("gameState") && "popup" !== WT.layer.kind && null !== qT && ((0, Hm.g)(qT) ? zT.push(...VM("leaderboard", "controller:menusClose")) : qT !== nm.k.LOBBY_LEADERBOARD && zT.push(...VM("leaderboard", "controller:menusLobby"))), zT.push({
                  glyphs: PM("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), zT
              })(),
              mT = SM(vT.current),
              WT = ((TT, UT) => `${TT.map((TT=>`${TT.glyphs.join("+")}:${TT.labelKey}`)).join("|")}@${UT}`)(UT, mT);
            WT !== TT && (TT = WT, (0, nT.unstable_batchedUpdates)((() => {
              kT(UT), cT(mT)
            }))), GM(vT.current)
          };
          UT(), fT.current = UT;
          const mT = requestAnimationFrame(UT),
            WT = setInterval(UT, 150);
          return () => {
            fT.current = null, cancelAnimationFrame(mT), clearInterval(WT), GM(null)
          }
        }), [qT]), (0, sT.useLayoutEffect)((() => {
          if (!qT) return;
          if (0 === gT.length) return void GM(null);
          const TT = SM(vT.current);
          TT === ZT ? GM(vT.current) : cT(TT)
        }), [qT, gT, ZT]), qT && 0 !== gT.length ? (0, VT.jsx)("div", {
          ref: vT,
          className: "PadButtonHintBar SmallTextBold",
          style: null === ZT ? void 0 : {
            bottom: ZT
          },
          "aria-hidden": !0,
          children: gT.map((UT => (0, VT.jsxs)("div", {
            className: "PadButtonHint",
            children: [UT.glyphs.map((TT => (0, VT.jsx)(ez, {
              glyph: TT,
              className: "PadButtonHintGlyph"
            }, TT))), (0, VT.jsx)("span", {
              children: TT(UT.labelKey)
            })]
          }, UT.labelKey)))
        }) : null
      };
    var EM = mT(1870);
    const hM = [AT.d, "label", "[data-pad-slider]"].join(","),
      DM = "data-pad-cursor-probe",
      oM = TT => {
        var UT;
        const mT = (TT => {
          const UT = [];
          for (let WT = TT; WT && WT !== document.body && WT !== document.documentElement && (UT.push(WT), !(UT.length > 8)); WT = WT.parentElement);
          const mT = document.documentElement.classList.contains(pT.t) ? UT[UT.length - 1] : void 0;
          null === mT || void 0 === mT || mT.setAttribute(DM, "");
          try {
            return UT.map((TT => ({
              element: TT,
              cursor: getComputedStyle(TT).cursor
            })))
          } finally {
            null === mT || void 0 === mT || mT.removeAttribute(DM)
          }
        })(TT);
        if ("pointer" !== (null === (UT = mT[0]) || void 0 === UT ? void 0 : UT.cursor)) return null;
        let WT = 0;
        for (; WT + 1 < mT.length && "pointer" === mT[WT + 1].cursor;) WT++;
        return mT[WT].element
      },
      AM = (TT, UT, mT, WT) => {
        const zT = WT.root.contains(TT) ? WT.root : null;
        for (let MT = TT; MT && MT !== document.body && MT !== document.documentElement; MT = MT.parentElement) {
          if (MT instanceof HTMLElement && xT(MT, UT) && yT(MT, UT, mT)) return MT;
          if (MT === zT) break
        }
        return "home" === WT.layer.kind || "gamePage" === WT.layer.kind ? ((TT, UT) => {
          const mT = document.scrollingElement;
          return mT instanceof HTMLElement && ![document.documentElement, document.body].some((UT => {
            const mT = getComputedStyle(UT),
              WT = "y" === TT ? mT.overflowY : mT.overflowX;
            return "hidden" === WT || "clip" === WT
          })) && yT(mT, TT, UT) ? mT : null
        })(UT, mT) : null
      };
    const RM = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, ZT.e)(BT.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const TT = lT.e.register({
              name: "cursor",
              isActive: () => "cursor" === dW(),
              onFrame: TT => {
                this.onFrame(TT)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: TT => (0, lT.g)(TT) || TT === (0, jT.i)("menuConfirm") && (0, ST.H)((0, pT.e)())
            }),
            UT = (0, WW.j)((TT => {
              const UT = TT.getRoot();
              UT && this.layerPoints.delete(UT), UT === this.layerRoot && (this.layerRoot = null)
            })),
            mT = kT.j.subscribe("appManagerUpdated|activeInputDevice", (TT => {
              "gamepad" !== TT && this.active && !this.hidden && this.hide()
            }));
          return () => {
            TT(), UT(), kT.j.unsubscribe(mT), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, pT.m)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.EZ()
        }
        activate(TT) {
          this.active = !0, this.hidden = !1;
          const UT = eW();
          !UT || UT.root && UT.root !== TT.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(TT), this.jumpTo(UT.point))
        }
        jumpTo(TT) {
          this.state = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.EZ())
        }
        onFrame(TT) {
          const UT = lW();
          if (!UT) return;
          if (this.active || this.activate(UT), this.followPage(UT)) return;
          this.followLayer(UT);
          const mT = TT.wokeDevice ? (0, pT.e)() : null;
          if (mT && this.jumpTo(mT), !(0, pT.m)()) return void this.hide();
          const WT = (0, jT.i)("menuToggleCursor");
          if (TT.wasPressed(WT)) return lT.e.consumeButton(WT), void OW(this.getHandoff(null));
          if (this.handBackToFocus(TT)) return;
          const zT = (0, jT.i)("menuConfirm"),
            MT = (0, jT.i)("menuSecondary");
          if (TT.wasPressed((0, jT.i)("menuBack"))) return (0, ST.n)(UT.root) || (0, ST.g)(UT.root) || LW(), void this.EZ();
          if (Rm(null, TT, UT)) return TT.wasReleased(zT) && this.press && (this.updateHit(!1), this.updateConfirm(TT, zT)), void this.EZ();
          if (document.pointerLockElement) return void this.hide();
          const gT = wW() ? {
              x: 0,
              y: 0
            } : (TT => {
              const UT = (TT, UT) => (TT ? 1 : 0) - (UT ? 1 : 0);
              return {
                x: UT(TT.isHeld("Right"), TT.isHeld("Left")),
                y: UT(TT.isHeld("Down"), TT.isHeld("Up"))
              }
            })(TT),
            nT = (0, LT.k)().moveDeadzone,
            HT = ((TT, UT) => {
              const mT = (0, BT.j)(TT, iT(UT));
              return Math.hypot(mT.x, mT.y)
            })(TT.leftStick, nT) > 0 || 0 !== gT.x || 0 !== gT.y;
          if (this.hidden) {
            const UT = TT.wasPressed(zT),
              mT = TT.wasPressed(MT);
            if (!HT && !eT(TT.rightStick) && !UT && !mT && !TT.wokeDevice) return void this.EZ();
            if (this.hidden = !1, this.updateHit(!1), UT || mT) return UT && (this.press = {
              kind: "ignored"
            }, TT.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.EZ()
          }
          this.movePendingPageStart(HT);
          const kT = this.getPoint();
          this.state = OT(this.state, {
            stick: TT.leftStick,
            moveDeadzone: nT,
            dpad: gT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, LT.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const ZT = this.state.x !== kT.x || this.state.y !== kT.y,
            cT = [zT, MT].some((UT => TT.wasPressed(UT) || TT.wasReleased(UT)));
          (ZT || cT || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(ZT), this.updateConfirm(TT, zT), this.updateSecondary(TT, MT), this.updateScroll(TT, UT), this.EZ()
        }
        followPage(TT) {
          const UT = "home" === TT.layer.kind || "gamePage" === TT.layer.kind,
            mT = this.page;
          if (this.page = UT ? {
              key: (0, WW.n)(TT.layer),
              root: TT.root
            } : null, !this.page || !mT || mT.root !== TT.root || mT.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(TT), "hybrid" === bW()) return fW = null, cW = null, qW.lock(), !0;
          const {
            key: WT
          } = this.page;
          return this.pendingPageStart = {
            root: TT.root,
            key: WT,
            returning: Tz.notePageEnteredByCursor(WT),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(TT) {
          const UT = this.pendingPageStart;
          if (!UT) return;
          if (TT || UT.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const mT = UT.returning ? Tz.recallStop(UT.root, UT.key) : null;
          if (!mT && UT.returning && performance.now() - UT.enteredAtMs < 1e3) return;
          const WT = null !== mT && void 0 !== mT ? mT : Tz.pickInitial(UT.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: UT.enteredAtMs
          });
          WT && (this.pendingPageStart = null, this.jumpTo((0, ST.x)(WT)))
        }
        setLayer(TT) {
          this.layerRoot = TT.root, this.layerOrder = TT.order
        }
        followLayer(TT) {
          var UT;
          if (TT.root === this.layerRoot) return;
          null !== (UT = this.layerRoot) && void 0 !== UT && UT.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const mT = this.layerPoints.get(TT.root),
            WT = mT && TT.order <= this.layerOrder ? mT : Tz.getLayerStartPoint(TT.root);
          this.setLayer(TT), this.jumpTo(WT)
        }
        getHandoff(TT) {
          var UT;
          return {
            point: this.getPoint(),
            element: null !== (UT = this.interactive) && void 0 !== UT ? UT : this.findDraggedSliderNearby(),
            direction: TT
          }
        }
        findDraggedSliderNearby() {
          const TT = this.draggedSlider;
          if (null === TT || void 0 === TT || !TT.isConnected) return null;
          const UT = TT.getBoundingClientRect(),
            {
              y: mT
            } = this.getPoint();
          return mT >= UT.top - 40 && mT <= UT.bottom + 40 ? TT : null
        }
        handBackToFocus(TT) {
          if (!wW()) return !1;
          const UT = BT.y.find((UT => TT.wasPressed(UT)));
          return !!UT && (mT = this.getHandoff(UT), fW = BW(mT), cW = null, qW.lock(), lT.e.handOffHeldInput(), !0);
          var mT
        }
        getAssistContext() {
          const TT = this.interactive;
          if (null === TT || void 0 === TT || !TT.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const UT = TT.getBoundingClientRect();
          if (UT.width > .4 * window.innerWidth || UT.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const mT = (0, LT.k)().cursorMagnetism && !(0, EM.e)(TT) && !TT.closest("[data-pad-slider]"),
            WT = this.magnet && this.magnet !== TT && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : UT;
          return {
            overInteractive: !0,
            magnetTarget: mT ? {
              x: WT.left + WT.width / 2,
              y: WT.top + WT.height / 2
            } : null
          }
        }
        updateHit(TT) {
          this.lastHitTestMs = performance.now();
          const UT = this.getPoint(),
            mT = document.elementFromPoint(UT.x, UT.y),
            WT = mT && !(0, vT.q)(mT) && (TT => {
              var UT;
              const mT = lW();
              return !(mT && !mT.root.contains(TT) && !TT.closest(".tooltip-container")) || !(null !== (UT = document.getElementById("root")) && void 0 !== UT && UT.contains(TT))
            })(mT) ? mT : null;
          if (WT !== this.hit) return (0, ST.r)(this.hit, WT, UT), this.hit = WT, void this.setInteractive(WT ? (TT => {
            const UT = TT.closest(hM);
            if (UT) {
              var mT, WT;
              const TT = null !== (mT = null === (WT = UT.parentElement) || void 0 === WT ? void 0 : WT.closest("[data-pad-focusable]")) && void 0 !== mT ? mT : UT;
              return (0, AT.t)(TT) ? {
                element: null,
                magnet: null
              } : {
                element: TT,
                magnet: UT
              }
            }
            const zT = oM(TT);
            return {
              element: zT,
              magnet: zT
            }
          })(WT) : {
            element: null,
            magnet: null
          });
          TT && WT && (0, ST.r)(WT, WT, UT)
        }
        setInteractive(TT) {
          let {
            element: UT,
            magnet: mT
          } = TT;
          this.interactive = UT, this.magnet = mT
        }
        clearHover() {
          this.hit && (0, ST.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const TT = this.hit;
          if (!TT || (0, ST.D)(TT)) return {
            kind: "ignored"
          };
          const UT = (0, yW.e)(TT),
            mT = TT.closest("[data-pad-slider]");
          return UT && mT ? {
            kind: "slider",
            slider: mT,
            adjuster: UT
          } : ((0, ST.s)(TT, this.getPoint()), {
            kind: "pointer",
            target: TT
          })
        }
        applySliderFraction(TT) {
          var UT;
          const mT = TT.slider.getBoundingClientRect(),
            WT = mT.height > mT.width,
            zT = null === (UT = TT.slider.querySelector("[data-pad-slider-handle]")) || void 0 === UT ? void 0 : UT.getBoundingClientRect(),
            MT = zT ? WT ? zT.height : zT.width : 0,
            gT = (WT ? mT.height : mT.width) - MT;
          if (gT <= 0) return;
          const nT = WT ? mT.bottom - MT / 2 - this.state.y : this.state.x - mT.left - MT / 2;
          TT.adjuster.setFraction(Math.max(0, Math.min(1, nT / gT)))
        }
        updateConfirm(TT, UT) {
          TT.wasPressed(UT) && (this.press = TT.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const mT = this.press;
          if (!mT) return;
          if (TT.isHeld(UT)) return "slider" === mT.kind && this.applySliderFraction(mT), void this.updateRepeat();
          this.press = null;
          const WT = this.repeated;
          if (this.endRepeat(), !TT.wasReleased(UT)) return void this.endPressWithoutClick(mT);
          const zT = this.getPoint(),
            MT = this.hit;
          if ("slider" === mT.kind && mT.adjuster.endDrag(), "pointer" === mT.kind) {
            const TT = null !== MT && void 0 !== MT ? MT : mT.target.isConnected ? mT.target : null;
            TT && (0, ST.t)(TT, zT);
            const UT = MT && mT.target.isConnected && !WT ? ((TT, UT) => {
              for (let mT = TT; mT; mT = mT.parentElement)
                if (mT.contains(UT)) return mT;
              return null
            })(mT.target, MT) : null;
            UT && (Tz.noteCursorActivation(UT), (0, vT.g)(UT, new MouseEvent("click", (0, ST.M)(zT, 0, 0))), (0, ST.k)(UT), (0, ST.J)(UT) && (0, ST.I)(UT))
          }
        }
        beginRepeat() {
          var TT, UT, mT;
          const WT = null !== (TT = null === (UT = this.hit) || void 0 === UT ? void 0 : UT.closest("[data-pad-repeat]")) && void 0 !== TT ? TT : null;
          this.repeatStop = WT, this.repeatKey = null !== (mT = null === WT || void 0 === WT ? void 0 : WT.getAttribute("data-pad-repeat")) && void 0 !== mT ? mT : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const TT = this.repeatStop;
          if (!TT) return;
          const UT = this.hit;
          TT.isConnected && !(0, AT.t)(TT) && TT.getAttribute("data-pad-repeat") === this.repeatKey && UT && TT.contains(UT) ? TT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Tz.noteCursorActivation(TT), (0, vT.g)(TT, new MouseEvent("click", (0, ST.M)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(TT) {
          "slider" === TT.kind && TT.adjuster.endDrag(), "pointer" === TT.kind && TT.target.isConnected && (0, ST.t)(TT.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(TT, UT) {
          TT.wasPressed(UT) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !TT.isHeld(UT) && (this.secondaryArmed = !1, TT.wasReleased(UT) && this.hit && (0, ST.p)(this.hit, this.getPoint(), 2))
        }
        updateScroll(TT, UT) {
          const mT = YT(TT.rightStick, TT.dtMs);
          if (0 === mT.x && 0 === mT.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + mT.x,
            y: this.scrollRemainder.y + mT.y
          };
          const WT = Math.trunc(this.scrollRemainder.x),
            zT = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - WT,
            y: this.scrollRemainder.y - zT
          };
          const MT = this.hit;
          if (!MT) return;
          let gT = !1;
          if (0 !== zT) {
            const TT = AM(MT, "y", zT > 0 ? 1 : -1, UT);
            TT && (TT.scrollBy({
              top: zT,
              behavior: "instant"
            }), gT = !0)
          }
          if (0 !== WT) {
            const TT = AM(MT, "x", WT > 0 ? 1 : -1, UT);
            TT && (TT.scrollBy({
              left: WT,
              behavior: "instant"
            }), gT = !0)
          }
          gT && (this.lastHitTestMs = -1 / 0)
        }
        EZ() {
          NT.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Tg = () => {
        const TT = (0, sT.useMemo)((() => new rT), []),
          UT = (0, pT.B)();
        return (0, sT.useEffect)((() => {
          if (!UT) return;
          let mT = 0,
            WT = {
              of: null,
              atMs: 0,
              list: []
            };
          const zT = document.getElementsByClassName(tW),
            MT = TT => {
              for (const UT of [...zT]) UT !== TT && UT.classList.remove(tW)
            },
            gT = () => {
              var UT;
              mT = requestAnimationFrame(gT);
              const zT = (() => {
                const TT = Tz.getFocused();
                if (Tz.isActive() && null !== TT && void 0 !== TT && TT.isConnected) return TT;
                const UT = RM.getHighlighted();
                return null !== UT && void 0 !== UT && UT.isConnected ? UT : null
              })();
              MT(zT), zT && !zT.classList.contains(tW) && zT.classList.add(tW);
              const nT = null !== (UT = null === zT || void 0 === zT ? void 0 : zT.closest("[data-pad-reticle-box]")) && void 0 !== UT ? UT : zT;
              TT.show(nT ? ((TT, UT) => {
                let mT = TT.left,
                  WT = TT.top,
                  zT = TT.right,
                  MT = TT.bottom;
                for (const gT of UT) {
                  if (!gT) continue;
                  const TT = IT(gT);
                  mT = Math.max(mT, TT.left), WT = Math.max(WT, TT.top), zT = Math.min(zT, TT.right), MT = Math.min(MT, TT.bottom)
                }
                return zT <= mT || MT <= WT ? null : {
                  left: mT,
                  top: WT,
                  width: zT - mT,
                  height: MT - WT
                }
              })(nT.getBoundingClientRect(), (TT => {
                const UT = performance.now();
                return (WT.of !== TT || UT - WT.atMs > 500) && (WT = {
                  of: TT,
                  atMs: UT,
                  list: [dT(TT, "y"), dT(TT, "x")]
                }), WT.list
              })(nT)) : null)
            };
          return mT = requestAnimationFrame(gT), () => {
            cancelAnimationFrame(mT), MT(null), TT.hide()
          }
        }), [UT, TT]), (0, VT.jsx)(KT, {
          placer: TT,
          className: "PadFocusRing"
        })
      },
      Ug = (TT, UT) => {
        TT.style.transform = `translate3d(${UT.x}px, ${UT.y}px, 0)`, TT.classList.toggle("Visible", UT.visible), TT.classList.toggle("Pressed", UT.pressed)
      },
      mg = () => {
        const TT = (0, sT.useRef)(null);
        return (0, sT.useEffect)((() => {
          const UT = NT.subscribe((UT => {
            TT.current && Ug(TT.current, UT)
          }));
          return TT.current && Ug(TT.current, NT.get()), UT
        }), []), (0, VT.jsx)("div", {
          ref: TT,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, VT.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Wg = "#ncmp__modal.ncmp__active",
      zg = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Wg) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Wg),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Mg = "PadOverThirdParty",
      gg = new Set(zg.map((TT => TT.id))),
      ng = () => {
        const TT = zg.map((TT => {
            let {
              id: UT,
              find: mT,
              startSelectors: WT
            } = TT;
            return (0, WW.m)({
              id: UT,
              kind: "popup",
              getRoot: () => {
                const TT = mT(),
                  UT = TT ? ((TT, UT) => {
                    var mT;
                    for (const WT of UT) {
                      const UT = TT.querySelector(WT);
                      if (UT) return UT
                    }
                    return null !== (mT = [...TT.querySelectorAll("button")].find((TT => !TT.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== mT ? mT : null
                  })(TT, WT) : null;
                if (TT && UT && !UT.hasAttribute("data-pad-default-focus")) {
                  for (const UT of TT.querySelectorAll("[data-pad-default-focus]")) UT.removeAttribute("data-pad-default-focus");
                  for (const UT of TT.querySelectorAll("[data-pad-hint-bar-avoid]")) UT.removeAttribute("data-pad-hint-bar-avoid");
                  UT.setAttribute("data-pad-default-focus", ""), ((TT, UT) => {
                    let mT = TT;
                    for (let WT = TT.parentElement; WT && UT.contains(WT) && !(WT.getBoundingClientRect().height >= window.innerHeight / 2); WT = WT.parentElement) mT = WT;
                    return mT
                  })(UT, TT).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return TT
              },
              close: null,
              memoryKey: null
            })
          })),
          UT = document.documentElement,
          mT = gT.e.onFrame((() => {
            const TT = (0, pT.m)() ? lW() : null,
              mT = !!TT && (WT = TT.layer, gg.has(WT.id));
            var WT;
            UT.classList.contains(Mg) !== mT && UT.classList.toggle(Mg, mT)
          }));
        return () => {
          for (const UT of TT) UT();
          mT(), UT.classList.remove(Mg)
        }
      },
      Hg = "PadLargePointer",
      kg = () => {
        (0, sT.useEffect)((() => {
          const TT = (0, vT.j)(document.body),
            UT = Tz.install(),
            mT = RM.install(),
            WT = ng();
          return () => {
            TT(), UT(), mT(), WT()
          }
        }), []);
        const {
          largePointer: TT
        } = (0, LT.n)(), UT = (0, sM.w)() && TT;
        return (0, sT.useEffect)((() => {
          if (UT) return document.documentElement.classList.add(Hg), () => {
            document.documentElement.classList.remove(Hg)
          }
        }), [UT]), (0, nT.createPortal)((0, VT.jsxs)(VT.Fragment, {
          children: [(0, VT.jsx)(NM, {}), (0, VT.jsx)(Tg, {}), (0, VT.jsx)(mg, {})]
        }), document.body)
      };
    var jg = mT(8903),
      lg = mT(8925),
      Lg = mT(8918);
    mT(8933);
    const pg = (TT, UT) => {
        const [mT, WT] = (0, sT.useState)(!1), [zT, MT] = (0, sT.useState)(null), gT = (0, sT.useRef)(null), nT = (0, sT.useCallback)((TT => {
          gT.current = TT, MT(TT)
        }), []), HT = (0, sT.useCallback)((() => {
          WT(!1), nT(null)
        }), [nT]), jT = (0, sT.useCallback)((() => {
          WT(!0)
        }), []), lT = (0, sT.useCallback)(((TT, UT) => {
          nT((0, Lg.F)(TT, UT, gT.current))
        }), [nT]);
        (0, sT.useLayoutEffect)((() => (UT(mT), (0, FM.q)(TT, mT), kT.j.EZ(FM.n), () => {
          UT(!1), (0, FM.q)(TT, !1), kT.j.EZ(FM.n)
        })), [mT, TT, UT]), (0, vz.g)("appManagerUpdated|activeInputDevice", (TT => {
          "gamepad" !== TT && HT()
        })), (0, vz.g)("appManagerUpdated|gameState", (TT => {
          "inGame" !== TT && HT()
        }));
        const LT = () => {
          (0, Hm.l)() && HT()
        };
        return (0, vz.g)("appManagerUpdated|openEverythingMenuName", LT), (0, vz.g)("appManagerUpdated|openInGameMenuName", LT), {
          open: mT,
          picked: zT,
          pickedRef: gT,
          show: jT,
          aim: lT,
          close: HT
        }
      },
      Bg = TT => {
        let {
          className: UT,
          slotCount: mT,
          picked: WT,
          slotLabel: zT,
          renderSlot: MT,
          centre: gT
        } = TT;
        const nT = Array.from({
          length: mT
        }, ((TT, UT) => UT));
        return (0, VT.jsx)("div", {
          className: PT()("EmoteWheelOverlay PadRadialWheel", UT),
          children: (0, VT.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Lg.u + "rem",
              height: 2 * Lg.u + "rem"
            },
            children: [(0, VT.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Lg.p} ${Lg.p}`,
              children: [nT.map((TT => (0, VT.jsx)("path", {
                d: (0, Lg.y)(TT, mT, Lg.i, Lg.l, Lg.o),
                className: PT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: TT === WT
                }),
                "aria-label": zT(TT)
              }, TT))), (0, VT.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Lg.i,
                cy: Lg.i,
                r: Lg.o
              }), (0, VT.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Lg.i,
                cy: Lg.i,
                r: Lg.l
              }), null !== WT && (0, VT.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Lg.y)(WT, mT, Lg.i, Lg.l, Lg.o)
              })]
            }), nT.map((TT => {
              const UT = (0, Lg.D)(TT, mT);
              return (0, VT.jsx)("div", {
                className: PT()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: TT === WT
                }),
                style: {
                  left: `calc(50% + ${Lg.e*Math.cos(UT)}rem)`,
                  top: `calc(50% + ${Lg.e*Math.sin(UT)}rem)`
                },
                "aria-hidden": !0,
                children: MT(TT)
              }, TT)
            })), (0, VT.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: gT
            })]
          })
        })
      },
      Zg = lM.length,
      cg = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = pg("chat", am.q), mT = (0, sT.useMemo)((() => lM.map((UT => TT(UT)))), [TT]);
        return (0, vz.g)(am.m, (() => {
          UT.open || (0, jg.e)() || (0, lg.o)() || "inGame" !== HT.b.get("gameState") || (0, Hm.l)() || !(0, wm.d)() || UT.show()
        })), (0, vz.g)(am.g, (TT => {
          UT.open && UT.aim(TT, Zg)
        })), (0, vz.g)(am.k, (() => {
          var TT;
          if (!UT.open) return;
          const WT = UT.pickedRef.current;
          null !== WT ? LM.claim(performance.now()) && (UT.close(), null === (TT = (0, wm.d)()) || void 0 === TT || TT.sendLine(mT[WT])) : UT.close()
        })), (0, vz.g)(am.j, UT.close), UT.open ? (0, VT.jsx)(Bg, {
          className: "QuickChatWheel",
          slotCount: Zg,
          picked: UT.picked,
          slotLabel: TT => mT[TT],
          renderSlot: TT => mT[TT],
          centre: null !== UT.picked ? mT[UT.picked] : TT("controller:quickChatPick")
        }) : null
      },
      vg = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = pg("actionButton", lg.s), [mT, WT] = (0, sT.useState)([]);
        if ((0, vz.g)(lg.k, (TT => {
            UT.open || (0, jg.e)() || (0, am.c)() || "inGame" !== HT.b.get("gameState") || (0, Hm.l)() || (WT(TT), UT.show())
          })), (0, vz.g)(lg.c, (TT => {
            UT.open && UT.aim(TT, mT.length)
          })), (0, vz.g)(lg.j, (() => {
            if (!UT.open) return;
            const TT = UT.pickedRef.current;
            UT.close(), null !== TT && kT.j.EZ(lg.n, mT[TT])
          })), (0, vz.g)(lg.g, UT.close), !UT.open) return null;
        const MT = null !== UT.picked ? mT[UT.picked] : null;
        return (0, VT.jsx)(Bg, {
          className: "ActionWheel",
          slotCount: mT.length,
          picked: UT.picked,
          slotLabel: UT => {
            const WT = mT[UT];
            return "reload" === WT.kind ? TT("controller:gameplayReload") : "customButton" === WT.kind ? WT.description || WT.icon : "touchButton" === WT.kind && "string" === typeof WT.label ? WT.label : ""
          },
          renderSlot: TT => (0, VT.jsx)(Jz, {
            action: mT[TT]
          }),
          centre: MT ? (0, VT.jsx)(Jz, {
            action: MT
          }) : TT("controller:actionWheelPick")
        })
      };
    var fg = mT(102);
    const qg = () => ((0, sT.useEffect)((() => {
        var TT, UT;
        const mT = (0, vT.j)(document.getElementById("root")),
          WT = (0, pT.h)(),
          zT = (() => {
            const TT = [kT.j.subscribe(mz.c, (() => {
                gz("blockBreak")
              })), kT.j.subscribe("damagedByOtherPlayer", (() => {
                gz("damage")
              })), kT.j.subscribe("yourAttackHit", (TT => {
                let {
                  hitSelf: UT
                } = TT;
                UT || gz("hit")
              }))],
              UT = gT.e.onActivePadChanged((TT => {
                TT && gz("connect")
              }));
            return () => {
              for (const UT of TT) kT.j.unsubscribe(UT);
              UT()
            }
          })(),
          MT = (() => {
            const TT = new Lz({
              getVisitId: lz.d,
              peekVisitId: lz.peekVisitSessionId,
              readReportedVisitId: () => {
                const TT = jz.m.getItem(pz);
                return "string" === typeof TT ? TT : null
              },
              writeReportedVisitId: TT => {
                jz.m.setItem(pz, TT)
              },
              isPadActive: pT.m,
              getPadFamily: () => {
                var TT, UT;
                return null !== (TT = null === (UT = gT.e.getActivePad()) || void 0 === UT ? void 0 : UT.family) && void 0 !== TT ? TT : null
              },
              canReport: Hz.isBloxdGa4Ready,
              getInputType: kz.b,
              Gp: Hz.logControllerUsedToGtag
            });
            let UT = 0,
              mT = null;
            const WT = zT => {
                null === mT && ("notReady" !== TT.check(zT) || null !== mT || UT >= 20 || (UT++, mT = setTimeout((() => {
                  mT = null, WT(!1)
                }), 3e3)))
              },
              zT = kT.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                WT(!0)
              })),
              MT = (0, lz.g)((() => {
                UT = 0, WT(!0)
              }));
            return () => {
              kT.j.unsubscribe(zT), MT(), null !== mT && clearTimeout(mT)
            }
          })(),
          nT = gT.e.onFrame(((TT, UT, mT) => {
            const WT = (0, pT.r)(TT, mT);
            lT.e.dispatch(TT, UT, WT)
          }));
        let jT = null !== (TT = null === (UT = gT.e.getActivePad()) || void 0 === UT ? void 0 : UT.family) && void 0 !== TT ? TT : null;
        const BT = gT.e.onActivePadChanged((TT => {
            var UT, mT;
            (lT.e.reset(), (0, pT.w)(), kT.j.EZ(gT.d, TT), (null !== (UT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== UT ? UT : null) !== jT) && (jT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== mT ? mT : null, kT.j.EZ(LT.c, (0, LT.k)()));
            !TT && (0, pT.m)() && (0, pT.x)(HT.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          ZT = () => {
            "visible" !== document.visibilityState && lT.e.clear()
          },
          cT = () => {
            lT.e.clear()
          };
        document.addEventListener("visibilitychange", ZT), window.addEventListener("blur", cT), gT.e.start(), (0, nz.m)();
        const fT = null;
        return () => {
          mT(), WT(), zT(), MT(), nT(), BT(), document.removeEventListener("visibilitychange", ZT), window.removeEventListener("blur", cT), gT.e.stop(), null === fT || void 0 === fT || fT()
        }
      }), []), (0, VT.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, VT.jsx)(Xz, {}), (0, VT.jsx)(rz, {}), (0, VT.jsx)(Kz, {}), (0, VT.jsx)(IM, {}), (0, VT.jsx)(kg, {}), (0, VT.jsx)(cg, {}), (0, VT.jsx)(vg, {})]
      })),
      ig = () => fg.featureFlags.useControllerSupport ? (0, VT.jsx)(qg, {}) : null;
    var bg = mT(8313),
      Og = mT(8941);
    const eg = new Set(nz.k),
      Yg = TT => `${Og.m}${(0,LT.l)()}/${TT}`,
      Jg = TT => {
        if (!(0, Og.k)(TT)) return null;
        const [UT, mT] = TT.slice(Og.m.length).split("/");
        return (0, bg.g)(UT) && eg.has(mT) ? (0, nz.g)(UT, mT) : null
      };
    var xg = mT(8950);
    const dg = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, pT.B)(), {
          gameState: mT,
          isUiHidden: WT
        } = (0, HT.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: MT,
          sneakMode: gT
        } = (0, LT.n)(), [nT, kT] = (0, sT.useState)(xg.d);
        return (0, vz.g)(yz.w, kT), UT && !WT && "inGame" === mT && nT ? (0, VT.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!MT && (0, VT.jsx)(ez, {
            glyph: (0, jT.i)("toggle" === gT ? "sneak" : "sneakToggle")
          }), (0, VT.jsx)("span", {
            children: TT("controller:gameplaySneaking")
          })]
        }) : null
      },
      wg = 12,
      tg = TT => {
        let {
          trigger: UT,
          className: mT,
          children: WT
        } = TT;
        const zT = (0, sT.useRef)(null);
        return (0, sT.useEffect)((() => {
          let TT = 0;
          const mT = dT(UT, "y"),
            WT = () => {
              TT = requestAnimationFrame(WT);
              const MT = zT.current;
              if (!MT || null === UT || void 0 === UT || !UT.isConnected) return;
              const {
                left: gT,
                top: nT
              } = function(TT, UT, mT) {
                let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const MT = TT.left + TT.width / 2,
                  gT = Math.max(wg, mT.width - wg - UT.width),
                  nT = Math.min(Math.max(MT - UT.width / 2, wg), gT),
                  HT = mT.height - WT;
                let kT = 0,
                  jT = HT;
                if (zT) {
                  const TT = Math.max(0, zT.top),
                    WT = Math.min(HT, zT.bottom);
                  WT - TT >= Math.max(mT.height / 2, UT.height + 24) && (kT = TT, jT = WT)
                }
                const lT = TT.top + TT.height / 2 < (kT + jT) / 2 ? jT - wg - UT.height : kT + wg;
                return {
                  left: nT,
                  top: Math.max(wg, lT)
                }
              }(UT.getBoundingClientRect(), {
                width: MT.offsetWidth,
                height: MT.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(CM)) || 0, null !== mT && void 0 !== mT && mT.isConnected ? mT.getBoundingClientRect() : null);
              MT.style.transform = `translate3d(${Math.round(gT)}px, ${Math.round(nT)}px, 0)`, MT.style.visibility = "visible"
            };
          return WT(), () => {
            cancelAnimationFrame(TT)
          }
        }), [UT]), (0, VT.jsx)("div", {
          ref: zT,
          className: mT,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: WT
        })
      };
    var ag = mT(1135),
      yg = mT(8953),
      Xg = mT(1569),
      Ig = mT(8955),
      Qg = mT(8964);
    const sg = {
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
      Fg = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, pT.B)(), mT = (0, yg.d)(), WT = (0, Vz.f)("_tasks"), MT = (0, Vz.f)("_availableLeaderboards");
        if (!UT) return null;
        const gT = (TT => {
          let {
            hasShop: UT,
            hasTasksOrLeaderboards: mT,
            canInvite: WT
          } = TT;
          const zT = [];
          return UT && zT.push("shop"), mT && zT.push("tasks"), WT && zT.push("invite"), zT.push("leave"), zT
        })({
          hasShop: mT,
          hasTasksOrLeaderboards: !(!WT && !MT),
          canInvite: !!fg.featureFlags.canUseInviteLinks
        });
        return (0, VT.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: gT.map((UT => {
            const {
              icon: mT,
              labelKey: WT
            } = sg[UT], zT = "leave" === UT ? Xg.I : Xg.e;
            return (0, VT.jsx)(zT, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (TT => {
                  switch (TT) {
                    case "shop":
                      return kT.j.EZ(Qg.m), void HT.b.set({
                        openEverythingMenuName: nm.k.SHOP
                      });
                    case "tasks":
                      return void kT.j.EZ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void kT.j.EZ("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Ig.d)()
                  }
                })(UT)
              },
              children: (0, VT.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, VT.jsx)(ag.c, {
                  name: mT
                }), (0, VT.jsx)("span", {
                  children: TT(WT)
                })]
              })
            }, UT)
          }))
        })
      };
    var Pg = mT(2104);
    const Vg = BT.v,
      ug = ["forward", "backward", "left", "right", "sprint"],
      Cg = TT => TT.ctrlKey || TT.altKey || "Alt" === TT.key || "ArrowUp" === TT.key || "ArrowDown" === TT.key || "Tab" === TT.code || "/" === TT.key || "Slash" === TT.code;
    class rg {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(BT.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(TT) {
        this.armed = TT
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || UT ? !TT.repeat && this.swallowedKeys.delete(TT.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(TT.code),
          continues: !1
        } : "Escape" === TT.key || TT.repeat && !this.swallowedKeys.has(TT.code) ? {
          swallow: !1,
          continues: !1
        } : mT ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(TT.code), {
          swallow: !0,
          continues: (0, pT.i)(TT)
        })
      }
      onKeyUp(TT) {
        return this.swallowedKeys.delete(TT.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = (0, BT.p)(TT.values, this.previousHeld),
          MT = null === mT ? -1 : (0, BT.k)(mT),
          gT = MT >= 0 && zT[MT] && !this.previousHeld[MT],
          nT = zT.some(((TT, UT) => TT && !this.previousHeld[UT] && UT !== MT)),
          HT = Math.hypot(TT.leftStick.x, TT.leftStick.y) >= Vg,
          kT = Math.hypot(TT.rightStick.x, TT.rightStick.y) >= Vg,
          jT = HT && !this.leftStickWasPressed || kT && !this.rightStickWasPressed;
        this.previousHeld = zT, this.leftStickWasPressed = HT, this.rightStickWasPressed = kT;
        let lT = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, lT = !0);
        const LT = !UT && gT && !WT,
          pT = !LT && this.armed && !UT && (nT || jT);
        return (LT || pT) && (this.consumeNextFrame = !0, this.consumeAfterContinue = pT, lT = !0), {
          continues: pT,
          back: LT,
          consumeHeld: lT
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Kg = new Set([...Pg.l, ...Pg.A]),
      Sg = TT => ((TT, UT, mT) => {
        const WT = Object.keys(UT).filter((WT => !mT.has(WT) && UT[WT].includes(TT)));
        return WT.length > 0 && WT.every((TT => ug.includes(TT)))
      })(TT, Pg.v, Kg),
      Gg = (TT, UT, mT) => {
        const WT = new rg,
          zT = TT => {
            if (!TT.isTrusted) return;
            const {
              swallow: mT,
              continues: zT
            } = WT.onKeyDown(TT, !(0, pT.F)(TT) || (0, Uz.j)() || (0, Hm.l)(), Sg(TT.code));
            mT && (TT.stopImmediatePropagation(), Cg(TT) && TT.preventDefault()), zT && ((0, pT.x)("keyboardMouse"), UT())
          },
          MT = TT => {
            TT.isTrusted && WT.onKeyUp(TT) && (TT.stopImmediatePropagation(), Cg(TT) && TT.preventDefault())
          },
          nT = () => {
            WT.forgetKeys()
          };
        window.addEventListener("keydown", zT, !0), window.addEventListener("keyup", MT, !0), window.addEventListener("blur", nT);
        const HT = gT.e.onFrame((TT => {
            const zT = lT.e.getActiveConsumerName(),
              MT = mT(),
              gT = MT ? (0, jT.i)("menuBack") : null,
              nT = null !== zT && "gameplay" !== zT,
              {
                continues: HT,
                back: kT,
                consumeHeld: BT
              } = WT.onPadFrame(TT, nT, gT, (0, pT.n)(TT));
            if (BT) {
              const TT = (0, LT.k)().swapSticks ? "right" : "left";
              lT.e.consumeAllHeld(WT.consumeLeavesMoveStick() ? TT : null)
            }
            kT ? null === MT || void 0 === MT || MT() : HT && UT()
          })),
          kT = (0, Uz.k)(`pressToContinue:${TT}`, (() => WT.blocksGameplay()));
        return {
          setArmed: TT => {
            WT.setArmed(TT)
          },
          dispose: () => {
            window.removeEventListener("keydown", zT, !0), window.removeEventListener("keyup", MT, !0), window.removeEventListener("blur", nT), HT(), kT()
          }
        }
      };
    var Ng = mT(5090),
      Eg = mT(3530),
      hg = mT(3267),
      Dg = mT(8322);
    const og = TT => {
        let {
          text: UT
        } = TT;
        return (0, VT.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: UT
        })
      },
      Ag = TT => {
        let {
          label: UT,
          hint: mT,
          options: WT,
          value: MT,
          onChange: gT
        } = TT;
        const {
          t: nT
        } = (0, zT.z)();
        return (0, VT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, VT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, VT.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, VT.jsx)("div", {
                className: "SliderText",
                children: UT
              }), mT && (0, VT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: mT
              })]
            }), (0, VT.jsx)(hg.d, {
              options: WT.map((TT => ({
                label: "label" in TT ? TT.label : nT(TT.labelKey),
                value: TT.value
              }))),
              value: MT,
              onChange: TT => {
                gT(TT.value)
              }
            })]
          })
        })
      },
      Rg = TT => {
        let {
          settingKey: UT,
          label: mT,
          range: WT,
          format: zT
        } = TT;
        const MT = (0, LT.n)();
        return (0, VT.jsx)(Ng.j, {
          name: mT,
          min: WT.min,
          max: WT.max,
          step: WT.step,
          padStep: WT.step,
          initValue: MT[UT],
          format: zT,
          onChange: TT => {
            (0, LT.m)({
              [UT]: (0, Dg.w)(TT, WT)
            })
          }
        })
      };
    var Tn = mT(8967),
      Un = mT(8970);
    const mn = TT => TT instanceof DOMException && ("SecurityError" === TT.name || "NotAllowedError" === TT.name),
      Wn = TT => {
        const [UT] = [...TT.controllers].sort(((TT, UT) => Un.p[TT] - Un.p[UT]));
        return Un.n[UT]
      },
      zn = TT => {
        (0, Tn.b)().allowPhoneMotion().catch((UT => {
          TT && mn(UT) ? TT() : console.warn("Could not enable the motion sensor", UT)
        }))
      },
      Mn = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      gn = TT => {
        let {
          status: UT
        } = TT;
        const {
          t: mT
        } = (0, zT.z)(), [WT, MT] = (0, sT.useState)(null), gT = `${UT.controllers.join(",")}|${UT.phoneMotion}`;
        (0, sT.useEffect)((() => {
          MT(null)
        }), [gT]);
        const nT = () => {
          (0, Tn.b)().connectController().then((TT => {
            MT(TT > 0 ? "openFailed" : null)
          })).catch((TT => {
            mn(TT) ? MT("needsClick") : console.warn("Could not connect motion controller", TT)
          }))
        };
        if (UT.hidSupported) {
          let TT = mT("controller:settingsGyroConnectHint");
          return "needsClick" === WT ? TT = mT("controller:settingsGyroConnectNeedsClick") : "openFailed" === WT ? TT = mT("controller:settingsGyroOpenFailed") : UT.controllers.length > 0 && (TT = mT("controller:settingsGyroConnected", {
            name: Wn(UT)
          })), (0, VT.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, VT.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, VT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: TT
              }), (0, VT.jsx)(Xg.e, {
                onClick: nT,
                children: mT("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === UT.phoneMotion) return (0, VT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, VT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === WT && (0, VT.jsx)("div", {
              className: "ControllerSettingsHint",
              children: mT("controller:settingsGyroAllowNeedsTap")
            }), (0, VT.jsx)(Xg.e, {
              onClick: () => {
                zn((() => {
                  MT("needsTap")
                }))
              },
              children: mT("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const HT = Mn[UT.phoneMotion];
        return HT ? (0, VT.jsx)("div", {
          className: "ControllerSettingsHint",
          children: mT(HT)
        }) : null
      },
      nn = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, LT.n)(), mT = (0, Tn.e)(), WT = (0, pT.D)(), MT = !mT.hidSupported && mT.phoneSupported && !mT.padConnected, gT = (mT.hidSupported || mT.phoneSupported) && !MT, nT = (0, jT.i)("pause");
        return (0, VT.jsxs)(VT.Fragment, {
          children: [(0, VT.jsx)(og, {
            text: TT("controller:settingsGyro")
          }), MT && (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroPhoneNeedsController")
          }), !gT && !MT && (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT(mT.hidBlocked || mT.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), gT && (0, VT.jsx)(Ng.b, {
            label: TT(mT.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: UT.gyroAiming,
            onClick: TT => {
              var UT, mT;
              (0, LT.m)({
                gyroAiming: TT
              });
              const WT = null === (UT = null === (mT = navigator.userActivation) || void 0 === mT ? void 0 : mT.isActive) || void 0 === UT || UT;
              if (!TT || !WT) return;
              const zT = (0, Tn.b)(),
                MT = zT.getStatus();
              MT.hidSupported ? zT.connectControllerIfNoneGranted().catch((TT => {
                console.warn("Motion controller picker unavailable", TT)
              })) : "needsPermission" === MT.phoneMotion && zn()
            },
            circleInfoText: TT(mT.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), gT && mT.hidSupported && (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroSteamHint")
          }), gT && UT.gyroAiming && (0, VT.jsxs)(VT.Fragment, {
            children: [(0, VT.jsx)(gn, {
              status: mT
            }), (0, VT.jsx)(Rg, {
              settingKey: "gyroSensitivity",
              label: TT("controller:settingsGyroSensitivity"),
              range: Dg.P,
              format: Dg.H
            }), (0, VT.jsx)(Ag, {
              label: TT("controller:settingsGyroActivation"),
              hint: "aiming" === UT.gyroActivation && (0, VT.jsx)(Eg.d, {
                text: TT("controller:settingsGyroAimingHint", {
                  button: Eg.e
                }),
                glyph: (0, jT.i)("use")
              }),
              options: Dg.L,
              value: UT.gyroActivation,
              onChange: TT => {
                (0, LT.m)({
                  gyroActivation: TT
                })
              }
            }), "button" === UT.gyroActivation && (0, VT.jsx)(Ag, {
              label: TT("controller:settingsGyroButton"),
              hint: TT("controller:settingsGyroButtonHint"),
              options: Dg.r.filter((TT => TT !== nT || TT === UT.gyroButton)).map((TT => ({
                label: Oz(WT, TT),
                value: TT
              }))),
              value: UT.gyroButton,
              onChange: TT => {
                (0, LT.m)({
                  gyroButton: TT
                })
              }
            })]
          })]
        })
      };
    var Hn = mT(1976);
    const kn = () => {
      const {
        t: TT
      } = (0, zT.z)(), UT = (0, LT.n)(), mT = (0, pT.D)();
      return (0, VT.jsxs)(VT.Fragment, {
        children: [(0, VT.jsx)(og, {
          text: TT("controller:settingsAccessibility")
        }), (0, VT.jsx)(Ng.b, {
          label: TT("controller:settingsSwapConfirmBack"),
          checked: (0, jT.G)(UT.swapConfirmBack, mT),
          onClick: TT => {
            (0, LT.m)({
              swapConfirmBack: TT === (0, jT.G)(null, mT) ? null : TT
            }), Hn.i.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: TT("controller:settingsSwapConfirmBackInfo")
        }), (0, VT.jsx)(Ag, {
          label: TT("controller:settingsButtonRepeat"),
          hint: TT("controller:settingsButtonRepeatHint"),
          options: Dg.q,
          value: UT.buttonRepeat,
          onChange: TT => {
            (0, LT.m)({
              buttonRepeat: TT
            })
          }
        }), (0, VT.jsx)(Ag, {
          label: TT("controller:settingsTapHoldTime"),
          hint: TT("controller:settingsTapHoldTimeHint"),
          options: Dg.rb,
          value: UT.tapHoldTime,
          onChange: TT => {
            (0, LT.m)({
              tapHoldTime: TT
            })
          }
        }), (0, VT.jsx)(Ag, {
          label: TT("controller:settingsEmoteButton"),
          hint: TT("wheel" === UT.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Dg.D,
          value: UT.emoteButton,
          onChange: TT => {
            (0, LT.m)({
              emoteButton: TT
            })
          }
        }), (0, VT.jsx)(Ag, {
          label: TT("controller:settingsAttackMode"),
          hint: TT("toggle" === UT.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Dg.n,
          value: UT.attackMode,
          onChange: TT => {
            (0, LT.m)({
              attackMode: TT
            })
          }
        }), (0, VT.jsx)(Ng.b, {
          label: TT("controller:settingsLargePointer"),
          checked: UT.largePointer,
          onClick: TT => {
            (0, LT.m)({
              largePointer: TT
            })
          },
          circleInfoText: TT("controller:settingsLargePointerInfo")
        })]
      })
    };
    var jn = mT(8972);
    const Ln = new class {
        constructor(TT) {
          this.router = TT, this.current = null
        }
        claim(TT, UT) {
          const mT = this.current;
          mT && (this.current = null, mT.release(), mT.onTakenOver());
          const WT = this.router.register({
              ...TT,
              name: "capture"
            }),
            zT = {
              release: WT,
              onTakenOver: UT
            };
          return this.current = zT, () => {
            this.current === zT && (this.current = null), WT()
          }
        }
      }(lT.e),
      pn = TT => {
        (0, sT.useEffect)((() => {
          if (!TT) return;
          const UT = TT();
          let mT = !1;
          const WT = () => {
              mT || (mT = !0, UT.onEnd())
            },
            zT = Ln.claim({
              isActive: () => !mT,
              onFrame: TT => {
                UT.onFrame(TT, WT)
              }
            }, WT),
            MT = void 0 === UT.timeoutMs ? void 0 : window.setTimeout(WT, UT.timeoutMs),
            gT = TT => {
              "Escape" === TT.key && (TT.preventDefault(), TT.stopPropagation(), WT())
            };
          return window.addEventListener("keydown", gT, !0), () => {
            mT = !0, zT(), window.clearTimeout(MT), window.removeEventListener("keydown", gT, !0)
          }
        }), [TT])
      },
      Bn = TT => {
        let {
          row: UT,
          capturing: mT,
          onCapture: WT,
          holdFillRef: MT,
          onRebind: gT,
          swapped: nT
        } = TT;
        const {
          t: HT
        } = (0, zT.z)();
        if ("fixed" === UT.kind) return (0, VT.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, VT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, VT.jsx)("div", {
              className: "ControlName",
              children: HT(UT.labelKey)
            }), (0, VT.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, VT.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, VT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, VT.jsx)(ez, {
                    glyph: "move" === UT.stick ? (0, jT.t)() : (0, jT.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: kT
        } = UT, lT = (0, jT.i)(kT), LT = (0, jT.m)(kT), pT = lT !== LT && (0, jT.e)(kT, LT);
        return (0, VT.jsxs)("div", {
          className: PT()("ControlRow PadControlRow", {
            Capturing: mT
          }),
          children: [(0, VT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, VT.jsx)("div", {
              className: "ControlName",
              children: HT(Dg.h[kT])
            }), (0, VT.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!mT && (0, VT.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, VT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WT(kT)
                  },
                  children: (0, VT.jsx)(ez, {
                    glyph: lT
                  })
                }), pT && (0, VT.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: HT("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    gT(kT, LT)
                  },
                  children: (0, VT.jsx)(ag.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), mT && (0, VT.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, VT.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, VT.jsx)("span", {
                    children: HT("controller:settingsCapturePrompt")
                  }), (0, VT.jsx)("div", {
                    ref: MT,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, VT.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WT(null)
                  },
                  children: "\xd7"
                })]
              }), mT && (0, VT.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, VT.jsx)(Eg.d, {
                  text: HT((0, jT.e)(kT, (0, jT.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Eg.e
                  }),
                  glyph: (0, jT.i)("menuBack")
                })
              })]
            })]
          }), nT.map((TT => (0, VT.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, VT.jsx)(Eg.d, {
              text: HT("controller:settingsSwapNotice", {
                action: HT(Dg.h[TT]),
                button: Eg.e
              }),
              glyph: (0, jT.i)(TT)
            })
          }, TT))), mT && (0, VT.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Dg.t}ms`
            }
          })]
        })
      },
      Zn = [],
      cn = TT => {
        let {
          layoutSetting: UT
        } = TT;
        const {
          t: mT
        } = (0, zT.z)(), WT = (0, LT.n)();
        (0, pT.D)();
        const MT = (0, sT.useRef)(null),
          [gT, nT] = (0, sT.useState)(null),
          HT = (0, sT.useCallback)(((TT, UT) => {
            const mT = (0, LT.k)().bindings;
            (0, jT.D)(TT, UT);
            const WT = (0, jT.u)(mT, TT);
            nT(WT.length > 0 ? {
              action: TT,
              swapped: WT
            } : null)
          }), []),
          [kT, ZT] = ((TT, UT) => {
            const [mT, WT] = (0, sT.useState)(null), zT = (0, sT.useMemo)((() => mT ? () => {
              const zT = (0, jT.i)("menuBack"),
                MT = new Dg.c(zT, (0, jT.i)("menuConfirm"), (TT => (0, jT.e)(mT, TT)));
              return {
                onFrame: (WT, gT) => {
                  var nT;
                  const HT = WT.frame.timestampMs,
                    kT = MT.update({
                      ...WT,
                      isDown: TT => (0, BT.H)(WT.frame.values, TT)
                    }, HT);
                  null === (nT = TT.current) || void 0 === nT || nT.style.setProperty("width", 100 * MT.getBindHoldProgress(HT) + "%"), kT && ("bind" === kT.kind ? (lT.e.consumeButton(kT.button), UT(mT, kT.button)) : lT.e.consumeButton(zT), gT())
                },
                onEnd: () => {
                  WT(null)
                },
                timeoutMs: Dg.t
              }
            } : null), [mT, TT, UT]);
            return pn(zT), [mT, WT]
          })(MT, HT),
          cT = TT => {
            TT && nT(null), ZT(TT)
          };
        (0, sT.useEffect)((() => {
          if (!gT) return;
          const TT = window.setTimeout((() => {
            nT(null)
          }), Dg.pb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [gT]);
        const vT = !WT.swapSticks && 0 === Object.keys(WT.bindings).length;
        return (0, VT.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, VT.jsx)("div", {
            className: "SliderText",
            children: mT("controller:settingsRemap")
          }), (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mT("controller:settingsRemapHint")
          }), (0, VT.jsx)(Xg.I, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: vT,
            onClick: () => {
              cT(null), nT(null), (0, jT.F)()
            },
            children: mT("controller:settingsResetAll")
          }), UT, Dg.hb.map(((TT, UT) => (0, VT.jsx)(jn.d, {
            title: mT(TT.titleKey),
            defaultOpen: 0 === UT,
            children: TT.rows.map((TT => (0, VT.jsx)(Bn, {
              row: TT,
              capturing: "action" === TT.kind && TT.action === kT,
              onCapture: cT,
              holdFillRef: MT,
              onRebind: HT,
              swapped: "action" === TT.kind && (null === gT || void 0 === gT ? void 0 : gT.action) === TT.action ? gT.swapped : Zn
            }, "action" === TT.kind ? TT.action : TT.labelKey)))
          }, TT.titleKey)))]
        })
      },
      vn = TT => {
        let {
          deadzone: UT,
          dotRef: mT,
          labelKey: WT
        } = TT;
        const {
          t: MT
        } = (0, zT.z)();
        return (0, VT.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, VT.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, VT.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * UT + "%",
                height: 100 * UT + "%"
              }
            }), (0, VT.jsx)("div", {
              ref: mT,
              className: "ControllerTesterDot"
            })]
          }), (0, VT.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: MT(WT)
          })]
        })
      },
      fn = (TT, UT, mT, WT) => {
        var zT;
        TT && (TT.style.left = 50 + 50 * Math.max(-1, Math.min(1, UT.x)) + "%", TT.style.top = 50 + 50 * Math.max(-1, Math.min(1, UT.y)) + "%", null === (zT = TT.parentElement) || void 0 === zT || zT.classList.toggle("Active", WT || Math.hypot(UT.x, UT.y) > mT))
      },
      qn = TT => {
        const UT = {
            deadzone: TT.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          mT = {
            deadzone: TT.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return TT.swapSticks ? {
          left: mT,
          right: UT
        } : {
          left: UT,
          right: mT
        }
      },
      bn = () => {
        const {
          t: TT
        } = (0, zT.z)(), UT = (() => {
          const [TT, UT] = (0, sT.useState)((() => gT.e.getActivePad()));
          return (0, vz.g)(gT.d, (() => {
            UT(gT.e.getActivePad())
          })), TT
        })(), mT = qn((0, LT.n)()), WT = (0, sT.useRef)(null), MT = (0, sT.useRef)(null), nT = (0, sT.useRef)([]), HT = (0, sT.useRef)(null), kT = (0, sT.useRef)(null), [pT, ZT] = (TT => {
          const [UT, mT] = (0, sT.useState)(!1), WT = (0, sT.useMemo)((() => UT ? () => {
            const UT = (0, jT.i)("menuBack"),
              WT = new Dg.f;
            return {
              onFrame: (mT, zT) => {
                var MT;
                const gT = WT.update({
                  pressed: mT.wasPressed(UT),
                  fn: mT.isHeld(UT)
                }, mT.frame.timestampMs);
                null === (MT = TT.current) || void 0 === MT || MT.style.setProperty("width", 100 * gT + "%"), gT >= 1 && (lT.e.consumeButton(UT), zT())
              },
              onEnd: () => {
                mT(!1)
              }
            }
          } : null), [UT, TT]);
          return pn(WT), [UT, mT]
        })(MT);
        (0, sT.useEffect)((() => {
          const TT = TT => {
            for (const mT of BT.X) {
              const UT = (0, BT.k)(mT),
                WT = nT.current[UT];
              if (!WT) continue;
              const zT = TT.values[UT];
              WT.classList.toggle("Pressed", zT >= BT.v), (0, BT.L)(UT) && WT.style.setProperty("--trigger-fill", `${Math.round(100*zT)}%`)
            }
            const UT = qn((0, LT.k)());
            fn(HT.current, TT.leftStick, UT.left.deadzone, TT.values[(0, BT.k)("LS")] >= BT.v), fn(kT.current, TT.rightStick, UT.right.deadzone, TT.values[(0, BT.k)("RS")] >= BT.v)
          };
          return UT || TT((0, BT.u)()), gT.e.onFrame(TT)
        }), [UT]), (0, sT.useEffect)((() => {
          UT || ZT(!1)
        }), [UT, ZT]), (0, sT.useEffect)((() => {
          var TT;
          pT && (null === (TT = WT.current) || void 0 === TT || TT.scrollIntoView({
            block: "nearest"
          }))
        }), [pT]);
        const cT = Dg.cb.find((TT => TT.value === (null === UT || void 0 === UT ? void 0 : UT.family)));
        return (0, VT.jsxs)("div", {
          ref: WT,
          className: PT()("SettingBox ControllerTester", {
            Testing: pT
          }),
          children: [(0, VT.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, VT.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [UT && (0, VT.jsx)("div", {
                children: TT("controller:settingsTesterFamily", {
                  family: cT ? TT(cT.labelKey) : UT.family
                })
              }), UT && (0, VT.jsx)("div", {
                className: "ControllerTesterPadId",
                children: UT.id
              }), !UT && (0, VT.jsx)("div", {
                children: TT("controller:settingsTesterNoPad")
              })]
            }), (UT || pT) && (0, VT.jsx)(Xg.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                ZT(!pT)
              },
              children: TT(pT ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), UT && !pT && (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsTesterHint")
          }), pT && (0, VT.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, VT.jsx)(Eg.d, {
              text: TT("controller:settingsTesterTesting", {
                button: Eg.e
              }),
              glyph: (0, jT.i)("menuBack")
            }), (0, VT.jsx)("div", {
              ref: MT,
              className: "ControllerTesterExitFill"
            })]
          }), (0, VT.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, VT.jsx)(vn, {
              deadzone: mT.left.deadzone,
              dotRef: HT,
              labelKey: mT.left.labelKey
            }), (0, VT.jsx)("div", {
              className: "ControllerTesterButtons",
              children: BT.X.map((TT => {
                const mT = (0, BT.k)(TT);
                return (0, VT.jsx)("div", {
                  ref: TT => {
                    nT.current[mT] = TT
                  },
                  className: (0, BT.L)(mT) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, VT.jsx)(ez, {
                    glyph: TT,
                    family: null === UT || void 0 === UT ? void 0 : UT.family
                  })
                }, TT)
              }))
            }), (0, VT.jsx)(vn, {
              deadzone: mT.right.deadzone,
              dotRef: kT,
              labelKey: mT.right.labelKey
            })]
          })]
        })
      },
      On = (0, sT.memo)((function() {
        const {
          t: TT
        } = (0, zT.z)(), UT = (0, LT.n)(), [mT, WT] = (0, sT.useState)(!1);
        return (0, sT.useEffect)((() => {
          if (!mT) return;
          const TT = window.setTimeout((() => {
            WT(!1)
          }), Dg.pb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [mT]), (0, VT.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, VT.jsx)(og, {
            text: TT("controller:settingsLook")
          }), (0, VT.jsx)(Rg, {
            settingKey: "lookSensitivityX",
            label: TT("controller:settingsLookSensitivityX"),
            range: Dg.ib,
            format: Dg.I
          }), (0, VT.jsx)(Rg, {
            settingKey: "lookSensitivityY",
            label: TT("controller:settingsLookSensitivityY"),
            range: Dg.ib,
            format: Dg.I
          }), (0, VT.jsx)(Rg, {
            settingKey: "aimLookSensitivity",
            label: TT("controller:settingsAimLookSensitivity"),
            range: Dg.l,
            format: Dg.I
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsLookCurve"),
            hint: TT("controller:settingsLookCurveHint"),
            options: Dg.Z,
            value: UT.lookCurve,
            onChange: TT => {
              (0, LT.m)({
                lookCurve: TT
              })
            }
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsInvertLookX"),
            checked: UT.invertLookX,
            onClick: TT => {
              (0, LT.m)({
                invertLookX: TT
              })
            }
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsInvertLookY"),
            checked: UT.invertLookY,
            onClick: TT => {
              (0, LT.m)({
                invertLookY: TT
              })
            }
          }), (0, VT.jsx)(Rg, {
            settingKey: "lookDeadzone",
            label: TT("controller:settingsLookDeadzone"),
            range: Dg.B,
            format: Dg.G
          }), (0, VT.jsx)(nn, {}), (0, VT.jsx)(og, {
            text: TT("controller:settingsMovement")
          }), (0, VT.jsx)(Rg, {
            settingKey: "moveDeadzone",
            label: TT("controller:settingsMoveDeadzone"),
            range: Dg.B,
            format: Dg.G
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsAutoSprint"),
            checked: UT.autoSprint,
            onClick: TT => {
              (0, LT.m)({
                autoSprint: TT
              })
            },
            circleInfoText: TT("controller:settingsAutoSprintInfo")
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsSneak"),
            options: Dg.mb,
            value: UT.sneakMode,
            onChange: TT => {
              (0, LT.m)({
                sneakMode: TT
              })
            }
          }), (0, VT.jsx)(og, {
            text: TT("controller:settingsButtons")
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsPromptFamily"),
            options: Dg.cb,
            value: UT.promptFamily,
            onChange: TT => {
              (0, LT.m)({
                promptFamily: TT
              })
            }
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsHideButtonHints"),
            checked: UT.hideButtonHints,
            onClick: TT => {
              (0, LT.m)({
                hideButtonHints: TT
              })
            }
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsVibration"),
            checked: UT.vibration,
            onClick: TT => {
              (0, LT.m)({
                vibration: TT
              }), TT && gz("preview")
            }
          }), (0, VT.jsx)(Rg, {
            settingKey: "cursorSpeed",
            label: TT("controller:settingsCursorSpeed"),
            range: Dg.y,
            format: Dg.I
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsCursorMagnetism"),
            checked: UT.cursorMagnetism,
            onClick: TT => {
              (0, LT.m)({
                cursorMagnetism: TT
              })
            }
          }), (0, VT.jsx)(Ng.b, {
            label: TT("controller:settingsMenuBackToCategories"),
            checked: UT.menuBackToCategories,
            onClick: TT => {
              (0, LT.m)({
                menuBackToCategories: TT
              })
            }
          }), (0, VT.jsx)(cn, {
            layoutSetting: (0, VT.jsxs)(VT.Fragment, {
              children: [jT.h.map((mT => (0, VT.jsx)(Ng.b, {
                label: TT(Dg.U[mT]),
                checked: (0, jT.C)(mT, UT),
                onClick: TT => {
                  WT(!(0, jT.J)(mT, TT))
                }
              }, mT))), mT && (0, VT.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: TT("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, VT.jsx)(kn, {}), (0, VT.jsx)(og, {
            text: TT("controller:settingsAlternatives")
          }), (0, VT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsAlternativesHint")
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsMenuNavigation"),
            hint: TT("controller:settingsMenuNavigationHint"),
            options: Dg.ab,
            value: UT.menuNavigation,
            onChange: TT => {
              (0, LT.m)({
                menuNavigation: TT
              })
            }
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsInventoryNavigation"),
            hint: TT("controller:settingsInventoryNavigationHint"),
            options: Dg.T,
            value: UT.inventoryNavigation,
            onChange: TT => {
              (0, LT.m)({
                inventoryNavigation: TT
              })
            }
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsQuickChat"),
            hint: TT("controller:settingsQuickChatHint"),
            options: Dg.gb,
            value: UT.quickChat,
            onChange: TT => {
              (0, LT.m)({
                quickChat: TT
              })
            }
          }), (0, VT.jsx)(Ag, {
            label: TT("controller:settingsLeaderboardButton"),
            hint: TT("controller:settingsLeaderboardButtonHint"),
            options: Dg.W,
            value: UT.leaderboardButton,
            onChange: TT => {
              (0, LT.m)({
                leaderboardButton: TT
              })
            }
          }), (0, VT.jsx)(og, {
            text: TT("controller:settingsTester")
          }), (0, VT.jsx)(bn, {})]
        })
      }));
    (0, zT.d)(WT);
    for (const dn of (0, MT.p)()) dn.connected ? gT.e.handleConnectionEvent(dn) : gT.e.handleDisconnectionEvent(dn);
    const en = () => null !== gT.e.getActivePad(),
      Yn = () => zm.getState(),
      Jn = () => zm.isSteppingSlots(),
      xn = (TT, UT) => {
        const mT = Tz.getFocused();
        Tz.isActive() && mT && TT.contains(mT) && Tz.setFocus(UT, {
          scroll: !1
        })
      }
  },
  8289: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      h: () => kT
    });
    var WT = mT(1539),
      zT = mT(1536);
    const MT = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      gT = "28de",
      nT = new Set(["1205"]),
      HT = (TT, UT) => {
        const mT = (0, WT.d)(TT);
        if ((null === mT || void 0 === mT ? void 0 : mT.vendor) === gT) return nT.has(mT.product) ? "steamdeck" : "xbox";
        if (mT && MT[mT.vendor]) return MT[mT.vendor];
        if ((0, zT.b)(TT)) return "nintendo";
        const HT = `${TT} ${null!==UT&&void 0!==UT?UT:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(HT) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(HT) ? "nintendo" : /steam deck/.test(HT) ? "steamdeck" : "xbox"
      },
      kT = TT => {
        var UT;
        return (null === (UT = (0, WT.d)(TT)) || void 0 === UT ? void 0 : UT.vendor) === gT
      }
  },
  8331: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      g: () => nT
    });
    var WT = mT(8282);
    const zT = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      MT = new Set(["capture", "gameplay"]),
      gT = ["Up", "Down", "Left", "Right"],
      nT = TT => gT.includes(TT),
      HT = .25;
    const kT = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.fn = new Array(WT.V).fill(!1), this.previousHeld = new Array(WT.V).fill(!1), this.consumedButtons = new Array(WT.V).fill(!1), this.suppressedReleases = new Array(WT.V).fill(!1), this.wakeOwned = new Array(WT.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, WT.u)()
      }
      register(TT) {
        return this.consumers.has(TT.name) && console.warn(`Controller consumer "${TT.name}" registered twice; the newer one replaces it.`), this.consumers.set(TT.name, TT), () => {
          var UT;
          this.consumers.get(TT.name) === TT && (this.activeName === TT.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (UT = this.peek) || void 0 === UT ? void 0 : UT.over) === TT.name && (this.peek = null), this.consumers.delete(TT.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(TT) {
        return this.fn[(0, WT.k)(TT)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.fn = new Array(WT.V).fill(!1), this.previousHeld = new Array(WT.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, WT.u)()
      }
      dispatch(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = TT, this.previousHeld = this.fn, this.fn = (0, WT.p)(TT.values, this.previousHeld);
        for (let MT = 0; MT < WT.V; MT++) this.suppressedReleases[MT] = !this.fn[MT] && this.consumedButtons[MT], this.fn[MT] || (this.consumedButtons[MT] = !1), this.wakeOwned[MT] && (this.fn[MT] ? (this.consumedButtons[MT] = !0, this.wakeOwned[MT] = !1) : TT.values[MT] < WT.S && (this.wakeOwned[MT] = !1));
        Math.hypot(TT.leftStick.x, TT.leftStick.y) < HT && (this.leftStickConsumed = !1), Math.hypot(TT.rightStick.x, TT.rightStick.y) < HT && (this.rightStickConsumed = !1);
        const zT = this.pickActive();
        if ((null === zT || void 0 === zT ? void 0 : zT.name) !== this.activeName) {
          var gT, nT, kT, jT, lT, LT;
          const TT = this.activeName,
            UT = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            mT = null !== (gT = null === zT || void 0 === zT || null === (nT = zT.peek) || void 0 === nT ? void 0 : nT.call(zT)) && void 0 !== gT ? gT : null,
            MT = null === TT && !!mT && !(null === (kT = this.consumers.get(mT.over)) || void 0 === kT || !kT.onPeekFrame),
            HT = mT && (mT.over === TT || MT) ? mT : null,
            pT = null !== this.peek && this.peek.over === (null === zT || void 0 === zT ? void 0 : zT.name) ? this.peek : null;
          this.deactivateCurrent(null !== HT, null !== pT), this.activeName = null !== (jT = null === zT || void 0 === zT ? void 0 : zT.name) && void 0 !== jT ? jT : null, null === TT || this.handOffPending || this.consumeAllHeld();
          const BT = null === (lT = null !== HT && void 0 !== HT ? HT : pT) || void 0 === lT ? void 0 : lT.stick;
          "left" === BT && UT.left ? this.leftStickConsumed = !1 : "right" === BT && UT.right && (this.rightStickConsumed = !1), this.peek = HT, zT || null === TT ? zT && (null === (LT = this.idleResume) || void 0 === LT ? void 0 : LT.name) === zT.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: TT,
            left: UT.left && this.leftStickConsumed,
            right: UT.right && this.rightStickConsumed
          }, zT && (this.idleResume = null);
          for (let zT = 0; zT < WT.V; zT++) this.previousHeld[zT] && !this.fn[zT] && (this.suppressedReleases[zT] = !0)
        }
        var pT, BT;
        (this.handOffPending = !1, zT) && (mT && !MT.has(zT.name) && this.consumeWakePress(zT), zT.onFrame(this.buildInput(TT, UT, mT)), this.peek && (null === (pT = this.consumers.get(this.peek.over)) || void 0 === pT || null === (BT = pT.onPeekFrame) || void 0 === BT || BT.call(pT, this.buildInput(TT, UT, !1, this.peek.stick))))
      }
      consumeWakePress(TT) {
        for (let zT = 0; zT < WT.V; zT++) {
          var UT, mT;
          const MT = WT.X[zT];
          (null !== (UT = null === (mT = TT.wakePressActs) || void 0 === mT ? void 0 : mT.call(TT, MT)) && void 0 !== UT ? UT : gT.includes(MT)) || (this.fn[zT] ? this.consumedButtons[zT] = !0 : this.lastFrame.values[zT] >= WT.Q && (this.wakeOwned[zT] = !0))
        }
      }
      pickActive() {
        for (const TT of zT) {
          const UT = this.consumers.get(TT);
          if (UT && UT.isActive()) return UT
        }
        return null
      }
      deactivateCurrent() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var mT, WT, zT, MT;
        this.activeName && (null === (mT = this.consumers.get(this.activeName)) || void 0 === mT || null === (WT = mT.onDeactivate) || void 0 === WT || WT.call(mT, TT));
        this.peek && !UT && (null === (zT = this.consumers.get(this.peek.over)) || void 0 === zT || null === (MT = zT.onDeactivate) || void 0 === MT || MT.call(zT, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let zT = 0; zT < WT.V; zT++) this.fn[zT] && (this.consumedButtons[zT] = !0);
        const {
          leftStick: UT,
          rightStick: mT
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== TT && (this.leftStickConsumed || Math.hypot(UT.x, UT.y) >= HT), this.rightStickConsumed = "right" !== TT && (this.rightStickConsumed || Math.hypot(mT.x, mT.y) >= HT)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(TT) {
        const UT = (0, WT.k)(TT);
        this.fn[UT] && (this.consumedButtons[UT] = !0)
      }
      buildInput(TT, UT, mT, zT) {
        const MT = this.fn,
          gT = this.previousHeld,
          nT = zT ? new Array(WT.V).fill(!0) : [...this.consumedButtons],
          HT = zT ? nT : [...this.suppressedReleases],
          kT = !this.leftStickConsumed && (!zT || "left" === zT),
          jT = !this.rightStickConsumed && (!zT || "right" === zT);
        return {
          frame: TT,
          dtMs: UT,
          isHeld: TT => {
            const UT = (0, WT.k)(TT);
            return MT[UT] && !nT[UT]
          },
          wasPressed: TT => {
            const UT = (0, WT.k)(TT);
            return MT[UT] && !gT[UT] && !nT[UT]
          },
          wasReleased: TT => {
            const UT = (0, WT.k)(TT);
            return !MT[UT] && gT[UT] && !HT[UT]
          },
          value: UT => {
            const mT = (0, WT.k)(UT);
            return nT[mT] ? 0 : TT.values[mT]
          },
          leftStick: kT ? TT.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: jT ? TT.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: mT
        }
      }
    }
  },
  8305: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT.d,
      g: () => lT.e,
      k: () => dT,
      l: () => wT,
      m: () => tT,
      n: () => aT
    });
    var WT = mT(63),
      zT = mT(31),
      MT = mT(1567),
      gT = mT(44),
      nT = mT(8313),
      HT = mT(8282),
      kT = mT(8300),
      jT = mT(8277),
      lT = mT(2125),
      LT = mT(8322);
    const pT = {
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
      BT = "controllerSettings",
      ZT = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      cT = ["auto", ...nT.e],
      vT = (TT, UT) => "string" === typeof UT && TT.includes(UT),
      fT = TT => UT => "number" === typeof UT && Number.isFinite(UT) ? (0, LT.w)(UT, TT) : void 0,
      qT = TT => "boolean" === typeof TT ? TT : void 0,
      iT = TT => UT => vT(TT, UT) ? UT : void 0,
      bT = {
        lookSensitivityX: fT(LT.ib),
        lookSensitivityY: fT(LT.ib),
        aimLookSensitivity: fT(LT.l),
        invertLookX: qT,
        invertLookY: qT,
        lookCurve: iT(HT.M),
        lookDeadzone: fT(LT.B),
        moveDeadzone: fT(LT.B),
        swapSticks: qT,
        autoSprint: qT,
        sneakMode: iT(["toggle", "hold"]),
        tapHoldTime: iT(["short", "medium", "long"]),
        attackMode: iT(["hold", "toggle"]),
        promptFamily: iT(cT),
        hideButtonHints: qT,
        vibration: qT,
        cursorSpeed: fT(LT.y),
        cursorMagnetism: qT,
        buttonRepeat: iT(HT.n),
        largePointer: qT,
        menuBackToCategories: qT,
        swapConfirmBack: qT,
        menuNavigation: iT(["hybrid", "focus", "cursor"]),
        inventoryNavigation: iT(["hybrid", "slot", "cursor"]),
        quickChat: iT(["wheel", "off"]),
        leaderboardButton: iT(["shop", "leaderboard"]),
        gyroAiming: qT,
        gyroSensitivity: fT(LT.P),
        gyroActivation: iT(["always", "aiming", "button"]),
        gyroButton: iT(HT.X),
        emoteButton: iT(["tapHold", "wheel"])
      },
      OT = [{
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
      eT = TT => {
        const UT = {};
        if ("object" !== typeof TT || null === TT) return UT;
        for (const [mT, WT] of Object.entries(TT)) Object.prototype.hasOwnProperty.call(kT.g, mT) && vT(HT.X, WT) && (UT[mT] = WT);
        return UT
      },
      YT = TT => {
        const UT = {};
        for (const mT of Object.keys(pT))("bindings" === mT ? Object.keys(TT.bindings).length > 0 : TT[mT] !== pT[mT]) && (UT[mT] = TT[mT]);
        0 !== Object.keys(UT).length ? gT.l.setItem(BT, UT) : gT.l.removeItem(BT)
      };
    let JT = (() => {
        const TT = gT.l.getItem(BT),
          UT = (TT => {
            const UT = "object" === typeof TT && null !== TT ? TT : {},
              mT = {
                ...pT,
                bindings: eT(UT.bindings)
              };
            for (const zT of Object.keys(bT)) {
              const TT = bT[zT](UT[zT]);
              void 0 !== TT && (mT[zT] = TT)
            }
            const WT = Object.keys(UT).filter((TT => !!Object.prototype.hasOwnProperty.call(pT, TT) && ("bindings" === TT ? "object" !== typeof UT.bindings || null === UT.bindings || Object.keys(UT.bindings).length !== Object.keys(mT.bindings).length : mT[TT] !== UT[TT])));
            return WT.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${WT.join(", ")}`), mT
          })(TT);
        return null !== TT && void 0 !== TT && YT(UT), UT
      })(),
      xT = {
        ...JT,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const TT = {},
            UT = new URLSearchParams(window.location.search);
          for (const {
              param: mT,
              key: WT
            }
            of OT) {
            const zT = bT[WT](UT.get(mT));
            void 0 !== zT && (TT[WT] = zT)
          }
          return TT
        })()
      };
    const dT = () => xT,
      wT = () => {
        var TT, UT;
        const mT = dT().promptFamily;
        return "auto" !== mT ? mT : null !== (TT = null === (UT = jT.e.getActivePad()) || void 0 === UT ? void 0 : UT.family) && void 0 !== TT ? TT : "xbox"
      },
      tT = TT => {
        const UT = xT;
        JT = {
          ...JT,
          ...TT
        }, YT(JT), xT = {
          ...xT,
          ...TT
        }, (TT => {
          zT.j.EZ(lT.e, xT), ZT.some((UT => TT[UT] !== xT[UT])) && zT.j.EZ(lT.d, xT)
        })(UT)
      },
      aT = () => {
        const [TT, UT] = (0, WT.useState)(xT);
        return (0, MT.g)(lT.e, UT), TT
      }
  },
  8787: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    const WT = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      zT = TT => WT.has(TT)
  },
  8277: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => ZT.c,
      e: () => qT
    });
    var WT = mT(8282),
      zT = mT(8289);
    const MT = .1,
      gT = .3;
    class nT {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(TT, UT) {
        const mT = null === this.lastMs ? 0 : Math.min(Math.max(0, UT - this.lastMs), 100);
        this.lastMs = UT;
        const WT = Math.hypot(TT.x, TT.y);
        if (WT >= gT) return this.anchor = null, void(this.returning = !0);
        WT >= MT || (this.returning = !1);
        const zT = this.anchor;
        if (!zT || Math.hypot(TT.x - zT.x, TT.y - zT.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: TT.x,
          y: TT.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += mT, this.steadyMs < 1e3) return;
        const nT = Math.max(WT, Math.hypot(zT.x, zT.y));
        nT < MT ? this.deadzone = 0 : this.returning && (this.deadzone = nT + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(TT) {
        return Math.hypot(TT.x, TT.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : TT
      }
    }
    const HT = (TT, UT) => {
        var mT, WT;
        return null !== (mT = TT && (null === (WT = Object.getOwnPropertyDescriptor(TT, UT)) || void 0 === WT ? void 0 : WT.get)) && void 0 !== mT ? mT : null
      },
      kT = TT => {
        const UT = TT.vendorName;
        return "string" === typeof UT ? UT : void 0
      },
      jT = ((TT, UT) => {
        const mT = HT(TT, "index"),
          WT = HT(TT, "id"),
          zT = HT(TT, "connected"),
          MT = HT(TT, "mapping"),
          gT = HT(TT, "buttons"),
          nT = HT(TT, "axes"),
          jT = HT(UT, "pressed"),
          lT = HT(UT, "value");
        return mT && WT && zT && MT && gT && nT && jT && lT ? TT => {
          const UT = gT.call(TT),
            HT = nT.call(TT),
            LT = {
              index: Number(mT.call(TT)),
              id: String(WT.call(TT)),
              connected: !0 === zT.call(TT),
              mapping: String(MT.call(TT)),
              buttons: [],
              axes: [],
              vendorName: kT(TT)
            };
          for (let mT = 0; mT < UT.length; mT++) LT.buttons.push({
            pressed: !0 === jT.call(UT[mT]),
            value: Number(lT.call(UT[mT]))
          });
          for (let mT = 0; mT < HT.length; mT++) LT.axes.push(Number(HT[mT]));
          return LT
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      lT = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var LT = mT(1529),
      pT = mT(1536);
    const BT = TT => ({
      pressed: TT,
      value: TT ? 1 : 0
    });
    var ZT = mT(2125);
    const cT = gT,
      vT = TT => {
        const UT = new Array(WT.V).fill(0);
        for (let mT = 0; mT < WT.V && mT < TT.buttons.length; mT++) {
          const zT = TT.buttons[mT];
          UT[mT] = zT.pressed && !(0, WT.L)(mT) ? Math.max(zT.value, WT.v) : zT.value
        }
        return UT
      },
      fT = (TT, UT) => {
        var mT, WT;
        return {
          x: null !== (mT = TT.axes[UT]) && void 0 !== mT ? mT : 0,
          y: null !== (WT = TT.axes[UT + 1]) && void 0 !== WT ? WT : 0
        }
      };
    const qT = new class {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jT;
        this.readGamepads = TT, this.requireTrustedPads = UT, this.nativeReader = mT, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = TT => {
          TT.isTrusted && this.trustedIndices.add(TT.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = TT => {
          this.trustedIndices.delete(TT.gamepad.index)
        }, this.Cl = TT => {
          if (this.rafId = 0, !this.running) return;
          const UT = 0 === this.lastTimestampMs ? 16 : Math.min(100, TT - this.lastTimestampMs);
          this.lastTimestampMs = TT;
          try {
            this.poll(TT, UT)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Cl))
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
      onFrame(TT) {
        return this.frameListeners.add(TT), () => {
          this.frameListeners.delete(TT)
        }
      }
      onActivePadChanged(TT) {
        return this.connectionListeners.add(TT), () => {
          this.connectionListeners.delete(TT)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(TT) {
        return this.connectedListeners.add(TT), () => {
          this.connectedListeners.delete(TT)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const TT = this.readPads()[this.activeInfo.index],
          UT = TT ? this.readPad(TT) : null;
        return UT && UT.id === this.activeInfo.id ? TT : null
      }
      poll(TT, UT) {
        var mT, zT;
        const MT = this.readPads();
        let gT = null,
          HT = !1;
        const kT = [],
          jT = Math.max(MT.length, this.slots.length);
        for (let qT = 0; qT < jT; qT++) {
          var lT;
          const UT = qT < MT.length ? MT[qT] : null,
            mT = UT ? this.readPad(UT) : null;
          if (!mT || !mT.connected || !this.isUsable(mT)) {
            this.slots[qT] = null;
            continue
          }
          let zT = this.slots[qT];
          zT && zT.id === mT.id || (zT = {
            id: mT.id,
            fn: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new nT,
            rightRest: new nT
          }, this.slots[qT] = zT);
          const jT = fT(mT, 0),
            LT = fT(mT, 2);
          !zT.leftSettled && Math.hypot(jT.x, jT.y) < cT && (zT.leftSettled = !0), !zT.rightSettled && Math.hypot(LT.x, LT.y) < cT && (zT.rightSettled = !0), zT.leftRest.observe(jT, TT), zT.rightRest.observe(LT, TT);
          const pT = vT(mT),
            BT = (0, WT.p)(pT, zT.fn),
            ZT = zT.fn,
            iT = BT.map(((TT, UT) => TT && !ZT[UT]));
          zT.fn = BT;
          const bT = {
            pad: mT,
            slot: zT,
            values: pT
          };
          qT === (null === (lT = this.activeInfo) || void 0 === lT ? void 0 : lT.index) && mT.id === this.activeInfo.id ? (gT = bT, HT = iT.includes(!0)) : iT.includes(!0) && kT.push({
            polled: bT,
            rose: iT
          })
        }
        const LT = this.slots.some((TT => null !== TT));
        if (LT !== this.anyPadConnected) {
          this.anyPadConnected = LT;
          for (const TT of this.connectedListeners) TT()
        }
        const pT = null !== (mT = null === (zT = gT) || void 0 === zT ? void 0 : zT.slot.fn) && void 0 !== mT ? mT : [],
          BT = HT ? void 0 : kT.find((TT => {
            let {
              rose: UT
            } = TT;
            return UT.some(((TT, UT) => TT && !pT[UT]))
          }));
        if (BT ? (gT = BT.polled, this.setActive(BT.polled.pad)) : this.activeInfo && !gT && this.setActive(null), !gT || !this.activeInfo) return;
        const ZT = ((TT, UT) => {
          let {
            pad: mT,
            slot: zT,
            values: MT
          } = TT;
          const gT = (0, WT.u)(UT);
          return gT.values = MT, zT.leftSettled && (gT.leftStick = zT.leftRest.apply(fT(mT, 0))), zT.rightSettled && (gT.rightStick = zT.rightRest.apply(fT(mT, 2))), gT
        })(gT, TT);
        for (const WT of this.frameListeners) WT(ZT, UT, this.activeInfo)
      }
      readPad(TT) {
        const UT = this.readSnapshot(TT);
        return UT && (0, pT.c)(UT) ? (TT => {
          const UT = UT => {
              var mT;
              return null !== (mT = TT.buttons[UT]) && void 0 !== mT ? mT : BT(!1)
            },
            mT = UT => {
              var mT;
              return null !== (mT = TT.axes[UT]) && void 0 !== mT ? mT : 0
            },
            WT = TT.axes.length > 9,
            zT = WT ? (TT => {
              const UT = 0 !== TT;
              return {
                up: UT && (TT >= -1 && TT < -.7 || TT >= .95 && TT <= 1),
                right: UT && TT >= -.75 && TT < -.1,
                down: UT && TT >= -.2 && TT < .45,
                left: UT && TT >= .4 && TT <= 1
              }
            })(mT(9)) : {
              up: mT(5) < -.5,
              down: mT(5) > .5,
              left: mT(4) < -.5,
              right: mT(4) > .5
            };
          return {
            ...TT,
            mapping: "standard",
            buttons: [UT(1), UT(2), UT(0), UT(3), UT(4), UT(5), UT(6), UT(7), UT(8), UT(9), UT(10), UT(11), BT(zT.up), BT(zT.down), BT(zT.left), BT(zT.right), UT(12)],
            axes: [mT(0), mT(1), mT(2), mT(WT ? 5 : 3)]
          }
        })(UT) : UT
      }
      readSnapshot(TT) {
        if (this.nativeReader) try {
          return this.nativeReader(TT)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (TT => {
          const UT = TT;
          return {
            index: UT.index,
            id: UT.id,
            connected: UT.connected,
            mapping: UT.mapping,
            buttons: Array.from(UT.buttons, (TT => ({
              pressed: TT.pressed,
              value: TT.value
            }))),
            axes: Array.from(UT.axes),
            vendorName: kT(TT)
          }
        })(TT)
      }
      isUsable(TT) {
        return !(0, LT.f)(TT.id) && ("standard" !== TT.mapping ? (this.warnedNonStandardIds.has(TT.id) || (this.warnedNonStandardIds.add(TT.id), console.warn(`Controller "${TT.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(TT.index))
      }
      setActive(TT) {
        this.activeInfo = TT ? {
          index: TT.index,
          id: TT.id,
          family: (0, zT.d)(TT.id, TT.vendorName)
        } : null;
        for (const UT of this.connectionListeners) UT(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (TT) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", TT)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Cl))
      }
    }((() => lT ? lT.call(navigator) : []), !0);
    qT.listenForConnections()
  },
  8865: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      d: () => gT,
      h: () => nT,
      j: () => zT
    });
    var WT = mT(8874);
    const zT = TT => {
        const UT = [];
        TT.holdingGun && UT.push({
          kind: "reload"
        }), TT.touchscreenActionButton && UT.push({
          kind: "touchButton",
          label: TT.touchscreenActionButton
        });
        for (const MT of null !== (mT = null === (zT = TT.customButtons) || void 0 === zT ? void 0 : zT.filter(WT.g)) && void 0 !== mT ? mT : []) {
          var mT, zT;
          UT.push({
            kind: "customButton",
            id: MT.id,
            icon: MT.icon,
            description: MT.description
          })
        }
        return UT
      },
      MT = TT => TT.length >= 2,
      gT = TT => "specialAction" !== TT.kind,
      nT = (TT, UT) => {
        if (null === TT || null === UT) return TT === UT;
        if (TT.kind !== UT.kind) return !1;
        switch (TT.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return TT.action === UT.action;
          case "customButton":
            return TT.id === UT.id && TT.icon === UT.icon;
          case "touchButton":
            return TT.label === UT.label
        }
      }
  },
  8793: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = {
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
  8861: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT,
      f: () => pT,
      h: () => lT,
      j: () => BT
    });
    var WT = mT(63),
      zT = mT(31),
      MT = mT(1567),
      gT = mT(8865),
      nT = mT(8876);
    let HT = null;
    const kT = () => HT,
      jT = TT => {
        (0, gT.h)(HT, TT) || (HT = TT, zT.j.EZ(nT.g, HT))
      },
      lT = () => {
        const [TT, UT] = (0, WT.useState)(kT);
        return (0, MT.g)(nT.g, UT), TT
      };
    let LT = !1;
    const pT = TT => {
        TT !== LT && (LT = TT, zT.j.EZ(nT.i, TT))
      },
      BT = () => {
        const [TT, UT] = (0, WT.useState)(LT);
        return (0, MT.g)(nT.i, UT), TT
      }
  },
  8888: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      h: () => nT
    });
    var WT = mT(31),
      zT = mT(8876);
    let MT = !1;
    const gT = () => MT,
      nT = TT => {
        TT !== MT && (MT = TT, WT.j.EZ(zT.l, MT))
      }
  },
  8880: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      f: () => HT
    });
    var WT = mT(31),
      zT = mT(8876);
    let MT = null,
      gT = 0;
    const nT = () => MT,
      HT = TT => {
        null === TT && null === MT || (MT = null === TT ? null : {
          id: ++gT,
          holdMs: TT
        }, WT.j.EZ(zT.p, MT))
      }
  },
  8876: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      g: () => WT,
      i: () => zT,
      l: () => nT,
      p: () => HT,
      t: () => kT,
      w: () => gT
    });
    const WT = "controllerActionHintChanged",
      zT = "controllerActionWheelHintChanged",
      MT = "controllerOpenChat",
      gT = "controllerSneakToggledChanged",
      nT = "controllerAttackLatchedChanged",
      HT = "controllerDropStackHoldChanged",
      kT = "controllerPickBlockHintChanged"
  },
  8892: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      e: () => nT
    });
    var WT = mT(31),
      zT = mT(8876);
    let MT = !1;
    const gT = () => MT,
      nT = TT => {
        TT !== MT && (MT = TT, WT.j.EZ(zT.t, MT))
      }
  },
  8950: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      g: () => nT
    });
    var WT = mT(31),
      zT = mT(8876);
    let MT = !1;
    const gT = () => MT,
      nT = TT => {
        TT !== MT && (MT = TT, WT.j.EZ(zT.w, MT))
      }
  },
  8841: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      constructor() {
        this.downAtMs = null
      }
      update(TT, UT, mT, WT) {
        if (TT) return this.downAtMs = mT, null;
        if (null === this.downAtMs) return null;
        const zT = mT - this.downAtMs >= WT;
        return UT ? zT ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, zT ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8348: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      g: () => LT,
      k: () => nT,
      m: () => qT,
      o: () => fT
    });
    var WT = mT(44),
      zT = mT(8313),
      MT = mT(8282);
    const gT = (() => {
        try {
          return mT(8356)
        } catch {
          return null
        }
      })(),
      nT = [...MT.X, "LeftStick", "RightStick"],
      HT = new Map,
      kT = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      jT = (new Set(Object.values(kT)), {
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
      lT = (TT, UT) => {
        var mT, WT;
        return null !== (mT = null === (WT = jT[kT[TT]]) || void 0 === WT ? void 0 : WT[UT]) && void 0 !== mT ? mT : 1
      },
      LT = (TT, UT) => {
        const mT = `./${kT[TT]}/${UT}.svg`;
        let WT = HT.get(mT);
        return void 0 === WT && (WT = gT ? gT(mT) : "", HT.set(mT, WT)), WT
      },
      pT = new Set,
      BT = [],
      ZT = TT => {
        if (!pT.has(TT)) {
          pT.add(TT);
          for (const UT of nT) {
            const mT = LT(TT, UT);
            if (mT) {
              const TT = new Image;
              TT.crossOrigin = "anonymous", TT.src = mT, BT.push(TT)
            }
          }
        }
      },
      cT = "controllerGlyphFamily";
    let vT = null;
    const fT = TT => {
        TT !== vT && (vT = TT, WT.l.setItem(cT, TT), ZT(TT))
      },
      qT = () => {
        const TT = WT.l.getItem(cT);
        (0, zT.g)(TT) && TT !== vT && (vT = TT, ZT(TT))
      }
  },
  8967: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => PT,
      e: () => VT
    });
    var WT = mT(63),
      zT = mT(31),
      MT = mT(1567),
      gT = mT(8295),
      nT = mT(8277),
      HT = mT(8331),
      kT = mT(8305);
    const jT = {
        x: 0,
        y: 0,
        z: 0
      },
      lT = Math.PI / 180,
      LT = TT => Math.hypot(TT.x, TT.y, TT.z),
      pT = (TT, UT) => ({
        x: TT.x * UT,
        y: TT.y * UT,
        z: TT.z * UT
      }),
      BT = (TT, UT) => ({
        x: TT.x + UT.x,
        y: TT.y + UT.y,
        z: TT.z + UT.z
      }),
      ZT = (TT, UT) => ({
        x: TT.x - UT.x,
        y: TT.y - UT.y,
        z: TT.z - UT.z
      }),
      cT = TT => {
        const UT = LT(TT);
        return 0 === UT ? jT : pT(TT, 1 / UT)
      },
      vT = TT => ({
        min: {
          ...TT
        },
        max: {
          ...TT
        }
      }),
      fT = (TT, UT) => ({
        min: {
          x: Math.min(TT.min.x, UT.x),
          y: Math.min(TT.min.y, UT.y),
          z: Math.min(TT.min.z, UT.z)
        },
        max: {
          x: Math.max(TT.max.x, UT.x),
          y: Math.max(TT.max.y, UT.y),
          z: Math.max(TT.max.z, UT.z)
        }
      }),
      qT = (TT, UT) => TT.max.x - TT.min.x <= UT && TT.max.y - TT.min.y <= UT && TT.max.z - TT.min.z <= UT;
    class iT {
      constructor() {
        this.bias = jT, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = jT, this.windowSec = 0
      }
      update(TT) {
        const UT = this.gyroRange ? fT(this.gyroRange, TT.gyro) : vT(TT.gyro),
          mT = TT.accel ? this.accelRange ? fT(this.accelRange, TT.accel) : vT(TT.accel) : null;
        if (!qT(UT, 1) || mT && !qT(mT, .01)) return void this.restartWindow(TT);
        if (this.gyroRange = UT, this.accelRange = mT, this.sum = BT(this.sum, pT(TT.gyro, TT.dtSec)), this.windowSec += TT.dtSec, this.windowSec < 1) return;
        const WT = pT(this.sum, 1 / this.windowSec);
        if (LT(WT) > 5) return;
        const zT = ZT(WT, this.bias);
        let MT = 0;
        !this.calibrated || this.windowSec >= 3 ? MT = 1 : LT(zT) <= 1 && (MT = Math.min(1, TT.dtSec / 1)), this.bias = BT(this.bias, pT(zT, MT)), this.calibrated = this.calibrated || MT > 0
      }
      correct(TT) {
        return ZT(TT, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = jT, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = jT, this.windowSec = 0
      }
      restartWindow(TT) {
        this.gyroRange = vT(TT.gyro), this.accelRange = TT.accel ? vT(TT.accel) : null, this.sum = jT, this.windowSec = 0
      }
    }
    class bT {
      constructor() {
        this.down = null
      }
      update(TT, UT, mT) {
        const WT = cT(pT(UT, -1));
        if (!this.down) return this.down = WT, WT;
        const zT = pT(TT, lT * mT),
          MT = this.down,
          gT = {
            x: MT.x - (zT.y * MT.z - zT.z * MT.y),
            y: MT.y - (zT.z * MT.x - zT.x * MT.z),
            z: MT.z - (zT.x * MT.y - zT.y * MT.x)
          },
          nT = 0 === LT(WT) ? 0 : Math.min(1, mT / .25);
        var HT, kT;
        return this.down = cT((kT = nT, BT(HT = gT, pT(ZT(WT, HT), kT)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class OT {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(TT, UT, mT) {
        const WT = Math.hypot(TT, UT),
          zT = Math.max(0, Math.min(1, (WT - 2) / 2)),
          MT = {
            yaw: TT * (1 - zT),
            pitch: UT * (1 - zT),
            dtSec: mT
          };
        for (this.entries.push(MT), this.windowSec += mT; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let gT = 0,
          nT = 0;
        for (const kT of this.entries) gT += kT.yaw * kT.dtSec, nT += kT.pitch * kT.dtSec;
        const HT = this.windowSec > 0 ? {
          yaw: gT / this.windowSec,
          pitch: nT / this.windowSec
        } : {
          yaw: MT.yaw,
          pitch: MT.pitch
        };
        return {
          yaw: TT * zT + HT.yaw,
          pitch: UT * zT + HT.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class eT {
      constructor() {
        this.calibrator = new iT, this.gravity = new bT, this.smoother = new OT
      }
      process(TT, UT, mT) {
        const WT = Math.max(0, Math.min(.05, UT));
        this.calibrator.update({
          ...TT,
          dtSec: WT
        });
        const zT = this.calibrator.correct(TT.gyro);
        let MT = zT.y;
        "player" === mT && TT.accel && (MT = ((TT, UT) => {
          const mT = TT.y * UT.y + TT.z * UT.z;
          return -Math.sign(mT) * Math.min(1.41 * Math.abs(mT), Math.hypot(TT.y, TT.z))
        })(zT, this.gravity.update(zT, TT.accel, WT)));
        const gT = this.smoother.apply(MT, zT.x, WT),
          nT = ((TT, UT) => {
            const mT = Math.hypot(TT, UT);
            if (mT >= 1) return {
              yaw: TT,
              pitch: UT
            };
            const WT = mT / 1;
            return {
              yaw: TT * WT,
              pitch: UT * WT
            }
          })(gT.yaw, gT.pitch);
        return {
          yawDeg: nT.yaw * WT,
          pitchDeg: nT.pitch * WT
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
    const YT = (TT, UT) => {
      var mT, WT, zT;
      const MT = UT * lT,
        gT = null !== (mT = TT.beta) && void 0 !== mT ? mT : 0,
        nT = null !== (WT = TT.gamma) && void 0 !== WT ? WT : 0;
      return {
        x: gT * Math.cos(MT) - nT * Math.sin(MT),
        y: gT * Math.sin(MT) + nT * Math.cos(MT),
        z: null !== (zT = TT.alpha) && void 0 !== zT ? zT : 0
      }
    };
    var JT = mT(8970);
    class xT {
      constructor(TT, UT, mT) {
        this.hid = TT, this.sink = UT, this.onControllersChanged = mT, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = TT => {
          this.openController(TT.device).catch((TT => {
            console.warn("Could not open motion controller", TT)
          }))
        }, this.onDisconnect = TT => {
          this.opening.has(TT.device) && this.disconnectedWhileOpening.add(TT.device);
          const UT = this.controllers.get(TT.device);
          UT && (this.forget(UT), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const TT = await this.hid.getDevices();
        for (const UT of TT) await this.openController(UT).catch((TT => {
          console.warn("Could not open motion controller", TT)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const TT of [...this.controllers.values()]) this.forget(TT);
        this.onControllersChanged()
      }
      async request() {
        const TT = await this.hid.requestDevice({
          filters: JT.m
        });
        let UT = 0;
        for (const mT of TT) await this.openController(mT).catch((TT => {
          console.warn("Could not open motion controller", TT), UT++
        }));
        return UT
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((TT => null !== (0, JT.f)(TT.vendorId, TT.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((TT => TT.kind))
      }
      forget(TT) {
        TT.device.removeEventListener("inputreport", TT.onReport), this.controllers.get(TT.device) === TT && this.controllers.delete(TT.device)
      }
      async openController(TT) {
        const UT = (0, JT.f)(TT.vendorId, TT.productId);
        if (!UT || !this.running || this.controllers.has(TT) || this.opening.has(TT)) return;
        this.opening.add(TT);
        let mT = !1;
        try {
          TT.opened || await TT.open()
        } finally {
          this.opening.delete(TT), mT = this.disconnectedWhileOpening.delete(TT)
        }
        if (mT) return void TT.close().catch((TT => {
          console.debug("Could not close an unplugged motion controller", TT)
        }));
        if (!this.running) return;
        const WT = {
          device: TT,
          kind: UT,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: TT => {
            this.onReport(WT, TT)
          }
        };
        this.controllers.set(TT, WT), TT.addEventListener("inputreport", WT.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(WT)
        } catch (zT) {
          console.warn(`Could not turn on motion for ${UT}`, zT), this.controllers.get(TT) === WT && (this.forget(WT), this.onControllersChanged())
        }
      }
      async enableMotion(TT) {
        let {
          device: UT,
          kind: mT
        } = TT;
        if ((0, JT.j)(mT))
          for (const WT of JT.y[mT]) await UT.receiveFeatureReport(WT).catch((TT => {
            console.debug(`Motion controller feature report ${WT} unavailable`, TT)
          }));
        else
          for (let WT = 0; WT < 2; WT++)
            for (const {
                subcommand: TT,
                args: mT
              }
              of JT.B) await UT.sendReport(JT.D, (0, JT.d)(this.switchPacketCounter++, TT, mT)), await new Promise((TT => {
              setTimeout(TT, 60)
            }))
      }
      onReport(TT, UT) {
        const mT = (0, JT.t)(TT.kind, UT.reportId, UT.data, TT.device.productId);
        if (!mT) return;
        const WT = null === TT.lastEventMs ? 0 : (UT.timeStamp - TT.lastEventMs) / 1e3;
        TT.lastEventMs = UT.timeStamp;
        let zT = mT.dtSec;
        if (null !== zT && WT > 0 && (zT = Math.max(.001, Math.min(.017, WT / mT.readings.length))), null === zT && null !== mT.sensorClock && (0, JT.j)(TT.kind)) {
          const UT = (0, JT.u)(TT.kind, TT.lastClock, mT.sensorClock);
          TT.lastClock = mT.sensorClock, zT = 0 === UT ? null : UT
        }
        if (TT.lastReadingMs = UT.timeStamp, this.isPreferred(TT, UT.timeStamp))
          for (const gT of mT.readings) {
            var MT;
            this.sink(gT, null !== (MT = zT) && void 0 !== MT ? MT : WT, `hid${TT.openedOrder}`)
          }
      }
      isPreferred(TT, UT) {
        const mT = TT => 1e6 * JT.p[TT.kind] + TT.openedOrder;
        for (const WT of this.controllers.values())
          if (WT !== TT && UT - WT.lastReadingMs < 500 && mT(WT) < mT(TT)) return !1;
        return !0
      }
    }
    var dT = mT(102);
    const wT = () => DeviceMotionEvent,
      tT = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, dT.isMobile)(),
      aT = () => {
        var TT;
        const UT = null === (TT = window.screen.orientation) || void 0 === TT ? void 0 : TT.angle;
        return "number" === typeof UT ? UT : "number" === typeof window.orientation ? window.orientation : 0
      };
    class yT {
      constructor(TT, UT) {
        this.sink = TT, this.onStateChanged = UT, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((TT => {
            console.warn("Could not enable the motion sensor", TT)
          }))
        }, this.onMotion = TT => {
          const UT = TT.rotationRate;
          if (!UT || null === UT.alpha && null === UT.beta && null === UT.gamma) return;
          const mT = null === this.lastEventMs ? 0 : (TT.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = TT.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: YT(UT, aT()),
            accel: null
          }, mT, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof wT().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const TT = wT().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof TT) return void this.listen();
        let UT;
        this.disarmGestureRequest();
        try {
          UT = await TT.call(DeviceMotionEvent)
        } catch (mT) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), mT
        }
        this.wanted && ("granted" === UT ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(TT) {
        this.state !== TT && (this.state = TT, this.onStateChanged())
      }
    }
    const XT = "controllerGyroStatusChanged",
      IT = {
        Xs: 0,
        Qs: 0
      },
      QT = TT => {
        var UT, mT;
        return "undefined" === typeof document || (null === (UT = null === (mT = document.featurePolicy) || void 0 === mT ? void 0 : mT.allowsFeature(TT)) || void 0 === UT || UT)
      };
    class sT {
      constructor() {
        this.processor = new eT, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = TT => {
          const UT = TT.gyroAiming && nT.e.hasConnectedPad();
          var mT, WT;
          UT !== this.phoneRunning && (this.phoneRunning = UT, UT ? null === (mT = this.phone) || void 0 === mT || mT.start() : null === (WT = this.phone) || void 0 === WT || WT.stop());
          if (TT.gyroAiming !== this.running) {
            var zT, MT;
            if (this.running = TT.gyroAiming, this.running) null === (zT = this.hid) || void 0 === zT || zT.start().catch((TT => {
              console.warn("Could not open motion controllers", TT)
            }));
            else null === (MT = this.hid) || void 0 === MT || MT.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          zT.j.EZ(XT, this.getStatus())
        };
        const TT = (() => {
            var TT;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (TT = navigator.hid) && void 0 !== TT ? TT : null
          })(),
          UT = QT("hid");
        this.hidBlocked = null !== TT && !UT, this.hid = TT && UT ? new xT(TT, ((TT, UT, mT) => {
          this.lastHidReadingMs = performance.now(), this.feed(TT, UT, "player", mT)
        }), this.publishStatus) : null;
        const mT = QT("accelerometer") && QT("gyroscope");
        this.phoneBlocked = tT() && !mT, this.phone = tT() && mT ? new yT(((TT, UT, mT) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(TT, UT, "local", mT)
        }), this.publishStatus) : null, zT.j.subscribe(kT.g, this.syncWithSettings), nT.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, kT.k)()), this.publishStatus()
        })), this.syncWithSettings((0, kT.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var TT, UT, mT, WT;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (TT = null === (UT = this.hid) || void 0 === UT ? void 0 : UT.getConnectedKinds()) && void 0 !== TT ? TT : [],
          phoneMotion: null !== (mT = null === (WT = this.phone) || void 0 === WT ? void 0 : WT.getState()) && void 0 !== mT ? mT : "off",
          padConnected: nT.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var TT;
        await (null === (TT = this.phone) || void 0 === TT ? void 0 : TT.requestPermission())
      }
      drainLookDelta() {
        const TT = performance.now();
        TT - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = TT;
        const UT = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const mT = (0, kT.k)();
        return mT.gyroAiming && (TT => {
          let {
            activation: UT,
            isHeld: mT,
            useButton: WT,
            gyroButton: zT
          } = TT;
          return "always" === UT || mT("aiming" === UT ? WT : zT)
        })({
          activation: mT.gyroActivation,
          isHeld: TT => HT.e.isButtonHeld(TT),
          useButton: (0, gT.i)("use"),
          gyroButton: mT.gyroButton
        }) ? ((TT, UT) => ({
          Xs: -TT.yawDeg * UT * lT,
          Qs: -TT.pitchDeg * UT * lT
        }))(UT, mT.gyroSensitivity) : IT
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(TT, UT) {
        this.feed(TT, UT, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(TT, UT, mT, WT) {
        this.source !== WT && (this.processor.reset(), this.source = WT);
        const zT = this.processor.process(TT, UT, mT);
        this.pendingYawDeg += zT.yawDeg, this.pendingPitchDeg += zT.pitchDeg
      }
    }
    let FT = null;
    const PT = () => (FT || (FT = new sT), FT),
      VT = () => {
        const [TT, UT] = (0, WT.useState)((() => PT().getStatus()));
        return (0, MT.g)(XT, UT), (0, WT.useEffect)((() => {
          UT(PT().getStatus())
        }), []), TT
      }
  },
  8970: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => OT,
      D: () => qT,
      d: () => bT,
      f: () => HT,
      j: () => WT,
      m: () => nT,
      n: () => kT,
      p: () => jT,
      t: () => fT,
      u: () => cT,
      y: () => eT
    });
    const WT = TT => "dualShock4" === TT || "dualSense" === TT,
      zT = 1356,
      MT = 1406,
      gT = [{
        vendorId: zT,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: zT,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: MT,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: MT,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: MT,
        productId: 8199,
        kind: "joyConRight"
      }],
      nT = gT.map((TT => {
        let {
          vendorId: UT,
          productId: mT
        } = TT;
        return {
          vendorId: UT,
          productId: mT
        }
      })),
      HT = (TT, UT) => {
        var mT, WT;
        return null !== (mT = null === (WT = gT.find((mT => mT.vendorId === TT && mT.productId === UT))) || void 0 === WT ? void 0 : WT.kind) && void 0 !== mT ? mT : null
      },
      kT = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      jT = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      lT = 2e3 / 32767,
      LT = 1 / 8192,
      pT = 936 / 13371,
      BT = (TT, UT, mT) => ({
        x: TT.getInt16(UT, !0) * mT,
        y: TT.getInt16(UT + 2, !0) * mT,
        z: TT.getInt16(UT + 4, !0) * mT
      }),
      ZT = TT => 0 === TT.x && 0 === TT.y && 0 === TT.z,
      cT = (TT, UT, mT) => null === UT ? null : "dualShock4" === TT ? 16 * (mT - UT & 65535) / 3 / 1e6 : (mT - UT >>> 0) / 3 / 1e6,
      vT = (TT, UT) => "joyConRight" === UT ? {
        x: TT.y,
        y: -TT.z,
        z: -TT.x
      } : {
        x: -TT.y,
        y: TT.z,
        z: -TT.x
      },
      fT = (TT, UT, mT, zT) => WT(TT) ? ((TT, UT, mT, WT) => {
        const zT = ((TT, UT, mT) => "dualShock4" === TT ? 1 === UT && mT >= 63 ? 0 : 17 === UT && mT >= 65 ? 2 : null : 1 === UT && mT >= 62 ? 0 : 49 === UT && mT >= 63 ? 1 : null)(TT, UT, mT.byteLength);
        if (null === zT) return null;
        if (2976 === WT && 1 === UT && 0 !== (4 & mT.getUint8(30))) return null;
        const MT = zT + ("dualShock4" === TT ? 12 : 15),
          gT = BT(mT, MT, lT),
          nT = BT(mT, MT + 6, LT);
        return ZT(gT) && ZT(nT) ? null : {
          readings: [{
            gyro: gT,
            accel: nT
          }],
          dtSec: null,
          sensorClock: "dualShock4" === TT ? mT.getUint16(zT + 9, !0) : mT.getUint32(zT + 27, !0)
        }
      })(TT, UT, mT, zT) : ((TT, UT, mT) => {
        if (48 !== UT && 49 !== UT || mT.byteLength < 48) return null;
        const WT = [];
        for (let zT = 0; zT < 3; zT++) {
          const UT = BT(mT, 12 + 12 * zT, 244e-6),
            MT = BT(mT, 18 + 12 * zT, pT);
          if (ZT(MT) && ZT(UT)) return null;
          WT.push({
            gyro: vT(MT, TT),
            accel: vT(UT, TT)
          })
        }
        return {
          readings: WT,
          dtSec: .005,
          sensorClock: null
        }
      })(TT, UT, mT),
      qT = 1,
      iT = [0, 1, 64, 64, 0, 1, 64, 64],
      bT = (TT, UT, mT) => new Uint8Array([15 & TT, ...iT, UT, ...mT]),
      OT = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      eT = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8338: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => sT,
      h: () => KT,
      i: () => OT,
      m: () => pT.k,
      n: () => VT,
      r: () => PT,
      t: () => eT,
      w: () => uT,
      x: () => pT.t,
      B: () => pT.w,
      D: () => ST,
      F: () => pT.B,
      I: () => yT
    });
    var WT = mT(63),
      zT = mT(25),
      MT = mT(31),
      gT = mT(1567),
      nT = mT(1388),
      HT = mT(8305),
      kT = mT(8344),
      jT = mT(8289),
      lT = mT(8277),
      LT = mT(8348),
      pT = mT(1513),
      BT = mT(8282),
      ZT = mT(8787),
      cT = mT(4484),
      vT = mT(115);
    class fT {
      constructor(TT) {
        this.deps = TT, this.pads = new Map
      }
      observe(TT, UT, mT) {
        if (!this.deps.touchOnly) return;
        const WT = this.pads.get(UT.id);
        "proven" !== WT && mT ? (this.pads.set(UT.id, "proven"), void 0 !== WT && this.deps.onReleased(UT, TT, TT.timestampMs - WT)) : void 0 === WT && (this.pads.set(UT.id, TT.timestampMs), this.deps.onHeld(UT, TT)), this.deps.setMayHide("proven" === this.pads.get(UT.id))
      }
    }
    const qT = TT => TT.values.flatMap(((TT, UT) => TT >= BT.Q ? [String(UT)] : [])).join(",") || "none",
      iT = (TT, UT, WT, zT, MT) => {
        const gT = (0, pT.g)(),
          nT = document.visibilityState,
          HT = document.hasFocus();
        Promise.all([Promise.resolve().then((() => mT(3047))), Promise.resolve().then((() => mT(1153))), Promise.resolve().then((() => mT(133)))]).then((mT => {
          let [{
            logControllerHudHoldToGtag: kT
          }, {
            logClientLineFromEveryPage: jT
          }, {
            siteUsed: lT
          }] = mT;
          kT(TT, UT.family, null === MT ? void 0 : Math.round(MT / 1e3)), jT(`touch HUD pad ${TT}`, bT(UT, WT, zT, MT, gT, nT, HT, lT))
        }), (() => {}))
      },
      bT = (TT, UT, mT, WT, zT, MT, gT, nT) => {
        var HT;
        const kT = {
          pad_id: TT.id.slice(0, 120),
          pad_family: TT.family,
          pad_mapping: null !== (HT = null === mT || void 0 === mT ? void 0 : mT.mapping) && void 0 !== HT ? HT : "unread",
          pad_axes: mT ? String(mT.axes.length) : "unread",
          pad_buttons: mT ? String(mT.buttons.length) : "unread",
          pressed: qT(UT),
          ms_since_touch: null === zT ? "none" : String(Math.round(UT.timestampMs - zT)),
          visibility: MT,
          focused: String(gT),
          site: nT
        };
        return null !== WT && (kT.held_ms = String(Math.round(WT))), kT
      };
    const OT = TT => !TT.repeat && !(0, ZT.e)(TT.key),
      eT = "PadHidesCursor";
    let YT = !1;
    const JT = TT => {
        TT !== YT && (YT = TT, document.documentElement.classList.toggle(eT, TT))
      },
      xT = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(TT) {
          let UT = !1,
            mT = !1;
          TT.values.forEach(((TT, WT) => {
            const zT = TT >= (this.buttonsDown[WT] ? BT.S : BT.Q);
            zT && !this.buttonsDown[WT] && (UT = !0, mT = !0), this.buttonsDown[WT] = zT
          }));
          return [TT.leftStick, TT.rightStick].forEach(((TT, WT) => {
            const zT = this.stickAnchors[WT];
            Math.hypot(TT.x, TT.y) < (zT ? BT.S : .3) ? this.stickAnchors[WT] = null : (!zT || Math.hypot(TT.x - zT.x, TT.y - zT.y) >= .3) && (this.stickAnchors[WT] = {
              x: TT.x,
              y: TT.y
            }, UT = !0, mT ||= !zT)
          })), UT && (this.lastActivityMs = TT.timestampMs), this.onlyMovedOn = UT && !mT, UT
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(TT) {
          return !(TT - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((TT => TT)) || this.stickAnchors.some((TT => null !== TT)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((TT => null !== TT))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      dT = (wT = () => lT.e.getActiveGamepad(), new fT({
        touchOnly: "touchOnly" === (0, vT.b)(),
        setMayHide: pT.v,
        onHeld: (TT, UT) => {
          iT("fn", TT, UT, wT(), null)
        },
        onReleased: (TT, UT, mT) => {
          iT("released", TT, UT, wT(), mT)
        }
      }));
    var wT;
    let tT = null,
      aT = !1;
    const yT = () => aT;
    let XT = null,
      IT = !1,
      QT = null;
    const sT = () => QT;
    let FT = !1;
    const PT = (TT, UT) => {
        if (!xT.observe(TT)) return !1;
        if (dT.observe(TT, UT, xT.isStickOffRest()), FT && xT.wasOnlyMoveOn() && !(0, pT.k)()) return !1;
        FT = !1, aT = !1;
        const mT = !(0, pT.k)();
        return mT && (tT = TT, QT = !YT && IT && XT ? {
          ...XT
        } : null), IT = !1, (0, pT.t)("gamepad"), JT(!0), (0, LT.o)((0, HT.l)()), mT
      },
      VT = TT => !(0, pT.k)() || TT === tT,
      uT = () => {
        xT.reset()
      },
      CT = () => {
        const TT = zT.b.get("activeInputDevice"),
          UT = "gamepad" === TT ? lT.e.getActivePad() : null;
        return {
          device: TT,
          inGame: (0, nT.u)(),
          padMovesMouse: null !== UT && (0, jT.h)(UT.id)
        }
      },
      rT = TT => {
        document.pointerLockElement ? XT = null : (XT ??= {
          x: 0,
          y: 0
        }, XT.x = TT.clientX, XT.y = TT.clientY)
      },
      KT = () => {
        const TT = new cT.d,
          UT = UT => {
            TT.reset(), FT = !1, (0, pT.t)(UT)
          },
          mT = TT => {
            if (TT.isTrusted) {
              if (TT instanceof KeyboardEvent) {
                if ((0, pT.p)(TT), !OT(TT)) return;
                aT = !0
              }
              if (TT instanceof PointerEvent && "touch" === TT.pointerType) return XT = null, void UT("touch");
              TT instanceof PointerEvent && (rT(TT), IT = !0), ("pointerdown" !== TT.type || (TT => {
                let {
                  device: UT,
                  inGame: mT,
                  padMovesMouse: WT
                } = TT;
                return !("gamepad" === UT && WT && mT)
              })(CT())) && UT("keyboardMouse")
            }
          },
          WT = TT => {
            TT.isTrusted && (XT = null, UT("touch"))
          },
          gT = TT => {
            TT.isTrusted && "touch" !== TT.pointerType && !TT.relatedTarget && (XT = null)
          },
          nT = mT => {
            if (!mT.isTrusted || "touch" === mT.pointerType) return;
            rT(mT);
            const WT = mT.movementX || 0,
              MT = mT.movementY || 0;
            if (0 === WT && 0 === MT) return;
            if (IT = !0, JT(!1), "keyboardMouse" === zT.b.get("activeInputDevice")) return;
            const gT = xT.isHolding(mT.timeStamp),
              nT = CT(),
              HT = (TT => {
                let {
                  device: UT,
                  inGame: mT,
                  padMovesMouse: WT,
                  padHolding: zT
                } = TT;
                return ("gamepad" !== UT || !WT) && "keyboardMouse" !== UT && (mT || !zT)
              })({
                ...nT,
                inGame: nT.inGame && (0, kT.f)(),
                padHolding: gT
              });
            HT && TT.add(WT, MT, mT.timeStamp) && (UT("keyboardMouse"), FT = xT.isStickOffRest())
          },
          HT = TT => {
            JT("gamepad" === TT)
          },
          jT = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", mT, jT), window.addEventListener("pointerdown", mT, jT), window.addEventListener("wheel", mT, jT), window.addEventListener("touchstart", WT, jT), window.addEventListener("pointermove", nT, jT), window.addEventListener("pointerout", gT, jT);
        const lT = MT.j.subscribe("appManagerUpdated|activeInputDevice", HT);
        return HT(zT.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", mT, jT), window.removeEventListener("pointerdown", mT, jT), window.removeEventListener("wheel", mT, jT), window.removeEventListener("touchstart", WT, jT), window.removeEventListener("pointermove", nT, jT), window.removeEventListener("pointerout", gT, jT), XT = null, MT.j.unsubscribe(lT), JT(!1)
        }
      },
      ST = () => {
        const [TT, UT] = (0, WT.useState)(HT.l);
        return (0, gT.g)(HT.c, (() => {
          UT((0, HT.l)())
        })), (0, gT.g)(lT.d, (() => {
          UT((0, HT.l)())
        })), TT
      }
  },
  8313: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      g: () => zT
    });
    const WT = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      zT = TT => WT.includes(TT)
  },
  8823: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => MT,
      h: () => HT,
      k: () => nT
    });
    var WT = mT(1567),
      zT = mT(1526);
    const MT = "controllerInventoryCursorChanged",
      gT = {
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
      nT = () => {
        var TT, UT;
        return (0, WT.j)(MT, null !== (TT = null === (UT = (0, zT.f)()) || void 0 === UT ? void 0 : UT.getInventoryCursorState()) && void 0 !== TT ? TT : gT)
      },
      HT = () => {
        var TT, UT;
        return null !== (TT = null === (UT = (0, zT.f)()) || void 0 === UT ? void 0 : UT.isPadSteppingSlots()) && void 0 !== TT && TT
      }
  },
  8817: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      f: () => nT,
      i: () => HT,
      j: () => gT,
      l: () => MT,
      n: () => jT,
      r: () => lT
    });
    let WT = null;
    const zT = new Set,
      MT = TT => (WT = TT, () => {
        if (WT === TT) {
          WT = null;
          for (const TT of zT) TT()
        }
      }),
      gT = TT => (zT.add(TT), () => {
        zT.delete(TT)
      }),
      nT = () => WT,
      HT = () => null !== WT;
    let kT = null;
    const jT = TT => {
        kT = TT
      },
      lT = () => {
        const TT = kT;
        return kT = null, TT
      },
      LT = (TT, UT) => {
        var mT, WT;
        return null !== (mT = null !== (WT = TT.find((TT => TT.element === UT))) && void 0 !== WT ? WT : TT.find((TT => TT.element.contains(UT)))) && void 0 !== mT ? mT : null
      }
  },
  8832: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => gT
    });
    var WT = mT(63);
    const zT = new WeakMap,
      MT = TT => {
        var UT, mT;
        return null !== (UT = null === (mT = zT.get(TT)) || void 0 === mT ? void 0 : mT.current) && void 0 !== UT ? UT : null
      },
      gT = (TT, UT) => {
        const mT = (0, WT.useRef)(UT);
        mT.current = UT;
        const MT = (0, WT.useRef)(null);
        (0, WT.useEffect)((() => {
          const UT = TT.current,
            WT = MT.current;
          UT !== WT && (WT && zT.get(WT) === mT && zT.delete(WT), MT.current = UT, UT && zT.set(UT, mT))
        })), (0, WT.useEffect)((() => () => {
          const TT = MT.current;
          TT && zT.get(TT) === mT && zT.delete(TT), MT.current = null
        }), [])
      }
  },
  8941: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      f: () => kT,
      h: () => lT,
      k: () => jT,
      m: () => HT,
      o: () => pT
    });
    var WT = mT(31),
      zT = mT(2125),
      MT = mT(1526),
      gT = mT(1513);
    const nT = TT => {
        var UT, mT;
        return (0, gT.k)() && null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getGlyphForNoaAction(TT)) && void 0 !== UT ? UT : null
      },
      HT = "controllerGlyph:",
      kT = TT => {
        var UT, mT;
        return null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getPadGlyphIconName(TT)) && void 0 !== UT ? UT : `${HT}xbox/${TT}`
      },
      jT = TT => TT.startsWith(HT),
      lT = TT => {
        var UT, mT;
        return jT(TT) && null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getPadGlyphIconUrl(TT)) && void 0 !== UT ? UT : null
      },
      LT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", gT.d, zT.d, zT.c],
      pT = TT => {
        const UT = LT.map((UT => WT.j.subscribe(UT, TT)));
        return () => {
          for (const TT of UT) WT.j.unsubscribe(TT)
        }
      }
  },
  8804: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => WT
    });
    const WT = "controllerOpenKeyboard",
      zT = "controllerKeyboardVisible"
  },
  8344: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      f: () => jT,
      j: () => HT,
      k: () => nT
    });
    var WT = mT(25),
      zT = mT(1752),
      MT = mT(1870);
    const gT = new Map,
      nT = (TT, UT) => (gT.has(TT) && console.warn(`Gameplay blocker "${TT}" registered twice; the newer one replaces it.`), gT.set(TT, UT), () => {
        gT.get(TT) === UT && gT.delete(TT)
      }),
      HT = () => (0, MT.e)(document.activeElement),
      kT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [UT, mT] of gT)
          if (!TT.includes(UT) && mT()) return UT;
        return null
      },
      jT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === WT.b.get("gameState") && (!(0, zT.l)() && (!HT() && null === kT(TT)))
      }
  },
  8282: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => tT,
      D: () => iT,
      H: () => vT,
      L: () => cT,
      M: () => kT,
      Q: () => LT,
      S: () => pT,
      V: () => zT,
      X: () => WT,
      Z: () => OT,
      bb: () => dT,
      cb: () => aT,
      d: () => yT,
      f: () => wT,
      fb: () => bT,
      g: () => jT,
      j: () => HT,
      k: () => nT,
      n: () => YT,
      p: () => fT,
      t: () => eT,
      u: () => MT,
      v: () => lT,
      y: () => qT
    });
    const WT = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      zT = WT.length,
      MT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(zT).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: TT
        }
      },
      gT = Object.fromEntries(WT.map(((TT, UT) => [TT, UT]))),
      nT = TT => gT[TT],
      HT = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const WT = Math.hypot(TT.x, TT.y);
        if (WT <= UT) return {
          x: 0,
          y: 0
        };
        const zT = Math.min(1, (WT - UT) / Math.max(1e-4, mT - UT));
        return {
          x: TT.x / WT * zT,
          y: TT.y / WT * zT
        }
      },
      kT = ["exponential", "linear", "boost"],
      jT = (TT, UT) => {
        const mT = Math.hypot(TT.x, TT.y);
        if (0 === mT) return {
          x: 0,
          y: 0
        };
        const WT = ((TT, UT) => {
          const mT = Math.max(0, Math.min(1, TT));
          return "linear" === UT ? mT : mT * mT
        })(mT, UT);
        return {
          x: TT.x / mT * WT,
          y: TT.y / mT * WT
        }
      },
      lT = .5,
      LT = .3,
      pT = .2,
      BT = nT("LT"),
      ZT = nT("RT"),
      cT = TT => TT === BT || TT === ZT,
      vT = (TT, UT) => {
        const mT = nT(UT);
        return cT(mT) ? TT[mT] > .35 : TT[mT] >= lT
      },
      fT = (TT, UT) => TT.map(((TT, mT) => cT(mT) ? UT[mT] ? TT > .35 : TT >= .55 : TT >= lT)),
      qT = ["Up", "Down", "Left", "Right"],
      iT = TT => qT.includes(TT),
      bT = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(TT.x, TT.y) < UT ? null : Math.abs(TT.x) > Math.abs(TT.y) ? TT.x > 0 ? "Right" : "Left" : TT.y > 0 ? "Down" : "Up"
      },
      OT = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      eT = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      YT = ["default", "slow", "off"],
      JT = 800,
      xT = 250,
      dT = (TT, UT) => "off" === UT ? null : "slow" === UT ? {
        initialDelayMs: Math.max(TT.initialDelayMs, JT),
        intervalMs: Math.max(TT.intervalMs, xT)
      } : TT;
    class wT {
      constructor(TT) {
        this.readTiming = TT, this.fn = !1, this.timing = null, this.nextFireMs = 0
      }
      update(TT, UT) {
        return TT ? this.fn ? !!(this.timing && UT >= this.nextFireMs) && (this.nextFireMs = UT + this.timing.intervalMs, !0) : (this.fn = !0, this.timing = this.readTiming(), this.nextFireMs = UT + (null !== (mT = null === (WT = this.timing) || void 0 === WT ? void 0 : WT.initialDelayMs) && void 0 !== mT ? mT : 0), !0) : (this.fn = !1, !1);
        var mT, WT
      }
      reset() {
        this.fn = !1
      }
    }
    const tT = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      aT = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class yT {
      constructor(TT) {
        this.timer = TT, this.direction = null
      }
      update(TT, UT) {
        return TT !== this.direction && (this.timer.reset(), this.direction = TT), this.timer.update(null !== TT, UT) ? TT : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8837: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      f: () => MT
    });
    let WT = -1 / 0;
    const zT = () => {
        WT = performance.now()
      },
      MT = TT => performance.now() - WT < TT
  },
  8790: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      f: () => MT
    });
    var WT = mT(8305),
      zT = mT(8282);
    const MT = TT => (0, zT.bb)(TT, (0, WT.k)().buttonRepeat),
      gT = TT => new zT.f((() => MT(TT)))
  },
  8325: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      e: () => MT,
      i: () => nT
    });
    var WT = mT(31),
      zT = mT(8305);
    const MT = (TT, UT) => "OpenShop" === TT ? "shop" === UT : "OpenLobbyLeaderboard" !== TT || "leaderboard" === UT;
    let gT = !1;
    const nT = TT => {
        TT !== gT && (gT = TT, WT.j.EZ(zT.c, (0, zT.k)()))
      },
      HT = () => ((TT, UT) => "shop" === TT && UT ? "shop" : "leaderboard")((0, zT.k)().leaderboardButton, gT)
  },
  8322: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => nT,
      D: () => bT,
      G: () => LT,
      H: () => pT,
      I: () => lT,
      L: () => iT,
      P: () => kT,
      T: () => vT,
      U: () => xT,
      W: () => qT,
      Z: () => ZT,
      ab: () => cT,
      c: () => IT,
      cb: () => BT,
      f: () => sT,
      gb: () => fT,
      h: () => dT,
      hb: () => aT,
      ib: () => MT,
      l: () => gT,
      mb: () => OT,
      n: () => JT,
      pb: () => QT,
      q: () => eT,
      r: () => yT,
      rb: () => YT,
      t: () => XT,
      w: () => jT,
      y: () => HT
    });
    var WT = mT(8300),
      zT = mT(8282);
    const MT = {
        min: 25,
        max: 500,
        step: 5
      },
      gT = {
        min: 25,
        max: 100,
        step: 5
      },
      nT = {
        min: 0,
        max: .4,
        step: .01
      },
      HT = {
        min: 25,
        max: 300,
        step: 5
      },
      kT = {
        min: .5,
        max: 6,
        step: .1
      },
      jT = (TT, UT) => {
        if (!Number.isFinite(TT)) return UT.min;
        const mT = UT.min + Math.round((TT - UT.min) / UT.step) * UT.step,
          WT = Math.min(UT.max, Math.max(UT.min, mT));
        return Math.round(1e3 * WT) / 1e3
      },
      lT = TT => `${Math.round(TT)}%`,
      LT = TT => lT(100 * TT),
      pT = TT => `${TT.toFixed(1)}\xd7`,
      BT = [{
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
      ZT = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      cT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      vT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      fT = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      qT = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      iT = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      bT = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      OT = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      eT = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      YT = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      JT = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      xT = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      dT = {
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
      wT = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      tT = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      aT = WT.d.map((TT => {
        let {
          group: UT,
          actions: mT
        } = TT;
        const WT = mT.map((TT => ({
          kind: "action",
          action: TT
        })));
        return {
          titleKey: wT[UT],
          rows: "gameplay" === UT ? [...tT, ...WT] : WT
        }
      })),
      yT = zT.X.filter((TT => "Home" !== TT)),
      XT = 1e4;
    class IT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = TT, this.openButton = UT, this.accepts = mT, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(TT, UT) {
        var mT;
        this.updateIgnored(TT, UT);
        const WT = UT - (null !== (mT = this.startMs) && void 0 !== mT ? mT : UT) >= 250;
        for (const zT of yT)
          if (zT !== this.cancelButton && WT && !this.ignoredUntilMs.has(zT) && TT.wasPressed(zT) && this.accepts(zT)) return {
            kind: "bind",
            button: zT
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (TT.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = UT
        }
        return null === this.cancelDownAtMs ? null : TT.isHeld(this.cancelButton) && UT - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : TT.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(TT) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (TT - this.cancelDownAtMs) / 700)
      }
      updateIgnored(TT, UT) {
        if (null === this.startMs) {
          this.startMs = UT;
          for (const UT of yT) TT.isDown(UT) && this.ignoredUntilMs.set(UT, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, UT + 250)
        }
        for (const [mT, WT] of this.ignoredUntilMs) {
          const zT = TT.isDown(mT);
          WT === 1 / 0 ? zT || mT !== this.openButton ? zT || this.ignoredUntilMs.delete(mT) : this.ignoredUntilMs.set(mT, UT + 250) : UT >= WT ? this.ignoredUntilMs.delete(mT) : zT && this.ignoredUntilMs.set(mT, 1 / 0)
        }
      }
    }
    const QT = 6e3;
    class sT {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(TT, UT) {
        let {
          pressed: mT,
          fn: WT
        } = TT;
        if (mT) {
          const TT = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== TT && UT - TT < 1500 ? [...this.pressesAtMs, UT] : [UT], this.pressesAtMs.length >= 3) return 1
        }
        return WT ? (this.downAtMs ??= UT, Math.min(1, (UT - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  5123: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      g: () => gT
    });
    var WT = mT(63);
    const zT = new WeakMap,
      MT = TT => {
        var UT;
        const mT = TT.closest("[data-pad-slider]");
        return mT && null !== (UT = zT.get(mT)) && void 0 !== UT ? UT : null
      },
      gT = (TT, UT) => {
        const mT = (0, WT.useRef)(UT);
        mT.current = UT, (0, WT.useEffect)((() => {
          if (TT.current) return ((TT, UT) => (zT.set(TT, UT), () => {
            zT.get(TT) === UT && zT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              mT.current.adjust(TT)
            },
            setFraction: TT => {
              mT.current.setFraction(TT)
            },
            endDrag: () => {
              mT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  8925: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => gT,
      j: () => MT,
      k: () => WT,
      n: () => nT,
      o: () => kT,
      s: () => jT
    });
    const WT = "controllerActionWheelOpen",
      zT = "controllerActionWheelAim",
      MT = "controllerActionWheelCommit",
      gT = "controllerActionWheelClose",
      nT = "controllerActionWheelPick";
    let HT = !1;
    const kT = () => HT,
      jT = TT => {
        HT = TT
      }
  },
  8923: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => zT
    });
    let WT = 0;
    const zT = () => {
        WT++
      },
      MT = () => WT
  },
  8847: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      g: () => zT,
      j: () => gT,
      k: () => MT,
      m: () => WT,
      q: () => kT
    });
    const WT = "controllerQuickChatWheelOpen",
      zT = "controllerQuickChatWheelAim",
      MT = "controllerQuickChatWheelCommit",
      gT = "controllerQuickChatWheelClose";
    let nT = !1;
    const HT = () => nT,
      kT = TT => {
        nT = TT
      }
  },
  8859: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => zT
    });
    var WT = mT(31);
    const zT = "localBlockBroken";

    function MT() {
      return {
        onPlayerChangeBlock(TT, UT, mT, MT, gT, nT) {
          "Air" === nT && WT.j.EZ(zT)
        }
      }
    }
  },
  8986: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => HT
    });
    var WT = mT(25),
      zT = mT(1429),
      MT = mT(102);
    const gT = {
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

    function nT() {
      return (0, MT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const HT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, UT) {
        var mT;
        if (!this.deps.enabled()) return;
        const WT = gT[TT],
          zT = null !== UT && void 0 !== UT ? UT : WT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const MT = this.deps.now();
        MT - this.lastAnyAt < 40 && WT.priority < this.playingPriority || MT - (null !== (mT = this.lastAt.get(TT)) && void 0 !== mT ? mT : -1 / 0) < WT.minGapMs || MT < this.playingUntil && WT.priority < this.playingPriority || (this.lastAt.set(TT, MT), this.lastAnyAt = MT, this.playingUntil = MT + zT.reduce(((TT, UT) => TT + UT), 0), this.playingPriority = WT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => nT() && WT.b.get("isTouchScreen") && WT.b.get("clientEscMenuOptions").vibration && !(0, zT.e)()
    })
  },
  8856: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(1354);

    function zT(TT, UT) {
      var mT, zT;
      try {
        const mT = (0, WT.c)();
        if ("function" === typeof mT) {
          const WT = new mT(TT, UT);
          if (WT.type === TT) return WT
        }
      } catch {}
      const MT = document.createEvent("Event");
      return MT.initEvent(TT, null !== (mT = null === UT || void 0 === UT ? void 0 : UT.bubbles) && void 0 !== mT && mT, null !== (zT = null === UT || void 0 === UT ? void 0 : UT.cancelable) && void 0 !== zT && zT), MT
    }
  },
  8894: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(8901),
      zT = mT(653),
      MT = mT(133);

    function gT(TT) {
      var UT, mT;
      if ((0, zT.E)(TT)) return !0;
      const gT = null !== (UT = null === (mT = MT.siteUsedData[MT.siteUsed]) || void 0 === mT ? void 0 : mT.adConfig.showRewardedAds) && void 0 !== UT && UT;
      for (const zT in TT) {
        const UT = TT[zT];
        if (null !== UT && void 0 !== UT && UT.items)
          for (const TT in UT.items)
            if ((0, WT.j)(UT.items[TT], gT)) return !1
      }
      return !0
    }
  },
  8901: (TT, UT, mT) => {
    function WT(TT, UT) {
      return !TT.hidden && (UT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function MT(TT, UT) {
      var mT;
      if ("dropdown" === (null === (mT = TT.userInput) || void 0 === mT ? void 0 : mT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const mT of TT.userInput.dropdownOptions)
          if (zT(mT) === UT) return "object" === typeof mT ? mT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", UT)
      }
      return TT.cost
    }

    function gT(TT, UT, mT) {
      var WT;
      const zT = null !== (WT = mT.excludedPlayers) && void 0 !== WT ? WT : [UT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    mT.d(UT, {
      e: () => MT,
      g: () => zT,
      i: () => gT,
      j: () => WT
    })
  },
  8933: () => {},
  8356: (TT, UT, mT) => {
    var WT = {
      "./nintendo/A.svg": 8360,
      "./nintendo/B.svg": 8365,
      "./nintendo/Down.svg": 8372,
      "./nintendo/Home.svg": 8379,
      "./nintendo/LB.svg": 8386,
      "./nintendo/LS.svg": 8395,
      "./nintendo/LT.svg": 8404,
      "./nintendo/Left.svg": 8412,
      "./nintendo/LeftStick.svg": 8416,
      "./nintendo/Menu.svg": 8421,
      "./nintendo/RB.svg": 8429,
      "./nintendo/RS.svg": 8432,
      "./nintendo/RT.svg": 8441,
      "./nintendo/Right.svg": 8447,
      "./nintendo/RightStick.svg": 8453,
      "./nintendo/Up.svg": 8459,
      "./nintendo/View.svg": 8464,
      "./nintendo/X.svg": 8467,
      "./nintendo/Y.svg": 8474,
      "./playstation/A.svg": 8479,
      "./playstation/B.svg": 8485,
      "./playstation/Down.svg": 8488,
      "./playstation/Home.svg": 8497,
      "./playstation/LB.svg": 8500,
      "./playstation/LS.svg": 8508,
      "./playstation/LT.svg": 8517,
      "./playstation/Left.svg": 8524,
      "./playstation/LeftStick.svg": 8532,
      "./playstation/Menu.svg": 8534,
      "./playstation/RB.svg": 8540,
      "./playstation/RS.svg": 8543,
      "./playstation/RT.svg": 8547,
      "./playstation/Right.svg": 8554,
      "./playstation/RightStick.svg": 8563,
      "./playstation/Up.svg": 8567,
      "./playstation/View.svg": 8572,
      "./playstation/X.svg": 8581,
      "./playstation/Y.svg": 8587,
      "./steamdeck/A.svg": 8596,
      "./steamdeck/B.svg": 8604,
      "./steamdeck/Down.svg": 8612,
      "./steamdeck/Home.svg": 8614,
      "./steamdeck/LB.svg": 8617,
      "./steamdeck/LS.svg": 8624,
      "./steamdeck/LT.svg": 8633,
      "./steamdeck/Left.svg": 8637,
      "./steamdeck/LeftStick.svg": 8640,
      "./steamdeck/Menu.svg": 8645,
      "./steamdeck/RB.svg": 8650,
      "./steamdeck/RS.svg": 8652,
      "./steamdeck/RT.svg": 8656,
      "./steamdeck/Right.svg": 8660,
      "./steamdeck/RightStick.svg": 8662,
      "./steamdeck/Up.svg": 8667,
      "./steamdeck/View.svg": 8676,
      "./steamdeck/X.svg": 8678,
      "./steamdeck/Y.svg": 8681,
      "./xbox/A.svg": 8690,
      "./xbox/B.svg": 8699,
      "./xbox/Down.svg": 8705,
      "./xbox/Home.svg": 8714,
      "./xbox/LB.svg": 8719,
      "./xbox/LS.svg": 8726,
      "./xbox/LT.svg": 8728,
      "./xbox/Left.svg": 8733,
      "./xbox/LeftStick.svg": 8735,
      "./xbox/Menu.svg": 8741,
      "./xbox/RB.svg": 8745,
      "./xbox/RS.svg": 8751,
      "./xbox/RT.svg": 8753,
      "./xbox/Right.svg": 8758,
      "./xbox/RightStick.svg": 8761,
      "./xbox/Up.svg": 8763,
      "./xbox/View.svg": 8767,
      "./xbox/X.svg": 8774,
      "./xbox/Y.svg": 8779
    };

    function zT(TT) {
      var UT = MT(TT);
      return mT(UT)
    }

    function MT(TT) {
      if (!mT.o(WT, TT)) {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }
      return WT[TT]
    }
    zT.keys = function() {
      return Object.keys(WT)
    }, zT.resolve = MT, TT.exports = zT, zT.id = 8356
  },
  8360: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8365: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8372: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8379: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8386: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8395: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8404: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8412: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8416: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8421: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8429: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8432: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8441: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8447: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8453: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8459: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8464: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8467: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8474: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8479: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8485: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8488: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8497: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8500: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8508: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8517: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8524: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8532: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8534: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8540: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8543: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8547: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8554: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8563: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8567: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8572: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8581: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8587: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8596: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8604: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8612: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8614: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8617: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8624: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8633: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8637: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8640: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8645: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8650: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8652: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8656: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8660: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8662: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8667: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8676: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8678: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8681: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8690: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8699: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8705: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8714: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8719: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8726: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8728: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8733: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8735: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8741: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8745: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8751: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8753: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8758: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8761: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8763: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8767: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8774: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8779: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
export const id = 28;
export const ids = [28];
export const modules = {
  8837: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => vG,
      g: () => WG,
      k: () => mG
    });
    var wG = ZG(51),
      SG = ZG(4561),
      LG = ZG(1092),
      yG = ZG(1389),
      kG = ZG(19),
      UG = ZG(3406),
      YG = ZG(2228),
      VG = ZG(1198),
      pG = ZG(2537),
      fG = ZG(1895),
      QG = ZG(1945),
      KG = ZG(1151),
      hG = ZG(17),
      dG = ZG(1579),
      JG = ZG(1006),
      rG = ZG.n(JG),
      zG = ZG(8839),
      EG = ZG(8842),
      oG = ZG(8849),
      XG = ZG(8750),
      uG = ZG(8854),
      iG = (ZG(8860), ZG(1067));
    let CG = null;

    function WG() {
      return null !== CG
    }

    function mG() {
      return "pad" === CG
    }

    function IG() {
      return "inGame" === hG.e.get("gameState") && !(0, dG.t)()
    }

    function FG(GG) {
      return (0, EG.v)(GG, VG.r, EG.e, EG.i, EG.l)
    }
    const vG = (0, wG.memo)((function() {
      const {
        t: GG
      } = (0, KG.w)(), {
        userContext: bG
      } = (0, LG.e)(), [ZG, hG] = (0, wG.useState)(null), [JG, WG] = (0, wG.useState)(null), mG = (0, wG.useRef)(null), vG = (0, wG.useCallback)((GG => {
        mG.current = GG, WG(GG)
      }), []), aG = (0, wG.useRef)(0), cG = (0, wG.useRef)(null), lG = (0, wG.useRef)({
        x: 0,
        y: 0
      }), [jG, PG] = (0, wG.useState)(0), MG = (0, wG.useMemo)((() => function(GG) {
        const bG = [];
        for (let wG = 0; wG < VG.r; wG++) {
          var ZG;
          bG.push(null !== (ZG = GG[wG]) && void 0 !== ZG ? ZG : null)
        }
        return bG
      }((0, pG.k)(bG.getPlayerCosmetics().emote))), [bG, jG]);
      (0, QG.b)("cosmeticsUpdated", (GG => {
        GG.some((GG => GG.local && "emote" === GG.FL)) && PG((GG => GG + 1))
      }));
      const AG = (0, wG.useRef)(!1),
        sG = (0, wG.useCallback)((function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === GG && (0, oG.g)(), AG.current = bG, lG.current = {
            x: 0,
            y: 0
          }, vG(null), hG(GG)
        }), [vG]),
        qG = (0, wG.useCallback)((() => {
          hG(null), vG(null), lG.current = {
            x: 0,
            y: 0
          }
        }), [vG]),
        nG = (0, wG.useCallback)((GG => {
          if (Date.now() < aG.current) return;
          const bG = (0, YG.j)(GG),
            ZG = !!bG.holdUntilMove,
            wG = ZG ? 600 : Math.ceil(1e3 * bG.animation.animation_length / YG.d) + 200;
          aG.current = Date.now() + wG, cG.current = GG, fG.gameBridge.send("playEmote", GG), fG.gameBridge.send("applyTemporaryThirdPerson", ZG ? {} : {
            durationMs: wG
          })
        }), []);
      (0, yG.g)("requestToggleEmoteWheel", (() => {
        null === ZG ? IG() && sG("click") : qG()
      })), (0, yG.g)("requestEmoteWheelHoldOpen", (() => {
        null === ZG && IG() && sG((0, zG.c)() ? "hold" : "click")
      })), (0, yG.g)("requestEmoteWheelPadOpen", (GG => {
        null !== ZG || !IG() || (0, XG.c)() || (0, uG.m)() || sG("pad", GG)
      })), (0, yG.g)("requestEmoteRepeatLast", (() => {
        if (null !== ZG || !IG() || (0, XG.c)() || (0, uG.m)()) return;
        const GG = cG.current;
        null !== GG && MG.includes(GG) ? nG(GG) : sG("pad", !0)
      }));
      const gG = () => {
        const GG = mG.current,
          bG = null !== GG ? MG[GG] : null;
        null !== bG && "pad" === ZG && Date.now() < aG.current || (qG(), null !== bG && nG(bG))
      };
      (0, yG.g)("emoteWheelPadAim", (GG => {
        if ("pad" !== ZG) return;
        const bG = (0, EG.E)(GG, VG.r, mG.current);
        vG(null !== bG && null !== MG[bG] ? bG : null)
      })), (0, yG.g)("requestEmoteWheelPadCommit", (GG => {
        "pad" !== ZG || GG && AG.current || gG()
      })), (0, yG.g)("appManagerUpdated|activeInputDevice", (GG => {
        null !== ZG && "pad" === ZG !== ("gamepad" === GG) && qG()
      })), (0, wG.useLayoutEffect)((() => (CG = ZG, (0, UG.z)("emoteWheel", "pad" === ZG), kG.l.xh(UG.r), () => {
        CG = null, (0, UG.z)("emoteWheel", !1), kG.l.xh(UG.r)
      })), [ZG]), (0, yG.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZG && gG()
      })), (0, yG.g)("requestEmoteWheelClose", (() => {
        null !== ZG && qG()
      })), (0, yG.g)("appManagerUpdated|gameState", (GG => {
        "inGame" !== GG && qG()
      }));
      const eG = () => {
        (0, dG.t)() && qG()
      };
      if ((0, yG.g)("appManagerUpdated|openEverythingMenuName", eG), (0, yG.g)("appManagerUpdated|openInGameMenuName", eG), (0, yG.g)("pointerLockUpdate", (GG => {
          GG || "hold" !== ZG || qG()
        })), (0, wG.useEffect)((() => {
          if (null === ZG) return;
          const GG = GG => {
            "Escape" === GG.key && (GG.stopImmediatePropagation(), GG.preventDefault(), qG())
          };
          return document.addEventListener("keydown", GG, !0), () => {
            document.removeEventListener("keydown", GG, !0)
          }
        }), [ZG, qG]), (0, SG.e)(!0, "click" === ZG, "EmoteWheelOverlay"), (0, wG.useEffect)((() => {
          if ("hold" === ZG) return fG.gameBridge.send("holdEmoteWheel", !0), () => {
            fG.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZG]), (0, wG.useEffect)((() => {
          if ("hold" !== ZG) return;
          const GG = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            bG = EG.r * GG,
            wG = EG.n * GG,
            SG = GG => {
              let ZG = lG.current.x + GG.movementX,
                SG = lG.current.y + GG.movementY;
              const LG = Math.hypot(ZG, SG);
              if (LG > bG) {
                const GG = bG / LG;
                ZG *= GG, SG *= GG
              }
              lG.current = {
                x: ZG,
                y: SG
              }, vG(function(GG, bG, ZG, wG) {
                if (Math.hypot(GG, bG) < ZG) return null;
                const SG = (0, EG.z)(GG, bG, VG.r);
                return null === wG[SG] ? null : SG
              }(ZG, SG, wG, MG))
            };
          return document.addEventListener("mousemove", SG), () => {
            document.removeEventListener("mousemove", SG)
          }
        }), [ZG, MG, vG]), null === ZG) return null;
      const RG = "hold" === ZG || "pad" === ZG,
        TG = null !== JG ? MG[JG] : null,
        HG = null !== TG ? (0, YG.j)(TG).displayName : GG("emotes:pickEmote");
      return (0, iG.jsx)("div", {
        className: rG()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZG
        }),
        onMouseDown: GG => {
          GG.target === GG.currentTarget && qG()
        },
        children: (0, iG.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * EG.r + "rem",
            height: 2 * EG.r + "rem"
          },
          children: [(0, iG.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${EG.m} ${EG.m}`,
            children: [MG.map(((bG, ZG) => {
              const wG = null !== bG,
                SG = RG && ZG === JG;
              return (0, iG.jsx)("path", {
                d: FG(ZG),
                className: rG()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: SG,
                  EmoteWheelWedgeDisabled: !wG
                }),
                onClick: GG => {
                  GG.stopPropagation(), null !== bG && (GG => {
                    qG(), nG(GG)
                  })(bG)
                },
                "aria-label": null !== bG ? (0, YG.j)(bG).displayName : GG("emotes:emptySlot")
              }, ZG)
            })), (0, iG.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: EG.e,
              cy: EG.e,
              r: EG.l
            }), (0, iG.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: EG.e,
              cy: EG.e,
              r: EG.i
            }), RG && null !== JG && (0, iG.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: FG(JG)
            })]
          }), MG.map(((GG, bG) => {
            const ZG = null !== GG,
              wG = RG && bG === JG,
              SG = (0, EG.B)(bG, VG.r),
              LG = EG.c * Math.cos(SG),
              yG = EG.c * Math.sin(SG);
            return (0, iG.jsx)("div", {
              className: rG()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: wG,
                EmoteWheelSlotIconDisabled: !ZG
              }),
              style: {
                left: `calc(50% + ${LG}rem)`,
                top: `calc(50% + ${yG}rem)`,
                backgroundImage: ZG ? `url(/textures/charSkins/previews/emote_${GG}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, bG)
          })), (0, iG.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: HG
          })]
        })
      })
    }))
  },
  8946: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => JG,
      h: () => EG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(2465),
      yG = ZG(3395);
    const kG = 6,
      UG = 4;

    function YG(GG) {
      let {
        slotsLeft: bG,
        slotsRight: ZG,
        width: wG,
        height: SG,
        zoneRight: LG,
        rowTop: yG,
        besideBottom: YG,
        obstacles: VG
      } = GG;
      const pG = Math.max(0, Math.floor(ZG - bG - wG)),
        fG = null === LG ? 0 : Math.min(pG, Math.max(0, Math.ceil(LG + kG - bG))),
        QG = bG + fG - kG,
        KG = bG + fG + wG + kG,
        hG = VG.filter((GG => GG.left < KG && GG.right > QG));
      let dG = YG;
      for (let kG = 0; kG <= hG.length; kG++) {
        const GG = hG.filter((GG => GG.top < dG + UG && GG.bottom > dG - SG - UG));
        if (0 === GG.length) break;
        dG = Math.min(...GG.map((GG => GG.top))) - UG
      }
      return {
        shift: fG,
        rise: dG === YG ? null : Math.ceil(yG - dG)
      }
    }

    function VG(GG) {
      return Array.from(GG.children).filter((GG => !GG.classList.contains("HotBarRow")))
    }

    function pG(GG) {
      return function(GG) {
        const bG = [],
          ZG = (GG, wG) => {
            const SG = GG.getBoundingClientRect();
            if (SG.width > 0 && SG.height > 0) bG.push(GG);
            else if (wG < 2)
              for (const bG of Array.from(GG.children)) ZG(bG, wG + 1)
          };
        for (const wG of GG) ZG(wG, 0);
        return bG
      }(VG(GG).flatMap((GG => GG.classList.contains("AuraBarWrapper") ? [] : GG.classList.contains("BottomScreenStatBarList") ? Array.from(GG.children) : [GG])))
    }

    function fG(GG) {
      var bG;
      const ZG = GG.getBoundingClientRect();
      if (0 === ZG.width) return null;
      const wG = null === (bG = GG.parentElement) || void 0 === bG ? void 0 : bG.getBoundingClientRect();
      return wG && wG.width > 0 ? Math.min(ZG.right, wG.left + wG.width * QG) : ZG.right
    }
    const QG = .35,
      KG = new WeakMap,
      hG = ".BottomScreenMessage, [role='status']",
      dG = new WeakMap;

    function JG(GG) {
      rG(GG) && rG(GG)
    }

    function rG(GG) {
      var bG, ZG, wG, SG, LG, yG;
      const kG = GG.documentElement.classList;
      if (!kG.contains("TouchHotbar") || kG.contains("TouchHotbarKeysAbove") || kG.contains("HudMove-inventory") || kG.contains("HudLocked-inventory") || null === (bG = GG.defaultView) || void 0 === bG || null === (ZG = bG.matchMedia) || void 0 === ZG || !ZG.call(bG, zG).matches) return !1;
      const VG = GG.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        QG = null === VG || void 0 === VG ? void 0 : VG.parentElement,
        JG = null === VG || void 0 === VG ? void 0 : VG.closest(".BottomMiddleElements"),
        rG = null === JG || void 0 === JG ? void 0 : JG.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!VG || !QG || !JG || !rG || JG.classList.contains("TouchInventoryOpen")) return !1;
      const EG = VG.getBoundingClientRect();
      if (0 === EG.width) return !1;
      const oG = GG.querySelector(".JoystickZone"),
        XG = rG.getBoundingClientRect(),
        uG = QG.getBoundingClientRect().top,
        iG = null === (wG = JG.querySelector(":scope > .AuraBarWrapper")) || void 0 === wG ? void 0 : wG.getBoundingClientRect(),
        CG = pG(JG),
        WG = {
          slotsLeft: XG.left,
          slotsRight: XG.right,
          width: EG.width,
          height: EG.height,
          zoneRight: oG ? fG(oG) : null,
          rowTop: uG,
          besideBottom: (iG && iG.height > 0 ? iG.top : uG) - UG,
          obstacles: CG.map((GG => GG.getBoundingClientRect()))
        },
        mG = YG({
          ...WG,
          obstacles: CG.filter((GG => !GG.matches(hG))).map((GG => GG.getBoundingClientRect()))
        }),
        IG = GG.defaultView,
        FG = `${null===IG||void 0===IG?void 0:IG.innerWidth}x${null===IG||void 0===IG?void 0:IG.innerHeight}:${mG.shift}:${Math.round(EG.width)}:${Math.round(uG)}`,
        vG = dG.get(JG),
        aG = (null === vG || void 0 === vG ? void 0 : vG.at) === FG ? (cG = vG.rise, lG = mG.rise, null === cG ? lG : null === lG ? cG : Math.max(cG, lG)) : mG.rise;
      var cG, lG;
      const jG = YG({
          ...WG,
          besideBottom: null === aG ? WG.besideBottom : uG - aG
        }),
        PG = {
          shift: mG.shift,
          rise: null !== (SG = jG.rise) && void 0 !== SG ? SG : aG
        },
        MG = KG.get(JG);
      return (null !== (LG = null === MG || void 0 === MG ? void 0 : MG.shift) && void 0 !== LG ? LG : 0) === PG.shift && dG.set(JG, {
        at: FG,
        rise: aG
      }), (null === MG || void 0 === MG ? void 0 : MG.shift) !== PG.shift && JG.style.setProperty("--touch-shop-above-shift", `${PG.shift}px`), (null === MG || void 0 === MG ? void 0 : MG.rise) !== PG.rise && (JG.classList.toggle("ShopAboveUp", null !== PG.rise), null === PG.rise ? JG.style.removeProperty("--touch-shop-above-rise") : JG.style.setProperty("--touch-shop-above-rise", `${PG.rise}px`)), KG.set(JG, PG), (null !== (yG = null === MG || void 0 === MG ? void 0 : MG.shift) && void 0 !== yG ? yG : 0) !== PG.shift
    }
    const zG = "(orientation: landscape) and (max-height: 500px)";

    function EG(GG, bG, ZG) {
      (0, wG.useLayoutEffect)((() => {
        var bG;
        const wG = null === (bG = GG.current) || void 0 === bG ? void 0 : bG.closest(".BottomMiddleElements");
        if (!wG || ZG) return;
        const kG = new ResizeObserver((() => {
            QG(!1)
          })),
          UG = () => {
            kG.disconnect();
            const GG = document.querySelector(".JoystickZone");
            for (const bG of [GG, wG, wG.querySelector(".HotBarGameItemsContainer"), ...pG(wG)]) bG && kG.observe(bG)
          };
        let YG = null,
          fG = !1;
        const QG = GG => {
            fG ||= GG, YG ??= requestAnimationFrame((() => {
              YG = null, fG && (fG = !1, UG()), JG(document)
            }))
          },
          KG = new MutationObserver((() => {
            QG(!0)
          }));
        KG.observe(wG, {
          childList: !0
        });
        for (const GG of VG(wG)) KG.observe(GG, {
          childList: !0,
          subtree: !0
        });
        JG(document), UG();
        const hG = () => {
            QG(!0)
          },
          dG = [(0, SG.p)(LG.e, hG), (0, SG.p)(yG.e, hG)];
        return () => {
          null !== YG && cancelAnimationFrame(YG), kG.disconnect(), KG.disconnect();
          for (const GG of dG) GG()
        }
      }), [GG, bG, ZG])
    }
  },
  5019: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => KG,
      e: () => zG,
      f: () => hG,
      g: () => rG
    });
    var wG = ZG(51),
      SG = ZG(5021),
      LG = ZG(4396),
      yG = ZG(1320),
      kG = ZG(5039),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1311),
      pG = ZG(1702),
      fG = ZG(5042),
      QG = ZG(1067);

    function KG(GG) {
      let {
        label: bG,
        onClick: ZG,
        checked: wG,
        circleInfoText: SG,
        className: kG,
        disabled: UG,
        note: VG
      } = GG;
      return (0, QG.jsxs)("div", {
        "aria-disabled": UG || void 0,
        "data-pad-focusable": !0,
        className: YG()("SettingBox CheckboxContainer", {
          [kG]: kG,
          SettingBoxDisabled: UG
        }),
        onClick: () => {
          UG || ZG(!wG)
        },
        children: [(0, QG.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, QG.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, QG.jsx)(LG.e, {
              className: "SettingsCheckbox",
              checked: wG,
              disabled: UG,
              onChange: () => {}
            })
          }), (0, QG.jsxs)("div", {
            className: "CheckboxText",
            children: [bG, SG && (0, QG.jsx)("span", {
              onClick: GG => GG.stopPropagation(),
              children: (0, QG.jsx)(yG.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: SG
              })
            })]
          })]
        }), VG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: VG
        })]
      })
    }

    function hG(GG) {
      let {
        name: bG,
        onChange: ZG,
        min: SG,
        max: LG,
        step: kG,
        initValue: UG,
        circleInfoText: VG,
        format: pG,
        className: fG,
        padStep: KG,
        disabled: hG = !1,
        selectableMax: dG,
        cappedNote: rG,
        onChangeComplete: zG
      } = GG;
      const [EG, oG] = (0, wG.useState)(UG), XG = (0, wG.useRef)(UG);
      (0, wG.useEffect)((() => {
        XG.current = UG, oG(UG)
      }), [UG]);
      const uG = void 0 !== dG && dG < LG,
        iG = uG ? {
          "--slider-selectable": (dG - SG) / (LG - SG)
        } : void 0;
      return (0, QG.jsxs)("div", {
        className: YG()("SettingBox SettingsSliderDiv", {
          [fG]: fG,
          SettingBoxDisabled: hG,
          SliderCapped: uG
        }),
        style: iG,
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [`${bG}: ${pG?pG(EG):EG}`, VG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VG
          })]
        }), (0, QG.jsx)("div", {
          className: "SliderDiv",
          children: (0, QG.jsx)(JG, {
            value: EG,
            min: SG,
            max: LG,
            step: kG,
            onChange: GG => {
              if (uG && GG >= dG && EG === dG) return;
              const bG = uG ? Math.min(GG, dG) : GG;
              XG.current = bG, oG(bG), ZG(bG)
            },
            onChangeComplete: zG && (() => {
              zG(XG.current)
            }),
            format: pG,
            padStep: KG,
            disabled: hG
          })
        }), uG && rG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: rG
        })]
      })
    }
    const dG = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function JG(GG) {
      var bG;
      let {
        value: ZG,
        min: LG,
        max: yG,
        step: kG,
        onChange: UG,
        orientation: YG,
        reverse: VG,
        setIsChanging: pG,
        tooltip: KG,
        labels: hG,
        handleLabel: JG,
        format: rG,
        onChangeStart: zG,
        onChangeComplete: EG,
        padStep: oG,
        disabled: XG = !1
      } = GG;
      const uG = (0, wG.useRef)(null),
        iG = (0, wG.useRef)(null);
      (0, wG.useLayoutEffect)((() => {
        var GG, bG, ZG;
        const wG = null !== (GG = null === (bG = uG.current) || void 0 === bG ? void 0 : bG.querySelector(".rangeslider")) && void 0 !== GG ? GG : null;
        null === wG || void 0 === wG || wG.setAttribute("data-pad-slider", ""), null === wG || void 0 === wG || wG.setAttribute("data-pad-focusable", ""), null === wG || void 0 === wG || null === (ZG = wG.querySelector(".rangeslider__handle")) || void 0 === ZG || ZG.setAttribute("data-pad-slider-handle", ""), iG.current = wG
      }), []), (0, wG.useLayoutEffect)((() => {
        var GG, bG;
        XG ? null === (GG = iG.current) || void 0 === GG || GG.setAttribute("aria-disabled", "true") : null === (bG = iG.current) || void 0 === bG || bG.removeAttribute("aria-disabled")
      }), [XG]);
      const CG = (null !== (bG = String(kG).split(".")[1]) && void 0 !== bG ? bG : "").length,
        WG = GG => {
          const bG = Number((Math.round((GG - LG) / kG) * kG + LG).toFixed(CG));
          return Math.min(yG, Math.max(LG, bG))
        },
        mG = (0, wG.useRef)(EG);
      mG.current = EG, (0, wG.useEffect)((() => {
        const GG = uG.current;
        if (!GG) return;
        const bG = GG => {
          var bG;
          dG.has(GG.key) && (null === (bG = mG.current) || void 0 === bG || bG.call(mG))
        };
        return GG.addEventListener("keyup", bG), () => {
          GG.removeEventListener("keyup", bG)
        }
      }), []);
      const IG = (0, wG.useRef)(!1);
      return (0, fG.f)(iG, {
        adjust: GG => {
          if (XG) return;
          const bG = null !== oG && void 0 !== oG ? oG : Math.max(kG, Math.round((yG - LG) / 20 / kG) * kG),
            wG = WG(ZG + GG * bG * (VG ? -1 : 1));
          wG !== ZG && (null === zG || void 0 === zG || zG(), UG(wG), null === EG || void 0 === EG || EG())
        },
        setFraction: GG => {
          if (XG) return;
          const bG = WG(LG + (VG ? 1 - GG : GG) * (yG - LG));
          bG !== ZG && (IG.current || (IG.current = !0, null === zG || void 0 === zG || zG()), UG(bG))
        },
        endDrag: () => {
          IG.current && (IG.current = !1, null === EG || void 0 === EG || EG())
        }
      }), (0, QG.jsx)("div", {
        ref: uG,
        style: {
          display: "contents"
        },
        children: (0, QG.jsx)(SG.e, {
          value: ZG,
          min: LG,
          max: yG,
          step: kG,
          onChange: UG,
          orientation: YG,
          reverse: VG,
          tooltip: KG,
          labels: hG,
          handleLabel: JG,
          format: rG,
          onChangeStart: () => {
            null === zG || void 0 === zG || zG(), null === pG || void 0 === pG || pG(!0)
          },
          onChangeComplete: () => {
            null === pG || void 0 === pG || pG(!1), null === EG || void 0 === EG || EG()
          }
        })
      })
    }
    async function rG() {
      const GG = VG.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await GG.getResult() && (0, pG.reloadBloxd)()
    }

    function zG(GG) {
      let {
        label: bG,
        options: ZG,
        value: wG,
        onChange: SG,
        circleInfoText: LG
      } = GG;
      return (0, QG.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [bG, LG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: LG
          })]
        }), (0, QG.jsx)(kG.c, {
          ariaLabel: bG,
          options: ZG,
          value: wG,
          onChange: SG
        })]
      })
    }
  },
  5039: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1067);

    function yG(GG) {
      let {
        options: bG,
        value: ZG,
        onChange: wG,
        ariaLabel: yG,
        className: kG,
        reselectable: UG = !1,
        keepsFocus: YG = !1,
        padTabs: VG
      } = GG;
      const pG = void 0 !== VG;
      return (0, LG.jsx)("div", {
        className: SG()("SegmentedToggle", kG),
        role: "group",
        "aria-label": yG,
        "data-pad-tabs": VG,
        children: bG.map((GG => {
          const bG = GG.value === ZG;
          return (0, LG.jsx)("button", {
            type: "button",
            "aria-pressed": bG,
            "data-pad-tab": pG || void 0,
            "data-pad-selected": pG && bG ? "true" : void 0,
            "data-pad-default-focus": pG && bG || void 0,
            "aria-label": GG.ariaLabel,
            title: GG.ariaLabel,
            className: SG()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bG
            }),
            onMouseDown: YG ? GG => {
              GG.preventDefault()
            } : void 0,
            onClick: () => {
              bG && !UG || wG(GG.value)
            },
            children: GG.label
          }, GG.value)
        }))
      })
    }
  },
  8792: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      e: () => LG
    });
    var wG = ZG(1972);
    const SG = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      LG = GG => "string" === typeof GG.icon && "" !== GG.icon && "string" === typeof GG.keycode && SG.test(GG.keycode),
      yG = GG => "Space" === GG ? "_" : wG.i[GG]
  },
  8839: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(17);

    function SG() {
      return !wG.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8942: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => LG,
      c: () => SG,
      d: () => kG,
      e: () => wG,
      f: () => hG,
      g: () => QG,
      i: () => VG,
      l: () => yG,
      p: () => dG,
      q: () => pG,
      t: () => UG,
      u: () => fG,
      x: () => YG,
      y: () => KG
    });
    const wG = GG => ({
      left: GG.left,
      top: GG.top,
      right: GG.right,
      bottom: GG.bottom
    });

    function SG(GG) {
      return {
        x: (GG.left + GG.right) / 2,
        y: (GG.top + GG.bottom) / 2
      }
    }

    function LG(GG) {
      return 0 === GG.length ? null : GG.reduce(((GG, bG) => ({
        left: Math.min(GG.left, bG.left),
        top: Math.min(GG.top, bG.top),
        right: Math.max(GG.right, bG.right),
        bottom: Math.max(GG.bottom, bG.bottom)
      })))
    }

    function yG(GG, bG) {
      const ZG = Math.max(0, (bG - (GG.right - GG.left)) / 2),
        wG = Math.max(0, (bG - (GG.bottom - GG.top)) / 2);
      return {
        left: GG.left - ZG,
        top: GG.top - wG,
        right: GG.right + ZG,
        bottom: GG.bottom + wG
      }
    }

    function kG(GG, bG) {
      return bG.x >= GG.left && bG.x <= GG.right && bG.y >= GG.top && bG.y <= GG.bottom
    }

    function UG(GG, bG, ZG) {
      let wG = null,
        LG = 1 / 0;
      for (const {
          id: SG,
          box: yG
        }
        of bG) {
        const bG = (yG.right - yG.left) * (yG.bottom - yG.top);
        kG(yG, GG) && bG < LG && (LG = bG, wG = SG)
      }
      if (null !== wG) return wG;
      let UG = 1 / 0;
      for (const {
          id: YG,
          box: VG
        }
        of bG) {
        if (!kG(yG(VG, ZG), GG)) continue;
        const bG = SG(VG),
          LG = Math.hypot(GG.x - bG.x, GG.y - bG.y);
        LG < UG && (UG = LG, wG = YG)
      }
      return wG
    }

    function YG(GG, bG, ZG) {
      return {
        left: ZG.left,
        top: ZG.top,
        right: GG - ZG.right,
        bottom: bG - ZG.bottom
      }
    }

    function VG(GG, bG, ZG, wG) {
      const SG = (GG, bG, ZG) => Math.max(Math.min(bG, 0), Math.min(Math.max(ZG, 0), GG));
      return {
        x: SG(bG, wG.left - GG.left, wG.right - GG.right),
        y: SG(ZG, wG.top - GG.top, wG.bottom - GG.bottom)
      }
    }

    function pG(GG, bG, ZG, wG, SG) {
      const LG = GG.dx * wG + bG,
        yG = GG.dy * SG + ZG,
        kG = GG => Math.max(-1, Math.min(1, GG));
      return {
        dx: kG(LG / wG),
        dy: kG(yG / SG)
      }
    }

    function fG(GG, bG, ZG, wG) {
      return bG <= 0 || ZG <= 0 ? 1 : Math.max(.05, Math.min(1, GG / bG, wG / ZG))
    }

    function QG(GG, bG, ZG) {
      return Math.min(GG.right, bG.right) - Math.max(GG.left, bG.left) > ZG && Math.min(GG.bottom, bG.bottom) - Math.max(GG.top, bG.top) > ZG
    }

    function KG(GG, bG) {
      const ZG = (GG, bG, ZG, wG) => bG - GG > wG - ZG ? ZG - GG > bG - wG ? wG - bG : ZG - GG : GG < ZG ? ZG - GG : bG > wG ? wG - bG : 0;
      return {
        x: ZG(GG.left, GG.right, bG.left, bG.right),
        y: ZG(GG.top, GG.bottom, bG.top, bG.bottom)
      }
    }

    function hG(GG, bG, ZG) {
      return QG(GG, {
        left: 0,
        top: 0,
        right: bG,
        bottom: ZG
      }, 0)
    }

    function dG(GG, bG) {
      let {
        avoid: ZG = null,
        bounds: wG = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, SG = 0, LG = 1 / 0;
      return GG.forEach(((GG, yG) => {
        const kG = bG.filter((bG => QG(GG, bG, 0))).length,
          UG = null !== wG && (GG.left < wG.left || GG.top < wG.top || GG.right > wG.right || GG.bottom > wG.bottom),
          YG = kG + (ZG && QG(GG, ZG, 0) ? 1e3 : 0) + (UG ? 1e6 : 0);
        YG < LG && (SG = yG, LG = YG)
      })), SG
    }
  },
  8944: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      e: () => LG,
      f: () => SG,
      h: () => yG,
      l: () => pG,
      n: () => VG,
      o: () => YG,
      s: () => UG
    });
    var wG = ZG(2441);
    const SG = ["J", "C", "A", "P", "U", "X", "G"],
      LG = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function yG(GG) {
      return GG ? ["X"] : ["P", "X"]
    }
    const kG = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: wG.K,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function UG(GG, bG, ZG) {
      const wG = GG.querySelector(".InGameUi .TouchComponentsButtons");
      if (!wG) return kG;
      const LG = {},
        yG = {};
      for (const kG of SG) {
        const GG = wG.querySelector(`.TouchSlot${kG} > .TouchKey`);
        if (GG) {
          var UG, YG;
          LG[kG] = GG.cloneNode(!0);
          const bG = (null !== (UG = null === (YG = GG.querySelector(".TouchKeyLabel")) || void 0 === YG ? void 0 : YG.textContent) && void 0 !== UG ? UG : "").split(/\s+/).filter((GG => !/[\d\xd7]/.test(GG))).join(" ");
          bG && (yG[kG] = bG)
        }
      }
      const VG = bG => {
          const ZG = GG.querySelector(`.InGameUi ${bG}`);
          return null !== ZG && !ZG.classList.contains("Hidden")
        },
        pG = [...GG.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((GG => GG.cloneNode(!0)));
      return {
        faces: Object.keys(LG).length > 0 ? LG : null,
        names: yG,
        shop: VG(".TouchInventoryKey.ShopKey"),
        bag: VG(".TouchInventoryKey.BagKey"),
        sprint: VG(".TouchSprintHit"),
        items: pG.length > 0 ? pG : null,
        rowIcons: bG,
        pinnedIcons: ZG
      }
    }

    function YG(GG, bG) {
      const ZG = {};
      for (const wG of [...yG(bG), "G"]) {
        const bG = GG.names[wG];
        bG && (ZG[LG[wG]] = bG)
      }
      return ZG
    }

    function VG(GG, bG) {
      const {
        faces: ZG
      } = GG;
      if (null === ZG) return [];
      const wG = new Set(Object.keys(ZG).map((GG => LG[GG])));
      return yG(bG).filter((GG => !wG.has(LG[GG])))
    }

    function pG(GG, bG) {
      GG.replaceChildren(...[...bG.childNodes].map((GG => GG.cloneNode(!0))))
    }
  },
  8842: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => VG,
      C: () => fG,
      E: () => QG,
      c: () => LG,
      e: () => kG,
      i: () => YG,
      l: () => UG,
      m: () => yG,
      n: () => SG,
      r: () => wG,
      v: () => KG,
      z: () => pG
    });
    const wG = 14,
      SG = 6,
      LG = (wG + SG) / 2,
      yG = 200,
      kG = yG / 2,
      UG = yG / 2 - 1,
      YG = SG / wG * (yG / 2),
      VG = (GG, bG) => -Math.PI / 2 + 2 * GG * Math.PI / bG,
      pG = (GG, bG, ZG) => {
        const wG = 2 * Math.PI / ZG;
        return (Math.round((Math.atan2(bG, GG) + Math.PI / 2) / wG) % ZG + ZG) % ZG
      },
      fG = .5,
      QG = (GG, bG, ZG) => Math.hypot(GG.x, GG.y) < fG ? ZG : pG(GG.x, GG.y, bG),
      KG = (GG, bG, ZG, wG, SG) => {
        const LG = Math.PI / bG,
          yG = VG(GG, bG),
          kG = yG - LG,
          UG = yG + LG,
          YG = (GG, bG) => `${ZG+GG*Math.cos(bG)} ${ZG+GG*Math.sin(bG)}`;
        return [`M ${YG(wG,kG)}`, `L ${YG(SG,kG)}`, `A ${SG} ${SG} 0 0 1 ${YG(SG,UG)}`, `L ${YG(wG,UG)}`, `A ${wG} ${wG} 0 0 0 ${YG(wG,kG)}`, "Z"].join(" ")
      }
  },
  8870: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(51),
      SG = ZG(8825),
      LG = ZG(2409);

    function yG() {
      const GG = (0, LG.i)("shopInfo"),
        [, bG] = (0, wG.useReducer)((GG => GG + 1), 0);
      return (0, LG.h)("shopInfo", bG), !(0, SG.b)(GG)
    }
  },
  8218: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      f: () => LG,
      i: () => fG,
      j: () => pG,
      l: () => YG,
      n: () => kG,
      r: () => wG,
      s: () => QG,
      u: () => KG
    });
    const wG = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      SG = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: wG
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      LG = {
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
      yG = ["pickBlock", "perspective"],
      kG = GG => yG.includes(GG) ? yG : [GG],
      UG = Object.fromEntries(SG.flatMap((GG => {
        let {
          group: bG,
          actions: ZG
        } = GG;
        return ZG.map((GG => [GG, bG]))
      }))),
      YG = GG => UG[GG],
      VG = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      pG = GG => {
        var bG;
        return [YG(GG), ...null !== (bG = VG[GG]) && void 0 !== bG ? bG : []]
      },
      fG = new Set(["menu", "inventory", "keyboard"]),
      QG = {
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
      KG = new Set(["forward", "backward", "left", "right"])
  },
  8214: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => zG,
      D: () => WG,
      G: () => VG,
      J: () => CG,
      N: () => FG,
      e: () => rG,
      h: () => oG,
      j: () => fG,
      k: () => QG,
      l: () => aG,
      m: () => IG,
      p: () => mG,
      t: () => EG,
      v: () => vG,
      x: () => iG
    });
    var wG = ZG(8218),
      SG = ZG(8222),
      LG = ZG(8205),
      yG = ZG(8241);
    const kG = GG => "pickBlock" === GG ? "perspective" : GG,
      UG = (GG, bG) => {
        var ZG;
        const SG = kG(bG);
        return null !== (ZG = GG[SG]) && void 0 !== ZG ? ZG : wG.f[SG]
      },
      YG = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((GG => {
        let [bG, ZG] = GG;
        return [
          [bG, ZG],
          [ZG, bG]
        ]
      }))),
      VG = (GG, bG) => null !== GG && void 0 !== GG ? GG : "nintendo" === bG,
      pG = GG => VG((0, SG.i)().swapConfirmBack, (0, SG.m)()) && YG.get(GG) || GG,
      fG = GG => UG((0, SG.i)().bindings, pG(GG)),
      QG = GG => wG.f[pG(GG)],
      KG = Object.keys(wG.f),
      hG = GG => "gameplay" === (0, wG.l)(GG) ? ["gameplay"] : (0, wG.j)(GG),
      dG = (GG, bG) => {
        const ZG = hG(bG);
        return hG(GG).some((GG => ZG.includes(GG)))
      },
      JG = (GG, bG, ZG) => {
        const SG = UG(GG, bG),
          yG = new Set((0, wG.n)(bG)),
          YG = [...yG];
        for (let wG = YG.pop(); wG; wG = YG.pop())
          for (const bG of KG) {
            const LG = UG(GG, bG);
            yG.has(bG) || LG !== ZG && LG !== SG || !dG(wG, bG) || (yG.add(bG), YG.push(bG))
          }
        const VG = {
          ...GG
        };
        for (const pG of yG) {
          const bG = UG(GG, pG) === SG ? ZG : SG,
            yG = (0, wG.j)(pG).some((GG => wG.i.has(GG)));
          if ((0, LG.B)(bG) && yG) return null;
          VG[kG(pG)] = bG
        }
        for (const LG of Object.keys(VG)) VG[LG] === wG.f[LG] && delete VG[LG];
        return VG
      },
      rG = (GG, bG) => null !== JG((0, SG.i)().bindings, pG(GG), bG),
      zG = (GG, bG) => {
        if (fG(GG) === bG) return !0;
        const ZG = JG((0, SG.i)().bindings, pG(GG), bG);
        return !!ZG && ((0, SG.q)({
          bindings: ZG
        }), !0)
      },
      EG = (GG, bG) => {
        const ZG = (0, wG.n)(bG);
        return KG.filter((bG => kG(bG) === bG && !ZG.includes(bG) && UG(GG, pG(bG)) !== fG(bG)))
      },
      oG = ["southpaw", "triggersSwapped"],
      XG = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      uG = GG => Object.keys(XG[GG]),
      iG = (GG, bG) => "southpaw" === GG ? bG.swapSticks : uG(GG).every((ZG => UG(bG.bindings, ZG) === XG[GG][ZG])),
      CG = (GG, bG) => {
        const ZG = (0, SG.i)();
        let LG = ZG.bindings;
        for (const SG of uG(GG)) {
          const ZG = bG ? XG[GG][SG] : wG.f[SG];
          if (LG = JG(LG, SG, ZG), !LG) return !1
        }
        return (0, SG.q)({
          swapSticks: "southpaw" === GG ? bG : ZG.swapSticks,
          bindings: LG
        }), !0
      },
      WG = () => {
        (0, SG.q)({
          swapSticks: !1,
          bindings: {}
        })
      },
      mG = () => (0, SG.i)().swapSticks ? "RightStick" : "LeftStick",
      IG = () => (0, SG.i)().swapSticks ? "LeftStick" : "RightStick",
      FG = GG => (0, SG.i)().swapSticks && (0, LG.B)(GG),
      vG = GG => FG(GG) ? mG() : IG(),
      aG = GG => {
        if (wG.u.has(GG)) return mG();
        const bG = wG.s[GG];
        return bG && ("leaderboard" !== bG || (0, yG.e)(GG, (0, yG.c)())) ? fG(bG) : null
      }
  },
  8200: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ControllerCategory: () => Ek,
      ControllerGlyph: () => uS,
      ControllerRoot: () => Ey,
      PadLobbyShortcuts: () => My,
      PadSneakChip: () => my,
      PadTooltip: () => Fy,
      attachPressToContinue: () => Ty,
      getBoundButton: () => VG.j,
      getControllerSettings: () => fG.i,
      getGlyphForNoaAction: () => VG.l,
      getInventoryCursorState: () => uk,
      getMenuShortcutButton: () => RZ,
      getPadGlyphIconName: () => iy,
      getPadGlyphIconUrl: () => Cy,
      getPadRepeatTiming: () => hG.f,
      handOverPadFocus: () => Ck,
      hasActivePad: () => Xk,
      isPadSteppingSlots: () => ik
    });
    const wG = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var SG = ZG(1151),
      LG = ZG(1359),
      yG = ZG(8202),
      kG = ZG(59),
      UG = ZG(17),
      YG = ZG(19),
      VG = ZG(8214),
      pG = ZG(8248),
      fG = ZG(8222),
      QG = ZG(8250),
      KG = ZG(8205),
      hG = ZG(8707),
      dG = ZG(8710),
      JG = ZG(1606);
    const rG = (GG, bG, ZG) => Math.max(bG, Math.min(ZG, GG)),
      zG = GG => Math.min(GG.width, GG.height) / 720,
      EG = GG => Math.max(.15, GG);
    class oG {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(GG, bG) {
        const ZG = Math.hypot(GG.x, GG.y) >= (GG => Math.max(.3, GG))(bG);
        return this.locked ? (this.locked = ZG, !1) : ZG
      }
    }
    const XG = (GG, bG) => {
        const ZG = rG(bG.dtMs, 0, 100),
          wG = ZG / 1e3,
          SG = zG(bG.viewport) * (bG.cursorSpeedPercent / 100),
          LG = (0, KG.i)(bG.stick, EG(bG.moveDeadzone)),
          yG = Math.hypot(LG.x, LG.y),
          kG = ((GG, bG, ZG) => {
            if (bG < .3) return 0;
            const wG = ZG / 350;
            return bG >= .85 ? Math.min(1, GG + wG) : Math.max(0, GG - wG)
          })(GG.speedRamp, yG, ZG);
        let UG = GG.x,
          YG = GG.y;
        if (yG > 0) {
          const GG = .45 + .55 * kG,
            ZG = bG.context.overInteractive ? .45 : 1,
            VG = 1400 * (GG => {
              const bG = rG(GG, 0, 1);
              return .3 * bG + .7 * bG * bG
            })(yG) * SG * GG * ZG;
          UG += LG.x / yG * VG * wG, YG += LG.y / yG * VG * wG
        }
        const VG = Math.hypot(bG.dpad.x, bG.dpad.y);
        if (VG > 0) {
          const GG = 500 * SG;
          UG += bG.dpad.x / VG * GG * wG, YG += bG.dpad.y / VG * GG * wG
        }
        const pG = bG.context.magnetTarget;
        if (pG && yG < .3 && 0 === VG) {
          const GG = ((GG, bG, ZG, wG, SG) => {
            const LG = bG.x - GG.x,
              yG = bG.y - GG.y,
              kG = Math.hypot(LG, yG);
            if (0 === kG) return {
              x: 0,
              y: 0
            };
            const UG = Math.min(kG, SG * (1 - wG / .3));
            let YG = LG / kG * UG,
              VG = yG / kG * UG;
            if (wG > 0) {
              const GG = ZG.x / wG,
                bG = ZG.y / wG,
                SG = YG * GG + VG * bG;
              SG < 0 && (YG -= SG * GG, VG -= SG * bG)
            }
            return {
              x: YG,
              y: VG
            }
          })({
            x: UG,
            y: YG
          }, pG, LG, yG, 120 * zG(bG.viewport) * wG);
          UG += GG.x, YG += GG.y
        }
        return {
          x: rG(UG, 0, Math.max(0, bG.viewport.width - 1)),
          y: rG(YG, 0, Math.max(0, bG.viewport.height - 1)),
          speedRamp: kG
        }
      },
      uG = GG => {
        const bG = (0, KG.i)(GG, .2);
        return 0 !== bG.x || 0 !== bG.y
      },
      iG = (GG, bG) => {
        const ZG = (0, KG.i)(GG, .2),
          wG = Math.hypot(ZG.x, ZG.y);
        if (0 === wG) return {
          x: 0,
          y: 0
        };
        const SG = wG * wG * 1600,
          LG = rG(bG, 0, 100) / 1e3;
        return {
          x: ZG.x / wG * SG * LG,
          y: ZG.y / wG * SG * LG
        }
      },
      CG = (GG, bG) => "y" === bG ? GG.scrollHeight > GG.clientHeight + 1 : GG.scrollWidth > GG.clientWidth + 1,
      WG = (GG, bG) => {
        if (!CG(GG, bG)) return !1;
        const ZG = getComputedStyle(GG),
          wG = "y" === bG ? ZG.overflowY : ZG.overflowX;
        return "auto" === wG || "scroll" === wG
      },
      mG = (GG, bG, ZG) => {
        for (let LG = GG instanceof HTMLElement ? GG : null !== (wG = null === GG || void 0 === GG ? void 0 : GG.parentElement) && void 0 !== wG ? wG : null; LG; LG = LG.parentElement) {
          var wG;
          if (WG(LG, bG)) return LG;
          if (LG === ZG) return null
        }
        if (ZG) return null;
        const SG = document.scrollingElement;
        return SG instanceof HTMLElement && CG(SG, bG) ? SG : null
      },
      IG = new WeakMap,
      FG = (GG, bG) => {
        const ZG = performance.now(),
          wG = IG.get(GG);
        if (wG && wG.axis === bG && ZG - wG.atMs < 500 && (!wG.container || wG.container.isConnected)) return wG.container;
        const SG = vG(GG, bG);
        return IG.set(GG, {
          axis: bG,
          atMs: ZG,
          container: SG
        }), SG
      },
      vG = (GG, bG) => {
        let ZG = WG(GG, bG) ? GG : null,
          wG = ZG ? ZG.clientWidth * ZG.clientHeight : 0;
        for (const SG of GG.querySelectorAll("*")) {
          const GG = SG.clientWidth * SG.clientHeight;
          GG > wG && WG(SG, bG) && (ZG = SG, wG = GG)
        }
        return ZG
      },
      aG = (GG, bG, ZG) => "y" === bG ? ZG < 0 ? GG.scrollTop > 0 : GG.scrollTop + GG.clientHeight < GG.scrollHeight - 1 : ZG < 0 ? GG.scrollLeft > 0 : GG.scrollLeft + GG.clientWidth < GG.scrollWidth - 1,
      cG = (GG, bG, ZG) => {
        "y" === bG ? GG.scrollBy({
          top: ZG,
          behavior: "instant"
        }) : GG.scrollBy({
          left: ZG,
          behavior: "instant"
        })
      },
      lG = GG => {
        if (!GG || GG === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const bG = GG.getBoundingClientRect(),
          ZG = Math.max(0, bG.left),
          wG = Math.max(0, bG.top);
        return new DOMRect(ZG, wG, Math.min(window.innerWidth, bG.right) - ZG, Math.min(window.innerHeight, bG.bottom) - wG)
      },
      jG = (GG, bG) => GG.left < bG.right && bG.left < GG.right && GG.top < bG.bottom && bG.top < GG.bottom;
    var PG = ZG(51),
      MG = ZG(1006),
      AG = ZG.n(MG),
      sG = ZG(1067);
    let qG = 0,
      nG = !1;
    class gG {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(GG) {
        this.element = GG, this.shownKey = "", this.gap = null
      }
      show(GG) {
        const bG = this.element;
        if (!bG) return;
        const ZG = GG ? this.keepOnScreen(bG, GG) : null,
          wG = ZG ? `${ZG.left},${ZG.top},${ZG.width},${ZG.height}` : "";
        if (wG === this.shownKey) return;
        const SG = "" === this.shownKey;
        this.shownKey = wG, bG.classList.toggle("Visible", null !== ZG), ZG && (bG.classList.toggle("Snap", SG), bG.style.width = `${ZG.width}px`, bG.style.height = `${ZG.height}px`, bG.style.transform = `translate(${ZG.left}px, ${ZG.top}px)`, SG && (bG.offsetWidth, bG.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(GG, bG) {
        var ZG;
        const wG = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!nG){nG=!0;const GG=document.createElement("div");GG.setAttribute("aria-hidden","true"),GG.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(GG),new ResizeObserver((()=>{qG++})).observe(GG)}return String(qG)})()}`;
        (null === (ZG = this.gap) || void 0 === ZG ? void 0 : ZG.key) !== wG && (this.gap = {
          px: parseFloat(getComputedStyle(GG).paddingLeft) || 0,
          key: wG
        });
        const SG = this.gap.px + 2,
          LG = Math.max(bG.left, SG),
          yG = Math.max(bG.top, SG),
          kG = Math.min(bG.left + bG.width, window.innerWidth - SG),
          UG = Math.min(bG.top + bG.height, window.innerHeight - SG);
        return kG <= LG || UG <= yG ? bG : {
          left: LG,
          top: yG,
          width: kG - LG,
          height: UG - yG
        }
      }
    }
    const eG = GG => {
      let {
        placer: bG,
        className: ZG
      } = GG;
      const wG = (0, PG.useCallback)((GG => {
        bG.setElement(GG)
      }), [bG]);
      return (0, sG.jsx)("div", {
        ref: wG,
        className: AG()("PadReticle", ZG),
        "aria-hidden": !0
      })
    };
    var RG = ZG(8715);
    const TG = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const HG = new class {
      constructor() {
        this.state = TG, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(GG) {
        if (bG = this.state, ZG = GG, (bG.visible || ZG.visible) && (bG.visible !== ZG.visible || bG.x !== ZG.x || bG.y !== ZG.y || bG.pressed !== ZG.pressed)) {
          var bG, ZG;
          this.state = GG;
          for (const bG of this.listeners) bG(GG)
        }
      }
      hide() {
        this.set(TG)
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
    };
    var tG = ZG(8723);
    const DG = (GG, bG) => {
        let {
          kind: ZG,
          holding: wG,
          hasPress: SG,
          hasBack: LG,
          slotHasItem: yG
        } = bG;
        switch (GG) {
          case "primary":
            return "slot" === ZG ? "slotPrimary" : "recipe" === ZG || "button" === ZG ? SG ? "pressPrimary" : "click" : "textField" === ZG ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ZG ? "slotSecondary" : "button" !== ZG && "recipe" !== ZG || !SG ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ZG && yG ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ZG && yG && !wG ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return wG ? "cancel" : LG ? "pressBack" : "close"
        }
      },
      NG = GG => {
        const bG = [];
        if (GG.hotbarPicking) return bG.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), bG.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), bG;
        if (GG.holding) "slot" === GG.kind ? (bG.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), bG.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === GG.kind && bG.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), bG.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), bG.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), GG.openButtonCloses && bG.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ZG;
          "slot" === GG.kind && GG.slotHasItem ? (bG.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), bG.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), bG.push({
            actions: ["inventoryQuickMove"],
            labelKey: GG.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), bG.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), bG.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== GG.kind && "recipe" !== GG.kind || !GG.pressHints ? "button" === GG.kind || "recipe" === GG.kind ? bG.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === GG.kind && bG.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (GG.pressHints.primary && bG.push({
            actions: ["inventoryPrimary"],
            labelKey: GG.pressHints.primary
          }), GG.pressHints.secondary && bG.push({
            actions: ["inventorySecondary"],
            labelKey: GG.pressHints.secondary
          }));
          const wG = null === (ZG = GG.pressHints) || void 0 === ZG ? void 0 : ZG.back;
          wG && bG.push({
            actions: ["inventoryClose"],
            labelKey: wG
          });
          const SG = [];
          GG.openButtonCloses && SG.push("inventory"), wG || SG.push("inventoryClose"), SG.length > 0 && bG.push({
            actions: SG,
            labelKey: "inventoryClose"
          })
        }
        return bG.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), GG.hasCategories ? bG.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : GG.hasList && bG.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), bG
      };
    var OG = ZG(8728),
      xG = ZG(8726);
    class BG {
      constructor(GG) {
        this.probes = GG, this.byContainer = new Map, this.byParent = new Map
      }
      find(GG, bG) {
        const ZG = mG(GG, "y", bG);
        if (!ZG) return null;
        let wG = this.byContainer.get(ZG);
        return wG || (this.probes.push({
          element: ZG,
          rect: wb(ZG.getBoundingClientRect())
        }), wG = {
          container: ZG,
          box: lG(ZG),
          group: Zb(ZG)
        }, this.byContainer.set(ZG, wG)), wG
      }
      findForParent(GG, bG) {
        let ZG = this.byParent.get(GG);
        return void 0 === ZG && (ZG = this.find(GG, bG), this.byParent.set(GG, ZG)), ZG
      }
    }
    const Gb = new WeakMap;
    let bb = 0;
    const Zb = GG => {
        let bG = Gb.get(GG);
        return bG || (bG = "el:" + bb++, Gb.set(GG, bG)), bG
      },
      wb = GG => ({
        left: GG.left,
        top: GG.top,
        width: GG.width,
        height: GG.height
      }),
      Sb = GG => GG.width > 0 && GG.height > 0,
      Lb = (GG, bG) => Sb(GG) && GG.left + GG.width > 0 && GG.top + GG.height > 0 && GG.left < bG.width && GG.top < bG.height,
      yb = (GG, bG, ZG) => {
        const wG = GG.top + GG.height / 2;
        return Lb(GG, bG) && (!ZG || wG >= ZG.top && wG <= ZG.bottom)
      },
      kb = GG => ({
        x: GG.left + GG.width / 2,
        y: GG.top + GG.height / 2
      }),
      Ub = (GG, bG, ZG) => GG < 0 ? ZG >= 0 ? 0 : bG - 1 : ((GG + ZG) % bG + bG) % bG,
      Yb = GG => "Left" === GG || "Right" === GG,
      Vb = (GG, bG, ZG) => {
        const wG = Yb(ZG),
          SG = wG ? GG.top : GG.left,
          LG = wG ? GG.height : GG.width,
          yG = wG ? bG.top : bG.left,
          kG = wG ? bG.height : bG.width,
          UG = Math.max(0, Math.max(yG - (SG + LG), SG - (yG + kG)));
        return LG > 1.5 * kG ? {
          gap: UG,
          offset: Math.max(0, yG - SG) + .1 * Math.max(0, SG - yG)
        } : {
          gap: UG,
          offset: Math.abs(yG + kG / 2 - (SG + LG / 2))
        }
      },
      pb = (GG, bG, ZG) => {
        const wG = ((GG, bG, ZG) => {
          const wG = kb(GG),
            SG = kb(bG),
            LG = Yb(ZG) ? Math.min(GG.width, bG.width) / 4 : Math.min(GG.height, bG.height) / 4;
          switch (ZG) {
            case "Right":
              return SG.x - wG.x >= LG ? Math.max(0, bG.left - (GG.left + GG.width)) : null;
            case "Left":
              return wG.x - SG.x >= LG ? Math.max(0, GG.left - (bG.left + bG.width)) : null;
            case "Down":
              return SG.y - wG.y >= LG ? Math.max(0, bG.top - (GG.top + GG.height)) : null;
            case "Up":
              return wG.y - SG.y >= LG ? Math.max(0, GG.top - (bG.top + bG.height)) : null
          }
        })(GG, bG, ZG);
        if (null === wG) return null;
        const SG = Vb(GG, bG, ZG);
        return wG + 3 * SG.gap + .5 * SG.offset
      },
      fb = (GG, bG) => bG.visible || null !== bG.scrollGroup && bG.scrollGroup === GG.scrollGroup,
      Qb = (GG, bG, ZG, wG) => {
        let SG = null,
          LG = 1 / 0;
        for (const yG of bG) {
          if (yG.key === GG.key || !fb(GG, yG) || !wG(yG)) continue;
          const bG = pb(GG.rect, yG.rect, ZG);
          null !== bG && bG < LG && (SG = yG, LG = bG)
        }
        return SG
      },
      Kb = (GG, bG, ZG) => {
        const wG = Qb(GG, bG, ZG, (() => !0));
        if (!wG || Yb(ZG) || null === GG.scrollGroup || wG.scrollGroup === GG.scrollGroup) return wG;
        const SG = Qb(GG, bG, ZG, (bG => 0 === Vb(GG.rect, bG.rect, ZG).gap));
        return null !== SG && void 0 !== SG ? SG : wG
      },
      hb = (GG, bG, ZG) => {
        let wG = null,
          SG = 1 / 0;
        for (const LG of bG) {
          if (!LG.visible || ZG && !ZG(LG)) continue;
          const bG = kb(LG.rect),
            yG = Math.hypot(bG.x - GG.x, bG.y - GG.y);
          yG < SG && (wG = LG, SG = yG)
        }
        return wG
      },
      db = GG => {
        const {
          rect: bG,
          clip: ZG
        } = GG;
        if (!ZG) return bG;
        const wG = Math.max(bG.left, ZG.left),
          SG = Math.max(bG.top, ZG.top);
        return {
          left: wG,
          top: SG,
          width: Math.min(bG.left + bG.width, ZG.left + ZG.width) - wG,
          height: Math.min(bG.top + bG.height, ZG.top + ZG.height) - SG
        }
      },
      Jb = (GG, bG) => bG.x >= GG.left && bG.x < GG.left + GG.width && bG.y >= GG.top && bG.y < GG.top + GG.height,
      rb = (GG, bG) => {
        let ZG = null,
          wG = 1 / 0;
        for (const SG of bG) {
          const bG = db(SG);
          (SG.visible || SG.clip) && Jb(bG, GG) && (bG.width * bG.height < wG && (ZG = SG, wG = bG.width * bG.height))
        }
        return ZG
      },
      zb = GG => {
        let bG = null;
        for (const ZG of GG) {
          if (!ZG.visible) continue;
          if (!bG) {
            bG = ZG;
            continue
          }
          const GG = Math.min(bG.rect.height, ZG.rect.height) / 2,
            wG = ZG.rect.top - bG.rect.top;
          (wG < -GG || Math.abs(wG) <= GG && ZG.rect.left < bG.rect.left) && (bG = ZG)
        }
        return bG
      },
      Eb = (GG, bG, ZG, wG, SG) => {
        const LG = SG % bG,
          yG = Math.floor(SG / bG);
        return {
          left: GG.left + LG * ZG,
          top: GG.top + yG * wG,
          width: GG.width,
          height: GG.height
        }
      },
      ob = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Xb = ".LazyLoadedItemWrapper",
      ub = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      ib = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Cb = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Wb = GG => GG.hasAttribute("data-inven-idx") ? "slot" : GG.hasAttribute("data-recipe-key") ? "recipe" : GG.hasAttribute("data-craft-ingredient") || (0, xG.s)(GG) ? "info" : (0, RG.L)(GG) ? "textField" : "button",
      mb = (GG, bG) => "slot" === bG ? Number(GG.getAttribute("data-inven-idx")) : null,
      Ib = GG => GG.matches(Xb) ? GG.querySelector(ub) : GG,
      Fb = GG => {
        var bG, ZG;
        return {
          element: GG,
          recipe: null !== (bG = GG && (null === (ZG = Ib(GG)) || void 0 === ZG ? void 0 : ZG.getAttribute("data-recipe-key"))) && void 0 !== bG ? bG : null
        }
      },
      vb = GG => {
        const bG = Ib(GG);
        if (!bG) return {
          kind: "pending",
          idx: null
        };
        const ZG = Wb(bG);
        return {
          kind: ZG,
          idx: mb(bG, ZG)
        }
      },
      ab = GG => {
        const bG = [];
        for (const [ZG, wG] of ib) {
          GG.matches(wG) && bG.push([ZG, GG]);
          for (const SG of GG.querySelectorAll(wG)) bG.push([ZG, SG])
        }
        return bG
      },
      cb = (GG, bG) => {
        for (const [ZG, wG] of GG)
          if (wG.contains(bG)) return ZG;
        return "other"
      },
      lb = (GG, bG, ZG, wG, SG, LG, yG, kG) => {
        var UG;
        const YG = GG.children,
          VG = wb(YG[0].getBoundingClientRect()),
          pG = [{
            element: YG[0],
            rect: VG
          }];
        if (LG.push(pG[0]), 0 === VG.width || 0 === VG.height) return;
        let fG = 1;
        for (; fG < YG.length && Math.abs(YG[fG].getBoundingClientRect().top - VG.top) < 1;) fG++;
        const QG = GG => {
            const bG = {
              element: YG[GG],
              rect: wb(YG[GG].getBoundingClientRect())
            };
            return LG.push(bG), pG.push(bG), bG.rect
          },
          KG = fG > 1 ? QG(1).left - VG.left : VG.width,
          hG = YG.length > fG ? QG(fG).top - VG.top : VG.height,
          dG = yG.find(GG, bG);
        let JG = null;
        if (dG) {
          var rG;
          const {
            container: GG,
            box: bG
          } = dG;
          JG = null !== (rG = kG.get(GG)) && void 0 !== rG ? rG : null, JG || (JG = {
            top: GG.scrollTop,
            left: GG.scrollLeft,
            box: bG,
            viewport: wG,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, kG.set(GG, JG)), JG.probes.push(...pG)
        }
        const zG = SG.length;
        for (let uG = 0; uG < YG.length; uG++) {
          var EG, oG, XG;
          const GG = YG[uG],
            bG = Eb(VG, fG, KG, hG, uG),
            LG = GG.firstElementChild ? GG.querySelector(ub) : null,
            yG = LG ? Wb(LG) : "pending";
          SG.push({
            key: Zb(GG),
            rect: bG,
            panel: ZG,
            scrollGroup: null !== (EG = null === dG || void 0 === dG ? void 0 : dG.group) && void 0 !== EG ? EG : null,
            visible: yb(bG, wG, null === dG || void 0 === dG ? void 0 : dG.box),
            clip: null !== (oG = null === dG || void 0 === dG ? void 0 : dG.box) && void 0 !== oG ? oG : null,
            element: GG,
            kind: yG,
            idx: LG ? mb(LG, yG) : null,
            scrollContainer: null !== (XG = null === dG || void 0 === dG ? void 0 : dG.container) && void 0 !== XG ? XG : null
          })
        }
        null === (UG = JG) || void 0 === UG || UG.targets.push(...SG.slice(zG))
      },
      jb = GG => GG instanceof Element && null !== GG.closest(Xb),
      Pb = GG => null !== GG.scrollContainer && jb(GG.element);
    class Mb {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(GG, bG, ZG, wG) {
        this.latched = {
          source: GG,
          focusKey: bG,
          sinceMs: ZG,
          hold: {
            id: ++this.presses,
            holdMs: wG
          }
        }
      }
      update(GG, bG, ZG) {
        const wG = this.latched;
        return wG ? GG && bG === wG.focusKey ? ZG - wG.sinceMs < wG.hold.holdMs ? null : (this.latched = null, wG.source) : (this.latched = null, null) : null
      }
      getHold() {
        var GG, bG;
        return null !== (GG = null === (bG = this.latched) || void 0 === bG ? void 0 : bG.hold) && void 0 !== GG ? GG : null
      }
      reset() {
        this.latched = null
      }
    }
    var Ab = ZG(8732);
    const sb = {
        kind: "none"
      },
      qb = GG => ({
        x: GG.clientX,
        y: GG.clientY
      }),
      nb = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class gb {
      constructor() {
        this.hovered = sb, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(GG, bG, ZG, wG, SG) {
        const LG = null !== bG ? {
            kind: "slot",
            idx: bG
          } : ZG ? {
            kind: "element",
            element: ZG
          } : sb,
          yG = `${SG}|${Math.round(wG.clientX)},${Math.round(wG.clientY)}`,
          kG = (UG = this.hovered, YG = LG, "slot" === UG.kind && "slot" === YG.kind ? UG.idx === YG.idx : "element" === UG.kind && "element" === YG.kind ? UG.element === YG.element : UG.kind === YG.kind);
        var UG, YG;
        if (kG && yG === this.signature) return;
        const VG = !kG || SG !== this.holding || "" === this.signature;
        this.signature = yG, this.holding = SG, this.lastPoint = wG;
        const pG = this.hovered;
        if (this.hovered = LG, "slot" === LG.kind) return this.leaveElement(pG, null, wG), void(VG ? GG.hover(LG.idx, wG) : GG.moveTo(wG));
        if (kG) return void("element" === LG.kind ? (0, RG.o)(LG.element, LG.element, qb(wG)) : GG.hover(null, wG));
        GG.hover(null, wG);
        const fG = "element" === LG.kind ? LG.element : null;
        "element" === pG.kind ? (0, RG.o)(pG.element, fG, qb(wG)) : fG && (0, RG.o)(null, fG, qb(wG))
      }
      invalidate() {
        this.signature = ""
      }
      clear(GG) {
        const bG = this.hovered;
        this.hovered = sb, this.signature = "", "none" !== bG.kind && (this.leaveElement(bG, null, this.lastPoint), GG && "slot" === bG.kind && GG.hover(null, this.lastPoint))
      }
      leaveElement(GG, bG, ZG) {
        "element" === GG.kind && (0, RG.o)(GG.element, bG, qb(ZG))
      }
    }
    class eb {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(GG, bG) {
        uG(GG) && (this.lastTiltedMs = bG)
      }
      allowsClick(GG) {
        return GG - this.lastTiltedMs > 150
      }
    }
    class Rb {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(GG) {
        return 0 !== (0, KG.i)(GG, .2).y
      }
      step(GG, bG, ZG) {
        GG !== this.container && (this.container = GG, this.remainder = 0);
        const wG = iG(bG, ZG).y;
        if (0 === wG) return this.remainder = 0, !1;
        const SG = this.remainder + wG,
          LG = Math.trunc(SG);
        if (this.remainder = SG - LG, 0 === LG) return !1;
        const yG = GG.scrollTop;
        return GG.scrollTop = yG + LG, GG.scrollTop !== yG
      }
      current() {
        var GG;
        return null !== (GG = this.container) && void 0 !== GG && GG.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Tb = ZG(8736);
    const Hb = "[data-pad-inventory-default]",
      tb = ".HotBarGameItemsContainer .InvenItem.Selected",
      Db = {
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
      Nb = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Ob = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      xb = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Bb = [...Ob, ...xb],
      GZ = () => {
        return GG = (0, VG.j)("inventory"), !Bb.map(VG.j).includes(GG) && !(0, KG.B)(GG);
        var GG
      },
      bZ = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ZZ = (GG, bG) => {
        const ZG = !(null === bG || void 0 === bG || !bG.isHolding());
        return function(GG, bG) {
          const ZG = GG.find((GG => GG.visible && bG(GG)));
          if (ZG) return ZG;
          for (var wG = arguments.length, SG = new Array(wG > 2 ? wG - 2 : 0), LG = 2; LG < wG; LG++) SG[LG - 2] = arguments[LG];
          for (const yG of SG) {
            const bG = zb(GG.filter(yG));
            if (bG) return bG
          }
          return zb(GG)
        }(GG, (GG => {
          const {
            element: bG
          } = GG;
          return bG.matches(Hb) || null !== bG.querySelector(Hb) || bG.matches(tb)
        }), (GG => "slot" === GG.kind ? ZG || null !== GG.idx && !(null === bG || void 0 === bG || !bG.hasItemAt(GG.idx)) : "recipe" === GG.kind || "pending" === GG.kind), (GG => "slot" === GG.kind || "button" === GG.kind))
      };
    class wZ {
      constructor() {
        this.set = null, this.observer = new MutationObserver((GG => {
          GG.some((GG => !jb(GG.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = GG => {
          this.scrolled(GG.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const GG = [],
              bG = [];
            let ZG = !1;
            const wG = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              SG = new Map,
              LG = new BG(bG);
            for (const pG of document.querySelectorAll(ob)) {
              const VG = ab(pG);
              ZG ||= null !== pG.querySelector(".CreativeCategoryTab");
              for (const ZG of pG.querySelectorAll(`${Xb}:first-child`)) {
                const yG = ZG.parentElement;
                lb(yG, pG, cb(VG, yG), wG, GG, bG, LG, SG)
              }
              for (const ZG of pG.querySelectorAll(ub)) {
                var yG, kG, UG, YG;
                if (ZG.closest(Xb) || ZG.closest("[data-pad-ignore]")) continue;
                const fG = null === (yG = ZG.parentElement) || void 0 === yG ? void 0 : yG.closest(ub);
                if (fG && pG.contains(fG)) continue;
                const QG = Wb(ZG),
                  KG = mb(ZG, QG);
                if (-1 === KG) continue;
                const hG = wb(ZG.getBoundingClientRect());
                bG.push({
                  element: ZG,
                  rect: hG
                });
                const dG = LG.findForParent(ZG.parentElement, pG),
                  JG = dG && !SG.has(dG.container) ? dG : null;
                (JG ? Sb(hG) : Lb(hG, wG)) && GG.push({
                  key: Zb(ZG),
                  rect: hG,
                  panel: cb(VG, ZG),
                  scrollGroup: null !== (kG = null === JG || void 0 === JG ? void 0 : JG.group) && void 0 !== kG ? kG : null,
                  visible: yb(hG, wG, null === JG || void 0 === JG ? void 0 : JG.box),
                  clip: null !== (UG = null === JG || void 0 === JG ? void 0 : JG.box) && void 0 !== UG ? UG : null,
                  element: ZG,
                  kind: QG,
                  idx: KG,
                  scrollContainer: null !== (YG = null === JG || void 0 === JG ? void 0 : JG.container) && void 0 !== YG ? YG : null
                })
              }
            }
            for (const [pG, fG] of SG) fG.holdsOthers = bG.some((GG => GG.element !== pG && pG.contains(GG.element) && !GG.element.closest(Xb)));
            const VG = new Map;
            for (const pG of GG) VG.set(pG.element, pG);
            return {
              targets: GG,
              byElement: VG,
              hasCategories: ZG,
              probes: bG,
              scrollers: SG
            }
          })(), this.observer.disconnect();
          for (const GG of document.querySelectorAll(ob)) this.observer.observe(GG, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(GG) {
        !this.set || GG instanceof Element && ((GG, bG) => {
          const ZG = GG.scrollers.get(bG);
          if (!ZG || ZG.holdsOthers || bG.scrollLeft !== ZG.left) return !1;
          const wG = bG.scrollTop - ZG.top;
          if (0 === wG) return !0;
          ZG.top = bG.scrollTop;
          for (const SG of ZG.probes) SG.rect.top -= wG;
          for (const SG of ZG.targets) SG.rect.top -= wG, SG.visible = yb(SG.rect, ZG.viewport, ZG.box);
          return !0
        })(this.set, GG) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((GG => {
          return bG = GG.rect, ZG = GG.element.getBoundingClientRect(), !(bG.left === ZG.left && bG.top === ZG.top && bG.width === ZG.width && bG.height === ZG.height);
          var bG, ZG
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const SZ = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(KG.z.map((GG => [GG, (0, hG.d)(KG.A)]))), this.stickRepeat = new KG.d((0, hG.d)(KG.cb)), this.pageUpTimer = (0, hG.d)(KG.Y), this.pageDownTimer = (0, hG.d)(KG.Y), this.stickGate = new oG, this.pointer = null, this.activePress = null, this.dropLatch = new Mb, this.scroller = new Rb, this.scrollStickClick = new eb, this.hover = new gb, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new gG, this.targets = new wZ, this.hasCategories = !1, this.wasShowing = !1, this.state = Ab.d, this.isActive = () => (0, OG.i)(), this.isShowing = () => "inventory" === pG.b.getActiveConsumerName() && (0, QG.l)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, OG.e)()), (0, OG.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var GG;
            this.reopenSlotIdx = null !== (GG = this.focused ? vb(this.focused).idx : null) && void 0 !== GG ? GG : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, OG.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = GG => {
            (0, kG.unstable_batchedUpdates)((() => {
              this.frame(GG)
            }))
          }, this.shouldBlockRealPointer = GG => GG.isTrusted && !(0, JG.r)(GG) && this.isShowing(), this.noteRealPointer = GG => {
            GG instanceof MouseEvent && GG.isTrusted && !(0, JG.r)(GG) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = GG.clientX, this.lastRealPointer.y = GG.clientY)
          }, this.wakePressActs = GG => {
            var bG;
            return GG === (0, VG.j)("inventoryClose") ? !(null !== (bG = (0, OG.e)()) && void 0 !== bG && bG.isHolding()) : !(GG !== (0, VG.j)("inventory") || !GZ()) || ((0, KG.B)(GG) ? this.isNavButton(GG) : xb.some((bG => (0, VG.j)(bG) === GG)))
          }
        }
        frame(GG) {
          var bG, ZG, wG, SG, LG;
          const yG = (0, OG.e)();
          if (!(0, QG.l)()) return void(this.wasShowing && (this.endInteraction(yG), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), GG.wokeDevice && this.focusWakePointer(!(null === yG || void 0 === yG || !yG.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, fG.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const kG = performance.now();
          this.handleNavigation(GG, kG), this.handlePanels(GG), this.handlePaging(GG, kG), this.handleScroll(GG), this.handleButtons(GG, kG, yG), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const UG = this.ensureFocus(),
            YG = this.focusContext(yG);
          this.ring.show(UG);
          const pG = "slot" === YG.kind ? YG.idx : null,
            KG = null !== (bG = null === (ZG = YG.actionElement) || void 0 === ZG ? void 0 : ZG.querySelector(".DoCraftItem")) && void 0 !== bG ? bG : YG.actionElement;
          this.pointer ? (this.hover.sync(yG, pG, KG, ((GG, bG) => {
            const ZG = bG ? nb() : 0;
            return {
              clientX: GG.x - ZG,
              clientY: GG.y - ZG
            }
          })(this.pointer, YG.holding), YG.holding), HG.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: GG.isHeld((0, VG.j)("inventoryPrimary"))
          })) : UG && this.focused && this.hover.sync(yG, pG, KG, ((GG, bG) => {
            if (!bG) return {
              clientX: GG.left + GG.width - 10,
              clientY: GG.top + GG.height / 2 - 10
            };
            const ZG = nb();
            return {
              clientX: GG.left + GG.width / 2 - ZG,
              clientY: GG.top + GG.height / 2 - ZG
            }
          })(UG, YG.holding), YG.holding), this.publishState({
            showing: !0,
            kind: YG.kind,
            holding: YG.holding,
            slotHasItem: YG.slotHasItem,
            pressHints: null !== (wG = null === (SG = YG.press) || void 0 === SG ? void 0 : SG.hints) && void 0 !== wG ? wG : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Pb(this.focusTarget),
            openButtonCloses: GZ(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === YG.kind && !(null === (LG = YG.actionElement) || void 0 === LG || !LG.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(GG) {
          var bG;
          const ZG = (0, QG.d)();
          if (!ZG) return;
          this.targets.revalidate();
          const wG = this.getTargets().targets;
          this.setFocus(null !== (bG = rb(ZG, wG)) && void 0 !== bG ? bG : GG ? hb(ZG, wG, (GG => {
            let {
              rect: bG
            } = GG;
            const wG = Math.max(bG.left - ZG.x, 0, ZG.x - (bG.left + bG.width)),
              SG = Math.max(bG.top - ZG.y, 0, ZG.y - (bG.top + bG.height));
            return Math.hypot(wG, SG) <= Math.min(bG.width, bG.height) / 2
          })) : null, !1), "cursor" === (0, fG.i)().inventoryNavigation && (this.pointer = {
            x: ZG.x,
            y: ZG.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const GG = this.lastRealPointer;
          if (!GG || "keyboardMouse" !== UG.e.get("activeInputDevice")) return;
          const bG = document.elementFromPoint(GG.x, GG.y);
          bG && (0, RG.o)(null, bG, GG)
        }
        endInteraction(GG) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const bG of this.dpadTimers.values()) bG.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(GG), this.ring.hide(), this.releasePointer(), this.publishState(Ab.d)
        }
        getTargets() {
          const GG = this.targets.get();
          return this.hasCategories = GG.hasCategories, GG
        }
        currentTarget() {
          var GG;
          return this.focused && null !== (GG = this.getTargets().byElement.get(this.focused)) && void 0 !== GG ? GG : null
        }
        readFocusRect() {
          const GG = this.focused;
          if (null === GG || void 0 === GG || !GG.isConnected || !GG.closest(ob)) return null;
          const bG = GG.getBoundingClientRect();
          return bG.width > 0 && bG.height > 0 ? {
            left: bG.left,
            top: bG.top,
            width: bG.width,
            height: bG.height
          } : null
        }
        ensureFocus() {
          const GG = this.readFocusRect();
          if (GG || this.pointer) return GG;
          const {
            targets: bG,
            byElement: ZG
          } = this.getTargets();
          let wG = null,
            SG = !1;
          if (this.lastRect) wG = hb(kb(this.lastRect), bG);
          else {
            var LG, yG;
            const GG = ((GG, bG) => {
                const ZG = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ZG ? ZZ(GG.filter((GG => ZG.contains(GG.element))), bG) : null
              })(bG, (0, OG.e)()),
              kG = bG.find((GG => null !== GG.idx && GG.idx === this.reopenSlotIdx)),
              UG = document.querySelector(tb);
            SG = null !== GG || void 0 !== kG, wG = null !== (LG = null !== (yG = null !== GG && void 0 !== GG ? GG : kG) && void 0 !== yG ? yG : UG && ZG.get(UG)) && void 0 !== LG ? LG : zb(bG)
          }
          return this.setFocus(wG, SG), this.lastRect
        }
        setFocus(GG) {
          let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          GG && (this.focused = GG.element, this.focusTarget = GG, this.panelMemory.set(GG.panel, GG.element), bG && GG.scrollContainer && ((GG, bG) => {
            const ZG = GG.getBoundingClientRect(),
              wG = lG(bG),
              SG = bG.scrollTop;
            return ZG.top < wG.top ? bG.scrollTop -= wG.top - ZG.top : ZG.bottom > wG.bottom && (bG.scrollTop += ZG.bottom - wG.bottom), bG.scrollTop !== SG
          })(GG.element, GG.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, fG.i)().inventoryNavigation) {
              if (this.lastRect) {
                const GG = kb(this.lastRect);
                this.pointer = {
                  x: GG.x,
                  y: GG.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const GG = this.lastRect ? kb(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: GG.x,
            y: GG.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, HG.hide()
        }
        hoverAtPointer() {
          var GG;
          const bG = rb(this.pointer, this.getTargets().targets);
          this.focusTarget = bG, (null === bG || void 0 === bG ? void 0 : bG.element) !== this.focused && (this.focused = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.element) && void 0 !== GG ? GG : null, bG && (this.panelMemory.set(bG.panel, bG.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(GG, bG) {
          const ZG = this.focusTarget,
            wG = ZG && (0, fG.i)().cursorMagnetism ? kb(db(ZG)) : null;
          this.pointer = XG(this.pointer, {
            stick: GG.leftStick,
            moveDeadzone: (0, fG.i)().moveDeadzone,
            dpad: bG,
            dtMs: GG.dtMs,
            cursorSpeedPercent: (0, fG.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: wG
            }
          })
        }
        move(GG) {
          this.targets.revalidate();
          const bG = this.currentTarget();
          bG && this.setFocus(Kb(bG, this.getTargets().targets, GG))
        }
        step(GG) {
          const bG = this.pointer;
          if (bG && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((GG, bG, ZG) => {
            var wG;
            const SG = {
              key: "",
              rect: {
                left: GG.x,
                top: GG.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (wG = Kb(SG, bG, ZG)) && void 0 !== wG ? wG : hb(GG, bG)
          })(bG, this.getTargets().targets, GG));
          this.move(GG)
        }
        isNavButton(GG) {
          return !Ob.some((bG => (0, VG.j)(bG) === GG)) && !(GG === (0, VG.j)("inventory") && GZ())
        }
        handleNavigation(GG, bG) {
          const ZG = (0, fG.i)().inventoryNavigation,
            wG = {
              x: 0,
              y: 0
            };
          let SG = null;
          for (const UG of KG.z) {
            const LG = this.isNavButton(UG) && GG.isHeld(UG);
            LG && (wG.x += Db[UG].x, wG.y += Db[UG].y), this.dpadTimers.get(UG).update(LG, bG) && "cursor" !== ZG && (SG ??= UG)
          }
          const LG = this.stickGate.update(GG.leftStick, (0, fG.i)().moveDeadzone);
          if (SG && (this.step(SG), this.stickGate.lock()), "slot" !== ZG) {
            const bG = ((GG, bG, ZG, wG) => "hybrid" !== GG ? "cursor" === GG : !wG && (bG || ZG))(ZG, null !== this.pointer, LG, null !== SG);
            return bG && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(GG, "cursor" === ZG ? wG : {
              x: 0,
              y: 0
            }))
          }
          const yG = (0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone),
            kG = this.stickRepeat.update(LG ? (0, KG.gb)(yG) : null, bG);
          kG && this.move(kG)
        }
        applyCategoryPlace() {
          const GG = this.placeAfterCategory;
          if (!GG) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const bG = hb(kb(GG.rect), this.getTargets().targets, (bG => bG.scrollGroup === GG.scrollGroup));
          this.setFocus(bG, !1)
        }
        applyFocusRequest() {
          const GG = (0, OG.t)();
          GG && (this.targets.invalidate(), this.setFocus((0, OG.c)(this.getTargets().targets, GG)))
        }
        handlePanels(GG) {
          var bG, ZG, wG;
          const SG = GG.wasPressed((0, VG.j)("inventoryPanelPrevious")),
            LG = GG.wasPressed((0, VG.j)("inventoryPanelNext"));
          if (!SG && !LG) return;
          const {
            targets: yG
          } = this.getTargets(), kG = (UG = ((GG, bG) => {
            const ZG = [];
            for (const SG of GG) SG.visible && !ZG.includes(SG.panel) && ZG.push(SG.panel);
            const wG = GG => {
              const wG = bG.indexOf(GG);
              return -1 === wG ? bG.length + ZG.indexOf(GG) : wG
            };
            return ZG.sort(((GG, bG) => wG(GG) - wG(bG)))
          })(yG, Cb), YG = null !== (bG = null === (ZG = this.focusTarget) || void 0 === ZG ? void 0 : ZG.panel) && void 0 !== bG ? bG : null, pG = LG ? 1 : -1, 0 === UG.length ? null : UG[Ub(null === YG ? -1 : UG.indexOf(YG), UG.length, pG)]);
          var UG, YG, pG;
          if (null === kG) return;
          const fG = this.panelMemory.get(kG),
            QG = yG.filter((GG => GG.panel === kG)),
            KG = null !== (wG = QG.find((GG => GG.element === fG && GG.visible))) && void 0 !== wG ? wG : ZZ(QG, (0, OG.e)());
          this.setFocus(KG)
        }
        handlePaging(GG, bG) {
          const ZG = (0, VG.j)("menuPageUp"),
            wG = (0, VG.j)("menuPageDown"),
            SG = this.pageUpTimer.update(GG.isHeld(ZG), bG),
            LG = this.pageDownTimer.update(GG.isHeld(wG), bG);
          if (!SG && !LG) return;
          const yG = LG ? 1 : -1;
          if (!GG.wasPressed(LG ? wG : ZG) && this.hasCategories) return;
          if ((GG => {
              const bG = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === bG.length) return !1;
              const ZG = bG.findIndex((GG => GG.classList.contains("Selected"))),
                wG = bG[Ub(ZG, bG.length, GG)];
              return (0, RG.n)(wG, (0, RG.y)(wG)), !0
            })(yG)) {
            var kG, UG;
            this.targets.invalidate();
            const GG = null !== (kG = null === (UG = this.focusTarget) || void 0 === UG ? void 0 : UG.scrollGroup) && void 0 !== kG ? kG : null,
              bG = this.readFocusRect();
            return void(this.placeAfterCategory = null !== GG && bG && !this.pointer ? {
              rect: bG,
              scrollGroup: GG
            } : null)
          }
          const {
            targets: YG
          } = this.getTargets(), pG = this.currentTarget(), fG = pG && Pb(pG) ? pG : YG.find((GG => Pb(GG) && GG.visible));
          if (!fG) return;
          const QG = ((GG, bG, ZG, wG) => {
            if (null === GG.scrollGroup) return null;
            const SG = kb(GG.rect),
              LG = SG.x,
              yG = SG.y + ("Down" === ZG ? wG : -wG);
            let kG = null,
              UG = 1 / 0;
            for (const YG of bG) {
              if (YG.scrollGroup !== GG.scrollGroup || YG.key === GG.key) continue;
              const bG = kb(YG.rect);
              if ("Down" === ZG ? bG.y <= SG.y : bG.y >= SG.y) continue;
              const wG = Math.hypot(bG.x - LG, bG.y - yG);
              wG < UG && (kG = YG, UG = wG)
            }
            return kG
          })(fG, YG, yG > 0 ? "Down" : "Up", fG.scrollContainer.clientHeight);
          this.setFocus(null !== QG && void 0 !== QG ? QG : fG)
        }
        handleScroll(GG) {
          var bG, ZG, wG, SG, LG, yG;
          if (!this.scroller.isScrolling(GG.rightStick)) return void this.scroller.reset();
          const {
            targets: kG
          } = this.getTargets(), UG = this.pointer, YG = !UG && this.focusTarget && Pb(this.focusTarget) ? this.focusTarget.scrollContainer : null, VG = UG && (null === (bG = kG.find((GG => GG.clip && Jb(GG.clip, UG)))) || void 0 === bG ? void 0 : bG.scrollContainer), pG = null !== (ZG = null !== (wG = null !== (SG = this.scroller.current()) && void 0 !== SG ? SG : VG) && void 0 !== wG ? wG : YG) && void 0 !== ZG ? ZG : null === (LG = kG.find(Pb)) || void 0 === LG ? void 0 : LG.scrollContainer;
          if (!pG || !this.scroller.step(pG, GG.rightStick, GG.dtMs)) return;
          this.targets.scrolled(pG);
          const fG = UG || (null === (yG = this.focusTarget) || void 0 === yG ? void 0 : yG.scrollContainer) !== pG ? null : this.readFocusRect();
          if (!fG) return;
          const QG = lG(pG),
            KG = kb(fG);
          if (KG.y < QG.top || KG.y > QG.bottom) {
            const GG = this.focusTarget.scrollGroup,
              bG = hb(KG, this.getTargets().targets, (bG => bG.scrollGroup === GG));
            this.setFocus(bG, !1)
          }
        }
        focusContext(GG) {
          const {
            kind: bG,
            idx: ZG
          } = this.focused ? vb(this.focused) : {
            kind: null,
            idx: null
          }, wG = this.focused ? Ib(this.focused) : null, SG = wG ? (0, Tb.e)(wG) : null;
          return {
            kind: bG,
            idx: ZG,
            actionElement: wG,
            press: SG,
            hasPress: null !== SG,
            hasBack: !(null === SG || void 0 === SG || !SG.back),
            holding: GG.isHolding(),
            slotHasItem: null !== ZG && GG.hasItemAt(ZG)
          }
        }
        handleButtons(GG, bG, ZG) {
          var wG, SG;
          if (!this.activePress || GG.isHeld(this.activePress.button) && (wG = this.activePress.target, SG = this.focused, null !== wG.recipe ? Fb(SG).recipe === wG.recipe : SG === wG.element) || this.releasePress(), this.scrollStickClick.update(GG.rightStick, bG), !this.handleHotbarPick(GG, ZG)) {
            for (const [wG, SG] of Nb) {
              const LG = (0, VG.j)(SG);
              if (!GG.wasPressed(LG) || "openButton" === wG && !GZ()) continue;
              if ("RS" === LG && !this.scrollStickClick.allowsClick(bG)) continue;
              const yG = this.focusContext(ZG),
                kG = DG(wG, yG);
              kG && this.runIntent(kG, yG, LG, ZG)
            }
            this.handleDrop(GG, bG, ZG)
          }
        }
        handleHotbarPick(GG, bG) {
          const ZG = this.hotbarPick;
          if (!ZG) return !1;
          const wG = GG.wasPressed((0, VG.j)("inventoryPrimary")) || GG.wasPressed((0, VG.j)("inventoryHotbarSwap"));
          if (!wG && !GG.wasPressed((0, VG.j)("inventoryClose")) && !bG.isHolding()) return !(GG.wasPressed((0, VG.j)("inventory")) && GZ());
          const SG = this.focusTarget;
          wG && "hotbar" === (null === SG || void 0 === SG ? void 0 : SG.panel) && null !== SG.idx && SG.idx !== ZG.idx && (bG.swapWithHotbar(SG.idx, ZG.idx), this.afterAction()), this.hotbarPick = null;
          const LG = ZG.element.isConnected ? this.getTargets().byElement.get(ZG.element) : void 0;
          return LG && this.setFocus(LG), !0
        }
        startHotbarPick(GG) {
          var bG;
          const {
            targets: ZG,
            byElement: wG
          } = this.getTargets(), SG = document.querySelector(tb), LG = null !== (bG = SG && wG.get(SG)) && void 0 !== bG ? bG : ZG.find((GG => "hotbar" === GG.panel));
          LG && this.focused && (this.hotbarPick = {
            idx: GG,
            element: this.focused
          }, this.setFocus(LG))
        }
        focusKey() {
          return this.focused ? Zb(this.focused) : null
        }
        handleDrop(GG, bG, ZG) {
          const wG = (0, VG.j)("inventoryDrop");
          if (GG.wasPressed(wG)) {
            const GG = (SG = this.focusContext(ZG)).holding ? {
              kind: "Ik"
            } : "slot" === SG.kind && SG.slotHasItem && null !== SG.idx ? {
              kind: "slot",
              idx: SG.idx
            } : null;
            return void(GG && (this.dropFrom(GG, !1, ZG), this.dropLatch.press(GG, this.focusKey(), bG, dG.e[(0, fG.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var SG;
          const LG = this.dropLatch.update(GG.isHeld(wG), this.focusKey(), bG);
          LG && ((GG, bG, ZG) => "Ik" === GG.kind ? bG : !bG && ZG(GG.idx))(LG, ZG.isHolding(), ZG.hasItemAt) && (this.dropFrom(LG, !0, ZG), this.afterAction())
        }
        dropFrom(GG, bG, ZG) {
          "Ik" === GG.kind ? ZG.dropHeld(bG, this.slotPoint()) : ZG.dropSlot(GG.idx, bG)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (GG => {
            const bG = kb(GG);
            return {
              clientX: bG.x,
              clientY: bG.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(GG, bG, ZG, wG) {
          const SG = bG.idx,
            LG = bG.actionElement;
          switch (LG && bZ.has(GG) && (0, JG.w)(LG), GG) {
            case "slotPrimary":
              wG.primary(SG, this.slotPoint());
              break;
            case "slotSecondary":
              wG.secondary(SG, this.slotPoint());
              break;
            case "slotQuickMove":
              wG.quickMove(SG, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(SG);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(bG.press, "pressPrimary" === GG ? "primary" : "secondary", ZG);
              break;
            case "click":
              (0, RG.n)(LG, (0, RG.y)(LG));
              break;
            case "openKeyboard":
              (0, RG.L)(LG) && (0, RG.J)(LG);
              break;
            case "pressBack":
              bG.press.back();
              break;
            case "cancel":
              wG.cancel();
              break;
            case "close":
              return this.releasePress(), void wG.close()
          }
          this.afterAction()
        }
        startPress(GG, bG, ZG) {
          this.releasePress(), GG.press(bG) && (this.activePress = {
            handlers: GG,
            button: ZG,
            target: Fb(this.focused)
          })
        }
        releasePress() {
          var GG, bG, ZG;
          null === (GG = this.activePress) || void 0 === GG || null === (bG = (ZG = GG.handlers).release) || void 0 === bG || bG.call(ZG), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(GG) {
          ((GG, bG) => {
            var ZG, wG, SG, LG, yG, kG;
            return GG.showing === bG.showing && GG.kind === bG.kind && GG.holding === bG.holding && GG.slotHasItem === bG.slotHasItem && (null === (ZG = GG.pressHints) || void 0 === ZG ? void 0 : ZG.primary) === (null === (wG = bG.pressHints) || void 0 === wG ? void 0 : wG.primary) && (null === (SG = GG.pressHints) || void 0 === SG ? void 0 : SG.secondary) === (null === (LG = bG.pressHints) || void 0 === LG ? void 0 : LG.secondary) && (null === (yG = GG.pressHints) || void 0 === yG ? void 0 : yG.back) === (null === (kG = bG.pressHints) || void 0 === kG ? void 0 : kG.back) && GG.hasCategories === bG.hasCategories && GG.hasList === bG.hasList && GG.openButtonCloses === bG.openButtonCloses && GG.steppingSlots === bG.steppingSlots && GG.hotbarPicking === bG.hotbarPicking && GG.quickMoveToHotbar === bG.quickMoveToHotbar && GG.dropStackHold === bG.dropStackHold
          })(GG, this.state) || (this.state = GG, YG.l.xh(Ab.h, GG))
        }
      },
      LZ = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var yZ = ZG(8740),
      kZ = ZG(333),
      UZ = ZG(1579),
      YZ = ZG(8218);
    const VZ = "[data-pad-secondary]",
      pZ = GG => GG instanceof HTMLElement && (0, xG.n)(GG) && !(0, xG.s)(GG),
      fZ = GG => {
        const bG = GG.querySelector(VZ);
        if (bG && pZ(bG)) return bG;
        for (const SG of null !== (ZG = null === (wG = GG.parentElement) || void 0 === wG ? void 0 : wG.children) && void 0 !== ZG ? ZG : []) {
          var ZG, wG;
          if (SG !== GG && SG.matches(VZ) && pZ(SG)) return SG
        }
        return null
      },
      QZ = (GG, bG, ZG, wG) => Math.max(0, Math.max(GG, ZG) - Math.min(bG, wG)),
      KZ = (GG, bG, ZG, wG) => Math.max(0, Math.min(bG, wG) - Math.max(GG, ZG)),
      hZ = (GG, bG, ZG) => {
        const wG = (GG.left + GG.right) / 2,
          SG = (GG.top + GG.bottom) / 2,
          LG = (bG.left + bG.right) / 2,
          yG = (bG.top + bG.bottom) / 2;
        if ("Left" === ZG || "Right" === ZG) {
          const kG = "Right" === ZG ? 1 : -1;
          return {
            forwardGap: "Right" === ZG ? bG.left - GG.right : GG.left - bG.right,
            centreForward: (LG - wG) * kG,
            sidewaysGap: QZ(GG.top, GG.bottom, bG.top, bG.bottom),
            sidewaysOverlap: KZ(GG.top, GG.bottom, bG.top, bG.bottom),
            centreSideways: Math.abs(yG - SG),
            startSideways: Math.abs(bG.top - GG.top),
            fromSidewaysSize: GG.bottom - GG.top,
            toSidewaysSize: bG.bottom - bG.top,
            toLength: bG.right - bG.left
          }
        }
        const kG = "Down" === ZG ? 1 : -1;
        return {
          forwardGap: "Down" === ZG ? bG.top - GG.bottom : GG.top - bG.bottom,
          centreForward: (yG - SG) * kG,
          sidewaysGap: QZ(GG.left, GG.right, bG.left, bG.right),
          sidewaysOverlap: KZ(GG.left, GG.right, bG.left, bG.right),
          centreSideways: Math.abs(LG - wG),
          startSideways: Math.abs(bG.left - GG.left),
          fromSidewaysSize: GG.right - GG.left,
          toSidewaysSize: bG.right - bG.left,
          toLength: bG.bottom - bG.top
        }
      },
      dZ = GG => GG.centreForward > .5 && GG.forwardGap >= -GG.toLength / 2,
      JZ = GG => {
        const bG = GG.sidewaysOverlap > 0 ? 0 : 2 * GG.fromSidewaysSize,
          ZG = GG.fromSidewaysSize > 1.5 * GG.toSidewaysSize ? GG.startSideways : GG.centreSideways;
        return Math.max(0, GG.forwardGap) + 3 * GG.sidewaysGap + bG + .1 * ZG
      },
      rZ = (GG, bG) => KZ(GG.top, GG.bottom, bG.top, bG.bottom) > 0 || bG.bottom - bG.top > bG.right - bG.left,
      zZ = (GG, bG, ZG, wG, SG, LG) => {
        const yG = SG ? oZ(GG, bG, ZG, SG) : new Set,
          kG = uZ(GG, bG, ZG, yG);
        return kG < 0 && yG.size > 0 && LG ? EZ(GG, bG, ZG, LG) : wG && kG >= 0 ? XZ(GG, bG, ZG, wG, kG, yG) : kG
      },
      EZ = (GG, bG, ZG, wG) => {
        const SG = new Set,
          LG = uZ(GG, bG, "Up", SG) >= 0,
          yG = uZ(GG, bG, "Down", SG) >= 0,
          kG = new Set;
        return bG.forEach(((bG, ZG) => {
          const SG = bG.top + bG.bottom < GG.top + GG.bottom;
          wG[ZG] && !(SG ? LG : yG) || kG.add(ZG)
        })), uZ(GG, bG, ZG, kG)
      },
      oZ = (GG, bG, ZG, wG) => {
        const SG = new Set;
        return "Left" !== ZG && "Right" !== ZG || bG.forEach(((bG, ZG) => {
          wG[ZG] && KZ(GG.top, GG.bottom, bG.top, bG.bottom) <= 0 && SG.add(ZG)
        })), SG
      },
      XZ = (GG, bG, ZG, wG, SG, LG) => {
        const yG = hZ(GG, bG[SG], ZG).forwardGap;
        let kG = SG,
          UG = wG[SG],
          YG = 1 / 0;
        return bG.forEach(((bG, VG) => {
          const pG = wG[VG];
          if (LG.has(VG) || pG < UG || pG === UG && kG === SG) return;
          const fG = hZ(GG, bG, ZG);
          if (!dZ(fG) || fG.forwardGap < 0 || fG.forwardGap >= yG) return;
          const QG = JZ(fG);
          (pG > UG || QG < YG) && (kG = VG, UG = pG, YG = QG)
        })), kG
      },
      uZ = (GG, bG, ZG, wG) => {
        let SG = -1,
          LG = 1 / 0;
        if (bG.forEach(((bG, yG) => {
            const kG = ((GG, bG, ZG) => {
              const wG = hZ(GG, bG, ZG);
              if (!dZ(wG)) return null;
              const SG = Math.max(0, wG.forwardGap);
              return wG.sidewaysOverlap <= 0 && wG.sidewaysGap > 2 * (SG + 1) ? null : JZ(wG)
            })(GG, bG, ZG);
            null !== kG && kG < LG && !wG.has(yG) && (LG = kG, SG = yG)
          })), SG < 0) return -1;
        const yG = bG[SG],
          kG = hZ(GG, yG, ZG).forwardGap;
        let UG = kG,
          YG = SG;
        return bG.forEach(((bG, LG) => {
          if (LG === SG || wG.has(LG) || !((GG, bG, ZG) => {
              const wG = "Left" === ZG || "Right" === ZG,
                SG = wG ? KZ(GG.top, GG.bottom, bG.top, bG.bottom) : KZ(GG.left, GG.right, bG.left, bG.right),
                LG = wG ? Math.min(GG.bottom - GG.top, bG.bottom - bG.top) : Math.min(GG.right - GG.left, bG.right - bG.left);
              return SG > 0 && SG >= LG / 2
            })(bG, yG, ZG)) return;
          const VG = hZ(GG, bG, ZG);
          dZ(VG) && VG.forwardGap + VG.toLength <= kG + 1 && VG.forwardGap < UG && (UG = VG.forwardGap, YG = LG)
        })), YG
      },
      iZ = (GG, bG) => {
        let ZG = -1,
          wG = 1 / 0;
        return bG.forEach(((bG, SG) => {
          const LG = Math.max(bG.left - GG.x, 0, GG.x - bG.right),
            yG = Math.max(bG.top - GG.y, 0, GG.y - bG.bottom),
            kG = Math.hypot(LG, yG);
          kG < wG && (wG = kG, ZG = SG)
        })), ZG
      },
      CZ = (GG, bG) => {
        const ZG = Math.min(GG.bottom - GG.top, bG.bottom - bG.top) / 2;
        return Math.abs(GG.top - bG.top) > ZG ? GG.top - bG.top : GG.left - bG.left
      },
      WZ = GG => {
        let bG = -1;
        for (let ZG = 0; ZG < GG.length; ZG++)(bG < 0 || CZ(GG[ZG], GG[bG]) < 0) && (bG = ZG);
        return bG
      };
    var mZ = ZG(1626),
      IZ = ZG(8742),
      FZ = ZG(8750);
    const vZ = GG => {
        if ("death" !== GG || "inGame" !== UG.e.get("gameState") || "off" === (0, fG.i)().quickChat || null === (0, mZ.b)()) return !1;
        const bG = (0, VG.j)("chat");
        return bG !== (0, VG.j)("menuConfirm") && bG !== (0, VG.j)("menuBack")
      },
      aZ = new IZ.c;
    var cZ = ZG(4298),
      lZ = ZG(8759),
      jZ = ZG(8764);
    const PZ = GG => {
        let bG = null;
        for (const ZG of GG.querySelectorAll("[data-pad-tabs]"))(0, xG.n)(ZG) && (!bG || Number(ZG.dataset.padTabs) < Number(bG.dataset.padTabs)) && (bG = ZG);
        return bG
      },
      MZ = (GG, bG, ZG, wG) => {
        GG.focusWhenFound((() => {
          const SG = GG.pickInitial(bG);
          if (SG && !ZG.has(SG) && (null === wG || void 0 === wG || !wG.contains(SG))) return SG;
          const LG = ((GG, bG) => {
              const ZG = bG => GG.getEnabledCandidates(bG).filter((GG => !GG.closest("[data-pad-tabs]")));
              for (const wG of (0, xG.f)(bG)) {
                const GG = ZG(wG);
                if (GG.length > 0) return GG
              }
              return ZG(bG)
            })(GG, bG).filter((GG => !ZG.has(GG))),
            yG = WZ(LG.map((GG => GG.getBoundingClientRect())));
          return yG >= 0 ? LG[yG] : null
        }), 3e3)
      },
      AZ = (GG, bG, ZG, wG) => {
        var SG;
        const LG = ((GG, bG) => {
          if (0 === GG.length) return null;
          const ZG = GG.findIndex((GG => "true" === GG.dataset.padSelected));
          return ZG < 0 ? bG > 0 ? GG[0] : GG[GG.length - 1] : GG[(ZG + bG + GG.length) % GG.length]
        })([...ZG.querySelectorAll("[data-pad-tab]")].filter((GG => (0, xG.n)(GG) && !(0, xG.s)(GG))), wG);
        if (!LG) return;
        const yG = null !== (SG = null === GG || void 0 === GG ? void 0 : GG.getFocused()) && void 0 !== SG ? SG : null,
          kG = !(null === yG || void 0 === yG || !yG.isConnected) && ZG.contains(yG),
          UG = GG && !kG ? new Set(GG.getEnabledCandidates(bG)) : null;
        (0, RG.e)(LG), GG && (UG ? MZ(GG, bG, UG, ZG) : GG.setFocus(LG, {
          byUser: !0
        }))
      },
      sZ = GG => {
        var bG;
        const ZG = lG(null !== (bG = mG(GG, "x")) && void 0 !== bG ? bG : GG),
          wG = (0, xG.d)(GG).filter((GG => !(0, xG.s)(GG))),
          SG = wG.filter((GG => jG(GG.getBoundingClientRect(), ZG)));
        return (SG.length > 0 ? SG : wG).sort(((GG, bG) => CZ(GG.getBoundingClientRect(), bG.getBoundingClientRect())))
      },
      qZ = (GG, bG, ZG) => {
        const wG = [...bG.querySelectorAll("[data-pad-row]")].filter(xG.n),
          SG = GG.getFocused(),
          LG = SG ? wG.findIndex((GG => GG.contains(SG))) : -1;
        let yG = 0,
          kG = ZG > 0 ? 0 : wG.length - 1;
        if (LG >= 0 && SG) yG = Math.max(0, sZ(wG[LG]).indexOf(SG)), kG = LG + ZG;
        else if (SG) {
          const GG = SG.getBoundingClientRect(),
            bG = wG.map((bG => {
              const wG = bG.getBoundingClientRect();
              return ZG > 0 ? wG.top >= GG.top : wG.bottom <= GG.bottom
            }));
          kG = ZG > 0 ? bG.indexOf(!0) : bG.lastIndexOf(!0)
        }
        for (let UG = kG; UG >= 0 && UG < wG.length; UG += ZG) {
          const bG = sZ(wG[UG]);
          if (bG.length > 0) return void GG.setFocus(bG[Math.min(yG, bG.length - 1)], {
            byUser: !0
          })
        }
      },
      nZ = (GG, bG, ZG) => {
        var wG, SG;
        const LG = null !== (wG = null === GG || void 0 === GG ? void 0 : GG.getFocused()) && void 0 !== wG ? wG : null,
          yG = null !== LG && void 0 !== LG && LG.closest("[data-pad-row]") ? "x" : "y",
          kG = null !== (SG = LG ? mG(LG, yG, bG) : null) && void 0 !== SG ? SG : FG(bG, yG);
        if (!kG) return;
        const UG = LG ? (0, RG.y)(LG) : null;
        if (cG(kG, yG, ZG * ("y" === yG ? kG.clientHeight : kG.clientWidth) * .85), !GG || !UG) return;
        const YG = lG(kG),
          VG = GG.getEnabledCandidates(bG).filter((GG => kG.contains(GG) && jG(GG.getBoundingClientRect(), YG))),
          pG = iZ(UG, VG.map((GG => GG.getBoundingClientRect())));
        pG >= 0 && GG.setFocus(VG[pG], {
          scroll: !1,
          byUser: !0
        })
      };
    let gZ = null;
    const eZ = (GG, bG) => {
        var ZG, wG;
        const SG = bG.querySelector("[data-pad-friends-column]"),
          LG = GG.getFocused();
        if (!SG || !LG || !SG.contains(LG)) return !1;
        const yG = GG.getEnabledCandidates(bG).filter((GG => !SG.contains(GG))),
          kG = iZ((0, RG.y)(LG), yG.map((GG => GG.getBoundingClientRect()))),
          UG = null === (ZG = gZ) || void 0 === ZG ? void 0 : ZG.deref();
        return GG.setFocus(null !== UG && void 0 !== UG && UG.isConnected ? UG : null !== (wG = yG[kG]) && void 0 !== wG ? wG : null, {
          byUser: !0
        }), !0
      },
      RZ = GG => {
        const bG = (0, VG.j)(GG);
        return (0, KG.B)(bG) || YZ.r.some((GG => (0, VG.j)(GG) === bG)) ? null : bG
      },
      TZ = (GG, bG) => {
        const ZG = RZ(bG);
        return null !== ZG && GG.wasPressed(ZG)
      },
      HZ = function(GG, bG, ZG) {
        let wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SG = (GG => {
            var bG, ZG;
            return null !== (bG = null === (ZG = PZ(GG)) || void 0 === ZG ? void 0 : ZG.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== bG ? bG : null
          })(bG),
          LG = GG && SG ? new Set(GG.getEnabledCandidates(bG)) : null;
        (0, yZ.e)(), ZG === kZ.u.SETTINGS && (0, UZ.m)(UG.e.get("openEverythingMenuName")) ? UG.e.set({
          openEverythingMenuName: ZG
        }) : (0, UZ.x)((0, jZ.c)("padMenuShortcut"), ZG, wG), GG && LG && SG && MZ(GG, bG, LG, SG.closest("[data-pad-tabs]"))
      },
      tZ = GG => null !== GG.closest(".Dropdown-root") || null !== GG.querySelector(".Dropdown-root.is-open"),
      DZ = GG => null !== (0, lZ.c)() && "popup" !== GG.layer.kind && !PZ(GG.root) && !tZ(GG.root),
      NZ = (0, hG.d)(KG.Y),
      OZ = (0, hG.d)(KG.Y),
      xZ = (GG, bG, ZG) => {
        if (((GG, bG) => {
            const ZG = (0, VG.j)("chat");
            return vZ(bG) && GG.isHeld(ZG) ? "hold" === aZ.update(GG.wasPressed(ZG), GG.isHeld(ZG), performance.now(), dG.e[(0, fG.i)().tapHoldTime].wheelMs) && (pG.b.consumeButton(ZG), YG.l.xh(FZ.l), !0) : (aZ.release(), !1)
          })(bG, ZG.layer.kind)) return !0;
        const wG = ZG.root;
        for (const [yG, kG] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (bG.wasPressed((0, VG.j)(yG))) {
            const bG = tZ(wG) ? null : PZ(wG);
            if (bG) AZ(GG, wG, bG, kG);
            else if (DZ(ZG)) {
              var SG;
              const bG = GG ? new Set(GG.getEnabledCandidates(wG)) : null;
              null !== (SG = (0, lZ.c)()) && void 0 !== SG && SG(kG) && GG && bG && MZ(GG, wG, bG, null)
            } else GG && qZ(GG, wG, kG);
            return !0
          } for (const [yG, kG, UG] of [
            ["menuPageUp", -1, NZ],
            ["menuPageDown", 1, OZ]
          ]) {
          const ZG = (0, VG.j)(yG);
          if (bG.wasPressed(ZG) && UG.reset(), UG.update(bG.isHeld(ZG), performance.now())) return nZ(GG, wG, kG), !0
        }
        const LG = "popup" === ZG.layer.kind;
        return TZ(bG, "pause") ? (LG || (0, UZ.u)() && "menu" !== ZG.layer.kind || HZ(GG, wG, (0, UZ.u)() ? kZ.u.SETTINGS : (0, cZ.e)()), !0) : !!TZ(bG, "leaderboard") && ("home" === ZG.layer.kind ? (GG => {
          const bG = [...GG.querySelectorAll("[data-pad-notifications]")].find(xG.n);
          bG && (0, RG.e)(bG)
        })(wG) : LG || HZ(GG, wG, kZ.u.LOBBY_LEADERBOARD, "inGame" === UG.e.get("gameState")), !0)
      },
      BZ = (GG, bG, ZG) => {
        if (xZ(GG, bG, ZG)) return !0;
        const wG = "home" === ZG.layer.kind;
        if (bG.wasPressed((0, VG.j)("menuSecondary"))) {
          const bG = GG.getFocused(),
            SG = bG ? fZ(bG) : null;
          if (SG) return (0, RG.e)(SG), !0;
          if (wG) {
            const bG = ZG.root.querySelector("[data-pad-search] input");
            return bG && (0, xG.p)(bG, ZG.root) ? (GG.setFocus(bG, {
              byUser: !0
            }), (0, RG.e)(bG)) : UG.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!wG || !TZ(bG, "inventory")) && (((GG, bG) => {
          var ZG, wG;
          const SG = bG.querySelector("[data-pad-friends-column]");
          if (!SG || !(0, xG.n)(SG)) return void(0, UZ.x)((0, jZ.c)("padMenuShortcut"), kZ.u.SOCIAL);
          if (eZ(GG, bG)) return;
          const LG = null !== (ZG = null === (wG = SG.querySelector("[data-pad-friends-start]")) || void 0 === wG ? void 0 : wG.getBoundingClientRect().top) && void 0 !== ZG ? ZG : -1 / 0,
            yG = GG.getEnabledCandidates(SG),
            kG = yG.filter((GG => GG.getBoundingClientRect().top >= LG)),
            UG = kG.length > 0 ? kG : yG,
            YG = WZ(UG.map((GG => GG.getBoundingClientRect())));
          GG.setFocus(YG >= 0 ? UG[YG] : null, {
            byUser: !0
          })
        })(GG, ZG.root), !0)
      },
      Gw = GG => {
        var bG, ZG, wG;
        const SG = (0, RG.z)(GG);
        if (null !== SG) return SG;
        const LG = (null !== (bG = null !== (ZG = null !== (wG = GG.getAttribute("aria-label")) && void 0 !== wG ? wG : GG.getAttribute("title")) && void 0 !== ZG ? ZG : GG.textContent) && void 0 !== bG ? bG : "").replace(/\s+/g, " ").trim();
        return LG ? `${GG.tagName}:${LG.slice(0,100)}` : null
      };
    class bw {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(GG) {
        const bG = this.history.indexOf(GG);
        if (bG >= 0) {
          for (const GG of this.history.splice(bG + 1)) this.remembered.delete(GG);
          return !0
        }
        return this.remembered.delete(GG), this.history.push(GG), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(GG) {
        this.remembered.delete(GG);
        const bG = this.history.indexOf(GG);
        bG >= 0 && this.history.splice(bG, 1)
      }
      remember(GG, bG, ZG, wG) {
        const SG = Gw(bG),
          LG = (0, RG.z)(bG),
          yG = null !== LG && ((GG, bG) => {
            let ZG = 0;
            for (const wG of GG.querySelectorAll("[data-pad-key], [href]"))
              if ((wG.getAttribute("data-pad-key") === bG || wG.getAttribute("href") === bG) && (ZG++, ZG > 1)) return !0;
            return !1
          })(ZG, LG) ? Math.max(0, this.twins(wG(), LG).indexOf(bG)) : 0;
        this.remembered.set(GG, {
          element: new WeakRef(bG),
          identity: SG,
          ordinal: yG
        })
      }
      has(GG) {
        return this.remembered.has(GG)
      }
      recall(GG, bG) {
        var ZG, wG;
        const SG = this.remembered.get(GG);
        if (!SG) return null;
        const LG = SG.element.deref();
        if (LG && bG.includes(LG)) return LG;
        if (null === SG.identity) return null;
        const yG = this.twins(bG, SG.identity);
        return null !== (ZG = null !== (wG = yG[SG.ordinal]) && void 0 !== wG ? wG : yG[0]) && void 0 !== ZG ? ZG : null
      }
      twins(GG, bG) {
        return GG.filter((GG => Gw(GG) === bG))
      }
    }
    var Zw = ZG(1239);
    const ww = GG => {
        const bG = [];
        let ZG = GG;
        for (; ZG && ZG !== document.body;) {
          const GG = getComputedStyle(ZG).zIndex;
          "auto" !== GG && bG.push(Number(GG) || 0), ZG = ZG.parentElement
        }
        return bG.reverse()
      },
      Sw = (GG, bG) => {
        const ZG = ((GG, bG) => {
          const ZG = Math.max(GG.length, bG.length);
          for (let LG = 0; LG < ZG; LG++) {
            var wG, SG;
            const ZG = (null !== (wG = GG[LG]) && void 0 !== wG ? wG : 0) - (null !== (SG = bG[LG]) && void 0 !== SG ? SG : 0);
            if (0 !== ZG) return ZG
          }
          return 0
        })(ww(GG), ww(bG));
        if (0 !== ZG) return ZG > 0;
        if (GG.contains(bG)) return !1;
        if (bG.contains(GG)) return !0;
        const wG = GG.compareDocumentPosition(bG);
        return !!(wG & Node.DOCUMENT_POSITION_PRECEDING) || !(wG & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Lw = (GG, bG) => {
        var ZG;
        return null !== (ZG = Sw(GG.root, bG.root)) && void 0 !== ZG ? ZG : GG.order > bG.order
      },
      yw = (GG, bG) => bG.some((bG => !bG.contains(GG) && !GG.contains(bG) && !0 === Sw(bG, GG)));
    let kw = null,
      Uw = null,
      Yw = -1;
    const Vw = () => {
        var GG;
        const bG = null === (GG = document.timeline) || void 0 === GG ? void 0 : GG.currentTime,
          ZG = "number" === typeof bG ? bG : null;
        if (null !== ZG && ZG === Uw && Yw === (0, Zw.d)()) return kw;
        let wG = null;
        const SG = [],
          LG = [...document.querySelectorAll("[data-pad-covers]")].filter(xG.n);
        for (const yG of (0, Zw.g)()) {
          const GG = yG.getRoot(),
            bG = !!GG && (0, xG.n)(GG) && !yw(GG, LG);
          if (yG.shown && !bG && SG.push(yG), yG.shown = bG, !GG || !bG) continue;
          const ZG = {
            layer: yG,
            root: GG,
            order: yG.order
          };
          wG && !Lw(ZG, wG) || (wG = ZG)
        }
        kw = wG, Uw = ZG, Yw = (0, Zw.d)();
        for (const yG of SG)(0, Zw.h)(yG);
        return kw
      },
      pw = () => {
        const GG = Vw();
        return !(null === GG || void 0 === GG || !GG.layer.close) && (GG.layer.close(), Uw = null, !0)
      },
      fw = () => {
        var GG, bG;
        return null !== (GG = null === (bG = Vw()) || void 0 === bG ? void 0 : bG.root) && void 0 !== GG ? GG : null
      },
      Qw = GG => GG ? {
        ...GG,
        root: fw()
      } : null;
    let Kw = null,
      hw = null,
      dw = (0, fG.i)().menuNavigation,
      Jw = null;
    const rw = new oG;
    let zw = null;
    YG.l.subscribe(fG.h, (() => {
      const GG = (0, fG.i)().menuNavigation;
      GG !== dw && (dw = GG, Kw = null, hw = null)
    }));
    const Ew = () => {
        var GG;
        return null !== (GG = Kw) && void 0 !== GG ? GG : (0, fG.i)().menuNavigation
      },
      ow = GG => {
        if (Cw()) {
          if (Jw = Qw(GG), "hybrid" === Ew()) return rw.lock(), void(hw = hw ? null : fw());
          Kw = "focus" === Ew() ? "cursor" : "focus"
        }
      },
      Xw = () => {
        const GG = Jw;
        return Jw = null, GG
      };
    let uw = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const iw = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZG = uw.root === GG,
          wG = ZG ? uw.firstSeenMs : bG,
          SG = uw.has || bG - wG > 1e3;
        return (!ZG || !SG || bG - uw.atMs > 250) && (uw = {
          root: GG,
          firstSeenMs: wG,
          atMs: bG,
          has: (0, xG.j)(GG)
        }), uw.has
      },
      Cw = () => {
        const GG = fw();
        return null !== GG && iw(GG)
      },
      Ww = () => {
        const GG = Vw();
        return hw && (null === GG || void 0 === GG ? void 0 : GG.root) !== hw && (hw = null), (GG => {
          let {
            mode: bG,
            hasLayer: ZG,
            hasCandidates: wG,
            hybridCursorEngaged: SG
          } = GG;
          return ZG ? "cursor" !== bG && wG() ? "hybrid" === bG && SG ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Ew(),
          hasLayer: null !== GG,
          hasCandidates: () => null !== GG && iw(GG.root),
          hybridCursorEngaged: null !== hw
        })
      },
      mw = () => "hybrid" === Ew() && Cw(),
      Iw = "pad-focused";
    var Fw = ZG(4564),
      vw = ZG(5042);
    const aw = "[data-pad-destructive]",
      lw = `${aw}, [data-pad-back]`,
      jw = GG => ({
        rect: GG.getBoundingClientRect(),
        destructive: GG.matches(aw),
        closes: null !== GG.closest("[data-pad-close-button]"),
        unavailable: GG.matches("[data-pad-unavailable]")
      }),
      Pw = GG => {
        let {
          destructive: bG,
          closes: ZG,
          unavailable: wG
        } = GG;
        return bG ? ZG ? 2 : 3 : wG ? 1 : 0
      },
      Mw = GG => {
        let bG = -1;
        for (let ZG = 0; ZG < GG.length; ZG++) {
          if (bG < 0) {
            bG = ZG;
            continue
          }
          const wG = GG[ZG],
            SG = GG[bG];
          Pw(wG) === Pw(SG) ? CZ(wG.rect, SG.rect) < 0 && (bG = ZG) : Pw(wG) < Pw(SG) && (bG = ZG)
        }
        return bG
      },
      Aw = "[data-pad-tabs]",
      sw = "[data-pad-tab]",
      qw = (GG, bG) => {
        const ZG = GG.querySelector(`${sw}[data-pad-selected='true']`);
        return ZG && bG.includes(ZG) ? ZG : null
      },
      nw = (GG, bG) => {
        let ZG = bG;
        for (let wG = bG.parentElement; wG && !wG.contains(GG); wG = wG.parentElement) ZG = wG;
        return ZG
      };
    class gw {
      constructor() {
        this.contentReturn = null
      }
      redirect(GG, bG, ZG, wG) {
        var SG, LG;
        const yG = GG.closest(Aw),
          kG = bG.closest(Aw);
        var UG;
        if (kG && kG !== yG) return yG || (this.contentReturn = new WeakRef(GG)), null !== (UG = qw(kG, ZG)) && void 0 !== UG ? UG : bG;
        if (!yG || kG) return bG;
        const YG = nw(GG, bG),
          VG = null === (SG = this.contentReturn) || void 0 === SG ? void 0 : SG.deref();
        return VG && YG.contains(VG) && ZG.includes(VG) ? VG : null !== (LG = this.pickRegionStart(YG, mG(bG, "y", wG), ZG)) && void 0 !== LG ? LG : bG
      }
      findTabContent(GG, bG, ZG) {
        const wG = GG.closest(Aw);
        if (!wG || !GG.matches(sw) || wG.contains(bG)) return null;
        const SG = bG.closest(Aw);
        if (SG && Number(SG.dataset.padTabs) <= Number(wG.dataset.padTabs)) return null;
        const LG = nw(GG, bG);
        return ZG.some((GG => LG.contains(GG) && !GG.closest(lw))) || !bG.closest(lw) ? LG : null
      }
      pickContentStart(GG, bG, ZG) {
        return this.contentReturn = null, this.pickRegionStart(GG, mG(GG, "y", ZG), bG)
      }
      pickReplacedContentStart(GG, bG, ZG, wG) {
        if (!bG.contains(GG)) return null;
        const SG = nw(bG, GG),
          LG = ZG.filter((GG => bG.contains(GG) && !SG.contains(GG) && !GG.closest(lw)));
        return 0 === LG.length ? null : (this.contentReturn = null, this.pickRegionStart(bG, mG(LG[0], "y", wG), LG))
      }
      backToStrip(GG, bG, ZG) {
        if (GG.closest(Aw)) return null;
        const wG = PZ(ZG);
        for (const SG of ZG.querySelectorAll(Aw)) {
          if (Number(SG.dataset.padTabs) <= 1 || SG === wG) continue;
          const LG = qw(SG, bG),
            yG = LG ? nw(GG, SG).parentElement : null;
          if (LG && yG && yG !== ZG && ZG.contains(yG)) return this.contentReturn = new WeakRef(GG), LG
        }
        return null
      }
      pickRegionStart(GG, bG, ZG) {
        const wG = lG(bG),
          SG = GG => {
            const bG = ZG.filter((bG => GG.contains(bG) && !bG.closest(Aw) && jG(bG.getBoundingClientRect(), wG))),
              SG = Mw(bG.map(jw));
            return SG >= 0 ? bG[SG] : null
          };
        for (const LG of (0, xG.f)(GG)) {
          const GG = SG(LG);
          if (GG) return GG
        }
        for (const LG of GG.querySelectorAll(Aw)) {
          const GG = qw(LG, ZG);
          if (GG) return GG
        }
        return SG(GG)
      }
    }
    const ew = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Rw = ".Dropdown-root.is-open > .Dropdown-menu",
      Tw = "[data-pad-no-step-in]",
      Hw = "[data-pad-tabs]",
      tw = "[data-pad-press-area]",
      Dw = GG => {
        let bG = GG;
        for (let ZG = 0; bG && ZG <= 4; ZG++, bG = bG.parentElement) {
          const ZG = bG.querySelector(".CircleInfo");
          if (ZG) return bG === GG || bG.querySelectorAll(xG.b).length <= 1 ? ZG : null;
          if (bG !== GG && bG.querySelectorAll(xG.b).length > 1) return null
        }
        return null
      },
      Nw = (GG, bG, ZG) => {
        (0, RG.o)(GG, bG, ZG);
        const wG = null !== GG && void 0 !== GG && GG.isConnected ? Dw(GG) : null,
          SG = Dw(bG);
        wG !== SG && (0, RG.o)(wG, SG, SG ? (0, RG.y)(SG) : ZG, {
          leaveBelow: GG,
          enterBelow: bG
        })
      },
      Ow = GG => GG.getBoundingClientRect(),
      xw = (GG, bG, ZG) => {
        const wG = new Set(ZG);
        for (let SG = GG; SG; SG = SG === bG ? null : SG.parentElement)
          if (wG.has(SG)) return SG;
        return null
      },
      Bw = (GG, bG) => !GG.root || GG.root === bG || bG.matches(Rw) && GG.root.contains(bG);
    const GS = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new bw, this.tabStripNav = new gw, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, hG.d)(KG.t), this.dpadRepeats = new Map(KG.z.map((GG => [GG, (0, hG.d)(KG.A)]))), this.stickRepeat = new KG.d((0, hG.d)(KG.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const GG = pG.b.register({
            name: "focus",
            isActive: () => (0, QG.l)() && "focus" === Ww(),
            onFrame: GG => {
              this.onFrame(GG)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: GG => (0, pG.d)(GG) || GG === (0, VG.j)("menuConfirm") && (0, RG.G)((0, QG.d)())
          }),
          bG = (0, Zw.k)((GG => {
            const bG = (0, Zw.s)(GG);
            null === GG.memoryKey && this.memory.forget(bG), bG === this.layerKey && (this.layerKey = null)
          }));
        let ZG = -1 / 0;
        const wG = yG.d.onFrame((GG => {
            (0, QG.l)() || GG.timestampMs - ZG < 100 || (ZG = GG.timestampMs, Vw())
          })),
          SG = GG => {
            GG.isTrusted && GG.target instanceof Element && yG.d.getActivePad() && this.noteChosenStop(GG.target)
          };
        return document.addEventListener("click", SG, !0), () => {
          GG(), bG(), wG(), document.removeEventListener("click", SG, !0), this.deactivate()
        }
      }
      noteChosenStop(GG) {
        var bG, ZG;
        const wG = Vw();
        if (!wG || !wG.root.contains(GG)) return;
        const SG = null !== (bG = null === (ZG = GG.closest(".Dropdown-root")) || void 0 === ZG ? void 0 : ZG.querySelector(".Dropdown-control")) && void 0 !== bG ? bG : GG,
          LG = xw(SG, wG.root, this.getEnabledCandidates(wG.root));
        if (!LG) return;
        const yG = (0, Zw.s)(wG.layer);
        yG === this.layerKey && wG.root === this.layerRoot || this.beginLayer(wG, yG), this.wasActive ? this.setFocus(LG, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = LG, this.lastFocusedCentre = (0, RG.y)(LG), this.rememberFocus(LG), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
      deactivate() {
        var GG;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const GG of this.dpadRepeats.values()) GG.reset();
          this.stickRepeat.reset(), null !== (GG = this.focused) && void 0 !== GG && GG.isConnected && Nw(this.focused, null, (0, RG.y)(this.focused)), this.notify()
        }
      }
      setFocus(GG) {
        var bG;
        let {
          scroll: ZG = !0,
          byUser: wG = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (wG && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), GG === this.focused) return;
        const SG = null !== (bG = this.focused) && void 0 !== bG && bG.isConnected ? this.focused : null;
        if (this.focused = GG, GG) {
          ZG && (GG.classList.add(Iw), GG.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), wG && ((GG, bG) => {
            const ZG = bG.closest("[data-pad-friends-column]");
            ZG && GG && !ZG.contains(GG) && (gZ = new WeakRef(GG))
          })(SG, GG);
          const bG = (0, RG.y)(GG);
          this.lastFocusedCentre = bG, this.movedInLayer && this.rememberFocus(GG), Nw(SG, GG, bG), "false" === GG.getAttribute("aria-pressed") && GG.closest("[data-pad-select-on-focus]") && (0, RG.e)(GG)
        } else SG && Nw(SG, null, (0, RG.y)(SG));
        this.notify()
      }
      rememberFocus(GG) {
        const bG = this.layerRoot;
        this.layerKey && bG && this.memory.remember(this.layerKey, GG, bG, (() => this.getEnabledCandidates(bG)))
      }
      noteCursorActivation(GG) {
        const bG = Vw();
        if (!bG || !bG.root.contains(GG)) return;
        const ZG = this.getEnabledCandidates(bG.root),
          wG = new Set(ZG);
        let SG = GG;
        for (; SG && !wG.has(SG);) SG = SG === bG.root ? null : SG.parentElement;
        if (!(SG instanceof HTMLElement)) return;
        const LG = (0, Zw.s)(bG.layer);
        this.memory.enter(LG), this.memory.remember(LG, SG, bG.root, (() => ZG))
      }
      notePageEnteredByCursor(GG) {
        return this.memory.enter(GG)
      }
      recallStop(GG, bG) {
        return this.findRemembered(GG, bG)
      }
      focusWhenFound(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: GG,
          untilMs: performance.now() + bG,
          holdWhile: ZG
        }
      }
      getEnabledCandidates(GG) {
        return (0, xG.d)(GG).filter((GG => !(0, xG.s)(GG)))
      }
      onFrame(GG) {
        var bG;
        const ZG = Vw();
        if (!ZG) return;
        const wG = null !== (bG = this.findOpenDropdown(ZG)) && void 0 !== bG ? bG : ZG,
          SG = performance.now(),
          LG = (0, Zw.s)(wG.layer);
        if (LG !== this.layerKey || wG.root !== this.layerRoot) {
          const bG = this.focused;
          if (null !== this.layerKey && wG.root === this.layerRoot && bG && (0, xG.p)(bG, wG.root)) this.continueLayer(LG, bG), this.wasActive || this.resume(wG.root, SG);
          else {
            const bG = !this.wasActive && !GG.wokeDevice,
              yG = "death" === this.layerKind || bG,
              kG = this.enterLayer(wG, LG);
            "popup" !== wG.layer.kind || wG !== ZG || kG ? "menu" === wG.layer.kind && yG && "inGame" === UG.e.get("gameState") && !(0, yZ.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = SG + Fw.b) : (this.pressGuardExtends = bG, this.pressGuardUntilMs = SG + (bG ? Fw.b : yG ? 500 : 250))
          }
        } else this.wasActive || this.resume(wG.root, SG);
        if (this.layerKind = wG.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), GG.wokeDevice && this.focusPointedStop(wG.root), this.validateFocus(wG, SG), SG < this.pressGuardUntilMs && this.pressGuardExtends && (GG.wasPressed((0, VG.j)("menuConfirm")) || GG.wasPressed((0, VG.j)("menuBack"))) && (this.pressGuardUntilMs = SG + Fw.b), SG >= this.pressGuardUntilMs && this.handleButtons(GG, wG)) return;
        const yG = "hybrid" === Ew();
        if (yG && (GG => {
            const bG = fw();
            return bG !== zw && (zw = bG, rw.lock()), rw.update(GG, (0, fG.i)().moveDeadzone)
          })(GG.leftStick)) return kG = this.getHandoff(), Jw = Qw(kG), hw = fw(), void pG.b.handOffHeldInput();
        var kG;
        this.handleDirections(GG, wG, SG, !yG), this.handleScroll(GG, wG)
      }
      findOpenDropdown(GG) {
        const bG = GG.root.querySelector(Rw);
        if (!bG || !(0, xG.n)(bG)) return null;
        let ZG = this.dropdownLayers.get(bG);
        return ZG || (this.dropdownLayerCounter++, ZG = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: GG.layer.kind,
          getRoot: () => bG,
          close: () => {
            (0, RG.m)(bG)
          },
          memoryKey: null
        }, this.dropdownLayers.set(bG, ZG)), {
          layer: ZG,
          root: bG,
          order: GG.order
        }
      }
      focusPointedStop(GG) {
        const bG = (0, QG.d)(),
          ZG = bG ? document.elementFromPoint(bG.x, bG.y) : null;
        if (!ZG || !GG.contains(ZG)) return;
        const wG = xw(ZG, GG, this.getEnabledCandidates(GG));
        wG && this.setFocus(wG, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(GG, bG) {
        const ZG = this.beginLayer(GG, bG),
          wG = Xw();
        return wG && Bw(wG, GG.root) ? (this.takeOver(GG.root, wG, this.enteredLayerAtMs), ZG) : (this.restoreLayerFocus(GG.root, ZG), ZG)
      }
      beginLayer(GG, bG) {
        return this.layerKey = bG, this.layerRoot = GG.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(bG)
      }
      restoreLayerFocus(GG, bG) {
        const ZG = bG && this.layerKey ? this.findRemembered(GG, this.layerKey) : null;
        this.restoredFromMemory = null !== ZG, this.setFocus(null !== ZG && void 0 !== ZG ? ZG : this.pickInitial(GG, {
          waitForContent: !0
        }))
      }
      continueLayer(GG, bG) {
        this.layerKey = GG;
        const ZG = this.memory.enter(GG);
        this.restoreOnFocusLoss = ZG, this.movedInLayer && !ZG && this.rememberFocus(bG)
      }
      resume(GG, bG) {
        var ZG;
        const wG = Xw();
        wG && Bw(wG, GG) ? this.takeOver(GG, wG, bG) : null !== (ZG = this.focused) && void 0 !== ZG && ZG.isConnected && Nw(null, this.focused, (0, RG.y)(this.focused))
      }
      pickPreferred(GG) {
        var bG;
        return null !== (bG = this.layerKey ? this.findRemembered(GG, this.layerKey) : null) && void 0 !== bG ? bG : this.pickInitial(GG, {
          waitForContent: !0
        })
      }
      findRemembered(GG, bG) {
        return this.memory.has(bG) ? this.memory.recall(bG, this.getEnabledCandidates(GG)) : null
      }
      getHandoff() {
        var GG, bG, ZG;
        const wG = null !== (GG = this.focused) && void 0 !== GG && GG.isConnected ? this.focused : null,
          SG = null !== (bG = this.layerRoot) && void 0 !== bG && bG.isConnected ? this.layerRoot : null;
        return {
          point: wG ? (0, RG.y)(wG) : null !== (ZG = this.lastFocusedCentre) && void 0 !== ZG ? ZG : this.getLayerStartPoint(SG),
          element: wG,
          direction: null
        }
      }
      getLayerStartPoint(GG) {
        if (!GG) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const bG = this.pickInitial(GG, {
          includeDisabled: !0
        });
        return (0, RG.y)(null !== bG && void 0 !== bG ? bG : GG)
      }
      takeOver(GG, bG, ZG) {
        const {
          element: wG,
          direction: SG,
          point: LG
        } = bG, yG = wG instanceof HTMLElement && (0, xG.p)(wG, GG) ? wG : null;
        if (!SG) {
          const bG = this.focused;
          return yG ? this.setFocus(yG, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(GG, LG), void(this.focused && this.focused === bG && this.focused.isConnected && Nw(null, this.focused, (0, RG.y)(this.focused)))
        }
        if (this.dpadRepeats.get(SG).update(!0, ZG), yG) return this.setFocus(yG, {
          scroll: !1,
          byUser: !0
        }), void this.move(GG, SG, ZG, !0);
        const kG = this.getEnabledCandidates(GG),
          UG = kG.map(Ow),
          YG = zZ(new DOMRect(LG.x, LG.y, 0, 0), UG, SG),
          VG = YG >= 0 ? YG : iZ(LG, UG);
        this.setFocus(VG >= 0 ? kG[VG] : this.pickInitial(GG), {
          byUser: !0
        })
      }
      focusNearest(GG, bG) {
        const ZG = this.getEnabledCandidates(GG),
          wG = iZ(bG, ZG.map(Ow));
        this.setFocus(wG >= 0 ? ZG[wG] : this.pickInitial(GG), {
          byUser: !0
        })
      }
      pickDefault(GG) {
        let {
          includeDisabled: bG = !1,
          exclude: ZG = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wG = [...GG.querySelectorAll(ew)].filter((wG => (null === ZG || void 0 === ZG || !ZG.has(wG)) && (bG ? (0, xG.u)(wG, GG) : (0, xG.p)(wG, GG)))),
          SG = Mw(wG.map(jw));
        return SG >= 0 ? wG[SG] : null
      }
      pickNewAreaStart(GG, bG) {
        const ZG = [...GG.querySelectorAll(tw)].filter(xG.n);
        for (const wG of [...(0, xG.f)(GG), ...ZG]) {
          if (bG.has(wG)) continue;
          const GG = this.getEnabledCandidates(wG),
            ZG = Mw(GG.map(jw));
          if (ZG >= 0) return GG[ZG]
        }
        return null
      }
      pickInitial(GG) {
        let {
          includeDisabled: bG = !1,
          waitForContent: ZG = !1,
          enteredAtMs: wG = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SG = this.pickDefault(GG, {
          includeDisabled: bG
        });
        if (SG) return SG;
        const LG = GG => bG ? (0, xG.d)(GG) : this.getEnabledCandidates(GG);
        let yG = [];
        for (const fG of (0, xG.f)(GG))
          if (yG = LG(fG), yG.length > 0) break;
        if (0 === yG.length) {
          if (ZG && performance.now() - wG < 1e4 && (0, xG.k)(GG)) return null;
          yG = LG(GG)
        }
        const kG = yG.map(Ow),
          UG = lG(null),
          YG = yG.filter(((GG, bG) => jG(kG[bG], UG))),
          VG = YG.length > 0 ? YG : yG,
          pG = Mw(VG.map(jw));
        return pG >= 0 ? VG[pG] : null
      }
      validateFocus(GG, bG) {
        if (this.pendingFocus) {
          var ZG, wG;
          const SG = this.pendingFocus.find();
          if (SG && (0, xG.p)(SG, GG.root)) return this.pendingFocus = null, void this.setFocus(SG, {
            byUser: !0
          });
          bG > this.pendingFocus.untilMs && (null === (ZG = (wG = this.pendingFocus).holdWhile) || void 0 === ZG || !ZG.call(wG)) && (this.pendingFocus = null)
        }
        const SG = this.focused,
          LG = !!SG && (0, xG.p)(SG, GG.root);
        if (!(!LG && SG && SG === this.lastActivated && bG - this.lastActivatedAtMs < 5e3 && GG.root.contains(SG) && (0, xG.n)(SG) && (0, xG.s)(SG))) {
          if (!LG && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = bG, void this.restoreLayerFocus(GG.root, !0);
          if ((!LG || !this.movedInLayer && !this.scrolledInLayer) && !(bG - this.lastRefocusCheckMs < (LG ? 200 : 50)))
            if (this.lastRefocusCheckMs = bG, LG) {
              const ZG = bG - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(GG.root) : null,
                wG = null !== ZG && void 0 !== ZG ? ZG : this.restoredFromMemory ? null : this.pickDefault(GG.root);
              wG && wG !== SG && this.setFocus(wG)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const bG = this.pendingFocus;
                return this.focusNearest(GG.root, this.lastFocusedCentre), void(this.pendingFocus = bG)
              }
              this.setFocus(this.pickPreferred(GG.root))
            }
        }
      }
      handleButtons(GG, bG) {
        if (GG.wasPressed((0, VG.j)("menuToggleCursor"))) return ow(this.getHandoff()), !0;
        if (GG.wasPressed((0, VG.j)("menuBack"))) {
          const GG = (0, RG.m)(bG.root);
          return GG ? this.setFocus(GG, {
            byUser: !0
          }) : eZ(this, bG.root) || ((0, RG.f)(bG.root) ? this.returnToOpener(bG.root) : this.backToStrip(bG.root) || pw()), !0
        }
        const ZG = (0, VG.j)("menuConfirm");
        var wG, SG;
        GG.wasPressed(ZG) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (wG = null === (SG = this.focused) || void 0 === SG ? void 0 : SG.getAttribute("data-pad-repeat")) && void 0 !== wG ? wG : null, this.confirmRepeated = GG.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (GG.wasReleased(ZG)) {
          const GG = this.confirmPressedOn;
          if (this.confirmPressedOn = null, GG && !this.confirmRepeated && GG === this.focused && GG.isConnected && !(0, xG.s)(GG)) {
            const ZG = GG.matches("[data-pad-tab]") ? GG.closest(Hw) : null;
            ZG ? this.enterTab(GG, ZG, bG.root, performance.now()) : this.activate(GG)
          }
          return !0
        }
        return this.repeatConfirm(GG, ZG), BZ(this, GG, bG)
      }
      repeatConfirm(GG, bG) {
        const ZG = this.confirmPressedOn;
        ZG && null !== this.confirmRepeatKey && GG.isHeld(bG) && (ZG === this.focused && ZG.isConnected && !(0, xG.s)(ZG) && ZG.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ZG.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ZG)) : this.confirmRepeatKey = null)
      }
      backToStrip(GG) {
        const bG = this.focused;
        if (!(0, fG.i)().menuBackToCategories) return !1;
        const ZG = null !== bG && void 0 !== bG && bG.isConnected ? this.tabStripNav.backToStrip(bG, this.getEnabledCandidates(GG), GG) : null;
        return ZG && this.setFocus(ZG, {
          byUser: !0
        }), null !== ZG
      }
      returnToOpener(GG) {
        const bG = this.lastActivatedKey;
        bG && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var ZG;
          return null !== (ZG = this.getEnabledCandidates(GG).find((GG => (0, RG.z)(GG) === bG))) && void 0 !== ZG ? ZG : null
        })))
      }
      activate(GG) {
        var bG;
        if ((0, vw.d)(GG) || (0, RG.C)(GG)) return;
        this.lastActivatedKey = null !== (bG = (0, RG.z)(GG)) && void 0 !== bG ? bG : this.lastActivatedKey, this.lastActivated = GG, this.lastActivatedAtMs = performance.now(), this.rememberFocus(GG);
        const ZG = this.layerRoot;
        if (ZG) {
          const bG = new Set(ZG.querySelectorAll(ew)),
            wG = new Set(ZG.querySelectorAll(`[data-pad-initial-area], ${tw}`)),
            SG = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var SG;
            return (0, xG.p)(GG, ZG) ? null : null !== (SG = this.pickDefault(ZG, {
              exclude: bG
            })) && void 0 !== SG ? SG : this.pickNewAreaStart(ZG, wG)
          }), 5e3, (() => GG.isConnected && (0, xG.s)(GG) && performance.now() - SG < 6e4))
        }(0, RG.e)(GG), (0, RG.i)(GG)
      }
      handleDirections(GG, bG, ZG, wG) {
        const SG = vZ(bG.layer.kind) ? (0, VG.j)("chat") : null;
        for (const kG of KG.z) {
          this.dpadRepeats.get(kG).update(GG.isHeld(kG), ZG) && (kG !== SG || GG.wasPressed(kG)) && this.move(bG.root, kG, ZG, !0)
        }
        const LG = wG ? (0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          yG = this.stickRepeat.update((0, KG.gb)(LG), ZG);
        if (yG && this.move(bG.root, yG, ZG, !0), this.retryMove && ZG >= this.retryMove.atMs) {
          const {
            direction: GG
          } = this.retryMove;
          this.retryMove = null, this.move(bG.root, GG, ZG, !1)
        }
      }
      move(GG, bG, ZG, wG) {
        var SG;
        let LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (SG = this.tabOpenWait) || void 0 === SG ? void 0 : SG.wait) && bG === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const yG = this.focused;
        if (!yG || !yG.isConnected) {
          const bG = this.pickInitial(GG);
          return void(bG && this.setFocus(bG, {
            byUser: !0
          }))
        }
        const kG = "Left" === bG || "Right" === bG,
          UG = kG ? (0, vw.d)(yG) : null;
        if (UG) return void UG.adjust("Left" === bG ? -1 : 1);
        const YG = GG => null !== GG.closest("[data-pad-friends-column]"),
          VG = YG(yG),
          pG = Ow(yG),
          fG = kG || yG.closest(Hw) ? null : (GG => {
            const bG = new Map;
            return ZG => {
              const wG = ZG.closest(Hw);
              if (!wG) return !1;
              let SG = bG.get(wG);
              if (void 0 === SG) {
                const ZG = Ow(wG);
                SG = rZ(GG, ZG) && (ZG.right <= GG.left || ZG.left >= GG.right), bG.set(wG, SG)
              }
              return SG
            }
          })(pG),
          QG = null !== yG.closest(Tw),
          KG = this.getEnabledCandidates(GG).filter((GG => GG !== yG && (kG || YG(GG) === VG) && !(null !== fG && void 0 !== fG && fG(GG)) && (QG || !GG.closest(Tw)))),
          hG = KG.map(Ow),
          dG = mG(yG, "y", GG),
          JG = lG(dG);
        if (!LG && !jG(pG, JG)) {
          const GG = KG.filter(((GG, bG) => jG(hG[bG], JG)));
          if (GG.length > 0) {
            const bG = {
              x: JG.left + JG.width / 2,
              y: JG.top + JG.height / 2
            };
            return void this.setFocus(GG[iZ(bG, GG.map(Ow))], {
              byUser: !0
            })
          }
        }
        const rG = kG ? ((GG, bG, ZG) => {
            const wG = Ow(GG),
              SG = GG.closest(Hw),
              LG = SG ? Ow(SG) : null;
            return bG.map(((bG, yG) => {
              const kG = ZG[yG];
              if (kG.bottom > wG.top && kG.top < wG.bottom) return !0;
              const UG = bG.closest(Hw);
              if (SG && LG) return UG !== SG && (null !== UG || kG.bottom <= LG.top || kG.top >= LG.bottom);
              if (UG) return !rZ(wG, Ow(UG));
              let YG = GG;
              for (let ZG = GG.parentElement; ZG && !ZG.contains(bG); ZG = ZG.parentElement) YG = ZG;
              const VG = Ow(YG);
              return kG.right > VG.left && kG.left < VG.right
            }))
          })(yG, KG, hG) : void 0,
          zG = kG && !yG.closest(Hw) ? (GG => GG.map((GG => !GG.closest(lw))))(KG) : void 0,
          EG = ((GG, bG) => {
            const ZG = [];
            for (let SG = GG; SG; SG = SG.parentElement) ZG.push(SG);
            const wG = new Map;
            return ZG.forEach(((GG, bG) => {
              wG.set(GG, ZG.length - 1 - bG)
            })), bG.map((GG => {
              for (let bG = GG; bG; bG = bG.parentElement) {
                const GG = wG.get(bG);
                if (void 0 !== GG) return GG
              }
              return -1
            }))
          })(yG, KG),
          oG = kG ? "x" : "y",
          XG = mG(yG, oG, GG);
        let uG = zZ(pG, hG, bG, EG, rG, zG);
        if (uG >= 0 && XG && !XG.contains(KG[uG])) {
          const GG = KG.flatMap(((GG, bG) => XG.contains(GG) ? [bG] : [])),
            ZG = bG => bG && GG.map((GG => bG[GG])),
            wG = zZ(pG, GG.map((GG => hG[GG])), bG, GG.map((GG => EG[GG])), ZG(rG), ZG(zG));
          uG = wG >= 0 ? GG[wG] : uG
        }
        if (uG >= 0) return void this.moveTo(yG, KG[uG], KG, GG, bG, LG);
        if (!wG) return;
        const iG = "Right" === bG || "Down" === bG ? 1 : -1;
        if (XG && aG(XG, oG, iG)) {
          const GG = "y" === oG ? XG.clientHeight : XG.clientWidth;
          cG(XG, oG, iG * GG * .5), this.retryMove = {
            direction: bG,
            atMs: ZG + 80
          }
        }
      }
      moveTo(GG, bG, ZG, wG, SG, LG) {
        const yG = this.tabStripNav.findTabContent(GG, bG, ZG);
        yG && "true" !== GG.dataset.padSelected ? this.openTab(GG, yG, wG, SG) : LG && !yG || this.setFocus(this.tabStripNav.redirect(GG, bG, ZG, wG), {
          byUser: !0
        })
      }
      openTab(GG, bG, ZG, wG) {
        const SG = bG.parentElement;
        (0, RG.e)(GG), this.focusWhenFound((() => "true" !== GG.dataset.padSelected ? null : bG.isConnected ? this.tabStripNav.pickContentStart(bG, this.getEnabledCandidates(ZG), ZG) : SG ? this.tabStripNav.pickReplacedContentStart(GG, SG, this.getEnabledCandidates(ZG), ZG) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: wG
        }
      }
      enterTab(GG, bG, ZG, wG) {
        this.move(ZG, (GG => {
          const bG = [...GG.querySelectorAll(sw)].filter((bG => bG.closest(Aw) === GG));
          if (bG.length >= 2) {
            const GG = bG[0].getBoundingClientRect(),
              ZG = bG[1].getBoundingClientRect();
            return Math.abs(ZG.top - GG.top) > Math.abs(ZG.left - GG.left) ? "Right" : "Down"
          }
          const ZG = GG.getBoundingClientRect();
          return ZG.height > ZG.width ? "Right" : "Down"
        })(bG), wG, !1, !0), this.focused !== GG || this.pendingFocus || this.activate(GG)
      }
      handleScroll(GG, bG) {
        const ZG = (0, KG.i)(GG.rightStick, .2);
        if (0 === ZG.x && 0 === ZG.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const wG = GG.dtMs / 1e3;
        for (const LG of ["x", "y"]) {
          var SG;
          const GG = ZG[LG];
          if (0 === GG) continue;
          const yG = null !== (SG = mG(this.focused, LG, bG.root)) && void 0 !== SG ? SG : FG(bG.root, LG);
          if (!yG) continue;
          const kG = Math.sign(GG) * GG * GG * 1500 * wG + this.scrollRemainder[LG],
            UG = Math.trunc(kG);
          this.scrollRemainder[LG] = kG - UG, 0 !== UG && (cG(yG, LG, UG), this.scrolledInLayer = !0)
        }
      }
    };
    var bS = ZG(8254);
    var ZS = ZG(8768);
    const wS = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      SS = {
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
          ...wS,
          minIntervalMs: 1e3
        },
        preview: {
          ...wS,
          minIntervalMs: 0
        }
      };
    const LS = new class {
        constructor(GG) {
          this.deps = GG, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = GG => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", GG))
          }
        }
        play(GG, bG) {
          const ZG = SS[GG];
          if (!this.deps.isVibrationOn() || ZG.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const wG = this.lastPlayedMs[GG];
          if (void 0 !== wG && bG - wG < ZG.minIntervalMs) return !1;
          const SG = this.deps.getActuator();
          if (!SG) return !1;
          this.lastPlayedMs[GG] = bG;
          const {
            duration: LG,
            strongMagnitude: yG,
            weakMagnitude: kG
          } = ZG;
          try {
            SG.playEffect("dual-rumble", {
              duration: LG,
              strongMagnitude: yG,
              weakMagnitude: kG
            }).catch(this.logFailure)
          } catch (UG) {
            this.logFailure(UG)
          }
          return !0
        }
      }({
        getActuator: () => (GG => {
          const bG = null === GG || void 0 === GG ? void 0 : GG.vibrationActuator;
          return "function" === typeof(null === bG || void 0 === bG ? void 0 : bG.playEffect) ? bG : null
        })(yG.d.getActiveGamepad()),
        isVibrationOn: () => (0, fG.i)().vibration,
        isPadInUse: QG.l
      }),
      yS = GG => {
        LS.play(GG, performance.now())
      };
    var kS = ZG(8256),
      US = ZG(2897),
      YS = ZG(95),
      VS = ZG(29),
      pS = ZG(647);
    class fS {
      constructor(GG) {
        this.deps = GG
      }
      check() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const bG = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!bG) return "skipped";
        const ZG = GG ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ZG || this.deps.readReportedVisitId() === ZG ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZG), this.deps.NQ(bG, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const QS = "controllerUsageReportedVisit";
    var KS = ZG(1311),
      hS = ZG(1702),
      dS = ZG(631),
      JS = ZG(1389),
      rS = ZG(1204);
    const zS = GG => ({
        translationKey: `controller:${GG}`
      }),
      ES = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: zS("padButtonView"),
        Menu: zS("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: zS("padButtonDpadUp"),
        Down: zS("padButtonDpadDown"),
        Left: zS("padButtonDpadLeft"),
        Right: zS("padButtonDpadRight"),
        Home: zS("padButtonHome"),
        LeftStick: zS("padButtonLeftStick"),
        RightStick: zS("padButtonRightStick")
      },
      oS = {
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
          View: zS("padButtonCreate"),
          Menu: zS("padButtonOptions")
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
      XS = (GG, bG) => {
        var ZG;
        const wG = null !== (ZG = oS[GG][bG]) && void 0 !== ZG ? ZG : ES[bG];
        return "string" === typeof wG ? wG : (0, SG.r)(rS.d.get().getCurrentLanguageCode(), wG.translationKey)
      },
      uS = GG => {
        let {
          glyph: bG,
          family: ZG,
          className: wG
        } = GG;
        const SG = (0, QG.F)(),
          LG = null !== ZG && void 0 !== ZG ? ZG : SG,
          yG = (0, kS.i)(LG, bG);
        return (0, sG.jsx)("span", {
          className: AG()("ControllerGlyph", wG),
          role: "img",
          "aria-label": XS(LG, bG),
          style: {
            "--pad-glyph-mask": `url(${yG})`,
            "--pad-glyph-aspect": (0, kS.e)(LG, bG)
          }
        })
      };
    var iS = ZG(1876);
    const CS = GG => {
      let {
        action: bG
      } = GG;
      const {
        t: ZG
      } = (0, SG.w)();
      switch (bG.kind) {
        case "reload":
          return (0, sG.jsx)("span", {
            children: ZG("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, sG.jsx)(iS.c, {
            text: bG.description ? [{
              icon: bG.icon
            }, ` ${bG.description}`] : [{
              icon: bG.icon
            }]
          });
        case "touchButton":
          return (0, sG.jsx)(iS.c, {
            text: bG.label
          })
      }
    };
    var WS = ZG(8776);
    const mS = GG => {
      let {
        hold: bG
      } = GG;
      return (0, sG.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${bG.holdMs}ms`
        },
        children: (0, sG.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, bG.id)
    };
    var IS = ZG(8809),
      FS = ZG(8816),
      vS = ZG(8823),
      aS = ZG(8800);
    const cS = () => {
        const {
          gameState: GG
        } = (0, UG.o)(["gameState"]), bG = (0, QG.B)(), [wG, SG] = (0, PG.useState)(!1), [LG, yG] = (0, PG.useState)(!1);
        return (0, PG.useEffect)((() => {
          "inGame" === GG && SG(!0)
        }), [GG]), (0, PG.useEffect)((() => {
          if (!wG) return;
          let GG = null,
            bG = !1;
          return (dS.B ? Promise.all([ZG.e(73), ZG.e(90), ZG.e(273), ZG.e(191), ZG.e(229), ZG.e(228), ZG.e(89)]).then((() => ZG(40920))).then((GG => GG.startWasmPadGameplay)) : Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(98), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(187), ZG.e(233), ZG.e(78), ZG.e(90), ZG.e(188), ZG.e(227), ZG.e(97), ZG.e(239), ZG.e(230), ZG.e(246), ZG.e(121), ZG.e(215), ZG.e(87), ZG.e(247), ZG.e(77), ZG.e(160), ZG.e(248), ZG.e(229), ZG.e(200)]).then((() => ZG(41039))).then((GG => GG.startPadGameplay))).then((ZG => {
            bG || (GG = ZG())
          })).catch((GG => {
            console.error("Pad gameplay failed to load", GG), bG || yG(!0)
          })), () => {
            var ZG;
            bG = !0, null === (ZG = GG) || void 0 === ZG || ZG()
          }
        }), [wG]), (0, PG.useEffect)((() => {
          LG && bG && (yG(!1), KS.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((GG => {
            !0 === GG && (0, hS.reloadBloxd)()
          })))
        }), [LG, bG]), (0, sG.jsxs)(sG.Fragment, {
          children: [(0, sG.jsx)(lS, {}), (0, sG.jsx)(jS, {}), (0, sG.jsx)(PS, {})]
        })
      },
      lS = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, QG.B)(), {
          gameState: ZG,
          isUiHidden: wG
        } = (0, UG.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: LG
        } = (0, fG.r)(), yG = (0, WS.g)(), kG = (0, WS.k)(), [YG, pG] = (0, PG.useState)(vS.c);
        return (0, JS.g)(aS.u, pG), !bG || LG || wG || "inGame" !== ZG || !yG && !YG ? null : (0, sG.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [yG && (0, sG.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, sG.jsx)(uS, {
              glyph: (0, VG.j)("actionButton")
            }), (0, sG.jsx)(CS, {
              action: yG
            }), kG && (0, sG.jsx)("span", {
              className: "PadActionHintMore",
              children: GG("controller:gameplayActionWheelHint")
            })]
          }), YG && (0, sG.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, sG.jsx)(uS, {
              glyph: (0, VG.j)("pickBlock")
            }), (0, sG.jsx)("span", {
              children: GG("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      jS = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, QG.B)(), {
          gameState: ZG,
          isUiHidden: wG
        } = (0, UG.o)(["gameState", "isUiHidden"]), [LG, yG] = (0, PG.useState)(IS.c);
        return (0, JS.g)(aS.q, yG), bG && !wG && "inGame" === ZG && LG ? (0, sG.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, sG.jsx)("span", {
            children: GG("controller:gameplayDropStack")
          }), (0, sG.jsx)(mS, {
            hold: LG
          })]
        }) : null
      },
      PS = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, QG.B)(), {
          gameState: ZG,
          isUiHidden: wG
        } = (0, UG.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: LG
        } = (0, fG.r)(), [yG, kG] = (0, PG.useState)(FS.b);
        return (0, JS.g)(aS.n, kG), bG && !wG && "inGame" === ZG && yG ? (0, sG.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!LG && (0, sG.jsx)(uS, {
            glyph: (0, VG.j)("attack")
          }), (0, sG.jsx)("span", {
            children: GG("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var MS = ZG(8825),
      AS = ZG(1923),
      sS = ZG(2409),
      qS = ZG(8241);
    const nS = GG => GG && !(0, MS.b)(AS.c.get("shopInfo")),
      gS = () => {
        const GG = "inGame" === (0, UG.o)(["gameState"]).gameState;
        return (0, sS.h)("shopInfo", (() => {
          (0, qS.f)(nS(GG))
        })), (0, PG.useEffect)((() => {
          (0, qS.f)(nS(GG))
        }), [GG]), null
      },
      eS = () => {
        const {
          t: GG
        } = (0, SG.w)(), {
          hideButtonHints: bG
        } = (0, fG.r)();
        (0, QG.F)();
        const ZG = (0, Ab.n)();
        return (0, PG.useEffect)((() => (() => {
          const GG = pG.b.register({
              name: "inventory",
              isActive: SZ.isActive,
              onFrame: SZ.onFrame,
              onDeactivate: SZ.onDeactivate,
              wakePressActs: SZ.wakePressActs
            }),
            bG = GG => {
              SZ.noteRealPointer(GG), SZ.shouldBlockRealPointer(GG) && GG.stopPropagation()
            };
          for (const yG of LZ) window.addEventListener(yG, bG, !0);
          const ZG = (0, OG.k)((() => {
              "inventory" !== pG.b.getActiveConsumerName() && SZ.forgetSurface()
            })),
            wG = GG => {
              const bG = GG.target;
              (0, QG.l)() && (0, tG.e)(bG) && bG.closest(ob) && (0, OG.i)() && (0, OG.q)(bG)
            };
          document.addEventListener("focusout", wG, !0);
          const {
            invalidate: SG,
            onScroll: LG
          } = SZ.targets;
          return document.addEventListener("scroll", LG, !0), window.addEventListener("resize", SG), () => {
            GG(), ZG();
            for (const GG of LZ) window.removeEventListener(GG, bG, !0);
            document.removeEventListener("scroll", LG, !0), document.removeEventListener("focusout", wG, !0), window.removeEventListener("resize", SG), SZ.targets.disconnect()
          }
        })()), []), (0, sG.jsxs)(sG.Fragment, {
          children: [(0, sG.jsx)(eG, {
            placer: SZ.ring,
            className: "InventorySlotCursorRing"
          }), ZG.showing && !bG && (0, sG.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: NG(ZG).map((bG => {
              let {
                actions: wG,
                labelKey: SG
              } = bG;
              return (0, sG.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [wG.map((GG => (0, sG.jsx)(uS, {
                  glyph: (0, VG.j)(GG)
                }, GG))), (0, sG.jsx)("span", {
                  children: GG(`controller:${SG}`)
                }), "inventoryDrop" === SG && ZG.dropStackHold && (0, sG.jsx)(mS, {
                  hold: ZG.dropStackHold
                })]
              }, SG)
            }))
          })]
        })
      },
      RS = [{
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
      TS = GG => Array.from(GG).map((GG => ({
        type: "char",
        char: GG,
        width: 1
      }))),
      HS = function(GG) {
        return {
          type: "command",
          command: GG,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      tS = [HS("page", 2), HS("otherPage"), HS("caretLeft"), HS("space", 3), HS("caretRight"), HS("close", 1.5), HS("submit", 1.5)],
      DS = [HS("page", 2), HS("otherPage"), HS("caretLeft"), HS("space", 2), HS("caretRight"), HS("newline"), HS("close", 1.5), HS("submit", 1.5)],
      NS = [
        [...TS("1234567890"), HS("backspace")], TS("qwertyuiop/"), TS("asdfghjkl'?"), [HS("shift", 2), ...TS("zxcvbnm,.")]
      ],
      OS = [
        [...TS("1234567890"), HS("backspace")], TS("!@#$%^&*()/"), TS('-_=+[]{};:"'), TS("~`|\\<>'\u20ac\xa3,.")
      ],
      xS = {
        letters: NS,
        accents: [
          [...TS("1234567890"), HS("backspace")], TS("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), TS("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [HS("shift", 2), ...TS("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: OS
      },
      BS = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      GL = (GG, bG) => "letters" === GG ? bG ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === GG ? "symbols" : "accents"
      },
      bL = function(GG, bG) {
        const ZG = ((GG, bG) => [...xS[GG], bG ? DS : tS])(GG, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === bG) return ZG;
        const wG = Math.min(2, ZL(ZG[0]) / bG);
        return [Array.from({
          length: bG
        }, ((GG, bG) => ({
          type: "phrase",
          phraseIndex: bG,
          width: wG
        }))), ...ZG]
      },
      ZL = GG => GG.reduce(((GG, bG) => GG + bG.width), 0),
      wL = GG => Math.max(...GG.map(ZL)),
      SL = (GG, bG) => {
        const ZG = GG[bG.row];
        let wG = (wL(GG) - ZL(ZG)) / 2;
        for (let SG = 0; SG < bG.col; SG++) wG += ZG[SG].width;
        return wG + ZG[bG.col].width / 2
      },
      LL = (GG, bG, ZG) => {
        let wG = 0,
          SG = 1 / 0;
        for (let LG = 0; LG < GG[bG].length; LG++) {
          const yG = Math.abs(SL(GG, {
            row: bG,
            col: LG
          }) - ZG);
          yG < SG - 1e-9 && (wG = LG, SG = yG)
        }
        return wG
      },
      yL = (GG, bG) => {
        const ZG = Math.max(0, Math.min(GG.length - 1, bG.row));
        return {
          row: ZG,
          col: Math.max(0, Math.min(GG[ZG].length - 1, bG.col))
        }
      },
      kL = (GG, bG, ZG) => "once" === GG && bG - ZG <= 400 ? "caps" : "off" === GG ? "once" : "off",
      UL = (GG, bG) => "once" === GG && (GG => GG.toLowerCase() !== GG.toUpperCase())(bG) ? "off" : GG,
      YL = (GG, bG, ZG) => {
        if ("symbols" === bG || "off" === ZG) return GG;
        const wG = GG.toUpperCase();
        return 1 === wG.length ? wG : GG
      };
    var VL = ZG(8698);
    const pL = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const fL = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(GG) {
          return !(GG - this.lastSendMs < 2e3) && (this.lastSendMs = GG, !0)
        }
      },
      QL = {
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
      KL = ["Ny", "nameTag"],
      hL = GG => {
        const bG = GG.target instanceof HTMLTextAreaElement && !KL.includes(GG.kind);
        return bL(GG.page, "chat" === GG.kind ? pL.length : 0, bG)
      },
      dL = GG => {
        const bG = GG.getBoundingClientRect(),
          ZG = window.innerHeight,
          wG = bG.top + bG.height / 2 < ZG / 2 ? "bottom" : "top",
          SG = "bottom" === wG ? ZG - bG.bottom - 6 : bG.top - 6;
        return {
          placement: wG,
          maxHeightPx: Math.min(.46 * ZG, Math.max(.3 * ZG, SG))
        }
      },
      JL = GG => {
        (0, mZ.d)(GG) ? (0, mZ.b)().close(): (GS.noteChosenStop(GG), GG.blur())
      };
    class rL {
      constructor(GG) {
        this.host = GG, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(GG, bG) {
        this.phraseTexts = GG, this.phrasesFill = bG
      }
      pressKey(GG) {
        const bG = this.host.getState(),
          ZG = hL(bG),
          wG = ZG[GG.row][GG.col];
        this.host.setState({
          ...bG,
          focus: GG,
          preferredX: SL(ZG, GG)
        }), "char" === wG.type ? this.typeChar(wG.char) : "command" === wG.type ? this.runCommand(wG.command) : this.sendPhrase(wG.phraseIndex)
      }
      runCommand(GG) {
        const bG = this.host.getState();
        switch (GG) {
          case "backspace":
            (0, tG.c)(bG.target);
            break;
          case "space":
            (0, tG.d)(bG.target, " ");
            break;
          case "newline":
            (0, tG.d)(bG.target, "\n");
            break;
          case "caretLeft":
            (0, tG.i)(bG.target, -1);
            break;
          case "caretRight":
            (0, tG.i)(bG.target, 1);
            break;
          case "shift": {
            const GG = performance.now();
            this.host.setState({
              ...bG,
              shift: kL(bG.shift, GG, this.lastShiftPressMs)
            }), this.lastShiftPressMs = GG;
            break
          }
          case "page":
          case "otherPage": {
            const ZG = GL(bG.page, bG.accentsFirst)[GG];
            this.host.setState({
              ...bG,
              page: ZG,
              focus: yL(hL({
                ...bG,
                page: ZG
              }), bG.focus)
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
            (0, mZ.d)(bG.target) && (0, mZ.b)().selectNextChannel()
        }
      }
      submit() {
        var GG, bG;
        const {
          target: ZG
        } = this.host.getState();
        this.host.hide(), (0, mZ.d)(ZG) ? (0, mZ.b)().submit() : (GS.noteChosenStop(ZG), null === (GG = (bG = (0, mZ.c)(ZG)).submit) || void 0 === GG || GG.call(bG), document.activeElement === ZG && ZG.blur())
      }
      close() {
        const {
          target: GG
        } = this.host.getState();
        this.host.hide(), JL(GG)
      }
      typeChar(GG) {
        const {
          target: bG,
          page: ZG,
          shift: wG
        } = this.host.getState();
        (0, tG.d)(bG, YL(GG, ZG, wG)), this.host.setState({
          ...this.host.getState(),
          shift: UL(wG, GG)
        })
      }
      sendPhrase(GG) {
        if (this.phrasesFill) {
          const {
            target: bG
          } = this.host.getState(), ZG = this.phraseTexts[GG];
          ZG && (bG.setSelectionRange(0, bG.value.length), (0, tG.d)(bG, ZG))
        } else fL.claim(performance.now()) && (this.host.hide(), (0, mZ.b)().sendLine(this.phraseTexts[GG]))
      }
    }
    var zL = ZG(8719);
    const EL = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      oL = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class XL {
      constructor(GG, bG) {
        this.host = GG, this.editor = bG, this.lastDirection = null, this.navRepeat = new KG.d((0, hG.d)(EL)), this.commandRepeats = new Map(RS.filter((GG => {
          let {
            repeats: bG
          } = GG;
          return bG
        })).map((GG => {
          let {
            command: bG
          } = GG;
          return [bG, (0, hG.d)(oL)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const GG of this.commandRepeats.values()) GG.reset()
      }
      onVisibleFrame(GG) {
        const bG = performance.now();
        for (const {
            command: SG,
            action: LG
          }
          of RS) {
          const ZG = (0, VG.j)(LG),
            wG = this.commandRepeats.get(SG);
          if ((wG ? wG.update(GG.isHeld(ZG), bG) : GG.wasPressed(ZG)) && (this.editor.runCommand(SG), !this.host.getState().visible)) return
        }
        if (GG.wasPressed((0, VG.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ZG = this.readNavDirection(GG);
        this.lastDirection = ZG;
        const wG = this.navRepeat.update(ZG, bG);
        wG && this.navigate(wG)
      }
      onHiddenFrame(GG, bG) {
        var ZG;
        if (GG.wasPressed((0, VG.j)("keyboardClose"))) return void JL(bG);
        const wG = (0, VG.j)("keyboardType");
        if (GG.wasPressed(wG)) return pG.b.consumeButton(wG), void this.host.open(bG);
        const SG = this.readNavDirection(GG),
          LG = null !== SG && SG !== this.lastDirection;
        if (this.lastDirection = SG, !LG || (0, mZ.d)(bG)) return;
        const yG = (null === (ZG = Vw()) || void 0 === ZG ? void 0 : ZG.root.contains(bG)) || null !== bG.closest(".EntireInventoryWrapper");
        JL(bG), yG && pG.b.handOffHeldInput()
      }
      navigate(GG) {
        const bG = this.host.getState();
        if ("Up" === GG && 0 === bG.focus.row && "chat" === bG.kind) return (0, mZ.b)().stepHistory(), void this.host.setState({
          ...bG
        });
        const ZG = ((GG, bG, ZG, wG) => {
          if ("Left" === ZG || "Right" === ZG) {
            const wG = GG[bG.row].length,
              SG = (bG.col + ("Right" === ZG ? 1 : -1) + wG) % wG,
              LG = {
                row: bG.row,
                col: SG
              };
            return {
              pos: LG,
              preferredX: SL(GG, LG)
            }
          }
          const SG = (bG.row + ("Down" === ZG ? 1 : -1) + GG.length) % GG.length;
          return {
            pos: {
              row: SG,
              col: LL(GG, SG, wG)
            },
            preferredX: wG
          }
        })(hL(bG), bG.focus, GG, bG.preferredX);
        this.host.setState({
          ...bG,
          focus: ZG.pos,
          preferredX: ZG.preferredX
        })
      }
      readNavDirection(GG) {
        for (const bG of KG.z)
          if (GG.isHeld(bG)) return bG;
        return (0, KG.gb)((0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone))
      }
    }
    const uL = ["Up", "Down", "Left", "Right"],
      iL = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const CL = new class {
      constructor() {
        this.state = QL, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new rL(this), this.padInput = new XL(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(GG) {
        const bG = GG.visible !== this.state.visible;
        this.state = GG;
        for (const ZG of this.listeners) ZG();
        bG && YG.l.xh(zL.b, GG.visible)
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      install() {
        const GG = pG.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, tG.e)(document.activeElement),
            onFrame: GG => {
              this.onFrame(GG)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: GG => uL.includes(GG) || !this.state.visible && GG === (0, VG.j)("keyboardType")
          }),
          bG = GG => {
            const bG = GG.target;
            (0, tG.e)(bG) && (bG === this.pendingChatInput || (0, QG.l)() ? this.open(bG) : this.state.visible && bG !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ZG = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          wG = GG => {
            GG.isTrusted && this.state.visible && (GG => !GG.repeat && !iL.has(GG.key) && !(0, VL.c)(GG.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(GG.key))(GG) && this.hide()
          },
          SG = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...dL(this.state.target)
            })
          };
        document.addEventListener("focusin", bG, !0), document.addEventListener("focusout", ZG, !0), window.addEventListener("keydown", wG, !0), window.addEventListener("resize", SG);
        const LG = YG.l.subscribe(aS.d, (() => {
            this.openChat()
          })),
          yG = YG.l.subscribe(zL.c, (GG => {
            this.openForField(GG)
          }));
        return () => {
          GG(), document.removeEventListener("focusin", bG, !0), document.removeEventListener("focusout", ZG, !0), window.removeEventListener("keydown", wG, !0), window.removeEventListener("resize", SG), YG.l.unsubscribe(LG), YG.l.unsubscribe(yG), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const GG = (0, mZ.b)();
        GG ? document.activeElement !== GG.input ? (this.clearPendingChat(), this.pendingChatInput = GG.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), GG.open()) : this.open(GG.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(GG) {
        (0, tG.e)(GG) ? (document.activeElement !== GG && GG.focus(), document.activeElement === GG && this.open(GG)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", GG)
      }
      open(GG) {
        var bG;
        if (this.clearPendingChat(), this.ownedField = GG, this.state.visible && this.state.target === GG) return;
        this.restoreInputMode(), (0, tG.j)(GG), this.savedInputMode = GG.getAttribute("inputmode"), GG.setAttribute("inputmode", "none");
        const ZG = {
          ...QL,
          visible: !0,
          target: GG,
          kind: (0, mZ.d)(GG) ? "chat" : null !== (bG = (0, mZ.c)(GG).kind) && void 0 !== bG ? bG : null,
          accentsFirst: (wG = rS.d.get().getCurrentLanguageCode(), BS.has(wG)),
          ...dL(GG)
        };
        var wG;
        const SG = hL(ZG),
          LG = ((GG, bG) => {
            for (let ZG = 0; ZG < GG.length; ZG++) {
              const wG = GG[ZG].findIndex((GG => "char" === GG.type && GG.char === bG));
              if (-1 !== wG) return {
                row: ZG,
                col: wG
              }
            }
            return null
          })(SG, "q");
        this.padInput.reset(), this.setState({
          ...ZG,
          focus: LG,
          preferredX: SL(SG, LG)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(QL))
      }
      onFrame(GG) {
        if (this.releaseLostField()) return;
        const bG = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(GG) : (0, tG.e)(bG) && this.padInput.onHiddenFrame(GG, bG)
      }
      releaseLostField() {
        const GG = this.ownedField;
        return !(null === GG || GG.isConnected && document.activeElement === GG) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: GG
        } = this.state;
        GG && (null === this.savedInputMode ? GG.removeAttribute("inputmode") : GG.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var WL = ZG(3617);
    const mL = new Map(RS.map((GG => {
        let {
          command: bG,
          action: ZG
        } = GG;
        return [bG, ZG]
      }))),
      IL = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      FL = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Ny: "controller:keyboardTargetBookTitle"
      },
      vL = GG => {
        const bG = (() => {
          const [, GG] = (0, PG.useReducer)((GG => GG + 1), 0);
          return GG
        })();
        (0, PG.useEffect)((() => {
          if (!GG) return;
          const ZG = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const SG of ZG) GG.addEventListener(SG, bG);
          document.addEventListener("selectionchange", bG);
          const wG = new MutationObserver(bG);
          return wG.observe(GG, {
            attributeFilter: ["placeholder"]
          }), () => {
            wG.disconnect();
            for (const wG of ZG) GG.removeEventListener(wG, bG);
            document.removeEventListener("selectionchange", bG)
          }
        }), [GG, bG])
      },
      aL = GG => {
        GG.preventDefault()
      },
      cL = GG => {
        "mouse" !== GG.pointerType && GG.preventDefault()
      },
      lL = () => {
        var GG;
        const {
          t: bG
        } = (0, SG.w)(), ZG = (() => {
          const [GG, bG] = (0, PG.useState)(CL.getState());
          return (0, PG.useEffect)((() => CL.subscribe((() => {
            bG(CL.getState())
          }))), []), GG
        })(), wG = (0, QG.B)(), LG = (0, PG.useRef)(null);
        (0, fG.r)(), (0, QG.F)(), (0, PG.useEffect)((() => {
          const GG = CL.install(),
            bG = null;
          return () => {
            GG(), null === bG || void 0 === bG || bG()
          }
        }), []);
        const yG = (0, PG.useMemo)((() => pL.map((GG => bG(GG)))), [bG]),
          kG = ZG.visible && "chat" === ZG.kind ? ZG.target : null;
        vL(kG);
        const UG = null !== (GG = null === kG || void 0 === kG ? void 0 : kG.value) && void 0 !== GG ? GG : "",
          YG = ((GG, bG, ZG) => {
            if (!GG.startsWith("/")) return [];
            const wG = [];
            for (let SG = bG.length - 1; SG >= 0 && wG.length < ZG; SG--) {
              const ZG = bG[SG].trim();
              ZG.startsWith(GG) && ZG !== GG && !wG.includes(ZG) && wG.push(ZG)
            }
            return wG
          })(UG, UG.startsWith("/") ? (0, WL.g)() : [], pL.length),
          pG = UG.startsWith("/"),
          KG = pG ? pL.map(((GG, bG) => {
            var ZG;
            return null !== (ZG = YG[bG]) && void 0 !== ZG ? ZG : ""
          })) : yG;
        if ((0, PG.useEffect)((() => {
            CL.editor.setPhraseRow(KG, pG)
          })), (0, PG.useEffect)((() => {
            const GG = LG.current;
            if (GG) return GG.addEventListener("touchstart", aL, {
              passive: !1
            }), () => {
              GG.removeEventListener("touchstart", aL)
            }
          }), [ZG.visible]), !ZG.visible) return null;
        const hG = hL(ZG),
          dG = wL(hG),
          JG = GG => "char" === GG.type ? YL(GG.char, ZG.page, ZG.shift) : "phrase" === GG.type ? KG[GG.phraseIndex] : (GG => {
            switch (GG) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ZG.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return IL[GL(ZG.page, ZG.accentsFirst)[GG]];
              case "space":
                return bG("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return bG("chat" === ZG.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(GG.command),
          rG = GG => {
            CL.editor.pressKey(GG)
          };
        return (0, sG.jsxs)("div", {
          ref: LG,
          className: AG()(mZ.j, "top" === ZG.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ZG.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": hG.length,
            "--pad-keyboard-height": `${ZG.maxHeightPx}px`
          },
          onPointerDown: cL,
          onMouseDown: aL,
          children: [(0, sG.jsx)(jL, {
            target: ZG.target,
            label: ZG.kind ? bG(FL[ZG.kind]) : ZG.target.placeholder || bG("controller:keyboardTargetText")
          }), (0, sG.jsx)("div", {
            className: "PadKeyboardRows",
            children: hG.map(((GG, bG) => (0, sG.jsx)("div", {
              className: AG()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === GG[0].type
              }),
              children: GG.map(((GG, SG) => {
                const LG = wG && ZG.focus.row === bG && ZG.focus.col === SG,
                  yG = "command" === GG.type ? mL.get(GG.command) : void 0;
                return (0, sG.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: GG.width / dG * 100 + "%"
                  },
                  children: (0, sG.jsxs)("div", {
                    className: AG()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: LG,
                      PadKeyboardKeyCommand: "command" === GG.type,
                      PadKeyboardKeyPhrase: "phrase" === GG.type,
                      PadKeyboardKeyActive: "command" === GG.type && "shift" === GG.command && "off" !== ZG.shift,
                      PadKeyboardKeySubmit: "command" === GG.type && "submit" === GG.command
                    }),
                    role: "button",
                    onClick: () => {
                      rG({
                        row: bG,
                        col: SG
                      })
                    },
                    onTouchEnd: GG => {
                      var ZG, wG;
                      GG.preventDefault(), ZG = GG.changedTouches[0], wG = GG.currentTarget.getBoundingClientRect(), ZG && ZG.clientX >= wG.left && ZG.clientX <= wG.right && ZG.clientY >= wG.top && ZG.clientY <= wG.bottom && rG({
                        row: bG,
                        col: SG
                      })
                    },
                    children: [(0, sG.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: JG(GG)
                    }), wG && yG && (0, sG.jsx)(uS, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, VG.j)(yG)
                    })]
                  })
                }, SG)
              }))
            }, bG)))
          })]
        })
      },
      jL = GG => {
        let {
          target: bG,
          label: ZG
        } = GG;
        vL(bG);
        const wG = (0, PG.useRef)(null),
          SG = (0, PG.useRef)(null),
          LG = bG instanceof HTMLTextAreaElement;
        (0, PG.useLayoutEffect)((() => {
          const GG = wG.current,
            bG = SG.current;
          LG ? GG.scrollTop = bG.offsetTop - GG.clientHeight / 2 : GG.scrollLeft = bG.offsetLeft - GG.clientWidth / 2
        }));
        const {
          value: yG,
          start: kG,
          end: UG
        } = (0, tG.n)(bG), YG = "password" === bG.type ? "\u2022".repeat(yG.length) : yG;
        return (0, sG.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, sG.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ZG
          }), (0, sG.jsxs)("div", {
            ref: wG,
            className: AG()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: LG
            }),
            children: [(0, sG.jsx)("span", {
              children: YG.slice(0, kG)
            }), (0, sG.jsx)("span", {
              ref: SG,
              className: "PadKeyboardCaret"
            }), kG !== UG && (0, sG.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: YG.slice(kG, UG)
            }), (0, sG.jsx)("span", {
              children: YG.slice(UG)
            }), 0 === YG.length && bG.placeholder && bG.placeholder !== ZG && (0, sG.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: bG.placeholder
            })]
          })]
        })
      };
    var PL = ZG(1343),
      ML = ZG(3406);
    const AL = function() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return bG.map(VG.j)
      },
      sL = (GG, bG) => {
        const ZG = RZ(GG);
        return ZG ? [{
          glyphs: [ZG],
          labelKey: bG
        }] : []
      },
      qL = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      nL = "--pad-hint-bar-clearance",
      gL = "[data-pad-hint-bar-avoid]",
      eL = GG => {
        const bG = [];
        for (const ZG of GG)(0, xG.n)(ZG) && bG.push(ZG.getBoundingClientRect());
        return bG
      },
      RL = GG => {
        if (!GG) return null;
        const bG = Vw(),
          ZG = bG ? eL(((GG, bG) => {
            const ZG = GG.closest(gL);
            return ZG ? [ZG] : ("popup" === bG ? document : GG).querySelectorAll(gL)
          })(bG.root, bG.layer.kind)) : [],
          wG = !bG || bG.root.hasAttribute("data-pad-shows-hud");
        if (((0, ML.k)(null === bG || void 0 === bG ? void 0 : bG.layer.kind, (0, ML.n)()) || wG) && ZG.push(...eL(document.querySelectorAll(qL.join(",")))), 0 === ZG.length) return null;
        const {
          width: SG,
          height: LG
        } = GG.getBoundingClientRect(), yG = window.innerHeight - 8, kG = (0, ML.t)(yG, {
          width: SG,
          height: LG
        }, window.innerWidth / 2, ZG, 8);
        return kG === yG ? null : Math.round(window.innerHeight - kG)
      },
      TL = GG => {
        const bG = document.documentElement.style,
          ZG = GG ? `${Math.round(window.innerHeight-GG.getBoundingClientRect().top)}px` : "";
        bG.getPropertyValue(nL) !== ZG && (ZG ? bG.setProperty(nL, ZG) : bG.removeProperty(nL))
      },
      HL = () => {
        const {
          t: GG
        } = (0, SG.w)(), {
          hideButtonHints: bG
        } = (0, fG.r)(), ZG = (0, QG.B)(), [wG, LG] = (0, PG.useState)(!1), [yG, YG] = (0, PG.useState)([]), [hG, dG] = (0, PG.useState)(null), JG = (0, PG.useRef)(null), rG = (0, PG.useRef)(null);
        (0, JS.g)(zL.b, (GG => {
          LG(GG)
        })), (0, JS.g)(ML.r, (() => {
          var GG;
          null === (GG = rG.current) || void 0 === GG || GG.call(rG)
        }));
        const zG = ZG && !bG && !wG;
        return (0, PG.useEffect)((() => {
          if (!zG) return;
          let GG = null;
          const bG = () => {
            const bG = (() => {
                var GG;
                const bG = pG.b.getActiveConsumerName(),
                  ZG = (0, ML.g)();
                if (ZG) {
                  const GG = (0, VG.j)(ZG),
                    bG = "emoteWheel" === ZG && "wheel" === (0, fG.i)().emoteButton || !(0, KG.F)(pG.b.getLastFrame().values, GG) ? {
                      glyphs: AL("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [GG],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, VG.v)(GG)],
                    labelKey: "controller:wheelChoose"
                  }, bG, {
                    glyphs: AL("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const wG = Vw();
                if (!wG || "focus" !== bG && "cursor" !== bG) return (0, ML.c)(VG.j);
                const SG = [],
                  LG = {
                    glyphs: AL("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  yG = (0, RG.u)(wG.root),
                  kG = yG ? !(0, xG.s)(yG) : Boolean(wG.layer.close),
                  YG = !yG && wG.layer.closeLabelKey ? wG.layer.closeLabelKey : LG.labelKey,
                  QG = kG ? [{
                    ...LG,
                    labelKey: YG
                  }] : [],
                  hG = vZ(wG.layer.kind) ? [{
                    glyphs: AL("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === bG) return SG.push({
                  glyphs: AL("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), SG.push({
                  glyphs: AL("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), SG.push(...QG), SG.push(...hG), SG.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Cw() && SG.push({
                  glyphs: AL("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), SG;
                const dG = GS.getFocused();
                dG && (0, vw.d)(dG) ? SG.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : dG && (0, RG.C)(dG) ? SG.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : SG.push({
                  glyphs: AL("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const JG = dG ? null === (GG = fZ(dG)) || void 0 === GG ? void 0 : GG.dataset.padSecondary : void 0;
                JG && SG.push({
                  glyphs: AL("menuSecondary"),
                  labelKey: JG
                }), SG.push(...null !== dG && void 0 !== dG && dG.closest("[data-pad-friends-column]") ? [LG] : QG), SG.push(...hG);
                const rG = "home" === wG.layer.kind;
                tZ(wG.root) || !PZ(wG.root) && !DZ(wG) ? rG && SG.push({
                  glyphs: AL("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : SG.push({
                  glyphs: AL("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), rG && (SG.push(...sL("inventory", "controller:menusFriends")), JG || SG.push({
                  glyphs: AL("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), SG.push(...sL("pause", "controller:menusSettings")), SG.push(...sL("leaderboard", "controller:menusNotifications")));
                const zG = UG.e.get("openEverythingMenuName");
                return "inGame" === UG.e.get("gameState") && "popup" !== wG.layer.kind && null !== zG && ((0, UZ.m)(zG) ? SG.push(...sL("leaderboard", "controller:menusClose")) : zG !== kZ.u.LOBBY_LEADERBOARD && SG.push(...sL("leaderboard", "controller:menusLobby"))), SG.push({
                  glyphs: AL("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), SG
              })(),
              ZG = RL(JG.current),
              wG = ((GG, bG) => `${GG.map((GG=>`${GG.glyphs.join("+")}:${GG.labelKey}`)).join("|")}@${bG}`)(bG, ZG);
            wG !== GG && (GG = wG, (0, kG.unstable_batchedUpdates)((() => {
              YG(bG), dG(ZG)
            }))), TL(JG.current)
          };
          bG(), rG.current = bG;
          const ZG = requestAnimationFrame(bG),
            wG = setInterval(bG, 150);
          return () => {
            rG.current = null, cancelAnimationFrame(ZG), clearInterval(wG), TL(null)
          }
        }), [zG]), (0, PG.useLayoutEffect)((() => {
          if (!zG) return;
          if (0 === yG.length) return void TL(null);
          const GG = RL(JG.current);
          GG === hG ? TL(JG.current) : dG(GG)
        }), [zG, yG, hG]), zG && 0 !== yG.length ? (0, sG.jsx)("div", {
          ref: JG,
          className: "PadButtonHintBar SmallTextBold",
          style: null === hG ? void 0 : {
            bottom: hG
          },
          "aria-hidden": !0,
          children: yG.map((bG => (0, sG.jsxs)("div", {
            className: "PadButtonHint",
            children: [bG.glyphs.map((GG => (0, sG.jsx)(uS, {
              glyph: GG,
              className: "PadButtonHintGlyph"
            }, GG))), (0, sG.jsx)("span", {
              children: GG(bG.labelKey)
            })]
          }, bG.labelKey)))
        }) : null
      };
    var tL = ZG(1709);
    const DL = [xG.b, "label", "[data-pad-slider]"].join(","),
      NL = "data-pad-cursor-probe",
      OL = GG => {
        var bG;
        const ZG = (GG => {
          const bG = [];
          for (let wG = GG; wG && wG !== document.body && wG !== document.documentElement && (bG.push(wG), !(bG.length > 8)); wG = wG.parentElement);
          const ZG = document.documentElement.classList.contains(QG.t) ? bG[bG.length - 1] : void 0;
          null === ZG || void 0 === ZG || ZG.setAttribute(NL, "");
          try {
            return bG.map((GG => ({
              element: GG,
              cursor: getComputedStyle(GG).cursor
            })))
          } finally {
            null === ZG || void 0 === ZG || ZG.removeAttribute(NL)
          }
        })(GG);
        if ("pointer" !== (null === (bG = ZG[0]) || void 0 === bG ? void 0 : bG.cursor)) return null;
        let wG = 0;
        for (; wG + 1 < ZG.length && "pointer" === ZG[wG + 1].cursor;) wG++;
        return ZG[wG].element
      },
      xL = (GG, bG, ZG, wG) => {
        const SG = wG.root.contains(GG) ? wG.root : null;
        for (let LG = GG; LG && LG !== document.body && LG !== document.documentElement; LG = LG.parentElement) {
          if (LG instanceof HTMLElement && WG(LG, bG) && aG(LG, bG, ZG)) return LG;
          if (LG === SG) break
        }
        return "home" === wG.layer.kind || "gamePage" === wG.layer.kind ? ((GG, bG) => {
          const ZG = document.scrollingElement;
          return ZG instanceof HTMLElement && ![document.documentElement, document.body].some((bG => {
            const ZG = getComputedStyle(bG),
              wG = "y" === GG ? ZG.overflowY : ZG.overflowX;
            return "hidden" === wG || "clip" === wG
          })) && aG(ZG, GG, bG) ? ZG : null
        })(bG, ZG) : null
      };
    const BL = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, hG.d)(KG.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const GG = pG.b.register({
              name: "cursor",
              isActive: () => "cursor" === Ww(),
              onFrame: GG => {
                this.onFrame(GG)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: GG => (0, pG.d)(GG) || GG === (0, VG.j)("menuConfirm") && (0, RG.G)((0, QG.d)())
            }),
            bG = (0, Zw.k)((GG => {
              const bG = GG.getRoot();
              bG && this.layerPoints.delete(bG), bG === this.layerRoot && (this.layerRoot = null)
            })),
            ZG = YG.l.subscribe("appManagerUpdated|activeInputDevice", (GG => {
              "gamepad" !== GG && this.active && !this.hidden && this.hide()
            }));
          return () => {
            GG(), bG(), YG.l.unsubscribe(ZG), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, QG.l)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.xh()
        }
        activate(GG) {
          this.active = !0, this.hidden = !1;
          const bG = Xw();
          !bG || bG.root && bG.root !== GG.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(GG), this.jumpTo(bG.point))
        }
        jumpTo(GG) {
          this.state = {
            x: GG.x,
            y: GG.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.xh())
        }
        onFrame(GG) {
          const bG = Vw();
          if (!bG) return;
          if (this.active || this.activate(bG), this.followPage(bG)) return;
          this.followLayer(bG);
          const ZG = GG.wokeDevice ? (0, QG.d)() : null;
          if (ZG && this.jumpTo(ZG), !(0, QG.l)()) return void this.hide();
          const wG = (0, VG.j)("menuToggleCursor");
          if (GG.wasPressed(wG)) return pG.b.consumeButton(wG), void ow(this.getHandoff(null));
          if (this.handBackToFocus(GG)) return;
          const SG = (0, VG.j)("menuConfirm"),
            LG = (0, VG.j)("menuSecondary");
          if (GG.wasPressed((0, VG.j)("menuBack"))) return (0, RG.m)(bG.root) || (0, RG.f)(bG.root) || pw(), void this.xh();
          if (xZ(null, GG, bG)) return GG.wasReleased(SG) && this.press && (this.updateHit(!1), this.updateConfirm(GG, SG)), void this.xh();
          if (document.pointerLockElement) return void this.hide();
          const yG = mw() ? {
              x: 0,
              y: 0
            } : (GG => {
              const bG = (GG, bG) => (GG ? 1 : 0) - (bG ? 1 : 0);
              return {
                x: bG(GG.isHeld("Right"), GG.isHeld("Left")),
                y: bG(GG.isHeld("Down"), GG.isHeld("Up"))
              }
            })(GG),
            kG = (0, fG.i)().moveDeadzone,
            UG = ((GG, bG) => {
              const ZG = (0, KG.i)(GG, EG(bG));
              return Math.hypot(ZG.x, ZG.y)
            })(GG.leftStick, kG) > 0 || 0 !== yG.x || 0 !== yG.y;
          if (this.hidden) {
            const bG = GG.wasPressed(SG),
              ZG = GG.wasPressed(LG);
            if (!UG && !uG(GG.rightStick) && !bG && !ZG && !GG.wokeDevice) return void this.xh();
            if (this.hidden = !1, this.updateHit(!1), bG || ZG) return bG && (this.press = {
              kind: "ignored"
            }, GG.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.xh()
          }
          this.movePendingPageStart(UG);
          const YG = this.getPoint();
          this.state = XG(this.state, {
            stick: GG.leftStick,
            moveDeadzone: kG,
            dpad: yG,
            dtMs: GG.dtMs,
            cursorSpeedPercent: (0, fG.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const hG = this.state.x !== YG.x || this.state.y !== YG.y,
            dG = [SG, LG].some((bG => GG.wasPressed(bG) || GG.wasReleased(bG)));
          (hG || dG || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(hG), this.updateConfirm(GG, SG), this.updateSecondary(GG, LG), this.updateScroll(GG, bG), this.xh()
        }
        followPage(GG) {
          const bG = "home" === GG.layer.kind || "gamePage" === GG.layer.kind,
            ZG = this.page;
          if (this.page = bG ? {
              key: (0, Zw.s)(GG.layer),
              root: GG.root
            } : null, !this.page || !ZG || ZG.root !== GG.root || ZG.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(GG), "hybrid" === Ew()) return Jw = null, hw = null, rw.lock(), !0;
          const {
            key: wG
          } = this.page;
          return this.pendingPageStart = {
            root: GG.root,
            key: wG,
            returning: GS.notePageEnteredByCursor(wG),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(GG) {
          const bG = this.pendingPageStart;
          if (!bG) return;
          if (GG || bG.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ZG = bG.returning ? GS.recallStop(bG.root, bG.key) : null;
          if (!ZG && bG.returning && performance.now() - bG.enteredAtMs < 1e3) return;
          const wG = null !== ZG && void 0 !== ZG ? ZG : GS.pickInitial(bG.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: bG.enteredAtMs
          });
          wG && (this.pendingPageStart = null, this.jumpTo((0, RG.y)(wG)))
        }
        setLayer(GG) {
          this.layerRoot = GG.root, this.layerOrder = GG.order
        }
        followLayer(GG) {
          var bG;
          if (GG.root === this.layerRoot) return;
          null !== (bG = this.layerRoot) && void 0 !== bG && bG.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ZG = this.layerPoints.get(GG.root),
            wG = ZG && GG.order <= this.layerOrder ? ZG : GS.getLayerStartPoint(GG.root);
          this.setLayer(GG), this.jumpTo(wG)
        }
        getHandoff(GG) {
          var bG;
          return {
            point: this.getPoint(),
            element: null !== (bG = this.interactive) && void 0 !== bG ? bG : this.findDraggedSliderNearby(),
            direction: GG
          }
        }
        findDraggedSliderNearby() {
          const GG = this.draggedSlider;
          if (null === GG || void 0 === GG || !GG.isConnected) return null;
          const bG = GG.getBoundingClientRect(),
            {
              y: ZG
            } = this.getPoint();
          return ZG >= bG.top - 40 && ZG <= bG.bottom + 40 ? GG : null
        }
        handBackToFocus(GG) {
          if (!mw()) return !1;
          const bG = KG.z.find((bG => GG.wasPressed(bG)));
          return !!bG && (ZG = this.getHandoff(bG), Jw = Qw(ZG), hw = null, rw.lock(), pG.b.handOffHeldInput(), !0);
          var ZG
        }
        getAssistContext() {
          const GG = this.interactive;
          if (null === GG || void 0 === GG || !GG.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const bG = GG.getBoundingClientRect();
          if (bG.width > .4 * window.innerWidth || bG.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ZG = (0, fG.i)().cursorMagnetism && !(0, tL.d)(GG) && !GG.closest("[data-pad-slider]"),
            wG = this.magnet && this.magnet !== GG && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : bG;
          return {
            overInteractive: !0,
            magnetTarget: ZG ? {
              x: wG.left + wG.width / 2,
              y: wG.top + wG.height / 2
            } : null
          }
        }
        updateHit(GG) {
          this.lastHitTestMs = performance.now();
          const bG = this.getPoint(),
            ZG = document.elementFromPoint(bG.x, bG.y),
            wG = ZG && !(0, JG.q)(ZG) && (GG => {
              var bG;
              const ZG = Vw();
              return !(ZG && !ZG.root.contains(GG) && !GG.closest(".tooltip-container")) || !(null !== (bG = document.getElementById("root")) && void 0 !== bG && bG.contains(GG))
            })(ZG) ? ZG : null;
          if (wG !== this.hit) return (0, RG.o)(this.hit, wG, bG), this.hit = wG, void this.setInteractive(wG ? (GG => {
            const bG = GG.closest(DL);
            if (bG) {
              var ZG, wG;
              const GG = null !== (ZG = null === (wG = bG.parentElement) || void 0 === wG ? void 0 : wG.closest("[data-pad-focusable]")) && void 0 !== ZG ? ZG : bG;
              return (0, xG.s)(GG) ? {
                element: null,
                magnet: null
              } : {
                element: GG,
                magnet: bG
              }
            }
            const SG = OL(GG);
            return {
              element: SG,
              magnet: SG
            }
          })(wG) : {
            element: null,
            magnet: null
          });
          GG && wG && (0, RG.o)(wG, wG, bG)
        }
        setInteractive(GG) {
          let {
            element: bG,
            magnet: ZG
          } = GG;
          this.interactive = bG, this.magnet = ZG
        }
        clearHover() {
          this.hit && (0, RG.o)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const GG = this.hit;
          if (!GG || (0, RG.C)(GG)) return {
            kind: "ignored"
          };
          const bG = (0, vw.d)(GG),
            ZG = GG.closest("[data-pad-slider]");
          return bG && ZG ? {
            kind: "slider",
            slider: ZG,
            adjuster: bG
          } : ((0, RG.q)(GG, this.getPoint()), {
            kind: "pointer",
            target: GG
          })
        }
        applySliderFraction(GG) {
          var bG;
          const ZG = GG.slider.getBoundingClientRect(),
            wG = ZG.height > ZG.width,
            SG = null === (bG = GG.slider.querySelector("[data-pad-slider-handle]")) || void 0 === bG ? void 0 : bG.getBoundingClientRect(),
            LG = SG ? wG ? SG.height : SG.width : 0,
            yG = (wG ? ZG.height : ZG.width) - LG;
          if (yG <= 0) return;
          const kG = wG ? ZG.bottom - LG / 2 - this.state.y : this.state.x - ZG.left - LG / 2;
          GG.adjuster.setFraction(Math.max(0, Math.min(1, kG / yG)))
        }
        updateConfirm(GG, bG) {
          GG.wasPressed(bG) && (this.press = GG.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ZG = this.press;
          if (!ZG) return;
          if (GG.isHeld(bG)) return "slider" === ZG.kind && this.applySliderFraction(ZG), void this.updateRepeat();
          this.press = null;
          const wG = this.repeated;
          if (this.endRepeat(), !GG.wasReleased(bG)) return void this.endPressWithoutClick(ZG);
          const SG = this.getPoint(),
            LG = this.hit;
          if ("slider" === ZG.kind && ZG.adjuster.endDrag(), "pointer" === ZG.kind) {
            const GG = null !== LG && void 0 !== LG ? LG : ZG.target.isConnected ? ZG.target : null;
            GG && (0, RG.r)(GG, SG);
            const bG = LG && ZG.target.isConnected && !wG ? ((GG, bG) => {
              for (let ZG = GG; ZG; ZG = ZG.parentElement)
                if (ZG.contains(bG)) return ZG;
              return null
            })(ZG.target, LG) : null;
            bG && (GS.noteCursorActivation(bG), (0, JG.g)(bG, new MouseEvent("click", (0, RG.N)(SG, 0, 0))), (0, RG.i)(bG), (0, RG.L)(bG) && (0, RG.J)(bG))
          }
        }
        beginRepeat() {
          var GG, bG, ZG;
          const wG = null !== (GG = null === (bG = this.hit) || void 0 === bG ? void 0 : bG.closest("[data-pad-repeat]")) && void 0 !== GG ? GG : null;
          this.repeatStop = wG, this.repeatKey = null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.getAttribute("data-pad-repeat")) && void 0 !== ZG ? ZG : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const GG = this.repeatStop;
          if (!GG) return;
          const bG = this.hit;
          GG.isConnected && !(0, xG.s)(GG) && GG.getAttribute("data-pad-repeat") === this.repeatKey && bG && GG.contains(bG) ? GG.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, GS.noteCursorActivation(GG), (0, JG.g)(GG, new MouseEvent("click", (0, RG.N)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(GG) {
          "slider" === GG.kind && GG.adjuster.endDrag(), "pointer" === GG.kind && GG.target.isConnected && (0, RG.r)(GG.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(GG, bG) {
          GG.wasPressed(bG) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !GG.isHeld(bG) && (this.secondaryArmed = !1, GG.wasReleased(bG) && this.hit && (0, RG.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(GG, bG) {
          const ZG = iG(GG.rightStick, GG.dtMs);
          if (0 === ZG.x && 0 === ZG.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ZG.x,
            y: this.scrollRemainder.y + ZG.y
          };
          const wG = Math.trunc(this.scrollRemainder.x),
            SG = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - wG,
            y: this.scrollRemainder.y - SG
          };
          const LG = this.hit;
          if (!LG) return;
          let yG = !1;
          if (0 !== SG) {
            const GG = xL(LG, "y", SG > 0 ? 1 : -1, bG);
            GG && (GG.scrollBy({
              top: SG,
              behavior: "instant"
            }), yG = !0)
          }
          if (0 !== wG) {
            const GG = xL(LG, "x", wG > 0 ? 1 : -1, bG);
            GG && (GG.scrollBy({
              left: wG,
              behavior: "instant"
            }), yG = !0)
          }
          yG && (this.lastHitTestMs = -1 / 0)
        }
        xh() {
          HG.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Gy = () => {
        const GG = (0, PG.useMemo)((() => new gG), []),
          bG = (0, QG.B)();
        return (0, PG.useEffect)((() => {
          if (!bG) return;
          let ZG = 0,
            wG = {
              of: null,
              atMs: 0,
              list: []
            };
          const SG = document.getElementsByClassName(Iw),
            LG = GG => {
              for (const bG of [...SG]) bG !== GG && bG.classList.remove(Iw)
            },
            yG = () => {
              var bG;
              ZG = requestAnimationFrame(yG);
              const SG = (() => {
                const GG = GS.getFocused();
                if (GS.isActive() && null !== GG && void 0 !== GG && GG.isConnected) return GG;
                const bG = BL.getHighlighted();
                return null !== bG && void 0 !== bG && bG.isConnected ? bG : null
              })();
              LG(SG), SG && !SG.classList.contains(Iw) && SG.classList.add(Iw);
              const kG = null !== (bG = null === SG || void 0 === SG ? void 0 : SG.closest("[data-pad-reticle-box]")) && void 0 !== bG ? bG : SG;
              GG.show(kG ? ((GG, bG) => {
                let ZG = GG.left,
                  wG = GG.top,
                  SG = GG.right,
                  LG = GG.bottom;
                for (const yG of bG) {
                  if (!yG) continue;
                  const GG = lG(yG);
                  ZG = Math.max(ZG, GG.left), wG = Math.max(wG, GG.top), SG = Math.min(SG, GG.right), LG = Math.min(LG, GG.bottom)
                }
                return SG <= ZG || LG <= wG ? null : {
                  left: ZG,
                  top: wG,
                  width: SG - ZG,
                  height: LG - wG
                }
              })(kG.getBoundingClientRect(), (GG => {
                const bG = performance.now();
                return (wG.of !== GG || bG - wG.atMs > 500) && (wG = {
                  of: GG,
                  atMs: bG,
                  list: [mG(GG, "y"), mG(GG, "x")]
                }), wG.list
              })(kG)) : null)
            };
          return ZG = requestAnimationFrame(yG), () => {
            cancelAnimationFrame(ZG), LG(null), GG.hide()
          }
        }), [bG, GG]), (0, sG.jsx)(eG, {
          placer: GG,
          className: "PadFocusRing"
        })
      },
      by = (GG, bG) => {
        GG.style.transform = `translate3d(${bG.x}px, ${bG.y}px, 0)`, GG.classList.toggle("Visible", bG.visible), GG.classList.toggle("Pressed", bG.pressed)
      },
      Zy = () => {
        const GG = (0, PG.useRef)(null);
        return (0, PG.useEffect)((() => {
          const bG = HG.subscribe((bG => {
            GG.current && by(GG.current, bG)
          }));
          return GG.current && by(GG.current, HG.get()), bG
        }), []), (0, sG.jsx)("div", {
          ref: GG,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, sG.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      wy = "#ncmp__modal.ncmp__active",
      Sy = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(wy) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(wy),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Ly = "PadOverThirdParty",
      yy = new Set(Sy.map((GG => GG.id))),
      ky = () => {
        const GG = Sy.map((GG => {
            let {
              id: bG,
              find: ZG,
              startSelectors: wG
            } = GG;
            return (0, Zw.o)({
              id: bG,
              kind: "popup",
              getRoot: () => {
                const GG = ZG(),
                  bG = GG ? ((GG, bG) => {
                    var ZG;
                    for (const wG of bG) {
                      const bG = GG.querySelector(wG);
                      if (bG) return bG
                    }
                    return null !== (ZG = [...GG.querySelectorAll("button")].find((GG => !GG.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZG ? ZG : null
                  })(GG, wG) : null;
                if (GG && bG && !bG.hasAttribute("data-pad-default-focus")) {
                  for (const bG of GG.querySelectorAll("[data-pad-default-focus]")) bG.removeAttribute("data-pad-default-focus");
                  for (const bG of GG.querySelectorAll("[data-pad-hint-bar-avoid]")) bG.removeAttribute("data-pad-hint-bar-avoid");
                  bG.setAttribute("data-pad-default-focus", ""), ((GG, bG) => {
                    let ZG = GG;
                    for (let wG = GG.parentElement; wG && bG.contains(wG) && !(wG.getBoundingClientRect().height >= window.innerHeight / 2); wG = wG.parentElement) ZG = wG;
                    return ZG
                  })(bG, GG).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return GG
              },
              close: null,
              memoryKey: null
            })
          })),
          bG = document.documentElement,
          ZG = yG.d.onFrame((() => {
            const GG = (0, QG.l)() ? Vw() : null,
              ZG = !!GG && (wG = GG.layer, yy.has(wG.id));
            var wG;
            bG.classList.contains(Ly) !== ZG && bG.classList.toggle(Ly, ZG)
          }));
        return () => {
          for (const bG of GG) bG();
          ZG(), bG.classList.remove(Ly)
        }
      },
      Uy = "PadLargePointer",
      Yy = () => {
        (0, PG.useEffect)((() => {
          const GG = (0, JG.i)(document.body),
            bG = GS.install(),
            ZG = BL.install(),
            wG = ky();
          return () => {
            GG(), bG(), ZG(), wG()
          }
        }), []);
        const {
          largePointer: GG
        } = (0, fG.r)(), bG = (0, PL.w)() && GG;
        return (0, PG.useEffect)((() => {
          if (bG) return document.documentElement.classList.add(Uy), () => {
            document.documentElement.classList.remove(Uy)
          }
        }), [bG]), (0, kG.createPortal)((0, sG.jsxs)(sG.Fragment, {
          children: [(0, sG.jsx)(HL, {}), (0, sG.jsx)(Gy, {}), (0, sG.jsx)(Zy, {})]
        }), document.body)
      };
    var Vy = ZG(8837),
      py = ZG(8854),
      fy = ZG(8842);
    ZG(8860);
    const Qy = (GG, bG) => {
        const [ZG, wG] = (0, PG.useState)(!1), [SG, LG] = (0, PG.useState)(null), yG = (0, PG.useRef)(null), kG = (0, PG.useCallback)((GG => {
          yG.current = GG, LG(GG)
        }), []), UG = (0, PG.useCallback)((() => {
          wG(!1), kG(null)
        }), [kG]), VG = (0, PG.useCallback)((() => {
          wG(!0)
        }), []), pG = (0, PG.useCallback)(((GG, bG) => {
          kG((0, fy.E)(GG, bG, yG.current))
        }), [kG]);
        (0, PG.useLayoutEffect)((() => (bG(ZG), (0, ML.z)(GG, ZG), YG.l.xh(ML.r), () => {
          bG(!1), (0, ML.z)(GG, !1), YG.l.xh(ML.r)
        })), [ZG, GG, bG]), (0, JS.g)("appManagerUpdated|activeInputDevice", (GG => {
          "gamepad" !== GG && UG()
        })), (0, JS.g)("appManagerUpdated|gameState", (GG => {
          "inGame" !== GG && UG()
        }));
        const fG = () => {
          (0, UZ.t)() && UG()
        };
        return (0, JS.g)("appManagerUpdated|openEverythingMenuName", fG), (0, JS.g)("appManagerUpdated|openInGameMenuName", fG), {
          open: ZG,
          picked: SG,
          pickedRef: yG,
          show: VG,
          aim: pG,
          close: UG
        }
      },
      Ky = GG => {
        let {
          className: bG,
          slotCount: ZG,
          picked: wG,
          slotLabel: SG,
          renderSlot: LG,
          centre: yG
        } = GG;
        const kG = Array.from({
          length: ZG
        }, ((GG, bG) => bG));
        return (0, sG.jsx)("div", {
          className: AG()("EmoteWheelOverlay PadRadialWheel", bG),
          children: (0, sG.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * fy.r + "rem",
              height: 2 * fy.r + "rem"
            },
            children: [(0, sG.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${fy.m} ${fy.m}`,
              children: [kG.map((GG => (0, sG.jsx)("path", {
                d: (0, fy.v)(GG, ZG, fy.e, fy.i, fy.l),
                className: AG()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: GG === wG
                }),
                "aria-label": SG(GG)
              }, GG))), (0, sG.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: fy.e,
                cy: fy.e,
                r: fy.l
              }), (0, sG.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: fy.e,
                cy: fy.e,
                r: fy.i
              }), null !== wG && (0, sG.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, fy.v)(wG, ZG, fy.e, fy.i, fy.l)
              })]
            }), kG.map((GG => {
              const bG = (0, fy.B)(GG, ZG);
              return (0, sG.jsx)("div", {
                className: AG()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: GG === wG
                }),
                style: {
                  left: `calc(50% + ${fy.c*Math.cos(bG)}rem)`,
                  top: `calc(50% + ${fy.c*Math.sin(bG)}rem)`
                },
                "aria-hidden": !0,
                children: LG(GG)
              }, GG)
            })), (0, sG.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: yG
            })]
          })
        })
      },
      hy = pL.length,
      dy = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = Qy("chat", FZ.m), ZG = (0, PG.useMemo)((() => pL.map((bG => GG(bG)))), [GG]);
        return (0, JS.g)(FZ.l, (() => {
          bG.open || (0, Vy.g)() || (0, py.m)() || "inGame" !== UG.e.get("gameState") || (0, UZ.t)() || !(0, mZ.b)() || bG.show()
        })), (0, JS.g)(FZ.f, (GG => {
          bG.open && bG.aim(GG, hy)
        })), (0, JS.g)(FZ.j, (() => {
          var GG;
          if (!bG.open) return;
          const wG = bG.pickedRef.current;
          null !== wG ? fL.claim(performance.now()) && (bG.close(), null === (GG = (0, mZ.b)()) || void 0 === GG || GG.sendLine(ZG[wG])) : bG.close()
        })), (0, JS.g)(FZ.i, bG.close), bG.open ? (0, sG.jsx)(Ky, {
          className: "QuickChatWheel",
          slotCount: hy,
          picked: bG.picked,
          slotLabel: GG => ZG[GG],
          renderSlot: GG => ZG[GG],
          centre: null !== bG.picked ? ZG[bG.picked] : GG("controller:quickChatPick")
        }) : null
      },
      Jy = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = Qy("actionButton", py.q), [ZG, wG] = (0, PG.useState)([]);
        if ((0, JS.g)(py.g, (GG => {
            bG.open || (0, Vy.g)() || (0, FZ.c)() || "inGame" !== UG.e.get("gameState") || (0, UZ.t)() || (wG(GG), bG.show())
          })), (0, JS.g)(py.b, (GG => {
            bG.open && bG.aim(GG, ZG.length)
          })), (0, JS.g)(py.e, (() => {
            if (!bG.open) return;
            const GG = bG.pickedRef.current;
            bG.close(), null !== GG && YG.l.xh(py.j, ZG[GG])
          })), (0, JS.g)(py.c, bG.close), !bG.open) return null;
        const LG = null !== bG.picked ? ZG[bG.picked] : null;
        return (0, sG.jsx)(Ky, {
          className: "ActionWheel",
          slotCount: ZG.length,
          picked: bG.picked,
          slotLabel: bG => {
            const wG = ZG[bG];
            return "reload" === wG.kind ? GG("controller:gameplayReload") : "customButton" === wG.kind ? wG.description || wG.icon : "touchButton" === wG.kind && "string" === typeof wG.label ? wG.label : ""
          },
          renderSlot: GG => (0, sG.jsx)(CS, {
            action: ZG[GG]
          }),
          centre: LG ? (0, sG.jsx)(CS, {
            action: LG
          }) : GG("controller:actionWheelPick")
        })
      };
    var ry = ZG(80);
    const zy = () => ((0, PG.useEffect)((() => {
        var GG, bG;
        const ZG = (0, JG.i)(document.getElementById("root")),
          wG = (0, QG.f)(),
          SG = (() => {
            const GG = [YG.l.subscribe(ZS.i, (() => {
                yS("blockBreak")
              })), YG.l.subscribe("damagedByOtherPlayer", (() => {
                yS("damage")
              })), YG.l.subscribe("yourAttackHit", (GG => {
                let {
                  hitSelf: bG
                } = GG;
                bG || yS("hit")
              }))],
              bG = yG.d.onActivePadChanged((GG => {
                GG && yS("connect")
              }));
            return () => {
              for (const bG of GG) YG.l.unsubscribe(bG);
              bG()
            }
          })(),
          LG = (() => {
            const GG = new fS({
              getVisitId: pS.f,
              peekVisitId: pS.peekVisitSessionId,
              readReportedVisitId: () => {
                const GG = VS.l.getItem(QS);
                return "string" === typeof GG ? GG : null
              },
              writeReportedVisitId: GG => {
                VS.l.setItem(QS, GG)
              },
              isPadActive: QG.l,
              getPadFamily: () => {
                var GG, bG;
                return null !== (GG = null === (bG = yG.d.getActivePad()) || void 0 === bG ? void 0 : bG.family) && void 0 !== GG ? GG : null
              },
              canReport: US.isBloxdGa4Ready,
              getInputType: YS.d,
              NQ: US.logControllerUsedToGtag
            });
            let bG = 0,
              ZG = null;
            const wG = SG => {
                null === ZG && ("notReady" !== GG.check(SG) || null !== ZG || bG >= 20 || (bG++, ZG = setTimeout((() => {
                  ZG = null, wG(!1)
                }), 3e3)))
              },
              SG = YG.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
                wG(!0)
              })),
              LG = (0, pS.j)((() => {
                bG = 0, wG(!0)
              }));
            return () => {
              YG.l.unsubscribe(SG), LG(), null !== ZG && clearTimeout(ZG)
            }
          })(),
          kG = yG.d.onFrame(((GG, bG, ZG) => {
            const wG = (0, QG.s)(GG, ZG);
            pG.b.dispatch(GG, bG, wG)
          }));
        let VG = null !== (GG = null === (bG = yG.d.getActivePad()) || void 0 === bG ? void 0 : bG.family) && void 0 !== GG ? GG : null;
        const KG = yG.d.onActivePadChanged((GG => {
            var bG, ZG;
            (pG.b.reset(), (0, QG.x)(), YG.l.xh(yG.c, GG), (null !== (bG = null === GG || void 0 === GG ? void 0 : GG.family) && void 0 !== bG ? bG : null) !== VG) && (VG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.family) && void 0 !== ZG ? ZG : null, YG.l.xh(fG.e, (0, fG.i)()));
            !GG && (0, QG.l)() && (0, QG.y)(UG.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          hG = () => {
            "visible" !== document.visibilityState && pG.b.clear()
          },
          dG = () => {
            pG.b.clear()
          };
        document.addEventListener("visibilitychange", hG), window.addEventListener("blur", dG), yG.d.start(), (0, kS.l)();
        const rG = null;
        return () => {
          ZG(), wG(), SG(), LG(), kG(), KG(), document.removeEventListener("visibilitychange", hG), window.removeEventListener("blur", dG), yG.d.stop(), null === rG || void 0 === rG || rG()
        }
      }), []), (0, sG.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, sG.jsx)(cS, {}), (0, sG.jsx)(gS, {}), (0, sG.jsx)(eS, {}), (0, sG.jsx)(lL, {}), (0, sG.jsx)(Yy, {}), (0, sG.jsx)(dy, {}), (0, sG.jsx)(Jy, {})]
      })),
      Ey = () => ry.featureFlags.useControllerSupport ? (0, sG.jsx)(zy, {}) : null;
    var oy = ZG(8224),
      Xy = ZG(8862);
    const uy = new Set(kS.j),
      iy = GG => `${Xy.h}${(0,fG.m)()}/${GG}`,
      Cy = GG => {
        if (!(0, Xy.g)(GG)) return null;
        const [bG, ZG] = GG.slice(Xy.h.length).split("/");
        return (0, oy.h)(bG) && uy.has(ZG) ? (0, kS.i)(bG, ZG) : null
      };
    var Wy = ZG(8866);
    const my = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, QG.B)(), {
          gameState: ZG,
          isUiHidden: wG
        } = (0, UG.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: LG,
          sneakMode: yG
        } = (0, fG.r)(), [kG, YG] = (0, PG.useState)(Wy.e);
        return (0, JS.g)(aS.w, YG), bG && !wG && "inGame" === ZG && kG ? (0, sG.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!LG && (0, sG.jsx)(uS, {
            glyph: (0, VG.j)("toggle" === yG ? "sneak" : "sneakToggle")
          }), (0, sG.jsx)("span", {
            children: GG("controller:gameplaySneaking")
          })]
        }) : null
      },
      Iy = 12,
      Fy = GG => {
        let {
          trigger: bG,
          className: ZG,
          children: wG
        } = GG;
        const SG = (0, PG.useRef)(null);
        return (0, PG.useEffect)((() => {
          let GG = 0;
          const ZG = mG(bG, "y"),
            wG = () => {
              GG = requestAnimationFrame(wG);
              const LG = SG.current;
              if (!LG || null === bG || void 0 === bG || !bG.isConnected) return;
              const {
                left: yG,
                top: kG
              } = function(GG, bG, ZG) {
                let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const LG = GG.left + GG.width / 2,
                  yG = Math.max(Iy, ZG.width - Iy - bG.width),
                  kG = Math.min(Math.max(LG - bG.width / 2, Iy), yG),
                  UG = ZG.height - wG;
                let YG = 0,
                  VG = UG;
                if (SG) {
                  const GG = Math.max(0, SG.top),
                    wG = Math.min(UG, SG.bottom);
                  wG - GG >= Math.max(ZG.height / 2, bG.height + 24) && (YG = GG, VG = wG)
                }
                const pG = GG.top + GG.height / 2 < (YG + VG) / 2 ? VG - Iy - bG.height : YG + Iy;
                return {
                  left: kG,
                  top: Math.max(Iy, pG)
                }
              }(bG.getBoundingClientRect(), {
                width: LG.offsetWidth,
                height: LG.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(nL)) || 0, null !== ZG && void 0 !== ZG && ZG.isConnected ? ZG.getBoundingClientRect() : null);
              LG.style.transform = `translate3d(${Math.round(yG)}px, ${Math.round(kG)}px, 0)`, LG.style.visibility = "visible"
            };
          return wG(), () => {
            cancelAnimationFrame(GG)
          }
        }), [bG]), (0, sG.jsx)("div", {
          ref: SG,
          className: ZG,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: wG
        })
      };
    var vy = ZG(1016),
      ay = ZG(8870),
      cy = ZG(1393),
      ly = ZG(8878),
      jy = ZG(8882);
    const Py = {
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
      My = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, QG.B)(), ZG = (0, ay.b)(), wG = (0, sS.i)("_tasks"), LG = (0, sS.i)("_availableLeaderboards");
        if (!bG) return null;
        const yG = (GG => {
          let {
            hasShop: bG,
            hasTasksOrLeaderboards: ZG,
            canInvite: wG
          } = GG;
          const SG = [];
          return bG && SG.push("shop"), ZG && SG.push("tasks"), wG && SG.push("invite"), SG.push("leave"), SG
        })({
          hasShop: ZG,
          hasTasksOrLeaderboards: !(!wG && !LG),
          canInvite: !!ry.featureFlags.canUseInviteLinks
        });
        return (0, sG.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: yG.map((bG => {
            const {
              icon: ZG,
              labelKey: wG
            } = Py[bG], SG = "leave" === bG ? cy.C : cy.d;
            return (0, sG.jsx)(SG, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (GG => {
                  switch (GG) {
                    case "shop":
                      return YG.l.xh(jy.m), void UG.e.set({
                        openEverythingMenuName: kZ.u.SHOP
                      });
                    case "tasks":
                      return void YG.l.xh("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void YG.l.xh("toggleMenu", "inviteLink");
                    case "leave":
                      (0, ly.b)()
                  }
                })(bG)
              },
              children: (0, sG.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, sG.jsx)(vy.c, {
                  name: ZG
                }), (0, sG.jsx)("span", {
                  children: GG(wG)
                })]
              })
            }, bG)
          }))
        })
      };
    var Ay = ZG(1956);
    const sy = KG.v,
      qy = ["forward", "backward", "left", "right", "sprint"],
      ny = GG => GG.ctrlKey || GG.altKey || "Alt" === GG.key || "ArrowUp" === GG.key || "ArrowDown" === GG.key || "Tab" === GG.code || "/" === GG.key || "Slash" === GG.code;
    class gy {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(KG.T).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(GG) {
        this.armed = GG
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || bG ? !GG.repeat && this.swallowedKeys.delete(GG.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(GG.code),
          continues: !1
        } : "Escape" === GG.key || GG.repeat && !this.swallowedKeys.has(GG.code) ? {
          swallow: !1,
          continues: !1
        } : ZG ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(GG.code), {
          swallow: !0,
          continues: (0, QG.j)(GG)
        })
      }
      onKeyUp(GG) {
        return this.swallowedKeys.delete(GG.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SG = (0, KG.q)(GG.values, this.previousHeld),
          LG = null === ZG ? -1 : (0, KG.l)(ZG),
          yG = LG >= 0 && SG[LG] && !this.previousHeld[LG],
          kG = SG.some(((GG, bG) => GG && !this.previousHeld[bG] && bG !== LG)),
          UG = Math.hypot(GG.leftStick.x, GG.leftStick.y) >= sy,
          YG = Math.hypot(GG.rightStick.x, GG.rightStick.y) >= sy,
          VG = UG && !this.leftStickWasPressed || YG && !this.rightStickWasPressed;
        this.previousHeld = SG, this.leftStickWasPressed = UG, this.rightStickWasPressed = YG;
        let pG = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, pG = !0);
        const fG = !bG && yG && !wG,
          QG = !fG && this.armed && !bG && (kG || VG);
        return (fG || QG) && (this.consumeNextFrame = !0, this.consumeAfterContinue = QG, pG = !0), {
          continues: QG,
          back: fG,
          consumeHeld: pG
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const ey = new Set([...Ay.q, ...Ay.H]),
      Ry = GG => ((GG, bG, ZG) => {
        const wG = Object.keys(bG).filter((wG => !ZG.has(wG) && bG[wG].includes(GG)));
        return wG.length > 0 && wG.every((GG => qy.includes(GG)))
      })(GG, Ay.B, ey),
      Ty = (GG, bG, ZG) => {
        const wG = new gy,
          SG = GG => {
            if (!GG.isTrusted) return;
            const {
              swallow: ZG,
              continues: SG
            } = wG.onKeyDown(GG, !(0, QG.G)(GG) || (0, bS.f)() || (0, UZ.t)(), Ry(GG.code));
            ZG && (GG.stopImmediatePropagation(), ny(GG) && GG.preventDefault()), SG && ((0, QG.y)("keyboardMouse"), bG())
          },
          LG = GG => {
            GG.isTrusted && wG.onKeyUp(GG) && (GG.stopImmediatePropagation(), ny(GG) && GG.preventDefault())
          },
          kG = () => {
            wG.forgetKeys()
          };
        window.addEventListener("keydown", SG, !0), window.addEventListener("keyup", LG, !0), window.addEventListener("blur", kG);
        const UG = yG.d.onFrame((GG => {
            const SG = pG.b.getActiveConsumerName(),
              LG = ZG(),
              yG = LG ? (0, VG.j)("menuBack") : null,
              kG = null !== SG && "gameplay" !== SG,
              {
                continues: UG,
                back: YG,
                consumeHeld: KG
              } = wG.onPadFrame(GG, kG, yG, (0, QG.o)(GG));
            if (KG) {
              const GG = (0, fG.i)().swapSticks ? "right" : "left";
              pG.b.consumeAllHeld(wG.consumeLeavesMoveStick() ? GG : null)
            }
            YG ? null === LG || void 0 === LG || LG() : UG && bG()
          })),
          YG = (0, bS.j)(`pressToContinue:${GG}`, (() => wG.blocksGameplay()));
        return {
          setArmed: GG => {
            wG.setArmed(GG)
          },
          dispose: () => {
            window.removeEventListener("keydown", SG, !0), window.removeEventListener("keyup", LG, !0), window.removeEventListener("blur", kG), UG(), YG()
          }
        }
      };
    var Hy = ZG(5019),
      ty = ZG(3415),
      Dy = ZG(3113),
      Ny = ZG(8233);
    const Oy = GG => {
        let {
          text: bG
        } = GG;
        return (0, sG.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: bG
        })
      },
      xy = GG => {
        let {
          label: bG,
          hint: ZG,
          options: wG,
          value: LG,
          onChange: yG
        } = GG;
        const {
          t: kG
        } = (0, SG.w)();
        return (0, sG.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, sG.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, sG.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, sG.jsx)("div", {
                className: "SliderText",
                children: bG
              }), ZG && (0, sG.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ZG
              })]
            }), (0, sG.jsx)(Dy.b, {
              options: wG.map((GG => ({
                label: "label" in GG ? GG.label : kG(GG.labelKey),
                value: GG.value
              }))),
              value: LG,
              onChange: GG => {
                yG(GG.value)
              }
            })]
          })
        })
      },
      By = GG => {
        let {
          settingKey: bG,
          label: ZG,
          range: wG,
          format: SG
        } = GG;
        const LG = (0, fG.r)();
        return (0, sG.jsx)(Hy.f, {
          name: ZG,
          min: wG.min,
          max: wG.max,
          step: wG.step,
          padStep: wG.step,
          initValue: LG[bG],
          format: SG,
          onChange: GG => {
            (0, fG.q)({
              [bG]: (0, Ny.w)(GG, wG)
            })
          }
        })
      };
    var Gk = ZG(8889),
      bk = ZG(8892);
    const Zk = GG => GG instanceof DOMException && ("SecurityError" === GG.name || "NotAllowedError" === GG.name),
      wk = GG => {
        const [bG] = [...GG.controllers].sort(((GG, bG) => bk.p[GG] - bk.p[bG]));
        return bk.l[bG]
      },
      Sk = GG => {
        (0, Gk.b)().allowPhoneMotion().catch((bG => {
          GG && Zk(bG) ? GG() : console.warn("Could not enable the motion sensor", bG)
        }))
      },
      Lk = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      yk = GG => {
        let {
          status: bG
        } = GG;
        const {
          t: ZG
        } = (0, SG.w)(), [wG, LG] = (0, PG.useState)(null), yG = `${bG.controllers.join(",")}|${bG.phoneMotion}`;
        (0, PG.useEffect)((() => {
          LG(null)
        }), [yG]);
        const kG = () => {
          (0, Gk.b)().connectController().then((GG => {
            LG(GG > 0 ? "openFailed" : null)
          })).catch((GG => {
            Zk(GG) ? LG("needsClick") : console.warn("Could not connect motion controller", GG)
          }))
        };
        if (bG.hidSupported) {
          let GG = ZG("controller:settingsGyroConnectHint");
          return "needsClick" === wG ? GG = ZG("controller:settingsGyroConnectNeedsClick") : "openFailed" === wG ? GG = ZG("controller:settingsGyroOpenFailed") : bG.controllers.length > 0 && (GG = ZG("controller:settingsGyroConnected", {
            name: wk(bG)
          })), (0, sG.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, sG.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, sG.jsx)("div", {
                className: "ControllerSettingsHint",
                children: GG
              }), (0, sG.jsx)(cy.d, {
                onClick: kG,
                children: ZG("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === bG.phoneMotion) return (0, sG.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, sG.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === wG && (0, sG.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ZG("controller:settingsGyroAllowNeedsTap")
            }), (0, sG.jsx)(cy.d, {
              onClick: () => {
                Sk((() => {
                  LG("needsTap")
                }))
              },
              children: ZG("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const UG = Lk[bG.phoneMotion];
        return UG ? (0, sG.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ZG(UG)
        }) : null
      },
      kk = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, fG.r)(), ZG = (0, Gk.f)(), wG = (0, QG.F)(), LG = !ZG.hidSupported && ZG.phoneSupported && !ZG.padConnected, yG = (ZG.hidSupported || ZG.phoneSupported) && !LG, kG = (0, VG.j)("pause");
        return (0, sG.jsxs)(sG.Fragment, {
          children: [(0, sG.jsx)(Oy, {
            text: GG("controller:settingsGyro")
          }), LG && (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GG("controller:settingsGyroPhoneNeedsController")
          }), !yG && !LG && (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GG(ZG.hidBlocked || ZG.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), yG && (0, sG.jsx)(Hy.c, {
            label: GG(ZG.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: bG.gyroAiming,
            onClick: GG => {
              var bG, ZG;
              (0, fG.q)({
                gyroAiming: GG
              });
              const wG = null === (bG = null === (ZG = navigator.userActivation) || void 0 === ZG ? void 0 : ZG.isActive) || void 0 === bG || bG;
              if (!GG || !wG) return;
              const SG = (0, Gk.b)(),
                LG = SG.getStatus();
              LG.hidSupported ? SG.connectControllerIfNoneGranted().catch((GG => {
                console.warn("Motion controller picker unavailable", GG)
              })) : "needsPermission" === LG.phoneMotion && Sk()
            },
            circleInfoText: GG(ZG.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), yG && ZG.hidSupported && (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GG("controller:settingsGyroSteamHint")
          }), yG && bG.gyroAiming && (0, sG.jsxs)(sG.Fragment, {
            children: [(0, sG.jsx)(yk, {
              status: ZG
            }), (0, sG.jsx)(By, {
              settingKey: "gyroSensitivity",
              label: GG("controller:settingsGyroSensitivity"),
              range: Ny.Q,
              format: Ny.G
            }), (0, sG.jsx)(xy, {
              label: GG("controller:settingsGyroActivation"),
              hint: "aiming" === bG.gyroActivation && (0, sG.jsx)(ty.c, {
                text: GG("controller:settingsGyroAimingHint", {
                  button: ty.f
                }),
                glyph: (0, VG.j)("use")
              }),
              options: Ny.N,
              value: bG.gyroActivation,
              onChange: GG => {
                (0, fG.q)({
                  gyroActivation: GG
                })
              }
            }), "button" === bG.gyroActivation && (0, sG.jsx)(xy, {
              label: GG("controller:settingsGyroButton"),
              hint: GG("controller:settingsGyroButtonHint"),
              options: Ny.q.filter((GG => GG !== kG || GG === bG.gyroButton)).map((GG => ({
                label: XS(wG, GG),
                value: GG
              }))),
              value: bG.gyroButton,
              onChange: GG => {
                (0, fG.q)({
                  gyroButton: GG
                })
              }
            })]
          })]
        })
      };
    var Uk = ZG(1827);
    const Yk = () => {
      const {
        t: GG
      } = (0, SG.w)(), bG = (0, fG.r)(), ZG = (0, QG.F)();
      return (0, sG.jsxs)(sG.Fragment, {
        children: [(0, sG.jsx)(Oy, {
          text: GG("controller:settingsAccessibility")
        }), (0, sG.jsx)(Hy.c, {
          label: GG("controller:settingsSwapConfirmBack"),
          checked: (0, VG.G)(bG.swapConfirmBack, ZG),
          onClick: GG => {
            (0, fG.q)({
              swapConfirmBack: GG === (0, VG.G)(null, ZG) ? null : GG
            }), Uk.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: GG("controller:settingsSwapConfirmBackInfo")
        }), (0, sG.jsx)(xy, {
          label: GG("controller:settingsButtonRepeat"),
          hint: GG("controller:settingsButtonRepeatHint"),
          options: Ny.n,
          value: bG.buttonRepeat,
          onChange: GG => {
            (0, fG.q)({
              buttonRepeat: GG
            })
          }
        }), (0, sG.jsx)(xy, {
          label: GG("controller:settingsTapHoldTime"),
          hint: GG("controller:settingsTapHoldTimeHint"),
          options: Ny.rb,
          value: bG.tapHoldTime,
          onChange: GG => {
            (0, fG.q)({
              tapHoldTime: GG
            })
          }
        }), (0, sG.jsx)(xy, {
          label: GG("controller:settingsEmoteButton"),
          hint: GG("wheel" === bG.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Ny.E,
          value: bG.emoteButton,
          onChange: GG => {
            (0, fG.q)({
              emoteButton: GG
            })
          }
        }), (0, sG.jsx)(xy, {
          label: GG("controller:settingsAttackMode"),
          hint: GG("toggle" === bG.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Ny.j,
          value: bG.attackMode,
          onChange: GG => {
            (0, fG.q)({
              attackMode: GG
            })
          }
        }), (0, sG.jsx)(Hy.c, {
          label: GG("controller:settingsLargePointer"),
          checked: bG.largePointer,
          onClick: GG => {
            (0, fG.q)({
              largePointer: GG
            })
          },
          circleInfoText: GG("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Vk = ZG(8900);
    const pk = new class {
        constructor(GG) {
          this.router = GG, this.current = null
        }
        claim(GG, bG) {
          const ZG = this.current;
          ZG && (this.current = null, ZG.release(), ZG.onTakenOver());
          const wG = this.router.register({
              ...GG,
              name: "capture"
            }),
            SG = {
              release: wG,
              onTakenOver: bG
            };
          return this.current = SG, () => {
            this.current === SG && (this.current = null), wG()
          }
        }
      }(pG.b),
      fk = GG => {
        (0, PG.useEffect)((() => {
          if (!GG) return;
          const bG = GG();
          let ZG = !1;
          const wG = () => {
              ZG || (ZG = !0, bG.onEnd())
            },
            SG = pk.claim({
              isActive: () => !ZG,
              onFrame: GG => {
                bG.onFrame(GG, wG)
              }
            }, wG),
            LG = void 0 === bG.timeoutMs ? void 0 : window.setTimeout(wG, bG.timeoutMs),
            yG = GG => {
              "Escape" === GG.key && (GG.preventDefault(), GG.stopPropagation(), wG())
            };
          return window.addEventListener("keydown", yG, !0), () => {
            ZG = !0, SG(), window.clearTimeout(LG), window.removeEventListener("keydown", yG, !0)
          }
        }), [GG])
      },
      Qk = GG => {
        let {
          row: bG,
          capturing: ZG,
          onCapture: wG,
          holdFillRef: LG,
          onRebind: yG,
          swapped: kG
        } = GG;
        const {
          t: UG
        } = (0, SG.w)();
        if ("fixed" === bG.kind) return (0, sG.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, sG.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, sG.jsx)("div", {
              className: "ControlName",
              children: UG(bG.labelKey)
            }), (0, sG.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, sG.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, sG.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, sG.jsx)(uS, {
                    glyph: "move" === bG.stick ? (0, VG.p)() : (0, VG.m)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: YG
        } = bG, pG = (0, VG.j)(YG), fG = (0, VG.k)(YG), QG = pG !== fG && (0, VG.e)(YG, fG);
        return (0, sG.jsxs)("div", {
          className: AG()("ControlRow PadControlRow", {
            Capturing: ZG
          }),
          children: [(0, sG.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, sG.jsx)("div", {
              className: "ControlName",
              children: UG(Ny.d[YG])
            }), (0, sG.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ZG && (0, sG.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, sG.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wG(YG)
                  },
                  children: (0, sG.jsx)(uS, {
                    glyph: pG
                  })
                }), QG && (0, sG.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: UG("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yG(YG, fG)
                  },
                  children: (0, sG.jsx)(vy.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), ZG && (0, sG.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, sG.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, sG.jsx)("span", {
                    children: UG("controller:settingsCapturePrompt")
                  }), (0, sG.jsx)("div", {
                    ref: LG,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, sG.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wG(null)
                  },
                  children: "\xd7"
                })]
              }), ZG && (0, sG.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, sG.jsx)(ty.c, {
                  text: UG((0, VG.e)(YG, (0, VG.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: ty.f
                  }),
                  glyph: (0, VG.j)("menuBack")
                })
              })]
            })]
          }), kG.map((GG => (0, sG.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, sG.jsx)(ty.c, {
              text: UG("controller:settingsSwapNotice", {
                action: UG(Ny.d[GG]),
                button: ty.f
              }),
              glyph: (0, VG.j)(GG)
            })
          }, GG))), ZG && (0, sG.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Ny.t}ms`
            }
          })]
        })
      },
      Kk = [],
      hk = GG => {
        let {
          layoutSetting: bG
        } = GG;
        const {
          t: ZG
        } = (0, SG.w)(), wG = (0, fG.r)();
        (0, QG.F)();
        const LG = (0, PG.useRef)(null),
          [yG, kG] = (0, PG.useState)(null),
          UG = (0, PG.useCallback)(((GG, bG) => {
            const ZG = (0, fG.i)().bindings;
            (0, VG.A)(GG, bG);
            const wG = (0, VG.t)(ZG, GG);
            kG(wG.length > 0 ? {
              action: GG,
              swapped: wG
            } : null)
          }), []),
          [YG, hG] = ((GG, bG) => {
            const [ZG, wG] = (0, PG.useState)(null), SG = (0, PG.useMemo)((() => ZG ? () => {
              const SG = (0, VG.j)("menuBack"),
                LG = new Ny.b(SG, (0, VG.j)("menuConfirm"), (GG => (0, VG.e)(ZG, GG)));
              return {
                onFrame: (wG, yG) => {
                  var kG;
                  const UG = wG.frame.timestampMs,
                    YG = LG.update({
                      ...wG,
                      isDown: GG => (0, KG.F)(wG.frame.values, GG)
                    }, UG);
                  null === (kG = GG.current) || void 0 === kG || kG.style.setProperty("width", 100 * LG.getBindHoldProgress(UG) + "%"), YG && ("bind" === YG.kind ? (pG.b.consumeButton(YG.button), bG(ZG, YG.button)) : pG.b.consumeButton(SG), yG())
                },
                onEnd: () => {
                  wG(null)
                },
                timeoutMs: Ny.t
              }
            } : null), [ZG, GG, bG]);
            return fk(SG), [ZG, wG]
          })(LG, UG),
          dG = GG => {
            GG && kG(null), hG(GG)
          };
        (0, PG.useEffect)((() => {
          if (!yG) return;
          const GG = window.setTimeout((() => {
            kG(null)
          }), Ny.pb);
          return () => {
            window.clearTimeout(GG)
          }
        }), [yG]);
        const JG = !wG.swapSticks && 0 === Object.keys(wG.bindings).length;
        return (0, sG.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, sG.jsx)("div", {
            className: "SliderText",
            children: ZG("controller:settingsRemap")
          }), (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ZG("controller:settingsRemapHint")
          }), (0, sG.jsx)(cy.C, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: JG,
            onClick: () => {
              dG(null), kG(null), (0, VG.D)()
            },
            children: ZG("controller:settingsResetAll")
          }), bG, Ny.ib.map(((GG, bG) => (0, sG.jsx)(Vk.b, {
            title: ZG(GG.titleKey),
            defaultOpen: 0 === bG,
            children: GG.rows.map((GG => (0, sG.jsx)(Qk, {
              row: GG,
              capturing: "action" === GG.kind && GG.action === YG,
              onCapture: dG,
              holdFillRef: LG,
              onRebind: UG,
              swapped: "action" === GG.kind && (null === yG || void 0 === yG ? void 0 : yG.action) === GG.action ? yG.swapped : Kk
            }, "action" === GG.kind ? GG.action : GG.labelKey)))
          }, GG.titleKey)))]
        })
      },
      dk = GG => {
        let {
          deadzone: bG,
          dotRef: ZG,
          labelKey: wG
        } = GG;
        const {
          t: LG
        } = (0, SG.w)();
        return (0, sG.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, sG.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, sG.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * bG + "%",
                height: 100 * bG + "%"
              }
            }), (0, sG.jsx)("div", {
              ref: ZG,
              className: "ControllerTesterDot"
            })]
          }), (0, sG.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: LG(wG)
          })]
        })
      },
      Jk = (GG, bG, ZG, wG) => {
        var SG;
        GG && (GG.style.left = 50 + 50 * Math.max(-1, Math.min(1, bG.x)) + "%", GG.style.top = 50 + 50 * Math.max(-1, Math.min(1, bG.y)) + "%", null === (SG = GG.parentElement) || void 0 === SG || SG.classList.toggle("Active", wG || Math.hypot(bG.x, bG.y) > ZG))
      },
      rk = GG => {
        const bG = {
            deadzone: GG.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ZG = {
            deadzone: GG.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return GG.swapSticks ? {
          left: ZG,
          right: bG
        } : {
          left: bG,
          right: ZG
        }
      },
      zk = () => {
        const {
          t: GG
        } = (0, SG.w)(), bG = (() => {
          const [GG, bG] = (0, PG.useState)((() => yG.d.getActivePad()));
          return (0, JS.g)(yG.c, (() => {
            bG(yG.d.getActivePad())
          })), GG
        })(), ZG = rk((0, fG.r)()), wG = (0, PG.useRef)(null), LG = (0, PG.useRef)(null), kG = (0, PG.useRef)([]), UG = (0, PG.useRef)(null), YG = (0, PG.useRef)(null), [QG, hG] = (GG => {
          const [bG, ZG] = (0, PG.useState)(!1), wG = (0, PG.useMemo)((() => bG ? () => {
            const bG = (0, VG.j)("menuBack"),
              wG = new Ny.c;
            return {
              onFrame: (ZG, SG) => {
                var LG;
                const yG = wG.update({
                  pressed: ZG.wasPressed(bG),
                  Ik: ZG.isHeld(bG)
                }, ZG.frame.timestampMs);
                null === (LG = GG.current) || void 0 === LG || LG.style.setProperty("width", 100 * yG + "%"), yG >= 1 && (pG.b.consumeButton(bG), SG())
              },
              onEnd: () => {
                ZG(!1)
              }
            }
          } : null), [bG, GG]);
          return fk(wG), [bG, ZG]
        })(LG);
        (0, PG.useEffect)((() => {
          const GG = GG => {
            for (const ZG of KG.X) {
              const bG = (0, KG.l)(ZG),
                wG = kG.current[bG];
              if (!wG) continue;
              const SG = GG.values[bG];
              wG.classList.toggle("Pressed", SG >= KG.v), (0, KG.I)(bG) && wG.style.setProperty("--trigger-fill", `${Math.round(100*SG)}%`)
            }
            const bG = rk((0, fG.i)());
            Jk(UG.current, GG.leftStick, bG.left.deadzone, GG.values[(0, KG.l)("LS")] >= KG.v), Jk(YG.current, GG.rightStick, bG.right.deadzone, GG.values[(0, KG.l)("RS")] >= KG.v)
          };
          return bG || GG((0, KG.u)()), yG.d.onFrame(GG)
        }), [bG]), (0, PG.useEffect)((() => {
          bG || hG(!1)
        }), [bG, hG]), (0, PG.useEffect)((() => {
          var GG;
          QG && (null === (GG = wG.current) || void 0 === GG || GG.scrollIntoView({
            block: "nearest"
          }))
        }), [QG]);
        const dG = Ny.db.find((GG => GG.value === (null === bG || void 0 === bG ? void 0 : bG.family)));
        return (0, sG.jsxs)("div", {
          ref: wG,
          className: AG()("SettingBox ControllerTester", {
            Testing: QG
          }),
          children: [(0, sG.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, sG.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [bG && (0, sG.jsx)("div", {
                children: GG("controller:settingsTesterFamily", {
                  family: dG ? GG(dG.labelKey) : bG.family
                })
              }), bG && (0, sG.jsx)("div", {
                className: "ControllerTesterPadId",
                children: bG.id
              }), !bG && (0, sG.jsx)("div", {
                children: GG("controller:settingsTesterNoPad")
              })]
            }), (bG || QG) && (0, sG.jsx)(cy.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                hG(!QG)
              },
              children: GG(QG ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), bG && !QG && (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GG("controller:settingsTesterHint")
          }), QG && (0, sG.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, sG.jsx)(ty.c, {
              text: GG("controller:settingsTesterTesting", {
                button: ty.f
              }),
              glyph: (0, VG.j)("menuBack")
            }), (0, sG.jsx)("div", {
              ref: LG,
              className: "ControllerTesterExitFill"
            })]
          }), (0, sG.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, sG.jsx)(dk, {
              deadzone: ZG.left.deadzone,
              dotRef: UG,
              labelKey: ZG.left.labelKey
            }), (0, sG.jsx)("div", {
              className: "ControllerTesterButtons",
              children: KG.X.map((GG => {
                const ZG = (0, KG.l)(GG);
                return (0, sG.jsx)("div", {
                  ref: GG => {
                    kG.current[ZG] = GG
                  },
                  className: (0, KG.I)(ZG) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, sG.jsx)(uS, {
                    glyph: GG,
                    family: null === bG || void 0 === bG ? void 0 : bG.family
                  })
                }, GG)
              }))
            }), (0, sG.jsx)(dk, {
              deadzone: ZG.right.deadzone,
              dotRef: YG,
              labelKey: ZG.right.labelKey
            })]
          })]
        })
      },
      Ek = (0, PG.memo)((function() {
        const {
          t: GG
        } = (0, SG.w)(), bG = (0, fG.r)(), [ZG, wG] = (0, PG.useState)(!1);
        return (0, PG.useEffect)((() => {
          if (!ZG) return;
          const GG = window.setTimeout((() => {
            wG(!1)
          }), Ny.pb);
          return () => {
            window.clearTimeout(GG)
          }
        }), [ZG]), (0, sG.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, sG.jsx)(Oy, {
            text: GG("controller:settingsLook")
          }), (0, sG.jsx)(By, {
            settingKey: "lookSensitivityX",
            label: GG("controller:settingsLookSensitivityX"),
            range: Ny.mb,
            format: Ny.J
          }), (0, sG.jsx)(By, {
            settingKey: "lookSensitivityY",
            label: GG("controller:settingsLookSensitivityY"),
            range: Ny.mb,
            format: Ny.J
          }), (0, sG.jsx)(By, {
            settingKey: "aimLookSensitivity",
            label: GG("controller:settingsAimLookSensitivity"),
            range: Ny.g,
            format: Ny.J
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsLookCurve"),
            hint: GG("controller:settingsLookCurveHint"),
            options: Ny._,
            value: bG.lookCurve,
            onChange: GG => {
              (0, fG.q)({
                lookCurve: GG
              })
            }
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsInvertLookX"),
            checked: bG.invertLookX,
            onClick: GG => {
              (0, fG.q)({
                invertLookX: GG
              })
            }
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsInvertLookY"),
            checked: bG.invertLookY,
            onClick: GG => {
              (0, fG.q)({
                invertLookY: GG
              })
            }
          }), (0, sG.jsx)(By, {
            settingKey: "lookDeadzone",
            label: GG("controller:settingsLookDeadzone"),
            range: Ny.C,
            format: Ny.F
          }), (0, sG.jsx)(kk, {}), (0, sG.jsx)(Oy, {
            text: GG("controller:settingsMovement")
          }), (0, sG.jsx)(By, {
            settingKey: "moveDeadzone",
            label: GG("controller:settingsMoveDeadzone"),
            range: Ny.C,
            format: Ny.F
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsAutoSprint"),
            checked: bG.autoSprint,
            onClick: GG => {
              (0, fG.q)({
                autoSprint: GG
              })
            },
            circleInfoText: GG("controller:settingsAutoSprintInfo")
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsSneak"),
            options: Ny.nb,
            value: bG.sneakMode,
            onChange: GG => {
              (0, fG.q)({
                sneakMode: GG
              })
            }
          }), (0, sG.jsx)(Oy, {
            text: GG("controller:settingsButtons")
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsPromptFamily"),
            options: Ny.db,
            value: bG.promptFamily,
            onChange: GG => {
              (0, fG.q)({
                promptFamily: GG
              })
            }
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsHideButtonHints"),
            checked: bG.hideButtonHints,
            onClick: GG => {
              (0, fG.q)({
                hideButtonHints: GG
              })
            }
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsVibration"),
            checked: bG.vibration,
            onClick: GG => {
              (0, fG.q)({
                vibration: GG
              }), GG && yS("preview")
            }
          }), (0, sG.jsx)(By, {
            settingKey: "cursorSpeed",
            label: GG("controller:settingsCursorSpeed"),
            range: Ny.z,
            format: Ny.J
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsCursorMagnetism"),
            checked: bG.cursorMagnetism,
            onClick: GG => {
              (0, fG.q)({
                cursorMagnetism: GG
              })
            }
          }), (0, sG.jsx)(Hy.c, {
            label: GG("controller:settingsMenuBackToCategories"),
            checked: bG.menuBackToCategories,
            onClick: GG => {
              (0, fG.q)({
                menuBackToCategories: GG
              })
            }
          }), (0, sG.jsx)(hk, {
            layoutSetting: (0, sG.jsxs)(sG.Fragment, {
              children: [VG.h.map((ZG => (0, sG.jsx)(Hy.c, {
                label: GG(Ny.T[ZG]),
                checked: (0, VG.x)(ZG, bG),
                onClick: GG => {
                  wG(!(0, VG.J)(ZG, GG))
                }
              }, ZG))), ZG && (0, sG.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: GG("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, sG.jsx)(Yk, {}), (0, sG.jsx)(Oy, {
            text: GG("controller:settingsAlternatives")
          }), (0, sG.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GG("controller:settingsAlternativesHint")
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsMenuNavigation"),
            hint: GG("controller:settingsMenuNavigationHint"),
            options: Ny.bb,
            value: bG.menuNavigation,
            onChange: GG => {
              (0, fG.q)({
                menuNavigation: GG
              })
            }
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsInventoryNavigation"),
            hint: GG("controller:settingsInventoryNavigationHint"),
            options: Ny.R,
            value: bG.inventoryNavigation,
            onChange: GG => {
              (0, fG.q)({
                inventoryNavigation: GG
              })
            }
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsQuickChat"),
            hint: GG("controller:settingsQuickChatHint"),
            options: Ny.hb,
            value: bG.quickChat,
            onChange: GG => {
              (0, fG.q)({
                quickChat: GG
              })
            }
          }), (0, sG.jsx)(xy, {
            label: GG("controller:settingsLeaderboardButton"),
            hint: GG("controller:settingsLeaderboardButtonHint"),
            options: Ny.W,
            value: bG.leaderboardButton,
            onChange: GG => {
              (0, fG.q)({
                leaderboardButton: GG
              })
            }
          }), (0, sG.jsx)(Oy, {
            text: GG("controller:settingsTester")
          }), (0, sG.jsx)(zk, {})]
        })
      }));
    (0, SG.d)(wG);
    for (const Wk of (0, LG.o)()) Wk.connected ? yG.d.handleConnectionEvent(Wk) : yG.d.handleDisconnectionEvent(Wk);
    const Xk = () => null !== yG.d.getActivePad(),
      uk = () => SZ.getState(),
      ik = () => SZ.isSteppingSlots(),
      Ck = (GG, bG) => {
        const ZG = GS.getFocused();
        GS.isActive() && ZG && GG.contains(ZG) && GS.setFocus(bG, {
          scroll: !1
        })
      }
  },
  8212: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => UG,
      e: () => YG
    });
    var wG = ZG(1373),
      SG = ZG(1366);
    const LG = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      yG = "28de",
      kG = new Set(["1205"]),
      UG = (GG, bG) => {
        const ZG = (0, wG.e)(GG);
        if ((null === ZG || void 0 === ZG ? void 0 : ZG.vendor) === yG) return kG.has(ZG.product) ? "steamdeck" : "xbox";
        if (ZG && LG[ZG.vendor]) return LG[ZG.vendor];
        if ((0, SG.b)(GG)) return "nintendo";
        const UG = `${GG} ${null!==bG&&void 0!==bG?bG:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(UG) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(UG) ? "nintendo" : /steam deck/.test(UG) ? "steamdeck" : "xbox"
      },
      YG = GG => {
        var bG;
        return (null === (bG = (0, wG.e)(GG)) || void 0 === bG ? void 0 : bG.vendor) === yG
      }
  },
  8248: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      d: () => kG
    });
    var wG = ZG(8205);
    const SG = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      LG = new Set(["capture", "gameplay"]),
      yG = ["Up", "Down", "Left", "Right"],
      kG = GG => yG.includes(GG),
      UG = .25;
    const YG = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Ik = new Array(wG.T).fill(!1), this.previousHeld = new Array(wG.T).fill(!1), this.consumedButtons = new Array(wG.T).fill(!1), this.suppressedReleases = new Array(wG.T).fill(!1), this.wakeOwned = new Array(wG.T).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, wG.u)()
      }
      register(GG) {
        return this.consumers.has(GG.name) && console.warn(`Controller consumer "${GG.name}" registered twice; the newer one replaces it.`), this.consumers.set(GG.name, GG), () => {
          var bG;
          this.consumers.get(GG.name) === GG && (this.activeName === GG.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (bG = this.peek) || void 0 === bG ? void 0 : bG.over) === GG.name && (this.peek = null), this.consumers.delete(GG.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(GG) {
        return this.Ik[(0, wG.l)(GG)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Ik = new Array(wG.T).fill(!1), this.previousHeld = new Array(wG.T).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, wG.u)()
      }
      dispatch(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = GG, this.previousHeld = this.Ik, this.Ik = (0, wG.q)(GG.values, this.previousHeld);
        for (let LG = 0; LG < wG.T; LG++) this.suppressedReleases[LG] = !this.Ik[LG] && this.consumedButtons[LG], this.Ik[LG] || (this.consumedButtons[LG] = !1), this.wakeOwned[LG] && (this.Ik[LG] ? (this.consumedButtons[LG] = !0, this.wakeOwned[LG] = !1) : GG.values[LG] < wG.R && (this.wakeOwned[LG] = !1));
        Math.hypot(GG.leftStick.x, GG.leftStick.y) < UG && (this.leftStickConsumed = !1), Math.hypot(GG.rightStick.x, GG.rightStick.y) < UG && (this.rightStickConsumed = !1);
        const SG = this.pickActive();
        if ((null === SG || void 0 === SG ? void 0 : SG.name) !== this.activeName) {
          var yG, kG, YG, VG, pG, fG;
          const GG = this.activeName,
            bG = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ZG = null !== (yG = null === SG || void 0 === SG || null === (kG = SG.peek) || void 0 === kG ? void 0 : kG.call(SG)) && void 0 !== yG ? yG : null,
            LG = null === GG && !!ZG && !(null === (YG = this.consumers.get(ZG.over)) || void 0 === YG || !YG.onPeekFrame),
            UG = ZG && (ZG.over === GG || LG) ? ZG : null,
            QG = null !== this.peek && this.peek.over === (null === SG || void 0 === SG ? void 0 : SG.name) ? this.peek : null;
          this.deactivateCurrent(null !== UG, null !== QG), this.activeName = null !== (VG = null === SG || void 0 === SG ? void 0 : SG.name) && void 0 !== VG ? VG : null, null === GG || this.handOffPending || this.consumeAllHeld();
          const KG = null === (pG = null !== UG && void 0 !== UG ? UG : QG) || void 0 === pG ? void 0 : pG.stick;
          "left" === KG && bG.left ? this.leftStickConsumed = !1 : "right" === KG && bG.right && (this.rightStickConsumed = !1), this.peek = UG, SG || null === GG ? SG && (null === (fG = this.idleResume) || void 0 === fG ? void 0 : fG.name) === SG.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: GG,
            left: bG.left && this.leftStickConsumed,
            right: bG.right && this.rightStickConsumed
          }, SG && (this.idleResume = null);
          for (let SG = 0; SG < wG.T; SG++) this.previousHeld[SG] && !this.Ik[SG] && (this.suppressedReleases[SG] = !0)
        }
        var QG, KG;
        (this.handOffPending = !1, SG) && (ZG && !LG.has(SG.name) && this.consumeWakePress(SG), SG.onFrame(this.buildInput(GG, bG, ZG)), this.peek && (null === (QG = this.consumers.get(this.peek.over)) || void 0 === QG || null === (KG = QG.onPeekFrame) || void 0 === KG || KG.call(QG, this.buildInput(GG, bG, !1, this.peek.stick))))
      }
      consumeWakePress(GG) {
        for (let SG = 0; SG < wG.T; SG++) {
          var bG, ZG;
          const LG = wG.X[SG];
          (null !== (bG = null === (ZG = GG.wakePressActs) || void 0 === ZG ? void 0 : ZG.call(GG, LG)) && void 0 !== bG ? bG : yG.includes(LG)) || (this.Ik[SG] ? this.consumedButtons[SG] = !0 : this.lastFrame.values[SG] >= wG.N && (this.wakeOwned[SG] = !0))
        }
      }
      pickActive() {
        for (const GG of SG) {
          const bG = this.consumers.get(GG);
          if (bG && bG.isActive()) return bG
        }
        return null
      }
      deactivateCurrent() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ZG, wG, SG, LG;
        this.activeName && (null === (ZG = this.consumers.get(this.activeName)) || void 0 === ZG || null === (wG = ZG.onDeactivate) || void 0 === wG || wG.call(ZG, GG));
        this.peek && !bG && (null === (SG = this.consumers.get(this.peek.over)) || void 0 === SG || null === (LG = SG.onDeactivate) || void 0 === LG || LG.call(SG, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let SG = 0; SG < wG.T; SG++) this.Ik[SG] && (this.consumedButtons[SG] = !0);
        const {
          leftStick: bG,
          rightStick: ZG
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== GG && (this.leftStickConsumed || Math.hypot(bG.x, bG.y) >= UG), this.rightStickConsumed = "right" !== GG && (this.rightStickConsumed || Math.hypot(ZG.x, ZG.y) >= UG)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(GG) {
        const bG = (0, wG.l)(GG);
        this.Ik[bG] && (this.consumedButtons[bG] = !0)
      }
      buildInput(GG, bG, ZG, SG) {
        const LG = this.Ik,
          yG = this.previousHeld,
          kG = SG ? new Array(wG.T).fill(!0) : [...this.consumedButtons],
          UG = SG ? kG : [...this.suppressedReleases],
          YG = !this.leftStickConsumed && (!SG || "left" === SG),
          VG = !this.rightStickConsumed && (!SG || "right" === SG);
        return {
          frame: GG,
          dtMs: bG,
          isHeld: GG => {
            const bG = (0, wG.l)(GG);
            return LG[bG] && !kG[bG]
          },
          wasPressed: GG => {
            const bG = (0, wG.l)(GG);
            return LG[bG] && !yG[bG] && !kG[bG]
          },
          wasReleased: GG => {
            const bG = (0, wG.l)(GG);
            return !LG[bG] && yG[bG] && !UG[bG]
          },
          value: bG => {
            const ZG = (0, wG.l)(bG);
            return kG[ZG] ? 0 : GG.values[ZG]
          },
          leftStick: YG ? GG.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: VG ? GG.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ZG
        }
      }
    }
  },
  8222: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG.d,
      h: () => pG.h,
      i: () => mG,
      m: () => IG,
      q: () => FG,
      r: () => vG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(1389),
      yG = ZG(29),
      kG = ZG(8224),
      UG = ZG(8205),
      YG = ZG(8218),
      VG = ZG(8202),
      pG = ZG(1993),
      fG = ZG(8233);
    const QG = {
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
      KG = "controllerSettings",
      hG = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      dG = ["auto", ...kG.e],
      JG = (GG, bG) => "string" === typeof bG && GG.includes(bG),
      rG = GG => bG => "number" === typeof bG && Number.isFinite(bG) ? (0, fG.w)(bG, GG) : void 0,
      zG = GG => "boolean" === typeof GG ? GG : void 0,
      EG = GG => bG => JG(GG, bG) ? bG : void 0,
      oG = {
        lookSensitivityX: rG(fG.mb),
        lookSensitivityY: rG(fG.mb),
        aimLookSensitivity: rG(fG.g),
        invertLookX: zG,
        invertLookY: zG,
        lookCurve: EG(UG.K),
        lookDeadzone: rG(fG.C),
        moveDeadzone: rG(fG.C),
        swapSticks: zG,
        autoSprint: zG,
        sneakMode: EG(["toggle", "hold"]),
        tapHoldTime: EG(["short", "medium", "long"]),
        attackMode: EG(["hold", "toggle"]),
        promptFamily: EG(dG),
        hideButtonHints: zG,
        vibration: zG,
        cursorSpeed: rG(fG.z),
        cursorMagnetism: zG,
        buttonRepeat: EG(UG.n),
        largePointer: zG,
        menuBackToCategories: zG,
        swapConfirmBack: zG,
        menuNavigation: EG(["hybrid", "focus", "cursor"]),
        inventoryNavigation: EG(["hybrid", "slot", "cursor"]),
        quickChat: EG(["wheel", "off"]),
        leaderboardButton: EG(["shop", "leaderboard"]),
        gyroAiming: zG,
        gyroSensitivity: rG(fG.Q),
        gyroActivation: EG(["always", "aiming", "button"]),
        gyroButton: EG(UG.X),
        emoteButton: EG(["tapHold", "wheel"])
      },
      XG = [{
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
      uG = GG => {
        const bG = {};
        if ("object" !== typeof GG || null === GG) return bG;
        for (const [ZG, wG] of Object.entries(GG)) Object.prototype.hasOwnProperty.call(YG.f, ZG) && JG(UG.X, wG) && (bG[ZG] = wG);
        return bG
      },
      iG = GG => {
        const bG = {};
        for (const ZG of Object.keys(QG))("bindings" === ZG ? Object.keys(GG.bindings).length > 0 : GG[ZG] !== QG[ZG]) && (bG[ZG] = GG[ZG]);
        0 !== Object.keys(bG).length ? yG.h.setItem(KG, bG) : yG.h.removeItem(KG)
      };
    let CG = (() => {
        const GG = yG.h.getItem(KG),
          bG = (GG => {
            const bG = "object" === typeof GG && null !== GG ? GG : {},
              ZG = {
                ...QG,
                bindings: uG(bG.bindings)
              };
            for (const SG of Object.keys(oG)) {
              const GG = oG[SG](bG[SG]);
              void 0 !== GG && (ZG[SG] = GG)
            }
            const wG = Object.keys(bG).filter((GG => !!Object.prototype.hasOwnProperty.call(QG, GG) && ("bindings" === GG ? "object" !== typeof bG.bindings || null === bG.bindings || Object.keys(bG.bindings).length !== Object.keys(ZG.bindings).length : ZG[GG] !== bG[GG])));
            return wG.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${wG.join(", ")}`), ZG
          })(GG);
        return null !== GG && void 0 !== GG && iG(bG), bG
      })(),
      WG = {
        ...CG,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const GG = {},
            bG = new URLSearchParams(window.location.search);
          for (const {
              param: ZG,
              key: wG
            }
            of XG) {
            const SG = oG[wG](bG.get(ZG));
            void 0 !== SG && (GG[wG] = SG)
          }
          return GG
        })()
      };
    const mG = () => WG,
      IG = () => {
        var GG, bG;
        const ZG = mG().promptFamily;
        return "auto" !== ZG ? ZG : null !== (GG = null === (bG = VG.d.getActivePad()) || void 0 === bG ? void 0 : bG.family) && void 0 !== GG ? GG : "xbox"
      },
      FG = GG => {
        const bG = WG;
        CG = {
          ...CG,
          ...GG
        }, iG(CG), WG = {
          ...WG,
          ...GG
        }, (GG => {
          SG.l.xh(pG.h, WG), hG.some((bG => GG[bG] !== WG[bG])) && SG.l.xh(pG.d, WG)
        })(bG)
      },
      vG = () => {
        const [GG, bG] = (0, wG.useState)(WG);
        return (0, LG.g)(pG.h, bG), GG
      }
  },
  8698: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    const wG = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      SG = GG => wG.has(GG)
  },
  8202: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => hG.b,
      d: () => zG
    });
    var wG = ZG(8205),
      SG = ZG(8212);
    const LG = .1,
      yG = .3;
    class kG {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(GG, bG) {
        const ZG = null === this.lastMs ? 0 : Math.min(Math.max(0, bG - this.lastMs), 100);
        this.lastMs = bG;
        const wG = Math.hypot(GG.x, GG.y);
        if (wG >= yG) return this.anchor = null, void(this.returning = !0);
        wG >= LG || (this.returning = !1);
        const SG = this.anchor;
        if (!SG || Math.hypot(GG.x - SG.x, GG.y - SG.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: GG.x,
          y: GG.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ZG, this.steadyMs < 1e3) return;
        const kG = Math.max(wG, Math.hypot(SG.x, SG.y));
        kG < LG ? this.deadzone = 0 : this.returning && (this.deadzone = kG + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(GG) {
        return Math.hypot(GG.x, GG.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : GG
      }
    }
    const UG = (GG, bG) => {
        var ZG, wG;
        return null !== (ZG = GG && (null === (wG = Object.getOwnPropertyDescriptor(GG, bG)) || void 0 === wG ? void 0 : wG.get)) && void 0 !== ZG ? ZG : null
      },
      YG = GG => {
        const bG = GG.vendorName;
        return "string" === typeof bG ? bG : void 0
      },
      VG = ((GG, bG) => {
        const ZG = UG(GG, "index"),
          wG = UG(GG, "id"),
          SG = UG(GG, "connected"),
          LG = UG(GG, "mapping"),
          yG = UG(GG, "buttons"),
          kG = UG(GG, "axes"),
          VG = UG(bG, "pressed"),
          pG = UG(bG, "value");
        return ZG && wG && SG && LG && yG && kG && VG && pG ? GG => {
          const bG = yG.call(GG),
            UG = kG.call(GG),
            fG = {
              index: Number(ZG.call(GG)),
              id: String(wG.call(GG)),
              connected: !0 === SG.call(GG),
              mapping: String(LG.call(GG)),
              buttons: [],
              axes: [],
              vendorName: YG(GG)
            };
          for (let ZG = 0; ZG < bG.length; ZG++) fG.buttons.push({
            pressed: !0 === VG.call(bG[ZG]),
            value: Number(pG.call(bG[ZG]))
          });
          for (let ZG = 0; ZG < UG.length; ZG++) fG.axes.push(Number(UG[ZG]));
          return fG
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      pG = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var fG = ZG(1363),
      QG = ZG(1366);
    const KG = GG => ({
      pressed: GG,
      value: GG ? 1 : 0
    });
    var hG = ZG(1993);
    const dG = yG,
      JG = GG => {
        const bG = new Array(wG.T).fill(0);
        for (let ZG = 0; ZG < wG.T && ZG < GG.buttons.length; ZG++) {
          const SG = GG.buttons[ZG];
          bG[ZG] = SG.pressed && !(0, wG.I)(ZG) ? Math.max(SG.value, wG.v) : SG.value
        }
        return bG
      },
      rG = (GG, bG) => {
        var ZG, wG;
        return {
          x: null !== (ZG = GG.axes[bG]) && void 0 !== ZG ? ZG : 0,
          y: null !== (wG = GG.axes[bG + 1]) && void 0 !== wG ? wG : 0
        }
      };
    const zG = new class {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VG;
        this.readGamepads = GG, this.requireTrustedPads = bG, this.nativeReader = ZG, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = GG => {
          GG.isTrusted && this.trustedIndices.add(GG.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = GG => {
          this.trustedIndices.delete(GG.gamepad.index)
        }, this.Tp = GG => {
          if (this.rafId = 0, !this.running) return;
          const bG = 0 === this.lastTimestampMs ? 16 : Math.min(100, GG - this.lastTimestampMs);
          this.lastTimestampMs = GG;
          try {
            this.poll(GG, bG)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Tp))
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
      onFrame(GG) {
        return this.frameListeners.add(GG), () => {
          this.frameListeners.delete(GG)
        }
      }
      onActivePadChanged(GG) {
        return this.connectionListeners.add(GG), () => {
          this.connectionListeners.delete(GG)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(GG) {
        return this.connectedListeners.add(GG), () => {
          this.connectedListeners.delete(GG)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const GG = this.readPads()[this.activeInfo.index],
          bG = GG ? this.readPad(GG) : null;
        return bG && bG.id === this.activeInfo.id ? GG : null
      }
      poll(GG, bG) {
        var ZG, SG;
        const LG = this.readPads();
        let yG = null,
          UG = !1;
        const YG = [],
          VG = Math.max(LG.length, this.slots.length);
        for (let zG = 0; zG < VG; zG++) {
          var pG;
          const bG = zG < LG.length ? LG[zG] : null,
            ZG = bG ? this.readPad(bG) : null;
          if (!ZG || !ZG.connected || !this.isUsable(ZG)) {
            this.slots[zG] = null;
            continue
          }
          let SG = this.slots[zG];
          SG && SG.id === ZG.id || (SG = {
            id: ZG.id,
            Ik: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new kG,
            rightRest: new kG
          }, this.slots[zG] = SG);
          const VG = rG(ZG, 0),
            fG = rG(ZG, 2);
          !SG.leftSettled && Math.hypot(VG.x, VG.y) < dG && (SG.leftSettled = !0), !SG.rightSettled && Math.hypot(fG.x, fG.y) < dG && (SG.rightSettled = !0), SG.leftRest.observe(VG, GG), SG.rightRest.observe(fG, GG);
          const QG = JG(ZG),
            KG = (0, wG.q)(QG, SG.Ik),
            hG = SG.Ik,
            EG = KG.map(((GG, bG) => GG && !hG[bG]));
          SG.Ik = KG;
          const oG = {
            pad: ZG,
            slot: SG,
            values: QG
          };
          zG === (null === (pG = this.activeInfo) || void 0 === pG ? void 0 : pG.index) && ZG.id === this.activeInfo.id ? (yG = oG, UG = EG.includes(!0)) : EG.includes(!0) && YG.push({
            polled: oG,
            rose: EG
          })
        }
        const fG = this.slots.some((GG => null !== GG));
        if (fG !== this.anyPadConnected) {
          this.anyPadConnected = fG;
          for (const GG of this.connectedListeners) GG()
        }
        const QG = null !== (ZG = null === (SG = yG) || void 0 === SG ? void 0 : SG.slot.Ik) && void 0 !== ZG ? ZG : [],
          KG = UG ? void 0 : YG.find((GG => {
            let {
              rose: bG
            } = GG;
            return bG.some(((GG, bG) => GG && !QG[bG]))
          }));
        if (KG ? (yG = KG.polled, this.setActive(KG.polled.pad)) : this.activeInfo && !yG && this.setActive(null), !yG || !this.activeInfo) return;
        const hG = ((GG, bG) => {
          let {
            pad: ZG,
            slot: SG,
            values: LG
          } = GG;
          const yG = (0, wG.u)(bG);
          return yG.values = LG, SG.leftSettled && (yG.leftStick = SG.leftRest.apply(rG(ZG, 0))), SG.rightSettled && (yG.rightStick = SG.rightRest.apply(rG(ZG, 2))), yG
        })(yG, GG);
        for (const wG of this.frameListeners) wG(hG, bG, this.activeInfo)
      }
      readPad(GG) {
        const bG = this.readSnapshot(GG);
        return bG && (0, QG.e)(bG) ? (GG => {
          const bG = bG => {
              var ZG;
              return null !== (ZG = GG.buttons[bG]) && void 0 !== ZG ? ZG : KG(!1)
            },
            ZG = bG => {
              var ZG;
              return null !== (ZG = GG.axes[bG]) && void 0 !== ZG ? ZG : 0
            },
            wG = GG.axes.length > 9,
            SG = wG ? (GG => {
              const bG = 0 !== GG;
              return {
                up: bG && (GG >= -1 && GG < -.7 || GG >= .95 && GG <= 1),
                right: bG && GG >= -.75 && GG < -.1,
                down: bG && GG >= -.2 && GG < .45,
                left: bG && GG >= .4 && GG <= 1
              }
            })(ZG(9)) : {
              up: ZG(5) < -.5,
              down: ZG(5) > .5,
              left: ZG(4) < -.5,
              right: ZG(4) > .5
            };
          return {
            ...GG,
            mapping: "standard",
            buttons: [bG(1), bG(2), bG(0), bG(3), bG(4), bG(5), bG(6), bG(7), bG(8), bG(9), bG(10), bG(11), KG(SG.up), KG(SG.down), KG(SG.left), KG(SG.right), bG(12)],
            axes: [ZG(0), ZG(1), ZG(2), ZG(wG ? 5 : 3)]
          }
        })(bG) : bG
      }
      readSnapshot(GG) {
        if (this.nativeReader) try {
          return this.nativeReader(GG)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (GG => {
          const bG = GG;
          return {
            index: bG.index,
            id: bG.id,
            connected: bG.connected,
            mapping: bG.mapping,
            buttons: Array.from(bG.buttons, (GG => ({
              pressed: GG.pressed,
              value: GG.value
            }))),
            axes: Array.from(bG.axes),
            vendorName: YG(GG)
          }
        })(GG)
      }
      isUsable(GG) {
        return !(0, fG.h)(GG.id) && ("standard" !== GG.mapping ? (this.warnedNonStandardIds.has(GG.id) || (this.warnedNonStandardIds.add(GG.id), console.warn(`Controller "${GG.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(GG.index))
      }
      setActive(GG) {
        this.activeInfo = GG ? {
          index: GG.index,
          id: GG.id,
          family: (0, SG.b)(GG.id, GG.vendorName)
        } : null;
        for (const bG of this.connectionListeners) bG(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (GG) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", GG)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Tp))
      }
    }((() => pG ? pG.call(navigator) : []), !0);
    zG.listenForConnections()
  },
  8784: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => yG,
      j: () => kG,
      k: () => SG
    });
    var wG = ZG(8792);
    const SG = GG => {
        const bG = [];
        GG.holdingGun && bG.push({
          kind: "reload"
        }), GG.touchscreenActionButton && bG.push({
          kind: "touchButton",
          label: GG.touchscreenActionButton
        });
        for (const LG of null !== (ZG = null === (SG = GG.customButtons) || void 0 === SG ? void 0 : SG.filter(wG.e)) && void 0 !== ZG ? ZG : []) {
          var ZG, SG;
          bG.push({
            kind: "customButton",
            id: LG.id,
            icon: LG.icon,
            description: LG.description
          })
        }
        return bG
      },
      LG = GG => GG.length >= 2,
      yG = GG => "specialAction" !== GG.kind,
      kG = (GG, bG) => {
        if (null === GG || null === bG) return GG === bG;
        if (GG.kind !== bG.kind) return !1;
        switch (GG.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return GG.action === bG.action;
          case "customButton":
            return GG.id === bG.id && GG.icon === bG.icon;
          case "touchButton":
            return GG.label === bG.label
        }
      }
  },
  8710: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = {
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
  8776: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => QG,
      g: () => pG,
      k: () => KG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(1389),
      yG = ZG(8784),
      kG = ZG(8800);
    let UG = null;
    const YG = () => UG,
      VG = GG => {
        (0, yG.j)(UG, GG) || (UG = GG, SG.l.xh(kG.g, UG))
      },
      pG = () => {
        const [GG, bG] = (0, wG.useState)(YG);
        return (0, LG.g)(kG.g, bG), GG
      };
    let fG = !1;
    const QG = GG => {
        GG !== fG && (fG = GG, SG.l.xh(kG.k, GG))
      },
      KG = () => {
        const [GG, bG] = (0, wG.useState)(fG);
        return (0, LG.g)(kG.k, bG), GG
      }
  },
  8816: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      f: () => kG
    });
    var wG = ZG(19),
      SG = ZG(8800);
    let LG = !1;
    const yG = () => LG,
      kG = GG => {
        GG !== LG && (LG = GG, wG.l.xh(SG.n, LG))
      }
  },
  8809: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      d: () => UG
    });
    var wG = ZG(19),
      SG = ZG(8800);
    let LG = null,
      yG = 0;
    const kG = () => LG,
      UG = GG => {
        null === GG && null === LG || (LG = null === GG ? null : {
          id: ++yG,
          holdMs: GG
        }, wG.l.xh(SG.q, LG))
      }
  },
  8800: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      g: () => wG,
      k: () => SG,
      n: () => kG,
      q: () => UG,
      u: () => YG,
      w: () => yG
    });
    const wG = "controllerActionHintChanged",
      SG = "controllerActionWheelHintChanged",
      LG = "controllerOpenChat",
      yG = "controllerSneakToggledChanged",
      kG = "controllerAttackLatchedChanged",
      UG = "controllerDropStackHoldChanged",
      YG = "controllerPickBlockHintChanged"
  },
  8823: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      f: () => kG
    });
    var wG = ZG(19),
      SG = ZG(8800);
    let LG = !1;
    const yG = () => LG,
      kG = GG => {
        GG !== LG && (LG = GG, wG.l.xh(SG.u, LG))
      }
  },
  8866: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => kG
    });
    var wG = ZG(19),
      SG = ZG(8800);
    let LG = !1;
    const yG = () => LG,
      kG = GG => {
        GG !== LG && (LG = GG, wG.l.xh(SG.w, LG))
      }
  },
  8742: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor() {
        this.downAtMs = null
      }
      update(GG, bG, ZG, wG) {
        if (GG) return this.downAtMs = ZG, null;
        if (null === this.downAtMs) return null;
        const SG = ZG - this.downAtMs >= wG;
        return bG ? SG ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, SG ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8256: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      i: () => fG,
      j: () => kG,
      l: () => zG,
      p: () => rG
    });
    var wG = ZG(29),
      SG = ZG(8224),
      LG = ZG(8205);
    const yG = (() => {
        try {
          return ZG(8265)
        } catch {
          return null
        }
      })(),
      kG = [...LG.X, "LeftStick", "RightStick"],
      UG = new Map,
      YG = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      VG = (new Set(Object.values(YG)), {
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
      pG = (GG, bG) => {
        var ZG, wG;
        return null !== (ZG = null === (wG = VG[YG[GG]]) || void 0 === wG ? void 0 : wG[bG]) && void 0 !== ZG ? ZG : 1
      },
      fG = (GG, bG) => {
        const ZG = `./${YG[GG]}/${bG}.svg`;
        let wG = UG.get(ZG);
        return void 0 === wG && (wG = yG ? yG(ZG) : "", UG.set(ZG, wG)), wG
      },
      QG = new Set,
      KG = [],
      hG = GG => {
        if (!QG.has(GG)) {
          QG.add(GG);
          for (const bG of kG) {
            const ZG = fG(GG, bG);
            if (ZG) {
              const GG = new Image;
              GG.crossOrigin = "anonymous", GG.src = ZG, KG.push(GG)
            }
          }
        }
      },
      dG = "controllerGlyphFamily";
    let JG = null;
    const rG = GG => {
        GG !== JG && (JG = GG, wG.h.setItem(dG, GG), hG(GG))
      },
      zG = () => {
        const GG = wG.h.getItem(dG);
        (0, SG.h)(GG) && GG !== JG && (JG = GG, hG(GG))
      }
  },
  8889: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => AG,
      f: () => sG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(1389),
      yG = ZG(8214),
      kG = ZG(8202),
      UG = ZG(8248),
      YG = ZG(8222);
    const VG = {
        x: 0,
        y: 0,
        z: 0
      },
      pG = Math.PI / 180,
      fG = GG => Math.hypot(GG.x, GG.y, GG.z),
      QG = (GG, bG) => ({
        x: GG.x * bG,
        y: GG.y * bG,
        z: GG.z * bG
      }),
      KG = (GG, bG) => ({
        x: GG.x + bG.x,
        y: GG.y + bG.y,
        z: GG.z + bG.z
      }),
      hG = (GG, bG) => ({
        x: GG.x - bG.x,
        y: GG.y - bG.y,
        z: GG.z - bG.z
      }),
      dG = GG => {
        const bG = fG(GG);
        return 0 === bG ? VG : QG(GG, 1 / bG)
      },
      JG = GG => ({
        min: {
          ...GG
        },
        max: {
          ...GG
        }
      }),
      rG = (GG, bG) => ({
        min: {
          x: Math.min(GG.min.x, bG.x),
          y: Math.min(GG.min.y, bG.y),
          z: Math.min(GG.min.z, bG.z)
        },
        max: {
          x: Math.max(GG.max.x, bG.x),
          y: Math.max(GG.max.y, bG.y),
          z: Math.max(GG.max.z, bG.z)
        }
      }),
      zG = (GG, bG) => GG.max.x - GG.min.x <= bG && GG.max.y - GG.min.y <= bG && GG.max.z - GG.min.z <= bG;
    class EG {
      constructor() {
        this.bias = VG, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = VG, this.windowSec = 0
      }
      update(GG) {
        const bG = this.gyroRange ? rG(this.gyroRange, GG.gyro) : JG(GG.gyro),
          ZG = GG.accel ? this.accelRange ? rG(this.accelRange, GG.accel) : JG(GG.accel) : null;
        if (!zG(bG, 1) || ZG && !zG(ZG, .01)) return void this.restartWindow(GG);
        if (this.gyroRange = bG, this.accelRange = ZG, this.sum = KG(this.sum, QG(GG.gyro, GG.dtSec)), this.windowSec += GG.dtSec, this.windowSec < 1) return;
        const wG = QG(this.sum, 1 / this.windowSec);
        if (fG(wG) > 5) return;
        const SG = hG(wG, this.bias);
        let LG = 0;
        !this.calibrated || this.windowSec >= 3 ? LG = 1 : fG(SG) <= 1 && (LG = Math.min(1, GG.dtSec / 1)), this.bias = KG(this.bias, QG(SG, LG)), this.calibrated = this.calibrated || LG > 0
      }
      correct(GG) {
        return hG(GG, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = VG, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = VG, this.windowSec = 0
      }
      restartWindow(GG) {
        this.gyroRange = JG(GG.gyro), this.accelRange = GG.accel ? JG(GG.accel) : null, this.sum = VG, this.windowSec = 0
      }
    }
    class oG {
      constructor() {
        this.down = null
      }
      update(GG, bG, ZG) {
        const wG = dG(QG(bG, -1));
        if (!this.down) return this.down = wG, wG;
        const SG = QG(GG, pG * ZG),
          LG = this.down,
          yG = {
            x: LG.x - (SG.y * LG.z - SG.z * LG.y),
            y: LG.y - (SG.z * LG.x - SG.x * LG.z),
            z: LG.z - (SG.x * LG.y - SG.y * LG.x)
          },
          kG = 0 === fG(wG) ? 0 : Math.min(1, ZG / .25);
        var UG, YG;
        return this.down = dG((YG = kG, KG(UG = yG, QG(hG(wG, UG), YG)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class XG {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(GG, bG, ZG) {
        const wG = Math.hypot(GG, bG),
          SG = Math.max(0, Math.min(1, (wG - 2) / 2)),
          LG = {
            yaw: GG * (1 - SG),
            pitch: bG * (1 - SG),
            dtSec: ZG
          };
        for (this.entries.push(LG), this.windowSec += ZG; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let yG = 0,
          kG = 0;
        for (const YG of this.entries) yG += YG.yaw * YG.dtSec, kG += YG.pitch * YG.dtSec;
        const UG = this.windowSec > 0 ? {
          yaw: yG / this.windowSec,
          pitch: kG / this.windowSec
        } : {
          yaw: LG.yaw,
          pitch: LG.pitch
        };
        return {
          yaw: GG * SG + UG.yaw,
          pitch: bG * SG + UG.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class uG {
      constructor() {
        this.calibrator = new EG, this.gravity = new oG, this.smoother = new XG
      }
      process(GG, bG, ZG) {
        const wG = Math.max(0, Math.min(.05, bG));
        this.calibrator.update({
          ...GG,
          dtSec: wG
        });
        const SG = this.calibrator.correct(GG.gyro);
        let LG = SG.y;
        "player" === ZG && GG.accel && (LG = ((GG, bG) => {
          const ZG = GG.y * bG.y + GG.z * bG.z;
          return -Math.sign(ZG) * Math.min(1.41 * Math.abs(ZG), Math.hypot(GG.y, GG.z))
        })(SG, this.gravity.update(SG, GG.accel, wG)));
        const yG = this.smoother.apply(LG, SG.x, wG),
          kG = ((GG, bG) => {
            const ZG = Math.hypot(GG, bG);
            if (ZG >= 1) return {
              yaw: GG,
              pitch: bG
            };
            const wG = ZG / 1;
            return {
              yaw: GG * wG,
              pitch: bG * wG
            }
          })(yG.yaw, yG.pitch);
        return {
          yawDeg: kG.yaw * wG,
          pitchDeg: kG.pitch * wG
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
    const iG = (GG, bG) => {
      var ZG, wG, SG;
      const LG = bG * pG,
        yG = null !== (ZG = GG.beta) && void 0 !== ZG ? ZG : 0,
        kG = null !== (wG = GG.gamma) && void 0 !== wG ? wG : 0;
      return {
        x: yG * Math.cos(LG) - kG * Math.sin(LG),
        y: yG * Math.sin(LG) + kG * Math.cos(LG),
        z: null !== (SG = GG.alpha) && void 0 !== SG ? SG : 0
      }
    };
    var CG = ZG(8892);
    class WG {
      constructor(GG, bG, ZG) {
        this.hid = GG, this.sink = bG, this.onControllersChanged = ZG, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = GG => {
          this.openController(GG.device).catch((GG => {
            console.warn("Could not open motion controller", GG)
          }))
        }, this.onDisconnect = GG => {
          this.opening.has(GG.device) && this.disconnectedWhileOpening.add(GG.device);
          const bG = this.controllers.get(GG.device);
          bG && (this.forget(bG), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const GG = await this.hid.getDevices();
        for (const bG of GG) await this.openController(bG).catch((GG => {
          console.warn("Could not open motion controller", GG)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const GG of [...this.controllers.values()]) this.forget(GG);
        this.onControllersChanged()
      }
      async request() {
        const GG = await this.hid.requestDevice({
          filters: CG.h
        });
        let bG = 0;
        for (const ZG of GG) await this.openController(ZG).catch((GG => {
          console.warn("Could not open motion controller", GG), bG++
        }));
        return bG
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((GG => null !== (0, CG.f)(GG.vendorId, GG.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((GG => GG.kind))
      }
      forget(GG) {
        GG.device.removeEventListener("inputreport", GG.onReport), this.controllers.get(GG.device) === GG && this.controllers.delete(GG.device)
      }
      async openController(GG) {
        const bG = (0, CG.f)(GG.vendorId, GG.productId);
        if (!bG || !this.running || this.controllers.has(GG) || this.opening.has(GG)) return;
        this.opening.add(GG);
        let ZG = !1;
        try {
          GG.opened || await GG.open()
        } finally {
          this.opening.delete(GG), ZG = this.disconnectedWhileOpening.delete(GG)
        }
        if (ZG) return void GG.close().catch((GG => {
          console.debug("Could not close an unplugged motion controller", GG)
        }));
        if (!this.running) return;
        const wG = {
          device: GG,
          kind: bG,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: GG => {
            this.onReport(wG, GG)
          }
        };
        this.controllers.set(GG, wG), GG.addEventListener("inputreport", wG.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(wG)
        } catch (SG) {
          console.warn(`Could not turn on motion for ${bG}`, SG), this.controllers.get(GG) === wG && (this.forget(wG), this.onControllersChanged())
        }
      }
      async enableMotion(GG) {
        let {
          device: bG,
          kind: ZG
        } = GG;
        if ((0, CG.g)(ZG))
          for (const wG of CG.w[ZG]) await bG.receiveFeatureReport(wG).catch((GG => {
            console.debug(`Motion controller feature report ${wG} unavailable`, GG)
          }));
        else
          for (let wG = 0; wG < 2; wG++)
            for (const {
                subcommand: GG,
                args: ZG
              }
              of CG.y) await bG.sendReport(CG.B, (0, CG.b)(this.switchPacketCounter++, GG, ZG)), await new Promise((GG => {
              setTimeout(GG, 60)
            }))
      }
      onReport(GG, bG) {
        const ZG = (0, CG.q)(GG.kind, bG.reportId, bG.data, GG.device.productId);
        if (!ZG) return;
        const wG = null === GG.lastEventMs ? 0 : (bG.timeStamp - GG.lastEventMs) / 1e3;
        GG.lastEventMs = bG.timeStamp;
        let SG = ZG.dtSec;
        if (null !== SG && wG > 0 && (SG = Math.max(.001, Math.min(.017, wG / ZG.readings.length))), null === SG && null !== ZG.sensorClock && (0, CG.g)(GG.kind)) {
          const bG = (0, CG.s)(GG.kind, GG.lastClock, ZG.sensorClock);
          GG.lastClock = ZG.sensorClock, SG = 0 === bG ? null : bG
        }
        if (GG.lastReadingMs = bG.timeStamp, this.isPreferred(GG, bG.timeStamp))
          for (const yG of ZG.readings) {
            var LG;
            this.sink(yG, null !== (LG = SG) && void 0 !== LG ? LG : wG, `hid${GG.openedOrder}`)
          }
      }
      isPreferred(GG, bG) {
        const ZG = GG => 1e6 * CG.p[GG.kind] + GG.openedOrder;
        for (const wG of this.controllers.values())
          if (wG !== GG && bG - wG.lastReadingMs < 500 && ZG(wG) < ZG(GG)) return !1;
        return !0
      }
    }
    var mG = ZG(80);
    const IG = () => DeviceMotionEvent,
      FG = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, mG.isMobile)(),
      vG = () => {
        var GG;
        const bG = null === (GG = window.screen.orientation) || void 0 === GG ? void 0 : GG.angle;
        return "number" === typeof bG ? bG : "number" === typeof window.orientation ? window.orientation : 0
      };
    class aG {
      constructor(GG, bG) {
        this.sink = GG, this.onStateChanged = bG, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((GG => {
            console.warn("Could not enable the motion sensor", GG)
          }))
        }, this.onMotion = GG => {
          const bG = GG.rotationRate;
          if (!bG || null === bG.alpha && null === bG.beta && null === bG.gamma) return;
          const ZG = null === this.lastEventMs ? 0 : (GG.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = GG.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: iG(bG, vG()),
            accel: null
          }, ZG, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof IG().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const GG = IG().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof GG) return void this.listen();
        let bG;
        this.disarmGestureRequest();
        try {
          bG = await GG.call(DeviceMotionEvent)
        } catch (ZG) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ZG
        }
        this.wanted && ("granted" === bG ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(GG) {
        this.state !== GG && (this.state = GG, this.onStateChanged())
      }
    }
    const cG = "controllerGyroStatusChanged",
      lG = {
        SF: 0,
        kF: 0
      },
      jG = GG => {
        var bG, ZG;
        return "undefined" === typeof document || (null === (bG = null === (ZG = document.featurePolicy) || void 0 === ZG ? void 0 : ZG.allowsFeature(GG)) || void 0 === bG || bG)
      };
    class PG {
      constructor() {
        this.processor = new uG, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = GG => {
          const bG = GG.gyroAiming && kG.d.hasConnectedPad();
          var ZG, wG;
          bG !== this.phoneRunning && (this.phoneRunning = bG, bG ? null === (ZG = this.phone) || void 0 === ZG || ZG.start() : null === (wG = this.phone) || void 0 === wG || wG.stop());
          if (GG.gyroAiming !== this.running) {
            var SG, LG;
            if (this.running = GG.gyroAiming, this.running) null === (SG = this.hid) || void 0 === SG || SG.start().catch((GG => {
              console.warn("Could not open motion controllers", GG)
            }));
            else null === (LG = this.hid) || void 0 === LG || LG.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          SG.l.xh(cG, this.getStatus())
        };
        const GG = (() => {
            var GG;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (GG = navigator.hid) && void 0 !== GG ? GG : null
          })(),
          bG = jG("hid");
        this.hidBlocked = null !== GG && !bG, this.hid = GG && bG ? new WG(GG, ((GG, bG, ZG) => {
          this.lastHidReadingMs = performance.now(), this.feed(GG, bG, "player", ZG)
        }), this.publishStatus) : null;
        const ZG = jG("accelerometer") && jG("gyroscope");
        this.phoneBlocked = FG() && !ZG, this.phone = FG() && ZG ? new aG(((GG, bG, ZG) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(GG, bG, "local", ZG)
        }), this.publishStatus) : null, SG.l.subscribe(YG.h, this.syncWithSettings), kG.d.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, YG.i)()), this.publishStatus()
        })), this.syncWithSettings((0, YG.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var GG, bG, ZG, wG;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (GG = null === (bG = this.hid) || void 0 === bG ? void 0 : bG.getConnectedKinds()) && void 0 !== GG ? GG : [],
          phoneMotion: null !== (ZG = null === (wG = this.phone) || void 0 === wG ? void 0 : wG.getState()) && void 0 !== ZG ? ZG : "off",
          padConnected: kG.d.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var GG;
        await (null === (GG = this.phone) || void 0 === GG ? void 0 : GG.requestPermission())
      }
      drainLookDelta() {
        const GG = performance.now();
        GG - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = GG;
        const bG = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ZG = (0, YG.i)();
        return ZG.gyroAiming && (GG => {
          let {
            activation: bG,
            isHeld: ZG,
            useButton: wG,
            gyroButton: SG
          } = GG;
          return "always" === bG || ZG("aiming" === bG ? wG : SG)
        })({
          activation: ZG.gyroActivation,
          isHeld: GG => UG.b.isButtonHeld(GG),
          useButton: (0, yG.j)("use"),
          gyroButton: ZG.gyroButton
        }) ? ((GG, bG) => ({
          SF: -GG.yawDeg * bG * pG,
          kF: -GG.pitchDeg * bG * pG
        }))(bG, ZG.gyroSensitivity) : lG
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(GG, bG) {
        this.feed(GG, bG, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(GG, bG, ZG, wG) {
        this.source !== wG && (this.processor.reset(), this.source = wG);
        const SG = this.processor.process(GG, bG, ZG);
        this.pendingYawDeg += SG.yawDeg, this.pendingPitchDeg += SG.pitchDeg
      }
    }
    let MG = null;
    const AG = () => (MG || (MG = new PG), MG),
      sG = () => {
        const [GG, bG] = (0, wG.useState)((() => AG().getStatus()));
        return (0, LG.g)(cG, bG), (0, wG.useEffect)((() => {
          bG(AG().getStatus())
        }), []), GG
      }
  },
  8892: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => zG,
      b: () => oG,
      f: () => UG,
      g: () => wG,
      h: () => kG,
      l: () => YG,
      p: () => VG,
      q: () => rG,
      s: () => dG,
      w: () => uG,
      y: () => XG
    });
    const wG = GG => "dualShock4" === GG || "dualSense" === GG,
      SG = 1356,
      LG = 1406,
      yG = [{
        vendorId: SG,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: SG,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: SG,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: SG,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: SG,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: LG,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: LG,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: LG,
        productId: 8199,
        kind: "joyConRight"
      }],
      kG = yG.map((GG => {
        let {
          vendorId: bG,
          productId: ZG
        } = GG;
        return {
          vendorId: bG,
          productId: ZG
        }
      })),
      UG = (GG, bG) => {
        var ZG, wG;
        return null !== (ZG = null === (wG = yG.find((ZG => ZG.vendorId === GG && ZG.productId === bG))) || void 0 === wG ? void 0 : wG.kind) && void 0 !== ZG ? ZG : null
      },
      YG = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      VG = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      pG = 2e3 / 32767,
      fG = 1 / 8192,
      QG = 936 / 13371,
      KG = (GG, bG, ZG) => ({
        x: GG.getInt16(bG, !0) * ZG,
        y: GG.getInt16(bG + 2, !0) * ZG,
        z: GG.getInt16(bG + 4, !0) * ZG
      }),
      hG = GG => 0 === GG.x && 0 === GG.y && 0 === GG.z,
      dG = (GG, bG, ZG) => null === bG ? null : "dualShock4" === GG ? 16 * (ZG - bG & 65535) / 3 / 1e6 : (ZG - bG >>> 0) / 3 / 1e6,
      JG = (GG, bG) => "joyConRight" === bG ? {
        x: GG.y,
        y: -GG.z,
        z: -GG.x
      } : {
        x: -GG.y,
        y: GG.z,
        z: -GG.x
      },
      rG = (GG, bG, ZG, SG) => wG(GG) ? ((GG, bG, ZG, wG) => {
        const SG = ((GG, bG, ZG) => "dualShock4" === GG ? 1 === bG && ZG >= 63 ? 0 : 17 === bG && ZG >= 65 ? 2 : null : 1 === bG && ZG >= 62 ? 0 : 49 === bG && ZG >= 63 ? 1 : null)(GG, bG, ZG.byteLength);
        if (null === SG) return null;
        if (2976 === wG && 1 === bG && 0 !== (4 & ZG.getUint8(30))) return null;
        const LG = SG + ("dualShock4" === GG ? 12 : 15),
          yG = KG(ZG, LG, pG),
          kG = KG(ZG, LG + 6, fG);
        return hG(yG) && hG(kG) ? null : {
          readings: [{
            gyro: yG,
            accel: kG
          }],
          dtSec: null,
          sensorClock: "dualShock4" === GG ? ZG.getUint16(SG + 9, !0) : ZG.getUint32(SG + 27, !0)
        }
      })(GG, bG, ZG, SG) : ((GG, bG, ZG) => {
        if (48 !== bG && 49 !== bG || ZG.byteLength < 48) return null;
        const wG = [];
        for (let SG = 0; SG < 3; SG++) {
          const bG = KG(ZG, 12 + 12 * SG, 244e-6),
            LG = KG(ZG, 18 + 12 * SG, QG);
          if (hG(LG) && hG(bG)) return null;
          wG.push({
            gyro: JG(LG, GG),
            accel: JG(bG, GG)
          })
        }
        return {
          readings: wG,
          dtSec: .005,
          sensorClock: null
        }
      })(GG, bG, ZG),
      zG = 1,
      EG = [0, 1, 64, 64, 0, 1, 64, 64],
      oG = (GG, bG, ZG) => new Uint8Array([15 & GG, ...EG, bG, ...ZG]),
      XG = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      uG = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8250: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => PG,
      f: () => eG,
      j: () => XG,
      l: () => QG.k,
      o: () => sG,
      s: () => AG,
      t: () => uG,
      x: () => qG,
      y: () => QG.r,
      B: () => QG.w,
      F: () => RG,
      G: () => QG.E,
      H: () => aG
    });
    var wG = ZG(51),
      SG = ZG(17),
      LG = ZG(19),
      yG = ZG(1389),
      kG = ZG(1251),
      UG = ZG(8222),
      YG = ZG(8254),
      VG = ZG(8212),
      pG = ZG(8202),
      fG = ZG(8256),
      QG = ZG(1343),
      KG = ZG(8205),
      hG = ZG(8698),
      dG = ZG(4403),
      JG = ZG(95);
    class rG {
      constructor(GG) {
        this.deps = GG, this.pads = new Map
      }
      observe(GG, bG, ZG) {
        if (!this.deps.touchOnly) return;
        const wG = this.pads.get(bG.id);
        "proven" !== wG && ZG ? (this.pads.set(bG.id, "proven"), void 0 !== wG && this.deps.onReleased(bG, GG, GG.timestampMs - wG)) : void 0 === wG && (this.pads.set(bG.id, GG.timestampMs), this.deps.onHeld(bG, GG)), this.deps.setMayHide("proven" === this.pads.get(bG.id))
      }
    }
    const zG = GG => GG.values.flatMap(((GG, bG) => GG >= KG.N ? [String(bG)] : [])).join(",") || "none",
      EG = (GG, bG, wG, SG, LG) => {
        const yG = (0, QG.h)(),
          kG = document.visibilityState,
          UG = document.hasFocus();
        Promise.all([Promise.resolve().then((() => ZG(2897))), Promise.resolve().then((() => ZG(1032))), Promise.resolve().then((() => ZG(116)))]).then((ZG => {
          let [{
            logControllerHudHoldToGtag: YG
          }, {
            logClientLineFromEveryPage: VG
          }, {
            siteUsed: pG
          }] = ZG;
          YG(GG, bG.family, null === LG ? void 0 : Math.round(LG / 1e3)), VG(`touch HUD pad ${GG}`, oG(bG, wG, SG, LG, yG, kG, UG, pG))
        }), (() => {}))
      },
      oG = (GG, bG, ZG, wG, SG, LG, yG, kG) => {
        var UG;
        const YG = {
          pad_id: GG.id.slice(0, 120),
          pad_family: GG.family,
          pad_mapping: null !== (UG = null === ZG || void 0 === ZG ? void 0 : ZG.mapping) && void 0 !== UG ? UG : "unread",
          pad_axes: ZG ? String(ZG.axes.length) : "unread",
          pad_buttons: ZG ? String(ZG.buttons.length) : "unread",
          pressed: zG(bG),
          ms_since_touch: null === SG ? "none" : String(Math.round(bG.timestampMs - SG)),
          visibility: LG,
          focused: String(yG),
          site: kG
        };
        return null !== wG && (YG.held_ms = String(Math.round(wG))), YG
      };
    const XG = GG => !GG.repeat && !(0, hG.c)(GG.key),
      uG = "PadHidesCursor";
    let iG = !1;
    const CG = GG => {
        GG !== iG && (iG = GG, document.documentElement.classList.toggle(uG, GG))
      },
      WG = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(GG) {
          let bG = !1,
            ZG = !1;
          GG.values.forEach(((GG, wG) => {
            const SG = GG >= (this.buttonsDown[wG] ? KG.R : KG.N);
            SG && !this.buttonsDown[wG] && (bG = !0, ZG = !0), this.buttonsDown[wG] = SG
          }));
          return [GG.leftStick, GG.rightStick].forEach(((GG, wG) => {
            const SG = this.stickAnchors[wG];
            Math.hypot(GG.x, GG.y) < (SG ? KG.R : .3) ? this.stickAnchors[wG] = null : (!SG || Math.hypot(GG.x - SG.x, GG.y - SG.y) >= .3) && (this.stickAnchors[wG] = {
              x: GG.x,
              y: GG.y
            }, bG = !0, ZG ||= !SG)
          })), bG && (this.lastActivityMs = GG.timestampMs), this.onlyMovedOn = bG && !ZG, bG
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(GG) {
          return !(GG - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((GG => GG)) || this.stickAnchors.some((GG => null !== GG)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((GG => null !== GG))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      mG = (IG = () => pG.d.getActiveGamepad(), new rG({
        touchOnly: "touchOnly" === (0, JG.d)(),
        setMayHide: QG.t,
        onHeld: (GG, bG) => {
          EG("Ik", GG, bG, IG(), null)
        },
        onReleased: (GG, bG, ZG) => {
          EG("released", GG, bG, IG(), ZG)
        }
      }));
    var IG;
    let FG = null,
      vG = !1;
    const aG = () => vG;
    let cG = null,
      lG = !1,
      jG = null;
    const PG = () => jG;
    let MG = !1;
    const AG = (GG, bG) => {
        if (!WG.observe(GG)) return !1;
        if (mG.observe(GG, bG, WG.isStickOffRest()), MG && WG.wasOnlyMoveOn() && !(0, QG.k)()) return !1;
        MG = !1, vG = !1;
        const ZG = !(0, QG.k)();
        return ZG && (FG = GG, jG = !iG && lG && cG ? {
          ...cG
        } : null), lG = !1, (0, QG.r)("gamepad"), CG(!0), (0, fG.p)((0, UG.m)()), ZG
      },
      sG = GG => !(0, QG.k)() || GG === FG,
      qG = () => {
        WG.reset()
      },
      nG = () => {
        const GG = SG.e.get("activeInputDevice"),
          bG = "gamepad" === GG ? pG.d.getActivePad() : null;
        return {
          device: GG,
          inGame: (0, kG.A)(),
          padMovesMouse: null !== bG && (0, VG.e)(bG.id)
        }
      },
      gG = GG => {
        document.pointerLockElement ? cG = null : (cG ??= {
          x: 0,
          y: 0
        }, cG.x = GG.clientX, cG.y = GG.clientY)
      },
      eG = () => {
        const GG = new dG.c,
          bG = bG => {
            GG.reset(), MG = !1, (0, QG.r)(bG)
          },
          ZG = GG => {
            if (GG.isTrusted) {
              if (GG instanceof KeyboardEvent) {
                if ((0, QG.n)(GG), !XG(GG)) return;
                vG = !0
              }
              if (GG instanceof PointerEvent && "touch" === GG.pointerType) return cG = null, void bG("touch");
              GG instanceof PointerEvent && (gG(GG), lG = !0), ("pointerdown" !== GG.type || (GG => {
                let {
                  device: bG,
                  inGame: ZG,
                  padMovesMouse: wG
                } = GG;
                return !("gamepad" === bG && wG && ZG)
              })(nG())) && bG("keyboardMouse")
            }
          },
          wG = GG => {
            GG.isTrusted && (cG = null, bG("touch"))
          },
          yG = GG => {
            GG.isTrusted && "touch" !== GG.pointerType && !GG.relatedTarget && (cG = null)
          },
          kG = ZG => {
            if (!ZG.isTrusted || "touch" === ZG.pointerType) return;
            gG(ZG);
            const wG = ZG.movementX || 0,
              LG = ZG.movementY || 0;
            if (0 === wG && 0 === LG) return;
            if (lG = !0, CG(!1), "keyboardMouse" === SG.e.get("activeInputDevice")) return;
            const yG = WG.isHolding(ZG.timeStamp),
              kG = nG(),
              UG = (GG => {
                let {
                  device: bG,
                  inGame: ZG,
                  padMovesMouse: wG,
                  padHolding: SG
                } = GG;
                return ("gamepad" !== bG || !wG) && "keyboardMouse" !== bG && (ZG || !SG)
              })({
                ...kG,
                inGame: kG.inGame && (0, YG.e)(),
                padHolding: yG
              });
            UG && GG.add(wG, LG, ZG.timeStamp) && (bG("keyboardMouse"), MG = WG.isStickOffRest())
          },
          UG = GG => {
            CG("gamepad" === GG)
          },
          VG = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ZG, VG), window.addEventListener("pointerdown", ZG, VG), window.addEventListener("wheel", ZG, VG), window.addEventListener("touchstart", wG, VG), window.addEventListener("pointermove", kG, VG), window.addEventListener("pointerout", yG, VG);
        const pG = LG.l.subscribe("appManagerUpdated|activeInputDevice", UG);
        return UG(SG.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ZG, VG), window.removeEventListener("pointerdown", ZG, VG), window.removeEventListener("wheel", ZG, VG), window.removeEventListener("touchstart", wG, VG), window.removeEventListener("pointermove", kG, VG), window.removeEventListener("pointerout", yG, VG), cG = null, LG.l.unsubscribe(pG), CG(!1)
        }
      },
      RG = () => {
        const [GG, bG] = (0, wG.useState)(UG.m);
        return (0, yG.g)(UG.e, (() => {
          bG((0, UG.m)())
        })), (0, yG.g)(pG.c, (() => {
          bG((0, UG.m)())
        })), GG
      }
  },
  8224: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      h: () => SG
    });
    const wG = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      SG = GG => wG.includes(GG)
  },
  8732: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      h: () => LG,
      j: () => UG,
      n: () => kG
    });
    var wG = ZG(1389),
      SG = ZG(1359);
    const LG = "controllerInventoryCursorChanged",
      yG = {
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
      kG = () => {
        var GG, bG;
        return (0, wG.j)(LG, null !== (GG = null === (bG = (0, SG.h)()) || void 0 === bG ? void 0 : bG.getInventoryCursorState()) && void 0 !== GG ? GG : yG)
      },
      UG = () => {
        var GG, bG;
        return null !== (GG = null === (bG = (0, SG.h)()) || void 0 === bG ? void 0 : bG.isPadSteppingSlots()) && void 0 !== GG && GG
      }
  },
  8728: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG,
      e: () => kG,
      i: () => UG,
      k: () => yG,
      m: () => LG,
      q: () => VG,
      t: () => pG
    });
    let wG = null;
    const SG = new Set,
      LG = GG => (wG = GG, () => {
        if (wG === GG) {
          wG = null;
          for (const GG of SG) GG()
        }
      }),
      yG = GG => (SG.add(GG), () => {
        SG.delete(GG)
      }),
      kG = () => wG,
      UG = () => null !== wG;
    let YG = null;
    const VG = GG => {
        YG = GG
      },
      pG = () => {
        const GG = YG;
        return YG = null, GG
      },
      fG = (GG, bG) => {
        var ZG, wG;
        return null !== (ZG = null !== (wG = GG.find((GG => GG.element === bG))) && void 0 !== wG ? wG : GG.find((GG => GG.element.contains(bG)))) && void 0 !== ZG ? ZG : null
      }
  },
  8736: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => yG
    });
    var wG = ZG(51);
    const SG = new WeakMap,
      LG = GG => {
        var bG, ZG;
        return null !== (bG = null === (ZG = SG.get(GG)) || void 0 === ZG ? void 0 : ZG.current) && void 0 !== bG ? bG : null
      },
      yG = (GG, bG) => {
        const ZG = (0, wG.useRef)(bG);
        ZG.current = bG;
        const LG = (0, wG.useRef)(null);
        (0, wG.useEffect)((() => {
          const bG = GG.current,
            wG = LG.current;
          bG !== wG && (wG && SG.get(wG) === ZG && SG.delete(wG), LG.current = bG, bG && SG.set(bG, ZG))
        })), (0, wG.useEffect)((() => () => {
          const GG = LG.current;
          GG && SG.get(GG) === ZG && SG.delete(GG), LG.current = null
        }), [])
      }
  },
  8862: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      c: () => YG,
      f: () => pG,
      g: () => VG,
      h: () => UG,
      l: () => QG
    });
    var wG = ZG(19),
      SG = ZG(1993),
      LG = ZG(1359),
      yG = ZG(1343);
    const kG = GG => {
        var bG, ZG;
        return (0, yG.k)() && null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getGlyphForNoaAction(GG)) && void 0 !== bG ? bG : null
      },
      UG = "controllerGlyph:",
      YG = GG => {
        var bG, ZG;
        return null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getPadGlyphIconName(GG)) && void 0 !== bG ? bG : `${UG}xbox/${GG}`
      },
      VG = GG => GG.startsWith(UG),
      pG = GG => {
        var bG, ZG;
        return VG(GG) && null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getPadGlyphIconUrl(GG)) && void 0 !== bG ? bG : null
      },
      fG = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yG.e, SG.d, SG.b],
      QG = GG => {
        const bG = fG.map((bG => wG.l.subscribe(bG, GG)));
        return () => {
          for (const GG of bG) wG.l.unsubscribe(GG)
        }
      }
  },
  8719: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => wG
    });
    const wG = "controllerOpenKeyboard",
      SG = "controllerKeyboardVisible"
  },
  8254: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      e: () => VG,
      f: () => UG,
      j: () => kG
    });
    var wG = ZG(17),
      SG = ZG(1579),
      LG = ZG(1709);
    const yG = new Map,
      kG = (GG, bG) => (yG.has(GG) && console.warn(`Gameplay blocker "${GG}" registered twice; the newer one replaces it.`), yG.set(GG, bG), () => {
        yG.get(GG) === bG && yG.delete(GG)
      }),
      UG = () => (0, LG.d)(document.activeElement),
      YG = function() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [bG, ZG] of yG)
          if (!GG.includes(bG) && ZG()) return bG;
        return null
      },
      VG = function() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === wG.e.get("gameState") && (!(0, SG.t)() && (!UG() && null === YG(GG)))
      }
  },
  8205: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => mG,
      A: () => FG,
      B: () => EG,
      F: () => JG,
      I: () => dG,
      K: () => YG,
      N: () => fG,
      R: () => QG,
      T: () => SG,
      X: () => wG,
      Y: () => XG,
      cb: () => vG,
      d: () => aG,
      f: () => IG,
      g: () => VG,
      gb: () => oG,
      i: () => UG,
      l: () => kG,
      n: () => iG,
      q: () => rG,
      t: () => uG,
      u: () => LG,
      v: () => pG,
      z: () => zG
    });
    const wG = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      SG = wG.length,
      LG = function() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(SG).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: GG
        }
      },
      yG = Object.fromEntries(wG.map(((GG, bG) => [GG, bG]))),
      kG = GG => yG[GG],
      UG = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const wG = Math.hypot(GG.x, GG.y);
        if (wG <= bG) return {
          x: 0,
          y: 0
        };
        const SG = Math.min(1, (wG - bG) / Math.max(1e-4, ZG - bG));
        return {
          x: GG.x / wG * SG,
          y: GG.y / wG * SG
        }
      },
      YG = ["exponential", "linear", "boost"],
      VG = (GG, bG) => {
        const ZG = Math.hypot(GG.x, GG.y);
        if (0 === ZG) return {
          x: 0,
          y: 0
        };
        const wG = ((GG, bG) => {
          const ZG = Math.max(0, Math.min(1, GG));
          return "linear" === bG ? ZG : ZG * ZG
        })(ZG, bG);
        return {
          x: GG.x / ZG * wG,
          y: GG.y / ZG * wG
        }
      },
      pG = .5,
      fG = .3,
      QG = .2,
      KG = kG("LT"),
      hG = kG("RT"),
      dG = GG => GG === KG || GG === hG,
      JG = (GG, bG) => {
        const ZG = kG(bG);
        return dG(ZG) ? GG[ZG] > .35 : GG[ZG] >= pG
      },
      rG = (GG, bG) => GG.map(((GG, ZG) => dG(ZG) ? bG[ZG] ? GG > .35 : GG >= .55 : GG >= pG)),
      zG = ["Up", "Down", "Left", "Right"],
      EG = GG => zG.includes(GG),
      oG = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(GG.x, GG.y) < bG ? null : Math.abs(GG.x) > Math.abs(GG.y) ? GG.x > 0 ? "Right" : "Left" : GG.y > 0 ? "Down" : "Up"
      },
      XG = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      uG = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      iG = ["default", "slow", "off"],
      CG = 800,
      WG = 250,
      mG = (GG, bG) => "off" === bG ? null : "slow" === bG ? {
        initialDelayMs: Math.max(GG.initialDelayMs, CG),
        intervalMs: Math.max(GG.intervalMs, WG)
      } : GG;
    class IG {
      constructor(GG) {
        this.readTiming = GG, this.Ik = !1, this.timing = null, this.nextFireMs = 0
      }
      update(GG, bG) {
        return GG ? this.Ik ? !!(this.timing && bG >= this.nextFireMs) && (this.nextFireMs = bG + this.timing.intervalMs, !0) : (this.Ik = !0, this.timing = this.readTiming(), this.nextFireMs = bG + (null !== (ZG = null === (wG = this.timing) || void 0 === wG ? void 0 : wG.initialDelayMs) && void 0 !== ZG ? ZG : 0), !0) : (this.Ik = !1, !1);
        var ZG, wG
      }
      reset() {
        this.Ik = !1
      }
    }
    const FG = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      vG = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class aG {
      constructor(GG) {
        this.timer = GG, this.direction = null
      }
      update(GG, bG) {
        return GG !== this.direction && (this.timer.reset(), this.direction = GG), this.timer.update(null !== GG, bG) ? GG : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8740: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      f: () => LG
    });
    let wG = -1 / 0;
    const SG = () => {
        wG = performance.now()
      },
      LG = GG => performance.now() - wG < GG
  },
  8707: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      f: () => LG
    });
    var wG = ZG(8222),
      SG = ZG(8205);
    const LG = GG => (0, SG.$)(GG, (0, wG.i)().buttonRepeat),
      yG = GG => new SG.f((() => LG(GG)))
  },
  8241: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      e: () => LG,
      f: () => kG
    });
    var wG = ZG(19),
      SG = ZG(8222);
    const LG = (GG, bG) => "OpenShop" === GG ? "shop" === bG : "OpenLobbyLeaderboard" !== GG || "leaderboard" === bG;
    let yG = !1;
    const kG = GG => {
        GG !== yG && (yG = GG, wG.l.xh(SG.e, (0, SG.i)()))
      },
      UG = () => ((GG, bG) => "shop" === GG && bG ? "shop" : "leaderboard")((0, SG.i)().leaderboardButton, yG)
  },
  8233: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => kG,
      E: () => oG,
      F: () => fG,
      G: () => QG,
      J: () => pG,
      N: () => EG,
      Q: () => YG,
      R: () => JG,
      T: () => WG,
      W: () => zG,
      _: () => hG,
      b: () => lG,
      bb: () => dG,
      c: () => PG,
      d: () => mG,
      db: () => KG,
      g: () => yG,
      hb: () => rG,
      ib: () => vG,
      j: () => CG,
      mb: () => LG,
      n: () => uG,
      nb: () => XG,
      pb: () => jG,
      q: () => aG,
      rb: () => iG,
      t: () => cG,
      w: () => VG,
      z: () => UG
    });
    var wG = ZG(8218),
      SG = ZG(8205);
    const LG = {
        min: 25,
        max: 500,
        step: 5
      },
      yG = {
        min: 25,
        max: 100,
        step: 5
      },
      kG = {
        min: 0,
        max: .4,
        step: .01
      },
      UG = {
        min: 25,
        max: 300,
        step: 5
      },
      YG = {
        min: .5,
        max: 6,
        step: .1
      },
      VG = (GG, bG) => {
        if (!Number.isFinite(GG)) return bG.min;
        const ZG = bG.min + Math.round((GG - bG.min) / bG.step) * bG.step,
          wG = Math.min(bG.max, Math.max(bG.min, ZG));
        return Math.round(1e3 * wG) / 1e3
      },
      pG = GG => `${Math.round(GG)}%`,
      fG = GG => pG(100 * GG),
      QG = GG => `${GG.toFixed(1)}\xd7`,
      KG = [{
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
      hG = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      dG = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      JG = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      rG = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      zG = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      EG = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      oG = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      XG = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      uG = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      iG = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      CG = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      WG = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      mG = {
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
      IG = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      FG = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      vG = wG.d.map((GG => {
        let {
          group: bG,
          actions: ZG
        } = GG;
        const wG = ZG.map((GG => ({
          kind: "action",
          action: GG
        })));
        return {
          titleKey: IG[bG],
          rows: "gameplay" === bG ? [...FG, ...wG] : wG
        }
      })),
      aG = SG.X.filter((GG => "Home" !== GG)),
      cG = 1e4;
    class lG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = GG, this.openButton = bG, this.accepts = ZG, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(GG, bG) {
        var ZG;
        this.updateIgnored(GG, bG);
        const wG = bG - (null !== (ZG = this.startMs) && void 0 !== ZG ? ZG : bG) >= 250;
        for (const SG of aG)
          if (SG !== this.cancelButton && wG && !this.ignoredUntilMs.has(SG) && GG.wasPressed(SG) && this.accepts(SG)) return {
            kind: "bind",
            button: SG
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (GG.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = bG
        }
        return null === this.cancelDownAtMs ? null : GG.isHeld(this.cancelButton) && bG - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : GG.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(GG) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (GG - this.cancelDownAtMs) / 700)
      }
      updateIgnored(GG, bG) {
        if (null === this.startMs) {
          this.startMs = bG;
          for (const bG of aG) GG.isDown(bG) && this.ignoredUntilMs.set(bG, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, bG + 250)
        }
        for (const [ZG, wG] of this.ignoredUntilMs) {
          const SG = GG.isDown(ZG);
          wG === 1 / 0 ? SG || ZG !== this.openButton ? SG || this.ignoredUntilMs.delete(ZG) : this.ignoredUntilMs.set(ZG, bG + 250) : bG >= wG ? this.ignoredUntilMs.delete(ZG) : SG && this.ignoredUntilMs.set(ZG, 1 / 0)
        }
      }
    }
    const jG = 6e3;
    class PG {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(GG, bG) {
        let {
          pressed: ZG,
          Ik: wG
        } = GG;
        if (ZG) {
          const GG = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== GG && bG - GG < 1500 ? [...this.pressesAtMs, bG] : [bG], this.pressesAtMs.length >= 3) return 1
        }
        return wG ? (this.downAtMs ??= bG, Math.min(1, (bG - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  5042: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      f: () => yG
    });
    var wG = ZG(51);
    const SG = new WeakMap,
      LG = GG => {
        var bG;
        const ZG = GG.closest("[data-pad-slider]");
        return ZG && null !== (bG = SG.get(ZG)) && void 0 !== bG ? bG : null
      },
      yG = (GG, bG) => {
        const ZG = (0, wG.useRef)(bG);
        ZG.current = bG, (0, wG.useEffect)((() => {
          if (GG.current) return ((GG, bG) => (SG.set(GG, bG), () => {
            SG.get(GG) === bG && SG.delete(GG)
          }))(GG.current, {
            adjust: GG => {
              ZG.current.adjust(GG)
            },
            setFraction: GG => {
              ZG.current.setFraction(GG)
            },
            endDrag: () => {
              ZG.current.endDrag()
            }
          })
        }), [GG])
      }
  },
  8854: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => yG,
      e: () => LG,
      g: () => wG,
      j: () => kG,
      m: () => YG,
      q: () => VG
    });
    const wG = "controllerActionWheelOpen",
      SG = "controllerActionWheelAim",
      LG = "controllerActionWheelCommit",
      yG = "controllerActionWheelClose",
      kG = "controllerActionWheelPick";
    let UG = !1;
    const YG = () => UG,
      VG = GG => {
        UG = GG
      }
  },
  8849: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = 0;
    const SG = () => {
        wG++
      },
      LG = () => wG
  },
  8750: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      f: () => SG,
      i: () => yG,
      j: () => LG,
      l: () => wG,
      m: () => YG
    });
    const wG = "controllerQuickChatWheelOpen",
      SG = "controllerQuickChatWheelAim",
      LG = "controllerQuickChatWheelCommit",
      yG = "controllerQuickChatWheelClose";
    let kG = !1;
    const UG = () => kG,
      YG = GG => {
        kG = GG
      }
  },
  8768: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => SG
    });
    var wG = ZG(19);
    const SG = "localBlockBroken";

    function LG() {
      return {
        onPlayerChangeBlock(GG, bG, ZG, LG, yG, kG) {
          "Air" === kG && wG.l.xh(SG)
        }
      }
    }
  },
  8926: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      i: () => UG
    });
    var wG = ZG(17),
      SG = ZG(1287),
      LG = ZG(80);
    const yG = {
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

    function kG() {
      return (0, LG.isMobile)() && "function" === typeof navigator.vibrate
    }
    const UG = new class {
      constructor(GG) {
        this.deps = GG, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(GG, bG) {
        var ZG;
        if (!this.deps.enabled()) return;
        const wG = yG[GG],
          SG = null !== bG && void 0 !== bG ? bG : wG.pattern;
        if (null === SG) return void console.warn("No vibration pattern for", GG);
        const LG = this.deps.now();
        LG - this.lastAnyAt < 40 && wG.priority < this.playingPriority || LG - (null !== (ZG = this.lastAt.get(GG)) && void 0 !== ZG ? ZG : -1 / 0) < wG.minGapMs || LG < this.playingUntil && wG.priority < this.playingPriority || (this.lastAt.set(GG, LG), this.lastAnyAt = LG, this.playingUntil = LG + SG.reduce(((GG, bG) => GG + bG), 0), this.playingPriority = wG.priority, this.deps.vibrate(SG))
      }
    }({
      vibrate: GG => {
        navigator.vibrate([...GG])
      },
      now: () => performance.now(),
      enabled: () => kG() && wG.e.get("isTouchScreen") && wG.e.get("clientEscMenuOptions").vibration && !(0, SG.f)()
    })
  },
  8764: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(1213);

    function SG(GG, bG) {
      var ZG, SG;
      try {
        const ZG = (0, wG.e)();
        if ("function" === typeof ZG) {
          const wG = new ZG(GG, bG);
          if (wG.type === GG) return wG
        }
      } catch {}
      const LG = document.createEvent("Event");
      return LG.initEvent(GG, null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.bubbles) && void 0 !== ZG && ZG, null !== (SG = null === bG || void 0 === bG ? void 0 : bG.cancelable) && void 0 !== SG && SG), LG
    }
  },
  8825: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(8830),
      SG = ZG(604),
      LG = ZG(116);

    function yG(GG) {
      var bG, ZG;
      if ((0, SG.L)(GG)) return !0;
      const yG = null !== (bG = null === (ZG = LG.siteUsedData[LG.siteUsed]) || void 0 === ZG ? void 0 : ZG.adConfig.showRewardedAds) && void 0 !== bG && bG;
      for (const SG in GG) {
        const bG = GG[SG];
        if (null !== bG && void 0 !== bG && bG.items)
          for (const GG in bG.items)
            if ((0, wG.m)(bG.items[GG], yG)) return !1
      }
      return !0
    }
  },
  8830: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return !GG.hidden && (bG || !GG.isRewardedAd)
    }

    function SG(GG) {
      return "object" === typeof GG ? GG.option : GG
    }

    function LG(GG, bG) {
      var ZG;
      if ("dropdown" === (null === (ZG = GG.userInput) || void 0 === ZG ? void 0 : ZG.type) && "object" === typeof GG.userInput.dropdownOptions[0]) {
        for (const ZG of GG.userInput.dropdownOptions)
          if (SG(ZG) === bG) return "object" === typeof ZG ? ZG.cost : GG.cost;
        console.error("Didn't find matching option for dropdown item. Item:", GG, "input:", bG)
      }
      return GG.cost
    }

    function yG(GG, bG, ZG) {
      var wG;
      const SG = null !== (wG = ZG.excludedPlayers) && void 0 !== wG ? wG : [bG];
      return GG.filter((GG => !SG.includes(GG)))
    }
    ZG.d(bG, {
      d: () => LG,
      h: () => SG,
      k: () => yG,
      m: () => wG
    })
  },
  8860: () => {},
  8265: (GG, bG, ZG) => {
    var wG = {
      "./nintendo/A.svg": 8273,
      "./nintendo/B.svg": 8275,
      "./nintendo/Down.svg": 8277,
      "./nintendo/Home.svg": 8280,
      "./nintendo/LB.svg": 8285,
      "./nintendo/LS.svg": 8290,
      "./nintendo/LT.svg": 8299,
      "./nintendo/Left.svg": 8302,
      "./nintendo/LeftStick.svg": 8307,
      "./nintendo/Menu.svg": 8312,
      "./nintendo/RB.svg": 8315,
      "./nintendo/RS.svg": 8321,
      "./nintendo/RT.svg": 8324,
      "./nintendo/Right.svg": 8332,
      "./nintendo/RightStick.svg": 8337,
      "./nintendo/Up.svg": 8343,
      "./nintendo/View.svg": 8348,
      "./nintendo/X.svg": 8355,
      "./nintendo/Y.svg": 8359,
      "./playstation/A.svg": 8362,
      "./playstation/B.svg": 8370,
      "./playstation/Down.svg": 8379,
      "./playstation/Home.svg": 8388,
      "./playstation/LB.svg": 8392,
      "./playstation/LS.svg": 8395,
      "./playstation/LT.svg": 8398,
      "./playstation/Left.svg": 8407,
      "./playstation/LeftStick.svg": 8414,
      "./playstation/Menu.svg": 8423,
      "./playstation/RB.svg": 8430,
      "./playstation/RS.svg": 8438,
      "./playstation/RT.svg": 8443,
      "./playstation/Right.svg": 8452,
      "./playstation/RightStick.svg": 8458,
      "./playstation/Up.svg": 8463,
      "./playstation/View.svg": 8468,
      "./playstation/X.svg": 8474,
      "./playstation/Y.svg": 8479,
      "./steamdeck/A.svg": 8487,
      "./steamdeck/B.svg": 8495,
      "./steamdeck/Down.svg": 8497,
      "./steamdeck/Home.svg": 8506,
      "./steamdeck/LB.svg": 8511,
      "./steamdeck/LS.svg": 8515,
      "./steamdeck/LT.svg": 8520,
      "./steamdeck/Left.svg": 8522,
      "./steamdeck/LeftStick.svg": 8527,
      "./steamdeck/Menu.svg": 8535,
      "./steamdeck/RB.svg": 8540,
      "./steamdeck/RS.svg": 8542,
      "./steamdeck/RT.svg": 8545,
      "./steamdeck/Right.svg": 8554,
      "./steamdeck/RightStick.svg": 8563,
      "./steamdeck/Up.svg": 8571,
      "./steamdeck/View.svg": 8576,
      "./steamdeck/X.svg": 8578,
      "./steamdeck/Y.svg": 8580,
      "./xbox/A.svg": 8589,
      "./xbox/B.svg": 8594,
      "./xbox/Down.svg": 8600,
      "./xbox/Home.svg": 8606,
      "./xbox/LB.svg": 8612,
      "./xbox/LS.svg": 8621,
      "./xbox/LT.svg": 8623,
      "./xbox/Left.svg": 8632,
      "./xbox/LeftStick.svg": 8638,
      "./xbox/Menu.svg": 8642,
      "./xbox/RB.svg": 8649,
      "./xbox/RS.svg": 8658,
      "./xbox/RT.svg": 8663,
      "./xbox/Right.svg": 8666,
      "./xbox/RightStick.svg": 8670,
      "./xbox/Up.svg": 8676,
      "./xbox/View.svg": 8682,
      "./xbox/X.svg": 8685,
      "./xbox/Y.svg": 8692
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 8265
  },
  8273: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8275: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8277: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8280: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8285: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8290: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8299: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8302: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8307: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8312: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8315: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8321: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8324: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8332: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8337: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8343: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8348: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8355: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8359: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8362: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8370: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8379: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8388: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8392: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8395: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8398: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8407: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8414: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8423: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8430: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8438: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8443: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8452: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8458: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8463: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8468: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8474: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8479: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8487: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8495: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8497: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8506: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8511: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8515: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8520: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8522: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8527: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8535: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8540: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8542: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8545: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8554: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8563: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8571: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8576: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8578: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8580: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8589: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8594: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8600: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8606: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8612: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8621: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8623: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8632: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8638: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8642: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8649: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8658: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8663: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8666: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8670: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8676: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8682: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8685: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8692: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
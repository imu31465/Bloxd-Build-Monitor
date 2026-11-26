export const id = 33;
export const ids = [33];
export const modules = {
  8929: (HH, BH, LH) => {
    var AH = {
      "./nintendo/A.svg": 8936,
      "./nintendo/B.svg": 8940,
      "./nintendo/Down.svg": 8949,
      "./nintendo/Home.svg": 8958,
      "./nintendo/LB.svg": 8966,
      "./nintendo/LS.svg": 8974,
      "./nintendo/LT.svg": 8980,
      "./nintendo/Left.svg": 8984,
      "./nintendo/LeftStick.svg": 8991,
      "./nintendo/Menu.svg": 8997,
      "./nintendo/RB.svg": 9006,
      "./nintendo/RS.svg": 9009,
      "./nintendo/RT.svg": 9013,
      "./nintendo/Right.svg": 9017,
      "./nintendo/RightStick.svg": 9024,
      "./nintendo/Up.svg": 9028,
      "./nintendo/View.svg": 9036,
      "./nintendo/X.svg": 9044,
      "./nintendo/Y.svg": 9053,
      "./playstation/A.svg": 9059,
      "./playstation/B.svg": 9062,
      "./playstation/Down.svg": 9069,
      "./playstation/Home.svg": 9071,
      "./playstation/LB.svg": 9079,
      "./playstation/LS.svg": 9081,
      "./playstation/LT.svg": 9084,
      "./playstation/Left.svg": 9087,
      "./playstation/LeftStick.svg": 9094,
      "./playstation/Menu.svg": 9098,
      "./playstation/RB.svg": 9103,
      "./playstation/RS.svg": 9108,
      "./playstation/RT.svg": 9111,
      "./playstation/Right.svg": 9116,
      "./playstation/RightStick.svg": 9120,
      "./playstation/Up.svg": 9125,
      "./playstation/View.svg": 9129,
      "./playstation/X.svg": 9137,
      "./playstation/Y.svg": 9143,
      "./steamdeck/A.svg": 9145,
      "./steamdeck/B.svg": 9147,
      "./steamdeck/Down.svg": 9154,
      "./steamdeck/Home.svg": 9163,
      "./steamdeck/LB.svg": 9165,
      "./steamdeck/LS.svg": 9173,
      "./steamdeck/LT.svg": 9180,
      "./steamdeck/Left.svg": 9184,
      "./steamdeck/LeftStick.svg": 9191,
      "./steamdeck/Menu.svg": 9196,
      "./steamdeck/RB.svg": 9202,
      "./steamdeck/RS.svg": 9208,
      "./steamdeck/RT.svg": 9210,
      "./steamdeck/Right.svg": 9215,
      "./steamdeck/RightStick.svg": 9218,
      "./steamdeck/Up.svg": 9221,
      "./steamdeck/View.svg": 9228,
      "./steamdeck/X.svg": 9231,
      "./steamdeck/Y.svg": 9237,
      "./xbox/A.svg": 9241,
      "./xbox/B.svg": 9248,
      "./xbox/Down.svg": 9252,
      "./xbox/Home.svg": 9259,
      "./xbox/LB.svg": 9267,
      "./xbox/LS.svg": 9273,
      "./xbox/LT.svg": 9279,
      "./xbox/Left.svg": 9281,
      "./xbox/LeftStick.svg": 9285,
      "./xbox/Menu.svg": 9292,
      "./xbox/RB.svg": 9294,
      "./xbox/RS.svg": 9299,
      "./xbox/RT.svg": 9305,
      "./xbox/Right.svg": 9308,
      "./xbox/RightStick.svg": 9315,
      "./xbox/Up.svg": 9320,
      "./xbox/View.svg": 9325,
      "./xbox/X.svg": 9332,
      "./xbox/Y.svg": 9336
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 8929
  },
  9484: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => lH,
      g: () => mH,
      i: () => oH
    });
    var AH = LH(45),
      rH = LH(4951),
      SH = LH(1061),
      hH = LH(1450),
      tH = LH(18),
      zH = LH(3795),
      CH = LH(2347),
      EH = LH(1182),
      XH = LH(2760),
      GH = LH(1998),
      YH = LH(2051),
      uH = LH(1123),
      QH = LH(15),
      WH = LH(1659),
      MH = LH(1038),
      xH = LH.n(MH),
      vH = LH(9491),
      PH = LH(9499),
      TH = LH(9505),
      UH = LH(9407),
      VH = LH(9509),
      OH = LH(3454),
      bH = (LH(9511), LH(1225));
    let kH = null;

    function mH() {
      return null !== kH
    }

    function oH() {
      return "pad" === kH
    }

    function IH() {
      return "inGame" === QH.c.get("gameState") && !(0, WH.t)()
    }

    function fH(HH) {
      return (0, PH.w)(HH, EH.l, PH.i, PH.m, PH.n)
    }
    const lH = (0, AH.memo)((function() {
      const {
        t: HH
      } = (0, uH.B)(), {
        userContext: BH
      } = (0, SH.e)(), [LH, QH] = (0, AH.useState)(null), [MH, mH] = (0, AH.useState)(null), oH = (0, AH.useRef)(null), lH = (0, AH.useCallback)((HH => {
        oH.current = HH, mH(HH)
      }), []), KH = (0, AH.useRef)(0), cH = (0, AH.useRef)(null), eH = (0, AH.useRef)({
        x: 0,
        y: 0
      }), [qH, gH] = (0, AH.useState)(0), NH = (0, AH.useMemo)((() => function(HH) {
        const BH = [];
        for (let AH = 0; AH < EH.l; AH++) {
          var LH;
          BH.push(null !== (LH = HH[AH]) && void 0 !== LH ? LH : null)
        }
        return BH
      }((0, XH.g)(BH.getPlayerCosmetics().emote))), [BH, qH]);
      (0, YH.b)("cosmeticsUpdated", (HH => {
        HH.some((HH => HH.local && "emote" === HH.rh)) && gH((HH => HH + 1))
      }));
      const RH = (0, AH.useRef)(!1),
        jH = (0, AH.useCallback)((function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === HH && (0, TH.f)(), RH.current = BH, eH.current = {
            x: 0,
            y: 0
          }, lH(null), QH(HH)
        }), [lH]),
        nH = (0, AH.useCallback)((() => {
          QH(null), lH(null), eH.current = {
            x: 0,
            y: 0
          }
        }), [lH]),
        FH = (0, AH.useCallback)((HH => {
          if (Date.now() < KH.current) return;
          const BH = (0, CH.i)(HH),
            LH = !!BH.holdUntilMove,
            AH = LH ? 600 : Math.ceil(1e3 * BH.animation.animation_length / CH.e) + 200;
          KH.current = Date.now() + AH, cH.current = HH, GH.gameBridge.send("playEmote", HH), GH.gameBridge.send("applyTemporaryThirdPerson", LH ? {} : {
            durationMs: AH
          })
        }), []);
      (0, hH.d)("requestToggleEmoteWheel", (() => {
        null === LH ? IH() && jH("click") : nH()
      })), (0, hH.d)("requestEmoteWheelHoldOpen", (() => {
        null === LH && IH() && jH((0, vH.d)() ? "hold" : "click")
      })), (0, hH.d)("requestEmoteWheelPadOpen", (HH => {
        null !== LH || !IH() || (0, UH.e)() || (0, VH.r)() || jH("pad", HH)
      })), (0, hH.d)("requestEmoteRepeatLast", (() => {
        if (null !== LH || !IH() || (0, UH.e)() || (0, VH.r)()) return;
        const HH = cH.current;
        null !== HH && NH.includes(HH) ? FH(HH) : jH("pad", !0)
      }));
      const DH = () => {
        const HH = oH.current,
          BH = null !== HH ? NH[HH] : null;
        null !== BH && "pad" === LH && Date.now() < KH.current || (nH(), null !== BH && FH(BH))
      };
      (0, hH.d)("emoteWheelPadAim", (HH => {
        if ("pad" !== LH) return;
        const BH = (0, PH.F)(HH, EH.l, oH.current);
        lH(null !== BH && null !== NH[BH] ? BH : null)
      })), (0, hH.d)("requestEmoteWheelPadCommit", (HH => {
        "pad" !== LH || HH && RH.current || DH()
      })), (0, hH.d)("appManagerUpdated|activeInputDevice", (HH => {
        null !== LH && "pad" === LH !== ("gamepad" === HH) && nH()
      })), (0, AH.useLayoutEffect)((() => (kH = LH, (0, zH.o)("emoteWheel", "pad" === LH), tH.k.AX(zH.i), () => {
        kH = null, (0, zH.o)("emoteWheel", !1), tH.k.AX(zH.i)
      })), [LH]), (0, hH.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === LH && DH()
      })), (0, hH.d)("requestEmoteWheelClose", (() => {
        null !== LH && nH()
      })), (0, hH.d)("appManagerUpdated|gameState", (HH => {
        "inGame" !== HH && nH()
      }));
      const wH = () => {
        (0, WH.t)() && nH()
      };
      if ((0, hH.d)("appManagerUpdated|openEverythingMenuName", wH), (0, hH.d)("appManagerUpdated|openInGameMenuName", wH), (0, hH.d)("pointerLockUpdate", (HH => {
          HH || "hold" !== LH || nH()
        })), (0, AH.useEffect)((() => {
          if (null === LH) return;
          const HH = HH => {
            "Escape" === HH.key && (HH.stopImmediatePropagation(), HH.preventDefault(), nH())
          };
          return document.addEventListener("keydown", HH, !0), () => {
            document.removeEventListener("keydown", HH, !0)
          }
        }), [LH, nH]), (0, rH.c)(!0, "click" === LH, "EmoteWheelOverlay"), (0, AH.useEffect)((() => {
          if ("hold" === LH) return GH.gameBridge.send("holdEmoteWheel", !0), () => {
            GH.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [LH]), (0, AH.useEffect)((() => {
          if ("hold" !== LH) return;
          const HH = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            BH = PH.u * HH,
            AH = PH.s * HH,
            rH = HH => {
              let LH = eH.current.x + HH.movementX,
                rH = eH.current.y + HH.movementY;
              const SH = Math.hypot(LH, rH);
              if (SH > BH) {
                const HH = BH / SH;
                LH *= HH, rH *= HH
              }
              eH.current = {
                x: LH,
                y: rH
              }, lH(function(HH, BH, LH, AH) {
                if (Math.hypot(HH, BH) < LH) return null;
                const rH = (0, PH.z)(HH, BH, EH.l);
                return null === AH[rH] ? null : rH
              }(LH, rH, AH, NH))
            };
          return document.addEventListener("mousemove", rH), () => {
            document.removeEventListener("mousemove", rH)
          }
        }), [LH, NH, lH]), null === LH) return null;
      const ZH = "hold" === LH || "pad" === LH,
        dH = null !== MH ? NH[MH] : null,
        aH = null !== dH ? (0, CH.i)(dH).displayName : HH("emotes:pickEmote");
      return (0, bH.jsx)("div", {
        className: xH()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === LH
        }),
        onMouseDown: HH => {
          HH.target === HH.currentTarget && nH()
        },
        children: (0, bH.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * PH.u + "rem",
            height: 2 * PH.u + "rem"
          },
          children: [(0, bH.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${PH.p} ${PH.p}`,
            children: [NH.map(((BH, LH) => {
              const AH = null !== BH,
                rH = ZH && LH === MH;
              return (0, bH.jsx)("path", {
                d: fH(LH),
                className: xH()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: rH,
                  EmoteWheelWedgeDisabled: !AH
                }),
                onClick: HH => {
                  HH.stopPropagation(), null !== BH && (HH => {
                    nH(), FH(HH)
                  })(BH)
                },
                "aria-label": null !== BH ? (0, CH.i)(BH).displayName : HH("emotes:emptySlot")
              }, LH)
            })), (0, bH.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: PH.i,
              cy: PH.i,
              r: PH.n
            }), (0, bH.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: PH.i,
              cy: PH.i,
              r: PH.m
            }), ZH && null !== MH && (0, bH.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: fH(MH)
            })]
          }), NH.map(((HH, BH) => {
            const LH = null !== HH,
              AH = ZH && BH === MH,
              rH = (0, PH.C)(BH, EH.l),
              SH = PH.e * Math.cos(rH),
              hH = PH.e * Math.sin(rH);
            return (0, bH.jsx)("div", {
              className: xH()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: AH,
                EmoteWheelSlotIconDisabled: !LH
              }),
              style: {
                left: `calc(50% + ${SH}rem)`,
                top: `calc(50% + ${hH}rem)`,
                backgroundImage: LH ? `url(${(0,OH.d)("emote",HH)})` : void 0
              },
              "aria-hidden": !0
            }, BH)
          })), (0, bH.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: aH
          })]
        })
      })
    }))
  },
  9603: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => kH,
      h: () => IH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(2680),
      hH = LH(3770);
    const tH = 6,
      zH = 4,
      CH = ["HudMove-inventory", "HudLocked-inventory"];

    function EH(HH) {
      let {
        left: BH,
        right: LH,
        height: AH,
        rowTop: rH,
        besideBottom: SH,
        obstacles: hH
      } = HH;
      const CH = hH.filter((HH => HH.left < LH + tH && HH.right > BH - tH));
      let EH = SH;
      for (let tH = 0; tH <= CH.length; tH++) {
        const HH = CH.filter((HH => HH.top < EH + zH && HH.bottom > EH - AH - zH));
        if (0 === HH.length) break;
        EH = Math.min(...HH.map((HH => HH.top))) - zH
      }
      return EH === SH ? null : Math.ceil(rH - EH)
    }

    function XH(HH) {
      return Array.from(HH.children).filter((HH => !HH.classList.contains("HotBarRow")))
    }

    function GH(HH) {
      return function(HH) {
        const BH = [],
          LH = (HH, AH) => {
            const rH = HH.getBoundingClientRect();
            if (rH.width > 0 && rH.height > 0) BH.push(HH);
            else if (AH < 2)
              for (const BH of Array.from(HH.children)) LH(BH, AH + 1)
          };
        for (const AH of HH) LH(AH, 0);
        return BH
      }(XH(HH).flatMap((HH => HH.classList.contains("AuraBarWrapper") ? [] : HH.classList.contains("BottomScreenStatBarList") ? Array.from(HH.children) : [HH])))
    }

    function YH(HH, BH) {
      var LH;
      const AH = null === (LH = HH.querySelector(":scope > .AuraBarWrapper")) || void 0 === LH ? void 0 : LH.getBoundingClientRect();
      return (AH && AH.height > 0 ? AH.top : BH) - zH
    }
    const uH = ".BottomScreenMessage, [role='status']";

    function QH(HH, BH, LH, AH, rH) {
      const SH = HH => HH.map((HH => HH.getBoundingClientRect())),
        hH = EH({
          ...LH,
          obstacles: SH(LH.obstacles.filter((HH => !HH.matches(uH))))
        }),
        tH = BH.ownerDocument.defaultView,
        zH = `${null===tH||void 0===tH?void 0:tH.innerWidth}x${null===tH||void 0===tH?void 0:tH.innerHeight}:${AH}:${Math.round(LH.rowTop)}`,
        CH = HH.get(BH),
        XH = (null === CH || void 0 === CH ? void 0 : CH.at) === zH ? (GH = CH.rise, YH = hH, null === GH ? YH : null === YH ? GH : Math.max(GH, YH)) : hH;
      var GH, YH;
      const QH = EH({
        ...LH,
        besideBottom: null === XH ? LH.besideBottom : LH.rowTop - XH,
        obstacles: SH(LH.obstacles)
      });
      return rH && HH.set(BH, {
        at: zH,
        rise: XH
      }), null !== QH && void 0 !== QH ? QH : XH
    }

    function WH(HH, BH, LH, AH) {
      HH.classList.toggle(BH, null !== AH), null === AH ? HH.style.removeProperty(LH) : HH.style.setProperty(LH, `${AH}px`)
    }
    const MH = new WeakMap,
      xH = new WeakMap,
      vH = "(orientation: portrait) and (max-width: 600px)";

    function PH(HH, BH) {
      const LH = HH.getBoundingClientRect();
      if (0 === LH.width) return null;
      const AH = [LH, ...Array.from(HH.children).filter((HH => !(HH => BH.contains(HH.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(HH))).map((HH => HH.getBoundingClientRect())).filter((HH => HH.width > 0))];
      return {
        left: Math.min(...AH.map((HH => HH.left))),
        top: Math.min(...AH.map((HH => HH.top))),
        right: Math.max(...AH.map((HH => HH.right))),
        bottom: Math.max(...AH.map((HH => HH.bottom)))
      }
    }

    function TH(HH) {
      let {
        slotsLeft: BH,
        slotsRight: LH,
        width: AH,
        zoneRight: rH
      } = HH;
      const SH = Math.max(0, Math.floor(LH - BH - AH));
      return null === rH ? 0 : Math.min(SH, Math.max(0, Math.ceil(rH + tH - BH)))
    }

    function UH(HH) {
      var BH;
      const LH = HH.getBoundingClientRect();
      if (0 === LH.width) return null;
      const AH = null === (BH = HH.parentElement) || void 0 === BH ? void 0 : BH.getBoundingClientRect();
      return AH && AH.width > 0 ? Math.min(LH.right, AH.left + AH.width * VH) : LH.right
    }
    const VH = .35,
      OH = new WeakMap,
      bH = new WeakMap;

    function kH(HH) {
      mH(HH) && mH(HH),
        function(HH) {
          var BH, LH;
          const AH = HH.documentElement.classList;
          if (!AH.contains("TouchHotbar") || !AH.contains("TouchHotbarKeysAbove") || CH.some((HH => AH.contains(HH))) || !1 !== (null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH ? void 0 : LH.call(BH, vH).matches)) return;
          const rH = HH.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            SH = null === rH || void 0 === rH ? void 0 : rH.closest(".BottomMiddleElements"),
            hH = null === rH || void 0 === rH ? void 0 : rH.parentElement;
          if (!rH || !SH || !hH || SH.classList.contains("TouchInventoryOpen") || rH.querySelector("[data-pressing]")) return;
          const tH = PH(rH, AH),
            zH = hH.getBoundingClientRect().top,
            EH = tH && QH(MH, SH, {
              left: tH.left,
              right: tH.right,
              height: tH.bottom - tH.top,
              rowTop: zH,
              besideBottom: YH(SH, zH),
              obstacles: GH(SH).filter((HH => !HH.classList.contains("BottomScreenMessage")))
            }, `${Math.round(tH.left)}:${Math.round(tH.right-tH.left)}x${Math.round(tH.bottom-tH.top)}`, !0);
          xH.has(SH) && xH.get(SH) === EH || (WH(SH, "KeysAboveUp", "--touch-keys-above-rise", EH), xH.set(SH, EH))
        }(HH)
    }

    function mH(HH) {
      var BH, LH, AH, rH;
      const SH = HH.documentElement.classList;
      if (!SH.contains("TouchHotbar") || SH.contains("TouchHotbarKeysAbove") || CH.some((HH => SH.contains(HH))) || null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH || !LH.call(BH, oH).matches) return !1;
      const hH = HH.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        tH = null === hH || void 0 === hH ? void 0 : hH.parentElement,
        zH = null === hH || void 0 === hH ? void 0 : hH.closest(".BottomMiddleElements"),
        EH = null === zH || void 0 === zH ? void 0 : zH.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!hH || !tH || !zH || !EH || zH.classList.contains("TouchInventoryOpen")) return !1;
      const XH = hH.getBoundingClientRect();
      if (0 === XH.width) return !1;
      const uH = HH.querySelector(".JoystickZone"),
        MH = EH.getBoundingClientRect(),
        xH = tH.getBoundingClientRect().top,
        vH = TH({
          slotsLeft: MH.left,
          slotsRight: MH.right,
          width: XH.width,
          zoneRight: uH ? UH(uH) : null
        }),
        PH = OH.get(zH),
        VH = MH.left + vH,
        kH = {
          shift: vH,
          rise: QH(bH, zH, {
            left: VH,
            right: VH + XH.width,
            height: XH.height,
            rowTop: xH,
            besideBottom: YH(zH, xH),
            obstacles: GH(zH)
          }, `${vH}:${Math.round(XH.width)}`, (null !== (AH = null === PH || void 0 === PH ? void 0 : PH.shift) && void 0 !== AH ? AH : 0) === vH)
        };
      return (null === PH || void 0 === PH ? void 0 : PH.shift) !== kH.shift && zH.style.setProperty("--touch-shop-above-shift", `${kH.shift}px`), (null === PH || void 0 === PH ? void 0 : PH.rise) !== kH.rise && WH(zH, "ShopAboveUp", "--touch-shop-above-rise", kH.rise), OH.set(zH, kH), (null !== (rH = null === PH || void 0 === PH ? void 0 : PH.shift) && void 0 !== rH ? rH : 0) !== kH.shift
    }
    const oH = "(orientation: landscape) and (max-height: 500px)";

    function IH(HH, BH, LH) {
      (0, AH.useLayoutEffect)((() => {
        var BH;
        const AH = null === (BH = HH.current) || void 0 === BH ? void 0 : BH.closest(".BottomMiddleElements");
        if (!AH || LH) return;
        const tH = new ResizeObserver((() => {
            YH(!1)
          })),
          zH = () => {
            tH.disconnect();
            const HH = document.querySelector(".JoystickZone");
            for (const BH of [HH, AH, AH.querySelector(".HotBarGameItemsContainer"), ...GH(AH)]) BH && tH.observe(BH)
          };
        let CH = null,
          EH = !1;
        const YH = HH => {
            EH ||= HH, CH ??= requestAnimationFrame((() => {
              CH = null, EH && (EH = !1, zH()), kH(document)
            }))
          },
          uH = new MutationObserver((() => {
            YH(!0)
          }));
        uH.observe(AH, {
          childList: !0
        });
        for (const HH of XH(AH)) uH.observe(HH, {
          childList: !0,
          subtree: !0
        });
        kH(document), zH();
        const QH = () => {
            YH(!0)
          },
          WH = [(0, rH.m)(SH.e, QH), (0, rH.m)(hH.b, QH)],
          MH = new MutationObserver((() => {
            YH(!1)
          }));
        return HH.current && MH.observe(HH.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          MH.disconnect(), null !== CH && cancelAnimationFrame(CH), tH.disconnect(), uH.disconnect();
          for (const HH of WH) HH()
        }
      }), [HH, BH, LH])
    }
  },
  5478: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      e: () => PH,
      f: () => QH,
      i: () => vH
    });
    var AH = LH(45),
      rH = LH(5485),
      SH = LH(4745),
      hH = LH(1365),
      tH = LH(5506),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1352),
      XH = LH(1789),
      GH = LH(5513),
      YH = LH(1225);

    function uH(HH) {
      let {
        label: BH,
        onClick: LH,
        checked: AH,
        circleInfoText: rH,
        className: tH,
        disabled: zH,
        note: EH
      } = HH;
      return (0, YH.jsxs)("div", {
        "aria-disabled": zH || void 0,
        "data-pad-focusable": !0,
        className: CH()("SettingBox CheckboxContainer", {
          [tH]: tH,
          SettingBoxDisabled: zH
        }),
        onClick: () => {
          zH || LH(!AH)
        },
        children: [(0, YH.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YH.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YH.jsx)(SH.d, {
              className: "SettingsCheckbox",
              checked: AH,
              disabled: zH,
              onChange: () => {}
            })
          }), (0, YH.jsxs)("div", {
            className: "CheckboxText",
            children: [BH, rH && (0, YH.jsx)("span", {
              onClick: HH => HH.stopPropagation(),
              children: (0, YH.jsx)(hH.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: rH
              })
            })]
          })]
        }), EH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: EH
        })]
      })
    }

    function QH(HH) {
      let {
        name: BH,
        onChange: LH,
        min: rH,
        max: SH,
        step: tH,
        initValue: zH,
        circleInfoText: EH,
        format: XH,
        className: GH,
        padStep: uH,
        disabled: QH = !1,
        selectableMax: WH,
        cappedNote: MH,
        note: vH,
        onChangeComplete: PH
      } = HH;
      const [TH, UH] = (0, AH.useState)(zH), VH = (0, AH.useRef)(zH);
      (0, AH.useEffect)((() => {
        VH.current = zH, UH(zH)
      }), [zH]);
      const OH = void 0 !== WH && WH < SH,
        bH = OH ? {
          "--slider-selectable": (WH - rH) / (SH - rH)
        } : void 0,
        kH = OH && MH ? MH : vH;
      return (0, YH.jsxs)("div", {
        className: CH()("SettingBox SettingsSliderDiv", {
          [GH]: GH,
          SettingBoxDisabled: QH,
          SliderCapped: OH
        }),
        style: bH,
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [`${BH}: ${XH?XH(TH):TH}`, EH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EH
          })]
        }), (0, YH.jsx)("div", {
          className: "SliderDiv",
          children: (0, YH.jsx)(xH, {
            value: TH,
            min: rH,
            max: SH,
            step: tH,
            onChange: HH => {
              if (OH && HH >= WH && TH === WH) return;
              const BH = OH ? Math.min(HH, WH) : HH;
              VH.current = BH, UH(BH), LH(BH)
            },
            onChangeComplete: PH && (() => {
              PH(VH.current)
            }),
            format: XH,
            padStep: uH,
            disabled: QH
          })
        }), kH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: kH
        })]
      })
    }
    const WH = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function MH(HH) {
      var BH;
      return (null !== (BH = String(HH).split(".")[1]) && void 0 !== BH ? BH : "").length
    }

    function xH(HH) {
      let {
        value: BH,
        min: LH,
        max: SH,
        step: hH,
        onChange: tH,
        orientation: zH,
        reverse: CH,
        setIsChanging: EH,
        tooltip: XH,
        labels: uH,
        handleLabel: QH,
        format: xH,
        onChangeStart: vH,
        onChangeComplete: PH,
        padStep: TH,
        disabled: UH = !1
      } = HH;
      const VH = (0, AH.useRef)(null),
        OH = (0, AH.useRef)(null);
      (0, AH.useLayoutEffect)((() => {
        var HH, BH, LH;
        const AH = null !== (HH = null === (BH = VH.current) || void 0 === BH ? void 0 : BH.querySelector(".rangeslider")) && void 0 !== HH ? HH : null;
        null === AH || void 0 === AH || AH.setAttribute("data-pad-slider", ""), null === AH || void 0 === AH || AH.setAttribute("data-pad-focusable", ""), null === AH || void 0 === AH || null === (LH = AH.querySelector(".rangeslider__handle")) || void 0 === LH || LH.setAttribute("data-pad-slider-handle", ""), OH.current = AH
      }), []), (0, AH.useLayoutEffect)((() => {
        var HH, BH;
        UH ? null === (HH = OH.current) || void 0 === HH || HH.setAttribute("aria-disabled", "true") : null === (BH = OH.current) || void 0 === BH || BH.removeAttribute("aria-disabled")
      }), [UH]);
      const bH = Math.max(MH(hH), MH(LH)),
        kH = HH => {
          if (HH >= SH) return SH;
          if (HH <= LH) return LH;
          const BH = Number((Math.round((HH - LH) / hH) * hH + LH).toFixed(bH));
          return Math.min(SH, Math.max(LH, BH))
        },
        mH = (0, AH.useRef)(PH);
      mH.current = PH, (0, AH.useEffect)((() => {
        const HH = VH.current;
        if (!HH) return;
        const BH = HH => {
          var BH;
          WH.has(HH.key) && (null === (BH = mH.current) || void 0 === BH || BH.call(mH))
        };
        return HH.addEventListener("keyup", BH), () => {
          HH.removeEventListener("keyup", BH)
        }
      }), []);
      const oH = (0, AH.useRef)(!1);
      return (0, GH.h)(OH, {
        adjust: HH => {
          if (UH) return;
          const AH = null !== TH && void 0 !== TH ? TH : Math.max(hH, Math.round((SH - LH) / 20 / hH) * hH),
            rH = kH(BH + HH * AH * (CH ? -1 : 1));
          rH !== BH && (null === vH || void 0 === vH || vH(), tH(rH), null === PH || void 0 === PH || PH())
        },
        setFraction: HH => {
          if (UH) return;
          const AH = kH(LH + (CH ? 1 - HH : HH) * (SH - LH));
          AH !== BH && (oH.current || (oH.current = !0, null === vH || void 0 === vH || vH()), tH(AH))
        },
        endDrag: () => {
          oH.current && (oH.current = !1, null === PH || void 0 === PH || PH())
        }
      }), (0, YH.jsx)("div", {
        ref: VH,
        style: {
          display: "contents"
        },
        children: (0, YH.jsx)(rH.c, {
          value: BH,
          min: LH,
          max: SH,
          step: hH,
          onChange: HH => {
            tH(kH(HH))
          },
          orientation: zH,
          reverse: CH,
          tooltip: XH,
          labels: uH,
          handleLabel: QH,
          format: xH,
          onChangeStart: () => {
            null === vH || void 0 === vH || vH(), null === EH || void 0 === EH || EH(!0)
          },
          onChangeComplete: () => {
            null === EH || void 0 === EH || EH(!1), null === PH || void 0 === PH || PH()
          }
        })
      })
    }
    async function vH() {
      const HH = EH.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await HH.getResult() && (0, XH.reloadBloxd)()
    }

    function PH(HH) {
      let {
        label: BH,
        options: LH,
        value: AH,
        onChange: rH,
        circleInfoText: SH
      } = HH;
      return (0, YH.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [BH, SH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: SH
          })]
        }), (0, YH.jsx)(tH.b, {
          ariaLabel: BH,
          options: LH,
          value: AH,
          onChange: rH
        })]
      })
    }
  },
  5506: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1225);

    function hH(HH) {
      let {
        options: BH,
        value: LH,
        onChange: AH,
        ariaLabel: hH,
        className: tH,
        reselectable: zH = !1,
        keepsFocus: CH = !1,
        padTabs: EH
      } = HH;
      const XH = void 0 !== EH;
      return (0, SH.jsx)("div", {
        className: rH()("SegmentedToggle", tH),
        role: "group",
        "aria-label": hH,
        "data-pad-tabs": EH,
        children: BH.map((HH => {
          const BH = HH.value === LH;
          return (0, SH.jsx)("button", {
            type: "button",
            "aria-pressed": BH,
            "data-pad-tab": XH || void 0,
            "data-pad-selected": XH && BH ? "true" : void 0,
            "data-pad-default-focus": XH && BH || void 0,
            "aria-label": HH.ariaLabel,
            title: HH.ariaLabel,
            className: rH()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: BH
            }),
            onMouseDown: CH ? HH => {
              HH.preventDefault()
            } : void 0,
            onClick: () => {
              BH && !zH || AH(HH.value)
            },
            children: HH.label
          }, HH.value)
        }))
      })
    }
  },
  9444: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      d: () => SH
    });
    var AH = LH(2073);
    const rH = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      SH = HH => "string" === typeof HH.icon && "" !== HH.icon && "string" === typeof HH.keycode && rH.test(HH.keycode),
      hH = HH => "Space" === HH ? "_" : AH.i[HH]
  },
  9491: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(15);

    function rH() {
      return !AH.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9590: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => GH,
      E: () => CH,
      G: () => uH,
      K: () => SH,
      d: () => rH,
      g: () => tH,
      h: () => AH,
      j: () => QH,
      n: () => YH,
      p: () => EH,
      r: () => hH,
      u: () => WH,
      w: () => XH,
      z: () => zH
    });
    const AH = HH => ({
      left: HH.left,
      top: HH.top,
      right: HH.right,
      bottom: HH.bottom
    });

    function rH(HH) {
      return {
        x: (HH.left + HH.right) / 2,
        y: (HH.top + HH.bottom) / 2
      }
    }

    function SH(HH) {
      return 0 === HH.length ? null : HH.reduce(((HH, BH) => ({
        left: Math.min(HH.left, BH.left),
        top: Math.min(HH.top, BH.top),
        right: Math.max(HH.right, BH.right),
        bottom: Math.max(HH.bottom, BH.bottom)
      })))
    }

    function hH(HH, BH) {
      const LH = Math.max(0, (BH - (HH.right - HH.left)) / 2),
        AH = Math.max(0, (BH - (HH.bottom - HH.top)) / 2);
      return {
        left: HH.left - LH,
        top: HH.top - AH,
        right: HH.right + LH,
        bottom: HH.bottom + AH
      }
    }

    function tH(HH, BH) {
      return BH.x >= HH.left && BH.x <= HH.right && BH.y >= HH.top && BH.y <= HH.bottom
    }

    function zH(HH, BH, LH) {
      let AH = null,
        SH = 1 / 0;
      for (const {
          id: rH,
          box: hH
        }
        of BH) {
        const BH = (hH.right - hH.left) * (hH.bottom - hH.top);
        tH(hH, HH) && BH < SH && (SH = BH, AH = rH)
      }
      if (null !== AH) return AH;
      let zH = 1 / 0;
      for (const {
          id: CH,
          box: EH
        }
        of BH) {
        if (!tH(hH(EH, LH), HH)) continue;
        const BH = rH(EH),
          SH = Math.hypot(HH.x - BH.x, HH.y - BH.y);
        SH < zH && (zH = SH, AH = CH)
      }
      return AH
    }

    function CH(HH, BH, LH) {
      return {
        left: LH.left,
        top: LH.top,
        right: HH - LH.right,
        bottom: BH - LH.bottom
      }
    }

    function EH(HH, BH, LH, AH) {
      const rH = (HH, BH, LH) => Math.max(Math.min(BH, 0), Math.min(Math.max(LH, 0), HH));
      return {
        x: rH(BH, AH.left - HH.left, AH.right - HH.right),
        y: rH(LH, AH.top - HH.top, AH.bottom - HH.bottom)
      }
    }

    function XH(HH, BH, LH, AH, rH) {
      const SH = HH.dx * AH + BH,
        hH = HH.dy * rH + LH,
        tH = HH => Math.max(-1, Math.min(1, HH));
      return {
        dx: tH(SH / AH),
        dy: tH(hH / rH)
      }
    }

    function GH(HH, BH, LH, AH) {
      return BH <= 0 || LH <= 0 ? 1 : Math.max(.05, Math.min(1, HH / BH, AH / LH))
    }

    function YH(HH, BH, LH) {
      return Math.min(HH.right, BH.right) - Math.max(HH.left, BH.left) > LH && Math.min(HH.bottom, BH.bottom) - Math.max(HH.top, BH.top) > LH
    }

    function uH(HH, BH) {
      const LH = (HH, BH, LH, AH) => BH - HH > AH - LH ? LH - HH > BH - AH ? AH - BH : LH - HH : HH < LH ? LH - HH : BH > AH ? AH - BH : 0;
      return {
        x: LH(HH.left, HH.right, BH.left, BH.right),
        y: LH(HH.top, HH.bottom, BH.top, BH.bottom)
      }
    }

    function QH(HH, BH, LH) {
      return YH(HH, {
        left: 0,
        top: 0,
        right: BH,
        bottom: LH
      }, 0)
    }

    function WH(HH, BH) {
      let {
        avoid: LH = null,
        bounds: AH = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, rH = 0, SH = 1 / 0;
      return HH.forEach(((HH, hH) => {
        const tH = BH.filter((BH => YH(HH, BH, 0))).length,
          zH = null !== AH && (HH.left < AH.left || HH.top < AH.top || HH.right > AH.right || HH.bottom > AH.bottom),
          CH = tH + (LH && YH(HH, LH, 0) ? 1e3 : 0) + (zH ? 1e6 : 0);
        CH < SH && (rH = hH, SH = CH)
      })), rH
    }
  },
  9588: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => TH,
      D: () => CH,
      G: () => YH,
      K: () => GH,
      L: () => XH,
      e: () => tH,
      h: () => PH,
      k: () => vH,
      o: () => xH,
      q: () => zH,
      t: () => uH,
      x: () => EH,
      y: () => UH
    });
    var AH = LH(9590),
      rH = LH(2659);
    const SH = {
        sprint: "joystick",
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        shop: "inventory",
        bag: "inventory",
        ...Object.fromEntries(rH.A.map((HH => [HH, "menu"])))
      },
      hH = HH => rH.y.filter((BH => SH[BH] === HH)),
      tH = new Set(hH("cluster")),
      zH = new Set(hH("inventory")),
      CH = HH => "inventory" === HH || zH.has(HH),
      EH = HH => {
        const BH = SH[HH];
        return void 0 === BH ? [] : [BH, ...EH(BH)]
      },
      XH = HH => [HH, ...EH(HH)],
      GH = (HH, BH, LH) => "shop" === HH && BH ? LH("inventory") ? ["inventory"] : LH("bag") ? [HH, "bag"] : [HH] : [HH],
      YH = (HH, BH, LH, rH) => {
        const SH = HH => {
          const SH = BH[HH],
            {
              x: hH,
              y: tH
            } = SH && rH(HH) ? (0, AH.G)(SH, LH) : {
              x: 0,
              y: 0
            };
          return SH && {
            left: SH.left + hH,
            top: SH.top + tH,
            right: SH.right + hH,
            bottom: SH.bottom + tH
          }
        };
        return HH.flatMap((HH => {
          const hH = BH[HH];
          if ("inventory" !== HH || !hH || hH.right - hH.left <= LH.right - LH.left && hH.bottom - hH.top <= LH.bottom - LH.top) return [HH];
          const [tH, zH] = [SH("shop"), SH("bag")];
          return tH && zH && !(0, AH.n)(tH, zH, 0) ? ["shop", "bag"].filter(rH) : [HH]
        }))
      },
      uH = new Map([
        ["cluster", tH],
        ["inventory", zH]
      ]),
      QH = ["cluster"],
      WH = [...QH, ...rH.y.filter((HH => !QH.includes(HH) && !SH[HH]))],
      MH = HH => [HH, ...hH(HH).flatMap(MH)],
      xH = WH.flatMap(MH).map((HH => ({
        id: HH,
        label: `hudLayout:${HH}`,
        ...rH.v[HH],
        parent: SH[HH]
      }))),
      vH = Object.fromEntries(xH.map((HH => [HH.id, HH]))),
      PH = "data-hud-el";

    function TH(HH, BH, LH, AH) {
      const rH = LH(function(HH, BH) {
          return "attack" !== HH || BH ? vH[HH].label : "hudLayout:attackContext"
        }(HH, BH)),
        SH = AH[HH];
      return SH ? LH("hudLayout:slotWithKey", {
        slot: rH,
        key: SH
      }) : rH
    }

    function UH(HH, BH, LH, AH) {
      return HH.map((HH => TH(HH, BH, LH, AH))).join(", ")
    }
  },
  9598: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => SH,
      f: () => rH,
      i: () => hH,
      m: () => XH,
      q: () => EH,
      r: () => CH,
      u: () => zH
    });
    var AH = LH(2659);
    const rH = ["J", "C", "A", "P", "U", "X", "G"],
      SH = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function hH(HH) {
      return HH ? ["X"] : ["P", "X"]
    }
    const tH = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: AH.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function zH(HH, BH, LH) {
      const AH = HH.querySelector(".InGameUi .TouchComponentsButtons");
      if (!AH) return tH;
      const SH = {},
        hH = {};
      for (const tH of rH) {
        const HH = AH.querySelector(`.TouchSlot${tH} > .TouchKey`);
        if (HH) {
          var zH, CH;
          SH[tH] = HH.cloneNode(!0);
          const BH = (null !== (zH = null === (CH = HH.querySelector(".TouchKeyLabel")) || void 0 === CH ? void 0 : CH.textContent) && void 0 !== zH ? zH : "").split(/\s+/).filter((HH => !/[\d\xd7]/.test(HH))).join(" ");
          BH && (hH[tH] = BH)
        }
      }
      const EH = BH => {
          const LH = HH.querySelector(`.InGameUi ${BH}`);
          return null !== LH && !LH.classList.contains("Hidden")
        },
        XH = [...HH.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((HH => HH.cloneNode(!0)));
      return {
        faces: Object.keys(SH).length > 0 ? SH : null,
        names: hH,
        shop: EH(".TouchInventoryKey.ShopKey"),
        bag: EH(".TouchInventoryKey.BagKey"),
        sprint: EH(".TouchSprintHit"),
        items: XH.length > 0 ? XH : null,
        rowIcons: BH,
        pinnedIcons: LH
      }
    }

    function CH(HH, BH) {
      const LH = {};
      for (const AH of [...hH(BH), "G"]) {
        const BH = HH.names[AH];
        BH && (LH[SH[AH]] = BH)
      }
      return LH
    }

    function EH(HH, BH) {
      const {
        faces: LH
      } = HH;
      if (null === LH) return [];
      const AH = new Set(Object.keys(LH).map((HH => SH[HH])));
      return hH(BH).filter((HH => !AH.has(SH[HH])))
    }

    function XH(HH, BH) {
      HH.replaceChildren(...[...BH.childNodes].map((HH => HH.cloneNode(!0))))
    }
  },
  9592: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => CH
    });
    var AH = LH(9590),
      rH = LH(9588),
      SH = LH(2659),
      hH = LH(2661);
    const tH = 2,
      zH = (HH, BH, LH) => {
        const AH = (0, rH.x)(BH).includes(HH) ? HH : (0, rH.x)(HH).includes(BH) ? BH : null;
        if (null === AH || "joystick" === AH) return !1;
        const tH = AH === HH ? BH : HH;
        if ("menu" === AH) return (0, hH.t)(tH, LH.hudElements[tH]);
        if ("hotbar" !== AH || !(0, rH.D)(tH)) return !0;
        if ((0, SH.G)(LH.hudElements[tH]) || (0, SH.G)(LH.hudElements.inventory)) return !1;
        return !(LH.hudLocked.includes(tH) || LH.hudLocked.includes("inventory")) || (0, SH.F)(LH.hudElements.hotbar)
      };

    function CH(HH, BH, LH, CH) {
      const EH = HH => (0, rH.L)(HH).some((HH => (0, SH.s)(LH.hudElements, HH) || (0, hH.s)(HH, LH, CH)));
      if (EH(HH)) return [];
      const XH = HH => {
          var BH, AH;
          return "bag" === HH && 1 !== (null !== (BH = null === (AH = LH.hudElements.shop) || void 0 === AH ? void 0 : AH[2]) && void 0 !== BH ? BH : 1) || (0, rH.L)(HH).some((HH => void 0 !== LH.hudElements[HH]))
        },
        GH = rH.t.get(HH),
        YH = BH.filter((BH => {
          let {
            id: LH
          } = BH;
          return GH ? GH.has(LH) && !EH(LH) : LH === HH
        })),
        uH = new Set;
      for (const rH of BH) rH.id === HH || null !== GH && void 0 !== GH && GH.has(rH.id) || uH.has(rH.id) || EH(rH.id) || YH.some((HH => {
        let {
          id: BH,
          box: SH
        } = HH;
        return !zH(BH, rH.id, LH) && (XH(BH) || XH(rH.id)) && (0, AH.n)(SH, rH.box, tH)
      })) && uH.add(rH.id);
      return [...uH]
    }
  },
  9499: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => EH,
      D: () => GH,
      F: () => YH,
      e: () => SH,
      i: () => tH,
      m: () => CH,
      n: () => zH,
      p: () => hH,
      s: () => rH,
      u: () => AH,
      w: () => uH,
      z: () => XH
    });
    const AH = 14,
      rH = 6,
      SH = (AH + rH) / 2,
      hH = 200,
      tH = hH / 2,
      zH = hH / 2 - 1,
      CH = rH / AH * (hH / 2),
      EH = (HH, BH) => -Math.PI / 2 + 2 * HH * Math.PI / BH,
      XH = (HH, BH, LH) => {
        const AH = 2 * Math.PI / LH;
        return (Math.round((Math.atan2(BH, HH) + Math.PI / 2) / AH) % LH + LH) % LH
      },
      GH = .5,
      YH = (HH, BH, LH) => Math.hypot(HH.x, HH.y) < GH ? LH : XH(HH.x, HH.y, BH),
      uH = (HH, BH, LH, AH, rH) => {
        const SH = Math.PI / BH,
          hH = EH(HH, BH),
          tH = hH - SH,
          zH = hH + SH,
          CH = (HH, BH) => `${LH+HH*Math.cos(BH)} ${LH+HH*Math.sin(BH)}`;
        return [`M ${CH(AH,tH)}`, `L ${CH(rH,tH)}`, `A ${rH} ${rH} 0 0 1 ${CH(rH,zH)}`, `L ${CH(AH,zH)}`, `A ${AH} ${AH} 0 0 0 ${CH(AH,tH)}`, "Z"].join(" ")
      }
  },
  9528: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(45),
      rH = LH(9467),
      SH = LH(2628);

    function hH() {
      const HH = (0, SH.j)("shopInfo"),
        [, BH] = (0, AH.useReducer)((HH => HH + 1), 0);
      return (0, SH.f)("shopInfo", BH), !(0, rH.d)(HH)
    }
  },
  8875: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => uH,
      c: () => rH,
      g: () => SH,
      k: () => GH,
      m: () => XH,
      q: () => CH,
      t: () => tH,
      u: () => AH,
      y: () => YH
    });
    const AH = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      rH = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: AH
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      SH = {
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
      hH = ["pickBlock", "perspective"],
      tH = HH => hH.includes(HH) ? hH : [HH],
      zH = Object.fromEntries(rH.flatMap((HH => {
        let {
          group: BH,
          actions: LH
        } = HH;
        return LH.map((HH => [HH, BH]))
      }))),
      CH = HH => zH[HH],
      EH = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      XH = HH => {
        var BH;
        return [CH(HH), ...null !== (BH = EH[HH]) && void 0 !== BH ? BH : []]
      },
      GH = new Set(["menu", "inventory", "keyboard"]),
      YH = {
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
      uH = new Set(["forward", "backward", "left", "right"])
  },
  8870: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => OH,
      H: () => vH,
      J: () => kH,
      L: () => EH,
      M: () => bH,
      N: () => IH,
      e: () => xH,
      h: () => TH,
      k: () => GH,
      o: () => YH,
      q: () => lH,
      u: () => oH,
      v: () => mH,
      y: () => PH,
      z: () => fH
    });
    var AH = LH(8875),
      rH = LH(8878),
      SH = LH(8857),
      hH = LH(8897);
    const tH = HH => "pickBlock" === HH ? "perspective" : HH,
      zH = (HH, BH) => {
        var LH;
        const rH = tH(BH);
        return null !== (LH = HH[rH]) && void 0 !== LH ? LH : AH.g[rH]
      },
      CH = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((HH => {
        let [BH, LH] = HH;
        return [
          [BH, LH],
          [LH, BH]
        ]
      }))),
      EH = (HH, BH) => null !== HH && void 0 !== HH ? HH : "nintendo" === BH,
      XH = HH => EH((0, rH.g)().swapConfirmBack, (0, rH.i)()) && CH.get(HH) || HH,
      GH = HH => zH((0, rH.g)().bindings, XH(HH)),
      YH = HH => AH.g[XH(HH)],
      uH = Object.keys(AH.g),
      QH = HH => "gameplay" === (0, AH.q)(HH) ? ["gameplay"] : (0, AH.m)(HH),
      WH = (HH, BH) => {
        const LH = QH(BH);
        return QH(HH).some((HH => LH.includes(HH)))
      },
      MH = (HH, BH, LH) => {
        const rH = zH(HH, BH),
          hH = new Set((0, AH.t)(BH)),
          CH = [...hH];
        for (let AH = CH.pop(); AH; AH = CH.pop())
          for (const BH of uH) {
            const SH = zH(HH, BH);
            hH.has(BH) || SH !== LH && SH !== rH || !WH(AH, BH) || (hH.add(BH), CH.push(BH))
          }
        const EH = {
          ...HH
        };
        for (const XH of hH) {
          const BH = zH(HH, XH) === rH ? LH : rH,
            hH = (0, AH.m)(XH).some((HH => AH.k.has(HH)));
          if ((0, SH.D)(BH) && hH) return null;
          EH[tH(XH)] = BH
        }
        for (const SH of Object.keys(EH)) EH[SH] === AH.g[SH] && delete EH[SH];
        return EH
      },
      xH = (HH, BH) => null !== MH((0, rH.g)().bindings, XH(HH), BH),
      vH = (HH, BH) => {
        if (GH(HH) === BH) return !0;
        const LH = MH((0, rH.g)().bindings, XH(HH), BH);
        return !!LH && ((0, rH.k)({
          bindings: LH
        }), !0)
      },
      PH = (HH, BH) => {
        const LH = (0, AH.t)(BH);
        return uH.filter((BH => tH(BH) === BH && !LH.includes(BH) && zH(HH, XH(BH)) !== GH(BH)))
      },
      TH = ["southpaw", "triggersSwapped"],
      UH = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      VH = HH => Object.keys(UH[HH]),
      OH = (HH, BH) => "southpaw" === HH ? BH.swapSticks : VH(HH).every((LH => zH(BH.bindings, LH) === UH[HH][LH])),
      bH = (HH, BH) => {
        const LH = (0, rH.g)();
        let SH = LH.bindings;
        for (const rH of VH(HH)) {
          const LH = BH ? UH[HH][rH] : AH.g[rH];
          if (SH = MH(SH, rH, LH), !SH) return !1
        }
        return (0, rH.k)({
          swapSticks: "southpaw" === HH ? BH : LH.swapSticks,
          bindings: SH
        }), !0
      },
      kH = () => {
        (0, rH.k)({
          swapSticks: !1,
          bindings: {}
        })
      },
      mH = () => (0, rH.g)().swapSticks ? "RightStick" : "LeftStick",
      oH = () => (0, rH.g)().swapSticks ? "LeftStick" : "RightStick",
      IH = HH => (0, rH.g)().swapSticks && (0, SH.D)(HH),
      fH = HH => IH(HH) ? mH() : oH(),
      lH = HH => {
        if (AH.C.has(HH)) return mH();
        const BH = AH.y[HH];
        return BH && ("leaderboard" !== BH || (0, hH.c)(HH, (0, hH.b)())) ? GH(BH) : null
      }
  },
  8846: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ControllerCategory: () => xt,
      ControllerGlyph: () => Ur,
      ControllerRoot: () => xh,
      PadLobbyShortcuts: () => eh,
      PadSneakChip: () => bh,
      PadTooltip: () => mh,
      attachPressToContinue: () => Dh,
      getBoundButton: () => EH.k,
      getControllerSettings: () => GH.g,
      getGlyphForNoaAction: () => EH.q,
      getInventoryCursorState: () => Pt,
      getMenuShortcutButton: () => wL,
      getPadGlyphIconName: () => Uh,
      getPadGlyphIconUrl: () => Vh,
      getPadRepeatTiming: () => QH.f,
      handOverPadFocus: () => Ut,
      hasActivePad: () => vt,
      isPadSteppingSlots: () => Tt
    });
    const AH = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var rH = LH(1123),
      SH = LH(1405),
      hH = LH(8855),
      tH = LH(69),
      zH = LH(15),
      CH = LH(18),
      EH = LH(8870),
      XH = LH(8901),
      GH = LH(8878),
      YH = LH(8908),
      uH = LH(8857),
      QH = LH(9342),
      WH = LH(9347),
      MH = LH(1696);
    const xH = (HH, BH, LH) => Math.max(BH, Math.min(LH, HH)),
      vH = HH => Math.min(HH.width, HH.height) / 720,
      PH = HH => Math.max(.15, HH);
    class TH {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(HH, BH) {
        const LH = Math.hypot(HH.x, HH.y) >= (HH => Math.max(.3, HH))(BH);
        return this.locked ? (this.locked = LH, !1) : LH
      }
    }
    const UH = (HH, BH) => {
        const LH = xH(BH.dtMs, 0, 100),
          AH = LH / 1e3,
          rH = vH(BH.viewport) * (BH.cursorSpeedPercent / 100),
          SH = (0, uH.f)(BH.stick, PH(BH.moveDeadzone)),
          hH = Math.hypot(SH.x, SH.y),
          tH = ((HH, BH, LH) => {
            if (BH < .3) return 0;
            const AH = LH / 350;
            return BH >= .85 ? Math.min(1, HH + AH) : Math.max(0, HH - AH)
          })(HH.speedRamp, hH, LH);
        let zH = HH.x,
          CH = HH.y;
        if (hH > 0) {
          const HH = .45 + .55 * tH,
            LH = BH.context.overInteractive ? .45 : 1,
            EH = 1400 * (HH => {
              const BH = xH(HH, 0, 1);
              return .3 * BH + .7 * BH * BH
            })(hH) * rH * HH * LH;
          zH += SH.x / hH * EH * AH, CH += SH.y / hH * EH * AH
        }
        const EH = Math.hypot(BH.dpad.x, BH.dpad.y);
        if (EH > 0) {
          const HH = 500 * rH;
          zH += BH.dpad.x / EH * HH * AH, CH += BH.dpad.y / EH * HH * AH
        }
        const XH = BH.context.magnetTarget;
        if (XH && hH < .3 && 0 === EH) {
          const HH = ((HH, BH, LH, AH, rH) => {
            const SH = BH.x - HH.x,
              hH = BH.y - HH.y,
              tH = Math.hypot(SH, hH);
            if (0 === tH) return {
              x: 0,
              y: 0
            };
            const zH = Math.min(tH, rH * (1 - AH / .3));
            let CH = SH / tH * zH,
              EH = hH / tH * zH;
            if (AH > 0) {
              const HH = LH.x / AH,
                BH = LH.y / AH,
                rH = CH * HH + EH * BH;
              rH < 0 && (CH -= rH * HH, EH -= rH * BH)
            }
            return {
              x: CH,
              y: EH
            }
          })({
            x: zH,
            y: CH
          }, XH, SH, hH, 120 * vH(BH.viewport) * AH);
          zH += HH.x, CH += HH.y
        }
        return {
          x: xH(zH, 0, Math.max(0, BH.viewport.width - 1)),
          y: xH(CH, 0, Math.max(0, BH.viewport.height - 1)),
          speedRamp: tH
        }
      },
      VH = HH => {
        const BH = (0, uH.f)(HH, .2);
        return 0 !== BH.x || 0 !== BH.y
      },
      OH = (HH, BH) => {
        const LH = (0, uH.f)(HH, .2),
          AH = Math.hypot(LH.x, LH.y);
        if (0 === AH) return {
          x: 0,
          y: 0
        };
        const rH = AH * AH * 1600,
          SH = xH(BH, 0, 100) / 1e3;
        return {
          x: LH.x / AH * rH * SH,
          y: LH.y / AH * rH * SH
        }
      },
      bH = (HH, BH) => "y" === BH ? HH.scrollHeight > HH.clientHeight + 1 : HH.scrollWidth > HH.clientWidth + 1,
      kH = (HH, BH) => {
        if (!bH(HH, BH)) return !1;
        const LH = getComputedStyle(HH),
          AH = "y" === BH ? LH.overflowY : LH.overflowX;
        return "auto" === AH || "scroll" === AH
      },
      mH = (HH, BH, LH) => {
        for (let SH = HH instanceof HTMLElement ? HH : null !== (AH = null === HH || void 0 === HH ? void 0 : HH.parentElement) && void 0 !== AH ? AH : null; SH; SH = SH.parentElement) {
          var AH;
          if (kH(SH, BH)) return SH;
          if (SH === LH) return null
        }
        if (LH) return null;
        const rH = document.scrollingElement;
        return rH instanceof HTMLElement && bH(rH, BH) ? rH : null
      },
      oH = new WeakMap,
      IH = (HH, BH) => {
        const LH = performance.now(),
          AH = oH.get(HH);
        if (AH && AH.axis === BH && LH - AH.atMs < 500 && (!AH.container || AH.container.isConnected)) return AH.container;
        const rH = fH(HH, BH);
        return oH.set(HH, {
          axis: BH,
          atMs: LH,
          container: rH
        }), rH
      },
      fH = (HH, BH) => {
        let LH = kH(HH, BH) ? HH : null,
          AH = LH ? LH.clientWidth * LH.clientHeight : 0;
        for (const rH of HH.querySelectorAll("*")) {
          const HH = rH.clientWidth * rH.clientHeight;
          HH > AH && kH(rH, BH) && (LH = rH, AH = HH)
        }
        return LH
      },
      lH = (HH, BH, LH) => "y" === BH ? LH < 0 ? HH.scrollTop > 0 : HH.scrollTop + HH.clientHeight < HH.scrollHeight - 1 : LH < 0 ? HH.scrollLeft > 0 : HH.scrollLeft + HH.clientWidth < HH.scrollWidth - 1,
      KH = (HH, BH, LH) => {
        "y" === BH ? HH.scrollBy({
          top: LH,
          behavior: "instant"
        }) : HH.scrollBy({
          left: LH,
          behavior: "instant"
        })
      },
      cH = HH => {
        if (!HH || HH === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const BH = HH.getBoundingClientRect(),
          LH = Math.max(0, BH.left),
          AH = Math.max(0, BH.top);
        return new DOMRect(LH, AH, Math.min(window.innerWidth, BH.right) - LH, Math.min(window.innerHeight, BH.bottom) - AH)
      },
      eH = (HH, BH) => HH.left < BH.right && BH.left < HH.right && HH.top < BH.bottom && BH.top < HH.bottom;
    var qH = LH(45),
      gH = LH(1038),
      NH = LH.n(gH),
      RH = LH(1225);
    let jH = 0,
      nH = !1;
    class FH {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(HH) {
        this.element = HH, this.shownKey = "", this.gap = null
      }
      show(HH) {
        const BH = this.element;
        if (!BH) return;
        const LH = HH ? this.keepOnScreen(BH, HH) : null,
          AH = LH ? `${LH.left},${LH.top},${LH.width},${LH.height}` : "";
        if (AH === this.shownKey) return;
        const rH = "" === this.shownKey;
        this.shownKey = AH, BH.classList.toggle("Visible", null !== LH), LH && (BH.classList.toggle("Snap", rH), BH.style.width = `${LH.width}px`, BH.style.height = `${LH.height}px`, BH.style.transform = `translate(${LH.left}px, ${LH.top}px)`, rH && (BH.offsetWidth, BH.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(HH, BH) {
        var LH;
        const AH = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!nH){nH=!0;const HH=document.createElement("div");HH.setAttribute("aria-hidden","true"),HH.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(HH),new ResizeObserver((()=>{jH++})).observe(HH)}return String(jH)})()}`;
        (null === (LH = this.gap) || void 0 === LH ? void 0 : LH.key) !== AH && (this.gap = {
          px: parseFloat(getComputedStyle(HH).paddingLeft) || 0,
          key: AH
        });
        const rH = this.gap.px + 2,
          SH = Math.max(BH.left, rH),
          hH = Math.max(BH.top, rH),
          tH = Math.min(BH.left + BH.width, window.innerWidth - rH),
          zH = Math.min(BH.top + BH.height, window.innerHeight - rH);
        return tH <= SH || zH <= hH ? BH : {
          left: SH,
          top: hH,
          width: tH - SH,
          height: zH - hH
        }
      }
    }
    const DH = HH => {
      let {
        placer: BH,
        className: LH
      } = HH;
      const AH = (0, qH.useCallback)((HH => {
        BH.setElement(HH)
      }), [BH]);
      return (0, RH.jsx)("div", {
        ref: AH,
        className: NH()("PadReticle", LH),
        "aria-hidden": !0
      })
    };
    var wH = LH(9356);
    const ZH = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const dH = new class {
      constructor() {
        this.state = ZH, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(HH) {
        if (BH = this.state, LH = HH, (BH.visible || LH.visible) && (BH.visible !== LH.visible || BH.x !== LH.x || BH.y !== LH.y || BH.pressed !== LH.pressed)) {
          var BH, LH;
          this.state = HH;
          for (const BH of this.listeners) BH(HH)
        }
      }
      hide() {
        this.set(ZH)
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
    };
    var aH = LH(9364);
    const sH = (HH, BH) => {
        let {
          kind: LH,
          holding: AH,
          hasPress: rH,
          hasBack: SH,
          slotHasItem: hH
        } = BH;
        switch (HH) {
          case "primary":
            return "slot" === LH ? "slotPrimary" : "recipe" === LH || "button" === LH ? rH ? "pressPrimary" : "click" : "textField" === LH ? "openKeyboard" : null;
          case "secondary":
            return "slot" === LH ? "slotSecondary" : "button" !== LH && "recipe" !== LH || !rH ? null : "pressSecondary";
          case "quickMove":
            return "slot" === LH && hH ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === LH && hH && !AH ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return AH ? "cancel" : SH ? "pressBack" : "close"
        }
      },
      JH = HH => {
        const BH = [];
        if (HH.hotbarPicking) return BH.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), BH.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), BH;
        if (HH.holding) "slot" === HH.kind ? (BH.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), BH.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === HH.kind && BH.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), BH.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), BH.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), HH.openButtonCloses && BH.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var LH;
          "slot" === HH.kind && HH.slotHasItem ? (BH.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), BH.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), BH.push({
            actions: ["inventoryQuickMove"],
            labelKey: HH.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), BH.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), BH.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== HH.kind && "recipe" !== HH.kind || !HH.pressHints ? "button" === HH.kind || "recipe" === HH.kind ? BH.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === HH.kind && BH.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (HH.pressHints.primary && BH.push({
            actions: ["inventoryPrimary"],
            labelKey: HH.pressHints.primary
          }), HH.pressHints.secondary && BH.push({
            actions: ["inventorySecondary"],
            labelKey: HH.pressHints.secondary
          }));
          const AH = null === (LH = HH.pressHints) || void 0 === LH ? void 0 : LH.back;
          AH && BH.push({
            actions: ["inventoryClose"],
            labelKey: AH
          });
          const rH = [];
          HH.openButtonCloses && rH.push("inventory"), AH || rH.push("inventoryClose"), rH.length > 0 && BH.push({
            actions: rH,
            labelKey: "inventoryClose"
          })
        }
        return BH.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), HH.hasCategories ? BH.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : HH.hasList && BH.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), BH
      };
    var iH = LH(9370),
      pH = LH(2548);
    class yH {
      constructor(HH) {
        this.probes = HH, this.byContainer = new Map, this.byParent = new Map
      }
      find(HH, BH) {
        const LH = mH(HH, "y", BH);
        if (!LH) return null;
        let AH = this.byContainer.get(LH);
        return AH || (this.probes.push({
          element: LH,
          rect: AB(LH.getBoundingClientRect())
        }), AH = {
          container: LH,
          box: cH(LH),
          group: LB(LH)
        }, this.byContainer.set(LH, AH)), AH
      }
      findForParent(HH, BH) {
        let LH = this.byParent.get(HH);
        return void 0 === LH && (LH = this.find(HH, BH), this.byParent.set(HH, LH)), LH
      }
    }
    const HB = new WeakMap;
    let BB = 0;
    const LB = HH => {
        let BH = HB.get(HH);
        return BH || (BH = "el:" + BB++, HB.set(HH, BH)), BH
      },
      AB = HH => ({
        left: HH.left,
        top: HH.top,
        width: HH.width,
        height: HH.height
      }),
      rB = HH => HH.width > 0 && HH.height > 0,
      SB = (HH, BH) => rB(HH) && HH.left + HH.width > 0 && HH.top + HH.height > 0 && HH.left < BH.width && HH.top < BH.height,
      hB = (HH, BH, LH) => {
        const AH = HH.top + HH.height / 2;
        return SB(HH, BH) && (!LH || AH >= LH.top && AH <= LH.bottom)
      },
      tB = HH => ({
        x: HH.left + HH.width / 2,
        y: HH.top + HH.height / 2
      }),
      zB = (HH, BH, LH) => HH < 0 ? LH >= 0 ? 0 : BH - 1 : ((HH + LH) % BH + BH) % BH,
      CB = HH => "Left" === HH || "Right" === HH,
      EB = (HH, BH, LH) => {
        const AH = CB(LH),
          rH = AH ? HH.top : HH.left,
          SH = AH ? HH.height : HH.width,
          hH = AH ? BH.top : BH.left,
          tH = AH ? BH.height : BH.width,
          zH = Math.max(0, Math.max(hH - (rH + SH), rH - (hH + tH)));
        return SH > 1.5 * tH ? {
          gap: zH,
          offset: Math.max(0, hH - rH) + .1 * Math.max(0, rH - hH)
        } : {
          gap: zH,
          offset: Math.abs(hH + tH / 2 - (rH + SH / 2))
        }
      },
      XB = (HH, BH, LH) => {
        const AH = ((HH, BH, LH) => {
          const AH = tB(HH),
            rH = tB(BH),
            SH = CB(LH) ? Math.min(HH.width, BH.width) / 4 : Math.min(HH.height, BH.height) / 4;
          switch (LH) {
            case "Right":
              return rH.x - AH.x >= SH ? Math.max(0, BH.left - (HH.left + HH.width)) : null;
            case "Left":
              return AH.x - rH.x >= SH ? Math.max(0, HH.left - (BH.left + BH.width)) : null;
            case "Down":
              return rH.y - AH.y >= SH ? Math.max(0, BH.top - (HH.top + HH.height)) : null;
            case "Up":
              return AH.y - rH.y >= SH ? Math.max(0, HH.top - (BH.top + BH.height)) : null
          }
        })(HH, BH, LH);
        if (null === AH) return null;
        const rH = EB(HH, BH, LH);
        return AH + 3 * rH.gap + .5 * rH.offset
      },
      GB = (HH, BH) => BH.visible || null !== BH.scrollGroup && BH.scrollGroup === HH.scrollGroup,
      YB = (HH, BH, LH, AH) => {
        let rH = null,
          SH = 1 / 0;
        for (const hH of BH) {
          if (hH.key === HH.key || !GB(HH, hH) || !AH(hH)) continue;
          const BH = XB(HH.rect, hH.rect, LH);
          null !== BH && BH < SH && (rH = hH, SH = BH)
        }
        return rH
      },
      uB = (HH, BH, LH) => {
        const AH = YB(HH, BH, LH, (() => !0));
        if (!AH || CB(LH) || null === HH.scrollGroup || AH.scrollGroup === HH.scrollGroup) return AH;
        const rH = YB(HH, BH, LH, (BH => 0 === EB(HH.rect, BH.rect, LH).gap));
        return null !== rH && void 0 !== rH ? rH : AH
      },
      QB = (HH, BH, LH) => {
        let AH = null,
          rH = 1 / 0;
        for (const SH of BH) {
          if (!SH.visible || LH && !LH(SH)) continue;
          const BH = tB(SH.rect),
            hH = Math.hypot(BH.x - HH.x, BH.y - HH.y);
          hH < rH && (AH = SH, rH = hH)
        }
        return AH
      },
      WB = HH => {
        const {
          rect: BH,
          clip: LH
        } = HH;
        if (!LH) return BH;
        const AH = Math.max(BH.left, LH.left),
          rH = Math.max(BH.top, LH.top);
        return {
          left: AH,
          top: rH,
          width: Math.min(BH.left + BH.width, LH.left + LH.width) - AH,
          height: Math.min(BH.top + BH.height, LH.top + LH.height) - rH
        }
      },
      MB = (HH, BH) => BH.x >= HH.left && BH.x < HH.left + HH.width && BH.y >= HH.top && BH.y < HH.top + HH.height,
      xB = (HH, BH) => {
        let LH = null,
          AH = 1 / 0;
        for (const rH of BH) {
          const BH = WB(rH);
          (rH.visible || rH.clip) && MB(BH, HH) && (BH.width * BH.height < AH && (LH = rH, AH = BH.width * BH.height))
        }
        return LH
      },
      vB = HH => {
        let BH = null;
        for (const LH of HH) {
          if (!LH.visible) continue;
          if (!BH) {
            BH = LH;
            continue
          }
          const HH = Math.min(BH.rect.height, LH.rect.height) / 2,
            AH = LH.rect.top - BH.rect.top;
          (AH < -HH || Math.abs(AH) <= HH && LH.rect.left < BH.rect.left) && (BH = LH)
        }
        return BH
      },
      PB = (HH, BH, LH, AH, rH) => {
        const SH = rH % BH,
          hH = Math.floor(rH / BH);
        return {
          left: HH.left + SH * LH,
          top: HH.top + hH * AH,
          width: HH.width,
          height: HH.height
        }
      },
      TB = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      UB = ".LazyLoadedItemWrapper",
      VB = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      OB = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      bB = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      kB = HH => HH.hasAttribute("data-inven-idx") ? "slot" : HH.hasAttribute("data-recipe-key") ? "recipe" : HH.hasAttribute("data-craft-ingredient") || (0, pH.x)(HH) ? "info" : (0, wH.S)(HH) ? "textField" : "button",
      mB = (HH, BH) => "slot" === BH ? Number(HH.getAttribute("data-inven-idx")) : null,
      oB = HH => HH.matches(UB) ? HH.querySelector(VB) : HH,
      IB = HH => {
        var BH, LH;
        return {
          element: HH,
          recipe: null !== (BH = HH && (null === (LH = oB(HH)) || void 0 === LH ? void 0 : LH.getAttribute("data-recipe-key"))) && void 0 !== BH ? BH : null
        }
      },
      fB = HH => {
        const BH = oB(HH);
        if (!BH) return {
          kind: "pending",
          idx: null
        };
        const LH = kB(BH);
        return {
          kind: LH,
          idx: mB(BH, LH)
        }
      },
      lB = HH => {
        const BH = [];
        for (const [LH, AH] of OB) {
          HH.matches(AH) && BH.push([LH, HH]);
          for (const rH of HH.querySelectorAll(AH)) BH.push([LH, rH])
        }
        return BH
      },
      KB = (HH, BH) => {
        for (const [LH, AH] of HH)
          if (AH.contains(BH)) return LH;
        return "other"
      },
      cB = (HH, BH, LH, AH, rH, SH, hH, tH) => {
        var zH;
        const CH = HH.children,
          EH = AB(CH[0].getBoundingClientRect()),
          XH = [{
            element: CH[0],
            rect: EH
          }];
        if (SH.push(XH[0]), 0 === EH.width || 0 === EH.height) return;
        let GH = 1;
        for (; GH < CH.length && Math.abs(CH[GH].getBoundingClientRect().top - EH.top) < 1;) GH++;
        const YH = HH => {
            const BH = {
              element: CH[HH],
              rect: AB(CH[HH].getBoundingClientRect())
            };
            return SH.push(BH), XH.push(BH), BH.rect
          },
          uH = GH > 1 ? YH(1).left - EH.left : EH.width,
          QH = CH.length > GH ? YH(GH).top - EH.top : EH.height,
          WH = hH.find(HH, BH);
        let MH = null;
        if (WH) {
          var xH;
          const {
            container: HH,
            box: BH
          } = WH;
          MH = null !== (xH = tH.get(HH)) && void 0 !== xH ? xH : null, MH || (MH = {
            top: HH.scrollTop,
            left: HH.scrollLeft,
            box: BH,
            viewport: AH,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, tH.set(HH, MH)), MH.probes.push(...XH)
        }
        const vH = rH.length;
        for (let VH = 0; VH < CH.length; VH++) {
          var PH, TH, UH;
          const HH = CH[VH],
            BH = PB(EH, GH, uH, QH, VH),
            SH = HH.firstElementChild ? HH.querySelector(VB) : null,
            hH = SH ? kB(SH) : "pending";
          rH.push({
            key: LB(HH),
            rect: BH,
            panel: LH,
            scrollGroup: null !== (PH = null === WH || void 0 === WH ? void 0 : WH.group) && void 0 !== PH ? PH : null,
            visible: hB(BH, AH, null === WH || void 0 === WH ? void 0 : WH.box),
            clip: null !== (TH = null === WH || void 0 === WH ? void 0 : WH.box) && void 0 !== TH ? TH : null,
            element: HH,
            kind: hH,
            idx: SH ? mB(SH, hH) : null,
            scrollContainer: null !== (UH = null === WH || void 0 === WH ? void 0 : WH.container) && void 0 !== UH ? UH : null
          })
        }
        null === (zH = MH) || void 0 === zH || zH.targets.push(...rH.slice(vH))
      },
      eB = HH => HH instanceof Element && null !== HH.closest(UB),
      qB = HH => null !== HH.scrollContainer && eB(HH.element);
    class gB {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(HH, BH, LH, AH) {
        this.latched = {
          source: HH,
          focusKey: BH,
          sinceMs: LH,
          hold: {
            id: ++this.presses,
            holdMs: AH
          }
        }
      }
      update(HH, BH, LH) {
        const AH = this.latched;
        return AH ? HH && BH === AH.focusKey ? LH - AH.sinceMs < AH.hold.holdMs ? null : (this.latched = null, AH.source) : (this.latched = null, null) : null
      }
      getHold() {
        var HH, BH;
        return null !== (HH = null === (BH = this.latched) || void 0 === BH ? void 0 : BH.hold) && void 0 !== HH ? HH : null
      }
      reset() {
        this.latched = null
      }
    }
    var NB = LH(9377);
    const RB = {
        kind: "none"
      },
      jB = HH => ({
        x: HH.clientX,
        y: HH.clientY
      }),
      nB = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class FB {
      constructor() {
        this.hovered = RB, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(HH, BH, LH, AH, rH) {
        const SH = null !== BH ? {
            kind: "slot",
            idx: BH
          } : LH ? {
            kind: "element",
            element: LH
          } : RB,
          hH = `${rH}|${Math.round(AH.clientX)},${Math.round(AH.clientY)}`,
          tH = (zH = this.hovered, CH = SH, "slot" === zH.kind && "slot" === CH.kind ? zH.idx === CH.idx : "element" === zH.kind && "element" === CH.kind ? zH.element === CH.element : zH.kind === CH.kind);
        var zH, CH;
        if (tH && hH === this.signature) return;
        const EH = !tH || rH !== this.holding || "" === this.signature;
        this.signature = hH, this.holding = rH, this.lastPoint = AH;
        const XH = this.hovered;
        if (this.hovered = SH, "slot" === SH.kind) return this.leaveElement(XH, null, AH), void(EH ? HH.hover(SH.idx, AH) : HH.moveTo(AH));
        if (tH) return void("element" === SH.kind ? (0, wH.r)(SH.element, SH.element, jB(AH)) : HH.hover(null, AH));
        HH.hover(null, AH);
        const GH = "element" === SH.kind ? SH.element : null;
        "element" === XH.kind ? (0, wH.r)(XH.element, GH, jB(AH)) : GH && (0, wH.r)(null, GH, jB(AH))
      }
      invalidate() {
        this.signature = ""
      }
      clear(HH) {
        const BH = this.hovered;
        this.hovered = RB, this.signature = "", "none" !== BH.kind && (this.leaveElement(BH, null, this.lastPoint), HH && "slot" === BH.kind && HH.hover(null, this.lastPoint))
      }
      leaveElement(HH, BH, LH) {
        "element" === HH.kind && (0, wH.r)(HH.element, BH, jB(LH))
      }
    }
    class DB {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(HH, BH) {
        VH(HH) && (this.lastTiltedMs = BH)
      }
      allowsClick(HH) {
        return HH - this.lastTiltedMs > 150
      }
    }
    class wB {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(HH) {
        return 0 !== (0, uH.f)(HH, .2).y
      }
      step(HH, BH, LH) {
        HH !== this.container && (this.container = HH, this.remainder = 0);
        const AH = OH(BH, LH).y;
        if (0 === AH) return this.remainder = 0, !1;
        const rH = this.remainder + AH,
          SH = Math.trunc(rH);
        if (this.remainder = rH - SH, 0 === SH) return !1;
        const hH = HH.scrollTop;
        return HH.scrollTop = hH + SH, HH.scrollTop !== hH
      }
      current() {
        var HH;
        return null !== (HH = this.container) && void 0 !== HH && HH.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var ZB = LH(9385);
    const dB = "[data-pad-inventory-default]",
      aB = ".HotBarGameItemsContainer .InvenItem.Selected",
      sB = {
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
      JB = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      iB = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      pB = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      yB = [...iB, ...pB],
      HL = () => {
        return HH = (0, EH.k)("inventory"), !yB.map(EH.k).includes(HH) && !(0, uH.D)(HH);
        var HH
      },
      BL = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      LL = (HH, BH) => {
        const LH = !(null === BH || void 0 === BH || !BH.isHolding());
        return function(HH, BH) {
          const LH = HH.find((HH => HH.visible && BH(HH)));
          if (LH) return LH;
          for (var AH = arguments.length, rH = new Array(AH > 2 ? AH - 2 : 0), SH = 2; SH < AH; SH++) rH[SH - 2] = arguments[SH];
          for (const hH of rH) {
            const BH = vB(HH.filter(hH));
            if (BH) return BH
          }
          return vB(HH)
        }(HH, (HH => {
          const {
            element: BH
          } = HH;
          return BH.matches(dB) || null !== BH.querySelector(dB) || BH.matches(aB)
        }), (HH => "slot" === HH.kind ? LH || null !== HH.idx && !(null === BH || void 0 === BH || !BH.hasItemAt(HH.idx)) : "recipe" === HH.kind || "pending" === HH.kind), (HH => "slot" === HH.kind || "button" === HH.kind))
      };
    class AL {
      constructor() {
        this.set = null, this.observer = new MutationObserver((HH => {
          HH.some((HH => !eB(HH.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = HH => {
          this.scrolled(HH.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const HH = [],
              BH = [];
            let LH = !1;
            const AH = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              rH = new Map,
              SH = new yH(BH);
            for (const XH of document.querySelectorAll(TB)) {
              const EH = lB(XH);
              LH ||= null !== XH.querySelector(".CreativeCategoryTab");
              for (const LH of XH.querySelectorAll(`${UB}:first-child`)) {
                const hH = LH.parentElement;
                cB(hH, XH, KB(EH, hH), AH, HH, BH, SH, rH)
              }
              for (const LH of XH.querySelectorAll(VB)) {
                var hH, tH, zH, CH;
                if (LH.closest(UB) || LH.closest("[data-pad-ignore]")) continue;
                const GH = null === (hH = LH.parentElement) || void 0 === hH ? void 0 : hH.closest(VB);
                if (GH && XH.contains(GH)) continue;
                const YH = kB(LH),
                  uH = mB(LH, YH);
                if (-1 === uH) continue;
                const QH = AB(LH.getBoundingClientRect());
                BH.push({
                  element: LH,
                  rect: QH
                });
                const WH = SH.findForParent(LH.parentElement, XH),
                  MH = WH && !rH.has(WH.container) ? WH : null;
                (MH ? rB(QH) : SB(QH, AH)) && HH.push({
                  key: LB(LH),
                  rect: QH,
                  panel: KB(EH, LH),
                  scrollGroup: null !== (tH = null === MH || void 0 === MH ? void 0 : MH.group) && void 0 !== tH ? tH : null,
                  visible: hB(QH, AH, null === MH || void 0 === MH ? void 0 : MH.box),
                  clip: null !== (zH = null === MH || void 0 === MH ? void 0 : MH.box) && void 0 !== zH ? zH : null,
                  element: LH,
                  kind: YH,
                  idx: uH,
                  scrollContainer: null !== (CH = null === MH || void 0 === MH ? void 0 : MH.container) && void 0 !== CH ? CH : null
                })
              }
            }
            for (const [XH, GH] of rH) GH.holdsOthers = BH.some((HH => HH.element !== XH && XH.contains(HH.element) && !HH.element.closest(UB)));
            const EH = new Map;
            for (const XH of HH) EH.set(XH.element, XH);
            return {
              targets: HH,
              byElement: EH,
              hasCategories: LH,
              probes: BH,
              scrollers: rH
            }
          })(), this.observer.disconnect();
          for (const HH of document.querySelectorAll(TB)) this.observer.observe(HH, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(HH) {
        !this.set || HH instanceof Element && ((HH, BH) => {
          const LH = HH.scrollers.get(BH);
          if (!LH || LH.holdsOthers || BH.scrollLeft !== LH.left) return !1;
          const AH = BH.scrollTop - LH.top;
          if (0 === AH) return !0;
          LH.top = BH.scrollTop;
          for (const rH of LH.probes) rH.rect.top -= AH;
          for (const rH of LH.targets) rH.rect.top -= AH, rH.visible = hB(rH.rect, LH.viewport, LH.box);
          return !0
        })(this.set, HH) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((HH => {
          return BH = HH.rect, LH = HH.element.getBoundingClientRect(), !(BH.left === LH.left && BH.top === LH.top && BH.width === LH.width && BH.height === LH.height);
          var BH, LH
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const rL = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(uH.y.map((HH => [HH, (0, QH.d)(uH.C)]))), this.stickRepeat = new uH.b((0, QH.d)(uH.Y)), this.pageUpTimer = (0, QH.d)(uH.T), this.pageDownTimer = (0, QH.d)(uH.T), this.stickGate = new TH, this.pointer = null, this.activePress = null, this.dropLatch = new gB, this.scroller = new wB, this.scrollStickClick = new DB, this.hover = new FB, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new FH, this.targets = new AL, this.hasCategories = !1, this.wasShowing = !1, this.state = NB.e, this.isActive = () => (0, iH.h)(), this.isShowing = () => "inventory" === XH.b.getActiveConsumerName() && (0, YH.j)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, iH.f)()), (0, iH.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var HH;
            this.reopenSlotIdx = null !== (HH = this.focused ? fB(this.focused).idx : null) && void 0 !== HH ? HH : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, iH.q)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = HH => {
            (0, tH.unstable_batchedUpdates)((() => {
              this.frame(HH)
            }))
          }, this.shouldBlockRealPointer = HH => HH.isTrusted && !(0, MH.t)(HH) && this.isShowing(), this.noteRealPointer = HH => {
            HH instanceof MouseEvent && HH.isTrusted && !(0, MH.t)(HH) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = HH.clientX, this.lastRealPointer.y = HH.clientY)
          }, this.wakePressActs = HH => {
            var BH;
            return HH === (0, EH.k)("inventoryClose") ? !(null !== (BH = (0, iH.f)()) && void 0 !== BH && BH.isHolding()) : !(HH !== (0, EH.k)("inventory") || !HL()) || ((0, uH.D)(HH) ? this.isNavButton(HH) : pB.some((BH => (0, EH.k)(BH) === HH)))
          }
        }
        frame(HH) {
          var BH, LH, AH, rH, SH;
          const hH = (0, iH.f)();
          if (!(0, YH.j)()) return void(this.wasShowing && (this.endInteraction(hH), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), HH.wokeDevice && this.focusWakePointer(!(null === hH || void 0 === hH || !hH.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, GH.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const tH = performance.now();
          this.handleNavigation(HH, tH), this.handlePanels(HH), this.handlePaging(HH, tH), this.handleScroll(HH), this.handleButtons(HH, tH, hH), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const zH = this.ensureFocus(),
            CH = this.focusContext(hH);
          this.ring.show(zH);
          const XH = "slot" === CH.kind ? CH.idx : null,
            uH = null !== (BH = null === (LH = CH.actionElement) || void 0 === LH ? void 0 : LH.querySelector(".DoCraftItem")) && void 0 !== BH ? BH : CH.actionElement;
          this.pointer ? (this.hover.sync(hH, XH, uH, ((HH, BH) => {
            const LH = BH ? nB() : 0;
            return {
              clientX: HH.x - LH,
              clientY: HH.y - LH
            }
          })(this.pointer, CH.holding), CH.holding), dH.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: HH.isHeld((0, EH.k)("inventoryPrimary"))
          })) : zH && this.focused && this.hover.sync(hH, XH, uH, ((HH, BH) => {
            if (!BH) return {
              clientX: HH.left + HH.width - 10,
              clientY: HH.top + HH.height / 2 - 10
            };
            const LH = nB();
            return {
              clientX: HH.left + HH.width / 2 - LH,
              clientY: HH.top + HH.height / 2 - LH
            }
          })(zH, CH.holding), CH.holding), this.publishState({
            showing: !0,
            kind: CH.kind,
            holding: CH.holding,
            slotHasItem: CH.slotHasItem,
            pressHints: null !== (AH = null === (rH = CH.press) || void 0 === rH ? void 0 : rH.hints) && void 0 !== AH ? AH : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && qB(this.focusTarget),
            openButtonCloses: HL(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === CH.kind && !(null === (SH = CH.actionElement) || void 0 === SH || !SH.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(HH) {
          var BH;
          const LH = (0, YH.c)();
          if (!LH) return;
          this.targets.revalidate();
          const AH = this.getTargets().targets;
          this.setFocus(null !== (BH = xB(LH, AH)) && void 0 !== BH ? BH : HH ? QB(LH, AH, (HH => {
            let {
              rect: BH
            } = HH;
            const AH = Math.max(BH.left - LH.x, 0, LH.x - (BH.left + BH.width)),
              rH = Math.max(BH.top - LH.y, 0, LH.y - (BH.top + BH.height));
            return Math.hypot(AH, rH) <= Math.min(BH.width, BH.height) / 2
          })) : null, !1), "cursor" === (0, GH.g)().inventoryNavigation && (this.pointer = {
            x: LH.x,
            y: LH.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const HH = this.lastRealPointer;
          if (!HH || "keyboardMouse" !== zH.c.get("activeInputDevice")) return;
          const BH = document.elementFromPoint(HH.x, HH.y);
          BH && (0, wH.r)(null, BH, HH)
        }
        endInteraction(HH) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const BH of this.dpadTimers.values()) BH.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(HH), this.ring.hide(), this.releasePointer(), this.publishState(NB.e)
        }
        getTargets() {
          const HH = this.targets.get();
          return this.hasCategories = HH.hasCategories, HH
        }
        currentTarget() {
          var HH;
          return this.focused && null !== (HH = this.getTargets().byElement.get(this.focused)) && void 0 !== HH ? HH : null
        }
        readFocusRect() {
          const HH = this.focused;
          if (null === HH || void 0 === HH || !HH.isConnected || !HH.closest(TB)) return null;
          const BH = HH.getBoundingClientRect();
          return BH.width > 0 && BH.height > 0 ? {
            left: BH.left,
            top: BH.top,
            width: BH.width,
            height: BH.height
          } : null
        }
        ensureFocus() {
          const HH = this.readFocusRect();
          if (HH || this.pointer) return HH;
          const {
            targets: BH,
            byElement: LH
          } = this.getTargets();
          let AH = null,
            rH = !1;
          if (this.lastRect) AH = QB(tB(this.lastRect), BH);
          else {
            var SH, hH;
            const HH = ((HH, BH) => {
                const LH = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return LH ? LL(HH.filter((HH => LH.contains(HH.element))), BH) : null
              })(BH, (0, iH.f)()),
              tH = BH.find((HH => null !== HH.idx && HH.idx === this.reopenSlotIdx)),
              zH = document.querySelector(aB);
            rH = null !== HH || void 0 !== tH, AH = null !== (SH = null !== (hH = null !== HH && void 0 !== HH ? HH : tH) && void 0 !== hH ? hH : zH && LH.get(zH)) && void 0 !== SH ? SH : vB(BH)
          }
          return this.setFocus(AH, rH), this.lastRect
        }
        setFocus(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          HH && (this.focused = HH.element, this.focusTarget = HH, this.panelMemory.set(HH.panel, HH.element), BH && HH.scrollContainer && ((HH, BH) => {
            const LH = HH.getBoundingClientRect(),
              AH = cH(BH),
              rH = BH.scrollTop;
            return LH.top < AH.top ? BH.scrollTop -= AH.top - LH.top : LH.bottom > AH.bottom && (BH.scrollTop += LH.bottom - AH.bottom), BH.scrollTop !== rH
          })(HH.element, HH.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, GH.g)().inventoryNavigation) {
              if (this.lastRect) {
                const HH = tB(this.lastRect);
                this.pointer = {
                  x: HH.x,
                  y: HH.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const HH = this.lastRect ? tB(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: HH.x,
            y: HH.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, dH.hide()
        }
        hoverAtPointer() {
          var HH;
          const BH = xB(this.pointer, this.getTargets().targets);
          this.focusTarget = BH, (null === BH || void 0 === BH ? void 0 : BH.element) !== this.focused && (this.focused = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.element) && void 0 !== HH ? HH : null, BH && (this.panelMemory.set(BH.panel, BH.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(HH, BH) {
          const LH = this.focusTarget,
            AH = LH && (0, GH.g)().cursorMagnetism ? tB(WB(LH)) : null;
          this.pointer = UH(this.pointer, {
            stick: HH.leftStick,
            moveDeadzone: (0, GH.g)().moveDeadzone,
            dpad: BH,
            dtMs: HH.dtMs,
            cursorSpeedPercent: (0, GH.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: AH
            }
          })
        }
        move(HH) {
          this.targets.revalidate();
          const BH = this.currentTarget();
          BH && this.setFocus(uB(BH, this.getTargets().targets, HH))
        }
        step(HH) {
          const BH = this.pointer;
          if (BH && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((HH, BH, LH) => {
            var AH;
            const rH = {
              key: "",
              rect: {
                left: HH.x,
                top: HH.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (AH = uB(rH, BH, LH)) && void 0 !== AH ? AH : QB(HH, BH)
          })(BH, this.getTargets().targets, HH));
          this.move(HH)
        }
        isNavButton(HH) {
          return !iB.some((BH => (0, EH.k)(BH) === HH)) && !(HH === (0, EH.k)("inventory") && HL())
        }
        handleNavigation(HH, BH) {
          const LH = (0, GH.g)().inventoryNavigation,
            AH = {
              x: 0,
              y: 0
            };
          let rH = null;
          for (const zH of uH.y) {
            const SH = this.isNavButton(zH) && HH.isHeld(zH);
            SH && (AH.x += sB[zH].x, AH.y += sB[zH].y), this.dpadTimers.get(zH).update(SH, BH) && "cursor" !== LH && (rH ??= zH)
          }
          const SH = this.stickGate.update(HH.leftStick, (0, GH.g)().moveDeadzone);
          if (rH && (this.step(rH), this.stickGate.lock()), "slot" !== LH) {
            const BH = ((HH, BH, LH, AH) => "hybrid" !== HH ? "cursor" === HH : !AH && (BH || LH))(LH, null !== this.pointer, SH, null !== rH);
            return BH && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(HH, "cursor" === LH ? AH : {
              x: 0,
              y: 0
            }))
          }
          const hH = (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone),
            tH = this.stickRepeat.update(SH ? (0, uH.Z)(hH) : null, BH);
          tH && this.move(tH)
        }
        applyCategoryPlace() {
          const HH = this.placeAfterCategory;
          if (!HH) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const BH = QB(tB(HH.rect), this.getTargets().targets, (BH => BH.scrollGroup === HH.scrollGroup));
          this.setFocus(BH, !1)
        }
        applyFocusRequest() {
          const HH = (0, iH.q)();
          HH && (this.targets.invalidate(), this.setFocus((0, iH.e)(this.getTargets().targets, HH)))
        }
        handlePanels(HH) {
          var BH, LH, AH;
          const rH = HH.wasPressed((0, EH.k)("inventoryPanelPrevious")),
            SH = HH.wasPressed((0, EH.k)("inventoryPanelNext"));
          if (!rH && !SH) return;
          const {
            targets: hH
          } = this.getTargets(), tH = (zH = ((HH, BH) => {
            const LH = [];
            for (const rH of HH) rH.visible && !LH.includes(rH.panel) && LH.push(rH.panel);
            const AH = HH => {
              const AH = BH.indexOf(HH);
              return -1 === AH ? BH.length + LH.indexOf(HH) : AH
            };
            return LH.sort(((HH, BH) => AH(HH) - AH(BH)))
          })(hH, bB), CH = null !== (BH = null === (LH = this.focusTarget) || void 0 === LH ? void 0 : LH.panel) && void 0 !== BH ? BH : null, XH = SH ? 1 : -1, 0 === zH.length ? null : zH[zB(null === CH ? -1 : zH.indexOf(CH), zH.length, XH)]);
          var zH, CH, XH;
          if (null === tH) return;
          const GH = this.panelMemory.get(tH),
            YH = hH.filter((HH => HH.panel === tH)),
            uH = null !== (AH = YH.find((HH => HH.element === GH && HH.visible))) && void 0 !== AH ? AH : LL(YH, (0, iH.f)());
          this.setFocus(uH)
        }
        handlePaging(HH, BH) {
          const LH = (0, EH.k)("menuPageUp"),
            AH = (0, EH.k)("menuPageDown"),
            rH = this.pageUpTimer.update(HH.isHeld(LH), BH),
            SH = this.pageDownTimer.update(HH.isHeld(AH), BH);
          if (!rH && !SH) return;
          const hH = SH ? 1 : -1;
          if (!HH.wasPressed(SH ? AH : LH) && this.hasCategories) return;
          if ((HH => {
              const BH = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === BH.length) return !1;
              const LH = BH.findIndex((HH => HH.classList.contains("Selected"))),
                AH = BH[zB(LH, BH.length, HH)];
              return (0, wH.n)(AH, (0, wH.C)(AH)), !0
            })(hH)) {
            var tH, zH;
            this.targets.invalidate();
            const HH = null !== (tH = null === (zH = this.focusTarget) || void 0 === zH ? void 0 : zH.scrollGroup) && void 0 !== tH ? tH : null,
              BH = this.readFocusRect();
            return void(this.placeAfterCategory = null !== HH && BH && !this.pointer ? {
              rect: BH,
              scrollGroup: HH
            } : null)
          }
          const {
            targets: CH
          } = this.getTargets(), XH = this.currentTarget(), GH = XH && qB(XH) ? XH : CH.find((HH => qB(HH) && HH.visible));
          if (!GH) return;
          const YH = ((HH, BH, LH, AH) => {
            if (null === HH.scrollGroup) return null;
            const rH = tB(HH.rect),
              SH = rH.x,
              hH = rH.y + ("Down" === LH ? AH : -AH);
            let tH = null,
              zH = 1 / 0;
            for (const CH of BH) {
              if (CH.scrollGroup !== HH.scrollGroup || CH.key === HH.key) continue;
              const BH = tB(CH.rect);
              if ("Down" === LH ? BH.y <= rH.y : BH.y >= rH.y) continue;
              const AH = Math.hypot(BH.x - SH, BH.y - hH);
              AH < zH && (tH = CH, zH = AH)
            }
            return tH
          })(GH, CH, hH > 0 ? "Down" : "Up", GH.scrollContainer.clientHeight);
          this.setFocus(null !== YH && void 0 !== YH ? YH : GH)
        }
        handleScroll(HH) {
          var BH, LH, AH, rH, SH, hH;
          if (!this.scroller.isScrolling(HH.rightStick)) return void this.scroller.reset();
          const {
            targets: tH
          } = this.getTargets(), zH = this.pointer, CH = !zH && this.focusTarget && qB(this.focusTarget) ? this.focusTarget.scrollContainer : null, EH = zH && (null === (BH = tH.find((HH => HH.clip && MB(HH.clip, zH)))) || void 0 === BH ? void 0 : BH.scrollContainer), XH = null !== (LH = null !== (AH = null !== (rH = this.scroller.current()) && void 0 !== rH ? rH : EH) && void 0 !== AH ? AH : CH) && void 0 !== LH ? LH : null === (SH = tH.find(qB)) || void 0 === SH ? void 0 : SH.scrollContainer;
          if (!XH || !this.scroller.step(XH, HH.rightStick, HH.dtMs)) return;
          this.targets.scrolled(XH);
          const GH = zH || (null === (hH = this.focusTarget) || void 0 === hH ? void 0 : hH.scrollContainer) !== XH ? null : this.readFocusRect();
          if (!GH) return;
          const YH = cH(XH),
            uH = tB(GH);
          if (uH.y < YH.top || uH.y > YH.bottom) {
            const HH = this.focusTarget.scrollGroup,
              BH = QB(uH, this.getTargets().targets, (BH => BH.scrollGroup === HH));
            this.setFocus(BH, !1)
          }
        }
        focusContext(HH) {
          const {
            kind: BH,
            idx: LH
          } = this.focused ? fB(this.focused) : {
            kind: null,
            idx: null
          }, AH = this.focused ? oB(this.focused) : null, rH = AH ? (0, ZB.e)(AH) : null;
          return {
            kind: BH,
            idx: LH,
            actionElement: AH,
            press: rH,
            hasPress: null !== rH,
            hasBack: !(null === rH || void 0 === rH || !rH.back),
            holding: HH.isHolding(),
            slotHasItem: null !== LH && HH.hasItemAt(LH)
          }
        }
        handleButtons(HH, BH, LH) {
          var AH, rH;
          if (!this.activePress || HH.isHeld(this.activePress.button) && (AH = this.activePress.target, rH = this.focused, null !== AH.recipe ? IB(rH).recipe === AH.recipe : rH === AH.element) || this.releasePress(), this.scrollStickClick.update(HH.rightStick, BH), !this.handleHotbarPick(HH, LH)) {
            for (const [AH, rH] of JB) {
              const SH = (0, EH.k)(rH);
              if (!HH.wasPressed(SH) || "openButton" === AH && !HL()) continue;
              if ("RS" === SH && !this.scrollStickClick.allowsClick(BH)) continue;
              const hH = this.focusContext(LH),
                tH = sH(AH, hH);
              tH && this.runIntent(tH, hH, SH, LH)
            }
            this.handleDrop(HH, BH, LH)
          }
        }
        handleHotbarPick(HH, BH) {
          const LH = this.hotbarPick;
          if (!LH) return !1;
          const AH = HH.wasPressed((0, EH.k)("inventoryPrimary")) || HH.wasPressed((0, EH.k)("inventoryHotbarSwap"));
          if (!AH && !HH.wasPressed((0, EH.k)("inventoryClose")) && !BH.isHolding()) return !(HH.wasPressed((0, EH.k)("inventory")) && HL());
          const rH = this.focusTarget;
          AH && "hotbar" === (null === rH || void 0 === rH ? void 0 : rH.panel) && null !== rH.idx && rH.idx !== LH.idx && (BH.swapWithHotbar(rH.idx, LH.idx), this.afterAction()), this.hotbarPick = null;
          const SH = LH.element.isConnected ? this.getTargets().byElement.get(LH.element) : void 0;
          return SH && this.setFocus(SH), !0
        }
        startHotbarPick(HH) {
          var BH;
          const {
            targets: LH,
            byElement: AH
          } = this.getTargets(), rH = document.querySelector(aB), SH = null !== (BH = rH && AH.get(rH)) && void 0 !== BH ? BH : LH.find((HH => "hotbar" === HH.panel));
          SH && this.focused && (this.hotbarPick = {
            idx: HH,
            element: this.focused
          }, this.setFocus(SH))
        }
        focusKey() {
          return this.focused ? LB(this.focused) : null
        }
        handleDrop(HH, BH, LH) {
          const AH = (0, EH.k)("inventoryDrop");
          if (HH.wasPressed(AH)) {
            const HH = (rH = this.focusContext(LH)).holding ? {
              kind: "LX"
            } : "slot" === rH.kind && rH.slotHasItem && null !== rH.idx ? {
              kind: "slot",
              idx: rH.idx
            } : null;
            return void(HH && (this.dropFrom(HH, !1, LH), this.dropLatch.press(HH, this.focusKey(), BH, WH.c[(0, GH.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var rH;
          const SH = this.dropLatch.update(HH.isHeld(AH), this.focusKey(), BH);
          SH && ((HH, BH, LH) => "LX" === HH.kind ? BH : !BH && LH(HH.idx))(SH, LH.isHolding(), LH.hasItemAt) && (this.dropFrom(SH, !0, LH), this.afterAction())
        }
        dropFrom(HH, BH, LH) {
          "LX" === HH.kind ? LH.dropHeld(BH, this.slotPoint()) : LH.dropSlot(HH.idx, BH)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (HH => {
            const BH = tB(HH);
            return {
              clientX: BH.x,
              clientY: BH.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(HH, BH, LH, AH) {
          const rH = BH.idx,
            SH = BH.actionElement;
          switch (SH && BL.has(HH) && (0, MH.y)(SH), HH) {
            case "slotPrimary":
              AH.primary(rH, this.slotPoint());
              break;
            case "slotSecondary":
              AH.secondary(rH, this.slotPoint());
              break;
            case "slotQuickMove":
              AH.quickMove(rH, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(rH);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(BH.press, "pressPrimary" === HH ? "primary" : "secondary", LH);
              break;
            case "click":
              (0, wH.n)(SH, (0, wH.C)(SH));
              break;
            case "openKeyboard":
              (0, wH.S)(SH) && (0, wH.O)(SH);
              break;
            case "pressBack":
              BH.press.back();
              break;
            case "cancel":
              AH.cancel();
              break;
            case "close":
              return this.releasePress(), void AH.close()
          }
          this.afterAction()
        }
        startPress(HH, BH, LH) {
          this.releasePress(), HH.press(BH) && (this.activePress = {
            handlers: HH,
            button: LH,
            target: IB(this.focused)
          })
        }
        releasePress() {
          var HH, BH, LH;
          null === (HH = this.activePress) || void 0 === HH || null === (BH = (LH = HH.handlers).release) || void 0 === BH || BH.call(LH), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(HH) {
          ((HH, BH) => {
            var LH, AH, rH, SH, hH, tH;
            return HH.showing === BH.showing && HH.kind === BH.kind && HH.holding === BH.holding && HH.slotHasItem === BH.slotHasItem && (null === (LH = HH.pressHints) || void 0 === LH ? void 0 : LH.primary) === (null === (AH = BH.pressHints) || void 0 === AH ? void 0 : AH.primary) && (null === (rH = HH.pressHints) || void 0 === rH ? void 0 : rH.secondary) === (null === (SH = BH.pressHints) || void 0 === SH ? void 0 : SH.secondary) && (null === (hH = HH.pressHints) || void 0 === hH ? void 0 : hH.back) === (null === (tH = BH.pressHints) || void 0 === tH ? void 0 : tH.back) && HH.hasCategories === BH.hasCategories && HH.hasList === BH.hasList && HH.openButtonCloses === BH.openButtonCloses && HH.steppingSlots === BH.steppingSlots && HH.hotbarPicking === BH.hotbarPicking && HH.quickMoveToHotbar === BH.quickMoveToHotbar && HH.dropStackHold === BH.dropStackHold
          })(HH, this.state) || (this.state = HH, CH.k.AX(NB.g, HH))
        }
      },
      SL = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var hL = LH(9390),
      tL = LH(304),
      zL = LH(1659),
      CL = LH(8875);
    const EL = "[data-pad-secondary]",
      XL = HH => HH instanceof HTMLElement && (0, pH.u)(HH) && !(0, pH.x)(HH),
      GL = HH => {
        const BH = HH.querySelector(EL);
        if (BH && XL(BH)) return BH;
        for (const rH of null !== (LH = null === (AH = HH.parentElement) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : []) {
          var LH, AH;
          if (rH !== HH && rH.matches(EL) && XL(rH)) return rH
        }
        return null
      },
      YL = (HH, BH, LH, AH) => Math.max(0, Math.max(HH, LH) - Math.min(BH, AH)),
      uL = (HH, BH, LH, AH) => Math.max(0, Math.min(BH, AH) - Math.max(HH, LH)),
      QL = (HH, BH, LH) => {
        const AH = (HH.left + HH.right) / 2,
          rH = (HH.top + HH.bottom) / 2,
          SH = (BH.left + BH.right) / 2,
          hH = (BH.top + BH.bottom) / 2;
        if ("Left" === LH || "Right" === LH) {
          const tH = "Right" === LH ? 1 : -1;
          return {
            forwardGap: "Right" === LH ? BH.left - HH.right : HH.left - BH.right,
            centreForward: (SH - AH) * tH,
            sidewaysGap: YL(HH.top, HH.bottom, BH.top, BH.bottom),
            sidewaysOverlap: uL(HH.top, HH.bottom, BH.top, BH.bottom),
            centreSideways: Math.abs(hH - rH),
            startSideways: Math.abs(BH.top - HH.top),
            fromSidewaysSize: HH.bottom - HH.top,
            toSidewaysSize: BH.bottom - BH.top,
            toLength: BH.right - BH.left
          }
        }
        const tH = "Down" === LH ? 1 : -1;
        return {
          forwardGap: "Down" === LH ? BH.top - HH.bottom : HH.top - BH.bottom,
          centreForward: (hH - rH) * tH,
          sidewaysGap: YL(HH.left, HH.right, BH.left, BH.right),
          sidewaysOverlap: uL(HH.left, HH.right, BH.left, BH.right),
          centreSideways: Math.abs(SH - AH),
          startSideways: Math.abs(BH.left - HH.left),
          fromSidewaysSize: HH.right - HH.left,
          toSidewaysSize: BH.right - BH.left,
          toLength: BH.bottom - BH.top
        }
      },
      WL = HH => HH.centreForward > .5 && HH.forwardGap >= -HH.toLength / 2,
      ML = HH => {
        const BH = HH.sidewaysOverlap > 0 ? 0 : 2 * HH.fromSidewaysSize,
          LH = HH.fromSidewaysSize > 1.5 * HH.toSidewaysSize ? HH.startSideways : HH.centreSideways;
        return Math.max(0, HH.forwardGap) + 3 * HH.sidewaysGap + BH + .1 * LH
      },
      xL = (HH, BH) => uL(HH.top, HH.bottom, BH.top, BH.bottom) > 0 || BH.bottom - BH.top > BH.right - BH.left,
      vL = (HH, BH, LH, AH, rH, SH) => {
        const hH = rH ? TL(HH, BH, LH, rH) : new Set,
          tH = VL(HH, BH, LH, hH);
        return tH < 0 && hH.size > 0 && SH ? PL(HH, BH, LH, SH) : AH && tH >= 0 ? UL(HH, BH, LH, AH, tH, hH) : tH
      },
      PL = (HH, BH, LH, AH) => {
        const rH = new Set,
          SH = VL(HH, BH, "Up", rH) >= 0,
          hH = VL(HH, BH, "Down", rH) >= 0,
          tH = new Set;
        return BH.forEach(((BH, LH) => {
          const rH = BH.top + BH.bottom < HH.top + HH.bottom;
          AH[LH] && !(rH ? SH : hH) || tH.add(LH)
        })), VL(HH, BH, LH, tH)
      },
      TL = (HH, BH, LH, AH) => {
        const rH = new Set;
        return "Left" !== LH && "Right" !== LH || BH.forEach(((BH, LH) => {
          AH[LH] && uL(HH.top, HH.bottom, BH.top, BH.bottom) <= 0 && rH.add(LH)
        })), rH
      },
      UL = (HH, BH, LH, AH, rH, SH) => {
        const hH = QL(HH, BH[rH], LH).forwardGap;
        let tH = rH,
          zH = AH[rH],
          CH = 1 / 0;
        return BH.forEach(((BH, EH) => {
          const XH = AH[EH];
          if (SH.has(EH) || XH < zH || XH === zH && tH === rH) return;
          const GH = QL(HH, BH, LH);
          if (!WL(GH) || GH.forwardGap < 0 || GH.forwardGap >= hH) return;
          const YH = ML(GH);
          (XH > zH || YH < CH) && (tH = EH, zH = XH, CH = YH)
        })), tH
      },
      VL = (HH, BH, LH, AH) => {
        let rH = -1,
          SH = 1 / 0;
        if (BH.forEach(((BH, hH) => {
            const tH = ((HH, BH, LH) => {
              const AH = QL(HH, BH, LH);
              if (!WL(AH)) return null;
              const rH = Math.max(0, AH.forwardGap);
              return AH.sidewaysOverlap <= 0 && AH.sidewaysGap > 2 * (rH + 1) ? null : ML(AH)
            })(HH, BH, LH);
            null !== tH && tH < SH && !AH.has(hH) && (SH = tH, rH = hH)
          })), rH < 0) return -1;
        const hH = BH[rH],
          tH = QL(HH, hH, LH).forwardGap;
        let zH = tH,
          CH = rH;
        return BH.forEach(((BH, SH) => {
          if (SH === rH || AH.has(SH) || !((HH, BH, LH) => {
              const AH = "Left" === LH || "Right" === LH,
                rH = AH ? uL(HH.top, HH.bottom, BH.top, BH.bottom) : uL(HH.left, HH.right, BH.left, BH.right),
                SH = AH ? Math.min(HH.bottom - HH.top, BH.bottom - BH.top) : Math.min(HH.right - HH.left, BH.right - BH.left);
              return rH > 0 && rH >= SH / 2
            })(BH, hH, LH)) return;
          const EH = QL(HH, BH, LH);
          WL(EH) && EH.forwardGap + EH.toLength <= tH + 1 && EH.forwardGap < zH && (zH = EH.forwardGap, CH = SH)
        })), CH
      },
      OL = (HH, BH) => {
        let LH = -1,
          AH = 1 / 0;
        return BH.forEach(((BH, rH) => {
          const SH = Math.max(BH.left - HH.x, 0, HH.x - BH.right),
            hH = Math.max(BH.top - HH.y, 0, HH.y - BH.bottom),
            tH = Math.hypot(SH, hH);
          tH < AH && (AH = tH, LH = rH)
        })), LH
      },
      bL = (HH, BH) => {
        const LH = Math.min(HH.bottom - HH.top, BH.bottom - BH.top) / 2;
        return Math.abs(HH.top - BH.top) > LH ? HH.top - BH.top : HH.left - BH.left
      },
      kL = HH => {
        let BH = -1;
        for (let LH = 0; LH < HH.length; LH++)(BH < 0 || bL(HH[LH], HH[BH]) < 0) && (BH = LH);
        return BH
      };
    var mL = LH(1711),
      oL = LH(9399),
      IL = LH(9407);
    const fL = HH => {
        if ("death" !== HH || "inGame" !== zH.c.get("gameState") || "off" === (0, GH.g)().quickChat || null === (0, mL.e)()) return !1;
        const BH = (0, EH.k)("chat");
        return BH !== (0, EH.k)("menuConfirm") && BH !== (0, EH.k)("menuBack")
      },
      lL = new oL.b;
    var KL = LH(4685),
      cL = LH(9412),
      eL = LH(9419);
    const qL = HH => {
        let BH = null;
        for (const LH of HH.querySelectorAll("[data-pad-tabs]"))(0, pH.u)(LH) && (!BH || Number(LH.dataset.padTabs) < Number(BH.dataset.padTabs)) && (BH = LH);
        return BH
      },
      gL = (HH, BH, LH, AH) => {
        HH.focusWhenFound((() => {
          const rH = HH.pickInitial(BH);
          if (rH && !LH.has(rH) && (null === AH || void 0 === AH || !AH.contains(rH))) return rH;
          const SH = ((HH, BH) => {
              const LH = BH => HH.getEnabledCandidates(BH).filter((HH => !HH.closest("[data-pad-tabs]")));
              for (const AH of (0, pH.l)(BH)) {
                const HH = LH(AH);
                if (HH.length > 0) return HH
              }
              return LH(BH)
            })(HH, BH).filter((HH => !LH.has(HH))),
            hH = kL(SH.map((HH => HH.getBoundingClientRect())));
          return hH >= 0 ? SH[hH] : null
        }), 3e3)
      },
      NL = (HH, BH, LH, AH) => {
        var rH;
        const SH = ((HH, BH) => {
          if (0 === HH.length) return null;
          const LH = HH.findIndex((HH => "true" === HH.dataset.padSelected));
          return LH < 0 ? BH > 0 ? HH[0] : HH[HH.length - 1] : HH[(LH + BH + HH.length) % HH.length]
        })([...LH.querySelectorAll("[data-pad-tab]")].filter((HH => (0, pH.u)(HH) && !(0, pH.x)(HH))), AH);
        if (!SH) return;
        const hH = null !== (rH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== rH ? rH : null,
          tH = !(null === hH || void 0 === hH || !hH.isConnected) && LH.contains(hH),
          zH = HH && !tH ? new Set(HH.getEnabledCandidates(BH)) : null;
        (0, wH.c)(SH), HH && (zH ? gL(HH, BH, zH, LH) : HH.setFocus(SH, {
          byUser: !0
        }))
      },
      RL = HH => {
        var BH;
        const LH = cH(null !== (BH = mH(HH, "x")) && void 0 !== BH ? BH : HH),
          AH = (0, pH.h)(HH).filter((HH => !(0, pH.x)(HH))),
          rH = AH.filter((HH => eH(HH.getBoundingClientRect(), LH)));
        return (rH.length > 0 ? rH : AH).sort(((HH, BH) => bL(HH.getBoundingClientRect(), BH.getBoundingClientRect())))
      },
      jL = (HH, BH, LH) => {
        const AH = [...BH.querySelectorAll("[data-pad-row]")].filter(pH.u),
          rH = HH.getFocused(),
          SH = rH ? AH.findIndex((HH => HH.contains(rH))) : -1;
        let hH = 0,
          tH = LH > 0 ? 0 : AH.length - 1;
        if (SH >= 0 && rH) hH = Math.max(0, RL(AH[SH]).indexOf(rH)), tH = SH + LH;
        else if (rH) {
          const HH = rH.getBoundingClientRect(),
            BH = AH.map((BH => {
              const AH = BH.getBoundingClientRect();
              return LH > 0 ? AH.top >= HH.top : AH.bottom <= HH.bottom
            }));
          tH = LH > 0 ? BH.indexOf(!0) : BH.lastIndexOf(!0)
        }
        for (let zH = tH; zH >= 0 && zH < AH.length; zH += LH) {
          const BH = RL(AH[zH]);
          if (BH.length > 0) return void HH.setFocus(BH[Math.min(hH, BH.length - 1)], {
            byUser: !0
          })
        }
      },
      nL = (HH, BH, LH) => {
        var AH, rH;
        const SH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.getFocused()) && void 0 !== AH ? AH : null,
          hH = null !== SH && void 0 !== SH && SH.closest("[data-pad-row]") ? "x" : "y",
          tH = null !== (rH = SH ? mH(SH, hH, BH) : null) && void 0 !== rH ? rH : IH(BH, hH);
        if (!tH) return;
        const zH = SH ? (0, wH.C)(SH) : null;
        if (KH(tH, hH, LH * ("y" === hH ? tH.clientHeight : tH.clientWidth) * .85), !HH || !zH) return;
        const CH = cH(tH),
          EH = HH.getEnabledCandidates(BH).filter((HH => tH.contains(HH) && eH(HH.getBoundingClientRect(), CH))),
          XH = OL(zH, EH.map((HH => HH.getBoundingClientRect())));
        XH >= 0 && HH.setFocus(EH[XH], {
          scroll: !1,
          byUser: !0
        })
      };
    let FL = null;
    const DL = (HH, BH) => {
        var LH, AH;
        const rH = BH.querySelector("[data-pad-friends-column]"),
          SH = HH.getFocused();
        if (!rH || !SH || !rH.contains(SH)) return !1;
        const hH = HH.getEnabledCandidates(BH).filter((HH => !rH.contains(HH))),
          tH = OL((0, wH.C)(SH), hH.map((HH => HH.getBoundingClientRect()))),
          zH = null === (LH = FL) || void 0 === LH ? void 0 : LH.deref();
        return HH.setFocus(null !== zH && void 0 !== zH && zH.isConnected ? zH : null !== (AH = hH[tH]) && void 0 !== AH ? AH : null, {
          byUser: !0
        }), !0
      },
      wL = HH => {
        const BH = (0, EH.k)(HH);
        return (0, uH.D)(BH) || CL.u.some((HH => (0, EH.k)(HH) === BH)) ? null : BH
      },
      ZL = (HH, BH) => {
        const LH = wL(BH);
        return null !== LH && HH.wasPressed(LH)
      },
      dL = function(HH, BH, LH) {
        let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const rH = (HH => {
            var BH, LH;
            return null !== (BH = null === (LH = qL(HH)) || void 0 === LH ? void 0 : LH.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== BH ? BH : null
          })(BH),
          SH = HH && rH ? new Set(HH.getEnabledCandidates(BH)) : null;
        (0, hL.c)(), LH === tL.o.SETTINGS && (0, zL.n)(zH.c.get("openEverythingMenuName")) ? zH.c.set({
          openEverythingMenuName: LH
        }) : (0, zL.B)((0, eL.c)("padMenuShortcut"), LH, AH), HH && SH && rH && gL(HH, BH, SH, rH.closest("[data-pad-tabs]"))
      },
      aL = HH => null !== HH.closest(".Dropdown-root") || null !== HH.querySelector(".Dropdown-root.is-open"),
      sL = HH => null !== (0, cL.c)() && "popup" !== HH.layer.kind && !qL(HH.root) && !aL(HH.root),
      JL = (0, QH.d)(uH.T),
      iL = (0, QH.d)(uH.T),
      pL = (HH, BH, LH) => {
        if (((HH, BH) => {
            const LH = (0, EH.k)("chat");
            return fL(BH) && HH.isHeld(LH) ? "hold" === lL.update(HH.wasPressed(LH), HH.isHeld(LH), performance.now(), WH.c[(0, GH.g)().tapHoldTime].wheelMs) && (XH.b.consumeButton(LH), CH.k.AX(IL.p), !0) : (lL.release(), !1)
          })(BH, LH.layer.kind)) return !0;
        const AH = LH.root;
        for (const [hH, tH] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (BH.wasPressed((0, EH.k)(hH))) {
            const BH = aL(AH) ? null : qL(AH);
            if (BH) NL(HH, AH, BH, tH);
            else if (sL(LH)) {
              var rH;
              const BH = HH ? new Set(HH.getEnabledCandidates(AH)) : null;
              null !== (rH = (0, cL.c)()) && void 0 !== rH && rH(tH) && HH && BH && gL(HH, AH, BH, null)
            } else HH && jL(HH, AH, tH);
            return !0
          } for (const [hH, tH, zH] of [
            ["menuPageUp", -1, JL],
            ["menuPageDown", 1, iL]
          ]) {
          const LH = (0, EH.k)(hH);
          if (BH.wasPressed(LH) && zH.reset(), zH.update(BH.isHeld(LH), performance.now())) return nL(HH, AH, tH), !0
        }
        const SH = "popup" === LH.layer.kind;
        return ZL(BH, "pause") ? (SH || (0, zL.x)() && "menu" !== LH.layer.kind || dL(HH, AH, (0, zL.x)() ? tL.o.SETTINGS : (0, KL.e)()), !0) : !!ZL(BH, "leaderboard") && ("home" === LH.layer.kind ? (HH => {
          const BH = [...HH.querySelectorAll("[data-pad-notifications]")].find(pH.u);
          BH && (0, wH.c)(BH)
        })(AH) : SH || dL(HH, AH, tL.o.LOBBY_LEADERBOARD, "inGame" === zH.c.get("gameState")), !0)
      },
      yL = (HH, BH, LH) => {
        if (pL(HH, BH, LH)) return !0;
        const AH = "home" === LH.layer.kind;
        if (BH.wasPressed((0, EH.k)("menuSecondary"))) {
          const BH = HH.getFocused(),
            rH = BH ? GL(BH) : null;
          if (rH) return (0, wH.c)(rH), !0;
          if (AH) {
            const BH = LH.root.querySelector("[data-pad-search] input");
            return BH && (0, pH.w)(BH, LH.root) ? (HH.setFocus(BH, {
              byUser: !0
            }), (0, wH.c)(BH)) : zH.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!AH || !ZL(BH, "inventory")) && (((HH, BH) => {
          var LH, AH;
          const rH = BH.querySelector("[data-pad-friends-column]");
          if (!rH || !(0, pH.u)(rH)) return void(0, zL.B)((0, eL.c)("padMenuShortcut"), tL.o.SOCIAL);
          if (DL(HH, BH)) return;
          const SH = null !== (LH = null === (AH = rH.querySelector("[data-pad-friends-start]")) || void 0 === AH ? void 0 : AH.getBoundingClientRect().top) && void 0 !== LH ? LH : -1 / 0,
            hH = HH.getEnabledCandidates(rH),
            tH = hH.filter((HH => HH.getBoundingClientRect().top >= SH)),
            zH = tH.length > 0 ? tH : hH,
            CH = kL(zH.map((HH => HH.getBoundingClientRect())));
          HH.setFocus(CH >= 0 ? zH[CH] : null, {
            byUser: !0
          })
        })(HH, LH.root), !0)
      },
      HA = HH => {
        var BH, LH, AH;
        const rH = (0, wH.G)(HH);
        if (null !== rH) return rH;
        const SH = (null !== (BH = null !== (LH = null !== (AH = HH.getAttribute("aria-label")) && void 0 !== AH ? AH : HH.getAttribute("title")) && void 0 !== LH ? LH : HH.textContent) && void 0 !== BH ? BH : "").replace(/\s+/g, " ").trim();
        return SH ? `${HH.tagName}:${SH.slice(0,100)}` : null
      };
    class BA {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(HH) {
        const BH = this.history.indexOf(HH);
        if (BH >= 0) {
          for (const HH of this.history.splice(BH + 1)) this.remembered.delete(HH);
          return !0
        }
        return this.remembered.delete(HH), this.history.push(HH), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(HH) {
        this.remembered.delete(HH);
        const BH = this.history.indexOf(HH);
        BH >= 0 && this.history.splice(BH, 1)
      }
      remember(HH, BH, LH, AH) {
        const rH = HA(BH),
          SH = (0, wH.G)(BH),
          hH = null !== SH && ((HH, BH) => {
            let LH = 0;
            for (const AH of HH.querySelectorAll("[data-pad-key], [href]"))
              if ((AH.getAttribute("data-pad-key") === BH || AH.getAttribute("href") === BH) && (LH++, LH > 1)) return !0;
            return !1
          })(LH, SH) ? Math.max(0, this.twins(AH(), SH).indexOf(BH)) : 0;
        this.remembered.set(HH, {
          element: new WeakRef(BH),
          identity: rH,
          ordinal: hH
        })
      }
      has(HH) {
        return this.remembered.has(HH)
      }
      recall(HH, BH) {
        var LH, AH;
        const rH = this.remembered.get(HH);
        if (!rH) return null;
        const SH = rH.element.deref();
        if (SH && BH.includes(SH)) return SH;
        if (null === rH.identity) return null;
        const hH = this.twins(BH, rH.identity);
        return null !== (LH = null !== (AH = hH[rH.ordinal]) && void 0 !== AH ? AH : hH[0]) && void 0 !== LH ? LH : null
      }
      twins(HH, BH) {
        return HH.filter((HH => HA(HH) === BH))
      }
    }
    var LA = LH(1214);
    const AA = HH => {
        const BH = [];
        let LH = HH;
        for (; LH && LH !== document.body;) {
          const HH = getComputedStyle(LH).zIndex;
          "auto" !== HH && BH.push(Number(HH) || 0), LH = LH.parentElement
        }
        return BH.reverse()
      },
      rA = (HH, BH) => {
        const LH = ((HH, BH) => {
          const LH = Math.max(HH.length, BH.length);
          for (let SH = 0; SH < LH; SH++) {
            var AH, rH;
            const LH = (null !== (AH = HH[SH]) && void 0 !== AH ? AH : 0) - (null !== (rH = BH[SH]) && void 0 !== rH ? rH : 0);
            if (0 !== LH) return LH
          }
          return 0
        })(AA(HH), AA(BH));
        if (0 !== LH) return LH > 0;
        if (HH.contains(BH)) return !1;
        if (BH.contains(HH)) return !0;
        const AH = HH.compareDocumentPosition(BH);
        return !!(AH & Node.DOCUMENT_POSITION_PRECEDING) || !(AH & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      SA = (HH, BH) => {
        var LH;
        return null !== (LH = rA(HH.root, BH.root)) && void 0 !== LH ? LH : HH.order > BH.order
      },
      hA = (HH, BH) => BH.some((BH => !BH.contains(HH) && !HH.contains(BH) && !0 === rA(BH, HH)));
    let tA = null,
      zA = null,
      CA = -1;
    const EA = () => {
        var HH;
        const BH = null === (HH = document.timeline) || void 0 === HH ? void 0 : HH.currentTime,
          LH = "number" === typeof BH ? BH : null;
        if (null !== LH && LH === zA && CA === (0, LA.b)()) return tA;
        let AH = null;
        const rH = [],
          SH = [...document.querySelectorAll("[data-pad-covers]")].filter(pH.u);
        for (const hH of (0, LA.f)()) {
          const HH = hH.getRoot(),
            BH = !!HH && (0, pH.u)(HH) && !hA(HH, SH);
          if (hH.shown && !BH && rH.push(hH), hH.shown = BH, !HH || !BH) continue;
          const LH = {
            layer: hH,
            root: HH,
            order: hH.order
          };
          AH && !SA(LH, AH) || (AH = LH)
        }
        tA = AH, zA = LH, CA = (0, LA.b)();
        for (const hH of rH)(0, LA.h)(hH);
        return tA
      },
      XA = () => {
        const HH = EA();
        return !(null === HH || void 0 === HH || !HH.layer.close) && (HH.layer.close(), zA = null, !0)
      },
      GA = () => {
        var HH, BH;
        return null !== (HH = null === (BH = EA()) || void 0 === BH ? void 0 : BH.root) && void 0 !== HH ? HH : null
      },
      YA = HH => HH ? {
        ...HH,
        root: GA()
      } : null;
    let uA = null,
      QA = null,
      WA = (0, GH.g)().menuNavigation,
      MA = null;
    const xA = new TH;
    let vA = null;
    CH.k.subscribe(GH.e, (() => {
      const HH = (0, GH.g)().menuNavigation;
      HH !== WA && (WA = HH, uA = null, QA = null)
    }));
    const PA = () => {
        var HH;
        return null !== (HH = uA) && void 0 !== HH ? HH : (0, GH.g)().menuNavigation
      },
      TA = HH => {
        if (bA()) {
          if (MA = YA(HH), "hybrid" === PA()) return xA.lock(), void(QA = QA ? null : GA());
          uA = "focus" === PA() ? "cursor" : "focus"
        }
      },
      UA = () => {
        const HH = MA;
        return MA = null, HH
      };
    let VA = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const OA = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const LH = VA.root === HH,
          AH = LH ? VA.firstSeenMs : BH,
          rH = VA.has || BH - AH > 1e3;
        return (!LH || !rH || BH - VA.atMs > 250) && (VA = {
          root: HH,
          firstSeenMs: AH,
          atMs: BH,
          has: (0, pH.p)(HH)
        }), VA.has
      },
      bA = () => {
        const HH = GA();
        return null !== HH && OA(HH)
      },
      kA = () => {
        const HH = EA();
        return QA && (null === HH || void 0 === HH ? void 0 : HH.root) !== QA && (QA = null), (HH => {
          let {
            mode: BH,
            hasLayer: LH,
            hasCandidates: AH,
            hybridCursorEngaged: rH
          } = HH;
          return LH ? "cursor" !== BH && AH() ? "hybrid" === BH && rH ? "cursor" : "focus" : "cursor" : null
        })({
          mode: PA(),
          hasLayer: null !== HH,
          hasCandidates: () => null !== HH && OA(HH.root),
          hybridCursorEngaged: null !== QA
        })
      },
      mA = () => "hybrid" === PA() && bA(),
      oA = "pad-focused";
    var IA = LH(4954),
      fA = LH(5513);
    const lA = "[data-pad-destructive]",
      KA = `${lA}, [data-pad-back]`,
      cA = HH => ({
        rect: HH.getBoundingClientRect(),
        destructive: HH.matches(lA),
        closes: null !== HH.closest("[data-pad-close-button]"),
        unavailable: HH.matches("[data-pad-unavailable]")
      }),
      eA = HH => {
        let {
          destructive: BH,
          closes: LH,
          unavailable: AH
        } = HH;
        return BH ? LH ? 2 : 3 : AH ? 1 : 0
      },
      qA = HH => {
        let BH = -1;
        for (let LH = 0; LH < HH.length; LH++) {
          if (BH < 0) {
            BH = LH;
            continue
          }
          const AH = HH[LH],
            rH = HH[BH];
          eA(AH) === eA(rH) ? bL(AH.rect, rH.rect) < 0 && (BH = LH) : eA(AH) < eA(rH) && (BH = LH)
        }
        return BH
      },
      gA = "[data-pad-tabs]",
      NA = "[data-pad-tab]",
      RA = (HH, BH) => {
        const LH = HH.querySelector(`${NA}[data-pad-selected='true']`);
        return LH && BH.includes(LH) ? LH : null
      },
      jA = (HH, BH) => {
        let LH = BH;
        for (let AH = BH.parentElement; AH && !AH.contains(HH); AH = AH.parentElement) LH = AH;
        return LH
      };
    class nA {
      constructor() {
        this.contentReturn = null
      }
      redirect(HH, BH, LH, AH) {
        var rH, SH;
        const hH = HH.closest(gA),
          tH = BH.closest(gA);
        var zH;
        if (tH && tH !== hH) return hH || (this.contentReturn = new WeakRef(HH)), null !== (zH = RA(tH, LH)) && void 0 !== zH ? zH : BH;
        if (!hH || tH) return BH;
        const CH = jA(HH, BH),
          EH = null === (rH = this.contentReturn) || void 0 === rH ? void 0 : rH.deref();
        return EH && CH.contains(EH) && LH.includes(EH) ? EH : null !== (SH = this.pickRegionStart(CH, mH(BH, "y", AH), LH)) && void 0 !== SH ? SH : BH
      }
      findTabContent(HH, BH, LH) {
        const AH = HH.closest(gA);
        if (!AH || !HH.matches(NA) || AH.contains(BH)) return null;
        const rH = BH.closest(gA);
        if (rH && Number(rH.dataset.padTabs) <= Number(AH.dataset.padTabs)) return null;
        const SH = jA(HH, BH);
        return LH.some((HH => SH.contains(HH) && !HH.closest(KA))) || !BH.closest(KA) ? SH : null
      }
      pickContentStart(HH, BH, LH) {
        return this.contentReturn = null, this.pickRegionStart(HH, mH(HH, "y", LH), BH)
      }
      pickReplacedContentStart(HH, BH, LH, AH) {
        if (!BH.contains(HH)) return null;
        const rH = jA(BH, HH),
          SH = LH.filter((HH => BH.contains(HH) && !rH.contains(HH) && !HH.closest(KA)));
        return 0 === SH.length ? null : (this.contentReturn = null, this.pickRegionStart(BH, mH(SH[0], "y", AH), SH))
      }
      backToStrip(HH, BH, LH) {
        if (HH.closest(gA)) return null;
        const AH = qL(LH);
        for (const rH of LH.querySelectorAll(gA)) {
          if (Number(rH.dataset.padTabs) <= 1 || rH === AH) continue;
          const SH = RA(rH, BH),
            hH = SH ? jA(HH, rH).parentElement : null;
          if (SH && hH && hH !== LH && LH.contains(hH)) return this.contentReturn = new WeakRef(HH), SH
        }
        return null
      }
      pickRegionStart(HH, BH, LH) {
        const AH = cH(BH),
          rH = HH => {
            const BH = LH.filter((BH => HH.contains(BH) && !BH.closest(gA) && eH(BH.getBoundingClientRect(), AH))),
              rH = qA(BH.map(cA));
            return rH >= 0 ? BH[rH] : null
          };
        for (const SH of (0, pH.l)(HH)) {
          const HH = rH(SH);
          if (HH) return HH
        }
        for (const SH of HH.querySelectorAll(gA)) {
          const HH = RA(SH, LH);
          if (HH) return HH
        }
        return rH(HH)
      }
    }
    const FA = "[data-pad-default-focus], .Dropdown-option.is-selected",
      DA = ".Dropdown-root.is-open > .Dropdown-menu",
      wA = "[data-pad-no-step-in]",
      ZA = "[data-pad-tabs]",
      dA = "[data-pad-press-area]",
      aA = HH => {
        let BH = HH;
        for (let LH = 0; BH && LH <= 4; LH++, BH = BH.parentElement) {
          const LH = BH.querySelector(".CircleInfo");
          if (LH) return BH === HH || BH.querySelectorAll(pH.e).length <= 1 ? LH : null;
          if (BH !== HH && BH.querySelectorAll(pH.e).length > 1) return null
        }
        return null
      },
      sA = (HH, BH, LH) => {
        (0, wH.r)(HH, BH, LH);
        const AH = null !== HH && void 0 !== HH && HH.isConnected ? aA(HH) : null,
          rH = aA(BH);
        AH !== rH && (0, wH.r)(AH, rH, rH ? (0, wH.C)(rH) : LH, {
          leaveBelow: HH,
          enterBelow: BH
        })
      },
      JA = HH => HH.getBoundingClientRect(),
      iA = (HH, BH, LH) => {
        const AH = new Set(LH);
        for (let rH = HH; rH; rH = rH === BH ? null : rH.parentElement)
          if (AH.has(rH)) return rH;
        return null
      },
      pA = (HH, BH) => !HH.root || HH.root === BH || BH.matches(DA) && HH.root.contains(BH);
    const yA = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new BA, this.tabStripNav = new nA, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, QH.d)(uH.q), this.dpadRepeats = new Map(uH.y.map((HH => [HH, (0, QH.d)(uH.C)]))), this.stickRepeat = new uH.b((0, QH.d)(uH.Y)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const HH = XH.b.register({
            name: "focus",
            isActive: () => (0, YH.j)() && "focus" === kA(),
            onFrame: HH => {
              this.onFrame(HH)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
          }),
          BH = (0, LA.i)((HH => {
            const BH = (0, LA.q)(HH);
            null === HH.memoryKey && this.memory.forget(BH), BH === this.layerKey && (this.layerKey = null)
          }));
        let LH = -1 / 0;
        const AH = hH.i.onFrame((HH => {
            (0, YH.j)() || HH.timestampMs - LH < 100 || (LH = HH.timestampMs, EA())
          })),
          rH = HH => {
            HH.isTrusted && HH.target instanceof Element && hH.i.getActivePad() && this.noteChosenStop(HH.target)
          };
        return document.addEventListener("click", rH, !0), () => {
          HH(), BH(), AH(), document.removeEventListener("click", rH, !0), this.deactivate()
        }
      }
      noteChosenStop(HH) {
        var BH, LH;
        const AH = EA();
        if (!AH || !AH.root.contains(HH)) return;
        const rH = null !== (BH = null === (LH = HH.closest(".Dropdown-root")) || void 0 === LH ? void 0 : LH.querySelector(".Dropdown-control")) && void 0 !== BH ? BH : HH,
          SH = iA(rH, AH.root, this.getEnabledCandidates(AH.root));
        if (!SH) return;
        const hH = (0, LA.q)(AH.layer);
        hH === this.layerKey && AH.root === this.layerRoot || this.beginLayer(AH, hH), this.wasActive ? this.setFocus(SH, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = SH, this.lastFocusedCentre = (0, wH.C)(SH), this.rememberFocus(SH), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
      deactivate() {
        var HH;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const HH of this.dpadRepeats.values()) HH.reset();
          this.stickRepeat.reset(), null !== (HH = this.focused) && void 0 !== HH && HH.isConnected && sA(this.focused, null, (0, wH.C)(this.focused)), this.notify()
        }
      }
      setFocus(HH) {
        var BH;
        let {
          scroll: LH = !0,
          byUser: AH = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (AH && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), HH === this.focused) return;
        const rH = null !== (BH = this.focused) && void 0 !== BH && BH.isConnected ? this.focused : null;
        if (this.focused = HH, HH) {
          LH && (HH.classList.add(oA), HH.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), AH && ((HH, BH) => {
            const LH = BH.closest("[data-pad-friends-column]");
            LH && HH && !LH.contains(HH) && (FL = new WeakRef(HH))
          })(rH, HH);
          const BH = (0, wH.C)(HH);
          this.lastFocusedCentre = BH, this.movedInLayer && this.rememberFocus(HH), sA(rH, HH, BH), "false" === HH.getAttribute("aria-pressed") && HH.closest("[data-pad-select-on-focus]") && (0, wH.c)(HH)
        } else rH && sA(rH, null, (0, wH.C)(rH));
        this.notify()
      }
      rememberFocus(HH) {
        const BH = this.layerRoot;
        this.layerKey && BH && this.memory.remember(this.layerKey, HH, BH, (() => this.getEnabledCandidates(BH)))
      }
      noteCursorActivation(HH) {
        const BH = EA();
        if (!BH || !BH.root.contains(HH)) return;
        const LH = this.getEnabledCandidates(BH.root),
          AH = new Set(LH);
        let rH = HH;
        for (; rH && !AH.has(rH);) rH = rH === BH.root ? null : rH.parentElement;
        if (!(rH instanceof HTMLElement)) return;
        const SH = (0, LA.q)(BH.layer);
        this.memory.enter(SH), this.memory.remember(SH, rH, BH.root, (() => LH))
      }
      notePageEnteredByCursor(HH) {
        return this.memory.enter(HH)
      }
      recallStop(HH, BH) {
        return this.findRemembered(HH, BH)
      }
      focusWhenFound(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: HH,
          untilMs: performance.now() + BH,
          holdWhile: LH
        }
      }
      getEnabledCandidates(HH) {
        return (0, pH.h)(HH).filter((HH => !(0, pH.x)(HH)))
      }
      onFrame(HH) {
        var BH;
        const LH = EA();
        if (!LH) return;
        const AH = null !== (BH = this.findOpenDropdown(LH)) && void 0 !== BH ? BH : LH,
          rH = performance.now(),
          SH = (0, LA.q)(AH.layer);
        if (SH !== this.layerKey || AH.root !== this.layerRoot) {
          const BH = this.focused;
          if (null !== this.layerKey && AH.root === this.layerRoot && BH && (0, pH.w)(BH, AH.root)) this.continueLayer(SH, BH), this.wasActive || this.resume(AH.root, rH);
          else {
            const BH = !this.wasActive && !HH.wokeDevice,
              hH = "death" === this.layerKind || BH,
              tH = this.enterLayer(AH, SH);
            "popup" !== AH.layer.kind || AH !== LH || tH ? "menu" === AH.layer.kind && hH && "inGame" === zH.c.get("gameState") && !(0, hL.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = rH + IA.c) : (this.pressGuardExtends = BH, this.pressGuardUntilMs = rH + (BH ? IA.c : hH ? 500 : 250))
          }
        } else this.wasActive || this.resume(AH.root, rH);
        if (this.layerKind = AH.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), HH.wokeDevice && this.focusPointedStop(AH.root), this.validateFocus(AH, rH), rH < this.pressGuardUntilMs && this.pressGuardExtends && (HH.wasPressed((0, EH.k)("menuConfirm")) || HH.wasPressed((0, EH.k)("menuBack"))) && (this.pressGuardUntilMs = rH + IA.c), rH >= this.pressGuardUntilMs && this.handleButtons(HH, AH)) return;
        const hH = "hybrid" === PA();
        if (hH && (HH => {
            const BH = GA();
            return BH !== vA && (vA = BH, xA.lock()), xA.update(HH, (0, GH.g)().moveDeadzone)
          })(HH.leftStick)) return tH = this.getHandoff(), MA = YA(tH), QA = GA(), void XH.b.handOffHeldInput();
        var tH;
        this.handleDirections(HH, AH, rH, !hH), this.handleScroll(HH, AH)
      }
      findOpenDropdown(HH) {
        const BH = HH.root.querySelector(DA);
        if (!BH || !(0, pH.u)(BH)) return null;
        let LH = this.dropdownLayers.get(BH);
        return LH || (this.dropdownLayerCounter++, LH = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: HH.layer.kind,
          getRoot: () => BH,
          close: () => {
            (0, wH.l)(BH)
          },
          memoryKey: null
        }, this.dropdownLayers.set(BH, LH)), {
          layer: LH,
          root: BH,
          order: HH.order
        }
      }
      focusPointedStop(HH) {
        const BH = (0, YH.c)(),
          LH = BH ? document.elementFromPoint(BH.x, BH.y) : null;
        if (!LH || !HH.contains(LH)) return;
        const AH = iA(LH, HH, this.getEnabledCandidates(HH));
        AH && this.setFocus(AH, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(HH, BH) {
        const LH = this.beginLayer(HH, BH),
          AH = UA();
        return AH && pA(AH, HH.root) ? (this.takeOver(HH.root, AH, this.enteredLayerAtMs), LH) : (this.restoreLayerFocus(HH.root, LH), LH)
      }
      beginLayer(HH, BH) {
        return this.layerKey = BH, this.layerRoot = HH.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(BH)
      }
      restoreLayerFocus(HH, BH) {
        const LH = BH && this.layerKey ? this.findRemembered(HH, this.layerKey) : null;
        this.restoredFromMemory = null !== LH, this.setFocus(null !== LH && void 0 !== LH ? LH : this.pickInitial(HH, {
          waitForContent: !0
        }))
      }
      continueLayer(HH, BH) {
        this.layerKey = HH;
        const LH = this.memory.enter(HH);
        this.restoreOnFocusLoss = LH, this.movedInLayer && !LH && this.rememberFocus(BH)
      }
      resume(HH, BH) {
        var LH;
        const AH = UA();
        AH && pA(AH, HH) ? this.takeOver(HH, AH, BH) : null !== (LH = this.focused) && void 0 !== LH && LH.isConnected && sA(null, this.focused, (0, wH.C)(this.focused))
      }
      pickPreferred(HH) {
        var BH;
        return null !== (BH = this.layerKey ? this.findRemembered(HH, this.layerKey) : null) && void 0 !== BH ? BH : this.pickInitial(HH, {
          waitForContent: !0
        })
      }
      findRemembered(HH, BH) {
        return this.memory.has(BH) ? this.memory.recall(BH, this.getEnabledCandidates(HH)) : null
      }
      getHandoff() {
        var HH, BH, LH;
        const AH = null !== (HH = this.focused) && void 0 !== HH && HH.isConnected ? this.focused : null,
          rH = null !== (BH = this.layerRoot) && void 0 !== BH && BH.isConnected ? this.layerRoot : null;
        return {
          point: AH ? (0, wH.C)(AH) : null !== (LH = this.lastFocusedCentre) && void 0 !== LH ? LH : this.getLayerStartPoint(rH),
          element: AH,
          direction: null
        }
      }
      getLayerStartPoint(HH) {
        if (!HH) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const BH = this.pickInitial(HH, {
          includeDisabled: !0
        });
        return (0, wH.C)(null !== BH && void 0 !== BH ? BH : HH)
      }
      takeOver(HH, BH, LH) {
        const {
          element: AH,
          direction: rH,
          point: SH
        } = BH, hH = AH instanceof HTMLElement && (0, pH.w)(AH, HH) ? AH : null;
        if (!rH) {
          const BH = this.focused;
          return hH ? this.setFocus(hH, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(HH, SH), void(this.focused && this.focused === BH && this.focused.isConnected && sA(null, this.focused, (0, wH.C)(this.focused)))
        }
        if (this.dpadRepeats.get(rH).update(!0, LH), hH) return this.setFocus(hH, {
          scroll: !1,
          byUser: !0
        }), void this.move(HH, rH, LH, !0);
        const tH = this.getEnabledCandidates(HH),
          zH = tH.map(JA),
          CH = vL(new DOMRect(SH.x, SH.y, 0, 0), zH, rH),
          EH = CH >= 0 ? CH : OL(SH, zH);
        this.setFocus(EH >= 0 ? tH[EH] : this.pickInitial(HH), {
          byUser: !0
        })
      }
      focusNearest(HH, BH) {
        const LH = this.getEnabledCandidates(HH),
          AH = OL(BH, LH.map(JA));
        this.setFocus(AH >= 0 ? LH[AH] : this.pickInitial(HH), {
          byUser: !0
        })
      }
      pickDefault(HH) {
        let {
          includeDisabled: BH = !1,
          exclude: LH = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const AH = [...HH.querySelectorAll(FA)].filter((AH => (null === LH || void 0 === LH || !LH.has(AH)) && (BH ? (0, pH.y)(AH, HH) : (0, pH.w)(AH, HH)))),
          rH = qA(AH.map(cA));
        return rH >= 0 ? AH[rH] : null
      }
      pickNewAreaStart(HH, BH) {
        const LH = [...HH.querySelectorAll(dA)].filter(pH.u);
        for (const AH of [...(0, pH.l)(HH), ...LH]) {
          if (BH.has(AH)) continue;
          const HH = this.getEnabledCandidates(AH),
            LH = qA(HH.map(cA));
          if (LH >= 0) return HH[LH]
        }
        return null
      }
      pickInitial(HH) {
        let {
          includeDisabled: BH = !1,
          waitForContent: LH = !1,
          enteredAtMs: AH = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const rH = this.pickDefault(HH, {
          includeDisabled: BH
        });
        if (rH) return rH;
        const SH = HH => BH ? (0, pH.h)(HH) : this.getEnabledCandidates(HH);
        let hH = [];
        for (const GH of (0, pH.l)(HH))
          if (hH = SH(GH), hH.length > 0) break;
        if (0 === hH.length) {
          if (LH && performance.now() - AH < 1e4 && (0, pH.r)(HH)) return null;
          hH = SH(HH)
        }
        const tH = hH.map(JA),
          zH = cH(null),
          CH = hH.filter(((HH, BH) => eH(tH[BH], zH))),
          EH = CH.length > 0 ? CH : hH,
          XH = qA(EH.map(cA));
        return XH >= 0 ? EH[XH] : null
      }
      validateFocus(HH, BH) {
        if (this.pendingFocus) {
          var LH, AH;
          const rH = this.pendingFocus.find();
          if (rH && (0, pH.w)(rH, HH.root)) return this.pendingFocus = null, void this.setFocus(rH, {
            byUser: !0
          });
          BH > this.pendingFocus.untilMs && (null === (LH = (AH = this.pendingFocus).holdWhile) || void 0 === LH || !LH.call(AH)) && (this.pendingFocus = null)
        }
        const rH = this.focused,
          SH = !!rH && (0, pH.w)(rH, HH.root);
        if (!(!SH && rH && rH === this.lastActivated && BH - this.lastActivatedAtMs < 5e3 && HH.root.contains(rH) && (0, pH.u)(rH) && (0, pH.x)(rH))) {
          if (!SH && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = BH, void this.restoreLayerFocus(HH.root, !0);
          if ((!SH || !this.movedInLayer && !this.scrolledInLayer) && !(BH - this.lastRefocusCheckMs < (SH ? 200 : 50)))
            if (this.lastRefocusCheckMs = BH, SH) {
              const LH = BH - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(HH.root) : null,
                AH = null !== LH && void 0 !== LH ? LH : this.restoredFromMemory ? null : this.pickDefault(HH.root);
              AH && AH !== rH && this.setFocus(AH)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const BH = this.pendingFocus;
                return this.focusNearest(HH.root, this.lastFocusedCentre), void(this.pendingFocus = BH)
              }
              this.setFocus(this.pickPreferred(HH.root))
            }
        }
      }
      handleButtons(HH, BH) {
        if (HH.wasPressed((0, EH.k)("menuToggleCursor"))) return TA(this.getHandoff()), !0;
        if (HH.wasPressed((0, EH.k)("menuBack"))) {
          const HH = (0, wH.l)(BH.root);
          return HH ? this.setFocus(HH, {
            byUser: !0
          }) : DL(this, BH.root) || ((0, wH.f)(BH.root) ? this.returnToOpener(BH.root) : this.backToStrip(BH.root) || XA()), !0
        }
        const LH = (0, EH.k)("menuConfirm");
        var AH, rH;
        HH.wasPressed(LH) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (AH = null === (rH = this.focused) || void 0 === rH ? void 0 : rH.getAttribute("data-pad-repeat")) && void 0 !== AH ? AH : null, this.confirmRepeated = HH.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (HH.wasReleased(LH)) {
          const HH = this.confirmPressedOn;
          if (this.confirmPressedOn = null, HH && !this.confirmRepeated && HH === this.focused && HH.isConnected && !(0, pH.x)(HH)) {
            const LH = HH.matches("[data-pad-tab]") ? HH.closest(ZA) : null;
            LH ? this.enterTab(HH, LH, BH.root, performance.now()) : this.activate(HH)
          }
          return !0
        }
        return this.repeatConfirm(HH, LH), yL(this, HH, BH)
      }
      repeatConfirm(HH, BH) {
        const LH = this.confirmPressedOn;
        LH && null !== this.confirmRepeatKey && HH.isHeld(BH) && (LH === this.focused && LH.isConnected && !(0, pH.x)(LH) && LH.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? LH.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(LH)) : this.confirmRepeatKey = null)
      }
      backToStrip(HH) {
        const BH = this.focused;
        if (!(0, GH.g)().menuBackToCategories) return !1;
        const LH = null !== BH && void 0 !== BH && BH.isConnected ? this.tabStripNav.backToStrip(BH, this.getEnabledCandidates(HH), HH) : null;
        return LH && this.setFocus(LH, {
          byUser: !0
        }), null !== LH
      }
      returnToOpener(HH) {
        const BH = this.lastActivatedKey;
        BH && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var LH;
          return null !== (LH = this.getEnabledCandidates(HH).find((HH => (0, wH.G)(HH) === BH))) && void 0 !== LH ? LH : null
        })))
      }
      activate(HH) {
        var BH;
        if ((0, fA.d)(HH) || (0, wH.I)(HH)) return;
        this.lastActivatedKey = null !== (BH = (0, wH.G)(HH)) && void 0 !== BH ? BH : this.lastActivatedKey, this.lastActivated = HH, this.lastActivatedAtMs = performance.now(), this.rememberFocus(HH);
        const LH = this.layerRoot;
        if (LH) {
          const BH = new Set(LH.querySelectorAll(FA)),
            AH = new Set(LH.querySelectorAll(`[data-pad-initial-area], ${dA}`)),
            rH = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var rH;
            return (0, pH.w)(HH, LH) ? null : null !== (rH = this.pickDefault(LH, {
              exclude: BH
            })) && void 0 !== rH ? rH : this.pickNewAreaStart(LH, AH)
          }), 5e3, (() => HH.isConnected && (0, pH.x)(HH) && performance.now() - rH < 6e4))
        }(0, wH.c)(HH), (0, wH.h)(HH)
      }
      handleDirections(HH, BH, LH, AH) {
        const rH = fL(BH.layer.kind) ? (0, EH.k)("chat") : null;
        for (const tH of uH.y) {
          this.dpadRepeats.get(tH).update(HH.isHeld(tH), LH) && (tH !== rH || HH.wasPressed(tH)) && this.move(BH.root, tH, LH, !0)
        }
        const SH = AH ? (0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          hH = this.stickRepeat.update((0, uH.Z)(SH), LH);
        if (hH && this.move(BH.root, hH, LH, !0), this.retryMove && LH >= this.retryMove.atMs) {
          const {
            direction: HH
          } = this.retryMove;
          this.retryMove = null, this.move(BH.root, HH, LH, !1)
        }
      }
      move(HH, BH, LH, AH) {
        var rH;
        let SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (rH = this.tabOpenWait) || void 0 === rH ? void 0 : rH.wait) && BH === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const hH = this.focused;
        if (!hH || !hH.isConnected) {
          const BH = this.pickInitial(HH);
          return void(BH && this.setFocus(BH, {
            byUser: !0
          }))
        }
        const tH = "Left" === BH || "Right" === BH,
          zH = tH ? (0, fA.d)(hH) : null;
        if (zH) return void zH.adjust("Left" === BH ? -1 : 1);
        const CH = HH => null !== HH.closest("[data-pad-friends-column]"),
          EH = CH(hH),
          XH = JA(hH),
          GH = tH || hH.closest(ZA) ? null : (HH => {
            const BH = new Map;
            return LH => {
              const AH = LH.closest(ZA);
              if (!AH) return !1;
              let rH = BH.get(AH);
              if (void 0 === rH) {
                const LH = JA(AH);
                rH = xL(HH, LH) && (LH.right <= HH.left || LH.left >= HH.right), BH.set(AH, rH)
              }
              return rH
            }
          })(XH),
          YH = null !== hH.closest(wA),
          uH = this.getEnabledCandidates(HH).filter((HH => HH !== hH && (tH || CH(HH) === EH) && !(null !== GH && void 0 !== GH && GH(HH)) && (YH || !HH.closest(wA)))),
          QH = uH.map(JA),
          WH = mH(hH, "y", HH),
          MH = cH(WH);
        if (!SH && !eH(XH, MH)) {
          const HH = uH.filter(((HH, BH) => eH(QH[BH], MH)));
          if (HH.length > 0) {
            const BH = {
              x: MH.left + MH.width / 2,
              y: MH.top + MH.height / 2
            };
            return void this.setFocus(HH[OL(BH, HH.map(JA))], {
              byUser: !0
            })
          }
        }
        const xH = tH ? ((HH, BH, LH) => {
            const AH = JA(HH),
              rH = HH.closest(ZA),
              SH = rH ? JA(rH) : null;
            return BH.map(((BH, hH) => {
              const tH = LH[hH];
              if (tH.bottom > AH.top && tH.top < AH.bottom) return !0;
              const zH = BH.closest(ZA);
              if (rH && SH) return zH !== rH && (null !== zH || tH.bottom <= SH.top || tH.top >= SH.bottom);
              if (zH) return !xL(AH, JA(zH));
              let CH = HH;
              for (let LH = HH.parentElement; LH && !LH.contains(BH); LH = LH.parentElement) CH = LH;
              const EH = JA(CH);
              return tH.right > EH.left && tH.left < EH.right
            }))
          })(hH, uH, QH) : void 0,
          vH = tH && !hH.closest(ZA) ? (HH => HH.map((HH => !HH.closest(KA))))(uH) : void 0,
          PH = ((HH, BH) => {
            const LH = [];
            for (let rH = HH; rH; rH = rH.parentElement) LH.push(rH);
            const AH = new Map;
            return LH.forEach(((HH, BH) => {
              AH.set(HH, LH.length - 1 - BH)
            })), BH.map((HH => {
              for (let BH = HH; BH; BH = BH.parentElement) {
                const HH = AH.get(BH);
                if (void 0 !== HH) return HH
              }
              return -1
            }))
          })(hH, uH),
          TH = tH ? "x" : "y",
          UH = mH(hH, TH, HH);
        let VH = vL(XH, QH, BH, PH, xH, vH);
        if (VH >= 0 && UH && !UH.contains(uH[VH])) {
          const HH = uH.flatMap(((HH, BH) => UH.contains(HH) ? [BH] : [])),
            LH = BH => BH && HH.map((HH => BH[HH])),
            AH = vL(XH, HH.map((HH => QH[HH])), BH, HH.map((HH => PH[HH])), LH(xH), LH(vH));
          VH = AH >= 0 ? HH[AH] : VH
        }
        if (VH >= 0) return void this.moveTo(hH, uH[VH], uH, HH, BH, SH);
        if (!AH) return;
        const OH = "Right" === BH || "Down" === BH ? 1 : -1;
        if (UH && lH(UH, TH, OH)) {
          const HH = "y" === TH ? UH.clientHeight : UH.clientWidth;
          KH(UH, TH, OH * HH * .5), this.retryMove = {
            direction: BH,
            atMs: LH + 80
          }
        }
      }
      moveTo(HH, BH, LH, AH, rH, SH) {
        const hH = this.tabStripNav.findTabContent(HH, BH, LH);
        hH && "true" !== HH.dataset.padSelected ? this.openTab(HH, hH, AH, rH) : SH && !hH || this.setFocus(this.tabStripNav.redirect(HH, BH, LH, AH), {
          byUser: !0
        })
      }
      openTab(HH, BH, LH, AH) {
        const rH = BH.parentElement;
        (0, wH.c)(HH), this.focusWhenFound((() => "true" !== HH.dataset.padSelected ? null : BH.isConnected ? this.tabStripNav.pickContentStart(BH, this.getEnabledCandidates(LH), LH) : rH ? this.tabStripNav.pickReplacedContentStart(HH, rH, this.getEnabledCandidates(LH), LH) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: AH
        }
      }
      enterTab(HH, BH, LH, AH) {
        this.move(LH, (HH => {
          const BH = [...HH.querySelectorAll(NA)].filter((BH => BH.closest(gA) === HH));
          if (BH.length >= 2) {
            const HH = BH[0].getBoundingClientRect(),
              LH = BH[1].getBoundingClientRect();
            return Math.abs(LH.top - HH.top) > Math.abs(LH.left - HH.left) ? "Right" : "Down"
          }
          const LH = HH.getBoundingClientRect();
          return LH.height > LH.width ? "Right" : "Down"
        })(BH), AH, !1, !0), this.focused !== HH || this.pendingFocus || this.activate(HH)
      }
      handleScroll(HH, BH) {
        const LH = (0, uH.f)(HH.rightStick, .2);
        if (0 === LH.x && 0 === LH.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const AH = HH.dtMs / 1e3;
        for (const SH of ["x", "y"]) {
          var rH;
          const HH = LH[SH];
          if (0 === HH) continue;
          const hH = null !== (rH = mH(this.focused, SH, BH.root)) && void 0 !== rH ? rH : IH(BH.root, SH);
          if (!hH) continue;
          const tH = Math.sign(HH) * HH * HH * 1500 * AH + this.scrollRemainder[SH],
            zH = Math.trunc(tH);
          this.scrollRemainder[SH] = tH - zH, 0 !== zH && (KH(hH, SH, zH), this.scrolledInLayer = !0)
        }
      }
    };
    var Hr = LH(8913);
    var Br = LH(9426);
    const Lr = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Ar = {
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
          ...Lr,
          minIntervalMs: 1e3
        },
        preview: {
          ...Lr,
          minIntervalMs: 0
        }
      };
    const rr = new class {
        constructor(HH) {
          this.deps = HH, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = HH => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", HH))
          }
        }
        play(HH, BH) {
          const LH = Ar[HH];
          if (!this.deps.isVibrationOn() || LH.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const AH = this.lastPlayedMs[HH];
          if (void 0 !== AH && BH - AH < LH.minIntervalMs) return !1;
          const rH = this.deps.getActuator();
          if (!rH) return !1;
          this.lastPlayedMs[HH] = BH;
          const {
            duration: SH,
            strongMagnitude: hH,
            weakMagnitude: tH
          } = LH;
          try {
            rH.playEffect("dual-rumble", {
              duration: SH,
              strongMagnitude: hH,
              weakMagnitude: tH
            }).catch(this.logFailure)
          } catch (zH) {
            this.logFailure(zH)
          }
          return !0
        }
      }({
        getActuator: () => (HH => {
          const BH = null === HH || void 0 === HH ? void 0 : HH.vibrationActuator;
          return "function" === typeof(null === BH || void 0 === BH ? void 0 : BH.playEffect) ? BH : null
        })(hH.i.getActiveGamepad()),
        isVibrationOn: () => (0, GH.g)().vibration,
        isPadInUse: YH.j
      }),
      Sr = HH => {
        rr.play(HH, performance.now())
      };
    var hr = LH(8920),
      tr = LH(3209),
      zr = LH(101),
      Cr = LH(30),
      Er = LH(656);
    class Xr {
      constructor(HH) {
        this.deps = HH
      }
      check() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const BH = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!BH) return "skipped";
        const LH = HH ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === LH || this.deps.readReportedVisitId() === LH ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(LH), this.deps.XX(BH, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Gr = "controllerUsageReportedVisit";
    var Yr = LH(1352),
      ur = LH(1789),
      Qr = LH(642),
      Wr = LH(1450),
      Mr = LH(1194);
    const xr = HH => ({
        translationKey: `controller:${HH}`
      }),
      vr = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: xr("padButtonView"),
        Menu: xr("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: xr("padButtonDpadUp"),
        Down: xr("padButtonDpadDown"),
        Left: xr("padButtonDpadLeft"),
        Right: xr("padButtonDpadRight"),
        Home: xr("padButtonHome"),
        LeftStick: xr("padButtonLeftStick"),
        RightStick: xr("padButtonRightStick")
      },
      Pr = {
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
          View: xr("padButtonCreate"),
          Menu: xr("padButtonOptions")
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
      Tr = (HH, BH) => {
        var LH;
        const AH = null !== (LH = Pr[HH][BH]) && void 0 !== LH ? LH : vr[BH];
        return "string" === typeof AH ? AH : (0, rH.u)(Mr.g.get().getCurrentLanguageCode(), AH.translationKey)
      },
      Ur = HH => {
        let {
          glyph: BH,
          family: LH,
          className: AH
        } = HH;
        const rH = (0, YH.v)(),
          SH = null !== LH && void 0 !== LH ? LH : rH,
          hH = (0, hr.d)(SH, BH);
        return (0, RH.jsx)("span", {
          className: NH()("ControllerGlyph", AH),
          role: "img",
          "aria-label": Tr(SH, BH),
          style: {
            "--pad-glyph-mask": `url(${hH})`,
            "--pad-glyph-aspect": (0, hr.c)(SH, BH)
          }
        })
      };
    var Vr = LH(1967);
    const Or = HH => {
      let {
        action: BH
      } = HH;
      const {
        t: LH
      } = (0, rH.B)();
      switch (BH.kind) {
        case "reload":
          return (0, RH.jsx)("span", {
            children: LH("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, RH.jsx)(Vr.b, {
            text: BH.description ? [{
              icon: BH.icon
            }, ` ${BH.description}`] : [{
              icon: BH.icon
            }]
          });
        case "touchButton":
          return (0, RH.jsx)(Vr.b, {
            text: BH.label
          })
      }
    };
    var br = LH(9433);
    const kr = HH => {
      let {
        hold: BH
      } = HH;
      return (0, RH.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${BH.holdMs}ms`
        },
        children: (0, RH.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, BH.id)
    };
    var mr = LH(9453),
      or = LH(9458),
      Ir = LH(9463),
      fr = LH(9450);
    const lr = () => {
        const {
          gameState: HH
        } = (0, zH.m)(["gameState"]), BH = (0, YH.s)(), [AH, rH] = (0, qH.useState)(!1), [SH, hH] = (0, qH.useState)(!1);
        return (0, qH.useEffect)((() => {
          "inGame" === HH && rH(!0)
        }), [HH]), (0, qH.useEffect)((() => {
          if (!AH) return;
          let HH = null,
            BH = !1;
          return (Qr.K ? Promise.all([LH.e(84), LH.e(103), LH.e(300), LH.e(207), LH.e(251), LH.e(250), LH.e(102)]).then((() => LH(41856))).then((HH => HH.startWasmPadGameplay)) : Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(111), LH.e(87), LH.e(85), LH.e(86), LH.e(203), LH.e(255), LH.e(89), LH.e(103), LH.e(249), LH.e(204), LH.e(109), LH.e(261), LH.e(252), LH.e(268), LH.e(234), LH.e(219), LH.e(100), LH.e(269), LH.e(88), LH.e(243), LH.e(174), LH.e(251), LH.e(175)]).then((() => LH(41992))).then((HH => HH.startPadGameplay))).then((LH => {
            BH || (HH = LH())
          })).catch((HH => {
            console.error("Pad gameplay failed to load", HH), BH || hH(!0)
          })), () => {
            var LH;
            BH = !0, null === (LH = HH) || void 0 === LH || LH()
          }
        }), [AH]), (0, qH.useEffect)((() => {
          SH && BH && (hH(!1), Yr.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((HH => {
            !0 === HH && (0, ur.reloadBloxd)()
          })))
        }), [SH, BH]), (0, RH.jsxs)(RH.Fragment, {
          children: [(0, RH.jsx)(Kr, {}), (0, RH.jsx)(cr, {}), (0, RH.jsx)(er, {})]
        })
      },
      Kr = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, YH.s)(), {
          gameState: LH,
          isUiHidden: AH
        } = (0, zH.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: SH
        } = (0, GH.n)(), hH = (0, br.m)(), tH = (0, br.q)(), [CH, XH] = (0, qH.useState)(Ir.b);
        return (0, Wr.d)(fr.n, XH), !BH || SH || AH || "inGame" !== LH || !hH && !CH ? null : (0, RH.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [hH && (0, RH.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, RH.jsx)(Ur, {
              glyph: (0, EH.k)("actionButton")
            }), (0, RH.jsx)(Or, {
              action: hH
            }), tH && (0, RH.jsx)("span", {
              className: "PadActionHintMore",
              children: HH("controller:gameplayActionWheelHint")
            })]
          }), CH && (0, RH.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, RH.jsx)(Ur, {
              glyph: (0, EH.k)("pickBlock")
            }), (0, RH.jsx)("span", {
              children: HH("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      cr = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, YH.s)(), {
          gameState: LH,
          isUiHidden: AH
        } = (0, zH.m)(["gameState", "isUiHidden"]), [SH, hH] = (0, qH.useState)(mr.c);
        return (0, Wr.d)(fr.j, hH), BH && !AH && "inGame" === LH && SH ? (0, RH.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, RH.jsx)("span", {
            children: HH("controller:gameplayDropStack")
          }), (0, RH.jsx)(kr, {
            hold: SH
          })]
        }) : null
      },
      er = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, YH.s)(), {
          gameState: LH,
          isUiHidden: AH
        } = (0, zH.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: SH
        } = (0, GH.n)(), [hH, tH] = (0, qH.useState)(or.c);
        return (0, Wr.d)(fr.i, tH), BH && !AH && "inGame" === LH && hH ? (0, RH.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!SH && (0, RH.jsx)(Ur, {
            glyph: (0, EH.k)("attack")
          }), (0, RH.jsx)("span", {
            children: HH("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var qr = LH(9467),
      gr = LH(2036),
      Nr = LH(2628),
      Rr = LH(8897);
    const jr = HH => HH && !(0, qr.d)(gr.e.get("shopInfo")),
      nr = () => {
        const HH = "inGame" === (0, zH.m)(["gameState"]).gameState;
        return (0, Nr.f)("shopInfo", (() => {
          (0, Rr.e)(jr(HH))
        })), (0, qH.useEffect)((() => {
          (0, Rr.e)(jr(HH))
        }), [HH]), null
      },
      Fr = () => {
        const {
          t: HH
        } = (0, rH.B)(), {
          hideButtonHints: BH
        } = (0, GH.n)();
        (0, YH.v)();
        const LH = (0, NB.m)();
        return (0, qH.useEffect)((() => (() => {
          const HH = XH.b.register({
              name: "inventory",
              isActive: rL.isActive,
              onFrame: rL.onFrame,
              onDeactivate: rL.onDeactivate,
              wakePressActs: rL.wakePressActs
            }),
            BH = HH => {
              rL.noteRealPointer(HH), rL.shouldBlockRealPointer(HH) && HH.stopPropagation()
            };
          for (const hH of SL) window.addEventListener(hH, BH, !0);
          const LH = (0, iH.i)((() => {
              "inventory" !== XH.b.getActiveConsumerName() && rL.forgetSurface()
            })),
            AH = HH => {
              const BH = HH.target;
              (0, YH.j)() && (0, aH.k)(BH) && BH.closest(TB) && (0, iH.h)() && (0, iH.n)(BH)
            };
          document.addEventListener("focusout", AH, !0);
          const {
            invalidate: rH,
            onScroll: SH
          } = rL.targets;
          return document.addEventListener("scroll", SH, !0), window.addEventListener("resize", rH), () => {
            HH(), LH();
            for (const HH of SL) window.removeEventListener(HH, BH, !0);
            document.removeEventListener("scroll", SH, !0), document.removeEventListener("focusout", AH, !0), window.removeEventListener("resize", rH), rL.targets.disconnect()
          }
        })()), []), (0, RH.jsxs)(RH.Fragment, {
          children: [(0, RH.jsx)(DH, {
            placer: rL.ring,
            className: "InventorySlotCursorRing"
          }), LH.showing && !BH && (0, RH.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: JH(LH).map((BH => {
              let {
                actions: AH,
                labelKey: rH
              } = BH;
              return (0, RH.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [AH.map((HH => (0, RH.jsx)(Ur, {
                  glyph: (0, EH.k)(HH)
                }, HH))), (0, RH.jsx)("span", {
                  children: HH(`controller:${rH}`)
                }), "inventoryDrop" === rH && LH.dropStackHold && (0, RH.jsx)(kr, {
                  hold: LH.dropStackHold
                })]
              }, rH)
            }))
          })]
        })
      },
      Dr = [{
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
      wr = HH => Array.from(HH).map((HH => ({
        type: "char",
        char: HH,
        width: 1
      }))),
      Zr = function(HH) {
        return {
          type: "command",
          command: HH,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      dr = [Zr("page", 2), Zr("otherPage"), Zr("caretLeft"), Zr("space", 3), Zr("caretRight"), Zr("close", 1.5), Zr("submit", 1.5)],
      ar = [Zr("page", 2), Zr("otherPage"), Zr("caretLeft"), Zr("space", 2), Zr("caretRight"), Zr("newline"), Zr("close", 1.5), Zr("submit", 1.5)],
      sr = [
        [...wr("1234567890"), Zr("backspace")], wr("qwertyuiop/"), wr("asdfghjkl'?"), [Zr("shift", 2), ...wr("zxcvbnm,.")]
      ],
      Jr = [
        [...wr("1234567890"), Zr("backspace")], wr("!@#$%^&*()/"), wr('-_=+[]{};:"'), wr("~`|\\<>'\u20ac\xa3,.")
      ],
      ir = {
        letters: sr,
        accents: [
          [...wr("1234567890"), Zr("backspace")], wr("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), wr("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Zr("shift", 2), ...wr("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Jr
      },
      pr = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      yr = (HH, BH) => "letters" === HH ? BH ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === HH ? "symbols" : "accents"
      },
      HS = function(HH, BH) {
        const LH = ((HH, BH) => [...ir[HH], BH ? ar : dr])(HH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === BH) return LH;
        const AH = Math.min(2, BS(LH[0]) / BH);
        return [Array.from({
          length: BH
        }, ((HH, BH) => ({
          type: "phrase",
          phraseIndex: BH,
          width: AH
        }))), ...LH]
      },
      BS = HH => HH.reduce(((HH, BH) => HH + BH.width), 0),
      LS = HH => Math.max(...HH.map(BS)),
      AS = (HH, BH) => {
        const LH = HH[BH.row];
        let AH = (LS(HH) - BS(LH)) / 2;
        for (let rH = 0; rH < BH.col; rH++) AH += LH[rH].width;
        return AH + LH[BH.col].width / 2
      },
      rS = (HH, BH, LH) => {
        let AH = 0,
          rH = 1 / 0;
        for (let SH = 0; SH < HH[BH].length; SH++) {
          const hH = Math.abs(AS(HH, {
            row: BH,
            col: SH
          }) - LH);
          hH < rH - 1e-9 && (AH = SH, rH = hH)
        }
        return AH
      },
      SS = (HH, BH) => {
        const LH = Math.max(0, Math.min(HH.length - 1, BH.row));
        return {
          row: LH,
          col: Math.max(0, Math.min(HH[LH].length - 1, BH.col))
        }
      },
      hS = (HH, BH, LH) => "once" === HH && BH - LH <= 400 ? "caps" : "off" === HH ? "once" : "off",
      tS = (HH, BH) => "once" === HH && (HH => HH.toLowerCase() !== HH.toUpperCase())(BH) ? "off" : HH,
      zS = (HH, BH, LH) => {
        if ("symbols" === BH || "off" === LH) return HH;
        const AH = HH.toUpperCase();
        return 1 === AH.length ? AH : HH
      };
    var CS = LH(9339);
    const ES = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const XS = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(HH) {
          return !(HH - this.lastSendMs < 2e3) && (this.lastSendMs = HH, !0)
        }
      },
      GS = {
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
      YS = ["qh", "nameTag"],
      uS = HH => {
        const BH = HH.target instanceof HTMLTextAreaElement && !YS.includes(HH.kind);
        return HS(HH.page, "chat" === HH.kind ? ES.length : 0, BH)
      },
      QS = HH => {
        const BH = HH.getBoundingClientRect(),
          LH = window.innerHeight,
          AH = BH.top + BH.height / 2 < LH / 2 ? "bottom" : "top",
          rH = "bottom" === AH ? LH - BH.bottom - 6 : BH.top - 6;
        return {
          placement: AH,
          maxHeightPx: Math.min(.46 * LH, Math.max(.3 * LH, rH))
        }
      },
      WS = HH => {
        (0, mL.l)(HH) ? (0, mL.e)().close(): (yA.noteChosenStop(HH), HH.blur())
      };
    class MS {
      constructor(HH) {
        this.host = HH, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(HH, BH) {
        this.phraseTexts = HH, this.phrasesFill = BH
      }
      pressKey(HH) {
        const BH = this.host.getState(),
          LH = uS(BH),
          AH = LH[HH.row][HH.col];
        this.host.setState({
          ...BH,
          focus: HH,
          preferredX: AS(LH, HH)
        }), "char" === AH.type ? this.typeChar(AH.char) : "command" === AH.type ? this.runCommand(AH.command) : this.sendPhrase(AH.phraseIndex)
      }
      runCommand(HH) {
        const BH = this.host.getState();
        switch (HH) {
          case "backspace":
            (0, aH.d)(BH.target);
            break;
          case "space":
            (0, aH.h)(BH.target, " ");
            break;
          case "newline":
            (0, aH.h)(BH.target, "\n");
            break;
          case "caretLeft":
            (0, aH.o)(BH.target, -1);
            break;
          case "caretRight":
            (0, aH.o)(BH.target, 1);
            break;
          case "shift": {
            const HH = performance.now();
            this.host.setState({
              ...BH,
              shift: hS(BH.shift, HH, this.lastShiftPressMs)
            }), this.lastShiftPressMs = HH;
            break
          }
          case "page":
          case "otherPage": {
            const LH = yr(BH.page, BH.accentsFirst)[HH];
            this.host.setState({
              ...BH,
              page: LH,
              focus: SS(uS({
                ...BH,
                page: LH
              }), BH.focus)
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
            (0, mL.l)(BH.target) && (0, mL.e)().selectNextChannel()
        }
      }
      submit() {
        var HH, BH;
        const {
          target: LH
        } = this.host.getState();
        this.host.hide(), (0, mL.l)(LH) ? (0, mL.e)().submit() : (yA.noteChosenStop(LH), null === (HH = (BH = (0, mL.h)(LH)).submit) || void 0 === HH || HH.call(BH), document.activeElement === LH && LH.blur())
      }
      close() {
        const {
          target: HH
        } = this.host.getState();
        this.host.hide(), WS(HH)
      }
      typeChar(HH) {
        const {
          target: BH,
          page: LH,
          shift: AH
        } = this.host.getState();
        (0, aH.h)(BH, zS(HH, LH, AH)), this.host.setState({
          ...this.host.getState(),
          shift: tS(AH, HH)
        })
      }
      sendPhrase(HH) {
        if (this.phrasesFill) {
          const {
            target: BH
          } = this.host.getState(), LH = this.phraseTexts[HH];
          LH && (BH.setSelectionRange(0, BH.value.length), (0, aH.h)(BH, LH))
        } else XS.claim(performance.now()) && (this.host.hide(), (0, mL.e)().sendLine(this.phraseTexts[HH]))
      }
    }
    var xS = LH(9361);
    const vS = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      PS = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class TS {
      constructor(HH, BH) {
        this.host = HH, this.editor = BH, this.lastDirection = null, this.navRepeat = new uH.b((0, QH.d)(vS)), this.commandRepeats = new Map(Dr.filter((HH => {
          let {
            repeats: BH
          } = HH;
          return BH
        })).map((HH => {
          let {
            command: BH
          } = HH;
          return [BH, (0, QH.d)(PS)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const HH of this.commandRepeats.values()) HH.reset()
      }
      onVisibleFrame(HH) {
        const BH = performance.now();
        for (const {
            command: rH,
            action: SH
          }
          of Dr) {
          const LH = (0, EH.k)(SH),
            AH = this.commandRepeats.get(rH);
          if ((AH ? AH.update(HH.isHeld(LH), BH) : HH.wasPressed(LH)) && (this.editor.runCommand(rH), !this.host.getState().visible)) return
        }
        if (HH.wasPressed((0, EH.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const LH = this.readNavDirection(HH);
        this.lastDirection = LH;
        const AH = this.navRepeat.update(LH, BH);
        AH && this.navigate(AH)
      }
      onHiddenFrame(HH, BH) {
        var LH;
        if (HH.wasPressed((0, EH.k)("keyboardClose"))) return void WS(BH);
        const AH = (0, EH.k)("keyboardType");
        if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void this.host.open(BH);
        const rH = this.readNavDirection(HH),
          SH = null !== rH && rH !== this.lastDirection;
        if (this.lastDirection = rH, !SH || (0, mL.l)(BH)) return;
        const hH = (null === (LH = EA()) || void 0 === LH ? void 0 : LH.root.contains(BH)) || null !== BH.closest(".EntireInventoryWrapper");
        WS(BH), hH && XH.b.handOffHeldInput()
      }
      navigate(HH) {
        const BH = this.host.getState();
        if ("Up" === HH && 0 === BH.focus.row && "chat" === BH.kind) return (0, mL.e)().stepHistory(), void this.host.setState({
          ...BH
        });
        const LH = ((HH, BH, LH, AH) => {
          if ("Left" === LH || "Right" === LH) {
            const AH = HH[BH.row].length,
              rH = (BH.col + ("Right" === LH ? 1 : -1) + AH) % AH,
              SH = {
                row: BH.row,
                col: rH
              };
            return {
              pos: SH,
              preferredX: AS(HH, SH)
            }
          }
          const rH = (BH.row + ("Down" === LH ? 1 : -1) + HH.length) % HH.length;
          return {
            pos: {
              row: rH,
              col: rS(HH, rH, AH)
            },
            preferredX: AH
          }
        })(uS(BH), BH.focus, HH, BH.preferredX);
        this.host.setState({
          ...BH,
          focus: LH.pos,
          preferredX: LH.preferredX
        })
      }
      readNavDirection(HH) {
        for (const BH of uH.y)
          if (HH.isHeld(BH)) return BH;
        return (0, uH.Z)((0, uH.f)(HH.leftStick, (0, GH.g)().moveDeadzone))
      }
    }
    const US = ["Up", "Down", "Left", "Right"],
      VS = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const OS = new class {
      constructor() {
        this.state = GS, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new MS(this), this.padInput = new TS(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(HH) {
        const BH = HH.visible !== this.state.visible;
        this.state = HH;
        for (const LH of this.listeners) LH();
        BH && CH.k.AX(xS.c, HH.visible)
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      install() {
        const HH = XH.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, aH.k)(document.activeElement),
            onFrame: HH => {
              this.onFrame(HH)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: HH => US.includes(HH) || !this.state.visible && HH === (0, EH.k)("keyboardType")
          }),
          BH = HH => {
            const BH = HH.target;
            (0, aH.k)(BH) && (BH === this.pendingChatInput || (0, YH.j)() ? this.open(BH) : this.state.visible && BH !== this.state.target && (this.ownedField = null, this.hide()))
          },
          LH = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          AH = HH => {
            HH.isTrusted && this.state.visible && (HH => !HH.repeat && !VS.has(HH.key) && !(0, CS.b)(HH.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(HH.key))(HH) && this.hide()
          },
          rH = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...QS(this.state.target)
            })
          };
        document.addEventListener("focusin", BH, !0), document.addEventListener("focusout", LH, !0), window.addEventListener("keydown", AH, !0), window.addEventListener("resize", rH);
        const SH = CH.k.subscribe(fr.c, (() => {
            this.openChat()
          })),
          hH = CH.k.subscribe(xS.e, (HH => {
            this.openForField(HH)
          }));
        return () => {
          HH(), document.removeEventListener("focusin", BH, !0), document.removeEventListener("focusout", LH, !0), window.removeEventListener("keydown", AH, !0), window.removeEventListener("resize", rH), CH.k.unsubscribe(SH), CH.k.unsubscribe(hH), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const HH = (0, mL.e)();
        HH ? document.activeElement !== HH.input ? (this.clearPendingChat(), this.pendingChatInput = HH.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), HH.open()) : this.open(HH.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(HH) {
        (0, aH.k)(HH) ? (document.activeElement !== HH && HH.focus(), document.activeElement === HH && this.open(HH)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", HH)
      }
      open(HH) {
        var BH;
        if (this.clearPendingChat(), this.ownedField = HH, this.state.visible && this.state.target === HH) return;
        this.restoreInputMode(), (0, aH.p)(HH), this.savedInputMode = HH.getAttribute("inputmode"), HH.setAttribute("inputmode", "none");
        const LH = {
          ...GS,
          visible: !0,
          target: HH,
          kind: (0, mL.l)(HH) ? "chat" : null !== (BH = (0, mL.h)(HH).kind) && void 0 !== BH ? BH : null,
          accentsFirst: (AH = Mr.g.get().getCurrentLanguageCode(), pr.has(AH)),
          ...QS(HH)
        };
        var AH;
        const rH = uS(LH),
          SH = ((HH, BH) => {
            for (let LH = 0; LH < HH.length; LH++) {
              const AH = HH[LH].findIndex((HH => "char" === HH.type && HH.char === BH));
              if (-1 !== AH) return {
                row: LH,
                col: AH
              }
            }
            return null
          })(rH, "q");
        this.padInput.reset(), this.setState({
          ...LH,
          focus: SH,
          preferredX: AS(rH, SH)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(GS))
      }
      onFrame(HH) {
        if (this.releaseLostField()) return;
        const BH = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(HH) : (0, aH.k)(BH) && this.padInput.onHiddenFrame(HH, BH)
      }
      releaseLostField() {
        const HH = this.ownedField;
        return !(null === HH || HH.isConnected && document.activeElement === HH) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: HH
        } = this.state;
        HH && (null === this.savedInputMode ? HH.removeAttribute("inputmode") : HH.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var bS = LH(2991);
    const kS = new Map(Dr.map((HH => {
        let {
          command: BH,
          action: LH
        } = HH;
        return [BH, LH]
      }))),
      mS = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      oS = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        qh: "controller:keyboardTargetBookTitle"
      },
      IS = HH => {
        const BH = (() => {
          const [, HH] = (0, qH.useReducer)((HH => HH + 1), 0);
          return HH
        })();
        (0, qH.useEffect)((() => {
          if (!HH) return;
          const LH = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const rH of LH) HH.addEventListener(rH, BH);
          document.addEventListener("selectionchange", BH);
          const AH = new MutationObserver(BH);
          return AH.observe(HH, {
            attributeFilter: ["placeholder"]
          }), () => {
            AH.disconnect();
            for (const AH of LH) HH.removeEventListener(AH, BH);
            document.removeEventListener("selectionchange", BH)
          }
        }), [HH, BH])
      },
      fS = HH => {
        HH.preventDefault()
      },
      lS = HH => {
        "mouse" !== HH.pointerType && HH.preventDefault()
      },
      KS = () => {
        var HH;
        const {
          t: BH
        } = (0, rH.B)(), LH = (() => {
          const [HH, BH] = (0, qH.useState)(OS.getState());
          return (0, qH.useEffect)((() => OS.subscribe((() => {
            BH(OS.getState())
          }))), []), HH
        })(), AH = (0, YH.s)(), SH = (0, qH.useRef)(null);
        (0, GH.n)(), (0, YH.v)(), (0, qH.useEffect)((() => {
          const HH = OS.install(),
            BH = null;
          return () => {
            HH(), null === BH || void 0 === BH || BH()
          }
        }), []);
        const hH = (0, qH.useMemo)((() => ES.map((HH => BH(HH)))), [BH]),
          tH = LH.visible && "chat" === LH.kind ? LH.target : null;
        IS(tH);
        const zH = null !== (HH = null === tH || void 0 === tH ? void 0 : tH.value) && void 0 !== HH ? HH : "",
          CH = ((HH, BH, LH) => {
            if (!HH.startsWith("/")) return [];
            const AH = [];
            for (let rH = BH.length - 1; rH >= 0 && AH.length < LH; rH--) {
              const LH = BH[rH].trim();
              LH.startsWith(HH) && LH !== HH && !AH.includes(LH) && AH.push(LH)
            }
            return AH
          })(zH, zH.startsWith("/") ? (0, bS.d)() : [], ES.length),
          XH = zH.startsWith("/"),
          uH = XH ? ES.map(((HH, BH) => {
            var LH;
            return null !== (LH = CH[BH]) && void 0 !== LH ? LH : ""
          })) : hH;
        if ((0, qH.useEffect)((() => {
            OS.editor.setPhraseRow(uH, XH)
          })), (0, qH.useEffect)((() => {
            const HH = SH.current;
            if (HH) return HH.addEventListener("touchstart", fS, {
              passive: !1
            }), () => {
              HH.removeEventListener("touchstart", fS)
            }
          }), [LH.visible]), !LH.visible) return null;
        const QH = uS(LH),
          WH = LS(QH),
          MH = HH => "char" === HH.type ? zS(HH.char, LH.page, LH.shift) : "phrase" === HH.type ? uH[HH.phraseIndex] : (HH => {
            switch (HH) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === LH.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return mS[yr(LH.page, LH.accentsFirst)[HH]];
              case "space":
                return BH("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return BH("chat" === LH.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(HH.command),
          xH = HH => {
            OS.editor.pressKey(HH)
          };
        return (0, RH.jsxs)("div", {
          ref: SH,
          className: NH()(mL.n, "top" === LH.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: LH.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": QH.length,
            "--pad-keyboard-height": `${LH.maxHeightPx}px`
          },
          onPointerDown: lS,
          onMouseDown: fS,
          children: [(0, RH.jsx)(cS, {
            target: LH.target,
            label: LH.kind ? BH(oS[LH.kind]) : LH.target.placeholder || BH("controller:keyboardTargetText")
          }), (0, RH.jsx)("div", {
            className: "PadKeyboardRows",
            children: QH.map(((HH, BH) => (0, RH.jsx)("div", {
              className: NH()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === HH[0].type
              }),
              children: HH.map(((HH, rH) => {
                const SH = AH && LH.focus.row === BH && LH.focus.col === rH,
                  hH = "command" === HH.type ? kS.get(HH.command) : void 0;
                return (0, RH.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: HH.width / WH * 100 + "%"
                  },
                  children: (0, RH.jsxs)("div", {
                    className: NH()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: SH,
                      PadKeyboardKeyCommand: "command" === HH.type,
                      PadKeyboardKeyPhrase: "phrase" === HH.type,
                      PadKeyboardKeyActive: "command" === HH.type && "shift" === HH.command && "off" !== LH.shift,
                      PadKeyboardKeySubmit: "command" === HH.type && "submit" === HH.command
                    }),
                    role: "button",
                    onClick: () => {
                      xH({
                        row: BH,
                        col: rH
                      })
                    },
                    onTouchEnd: HH => {
                      var LH, AH;
                      HH.preventDefault(), LH = HH.changedTouches[0], AH = HH.currentTarget.getBoundingClientRect(), LH && LH.clientX >= AH.left && LH.clientX <= AH.right && LH.clientY >= AH.top && LH.clientY <= AH.bottom && xH({
                        row: BH,
                        col: rH
                      })
                    },
                    children: [(0, RH.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: MH(HH)
                    }), AH && hH && (0, RH.jsx)(Ur, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, EH.k)(hH)
                    })]
                  })
                }, rH)
              }))
            }, BH)))
          })]
        })
      },
      cS = HH => {
        let {
          target: BH,
          label: LH
        } = HH;
        IS(BH);
        const AH = (0, qH.useRef)(null),
          rH = (0, qH.useRef)(null),
          SH = BH instanceof HTMLTextAreaElement;
        (0, qH.useLayoutEffect)((() => {
          const HH = AH.current,
            BH = rH.current;
          SH ? HH.scrollTop = BH.offsetTop - HH.clientHeight / 2 : HH.scrollLeft = BH.offsetLeft - HH.clientWidth / 2
        }));
        const {
          value: hH,
          start: tH,
          end: zH
        } = (0, aH.s)(BH), CH = "password" === BH.type ? "\u2022".repeat(hH.length) : hH;
        return (0, RH.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, RH.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: LH
          }), (0, RH.jsxs)("div", {
            ref: AH,
            className: NH()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: SH
            }),
            children: [(0, RH.jsx)("span", {
              children: CH.slice(0, tH)
            }), (0, RH.jsx)("span", {
              ref: rH,
              className: "PadKeyboardCaret"
            }), tH !== zH && (0, RH.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: CH.slice(tH, zH)
            }), (0, RH.jsx)("span", {
              children: CH.slice(zH)
            }), 0 === CH.length && BH.placeholder && BH.placeholder !== LH && (0, RH.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: BH.placeholder
            })]
          })]
        })
      };
    var eS = LH(1390),
      qS = LH(3795);
    const gS = function() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return BH.map(EH.k)
      },
      NS = (HH, BH) => {
        const LH = wL(HH);
        return LH ? [{
          glyphs: [LH],
          labelKey: BH
        }] : []
      },
      RS = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      jS = "--pad-hint-bar-clearance",
      nS = "[data-pad-hint-bar-avoid]",
      FS = HH => {
        const BH = [];
        for (const LH of HH)(0, pH.u)(LH) && BH.push(LH.getBoundingClientRect());
        return BH
      },
      DS = HH => {
        if (!HH) return null;
        const BH = EA(),
          LH = BH ? FS(((HH, BH) => {
            const LH = HH.closest(nS);
            return LH ? [LH] : ("popup" === BH ? document : HH).querySelectorAll(nS)
          })(BH.root, BH.layer.kind)) : [],
          AH = !BH || BH.root.hasAttribute("data-pad-shows-hud");
        if (((0, qS.f)(null === BH || void 0 === BH ? void 0 : BH.layer.kind, (0, qS.g)()) || AH) && LH.push(...FS(document.querySelectorAll(RS.join(",")))), 0 === LH.length) return null;
        const {
          width: rH,
          height: SH
        } = HH.getBoundingClientRect(), hH = window.innerHeight - 8, tH = (0, qS.j)(hH, {
          width: rH,
          height: SH
        }, window.innerWidth / 2, LH, 8);
        return tH === hH ? null : Math.round(window.innerHeight - tH)
      },
      wS = HH => {
        const BH = document.documentElement.style,
          LH = HH ? `${Math.round(window.innerHeight-HH.getBoundingClientRect().top)}px` : "";
        BH.getPropertyValue(jS) !== LH && (LH ? BH.setProperty(jS, LH) : BH.removeProperty(jS))
      },
      ZS = () => {
        const {
          t: HH
        } = (0, rH.B)(), {
          hideButtonHints: BH
        } = (0, GH.n)(), LH = (0, YH.s)(), [AH, SH] = (0, qH.useState)(!1), [hH, CH] = (0, qH.useState)([]), [QH, WH] = (0, qH.useState)(null), MH = (0, qH.useRef)(null), xH = (0, qH.useRef)(null);
        (0, Wr.d)(xS.c, (HH => {
          SH(HH)
        })), (0, Wr.d)(qS.i, (() => {
          var HH;
          null === (HH = xH.current) || void 0 === HH || HH.call(xH)
        }));
        const vH = LH && !BH && !AH;
        return (0, qH.useEffect)((() => {
          if (!vH) return;
          let HH = null;
          const BH = () => {
            const BH = (() => {
                var HH;
                const BH = XH.b.getActiveConsumerName(),
                  LH = (0, qS.d)();
                if (LH) {
                  const HH = (0, EH.k)(LH),
                    BH = "emoteWheel" === LH && "wheel" === (0, GH.g)().emoteButton || !(0, uH.G)(XH.b.getLastFrame().values, HH) ? {
                      glyphs: gS("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [HH],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, EH.z)(HH)],
                    labelKey: "controller:wheelChoose"
                  }, BH, {
                    glyphs: gS("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const AH = EA();
                if (!AH || "focus" !== BH && "cursor" !== BH) return (0, qS.b)(EH.k);
                const rH = [],
                  SH = {
                    glyphs: gS("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  hH = (0, wH.z)(AH.root),
                  tH = hH ? !(0, pH.x)(hH) : Boolean(AH.layer.close),
                  CH = !hH && AH.layer.closeLabelKey ? AH.layer.closeLabelKey : SH.labelKey,
                  YH = tH ? [{
                    ...SH,
                    labelKey: CH
                  }] : [],
                  QH = fL(AH.layer.kind) ? [{
                    glyphs: gS("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === BH) return rH.push({
                  glyphs: gS("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), rH.push({
                  glyphs: gS("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), rH.push(...YH), rH.push(...QH), rH.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), bA() && rH.push({
                  glyphs: gS("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), rH;
                const WH = yA.getFocused();
                WH && (0, fA.d)(WH) ? rH.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : WH && (0, wH.I)(WH) ? rH.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : rH.push({
                  glyphs: gS("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const MH = WH ? null === (HH = GL(WH)) || void 0 === HH ? void 0 : HH.dataset.padSecondary : void 0;
                MH && rH.push({
                  glyphs: gS("menuSecondary"),
                  labelKey: MH
                }), rH.push(...null !== WH && void 0 !== WH && WH.closest("[data-pad-friends-column]") ? [SH] : YH), rH.push(...QH);
                const xH = "home" === AH.layer.kind;
                aL(AH.root) || !qL(AH.root) && !sL(AH) ? xH && rH.push({
                  glyphs: gS("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : rH.push({
                  glyphs: gS("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), xH && (rH.push(...NS("inventory", "controller:menusFriends")), MH || rH.push({
                  glyphs: gS("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), rH.push(...NS("pause", "controller:menusSettings")), rH.push(...NS("leaderboard", "controller:menusNotifications")));
                const vH = zH.c.get("openEverythingMenuName");
                return "inGame" === zH.c.get("gameState") && "popup" !== AH.layer.kind && null !== vH && ((0, zL.n)(vH) ? rH.push(...NS("leaderboard", "controller:menusClose")) : vH !== tL.o.LOBBY_LEADERBOARD && rH.push(...NS("leaderboard", "controller:menusLobby"))), rH.push({
                  glyphs: gS("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), rH
              })(),
              LH = DS(MH.current),
              AH = ((HH, BH) => `${HH.map((HH=>`${HH.glyphs.join("+")}:${HH.labelKey}`)).join("|")}@${BH}`)(BH, LH);
            AH !== HH && (HH = AH, (0, tH.unstable_batchedUpdates)((() => {
              CH(BH), WH(LH)
            }))), wS(MH.current)
          };
          BH(), xH.current = BH;
          const LH = requestAnimationFrame(BH),
            AH = setInterval(BH, 150);
          return () => {
            xH.current = null, cancelAnimationFrame(LH), clearInterval(AH), wS(null)
          }
        }), [vH]), (0, qH.useLayoutEffect)((() => {
          if (!vH) return;
          if (0 === hH.length) return void wS(null);
          const HH = DS(MH.current);
          HH === QH ? wS(MH.current) : WH(HH)
        }), [vH, hH, QH]), vH && 0 !== hH.length ? (0, RH.jsx)("div", {
          ref: MH,
          className: "PadButtonHintBar SmallTextBold",
          style: null === QH ? void 0 : {
            bottom: QH
          },
          "aria-hidden": !0,
          children: hH.map((BH => (0, RH.jsxs)("div", {
            className: "PadButtonHint",
            children: [BH.glyphs.map((HH => (0, RH.jsx)(Ur, {
              glyph: HH,
              className: "PadButtonHintGlyph"
            }, HH))), (0, RH.jsx)("span", {
              children: HH(BH.labelKey)
            })]
          }, BH.labelKey)))
        }) : null
      };
    var dS = LH(1797);
    const aS = [pH.e, "label", "[data-pad-slider]"].join(","),
      sS = "data-pad-cursor-probe",
      JS = HH => {
        var BH;
        const LH = (HH => {
          const BH = [];
          for (let AH = HH; AH && AH !== document.body && AH !== document.documentElement && (BH.push(AH), !(BH.length > 8)); AH = AH.parentElement);
          const LH = document.documentElement.classList.contains(YH.p) ? BH[BH.length - 1] : void 0;
          null === LH || void 0 === LH || LH.setAttribute(sS, "");
          try {
            return BH.map((HH => ({
              element: HH,
              cursor: getComputedStyle(HH).cursor
            })))
          } finally {
            null === LH || void 0 === LH || LH.removeAttribute(sS)
          }
        })(HH);
        if ("pointer" !== (null === (BH = LH[0]) || void 0 === BH ? void 0 : BH.cursor)) return null;
        let AH = 0;
        for (; AH + 1 < LH.length && "pointer" === LH[AH + 1].cursor;) AH++;
        return LH[AH].element
      },
      iS = (HH, BH, LH, AH) => {
        const rH = AH.root.contains(HH) ? AH.root : null;
        for (let SH = HH; SH && SH !== document.body && SH !== document.documentElement; SH = SH.parentElement) {
          if (SH instanceof HTMLElement && kH(SH, BH) && lH(SH, BH, LH)) return SH;
          if (SH === rH) break
        }
        return "home" === AH.layer.kind || "gamePage" === AH.layer.kind ? ((HH, BH) => {
          const LH = document.scrollingElement;
          return LH instanceof HTMLElement && ![document.documentElement, document.body].some((BH => {
            const LH = getComputedStyle(BH),
              AH = "y" === HH ? LH.overflowY : LH.overflowX;
            return "hidden" === AH || "clip" === AH
          })) && lH(LH, HH, BH) ? LH : null
        })(BH, LH) : null
      };
    const pS = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, QH.d)(uH.q), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const HH = XH.b.register({
              name: "cursor",
              isActive: () => "cursor" === kA(),
              onFrame: HH => {
                this.onFrame(HH)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: HH => (0, XH.e)(HH) || HH === (0, EH.k)("menuConfirm") && (0, wH.K)((0, YH.c)())
            }),
            BH = (0, LA.i)((HH => {
              const BH = HH.getRoot();
              BH && this.layerPoints.delete(BH), BH === this.layerRoot && (this.layerRoot = null)
            })),
            LH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (HH => {
              "gamepad" !== HH && this.active && !this.hidden && this.hide()
            }));
          return () => {
            HH(), BH(), CH.k.unsubscribe(LH), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, YH.j)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.AX()
        }
        activate(HH) {
          this.active = !0, this.hidden = !1;
          const BH = UA();
          !BH || BH.root && BH.root !== HH.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(HH), this.jumpTo(BH.point))
        }
        jumpTo(HH) {
          this.state = {
            x: HH.x,
            y: HH.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.AX())
        }
        onFrame(HH) {
          const BH = EA();
          if (!BH) return;
          if (this.active || this.activate(BH), this.followPage(BH)) return;
          this.followLayer(BH);
          const LH = HH.wokeDevice ? (0, YH.c)() : null;
          if (LH && this.jumpTo(LH), !(0, YH.j)()) return void this.hide();
          const AH = (0, EH.k)("menuToggleCursor");
          if (HH.wasPressed(AH)) return XH.b.consumeButton(AH), void TA(this.getHandoff(null));
          if (this.handBackToFocus(HH)) return;
          const rH = (0, EH.k)("menuConfirm"),
            SH = (0, EH.k)("menuSecondary");
          if (HH.wasPressed((0, EH.k)("menuBack"))) return (0, wH.l)(BH.root) || (0, wH.f)(BH.root) || XA(), void this.AX();
          if (pL(null, HH, BH)) return HH.wasReleased(rH) && this.press && (this.updateHit(!1), this.updateConfirm(HH, rH)), void this.AX();
          if (document.pointerLockElement) return void this.hide();
          const hH = mA() ? {
              x: 0,
              y: 0
            } : (HH => {
              const BH = (HH, BH) => (HH ? 1 : 0) - (BH ? 1 : 0);
              return {
                x: BH(HH.isHeld("Right"), HH.isHeld("Left")),
                y: BH(HH.isHeld("Down"), HH.isHeld("Up"))
              }
            })(HH),
            tH = (0, GH.g)().moveDeadzone,
            zH = ((HH, BH) => {
              const LH = (0, uH.f)(HH, PH(BH));
              return Math.hypot(LH.x, LH.y)
            })(HH.leftStick, tH) > 0 || 0 !== hH.x || 0 !== hH.y;
          if (this.hidden) {
            const BH = HH.wasPressed(rH),
              LH = HH.wasPressed(SH);
            if (!zH && !VH(HH.rightStick) && !BH && !LH && !HH.wokeDevice) return void this.AX();
            if (this.hidden = !1, this.updateHit(!1), BH || LH) return BH && (this.press = {
              kind: "ignored"
            }, HH.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.AX()
          }
          this.movePendingPageStart(zH);
          const CH = this.getPoint();
          this.state = UH(this.state, {
            stick: HH.leftStick,
            moveDeadzone: tH,
            dpad: hH,
            dtMs: HH.dtMs,
            cursorSpeedPercent: (0, GH.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const QH = this.state.x !== CH.x || this.state.y !== CH.y,
            WH = [rH, SH].some((BH => HH.wasPressed(BH) || HH.wasReleased(BH)));
          (QH || WH || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(QH), this.updateConfirm(HH, rH), this.updateSecondary(HH, SH), this.updateScroll(HH, BH), this.AX()
        }
        followPage(HH) {
          const BH = "home" === HH.layer.kind || "gamePage" === HH.layer.kind,
            LH = this.page;
          if (this.page = BH ? {
              key: (0, LA.q)(HH.layer),
              root: HH.root
            } : null, !this.page || !LH || LH.root !== HH.root || LH.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(HH), "hybrid" === PA()) return MA = null, QA = null, xA.lock(), !0;
          const {
            key: AH
          } = this.page;
          return this.pendingPageStart = {
            root: HH.root,
            key: AH,
            returning: yA.notePageEnteredByCursor(AH),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(HH) {
          const BH = this.pendingPageStart;
          if (!BH) return;
          if (HH || BH.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const LH = BH.returning ? yA.recallStop(BH.root, BH.key) : null;
          if (!LH && BH.returning && performance.now() - BH.enteredAtMs < 1e3) return;
          const AH = null !== LH && void 0 !== LH ? LH : yA.pickInitial(BH.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: BH.enteredAtMs
          });
          AH && (this.pendingPageStart = null, this.jumpTo((0, wH.C)(AH)))
        }
        setLayer(HH) {
          this.layerRoot = HH.root, this.layerOrder = HH.order
        }
        followLayer(HH) {
          var BH;
          if (HH.root === this.layerRoot) return;
          null !== (BH = this.layerRoot) && void 0 !== BH && BH.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const LH = this.layerPoints.get(HH.root),
            AH = LH && HH.order <= this.layerOrder ? LH : yA.getLayerStartPoint(HH.root);
          this.setLayer(HH), this.jumpTo(AH)
        }
        getHandoff(HH) {
          var BH;
          return {
            point: this.getPoint(),
            element: null !== (BH = this.interactive) && void 0 !== BH ? BH : this.findDraggedSliderNearby(),
            direction: HH
          }
        }
        findDraggedSliderNearby() {
          const HH = this.draggedSlider;
          if (null === HH || void 0 === HH || !HH.isConnected) return null;
          const BH = HH.getBoundingClientRect(),
            {
              y: LH
            } = this.getPoint();
          return LH >= BH.top - 40 && LH <= BH.bottom + 40 ? HH : null
        }
        handBackToFocus(HH) {
          if (!mA()) return !1;
          const BH = uH.y.find((BH => HH.wasPressed(BH)));
          return !!BH && (LH = this.getHandoff(BH), MA = YA(LH), QA = null, xA.lock(), XH.b.handOffHeldInput(), !0);
          var LH
        }
        getAssistContext() {
          const HH = this.interactive;
          if (null === HH || void 0 === HH || !HH.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const BH = HH.getBoundingClientRect();
          if (BH.width > .4 * window.innerWidth || BH.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const LH = (0, GH.g)().cursorMagnetism && !(0, dS.e)(HH) && !HH.closest("[data-pad-slider]"),
            AH = this.magnet && this.magnet !== HH && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : BH;
          return {
            overInteractive: !0,
            magnetTarget: LH ? {
              x: AH.left + AH.width / 2,
              y: AH.top + AH.height / 2
            } : null
          }
        }
        updateHit(HH) {
          this.lastHitTestMs = performance.now();
          const BH = this.getPoint(),
            LH = document.elementFromPoint(BH.x, BH.y),
            AH = LH && !(0, MH.q)(LH) && (HH => {
              var BH;
              const LH = EA();
              return !(LH && !LH.root.contains(HH) && !HH.closest(".tooltip-container")) || !(null !== (BH = document.getElementById("root")) && void 0 !== BH && BH.contains(HH))
            })(LH) ? LH : null;
          if (AH !== this.hit) return (0, wH.r)(this.hit, AH, BH), this.hit = AH, void this.setInteractive(AH ? (HH => {
            const BH = HH.closest(aS);
            if (BH) {
              var LH, AH;
              const HH = null !== (LH = null === (AH = BH.parentElement) || void 0 === AH ? void 0 : AH.closest("[data-pad-focusable]")) && void 0 !== LH ? LH : BH;
              return (0, pH.x)(HH) ? {
                element: null,
                magnet: null
              } : {
                element: HH,
                magnet: BH
              }
            }
            const rH = JS(HH);
            return {
              element: rH,
              magnet: rH
            }
          })(AH) : {
            element: null,
            magnet: null
          });
          HH && AH && (0, wH.r)(AH, AH, BH)
        }
        setInteractive(HH) {
          let {
            element: BH,
            magnet: LH
          } = HH;
          this.interactive = BH, this.magnet = LH
        }
        clearHover() {
          this.hit && (0, wH.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const HH = this.hit;
          if (!HH || (0, wH.I)(HH)) return {
            kind: "ignored"
          };
          const BH = (0, fA.d)(HH),
            LH = HH.closest("[data-pad-slider]");
          return BH && LH ? {
            kind: "slider",
            slider: LH,
            adjuster: BH
          } : ((0, wH.t)(HH, this.getPoint()), {
            kind: "pointer",
            target: HH
          })
        }
        applySliderFraction(HH) {
          var BH;
          const LH = HH.slider.getBoundingClientRect(),
            AH = LH.height > LH.width,
            rH = null === (BH = HH.slider.querySelector("[data-pad-slider-handle]")) || void 0 === BH ? void 0 : BH.getBoundingClientRect(),
            SH = rH ? AH ? rH.height : rH.width : 0,
            hH = (AH ? LH.height : LH.width) - SH;
          if (hH <= 0) return;
          const tH = AH ? LH.bottom - SH / 2 - this.state.y : this.state.x - LH.left - SH / 2;
          HH.adjuster.setFraction(Math.max(0, Math.min(1, tH / hH)))
        }
        updateConfirm(HH, BH) {
          HH.wasPressed(BH) && (this.press = HH.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const LH = this.press;
          if (!LH) return;
          if (HH.isHeld(BH)) return "slider" === LH.kind && this.applySliderFraction(LH), void this.updateRepeat();
          this.press = null;
          const AH = this.repeated;
          if (this.endRepeat(), !HH.wasReleased(BH)) return void this.endPressWithoutClick(LH);
          const rH = this.getPoint(),
            SH = this.hit;
          if ("slider" === LH.kind && LH.adjuster.endDrag(), "pointer" === LH.kind) {
            const HH = null !== SH && void 0 !== SH ? SH : LH.target.isConnected ? LH.target : null;
            HH && (0, wH.v)(HH, rH);
            const BH = SH && LH.target.isConnected && !AH ? ((HH, BH) => {
              for (let LH = HH; LH; LH = LH.parentElement)
                if (LH.contains(BH)) return LH;
              return null
            })(LH.target, SH) : null;
            BH && (yA.noteCursorActivation(BH), (0, MH.h)(BH, new MouseEvent("click", (0, wH.U)(rH, 0, 0))), (0, wH.h)(BH), (0, wH.S)(BH) && (0, wH.O)(BH))
          }
        }
        beginRepeat() {
          var HH, BH, LH;
          const AH = null !== (HH = null === (BH = this.hit) || void 0 === BH ? void 0 : BH.closest("[data-pad-repeat]")) && void 0 !== HH ? HH : null;
          this.repeatStop = AH, this.repeatKey = null !== (LH = null === AH || void 0 === AH ? void 0 : AH.getAttribute("data-pad-repeat")) && void 0 !== LH ? LH : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const HH = this.repeatStop;
          if (!HH) return;
          const BH = this.hit;
          HH.isConnected && !(0, pH.x)(HH) && HH.getAttribute("data-pad-repeat") === this.repeatKey && BH && HH.contains(BH) ? HH.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, yA.noteCursorActivation(HH), (0, MH.h)(HH, new MouseEvent("click", (0, wH.U)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(HH) {
          "slider" === HH.kind && HH.adjuster.endDrag(), "pointer" === HH.kind && HH.target.isConnected && (0, wH.v)(HH.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(HH, BH) {
          HH.wasPressed(BH) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !HH.isHeld(BH) && (this.secondaryArmed = !1, HH.wasReleased(BH) && this.hit && (0, wH.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(HH, BH) {
          const LH = OH(HH.rightStick, HH.dtMs);
          if (0 === LH.x && 0 === LH.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + LH.x,
            y: this.scrollRemainder.y + LH.y
          };
          const AH = Math.trunc(this.scrollRemainder.x),
            rH = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - AH,
            y: this.scrollRemainder.y - rH
          };
          const SH = this.hit;
          if (!SH) return;
          let hH = !1;
          if (0 !== rH) {
            const HH = iS(SH, "y", rH > 0 ? 1 : -1, BH);
            HH && (HH.scrollBy({
              top: rH,
              behavior: "instant"
            }), hH = !0)
          }
          if (0 !== AH) {
            const HH = iS(SH, "x", AH > 0 ? 1 : -1, BH);
            HH && (HH.scrollBy({
              left: AH,
              behavior: "instant"
            }), hH = !0)
          }
          hH && (this.lastHitTestMs = -1 / 0)
        }
        AX() {
          dH.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      yS = () => {
        const HH = (0, qH.useMemo)((() => new FH), []),
          BH = (0, YH.s)();
        return (0, qH.useEffect)((() => {
          if (!BH) return;
          let LH = 0,
            AH = {
              of: null,
              atMs: 0,
              list: []
            };
          const rH = document.getElementsByClassName(oA),
            SH = HH => {
              for (const BH of [...rH]) BH !== HH && BH.classList.remove(oA)
            },
            hH = () => {
              var BH;
              LH = requestAnimationFrame(hH);
              const rH = (() => {
                const HH = yA.getFocused();
                if (yA.isActive() && null !== HH && void 0 !== HH && HH.isConnected) return HH;
                const BH = pS.getHighlighted();
                return null !== BH && void 0 !== BH && BH.isConnected ? BH : null
              })();
              SH(rH), rH && !rH.classList.contains(oA) && rH.classList.add(oA);
              const tH = null !== (BH = null === rH || void 0 === rH ? void 0 : rH.closest("[data-pad-reticle-box]")) && void 0 !== BH ? BH : rH;
              HH.show(tH ? ((HH, BH) => {
                let LH = HH.left,
                  AH = HH.top,
                  rH = HH.right,
                  SH = HH.bottom;
                for (const hH of BH) {
                  if (!hH) continue;
                  const HH = cH(hH);
                  LH = Math.max(LH, HH.left), AH = Math.max(AH, HH.top), rH = Math.min(rH, HH.right), SH = Math.min(SH, HH.bottom)
                }
                return rH <= LH || SH <= AH ? null : {
                  left: LH,
                  top: AH,
                  width: rH - LH,
                  height: SH - AH
                }
              })(tH.getBoundingClientRect(), (HH => {
                const BH = performance.now();
                return (AH.of !== HH || BH - AH.atMs > 500) && (AH = {
                  of: HH,
                  atMs: BH,
                  list: [mH(HH, "y"), mH(HH, "x")]
                }), AH.list
              })(tH)) : null)
            };
          return LH = requestAnimationFrame(hH), () => {
            cancelAnimationFrame(LH), SH(null), HH.hide()
          }
        }), [BH, HH]), (0, RH.jsx)(DH, {
          placer: HH,
          className: "PadFocusRing"
        })
      },
      Hh = (HH, BH) => {
        HH.style.transform = `translate3d(${BH.x}px, ${BH.y}px, 0)`, HH.classList.toggle("Visible", BH.visible), HH.classList.toggle("Pressed", BH.pressed)
      },
      Bh = () => {
        const HH = (0, qH.useRef)(null);
        return (0, qH.useEffect)((() => {
          const BH = dH.subscribe((BH => {
            HH.current && Hh(HH.current, BH)
          }));
          return HH.current && Hh(HH.current, dH.get()), BH
        }), []), (0, RH.jsx)("div", {
          ref: HH,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, RH.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Lh = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Ah = "PadOverThirdParty",
      rh = new Set(Lh.map((HH => HH.id))),
      Sh = () => {
        const HH = Lh.map((HH => {
            let {
              id: BH,
              find: LH,
              startSelectors: AH
            } = HH;
            return (0, LA.m)({
              id: BH,
              kind: "popup",
              getRoot: () => {
                const HH = LH(),
                  BH = HH ? ((HH, BH) => {
                    var LH;
                    for (const AH of BH) {
                      const BH = HH.querySelector(AH);
                      if (BH) return BH
                    }
                    return null !== (LH = [...HH.querySelectorAll("button")].find((HH => !HH.matches(".fc-cta-consent")))) && void 0 !== LH ? LH : null
                  })(HH, AH) : null;
                if (HH && BH && !BH.hasAttribute("data-pad-default-focus")) {
                  for (const BH of HH.querySelectorAll("[data-pad-default-focus]")) BH.removeAttribute("data-pad-default-focus");
                  for (const BH of HH.querySelectorAll("[data-pad-hint-bar-avoid]")) BH.removeAttribute("data-pad-hint-bar-avoid");
                  BH.setAttribute("data-pad-default-focus", ""), ((HH, BH) => {
                    let LH = HH;
                    for (let AH = HH.parentElement; AH && BH.contains(AH) && !(AH.getBoundingClientRect().height >= window.innerHeight / 2); AH = AH.parentElement) LH = AH;
                    return LH
                  })(BH, HH).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return HH
              },
              close: null,
              memoryKey: null
            })
          })),
          BH = document.documentElement,
          LH = hH.i.onFrame((() => {
            const HH = (0, YH.j)() ? EA() : null,
              LH = !!HH && (AH = HH.layer, rh.has(AH.id));
            var AH;
            BH.classList.contains(Ah) !== LH && BH.classList.toggle(Ah, LH)
          }));
        return () => {
          for (const BH of HH) BH();
          LH(), BH.classList.remove(Ah)
        }
      },
      hh = "PadLargePointer",
      th = () => {
        (0, qH.useEffect)((() => {
          const HH = (0, MH.n)(document.body),
            BH = yA.install(),
            LH = pS.install(),
            AH = Sh();
          return () => {
            HH(), BH(), LH(), AH()
          }
        }), []);
        const {
          largePointer: HH
        } = (0, GH.n)(), BH = (0, eS.y)() && HH;
        return (0, qH.useEffect)((() => {
          if (BH) return document.documentElement.classList.add(hh), () => {
            document.documentElement.classList.remove(hh)
          }
        }), [BH]), (0, tH.createPortal)((0, RH.jsxs)(RH.Fragment, {
          children: [(0, RH.jsx)(ZS, {}), (0, RH.jsx)(yS, {}), (0, RH.jsx)(Bh, {})]
        }), document.body)
      };
    var zh = LH(9484),
      Ch = LH(9509),
      Eh = LH(9499);
    LH(9511);
    const Xh = (HH, BH) => {
        const [LH, AH] = (0, qH.useState)(!1), [rH, SH] = (0, qH.useState)(null), hH = (0, qH.useRef)(null), tH = (0, qH.useCallback)((HH => {
          hH.current = HH, SH(HH)
        }), []), zH = (0, qH.useCallback)((() => {
          AH(!1), tH(null)
        }), [tH]), EH = (0, qH.useCallback)((() => {
          AH(!0)
        }), []), XH = (0, qH.useCallback)(((HH, BH) => {
          tH((0, Eh.F)(HH, BH, hH.current))
        }), [tH]);
        (0, qH.useLayoutEffect)((() => (BH(LH), (0, qS.o)(HH, LH), CH.k.AX(qS.i), () => {
          BH(!1), (0, qS.o)(HH, !1), CH.k.AX(qS.i)
        })), [LH, HH, BH]), (0, Wr.d)("appManagerUpdated|activeInputDevice", (HH => {
          "gamepad" !== HH && zH()
        })), (0, Wr.d)("appManagerUpdated|gameState", (HH => {
          "inGame" !== HH && zH()
        }));
        const GH = () => {
          (0, zL.t)() && zH()
        };
        return (0, Wr.d)("appManagerUpdated|openEverythingMenuName", GH), (0, Wr.d)("appManagerUpdated|openInGameMenuName", GH), {
          open: LH,
          picked: rH,
          pickedRef: hH,
          show: EH,
          aim: XH,
          close: zH
        }
      },
      Gh = HH => {
        let {
          className: BH,
          slotCount: LH,
          picked: AH,
          slotLabel: rH,
          renderSlot: SH,
          centre: hH
        } = HH;
        const tH = Array.from({
          length: LH
        }, ((HH, BH) => BH));
        return (0, RH.jsx)("div", {
          className: NH()("EmoteWheelOverlay PadRadialWheel", BH),
          children: (0, RH.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Eh.u + "rem",
              height: 2 * Eh.u + "rem"
            },
            children: [(0, RH.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Eh.p} ${Eh.p}`,
              children: [tH.map((HH => (0, RH.jsx)("path", {
                d: (0, Eh.w)(HH, LH, Eh.i, Eh.m, Eh.n),
                className: NH()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: HH === AH
                }),
                "aria-label": rH(HH)
              }, HH))), (0, RH.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Eh.i,
                cy: Eh.i,
                r: Eh.n
              }), (0, RH.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Eh.i,
                cy: Eh.i,
                r: Eh.m
              }), null !== AH && (0, RH.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Eh.w)(AH, LH, Eh.i, Eh.m, Eh.n)
              })]
            }), tH.map((HH => {
              const BH = (0, Eh.C)(HH, LH);
              return (0, RH.jsx)("div", {
                className: NH()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: HH === AH
                }),
                style: {
                  left: `calc(50% + ${Eh.e*Math.cos(BH)}rem)`,
                  top: `calc(50% + ${Eh.e*Math.sin(BH)}rem)`
                },
                "aria-hidden": !0,
                children: SH(HH)
              }, HH)
            })), (0, RH.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: hH
            })]
          })
        })
      },
      Yh = ES.length,
      uh = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = Xh("chat", IL.q), LH = (0, qH.useMemo)((() => ES.map((BH => HH(BH)))), [HH]);
        return (0, Wr.d)(IL.p, (() => {
          BH.open || (0, zh.g)() || (0, Ch.r)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || !(0, mL.e)() || BH.show()
        })), (0, Wr.d)(IL.i, (HH => {
          BH.open && BH.aim(HH, Yh)
        })), (0, Wr.d)(IL.o, (() => {
          var HH;
          if (!BH.open) return;
          const AH = BH.pickedRef.current;
          null !== AH ? XS.claim(performance.now()) && (BH.close(), null === (HH = (0, mL.e)()) || void 0 === HH || HH.sendLine(LH[AH])) : BH.close()
        })), (0, Wr.d)(IL.k, BH.close), BH.open ? (0, RH.jsx)(Gh, {
          className: "QuickChatWheel",
          slotCount: Yh,
          picked: BH.picked,
          slotLabel: HH => LH[HH],
          renderSlot: HH => LH[HH],
          centre: null !== BH.picked ? LH[BH.picked] : HH("controller:quickChatPick")
        }) : null
      },
      Qh = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = Xh("actionButton", Ch.t), [LH, AH] = (0, qH.useState)([]);
        if ((0, Wr.d)(Ch.l, (HH => {
            BH.open || (0, zh.g)() || (0, IL.e)() || "inGame" !== zH.c.get("gameState") || (0, zL.t)() || (AH(HH), BH.show())
          })), (0, Wr.d)(Ch.d, (HH => {
            BH.open && BH.aim(HH, LH.length)
          })), (0, Wr.d)(Ch.i, (() => {
            if (!BH.open) return;
            const HH = BH.pickedRef.current;
            BH.close(), null !== HH && CH.k.AX(Ch.p, LH[HH])
          })), (0, Wr.d)(Ch.f, BH.close), !BH.open) return null;
        const SH = null !== BH.picked ? LH[BH.picked] : null;
        return (0, RH.jsx)(Gh, {
          className: "ActionWheel",
          slotCount: LH.length,
          picked: BH.picked,
          slotLabel: BH => {
            const AH = LH[BH];
            return "reload" === AH.kind ? HH("controller:gameplayReload") : "customButton" === AH.kind ? AH.description || AH.icon : "touchButton" === AH.kind && "string" === typeof AH.label ? AH.label : ""
          },
          renderSlot: HH => (0, RH.jsx)(Or, {
            action: LH[HH]
          }),
          centre: SH ? (0, RH.jsx)(Or, {
            action: SH
          }) : HH("controller:actionWheelPick")
        })
      };
    var Wh = LH(81);
    const Mh = () => ((0, qH.useEffect)((() => {
        var HH, BH;
        const LH = (0, MH.n)(document.getElementById("root")),
          AH = (0, YH.e)(),
          rH = (() => {
            const HH = [CH.k.subscribe(Br.g, (() => {
                Sr("blockBreak")
              })), CH.k.subscribe("damagedByOtherPlayer", (() => {
                Sr("damage")
              })), CH.k.subscribe("yourAttackHit", (HH => {
                let {
                  hitSelf: BH
                } = HH;
                BH || Sr("hit")
              }))],
              BH = hH.i.onActivePadChanged((HH => {
                HH && Sr("connect")
              }));
            return () => {
              for (const BH of HH) CH.k.unsubscribe(BH);
              BH()
            }
          })(),
          SH = (() => {
            const HH = new Xr({
              getVisitId: Er.c,
              peekVisitId: Er.peekVisitSessionId,
              readReportedVisitId: () => {
                const HH = Cr.f.getItem(Gr);
                return "string" === typeof HH ? HH : null
              },
              writeReportedVisitId: HH => {
                Cr.f.setItem(Gr, HH)
              },
              isPadActive: YH.j,
              getPadFamily: () => {
                var HH, BH;
                return null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null
              },
              canReport: tr.isBloxdGa4Ready,
              getInputType: zr.d,
              XX: tr.logControllerUsedToGtag
            });
            let BH = 0,
              LH = null;
            const AH = rH => {
                null === LH && ("notReady" !== HH.check(rH) || null !== LH || BH >= 20 || (BH++, LH = setTimeout((() => {
                  LH = null, AH(!1)
                }), 3e3)))
              },
              rH = CH.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                AH(!0)
              })),
              SH = (0, Er.k)((() => {
                BH = 0, AH(!0)
              }));
            return () => {
              CH.k.unsubscribe(rH), SH(), null !== LH && clearTimeout(LH)
            }
          })(),
          tH = hH.i.onFrame(((HH, BH, LH) => {
            const AH = (0, YH.o)(HH, LH);
            XH.b.dispatch(HH, BH, AH)
          }));
        let EH = null !== (HH = null === (BH = hH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : null;
        const uH = hH.i.onActivePadChanged((HH => {
            var BH, LH;
            (XH.b.reset(), (0, YH.q)(), CH.k.AX(hH.e, HH), (null !== (BH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== BH ? BH : null) !== EH) && (EH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.family) && void 0 !== LH ? LH : null, CH.k.AX(GH.b, (0, GH.g)()));
            !HH && (0, YH.j)() && (0, YH.r)(zH.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          QH = () => {
            "visible" !== document.visibilityState && XH.b.clear()
          },
          WH = () => {
            XH.b.clear()
          };
        document.addEventListener("visibilitychange", QH), window.addEventListener("blur", WH), hH.i.start(), (0, hr.j)();
        const xH = null;
        return () => {
          LH(), AH(), rH(), SH(), tH(), uH(), document.removeEventListener("visibilitychange", QH), window.removeEventListener("blur", WH), hH.i.stop(), null === xH || void 0 === xH || xH()
        }
      }), []), (0, RH.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, RH.jsx)(lr, {}), (0, RH.jsx)(nr, {}), (0, RH.jsx)(Fr, {}), (0, RH.jsx)(KS, {}), (0, RH.jsx)(th, {}), (0, RH.jsx)(uh, {}), (0, RH.jsx)(Qh, {})]
      })),
      xh = () => Wh.featureFlags.useControllerSupport ? (0, RH.jsx)(Mh, {}) : null;
    var vh = LH(8882),
      Ph = LH(9520);
    const Th = new Set(hr.g),
      Uh = HH => `${Ph.j}${(0,GH.i)()}/${HH}`,
      Vh = HH => {
        if (!(0, Ph.h)(HH)) return null;
        const [BH, LH] = HH.slice(Ph.j.length).split("/");
        return (0, vh.h)(BH) && Th.has(LH) ? (0, hr.d)(BH, LH) : null
      };
    var Oh = LH(9522);
    const bh = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, YH.s)(), {
          gameState: LH,
          isUiHidden: AH
        } = (0, zH.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: SH,
          sneakMode: hH
        } = (0, GH.n)(), [tH, CH] = (0, qH.useState)(Oh.d);
        return (0, Wr.d)(fr.o, CH), BH && !AH && "inGame" === LH && tH ? (0, RH.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!SH && (0, RH.jsx)(Ur, {
            glyph: (0, EH.k)("toggle" === hH ? "sneak" : "sneakToggle")
          }), (0, RH.jsx)("span", {
            children: HH("controller:gameplaySneaking")
          })]
        }) : null
      },
      kh = 12,
      mh = HH => {
        let {
          trigger: BH,
          className: LH,
          children: AH
        } = HH;
        const rH = (0, qH.useRef)(null);
        return (0, qH.useEffect)((() => {
          let HH = 0;
          const LH = mH(BH, "y"),
            AH = () => {
              HH = requestAnimationFrame(AH);
              const SH = rH.current;
              if (!SH || null === BH || void 0 === BH || !BH.isConnected) return;
              const {
                left: hH,
                top: tH
              } = function(HH, BH, LH) {
                let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const SH = HH.left + HH.width / 2,
                  hH = Math.max(kh, LH.width - kh - BH.width),
                  tH = Math.min(Math.max(SH - BH.width / 2, kh), hH),
                  zH = LH.height - AH;
                let CH = 0,
                  EH = zH;
                if (rH) {
                  const HH = Math.max(0, rH.top),
                    AH = Math.min(zH, rH.bottom);
                  AH - HH >= Math.max(LH.height / 2, BH.height + 24) && (CH = HH, EH = AH)
                }
                const XH = HH.top + HH.height / 2 < (CH + EH) / 2 ? EH - kh - BH.height : CH + kh;
                return {
                  left: tH,
                  top: Math.max(kh, XH)
                }
              }(BH.getBoundingClientRect(), {
                width: SH.offsetWidth,
                height: SH.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(jS)) || 0, null !== LH && void 0 !== LH && LH.isConnected ? LH.getBoundingClientRect() : null);
              SH.style.transform = `translate3d(${Math.round(hH)}px, ${Math.round(tH)}px, 0)`, SH.style.visibility = "visible"
            };
          return AH(), () => {
            cancelAnimationFrame(HH)
          }
        }), [BH]), (0, RH.jsx)("div", {
          ref: rH,
          className: LH,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: AH
        })
      };
    var oh = LH(1315),
      Ih = LH(9528),
      fh = LH(1455),
      lh = LH(9537),
      Kh = LH(9540);
    const ch = {
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
      eh = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, YH.s)(), LH = (0, Ih.b)(), AH = (0, Nr.j)("_tasks"), SH = (0, Nr.j)("_availableLeaderboards");
        if (!BH) return null;
        const hH = (HH => {
          let {
            hasShop: BH,
            hasTasksOrLeaderboards: LH,
            canInvite: AH
          } = HH;
          const rH = [];
          return BH && rH.push("shop"), LH && rH.push("tasks"), AH && rH.push("invite"), rH.push("leave"), rH
        })({
          hasShop: LH,
          hasTasksOrLeaderboards: !(!AH && !SH),
          canInvite: !!Wh.featureFlags.canUseInviteLinks
        });
        return (0, RH.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: hH.map((BH => {
            const {
              icon: LH,
              labelKey: AH
            } = ch[BH], rH = "leave" === BH ? fh.O : fh.i;
            return (0, RH.jsx)(rH, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (HH => {
                  switch (HH) {
                    case "shop":
                      return CH.k.AX(Kh.n), void zH.c.set({
                        openEverythingMenuName: tL.o.SHOP
                      });
                    case "tasks":
                      return void CH.k.AX("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void CH.k.AX("toggleMenu", "inviteLink");
                    case "leave":
                      (0, lh.e)()
                  }
                })(BH)
              },
              children: (0, RH.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, RH.jsx)(oh.c, {
                  name: LH
                }), (0, RH.jsx)("span", {
                  children: HH(AH)
                })]
              })
            }, BH)
          }))
        })
      };
    var qh = LH(2064);
    const gh = uH.v,
      Nh = ["forward", "backward", "left", "right", "sprint"],
      Rh = HH => HH.ctrlKey || HH.altKey || "Alt" === HH.key || "ArrowUp" === HH.key || "ArrowDown" === HH.key || "Tab" === HH.code || "/" === HH.key || "Slash" === HH.code;
    class jh {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(uH.Q).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(HH) {
        this.armed = HH
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || BH ? !HH.repeat && this.swallowedKeys.delete(HH.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(HH.code),
          continues: !1
        } : "Escape" === HH.key || HH.repeat && !this.swallowedKeys.has(HH.code) ? {
          swallow: !1,
          continues: !1
        } : LH ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(HH.code), {
          swallow: !0,
          continues: (0, YH.g)(HH)
        })
      }
      onKeyUp(HH) {
        return this.swallowedKeys.delete(HH.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rH = (0, uH.o)(HH.values, this.previousHeld),
          SH = null === LH ? -1 : (0, uH.i)(LH),
          hH = SH >= 0 && rH[SH] && !this.previousHeld[SH],
          tH = rH.some(((HH, BH) => HH && !this.previousHeld[BH] && BH !== SH)),
          zH = Math.hypot(HH.leftStick.x, HH.leftStick.y) >= gh,
          CH = Math.hypot(HH.rightStick.x, HH.rightStick.y) >= gh,
          EH = zH && !this.leftStickWasPressed || CH && !this.rightStickWasPressed;
        this.previousHeld = rH, this.leftStickWasPressed = zH, this.rightStickWasPressed = CH;
        let XH = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, XH = !0);
        const GH = !BH && hH && !AH,
          YH = !GH && this.armed && !BH && (tH || EH);
        return (GH || YH) && (this.consumeNextFrame = !0, this.consumeAfterContinue = YH, XH = !0), {
          continues: YH,
          back: GH,
          consumeHeld: XH
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const nh = new Set([...qh.m, ...qh.G]),
      Fh = HH => ((HH, BH, LH) => {
        const AH = Object.keys(BH).filter((AH => !LH.has(AH) && BH[AH].includes(HH)));
        return AH.length > 0 && AH.every((HH => Nh.includes(HH)))
      })(HH, qh.w, nh),
      Dh = (HH, BH, LH) => {
        const AH = new jh,
          rH = HH => {
            if (!HH.isTrusted) return;
            const {
              swallow: LH,
              continues: rH
            } = AH.onKeyDown(HH, !(0, YH.z)(HH) || (0, Hr.g)() || (0, zL.t)(), Fh(HH.code));
            LH && (HH.stopImmediatePropagation(), Rh(HH) && HH.preventDefault()), rH && ((0, YH.r)("keyboardMouse"), BH())
          },
          SH = HH => {
            HH.isTrusted && AH.onKeyUp(HH) && (HH.stopImmediatePropagation(), Rh(HH) && HH.preventDefault())
          },
          tH = () => {
            AH.forgetKeys()
          };
        window.addEventListener("keydown", rH, !0), window.addEventListener("keyup", SH, !0), window.addEventListener("blur", tH);
        const zH = hH.i.onFrame((HH => {
            const rH = XH.b.getActiveConsumerName(),
              SH = LH(),
              hH = SH ? (0, EH.k)("menuBack") : null,
              tH = null !== rH && "gameplay" !== rH,
              {
                continues: zH,
                back: CH,
                consumeHeld: uH
              } = AH.onPadFrame(HH, tH, hH, (0, YH.n)(HH));
            if (uH) {
              const HH = (0, GH.g)().swapSticks ? "right" : "left";
              XH.b.consumeAllHeld(AH.consumeLeavesMoveStick() ? HH : null)
            }
            CH ? null === SH || void 0 === SH || SH() : zH && BH()
          })),
          CH = (0, Hr.h)(`pressToContinue:${HH}`, (() => AH.blocksGameplay()));
        return {
          setArmed: HH => {
            AH.setArmed(HH)
          },
          dispose: () => {
            window.removeEventListener("keydown", rH, !0), window.removeEventListener("keyup", SH, !0), window.removeEventListener("blur", tH), zH(), CH()
          }
        }
      };
    var wh = LH(5478),
      Zh = LH(3799),
      dh = LH(3473),
      ah = LH(8889);
    const sh = HH => {
        let {
          text: BH
        } = HH;
        return (0, RH.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: BH
        })
      },
      Jh = HH => {
        let {
          label: BH,
          hint: LH,
          options: AH,
          value: SH,
          onChange: hH
        } = HH;
        const {
          t: tH
        } = (0, rH.B)();
        return (0, RH.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, RH.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, RH.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, RH.jsx)("div", {
                className: "SliderText",
                children: BH
              }), LH && (0, RH.jsx)("div", {
                className: "ControllerSettingsHint",
                children: LH
              })]
            }), (0, RH.jsx)(dh.b, {
              options: AH.map((HH => ({
                label: "label" in HH ? HH.label : tH(HH.labelKey),
                value: HH.value
              }))),
              value: SH,
              onChange: HH => {
                hH(HH.value)
              }
            })]
          })
        })
      },
      ih = HH => {
        let {
          settingKey: BH,
          label: LH,
          range: AH,
          format: rH
        } = HH;
        const SH = (0, GH.n)();
        return (0, RH.jsx)(wh.f, {
          name: LH,
          min: AH.min,
          max: AH.max,
          step: AH.step,
          padStep: AH.step,
          initValue: SH[BH],
          format: rH,
          onChange: HH => {
            (0, GH.k)({
              [BH]: (0, ah.t)(HH, AH)
            })
          }
        })
      };
    var ph = LH(9543),
      yh = LH(9550);
    const Ht = HH => HH instanceof DOMException && ("SecurityError" === HH.name || "NotAllowedError" === HH.name),
      Bt = HH => {
        const [BH] = [...HH.controllers].sort(((HH, BH) => yh.r[HH] - yh.r[BH]));
        return yh.o[BH]
      },
      Lt = HH => {
        (0, ph.d)().allowPhoneMotion().catch((BH => {
          HH && Ht(BH) ? HH() : console.warn("Could not enable the motion sensor", BH)
        }))
      },
      At = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      rt = HH => {
        let {
          status: BH
        } = HH;
        const {
          t: LH
        } = (0, rH.B)(), [AH, SH] = (0, qH.useState)(null), hH = `${BH.controllers.join(",")}|${BH.phoneMotion}`;
        (0, qH.useEffect)((() => {
          SH(null)
        }), [hH]);
        const tH = () => {
          (0, ph.d)().connectController().then((HH => {
            SH(HH > 0 ? "openFailed" : null)
          })).catch((HH => {
            Ht(HH) ? SH("needsClick") : console.warn("Could not connect motion controller", HH)
          }))
        };
        if (BH.hidSupported) {
          let HH = LH("controller:settingsGyroConnectHint");
          return "needsClick" === AH ? HH = LH("controller:settingsGyroConnectNeedsClick") : "openFailed" === AH ? HH = LH("controller:settingsGyroOpenFailed") : BH.controllers.length > 0 && (HH = LH("controller:settingsGyroConnected", {
            name: Bt(BH)
          })), (0, RH.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, RH.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, RH.jsx)("div", {
                className: "ControllerSettingsHint",
                children: HH
              }), (0, RH.jsx)(fh.i, {
                onClick: tH,
                children: LH("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === BH.phoneMotion) return (0, RH.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, RH.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === AH && (0, RH.jsx)("div", {
              className: "ControllerSettingsHint",
              children: LH("controller:settingsGyroAllowNeedsTap")
            }), (0, RH.jsx)(fh.i, {
              onClick: () => {
                Lt((() => {
                  SH("needsTap")
                }))
              },
              children: LH("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const zH = At[BH.phoneMotion];
        return zH ? (0, RH.jsx)("div", {
          className: "ControllerSettingsHint",
          children: LH(zH)
        }) : null
      },
      St = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, GH.n)(), LH = (0, ph.f)(), AH = (0, YH.v)(), SH = !LH.hidSupported && LH.phoneSupported && !LH.padConnected, hH = (LH.hidSupported || LH.phoneSupported) && !SH, tH = (0, EH.k)("pause");
        return (0, RH.jsxs)(RH.Fragment, {
          children: [(0, RH.jsx)(sh, {
            text: HH("controller:settingsGyro")
          }), SH && (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: HH("controller:settingsGyroPhoneNeedsController")
          }), !hH && !SH && (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: HH(LH.hidBlocked || LH.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), hH && (0, RH.jsx)(wh.c, {
            label: HH(LH.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: BH.gyroAiming,
            onClick: HH => {
              var BH, LH;
              (0, GH.k)({
                gyroAiming: HH
              });
              const AH = null === (BH = null === (LH = navigator.userActivation) || void 0 === LH ? void 0 : LH.isActive) || void 0 === BH || BH;
              if (!HH || !AH) return;
              const rH = (0, ph.d)(),
                SH = rH.getStatus();
              SH.hidSupported ? rH.connectControllerIfNoneGranted().catch((HH => {
                console.warn("Motion controller picker unavailable", HH)
              })) : "needsPermission" === SH.phoneMotion && Lt()
            },
            circleInfoText: HH(LH.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), hH && LH.hidSupported && (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: HH("controller:settingsGyroSteamHint")
          }), hH && BH.gyroAiming && (0, RH.jsxs)(RH.Fragment, {
            children: [(0, RH.jsx)(rt, {
              status: LH
            }), (0, RH.jsx)(ih, {
              settingKey: "gyroSensitivity",
              label: HH("controller:settingsGyroSensitivity"),
              range: ah.L,
              format: ah.E
            }), (0, RH.jsx)(Jh, {
              label: HH("controller:settingsGyroActivation"),
              hint: "aiming" === BH.gyroActivation && (0, RH.jsx)(Zh.c, {
                text: HH("controller:settingsGyroAimingHint", {
                  button: Zh.e
                }),
                glyph: (0, EH.k)("use")
              }),
              options: ah.J,
              value: BH.gyroActivation,
              onChange: HH => {
                (0, GH.k)({
                  gyroActivation: HH
                })
              }
            }), "button" === BH.gyroActivation && (0, RH.jsx)(Jh, {
              label: HH("controller:settingsGyroButton"),
              hint: HH("controller:settingsGyroButtonHint"),
              options: ah.q.filter((HH => HH !== tH || HH === BH.gyroButton)).map((HH => ({
                label: Tr(AH, HH),
                value: HH
              }))),
              value: BH.gyroButton,
              onChange: HH => {
                (0, GH.k)({
                  gyroButton: HH
                })
              }
            })]
          })]
        })
      };
    var ht = LH(1922);
    const tt = () => {
      const {
        t: HH
      } = (0, rH.B)(), BH = (0, GH.n)(), LH = (0, YH.v)();
      return (0, RH.jsxs)(RH.Fragment, {
        children: [(0, RH.jsx)(sh, {
          text: HH("controller:settingsAccessibility")
        }), (0, RH.jsx)(wh.c, {
          label: HH("controller:settingsSwapConfirmBack"),
          checked: (0, EH.L)(BH.swapConfirmBack, LH),
          onClick: HH => {
            (0, GH.k)({
              swapConfirmBack: HH === (0, EH.L)(null, LH) ? null : HH
            }), ht.h.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: HH("controller:settingsSwapConfirmBackInfo")
        }), (0, RH.jsx)(Jh, {
          label: HH("controller:settingsButtonRepeat"),
          hint: HH("controller:settingsButtonRepeatHint"),
          options: ah.n,
          value: BH.buttonRepeat,
          onChange: HH => {
            (0, GH.k)({
              buttonRepeat: HH
            })
          }
        }), (0, RH.jsx)(Jh, {
          label: HH("controller:settingsTapHoldTime"),
          hint: HH("controller:settingsTapHoldTimeHint"),
          options: ah.sb,
          value: BH.tapHoldTime,
          onChange: HH => {
            (0, GH.k)({
              tapHoldTime: HH
            })
          }
        }), (0, RH.jsx)(Jh, {
          label: HH("controller:settingsEmoteButton"),
          hint: HH("wheel" === BH.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: ah.A,
          value: BH.emoteButton,
          onChange: HH => {
            (0, GH.k)({
              emoteButton: HH
            })
          }
        }), (0, RH.jsx)(Jh, {
          label: HH("controller:settingsAttackMode"),
          hint: HH("toggle" === BH.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: ah.k,
          value: BH.attackMode,
          onChange: HH => {
            (0, GH.k)({
              attackMode: HH
            })
          }
        }), (0, RH.jsx)(wh.c, {
          label: HH("controller:settingsLargePointer"),
          checked: BH.largePointer,
          onClick: HH => {
            (0, GH.k)({
              largePointer: HH
            })
          },
          circleInfoText: HH("controller:settingsLargePointerInfo")
        })]
      })
    };
    var zt = LH(9552);
    const Ct = new class {
        constructor(HH) {
          this.router = HH, this.current = null
        }
        claim(HH, BH) {
          const LH = this.current;
          LH && (this.current = null, LH.release(), LH.onTakenOver());
          const AH = this.router.register({
              ...HH,
              name: "capture"
            }),
            rH = {
              release: AH,
              onTakenOver: BH
            };
          return this.current = rH, () => {
            this.current === rH && (this.current = null), AH()
          }
        }
      }(XH.b),
      Et = HH => {
        (0, qH.useEffect)((() => {
          if (!HH) return;
          const BH = HH();
          let LH = !1;
          const AH = () => {
              LH || (LH = !0, BH.onEnd())
            },
            rH = Ct.claim({
              isActive: () => !LH,
              onFrame: HH => {
                BH.onFrame(HH, AH)
              }
            }, AH),
            SH = void 0 === BH.timeoutMs ? void 0 : window.setTimeout(AH, BH.timeoutMs),
            hH = HH => {
              "Escape" === HH.key && (HH.preventDefault(), HH.stopPropagation(), AH())
            };
          return window.addEventListener("keydown", hH, !0), () => {
            LH = !0, rH(), window.clearTimeout(SH), window.removeEventListener("keydown", hH, !0)
          }
        }), [HH])
      },
      Xt = HH => {
        let {
          row: BH,
          capturing: LH,
          onCapture: AH,
          holdFillRef: SH,
          onRebind: hH,
          swapped: tH
        } = HH;
        const {
          t: zH
        } = (0, rH.B)();
        if ("fixed" === BH.kind) return (0, RH.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, RH.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, RH.jsx)("div", {
              className: "ControlName",
              children: zH(BH.labelKey)
            }), (0, RH.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, RH.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, RH.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, RH.jsx)(Ur, {
                    glyph: "move" === BH.stick ? (0, EH.v)() : (0, EH.u)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: CH
        } = BH, XH = (0, EH.k)(CH), GH = (0, EH.o)(CH), YH = XH !== GH && (0, EH.e)(CH, GH);
        return (0, RH.jsxs)("div", {
          className: NH()("ControlRow PadControlRow", {
            Capturing: LH
          }),
          children: [(0, RH.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, RH.jsx)("div", {
              className: "ControlName",
              children: zH(ah.g[CH])
            }), (0, RH.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!LH && (0, RH.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, RH.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    AH(CH)
                  },
                  children: (0, RH.jsx)(Ur, {
                    glyph: XH
                  })
                }), YH && (0, RH.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: zH("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hH(CH, GH)
                  },
                  children: (0, RH.jsx)(oh.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), LH && (0, RH.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, RH.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, RH.jsx)("span", {
                    children: zH("controller:settingsCapturePrompt")
                  }), (0, RH.jsx)("div", {
                    ref: SH,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, RH.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    AH(null)
                  },
                  children: "\xd7"
                })]
              }), LH && (0, RH.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, RH.jsx)(Zh.c, {
                  text: zH((0, EH.e)(CH, (0, EH.k)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Zh.e
                  }),
                  glyph: (0, EH.k)("menuBack")
                })
              })]
            })]
          }), tH.map((HH => (0, RH.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, RH.jsx)(Zh.c, {
              text: zH("controller:settingsSwapNotice", {
                action: zH(ah.g[HH]),
                button: Zh.e
              }),
              glyph: (0, EH.k)(HH)
            })
          }, HH))), LH && (0, RH.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${ah.r}ms`
            }
          })]
        })
      },
      Gt = [],
      Yt = HH => {
        let {
          layoutSetting: BH
        } = HH;
        const {
          t: LH
        } = (0, rH.B)(), AH = (0, GH.n)();
        (0, YH.v)();
        const SH = (0, qH.useRef)(null),
          [hH, tH] = (0, qH.useState)(null),
          zH = (0, qH.useCallback)(((HH, BH) => {
            const LH = (0, GH.g)().bindings;
            (0, EH.H)(HH, BH);
            const AH = (0, EH.y)(LH, HH);
            tH(AH.length > 0 ? {
              action: HH,
              swapped: AH
            } : null)
          }), []),
          [CH, QH] = ((HH, BH) => {
            const [LH, AH] = (0, qH.useState)(null), rH = (0, qH.useMemo)((() => LH ? () => {
              const rH = (0, EH.k)("menuBack"),
                SH = new ah.d(rH, (0, EH.k)("menuConfirm"), (HH => (0, EH.e)(LH, HH)));
              return {
                onFrame: (AH, hH) => {
                  var tH;
                  const zH = AH.frame.timestampMs,
                    CH = SH.update({
                      ...AH,
                      isDown: HH => (0, uH.G)(AH.frame.values, HH)
                    }, zH);
                  null === (tH = HH.current) || void 0 === tH || tH.style.setProperty("width", 100 * SH.getBindHoldProgress(zH) + "%"), CH && ("bind" === CH.kind ? (XH.b.consumeButton(CH.button), BH(LH, CH.button)) : XH.b.consumeButton(rH), hH())
                },
                onEnd: () => {
                  AH(null)
                },
                timeoutMs: ah.r
              }
            } : null), [LH, HH, BH]);
            return Et(rH), [LH, AH]
          })(SH, zH),
          WH = HH => {
            HH && tH(null), QH(HH)
          };
        (0, qH.useEffect)((() => {
          if (!hH) return;
          const HH = window.setTimeout((() => {
            tH(null)
          }), ah.qb);
          return () => {
            window.clearTimeout(HH)
          }
        }), [hH]);
        const MH = !AH.swapSticks && 0 === Object.keys(AH.bindings).length;
        return (0, RH.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, RH.jsx)("div", {
            className: "SliderText",
            children: LH("controller:settingsRemap")
          }), (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: LH("controller:settingsRemapHint")
          }), (0, RH.jsx)(fh.O, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: MH,
            onClick: () => {
              WH(null), tH(null), (0, EH.J)()
            },
            children: LH("controller:settingsResetAll")
          }), BH, ah.gb.map(((HH, BH) => (0, RH.jsx)(zt.d, {
            title: LH(HH.titleKey),
            defaultOpen: 0 === BH,
            children: HH.rows.map((HH => (0, RH.jsx)(Xt, {
              row: HH,
              capturing: "action" === HH.kind && HH.action === CH,
              onCapture: WH,
              holdFillRef: SH,
              onRebind: zH,
              swapped: "action" === HH.kind && (null === hH || void 0 === hH ? void 0 : hH.action) === HH.action ? hH.swapped : Gt
            }, "action" === HH.kind ? HH.action : HH.labelKey)))
          }, HH.titleKey)))]
        })
      },
      ut = HH => {
        let {
          deadzone: BH,
          dotRef: LH,
          labelKey: AH
        } = HH;
        const {
          t: SH
        } = (0, rH.B)();
        return (0, RH.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, RH.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, RH.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * BH + "%",
                height: 100 * BH + "%"
              }
            }), (0, RH.jsx)("div", {
              ref: LH,
              className: "ControllerTesterDot"
            })]
          }), (0, RH.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: SH(AH)
          })]
        })
      },
      Qt = (HH, BH, LH, AH) => {
        var rH;
        HH && (HH.style.left = 50 + 50 * Math.max(-1, Math.min(1, BH.x)) + "%", HH.style.top = 50 + 50 * Math.max(-1, Math.min(1, BH.y)) + "%", null === (rH = HH.parentElement) || void 0 === rH || rH.classList.toggle("Active", AH || Math.hypot(BH.x, BH.y) > LH))
      },
      Wt = HH => {
        const BH = {
            deadzone: HH.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          LH = {
            deadzone: HH.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return HH.swapSticks ? {
          left: LH,
          right: BH
        } : {
          left: BH,
          right: LH
        }
      },
      Mt = () => {
        const {
          t: HH
        } = (0, rH.B)(), BH = (() => {
          const [HH, BH] = (0, qH.useState)((() => hH.i.getActivePad()));
          return (0, Wr.d)(hH.e, (() => {
            BH(hH.i.getActivePad())
          })), HH
        })(), LH = Wt((0, GH.n)()), AH = (0, qH.useRef)(null), SH = (0, qH.useRef)(null), tH = (0, qH.useRef)([]), zH = (0, qH.useRef)(null), CH = (0, qH.useRef)(null), [YH, QH] = (HH => {
          const [BH, LH] = (0, qH.useState)(!1), AH = (0, qH.useMemo)((() => BH ? () => {
            const BH = (0, EH.k)("menuBack"),
              AH = new ah.f;
            return {
              onFrame: (LH, rH) => {
                var SH;
                const hH = AH.update({
                  pressed: LH.wasPressed(BH),
                  LX: LH.isHeld(BH)
                }, LH.frame.timestampMs);
                null === (SH = HH.current) || void 0 === SH || SH.style.setProperty("width", 100 * hH + "%"), hH >= 1 && (XH.b.consumeButton(BH), rH())
              },
              onEnd: () => {
                LH(!1)
              }
            }
          } : null), [BH, HH]);
          return Et(AH), [BH, LH]
        })(SH);
        (0, qH.useEffect)((() => {
          const HH = HH => {
            for (const LH of uH.S) {
              const BH = (0, uH.i)(LH),
                AH = tH.current[BH];
              if (!AH) continue;
              const rH = HH.values[BH];
              AH.classList.toggle("Pressed", rH >= uH.v), (0, uH.H)(BH) && AH.style.setProperty("--trigger-fill", `${Math.round(100*rH)}%`)
            }
            const BH = Wt((0, GH.g)());
            Qt(zH.current, HH.leftStick, BH.left.deadzone, HH.values[(0, uH.i)("LS")] >= uH.v), Qt(CH.current, HH.rightStick, BH.right.deadzone, HH.values[(0, uH.i)("RS")] >= uH.v)
          };
          return BH || HH((0, uH.u)()), hH.i.onFrame(HH)
        }), [BH]), (0, qH.useEffect)((() => {
          BH || QH(!1)
        }), [BH, QH]), (0, qH.useEffect)((() => {
          var HH;
          YH && (null === (HH = AH.current) || void 0 === HH || HH.scrollIntoView({
            block: "nearest"
          }))
        }), [YH]);
        const WH = ah.bb.find((HH => HH.value === (null === BH || void 0 === BH ? void 0 : BH.family)));
        return (0, RH.jsxs)("div", {
          ref: AH,
          className: NH()("SettingBox ControllerTester", {
            Testing: YH
          }),
          children: [(0, RH.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, RH.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [BH && (0, RH.jsx)("div", {
                children: HH("controller:settingsTesterFamily", {
                  family: WH ? HH(WH.labelKey) : BH.family
                })
              }), BH && (0, RH.jsx)("div", {
                className: "ControllerTesterPadId",
                children: BH.id
              }), !BH && (0, RH.jsx)("div", {
                children: HH("controller:settingsTesterNoPad")
              })]
            }), (BH || YH) && (0, RH.jsx)(fh.i, {
              className: "ControllerTesterToggle",
              onClick: () => {
                QH(!YH)
              },
              children: HH(YH ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), BH && !YH && (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: HH("controller:settingsTesterHint")
          }), YH && (0, RH.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, RH.jsx)(Zh.c, {
              text: HH("controller:settingsTesterTesting", {
                button: Zh.e
              }),
              glyph: (0, EH.k)("menuBack")
            }), (0, RH.jsx)("div", {
              ref: SH,
              className: "ControllerTesterExitFill"
            })]
          }), (0, RH.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, RH.jsx)(ut, {
              deadzone: LH.left.deadzone,
              dotRef: zH,
              labelKey: LH.left.labelKey
            }), (0, RH.jsx)("div", {
              className: "ControllerTesterButtons",
              children: uH.S.map((HH => {
                const LH = (0, uH.i)(HH);
                return (0, RH.jsx)("div", {
                  ref: HH => {
                    tH.current[LH] = HH
                  },
                  className: (0, uH.H)(LH) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, RH.jsx)(Ur, {
                    glyph: HH,
                    family: null === BH || void 0 === BH ? void 0 : BH.family
                  })
                }, HH)
              }))
            }), (0, RH.jsx)(ut, {
              deadzone: LH.right.deadzone,
              dotRef: CH,
              labelKey: LH.right.labelKey
            })]
          })]
        })
      },
      xt = (0, qH.memo)((function() {
        const {
          t: HH
        } = (0, rH.B)(), BH = (0, GH.n)(), [LH, AH] = (0, qH.useState)(!1);
        return (0, qH.useEffect)((() => {
          if (!LH) return;
          const HH = window.setTimeout((() => {
            AH(!1)
          }), ah.qb);
          return () => {
            window.clearTimeout(HH)
          }
        }), [LH]), (0, RH.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, RH.jsx)(sh, {
            text: HH("controller:settingsLook")
          }), (0, RH.jsx)(ih, {
            settingKey: "lookSensitivityX",
            label: HH("controller:settingsLookSensitivityX"),
            range: ah.jb,
            format: ah.I
          }), (0, RH.jsx)(ih, {
            settingKey: "lookSensitivityY",
            label: HH("controller:settingsLookSensitivityY"),
            range: ah.jb,
            format: ah.I
          }), (0, RH.jsx)(ih, {
            settingKey: "aimLookSensitivity",
            label: HH("controller:settingsAimLookSensitivity"),
            range: ah.h,
            format: ah.I
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsLookCurve"),
            hint: HH("controller:settingsLookCurveHint"),
            options: ah.Y,
            value: BH.lookCurve,
            onChange: HH => {
              (0, GH.k)({
                lookCurve: HH
              })
            }
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsInvertLookX"),
            checked: BH.invertLookX,
            onClick: HH => {
              (0, GH.k)({
                invertLookX: HH
              })
            }
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsInvertLookY"),
            checked: BH.invertLookY,
            onClick: HH => {
              (0, GH.k)({
                invertLookY: HH
              })
            }
          }), (0, RH.jsx)(ih, {
            settingKey: "lookDeadzone",
            label: HH("controller:settingsLookDeadzone"),
            range: ah.y,
            format: ah.D
          }), (0, RH.jsx)(St, {}), (0, RH.jsx)(sh, {
            text: HH("controller:settingsMovement")
          }), (0, RH.jsx)(ih, {
            settingKey: "moveDeadzone",
            label: HH("controller:settingsMoveDeadzone"),
            range: ah.y,
            format: ah.D
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsAutoSprint"),
            checked: BH.autoSprint,
            onClick: HH => {
              (0, GH.k)({
                autoSprint: HH
              })
            },
            circleInfoText: HH("controller:settingsAutoSprintInfo")
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsSneak"),
            options: ah.mb,
            value: BH.sneakMode,
            onChange: HH => {
              (0, GH.k)({
                sneakMode: HH
              })
            }
          }), (0, RH.jsx)(sh, {
            text: HH("controller:settingsButtons")
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsPromptFamily"),
            options: ah.bb,
            value: BH.promptFamily,
            onChange: HH => {
              (0, GH.k)({
                promptFamily: HH
              })
            }
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsHideButtonHints"),
            checked: BH.hideButtonHints,
            onClick: HH => {
              (0, GH.k)({
                hideButtonHints: HH
              })
            }
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsVibration"),
            checked: BH.vibration,
            onClick: HH => {
              (0, GH.k)({
                vibration: HH
              }), HH && Sr("preview")
            }
          }), (0, RH.jsx)(ih, {
            settingKey: "cursorSpeed",
            label: HH("controller:settingsCursorSpeed"),
            range: ah.v,
            format: ah.I
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsCursorMagnetism"),
            checked: BH.cursorMagnetism,
            onClick: HH => {
              (0, GH.k)({
                cursorMagnetism: HH
              })
            }
          }), (0, RH.jsx)(wh.c, {
            label: HH("controller:settingsMenuBackToCategories"),
            checked: BH.menuBackToCategories,
            onClick: HH => {
              (0, GH.k)({
                menuBackToCategories: HH
              })
            }
          }), (0, RH.jsx)(Yt, {
            layoutSetting: (0, RH.jsxs)(RH.Fragment, {
              children: [EH.h.map((LH => (0, RH.jsx)(wh.c, {
                label: HH(ah.Q[LH]),
                checked: (0, EH.D)(LH, BH),
                onClick: HH => {
                  AH(!(0, EH.M)(LH, HH))
                }
              }, LH))), LH && (0, RH.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: HH("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, RH.jsx)(tt, {}), (0, RH.jsx)(sh, {
            text: HH("controller:settingsAlternatives")
          }), (0, RH.jsx)("div", {
            className: "ControllerSettingsHint",
            children: HH("controller:settingsAlternativesHint")
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsMenuNavigation"),
            hint: HH("controller:settingsMenuNavigationHint"),
            options: ah.ab,
            value: BH.menuNavigation,
            onChange: HH => {
              (0, GH.k)({
                menuNavigation: HH
              })
            }
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsInventoryNavigation"),
            hint: HH("controller:settingsInventoryNavigationHint"),
            options: ah.M,
            value: BH.inventoryNavigation,
            onChange: HH => {
              (0, GH.k)({
                inventoryNavigation: HH
              })
            }
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsQuickChat"),
            hint: HH("controller:settingsQuickChatHint"),
            options: ah.fb,
            value: BH.quickChat,
            onChange: HH => {
              (0, GH.k)({
                quickChat: HH
              })
            }
          }), (0, RH.jsx)(Jh, {
            label: HH("controller:settingsLeaderboardButton"),
            hint: HH("controller:settingsLeaderboardButtonHint"),
            options: ah.U,
            value: BH.leaderboardButton,
            onChange: HH => {
              (0, GH.k)({
                leaderboardButton: HH
              })
            }
          }), (0, RH.jsx)(sh, {
            text: HH("controller:settingsTester")
          }), (0, RH.jsx)(Mt, {})]
        })
      }));
    (0, rH.d)(AH);
    for (const Vt of (0, SH.m)()) Vt.connected ? hH.i.handleConnectionEvent(Vt) : hH.i.handleDisconnectionEvent(Vt);
    const vt = () => null !== hH.i.getActivePad(),
      Pt = () => rL.getState(),
      Tt = () => rL.isSteppingSlots(),
      Ut = (HH, BH) => {
        const LH = yA.getFocused();
        yA.isActive() && LH && HH.contains(LH) && yA.setFocus(BH, {
          scroll: !1
        })
      }
  },
  8861: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      g: () => CH
    });
    var AH = LH(1424),
      rH = LH(1418);
    const SH = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      hH = "28de",
      tH = new Set(["1205"]),
      zH = (HH, BH) => {
        const LH = (0, AH.b)(HH);
        if ((null === LH || void 0 === LH ? void 0 : LH.vendor) === hH) return tH.has(LH.product) ? "steamdeck" : "xbox";
        if (LH && SH[LH.vendor]) return SH[LH.vendor];
        if ((0, rH.b)(HH)) return "nintendo";
        const zH = `${HH} ${null!==BH&&void 0!==BH?BH:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(zH) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(zH) ? "nintendo" : /steam deck/.test(zH) ? "steamdeck" : "xbox"
      },
      CH = HH => {
        var BH;
        return (null === (BH = (0, AH.b)(HH)) || void 0 === BH ? void 0 : BH.vendor) === hH
      }
  },
  8901: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH,
      e: () => tH
    });
    var AH = LH(8857);
    const rH = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      SH = new Set(["capture", "gameplay"]),
      hH = ["Up", "Down", "Left", "Right"],
      tH = HH => hH.includes(HH),
      zH = .25;
    const CH = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.LX = new Array(AH.Q).fill(!1), this.previousHeld = new Array(AH.Q).fill(!1), this.consumedButtons = new Array(AH.Q).fill(!1), this.suppressedReleases = new Array(AH.Q).fill(!1), this.wakeOwned = new Array(AH.Q).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, AH.u)()
      }
      register(HH) {
        return this.consumers.has(HH.name) && console.warn(`Controller consumer "${HH.name}" registered twice; the newer one replaces it.`), this.consumers.set(HH.name, HH), () => {
          var BH;
          this.consumers.get(HH.name) === HH && (this.activeName === HH.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (BH = this.peek) || void 0 === BH ? void 0 : BH.over) === HH.name && (this.peek = null), this.consumers.delete(HH.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(HH) {
        return this.LX[(0, AH.i)(HH)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.LX = new Array(AH.Q).fill(!1), this.previousHeld = new Array(AH.Q).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, AH.u)()
      }
      dispatch(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = HH, this.previousHeld = this.LX, this.LX = (0, AH.o)(HH.values, this.previousHeld);
        for (let SH = 0; SH < AH.Q; SH++) this.suppressedReleases[SH] = !this.LX[SH] && this.consumedButtons[SH], this.LX[SH] || (this.consumedButtons[SH] = !1), this.wakeOwned[SH] && (this.LX[SH] ? (this.consumedButtons[SH] = !0, this.wakeOwned[SH] = !1) : HH.values[SH] < AH.P && (this.wakeOwned[SH] = !1));
        Math.hypot(HH.leftStick.x, HH.leftStick.y) < zH && (this.leftStickConsumed = !1), Math.hypot(HH.rightStick.x, HH.rightStick.y) < zH && (this.rightStickConsumed = !1);
        const rH = this.pickActive();
        if ((null === rH || void 0 === rH ? void 0 : rH.name) !== this.activeName) {
          var hH, tH, CH, EH, XH, GH;
          const HH = this.activeName,
            BH = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            LH = null !== (hH = null === rH || void 0 === rH || null === (tH = rH.peek) || void 0 === tH ? void 0 : tH.call(rH)) && void 0 !== hH ? hH : null,
            SH = null === HH && !!LH && !(null === (CH = this.consumers.get(LH.over)) || void 0 === CH || !CH.onPeekFrame),
            zH = LH && (LH.over === HH || SH) ? LH : null,
            YH = null !== this.peek && this.peek.over === (null === rH || void 0 === rH ? void 0 : rH.name) ? this.peek : null;
          this.deactivateCurrent(null !== zH, null !== YH), this.activeName = null !== (EH = null === rH || void 0 === rH ? void 0 : rH.name) && void 0 !== EH ? EH : null, null === HH || this.handOffPending || this.consumeAllHeld();
          const uH = null === (XH = null !== zH && void 0 !== zH ? zH : YH) || void 0 === XH ? void 0 : XH.stick;
          "left" === uH && BH.left ? this.leftStickConsumed = !1 : "right" === uH && BH.right && (this.rightStickConsumed = !1), this.peek = zH, rH || null === HH ? rH && (null === (GH = this.idleResume) || void 0 === GH ? void 0 : GH.name) === rH.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: HH,
            left: BH.left && this.leftStickConsumed,
            right: BH.right && this.rightStickConsumed
          }, rH && (this.idleResume = null);
          for (let rH = 0; rH < AH.Q; rH++) this.previousHeld[rH] && !this.LX[rH] && (this.suppressedReleases[rH] = !0)
        }
        var YH, uH;
        (this.handOffPending = !1, rH) && (LH && !SH.has(rH.name) && this.consumeWakePress(rH), rH.onFrame(this.buildInput(HH, BH, LH)), this.peek && (null === (YH = this.consumers.get(this.peek.over)) || void 0 === YH || null === (uH = YH.onPeekFrame) || void 0 === uH || uH.call(YH, this.buildInput(HH, BH, !1, this.peek.stick))))
      }
      consumeWakePress(HH) {
        for (let rH = 0; rH < AH.Q; rH++) {
          var BH, LH;
          const SH = AH.S[rH];
          (null !== (BH = null === (LH = HH.wakePressActs) || void 0 === LH ? void 0 : LH.call(HH, SH)) && void 0 !== BH ? BH : hH.includes(SH)) || (this.LX[rH] ? this.consumedButtons[rH] = !0 : this.lastFrame.values[rH] >= AH.N && (this.wakeOwned[rH] = !0))
        }
      }
      pickActive() {
        for (const HH of rH) {
          const BH = this.consumers.get(HH);
          if (BH && BH.isActive()) return BH
        }
        return null
      }
      deactivateCurrent() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var LH, AH, rH, SH;
        this.activeName && (null === (LH = this.consumers.get(this.activeName)) || void 0 === LH || null === (AH = LH.onDeactivate) || void 0 === AH || AH.call(LH, HH));
        this.peek && !BH && (null === (rH = this.consumers.get(this.peek.over)) || void 0 === rH || null === (SH = rH.onDeactivate) || void 0 === SH || SH.call(rH, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let rH = 0; rH < AH.Q; rH++) this.LX[rH] && (this.consumedButtons[rH] = !0);
        const {
          leftStick: BH,
          rightStick: LH
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== HH && (this.leftStickConsumed || Math.hypot(BH.x, BH.y) >= zH), this.rightStickConsumed = "right" !== HH && (this.rightStickConsumed || Math.hypot(LH.x, LH.y) >= zH)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(HH) {
        const BH = (0, AH.i)(HH);
        this.LX[BH] && (this.consumedButtons[BH] = !0)
      }
      buildInput(HH, BH, LH, rH) {
        const SH = this.LX,
          hH = this.previousHeld,
          tH = rH ? new Array(AH.Q).fill(!0) : [...this.consumedButtons],
          zH = rH ? tH : [...this.suppressedReleases],
          CH = !this.leftStickConsumed && (!rH || "left" === rH),
          EH = !this.rightStickConsumed && (!rH || "right" === rH);
        return {
          frame: HH,
          dtMs: BH,
          isHeld: HH => {
            const BH = (0, AH.i)(HH);
            return SH[BH] && !tH[BH]
          },
          wasPressed: HH => {
            const BH = (0, AH.i)(HH);
            return SH[BH] && !hH[BH] && !tH[BH]
          },
          wasReleased: HH => {
            const BH = (0, AH.i)(HH);
            return !SH[BH] && hH[BH] && !zH[BH]
          },
          value: BH => {
            const LH = (0, AH.i)(BH);
            return tH[LH] ? 0 : HH.values[LH]
          },
          leftStick: CH ? HH.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: EH ? HH.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: LH
        }
      }
    }
  },
  8878: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => XH.d,
      e: () => XH.e,
      g: () => mH,
      i: () => oH,
      k: () => IH,
      n: () => fH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(1450),
      hH = LH(30),
      tH = LH(8882),
      zH = LH(8857),
      CH = LH(8875),
      EH = LH(8855),
      XH = LH(2085),
      GH = LH(8889);
    const YH = {
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
      uH = "controllerSettings",
      QH = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      WH = ["auto", ...tH.e],
      MH = (HH, BH) => "string" === typeof BH && HH.includes(BH),
      xH = HH => BH => "number" === typeof BH && Number.isFinite(BH) ? (0, GH.t)(BH, HH) : void 0,
      vH = HH => "boolean" === typeof HH ? HH : void 0,
      PH = HH => BH => MH(HH, BH) ? BH : void 0,
      TH = {
        lookSensitivityX: xH(GH.jb),
        lookSensitivityY: xH(GH.jb),
        aimLookSensitivity: xH(GH.h),
        invertLookX: vH,
        invertLookY: vH,
        lookCurve: PH(zH.L),
        lookDeadzone: xH(GH.y),
        moveDeadzone: xH(GH.y),
        swapSticks: vH,
        autoSprint: vH,
        sneakMode: PH(["toggle", "hold"]),
        tapHoldTime: PH(["short", "medium", "long"]),
        attackMode: PH(["hold", "toggle"]),
        promptFamily: PH(WH),
        hideButtonHints: vH,
        vibration: vH,
        cursorSpeed: xH(GH.v),
        cursorMagnetism: vH,
        buttonRepeat: PH(zH.m),
        largePointer: vH,
        menuBackToCategories: vH,
        swapConfirmBack: vH,
        menuNavigation: PH(["hybrid", "focus", "cursor"]),
        inventoryNavigation: PH(["hybrid", "slot", "cursor"]),
        quickChat: PH(["wheel", "off"]),
        leaderboardButton: PH(["shop", "leaderboard"]),
        gyroAiming: vH,
        gyroSensitivity: xH(GH.L),
        gyroActivation: PH(["always", "aiming", "button"]),
        gyroButton: PH(zH.S),
        emoteButton: PH(["tapHold", "wheel"])
      },
      UH = [{
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
      VH = HH => {
        const BH = {};
        if ("object" !== typeof HH || null === HH) return BH;
        for (const [LH, AH] of Object.entries(HH)) Object.prototype.hasOwnProperty.call(CH.g, LH) && MH(zH.S, AH) && (BH[LH] = AH);
        return BH
      },
      OH = HH => {
        const BH = {};
        for (const LH of Object.keys(YH))("bindings" === LH ? Object.keys(HH.bindings).length > 0 : HH[LH] !== YH[LH]) && (BH[LH] = HH[LH]);
        0 !== Object.keys(BH).length ? hH.e.setItem(uH, BH) : hH.e.removeItem(uH)
      };
    let bH = (() => {
        const HH = hH.e.getItem(uH),
          BH = (HH => {
            const BH = "object" === typeof HH && null !== HH ? HH : {},
              LH = {
                ...YH,
                bindings: VH(BH.bindings)
              };
            for (const rH of Object.keys(TH)) {
              const HH = TH[rH](BH[rH]);
              void 0 !== HH && (LH[rH] = HH)
            }
            const AH = Object.keys(BH).filter((HH => !!Object.prototype.hasOwnProperty.call(YH, HH) && ("bindings" === HH ? "object" !== typeof BH.bindings || null === BH.bindings || Object.keys(BH.bindings).length !== Object.keys(LH.bindings).length : LH[HH] !== BH[HH])));
            return AH.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${AH.join(", ")}`), LH
          })(HH);
        return null !== HH && void 0 !== HH && OH(BH), BH
      })(),
      kH = {
        ...bH,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const HH = {},
            BH = new URLSearchParams(window.location.search);
          for (const {
              param: LH,
              key: AH
            }
            of UH) {
            const rH = TH[AH](BH.get(LH));
            void 0 !== rH && (HH[AH] = rH)
          }
          return HH
        })()
      };
    const mH = () => kH,
      oH = () => {
        var HH, BH;
        const LH = mH().promptFamily;
        return "auto" !== LH ? LH : null !== (HH = null === (BH = EH.i.getActivePad()) || void 0 === BH ? void 0 : BH.family) && void 0 !== HH ? HH : "xbox"
      },
      IH = HH => {
        const BH = kH;
        bH = {
          ...bH,
          ...HH
        }, OH(bH), kH = {
          ...kH,
          ...HH
        }, (HH => {
          rH.k.AX(XH.e, kH), QH.some((BH => HH[BH] !== kH[BH])) && rH.k.AX(XH.d, kH)
        })(BH)
      },
      fH = () => {
        const [HH, BH] = (0, AH.useState)(kH);
        return (0, SH.d)(XH.e, BH), HH
      }
  },
  9339: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    const AH = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      rH = HH => AH.has(HH)
  },
  8855: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => QH.c,
      i: () => vH
    });
    var AH = LH(8857),
      rH = LH(8861);
    const SH = .1,
      hH = .3;
    class tH {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(HH, BH) {
        const LH = null === this.lastMs ? 0 : Math.min(Math.max(0, BH - this.lastMs), 100);
        this.lastMs = BH;
        const AH = Math.hypot(HH.x, HH.y);
        if (AH >= hH) return this.anchor = null, void(this.returning = !0);
        AH >= SH || (this.returning = !1);
        const rH = this.anchor;
        if (!rH || Math.hypot(HH.x - rH.x, HH.y - rH.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: HH.x,
          y: HH.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += LH, this.steadyMs < 1e3) return;
        const tH = Math.max(AH, Math.hypot(rH.x, rH.y));
        tH < SH ? this.deadzone = 0 : this.returning && (this.deadzone = tH + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(HH) {
        return Math.hypot(HH.x, HH.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : HH
      }
    }
    const zH = (HH, BH) => {
        var LH, AH;
        return null !== (LH = HH && (null === (AH = Object.getOwnPropertyDescriptor(HH, BH)) || void 0 === AH ? void 0 : AH.get)) && void 0 !== LH ? LH : null
      },
      CH = HH => {
        const BH = HH.vendorName;
        return "string" === typeof BH ? BH : void 0
      },
      EH = ((HH, BH) => {
        const LH = zH(HH, "index"),
          AH = zH(HH, "id"),
          rH = zH(HH, "connected"),
          SH = zH(HH, "mapping"),
          hH = zH(HH, "buttons"),
          tH = zH(HH, "axes"),
          EH = zH(BH, "pressed"),
          XH = zH(BH, "value");
        return LH && AH && rH && SH && hH && tH && EH && XH ? HH => {
          const BH = hH.call(HH),
            zH = tH.call(HH),
            GH = {
              index: Number(LH.call(HH)),
              id: String(AH.call(HH)),
              connected: !0 === rH.call(HH),
              mapping: String(SH.call(HH)),
              buttons: [],
              axes: [],
              vendorName: CH(HH)
            };
          for (let LH = 0; LH < BH.length; LH++) GH.buttons.push({
            pressed: !0 === EH.call(BH[LH]),
            value: Number(XH.call(BH[LH]))
          });
          for (let LH = 0; LH < zH.length; LH++) GH.axes.push(Number(zH[LH]));
          return GH
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      XH = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var GH = LH(1412),
      YH = LH(1418);
    const uH = HH => ({
      pressed: HH,
      value: HH ? 1 : 0
    });
    var QH = LH(2085);
    const WH = hH,
      MH = HH => {
        const BH = new Array(AH.Q).fill(0);
        for (let LH = 0; LH < AH.Q && LH < HH.buttons.length; LH++) {
          const rH = HH.buttons[LH];
          BH[LH] = rH.pressed && !(0, AH.H)(LH) ? Math.max(rH.value, AH.v) : rH.value
        }
        return BH
      },
      xH = (HH, BH) => {
        var LH, AH;
        return {
          x: null !== (LH = HH.axes[BH]) && void 0 !== LH ? LH : 0,
          y: null !== (AH = HH.axes[BH + 1]) && void 0 !== AH ? AH : 0
        }
      };
    const vH = new class {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EH;
        this.readGamepads = HH, this.requireTrustedPads = BH, this.nativeReader = LH, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = HH => {
          HH.isTrusted && this.trustedIndices.add(HH.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = HH => {
          this.trustedIndices.delete(HH.gamepad.index)
        }, this.IX = HH => {
          if (this.rafId = 0, !this.running) return;
          const BH = 0 === this.lastTimestampMs ? 16 : Math.min(100, HH - this.lastTimestampMs);
          this.lastTimestampMs = HH;
          try {
            this.poll(HH, BH)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.IX))
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
      onFrame(HH) {
        return this.frameListeners.add(HH), () => {
          this.frameListeners.delete(HH)
        }
      }
      onActivePadChanged(HH) {
        return this.connectionListeners.add(HH), () => {
          this.connectionListeners.delete(HH)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(HH) {
        return this.connectedListeners.add(HH), () => {
          this.connectedListeners.delete(HH)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const HH = this.readPads()[this.activeInfo.index],
          BH = HH ? this.readPad(HH) : null;
        return BH && BH.id === this.activeInfo.id ? HH : null
      }
      poll(HH, BH) {
        var LH, rH;
        const SH = this.readPads();
        let hH = null,
          zH = !1;
        const CH = [],
          EH = Math.max(SH.length, this.slots.length);
        for (let vH = 0; vH < EH; vH++) {
          var XH;
          const BH = vH < SH.length ? SH[vH] : null,
            LH = BH ? this.readPad(BH) : null;
          if (!LH || !LH.connected || !this.isUsable(LH)) {
            this.slots[vH] = null;
            continue
          }
          let rH = this.slots[vH];
          rH && rH.id === LH.id || (rH = {
            id: LH.id,
            LX: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new tH,
            rightRest: new tH
          }, this.slots[vH] = rH);
          const EH = xH(LH, 0),
            GH = xH(LH, 2);
          !rH.leftSettled && Math.hypot(EH.x, EH.y) < WH && (rH.leftSettled = !0), !rH.rightSettled && Math.hypot(GH.x, GH.y) < WH && (rH.rightSettled = !0), rH.leftRest.observe(EH, HH), rH.rightRest.observe(GH, HH);
          const YH = MH(LH),
            uH = (0, AH.o)(YH, rH.LX),
            QH = rH.LX,
            PH = uH.map(((HH, BH) => HH && !QH[BH]));
          rH.LX = uH;
          const TH = {
            pad: LH,
            slot: rH,
            values: YH
          };
          vH === (null === (XH = this.activeInfo) || void 0 === XH ? void 0 : XH.index) && LH.id === this.activeInfo.id ? (hH = TH, zH = PH.includes(!0)) : PH.includes(!0) && CH.push({
            polled: TH,
            rose: PH
          })
        }
        const GH = this.slots.some((HH => null !== HH));
        if (GH !== this.anyPadConnected) {
          this.anyPadConnected = GH;
          for (const HH of this.connectedListeners) HH()
        }
        const YH = null !== (LH = null === (rH = hH) || void 0 === rH ? void 0 : rH.slot.LX) && void 0 !== LH ? LH : [],
          uH = zH ? void 0 : CH.find((HH => {
            let {
              rose: BH
            } = HH;
            return BH.some(((HH, BH) => HH && !YH[BH]))
          }));
        if (uH ? (hH = uH.polled, this.setActive(uH.polled.pad)) : this.activeInfo && !hH && this.setActive(null), !hH || !this.activeInfo) return;
        const QH = ((HH, BH) => {
          let {
            pad: LH,
            slot: rH,
            values: SH
          } = HH;
          const hH = (0, AH.u)(BH);
          return hH.values = SH, rH.leftSettled && (hH.leftStick = rH.leftRest.apply(xH(LH, 0))), rH.rightSettled && (hH.rightStick = rH.rightRest.apply(xH(LH, 2))), hH
        })(hH, HH);
        for (const AH of this.frameListeners) AH(QH, BH, this.activeInfo)
      }
      readPad(HH) {
        const BH = this.readSnapshot(HH);
        return BH && (0, YH.f)(BH) ? (HH => {
          const BH = BH => {
              var LH;
              return null !== (LH = HH.buttons[BH]) && void 0 !== LH ? LH : uH(!1)
            },
            LH = BH => {
              var LH;
              return null !== (LH = HH.axes[BH]) && void 0 !== LH ? LH : 0
            },
            AH = HH.axes.length > 9,
            rH = AH ? (HH => {
              const BH = 0 !== HH;
              return {
                up: BH && (HH >= -1 && HH < -.7 || HH >= .95 && HH <= 1),
                right: BH && HH >= -.75 && HH < -.1,
                down: BH && HH >= -.2 && HH < .45,
                left: BH && HH >= .4 && HH <= 1
              }
            })(LH(9)) : {
              up: LH(5) < -.5,
              down: LH(5) > .5,
              left: LH(4) < -.5,
              right: LH(4) > .5
            };
          return {
            ...HH,
            mapping: "standard",
            buttons: [BH(1), BH(2), BH(0), BH(3), BH(4), BH(5), BH(6), BH(7), BH(8), BH(9), BH(10), BH(11), uH(rH.up), uH(rH.down), uH(rH.left), uH(rH.right), BH(12)],
            axes: [LH(0), LH(1), LH(2), LH(AH ? 5 : 3)]
          }
        })(BH) : BH
      }
      readSnapshot(HH) {
        if (this.nativeReader) try {
          return this.nativeReader(HH)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (HH => {
          const BH = HH;
          return {
            index: BH.index,
            id: BH.id,
            connected: BH.connected,
            mapping: BH.mapping,
            buttons: Array.from(BH.buttons, (HH => ({
              pressed: HH.pressed,
              value: HH.value
            }))),
            axes: Array.from(BH.axes),
            vendorName: CH(HH)
          }
        })(HH)
      }
      isUsable(HH) {
        return !(0, GH.f)(HH.id) && ("standard" !== HH.mapping ? (this.warnedNonStandardIds.has(HH.id) || (this.warnedNonStandardIds.add(HH.id), console.warn(`Controller "${HH.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(HH.index))
      }
      setActive(HH) {
        this.activeInfo = HH ? {
          index: HH.index,
          id: HH.id,
          family: (0, rH.c)(HH.id, HH.vendorName)
        } : null;
        for (const BH of this.connectionListeners) BH(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (HH) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", HH)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.IX))
      }
    }((() => XH ? XH.call(navigator) : []), !0);
    vH.listenForConnections()
  },
  9442: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      e: () => hH,
      h: () => tH,
      k: () => rH
    });
    var AH = LH(9444);
    const rH = HH => {
        const BH = [];
        HH.holdingGun && BH.push({
          kind: "reload"
        }), HH.touchscreenActionButton && BH.push({
          kind: "touchButton",
          label: HH.touchscreenActionButton
        });
        for (const SH of null !== (LH = null === (rH = HH.customButtons) || void 0 === rH ? void 0 : rH.filter(AH.d)) && void 0 !== LH ? LH : []) {
          var LH, rH;
          BH.push({
            kind: "customButton",
            id: SH.id,
            icon: SH.icon,
            description: SH.description
          })
        }
        return BH
      },
      SH = HH => HH.length >= 2,
      hH = HH => "specialAction" !== HH.kind,
      tH = (HH, BH) => {
        if (null === HH || null === BH) return HH === BH;
        if (HH.kind !== BH.kind) return !1;
        switch (HH.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return HH.action === BH.action;
          case "customButton":
            return HH.id === BH.id && HH.icon === BH.icon;
          case "touchButton":
            return HH.label === BH.label
        }
      }
  },
  9347: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = {
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
  9433: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => YH,
      m: () => XH,
      q: () => uH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(1450),
      hH = LH(9442),
      tH = LH(9450);
    let zH = null;
    const CH = () => zH,
      EH = HH => {
        (0, hH.h)(zH, HH) || (zH = HH, rH.k.AX(tH.d, zH))
      },
      XH = () => {
        const [HH, BH] = (0, AH.useState)(CH);
        return (0, SH.d)(tH.d, BH), HH
      };
    let GH = !1;
    const YH = HH => {
        HH !== GH && (GH = HH, rH.k.AX(tH.e, HH))
      },
      uH = () => {
        const [HH, BH] = (0, AH.useState)(GH);
        return (0, SH.d)(tH.e, BH), HH
      }
  },
  9458: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => tH
    });
    var AH = LH(18),
      rH = LH(9450);
    let SH = !1;
    const hH = () => SH,
      tH = HH => {
        HH !== SH && (SH = HH, AH.k.AX(rH.i, SH))
      }
  },
  9453: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      e: () => zH
    });
    var AH = LH(18),
      rH = LH(9450);
    let SH = null,
      hH = 0;
    const tH = () => SH,
      zH = HH => {
        null === HH && null === SH || (SH = null === HH ? null : {
          id: ++hH,
          holdMs: HH
        }, AH.k.AX(rH.j, SH))
      }
  },
  9450: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => AH,
      e: () => rH,
      i: () => tH,
      j: () => zH,
      n: () => CH,
      o: () => hH
    });
    const AH = "controllerActionHintChanged",
      rH = "controllerActionWheelHintChanged",
      SH = "controllerOpenChat",
      hH = "controllerSneakToggledChanged",
      tH = "controllerAttackLatchedChanged",
      zH = "controllerDropStackHoldChanged",
      CH = "controllerPickBlockHintChanged"
  },
  9463: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      e: () => tH
    });
    var AH = LH(18),
      rH = LH(9450);
    let SH = !1;
    const hH = () => SH,
      tH = HH => {
        HH !== SH && (SH = HH, AH.k.AX(rH.n, SH))
      }
  },
  9522: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => tH
    });
    var AH = LH(18),
      rH = LH(9450);
    let SH = !1;
    const hH = () => SH,
      tH = HH => {
        HH !== SH && (SH = HH, AH.k.AX(rH.o, SH))
      }
  },
  9399: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor() {
        this.downAtMs = null
      }
      update(HH, BH, LH, AH) {
        if (HH) return this.downAtMs = LH, null;
        if (null === this.downAtMs) return null;
        const rH = LH - this.downAtMs >= AH;
        return BH ? rH ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, rH ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8920: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      d: () => GH,
      g: () => tH,
      j: () => vH,
      l: () => xH
    });
    var AH = LH(30),
      rH = LH(8882),
      SH = LH(8857);
    const hH = (() => {
        try {
          return LH(8929)
        } catch {
          return null
        }
      })(),
      tH = [...SH.S, "LeftStick", "RightStick"],
      zH = new Map,
      CH = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      EH = (new Set(Object.values(CH)), {
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
      XH = (HH, BH) => {
        var LH, AH;
        return null !== (LH = null === (AH = EH[CH[HH]]) || void 0 === AH ? void 0 : AH[BH]) && void 0 !== LH ? LH : 1
      },
      GH = (HH, BH) => {
        const LH = `./${CH[HH]}/${BH}.svg`;
        let AH = zH.get(LH);
        return void 0 === AH && (AH = hH ? hH(LH) : "", zH.set(LH, AH)), AH
      },
      YH = new Set,
      uH = [],
      QH = HH => {
        if (!YH.has(HH)) {
          YH.add(HH);
          for (const BH of tH) {
            const LH = GH(HH, BH);
            if (LH) {
              const HH = new Image;
              HH.crossOrigin = "anonymous", HH.src = LH, uH.push(HH)
            }
          }
        }
      },
      WH = "controllerGlyphFamily";
    let MH = null;
    const xH = HH => {
        HH !== MH && (MH = HH, AH.e.setItem(WH, HH), QH(HH))
      },
      vH = () => {
        const HH = AH.e.getItem(WH);
        (0, rH.h)(HH) && HH !== MH && (MH = HH, QH(HH))
      }
  },
  9543: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => NH,
      f: () => RH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(1450),
      hH = LH(8870),
      tH = LH(8855),
      zH = LH(8901),
      CH = LH(8878);
    const EH = {
        x: 0,
        y: 0,
        z: 0
      },
      XH = Math.PI / 180,
      GH = HH => Math.hypot(HH.x, HH.y, HH.z),
      YH = (HH, BH) => ({
        x: HH.x * BH,
        y: HH.y * BH,
        z: HH.z * BH
      }),
      uH = (HH, BH) => ({
        x: HH.x + BH.x,
        y: HH.y + BH.y,
        z: HH.z + BH.z
      }),
      QH = (HH, BH) => ({
        x: HH.x - BH.x,
        y: HH.y - BH.y,
        z: HH.z - BH.z
      }),
      WH = HH => {
        const BH = GH(HH);
        return 0 === BH ? EH : YH(HH, 1 / BH)
      },
      MH = HH => ({
        min: {
          ...HH
        },
        max: {
          ...HH
        }
      }),
      xH = (HH, BH) => ({
        min: {
          x: Math.min(HH.min.x, BH.x),
          y: Math.min(HH.min.y, BH.y),
          z: Math.min(HH.min.z, BH.z)
        },
        max: {
          x: Math.max(HH.max.x, BH.x),
          y: Math.max(HH.max.y, BH.y),
          z: Math.max(HH.max.z, BH.z)
        }
      }),
      vH = (HH, BH) => HH.max.x - HH.min.x <= BH && HH.max.y - HH.min.y <= BH && HH.max.z - HH.min.z <= BH;
    class PH {
      constructor() {
        this.bias = EH, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = EH, this.windowSec = 0
      }
      update(HH) {
        const BH = this.gyroRange ? xH(this.gyroRange, HH.gyro) : MH(HH.gyro),
          LH = HH.accel ? this.accelRange ? xH(this.accelRange, HH.accel) : MH(HH.accel) : null;
        if (!vH(BH, 1) || LH && !vH(LH, .01)) return void this.restartWindow(HH);
        if (this.gyroRange = BH, this.accelRange = LH, this.sum = uH(this.sum, YH(HH.gyro, HH.dtSec)), this.windowSec += HH.dtSec, this.windowSec < 1) return;
        const AH = YH(this.sum, 1 / this.windowSec);
        if (GH(AH) > 5) return;
        const rH = QH(AH, this.bias);
        let SH = 0;
        !this.calibrated || this.windowSec >= 3 ? SH = 1 : GH(rH) <= 1 && (SH = Math.min(1, HH.dtSec / 1)), this.bias = uH(this.bias, YH(rH, SH)), this.calibrated = this.calibrated || SH > 0
      }
      correct(HH) {
        return QH(HH, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = EH, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = EH, this.windowSec = 0
      }
      restartWindow(HH) {
        this.gyroRange = MH(HH.gyro), this.accelRange = HH.accel ? MH(HH.accel) : null, this.sum = EH, this.windowSec = 0
      }
    }
    class TH {
      constructor() {
        this.down = null
      }
      update(HH, BH, LH) {
        const AH = WH(YH(BH, -1));
        if (!this.down) return this.down = AH, AH;
        const rH = YH(HH, XH * LH),
          SH = this.down,
          hH = {
            x: SH.x - (rH.y * SH.z - rH.z * SH.y),
            y: SH.y - (rH.z * SH.x - rH.x * SH.z),
            z: SH.z - (rH.x * SH.y - rH.y * SH.x)
          },
          tH = 0 === GH(AH) ? 0 : Math.min(1, LH / .25);
        var zH, CH;
        return this.down = WH((CH = tH, uH(zH = hH, YH(QH(AH, zH), CH)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class UH {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(HH, BH, LH) {
        const AH = Math.hypot(HH, BH),
          rH = Math.max(0, Math.min(1, (AH - 2) / 2)),
          SH = {
            yaw: HH * (1 - rH),
            pitch: BH * (1 - rH),
            dtSec: LH
          };
        for (this.entries.push(SH), this.windowSec += LH; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let hH = 0,
          tH = 0;
        for (const CH of this.entries) hH += CH.yaw * CH.dtSec, tH += CH.pitch * CH.dtSec;
        const zH = this.windowSec > 0 ? {
          yaw: hH / this.windowSec,
          pitch: tH / this.windowSec
        } : {
          yaw: SH.yaw,
          pitch: SH.pitch
        };
        return {
          yaw: HH * rH + zH.yaw,
          pitch: BH * rH + zH.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class VH {
      constructor() {
        this.calibrator = new PH, this.gravity = new TH, this.smoother = new UH
      }
      process(HH, BH, LH) {
        const AH = Math.max(0, Math.min(.05, BH));
        this.calibrator.update({
          ...HH,
          dtSec: AH
        });
        const rH = this.calibrator.correct(HH.gyro);
        let SH = rH.y;
        "player" === LH && HH.accel && (SH = ((HH, BH) => {
          const LH = HH.y * BH.y + HH.z * BH.z;
          return -Math.sign(LH) * Math.min(1.41 * Math.abs(LH), Math.hypot(HH.y, HH.z))
        })(rH, this.gravity.update(rH, HH.accel, AH)));
        const hH = this.smoother.apply(SH, rH.x, AH),
          tH = ((HH, BH) => {
            const LH = Math.hypot(HH, BH);
            if (LH >= 1) return {
              yaw: HH,
              pitch: BH
            };
            const AH = LH / 1;
            return {
              yaw: HH * AH,
              pitch: BH * AH
            }
          })(hH.yaw, hH.pitch);
        return {
          yawDeg: tH.yaw * AH,
          pitchDeg: tH.pitch * AH
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
    const OH = (HH, BH) => {
      var LH, AH, rH;
      const SH = BH * XH,
        hH = null !== (LH = HH.beta) && void 0 !== LH ? LH : 0,
        tH = null !== (AH = HH.gamma) && void 0 !== AH ? AH : 0;
      return {
        x: hH * Math.cos(SH) - tH * Math.sin(SH),
        y: hH * Math.sin(SH) + tH * Math.cos(SH),
        z: null !== (rH = HH.alpha) && void 0 !== rH ? rH : 0
      }
    };
    var bH = LH(9550);
    class kH {
      constructor(HH, BH, LH) {
        this.hid = HH, this.sink = BH, this.onControllersChanged = LH, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = HH => {
          this.openController(HH.device).catch((HH => {
            console.warn("Could not open motion controller", HH)
          }))
        }, this.onDisconnect = HH => {
          this.opening.has(HH.device) && this.disconnectedWhileOpening.add(HH.device);
          const BH = this.controllers.get(HH.device);
          BH && (this.forget(BH), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const HH = await this.hid.getDevices();
        for (const BH of HH) await this.openController(BH).catch((HH => {
          console.warn("Could not open motion controller", HH)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const HH of [...this.controllers.values()]) this.forget(HH);
        this.onControllersChanged()
      }
      async request() {
        const HH = await this.hid.requestDevice({
          filters: bH.k
        });
        let BH = 0;
        for (const LH of HH) await this.openController(LH).catch((HH => {
          console.warn("Could not open motion controller", HH), BH++
        }));
        return BH
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((HH => null !== (0, bH.g)(HH.vendorId, HH.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((HH => HH.kind))
      }
      forget(HH) {
        HH.device.removeEventListener("inputreport", HH.onReport), this.controllers.get(HH.device) === HH && this.controllers.delete(HH.device)
      }
      async openController(HH) {
        const BH = (0, bH.g)(HH.vendorId, HH.productId);
        if (!BH || !this.running || this.controllers.has(HH) || this.opening.has(HH)) return;
        this.opening.add(HH);
        let LH = !1;
        try {
          HH.opened || await HH.open()
        } finally {
          this.opening.delete(HH), LH = this.disconnectedWhileOpening.delete(HH)
        }
        if (LH) return void HH.close().catch((HH => {
          console.debug("Could not close an unplugged motion controller", HH)
        }));
        if (!this.running) return;
        const AH = {
          device: HH,
          kind: BH,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: HH => {
            this.onReport(AH, HH)
          }
        };
        this.controllers.set(HH, AH), HH.addEventListener("inputreport", AH.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(AH)
        } catch (rH) {
          console.warn(`Could not turn on motion for ${BH}`, rH), this.controllers.get(HH) === AH && (this.forget(AH), this.onControllersChanged())
        }
      }
      async enableMotion(HH) {
        let {
          device: BH,
          kind: LH
        } = HH;
        if ((0, bH.i)(LH))
          for (const AH of bH.x[LH]) await BH.receiveFeatureReport(AH).catch((HH => {
            console.debug(`Motion controller feature report ${AH} unavailable`, HH)
          }));
        else
          for (let AH = 0; AH < 2; AH++)
            for (const {
                subcommand: HH,
                args: LH
              }
              of bH.A) await BH.sendReport(bH.D, (0, bH.c)(this.switchPacketCounter++, HH, LH)), await new Promise((HH => {
              setTimeout(HH, 60)
            }))
      }
      onReport(HH, BH) {
        const LH = (0, bH.t)(HH.kind, BH.reportId, BH.data, HH.device.productId);
        if (!LH) return;
        const AH = null === HH.lastEventMs ? 0 : (BH.timeStamp - HH.lastEventMs) / 1e3;
        HH.lastEventMs = BH.timeStamp;
        let rH = LH.dtSec;
        if (null !== rH && AH > 0 && (rH = Math.max(.001, Math.min(.017, AH / LH.readings.length))), null === rH && null !== LH.sensorClock && (0, bH.i)(HH.kind)) {
          const BH = (0, bH.v)(HH.kind, HH.lastClock, LH.sensorClock);
          HH.lastClock = LH.sensorClock, rH = 0 === BH ? null : BH
        }
        if (HH.lastReadingMs = BH.timeStamp, this.isPreferred(HH, BH.timeStamp))
          for (const hH of LH.readings) {
            var SH;
            this.sink(hH, null !== (SH = rH) && void 0 !== SH ? SH : AH, `hid${HH.openedOrder}`)
          }
      }
      isPreferred(HH, BH) {
        const LH = HH => 1e6 * bH.r[HH.kind] + HH.openedOrder;
        for (const AH of this.controllers.values())
          if (AH !== HH && BH - AH.lastReadingMs < 500 && LH(AH) < LH(HH)) return !1;
        return !0
      }
    }
    var mH = LH(81);
    const oH = () => DeviceMotionEvent,
      IH = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, mH.isMobile)(),
      fH = () => {
        var HH;
        const BH = null === (HH = window.screen.orientation) || void 0 === HH ? void 0 : HH.angle;
        return "number" === typeof BH ? BH : "number" === typeof window.orientation ? window.orientation : 0
      };
    class lH {
      constructor(HH, BH) {
        this.sink = HH, this.onStateChanged = BH, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((HH => {
            console.warn("Could not enable the motion sensor", HH)
          }))
        }, this.onMotion = HH => {
          const BH = HH.rotationRate;
          if (!BH || null === BH.alpha && null === BH.beta && null === BH.gamma) return;
          const LH = null === this.lastEventMs ? 0 : (HH.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = HH.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: OH(BH, fH()),
            accel: null
          }, LH, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof oH().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const HH = oH().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof HH) return void this.listen();
        let BH;
        this.disarmGestureRequest();
        try {
          BH = await HH.call(DeviceMotionEvent)
        } catch (LH) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), LH
        }
        this.wanted && ("granted" === BH ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(HH) {
        this.state !== HH && (this.state = HH, this.onStateChanged())
      }
    }
    const KH = "controllerGyroStatusChanged",
      cH = {
        lq: 0,
        Fq: 0
      },
      eH = HH => {
        var BH, LH;
        return "undefined" === typeof document || (null === (BH = null === (LH = document.featurePolicy) || void 0 === LH ? void 0 : LH.allowsFeature(HH)) || void 0 === BH || BH)
      };
    class qH {
      constructor() {
        this.processor = new VH, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = HH => {
          const BH = HH.gyroAiming && tH.i.hasConnectedPad();
          var LH, AH;
          BH !== this.phoneRunning && (this.phoneRunning = BH, BH ? null === (LH = this.phone) || void 0 === LH || LH.start() : null === (AH = this.phone) || void 0 === AH || AH.stop());
          if (HH.gyroAiming !== this.running) {
            var rH, SH;
            if (this.running = HH.gyroAiming, this.running) null === (rH = this.hid) || void 0 === rH || rH.start().catch((HH => {
              console.warn("Could not open motion controllers", HH)
            }));
            else null === (SH = this.hid) || void 0 === SH || SH.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          rH.k.AX(KH, this.getStatus())
        };
        const HH = (() => {
            var HH;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (HH = navigator.hid) && void 0 !== HH ? HH : null
          })(),
          BH = eH("hid");
        this.hidBlocked = null !== HH && !BH, this.hid = HH && BH ? new kH(HH, ((HH, BH, LH) => {
          this.lastHidReadingMs = performance.now(), this.feed(HH, BH, "player", LH)
        }), this.publishStatus) : null;
        const LH = eH("accelerometer") && eH("gyroscope");
        this.phoneBlocked = IH() && !LH, this.phone = IH() && LH ? new lH(((HH, BH, LH) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(HH, BH, "local", LH)
        }), this.publishStatus) : null, rH.k.subscribe(CH.e, this.syncWithSettings), tH.i.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, CH.g)()), this.publishStatus()
        })), this.syncWithSettings((0, CH.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var HH, BH, LH, AH;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (HH = null === (BH = this.hid) || void 0 === BH ? void 0 : BH.getConnectedKinds()) && void 0 !== HH ? HH : [],
          phoneMotion: null !== (LH = null === (AH = this.phone) || void 0 === AH ? void 0 : AH.getState()) && void 0 !== LH ? LH : "off",
          padConnected: tH.i.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var HH;
        await (null === (HH = this.phone) || void 0 === HH ? void 0 : HH.requestPermission())
      }
      drainLookDelta() {
        const HH = performance.now();
        HH - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = HH;
        const BH = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const LH = (0, CH.g)();
        return LH.gyroAiming && (HH => {
          let {
            activation: BH,
            isHeld: LH,
            useButton: AH,
            gyroButton: rH
          } = HH;
          return "always" === BH || LH("aiming" === BH ? AH : rH)
        })({
          activation: LH.gyroActivation,
          isHeld: HH => zH.b.isButtonHeld(HH),
          useButton: (0, hH.k)("use"),
          gyroButton: LH.gyroButton
        }) ? ((HH, BH) => ({
          lq: -HH.yawDeg * BH * XH,
          Fq: -HH.pitchDeg * BH * XH
        }))(BH, LH.gyroSensitivity) : cH
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(HH, BH) {
        this.feed(HH, BH, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(HH, BH, LH, AH) {
        this.source !== AH && (this.processor.reset(), this.source = AH);
        const rH = this.processor.process(HH, BH, LH);
        this.pendingYawDeg += rH.yawDeg, this.pendingPitchDeg += rH.pitchDeg
      }
    }
    let gH = null;
    const NH = () => (gH || (gH = new qH), gH),
      RH = () => {
        const [HH, BH] = (0, AH.useState)((() => NH().getStatus()));
        return (0, SH.d)(KH, BH), (0, AH.useEffect)((() => {
          BH(NH().getStatus())
        }), []), HH
      }
  },
  9550: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => UH,
      D: () => vH,
      c: () => TH,
      g: () => zH,
      i: () => AH,
      k: () => tH,
      o: () => CH,
      r: () => EH,
      t: () => xH,
      v: () => WH,
      x: () => VH
    });
    const AH = HH => "dualShock4" === HH || "dualSense" === HH,
      rH = 1356,
      SH = 1406,
      hH = [{
        vendorId: rH,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: rH,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: rH,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: rH,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: rH,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: SH,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: SH,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: SH,
        productId: 8199,
        kind: "joyConRight"
      }],
      tH = hH.map((HH => {
        let {
          vendorId: BH,
          productId: LH
        } = HH;
        return {
          vendorId: BH,
          productId: LH
        }
      })),
      zH = (HH, BH) => {
        var LH, AH;
        return null !== (LH = null === (AH = hH.find((LH => LH.vendorId === HH && LH.productId === BH))) || void 0 === AH ? void 0 : AH.kind) && void 0 !== LH ? LH : null
      },
      CH = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      EH = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      XH = 2e3 / 32767,
      GH = 1 / 8192,
      YH = 936 / 13371,
      uH = (HH, BH, LH) => ({
        x: HH.getInt16(BH, !0) * LH,
        y: HH.getInt16(BH + 2, !0) * LH,
        z: HH.getInt16(BH + 4, !0) * LH
      }),
      QH = HH => 0 === HH.x && 0 === HH.y && 0 === HH.z,
      WH = (HH, BH, LH) => null === BH ? null : "dualShock4" === HH ? 16 * (LH - BH & 65535) / 3 / 1e6 : (LH - BH >>> 0) / 3 / 1e6,
      MH = (HH, BH) => "joyConRight" === BH ? {
        x: HH.y,
        y: -HH.z,
        z: -HH.x
      } : {
        x: -HH.y,
        y: HH.z,
        z: -HH.x
      },
      xH = (HH, BH, LH, rH) => AH(HH) ? ((HH, BH, LH, AH) => {
        const rH = ((HH, BH, LH) => "dualShock4" === HH ? 1 === BH && LH >= 63 ? 0 : 17 === BH && LH >= 65 ? 2 : null : 1 === BH && LH >= 62 ? 0 : 49 === BH && LH >= 63 ? 1 : null)(HH, BH, LH.byteLength);
        if (null === rH) return null;
        if (2976 === AH && 1 === BH && 0 !== (4 & LH.getUint8(30))) return null;
        const SH = rH + ("dualShock4" === HH ? 12 : 15),
          hH = uH(LH, SH, XH),
          tH = uH(LH, SH + 6, GH);
        return QH(hH) && QH(tH) ? null : {
          readings: [{
            gyro: hH,
            accel: tH
          }],
          dtSec: null,
          sensorClock: "dualShock4" === HH ? LH.getUint16(rH + 9, !0) : LH.getUint32(rH + 27, !0)
        }
      })(HH, BH, LH, rH) : ((HH, BH, LH) => {
        if (48 !== BH && 49 !== BH || LH.byteLength < 48) return null;
        const AH = [];
        for (let rH = 0; rH < 3; rH++) {
          const BH = uH(LH, 12 + 12 * rH, 244e-6),
            SH = uH(LH, 18 + 12 * rH, YH);
          if (QH(SH) && QH(BH)) return null;
          AH.push({
            gyro: MH(SH, HH),
            accel: MH(BH, HH)
          })
        }
        return {
          readings: AH,
          dtSec: .005,
          sensorClock: null
        }
      })(HH, BH, LH),
      vH = 1,
      PH = [0, 1, 64, 64, 0, 1, 64, 64],
      TH = (HH, BH, LH) => new Uint8Array([15 & HH, ...PH, BH, ...LH]),
      UH = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      VH = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8908: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => qH,
      e: () => DH,
      g: () => UH,
      j: () => YH.m,
      n: () => RH,
      o: () => NH,
      p: () => VH,
      q: () => jH,
      r: () => YH.u,
      s: () => YH.y,
      v: () => wH,
      z: () => YH.E,
      D: () => lH
    });
    var AH = LH(45),
      rH = LH(15),
      SH = LH(18),
      hH = LH(1450),
      tH = LH(1241),
      zH = LH(8878),
      CH = LH(8913),
      EH = LH(8861),
      XH = LH(8855),
      GH = LH(8920),
      YH = LH(1390),
      uH = LH(8857),
      QH = LH(9339),
      WH = LH(4760),
      MH = LH(101);
    class xH {
      constructor(HH) {
        this.deps = HH, this.pads = new Map
      }
      observe(HH, BH, LH) {
        if (!this.deps.touchOnly) return;
        const AH = this.pads.get(BH.id);
        "proven" !== AH && LH ? (this.pads.set(BH.id, "proven"), void 0 !== AH && this.deps.onReleased(BH, HH, HH.timestampMs - AH)) : void 0 === AH && (this.pads.set(BH.id, HH.timestampMs), this.deps.onHeld(BH, HH)), this.deps.setMayHide("proven" === this.pads.get(BH.id))
      }
    }
    const vH = HH => HH.values.flatMap(((HH, BH) => HH >= uH.N ? [String(BH)] : [])).join(",") || "none",
      PH = (HH, BH, AH, rH, SH) => {
        const hH = (0, YH.i)(),
          tH = document.visibilityState,
          zH = document.hasFocus();
        Promise.all([Promise.resolve().then((() => LH(3209))), Promise.resolve().then((() => LH(1260))), Promise.resolve().then((() => LH(120)))]).then((LH => {
          let [{
            logControllerHudHoldToGtag: CH
          }, {
            logClientLineFromEveryPage: EH
          }, {
            siteUsed: XH
          }] = LH;
          CH(HH, BH.family, null === SH ? void 0 : Math.round(SH / 1e3)), EH(`touch HUD pad ${HH}`, TH(BH, AH, rH, SH, hH, tH, zH, XH))
        }), (() => {}))
      },
      TH = (HH, BH, LH, AH, rH, SH, hH, tH) => {
        var zH;
        const CH = {
          pad_id: HH.id.slice(0, 120),
          pad_family: HH.family,
          pad_mapping: null !== (zH = null === LH || void 0 === LH ? void 0 : LH.mapping) && void 0 !== zH ? zH : "unread",
          pad_axes: LH ? String(LH.axes.length) : "unread",
          pad_buttons: LH ? String(LH.buttons.length) : "unread",
          pressed: vH(BH),
          ms_since_touch: null === rH ? "none" : String(Math.round(BH.timestampMs - rH)),
          visibility: SH,
          focused: String(hH),
          site: tH
        };
        return null !== AH && (CH.held_ms = String(Math.round(AH))), CH
      };
    const UH = HH => !HH.repeat && !(0, QH.b)(HH.key),
      VH = "PadHidesCursor";
    let OH = !1;
    const bH = HH => {
        HH !== OH && (OH = HH, document.documentElement.classList.toggle(VH, HH))
      },
      kH = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(HH) {
          let BH = !1,
            LH = !1;
          HH.values.forEach(((HH, AH) => {
            const rH = HH >= (this.buttonsDown[AH] ? uH.P : uH.N);
            rH && !this.buttonsDown[AH] && (BH = !0, LH = !0), this.buttonsDown[AH] = rH
          }));
          return [HH.leftStick, HH.rightStick].forEach(((HH, AH) => {
            const rH = this.stickAnchors[AH];
            Math.hypot(HH.x, HH.y) < (rH ? uH.P : .3) ? this.stickAnchors[AH] = null : (!rH || Math.hypot(HH.x - rH.x, HH.y - rH.y) >= .3) && (this.stickAnchors[AH] = {
              x: HH.x,
              y: HH.y
            }, BH = !0, LH ||= !rH)
          })), BH && (this.lastActivityMs = HH.timestampMs), this.onlyMovedOn = BH && !LH, BH
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(HH) {
          return !(HH - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((HH => HH)) || this.stickAnchors.some((HH => null !== HH)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((HH => null !== HH))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      mH = (oH = () => XH.i.getActiveGamepad(), new xH({
        touchOnly: "touchOnly" === (0, MH.d)(),
        setMayHide: YH.w,
        onHeld: (HH, BH) => {
          PH("LX", HH, BH, oH(), null)
        },
        onReleased: (HH, BH, LH) => {
          PH("released", HH, BH, oH(), LH)
        }
      }));
    var oH;
    let IH = null,
      fH = !1;
    const lH = () => fH;
    let KH = null,
      cH = !1,
      eH = null;
    const qH = () => eH;
    let gH = !1;
    const NH = (HH, BH) => {
        if (!kH.observe(HH)) return !1;
        if (mH.observe(HH, BH, kH.isStickOffRest()), gH && kH.wasOnlyMoveOn() && !(0, YH.m)()) return !1;
        gH = !1, fH = !1;
        const LH = !(0, YH.m)();
        return LH && (IH = HH, eH = !OH && cH && KH ? {
          ...KH
        } : null), cH = !1, (0, YH.u)("gamepad"), bH(!0), (0, GH.l)((0, zH.i)()), LH
      },
      RH = HH => !(0, YH.m)() || HH === IH,
      jH = () => {
        kH.reset()
      },
      nH = () => {
        const HH = rH.c.get("activeInputDevice"),
          BH = "gamepad" === HH ? XH.i.getActivePad() : null;
        return {
          device: HH,
          inGame: (0, tH.A)(),
          padMovesMouse: null !== BH && (0, EH.g)(BH.id)
        }
      },
      FH = HH => {
        document.pointerLockElement ? KH = null : (KH ??= {
          x: 0,
          y: 0
        }, KH.x = HH.clientX, KH.y = HH.clientY)
      },
      DH = () => {
        const HH = new WH.d,
          BH = BH => {
            HH.reset(), gH = !1, (0, YH.u)(BH)
          },
          LH = HH => {
            if (HH.isTrusted) {
              if (HH instanceof KeyboardEvent) {
                if ((0, YH.s)(HH), !UH(HH)) return;
                fH = !0
              }
              if (HH instanceof PointerEvent && "touch" === HH.pointerType) return KH = null, void BH("touch");
              HH instanceof PointerEvent && (FH(HH), cH = !0), ("pointerdown" !== HH.type || (HH => {
                let {
                  device: BH,
                  inGame: LH,
                  padMovesMouse: AH
                } = HH;
                return !("gamepad" === BH && AH && LH)
              })(nH())) && BH("keyboardMouse")
            }
          },
          AH = HH => {
            HH.isTrusted && (KH = null, BH("touch"))
          },
          hH = HH => {
            HH.isTrusted && "touch" !== HH.pointerType && !HH.relatedTarget && (KH = null)
          },
          tH = LH => {
            if (!LH.isTrusted || "touch" === LH.pointerType) return;
            FH(LH);
            const AH = LH.movementX || 0,
              SH = LH.movementY || 0;
            if (0 === AH && 0 === SH) return;
            if (cH = !0, bH(!1), "keyboardMouse" === rH.c.get("activeInputDevice")) return;
            const hH = kH.isHolding(LH.timeStamp),
              tH = nH(),
              zH = (HH => {
                let {
                  device: BH,
                  inGame: LH,
                  padMovesMouse: AH,
                  padHolding: rH
                } = HH;
                return ("gamepad" !== BH || !AH) && "keyboardMouse" !== BH && (LH || !rH)
              })({
                ...tH,
                inGame: tH.inGame && (0, CH.d)(),
                padHolding: hH
              });
            zH && HH.add(AH, SH, LH.timeStamp) && (BH("keyboardMouse"), gH = kH.isStickOffRest())
          },
          zH = HH => {
            bH("gamepad" === HH)
          },
          EH = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", LH, EH), window.addEventListener("pointerdown", LH, EH), window.addEventListener("wheel", LH, EH), window.addEventListener("touchstart", AH, EH), window.addEventListener("pointermove", tH, EH), window.addEventListener("pointerout", hH, EH);
        const XH = SH.k.subscribe("appManagerUpdated|activeInputDevice", zH);
        return zH(rH.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", LH, EH), window.removeEventListener("pointerdown", LH, EH), window.removeEventListener("wheel", LH, EH), window.removeEventListener("touchstart", AH, EH), window.removeEventListener("pointermove", tH, EH), window.removeEventListener("pointerout", hH, EH), KH = null, SH.k.unsubscribe(XH), bH(!1)
        }
      },
      wH = () => {
        const [HH, BH] = (0, AH.useState)(zH.i);
        return (0, hH.d)(zH.b, (() => {
          BH((0, zH.i)())
        })), (0, hH.d)(XH.e, (() => {
          BH((0, zH.i)())
        })), HH
      }
  },
  8882: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      h: () => rH
    });
    const AH = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      rH = HH => AH.includes(HH)
  },
  9377: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      g: () => SH,
      i: () => zH,
      m: () => tH
    });
    var AH = LH(1450),
      rH = LH(1405);
    const SH = "controllerInventoryCursorChanged",
      hH = {
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
      tH = () => {
        var HH, BH;
        return (0, AH.e)(SH, null !== (HH = null === (BH = (0, rH.c)()) || void 0 === BH ? void 0 : BH.getInventoryCursorState()) && void 0 !== HH ? HH : hH)
      },
      zH = () => {
        var HH, BH;
        return null !== (HH = null === (BH = (0, rH.c)()) || void 0 === BH ? void 0 : BH.isPadSteppingSlots()) && void 0 !== HH && HH
      }
  },
  9370: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => tH,
      h: () => zH,
      i: () => hH,
      m: () => SH,
      n: () => EH,
      q: () => XH
    });
    let AH = null;
    const rH = new Set,
      SH = HH => (AH = HH, () => {
        if (AH === HH) {
          AH = null;
          for (const HH of rH) HH()
        }
      }),
      hH = HH => (rH.add(HH), () => {
        rH.delete(HH)
      }),
      tH = () => AH,
      zH = () => null !== AH;
    let CH = null;
    const EH = HH => {
        CH = HH
      },
      XH = () => {
        const HH = CH;
        return CH = null, HH
      },
      GH = (HH, BH) => {
        var LH, AH;
        return null !== (LH = null !== (AH = HH.find((HH => HH.element === BH))) && void 0 !== AH ? AH : HH.find((HH => HH.element.contains(BH)))) && void 0 !== LH ? LH : null
      }
  },
  9385: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH
    });
    var AH = LH(45);
    const rH = new WeakMap,
      SH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = rH.get(HH)) || void 0 === LH ? void 0 : LH.current) && void 0 !== BH ? BH : null
      },
      hH = (HH, BH) => {
        const LH = (0, AH.useRef)(BH);
        LH.current = BH;
        const SH = (0, AH.useRef)(null);
        (0, AH.useEffect)((() => {
          const BH = HH.current,
            AH = SH.current;
          BH !== AH && (AH && rH.get(AH) === LH && rH.delete(AH), SH.current = BH, BH && rH.set(BH, LH))
        })), (0, AH.useEffect)((() => () => {
          const HH = SH.current;
          HH && rH.get(HH) === LH && rH.delete(HH), SH.current = null
        }), [])
      }
  },
  9520: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => CH,
      g: () => XH,
      h: () => EH,
      j: () => zH,
      m: () => YH
    });
    var AH = LH(18),
      rH = LH(2085),
      SH = LH(1405),
      hH = LH(1390);
    const tH = HH => {
        var BH, LH;
        return (0, hH.m)() && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getGlyphForNoaAction(HH)) && void 0 !== BH ? BH : null
      },
      zH = "controllerGlyph:",
      CH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconName(HH)) && void 0 !== BH ? BH : `${zH}xbox/${HH}`
      },
      EH = HH => HH.startsWith(zH),
      XH = HH => {
        var BH, LH;
        return EH(HH) && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconUrl(HH)) && void 0 !== BH ? BH : null
      },
      GH = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", hH.e, rH.d, rH.c],
      YH = HH => {
        const BH = GH.map((BH => AH.k.subscribe(BH, HH)));
        return () => {
          for (const HH of BH) AH.k.unsubscribe(HH)
        }
      }
  },
  9361: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => AH
    });
    const AH = "controllerOpenKeyboard",
      rH = "controllerKeyboardVisible"
  },
  8913: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH,
      d: () => EH,
      g: () => zH,
      h: () => tH
    });
    var AH = LH(15),
      rH = LH(1659),
      SH = LH(1797);
    const hH = new Map,
      tH = (HH, BH) => (hH.has(HH) && console.warn(`Gameplay blocker "${HH}" registered twice; the newer one replaces it.`), hH.set(HH, BH), () => {
        hH.get(HH) === BH && hH.delete(HH)
      }),
      zH = () => (0, SH.e)(document.activeElement),
      CH = function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [BH, LH] of hH)
          if (!HH.includes(BH) && LH()) return BH;
        return null
      },
      EH = function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === AH.c.get("gameState") && (!(0, rH.t)() && (!zH() && null === CH(HH)))
      }
  },
  8857: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => IH,
      D: () => PH,
      G: () => MH,
      H: () => WH,
      L: () => CH,
      N: () => GH,
      P: () => YH,
      Q: () => rH,
      S: () => AH,
      T: () => UH,
      U: () => mH,
      Y: () => fH,
      Z: () => TH,
      b: () => lH,
      d: () => oH,
      e: () => EH,
      f: () => zH,
      i: () => tH,
      m: () => OH,
      o: () => xH,
      q: () => VH,
      u: () => SH,
      v: () => XH,
      y: () => vH
    });
    const AH = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      rH = AH.length,
      SH = function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(rH).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: HH
        }
      },
      hH = Object.fromEntries(AH.map(((HH, BH) => [HH, BH]))),
      tH = HH => hH[HH],
      zH = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const AH = Math.hypot(HH.x, HH.y);
        if (AH <= BH) return {
          x: 0,
          y: 0
        };
        const rH = Math.min(1, (AH - BH) / Math.max(1e-4, LH - BH));
        return {
          x: HH.x / AH * rH,
          y: HH.y / AH * rH
        }
      },
      CH = ["exponential", "linear", "boost"],
      EH = (HH, BH) => {
        const LH = Math.hypot(HH.x, HH.y);
        if (0 === LH) return {
          x: 0,
          y: 0
        };
        const AH = ((HH, BH) => {
          const LH = Math.max(0, Math.min(1, HH));
          return "linear" === BH ? LH : LH * LH
        })(LH, BH);
        return {
          x: HH.x / LH * AH,
          y: HH.y / LH * AH
        }
      },
      XH = .5,
      GH = .3,
      YH = .2,
      uH = tH("LT"),
      QH = tH("RT"),
      WH = HH => HH === uH || HH === QH,
      MH = (HH, BH) => {
        const LH = tH(BH);
        return WH(LH) ? HH[LH] > .35 : HH[LH] >= XH
      },
      xH = (HH, BH) => HH.map(((HH, LH) => WH(LH) ? BH[LH] ? HH > .35 : HH >= .55 : HH >= XH)),
      vH = ["Up", "Down", "Left", "Right"],
      PH = HH => vH.includes(HH),
      TH = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(HH.x, HH.y) < BH ? null : Math.abs(HH.x) > Math.abs(HH.y) ? HH.x > 0 ? "Right" : "Left" : HH.y > 0 ? "Down" : "Up"
      },
      UH = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      VH = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      OH = ["default", "slow", "off"],
      bH = 800,
      kH = 250,
      mH = (HH, BH) => "off" === BH ? null : "slow" === BH ? {
        initialDelayMs: Math.max(HH.initialDelayMs, bH),
        intervalMs: Math.max(HH.intervalMs, kH)
      } : HH;
    class oH {
      constructor(HH) {
        this.readTiming = HH, this.LX = !1, this.timing = null, this.nextFireMs = 0
      }
      update(HH, BH) {
        return HH ? this.LX ? !!(this.timing && BH >= this.nextFireMs) && (this.nextFireMs = BH + this.timing.intervalMs, !0) : (this.LX = !0, this.timing = this.readTiming(), this.nextFireMs = BH + (null !== (LH = null === (AH = this.timing) || void 0 === AH ? void 0 : AH.initialDelayMs) && void 0 !== LH ? LH : 0), !0) : (this.LX = !1, !1);
        var LH, AH
      }
      reset() {
        this.LX = !1
      }
    }
    const IH = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      fH = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class lH {
      constructor(HH) {
        this.timer = HH, this.direction = null
      }
      update(HH, BH) {
        return HH !== this.direction && (this.timer.reset(), this.direction = HH), this.timer.update(null !== HH, BH) ? HH : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9390: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH
    });
    let AH = -1 / 0;
    const rH = () => {
        AH = performance.now()
      },
      SH = HH => performance.now() - AH < HH
  },
  9342: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      f: () => SH
    });
    var AH = LH(8878),
      rH = LH(8857);
    const SH = HH => (0, rH.U)(HH, (0, AH.g)().buttonRepeat),
      hH = HH => new rH.d((() => SH(HH)))
  },
  8897: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      c: () => SH,
      e: () => tH
    });
    var AH = LH(18),
      rH = LH(8878);
    const SH = (HH, BH) => "OpenShop" === HH ? "shop" === BH : "OpenLobbyLeaderboard" !== HH || "leaderboard" === BH;
    let hH = !1;
    const tH = HH => {
        HH !== hH && (hH = HH, AH.k.AX(rH.b, (0, rH.g)()))
      },
      zH = () => ((HH, BH) => "shop" === HH && BH ? "shop" : "leaderboard")((0, rH.g)().leaderboardButton, hH)
  },
  8889: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => TH,
      D: () => GH,
      E: () => YH,
      I: () => XH,
      J: () => PH,
      L: () => CH,
      M: () => MH,
      Q: () => kH,
      U: () => vH,
      Y: () => QH,
      ab: () => WH,
      bb: () => uH,
      d: () => cH,
      f: () => qH,
      fb: () => xH,
      g: () => mH,
      gb: () => fH,
      h: () => hH,
      jb: () => SH,
      k: () => bH,
      mb: () => UH,
      n: () => VH,
      q: () => lH,
      qb: () => eH,
      r: () => KH,
      sb: () => OH,
      t: () => EH,
      v: () => zH,
      y: () => tH
    });
    var AH = LH(8875),
      rH = LH(8857);
    const SH = {
        min: 25,
        max: 500,
        step: 5
      },
      hH = {
        min: 25,
        max: 100,
        step: 5
      },
      tH = {
        min: 0,
        max: .4,
        step: .01
      },
      zH = {
        min: 25,
        max: 300,
        step: 5
      },
      CH = {
        min: .5,
        max: 6,
        step: .1
      },
      EH = (HH, BH) => {
        if (!Number.isFinite(HH)) return BH.min;
        const LH = BH.min + Math.round((HH - BH.min) / BH.step) * BH.step,
          AH = Math.min(BH.max, Math.max(BH.min, LH));
        return Math.round(1e3 * AH) / 1e3
      },
      XH = HH => `${Math.round(HH)}%`,
      GH = HH => XH(100 * HH),
      YH = HH => `${HH.toFixed(1)}\xd7`,
      uH = [{
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
      QH = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      WH = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      MH = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      xH = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      vH = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      PH = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      TH = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      UH = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      VH = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      OH = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      bH = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      kH = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      mH = {
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
      oH = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      IH = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      fH = AH.c.map((HH => {
        let {
          group: BH,
          actions: LH
        } = HH;
        const AH = LH.map((HH => ({
          kind: "action",
          action: HH
        })));
        return {
          titleKey: oH[BH],
          rows: "gameplay" === BH ? [...IH, ...AH] : AH
        }
      })),
      lH = rH.S.filter((HH => "Home" !== HH)),
      KH = 1e4;
    class cH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = HH, this.openButton = BH, this.accepts = LH, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(HH, BH) {
        var LH;
        this.updateIgnored(HH, BH);
        const AH = BH - (null !== (LH = this.startMs) && void 0 !== LH ? LH : BH) >= 250;
        for (const rH of lH)
          if (rH !== this.cancelButton && AH && !this.ignoredUntilMs.has(rH) && HH.wasPressed(rH) && this.accepts(rH)) return {
            kind: "bind",
            button: rH
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (HH.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = BH
        }
        return null === this.cancelDownAtMs ? null : HH.isHeld(this.cancelButton) && BH - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : HH.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(HH) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (HH - this.cancelDownAtMs) / 700)
      }
      updateIgnored(HH, BH) {
        if (null === this.startMs) {
          this.startMs = BH;
          for (const BH of lH) HH.isDown(BH) && this.ignoredUntilMs.set(BH, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, BH + 250)
        }
        for (const [LH, AH] of this.ignoredUntilMs) {
          const rH = HH.isDown(LH);
          AH === 1 / 0 ? rH || LH !== this.openButton ? rH || this.ignoredUntilMs.delete(LH) : this.ignoredUntilMs.set(LH, BH + 250) : BH >= AH ? this.ignoredUntilMs.delete(LH) : rH && this.ignoredUntilMs.set(LH, 1 / 0)
        }
      }
    }
    const eH = 6e3;
    class qH {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(HH, BH) {
        let {
          pressed: LH,
          LX: AH
        } = HH;
        if (LH) {
          const HH = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== HH && BH - HH < 1500 ? [...this.pressesAtMs, BH] : [BH], this.pressesAtMs.length >= 3) return 1
        }
        return AH ? (this.downAtMs ??= BH, Math.min(1, (BH - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  5513: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      h: () => hH
    });
    var AH = LH(45);
    const rH = new WeakMap,
      SH = HH => {
        var BH;
        const LH = HH.closest("[data-pad-slider]");
        return LH && null !== (BH = rH.get(LH)) && void 0 !== BH ? BH : null
      },
      hH = (HH, BH) => {
        const LH = (0, AH.useRef)(BH);
        LH.current = BH, (0, AH.useEffect)((() => {
          if (HH.current) return ((HH, BH) => (rH.set(HH, BH), () => {
            rH.get(HH) === BH && rH.delete(HH)
          }))(HH.current, {
            adjust: HH => {
              LH.current.adjust(HH)
            },
            setFraction: HH => {
              LH.current.setFraction(HH)
            },
            endDrag: () => {
              LH.current.endDrag()
            }
          })
        }), [HH])
      }
  },
  9509: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => hH,
      i: () => SH,
      l: () => AH,
      p: () => tH,
      r: () => CH,
      t: () => EH
    });
    const AH = "controllerActionWheelOpen",
      rH = "controllerActionWheelAim",
      SH = "controllerActionWheelCommit",
      hH = "controllerActionWheelClose",
      tH = "controllerActionWheelPick";
    let zH = !1;
    const CH = () => zH,
      EH = HH => {
        zH = HH
      }
  },
  9505: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = 0;
    const rH = () => {
        AH++
      },
      SH = () => AH
  },
  9407: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      i: () => rH,
      k: () => hH,
      o: () => SH,
      p: () => AH,
      q: () => CH
    });
    const AH = "controllerQuickChatWheelOpen",
      rH = "controllerQuickChatWheelAim",
      SH = "controllerQuickChatWheelCommit",
      hH = "controllerQuickChatWheelClose";
    let tH = !1;
    const zH = () => tH,
      CH = HH => {
        tH = HH
      }
  },
  9426: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => rH
    });
    var AH = LH(18);
    const rH = "localBlockBroken";

    function SH() {
      return {
        onPlayerChangeBlock(HH, BH, LH, SH, hH, tH) {
          "Air" === tH && AH.k.AX(rH)
        }
      }
    }
  },
  9577: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => zH
    });
    var AH = LH(15),
      rH = LH(1297),
      SH = LH(81);
    const hH = {
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

    function tH() {
      return (0, SH.isMobile)() && "function" === typeof navigator.vibrate
    }
    const zH = new class {
      constructor(HH) {
        this.deps = HH, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(HH, BH) {
        var LH;
        if (!this.deps.enabled()) return;
        const AH = hH[HH],
          rH = null !== BH && void 0 !== BH ? BH : AH.pattern;
        if (null === rH) return void console.warn("No vibration pattern for", HH);
        const SH = this.deps.now();
        SH - this.lastAnyAt < 40 && AH.priority < this.playingPriority || SH - (null !== (LH = this.lastAt.get(HH)) && void 0 !== LH ? LH : -1 / 0) < AH.minGapMs || SH < this.playingUntil && AH.priority < this.playingPriority || (this.lastAt.set(HH, SH), this.lastAnyAt = SH, this.playingUntil = SH + rH.reduce(((HH, BH) => HH + BH), 0), this.playingPriority = AH.priority, this.deps.vibrate(rH))
      }
    }({
      vibrate: HH => {
        navigator.vibrate([...HH])
      },
      now: () => performance.now(),
      enabled: () => tH() && AH.c.get("isTouchScreen") && AH.c.get("clientEscMenuOptions").vibration && !(0, rH.d)()
    })
  },
  9419: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(1196);

    function rH(HH, BH) {
      var LH, rH;
      try {
        const LH = (0, AH.d)();
        if ("function" === typeof LH) {
          const AH = new LH(HH, BH);
          if (AH.type === HH) return AH
        }
      } catch {}
      const SH = document.createEvent("Event");
      return SH.initEvent(HH, null !== (LH = null === BH || void 0 === BH ? void 0 : BH.bubbles) && void 0 !== LH && LH, null !== (rH = null === BH || void 0 === BH ? void 0 : BH.cancelable) && void 0 !== rH && rH), SH
    }
  },
  9467: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(9475),
      rH = LH(619),
      SH = LH(120);

    function hH(HH) {
      var BH, LH;
      if ((0, rH.M)(HH)) return !0;
      const hH = null !== (BH = null === (LH = SH.siteUsedData[SH.siteUsed]) || void 0 === LH ? void 0 : LH.adConfig.showRewardedAds) && void 0 !== BH && BH;
      for (const rH in HH) {
        const BH = HH[rH];
        if (null !== BH && void 0 !== BH && BH.items)
          for (const HH in BH.items)
            if ((0, AH.i)(BH.items[HH], hH)) return !1
      }
      return !0
    }
  },
  9475: (HH, BH, LH) => {
    function AH(HH, BH) {
      return !HH.hidden && (BH || !HH.isRewardedAd)
    }

    function rH(HH) {
      return "object" === typeof HH ? HH.option : HH
    }

    function SH(HH, BH) {
      var LH;
      if ("dropdown" === (null === (LH = HH.userInput) || void 0 === LH ? void 0 : LH.type) && "object" === typeof HH.userInput.dropdownOptions[0]) {
        for (const LH of HH.userInput.dropdownOptions)
          if (rH(LH) === BH) return "object" === typeof LH ? LH.cost : HH.cost;
        console.error("Didn't find matching option for dropdown item. Item:", HH, "input:", BH)
      }
      return HH.cost
    }

    function hH(HH, BH, LH) {
      var AH;
      const rH = null !== (AH = LH.excludedPlayers) && void 0 !== AH ? AH : [BH];
      return HH.filter((HH => !rH.includes(HH)))
    }
    LH.d(BH, {
      c: () => SH,
      f: () => rH,
      g: () => hH,
      i: () => AH
    })
  },
  9511: () => {},
  8936: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8940: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8949: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8958: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8966: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8974: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8980: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8984: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8991: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8997: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9006: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9009: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9013: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9017: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9024: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9028: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9036: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9044: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9053: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9059: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9062: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9069: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9071: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9079: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9081: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9084: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9087: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9094: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9098: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9103: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9108: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9111: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9116: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9120: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9125: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9129: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9137: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9143: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9145: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9147: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9154: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9163: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9165: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9173: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9180: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9184: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9191: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9196: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9202: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9208: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9210: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9215: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9218: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9221: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9228: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9231: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9237: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9241: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9248: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9252: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9259: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9267: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9273: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9279: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9281: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9285: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9292: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9294: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9299: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9305: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9308: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9315: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9320: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9325: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9332: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9336: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
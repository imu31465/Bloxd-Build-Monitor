export const id = 33;
export const ids = [33];
export const modules = {
  8794: (UU, XU, zU) => {
    var cU = {
      "./nintendo/A.svg": 8798,
      "./nintendo/B.svg": 8802,
      "./nintendo/Down.svg": 8808,
      "./nintendo/Home.svg": 8817,
      "./nintendo/LB.svg": 8825,
      "./nintendo/LS.svg": 8834,
      "./nintendo/LT.svg": 8841,
      "./nintendo/Left.svg": 8848,
      "./nintendo/LeftStick.svg": 8854,
      "./nintendo/Menu.svg": 8862,
      "./nintendo/RB.svg": 8871,
      "./nintendo/RS.svg": 8873,
      "./nintendo/RT.svg": 8879,
      "./nintendo/Right.svg": 8888,
      "./nintendo/RightStick.svg": 8890,
      "./nintendo/Up.svg": 8893,
      "./nintendo/View.svg": 8899,
      "./nintendo/X.svg": 8901,
      "./nintendo/Y.svg": 8907,
      "./playstation/A.svg": 8913,
      "./playstation/B.svg": 8917,
      "./playstation/Down.svg": 8920,
      "./playstation/Home.svg": 8927,
      "./playstation/LB.svg": 8932,
      "./playstation/LS.svg": 8938,
      "./playstation/LT.svg": 8945,
      "./playstation/Left.svg": 8947,
      "./playstation/LeftStick.svg": 8953,
      "./playstation/Menu.svg": 8961,
      "./playstation/RB.svg": 8966,
      "./playstation/RS.svg": 8971,
      "./playstation/RT.svg": 8980,
      "./playstation/Right.svg": 8989,
      "./playstation/RightStick.svg": 8993,
      "./playstation/Up.svg": 8995,
      "./playstation/View.svg": 9e3,
      "./playstation/X.svg": 9004,
      "./playstation/Y.svg": 9010,
      "./steamdeck/A.svg": 9017,
      "./steamdeck/B.svg": 9024,
      "./steamdeck/Down.svg": 9026,
      "./steamdeck/Home.svg": 9033,
      "./steamdeck/LB.svg": 9035,
      "./steamdeck/LS.svg": 9040,
      "./steamdeck/LT.svg": 9049,
      "./steamdeck/Left.svg": 9053,
      "./steamdeck/LeftStick.svg": 9057,
      "./steamdeck/Menu.svg": 9059,
      "./steamdeck/RB.svg": 9066,
      "./steamdeck/RS.svg": 9073,
      "./steamdeck/RT.svg": 9078,
      "./steamdeck/Right.svg": 9086,
      "./steamdeck/RightStick.svg": 9095,
      "./steamdeck/Up.svg": 9099,
      "./steamdeck/View.svg": 9106,
      "./steamdeck/X.svg": 9112,
      "./steamdeck/Y.svg": 9121,
      "./xbox/A.svg": 9123,
      "./xbox/B.svg": 9128,
      "./xbox/Down.svg": 9137,
      "./xbox/Home.svg": 9140,
      "./xbox/LB.svg": 9148,
      "./xbox/LS.svg": 9155,
      "./xbox/LT.svg": 9164,
      "./xbox/Left.svg": 9166,
      "./xbox/LeftStick.svg": 9170,
      "./xbox/Menu.svg": 9174,
      "./xbox/RB.svg": 9181,
      "./xbox/RS.svg": 9188,
      "./xbox/RT.svg": 9193,
      "./xbox/Right.svg": 9201,
      "./xbox/RightStick.svg": 9207,
      "./xbox/Up.svg": 9213,
      "./xbox/View.svg": 9216,
      "./xbox/X.svg": 9219,
      "./xbox/Y.svg": 9224
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 8794
  },
  9355: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OU,
      e: () => eU,
      i: () => CU
    });
    var cU = zU(61),
      yU = zU(4982),
      QU = zU(1129),
      AU = zU(1492),
      FU = zU(31),
      oU = zU(3820),
      DU = zU(2338),
      EU = zU(1258),
      YU = zU(2772),
      NU = zU(2005),
      IU = zU(2047),
      pU = zU(1193),
      aU = zU(27),
      tU = zU(1680),
      gU = zU(1106),
      kU = zU.n(gU),
      GU = zU(9364),
      BU = zU(9373),
      ZU = zU(9381),
      RU = zU(9273),
      PU = zU(9383),
      WU = zU(3464),
      dU = (zU(9392), zU(1305));
    let LU = null;

    function eU() {
      return null !== LU
    }

    function CU() {
      return "pad" === LU
    }

    function wU() {
      return "inGame" === aU.e.get("gameState") && !(0, tU.p)()
    }

    function qU(UU) {
      return (0, BU.r)(UU, EU.k, BU.c, BU.e, BU.i)
    }
    const OU = (0, cU.memo)((function() {
      const {
        t: UU
      } = (0, pU.I)(), {
        userContext: XU
      } = (0, QU.d)(), [zU, aU] = (0, cU.useState)(null), [gU, eU] = (0, cU.useState)(null), CU = (0, cU.useRef)(null), OU = (0, cU.useCallback)((UU => {
        CU.current = UU, eU(UU)
      }), []), SU = (0, cU.useRef)(0), rU = (0, cU.useRef)(null), uU = (0, cU.useRef)({
        x: 0,
        y: 0
      }), [fU, iU] = (0, cU.useState)(0), HU = (0, cU.useMemo)((() => function(UU) {
        const XU = [];
        for (let cU = 0; cU < EU.k; cU++) {
          var zU;
          XU.push(null !== (zU = UU[cU]) && void 0 !== zU ? zU : null)
        }
        return XU
      }((0, YU.j)(XU.getPlayerCosmetics().emote))), [XU, fU]);
      (0, IU.b)("cosmeticsUpdated", (UU => {
        UU.some((UU => UU.local && "emote" === UU.FU)) && iU((UU => UU + 1))
      }));
      const MU = (0, cU.useRef)(!1),
        vU = (0, cU.useCallback)((function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === UU && (0, ZU.e)(), MU.current = XU, uU.current = {
            x: 0,
            y: 0
          }, OU(null), aU(UU)
        }), [OU]),
        VU = (0, cU.useCallback)((() => {
          aU(null), OU(null), uU.current = {
            x: 0,
            y: 0
          }
        }), [OU]),
        sU = (0, cU.useCallback)((UU => {
          if (Date.now() < SU.current) return;
          const XU = (0, DU.g)(UU),
            zU = !!XU.holdUntilMove,
            cU = zU ? 600 : Math.ceil(1e3 * XU.animation.animation_length / DU.b) + 200;
          SU.current = Date.now() + cU, rU.current = UU, NU.gameBridge.send("playEmote", UU), NU.gameBridge.send("applyTemporaryThirdPerson", zU ? {} : {
            durationMs: cU
          })
        }), []);
      (0, AU.f)("requestToggleEmoteWheel", (() => {
        null === zU ? wU() && vU("click") : VU()
      })), (0, AU.f)("requestEmoteWheelHoldOpen", (() => {
        null === zU && wU() && vU((0, GU.e)() ? "hold" : "click")
      })), (0, AU.f)("requestEmoteWheelPadOpen", (UU => {
        null !== zU || !wU() || (0, RU.c)() || (0, PU.q)() || vU("pad", UU)
      })), (0, AU.f)("requestEmoteRepeatLast", (() => {
        if (null !== zU || !wU() || (0, RU.c)() || (0, PU.q)()) return;
        const UU = rU.current;
        null !== UU && HU.includes(UU) ? sU(UU) : vU("pad", !0)
      }));
      const nU = () => {
        const UU = CU.current,
          XU = null !== UU ? HU[UU] : null;
        null !== XU && "pad" === zU && Date.now() < SU.current || (VU(), null !== XU && sU(XU))
      };
      (0, AU.f)("emoteWheelPadAim", (UU => {
        if ("pad" !== zU) return;
        const XU = (0, BU.z)(UU, EU.k, CU.current);
        OU(null !== XU && null !== HU[XU] ? XU : null)
      })), (0, AU.f)("requestEmoteWheelPadCommit", (UU => {
        "pad" !== zU || UU && MU.current || nU()
      })), (0, AU.f)("appManagerUpdated|activeInputDevice", (UU => {
        null !== zU && "pad" === zU !== ("gamepad" === UU) && VU()
      })), (0, cU.useLayoutEffect)((() => (LU = zU, (0, oU.v)("emoteWheel", "pad" === zU), FU.k.UY(oU.n), () => {
        LU = null, (0, oU.v)("emoteWheel", !1), FU.k.UY(oU.n)
      })), [zU]), (0, AU.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === zU && nU()
      })), (0, AU.f)("requestEmoteWheelClose", (() => {
        null !== zU && VU()
      })), (0, AU.f)("appManagerUpdated|gameState", (UU => {
        "inGame" !== UU && VU()
      }));
      const mU = () => {
        (0, tU.p)() && VU()
      };
      if ((0, AU.f)("appManagerUpdated|openEverythingMenuName", mU), (0, AU.f)("appManagerUpdated|openInGameMenuName", mU), (0, AU.f)("pointerLockUpdate", (UU => {
          UU || "hold" !== zU || VU()
        })), (0, cU.useEffect)((() => {
          if (null === zU) return;
          const UU = UU => {
            "Escape" === UU.key && (UU.stopImmediatePropagation(), UU.preventDefault(), VU())
          };
          return document.addEventListener("keydown", UU, !0), () => {
            document.removeEventListener("keydown", UU, !0)
          }
        }), [zU, VU]), (0, yU.c)(!0, "click" === zU, "EmoteWheelOverlay"), (0, cU.useEffect)((() => {
          if ("hold" === zU) return NU.gameBridge.send("holdEmoteWheel", !0), () => {
            NU.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [zU]), (0, cU.useEffect)((() => {
          if ("hold" !== zU) return;
          const UU = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            XU = BU.q * UU,
            cU = BU.m * UU,
            yU = UU => {
              let zU = uU.current.x + UU.movementX,
                yU = uU.current.y + UU.movementY;
              const QU = Math.hypot(zU, yU);
              if (QU > XU) {
                const UU = XU / QU;
                zU *= UU, yU *= UU
              }
              uU.current = {
                x: zU,
                y: yU
              }, OU(function(UU, XU, zU, cU) {
                if (Math.hypot(UU, XU) < zU) return null;
                const yU = (0, BU.t)(UU, XU, EU.k);
                return null === cU[yU] ? null : yU
              }(zU, yU, cU, HU))
            };
          return document.addEventListener("mousemove", yU), () => {
            document.removeEventListener("mousemove", yU)
          }
        }), [zU, HU, OU]), null === zU) return null;
      const lU = "hold" === zU || "pad" === zU,
        xU = null !== gU ? HU[gU] : null,
        JU = null !== xU ? (0, DU.g)(xU).displayName : UU("emotes:pickEmote");
      return (0, dU.jsx)("div", {
        className: kU()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === zU
        }),
        onMouseDown: UU => {
          UU.target === UU.currentTarget && VU()
        },
        children: (0, dU.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * BU.q + "rem",
            height: 2 * BU.q + "rem"
          },
          children: [(0, dU.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${BU.l} ${BU.l}`,
            children: [HU.map(((XU, zU) => {
              const cU = null !== XU,
                yU = lU && zU === gU;
              return (0, dU.jsx)("path", {
                d: qU(zU),
                className: kU()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: yU,
                  EmoteWheelWedgeDisabled: !cU
                }),
                onClick: UU => {
                  UU.stopPropagation(), null !== XU && (UU => {
                    VU(), sU(UU)
                  })(XU)
                },
                "aria-label": null !== XU ? (0, DU.g)(XU).displayName : UU("emotes:emptySlot")
              }, zU)
            })), (0, dU.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: BU.c,
              cy: BU.c,
              r: BU.i
            }), (0, dU.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: BU.c,
              cy: BU.c,
              r: BU.e
            }), lU && null !== gU && (0, dU.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: qU(gU)
            })]
          }), HU.map(((UU, XU) => {
            const zU = null !== UU,
              cU = lU && XU === gU,
              yU = (0, BU.x)(XU, EU.k),
              QU = BU.b * Math.cos(yU),
              AU = BU.b * Math.sin(yU);
            return (0, dU.jsx)("div", {
              className: kU()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: cU,
                EmoteWheelSlotIconDisabled: !zU
              }),
              style: {
                left: `calc(50% + ${QU}rem)`,
                top: `calc(50% + ${AU}rem)`,
                backgroundImage: zU ? `url(${(0,WU.h)("emote",UU)})` : void 0
              },
              "aria-hidden": !0
            }, XU)
          })), (0, dU.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: JU
          })]
        })
      })
    }))
  },
  9475: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => LU,
      d: () => wU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(2668),
      AU = zU(3796);
    const FU = 6,
      oU = 4,
      DU = ["HudMove-inventory", "HudLocked-inventory"];

    function EU(UU) {
      let {
        left: XU,
        right: zU,
        height: cU,
        rowTop: yU,
        besideBottom: QU,
        obstacles: AU
      } = UU;
      const DU = AU.filter((UU => UU.left < zU + FU && UU.right > XU - FU));
      let EU = QU;
      for (let FU = 0; FU <= DU.length; FU++) {
        const UU = DU.filter((UU => UU.top < EU + oU && UU.bottom > EU - cU - oU));
        if (0 === UU.length) break;
        EU = Math.min(...UU.map((UU => UU.top))) - oU
      }
      return EU === QU ? null : Math.ceil(yU - EU)
    }

    function YU(UU) {
      return Array.from(UU.children).filter((UU => !UU.classList.contains("HotBarRow")))
    }

    function NU(UU) {
      return function(UU) {
        const XU = [],
          zU = (UU, cU) => {
            const yU = UU.getBoundingClientRect();
            if (yU.width > 0 && yU.height > 0) XU.push(UU);
            else if (cU < 2)
              for (const XU of Array.from(UU.children)) zU(XU, cU + 1)
          };
        for (const cU of UU) zU(cU, 0);
        return XU
      }(YU(UU).flatMap((UU => UU.classList.contains("AuraBarWrapper") ? [] : UU.classList.contains("BottomScreenStatBarList") ? Array.from(UU.children) : [UU])))
    }

    function IU(UU, XU) {
      var zU;
      const cU = null === (zU = UU.querySelector(":scope > .AuraBarWrapper")) || void 0 === zU ? void 0 : zU.getBoundingClientRect();
      return (cU && cU.height > 0 ? cU.top : XU) - oU
    }
    const pU = ".BottomScreenMessage, [role='status']";

    function aU(UU, XU, zU, cU, yU) {
      const QU = UU => UU.map((UU => UU.getBoundingClientRect())),
        AU = EU({
          ...zU,
          obstacles: QU(zU.obstacles.filter((UU => !UU.matches(pU))))
        }),
        FU = XU.ownerDocument.defaultView,
        oU = `${null===FU||void 0===FU?void 0:FU.innerWidth}x${null===FU||void 0===FU?void 0:FU.innerHeight}:${cU}:${Math.round(zU.rowTop)}`,
        DU = UU.get(XU),
        YU = (null === DU || void 0 === DU ? void 0 : DU.at) === oU ? (NU = DU.rise, IU = AU, null === NU ? IU : null === IU ? NU : Math.max(NU, IU)) : AU;
      var NU, IU;
      const aU = EU({
        ...zU,
        besideBottom: null === YU ? zU.besideBottom : zU.rowTop - YU,
        obstacles: QU(zU.obstacles)
      });
      return yU && UU.set(XU, {
        at: oU,
        rise: YU
      }), null !== aU && void 0 !== aU ? aU : YU
    }

    function tU(UU, XU, zU, cU) {
      UU.classList.toggle(XU, null !== cU), null === cU ? UU.style.removeProperty(zU) : UU.style.setProperty(zU, `${cU}px`)
    }
    const gU = new WeakMap,
      kU = new WeakMap,
      GU = "(orientation: portrait) and (max-width: 600px)";

    function BU(UU, XU) {
      const zU = UU.getBoundingClientRect();
      if (0 === zU.width) return null;
      const cU = [zU, ...Array.from(UU.children).filter((UU => !(UU => XU.contains(UU.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(UU))).map((UU => UU.getBoundingClientRect())).filter((UU => UU.width > 0))];
      return {
        left: Math.min(...cU.map((UU => UU.left))),
        top: Math.min(...cU.map((UU => UU.top))),
        right: Math.max(...cU.map((UU => UU.right))),
        bottom: Math.max(...cU.map((UU => UU.bottom)))
      }
    }

    function ZU(UU) {
      let {
        slotsLeft: XU,
        slotsRight: zU,
        width: cU,
        zoneRight: yU
      } = UU;
      const QU = Math.max(0, Math.floor(zU - XU - cU));
      return null === yU ? 0 : Math.min(QU, Math.max(0, Math.ceil(yU + FU - XU)))
    }

    function RU(UU) {
      var XU;
      const zU = UU.getBoundingClientRect();
      if (0 === zU.width) return null;
      const cU = null === (XU = UU.parentElement) || void 0 === XU ? void 0 : XU.getBoundingClientRect();
      return cU && cU.width > 0 ? Math.min(zU.right, cU.left + cU.width * PU) : zU.right
    }
    const PU = .35,
      WU = new WeakMap,
      dU = new WeakMap;

    function LU(UU) {
      eU(UU) && eU(UU),
        function(UU) {
          var XU, zU;
          const cU = UU.documentElement.classList;
          if (!cU.contains("TouchHotbar") || !cU.contains("TouchHotbarKeysAbove") || DU.some((UU => cU.contains(UU))) || !1 !== (null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU ? void 0 : zU.call(XU, GU).matches)) return;
          const yU = UU.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            QU = null === yU || void 0 === yU ? void 0 : yU.closest(".BottomMiddleElements"),
            AU = null === yU || void 0 === yU ? void 0 : yU.parentElement;
          if (!yU || !QU || !AU || QU.classList.contains("TouchInventoryOpen") || yU.querySelector("[data-pressing]")) return;
          const FU = BU(yU, cU),
            oU = AU.getBoundingClientRect().top,
            EU = FU && aU(gU, QU, {
              left: FU.left,
              right: FU.right,
              height: FU.bottom - FU.top,
              rowTop: oU,
              besideBottom: IU(QU, oU),
              obstacles: NU(QU).filter((UU => !UU.classList.contains("BottomScreenMessage")))
            }, `${Math.round(FU.left)}:${Math.round(FU.right-FU.left)}x${Math.round(FU.bottom-FU.top)}`, !0);
          kU.has(QU) && kU.get(QU) === EU || (tU(QU, "KeysAboveUp", "--touch-keys-above-rise", EU), kU.set(QU, EU))
        }(UU)
    }

    function eU(UU) {
      var XU, zU, cU, yU;
      const QU = UU.documentElement.classList;
      if (!QU.contains("TouchHotbar") || QU.contains("TouchHotbarKeysAbove") || DU.some((UU => QU.contains(UU))) || null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU || !zU.call(XU, CU).matches) return !1;
      const AU = UU.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        FU = null === AU || void 0 === AU ? void 0 : AU.parentElement,
        oU = null === AU || void 0 === AU ? void 0 : AU.closest(".BottomMiddleElements"),
        EU = null === oU || void 0 === oU ? void 0 : oU.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!AU || !FU || !oU || !EU || oU.classList.contains("TouchInventoryOpen")) return !1;
      const YU = AU.getBoundingClientRect();
      if (0 === YU.width) return !1;
      const pU = UU.querySelector(".JoystickZone"),
        gU = EU.getBoundingClientRect(),
        kU = FU.getBoundingClientRect().top,
        GU = ZU({
          slotsLeft: gU.left,
          slotsRight: gU.right,
          width: YU.width,
          zoneRight: pU ? RU(pU) : null
        }),
        BU = WU.get(oU),
        PU = gU.left + GU,
        LU = {
          shift: GU,
          rise: aU(dU, oU, {
            left: PU,
            right: PU + YU.width,
            height: YU.height,
            rowTop: kU,
            besideBottom: IU(oU, kU),
            obstacles: NU(oU)
          }, `${GU}:${Math.round(YU.width)}`, (null !== (cU = null === BU || void 0 === BU ? void 0 : BU.shift) && void 0 !== cU ? cU : 0) === GU)
        };
      return (null === BU || void 0 === BU ? void 0 : BU.shift) !== LU.shift && oU.style.setProperty("--touch-shop-above-shift", `${LU.shift}px`), (null === BU || void 0 === BU ? void 0 : BU.rise) !== LU.rise && tU(oU, "ShopAboveUp", "--touch-shop-above-rise", LU.rise), WU.set(oU, LU), (null !== (yU = null === BU || void 0 === BU ? void 0 : BU.shift) && void 0 !== yU ? yU : 0) !== LU.shift
    }
    const CU = "(orientation: landscape) and (max-height: 500px)";

    function wU(UU, XU, zU) {
      (0, cU.useLayoutEffect)((() => {
        var XU;
        const cU = null === (XU = UU.current) || void 0 === XU ? void 0 : XU.closest(".BottomMiddleElements");
        if (!cU || zU) return;
        const FU = new ResizeObserver((() => {
            IU(!1)
          })),
          oU = () => {
            FU.disconnect();
            const UU = document.querySelector(".JoystickZone");
            for (const XU of [UU, cU, cU.querySelector(".HotBarGameItemsContainer"), ...NU(cU)]) XU && FU.observe(XU)
          };
        let DU = null,
          EU = !1;
        const IU = UU => {
            EU ||= UU, DU ??= requestAnimationFrame((() => {
              DU = null, EU && (EU = !1, oU()), LU(document)
            }))
          },
          pU = new MutationObserver((() => {
            IU(!0)
          }));
        pU.observe(cU, {
          childList: !0
        });
        for (const UU of YU(cU)) pU.observe(UU, {
          childList: !0,
          subtree: !0
        });
        LU(document), oU();
        const aU = () => {
            IU(!0)
          },
          tU = [(0, yU.n)(QU.h, aU), (0, yU.n)(AU.e, aU)],
          gU = new MutationObserver((() => {
            IU(!1)
          }));
        return UU.current && gU.observe(UU.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          gU.disconnect(), null !== DU && cancelAnimationFrame(DU), FU.disconnect(), pU.disconnect();
          for (const UU of tU) UU()
        }
      }), [UU, XU, zU])
    }
  },
  5540: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => pU,
      i: () => BU,
      j: () => aU,
      k: () => GU
    });
    var cU = zU(61),
      yU = zU(5548),
      QU = zU(4775),
      AU = zU(1420),
      FU = zU(5581),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1410),
      YU = zU(1800),
      NU = zU(5588),
      IU = zU(1305);

    function pU(UU) {
      let {
        label: XU,
        onClick: zU,
        checked: cU,
        circleInfoText: yU,
        className: FU,
        disabled: oU,
        note: EU
      } = UU;
      return (0, IU.jsxs)("div", {
        "aria-disabled": oU || void 0,
        "data-pad-focusable": !0,
        className: DU()("SettingBox CheckboxContainer", {
          [FU]: FU,
          SettingBoxDisabled: oU
        }),
        onClick: () => {
          oU || zU(!cU)
        },
        children: [(0, IU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IU.jsx)(QU.d, {
              className: "SettingsCheckbox",
              checked: cU,
              disabled: oU,
              onChange: () => {}
            })
          }), (0, IU.jsxs)("div", {
            className: "CheckboxText",
            children: [XU, yU && (0, IU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, IU.jsx)(AU.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yU
              })
            })]
          })]
        }), EU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: EU
        })]
      })
    }

    function aU(UU) {
      let {
        name: XU,
        onChange: zU,
        min: yU,
        max: QU,
        step: FU,
        initValue: oU,
        circleInfoText: EU,
        format: YU,
        className: NU,
        padStep: pU,
        disabled: aU = !1,
        selectableMax: tU,
        cappedNote: gU,
        note: GU,
        onChangeComplete: BU
      } = UU;
      const [ZU, RU] = (0, cU.useState)(oU), PU = (0, cU.useRef)(oU);
      (0, cU.useEffect)((() => {
        PU.current = oU, RU(oU)
      }), [oU]);
      const WU = void 0 !== tU && tU < QU,
        dU = WU ? {
          "--slider-selectable": (tU - yU) / (QU - yU)
        } : void 0,
        LU = WU && gU ? gU : GU;
      return (0, IU.jsxs)("div", {
        className: DU()("SettingBox SettingsSliderDiv", {
          [NU]: NU,
          SettingBoxDisabled: aU,
          SliderCapped: WU
        }),
        style: dU,
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [`${XU}: ${YU?YU(ZU):ZU}`, EU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, IU.jsx)("div", {
          className: "SliderDiv",
          children: (0, IU.jsx)(kU, {
            value: ZU,
            min: yU,
            max: QU,
            step: FU,
            onChange: UU => {
              if (WU && UU >= tU && ZU === tU) return;
              const XU = WU ? Math.min(UU, tU) : UU;
              PU.current = XU, RU(XU), zU(XU)
            },
            onChangeComplete: BU && (() => {
              BU(PU.current)
            }),
            format: YU,
            padStep: pU,
            disabled: aU
          })
        }), LU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: LU
        })]
      })
    }
    const tU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function gU(UU) {
      var XU;
      return (null !== (XU = String(UU).split(".")[1]) && void 0 !== XU ? XU : "").length
    }

    function kU(UU) {
      let {
        value: XU,
        min: zU,
        max: QU,
        step: AU,
        onChange: FU,
        orientation: oU,
        reverse: DU,
        setIsChanging: EU,
        tooltip: YU,
        labels: pU,
        handleLabel: aU,
        format: kU,
        onChangeStart: GU,
        onChangeComplete: BU,
        padStep: ZU,
        disabled: RU = !1
      } = UU;
      const PU = (0, cU.useRef)(null),
        WU = (0, cU.useRef)(null);
      (0, cU.useLayoutEffect)((() => {
        var UU, XU, zU;
        const cU = null !== (UU = null === (XU = PU.current) || void 0 === XU ? void 0 : XU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === cU || void 0 === cU || cU.setAttribute("data-pad-slider", ""), null === cU || void 0 === cU || cU.setAttribute("data-pad-focusable", ""), null === cU || void 0 === cU || null === (zU = cU.querySelector(".rangeslider__handle")) || void 0 === zU || zU.setAttribute("data-pad-slider-handle", ""), WU.current = cU
      }), []), (0, cU.useLayoutEffect)((() => {
        var UU, XU;
        RU ? null === (UU = WU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (XU = WU.current) || void 0 === XU || XU.removeAttribute("aria-disabled")
      }), [RU]);
      const dU = Math.max(gU(AU), gU(zU)),
        LU = UU => {
          if (UU >= QU) return QU;
          if (UU <= zU) return zU;
          const XU = Number((Math.round((UU - zU) / AU) * AU + zU).toFixed(dU));
          return Math.min(QU, Math.max(zU, XU))
        },
        eU = (0, cU.useRef)(BU);
      eU.current = BU, (0, cU.useEffect)((() => {
        const UU = PU.current;
        if (!UU) return;
        const XU = UU => {
          var XU;
          tU.has(UU.key) && (null === (XU = eU.current) || void 0 === XU || XU.call(eU))
        };
        return UU.addEventListener("keyup", XU), () => {
          UU.removeEventListener("keyup", XU)
        }
      }), []);
      const CU = (0, cU.useRef)(!1);
      return (0, NU.h)(WU, {
        adjust: UU => {
          if (RU) return;
          const cU = null !== ZU && void 0 !== ZU ? ZU : Math.max(AU, Math.round((QU - zU) / 20 / AU) * AU),
            yU = LU(XU + UU * cU * (DU ? -1 : 1));
          yU !== XU && (null === GU || void 0 === GU || GU(), FU(yU), null === BU || void 0 === BU || BU())
        },
        setFraction: UU => {
          if (RU) return;
          const cU = LU(zU + (DU ? 1 - UU : UU) * (QU - zU));
          cU !== XU && (CU.current || (CU.current = !0, null === GU || void 0 === GU || GU()), FU(cU))
        },
        endDrag: () => {
          CU.current && (CU.current = !1, null === BU || void 0 === BU || BU())
        }
      }), (0, IU.jsx)("div", {
        ref: PU,
        style: {
          display: "contents"
        },
        children: (0, IU.jsx)(yU.c, {
          value: XU,
          min: zU,
          max: QU,
          step: AU,
          onChange: UU => {
            FU(LU(UU))
          },
          orientation: oU,
          reverse: DU,
          tooltip: YU,
          labels: pU,
          handleLabel: aU,
          format: kU,
          onChangeStart: () => {
            null === GU || void 0 === GU || GU(), null === EU || void 0 === EU || EU(!0)
          },
          onChangeComplete: () => {
            null === EU || void 0 === EU || EU(!1), null === BU || void 0 === BU || BU()
          }
        })
      })
    }
    async function GU() {
      const UU = EU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await UU.getResult() && (0, YU.reloadBloxd)()
    }

    function BU(UU) {
      let {
        label: XU,
        options: zU,
        value: cU,
        onChange: yU,
        circleInfoText: QU
      } = UU;
      return (0, IU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [XU, QU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QU
          })]
        }), (0, IU.jsx)(FU.d, {
          ariaLabel: XU,
          options: zU,
          value: cU,
          onChange: yU
        })]
      })
    }
  },
  5581: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1305);

    function AU(UU) {
      let {
        options: XU,
        value: zU,
        onChange: cU,
        ariaLabel: AU,
        className: FU,
        reselectable: oU = !1,
        keepsFocus: DU = !1,
        padTabs: EU
      } = UU;
      const YU = void 0 !== EU;
      return (0, QU.jsx)("div", {
        className: yU()("SegmentedToggle", FU),
        role: "group",
        "aria-label": AU,
        "data-pad-tabs": EU,
        children: XU.map((UU => {
          const XU = UU.value === zU;
          return (0, QU.jsx)("button", {
            type: "button",
            "aria-pressed": XU,
            "data-pad-tab": YU || void 0,
            "data-pad-selected": YU && XU ? "true" : void 0,
            "data-pad-default-focus": YU && XU || void 0,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: yU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: XU
            }),
            onMouseDown: DU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              XU && !oU || cU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  9305: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU
    });
    var cU = zU(2067);
    const yU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && yU.test(UU.keycode),
      AU = UU => "Space" === UU ? "_" : cU.i[UU]
  },
  9364: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(27);

    function yU() {
      return !cU.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9461: (UU, XU, zU) => {
    zU.d(XU, {
      C: () => oU,
      G: () => NU,
      I: () => DU,
      M: () => pU,
      N: () => QU,
      b: () => yU,
      f: () => FU,
      j: () => cU,
      n: () => aU,
      o: () => IU,
      s: () => EU,
      u: () => AU,
      x: () => tU,
      z: () => YU
    });
    const cU = UU => ({
      left: UU.left,
      top: UU.top,
      right: UU.right,
      bottom: UU.bottom
    });

    function yU(UU) {
      return {
        x: (UU.left + UU.right) / 2,
        y: (UU.top + UU.bottom) / 2
      }
    }

    function QU(UU) {
      return 0 === UU.length ? null : UU.reduce(((UU, XU) => ({
        left: Math.min(UU.left, XU.left),
        top: Math.min(UU.top, XU.top),
        right: Math.max(UU.right, XU.right),
        bottom: Math.max(UU.bottom, XU.bottom)
      })))
    }

    function AU(UU, XU) {
      const zU = Math.max(0, (XU - (UU.right - UU.left)) / 2),
        cU = Math.max(0, (XU - (UU.bottom - UU.top)) / 2);
      return {
        left: UU.left - zU,
        top: UU.top - cU,
        right: UU.right + zU,
        bottom: UU.bottom + cU
      }
    }

    function FU(UU, XU) {
      return XU.x >= UU.left && XU.x <= UU.right && XU.y >= UU.top && XU.y <= UU.bottom
    }

    function oU(UU, XU, zU) {
      let cU = null,
        QU = 1 / 0;
      for (const {
          id: yU,
          box: AU
        }
        of XU) {
        const XU = (AU.right - AU.left) * (AU.bottom - AU.top);
        FU(AU, UU) && XU < QU && (QU = XU, cU = yU)
      }
      if (null !== cU) return cU;
      let oU = 1 / 0;
      for (const {
          id: DU,
          box: EU
        }
        of XU) {
        if (!FU(AU(EU, zU), UU)) continue;
        const XU = yU(EU),
          QU = Math.hypot(UU.x - XU.x, UU.y - XU.y);
        QU < oU && (oU = QU, cU = DU)
      }
      return cU
    }

    function DU(UU, XU, zU) {
      return {
        left: zU.left,
        top: zU.top,
        right: UU - zU.right,
        bottom: XU - zU.bottom
      }
    }

    function EU(UU, XU, zU, cU) {
      const yU = (UU, XU, zU) => Math.max(Math.min(XU, 0), Math.min(Math.max(zU, 0), UU));
      return {
        x: yU(XU, cU.left - UU.left, cU.right - UU.right),
        y: yU(zU, cU.top - UU.top, cU.bottom - UU.bottom)
      }
    }

    function YU(UU, XU, zU, cU, yU) {
      const QU = UU.dx * cU + XU,
        AU = UU.dy * yU + zU,
        FU = UU => Math.max(-1, Math.min(1, UU));
      return {
        dx: FU(QU / cU),
        dy: FU(AU / yU)
      }
    }

    function NU(UU, XU, zU, cU) {
      return XU <= 0 || zU <= 0 ? 1 : Math.max(.05, Math.min(1, UU / XU, cU / zU))
    }

    function IU(UU, XU, zU) {
      return Math.min(UU.right, XU.right) - Math.max(UU.left, XU.left) > zU && Math.min(UU.bottom, XU.bottom) - Math.max(UU.top, XU.top) > zU
    }

    function pU(UU, XU) {
      const zU = (UU, XU, zU, cU) => XU - UU > cU - zU ? zU - UU > XU - cU ? cU - XU : zU - UU : UU < zU ? zU - UU : XU > cU ? cU - XU : 0;
      return {
        x: zU(UU.left, UU.right, XU.left, XU.right),
        y: zU(UU.top, UU.bottom, XU.top, XU.bottom)
      }
    }

    function aU(UU, XU, zU) {
      return IU(UU, {
        left: 0,
        top: 0,
        right: XU,
        bottom: zU
      }, 0)
    }

    function tU(UU, XU) {
      let {
        avoid: zU = null,
        bounds: cU = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, yU = 0, QU = 1 / 0;
      return UU.forEach(((UU, AU) => {
        const FU = XU.filter((XU => IU(UU, XU, 0))).length,
          oU = null !== cU && (UU.left < cU.left || UU.top < cU.top || UU.right > cU.right || UU.bottom > cU.bottom),
          DU = FU + (zU && IU(UU, zU, 0) ? 1e3 : 0) + (oU ? 1e6 : 0);
        DU < QU && (yU = AU, QU = DU)
      })), yU
    }
  },
  9459: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => DU,
      F: () => IU,
      G: () => NU,
      J: () => YU,
      e: () => FU,
      g: () => BU,
      i: () => GU,
      l: () => kU,
      p: () => oU,
      q: () => pU,
      t: () => EU,
      v: () => RU,
      y: () => ZU
    });
    var cU = zU(9461),
      yU = zU(2645);
    const QU = {
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
        ...Object.fromEntries(yU.A.map((UU => [UU, "menu"])))
      },
      AU = UU => yU.w.filter((XU => QU[XU] === UU)),
      FU = new Set(AU("cluster")),
      oU = new Set(AU("inventory")),
      DU = UU => "inventory" === UU || oU.has(UU),
      EU = UU => {
        const XU = QU[UU];
        return void 0 === XU ? [] : [XU, ...EU(XU)]
      },
      YU = UU => [UU, ...EU(UU)],
      NU = (UU, XU, zU) => "shop" === UU && XU ? zU("inventory") ? ["inventory"] : zU("bag") ? [UU, "bag"] : [UU] : [UU],
      IU = (UU, XU, zU, yU) => {
        const QU = UU => {
          const QU = XU[UU],
            {
              x: AU,
              y: FU
            } = QU && yU(UU) ? (0, cU.M)(QU, zU) : {
              x: 0,
              y: 0
            };
          return QU && {
            left: QU.left + AU,
            top: QU.top + FU,
            right: QU.right + AU,
            bottom: QU.bottom + FU
          }
        };
        return UU.flatMap((UU => {
          const AU = XU[UU];
          if ("inventory" !== UU || !AU || AU.right - AU.left <= zU.right - zU.left && AU.bottom - AU.top <= zU.bottom - zU.top) return [UU];
          const [FU, oU] = [QU("shop"), QU("bag")];
          return FU && oU && !(0, cU.o)(FU, oU, 0) ? ["shop", "bag"].filter(yU) : [UU]
        }))
      },
      pU = new Map([
        ["cluster", FU],
        ["inventory", oU]
      ]),
      aU = ["cluster"],
      tU = [...aU, ...yU.w.filter((UU => !aU.includes(UU) && !QU[UU]))],
      gU = UU => [UU, ...AU(UU).flatMap(gU)],
      kU = tU.flatMap(gU).map((UU => ({
        id: UU,
        label: `hudLayout:${UU}`,
        ...yU.s[UU],
        parent: QU[UU]
      }))),
      GU = Object.fromEntries(kU.map((UU => [UU.id, UU]))),
      BU = "data-hud-el";

    function ZU(UU, XU, zU, cU) {
      const yU = zU(function(UU, XU) {
          return "attack" !== UU || XU ? GU[UU].label : "hudLayout:attackContext"
        }(UU, XU)),
        QU = cU[UU];
      return QU ? zU("hudLayout:slotWithKey", {
        slot: yU,
        key: QU
      }) : yU
    }

    function RU(UU, XU, zU, cU) {
      return UU.map((UU => ZU(UU, XU, zU, cU))).join(", ")
    }
  },
  9471: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      g: () => QU,
      i: () => yU,
      l: () => AU,
      n: () => YU,
      r: () => EU,
      s: () => DU,
      v: () => oU
    });
    var cU = zU(2645);
    const yU = ["J", "C", "A", "P", "U", "X", "G"],
      QU = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function AU(UU) {
      return UU ? ["X"] : ["P", "X"]
    }
    const FU = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: cU.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function oU(UU, XU, zU) {
      const cU = UU.querySelector(".InGameUi .TouchComponentsButtons");
      if (!cU) return FU;
      const QU = {},
        AU = {};
      for (const FU of yU) {
        const UU = cU.querySelector(`.TouchSlot${FU} > .TouchKey`);
        if (UU) {
          var oU, DU;
          QU[FU] = UU.cloneNode(!0);
          const XU = (null !== (oU = null === (DU = UU.querySelector(".TouchKeyLabel")) || void 0 === DU ? void 0 : DU.textContent) && void 0 !== oU ? oU : "").split(/\s+/).filter((UU => !/[\d\xd7]/.test(UU))).join(" ");
          XU && (AU[FU] = XU)
        }
      }
      const EU = XU => {
          const zU = UU.querySelector(`.InGameUi ${XU}`);
          return null !== zU && !zU.classList.contains("Hidden")
        },
        YU = [...UU.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((UU => UU.cloneNode(!0)));
      return {
        faces: Object.keys(QU).length > 0 ? QU : null,
        names: AU,
        shop: EU(".TouchInventoryKey.ShopKey"),
        bag: EU(".TouchInventoryKey.BagKey"),
        sprint: EU(".TouchSprintHit"),
        items: YU.length > 0 ? YU : null,
        rowIcons: XU,
        pinnedIcons: zU
      }
    }

    function DU(UU, XU) {
      const zU = {};
      for (const cU of [...AU(XU), "G"]) {
        const XU = UU.names[cU];
        XU && (zU[QU[cU]] = XU)
      }
      return zU
    }

    function EU(UU, XU) {
      const {
        faces: zU
      } = UU;
      if (null === zU) return [];
      const cU = new Set(Object.keys(zU).map((UU => QU[UU])));
      return AU(XU).filter((UU => !cU.has(QU[UU])))
    }

    function YU(UU, XU) {
      UU.replaceChildren(...[...XU.childNodes].map((UU => UU.cloneNode(!0))))
    }
  },
  9466: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      g: () => DU
    });
    var cU = zU(9461),
      yU = zU(9459),
      QU = zU(2645),
      AU = zU(2651);
    const FU = 2,
      oU = (UU, XU, zU) => {
        const cU = (0, yU.t)(XU).includes(UU) ? UU : (0, yU.t)(UU).includes(XU) ? XU : null;
        if (null === cU || "joystick" === cU) return !1;
        const FU = cU === UU ? XU : UU;
        if ("menu" === cU) return (0, AU.A)(FU, zU.hudElements[FU]);
        if ("hotbar" !== cU || !(0, yU.B)(FU)) return !0;
        if ((0, QU.K)(zU.hudElements[FU]) || (0, QU.K)(zU.hudElements.inventory)) return !1;
        return !(zU.hudLocked.includes(FU) || zU.hudLocked.includes("inventory")) || (0, QU.H)(zU.hudElements.hotbar)
      };

    function DU(UU, XU, zU, DU) {
      const EU = UU => (0, yU.J)(UU).some((UU => (0, QU.q)(zU.hudElements, UU) || (0, AU.y)(UU, zU, DU)));
      if (EU(UU)) return [];
      const YU = UU => {
          var XU, cU;
          return "bag" === UU && 1 !== (null !== (XU = null === (cU = zU.hudElements.shop) || void 0 === cU ? void 0 : cU[2]) && void 0 !== XU ? XU : 1) || (0, yU.J)(UU).some((UU => void 0 !== zU.hudElements[UU]))
        },
        NU = yU.q.get(UU),
        IU = XU.filter((XU => {
          let {
            id: zU
          } = XU;
          return NU ? NU.has(zU) && !EU(zU) : zU === UU
        })),
        pU = new Set;
      for (const yU of XU) yU.id === UU || null !== NU && void 0 !== NU && NU.has(yU.id) || pU.has(yU.id) || EU(yU.id) || IU.some((UU => {
        let {
          id: XU,
          box: QU
        } = UU;
        return !oU(XU, yU.id, zU) && (YU(XU) || YU(yU.id)) && (0, cU.o)(QU, yU.box, FU)
      })) && pU.add(yU.id);
      return [...pU]
    }
  },
  9373: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      c: () => FU,
      e: () => DU,
      i: () => oU,
      l: () => AU,
      m: () => yU,
      q: () => cU,
      r: () => pU,
      t: () => YU,
      x: () => EU,
      y: () => NU,
      z: () => IU
    });
    const cU = 14,
      yU = 6,
      QU = (cU + yU) / 2,
      AU = 200,
      FU = AU / 2,
      oU = AU / 2 - 1,
      DU = yU / cU * (AU / 2),
      EU = (UU, XU) => -Math.PI / 2 + 2 * UU * Math.PI / XU,
      YU = (UU, XU, zU) => {
        const cU = 2 * Math.PI / zU;
        return (Math.round((Math.atan2(XU, UU) + Math.PI / 2) / cU) % zU + zU) % zU
      },
      NU = .5,
      IU = (UU, XU, zU) => Math.hypot(UU.x, UU.y) < NU ? zU : YU(UU.x, UU.y, XU),
      pU = (UU, XU, zU, cU, yU) => {
        const QU = Math.PI / XU,
          AU = EU(UU, XU),
          FU = AU - QU,
          oU = AU + QU,
          DU = (UU, XU) => `${zU+UU*Math.cos(XU)} ${zU+UU*Math.sin(XU)}`;
        return [`M ${DU(cU,FU)}`, `L ${DU(yU,FU)}`, `A ${yU} ${yU} 0 0 1 ${DU(yU,oU)}`, `L ${DU(cU,oU)}`, `A ${cU} ${cU} 0 0 0 ${DU(cU,FU)}`, "Z"].join(" ")
      }
  },
  9411: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(61),
      yU = zU(9339),
      QU = zU(2616);

    function AU() {
      const UU = (0, QU.f)("shopInfo"),
        [, XU] = (0, cU.useReducer)((UU => UU + 1), 0);
      return (0, QU.e)("shopInfo", XU), !(0, yU.c)(UU)
    }
  },
  8758: (UU, XU, zU) => {
    zU.d(XU, {
      C: () => pU,
      e: () => yU,
      g: () => QU,
      k: () => NU,
      l: () => YU,
      p: () => DU,
      t: () => FU,
      u: () => cU,
      y: () => IU
    });
    const cU = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      yU = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: cU
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      QU = {
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
      AU = ["pickBlock", "perspective"],
      FU = UU => AU.includes(UU) ? AU : [UU],
      oU = Object.fromEntries(yU.flatMap((UU => {
        let {
          group: XU,
          actions: zU
        } = UU;
        return zU.map((UU => [UU, XU]))
      }))),
      DU = UU => oU[UU],
      EU = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      YU = UU => {
        var XU;
        return [DU(UU), ...null !== (XU = EU[UU]) && void 0 !== XU ? XU : []]
      },
      NU = new Set(["menu", "inventory", "keyboard"]),
      IU = {
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
      pU = new Set(["forward", "backward", "left", "right"])
  },
  8751: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => EU,
      E: () => dU,
      I: () => wU,
      d: () => kU,
      f: () => ZU,
      h: () => NU,
      j: () => IU,
      k: () => OU,
      l: () => CU,
      m: () => eU,
      o: () => BU,
      r: () => qU,
      t: () => WU,
      v: () => GU,
      x: () => LU
    });
    var cU = zU(8758),
      yU = zU(8764),
      QU = zU(8740),
      AU = zU(8774);
    const FU = UU => "pickBlock" === UU ? "perspective" : UU,
      oU = (UU, XU) => {
        var zU;
        const yU = FU(XU);
        return null !== (zU = UU[yU]) && void 0 !== zU ? zU : cU.g[yU]
      },
      DU = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((UU => {
        let [XU, zU] = UU;
        return [
          [XU, zU],
          [zU, XU]
        ]
      }))),
      EU = (UU, XU) => null !== UU && void 0 !== UU ? UU : "nintendo" === XU,
      YU = UU => EU((0, yU.i)().swapConfirmBack, (0, yU.l)()) && DU.get(UU) || UU,
      NU = UU => oU((0, yU.i)().bindings, YU(UU)),
      IU = UU => cU.g[YU(UU)],
      pU = Object.keys(cU.g),
      aU = UU => "gameplay" === (0, cU.p)(UU) ? ["gameplay"] : (0, cU.l)(UU),
      tU = (UU, XU) => {
        const zU = aU(XU);
        return aU(UU).some((UU => zU.includes(UU)))
      },
      gU = (UU, XU, zU) => {
        const yU = oU(UU, XU),
          AU = new Set((0, cU.t)(XU)),
          DU = [...AU];
        for (let cU = DU.pop(); cU; cU = DU.pop())
          for (const XU of pU) {
            const QU = oU(UU, XU);
            AU.has(XU) || QU !== zU && QU !== yU || !tU(cU, XU) || (AU.add(XU), DU.push(XU))
          }
        const EU = {
          ...UU
        };
        for (const YU of AU) {
          const XU = oU(UU, YU) === yU ? zU : yU,
            AU = (0, cU.l)(YU).some((UU => cU.k.has(UU)));
          if ((0, QU.H)(XU) && AU) return null;
          EU[FU(YU)] = XU
        }
        for (const QU of Object.keys(EU)) EU[QU] === cU.g[QU] && delete EU[QU];
        return EU
      },
      kU = (UU, XU) => null !== gU((0, yU.i)().bindings, YU(UU), XU),
      GU = (UU, XU) => {
        if (NU(UU) === XU) return !0;
        const zU = gU((0, yU.i)().bindings, YU(UU), XU);
        return !!zU && ((0, yU.m)({
          bindings: zU
        }), !0)
      },
      BU = (UU, XU) => {
        const zU = (0, cU.t)(XU);
        return pU.filter((XU => FU(XU) === XU && !zU.includes(XU) && oU(UU, YU(XU)) !== NU(XU)))
      },
      ZU = ["southpaw", "triggersSwapped"],
      RU = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      PU = UU => Object.keys(RU[UU]),
      WU = (UU, XU) => "southpaw" === UU ? XU.swapSticks : PU(UU).every((zU => oU(XU.bindings, zU) === RU[UU][zU])),
      dU = (UU, XU) => {
        const zU = (0, yU.i)();
        let QU = zU.bindings;
        for (const yU of PU(UU)) {
          const zU = XU ? RU[UU][yU] : cU.g[yU];
          if (QU = gU(QU, yU, zU), !QU) return !1
        }
        return (0, yU.m)({
          swapSticks: "southpaw" === UU ? XU : zU.swapSticks,
          bindings: QU
        }), !0
      },
      LU = () => {
        (0, yU.m)({
          swapSticks: !1,
          bindings: {}
        })
      },
      eU = () => (0, yU.i)().swapSticks ? "RightStick" : "LeftStick",
      CU = () => (0, yU.i)().swapSticks ? "LeftStick" : "RightStick",
      wU = UU => (0, yU.i)().swapSticks && (0, QU.H)(UU),
      qU = UU => wU(UU) ? eU() : CU(),
      OU = UU => {
        if (cU.C.has(UU)) return eU();
        const XU = cU.y[UU];
        return XU && ("leaderboard" !== XU || (0, AU.f)(UU, (0, AU.d)())) ? NU(XU) : null
      }
  },
  8726: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ControllerCategory: () => kF,
      ControllerGlyph: () => Ry,
      ControllerRoot: () => kA,
      PadLobbyShortcuts: () => uA,
      PadSneakChip: () => dA,
      PadTooltip: () => eA,
      attachPressToContinue: () => nA,
      getBoundButton: () => EU.h,
      getControllerSettings: () => NU.i,
      getGlyphForNoaAction: () => EU.k,
      getInventoryCursorState: () => BF,
      getMenuShortcutButton: () => mz,
      getPadGlyphIconName: () => RA,
      getPadGlyphIconUrl: () => PA,
      getPadRepeatTiming: () => aU.g,
      handOverPadFocus: () => RF,
      hasActivePad: () => GF,
      isPadSteppingSlots: () => ZF
    });
    const cU = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var yU = zU(1193),
      QU = zU(1457),
      AU = zU(8733),
      FU = zU(73),
      oU = zU(27),
      DU = zU(31),
      EU = zU(8751),
      YU = zU(8780),
      NU = zU(8764),
      IU = zU(8783),
      pU = zU(8740),
      aU = zU(9228),
      tU = zU(9231),
      gU = zU(1715);
    const kU = (UU, XU, zU) => Math.max(XU, Math.min(zU, UU)),
      GU = UU => Math.min(UU.width, UU.height) / 720,
      BU = UU => Math.max(.15, UU);
    class ZU {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(UU, XU) {
        const zU = Math.hypot(UU.x, UU.y) >= (UU => Math.max(.3, UU))(XU);
        return this.locked ? (this.locked = zU, !1) : zU
      }
    }
    const RU = (UU, XU) => {
        const zU = kU(XU.dtMs, 0, 100),
          cU = zU / 1e3,
          yU = GU(XU.viewport) * (XU.cursorSpeedPercent / 100),
          QU = (0, pU.j)(XU.stick, BU(XU.moveDeadzone)),
          AU = Math.hypot(QU.x, QU.y),
          FU = ((UU, XU, zU) => {
            if (XU < .3) return 0;
            const cU = zU / 350;
            return XU >= .85 ? Math.min(1, UU + cU) : Math.max(0, UU - cU)
          })(UU.speedRamp, AU, zU);
        let oU = UU.x,
          DU = UU.y;
        if (AU > 0) {
          const UU = .45 + .55 * FU,
            zU = XU.context.overInteractive ? .45 : 1,
            EU = 1400 * (UU => {
              const XU = kU(UU, 0, 1);
              return .3 * XU + .7 * XU * XU
            })(AU) * yU * UU * zU;
          oU += QU.x / AU * EU * cU, DU += QU.y / AU * EU * cU
        }
        const EU = Math.hypot(XU.dpad.x, XU.dpad.y);
        if (EU > 0) {
          const UU = 500 * yU;
          oU += XU.dpad.x / EU * UU * cU, DU += XU.dpad.y / EU * UU * cU
        }
        const YU = XU.context.magnetTarget;
        if (YU && AU < .3 && 0 === EU) {
          const UU = ((UU, XU, zU, cU, yU) => {
            const QU = XU.x - UU.x,
              AU = XU.y - UU.y,
              FU = Math.hypot(QU, AU);
            if (0 === FU) return {
              x: 0,
              y: 0
            };
            const oU = Math.min(FU, yU * (1 - cU / .3));
            let DU = QU / FU * oU,
              EU = AU / FU * oU;
            if (cU > 0) {
              const UU = zU.x / cU,
                XU = zU.y / cU,
                yU = DU * UU + EU * XU;
              yU < 0 && (DU -= yU * UU, EU -= yU * XU)
            }
            return {
              x: DU,
              y: EU
            }
          })({
            x: oU,
            y: DU
          }, YU, QU, AU, 120 * GU(XU.viewport) * cU);
          oU += UU.x, DU += UU.y
        }
        return {
          x: kU(oU, 0, Math.max(0, XU.viewport.width - 1)),
          y: kU(DU, 0, Math.max(0, XU.viewport.height - 1)),
          speedRamp: FU
        }
      },
      PU = UU => {
        const XU = (0, pU.j)(UU, .2);
        return 0 !== XU.x || 0 !== XU.y
      },
      WU = (UU, XU) => {
        const zU = (0, pU.j)(UU, .2),
          cU = Math.hypot(zU.x, zU.y);
        if (0 === cU) return {
          x: 0,
          y: 0
        };
        const yU = cU * cU * 1600,
          QU = kU(XU, 0, 100) / 1e3;
        return {
          x: zU.x / cU * yU * QU,
          y: zU.y / cU * yU * QU
        }
      },
      dU = (UU, XU) => "y" === XU ? UU.scrollHeight > UU.clientHeight + 1 : UU.scrollWidth > UU.clientWidth + 1,
      LU = (UU, XU) => {
        if (!dU(UU, XU)) return !1;
        const zU = getComputedStyle(UU),
          cU = "y" === XU ? zU.overflowY : zU.overflowX;
        return "auto" === cU || "scroll" === cU
      },
      eU = (UU, XU, zU) => {
        for (let QU = UU instanceof HTMLElement ? UU : null !== (cU = null === UU || void 0 === UU ? void 0 : UU.parentElement) && void 0 !== cU ? cU : null; QU; QU = QU.parentElement) {
          var cU;
          if (LU(QU, XU)) return QU;
          if (QU === zU) return null
        }
        if (zU) return null;
        const yU = document.scrollingElement;
        return yU instanceof HTMLElement && dU(yU, XU) ? yU : null
      },
      CU = new WeakMap,
      wU = (UU, XU) => {
        const zU = performance.now(),
          cU = CU.get(UU);
        if (cU && cU.axis === XU && zU - cU.atMs < 500 && (!cU.container || cU.container.isConnected)) return cU.container;
        const yU = qU(UU, XU);
        return CU.set(UU, {
          axis: XU,
          atMs: zU,
          container: yU
        }), yU
      },
      qU = (UU, XU) => {
        let zU = LU(UU, XU) ? UU : null,
          cU = zU ? zU.clientWidth * zU.clientHeight : 0;
        for (const yU of UU.querySelectorAll("*")) {
          const UU = yU.clientWidth * yU.clientHeight;
          UU > cU && LU(yU, XU) && (zU = yU, cU = UU)
        }
        return zU
      },
      OU = (UU, XU, zU) => "y" === XU ? zU < 0 ? UU.scrollTop > 0 : UU.scrollTop + UU.clientHeight < UU.scrollHeight - 1 : zU < 0 ? UU.scrollLeft > 0 : UU.scrollLeft + UU.clientWidth < UU.scrollWidth - 1,
      SU = (UU, XU, zU) => {
        "y" === XU ? UU.scrollBy({
          top: zU,
          behavior: "instant"
        }) : UU.scrollBy({
          left: zU,
          behavior: "instant"
        })
      },
      rU = UU => {
        if (!UU || UU === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const XU = UU.getBoundingClientRect(),
          zU = Math.max(0, XU.left),
          cU = Math.max(0, XU.top);
        return new DOMRect(zU, cU, Math.min(window.innerWidth, XU.right) - zU, Math.min(window.innerHeight, XU.bottom) - cU)
      },
      uU = (UU, XU) => UU.left < XU.right && XU.left < UU.right && UU.top < XU.bottom && XU.top < UU.bottom;
    var fU = zU(61),
      iU = zU(1106),
      HU = zU.n(iU),
      MU = zU(1305);
    let vU = 0,
      VU = !1;
    class sU {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(UU) {
        this.element = UU, this.shownKey = "", this.gap = null
      }
      show(UU) {
        const XU = this.element;
        if (!XU) return;
        const zU = UU ? this.keepOnScreen(XU, UU) : null,
          cU = zU ? `${zU.left},${zU.top},${zU.width},${zU.height}` : "";
        if (cU === this.shownKey) return;
        const yU = "" === this.shownKey;
        this.shownKey = cU, XU.classList.toggle("Visible", null !== zU), zU && (XU.classList.toggle("Snap", yU), XU.style.width = `${zU.width}px`, XU.style.height = `${zU.height}px`, XU.style.transform = `translate(${zU.left}px, ${zU.top}px)`, yU && (XU.offsetWidth, XU.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(UU, XU) {
        var zU;
        const cU = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!VU){VU=!0;const UU=document.createElement("div");UU.setAttribute("aria-hidden","true"),UU.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(UU),new ResizeObserver((()=>{vU++})).observe(UU)}return String(vU)})()}`;
        (null === (zU = this.gap) || void 0 === zU ? void 0 : zU.key) !== cU && (this.gap = {
          px: parseFloat(getComputedStyle(UU).paddingLeft) || 0,
          key: cU
        });
        const yU = this.gap.px + 2,
          QU = Math.max(XU.left, yU),
          AU = Math.max(XU.top, yU),
          FU = Math.min(XU.left + XU.width, window.innerWidth - yU),
          oU = Math.min(XU.top + XU.height, window.innerHeight - yU);
        return FU <= QU || oU <= AU ? XU : {
          left: QU,
          top: AU,
          width: FU - QU,
          height: oU - AU
        }
      }
    }
    const nU = UU => {
      let {
        placer: XU,
        className: zU
      } = UU;
      const cU = (0, fU.useCallback)((UU => {
        XU.setElement(UU)
      }), [XU]);
      return (0, MU.jsx)("div", {
        ref: cU,
        className: HU()("PadReticle", zU),
        "aria-hidden": !0
      })
    };
    var mU = zU(9237);
    const lU = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const xU = new class {
      constructor() {
        this.state = lU, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(UU) {
        if (XU = this.state, zU = UU, (XU.visible || zU.visible) && (XU.visible !== zU.visible || XU.x !== zU.x || XU.y !== zU.y || XU.pressed !== zU.pressed)) {
          var XU, zU;
          this.state = UU;
          for (const XU of this.listeners) XU(UU)
        }
      }
      hide() {
        this.set(lU)
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    };
    var JU = zU(9252);
    const jU = (UU, XU) => {
        let {
          kind: zU,
          holding: cU,
          hasPress: yU,
          hasBack: QU,
          slotHasItem: AU
        } = XU;
        switch (UU) {
          case "primary":
            return "slot" === zU ? "slotPrimary" : "recipe" === zU || "button" === zU ? yU ? "pressPrimary" : "click" : "textField" === zU ? "openKeyboard" : null;
          case "secondary":
            return "slot" === zU ? "slotSecondary" : "button" !== zU && "recipe" !== zU || !yU ? null : "pressSecondary";
          case "quickMove":
            return "slot" === zU && AU ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === zU && AU && !cU ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return cU ? "cancel" : QU ? "pressBack" : "close"
        }
      },
      KU = UU => {
        const XU = [];
        if (UU.hotbarPicking) return XU.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), XU.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), XU;
        if (UU.holding) "slot" === UU.kind ? (XU.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), XU.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === UU.kind && XU.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), XU.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), XU.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), UU.openButtonCloses && XU.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var zU;
          "slot" === UU.kind && UU.slotHasItem ? (XU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), XU.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), XU.push({
            actions: ["inventoryQuickMove"],
            labelKey: UU.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), XU.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), XU.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== UU.kind && "recipe" !== UU.kind || !UU.pressHints ? "button" === UU.kind || "recipe" === UU.kind ? XU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === UU.kind && XU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (UU.pressHints.primary && XU.push({
            actions: ["inventoryPrimary"],
            labelKey: UU.pressHints.primary
          }), UU.pressHints.secondary && XU.push({
            actions: ["inventorySecondary"],
            labelKey: UU.pressHints.secondary
          }));
          const cU = null === (zU = UU.pressHints) || void 0 === zU ? void 0 : zU.back;
          cU && XU.push({
            actions: ["inventoryClose"],
            labelKey: cU
          });
          const yU = [];
          UU.openButtonCloses && yU.push("inventory"), cU || yU.push("inventoryClose"), yU.length > 0 && XU.push({
            actions: yU,
            labelKey: "inventoryClose"
          })
        }
        return XU.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), UU.hasCategories ? XU.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : UU.hasList && XU.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), XU
      };
    var bU = zU(9256),
      TU = zU(2528);
    class hU {
      constructor(UU) {
        this.probes = UU, this.byContainer = new Map, this.byParent = new Map
      }
      find(UU, XU) {
        const zU = eU(UU, "y", XU);
        if (!zU) return null;
        let cU = this.byContainer.get(zU);
        return cU || (this.probes.push({
          element: zU,
          rect: cX(zU.getBoundingClientRect())
        }), cU = {
          container: zU,
          box: rU(zU),
          group: zX(zU)
        }, this.byContainer.set(zU, cU)), cU
      }
      findForParent(UU, XU) {
        let zU = this.byParent.get(UU);
        return void 0 === zU && (zU = this.find(UU, XU), this.byParent.set(UU, zU)), zU
      }
    }
    const UX = new WeakMap;
    let XX = 0;
    const zX = UU => {
        let XU = UX.get(UU);
        return XU || (XU = "el:" + XX++, UX.set(UU, XU)), XU
      },
      cX = UU => ({
        left: UU.left,
        top: UU.top,
        width: UU.width,
        height: UU.height
      }),
      yX = UU => UU.width > 0 && UU.height > 0,
      QX = (UU, XU) => yX(UU) && UU.left + UU.width > 0 && UU.top + UU.height > 0 && UU.left < XU.width && UU.top < XU.height,
      AX = (UU, XU, zU) => {
        const cU = UU.top + UU.height / 2;
        return QX(UU, XU) && (!zU || cU >= zU.top && cU <= zU.bottom)
      },
      FX = UU => ({
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2
      }),
      oX = (UU, XU, zU) => UU < 0 ? zU >= 0 ? 0 : XU - 1 : ((UU + zU) % XU + XU) % XU,
      DX = UU => "Left" === UU || "Right" === UU,
      EX = (UU, XU, zU) => {
        const cU = DX(zU),
          yU = cU ? UU.top : UU.left,
          QU = cU ? UU.height : UU.width,
          AU = cU ? XU.top : XU.left,
          FU = cU ? XU.height : XU.width,
          oU = Math.max(0, Math.max(AU - (yU + QU), yU - (AU + FU)));
        return QU > 1.5 * FU ? {
          gap: oU,
          offset: Math.max(0, AU - yU) + .1 * Math.max(0, yU - AU)
        } : {
          gap: oU,
          offset: Math.abs(AU + FU / 2 - (yU + QU / 2))
        }
      },
      YX = (UU, XU, zU) => {
        const cU = ((UU, XU, zU) => {
          const cU = FX(UU),
            yU = FX(XU),
            QU = DX(zU) ? Math.min(UU.width, XU.width) / 4 : Math.min(UU.height, XU.height) / 4;
          switch (zU) {
            case "Right":
              return yU.x - cU.x >= QU ? Math.max(0, XU.left - (UU.left + UU.width)) : null;
            case "Left":
              return cU.x - yU.x >= QU ? Math.max(0, UU.left - (XU.left + XU.width)) : null;
            case "Down":
              return yU.y - cU.y >= QU ? Math.max(0, XU.top - (UU.top + UU.height)) : null;
            case "Up":
              return cU.y - yU.y >= QU ? Math.max(0, UU.top - (XU.top + XU.height)) : null
          }
        })(UU, XU, zU);
        if (null === cU) return null;
        const yU = EX(UU, XU, zU);
        return cU + 3 * yU.gap + .5 * yU.offset
      },
      NX = (UU, XU) => XU.visible || null !== XU.scrollGroup && XU.scrollGroup === UU.scrollGroup,
      IX = (UU, XU, zU, cU) => {
        let yU = null,
          QU = 1 / 0;
        for (const AU of XU) {
          if (AU.key === UU.key || !NX(UU, AU) || !cU(AU)) continue;
          const XU = YX(UU.rect, AU.rect, zU);
          null !== XU && XU < QU && (yU = AU, QU = XU)
        }
        return yU
      },
      pX = (UU, XU, zU) => {
        const cU = IX(UU, XU, zU, (() => !0));
        if (!cU || DX(zU) || null === UU.scrollGroup || cU.scrollGroup === UU.scrollGroup) return cU;
        const yU = IX(UU, XU, zU, (XU => 0 === EX(UU.rect, XU.rect, zU).gap));
        return null !== yU && void 0 !== yU ? yU : cU
      },
      aX = (UU, XU, zU) => {
        let cU = null,
          yU = 1 / 0;
        for (const QU of XU) {
          if (!QU.visible || zU && !zU(QU)) continue;
          const XU = FX(QU.rect),
            AU = Math.hypot(XU.x - UU.x, XU.y - UU.y);
          AU < yU && (cU = QU, yU = AU)
        }
        return cU
      },
      tX = UU => {
        const {
          rect: XU,
          clip: zU
        } = UU;
        if (!zU) return XU;
        const cU = Math.max(XU.left, zU.left),
          yU = Math.max(XU.top, zU.top);
        return {
          left: cU,
          top: yU,
          width: Math.min(XU.left + XU.width, zU.left + zU.width) - cU,
          height: Math.min(XU.top + XU.height, zU.top + zU.height) - yU
        }
      },
      gX = (UU, XU) => XU.x >= UU.left && XU.x < UU.left + UU.width && XU.y >= UU.top && XU.y < UU.top + UU.height,
      kX = (UU, XU) => {
        let zU = null,
          cU = 1 / 0;
        for (const yU of XU) {
          const XU = tX(yU);
          (yU.visible || yU.clip) && gX(XU, UU) && (XU.width * XU.height < cU && (zU = yU, cU = XU.width * XU.height))
        }
        return zU
      },
      GX = UU => {
        let XU = null;
        for (const zU of UU) {
          if (!zU.visible) continue;
          if (!XU) {
            XU = zU;
            continue
          }
          const UU = Math.min(XU.rect.height, zU.rect.height) / 2,
            cU = zU.rect.top - XU.rect.top;
          (cU < -UU || Math.abs(cU) <= UU && zU.rect.left < XU.rect.left) && (XU = zU)
        }
        return XU
      },
      BX = (UU, XU, zU, cU, yU) => {
        const QU = yU % XU,
          AU = Math.floor(yU / XU);
        return {
          left: UU.left + QU * zU,
          top: UU.top + AU * cU,
          width: UU.width,
          height: UU.height
        }
      },
      ZX = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      RX = ".LazyLoadedItemWrapper",
      PX = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      WX = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      dX = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      LX = UU => UU.hasAttribute("data-inven-idx") ? "slot" : UU.hasAttribute("data-recipe-key") ? "recipe" : UU.hasAttribute("data-craft-ingredient") || (0, TU.s)(UU) ? "info" : (0, mU.J)(UU) ? "textField" : "button",
      eX = (UU, XU) => "slot" === XU ? Number(UU.getAttribute("data-inven-idx")) : null,
      CX = UU => UU.matches(RX) ? UU.querySelector(PX) : UU,
      wX = UU => {
        var XU, zU;
        return {
          element: UU,
          recipe: null !== (XU = UU && (null === (zU = CX(UU)) || void 0 === zU ? void 0 : zU.getAttribute("data-recipe-key"))) && void 0 !== XU ? XU : null
        }
      },
      qX = UU => {
        const XU = CX(UU);
        if (!XU) return {
          kind: "pending",
          idx: null
        };
        const zU = LX(XU);
        return {
          kind: zU,
          idx: eX(XU, zU)
        }
      },
      OX = UU => {
        const XU = [];
        for (const [zU, cU] of WX) {
          UU.matches(cU) && XU.push([zU, UU]);
          for (const yU of UU.querySelectorAll(cU)) XU.push([zU, yU])
        }
        return XU
      },
      SX = (UU, XU) => {
        for (const [zU, cU] of UU)
          if (cU.contains(XU)) return zU;
        return "other"
      },
      rX = (UU, XU, zU, cU, yU, QU, AU, FU) => {
        var oU;
        const DU = UU.children,
          EU = cX(DU[0].getBoundingClientRect()),
          YU = [{
            element: DU[0],
            rect: EU
          }];
        if (QU.push(YU[0]), 0 === EU.width || 0 === EU.height) return;
        let NU = 1;
        for (; NU < DU.length && Math.abs(DU[NU].getBoundingClientRect().top - EU.top) < 1;) NU++;
        const IU = UU => {
            const XU = {
              element: DU[UU],
              rect: cX(DU[UU].getBoundingClientRect())
            };
            return QU.push(XU), YU.push(XU), XU.rect
          },
          pU = NU > 1 ? IU(1).left - EU.left : EU.width,
          aU = DU.length > NU ? IU(NU).top - EU.top : EU.height,
          tU = AU.find(UU, XU);
        let gU = null;
        if (tU) {
          var kU;
          const {
            container: UU,
            box: XU
          } = tU;
          gU = null !== (kU = FU.get(UU)) && void 0 !== kU ? kU : null, gU || (gU = {
            top: UU.scrollTop,
            left: UU.scrollLeft,
            box: XU,
            viewport: cU,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, FU.set(UU, gU)), gU.probes.push(...YU)
        }
        const GU = yU.length;
        for (let PU = 0; PU < DU.length; PU++) {
          var BU, ZU, RU;
          const UU = DU[PU],
            XU = BX(EU, NU, pU, aU, PU),
            QU = UU.firstElementChild ? UU.querySelector(PX) : null,
            AU = QU ? LX(QU) : "pending";
          yU.push({
            key: zX(UU),
            rect: XU,
            panel: zU,
            scrollGroup: null !== (BU = null === tU || void 0 === tU ? void 0 : tU.group) && void 0 !== BU ? BU : null,
            visible: AX(XU, cU, null === tU || void 0 === tU ? void 0 : tU.box),
            clip: null !== (ZU = null === tU || void 0 === tU ? void 0 : tU.box) && void 0 !== ZU ? ZU : null,
            element: UU,
            kind: AU,
            idx: QU ? eX(QU, AU) : null,
            scrollContainer: null !== (RU = null === tU || void 0 === tU ? void 0 : tU.container) && void 0 !== RU ? RU : null
          })
        }
        null === (oU = gU) || void 0 === oU || oU.targets.push(...yU.slice(GU))
      },
      uX = UU => UU instanceof Element && null !== UU.closest(RX),
      fX = UU => null !== UU.scrollContainer && uX(UU.element);
    class iX {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(UU, XU, zU, cU) {
        this.latched = {
          source: UU,
          focusKey: XU,
          sinceMs: zU,
          hold: {
            id: ++this.presses,
            holdMs: cU
          }
        }
      }
      update(UU, XU, zU) {
        const cU = this.latched;
        return cU ? UU && XU === cU.focusKey ? zU - cU.sinceMs < cU.hold.holdMs ? null : (this.latched = null, cU.source) : (this.latched = null, null) : null
      }
      getHold() {
        var UU, XU;
        return null !== (UU = null === (XU = this.latched) || void 0 === XU ? void 0 : XU.hold) && void 0 !== UU ? UU : null
      }
      reset() {
        this.latched = null
      }
    }
    var HX = zU(9258);
    const MX = {
        kind: "none"
      },
      vX = UU => ({
        x: UU.clientX,
        y: UU.clientY
      }),
      VX = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class sX {
      constructor() {
        this.hovered = MX, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(UU, XU, zU, cU, yU) {
        const QU = null !== XU ? {
            kind: "slot",
            idx: XU
          } : zU ? {
            kind: "element",
            element: zU
          } : MX,
          AU = `${yU}|${Math.round(cU.clientX)},${Math.round(cU.clientY)}`,
          FU = (oU = this.hovered, DU = QU, "slot" === oU.kind && "slot" === DU.kind ? oU.idx === DU.idx : "element" === oU.kind && "element" === DU.kind ? oU.element === DU.element : oU.kind === DU.kind);
        var oU, DU;
        if (FU && AU === this.signature) return;
        const EU = !FU || yU !== this.holding || "" === this.signature;
        this.signature = AU, this.holding = yU, this.lastPoint = cU;
        const YU = this.hovered;
        if (this.hovered = QU, "slot" === QU.kind) return this.leaveElement(YU, null, cU), void(EU ? UU.hover(QU.idx, cU) : UU.moveTo(cU));
        if (FU) return void("element" === QU.kind ? (0, mU.p)(QU.element, QU.element, vX(cU)) : UU.hover(null, cU));
        UU.hover(null, cU);
        const NU = "element" === QU.kind ? QU.element : null;
        "element" === YU.kind ? (0, mU.p)(YU.element, NU, vX(cU)) : NU && (0, mU.p)(null, NU, vX(cU))
      }
      invalidate() {
        this.signature = ""
      }
      clear(UU) {
        const XU = this.hovered;
        this.hovered = MX, this.signature = "", "none" !== XU.kind && (this.leaveElement(XU, null, this.lastPoint), UU && "slot" === XU.kind && UU.hover(null, this.lastPoint))
      }
      leaveElement(UU, XU, zU) {
        "element" === UU.kind && (0, mU.p)(UU.element, XU, vX(zU))
      }
    }
    class nX {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(UU, XU) {
        PU(UU) && (this.lastTiltedMs = XU)
      }
      allowsClick(UU) {
        return UU - this.lastTiltedMs > 150
      }
    }
    class mX {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(UU) {
        return 0 !== (0, pU.j)(UU, .2).y
      }
      step(UU, XU, zU) {
        UU !== this.container && (this.container = UU, this.remainder = 0);
        const cU = WU(XU, zU).y;
        if (0 === cU) return this.remainder = 0, !1;
        const yU = this.remainder + cU,
          QU = Math.trunc(yU);
        if (this.remainder = yU - QU, 0 === QU) return !1;
        const AU = UU.scrollTop;
        return UU.scrollTop = AU + QU, UU.scrollTop !== AU
      }
      current() {
        var UU;
        return null !== (UU = this.container) && void 0 !== UU && UU.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var lX = zU(9261);
    const xX = "[data-pad-inventory-default]",
      JX = ".HotBarGameItemsContainer .InvenItem.Selected",
      jX = {
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
      KX = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      bX = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      TX = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      hX = [...bX, ...TX],
      Uz = () => {
        return UU = (0, EU.h)("inventory"), !hX.map(EU.h).includes(UU) && !(0, pU.H)(UU);
        var UU
      },
      Xz = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      zz = (UU, XU) => {
        const zU = !(null === XU || void 0 === XU || !XU.isHolding());
        return function(UU, XU) {
          const zU = UU.find((UU => UU.visible && XU(UU)));
          if (zU) return zU;
          for (var cU = arguments.length, yU = new Array(cU > 2 ? cU - 2 : 0), QU = 2; QU < cU; QU++) yU[QU - 2] = arguments[QU];
          for (const AU of yU) {
            const XU = GX(UU.filter(AU));
            if (XU) return XU
          }
          return GX(UU)
        }(UU, (UU => {
          const {
            element: XU
          } = UU;
          return XU.matches(xX) || null !== XU.querySelector(xX) || XU.matches(JX)
        }), (UU => "slot" === UU.kind ? zU || null !== UU.idx && !(null === XU || void 0 === XU || !XU.hasItemAt(UU.idx)) : "recipe" === UU.kind || "pending" === UU.kind), (UU => "slot" === UU.kind || "button" === UU.kind))
      };
    class cz {
      constructor() {
        this.set = null, this.observer = new MutationObserver((UU => {
          UU.some((UU => !uX(UU.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = UU => {
          this.scrolled(UU.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const UU = [],
              XU = [];
            let zU = !1;
            const cU = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              yU = new Map,
              QU = new hU(XU);
            for (const YU of document.querySelectorAll(ZX)) {
              const EU = OX(YU);
              zU ||= null !== YU.querySelector(".CreativeCategoryTab");
              for (const zU of YU.querySelectorAll(`${RX}:first-child`)) {
                const AU = zU.parentElement;
                rX(AU, YU, SX(EU, AU), cU, UU, XU, QU, yU)
              }
              for (const zU of YU.querySelectorAll(PX)) {
                var AU, FU, oU, DU;
                if (zU.closest(RX) || zU.closest("[data-pad-ignore]")) continue;
                const NU = null === (AU = zU.parentElement) || void 0 === AU ? void 0 : AU.closest(PX);
                if (NU && YU.contains(NU)) continue;
                const IU = LX(zU),
                  pU = eX(zU, IU);
                if (-1 === pU) continue;
                const aU = cX(zU.getBoundingClientRect());
                XU.push({
                  element: zU,
                  rect: aU
                });
                const tU = QU.findForParent(zU.parentElement, YU),
                  gU = tU && !yU.has(tU.container) ? tU : null;
                (gU ? yX(aU) : QX(aU, cU)) && UU.push({
                  key: zX(zU),
                  rect: aU,
                  panel: SX(EU, zU),
                  scrollGroup: null !== (FU = null === gU || void 0 === gU ? void 0 : gU.group) && void 0 !== FU ? FU : null,
                  visible: AX(aU, cU, null === gU || void 0 === gU ? void 0 : gU.box),
                  clip: null !== (oU = null === gU || void 0 === gU ? void 0 : gU.box) && void 0 !== oU ? oU : null,
                  element: zU,
                  kind: IU,
                  idx: pU,
                  scrollContainer: null !== (DU = null === gU || void 0 === gU ? void 0 : gU.container) && void 0 !== DU ? DU : null
                })
              }
            }
            for (const [YU, NU] of yU) NU.holdsOthers = XU.some((UU => UU.element !== YU && YU.contains(UU.element) && !UU.element.closest(RX)));
            const EU = new Map;
            for (const YU of UU) EU.set(YU.element, YU);
            return {
              targets: UU,
              byElement: EU,
              hasCategories: zU,
              probes: XU,
              scrollers: yU
            }
          })(), this.observer.disconnect();
          for (const UU of document.querySelectorAll(ZX)) this.observer.observe(UU, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(UU) {
        !this.set || UU instanceof Element && ((UU, XU) => {
          const zU = UU.scrollers.get(XU);
          if (!zU || zU.holdsOthers || XU.scrollLeft !== zU.left) return !1;
          const cU = XU.scrollTop - zU.top;
          if (0 === cU) return !0;
          zU.top = XU.scrollTop;
          for (const yU of zU.probes) yU.rect.top -= cU;
          for (const yU of zU.targets) yU.rect.top -= cU, yU.visible = AX(yU.rect, zU.viewport, zU.box);
          return !0
        })(this.set, UU) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((UU => {
          return XU = UU.rect, zU = UU.element.getBoundingClientRect(), !(XU.left === zU.left && XU.top === zU.top && XU.width === zU.width && XU.height === zU.height);
          var XU, zU
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const yz = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(pU.A.map((UU => [UU, (0, aU.d)(pU.D)]))), this.stickRepeat = new pU.b((0, aU.d)(pU.eb)), this.pageUpTimer = (0, aU.d)(pU.bb), this.pageDownTimer = (0, aU.d)(pU.bb), this.stickGate = new ZU, this.pointer = null, this.activePress = null, this.dropLatch = new iX, this.scroller = new mX, this.scrollStickClick = new nX, this.hover = new sX, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new sU, this.targets = new cz, this.hasCategories = !1, this.wasShowing = !1, this.state = HX.c, this.isActive = () => (0, bU.i)(), this.isShowing = () => "inventory" === YU.d.getActiveConsumerName() && (0, IU.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, bU.g)()), (0, bU.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var UU;
            this.reopenSlotIdx = null !== (UU = this.focused ? qX(this.focused).idx : null) && void 0 !== UU ? UU : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, bU.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = UU => {
            (0, FU.unstable_batchedUpdates)((() => {
              this.frame(UU)
            }))
          }, this.shouldBlockRealPointer = UU => UU.isTrusted && !(0, gU.x)(UU) && this.isShowing(), this.noteRealPointer = UU => {
            UU instanceof MouseEvent && UU.isTrusted && !(0, gU.x)(UU) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = UU.clientX, this.lastRealPointer.y = UU.clientY)
          }, this.wakePressActs = UU => {
            var XU;
            return UU === (0, EU.h)("inventoryClose") ? !(null !== (XU = (0, bU.g)()) && void 0 !== XU && XU.isHolding()) : !(UU !== (0, EU.h)("inventory") || !Uz()) || ((0, pU.H)(UU) ? this.isNavButton(UU) : TX.some((XU => (0, EU.h)(XU) === UU)))
          }
        }
        frame(UU) {
          var XU, zU, cU, yU, QU;
          const AU = (0, bU.g)();
          if (!(0, IU.k)()) return void(this.wasShowing && (this.endInteraction(AU), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), UU.wokeDevice && this.focusWakePointer(!(null === AU || void 0 === AU || !AU.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, NU.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const FU = performance.now();
          this.handleNavigation(UU, FU), this.handlePanels(UU), this.handlePaging(UU, FU), this.handleScroll(UU), this.handleButtons(UU, FU, AU), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const oU = this.ensureFocus(),
            DU = this.focusContext(AU);
          this.ring.show(oU);
          const YU = "slot" === DU.kind ? DU.idx : null,
            pU = null !== (XU = null === (zU = DU.actionElement) || void 0 === zU ? void 0 : zU.querySelector(".DoCraftItem")) && void 0 !== XU ? XU : DU.actionElement;
          this.pointer ? (this.hover.sync(AU, YU, pU, ((UU, XU) => {
            const zU = XU ? VX() : 0;
            return {
              clientX: UU.x - zU,
              clientY: UU.y - zU
            }
          })(this.pointer, DU.holding), DU.holding), xU.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: UU.isHeld((0, EU.h)("inventoryPrimary"))
          })) : oU && this.focused && this.hover.sync(AU, YU, pU, ((UU, XU) => {
            if (!XU) return {
              clientX: UU.left + UU.width - 10,
              clientY: UU.top + UU.height / 2 - 10
            };
            const zU = VX();
            return {
              clientX: UU.left + UU.width / 2 - zU,
              clientY: UU.top + UU.height / 2 - zU
            }
          })(oU, DU.holding), DU.holding), this.publishState({
            showing: !0,
            kind: DU.kind,
            holding: DU.holding,
            slotHasItem: DU.slotHasItem,
            pressHints: null !== (cU = null === (yU = DU.press) || void 0 === yU ? void 0 : yU.hints) && void 0 !== cU ? cU : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && fX(this.focusTarget),
            openButtonCloses: Uz(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === DU.kind && !(null === (QU = DU.actionElement) || void 0 === QU || !QU.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(UU) {
          var XU;
          const zU = (0, IU.d)();
          if (!zU) return;
          this.targets.revalidate();
          const cU = this.getTargets().targets;
          this.setFocus(null !== (XU = kX(zU, cU)) && void 0 !== XU ? XU : UU ? aX(zU, cU, (UU => {
            let {
              rect: XU
            } = UU;
            const cU = Math.max(XU.left - zU.x, 0, zU.x - (XU.left + XU.width)),
              yU = Math.max(XU.top - zU.y, 0, zU.y - (XU.top + XU.height));
            return Math.hypot(cU, yU) <= Math.min(XU.width, XU.height) / 2
          })) : null, !1), "cursor" === (0, NU.i)().inventoryNavigation && (this.pointer = {
            x: zU.x,
            y: zU.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const UU = this.lastRealPointer;
          if (!UU || "keyboardMouse" !== oU.e.get("activeInputDevice")) return;
          const XU = document.elementFromPoint(UU.x, UU.y);
          XU && (0, mU.p)(null, XU, UU)
        }
        endInteraction(UU) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const XU of this.dpadTimers.values()) XU.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(UU), this.ring.hide(), this.releasePointer(), this.publishState(HX.c)
        }
        getTargets() {
          const UU = this.targets.get();
          return this.hasCategories = UU.hasCategories, UU
        }
        currentTarget() {
          var UU;
          return this.focused && null !== (UU = this.getTargets().byElement.get(this.focused)) && void 0 !== UU ? UU : null
        }
        readFocusRect() {
          const UU = this.focused;
          if (null === UU || void 0 === UU || !UU.isConnected || !UU.closest(ZX)) return null;
          const XU = UU.getBoundingClientRect();
          return XU.width > 0 && XU.height > 0 ? {
            left: XU.left,
            top: XU.top,
            width: XU.width,
            height: XU.height
          } : null
        }
        ensureFocus() {
          const UU = this.readFocusRect();
          if (UU || this.pointer) return UU;
          const {
            targets: XU,
            byElement: zU
          } = this.getTargets();
          let cU = null,
            yU = !1;
          if (this.lastRect) cU = aX(FX(this.lastRect), XU);
          else {
            var QU, AU;
            const UU = ((UU, XU) => {
                const zU = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return zU ? zz(UU.filter((UU => zU.contains(UU.element))), XU) : null
              })(XU, (0, bU.g)()),
              FU = XU.find((UU => null !== UU.idx && UU.idx === this.reopenSlotIdx)),
              oU = document.querySelector(JX);
            yU = null !== UU || void 0 !== FU, cU = null !== (QU = null !== (AU = null !== UU && void 0 !== UU ? UU : FU) && void 0 !== AU ? AU : oU && zU.get(oU)) && void 0 !== QU ? QU : GX(XU)
          }
          return this.setFocus(cU, yU), this.lastRect
        }
        setFocus(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          UU && (this.focused = UU.element, this.focusTarget = UU, this.panelMemory.set(UU.panel, UU.element), XU && UU.scrollContainer && ((UU, XU) => {
            const zU = UU.getBoundingClientRect(),
              cU = rU(XU),
              yU = XU.scrollTop;
            return zU.top < cU.top ? XU.scrollTop -= cU.top - zU.top : zU.bottom > cU.bottom && (XU.scrollTop += zU.bottom - cU.bottom), XU.scrollTop !== yU
          })(UU.element, UU.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, NU.i)().inventoryNavigation) {
              if (this.lastRect) {
                const UU = FX(this.lastRect);
                this.pointer = {
                  x: UU.x,
                  y: UU.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const UU = this.lastRect ? FX(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: UU.x,
            y: UU.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, xU.hide()
        }
        hoverAtPointer() {
          var UU;
          const XU = kX(this.pointer, this.getTargets().targets);
          this.focusTarget = XU, (null === XU || void 0 === XU ? void 0 : XU.element) !== this.focused && (this.focused = null !== (UU = null === XU || void 0 === XU ? void 0 : XU.element) && void 0 !== UU ? UU : null, XU && (this.panelMemory.set(XU.panel, XU.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(UU, XU) {
          const zU = this.focusTarget,
            cU = zU && (0, NU.i)().cursorMagnetism ? FX(tX(zU)) : null;
          this.pointer = RU(this.pointer, {
            stick: UU.leftStick,
            moveDeadzone: (0, NU.i)().moveDeadzone,
            dpad: XU,
            dtMs: UU.dtMs,
            cursorSpeedPercent: (0, NU.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: cU
            }
          })
        }
        move(UU) {
          this.targets.revalidate();
          const XU = this.currentTarget();
          XU && this.setFocus(pX(XU, this.getTargets().targets, UU))
        }
        step(UU) {
          const XU = this.pointer;
          if (XU && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((UU, XU, zU) => {
            var cU;
            const yU = {
              key: "",
              rect: {
                left: UU.x,
                top: UU.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (cU = pX(yU, XU, zU)) && void 0 !== cU ? cU : aX(UU, XU)
          })(XU, this.getTargets().targets, UU));
          this.move(UU)
        }
        isNavButton(UU) {
          return !bX.some((XU => (0, EU.h)(XU) === UU)) && !(UU === (0, EU.h)("inventory") && Uz())
        }
        handleNavigation(UU, XU) {
          const zU = (0, NU.i)().inventoryNavigation,
            cU = {
              x: 0,
              y: 0
            };
          let yU = null;
          for (const oU of pU.A) {
            const QU = this.isNavButton(oU) && UU.isHeld(oU);
            QU && (cU.x += jX[oU].x, cU.y += jX[oU].y), this.dpadTimers.get(oU).update(QU, XU) && "cursor" !== zU && (yU ??= oU)
          }
          const QU = this.stickGate.update(UU.leftStick, (0, NU.i)().moveDeadzone);
          if (yU && (this.step(yU), this.stickGate.lock()), "slot" !== zU) {
            const XU = ((UU, XU, zU, cU) => "hybrid" !== UU ? "cursor" === UU : !cU && (XU || zU))(zU, null !== this.pointer, QU, null !== yU);
            return XU && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(UU, "cursor" === zU ? cU : {
              x: 0,
              y: 0
            }))
          }
          const AU = (0, pU.j)(UU.leftStick, (0, NU.i)().moveDeadzone),
            FU = this.stickRepeat.update(QU ? (0, pU.gb)(AU) : null, XU);
          FU && this.move(FU)
        }
        applyCategoryPlace() {
          const UU = this.placeAfterCategory;
          if (!UU) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const XU = aX(FX(UU.rect), this.getTargets().targets, (XU => XU.scrollGroup === UU.scrollGroup));
          this.setFocus(XU, !1)
        }
        applyFocusRequest() {
          const UU = (0, bU.t)();
          UU && (this.targets.invalidate(), this.setFocus((0, bU.e)(this.getTargets().targets, UU)))
        }
        handlePanels(UU) {
          var XU, zU, cU;
          const yU = UU.wasPressed((0, EU.h)("inventoryPanelPrevious")),
            QU = UU.wasPressed((0, EU.h)("inventoryPanelNext"));
          if (!yU && !QU) return;
          const {
            targets: AU
          } = this.getTargets(), FU = (oU = ((UU, XU) => {
            const zU = [];
            for (const yU of UU) yU.visible && !zU.includes(yU.panel) && zU.push(yU.panel);
            const cU = UU => {
              const cU = XU.indexOf(UU);
              return -1 === cU ? XU.length + zU.indexOf(UU) : cU
            };
            return zU.sort(((UU, XU) => cU(UU) - cU(XU)))
          })(AU, dX), DU = null !== (XU = null === (zU = this.focusTarget) || void 0 === zU ? void 0 : zU.panel) && void 0 !== XU ? XU : null, YU = QU ? 1 : -1, 0 === oU.length ? null : oU[oX(null === DU ? -1 : oU.indexOf(DU), oU.length, YU)]);
          var oU, DU, YU;
          if (null === FU) return;
          const NU = this.panelMemory.get(FU),
            IU = AU.filter((UU => UU.panel === FU)),
            pU = null !== (cU = IU.find((UU => UU.element === NU && UU.visible))) && void 0 !== cU ? cU : zz(IU, (0, bU.g)());
          this.setFocus(pU)
        }
        handlePaging(UU, XU) {
          const zU = (0, EU.h)("menuPageUp"),
            cU = (0, EU.h)("menuPageDown"),
            yU = this.pageUpTimer.update(UU.isHeld(zU), XU),
            QU = this.pageDownTimer.update(UU.isHeld(cU), XU);
          if (!yU && !QU) return;
          const AU = QU ? 1 : -1;
          if (!UU.wasPressed(QU ? cU : zU) && this.hasCategories) return;
          if ((UU => {
              const XU = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === XU.length) return !1;
              const zU = XU.findIndex((UU => UU.classList.contains("Selected"))),
                cU = XU[oX(zU, XU.length, UU)];
              return (0, mU.l)(cU, (0, mU.u)(cU)), !0
            })(AU)) {
            var FU, oU;
            this.targets.invalidate();
            const UU = null !== (FU = null === (oU = this.focusTarget) || void 0 === oU ? void 0 : oU.scrollGroup) && void 0 !== FU ? FU : null,
              XU = this.readFocusRect();
            return void(this.placeAfterCategory = null !== UU && XU && !this.pointer ? {
              rect: XU,
              scrollGroup: UU
            } : null)
          }
          const {
            targets: DU
          } = this.getTargets(), YU = this.currentTarget(), NU = YU && fX(YU) ? YU : DU.find((UU => fX(UU) && UU.visible));
          if (!NU) return;
          const IU = ((UU, XU, zU, cU) => {
            if (null === UU.scrollGroup) return null;
            const yU = FX(UU.rect),
              QU = yU.x,
              AU = yU.y + ("Down" === zU ? cU : -cU);
            let FU = null,
              oU = 1 / 0;
            for (const DU of XU) {
              if (DU.scrollGroup !== UU.scrollGroup || DU.key === UU.key) continue;
              const XU = FX(DU.rect);
              if ("Down" === zU ? XU.y <= yU.y : XU.y >= yU.y) continue;
              const cU = Math.hypot(XU.x - QU, XU.y - AU);
              cU < oU && (FU = DU, oU = cU)
            }
            return FU
          })(NU, DU, AU > 0 ? "Down" : "Up", NU.scrollContainer.clientHeight);
          this.setFocus(null !== IU && void 0 !== IU ? IU : NU)
        }
        handleScroll(UU) {
          var XU, zU, cU, yU, QU, AU;
          if (!this.scroller.isScrolling(UU.rightStick)) return void this.scroller.reset();
          const {
            targets: FU
          } = this.getTargets(), oU = this.pointer, DU = !oU && this.focusTarget && fX(this.focusTarget) ? this.focusTarget.scrollContainer : null, EU = oU && (null === (XU = FU.find((UU => UU.clip && gX(UU.clip, oU)))) || void 0 === XU ? void 0 : XU.scrollContainer), YU = null !== (zU = null !== (cU = null !== (yU = this.scroller.current()) && void 0 !== yU ? yU : EU) && void 0 !== cU ? cU : DU) && void 0 !== zU ? zU : null === (QU = FU.find(fX)) || void 0 === QU ? void 0 : QU.scrollContainer;
          if (!YU || !this.scroller.step(YU, UU.rightStick, UU.dtMs)) return;
          this.targets.scrolled(YU);
          const NU = oU || (null === (AU = this.focusTarget) || void 0 === AU ? void 0 : AU.scrollContainer) !== YU ? null : this.readFocusRect();
          if (!NU) return;
          const IU = rU(YU),
            pU = FX(NU);
          if (pU.y < IU.top || pU.y > IU.bottom) {
            const UU = this.focusTarget.scrollGroup,
              XU = aX(pU, this.getTargets().targets, (XU => XU.scrollGroup === UU));
            this.setFocus(XU, !1)
          }
        }
        focusContext(UU) {
          const {
            kind: XU,
            idx: zU
          } = this.focused ? qX(this.focused) : {
            kind: null,
            idx: null
          }, cU = this.focused ? CX(this.focused) : null, yU = cU ? (0, lX.b)(cU) : null;
          return {
            kind: XU,
            idx: zU,
            actionElement: cU,
            press: yU,
            hasPress: null !== yU,
            hasBack: !(null === yU || void 0 === yU || !yU.back),
            holding: UU.isHolding(),
            slotHasItem: null !== zU && UU.hasItemAt(zU)
          }
        }
        handleButtons(UU, XU, zU) {
          var cU, yU;
          if (!this.activePress || UU.isHeld(this.activePress.button) && (cU = this.activePress.target, yU = this.focused, null !== cU.recipe ? wX(yU).recipe === cU.recipe : yU === cU.element) || this.releasePress(), this.scrollStickClick.update(UU.rightStick, XU), !this.handleHotbarPick(UU, zU)) {
            for (const [cU, yU] of KX) {
              const QU = (0, EU.h)(yU);
              if (!UU.wasPressed(QU) || "openButton" === cU && !Uz()) continue;
              if ("RS" === QU && !this.scrollStickClick.allowsClick(XU)) continue;
              const AU = this.focusContext(zU),
                FU = jU(cU, AU);
              FU && this.runIntent(FU, AU, QU, zU)
            }
            this.handleDrop(UU, XU, zU)
          }
        }
        handleHotbarPick(UU, XU) {
          const zU = this.hotbarPick;
          if (!zU) return !1;
          const cU = UU.wasPressed((0, EU.h)("inventoryPrimary")) || UU.wasPressed((0, EU.h)("inventoryHotbarSwap"));
          if (!cU && !UU.wasPressed((0, EU.h)("inventoryClose")) && !XU.isHolding()) return !(UU.wasPressed((0, EU.h)("inventory")) && Uz());
          const yU = this.focusTarget;
          cU && "hotbar" === (null === yU || void 0 === yU ? void 0 : yU.panel) && null !== yU.idx && yU.idx !== zU.idx && (XU.swapWithHotbar(yU.idx, zU.idx), this.afterAction()), this.hotbarPick = null;
          const QU = zU.element.isConnected ? this.getTargets().byElement.get(zU.element) : void 0;
          return QU && this.setFocus(QU), !0
        }
        startHotbarPick(UU) {
          var XU;
          const {
            targets: zU,
            byElement: cU
          } = this.getTargets(), yU = document.querySelector(JX), QU = null !== (XU = yU && cU.get(yU)) && void 0 !== XU ? XU : zU.find((UU => "hotbar" === UU.panel));
          QU && this.focused && (this.hotbarPick = {
            idx: UU,
            element: this.focused
          }, this.setFocus(QU))
        }
        focusKey() {
          return this.focused ? zX(this.focused) : null
        }
        handleDrop(UU, XU, zU) {
          const cU = (0, EU.h)("inventoryDrop");
          if (UU.wasPressed(cU)) {
            const UU = (yU = this.focusContext(zU)).holding ? {
              kind: "uD"
            } : "slot" === yU.kind && yU.slotHasItem && null !== yU.idx ? {
              kind: "slot",
              idx: yU.idx
            } : null;
            return void(UU && (this.dropFrom(UU, !1, zU), this.dropLatch.press(UU, this.focusKey(), XU, tU.c[(0, NU.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var yU;
          const QU = this.dropLatch.update(UU.isHeld(cU), this.focusKey(), XU);
          QU && ((UU, XU, zU) => "uD" === UU.kind ? XU : !XU && zU(UU.idx))(QU, zU.isHolding(), zU.hasItemAt) && (this.dropFrom(QU, !0, zU), this.afterAction())
        }
        dropFrom(UU, XU, zU) {
          "uD" === UU.kind ? zU.dropHeld(XU, this.slotPoint()) : zU.dropSlot(UU.idx, XU)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (UU => {
            const XU = FX(UU);
            return {
              clientX: XU.x,
              clientY: XU.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(UU, XU, zU, cU) {
          const yU = XU.idx,
            QU = XU.actionElement;
          switch (QU && Xz.has(UU) && (0, gU.D)(QU), UU) {
            case "slotPrimary":
              cU.primary(yU, this.slotPoint());
              break;
            case "slotSecondary":
              cU.secondary(yU, this.slotPoint());
              break;
            case "slotQuickMove":
              cU.quickMove(yU, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(yU);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(XU.press, "pressPrimary" === UU ? "primary" : "secondary", zU);
              break;
            case "click":
              (0, mU.l)(QU, (0, mU.u)(QU));
              break;
            case "openKeyboard":
              (0, mU.J)(QU) && (0, mU.F)(QU);
              break;
            case "pressBack":
              XU.press.back();
              break;
            case "cancel":
              cU.cancel();
              break;
            case "close":
              return this.releasePress(), void cU.close()
          }
          this.afterAction()
        }
        startPress(UU, XU, zU) {
          this.releasePress(), UU.press(XU) && (this.activePress = {
            handlers: UU,
            button: zU,
            target: wX(this.focused)
          })
        }
        releasePress() {
          var UU, XU, zU;
          null === (UU = this.activePress) || void 0 === UU || null === (XU = (zU = UU.handlers).release) || void 0 === XU || XU.call(zU), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(UU) {
          ((UU, XU) => {
            var zU, cU, yU, QU, AU, FU;
            return UU.showing === XU.showing && UU.kind === XU.kind && UU.holding === XU.holding && UU.slotHasItem === XU.slotHasItem && (null === (zU = UU.pressHints) || void 0 === zU ? void 0 : zU.primary) === (null === (cU = XU.pressHints) || void 0 === cU ? void 0 : cU.primary) && (null === (yU = UU.pressHints) || void 0 === yU ? void 0 : yU.secondary) === (null === (QU = XU.pressHints) || void 0 === QU ? void 0 : QU.secondary) && (null === (AU = UU.pressHints) || void 0 === AU ? void 0 : AU.back) === (null === (FU = XU.pressHints) || void 0 === FU ? void 0 : FU.back) && UU.hasCategories === XU.hasCategories && UU.hasList === XU.hasList && UU.openButtonCloses === XU.openButtonCloses && UU.steppingSlots === XU.steppingSlots && UU.hotbarPicking === XU.hotbarPicking && UU.quickMoveToHotbar === XU.quickMoveToHotbar && UU.dropStackHold === XU.dropStackHold
          })(UU, this.state) || (this.state = UU, DU.k.UY(HX.d, UU))
        }
      },
      Qz = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Az = zU(9264),
      Fz = zU(320),
      oz = zU(1680),
      Dz = zU(8758);
    const Ez = "[data-pad-secondary]",
      Yz = UU => UU instanceof HTMLElement && (0, TU.m)(UU) && !(0, TU.s)(UU),
      Nz = UU => {
        const XU = UU.querySelector(Ez);
        if (XU && Yz(XU)) return XU;
        for (const yU of null !== (zU = null === (cU = UU.parentElement) || void 0 === cU ? void 0 : cU.children) && void 0 !== zU ? zU : []) {
          var zU, cU;
          if (yU !== UU && yU.matches(Ez) && Yz(yU)) return yU
        }
        return null
      },
      Iz = (UU, XU, zU, cU) => Math.max(0, Math.max(UU, zU) - Math.min(XU, cU)),
      pz = (UU, XU, zU, cU) => Math.max(0, Math.min(XU, cU) - Math.max(UU, zU)),
      az = (UU, XU, zU) => {
        const cU = (UU.left + UU.right) / 2,
          yU = (UU.top + UU.bottom) / 2,
          QU = (XU.left + XU.right) / 2,
          AU = (XU.top + XU.bottom) / 2;
        if ("Left" === zU || "Right" === zU) {
          const FU = "Right" === zU ? 1 : -1;
          return {
            forwardGap: "Right" === zU ? XU.left - UU.right : UU.left - XU.right,
            centreForward: (QU - cU) * FU,
            sidewaysGap: Iz(UU.top, UU.bottom, XU.top, XU.bottom),
            sidewaysOverlap: pz(UU.top, UU.bottom, XU.top, XU.bottom),
            centreSideways: Math.abs(AU - yU),
            startSideways: Math.abs(XU.top - UU.top),
            fromSidewaysSize: UU.bottom - UU.top,
            toSidewaysSize: XU.bottom - XU.top,
            toLength: XU.right - XU.left
          }
        }
        const FU = "Down" === zU ? 1 : -1;
        return {
          forwardGap: "Down" === zU ? XU.top - UU.bottom : UU.top - XU.bottom,
          centreForward: (AU - yU) * FU,
          sidewaysGap: Iz(UU.left, UU.right, XU.left, XU.right),
          sidewaysOverlap: pz(UU.left, UU.right, XU.left, XU.right),
          centreSideways: Math.abs(QU - cU),
          startSideways: Math.abs(XU.left - UU.left),
          fromSidewaysSize: UU.right - UU.left,
          toSidewaysSize: XU.right - XU.left,
          toLength: XU.bottom - XU.top
        }
      },
      tz = UU => UU.centreForward > .5 && UU.forwardGap >= -UU.toLength / 2,
      gz = UU => {
        const XU = UU.sidewaysOverlap > 0 ? 0 : 2 * UU.fromSidewaysSize,
          zU = UU.fromSidewaysSize > 1.5 * UU.toSidewaysSize ? UU.startSideways : UU.centreSideways;
        return Math.max(0, UU.forwardGap) + 3 * UU.sidewaysGap + XU + .1 * zU
      },
      kz = (UU, XU) => pz(UU.top, UU.bottom, XU.top, XU.bottom) > 0 || XU.bottom - XU.top > XU.right - XU.left,
      Gz = (UU, XU, zU, cU, yU, QU) => {
        const AU = yU ? Zz(UU, XU, zU, yU) : new Set,
          FU = Pz(UU, XU, zU, AU);
        return FU < 0 && AU.size > 0 && QU ? Bz(UU, XU, zU, QU) : cU && FU >= 0 ? Rz(UU, XU, zU, cU, FU, AU) : FU
      },
      Bz = (UU, XU, zU, cU) => {
        const yU = new Set,
          QU = Pz(UU, XU, "Up", yU) >= 0,
          AU = Pz(UU, XU, "Down", yU) >= 0,
          FU = new Set;
        return XU.forEach(((XU, zU) => {
          const yU = XU.top + XU.bottom < UU.top + UU.bottom;
          cU[zU] && !(yU ? QU : AU) || FU.add(zU)
        })), Pz(UU, XU, zU, FU)
      },
      Zz = (UU, XU, zU, cU) => {
        const yU = new Set;
        return "Left" !== zU && "Right" !== zU || XU.forEach(((XU, zU) => {
          cU[zU] && pz(UU.top, UU.bottom, XU.top, XU.bottom) <= 0 && yU.add(zU)
        })), yU
      },
      Rz = (UU, XU, zU, cU, yU, QU) => {
        const AU = az(UU, XU[yU], zU).forwardGap;
        let FU = yU,
          oU = cU[yU],
          DU = 1 / 0;
        return XU.forEach(((XU, EU) => {
          const YU = cU[EU];
          if (QU.has(EU) || YU < oU || YU === oU && FU === yU) return;
          const NU = az(UU, XU, zU);
          if (!tz(NU) || NU.forwardGap < 0 || NU.forwardGap >= AU) return;
          const IU = gz(NU);
          (YU > oU || IU < DU) && (FU = EU, oU = YU, DU = IU)
        })), FU
      },
      Pz = (UU, XU, zU, cU) => {
        let yU = -1,
          QU = 1 / 0;
        if (XU.forEach(((XU, AU) => {
            const FU = ((UU, XU, zU) => {
              const cU = az(UU, XU, zU);
              if (!tz(cU)) return null;
              const yU = Math.max(0, cU.forwardGap);
              return cU.sidewaysOverlap <= 0 && cU.sidewaysGap > 2 * (yU + 1) ? null : gz(cU)
            })(UU, XU, zU);
            null !== FU && FU < QU && !cU.has(AU) && (QU = FU, yU = AU)
          })), yU < 0) return -1;
        const AU = XU[yU],
          FU = az(UU, AU, zU).forwardGap;
        let oU = FU,
          DU = yU;
        return XU.forEach(((XU, QU) => {
          if (QU === yU || cU.has(QU) || !((UU, XU, zU) => {
              const cU = "Left" === zU || "Right" === zU,
                yU = cU ? pz(UU.top, UU.bottom, XU.top, XU.bottom) : pz(UU.left, UU.right, XU.left, XU.right),
                QU = cU ? Math.min(UU.bottom - UU.top, XU.bottom - XU.top) : Math.min(UU.right - UU.left, XU.right - XU.left);
              return yU > 0 && yU >= QU / 2
            })(XU, AU, zU)) return;
          const EU = az(UU, XU, zU);
          tz(EU) && EU.forwardGap + EU.toLength <= FU + 1 && EU.forwardGap < oU && (oU = EU.forwardGap, DU = QU)
        })), DU
      },
      Wz = (UU, XU) => {
        let zU = -1,
          cU = 1 / 0;
        return XU.forEach(((XU, yU) => {
          const QU = Math.max(XU.left - UU.x, 0, UU.x - XU.right),
            AU = Math.max(XU.top - UU.y, 0, UU.y - XU.bottom),
            FU = Math.hypot(QU, AU);
          FU < cU && (cU = FU, zU = yU)
        })), zU
      },
      dz = (UU, XU) => {
        const zU = Math.min(UU.bottom - UU.top, XU.bottom - XU.top) / 2;
        return Math.abs(UU.top - XU.top) > zU ? UU.top - XU.top : UU.left - XU.left
      },
      Lz = UU => {
        let XU = -1;
        for (let zU = 0; zU < UU.length; zU++)(XU < 0 || dz(UU[zU], UU[XU]) < 0) && (XU = zU);
        return XU
      };
    var ez = zU(1732),
      Cz = zU(9270),
      wz = zU(9273);
    const qz = UU => {
        if ("death" !== UU || "inGame" !== oU.e.get("gameState") || "off" === (0, NU.i)().quickChat || null === (0, ez.b)()) return !1;
        const XU = (0, EU.h)("chat");
        return XU !== (0, EU.h)("menuConfirm") && XU !== (0, EU.h)("menuBack")
      },
      Oz = new Cz.b;
    var Sz = zU(4675),
      rz = zU(9282),
      uz = zU(9287);
    const fz = UU => {
        let XU = null;
        for (const zU of UU.querySelectorAll("[data-pad-tabs]"))(0, TU.m)(zU) && (!XU || Number(zU.dataset.padTabs) < Number(XU.dataset.padTabs)) && (XU = zU);
        return XU
      },
      iz = (UU, XU, zU, cU) => {
        UU.focusWhenFound((() => {
          const yU = UU.pickInitial(XU);
          if (yU && !zU.has(yU) && (null === cU || void 0 === cU || !cU.contains(yU))) return yU;
          const QU = ((UU, XU) => {
              const zU = XU => UU.getEnabledCandidates(XU).filter((UU => !UU.closest("[data-pad-tabs]")));
              for (const cU of (0, TU.e)(XU)) {
                const UU = zU(cU);
                if (UU.length > 0) return UU
              }
              return zU(XU)
            })(UU, XU).filter((UU => !zU.has(UU))),
            AU = Lz(QU.map((UU => UU.getBoundingClientRect())));
          return AU >= 0 ? QU[AU] : null
        }), 3e3)
      },
      Hz = (UU, XU, zU, cU) => {
        var yU;
        const QU = ((UU, XU) => {
          if (0 === UU.length) return null;
          const zU = UU.findIndex((UU => "true" === UU.dataset.padSelected));
          return zU < 0 ? XU > 0 ? UU[0] : UU[UU.length - 1] : UU[(zU + XU + UU.length) % UU.length]
        })([...zU.querySelectorAll("[data-pad-tab]")].filter((UU => (0, TU.m)(UU) && !(0, TU.s)(UU))), cU);
        if (!QU) return;
        const AU = null !== (yU = null === UU || void 0 === UU ? void 0 : UU.getFocused()) && void 0 !== yU ? yU : null,
          FU = !(null === AU || void 0 === AU || !AU.isConnected) && zU.contains(AU),
          oU = UU && !FU ? new Set(UU.getEnabledCandidates(XU)) : null;
        (0, mU.b)(QU), UU && (oU ? iz(UU, XU, oU, zU) : UU.setFocus(QU, {
          byUser: !0
        }))
      },
      Mz = UU => {
        var XU;
        const zU = rU(null !== (XU = eU(UU, "x")) && void 0 !== XU ? XU : UU),
          cU = (0, TU.d)(UU).filter((UU => !(0, TU.s)(UU))),
          yU = cU.filter((UU => uU(UU.getBoundingClientRect(), zU)));
        return (yU.length > 0 ? yU : cU).sort(((UU, XU) => dz(UU.getBoundingClientRect(), XU.getBoundingClientRect())))
      },
      vz = (UU, XU, zU) => {
        const cU = [...XU.querySelectorAll("[data-pad-row]")].filter(TU.m),
          yU = UU.getFocused(),
          QU = yU ? cU.findIndex((UU => UU.contains(yU))) : -1;
        let AU = 0,
          FU = zU > 0 ? 0 : cU.length - 1;
        if (QU >= 0 && yU) AU = Math.max(0, Mz(cU[QU]).indexOf(yU)), FU = QU + zU;
        else if (yU) {
          const UU = yU.getBoundingClientRect(),
            XU = cU.map((XU => {
              const cU = XU.getBoundingClientRect();
              return zU > 0 ? cU.top >= UU.top : cU.bottom <= UU.bottom
            }));
          FU = zU > 0 ? XU.indexOf(!0) : XU.lastIndexOf(!0)
        }
        for (let oU = FU; oU >= 0 && oU < cU.length; oU += zU) {
          const XU = Mz(cU[oU]);
          if (XU.length > 0) return void UU.setFocus(XU[Math.min(AU, XU.length - 1)], {
            byUser: !0
          })
        }
      },
      Vz = (UU, XU, zU) => {
        var cU, yU;
        const QU = null !== (cU = null === UU || void 0 === UU ? void 0 : UU.getFocused()) && void 0 !== cU ? cU : null,
          AU = null !== QU && void 0 !== QU && QU.closest("[data-pad-row]") ? "x" : "y",
          FU = null !== (yU = QU ? eU(QU, AU, XU) : null) && void 0 !== yU ? yU : wU(XU, AU);
        if (!FU) return;
        const oU = QU ? (0, mU.u)(QU) : null;
        if (SU(FU, AU, zU * ("y" === AU ? FU.clientHeight : FU.clientWidth) * .85), !UU || !oU) return;
        const DU = rU(FU),
          EU = UU.getEnabledCandidates(XU).filter((UU => FU.contains(UU) && uU(UU.getBoundingClientRect(), DU))),
          YU = Wz(oU, EU.map((UU => UU.getBoundingClientRect())));
        YU >= 0 && UU.setFocus(EU[YU], {
          scroll: !1,
          byUser: !0
        })
      };
    let sz = null;
    const nz = (UU, XU) => {
        var zU, cU;
        const yU = XU.querySelector("[data-pad-friends-column]"),
          QU = UU.getFocused();
        if (!yU || !QU || !yU.contains(QU)) return !1;
        const AU = UU.getEnabledCandidates(XU).filter((UU => !yU.contains(UU))),
          FU = Wz((0, mU.u)(QU), AU.map((UU => UU.getBoundingClientRect()))),
          oU = null === (zU = sz) || void 0 === zU ? void 0 : zU.deref();
        return UU.setFocus(null !== oU && void 0 !== oU && oU.isConnected ? oU : null !== (cU = AU[FU]) && void 0 !== cU ? cU : null, {
          byUser: !0
        }), !0
      },
      mz = UU => {
        const XU = (0, EU.h)(UU);
        return (0, pU.H)(XU) || Dz.u.some((UU => (0, EU.h)(UU) === XU)) ? null : XU
      },
      lz = (UU, XU) => {
        const zU = mz(XU);
        return null !== zU && UU.wasPressed(zU)
      },
      xz = function(UU, XU, zU) {
        let cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yU = (UU => {
            var XU, zU;
            return null !== (XU = null === (zU = fz(UU)) || void 0 === zU ? void 0 : zU.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== XU ? XU : null
          })(XU),
          QU = UU && yU ? new Set(UU.getEnabledCandidates(XU)) : null;
        (0, Az.d)(), zU === Fz.s.SETTINGS && (0, oz.i)(oU.e.get("openEverythingMenuName")) ? oU.e.set({
          openEverythingMenuName: zU
        }) : (0, oz.x)((0, uz.b)("padMenuShortcut"), zU, cU), UU && QU && yU && iz(UU, XU, QU, yU.closest("[data-pad-tabs]"))
      },
      Jz = UU => null !== UU.closest(".Dropdown-root") || null !== UU.querySelector(".Dropdown-root.is-open"),
      jz = UU => null !== (0, rz.c)() && "popup" !== UU.layer.kind && !fz(UU.root) && !Jz(UU.root),
      Kz = (0, aU.d)(pU.bb),
      bz = (0, aU.d)(pU.bb),
      Tz = (UU, XU, zU) => {
        if (((UU, XU) => {
            const zU = (0, EU.h)("chat");
            return qz(XU) && UU.isHeld(zU) ? "hold" === Oz.update(UU.wasPressed(zU), UU.isHeld(zU), performance.now(), tU.c[(0, NU.i)().tapHoldTime].wheelMs) && (YU.d.consumeButton(zU), DU.k.UY(wz.p), !0) : (Oz.release(), !1)
          })(XU, zU.layer.kind)) return !0;
        const cU = zU.root;
        for (const [AU, FU] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (XU.wasPressed((0, EU.h)(AU))) {
            const XU = Jz(cU) ? null : fz(cU);
            if (XU) Hz(UU, cU, XU, FU);
            else if (jz(zU)) {
              var yU;
              const XU = UU ? new Set(UU.getEnabledCandidates(cU)) : null;
              null !== (yU = (0, rz.c)()) && void 0 !== yU && yU(FU) && UU && XU && iz(UU, cU, XU, null)
            } else UU && vz(UU, cU, FU);
            return !0
          } for (const [AU, FU, oU] of [
            ["menuPageUp", -1, Kz],
            ["menuPageDown", 1, bz]
          ]) {
          const zU = (0, EU.h)(AU);
          if (XU.wasPressed(zU) && oU.reset(), oU.update(XU.isHeld(zU), performance.now())) return Vz(UU, cU, FU), !0
        }
        const QU = "popup" === zU.layer.kind;
        return lz(XU, "pause") ? (QU || (0, oz.q)() && "menu" !== zU.layer.kind || xz(UU, cU, (0, oz.q)() ? Fz.s.SETTINGS : (0, Sz.d)()), !0) : !!lz(XU, "leaderboard") && ("home" === zU.layer.kind ? (UU => {
          const XU = [...UU.querySelectorAll("[data-pad-notifications]")].find(TU.m);
          XU && (0, mU.b)(XU)
        })(cU) : QU || xz(UU, cU, Fz.s.LOBBY_LEADERBOARD, "inGame" === oU.e.get("gameState")), !0)
      },
      hz = (UU, XU, zU) => {
        if (Tz(UU, XU, zU)) return !0;
        const cU = "home" === zU.layer.kind;
        if (XU.wasPressed((0, EU.h)("menuSecondary"))) {
          const XU = UU.getFocused(),
            yU = XU ? Nz(XU) : null;
          if (yU) return (0, mU.b)(yU), !0;
          if (cU) {
            const XU = zU.root.querySelector("[data-pad-search] input");
            return XU && (0, TU.q)(XU, zU.root) ? (UU.setFocus(XU, {
              byUser: !0
            }), (0, mU.b)(XU)) : oU.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!cU || !lz(XU, "inventory")) && (((UU, XU) => {
          var zU, cU;
          const yU = XU.querySelector("[data-pad-friends-column]");
          if (!yU || !(0, TU.m)(yU)) return void(0, oz.x)((0, uz.b)("padMenuShortcut"), Fz.s.SOCIAL);
          if (nz(UU, XU)) return;
          const QU = null !== (zU = null === (cU = yU.querySelector("[data-pad-friends-start]")) || void 0 === cU ? void 0 : cU.getBoundingClientRect().top) && void 0 !== zU ? zU : -1 / 0,
            AU = UU.getEnabledCandidates(yU),
            FU = AU.filter((UU => UU.getBoundingClientRect().top >= QU)),
            oU = FU.length > 0 ? FU : AU,
            DU = Lz(oU.map((UU => UU.getBoundingClientRect())));
          UU.setFocus(DU >= 0 ? oU[DU] : null, {
            byUser: !0
          })
        })(UU, zU.root), !0)
      },
      Uc = UU => {
        var XU, zU, cU;
        const yU = (0, mU.w)(UU);
        if (null !== yU) return yU;
        const QU = (null !== (XU = null !== (zU = null !== (cU = UU.getAttribute("aria-label")) && void 0 !== cU ? cU : UU.getAttribute("title")) && void 0 !== zU ? zU : UU.textContent) && void 0 !== XU ? XU : "").replace(/\s+/g, " ").trim();
        return QU ? `${UU.tagName}:${QU.slice(0,100)}` : null
      };
    class Xc {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(UU) {
        const XU = this.history.indexOf(UU);
        if (XU >= 0) {
          for (const UU of this.history.splice(XU + 1)) this.remembered.delete(UU);
          return !0
        }
        return this.remembered.delete(UU), this.history.push(UU), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(UU) {
        this.remembered.delete(UU);
        const XU = this.history.indexOf(UU);
        XU >= 0 && this.history.splice(XU, 1)
      }
      remember(UU, XU, zU, cU) {
        const yU = Uc(XU),
          QU = (0, mU.w)(XU),
          AU = null !== QU && ((UU, XU) => {
            let zU = 0;
            for (const cU of UU.querySelectorAll("[data-pad-key], [href]"))
              if ((cU.getAttribute("data-pad-key") === XU || cU.getAttribute("href") === XU) && (zU++, zU > 1)) return !0;
            return !1
          })(zU, QU) ? Math.max(0, this.twins(cU(), QU).indexOf(XU)) : 0;
        this.remembered.set(UU, {
          element: new WeakRef(XU),
          identity: yU,
          ordinal: AU
        })
      }
      has(UU) {
        return this.remembered.has(UU)
      }
      recall(UU, XU) {
        var zU, cU;
        const yU = this.remembered.get(UU);
        if (!yU) return null;
        const QU = yU.element.deref();
        if (QU && XU.includes(QU)) return QU;
        if (null === yU.identity) return null;
        const AU = this.twins(XU, yU.identity);
        return null !== (zU = null !== (cU = AU[yU.ordinal]) && void 0 !== cU ? cU : AU[0]) && void 0 !== zU ? zU : null
      }
      twins(UU, XU) {
        return UU.filter((UU => Uc(UU) === XU))
      }
    }
    var zc = zU(1294);
    const cc = UU => {
        const XU = [];
        let zU = UU;
        for (; zU && zU !== document.body;) {
          const UU = getComputedStyle(zU).zIndex;
          "auto" !== UU && XU.push(Number(UU) || 0), zU = zU.parentElement
        }
        return XU.reverse()
      },
      yc = (UU, XU) => {
        const zU = ((UU, XU) => {
          const zU = Math.max(UU.length, XU.length);
          for (let QU = 0; QU < zU; QU++) {
            var cU, yU;
            const zU = (null !== (cU = UU[QU]) && void 0 !== cU ? cU : 0) - (null !== (yU = XU[QU]) && void 0 !== yU ? yU : 0);
            if (0 !== zU) return zU
          }
          return 0
        })(cc(UU), cc(XU));
        if (0 !== zU) return zU > 0;
        if (UU.contains(XU)) return !1;
        if (XU.contains(UU)) return !0;
        const cU = UU.compareDocumentPosition(XU);
        return !!(cU & Node.DOCUMENT_POSITION_PRECEDING) || !(cU & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Qc = (UU, XU) => {
        var zU;
        return null !== (zU = yc(UU.root, XU.root)) && void 0 !== zU ? zU : UU.order > XU.order
      },
      Ac = (UU, XU) => XU.some((XU => !XU.contains(UU) && !UU.contains(XU) && !0 === yc(XU, UU)));
    let Fc = null,
      oc = null,
      Dc = -1;
    const Ec = () => {
        var UU;
        const XU = null === (UU = document.timeline) || void 0 === UU ? void 0 : UU.currentTime,
          zU = "number" === typeof XU ? XU : null;
        if (null !== zU && zU === oc && Dc === (0, zc.c)()) return Fc;
        let cU = null;
        const yU = [],
          QU = [...document.querySelectorAll("[data-pad-covers]")].filter(TU.m);
        for (const AU of (0, zc.e)()) {
          const UU = AU.getRoot(),
            XU = !!UU && (0, TU.m)(UU) && !Ac(UU, QU);
          if (AU.shown && !XU && yU.push(AU), AU.shown = XU, !UU || !XU) continue;
          const zU = {
            layer: AU,
            root: UU,
            order: AU.order
          };
          cU && !Qc(zU, cU) || (cU = zU)
        }
        Fc = cU, oc = zU, Dc = (0, zc.c)();
        for (const AU of yU)(0, zc.g)(AU);
        return Fc
      },
      Yc = () => {
        const UU = Ec();
        return !(null === UU || void 0 === UU || !UU.layer.close) && (UU.layer.close(), oc = null, !0)
      },
      Nc = () => {
        var UU, XU;
        return null !== (UU = null === (XU = Ec()) || void 0 === XU ? void 0 : XU.root) && void 0 !== UU ? UU : null
      },
      Ic = UU => UU ? {
        ...UU,
        root: Nc()
      } : null;
    let pc = null,
      ac = null,
      tc = (0, NU.i)().menuNavigation,
      gc = null;
    const kc = new ZU;
    let Gc = null;
    DU.k.subscribe(NU.g, (() => {
      const UU = (0, NU.i)().menuNavigation;
      UU !== tc && (tc = UU, pc = null, ac = null)
    }));
    const Bc = () => {
        var UU;
        return null !== (UU = pc) && void 0 !== UU ? UU : (0, NU.i)().menuNavigation
      },
      Zc = UU => {
        if (dc()) {
          if (gc = Ic(UU), "hybrid" === Bc()) return kc.lock(), void(ac = ac ? null : Nc());
          pc = "focus" === Bc() ? "cursor" : "focus"
        }
      },
      Rc = () => {
        const UU = gc;
        return gc = null, UU
      };
    let Pc = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Wc = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const zU = Pc.root === UU,
          cU = zU ? Pc.firstSeenMs : XU,
          yU = Pc.has || XU - cU > 1e3;
        return (!zU || !yU || XU - Pc.atMs > 250) && (Pc = {
          root: UU,
          firstSeenMs: cU,
          atMs: XU,
          has: (0, TU.i)(UU)
        }), Pc.has
      },
      dc = () => {
        const UU = Nc();
        return null !== UU && Wc(UU)
      },
      Lc = () => {
        const UU = Ec();
        return ac && (null === UU || void 0 === UU ? void 0 : UU.root) !== ac && (ac = null), (UU => {
          let {
            mode: XU,
            hasLayer: zU,
            hasCandidates: cU,
            hybridCursorEngaged: yU
          } = UU;
          return zU ? "cursor" !== XU && cU() ? "hybrid" === XU && yU ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Bc(),
          hasLayer: null !== UU,
          hasCandidates: () => null !== UU && Wc(UU.root),
          hybridCursorEngaged: null !== ac
        })
      },
      ec = () => "hybrid" === Bc() && dc(),
      Cc = "pad-focused";
    var wc = zU(4985),
      qc = zU(5588);
    const Oc = "[data-pad-destructive]",
      Sc = `${Oc}, [data-pad-back]`,
      rc = UU => ({
        rect: UU.getBoundingClientRect(),
        destructive: UU.matches(Oc),
        closes: null !== UU.closest("[data-pad-close-button]"),
        unavailable: UU.matches("[data-pad-unavailable]")
      }),
      uc = UU => {
        let {
          destructive: XU,
          closes: zU,
          unavailable: cU
        } = UU;
        return XU ? zU ? 2 : 3 : cU ? 1 : 0
      },
      fc = UU => {
        let XU = -1;
        for (let zU = 0; zU < UU.length; zU++) {
          if (XU < 0) {
            XU = zU;
            continue
          }
          const cU = UU[zU],
            yU = UU[XU];
          uc(cU) === uc(yU) ? dz(cU.rect, yU.rect) < 0 && (XU = zU) : uc(cU) < uc(yU) && (XU = zU)
        }
        return XU
      },
      ic = "[data-pad-tabs]",
      Hc = "[data-pad-tab]",
      Mc = (UU, XU) => {
        const zU = UU.querySelector(`${Hc}[data-pad-selected='true']`);
        return zU && XU.includes(zU) ? zU : null
      },
      vc = (UU, XU) => {
        let zU = XU;
        for (let cU = XU.parentElement; cU && !cU.contains(UU); cU = cU.parentElement) zU = cU;
        return zU
      };
    class Vc {
      constructor() {
        this.contentReturn = null
      }
      redirect(UU, XU, zU, cU) {
        var yU, QU;
        const AU = UU.closest(ic),
          FU = XU.closest(ic);
        var oU;
        if (FU && FU !== AU) return AU || (this.contentReturn = new WeakRef(UU)), null !== (oU = Mc(FU, zU)) && void 0 !== oU ? oU : XU;
        if (!AU || FU) return XU;
        const DU = vc(UU, XU),
          EU = null === (yU = this.contentReturn) || void 0 === yU ? void 0 : yU.deref();
        return EU && DU.contains(EU) && zU.includes(EU) ? EU : null !== (QU = this.pickRegionStart(DU, eU(XU, "y", cU), zU)) && void 0 !== QU ? QU : XU
      }
      findTabContent(UU, XU, zU) {
        const cU = UU.closest(ic);
        if (!cU || !UU.matches(Hc) || cU.contains(XU)) return null;
        const yU = XU.closest(ic);
        if (yU && Number(yU.dataset.padTabs) <= Number(cU.dataset.padTabs)) return null;
        const QU = vc(UU, XU);
        return zU.some((UU => QU.contains(UU) && !UU.closest(Sc))) || !XU.closest(Sc) ? QU : null
      }
      pickContentStart(UU, XU, zU) {
        return this.contentReturn = null, this.pickRegionStart(UU, eU(UU, "y", zU), XU)
      }
      pickReplacedContentStart(UU, XU, zU, cU) {
        if (!XU.contains(UU)) return null;
        const yU = vc(XU, UU),
          QU = zU.filter((UU => XU.contains(UU) && !yU.contains(UU) && !UU.closest(Sc)));
        return 0 === QU.length ? null : (this.contentReturn = null, this.pickRegionStart(XU, eU(QU[0], "y", cU), QU))
      }
      backToStrip(UU, XU, zU) {
        if (UU.closest(ic)) return null;
        const cU = fz(zU);
        for (const yU of zU.querySelectorAll(ic)) {
          if (Number(yU.dataset.padTabs) <= 1 || yU === cU) continue;
          const QU = Mc(yU, XU),
            AU = QU ? vc(UU, yU).parentElement : null;
          if (QU && AU && AU !== zU && zU.contains(AU)) return this.contentReturn = new WeakRef(UU), QU
        }
        return null
      }
      pickRegionStart(UU, XU, zU) {
        const cU = rU(XU),
          yU = UU => {
            const XU = zU.filter((XU => UU.contains(XU) && !XU.closest(ic) && uU(XU.getBoundingClientRect(), cU))),
              yU = fc(XU.map(rc));
            return yU >= 0 ? XU[yU] : null
          };
        for (const QU of (0, TU.e)(UU)) {
          const UU = yU(QU);
          if (UU) return UU
        }
        for (const QU of UU.querySelectorAll(ic)) {
          const UU = Mc(QU, zU);
          if (UU) return UU
        }
        return yU(UU)
      }
    }
    const sc = "[data-pad-default-focus], .Dropdown-option.is-selected",
      nc = ".Dropdown-root.is-open > .Dropdown-menu",
      mc = "[data-pad-no-step-in]",
      lc = "[data-pad-tabs]",
      xc = "[data-pad-press-area]",
      Jc = UU => {
        let XU = UU;
        for (let zU = 0; XU && zU <= 4; zU++, XU = XU.parentElement) {
          const zU = XU.querySelector(".CircleInfo");
          if (zU) return XU === UU || XU.querySelectorAll(TU.b).length <= 1 ? zU : null;
          if (XU !== UU && XU.querySelectorAll(TU.b).length > 1) return null
        }
        return null
      },
      jc = (UU, XU, zU) => {
        (0, mU.p)(UU, XU, zU);
        const cU = null !== UU && void 0 !== UU && UU.isConnected ? Jc(UU) : null,
          yU = Jc(XU);
        cU !== yU && (0, mU.p)(cU, yU, yU ? (0, mU.u)(yU) : zU, {
          leaveBelow: UU,
          enterBelow: XU
        })
      },
      Kc = UU => UU.getBoundingClientRect(),
      bc = (UU, XU, zU) => {
        const cU = new Set(zU);
        for (let yU = UU; yU; yU = yU === XU ? null : yU.parentElement)
          if (cU.has(yU)) return yU;
        return null
      },
      Tc = (UU, XU) => !UU.root || UU.root === XU || XU.matches(nc) && UU.root.contains(XU);
    const hc = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Xc, this.tabStripNav = new Vc, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, aU.d)(pU.s), this.dpadRepeats = new Map(pU.A.map((UU => [UU, (0, aU.d)(pU.D)]))), this.stickRepeat = new pU.b((0, aU.d)(pU.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const UU = YU.d.register({
            name: "focus",
            isActive: () => (0, IU.k)() && "focus" === Lc(),
            onFrame: UU => {
              this.onFrame(UU)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: UU => (0, YU.f)(UU) || UU === (0, EU.h)("menuConfirm") && (0, mU.E)((0, IU.d)())
          }),
          XU = (0, zc.k)((UU => {
            const XU = (0, zc.q)(UU);
            null === UU.memoryKey && this.memory.forget(XU), XU === this.layerKey && (this.layerKey = null)
          }));
        let zU = -1 / 0;
        const cU = AU.f.onFrame((UU => {
            (0, IU.k)() || UU.timestampMs - zU < 100 || (zU = UU.timestampMs, Ec())
          })),
          yU = UU => {
            UU.isTrusted && UU.target instanceof Element && AU.f.getActivePad() && this.noteChosenStop(UU.target)
          };
        return document.addEventListener("click", yU, !0), () => {
          UU(), XU(), cU(), document.removeEventListener("click", yU, !0), this.deactivate()
        }
      }
      noteChosenStop(UU) {
        var XU, zU;
        const cU = Ec();
        if (!cU || !cU.root.contains(UU)) return;
        const yU = null !== (XU = null === (zU = UU.closest(".Dropdown-root")) || void 0 === zU ? void 0 : zU.querySelector(".Dropdown-control")) && void 0 !== XU ? XU : UU,
          QU = bc(yU, cU.root, this.getEnabledCandidates(cU.root));
        if (!QU) return;
        const AU = (0, zc.q)(cU.layer);
        AU === this.layerKey && cU.root === this.layerRoot || this.beginLayer(cU, AU), this.wasActive ? this.setFocus(QU, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = QU, this.lastFocusedCentre = (0, mU.u)(QU), this.rememberFocus(QU), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      deactivate() {
        var UU;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const UU of this.dpadRepeats.values()) UU.reset();
          this.stickRepeat.reset(), null !== (UU = this.focused) && void 0 !== UU && UU.isConnected && jc(this.focused, null, (0, mU.u)(this.focused)), this.notify()
        }
      }
      setFocus(UU) {
        var XU;
        let {
          scroll: zU = !0,
          byUser: cU = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (cU && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), UU === this.focused) return;
        const yU = null !== (XU = this.focused) && void 0 !== XU && XU.isConnected ? this.focused : null;
        if (this.focused = UU, UU) {
          zU && (UU.classList.add(Cc), UU.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), cU && ((UU, XU) => {
            const zU = XU.closest("[data-pad-friends-column]");
            zU && UU && !zU.contains(UU) && (sz = new WeakRef(UU))
          })(yU, UU);
          const XU = (0, mU.u)(UU);
          this.lastFocusedCentre = XU, this.movedInLayer && this.rememberFocus(UU), jc(yU, UU, XU), "false" === UU.getAttribute("aria-pressed") && UU.closest("[data-pad-select-on-focus]") && (0, mU.b)(UU)
        } else yU && jc(yU, null, (0, mU.u)(yU));
        this.notify()
      }
      rememberFocus(UU) {
        const XU = this.layerRoot;
        this.layerKey && XU && this.memory.remember(this.layerKey, UU, XU, (() => this.getEnabledCandidates(XU)))
      }
      noteCursorActivation(UU) {
        const XU = Ec();
        if (!XU || !XU.root.contains(UU)) return;
        const zU = this.getEnabledCandidates(XU.root),
          cU = new Set(zU);
        let yU = UU;
        for (; yU && !cU.has(yU);) yU = yU === XU.root ? null : yU.parentElement;
        if (!(yU instanceof HTMLElement)) return;
        const QU = (0, zc.q)(XU.layer);
        this.memory.enter(QU), this.memory.remember(QU, yU, XU.root, (() => zU))
      }
      notePageEnteredByCursor(UU) {
        return this.memory.enter(UU)
      }
      recallStop(UU, XU) {
        return this.findRemembered(UU, XU)
      }
      focusWhenFound(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: UU,
          untilMs: performance.now() + XU,
          holdWhile: zU
        }
      }
      getEnabledCandidates(UU) {
        return (0, TU.d)(UU).filter((UU => !(0, TU.s)(UU)))
      }
      onFrame(UU) {
        var XU;
        const zU = Ec();
        if (!zU) return;
        const cU = null !== (XU = this.findOpenDropdown(zU)) && void 0 !== XU ? XU : zU,
          yU = performance.now(),
          QU = (0, zc.q)(cU.layer);
        if (QU !== this.layerKey || cU.root !== this.layerRoot) {
          const XU = this.focused;
          if (null !== this.layerKey && cU.root === this.layerRoot && XU && (0, TU.q)(XU, cU.root)) this.continueLayer(QU, XU), this.wasActive || this.resume(cU.root, yU);
          else {
            const XU = !this.wasActive && !UU.wokeDevice,
              AU = "death" === this.layerKind || XU,
              FU = this.enterLayer(cU, QU);
            "popup" !== cU.layer.kind || cU !== zU || FU ? "menu" === cU.layer.kind && AU && "inGame" === oU.e.get("gameState") && !(0, Az.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = yU + wc.d) : (this.pressGuardExtends = XU, this.pressGuardUntilMs = yU + (XU ? wc.d : AU ? 500 : 250))
          }
        } else this.wasActive || this.resume(cU.root, yU);
        if (this.layerKind = cU.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), UU.wokeDevice && this.focusPointedStop(cU.root), this.validateFocus(cU, yU), yU < this.pressGuardUntilMs && this.pressGuardExtends && (UU.wasPressed((0, EU.h)("menuConfirm")) || UU.wasPressed((0, EU.h)("menuBack"))) && (this.pressGuardUntilMs = yU + wc.d), yU >= this.pressGuardUntilMs && this.handleButtons(UU, cU)) return;
        const AU = "hybrid" === Bc();
        if (AU && (UU => {
            const XU = Nc();
            return XU !== Gc && (Gc = XU, kc.lock()), kc.update(UU, (0, NU.i)().moveDeadzone)
          })(UU.leftStick)) return FU = this.getHandoff(), gc = Ic(FU), ac = Nc(), void YU.d.handOffHeldInput();
        var FU;
        this.handleDirections(UU, cU, yU, !AU), this.handleScroll(UU, cU)
      }
      findOpenDropdown(UU) {
        const XU = UU.root.querySelector(nc);
        if (!XU || !(0, TU.m)(XU)) return null;
        let zU = this.dropdownLayers.get(XU);
        return zU || (this.dropdownLayerCounter++, zU = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: UU.layer.kind,
          getRoot: () => XU,
          close: () => {
            (0, mU.h)(XU)
          },
          memoryKey: null
        }, this.dropdownLayers.set(XU, zU)), {
          layer: zU,
          root: XU,
          order: UU.order
        }
      }
      focusPointedStop(UU) {
        const XU = (0, IU.d)(),
          zU = XU ? document.elementFromPoint(XU.x, XU.y) : null;
        if (!zU || !UU.contains(zU)) return;
        const cU = bc(zU, UU, this.getEnabledCandidates(UU));
        cU && this.setFocus(cU, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(UU, XU) {
        const zU = this.beginLayer(UU, XU),
          cU = Rc();
        return cU && Tc(cU, UU.root) ? (this.takeOver(UU.root, cU, this.enteredLayerAtMs), zU) : (this.restoreLayerFocus(UU.root, zU), zU)
      }
      beginLayer(UU, XU) {
        return this.layerKey = XU, this.layerRoot = UU.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(XU)
      }
      restoreLayerFocus(UU, XU) {
        const zU = XU && this.layerKey ? this.findRemembered(UU, this.layerKey) : null;
        this.restoredFromMemory = null !== zU, this.setFocus(null !== zU && void 0 !== zU ? zU : this.pickInitial(UU, {
          waitForContent: !0
        }))
      }
      continueLayer(UU, XU) {
        this.layerKey = UU;
        const zU = this.memory.enter(UU);
        this.restoreOnFocusLoss = zU, this.movedInLayer && !zU && this.rememberFocus(XU)
      }
      resume(UU, XU) {
        var zU;
        const cU = Rc();
        cU && Tc(cU, UU) ? this.takeOver(UU, cU, XU) : null !== (zU = this.focused) && void 0 !== zU && zU.isConnected && jc(null, this.focused, (0, mU.u)(this.focused))
      }
      pickPreferred(UU) {
        var XU;
        return null !== (XU = this.layerKey ? this.findRemembered(UU, this.layerKey) : null) && void 0 !== XU ? XU : this.pickInitial(UU, {
          waitForContent: !0
        })
      }
      findRemembered(UU, XU) {
        return this.memory.has(XU) ? this.memory.recall(XU, this.getEnabledCandidates(UU)) : null
      }
      getHandoff() {
        var UU, XU, zU;
        const cU = null !== (UU = this.focused) && void 0 !== UU && UU.isConnected ? this.focused : null,
          yU = null !== (XU = this.layerRoot) && void 0 !== XU && XU.isConnected ? this.layerRoot : null;
        return {
          point: cU ? (0, mU.u)(cU) : null !== (zU = this.lastFocusedCentre) && void 0 !== zU ? zU : this.getLayerStartPoint(yU),
          element: cU,
          direction: null
        }
      }
      getLayerStartPoint(UU) {
        if (!UU) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const XU = this.pickInitial(UU, {
          includeDisabled: !0
        });
        return (0, mU.u)(null !== XU && void 0 !== XU ? XU : UU)
      }
      takeOver(UU, XU, zU) {
        const {
          element: cU,
          direction: yU,
          point: QU
        } = XU, AU = cU instanceof HTMLElement && (0, TU.q)(cU, UU) ? cU : null;
        if (!yU) {
          const XU = this.focused;
          return AU ? this.setFocus(AU, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(UU, QU), void(this.focused && this.focused === XU && this.focused.isConnected && jc(null, this.focused, (0, mU.u)(this.focused)))
        }
        if (this.dpadRepeats.get(yU).update(!0, zU), AU) return this.setFocus(AU, {
          scroll: !1,
          byUser: !0
        }), void this.move(UU, yU, zU, !0);
        const FU = this.getEnabledCandidates(UU),
          oU = FU.map(Kc),
          DU = Gz(new DOMRect(QU.x, QU.y, 0, 0), oU, yU),
          EU = DU >= 0 ? DU : Wz(QU, oU);
        this.setFocus(EU >= 0 ? FU[EU] : this.pickInitial(UU), {
          byUser: !0
        })
      }
      focusNearest(UU, XU) {
        const zU = this.getEnabledCandidates(UU),
          cU = Wz(XU, zU.map(Kc));
        this.setFocus(cU >= 0 ? zU[cU] : this.pickInitial(UU), {
          byUser: !0
        })
      }
      pickDefault(UU) {
        let {
          includeDisabled: XU = !1,
          exclude: zU = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cU = [...UU.querySelectorAll(sc)].filter((cU => (null === zU || void 0 === zU || !zU.has(cU)) && (XU ? (0, TU.t)(cU, UU) : (0, TU.q)(cU, UU)))),
          yU = fc(cU.map(rc));
        return yU >= 0 ? cU[yU] : null
      }
      pickNewAreaStart(UU, XU) {
        const zU = [...UU.querySelectorAll(xc)].filter(TU.m);
        for (const cU of [...(0, TU.e)(UU), ...zU]) {
          if (XU.has(cU)) continue;
          const UU = this.getEnabledCandidates(cU),
            zU = fc(UU.map(rc));
          if (zU >= 0) return UU[zU]
        }
        return null
      }
      pickInitial(UU) {
        let {
          includeDisabled: XU = !1,
          waitForContent: zU = !1,
          enteredAtMs: cU = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yU = this.pickDefault(UU, {
          includeDisabled: XU
        });
        if (yU) return yU;
        const QU = UU => XU ? (0, TU.d)(UU) : this.getEnabledCandidates(UU);
        let AU = [];
        for (const NU of (0, TU.e)(UU))
          if (AU = QU(NU), AU.length > 0) break;
        if (0 === AU.length) {
          if (zU && performance.now() - cU < 1e4 && (0, TU.l)(UU)) return null;
          AU = QU(UU)
        }
        const FU = AU.map(Kc),
          oU = rU(null),
          DU = AU.filter(((UU, XU) => uU(FU[XU], oU))),
          EU = DU.length > 0 ? DU : AU,
          YU = fc(EU.map(rc));
        return YU >= 0 ? EU[YU] : null
      }
      validateFocus(UU, XU) {
        if (this.pendingFocus) {
          var zU, cU;
          const yU = this.pendingFocus.find();
          if (yU && (0, TU.q)(yU, UU.root)) return this.pendingFocus = null, void this.setFocus(yU, {
            byUser: !0
          });
          XU > this.pendingFocus.untilMs && (null === (zU = (cU = this.pendingFocus).holdWhile) || void 0 === zU || !zU.call(cU)) && (this.pendingFocus = null)
        }
        const yU = this.focused,
          QU = !!yU && (0, TU.q)(yU, UU.root);
        if (!(!QU && yU && yU === this.lastActivated && XU - this.lastActivatedAtMs < 5e3 && UU.root.contains(yU) && (0, TU.m)(yU) && (0, TU.s)(yU))) {
          if (!QU && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = XU, void this.restoreLayerFocus(UU.root, !0);
          if ((!QU || !this.movedInLayer && !this.scrolledInLayer) && !(XU - this.lastRefocusCheckMs < (QU ? 200 : 50)))
            if (this.lastRefocusCheckMs = XU, QU) {
              const zU = XU - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(UU.root) : null,
                cU = null !== zU && void 0 !== zU ? zU : this.restoredFromMemory ? null : this.pickDefault(UU.root);
              cU && cU !== yU && this.setFocus(cU)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const XU = this.pendingFocus;
                return this.focusNearest(UU.root, this.lastFocusedCentre), void(this.pendingFocus = XU)
              }
              this.setFocus(this.pickPreferred(UU.root))
            }
        }
      }
      handleButtons(UU, XU) {
        if (UU.wasPressed((0, EU.h)("menuToggleCursor"))) return Zc(this.getHandoff()), !0;
        if (UU.wasPressed((0, EU.h)("menuBack"))) {
          const UU = (0, mU.h)(XU.root);
          return UU ? this.setFocus(UU, {
            byUser: !0
          }) : nz(this, XU.root) || ((0, mU.c)(XU.root) ? this.returnToOpener(XU.root) : this.backToStrip(XU.root) || Yc()), !0
        }
        const zU = (0, EU.h)("menuConfirm");
        var cU, yU;
        UU.wasPressed(zU) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (cU = null === (yU = this.focused) || void 0 === yU ? void 0 : yU.getAttribute("data-pad-repeat")) && void 0 !== cU ? cU : null, this.confirmRepeated = UU.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (UU.wasReleased(zU)) {
          const UU = this.confirmPressedOn;
          if (this.confirmPressedOn = null, UU && !this.confirmRepeated && UU === this.focused && UU.isConnected && !(0, TU.s)(UU)) {
            const zU = UU.matches("[data-pad-tab]") ? UU.closest(lc) : null;
            zU ? this.enterTab(UU, zU, XU.root, performance.now()) : this.activate(UU)
          }
          return !0
        }
        return this.repeatConfirm(UU, zU), hz(this, UU, XU)
      }
      repeatConfirm(UU, XU) {
        const zU = this.confirmPressedOn;
        zU && null !== this.confirmRepeatKey && UU.isHeld(XU) && (zU === this.focused && zU.isConnected && !(0, TU.s)(zU) && zU.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? zU.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(zU)) : this.confirmRepeatKey = null)
      }
      backToStrip(UU) {
        const XU = this.focused;
        if (!(0, NU.i)().menuBackToCategories) return !1;
        const zU = null !== XU && void 0 !== XU && XU.isConnected ? this.tabStripNav.backToStrip(XU, this.getEnabledCandidates(UU), UU) : null;
        return zU && this.setFocus(zU, {
          byUser: !0
        }), null !== zU
      }
      returnToOpener(UU) {
        const XU = this.lastActivatedKey;
        XU && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var zU;
          return null !== (zU = this.getEnabledCandidates(UU).find((UU => (0, mU.w)(UU) === XU))) && void 0 !== zU ? zU : null
        })))
      }
      activate(UU) {
        var XU;
        if ((0, qc.d)(UU) || (0, mU.A)(UU)) return;
        this.lastActivatedKey = null !== (XU = (0, mU.w)(UU)) && void 0 !== XU ? XU : this.lastActivatedKey, this.lastActivated = UU, this.lastActivatedAtMs = performance.now(), this.rememberFocus(UU);
        const zU = this.layerRoot;
        if (zU) {
          const XU = new Set(zU.querySelectorAll(sc)),
            cU = new Set(zU.querySelectorAll(`[data-pad-initial-area], ${xc}`)),
            yU = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var yU;
            return (0, TU.q)(UU, zU) ? null : null !== (yU = this.pickDefault(zU, {
              exclude: XU
            })) && void 0 !== yU ? yU : this.pickNewAreaStart(zU, cU)
          }), 5e3, (() => UU.isConnected && (0, TU.s)(UU) && performance.now() - yU < 6e4))
        }(0, mU.b)(UU), (0, mU.g)(UU)
      }
      handleDirections(UU, XU, zU, cU) {
        const yU = qz(XU.layer.kind) ? (0, EU.h)("chat") : null;
        for (const FU of pU.A) {
          this.dpadRepeats.get(FU).update(UU.isHeld(FU), zU) && (FU !== yU || UU.wasPressed(FU)) && this.move(XU.root, FU, zU, !0)
        }
        const QU = cU ? (0, pU.j)(UU.leftStick, (0, NU.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          AU = this.stickRepeat.update((0, pU.gb)(QU), zU);
        if (AU && this.move(XU.root, AU, zU, !0), this.retryMove && zU >= this.retryMove.atMs) {
          const {
            direction: UU
          } = this.retryMove;
          this.retryMove = null, this.move(XU.root, UU, zU, !1)
        }
      }
      move(UU, XU, zU, cU) {
        var yU;
        let QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (yU = this.tabOpenWait) || void 0 === yU ? void 0 : yU.wait) && XU === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const AU = this.focused;
        if (!AU || !AU.isConnected) {
          const XU = this.pickInitial(UU);
          return void(XU && this.setFocus(XU, {
            byUser: !0
          }))
        }
        const FU = "Left" === XU || "Right" === XU,
          oU = FU ? (0, qc.d)(AU) : null;
        if (oU) return void oU.adjust("Left" === XU ? -1 : 1);
        const DU = UU => null !== UU.closest("[data-pad-friends-column]"),
          EU = DU(AU),
          YU = Kc(AU),
          NU = FU || AU.closest(lc) ? null : (UU => {
            const XU = new Map;
            return zU => {
              const cU = zU.closest(lc);
              if (!cU) return !1;
              let yU = XU.get(cU);
              if (void 0 === yU) {
                const zU = Kc(cU);
                yU = kz(UU, zU) && (zU.right <= UU.left || zU.left >= UU.right), XU.set(cU, yU)
              }
              return yU
            }
          })(YU),
          IU = null !== AU.closest(mc),
          pU = this.getEnabledCandidates(UU).filter((UU => UU !== AU && (FU || DU(UU) === EU) && !(null !== NU && void 0 !== NU && NU(UU)) && (IU || !UU.closest(mc)))),
          aU = pU.map(Kc),
          tU = eU(AU, "y", UU),
          gU = rU(tU);
        if (!QU && !uU(YU, gU)) {
          const UU = pU.filter(((UU, XU) => uU(aU[XU], gU)));
          if (UU.length > 0) {
            const XU = {
              x: gU.left + gU.width / 2,
              y: gU.top + gU.height / 2
            };
            return void this.setFocus(UU[Wz(XU, UU.map(Kc))], {
              byUser: !0
            })
          }
        }
        const kU = FU ? ((UU, XU, zU) => {
            const cU = Kc(UU),
              yU = UU.closest(lc),
              QU = yU ? Kc(yU) : null;
            return XU.map(((XU, AU) => {
              const FU = zU[AU];
              if (FU.bottom > cU.top && FU.top < cU.bottom) return !0;
              const oU = XU.closest(lc);
              if (yU && QU) return oU !== yU && (null !== oU || FU.bottom <= QU.top || FU.top >= QU.bottom);
              if (oU) return !kz(cU, Kc(oU));
              let DU = UU;
              for (let zU = UU.parentElement; zU && !zU.contains(XU); zU = zU.parentElement) DU = zU;
              const EU = Kc(DU);
              return FU.right > EU.left && FU.left < EU.right
            }))
          })(AU, pU, aU) : void 0,
          GU = FU && !AU.closest(lc) ? (UU => UU.map((UU => !UU.closest(Sc))))(pU) : void 0,
          BU = ((UU, XU) => {
            const zU = [];
            for (let yU = UU; yU; yU = yU.parentElement) zU.push(yU);
            const cU = new Map;
            return zU.forEach(((UU, XU) => {
              cU.set(UU, zU.length - 1 - XU)
            })), XU.map((UU => {
              for (let XU = UU; XU; XU = XU.parentElement) {
                const UU = cU.get(XU);
                if (void 0 !== UU) return UU
              }
              return -1
            }))
          })(AU, pU),
          ZU = FU ? "x" : "y",
          RU = eU(AU, ZU, UU);
        let PU = Gz(YU, aU, XU, BU, kU, GU);
        if (PU >= 0 && RU && !RU.contains(pU[PU])) {
          const UU = pU.flatMap(((UU, XU) => RU.contains(UU) ? [XU] : [])),
            zU = XU => XU && UU.map((UU => XU[UU])),
            cU = Gz(YU, UU.map((UU => aU[UU])), XU, UU.map((UU => BU[UU])), zU(kU), zU(GU));
          PU = cU >= 0 ? UU[cU] : PU
        }
        if (PU >= 0) return void this.moveTo(AU, pU[PU], pU, UU, XU, QU);
        if (!cU) return;
        const WU = "Right" === XU || "Down" === XU ? 1 : -1;
        if (RU && OU(RU, ZU, WU)) {
          const UU = "y" === ZU ? RU.clientHeight : RU.clientWidth;
          SU(RU, ZU, WU * UU * .5), this.retryMove = {
            direction: XU,
            atMs: zU + 80
          }
        }
      }
      moveTo(UU, XU, zU, cU, yU, QU) {
        const AU = this.tabStripNav.findTabContent(UU, XU, zU);
        AU && "true" !== UU.dataset.padSelected ? this.openTab(UU, AU, cU, yU) : QU && !AU || this.setFocus(this.tabStripNav.redirect(UU, XU, zU, cU), {
          byUser: !0
        })
      }
      openTab(UU, XU, zU, cU) {
        const yU = XU.parentElement;
        (0, mU.b)(UU), this.focusWhenFound((() => "true" !== UU.dataset.padSelected ? null : XU.isConnected ? this.tabStripNav.pickContentStart(XU, this.getEnabledCandidates(zU), zU) : yU ? this.tabStripNav.pickReplacedContentStart(UU, yU, this.getEnabledCandidates(zU), zU) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: cU
        }
      }
      enterTab(UU, XU, zU, cU) {
        this.move(zU, (UU => {
          const XU = [...UU.querySelectorAll(Hc)].filter((XU => XU.closest(ic) === UU));
          if (XU.length >= 2) {
            const UU = XU[0].getBoundingClientRect(),
              zU = XU[1].getBoundingClientRect();
            return Math.abs(zU.top - UU.top) > Math.abs(zU.left - UU.left) ? "Right" : "Down"
          }
          const zU = UU.getBoundingClientRect();
          return zU.height > zU.width ? "Right" : "Down"
        })(XU), cU, !1, !0), this.focused !== UU || this.pendingFocus || this.activate(UU)
      }
      handleScroll(UU, XU) {
        const zU = (0, pU.j)(UU.rightStick, .2);
        if (0 === zU.x && 0 === zU.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const cU = UU.dtMs / 1e3;
        for (const QU of ["x", "y"]) {
          var yU;
          const UU = zU[QU];
          if (0 === UU) continue;
          const AU = null !== (yU = eU(this.focused, QU, XU.root)) && void 0 !== yU ? yU : wU(XU.root, QU);
          if (!AU) continue;
          const FU = Math.sign(UU) * UU * UU * 1500 * cU + this.scrollRemainder[QU],
            oU = Math.trunc(FU);
          this.scrollRemainder[QU] = FU - oU, 0 !== oU && (SU(AU, QU, oU), this.scrolledInLayer = !0)
        }
      }
    };
    var Uy = zU(8785);
    var Xy = zU(9291);
    const zy = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      cy = {
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
          ...zy,
          minIntervalMs: 1e3
        },
        preview: {
          ...zy,
          minIntervalMs: 0
        }
      };
    const yy = new class {
        constructor(UU) {
          this.deps = UU, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = UU => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", UU))
          }
        }
        play(UU, XU) {
          const zU = cy[UU];
          if (!this.deps.isVibrationOn() || zU.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const cU = this.lastPlayedMs[UU];
          if (void 0 !== cU && XU - cU < zU.minIntervalMs) return !1;
          const yU = this.deps.getActuator();
          if (!yU) return !1;
          this.lastPlayedMs[UU] = XU;
          const {
            duration: QU,
            strongMagnitude: AU,
            weakMagnitude: FU
          } = zU;
          try {
            yU.playEffect("dual-rumble", {
              duration: QU,
              strongMagnitude: AU,
              weakMagnitude: FU
            }).catch(this.logFailure)
          } catch (oU) {
            this.logFailure(oU)
          }
          return !0
        }
      }({
        getActuator: () => (UU => {
          const XU = null === UU || void 0 === UU ? void 0 : UU.vibrationActuator;
          return "function" === typeof(null === XU || void 0 === XU ? void 0 : XU.playEffect) ? XU : null
        })(AU.f.getActiveGamepad()),
        isVibrationOn: () => (0, NU.i)().vibration,
        isPadInUse: IU.k
      }),
      Qy = UU => {
        yy.play(UU, performance.now())
      };
    var Ay = zU(8791),
      Fy = zU(3221),
      oy = zU(114),
      Dy = zU(42),
      Ey = zU(702);
    class Yy {
      constructor(UU) {
        this.deps = UU
      }
      check() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const XU = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!XU) return "skipped";
        const zU = UU ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === zU || this.deps.readReportedVisitId() === zU ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(zU), this.deps.oY(XU, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Ny = "controllerUsageReportedVisit";
    var Iy = zU(1410),
      py = zU(1800),
      ay = zU(687),
      ty = zU(1492),
      gy = zU(1266);
    const ky = UU => ({
        translationKey: `controller:${UU}`
      }),
      Gy = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: ky("padButtonView"),
        Menu: ky("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: ky("padButtonDpadUp"),
        Down: ky("padButtonDpadDown"),
        Left: ky("padButtonDpadLeft"),
        Right: ky("padButtonDpadRight"),
        Home: ky("padButtonHome"),
        LeftStick: ky("padButtonLeftStick"),
        RightStick: ky("padButtonRightStick")
      },
      By = {
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
          View: ky("padButtonCreate"),
          Menu: ky("padButtonOptions")
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
      Zy = (UU, XU) => {
        var zU;
        const cU = null !== (zU = By[UU][XU]) && void 0 !== zU ? zU : Gy[XU];
        return "string" === typeof cU ? cU : (0, yU.A)(gy.h.get().getCurrentLanguageCode(), cU.translationKey)
      },
      Ry = UU => {
        let {
          glyph: XU,
          family: zU,
          className: cU
        } = UU;
        const yU = (0, IU.C)(),
          QU = null !== zU && void 0 !== zU ? zU : yU,
          AU = (0, Ay.d)(QU, XU);
        return (0, MU.jsx)("span", {
          className: HU()("ControllerGlyph", cU),
          role: "img",
          "aria-label": Zy(QU, XU),
          style: {
            "--pad-glyph-mask": `url(${AU})`,
            "--pad-glyph-aspect": (0, Ay.b)(QU, XU)
          }
        })
      };
    var Py = zU(1978);
    const Wy = UU => {
      let {
        action: XU
      } = UU;
      const {
        t: zU
      } = (0, yU.I)();
      switch (XU.kind) {
        case "reload":
          return (0, MU.jsx)("span", {
            children: zU("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, MU.jsx)(Py.d, {
            text: XU.description ? [{
              icon: XU.icon
            }, ` ${XU.description}`] : [{
              icon: XU.icon
            }]
          });
        case "touchButton":
          return (0, MU.jsx)(Py.d, {
            text: XU.label
          })
      }
    };
    var dy = zU(9294);
    const Ly = UU => {
      let {
        hold: XU
      } = UU;
      return (0, MU.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${XU.holdMs}ms`
        },
        children: (0, MU.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, XU.id)
    };
    var ey = zU(9320),
      Cy = zU(9329),
      wy = zU(9336),
      qy = zU(9314);
    const Oy = () => {
        const {
          gameState: UU
        } = (0, oU.q)(["gameState"]), XU = (0, IU.y)(), [cU, yU] = (0, fU.useState)(!1), [QU, AU] = (0, fU.useState)(!1);
        return (0, fU.useEffect)((() => {
          "inGame" === UU && yU(!0)
        }), [UU]), (0, fU.useEffect)((() => {
          if (!cU) return;
          let UU = null,
            XU = !1;
          return (ay.H ? Promise.all([zU.e(84), zU.e(103), zU.e(294), zU.e(203), zU.e(243), zU.e(242), zU.e(102)]).then((() => zU(41618))).then((UU => UU.startWasmPadGameplay)) : Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(111), zU.e(87), zU.e(85), zU.e(86), zU.e(199), zU.e(247), zU.e(89), zU.e(103), zU.e(241), zU.e(200), zU.e(109), zU.e(253), zU.e(244), zU.e(260), zU.e(228), zU.e(214), zU.e(100), zU.e(261), zU.e(88), zU.e(234), zU.e(262), zU.e(243), zU.e(172)]).then((() => zU(41730))).then((UU => UU.startPadGameplay))).then((zU => {
            XU || (UU = zU())
          })).catch((UU => {
            console.error("Pad gameplay failed to load", UU), XU || AU(!0)
          })), () => {
            var zU;
            XU = !0, null === (zU = UU) || void 0 === zU || zU()
          }
        }), [cU]), (0, fU.useEffect)((() => {
          QU && XU && (AU(!1), Iy.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((UU => {
            !0 === UU && (0, py.reloadBloxd)()
          })))
        }), [QU, XU]), (0, MU.jsxs)(MU.Fragment, {
          children: [(0, MU.jsx)(Sy, {}), (0, MU.jsx)(ry, {}), (0, MU.jsx)(uy, {})]
        })
      },
      Sy = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, IU.y)(), {
          gameState: zU,
          isUiHidden: cU
        } = (0, oU.q)(["gameState", "isUiHidden"]), {
          hideButtonHints: QU
        } = (0, NU.p)(), AU = (0, dy.g)(), FU = (0, dy.k)(), [DU, YU] = (0, fU.useState)(wy.e);
        return (0, ty.f)(qy.o, YU), !XU || QU || cU || "inGame" !== zU || !AU && !DU ? null : (0, MU.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [AU && (0, MU.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, MU.jsx)(Ry, {
              glyph: (0, EU.h)("actionButton")
            }), (0, MU.jsx)(Wy, {
              action: AU
            }), FU && (0, MU.jsx)("span", {
              className: "PadActionHintMore",
              children: UU("controller:gameplayActionWheelHint")
            })]
          }), DU && (0, MU.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, MU.jsx)(Ry, {
              glyph: (0, EU.h)("pickBlock")
            }), (0, MU.jsx)("span", {
              children: UU("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      ry = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, IU.y)(), {
          gameState: zU,
          isUiHidden: cU
        } = (0, oU.q)(["gameState", "isUiHidden"]), [QU, AU] = (0, fU.useState)(ey.e);
        return (0, ty.f)(qy.l, AU), XU && !cU && "inGame" === zU && QU ? (0, MU.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, MU.jsx)("span", {
            children: UU("controller:gameplayDropStack")
          }), (0, MU.jsx)(Ly, {
            hold: QU
          })]
        }) : null
      },
      uy = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, IU.y)(), {
          gameState: zU,
          isUiHidden: cU
        } = (0, oU.q)(["gameState", "isUiHidden"]), {
          hideButtonHints: QU
        } = (0, NU.p)(), [AU, FU] = (0, fU.useState)(Cy.b);
        return (0, ty.f)(qy.k, FU), XU && !cU && "inGame" === zU && AU ? (0, MU.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!QU && (0, MU.jsx)(Ry, {
            glyph: (0, EU.h)("attack")
          }), (0, MU.jsx)("span", {
            children: UU("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var fy = zU(9339),
      iy = zU(2032),
      Hy = zU(2616),
      My = zU(8774);
    const vy = UU => UU && !(0, fy.c)(iy.d.get("shopInfo")),
      Vy = () => {
        const UU = "inGame" === (0, oU.q)(["gameState"]).gameState;
        return (0, Hy.e)("shopInfo", (() => {
          (0, My.h)(vy(UU))
        })), (0, fU.useEffect)((() => {
          (0, My.h)(vy(UU))
        }), [UU]), null
      },
      sy = () => {
        const {
          t: UU
        } = (0, yU.I)(), {
          hideButtonHints: XU
        } = (0, NU.p)();
        (0, IU.C)();
        const zU = (0, HX.k)();
        return (0, fU.useEffect)((() => (() => {
          const UU = YU.d.register({
              name: "inventory",
              isActive: yz.isActive,
              onFrame: yz.onFrame,
              onDeactivate: yz.onDeactivate,
              wakePressActs: yz.wakePressActs
            }),
            XU = UU => {
              yz.noteRealPointer(UU), yz.shouldBlockRealPointer(UU) && UU.stopPropagation()
            };
          for (const AU of Qz) window.addEventListener(AU, XU, !0);
          const zU = (0, bU.k)((() => {
              "inventory" !== YU.d.getActiveConsumerName() && yz.forgetSurface()
            })),
            cU = UU => {
              const XU = UU.target;
              (0, IU.k)() && (0, JU.h)(XU) && XU.closest(ZX) && (0, bU.i)() && (0, bU.p)(XU)
            };
          document.addEventListener("focusout", cU, !0);
          const {
            invalidate: yU,
            onScroll: QU
          } = yz.targets;
          return document.addEventListener("scroll", QU, !0), window.addEventListener("resize", yU), () => {
            UU(), zU();
            for (const UU of Qz) window.removeEventListener(UU, XU, !0);
            document.removeEventListener("scroll", QU, !0), document.removeEventListener("focusout", cU, !0), window.removeEventListener("resize", yU), yz.targets.disconnect()
          }
        })()), []), (0, MU.jsxs)(MU.Fragment, {
          children: [(0, MU.jsx)(nU, {
            placer: yz.ring,
            className: "InventorySlotCursorRing"
          }), zU.showing && !XU && (0, MU.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: KU(zU).map((XU => {
              let {
                actions: cU,
                labelKey: yU
              } = XU;
              return (0, MU.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [cU.map((UU => (0, MU.jsx)(Ry, {
                  glyph: (0, EU.h)(UU)
                }, UU))), (0, MU.jsx)("span", {
                  children: UU(`controller:${yU}`)
                }), "inventoryDrop" === yU && zU.dropStackHold && (0, MU.jsx)(Ly, {
                  hold: zU.dropStackHold
                })]
              }, yU)
            }))
          })]
        })
      },
      ny = [{
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
      my = UU => Array.from(UU).map((UU => ({
        type: "char",
        char: UU,
        width: 1
      }))),
      ly = function(UU) {
        return {
          type: "command",
          command: UU,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      xy = [ly("page", 2), ly("otherPage"), ly("caretLeft"), ly("space", 3), ly("caretRight"), ly("close", 1.5), ly("submit", 1.5)],
      Jy = [ly("page", 2), ly("otherPage"), ly("caretLeft"), ly("space", 2), ly("caretRight"), ly("newline"), ly("close", 1.5), ly("submit", 1.5)],
      jy = [
        [...my("1234567890"), ly("backspace")], my("qwertyuiop/"), my("asdfghjkl'?"), [ly("shift", 2), ...my("zxcvbnm,.")]
      ],
      Ky = [
        [...my("1234567890"), ly("backspace")], my("!@#$%^&*()/"), my('-_=+[]{};:"'), my("~`|\\<>'\u20ac\xa3,.")
      ],
      by = {
        letters: jy,
        accents: [
          [...my("1234567890"), ly("backspace")], my("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), my("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [ly("shift", 2), ...my("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Ky
      },
      Ty = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      hy = (UU, XU) => "letters" === UU ? XU ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === UU ? "symbols" : "accents"
      },
      UQ = function(UU, XU) {
        const zU = ((UU, XU) => [...by[UU], XU ? Jy : xy])(UU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === XU) return zU;
        const cU = Math.min(2, XQ(zU[0]) / XU);
        return [Array.from({
          length: XU
        }, ((UU, XU) => ({
          type: "phrase",
          phraseIndex: XU,
          width: cU
        }))), ...zU]
      },
      XQ = UU => UU.reduce(((UU, XU) => UU + XU.width), 0),
      zQ = UU => Math.max(...UU.map(XQ)),
      cQ = (UU, XU) => {
        const zU = UU[XU.row];
        let cU = (zQ(UU) - XQ(zU)) / 2;
        for (let yU = 0; yU < XU.col; yU++) cU += zU[yU].width;
        return cU + zU[XU.col].width / 2
      },
      yQ = (UU, XU, zU) => {
        let cU = 0,
          yU = 1 / 0;
        for (let QU = 0; QU < UU[XU].length; QU++) {
          const AU = Math.abs(cQ(UU, {
            row: XU,
            col: QU
          }) - zU);
          AU < yU - 1e-9 && (cU = QU, yU = AU)
        }
        return cU
      },
      QQ = (UU, XU) => {
        const zU = Math.max(0, Math.min(UU.length - 1, XU.row));
        return {
          row: zU,
          col: Math.max(0, Math.min(UU[zU].length - 1, XU.col))
        }
      },
      AQ = (UU, XU, zU) => "once" === UU && XU - zU <= 400 ? "caps" : "off" === UU ? "once" : "off",
      FQ = (UU, XU) => "once" === UU && (UU => UU.toLowerCase() !== UU.toUpperCase())(XU) ? "off" : UU,
      oQ = (UU, XU, zU) => {
        if ("symbols" === XU || "off" === zU) return UU;
        const cU = UU.toUpperCase();
        return 1 === cU.length ? cU : UU
      };
    var DQ = zU(9226);
    const EQ = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const YQ = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(UU) {
          return !(UU - this.lastSendMs < 2e3) && (this.lastSendMs = UU, !0)
        }
      },
      NQ = {
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
      IQ = ["YD", "nameTag"],
      pQ = UU => {
        const XU = UU.target instanceof HTMLTextAreaElement && !IQ.includes(UU.kind);
        return UQ(UU.page, "chat" === UU.kind ? EQ.length : 0, XU)
      },
      aQ = UU => {
        const XU = UU.getBoundingClientRect(),
          zU = window.innerHeight,
          cU = XU.top + XU.height / 2 < zU / 2 ? "bottom" : "top",
          yU = "bottom" === cU ? zU - XU.bottom - 6 : XU.top - 6;
        return {
          placement: cU,
          maxHeightPx: Math.min(.46 * zU, Math.max(.3 * zU, yU))
        }
      },
      tQ = UU => {
        (0, ez.g)(UU) ? (0, ez.b)().close(): (hc.noteChosenStop(UU), UU.blur())
      };
    class gQ {
      constructor(UU) {
        this.host = UU, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(UU, XU) {
        this.phraseTexts = UU, this.phrasesFill = XU
      }
      pressKey(UU) {
        const XU = this.host.getState(),
          zU = pQ(XU),
          cU = zU[UU.row][UU.col];
        this.host.setState({
          ...XU,
          focus: UU,
          preferredX: cQ(zU, UU)
        }), "char" === cU.type ? this.typeChar(cU.char) : "command" === cU.type ? this.runCommand(cU.command) : this.sendPhrase(cU.phraseIndex)
      }
      runCommand(UU) {
        const XU = this.host.getState();
        switch (UU) {
          case "backspace":
            (0, JU.c)(XU.target);
            break;
          case "space":
            (0, JU.g)(XU.target, " ");
            break;
          case "newline":
            (0, JU.g)(XU.target, "\n");
            break;
          case "caretLeft":
            (0, JU.i)(XU.target, -1);
            break;
          case "caretRight":
            (0, JU.i)(XU.target, 1);
            break;
          case "shift": {
            const UU = performance.now();
            this.host.setState({
              ...XU,
              shift: AQ(XU.shift, UU, this.lastShiftPressMs)
            }), this.lastShiftPressMs = UU;
            break
          }
          case "page":
          case "otherPage": {
            const zU = hy(XU.page, XU.accentsFirst)[UU];
            this.host.setState({
              ...XU,
              page: zU,
              focus: QQ(pQ({
                ...XU,
                page: zU
              }), XU.focus)
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
            (0, ez.g)(XU.target) && (0, ez.b)().selectNextChannel()
        }
      }
      submit() {
        var UU, XU;
        const {
          target: zU
        } = this.host.getState();
        this.host.hide(), (0, ez.g)(zU) ? (0, ez.b)().submit() : (hc.noteChosenStop(zU), null === (UU = (XU = (0, ez.d)(zU)).submit) || void 0 === UU || UU.call(XU), document.activeElement === zU && zU.blur())
      }
      close() {
        const {
          target: UU
        } = this.host.getState();
        this.host.hide(), tQ(UU)
      }
      typeChar(UU) {
        const {
          target: XU,
          page: zU,
          shift: cU
        } = this.host.getState();
        (0, JU.g)(XU, oQ(UU, zU, cU)), this.host.setState({
          ...this.host.getState(),
          shift: FQ(cU, UU)
        })
      }
      sendPhrase(UU) {
        if (this.phrasesFill) {
          const {
            target: XU
          } = this.host.getState(), zU = this.phraseTexts[UU];
          zU && (XU.setSelectionRange(0, XU.value.length), (0, JU.g)(XU, zU))
        } else YQ.claim(performance.now()) && (this.host.hide(), (0, ez.b)().sendLine(this.phraseTexts[UU]))
      }
    }
    var kQ = zU(9245);
    const GQ = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      BQ = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class ZQ {
      constructor(UU, XU) {
        this.host = UU, this.editor = XU, this.lastDirection = null, this.navRepeat = new pU.b((0, aU.d)(GQ)), this.commandRepeats = new Map(ny.filter((UU => {
          let {
            repeats: XU
          } = UU;
          return XU
        })).map((UU => {
          let {
            command: XU
          } = UU;
          return [XU, (0, aU.d)(BQ)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const UU of this.commandRepeats.values()) UU.reset()
      }
      onVisibleFrame(UU) {
        const XU = performance.now();
        for (const {
            command: yU,
            action: QU
          }
          of ny) {
          const zU = (0, EU.h)(QU),
            cU = this.commandRepeats.get(yU);
          if ((cU ? cU.update(UU.isHeld(zU), XU) : UU.wasPressed(zU)) && (this.editor.runCommand(yU), !this.host.getState().visible)) return
        }
        if (UU.wasPressed((0, EU.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const zU = this.readNavDirection(UU);
        this.lastDirection = zU;
        const cU = this.navRepeat.update(zU, XU);
        cU && this.navigate(cU)
      }
      onHiddenFrame(UU, XU) {
        var zU;
        if (UU.wasPressed((0, EU.h)("keyboardClose"))) return void tQ(XU);
        const cU = (0, EU.h)("keyboardType");
        if (UU.wasPressed(cU)) return YU.d.consumeButton(cU), void this.host.open(XU);
        const yU = this.readNavDirection(UU),
          QU = null !== yU && yU !== this.lastDirection;
        if (this.lastDirection = yU, !QU || (0, ez.g)(XU)) return;
        const AU = (null === (zU = Ec()) || void 0 === zU ? void 0 : zU.root.contains(XU)) || null !== XU.closest(".EntireInventoryWrapper");
        tQ(XU), AU && YU.d.handOffHeldInput()
      }
      navigate(UU) {
        const XU = this.host.getState();
        if ("Up" === UU && 0 === XU.focus.row && "chat" === XU.kind) return (0, ez.b)().stepHistory(), void this.host.setState({
          ...XU
        });
        const zU = ((UU, XU, zU, cU) => {
          if ("Left" === zU || "Right" === zU) {
            const cU = UU[XU.row].length,
              yU = (XU.col + ("Right" === zU ? 1 : -1) + cU) % cU,
              QU = {
                row: XU.row,
                col: yU
              };
            return {
              pos: QU,
              preferredX: cQ(UU, QU)
            }
          }
          const yU = (XU.row + ("Down" === zU ? 1 : -1) + UU.length) % UU.length;
          return {
            pos: {
              row: yU,
              col: yQ(UU, yU, cU)
            },
            preferredX: cU
          }
        })(pQ(XU), XU.focus, UU, XU.preferredX);
        this.host.setState({
          ...XU,
          focus: zU.pos,
          preferredX: zU.preferredX
        })
      }
      readNavDirection(UU) {
        for (const XU of pU.A)
          if (UU.isHeld(XU)) return XU;
        return (0, pU.gb)((0, pU.j)(UU.leftStick, (0, NU.i)().moveDeadzone))
      }
    }
    const RQ = ["Up", "Down", "Left", "Right"],
      PQ = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const WQ = new class {
      constructor() {
        this.state = NQ, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new gQ(this), this.padInput = new ZQ(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(UU) {
        const XU = UU.visible !== this.state.visible;
        this.state = UU;
        for (const zU of this.listeners) zU();
        XU && DU.k.UY(kQ.c, UU.visible)
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      install() {
        const UU = YU.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, JU.h)(document.activeElement),
            onFrame: UU => {
              this.onFrame(UU)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: UU => RQ.includes(UU) || !this.state.visible && UU === (0, EU.h)("keyboardType")
          }),
          XU = UU => {
            const XU = UU.target;
            (0, JU.h)(XU) && (XU === this.pendingChatInput || (0, IU.k)() ? this.open(XU) : this.state.visible && XU !== this.state.target && (this.ownedField = null, this.hide()))
          },
          zU = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          cU = UU => {
            UU.isTrusted && this.state.visible && (UU => !UU.repeat && !PQ.has(UU.key) && !(0, DQ.c)(UU.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(UU.key))(UU) && this.hide()
          },
          yU = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...aQ(this.state.target)
            })
          };
        document.addEventListener("focusin", XU, !0), document.addEventListener("focusout", zU, !0), window.addEventListener("keydown", cU, !0), window.addEventListener("resize", yU);
        const QU = DU.k.subscribe(qy.e, (() => {
            this.openChat()
          })),
          AU = DU.k.subscribe(kQ.d, (UU => {
            this.openForField(UU)
          }));
        return () => {
          UU(), document.removeEventListener("focusin", XU, !0), document.removeEventListener("focusout", zU, !0), window.removeEventListener("keydown", cU, !0), window.removeEventListener("resize", yU), DU.k.unsubscribe(QU), DU.k.unsubscribe(AU), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const UU = (0, ez.b)();
        UU ? document.activeElement !== UU.input ? (this.clearPendingChat(), this.pendingChatInput = UU.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), UU.open()) : this.open(UU.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(UU) {
        (0, JU.h)(UU) ? (document.activeElement !== UU && UU.focus(), document.activeElement === UU && this.open(UU)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", UU)
      }
      open(UU) {
        var XU;
        if (this.clearPendingChat(), this.ownedField = UU, this.state.visible && this.state.target === UU) return;
        this.restoreInputMode(), (0, JU.j)(UU), this.savedInputMode = UU.getAttribute("inputmode"), UU.setAttribute("inputmode", "none");
        const zU = {
          ...NQ,
          visible: !0,
          target: UU,
          kind: (0, ez.g)(UU) ? "chat" : null !== (XU = (0, ez.d)(UU).kind) && void 0 !== XU ? XU : null,
          accentsFirst: (cU = gy.h.get().getCurrentLanguageCode(), Ty.has(cU)),
          ...aQ(UU)
        };
        var cU;
        const yU = pQ(zU),
          QU = ((UU, XU) => {
            for (let zU = 0; zU < UU.length; zU++) {
              const cU = UU[zU].findIndex((UU => "char" === UU.type && UU.char === XU));
              if (-1 !== cU) return {
                row: zU,
                col: cU
              }
            }
            return null
          })(yU, "q");
        this.padInput.reset(), this.setState({
          ...zU,
          focus: QU,
          preferredX: cQ(yU, QU)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(NQ))
      }
      onFrame(UU) {
        if (this.releaseLostField()) return;
        const XU = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(UU) : (0, JU.h)(XU) && this.padInput.onHiddenFrame(UU, XU)
      }
      releaseLostField() {
        const UU = this.ownedField;
        return !(null === UU || UU.isConnected && document.activeElement === UU) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: UU
        } = this.state;
        UU && (null === this.savedInputMode ? UU.removeAttribute("inputmode") : UU.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var dQ = zU(2988);
    const LQ = new Map(ny.map((UU => {
        let {
          command: XU,
          action: zU
        } = UU;
        return [XU, zU]
      }))),
      eQ = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      CQ = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        YD: "controller:keyboardTargetBookTitle"
      },
      wQ = UU => {
        const XU = (() => {
          const [, UU] = (0, fU.useReducer)((UU => UU + 1), 0);
          return UU
        })();
        (0, fU.useEffect)((() => {
          if (!UU) return;
          const zU = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const yU of zU) UU.addEventListener(yU, XU);
          document.addEventListener("selectionchange", XU);
          const cU = new MutationObserver(XU);
          return cU.observe(UU, {
            attributeFilter: ["placeholder"]
          }), () => {
            cU.disconnect();
            for (const cU of zU) UU.removeEventListener(cU, XU);
            document.removeEventListener("selectionchange", XU)
          }
        }), [UU, XU])
      },
      qQ = UU => {
        UU.preventDefault()
      },
      OQ = UU => {
        "mouse" !== UU.pointerType && UU.preventDefault()
      },
      SQ = () => {
        var UU;
        const {
          t: XU
        } = (0, yU.I)(), zU = (() => {
          const [UU, XU] = (0, fU.useState)(WQ.getState());
          return (0, fU.useEffect)((() => WQ.subscribe((() => {
            XU(WQ.getState())
          }))), []), UU
        })(), cU = (0, IU.y)(), QU = (0, fU.useRef)(null);
        (0, NU.p)(), (0, IU.C)(), (0, fU.useEffect)((() => {
          const UU = WQ.install(),
            XU = null;
          return () => {
            UU(), null === XU || void 0 === XU || XU()
          }
        }), []);
        const AU = (0, fU.useMemo)((() => EQ.map((UU => XU(UU)))), [XU]),
          FU = zU.visible && "chat" === zU.kind ? zU.target : null;
        wQ(FU);
        const oU = null !== (UU = null === FU || void 0 === FU ? void 0 : FU.value) && void 0 !== UU ? UU : "",
          DU = ((UU, XU, zU) => {
            if (!UU.startsWith("/")) return [];
            const cU = [];
            for (let yU = XU.length - 1; yU >= 0 && cU.length < zU; yU--) {
              const zU = XU[yU].trim();
              zU.startsWith(UU) && zU !== UU && !cU.includes(zU) && cU.push(zU)
            }
            return cU
          })(oU, oU.startsWith("/") ? (0, dQ.e)() : [], EQ.length),
          YU = oU.startsWith("/"),
          pU = YU ? EQ.map(((UU, XU) => {
            var zU;
            return null !== (zU = DU[XU]) && void 0 !== zU ? zU : ""
          })) : AU;
        if ((0, fU.useEffect)((() => {
            WQ.editor.setPhraseRow(pU, YU)
          })), (0, fU.useEffect)((() => {
            const UU = QU.current;
            if (UU) return UU.addEventListener("touchstart", qQ, {
              passive: !1
            }), () => {
              UU.removeEventListener("touchstart", qQ)
            }
          }), [zU.visible]), !zU.visible) return null;
        const aU = pQ(zU),
          tU = zQ(aU),
          gU = UU => "char" === UU.type ? oQ(UU.char, zU.page, zU.shift) : "phrase" === UU.type ? pU[UU.phraseIndex] : (UU => {
            switch (UU) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === zU.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return eQ[hy(zU.page, zU.accentsFirst)[UU]];
              case "space":
                return XU("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return XU("chat" === zU.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(UU.command),
          kU = UU => {
            WQ.editor.pressKey(UU)
          };
        return (0, MU.jsxs)("div", {
          ref: QU,
          className: HU()(ez.l, "top" === zU.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: zU.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": aU.length,
            "--pad-keyboard-height": `${zU.maxHeightPx}px`
          },
          onPointerDown: OQ,
          onMouseDown: qQ,
          children: [(0, MU.jsx)(rQ, {
            target: zU.target,
            label: zU.kind ? XU(CQ[zU.kind]) : zU.target.placeholder || XU("controller:keyboardTargetText")
          }), (0, MU.jsx)("div", {
            className: "PadKeyboardRows",
            children: aU.map(((UU, XU) => (0, MU.jsx)("div", {
              className: HU()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === UU[0].type
              }),
              children: UU.map(((UU, yU) => {
                const QU = cU && zU.focus.row === XU && zU.focus.col === yU,
                  AU = "command" === UU.type ? LQ.get(UU.command) : void 0;
                return (0, MU.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: UU.width / tU * 100 + "%"
                  },
                  children: (0, MU.jsxs)("div", {
                    className: HU()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: QU,
                      PadKeyboardKeyCommand: "command" === UU.type,
                      PadKeyboardKeyPhrase: "phrase" === UU.type,
                      PadKeyboardKeyActive: "command" === UU.type && "shift" === UU.command && "off" !== zU.shift,
                      PadKeyboardKeySubmit: "command" === UU.type && "submit" === UU.command
                    }),
                    role: "button",
                    onClick: () => {
                      kU({
                        row: XU,
                        col: yU
                      })
                    },
                    onTouchEnd: UU => {
                      var zU, cU;
                      UU.preventDefault(), zU = UU.changedTouches[0], cU = UU.currentTarget.getBoundingClientRect(), zU && zU.clientX >= cU.left && zU.clientX <= cU.right && zU.clientY >= cU.top && zU.clientY <= cU.bottom && kU({
                        row: XU,
                        col: yU
                      })
                    },
                    children: [(0, MU.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: gU(UU)
                    }), cU && AU && (0, MU.jsx)(Ry, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, EU.h)(AU)
                    })]
                  })
                }, yU)
              }))
            }, XU)))
          })]
        })
      },
      rQ = UU => {
        let {
          target: XU,
          label: zU
        } = UU;
        wQ(XU);
        const cU = (0, fU.useRef)(null),
          yU = (0, fU.useRef)(null),
          QU = XU instanceof HTMLTextAreaElement;
        (0, fU.useLayoutEffect)((() => {
          const UU = cU.current,
            XU = yU.current;
          QU ? UU.scrollTop = XU.offsetTop - UU.clientHeight / 2 : UU.scrollLeft = XU.offsetLeft - UU.clientWidth / 2
        }));
        const {
          value: AU,
          start: FU,
          end: oU
        } = (0, JU.n)(XU), DU = "password" === XU.type ? "\u2022".repeat(AU.length) : AU;
        return (0, MU.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, MU.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: zU
          }), (0, MU.jsxs)("div", {
            ref: cU,
            className: HU()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: QU
            }),
            children: [(0, MU.jsx)("span", {
              children: DU.slice(0, FU)
            }), (0, MU.jsx)("span", {
              ref: yU,
              className: "PadKeyboardCaret"
            }), FU !== oU && (0, MU.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: DU.slice(FU, oU)
            }), (0, MU.jsx)("span", {
              children: DU.slice(oU)
            }), 0 === DU.length && XU.placeholder && XU.placeholder !== zU && (0, MU.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: XU.placeholder
            })]
          })]
        })
      };
    var uQ = zU(1444),
      fQ = zU(3820);
    const iQ = function() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return XU.map(EU.h)
      },
      HQ = (UU, XU) => {
        const zU = mz(UU);
        return zU ? [{
          glyphs: [zU],
          labelKey: XU
        }] : []
      },
      MQ = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      vQ = "--pad-hint-bar-clearance",
      VQ = "[data-pad-hint-bar-avoid]",
      sQ = UU => {
        const XU = [];
        for (const zU of UU)(0, TU.m)(zU) && XU.push(zU.getBoundingClientRect());
        return XU
      },
      nQ = UU => {
        if (!UU) return null;
        const XU = Ec(),
          zU = XU ? sQ(((UU, XU) => {
            const zU = UU.closest(VQ);
            return zU ? [zU] : ("popup" === XU ? document : UU).querySelectorAll(VQ)
          })(XU.root, XU.layer.kind)) : [],
          cU = !XU || XU.root.hasAttribute("data-pad-shows-hud");
        if (((0, fQ.h)(null === XU || void 0 === XU ? void 0 : XU.layer.kind, (0, fQ.j)()) || cU) && zU.push(...sQ(document.querySelectorAll(MQ.join(",")))), 0 === zU.length) return null;
        const {
          width: yU,
          height: QU
        } = UU.getBoundingClientRect(), AU = window.innerHeight - 8, FU = (0, fQ.q)(AU, {
          width: yU,
          height: QU
        }, window.innerWidth / 2, zU, 8);
        return FU === AU ? null : Math.round(window.innerHeight - FU)
      },
      mQ = UU => {
        const XU = document.documentElement.style,
          zU = UU ? `${Math.round(window.innerHeight-UU.getBoundingClientRect().top)}px` : "";
        XU.getPropertyValue(vQ) !== zU && (zU ? XU.setProperty(vQ, zU) : XU.removeProperty(vQ))
      },
      lQ = () => {
        const {
          t: UU
        } = (0, yU.I)(), {
          hideButtonHints: XU
        } = (0, NU.p)(), zU = (0, IU.y)(), [cU, QU] = (0, fU.useState)(!1), [AU, DU] = (0, fU.useState)([]), [aU, tU] = (0, fU.useState)(null), gU = (0, fU.useRef)(null), kU = (0, fU.useRef)(null);
        (0, ty.f)(kQ.c, (UU => {
          QU(UU)
        })), (0, ty.f)(fQ.n, (() => {
          var UU;
          null === (UU = kU.current) || void 0 === UU || UU.call(kU)
        }));
        const GU = zU && !XU && !cU;
        return (0, fU.useEffect)((() => {
          if (!GU) return;
          let UU = null;
          const XU = () => {
            const XU = (() => {
                var UU;
                const XU = YU.d.getActiveConsumerName(),
                  zU = (0, fQ.e)();
                if (zU) {
                  const UU = (0, EU.h)(zU),
                    XU = "emoteWheel" === zU && "wheel" === (0, NU.i)().emoteButton || !(0, pU.I)(YU.d.getLastFrame().values, UU) ? {
                      glyphs: iQ("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [UU],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, EU.r)(UU)],
                    labelKey: "controller:wheelChoose"
                  }, XU, {
                    glyphs: iQ("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const cU = Ec();
                if (!cU || "focus" !== XU && "cursor" !== XU) return (0, fQ.d)(EU.h);
                const yU = [],
                  QU = {
                    glyphs: iQ("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  AU = (0, mU.t)(cU.root),
                  FU = AU ? !(0, TU.s)(AU) : Boolean(cU.layer.close),
                  DU = !AU && cU.layer.closeLabelKey ? cU.layer.closeLabelKey : QU.labelKey,
                  IU = FU ? [{
                    ...QU,
                    labelKey: DU
                  }] : [],
                  aU = qz(cU.layer.kind) ? [{
                    glyphs: iQ("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === XU) return yU.push({
                  glyphs: iQ("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), yU.push({
                  glyphs: iQ("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), yU.push(...IU), yU.push(...aU), yU.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), dc() && yU.push({
                  glyphs: iQ("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), yU;
                const tU = hc.getFocused();
                tU && (0, qc.d)(tU) ? yU.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : tU && (0, mU.A)(tU) ? yU.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : yU.push({
                  glyphs: iQ("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const gU = tU ? null === (UU = Nz(tU)) || void 0 === UU ? void 0 : UU.dataset.padSecondary : void 0;
                gU && yU.push({
                  glyphs: iQ("menuSecondary"),
                  labelKey: gU
                }), yU.push(...null !== tU && void 0 !== tU && tU.closest("[data-pad-friends-column]") ? [QU] : IU), yU.push(...aU);
                const kU = "home" === cU.layer.kind;
                Jz(cU.root) || !fz(cU.root) && !jz(cU) ? kU && yU.push({
                  glyphs: iQ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : yU.push({
                  glyphs: iQ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), kU && (yU.push(...HQ("inventory", "controller:menusFriends")), gU || yU.push({
                  glyphs: iQ("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), yU.push(...HQ("pause", "controller:menusSettings")), yU.push(...HQ("leaderboard", "controller:menusNotifications")));
                const GU = oU.e.get("openEverythingMenuName");
                return "inGame" === oU.e.get("gameState") && "popup" !== cU.layer.kind && null !== GU && ((0, oz.i)(GU) ? yU.push(...HQ("leaderboard", "controller:menusClose")) : GU !== Fz.s.LOBBY_LEADERBOARD && yU.push(...HQ("leaderboard", "controller:menusLobby"))), yU.push({
                  glyphs: iQ("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), yU
              })(),
              zU = nQ(gU.current),
              cU = ((UU, XU) => `${UU.map((UU=>`${UU.glyphs.join("+")}:${UU.labelKey}`)).join("|")}@${XU}`)(XU, zU);
            cU !== UU && (UU = cU, (0, FU.unstable_batchedUpdates)((() => {
              DU(XU), tU(zU)
            }))), mQ(gU.current)
          };
          XU(), kU.current = XU;
          const zU = requestAnimationFrame(XU),
            cU = setInterval(XU, 150);
          return () => {
            kU.current = null, cancelAnimationFrame(zU), clearInterval(cU), mQ(null)
          }
        }), [GU]), (0, fU.useLayoutEffect)((() => {
          if (!GU) return;
          if (0 === AU.length) return void mQ(null);
          const UU = nQ(gU.current);
          UU === aU ? mQ(gU.current) : tU(UU)
        }), [GU, AU, aU]), GU && 0 !== AU.length ? (0, MU.jsx)("div", {
          ref: gU,
          className: "PadButtonHintBar SmallTextBold",
          style: null === aU ? void 0 : {
            bottom: aU
          },
          "aria-hidden": !0,
          children: AU.map((XU => (0, MU.jsxs)("div", {
            className: "PadButtonHint",
            children: [XU.glyphs.map((UU => (0, MU.jsx)(Ry, {
              glyph: UU,
              className: "PadButtonHintGlyph"
            }, UU))), (0, MU.jsx)("span", {
              children: UU(XU.labelKey)
            })]
          }, XU.labelKey)))
        }) : null
      };
    var xQ = zU(1808);
    const JQ = [TU.b, "label", "[data-pad-slider]"].join(","),
      jQ = "data-pad-cursor-probe",
      KQ = UU => {
        var XU;
        const zU = (UU => {
          const XU = [];
          for (let cU = UU; cU && cU !== document.body && cU !== document.documentElement && (XU.push(cU), !(XU.length > 8)); cU = cU.parentElement);
          const zU = document.documentElement.classList.contains(IU.t) ? XU[XU.length - 1] : void 0;
          null === zU || void 0 === zU || zU.setAttribute(jQ, "");
          try {
            return XU.map((UU => ({
              element: UU,
              cursor: getComputedStyle(UU).cursor
            })))
          } finally {
            null === zU || void 0 === zU || zU.removeAttribute(jQ)
          }
        })(UU);
        if ("pointer" !== (null === (XU = zU[0]) || void 0 === XU ? void 0 : XU.cursor)) return null;
        let cU = 0;
        for (; cU + 1 < zU.length && "pointer" === zU[cU + 1].cursor;) cU++;
        return zU[cU].element
      },
      bQ = (UU, XU, zU, cU) => {
        const yU = cU.root.contains(UU) ? cU.root : null;
        for (let QU = UU; QU && QU !== document.body && QU !== document.documentElement; QU = QU.parentElement) {
          if (QU instanceof HTMLElement && LU(QU, XU) && OU(QU, XU, zU)) return QU;
          if (QU === yU) break
        }
        return "home" === cU.layer.kind || "gamePage" === cU.layer.kind ? ((UU, XU) => {
          const zU = document.scrollingElement;
          return zU instanceof HTMLElement && ![document.documentElement, document.body].some((XU => {
            const zU = getComputedStyle(XU),
              cU = "y" === UU ? zU.overflowY : zU.overflowX;
            return "hidden" === cU || "clip" === cU
          })) && OU(zU, UU, XU) ? zU : null
        })(XU, zU) : null
      };
    const TQ = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, aU.d)(pU.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const UU = YU.d.register({
              name: "cursor",
              isActive: () => "cursor" === Lc(),
              onFrame: UU => {
                this.onFrame(UU)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: UU => (0, YU.f)(UU) || UU === (0, EU.h)("menuConfirm") && (0, mU.E)((0, IU.d)())
            }),
            XU = (0, zc.k)((UU => {
              const XU = UU.getRoot();
              XU && this.layerPoints.delete(XU), XU === this.layerRoot && (this.layerRoot = null)
            })),
            zU = DU.k.subscribe("appManagerUpdated|activeInputDevice", (UU => {
              "gamepad" !== UU && this.active && !this.hidden && this.hide()
            }));
          return () => {
            UU(), XU(), DU.k.unsubscribe(zU), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, IU.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.UY()
        }
        activate(UU) {
          this.active = !0, this.hidden = !1;
          const XU = Rc();
          !XU || XU.root && XU.root !== UU.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(UU), this.jumpTo(XU.point))
        }
        jumpTo(UU) {
          this.state = {
            x: UU.x,
            y: UU.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.UY())
        }
        onFrame(UU) {
          const XU = Ec();
          if (!XU) return;
          if (this.active || this.activate(XU), this.followPage(XU)) return;
          this.followLayer(XU);
          const zU = UU.wokeDevice ? (0, IU.d)() : null;
          if (zU && this.jumpTo(zU), !(0, IU.k)()) return void this.hide();
          const cU = (0, EU.h)("menuToggleCursor");
          if (UU.wasPressed(cU)) return YU.d.consumeButton(cU), void Zc(this.getHandoff(null));
          if (this.handBackToFocus(UU)) return;
          const yU = (0, EU.h)("menuConfirm"),
            QU = (0, EU.h)("menuSecondary");
          if (UU.wasPressed((0, EU.h)("menuBack"))) return (0, mU.h)(XU.root) || (0, mU.c)(XU.root) || Yc(), void this.UY();
          if (Tz(null, UU, XU)) return UU.wasReleased(yU) && this.press && (this.updateHit(!1), this.updateConfirm(UU, yU)), void this.UY();
          if (document.pointerLockElement) return void this.hide();
          const AU = ec() ? {
              x: 0,
              y: 0
            } : (UU => {
              const XU = (UU, XU) => (UU ? 1 : 0) - (XU ? 1 : 0);
              return {
                x: XU(UU.isHeld("Right"), UU.isHeld("Left")),
                y: XU(UU.isHeld("Down"), UU.isHeld("Up"))
              }
            })(UU),
            FU = (0, NU.i)().moveDeadzone,
            oU = ((UU, XU) => {
              const zU = (0, pU.j)(UU, BU(XU));
              return Math.hypot(zU.x, zU.y)
            })(UU.leftStick, FU) > 0 || 0 !== AU.x || 0 !== AU.y;
          if (this.hidden) {
            const XU = UU.wasPressed(yU),
              zU = UU.wasPressed(QU);
            if (!oU && !PU(UU.rightStick) && !XU && !zU && !UU.wokeDevice) return void this.UY();
            if (this.hidden = !1, this.updateHit(!1), XU || zU) return XU && (this.press = {
              kind: "ignored"
            }, UU.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.UY()
          }
          this.movePendingPageStart(oU);
          const DU = this.getPoint();
          this.state = RU(this.state, {
            stick: UU.leftStick,
            moveDeadzone: FU,
            dpad: AU,
            dtMs: UU.dtMs,
            cursorSpeedPercent: (0, NU.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const aU = this.state.x !== DU.x || this.state.y !== DU.y,
            tU = [yU, QU].some((XU => UU.wasPressed(XU) || UU.wasReleased(XU)));
          (aU || tU || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(aU), this.updateConfirm(UU, yU), this.updateSecondary(UU, QU), this.updateScroll(UU, XU), this.UY()
        }
        followPage(UU) {
          const XU = "home" === UU.layer.kind || "gamePage" === UU.layer.kind,
            zU = this.page;
          if (this.page = XU ? {
              key: (0, zc.q)(UU.layer),
              root: UU.root
            } : null, !this.page || !zU || zU.root !== UU.root || zU.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(UU), "hybrid" === Bc()) return gc = null, ac = null, kc.lock(), !0;
          const {
            key: cU
          } = this.page;
          return this.pendingPageStart = {
            root: UU.root,
            key: cU,
            returning: hc.notePageEnteredByCursor(cU),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(UU) {
          const XU = this.pendingPageStart;
          if (!XU) return;
          if (UU || XU.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const zU = XU.returning ? hc.recallStop(XU.root, XU.key) : null;
          if (!zU && XU.returning && performance.now() - XU.enteredAtMs < 1e3) return;
          const cU = null !== zU && void 0 !== zU ? zU : hc.pickInitial(XU.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: XU.enteredAtMs
          });
          cU && (this.pendingPageStart = null, this.jumpTo((0, mU.u)(cU)))
        }
        setLayer(UU) {
          this.layerRoot = UU.root, this.layerOrder = UU.order
        }
        followLayer(UU) {
          var XU;
          if (UU.root === this.layerRoot) return;
          null !== (XU = this.layerRoot) && void 0 !== XU && XU.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const zU = this.layerPoints.get(UU.root),
            cU = zU && UU.order <= this.layerOrder ? zU : hc.getLayerStartPoint(UU.root);
          this.setLayer(UU), this.jumpTo(cU)
        }
        getHandoff(UU) {
          var XU;
          return {
            point: this.getPoint(),
            element: null !== (XU = this.interactive) && void 0 !== XU ? XU : this.findDraggedSliderNearby(),
            direction: UU
          }
        }
        findDraggedSliderNearby() {
          const UU = this.draggedSlider;
          if (null === UU || void 0 === UU || !UU.isConnected) return null;
          const XU = UU.getBoundingClientRect(),
            {
              y: zU
            } = this.getPoint();
          return zU >= XU.top - 40 && zU <= XU.bottom + 40 ? UU : null
        }
        handBackToFocus(UU) {
          if (!ec()) return !1;
          const XU = pU.A.find((XU => UU.wasPressed(XU)));
          return !!XU && (zU = this.getHandoff(XU), gc = Ic(zU), ac = null, kc.lock(), YU.d.handOffHeldInput(), !0);
          var zU
        }
        getAssistContext() {
          const UU = this.interactive;
          if (null === UU || void 0 === UU || !UU.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const XU = UU.getBoundingClientRect();
          if (XU.width > .4 * window.innerWidth || XU.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const zU = (0, NU.i)().cursorMagnetism && !(0, xQ.e)(UU) && !UU.closest("[data-pad-slider]"),
            cU = this.magnet && this.magnet !== UU && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : XU;
          return {
            overInteractive: !0,
            magnetTarget: zU ? {
              x: cU.left + cU.width / 2,
              y: cU.top + cU.height / 2
            } : null
          }
        }
        updateHit(UU) {
          this.lastHitTestMs = performance.now();
          const XU = this.getPoint(),
            zU = document.elementFromPoint(XU.x, XU.y),
            cU = zU && !(0, gU.t)(zU) && (UU => {
              var XU;
              const zU = Ec();
              return !(zU && !zU.root.contains(UU) && !UU.closest(".tooltip-container")) || !(null !== (XU = document.getElementById("root")) && void 0 !== XU && XU.contains(UU))
            })(zU) ? zU : null;
          if (cU !== this.hit) return (0, mU.p)(this.hit, cU, XU), this.hit = cU, void this.setInteractive(cU ? (UU => {
            const XU = UU.closest(JQ);
            if (XU) {
              var zU, cU;
              const UU = null !== (zU = null === (cU = XU.parentElement) || void 0 === cU ? void 0 : cU.closest("[data-pad-focusable]")) && void 0 !== zU ? zU : XU;
              return (0, TU.s)(UU) ? {
                element: null,
                magnet: null
              } : {
                element: UU,
                magnet: XU
              }
            }
            const yU = KQ(UU);
            return {
              element: yU,
              magnet: yU
            }
          })(cU) : {
            element: null,
            magnet: null
          });
          UU && cU && (0, mU.p)(cU, cU, XU)
        }
        setInteractive(UU) {
          let {
            element: XU,
            magnet: zU
          } = UU;
          this.interactive = XU, this.magnet = zU
        }
        clearHover() {
          this.hit && (0, mU.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const UU = this.hit;
          if (!UU || (0, mU.A)(UU)) return {
            kind: "ignored"
          };
          const XU = (0, qc.d)(UU),
            zU = UU.closest("[data-pad-slider]");
          return XU && zU ? {
            kind: "slider",
            slider: zU,
            adjuster: XU
          } : ((0, mU.q)(UU, this.getPoint()), {
            kind: "pointer",
            target: UU
          })
        }
        applySliderFraction(UU) {
          var XU;
          const zU = UU.slider.getBoundingClientRect(),
            cU = zU.height > zU.width,
            yU = null === (XU = UU.slider.querySelector("[data-pad-slider-handle]")) || void 0 === XU ? void 0 : XU.getBoundingClientRect(),
            QU = yU ? cU ? yU.height : yU.width : 0,
            AU = (cU ? zU.height : zU.width) - QU;
          if (AU <= 0) return;
          const FU = cU ? zU.bottom - QU / 2 - this.state.y : this.state.x - zU.left - QU / 2;
          UU.adjuster.setFraction(Math.max(0, Math.min(1, FU / AU)))
        }
        updateConfirm(UU, XU) {
          UU.wasPressed(XU) && (this.press = UU.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const zU = this.press;
          if (!zU) return;
          if (UU.isHeld(XU)) return "slider" === zU.kind && this.applySliderFraction(zU), void this.updateRepeat();
          this.press = null;
          const cU = this.repeated;
          if (this.endRepeat(), !UU.wasReleased(XU)) return void this.endPressWithoutClick(zU);
          const yU = this.getPoint(),
            QU = this.hit;
          if ("slider" === zU.kind && zU.adjuster.endDrag(), "pointer" === zU.kind) {
            const UU = null !== QU && void 0 !== QU ? QU : zU.target.isConnected ? zU.target : null;
            UU && (0, mU.s)(UU, yU);
            const XU = QU && zU.target.isConnected && !cU ? ((UU, XU) => {
              for (let zU = UU; zU; zU = zU.parentElement)
                if (zU.contains(XU)) return zU;
              return null
            })(zU.target, QU) : null;
            XU && (hc.noteCursorActivation(XU), (0, gU.g)(XU, new MouseEvent("click", (0, mU.M)(yU, 0, 0))), (0, mU.g)(XU), (0, mU.J)(XU) && (0, mU.F)(XU))
          }
        }
        beginRepeat() {
          var UU, XU, zU;
          const cU = null !== (UU = null === (XU = this.hit) || void 0 === XU ? void 0 : XU.closest("[data-pad-repeat]")) && void 0 !== UU ? UU : null;
          this.repeatStop = cU, this.repeatKey = null !== (zU = null === cU || void 0 === cU ? void 0 : cU.getAttribute("data-pad-repeat")) && void 0 !== zU ? zU : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const UU = this.repeatStop;
          if (!UU) return;
          const XU = this.hit;
          UU.isConnected && !(0, TU.s)(UU) && UU.getAttribute("data-pad-repeat") === this.repeatKey && XU && UU.contains(XU) ? UU.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, hc.noteCursorActivation(UU), (0, gU.g)(UU, new MouseEvent("click", (0, mU.M)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(UU) {
          "slider" === UU.kind && UU.adjuster.endDrag(), "pointer" === UU.kind && UU.target.isConnected && (0, mU.s)(UU.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(UU, XU) {
          UU.wasPressed(XU) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !UU.isHeld(XU) && (this.secondaryArmed = !1, UU.wasReleased(XU) && this.hit && (0, mU.l)(this.hit, this.getPoint(), 2))
        }
        updateScroll(UU, XU) {
          const zU = WU(UU.rightStick, UU.dtMs);
          if (0 === zU.x && 0 === zU.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + zU.x,
            y: this.scrollRemainder.y + zU.y
          };
          const cU = Math.trunc(this.scrollRemainder.x),
            yU = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - cU,
            y: this.scrollRemainder.y - yU
          };
          const QU = this.hit;
          if (!QU) return;
          let AU = !1;
          if (0 !== yU) {
            const UU = bQ(QU, "y", yU > 0 ? 1 : -1, XU);
            UU && (UU.scrollBy({
              top: yU,
              behavior: "instant"
            }), AU = !0)
          }
          if (0 !== cU) {
            const UU = bQ(QU, "x", cU > 0 ? 1 : -1, XU);
            UU && (UU.scrollBy({
              left: cU,
              behavior: "instant"
            }), AU = !0)
          }
          AU && (this.lastHitTestMs = -1 / 0)
        }
        UY() {
          xU.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      hQ = () => {
        const UU = (0, fU.useMemo)((() => new sU), []),
          XU = (0, IU.y)();
        return (0, fU.useEffect)((() => {
          if (!XU) return;
          let zU = 0,
            cU = {
              of: null,
              atMs: 0,
              list: []
            };
          const yU = document.getElementsByClassName(Cc),
            QU = UU => {
              for (const XU of [...yU]) XU !== UU && XU.classList.remove(Cc)
            },
            AU = () => {
              var XU;
              zU = requestAnimationFrame(AU);
              const yU = (() => {
                const UU = hc.getFocused();
                if (hc.isActive() && null !== UU && void 0 !== UU && UU.isConnected) return UU;
                const XU = TQ.getHighlighted();
                return null !== XU && void 0 !== XU && XU.isConnected ? XU : null
              })();
              QU(yU), yU && !yU.classList.contains(Cc) && yU.classList.add(Cc);
              const FU = null !== (XU = null === yU || void 0 === yU ? void 0 : yU.closest("[data-pad-reticle-box]")) && void 0 !== XU ? XU : yU;
              UU.show(FU ? ((UU, XU) => {
                let zU = UU.left,
                  cU = UU.top,
                  yU = UU.right,
                  QU = UU.bottom;
                for (const AU of XU) {
                  if (!AU) continue;
                  const UU = rU(AU);
                  zU = Math.max(zU, UU.left), cU = Math.max(cU, UU.top), yU = Math.min(yU, UU.right), QU = Math.min(QU, UU.bottom)
                }
                return yU <= zU || QU <= cU ? null : {
                  left: zU,
                  top: cU,
                  width: yU - zU,
                  height: QU - cU
                }
              })(FU.getBoundingClientRect(), (UU => {
                const XU = performance.now();
                return (cU.of !== UU || XU - cU.atMs > 500) && (cU = {
                  of: UU,
                  atMs: XU,
                  list: [eU(UU, "y"), eU(UU, "x")]
                }), cU.list
              })(FU)) : null)
            };
          return zU = requestAnimationFrame(AU), () => {
            cancelAnimationFrame(zU), QU(null), UU.hide()
          }
        }), [XU, UU]), (0, MU.jsx)(nU, {
          placer: UU,
          className: "PadFocusRing"
        })
      },
      UA = (UU, XU) => {
        UU.style.transform = `translate3d(${XU.x}px, ${XU.y}px, 0)`, UU.classList.toggle("Visible", XU.visible), UU.classList.toggle("Pressed", XU.pressed)
      },
      XA = () => {
        const UU = (0, fU.useRef)(null);
        return (0, fU.useEffect)((() => {
          const XU = xU.subscribe((XU => {
            UU.current && UA(UU.current, XU)
          }));
          return UU.current && UA(UU.current, xU.get()), XU
        }), []), (0, MU.jsx)("div", {
          ref: UU,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, MU.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      zA = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      cA = "PadOverThirdParty",
      yA = new Set(zA.map((UU => UU.id))),
      QA = () => {
        const UU = zA.map((UU => {
            let {
              id: XU,
              find: zU,
              startSelectors: cU
            } = UU;
            return (0, zc.n)({
              id: XU,
              kind: "popup",
              getRoot: () => {
                const UU = zU(),
                  XU = UU ? ((UU, XU) => {
                    var zU;
                    for (const cU of XU) {
                      const XU = UU.querySelector(cU);
                      if (XU) return XU
                    }
                    return null !== (zU = [...UU.querySelectorAll("button")].find((UU => !UU.matches(".fc-cta-consent")))) && void 0 !== zU ? zU : null
                  })(UU, cU) : null;
                if (UU && XU && !XU.hasAttribute("data-pad-default-focus")) {
                  for (const XU of UU.querySelectorAll("[data-pad-default-focus]")) XU.removeAttribute("data-pad-default-focus");
                  for (const XU of UU.querySelectorAll("[data-pad-hint-bar-avoid]")) XU.removeAttribute("data-pad-hint-bar-avoid");
                  XU.setAttribute("data-pad-default-focus", ""), ((UU, XU) => {
                    let zU = UU;
                    for (let cU = UU.parentElement; cU && XU.contains(cU) && !(cU.getBoundingClientRect().height >= window.innerHeight / 2); cU = cU.parentElement) zU = cU;
                    return zU
                  })(XU, UU).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return UU
              },
              close: null,
              memoryKey: null
            })
          })),
          XU = document.documentElement,
          zU = AU.f.onFrame((() => {
            const UU = (0, IU.k)() ? Ec() : null,
              zU = !!UU && (cU = UU.layer, yA.has(cU.id));
            var cU;
            XU.classList.contains(cA) !== zU && XU.classList.toggle(cA, zU)
          }));
        return () => {
          for (const XU of UU) XU();
          zU(), XU.classList.remove(cA)
        }
      },
      AA = "PadLargePointer",
      FA = () => {
        (0, fU.useEffect)((() => {
          const UU = (0, gU.o)(document.body),
            XU = hc.install(),
            zU = TQ.install(),
            cU = QA();
          return () => {
            UU(), XU(), zU(), cU()
          }
        }), []);
        const {
          largePointer: UU
        } = (0, NU.p)(), XU = (0, uQ.F)() && UU;
        return (0, fU.useEffect)((() => {
          if (XU) return document.documentElement.classList.add(AA), () => {
            document.documentElement.classList.remove(AA)
          }
        }), [XU]), (0, FU.createPortal)((0, MU.jsxs)(MU.Fragment, {
          children: [(0, MU.jsx)(lQ, {}), (0, MU.jsx)(hQ, {}), (0, MU.jsx)(XA, {})]
        }), document.body)
      };
    var oA = zU(9355),
      DA = zU(9383),
      EA = zU(9373);
    zU(9392);
    const YA = (UU, XU) => {
        const [zU, cU] = (0, fU.useState)(!1), [yU, QU] = (0, fU.useState)(null), AU = (0, fU.useRef)(null), FU = (0, fU.useCallback)((UU => {
          AU.current = UU, QU(UU)
        }), []), oU = (0, fU.useCallback)((() => {
          cU(!1), FU(null)
        }), [FU]), EU = (0, fU.useCallback)((() => {
          cU(!0)
        }), []), YU = (0, fU.useCallback)(((UU, XU) => {
          FU((0, EA.z)(UU, XU, AU.current))
        }), [FU]);
        (0, fU.useLayoutEffect)((() => (XU(zU), (0, fQ.v)(UU, zU), DU.k.UY(fQ.n), () => {
          XU(!1), (0, fQ.v)(UU, !1), DU.k.UY(fQ.n)
        })), [zU, UU, XU]), (0, ty.f)("appManagerUpdated|activeInputDevice", (UU => {
          "gamepad" !== UU && oU()
        })), (0, ty.f)("appManagerUpdated|gameState", (UU => {
          "inGame" !== UU && oU()
        }));
        const NU = () => {
          (0, oz.p)() && oU()
        };
        return (0, ty.f)("appManagerUpdated|openEverythingMenuName", NU), (0, ty.f)("appManagerUpdated|openInGameMenuName", NU), {
          open: zU,
          picked: yU,
          pickedRef: AU,
          show: EU,
          aim: YU,
          close: oU
        }
      },
      NA = UU => {
        let {
          className: XU,
          slotCount: zU,
          picked: cU,
          slotLabel: yU,
          renderSlot: QU,
          centre: AU
        } = UU;
        const FU = Array.from({
          length: zU
        }, ((UU, XU) => XU));
        return (0, MU.jsx)("div", {
          className: HU()("EmoteWheelOverlay PadRadialWheel", XU),
          children: (0, MU.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * EA.q + "rem",
              height: 2 * EA.q + "rem"
            },
            children: [(0, MU.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${EA.l} ${EA.l}`,
              children: [FU.map((UU => (0, MU.jsx)("path", {
                d: (0, EA.r)(UU, zU, EA.c, EA.e, EA.i),
                className: HU()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: UU === cU
                }),
                "aria-label": yU(UU)
              }, UU))), (0, MU.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: EA.c,
                cy: EA.c,
                r: EA.i
              }), (0, MU.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: EA.c,
                cy: EA.c,
                r: EA.e
              }), null !== cU && (0, MU.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, EA.r)(cU, zU, EA.c, EA.e, EA.i)
              })]
            }), FU.map((UU => {
              const XU = (0, EA.x)(UU, zU);
              return (0, MU.jsx)("div", {
                className: HU()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: UU === cU
                }),
                style: {
                  left: `calc(50% + ${EA.b*Math.cos(XU)}rem)`,
                  top: `calc(50% + ${EA.b*Math.sin(XU)}rem)`
                },
                "aria-hidden": !0,
                children: QU(UU)
              }, UU)
            })), (0, MU.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: AU
            })]
          })
        })
      },
      IA = EQ.length,
      pA = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = YA("chat", wz.t), zU = (0, fU.useMemo)((() => EQ.map((XU => UU(XU)))), [UU]);
        return (0, ty.f)(wz.p, (() => {
          XU.open || (0, oA.e)() || (0, DA.q)() || "inGame" !== oU.e.get("gameState") || (0, oz.p)() || !(0, ez.b)() || XU.show()
        })), (0, ty.f)(wz.g, (UU => {
          XU.open && XU.aim(UU, IA)
        })), (0, ty.f)(wz.m, (() => {
          var UU;
          if (!XU.open) return;
          const cU = XU.pickedRef.current;
          null !== cU ? YQ.claim(performance.now()) && (XU.close(), null === (UU = (0, ez.b)()) || void 0 === UU || UU.sendLine(zU[cU])) : XU.close()
        })), (0, ty.f)(wz.k, XU.close), XU.open ? (0, MU.jsx)(NA, {
          className: "QuickChatWheel",
          slotCount: IA,
          picked: XU.picked,
          slotLabel: UU => zU[UU],
          renderSlot: UU => zU[UU],
          centre: null !== XU.picked ? zU[XU.picked] : UU("controller:quickChatPick")
        }) : null
      },
      aA = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = YA("actionButton", DA.t), [zU, cU] = (0, fU.useState)([]);
        if ((0, ty.f)(DA.k, (UU => {
            XU.open || (0, oA.e)() || (0, wz.c)() || "inGame" !== oU.e.get("gameState") || (0, oz.p)() || (cU(UU), XU.show())
          })), (0, ty.f)(DA.e, (UU => {
            XU.open && XU.aim(UU, zU.length)
          })), (0, ty.f)(DA.j, (() => {
            if (!XU.open) return;
            const UU = XU.pickedRef.current;
            XU.close(), null !== UU && DU.k.UY(DA.m, zU[UU])
          })), (0, ty.f)(DA.g, XU.close), !XU.open) return null;
        const QU = null !== XU.picked ? zU[XU.picked] : null;
        return (0, MU.jsx)(NA, {
          className: "ActionWheel",
          slotCount: zU.length,
          picked: XU.picked,
          slotLabel: XU => {
            const cU = zU[XU];
            return "reload" === cU.kind ? UU("controller:gameplayReload") : "customButton" === cU.kind ? cU.description || cU.icon : "touchButton" === cU.kind && "string" === typeof cU.label ? cU.label : ""
          },
          renderSlot: UU => (0, MU.jsx)(Wy, {
            action: zU[UU]
          }),
          centre: QU ? (0, MU.jsx)(Wy, {
            action: QU
          }) : UU("controller:actionWheelPick")
        })
      };
    var tA = zU(97);
    const gA = () => ((0, fU.useEffect)((() => {
        var UU, XU;
        const zU = (0, gU.o)(document.getElementById("root")),
          cU = (0, IU.f)(),
          yU = (() => {
            const UU = [DU.k.subscribe(Xy.f, (() => {
                Qy("blockBreak")
              })), DU.k.subscribe("damagedByOtherPlayer", (() => {
                Qy("damage")
              })), DU.k.subscribe("yourAttackHit", (UU => {
                let {
                  hitSelf: XU
                } = UU;
                XU || Qy("hit")
              }))],
              XU = AU.f.onActivePadChanged((UU => {
                UU && Qy("connect")
              }));
            return () => {
              for (const XU of UU) DU.k.unsubscribe(XU);
              XU()
            }
          })(),
          QU = (() => {
            const UU = new Yy({
              getVisitId: Ey.g,
              peekVisitId: Ey.peekVisitSessionId,
              readReportedVisitId: () => {
                const UU = Dy.n.getItem(Ny);
                return "string" === typeof UU ? UU : null
              },
              writeReportedVisitId: UU => {
                Dy.n.setItem(Ny, UU)
              },
              isPadActive: IU.k,
              getPadFamily: () => {
                var UU, XU;
                return null !== (UU = null === (XU = AU.f.getActivePad()) || void 0 === XU ? void 0 : XU.family) && void 0 !== UU ? UU : null
              },
              canReport: Fy.isBloxdGa4Ready,
              getInputType: oy.c,
              oY: Fy.logControllerUsedToGtag
            });
            let XU = 0,
              zU = null;
            const cU = yU => {
                null === zU && ("notReady" !== UU.check(yU) || null !== zU || XU >= 20 || (XU++, zU = setTimeout((() => {
                  zU = null, cU(!1)
                }), 3e3)))
              },
              yU = DU.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                cU(!0)
              })),
              QU = (0, Ey.n)((() => {
                XU = 0, cU(!0)
              }));
            return () => {
              DU.k.unsubscribe(yU), QU(), null !== zU && clearTimeout(zU)
            }
          })(),
          FU = AU.f.onFrame(((UU, XU, zU) => {
            const cU = (0, IU.q)(UU, zU);
            YU.d.dispatch(UU, XU, cU)
          }));
        let EU = null !== (UU = null === (XU = AU.f.getActivePad()) || void 0 === XU ? void 0 : XU.family) && void 0 !== UU ? UU : null;
        const pU = AU.f.onActivePadChanged((UU => {
            var XU, zU;
            (YU.d.reset(), (0, IU.u)(), DU.k.UY(AU.d, UU), (null !== (XU = null === UU || void 0 === UU ? void 0 : UU.family) && void 0 !== XU ? XU : null) !== EU) && (EU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.family) && void 0 !== zU ? zU : null, DU.k.UY(NU.d, (0, NU.i)()));
            !UU && (0, IU.k)() && (0, IU.v)(oU.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          aU = () => {
            "visible" !== document.visibilityState && YU.d.clear()
          },
          tU = () => {
            YU.d.clear()
          };
        document.addEventListener("visibilitychange", aU), window.addEventListener("blur", tU), AU.f.start(), (0, Ay.k)();
        const kU = null;
        return () => {
          zU(), cU(), yU(), QU(), FU(), pU(), document.removeEventListener("visibilitychange", aU), window.removeEventListener("blur", tU), AU.f.stop(), null === kU || void 0 === kU || kU()
        }
      }), []), (0, MU.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, MU.jsx)(Oy, {}), (0, MU.jsx)(Vy, {}), (0, MU.jsx)(sy, {}), (0, MU.jsx)(SQ, {}), (0, MU.jsx)(FA, {}), (0, MU.jsx)(pA, {}), (0, MU.jsx)(aA, {})]
      })),
      kA = () => tA.featureFlags.useControllerSupport ? (0, MU.jsx)(gA, {}) : null;
    var GA = zU(8767),
      BA = zU(9395);
    const ZA = new Set(Ay.h),
      RA = UU => `${BA.o}${(0,NU.l)()}/${UU}`,
      PA = UU => {
        if (!(0, BA.m)(UU)) return null;
        const [XU, zU] = UU.slice(BA.o.length).split("/");
        return (0, GA.h)(XU) && ZA.has(zU) ? (0, Ay.d)(XU, zU) : null
      };
    var WA = zU(9404);
    const dA = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, IU.y)(), {
          gameState: zU,
          isUiHidden: cU
        } = (0, oU.q)(["gameState", "isUiHidden"]), {
          hideButtonHints: QU,
          sneakMode: AU
        } = (0, NU.p)(), [FU, DU] = (0, fU.useState)(WA.c);
        return (0, ty.f)(qy.q, DU), XU && !cU && "inGame" === zU && FU ? (0, MU.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!QU && (0, MU.jsx)(Ry, {
            glyph: (0, EU.h)("toggle" === AU ? "sneak" : "sneakToggle")
          }), (0, MU.jsx)("span", {
            children: UU("controller:gameplaySneaking")
          })]
        }) : null
      },
      LA = 12,
      eA = UU => {
        let {
          trigger: XU,
          className: zU,
          children: cU
        } = UU;
        const yU = (0, fU.useRef)(null);
        return (0, fU.useEffect)((() => {
          let UU = 0;
          const zU = eU(XU, "y"),
            cU = () => {
              UU = requestAnimationFrame(cU);
              const QU = yU.current;
              if (!QU || null === XU || void 0 === XU || !XU.isConnected) return;
              const {
                left: AU,
                top: FU
              } = function(UU, XU, zU) {
                let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const QU = UU.left + UU.width / 2,
                  AU = Math.max(LA, zU.width - LA - XU.width),
                  FU = Math.min(Math.max(QU - XU.width / 2, LA), AU),
                  oU = zU.height - cU;
                let DU = 0,
                  EU = oU;
                if (yU) {
                  const UU = Math.max(0, yU.top),
                    cU = Math.min(oU, yU.bottom);
                  cU - UU >= Math.max(zU.height / 2, XU.height + 24) && (DU = UU, EU = cU)
                }
                const YU = UU.top + UU.height / 2 < (DU + EU) / 2 ? EU - LA - XU.height : DU + LA;
                return {
                  left: FU,
                  top: Math.max(LA, YU)
                }
              }(XU.getBoundingClientRect(), {
                width: QU.offsetWidth,
                height: QU.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(vQ)) || 0, null !== zU && void 0 !== zU && zU.isConnected ? zU.getBoundingClientRect() : null);
              QU.style.transform = `translate3d(${Math.round(AU)}px, ${Math.round(FU)}px, 0)`, QU.style.visibility = "visible"
            };
          return cU(), () => {
            cancelAnimationFrame(UU)
          }
        }), [XU]), (0, MU.jsx)("div", {
          ref: yU,
          className: zU,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: cU
        })
      };
    var CA = zU(1390),
      wA = zU(9411),
      qA = zU(1494),
      OA = zU(9417),
      SA = zU(9422);
    const rA = {
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
      uA = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, IU.y)(), zU = (0, wA.c)(), cU = (0, Hy.f)("_tasks"), QU = (0, Hy.f)("_availableLeaderboards");
        if (!XU) return null;
        const AU = (UU => {
          let {
            hasShop: XU,
            hasTasksOrLeaderboards: zU,
            canInvite: cU
          } = UU;
          const yU = [];
          return XU && yU.push("shop"), zU && yU.push("tasks"), cU && yU.push("invite"), yU.push("leave"), yU
        })({
          hasShop: zU,
          hasTasksOrLeaderboards: !(!cU && !QU),
          canInvite: !!tA.featureFlags.canUseInviteLinks
        });
        return (0, MU.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: AU.map((XU => {
            const {
              icon: zU,
              labelKey: cU
            } = rA[XU], yU = "leave" === XU ? qA.G : qA.f;
            return (0, MU.jsx)(yU, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (UU => {
                  switch (UU) {
                    case "shop":
                      return DU.k.UY(SA.k), void oU.e.set({
                        openEverythingMenuName: Fz.s.SHOP
                      });
                    case "tasks":
                      return void DU.k.UY("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void DU.k.UY("toggleMenu", "inviteLink");
                    case "leave":
                      (0, OA.e)()
                  }
                })(XU)
              },
              children: (0, MU.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, MU.jsx)(CA.d, {
                  name: zU
                }), (0, MU.jsx)("span", {
                  children: UU(cU)
                })]
              })
            }, XU)
          }))
        })
      };
    var fA = zU(2058);
    const iA = pU.w,
      HA = ["forward", "backward", "left", "right", "sprint"],
      MA = UU => UU.ctrlKey || UU.altKey || "Alt" === UU.key || "ArrowUp" === UU.key || "ArrowDown" === UU.key || "Tab" === UU.code || "/" === UU.key || "Slash" === UU.code;
    class vA {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(pU.W).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(UU) {
        this.armed = UU
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || XU ? !UU.repeat && this.swallowedKeys.delete(UU.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(UU.code),
          continues: !1
        } : "Escape" === UU.key || UU.repeat && !this.swallowedKeys.has(UU.code) ? {
          swallow: !1,
          continues: !1
        } : zU ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(UU.code), {
          swallow: !0,
          continues: (0, IU.g)(UU)
        })
      }
      onKeyUp(UU) {
        return this.swallowedKeys.delete(UU.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yU = (0, pU.p)(UU.values, this.previousHeld),
          QU = null === zU ? -1 : (0, pU.n)(zU),
          AU = QU >= 0 && yU[QU] && !this.previousHeld[QU],
          FU = yU.some(((UU, XU) => UU && !this.previousHeld[XU] && XU !== QU)),
          oU = Math.hypot(UU.leftStick.x, UU.leftStick.y) >= iA,
          DU = Math.hypot(UU.rightStick.x, UU.rightStick.y) >= iA,
          EU = oU && !this.leftStickWasPressed || DU && !this.rightStickWasPressed;
        this.previousHeld = yU, this.leftStickWasPressed = oU, this.rightStickWasPressed = DU;
        let YU = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, YU = !0);
        const NU = !XU && AU && !cU,
          IU = !NU && this.armed && !XU && (FU || EU);
        return (NU || IU) && (this.consumeNextFrame = !0, this.consumeAfterContinue = IU, YU = !0), {
          continues: IU,
          back: NU,
          consumeHeld: YU
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const VA = new Set([...fA.l, ...fA.E]),
      sA = UU => ((UU, XU, zU) => {
        const cU = Object.keys(XU).filter((cU => !zU.has(cU) && XU[cU].includes(UU)));
        return cU.length > 0 && cU.every((UU => HA.includes(UU)))
      })(UU, fA.w, VA),
      nA = (UU, XU, zU) => {
        const cU = new vA,
          yU = UU => {
            if (!UU.isTrusted) return;
            const {
              swallow: zU,
              continues: yU
            } = cU.onKeyDown(UU, !(0, IU.E)(UU) || (0, Uy.g)() || (0, oz.p)(), sA(UU.code));
            zU && (UU.stopImmediatePropagation(), MA(UU) && UU.preventDefault()), yU && ((0, IU.v)("keyboardMouse"), XU())
          },
          QU = UU => {
            UU.isTrusted && cU.onKeyUp(UU) && (UU.stopImmediatePropagation(), MA(UU) && UU.preventDefault())
          },
          FU = () => {
            cU.forgetKeys()
          };
        window.addEventListener("keydown", yU, !0), window.addEventListener("keyup", QU, !0), window.addEventListener("blur", FU);
        const oU = AU.f.onFrame((UU => {
            const yU = YU.d.getActiveConsumerName(),
              QU = zU(),
              AU = QU ? (0, EU.h)("menuBack") : null,
              FU = null !== yU && "gameplay" !== yU,
              {
                continues: oU,
                back: DU,
                consumeHeld: pU
              } = cU.onPadFrame(UU, FU, AU, (0, IU.m)(UU));
            if (pU) {
              const UU = (0, NU.i)().swapSticks ? "right" : "left";
              YU.d.consumeAllHeld(cU.consumeLeavesMoveStick() ? UU : null)
            }
            DU ? null === QU || void 0 === QU || QU() : oU && XU()
          })),
          DU = (0, Uy.k)(`pressToContinue:${UU}`, (() => cU.blocksGameplay()));
        return {
          setArmed: UU => {
            cU.setArmed(UU)
          },
          dispose: () => {
            window.removeEventListener("keydown", yU, !0), window.removeEventListener("keyup", QU, !0), window.removeEventListener("blur", FU), oU(), DU()
          }
        }
      };
    var mA = zU(5540),
      lA = zU(3822),
      xA = zU(3490),
      JA = zU(8770);
    const jA = UU => {
        let {
          text: XU
        } = UU;
        return (0, MU.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: XU
        })
      },
      KA = UU => {
        let {
          label: XU,
          hint: zU,
          options: cU,
          value: QU,
          onChange: AU
        } = UU;
        const {
          t: FU
        } = (0, yU.I)();
        return (0, MU.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, MU.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, MU.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, MU.jsx)("div", {
                className: "SliderText",
                children: XU
              }), zU && (0, MU.jsx)("div", {
                className: "ControllerSettingsHint",
                children: zU
              })]
            }), (0, MU.jsx)(xA.d, {
              options: cU.map((UU => ({
                label: "label" in UU ? UU.label : FU(UU.labelKey),
                value: UU.value
              }))),
              value: QU,
              onChange: UU => {
                AU(UU.value)
              }
            })]
          })
        })
      },
      bA = UU => {
        let {
          settingKey: XU,
          label: zU,
          range: cU,
          format: yU
        } = UU;
        const QU = (0, NU.p)();
        return (0, MU.jsx)(mA.j, {
          name: zU,
          min: cU.min,
          max: cU.max,
          step: cU.step,
          padStep: cU.step,
          initValue: QU[XU],
          format: yU,
          onChange: UU => {
            (0, NU.m)({
              [XU]: (0, JA.y)(UU, cU)
            })
          }
        })
      };
    var TA = zU(9431),
      hA = zU(9438);
    const UF = UU => UU instanceof DOMException && ("SecurityError" === UU.name || "NotAllowedError" === UU.name),
      XF = UU => {
        const [XU] = [...UU.controllers].sort(((UU, XU) => hA.o[UU] - hA.o[XU]));
        return hA.n[XU]
      },
      zF = UU => {
        (0, TA.b)().allowPhoneMotion().catch((XU => {
          UU && UF(XU) ? UU() : console.warn("Could not enable the motion sensor", XU)
        }))
      },
      cF = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      yF = UU => {
        let {
          status: XU
        } = UU;
        const {
          t: zU
        } = (0, yU.I)(), [cU, QU] = (0, fU.useState)(null), AU = `${XU.controllers.join(",")}|${XU.phoneMotion}`;
        (0, fU.useEffect)((() => {
          QU(null)
        }), [AU]);
        const FU = () => {
          (0, TA.b)().connectController().then((UU => {
            QU(UU > 0 ? "openFailed" : null)
          })).catch((UU => {
            UF(UU) ? QU("needsClick") : console.warn("Could not connect motion controller", UU)
          }))
        };
        if (XU.hidSupported) {
          let UU = zU("controller:settingsGyroConnectHint");
          return "needsClick" === cU ? UU = zU("controller:settingsGyroConnectNeedsClick") : "openFailed" === cU ? UU = zU("controller:settingsGyroOpenFailed") : XU.controllers.length > 0 && (UU = zU("controller:settingsGyroConnected", {
            name: XF(XU)
          })), (0, MU.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, MU.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, MU.jsx)("div", {
                className: "ControllerSettingsHint",
                children: UU
              }), (0, MU.jsx)(qA.f, {
                onClick: FU,
                children: zU("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === XU.phoneMotion) return (0, MU.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, MU.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === cU && (0, MU.jsx)("div", {
              className: "ControllerSettingsHint",
              children: zU("controller:settingsGyroAllowNeedsTap")
            }), (0, MU.jsx)(qA.f, {
              onClick: () => {
                zF((() => {
                  QU("needsTap")
                }))
              },
              children: zU("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const oU = cF[XU.phoneMotion];
        return oU ? (0, MU.jsx)("div", {
          className: "ControllerSettingsHint",
          children: zU(oU)
        }) : null
      },
      QF = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, NU.p)(), zU = (0, TA.c)(), cU = (0, IU.C)(), QU = !zU.hidSupported && zU.phoneSupported && !zU.padConnected, AU = (zU.hidSupported || zU.phoneSupported) && !QU, FU = (0, EU.h)("pause");
        return (0, MU.jsxs)(MU.Fragment, {
          children: [(0, MU.jsx)(jA, {
            text: UU("controller:settingsGyro")
          }), QU && (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsGyroPhoneNeedsController")
          }), !AU && !QU && (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU(zU.hidBlocked || zU.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), AU && (0, MU.jsx)(mA.e, {
            label: UU(zU.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: XU.gyroAiming,
            onClick: UU => {
              var XU, zU;
              (0, NU.m)({
                gyroAiming: UU
              });
              const cU = null === (XU = null === (zU = navigator.userActivation) || void 0 === zU ? void 0 : zU.isActive) || void 0 === XU || XU;
              if (!UU || !cU) return;
              const yU = (0, TA.b)(),
                QU = yU.getStatus();
              QU.hidSupported ? yU.connectControllerIfNoneGranted().catch((UU => {
                console.warn("Motion controller picker unavailable", UU)
              })) : "needsPermission" === QU.phoneMotion && zF()
            },
            circleInfoText: UU(zU.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), AU && zU.hidSupported && (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsGyroSteamHint")
          }), AU && XU.gyroAiming && (0, MU.jsxs)(MU.Fragment, {
            children: [(0, MU.jsx)(yF, {
              status: zU
            }), (0, MU.jsx)(bA, {
              settingKey: "gyroSensitivity",
              label: UU("controller:settingsGyroSensitivity"),
              range: JA.S,
              format: JA.K
            }), (0, MU.jsx)(KA, {
              label: UU("controller:settingsGyroActivation"),
              hint: "aiming" === XU.gyroActivation && (0, MU.jsx)(lA.e, {
                text: UU("controller:settingsGyroAimingHint", {
                  button: lA.f
                }),
                glyph: (0, EU.h)("use")
              }),
              options: JA.P,
              value: XU.gyroActivation,
              onChange: UU => {
                (0, NU.m)({
                  gyroActivation: UU
                })
              }
            }), "button" === XU.gyroActivation && (0, MU.jsx)(KA, {
              label: UU("controller:settingsGyroButton"),
              hint: UU("controller:settingsGyroButtonHint"),
              options: JA.t.filter((UU => UU !== FU || UU === XU.gyroButton)).map((UU => ({
                label: Zy(cU, UU),
                value: UU
              }))),
              value: XU.gyroButton,
              onChange: UU => {
                (0, NU.m)({
                  gyroButton: UU
                })
              }
            })]
          })]
        })
      };
    var AF = zU(1936);
    const FF = () => {
      const {
        t: UU
      } = (0, yU.I)(), XU = (0, NU.p)(), zU = (0, IU.C)();
      return (0, MU.jsxs)(MU.Fragment, {
        children: [(0, MU.jsx)(jA, {
          text: UU("controller:settingsAccessibility")
        }), (0, MU.jsx)(mA.e, {
          label: UU("controller:settingsSwapConfirmBack"),
          checked: (0, EU.A)(XU.swapConfirmBack, zU),
          onClick: UU => {
            (0, NU.m)({
              swapConfirmBack: UU === (0, EU.A)(null, zU) ? null : UU
            }), AF.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: UU("controller:settingsSwapConfirmBackInfo")
        }), (0, MU.jsx)(KA, {
          label: UU("controller:settingsButtonRepeat"),
          hint: UU("controller:settingsButtonRepeatHint"),
          options: JA.r,
          value: XU.buttonRepeat,
          onChange: UU => {
            (0, NU.m)({
              buttonRepeat: UU
            })
          }
        }), (0, MU.jsx)(KA, {
          label: UU("controller:settingsTapHoldTime"),
          hint: UU("controller:settingsTapHoldTimeHint"),
          options: JA.qb,
          value: XU.tapHoldTime,
          onChange: UU => {
            (0, NU.m)({
              tapHoldTime: UU
            })
          }
        }), (0, MU.jsx)(KA, {
          label: UU("controller:settingsEmoteButton"),
          hint: UU("wheel" === XU.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: JA.F,
          value: XU.emoteButton,
          onChange: UU => {
            (0, NU.m)({
              emoteButton: UU
            })
          }
        }), (0, MU.jsx)(KA, {
          label: UU("controller:settingsAttackMode"),
          hint: UU("toggle" === XU.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: JA.n,
          value: XU.attackMode,
          onChange: UU => {
            (0, NU.m)({
              attackMode: UU
            })
          }
        }), (0, MU.jsx)(mA.e, {
          label: UU("controller:settingsLargePointer"),
          checked: XU.largePointer,
          onClick: UU => {
            (0, NU.m)({
              largePointer: UU
            })
          },
          circleInfoText: UU("controller:settingsLargePointerInfo")
        })]
      })
    };
    var oF = zU(9441);
    const DF = new class {
        constructor(UU) {
          this.router = UU, this.current = null
        }
        claim(UU, XU) {
          const zU = this.current;
          zU && (this.current = null, zU.release(), zU.onTakenOver());
          const cU = this.router.register({
              ...UU,
              name: "capture"
            }),
            yU = {
              release: cU,
              onTakenOver: XU
            };
          return this.current = yU, () => {
            this.current === yU && (this.current = null), cU()
          }
        }
      }(YU.d),
      EF = UU => {
        (0, fU.useEffect)((() => {
          if (!UU) return;
          const XU = UU();
          let zU = !1;
          const cU = () => {
              zU || (zU = !0, XU.onEnd())
            },
            yU = DF.claim({
              isActive: () => !zU,
              onFrame: UU => {
                XU.onFrame(UU, cU)
              }
            }, cU),
            QU = void 0 === XU.timeoutMs ? void 0 : window.setTimeout(cU, XU.timeoutMs),
            AU = UU => {
              "Escape" === UU.key && (UU.preventDefault(), UU.stopPropagation(), cU())
            };
          return window.addEventListener("keydown", AU, !0), () => {
            zU = !0, yU(), window.clearTimeout(QU), window.removeEventListener("keydown", AU, !0)
          }
        }), [UU])
      },
      YF = UU => {
        let {
          row: XU,
          capturing: zU,
          onCapture: cU,
          holdFillRef: QU,
          onRebind: AU,
          swapped: FU
        } = UU;
        const {
          t: oU
        } = (0, yU.I)();
        if ("fixed" === XU.kind) return (0, MU.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, MU.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, MU.jsx)("div", {
              className: "ControlName",
              children: oU(XU.labelKey)
            }), (0, MU.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, MU.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, MU.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, MU.jsx)(Ry, {
                    glyph: "move" === XU.stick ? (0, EU.m)() : (0, EU.l)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: DU
        } = XU, YU = (0, EU.h)(DU), NU = (0, EU.j)(DU), IU = YU !== NU && (0, EU.d)(DU, NU);
        return (0, MU.jsxs)("div", {
          className: HU()("ControlRow PadControlRow", {
            Capturing: zU
          }),
          children: [(0, MU.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, MU.jsx)("div", {
              className: "ControlName",
              children: oU(JA.i[DU])
            }), (0, MU.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!zU && (0, MU.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, MU.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    cU(DU)
                  },
                  children: (0, MU.jsx)(Ry, {
                    glyph: YU
                  })
                }), IU && (0, MU.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: oU("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    AU(DU, NU)
                  },
                  children: (0, MU.jsx)(CA.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), zU && (0, MU.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, MU.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, MU.jsx)("span", {
                    children: oU("controller:settingsCapturePrompt")
                  }), (0, MU.jsx)("div", {
                    ref: QU,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, MU.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    cU(null)
                  },
                  children: "\xd7"
                })]
              }), zU && (0, MU.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, MU.jsx)(lA.e, {
                  text: oU((0, EU.d)(DU, (0, EU.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: lA.f
                  }),
                  glyph: (0, EU.h)("menuBack")
                })
              })]
            })]
          }), FU.map((UU => (0, MU.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, MU.jsx)(lA.e, {
              text: oU("controller:settingsSwapNotice", {
                action: oU(JA.i[UU]),
                button: lA.f
              }),
              glyph: (0, EU.h)(UU)
            })
          }, UU))), zU && (0, MU.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${JA.v}ms`
            }
          })]
        })
      },
      NF = [],
      IF = UU => {
        let {
          layoutSetting: XU
        } = UU;
        const {
          t: zU
        } = (0, yU.I)(), cU = (0, NU.p)();
        (0, IU.C)();
        const QU = (0, fU.useRef)(null),
          [AU, FU] = (0, fU.useState)(null),
          oU = (0, fU.useCallback)(((UU, XU) => {
            const zU = (0, NU.i)().bindings;
            (0, EU.v)(UU, XU);
            const cU = (0, EU.o)(zU, UU);
            FU(cU.length > 0 ? {
              action: UU,
              swapped: cU
            } : null)
          }), []),
          [DU, aU] = ((UU, XU) => {
            const [zU, cU] = (0, fU.useState)(null), yU = (0, fU.useMemo)((() => zU ? () => {
              const yU = (0, EU.h)("menuBack"),
                QU = new JA.c(yU, (0, EU.h)("menuConfirm"), (UU => (0, EU.d)(zU, UU)));
              return {
                onFrame: (cU, AU) => {
                  var FU;
                  const oU = cU.frame.timestampMs,
                    DU = QU.update({
                      ...cU,
                      isDown: UU => (0, pU.I)(cU.frame.values, UU)
                    }, oU);
                  null === (FU = UU.current) || void 0 === FU || FU.style.setProperty("width", 100 * QU.getBindHoldProgress(oU) + "%"), DU && ("bind" === DU.kind ? (YU.d.consumeButton(DU.button), XU(zU, DU.button)) : YU.d.consumeButton(yU), AU())
                },
                onEnd: () => {
                  cU(null)
                },
                timeoutMs: JA.v
              }
            } : null), [zU, UU, XU]);
            return EF(yU), [zU, cU]
          })(QU, oU),
          tU = UU => {
            UU && FU(null), aU(UU)
          };
        (0, fU.useEffect)((() => {
          if (!AU) return;
          const UU = window.setTimeout((() => {
            FU(null)
          }), JA.pb);
          return () => {
            window.clearTimeout(UU)
          }
        }), [AU]);
        const gU = !cU.swapSticks && 0 === Object.keys(cU.bindings).length;
        return (0, MU.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, MU.jsx)("div", {
            className: "SliderText",
            children: zU("controller:settingsRemap")
          }), (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zU("controller:settingsRemapHint")
          }), (0, MU.jsx)(qA.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: gU,
            onClick: () => {
              tU(null), FU(null), (0, EU.x)()
            },
            children: zU("controller:settingsResetAll")
          }), XU, JA.kb.map(((UU, XU) => (0, MU.jsx)(oF.d, {
            title: zU(UU.titleKey),
            defaultOpen: 0 === XU,
            children: UU.rows.map((UU => (0, MU.jsx)(YF, {
              row: UU,
              capturing: "action" === UU.kind && UU.action === DU,
              onCapture: tU,
              holdFillRef: QU,
              onRebind: oU,
              swapped: "action" === UU.kind && (null === AU || void 0 === AU ? void 0 : AU.action) === UU.action ? AU.swapped : NF
            }, "action" === UU.kind ? UU.action : UU.labelKey)))
          }, UU.titleKey)))]
        })
      },
      pF = UU => {
        let {
          deadzone: XU,
          dotRef: zU,
          labelKey: cU
        } = UU;
        const {
          t: QU
        } = (0, yU.I)();
        return (0, MU.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, MU.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, MU.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * XU + "%",
                height: 100 * XU + "%"
              }
            }), (0, MU.jsx)("div", {
              ref: zU,
              className: "ControllerTesterDot"
            })]
          }), (0, MU.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: QU(cU)
          })]
        })
      },
      aF = (UU, XU, zU, cU) => {
        var yU;
        UU && (UU.style.left = 50 + 50 * Math.max(-1, Math.min(1, XU.x)) + "%", UU.style.top = 50 + 50 * Math.max(-1, Math.min(1, XU.y)) + "%", null === (yU = UU.parentElement) || void 0 === yU || yU.classList.toggle("Active", cU || Math.hypot(XU.x, XU.y) > zU))
      },
      tF = UU => {
        const XU = {
            deadzone: UU.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          zU = {
            deadzone: UU.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return UU.swapSticks ? {
          left: zU,
          right: XU
        } : {
          left: XU,
          right: zU
        }
      },
      gF = () => {
        const {
          t: UU
        } = (0, yU.I)(), XU = (() => {
          const [UU, XU] = (0, fU.useState)((() => AU.f.getActivePad()));
          return (0, ty.f)(AU.d, (() => {
            XU(AU.f.getActivePad())
          })), UU
        })(), zU = tF((0, NU.p)()), cU = (0, fU.useRef)(null), QU = (0, fU.useRef)(null), FU = (0, fU.useRef)([]), oU = (0, fU.useRef)(null), DU = (0, fU.useRef)(null), [IU, aU] = (UU => {
          const [XU, zU] = (0, fU.useState)(!1), cU = (0, fU.useMemo)((() => XU ? () => {
            const XU = (0, EU.h)("menuBack"),
              cU = new JA.g;
            return {
              onFrame: (zU, yU) => {
                var QU;
                const AU = cU.update({
                  pressed: zU.wasPressed(XU),
                  uD: zU.isHeld(XU)
                }, zU.frame.timestampMs);
                null === (QU = UU.current) || void 0 === QU || QU.style.setProperty("width", 100 * AU + "%"), AU >= 1 && (YU.d.consumeButton(XU), yU())
              },
              onEnd: () => {
                zU(!1)
              }
            }
          } : null), [XU, UU]);
          return EF(cU), [XU, zU]
        })(QU);
        (0, fU.useEffect)((() => {
          const UU = UU => {
            for (const zU of pU._) {
              const XU = (0, pU.n)(zU),
                cU = FU.current[XU];
              if (!cU) continue;
              const yU = UU.values[XU];
              cU.classList.toggle("Pressed", yU >= pU.w), (0, pU.L)(XU) && cU.style.setProperty("--trigger-fill", `${Math.round(100*yU)}%`)
            }
            const XU = tF((0, NU.i)());
            aF(oU.current, UU.leftStick, XU.left.deadzone, UU.values[(0, pU.n)("LS")] >= pU.w), aF(DU.current, UU.rightStick, XU.right.deadzone, UU.values[(0, pU.n)("RS")] >= pU.w)
          };
          return XU || UU((0, pU.t)()), AU.f.onFrame(UU)
        }), [XU]), (0, fU.useEffect)((() => {
          XU || aU(!1)
        }), [XU, aU]), (0, fU.useEffect)((() => {
          var UU;
          IU && (null === (UU = cU.current) || void 0 === UU || UU.scrollIntoView({
            block: "nearest"
          }))
        }), [IU]);
        const tU = JA.fb.find((UU => UU.value === (null === XU || void 0 === XU ? void 0 : XU.family)));
        return (0, MU.jsxs)("div", {
          ref: cU,
          className: HU()("SettingBox ControllerTester", {
            Testing: IU
          }),
          children: [(0, MU.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, MU.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [XU && (0, MU.jsx)("div", {
                children: UU("controller:settingsTesterFamily", {
                  family: tU ? UU(tU.labelKey) : XU.family
                })
              }), XU && (0, MU.jsx)("div", {
                className: "ControllerTesterPadId",
                children: XU.id
              }), !XU && (0, MU.jsx)("div", {
                children: UU("controller:settingsTesterNoPad")
              })]
            }), (XU || IU) && (0, MU.jsx)(qA.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                aU(!IU)
              },
              children: UU(IU ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), XU && !IU && (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsTesterHint")
          }), IU && (0, MU.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, MU.jsx)(lA.e, {
              text: UU("controller:settingsTesterTesting", {
                button: lA.f
              }),
              glyph: (0, EU.h)("menuBack")
            }), (0, MU.jsx)("div", {
              ref: QU,
              className: "ControllerTesterExitFill"
            })]
          }), (0, MU.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, MU.jsx)(pF, {
              deadzone: zU.left.deadzone,
              dotRef: oU,
              labelKey: zU.left.labelKey
            }), (0, MU.jsx)("div", {
              className: "ControllerTesterButtons",
              children: pU._.map((UU => {
                const zU = (0, pU.n)(UU);
                return (0, MU.jsx)("div", {
                  ref: UU => {
                    FU.current[zU] = UU
                  },
                  className: (0, pU.L)(zU) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, MU.jsx)(Ry, {
                    glyph: UU,
                    family: null === XU || void 0 === XU ? void 0 : XU.family
                  })
                }, UU)
              }))
            }), (0, MU.jsx)(pF, {
              deadzone: zU.right.deadzone,
              dotRef: DU,
              labelKey: zU.right.labelKey
            })]
          })]
        })
      },
      kF = (0, fU.memo)((function() {
        const {
          t: UU
        } = (0, yU.I)(), XU = (0, NU.p)(), [zU, cU] = (0, fU.useState)(!1);
        return (0, fU.useEffect)((() => {
          if (!zU) return;
          const UU = window.setTimeout((() => {
            cU(!1)
          }), JA.pb);
          return () => {
            window.clearTimeout(UU)
          }
        }), [zU]), (0, MU.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, MU.jsx)(jA, {
            text: UU("controller:settingsLook")
          }), (0, MU.jsx)(bA, {
            settingKey: "lookSensitivityX",
            label: UU("controller:settingsLookSensitivityX"),
            range: JA.mb,
            format: JA.O
          }), (0, MU.jsx)(bA, {
            settingKey: "lookSensitivityY",
            label: UU("controller:settingsLookSensitivityY"),
            range: JA.mb,
            format: JA.O
          }), (0, MU.jsx)(bA, {
            settingKey: "aimLookSensitivity",
            label: UU("controller:settingsAimLookSensitivity"),
            range: JA.j,
            format: JA.O
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsLookCurve"),
            hint: UU("controller:settingsLookCurveHint"),
            options: JA.ab,
            value: XU.lookCurve,
            onChange: UU => {
              (0, NU.m)({
                lookCurve: UU
              })
            }
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsInvertLookX"),
            checked: XU.invertLookX,
            onClick: UU => {
              (0, NU.m)({
                invertLookX: UU
              })
            }
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsInvertLookY"),
            checked: XU.invertLookY,
            onClick: UU => {
              (0, NU.m)({
                invertLookY: UU
              })
            }
          }), (0, MU.jsx)(bA, {
            settingKey: "lookDeadzone",
            label: UU("controller:settingsLookDeadzone"),
            range: JA.E,
            format: JA.H
          }), (0, MU.jsx)(QF, {}), (0, MU.jsx)(jA, {
            text: UU("controller:settingsMovement")
          }), (0, MU.jsx)(bA, {
            settingKey: "moveDeadzone",
            label: UU("controller:settingsMoveDeadzone"),
            range: JA.E,
            format: JA.H
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsAutoSprint"),
            checked: XU.autoSprint,
            onClick: UU => {
              (0, NU.m)({
                autoSprint: UU
              })
            },
            circleInfoText: UU("controller:settingsAutoSprintInfo")
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsSneak"),
            options: JA.nb,
            value: XU.sneakMode,
            onChange: UU => {
              (0, NU.m)({
                sneakMode: UU
              })
            }
          }), (0, MU.jsx)(jA, {
            text: UU("controller:settingsButtons")
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsPromptFamily"),
            options: JA.fb,
            value: XU.promptFamily,
            onChange: UU => {
              (0, NU.m)({
                promptFamily: UU
              })
            }
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsHideButtonHints"),
            checked: XU.hideButtonHints,
            onClick: UU => {
              (0, NU.m)({
                hideButtonHints: UU
              })
            }
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsVibration"),
            checked: XU.vibration,
            onClick: UU => {
              (0, NU.m)({
                vibration: UU
              }), UU && Qy("preview")
            }
          }), (0, MU.jsx)(bA, {
            settingKey: "cursorSpeed",
            label: UU("controller:settingsCursorSpeed"),
            range: JA.C,
            format: JA.O
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsCursorMagnetism"),
            checked: XU.cursorMagnetism,
            onClick: UU => {
              (0, NU.m)({
                cursorMagnetism: UU
              })
            }
          }), (0, MU.jsx)(mA.e, {
            label: UU("controller:settingsMenuBackToCategories"),
            checked: XU.menuBackToCategories,
            onClick: UU => {
              (0, NU.m)({
                menuBackToCategories: UU
              })
            }
          }), (0, MU.jsx)(IF, {
            layoutSetting: (0, MU.jsxs)(MU.Fragment, {
              children: [EU.f.map((zU => (0, MU.jsx)(mA.e, {
                label: UU(JA.W[zU]),
                checked: (0, EU.t)(zU, XU),
                onClick: UU => {
                  cU(!(0, EU.E)(zU, UU))
                }
              }, zU))), zU && (0, MU.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: UU("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, MU.jsx)(FF, {}), (0, MU.jsx)(jA, {
            text: UU("controller:settingsAlternatives")
          }), (0, MU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsAlternativesHint")
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsMenuNavigation"),
            hint: UU("controller:settingsMenuNavigationHint"),
            options: JA.bb,
            value: XU.menuNavigation,
            onChange: UU => {
              (0, NU.m)({
                menuNavigation: UU
              })
            }
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsInventoryNavigation"),
            hint: UU("controller:settingsInventoryNavigationHint"),
            options: JA.T,
            value: XU.inventoryNavigation,
            onChange: UU => {
              (0, NU.m)({
                inventoryNavigation: UU
              })
            }
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsQuickChat"),
            hint: UU("controller:settingsQuickChatHint"),
            options: JA.jb,
            value: XU.quickChat,
            onChange: UU => {
              (0, NU.m)({
                quickChat: UU
              })
            }
          }), (0, MU.jsx)(KA, {
            label: UU("controller:settingsLeaderboardButton"),
            hint: UU("controller:settingsLeaderboardButtonHint"),
            options: JA.Z,
            value: XU.leaderboardButton,
            onChange: UU => {
              (0, NU.m)({
                leaderboardButton: UU
              })
            }
          }), (0, MU.jsx)(jA, {
            text: UU("controller:settingsTester")
          }), (0, MU.jsx)(gF, {})]
        })
      }));
    (0, yU.e)(cU);
    for (const PF of (0, QU.k)()) PF.connected ? AU.f.handleConnectionEvent(PF) : AU.f.handleDisconnectionEvent(PF);
    const GF = () => null !== AU.f.getActivePad(),
      BF = () => yz.getState(),
      ZF = () => yz.isSteppingSlots(),
      RF = (UU, XU) => {
        const zU = hc.getFocused();
        hc.isActive() && zU && UU.contains(zU) && hc.setFocus(XU, {
          scroll: !1
        })
      }
  },
  8743: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      f: () => DU
    });
    var cU = zU(1470),
      yU = zU(1467);
    const QU = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      AU = "28de",
      FU = new Set(["1205"]),
      oU = (UU, XU) => {
        const zU = (0, cU.d)(UU);
        if ((null === zU || void 0 === zU ? void 0 : zU.vendor) === AU) return FU.has(zU.product) ? "steamdeck" : "xbox";
        if (zU && QU[zU.vendor]) return QU[zU.vendor];
        if ((0, yU.c)(UU)) return "nintendo";
        const oU = `${UU} ${null!==XU&&void 0!==XU?XU:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(oU) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(oU) ? "nintendo" : /steam deck/.test(oU) ? "steamdeck" : "xbox"
      },
      DU = UU => {
        var XU;
        return (null === (XU = (0, cU.d)(UU)) || void 0 === XU ? void 0 : XU.vendor) === AU
      }
  },
  8780: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      f: () => FU
    });
    var cU = zU(8740);
    const yU = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      QU = new Set(["capture", "gameplay"]),
      AU = ["Up", "Down", "Left", "Right"],
      FU = UU => AU.includes(UU),
      oU = .25;
    const DU = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.uD = new Array(cU.W).fill(!1), this.previousHeld = new Array(cU.W).fill(!1), this.consumedButtons = new Array(cU.W).fill(!1), this.suppressedReleases = new Array(cU.W).fill(!1), this.wakeOwned = new Array(cU.W).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, cU.t)()
      }
      register(UU) {
        return this.consumers.has(UU.name) && console.warn(`Controller consumer "${UU.name}" registered twice; the newer one replaces it.`), this.consumers.set(UU.name, UU), () => {
          var XU;
          this.consumers.get(UU.name) === UU && (this.activeName === UU.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (XU = this.peek) || void 0 === XU ? void 0 : XU.over) === UU.name && (this.peek = null), this.consumers.delete(UU.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(UU) {
        return this.uD[(0, cU.n)(UU)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.uD = new Array(cU.W).fill(!1), this.previousHeld = new Array(cU.W).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, cU.t)()
      }
      dispatch(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = UU, this.previousHeld = this.uD, this.uD = (0, cU.p)(UU.values, this.previousHeld);
        for (let QU = 0; QU < cU.W; QU++) this.suppressedReleases[QU] = !this.uD[QU] && this.consumedButtons[QU], this.uD[QU] || (this.consumedButtons[QU] = !1), this.wakeOwned[QU] && (this.uD[QU] ? (this.consumedButtons[QU] = !0, this.wakeOwned[QU] = !1) : UU.values[QU] < cU.U && (this.wakeOwned[QU] = !1));
        Math.hypot(UU.leftStick.x, UU.leftStick.y) < oU && (this.leftStickConsumed = !1), Math.hypot(UU.rightStick.x, UU.rightStick.y) < oU && (this.rightStickConsumed = !1);
        const yU = this.pickActive();
        if ((null === yU || void 0 === yU ? void 0 : yU.name) !== this.activeName) {
          var AU, FU, DU, EU, YU, NU;
          const UU = this.activeName,
            XU = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            zU = null !== (AU = null === yU || void 0 === yU || null === (FU = yU.peek) || void 0 === FU ? void 0 : FU.call(yU)) && void 0 !== AU ? AU : null,
            QU = null === UU && !!zU && !(null === (DU = this.consumers.get(zU.over)) || void 0 === DU || !DU.onPeekFrame),
            oU = zU && (zU.over === UU || QU) ? zU : null,
            IU = null !== this.peek && this.peek.over === (null === yU || void 0 === yU ? void 0 : yU.name) ? this.peek : null;
          this.deactivateCurrent(null !== oU, null !== IU), this.activeName = null !== (EU = null === yU || void 0 === yU ? void 0 : yU.name) && void 0 !== EU ? EU : null, null === UU || this.handOffPending || this.consumeAllHeld();
          const pU = null === (YU = null !== oU && void 0 !== oU ? oU : IU) || void 0 === YU ? void 0 : YU.stick;
          "left" === pU && XU.left ? this.leftStickConsumed = !1 : "right" === pU && XU.right && (this.rightStickConsumed = !1), this.peek = oU, yU || null === UU ? yU && (null === (NU = this.idleResume) || void 0 === NU ? void 0 : NU.name) === yU.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: UU,
            left: XU.left && this.leftStickConsumed,
            right: XU.right && this.rightStickConsumed
          }, yU && (this.idleResume = null);
          for (let yU = 0; yU < cU.W; yU++) this.previousHeld[yU] && !this.uD[yU] && (this.suppressedReleases[yU] = !0)
        }
        var IU, pU;
        (this.handOffPending = !1, yU) && (zU && !QU.has(yU.name) && this.consumeWakePress(yU), yU.onFrame(this.buildInput(UU, XU, zU)), this.peek && (null === (IU = this.consumers.get(this.peek.over)) || void 0 === IU || null === (pU = IU.onPeekFrame) || void 0 === pU || pU.call(IU, this.buildInput(UU, XU, !1, this.peek.stick))))
      }
      consumeWakePress(UU) {
        for (let yU = 0; yU < cU.W; yU++) {
          var XU, zU;
          const QU = cU._[yU];
          (null !== (XU = null === (zU = UU.wakePressActs) || void 0 === zU ? void 0 : zU.call(UU, QU)) && void 0 !== XU ? XU : AU.includes(QU)) || (this.uD[yU] ? this.consumedButtons[yU] = !0 : this.lastFrame.values[yU] >= cU.R && (this.wakeOwned[yU] = !0))
        }
      }
      pickActive() {
        for (const UU of yU) {
          const XU = this.consumers.get(UU);
          if (XU && XU.isActive()) return XU
        }
        return null
      }
      deactivateCurrent() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var zU, cU, yU, QU;
        this.activeName && (null === (zU = this.consumers.get(this.activeName)) || void 0 === zU || null === (cU = zU.onDeactivate) || void 0 === cU || cU.call(zU, UU));
        this.peek && !XU && (null === (yU = this.consumers.get(this.peek.over)) || void 0 === yU || null === (QU = yU.onDeactivate) || void 0 === QU || QU.call(yU, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let yU = 0; yU < cU.W; yU++) this.uD[yU] && (this.consumedButtons[yU] = !0);
        const {
          leftStick: XU,
          rightStick: zU
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== UU && (this.leftStickConsumed || Math.hypot(XU.x, XU.y) >= oU), this.rightStickConsumed = "right" !== UU && (this.rightStickConsumed || Math.hypot(zU.x, zU.y) >= oU)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(UU) {
        const XU = (0, cU.n)(UU);
        this.uD[XU] && (this.consumedButtons[XU] = !0)
      }
      buildInput(UU, XU, zU, yU) {
        const QU = this.uD,
          AU = this.previousHeld,
          FU = yU ? new Array(cU.W).fill(!0) : [...this.consumedButtons],
          oU = yU ? FU : [...this.suppressedReleases],
          DU = !this.leftStickConsumed && (!yU || "left" === yU),
          EU = !this.rightStickConsumed && (!yU || "right" === yU);
        return {
          frame: UU,
          dtMs: XU,
          isHeld: UU => {
            const XU = (0, cU.n)(UU);
            return QU[XU] && !FU[XU]
          },
          wasPressed: UU => {
            const XU = (0, cU.n)(UU);
            return QU[XU] && !AU[XU] && !FU[XU]
          },
          wasReleased: UU => {
            const XU = (0, cU.n)(UU);
            return !QU[XU] && AU[XU] && !oU[XU]
          },
          value: XU => {
            const zU = (0, cU.n)(XU);
            return FU[zU] ? 0 : UU.values[zU]
          },
          leftStick: DU ? UU.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: EU ? UU.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: zU
        }
      }
    }
  },
  8764: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU.d,
      g: () => YU.h,
      i: () => eU,
      l: () => CU,
      m: () => wU,
      p: () => qU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(1492),
      AU = zU(42),
      FU = zU(8767),
      oU = zU(8740),
      DU = zU(8758),
      EU = zU(8733),
      YU = zU(2082),
      NU = zU(8770);
    const IU = {
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
      pU = "controllerSettings",
      aU = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      tU = ["auto", ...FU.d],
      gU = (UU, XU) => "string" === typeof XU && UU.includes(XU),
      kU = UU => XU => "number" === typeof XU && Number.isFinite(XU) ? (0, NU.y)(XU, UU) : void 0,
      GU = UU => "boolean" === typeof UU ? UU : void 0,
      BU = UU => XU => gU(UU, XU) ? XU : void 0,
      ZU = {
        lookSensitivityX: kU(NU.mb),
        lookSensitivityY: kU(NU.mb),
        aimLookSensitivity: kU(NU.j),
        invertLookX: GU,
        invertLookY: GU,
        lookCurve: BU(oU.N),
        lookDeadzone: kU(NU.E),
        moveDeadzone: kU(NU.E),
        swapSticks: GU,
        autoSprint: GU,
        sneakMode: BU(["toggle", "hold"]),
        tapHoldTime: BU(["short", "medium", "long"]),
        attackMode: BU(["hold", "toggle"]),
        promptFamily: BU(tU),
        hideButtonHints: GU,
        vibration: GU,
        cursorSpeed: kU(NU.C),
        cursorMagnetism: GU,
        buttonRepeat: BU(oU.o),
        largePointer: GU,
        menuBackToCategories: GU,
        swapConfirmBack: GU,
        menuNavigation: BU(["hybrid", "focus", "cursor"]),
        inventoryNavigation: BU(["hybrid", "slot", "cursor"]),
        quickChat: BU(["wheel", "off"]),
        leaderboardButton: BU(["shop", "leaderboard"]),
        gyroAiming: GU,
        gyroSensitivity: kU(NU.S),
        gyroActivation: BU(["always", "aiming", "button"]),
        gyroButton: BU(oU._),
        emoteButton: BU(["tapHold", "wheel"])
      },
      RU = [{
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
      PU = UU => {
        const XU = {};
        if ("object" !== typeof UU || null === UU) return XU;
        for (const [zU, cU] of Object.entries(UU)) Object.prototype.hasOwnProperty.call(DU.g, zU) && gU(oU._, cU) && (XU[zU] = cU);
        return XU
      },
      WU = UU => {
        const XU = {};
        for (const zU of Object.keys(IU))("bindings" === zU ? Object.keys(UU.bindings).length > 0 : UU[zU] !== IU[zU]) && (XU[zU] = UU[zU]);
        0 !== Object.keys(XU).length ? AU.k.setItem(pU, XU) : AU.k.removeItem(pU)
      };
    let dU = (() => {
        const UU = AU.k.getItem(pU),
          XU = (UU => {
            const XU = "object" === typeof UU && null !== UU ? UU : {},
              zU = {
                ...IU,
                bindings: PU(XU.bindings)
              };
            for (const yU of Object.keys(ZU)) {
              const UU = ZU[yU](XU[yU]);
              void 0 !== UU && (zU[yU] = UU)
            }
            const cU = Object.keys(XU).filter((UU => !!Object.prototype.hasOwnProperty.call(IU, UU) && ("bindings" === UU ? "object" !== typeof XU.bindings || null === XU.bindings || Object.keys(XU.bindings).length !== Object.keys(zU.bindings).length : zU[UU] !== XU[UU])));
            return cU.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${cU.join(", ")}`), zU
          })(UU);
        return null !== UU && void 0 !== UU && WU(XU), XU
      })(),
      LU = {
        ...dU,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const UU = {},
            XU = new URLSearchParams(window.location.search);
          for (const {
              param: zU,
              key: cU
            }
            of RU) {
            const yU = ZU[cU](XU.get(zU));
            void 0 !== yU && (UU[cU] = yU)
          }
          return UU
        })()
      };
    const eU = () => LU,
      CU = () => {
        var UU, XU;
        const zU = eU().promptFamily;
        return "auto" !== zU ? zU : null !== (UU = null === (XU = EU.f.getActivePad()) || void 0 === XU ? void 0 : XU.family) && void 0 !== UU ? UU : "xbox"
      },
      wU = UU => {
        const XU = LU;
        dU = {
          ...dU,
          ...UU
        }, WU(dU), LU = {
          ...LU,
          ...UU
        }, (UU => {
          yU.k.UY(YU.h, LU), aU.some((XU => UU[XU] !== LU[XU])) && yU.k.UY(YU.d, LU)
        })(XU)
      },
      qU = () => {
        const [UU, XU] = (0, cU.useState)(LU);
        return (0, QU.f)(YU.h, XU), UU
      }
  },
  9226: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    const cU = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      yU = UU => cU.has(UU)
  },
  8733: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => aU.c,
      f: () => GU
    });
    var cU = zU(8740),
      yU = zU(8743);
    const QU = .1,
      AU = .3;
    class FU {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(UU, XU) {
        const zU = null === this.lastMs ? 0 : Math.min(Math.max(0, XU - this.lastMs), 100);
        this.lastMs = XU;
        const cU = Math.hypot(UU.x, UU.y);
        if (cU >= AU) return this.anchor = null, void(this.returning = !0);
        cU >= QU || (this.returning = !1);
        const yU = this.anchor;
        if (!yU || Math.hypot(UU.x - yU.x, UU.y - yU.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: UU.x,
          y: UU.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += zU, this.steadyMs < 1e3) return;
        const FU = Math.max(cU, Math.hypot(yU.x, yU.y));
        FU < QU ? this.deadzone = 0 : this.returning && (this.deadzone = FU + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(UU) {
        return Math.hypot(UU.x, UU.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : UU
      }
    }
    const oU = (UU, XU) => {
        var zU, cU;
        return null !== (zU = UU && (null === (cU = Object.getOwnPropertyDescriptor(UU, XU)) || void 0 === cU ? void 0 : cU.get)) && void 0 !== zU ? zU : null
      },
      DU = UU => {
        const XU = UU.vendorName;
        return "string" === typeof XU ? XU : void 0
      },
      EU = ((UU, XU) => {
        const zU = oU(UU, "index"),
          cU = oU(UU, "id"),
          yU = oU(UU, "connected"),
          QU = oU(UU, "mapping"),
          AU = oU(UU, "buttons"),
          FU = oU(UU, "axes"),
          EU = oU(XU, "pressed"),
          YU = oU(XU, "value");
        return zU && cU && yU && QU && AU && FU && EU && YU ? UU => {
          const XU = AU.call(UU),
            oU = FU.call(UU),
            NU = {
              index: Number(zU.call(UU)),
              id: String(cU.call(UU)),
              connected: !0 === yU.call(UU),
              mapping: String(QU.call(UU)),
              buttons: [],
              axes: [],
              vendorName: DU(UU)
            };
          for (let zU = 0; zU < XU.length; zU++) NU.buttons.push({
            pressed: !0 === EU.call(XU[zU]),
            value: Number(YU.call(XU[zU]))
          });
          for (let zU = 0; zU < oU.length; zU++) NU.axes.push(Number(oU[zU]));
          return NU
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      YU = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var NU = zU(1462),
      IU = zU(1467);
    const pU = UU => ({
      pressed: UU,
      value: UU ? 1 : 0
    });
    var aU = zU(2082);
    const tU = AU,
      gU = UU => {
        const XU = new Array(cU.W).fill(0);
        for (let zU = 0; zU < cU.W && zU < UU.buttons.length; zU++) {
          const yU = UU.buttons[zU];
          XU[zU] = yU.pressed && !(0, cU.L)(zU) ? Math.max(yU.value, cU.w) : yU.value
        }
        return XU
      },
      kU = (UU, XU) => {
        var zU, cU;
        return {
          x: null !== (zU = UU.axes[XU]) && void 0 !== zU ? zU : 0,
          y: null !== (cU = UU.axes[XU + 1]) && void 0 !== cU ? cU : 0
        }
      };
    const GU = new class {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EU;
        this.readGamepads = UU, this.requireTrustedPads = XU, this.nativeReader = zU, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = UU => {
          UU.isTrusted && this.trustedIndices.add(UU.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = UU => {
          this.trustedIndices.delete(UU.gamepad.index)
        }, this.LY = UU => {
          if (this.rafId = 0, !this.running) return;
          const XU = 0 === this.lastTimestampMs ? 16 : Math.min(100, UU - this.lastTimestampMs);
          this.lastTimestampMs = UU;
          try {
            this.poll(UU, XU)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.LY))
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
      onFrame(UU) {
        return this.frameListeners.add(UU), () => {
          this.frameListeners.delete(UU)
        }
      }
      onActivePadChanged(UU) {
        return this.connectionListeners.add(UU), () => {
          this.connectionListeners.delete(UU)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(UU) {
        return this.connectedListeners.add(UU), () => {
          this.connectedListeners.delete(UU)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const UU = this.readPads()[this.activeInfo.index],
          XU = UU ? this.readPad(UU) : null;
        return XU && XU.id === this.activeInfo.id ? UU : null
      }
      poll(UU, XU) {
        var zU, yU;
        const QU = this.readPads();
        let AU = null,
          oU = !1;
        const DU = [],
          EU = Math.max(QU.length, this.slots.length);
        for (let GU = 0; GU < EU; GU++) {
          var YU;
          const XU = GU < QU.length ? QU[GU] : null,
            zU = XU ? this.readPad(XU) : null;
          if (!zU || !zU.connected || !this.isUsable(zU)) {
            this.slots[GU] = null;
            continue
          }
          let yU = this.slots[GU];
          yU && yU.id === zU.id || (yU = {
            id: zU.id,
            uD: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new FU,
            rightRest: new FU
          }, this.slots[GU] = yU);
          const EU = kU(zU, 0),
            NU = kU(zU, 2);
          !yU.leftSettled && Math.hypot(EU.x, EU.y) < tU && (yU.leftSettled = !0), !yU.rightSettled && Math.hypot(NU.x, NU.y) < tU && (yU.rightSettled = !0), yU.leftRest.observe(EU, UU), yU.rightRest.observe(NU, UU);
          const IU = gU(zU),
            pU = (0, cU.p)(IU, yU.uD),
            aU = yU.uD,
            BU = pU.map(((UU, XU) => UU && !aU[XU]));
          yU.uD = pU;
          const ZU = {
            pad: zU,
            slot: yU,
            values: IU
          };
          GU === (null === (YU = this.activeInfo) || void 0 === YU ? void 0 : YU.index) && zU.id === this.activeInfo.id ? (AU = ZU, oU = BU.includes(!0)) : BU.includes(!0) && DU.push({
            polled: ZU,
            rose: BU
          })
        }
        const NU = this.slots.some((UU => null !== UU));
        if (NU !== this.anyPadConnected) {
          this.anyPadConnected = NU;
          for (const UU of this.connectedListeners) UU()
        }
        const IU = null !== (zU = null === (yU = AU) || void 0 === yU ? void 0 : yU.slot.uD) && void 0 !== zU ? zU : [],
          pU = oU ? void 0 : DU.find((UU => {
            let {
              rose: XU
            } = UU;
            return XU.some(((UU, XU) => UU && !IU[XU]))
          }));
        if (pU ? (AU = pU.polled, this.setActive(pU.polled.pad)) : this.activeInfo && !AU && this.setActive(null), !AU || !this.activeInfo) return;
        const aU = ((UU, XU) => {
          let {
            pad: zU,
            slot: yU,
            values: QU
          } = UU;
          const AU = (0, cU.t)(XU);
          return AU.values = QU, yU.leftSettled && (AU.leftStick = yU.leftRest.apply(kU(zU, 0))), yU.rightSettled && (AU.rightStick = yU.rightRest.apply(kU(zU, 2))), AU
        })(AU, UU);
        for (const cU of this.frameListeners) cU(aU, XU, this.activeInfo)
      }
      readPad(UU) {
        const XU = this.readSnapshot(UU);
        return XU && (0, IU.g)(XU) ? (UU => {
          const XU = XU => {
              var zU;
              return null !== (zU = UU.buttons[XU]) && void 0 !== zU ? zU : pU(!1)
            },
            zU = XU => {
              var zU;
              return null !== (zU = UU.axes[XU]) && void 0 !== zU ? zU : 0
            },
            cU = UU.axes.length > 9,
            yU = cU ? (UU => {
              const XU = 0 !== UU;
              return {
                up: XU && (UU >= -1 && UU < -.7 || UU >= .95 && UU <= 1),
                right: XU && UU >= -.75 && UU < -.1,
                down: XU && UU >= -.2 && UU < .45,
                left: XU && UU >= .4 && UU <= 1
              }
            })(zU(9)) : {
              up: zU(5) < -.5,
              down: zU(5) > .5,
              left: zU(4) < -.5,
              right: zU(4) > .5
            };
          return {
            ...UU,
            mapping: "standard",
            buttons: [XU(1), XU(2), XU(0), XU(3), XU(4), XU(5), XU(6), XU(7), XU(8), XU(9), XU(10), XU(11), pU(yU.up), pU(yU.down), pU(yU.left), pU(yU.right), XU(12)],
            axes: [zU(0), zU(1), zU(2), zU(cU ? 5 : 3)]
          }
        })(XU) : XU
      }
      readSnapshot(UU) {
        if (this.nativeReader) try {
          return this.nativeReader(UU)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (UU => {
          const XU = UU;
          return {
            index: XU.index,
            id: XU.id,
            connected: XU.connected,
            mapping: XU.mapping,
            buttons: Array.from(XU.buttons, (UU => ({
              pressed: UU.pressed,
              value: UU.value
            }))),
            axes: Array.from(XU.axes),
            vendorName: DU(UU)
          }
        })(UU)
      }
      isUsable(UU) {
        return !(0, NU.h)(UU.id) && ("standard" !== UU.mapping ? (this.warnedNonStandardIds.has(UU.id) || (this.warnedNonStandardIds.add(UU.id), console.warn(`Controller "${UU.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(UU.index))
      }
      setActive(UU) {
        this.activeInfo = UU ? {
          index: UU.index,
          id: UU.id,
          family: (0, yU.e)(UU.id, UU.vendorName)
        } : null;
        for (const XU of this.connectionListeners) XU(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (UU) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", UU)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.LY))
      }
    }((() => YU ? YU.call(navigator) : []), !0);
    GU.listenForConnections()
  },
  9301: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => AU,
      m: () => FU,
      n: () => yU
    });
    var cU = zU(9305);
    const yU = UU => {
        const XU = [];
        UU.holdingGun && XU.push({
          kind: "reload"
        }), UU.touchscreenActionButton && XU.push({
          kind: "touchButton",
          label: UU.touchscreenActionButton
        });
        for (const QU of null !== (zU = null === (yU = UU.customButtons) || void 0 === yU ? void 0 : yU.filter(cU.d)) && void 0 !== zU ? zU : []) {
          var zU, yU;
          XU.push({
            kind: "customButton",
            id: QU.id,
            icon: QU.icon,
            description: QU.description
          })
        }
        return XU
      },
      QU = UU => UU.length >= 2,
      AU = UU => "specialAction" !== UU.kind,
      FU = (UU, XU) => {
        if (null === UU || null === XU) return UU === XU;
        if (UU.kind !== XU.kind) return !1;
        switch (UU.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return UU.action === XU.action;
          case "customButton":
            return UU.id === XU.id && UU.icon === XU.icon;
          case "touchButton":
            return UU.label === XU.label
        }
      }
  },
  9231: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    const cU = {
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
  9294: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => IU,
      g: () => YU,
      k: () => pU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(1492),
      AU = zU(9301),
      FU = zU(9314);
    let oU = null;
    const DU = () => oU,
      EU = UU => {
        (0, AU.m)(oU, UU) || (oU = UU, yU.k.UY(FU.f, oU))
      },
      YU = () => {
        const [UU, XU] = (0, cU.useState)(DU);
        return (0, QU.f)(FU.f, XU), UU
      };
    let NU = !1;
    const IU = UU => {
        UU !== NU && (NU = UU, yU.k.UY(FU.i, UU))
      },
      pU = () => {
        const [UU, XU] = (0, cU.useState)(NU);
        return (0, QU.f)(FU.i, XU), UU
      }
  },
  9329: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      c: () => FU
    });
    var cU = zU(31),
      yU = zU(9314);
    let QU = !1;
    const AU = () => QU,
      FU = UU => {
        UU !== QU && (QU = UU, cU.k.UY(yU.k, QU))
      }
  },
  9320: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      g: () => oU
    });
    var cU = zU(31),
      yU = zU(9314);
    let QU = null,
      AU = 0;
    const FU = () => QU,
      oU = UU => {
        null === UU && null === QU || (QU = null === UU ? null : {
          id: ++AU,
          holdMs: UU
        }, cU.k.UY(yU.l, QU))
      }
  },
  9314: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => cU,
      i: () => yU,
      k: () => FU,
      l: () => oU,
      o: () => DU,
      q: () => AU
    });
    const cU = "controllerActionHintChanged",
      yU = "controllerActionWheelHintChanged",
      QU = "controllerOpenChat",
      AU = "controllerSneakToggledChanged",
      FU = "controllerAttackLatchedChanged",
      oU = "controllerDropStackHoldChanged",
      DU = "controllerPickBlockHintChanged"
  },
  9336: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      g: () => FU
    });
    var cU = zU(31),
      yU = zU(9314);
    let QU = !1;
    const AU = () => QU,
      FU = UU => {
        UU !== QU && (QU = UU, cU.k.UY(yU.o, QU))
      }
  },
  9404: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      f: () => FU
    });
    var cU = zU(31),
      yU = zU(9314);
    let QU = !1;
    const AU = () => QU,
      FU = UU => {
        UU !== QU && (QU = UU, cU.k.UY(yU.q, QU))
      }
  },
  9270: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      constructor() {
        this.downAtMs = null
      }
      update(UU, XU, zU, cU) {
        if (UU) return this.downAtMs = zU, null;
        if (null === this.downAtMs) return null;
        const yU = zU - this.downAtMs >= cU;
        return XU ? yU ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, yU ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8791: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      d: () => NU,
      h: () => FU,
      k: () => GU,
      o: () => kU
    });
    var cU = zU(42),
      yU = zU(8767),
      QU = zU(8740);
    const AU = (() => {
        try {
          return zU(8794)
        } catch {
          return null
        }
      })(),
      FU = [...QU._, "LeftStick", "RightStick"],
      oU = new Map,
      DU = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      EU = (new Set(Object.values(DU)), {
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
      YU = (UU, XU) => {
        var zU, cU;
        return null !== (zU = null === (cU = EU[DU[UU]]) || void 0 === cU ? void 0 : cU[XU]) && void 0 !== zU ? zU : 1
      },
      NU = (UU, XU) => {
        const zU = `./${DU[UU]}/${XU}.svg`;
        let cU = oU.get(zU);
        return void 0 === cU && (cU = AU ? AU(zU) : "", oU.set(zU, cU)), cU
      },
      IU = new Set,
      pU = [],
      aU = UU => {
        if (!IU.has(UU)) {
          IU.add(UU);
          for (const XU of FU) {
            const zU = NU(UU, XU);
            if (zU) {
              const UU = new Image;
              UU.crossOrigin = "anonymous", UU.src = zU, pU.push(UU)
            }
          }
        }
      },
      tU = "controllerGlyphFamily";
    let gU = null;
    const kU = UU => {
        UU !== gU && (gU = UU, cU.k.setItem(tU, UU), aU(UU))
      },
      GU = () => {
        const UU = cU.k.getItem(tU);
        (0, yU.h)(UU) && UU !== gU && (gU = UU, aU(UU))
      }
  },
  9431: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => HU,
      c: () => MU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(1492),
      AU = zU(8751),
      FU = zU(8733),
      oU = zU(8780),
      DU = zU(8764);
    const EU = {
        x: 0,
        y: 0,
        z: 0
      },
      YU = Math.PI / 180,
      NU = UU => Math.hypot(UU.x, UU.y, UU.z),
      IU = (UU, XU) => ({
        x: UU.x * XU,
        y: UU.y * XU,
        z: UU.z * XU
      }),
      pU = (UU, XU) => ({
        x: UU.x + XU.x,
        y: UU.y + XU.y,
        z: UU.z + XU.z
      }),
      aU = (UU, XU) => ({
        x: UU.x - XU.x,
        y: UU.y - XU.y,
        z: UU.z - XU.z
      }),
      tU = UU => {
        const XU = NU(UU);
        return 0 === XU ? EU : IU(UU, 1 / XU)
      },
      gU = UU => ({
        min: {
          ...UU
        },
        max: {
          ...UU
        }
      }),
      kU = (UU, XU) => ({
        min: {
          x: Math.min(UU.min.x, XU.x),
          y: Math.min(UU.min.y, XU.y),
          z: Math.min(UU.min.z, XU.z)
        },
        max: {
          x: Math.max(UU.max.x, XU.x),
          y: Math.max(UU.max.y, XU.y),
          z: Math.max(UU.max.z, XU.z)
        }
      }),
      GU = (UU, XU) => UU.max.x - UU.min.x <= XU && UU.max.y - UU.min.y <= XU && UU.max.z - UU.min.z <= XU;
    class BU {
      constructor() {
        this.bias = EU, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = EU, this.windowSec = 0
      }
      update(UU) {
        const XU = this.gyroRange ? kU(this.gyroRange, UU.gyro) : gU(UU.gyro),
          zU = UU.accel ? this.accelRange ? kU(this.accelRange, UU.accel) : gU(UU.accel) : null;
        if (!GU(XU, 1) || zU && !GU(zU, .01)) return void this.restartWindow(UU);
        if (this.gyroRange = XU, this.accelRange = zU, this.sum = pU(this.sum, IU(UU.gyro, UU.dtSec)), this.windowSec += UU.dtSec, this.windowSec < 1) return;
        const cU = IU(this.sum, 1 / this.windowSec);
        if (NU(cU) > 5) return;
        const yU = aU(cU, this.bias);
        let QU = 0;
        !this.calibrated || this.windowSec >= 3 ? QU = 1 : NU(yU) <= 1 && (QU = Math.min(1, UU.dtSec / 1)), this.bias = pU(this.bias, IU(yU, QU)), this.calibrated = this.calibrated || QU > 0
      }
      correct(UU) {
        return aU(UU, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = EU, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = EU, this.windowSec = 0
      }
      restartWindow(UU) {
        this.gyroRange = gU(UU.gyro), this.accelRange = UU.accel ? gU(UU.accel) : null, this.sum = EU, this.windowSec = 0
      }
    }
    class ZU {
      constructor() {
        this.down = null
      }
      update(UU, XU, zU) {
        const cU = tU(IU(XU, -1));
        if (!this.down) return this.down = cU, cU;
        const yU = IU(UU, YU * zU),
          QU = this.down,
          AU = {
            x: QU.x - (yU.y * QU.z - yU.z * QU.y),
            y: QU.y - (yU.z * QU.x - yU.x * QU.z),
            z: QU.z - (yU.x * QU.y - yU.y * QU.x)
          },
          FU = 0 === NU(cU) ? 0 : Math.min(1, zU / .25);
        var oU, DU;
        return this.down = tU((DU = FU, pU(oU = AU, IU(aU(cU, oU), DU)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class RU {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(UU, XU, zU) {
        const cU = Math.hypot(UU, XU),
          yU = Math.max(0, Math.min(1, (cU - 2) / 2)),
          QU = {
            yaw: UU * (1 - yU),
            pitch: XU * (1 - yU),
            dtSec: zU
          };
        for (this.entries.push(QU), this.windowSec += zU; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let AU = 0,
          FU = 0;
        for (const DU of this.entries) AU += DU.yaw * DU.dtSec, FU += DU.pitch * DU.dtSec;
        const oU = this.windowSec > 0 ? {
          yaw: AU / this.windowSec,
          pitch: FU / this.windowSec
        } : {
          yaw: QU.yaw,
          pitch: QU.pitch
        };
        return {
          yaw: UU * yU + oU.yaw,
          pitch: XU * yU + oU.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class PU {
      constructor() {
        this.calibrator = new BU, this.gravity = new ZU, this.smoother = new RU
      }
      process(UU, XU, zU) {
        const cU = Math.max(0, Math.min(.05, XU));
        this.calibrator.update({
          ...UU,
          dtSec: cU
        });
        const yU = this.calibrator.correct(UU.gyro);
        let QU = yU.y;
        "player" === zU && UU.accel && (QU = ((UU, XU) => {
          const zU = UU.y * XU.y + UU.z * XU.z;
          return -Math.sign(zU) * Math.min(1.41 * Math.abs(zU), Math.hypot(UU.y, UU.z))
        })(yU, this.gravity.update(yU, UU.accel, cU)));
        const AU = this.smoother.apply(QU, yU.x, cU),
          FU = ((UU, XU) => {
            const zU = Math.hypot(UU, XU);
            if (zU >= 1) return {
              yaw: UU,
              pitch: XU
            };
            const cU = zU / 1;
            return {
              yaw: UU * cU,
              pitch: XU * cU
            }
          })(AU.yaw, AU.pitch);
        return {
          yawDeg: FU.yaw * cU,
          pitchDeg: FU.pitch * cU
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
    const WU = (UU, XU) => {
      var zU, cU, yU;
      const QU = XU * YU,
        AU = null !== (zU = UU.beta) && void 0 !== zU ? zU : 0,
        FU = null !== (cU = UU.gamma) && void 0 !== cU ? cU : 0;
      return {
        x: AU * Math.cos(QU) - FU * Math.sin(QU),
        y: AU * Math.sin(QU) + FU * Math.cos(QU),
        z: null !== (yU = UU.alpha) && void 0 !== yU ? yU : 0
      }
    };
    var dU = zU(9438);
    class LU {
      constructor(UU, XU, zU) {
        this.hid = UU, this.sink = XU, this.onControllersChanged = zU, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = UU => {
          this.openController(UU.device).catch((UU => {
            console.warn("Could not open motion controller", UU)
          }))
        }, this.onDisconnect = UU => {
          this.opening.has(UU.device) && this.disconnectedWhileOpening.add(UU.device);
          const XU = this.controllers.get(UU.device);
          XU && (this.forget(XU), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const UU = await this.hid.getDevices();
        for (const XU of UU) await this.openController(XU).catch((UU => {
          console.warn("Could not open motion controller", UU)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const UU of [...this.controllers.values()]) this.forget(UU);
        this.onControllersChanged()
      }
      async request() {
        const UU = await this.hid.requestDevice({
          filters: dU.j
        });
        let XU = 0;
        for (const zU of UU) await this.openController(zU).catch((UU => {
          console.warn("Could not open motion controller", UU), XU++
        }));
        return XU
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((UU => null !== (0, dU.e)(UU.vendorId, UU.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((UU => UU.kind))
      }
      forget(UU) {
        UU.device.removeEventListener("inputreport", UU.onReport), this.controllers.get(UU.device) === UU && this.controllers.delete(UU.device)
      }
      async openController(UU) {
        const XU = (0, dU.e)(UU.vendorId, UU.productId);
        if (!XU || !this.running || this.controllers.has(UU) || this.opening.has(UU)) return;
        this.opening.add(UU);
        let zU = !1;
        try {
          UU.opened || await UU.open()
        } finally {
          this.opening.delete(UU), zU = this.disconnectedWhileOpening.delete(UU)
        }
        if (zU) return void UU.close().catch((UU => {
          console.debug("Could not close an unplugged motion controller", UU)
        }));
        if (!this.running) return;
        const cU = {
          device: UU,
          kind: XU,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: UU => {
            this.onReport(cU, UU)
          }
        };
        this.controllers.set(UU, cU), UU.addEventListener("inputreport", cU.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(cU)
        } catch (yU) {
          console.warn(`Could not turn on motion for ${XU}`, yU), this.controllers.get(UU) === cU && (this.forget(cU), this.onControllersChanged())
        }
      }
      async enableMotion(UU) {
        let {
          device: XU,
          kind: zU
        } = UU;
        if ((0, dU.h)(zU))
          for (const cU of dU.w[zU]) await XU.receiveFeatureReport(cU).catch((UU => {
            console.debug(`Motion controller feature report ${cU} unavailable`, UU)
          }));
        else
          for (let cU = 0; cU < 2; cU++)
            for (const {
                subcommand: UU,
                args: zU
              }
              of dU.A) await XU.sendReport(dU.E, (0, dU.b)(this.switchPacketCounter++, UU, zU)), await new Promise((UU => {
              setTimeout(UU, 60)
            }))
      }
      onReport(UU, XU) {
        const zU = (0, dU.q)(UU.kind, XU.reportId, XU.data, UU.device.productId);
        if (!zU) return;
        const cU = null === UU.lastEventMs ? 0 : (XU.timeStamp - UU.lastEventMs) / 1e3;
        UU.lastEventMs = XU.timeStamp;
        let yU = zU.dtSec;
        if (null !== yU && cU > 0 && (yU = Math.max(.001, Math.min(.017, cU / zU.readings.length))), null === yU && null !== zU.sensorClock && (0, dU.h)(UU.kind)) {
          const XU = (0, dU.s)(UU.kind, UU.lastClock, zU.sensorClock);
          UU.lastClock = zU.sensorClock, yU = 0 === XU ? null : XU
        }
        if (UU.lastReadingMs = XU.timeStamp, this.isPreferred(UU, XU.timeStamp))
          for (const AU of zU.readings) {
            var QU;
            this.sink(AU, null !== (QU = yU) && void 0 !== QU ? QU : cU, `hid${UU.openedOrder}`)
          }
      }
      isPreferred(UU, XU) {
        const zU = UU => 1e6 * dU.o[UU.kind] + UU.openedOrder;
        for (const cU of this.controllers.values())
          if (cU !== UU && XU - cU.lastReadingMs < 500 && zU(cU) < zU(UU)) return !1;
        return !0
      }
    }
    var eU = zU(97);
    const CU = () => DeviceMotionEvent,
      wU = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, eU.isMobile)(),
      qU = () => {
        var UU;
        const XU = null === (UU = window.screen.orientation) || void 0 === UU ? void 0 : UU.angle;
        return "number" === typeof XU ? XU : "number" === typeof window.orientation ? window.orientation : 0
      };
    class OU {
      constructor(UU, XU) {
        this.sink = UU, this.onStateChanged = XU, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((UU => {
            console.warn("Could not enable the motion sensor", UU)
          }))
        }, this.onMotion = UU => {
          const XU = UU.rotationRate;
          if (!XU || null === XU.alpha && null === XU.beta && null === XU.gamma) return;
          const zU = null === this.lastEventMs ? 0 : (UU.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = UU.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: WU(XU, qU()),
            accel: null
          }, zU, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof CU().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const UU = CU().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof UU) return void this.listen();
        let XU;
        this.disarmGestureRequest();
        try {
          XU = await UU.call(DeviceMotionEvent)
        } catch (zU) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), zU
        }
        this.wanted && ("granted" === XU ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(UU) {
        this.state !== UU && (this.state = UU, this.onStateChanged())
      }
    }
    const SU = "controllerGyroStatusChanged",
      rU = {
        zq: 0,
        Qq: 0
      },
      uU = UU => {
        var XU, zU;
        return "undefined" === typeof document || (null === (XU = null === (zU = document.featurePolicy) || void 0 === zU ? void 0 : zU.allowsFeature(UU)) || void 0 === XU || XU)
      };
    class fU {
      constructor() {
        this.processor = new PU, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = UU => {
          const XU = UU.gyroAiming && FU.f.hasConnectedPad();
          var zU, cU;
          XU !== this.phoneRunning && (this.phoneRunning = XU, XU ? null === (zU = this.phone) || void 0 === zU || zU.start() : null === (cU = this.phone) || void 0 === cU || cU.stop());
          if (UU.gyroAiming !== this.running) {
            var yU, QU;
            if (this.running = UU.gyroAiming, this.running) null === (yU = this.hid) || void 0 === yU || yU.start().catch((UU => {
              console.warn("Could not open motion controllers", UU)
            }));
            else null === (QU = this.hid) || void 0 === QU || QU.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          yU.k.UY(SU, this.getStatus())
        };
        const UU = (() => {
            var UU;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (UU = navigator.hid) && void 0 !== UU ? UU : null
          })(),
          XU = uU("hid");
        this.hidBlocked = null !== UU && !XU, this.hid = UU && XU ? new LU(UU, ((UU, XU, zU) => {
          this.lastHidReadingMs = performance.now(), this.feed(UU, XU, "player", zU)
        }), this.publishStatus) : null;
        const zU = uU("accelerometer") && uU("gyroscope");
        this.phoneBlocked = wU() && !zU, this.phone = wU() && zU ? new OU(((UU, XU, zU) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(UU, XU, "local", zU)
        }), this.publishStatus) : null, yU.k.subscribe(DU.g, this.syncWithSettings), FU.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, DU.i)()), this.publishStatus()
        })), this.syncWithSettings((0, DU.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var UU, XU, zU, cU;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (UU = null === (XU = this.hid) || void 0 === XU ? void 0 : XU.getConnectedKinds()) && void 0 !== UU ? UU : [],
          phoneMotion: null !== (zU = null === (cU = this.phone) || void 0 === cU ? void 0 : cU.getState()) && void 0 !== zU ? zU : "off",
          padConnected: FU.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var UU;
        await (null === (UU = this.phone) || void 0 === UU ? void 0 : UU.requestPermission())
      }
      drainLookDelta() {
        const UU = performance.now();
        UU - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = UU;
        const XU = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const zU = (0, DU.i)();
        return zU.gyroAiming && (UU => {
          let {
            activation: XU,
            isHeld: zU,
            useButton: cU,
            gyroButton: yU
          } = UU;
          return "always" === XU || zU("aiming" === XU ? cU : yU)
        })({
          activation: zU.gyroActivation,
          isHeld: UU => oU.d.isButtonHeld(UU),
          useButton: (0, AU.h)("use"),
          gyroButton: zU.gyroButton
        }) ? ((UU, XU) => ({
          zq: -UU.yawDeg * XU * YU,
          Qq: -UU.pitchDeg * XU * YU
        }))(XU, zU.gyroSensitivity) : rU
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(UU, XU) {
        this.feed(UU, XU, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(UU, XU, zU, cU) {
        this.source !== cU && (this.processor.reset(), this.source = cU);
        const yU = this.processor.process(UU, XU, zU);
        this.pendingYawDeg += yU.yawDeg, this.pendingPitchDeg += yU.pitchDeg
      }
    }
    let iU = null;
    const HU = () => (iU || (iU = new fU), iU),
      MU = () => {
        const [UU, XU] = (0, cU.useState)((() => HU().getStatus()));
        return (0, QU.f)(SU, XU), (0, cU.useEffect)((() => {
          XU(HU().getStatus())
        }), []), UU
      }
  },
  9438: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => RU,
      E: () => GU,
      b: () => ZU,
      e: () => oU,
      h: () => cU,
      j: () => FU,
      n: () => DU,
      o: () => EU,
      q: () => kU,
      s: () => tU,
      w: () => PU
    });
    const cU = UU => "dualShock4" === UU || "dualSense" === UU,
      yU = 1356,
      QU = 1406,
      AU = [{
        vendorId: yU,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: yU,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: yU,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: yU,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: yU,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: QU,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: QU,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: QU,
        productId: 8199,
        kind: "joyConRight"
      }],
      FU = AU.map((UU => {
        let {
          vendorId: XU,
          productId: zU
        } = UU;
        return {
          vendorId: XU,
          productId: zU
        }
      })),
      oU = (UU, XU) => {
        var zU, cU;
        return null !== (zU = null === (cU = AU.find((zU => zU.vendorId === UU && zU.productId === XU))) || void 0 === cU ? void 0 : cU.kind) && void 0 !== zU ? zU : null
      },
      DU = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      EU = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      YU = 2e3 / 32767,
      NU = 1 / 8192,
      IU = 936 / 13371,
      pU = (UU, XU, zU) => ({
        x: UU.getInt16(XU, !0) * zU,
        y: UU.getInt16(XU + 2, !0) * zU,
        z: UU.getInt16(XU + 4, !0) * zU
      }),
      aU = UU => 0 === UU.x && 0 === UU.y && 0 === UU.z,
      tU = (UU, XU, zU) => null === XU ? null : "dualShock4" === UU ? 16 * (zU - XU & 65535) / 3 / 1e6 : (zU - XU >>> 0) / 3 / 1e6,
      gU = (UU, XU) => "joyConRight" === XU ? {
        x: UU.y,
        y: -UU.z,
        z: -UU.x
      } : {
        x: -UU.y,
        y: UU.z,
        z: -UU.x
      },
      kU = (UU, XU, zU, yU) => cU(UU) ? ((UU, XU, zU, cU) => {
        const yU = ((UU, XU, zU) => "dualShock4" === UU ? 1 === XU && zU >= 63 ? 0 : 17 === XU && zU >= 65 ? 2 : null : 1 === XU && zU >= 62 ? 0 : 49 === XU && zU >= 63 ? 1 : null)(UU, XU, zU.byteLength);
        if (null === yU) return null;
        if (2976 === cU && 1 === XU && 0 !== (4 & zU.getUint8(30))) return null;
        const QU = yU + ("dualShock4" === UU ? 12 : 15),
          AU = pU(zU, QU, YU),
          FU = pU(zU, QU + 6, NU);
        return aU(AU) && aU(FU) ? null : {
          readings: [{
            gyro: AU,
            accel: FU
          }],
          dtSec: null,
          sensorClock: "dualShock4" === UU ? zU.getUint16(yU + 9, !0) : zU.getUint32(yU + 27, !0)
        }
      })(UU, XU, zU, yU) : ((UU, XU, zU) => {
        if (48 !== XU && 49 !== XU || zU.byteLength < 48) return null;
        const cU = [];
        for (let yU = 0; yU < 3; yU++) {
          const XU = pU(zU, 12 + 12 * yU, 244e-6),
            QU = pU(zU, 18 + 12 * yU, IU);
          if (aU(QU) && aU(XU)) return null;
          cU.push({
            gyro: gU(QU, UU),
            accel: gU(XU, UU)
          })
        }
        return {
          readings: cU,
          dtSec: .005,
          sensorClock: null
        }
      })(UU, XU, zU),
      GU = 1,
      BU = [0, 1, 64, 64, 0, 1, 64, 64],
      ZU = (UU, XU, zU) => new Uint8Array([15 & UU, ...BU, XU, ...zU]),
      RU = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      PU = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8783: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => fU,
      f: () => nU,
      g: () => RU,
      k: () => IU.n,
      m: () => MU,
      q: () => HU,
      t: () => PU,
      u: () => vU,
      v: () => IU.x,
      y: () => IU.F,
      C: () => mU,
      E: () => IU.K,
      I: () => OU
    });
    var cU = zU(61),
      yU = zU(27),
      QU = zU(31),
      AU = zU(1492),
      FU = zU(1310),
      oU = zU(8764),
      DU = zU(8785),
      EU = zU(8743),
      YU = zU(8733),
      NU = zU(8791),
      IU = zU(1444),
      pU = zU(8740),
      aU = zU(9226),
      tU = zU(4786),
      gU = zU(114);
    class kU {
      constructor(UU) {
        this.deps = UU, this.pads = new Map
      }
      observe(UU, XU, zU) {
        if (!this.deps.touchOnly) return;
        const cU = this.pads.get(XU.id);
        "proven" !== cU && zU ? (this.pads.set(XU.id, "proven"), void 0 !== cU && this.deps.onReleased(XU, UU, UU.timestampMs - cU)) : void 0 === cU && (this.pads.set(XU.id, UU.timestampMs), this.deps.onHeld(XU, UU)), this.deps.setMayHide("proven" === this.pads.get(XU.id))
      }
    }
    const GU = UU => UU.values.flatMap(((UU, XU) => UU >= pU.R ? [String(XU)] : [])).join(",") || "none",
      BU = (UU, XU, cU, yU, QU) => {
        const AU = (0, IU.f)(),
          FU = document.visibilityState,
          oU = document.hasFocus();
        Promise.all([Promise.resolve().then((() => zU(3221))), Promise.resolve().then((() => zU(1325))), Promise.resolve().then((() => zU(142)))]).then((zU => {
          let [{
            logControllerHudHoldToGtag: DU
          }, {
            logClientLineFromEveryPage: EU
          }, {
            siteUsed: YU
          }] = zU;
          DU(UU, XU.family, null === QU ? void 0 : Math.round(QU / 1e3)), EU(`touch HUD pad ${UU}`, ZU(XU, cU, yU, QU, AU, FU, oU, YU))
        }), (() => {}))
      },
      ZU = (UU, XU, zU, cU, yU, QU, AU, FU) => {
        var oU;
        const DU = {
          pad_id: UU.id.slice(0, 120),
          pad_family: UU.family,
          pad_mapping: null !== (oU = null === zU || void 0 === zU ? void 0 : zU.mapping) && void 0 !== oU ? oU : "unread",
          pad_axes: zU ? String(zU.axes.length) : "unread",
          pad_buttons: zU ? String(zU.buttons.length) : "unread",
          pressed: GU(XU),
          ms_since_touch: null === yU ? "none" : String(Math.round(XU.timestampMs - yU)),
          visibility: QU,
          focused: String(AU),
          site: FU
        };
        return null !== cU && (DU.held_ms = String(Math.round(cU))), DU
      };
    const RU = UU => !UU.repeat && !(0, aU.c)(UU.key),
      PU = "PadHidesCursor";
    let WU = !1;
    const dU = UU => {
        UU !== WU && (WU = UU, document.documentElement.classList.toggle(PU, UU))
      },
      LU = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(UU) {
          let XU = !1,
            zU = !1;
          UU.values.forEach(((UU, cU) => {
            const yU = UU >= (this.buttonsDown[cU] ? pU.U : pU.R);
            yU && !this.buttonsDown[cU] && (XU = !0, zU = !0), this.buttonsDown[cU] = yU
          }));
          return [UU.leftStick, UU.rightStick].forEach(((UU, cU) => {
            const yU = this.stickAnchors[cU];
            Math.hypot(UU.x, UU.y) < (yU ? pU.U : .3) ? this.stickAnchors[cU] = null : (!yU || Math.hypot(UU.x - yU.x, UU.y - yU.y) >= .3) && (this.stickAnchors[cU] = {
              x: UU.x,
              y: UU.y
            }, XU = !0, zU ||= !yU)
          })), XU && (this.lastActivityMs = UU.timestampMs), this.onlyMovedOn = XU && !zU, XU
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(UU) {
          return !(UU - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((UU => UU)) || this.stickAnchors.some((UU => null !== UU)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((UU => null !== UU))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      eU = (CU = () => YU.f.getActiveGamepad(), new kU({
        touchOnly: "touchOnly" === (0, gU.c)(),
        setMayHide: IU.B,
        onHeld: (UU, XU) => {
          BU("uD", UU, XU, CU(), null)
        },
        onReleased: (UU, XU, zU) => {
          BU("released", UU, XU, CU(), zU)
        }
      }));
    var CU;
    let wU = null,
      qU = !1;
    const OU = () => qU;
    let SU = null,
      rU = !1,
      uU = null;
    const fU = () => uU;
    let iU = !1;
    const HU = (UU, XU) => {
        if (!LU.observe(UU)) return !1;
        if (eU.observe(UU, XU, LU.isStickOffRest()), iU && LU.wasOnlyMoveOn() && !(0, IU.n)()) return !1;
        iU = !1, qU = !1;
        const zU = !(0, IU.n)();
        return zU && (wU = UU, uU = !WU && rU && SU ? {
          ...SU
        } : null), rU = !1, (0, IU.x)("gamepad"), dU(!0), (0, NU.o)((0, oU.l)()), zU
      },
      MU = UU => !(0, IU.n)() || UU === wU,
      vU = () => {
        LU.reset()
      },
      VU = () => {
        const UU = yU.e.get("activeInputDevice"),
          XU = "gamepad" === UU ? YU.f.getActivePad() : null;
        return {
          device: UU,
          inGame: (0, FU.w)(),
          padMovesMouse: null !== XU && (0, EU.f)(XU.id)
        }
      },
      sU = UU => {
        document.pointerLockElement ? SU = null : (SU ??= {
          x: 0,
          y: 0
        }, SU.x = UU.clientX, SU.y = UU.clientY)
      },
      nU = () => {
        const UU = new tU.b,
          XU = XU => {
            UU.reset(), iU = !1, (0, IU.x)(XU)
          },
          zU = UU => {
            if (UU.isTrusted) {
              if (UU instanceof KeyboardEvent) {
                if ((0, IU.t)(UU), !RU(UU)) return;
                qU = !0
              }
              if (UU instanceof PointerEvent && "touch" === UU.pointerType) return SU = null, void XU("touch");
              UU instanceof PointerEvent && (sU(UU), rU = !0), ("pointerdown" !== UU.type || (UU => {
                let {
                  device: XU,
                  inGame: zU,
                  padMovesMouse: cU
                } = UU;
                return !("gamepad" === XU && cU && zU)
              })(VU())) && XU("keyboardMouse")
            }
          },
          cU = UU => {
            UU.isTrusted && (SU = null, XU("touch"))
          },
          AU = UU => {
            UU.isTrusted && "touch" !== UU.pointerType && !UU.relatedTarget && (SU = null)
          },
          FU = zU => {
            if (!zU.isTrusted || "touch" === zU.pointerType) return;
            sU(zU);
            const cU = zU.movementX || 0,
              QU = zU.movementY || 0;
            if (0 === cU && 0 === QU) return;
            if (rU = !0, dU(!1), "keyboardMouse" === yU.e.get("activeInputDevice")) return;
            const AU = LU.isHolding(zU.timeStamp),
              FU = VU(),
              oU = (UU => {
                let {
                  device: XU,
                  inGame: zU,
                  padMovesMouse: cU,
                  padHolding: yU
                } = UU;
                return ("gamepad" !== XU || !cU) && "keyboardMouse" !== XU && (zU || !yU)
              })({
                ...FU,
                inGame: FU.inGame && (0, DU.e)(),
                padHolding: AU
              });
            oU && UU.add(cU, QU, zU.timeStamp) && (XU("keyboardMouse"), iU = LU.isStickOffRest())
          },
          oU = UU => {
            dU("gamepad" === UU)
          },
          EU = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", zU, EU), window.addEventListener("pointerdown", zU, EU), window.addEventListener("wheel", zU, EU), window.addEventListener("touchstart", cU, EU), window.addEventListener("pointermove", FU, EU), window.addEventListener("pointerout", AU, EU);
        const YU = QU.k.subscribe("appManagerUpdated|activeInputDevice", oU);
        return oU(yU.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", zU, EU), window.removeEventListener("pointerdown", zU, EU), window.removeEventListener("wheel", zU, EU), window.removeEventListener("touchstart", cU, EU), window.removeEventListener("pointermove", FU, EU), window.removeEventListener("pointerout", AU, EU), SU = null, QU.k.unsubscribe(YU), dU(!1)
        }
      },
      mU = () => {
        const [UU, XU] = (0, cU.useState)(oU.l);
        return (0, AU.f)(oU.d, (() => {
          XU((0, oU.l)())
        })), (0, AU.f)(YU.d, (() => {
          XU((0, oU.l)())
        })), UU
      }
  },
  8767: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      h: () => yU
    });
    const cU = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      yU = UU => cU.includes(UU)
  },
  9258: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU,
      h: () => oU,
      k: () => FU
    });
    var cU = zU(1492),
      yU = zU(1457);
    const QU = "controllerInventoryCursorChanged",
      AU = {
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
      FU = () => {
        var UU, XU;
        return (0, cU.j)(QU, null !== (UU = null === (XU = (0, yU.e)()) || void 0 === XU ? void 0 : XU.getInventoryCursorState()) && void 0 !== UU ? UU : AU)
      },
      oU = () => {
        var UU, XU;
        return null !== (UU = null === (XU = (0, yU.e)()) || void 0 === XU ? void 0 : XU.isPadSteppingSlots()) && void 0 !== UU && UU
      }
  },
  9256: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      g: () => FU,
      i: () => oU,
      k: () => AU,
      m: () => QU,
      p: () => EU,
      t: () => YU
    });
    let cU = null;
    const yU = new Set,
      QU = UU => (cU = UU, () => {
        if (cU === UU) {
          cU = null;
          for (const UU of yU) UU()
        }
      }),
      AU = UU => (yU.add(UU), () => {
        yU.delete(UU)
      }),
      FU = () => cU,
      oU = () => null !== cU;
    let DU = null;
    const EU = UU => {
        DU = UU
      },
      YU = () => {
        const UU = DU;
        return DU = null, UU
      },
      NU = (UU, XU) => {
        var zU, cU;
        return null !== (zU = null !== (cU = UU.find((UU => UU.element === XU))) && void 0 !== cU ? cU : UU.find((UU => UU.element.contains(XU)))) && void 0 !== zU ? zU : null
      }
  },
  9261: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => AU
    });
    var cU = zU(61);
    const yU = new WeakMap,
      QU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = yU.get(UU)) || void 0 === zU ? void 0 : zU.current) && void 0 !== XU ? XU : null
      },
      AU = (UU, XU) => {
        const zU = (0, cU.useRef)(XU);
        zU.current = XU;
        const QU = (0, cU.useRef)(null);
        (0, cU.useEffect)((() => {
          const XU = UU.current,
            cU = QU.current;
          XU !== cU && (cU && yU.get(cU) === zU && yU.delete(cU), QU.current = XU, XU && yU.set(XU, zU))
        })), (0, cU.useEffect)((() => () => {
          const UU = QU.current;
          UU && yU.get(UU) === zU && yU.delete(UU), QU.current = null
        }), [])
      }
  },
  9395: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => DU,
      i: () => YU,
      m: () => EU,
      o: () => oU,
      s: () => IU
    });
    var cU = zU(31),
      yU = zU(2082),
      QU = zU(1457),
      AU = zU(1444);
    const FU = UU => {
        var XU, zU;
        return (0, AU.n)() && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getGlyphForNoaAction(UU)) && void 0 !== XU ? XU : null
      },
      oU = "controllerGlyph:",
      DU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconName(UU)) && void 0 !== XU ? XU : `${oU}xbox/${UU}`
      },
      EU = UU => UU.startsWith(oU),
      YU = UU => {
        var XU, zU;
        return EU(UU) && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconUrl(UU)) && void 0 !== XU ? XU : null
      },
      NU = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", AU.c, yU.d, yU.c],
      IU = UU => {
        const XU = NU.map((XU => cU.k.subscribe(XU, UU)));
        return () => {
          for (const UU of XU) cU.k.unsubscribe(UU)
        }
      }
  },
  9245: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => cU
    });
    const cU = "controllerOpenKeyboard",
      yU = "controllerKeyboardVisible"
  },
  8785: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU,
      e: () => EU,
      g: () => oU,
      k: () => FU
    });
    var cU = zU(27),
      yU = zU(1680),
      QU = zU(1808);
    const AU = new Map,
      FU = (UU, XU) => (AU.has(UU) && console.warn(`Gameplay blocker "${UU}" registered twice; the newer one replaces it.`), AU.set(UU, XU), () => {
        AU.get(UU) === XU && AU.delete(UU)
      }),
      oU = () => (0, QU.e)(document.activeElement),
      DU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [XU, zU] of AU)
          if (!UU.includes(XU) && zU()) return XU;
        return null
      },
      EU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === cU.e.get("gameState") && (!(0, yU.p)() && (!oU() && null === DU(UU)))
      }
  },
  8740: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => GU,
      D: () => wU,
      H: () => BU,
      I: () => gU,
      L: () => tU,
      N: () => DU,
      R: () => NU,
      U: () => IU,
      W: () => yU,
      _: () => cU,
      b: () => OU,
      bb: () => RU,
      c: () => CU,
      db: () => eU,
      eb: () => qU,
      g: () => EU,
      gb: () => ZU,
      j: () => oU,
      n: () => FU,
      o: () => WU,
      p: () => kU,
      s: () => PU,
      t: () => QU,
      w: () => YU
    });
    const cU = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      yU = cU.length,
      QU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(yU).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: UU
        }
      },
      AU = Object.fromEntries(cU.map(((UU, XU) => [UU, XU]))),
      FU = UU => AU[UU],
      oU = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const cU = Math.hypot(UU.x, UU.y);
        if (cU <= XU) return {
          x: 0,
          y: 0
        };
        const yU = Math.min(1, (cU - XU) / Math.max(1e-4, zU - XU));
        return {
          x: UU.x / cU * yU,
          y: UU.y / cU * yU
        }
      },
      DU = ["exponential", "linear", "boost"],
      EU = (UU, XU) => {
        const zU = Math.hypot(UU.x, UU.y);
        if (0 === zU) return {
          x: 0,
          y: 0
        };
        const cU = ((UU, XU) => {
          const zU = Math.max(0, Math.min(1, UU));
          return "linear" === XU ? zU : zU * zU
        })(zU, XU);
        return {
          x: UU.x / zU * cU,
          y: UU.y / zU * cU
        }
      },
      YU = .5,
      NU = .3,
      IU = .2,
      pU = FU("LT"),
      aU = FU("RT"),
      tU = UU => UU === pU || UU === aU,
      gU = (UU, XU) => {
        const zU = FU(XU);
        return tU(zU) ? UU[zU] > .35 : UU[zU] >= YU
      },
      kU = (UU, XU) => UU.map(((UU, zU) => tU(zU) ? XU[zU] ? UU > .35 : UU >= .55 : UU >= YU)),
      GU = ["Up", "Down", "Left", "Right"],
      BU = UU => GU.includes(UU),
      ZU = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(UU.x, UU.y) < XU ? null : Math.abs(UU.x) > Math.abs(UU.y) ? UU.x > 0 ? "Right" : "Left" : UU.y > 0 ? "Down" : "Up"
      },
      RU = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      PU = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      WU = ["default", "slow", "off"],
      dU = 800,
      LU = 250,
      eU = (UU, XU) => "off" === XU ? null : "slow" === XU ? {
        initialDelayMs: Math.max(UU.initialDelayMs, dU),
        intervalMs: Math.max(UU.intervalMs, LU)
      } : UU;
    class CU {
      constructor(UU) {
        this.readTiming = UU, this.uD = !1, this.timing = null, this.nextFireMs = 0
      }
      update(UU, XU) {
        return UU ? this.uD ? !!(this.timing && XU >= this.nextFireMs) && (this.nextFireMs = XU + this.timing.intervalMs, !0) : (this.uD = !0, this.timing = this.readTiming(), this.nextFireMs = XU + (null !== (zU = null === (cU = this.timing) || void 0 === cU ? void 0 : cU.initialDelayMs) && void 0 !== zU ? zU : 0), !0) : (this.uD = !1, !1);
        var zU, cU
      }
      reset() {
        this.uD = !1
      }
    }
    const wU = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      qU = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class OU {
      constructor(UU) {
        this.timer = UU, this.direction = null
      }
      update(UU, XU) {
        return UU !== this.direction && (this.timer.reset(), this.direction = UU), this.timer.update(null !== UU, XU) ? UU : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9264: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      e: () => QU
    });
    let cU = -1 / 0;
    const yU = () => {
        cU = performance.now()
      },
      QU = UU => performance.now() - cU < UU
  },
  9228: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    var cU = zU(8764),
      yU = zU(8740);
    const QU = UU => (0, yU.db)(UU, (0, cU.i)().buttonRepeat),
      AU = UU => new yU.c((() => QU(UU)))
  },
  8774: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      f: () => QU,
      h: () => FU
    });
    var cU = zU(31),
      yU = zU(8764);
    const QU = (UU, XU) => "OpenShop" === UU ? "shop" === XU : "OpenLobbyLeaderboard" !== UU || "leaderboard" === XU;
    let AU = !1;
    const FU = UU => {
        UU !== AU && (AU = UU, cU.k.UY(yU.d, (0, yU.i)()))
      },
      oU = () => ((UU, XU) => "shop" === UU && XU ? "shop" : "leaderboard")((0, yU.i)().leaderboardButton, AU)
  },
  8770: (UU, XU, zU) => {
    zU.d(XU, {
      C: () => oU,
      E: () => FU,
      F: () => ZU,
      H: () => NU,
      K: () => IU,
      O: () => YU,
      P: () => BU,
      S: () => DU,
      T: () => gU,
      W: () => LU,
      Z: () => GU,
      ab: () => aU,
      bb: () => tU,
      c: () => rU,
      fb: () => pU,
      g: () => fU,
      i: () => eU,
      j: () => AU,
      jb: () => kU,
      kb: () => qU,
      mb: () => QU,
      n: () => dU,
      nb: () => RU,
      pb: () => uU,
      qb: () => WU,
      r: () => PU,
      t: () => OU,
      v: () => SU,
      y: () => EU
    });
    var cU = zU(8758),
      yU = zU(8740);
    const QU = {
        min: 25,
        max: 500,
        step: 5
      },
      AU = {
        min: 25,
        max: 100,
        step: 5
      },
      FU = {
        min: 0,
        max: .4,
        step: .01
      },
      oU = {
        min: 25,
        max: 300,
        step: 5
      },
      DU = {
        min: .5,
        max: 6,
        step: .1
      },
      EU = (UU, XU) => {
        if (!Number.isFinite(UU)) return XU.min;
        const zU = XU.min + Math.round((UU - XU.min) / XU.step) * XU.step,
          cU = Math.min(XU.max, Math.max(XU.min, zU));
        return Math.round(1e3 * cU) / 1e3
      },
      YU = UU => `${Math.round(UU)}%`,
      NU = UU => YU(100 * UU),
      IU = UU => `${UU.toFixed(1)}\xd7`,
      pU = [{
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
      aU = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      tU = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      gU = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      kU = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      GU = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      BU = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      ZU = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      RU = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      PU = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      WU = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      dU = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      LU = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      eU = {
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
      CU = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      wU = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      qU = cU.e.map((UU => {
        let {
          group: XU,
          actions: zU
        } = UU;
        const cU = zU.map((UU => ({
          kind: "action",
          action: UU
        })));
        return {
          titleKey: CU[XU],
          rows: "gameplay" === XU ? [...wU, ...cU] : cU
        }
      })),
      OU = yU._.filter((UU => "Home" !== UU)),
      SU = 1e4;
    class rU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = UU, this.openButton = XU, this.accepts = zU, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(UU, XU) {
        var zU;
        this.updateIgnored(UU, XU);
        const cU = XU - (null !== (zU = this.startMs) && void 0 !== zU ? zU : XU) >= 250;
        for (const yU of OU)
          if (yU !== this.cancelButton && cU && !this.ignoredUntilMs.has(yU) && UU.wasPressed(yU) && this.accepts(yU)) return {
            kind: "bind",
            button: yU
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (UU.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = XU
        }
        return null === this.cancelDownAtMs ? null : UU.isHeld(this.cancelButton) && XU - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : UU.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(UU) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (UU - this.cancelDownAtMs) / 700)
      }
      updateIgnored(UU, XU) {
        if (null === this.startMs) {
          this.startMs = XU;
          for (const XU of OU) UU.isDown(XU) && this.ignoredUntilMs.set(XU, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, XU + 250)
        }
        for (const [zU, cU] of this.ignoredUntilMs) {
          const yU = UU.isDown(zU);
          cU === 1 / 0 ? yU || zU !== this.openButton ? yU || this.ignoredUntilMs.delete(zU) : this.ignoredUntilMs.set(zU, XU + 250) : XU >= cU ? this.ignoredUntilMs.delete(zU) : yU && this.ignoredUntilMs.set(zU, 1 / 0)
        }
      }
    }
    const uU = 6e3;
    class fU {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(UU, XU) {
        let {
          pressed: zU,
          uD: cU
        } = UU;
        if (zU) {
          const UU = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== UU && XU - UU < 1500 ? [...this.pressesAtMs, XU] : [XU], this.pressesAtMs.length >= 3) return 1
        }
        return cU ? (this.downAtMs ??= XU, Math.min(1, (XU - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  5588: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU
    });
    var cU = zU(61);
    const yU = new WeakMap,
      QU = UU => {
        var XU;
        const zU = UU.closest("[data-pad-slider]");
        return zU && null !== (XU = yU.get(zU)) && void 0 !== XU ? XU : null
      },
      AU = (UU, XU) => {
        const zU = (0, cU.useRef)(XU);
        zU.current = XU, (0, cU.useEffect)((() => {
          if (UU.current) return ((UU, XU) => (yU.set(UU, XU), () => {
            yU.get(UU) === XU && yU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              zU.current.adjust(UU)
            },
            setFraction: UU => {
              zU.current.setFraction(UU)
            },
            endDrag: () => {
              zU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  9383: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => AU,
      j: () => QU,
      k: () => cU,
      m: () => FU,
      q: () => DU,
      t: () => EU
    });
    const cU = "controllerActionWheelOpen",
      yU = "controllerActionWheelAim",
      QU = "controllerActionWheelCommit",
      AU = "controllerActionWheelClose",
      FU = "controllerActionWheelPick";
    let oU = !1;
    const DU = () => oU,
      EU = UU => {
        oU = UU
      }
  },
  9381: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      e: () => yU
    });
    let cU = 0;
    const yU = () => {
        cU++
      },
      QU = () => cU
  },
  9273: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      g: () => yU,
      k: () => AU,
      m: () => QU,
      p: () => cU,
      t: () => DU
    });
    const cU = "controllerQuickChatWheelOpen",
      yU = "controllerQuickChatWheelAim",
      QU = "controllerQuickChatWheelCommit",
      AU = "controllerQuickChatWheelClose";
    let FU = !1;
    const oU = () => FU,
      DU = UU => {
        FU = UU
      }
  },
  9291: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      f: () => yU
    });
    var cU = zU(31);
    const yU = "localBlockBroken";

    function QU() {
      return {
        onPlayerChangeBlock(UU, XU, zU, QU, AU, FU) {
          "Air" === FU && cU.k.UY(yU)
        }
      }
    }
  },
  9449: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => oU
    });
    var cU = zU(27),
      yU = zU(1360),
      QU = zU(97);
    const AU = {
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

    function FU() {
      return (0, QU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const oU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, XU) {
        var zU;
        if (!this.deps.enabled()) return;
        const cU = AU[UU],
          yU = null !== XU && void 0 !== XU ? XU : cU.pattern;
        if (null === yU) return void console.warn("No vibration pattern for", UU);
        const QU = this.deps.now();
        QU - this.lastAnyAt < 40 && cU.priority < this.playingPriority || QU - (null !== (zU = this.lastAt.get(UU)) && void 0 !== zU ? zU : -1 / 0) < cU.minGapMs || QU < this.playingUntil && cU.priority < this.playingPriority || (this.lastAt.set(UU, QU), this.lastAnyAt = QU, this.playingUntil = QU + yU.reduce(((UU, XU) => UU + XU), 0), this.playingPriority = cU.priority, this.deps.vibrate(yU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => FU() && cU.e.get("isTouchScreen") && cU.e.get("clientEscMenuOptions").vibration && !(0, yU.c)()
    })
  },
  9287: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(1272);

    function yU(UU, XU) {
      var zU, yU;
      try {
        const zU = (0, cU.d)();
        if ("function" === typeof zU) {
          const cU = new zU(UU, XU);
          if (cU.type === UU) return cU
        }
      } catch {}
      const QU = document.createEvent("Event");
      return QU.initEvent(UU, null !== (zU = null === XU || void 0 === XU ? void 0 : XU.bubbles) && void 0 !== zU && zU, null !== (yU = null === XU || void 0 === XU ? void 0 : XU.cancelable) && void 0 !== yU && yU), QU
    }
  },
  9339: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(9348),
      yU = zU(646),
      QU = zU(142);

    function AU(UU) {
      var XU, zU;
      if ((0, yU.P)(UU)) return !0;
      const AU = null !== (XU = null === (zU = QU.siteUsedData[QU.siteUsed]) || void 0 === zU ? void 0 : zU.adConfig.showRewardedAds) && void 0 !== XU && XU;
      for (const yU in UU) {
        const XU = UU[yU];
        if (null !== XU && void 0 !== XU && XU.items)
          for (const UU in XU.items)
            if ((0, cU.o)(XU.items[UU], AU)) return !1
      }
      return !0
    }
  },
  9348: (UU, XU, zU) => {
    function cU(UU, XU) {
      return !UU.hidden && (XU || !UU.isRewardedAd)
    }

    function yU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function QU(UU, XU) {
      var zU;
      if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const zU of UU.userInput.dropdownOptions)
          if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
      }
      return UU.cost
    }

    function AU(UU, XU, zU) {
      var cU;
      const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
      return UU.filter((UU => !yU.includes(UU)))
    }
    zU.d(XU, {
      d: () => QU,
      h: () => yU,
      l: () => AU,
      o: () => cU
    })
  },
  9392: () => {},
  8798: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8802: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8808: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8817: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8825: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8834: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8841: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8848: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8854: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8862: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8871: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8873: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8879: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8888: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8890: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8893: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8899: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8901: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8907: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8913: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8917: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8920: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8927: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8932: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8938: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8945: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8947: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8953: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8961: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8966: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8971: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8980: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8989: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8993: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8995: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9e3: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9004: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9010: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9017: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9024: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9026: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9033: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9035: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9040: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9049: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9053: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9057: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9059: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9066: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9073: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9078: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9086: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9095: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9099: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9106: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9112: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9121: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9123: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9128: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9137: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9140: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9148: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9155: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9164: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9166: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9170: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9174: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9181: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9188: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9193: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9201: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9207: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9213: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9216: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9219: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9224: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
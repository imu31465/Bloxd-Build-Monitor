export const id = 33;
export const ids = [33];
export const modules = {
  8805: (MM, rM, iM) => {
    var OM = {
      "./nintendo/A.svg": 8814,
      "./nintendo/B.svg": 8819,
      "./nintendo/Down.svg": 8828,
      "./nintendo/Home.svg": 8837,
      "./nintendo/LB.svg": 8839,
      "./nintendo/LS.svg": 8847,
      "./nintendo/LT.svg": 8856,
      "./nintendo/Left.svg": 8862,
      "./nintendo/LeftStick.svg": 8867,
      "./nintendo/Menu.svg": 8874,
      "./nintendo/RB.svg": 8878,
      "./nintendo/RS.svg": 8887,
      "./nintendo/RT.svg": 8893,
      "./nintendo/Right.svg": 8896,
      "./nintendo/RightStick.svg": 8901,
      "./nintendo/Up.svg": 8904,
      "./nintendo/View.svg": 8908,
      "./nintendo/X.svg": 8911,
      "./nintendo/Y.svg": 8920,
      "./playstation/A.svg": 8925,
      "./playstation/B.svg": 8928,
      "./playstation/Down.svg": 8935,
      "./playstation/Home.svg": 8938,
      "./playstation/LB.svg": 8942,
      "./playstation/LS.svg": 8944,
      "./playstation/LT.svg": 8947,
      "./playstation/Left.svg": 8954,
      "./playstation/LeftStick.svg": 8961,
      "./playstation/Menu.svg": 8964,
      "./playstation/RB.svg": 8968,
      "./playstation/RS.svg": 8971,
      "./playstation/RT.svg": 8977,
      "./playstation/Right.svg": 8983,
      "./playstation/RightStick.svg": 8992,
      "./playstation/Up.svg": 8998,
      "./playstation/View.svg": 9e3,
      "./playstation/X.svg": 9003,
      "./playstation/Y.svg": 9006,
      "./steamdeck/A.svg": 9015,
      "./steamdeck/B.svg": 9022,
      "./steamdeck/Down.svg": 9028,
      "./steamdeck/Home.svg": 9035,
      "./steamdeck/LB.svg": 9040,
      "./steamdeck/LS.svg": 9046,
      "./steamdeck/LT.svg": 9049,
      "./steamdeck/Left.svg": 9054,
      "./steamdeck/LeftStick.svg": 9063,
      "./steamdeck/Menu.svg": 9065,
      "./steamdeck/RB.svg": 9073,
      "./steamdeck/RS.svg": 9079,
      "./steamdeck/RT.svg": 9085,
      "./steamdeck/Right.svg": 9093,
      "./steamdeck/RightStick.svg": 9102,
      "./steamdeck/Up.svg": 9107,
      "./steamdeck/View.svg": 9116,
      "./steamdeck/X.svg": 9125,
      "./steamdeck/Y.svg": 9133,
      "./xbox/A.svg": 9142,
      "./xbox/B.svg": 9151,
      "./xbox/Down.svg": 9160,
      "./xbox/Home.svg": 9163,
      "./xbox/LB.svg": 9172,
      "./xbox/LS.svg": 9175,
      "./xbox/LT.svg": 9182,
      "./xbox/Left.svg": 9189,
      "./xbox/LeftStick.svg": 9192,
      "./xbox/Menu.svg": 9197,
      "./xbox/RB.svg": 9202,
      "./xbox/RS.svg": 9204,
      "./xbox/RT.svg": 9213,
      "./xbox/Right.svg": 9221,
      "./xbox/RightStick.svg": 9228,
      "./xbox/Up.svg": 9237,
      "./xbox/View.svg": 9240,
      "./xbox/X.svg": 9245,
      "./xbox/Y.svg": 9251
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 8805
  },
  9383: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => WM,
      g: () => gM,
      i: () => uM
    });
    var OM = iM(44),
      SM = iM(4923),
      jM = iM(1142),
      aM = iM(1516),
      PM = iM(22),
      nM = iM(3831),
      QM = iM(2367),
      zM = iM(1242),
      LM = iM(2762),
      mM = iM(2039),
      HM = iM(2084),
      hM = iM(1188),
      JM = iM(19),
      dM = iM(1717),
      yM = iM(1116),
      lM = iM.n(yM),
      EM = iM(9392),
      UM = iM(9400),
      GM = iM(9403),
      CM = iM(9324),
      eM = iM(9408),
      bM = iM(3495),
      wM = (iM(9410), iM(1303));
    let tM = null;

    function gM() {
      return null !== tM
    }

    function uM() {
      return "pad" === tM
    }

    function RM() {
      return "inGame" === JM.d.get("gameState") && !(0, dM.r)()
    }

    function pM(MM) {
      return (0, UM.x)(MM, zM.o, UM.h, UM.j, UM.l)
    }
    const WM = (0, OM.memo)((function() {
      const {
        t: MM
      } = (0, hM.A)(), {
        userContext: rM
      } = (0, jM.b)(), [iM, JM] = (0, OM.useState)(null), [yM, gM] = (0, OM.useState)(null), uM = (0, OM.useRef)(null), WM = (0, OM.useCallback)((MM => {
        uM.current = MM, gM(MM)
      }), []), sM = (0, OM.useRef)(0), DM = (0, OM.useRef)(null), kM = (0, OM.useRef)({
        x: 0,
        y: 0
      }), [ZM, oM] = (0, OM.useState)(0), fM = (0, OM.useMemo)((() => function(MM) {
        const rM = [];
        for (let OM = 0; OM < zM.o; OM++) {
          var iM;
          rM.push(null !== (iM = MM[OM]) && void 0 !== iM ? iM : null)
        }
        return rM
      }((0, LM.g)(rM.getPlayerCosmetics().emote))), [rM, ZM]);
      (0, HM.c)("cosmeticsUpdated", (MM => {
        MM.some((MM => MM.local && "emote" === MM.Ii)) && oM((MM => MM + 1))
      }));
      const YM = (0, OM.useRef)(!1),
        NM = (0, OM.useCallback)((function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === MM && (0, GM.f)(), YM.current = rM, kM.current = {
            x: 0,
            y: 0
          }, WM(null), JM(MM)
        }), [WM]),
        AM = (0, OM.useCallback)((() => {
          JM(null), WM(null), kM.current = {
            x: 0,
            y: 0
          }
        }), [WM]),
        xM = (0, OM.useCallback)((MM => {
          if (Date.now() < sM.current) return;
          const rM = (0, QM.e)(MM),
            iM = !!rM.holdUntilMove,
            OM = iM ? 600 : Math.ceil(1e3 * rM.animation.animation_length / QM.b) + 200;
          sM.current = Date.now() + OM, DM.current = MM, mM.gameBridge.send("playEmote", MM), mM.gameBridge.send("applyTemporaryThirdPerson", iM ? {} : {
            durationMs: OM
          })
        }), []);
      (0, aM.d)("requestToggleEmoteWheel", (() => {
        null === iM ? RM() && NM("click") : AM()
      })), (0, aM.d)("requestEmoteWheelHoldOpen", (() => {
        null === iM && RM() && NM((0, EM.e)() ? "hold" : "click")
      })), (0, aM.d)("requestEmoteWheelPadOpen", (MM => {
        null !== iM || !RM() || (0, CM.c)() || (0, eM.s)() || NM("pad", MM)
      })), (0, aM.d)("requestEmoteRepeatLast", (() => {
        if (null !== iM || !RM() || (0, CM.c)() || (0, eM.s)()) return;
        const MM = DM.current;
        null !== MM && fM.includes(MM) ? xM(MM) : NM("pad", !0)
      }));
      const vM = () => {
        const MM = uM.current,
          rM = null !== MM ? fM[MM] : null;
        null !== rM && "pad" === iM && Date.now() < sM.current || (AM(), null !== rM && xM(rM))
      };
      (0, aM.d)("emoteWheelPadAim", (MM => {
        if ("pad" !== iM) return;
        const rM = (0, UM.I)(MM, zM.o, uM.current);
        WM(null !== rM && null !== fM[rM] ? rM : null)
      })), (0, aM.d)("requestEmoteWheelPadCommit", (MM => {
        "pad" !== iM || MM && YM.current || vM()
      })), (0, aM.d)("appManagerUpdated|activeInputDevice", (MM => {
        null !== iM && "pad" === iM !== ("gamepad" === MM) && AM()
      })), (0, OM.useLayoutEffect)((() => (tM = iM, (0, nM.q)("emoteWheel", "pad" === iM), PM.i.Tz(nM.l), () => {
        tM = null, (0, nM.q)("emoteWheel", !1), PM.i.Tz(nM.l)
      })), [iM]), (0, aM.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === iM && vM()
      })), (0, aM.d)("requestEmoteWheelClose", (() => {
        null !== iM && AM()
      })), (0, aM.d)("appManagerUpdated|gameState", (MM => {
        "inGame" !== MM && AM()
      }));
      const FM = () => {
        (0, dM.r)() && AM()
      };
      if ((0, aM.d)("appManagerUpdated|openEverythingMenuName", FM), (0, aM.d)("appManagerUpdated|openInGameMenuName", FM), (0, aM.d)("pointerLockUpdate", (MM => {
          MM || "hold" !== iM || AM()
        })), (0, OM.useEffect)((() => {
          if (null === iM) return;
          const MM = MM => {
            "Escape" === MM.key && (MM.stopImmediatePropagation(), MM.preventDefault(), AM())
          };
          return document.addEventListener("keydown", MM, !0), () => {
            document.removeEventListener("keydown", MM, !0)
          }
        }), [iM, AM]), (0, SM.c)(!0, "click" === iM, "EmoteWheelOverlay"), (0, OM.useEffect)((() => {
          if ("hold" === iM) return mM.gameBridge.send("holdEmoteWheel", !0), () => {
            mM.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [iM]), (0, OM.useEffect)((() => {
          if ("hold" !== iM) return;
          const MM = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            rM = UM.u * MM,
            OM = UM.r * MM,
            SM = MM => {
              let iM = kM.current.x + MM.movementX,
                SM = kM.current.y + MM.movementY;
              const jM = Math.hypot(iM, SM);
              if (jM > rM) {
                const MM = rM / jM;
                iM *= MM, SM *= MM
              }
              kM.current = {
                x: iM,
                y: SM
              }, WM(function(MM, rM, iM, OM) {
                if (Math.hypot(MM, rM) < iM) return null;
                const SM = (0, UM.z)(MM, rM, zM.o);
                return null === OM[SM] ? null : SM
              }(iM, SM, OM, fM))
            };
          return document.addEventListener("mousemove", SM), () => {
            document.removeEventListener("mousemove", SM)
          }
        }), [iM, fM, WM]), null === iM) return null;
      const BM = "hold" === iM || "pad" === iM,
        XM = null !== yM ? fM[yM] : null,
        IM = null !== XM ? (0, QM.e)(XM).displayName : MM("emotes:pickEmote");
      return (0, wM.jsx)("div", {
        className: lM()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === iM
        }),
        onMouseDown: MM => {
          MM.target === MM.currentTarget && AM()
        },
        children: (0, wM.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * UM.u + "rem",
            height: 2 * UM.u + "rem"
          },
          children: [(0, wM.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${UM.n} ${UM.n}`,
            children: [fM.map(((rM, iM) => {
              const OM = null !== rM,
                SM = BM && iM === yM;
              return (0, wM.jsx)("path", {
                d: pM(iM),
                className: lM()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: SM,
                  EmoteWheelWedgeDisabled: !OM
                }),
                onClick: MM => {
                  MM.stopPropagation(), null !== rM && (MM => {
                    AM(), xM(MM)
                  })(rM)
                },
                "aria-label": null !== rM ? (0, QM.e)(rM).displayName : MM("emotes:emptySlot")
              }, iM)
            })), (0, wM.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: UM.h,
              cy: UM.h,
              r: UM.l
            }), (0, wM.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: UM.h,
              cy: UM.h,
              r: UM.j
            }), BM && null !== yM && (0, wM.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: pM(yM)
            })]
          }), fM.map(((MM, rM) => {
            const iM = null !== MM,
              OM = BM && rM === yM,
              SM = (0, UM.C)(rM, zM.o),
              jM = UM.e * Math.cos(SM),
              aM = UM.e * Math.sin(SM);
            return (0, wM.jsx)("div", {
              className: lM()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: OM,
                EmoteWheelSlotIconDisabled: !iM
              }),
              style: {
                left: `calc(50% + ${jM}rem)`,
                top: `calc(50% + ${aM}rem)`,
                backgroundImage: iM ? `url(${(0,bM.c)("emote",MM)})` : void 0
              },
              "aria-hidden": !0
            }, rM)
          })), (0, wM.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: IM
          })]
        })
      })
    }))
  },
  9498: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => tM,
      f: () => RM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(2690),
      aM = iM(3815);
    const PM = 6,
      nM = 4,
      QM = ["HudMove-inventory", "HudLocked-inventory"];

    function zM(MM) {
      let {
        left: rM,
        right: iM,
        height: OM,
        rowTop: SM,
        besideBottom: jM,
        obstacles: aM
      } = MM;
      const QM = aM.filter((MM => MM.left < iM + PM && MM.right > rM - PM));
      let zM = jM;
      for (let PM = 0; PM <= QM.length; PM++) {
        const MM = QM.filter((MM => MM.top < zM + nM && MM.bottom > zM - OM - nM));
        if (0 === MM.length) break;
        zM = Math.min(...MM.map((MM => MM.top))) - nM
      }
      return zM === jM ? null : Math.ceil(SM - zM)
    }

    function LM(MM) {
      return Array.from(MM.children).filter((MM => !MM.classList.contains("HotBarRow")))
    }

    function mM(MM) {
      return function(MM) {
        const rM = [],
          iM = (MM, OM) => {
            const SM = MM.getBoundingClientRect();
            if (SM.width > 0 && SM.height > 0) rM.push(MM);
            else if (OM < 2)
              for (const rM of Array.from(MM.children)) iM(rM, OM + 1)
          };
        for (const OM of MM) iM(OM, 0);
        return rM
      }(LM(MM).flatMap((MM => MM.classList.contains("AuraBarWrapper") ? [] : MM.classList.contains("BottomScreenStatBarList") ? Array.from(MM.children) : [MM])))
    }

    function HM(MM, rM) {
      var iM;
      const OM = null === (iM = MM.querySelector(":scope > .AuraBarWrapper")) || void 0 === iM ? void 0 : iM.getBoundingClientRect();
      return (OM && OM.height > 0 ? OM.top : rM) - nM
    }
    const hM = ".BottomScreenMessage, [role='status']";

    function JM(MM, rM, iM, OM, SM) {
      const jM = MM => MM.map((MM => MM.getBoundingClientRect())),
        aM = zM({
          ...iM,
          obstacles: jM(iM.obstacles.filter((MM => !MM.matches(hM))))
        }),
        PM = rM.ownerDocument.defaultView,
        nM = `${null===PM||void 0===PM?void 0:PM.innerWidth}x${null===PM||void 0===PM?void 0:PM.innerHeight}:${OM}:${Math.round(iM.rowTop)}`,
        QM = MM.get(rM),
        LM = (null === QM || void 0 === QM ? void 0 : QM.at) === nM ? (mM = QM.rise, HM = aM, null === mM ? HM : null === HM ? mM : Math.max(mM, HM)) : aM;
      var mM, HM;
      const JM = zM({
        ...iM,
        besideBottom: null === LM ? iM.besideBottom : iM.rowTop - LM,
        obstacles: jM(iM.obstacles)
      });
      return SM && MM.set(rM, {
        at: nM,
        rise: LM
      }), null !== JM && void 0 !== JM ? JM : LM
    }

    function dM(MM, rM, iM, OM) {
      MM.classList.toggle(rM, null !== OM), null === OM ? MM.style.removeProperty(iM) : MM.style.setProperty(iM, `${OM}px`)
    }
    const yM = new WeakMap,
      lM = new WeakMap,
      EM = "(orientation: portrait) and (max-width: 600px)";

    function UM(MM, rM) {
      const iM = MM.getBoundingClientRect();
      if (0 === iM.width) return null;
      const OM = [iM, ...Array.from(MM.children).filter((MM => !(MM => rM.contains(MM.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(MM))).map((MM => MM.getBoundingClientRect())).filter((MM => MM.width > 0))];
      return {
        left: Math.min(...OM.map((MM => MM.left))),
        top: Math.min(...OM.map((MM => MM.top))),
        right: Math.max(...OM.map((MM => MM.right))),
        bottom: Math.max(...OM.map((MM => MM.bottom)))
      }
    }

    function GM(MM) {
      let {
        slotsLeft: rM,
        slotsRight: iM,
        width: OM,
        zoneRight: SM
      } = MM;
      const jM = Math.max(0, Math.floor(iM - rM - OM));
      return null === SM ? 0 : Math.min(jM, Math.max(0, Math.ceil(SM + PM - rM)))
    }

    function CM(MM) {
      var rM;
      const iM = MM.getBoundingClientRect();
      if (0 === iM.width) return null;
      const OM = null === (rM = MM.parentElement) || void 0 === rM ? void 0 : rM.getBoundingClientRect();
      return OM && OM.width > 0 ? Math.min(iM.right, OM.left + OM.width * eM) : iM.right
    }
    const eM = .35,
      bM = new WeakMap,
      wM = new WeakMap;

    function tM(MM) {
      gM(MM) && gM(MM),
        function(MM) {
          var rM, iM;
          const OM = MM.documentElement.classList;
          if (!OM.contains("TouchHotbar") || !OM.contains("TouchHotbarKeysAbove") || QM.some((MM => OM.contains(MM))) || !1 !== (null === (rM = MM.defaultView) || void 0 === rM || null === (iM = rM.matchMedia) || void 0 === iM ? void 0 : iM.call(rM, EM).matches)) return;
          const SM = MM.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            jM = null === SM || void 0 === SM ? void 0 : SM.closest(".BottomMiddleElements"),
            aM = null === SM || void 0 === SM ? void 0 : SM.parentElement;
          if (!SM || !jM || !aM || jM.classList.contains("TouchInventoryOpen") || SM.querySelector("[data-pressing]")) return;
          const PM = UM(SM, OM),
            nM = aM.getBoundingClientRect().top,
            zM = PM && JM(yM, jM, {
              left: PM.left,
              right: PM.right,
              height: PM.bottom - PM.top,
              rowTop: nM,
              besideBottom: HM(jM, nM),
              obstacles: mM(jM).filter((MM => !MM.classList.contains("BottomScreenMessage")))
            }, `${Math.round(PM.left)}:${Math.round(PM.right-PM.left)}x${Math.round(PM.bottom-PM.top)}`, !0);
          lM.has(jM) && lM.get(jM) === zM || (dM(jM, "KeysAboveUp", "--touch-keys-above-rise", zM), lM.set(jM, zM))
        }(MM)
    }

    function gM(MM) {
      var rM, iM, OM, SM;
      const jM = MM.documentElement.classList;
      if (!jM.contains("TouchHotbar") || jM.contains("TouchHotbarKeysAbove") || QM.some((MM => jM.contains(MM))) || null === (rM = MM.defaultView) || void 0 === rM || null === (iM = rM.matchMedia) || void 0 === iM || !iM.call(rM, uM).matches) return !1;
      const aM = MM.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        PM = null === aM || void 0 === aM ? void 0 : aM.parentElement,
        nM = null === aM || void 0 === aM ? void 0 : aM.closest(".BottomMiddleElements"),
        zM = null === nM || void 0 === nM ? void 0 : nM.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!aM || !PM || !nM || !zM || nM.classList.contains("TouchInventoryOpen")) return !1;
      const LM = aM.getBoundingClientRect();
      if (0 === LM.width) return !1;
      const hM = MM.querySelector(".JoystickZone"),
        yM = zM.getBoundingClientRect(),
        lM = PM.getBoundingClientRect().top,
        EM = GM({
          slotsLeft: yM.left,
          slotsRight: yM.right,
          width: LM.width,
          zoneRight: hM ? CM(hM) : null
        }),
        UM = bM.get(nM),
        eM = yM.left + EM,
        tM = {
          shift: EM,
          rise: JM(wM, nM, {
            left: eM,
            right: eM + LM.width,
            height: LM.height,
            rowTop: lM,
            besideBottom: HM(nM, lM),
            obstacles: mM(nM)
          }, `${EM}:${Math.round(LM.width)}`, (null !== (OM = null === UM || void 0 === UM ? void 0 : UM.shift) && void 0 !== OM ? OM : 0) === EM)
        };
      return (null === UM || void 0 === UM ? void 0 : UM.shift) !== tM.shift && nM.style.setProperty("--touch-shop-above-shift", `${tM.shift}px`), (null === UM || void 0 === UM ? void 0 : UM.rise) !== tM.rise && dM(nM, "ShopAboveUp", "--touch-shop-above-rise", tM.rise), bM.set(nM, tM), (null !== (SM = null === UM || void 0 === UM ? void 0 : UM.shift) && void 0 !== SM ? SM : 0) !== tM.shift
    }
    const uM = "(orientation: landscape) and (max-height: 500px)";

    function RM(MM, rM, iM) {
      (0, OM.useLayoutEffect)((() => {
        var rM;
        const OM = null === (rM = MM.current) || void 0 === rM ? void 0 : rM.closest(".BottomMiddleElements");
        if (!OM || iM) return;
        const PM = new ResizeObserver((() => {
            HM(!1)
          })),
          nM = () => {
            PM.disconnect();
            const MM = document.querySelector(".JoystickZone");
            for (const rM of [MM, OM, OM.querySelector(".HotBarGameItemsContainer"), ...mM(OM)]) rM && PM.observe(rM)
          };
        let QM = null,
          zM = !1;
        const HM = MM => {
            zM ||= MM, QM ??= requestAnimationFrame((() => {
              QM = null, zM && (zM = !1, nM()), tM(document)
            }))
          },
          hM = new MutationObserver((() => {
            HM(!0)
          }));
        hM.observe(OM, {
          childList: !0
        });
        for (const MM of LM(OM)) hM.observe(MM, {
          childList: !0,
          subtree: !0
        });
        tM(document), nM();
        const JM = () => {
            HM(!0)
          },
          dM = [(0, SM.j)(jM.f, JM), (0, SM.j)(aM.d, JM)],
          yM = new MutationObserver((() => {
            HM(!1)
          }));
        return MM.current && yM.observe(MM.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          yM.disconnect(), null !== QM && cancelAnimationFrame(QM), PM.disconnect(), hM.disconnect();
          for (const MM of dM) MM()
        }
      }), [MM, rM, iM])
    }
  },
  5401: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => hM,
      f: () => UM,
      h: () => JM,
      j: () => EM
    });
    var OM = iM(44),
      SM = iM(5403),
      jM = iM(4720),
      aM = iM(1440),
      PM = iM(5417),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(1429),
      LM = iM(1830),
      mM = iM(5419),
      HM = iM(1303);

    function hM(MM) {
      let {
        label: rM,
        onClick: iM,
        checked: OM,
        circleInfoText: SM,
        className: PM,
        disabled: nM,
        note: zM
      } = MM;
      return (0, HM.jsxs)("div", {
        "aria-disabled": nM || void 0,
        "data-pad-focusable": !0,
        className: QM()("SettingBox CheckboxContainer", {
          [PM]: PM,
          SettingBoxDisabled: nM
        }),
        onClick: () => {
          nM || iM(!OM)
        },
        children: [(0, HM.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, HM.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, HM.jsx)(jM.c, {
              className: "SettingsCheckbox",
              checked: OM,
              disabled: nM,
              onChange: () => {}
            })
          }), (0, HM.jsxs)("div", {
            className: "CheckboxText",
            children: [rM, SM && (0, HM.jsx)("span", {
              onClick: MM => MM.stopPropagation(),
              children: (0, HM.jsx)(aM.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: SM
              })
            })]
          })]
        }), zM && (0, HM.jsx)("div", {
          className: "SettingNote",
          children: zM
        })]
      })
    }

    function JM(MM) {
      let {
        name: rM,
        onChange: iM,
        min: SM,
        max: jM,
        step: PM,
        initValue: nM,
        circleInfoText: zM,
        format: LM,
        className: mM,
        padStep: hM,
        disabled: JM = !1,
        selectableMax: dM,
        cappedNote: yM,
        onChangeComplete: EM
      } = MM;
      const [UM, GM] = (0, OM.useState)(nM), CM = (0, OM.useRef)(nM);
      (0, OM.useEffect)((() => {
        CM.current = nM, GM(nM)
      }), [nM]);
      const eM = void 0 !== dM && dM < jM,
        bM = eM ? {
          "--slider-selectable": (dM - SM) / (jM - SM)
        } : void 0;
      return (0, HM.jsxs)("div", {
        className: QM()("SettingBox SettingsSliderDiv", {
          [mM]: mM,
          SettingBoxDisabled: JM,
          SliderCapped: eM
        }),
        style: bM,
        children: [(0, HM.jsxs)("div", {
          className: "SliderText",
          children: [`${rM}: ${LM?LM(UM):UM}`, zM && (0, HM.jsx)(aM.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: zM
          })]
        }), (0, HM.jsx)("div", {
          className: "SliderDiv",
          children: (0, HM.jsx)(lM, {
            value: UM,
            min: SM,
            max: jM,
            step: PM,
            onChange: MM => {
              if (eM && MM >= dM && UM === dM) return;
              const rM = eM ? Math.min(MM, dM) : MM;
              CM.current = rM, GM(rM), iM(rM)
            },
            onChangeComplete: EM && (() => {
              EM(CM.current)
            }),
            format: LM,
            padStep: hM,
            disabled: JM
          })
        }), eM && yM && (0, HM.jsx)("div", {
          className: "SettingNote",
          children: yM
        })]
      })
    }
    const dM = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yM(MM) {
      var rM;
      return (null !== (rM = String(MM).split(".")[1]) && void 0 !== rM ? rM : "").length
    }

    function lM(MM) {
      let {
        value: rM,
        min: iM,
        max: jM,
        step: aM,
        onChange: PM,
        orientation: nM,
        reverse: QM,
        setIsChanging: zM,
        tooltip: LM,
        labels: hM,
        handleLabel: JM,
        format: lM,
        onChangeStart: EM,
        onChangeComplete: UM,
        padStep: GM,
        disabled: CM = !1
      } = MM;
      const eM = (0, OM.useRef)(null),
        bM = (0, OM.useRef)(null);
      (0, OM.useLayoutEffect)((() => {
        var MM, rM, iM;
        const OM = null !== (MM = null === (rM = eM.current) || void 0 === rM ? void 0 : rM.querySelector(".rangeslider")) && void 0 !== MM ? MM : null;
        null === OM || void 0 === OM || OM.setAttribute("data-pad-slider", ""), null === OM || void 0 === OM || OM.setAttribute("data-pad-focusable", ""), null === OM || void 0 === OM || null === (iM = OM.querySelector(".rangeslider__handle")) || void 0 === iM || iM.setAttribute("data-pad-slider-handle", ""), bM.current = OM
      }), []), (0, OM.useLayoutEffect)((() => {
        var MM, rM;
        CM ? null === (MM = bM.current) || void 0 === MM || MM.setAttribute("aria-disabled", "true") : null === (rM = bM.current) || void 0 === rM || rM.removeAttribute("aria-disabled")
      }), [CM]);
      const wM = Math.max(yM(aM), yM(iM)),
        tM = MM => {
          if (MM >= jM) return jM;
          if (MM <= iM) return iM;
          const rM = Number((Math.round((MM - iM) / aM) * aM + iM).toFixed(wM));
          return Math.min(jM, Math.max(iM, rM))
        },
        gM = (0, OM.useRef)(UM);
      gM.current = UM, (0, OM.useEffect)((() => {
        const MM = eM.current;
        if (!MM) return;
        const rM = MM => {
          var rM;
          dM.has(MM.key) && (null === (rM = gM.current) || void 0 === rM || rM.call(gM))
        };
        return MM.addEventListener("keyup", rM), () => {
          MM.removeEventListener("keyup", rM)
        }
      }), []);
      const uM = (0, OM.useRef)(!1);
      return (0, mM.d)(bM, {
        adjust: MM => {
          if (CM) return;
          const OM = null !== GM && void 0 !== GM ? GM : Math.max(aM, Math.round((jM - iM) / 20 / aM) * aM),
            SM = tM(rM + MM * OM * (QM ? -1 : 1));
          SM !== rM && (null === EM || void 0 === EM || EM(), PM(SM), null === UM || void 0 === UM || UM())
        },
        setFraction: MM => {
          if (CM) return;
          const OM = tM(iM + (QM ? 1 - MM : MM) * (jM - iM));
          OM !== rM && (uM.current || (uM.current = !0, null === EM || void 0 === EM || EM()), PM(OM))
        },
        endDrag: () => {
          uM.current && (uM.current = !1, null === UM || void 0 === UM || UM())
        }
      }), (0, HM.jsx)("div", {
        ref: eM,
        style: {
          display: "contents"
        },
        children: (0, HM.jsx)(SM.d, {
          value: rM,
          min: iM,
          max: jM,
          step: aM,
          onChange: MM => {
            PM(tM(MM))
          },
          orientation: nM,
          reverse: QM,
          tooltip: LM,
          labels: hM,
          handleLabel: JM,
          format: lM,
          onChangeStart: () => {
            null === EM || void 0 === EM || EM(), null === zM || void 0 === zM || zM(!0)
          },
          onChangeComplete: () => {
            null === zM || void 0 === zM || zM(!1), null === UM || void 0 === UM || UM()
          }
        })
      })
    }
    async function EM() {
      const MM = zM.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await MM.getResult() && (0, LM.reloadBloxd)()
    }

    function UM(MM) {
      let {
        label: rM,
        options: iM,
        value: OM,
        onChange: SM,
        circleInfoText: jM
      } = MM;
      return (0, HM.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, HM.jsxs)("div", {
          className: "SliderText",
          children: [rM, jM && (0, HM.jsx)(aM.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: jM
          })]
        }), (0, HM.jsx)(PM.e, {
          ariaLabel: rM,
          options: iM,
          value: OM,
          onChange: SM
        })]
      })
    }
  },
  5417: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1303);

    function aM(MM) {
      let {
        options: rM,
        value: iM,
        onChange: OM,
        ariaLabel: aM,
        className: PM,
        reselectable: nM = !1,
        keepsFocus: QM = !1,
        padTabs: zM
      } = MM;
      const LM = void 0 !== zM;
      return (0, jM.jsx)("div", {
        className: SM()("SegmentedToggle", PM),
        role: "group",
        "aria-label": aM,
        "data-pad-tabs": zM,
        children: rM.map((MM => {
          const rM = MM.value === iM;
          return (0, jM.jsx)("button", {
            type: "button",
            "aria-pressed": rM,
            "data-pad-tab": LM || void 0,
            "data-pad-selected": LM && rM ? "true" : void 0,
            "data-pad-default-focus": LM && rM || void 0,
            "aria-label": MM.ariaLabel,
            title: MM.ariaLabel,
            className: SM()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rM
            }),
            onMouseDown: QM ? MM => {
              MM.preventDefault()
            } : void 0,
            onClick: () => {
              rM && !nM || OM(MM.value)
            },
            children: MM.label
          }, MM.value)
        }))
      })
    }
  },
  9349: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => jM
    });
    var OM = iM(2099);
    const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
      aM = MM => "Space" === MM ? "_" : OM.k[MM]
  },
  9392: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(19);

    function SM() {
      return !OM.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9484: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => nM,
      D: () => mM,
      H: () => QM,
      I: () => hM,
      M: () => jM,
      e: () => SM,
      i: () => PM,
      j: () => OM,
      n: () => JM,
      r: () => HM,
      s: () => zM,
      t: () => aM,
      w: () => dM,
      z: () => LM
    });
    const OM = MM => ({
      left: MM.left,
      top: MM.top,
      right: MM.right,
      bottom: MM.bottom
    });

    function SM(MM) {
      return {
        x: (MM.left + MM.right) / 2,
        y: (MM.top + MM.bottom) / 2
      }
    }

    function jM(MM) {
      return 0 === MM.length ? null : MM.reduce(((MM, rM) => ({
        left: Math.min(MM.left, rM.left),
        top: Math.min(MM.top, rM.top),
        right: Math.max(MM.right, rM.right),
        bottom: Math.max(MM.bottom, rM.bottom)
      })))
    }

    function aM(MM, rM) {
      const iM = Math.max(0, (rM - (MM.right - MM.left)) / 2),
        OM = Math.max(0, (rM - (MM.bottom - MM.top)) / 2);
      return {
        left: MM.left - iM,
        top: MM.top - OM,
        right: MM.right + iM,
        bottom: MM.bottom + OM
      }
    }

    function PM(MM, rM) {
      return rM.x >= MM.left && rM.x <= MM.right && rM.y >= MM.top && rM.y <= MM.bottom
    }

    function nM(MM, rM, iM) {
      let OM = null,
        jM = 1 / 0;
      for (const {
          id: SM,
          box: aM
        }
        of rM) {
        const rM = (aM.right - aM.left) * (aM.bottom - aM.top);
        PM(aM, MM) && rM < jM && (jM = rM, OM = SM)
      }
      if (null !== OM) return OM;
      let nM = 1 / 0;
      for (const {
          id: QM,
          box: zM
        }
        of rM) {
        if (!PM(aM(zM, iM), MM)) continue;
        const rM = SM(zM),
          jM = Math.hypot(MM.x - rM.x, MM.y - rM.y);
        jM < nM && (nM = jM, OM = QM)
      }
      return OM
    }

    function QM(MM, rM, iM) {
      return {
        left: iM.left,
        top: iM.top,
        right: MM - iM.right,
        bottom: rM - iM.bottom
      }
    }

    function zM(MM, rM, iM, OM) {
      const SM = (MM, rM, iM) => Math.max(Math.min(rM, 0), Math.min(Math.max(iM, 0), MM));
      return {
        x: SM(rM, OM.left - MM.left, OM.right - MM.right),
        y: SM(iM, OM.top - MM.top, OM.bottom - MM.bottom)
      }
    }

    function LM(MM, rM, iM, OM, SM) {
      const jM = MM.dx * OM + rM,
        aM = MM.dy * SM + iM,
        PM = MM => Math.max(-1, Math.min(1, MM));
      return {
        dx: PM(jM / OM),
        dy: PM(aM / SM)
      }
    }

    function mM(MM, rM, iM, OM) {
      return rM <= 0 || iM <= 0 ? 1 : Math.max(.05, Math.min(1, MM / rM, OM / iM))
    }

    function HM(MM, rM, iM) {
      return Math.min(MM.right, rM.right) - Math.max(MM.left, rM.left) > iM && Math.min(MM.bottom, rM.bottom) - Math.max(MM.top, rM.top) > iM
    }

    function hM(MM, rM) {
      const iM = (MM, rM, iM, OM) => rM - MM > OM - iM ? iM - MM > rM - OM ? OM - rM : iM - MM : MM < iM ? iM - MM : rM > OM ? OM - rM : 0;
      return {
        x: iM(MM.left, MM.right, rM.left, rM.right),
        y: iM(MM.top, MM.bottom, rM.top, rM.bottom)
      }
    }

    function JM(MM, rM, iM) {
      return HM(MM, {
        left: 0,
        top: 0,
        right: rM,
        bottom: iM
      }, 0)
    }

    function dM(MM, rM) {
      let {
        avoid: iM = null,
        bounds: OM = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, SM = 0, jM = 1 / 0;
      return MM.forEach(((MM, aM) => {
        const PM = rM.filter((rM => HM(MM, rM, 0))).length,
          nM = null !== OM && (MM.left < OM.left || MM.top < OM.top || MM.right > OM.right || MM.bottom > OM.bottom),
          QM = PM + (iM && HM(MM, iM, 0) ? 1e3 : 0) + (nM ? 1e6 : 0);
        QM < jM && (SM = aM, jM = QM)
      })), SM
    }
  },
  9479: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      E: () => mM,
      H: () => LM,
      d: () => PM,
      e: () => UM,
      f: () => EM,
      g: () => lM,
      h: () => nM,
      k: () => hM,
      m: () => zM,
      q: () => CM,
      s: () => GM,
      w: () => QM
    });
    var OM = iM(9484),
      SM = iM(2666);
    const jM = {
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
        ...Object.fromEntries(SM.x.map((MM => [MM, "menu"])))
      },
      aM = MM => SM.t.filter((rM => jM[rM] === MM)),
      PM = new Set(aM("cluster")),
      nM = new Set(aM("inventory")),
      QM = MM => "inventory" === MM || nM.has(MM),
      zM = MM => {
        const rM = jM[MM];
        return void 0 === rM ? [] : [rM, ...zM(rM)]
      },
      LM = MM => [MM, ...zM(MM)],
      mM = (MM, rM, iM) => "shop" === MM && rM ? iM("inventory") ? ["inventory"] : iM("bag") ? [MM, "bag"] : [MM] : [MM],
      HM = (MM, rM, iM, SM) => {
        const jM = MM => {
          const jM = rM[MM],
            {
              x: aM,
              y: PM
            } = jM && SM(MM) ? (0, OM.I)(jM, iM) : {
              x: 0,
              y: 0
            };
          return jM && {
            left: jM.left + aM,
            top: jM.top + PM,
            right: jM.right + aM,
            bottom: jM.bottom + PM
          }
        };
        return MM.flatMap((MM => {
          const aM = rM[MM];
          if ("inventory" !== MM || !aM || aM.right - aM.left <= iM.right - iM.left && aM.bottom - aM.top <= iM.bottom - iM.top) return [MM];
          const [PM, nM] = [jM("shop"), jM("bag")];
          return PM && nM && !(0, OM.r)(PM, nM, 0) ? ["shop", "bag"].filter(SM) : [MM]
        }))
      },
      hM = new Map([
        ["cluster", PM],
        ["inventory", nM]
      ]),
      JM = ["cluster"],
      dM = [...JM, ...SM.t.filter((MM => !JM.includes(MM) && !jM[MM]))],
      yM = MM => [MM, ...aM(MM).flatMap(yM)],
      lM = dM.flatMap(yM).map((MM => ({
        id: MM,
        label: `hudLayout:${MM}`,
        ...SM.s[MM],
        parent: jM[MM]
      }))),
      EM = Object.fromEntries(lM.map((MM => [MM.id, MM]))),
      UM = "data-hud-el";

    function GM(MM, rM, iM, OM) {
      const SM = iM(function(MM, rM) {
          return "attack" !== MM || rM ? EM[MM].label : "hudLayout:attackContext"
        }(MM, rM)),
        jM = OM[MM];
      return jM ? iM("hudLayout:slotWithKey", {
        slot: SM,
        key: jM
      }) : SM
    }

    function CM(MM, rM, iM, OM) {
      return MM.map((MM => GM(MM, rM, iM, OM))).join(", ")
    }
  },
  9489: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => jM,
      g: () => SM,
      j: () => aM,
      k: () => LM,
      n: () => zM,
      r: () => QM,
      s: () => nM
    });
    var OM = iM(2666);
    const SM = ["J", "C", "A", "P", "U", "X", "G"],
      jM = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function aM(MM) {
      return MM ? ["X"] : ["P", "X"]
    }
    const PM = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: OM.x,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function nM(MM, rM, iM) {
      const OM = MM.querySelector(".InGameUi .TouchComponentsButtons");
      if (!OM) return PM;
      const jM = {},
        aM = {};
      for (const PM of SM) {
        const MM = OM.querySelector(`.TouchSlot${PM} > .TouchKey`);
        if (MM) {
          var nM, QM;
          jM[PM] = MM.cloneNode(!0);
          const rM = (null !== (nM = null === (QM = MM.querySelector(".TouchKeyLabel")) || void 0 === QM ? void 0 : QM.textContent) && void 0 !== nM ? nM : "").split(/\s+/).filter((MM => !/[\d\xd7]/.test(MM))).join(" ");
          rM && (aM[PM] = rM)
        }
      }
      const zM = rM => {
          const iM = MM.querySelector(`.InGameUi ${rM}`);
          return null !== iM && !iM.classList.contains("Hidden")
        },
        LM = [...MM.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((MM => MM.cloneNode(!0)));
      return {
        faces: Object.keys(jM).length > 0 ? jM : null,
        names: aM,
        shop: zM(".TouchInventoryKey.ShopKey"),
        bag: zM(".TouchInventoryKey.BagKey"),
        sprint: zM(".TouchSprintHit"),
        items: LM.length > 0 ? LM : null,
        rowIcons: rM,
        pinnedIcons: iM
      }
    }

    function QM(MM, rM) {
      const iM = {};
      for (const OM of [...aM(rM), "G"]) {
        const rM = MM.names[OM];
        rM && (iM[jM[OM]] = rM)
      }
      return iM
    }

    function zM(MM, rM) {
      const {
        faces: iM
      } = MM;
      if (null === iM) return [];
      const OM = new Set(Object.keys(iM).map((MM => jM[MM])));
      return aM(rM).filter((MM => !OM.has(jM[MM])))
    }

    function LM(MM, rM) {
      MM.replaceChildren(...[...rM.childNodes].map((MM => MM.cloneNode(!0))))
    }
  },
  9487: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      f: () => QM
    });
    var OM = iM(9484),
      SM = iM(9479),
      jM = iM(2666),
      aM = iM(2668);
    const PM = 2,
      nM = (MM, rM, iM) => {
        const OM = (0, SM.m)(rM).includes(MM) ? MM : (0, SM.m)(MM).includes(rM) ? rM : null;
        if (null === OM || "joystick" === OM) return !1;
        const PM = OM === MM ? rM : MM;
        if ("menu" === OM) return (0, aM.s)(PM, iM.hudElements[PM]);
        if ("hotbar" !== OM || !(0, SM.w)(PM)) return !0;
        if ((0, jM.K)(iM.hudElements[PM]) || (0, jM.K)(iM.hudElements.inventory)) return !1;
        return !(iM.hudLocked.includes(PM) || iM.hudLocked.includes("inventory")) || (0, jM.G)(iM.hudElements.hotbar)
      };

    function QM(MM, rM, iM, QM) {
      const zM = MM => (0, SM.H)(MM).some((MM => (0, jM.p)(iM.hudElements, MM) || (0, aM.p)(MM, iM, QM)));
      if (zM(MM)) return [];
      const LM = MM => {
          var rM, OM;
          return "bag" === MM && 1 !== (null !== (rM = null === (OM = iM.hudElements.shop) || void 0 === OM ? void 0 : OM[2]) && void 0 !== rM ? rM : 1) || (0, SM.H)(MM).some((MM => void 0 !== iM.hudElements[MM]))
        },
        mM = SM.k.get(MM),
        HM = rM.filter((rM => {
          let {
            id: iM
          } = rM;
          return mM ? mM.has(iM) && !zM(iM) : iM === MM
        })),
        hM = new Set;
      for (const SM of rM) SM.id === MM || null !== mM && void 0 !== mM && mM.has(SM.id) || hM.has(SM.id) || zM(SM.id) || HM.some((MM => {
        let {
          id: rM,
          box: jM
        } = MM;
        return !nM(rM, SM.id, iM) && (LM(rM) || LM(SM.id)) && (0, OM.r)(jM, SM.box, PM)
      })) && hM.add(SM.id);
      return [...hM]
    }
  },
  9400: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => zM,
      E: () => mM,
      I: () => HM,
      e: () => jM,
      h: () => PM,
      j: () => QM,
      l: () => nM,
      n: () => aM,
      r: () => SM,
      u: () => OM,
      x: () => hM,
      z: () => LM
    });
    const OM = 14,
      SM = 6,
      jM = (OM + SM) / 2,
      aM = 200,
      PM = aM / 2,
      nM = aM / 2 - 1,
      QM = SM / OM * (aM / 2),
      zM = (MM, rM) => -Math.PI / 2 + 2 * MM * Math.PI / rM,
      LM = (MM, rM, iM) => {
        const OM = 2 * Math.PI / iM;
        return (Math.round((Math.atan2(rM, MM) + Math.PI / 2) / OM) % iM + iM) % iM
      },
      mM = .5,
      HM = (MM, rM, iM) => Math.hypot(MM.x, MM.y) < mM ? iM : LM(MM.x, MM.y, rM),
      hM = (MM, rM, iM, OM, SM) => {
        const jM = Math.PI / rM,
          aM = zM(MM, rM),
          PM = aM - jM,
          nM = aM + jM,
          QM = (MM, rM) => `${iM+MM*Math.cos(rM)} ${iM+MM*Math.sin(rM)}`;
        return [`M ${QM(OM,PM)}`, `L ${QM(SM,PM)}`, `A ${SM} ${SM} 0 0 1 ${QM(SM,nM)}`, `L ${QM(OM,nM)}`, `A ${OM} ${OM} 0 0 0 ${QM(OM,PM)}`, "Z"].join(" ")
      }
  },
  9430: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(44),
      SM = iM(9366),
      jM = iM(2640);

    function aM() {
      const MM = (0, jM.f)("shopInfo"),
        [, rM] = (0, OM.useReducer)((MM => MM + 1), 0);
      return (0, jM.c)("shopInfo", rM), !(0, SM.d)(MM)
    }
  },
  8738: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      c: () => jM,
      d: () => mM,
      e: () => LM,
      f: () => QM,
      h: () => PM,
      i: () => OM,
      k: () => HM,
      l: () => hM
    });
    const OM = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      SM = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: OM
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      jM = {
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
      aM = ["pickBlock", "perspective"],
      PM = MM => aM.includes(MM) ? aM : [MM],
      nM = Object.fromEntries(SM.flatMap((MM => {
        let {
          group: rM,
          actions: iM
        } = MM;
        return iM.map((MM => [MM, rM]))
      }))),
      QM = MM => nM[MM],
      zM = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      LM = MM => {
        var rM;
        return [QM(MM), ...null !== (rM = zM[MM]) && void 0 !== rM ? rM : []]
      },
      mM = new Set(["menu", "inventory", "keyboard"]),
      HM = {
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
      hM = new Set(["forward", "backward", "left", "right"])
  },
  8731: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => UM,
      E: () => pM,
      G: () => bM,
      K: () => EM,
      O: () => tM,
      S: () => zM,
      T: () => wM,
      X: () => RM,
      e: () => lM,
      i: () => GM,
      m: () => mM,
      o: () => HM,
      s: () => WM,
      u: () => uM,
      x: () => gM
    });
    var OM = iM(8738),
      SM = iM(8743),
      jM = iM(8723),
      aM = iM(8767);
    const PM = MM => "pickBlock" === MM ? "perspective" : MM,
      nM = (MM, rM) => {
        var iM;
        const SM = PM(rM);
        return null !== (iM = MM[SM]) && void 0 !== iM ? iM : OM.c[SM]
      },
      QM = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((MM => {
        let [rM, iM] = MM;
        return [
          [rM, iM],
          [iM, rM]
        ]
      }))),
      zM = (MM, rM) => null !== MM && void 0 !== MM ? MM : "nintendo" === rM,
      LM = MM => zM((0, SM.j)().swapConfirmBack, (0, SM.l)()) && QM.get(MM) || MM,
      mM = MM => nM((0, SM.j)().bindings, LM(MM)),
      HM = MM => OM.c[LM(MM)],
      hM = Object.keys(OM.c),
      JM = MM => "gameplay" === (0, OM.f)(MM) ? ["gameplay"] : (0, OM.e)(MM),
      dM = (MM, rM) => {
        const iM = JM(rM);
        return JM(MM).some((MM => iM.includes(MM)))
      },
      yM = (MM, rM, iM) => {
        const SM = nM(MM, rM),
          aM = new Set((0, OM.h)(rM)),
          QM = [...aM];
        for (let OM = QM.pop(); OM; OM = QM.pop())
          for (const rM of hM) {
            const jM = nM(MM, rM);
            aM.has(rM) || jM !== iM && jM !== SM || !dM(OM, rM) || (aM.add(rM), QM.push(rM))
          }
        const zM = {
          ...MM
        };
        for (const LM of aM) {
          const rM = nM(MM, LM) === SM ? iM : SM,
            aM = (0, OM.e)(LM).some((MM => OM.d.has(MM)));
          if ((0, jM.G)(rM) && aM) return null;
          zM[PM(LM)] = rM
        }
        for (const jM of Object.keys(zM)) zM[jM] === OM.c[jM] && delete zM[jM];
        return zM
      },
      lM = (MM, rM) => null !== yM((0, SM.j)().bindings, LM(MM), rM),
      EM = (MM, rM) => {
        if (mM(MM) === rM) return !0;
        const iM = yM((0, SM.j)().bindings, LM(MM), rM);
        return !!iM && ((0, SM.p)({
          bindings: iM
        }), !0)
      },
      UM = (MM, rM) => {
        const iM = (0, OM.h)(rM);
        return hM.filter((rM => PM(rM) === rM && !iM.includes(rM) && nM(MM, LM(rM)) !== mM(rM)))
      },
      GM = ["southpaw", "triggersSwapped"],
      CM = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      eM = MM => Object.keys(CM[MM]),
      bM = (MM, rM) => "southpaw" === MM ? rM.swapSticks : eM(MM).every((iM => nM(rM.bindings, iM) === CM[MM][iM])),
      wM = (MM, rM) => {
        const iM = (0, SM.j)();
        let jM = iM.bindings;
        for (const SM of eM(MM)) {
          const iM = rM ? CM[MM][SM] : OM.c[SM];
          if (jM = yM(jM, SM, iM), !jM) return !1
        }
        return (0, SM.p)({
          swapSticks: "southpaw" === MM ? rM : iM.swapSticks,
          bindings: jM
        }), !0
      },
      tM = () => {
        (0, SM.p)({
          swapSticks: !1,
          bindings: {}
        })
      },
      gM = () => (0, SM.j)().swapSticks ? "RightStick" : "LeftStick",
      uM = () => (0, SM.j)().swapSticks ? "LeftStick" : "RightStick",
      RM = MM => (0, SM.j)().swapSticks && (0, jM.G)(MM),
      pM = MM => RM(MM) ? gM() : uM(),
      WM = MM => {
        if (OM.l.has(MM)) return gM();
        const rM = OM.k[MM];
        return rM && ("leaderboard" !== rM || (0, aM.g)(MM, (0, aM.d)())) ? mM(rM) : null
      }
  },
  8710: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ControllerCategory: () => GP,
      ControllerGlyph: () => bS,
      ControllerRoot: () => Ga,
      PadLobbyShortcuts: () => fa,
      PadSneakChip: () => ua,
      PadTooltip: () => pa,
      attachPressToContinue: () => Xa,
      getBoundButton: () => zM.m,
      getControllerSettings: () => mM.j,
      getGlyphForNoaAction: () => zM.s,
      getInventoryCursorState: () => eP,
      getMenuShortcutButton: () => Xi,
      getPadGlyphIconName: () => wa,
      getPadGlyphIconUrl: () => ta,
      getPadRepeatTiming: () => JM.f,
      handOverPadFocus: () => wP,
      hasActivePad: () => CP,
      isPadSteppingSlots: () => bP
    });
    const OM = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var SM = iM(1188),
      jM = iM(1474),
      aM = iM(8717),
      PM = iM(65),
      nM = iM(19),
      QM = iM(22),
      zM = iM(8731),
      LM = iM(8776),
      mM = iM(8743),
      HM = iM(8785),
      hM = iM(8723),
      JM = iM(9259),
      dM = iM(9264),
      yM = iM(1750);
    const lM = (MM, rM, iM) => Math.max(rM, Math.min(iM, MM)),
      EM = MM => Math.min(MM.width, MM.height) / 720,
      UM = MM => Math.max(.15, MM);
    class GM {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(MM, rM) {
        const iM = Math.hypot(MM.x, MM.y) >= (MM => Math.max(.3, MM))(rM);
        return this.locked ? (this.locked = iM, !1) : iM
      }
    }
    const CM = (MM, rM) => {
        const iM = lM(rM.dtMs, 0, 100),
          OM = iM / 1e3,
          SM = EM(rM.viewport) * (rM.cursorSpeedPercent / 100),
          jM = (0, hM.i)(rM.stick, UM(rM.moveDeadzone)),
          aM = Math.hypot(jM.x, jM.y),
          PM = ((MM, rM, iM) => {
            if (rM < .3) return 0;
            const OM = iM / 350;
            return rM >= .85 ? Math.min(1, MM + OM) : Math.max(0, MM - OM)
          })(MM.speedRamp, aM, iM);
        let nM = MM.x,
          QM = MM.y;
        if (aM > 0) {
          const MM = .45 + .55 * PM,
            iM = rM.context.overInteractive ? .45 : 1,
            zM = 1400 * (MM => {
              const rM = lM(MM, 0, 1);
              return .3 * rM + .7 * rM * rM
            })(aM) * SM * MM * iM;
          nM += jM.x / aM * zM * OM, QM += jM.y / aM * zM * OM
        }
        const zM = Math.hypot(rM.dpad.x, rM.dpad.y);
        if (zM > 0) {
          const MM = 500 * SM;
          nM += rM.dpad.x / zM * MM * OM, QM += rM.dpad.y / zM * MM * OM
        }
        const LM = rM.context.magnetTarget;
        if (LM && aM < .3 && 0 === zM) {
          const MM = ((MM, rM, iM, OM, SM) => {
            const jM = rM.x - MM.x,
              aM = rM.y - MM.y,
              PM = Math.hypot(jM, aM);
            if (0 === PM) return {
              x: 0,
              y: 0
            };
            const nM = Math.min(PM, SM * (1 - OM / .3));
            let QM = jM / PM * nM,
              zM = aM / PM * nM;
            if (OM > 0) {
              const MM = iM.x / OM,
                rM = iM.y / OM,
                SM = QM * MM + zM * rM;
              SM < 0 && (QM -= SM * MM, zM -= SM * rM)
            }
            return {
              x: QM,
              y: zM
            }
          })({
            x: nM,
            y: QM
          }, LM, jM, aM, 120 * EM(rM.viewport) * OM);
          nM += MM.x, QM += MM.y
        }
        return {
          x: lM(nM, 0, Math.max(0, rM.viewport.width - 1)),
          y: lM(QM, 0, Math.max(0, rM.viewport.height - 1)),
          speedRamp: PM
        }
      },
      eM = MM => {
        const rM = (0, hM.i)(MM, .2);
        return 0 !== rM.x || 0 !== rM.y
      },
      bM = (MM, rM) => {
        const iM = (0, hM.i)(MM, .2),
          OM = Math.hypot(iM.x, iM.y);
        if (0 === OM) return {
          x: 0,
          y: 0
        };
        const SM = OM * OM * 1600,
          jM = lM(rM, 0, 100) / 1e3;
        return {
          x: iM.x / OM * SM * jM,
          y: iM.y / OM * SM * jM
        }
      },
      wM = (MM, rM) => "y" === rM ? MM.scrollHeight > MM.clientHeight + 1 : MM.scrollWidth > MM.clientWidth + 1,
      tM = (MM, rM) => {
        if (!wM(MM, rM)) return !1;
        const iM = getComputedStyle(MM),
          OM = "y" === rM ? iM.overflowY : iM.overflowX;
        return "auto" === OM || "scroll" === OM
      },
      gM = (MM, rM, iM) => {
        for (let jM = MM instanceof HTMLElement ? MM : null !== (OM = null === MM || void 0 === MM ? void 0 : MM.parentElement) && void 0 !== OM ? OM : null; jM; jM = jM.parentElement) {
          var OM;
          if (tM(jM, rM)) return jM;
          if (jM === iM) return null
        }
        if (iM) return null;
        const SM = document.scrollingElement;
        return SM instanceof HTMLElement && wM(SM, rM) ? SM : null
      },
      uM = new WeakMap,
      RM = (MM, rM) => {
        const iM = performance.now(),
          OM = uM.get(MM);
        if (OM && OM.axis === rM && iM - OM.atMs < 500 && (!OM.container || OM.container.isConnected)) return OM.container;
        const SM = pM(MM, rM);
        return uM.set(MM, {
          axis: rM,
          atMs: iM,
          container: SM
        }), SM
      },
      pM = (MM, rM) => {
        let iM = tM(MM, rM) ? MM : null,
          OM = iM ? iM.clientWidth * iM.clientHeight : 0;
        for (const SM of MM.querySelectorAll("*")) {
          const MM = SM.clientWidth * SM.clientHeight;
          MM > OM && tM(SM, rM) && (iM = SM, OM = MM)
        }
        return iM
      },
      WM = (MM, rM, iM) => "y" === rM ? iM < 0 ? MM.scrollTop > 0 : MM.scrollTop + MM.clientHeight < MM.scrollHeight - 1 : iM < 0 ? MM.scrollLeft > 0 : MM.scrollLeft + MM.clientWidth < MM.scrollWidth - 1,
      sM = (MM, rM, iM) => {
        "y" === rM ? MM.scrollBy({
          top: iM,
          behavior: "instant"
        }) : MM.scrollBy({
          left: iM,
          behavior: "instant"
        })
      },
      DM = MM => {
        if (!MM || MM === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const rM = MM.getBoundingClientRect(),
          iM = Math.max(0, rM.left),
          OM = Math.max(0, rM.top);
        return new DOMRect(iM, OM, Math.min(window.innerWidth, rM.right) - iM, Math.min(window.innerHeight, rM.bottom) - OM)
      },
      kM = (MM, rM) => MM.left < rM.right && rM.left < MM.right && MM.top < rM.bottom && rM.top < MM.bottom;
    var ZM = iM(44),
      oM = iM(1116),
      fM = iM.n(oM),
      YM = iM(1303);
    let NM = 0,
      AM = !1;
    class xM {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(MM) {
        this.element = MM, this.shownKey = "", this.gap = null
      }
      show(MM) {
        const rM = this.element;
        if (!rM) return;
        const iM = MM ? this.keepOnScreen(rM, MM) : null,
          OM = iM ? `${iM.left},${iM.top},${iM.width},${iM.height}` : "";
        if (OM === this.shownKey) return;
        const SM = "" === this.shownKey;
        this.shownKey = OM, rM.classList.toggle("Visible", null !== iM), iM && (rM.classList.toggle("Snap", SM), rM.style.width = `${iM.width}px`, rM.style.height = `${iM.height}px`, rM.style.transform = `translate(${iM.left}px, ${iM.top}px)`, SM && (rM.offsetWidth, rM.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(MM, rM) {
        var iM;
        const OM = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!AM){AM=!0;const MM=document.createElement("div");MM.setAttribute("aria-hidden","true"),MM.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(MM),new ResizeObserver((()=>{NM++})).observe(MM)}return String(NM)})()}`;
        (null === (iM = this.gap) || void 0 === iM ? void 0 : iM.key) !== OM && (this.gap = {
          px: parseFloat(getComputedStyle(MM).paddingLeft) || 0,
          key: OM
        });
        const SM = this.gap.px + 2,
          jM = Math.max(rM.left, SM),
          aM = Math.max(rM.top, SM),
          PM = Math.min(rM.left + rM.width, window.innerWidth - SM),
          nM = Math.min(rM.top + rM.height, window.innerHeight - SM);
        return PM <= jM || nM <= aM ? rM : {
          left: jM,
          top: aM,
          width: PM - jM,
          height: nM - aM
        }
      }
    }
    const vM = MM => {
      let {
        placer: rM,
        className: iM
      } = MM;
      const OM = (0, ZM.useCallback)((MM => {
        rM.setElement(MM)
      }), [rM]);
      return (0, YM.jsx)("div", {
        ref: OM,
        className: fM()("PadReticle", iM),
        "aria-hidden": !0
      })
    };
    var FM = iM(9271);
    const BM = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const XM = new class {
      constructor() {
        this.state = BM, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(MM) {
        if (rM = this.state, iM = MM, (rM.visible || iM.visible) && (rM.visible !== iM.visible || rM.x !== iM.x || rM.y !== iM.y || rM.pressed !== iM.pressed)) {
          var rM, iM;
          this.state = MM;
          for (const rM of this.listeners) rM(MM)
        }
      }
      hide() {
        this.set(BM)
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
    };
    var IM = iM(9287);
    const KM = (MM, rM) => {
        let {
          kind: iM,
          holding: OM,
          hasPress: SM,
          hasBack: jM,
          slotHasItem: aM
        } = rM;
        switch (MM) {
          case "primary":
            return "slot" === iM ? "slotPrimary" : "recipe" === iM || "button" === iM ? SM ? "pressPrimary" : "click" : "textField" === iM ? "openKeyboard" : null;
          case "secondary":
            return "slot" === iM ? "slotSecondary" : "button" !== iM && "recipe" !== iM || !SM ? null : "pressSecondary";
          case "quickMove":
            return "slot" === iM && aM ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === iM && aM && !OM ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return OM ? "cancel" : jM ? "pressBack" : "close"
        }
      },
      qM = MM => {
        const rM = [];
        if (MM.hotbarPicking) return rM.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), rM.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), rM;
        if (MM.holding) "slot" === MM.kind ? (rM.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), rM.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === MM.kind && rM.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), rM.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), rM.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), MM.openButtonCloses && rM.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var iM;
          "slot" === MM.kind && MM.slotHasItem ? (rM.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), rM.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), rM.push({
            actions: ["inventoryQuickMove"],
            labelKey: MM.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), rM.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), rM.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== MM.kind && "recipe" !== MM.kind || !MM.pressHints ? "button" === MM.kind || "recipe" === MM.kind ? rM.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === MM.kind && rM.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (MM.pressHints.primary && rM.push({
            actions: ["inventoryPrimary"],
            labelKey: MM.pressHints.primary
          }), MM.pressHints.secondary && rM.push({
            actions: ["inventorySecondary"],
            labelKey: MM.pressHints.secondary
          }));
          const OM = null === (iM = MM.pressHints) || void 0 === iM ? void 0 : iM.back;
          OM && rM.push({
            actions: ["inventoryClose"],
            labelKey: OM
          });
          const SM = [];
          MM.openButtonCloses && SM.push("inventory"), OM || SM.push("inventoryClose"), SM.length > 0 && rM.push({
            actions: SM,
            labelKey: "inventoryClose"
          })
        }
        return rM.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), MM.hasCategories ? rM.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : MM.hasList && rM.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), rM
      };
    var TM = iM(9293),
      VM = iM(2508);
    class cM {
      constructor(MM) {
        this.probes = MM, this.byContainer = new Map, this.byParent = new Map
      }
      find(MM, rM) {
        const iM = gM(MM, "y", rM);
        if (!iM) return null;
        let OM = this.byContainer.get(iM);
        return OM || (this.probes.push({
          element: iM,
          rect: Or(iM.getBoundingClientRect())
        }), OM = {
          container: iM,
          box: DM(iM),
          group: ir(iM)
        }, this.byContainer.set(iM, OM)), OM
      }
      findForParent(MM, rM) {
        let iM = this.byParent.get(MM);
        return void 0 === iM && (iM = this.find(MM, rM), this.byParent.set(MM, iM)), iM
      }
    }
    const Mr = new WeakMap;
    let rr = 0;
    const ir = MM => {
        let rM = Mr.get(MM);
        return rM || (rM = "el:" + rr++, Mr.set(MM, rM)), rM
      },
      Or = MM => ({
        left: MM.left,
        top: MM.top,
        width: MM.width,
        height: MM.height
      }),
      Sr = MM => MM.width > 0 && MM.height > 0,
      jr = (MM, rM) => Sr(MM) && MM.left + MM.width > 0 && MM.top + MM.height > 0 && MM.left < rM.width && MM.top < rM.height,
      ar = (MM, rM, iM) => {
        const OM = MM.top + MM.height / 2;
        return jr(MM, rM) && (!iM || OM >= iM.top && OM <= iM.bottom)
      },
      Pr = MM => ({
        x: MM.left + MM.width / 2,
        y: MM.top + MM.height / 2
      }),
      nr = (MM, rM, iM) => MM < 0 ? iM >= 0 ? 0 : rM - 1 : ((MM + iM) % rM + rM) % rM,
      Qr = MM => "Left" === MM || "Right" === MM,
      zr = (MM, rM, iM) => {
        const OM = Qr(iM),
          SM = OM ? MM.top : MM.left,
          jM = OM ? MM.height : MM.width,
          aM = OM ? rM.top : rM.left,
          PM = OM ? rM.height : rM.width,
          nM = Math.max(0, Math.max(aM - (SM + jM), SM - (aM + PM)));
        return jM > 1.5 * PM ? {
          gap: nM,
          offset: Math.max(0, aM - SM) + .1 * Math.max(0, SM - aM)
        } : {
          gap: nM,
          offset: Math.abs(aM + PM / 2 - (SM + jM / 2))
        }
      },
      Lr = (MM, rM, iM) => {
        const OM = ((MM, rM, iM) => {
          const OM = Pr(MM),
            SM = Pr(rM),
            jM = Qr(iM) ? Math.min(MM.width, rM.width) / 4 : Math.min(MM.height, rM.height) / 4;
          switch (iM) {
            case "Right":
              return SM.x - OM.x >= jM ? Math.max(0, rM.left - (MM.left + MM.width)) : null;
            case "Left":
              return OM.x - SM.x >= jM ? Math.max(0, MM.left - (rM.left + rM.width)) : null;
            case "Down":
              return SM.y - OM.y >= jM ? Math.max(0, rM.top - (MM.top + MM.height)) : null;
            case "Up":
              return OM.y - SM.y >= jM ? Math.max(0, MM.top - (rM.top + rM.height)) : null
          }
        })(MM, rM, iM);
        if (null === OM) return null;
        const SM = zr(MM, rM, iM);
        return OM + 3 * SM.gap + .5 * SM.offset
      },
      mr = (MM, rM) => rM.visible || null !== rM.scrollGroup && rM.scrollGroup === MM.scrollGroup,
      Hr = (MM, rM, iM, OM) => {
        let SM = null,
          jM = 1 / 0;
        for (const aM of rM) {
          if (aM.key === MM.key || !mr(MM, aM) || !OM(aM)) continue;
          const rM = Lr(MM.rect, aM.rect, iM);
          null !== rM && rM < jM && (SM = aM, jM = rM)
        }
        return SM
      },
      hr = (MM, rM, iM) => {
        const OM = Hr(MM, rM, iM, (() => !0));
        if (!OM || Qr(iM) || null === MM.scrollGroup || OM.scrollGroup === MM.scrollGroup) return OM;
        const SM = Hr(MM, rM, iM, (rM => 0 === zr(MM.rect, rM.rect, iM).gap));
        return null !== SM && void 0 !== SM ? SM : OM
      },
      Jr = (MM, rM, iM) => {
        let OM = null,
          SM = 1 / 0;
        for (const jM of rM) {
          if (!jM.visible || iM && !iM(jM)) continue;
          const rM = Pr(jM.rect),
            aM = Math.hypot(rM.x - MM.x, rM.y - MM.y);
          aM < SM && (OM = jM, SM = aM)
        }
        return OM
      },
      dr = MM => {
        const {
          rect: rM,
          clip: iM
        } = MM;
        if (!iM) return rM;
        const OM = Math.max(rM.left, iM.left),
          SM = Math.max(rM.top, iM.top);
        return {
          left: OM,
          top: SM,
          width: Math.min(rM.left + rM.width, iM.left + iM.width) - OM,
          height: Math.min(rM.top + rM.height, iM.top + iM.height) - SM
        }
      },
      yr = (MM, rM) => rM.x >= MM.left && rM.x < MM.left + MM.width && rM.y >= MM.top && rM.y < MM.top + MM.height,
      lr = (MM, rM) => {
        let iM = null,
          OM = 1 / 0;
        for (const SM of rM) {
          const rM = dr(SM);
          (SM.visible || SM.clip) && yr(rM, MM) && (rM.width * rM.height < OM && (iM = SM, OM = rM.width * rM.height))
        }
        return iM
      },
      Er = MM => {
        let rM = null;
        for (const iM of MM) {
          if (!iM.visible) continue;
          if (!rM) {
            rM = iM;
            continue
          }
          const MM = Math.min(rM.rect.height, iM.rect.height) / 2,
            OM = iM.rect.top - rM.rect.top;
          (OM < -MM || Math.abs(OM) <= MM && iM.rect.left < rM.rect.left) && (rM = iM)
        }
        return rM
      },
      Ur = (MM, rM, iM, OM, SM) => {
        const jM = SM % rM,
          aM = Math.floor(SM / rM);
        return {
          left: MM.left + jM * iM,
          top: MM.top + aM * OM,
          width: MM.width,
          height: MM.height
        }
      },
      Gr = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Cr = ".LazyLoadedItemWrapper",
      er = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      br = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      wr = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      tr = MM => MM.hasAttribute("data-inven-idx") ? "slot" : MM.hasAttribute("data-recipe-key") ? "recipe" : MM.hasAttribute("data-craft-ingredient") || (0, VM.s)(MM) ? "info" : (0, FM.F)(MM) ? "textField" : "button",
      gr = (MM, rM) => "slot" === rM ? Number(MM.getAttribute("data-inven-idx")) : null,
      ur = MM => MM.matches(Cr) ? MM.querySelector(er) : MM,
      Rr = MM => {
        var rM, iM;
        return {
          element: MM,
          recipe: null !== (rM = MM && (null === (iM = ur(MM)) || void 0 === iM ? void 0 : iM.getAttribute("data-recipe-key"))) && void 0 !== rM ? rM : null
        }
      },
      pr = MM => {
        const rM = ur(MM);
        if (!rM) return {
          kind: "pending",
          idx: null
        };
        const iM = tr(rM);
        return {
          kind: iM,
          idx: gr(rM, iM)
        }
      },
      Wr = MM => {
        const rM = [];
        for (const [iM, OM] of br) {
          MM.matches(OM) && rM.push([iM, MM]);
          for (const SM of MM.querySelectorAll(OM)) rM.push([iM, SM])
        }
        return rM
      },
      sr = (MM, rM) => {
        for (const [iM, OM] of MM)
          if (OM.contains(rM)) return iM;
        return "other"
      },
      Dr = (MM, rM, iM, OM, SM, jM, aM, PM) => {
        var nM;
        const QM = MM.children,
          zM = Or(QM[0].getBoundingClientRect()),
          LM = [{
            element: QM[0],
            rect: zM
          }];
        if (jM.push(LM[0]), 0 === zM.width || 0 === zM.height) return;
        let mM = 1;
        for (; mM < QM.length && Math.abs(QM[mM].getBoundingClientRect().top - zM.top) < 1;) mM++;
        const HM = MM => {
            const rM = {
              element: QM[MM],
              rect: Or(QM[MM].getBoundingClientRect())
            };
            return jM.push(rM), LM.push(rM), rM.rect
          },
          hM = mM > 1 ? HM(1).left - zM.left : zM.width,
          JM = QM.length > mM ? HM(mM).top - zM.top : zM.height,
          dM = aM.find(MM, rM);
        let yM = null;
        if (dM) {
          var lM;
          const {
            container: MM,
            box: rM
          } = dM;
          yM = null !== (lM = PM.get(MM)) && void 0 !== lM ? lM : null, yM || (yM = {
            top: MM.scrollTop,
            left: MM.scrollLeft,
            box: rM,
            viewport: OM,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, PM.set(MM, yM)), yM.probes.push(...LM)
        }
        const EM = SM.length;
        for (let eM = 0; eM < QM.length; eM++) {
          var UM, GM, CM;
          const MM = QM[eM],
            rM = Ur(zM, mM, hM, JM, eM),
            jM = MM.firstElementChild ? MM.querySelector(er) : null,
            aM = jM ? tr(jM) : "pending";
          SM.push({
            key: ir(MM),
            rect: rM,
            panel: iM,
            scrollGroup: null !== (UM = null === dM || void 0 === dM ? void 0 : dM.group) && void 0 !== UM ? UM : null,
            visible: ar(rM, OM, null === dM || void 0 === dM ? void 0 : dM.box),
            clip: null !== (GM = null === dM || void 0 === dM ? void 0 : dM.box) && void 0 !== GM ? GM : null,
            element: MM,
            kind: aM,
            idx: jM ? gr(jM, aM) : null,
            scrollContainer: null !== (CM = null === dM || void 0 === dM ? void 0 : dM.container) && void 0 !== CM ? CM : null
          })
        }
        null === (nM = yM) || void 0 === nM || nM.targets.push(...SM.slice(EM))
      },
      kr = MM => MM instanceof Element && null !== MM.closest(Cr),
      Zr = MM => null !== MM.scrollContainer && kr(MM.element);
    class or {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(MM, rM, iM, OM) {
        this.latched = {
          source: MM,
          focusKey: rM,
          sinceMs: iM,
          hold: {
            id: ++this.presses,
            holdMs: OM
          }
        }
      }
      update(MM, rM, iM) {
        const OM = this.latched;
        return OM ? MM && rM === OM.focusKey ? iM - OM.sinceMs < OM.hold.holdMs ? null : (this.latched = null, OM.source) : (this.latched = null, null) : null
      }
      getHold() {
        var MM, rM;
        return null !== (MM = null === (rM = this.latched) || void 0 === rM ? void 0 : rM.hold) && void 0 !== MM ? MM : null
      }
      reset() {
        this.latched = null
      }
    }
    var fr = iM(9301);
    const Yr = {
        kind: "none"
      },
      Nr = MM => ({
        x: MM.clientX,
        y: MM.clientY
      }),
      Ar = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class xr {
      constructor() {
        this.hovered = Yr, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(MM, rM, iM, OM, SM) {
        const jM = null !== rM ? {
            kind: "slot",
            idx: rM
          } : iM ? {
            kind: "element",
            element: iM
          } : Yr,
          aM = `${SM}|${Math.round(OM.clientX)},${Math.round(OM.clientY)}`,
          PM = (nM = this.hovered, QM = jM, "slot" === nM.kind && "slot" === QM.kind ? nM.idx === QM.idx : "element" === nM.kind && "element" === QM.kind ? nM.element === QM.element : nM.kind === QM.kind);
        var nM, QM;
        if (PM && aM === this.signature) return;
        const zM = !PM || SM !== this.holding || "" === this.signature;
        this.signature = aM, this.holding = SM, this.lastPoint = OM;
        const LM = this.hovered;
        if (this.hovered = jM, "slot" === jM.kind) return this.leaveElement(LM, null, OM), void(zM ? MM.hover(jM.idx, OM) : MM.moveTo(OM));
        if (PM) return void("element" === jM.kind ? (0, FM.t)(jM.element, jM.element, Nr(OM)) : MM.hover(null, OM));
        MM.hover(null, OM);
        const mM = "element" === jM.kind ? jM.element : null;
        "element" === LM.kind ? (0, FM.t)(LM.element, mM, Nr(OM)) : mM && (0, FM.t)(null, mM, Nr(OM))
      }
      invalidate() {
        this.signature = ""
      }
      clear(MM) {
        const rM = this.hovered;
        this.hovered = Yr, this.signature = "", "none" !== rM.kind && (this.leaveElement(rM, null, this.lastPoint), MM && "slot" === rM.kind && MM.hover(null, this.lastPoint))
      }
      leaveElement(MM, rM, iM) {
        "element" === MM.kind && (0, FM.t)(MM.element, rM, Nr(iM))
      }
    }
    class vr {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(MM, rM) {
        eM(MM) && (this.lastTiltedMs = rM)
      }
      allowsClick(MM) {
        return MM - this.lastTiltedMs > 150
      }
    }
    class Fr {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(MM) {
        return 0 !== (0, hM.i)(MM, .2).y
      }
      step(MM, rM, iM) {
        MM !== this.container && (this.container = MM, this.remainder = 0);
        const OM = bM(rM, iM).y;
        if (0 === OM) return this.remainder = 0, !1;
        const SM = this.remainder + OM,
          jM = Math.trunc(SM);
        if (this.remainder = SM - jM, 0 === jM) return !1;
        const aM = MM.scrollTop;
        return MM.scrollTop = aM + jM, MM.scrollTop !== aM
      }
      current() {
        var MM;
        return null !== (MM = this.container) && void 0 !== MM && MM.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Br = iM(9310);
    const Xr = "[data-pad-inventory-default]",
      Ir = ".HotBarGameItemsContainer .InvenItem.Selected",
      Kr = {
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
      qr = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Tr = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Vr = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      cr = [...Tr, ...Vr],
      Mi = () => {
        return MM = (0, zM.m)("inventory"), !cr.map(zM.m).includes(MM) && !(0, hM.G)(MM);
        var MM
      },
      ri = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ii = (MM, rM) => {
        const iM = !(null === rM || void 0 === rM || !rM.isHolding());
        return function(MM, rM) {
          const iM = MM.find((MM => MM.visible && rM(MM)));
          if (iM) return iM;
          for (var OM = arguments.length, SM = new Array(OM > 2 ? OM - 2 : 0), jM = 2; jM < OM; jM++) SM[jM - 2] = arguments[jM];
          for (const aM of SM) {
            const rM = Er(MM.filter(aM));
            if (rM) return rM
          }
          return Er(MM)
        }(MM, (MM => {
          const {
            element: rM
          } = MM;
          return rM.matches(Xr) || null !== rM.querySelector(Xr) || rM.matches(Ir)
        }), (MM => "slot" === MM.kind ? iM || null !== MM.idx && !(null === rM || void 0 === rM || !rM.hasItemAt(MM.idx)) : "recipe" === MM.kind || "pending" === MM.kind), (MM => "slot" === MM.kind || "button" === MM.kind))
      };
    class Oi {
      constructor() {
        this.set = null, this.observer = new MutationObserver((MM => {
          MM.some((MM => !kr(MM.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = MM => {
          this.scrolled(MM.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const MM = [],
              rM = [];
            let iM = !1;
            const OM = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              SM = new Map,
              jM = new cM(rM);
            for (const LM of document.querySelectorAll(Gr)) {
              const zM = Wr(LM);
              iM ||= null !== LM.querySelector(".CreativeCategoryTab");
              for (const iM of LM.querySelectorAll(`${Cr}:first-child`)) {
                const aM = iM.parentElement;
                Dr(aM, LM, sr(zM, aM), OM, MM, rM, jM, SM)
              }
              for (const iM of LM.querySelectorAll(er)) {
                var aM, PM, nM, QM;
                if (iM.closest(Cr) || iM.closest("[data-pad-ignore]")) continue;
                const mM = null === (aM = iM.parentElement) || void 0 === aM ? void 0 : aM.closest(er);
                if (mM && LM.contains(mM)) continue;
                const HM = tr(iM),
                  hM = gr(iM, HM);
                if (-1 === hM) continue;
                const JM = Or(iM.getBoundingClientRect());
                rM.push({
                  element: iM,
                  rect: JM
                });
                const dM = jM.findForParent(iM.parentElement, LM),
                  yM = dM && !SM.has(dM.container) ? dM : null;
                (yM ? Sr(JM) : jr(JM, OM)) && MM.push({
                  key: ir(iM),
                  rect: JM,
                  panel: sr(zM, iM),
                  scrollGroup: null !== (PM = null === yM || void 0 === yM ? void 0 : yM.group) && void 0 !== PM ? PM : null,
                  visible: ar(JM, OM, null === yM || void 0 === yM ? void 0 : yM.box),
                  clip: null !== (nM = null === yM || void 0 === yM ? void 0 : yM.box) && void 0 !== nM ? nM : null,
                  element: iM,
                  kind: HM,
                  idx: hM,
                  scrollContainer: null !== (QM = null === yM || void 0 === yM ? void 0 : yM.container) && void 0 !== QM ? QM : null
                })
              }
            }
            for (const [LM, mM] of SM) mM.holdsOthers = rM.some((MM => MM.element !== LM && LM.contains(MM.element) && !MM.element.closest(Cr)));
            const zM = new Map;
            for (const LM of MM) zM.set(LM.element, LM);
            return {
              targets: MM,
              byElement: zM,
              hasCategories: iM,
              probes: rM,
              scrollers: SM
            }
          })(), this.observer.disconnect();
          for (const MM of document.querySelectorAll(Gr)) this.observer.observe(MM, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(MM) {
        !this.set || MM instanceof Element && ((MM, rM) => {
          const iM = MM.scrollers.get(rM);
          if (!iM || iM.holdsOthers || rM.scrollLeft !== iM.left) return !1;
          const OM = rM.scrollTop - iM.top;
          if (0 === OM) return !0;
          iM.top = rM.scrollTop;
          for (const SM of iM.probes) SM.rect.top -= OM;
          for (const SM of iM.targets) SM.rect.top -= OM, SM.visible = ar(SM.rect, iM.viewport, iM.box);
          return !0
        })(this.set, MM) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((MM => {
          return rM = MM.rect, iM = MM.element.getBoundingClientRect(), !(rM.left === iM.left && rM.top === iM.top && rM.width === iM.width && rM.height === iM.height);
          var rM, iM
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Si = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(hM.A.map((MM => [MM, (0, JM.d)(hM.C)]))), this.stickRepeat = new hM.b((0, JM.d)(hM.eb)), this.pageUpTimer = (0, JM.d)(hM.$), this.pageDownTimer = (0, JM.d)(hM.$), this.stickGate = new GM, this.pointer = null, this.activePress = null, this.dropLatch = new or, this.scroller = new Fr, this.scrollStickClick = new vr, this.hover = new xr, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new xM, this.targets = new Oi, this.hasCategories = !1, this.wasShowing = !1, this.state = fr.e, this.isActive = () => (0, TM.i)(), this.isShowing = () => "inventory" === LM.d.getActiveConsumerName() && (0, HM.g)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, TM.h)()), (0, TM.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var MM;
            this.reopenSlotIdx = null !== (MM = this.focused ? pr(this.focused).idx : null) && void 0 !== MM ? MM : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, TM.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = MM => {
            (0, PM.unstable_batchedUpdates)((() => {
              this.frame(MM)
            }))
          }, this.shouldBlockRealPointer = MM => MM.isTrusted && !(0, yM.s)(MM) && this.isShowing(), this.noteRealPointer = MM => {
            MM instanceof MouseEvent && MM.isTrusted && !(0, yM.s)(MM) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = MM.clientX, this.lastRealPointer.y = MM.clientY)
          }, this.wakePressActs = MM => {
            var rM;
            return MM === (0, zM.m)("inventoryClose") ? !(null !== (rM = (0, TM.h)()) && void 0 !== rM && rM.isHolding()) : !(MM !== (0, zM.m)("inventory") || !Mi()) || ((0, hM.G)(MM) ? this.isNavButton(MM) : Vr.some((rM => (0, zM.m)(rM) === MM)))
          }
        }
        frame(MM) {
          var rM, iM, OM, SM, jM;
          const aM = (0, TM.h)();
          if (!(0, HM.g)()) return void(this.wasShowing && (this.endInteraction(aM), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), MM.wokeDevice && this.focusWakePointer(!(null === aM || void 0 === aM || !aM.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, mM.j)().inventoryNavigation || this.pointer || this.engagePointer();
          const PM = performance.now();
          this.handleNavigation(MM, PM), this.handlePanels(MM), this.handlePaging(MM, PM), this.handleScroll(MM), this.handleButtons(MM, PM, aM), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const nM = this.ensureFocus(),
            QM = this.focusContext(aM);
          this.ring.show(nM);
          const LM = "slot" === QM.kind ? QM.idx : null,
            hM = null !== (rM = null === (iM = QM.actionElement) || void 0 === iM ? void 0 : iM.querySelector(".DoCraftItem")) && void 0 !== rM ? rM : QM.actionElement;
          this.pointer ? (this.hover.sync(aM, LM, hM, ((MM, rM) => {
            const iM = rM ? Ar() : 0;
            return {
              clientX: MM.x - iM,
              clientY: MM.y - iM
            }
          })(this.pointer, QM.holding), QM.holding), XM.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: MM.isHeld((0, zM.m)("inventoryPrimary"))
          })) : nM && this.focused && this.hover.sync(aM, LM, hM, ((MM, rM) => {
            if (!rM) return {
              clientX: MM.left + MM.width - 10,
              clientY: MM.top + MM.height / 2 - 10
            };
            const iM = Ar();
            return {
              clientX: MM.left + MM.width / 2 - iM,
              clientY: MM.top + MM.height / 2 - iM
            }
          })(nM, QM.holding), QM.holding), this.publishState({
            showing: !0,
            kind: QM.kind,
            holding: QM.holding,
            slotHasItem: QM.slotHasItem,
            pressHints: null !== (OM = null === (SM = QM.press) || void 0 === SM ? void 0 : SM.hints) && void 0 !== OM ? OM : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Zr(this.focusTarget),
            openButtonCloses: Mi(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === QM.kind && !(null === (jM = QM.actionElement) || void 0 === jM || !jM.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(MM) {
          var rM;
          const iM = (0, HM.d)();
          if (!iM) return;
          this.targets.revalidate();
          const OM = this.getTargets().targets;
          this.setFocus(null !== (rM = lr(iM, OM)) && void 0 !== rM ? rM : MM ? Jr(iM, OM, (MM => {
            let {
              rect: rM
            } = MM;
            const OM = Math.max(rM.left - iM.x, 0, iM.x - (rM.left + rM.width)),
              SM = Math.max(rM.top - iM.y, 0, iM.y - (rM.top + rM.height));
            return Math.hypot(OM, SM) <= Math.min(rM.width, rM.height) / 2
          })) : null, !1), "cursor" === (0, mM.j)().inventoryNavigation && (this.pointer = {
            x: iM.x,
            y: iM.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const MM = this.lastRealPointer;
          if (!MM || "keyboardMouse" !== nM.d.get("activeInputDevice")) return;
          const rM = document.elementFromPoint(MM.x, MM.y);
          rM && (0, FM.t)(null, rM, MM)
        }
        endInteraction(MM) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const rM of this.dpadTimers.values()) rM.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(MM), this.ring.hide(), this.releasePointer(), this.publishState(fr.e)
        }
        getTargets() {
          const MM = this.targets.get();
          return this.hasCategories = MM.hasCategories, MM
        }
        currentTarget() {
          var MM;
          return this.focused && null !== (MM = this.getTargets().byElement.get(this.focused)) && void 0 !== MM ? MM : null
        }
        readFocusRect() {
          const MM = this.focused;
          if (null === MM || void 0 === MM || !MM.isConnected || !MM.closest(Gr)) return null;
          const rM = MM.getBoundingClientRect();
          return rM.width > 0 && rM.height > 0 ? {
            left: rM.left,
            top: rM.top,
            width: rM.width,
            height: rM.height
          } : null
        }
        ensureFocus() {
          const MM = this.readFocusRect();
          if (MM || this.pointer) return MM;
          const {
            targets: rM,
            byElement: iM
          } = this.getTargets();
          let OM = null,
            SM = !1;
          if (this.lastRect) OM = Jr(Pr(this.lastRect), rM);
          else {
            var jM, aM;
            const MM = ((MM, rM) => {
                const iM = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return iM ? ii(MM.filter((MM => iM.contains(MM.element))), rM) : null
              })(rM, (0, TM.h)()),
              PM = rM.find((MM => null !== MM.idx && MM.idx === this.reopenSlotIdx)),
              nM = document.querySelector(Ir);
            SM = null !== MM || void 0 !== PM, OM = null !== (jM = null !== (aM = null !== MM && void 0 !== MM ? MM : PM) && void 0 !== aM ? aM : nM && iM.get(nM)) && void 0 !== jM ? jM : Er(rM)
          }
          return this.setFocus(OM, SM), this.lastRect
        }
        setFocus(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          MM && (this.focused = MM.element, this.focusTarget = MM, this.panelMemory.set(MM.panel, MM.element), rM && MM.scrollContainer && ((MM, rM) => {
            const iM = MM.getBoundingClientRect(),
              OM = DM(rM),
              SM = rM.scrollTop;
            return iM.top < OM.top ? rM.scrollTop -= OM.top - iM.top : iM.bottom > OM.bottom && (rM.scrollTop += iM.bottom - OM.bottom), rM.scrollTop !== SM
          })(MM.element, MM.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, mM.j)().inventoryNavigation) {
              if (this.lastRect) {
                const MM = Pr(this.lastRect);
                this.pointer = {
                  x: MM.x,
                  y: MM.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const MM = this.lastRect ? Pr(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: MM.x,
            y: MM.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, XM.hide()
        }
        hoverAtPointer() {
          var MM;
          const rM = lr(this.pointer, this.getTargets().targets);
          this.focusTarget = rM, (null === rM || void 0 === rM ? void 0 : rM.element) !== this.focused && (this.focused = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.element) && void 0 !== MM ? MM : null, rM && (this.panelMemory.set(rM.panel, rM.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(MM, rM) {
          const iM = this.focusTarget,
            OM = iM && (0, mM.j)().cursorMagnetism ? Pr(dr(iM)) : null;
          this.pointer = CM(this.pointer, {
            stick: MM.leftStick,
            moveDeadzone: (0, mM.j)().moveDeadzone,
            dpad: rM,
            dtMs: MM.dtMs,
            cursorSpeedPercent: (0, mM.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: OM
            }
          })
        }
        move(MM) {
          this.targets.revalidate();
          const rM = this.currentTarget();
          rM && this.setFocus(hr(rM, this.getTargets().targets, MM))
        }
        step(MM) {
          const rM = this.pointer;
          if (rM && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((MM, rM, iM) => {
            var OM;
            const SM = {
              key: "",
              rect: {
                left: MM.x,
                top: MM.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (OM = hr(SM, rM, iM)) && void 0 !== OM ? OM : Jr(MM, rM)
          })(rM, this.getTargets().targets, MM));
          this.move(MM)
        }
        isNavButton(MM) {
          return !Tr.some((rM => (0, zM.m)(rM) === MM)) && !(MM === (0, zM.m)("inventory") && Mi())
        }
        handleNavigation(MM, rM) {
          const iM = (0, mM.j)().inventoryNavigation,
            OM = {
              x: 0,
              y: 0
            };
          let SM = null;
          for (const nM of hM.A) {
            const jM = this.isNavButton(nM) && MM.isHeld(nM);
            jM && (OM.x += Kr[nM].x, OM.y += Kr[nM].y), this.dpadTimers.get(nM).update(jM, rM) && "cursor" !== iM && (SM ??= nM)
          }
          const jM = this.stickGate.update(MM.leftStick, (0, mM.j)().moveDeadzone);
          if (SM && (this.step(SM), this.stickGate.lock()), "slot" !== iM) {
            const rM = ((MM, rM, iM, OM) => "hybrid" !== MM ? "cursor" === MM : !OM && (rM || iM))(iM, null !== this.pointer, jM, null !== SM);
            return rM && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(MM, "cursor" === iM ? OM : {
              x: 0,
              y: 0
            }))
          }
          const aM = (0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone),
            PM = this.stickRepeat.update(jM ? (0, hM.hb)(aM) : null, rM);
          PM && this.move(PM)
        }
        applyCategoryPlace() {
          const MM = this.placeAfterCategory;
          if (!MM) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const rM = Jr(Pr(MM.rect), this.getTargets().targets, (rM => rM.scrollGroup === MM.scrollGroup));
          this.setFocus(rM, !1)
        }
        applyFocusRequest() {
          const MM = (0, TM.t)();
          MM && (this.targets.invalidate(), this.setFocus((0, TM.e)(this.getTargets().targets, MM)))
        }
        handlePanels(MM) {
          var rM, iM, OM;
          const SM = MM.wasPressed((0, zM.m)("inventoryPanelPrevious")),
            jM = MM.wasPressed((0, zM.m)("inventoryPanelNext"));
          if (!SM && !jM) return;
          const {
            targets: aM
          } = this.getTargets(), PM = (nM = ((MM, rM) => {
            const iM = [];
            for (const SM of MM) SM.visible && !iM.includes(SM.panel) && iM.push(SM.panel);
            const OM = MM => {
              const OM = rM.indexOf(MM);
              return -1 === OM ? rM.length + iM.indexOf(MM) : OM
            };
            return iM.sort(((MM, rM) => OM(MM) - OM(rM)))
          })(aM, wr), QM = null !== (rM = null === (iM = this.focusTarget) || void 0 === iM ? void 0 : iM.panel) && void 0 !== rM ? rM : null, LM = jM ? 1 : -1, 0 === nM.length ? null : nM[nr(null === QM ? -1 : nM.indexOf(QM), nM.length, LM)]);
          var nM, QM, LM;
          if (null === PM) return;
          const mM = this.panelMemory.get(PM),
            HM = aM.filter((MM => MM.panel === PM)),
            hM = null !== (OM = HM.find((MM => MM.element === mM && MM.visible))) && void 0 !== OM ? OM : ii(HM, (0, TM.h)());
          this.setFocus(hM)
        }
        handlePaging(MM, rM) {
          const iM = (0, zM.m)("menuPageUp"),
            OM = (0, zM.m)("menuPageDown"),
            SM = this.pageUpTimer.update(MM.isHeld(iM), rM),
            jM = this.pageDownTimer.update(MM.isHeld(OM), rM);
          if (!SM && !jM) return;
          const aM = jM ? 1 : -1;
          if (!MM.wasPressed(jM ? OM : iM) && this.hasCategories) return;
          if ((MM => {
              const rM = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === rM.length) return !1;
              const iM = rM.findIndex((MM => MM.classList.contains("Selected"))),
                OM = rM[nr(iM, rM.length, MM)];
              return (0, FM.q)(OM, (0, FM.z)(OM)), !0
            })(aM)) {
            var PM, nM;
            this.targets.invalidate();
            const MM = null !== (PM = null === (nM = this.focusTarget) || void 0 === nM ? void 0 : nM.scrollGroup) && void 0 !== PM ? PM : null,
              rM = this.readFocusRect();
            return void(this.placeAfterCategory = null !== MM && rM && !this.pointer ? {
              rect: rM,
              scrollGroup: MM
            } : null)
          }
          const {
            targets: QM
          } = this.getTargets(), LM = this.currentTarget(), mM = LM && Zr(LM) ? LM : QM.find((MM => Zr(MM) && MM.visible));
          if (!mM) return;
          const HM = ((MM, rM, iM, OM) => {
            if (null === MM.scrollGroup) return null;
            const SM = Pr(MM.rect),
              jM = SM.x,
              aM = SM.y + ("Down" === iM ? OM : -OM);
            let PM = null,
              nM = 1 / 0;
            for (const QM of rM) {
              if (QM.scrollGroup !== MM.scrollGroup || QM.key === MM.key) continue;
              const rM = Pr(QM.rect);
              if ("Down" === iM ? rM.y <= SM.y : rM.y >= SM.y) continue;
              const OM = Math.hypot(rM.x - jM, rM.y - aM);
              OM < nM && (PM = QM, nM = OM)
            }
            return PM
          })(mM, QM, aM > 0 ? "Down" : "Up", mM.scrollContainer.clientHeight);
          this.setFocus(null !== HM && void 0 !== HM ? HM : mM)
        }
        handleScroll(MM) {
          var rM, iM, OM, SM, jM, aM;
          if (!this.scroller.isScrolling(MM.rightStick)) return void this.scroller.reset();
          const {
            targets: PM
          } = this.getTargets(), nM = this.pointer, QM = !nM && this.focusTarget && Zr(this.focusTarget) ? this.focusTarget.scrollContainer : null, zM = nM && (null === (rM = PM.find((MM => MM.clip && yr(MM.clip, nM)))) || void 0 === rM ? void 0 : rM.scrollContainer), LM = null !== (iM = null !== (OM = null !== (SM = this.scroller.current()) && void 0 !== SM ? SM : zM) && void 0 !== OM ? OM : QM) && void 0 !== iM ? iM : null === (jM = PM.find(Zr)) || void 0 === jM ? void 0 : jM.scrollContainer;
          if (!LM || !this.scroller.step(LM, MM.rightStick, MM.dtMs)) return;
          this.targets.scrolled(LM);
          const mM = nM || (null === (aM = this.focusTarget) || void 0 === aM ? void 0 : aM.scrollContainer) !== LM ? null : this.readFocusRect();
          if (!mM) return;
          const HM = DM(LM),
            hM = Pr(mM);
          if (hM.y < HM.top || hM.y > HM.bottom) {
            const MM = this.focusTarget.scrollGroup,
              rM = Jr(hM, this.getTargets().targets, (rM => rM.scrollGroup === MM));
            this.setFocus(rM, !1)
          }
        }
        focusContext(MM) {
          const {
            kind: rM,
            idx: iM
          } = this.focused ? pr(this.focused) : {
            kind: null,
            idx: null
          }, OM = this.focused ? ur(this.focused) : null, SM = OM ? (0, Br.b)(OM) : null;
          return {
            kind: rM,
            idx: iM,
            actionElement: OM,
            press: SM,
            hasPress: null !== SM,
            hasBack: !(null === SM || void 0 === SM || !SM.back),
            holding: MM.isHolding(),
            slotHasItem: null !== iM && MM.hasItemAt(iM)
          }
        }
        handleButtons(MM, rM, iM) {
          var OM, SM;
          if (!this.activePress || MM.isHeld(this.activePress.button) && (OM = this.activePress.target, SM = this.focused, null !== OM.recipe ? Rr(SM).recipe === OM.recipe : SM === OM.element) || this.releasePress(), this.scrollStickClick.update(MM.rightStick, rM), !this.handleHotbarPick(MM, iM)) {
            for (const [OM, SM] of qr) {
              const jM = (0, zM.m)(SM);
              if (!MM.wasPressed(jM) || "openButton" === OM && !Mi()) continue;
              if ("RS" === jM && !this.scrollStickClick.allowsClick(rM)) continue;
              const aM = this.focusContext(iM),
                PM = KM(OM, aM);
              PM && this.runIntent(PM, aM, jM, iM)
            }
            this.handleDrop(MM, rM, iM)
          }
        }
        handleHotbarPick(MM, rM) {
          const iM = this.hotbarPick;
          if (!iM) return !1;
          const OM = MM.wasPressed((0, zM.m)("inventoryPrimary")) || MM.wasPressed((0, zM.m)("inventoryHotbarSwap"));
          if (!OM && !MM.wasPressed((0, zM.m)("inventoryClose")) && !rM.isHolding()) return !(MM.wasPressed((0, zM.m)("inventory")) && Mi());
          const SM = this.focusTarget;
          OM && "hotbar" === (null === SM || void 0 === SM ? void 0 : SM.panel) && null !== SM.idx && SM.idx !== iM.idx && (rM.swapWithHotbar(SM.idx, iM.idx), this.afterAction()), this.hotbarPick = null;
          const jM = iM.element.isConnected ? this.getTargets().byElement.get(iM.element) : void 0;
          return jM && this.setFocus(jM), !0
        }
        startHotbarPick(MM) {
          var rM;
          const {
            targets: iM,
            byElement: OM
          } = this.getTargets(), SM = document.querySelector(Ir), jM = null !== (rM = SM && OM.get(SM)) && void 0 !== rM ? rM : iM.find((MM => "hotbar" === MM.panel));
          jM && this.focused && (this.hotbarPick = {
            idx: MM,
            element: this.focused
          }, this.setFocus(jM))
        }
        focusKey() {
          return this.focused ? ir(this.focused) : null
        }
        handleDrop(MM, rM, iM) {
          const OM = (0, zM.m)("inventoryDrop");
          if (MM.wasPressed(OM)) {
            const MM = (SM = this.focusContext(iM)).holding ? {
              kind: "sQ"
            } : "slot" === SM.kind && SM.slotHasItem && null !== SM.idx ? {
              kind: "slot",
              idx: SM.idx
            } : null;
            return void(MM && (this.dropFrom(MM, !1, iM), this.dropLatch.press(MM, this.focusKey(), rM, dM.c[(0, mM.j)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var SM;
          const jM = this.dropLatch.update(MM.isHeld(OM), this.focusKey(), rM);
          jM && ((MM, rM, iM) => "sQ" === MM.kind ? rM : !rM && iM(MM.idx))(jM, iM.isHolding(), iM.hasItemAt) && (this.dropFrom(jM, !0, iM), this.afterAction())
        }
        dropFrom(MM, rM, iM) {
          "sQ" === MM.kind ? iM.dropHeld(rM, this.slotPoint()) : iM.dropSlot(MM.idx, rM)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (MM => {
            const rM = Pr(MM);
            return {
              clientX: rM.x,
              clientY: rM.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(MM, rM, iM, OM) {
          const SM = rM.idx,
            jM = rM.actionElement;
          switch (jM && ri.has(MM) && (0, yM.w)(jM), MM) {
            case "slotPrimary":
              OM.primary(SM, this.slotPoint());
              break;
            case "slotSecondary":
              OM.secondary(SM, this.slotPoint());
              break;
            case "slotQuickMove":
              OM.quickMove(SM, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(SM);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(rM.press, "pressPrimary" === MM ? "primary" : "secondary", iM);
              break;
            case "click":
              (0, FM.q)(jM, (0, FM.z)(jM));
              break;
            case "openKeyboard":
              (0, FM.F)(jM) && (0, FM.E)(jM);
              break;
            case "pressBack":
              rM.press.back();
              break;
            case "cancel":
              OM.cancel();
              break;
            case "close":
              return this.releasePress(), void OM.close()
          }
          this.afterAction()
        }
        startPress(MM, rM, iM) {
          this.releasePress(), MM.press(rM) && (this.activePress = {
            handlers: MM,
            button: iM,
            target: Rr(this.focused)
          })
        }
        releasePress() {
          var MM, rM, iM;
          null === (MM = this.activePress) || void 0 === MM || null === (rM = (iM = MM.handlers).release) || void 0 === rM || rM.call(iM), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(MM) {
          ((MM, rM) => {
            var iM, OM, SM, jM, aM, PM;
            return MM.showing === rM.showing && MM.kind === rM.kind && MM.holding === rM.holding && MM.slotHasItem === rM.slotHasItem && (null === (iM = MM.pressHints) || void 0 === iM ? void 0 : iM.primary) === (null === (OM = rM.pressHints) || void 0 === OM ? void 0 : OM.primary) && (null === (SM = MM.pressHints) || void 0 === SM ? void 0 : SM.secondary) === (null === (jM = rM.pressHints) || void 0 === jM ? void 0 : jM.secondary) && (null === (aM = MM.pressHints) || void 0 === aM ? void 0 : aM.back) === (null === (PM = rM.pressHints) || void 0 === PM ? void 0 : PM.back) && MM.hasCategories === rM.hasCategories && MM.hasList === rM.hasList && MM.openButtonCloses === rM.openButtonCloses && MM.steppingSlots === rM.steppingSlots && MM.hotbarPicking === rM.hotbarPicking && MM.quickMoveToHotbar === rM.quickMoveToHotbar && MM.dropStackHold === rM.dropStackHold
          })(MM, this.state) || (this.state = MM, QM.i.Tz(fr.i, MM))
        }
      },
      ji = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var ai = iM(9315),
      Pi = iM(313),
      ni = iM(1717),
      Qi = iM(8738);
    const zi = "[data-pad-secondary]",
      Li = MM => MM instanceof HTMLElement && (0, VM.n)(MM) && !(0, VM.s)(MM),
      mi = MM => {
        const rM = MM.querySelector(zi);
        if (rM && Li(rM)) return rM;
        for (const SM of null !== (iM = null === (OM = MM.parentElement) || void 0 === OM ? void 0 : OM.children) && void 0 !== iM ? iM : []) {
          var iM, OM;
          if (SM !== MM && SM.matches(zi) && Li(SM)) return SM
        }
        return null
      },
      Hi = (MM, rM, iM, OM) => Math.max(0, Math.max(MM, iM) - Math.min(rM, OM)),
      Ji = (MM, rM, iM, OM) => Math.max(0, Math.min(rM, OM) - Math.max(MM, iM)),
      di = (MM, rM, iM) => {
        const OM = (MM.left + MM.right) / 2,
          SM = (MM.top + MM.bottom) / 2,
          jM = (rM.left + rM.right) / 2,
          aM = (rM.top + rM.bottom) / 2;
        if ("Left" === iM || "Right" === iM) {
          const PM = "Right" === iM ? 1 : -1;
          return {
            forwardGap: "Right" === iM ? rM.left - MM.right : MM.left - rM.right,
            centreForward: (jM - OM) * PM,
            sidewaysGap: Hi(MM.top, MM.bottom, rM.top, rM.bottom),
            sidewaysOverlap: Ji(MM.top, MM.bottom, rM.top, rM.bottom),
            centreSideways: Math.abs(aM - SM),
            startSideways: Math.abs(rM.top - MM.top),
            fromSidewaysSize: MM.bottom - MM.top,
            toSidewaysSize: rM.bottom - rM.top,
            toLength: rM.right - rM.left
          }
        }
        const PM = "Down" === iM ? 1 : -1;
        return {
          forwardGap: "Down" === iM ? rM.top - MM.bottom : MM.top - rM.bottom,
          centreForward: (aM - SM) * PM,
          sidewaysGap: Hi(MM.left, MM.right, rM.left, rM.right),
          sidewaysOverlap: Ji(MM.left, MM.right, rM.left, rM.right),
          centreSideways: Math.abs(jM - OM),
          startSideways: Math.abs(rM.left - MM.left),
          fromSidewaysSize: MM.right - MM.left,
          toSidewaysSize: rM.right - rM.left,
          toLength: rM.bottom - rM.top
        }
      },
      yi = MM => MM.centreForward > .5 && MM.forwardGap >= -MM.toLength / 2,
      li = MM => {
        const rM = MM.sidewaysOverlap > 0 ? 0 : 2 * MM.fromSidewaysSize,
          iM = MM.fromSidewaysSize > 1.5 * MM.toSidewaysSize ? MM.startSideways : MM.centreSideways;
        return Math.max(0, MM.forwardGap) + 3 * MM.sidewaysGap + rM + .1 * iM
      },
      Ei = (MM, rM) => Ji(MM.top, MM.bottom, rM.top, rM.bottom) > 0 || rM.bottom - rM.top > rM.right - rM.left,
      Ui = (MM, rM, iM, OM, SM, jM) => {
        const aM = SM ? Ci(MM, rM, iM, SM) : new Set,
          PM = bi(MM, rM, iM, aM);
        return PM < 0 && aM.size > 0 && jM ? Gi(MM, rM, iM, jM) : OM && PM >= 0 ? ei(MM, rM, iM, OM, PM, aM) : PM
      },
      Gi = (MM, rM, iM, OM) => {
        const SM = new Set,
          jM = bi(MM, rM, "Up", SM) >= 0,
          aM = bi(MM, rM, "Down", SM) >= 0,
          PM = new Set;
        return rM.forEach(((rM, iM) => {
          const SM = rM.top + rM.bottom < MM.top + MM.bottom;
          OM[iM] && !(SM ? jM : aM) || PM.add(iM)
        })), bi(MM, rM, iM, PM)
      },
      Ci = (MM, rM, iM, OM) => {
        const SM = new Set;
        return "Left" !== iM && "Right" !== iM || rM.forEach(((rM, iM) => {
          OM[iM] && Ji(MM.top, MM.bottom, rM.top, rM.bottom) <= 0 && SM.add(iM)
        })), SM
      },
      ei = (MM, rM, iM, OM, SM, jM) => {
        const aM = di(MM, rM[SM], iM).forwardGap;
        let PM = SM,
          nM = OM[SM],
          QM = 1 / 0;
        return rM.forEach(((rM, zM) => {
          const LM = OM[zM];
          if (jM.has(zM) || LM < nM || LM === nM && PM === SM) return;
          const mM = di(MM, rM, iM);
          if (!yi(mM) || mM.forwardGap < 0 || mM.forwardGap >= aM) return;
          const HM = li(mM);
          (LM > nM || HM < QM) && (PM = zM, nM = LM, QM = HM)
        })), PM
      },
      bi = (MM, rM, iM, OM) => {
        let SM = -1,
          jM = 1 / 0;
        if (rM.forEach(((rM, aM) => {
            const PM = ((MM, rM, iM) => {
              const OM = di(MM, rM, iM);
              if (!yi(OM)) return null;
              const SM = Math.max(0, OM.forwardGap);
              return OM.sidewaysOverlap <= 0 && OM.sidewaysGap > 2 * (SM + 1) ? null : li(OM)
            })(MM, rM, iM);
            null !== PM && PM < jM && !OM.has(aM) && (jM = PM, SM = aM)
          })), SM < 0) return -1;
        const aM = rM[SM],
          PM = di(MM, aM, iM).forwardGap;
        let nM = PM,
          QM = SM;
        return rM.forEach(((rM, jM) => {
          if (jM === SM || OM.has(jM) || !((MM, rM, iM) => {
              const OM = "Left" === iM || "Right" === iM,
                SM = OM ? Ji(MM.top, MM.bottom, rM.top, rM.bottom) : Ji(MM.left, MM.right, rM.left, rM.right),
                jM = OM ? Math.min(MM.bottom - MM.top, rM.bottom - rM.top) : Math.min(MM.right - MM.left, rM.right - rM.left);
              return SM > 0 && SM >= jM / 2
            })(rM, aM, iM)) return;
          const zM = di(MM, rM, iM);
          yi(zM) && zM.forwardGap + zM.toLength <= PM + 1 && zM.forwardGap < nM && (nM = zM.forwardGap, QM = jM)
        })), QM
      },
      wi = (MM, rM) => {
        let iM = -1,
          OM = 1 / 0;
        return rM.forEach(((rM, SM) => {
          const jM = Math.max(rM.left - MM.x, 0, MM.x - rM.right),
            aM = Math.max(rM.top - MM.y, 0, MM.y - rM.bottom),
            PM = Math.hypot(jM, aM);
          PM < OM && (OM = PM, iM = SM)
        })), iM
      },
      ti = (MM, rM) => {
        const iM = Math.min(MM.bottom - MM.top, rM.bottom - rM.top) / 2;
        return Math.abs(MM.top - rM.top) > iM ? MM.top - rM.top : MM.left - rM.left
      },
      gi = MM => {
        let rM = -1;
        for (let iM = 0; iM < MM.length; iM++)(rM < 0 || ti(MM[iM], MM[rM]) < 0) && (rM = iM);
        return rM
      };
    var ui = iM(1765),
      Ri = iM(9322),
      Wi = iM(9324);
    const si = MM => {
        if ("death" !== MM || "inGame" !== nM.d.get("gameState") || "off" === (0, mM.j)().quickChat || null === (0, ui.e)()) return !1;
        const rM = (0, zM.m)("chat");
        return rM !== (0, zM.m)("menuConfirm") && rM !== (0, zM.m)("menuBack")
      },
      Di = new Ri.c;
    var ki = iM(4633),
      Zi = iM(9328),
      oi = iM(9331);
    const fi = MM => {
        let rM = null;
        for (const iM of MM.querySelectorAll("[data-pad-tabs]"))(0, VM.n)(iM) && (!rM || Number(iM.dataset.padTabs) < Number(rM.dataset.padTabs)) && (rM = iM);
        return rM
      },
      Yi = (MM, rM, iM, OM) => {
        MM.focusWhenFound((() => {
          const SM = MM.pickInitial(rM);
          if (SM && !iM.has(SM) && (null === OM || void 0 === OM || !OM.contains(SM))) return SM;
          const jM = ((MM, rM) => {
              const iM = rM => MM.getEnabledCandidates(rM).filter((MM => !MM.closest("[data-pad-tabs]")));
              for (const OM of (0, VM.i)(rM)) {
                const MM = iM(OM);
                if (MM.length > 0) return MM
              }
              return iM(rM)
            })(MM, rM).filter((MM => !iM.has(MM))),
            aM = gi(jM.map((MM => MM.getBoundingClientRect())));
          return aM >= 0 ? jM[aM] : null
        }), 3e3)
      },
      Ni = (MM, rM, iM, OM) => {
        var SM;
        const jM = ((MM, rM) => {
          if (0 === MM.length) return null;
          const iM = MM.findIndex((MM => "true" === MM.dataset.padSelected));
          return iM < 0 ? rM > 0 ? MM[0] : MM[MM.length - 1] : MM[(iM + rM + MM.length) % MM.length]
        })([...iM.querySelectorAll("[data-pad-tab]")].filter((MM => (0, VM.n)(MM) && !(0, VM.s)(MM))), OM);
        if (!jM) return;
        const aM = null !== (SM = null === MM || void 0 === MM ? void 0 : MM.getFocused()) && void 0 !== SM ? SM : null,
          PM = !(null === aM || void 0 === aM || !aM.isConnected) && iM.contains(aM),
          nM = MM && !PM ? new Set(MM.getEnabledCandidates(rM)) : null;
        (0, FM.d)(jM), MM && (nM ? Yi(MM, rM, nM, iM) : MM.setFocus(jM, {
          byUser: !0
        }))
      },
      Ai = MM => {
        var rM;
        const iM = DM(null !== (rM = gM(MM, "x")) && void 0 !== rM ? rM : MM),
          OM = (0, VM.g)(MM).filter((MM => !(0, VM.s)(MM))),
          SM = OM.filter((MM => kM(MM.getBoundingClientRect(), iM)));
        return (SM.length > 0 ? SM : OM).sort(((MM, rM) => ti(MM.getBoundingClientRect(), rM.getBoundingClientRect())))
      },
      xi = (MM, rM, iM) => {
        const OM = [...rM.querySelectorAll("[data-pad-row]")].filter(VM.n),
          SM = MM.getFocused(),
          jM = SM ? OM.findIndex((MM => MM.contains(SM))) : -1;
        let aM = 0,
          PM = iM > 0 ? 0 : OM.length - 1;
        if (jM >= 0 && SM) aM = Math.max(0, Ai(OM[jM]).indexOf(SM)), PM = jM + iM;
        else if (SM) {
          const MM = SM.getBoundingClientRect(),
            rM = OM.map((rM => {
              const OM = rM.getBoundingClientRect();
              return iM > 0 ? OM.top >= MM.top : OM.bottom <= MM.bottom
            }));
          PM = iM > 0 ? rM.indexOf(!0) : rM.lastIndexOf(!0)
        }
        for (let nM = PM; nM >= 0 && nM < OM.length; nM += iM) {
          const rM = Ai(OM[nM]);
          if (rM.length > 0) return void MM.setFocus(rM[Math.min(aM, rM.length - 1)], {
            byUser: !0
          })
        }
      },
      vi = (MM, rM, iM) => {
        var OM, SM;
        const jM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.getFocused()) && void 0 !== OM ? OM : null,
          aM = null !== jM && void 0 !== jM && jM.closest("[data-pad-row]") ? "x" : "y",
          PM = null !== (SM = jM ? gM(jM, aM, rM) : null) && void 0 !== SM ? SM : RM(rM, aM);
        if (!PM) return;
        const nM = jM ? (0, FM.z)(jM) : null;
        if (sM(PM, aM, iM * ("y" === aM ? PM.clientHeight : PM.clientWidth) * .85), !MM || !nM) return;
        const QM = DM(PM),
          zM = MM.getEnabledCandidates(rM).filter((MM => PM.contains(MM) && kM(MM.getBoundingClientRect(), QM))),
          LM = wi(nM, zM.map((MM => MM.getBoundingClientRect())));
        LM >= 0 && MM.setFocus(zM[LM], {
          scroll: !1,
          byUser: !0
        })
      };
    let Fi = null;
    const Bi = (MM, rM) => {
        var iM, OM;
        const SM = rM.querySelector("[data-pad-friends-column]"),
          jM = MM.getFocused();
        if (!SM || !jM || !SM.contains(jM)) return !1;
        const aM = MM.getEnabledCandidates(rM).filter((MM => !SM.contains(MM))),
          PM = wi((0, FM.z)(jM), aM.map((MM => MM.getBoundingClientRect()))),
          nM = null === (iM = Fi) || void 0 === iM ? void 0 : iM.deref();
        return MM.setFocus(null !== nM && void 0 !== nM && nM.isConnected ? nM : null !== (OM = aM[PM]) && void 0 !== OM ? OM : null, {
          byUser: !0
        }), !0
      },
      Xi = MM => {
        const rM = (0, zM.m)(MM);
        return (0, hM.G)(rM) || Qi.i.some((MM => (0, zM.m)(MM) === rM)) ? null : rM
      },
      Ii = (MM, rM) => {
        const iM = Xi(rM);
        return null !== iM && MM.wasPressed(iM)
      },
      Ki = function(MM, rM, iM) {
        let OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SM = (MM => {
            var rM, iM;
            return null !== (rM = null === (iM = fi(MM)) || void 0 === iM ? void 0 : iM.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== rM ? rM : null
          })(rM),
          jM = MM && SM ? new Set(MM.getEnabledCandidates(rM)) : null;
        (0, ai.d)(), iM === Pi.m.SETTINGS && (0, ni.m)(nM.d.get("openEverythingMenuName")) ? nM.d.set({
          openEverythingMenuName: iM
        }) : (0, ni.B)((0, oi.d)("padMenuShortcut"), iM, OM), MM && jM && SM && Yi(MM, rM, jM, SM.closest("[data-pad-tabs]"))
      },
      qi = MM => null !== MM.closest(".Dropdown-root") || null !== MM.querySelector(".Dropdown-root.is-open"),
      Ti = MM => null !== (0, Zi.c)() && "popup" !== MM.layer.kind && !fi(MM.root) && !qi(MM.root),
      Vi = (0, JM.d)(hM.$),
      ci = (0, JM.d)(hM.$),
      MO = (MM, rM, iM) => {
        if (((MM, rM) => {
            const iM = (0, zM.m)("chat");
            return si(rM) && MM.isHeld(iM) ? "hold" === Di.update(MM.wasPressed(iM), MM.isHeld(iM), performance.now(), dM.c[(0, mM.j)().tapHoldTime].wheelMs) && (LM.d.consumeButton(iM), QM.i.Tz(Wi.k), !0) : (Di.release(), !1)
          })(rM, iM.layer.kind)) return !0;
        const OM = iM.root;
        for (const [aM, PM] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (rM.wasPressed((0, zM.m)(aM))) {
            const rM = qi(OM) ? null : fi(OM);
            if (rM) Ni(MM, OM, rM, PM);
            else if (Ti(iM)) {
              var SM;
              const rM = MM ? new Set(MM.getEnabledCandidates(OM)) : null;
              null !== (SM = (0, Zi.c)()) && void 0 !== SM && SM(PM) && MM && rM && Yi(MM, OM, rM, null)
            } else MM && xi(MM, OM, PM);
            return !0
          } for (const [aM, PM, nM] of [
            ["menuPageUp", -1, Vi],
            ["menuPageDown", 1, ci]
          ]) {
          const iM = (0, zM.m)(aM);
          if (rM.wasPressed(iM) && nM.reset(), nM.update(rM.isHeld(iM), performance.now())) return vi(MM, OM, PM), !0
        }
        const jM = "popup" === iM.layer.kind;
        return Ii(rM, "pause") ? (jM || (0, ni.v)() && "menu" !== iM.layer.kind || Ki(MM, OM, (0, ni.v)() ? Pi.m.SETTINGS : (0, ki.d)()), !0) : !!Ii(rM, "leaderboard") && ("home" === iM.layer.kind ? (MM => {
          const rM = [...MM.querySelectorAll("[data-pad-notifications]")].find(VM.n);
          rM && (0, FM.d)(rM)
        })(OM) : jM || Ki(MM, OM, Pi.m.LOBBY_LEADERBOARD, "inGame" === nM.d.get("gameState")), !0)
      },
      rO = (MM, rM, iM) => {
        if (MO(MM, rM, iM)) return !0;
        const OM = "home" === iM.layer.kind;
        if (rM.wasPressed((0, zM.m)("menuSecondary"))) {
          const rM = MM.getFocused(),
            SM = rM ? mi(rM) : null;
          if (SM) return (0, FM.d)(SM), !0;
          if (OM) {
            const rM = iM.root.querySelector("[data-pad-search] input");
            return rM && (0, VM.p)(rM, iM.root) ? (MM.setFocus(rM, {
              byUser: !0
            }), (0, FM.d)(rM)) : nM.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!OM || !Ii(rM, "inventory")) && (((MM, rM) => {
          var iM, OM;
          const SM = rM.querySelector("[data-pad-friends-column]");
          if (!SM || !(0, VM.n)(SM)) return void(0, ni.B)((0, oi.d)("padMenuShortcut"), Pi.m.SOCIAL);
          if (Bi(MM, rM)) return;
          const jM = null !== (iM = null === (OM = SM.querySelector("[data-pad-friends-start]")) || void 0 === OM ? void 0 : OM.getBoundingClientRect().top) && void 0 !== iM ? iM : -1 / 0,
            aM = MM.getEnabledCandidates(SM),
            PM = aM.filter((MM => MM.getBoundingClientRect().top >= jM)),
            nM = PM.length > 0 ? PM : aM,
            QM = gi(nM.map((MM => MM.getBoundingClientRect())));
          MM.setFocus(QM >= 0 ? nM[QM] : null, {
            byUser: !0
          })
        })(MM, iM.root), !0)
      },
      iO = MM => {
        var rM, iM, OM;
        const SM = (0, FM.A)(MM);
        if (null !== SM) return SM;
        const jM = (null !== (rM = null !== (iM = null !== (OM = MM.getAttribute("aria-label")) && void 0 !== OM ? OM : MM.getAttribute("title")) && void 0 !== iM ? iM : MM.textContent) && void 0 !== rM ? rM : "").replace(/\s+/g, " ").trim();
        return jM ? `${MM.tagName}:${jM.slice(0,100)}` : null
      };
    class OO {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(MM) {
        const rM = this.history.indexOf(MM);
        if (rM >= 0) {
          for (const MM of this.history.splice(rM + 1)) this.remembered.delete(MM);
          return !0
        }
        return this.remembered.delete(MM), this.history.push(MM), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(MM) {
        this.remembered.delete(MM);
        const rM = this.history.indexOf(MM);
        rM >= 0 && this.history.splice(rM, 1)
      }
      remember(MM, rM, iM, OM) {
        const SM = iO(rM),
          jM = (0, FM.A)(rM),
          aM = null !== jM && ((MM, rM) => {
            let iM = 0;
            for (const OM of MM.querySelectorAll("[data-pad-key], [href]"))
              if ((OM.getAttribute("data-pad-key") === rM || OM.getAttribute("href") === rM) && (iM++, iM > 1)) return !0;
            return !1
          })(iM, jM) ? Math.max(0, this.twins(OM(), jM).indexOf(rM)) : 0;
        this.remembered.set(MM, {
          element: new WeakRef(rM),
          identity: SM,
          ordinal: aM
        })
      }
      has(MM) {
        return this.remembered.has(MM)
      }
      recall(MM, rM) {
        var iM, OM;
        const SM = this.remembered.get(MM);
        if (!SM) return null;
        const jM = SM.element.deref();
        if (jM && rM.includes(jM)) return jM;
        if (null === SM.identity) return null;
        const aM = this.twins(rM, SM.identity);
        return null !== (iM = null !== (OM = aM[SM.ordinal]) && void 0 !== OM ? OM : aM[0]) && void 0 !== iM ? iM : null
      }
      twins(MM, rM) {
        return MM.filter((MM => iO(MM) === rM))
      }
    }
    var SO = iM(1287);
    const jO = MM => {
        const rM = [];
        let iM = MM;
        for (; iM && iM !== document.body;) {
          const MM = getComputedStyle(iM).zIndex;
          "auto" !== MM && rM.push(Number(MM) || 0), iM = iM.parentElement
        }
        return rM.reverse()
      },
      aO = (MM, rM) => {
        const iM = ((MM, rM) => {
          const iM = Math.max(MM.length, rM.length);
          for (let jM = 0; jM < iM; jM++) {
            var OM, SM;
            const iM = (null !== (OM = MM[jM]) && void 0 !== OM ? OM : 0) - (null !== (SM = rM[jM]) && void 0 !== SM ? SM : 0);
            if (0 !== iM) return iM
          }
          return 0
        })(jO(MM), jO(rM));
        if (0 !== iM) return iM > 0;
        if (MM.contains(rM)) return !1;
        if (rM.contains(MM)) return !0;
        const OM = MM.compareDocumentPosition(rM);
        return !!(OM & Node.DOCUMENT_POSITION_PRECEDING) || !(OM & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      PO = (MM, rM) => {
        var iM;
        return null !== (iM = aO(MM.root, rM.root)) && void 0 !== iM ? iM : MM.order > rM.order
      },
      nO = (MM, rM) => rM.some((rM => !rM.contains(MM) && !MM.contains(rM) && !0 === aO(rM, MM)));
    let QO = null,
      zO = null,
      LO = -1;
    const mO = () => {
        var MM;
        const rM = null === (MM = document.timeline) || void 0 === MM ? void 0 : MM.currentTime,
          iM = "number" === typeof rM ? rM : null;
        if (null !== iM && iM === zO && LO === (0, SO.e)()) return QO;
        let OM = null;
        const SM = [],
          jM = [...document.querySelectorAll("[data-pad-covers]")].filter(VM.n);
        for (const aM of (0, SO.h)()) {
          const MM = aM.getRoot(),
            rM = !!MM && (0, VM.n)(MM) && !nO(MM, jM);
          if (aM.shown && !rM && SM.push(aM), aM.shown = rM, !MM || !rM) continue;
          const iM = {
            layer: aM,
            root: MM,
            order: aM.order
          };
          OM && !PO(iM, OM) || (OM = iM)
        }
        QO = OM, zO = iM, LO = (0, SO.e)();
        for (const aM of SM)(0, SO.k)(aM);
        return QO
      },
      HO = () => {
        const MM = mO();
        return !(null === MM || void 0 === MM || !MM.layer.close) && (MM.layer.close(), zO = null, !0)
      },
      hO = () => {
        var MM, rM;
        return null !== (MM = null === (rM = mO()) || void 0 === rM ? void 0 : rM.root) && void 0 !== MM ? MM : null
      },
      JO = MM => MM ? {
        ...MM,
        root: hO()
      } : null;
    let dO = null,
      yO = null,
      lO = (0, mM.j)().menuNavigation,
      EO = null;
    const UO = new GM;
    let GO = null;
    QM.i.subscribe(mM.i, (() => {
      const MM = (0, mM.j)().menuNavigation;
      MM !== lO && (lO = MM, dO = null, yO = null)
    }));
    const CO = () => {
        var MM;
        return null !== (MM = dO) && void 0 !== MM ? MM : (0, mM.j)().menuNavigation
      },
      eO = MM => {
        if (gO()) {
          if (EO = JO(MM), "hybrid" === CO()) return UO.lock(), void(yO = yO ? null : hO());
          dO = "focus" === CO() ? "cursor" : "focus"
        }
      },
      bO = () => {
        const MM = EO;
        return EO = null, MM
      };
    let wO = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const tO = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const iM = wO.root === MM,
          OM = iM ? wO.firstSeenMs : rM,
          SM = wO.has || rM - OM > 1e3;
        return (!iM || !SM || rM - wO.atMs > 250) && (wO = {
          root: MM,
          firstSeenMs: OM,
          atMs: rM,
          has: (0, VM.l)(MM)
        }), wO.has
      },
      gO = () => {
        const MM = hO();
        return null !== MM && tO(MM)
      },
      uO = () => {
        const MM = mO();
        return yO && (null === MM || void 0 === MM ? void 0 : MM.root) !== yO && (yO = null), (MM => {
          let {
            mode: rM,
            hasLayer: iM,
            hasCandidates: OM,
            hybridCursorEngaged: SM
          } = MM;
          return iM ? "cursor" !== rM && OM() ? "hybrid" === rM && SM ? "cursor" : "focus" : "cursor" : null
        })({
          mode: CO(),
          hasLayer: null !== MM,
          hasCandidates: () => null !== MM && tO(MM.root),
          hybridCursorEngaged: null !== yO
        })
      },
      RO = () => "hybrid" === CO() && gO(),
      pO = "pad-focused";
    var WO = iM(4927),
      sO = iM(5419);
    const DO = "[data-pad-destructive]",
      kO = `${DO}, [data-pad-back]`,
      ZO = MM => ({
        rect: MM.getBoundingClientRect(),
        destructive: MM.matches(DO),
        closes: null !== MM.closest("[data-pad-close-button]"),
        unavailable: MM.matches("[data-pad-unavailable]")
      }),
      oO = MM => {
        let {
          destructive: rM,
          closes: iM,
          unavailable: OM
        } = MM;
        return rM ? iM ? 2 : 3 : OM ? 1 : 0
      },
      fO = MM => {
        let rM = -1;
        for (let iM = 0; iM < MM.length; iM++) {
          if (rM < 0) {
            rM = iM;
            continue
          }
          const OM = MM[iM],
            SM = MM[rM];
          oO(OM) === oO(SM) ? ti(OM.rect, SM.rect) < 0 && (rM = iM) : oO(OM) < oO(SM) && (rM = iM)
        }
        return rM
      },
      YO = "[data-pad-tabs]",
      NO = "[data-pad-tab]",
      AO = (MM, rM) => {
        const iM = MM.querySelector(`${NO}[data-pad-selected='true']`);
        return iM && rM.includes(iM) ? iM : null
      },
      xO = (MM, rM) => {
        let iM = rM;
        for (let OM = rM.parentElement; OM && !OM.contains(MM); OM = OM.parentElement) iM = OM;
        return iM
      };
    class vO {
      constructor() {
        this.contentReturn = null
      }
      redirect(MM, rM, iM, OM) {
        var SM, jM;
        const aM = MM.closest(YO),
          PM = rM.closest(YO);
        var nM;
        if (PM && PM !== aM) return aM || (this.contentReturn = new WeakRef(MM)), null !== (nM = AO(PM, iM)) && void 0 !== nM ? nM : rM;
        if (!aM || PM) return rM;
        const QM = xO(MM, rM),
          zM = null === (SM = this.contentReturn) || void 0 === SM ? void 0 : SM.deref();
        return zM && QM.contains(zM) && iM.includes(zM) ? zM : null !== (jM = this.pickRegionStart(QM, gM(rM, "y", OM), iM)) && void 0 !== jM ? jM : rM
      }
      findTabContent(MM, rM, iM) {
        const OM = MM.closest(YO);
        if (!OM || !MM.matches(NO) || OM.contains(rM)) return null;
        const SM = rM.closest(YO);
        if (SM && Number(SM.dataset.padTabs) <= Number(OM.dataset.padTabs)) return null;
        const jM = xO(MM, rM);
        return iM.some((MM => jM.contains(MM) && !MM.closest(kO))) || !rM.closest(kO) ? jM : null
      }
      pickContentStart(MM, rM, iM) {
        return this.contentReturn = null, this.pickRegionStart(MM, gM(MM, "y", iM), rM)
      }
      pickReplacedContentStart(MM, rM, iM, OM) {
        if (!rM.contains(MM)) return null;
        const SM = xO(rM, MM),
          jM = iM.filter((MM => rM.contains(MM) && !SM.contains(MM) && !MM.closest(kO)));
        return 0 === jM.length ? null : (this.contentReturn = null, this.pickRegionStart(rM, gM(jM[0], "y", OM), jM))
      }
      backToStrip(MM, rM, iM) {
        if (MM.closest(YO)) return null;
        const OM = fi(iM);
        for (const SM of iM.querySelectorAll(YO)) {
          if (Number(SM.dataset.padTabs) <= 1 || SM === OM) continue;
          const jM = AO(SM, rM),
            aM = jM ? xO(MM, SM).parentElement : null;
          if (jM && aM && aM !== iM && iM.contains(aM)) return this.contentReturn = new WeakRef(MM), jM
        }
        return null
      }
      pickRegionStart(MM, rM, iM) {
        const OM = DM(rM),
          SM = MM => {
            const rM = iM.filter((rM => MM.contains(rM) && !rM.closest(YO) && kM(rM.getBoundingClientRect(), OM))),
              SM = fO(rM.map(ZO));
            return SM >= 0 ? rM[SM] : null
          };
        for (const jM of (0, VM.i)(MM)) {
          const MM = SM(jM);
          if (MM) return MM
        }
        for (const jM of MM.querySelectorAll(YO)) {
          const MM = AO(jM, iM);
          if (MM) return MM
        }
        return SM(MM)
      }
    }
    const FO = "[data-pad-default-focus], .Dropdown-option.is-selected",
      BO = ".Dropdown-root.is-open > .Dropdown-menu",
      XO = "[data-pad-no-step-in]",
      IO = "[data-pad-tabs]",
      KO = "[data-pad-press-area]",
      qO = MM => {
        let rM = MM;
        for (let iM = 0; rM && iM <= 4; iM++, rM = rM.parentElement) {
          const iM = rM.querySelector(".CircleInfo");
          if (iM) return rM === MM || rM.querySelectorAll(VM.c).length <= 1 ? iM : null;
          if (rM !== MM && rM.querySelectorAll(VM.c).length > 1) return null
        }
        return null
      },
      TO = (MM, rM, iM) => {
        (0, FM.t)(MM, rM, iM);
        const OM = null !== MM && void 0 !== MM && MM.isConnected ? qO(MM) : null,
          SM = qO(rM);
        OM !== SM && (0, FM.t)(OM, SM, SM ? (0, FM.z)(SM) : iM, {
          leaveBelow: MM,
          enterBelow: rM
        })
      },
      VO = MM => MM.getBoundingClientRect(),
      cO = (MM, rM, iM) => {
        const OM = new Set(iM);
        for (let SM = MM; SM; SM = SM === rM ? null : SM.parentElement)
          if (OM.has(SM)) return SM;
        return null
      },
      MS = (MM, rM) => !MM.root || MM.root === rM || rM.matches(BO) && MM.root.contains(rM);
    const rS = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new OO, this.tabStripNav = new vO, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, JM.d)(hM.s), this.dpadRepeats = new Map(hM.A.map((MM => [MM, (0, JM.d)(hM.C)]))), this.stickRepeat = new hM.b((0, JM.d)(hM.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const MM = LM.d.register({
            name: "focus",
            isActive: () => (0, HM.g)() && "focus" === uO(),
            onFrame: MM => {
              this.onFrame(MM)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: MM => (0, LM.g)(MM) || MM === (0, zM.m)("menuConfirm") && (0, FM.C)((0, HM.d)())
          }),
          rM = (0, SO.m)((MM => {
            const rM = (0, SO.r)(MM);
            null === MM.memoryKey && this.memory.forget(rM), rM === this.layerKey && (this.layerKey = null)
          }));
        let iM = -1 / 0;
        const OM = aM.g.onFrame((MM => {
            (0, HM.g)() || MM.timestampMs - iM < 100 || (iM = MM.timestampMs, mO())
          })),
          SM = MM => {
            MM.isTrusted && MM.target instanceof Element && aM.g.getActivePad() && this.noteChosenStop(MM.target)
          };
        return document.addEventListener("click", SM, !0), () => {
          MM(), rM(), OM(), document.removeEventListener("click", SM, !0), this.deactivate()
        }
      }
      noteChosenStop(MM) {
        var rM, iM;
        const OM = mO();
        if (!OM || !OM.root.contains(MM)) return;
        const SM = null !== (rM = null === (iM = MM.closest(".Dropdown-root")) || void 0 === iM ? void 0 : iM.querySelector(".Dropdown-control")) && void 0 !== rM ? rM : MM,
          jM = cO(SM, OM.root, this.getEnabledCandidates(OM.root));
        if (!jM) return;
        const aM = (0, SO.r)(OM.layer);
        aM === this.layerKey && OM.root === this.layerRoot || this.beginLayer(OM, aM), this.wasActive ? this.setFocus(jM, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = jM, this.lastFocusedCentre = (0, FM.z)(jM), this.rememberFocus(jM), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      notify() {
        for (const MM of this.listeners) MM()
      }
      deactivate() {
        var MM;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const MM of this.dpadRepeats.values()) MM.reset();
          this.stickRepeat.reset(), null !== (MM = this.focused) && void 0 !== MM && MM.isConnected && TO(this.focused, null, (0, FM.z)(this.focused)), this.notify()
        }
      }
      setFocus(MM) {
        var rM;
        let {
          scroll: iM = !0,
          byUser: OM = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (OM && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), MM === this.focused) return;
        const SM = null !== (rM = this.focused) && void 0 !== rM && rM.isConnected ? this.focused : null;
        if (this.focused = MM, MM) {
          iM && (MM.classList.add(pO), MM.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), OM && ((MM, rM) => {
            const iM = rM.closest("[data-pad-friends-column]");
            iM && MM && !iM.contains(MM) && (Fi = new WeakRef(MM))
          })(SM, MM);
          const rM = (0, FM.z)(MM);
          this.lastFocusedCentre = rM, this.movedInLayer && this.rememberFocus(MM), TO(SM, MM, rM), "false" === MM.getAttribute("aria-pressed") && MM.closest("[data-pad-select-on-focus]") && (0, FM.d)(MM)
        } else SM && TO(SM, null, (0, FM.z)(SM));
        this.notify()
      }
      rememberFocus(MM) {
        const rM = this.layerRoot;
        this.layerKey && rM && this.memory.remember(this.layerKey, MM, rM, (() => this.getEnabledCandidates(rM)))
      }
      noteCursorActivation(MM) {
        const rM = mO();
        if (!rM || !rM.root.contains(MM)) return;
        const iM = this.getEnabledCandidates(rM.root),
          OM = new Set(iM);
        let SM = MM;
        for (; SM && !OM.has(SM);) SM = SM === rM.root ? null : SM.parentElement;
        if (!(SM instanceof HTMLElement)) return;
        const jM = (0, SO.r)(rM.layer);
        this.memory.enter(jM), this.memory.remember(jM, SM, rM.root, (() => iM))
      }
      notePageEnteredByCursor(MM) {
        return this.memory.enter(MM)
      }
      recallStop(MM, rM) {
        return this.findRemembered(MM, rM)
      }
      focusWhenFound(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: MM,
          untilMs: performance.now() + rM,
          holdWhile: iM
        }
      }
      getEnabledCandidates(MM) {
        return (0, VM.g)(MM).filter((MM => !(0, VM.s)(MM)))
      }
      onFrame(MM) {
        var rM;
        const iM = mO();
        if (!iM) return;
        const OM = null !== (rM = this.findOpenDropdown(iM)) && void 0 !== rM ? rM : iM,
          SM = performance.now(),
          jM = (0, SO.r)(OM.layer);
        if (jM !== this.layerKey || OM.root !== this.layerRoot) {
          const rM = this.focused;
          if (null !== this.layerKey && OM.root === this.layerRoot && rM && (0, VM.p)(rM, OM.root)) this.continueLayer(jM, rM), this.wasActive || this.resume(OM.root, SM);
          else {
            const rM = !this.wasActive && !MM.wokeDevice,
              aM = "death" === this.layerKind || rM,
              PM = this.enterLayer(OM, jM);
            "popup" !== OM.layer.kind || OM !== iM || PM ? "menu" === OM.layer.kind && aM && "inGame" === nM.d.get("gameState") && !(0, ai.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = SM + WO.b) : (this.pressGuardExtends = rM, this.pressGuardUntilMs = SM + (rM ? WO.b : aM ? 500 : 250))
          }
        } else this.wasActive || this.resume(OM.root, SM);
        if (this.layerKind = OM.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), MM.wokeDevice && this.focusPointedStop(OM.root), this.validateFocus(OM, SM), SM < this.pressGuardUntilMs && this.pressGuardExtends && (MM.wasPressed((0, zM.m)("menuConfirm")) || MM.wasPressed((0, zM.m)("menuBack"))) && (this.pressGuardUntilMs = SM + WO.b), SM >= this.pressGuardUntilMs && this.handleButtons(MM, OM)) return;
        const aM = "hybrid" === CO();
        if (aM && (MM => {
            const rM = hO();
            return rM !== GO && (GO = rM, UO.lock()), UO.update(MM, (0, mM.j)().moveDeadzone)
          })(MM.leftStick)) return PM = this.getHandoff(), EO = JO(PM), yO = hO(), void LM.d.handOffHeldInput();
        var PM;
        this.handleDirections(MM, OM, SM, !aM), this.handleScroll(MM, OM)
      }
      findOpenDropdown(MM) {
        const rM = MM.root.querySelector(BO);
        if (!rM || !(0, VM.n)(rM)) return null;
        let iM = this.dropdownLayers.get(rM);
        return iM || (this.dropdownLayerCounter++, iM = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: MM.layer.kind,
          getRoot: () => rM,
          close: () => {
            (0, FM.m)(rM)
          },
          memoryKey: null
        }, this.dropdownLayers.set(rM, iM)), {
          layer: iM,
          root: rM,
          order: MM.order
        }
      }
      focusPointedStop(MM) {
        const rM = (0, HM.d)(),
          iM = rM ? document.elementFromPoint(rM.x, rM.y) : null;
        if (!iM || !MM.contains(iM)) return;
        const OM = cO(iM, MM, this.getEnabledCandidates(MM));
        OM && this.setFocus(OM, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(MM, rM) {
        const iM = this.beginLayer(MM, rM),
          OM = bO();
        return OM && MS(OM, MM.root) ? (this.takeOver(MM.root, OM, this.enteredLayerAtMs), iM) : (this.restoreLayerFocus(MM.root, iM), iM)
      }
      beginLayer(MM, rM) {
        return this.layerKey = rM, this.layerRoot = MM.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(rM)
      }
      restoreLayerFocus(MM, rM) {
        const iM = rM && this.layerKey ? this.findRemembered(MM, this.layerKey) : null;
        this.restoredFromMemory = null !== iM, this.setFocus(null !== iM && void 0 !== iM ? iM : this.pickInitial(MM, {
          waitForContent: !0
        }))
      }
      continueLayer(MM, rM) {
        this.layerKey = MM;
        const iM = this.memory.enter(MM);
        this.restoreOnFocusLoss = iM, this.movedInLayer && !iM && this.rememberFocus(rM)
      }
      resume(MM, rM) {
        var iM;
        const OM = bO();
        OM && MS(OM, MM) ? this.takeOver(MM, OM, rM) : null !== (iM = this.focused) && void 0 !== iM && iM.isConnected && TO(null, this.focused, (0, FM.z)(this.focused))
      }
      pickPreferred(MM) {
        var rM;
        return null !== (rM = this.layerKey ? this.findRemembered(MM, this.layerKey) : null) && void 0 !== rM ? rM : this.pickInitial(MM, {
          waitForContent: !0
        })
      }
      findRemembered(MM, rM) {
        return this.memory.has(rM) ? this.memory.recall(rM, this.getEnabledCandidates(MM)) : null
      }
      getHandoff() {
        var MM, rM, iM;
        const OM = null !== (MM = this.focused) && void 0 !== MM && MM.isConnected ? this.focused : null,
          SM = null !== (rM = this.layerRoot) && void 0 !== rM && rM.isConnected ? this.layerRoot : null;
        return {
          point: OM ? (0, FM.z)(OM) : null !== (iM = this.lastFocusedCentre) && void 0 !== iM ? iM : this.getLayerStartPoint(SM),
          element: OM,
          direction: null
        }
      }
      getLayerStartPoint(MM) {
        if (!MM) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const rM = this.pickInitial(MM, {
          includeDisabled: !0
        });
        return (0, FM.z)(null !== rM && void 0 !== rM ? rM : MM)
      }
      takeOver(MM, rM, iM) {
        const {
          element: OM,
          direction: SM,
          point: jM
        } = rM, aM = OM instanceof HTMLElement && (0, VM.p)(OM, MM) ? OM : null;
        if (!SM) {
          const rM = this.focused;
          return aM ? this.setFocus(aM, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(MM, jM), void(this.focused && this.focused === rM && this.focused.isConnected && TO(null, this.focused, (0, FM.z)(this.focused)))
        }
        if (this.dpadRepeats.get(SM).update(!0, iM), aM) return this.setFocus(aM, {
          scroll: !1,
          byUser: !0
        }), void this.move(MM, SM, iM, !0);
        const PM = this.getEnabledCandidates(MM),
          nM = PM.map(VO),
          QM = Ui(new DOMRect(jM.x, jM.y, 0, 0), nM, SM),
          zM = QM >= 0 ? QM : wi(jM, nM);
        this.setFocus(zM >= 0 ? PM[zM] : this.pickInitial(MM), {
          byUser: !0
        })
      }
      focusNearest(MM, rM) {
        const iM = this.getEnabledCandidates(MM),
          OM = wi(rM, iM.map(VO));
        this.setFocus(OM >= 0 ? iM[OM] : this.pickInitial(MM), {
          byUser: !0
        })
      }
      pickDefault(MM) {
        let {
          includeDisabled: rM = !1,
          exclude: iM = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OM = [...MM.querySelectorAll(FO)].filter((OM => (null === iM || void 0 === iM || !iM.has(OM)) && (rM ? (0, VM.t)(OM, MM) : (0, VM.p)(OM, MM)))),
          SM = fO(OM.map(ZO));
        return SM >= 0 ? OM[SM] : null
      }
      pickNewAreaStart(MM, rM) {
        const iM = [...MM.querySelectorAll(KO)].filter(VM.n);
        for (const OM of [...(0, VM.i)(MM), ...iM]) {
          if (rM.has(OM)) continue;
          const MM = this.getEnabledCandidates(OM),
            iM = fO(MM.map(ZO));
          if (iM >= 0) return MM[iM]
        }
        return null
      }
      pickInitial(MM) {
        let {
          includeDisabled: rM = !1,
          waitForContent: iM = !1,
          enteredAtMs: OM = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SM = this.pickDefault(MM, {
          includeDisabled: rM
        });
        if (SM) return SM;
        const jM = MM => rM ? (0, VM.g)(MM) : this.getEnabledCandidates(MM);
        let aM = [];
        for (const mM of (0, VM.i)(MM))
          if (aM = jM(mM), aM.length > 0) break;
        if (0 === aM.length) {
          if (iM && performance.now() - OM < 1e4 && (0, VM.m)(MM)) return null;
          aM = jM(MM)
        }
        const PM = aM.map(VO),
          nM = DM(null),
          QM = aM.filter(((MM, rM) => kM(PM[rM], nM))),
          zM = QM.length > 0 ? QM : aM,
          LM = fO(zM.map(ZO));
        return LM >= 0 ? zM[LM] : null
      }
      validateFocus(MM, rM) {
        if (this.pendingFocus) {
          var iM, OM;
          const SM = this.pendingFocus.find();
          if (SM && (0, VM.p)(SM, MM.root)) return this.pendingFocus = null, void this.setFocus(SM, {
            byUser: !0
          });
          rM > this.pendingFocus.untilMs && (null === (iM = (OM = this.pendingFocus).holdWhile) || void 0 === iM || !iM.call(OM)) && (this.pendingFocus = null)
        }
        const SM = this.focused,
          jM = !!SM && (0, VM.p)(SM, MM.root);
        if (!(!jM && SM && SM === this.lastActivated && rM - this.lastActivatedAtMs < 5e3 && MM.root.contains(SM) && (0, VM.n)(SM) && (0, VM.s)(SM))) {
          if (!jM && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = rM, void this.restoreLayerFocus(MM.root, !0);
          if ((!jM || !this.movedInLayer && !this.scrolledInLayer) && !(rM - this.lastRefocusCheckMs < (jM ? 200 : 50)))
            if (this.lastRefocusCheckMs = rM, jM) {
              const iM = rM - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(MM.root) : null,
                OM = null !== iM && void 0 !== iM ? iM : this.restoredFromMemory ? null : this.pickDefault(MM.root);
              OM && OM !== SM && this.setFocus(OM)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const rM = this.pendingFocus;
                return this.focusNearest(MM.root, this.lastFocusedCentre), void(this.pendingFocus = rM)
              }
              this.setFocus(this.pickPreferred(MM.root))
            }
        }
      }
      handleButtons(MM, rM) {
        if (MM.wasPressed((0, zM.m)("menuToggleCursor"))) return eO(this.getHandoff()), !0;
        if (MM.wasPressed((0, zM.m)("menuBack"))) {
          const MM = (0, FM.m)(rM.root);
          return MM ? this.setFocus(MM, {
            byUser: !0
          }) : Bi(this, rM.root) || ((0, FM.g)(rM.root) ? this.returnToOpener(rM.root) : this.backToStrip(rM.root) || HO()), !0
        }
        const iM = (0, zM.m)("menuConfirm");
        var OM, SM;
        MM.wasPressed(iM) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (OM = null === (SM = this.focused) || void 0 === SM ? void 0 : SM.getAttribute("data-pad-repeat")) && void 0 !== OM ? OM : null, this.confirmRepeated = MM.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (MM.wasReleased(iM)) {
          const MM = this.confirmPressedOn;
          if (this.confirmPressedOn = null, MM && !this.confirmRepeated && MM === this.focused && MM.isConnected && !(0, VM.s)(MM)) {
            const iM = MM.matches("[data-pad-tab]") ? MM.closest(IO) : null;
            iM ? this.enterTab(MM, iM, rM.root, performance.now()) : this.activate(MM)
          }
          return !0
        }
        return this.repeatConfirm(MM, iM), rO(this, MM, rM)
      }
      repeatConfirm(MM, rM) {
        const iM = this.confirmPressedOn;
        iM && null !== this.confirmRepeatKey && MM.isHeld(rM) && (iM === this.focused && iM.isConnected && !(0, VM.s)(iM) && iM.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? iM.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(iM)) : this.confirmRepeatKey = null)
      }
      backToStrip(MM) {
        const rM = this.focused;
        if (!(0, mM.j)().menuBackToCategories) return !1;
        const iM = null !== rM && void 0 !== rM && rM.isConnected ? this.tabStripNav.backToStrip(rM, this.getEnabledCandidates(MM), MM) : null;
        return iM && this.setFocus(iM, {
          byUser: !0
        }), null !== iM
      }
      returnToOpener(MM) {
        const rM = this.lastActivatedKey;
        rM && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var iM;
          return null !== (iM = this.getEnabledCandidates(MM).find((MM => (0, FM.A)(MM) === rM))) && void 0 !== iM ? iM : null
        })))
      }
      activate(MM) {
        var rM;
        if ((0, sO.b)(MM) || (0, FM.B)(MM)) return;
        this.lastActivatedKey = null !== (rM = (0, FM.A)(MM)) && void 0 !== rM ? rM : this.lastActivatedKey, this.lastActivated = MM, this.lastActivatedAtMs = performance.now(), this.rememberFocus(MM);
        const iM = this.layerRoot;
        if (iM) {
          const rM = new Set(iM.querySelectorAll(FO)),
            OM = new Set(iM.querySelectorAll(`[data-pad-initial-area], ${KO}`)),
            SM = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var SM;
            return (0, VM.p)(MM, iM) ? null : null !== (SM = this.pickDefault(iM, {
              exclude: rM
            })) && void 0 !== SM ? SM : this.pickNewAreaStart(iM, OM)
          }), 5e3, (() => MM.isConnected && (0, VM.s)(MM) && performance.now() - SM < 6e4))
        }(0, FM.d)(MM), (0, FM.j)(MM)
      }
      handleDirections(MM, rM, iM, OM) {
        const SM = si(rM.layer.kind) ? (0, zM.m)("chat") : null;
        for (const PM of hM.A) {
          this.dpadRepeats.get(PM).update(MM.isHeld(PM), iM) && (PM !== SM || MM.wasPressed(PM)) && this.move(rM.root, PM, iM, !0)
        }
        const jM = OM ? (0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          aM = this.stickRepeat.update((0, hM.hb)(jM), iM);
        if (aM && this.move(rM.root, aM, iM, !0), this.retryMove && iM >= this.retryMove.atMs) {
          const {
            direction: MM
          } = this.retryMove;
          this.retryMove = null, this.move(rM.root, MM, iM, !1)
        }
      }
      move(MM, rM, iM, OM) {
        var SM;
        let jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (SM = this.tabOpenWait) || void 0 === SM ? void 0 : SM.wait) && rM === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const aM = this.focused;
        if (!aM || !aM.isConnected) {
          const rM = this.pickInitial(MM);
          return void(rM && this.setFocus(rM, {
            byUser: !0
          }))
        }
        const PM = "Left" === rM || "Right" === rM,
          nM = PM ? (0, sO.b)(aM) : null;
        if (nM) return void nM.adjust("Left" === rM ? -1 : 1);
        const QM = MM => null !== MM.closest("[data-pad-friends-column]"),
          zM = QM(aM),
          LM = VO(aM),
          mM = PM || aM.closest(IO) ? null : (MM => {
            const rM = new Map;
            return iM => {
              const OM = iM.closest(IO);
              if (!OM) return !1;
              let SM = rM.get(OM);
              if (void 0 === SM) {
                const iM = VO(OM);
                SM = Ei(MM, iM) && (iM.right <= MM.left || iM.left >= MM.right), rM.set(OM, SM)
              }
              return SM
            }
          })(LM),
          HM = null !== aM.closest(XO),
          hM = this.getEnabledCandidates(MM).filter((MM => MM !== aM && (PM || QM(MM) === zM) && !(null !== mM && void 0 !== mM && mM(MM)) && (HM || !MM.closest(XO)))),
          JM = hM.map(VO),
          dM = gM(aM, "y", MM),
          yM = DM(dM);
        if (!jM && !kM(LM, yM)) {
          const MM = hM.filter(((MM, rM) => kM(JM[rM], yM)));
          if (MM.length > 0) {
            const rM = {
              x: yM.left + yM.width / 2,
              y: yM.top + yM.height / 2
            };
            return void this.setFocus(MM[wi(rM, MM.map(VO))], {
              byUser: !0
            })
          }
        }
        const lM = PM ? ((MM, rM, iM) => {
            const OM = VO(MM),
              SM = MM.closest(IO),
              jM = SM ? VO(SM) : null;
            return rM.map(((rM, aM) => {
              const PM = iM[aM];
              if (PM.bottom > OM.top && PM.top < OM.bottom) return !0;
              const nM = rM.closest(IO);
              if (SM && jM) return nM !== SM && (null !== nM || PM.bottom <= jM.top || PM.top >= jM.bottom);
              if (nM) return !Ei(OM, VO(nM));
              let QM = MM;
              for (let iM = MM.parentElement; iM && !iM.contains(rM); iM = iM.parentElement) QM = iM;
              const zM = VO(QM);
              return PM.right > zM.left && PM.left < zM.right
            }))
          })(aM, hM, JM) : void 0,
          EM = PM && !aM.closest(IO) ? (MM => MM.map((MM => !MM.closest(kO))))(hM) : void 0,
          UM = ((MM, rM) => {
            const iM = [];
            for (let SM = MM; SM; SM = SM.parentElement) iM.push(SM);
            const OM = new Map;
            return iM.forEach(((MM, rM) => {
              OM.set(MM, iM.length - 1 - rM)
            })), rM.map((MM => {
              for (let rM = MM; rM; rM = rM.parentElement) {
                const MM = OM.get(rM);
                if (void 0 !== MM) return MM
              }
              return -1
            }))
          })(aM, hM),
          GM = PM ? "x" : "y",
          CM = gM(aM, GM, MM);
        let eM = Ui(LM, JM, rM, UM, lM, EM);
        if (eM >= 0 && CM && !CM.contains(hM[eM])) {
          const MM = hM.flatMap(((MM, rM) => CM.contains(MM) ? [rM] : [])),
            iM = rM => rM && MM.map((MM => rM[MM])),
            OM = Ui(LM, MM.map((MM => JM[MM])), rM, MM.map((MM => UM[MM])), iM(lM), iM(EM));
          eM = OM >= 0 ? MM[OM] : eM
        }
        if (eM >= 0) return void this.moveTo(aM, hM[eM], hM, MM, rM, jM);
        if (!OM) return;
        const bM = "Right" === rM || "Down" === rM ? 1 : -1;
        if (CM && WM(CM, GM, bM)) {
          const MM = "y" === GM ? CM.clientHeight : CM.clientWidth;
          sM(CM, GM, bM * MM * .5), this.retryMove = {
            direction: rM,
            atMs: iM + 80
          }
        }
      }
      moveTo(MM, rM, iM, OM, SM, jM) {
        const aM = this.tabStripNav.findTabContent(MM, rM, iM);
        aM && "true" !== MM.dataset.padSelected ? this.openTab(MM, aM, OM, SM) : jM && !aM || this.setFocus(this.tabStripNav.redirect(MM, rM, iM, OM), {
          byUser: !0
        })
      }
      openTab(MM, rM, iM, OM) {
        const SM = rM.parentElement;
        (0, FM.d)(MM), this.focusWhenFound((() => "true" !== MM.dataset.padSelected ? null : rM.isConnected ? this.tabStripNav.pickContentStart(rM, this.getEnabledCandidates(iM), iM) : SM ? this.tabStripNav.pickReplacedContentStart(MM, SM, this.getEnabledCandidates(iM), iM) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: OM
        }
      }
      enterTab(MM, rM, iM, OM) {
        this.move(iM, (MM => {
          const rM = [...MM.querySelectorAll(NO)].filter((rM => rM.closest(YO) === MM));
          if (rM.length >= 2) {
            const MM = rM[0].getBoundingClientRect(),
              iM = rM[1].getBoundingClientRect();
            return Math.abs(iM.top - MM.top) > Math.abs(iM.left - MM.left) ? "Right" : "Down"
          }
          const iM = MM.getBoundingClientRect();
          return iM.height > iM.width ? "Right" : "Down"
        })(rM), OM, !1, !0), this.focused !== MM || this.pendingFocus || this.activate(MM)
      }
      handleScroll(MM, rM) {
        const iM = (0, hM.i)(MM.rightStick, .2);
        if (0 === iM.x && 0 === iM.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const OM = MM.dtMs / 1e3;
        for (const jM of ["x", "y"]) {
          var SM;
          const MM = iM[jM];
          if (0 === MM) continue;
          const aM = null !== (SM = gM(this.focused, jM, rM.root)) && void 0 !== SM ? SM : RM(rM.root, jM);
          if (!aM) continue;
          const PM = Math.sign(MM) * MM * MM * 1500 * OM + this.scrollRemainder[jM],
            nM = Math.trunc(PM);
          this.scrollRemainder[jM] = PM - nM, 0 !== nM && (sM(aM, jM, nM), this.scrolledInLayer = !0)
        }
      }
    };
    var iS = iM(8792);
    var OS = iM(9337);
    const SS = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      jS = {
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
          ...SS,
          minIntervalMs: 1e3
        },
        preview: {
          ...SS,
          minIntervalMs: 0
        }
      };
    const aS = new class {
        constructor(MM) {
          this.deps = MM, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = MM => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", MM))
          }
        }
        play(MM, rM) {
          const iM = jS[MM];
          if (!this.deps.isVibrationOn() || iM.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const OM = this.lastPlayedMs[MM];
          if (void 0 !== OM && rM - OM < iM.minIntervalMs) return !1;
          const SM = this.deps.getActuator();
          if (!SM) return !1;
          this.lastPlayedMs[MM] = rM;
          const {
            duration: jM,
            strongMagnitude: aM,
            weakMagnitude: PM
          } = iM;
          try {
            SM.playEffect("dual-rumble", {
              duration: jM,
              strongMagnitude: aM,
              weakMagnitude: PM
            }).catch(this.logFailure)
          } catch (nM) {
            this.logFailure(nM)
          }
          return !0
        }
      }({
        getActuator: () => (MM => {
          const rM = null === MM || void 0 === MM ? void 0 : MM.vibrationActuator;
          return "function" === typeof(null === rM || void 0 === rM ? void 0 : rM.playEffect) ? rM : null
        })(aM.g.getActiveGamepad()),
        isVibrationOn: () => (0, mM.j)().vibration,
        isPadInUse: HM.g
      }),
      PS = MM => {
        aS.play(MM, performance.now())
      };
    var nS = iM(8800),
      QS = iM(3241),
      zS = iM(103),
      LS = iM(30),
      mS = iM(673);
    class HS {
      constructor(MM) {
        this.deps = MM
      }
      check() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const rM = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!rM) return "skipped";
        const iM = MM ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === iM || this.deps.readReportedVisitId() === iM ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(iM), this.deps.aL(rM, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const hS = "controllerUsageReportedVisit";
    var JS = iM(1429),
      dS = iM(1830),
      yS = iM(656),
      lS = iM(1516),
      ES = iM(1258);
    const US = MM => ({
        translationKey: `controller:${MM}`
      }),
      GS = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: US("padButtonView"),
        Menu: US("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: US("padButtonDpadUp"),
        Down: US("padButtonDpadDown"),
        Left: US("padButtonDpadLeft"),
        Right: US("padButtonDpadRight"),
        Home: US("padButtonHome"),
        LeftStick: US("padButtonLeftStick"),
        RightStick: US("padButtonRightStick")
      },
      CS = {
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
          View: US("padButtonCreate"),
          Menu: US("padButtonOptions")
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
      eS = (MM, rM) => {
        var iM;
        const OM = null !== (iM = CS[MM][rM]) && void 0 !== iM ? iM : GS[rM];
        return "string" === typeof OM ? OM : (0, SM.x)(ES.e.get().getCurrentLanguageCode(), OM.translationKey)
      },
      bS = MM => {
        let {
          glyph: rM,
          family: iM,
          className: OM
        } = MM;
        const SM = (0, HM.y)(),
          jM = null !== iM && void 0 !== iM ? iM : SM,
          aM = (0, nS.f)(jM, rM);
        return (0, YM.jsx)("span", {
          className: fM()("ControllerGlyph", OM),
          role: "img",
          "aria-label": eS(jM, rM),
          style: {
            "--pad-glyph-mask": `url(${aM})`,
            "--pad-glyph-aspect": (0, nS.e)(jM, rM)
          }
        })
      };
    var wS = iM(2006);
    const tS = MM => {
      let {
        action: rM
      } = MM;
      const {
        t: iM
      } = (0, SM.A)();
      switch (rM.kind) {
        case "reload":
          return (0, YM.jsx)("span", {
            children: iM("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, YM.jsx)(wS.b, {
            text: rM.description ? [{
              icon: rM.icon
            }, ` ${rM.description}`] : [{
              icon: rM.icon
            }]
          });
        case "touchButton":
          return (0, YM.jsx)(wS.b, {
            text: rM.label
          })
      }
    };
    var gS = iM(9339);
    const uS = MM => {
      let {
        hold: rM
      } = MM;
      return (0, YM.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${rM.holdMs}ms`
        },
        children: (0, YM.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, rM.id)
    };
    var RS = iM(9357),
      pS = iM(9362),
      WS = iM(9364),
      sS = iM(9353);
    const DS = () => {
        const {
          gameState: MM
        } = (0, nM.m)(["gameState"]), rM = (0, HM.v)(), [OM, SM] = (0, ZM.useState)(!1), [jM, aM] = (0, ZM.useState)(!1);
        return (0, ZM.useEffect)((() => {
          "inGame" === MM && SM(!0)
        }), [MM]), (0, ZM.useEffect)((() => {
          if (!OM) return;
          let MM = null,
            rM = !1;
          return (yS.H ? Promise.all([iM.e(84), iM.e(103), iM.e(296), iM.e(205), iM.e(247), iM.e(246), iM.e(102)]).then((() => iM(41634))).then((MM => MM.startWasmPadGameplay)) : Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(111), iM.e(87), iM.e(85), iM.e(86), iM.e(201), iM.e(251), iM.e(89), iM.e(103), iM.e(202), iM.e(245), iM.e(109), iM.e(257), iM.e(248), iM.e(264), iM.e(233), iM.e(223), iM.e(100), iM.e(265), iM.e(88), iM.e(174), iM.e(266), iM.e(247), iM.e(214)]).then((() => iM(41747))).then((MM => MM.startPadGameplay))).then((iM => {
            rM || (MM = iM())
          })).catch((MM => {
            console.error("Pad gameplay failed to load", MM), rM || aM(!0)
          })), () => {
            var iM;
            rM = !0, null === (iM = MM) || void 0 === iM || iM()
          }
        }), [OM]), (0, ZM.useEffect)((() => {
          jM && rM && (aM(!1), JS.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((MM => {
            !0 === MM && (0, dS.reloadBloxd)()
          })))
        }), [jM, rM]), (0, YM.jsxs)(YM.Fragment, {
          children: [(0, YM.jsx)(kS, {}), (0, YM.jsx)(ZS, {}), (0, YM.jsx)(oS, {})]
        })
      },
      kS = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, HM.v)(), {
          gameState: iM,
          isUiHidden: OM
        } = (0, nM.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: jM
        } = (0, mM.q)(), aM = (0, gS.j)(), PM = (0, gS.l)(), [QM, LM] = (0, ZM.useState)(WS.b);
        return (0, lS.d)(sS.q, LM), !rM || jM || OM || "inGame" !== iM || !aM && !QM ? null : (0, YM.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [aM && (0, YM.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, YM.jsx)(bS, {
              glyph: (0, zM.m)("actionButton")
            }), (0, YM.jsx)(tS, {
              action: aM
            }), PM && (0, YM.jsx)("span", {
              className: "PadActionHintMore",
              children: MM("controller:gameplayActionWheelHint")
            })]
          }), QM && (0, YM.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, YM.jsx)(bS, {
              glyph: (0, zM.m)("pickBlock")
            }), (0, YM.jsx)("span", {
              children: MM("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      ZS = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, HM.v)(), {
          gameState: iM,
          isUiHidden: OM
        } = (0, nM.m)(["gameState", "isUiHidden"]), [jM, aM] = (0, ZM.useState)(RS.c);
        return (0, lS.d)(sS.o, aM), rM && !OM && "inGame" === iM && jM ? (0, YM.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, YM.jsx)("span", {
            children: MM("controller:gameplayDropStack")
          }), (0, YM.jsx)(uS, {
            hold: jM
          })]
        }) : null
      },
      oS = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, HM.v)(), {
          gameState: iM,
          isUiHidden: OM
        } = (0, nM.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: jM
        } = (0, mM.q)(), [aM, PM] = (0, ZM.useState)(pS.c);
        return (0, lS.d)(sS.k, PM), rM && !OM && "inGame" === iM && aM ? (0, YM.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!jM && (0, YM.jsx)(bS, {
            glyph: (0, zM.m)("attack")
          }), (0, YM.jsx)("span", {
            children: MM("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var fS = iM(9366),
      YS = iM(2067),
      NS = iM(2640),
      AS = iM(8767);
    const xS = MM => MM && !(0, fS.d)(YS.d.get("shopInfo")),
      vS = () => {
        const MM = "inGame" === (0, nM.m)(["gameState"]).gameState;
        return (0, NS.c)("shopInfo", (() => {
          (0, AS.i)(xS(MM))
        })), (0, ZM.useEffect)((() => {
          (0, AS.i)(xS(MM))
        }), [MM]), null
      },
      FS = () => {
        const {
          t: MM
        } = (0, SM.A)(), {
          hideButtonHints: rM
        } = (0, mM.q)();
        (0, HM.y)();
        const iM = (0, fr.n)();
        return (0, ZM.useEffect)((() => (() => {
          const MM = LM.d.register({
              name: "inventory",
              isActive: Si.isActive,
              onFrame: Si.onFrame,
              onDeactivate: Si.onDeactivate,
              wakePressActs: Si.wakePressActs
            }),
            rM = MM => {
              Si.noteRealPointer(MM), Si.shouldBlockRealPointer(MM) && MM.stopPropagation()
            };
          for (const aM of ji) window.addEventListener(aM, rM, !0);
          const iM = (0, TM.l)((() => {
              "inventory" !== LM.d.getActiveConsumerName() && Si.forgetSurface()
            })),
            OM = MM => {
              const rM = MM.target;
              (0, HM.g)() && (0, IM.i)(rM) && rM.closest(Gr) && (0, TM.i)() && (0, TM.r)(rM)
            };
          document.addEventListener("focusout", OM, !0);
          const {
            invalidate: SM,
            onScroll: jM
          } = Si.targets;
          return document.addEventListener("scroll", jM, !0), window.addEventListener("resize", SM), () => {
            MM(), iM();
            for (const MM of ji) window.removeEventListener(MM, rM, !0);
            document.removeEventListener("scroll", jM, !0), document.removeEventListener("focusout", OM, !0), window.removeEventListener("resize", SM), Si.targets.disconnect()
          }
        })()), []), (0, YM.jsxs)(YM.Fragment, {
          children: [(0, YM.jsx)(vM, {
            placer: Si.ring,
            className: "InventorySlotCursorRing"
          }), iM.showing && !rM && (0, YM.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: qM(iM).map((rM => {
              let {
                actions: OM,
                labelKey: SM
              } = rM;
              return (0, YM.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [OM.map((MM => (0, YM.jsx)(bS, {
                  glyph: (0, zM.m)(MM)
                }, MM))), (0, YM.jsx)("span", {
                  children: MM(`controller:${SM}`)
                }), "inventoryDrop" === SM && iM.dropStackHold && (0, YM.jsx)(uS, {
                  hold: iM.dropStackHold
                })]
              }, SM)
            }))
          })]
        })
      },
      BS = [{
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
      XS = MM => Array.from(MM).map((MM => ({
        type: "char",
        char: MM,
        width: 1
      }))),
      IS = function(MM) {
        return {
          type: "command",
          command: MM,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      KS = [IS("page", 2), IS("otherPage"), IS("caretLeft"), IS("space", 3), IS("caretRight"), IS("close", 1.5), IS("submit", 1.5)],
      qS = [IS("page", 2), IS("otherPage"), IS("caretLeft"), IS("space", 2), IS("caretRight"), IS("newline"), IS("close", 1.5), IS("submit", 1.5)],
      TS = [
        [...XS("1234567890"), IS("backspace")], XS("qwertyuiop/"), XS("asdfghjkl'?"), [IS("shift", 2), ...XS("zxcvbnm,.")]
      ],
      VS = [
        [...XS("1234567890"), IS("backspace")], XS("!@#$%^&*()/"), XS('-_=+[]{};:"'), XS("~`|\\<>'\u20ac\xa3,.")
      ],
      cS = {
        letters: TS,
        accents: [
          [...XS("1234567890"), IS("backspace")], XS("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), XS("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [IS("shift", 2), ...XS("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: VS
      },
      Mj = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      rj = (MM, rM) => "letters" === MM ? rM ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === MM ? "symbols" : "accents"
      },
      ij = function(MM, rM) {
        const iM = ((MM, rM) => [...cS[MM], rM ? qS : KS])(MM, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === rM) return iM;
        const OM = Math.min(2, Oj(iM[0]) / rM);
        return [Array.from({
          length: rM
        }, ((MM, rM) => ({
          type: "phrase",
          phraseIndex: rM,
          width: OM
        }))), ...iM]
      },
      Oj = MM => MM.reduce(((MM, rM) => MM + rM.width), 0),
      Sj = MM => Math.max(...MM.map(Oj)),
      jj = (MM, rM) => {
        const iM = MM[rM.row];
        let OM = (Sj(MM) - Oj(iM)) / 2;
        for (let SM = 0; SM < rM.col; SM++) OM += iM[SM].width;
        return OM + iM[rM.col].width / 2
      },
      aj = (MM, rM, iM) => {
        let OM = 0,
          SM = 1 / 0;
        for (let jM = 0; jM < MM[rM].length; jM++) {
          const aM = Math.abs(jj(MM, {
            row: rM,
            col: jM
          }) - iM);
          aM < SM - 1e-9 && (OM = jM, SM = aM)
        }
        return OM
      },
      Pj = (MM, rM) => {
        const iM = Math.max(0, Math.min(MM.length - 1, rM.row));
        return {
          row: iM,
          col: Math.max(0, Math.min(MM[iM].length - 1, rM.col))
        }
      },
      nj = (MM, rM, iM) => "once" === MM && rM - iM <= 400 ? "caps" : "off" === MM ? "once" : "off",
      Qj = (MM, rM) => "once" === MM && (MM => MM.toLowerCase() !== MM.toUpperCase())(rM) ? "off" : MM,
      zj = (MM, rM, iM) => {
        if ("symbols" === rM || "off" === iM) return MM;
        const OM = MM.toUpperCase();
        return 1 === OM.length ? OM : MM
      };
    var Lj = iM(9255);
    const mj = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Hj = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(MM) {
          return !(MM - this.lastSendMs < 2e3) && (this.lastSendMs = MM, !0)
        }
      },
      hj = {
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
      Jj = ["nQ", "nameTag"],
      dj = MM => {
        const rM = MM.target instanceof HTMLTextAreaElement && !Jj.includes(MM.kind);
        return ij(MM.page, "chat" === MM.kind ? mj.length : 0, rM)
      },
      yj = MM => {
        const rM = MM.getBoundingClientRect(),
          iM = window.innerHeight,
          OM = rM.top + rM.height / 2 < iM / 2 ? "bottom" : "top",
          SM = "bottom" === OM ? iM - rM.bottom - 6 : rM.top - 6;
        return {
          placement: OM,
          maxHeightPx: Math.min(.46 * iM, Math.max(.3 * iM, SM))
        }
      },
      lj = MM => {
        (0, ui.j)(MM) ? (0, ui.e)().close(): (rS.noteChosenStop(MM), MM.blur())
      };
    class Ej {
      constructor(MM) {
        this.host = MM, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(MM, rM) {
        this.phraseTexts = MM, this.phrasesFill = rM
      }
      pressKey(MM) {
        const rM = this.host.getState(),
          iM = dj(rM),
          OM = iM[MM.row][MM.col];
        this.host.setState({
          ...rM,
          focus: MM,
          preferredX: jj(iM, MM)
        }), "char" === OM.type ? this.typeChar(OM.char) : "command" === OM.type ? this.runCommand(OM.command) : this.sendPhrase(OM.phraseIndex)
      }
      runCommand(MM) {
        const rM = this.host.getState();
        switch (MM) {
          case "backspace":
            (0, IM.c)(rM.target);
            break;
          case "space":
            (0, IM.g)(rM.target, " ");
            break;
          case "newline":
            (0, IM.g)(rM.target, "\n");
            break;
          case "caretLeft":
            (0, IM.m)(rM.target, -1);
            break;
          case "caretRight":
            (0, IM.m)(rM.target, 1);
            break;
          case "shift": {
            const MM = performance.now();
            this.host.setState({
              ...rM,
              shift: nj(rM.shift, MM, this.lastShiftPressMs)
            }), this.lastShiftPressMs = MM;
            break
          }
          case "page":
          case "otherPage": {
            const iM = rj(rM.page, rM.accentsFirst)[MM];
            this.host.setState({
              ...rM,
              page: iM,
              focus: Pj(dj({
                ...rM,
                page: iM
              }), rM.focus)
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
            (0, ui.j)(rM.target) && (0, ui.e)().selectNextChannel()
        }
      }
      submit() {
        var MM, rM;
        const {
          target: iM
        } = this.host.getState();
        this.host.hide(), (0, ui.j)(iM) ? (0, ui.e)().submit() : (rS.noteChosenStop(iM), null === (MM = (rM = (0, ui.f)(iM)).submit) || void 0 === MM || MM.call(rM), document.activeElement === iM && iM.blur())
      }
      close() {
        const {
          target: MM
        } = this.host.getState();
        this.host.hide(), lj(MM)
      }
      typeChar(MM) {
        const {
          target: rM,
          page: iM,
          shift: OM
        } = this.host.getState();
        (0, IM.g)(rM, zj(MM, iM, OM)), this.host.setState({
          ...this.host.getState(),
          shift: Qj(OM, MM)
        })
      }
      sendPhrase(MM) {
        if (this.phrasesFill) {
          const {
            target: rM
          } = this.host.getState(), iM = this.phraseTexts[MM];
          iM && (rM.setSelectionRange(0, rM.value.length), (0, IM.g)(rM, iM))
        } else Hj.claim(performance.now()) && (this.host.hide(), (0, ui.e)().sendLine(this.phraseTexts[MM]))
      }
    }
    var Uj = iM(9279);
    const Gj = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Cj = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class ej {
      constructor(MM, rM) {
        this.host = MM, this.editor = rM, this.lastDirection = null, this.navRepeat = new hM.b((0, JM.d)(Gj)), this.commandRepeats = new Map(BS.filter((MM => {
          let {
            repeats: rM
          } = MM;
          return rM
        })).map((MM => {
          let {
            command: rM
          } = MM;
          return [rM, (0, JM.d)(Cj)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const MM of this.commandRepeats.values()) MM.reset()
      }
      onVisibleFrame(MM) {
        const rM = performance.now();
        for (const {
            command: SM,
            action: jM
          }
          of BS) {
          const iM = (0, zM.m)(jM),
            OM = this.commandRepeats.get(SM);
          if ((OM ? OM.update(MM.isHeld(iM), rM) : MM.wasPressed(iM)) && (this.editor.runCommand(SM), !this.host.getState().visible)) return
        }
        if (MM.wasPressed((0, zM.m)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const iM = this.readNavDirection(MM);
        this.lastDirection = iM;
        const OM = this.navRepeat.update(iM, rM);
        OM && this.navigate(OM)
      }
      onHiddenFrame(MM, rM) {
        var iM;
        if (MM.wasPressed((0, zM.m)("keyboardClose"))) return void lj(rM);
        const OM = (0, zM.m)("keyboardType");
        if (MM.wasPressed(OM)) return LM.d.consumeButton(OM), void this.host.open(rM);
        const SM = this.readNavDirection(MM),
          jM = null !== SM && SM !== this.lastDirection;
        if (this.lastDirection = SM, !jM || (0, ui.j)(rM)) return;
        const aM = (null === (iM = mO()) || void 0 === iM ? void 0 : iM.root.contains(rM)) || null !== rM.closest(".EntireInventoryWrapper");
        lj(rM), aM && LM.d.handOffHeldInput()
      }
      navigate(MM) {
        const rM = this.host.getState();
        if ("Up" === MM && 0 === rM.focus.row && "chat" === rM.kind) return (0, ui.e)().stepHistory(), void this.host.setState({
          ...rM
        });
        const iM = ((MM, rM, iM, OM) => {
          if ("Left" === iM || "Right" === iM) {
            const OM = MM[rM.row].length,
              SM = (rM.col + ("Right" === iM ? 1 : -1) + OM) % OM,
              jM = {
                row: rM.row,
                col: SM
              };
            return {
              pos: jM,
              preferredX: jj(MM, jM)
            }
          }
          const SM = (rM.row + ("Down" === iM ? 1 : -1) + MM.length) % MM.length;
          return {
            pos: {
              row: SM,
              col: aj(MM, SM, OM)
            },
            preferredX: OM
          }
        })(dj(rM), rM.focus, MM, rM.preferredX);
        this.host.setState({
          ...rM,
          focus: iM.pos,
          preferredX: iM.preferredX
        })
      }
      readNavDirection(MM) {
        for (const rM of hM.A)
          if (MM.isHeld(rM)) return rM;
        return (0, hM.hb)((0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone))
      }
    }
    const bj = ["Up", "Down", "Left", "Right"],
      wj = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const tj = new class {
      constructor() {
        this.state = hj, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Ej(this), this.padInput = new ej(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(MM) {
        const rM = MM.visible !== this.state.visible;
        this.state = MM;
        for (const iM of this.listeners) iM();
        rM && QM.i.Tz(Uj.e, MM.visible)
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      install() {
        const MM = LM.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, IM.i)(document.activeElement),
            onFrame: MM => {
              this.onFrame(MM)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: MM => bj.includes(MM) || !this.state.visible && MM === (0, zM.m)("keyboardType")
          }),
          rM = MM => {
            const rM = MM.target;
            (0, IM.i)(rM) && (rM === this.pendingChatInput || (0, HM.g)() ? this.open(rM) : this.state.visible && rM !== this.state.target && (this.ownedField = null, this.hide()))
          },
          iM = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          OM = MM => {
            MM.isTrusted && this.state.visible && (MM => !MM.repeat && !wj.has(MM.key) && !(0, Lj.e)(MM.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(MM.key))(MM) && this.hide()
          },
          SM = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...yj(this.state.target)
            })
          };
        document.addEventListener("focusin", rM, !0), document.addEventListener("focusout", iM, !0), window.addEventListener("keydown", OM, !0), window.addEventListener("resize", SM);
        const jM = QM.i.subscribe(sS.d, (() => {
            this.openChat()
          })),
          aM = QM.i.subscribe(Uj.g, (MM => {
            this.openForField(MM)
          }));
        return () => {
          MM(), document.removeEventListener("focusin", rM, !0), document.removeEventListener("focusout", iM, !0), window.removeEventListener("keydown", OM, !0), window.removeEventListener("resize", SM), QM.i.unsubscribe(jM), QM.i.unsubscribe(aM), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const MM = (0, ui.e)();
        MM ? document.activeElement !== MM.input ? (this.clearPendingChat(), this.pendingChatInput = MM.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), MM.open()) : this.open(MM.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(MM) {
        (0, IM.i)(MM) ? (document.activeElement !== MM && MM.focus(), document.activeElement === MM && this.open(MM)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", MM)
      }
      open(MM) {
        var rM;
        if (this.clearPendingChat(), this.ownedField = MM, this.state.visible && this.state.target === MM) return;
        this.restoreInputMode(), (0, IM.o)(MM), this.savedInputMode = MM.getAttribute("inputmode"), MM.setAttribute("inputmode", "none");
        const iM = {
          ...hj,
          visible: !0,
          target: MM,
          kind: (0, ui.j)(MM) ? "chat" : null !== (rM = (0, ui.f)(MM).kind) && void 0 !== rM ? rM : null,
          accentsFirst: (OM = ES.e.get().getCurrentLanguageCode(), Mj.has(OM)),
          ...yj(MM)
        };
        var OM;
        const SM = dj(iM),
          jM = ((MM, rM) => {
            for (let iM = 0; iM < MM.length; iM++) {
              const OM = MM[iM].findIndex((MM => "char" === MM.type && MM.char === rM));
              if (-1 !== OM) return {
                row: iM,
                col: OM
              }
            }
            return null
          })(SM, "q");
        this.padInput.reset(), this.setState({
          ...iM,
          focus: jM,
          preferredX: jj(SM, jM)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(hj))
      }
      onFrame(MM) {
        if (this.releaseLostField()) return;
        const rM = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(MM) : (0, IM.i)(rM) && this.padInput.onHiddenFrame(MM, rM)
      }
      releaseLostField() {
        const MM = this.ownedField;
        return !(null === MM || MM.isConnected && document.activeElement === MM) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: MM
        } = this.state;
        MM && (null === this.savedInputMode ? MM.removeAttribute("inputmode") : MM.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var gj = iM(3009);
    const uj = new Map(BS.map((MM => {
        let {
          command: rM,
          action: iM
        } = MM;
        return [rM, iM]
      }))),
      Rj = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      pj = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        nQ: "controller:keyboardTargetBookTitle"
      },
      Wj = MM => {
        const rM = (() => {
          const [, MM] = (0, ZM.useReducer)((MM => MM + 1), 0);
          return MM
        })();
        (0, ZM.useEffect)((() => {
          if (!MM) return;
          const iM = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const SM of iM) MM.addEventListener(SM, rM);
          document.addEventListener("selectionchange", rM);
          const OM = new MutationObserver(rM);
          return OM.observe(MM, {
            attributeFilter: ["placeholder"]
          }), () => {
            OM.disconnect();
            for (const OM of iM) MM.removeEventListener(OM, rM);
            document.removeEventListener("selectionchange", rM)
          }
        }), [MM, rM])
      },
      sj = MM => {
        MM.preventDefault()
      },
      Dj = MM => {
        "mouse" !== MM.pointerType && MM.preventDefault()
      },
      kj = () => {
        var MM;
        const {
          t: rM
        } = (0, SM.A)(), iM = (() => {
          const [MM, rM] = (0, ZM.useState)(tj.getState());
          return (0, ZM.useEffect)((() => tj.subscribe((() => {
            rM(tj.getState())
          }))), []), MM
        })(), OM = (0, HM.v)(), jM = (0, ZM.useRef)(null);
        (0, mM.q)(), (0, HM.y)(), (0, ZM.useEffect)((() => {
          const MM = tj.install(),
            rM = null;
          return () => {
            MM(), null === rM || void 0 === rM || rM()
          }
        }), []);
        const aM = (0, ZM.useMemo)((() => mj.map((MM => rM(MM)))), [rM]),
          PM = iM.visible && "chat" === iM.kind ? iM.target : null;
        Wj(PM);
        const nM = null !== (MM = null === PM || void 0 === PM ? void 0 : PM.value) && void 0 !== MM ? MM : "",
          QM = ((MM, rM, iM) => {
            if (!MM.startsWith("/")) return [];
            const OM = [];
            for (let SM = rM.length - 1; SM >= 0 && OM.length < iM; SM--) {
              const iM = rM[SM].trim();
              iM.startsWith(MM) && iM !== MM && !OM.includes(iM) && OM.push(iM)
            }
            return OM
          })(nM, nM.startsWith("/") ? (0, gj.c)() : [], mj.length),
          LM = nM.startsWith("/"),
          hM = LM ? mj.map(((MM, rM) => {
            var iM;
            return null !== (iM = QM[rM]) && void 0 !== iM ? iM : ""
          })) : aM;
        if ((0, ZM.useEffect)((() => {
            tj.editor.setPhraseRow(hM, LM)
          })), (0, ZM.useEffect)((() => {
            const MM = jM.current;
            if (MM) return MM.addEventListener("touchstart", sj, {
              passive: !1
            }), () => {
              MM.removeEventListener("touchstart", sj)
            }
          }), [iM.visible]), !iM.visible) return null;
        const JM = dj(iM),
          dM = Sj(JM),
          yM = MM => "char" === MM.type ? zj(MM.char, iM.page, iM.shift) : "phrase" === MM.type ? hM[MM.phraseIndex] : (MM => {
            switch (MM) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === iM.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Rj[rj(iM.page, iM.accentsFirst)[MM]];
              case "space":
                return rM("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return rM("chat" === iM.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(MM.command),
          lM = MM => {
            tj.editor.pressKey(MM)
          };
        return (0, YM.jsxs)("div", {
          ref: jM,
          className: fM()(ui.p, "top" === iM.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: iM.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": JM.length,
            "--pad-keyboard-height": `${iM.maxHeightPx}px`
          },
          onPointerDown: Dj,
          onMouseDown: sj,
          children: [(0, YM.jsx)(Zj, {
            target: iM.target,
            label: iM.kind ? rM(pj[iM.kind]) : iM.target.placeholder || rM("controller:keyboardTargetText")
          }), (0, YM.jsx)("div", {
            className: "PadKeyboardRows",
            children: JM.map(((MM, rM) => (0, YM.jsx)("div", {
              className: fM()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === MM[0].type
              }),
              children: MM.map(((MM, SM) => {
                const jM = OM && iM.focus.row === rM && iM.focus.col === SM,
                  aM = "command" === MM.type ? uj.get(MM.command) : void 0;
                return (0, YM.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: MM.width / dM * 100 + "%"
                  },
                  children: (0, YM.jsxs)("div", {
                    className: fM()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: jM,
                      PadKeyboardKeyCommand: "command" === MM.type,
                      PadKeyboardKeyPhrase: "phrase" === MM.type,
                      PadKeyboardKeyActive: "command" === MM.type && "shift" === MM.command && "off" !== iM.shift,
                      PadKeyboardKeySubmit: "command" === MM.type && "submit" === MM.command
                    }),
                    role: "button",
                    onClick: () => {
                      lM({
                        row: rM,
                        col: SM
                      })
                    },
                    onTouchEnd: MM => {
                      var iM, OM;
                      MM.preventDefault(), iM = MM.changedTouches[0], OM = MM.currentTarget.getBoundingClientRect(), iM && iM.clientX >= OM.left && iM.clientX <= OM.right && iM.clientY >= OM.top && iM.clientY <= OM.bottom && lM({
                        row: rM,
                        col: SM
                      })
                    },
                    children: [(0, YM.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: yM(MM)
                    }), OM && aM && (0, YM.jsx)(bS, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, zM.m)(aM)
                    })]
                  })
                }, SM)
              }))
            }, rM)))
          })]
        })
      },
      Zj = MM => {
        let {
          target: rM,
          label: iM
        } = MM;
        Wj(rM);
        const OM = (0, ZM.useRef)(null),
          SM = (0, ZM.useRef)(null),
          jM = rM instanceof HTMLTextAreaElement;
        (0, ZM.useLayoutEffect)((() => {
          const MM = OM.current,
            rM = SM.current;
          jM ? MM.scrollTop = rM.offsetTop - MM.clientHeight / 2 : MM.scrollLeft = rM.offsetLeft - MM.clientWidth / 2
        }));
        const {
          value: aM,
          start: PM,
          end: nM
        } = (0, IM.p)(rM), QM = "password" === rM.type ? "\u2022".repeat(aM.length) : aM;
        return (0, YM.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, YM.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: iM
          }), (0, YM.jsxs)("div", {
            ref: OM,
            className: fM()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: jM
            }),
            children: [(0, YM.jsx)("span", {
              children: QM.slice(0, PM)
            }), (0, YM.jsx)("span", {
              ref: SM,
              className: "PadKeyboardCaret"
            }), PM !== nM && (0, YM.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: QM.slice(PM, nM)
            }), (0, YM.jsx)("span", {
              children: QM.slice(nM)
            }), 0 === QM.length && rM.placeholder && rM.placeholder !== iM && (0, YM.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: rM.placeholder
            })]
          })]
        })
      };
    var oj = iM(1464),
      fj = iM(3831);
    const Yj = function() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return rM.map(zM.m)
      },
      Nj = (MM, rM) => {
        const iM = Xi(MM);
        return iM ? [{
          glyphs: [iM],
          labelKey: rM
        }] : []
      },
      Aj = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      xj = "--pad-hint-bar-clearance",
      vj = "[data-pad-hint-bar-avoid]",
      Fj = MM => {
        const rM = [];
        for (const iM of MM)(0, VM.n)(iM) && rM.push(iM.getBoundingClientRect());
        return rM
      },
      Bj = MM => {
        if (!MM) return null;
        const rM = mO(),
          iM = rM ? Fj(((MM, rM) => {
            const iM = MM.closest(vj);
            return iM ? [iM] : ("popup" === rM ? document : MM).querySelectorAll(vj)
          })(rM.root, rM.layer.kind)) : [],
          OM = !rM || rM.root.hasAttribute("data-pad-shows-hud");
        if (((0, fj.g)(null === rM || void 0 === rM ? void 0 : rM.layer.kind, (0, fj.i)()) || OM) && iM.push(...Fj(document.querySelectorAll(Aj.join(",")))), 0 === iM.length) return null;
        const {
          width: SM,
          height: jM
        } = MM.getBoundingClientRect(), aM = window.innerHeight - 8, PM = (0, fj.m)(aM, {
          width: SM,
          height: jM
        }, window.innerWidth / 2, iM, 8);
        return PM === aM ? null : Math.round(window.innerHeight - PM)
      },
      Xj = MM => {
        const rM = document.documentElement.style,
          iM = MM ? `${Math.round(window.innerHeight-MM.getBoundingClientRect().top)}px` : "";
        rM.getPropertyValue(xj) !== iM && (iM ? rM.setProperty(xj, iM) : rM.removeProperty(xj))
      },
      Ij = () => {
        const {
          t: MM
        } = (0, SM.A)(), {
          hideButtonHints: rM
        } = (0, mM.q)(), iM = (0, HM.v)(), [OM, jM] = (0, ZM.useState)(!1), [aM, QM] = (0, ZM.useState)([]), [JM, dM] = (0, ZM.useState)(null), yM = (0, ZM.useRef)(null), lM = (0, ZM.useRef)(null);
        (0, lS.d)(Uj.e, (MM => {
          jM(MM)
        })), (0, lS.d)(fj.l, (() => {
          var MM;
          null === (MM = lM.current) || void 0 === MM || MM.call(lM)
        }));
        const EM = iM && !rM && !OM;
        return (0, ZM.useEffect)((() => {
          if (!EM) return;
          let MM = null;
          const rM = () => {
            const rM = (() => {
                var MM;
                const rM = LM.d.getActiveConsumerName(),
                  iM = (0, fj.e)();
                if (iM) {
                  const MM = (0, zM.m)(iM),
                    rM = "emoteWheel" === iM && "wheel" === (0, mM.j)().emoteButton || !(0, hM.J)(LM.d.getLastFrame().values, MM) ? {
                      glyphs: Yj("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [MM],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, zM.E)(MM)],
                    labelKey: "controller:wheelChoose"
                  }, rM, {
                    glyphs: Yj("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const OM = mO();
                if (!OM || "focus" !== rM && "cursor" !== rM) return (0, fj.c)(zM.m);
                const SM = [],
                  jM = {
                    glyphs: Yj("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  aM = (0, FM.y)(OM.root),
                  PM = aM ? !(0, VM.s)(aM) : Boolean(OM.layer.close),
                  QM = !aM && OM.layer.closeLabelKey ? OM.layer.closeLabelKey : jM.labelKey,
                  HM = PM ? [{
                    ...jM,
                    labelKey: QM
                  }] : [],
                  JM = si(OM.layer.kind) ? [{
                    glyphs: Yj("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === rM) return SM.push({
                  glyphs: Yj("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), SM.push({
                  glyphs: Yj("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), SM.push(...HM), SM.push(...JM), SM.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), gO() && SM.push({
                  glyphs: Yj("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), SM;
                const dM = rS.getFocused();
                dM && (0, sO.b)(dM) ? SM.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : dM && (0, FM.B)(dM) ? SM.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : SM.push({
                  glyphs: Yj("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const yM = dM ? null === (MM = mi(dM)) || void 0 === MM ? void 0 : MM.dataset.padSecondary : void 0;
                yM && SM.push({
                  glyphs: Yj("menuSecondary"),
                  labelKey: yM
                }), SM.push(...null !== dM && void 0 !== dM && dM.closest("[data-pad-friends-column]") ? [jM] : HM), SM.push(...JM);
                const lM = "home" === OM.layer.kind;
                qi(OM.root) || !fi(OM.root) && !Ti(OM) ? lM && SM.push({
                  glyphs: Yj("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : SM.push({
                  glyphs: Yj("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), lM && (SM.push(...Nj("inventory", "controller:menusFriends")), yM || SM.push({
                  glyphs: Yj("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), SM.push(...Nj("pause", "controller:menusSettings")), SM.push(...Nj("leaderboard", "controller:menusNotifications")));
                const EM = nM.d.get("openEverythingMenuName");
                return "inGame" === nM.d.get("gameState") && "popup" !== OM.layer.kind && null !== EM && ((0, ni.m)(EM) ? SM.push(...Nj("leaderboard", "controller:menusClose")) : EM !== Pi.m.LOBBY_LEADERBOARD && SM.push(...Nj("leaderboard", "controller:menusLobby"))), SM.push({
                  glyphs: Yj("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), SM
              })(),
              iM = Bj(yM.current),
              OM = ((MM, rM) => `${MM.map((MM=>`${MM.glyphs.join("+")}:${MM.labelKey}`)).join("|")}@${rM}`)(rM, iM);
            OM !== MM && (MM = OM, (0, PM.unstable_batchedUpdates)((() => {
              QM(rM), dM(iM)
            }))), Xj(yM.current)
          };
          rM(), lM.current = rM;
          const iM = requestAnimationFrame(rM),
            OM = setInterval(rM, 150);
          return () => {
            lM.current = null, cancelAnimationFrame(iM), clearInterval(OM), Xj(null)
          }
        }), [EM]), (0, ZM.useLayoutEffect)((() => {
          if (!EM) return;
          if (0 === aM.length) return void Xj(null);
          const MM = Bj(yM.current);
          MM === JM ? Xj(yM.current) : dM(MM)
        }), [EM, aM, JM]), EM && 0 !== aM.length ? (0, YM.jsx)("div", {
          ref: yM,
          className: "PadButtonHintBar SmallTextBold",
          style: null === JM ? void 0 : {
            bottom: JM
          },
          "aria-hidden": !0,
          children: aM.map((rM => (0, YM.jsxs)("div", {
            className: "PadButtonHint",
            children: [rM.glyphs.map((MM => (0, YM.jsx)(bS, {
              glyph: MM,
              className: "PadButtonHintGlyph"
            }, MM))), (0, YM.jsx)("span", {
              children: MM(rM.labelKey)
            })]
          }, rM.labelKey)))
        }) : null
      };
    var Kj = iM(1835);
    const qj = [VM.c, "label", "[data-pad-slider]"].join(","),
      Tj = "data-pad-cursor-probe",
      Vj = MM => {
        var rM;
        const iM = (MM => {
          const rM = [];
          for (let OM = MM; OM && OM !== document.body && OM !== document.documentElement && (rM.push(OM), !(rM.length > 8)); OM = OM.parentElement);
          const iM = document.documentElement.classList.contains(HM.m) ? rM[rM.length - 1] : void 0;
          null === iM || void 0 === iM || iM.setAttribute(Tj, "");
          try {
            return rM.map((MM => ({
              element: MM,
              cursor: getComputedStyle(MM).cursor
            })))
          } finally {
            null === iM || void 0 === iM || iM.removeAttribute(Tj)
          }
        })(MM);
        if ("pointer" !== (null === (rM = iM[0]) || void 0 === rM ? void 0 : rM.cursor)) return null;
        let OM = 0;
        for (; OM + 1 < iM.length && "pointer" === iM[OM + 1].cursor;) OM++;
        return iM[OM].element
      },
      cj = (MM, rM, iM, OM) => {
        const SM = OM.root.contains(MM) ? OM.root : null;
        for (let jM = MM; jM && jM !== document.body && jM !== document.documentElement; jM = jM.parentElement) {
          if (jM instanceof HTMLElement && tM(jM, rM) && WM(jM, rM, iM)) return jM;
          if (jM === SM) break
        }
        return "home" === OM.layer.kind || "gamePage" === OM.layer.kind ? ((MM, rM) => {
          const iM = document.scrollingElement;
          return iM instanceof HTMLElement && ![document.documentElement, document.body].some((rM => {
            const iM = getComputedStyle(rM),
              OM = "y" === MM ? iM.overflowY : iM.overflowX;
            return "hidden" === OM || "clip" === OM
          })) && WM(iM, MM, rM) ? iM : null
        })(rM, iM) : null
      };
    const Ma = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, JM.d)(hM.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const MM = LM.d.register({
              name: "cursor",
              isActive: () => "cursor" === uO(),
              onFrame: MM => {
                this.onFrame(MM)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: MM => (0, LM.g)(MM) || MM === (0, zM.m)("menuConfirm") && (0, FM.C)((0, HM.d)())
            }),
            rM = (0, SO.m)((MM => {
              const rM = MM.getRoot();
              rM && this.layerPoints.delete(rM), rM === this.layerRoot && (this.layerRoot = null)
            })),
            iM = QM.i.subscribe("appManagerUpdated|activeInputDevice", (MM => {
              "gamepad" !== MM && this.active && !this.hidden && this.hide()
            }));
          return () => {
            MM(), rM(), QM.i.unsubscribe(iM), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, HM.g)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Tz()
        }
        activate(MM) {
          this.active = !0, this.hidden = !1;
          const rM = bO();
          !rM || rM.root && rM.root !== MM.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(MM), this.jumpTo(rM.point))
        }
        jumpTo(MM) {
          this.state = {
            x: MM.x,
            y: MM.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Tz())
        }
        onFrame(MM) {
          const rM = mO();
          if (!rM) return;
          if (this.active || this.activate(rM), this.followPage(rM)) return;
          this.followLayer(rM);
          const iM = MM.wokeDevice ? (0, HM.d)() : null;
          if (iM && this.jumpTo(iM), !(0, HM.g)()) return void this.hide();
          const OM = (0, zM.m)("menuToggleCursor");
          if (MM.wasPressed(OM)) return LM.d.consumeButton(OM), void eO(this.getHandoff(null));
          if (this.handBackToFocus(MM)) return;
          const SM = (0, zM.m)("menuConfirm"),
            jM = (0, zM.m)("menuSecondary");
          if (MM.wasPressed((0, zM.m)("menuBack"))) return (0, FM.m)(rM.root) || (0, FM.g)(rM.root) || HO(), void this.Tz();
          if (MO(null, MM, rM)) return MM.wasReleased(SM) && this.press && (this.updateHit(!1), this.updateConfirm(MM, SM)), void this.Tz();
          if (document.pointerLockElement) return void this.hide();
          const aM = RO() ? {
              x: 0,
              y: 0
            } : (MM => {
              const rM = (MM, rM) => (MM ? 1 : 0) - (rM ? 1 : 0);
              return {
                x: rM(MM.isHeld("Right"), MM.isHeld("Left")),
                y: rM(MM.isHeld("Down"), MM.isHeld("Up"))
              }
            })(MM),
            PM = (0, mM.j)().moveDeadzone,
            nM = ((MM, rM) => {
              const iM = (0, hM.i)(MM, UM(rM));
              return Math.hypot(iM.x, iM.y)
            })(MM.leftStick, PM) > 0 || 0 !== aM.x || 0 !== aM.y;
          if (this.hidden) {
            const rM = MM.wasPressed(SM),
              iM = MM.wasPressed(jM);
            if (!nM && !eM(MM.rightStick) && !rM && !iM && !MM.wokeDevice) return void this.Tz();
            if (this.hidden = !1, this.updateHit(!1), rM || iM) return rM && (this.press = {
              kind: "ignored"
            }, MM.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Tz()
          }
          this.movePendingPageStart(nM);
          const QM = this.getPoint();
          this.state = CM(this.state, {
            stick: MM.leftStick,
            moveDeadzone: PM,
            dpad: aM,
            dtMs: MM.dtMs,
            cursorSpeedPercent: (0, mM.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const JM = this.state.x !== QM.x || this.state.y !== QM.y,
            dM = [SM, jM].some((rM => MM.wasPressed(rM) || MM.wasReleased(rM)));
          (JM || dM || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(JM), this.updateConfirm(MM, SM), this.updateSecondary(MM, jM), this.updateScroll(MM, rM), this.Tz()
        }
        followPage(MM) {
          const rM = "home" === MM.layer.kind || "gamePage" === MM.layer.kind,
            iM = this.page;
          if (this.page = rM ? {
              key: (0, SO.r)(MM.layer),
              root: MM.root
            } : null, !this.page || !iM || iM.root !== MM.root || iM.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(MM), "hybrid" === CO()) return EO = null, yO = null, UO.lock(), !0;
          const {
            key: OM
          } = this.page;
          return this.pendingPageStart = {
            root: MM.root,
            key: OM,
            returning: rS.notePageEnteredByCursor(OM),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(MM) {
          const rM = this.pendingPageStart;
          if (!rM) return;
          if (MM || rM.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const iM = rM.returning ? rS.recallStop(rM.root, rM.key) : null;
          if (!iM && rM.returning && performance.now() - rM.enteredAtMs < 1e3) return;
          const OM = null !== iM && void 0 !== iM ? iM : rS.pickInitial(rM.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: rM.enteredAtMs
          });
          OM && (this.pendingPageStart = null, this.jumpTo((0, FM.z)(OM)))
        }
        setLayer(MM) {
          this.layerRoot = MM.root, this.layerOrder = MM.order
        }
        followLayer(MM) {
          var rM;
          if (MM.root === this.layerRoot) return;
          null !== (rM = this.layerRoot) && void 0 !== rM && rM.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const iM = this.layerPoints.get(MM.root),
            OM = iM && MM.order <= this.layerOrder ? iM : rS.getLayerStartPoint(MM.root);
          this.setLayer(MM), this.jumpTo(OM)
        }
        getHandoff(MM) {
          var rM;
          return {
            point: this.getPoint(),
            element: null !== (rM = this.interactive) && void 0 !== rM ? rM : this.findDraggedSliderNearby(),
            direction: MM
          }
        }
        findDraggedSliderNearby() {
          const MM = this.draggedSlider;
          if (null === MM || void 0 === MM || !MM.isConnected) return null;
          const rM = MM.getBoundingClientRect(),
            {
              y: iM
            } = this.getPoint();
          return iM >= rM.top - 40 && iM <= rM.bottom + 40 ? MM : null
        }
        handBackToFocus(MM) {
          if (!RO()) return !1;
          const rM = hM.A.find((rM => MM.wasPressed(rM)));
          return !!rM && (iM = this.getHandoff(rM), EO = JO(iM), yO = null, UO.lock(), LM.d.handOffHeldInput(), !0);
          var iM
        }
        getAssistContext() {
          const MM = this.interactive;
          if (null === MM || void 0 === MM || !MM.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const rM = MM.getBoundingClientRect();
          if (rM.width > .4 * window.innerWidth || rM.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const iM = (0, mM.j)().cursorMagnetism && !(0, Kj.e)(MM) && !MM.closest("[data-pad-slider]"),
            OM = this.magnet && this.magnet !== MM && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : rM;
          return {
            overInteractive: !0,
            magnetTarget: iM ? {
              x: OM.left + OM.width / 2,
              y: OM.top + OM.height / 2
            } : null
          }
        }
        updateHit(MM) {
          this.lastHitTestMs = performance.now();
          const rM = this.getPoint(),
            iM = document.elementFromPoint(rM.x, rM.y),
            OM = iM && !(0, yM.p)(iM) && (MM => {
              var rM;
              const iM = mO();
              return !(iM && !iM.root.contains(MM) && !MM.closest(".tooltip-container")) || !(null !== (rM = document.getElementById("root")) && void 0 !== rM && rM.contains(MM))
            })(iM) ? iM : null;
          if (OM !== this.hit) return (0, FM.t)(this.hit, OM, rM), this.hit = OM, void this.setInteractive(OM ? (MM => {
            const rM = MM.closest(qj);
            if (rM) {
              var iM, OM;
              const MM = null !== (iM = null === (OM = rM.parentElement) || void 0 === OM ? void 0 : OM.closest("[data-pad-focusable]")) && void 0 !== iM ? iM : rM;
              return (0, VM.s)(MM) ? {
                element: null,
                magnet: null
              } : {
                element: MM,
                magnet: rM
              }
            }
            const SM = Vj(MM);
            return {
              element: SM,
              magnet: SM
            }
          })(OM) : {
            element: null,
            magnet: null
          });
          MM && OM && (0, FM.t)(OM, OM, rM)
        }
        setInteractive(MM) {
          let {
            element: rM,
            magnet: iM
          } = MM;
          this.interactive = rM, this.magnet = iM
        }
        clearHover() {
          this.hit && (0, FM.t)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const MM = this.hit;
          if (!MM || (0, FM.B)(MM)) return {
            kind: "ignored"
          };
          const rM = (0, sO.b)(MM),
            iM = MM.closest("[data-pad-slider]");
          return rM && iM ? {
            kind: "slider",
            slider: iM,
            adjuster: rM
          } : ((0, FM.w)(MM, this.getPoint()), {
            kind: "pointer",
            target: MM
          })
        }
        applySliderFraction(MM) {
          var rM;
          const iM = MM.slider.getBoundingClientRect(),
            OM = iM.height > iM.width,
            SM = null === (rM = MM.slider.querySelector("[data-pad-slider-handle]")) || void 0 === rM ? void 0 : rM.getBoundingClientRect(),
            jM = SM ? OM ? SM.height : SM.width : 0,
            aM = (OM ? iM.height : iM.width) - jM;
          if (aM <= 0) return;
          const PM = OM ? iM.bottom - jM / 2 - this.state.y : this.state.x - iM.left - jM / 2;
          MM.adjuster.setFraction(Math.max(0, Math.min(1, PM / aM)))
        }
        updateConfirm(MM, rM) {
          MM.wasPressed(rM) && (this.press = MM.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const iM = this.press;
          if (!iM) return;
          if (MM.isHeld(rM)) return "slider" === iM.kind && this.applySliderFraction(iM), void this.updateRepeat();
          this.press = null;
          const OM = this.repeated;
          if (this.endRepeat(), !MM.wasReleased(rM)) return void this.endPressWithoutClick(iM);
          const SM = this.getPoint(),
            jM = this.hit;
          if ("slider" === iM.kind && iM.adjuster.endDrag(), "pointer" === iM.kind) {
            const MM = null !== jM && void 0 !== jM ? jM : iM.target.isConnected ? iM.target : null;
            MM && (0, FM.x)(MM, SM);
            const rM = jM && iM.target.isConnected && !OM ? ((MM, rM) => {
              for (let iM = MM; iM; iM = iM.parentElement)
                if (iM.contains(rM)) return iM;
              return null
            })(iM.target, jM) : null;
            rM && (rS.noteCursorActivation(rM), (0, yM.f)(rM, new MouseEvent("click", (0, FM.J)(SM, 0, 0))), (0, FM.j)(rM), (0, FM.F)(rM) && (0, FM.E)(rM))
          }
        }
        beginRepeat() {
          var MM, rM, iM;
          const OM = null !== (MM = null === (rM = this.hit) || void 0 === rM ? void 0 : rM.closest("[data-pad-repeat]")) && void 0 !== MM ? MM : null;
          this.repeatStop = OM, this.repeatKey = null !== (iM = null === OM || void 0 === OM ? void 0 : OM.getAttribute("data-pad-repeat")) && void 0 !== iM ? iM : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const MM = this.repeatStop;
          if (!MM) return;
          const rM = this.hit;
          MM.isConnected && !(0, VM.s)(MM) && MM.getAttribute("data-pad-repeat") === this.repeatKey && rM && MM.contains(rM) ? MM.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, rS.noteCursorActivation(MM), (0, yM.f)(MM, new MouseEvent("click", (0, FM.J)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(MM) {
          "slider" === MM.kind && MM.adjuster.endDrag(), "pointer" === MM.kind && MM.target.isConnected && (0, FM.x)(MM.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(MM, rM) {
          MM.wasPressed(rM) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !MM.isHeld(rM) && (this.secondaryArmed = !1, MM.wasReleased(rM) && this.hit && (0, FM.q)(this.hit, this.getPoint(), 2))
        }
        updateScroll(MM, rM) {
          const iM = bM(MM.rightStick, MM.dtMs);
          if (0 === iM.x && 0 === iM.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + iM.x,
            y: this.scrollRemainder.y + iM.y
          };
          const OM = Math.trunc(this.scrollRemainder.x),
            SM = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - OM,
            y: this.scrollRemainder.y - SM
          };
          const jM = this.hit;
          if (!jM) return;
          let aM = !1;
          if (0 !== SM) {
            const MM = cj(jM, "y", SM > 0 ? 1 : -1, rM);
            MM && (MM.scrollBy({
              top: SM,
              behavior: "instant"
            }), aM = !0)
          }
          if (0 !== OM) {
            const MM = cj(jM, "x", OM > 0 ? 1 : -1, rM);
            MM && (MM.scrollBy({
              left: OM,
              behavior: "instant"
            }), aM = !0)
          }
          aM && (this.lastHitTestMs = -1 / 0)
        }
        Tz() {
          XM.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      ra = () => {
        const MM = (0, ZM.useMemo)((() => new xM), []),
          rM = (0, HM.v)();
        return (0, ZM.useEffect)((() => {
          if (!rM) return;
          let iM = 0,
            OM = {
              of: null,
              atMs: 0,
              list: []
            };
          const SM = document.getElementsByClassName(pO),
            jM = MM => {
              for (const rM of [...SM]) rM !== MM && rM.classList.remove(pO)
            },
            aM = () => {
              var rM;
              iM = requestAnimationFrame(aM);
              const SM = (() => {
                const MM = rS.getFocused();
                if (rS.isActive() && null !== MM && void 0 !== MM && MM.isConnected) return MM;
                const rM = Ma.getHighlighted();
                return null !== rM && void 0 !== rM && rM.isConnected ? rM : null
              })();
              jM(SM), SM && !SM.classList.contains(pO) && SM.classList.add(pO);
              const PM = null !== (rM = null === SM || void 0 === SM ? void 0 : SM.closest("[data-pad-reticle-box]")) && void 0 !== rM ? rM : SM;
              MM.show(PM ? ((MM, rM) => {
                let iM = MM.left,
                  OM = MM.top,
                  SM = MM.right,
                  jM = MM.bottom;
                for (const aM of rM) {
                  if (!aM) continue;
                  const MM = DM(aM);
                  iM = Math.max(iM, MM.left), OM = Math.max(OM, MM.top), SM = Math.min(SM, MM.right), jM = Math.min(jM, MM.bottom)
                }
                return SM <= iM || jM <= OM ? null : {
                  left: iM,
                  top: OM,
                  width: SM - iM,
                  height: jM - OM
                }
              })(PM.getBoundingClientRect(), (MM => {
                const rM = performance.now();
                return (OM.of !== MM || rM - OM.atMs > 500) && (OM = {
                  of: MM,
                  atMs: rM,
                  list: [gM(MM, "y"), gM(MM, "x")]
                }), OM.list
              })(PM)) : null)
            };
          return iM = requestAnimationFrame(aM), () => {
            cancelAnimationFrame(iM), jM(null), MM.hide()
          }
        }), [rM, MM]), (0, YM.jsx)(vM, {
          placer: MM,
          className: "PadFocusRing"
        })
      },
      ia = (MM, rM) => {
        MM.style.transform = `translate3d(${rM.x}px, ${rM.y}px, 0)`, MM.classList.toggle("Visible", rM.visible), MM.classList.toggle("Pressed", rM.pressed)
      },
      Oa = () => {
        const MM = (0, ZM.useRef)(null);
        return (0, ZM.useEffect)((() => {
          const rM = XM.subscribe((rM => {
            MM.current && ia(MM.current, rM)
          }));
          return MM.current && ia(MM.current, XM.get()), rM
        }), []), (0, YM.jsx)("div", {
          ref: MM,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, YM.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Sa = "#ncmp__modal.ncmp__active",
      ja = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Sa) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Sa),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      aa = "PadOverThirdParty",
      Pa = new Set(ja.map((MM => MM.id))),
      na = () => {
        const MM = ja.map((MM => {
            let {
              id: rM,
              find: iM,
              startSelectors: OM
            } = MM;
            return (0, SO.p)({
              id: rM,
              kind: "popup",
              getRoot: () => {
                const MM = iM(),
                  rM = MM ? ((MM, rM) => {
                    var iM;
                    for (const OM of rM) {
                      const rM = MM.querySelector(OM);
                      if (rM) return rM
                    }
                    return null !== (iM = [...MM.querySelectorAll("button")].find((MM => !MM.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== iM ? iM : null
                  })(MM, OM) : null;
                if (MM && rM && !rM.hasAttribute("data-pad-default-focus")) {
                  for (const rM of MM.querySelectorAll("[data-pad-default-focus]")) rM.removeAttribute("data-pad-default-focus");
                  for (const rM of MM.querySelectorAll("[data-pad-hint-bar-avoid]")) rM.removeAttribute("data-pad-hint-bar-avoid");
                  rM.setAttribute("data-pad-default-focus", ""), ((MM, rM) => {
                    let iM = MM;
                    for (let OM = MM.parentElement; OM && rM.contains(OM) && !(OM.getBoundingClientRect().height >= window.innerHeight / 2); OM = OM.parentElement) iM = OM;
                    return iM
                  })(rM, MM).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return MM
              },
              close: null,
              memoryKey: null
            })
          })),
          rM = document.documentElement,
          iM = aM.g.onFrame((() => {
            const MM = (0, HM.g)() ? mO() : null,
              iM = !!MM && (OM = MM.layer, Pa.has(OM.id));
            var OM;
            rM.classList.contains(aa) !== iM && rM.classList.toggle(aa, iM)
          }));
        return () => {
          for (const rM of MM) rM();
          iM(), rM.classList.remove(aa)
        }
      },
      Qa = "PadLargePointer",
      za = () => {
        (0, ZM.useEffect)((() => {
          const MM = (0, yM.n)(document.body),
            rM = rS.install(),
            iM = Ma.install(),
            OM = na();
          return () => {
            MM(), rM(), iM(), OM()
          }
        }), []);
        const {
          largePointer: MM
        } = (0, mM.q)(), rM = (0, oj.y)() && MM;
        return (0, ZM.useEffect)((() => {
          if (rM) return document.documentElement.classList.add(Qa), () => {
            document.documentElement.classList.remove(Qa)
          }
        }), [rM]), (0, PM.createPortal)((0, YM.jsxs)(YM.Fragment, {
          children: [(0, YM.jsx)(Ij, {}), (0, YM.jsx)(ra, {}), (0, YM.jsx)(Oa, {})]
        }), document.body)
      };
    var La = iM(9383),
      ma = iM(9408),
      Ha = iM(9400);
    iM(9410);
    const ha = (MM, rM) => {
        const [iM, OM] = (0, ZM.useState)(!1), [SM, jM] = (0, ZM.useState)(null), aM = (0, ZM.useRef)(null), PM = (0, ZM.useCallback)((MM => {
          aM.current = MM, jM(MM)
        }), []), nM = (0, ZM.useCallback)((() => {
          OM(!1), PM(null)
        }), [PM]), zM = (0, ZM.useCallback)((() => {
          OM(!0)
        }), []), LM = (0, ZM.useCallback)(((MM, rM) => {
          PM((0, Ha.I)(MM, rM, aM.current))
        }), [PM]);
        (0, ZM.useLayoutEffect)((() => (rM(iM), (0, fj.q)(MM, iM), QM.i.Tz(fj.l), () => {
          rM(!1), (0, fj.q)(MM, !1), QM.i.Tz(fj.l)
        })), [iM, MM, rM]), (0, lS.d)("appManagerUpdated|activeInputDevice", (MM => {
          "gamepad" !== MM && nM()
        })), (0, lS.d)("appManagerUpdated|gameState", (MM => {
          "inGame" !== MM && nM()
        }));
        const mM = () => {
          (0, ni.r)() && nM()
        };
        return (0, lS.d)("appManagerUpdated|openEverythingMenuName", mM), (0, lS.d)("appManagerUpdated|openInGameMenuName", mM), {
          open: iM,
          picked: SM,
          pickedRef: aM,
          show: zM,
          aim: LM,
          close: nM
        }
      },
      Ja = MM => {
        let {
          className: rM,
          slotCount: iM,
          picked: OM,
          slotLabel: SM,
          renderSlot: jM,
          centre: aM
        } = MM;
        const PM = Array.from({
          length: iM
        }, ((MM, rM) => rM));
        return (0, YM.jsx)("div", {
          className: fM()("EmoteWheelOverlay PadRadialWheel", rM),
          children: (0, YM.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Ha.u + "rem",
              height: 2 * Ha.u + "rem"
            },
            children: [(0, YM.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Ha.n} ${Ha.n}`,
              children: [PM.map((MM => (0, YM.jsx)("path", {
                d: (0, Ha.x)(MM, iM, Ha.h, Ha.j, Ha.l),
                className: fM()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: MM === OM
                }),
                "aria-label": SM(MM)
              }, MM))), (0, YM.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Ha.h,
                cy: Ha.h,
                r: Ha.l
              }), (0, YM.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Ha.h,
                cy: Ha.h,
                r: Ha.j
              }), null !== OM && (0, YM.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Ha.x)(OM, iM, Ha.h, Ha.j, Ha.l)
              })]
            }), PM.map((MM => {
              const rM = (0, Ha.C)(MM, iM);
              return (0, YM.jsx)("div", {
                className: fM()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: MM === OM
                }),
                style: {
                  left: `calc(50% + ${Ha.e*Math.cos(rM)}rem)`,
                  top: `calc(50% + ${Ha.e*Math.sin(rM)}rem)`
                },
                "aria-hidden": !0,
                children: jM(MM)
              }, MM)
            })), (0, YM.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: aM
            })]
          })
        })
      },
      da = mj.length,
      ya = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = ha("chat", Wi.m), iM = (0, ZM.useMemo)((() => mj.map((rM => MM(rM)))), [MM]);
        return (0, lS.d)(Wi.k, (() => {
          rM.open || (0, La.g)() || (0, ma.s)() || "inGame" !== nM.d.get("gameState") || (0, ni.r)() || !(0, ui.e)() || rM.show()
        })), (0, lS.d)(Wi.e, (MM => {
          rM.open && rM.aim(MM, da)
        })), (0, lS.d)(Wi.j, (() => {
          var MM;
          if (!rM.open) return;
          const OM = rM.pickedRef.current;
          null !== OM ? Hj.claim(performance.now()) && (rM.close(), null === (MM = (0, ui.e)()) || void 0 === MM || MM.sendLine(iM[OM])) : rM.close()
        })), (0, lS.d)(Wi.h, rM.close), rM.open ? (0, YM.jsx)(Ja, {
          className: "QuickChatWheel",
          slotCount: da,
          picked: rM.picked,
          slotLabel: MM => iM[MM],
          renderSlot: MM => iM[MM],
          centre: null !== rM.picked ? iM[rM.picked] : MM("controller:quickChatPick")
        }) : null
      },
      la = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = ha("actionButton", ma.w), [iM, OM] = (0, ZM.useState)([]);
        if ((0, lS.d)(ma.l, (MM => {
            rM.open || (0, La.g)() || (0, Wi.c)() || "inGame" !== nM.d.get("gameState") || (0, ni.r)() || (OM(MM), rM.show())
          })), (0, lS.d)(ma.b, (MM => {
            rM.open && rM.aim(MM, iM.length)
          })), (0, lS.d)(ma.j, (() => {
            if (!rM.open) return;
            const MM = rM.pickedRef.current;
            rM.close(), null !== MM && QM.i.Tz(ma.p, iM[MM])
          })), (0, lS.d)(ma.f, rM.close), !rM.open) return null;
        const jM = null !== rM.picked ? iM[rM.picked] : null;
        return (0, YM.jsx)(Ja, {
          className: "ActionWheel",
          slotCount: iM.length,
          picked: rM.picked,
          slotLabel: rM => {
            const OM = iM[rM];
            return "reload" === OM.kind ? MM("controller:gameplayReload") : "customButton" === OM.kind ? OM.description || OM.icon : "touchButton" === OM.kind && "string" === typeof OM.label ? OM.label : ""
          },
          renderSlot: MM => (0, YM.jsx)(tS, {
            action: iM[MM]
          }),
          centre: jM ? (0, YM.jsx)(tS, {
            action: jM
          }) : MM("controller:actionWheelPick")
        })
      };
    var Ea = iM(83);
    const Ua = () => ((0, ZM.useEffect)((() => {
        var MM, rM;
        const iM = (0, yM.n)(document.getElementById("root")),
          OM = (0, HM.e)(),
          SM = (() => {
            const MM = [QM.i.subscribe(OS.h, (() => {
                PS("blockBreak")
              })), QM.i.subscribe("damagedByOtherPlayer", (() => {
                PS("damage")
              })), QM.i.subscribe("yourAttackHit", (MM => {
                let {
                  hitSelf: rM
                } = MM;
                rM || PS("hit")
              }))],
              rM = aM.g.onActivePadChanged((MM => {
                MM && PS("connect")
              }));
            return () => {
              for (const rM of MM) QM.i.unsubscribe(rM);
              rM()
            }
          })(),
          jM = (() => {
            const MM = new HS({
              getVisitId: mS.e,
              peekVisitId: mS.peekVisitSessionId,
              readReportedVisitId: () => {
                const MM = LS.k.getItem(hS);
                return "string" === typeof MM ? MM : null
              },
              writeReportedVisitId: MM => {
                LS.k.setItem(hS, MM)
              },
              isPadActive: HM.g,
              getPadFamily: () => {
                var MM, rM;
                return null !== (MM = null === (rM = aM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : null
              },
              canReport: QS.isBloxdGa4Ready,
              getInputType: zS.c,
              aL: QS.logControllerUsedToGtag
            });
            let rM = 0,
              iM = null;
            const OM = SM => {
                null === iM && ("notReady" !== MM.check(SM) || null !== iM || rM >= 20 || (rM++, iM = setTimeout((() => {
                  iM = null, OM(!1)
                }), 3e3)))
              },
              SM = QM.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                OM(!0)
              })),
              jM = (0, mS.i)((() => {
                rM = 0, OM(!0)
              }));
            return () => {
              QM.i.unsubscribe(SM), jM(), null !== iM && clearTimeout(iM)
            }
          })(),
          PM = aM.g.onFrame(((MM, rM, iM) => {
            const OM = (0, HM.k)(MM, iM);
            LM.d.dispatch(MM, rM, OM)
          }));
        let zM = null !== (MM = null === (rM = aM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : null;
        const hM = aM.g.onActivePadChanged((MM => {
            var rM, iM;
            (LM.d.reset(), (0, HM.q)(), QM.i.Tz(aM.c, MM), (null !== (rM = null === MM || void 0 === MM ? void 0 : MM.family) && void 0 !== rM ? rM : null) !== zM) && (zM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.family) && void 0 !== iM ? iM : null, QM.i.Tz(mM.e, (0, mM.j)()));
            !MM && (0, HM.g)() && (0, HM.u)(nM.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          JM = () => {
            "visible" !== document.visibilityState && LM.d.clear()
          },
          dM = () => {
            LM.d.clear()
          };
        document.addEventListener("visibilitychange", JM), window.addEventListener("blur", dM), aM.g.start(), (0, nS.m)();
        const lM = null;
        return () => {
          iM(), OM(), SM(), jM(), PM(), hM(), document.removeEventListener("visibilitychange", JM), window.removeEventListener("blur", dM), aM.g.stop(), null === lM || void 0 === lM || lM()
        }
      }), []), (0, YM.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, YM.jsx)(DS, {}), (0, YM.jsx)(vS, {}), (0, YM.jsx)(FS, {}), (0, YM.jsx)(kj, {}), (0, YM.jsx)(za, {}), (0, YM.jsx)(ya, {}), (0, YM.jsx)(la, {})]
      })),
      Ga = () => Ea.featureFlags.useControllerSupport ? (0, YM.jsx)(Ua, {}) : null;
    var Ca = iM(8752),
      ea = iM(9419);
    const ba = new Set(nS.i),
      wa = MM => `${ea.o}${(0,mM.l)()}/${MM}`,
      ta = MM => {
        if (!(0, ea.m)(MM)) return null;
        const [rM, iM] = MM.slice(ea.o.length).split("/");
        return (0, Ca.e)(rM) && ba.has(iM) ? (0, nS.f)(rM, iM) : null
      };
    var ga = iM(9425);
    const ua = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, HM.v)(), {
          gameState: iM,
          isUiHidden: OM
        } = (0, nM.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: jM,
          sneakMode: aM
        } = (0, mM.q)(), [PM, QM] = (0, ZM.useState)(ga.c);
        return (0, lS.d)(sS.t, QM), rM && !OM && "inGame" === iM && PM ? (0, YM.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!jM && (0, YM.jsx)(bS, {
            glyph: (0, zM.m)("toggle" === aM ? "sneak" : "sneakToggle")
          }), (0, YM.jsx)("span", {
            children: MM("controller:gameplaySneaking")
          })]
        }) : null
      },
      Ra = 12,
      pa = MM => {
        let {
          trigger: rM,
          className: iM,
          children: OM
        } = MM;
        const SM = (0, ZM.useRef)(null);
        return (0, ZM.useEffect)((() => {
          let MM = 0;
          const iM = gM(rM, "y"),
            OM = () => {
              MM = requestAnimationFrame(OM);
              const jM = SM.current;
              if (!jM || null === rM || void 0 === rM || !rM.isConnected) return;
              const {
                left: aM,
                top: PM
              } = function(MM, rM, iM) {
                let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const jM = MM.left + MM.width / 2,
                  aM = Math.max(Ra, iM.width - Ra - rM.width),
                  PM = Math.min(Math.max(jM - rM.width / 2, Ra), aM),
                  nM = iM.height - OM;
                let QM = 0,
                  zM = nM;
                if (SM) {
                  const MM = Math.max(0, SM.top),
                    OM = Math.min(nM, SM.bottom);
                  OM - MM >= Math.max(iM.height / 2, rM.height + 24) && (QM = MM, zM = OM)
                }
                const LM = MM.top + MM.height / 2 < (QM + zM) / 2 ? zM - Ra - rM.height : QM + Ra;
                return {
                  left: PM,
                  top: Math.max(Ra, LM)
                }
              }(rM.getBoundingClientRect(), {
                width: jM.offsetWidth,
                height: jM.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(xj)) || 0, null !== iM && void 0 !== iM && iM.isConnected ? iM.getBoundingClientRect() : null);
              jM.style.transform = `translate3d(${Math.round(aM)}px, ${Math.round(PM)}px, 0)`, jM.style.visibility = "visible"
            };
          return OM(), () => {
            cancelAnimationFrame(MM)
          }
        }), [rM]), (0, YM.jsx)("div", {
          ref: SM,
          className: iM,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: OM
        })
      };
    var Wa = iM(1398),
      sa = iM(9430),
      Da = iM(1520),
      ka = iM(9438),
      Za = iM(9442);
    const oa = {
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
      fa = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, HM.v)(), iM = (0, sa.c)(), OM = (0, NS.f)("_tasks"), jM = (0, NS.f)("_availableLeaderboards");
        if (!rM) return null;
        const aM = (MM => {
          let {
            hasShop: rM,
            hasTasksOrLeaderboards: iM,
            canInvite: OM
          } = MM;
          const SM = [];
          return rM && SM.push("shop"), iM && SM.push("tasks"), OM && SM.push("invite"), SM.push("leave"), SM
        })({
          hasShop: iM,
          hasTasksOrLeaderboards: !(!OM && !jM),
          canInvite: !!Ea.featureFlags.canUseInviteLinks
        });
        return (0, YM.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: aM.map((rM => {
            const {
              icon: iM,
              labelKey: OM
            } = oa[rM], SM = "leave" === rM ? Da.J : Da.e;
            return (0, YM.jsx)(SM, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (MM => {
                  switch (MM) {
                    case "shop":
                      return QM.i.Tz(Za.n), void nM.d.set({
                        openEverythingMenuName: Pi.m.SHOP
                      });
                    case "tasks":
                      return void QM.i.Tz("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void QM.i.Tz("toggleMenu", "inviteLink");
                    case "leave":
                      (0, ka.e)()
                  }
                })(rM)
              },
              children: (0, YM.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, YM.jsx)(Wa.b, {
                  name: iM
                }), (0, YM.jsx)("span", {
                  children: MM(OM)
                })]
              })
            }, rM)
          }))
        })
      };
    var Ya = iM(2093);
    const Na = hM.z,
      Aa = ["forward", "backward", "left", "right", "sprint"],
      xa = MM => MM.ctrlKey || MM.altKey || "Alt" === MM.key || "ArrowUp" === MM.key || "ArrowDown" === MM.key || "Tab" === MM.code || "/" === MM.key || "Slash" === MM.code;
    class va {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(hM.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(MM) {
        this.armed = MM
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || rM ? !MM.repeat && this.swallowedKeys.delete(MM.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(MM.code),
          continues: !1
        } : "Escape" === MM.key || MM.repeat && !this.swallowedKeys.has(MM.code) ? {
          swallow: !1,
          continues: !1
        } : iM ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(MM.code), {
          swallow: !0,
          continues: (0, HM.f)(MM)
        })
      }
      onKeyUp(MM) {
        return this.swallowedKeys.delete(MM.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SM = (0, hM.p)(MM.values, this.previousHeld),
          jM = null === iM ? -1 : (0, hM.l)(iM),
          aM = jM >= 0 && SM[jM] && !this.previousHeld[jM],
          PM = SM.some(((MM, rM) => MM && !this.previousHeld[rM] && rM !== jM)),
          nM = Math.hypot(MM.leftStick.x, MM.leftStick.y) >= Na,
          QM = Math.hypot(MM.rightStick.x, MM.rightStick.y) >= Na,
          zM = nM && !this.leftStickWasPressed || QM && !this.rightStickWasPressed;
        this.previousHeld = SM, this.leftStickWasPressed = nM, this.rightStickWasPressed = QM;
        let LM = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, LM = !0);
        const mM = !rM && aM && !OM,
          HM = !mM && this.armed && !rM && (PM || zM);
        return (mM || HM) && (this.consumeNextFrame = !0, this.consumeAfterContinue = HM, LM = !0), {
          continues: HM,
          back: mM,
          consumeHeld: LM
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Fa = new Set([...Ya.k, ...Ya.A]),
      Ba = MM => ((MM, rM, iM) => {
        const OM = Object.keys(rM).filter((OM => !iM.has(OM) && rM[OM].includes(MM)));
        return OM.length > 0 && OM.every((MM => Aa.includes(MM)))
      })(MM, Ya.v, Fa),
      Xa = (MM, rM, iM) => {
        const OM = new va,
          SM = MM => {
            if (!MM.isTrusted) return;
            const {
              swallow: iM,
              continues: SM
            } = OM.onKeyDown(MM, !(0, HM.A)(MM) || (0, iS.d)() || (0, ni.r)(), Ba(MM.code));
            iM && (MM.stopImmediatePropagation(), xa(MM) && MM.preventDefault()), SM && ((0, HM.u)("keyboardMouse"), rM())
          },
          jM = MM => {
            MM.isTrusted && OM.onKeyUp(MM) && (MM.stopImmediatePropagation(), xa(MM) && MM.preventDefault())
          },
          PM = () => {
            OM.forgetKeys()
          };
        window.addEventListener("keydown", SM, !0), window.addEventListener("keyup", jM, !0), window.addEventListener("blur", PM);
        const nM = aM.g.onFrame((MM => {
            const SM = LM.d.getActiveConsumerName(),
              jM = iM(),
              aM = jM ? (0, zM.m)("menuBack") : null,
              PM = null !== SM && "gameplay" !== SM,
              {
                continues: nM,
                back: QM,
                consumeHeld: hM
              } = OM.onPadFrame(MM, PM, aM, (0, HM.h)(MM));
            if (hM) {
              const MM = (0, mM.j)().swapSticks ? "right" : "left";
              LM.d.consumeAllHeld(OM.consumeLeavesMoveStick() ? MM : null)
            }
            QM ? null === jM || void 0 === jM || jM() : nM && rM()
          })),
          QM = (0, iS.e)(`pressToContinue:${MM}`, (() => OM.blocksGameplay()));
        return {
          setArmed: MM => {
            OM.setArmed(MM)
          },
          dispose: () => {
            window.removeEventListener("keydown", SM, !0), window.removeEventListener("keyup", jM, !0), window.removeEventListener("blur", PM), nM(), QM()
          }
        }
      };
    var Ia = iM(5401),
      Ka = iM(3834),
      qa = iM(3530),
      Ta = iM(8760);
    const Va = MM => {
        let {
          text: rM
        } = MM;
        return (0, YM.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: rM
        })
      },
      ca = MM => {
        let {
          label: rM,
          hint: iM,
          options: OM,
          value: jM,
          onChange: aM
        } = MM;
        const {
          t: PM
        } = (0, SM.A)();
        return (0, YM.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, YM.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, YM.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, YM.jsx)("div", {
                className: "SliderText",
                children: rM
              }), iM && (0, YM.jsx)("div", {
                className: "ControllerSettingsHint",
                children: iM
              })]
            }), (0, YM.jsx)(qa.e, {
              options: OM.map((MM => ({
                label: "label" in MM ? MM.label : PM(MM.labelKey),
                value: MM.value
              }))),
              value: jM,
              onChange: MM => {
                aM(MM.value)
              }
            })]
          })
        })
      },
      MP = MM => {
        let {
          settingKey: rM,
          label: iM,
          range: OM,
          format: SM
        } = MM;
        const jM = (0, mM.q)();
        return (0, YM.jsx)(Ia.h, {
          name: iM,
          min: OM.min,
          max: OM.max,
          step: OM.step,
          padStep: OM.step,
          initValue: jM[rM],
          format: SM,
          onChange: MM => {
            (0, mM.p)({
              [rM]: (0, Ta.A)(MM, OM)
            })
          }
        })
      };
    var rP = iM(9451),
      iP = iM(9453);
    const OP = MM => MM instanceof DOMException && ("SecurityError" === MM.name || "NotAllowedError" === MM.name),
      SP = MM => {
        const [rM] = [...MM.controllers].sort(((MM, rM) => iP.o[MM] - iP.o[rM]));
        return iP.l[rM]
      },
      jP = MM => {
        (0, rP.b)().allowPhoneMotion().catch((rM => {
          MM && OP(rM) ? MM() : console.warn("Could not enable the motion sensor", rM)
        }))
      },
      aP = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      PP = MM => {
        let {
          status: rM
        } = MM;
        const {
          t: iM
        } = (0, SM.A)(), [OM, jM] = (0, ZM.useState)(null), aM = `${rM.controllers.join(",")}|${rM.phoneMotion}`;
        (0, ZM.useEffect)((() => {
          jM(null)
        }), [aM]);
        const PM = () => {
          (0, rP.b)().connectController().then((MM => {
            jM(MM > 0 ? "openFailed" : null)
          })).catch((MM => {
            OP(MM) ? jM("needsClick") : console.warn("Could not connect motion controller", MM)
          }))
        };
        if (rM.hidSupported) {
          let MM = iM("controller:settingsGyroConnectHint");
          return "needsClick" === OM ? MM = iM("controller:settingsGyroConnectNeedsClick") : "openFailed" === OM ? MM = iM("controller:settingsGyroOpenFailed") : rM.controllers.length > 0 && (MM = iM("controller:settingsGyroConnected", {
            name: SP(rM)
          })), (0, YM.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, YM.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, YM.jsx)("div", {
                className: "ControllerSettingsHint",
                children: MM
              }), (0, YM.jsx)(Da.e, {
                onClick: PM,
                children: iM("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === rM.phoneMotion) return (0, YM.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, YM.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === OM && (0, YM.jsx)("div", {
              className: "ControllerSettingsHint",
              children: iM("controller:settingsGyroAllowNeedsTap")
            }), (0, YM.jsx)(Da.e, {
              onClick: () => {
                jP((() => {
                  jM("needsTap")
                }))
              },
              children: iM("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const nM = aP[rM.phoneMotion];
        return nM ? (0, YM.jsx)("div", {
          className: "ControllerSettingsHint",
          children: iM(nM)
        }) : null
      },
      nP = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, mM.q)(), iM = (0, rP.d)(), OM = (0, HM.y)(), jM = !iM.hidSupported && iM.phoneSupported && !iM.padConnected, aM = (iM.hidSupported || iM.phoneSupported) && !jM, PM = (0, zM.m)("pause");
        return (0, YM.jsxs)(YM.Fragment, {
          children: [(0, YM.jsx)(Va, {
            text: MM("controller:settingsGyro")
          }), jM && (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MM("controller:settingsGyroPhoneNeedsController")
          }), !aM && !jM && (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MM(iM.hidBlocked || iM.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), aM && (0, YM.jsx)(Ia.c, {
            label: MM(iM.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: rM.gyroAiming,
            onClick: MM => {
              var rM, iM;
              (0, mM.p)({
                gyroAiming: MM
              });
              const OM = null === (rM = null === (iM = navigator.userActivation) || void 0 === iM ? void 0 : iM.isActive) || void 0 === rM || rM;
              if (!MM || !OM) return;
              const SM = (0, rP.b)(),
                jM = SM.getStatus();
              jM.hidSupported ? SM.connectControllerIfNoneGranted().catch((MM => {
                console.warn("Motion controller picker unavailable", MM)
              })) : "needsPermission" === jM.phoneMotion && jP()
            },
            circleInfoText: MM(iM.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), aM && iM.hidSupported && (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MM("controller:settingsGyroSteamHint")
          }), aM && rM.gyroAiming && (0, YM.jsxs)(YM.Fragment, {
            children: [(0, YM.jsx)(PP, {
              status: iM
            }), (0, YM.jsx)(MP, {
              settingKey: "gyroSensitivity",
              label: MM("controller:settingsGyroSensitivity"),
              range: Ta.S,
              format: Ta.M
            }), (0, YM.jsx)(ca, {
              label: MM("controller:settingsGyroActivation"),
              hint: "aiming" === rM.gyroActivation && (0, YM.jsx)(Ka.e, {
                text: MM("controller:settingsGyroAimingHint", {
                  button: Ka.i
                }),
                glyph: (0, zM.m)("use")
              }),
              options: Ta.R,
              value: rM.gyroActivation,
              onChange: MM => {
                (0, mM.p)({
                  gyroActivation: MM
                })
              }
            }), "button" === rM.gyroActivation && (0, YM.jsx)(ca, {
              label: MM("controller:settingsGyroButton"),
              hint: MM("controller:settingsGyroButtonHint"),
              options: Ta.t.filter((MM => MM !== PM || MM === rM.gyroButton)).map((MM => ({
                label: eS(OM, MM),
                value: MM
              }))),
              value: rM.gyroButton,
              onChange: MM => {
                (0, mM.p)({
                  gyroButton: MM
                })
              }
            })]
          })]
        })
      };
    var QP = iM(1963);
    const zP = () => {
      const {
        t: MM
      } = (0, SM.A)(), rM = (0, mM.q)(), iM = (0, HM.y)();
      return (0, YM.jsxs)(YM.Fragment, {
        children: [(0, YM.jsx)(Va, {
          text: MM("controller:settingsAccessibility")
        }), (0, YM.jsx)(Ia.c, {
          label: MM("controller:settingsSwapConfirmBack"),
          checked: (0, zM.S)(rM.swapConfirmBack, iM),
          onClick: MM => {
            (0, mM.p)({
              swapConfirmBack: MM === (0, zM.S)(null, iM) ? null : MM
            }), QP.k.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: MM("controller:settingsSwapConfirmBackInfo")
        }), (0, YM.jsx)(ca, {
          label: MM("controller:settingsButtonRepeat"),
          hint: MM("controller:settingsButtonRepeatHint"),
          options: Ta.q,
          value: rM.buttonRepeat,
          onChange: MM => {
            (0, mM.p)({
              buttonRepeat: MM
            })
          }
        }), (0, YM.jsx)(ca, {
          label: MM("controller:settingsTapHoldTime"),
          hint: MM("controller:settingsTapHoldTimeHint"),
          options: Ta.xb,
          value: rM.tapHoldTime,
          onChange: MM => {
            (0, mM.p)({
              tapHoldTime: MM
            })
          }
        }), (0, YM.jsx)(ca, {
          label: MM("controller:settingsEmoteButton"),
          hint: MM("wheel" === rM.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Ta.F,
          value: rM.emoteButton,
          onChange: MM => {
            (0, mM.p)({
              emoteButton: MM
            })
          }
        }), (0, YM.jsx)(ca, {
          label: MM("controller:settingsAttackMode"),
          hint: MM("toggle" === rM.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Ta.p,
          value: rM.attackMode,
          onChange: MM => {
            (0, mM.p)({
              attackMode: MM
            })
          }
        }), (0, YM.jsx)(Ia.c, {
          label: MM("controller:settingsLargePointer"),
          checked: rM.largePointer,
          onClick: MM => {
            (0, mM.p)({
              largePointer: MM
            })
          },
          circleInfoText: MM("controller:settingsLargePointerInfo")
        })]
      })
    };
    var LP = iM(9459);
    const mP = new class {
        constructor(MM) {
          this.router = MM, this.current = null
        }
        claim(MM, rM) {
          const iM = this.current;
          iM && (this.current = null, iM.release(), iM.onTakenOver());
          const OM = this.router.register({
              ...MM,
              name: "capture"
            }),
            SM = {
              release: OM,
              onTakenOver: rM
            };
          return this.current = SM, () => {
            this.current === SM && (this.current = null), OM()
          }
        }
      }(LM.d),
      HP = MM => {
        (0, ZM.useEffect)((() => {
          if (!MM) return;
          const rM = MM();
          let iM = !1;
          const OM = () => {
              iM || (iM = !0, rM.onEnd())
            },
            SM = mP.claim({
              isActive: () => !iM,
              onFrame: MM => {
                rM.onFrame(MM, OM)
              }
            }, OM),
            jM = void 0 === rM.timeoutMs ? void 0 : window.setTimeout(OM, rM.timeoutMs),
            aM = MM => {
              "Escape" === MM.key && (MM.preventDefault(), MM.stopPropagation(), OM())
            };
          return window.addEventListener("keydown", aM, !0), () => {
            iM = !0, SM(), window.clearTimeout(jM), window.removeEventListener("keydown", aM, !0)
          }
        }), [MM])
      },
      hP = MM => {
        let {
          row: rM,
          capturing: iM,
          onCapture: OM,
          holdFillRef: jM,
          onRebind: aM,
          swapped: PM
        } = MM;
        const {
          t: nM
        } = (0, SM.A)();
        if ("fixed" === rM.kind) return (0, YM.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, YM.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, YM.jsx)("div", {
              className: "ControlName",
              children: nM(rM.labelKey)
            }), (0, YM.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, YM.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, YM.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, YM.jsx)(bS, {
                    glyph: "move" === rM.stick ? (0, zM.x)() : (0, zM.u)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: QM
        } = rM, LM = (0, zM.m)(QM), mM = (0, zM.o)(QM), HM = LM !== mM && (0, zM.e)(QM, mM);
        return (0, YM.jsxs)("div", {
          className: fM()("ControlRow PadControlRow", {
            Capturing: iM
          }),
          children: [(0, YM.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, YM.jsx)("div", {
              className: "ControlName",
              children: nM(Ta.k[QM])
            }), (0, YM.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!iM && (0, YM.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, YM.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    OM(QM)
                  },
                  children: (0, YM.jsx)(bS, {
                    glyph: LM
                  })
                }), HM && (0, YM.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: nM("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    aM(QM, mM)
                  },
                  children: (0, YM.jsx)(Wa.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), iM && (0, YM.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, YM.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, YM.jsx)("span", {
                    children: nM("controller:settingsCapturePrompt")
                  }), (0, YM.jsx)("div", {
                    ref: jM,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, YM.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    OM(null)
                  },
                  children: "\xd7"
                })]
              }), iM && (0, YM.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, YM.jsx)(Ka.e, {
                  text: nM((0, zM.e)(QM, (0, zM.m)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Ka.i
                  }),
                  glyph: (0, zM.m)("menuBack")
                })
              })]
            })]
          }), PM.map((MM => (0, YM.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, YM.jsx)(Ka.e, {
              text: nM("controller:settingsSwapNotice", {
                action: nM(Ta.k[MM]),
                button: Ka.i
              }),
              glyph: (0, zM.m)(MM)
            })
          }, MM))), iM && (0, YM.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Ta.w}ms`
            }
          })]
        })
      },
      JP = [],
      dP = MM => {
        let {
          layoutSetting: rM
        } = MM;
        const {
          t: iM
        } = (0, SM.A)(), OM = (0, mM.q)();
        (0, HM.y)();
        const jM = (0, ZM.useRef)(null),
          [aM, PM] = (0, ZM.useState)(null),
          nM = (0, ZM.useCallback)(((MM, rM) => {
            const iM = (0, mM.j)().bindings;
            (0, zM.K)(MM, rM);
            const OM = (0, zM.B)(iM, MM);
            PM(OM.length > 0 ? {
              action: MM,
              swapped: OM
            } : null)
          }), []),
          [QM, JM] = ((MM, rM) => {
            const [iM, OM] = (0, ZM.useState)(null), SM = (0, ZM.useMemo)((() => iM ? () => {
              const SM = (0, zM.m)("menuBack"),
                jM = new Ta.e(SM, (0, zM.m)("menuConfirm"), (MM => (0, zM.e)(iM, MM)));
              return {
                onFrame: (OM, aM) => {
                  var PM;
                  const nM = OM.frame.timestampMs,
                    QM = jM.update({
                      ...OM,
                      isDown: MM => (0, hM.J)(OM.frame.values, MM)
                    }, nM);
                  null === (PM = MM.current) || void 0 === PM || PM.style.setProperty("width", 100 * jM.getBindHoldProgress(nM) + "%"), QM && ("bind" === QM.kind ? (LM.d.consumeButton(QM.button), rM(iM, QM.button)) : LM.d.consumeButton(SM), aM())
                },
                onEnd: () => {
                  OM(null)
                },
                timeoutMs: Ta.w
              }
            } : null), [iM, MM, rM]);
            return HP(SM), [iM, OM]
          })(jM, nM),
          dM = MM => {
            MM && PM(null), JM(MM)
          };
        (0, ZM.useEffect)((() => {
          if (!aM) return;
          const MM = window.setTimeout((() => {
            PM(null)
          }), Ta.ub);
          return () => {
            window.clearTimeout(MM)
          }
        }), [aM]);
        const yM = !OM.swapSticks && 0 === Object.keys(OM.bindings).length;
        return (0, YM.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, YM.jsx)("div", {
            className: "SliderText",
            children: iM("controller:settingsRemap")
          }), (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: iM("controller:settingsRemapHint")
          }), (0, YM.jsx)(Da.J, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: yM,
            onClick: () => {
              dM(null), PM(null), (0, zM.O)()
            },
            children: iM("controller:settingsResetAll")
          }), rM, Ta.ib.map(((MM, rM) => (0, YM.jsx)(LP.d, {
            title: iM(MM.titleKey),
            defaultOpen: 0 === rM,
            children: MM.rows.map((MM => (0, YM.jsx)(hP, {
              row: MM,
              capturing: "action" === MM.kind && MM.action === QM,
              onCapture: dM,
              holdFillRef: jM,
              onRebind: nM,
              swapped: "action" === MM.kind && (null === aM || void 0 === aM ? void 0 : aM.action) === MM.action ? aM.swapped : JP
            }, "action" === MM.kind ? MM.action : MM.labelKey)))
          }, MM.titleKey)))]
        })
      },
      yP = MM => {
        let {
          deadzone: rM,
          dotRef: iM,
          labelKey: OM
        } = MM;
        const {
          t: jM
        } = (0, SM.A)();
        return (0, YM.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, YM.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, YM.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * rM + "%",
                height: 100 * rM + "%"
              }
            }), (0, YM.jsx)("div", {
              ref: iM,
              className: "ControllerTesterDot"
            })]
          }), (0, YM.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: jM(OM)
          })]
        })
      },
      lP = (MM, rM, iM, OM) => {
        var SM;
        MM && (MM.style.left = 50 + 50 * Math.max(-1, Math.min(1, rM.x)) + "%", MM.style.top = 50 + 50 * Math.max(-1, Math.min(1, rM.y)) + "%", null === (SM = MM.parentElement) || void 0 === SM || SM.classList.toggle("Active", OM || Math.hypot(rM.x, rM.y) > iM))
      },
      EP = MM => {
        const rM = {
            deadzone: MM.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          iM = {
            deadzone: MM.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return MM.swapSticks ? {
          left: iM,
          right: rM
        } : {
          left: rM,
          right: iM
        }
      },
      UP = () => {
        const {
          t: MM
        } = (0, SM.A)(), rM = (() => {
          const [MM, rM] = (0, ZM.useState)((() => aM.g.getActivePad()));
          return (0, lS.d)(aM.c, (() => {
            rM(aM.g.getActivePad())
          })), MM
        })(), iM = EP((0, mM.q)()), OM = (0, ZM.useRef)(null), jM = (0, ZM.useRef)(null), PM = (0, ZM.useRef)([]), nM = (0, ZM.useRef)(null), QM = (0, ZM.useRef)(null), [HM, JM] = (MM => {
          const [rM, iM] = (0, ZM.useState)(!1), OM = (0, ZM.useMemo)((() => rM ? () => {
            const rM = (0, zM.m)("menuBack"),
              OM = new Ta.i;
            return {
              onFrame: (iM, SM) => {
                var jM;
                const aM = OM.update({
                  pressed: iM.wasPressed(rM),
                  sQ: iM.isHeld(rM)
                }, iM.frame.timestampMs);
                null === (jM = MM.current) || void 0 === jM || jM.style.setProperty("width", 100 * aM + "%"), aM >= 1 && (LM.d.consumeButton(rM), SM())
              },
              onEnd: () => {
                iM(!1)
              }
            }
          } : null), [rM, MM]);
          return HP(OM), [rM, iM]
        })(jM);
        (0, ZM.useEffect)((() => {
          const MM = MM => {
            for (const iM of hM.X) {
              const rM = (0, hM.l)(iM),
                OM = PM.current[rM];
              if (!OM) continue;
              const SM = MM.values[rM];
              OM.classList.toggle("Pressed", SM >= hM.z), (0, hM.N)(rM) && OM.style.setProperty("--trigger-fill", `${Math.round(100*SM)}%`)
            }
            const rM = EP((0, mM.j)());
            lP(nM.current, MM.leftStick, rM.left.deadzone, MM.values[(0, hM.l)("LS")] >= hM.z), lP(QM.current, MM.rightStick, rM.right.deadzone, MM.values[(0, hM.l)("RS")] >= hM.z)
          };
          return rM || MM((0, hM.v)()), aM.g.onFrame(MM)
        }), [rM]), (0, ZM.useEffect)((() => {
          rM || JM(!1)
        }), [rM, JM]), (0, ZM.useEffect)((() => {
          var MM;
          HM && (null === (MM = OM.current) || void 0 === MM || MM.scrollIntoView({
            block: "nearest"
          }))
        }), [HM]);
        const dM = Ta.fb.find((MM => MM.value === (null === rM || void 0 === rM ? void 0 : rM.family)));
        return (0, YM.jsxs)("div", {
          ref: OM,
          className: fM()("SettingBox ControllerTester", {
            Testing: HM
          }),
          children: [(0, YM.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, YM.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [rM && (0, YM.jsx)("div", {
                children: MM("controller:settingsTesterFamily", {
                  family: dM ? MM(dM.labelKey) : rM.family
                })
              }), rM && (0, YM.jsx)("div", {
                className: "ControllerTesterPadId",
                children: rM.id
              }), !rM && (0, YM.jsx)("div", {
                children: MM("controller:settingsTesterNoPad")
              })]
            }), (rM || HM) && (0, YM.jsx)(Da.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                JM(!HM)
              },
              children: MM(HM ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), rM && !HM && (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MM("controller:settingsTesterHint")
          }), HM && (0, YM.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, YM.jsx)(Ka.e, {
              text: MM("controller:settingsTesterTesting", {
                button: Ka.i
              }),
              glyph: (0, zM.m)("menuBack")
            }), (0, YM.jsx)("div", {
              ref: jM,
              className: "ControllerTesterExitFill"
            })]
          }), (0, YM.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, YM.jsx)(yP, {
              deadzone: iM.left.deadzone,
              dotRef: nM,
              labelKey: iM.left.labelKey
            }), (0, YM.jsx)("div", {
              className: "ControllerTesterButtons",
              children: hM.X.map((MM => {
                const iM = (0, hM.l)(MM);
                return (0, YM.jsx)("div", {
                  ref: MM => {
                    PM.current[iM] = MM
                  },
                  className: (0, hM.N)(iM) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, YM.jsx)(bS, {
                    glyph: MM,
                    family: null === rM || void 0 === rM ? void 0 : rM.family
                  })
                }, MM)
              }))
            }), (0, YM.jsx)(yP, {
              deadzone: iM.right.deadzone,
              dotRef: QM,
              labelKey: iM.right.labelKey
            })]
          })]
        })
      },
      GP = (0, ZM.memo)((function() {
        const {
          t: MM
        } = (0, SM.A)(), rM = (0, mM.q)(), [iM, OM] = (0, ZM.useState)(!1);
        return (0, ZM.useEffect)((() => {
          if (!iM) return;
          const MM = window.setTimeout((() => {
            OM(!1)
          }), Ta.ub);
          return () => {
            window.clearTimeout(MM)
          }
        }), [iM]), (0, YM.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, YM.jsx)(Va, {
            text: MM("controller:settingsLook")
          }), (0, YM.jsx)(MP, {
            settingKey: "lookSensitivityX",
            label: MM("controller:settingsLookSensitivityX"),
            range: Ta.mb,
            format: Ta.N
          }), (0, YM.jsx)(MP, {
            settingKey: "lookSensitivityY",
            label: MM("controller:settingsLookSensitivityY"),
            range: Ta.mb,
            format: Ta.N
          }), (0, YM.jsx)(MP, {
            settingKey: "aimLookSensitivity",
            label: MM("controller:settingsAimLookSensitivity"),
            range: Ta.m,
            format: Ta.N
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsLookCurve"),
            hint: MM("controller:settingsLookCurveHint"),
            options: Ta.bb,
            value: rM.lookCurve,
            onChange: MM => {
              (0, mM.p)({
                lookCurve: MM
              })
            }
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsInvertLookX"),
            checked: rM.invertLookX,
            onClick: MM => {
              (0, mM.p)({
                invertLookX: MM
              })
            }
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsInvertLookY"),
            checked: rM.invertLookY,
            onClick: MM => {
              (0, mM.p)({
                invertLookY: MM
              })
            }
          }), (0, YM.jsx)(MP, {
            settingKey: "lookDeadzone",
            label: MM("controller:settingsLookDeadzone"),
            range: Ta.E,
            format: Ta.I
          }), (0, YM.jsx)(nP, {}), (0, YM.jsx)(Va, {
            text: MM("controller:settingsMovement")
          }), (0, YM.jsx)(MP, {
            settingKey: "moveDeadzone",
            label: MM("controller:settingsMoveDeadzone"),
            range: Ta.E,
            format: Ta.I
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsAutoSprint"),
            checked: rM.autoSprint,
            onClick: MM => {
              (0, mM.p)({
                autoSprint: MM
              })
            },
            circleInfoText: MM("controller:settingsAutoSprintInfo")
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsSneak"),
            options: Ta.qb,
            value: rM.sneakMode,
            onChange: MM => {
              (0, mM.p)({
                sneakMode: MM
              })
            }
          }), (0, YM.jsx)(Va, {
            text: MM("controller:settingsButtons")
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsPromptFamily"),
            options: Ta.fb,
            value: rM.promptFamily,
            onChange: MM => {
              (0, mM.p)({
                promptFamily: MM
              })
            }
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsHideButtonHints"),
            checked: rM.hideButtonHints,
            onClick: MM => {
              (0, mM.p)({
                hideButtonHints: MM
              })
            }
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsVibration"),
            checked: rM.vibration,
            onClick: MM => {
              (0, mM.p)({
                vibration: MM
              }), MM && PS("preview")
            }
          }), (0, YM.jsx)(MP, {
            settingKey: "cursorSpeed",
            label: MM("controller:settingsCursorSpeed"),
            range: Ta.B,
            format: Ta.N
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsCursorMagnetism"),
            checked: rM.cursorMagnetism,
            onClick: MM => {
              (0, mM.p)({
                cursorMagnetism: MM
              })
            }
          }), (0, YM.jsx)(Ia.c, {
            label: MM("controller:settingsMenuBackToCategories"),
            checked: rM.menuBackToCategories,
            onClick: MM => {
              (0, mM.p)({
                menuBackToCategories: MM
              })
            }
          }), (0, YM.jsx)(dP, {
            layoutSetting: (0, YM.jsxs)(YM.Fragment, {
              children: [zM.i.map((iM => (0, YM.jsx)(Ia.c, {
                label: MM(Ta.Y[iM]),
                checked: (0, zM.G)(iM, rM),
                onClick: MM => {
                  OM(!(0, zM.T)(iM, MM))
                }
              }, iM))), iM && (0, YM.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: MM("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, YM.jsx)(zP, {}), (0, YM.jsx)(Va, {
            text: MM("controller:settingsAlternatives")
          }), (0, YM.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MM("controller:settingsAlternativesHint")
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsMenuNavigation"),
            hint: MM("controller:settingsMenuNavigationHint"),
            options: Ta.cb,
            value: rM.menuNavigation,
            onChange: MM => {
              (0, mM.p)({
                menuNavigation: MM
              })
            }
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsInventoryNavigation"),
            hint: MM("controller:settingsInventoryNavigationHint"),
            options: Ta.W,
            value: rM.inventoryNavigation,
            onChange: MM => {
              (0, mM.p)({
                inventoryNavigation: MM
              })
            }
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsQuickChat"),
            hint: MM("controller:settingsQuickChatHint"),
            options: Ta.gb,
            value: rM.quickChat,
            onChange: MM => {
              (0, mM.p)({
                quickChat: MM
              })
            }
          }), (0, YM.jsx)(ca, {
            label: MM("controller:settingsLeaderboardButton"),
            hint: MM("controller:settingsLeaderboardButtonHint"),
            options: Ta.Z,
            value: rM.leaderboardButton,
            onChange: MM => {
              (0, mM.p)({
                leaderboardButton: MM
              })
            }
          }), (0, YM.jsx)(Va, {
            text: MM("controller:settingsTester")
          }), (0, YM.jsx)(UP, {})]
        })
      }));
    (0, SM.b)(OM);
    for (const tP of (0, jM.o)()) tP.connected ? aM.g.handleConnectionEvent(tP) : aM.g.handleDisconnectionEvent(tP);
    const CP = () => null !== aM.g.getActivePad(),
      eP = () => Si.getState(),
      bP = () => Si.isSteppingSlots(),
      wP = (MM, rM) => {
        const iM = rS.getFocused();
        rS.isActive() && iM && MM.contains(iM) && rS.setFocus(rM, {
          scroll: !1
        })
      }
  },
  8729: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      e: () => QM
    });
    var OM = iM(1494),
      SM = iM(1489);
    const jM = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      aM = "28de",
      PM = new Set(["1205"]),
      nM = (MM, rM) => {
        const iM = (0, OM.e)(MM);
        if ((null === iM || void 0 === iM ? void 0 : iM.vendor) === aM) return PM.has(iM.product) ? "steamdeck" : "xbox";
        if (iM && jM[iM.vendor]) return jM[iM.vendor];
        if ((0, SM.d)(MM)) return "nintendo";
        const nM = `${MM} ${null!==rM&&void 0!==rM?rM:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(nM) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(nM) ? "nintendo" : /steam deck/.test(nM) ? "steamdeck" : "xbox"
      },
      QM = MM => {
        var rM;
        return (null === (rM = (0, OM.e)(MM)) || void 0 === rM ? void 0 : rM.vendor) === aM
      }
  },
  8776: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM,
      g: () => PM
    });
    var OM = iM(8723);
    const SM = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      jM = new Set(["capture", "gameplay"]),
      aM = ["Up", "Down", "Left", "Right"],
      PM = MM => aM.includes(MM),
      nM = .25;
    const QM = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.sQ = new Array(OM.V).fill(!1), this.previousHeld = new Array(OM.V).fill(!1), this.consumedButtons = new Array(OM.V).fill(!1), this.suppressedReleases = new Array(OM.V).fill(!1), this.wakeOwned = new Array(OM.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, OM.v)()
      }
      register(MM) {
        return this.consumers.has(MM.name) && console.warn(`Controller consumer "${MM.name}" registered twice; the newer one replaces it.`), this.consumers.set(MM.name, MM), () => {
          var rM;
          this.consumers.get(MM.name) === MM && (this.activeName === MM.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (rM = this.peek) || void 0 === rM ? void 0 : rM.over) === MM.name && (this.peek = null), this.consumers.delete(MM.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(MM) {
        return this.sQ[(0, OM.l)(MM)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.sQ = new Array(OM.V).fill(!1), this.previousHeld = new Array(OM.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, OM.v)()
      }
      dispatch(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = MM, this.previousHeld = this.sQ, this.sQ = (0, OM.p)(MM.values, this.previousHeld);
        for (let jM = 0; jM < OM.V; jM++) this.suppressedReleases[jM] = !this.sQ[jM] && this.consumedButtons[jM], this.sQ[jM] || (this.consumedButtons[jM] = !1), this.wakeOwned[jM] && (this.sQ[jM] ? (this.consumedButtons[jM] = !0, this.wakeOwned[jM] = !1) : MM.values[jM] < OM.T && (this.wakeOwned[jM] = !1));
        Math.hypot(MM.leftStick.x, MM.leftStick.y) < nM && (this.leftStickConsumed = !1), Math.hypot(MM.rightStick.x, MM.rightStick.y) < nM && (this.rightStickConsumed = !1);
        const SM = this.pickActive();
        if ((null === SM || void 0 === SM ? void 0 : SM.name) !== this.activeName) {
          var aM, PM, QM, zM, LM, mM;
          const MM = this.activeName,
            rM = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            iM = null !== (aM = null === SM || void 0 === SM || null === (PM = SM.peek) || void 0 === PM ? void 0 : PM.call(SM)) && void 0 !== aM ? aM : null,
            jM = null === MM && !!iM && !(null === (QM = this.consumers.get(iM.over)) || void 0 === QM || !QM.onPeekFrame),
            nM = iM && (iM.over === MM || jM) ? iM : null,
            HM = null !== this.peek && this.peek.over === (null === SM || void 0 === SM ? void 0 : SM.name) ? this.peek : null;
          this.deactivateCurrent(null !== nM, null !== HM), this.activeName = null !== (zM = null === SM || void 0 === SM ? void 0 : SM.name) && void 0 !== zM ? zM : null, null === MM || this.handOffPending || this.consumeAllHeld();
          const hM = null === (LM = null !== nM && void 0 !== nM ? nM : HM) || void 0 === LM ? void 0 : LM.stick;
          "left" === hM && rM.left ? this.leftStickConsumed = !1 : "right" === hM && rM.right && (this.rightStickConsumed = !1), this.peek = nM, SM || null === MM ? SM && (null === (mM = this.idleResume) || void 0 === mM ? void 0 : mM.name) === SM.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: MM,
            left: rM.left && this.leftStickConsumed,
            right: rM.right && this.rightStickConsumed
          }, SM && (this.idleResume = null);
          for (let SM = 0; SM < OM.V; SM++) this.previousHeld[SM] && !this.sQ[SM] && (this.suppressedReleases[SM] = !0)
        }
        var HM, hM;
        (this.handOffPending = !1, SM) && (iM && !jM.has(SM.name) && this.consumeWakePress(SM), SM.onFrame(this.buildInput(MM, rM, iM)), this.peek && (null === (HM = this.consumers.get(this.peek.over)) || void 0 === HM || null === (hM = HM.onPeekFrame) || void 0 === hM || hM.call(HM, this.buildInput(MM, rM, !1, this.peek.stick))))
      }
      consumeWakePress(MM) {
        for (let SM = 0; SM < OM.V; SM++) {
          var rM, iM;
          const jM = OM.X[SM];
          (null !== (rM = null === (iM = MM.wakePressActs) || void 0 === iM ? void 0 : iM.call(MM, jM)) && void 0 !== rM ? rM : aM.includes(jM)) || (this.sQ[SM] ? this.consumedButtons[SM] = !0 : this.lastFrame.values[SM] >= OM.Q && (this.wakeOwned[SM] = !0))
        }
      }
      pickActive() {
        for (const MM of SM) {
          const rM = this.consumers.get(MM);
          if (rM && rM.isActive()) return rM
        }
        return null
      }
      deactivateCurrent() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var iM, OM, SM, jM;
        this.activeName && (null === (iM = this.consumers.get(this.activeName)) || void 0 === iM || null === (OM = iM.onDeactivate) || void 0 === OM || OM.call(iM, MM));
        this.peek && !rM && (null === (SM = this.consumers.get(this.peek.over)) || void 0 === SM || null === (jM = SM.onDeactivate) || void 0 === jM || jM.call(SM, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let SM = 0; SM < OM.V; SM++) this.sQ[SM] && (this.consumedButtons[SM] = !0);
        const {
          leftStick: rM,
          rightStick: iM
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== MM && (this.leftStickConsumed || Math.hypot(rM.x, rM.y) >= nM), this.rightStickConsumed = "right" !== MM && (this.rightStickConsumed || Math.hypot(iM.x, iM.y) >= nM)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(MM) {
        const rM = (0, OM.l)(MM);
        this.sQ[rM] && (this.consumedButtons[rM] = !0)
      }
      buildInput(MM, rM, iM, SM) {
        const jM = this.sQ,
          aM = this.previousHeld,
          PM = SM ? new Array(OM.V).fill(!0) : [...this.consumedButtons],
          nM = SM ? PM : [...this.suppressedReleases],
          QM = !this.leftStickConsumed && (!SM || "left" === SM),
          zM = !this.rightStickConsumed && (!SM || "right" === SM);
        return {
          frame: MM,
          dtMs: rM,
          isHeld: MM => {
            const rM = (0, OM.l)(MM);
            return jM[rM] && !PM[rM]
          },
          wasPressed: MM => {
            const rM = (0, OM.l)(MM);
            return jM[rM] && !aM[rM] && !PM[rM]
          },
          wasReleased: MM => {
            const rM = (0, OM.l)(MM);
            return !jM[rM] && aM[rM] && !nM[rM]
          },
          value: rM => {
            const iM = (0, OM.l)(rM);
            return PM[iM] ? 0 : MM.values[iM]
          },
          leftStick: QM ? MM.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: zM ? MM.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: iM
        }
      }
    }
  },
  8743: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM.f,
      i: () => LM.j,
      j: () => gM,
      l: () => uM,
      p: () => RM,
      q: () => pM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(1516),
      aM = iM(30),
      PM = iM(8752),
      nM = iM(8723),
      QM = iM(8738),
      zM = iM(8717),
      LM = iM(2120),
      mM = iM(8760);
    const HM = {
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
      hM = "controllerSettings",
      JM = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      dM = ["auto", ...PM.c],
      yM = (MM, rM) => "string" === typeof rM && MM.includes(rM),
      lM = MM => rM => "number" === typeof rM && Number.isFinite(rM) ? (0, mM.A)(rM, MM) : void 0,
      EM = MM => "boolean" === typeof MM ? MM : void 0,
      UM = MM => rM => yM(MM, rM) ? rM : void 0,
      GM = {
        lookSensitivityX: lM(mM.mb),
        lookSensitivityY: lM(mM.mb),
        aimLookSensitivity: lM(mM.m),
        invertLookX: EM,
        invertLookY: EM,
        lookCurve: UM(nM.O),
        lookDeadzone: lM(mM.E),
        moveDeadzone: lM(mM.E),
        swapSticks: EM,
        autoSprint: EM,
        sneakMode: UM(["toggle", "hold"]),
        tapHoldTime: UM(["short", "medium", "long"]),
        attackMode: UM(["hold", "toggle"]),
        promptFamily: UM(dM),
        hideButtonHints: EM,
        vibration: EM,
        cursorSpeed: lM(mM.B),
        cursorMagnetism: EM,
        buttonRepeat: UM(nM.o),
        largePointer: EM,
        menuBackToCategories: EM,
        swapConfirmBack: EM,
        menuNavigation: UM(["hybrid", "focus", "cursor"]),
        inventoryNavigation: UM(["hybrid", "slot", "cursor"]),
        quickChat: UM(["wheel", "off"]),
        leaderboardButton: UM(["shop", "leaderboard"]),
        gyroAiming: EM,
        gyroSensitivity: lM(mM.S),
        gyroActivation: UM(["always", "aiming", "button"]),
        gyroButton: UM(nM.X),
        emoteButton: UM(["tapHold", "wheel"])
      },
      CM = [{
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
      eM = MM => {
        const rM = {};
        if ("object" !== typeof MM || null === MM) return rM;
        for (const [iM, OM] of Object.entries(MM)) Object.prototype.hasOwnProperty.call(QM.c, iM) && yM(nM.X, OM) && (rM[iM] = OM);
        return rM
      },
      bM = MM => {
        const rM = {};
        for (const iM of Object.keys(HM))("bindings" === iM ? Object.keys(MM.bindings).length > 0 : MM[iM] !== HM[iM]) && (rM[iM] = MM[iM]);
        0 !== Object.keys(rM).length ? aM.g.setItem(hM, rM) : aM.g.removeItem(hM)
      };
    let wM = (() => {
        const MM = aM.g.getItem(hM),
          rM = (MM => {
            const rM = "object" === typeof MM && null !== MM ? MM : {},
              iM = {
                ...HM,
                bindings: eM(rM.bindings)
              };
            for (const SM of Object.keys(GM)) {
              const MM = GM[SM](rM[SM]);
              void 0 !== MM && (iM[SM] = MM)
            }
            const OM = Object.keys(rM).filter((MM => !!Object.prototype.hasOwnProperty.call(HM, MM) && ("bindings" === MM ? "object" !== typeof rM.bindings || null === rM.bindings || Object.keys(rM.bindings).length !== Object.keys(iM.bindings).length : iM[MM] !== rM[MM])));
            return OM.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${OM.join(", ")}`), iM
          })(MM);
        return null !== MM && void 0 !== MM && bM(rM), rM
      })(),
      tM = {
        ...wM,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const MM = {},
            rM = new URLSearchParams(window.location.search);
          for (const {
              param: iM,
              key: OM
            }
            of CM) {
            const SM = GM[OM](rM.get(iM));
            void 0 !== SM && (MM[OM] = SM)
          }
          return MM
        })()
      };
    const gM = () => tM,
      uM = () => {
        var MM, rM;
        const iM = gM().promptFamily;
        return "auto" !== iM ? iM : null !== (MM = null === (rM = zM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : "xbox"
      },
      RM = MM => {
        const rM = tM;
        wM = {
          ...wM,
          ...MM
        }, bM(wM), tM = {
          ...tM,
          ...MM
        }, (MM => {
          SM.i.Tz(LM.j, tM), JM.some((rM => MM[rM] !== tM[rM])) && SM.i.Tz(LM.f, tM)
        })(rM)
      },
      pM = () => {
        const [MM, rM] = (0, OM.useState)(tM);
        return (0, jM.d)(LM.j, rM), MM
      }
  },
  9255: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    const OM = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      SM = MM => OM.has(MM)
  },
  8717: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => JM.d,
      g: () => EM
    });
    var OM = iM(8723),
      SM = iM(8729);
    const jM = .1,
      aM = .3;
    class PM {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(MM, rM) {
        const iM = null === this.lastMs ? 0 : Math.min(Math.max(0, rM - this.lastMs), 100);
        this.lastMs = rM;
        const OM = Math.hypot(MM.x, MM.y);
        if (OM >= aM) return this.anchor = null, void(this.returning = !0);
        OM >= jM || (this.returning = !1);
        const SM = this.anchor;
        if (!SM || Math.hypot(MM.x - SM.x, MM.y - SM.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: MM.x,
          y: MM.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += iM, this.steadyMs < 1e3) return;
        const PM = Math.max(OM, Math.hypot(SM.x, SM.y));
        PM < jM ? this.deadzone = 0 : this.returning && (this.deadzone = PM + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(MM) {
        return Math.hypot(MM.x, MM.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : MM
      }
    }
    const nM = (MM, rM) => {
        var iM, OM;
        return null !== (iM = MM && (null === (OM = Object.getOwnPropertyDescriptor(MM, rM)) || void 0 === OM ? void 0 : OM.get)) && void 0 !== iM ? iM : null
      },
      QM = MM => {
        const rM = MM.vendorName;
        return "string" === typeof rM ? rM : void 0
      },
      zM = ((MM, rM) => {
        const iM = nM(MM, "index"),
          OM = nM(MM, "id"),
          SM = nM(MM, "connected"),
          jM = nM(MM, "mapping"),
          aM = nM(MM, "buttons"),
          PM = nM(MM, "axes"),
          zM = nM(rM, "pressed"),
          LM = nM(rM, "value");
        return iM && OM && SM && jM && aM && PM && zM && LM ? MM => {
          const rM = aM.call(MM),
            nM = PM.call(MM),
            mM = {
              index: Number(iM.call(MM)),
              id: String(OM.call(MM)),
              connected: !0 === SM.call(MM),
              mapping: String(jM.call(MM)),
              buttons: [],
              axes: [],
              vendorName: QM(MM)
            };
          for (let iM = 0; iM < rM.length; iM++) mM.buttons.push({
            pressed: !0 === zM.call(rM[iM]),
            value: Number(LM.call(rM[iM]))
          });
          for (let iM = 0; iM < nM.length; iM++) mM.axes.push(Number(nM[iM]));
          return mM
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      LM = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var mM = iM(1482),
      HM = iM(1489);
    const hM = MM => ({
      pressed: MM,
      value: MM ? 1 : 0
    });
    var JM = iM(2120);
    const dM = aM,
      yM = MM => {
        const rM = new Array(OM.V).fill(0);
        for (let iM = 0; iM < OM.V && iM < MM.buttons.length; iM++) {
          const SM = MM.buttons[iM];
          rM[iM] = SM.pressed && !(0, OM.N)(iM) ? Math.max(SM.value, OM.z) : SM.value
        }
        return rM
      },
      lM = (MM, rM) => {
        var iM, OM;
        return {
          x: null !== (iM = MM.axes[rM]) && void 0 !== iM ? iM : 0,
          y: null !== (OM = MM.axes[rM + 1]) && void 0 !== OM ? OM : 0
        }
      };
    const EM = new class {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zM;
        this.readGamepads = MM, this.requireTrustedPads = rM, this.nativeReader = iM, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = MM => {
          MM.isTrusted && this.trustedIndices.add(MM.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = MM => {
          this.trustedIndices.delete(MM.gamepad.index)
        }, this.bL = MM => {
          if (this.rafId = 0, !this.running) return;
          const rM = 0 === this.lastTimestampMs ? 16 : Math.min(100, MM - this.lastTimestampMs);
          this.lastTimestampMs = MM;
          try {
            this.poll(MM, rM)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.bL))
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
      onFrame(MM) {
        return this.frameListeners.add(MM), () => {
          this.frameListeners.delete(MM)
        }
      }
      onActivePadChanged(MM) {
        return this.connectionListeners.add(MM), () => {
          this.connectionListeners.delete(MM)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(MM) {
        return this.connectedListeners.add(MM), () => {
          this.connectedListeners.delete(MM)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const MM = this.readPads()[this.activeInfo.index],
          rM = MM ? this.readPad(MM) : null;
        return rM && rM.id === this.activeInfo.id ? MM : null
      }
      poll(MM, rM) {
        var iM, SM;
        const jM = this.readPads();
        let aM = null,
          nM = !1;
        const QM = [],
          zM = Math.max(jM.length, this.slots.length);
        for (let EM = 0; EM < zM; EM++) {
          var LM;
          const rM = EM < jM.length ? jM[EM] : null,
            iM = rM ? this.readPad(rM) : null;
          if (!iM || !iM.connected || !this.isUsable(iM)) {
            this.slots[EM] = null;
            continue
          }
          let SM = this.slots[EM];
          SM && SM.id === iM.id || (SM = {
            id: iM.id,
            sQ: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new PM,
            rightRest: new PM
          }, this.slots[EM] = SM);
          const zM = lM(iM, 0),
            mM = lM(iM, 2);
          !SM.leftSettled && Math.hypot(zM.x, zM.y) < dM && (SM.leftSettled = !0), !SM.rightSettled && Math.hypot(mM.x, mM.y) < dM && (SM.rightSettled = !0), SM.leftRest.observe(zM, MM), SM.rightRest.observe(mM, MM);
          const HM = yM(iM),
            hM = (0, OM.p)(HM, SM.sQ),
            JM = SM.sQ,
            UM = hM.map(((MM, rM) => MM && !JM[rM]));
          SM.sQ = hM;
          const GM = {
            pad: iM,
            slot: SM,
            values: HM
          };
          EM === (null === (LM = this.activeInfo) || void 0 === LM ? void 0 : LM.index) && iM.id === this.activeInfo.id ? (aM = GM, nM = UM.includes(!0)) : UM.includes(!0) && QM.push({
            polled: GM,
            rose: UM
          })
        }
        const mM = this.slots.some((MM => null !== MM));
        if (mM !== this.anyPadConnected) {
          this.anyPadConnected = mM;
          for (const MM of this.connectedListeners) MM()
        }
        const HM = null !== (iM = null === (SM = aM) || void 0 === SM ? void 0 : SM.slot.sQ) && void 0 !== iM ? iM : [],
          hM = nM ? void 0 : QM.find((MM => {
            let {
              rose: rM
            } = MM;
            return rM.some(((MM, rM) => MM && !HM[rM]))
          }));
        if (hM ? (aM = hM.polled, this.setActive(hM.polled.pad)) : this.activeInfo && !aM && this.setActive(null), !aM || !this.activeInfo) return;
        const JM = ((MM, rM) => {
          let {
            pad: iM,
            slot: SM,
            values: jM
          } = MM;
          const aM = (0, OM.v)(rM);
          return aM.values = jM, SM.leftSettled && (aM.leftStick = SM.leftRest.apply(lM(iM, 0))), SM.rightSettled && (aM.rightStick = SM.rightRest.apply(lM(iM, 2))), aM
        })(aM, MM);
        for (const OM of this.frameListeners) OM(JM, rM, this.activeInfo)
      }
      readPad(MM) {
        const rM = this.readSnapshot(MM);
        return rM && (0, HM.f)(rM) ? (MM => {
          const rM = rM => {
              var iM;
              return null !== (iM = MM.buttons[rM]) && void 0 !== iM ? iM : hM(!1)
            },
            iM = rM => {
              var iM;
              return null !== (iM = MM.axes[rM]) && void 0 !== iM ? iM : 0
            },
            OM = MM.axes.length > 9,
            SM = OM ? (MM => {
              const rM = 0 !== MM;
              return {
                up: rM && (MM >= -1 && MM < -.7 || MM >= .95 && MM <= 1),
                right: rM && MM >= -.75 && MM < -.1,
                down: rM && MM >= -.2 && MM < .45,
                left: rM && MM >= .4 && MM <= 1
              }
            })(iM(9)) : {
              up: iM(5) < -.5,
              down: iM(5) > .5,
              left: iM(4) < -.5,
              right: iM(4) > .5
            };
          return {
            ...MM,
            mapping: "standard",
            buttons: [rM(1), rM(2), rM(0), rM(3), rM(4), rM(5), rM(6), rM(7), rM(8), rM(9), rM(10), rM(11), hM(SM.up), hM(SM.down), hM(SM.left), hM(SM.right), rM(12)],
            axes: [iM(0), iM(1), iM(2), iM(OM ? 5 : 3)]
          }
        })(rM) : rM
      }
      readSnapshot(MM) {
        if (this.nativeReader) try {
          return this.nativeReader(MM)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (MM => {
          const rM = MM;
          return {
            index: rM.index,
            id: rM.id,
            connected: rM.connected,
            mapping: rM.mapping,
            buttons: Array.from(rM.buttons, (MM => ({
              pressed: MM.pressed,
              value: MM.value
            }))),
            axes: Array.from(rM.axes),
            vendorName: QM(MM)
          }
        })(MM)
      }
      isUsable(MM) {
        return !(0, mM.h)(MM.id) && ("standard" !== MM.mapping ? (this.warnedNonStandardIds.has(MM.id) || (this.warnedNonStandardIds.add(MM.id), console.warn(`Controller "${MM.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(MM.index))
      }
      setActive(MM) {
        this.activeInfo = MM ? {
          index: MM.index,
          id: MM.id,
          family: (0, SM.c)(MM.id, MM.vendorName)
        } : null;
        for (const rM of this.connectionListeners) rM(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (MM) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", MM)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.bL))
      }
    }((() => LM ? LM.call(navigator) : []), !0);
    EM.listenForConnections()
  },
  9347: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      f: () => aM,
      g: () => PM,
      i: () => SM
    });
    var OM = iM(9349);
    const SM = MM => {
        const rM = [];
        MM.holdingGun && rM.push({
          kind: "reload"
        }), MM.touchscreenActionButton && rM.push({
          kind: "touchButton",
          label: MM.touchscreenActionButton
        });
        for (const jM of null !== (iM = null === (SM = MM.customButtons) || void 0 === SM ? void 0 : SM.filter(OM.d)) && void 0 !== iM ? iM : []) {
          var iM, SM;
          rM.push({
            kind: "customButton",
            id: jM.id,
            icon: jM.icon,
            description: jM.description
          })
        }
        return rM
      },
      jM = MM => MM.length >= 2,
      aM = MM => "specialAction" !== MM.kind,
      PM = (MM, rM) => {
        if (null === MM || null === rM) return MM === rM;
        if (MM.kind !== rM.kind) return !1;
        switch (MM.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return MM.action === rM.action;
          case "customButton":
            return MM.id === rM.id && MM.icon === rM.icon;
          case "touchButton":
            return MM.label === rM.label
        }
      }
  },
  9264: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    const OM = {
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
  9339: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => HM,
      j: () => LM,
      l: () => hM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(1516),
      aM = iM(9347),
      PM = iM(9353);
    let nM = null;
    const QM = () => nM,
      zM = MM => {
        (0, aM.g)(nM, MM) || (nM = MM, SM.i.Tz(PM.g, nM))
      },
      LM = () => {
        const [MM, rM] = (0, OM.useState)(QM);
        return (0, jM.d)(PM.g, rM), MM
      };
    let mM = !1;
    const HM = MM => {
        MM !== mM && (mM = MM, SM.i.Tz(PM.i, MM))
      },
      hM = () => {
        const [MM, rM] = (0, OM.useState)(mM);
        return (0, jM.d)(PM.i, rM), MM
      }
  },
  9362: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      g: () => PM
    });
    var OM = iM(22),
      SM = iM(9353);
    let jM = !1;
    const aM = () => jM,
      PM = MM => {
        MM !== jM && (jM = MM, OM.i.Tz(SM.k, jM))
      }
  },
  9357: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      g: () => nM
    });
    var OM = iM(22),
      SM = iM(9353);
    let jM = null,
      aM = 0;
    const PM = () => jM,
      nM = MM => {
        null === MM && null === jM || (jM = null === MM ? null : {
          id: ++aM,
          holdMs: MM
        }, OM.i.Tz(SM.o, jM))
      }
  },
  9353: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => OM,
      i: () => SM,
      k: () => PM,
      o: () => nM,
      q: () => QM,
      t: () => aM
    });
    const OM = "controllerActionHintChanged",
      SM = "controllerActionWheelHintChanged",
      jM = "controllerOpenChat",
      aM = "controllerSneakToggledChanged",
      PM = "controllerAttackLatchedChanged",
      nM = "controllerDropStackHoldChanged",
      QM = "controllerPickBlockHintChanged"
  },
  9364: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      f: () => PM
    });
    var OM = iM(22),
      SM = iM(9353);
    let jM = !1;
    const aM = () => jM,
      PM = MM => {
        MM !== jM && (jM = MM, OM.i.Tz(SM.q, jM))
      }
  },
  9425: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      g: () => PM
    });
    var OM = iM(22),
      SM = iM(9353);
    let jM = !1;
    const aM = () => jM,
      PM = MM => {
        MM !== jM && (jM = MM, OM.i.Tz(SM.t, jM))
      }
  },
  9322: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor() {
        this.downAtMs = null
      }
      update(MM, rM, iM, OM) {
        if (MM) return this.downAtMs = iM, null;
        if (null === this.downAtMs) return null;
        const SM = iM - this.downAtMs >= OM;
        return rM ? SM ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, SM ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8800: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM,
      f: () => mM,
      i: () => PM,
      m: () => EM,
      o: () => lM
    });
    var OM = iM(30),
      SM = iM(8752),
      jM = iM(8723);
    const aM = (() => {
        try {
          return iM(8805)
        } catch {
          return null
        }
      })(),
      PM = [...jM.X, "LeftStick", "RightStick"],
      nM = new Map,
      QM = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      zM = (new Set(Object.values(QM)), {
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
      LM = (MM, rM) => {
        var iM, OM;
        return null !== (iM = null === (OM = zM[QM[MM]]) || void 0 === OM ? void 0 : OM[rM]) && void 0 !== iM ? iM : 1
      },
      mM = (MM, rM) => {
        const iM = `./${QM[MM]}/${rM}.svg`;
        let OM = nM.get(iM);
        return void 0 === OM && (OM = aM ? aM(iM) : "", nM.set(iM, OM)), OM
      },
      HM = new Set,
      hM = [],
      JM = MM => {
        if (!HM.has(MM)) {
          HM.add(MM);
          for (const rM of PM) {
            const iM = mM(MM, rM);
            if (iM) {
              const MM = new Image;
              MM.crossOrigin = "anonymous", MM.src = iM, hM.push(MM)
            }
          }
        }
      },
      dM = "controllerGlyphFamily";
    let yM = null;
    const lM = MM => {
        MM !== yM && (yM = MM, OM.g.setItem(dM, MM), JM(MM))
      },
      EM = () => {
        const MM = OM.g.getItem(dM);
        (0, SM.e)(MM) && MM !== yM && (yM = MM, JM(MM))
      }
  },
  9451: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => fM,
      d: () => YM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(1516),
      aM = iM(8731),
      PM = iM(8717),
      nM = iM(8776),
      QM = iM(8743);
    const zM = {
        x: 0,
        y: 0,
        z: 0
      },
      LM = Math.PI / 180,
      mM = MM => Math.hypot(MM.x, MM.y, MM.z),
      HM = (MM, rM) => ({
        x: MM.x * rM,
        y: MM.y * rM,
        z: MM.z * rM
      }),
      hM = (MM, rM) => ({
        x: MM.x + rM.x,
        y: MM.y + rM.y,
        z: MM.z + rM.z
      }),
      JM = (MM, rM) => ({
        x: MM.x - rM.x,
        y: MM.y - rM.y,
        z: MM.z - rM.z
      }),
      dM = MM => {
        const rM = mM(MM);
        return 0 === rM ? zM : HM(MM, 1 / rM)
      },
      yM = MM => ({
        min: {
          ...MM
        },
        max: {
          ...MM
        }
      }),
      lM = (MM, rM) => ({
        min: {
          x: Math.min(MM.min.x, rM.x),
          y: Math.min(MM.min.y, rM.y),
          z: Math.min(MM.min.z, rM.z)
        },
        max: {
          x: Math.max(MM.max.x, rM.x),
          y: Math.max(MM.max.y, rM.y),
          z: Math.max(MM.max.z, rM.z)
        }
      }),
      EM = (MM, rM) => MM.max.x - MM.min.x <= rM && MM.max.y - MM.min.y <= rM && MM.max.z - MM.min.z <= rM;
    class UM {
      constructor() {
        this.bias = zM, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = zM, this.windowSec = 0
      }
      update(MM) {
        const rM = this.gyroRange ? lM(this.gyroRange, MM.gyro) : yM(MM.gyro),
          iM = MM.accel ? this.accelRange ? lM(this.accelRange, MM.accel) : yM(MM.accel) : null;
        if (!EM(rM, 1) || iM && !EM(iM, .01)) return void this.restartWindow(MM);
        if (this.gyroRange = rM, this.accelRange = iM, this.sum = hM(this.sum, HM(MM.gyro, MM.dtSec)), this.windowSec += MM.dtSec, this.windowSec < 1) return;
        const OM = HM(this.sum, 1 / this.windowSec);
        if (mM(OM) > 5) return;
        const SM = JM(OM, this.bias);
        let jM = 0;
        !this.calibrated || this.windowSec >= 3 ? jM = 1 : mM(SM) <= 1 && (jM = Math.min(1, MM.dtSec / 1)), this.bias = hM(this.bias, HM(SM, jM)), this.calibrated = this.calibrated || jM > 0
      }
      correct(MM) {
        return JM(MM, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = zM, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = zM, this.windowSec = 0
      }
      restartWindow(MM) {
        this.gyroRange = yM(MM.gyro), this.accelRange = MM.accel ? yM(MM.accel) : null, this.sum = zM, this.windowSec = 0
      }
    }
    class GM {
      constructor() {
        this.down = null
      }
      update(MM, rM, iM) {
        const OM = dM(HM(rM, -1));
        if (!this.down) return this.down = OM, OM;
        const SM = HM(MM, LM * iM),
          jM = this.down,
          aM = {
            x: jM.x - (SM.y * jM.z - SM.z * jM.y),
            y: jM.y - (SM.z * jM.x - SM.x * jM.z),
            z: jM.z - (SM.x * jM.y - SM.y * jM.x)
          },
          PM = 0 === mM(OM) ? 0 : Math.min(1, iM / .25);
        var nM, QM;
        return this.down = dM((QM = PM, hM(nM = aM, HM(JM(OM, nM), QM)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class CM {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(MM, rM, iM) {
        const OM = Math.hypot(MM, rM),
          SM = Math.max(0, Math.min(1, (OM - 2) / 2)),
          jM = {
            yaw: MM * (1 - SM),
            pitch: rM * (1 - SM),
            dtSec: iM
          };
        for (this.entries.push(jM), this.windowSec += iM; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let aM = 0,
          PM = 0;
        for (const QM of this.entries) aM += QM.yaw * QM.dtSec, PM += QM.pitch * QM.dtSec;
        const nM = this.windowSec > 0 ? {
          yaw: aM / this.windowSec,
          pitch: PM / this.windowSec
        } : {
          yaw: jM.yaw,
          pitch: jM.pitch
        };
        return {
          yaw: MM * SM + nM.yaw,
          pitch: rM * SM + nM.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class eM {
      constructor() {
        this.calibrator = new UM, this.gravity = new GM, this.smoother = new CM
      }
      process(MM, rM, iM) {
        const OM = Math.max(0, Math.min(.05, rM));
        this.calibrator.update({
          ...MM,
          dtSec: OM
        });
        const SM = this.calibrator.correct(MM.gyro);
        let jM = SM.y;
        "player" === iM && MM.accel && (jM = ((MM, rM) => {
          const iM = MM.y * rM.y + MM.z * rM.z;
          return -Math.sign(iM) * Math.min(1.41 * Math.abs(iM), Math.hypot(MM.y, MM.z))
        })(SM, this.gravity.update(SM, MM.accel, OM)));
        const aM = this.smoother.apply(jM, SM.x, OM),
          PM = ((MM, rM) => {
            const iM = Math.hypot(MM, rM);
            if (iM >= 1) return {
              yaw: MM,
              pitch: rM
            };
            const OM = iM / 1;
            return {
              yaw: MM * OM,
              pitch: rM * OM
            }
          })(aM.yaw, aM.pitch);
        return {
          yawDeg: PM.yaw * OM,
          pitchDeg: PM.pitch * OM
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
    const bM = (MM, rM) => {
      var iM, OM, SM;
      const jM = rM * LM,
        aM = null !== (iM = MM.beta) && void 0 !== iM ? iM : 0,
        PM = null !== (OM = MM.gamma) && void 0 !== OM ? OM : 0;
      return {
        x: aM * Math.cos(jM) - PM * Math.sin(jM),
        y: aM * Math.sin(jM) + PM * Math.cos(jM),
        z: null !== (SM = MM.alpha) && void 0 !== SM ? SM : 0
      }
    };
    var wM = iM(9453);
    class tM {
      constructor(MM, rM, iM) {
        this.hid = MM, this.sink = rM, this.onControllersChanged = iM, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = MM => {
          this.openController(MM.device).catch((MM => {
            console.warn("Could not open motion controller", MM)
          }))
        }, this.onDisconnect = MM => {
          this.opening.has(MM.device) && this.disconnectedWhileOpening.add(MM.device);
          const rM = this.controllers.get(MM.device);
          rM && (this.forget(rM), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const MM = await this.hid.getDevices();
        for (const rM of MM) await this.openController(rM).catch((MM => {
          console.warn("Could not open motion controller", MM)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const MM of [...this.controllers.values()]) this.forget(MM);
        this.onControllersChanged()
      }
      async request() {
        const MM = await this.hid.requestDevice({
          filters: wM.j
        });
        let rM = 0;
        for (const iM of MM) await this.openController(iM).catch((MM => {
          console.warn("Could not open motion controller", MM), rM++
        }));
        return rM
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((MM => null !== (0, wM.e)(MM.vendorId, MM.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((MM => MM.kind))
      }
      forget(MM) {
        MM.device.removeEventListener("inputreport", MM.onReport), this.controllers.get(MM.device) === MM && this.controllers.delete(MM.device)
      }
      async openController(MM) {
        const rM = (0, wM.e)(MM.vendorId, MM.productId);
        if (!rM || !this.running || this.controllers.has(MM) || this.opening.has(MM)) return;
        this.opening.add(MM);
        let iM = !1;
        try {
          MM.opened || await MM.open()
        } finally {
          this.opening.delete(MM), iM = this.disconnectedWhileOpening.delete(MM)
        }
        if (iM) return void MM.close().catch((MM => {
          console.debug("Could not close an unplugged motion controller", MM)
        }));
        if (!this.running) return;
        const OM = {
          device: MM,
          kind: rM,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: MM => {
            this.onReport(OM, MM)
          }
        };
        this.controllers.set(MM, OM), MM.addEventListener("inputreport", OM.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(OM)
        } catch (SM) {
          console.warn(`Could not turn on motion for ${rM}`, SM), this.controllers.get(MM) === OM && (this.forget(OM), this.onControllersChanged())
        }
      }
      async enableMotion(MM) {
        let {
          device: rM,
          kind: iM
        } = MM;
        if ((0, wM.g)(iM))
          for (const OM of wM.y[iM]) await rM.receiveFeatureReport(OM).catch((MM => {
            console.debug(`Motion controller feature report ${OM} unavailable`, MM)
          }));
        else
          for (let OM = 0; OM < 2; OM++)
            for (const {
                subcommand: MM,
                args: iM
              }
              of wM.A) await rM.sendReport(wM.E, (0, wM.d)(this.switchPacketCounter++, MM, iM)), await new Promise((MM => {
              setTimeout(MM, 60)
            }))
      }
      onReport(MM, rM) {
        const iM = (0, wM.r)(MM.kind, rM.reportId, rM.data, MM.device.productId);
        if (!iM) return;
        const OM = null === MM.lastEventMs ? 0 : (rM.timeStamp - MM.lastEventMs) / 1e3;
        MM.lastEventMs = rM.timeStamp;
        let SM = iM.dtSec;
        if (null !== SM && OM > 0 && (SM = Math.max(.001, Math.min(.017, OM / iM.readings.length))), null === SM && null !== iM.sensorClock && (0, wM.g)(MM.kind)) {
          const rM = (0, wM.v)(MM.kind, MM.lastClock, iM.sensorClock);
          MM.lastClock = iM.sensorClock, SM = 0 === rM ? null : rM
        }
        if (MM.lastReadingMs = rM.timeStamp, this.isPreferred(MM, rM.timeStamp))
          for (const aM of iM.readings) {
            var jM;
            this.sink(aM, null !== (jM = SM) && void 0 !== jM ? jM : OM, `hid${MM.openedOrder}`)
          }
      }
      isPreferred(MM, rM) {
        const iM = MM => 1e6 * wM.o[MM.kind] + MM.openedOrder;
        for (const OM of this.controllers.values())
          if (OM !== MM && rM - OM.lastReadingMs < 500 && iM(OM) < iM(MM)) return !1;
        return !0
      }
    }
    var gM = iM(83);
    const uM = () => DeviceMotionEvent,
      RM = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, gM.isMobile)(),
      pM = () => {
        var MM;
        const rM = null === (MM = window.screen.orientation) || void 0 === MM ? void 0 : MM.angle;
        return "number" === typeof rM ? rM : "number" === typeof window.orientation ? window.orientation : 0
      };
    class WM {
      constructor(MM, rM) {
        this.sink = MM, this.onStateChanged = rM, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((MM => {
            console.warn("Could not enable the motion sensor", MM)
          }))
        }, this.onMotion = MM => {
          const rM = MM.rotationRate;
          if (!rM || null === rM.alpha && null === rM.beta && null === rM.gamma) return;
          const iM = null === this.lastEventMs ? 0 : (MM.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = MM.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: bM(rM, pM()),
            accel: null
          }, iM, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof uM().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const MM = uM().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof MM) return void this.listen();
        let rM;
        this.disarmGestureRequest();
        try {
          rM = await MM.call(DeviceMotionEvent)
        } catch (iM) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), iM
        }
        this.wanted && ("granted" === rM ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(MM) {
        this.state !== MM && (this.state = MM, this.onStateChanged())
      }
    }
    const sM = "controllerGyroStatusChanged",
      DM = {
        PD: 0,
        nD: 0
      },
      kM = MM => {
        var rM, iM;
        return "undefined" === typeof document || (null === (rM = null === (iM = document.featurePolicy) || void 0 === iM ? void 0 : iM.allowsFeature(MM)) || void 0 === rM || rM)
      };
    class ZM {
      constructor() {
        this.processor = new eM, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = MM => {
          const rM = MM.gyroAiming && PM.g.hasConnectedPad();
          var iM, OM;
          rM !== this.phoneRunning && (this.phoneRunning = rM, rM ? null === (iM = this.phone) || void 0 === iM || iM.start() : null === (OM = this.phone) || void 0 === OM || OM.stop());
          if (MM.gyroAiming !== this.running) {
            var SM, jM;
            if (this.running = MM.gyroAiming, this.running) null === (SM = this.hid) || void 0 === SM || SM.start().catch((MM => {
              console.warn("Could not open motion controllers", MM)
            }));
            else null === (jM = this.hid) || void 0 === jM || jM.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          SM.i.Tz(sM, this.getStatus())
        };
        const MM = (() => {
            var MM;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (MM = navigator.hid) && void 0 !== MM ? MM : null
          })(),
          rM = kM("hid");
        this.hidBlocked = null !== MM && !rM, this.hid = MM && rM ? new tM(MM, ((MM, rM, iM) => {
          this.lastHidReadingMs = performance.now(), this.feed(MM, rM, "player", iM)
        }), this.publishStatus) : null;
        const iM = kM("accelerometer") && kM("gyroscope");
        this.phoneBlocked = RM() && !iM, this.phone = RM() && iM ? new WM(((MM, rM, iM) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(MM, rM, "local", iM)
        }), this.publishStatus) : null, SM.i.subscribe(QM.i, this.syncWithSettings), PM.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, QM.j)()), this.publishStatus()
        })), this.syncWithSettings((0, QM.j)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var MM, rM, iM, OM;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (MM = null === (rM = this.hid) || void 0 === rM ? void 0 : rM.getConnectedKinds()) && void 0 !== MM ? MM : [],
          phoneMotion: null !== (iM = null === (OM = this.phone) || void 0 === OM ? void 0 : OM.getState()) && void 0 !== iM ? iM : "off",
          padConnected: PM.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var MM;
        await (null === (MM = this.phone) || void 0 === MM ? void 0 : MM.requestPermission())
      }
      drainLookDelta() {
        const MM = performance.now();
        MM - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = MM;
        const rM = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const iM = (0, QM.j)();
        return iM.gyroAiming && (MM => {
          let {
            activation: rM,
            isHeld: iM,
            useButton: OM,
            gyroButton: SM
          } = MM;
          return "always" === rM || iM("aiming" === rM ? OM : SM)
        })({
          activation: iM.gyroActivation,
          isHeld: MM => nM.d.isButtonHeld(MM),
          useButton: (0, aM.m)("use"),
          gyroButton: iM.gyroButton
        }) ? ((MM, rM) => ({
          PD: -MM.yawDeg * rM * LM,
          nD: -MM.pitchDeg * rM * LM
        }))(rM, iM.gyroSensitivity) : DM
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(MM, rM) {
        this.feed(MM, rM, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(MM, rM, iM, OM) {
        this.source !== OM && (this.processor.reset(), this.source = OM);
        const SM = this.processor.process(MM, rM, iM);
        this.pendingYawDeg += SM.yawDeg, this.pendingPitchDeg += SM.pitchDeg
      }
    }
    let oM = null;
    const fM = () => (oM || (oM = new ZM), oM),
      YM = () => {
        const [MM, rM] = (0, OM.useState)((() => fM().getStatus()));
        return (0, jM.d)(sM, rM), (0, OM.useEffect)((() => {
          rM(fM().getStatus())
        }), []), MM
      }
  },
  9453: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => CM,
      E: () => EM,
      d: () => GM,
      e: () => nM,
      g: () => OM,
      j: () => PM,
      l: () => QM,
      o: () => zM,
      r: () => lM,
      v: () => dM,
      y: () => eM
    });
    const OM = MM => "dualShock4" === MM || "dualSense" === MM,
      SM = 1356,
      jM = 1406,
      aM = [{
        vendorId: SM,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: SM,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: SM,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: SM,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: SM,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: jM,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: jM,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: jM,
        productId: 8199,
        kind: "joyConRight"
      }],
      PM = aM.map((MM => {
        let {
          vendorId: rM,
          productId: iM
        } = MM;
        return {
          vendorId: rM,
          productId: iM
        }
      })),
      nM = (MM, rM) => {
        var iM, OM;
        return null !== (iM = null === (OM = aM.find((iM => iM.vendorId === MM && iM.productId === rM))) || void 0 === OM ? void 0 : OM.kind) && void 0 !== iM ? iM : null
      },
      QM = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      zM = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      LM = 2e3 / 32767,
      mM = 1 / 8192,
      HM = 936 / 13371,
      hM = (MM, rM, iM) => ({
        x: MM.getInt16(rM, !0) * iM,
        y: MM.getInt16(rM + 2, !0) * iM,
        z: MM.getInt16(rM + 4, !0) * iM
      }),
      JM = MM => 0 === MM.x && 0 === MM.y && 0 === MM.z,
      dM = (MM, rM, iM) => null === rM ? null : "dualShock4" === MM ? 16 * (iM - rM & 65535) / 3 / 1e6 : (iM - rM >>> 0) / 3 / 1e6,
      yM = (MM, rM) => "joyConRight" === rM ? {
        x: MM.y,
        y: -MM.z,
        z: -MM.x
      } : {
        x: -MM.y,
        y: MM.z,
        z: -MM.x
      },
      lM = (MM, rM, iM, SM) => OM(MM) ? ((MM, rM, iM, OM) => {
        const SM = ((MM, rM, iM) => "dualShock4" === MM ? 1 === rM && iM >= 63 ? 0 : 17 === rM && iM >= 65 ? 2 : null : 1 === rM && iM >= 62 ? 0 : 49 === rM && iM >= 63 ? 1 : null)(MM, rM, iM.byteLength);
        if (null === SM) return null;
        if (2976 === OM && 1 === rM && 0 !== (4 & iM.getUint8(30))) return null;
        const jM = SM + ("dualShock4" === MM ? 12 : 15),
          aM = hM(iM, jM, LM),
          PM = hM(iM, jM + 6, mM);
        return JM(aM) && JM(PM) ? null : {
          readings: [{
            gyro: aM,
            accel: PM
          }],
          dtSec: null,
          sensorClock: "dualShock4" === MM ? iM.getUint16(SM + 9, !0) : iM.getUint32(SM + 27, !0)
        }
      })(MM, rM, iM, SM) : ((MM, rM, iM) => {
        if (48 !== rM && 49 !== rM || iM.byteLength < 48) return null;
        const OM = [];
        for (let SM = 0; SM < 3; SM++) {
          const rM = hM(iM, 12 + 12 * SM, 244e-6),
            jM = hM(iM, 18 + 12 * SM, HM);
          if (JM(jM) && JM(rM)) return null;
          OM.push({
            gyro: yM(jM, MM),
            accel: yM(rM, MM)
          })
        }
        return {
          readings: OM,
          dtSec: .005,
          sensorClock: null
        }
      })(MM, rM, iM),
      EM = 1,
      UM = [0, 1, 64, 64, 0, 1, 64, 64],
      GM = (MM, rM, iM) => new Uint8Array([15 & MM, ...UM, rM, ...iM]),
      CM = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      eM = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8785: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => ZM,
      e: () => vM,
      f: () => CM,
      g: () => HM.l,
      h: () => YM,
      k: () => fM,
      m: () => eM,
      q: () => NM,
      u: () => HM.t,
      v: () => HM.y,
      y: () => FM,
      A: () => HM.B,
      D: () => WM
    });
    var OM = iM(44),
      SM = iM(19),
      jM = iM(22),
      aM = iM(1516),
      PM = iM(1313),
      nM = iM(8743),
      QM = iM(8792),
      zM = iM(8729),
      LM = iM(8717),
      mM = iM(8800),
      HM = iM(1464),
      hM = iM(8723),
      JM = iM(9255),
      dM = iM(4735),
      yM = iM(103);
    class lM {
      constructor(MM) {
        this.deps = MM, this.pads = new Map
      }
      observe(MM, rM, iM) {
        if (!this.deps.touchOnly) return;
        const OM = this.pads.get(rM.id);
        "proven" !== OM && iM ? (this.pads.set(rM.id, "proven"), void 0 !== OM && this.deps.onReleased(rM, MM, MM.timestampMs - OM)) : void 0 === OM && (this.pads.set(rM.id, MM.timestampMs), this.deps.onHeld(rM, MM)), this.deps.setMayHide("proven" === this.pads.get(rM.id))
      }
    }
    const EM = MM => MM.values.flatMap(((MM, rM) => MM >= hM.Q ? [String(rM)] : [])).join(",") || "none",
      UM = (MM, rM, OM, SM, jM) => {
        const aM = (0, HM.d)(),
          PM = document.visibilityState,
          nM = document.hasFocus();
        Promise.all([Promise.resolve().then((() => iM(3241))), Promise.resolve().then((() => iM(1329))), Promise.resolve().then((() => iM(119)))]).then((iM => {
          let [{
            logControllerHudHoldToGtag: QM
          }, {
            logClientLineFromEveryPage: zM
          }, {
            siteUsed: LM
          }] = iM;
          QM(MM, rM.family, null === jM ? void 0 : Math.round(jM / 1e3)), zM(`touch HUD pad ${MM}`, GM(rM, OM, SM, jM, aM, PM, nM, LM))
        }), (() => {}))
      },
      GM = (MM, rM, iM, OM, SM, jM, aM, PM) => {
        var nM;
        const QM = {
          pad_id: MM.id.slice(0, 120),
          pad_family: MM.family,
          pad_mapping: null !== (nM = null === iM || void 0 === iM ? void 0 : iM.mapping) && void 0 !== nM ? nM : "unread",
          pad_axes: iM ? String(iM.axes.length) : "unread",
          pad_buttons: iM ? String(iM.buttons.length) : "unread",
          pressed: EM(rM),
          ms_since_touch: null === SM ? "none" : String(Math.round(rM.timestampMs - SM)),
          visibility: jM,
          focused: String(aM),
          site: PM
        };
        return null !== OM && (QM.held_ms = String(Math.round(OM))), QM
      };
    const CM = MM => !MM.repeat && !(0, JM.e)(MM.key),
      eM = "PadHidesCursor";
    let bM = !1;
    const wM = MM => {
        MM !== bM && (bM = MM, document.documentElement.classList.toggle(eM, MM))
      },
      tM = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(MM) {
          let rM = !1,
            iM = !1;
          MM.values.forEach(((MM, OM) => {
            const SM = MM >= (this.buttonsDown[OM] ? hM.T : hM.Q);
            SM && !this.buttonsDown[OM] && (rM = !0, iM = !0), this.buttonsDown[OM] = SM
          }));
          return [MM.leftStick, MM.rightStick].forEach(((MM, OM) => {
            const SM = this.stickAnchors[OM];
            Math.hypot(MM.x, MM.y) < (SM ? hM.T : .3) ? this.stickAnchors[OM] = null : (!SM || Math.hypot(MM.x - SM.x, MM.y - SM.y) >= .3) && (this.stickAnchors[OM] = {
              x: MM.x,
              y: MM.y
            }, rM = !0, iM ||= !SM)
          })), rM && (this.lastActivityMs = MM.timestampMs), this.onlyMovedOn = rM && !iM, rM
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(MM) {
          return !(MM - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((MM => MM)) || this.stickAnchors.some((MM => null !== MM)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((MM => null !== MM))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      gM = (uM = () => LM.g.getActiveGamepad(), new lM({
        touchOnly: "touchOnly" === (0, yM.c)(),
        setMayHide: HM.u,
        onHeld: (MM, rM) => {
          UM("sQ", MM, rM, uM(), null)
        },
        onReleased: (MM, rM, iM) => {
          UM("released", MM, rM, uM(), iM)
        }
      }));
    var uM;
    let RM = null,
      pM = !1;
    const WM = () => pM;
    let sM = null,
      DM = !1,
      kM = null;
    const ZM = () => kM;
    let oM = !1;
    const fM = (MM, rM) => {
        if (!tM.observe(MM)) return !1;
        if (gM.observe(MM, rM, tM.isStickOffRest()), oM && tM.wasOnlyMoveOn() && !(0, HM.l)()) return !1;
        oM = !1, pM = !1;
        const iM = !(0, HM.l)();
        return iM && (RM = MM, kM = !bM && DM && sM ? {
          ...sM
        } : null), DM = !1, (0, HM.t)("gamepad"), wM(!0), (0, mM.o)((0, nM.l)()), iM
      },
      YM = MM => !(0, HM.l)() || MM === RM,
      NM = () => {
        tM.reset()
      },
      AM = () => {
        const MM = SM.d.get("activeInputDevice"),
          rM = "gamepad" === MM ? LM.g.getActivePad() : null;
        return {
          device: MM,
          inGame: (0, PM.B)(),
          padMovesMouse: null !== rM && (0, zM.e)(rM.id)
        }
      },
      xM = MM => {
        document.pointerLockElement ? sM = null : (sM ??= {
          x: 0,
          y: 0
        }, sM.x = MM.clientX, sM.y = MM.clientY)
      },
      vM = () => {
        const MM = new dM.b,
          rM = rM => {
            MM.reset(), oM = !1, (0, HM.t)(rM)
          },
          iM = MM => {
            if (MM.isTrusted) {
              if (MM instanceof KeyboardEvent) {
                if ((0, HM.q)(MM), !CM(MM)) return;
                pM = !0
              }
              if (MM instanceof PointerEvent && "touch" === MM.pointerType) return sM = null, void rM("touch");
              MM instanceof PointerEvent && (xM(MM), DM = !0), ("pointerdown" !== MM.type || (MM => {
                let {
                  device: rM,
                  inGame: iM,
                  padMovesMouse: OM
                } = MM;
                return !("gamepad" === rM && OM && iM)
              })(AM())) && rM("keyboardMouse")
            }
          },
          OM = MM => {
            MM.isTrusted && (sM = null, rM("touch"))
          },
          aM = MM => {
            MM.isTrusted && "touch" !== MM.pointerType && !MM.relatedTarget && (sM = null)
          },
          PM = iM => {
            if (!iM.isTrusted || "touch" === iM.pointerType) return;
            xM(iM);
            const OM = iM.movementX || 0,
              jM = iM.movementY || 0;
            if (0 === OM && 0 === jM) return;
            if (DM = !0, wM(!1), "keyboardMouse" === SM.d.get("activeInputDevice")) return;
            const aM = tM.isHolding(iM.timeStamp),
              PM = AM(),
              nM = (MM => {
                let {
                  device: rM,
                  inGame: iM,
                  padMovesMouse: OM,
                  padHolding: SM
                } = MM;
                return ("gamepad" !== rM || !OM) && "keyboardMouse" !== rM && (iM || !SM)
              })({
                ...PM,
                inGame: PM.inGame && (0, QM.c)(),
                padHolding: aM
              });
            nM && MM.add(OM, jM, iM.timeStamp) && (rM("keyboardMouse"), oM = tM.isStickOffRest())
          },
          nM = MM => {
            wM("gamepad" === MM)
          },
          zM = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", iM, zM), window.addEventListener("pointerdown", iM, zM), window.addEventListener("wheel", iM, zM), window.addEventListener("touchstart", OM, zM), window.addEventListener("pointermove", PM, zM), window.addEventListener("pointerout", aM, zM);
        const LM = jM.i.subscribe("appManagerUpdated|activeInputDevice", nM);
        return nM(SM.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", iM, zM), window.removeEventListener("pointerdown", iM, zM), window.removeEventListener("wheel", iM, zM), window.removeEventListener("touchstart", OM, zM), window.removeEventListener("pointermove", PM, zM), window.removeEventListener("pointerout", aM, zM), sM = null, jM.i.unsubscribe(LM), wM(!1)
        }
      },
      FM = () => {
        const [MM, rM] = (0, OM.useState)(nM.l);
        return (0, aM.d)(nM.e, (() => {
          rM((0, nM.l)())
        })), (0, aM.d)(LM.c, (() => {
          rM((0, nM.l)())
        })), MM
      }
  },
  8752: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      e: () => SM
    });
    const OM = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      SM = MM => OM.includes(MM)
  },
  9301: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      i: () => jM,
      j: () => nM,
      n: () => PM
    });
    var OM = iM(1516),
      SM = iM(1474);
    const jM = "controllerInventoryCursorChanged",
      aM = {
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
      PM = () => {
        var MM, rM;
        return (0, OM.e)(jM, null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.getInventoryCursorState()) && void 0 !== MM ? MM : aM)
      },
      nM = () => {
        var MM, rM;
        return null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.isPadSteppingSlots()) && void 0 !== MM && MM
      }
  },
  9293: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM,
      h: () => PM,
      i: () => nM,
      l: () => aM,
      p: () => jM,
      r: () => zM,
      t: () => LM
    });
    let OM = null;
    const SM = new Set,
      jM = MM => (OM = MM, () => {
        if (OM === MM) {
          OM = null;
          for (const MM of SM) MM()
        }
      }),
      aM = MM => (SM.add(MM), () => {
        SM.delete(MM)
      }),
      PM = () => OM,
      nM = () => null !== OM;
    let QM = null;
    const zM = MM => {
        QM = MM
      },
      LM = () => {
        const MM = QM;
        return QM = null, MM
      },
      mM = (MM, rM) => {
        var iM, OM;
        return null !== (iM = null !== (OM = MM.find((MM => MM.element === rM))) && void 0 !== OM ? OM : MM.find((MM => MM.element.contains(rM)))) && void 0 !== iM ? iM : null
      }
  },
  9310: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => aM
    });
    var OM = iM(44);
    const SM = new WeakMap,
      jM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = SM.get(MM)) || void 0 === iM ? void 0 : iM.current) && void 0 !== rM ? rM : null
      },
      aM = (MM, rM) => {
        const iM = (0, OM.useRef)(rM);
        iM.current = rM;
        const jM = (0, OM.useRef)(null);
        (0, OM.useEffect)((() => {
          const rM = MM.current,
            OM = jM.current;
          rM !== OM && (OM && SM.get(OM) === iM && SM.delete(OM), jM.current = rM, rM && SM.set(rM, iM))
        })), (0, OM.useEffect)((() => () => {
          const MM = jM.current;
          MM && SM.get(MM) === iM && SM.delete(MM), jM.current = null
        }), [])
      }
  },
  9419: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      h: () => QM,
      j: () => LM,
      m: () => zM,
      o: () => nM,
      r: () => HM
    });
    var OM = iM(22),
      SM = iM(2120),
      jM = iM(1474),
      aM = iM(1464);
    const PM = MM => {
        var rM, iM;
        return (0, aM.l)() && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getGlyphForNoaAction(MM)) && void 0 !== rM ? rM : null
      },
      nM = "controllerGlyph:",
      QM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconName(MM)) && void 0 !== rM ? rM : `${nM}xbox/${MM}`
      },
      zM = MM => MM.startsWith(nM),
      LM = MM => {
        var rM, iM;
        return zM(MM) && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconUrl(MM)) && void 0 !== rM ? rM : null
      },
      mM = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", aM.c, SM.f, SM.d],
      HM = MM => {
        const rM = mM.map((rM => OM.i.subscribe(rM, MM)));
        return () => {
          for (const MM of rM) OM.i.unsubscribe(MM)
        }
      }
  },
  9279: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      g: () => OM
    });
    const OM = "controllerOpenKeyboard",
      SM = "controllerKeyboardVisible"
  },
  8792: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      c: () => zM,
      d: () => nM,
      e: () => PM
    });
    var OM = iM(19),
      SM = iM(1717),
      jM = iM(1835);
    const aM = new Map,
      PM = (MM, rM) => (aM.has(MM) && console.warn(`Gameplay blocker "${MM}" registered twice; the newer one replaces it.`), aM.set(MM, rM), () => {
        aM.get(MM) === rM && aM.delete(MM)
      }),
      nM = () => (0, jM.e)(document.activeElement),
      QM = function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [rM, iM] of aM)
          if (!MM.includes(rM) && iM()) return rM;
        return null
      },
      zM = function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === OM.d.get("gameState") && (!(0, SM.r)() && (!nM() && null === QM(MM)))
      }
  },
  8723: (MM, rM, iM) => {
    iM.d(rM, {
      $: () => CM,
      A: () => EM,
      C: () => RM,
      G: () => UM,
      J: () => yM,
      N: () => dM,
      O: () => QM,
      Q: () => mM,
      T: () => HM,
      V: () => SM,
      X: () => OM,
      ab: () => gM,
      b: () => WM,
      e: () => uM,
      eb: () => pM,
      h: () => zM,
      hb: () => GM,
      i: () => nM,
      l: () => PM,
      o: () => bM,
      p: () => lM,
      s: () => eM,
      v: () => jM,
      z: () => LM
    });
    const OM = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      SM = OM.length,
      jM = function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(SM).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: MM
        }
      },
      aM = Object.fromEntries(OM.map(((MM, rM) => [MM, rM]))),
      PM = MM => aM[MM],
      nM = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const OM = Math.hypot(MM.x, MM.y);
        if (OM <= rM) return {
          x: 0,
          y: 0
        };
        const SM = Math.min(1, (OM - rM) / Math.max(1e-4, iM - rM));
        return {
          x: MM.x / OM * SM,
          y: MM.y / OM * SM
        }
      },
      QM = ["exponential", "linear", "boost"],
      zM = (MM, rM) => {
        const iM = Math.hypot(MM.x, MM.y);
        if (0 === iM) return {
          x: 0,
          y: 0
        };
        const OM = ((MM, rM) => {
          const iM = Math.max(0, Math.min(1, MM));
          return "linear" === rM ? iM : iM * iM
        })(iM, rM);
        return {
          x: MM.x / iM * OM,
          y: MM.y / iM * OM
        }
      },
      LM = .5,
      mM = .3,
      HM = .2,
      hM = PM("LT"),
      JM = PM("RT"),
      dM = MM => MM === hM || MM === JM,
      yM = (MM, rM) => {
        const iM = PM(rM);
        return dM(iM) ? MM[iM] > .35 : MM[iM] >= LM
      },
      lM = (MM, rM) => MM.map(((MM, iM) => dM(iM) ? rM[iM] ? MM > .35 : MM >= .55 : MM >= LM)),
      EM = ["Up", "Down", "Left", "Right"],
      UM = MM => EM.includes(MM),
      GM = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(MM.x, MM.y) < rM ? null : Math.abs(MM.x) > Math.abs(MM.y) ? MM.x > 0 ? "Right" : "Left" : MM.y > 0 ? "Down" : "Up"
      },
      CM = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      eM = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      bM = ["default", "slow", "off"],
      wM = 800,
      tM = 250,
      gM = (MM, rM) => "off" === rM ? null : "slow" === rM ? {
        initialDelayMs: Math.max(MM.initialDelayMs, wM),
        intervalMs: Math.max(MM.intervalMs, tM)
      } : MM;
    class uM {
      constructor(MM) {
        this.readTiming = MM, this.sQ = !1, this.timing = null, this.nextFireMs = 0
      }
      update(MM, rM) {
        return MM ? this.sQ ? !!(this.timing && rM >= this.nextFireMs) && (this.nextFireMs = rM + this.timing.intervalMs, !0) : (this.sQ = !0, this.timing = this.readTiming(), this.nextFireMs = rM + (null !== (iM = null === (OM = this.timing) || void 0 === OM ? void 0 : OM.initialDelayMs) && void 0 !== iM ? iM : 0), !0) : (this.sQ = !1, !1);
        var iM, OM
      }
      reset() {
        this.sQ = !1
      }
    }
    const RM = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      pM = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class WM {
      constructor(MM) {
        this.timer = MM, this.direction = null
      }
      update(MM, rM) {
        return MM !== this.direction && (this.timer.reset(), this.direction = MM), this.timer.update(null !== MM, rM) ? MM : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9315: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      f: () => jM
    });
    let OM = -1 / 0;
    const SM = () => {
        OM = performance.now()
      },
      jM = MM => performance.now() - OM < MM
  },
  9259: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => jM
    });
    var OM = iM(8743),
      SM = iM(8723);
    const jM = MM => (0, SM.ab)(MM, (0, OM.j)().buttonRepeat),
      aM = MM => new SM.e((() => jM(MM)))
  },
  8767: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      g: () => jM,
      i: () => PM
    });
    var OM = iM(22),
      SM = iM(8743);
    const jM = (MM, rM) => "OpenShop" === MM ? "shop" === rM : "OpenLobbyLeaderboard" !== MM || "leaderboard" === rM;
    let aM = !1;
    const PM = MM => {
        MM !== aM && (aM = MM, OM.i.Tz(SM.e, (0, SM.j)()))
      },
      nM = () => ((MM, rM) => "shop" === MM && rM ? "shop" : "leaderboard")((0, SM.j)().leaderboardButton, aM)
  },
  8760: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => zM,
      B: () => nM,
      E: () => PM,
      F: () => GM,
      I: () => mM,
      M: () => HM,
      N: () => LM,
      R: () => UM,
      S: () => QM,
      W: () => yM,
      Y: () => tM,
      Z: () => EM,
      bb: () => JM,
      cb: () => dM,
      e: () => DM,
      fb: () => hM,
      gb: () => lM,
      i: () => ZM,
      ib: () => pM,
      k: () => gM,
      m: () => aM,
      mb: () => jM,
      p: () => wM,
      q: () => eM,
      qb: () => CM,
      t: () => WM,
      ub: () => kM,
      w: () => sM,
      xb: () => bM
    });
    var OM = iM(8738),
      SM = iM(8723);
    const jM = {
        min: 25,
        max: 500,
        step: 5
      },
      aM = {
        min: 25,
        max: 100,
        step: 5
      },
      PM = {
        min: 0,
        max: .4,
        step: .01
      },
      nM = {
        min: 25,
        max: 300,
        step: 5
      },
      QM = {
        min: .5,
        max: 6,
        step: .1
      },
      zM = (MM, rM) => {
        if (!Number.isFinite(MM)) return rM.min;
        const iM = rM.min + Math.round((MM - rM.min) / rM.step) * rM.step,
          OM = Math.min(rM.max, Math.max(rM.min, iM));
        return Math.round(1e3 * OM) / 1e3
      },
      LM = MM => `${Math.round(MM)}%`,
      mM = MM => LM(100 * MM),
      HM = MM => `${MM.toFixed(1)}\xd7`,
      hM = [{
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
      JM = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      dM = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      yM = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      lM = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      EM = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      UM = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      GM = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      CM = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      eM = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      bM = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      wM = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      tM = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      gM = {
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
      uM = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      RM = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      pM = OM.b.map((MM => {
        let {
          group: rM,
          actions: iM
        } = MM;
        const OM = iM.map((MM => ({
          kind: "action",
          action: MM
        })));
        return {
          titleKey: uM[rM],
          rows: "gameplay" === rM ? [...RM, ...OM] : OM
        }
      })),
      WM = SM.X.filter((MM => "Home" !== MM)),
      sM = 1e4;
    class DM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = MM, this.openButton = rM, this.accepts = iM, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(MM, rM) {
        var iM;
        this.updateIgnored(MM, rM);
        const OM = rM - (null !== (iM = this.startMs) && void 0 !== iM ? iM : rM) >= 250;
        for (const SM of WM)
          if (SM !== this.cancelButton && OM && !this.ignoredUntilMs.has(SM) && MM.wasPressed(SM) && this.accepts(SM)) return {
            kind: "bind",
            button: SM
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (MM.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = rM
        }
        return null === this.cancelDownAtMs ? null : MM.isHeld(this.cancelButton) && rM - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : MM.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(MM) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (MM - this.cancelDownAtMs) / 700)
      }
      updateIgnored(MM, rM) {
        if (null === this.startMs) {
          this.startMs = rM;
          for (const rM of WM) MM.isDown(rM) && this.ignoredUntilMs.set(rM, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, rM + 250)
        }
        for (const [iM, OM] of this.ignoredUntilMs) {
          const SM = MM.isDown(iM);
          OM === 1 / 0 ? SM || iM !== this.openButton ? SM || this.ignoredUntilMs.delete(iM) : this.ignoredUntilMs.set(iM, rM + 250) : rM >= OM ? this.ignoredUntilMs.delete(iM) : SM && this.ignoredUntilMs.set(iM, 1 / 0)
        }
      }
    }
    const kM = 6e3;
    class ZM {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(MM, rM) {
        let {
          pressed: iM,
          sQ: OM
        } = MM;
        if (iM) {
          const MM = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== MM && rM - MM < 1500 ? [...this.pressesAtMs, rM] : [rM], this.pressesAtMs.length >= 3) return 1
        }
        return OM ? (this.downAtMs ??= rM, Math.min(1, (rM - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  5419: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      d: () => aM
    });
    var OM = iM(44);
    const SM = new WeakMap,
      jM = MM => {
        var rM;
        const iM = MM.closest("[data-pad-slider]");
        return iM && null !== (rM = SM.get(iM)) && void 0 !== rM ? rM : null
      },
      aM = (MM, rM) => {
        const iM = (0, OM.useRef)(rM);
        iM.current = rM, (0, OM.useEffect)((() => {
          if (MM.current) return ((MM, rM) => (SM.set(MM, rM), () => {
            SM.get(MM) === rM && SM.delete(MM)
          }))(MM.current, {
            adjust: MM => {
              iM.current.adjust(MM)
            },
            setFraction: MM => {
              iM.current.setFraction(MM)
            },
            endDrag: () => {
              iM.current.endDrag()
            }
          })
        }), [MM])
      }
  },
  9408: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => aM,
      j: () => jM,
      l: () => OM,
      p: () => PM,
      s: () => QM,
      w: () => zM
    });
    const OM = "controllerActionWheelOpen",
      SM = "controllerActionWheelAim",
      jM = "controllerActionWheelCommit",
      aM = "controllerActionWheelClose",
      PM = "controllerActionWheelPick";
    let nM = !1;
    const QM = () => nM,
      zM = MM => {
        nM = MM
      }
  },
  9403: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      f: () => SM
    });
    let OM = 0;
    const SM = () => {
        OM++
      },
      jM = () => OM
  },
  9324: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      e: () => SM,
      h: () => aM,
      j: () => jM,
      k: () => OM,
      m: () => QM
    });
    const OM = "controllerQuickChatWheelOpen",
      SM = "controllerQuickChatWheelAim",
      jM = "controllerQuickChatWheelCommit",
      aM = "controllerQuickChatWheelClose";
    let PM = !1;
    const nM = () => PM,
      QM = MM => {
        PM = MM
      }
  },
  9337: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      h: () => SM
    });
    var OM = iM(22);
    const SM = "localBlockBroken";

    function jM() {
      return {
        onPlayerChangeBlock(MM, rM, iM, jM, aM, PM) {
          "Air" === PM && OM.i.Tz(SM)
        }
      }
    }
  },
  9467: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => nM
    });
    var OM = iM(19),
      SM = iM(1373),
      jM = iM(83);
    const aM = {
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

    function PM() {
      return (0, jM.isMobile)() && "function" === typeof navigator.vibrate
    }
    const nM = new class {
      constructor(MM) {
        this.deps = MM, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(MM, rM) {
        var iM;
        if (!this.deps.enabled()) return;
        const OM = aM[MM],
          SM = null !== rM && void 0 !== rM ? rM : OM.pattern;
        if (null === SM) return void console.warn("No vibration pattern for", MM);
        const jM = this.deps.now();
        jM - this.lastAnyAt < 40 && OM.priority < this.playingPriority || jM - (null !== (iM = this.lastAt.get(MM)) && void 0 !== iM ? iM : -1 / 0) < OM.minGapMs || jM < this.playingUntil && OM.priority < this.playingPriority || (this.lastAt.set(MM, jM), this.lastAnyAt = jM, this.playingUntil = jM + SM.reduce(((MM, rM) => MM + rM), 0), this.playingPriority = OM.priority, this.deps.vibrate(SM))
      }
    }({
      vibrate: MM => {
        navigator.vibrate([...MM])
      },
      now: () => performance.now(),
      enabled: () => PM() && OM.d.get("isTouchScreen") && OM.d.get("clientEscMenuOptions").vibration && !(0, SM.i)()
    })
  },
  9331: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(1265);

    function SM(MM, rM) {
      var iM, SM;
      try {
        const iM = (0, OM.b)();
        if ("function" === typeof iM) {
          const OM = new iM(MM, rM);
          if (OM.type === MM) return OM
        }
      } catch {}
      const jM = document.createEvent("Event");
      return jM.initEvent(MM, null !== (iM = null === rM || void 0 === rM ? void 0 : rM.bubbles) && void 0 !== iM && iM, null !== (SM = null === rM || void 0 === rM ? void 0 : rM.cancelable) && void 0 !== SM && SM), jM
    }
  },
  9366: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(9374),
      SM = iM(625),
      jM = iM(119);

    function aM(MM) {
      var rM, iM;
      if ((0, SM.J)(MM)) return !0;
      const aM = null !== (rM = null === (iM = jM.siteUsedData[jM.siteUsed]) || void 0 === iM ? void 0 : iM.adConfig.showRewardedAds) && void 0 !== rM && rM;
      for (const SM in MM) {
        const rM = MM[SM];
        if (null !== rM && void 0 !== rM && rM.items)
          for (const MM in rM.items)
            if ((0, OM.i)(rM.items[MM], aM)) return !1
      }
      return !0
    }
  },
  9374: (MM, rM, iM) => {
    function OM(MM, rM) {
      return !MM.hidden && (rM || !MM.isRewardedAd)
    }

    function SM(MM) {
      return "object" === typeof MM ? MM.option : MM
    }

    function jM(MM, rM) {
      var iM;
      if ("dropdown" === (null === (iM = MM.userInput) || void 0 === iM ? void 0 : iM.type) && "object" === typeof MM.userInput.dropdownOptions[0]) {
        for (const iM of MM.userInput.dropdownOptions)
          if (SM(iM) === rM) return "object" === typeof iM ? iM.cost : MM.cost;
        console.error("Didn't find matching option for dropdown item. Item:", MM, "input:", rM)
      }
      return MM.cost
    }

    function aM(MM, rM, iM) {
      var OM;
      const SM = null !== (OM = iM.excludedPlayers) && void 0 !== OM ? OM : [rM];
      return MM.filter((MM => !SM.includes(MM)))
    }
    iM.d(rM, {
      c: () => jM,
      d: () => SM,
      g: () => aM,
      i: () => OM
    })
  },
  9410: () => {},
  8814: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8819: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8828: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8837: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8839: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8847: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8856: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8862: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8867: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8874: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8878: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8887: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8893: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8896: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8901: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8904: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8908: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8911: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8920: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8925: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8928: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8935: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8938: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8942: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8944: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8947: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8954: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8961: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8964: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8968: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8971: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8977: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8983: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8992: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8998: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9e3: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9003: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9006: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9015: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9022: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9028: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9035: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9040: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9046: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9049: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9054: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9063: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9065: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9073: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9079: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9085: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9093: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9102: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9107: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9116: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9125: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9133: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9142: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9151: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9160: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9163: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9172: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9175: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9182: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9189: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9192: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9197: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9202: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9204: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9213: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9221: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9228: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9237: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9240: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9245: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9251: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
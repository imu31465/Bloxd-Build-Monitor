export const id = 33;
export const ids = [33];
export const modules = {
  8935: (BB, OB, GB) => {
    var YB = {
      "./nintendo/A.svg": 8943,
      "./nintendo/B.svg": 8947,
      "./nintendo/Down.svg": 8955,
      "./nintendo/Home.svg": 8960,
      "./nintendo/LB.svg": 8965,
      "./nintendo/LS.svg": 8967,
      "./nintendo/LT.svg": 8970,
      "./nintendo/Left.svg": 8972,
      "./nintendo/LeftStick.svg": 8975,
      "./nintendo/Menu.svg": 8978,
      "./nintendo/RB.svg": 8981,
      "./nintendo/RS.svg": 8985,
      "./nintendo/RT.svg": 8991,
      "./nintendo/Right.svg": 8998,
      "./nintendo/RightStick.svg": 9002,
      "./nintendo/Up.svg": 9009,
      "./nintendo/View.svg": 9013,
      "./nintendo/X.svg": 9017,
      "./nintendo/Y.svg": 9021,
      "./playstation/A.svg": 9023,
      "./playstation/B.svg": 9031,
      "./playstation/Down.svg": 9034,
      "./playstation/Home.svg": 9036,
      "./playstation/LB.svg": 9042,
      "./playstation/LS.svg": 9045,
      "./playstation/LT.svg": 9052,
      "./playstation/Left.svg": 9061,
      "./playstation/LeftStick.svg": 9066,
      "./playstation/Menu.svg": 9071,
      "./playstation/RB.svg": 9077,
      "./playstation/RS.svg": 9081,
      "./playstation/RT.svg": 9088,
      "./playstation/Right.svg": 9090,
      "./playstation/RightStick.svg": 9095,
      "./playstation/Up.svg": 9097,
      "./playstation/View.svg": 9105,
      "./playstation/X.svg": 9107,
      "./playstation/Y.svg": 9116,
      "./steamdeck/A.svg": 9120,
      "./steamdeck/B.svg": 9122,
      "./steamdeck/Down.svg": 9127,
      "./steamdeck/Home.svg": 9131,
      "./steamdeck/LB.svg": 9135,
      "./steamdeck/LS.svg": 9137,
      "./steamdeck/LT.svg": 9143,
      "./steamdeck/Left.svg": 9151,
      "./steamdeck/LeftStick.svg": 9160,
      "./steamdeck/Menu.svg": 9165,
      "./steamdeck/RB.svg": 9174,
      "./steamdeck/RS.svg": 9180,
      "./steamdeck/RT.svg": 9189,
      "./steamdeck/Right.svg": 9196,
      "./steamdeck/RightStick.svg": 9199,
      "./steamdeck/Up.svg": 9202,
      "./steamdeck/View.svg": 9207,
      "./steamdeck/X.svg": 9211,
      "./steamdeck/Y.svg": 9216,
      "./xbox/A.svg": 9222,
      "./xbox/B.svg": 9227,
      "./xbox/Down.svg": 9234,
      "./xbox/Home.svg": 9241,
      "./xbox/LB.svg": 9247,
      "./xbox/LS.svg": 9256,
      "./xbox/LT.svg": 9259,
      "./xbox/Left.svg": 9261,
      "./xbox/LeftStick.svg": 9265,
      "./xbox/Menu.svg": 9269,
      "./xbox/RB.svg": 9274,
      "./xbox/RS.svg": 9279,
      "./xbox/RT.svg": 9287,
      "./xbox/Right.svg": 9294,
      "./xbox/RightStick.svg": 9299,
      "./xbox/Up.svg": 9306,
      "./xbox/View.svg": 9309,
      "./xbox/X.svg": 9311,
      "./xbox/Y.svg": 9320
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 8935
  },
  9457: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => IB,
      f: () => dB,
      h: () => KB
    });
    var YB = GB(56),
      DB = GB(4956),
      QB = GB(1112),
      oB = GB(1480),
      jB = GB(25),
      yB = GB(3848),
      JB = GB(2397),
      MB = GB(1238),
      PB = GB(2787),
      zB = GB(2023),
      lB = GB(2063),
      pB = GB(1175),
      qB = GB(16),
      ZB = GB(1699),
      NB = GB(1090),
      RB = GB.n(NB),
      WB = GB(9460),
      AB = GB(9469),
      VB = GB(9472),
      SB = GB(9384),
      nB = GB(9478),
      UB = GB(3516),
      fB = (GB(9482), GB(1282));
    let kB = null;

    function dB() {
      return null !== kB
    }

    function KB() {
      return "pad" === kB
    }

    function uB() {
      return "inGame" === qB.c.get("gameState") && !(0, ZB.r)()
    }

    function mB(BB) {
      return (0, AB.r)(BB, MB.j, AB.f, AB.g, AB.i)
    }
    const IB = (0, YB.memo)((function() {
      const {
        t: BB
      } = (0, pB.H)(), {
        userContext: OB
      } = (0, QB.d)(), [GB, qB] = (0, YB.useState)(null), [NB, dB] = (0, YB.useState)(null), KB = (0, YB.useRef)(null), IB = (0, YB.useCallback)((BB => {
        KB.current = BB, dB(BB)
      }), []), FB = (0, YB.useRef)(0), iB = (0, YB.useRef)(null), LB = (0, YB.useRef)({
        x: 0,
        y: 0
      }), [gB, rB] = (0, YB.useState)(0), XB = (0, YB.useMemo)((() => function(BB) {
        const OB = [];
        for (let YB = 0; YB < MB.j; YB++) {
          var GB;
          OB.push(null !== (GB = BB[YB]) && void 0 !== GB ? GB : null)
        }
        return OB
      }((0, PB.g)(OB.getPlayerCosmetics().emote))), [OB, gB]);
      (0, lB.b)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.UB)) && rB((BB => BB + 1))
      }));
      const wB = (0, YB.useRef)(!1),
        EB = (0, YB.useCallback)((function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, VB.h)(), wB.current = OB, LB.current = {
            x: 0,
            y: 0
          }, IB(null), qB(BB)
        }), [IB]),
        cB = (0, YB.useCallback)((() => {
          qB(null), IB(null), LB.current = {
            x: 0,
            y: 0
          }
        }), [IB]),
        hB = (0, YB.useCallback)((BB => {
          if (Date.now() < FB.current) return;
          const OB = (0, JB.k)(BB),
            GB = !!OB.holdUntilMove,
            YB = GB ? 600 : Math.ceil(1e3 * OB.animation.animation_length / JB.e) + 200;
          FB.current = Date.now() + YB, iB.current = BB, zB.gameBridge.send("playEmote", BB), zB.gameBridge.send("applyTemporaryThirdPerson", GB ? {} : {
            durationMs: YB
          })
        }), []);
      (0, oB.f)("requestToggleEmoteWheel", (() => {
        null === GB ? uB() && EB("click") : cB()
      })), (0, oB.f)("requestEmoteWheelHoldOpen", (() => {
        null === GB && uB() && EB((0, WB.b)() ? "hold" : "click")
      })), (0, oB.f)("requestEmoteWheelPadOpen", (BB => {
        null !== GB || !uB() || (0, SB.e)() || (0, nB.q)() || EB("pad", BB)
      })), (0, oB.f)("requestEmoteRepeatLast", (() => {
        if (null !== GB || !uB() || (0, SB.e)() || (0, nB.q)()) return;
        const BB = iB.current;
        null !== BB && XB.includes(BB) ? hB(BB) : EB("pad", !0)
      }));
      const aB = () => {
        const BB = KB.current,
          OB = null !== BB ? XB[BB] : null;
        null !== OB && "pad" === GB && Date.now() < FB.current || (cB(), null !== OB && hB(OB))
      };
      (0, oB.f)("emoteWheelPadAim", (BB => {
        if ("pad" !== GB) return;
        const OB = (0, AB.C)(BB, MB.j, KB.current);
        IB(null !== OB && null !== XB[OB] ? OB : null)
      })), (0, oB.f)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== GB || BB && wB.current || aB()
      })), (0, oB.f)("appManagerUpdated|activeInputDevice", (BB => {
        null !== GB && "pad" === GB !== ("gamepad" === BB) && cB()
      })), (0, YB.useLayoutEffect)((() => (kB = GB, (0, yB.q)("emoteWheel", "pad" === GB), jB.o.tM(yB.l), () => {
        kB = null, (0, yB.q)("emoteWheel", !1), jB.o.tM(yB.l)
      })), [GB]), (0, oB.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === GB && aB()
      })), (0, oB.f)("requestEmoteWheelClose", (() => {
        null !== GB && cB()
      })), (0, oB.f)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && cB()
      }));
      const eB = () => {
        (0, ZB.r)() && cB()
      };
      if ((0, oB.f)("appManagerUpdated|openEverythingMenuName", eB), (0, oB.f)("appManagerUpdated|openInGameMenuName", eB), (0, oB.f)("pointerLockUpdate", (BB => {
          BB || "hold" !== GB || cB()
        })), (0, YB.useEffect)((() => {
          if (null === GB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), cB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [GB, cB]), (0, DB.e)(!0, "click" === GB, "EmoteWheelOverlay"), (0, YB.useEffect)((() => {
          if ("hold" === GB) return zB.gameBridge.send("holdEmoteWheel", !0), () => {
            zB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [GB]), (0, YB.useEffect)((() => {
          if ("hold" !== GB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            OB = AB.o * BB,
            YB = AB.l * BB,
            DB = BB => {
              let GB = LB.current.x + BB.movementX,
                DB = LB.current.y + BB.movementY;
              const QB = Math.hypot(GB, DB);
              if (QB > OB) {
                const BB = OB / QB;
                GB *= BB, DB *= BB
              }
              LB.current = {
                x: GB,
                y: DB
              }, IB(function(BB, OB, GB, YB) {
                if (Math.hypot(BB, OB) < GB) return null;
                const DB = (0, AB.u)(BB, OB, MB.j);
                return null === YB[DB] ? null : DB
              }(GB, DB, YB, XB))
            };
          return document.addEventListener("mousemove", DB), () => {
            document.removeEventListener("mousemove", DB)
          }
        }), [GB, XB, IB]), null === GB) return null;
      const TB = "hold" === GB || "pad" === GB,
        bB = null !== NB ? XB[NB] : null,
        CB = null !== bB ? (0, JB.k)(bB).displayName : BB("emotes:pickEmote");
      return (0, fB.jsx)("div", {
        className: RB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === GB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && cB()
        },
        children: (0, fB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * AB.o + "rem",
            height: 2 * AB.o + "rem"
          },
          children: [(0, fB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${AB.j} ${AB.j}`,
            children: [XB.map(((OB, GB) => {
              const YB = null !== OB,
                DB = TB && GB === NB;
              return (0, fB.jsx)("path", {
                d: mB(GB),
                className: RB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: DB,
                  EmoteWheelWedgeDisabled: !YB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== OB && (BB => {
                    cB(), hB(BB)
                  })(OB)
                },
                "aria-label": null !== OB ? (0, JB.k)(OB).displayName : BB("emotes:emptySlot")
              }, GB)
            })), (0, fB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: AB.f,
              cy: AB.f,
              r: AB.i
            }), (0, fB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: AB.f,
              cy: AB.f,
              r: AB.g
            }), TB && null !== NB && (0, fB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: mB(NB)
            })]
          }), XB.map(((BB, OB) => {
            const GB = null !== BB,
              YB = TB && OB === NB,
              DB = (0, AB.x)(OB, MB.j),
              QB = AB.d * Math.cos(DB),
              oB = AB.d * Math.sin(DB);
            return (0, fB.jsx)("div", {
              className: RB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: YB,
                EmoteWheelSlotIconDisabled: !GB
              }),
              style: {
                left: `calc(50% + ${QB}rem)`,
                top: `calc(50% + ${oB}rem)`,
                backgroundImage: GB ? `url(${(0,UB.f)("emote",BB)})` : void 0
              },
              "aria-hidden": !0
            }, OB)
          })), (0, fB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: CB
          })]
        })
      })
    }))
  },
  9570: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => kB,
      h: () => uB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(2697),
      oB = GB(3831);
    const jB = 6,
      yB = 4,
      JB = ["HudMove-inventory", "HudLocked-inventory"];

    function MB(BB) {
      let {
        left: OB,
        right: GB,
        height: YB,
        rowTop: DB,
        besideBottom: QB,
        obstacles: oB
      } = BB;
      const JB = oB.filter((BB => BB.left < GB + jB && BB.right > OB - jB));
      let MB = QB;
      for (let jB = 0; jB <= JB.length; jB++) {
        const BB = JB.filter((BB => BB.top < MB + yB && BB.bottom > MB - YB - yB));
        if (0 === BB.length) break;
        MB = Math.min(...BB.map((BB => BB.top))) - yB
      }
      return MB === QB ? null : Math.ceil(DB - MB)
    }

    function PB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function zB(BB) {
      return function(BB) {
        const OB = [],
          GB = (BB, YB) => {
            const DB = BB.getBoundingClientRect();
            if (DB.width > 0 && DB.height > 0) OB.push(BB);
            else if (YB < 2)
              for (const OB of Array.from(BB.children)) GB(OB, YB + 1)
          };
        for (const YB of BB) GB(YB, 0);
        return OB
      }(PB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function lB(BB, OB) {
      var GB;
      const YB = null === (GB = BB.querySelector(":scope > .AuraBarWrapper")) || void 0 === GB ? void 0 : GB.getBoundingClientRect();
      return (YB && YB.height > 0 ? YB.top : OB) - yB
    }
    const pB = ".BottomScreenMessage, [role='status']";

    function qB(BB, OB, GB, YB, DB) {
      const QB = BB => BB.map((BB => BB.getBoundingClientRect())),
        oB = MB({
          ...GB,
          obstacles: QB(GB.obstacles.filter((BB => !BB.matches(pB))))
        }),
        jB = OB.ownerDocument.defaultView,
        yB = `${null===jB||void 0===jB?void 0:jB.innerWidth}x${null===jB||void 0===jB?void 0:jB.innerHeight}:${YB}:${Math.round(GB.rowTop)}`,
        JB = BB.get(OB),
        PB = (null === JB || void 0 === JB ? void 0 : JB.at) === yB ? (zB = JB.rise, lB = oB, null === zB ? lB : null === lB ? zB : Math.max(zB, lB)) : oB;
      var zB, lB;
      const qB = MB({
        ...GB,
        besideBottom: null === PB ? GB.besideBottom : GB.rowTop - PB,
        obstacles: QB(GB.obstacles)
      });
      return DB && BB.set(OB, {
        at: yB,
        rise: PB
      }), null !== qB && void 0 !== qB ? qB : PB
    }

    function ZB(BB, OB, GB, YB) {
      BB.classList.toggle(OB, null !== YB), null === YB ? BB.style.removeProperty(GB) : BB.style.setProperty(GB, `${YB}px`)
    }
    const NB = new WeakMap,
      RB = new WeakMap,
      WB = "(orientation: portrait) and (max-width: 600px)";

    function AB(BB, OB) {
      const GB = BB.getBoundingClientRect();
      if (0 === GB.width) return null;
      const YB = [GB, ...Array.from(BB.children).filter((BB => !(BB => OB.contains(BB.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(BB))).map((BB => BB.getBoundingClientRect())).filter((BB => BB.width > 0))];
      return {
        left: Math.min(...YB.map((BB => BB.left))),
        top: Math.min(...YB.map((BB => BB.top))),
        right: Math.max(...YB.map((BB => BB.right))),
        bottom: Math.max(...YB.map((BB => BB.bottom)))
      }
    }

    function VB(BB) {
      let {
        slotsLeft: OB,
        slotsRight: GB,
        width: YB,
        zoneRight: DB
      } = BB;
      const QB = Math.max(0, Math.floor(GB - OB - YB));
      return null === DB ? 0 : Math.min(QB, Math.max(0, Math.ceil(DB + jB - OB)))
    }

    function SB(BB) {
      var OB;
      const GB = BB.getBoundingClientRect();
      if (0 === GB.width) return null;
      const YB = null === (OB = BB.parentElement) || void 0 === OB ? void 0 : OB.getBoundingClientRect();
      return YB && YB.width > 0 ? Math.min(GB.right, YB.left + YB.width * nB) : GB.right
    }
    const nB = .35,
      UB = new WeakMap,
      fB = new WeakMap;

    function kB(BB) {
      dB(BB) && dB(BB),
        function(BB) {
          var OB, GB;
          const YB = BB.documentElement.classList;
          if (!YB.contains("TouchHotbar") || !YB.contains("TouchHotbarKeysAbove") || JB.some((BB => YB.contains(BB))) || !1 !== (null === (OB = BB.defaultView) || void 0 === OB || null === (GB = OB.matchMedia) || void 0 === GB ? void 0 : GB.call(OB, WB).matches)) return;
          const DB = BB.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            QB = null === DB || void 0 === DB ? void 0 : DB.closest(".BottomMiddleElements"),
            oB = null === DB || void 0 === DB ? void 0 : DB.parentElement;
          if (!DB || !QB || !oB || QB.classList.contains("TouchInventoryOpen") || DB.querySelector("[data-pressing]")) return;
          const jB = AB(DB, YB),
            yB = oB.getBoundingClientRect().top,
            MB = jB && qB(NB, QB, {
              left: jB.left,
              right: jB.right,
              height: jB.bottom - jB.top,
              rowTop: yB,
              besideBottom: lB(QB, yB),
              obstacles: zB(QB).filter((BB => !BB.classList.contains("BottomScreenMessage")))
            }, `${Math.round(jB.left)}:${Math.round(jB.right-jB.left)}x${Math.round(jB.bottom-jB.top)}`, !0);
          RB.has(QB) && RB.get(QB) === MB || (ZB(QB, "KeysAboveUp", "--touch-keys-above-rise", MB), RB.set(QB, MB))
        }(BB)
    }

    function dB(BB) {
      var OB, GB, YB, DB;
      const QB = BB.documentElement.classList;
      if (!QB.contains("TouchHotbar") || QB.contains("TouchHotbarKeysAbove") || JB.some((BB => QB.contains(BB))) || null === (OB = BB.defaultView) || void 0 === OB || null === (GB = OB.matchMedia) || void 0 === GB || !GB.call(OB, KB).matches) return !1;
      const oB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        jB = null === oB || void 0 === oB ? void 0 : oB.parentElement,
        yB = null === oB || void 0 === oB ? void 0 : oB.closest(".BottomMiddleElements"),
        MB = null === yB || void 0 === yB ? void 0 : yB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!oB || !jB || !yB || !MB || yB.classList.contains("TouchInventoryOpen")) return !1;
      const PB = oB.getBoundingClientRect();
      if (0 === PB.width) return !1;
      const pB = BB.querySelector(".JoystickZone"),
        NB = MB.getBoundingClientRect(),
        RB = jB.getBoundingClientRect().top,
        WB = VB({
          slotsLeft: NB.left,
          slotsRight: NB.right,
          width: PB.width,
          zoneRight: pB ? SB(pB) : null
        }),
        AB = UB.get(yB),
        nB = NB.left + WB,
        kB = {
          shift: WB,
          rise: qB(fB, yB, {
            left: nB,
            right: nB + PB.width,
            height: PB.height,
            rowTop: RB,
            besideBottom: lB(yB, RB),
            obstacles: zB(yB)
          }, `${WB}:${Math.round(PB.width)}`, (null !== (YB = null === AB || void 0 === AB ? void 0 : AB.shift) && void 0 !== YB ? YB : 0) === WB)
        };
      return (null === AB || void 0 === AB ? void 0 : AB.shift) !== kB.shift && yB.style.setProperty("--touch-shop-above-shift", `${kB.shift}px`), (null === AB || void 0 === AB ? void 0 : AB.rise) !== kB.rise && ZB(yB, "ShopAboveUp", "--touch-shop-above-rise", kB.rise), UB.set(yB, kB), (null !== (DB = null === AB || void 0 === AB ? void 0 : AB.shift) && void 0 !== DB ? DB : 0) !== kB.shift
    }
    const KB = "(orientation: landscape) and (max-height: 500px)";

    function uB(BB, OB, GB) {
      (0, YB.useLayoutEffect)((() => {
        var OB;
        const YB = null === (OB = BB.current) || void 0 === OB ? void 0 : OB.closest(".BottomMiddleElements");
        if (!YB || GB) return;
        const jB = new ResizeObserver((() => {
            lB(!1)
          })),
          yB = () => {
            jB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const OB of [BB, YB, YB.querySelector(".HotBarGameItemsContainer"), ...zB(YB)]) OB && jB.observe(OB)
          };
        let JB = null,
          MB = !1;
        const lB = BB => {
            MB ||= BB, JB ??= requestAnimationFrame((() => {
              JB = null, MB && (MB = !1, yB()), kB(document)
            }))
          },
          pB = new MutationObserver((() => {
            lB(!0)
          }));
        pB.observe(YB, {
          childList: !0
        });
        for (const BB of PB(YB)) pB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        kB(document), yB();
        const qB = () => {
            lB(!0)
          },
          ZB = [(0, DB.p)(QB.e, qB), (0, DB.p)(oB.c, qB)],
          NB = new MutationObserver((() => {
            lB(!1)
          }));
        return BB.current && NB.observe(BB.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          NB.disconnect(), null !== JB && cancelAnimationFrame(JB), jB.disconnect(), pB.disconnect();
          for (const BB of ZB) BB()
        }
      }), [BB, OB, GB])
    }
  },
  5480: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => pB,
      d: () => AB,
      f: () => qB,
      g: () => WB
    });
    var YB = GB(56),
      DB = GB(5486),
      QB = GB(4777),
      oB = GB(1405),
      jB = GB(5512),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1400),
      PB = GB(1822),
      zB = GB(5515),
      lB = GB(1282);

    function pB(BB) {
      let {
        label: OB,
        onClick: GB,
        checked: YB,
        circleInfoText: DB,
        className: jB,
        disabled: yB,
        note: MB
      } = BB;
      return (0, lB.jsxs)("div", {
        "aria-disabled": yB || void 0,
        "data-pad-focusable": !0,
        className: JB()("SettingBox CheckboxContainer", {
          [jB]: jB,
          SettingBoxDisabled: yB
        }),
        onClick: () => {
          yB || GB(!YB)
        },
        children: [(0, lB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lB.jsx)(QB.e, {
              className: "SettingsCheckbox",
              checked: YB,
              disabled: yB,
              onChange: () => {}
            })
          }), (0, lB.jsxs)("div", {
            className: "CheckboxText",
            children: [OB, DB && (0, lB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, lB.jsx)(oB.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: DB
              })
            })]
          })]
        }), MB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: MB
        })]
      })
    }

    function qB(BB) {
      let {
        name: OB,
        onChange: GB,
        min: DB,
        max: QB,
        step: jB,
        initValue: yB,
        circleInfoText: MB,
        format: PB,
        className: zB,
        padStep: pB,
        disabled: qB = !1,
        selectableMax: ZB,
        cappedNote: NB,
        note: WB,
        onChangeComplete: AB
      } = BB;
      const [VB, SB] = (0, YB.useState)(yB), nB = (0, YB.useRef)(yB);
      (0, YB.useEffect)((() => {
        nB.current = yB, SB(yB)
      }), [yB]);
      const UB = void 0 !== ZB && ZB < QB,
        fB = UB ? {
          "--slider-selectable": (ZB - DB) / (QB - DB)
        } : void 0,
        kB = UB && NB ? NB : WB;
      return (0, lB.jsxs)("div", {
        className: JB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: qB,
          SliderCapped: UB
        }),
        style: fB,
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [`${OB}: ${PB?PB(VB):VB}`, MB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MB
          })]
        }), (0, lB.jsx)("div", {
          className: "SliderDiv",
          children: (0, lB.jsx)(RB, {
            value: VB,
            min: DB,
            max: QB,
            step: jB,
            onChange: BB => {
              if (UB && BB >= ZB && VB === ZB) return;
              const OB = UB ? Math.min(BB, ZB) : BB;
              nB.current = OB, SB(OB), GB(OB)
            },
            onChangeComplete: AB && (() => {
              AB(nB.current)
            }),
            format: PB,
            padStep: pB,
            disabled: qB
          })
        }), kB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: kB
        })]
      })
    }
    const ZB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function NB(BB) {
      var OB;
      return (null !== (OB = String(BB).split(".")[1]) && void 0 !== OB ? OB : "").length
    }

    function RB(BB) {
      let {
        value: OB,
        min: GB,
        max: QB,
        step: oB,
        onChange: jB,
        orientation: yB,
        reverse: JB,
        setIsChanging: MB,
        tooltip: PB,
        labels: pB,
        handleLabel: qB,
        format: RB,
        onChangeStart: WB,
        onChangeComplete: AB,
        padStep: VB,
        disabled: SB = !1
      } = BB;
      const nB = (0, YB.useRef)(null),
        UB = (0, YB.useRef)(null);
      (0, YB.useLayoutEffect)((() => {
        var BB, OB, GB;
        const YB = null !== (BB = null === (OB = nB.current) || void 0 === OB ? void 0 : OB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === YB || void 0 === YB || YB.setAttribute("data-pad-slider", ""), null === YB || void 0 === YB || YB.setAttribute("data-pad-focusable", ""), null === YB || void 0 === YB || null === (GB = YB.querySelector(".rangeslider__handle")) || void 0 === GB || GB.setAttribute("data-pad-slider-handle", ""), UB.current = YB
      }), []), (0, YB.useLayoutEffect)((() => {
        var BB, OB;
        SB ? null === (BB = UB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (OB = UB.current) || void 0 === OB || OB.removeAttribute("aria-disabled")
      }), [SB]);
      const fB = Math.max(NB(oB), NB(GB)),
        kB = BB => {
          if (BB >= QB) return QB;
          if (BB <= GB) return GB;
          const OB = Number((Math.round((BB - GB) / oB) * oB + GB).toFixed(fB));
          return Math.min(QB, Math.max(GB, OB))
        },
        dB = (0, YB.useRef)(AB);
      dB.current = AB, (0, YB.useEffect)((() => {
        const BB = nB.current;
        if (!BB) return;
        const OB = BB => {
          var OB;
          ZB.has(BB.key) && (null === (OB = dB.current) || void 0 === OB || OB.call(dB))
        };
        return BB.addEventListener("keyup", OB), () => {
          BB.removeEventListener("keyup", OB)
        }
      }), []);
      const KB = (0, YB.useRef)(!1);
      return (0, zB.e)(UB, {
        adjust: BB => {
          if (SB) return;
          const YB = null !== VB && void 0 !== VB ? VB : Math.max(oB, Math.round((QB - GB) / 20 / oB) * oB),
            DB = kB(OB + BB * YB * (JB ? -1 : 1));
          DB !== OB && (null === WB || void 0 === WB || WB(), jB(DB), null === AB || void 0 === AB || AB())
        },
        setFraction: BB => {
          if (SB) return;
          const YB = kB(GB + (JB ? 1 - BB : BB) * (QB - GB));
          YB !== OB && (KB.current || (KB.current = !0, null === WB || void 0 === WB || WB()), jB(YB))
        },
        endDrag: () => {
          KB.current && (KB.current = !1, null === AB || void 0 === AB || AB())
        }
      }), (0, lB.jsx)("div", {
        ref: nB,
        style: {
          display: "contents"
        },
        children: (0, lB.jsx)(DB.b, {
          value: OB,
          min: GB,
          max: QB,
          step: oB,
          onChange: BB => {
            jB(kB(BB))
          },
          orientation: yB,
          reverse: JB,
          tooltip: PB,
          labels: pB,
          handleLabel: qB,
          format: RB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === MB || void 0 === MB || MB(!0)
          },
          onChangeComplete: () => {
            null === MB || void 0 === MB || MB(!1), null === AB || void 0 === AB || AB()
          }
        })
      })
    }
    async function WB() {
      const BB = MB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, PB.reloadBloxd)()
    }

    function AB(BB) {
      let {
        label: OB,
        options: GB,
        value: YB,
        onChange: DB,
        circleInfoText: QB
      } = BB;
      return (0, lB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [OB, QB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QB
          })]
        }), (0, lB.jsx)(jB.c, {
          ariaLabel: OB,
          options: GB,
          value: YB,
          onChange: DB
        })]
      })
    }
  },
  5512: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1282);

    function oB(BB) {
      let {
        options: OB,
        value: GB,
        onChange: YB,
        ariaLabel: oB,
        className: jB,
        reselectable: yB = !1,
        keepsFocus: JB = !1,
        padTabs: MB
      } = BB;
      const PB = void 0 !== MB;
      return (0, QB.jsx)("div", {
        className: DB()("SegmentedToggle", jB),
        role: "group",
        "aria-label": oB,
        "data-pad-tabs": MB,
        children: OB.map((BB => {
          const OB = BB.value === GB;
          return (0, QB.jsx)("button", {
            type: "button",
            "aria-pressed": OB,
            "data-pad-tab": PB || void 0,
            "data-pad-selected": PB && OB ? "true" : void 0,
            "data-pad-default-focus": PB && OB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: DB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: OB
            }),
            onMouseDown: JB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              OB && !yB || YB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  9414: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => QB
    });
    var YB = GB(2098);
    const DB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && DB.test(BB.keycode),
      oB = BB => "Space" === BB ? "_" : YB.h[BB]
  },
  9460: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(16);

    function DB() {
      return !YB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9553: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => PB,
      D: () => yB,
      H: () => zB,
      K: () => JB,
      N: () => pB,
      Q: () => QB,
      d: () => DB,
      f: () => jB,
      h: () => YB,
      k: () => qB,
      o: () => lB,
      r: () => MB,
      v: () => oB,
      x: () => ZB
    });
    const YB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function DB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function QB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, OB) => ({
        left: Math.min(BB.left, OB.left),
        top: Math.min(BB.top, OB.top),
        right: Math.max(BB.right, OB.right),
        bottom: Math.max(BB.bottom, OB.bottom)
      })))
    }

    function oB(BB, OB) {
      const GB = Math.max(0, (OB - (BB.right - BB.left)) / 2),
        YB = Math.max(0, (OB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - GB,
        top: BB.top - YB,
        right: BB.right + GB,
        bottom: BB.bottom + YB
      }
    }

    function jB(BB, OB) {
      return OB.x >= BB.left && OB.x <= BB.right && OB.y >= BB.top && OB.y <= BB.bottom
    }

    function yB(BB, OB, GB) {
      let YB = null,
        QB = 1 / 0;
      for (const {
          id: DB,
          box: oB
        }
        of OB) {
        const OB = (oB.right - oB.left) * (oB.bottom - oB.top);
        jB(oB, BB) && OB < QB && (QB = OB, YB = DB)
      }
      if (null !== YB) return YB;
      let yB = 1 / 0;
      for (const {
          id: JB,
          box: MB
        }
        of OB) {
        if (!jB(oB(MB, GB), BB)) continue;
        const OB = DB(MB),
          QB = Math.hypot(BB.x - OB.x, BB.y - OB.y);
        QB < yB && (yB = QB, YB = JB)
      }
      return YB
    }

    function JB(BB, OB, GB) {
      return {
        left: GB.left,
        top: GB.top,
        right: BB - GB.right,
        bottom: OB - GB.bottom
      }
    }

    function MB(BB, OB, GB, YB) {
      const DB = (BB, OB, GB) => Math.max(Math.min(OB, 0), Math.min(Math.max(GB, 0), BB));
      return {
        x: DB(OB, YB.left - BB.left, YB.right - BB.right),
        y: DB(GB, YB.top - BB.top, YB.bottom - BB.bottom)
      }
    }

    function PB(BB, OB, GB, YB, DB) {
      const QB = BB.dx * YB + OB,
        oB = BB.dy * DB + GB,
        jB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: jB(QB / YB),
        dy: jB(oB / DB)
      }
    }

    function zB(BB, OB, GB, YB) {
      return OB <= 0 || GB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / OB, YB / GB))
    }

    function lB(BB, OB, GB) {
      return Math.min(BB.right, OB.right) - Math.max(BB.left, OB.left) > GB && Math.min(BB.bottom, OB.bottom) - Math.max(BB.top, OB.top) > GB
    }

    function pB(BB, OB) {
      const GB = (BB, OB, GB, YB) => OB - BB > YB - GB ? GB - BB > OB - YB ? YB - OB : GB - BB : BB < GB ? GB - BB : OB > YB ? YB - OB : 0;
      return {
        x: GB(BB.left, BB.right, OB.left, OB.right),
        y: GB(BB.top, BB.bottom, OB.top, OB.bottom)
      }
    }

    function qB(BB, OB, GB) {
      return lB(BB, {
        left: 0,
        top: 0,
        right: OB,
        bottom: GB
      }, 0)
    }

    function ZB(BB, OB) {
      let {
        avoid: GB = null,
        bounds: YB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, DB = 0, QB = 1 / 0;
      return BB.forEach(((BB, oB) => {
        const jB = OB.filter((OB => lB(BB, OB, 0))).length,
          yB = null !== YB && (BB.left < YB.left || BB.top < YB.top || BB.right > YB.right || BB.bottom > YB.bottom),
          JB = jB + (GB && lB(BB, GB, 0) ? 1e3 : 0) + (yB ? 1e6 : 0);
        JB < QB && (DB = oB, QB = JB)
      })), DB
    }
  },
  9549: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => lB,
      D: () => zB,
      H: () => PB,
      b: () => jB,
      d: () => AB,
      g: () => WB,
      h: () => RB,
      j: () => yB,
      m: () => pB,
      q: () => MB,
      u: () => SB,
      v: () => VB,
      y: () => JB
    });
    var YB = GB(9553),
      DB = GB(2679);
    const QB = {
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
        ...Object.fromEntries(DB.F.map((BB => [BB, "menu"])))
      },
      oB = BB => DB.A.filter((OB => QB[OB] === BB)),
      jB = new Set(oB("cluster")),
      yB = new Set(oB("inventory")),
      JB = BB => "inventory" === BB || yB.has(BB),
      MB = BB => {
        const OB = QB[BB];
        return void 0 === OB ? [] : [OB, ...MB(OB)]
      },
      PB = BB => [BB, ...MB(BB)],
      zB = (BB, OB, GB) => "shop" === BB && OB ? GB("inventory") ? ["inventory"] : GB("bag") ? [BB, "bag"] : [BB] : [BB],
      lB = (BB, OB, GB, DB) => {
        const QB = BB => {
          const QB = OB[BB],
            {
              x: oB,
              y: jB
            } = QB && DB(BB) ? (0, YB.N)(QB, GB) : {
              x: 0,
              y: 0
            };
          return QB && {
            left: QB.left + oB,
            top: QB.top + jB,
            right: QB.right + oB,
            bottom: QB.bottom + jB
          }
        };
        return BB.flatMap((BB => {
          const oB = OB[BB];
          if ("inventory" !== BB || !oB || oB.right - oB.left <= GB.right - GB.left && oB.bottom - oB.top <= GB.bottom - GB.top) return [BB];
          const [jB, yB] = [QB("shop"), QB("bag")];
          return jB && yB && !(0, YB.o)(jB, yB, 0) ? ["shop", "bag"].filter(DB) : [BB]
        }))
      },
      pB = new Map([
        ["cluster", jB],
        ["inventory", yB]
      ]),
      qB = ["cluster"],
      ZB = [...qB, ...DB.A.filter((BB => !qB.includes(BB) && !QB[BB]))],
      NB = BB => [BB, ...oB(BB).flatMap(NB)],
      RB = ZB.flatMap(NB).map((BB => ({
        id: BB,
        label: `hudLayout:${BB}`,
        ...DB.x[BB],
        parent: QB[BB]
      }))),
      WB = Object.fromEntries(RB.map((BB => [BB.id, BB]))),
      AB = "data-hud-el";

    function VB(BB, OB, GB, YB) {
      const DB = GB(function(BB, OB) {
          return "attack" !== BB || OB ? WB[BB].label : "hudLayout:attackContext"
        }(BB, OB)),
        QB = YB[BB];
      return QB ? GB("hudLayout:slotWithKey", {
        slot: DB,
        key: QB
      }) : DB
    }

    function SB(BB, OB, GB, YB) {
      return BB.map((BB => VB(BB, OB, GB, YB))).join(", ")
    }
  },
  9566: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      f: () => QB,
      g: () => DB,
      j: () => oB,
      n: () => PB,
      r: () => MB,
      t: () => JB,
      v: () => yB
    });
    var YB = GB(2679);
    const DB = ["J", "C", "A", "P", "U", "X", "G"],
      QB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function oB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const jB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: YB.F,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function yB(BB, OB, GB) {
      const YB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!YB) return jB;
      const QB = {},
        oB = {};
      for (const jB of DB) {
        const BB = YB.querySelector(`.TouchSlot${jB} > .TouchKey`);
        if (BB) {
          var yB, JB;
          QB[jB] = BB.cloneNode(!0);
          const OB = (null !== (yB = null === (JB = BB.querySelector(".TouchKeyLabel")) || void 0 === JB ? void 0 : JB.textContent) && void 0 !== yB ? yB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          OB && (oB[jB] = OB)
        }
      }
      const MB = OB => {
          const GB = BB.querySelector(`.InGameUi ${OB}`);
          return null !== GB && !GB.classList.contains("Hidden")
        },
        PB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(QB).length > 0 ? QB : null,
        names: oB,
        shop: MB(".TouchInventoryKey.ShopKey"),
        bag: MB(".TouchInventoryKey.BagKey"),
        sprint: MB(".TouchSprintHit"),
        items: PB.length > 0 ? PB : null,
        rowIcons: OB,
        pinnedIcons: GB
      }
    }

    function JB(BB, OB) {
      const GB = {};
      for (const YB of [...oB(OB), "G"]) {
        const OB = BB.names[YB];
        OB && (GB[QB[YB]] = OB)
      }
      return GB
    }

    function MB(BB, OB) {
      const {
        faces: GB
      } = BB;
      if (null === GB) return [];
      const YB = new Set(Object.keys(GB).map((BB => QB[BB])));
      return oB(OB).filter((BB => !YB.has(QB[BB])))
    }

    function PB(BB, OB) {
      BB.replaceChildren(...[...OB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  9562: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => JB
    });
    var YB = GB(9553),
      DB = GB(9549),
      QB = GB(2679),
      oB = GB(2682);
    const jB = 2,
      yB = (BB, OB, GB) => {
        const YB = (0, DB.q)(OB).includes(BB) ? BB : (0, DB.q)(BB).includes(OB) ? OB : null;
        if (null === YB || "joystick" === YB) return !1;
        const jB = YB === BB ? OB : BB;
        if ("menu" === YB) return (0, oB.y)(jB, GB.hudElements[jB]);
        if ("hotbar" !== YB || !(0, DB.y)(jB)) return !0;
        if ((0, QB.P)(GB.hudElements[jB]) || (0, QB.P)(GB.hudElements.inventory)) return !1;
        return !(GB.hudLocked.includes(jB) || GB.hudLocked.includes("inventory")) || (0, QB.N)(GB.hudElements.hotbar)
      };

    function JB(BB, OB, GB, JB) {
      const MB = BB => (0, DB.H)(BB).some((BB => (0, QB.t)(GB.hudElements, BB) || (0, oB.w)(BB, GB, JB)));
      if (MB(BB)) return [];
      const PB = BB => {
          var OB, YB;
          return "bag" === BB && 1 !== (null !== (OB = null === (YB = GB.hudElements.shop) || void 0 === YB ? void 0 : YB[2]) && void 0 !== OB ? OB : 1) || (0, DB.H)(BB).some((BB => void 0 !== GB.hudElements[BB]))
        },
        zB = DB.m.get(BB),
        lB = OB.filter((OB => {
          let {
            id: GB
          } = OB;
          return zB ? zB.has(GB) && !MB(GB) : GB === BB
        })),
        pB = new Set;
      for (const DB of OB) DB.id === BB || null !== zB && void 0 !== zB && zB.has(DB.id) || pB.has(DB.id) || MB(DB.id) || lB.some((BB => {
        let {
          id: OB,
          box: QB
        } = BB;
        return !yB(OB, DB.id, GB) && (PB(OB) || PB(DB.id)) && (0, YB.o)(QB, DB.box, jB)
      })) && pB.add(DB.id);
      return [...pB]
    }
  },
  9469: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      C: () => lB,
      d: () => QB,
      f: () => jB,
      g: () => JB,
      i: () => yB,
      j: () => oB,
      l: () => DB,
      o: () => YB,
      r: () => pB,
      u: () => PB,
      x: () => MB
    });
    const YB = 14,
      DB = 6,
      QB = (YB + DB) / 2,
      oB = 200,
      jB = oB / 2,
      yB = oB / 2 - 1,
      JB = DB / YB * (oB / 2),
      MB = (BB, OB) => -Math.PI / 2 + 2 * BB * Math.PI / OB,
      PB = (BB, OB, GB) => {
        const YB = 2 * Math.PI / GB;
        return (Math.round((Math.atan2(OB, BB) + Math.PI / 2) / YB) % GB + GB) % GB
      },
      zB = .5,
      lB = (BB, OB, GB) => Math.hypot(BB.x, BB.y) < zB ? GB : PB(BB.x, BB.y, OB),
      pB = (BB, OB, GB, YB, DB) => {
        const QB = Math.PI / OB,
          oB = MB(BB, OB),
          jB = oB - QB,
          yB = oB + QB,
          JB = (BB, OB) => `${GB+BB*Math.cos(OB)} ${GB+BB*Math.sin(OB)}`;
        return [`M ${JB(YB,jB)}`, `L ${JB(DB,jB)}`, `A ${DB} ${DB} 0 0 1 ${JB(DB,yB)}`, `L ${JB(YB,yB)}`, `A ${YB} ${YB} 0 0 0 ${JB(YB,jB)}`, "Z"].join(" ")
      }
  },
  9498: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(56),
      DB = GB(9439),
      QB = GB(2653);

    function oB() {
      const BB = (0, QB.g)("shopInfo"),
        [, OB] = (0, YB.useReducer)((BB => BB + 1), 0);
      return (0, QB.f)("shopInfo", OB), !(0, DB.e)(BB)
    }
  },
  8896: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => QB,
      j: () => zB,
      k: () => PB,
      o: () => JB,
      q: () => jB,
      s: () => YB,
      w: () => lB,
      x: () => pB
    });
    const YB = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      DB = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: YB
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      QB = {
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
      oB = ["pickBlock", "perspective"],
      jB = BB => oB.includes(BB) ? oB : [BB],
      yB = Object.fromEntries(DB.flatMap((BB => {
        let {
          group: OB,
          actions: GB
        } = BB;
        return GB.map((BB => [BB, OB]))
      }))),
      JB = BB => yB[BB],
      MB = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      PB = BB => {
        var OB;
        return [JB(BB), ...null !== (OB = MB[BB]) && void 0 !== OB ? OB : []]
      },
      zB = new Set(["menu", "inventory", "keyboard"]),
      lB = {
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
      pB = new Set(["forward", "backward", "left", "right"])
  },
  8890: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => UB,
      E: () => WB,
      H: () => kB,
      L: () => MB,
      N: () => fB,
      O: () => uB,
      c: () => RB,
      e: () => VB,
      h: () => zB,
      i: () => lB,
      m: () => IB,
      p: () => KB,
      s: () => dB,
      v: () => AB,
      y: () => mB
    });
    var YB = GB(8896),
      DB = GB(8902),
      QB = GB(8878),
      oB = GB(8913);
    const jB = BB => "pickBlock" === BB ? "perspective" : BB,
      yB = (BB, OB) => {
        var GB;
        const DB = jB(OB);
        return null !== (GB = BB[DB]) && void 0 !== GB ? GB : YB.f[DB]
      },
      JB = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((BB => {
        let [OB, GB] = BB;
        return [
          [OB, GB],
          [GB, OB]
        ]
      }))),
      MB = (BB, OB) => null !== BB && void 0 !== BB ? BB : "nintendo" === OB,
      PB = BB => MB((0, DB.k)().swapConfirmBack, (0, DB.o)()) && JB.get(BB) || BB,
      zB = BB => yB((0, DB.k)().bindings, PB(BB)),
      lB = BB => YB.f[PB(BB)],
      pB = Object.keys(YB.f),
      qB = BB => "gameplay" === (0, YB.o)(BB) ? ["gameplay"] : (0, YB.k)(BB),
      ZB = (BB, OB) => {
        const GB = qB(OB);
        return qB(BB).some((BB => GB.includes(BB)))
      },
      NB = (BB, OB, GB) => {
        const DB = yB(BB, OB),
          oB = new Set((0, YB.q)(OB)),
          JB = [...oB];
        for (let YB = JB.pop(); YB; YB = JB.pop())
          for (const OB of pB) {
            const QB = yB(BB, OB);
            oB.has(OB) || QB !== GB && QB !== DB || !ZB(YB, OB) || (oB.add(OB), JB.push(OB))
          }
        const MB = {
          ...BB
        };
        for (const PB of oB) {
          const OB = yB(BB, PB) === DB ? GB : DB,
            oB = (0, YB.k)(PB).some((BB => YB.j.has(BB)));
          if ((0, QB.L)(OB) && oB) return null;
          MB[jB(PB)] = OB
        }
        for (const QB of Object.keys(MB)) MB[QB] === YB.f[QB] && delete MB[QB];
        return MB
      },
      RB = (BB, OB) => null !== NB((0, DB.k)().bindings, PB(BB), OB),
      WB = (BB, OB) => {
        if (zB(BB) === OB) return !0;
        const GB = NB((0, DB.k)().bindings, PB(BB), OB);
        return !!GB && ((0, DB.q)({
          bindings: GB
        }), !0)
      },
      AB = (BB, OB) => {
        const GB = (0, YB.q)(OB);
        return pB.filter((OB => jB(OB) === OB && !GB.includes(OB) && yB(BB, PB(OB)) !== zB(OB)))
      },
      VB = ["southpaw", "triggersSwapped"],
      SB = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      nB = BB => Object.keys(SB[BB]),
      UB = (BB, OB) => "southpaw" === BB ? OB.swapSticks : nB(BB).every((GB => yB(OB.bindings, GB) === SB[BB][GB])),
      fB = (BB, OB) => {
        const GB = (0, DB.k)();
        let QB = GB.bindings;
        for (const DB of nB(BB)) {
          const GB = OB ? SB[BB][DB] : YB.f[DB];
          if (QB = NB(QB, DB, GB), !QB) return !1
        }
        return (0, DB.q)({
          swapSticks: "southpaw" === BB ? OB : GB.swapSticks,
          bindings: QB
        }), !0
      },
      kB = () => {
        (0, DB.q)({
          swapSticks: !1,
          bindings: {}
        })
      },
      dB = () => (0, DB.k)().swapSticks ? "RightStick" : "LeftStick",
      KB = () => (0, DB.k)().swapSticks ? "LeftStick" : "RightStick",
      uB = BB => (0, DB.k)().swapSticks && (0, QB.L)(BB),
      mB = BB => uB(BB) ? dB() : KB(),
      IB = BB => {
        if (YB.x.has(BB)) return dB();
        const OB = YB.w[BB];
        return OB && ("leaderboard" !== OB || (0, oB.d)(BB, (0, oB.c)())) ? zB(OB) : null
      }
  },
  8863: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ControllerCategory: () => Aj,
      ControllerGlyph: () => SD,
      ControllerRoot: () => Wo,
      PadLobbyShortcuts: () => ro,
      PadSneakChip: () => ko,
      PadTooltip: () => uo,
      attachPressToContinue: () => To,
      getBoundButton: () => MB.h,
      getControllerSettings: () => zB.k,
      getGlyphForNoaAction: () => MB.m,
      getInventoryCursorState: () => Sj,
      getMenuShortcutButton: () => eG,
      getPadGlyphIconName: () => no,
      getPadGlyphIconUrl: () => Uo,
      getPadRepeatTiming: () => qB.h,
      handOverPadFocus: () => Uj,
      hasActivePad: () => Vj,
      isPadSteppingSlots: () => nj
    });
    const YB = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var DB = GB(1175),
      QB = GB(1450),
      oB = GB(8870),
      jB = GB(70),
      yB = GB(16),
      JB = GB(25),
      MB = GB(8890),
      PB = GB(8915),
      zB = GB(8902),
      lB = GB(8919),
      pB = GB(8878),
      qB = GB(9328),
      ZB = GB(9337),
      NB = GB(1730);
    const RB = (BB, OB, GB) => Math.max(OB, Math.min(GB, BB)),
      WB = BB => Math.min(BB.width, BB.height) / 720,
      AB = BB => Math.max(.15, BB);
    class VB {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(BB, OB) {
        const GB = Math.hypot(BB.x, BB.y) >= (BB => Math.max(.3, BB))(OB);
        return this.locked ? (this.locked = GB, !1) : GB
      }
    }
    const SB = (BB, OB) => {
        const GB = RB(OB.dtMs, 0, 100),
          YB = GB / 1e3,
          DB = WB(OB.viewport) * (OB.cursorSpeedPercent / 100),
          QB = (0, pB.n)(OB.stick, AB(OB.moveDeadzone)),
          oB = Math.hypot(QB.x, QB.y),
          jB = ((BB, OB, GB) => {
            if (OB < .3) return 0;
            const YB = GB / 350;
            return OB >= .85 ? Math.min(1, BB + YB) : Math.max(0, BB - YB)
          })(BB.speedRamp, oB, GB);
        let yB = BB.x,
          JB = BB.y;
        if (oB > 0) {
          const BB = .45 + .55 * jB,
            GB = OB.context.overInteractive ? .45 : 1,
            MB = 1400 * (BB => {
              const OB = RB(BB, 0, 1);
              return .3 * OB + .7 * OB * OB
            })(oB) * DB * BB * GB;
          yB += QB.x / oB * MB * YB, JB += QB.y / oB * MB * YB
        }
        const MB = Math.hypot(OB.dpad.x, OB.dpad.y);
        if (MB > 0) {
          const BB = 500 * DB;
          yB += OB.dpad.x / MB * BB * YB, JB += OB.dpad.y / MB * BB * YB
        }
        const PB = OB.context.magnetTarget;
        if (PB && oB < .3 && 0 === MB) {
          const BB = ((BB, OB, GB, YB, DB) => {
            const QB = OB.x - BB.x,
              oB = OB.y - BB.y,
              jB = Math.hypot(QB, oB);
            if (0 === jB) return {
              x: 0,
              y: 0
            };
            const yB = Math.min(jB, DB * (1 - YB / .3));
            let JB = QB / jB * yB,
              MB = oB / jB * yB;
            if (YB > 0) {
              const BB = GB.x / YB,
                OB = GB.y / YB,
                DB = JB * BB + MB * OB;
              DB < 0 && (JB -= DB * BB, MB -= DB * OB)
            }
            return {
              x: JB,
              y: MB
            }
          })({
            x: yB,
            y: JB
          }, PB, QB, oB, 120 * WB(OB.viewport) * YB);
          yB += BB.x, JB += BB.y
        }
        return {
          x: RB(yB, 0, Math.max(0, OB.viewport.width - 1)),
          y: RB(JB, 0, Math.max(0, OB.viewport.height - 1)),
          speedRamp: jB
        }
      },
      nB = BB => {
        const OB = (0, pB.n)(BB, .2);
        return 0 !== OB.x || 0 !== OB.y
      },
      UB = (BB, OB) => {
        const GB = (0, pB.n)(BB, .2),
          YB = Math.hypot(GB.x, GB.y);
        if (0 === YB) return {
          x: 0,
          y: 0
        };
        const DB = YB * YB * 1600,
          QB = RB(OB, 0, 100) / 1e3;
        return {
          x: GB.x / YB * DB * QB,
          y: GB.y / YB * DB * QB
        }
      },
      fB = (BB, OB) => "y" === OB ? BB.scrollHeight > BB.clientHeight + 1 : BB.scrollWidth > BB.clientWidth + 1,
      kB = (BB, OB) => {
        if (!fB(BB, OB)) return !1;
        const GB = getComputedStyle(BB),
          YB = "y" === OB ? GB.overflowY : GB.overflowX;
        return "auto" === YB || "scroll" === YB
      },
      dB = (BB, OB, GB) => {
        for (let QB = BB instanceof HTMLElement ? BB : null !== (YB = null === BB || void 0 === BB ? void 0 : BB.parentElement) && void 0 !== YB ? YB : null; QB; QB = QB.parentElement) {
          var YB;
          if (kB(QB, OB)) return QB;
          if (QB === GB) return null
        }
        if (GB) return null;
        const DB = document.scrollingElement;
        return DB instanceof HTMLElement && fB(DB, OB) ? DB : null
      },
      KB = new WeakMap,
      uB = (BB, OB) => {
        const GB = performance.now(),
          YB = KB.get(BB);
        if (YB && YB.axis === OB && GB - YB.atMs < 500 && (!YB.container || YB.container.isConnected)) return YB.container;
        const DB = mB(BB, OB);
        return KB.set(BB, {
          axis: OB,
          atMs: GB,
          container: DB
        }), DB
      },
      mB = (BB, OB) => {
        let GB = kB(BB, OB) ? BB : null,
          YB = GB ? GB.clientWidth * GB.clientHeight : 0;
        for (const DB of BB.querySelectorAll("*")) {
          const BB = DB.clientWidth * DB.clientHeight;
          BB > YB && kB(DB, OB) && (GB = DB, YB = BB)
        }
        return GB
      },
      IB = (BB, OB, GB) => "y" === OB ? GB < 0 ? BB.scrollTop > 0 : BB.scrollTop + BB.clientHeight < BB.scrollHeight - 1 : GB < 0 ? BB.scrollLeft > 0 : BB.scrollLeft + BB.clientWidth < BB.scrollWidth - 1,
      FB = (BB, OB, GB) => {
        "y" === OB ? BB.scrollBy({
          top: GB,
          behavior: "instant"
        }) : BB.scrollBy({
          left: GB,
          behavior: "instant"
        })
      },
      iB = BB => {
        if (!BB || BB === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const OB = BB.getBoundingClientRect(),
          GB = Math.max(0, OB.left),
          YB = Math.max(0, OB.top);
        return new DOMRect(GB, YB, Math.min(window.innerWidth, OB.right) - GB, Math.min(window.innerHeight, OB.bottom) - YB)
      },
      LB = (BB, OB) => BB.left < OB.right && OB.left < BB.right && BB.top < OB.bottom && OB.top < BB.bottom;
    var gB = GB(56),
      rB = GB(1090),
      XB = GB.n(rB),
      wB = GB(1282);
    let EB = 0,
      cB = !1;
    class hB {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(BB) {
        this.element = BB, this.shownKey = "", this.gap = null
      }
      show(BB) {
        const OB = this.element;
        if (!OB) return;
        const GB = BB ? this.keepOnScreen(OB, BB) : null,
          YB = GB ? `${GB.left},${GB.top},${GB.width},${GB.height}` : "";
        if (YB === this.shownKey) return;
        const DB = "" === this.shownKey;
        this.shownKey = YB, OB.classList.toggle("Visible", null !== GB), GB && (OB.classList.toggle("Snap", DB), OB.style.width = `${GB.width}px`, OB.style.height = `${GB.height}px`, OB.style.transform = `translate(${GB.left}px, ${GB.top}px)`, DB && (OB.offsetWidth, OB.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(BB, OB) {
        var GB;
        const YB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!cB){cB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(BB),new ResizeObserver((()=>{EB++})).observe(BB)}return String(EB)})()}`;
        (null === (GB = this.gap) || void 0 === GB ? void 0 : GB.key) !== YB && (this.gap = {
          px: parseFloat(getComputedStyle(BB).paddingLeft) || 0,
          key: YB
        });
        const DB = this.gap.px + 2,
          QB = Math.max(OB.left, DB),
          oB = Math.max(OB.top, DB),
          jB = Math.min(OB.left + OB.width, window.innerWidth - DB),
          yB = Math.min(OB.top + OB.height, window.innerHeight - DB);
        return jB <= QB || yB <= oB ? OB : {
          left: QB,
          top: oB,
          width: jB - QB,
          height: yB - oB
        }
      }
    }
    const aB = BB => {
      let {
        placer: OB,
        className: GB
      } = BB;
      const YB = (0, gB.useCallback)((BB => {
        OB.setElement(BB)
      }), [OB]);
      return (0, wB.jsx)("div", {
        ref: YB,
        className: XB()("PadReticle", GB),
        "aria-hidden": !0
      })
    };
    var eB = GB(9344);
    const TB = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const bB = new class {
      constructor() {
        this.state = TB, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(BB) {
        if (OB = this.state, GB = BB, (OB.visible || GB.visible) && (OB.visible !== GB.visible || OB.x !== GB.x || OB.y !== GB.y || OB.pressed !== GB.pressed)) {
          var OB, GB;
          this.state = BB;
          for (const OB of this.listeners) OB(BB)
        }
      }
      hide() {
        this.set(TB)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    };
    var CB = GB(9354);
    const HB = (BB, OB) => {
        let {
          kind: GB,
          holding: YB,
          hasPress: DB,
          hasBack: QB,
          slotHasItem: oB
        } = OB;
        switch (BB) {
          case "primary":
            return "slot" === GB ? "slotPrimary" : "recipe" === GB || "button" === GB ? DB ? "pressPrimary" : "click" : "textField" === GB ? "openKeyboard" : null;
          case "secondary":
            return "slot" === GB ? "slotSecondary" : "button" !== GB && "recipe" !== GB || !DB ? null : "pressSecondary";
          case "quickMove":
            return "slot" === GB && oB ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === GB && oB && !YB ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return YB ? "cancel" : QB ? "pressBack" : "close"
        }
      },
      vB = BB => {
        const OB = [];
        if (BB.hotbarPicking) return OB.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), OB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), OB;
        if (BB.holding) "slot" === BB.kind ? (OB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), OB.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === BB.kind && OB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), OB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), OB.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), BB.openButtonCloses && OB.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var GB;
          "slot" === BB.kind && BB.slotHasItem ? (OB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), OB.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), OB.push({
            actions: ["inventoryQuickMove"],
            labelKey: BB.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), OB.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), OB.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== BB.kind && "recipe" !== BB.kind || !BB.pressHints ? "button" === BB.kind || "recipe" === BB.kind ? OB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === BB.kind && OB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (BB.pressHints.primary && OB.push({
            actions: ["inventoryPrimary"],
            labelKey: BB.pressHints.primary
          }), BB.pressHints.secondary && OB.push({
            actions: ["inventorySecondary"],
            labelKey: BB.pressHints.secondary
          }));
          const YB = null === (GB = BB.pressHints) || void 0 === GB ? void 0 : GB.back;
          YB && OB.push({
            actions: ["inventoryClose"],
            labelKey: YB
          });
          const DB = [];
          BB.openButtonCloses && DB.push("inventory"), YB || DB.push("inventoryClose"), DB.length > 0 && OB.push({
            actions: DB,
            labelKey: "inventoryClose"
          })
        }
        return OB.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), BB.hasCategories ? OB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : BB.hasList && OB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), OB
      };
    var sB = GB(9363),
      xB = GB(2575);
    class tB {
      constructor(BB) {
        this.probes = BB, this.byContainer = new Map, this.byParent = new Map
      }
      find(BB, OB) {
        const GB = dB(BB, "y", OB);
        if (!GB) return null;
        let YB = this.byContainer.get(GB);
        return YB || (this.probes.push({
          element: GB,
          rect: YO(GB.getBoundingClientRect())
        }), YB = {
          container: GB,
          box: iB(GB),
          group: GO(GB)
        }, this.byContainer.set(GB, YB)), YB
      }
      findForParent(BB, OB) {
        let GB = this.byParent.get(BB);
        return void 0 === GB && (GB = this.find(BB, OB), this.byParent.set(BB, GB)), GB
      }
    }
    const BO = new WeakMap;
    let OO = 0;
    const GO = BB => {
        let OB = BO.get(BB);
        return OB || (OB = "el:" + OO++, BO.set(BB, OB)), OB
      },
      YO = BB => ({
        left: BB.left,
        top: BB.top,
        width: BB.width,
        height: BB.height
      }),
      DO = BB => BB.width > 0 && BB.height > 0,
      QO = (BB, OB) => DO(BB) && BB.left + BB.width > 0 && BB.top + BB.height > 0 && BB.left < OB.width && BB.top < OB.height,
      oO = (BB, OB, GB) => {
        const YB = BB.top + BB.height / 2;
        return QO(BB, OB) && (!GB || YB >= GB.top && YB <= GB.bottom)
      },
      jO = BB => ({
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }),
      yO = (BB, OB, GB) => BB < 0 ? GB >= 0 ? 0 : OB - 1 : ((BB + GB) % OB + OB) % OB,
      JO = BB => "Left" === BB || "Right" === BB,
      MO = (BB, OB, GB) => {
        const YB = JO(GB),
          DB = YB ? BB.top : BB.left,
          QB = YB ? BB.height : BB.width,
          oB = YB ? OB.top : OB.left,
          jB = YB ? OB.height : OB.width,
          yB = Math.max(0, Math.max(oB - (DB + QB), DB - (oB + jB)));
        return QB > 1.5 * jB ? {
          gap: yB,
          offset: Math.max(0, oB - DB) + .1 * Math.max(0, DB - oB)
        } : {
          gap: yB,
          offset: Math.abs(oB + jB / 2 - (DB + QB / 2))
        }
      },
      PO = (BB, OB, GB) => {
        const YB = ((BB, OB, GB) => {
          const YB = jO(BB),
            DB = jO(OB),
            QB = JO(GB) ? Math.min(BB.width, OB.width) / 4 : Math.min(BB.height, OB.height) / 4;
          switch (GB) {
            case "Right":
              return DB.x - YB.x >= QB ? Math.max(0, OB.left - (BB.left + BB.width)) : null;
            case "Left":
              return YB.x - DB.x >= QB ? Math.max(0, BB.left - (OB.left + OB.width)) : null;
            case "Down":
              return DB.y - YB.y >= QB ? Math.max(0, OB.top - (BB.top + BB.height)) : null;
            case "Up":
              return YB.y - DB.y >= QB ? Math.max(0, BB.top - (OB.top + OB.height)) : null
          }
        })(BB, OB, GB);
        if (null === YB) return null;
        const DB = MO(BB, OB, GB);
        return YB + 3 * DB.gap + .5 * DB.offset
      },
      zO = (BB, OB) => OB.visible || null !== OB.scrollGroup && OB.scrollGroup === BB.scrollGroup,
      lO = (BB, OB, GB, YB) => {
        let DB = null,
          QB = 1 / 0;
        for (const oB of OB) {
          if (oB.key === BB.key || !zO(BB, oB) || !YB(oB)) continue;
          const OB = PO(BB.rect, oB.rect, GB);
          null !== OB && OB < QB && (DB = oB, QB = OB)
        }
        return DB
      },
      pO = (BB, OB, GB) => {
        const YB = lO(BB, OB, GB, (() => !0));
        if (!YB || JO(GB) || null === BB.scrollGroup || YB.scrollGroup === BB.scrollGroup) return YB;
        const DB = lO(BB, OB, GB, (OB => 0 === MO(BB.rect, OB.rect, GB).gap));
        return null !== DB && void 0 !== DB ? DB : YB
      },
      qO = (BB, OB, GB) => {
        let YB = null,
          DB = 1 / 0;
        for (const QB of OB) {
          if (!QB.visible || GB && !GB(QB)) continue;
          const OB = jO(QB.rect),
            oB = Math.hypot(OB.x - BB.x, OB.y - BB.y);
          oB < DB && (YB = QB, DB = oB)
        }
        return YB
      },
      ZO = BB => {
        const {
          rect: OB,
          clip: GB
        } = BB;
        if (!GB) return OB;
        const YB = Math.max(OB.left, GB.left),
          DB = Math.max(OB.top, GB.top);
        return {
          left: YB,
          top: DB,
          width: Math.min(OB.left + OB.width, GB.left + GB.width) - YB,
          height: Math.min(OB.top + OB.height, GB.top + GB.height) - DB
        }
      },
      NO = (BB, OB) => OB.x >= BB.left && OB.x < BB.left + BB.width && OB.y >= BB.top && OB.y < BB.top + BB.height,
      RO = (BB, OB) => {
        let GB = null,
          YB = 1 / 0;
        for (const DB of OB) {
          const OB = ZO(DB);
          (DB.visible || DB.clip) && NO(OB, BB) && (OB.width * OB.height < YB && (GB = DB, YB = OB.width * OB.height))
        }
        return GB
      },
      WO = BB => {
        let OB = null;
        for (const GB of BB) {
          if (!GB.visible) continue;
          if (!OB) {
            OB = GB;
            continue
          }
          const BB = Math.min(OB.rect.height, GB.rect.height) / 2,
            YB = GB.rect.top - OB.rect.top;
          (YB < -BB || Math.abs(YB) <= BB && GB.rect.left < OB.rect.left) && (OB = GB)
        }
        return OB
      },
      AO = (BB, OB, GB, YB, DB) => {
        const QB = DB % OB,
          oB = Math.floor(DB / OB);
        return {
          left: BB.left + QB * GB,
          top: BB.top + oB * YB,
          width: BB.width,
          height: BB.height
        }
      },
      VO = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      SO = ".LazyLoadedItemWrapper",
      nO = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      UO = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      fO = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      kO = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, xB.x)(BB) ? "info" : (0, eB.I)(BB) ? "textField" : "button",
      dO = (BB, OB) => "slot" === OB ? Number(BB.getAttribute("data-inven-idx")) : null,
      KO = BB => BB.matches(SO) ? BB.querySelector(nO) : BB,
      uO = BB => {
        var OB, GB;
        return {
          element: BB,
          recipe: null !== (OB = BB && (null === (GB = KO(BB)) || void 0 === GB ? void 0 : GB.getAttribute("data-recipe-key"))) && void 0 !== OB ? OB : null
        }
      },
      mO = BB => {
        const OB = KO(BB);
        if (!OB) return {
          kind: "pending",
          idx: null
        };
        const GB = kO(OB);
        return {
          kind: GB,
          idx: dO(OB, GB)
        }
      },
      IO = BB => {
        const OB = [];
        for (const [GB, YB] of UO) {
          BB.matches(YB) && OB.push([GB, BB]);
          for (const DB of BB.querySelectorAll(YB)) OB.push([GB, DB])
        }
        return OB
      },
      FO = (BB, OB) => {
        for (const [GB, YB] of BB)
          if (YB.contains(OB)) return GB;
        return "other"
      },
      iO = (BB, OB, GB, YB, DB, QB, oB, jB) => {
        var yB;
        const JB = BB.children,
          MB = YO(JB[0].getBoundingClientRect()),
          PB = [{
            element: JB[0],
            rect: MB
          }];
        if (QB.push(PB[0]), 0 === MB.width || 0 === MB.height) return;
        let zB = 1;
        for (; zB < JB.length && Math.abs(JB[zB].getBoundingClientRect().top - MB.top) < 1;) zB++;
        const lB = BB => {
            const OB = {
              element: JB[BB],
              rect: YO(JB[BB].getBoundingClientRect())
            };
            return QB.push(OB), PB.push(OB), OB.rect
          },
          pB = zB > 1 ? lB(1).left - MB.left : MB.width,
          qB = JB.length > zB ? lB(zB).top - MB.top : MB.height,
          ZB = oB.find(BB, OB);
        let NB = null;
        if (ZB) {
          var RB;
          const {
            container: BB,
            box: OB
          } = ZB;
          NB = null !== (RB = jB.get(BB)) && void 0 !== RB ? RB : null, NB || (NB = {
            top: BB.scrollTop,
            left: BB.scrollLeft,
            box: OB,
            viewport: YB,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, jB.set(BB, NB)), NB.probes.push(...PB)
        }
        const WB = DB.length;
        for (let nB = 0; nB < JB.length; nB++) {
          var AB, VB, SB;
          const BB = JB[nB],
            OB = AO(MB, zB, pB, qB, nB),
            QB = BB.firstElementChild ? BB.querySelector(nO) : null,
            oB = QB ? kO(QB) : "pending";
          DB.push({
            key: GO(BB),
            rect: OB,
            panel: GB,
            scrollGroup: null !== (AB = null === ZB || void 0 === ZB ? void 0 : ZB.group) && void 0 !== AB ? AB : null,
            visible: oO(OB, YB, null === ZB || void 0 === ZB ? void 0 : ZB.box),
            clip: null !== (VB = null === ZB || void 0 === ZB ? void 0 : ZB.box) && void 0 !== VB ? VB : null,
            element: BB,
            kind: oB,
            idx: QB ? dO(QB, oB) : null,
            scrollContainer: null !== (SB = null === ZB || void 0 === ZB ? void 0 : ZB.container) && void 0 !== SB ? SB : null
          })
        }
        null === (yB = NB) || void 0 === yB || yB.targets.push(...DB.slice(WB))
      },
      LO = BB => BB instanceof Element && null !== BB.closest(SO),
      gO = BB => null !== BB.scrollContainer && LO(BB.element);
    class rO {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(BB, OB, GB, YB) {
        this.latched = {
          source: BB,
          focusKey: OB,
          sinceMs: GB,
          hold: {
            id: ++this.presses,
            holdMs: YB
          }
        }
      }
      update(BB, OB, GB) {
        const YB = this.latched;
        return YB ? BB && OB === YB.focusKey ? GB - YB.sinceMs < YB.hold.holdMs ? null : (this.latched = null, YB.source) : (this.latched = null, null) : null
      }
      getHold() {
        var BB, OB;
        return null !== (BB = null === (OB = this.latched) || void 0 === OB ? void 0 : OB.hold) && void 0 !== BB ? BB : null
      }
      reset() {
        this.latched = null
      }
    }
    var XO = GB(9365);
    const wO = {
        kind: "none"
      },
      EO = BB => ({
        x: BB.clientX,
        y: BB.clientY
      }),
      cO = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class hO {
      constructor() {
        this.hovered = wO, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(BB, OB, GB, YB, DB) {
        const QB = null !== OB ? {
            kind: "slot",
            idx: OB
          } : GB ? {
            kind: "element",
            element: GB
          } : wO,
          oB = `${DB}|${Math.round(YB.clientX)},${Math.round(YB.clientY)}`,
          jB = (yB = this.hovered, JB = QB, "slot" === yB.kind && "slot" === JB.kind ? yB.idx === JB.idx : "element" === yB.kind && "element" === JB.kind ? yB.element === JB.element : yB.kind === JB.kind);
        var yB, JB;
        if (jB && oB === this.signature) return;
        const MB = !jB || DB !== this.holding || "" === this.signature;
        this.signature = oB, this.holding = DB, this.lastPoint = YB;
        const PB = this.hovered;
        if (this.hovered = QB, "slot" === QB.kind) return this.leaveElement(PB, null, YB), void(MB ? BB.hover(QB.idx, YB) : BB.moveTo(YB));
        if (jB) return void("element" === QB.kind ? (0, eB.p)(QB.element, QB.element, EO(YB)) : BB.hover(null, YB));
        BB.hover(null, YB);
        const zB = "element" === QB.kind ? QB.element : null;
        "element" === PB.kind ? (0, eB.p)(PB.element, zB, EO(YB)) : zB && (0, eB.p)(null, zB, EO(YB))
      }
      invalidate() {
        this.signature = ""
      }
      clear(BB) {
        const OB = this.hovered;
        this.hovered = wO, this.signature = "", "none" !== OB.kind && (this.leaveElement(OB, null, this.lastPoint), BB && "slot" === OB.kind && BB.hover(null, this.lastPoint))
      }
      leaveElement(BB, OB, GB) {
        "element" === BB.kind && (0, eB.p)(BB.element, OB, EO(GB))
      }
    }
    class aO {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(BB, OB) {
        nB(BB) && (this.lastTiltedMs = OB)
      }
      allowsClick(BB) {
        return BB - this.lastTiltedMs > 150
      }
    }
    class eO {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(BB) {
        return 0 !== (0, pB.n)(BB, .2).y
      }
      step(BB, OB, GB) {
        BB !== this.container && (this.container = BB, this.remainder = 0);
        const YB = UB(OB, GB).y;
        if (0 === YB) return this.remainder = 0, !1;
        const DB = this.remainder + YB,
          QB = Math.trunc(DB);
        if (this.remainder = DB - QB, 0 === QB) return !1;
        const oB = BB.scrollTop;
        return BB.scrollTop = oB + QB, BB.scrollTop !== oB
      }
      current() {
        var BB;
        return null !== (BB = this.container) && void 0 !== BB && BB.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var TO = GB(9370);
    const bO = "[data-pad-inventory-default]",
      CO = ".HotBarGameItemsContainer .InvenItem.Selected",
      HO = {
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
      vO = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      sO = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      xO = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      tO = [...sO, ...xO],
      BG = () => {
        return BB = (0, MB.h)("inventory"), !tO.map(MB.h).includes(BB) && !(0, pB.L)(BB);
        var BB
      },
      OG = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      GG = (BB, OB) => {
        const GB = !(null === OB || void 0 === OB || !OB.isHolding());
        return function(BB, OB) {
          const GB = BB.find((BB => BB.visible && OB(BB)));
          if (GB) return GB;
          for (var YB = arguments.length, DB = new Array(YB > 2 ? YB - 2 : 0), QB = 2; QB < YB; QB++) DB[QB - 2] = arguments[QB];
          for (const oB of DB) {
            const OB = WO(BB.filter(oB));
            if (OB) return OB
          }
          return WO(BB)
        }(BB, (BB => {
          const {
            element: OB
          } = BB;
          return OB.matches(bO) || null !== OB.querySelector(bO) || OB.matches(CO)
        }), (BB => "slot" === BB.kind ? GB || null !== BB.idx && !(null === OB || void 0 === OB || !OB.hasItemAt(BB.idx)) : "recipe" === BB.kind || "pending" === BB.kind), (BB => "slot" === BB.kind || "button" === BB.kind))
      };
    class YG {
      constructor() {
        this.set = null, this.observer = new MutationObserver((BB => {
          BB.some((BB => !LO(BB.target))) && (this.set = null)
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
              OB = [];
            let GB = !1;
            const YB = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              DB = new Map,
              QB = new tB(OB);
            for (const PB of document.querySelectorAll(VO)) {
              const MB = IO(PB);
              GB ||= null !== PB.querySelector(".CreativeCategoryTab");
              for (const GB of PB.querySelectorAll(`${SO}:first-child`)) {
                const oB = GB.parentElement;
                iO(oB, PB, FO(MB, oB), YB, BB, OB, QB, DB)
              }
              for (const GB of PB.querySelectorAll(nO)) {
                var oB, jB, yB, JB;
                if (GB.closest(SO) || GB.closest("[data-pad-ignore]")) continue;
                const zB = null === (oB = GB.parentElement) || void 0 === oB ? void 0 : oB.closest(nO);
                if (zB && PB.contains(zB)) continue;
                const lB = kO(GB),
                  pB = dO(GB, lB);
                if (-1 === pB) continue;
                const qB = YO(GB.getBoundingClientRect());
                OB.push({
                  element: GB,
                  rect: qB
                });
                const ZB = QB.findForParent(GB.parentElement, PB),
                  NB = ZB && !DB.has(ZB.container) ? ZB : null;
                (NB ? DO(qB) : QO(qB, YB)) && BB.push({
                  key: GO(GB),
                  rect: qB,
                  panel: FO(MB, GB),
                  scrollGroup: null !== (jB = null === NB || void 0 === NB ? void 0 : NB.group) && void 0 !== jB ? jB : null,
                  visible: oO(qB, YB, null === NB || void 0 === NB ? void 0 : NB.box),
                  clip: null !== (yB = null === NB || void 0 === NB ? void 0 : NB.box) && void 0 !== yB ? yB : null,
                  element: GB,
                  kind: lB,
                  idx: pB,
                  scrollContainer: null !== (JB = null === NB || void 0 === NB ? void 0 : NB.container) && void 0 !== JB ? JB : null
                })
              }
            }
            for (const [PB, zB] of DB) zB.holdsOthers = OB.some((BB => BB.element !== PB && PB.contains(BB.element) && !BB.element.closest(SO)));
            const MB = new Map;
            for (const PB of BB) MB.set(PB.element, PB);
            return {
              targets: BB,
              byElement: MB,
              hasCategories: GB,
              probes: OB,
              scrollers: DB
            }
          })(), this.observer.disconnect();
          for (const BB of document.querySelectorAll(VO)) this.observer.observe(BB, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(BB) {
        !this.set || BB instanceof Element && ((BB, OB) => {
          const GB = BB.scrollers.get(OB);
          if (!GB || GB.holdsOthers || OB.scrollLeft !== GB.left) return !1;
          const YB = OB.scrollTop - GB.top;
          if (0 === YB) return !0;
          GB.top = OB.scrollTop;
          for (const DB of GB.probes) DB.rect.top -= YB;
          for (const DB of GB.targets) DB.rect.top -= YB, DB.visible = oO(DB.rect, GB.viewport, GB.box);
          return !0
        })(this.set, BB) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((BB => {
          return OB = BB.rect, GB = BB.element.getBoundingClientRect(), !(OB.left === GB.left && OB.top === GB.top && OB.width === GB.width && OB.height === GB.height);
          var OB, GB
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const DG = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(pB.G.map((BB => [BB, (0, qB.d)(pB.H)]))), this.stickRepeat = new pB.e((0, qB.d)(pB.kb)), this.pageUpTimer = (0, qB.d)(pB.eb), this.pageDownTimer = (0, qB.d)(pB.eb), this.stickGate = new VB, this.pointer = null, this.activePress = null, this.dropLatch = new rO, this.scroller = new eO, this.scrollStickClick = new aO, this.hover = new hO, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new hB, this.targets = new YG, this.hasCategories = !1, this.wasShowing = !1, this.state = XO.e, this.isActive = () => (0, sB.i)(), this.isShowing = () => "inventory" === PB.c.getActiveConsumerName() && (0, lB.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, sB.e)()), (0, sB.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var BB;
            this.reopenSlotIdx = null !== (BB = this.focused ? mO(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, sB.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = BB => {
            (0, jB.unstable_batchedUpdates)((() => {
              this.frame(BB)
            }))
          }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, NB.r)(BB) && this.isShowing(), this.noteRealPointer = BB => {
            BB instanceof MouseEvent && BB.isTrusted && !(0, NB.r)(BB) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = BB.clientX, this.lastRealPointer.y = BB.clientY)
          }, this.wakePressActs = BB => {
            var OB;
            return BB === (0, MB.h)("inventoryClose") ? !(null !== (OB = (0, sB.e)()) && void 0 !== OB && OB.isHolding()) : !(BB !== (0, MB.h)("inventory") || !BG()) || ((0, pB.L)(BB) ? this.isNavButton(BB) : xO.some((OB => (0, MB.h)(OB) === BB)))
          }
        }
        frame(BB) {
          var OB, GB, YB, DB, QB;
          const oB = (0, sB.e)();
          if (!(0, lB.k)()) return void(this.wasShowing && (this.endInteraction(oB), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === oB || void 0 === oB || !oB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, zB.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const jB = performance.now();
          this.handleNavigation(BB, jB), this.handlePanels(BB), this.handlePaging(BB, jB), this.handleScroll(BB), this.handleButtons(BB, jB, oB), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const yB = this.ensureFocus(),
            JB = this.focusContext(oB);
          this.ring.show(yB);
          const PB = "slot" === JB.kind ? JB.idx : null,
            pB = null !== (OB = null === (GB = JB.actionElement) || void 0 === GB ? void 0 : GB.querySelector(".DoCraftItem")) && void 0 !== OB ? OB : JB.actionElement;
          this.pointer ? (this.hover.sync(oB, PB, pB, ((BB, OB) => {
            const GB = OB ? cO() : 0;
            return {
              clientX: BB.x - GB,
              clientY: BB.y - GB
            }
          })(this.pointer, JB.holding), JB.holding), bB.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: BB.isHeld((0, MB.h)("inventoryPrimary"))
          })) : yB && this.focused && this.hover.sync(oB, PB, pB, ((BB, OB) => {
            if (!OB) return {
              clientX: BB.left + BB.width - 10,
              clientY: BB.top + BB.height / 2 - 10
            };
            const GB = cO();
            return {
              clientX: BB.left + BB.width / 2 - GB,
              clientY: BB.top + BB.height / 2 - GB
            }
          })(yB, JB.holding), JB.holding), this.publishState({
            showing: !0,
            kind: JB.kind,
            holding: JB.holding,
            slotHasItem: JB.slotHasItem,
            pressHints: null !== (YB = null === (DB = JB.press) || void 0 === DB ? void 0 : DB.hints) && void 0 !== YB ? YB : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && gO(this.focusTarget),
            openButtonCloses: BG(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === JB.kind && !(null === (QB = JB.actionElement) || void 0 === QB || !QB.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(BB) {
          var OB;
          const GB = (0, lB.d)();
          if (!GB) return;
          this.targets.revalidate();
          const YB = this.getTargets().targets;
          this.setFocus(null !== (OB = RO(GB, YB)) && void 0 !== OB ? OB : BB ? qO(GB, YB, (BB => {
            let {
              rect: OB
            } = BB;
            const YB = Math.max(OB.left - GB.x, 0, GB.x - (OB.left + OB.width)),
              DB = Math.max(OB.top - GB.y, 0, GB.y - (OB.top + OB.height));
            return Math.hypot(YB, DB) <= Math.min(OB.width, OB.height) / 2
          })) : null, !1), "cursor" === (0, zB.k)().inventoryNavigation && (this.pointer = {
            x: GB.x,
            y: GB.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const BB = this.lastRealPointer;
          if (!BB || "keyboardMouse" !== yB.c.get("activeInputDevice")) return;
          const OB = document.elementFromPoint(BB.x, BB.y);
          OB && (0, eB.p)(null, OB, BB)
        }
        endInteraction(BB) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const OB of this.dpadTimers.values()) OB.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(XO.e)
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
          if (null === BB || void 0 === BB || !BB.isConnected || !BB.closest(VO)) return null;
          const OB = BB.getBoundingClientRect();
          return OB.width > 0 && OB.height > 0 ? {
            left: OB.left,
            top: OB.top,
            width: OB.width,
            height: OB.height
          } : null
        }
        ensureFocus() {
          const BB = this.readFocusRect();
          if (BB || this.pointer) return BB;
          const {
            targets: OB,
            byElement: GB
          } = this.getTargets();
          let YB = null,
            DB = !1;
          if (this.lastRect) YB = qO(jO(this.lastRect), OB);
          else {
            var QB, oB;
            const BB = ((BB, OB) => {
                const GB = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return GB ? GG(BB.filter((BB => GB.contains(BB.element))), OB) : null
              })(OB, (0, sB.e)()),
              jB = OB.find((BB => null !== BB.idx && BB.idx === this.reopenSlotIdx)),
              yB = document.querySelector(CO);
            DB = null !== BB || void 0 !== jB, YB = null !== (QB = null !== (oB = null !== BB && void 0 !== BB ? BB : jB) && void 0 !== oB ? oB : yB && GB.get(yB)) && void 0 !== QB ? QB : WO(OB)
          }
          return this.setFocus(YB, DB), this.lastRect
        }
        setFocus(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          BB && (this.focused = BB.element, this.focusTarget = BB, this.panelMemory.set(BB.panel, BB.element), OB && BB.scrollContainer && ((BB, OB) => {
            const GB = BB.getBoundingClientRect(),
              YB = iB(OB),
              DB = OB.scrollTop;
            return GB.top < YB.top ? OB.scrollTop -= YB.top - GB.top : GB.bottom > YB.bottom && (OB.scrollTop += GB.bottom - YB.bottom), OB.scrollTop !== DB
          })(BB.element, BB.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, zB.k)().inventoryNavigation) {
              if (this.lastRect) {
                const BB = jO(this.lastRect);
                this.pointer = {
                  x: BB.x,
                  y: BB.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const BB = this.lastRect ? jO(this.lastRect) : {
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
          const OB = RO(this.pointer, this.getTargets().targets);
          this.focusTarget = OB, (null === OB || void 0 === OB ? void 0 : OB.element) !== this.focused && (this.focused = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.element) && void 0 !== BB ? BB : null, OB && (this.panelMemory.set(OB.panel, OB.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(BB, OB) {
          const GB = this.focusTarget,
            YB = GB && (0, zB.k)().cursorMagnetism ? jO(ZO(GB)) : null;
          this.pointer = SB(this.pointer, {
            stick: BB.leftStick,
            moveDeadzone: (0, zB.k)().moveDeadzone,
            dpad: OB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, zB.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: YB
            }
          })
        }
        move(BB) {
          this.targets.revalidate();
          const OB = this.currentTarget();
          OB && this.setFocus(pO(OB, this.getTargets().targets, BB))
        }
        step(BB) {
          const OB = this.pointer;
          if (OB && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((BB, OB, GB) => {
            var YB;
            const DB = {
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
            return null !== (YB = pO(DB, OB, GB)) && void 0 !== YB ? YB : qO(BB, OB)
          })(OB, this.getTargets().targets, BB));
          this.move(BB)
        }
        isNavButton(BB) {
          return !sO.some((OB => (0, MB.h)(OB) === BB)) && !(BB === (0, MB.h)("inventory") && BG())
        }
        handleNavigation(BB, OB) {
          const GB = (0, zB.k)().inventoryNavigation,
            YB = {
              x: 0,
              y: 0
            };
          let DB = null;
          for (const yB of pB.G) {
            const QB = this.isNavButton(yB) && BB.isHeld(yB);
            QB && (YB.x += HO[yB].x, YB.y += HO[yB].y), this.dpadTimers.get(yB).update(QB, OB) && "cursor" !== GB && (DB ??= yB)
          }
          const QB = this.stickGate.update(BB.leftStick, (0, zB.k)().moveDeadzone);
          if (DB && (this.step(DB), this.stickGate.lock()), "slot" !== GB) {
            const OB = ((BB, OB, GB, YB) => "hybrid" !== BB ? "cursor" === BB : !YB && (OB || GB))(GB, null !== this.pointer, QB, null !== DB);
            return OB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === GB ? YB : {
              x: 0,
              y: 0
            }))
          }
          const oB = (0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone),
            jB = this.stickRepeat.update(QB ? (0, pB.nb)(oB) : null, OB);
          jB && this.move(jB)
        }
        applyCategoryPlace() {
          const BB = this.placeAfterCategory;
          if (!BB) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const OB = qO(jO(BB.rect), this.getTargets().targets, (OB => OB.scrollGroup === BB.scrollGroup));
          this.setFocus(OB, !1)
        }
        applyFocusRequest() {
          const BB = (0, sB.o)();
          BB && (this.targets.invalidate(), this.setFocus((0, sB.d)(this.getTargets().targets, BB)))
        }
        handlePanels(BB) {
          var OB, GB, YB;
          const DB = BB.wasPressed((0, MB.h)("inventoryPanelPrevious")),
            QB = BB.wasPressed((0, MB.h)("inventoryPanelNext"));
          if (!DB && !QB) return;
          const {
            targets: oB
          } = this.getTargets(), jB = (yB = ((BB, OB) => {
            const GB = [];
            for (const DB of BB) DB.visible && !GB.includes(DB.panel) && GB.push(DB.panel);
            const YB = BB => {
              const YB = OB.indexOf(BB);
              return -1 === YB ? OB.length + GB.indexOf(BB) : YB
            };
            return GB.sort(((BB, OB) => YB(BB) - YB(OB)))
          })(oB, fO), JB = null !== (OB = null === (GB = this.focusTarget) || void 0 === GB ? void 0 : GB.panel) && void 0 !== OB ? OB : null, PB = QB ? 1 : -1, 0 === yB.length ? null : yB[yO(null === JB ? -1 : yB.indexOf(JB), yB.length, PB)]);
          var yB, JB, PB;
          if (null === jB) return;
          const zB = this.panelMemory.get(jB),
            lB = oB.filter((BB => BB.panel === jB)),
            pB = null !== (YB = lB.find((BB => BB.element === zB && BB.visible))) && void 0 !== YB ? YB : GG(lB, (0, sB.e)());
          this.setFocus(pB)
        }
        handlePaging(BB, OB) {
          const GB = (0, MB.h)("menuPageUp"),
            YB = (0, MB.h)("menuPageDown"),
            DB = this.pageUpTimer.update(BB.isHeld(GB), OB),
            QB = this.pageDownTimer.update(BB.isHeld(YB), OB);
          if (!DB && !QB) return;
          const oB = QB ? 1 : -1;
          if (!BB.wasPressed(QB ? YB : GB) && this.hasCategories) return;
          if ((BB => {
              const OB = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === OB.length) return !1;
              const GB = OB.findIndex((BB => BB.classList.contains("Selected"))),
                YB = OB[yO(GB, OB.length, BB)];
              return (0, eB.n)(YB, (0, eB.w)(YB)), !0
            })(oB)) {
            var jB, yB;
            this.targets.invalidate();
            const BB = null !== (jB = null === (yB = this.focusTarget) || void 0 === yB ? void 0 : yB.scrollGroup) && void 0 !== jB ? jB : null,
              OB = this.readFocusRect();
            return void(this.placeAfterCategory = null !== BB && OB && !this.pointer ? {
              rect: OB,
              scrollGroup: BB
            } : null)
          }
          const {
            targets: JB
          } = this.getTargets(), PB = this.currentTarget(), zB = PB && gO(PB) ? PB : JB.find((BB => gO(BB) && BB.visible));
          if (!zB) return;
          const lB = ((BB, OB, GB, YB) => {
            if (null === BB.scrollGroup) return null;
            const DB = jO(BB.rect),
              QB = DB.x,
              oB = DB.y + ("Down" === GB ? YB : -YB);
            let jB = null,
              yB = 1 / 0;
            for (const JB of OB) {
              if (JB.scrollGroup !== BB.scrollGroup || JB.key === BB.key) continue;
              const OB = jO(JB.rect);
              if ("Down" === GB ? OB.y <= DB.y : OB.y >= DB.y) continue;
              const YB = Math.hypot(OB.x - QB, OB.y - oB);
              YB < yB && (jB = JB, yB = YB)
            }
            return jB
          })(zB, JB, oB > 0 ? "Down" : "Up", zB.scrollContainer.clientHeight);
          this.setFocus(null !== lB && void 0 !== lB ? lB : zB)
        }
        handleScroll(BB) {
          var OB, GB, YB, DB, QB, oB;
          if (!this.scroller.isScrolling(BB.rightStick)) return void this.scroller.reset();
          const {
            targets: jB
          } = this.getTargets(), yB = this.pointer, JB = !yB && this.focusTarget && gO(this.focusTarget) ? this.focusTarget.scrollContainer : null, MB = yB && (null === (OB = jB.find((BB => BB.clip && NO(BB.clip, yB)))) || void 0 === OB ? void 0 : OB.scrollContainer), PB = null !== (GB = null !== (YB = null !== (DB = this.scroller.current()) && void 0 !== DB ? DB : MB) && void 0 !== YB ? YB : JB) && void 0 !== GB ? GB : null === (QB = jB.find(gO)) || void 0 === QB ? void 0 : QB.scrollContainer;
          if (!PB || !this.scroller.step(PB, BB.rightStick, BB.dtMs)) return;
          this.targets.scrolled(PB);
          const zB = yB || (null === (oB = this.focusTarget) || void 0 === oB ? void 0 : oB.scrollContainer) !== PB ? null : this.readFocusRect();
          if (!zB) return;
          const lB = iB(PB),
            pB = jO(zB);
          if (pB.y < lB.top || pB.y > lB.bottom) {
            const BB = this.focusTarget.scrollGroup,
              OB = qO(pB, this.getTargets().targets, (OB => OB.scrollGroup === BB));
            this.setFocus(OB, !1)
          }
        }
        focusContext(BB) {
          const {
            kind: OB,
            idx: GB
          } = this.focused ? mO(this.focused) : {
            kind: null,
            idx: null
          }, YB = this.focused ? KO(this.focused) : null, DB = YB ? (0, TO.c)(YB) : null;
          return {
            kind: OB,
            idx: GB,
            actionElement: YB,
            press: DB,
            hasPress: null !== DB,
            hasBack: !(null === DB || void 0 === DB || !DB.back),
            holding: BB.isHolding(),
            slotHasItem: null !== GB && BB.hasItemAt(GB)
          }
        }
        handleButtons(BB, OB, GB) {
          var YB, DB;
          if (!this.activePress || BB.isHeld(this.activePress.button) && (YB = this.activePress.target, DB = this.focused, null !== YB.recipe ? uO(DB).recipe === YB.recipe : DB === YB.element) || this.releasePress(), this.scrollStickClick.update(BB.rightStick, OB), !this.handleHotbarPick(BB, GB)) {
            for (const [YB, DB] of vO) {
              const QB = (0, MB.h)(DB);
              if (!BB.wasPressed(QB) || "openButton" === YB && !BG()) continue;
              if ("RS" === QB && !this.scrollStickClick.allowsClick(OB)) continue;
              const oB = this.focusContext(GB),
                jB = HB(YB, oB);
              jB && this.runIntent(jB, oB, QB, GB)
            }
            this.handleDrop(BB, OB, GB)
          }
        }
        handleHotbarPick(BB, OB) {
          const GB = this.hotbarPick;
          if (!GB) return !1;
          const YB = BB.wasPressed((0, MB.h)("inventoryPrimary")) || BB.wasPressed((0, MB.h)("inventoryHotbarSwap"));
          if (!YB && !BB.wasPressed((0, MB.h)("inventoryClose")) && !OB.isHolding()) return !(BB.wasPressed((0, MB.h)("inventory")) && BG());
          const DB = this.focusTarget;
          YB && "hotbar" === (null === DB || void 0 === DB ? void 0 : DB.panel) && null !== DB.idx && DB.idx !== GB.idx && (OB.swapWithHotbar(DB.idx, GB.idx), this.afterAction()), this.hotbarPick = null;
          const QB = GB.element.isConnected ? this.getTargets().byElement.get(GB.element) : void 0;
          return QB && this.setFocus(QB), !0
        }
        startHotbarPick(BB) {
          var OB;
          const {
            targets: GB,
            byElement: YB
          } = this.getTargets(), DB = document.querySelector(CO), QB = null !== (OB = DB && YB.get(DB)) && void 0 !== OB ? OB : GB.find((BB => "hotbar" === BB.panel));
          QB && this.focused && (this.hotbarPick = {
            idx: BB,
            element: this.focused
          }, this.setFocus(QB))
        }
        focusKey() {
          return this.focused ? GO(this.focused) : null
        }
        handleDrop(BB, OB, GB) {
          const YB = (0, MB.h)("inventoryDrop");
          if (BB.wasPressed(YB)) {
            const BB = (DB = this.focusContext(GB)).holding ? {
              kind: "sJ"
            } : "slot" === DB.kind && DB.slotHasItem && null !== DB.idx ? {
              kind: "slot",
              idx: DB.idx
            } : null;
            return void(BB && (this.dropFrom(BB, !1, GB), this.dropLatch.press(BB, this.focusKey(), OB, ZB.d[(0, zB.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var DB;
          const QB = this.dropLatch.update(BB.isHeld(YB), this.focusKey(), OB);
          QB && ((BB, OB, GB) => "sJ" === BB.kind ? OB : !OB && GB(BB.idx))(QB, GB.isHolding(), GB.hasItemAt) && (this.dropFrom(QB, !0, GB), this.afterAction())
        }
        dropFrom(BB, OB, GB) {
          "sJ" === BB.kind ? GB.dropHeld(OB, this.slotPoint()) : GB.dropSlot(BB.idx, OB)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (BB => {
            const OB = jO(BB);
            return {
              clientX: OB.x,
              clientY: OB.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(BB, OB, GB, YB) {
          const DB = OB.idx,
            QB = OB.actionElement;
          switch (QB && OG.has(BB) && (0, NB.x)(QB), BB) {
            case "slotPrimary":
              YB.primary(DB, this.slotPoint());
              break;
            case "slotSecondary":
              YB.secondary(DB, this.slotPoint());
              break;
            case "slotQuickMove":
              YB.quickMove(DB, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(DB);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(OB.press, "pressPrimary" === BB ? "primary" : "secondary", GB);
              break;
            case "click":
              (0, eB.n)(QB, (0, eB.w)(QB));
              break;
            case "openKeyboard":
              (0, eB.I)(QB) && (0, eB.E)(QB);
              break;
            case "pressBack":
              OB.press.back();
              break;
            case "cancel":
              YB.cancel();
              break;
            case "close":
              return this.releasePress(), void YB.close()
          }
          this.afterAction()
        }
        startPress(BB, OB, GB) {
          this.releasePress(), BB.press(OB) && (this.activePress = {
            handlers: BB,
            button: GB,
            target: uO(this.focused)
          })
        }
        releasePress() {
          var BB, OB, GB;
          null === (BB = this.activePress) || void 0 === BB || null === (OB = (GB = BB.handlers).release) || void 0 === OB || OB.call(GB), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(BB) {
          ((BB, OB) => {
            var GB, YB, DB, QB, oB, jB;
            return BB.showing === OB.showing && BB.kind === OB.kind && BB.holding === OB.holding && BB.slotHasItem === OB.slotHasItem && (null === (GB = BB.pressHints) || void 0 === GB ? void 0 : GB.primary) === (null === (YB = OB.pressHints) || void 0 === YB ? void 0 : YB.primary) && (null === (DB = BB.pressHints) || void 0 === DB ? void 0 : DB.secondary) === (null === (QB = OB.pressHints) || void 0 === QB ? void 0 : QB.secondary) && (null === (oB = BB.pressHints) || void 0 === oB ? void 0 : oB.back) === (null === (jB = OB.pressHints) || void 0 === jB ? void 0 : jB.back) && BB.hasCategories === OB.hasCategories && BB.hasList === OB.hasList && BB.openButtonCloses === OB.openButtonCloses && BB.steppingSlots === OB.steppingSlots && BB.hotbarPicking === OB.hotbarPicking && BB.quickMoveToHotbar === OB.quickMoveToHotbar && BB.dropStackHold === OB.dropStackHold
          })(BB, this.state) || (this.state = BB, JB.o.tM(XO.i, BB))
        }
      },
      QG = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var oG = GB(9376),
      jG = GB(331),
      yG = GB(1699),
      JG = GB(8896);
    const MG = "[data-pad-secondary]",
      PG = BB => BB instanceof HTMLElement && (0, xB.s)(BB) && !(0, xB.x)(BB),
      zG = BB => {
        const OB = BB.querySelector(MG);
        if (OB && PG(OB)) return OB;
        for (const DB of null !== (GB = null === (YB = BB.parentElement) || void 0 === YB ? void 0 : YB.children) && void 0 !== GB ? GB : []) {
          var GB, YB;
          if (DB !== BB && DB.matches(MG) && PG(DB)) return DB
        }
        return null
      },
      lG = (BB, OB, GB, YB) => Math.max(0, Math.max(BB, GB) - Math.min(OB, YB)),
      pG = (BB, OB, GB, YB) => Math.max(0, Math.min(OB, YB) - Math.max(BB, GB)),
      qG = (BB, OB, GB) => {
        const YB = (BB.left + BB.right) / 2,
          DB = (BB.top + BB.bottom) / 2,
          QB = (OB.left + OB.right) / 2,
          oB = (OB.top + OB.bottom) / 2;
        if ("Left" === GB || "Right" === GB) {
          const jB = "Right" === GB ? 1 : -1;
          return {
            forwardGap: "Right" === GB ? OB.left - BB.right : BB.left - OB.right,
            centreForward: (QB - YB) * jB,
            sidewaysGap: lG(BB.top, BB.bottom, OB.top, OB.bottom),
            sidewaysOverlap: pG(BB.top, BB.bottom, OB.top, OB.bottom),
            centreSideways: Math.abs(oB - DB),
            startSideways: Math.abs(OB.top - BB.top),
            fromSidewaysSize: BB.bottom - BB.top,
            toSidewaysSize: OB.bottom - OB.top,
            toLength: OB.right - OB.left
          }
        }
        const jB = "Down" === GB ? 1 : -1;
        return {
          forwardGap: "Down" === GB ? OB.top - BB.bottom : BB.top - OB.bottom,
          centreForward: (oB - DB) * jB,
          sidewaysGap: lG(BB.left, BB.right, OB.left, OB.right),
          sidewaysOverlap: pG(BB.left, BB.right, OB.left, OB.right),
          centreSideways: Math.abs(QB - YB),
          startSideways: Math.abs(OB.left - BB.left),
          fromSidewaysSize: BB.right - BB.left,
          toSidewaysSize: OB.right - OB.left,
          toLength: OB.bottom - OB.top
        }
      },
      ZG = BB => BB.centreForward > .5 && BB.forwardGap >= -BB.toLength / 2,
      NG = BB => {
        const OB = BB.sidewaysOverlap > 0 ? 0 : 2 * BB.fromSidewaysSize,
          GB = BB.fromSidewaysSize > 1.5 * BB.toSidewaysSize ? BB.startSideways : BB.centreSideways;
        return Math.max(0, BB.forwardGap) + 3 * BB.sidewaysGap + OB + .1 * GB
      },
      RG = (BB, OB) => pG(BB.top, BB.bottom, OB.top, OB.bottom) > 0 || OB.bottom - OB.top > OB.right - OB.left,
      WG = (BB, OB, GB, YB, DB, QB) => {
        const oB = DB ? VG(BB, OB, GB, DB) : new Set,
          jB = nG(BB, OB, GB, oB);
        return jB < 0 && oB.size > 0 && QB ? AG(BB, OB, GB, QB) : YB && jB >= 0 ? SG(BB, OB, GB, YB, jB, oB) : jB
      },
      AG = (BB, OB, GB, YB) => {
        const DB = new Set,
          QB = nG(BB, OB, "Up", DB) >= 0,
          oB = nG(BB, OB, "Down", DB) >= 0,
          jB = new Set;
        return OB.forEach(((OB, GB) => {
          const DB = OB.top + OB.bottom < BB.top + BB.bottom;
          YB[GB] && !(DB ? QB : oB) || jB.add(GB)
        })), nG(BB, OB, GB, jB)
      },
      VG = (BB, OB, GB, YB) => {
        const DB = new Set;
        return "Left" !== GB && "Right" !== GB || OB.forEach(((OB, GB) => {
          YB[GB] && pG(BB.top, BB.bottom, OB.top, OB.bottom) <= 0 && DB.add(GB)
        })), DB
      },
      SG = (BB, OB, GB, YB, DB, QB) => {
        const oB = qG(BB, OB[DB], GB).forwardGap;
        let jB = DB,
          yB = YB[DB],
          JB = 1 / 0;
        return OB.forEach(((OB, MB) => {
          const PB = YB[MB];
          if (QB.has(MB) || PB < yB || PB === yB && jB === DB) return;
          const zB = qG(BB, OB, GB);
          if (!ZG(zB) || zB.forwardGap < 0 || zB.forwardGap >= oB) return;
          const lB = NG(zB);
          (PB > yB || lB < JB) && (jB = MB, yB = PB, JB = lB)
        })), jB
      },
      nG = (BB, OB, GB, YB) => {
        let DB = -1,
          QB = 1 / 0;
        if (OB.forEach(((OB, oB) => {
            const jB = ((BB, OB, GB) => {
              const YB = qG(BB, OB, GB);
              if (!ZG(YB)) return null;
              const DB = Math.max(0, YB.forwardGap);
              return YB.sidewaysOverlap <= 0 && YB.sidewaysGap > 2 * (DB + 1) ? null : NG(YB)
            })(BB, OB, GB);
            null !== jB && jB < QB && !YB.has(oB) && (QB = jB, DB = oB)
          })), DB < 0) return -1;
        const oB = OB[DB],
          jB = qG(BB, oB, GB).forwardGap;
        let yB = jB,
          JB = DB;
        return OB.forEach(((OB, QB) => {
          if (QB === DB || YB.has(QB) || !((BB, OB, GB) => {
              const YB = "Left" === GB || "Right" === GB,
                DB = YB ? pG(BB.top, BB.bottom, OB.top, OB.bottom) : pG(BB.left, BB.right, OB.left, OB.right),
                QB = YB ? Math.min(BB.bottom - BB.top, OB.bottom - OB.top) : Math.min(BB.right - BB.left, OB.right - OB.left);
              return DB > 0 && DB >= QB / 2
            })(OB, oB, GB)) return;
          const MB = qG(BB, OB, GB);
          ZG(MB) && MB.forwardGap + MB.toLength <= jB + 1 && MB.forwardGap < yB && (yB = MB.forwardGap, JB = QB)
        })), JB
      },
      UG = (BB, OB) => {
        let GB = -1,
          YB = 1 / 0;
        return OB.forEach(((OB, DB) => {
          const QB = Math.max(OB.left - BB.x, 0, BB.x - OB.right),
            oB = Math.max(OB.top - BB.y, 0, BB.y - OB.bottom),
            jB = Math.hypot(QB, oB);
          jB < YB && (YB = jB, GB = DB)
        })), GB
      },
      fG = (BB, OB) => {
        const GB = Math.min(BB.bottom - BB.top, OB.bottom - OB.top) / 2;
        return Math.abs(BB.top - OB.top) > GB ? BB.top - OB.top : BB.left - OB.left
      },
      kG = BB => {
        let OB = -1;
        for (let GB = 0; GB < BB.length; GB++)(OB < 0 || fG(BB[GB], BB[OB]) < 0) && (OB = GB);
        return OB
      };
    var dG = GB(1739),
      KG = GB(9381),
      uG = GB(9384);
    const mG = BB => {
        if ("death" !== BB || "inGame" !== yB.c.get("gameState") || "off" === (0, zB.k)().quickChat || null === (0, dG.b)()) return !1;
        const OB = (0, MB.h)("chat");
        return OB !== (0, MB.h)("menuConfirm") && OB !== (0, MB.h)("menuBack")
      },
      IG = new KG.c;
    var FG = GB(4696),
      iG = GB(9391),
      LG = GB(9394);
    const gG = BB => {
        let OB = null;
        for (const GB of BB.querySelectorAll("[data-pad-tabs]"))(0, xB.s)(GB) && (!OB || Number(GB.dataset.padTabs) < Number(OB.dataset.padTabs)) && (OB = GB);
        return OB
      },
      rG = (BB, OB, GB, YB) => {
        BB.focusWhenFound((() => {
          const DB = BB.pickInitial(OB);
          if (DB && !GB.has(DB) && (null === YB || void 0 === YB || !YB.contains(DB))) return DB;
          const QB = ((BB, OB) => {
              const GB = OB => BB.getEnabledCandidates(OB).filter((BB => !BB.closest("[data-pad-tabs]")));
              for (const YB of (0, xB.i)(OB)) {
                const BB = GB(YB);
                if (BB.length > 0) return BB
              }
              return GB(OB)
            })(BB, OB).filter((BB => !GB.has(BB))),
            oB = kG(QB.map((BB => BB.getBoundingClientRect())));
          return oB >= 0 ? QB[oB] : null
        }), 3e3)
      },
      XG = (BB, OB, GB, YB) => {
        var DB;
        const QB = ((BB, OB) => {
          if (0 === BB.length) return null;
          const GB = BB.findIndex((BB => "true" === BB.dataset.padSelected));
          return GB < 0 ? OB > 0 ? BB[0] : BB[BB.length - 1] : BB[(GB + OB + BB.length) % BB.length]
        })([...GB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, xB.s)(BB) && !(0, xB.x)(BB))), YB);
        if (!QB) return;
        const oB = null !== (DB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== DB ? DB : null,
          jB = !(null === oB || void 0 === oB || !oB.isConnected) && GB.contains(oB),
          yB = BB && !jB ? new Set(BB.getEnabledCandidates(OB)) : null;
        (0, eB.b)(QB), BB && (yB ? rG(BB, OB, yB, GB) : BB.setFocus(QB, {
          byUser: !0
        }))
      },
      wG = BB => {
        var OB;
        const GB = iB(null !== (OB = dB(BB, "x")) && void 0 !== OB ? OB : BB),
          YB = (0, xB.h)(BB).filter((BB => !(0, xB.x)(BB))),
          DB = YB.filter((BB => LB(BB.getBoundingClientRect(), GB)));
        return (DB.length > 0 ? DB : YB).sort(((BB, OB) => fG(BB.getBoundingClientRect(), OB.getBoundingClientRect())))
      },
      EG = (BB, OB, GB) => {
        const YB = [...OB.querySelectorAll("[data-pad-row]")].filter(xB.s),
          DB = BB.getFocused(),
          QB = DB ? YB.findIndex((BB => BB.contains(DB))) : -1;
        let oB = 0,
          jB = GB > 0 ? 0 : YB.length - 1;
        if (QB >= 0 && DB) oB = Math.max(0, wG(YB[QB]).indexOf(DB)), jB = QB + GB;
        else if (DB) {
          const BB = DB.getBoundingClientRect(),
            OB = YB.map((OB => {
              const YB = OB.getBoundingClientRect();
              return GB > 0 ? YB.top >= BB.top : YB.bottom <= BB.bottom
            }));
          jB = GB > 0 ? OB.indexOf(!0) : OB.lastIndexOf(!0)
        }
        for (let yB = jB; yB >= 0 && yB < YB.length; yB += GB) {
          const OB = wG(YB[yB]);
          if (OB.length > 0) return void BB.setFocus(OB[Math.min(oB, OB.length - 1)], {
            byUser: !0
          })
        }
      },
      cG = (BB, OB, GB) => {
        var YB, DB;
        const QB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== YB ? YB : null,
          oB = null !== QB && void 0 !== QB && QB.closest("[data-pad-row]") ? "x" : "y",
          jB = null !== (DB = QB ? dB(QB, oB, OB) : null) && void 0 !== DB ? DB : uB(OB, oB);
        if (!jB) return;
        const yB = QB ? (0, eB.w)(QB) : null;
        if (FB(jB, oB, GB * ("y" === oB ? jB.clientHeight : jB.clientWidth) * .85), !BB || !yB) return;
        const JB = iB(jB),
          MB = BB.getEnabledCandidates(OB).filter((BB => jB.contains(BB) && LB(BB.getBoundingClientRect(), JB))),
          PB = UG(yB, MB.map((BB => BB.getBoundingClientRect())));
        PB >= 0 && BB.setFocus(MB[PB], {
          scroll: !1,
          byUser: !0
        })
      };
    let hG = null;
    const aG = (BB, OB) => {
        var GB, YB;
        const DB = OB.querySelector("[data-pad-friends-column]"),
          QB = BB.getFocused();
        if (!DB || !QB || !DB.contains(QB)) return !1;
        const oB = BB.getEnabledCandidates(OB).filter((BB => !DB.contains(BB))),
          jB = UG((0, eB.w)(QB), oB.map((BB => BB.getBoundingClientRect()))),
          yB = null === (GB = hG) || void 0 === GB ? void 0 : GB.deref();
        return BB.setFocus(null !== yB && void 0 !== yB && yB.isConnected ? yB : null !== (YB = oB[jB]) && void 0 !== YB ? YB : null, {
          byUser: !0
        }), !0
      },
      eG = BB => {
        const OB = (0, MB.h)(BB);
        return (0, pB.L)(OB) || JG.s.some((BB => (0, MB.h)(BB) === OB)) ? null : OB
      },
      TG = (BB, OB) => {
        const GB = eG(OB);
        return null !== GB && BB.wasPressed(GB)
      },
      bG = function(BB, OB, GB) {
        let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const DB = (BB => {
            var OB, GB;
            return null !== (OB = null === (GB = gG(BB)) || void 0 === GB ? void 0 : GB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== OB ? OB : null
          })(OB),
          QB = BB && DB ? new Set(BB.getEnabledCandidates(OB)) : null;
        (0, oG.d)(), GB === jG.p.SETTINGS && (0, yG.m)(yB.c.get("openEverythingMenuName")) ? yB.c.set({
          openEverythingMenuName: GB
        }) : (0, yG.A)((0, LG.b)("padMenuShortcut"), GB, YB), BB && QB && DB && rG(BB, OB, QB, DB.closest("[data-pad-tabs]"))
      },
      CG = BB => null !== BB.closest(".Dropdown-root") || null !== BB.querySelector(".Dropdown-root.is-open"),
      HG = BB => null !== (0, iG.c)() && "popup" !== BB.layer.kind && !gG(BB.root) && !CG(BB.root),
      vG = (0, qB.d)(pB.eb),
      sG = (0, qB.d)(pB.eb),
      xG = (BB, OB, GB) => {
        if (((BB, OB) => {
            const GB = (0, MB.h)("chat");
            return mG(OB) && BB.isHeld(GB) ? "hold" === IG.update(BB.wasPressed(GB), BB.isHeld(GB), performance.now(), ZB.d[(0, zB.k)().tapHoldTime].wheelMs) && (PB.c.consumeButton(GB), JB.o.tM(uG.r), !0) : (IG.release(), !1)
          })(OB, GB.layer.kind)) return !0;
        const YB = GB.root;
        for (const [oB, jB] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (OB.wasPressed((0, MB.h)(oB))) {
            const OB = CG(YB) ? null : gG(YB);
            if (OB) XG(BB, YB, OB, jB);
            else if (HG(GB)) {
              var DB;
              const OB = BB ? new Set(BB.getEnabledCandidates(YB)) : null;
              null !== (DB = (0, iG.c)()) && void 0 !== DB && DB(jB) && BB && OB && rG(BB, YB, OB, null)
            } else BB && EG(BB, YB, jB);
            return !0
          } for (const [oB, jB, yB] of [
            ["menuPageUp", -1, vG],
            ["menuPageDown", 1, sG]
          ]) {
          const GB = (0, MB.h)(oB);
          if (OB.wasPressed(GB) && yB.reset(), yB.update(OB.isHeld(GB), performance.now())) return cG(BB, YB, jB), !0
        }
        const QB = "popup" === GB.layer.kind;
        return TG(OB, "pause") ? (QB || (0, yG.u)() && "menu" !== GB.layer.kind || bG(BB, YB, (0, yG.u)() ? jG.p.SETTINGS : (0, FG.b)()), !0) : !!TG(OB, "leaderboard") && ("home" === GB.layer.kind ? (BB => {
          const OB = [...BB.querySelectorAll("[data-pad-notifications]")].find(xB.s);
          OB && (0, eB.b)(OB)
        })(YB) : QB || bG(BB, YB, jG.p.LOBBY_LEADERBOARD, "inGame" === yB.c.get("gameState")), !0)
      },
      tG = (BB, OB, GB) => {
        if (xG(BB, OB, GB)) return !0;
        const YB = "home" === GB.layer.kind;
        if (OB.wasPressed((0, MB.h)("menuSecondary"))) {
          const OB = BB.getFocused(),
            DB = OB ? zG(OB) : null;
          if (DB) return (0, eB.b)(DB), !0;
          if (YB) {
            const OB = GB.root.querySelector("[data-pad-search] input");
            return OB && (0, xB.t)(OB, GB.root) ? (BB.setFocus(OB, {
              byUser: !0
            }), (0, eB.b)(OB)) : yB.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!YB || !TG(OB, "inventory")) && (((BB, OB) => {
          var GB, YB;
          const DB = OB.querySelector("[data-pad-friends-column]");
          if (!DB || !(0, xB.s)(DB)) return void(0, yG.A)((0, LG.b)("padMenuShortcut"), jG.p.SOCIAL);
          if (aG(BB, OB)) return;
          const QB = null !== (GB = null === (YB = DB.querySelector("[data-pad-friends-start]")) || void 0 === YB ? void 0 : YB.getBoundingClientRect().top) && void 0 !== GB ? GB : -1 / 0,
            oB = BB.getEnabledCandidates(DB),
            jB = oB.filter((BB => BB.getBoundingClientRect().top >= QB)),
            yB = jB.length > 0 ? jB : oB,
            JB = kG(yB.map((BB => BB.getBoundingClientRect())));
          BB.setFocus(JB >= 0 ? yB[JB] : null, {
            byUser: !0
          })
        })(BB, GB.root), !0)
      },
      BY = BB => {
        var OB, GB, YB;
        const DB = (0, eB.x)(BB);
        if (null !== DB) return DB;
        const QB = (null !== (OB = null !== (GB = null !== (YB = BB.getAttribute("aria-label")) && void 0 !== YB ? YB : BB.getAttribute("title")) && void 0 !== GB ? GB : BB.textContent) && void 0 !== OB ? OB : "").replace(/\s+/g, " ").trim();
        return QB ? `${BB.tagName}:${QB.slice(0,100)}` : null
      };
    class OY {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(BB) {
        const OB = this.history.indexOf(BB);
        if (OB >= 0) {
          for (const BB of this.history.splice(OB + 1)) this.remembered.delete(BB);
          return !0
        }
        return this.remembered.delete(BB), this.history.push(BB), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(BB) {
        this.remembered.delete(BB);
        const OB = this.history.indexOf(BB);
        OB >= 0 && this.history.splice(OB, 1)
      }
      remember(BB, OB, GB, YB) {
        const DB = BY(OB),
          QB = (0, eB.x)(OB),
          oB = null !== QB && ((BB, OB) => {
            let GB = 0;
            for (const YB of BB.querySelectorAll("[data-pad-key], [href]"))
              if ((YB.getAttribute("data-pad-key") === OB || YB.getAttribute("href") === OB) && (GB++, GB > 1)) return !0;
            return !1
          })(GB, QB) ? Math.max(0, this.twins(YB(), QB).indexOf(OB)) : 0;
        this.remembered.set(BB, {
          element: new WeakRef(OB),
          identity: DB,
          ordinal: oB
        })
      }
      has(BB) {
        return this.remembered.has(BB)
      }
      recall(BB, OB) {
        var GB, YB;
        const DB = this.remembered.get(BB);
        if (!DB) return null;
        const QB = DB.element.deref();
        if (QB && OB.includes(QB)) return QB;
        if (null === DB.identity) return null;
        const oB = this.twins(OB, DB.identity);
        return null !== (GB = null !== (YB = oB[DB.ordinal]) && void 0 !== YB ? YB : oB[0]) && void 0 !== GB ? GB : null
      }
      twins(BB, OB) {
        return BB.filter((BB => BY(BB) === OB))
      }
    }
    var GY = GB(1268);
    const YY = BB => {
        const OB = [];
        let GB = BB;
        for (; GB && GB !== document.body;) {
          const BB = getComputedStyle(GB).zIndex;
          "auto" !== BB && OB.push(Number(BB) || 0), GB = GB.parentElement
        }
        return OB.reverse()
      },
      DY = (BB, OB) => {
        const GB = ((BB, OB) => {
          const GB = Math.max(BB.length, OB.length);
          for (let QB = 0; QB < GB; QB++) {
            var YB, DB;
            const GB = (null !== (YB = BB[QB]) && void 0 !== YB ? YB : 0) - (null !== (DB = OB[QB]) && void 0 !== DB ? DB : 0);
            if (0 !== GB) return GB
          }
          return 0
        })(YY(BB), YY(OB));
        if (0 !== GB) return GB > 0;
        if (BB.contains(OB)) return !1;
        if (OB.contains(BB)) return !0;
        const YB = BB.compareDocumentPosition(OB);
        return !!(YB & Node.DOCUMENT_POSITION_PRECEDING) || !(YB & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      QY = (BB, OB) => {
        var GB;
        return null !== (GB = DY(BB.root, OB.root)) && void 0 !== GB ? GB : BB.order > OB.order
      },
      oY = (BB, OB) => OB.some((OB => !OB.contains(BB) && !BB.contains(OB) && !0 === DY(OB, BB)));
    let jY = null,
      yY = null,
      JY = -1;
    const MY = () => {
        var BB;
        const OB = null === (BB = document.timeline) || void 0 === BB ? void 0 : BB.currentTime,
          GB = "number" === typeof OB ? OB : null;
        if (null !== GB && GB === yY && JY === (0, GY.c)()) return jY;
        let YB = null;
        const DB = [],
          QB = [...document.querySelectorAll("[data-pad-covers]")].filter(xB.s);
        for (const oB of (0, GY.f)()) {
          const BB = oB.getRoot(),
            OB = !!BB && (0, xB.s)(BB) && !oY(BB, QB);
          if (oB.shown && !OB && DB.push(oB), oB.shown = OB, !BB || !OB) continue;
          const GB = {
            layer: oB,
            root: BB,
            order: oB.order
          };
          YB && !QY(GB, YB) || (YB = GB)
        }
        jY = YB, yY = GB, JY = (0, GY.c)();
        for (const oB of DB)(0, GY.j)(oB);
        return jY
      },
      PY = () => {
        const BB = MY();
        return !(null === BB || void 0 === BB || !BB.layer.close) && (BB.layer.close(), yY = null, !0)
      },
      zY = () => {
        var BB, OB;
        return null !== (BB = null === (OB = MY()) || void 0 === OB ? void 0 : OB.root) && void 0 !== BB ? BB : null
      },
      lY = BB => BB ? {
        ...BB,
        root: zY()
      } : null;
    let pY = null,
      qY = null,
      ZY = (0, zB.k)().menuNavigation,
      NY = null;
    const RY = new VB;
    let WY = null;
    JB.o.subscribe(zB.g, (() => {
      const BB = (0, zB.k)().menuNavigation;
      BB !== ZY && (ZY = BB, pY = null, qY = null)
    }));
    const AY = () => {
        var BB;
        return null !== (BB = pY) && void 0 !== BB ? BB : (0, zB.k)().menuNavigation
      },
      VY = BB => {
        if (fY()) {
          if (NY = lY(BB), "hybrid" === AY()) return RY.lock(), void(qY = qY ? null : zY());
          pY = "focus" === AY() ? "cursor" : "focus"
        }
      },
      SY = () => {
        const BB = NY;
        return NY = null, BB
      };
    let nY = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const UY = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const GB = nY.root === BB,
          YB = GB ? nY.firstSeenMs : OB,
          DB = nY.has || OB - YB > 1e3;
        return (!GB || !DB || OB - nY.atMs > 250) && (nY = {
          root: BB,
          firstSeenMs: YB,
          atMs: OB,
          has: (0, xB.l)(BB)
        }), nY.has
      },
      fY = () => {
        const BB = zY();
        return null !== BB && UY(BB)
      },
      kY = () => {
        const BB = MY();
        return qY && (null === BB || void 0 === BB ? void 0 : BB.root) !== qY && (qY = null), (BB => {
          let {
            mode: OB,
            hasLayer: GB,
            hasCandidates: YB,
            hybridCursorEngaged: DB
          } = BB;
          return GB ? "cursor" !== OB && YB() ? "hybrid" === OB && DB ? "cursor" : "focus" : "cursor" : null
        })({
          mode: AY(),
          hasLayer: null !== BB,
          hasCandidates: () => null !== BB && UY(BB.root),
          hybridCursorEngaged: null !== qY
        })
      },
      dY = () => "hybrid" === AY() && fY(),
      KY = "pad-focused";
    var uY = GB(4963),
      mY = GB(5515);
    const IY = "[data-pad-destructive]",
      FY = `${IY}, [data-pad-back]`,
      iY = BB => ({
        rect: BB.getBoundingClientRect(),
        destructive: BB.matches(IY),
        closes: null !== BB.closest("[data-pad-close-button]"),
        unavailable: BB.matches("[data-pad-unavailable]")
      }),
      LY = BB => {
        let {
          destructive: OB,
          closes: GB,
          unavailable: YB
        } = BB;
        return OB ? GB ? 2 : 3 : YB ? 1 : 0
      },
      gY = BB => {
        let OB = -1;
        for (let GB = 0; GB < BB.length; GB++) {
          if (OB < 0) {
            OB = GB;
            continue
          }
          const YB = BB[GB],
            DB = BB[OB];
          LY(YB) === LY(DB) ? fG(YB.rect, DB.rect) < 0 && (OB = GB) : LY(YB) < LY(DB) && (OB = GB)
        }
        return OB
      },
      rY = "[data-pad-tabs]",
      XY = "[data-pad-tab]",
      wY = (BB, OB) => {
        const GB = BB.querySelector(`${XY}[data-pad-selected='true']`);
        return GB && OB.includes(GB) ? GB : null
      },
      EY = (BB, OB) => {
        let GB = OB;
        for (let YB = OB.parentElement; YB && !YB.contains(BB); YB = YB.parentElement) GB = YB;
        return GB
      };
    class cY {
      constructor() {
        this.contentReturn = null
      }
      redirect(BB, OB, GB, YB) {
        var DB, QB;
        const oB = BB.closest(rY),
          jB = OB.closest(rY);
        var yB;
        if (jB && jB !== oB) return oB || (this.contentReturn = new WeakRef(BB)), null !== (yB = wY(jB, GB)) && void 0 !== yB ? yB : OB;
        if (!oB || jB) return OB;
        const JB = EY(BB, OB),
          MB = null === (DB = this.contentReturn) || void 0 === DB ? void 0 : DB.deref();
        return MB && JB.contains(MB) && GB.includes(MB) ? MB : null !== (QB = this.pickRegionStart(JB, dB(OB, "y", YB), GB)) && void 0 !== QB ? QB : OB
      }
      findTabContent(BB, OB, GB) {
        const YB = BB.closest(rY);
        if (!YB || !BB.matches(XY) || YB.contains(OB)) return null;
        const DB = OB.closest(rY);
        if (DB && Number(DB.dataset.padTabs) <= Number(YB.dataset.padTabs)) return null;
        const QB = EY(BB, OB);
        return GB.some((BB => QB.contains(BB) && !BB.closest(FY))) || !OB.closest(FY) ? QB : null
      }
      pickContentStart(BB, OB, GB) {
        return this.contentReturn = null, this.pickRegionStart(BB, dB(BB, "y", GB), OB)
      }
      pickReplacedContentStart(BB, OB, GB, YB) {
        if (!OB.contains(BB)) return null;
        const DB = EY(OB, BB),
          QB = GB.filter((BB => OB.contains(BB) && !DB.contains(BB) && !BB.closest(FY)));
        return 0 === QB.length ? null : (this.contentReturn = null, this.pickRegionStart(OB, dB(QB[0], "y", YB), QB))
      }
      backToStrip(BB, OB, GB) {
        if (BB.closest(rY)) return null;
        const YB = gG(GB);
        for (const DB of GB.querySelectorAll(rY)) {
          if (Number(DB.dataset.padTabs) <= 1 || DB === YB) continue;
          const QB = wY(DB, OB),
            oB = QB ? EY(BB, DB).parentElement : null;
          if (QB && oB && oB !== GB && GB.contains(oB)) return this.contentReturn = new WeakRef(BB), QB
        }
        return null
      }
      pickRegionStart(BB, OB, GB) {
        const YB = iB(OB),
          DB = BB => {
            const OB = GB.filter((OB => BB.contains(OB) && !OB.closest(rY) && LB(OB.getBoundingClientRect(), YB))),
              DB = gY(OB.map(iY));
            return DB >= 0 ? OB[DB] : null
          };
        for (const QB of (0, xB.i)(BB)) {
          const BB = DB(QB);
          if (BB) return BB
        }
        for (const QB of BB.querySelectorAll(rY)) {
          const BB = wY(QB, GB);
          if (BB) return BB
        }
        return DB(BB)
      }
    }
    const hY = "[data-pad-default-focus], .Dropdown-option.is-selected",
      aY = ".Dropdown-root.is-open > .Dropdown-menu",
      eY = "[data-pad-no-step-in]",
      TY = "[data-pad-tabs]",
      bY = "[data-pad-press-area]",
      CY = BB => {
        let OB = BB;
        for (let GB = 0; OB && GB <= 4; GB++, OB = OB.parentElement) {
          const GB = OB.querySelector(".CircleInfo");
          if (GB) return OB === BB || OB.querySelectorAll(xB.d).length <= 1 ? GB : null;
          if (OB !== BB && OB.querySelectorAll(xB.d).length > 1) return null
        }
        return null
      },
      HY = (BB, OB, GB) => {
        (0, eB.p)(BB, OB, GB);
        const YB = null !== BB && void 0 !== BB && BB.isConnected ? CY(BB) : null,
          DB = CY(OB);
        YB !== DB && (0, eB.p)(YB, DB, DB ? (0, eB.w)(DB) : GB, {
          leaveBelow: BB,
          enterBelow: OB
        })
      },
      vY = BB => BB.getBoundingClientRect(),
      sY = (BB, OB, GB) => {
        const YB = new Set(GB);
        for (let DB = BB; DB; DB = DB === OB ? null : DB.parentElement)
          if (YB.has(DB)) return DB;
        return null
      },
      xY = (BB, OB) => !BB.root || BB.root === OB || OB.matches(aY) && BB.root.contains(OB);
    const tY = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new OY, this.tabStripNav = new cY, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, qB.d)(pB.x), this.dpadRepeats = new Map(pB.G.map((BB => [BB, (0, qB.d)(pB.H)]))), this.stickRepeat = new pB.e((0, qB.d)(pB.kb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const BB = PB.c.register({
            name: "focus",
            isActive: () => (0, lB.k)() && "focus" === kY(),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
          }),
          OB = (0, GY.l)((BB => {
            const OB = (0, GY.r)(BB);
            null === BB.memoryKey && this.memory.forget(OB), OB === this.layerKey && (this.layerKey = null)
          }));
        let GB = -1 / 0;
        const YB = oB.g.onFrame((BB => {
            (0, lB.k)() || BB.timestampMs - GB < 100 || (GB = BB.timestampMs, MY())
          })),
          DB = BB => {
            BB.isTrusted && BB.target instanceof Element && oB.g.getActivePad() && this.noteChosenStop(BB.target)
          };
        return document.addEventListener("click", DB, !0), () => {
          BB(), OB(), YB(), document.removeEventListener("click", DB, !0), this.deactivate()
        }
      }
      noteChosenStop(BB) {
        var OB, GB;
        const YB = MY();
        if (!YB || !YB.root.contains(BB)) return;
        const DB = null !== (OB = null === (GB = BB.closest(".Dropdown-root")) || void 0 === GB ? void 0 : GB.querySelector(".Dropdown-control")) && void 0 !== OB ? OB : BB,
          QB = sY(DB, YB.root, this.getEnabledCandidates(YB.root));
        if (!QB) return;
        const oB = (0, GY.r)(YB.layer);
        oB === this.layerKey && YB.root === this.layerRoot || this.beginLayer(YB, oB), this.wasActive ? this.setFocus(QB, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = QB, this.lastFocusedCentre = (0, eB.w)(QB), this.rememberFocus(QB), this.notify())
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
          this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && HY(this.focused, null, (0, eB.w)(this.focused)), this.notify()
        }
      }
      setFocus(BB) {
        var OB;
        let {
          scroll: GB = !0,
          byUser: YB = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (YB && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), BB === this.focused) return;
        const DB = null !== (OB = this.focused) && void 0 !== OB && OB.isConnected ? this.focused : null;
        if (this.focused = BB, BB) {
          GB && (BB.classList.add(KY), BB.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), YB && ((BB, OB) => {
            const GB = OB.closest("[data-pad-friends-column]");
            GB && BB && !GB.contains(BB) && (hG = new WeakRef(BB))
          })(DB, BB);
          const OB = (0, eB.w)(BB);
          this.lastFocusedCentre = OB, this.movedInLayer && this.rememberFocus(BB), HY(DB, BB, OB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, eB.b)(BB)
        } else DB && HY(DB, null, (0, eB.w)(DB));
        this.notify()
      }
      rememberFocus(BB) {
        const OB = this.layerRoot;
        this.layerKey && OB && this.memory.remember(this.layerKey, BB, OB, (() => this.getEnabledCandidates(OB)))
      }
      noteCursorActivation(BB) {
        const OB = MY();
        if (!OB || !OB.root.contains(BB)) return;
        const GB = this.getEnabledCandidates(OB.root),
          YB = new Set(GB);
        let DB = BB;
        for (; DB && !YB.has(DB);) DB = DB === OB.root ? null : DB.parentElement;
        if (!(DB instanceof HTMLElement)) return;
        const QB = (0, GY.r)(OB.layer);
        this.memory.enter(QB), this.memory.remember(QB, DB, OB.root, (() => GB))
      }
      notePageEnteredByCursor(BB) {
        return this.memory.enter(BB)
      }
      recallStop(BB, OB) {
        return this.findRemembered(BB, OB)
      }
      focusWhenFound(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: BB,
          untilMs: performance.now() + OB,
          holdWhile: GB
        }
      }
      getEnabledCandidates(BB) {
        return (0, xB.h)(BB).filter((BB => !(0, xB.x)(BB)))
      }
      onFrame(BB) {
        var OB;
        const GB = MY();
        if (!GB) return;
        const YB = null !== (OB = this.findOpenDropdown(GB)) && void 0 !== OB ? OB : GB,
          DB = performance.now(),
          QB = (0, GY.r)(YB.layer);
        if (QB !== this.layerKey || YB.root !== this.layerRoot) {
          const OB = this.focused;
          if (null !== this.layerKey && YB.root === this.layerRoot && OB && (0, xB.t)(OB, YB.root)) this.continueLayer(QB, OB), this.wasActive || this.resume(YB.root, DB);
          else {
            const OB = !this.wasActive && !BB.wokeDevice,
              oB = "death" === this.layerKind || OB,
              jB = this.enterLayer(YB, QB);
            "popup" !== YB.layer.kind || YB !== GB || jB ? "menu" === YB.layer.kind && oB && "inGame" === yB.c.get("gameState") && !(0, oG.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = DB + uY.c) : (this.pressGuardExtends = OB, this.pressGuardUntilMs = DB + (OB ? uY.c : oB ? 500 : 250))
          }
        } else this.wasActive || this.resume(YB.root, DB);
        if (this.layerKind = YB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(YB.root), this.validateFocus(YB, DB), DB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, MB.h)("menuConfirm")) || BB.wasPressed((0, MB.h)("menuBack"))) && (this.pressGuardUntilMs = DB + uY.c), DB >= this.pressGuardUntilMs && this.handleButtons(BB, YB)) return;
        const oB = "hybrid" === AY();
        if (oB && (BB => {
            const OB = zY();
            return OB !== WY && (WY = OB, RY.lock()), RY.update(BB, (0, zB.k)().moveDeadzone)
          })(BB.leftStick)) return jB = this.getHandoff(), NY = lY(jB), qY = zY(), void PB.c.handOffHeldInput();
        var jB;
        this.handleDirections(BB, YB, DB, !oB), this.handleScroll(BB, YB)
      }
      findOpenDropdown(BB) {
        const OB = BB.root.querySelector(aY);
        if (!OB || !(0, xB.s)(OB)) return null;
        let GB = this.dropdownLayers.get(OB);
        return GB || (this.dropdownLayerCounter++, GB = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: BB.layer.kind,
          getRoot: () => OB,
          close: () => {
            (0, eB.l)(OB)
          },
          memoryKey: null
        }, this.dropdownLayers.set(OB, GB)), {
          layer: GB,
          root: OB,
          order: BB.order
        }
      }
      focusPointedStop(BB) {
        const OB = (0, lB.d)(),
          GB = OB ? document.elementFromPoint(OB.x, OB.y) : null;
        if (!GB || !BB.contains(GB)) return;
        const YB = sY(GB, BB, this.getEnabledCandidates(BB));
        YB && this.setFocus(YB, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(BB, OB) {
        const GB = this.beginLayer(BB, OB),
          YB = SY();
        return YB && xY(YB, BB.root) ? (this.takeOver(BB.root, YB, this.enteredLayerAtMs), GB) : (this.restoreLayerFocus(BB.root, GB), GB)
      }
      beginLayer(BB, OB) {
        return this.layerKey = OB, this.layerRoot = BB.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(OB)
      }
      restoreLayerFocus(BB, OB) {
        const GB = OB && this.layerKey ? this.findRemembered(BB, this.layerKey) : null;
        this.restoredFromMemory = null !== GB, this.setFocus(null !== GB && void 0 !== GB ? GB : this.pickInitial(BB, {
          waitForContent: !0
        }))
      }
      continueLayer(BB, OB) {
        this.layerKey = BB;
        const GB = this.memory.enter(BB);
        this.restoreOnFocusLoss = GB, this.movedInLayer && !GB && this.rememberFocus(OB)
      }
      resume(BB, OB) {
        var GB;
        const YB = SY();
        YB && xY(YB, BB) ? this.takeOver(BB, YB, OB) : null !== (GB = this.focused) && void 0 !== GB && GB.isConnected && HY(null, this.focused, (0, eB.w)(this.focused))
      }
      pickPreferred(BB) {
        var OB;
        return null !== (OB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== OB ? OB : this.pickInitial(BB, {
          waitForContent: !0
        })
      }
      findRemembered(BB, OB) {
        return this.memory.has(OB) ? this.memory.recall(OB, this.getEnabledCandidates(BB)) : null
      }
      getHandoff() {
        var BB, OB, GB;
        const YB = null !== (BB = this.focused) && void 0 !== BB && BB.isConnected ? this.focused : null,
          DB = null !== (OB = this.layerRoot) && void 0 !== OB && OB.isConnected ? this.layerRoot : null;
        return {
          point: YB ? (0, eB.w)(YB) : null !== (GB = this.lastFocusedCentre) && void 0 !== GB ? GB : this.getLayerStartPoint(DB),
          element: YB,
          direction: null
        }
      }
      getLayerStartPoint(BB) {
        if (!BB) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const OB = this.pickInitial(BB, {
          includeDisabled: !0
        });
        return (0, eB.w)(null !== OB && void 0 !== OB ? OB : BB)
      }
      takeOver(BB, OB, GB) {
        const {
          element: YB,
          direction: DB,
          point: QB
        } = OB, oB = YB instanceof HTMLElement && (0, xB.t)(YB, BB) ? YB : null;
        if (!DB) {
          const OB = this.focused;
          return oB ? this.setFocus(oB, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(BB, QB), void(this.focused && this.focused === OB && this.focused.isConnected && HY(null, this.focused, (0, eB.w)(this.focused)))
        }
        if (this.dpadRepeats.get(DB).update(!0, GB), oB) return this.setFocus(oB, {
          scroll: !1,
          byUser: !0
        }), void this.move(BB, DB, GB, !0);
        const jB = this.getEnabledCandidates(BB),
          yB = jB.map(vY),
          JB = WG(new DOMRect(QB.x, QB.y, 0, 0), yB, DB),
          MB = JB >= 0 ? JB : UG(QB, yB);
        this.setFocus(MB >= 0 ? jB[MB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      focusNearest(BB, OB) {
        const GB = this.getEnabledCandidates(BB),
          YB = UG(OB, GB.map(vY));
        this.setFocus(YB >= 0 ? GB[YB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      pickDefault(BB) {
        let {
          includeDisabled: OB = !1,
          exclude: GB = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const YB = [...BB.querySelectorAll(hY)].filter((YB => (null === GB || void 0 === GB || !GB.has(YB)) && (OB ? (0, xB.A)(YB, BB) : (0, xB.t)(YB, BB)))),
          DB = gY(YB.map(iY));
        return DB >= 0 ? YB[DB] : null
      }
      pickNewAreaStart(BB, OB) {
        const GB = [...BB.querySelectorAll(bY)].filter(xB.s);
        for (const YB of [...(0, xB.i)(BB), ...GB]) {
          if (OB.has(YB)) continue;
          const BB = this.getEnabledCandidates(YB),
            GB = gY(BB.map(iY));
          if (GB >= 0) return BB[GB]
        }
        return null
      }
      pickInitial(BB) {
        let {
          includeDisabled: OB = !1,
          waitForContent: GB = !1,
          enteredAtMs: YB = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DB = this.pickDefault(BB, {
          includeDisabled: OB
        });
        if (DB) return DB;
        const QB = BB => OB ? (0, xB.h)(BB) : this.getEnabledCandidates(BB);
        let oB = [];
        for (const zB of (0, xB.i)(BB))
          if (oB = QB(zB), oB.length > 0) break;
        if (0 === oB.length) {
          if (GB && performance.now() - YB < 1e4 && (0, xB.o)(BB)) return null;
          oB = QB(BB)
        }
        const jB = oB.map(vY),
          yB = iB(null),
          JB = oB.filter(((BB, OB) => LB(jB[OB], yB))),
          MB = JB.length > 0 ? JB : oB,
          PB = gY(MB.map(iY));
        return PB >= 0 ? MB[PB] : null
      }
      validateFocus(BB, OB) {
        if (this.pendingFocus) {
          var GB, YB;
          const DB = this.pendingFocus.find();
          if (DB && (0, xB.t)(DB, BB.root)) return this.pendingFocus = null, void this.setFocus(DB, {
            byUser: !0
          });
          OB > this.pendingFocus.untilMs && (null === (GB = (YB = this.pendingFocus).holdWhile) || void 0 === GB || !GB.call(YB)) && (this.pendingFocus = null)
        }
        const DB = this.focused,
          QB = !!DB && (0, xB.t)(DB, BB.root);
        if (!(!QB && DB && DB === this.lastActivated && OB - this.lastActivatedAtMs < 5e3 && BB.root.contains(DB) && (0, xB.s)(DB) && (0, xB.x)(DB))) {
          if (!QB && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = OB, void this.restoreLayerFocus(BB.root, !0);
          if ((!QB || !this.movedInLayer && !this.scrolledInLayer) && !(OB - this.lastRefocusCheckMs < (QB ? 200 : 50)))
            if (this.lastRefocusCheckMs = OB, QB) {
              const GB = OB - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(BB.root) : null,
                YB = null !== GB && void 0 !== GB ? GB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
              YB && YB !== DB && this.setFocus(YB)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const OB = this.pendingFocus;
                return this.focusNearest(BB.root, this.lastFocusedCentre), void(this.pendingFocus = OB)
              }
              this.setFocus(this.pickPreferred(BB.root))
            }
        }
      }
      handleButtons(BB, OB) {
        if (BB.wasPressed((0, MB.h)("menuToggleCursor"))) return VY(this.getHandoff()), !0;
        if (BB.wasPressed((0, MB.h)("menuBack"))) {
          const BB = (0, eB.l)(OB.root);
          return BB ? this.setFocus(BB, {
            byUser: !0
          }) : aG(this, OB.root) || ((0, eB.f)(OB.root) ? this.returnToOpener(OB.root) : this.backToStrip(OB.root) || PY()), !0
        }
        const GB = (0, MB.h)("menuConfirm");
        var YB, DB;
        BB.wasPressed(GB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (YB = null === (DB = this.focused) || void 0 === DB ? void 0 : DB.getAttribute("data-pad-repeat")) && void 0 !== YB ? YB : null, this.confirmRepeated = BB.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (BB.wasReleased(GB)) {
          const BB = this.confirmPressedOn;
          if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, xB.x)(BB)) {
            const GB = BB.matches("[data-pad-tab]") ? BB.closest(TY) : null;
            GB ? this.enterTab(BB, GB, OB.root, performance.now()) : this.activate(BB)
          }
          return !0
        }
        return this.repeatConfirm(BB, GB), tG(this, BB, OB)
      }
      repeatConfirm(BB, OB) {
        const GB = this.confirmPressedOn;
        GB && null !== this.confirmRepeatKey && BB.isHeld(OB) && (GB === this.focused && GB.isConnected && !(0, xB.x)(GB) && GB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? GB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(GB)) : this.confirmRepeatKey = null)
      }
      backToStrip(BB) {
        const OB = this.focused;
        if (!(0, zB.k)().menuBackToCategories) return !1;
        const GB = null !== OB && void 0 !== OB && OB.isConnected ? this.tabStripNav.backToStrip(OB, this.getEnabledCandidates(BB), BB) : null;
        return GB && this.setFocus(GB, {
          byUser: !0
        }), null !== GB
      }
      returnToOpener(BB) {
        const OB = this.lastActivatedKey;
        OB && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var GB;
          return null !== (GB = this.getEnabledCandidates(BB).find((BB => (0, eB.x)(BB) === OB))) && void 0 !== GB ? GB : null
        })))
      }
      activate(BB) {
        var OB;
        if ((0, mY.b)(BB) || (0, eB.A)(BB)) return;
        this.lastActivatedKey = null !== (OB = (0, eB.x)(BB)) && void 0 !== OB ? OB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
        const GB = this.layerRoot;
        if (GB) {
          const OB = new Set(GB.querySelectorAll(hY)),
            YB = new Set(GB.querySelectorAll(`[data-pad-initial-area], ${bY}`)),
            DB = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var DB;
            return (0, xB.t)(BB, GB) ? null : null !== (DB = this.pickDefault(GB, {
              exclude: OB
            })) && void 0 !== DB ? DB : this.pickNewAreaStart(GB, YB)
          }), 5e3, (() => BB.isConnected && (0, xB.x)(BB) && performance.now() - DB < 6e4))
        }(0, eB.b)(BB), (0, eB.i)(BB)
      }
      handleDirections(BB, OB, GB, YB) {
        const DB = mG(OB.layer.kind) ? (0, MB.h)("chat") : null;
        for (const jB of pB.G) {
          this.dpadRepeats.get(jB).update(BB.isHeld(jB), GB) && (jB !== DB || BB.wasPressed(jB)) && this.move(OB.root, jB, GB, !0)
        }
        const QB = YB ? (0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          oB = this.stickRepeat.update((0, pB.nb)(QB), GB);
        if (oB && this.move(OB.root, oB, GB, !0), this.retryMove && GB >= this.retryMove.atMs) {
          const {
            direction: BB
          } = this.retryMove;
          this.retryMove = null, this.move(OB.root, BB, GB, !1)
        }
      }
      move(BB, OB, GB, YB) {
        var DB;
        let QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (DB = this.tabOpenWait) || void 0 === DB ? void 0 : DB.wait) && OB === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const oB = this.focused;
        if (!oB || !oB.isConnected) {
          const OB = this.pickInitial(BB);
          return void(OB && this.setFocus(OB, {
            byUser: !0
          }))
        }
        const jB = "Left" === OB || "Right" === OB,
          yB = jB ? (0, mY.b)(oB) : null;
        if (yB) return void yB.adjust("Left" === OB ? -1 : 1);
        const JB = BB => null !== BB.closest("[data-pad-friends-column]"),
          MB = JB(oB),
          PB = vY(oB),
          zB = jB || oB.closest(TY) ? null : (BB => {
            const OB = new Map;
            return GB => {
              const YB = GB.closest(TY);
              if (!YB) return !1;
              let DB = OB.get(YB);
              if (void 0 === DB) {
                const GB = vY(YB);
                DB = RG(BB, GB) && (GB.right <= BB.left || GB.left >= BB.right), OB.set(YB, DB)
              }
              return DB
            }
          })(PB),
          lB = null !== oB.closest(eY),
          pB = this.getEnabledCandidates(BB).filter((BB => BB !== oB && (jB || JB(BB) === MB) && !(null !== zB && void 0 !== zB && zB(BB)) && (lB || !BB.closest(eY)))),
          qB = pB.map(vY),
          ZB = dB(oB, "y", BB),
          NB = iB(ZB);
        if (!QB && !LB(PB, NB)) {
          const BB = pB.filter(((BB, OB) => LB(qB[OB], NB)));
          if (BB.length > 0) {
            const OB = {
              x: NB.left + NB.width / 2,
              y: NB.top + NB.height / 2
            };
            return void this.setFocus(BB[UG(OB, BB.map(vY))], {
              byUser: !0
            })
          }
        }
        const RB = jB ? ((BB, OB, GB) => {
            const YB = vY(BB),
              DB = BB.closest(TY),
              QB = DB ? vY(DB) : null;
            return OB.map(((OB, oB) => {
              const jB = GB[oB];
              if (jB.bottom > YB.top && jB.top < YB.bottom) return !0;
              const yB = OB.closest(TY);
              if (DB && QB) return yB !== DB && (null !== yB || jB.bottom <= QB.top || jB.top >= QB.bottom);
              if (yB) return !RG(YB, vY(yB));
              let JB = BB;
              for (let GB = BB.parentElement; GB && !GB.contains(OB); GB = GB.parentElement) JB = GB;
              const MB = vY(JB);
              return jB.right > MB.left && jB.left < MB.right
            }))
          })(oB, pB, qB) : void 0,
          WB = jB && !oB.closest(TY) ? (BB => BB.map((BB => !BB.closest(FY))))(pB) : void 0,
          AB = ((BB, OB) => {
            const GB = [];
            for (let DB = BB; DB; DB = DB.parentElement) GB.push(DB);
            const YB = new Map;
            return GB.forEach(((BB, OB) => {
              YB.set(BB, GB.length - 1 - OB)
            })), OB.map((BB => {
              for (let OB = BB; OB; OB = OB.parentElement) {
                const BB = YB.get(OB);
                if (void 0 !== BB) return BB
              }
              return -1
            }))
          })(oB, pB),
          VB = jB ? "x" : "y",
          SB = dB(oB, VB, BB);
        let nB = WG(PB, qB, OB, AB, RB, WB);
        if (nB >= 0 && SB && !SB.contains(pB[nB])) {
          const BB = pB.flatMap(((BB, OB) => SB.contains(BB) ? [OB] : [])),
            GB = OB => OB && BB.map((BB => OB[BB])),
            YB = WG(PB, BB.map((BB => qB[BB])), OB, BB.map((BB => AB[BB])), GB(RB), GB(WB));
          nB = YB >= 0 ? BB[YB] : nB
        }
        if (nB >= 0) return void this.moveTo(oB, pB[nB], pB, BB, OB, QB);
        if (!YB) return;
        const UB = "Right" === OB || "Down" === OB ? 1 : -1;
        if (SB && IB(SB, VB, UB)) {
          const BB = "y" === VB ? SB.clientHeight : SB.clientWidth;
          FB(SB, VB, UB * BB * .5), this.retryMove = {
            direction: OB,
            atMs: GB + 80
          }
        }
      }
      moveTo(BB, OB, GB, YB, DB, QB) {
        const oB = this.tabStripNav.findTabContent(BB, OB, GB);
        oB && "true" !== BB.dataset.padSelected ? this.openTab(BB, oB, YB, DB) : QB && !oB || this.setFocus(this.tabStripNav.redirect(BB, OB, GB, YB), {
          byUser: !0
        })
      }
      openTab(BB, OB, GB, YB) {
        const DB = OB.parentElement;
        (0, eB.b)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : OB.isConnected ? this.tabStripNav.pickContentStart(OB, this.getEnabledCandidates(GB), GB) : DB ? this.tabStripNav.pickReplacedContentStart(BB, DB, this.getEnabledCandidates(GB), GB) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: YB
        }
      }
      enterTab(BB, OB, GB, YB) {
        this.move(GB, (BB => {
          const OB = [...BB.querySelectorAll(XY)].filter((OB => OB.closest(rY) === BB));
          if (OB.length >= 2) {
            const BB = OB[0].getBoundingClientRect(),
              GB = OB[1].getBoundingClientRect();
            return Math.abs(GB.top - BB.top) > Math.abs(GB.left - BB.left) ? "Right" : "Down"
          }
          const GB = BB.getBoundingClientRect();
          return GB.height > GB.width ? "Right" : "Down"
        })(OB), YB, !1, !0), this.focused !== BB || this.pendingFocus || this.activate(BB)
      }
      handleScroll(BB, OB) {
        const GB = (0, pB.n)(BB.rightStick, .2);
        if (0 === GB.x && 0 === GB.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const YB = BB.dtMs / 1e3;
        for (const QB of ["x", "y"]) {
          var DB;
          const BB = GB[QB];
          if (0 === BB) continue;
          const oB = null !== (DB = dB(this.focused, QB, OB.root)) && void 0 !== DB ? DB : uB(OB.root, QB);
          if (!oB) continue;
          const jB = Math.sign(BB) * BB * BB * 1500 * YB + this.scrollRemainder[QB],
            yB = Math.trunc(jB);
          this.scrollRemainder[QB] = jB - yB, 0 !== yB && (FB(oB, QB, yB), this.scrolledInLayer = !0)
        }
      }
    };
    var BD = GB(8924);
    var OD = GB(9397);
    const GD = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      YD = {
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
          ...GD,
          minIntervalMs: 1e3
        },
        preview: {
          ...GD,
          minIntervalMs: 0
        }
      };
    const DD = new class {
        constructor(BB) {
          this.deps = BB, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = BB => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", BB))
          }
        }
        play(BB, OB) {
          const GB = YD[BB];
          if (!this.deps.isVibrationOn() || GB.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const YB = this.lastPlayedMs[BB];
          if (void 0 !== YB && OB - YB < GB.minIntervalMs) return !1;
          const DB = this.deps.getActuator();
          if (!DB) return !1;
          this.lastPlayedMs[BB] = OB;
          const {
            duration: QB,
            strongMagnitude: oB,
            weakMagnitude: jB
          } = GB;
          try {
            DB.playEffect("dual-rumble", {
              duration: QB,
              strongMagnitude: oB,
              weakMagnitude: jB
            }).catch(this.logFailure)
          } catch (yB) {
            this.logFailure(yB)
          }
          return !0
        }
      }({
        getActuator: () => (BB => {
          const OB = null === BB || void 0 === BB ? void 0 : BB.vibrationActuator;
          return "function" === typeof(null === OB || void 0 === OB ? void 0 : OB.playEffect) ? OB : null
        })(oB.g.getActiveGamepad()),
        isVibrationOn: () => (0, zB.k)().vibration,
        isPadInUse: lB.k
      }),
      QD = BB => {
        DD.play(BB, performance.now())
      };
    var oD = GB(8932),
      jD = GB(3262),
      yD = GB(104),
      JD = GB(31),
      MD = GB(677);
    class PD {
      constructor(BB) {
        this.deps = BB
      }
      check() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const OB = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!OB) return "skipped";
        const GB = BB ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === GB || this.deps.readReportedVisitId() === GB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(GB), this.deps.jP(OB, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const zD = "controllerUsageReportedVisit";
    var lD = GB(1400),
      pD = GB(1822),
      qD = GB(662),
      ZD = GB(1480),
      ND = GB(1253);
    const RD = BB => ({
        translationKey: `controller:${BB}`
      }),
      WD = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: RD("padButtonView"),
        Menu: RD("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: RD("padButtonDpadUp"),
        Down: RD("padButtonDpadDown"),
        Left: RD("padButtonDpadLeft"),
        Right: RD("padButtonDpadRight"),
        Home: RD("padButtonHome"),
        LeftStick: RD("padButtonLeftStick"),
        RightStick: RD("padButtonRightStick")
      },
      AD = {
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
          View: RD("padButtonCreate"),
          Menu: RD("padButtonOptions")
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
      VD = (BB, OB) => {
        var GB;
        const YB = null !== (GB = AD[BB][OB]) && void 0 !== GB ? GB : WD[OB];
        return "string" === typeof YB ? YB : (0, DB.C)(ND.e.get().getCurrentLanguageCode(), YB.translationKey)
      },
      SD = BB => {
        let {
          glyph: OB,
          family: GB,
          className: YB
        } = BB;
        const DB = (0, lB.D)(),
          QB = null !== GB && void 0 !== GB ? GB : DB,
          oB = (0, oD.c)(QB, OB);
        return (0, wB.jsx)("span", {
          className: XB()("ControllerGlyph", YB),
          role: "img",
          "aria-label": VD(QB, OB),
          style: {
            "--pad-glyph-mask": `url(${oB})`,
            "--pad-glyph-aspect": (0, oD.b)(QB, OB)
          }
        })
      };
    var nD = GB(2e3);
    const UD = BB => {
      let {
        action: OB
      } = BB;
      const {
        t: GB
      } = (0, DB.H)();
      switch (OB.kind) {
        case "reload":
          return (0, wB.jsx)("span", {
            children: GB("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, wB.jsx)(nD.b, {
            text: OB.description ? [{
              icon: OB.icon
            }, ` ${OB.description}`] : [{
              icon: OB.icon
            }]
          });
        case "touchButton":
          return (0, wB.jsx)(nD.b, {
            text: OB.label
          })
      }
    };
    var fD = GB(9402);
    const kD = BB => {
      let {
        hold: OB
      } = BB;
      return (0, wB.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${OB.holdMs}ms`
        },
        children: (0, wB.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, OB.id)
    };
    var dD = GB(9421),
      KD = GB(9424),
      uD = GB(9433),
      mD = GB(9418);
    const ID = () => {
        const {
          gameState: BB
        } = (0, yB.o)(["gameState"]), OB = (0, lB.A)(), [YB, DB] = (0, gB.useState)(!1), [QB, oB] = (0, gB.useState)(!1);
        return (0, gB.useEffect)((() => {
          "inGame" === BB && DB(!0)
        }), [BB]), (0, gB.useEffect)((() => {
          if (!YB) return;
          let BB = null,
            OB = !1;
          return (qD.D ? Promise.all([GB.e(84), GB.e(103), GB.e(300), GB.e(207), GB.e(251), GB.e(250), GB.e(102)]).then((() => GB(41543))).then((BB => BB.startWasmPadGameplay)) : Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(111), GB.e(87), GB.e(85), GB.e(86), GB.e(203), GB.e(255), GB.e(89), GB.e(103), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(234), GB.e(219), GB.e(100), GB.e(269), GB.e(88), GB.e(243), GB.e(174), GB.e(251), GB.e(175)]).then((() => GB(41678))).then((BB => BB.startPadGameplay))).then((GB => {
            OB || (BB = GB())
          })).catch((BB => {
            console.error("Pad gameplay failed to load", BB), OB || oB(!0)
          })), () => {
            var GB;
            OB = !0, null === (GB = BB) || void 0 === GB || GB()
          }
        }), [YB]), (0, gB.useEffect)((() => {
          QB && OB && (oB(!1), lD.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((BB => {
            !0 === BB && (0, pD.reloadBloxd)()
          })))
        }), [QB, OB]), (0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsx)(FD, {}), (0, wB.jsx)(iD, {}), (0, wB.jsx)(LD, {})]
        })
      },
      FD = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, lB.A)(), {
          gameState: GB,
          isUiHidden: YB
        } = (0, yB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: QB
        } = (0, zB.u)(), oB = (0, fD.i)(), jB = (0, fD.j)(), [JB, PB] = (0, gB.useState)(uD.c);
        return (0, ZD.f)(mD.n, PB), !OB || QB || YB || "inGame" !== GB || !oB && !JB ? null : (0, wB.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [oB && (0, wB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, wB.jsx)(SD, {
              glyph: (0, MB.h)("actionButton")
            }), (0, wB.jsx)(UD, {
              action: oB
            }), jB && (0, wB.jsx)("span", {
              className: "PadActionHintMore",
              children: BB("controller:gameplayActionWheelHint")
            })]
          }), JB && (0, wB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, wB.jsx)(SD, {
              glyph: (0, MB.h)("pickBlock")
            }), (0, wB.jsx)("span", {
              children: BB("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      iD = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, lB.A)(), {
          gameState: GB,
          isUiHidden: YB
        } = (0, yB.o)(["gameState", "isUiHidden"]), [QB, oB] = (0, gB.useState)(dD.e);
        return (0, ZD.f)(mD.m, oB), OB && !YB && "inGame" === GB && QB ? (0, wB.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, wB.jsx)("span", {
            children: BB("controller:gameplayDropStack")
          }), (0, wB.jsx)(kD, {
            hold: QB
          })]
        }) : null
      },
      LD = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, lB.A)(), {
          gameState: GB,
          isUiHidden: YB
        } = (0, yB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: QB
        } = (0, zB.u)(), [oB, jB] = (0, gB.useState)(KD.d);
        return (0, ZD.f)(mD.l, jB), OB && !YB && "inGame" === GB && oB ? (0, wB.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!QB && (0, wB.jsx)(SD, {
            glyph: (0, MB.h)("attack")
          }), (0, wB.jsx)("span", {
            children: BB("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var gD = GB(9439),
      rD = GB(2050),
      XD = GB(2653),
      wD = GB(8913);
    const ED = BB => BB && !(0, gD.e)(rD.e.get("shopInfo")),
      cD = () => {
        const BB = "inGame" === (0, yB.o)(["gameState"]).gameState;
        return (0, XD.f)("shopInfo", (() => {
          (0, wD.e)(ED(BB))
        })), (0, gB.useEffect)((() => {
          (0, wD.e)(ED(BB))
        }), [BB]), null
      },
      hD = () => {
        const {
          t: BB
        } = (0, DB.H)(), {
          hideButtonHints: OB
        } = (0, zB.u)();
        (0, lB.D)();
        const GB = (0, XO.l)();
        return (0, gB.useEffect)((() => (() => {
          const BB = PB.c.register({
              name: "inventory",
              isActive: DG.isActive,
              onFrame: DG.onFrame,
              onDeactivate: DG.onDeactivate,
              wakePressActs: DG.wakePressActs
            }),
            OB = BB => {
              DG.noteRealPointer(BB), DG.shouldBlockRealPointer(BB) && BB.stopPropagation()
            };
          for (const oB of QG) window.addEventListener(oB, OB, !0);
          const GB = (0, sB.j)((() => {
              "inventory" !== PB.c.getActiveConsumerName() && DG.forgetSurface()
            })),
            YB = BB => {
              const OB = BB.target;
              (0, lB.k)() && (0, CB.f)(OB) && OB.closest(VO) && (0, sB.i)() && (0, sB.n)(OB)
            };
          document.addEventListener("focusout", YB, !0);
          const {
            invalidate: DB,
            onScroll: QB
          } = DG.targets;
          return document.addEventListener("scroll", QB, !0), window.addEventListener("resize", DB), () => {
            BB(), GB();
            for (const BB of QG) window.removeEventListener(BB, OB, !0);
            document.removeEventListener("scroll", QB, !0), document.removeEventListener("focusout", YB, !0), window.removeEventListener("resize", DB), DG.targets.disconnect()
          }
        })()), []), (0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsx)(aB, {
            placer: DG.ring,
            className: "InventorySlotCursorRing"
          }), GB.showing && !OB && (0, wB.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: vB(GB).map((OB => {
              let {
                actions: YB,
                labelKey: DB
              } = OB;
              return (0, wB.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [YB.map((BB => (0, wB.jsx)(SD, {
                  glyph: (0, MB.h)(BB)
                }, BB))), (0, wB.jsx)("span", {
                  children: BB(`controller:${DB}`)
                }), "inventoryDrop" === DB && GB.dropStackHold && (0, wB.jsx)(kD, {
                  hold: GB.dropStackHold
                })]
              }, DB)
            }))
          })]
        })
      },
      aD = [{
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
      eD = BB => Array.from(BB).map((BB => ({
        type: "char",
        char: BB,
        width: 1
      }))),
      TD = function(BB) {
        return {
          type: "command",
          command: BB,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      bD = [TD("page", 2), TD("otherPage"), TD("caretLeft"), TD("space", 3), TD("caretRight"), TD("close", 1.5), TD("submit", 1.5)],
      CD = [TD("page", 2), TD("otherPage"), TD("caretLeft"), TD("space", 2), TD("caretRight"), TD("newline"), TD("close", 1.5), TD("submit", 1.5)],
      HD = [
        [...eD("1234567890"), TD("backspace")], eD("qwertyuiop/"), eD("asdfghjkl'?"), [TD("shift", 2), ...eD("zxcvbnm,.")]
      ],
      vD = [
        [...eD("1234567890"), TD("backspace")], eD("!@#$%^&*()/"), eD('-_=+[]{};:"'), eD("~`|\\<>'\u20ac\xa3,.")
      ],
      sD = {
        letters: HD,
        accents: [
          [...eD("1234567890"), TD("backspace")], eD("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), eD("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [TD("shift", 2), ...eD("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: vD
      },
      xD = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      tD = (BB, OB) => "letters" === BB ? OB ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === BB ? "symbols" : "accents"
      },
      BQ = function(BB, OB) {
        const GB = ((BB, OB) => [...sD[BB], OB ? CD : bD])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === OB) return GB;
        const YB = Math.min(2, OQ(GB[0]) / OB);
        return [Array.from({
          length: OB
        }, ((BB, OB) => ({
          type: "phrase",
          phraseIndex: OB,
          width: YB
        }))), ...GB]
      },
      OQ = BB => BB.reduce(((BB, OB) => BB + OB.width), 0),
      GQ = BB => Math.max(...BB.map(OQ)),
      YQ = (BB, OB) => {
        const GB = BB[OB.row];
        let YB = (GQ(BB) - OQ(GB)) / 2;
        for (let DB = 0; DB < OB.col; DB++) YB += GB[DB].width;
        return YB + GB[OB.col].width / 2
      },
      DQ = (BB, OB, GB) => {
        let YB = 0,
          DB = 1 / 0;
        for (let QB = 0; QB < BB[OB].length; QB++) {
          const oB = Math.abs(YQ(BB, {
            row: OB,
            col: QB
          }) - GB);
          oB < DB - 1e-9 && (YB = QB, DB = oB)
        }
        return YB
      },
      QQ = (BB, OB) => {
        const GB = Math.max(0, Math.min(BB.length - 1, OB.row));
        return {
          row: GB,
          col: Math.max(0, Math.min(BB[GB].length - 1, OB.col))
        }
      },
      oQ = (BB, OB, GB) => "once" === BB && OB - GB <= 400 ? "caps" : "off" === BB ? "once" : "off",
      jQ = (BB, OB) => "once" === BB && (BB => BB.toLowerCase() !== BB.toUpperCase())(OB) ? "off" : BB,
      yQ = (BB, OB, GB) => {
        if ("symbols" === OB || "off" === GB) return BB;
        const YB = BB.toUpperCase();
        return 1 === YB.length ? YB : BB
      };
    var JQ = GB(9322);
    const MQ = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const PQ = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(BB) {
          return !(BB - this.lastSendMs < 2e3) && (this.lastSendMs = BB, !0)
        }
      },
      zQ = {
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
      lQ = ["KJ", "nameTag"],
      pQ = BB => {
        const OB = BB.target instanceof HTMLTextAreaElement && !lQ.includes(BB.kind);
        return BQ(BB.page, "chat" === BB.kind ? MQ.length : 0, OB)
      },
      qQ = BB => {
        const OB = BB.getBoundingClientRect(),
          GB = window.innerHeight,
          YB = OB.top + OB.height / 2 < GB / 2 ? "bottom" : "top",
          DB = "bottom" === YB ? GB - OB.bottom - 6 : OB.top - 6;
        return {
          placement: YB,
          maxHeightPx: Math.min(.46 * GB, Math.max(.3 * GB, DB))
        }
      },
      ZQ = BB => {
        (0, dG.h)(BB) ? (0, dG.b)().close(): (tY.noteChosenStop(BB), BB.blur())
      };
    class NQ {
      constructor(BB) {
        this.host = BB, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(BB, OB) {
        this.phraseTexts = BB, this.phrasesFill = OB
      }
      pressKey(BB) {
        const OB = this.host.getState(),
          GB = pQ(OB),
          YB = GB[BB.row][BB.col];
        this.host.setState({
          ...OB,
          focus: BB,
          preferredX: YQ(GB, BB)
        }), "char" === YB.type ? this.typeChar(YB.char) : "command" === YB.type ? this.runCommand(YB.command) : this.sendPhrase(YB.phraseIndex)
      }
      runCommand(BB) {
        const OB = this.host.getState();
        switch (BB) {
          case "backspace":
            (0, CB.c)(OB.target);
            break;
          case "space":
            (0, CB.e)(OB.target, " ");
            break;
          case "newline":
            (0, CB.e)(OB.target, "\n");
            break;
          case "caretLeft":
            (0, CB.h)(OB.target, -1);
            break;
          case "caretRight":
            (0, CB.h)(OB.target, 1);
            break;
          case "shift": {
            const BB = performance.now();
            this.host.setState({
              ...OB,
              shift: oQ(OB.shift, BB, this.lastShiftPressMs)
            }), this.lastShiftPressMs = BB;
            break
          }
          case "page":
          case "otherPage": {
            const GB = tD(OB.page, OB.accentsFirst)[BB];
            this.host.setState({
              ...OB,
              page: GB,
              focus: QQ(pQ({
                ...OB,
                page: GB
              }), OB.focus)
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
            (0, dG.h)(OB.target) && (0, dG.b)().selectNextChannel()
        }
      }
      submit() {
        var BB, OB;
        const {
          target: GB
        } = this.host.getState();
        this.host.hide(), (0, dG.h)(GB) ? (0, dG.b)().submit() : (tY.noteChosenStop(GB), null === (BB = (OB = (0, dG.f)(GB)).submit) || void 0 === BB || BB.call(OB), document.activeElement === GB && GB.blur())
      }
      close() {
        const {
          target: BB
        } = this.host.getState();
        this.host.hide(), ZQ(BB)
      }
      typeChar(BB) {
        const {
          target: OB,
          page: GB,
          shift: YB
        } = this.host.getState();
        (0, CB.e)(OB, yQ(BB, GB, YB)), this.host.setState({
          ...this.host.getState(),
          shift: jQ(YB, BB)
        })
      }
      sendPhrase(BB) {
        if (this.phrasesFill) {
          const {
            target: OB
          } = this.host.getState(), GB = this.phraseTexts[BB];
          GB && (OB.setSelectionRange(0, OB.value.length), (0, CB.e)(OB, GB))
        } else PQ.claim(performance.now()) && (this.host.hide(), (0, dG.b)().sendLine(this.phraseTexts[BB]))
      }
    }
    var RQ = GB(9346);
    const WQ = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      AQ = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class VQ {
      constructor(BB, OB) {
        this.host = BB, this.editor = OB, this.lastDirection = null, this.navRepeat = new pB.e((0, qB.d)(WQ)), this.commandRepeats = new Map(aD.filter((BB => {
          let {
            repeats: OB
          } = BB;
          return OB
        })).map((BB => {
          let {
            command: OB
          } = BB;
          return [OB, (0, qB.d)(AQ)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const BB of this.commandRepeats.values()) BB.reset()
      }
      onVisibleFrame(BB) {
        const OB = performance.now();
        for (const {
            command: DB,
            action: QB
          }
          of aD) {
          const GB = (0, MB.h)(QB),
            YB = this.commandRepeats.get(DB);
          if ((YB ? YB.update(BB.isHeld(GB), OB) : BB.wasPressed(GB)) && (this.editor.runCommand(DB), !this.host.getState().visible)) return
        }
        if (BB.wasPressed((0, MB.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const GB = this.readNavDirection(BB);
        this.lastDirection = GB;
        const YB = this.navRepeat.update(GB, OB);
        YB && this.navigate(YB)
      }
      onHiddenFrame(BB, OB) {
        var GB;
        if (BB.wasPressed((0, MB.h)("keyboardClose"))) return void ZQ(OB);
        const YB = (0, MB.h)("keyboardType");
        if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void this.host.open(OB);
        const DB = this.readNavDirection(BB),
          QB = null !== DB && DB !== this.lastDirection;
        if (this.lastDirection = DB, !QB || (0, dG.h)(OB)) return;
        const oB = (null === (GB = MY()) || void 0 === GB ? void 0 : GB.root.contains(OB)) || null !== OB.closest(".EntireInventoryWrapper");
        ZQ(OB), oB && PB.c.handOffHeldInput()
      }
      navigate(BB) {
        const OB = this.host.getState();
        if ("Up" === BB && 0 === OB.focus.row && "chat" === OB.kind) return (0, dG.b)().stepHistory(), void this.host.setState({
          ...OB
        });
        const GB = ((BB, OB, GB, YB) => {
          if ("Left" === GB || "Right" === GB) {
            const YB = BB[OB.row].length,
              DB = (OB.col + ("Right" === GB ? 1 : -1) + YB) % YB,
              QB = {
                row: OB.row,
                col: DB
              };
            return {
              pos: QB,
              preferredX: YQ(BB, QB)
            }
          }
          const DB = (OB.row + ("Down" === GB ? 1 : -1) + BB.length) % BB.length;
          return {
            pos: {
              row: DB,
              col: DQ(BB, DB, YB)
            },
            preferredX: YB
          }
        })(pQ(OB), OB.focus, BB, OB.preferredX);
        this.host.setState({
          ...OB,
          focus: GB.pos,
          preferredX: GB.preferredX
        })
      }
      readNavDirection(BB) {
        for (const OB of pB.G)
          if (BB.isHeld(OB)) return OB;
        return (0, pB.nb)((0, pB.n)(BB.leftStick, (0, zB.k)().moveDeadzone))
      }
    }
    const SQ = ["Up", "Down", "Left", "Right"],
      nQ = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const UQ = new class {
      constructor() {
        this.state = zQ, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new NQ(this), this.padInput = new VQ(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(BB) {
        const OB = BB.visible !== this.state.visible;
        this.state = BB;
        for (const GB of this.listeners) GB();
        OB && JB.o.tM(RQ.d, BB.visible)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      install() {
        const BB = PB.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, CB.f)(document.activeElement),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: BB => SQ.includes(BB) || !this.state.visible && BB === (0, MB.h)("keyboardType")
          }),
          OB = BB => {
            const OB = BB.target;
            (0, CB.f)(OB) && (OB === this.pendingChatInput || (0, lB.k)() ? this.open(OB) : this.state.visible && OB !== this.state.target && (this.ownedField = null, this.hide()))
          },
          GB = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          YB = BB => {
            BB.isTrusted && this.state.visible && (BB => !BB.repeat && !nQ.has(BB.key) && !(0, JQ.e)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
          },
          DB = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...qQ(this.state.target)
            })
          };
        document.addEventListener("focusin", OB, !0), document.addEventListener("focusout", GB, !0), window.addEventListener("keydown", YB, !0), window.addEventListener("resize", DB);
        const QB = JB.o.subscribe(mD.e, (() => {
            this.openChat()
          })),
          oB = JB.o.subscribe(RQ.f, (BB => {
            this.openForField(BB)
          }));
        return () => {
          BB(), document.removeEventListener("focusin", OB, !0), document.removeEventListener("focusout", GB, !0), window.removeEventListener("keydown", YB, !0), window.removeEventListener("resize", DB), JB.o.unsubscribe(QB), JB.o.unsubscribe(oB), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const BB = (0, dG.b)();
        BB ? document.activeElement !== BB.input ? (this.clearPendingChat(), this.pendingChatInput = BB.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), BB.open()) : this.open(BB.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(BB) {
        (0, CB.f)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
      }
      open(BB) {
        var OB;
        if (this.clearPendingChat(), this.ownedField = BB, this.state.visible && this.state.target === BB) return;
        this.restoreInputMode(), (0, CB.l)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
        const GB = {
          ...zQ,
          visible: !0,
          target: BB,
          kind: (0, dG.h)(BB) ? "chat" : null !== (OB = (0, dG.f)(BB).kind) && void 0 !== OB ? OB : null,
          accentsFirst: (YB = ND.e.get().getCurrentLanguageCode(), xD.has(YB)),
          ...qQ(BB)
        };
        var YB;
        const DB = pQ(GB),
          QB = ((BB, OB) => {
            for (let GB = 0; GB < BB.length; GB++) {
              const YB = BB[GB].findIndex((BB => "char" === BB.type && BB.char === OB));
              if (-1 !== YB) return {
                row: GB,
                col: YB
              }
            }
            return null
          })(DB, "q");
        this.padInput.reset(), this.setState({
          ...GB,
          focus: QB,
          preferredX: YQ(DB, QB)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(zQ))
      }
      onFrame(BB) {
        if (this.releaseLostField()) return;
        const OB = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, CB.f)(OB) && this.padInput.onHiddenFrame(BB, OB)
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
    var fQ = GB(3039);
    const kQ = new Map(aD.map((BB => {
        let {
          command: OB,
          action: GB
        } = BB;
        return [OB, GB]
      }))),
      dQ = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      KQ = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        KJ: "controller:keyboardTargetBookTitle"
      },
      uQ = BB => {
        const OB = (() => {
          const [, BB] = (0, gB.useReducer)((BB => BB + 1), 0);
          return BB
        })();
        (0, gB.useEffect)((() => {
          if (!BB) return;
          const GB = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const DB of GB) BB.addEventListener(DB, OB);
          document.addEventListener("selectionchange", OB);
          const YB = new MutationObserver(OB);
          return YB.observe(BB, {
            attributeFilter: ["placeholder"]
          }), () => {
            YB.disconnect();
            for (const YB of GB) BB.removeEventListener(YB, OB);
            document.removeEventListener("selectionchange", OB)
          }
        }), [BB, OB])
      },
      mQ = BB => {
        BB.preventDefault()
      },
      IQ = BB => {
        "mouse" !== BB.pointerType && BB.preventDefault()
      },
      FQ = () => {
        var BB;
        const {
          t: OB
        } = (0, DB.H)(), GB = (() => {
          const [BB, OB] = (0, gB.useState)(UQ.getState());
          return (0, gB.useEffect)((() => UQ.subscribe((() => {
            OB(UQ.getState())
          }))), []), BB
        })(), YB = (0, lB.A)(), QB = (0, gB.useRef)(null);
        (0, zB.u)(), (0, lB.D)(), (0, gB.useEffect)((() => {
          const BB = UQ.install(),
            OB = null;
          return () => {
            BB(), null === OB || void 0 === OB || OB()
          }
        }), []);
        const oB = (0, gB.useMemo)((() => MQ.map((BB => OB(BB)))), [OB]),
          jB = GB.visible && "chat" === GB.kind ? GB.target : null;
        uQ(jB);
        const yB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.value) && void 0 !== BB ? BB : "",
          JB = ((BB, OB, GB) => {
            if (!BB.startsWith("/")) return [];
            const YB = [];
            for (let DB = OB.length - 1; DB >= 0 && YB.length < GB; DB--) {
              const GB = OB[DB].trim();
              GB.startsWith(BB) && GB !== BB && !YB.includes(GB) && YB.push(GB)
            }
            return YB
          })(yB, yB.startsWith("/") ? (0, fQ.g)() : [], MQ.length),
          PB = yB.startsWith("/"),
          pB = PB ? MQ.map(((BB, OB) => {
            var GB;
            return null !== (GB = JB[OB]) && void 0 !== GB ? GB : ""
          })) : oB;
        if ((0, gB.useEffect)((() => {
            UQ.editor.setPhraseRow(pB, PB)
          })), (0, gB.useEffect)((() => {
            const BB = QB.current;
            if (BB) return BB.addEventListener("touchstart", mQ, {
              passive: !1
            }), () => {
              BB.removeEventListener("touchstart", mQ)
            }
          }), [GB.visible]), !GB.visible) return null;
        const qB = pQ(GB),
          ZB = GQ(qB),
          NB = BB => "char" === BB.type ? yQ(BB.char, GB.page, GB.shift) : "phrase" === BB.type ? pB[BB.phraseIndex] : (BB => {
            switch (BB) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === GB.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return dQ[tD(GB.page, GB.accentsFirst)[BB]];
              case "space":
                return OB("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return OB("chat" === GB.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(BB.command),
          RB = BB => {
            UQ.editor.pressKey(BB)
          };
        return (0, wB.jsxs)("div", {
          ref: QB,
          className: XB()(dG.o, "top" === GB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: GB.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": qB.length,
            "--pad-keyboard-height": `${GB.maxHeightPx}px`
          },
          onPointerDown: IQ,
          onMouseDown: mQ,
          children: [(0, wB.jsx)(iQ, {
            target: GB.target,
            label: GB.kind ? OB(KQ[GB.kind]) : GB.target.placeholder || OB("controller:keyboardTargetText")
          }), (0, wB.jsx)("div", {
            className: "PadKeyboardRows",
            children: qB.map(((BB, OB) => (0, wB.jsx)("div", {
              className: XB()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === BB[0].type
              }),
              children: BB.map(((BB, DB) => {
                const QB = YB && GB.focus.row === OB && GB.focus.col === DB,
                  oB = "command" === BB.type ? kQ.get(BB.command) : void 0;
                return (0, wB.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: BB.width / ZB * 100 + "%"
                  },
                  children: (0, wB.jsxs)("div", {
                    className: XB()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: QB,
                      PadKeyboardKeyCommand: "command" === BB.type,
                      PadKeyboardKeyPhrase: "phrase" === BB.type,
                      PadKeyboardKeyActive: "command" === BB.type && "shift" === BB.command && "off" !== GB.shift,
                      PadKeyboardKeySubmit: "command" === BB.type && "submit" === BB.command
                    }),
                    role: "button",
                    onClick: () => {
                      RB({
                        row: OB,
                        col: DB
                      })
                    },
                    onTouchEnd: BB => {
                      var GB, YB;
                      BB.preventDefault(), GB = BB.changedTouches[0], YB = BB.currentTarget.getBoundingClientRect(), GB && GB.clientX >= YB.left && GB.clientX <= YB.right && GB.clientY >= YB.top && GB.clientY <= YB.bottom && RB({
                        row: OB,
                        col: DB
                      })
                    },
                    children: [(0, wB.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: NB(BB)
                    }), YB && oB && (0, wB.jsx)(SD, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, MB.h)(oB)
                    })]
                  })
                }, DB)
              }))
            }, OB)))
          })]
        })
      },
      iQ = BB => {
        let {
          target: OB,
          label: GB
        } = BB;
        uQ(OB);
        const YB = (0, gB.useRef)(null),
          DB = (0, gB.useRef)(null),
          QB = OB instanceof HTMLTextAreaElement;
        (0, gB.useLayoutEffect)((() => {
          const BB = YB.current,
            OB = DB.current;
          QB ? BB.scrollTop = OB.offsetTop - BB.clientHeight / 2 : BB.scrollLeft = OB.offsetLeft - BB.clientWidth / 2
        }));
        const {
          value: oB,
          start: jB,
          end: yB
        } = (0, CB.o)(OB), JB = "password" === OB.type ? "\u2022".repeat(oB.length) : oB;
        return (0, wB.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, wB.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: GB
          }), (0, wB.jsxs)("div", {
            ref: YB,
            className: XB()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: QB
            }),
            children: [(0, wB.jsx)("span", {
              children: JB.slice(0, jB)
            }), (0, wB.jsx)("span", {
              ref: DB,
              className: "PadKeyboardCaret"
            }), jB !== yB && (0, wB.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: JB.slice(jB, yB)
            }), (0, wB.jsx)("span", {
              children: JB.slice(yB)
            }), 0 === JB.length && OB.placeholder && OB.placeholder !== GB && (0, wB.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: OB.placeholder
            })]
          })]
        })
      };
    var LQ = GB(1434),
      gQ = GB(3848);
    const rQ = function() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return OB.map(MB.h)
      },
      XQ = (BB, OB) => {
        const GB = eG(BB);
        return GB ? [{
          glyphs: [GB],
          labelKey: OB
        }] : []
      },
      wQ = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      EQ = "--pad-hint-bar-clearance",
      cQ = "[data-pad-hint-bar-avoid]",
      hQ = BB => {
        const OB = [];
        for (const GB of BB)(0, xB.s)(GB) && OB.push(GB.getBoundingClientRect());
        return OB
      },
      aQ = BB => {
        if (!BB) return null;
        const OB = MY(),
          GB = OB ? hQ(((BB, OB) => {
            const GB = BB.closest(cQ);
            return GB ? [GB] : ("popup" === OB ? document : BB).querySelectorAll(cQ)
          })(OB.root, OB.layer.kind)) : [],
          YB = !OB || OB.root.hasAttribute("data-pad-shows-hud");
        if (((0, gQ.g)(null === OB || void 0 === OB ? void 0 : OB.layer.kind, (0, gQ.h)()) || YB) && GB.push(...hQ(document.querySelectorAll(wQ.join(",")))), 0 === GB.length) return null;
        const {
          width: DB,
          height: QB
        } = BB.getBoundingClientRect(), oB = window.innerHeight - 8, jB = (0, gQ.m)(oB, {
          width: DB,
          height: QB
        }, window.innerWidth / 2, GB, 8);
        return jB === oB ? null : Math.round(window.innerHeight - jB)
      },
      eQ = BB => {
        const OB = document.documentElement.style,
          GB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
        OB.getPropertyValue(EQ) !== GB && (GB ? OB.setProperty(EQ, GB) : OB.removeProperty(EQ))
      },
      TQ = () => {
        const {
          t: BB
        } = (0, DB.H)(), {
          hideButtonHints: OB
        } = (0, zB.u)(), GB = (0, lB.A)(), [YB, QB] = (0, gB.useState)(!1), [oB, JB] = (0, gB.useState)([]), [qB, ZB] = (0, gB.useState)(null), NB = (0, gB.useRef)(null), RB = (0, gB.useRef)(null);
        (0, ZD.f)(RQ.d, (BB => {
          QB(BB)
        })), (0, ZD.f)(gQ.l, (() => {
          var BB;
          null === (BB = RB.current) || void 0 === BB || BB.call(RB)
        }));
        const WB = GB && !OB && !YB;
        return (0, gB.useEffect)((() => {
          if (!WB) return;
          let BB = null;
          const OB = () => {
            const OB = (() => {
                var BB;
                const OB = PB.c.getActiveConsumerName(),
                  GB = (0, gQ.f)();
                if (GB) {
                  const BB = (0, MB.h)(GB),
                    OB = "emoteWheel" === GB && "wheel" === (0, zB.k)().emoteButton || !(0, pB.P)(PB.c.getLastFrame().values, BB) ? {
                      glyphs: rQ("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [BB],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, MB.y)(BB)],
                    labelKey: "controller:wheelChoose"
                  }, OB, {
                    glyphs: rQ("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const YB = MY();
                if (!YB || "focus" !== OB && "cursor" !== OB) return (0, gQ.c)(MB.h);
                const DB = [],
                  QB = {
                    glyphs: rQ("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  oB = (0, eB.u)(YB.root),
                  jB = oB ? !(0, xB.x)(oB) : Boolean(YB.layer.close),
                  JB = !oB && YB.layer.closeLabelKey ? YB.layer.closeLabelKey : QB.labelKey,
                  lB = jB ? [{
                    ...QB,
                    labelKey: JB
                  }] : [],
                  qB = mG(YB.layer.kind) ? [{
                    glyphs: rQ("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === OB) return DB.push({
                  glyphs: rQ("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), DB.push({
                  glyphs: rQ("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), DB.push(...lB), DB.push(...qB), DB.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), fY() && DB.push({
                  glyphs: rQ("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), DB;
                const ZB = tY.getFocused();
                ZB && (0, mY.b)(ZB) ? DB.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : ZB && (0, eB.A)(ZB) ? DB.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : DB.push({
                  glyphs: rQ("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const NB = ZB ? null === (BB = zG(ZB)) || void 0 === BB ? void 0 : BB.dataset.padSecondary : void 0;
                NB && DB.push({
                  glyphs: rQ("menuSecondary"),
                  labelKey: NB
                }), DB.push(...null !== ZB && void 0 !== ZB && ZB.closest("[data-pad-friends-column]") ? [QB] : lB), DB.push(...qB);
                const RB = "home" === YB.layer.kind;
                CG(YB.root) || !gG(YB.root) && !HG(YB) ? RB && DB.push({
                  glyphs: rQ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : DB.push({
                  glyphs: rQ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), RB && (DB.push(...XQ("inventory", "controller:menusFriends")), NB || DB.push({
                  glyphs: rQ("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), DB.push(...XQ("pause", "controller:menusSettings")), DB.push(...XQ("leaderboard", "controller:menusNotifications")));
                const WB = yB.c.get("openEverythingMenuName");
                return "inGame" === yB.c.get("gameState") && "popup" !== YB.layer.kind && null !== WB && ((0, yG.m)(WB) ? DB.push(...XQ("leaderboard", "controller:menusClose")) : WB !== jG.p.LOBBY_LEADERBOARD && DB.push(...XQ("leaderboard", "controller:menusLobby"))), DB.push({
                  glyphs: rQ("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), DB
              })(),
              GB = aQ(NB.current),
              YB = ((BB, OB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${OB}`)(OB, GB);
            YB !== BB && (BB = YB, (0, jB.unstable_batchedUpdates)((() => {
              JB(OB), ZB(GB)
            }))), eQ(NB.current)
          };
          OB(), RB.current = OB;
          const GB = requestAnimationFrame(OB),
            YB = setInterval(OB, 150);
          return () => {
            RB.current = null, cancelAnimationFrame(GB), clearInterval(YB), eQ(null)
          }
        }), [WB]), (0, gB.useLayoutEffect)((() => {
          if (!WB) return;
          if (0 === oB.length) return void eQ(null);
          const BB = aQ(NB.current);
          BB === qB ? eQ(NB.current) : ZB(BB)
        }), [WB, oB, qB]), WB && 0 !== oB.length ? (0, wB.jsx)("div", {
          ref: NB,
          className: "PadButtonHintBar SmallTextBold",
          style: null === qB ? void 0 : {
            bottom: qB
          },
          "aria-hidden": !0,
          children: oB.map((OB => (0, wB.jsxs)("div", {
            className: "PadButtonHint",
            children: [OB.glyphs.map((BB => (0, wB.jsx)(SD, {
              glyph: BB,
              className: "PadButtonHintGlyph"
            }, BB))), (0, wB.jsx)("span", {
              children: BB(OB.labelKey)
            })]
          }, OB.labelKey)))
        }) : null
      };
    var bQ = GB(1825);
    const CQ = [xB.d, "label", "[data-pad-slider]"].join(","),
      HQ = "data-pad-cursor-probe",
      vQ = BB => {
        var OB;
        const GB = (BB => {
          const OB = [];
          for (let YB = BB; YB && YB !== document.body && YB !== document.documentElement && (OB.push(YB), !(OB.length > 8)); YB = YB.parentElement);
          const GB = document.documentElement.classList.contains(lB.q) ? OB[OB.length - 1] : void 0;
          null === GB || void 0 === GB || GB.setAttribute(HQ, "");
          try {
            return OB.map((BB => ({
              element: BB,
              cursor: getComputedStyle(BB).cursor
            })))
          } finally {
            null === GB || void 0 === GB || GB.removeAttribute(HQ)
          }
        })(BB);
        if ("pointer" !== (null === (OB = GB[0]) || void 0 === OB ? void 0 : OB.cursor)) return null;
        let YB = 0;
        for (; YB + 1 < GB.length && "pointer" === GB[YB + 1].cursor;) YB++;
        return GB[YB].element
      },
      sQ = (BB, OB, GB, YB) => {
        const DB = YB.root.contains(BB) ? YB.root : null;
        for (let QB = BB; QB && QB !== document.body && QB !== document.documentElement; QB = QB.parentElement) {
          if (QB instanceof HTMLElement && kB(QB, OB) && IB(QB, OB, GB)) return QB;
          if (QB === DB) break
        }
        return "home" === YB.layer.kind || "gamePage" === YB.layer.kind ? ((BB, OB) => {
          const GB = document.scrollingElement;
          return GB instanceof HTMLElement && ![document.documentElement, document.body].some((OB => {
            const GB = getComputedStyle(OB),
              YB = "y" === BB ? GB.overflowY : GB.overflowX;
            return "hidden" === YB || "clip" === YB
          })) && IB(GB, BB, OB) ? GB : null
        })(OB, GB) : null
      };
    const xQ = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, qB.d)(pB.x), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const BB = PB.c.register({
              name: "cursor",
              isActive: () => "cursor" === kY(),
              onFrame: BB => {
                this.onFrame(BB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: BB => (0, PB.g)(BB) || BB === (0, MB.h)("menuConfirm") && (0, eB.B)((0, lB.d)())
            }),
            OB = (0, GY.l)((BB => {
              const OB = BB.getRoot();
              OB && this.layerPoints.delete(OB), OB === this.layerRoot && (this.layerRoot = null)
            })),
            GB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (BB => {
              "gamepad" !== BB && this.active && !this.hidden && this.hide()
            }));
          return () => {
            BB(), OB(), JB.o.unsubscribe(GB), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, lB.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.tM()
        }
        activate(BB) {
          this.active = !0, this.hidden = !1;
          const OB = SY();
          !OB || OB.root && OB.root !== BB.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(BB), this.jumpTo(OB.point))
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
          }, this.tM())
        }
        onFrame(BB) {
          const OB = MY();
          if (!OB) return;
          if (this.active || this.activate(OB), this.followPage(OB)) return;
          this.followLayer(OB);
          const GB = BB.wokeDevice ? (0, lB.d)() : null;
          if (GB && this.jumpTo(GB), !(0, lB.k)()) return void this.hide();
          const YB = (0, MB.h)("menuToggleCursor");
          if (BB.wasPressed(YB)) return PB.c.consumeButton(YB), void VY(this.getHandoff(null));
          if (this.handBackToFocus(BB)) return;
          const DB = (0, MB.h)("menuConfirm"),
            QB = (0, MB.h)("menuSecondary");
          if (BB.wasPressed((0, MB.h)("menuBack"))) return (0, eB.l)(OB.root) || (0, eB.f)(OB.root) || PY(), void this.tM();
          if (xG(null, BB, OB)) return BB.wasReleased(DB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, DB)), void this.tM();
          if (document.pointerLockElement) return void this.hide();
          const oB = dY() ? {
              x: 0,
              y: 0
            } : (BB => {
              const OB = (BB, OB) => (BB ? 1 : 0) - (OB ? 1 : 0);
              return {
                x: OB(BB.isHeld("Right"), BB.isHeld("Left")),
                y: OB(BB.isHeld("Down"), BB.isHeld("Up"))
              }
            })(BB),
            jB = (0, zB.k)().moveDeadzone,
            yB = ((BB, OB) => {
              const GB = (0, pB.n)(BB, AB(OB));
              return Math.hypot(GB.x, GB.y)
            })(BB.leftStick, jB) > 0 || 0 !== oB.x || 0 !== oB.y;
          if (this.hidden) {
            const OB = BB.wasPressed(DB),
              GB = BB.wasPressed(QB);
            if (!yB && !nB(BB.rightStick) && !OB && !GB && !BB.wokeDevice) return void this.tM();
            if (this.hidden = !1, this.updateHit(!1), OB || GB) return OB && (this.press = {
              kind: "ignored"
            }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.tM()
          }
          this.movePendingPageStart(yB);
          const JB = this.getPoint();
          this.state = SB(this.state, {
            stick: BB.leftStick,
            moveDeadzone: jB,
            dpad: oB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, zB.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const qB = this.state.x !== JB.x || this.state.y !== JB.y,
            ZB = [DB, QB].some((OB => BB.wasPressed(OB) || BB.wasReleased(OB)));
          (qB || ZB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(qB), this.updateConfirm(BB, DB), this.updateSecondary(BB, QB), this.updateScroll(BB, OB), this.tM()
        }
        followPage(BB) {
          const OB = "home" === BB.layer.kind || "gamePage" === BB.layer.kind,
            GB = this.page;
          if (this.page = OB ? {
              key: (0, GY.r)(BB.layer),
              root: BB.root
            } : null, !this.page || !GB || GB.root !== BB.root || GB.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(BB), "hybrid" === AY()) return NY = null, qY = null, RY.lock(), !0;
          const {
            key: YB
          } = this.page;
          return this.pendingPageStart = {
            root: BB.root,
            key: YB,
            returning: tY.notePageEnteredByCursor(YB),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(BB) {
          const OB = this.pendingPageStart;
          if (!OB) return;
          if (BB || OB.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const GB = OB.returning ? tY.recallStop(OB.root, OB.key) : null;
          if (!GB && OB.returning && performance.now() - OB.enteredAtMs < 1e3) return;
          const YB = null !== GB && void 0 !== GB ? GB : tY.pickInitial(OB.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: OB.enteredAtMs
          });
          YB && (this.pendingPageStart = null, this.jumpTo((0, eB.w)(YB)))
        }
        setLayer(BB) {
          this.layerRoot = BB.root, this.layerOrder = BB.order
        }
        followLayer(BB) {
          var OB;
          if (BB.root === this.layerRoot) return;
          null !== (OB = this.layerRoot) && void 0 !== OB && OB.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const GB = this.layerPoints.get(BB.root),
            YB = GB && BB.order <= this.layerOrder ? GB : tY.getLayerStartPoint(BB.root);
          this.setLayer(BB), this.jumpTo(YB)
        }
        getHandoff(BB) {
          var OB;
          return {
            point: this.getPoint(),
            element: null !== (OB = this.interactive) && void 0 !== OB ? OB : this.findDraggedSliderNearby(),
            direction: BB
          }
        }
        findDraggedSliderNearby() {
          const BB = this.draggedSlider;
          if (null === BB || void 0 === BB || !BB.isConnected) return null;
          const OB = BB.getBoundingClientRect(),
            {
              y: GB
            } = this.getPoint();
          return GB >= OB.top - 40 && GB <= OB.bottom + 40 ? BB : null
        }
        handBackToFocus(BB) {
          if (!dY()) return !1;
          const OB = pB.G.find((OB => BB.wasPressed(OB)));
          return !!OB && (GB = this.getHandoff(OB), NY = lY(GB), qY = null, RY.lock(), PB.c.handOffHeldInput(), !0);
          var GB
        }
        getAssistContext() {
          const BB = this.interactive;
          if (null === BB || void 0 === BB || !BB.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const OB = BB.getBoundingClientRect();
          if (OB.width > .4 * window.innerWidth || OB.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const GB = (0, zB.k)().cursorMagnetism && !(0, bQ.c)(BB) && !BB.closest("[data-pad-slider]"),
            YB = this.magnet && this.magnet !== BB && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : OB;
          return {
            overInteractive: !0,
            magnetTarget: GB ? {
              x: YB.left + YB.width / 2,
              y: YB.top + YB.height / 2
            } : null
          }
        }
        updateHit(BB) {
          this.lastHitTestMs = performance.now();
          const OB = this.getPoint(),
            GB = document.elementFromPoint(OB.x, OB.y),
            YB = GB && !(0, NB.p)(GB) && (BB => {
              var OB;
              const GB = MY();
              return !(GB && !GB.root.contains(BB) && !BB.closest(".tooltip-container")) || !(null !== (OB = document.getElementById("root")) && void 0 !== OB && OB.contains(BB))
            })(GB) ? GB : null;
          if (YB !== this.hit) return (0, eB.p)(this.hit, YB, OB), this.hit = YB, void this.setInteractive(YB ? (BB => {
            const OB = BB.closest(CQ);
            if (OB) {
              var GB, YB;
              const BB = null !== (GB = null === (YB = OB.parentElement) || void 0 === YB ? void 0 : YB.closest("[data-pad-focusable]")) && void 0 !== GB ? GB : OB;
              return (0, xB.x)(BB) ? {
                element: null,
                magnet: null
              } : {
                element: BB,
                magnet: OB
              }
            }
            const DB = vQ(BB);
            return {
              element: DB,
              magnet: DB
            }
          })(YB) : {
            element: null,
            magnet: null
          });
          BB && YB && (0, eB.p)(YB, YB, OB)
        }
        setInteractive(BB) {
          let {
            element: OB,
            magnet: GB
          } = BB;
          this.interactive = OB, this.magnet = GB
        }
        clearHover() {
          this.hit && (0, eB.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const BB = this.hit;
          if (!BB || (0, eB.A)(BB)) return {
            kind: "ignored"
          };
          const OB = (0, mY.b)(BB),
            GB = BB.closest("[data-pad-slider]");
          return OB && GB ? {
            kind: "slider",
            slider: GB,
            adjuster: OB
          } : ((0, eB.q)(BB, this.getPoint()), {
            kind: "pointer",
            target: BB
          })
        }
        applySliderFraction(BB) {
          var OB;
          const GB = BB.slider.getBoundingClientRect(),
            YB = GB.height > GB.width,
            DB = null === (OB = BB.slider.querySelector("[data-pad-slider-handle]")) || void 0 === OB ? void 0 : OB.getBoundingClientRect(),
            QB = DB ? YB ? DB.height : DB.width : 0,
            oB = (YB ? GB.height : GB.width) - QB;
          if (oB <= 0) return;
          const jB = YB ? GB.bottom - QB / 2 - this.state.y : this.state.x - GB.left - QB / 2;
          BB.adjuster.setFraction(Math.max(0, Math.min(1, jB / oB)))
        }
        updateConfirm(BB, OB) {
          BB.wasPressed(OB) && (this.press = BB.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const GB = this.press;
          if (!GB) return;
          if (BB.isHeld(OB)) return "slider" === GB.kind && this.applySliderFraction(GB), void this.updateRepeat();
          this.press = null;
          const YB = this.repeated;
          if (this.endRepeat(), !BB.wasReleased(OB)) return void this.endPressWithoutClick(GB);
          const DB = this.getPoint(),
            QB = this.hit;
          if ("slider" === GB.kind && GB.adjuster.endDrag(), "pointer" === GB.kind) {
            const BB = null !== QB && void 0 !== QB ? QB : GB.target.isConnected ? GB.target : null;
            BB && (0, eB.t)(BB, DB);
            const OB = QB && GB.target.isConnected && !YB ? ((BB, OB) => {
              for (let GB = BB; GB; GB = GB.parentElement)
                if (GB.contains(OB)) return GB;
              return null
            })(GB.target, QB) : null;
            OB && (tY.noteCursorActivation(OB), (0, NB.g)(OB, new MouseEvent("click", (0, eB.J)(DB, 0, 0))), (0, eB.i)(OB), (0, eB.I)(OB) && (0, eB.E)(OB))
          }
        }
        beginRepeat() {
          var BB, OB, GB;
          const YB = null !== (BB = null === (OB = this.hit) || void 0 === OB ? void 0 : OB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
          this.repeatStop = YB, this.repeatKey = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.getAttribute("data-pad-repeat")) && void 0 !== GB ? GB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const BB = this.repeatStop;
          if (!BB) return;
          const OB = this.hit;
          BB.isConnected && !(0, xB.x)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && OB && BB.contains(OB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, tY.noteCursorActivation(BB), (0, NB.g)(BB, new MouseEvent("click", (0, eB.J)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(BB) {
          "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, eB.t)(BB.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(BB, OB) {
          BB.wasPressed(OB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(OB) && (this.secondaryArmed = !1, BB.wasReleased(OB) && this.hit && (0, eB.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(BB, OB) {
          const GB = UB(BB.rightStick, BB.dtMs);
          if (0 === GB.x && 0 === GB.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + GB.x,
            y: this.scrollRemainder.y + GB.y
          };
          const YB = Math.trunc(this.scrollRemainder.x),
            DB = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - YB,
            y: this.scrollRemainder.y - DB
          };
          const QB = this.hit;
          if (!QB) return;
          let oB = !1;
          if (0 !== DB) {
            const BB = sQ(QB, "y", DB > 0 ? 1 : -1, OB);
            BB && (BB.scrollBy({
              top: DB,
              behavior: "instant"
            }), oB = !0)
          }
          if (0 !== YB) {
            const BB = sQ(QB, "x", YB > 0 ? 1 : -1, OB);
            BB && (BB.scrollBy({
              left: YB,
              behavior: "instant"
            }), oB = !0)
          }
          oB && (this.lastHitTestMs = -1 / 0)
        }
        tM() {
          bB.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      tQ = () => {
        const BB = (0, gB.useMemo)((() => new hB), []),
          OB = (0, lB.A)();
        return (0, gB.useEffect)((() => {
          if (!OB) return;
          let GB = 0,
            YB = {
              of: null,
              atMs: 0,
              list: []
            };
          const DB = document.getElementsByClassName(KY),
            QB = BB => {
              for (const OB of [...DB]) OB !== BB && OB.classList.remove(KY)
            },
            oB = () => {
              var OB;
              GB = requestAnimationFrame(oB);
              const DB = (() => {
                const BB = tY.getFocused();
                if (tY.isActive() && null !== BB && void 0 !== BB && BB.isConnected) return BB;
                const OB = xQ.getHighlighted();
                return null !== OB && void 0 !== OB && OB.isConnected ? OB : null
              })();
              QB(DB), DB && !DB.classList.contains(KY) && DB.classList.add(KY);
              const jB = null !== (OB = null === DB || void 0 === DB ? void 0 : DB.closest("[data-pad-reticle-box]")) && void 0 !== OB ? OB : DB;
              BB.show(jB ? ((BB, OB) => {
                let GB = BB.left,
                  YB = BB.top,
                  DB = BB.right,
                  QB = BB.bottom;
                for (const oB of OB) {
                  if (!oB) continue;
                  const BB = iB(oB);
                  GB = Math.max(GB, BB.left), YB = Math.max(YB, BB.top), DB = Math.min(DB, BB.right), QB = Math.min(QB, BB.bottom)
                }
                return DB <= GB || QB <= YB ? null : {
                  left: GB,
                  top: YB,
                  width: DB - GB,
                  height: QB - YB
                }
              })(jB.getBoundingClientRect(), (BB => {
                const OB = performance.now();
                return (YB.of !== BB || OB - YB.atMs > 500) && (YB = {
                  of: BB,
                  atMs: OB,
                  list: [dB(BB, "y"), dB(BB, "x")]
                }), YB.list
              })(jB)) : null)
            };
          return GB = requestAnimationFrame(oB), () => {
            cancelAnimationFrame(GB), QB(null), BB.hide()
          }
        }), [OB, BB]), (0, wB.jsx)(aB, {
          placer: BB,
          className: "PadFocusRing"
        })
      },
      Bo = (BB, OB) => {
        BB.style.transform = `translate3d(${OB.x}px, ${OB.y}px, 0)`, BB.classList.toggle("Visible", OB.visible), BB.classList.toggle("Pressed", OB.pressed)
      },
      Oo = () => {
        const BB = (0, gB.useRef)(null);
        return (0, gB.useEffect)((() => {
          const OB = bB.subscribe((OB => {
            BB.current && Bo(BB.current, OB)
          }));
          return BB.current && Bo(BB.current, bB.get()), OB
        }), []), (0, wB.jsx)("div", {
          ref: BB,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, wB.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Go = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Yo = "PadOverThirdParty",
      Do = new Set(Go.map((BB => BB.id))),
      Qo = () => {
        const BB = Go.map((BB => {
            let {
              id: OB,
              find: GB,
              startSelectors: YB
            } = BB;
            return (0, GY.p)({
              id: OB,
              kind: "popup",
              getRoot: () => {
                const BB = GB(),
                  OB = BB ? ((BB, OB) => {
                    var GB;
                    for (const YB of OB) {
                      const OB = BB.querySelector(YB);
                      if (OB) return OB
                    }
                    return null !== (GB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent")))) && void 0 !== GB ? GB : null
                  })(BB, YB) : null;
                if (BB && OB && !OB.hasAttribute("data-pad-default-focus")) {
                  for (const OB of BB.querySelectorAll("[data-pad-default-focus]")) OB.removeAttribute("data-pad-default-focus");
                  for (const OB of BB.querySelectorAll("[data-pad-hint-bar-avoid]")) OB.removeAttribute("data-pad-hint-bar-avoid");
                  OB.setAttribute("data-pad-default-focus", ""), ((BB, OB) => {
                    let GB = BB;
                    for (let YB = BB.parentElement; YB && OB.contains(YB) && !(YB.getBoundingClientRect().height >= window.innerHeight / 2); YB = YB.parentElement) GB = YB;
                    return GB
                  })(OB, BB).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return BB
              },
              close: null,
              memoryKey: null
            })
          })),
          OB = document.documentElement,
          GB = oB.g.onFrame((() => {
            const BB = (0, lB.k)() ? MY() : null,
              GB = !!BB && (YB = BB.layer, Do.has(YB.id));
            var YB;
            OB.classList.contains(Yo) !== GB && OB.classList.toggle(Yo, GB)
          }));
        return () => {
          for (const OB of BB) OB();
          GB(), OB.classList.remove(Yo)
        }
      },
      oo = "PadLargePointer",
      jo = () => {
        (0, gB.useEffect)((() => {
          const BB = (0, NB.k)(document.body),
            OB = tY.install(),
            GB = xQ.install(),
            YB = Qo();
          return () => {
            BB(), OB(), GB(), YB()
          }
        }), []);
        const {
          largePointer: BB
        } = (0, zB.u)(), OB = (0, LQ.s)() && BB;
        return (0, gB.useEffect)((() => {
          if (OB) return document.documentElement.classList.add(oo), () => {
            document.documentElement.classList.remove(oo)
          }
        }), [OB]), (0, jB.createPortal)((0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsx)(TQ, {}), (0, wB.jsx)(tQ, {}), (0, wB.jsx)(Oo, {})]
        }), document.body)
      };
    var yo = GB(9457),
      Jo = GB(9478),
      Mo = GB(9469);
    GB(9482);
    const Po = (BB, OB) => {
        const [GB, YB] = (0, gB.useState)(!1), [DB, QB] = (0, gB.useState)(null), oB = (0, gB.useRef)(null), jB = (0, gB.useCallback)((BB => {
          oB.current = BB, QB(BB)
        }), []), yB = (0, gB.useCallback)((() => {
          YB(!1), jB(null)
        }), [jB]), MB = (0, gB.useCallback)((() => {
          YB(!0)
        }), []), PB = (0, gB.useCallback)(((BB, OB) => {
          jB((0, Mo.C)(BB, OB, oB.current))
        }), [jB]);
        (0, gB.useLayoutEffect)((() => (OB(GB), (0, gQ.q)(BB, GB), JB.o.tM(gQ.l), () => {
          OB(!1), (0, gQ.q)(BB, !1), JB.o.tM(gQ.l)
        })), [GB, BB, OB]), (0, ZD.f)("appManagerUpdated|activeInputDevice", (BB => {
          "gamepad" !== BB && yB()
        })), (0, ZD.f)("appManagerUpdated|gameState", (BB => {
          "inGame" !== BB && yB()
        }));
        const zB = () => {
          (0, yG.r)() && yB()
        };
        return (0, ZD.f)("appManagerUpdated|openEverythingMenuName", zB), (0, ZD.f)("appManagerUpdated|openInGameMenuName", zB), {
          open: GB,
          picked: DB,
          pickedRef: oB,
          show: MB,
          aim: PB,
          close: yB
        }
      },
      zo = BB => {
        let {
          className: OB,
          slotCount: GB,
          picked: YB,
          slotLabel: DB,
          renderSlot: QB,
          centre: oB
        } = BB;
        const jB = Array.from({
          length: GB
        }, ((BB, OB) => OB));
        return (0, wB.jsx)("div", {
          className: XB()("EmoteWheelOverlay PadRadialWheel", OB),
          children: (0, wB.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Mo.o + "rem",
              height: 2 * Mo.o + "rem"
            },
            children: [(0, wB.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Mo.j} ${Mo.j}`,
              children: [jB.map((BB => (0, wB.jsx)("path", {
                d: (0, Mo.r)(BB, GB, Mo.f, Mo.g, Mo.i),
                className: XB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: BB === YB
                }),
                "aria-label": DB(BB)
              }, BB))), (0, wB.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Mo.f,
                cy: Mo.f,
                r: Mo.i
              }), (0, wB.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Mo.f,
                cy: Mo.f,
                r: Mo.g
              }), null !== YB && (0, wB.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Mo.r)(YB, GB, Mo.f, Mo.g, Mo.i)
              })]
            }), jB.map((BB => {
              const OB = (0, Mo.x)(BB, GB);
              return (0, wB.jsx)("div", {
                className: XB()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: BB === YB
                }),
                style: {
                  left: `calc(50% + ${Mo.d*Math.cos(OB)}rem)`,
                  top: `calc(50% + ${Mo.d*Math.sin(OB)}rem)`
                },
                "aria-hidden": !0,
                children: QB(BB)
              }, BB)
            })), (0, wB.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: oB
            })]
          })
        })
      },
      po = MQ.length,
      qo = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = Po("chat", uG.t), GB = (0, gB.useMemo)((() => MQ.map((OB => BB(OB)))), [BB]);
        return (0, ZD.f)(uG.r, (() => {
          OB.open || (0, yo.f)() || (0, Jo.q)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || !(0, dG.b)() || OB.show()
        })), (0, ZD.f)(uG.i, (BB => {
          OB.open && OB.aim(BB, po)
        })), (0, ZD.f)(uG.n, (() => {
          var BB;
          if (!OB.open) return;
          const YB = OB.pickedRef.current;
          null !== YB ? PQ.claim(performance.now()) && (OB.close(), null === (BB = (0, dG.b)()) || void 0 === BB || BB.sendLine(GB[YB])) : OB.close()
        })), (0, ZD.f)(uG.k, OB.close), OB.open ? (0, wB.jsx)(zo, {
          className: "QuickChatWheel",
          slotCount: po,
          picked: OB.picked,
          slotLabel: BB => GB[BB],
          renderSlot: BB => GB[BB],
          centre: null !== OB.picked ? GB[OB.picked] : BB("controller:quickChatPick")
        }) : null
      },
      Zo = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = Po("actionButton", Jo.s), [GB, YB] = (0, gB.useState)([]);
        if ((0, ZD.f)(Jo.m, (BB => {
            OB.open || (0, yo.f)() || (0, uG.e)() || "inGame" !== yB.c.get("gameState") || (0, yG.r)() || (YB(BB), OB.show())
          })), (0, ZD.f)(Jo.b, (BB => {
            OB.open && OB.aim(BB, GB.length)
          })), (0, ZD.f)(Jo.i, (() => {
            if (!OB.open) return;
            const BB = OB.pickedRef.current;
            OB.close(), null !== BB && JB.o.tM(Jo.p, GB[BB])
          })), (0, ZD.f)(Jo.f, OB.close), !OB.open) return null;
        const QB = null !== OB.picked ? GB[OB.picked] : null;
        return (0, wB.jsx)(zo, {
          className: "ActionWheel",
          slotCount: GB.length,
          picked: OB.picked,
          slotLabel: OB => {
            const YB = GB[OB];
            return "reload" === YB.kind ? BB("controller:gameplayReload") : "customButton" === YB.kind ? YB.description || YB.icon : "touchButton" === YB.kind && "string" === typeof YB.label ? YB.label : ""
          },
          renderSlot: BB => (0, wB.jsx)(UD, {
            action: GB[BB]
          }),
          centre: QB ? (0, wB.jsx)(UD, {
            action: QB
          }) : BB("controller:actionWheelPick")
        })
      };
    var No = GB(92);
    const Ro = () => ((0, gB.useEffect)((() => {
        var BB, OB;
        const GB = (0, NB.k)(document.getElementById("root")),
          YB = (0, lB.f)(),
          DB = (() => {
            const BB = [JB.o.subscribe(OD.g, (() => {
                QD("blockBreak")
              })), JB.o.subscribe("damagedByOtherPlayer", (() => {
                QD("damage")
              })), JB.o.subscribe("yourAttackHit", (BB => {
                let {
                  hitSelf: OB
                } = BB;
                OB || QD("hit")
              }))],
              OB = oB.g.onActivePadChanged((BB => {
                BB && QD("connect")
              }));
            return () => {
              for (const OB of BB) JB.o.unsubscribe(OB);
              OB()
            }
          })(),
          QB = (() => {
            const BB = new PD({
              getVisitId: MD.getVisitSessionId,
              peekVisitId: MD.peekVisitSessionId,
              readReportedVisitId: () => {
                const BB = JD.i.getItem(zD);
                return "string" === typeof BB ? BB : null
              },
              writeReportedVisitId: BB => {
                JD.i.setItem(zD, BB)
              },
              isPadActive: lB.k,
              getPadFamily: () => {
                var BB, OB;
                return null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null
              },
              canReport: jD.isBloxdGa4Ready,
              getInputType: yD.d,
              jP: jD.logControllerUsedToGtag
            });
            let OB = 0,
              GB = null;
            const YB = DB => {
                null === GB && ("notReady" !== BB.check(DB) || null !== GB || OB >= 20 || (OB++, GB = setTimeout((() => {
                  GB = null, YB(!1)
                }), 3e3)))
              },
              DB = JB.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
                YB(!0)
              })),
              QB = (0, MD.onVisitStarted)((() => {
                OB = 0, YB(!0)
              }));
            return () => {
              JB.o.unsubscribe(DB), QB(), null !== GB && clearTimeout(GB)
            }
          })(),
          jB = oB.g.onFrame(((BB, OB, GB) => {
            const YB = (0, lB.p)(BB, GB);
            PB.c.dispatch(BB, OB, YB)
          }));
        let MB = null !== (BB = null === (OB = oB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : null;
        const pB = oB.g.onActivePadChanged((BB => {
            var OB, GB;
            (PB.c.reset(), (0, lB.s)(), JB.o.tM(oB.c, BB), (null !== (OB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== OB ? OB : null) !== MB) && (MB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== GB ? GB : null, JB.o.tM(zB.c, (0, zB.k)()));
            !BB && (0, lB.k)() && (0, lB.w)(yB.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          qB = () => {
            "visible" !== document.visibilityState && PB.c.clear()
          },
          ZB = () => {
            PB.c.clear()
          };
        document.addEventListener("visibilitychange", qB), window.addEventListener("blur", ZB), oB.g.start(), (0, oD.g)();
        const RB = null;
        return () => {
          GB(), YB(), DB(), QB(), jB(), pB(), document.removeEventListener("visibilitychange", qB), window.removeEventListener("blur", ZB), oB.g.stop(), null === RB || void 0 === RB || RB()
        }
      }), []), (0, wB.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, wB.jsx)(ID, {}), (0, wB.jsx)(cD, {}), (0, wB.jsx)(hD, {}), (0, wB.jsx)(FQ, {}), (0, wB.jsx)(jo, {}), (0, wB.jsx)(qo, {}), (0, wB.jsx)(Zo, {})]
      })),
      Wo = () => No.featureFlags.useControllerSupport ? (0, wB.jsx)(Ro, {}) : null;
    var Ao = GB(8906),
      Vo = GB(9485);
    const So = new Set(oD.f),
      no = BB => `${Vo.j}${(0,zB.o)()}/${BB}`,
      Uo = BB => {
        if (!(0, Vo.h)(BB)) return null;
        const [OB, GB] = BB.slice(Vo.j.length).split("/");
        return (0, Ao.g)(OB) && So.has(GB) ? (0, oD.c)(OB, GB) : null
      };
    var fo = GB(9490);
    const ko = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, lB.A)(), {
          gameState: GB,
          isUiHidden: YB
        } = (0, yB.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: QB,
          sneakMode: oB
        } = (0, zB.u)(), [jB, JB] = (0, gB.useState)(fo.e);
        return (0, ZD.f)(mD.q, JB), OB && !YB && "inGame" === GB && jB ? (0, wB.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!QB && (0, wB.jsx)(SD, {
            glyph: (0, MB.h)("toggle" === oB ? "sneak" : "sneakToggle")
          }), (0, wB.jsx)("span", {
            children: BB("controller:gameplaySneaking")
          })]
        }) : null
      },
      Ko = 12,
      uo = BB => {
        let {
          trigger: OB,
          className: GB,
          children: YB
        } = BB;
        const DB = (0, gB.useRef)(null);
        return (0, gB.useEffect)((() => {
          let BB = 0;
          const GB = dB(OB, "y"),
            YB = () => {
              BB = requestAnimationFrame(YB);
              const QB = DB.current;
              if (!QB || null === OB || void 0 === OB || !OB.isConnected) return;
              const {
                left: oB,
                top: jB
              } = function(BB, OB, GB) {
                let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const QB = BB.left + BB.width / 2,
                  oB = Math.max(Ko, GB.width - Ko - OB.width),
                  jB = Math.min(Math.max(QB - OB.width / 2, Ko), oB),
                  yB = GB.height - YB;
                let JB = 0,
                  MB = yB;
                if (DB) {
                  const BB = Math.max(0, DB.top),
                    YB = Math.min(yB, DB.bottom);
                  YB - BB >= Math.max(GB.height / 2, OB.height + 24) && (JB = BB, MB = YB)
                }
                const PB = BB.top + BB.height / 2 < (JB + MB) / 2 ? MB - Ko - OB.height : JB + Ko;
                return {
                  left: jB,
                  top: Math.max(Ko, PB)
                }
              }(OB.getBoundingClientRect(), {
                width: QB.offsetWidth,
                height: QB.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(EQ)) || 0, null !== GB && void 0 !== GB && GB.isConnected ? GB.getBoundingClientRect() : null);
              QB.style.transform = `translate3d(${Math.round(oB)}px, ${Math.round(jB)}px, 0)`, QB.style.visibility = "visible"
            };
          return YB(), () => {
            cancelAnimationFrame(BB)
          }
        }), [OB]), (0, wB.jsx)("div", {
          ref: DB,
          className: GB,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: YB
        })
      };
    var mo = GB(1383),
      Io = GB(9498),
      Fo = GB(1485),
      io = GB(9506),
      Lo = GB(9513);
    const go = {
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
      ro = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, lB.A)(), GB = (0, Io.e)(), YB = (0, XD.g)("_tasks"), QB = (0, XD.g)("_availableLeaderboards");
        if (!OB) return null;
        const oB = (BB => {
          let {
            hasShop: OB,
            hasTasksOrLeaderboards: GB,
            canInvite: YB
          } = BB;
          const DB = [];
          return OB && DB.push("shop"), GB && DB.push("tasks"), YB && DB.push("invite"), DB.push("leave"), DB
        })({
          hasShop: GB,
          hasTasksOrLeaderboards: !(!YB && !QB),
          canInvite: !!No.featureFlags.canUseInviteLinks
        });
        return (0, wB.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: oB.map((OB => {
            const {
              icon: GB,
              labelKey: YB
            } = go[OB], DB = "leave" === OB ? Fo.Q : Fo.f;
            return (0, wB.jsx)(DB, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (BB => {
                  switch (BB) {
                    case "shop":
                      return JB.o.tM(Lo.k), void yB.c.set({
                        openEverythingMenuName: jG.p.SHOP
                      });
                    case "tasks":
                      return void JB.o.tM("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void JB.o.tM("toggleMenu", "inviteLink");
                    case "leave":
                      (0, io.c)()
                  }
                })(OB)
              },
              children: (0, wB.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, wB.jsx)(mo.b, {
                  name: GB
                }), (0, wB.jsx)("span", {
                  children: BB(YB)
                })]
              })
            }, OB)
          }))
        })
      };
    var Xo = GB(2085);
    const wo = pB.E,
      Eo = ["forward", "backward", "left", "right", "sprint"],
      co = BB => BB.ctrlKey || BB.altKey || "Alt" === BB.key || "ArrowUp" === BB.key || "ArrowDown" === BB.key || "Tab" === BB.code || "/" === BB.key || "Slash" === BB.code;
    class ho {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(pB.bb).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(BB) {
        this.armed = BB
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || OB ? !BB.repeat && this.swallowedKeys.delete(BB.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(BB.code),
          continues: !1
        } : "Escape" === BB.key || BB.repeat && !this.swallowedKeys.has(BB.code) ? {
          swallow: !1,
          continues: !1
        } : GB ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(BB.code), {
          swallow: !0,
          continues: (0, lB.j)(BB)
        })
      }
      onKeyUp(BB) {
        return this.swallowedKeys.delete(BB.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const DB = (0, pB.t)(BB.values, this.previousHeld),
          QB = null === GB ? -1 : (0, pB.p)(GB),
          oB = QB >= 0 && DB[QB] && !this.previousHeld[QB],
          jB = DB.some(((BB, OB) => BB && !this.previousHeld[OB] && OB !== QB)),
          yB = Math.hypot(BB.leftStick.x, BB.leftStick.y) >= wo,
          JB = Math.hypot(BB.rightStick.x, BB.rightStick.y) >= wo,
          MB = yB && !this.leftStickWasPressed || JB && !this.rightStickWasPressed;
        this.previousHeld = DB, this.leftStickWasPressed = yB, this.rightStickWasPressed = JB;
        let PB = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, PB = !0);
        const zB = !OB && oB && !YB,
          lB = !zB && this.armed && !OB && (jB || MB);
        return (zB || lB) && (this.consumeNextFrame = !0, this.consumeAfterContinue = lB, PB = !0), {
          continues: lB,
          back: zB,
          consumeHeld: PB
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const ao = new Set([...Xo.k, ...Xo.y]),
      eo = BB => ((BB, OB, GB) => {
        const YB = Object.keys(OB).filter((YB => !GB.has(YB) && OB[YB].includes(BB)));
        return YB.length > 0 && YB.every((BB => Eo.includes(BB)))
      })(BB, Xo.t, ao),
      To = (BB, OB, GB) => {
        const YB = new ho,
          DB = BB => {
            if (!BB.isTrusted) return;
            const {
              swallow: GB,
              continues: DB
            } = YB.onKeyDown(BB, !(0, lB.G)(BB) || (0, BD.j)() || (0, yG.r)(), eo(BB.code));
            GB && (BB.stopImmediatePropagation(), co(BB) && BB.preventDefault()), DB && ((0, lB.w)("keyboardMouse"), OB())
          },
          QB = BB => {
            BB.isTrusted && YB.onKeyUp(BB) && (BB.stopImmediatePropagation(), co(BB) && BB.preventDefault())
          },
          jB = () => {
            YB.forgetKeys()
          };
        window.addEventListener("keydown", DB, !0), window.addEventListener("keyup", QB, !0), window.addEventListener("blur", jB);
        const yB = oB.g.onFrame((BB => {
            const DB = PB.c.getActiveConsumerName(),
              QB = GB(),
              oB = QB ? (0, MB.h)("menuBack") : null,
              jB = null !== DB && "gameplay" !== DB,
              {
                continues: yB,
                back: JB,
                consumeHeld: pB
              } = YB.onPadFrame(BB, jB, oB, (0, lB.m)(BB));
            if (pB) {
              const BB = (0, zB.k)().swapSticks ? "right" : "left";
              PB.c.consumeAllHeld(YB.consumeLeavesMoveStick() ? BB : null)
            }
            JB ? null === QB || void 0 === QB || QB() : yB && OB()
          })),
          JB = (0, BD.m)(`pressToContinue:${BB}`, (() => YB.blocksGameplay()));
        return {
          setArmed: BB => {
            YB.setArmed(BB)
          },
          dispose: () => {
            window.removeEventListener("keydown", DB, !0), window.removeEventListener("keyup", QB, !0), window.removeEventListener("blur", jB), yB(), JB()
          }
        }
      };
    var bo = GB(5480),
      Co = GB(3857),
      Ho = GB(3544),
      vo = GB(8909);
    const so = BB => {
        let {
          text: OB
        } = BB;
        return (0, wB.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: OB
        })
      },
      xo = BB => {
        let {
          label: OB,
          hint: GB,
          options: YB,
          value: QB,
          onChange: oB
        } = BB;
        const {
          t: jB
        } = (0, DB.H)();
        return (0, wB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, wB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, wB.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, wB.jsx)("div", {
                className: "SliderText",
                children: OB
              }), GB && (0, wB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: GB
              })]
            }), (0, wB.jsx)(Ho.c, {
              options: YB.map((BB => ({
                label: "label" in BB ? BB.label : jB(BB.labelKey),
                value: BB.value
              }))),
              value: QB,
              onChange: BB => {
                oB(BB.value)
              }
            })]
          })
        })
      },
      to = BB => {
        let {
          settingKey: OB,
          label: GB,
          range: YB,
          format: DB
        } = BB;
        const QB = (0, zB.u)();
        return (0, wB.jsx)(bo.f, {
          name: GB,
          min: YB.min,
          max: YB.max,
          step: YB.step,
          padStep: YB.step,
          initValue: QB[OB],
          format: DB,
          onChange: BB => {
            (0, zB.q)({
              [OB]: (0, vo.w)(BB, YB)
            })
          }
        })
      };
    var Bj = GB(9518),
      Oj = GB(9520);
    const Gj = BB => BB instanceof DOMException && ("SecurityError" === BB.name || "NotAllowedError" === BB.name),
      Yj = BB => {
        const [OB] = [...BB.controllers].sort(((BB, OB) => Oj.p[BB] - Oj.p[OB]));
        return Oj.n[OB]
      },
      Dj = BB => {
        (0, Bj.b)().allowPhoneMotion().catch((OB => {
          BB && Gj(OB) ? BB() : console.warn("Could not enable the motion sensor", OB)
        }))
      },
      Qj = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      oj = BB => {
        let {
          status: OB
        } = BB;
        const {
          t: GB
        } = (0, DB.H)(), [YB, QB] = (0, gB.useState)(null), oB = `${OB.controllers.join(",")}|${OB.phoneMotion}`;
        (0, gB.useEffect)((() => {
          QB(null)
        }), [oB]);
        const jB = () => {
          (0, Bj.b)().connectController().then((BB => {
            QB(BB > 0 ? "openFailed" : null)
          })).catch((BB => {
            Gj(BB) ? QB("needsClick") : console.warn("Could not connect motion controller", BB)
          }))
        };
        if (OB.hidSupported) {
          let BB = GB("controller:settingsGyroConnectHint");
          return "needsClick" === YB ? BB = GB("controller:settingsGyroConnectNeedsClick") : "openFailed" === YB ? BB = GB("controller:settingsGyroOpenFailed") : OB.controllers.length > 0 && (BB = GB("controller:settingsGyroConnected", {
            name: Yj(OB)
          })), (0, wB.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, wB.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, wB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: BB
              }), (0, wB.jsx)(Fo.f, {
                onClick: jB,
                children: GB("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === OB.phoneMotion) return (0, wB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, wB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === YB && (0, wB.jsx)("div", {
              className: "ControllerSettingsHint",
              children: GB("controller:settingsGyroAllowNeedsTap")
            }), (0, wB.jsx)(Fo.f, {
              onClick: () => {
                Dj((() => {
                  QB("needsTap")
                }))
              },
              children: GB("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const yB = Qj[OB.phoneMotion];
        return yB ? (0, wB.jsx)("div", {
          className: "ControllerSettingsHint",
          children: GB(yB)
        }) : null
      },
      jj = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, zB.u)(), GB = (0, Bj.c)(), YB = (0, lB.D)(), QB = !GB.hidSupported && GB.phoneSupported && !GB.padConnected, oB = (GB.hidSupported || GB.phoneSupported) && !QB, jB = (0, MB.h)("pause");
        return (0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsx)(so, {
            text: BB("controller:settingsGyro")
          }), QB && (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroPhoneNeedsController")
          }), !oB && !QB && (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB(GB.hidBlocked || GB.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), oB && (0, wB.jsx)(bo.c, {
            label: BB(GB.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: OB.gyroAiming,
            onClick: BB => {
              var OB, GB;
              (0, zB.q)({
                gyroAiming: BB
              });
              const YB = null === (OB = null === (GB = navigator.userActivation) || void 0 === GB ? void 0 : GB.isActive) || void 0 === OB || OB;
              if (!BB || !YB) return;
              const DB = (0, Bj.b)(),
                QB = DB.getStatus();
              QB.hidSupported ? DB.connectControllerIfNoneGranted().catch((BB => {
                console.warn("Motion controller picker unavailable", BB)
              })) : "needsPermission" === QB.phoneMotion && Dj()
            },
            circleInfoText: BB(GB.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), oB && GB.hidSupported && (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroSteamHint")
          }), oB && OB.gyroAiming && (0, wB.jsxs)(wB.Fragment, {
            children: [(0, wB.jsx)(oj, {
              status: GB
            }), (0, wB.jsx)(to, {
              settingKey: "gyroSensitivity",
              label: BB("controller:settingsGyroSensitivity"),
              range: vo.O,
              format: vo.J
            }), (0, wB.jsx)(xo, {
              label: BB("controller:settingsGyroActivation"),
              hint: "aiming" === OB.gyroActivation && (0, wB.jsx)(Co.d, {
                text: BB("controller:settingsGyroAimingHint", {
                  button: Co.f
                }),
                glyph: (0, MB.h)("use")
              }),
              options: vo.N,
              value: OB.gyroActivation,
              onChange: BB => {
                (0, zB.q)({
                  gyroActivation: BB
                })
              }
            }), "button" === OB.gyroActivation && (0, wB.jsx)(xo, {
              label: BB("controller:settingsGyroButton"),
              hint: BB("controller:settingsGyroButtonHint"),
              options: vo.s.filter((BB => BB !== jB || BB === OB.gyroButton)).map((BB => ({
                label: VD(YB, BB),
                value: BB
              }))),
              value: OB.gyroButton,
              onChange: BB => {
                (0, zB.q)({
                  gyroButton: BB
                })
              }
            })]
          })]
        })
      };
    var yj = GB(1964);
    const Jj = () => {
      const {
        t: BB
      } = (0, DB.H)(), OB = (0, zB.u)(), GB = (0, lB.D)();
      return (0, wB.jsxs)(wB.Fragment, {
        children: [(0, wB.jsx)(so, {
          text: BB("controller:settingsAccessibility")
        }), (0, wB.jsx)(bo.c, {
          label: BB("controller:settingsSwapConfirmBack"),
          checked: (0, MB.L)(OB.swapConfirmBack, GB),
          onClick: BB => {
            (0, zB.q)({
              swapConfirmBack: BB === (0, MB.L)(null, GB) ? null : BB
            }), yj.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: BB("controller:settingsSwapConfirmBackInfo")
        }), (0, wB.jsx)(xo, {
          label: BB("controller:settingsButtonRepeat"),
          hint: BB("controller:settingsButtonRepeatHint"),
          options: vo.q,
          value: OB.buttonRepeat,
          onChange: BB => {
            (0, zB.q)({
              buttonRepeat: BB
            })
          }
        }), (0, wB.jsx)(xo, {
          label: BB("controller:settingsTapHoldTime"),
          hint: BB("controller:settingsTapHoldTimeHint"),
          options: vo.lb,
          value: OB.tapHoldTime,
          onChange: BB => {
            (0, zB.q)({
              tapHoldTime: BB
            })
          }
        }), (0, wB.jsx)(xo, {
          label: BB("controller:settingsEmoteButton"),
          hint: BB("wheel" === OB.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: vo.F,
          value: OB.emoteButton,
          onChange: BB => {
            (0, zB.q)({
              emoteButton: BB
            })
          }
        }), (0, wB.jsx)(xo, {
          label: BB("controller:settingsAttackMode"),
          hint: BB("toggle" === OB.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: vo.n,
          value: OB.attackMode,
          onChange: BB => {
            (0, zB.q)({
              attackMode: BB
            })
          }
        }), (0, wB.jsx)(bo.c, {
          label: BB("controller:settingsLargePointer"),
          checked: OB.largePointer,
          onClick: BB => {
            (0, zB.q)({
              largePointer: BB
            })
          },
          circleInfoText: BB("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Mj = GB(9529);
    const Pj = new class {
        constructor(BB) {
          this.router = BB, this.current = null
        }
        claim(BB, OB) {
          const GB = this.current;
          GB && (this.current = null, GB.release(), GB.onTakenOver());
          const YB = this.router.register({
              ...BB,
              name: "capture"
            }),
            DB = {
              release: YB,
              onTakenOver: OB
            };
          return this.current = DB, () => {
            this.current === DB && (this.current = null), YB()
          }
        }
      }(PB.c),
      zj = BB => {
        (0, gB.useEffect)((() => {
          if (!BB) return;
          const OB = BB();
          let GB = !1;
          const YB = () => {
              GB || (GB = !0, OB.onEnd())
            },
            DB = Pj.claim({
              isActive: () => !GB,
              onFrame: BB => {
                OB.onFrame(BB, YB)
              }
            }, YB),
            QB = void 0 === OB.timeoutMs ? void 0 : window.setTimeout(YB, OB.timeoutMs),
            oB = BB => {
              "Escape" === BB.key && (BB.preventDefault(), BB.stopPropagation(), YB())
            };
          return window.addEventListener("keydown", oB, !0), () => {
            GB = !0, DB(), window.clearTimeout(QB), window.removeEventListener("keydown", oB, !0)
          }
        }), [BB])
      },
      lj = BB => {
        let {
          row: OB,
          capturing: GB,
          onCapture: YB,
          holdFillRef: QB,
          onRebind: oB,
          swapped: jB
        } = BB;
        const {
          t: yB
        } = (0, DB.H)();
        if ("fixed" === OB.kind) return (0, wB.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, wB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, wB.jsx)("div", {
              className: "ControlName",
              children: yB(OB.labelKey)
            }), (0, wB.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, wB.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, wB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, wB.jsx)(SD, {
                    glyph: "move" === OB.stick ? (0, MB.s)() : (0, MB.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: JB
        } = OB, PB = (0, MB.h)(JB), zB = (0, MB.i)(JB), lB = PB !== zB && (0, MB.c)(JB, zB);
        return (0, wB.jsxs)("div", {
          className: XB()("ControlRow PadControlRow", {
            Capturing: GB
          }),
          children: [(0, wB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, wB.jsx)("div", {
              className: "ControlName",
              children: yB(vo.j[JB])
            }), (0, wB.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!GB && (0, wB.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, wB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    YB(JB)
                  },
                  children: (0, wB.jsx)(SD, {
                    glyph: PB
                  })
                }), lB && (0, wB.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: yB("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    oB(JB, zB)
                  },
                  children: (0, wB.jsx)(mo.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), GB && (0, wB.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, wB.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, wB.jsx)("span", {
                    children: yB("controller:settingsCapturePrompt")
                  }), (0, wB.jsx)("div", {
                    ref: QB,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, wB.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    YB(null)
                  },
                  children: "\xd7"
                })]
              }), GB && (0, wB.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, wB.jsx)(Co.d, {
                  text: yB((0, MB.c)(JB, (0, MB.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Co.f
                  }),
                  glyph: (0, MB.h)("menuBack")
                })
              })]
            })]
          }), jB.map((BB => (0, wB.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, wB.jsx)(Co.d, {
              text: yB("controller:settingsSwapNotice", {
                action: yB(vo.j[BB]),
                button: Co.f
              }),
              glyph: (0, MB.h)(BB)
            })
          }, BB))), GB && (0, wB.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${vo.t}ms`
            }
          })]
        })
      },
      pj = [],
      qj = BB => {
        let {
          layoutSetting: OB
        } = BB;
        const {
          t: GB
        } = (0, DB.H)(), YB = (0, zB.u)();
        (0, lB.D)();
        const QB = (0, gB.useRef)(null),
          [oB, jB] = (0, gB.useState)(null),
          yB = (0, gB.useCallback)(((BB, OB) => {
            const GB = (0, zB.k)().bindings;
            (0, MB.E)(BB, OB);
            const YB = (0, MB.v)(GB, BB);
            jB(YB.length > 0 ? {
              action: BB,
              swapped: YB
            } : null)
          }), []),
          [JB, qB] = ((BB, OB) => {
            const [GB, YB] = (0, gB.useState)(null), DB = (0, gB.useMemo)((() => GB ? () => {
              const DB = (0, MB.h)("menuBack"),
                QB = new vo.c(DB, (0, MB.h)("menuConfirm"), (BB => (0, MB.c)(GB, BB)));
              return {
                onFrame: (YB, oB) => {
                  var jB;
                  const yB = YB.frame.timestampMs,
                    JB = QB.update({
                      ...YB,
                      isDown: BB => (0, pB.P)(YB.frame.values, BB)
                    }, yB);
                  null === (jB = BB.current) || void 0 === jB || jB.style.setProperty("width", 100 * QB.getBindHoldProgress(yB) + "%"), JB && ("bind" === JB.kind ? (PB.c.consumeButton(JB.button), OB(GB, JB.button)) : PB.c.consumeButton(DB), oB())
                },
                onEnd: () => {
                  YB(null)
                },
                timeoutMs: vo.t
              }
            } : null), [GB, BB, OB]);
            return zj(DB), [GB, YB]
          })(QB, yB),
          ZB = BB => {
            BB && jB(null), qB(BB)
          };
        (0, gB.useEffect)((() => {
          if (!oB) return;
          const BB = window.setTimeout((() => {
            jB(null)
          }), vo.hb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [oB]);
        const NB = !YB.swapSticks && 0 === Object.keys(YB.bindings).length;
        return (0, wB.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, wB.jsx)("div", {
            className: "SliderText",
            children: GB("controller:settingsRemap")
          }), (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GB("controller:settingsRemapHint")
          }), (0, wB.jsx)(Fo.Q, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: NB,
            onClick: () => {
              ZB(null), jB(null), (0, MB.H)()
            },
            children: GB("controller:settingsResetAll")
          }), OB, vo.bb.map(((BB, OB) => (0, wB.jsx)(Mj.d, {
            title: GB(BB.titleKey),
            defaultOpen: 0 === OB,
            children: BB.rows.map((BB => (0, wB.jsx)(lj, {
              row: BB,
              capturing: "action" === BB.kind && BB.action === JB,
              onCapture: ZB,
              holdFillRef: QB,
              onRebind: yB,
              swapped: "action" === BB.kind && (null === oB || void 0 === oB ? void 0 : oB.action) === BB.action ? oB.swapped : pj
            }, "action" === BB.kind ? BB.action : BB.labelKey)))
          }, BB.titleKey)))]
        })
      },
      Zj = BB => {
        let {
          deadzone: OB,
          dotRef: GB,
          labelKey: YB
        } = BB;
        const {
          t: QB
        } = (0, DB.H)();
        return (0, wB.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, wB.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, wB.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * OB + "%",
                height: 100 * OB + "%"
              }
            }), (0, wB.jsx)("div", {
              ref: GB,
              className: "ControllerTesterDot"
            })]
          }), (0, wB.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: QB(YB)
          })]
        })
      },
      Nj = (BB, OB, GB, YB) => {
        var DB;
        BB && (BB.style.left = 50 + 50 * Math.max(-1, Math.min(1, OB.x)) + "%", BB.style.top = 50 + 50 * Math.max(-1, Math.min(1, OB.y)) + "%", null === (DB = BB.parentElement) || void 0 === DB || DB.classList.toggle("Active", YB || Math.hypot(OB.x, OB.y) > GB))
      },
      Rj = BB => {
        const OB = {
            deadzone: BB.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          GB = {
            deadzone: BB.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return BB.swapSticks ? {
          left: GB,
          right: OB
        } : {
          left: OB,
          right: GB
        }
      },
      Wj = () => {
        const {
          t: BB
        } = (0, DB.H)(), OB = (() => {
          const [BB, OB] = (0, gB.useState)((() => oB.g.getActivePad()));
          return (0, ZD.f)(oB.c, (() => {
            OB(oB.g.getActivePad())
          })), BB
        })(), GB = Rj((0, zB.u)()), YB = (0, gB.useRef)(null), QB = (0, gB.useRef)(null), jB = (0, gB.useRef)([]), yB = (0, gB.useRef)(null), JB = (0, gB.useRef)(null), [lB, qB] = (BB => {
          const [OB, GB] = (0, gB.useState)(!1), YB = (0, gB.useMemo)((() => OB ? () => {
            const OB = (0, MB.h)("menuBack"),
              YB = new vo.f;
            return {
              onFrame: (GB, DB) => {
                var QB;
                const oB = YB.update({
                  pressed: GB.wasPressed(OB),
                  sJ: GB.isHeld(OB)
                }, GB.frame.timestampMs);
                null === (QB = BB.current) || void 0 === QB || QB.style.setProperty("width", 100 * oB + "%"), oB >= 1 && (PB.c.consumeButton(OB), DB())
              },
              onEnd: () => {
                GB(!1)
              }
            }
          } : null), [OB, BB]);
          return zj(YB), [OB, GB]
        })(QB);
        (0, gB.useEffect)((() => {
          const BB = BB => {
            for (const GB of pB.db) {
              const OB = (0, pB.p)(GB),
                YB = jB.current[OB];
              if (!YB) continue;
              const DB = BB.values[OB];
              YB.classList.toggle("Pressed", DB >= pB.E), (0, pB.R)(OB) && YB.style.setProperty("--trigger-fill", `${Math.round(100*DB)}%`)
            }
            const OB = Rj((0, zB.k)());
            Nj(yB.current, BB.leftStick, OB.left.deadzone, BB.values[(0, pB.p)("LS")] >= pB.E), Nj(JB.current, BB.rightStick, OB.right.deadzone, BB.values[(0, pB.p)("RS")] >= pB.E)
          };
          return OB || BB((0, pB.A)()), oB.g.onFrame(BB)
        }), [OB]), (0, gB.useEffect)((() => {
          OB || qB(!1)
        }), [OB, qB]), (0, gB.useEffect)((() => {
          var BB;
          lB && (null === (BB = YB.current) || void 0 === BB || BB.scrollIntoView({
            block: "nearest"
          }))
        }), [lB]);
        const ZB = vo.Y.find((BB => BB.value === (null === OB || void 0 === OB ? void 0 : OB.family)));
        return (0, wB.jsxs)("div", {
          ref: YB,
          className: XB()("SettingBox ControllerTester", {
            Testing: lB
          }),
          children: [(0, wB.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, wB.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [OB && (0, wB.jsx)("div", {
                children: BB("controller:settingsTesterFamily", {
                  family: ZB ? BB(ZB.labelKey) : OB.family
                })
              }), OB && (0, wB.jsx)("div", {
                className: "ControllerTesterPadId",
                children: OB.id
              }), !OB && (0, wB.jsx)("div", {
                children: BB("controller:settingsTesterNoPad")
              })]
            }), (OB || lB) && (0, wB.jsx)(Fo.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                qB(!lB)
              },
              children: BB(lB ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), OB && !lB && (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsTesterHint")
          }), lB && (0, wB.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, wB.jsx)(Co.d, {
              text: BB("controller:settingsTesterTesting", {
                button: Co.f
              }),
              glyph: (0, MB.h)("menuBack")
            }), (0, wB.jsx)("div", {
              ref: QB,
              className: "ControllerTesterExitFill"
            })]
          }), (0, wB.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, wB.jsx)(Zj, {
              deadzone: GB.left.deadzone,
              dotRef: yB,
              labelKey: GB.left.labelKey
            }), (0, wB.jsx)("div", {
              className: "ControllerTesterButtons",
              children: pB.db.map((BB => {
                const GB = (0, pB.p)(BB);
                return (0, wB.jsx)("div", {
                  ref: BB => {
                    jB.current[GB] = BB
                  },
                  className: (0, pB.R)(GB) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, wB.jsx)(SD, {
                    glyph: BB,
                    family: null === OB || void 0 === OB ? void 0 : OB.family
                  })
                }, BB)
              }))
            }), (0, wB.jsx)(Zj, {
              deadzone: GB.right.deadzone,
              dotRef: JB,
              labelKey: GB.right.labelKey
            })]
          })]
        })
      },
      Aj = (0, gB.memo)((function() {
        const {
          t: BB
        } = (0, DB.H)(), OB = (0, zB.u)(), [GB, YB] = (0, gB.useState)(!1);
        return (0, gB.useEffect)((() => {
          if (!GB) return;
          const BB = window.setTimeout((() => {
            YB(!1)
          }), vo.hb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [GB]), (0, wB.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, wB.jsx)(so, {
            text: BB("controller:settingsLook")
          }), (0, wB.jsx)(to, {
            settingKey: "lookSensitivityX",
            label: BB("controller:settingsLookSensitivityX"),
            range: vo.eb,
            format: vo.M
          }), (0, wB.jsx)(to, {
            settingKey: "lookSensitivityY",
            label: BB("controller:settingsLookSensitivityY"),
            range: vo.eb,
            format: vo.M
          }), (0, wB.jsx)(to, {
            settingKey: "aimLookSensitivity",
            label: BB("controller:settingsAimLookSensitivity"),
            range: vo.l,
            format: vo.M
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsLookCurve"),
            hint: BB("controller:settingsLookCurveHint"),
            options: vo.V,
            value: OB.lookCurve,
            onChange: BB => {
              (0, zB.q)({
                lookCurve: BB
              })
            }
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsInvertLookX"),
            checked: OB.invertLookX,
            onClick: BB => {
              (0, zB.q)({
                invertLookX: BB
              })
            }
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsInvertLookY"),
            checked: OB.invertLookY,
            onClick: BB => {
              (0, zB.q)({
                invertLookY: BB
              })
            }
          }), (0, wB.jsx)(to, {
            settingKey: "lookDeadzone",
            label: BB("controller:settingsLookDeadzone"),
            range: vo.B,
            format: vo.G
          }), (0, wB.jsx)(jj, {}), (0, wB.jsx)(so, {
            text: BB("controller:settingsMovement")
          }), (0, wB.jsx)(to, {
            settingKey: "moveDeadzone",
            label: BB("controller:settingsMoveDeadzone"),
            range: vo.B,
            format: vo.G
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsAutoSprint"),
            checked: OB.autoSprint,
            onClick: BB => {
              (0, zB.q)({
                autoSprint: BB
              })
            },
            circleInfoText: BB("controller:settingsAutoSprintInfo")
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsSneak"),
            options: vo.gb,
            value: OB.sneakMode,
            onChange: BB => {
              (0, zB.q)({
                sneakMode: BB
              })
            }
          }), (0, wB.jsx)(so, {
            text: BB("controller:settingsButtons")
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsPromptFamily"),
            options: vo.Y,
            value: OB.promptFamily,
            onChange: BB => {
              (0, zB.q)({
                promptFamily: BB
              })
            }
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsHideButtonHints"),
            checked: OB.hideButtonHints,
            onClick: BB => {
              (0, zB.q)({
                hideButtonHints: BB
              })
            }
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsVibration"),
            checked: OB.vibration,
            onClick: BB => {
              (0, zB.q)({
                vibration: BB
              }), BB && QD("preview")
            }
          }), (0, wB.jsx)(to, {
            settingKey: "cursorSpeed",
            label: BB("controller:settingsCursorSpeed"),
            range: vo.x,
            format: vo.M
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsCursorMagnetism"),
            checked: OB.cursorMagnetism,
            onClick: BB => {
              (0, zB.q)({
                cursorMagnetism: BB
              })
            }
          }), (0, wB.jsx)(bo.c, {
            label: BB("controller:settingsMenuBackToCategories"),
            checked: OB.menuBackToCategories,
            onClick: BB => {
              (0, zB.q)({
                menuBackToCategories: BB
              })
            }
          }), (0, wB.jsx)(qj, {
            layoutSetting: (0, wB.jsxs)(wB.Fragment, {
              children: [MB.e.map((GB => (0, wB.jsx)(bo.c, {
                label: BB(vo.R[GB]),
                checked: (0, MB.C)(GB, OB),
                onClick: BB => {
                  YB(!(0, MB.N)(GB, BB))
                }
              }, GB))), GB && (0, wB.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: BB("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, wB.jsx)(Jj, {}), (0, wB.jsx)(so, {
            text: BB("controller:settingsAlternatives")
          }), (0, wB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsAlternativesHint")
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsMenuNavigation"),
            hint: BB("controller:settingsMenuNavigationHint"),
            options: vo.W,
            value: OB.menuNavigation,
            onChange: BB => {
              (0, zB.q)({
                menuNavigation: BB
              })
            }
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsInventoryNavigation"),
            hint: BB("controller:settingsInventoryNavigationHint"),
            options: vo.Q,
            value: OB.inventoryNavigation,
            onChange: BB => {
              (0, zB.q)({
                inventoryNavigation: BB
              })
            }
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsQuickChat"),
            hint: BB("controller:settingsQuickChatHint"),
            options: vo.$,
            value: OB.quickChat,
            onChange: BB => {
              (0, zB.q)({
                quickChat: BB
              })
            }
          }), (0, wB.jsx)(xo, {
            label: BB("controller:settingsLeaderboardButton"),
            hint: BB("controller:settingsLeaderboardButtonHint"),
            options: vo.U,
            value: OB.leaderboardButton,
            onChange: BB => {
              (0, zB.q)({
                leaderboardButton: BB
              })
            }
          }), (0, wB.jsx)(so, {
            text: BB("controller:settingsTester")
          }), (0, wB.jsx)(Wj, {})]
        })
      }));
    (0, DB.b)(YB);
    for (const fj of (0, QB.o)()) fj.connected ? oB.g.handleConnectionEvent(fj) : oB.g.handleDisconnectionEvent(fj);
    const Vj = () => null !== oB.g.getActivePad(),
      Sj = () => DG.getState(),
      nj = () => DG.isSteppingSlots(),
      Uj = (BB, OB) => {
        const GB = tY.getFocused();
        tY.isActive() && GB && BB.contains(GB) && tY.setFocus(OB, {
          scroll: !1
        })
      }
  },
  8885: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => yB,
      c: () => JB
    });
    var YB = GB(1461),
      DB = GB(1455);
    const QB = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      oB = "28de",
      jB = new Set(["1205"]),
      yB = (BB, OB) => {
        const GB = (0, YB.e)(BB);
        if ((null === GB || void 0 === GB ? void 0 : GB.vendor) === oB) return jB.has(GB.product) ? "steamdeck" : "xbox";
        if (GB && QB[GB.vendor]) return QB[GB.vendor];
        if ((0, DB.d)(BB)) return "nintendo";
        const yB = `${BB} ${null!==OB&&void 0!==OB?OB:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(yB) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(yB) ? "nintendo" : /steam deck/.test(yB) ? "steamdeck" : "xbox"
      },
      JB = BB => {
        var OB;
        return (null === (OB = (0, YB.e)(BB)) || void 0 === OB ? void 0 : OB.vendor) === oB
      }
  },
  8915: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      g: () => jB
    });
    var YB = GB(8878);
    const DB = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      QB = new Set(["capture", "gameplay"]),
      oB = ["Up", "Down", "Left", "Right"],
      jB = BB => oB.includes(BB),
      yB = .25;
    const JB = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.sJ = new Array(YB.bb).fill(!1), this.previousHeld = new Array(YB.bb).fill(!1), this.consumedButtons = new Array(YB.bb).fill(!1), this.suppressedReleases = new Array(YB.bb).fill(!1), this.wakeOwned = new Array(YB.bb).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, YB.A)()
      }
      register(BB) {
        return this.consumers.has(BB.name) && console.warn(`Controller consumer "${BB.name}" registered twice; the newer one replaces it.`), this.consumers.set(BB.name, BB), () => {
          var OB;
          this.consumers.get(BB.name) === BB && (this.activeName === BB.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (OB = this.peek) || void 0 === OB ? void 0 : OB.over) === BB.name && (this.peek = null), this.consumers.delete(BB.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(BB) {
        return this.sJ[(0, YB.p)(BB)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.sJ = new Array(YB.bb).fill(!1), this.previousHeld = new Array(YB.bb).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, YB.A)()
      }
      dispatch(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = BB, this.previousHeld = this.sJ, this.sJ = (0, YB.t)(BB.values, this.previousHeld);
        for (let QB = 0; QB < YB.bb; QB++) this.suppressedReleases[QB] = !this.sJ[QB] && this.consumedButtons[QB], this.sJ[QB] || (this.consumedButtons[QB] = !1), this.wakeOwned[QB] && (this.sJ[QB] ? (this.consumedButtons[QB] = !0, this.wakeOwned[QB] = !1) : BB.values[QB] < YB._ && (this.wakeOwned[QB] = !1));
        Math.hypot(BB.leftStick.x, BB.leftStick.y) < yB && (this.leftStickConsumed = !1), Math.hypot(BB.rightStick.x, BB.rightStick.y) < yB && (this.rightStickConsumed = !1);
        const DB = this.pickActive();
        if ((null === DB || void 0 === DB ? void 0 : DB.name) !== this.activeName) {
          var oB, jB, JB, MB, PB, zB;
          const BB = this.activeName,
            OB = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            GB = null !== (oB = null === DB || void 0 === DB || null === (jB = DB.peek) || void 0 === jB ? void 0 : jB.call(DB)) && void 0 !== oB ? oB : null,
            QB = null === BB && !!GB && !(null === (JB = this.consumers.get(GB.over)) || void 0 === JB || !JB.onPeekFrame),
            yB = GB && (GB.over === BB || QB) ? GB : null,
            lB = null !== this.peek && this.peek.over === (null === DB || void 0 === DB ? void 0 : DB.name) ? this.peek : null;
          this.deactivateCurrent(null !== yB, null !== lB), this.activeName = null !== (MB = null === DB || void 0 === DB ? void 0 : DB.name) && void 0 !== MB ? MB : null, null === BB || this.handOffPending || this.consumeAllHeld();
          const pB = null === (PB = null !== yB && void 0 !== yB ? yB : lB) || void 0 === PB ? void 0 : PB.stick;
          "left" === pB && OB.left ? this.leftStickConsumed = !1 : "right" === pB && OB.right && (this.rightStickConsumed = !1), this.peek = yB, DB || null === BB ? DB && (null === (zB = this.idleResume) || void 0 === zB ? void 0 : zB.name) === DB.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: BB,
            left: OB.left && this.leftStickConsumed,
            right: OB.right && this.rightStickConsumed
          }, DB && (this.idleResume = null);
          for (let DB = 0; DB < YB.bb; DB++) this.previousHeld[DB] && !this.sJ[DB] && (this.suppressedReleases[DB] = !0)
        }
        var lB, pB;
        (this.handOffPending = !1, DB) && (GB && !QB.has(DB.name) && this.consumeWakePress(DB), DB.onFrame(this.buildInput(BB, OB, GB)), this.peek && (null === (lB = this.consumers.get(this.peek.over)) || void 0 === lB || null === (pB = lB.onPeekFrame) || void 0 === pB || pB.call(lB, this.buildInput(BB, OB, !1, this.peek.stick))))
      }
      consumeWakePress(BB) {
        for (let DB = 0; DB < YB.bb; DB++) {
          var OB, GB;
          const QB = YB.db[DB];
          (null !== (OB = null === (GB = BB.wakePressActs) || void 0 === GB ? void 0 : GB.call(BB, QB)) && void 0 !== OB ? OB : oB.includes(QB)) || (this.sJ[DB] ? this.consumedButtons[DB] = !0 : this.lastFrame.values[DB] >= YB.Y && (this.wakeOwned[DB] = !0))
        }
      }
      pickActive() {
        for (const BB of DB) {
          const OB = this.consumers.get(BB);
          if (OB && OB.isActive()) return OB
        }
        return null
      }
      deactivateCurrent() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var GB, YB, DB, QB;
        this.activeName && (null === (GB = this.consumers.get(this.activeName)) || void 0 === GB || null === (YB = GB.onDeactivate) || void 0 === YB || YB.call(GB, BB));
        this.peek && !OB && (null === (DB = this.consumers.get(this.peek.over)) || void 0 === DB || null === (QB = DB.onDeactivate) || void 0 === QB || QB.call(DB, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let DB = 0; DB < YB.bb; DB++) this.sJ[DB] && (this.consumedButtons[DB] = !0);
        const {
          leftStick: OB,
          rightStick: GB
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== BB && (this.leftStickConsumed || Math.hypot(OB.x, OB.y) >= yB), this.rightStickConsumed = "right" !== BB && (this.rightStickConsumed || Math.hypot(GB.x, GB.y) >= yB)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(BB) {
        const OB = (0, YB.p)(BB);
        this.sJ[OB] && (this.consumedButtons[OB] = !0)
      }
      buildInput(BB, OB, GB, DB) {
        const QB = this.sJ,
          oB = this.previousHeld,
          jB = DB ? new Array(YB.bb).fill(!0) : [...this.consumedButtons],
          yB = DB ? jB : [...this.suppressedReleases],
          JB = !this.leftStickConsumed && (!DB || "left" === DB),
          MB = !this.rightStickConsumed && (!DB || "right" === DB);
        return {
          frame: BB,
          dtMs: OB,
          isHeld: BB => {
            const OB = (0, YB.p)(BB);
            return QB[OB] && !jB[OB]
          },
          wasPressed: BB => {
            const OB = (0, YB.p)(BB);
            return QB[OB] && !oB[OB] && !jB[OB]
          },
          wasReleased: BB => {
            const OB = (0, YB.p)(BB);
            return !QB[OB] && oB[OB] && !yB[OB]
          },
          value: OB => {
            const GB = (0, YB.p)(OB);
            return jB[GB] ? 0 : BB.values[GB]
          },
          leftStick: JB ? BB.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: MB ? BB.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: GB
        }
      }
    }
  },
  8902: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => PB.h,
      g: () => PB.i,
      k: () => dB,
      o: () => KB,
      q: () => uB,
      u: () => mB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(1480),
      oB = GB(31),
      jB = GB(8906),
      yB = GB(8878),
      JB = GB(8896),
      MB = GB(8870),
      PB = GB(2117),
      zB = GB(8909);
    const lB = {
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
      pB = "controllerSettings",
      qB = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      ZB = ["auto", ...jB.c],
      NB = (BB, OB) => "string" === typeof OB && BB.includes(OB),
      RB = BB => OB => "number" === typeof OB && Number.isFinite(OB) ? (0, zB.w)(OB, BB) : void 0,
      WB = BB => "boolean" === typeof BB ? BB : void 0,
      AB = BB => OB => NB(BB, OB) ? OB : void 0,
      VB = {
        lookSensitivityX: RB(zB.eb),
        lookSensitivityY: RB(zB.eb),
        aimLookSensitivity: RB(zB.l),
        invertLookX: WB,
        invertLookY: WB,
        lookCurve: AB(yB.V),
        lookDeadzone: RB(zB.B),
        moveDeadzone: RB(zB.B),
        swapSticks: WB,
        autoSprint: WB,
        sneakMode: AB(["toggle", "hold"]),
        tapHoldTime: AB(["short", "medium", "long"]),
        attackMode: AB(["hold", "toggle"]),
        promptFamily: AB(ZB),
        hideButtonHints: WB,
        vibration: WB,
        cursorSpeed: RB(zB.x),
        cursorMagnetism: WB,
        buttonRepeat: AB(yB.r),
        largePointer: WB,
        menuBackToCategories: WB,
        swapConfirmBack: WB,
        menuNavigation: AB(["hybrid", "focus", "cursor"]),
        inventoryNavigation: AB(["hybrid", "slot", "cursor"]),
        quickChat: AB(["wheel", "off"]),
        leaderboardButton: AB(["shop", "leaderboard"]),
        gyroAiming: WB,
        gyroSensitivity: RB(zB.O),
        gyroActivation: AB(["always", "aiming", "button"]),
        gyroButton: AB(yB.db),
        emoteButton: AB(["tapHold", "wheel"])
      },
      SB = [{
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
      nB = BB => {
        const OB = {};
        if ("object" !== typeof BB || null === BB) return OB;
        for (const [GB, YB] of Object.entries(BB)) Object.prototype.hasOwnProperty.call(JB.f, GB) && NB(yB.db, YB) && (OB[GB] = YB);
        return OB
      },
      UB = BB => {
        const OB = {};
        for (const GB of Object.keys(lB))("bindings" === GB ? Object.keys(BB.bindings).length > 0 : BB[GB] !== lB[GB]) && (OB[GB] = BB[GB]);
        0 !== Object.keys(OB).length ? oB.g.setItem(pB, OB) : oB.g.removeItem(pB)
      };
    let fB = (() => {
        const BB = oB.g.getItem(pB),
          OB = (BB => {
            const OB = "object" === typeof BB && null !== BB ? BB : {},
              GB = {
                ...lB,
                bindings: nB(OB.bindings)
              };
            for (const DB of Object.keys(VB)) {
              const BB = VB[DB](OB[DB]);
              void 0 !== BB && (GB[DB] = BB)
            }
            const YB = Object.keys(OB).filter((BB => !!Object.prototype.hasOwnProperty.call(lB, BB) && ("bindings" === BB ? "object" !== typeof OB.bindings || null === OB.bindings || Object.keys(OB.bindings).length !== Object.keys(GB.bindings).length : GB[BB] !== OB[BB])));
            return YB.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${YB.join(", ")}`), GB
          })(BB);
        return null !== BB && void 0 !== BB && UB(OB), OB
      })(),
      kB = {
        ...fB,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const BB = {},
            OB = new URLSearchParams(window.location.search);
          for (const {
              param: GB,
              key: YB
            }
            of SB) {
            const DB = VB[YB](OB.get(GB));
            void 0 !== DB && (BB[YB] = DB)
          }
          return BB
        })()
      };
    const dB = () => kB,
      KB = () => {
        var BB, OB;
        const GB = dB().promptFamily;
        return "auto" !== GB ? GB : null !== (BB = null === (OB = MB.g.getActivePad()) || void 0 === OB ? void 0 : OB.family) && void 0 !== BB ? BB : "xbox"
      },
      uB = BB => {
        const OB = kB;
        fB = {
          ...fB,
          ...BB
        }, UB(fB), kB = {
          ...kB,
          ...BB
        }, (BB => {
          DB.o.tM(PB.i, kB), qB.some((OB => BB[OB] !== kB[OB])) && DB.o.tM(PB.h, kB)
        })(OB)
      },
      mB = () => {
        const [BB, OB] = (0, YB.useState)(kB);
        return (0, QB.f)(PB.i, OB), BB
      }
  },
  9322: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    const YB = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      DB = BB => YB.has(BB)
  },
  8870: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => qB.e,
      g: () => WB
    });
    var YB = GB(8878),
      DB = GB(8885);
    const QB = .1,
      oB = .3;
    class jB {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(BB, OB) {
        const GB = null === this.lastMs ? 0 : Math.min(Math.max(0, OB - this.lastMs), 100);
        this.lastMs = OB;
        const YB = Math.hypot(BB.x, BB.y);
        if (YB >= oB) return this.anchor = null, void(this.returning = !0);
        YB >= QB || (this.returning = !1);
        const DB = this.anchor;
        if (!DB || Math.hypot(BB.x - DB.x, BB.y - DB.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: BB.x,
          y: BB.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += GB, this.steadyMs < 1e3) return;
        const jB = Math.max(YB, Math.hypot(DB.x, DB.y));
        jB < QB ? this.deadzone = 0 : this.returning && (this.deadzone = jB + .05, this.anchorLearned = !0)
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
    const yB = (BB, OB) => {
        var GB, YB;
        return null !== (GB = BB && (null === (YB = Object.getOwnPropertyDescriptor(BB, OB)) || void 0 === YB ? void 0 : YB.get)) && void 0 !== GB ? GB : null
      },
      JB = BB => {
        const OB = BB.vendorName;
        return "string" === typeof OB ? OB : void 0
      },
      MB = ((BB, OB) => {
        const GB = yB(BB, "index"),
          YB = yB(BB, "id"),
          DB = yB(BB, "connected"),
          QB = yB(BB, "mapping"),
          oB = yB(BB, "buttons"),
          jB = yB(BB, "axes"),
          MB = yB(OB, "pressed"),
          PB = yB(OB, "value");
        return GB && YB && DB && QB && oB && jB && MB && PB ? BB => {
          const OB = oB.call(BB),
            yB = jB.call(BB),
            zB = {
              index: Number(GB.call(BB)),
              id: String(YB.call(BB)),
              connected: !0 === DB.call(BB),
              mapping: String(QB.call(BB)),
              buttons: [],
              axes: [],
              vendorName: JB(BB)
            };
          for (let GB = 0; GB < OB.length; GB++) zB.buttons.push({
            pressed: !0 === MB.call(OB[GB]),
            value: Number(PB.call(OB[GB]))
          });
          for (let GB = 0; GB < yB.length; GB++) zB.axes.push(Number(yB[GB]));
          return zB
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      PB = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var zB = GB(1453),
      lB = GB(1455);
    const pB = BB => ({
      pressed: BB,
      value: BB ? 1 : 0
    });
    var qB = GB(2117);
    const ZB = oB,
      NB = BB => {
        const OB = new Array(YB.bb).fill(0);
        for (let GB = 0; GB < YB.bb && GB < BB.buttons.length; GB++) {
          const DB = BB.buttons[GB];
          OB[GB] = DB.pressed && !(0, YB.R)(GB) ? Math.max(DB.value, YB.E) : DB.value
        }
        return OB
      },
      RB = (BB, OB) => {
        var GB, YB;
        return {
          x: null !== (GB = BB.axes[OB]) && void 0 !== GB ? GB : 0,
          y: null !== (YB = BB.axes[OB + 1]) && void 0 !== YB ? YB : 0
        }
      };
    const WB = new class {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MB;
        this.readGamepads = BB, this.requireTrustedPads = OB, this.nativeReader = GB, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = BB => {
          BB.isTrusted && this.trustedIndices.add(BB.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = BB => {
          this.trustedIndices.delete(BB.gamepad.index)
        }, this.kP = BB => {
          if (this.rafId = 0, !this.running) return;
          const OB = 0 === this.lastTimestampMs ? 16 : Math.min(100, BB - this.lastTimestampMs);
          this.lastTimestampMs = BB;
          try {
            this.poll(BB, OB)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.kP))
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
          OB = BB ? this.readPad(BB) : null;
        return OB && OB.id === this.activeInfo.id ? BB : null
      }
      poll(BB, OB) {
        var GB, DB;
        const QB = this.readPads();
        let oB = null,
          yB = !1;
        const JB = [],
          MB = Math.max(QB.length, this.slots.length);
        for (let WB = 0; WB < MB; WB++) {
          var PB;
          const OB = WB < QB.length ? QB[WB] : null,
            GB = OB ? this.readPad(OB) : null;
          if (!GB || !GB.connected || !this.isUsable(GB)) {
            this.slots[WB] = null;
            continue
          }
          let DB = this.slots[WB];
          DB && DB.id === GB.id || (DB = {
            id: GB.id,
            sJ: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new jB,
            rightRest: new jB
          }, this.slots[WB] = DB);
          const MB = RB(GB, 0),
            zB = RB(GB, 2);
          !DB.leftSettled && Math.hypot(MB.x, MB.y) < ZB && (DB.leftSettled = !0), !DB.rightSettled && Math.hypot(zB.x, zB.y) < ZB && (DB.rightSettled = !0), DB.leftRest.observe(MB, BB), DB.rightRest.observe(zB, BB);
          const lB = NB(GB),
            pB = (0, YB.t)(lB, DB.sJ),
            qB = DB.sJ,
            AB = pB.map(((BB, OB) => BB && !qB[OB]));
          DB.sJ = pB;
          const VB = {
            pad: GB,
            slot: DB,
            values: lB
          };
          WB === (null === (PB = this.activeInfo) || void 0 === PB ? void 0 : PB.index) && GB.id === this.activeInfo.id ? (oB = VB, yB = AB.includes(!0)) : AB.includes(!0) && JB.push({
            polled: VB,
            rose: AB
          })
        }
        const zB = this.slots.some((BB => null !== BB));
        if (zB !== this.anyPadConnected) {
          this.anyPadConnected = zB;
          for (const BB of this.connectedListeners) BB()
        }
        const lB = null !== (GB = null === (DB = oB) || void 0 === DB ? void 0 : DB.slot.sJ) && void 0 !== GB ? GB : [],
          pB = yB ? void 0 : JB.find((BB => {
            let {
              rose: OB
            } = BB;
            return OB.some(((BB, OB) => BB && !lB[OB]))
          }));
        if (pB ? (oB = pB.polled, this.setActive(pB.polled.pad)) : this.activeInfo && !oB && this.setActive(null), !oB || !this.activeInfo) return;
        const qB = ((BB, OB) => {
          let {
            pad: GB,
            slot: DB,
            values: QB
          } = BB;
          const oB = (0, YB.A)(OB);
          return oB.values = QB, DB.leftSettled && (oB.leftStick = DB.leftRest.apply(RB(GB, 0))), DB.rightSettled && (oB.rightStick = DB.rightRest.apply(RB(GB, 2))), oB
        })(oB, BB);
        for (const YB of this.frameListeners) YB(qB, OB, this.activeInfo)
      }
      readPad(BB) {
        const OB = this.readSnapshot(BB);
        return OB && (0, lB.g)(OB) ? (BB => {
          const OB = OB => {
              var GB;
              return null !== (GB = BB.buttons[OB]) && void 0 !== GB ? GB : pB(!1)
            },
            GB = OB => {
              var GB;
              return null !== (GB = BB.axes[OB]) && void 0 !== GB ? GB : 0
            },
            YB = BB.axes.length > 9,
            DB = YB ? (BB => {
              const OB = 0 !== BB;
              return {
                up: OB && (BB >= -1 && BB < -.7 || BB >= .95 && BB <= 1),
                right: OB && BB >= -.75 && BB < -.1,
                down: OB && BB >= -.2 && BB < .45,
                left: OB && BB >= .4 && BB <= 1
              }
            })(GB(9)) : {
              up: GB(5) < -.5,
              down: GB(5) > .5,
              left: GB(4) < -.5,
              right: GB(4) > .5
            };
          return {
            ...BB,
            mapping: "standard",
            buttons: [OB(1), OB(2), OB(0), OB(3), OB(4), OB(5), OB(6), OB(7), OB(8), OB(9), OB(10), OB(11), pB(DB.up), pB(DB.down), pB(DB.left), pB(DB.right), OB(12)],
            axes: [GB(0), GB(1), GB(2), GB(YB ? 5 : 3)]
          }
        })(OB) : OB
      }
      readSnapshot(BB) {
        if (this.nativeReader) try {
          return this.nativeReader(BB)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (BB => {
          const OB = BB;
          return {
            index: OB.index,
            id: OB.id,
            connected: OB.connected,
            mapping: OB.mapping,
            buttons: Array.from(OB.buttons, (BB => ({
              pressed: BB.pressed,
              value: BB.value
            }))),
            axes: Array.from(OB.axes),
            vendorName: JB(BB)
          }
        })(BB)
      }
      isUsable(BB) {
        return !(0, zB.f)(BB.id) && ("standard" !== BB.mapping ? (this.warnedNonStandardIds.has(BB.id) || (this.warnedNonStandardIds.add(BB.id), console.warn(`Controller "${BB.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(BB.index))
      }
      setActive(BB) {
        this.activeInfo = BB ? {
          index: BB.index,
          id: BB.id,
          family: (0, DB.b)(BB.id, BB.vendorName)
        } : null;
        for (const OB of this.connectionListeners) OB(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (BB) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", BB)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.kP))
      }
    }((() => PB ? PB.call(navigator) : []), !0);
    WB.listenForConnections()
  },
  9410: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      e: () => oB,
      i: () => jB,
      m: () => DB
    });
    var YB = GB(9414);
    const DB = BB => {
        const OB = [];
        BB.holdingGun && OB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && OB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const QB of null !== (GB = null === (DB = BB.customButtons) || void 0 === DB ? void 0 : DB.filter(YB.e)) && void 0 !== GB ? GB : []) {
          var GB, DB;
          OB.push({
            kind: "customButton",
            id: QB.id,
            icon: QB.icon,
            description: QB.description
          })
        }
        return OB
      },
      QB = BB => BB.length >= 2,
      oB = BB => "specialAction" !== BB.kind,
      jB = (BB, OB) => {
        if (null === BB || null === OB) return BB === OB;
        if (BB.kind !== OB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === OB.action;
          case "customButton":
            return BB.id === OB.id && BB.icon === OB.icon;
          case "touchButton":
            return BB.label === OB.label
        }
      }
  },
  9337: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    const YB = {
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
  9402: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      h: () => lB,
      i: () => PB,
      j: () => pB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(1480),
      oB = GB(9410),
      jB = GB(9418);
    let yB = null;
    const JB = () => yB,
      MB = BB => {
        (0, oB.i)(yB, BB) || (yB = BB, DB.o.tM(jB.h, yB))
      },
      PB = () => {
        const [BB, OB] = (0, YB.useState)(JB);
        return (0, QB.f)(jB.h, OB), BB
      };
    let zB = !1;
    const lB = BB => {
        BB !== zB && (zB = BB, DB.o.tM(jB.i, BB))
      },
      pB = () => {
        const [BB, OB] = (0, YB.useState)(zB);
        return (0, QB.f)(jB.i, OB), BB
      }
  },
  9424: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => jB
    });
    var YB = GB(25),
      DB = GB(9418);
    let QB = !1;
    const oB = () => QB,
      jB = BB => {
        BB !== QB && (QB = BB, YB.o.tM(DB.l, QB))
      }
  },
  9421: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      f: () => yB
    });
    var YB = GB(25),
      DB = GB(9418);
    let QB = null,
      oB = 0;
    const jB = () => QB,
      yB = BB => {
        null === BB && null === QB || (QB = null === BB ? null : {
          id: ++oB,
          holdMs: BB
        }, YB.o.tM(DB.m, QB))
      }
  },
  9418: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => YB,
      i: () => DB,
      l: () => jB,
      m: () => yB,
      n: () => JB,
      q: () => oB
    });
    const YB = "controllerActionHintChanged",
      DB = "controllerActionWheelHintChanged",
      QB = "controllerOpenChat",
      oB = "controllerSneakToggledChanged",
      jB = "controllerAttackLatchedChanged",
      yB = "controllerDropStackHoldChanged",
      JB = "controllerPickBlockHintChanged"
  },
  9433: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => jB
    });
    var YB = GB(25),
      DB = GB(9418);
    let QB = !1;
    const oB = () => QB,
      jB = BB => {
        BB !== QB && (QB = BB, YB.o.tM(DB.n, QB))
      }
  },
  9490: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => jB
    });
    var YB = GB(25),
      DB = GB(9418);
    let QB = !1;
    const oB = () => QB,
      jB = BB => {
        BB !== QB && (QB = BB, YB.o.tM(DB.q, QB))
      }
  },
  9381: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor() {
        this.downAtMs = null
      }
      update(BB, OB, GB, YB) {
        if (BB) return this.downAtMs = GB, null;
        if (null === this.downAtMs) return null;
        const DB = GB - this.downAtMs >= YB;
        return OB ? DB ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, DB ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8932: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      c: () => zB,
      f: () => jB,
      g: () => WB,
      h: () => RB
    });
    var YB = GB(31),
      DB = GB(8906),
      QB = GB(8878);
    const oB = (() => {
        try {
          return GB(8935)
        } catch {
          return null
        }
      })(),
      jB = [...QB.db, "LeftStick", "RightStick"],
      yB = new Map,
      JB = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      MB = (new Set(Object.values(JB)), {
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
      PB = (BB, OB) => {
        var GB, YB;
        return null !== (GB = null === (YB = MB[JB[BB]]) || void 0 === YB ? void 0 : YB[OB]) && void 0 !== GB ? GB : 1
      },
      zB = (BB, OB) => {
        const GB = `./${JB[BB]}/${OB}.svg`;
        let YB = yB.get(GB);
        return void 0 === YB && (YB = oB ? oB(GB) : "", yB.set(GB, YB)), YB
      },
      lB = new Set,
      pB = [],
      qB = BB => {
        if (!lB.has(BB)) {
          lB.add(BB);
          for (const OB of jB) {
            const GB = zB(BB, OB);
            if (GB) {
              const BB = new Image;
              BB.crossOrigin = "anonymous", BB.src = GB, pB.push(BB)
            }
          }
        }
      },
      ZB = "controllerGlyphFamily";
    let NB = null;
    const RB = BB => {
        BB !== NB && (NB = BB, YB.g.setItem(ZB, BB), qB(BB))
      },
      WB = () => {
        const BB = YB.g.getItem(ZB);
        (0, DB.g)(BB) && BB !== NB && (NB = BB, qB(BB))
      }
  },
  9518: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => XB,
      c: () => wB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(1480),
      oB = GB(8890),
      jB = GB(8870),
      yB = GB(8915),
      JB = GB(8902);
    const MB = {
        x: 0,
        y: 0,
        z: 0
      },
      PB = Math.PI / 180,
      zB = BB => Math.hypot(BB.x, BB.y, BB.z),
      lB = (BB, OB) => ({
        x: BB.x * OB,
        y: BB.y * OB,
        z: BB.z * OB
      }),
      pB = (BB, OB) => ({
        x: BB.x + OB.x,
        y: BB.y + OB.y,
        z: BB.z + OB.z
      }),
      qB = (BB, OB) => ({
        x: BB.x - OB.x,
        y: BB.y - OB.y,
        z: BB.z - OB.z
      }),
      ZB = BB => {
        const OB = zB(BB);
        return 0 === OB ? MB : lB(BB, 1 / OB)
      },
      NB = BB => ({
        min: {
          ...BB
        },
        max: {
          ...BB
        }
      }),
      RB = (BB, OB) => ({
        min: {
          x: Math.min(BB.min.x, OB.x),
          y: Math.min(BB.min.y, OB.y),
          z: Math.min(BB.min.z, OB.z)
        },
        max: {
          x: Math.max(BB.max.x, OB.x),
          y: Math.max(BB.max.y, OB.y),
          z: Math.max(BB.max.z, OB.z)
        }
      }),
      WB = (BB, OB) => BB.max.x - BB.min.x <= OB && BB.max.y - BB.min.y <= OB && BB.max.z - BB.min.z <= OB;
    class AB {
      constructor() {
        this.bias = MB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = MB, this.windowSec = 0
      }
      update(BB) {
        const OB = this.gyroRange ? RB(this.gyroRange, BB.gyro) : NB(BB.gyro),
          GB = BB.accel ? this.accelRange ? RB(this.accelRange, BB.accel) : NB(BB.accel) : null;
        if (!WB(OB, 1) || GB && !WB(GB, .01)) return void this.restartWindow(BB);
        if (this.gyroRange = OB, this.accelRange = GB, this.sum = pB(this.sum, lB(BB.gyro, BB.dtSec)), this.windowSec += BB.dtSec, this.windowSec < 1) return;
        const YB = lB(this.sum, 1 / this.windowSec);
        if (zB(YB) > 5) return;
        const DB = qB(YB, this.bias);
        let QB = 0;
        !this.calibrated || this.windowSec >= 3 ? QB = 1 : zB(DB) <= 1 && (QB = Math.min(1, BB.dtSec / 1)), this.bias = pB(this.bias, lB(DB, QB)), this.calibrated = this.calibrated || QB > 0
      }
      correct(BB) {
        return qB(BB, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = MB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = MB, this.windowSec = 0
      }
      restartWindow(BB) {
        this.gyroRange = NB(BB.gyro), this.accelRange = BB.accel ? NB(BB.accel) : null, this.sum = MB, this.windowSec = 0
      }
    }
    class VB {
      constructor() {
        this.down = null
      }
      update(BB, OB, GB) {
        const YB = ZB(lB(OB, -1));
        if (!this.down) return this.down = YB, YB;
        const DB = lB(BB, PB * GB),
          QB = this.down,
          oB = {
            x: QB.x - (DB.y * QB.z - DB.z * QB.y),
            y: QB.y - (DB.z * QB.x - DB.x * QB.z),
            z: QB.z - (DB.x * QB.y - DB.y * QB.x)
          },
          jB = 0 === zB(YB) ? 0 : Math.min(1, GB / .25);
        var yB, JB;
        return this.down = ZB((JB = jB, pB(yB = oB, lB(qB(YB, yB), JB)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class SB {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(BB, OB, GB) {
        const YB = Math.hypot(BB, OB),
          DB = Math.max(0, Math.min(1, (YB - 2) / 2)),
          QB = {
            yaw: BB * (1 - DB),
            pitch: OB * (1 - DB),
            dtSec: GB
          };
        for (this.entries.push(QB), this.windowSec += GB; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let oB = 0,
          jB = 0;
        for (const JB of this.entries) oB += JB.yaw * JB.dtSec, jB += JB.pitch * JB.dtSec;
        const yB = this.windowSec > 0 ? {
          yaw: oB / this.windowSec,
          pitch: jB / this.windowSec
        } : {
          yaw: QB.yaw,
          pitch: QB.pitch
        };
        return {
          yaw: BB * DB + yB.yaw,
          pitch: OB * DB + yB.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class nB {
      constructor() {
        this.calibrator = new AB, this.gravity = new VB, this.smoother = new SB
      }
      process(BB, OB, GB) {
        const YB = Math.max(0, Math.min(.05, OB));
        this.calibrator.update({
          ...BB,
          dtSec: YB
        });
        const DB = this.calibrator.correct(BB.gyro);
        let QB = DB.y;
        "player" === GB && BB.accel && (QB = ((BB, OB) => {
          const GB = BB.y * OB.y + BB.z * OB.z;
          return -Math.sign(GB) * Math.min(1.41 * Math.abs(GB), Math.hypot(BB.y, BB.z))
        })(DB, this.gravity.update(DB, BB.accel, YB)));
        const oB = this.smoother.apply(QB, DB.x, YB),
          jB = ((BB, OB) => {
            const GB = Math.hypot(BB, OB);
            if (GB >= 1) return {
              yaw: BB,
              pitch: OB
            };
            const YB = GB / 1;
            return {
              yaw: BB * YB,
              pitch: OB * YB
            }
          })(oB.yaw, oB.pitch);
        return {
          yawDeg: jB.yaw * YB,
          pitchDeg: jB.pitch * YB
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
    const UB = (BB, OB) => {
      var GB, YB, DB;
      const QB = OB * PB,
        oB = null !== (GB = BB.beta) && void 0 !== GB ? GB : 0,
        jB = null !== (YB = BB.gamma) && void 0 !== YB ? YB : 0;
      return {
        x: oB * Math.cos(QB) - jB * Math.sin(QB),
        y: oB * Math.sin(QB) + jB * Math.cos(QB),
        z: null !== (DB = BB.alpha) && void 0 !== DB ? DB : 0
      }
    };
    var fB = GB(9520);
    class kB {
      constructor(BB, OB, GB) {
        this.hid = BB, this.sink = OB, this.onControllersChanged = GB, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = BB => {
          this.openController(BB.device).catch((BB => {
            console.warn("Could not open motion controller", BB)
          }))
        }, this.onDisconnect = BB => {
          this.opening.has(BB.device) && this.disconnectedWhileOpening.add(BB.device);
          const OB = this.controllers.get(BB.device);
          OB && (this.forget(OB), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const BB = await this.hid.getDevices();
        for (const OB of BB) await this.openController(OB).catch((BB => {
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
          filters: fB.k
        });
        let OB = 0;
        for (const GB of BB) await this.openController(GB).catch((BB => {
          console.warn("Could not open motion controller", BB), OB++
        }));
        return OB
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((BB => null !== (0, fB.e)(BB.vendorId, BB.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((BB => BB.kind))
      }
      forget(BB) {
        BB.device.removeEventListener("inputreport", BB.onReport), this.controllers.get(BB.device) === BB && this.controllers.delete(BB.device)
      }
      async openController(BB) {
        const OB = (0, fB.e)(BB.vendorId, BB.productId);
        if (!OB || !this.running || this.controllers.has(BB) || this.opening.has(BB)) return;
        this.opening.add(BB);
        let GB = !1;
        try {
          BB.opened || await BB.open()
        } finally {
          this.opening.delete(BB), GB = this.disconnectedWhileOpening.delete(BB)
        }
        if (GB) return void BB.close().catch((BB => {
          console.debug("Could not close an unplugged motion controller", BB)
        }));
        if (!this.running) return;
        const YB = {
          device: BB,
          kind: OB,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: BB => {
            this.onReport(YB, BB)
          }
        };
        this.controllers.set(BB, YB), BB.addEventListener("inputreport", YB.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(YB)
        } catch (DB) {
          console.warn(`Could not turn on motion for ${OB}`, DB), this.controllers.get(BB) === YB && (this.forget(YB), this.onControllersChanged())
        }
      }
      async enableMotion(BB) {
        let {
          device: OB,
          kind: GB
        } = BB;
        if ((0, fB.h)(GB))
          for (const YB of fB.w[GB]) await OB.receiveFeatureReport(YB).catch((BB => {
            console.debug(`Motion controller feature report ${YB} unavailable`, BB)
          }));
        else
          for (let YB = 0; YB < 2; YB++)
            for (const {
                subcommand: BB,
                args: GB
              }
              of fB.x) await OB.sendReport(fB.A, (0, fB.d)(this.switchPacketCounter++, BB, GB)), await new Promise((BB => {
              setTimeout(BB, 60)
            }))
      }
      onReport(BB, OB) {
        const GB = (0, fB.s)(BB.kind, OB.reportId, OB.data, BB.device.productId);
        if (!GB) return;
        const YB = null === BB.lastEventMs ? 0 : (OB.timeStamp - BB.lastEventMs) / 1e3;
        BB.lastEventMs = OB.timeStamp;
        let DB = GB.dtSec;
        if (null !== DB && YB > 0 && (DB = Math.max(.001, Math.min(.017, YB / GB.readings.length))), null === DB && null !== GB.sensorClock && (0, fB.h)(BB.kind)) {
          const OB = (0, fB.u)(BB.kind, BB.lastClock, GB.sensorClock);
          BB.lastClock = GB.sensorClock, DB = 0 === OB ? null : OB
        }
        if (BB.lastReadingMs = OB.timeStamp, this.isPreferred(BB, OB.timeStamp))
          for (const oB of GB.readings) {
            var QB;
            this.sink(oB, null !== (QB = DB) && void 0 !== QB ? QB : YB, `hid${BB.openedOrder}`)
          }
      }
      isPreferred(BB, OB) {
        const GB = BB => 1e6 * fB.p[BB.kind] + BB.openedOrder;
        for (const YB of this.controllers.values())
          if (YB !== BB && OB - YB.lastReadingMs < 500 && GB(YB) < GB(BB)) return !1;
        return !0
      }
    }
    var dB = GB(92);
    const KB = () => DeviceMotionEvent,
      uB = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, dB.isMobile)(),
      mB = () => {
        var BB;
        const OB = null === (BB = window.screen.orientation) || void 0 === BB ? void 0 : BB.angle;
        return "number" === typeof OB ? OB : "number" === typeof window.orientation ? window.orientation : 0
      };
    class IB {
      constructor(BB, OB) {
        this.sink = BB, this.onStateChanged = OB, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((BB => {
            console.warn("Could not enable the motion sensor", BB)
          }))
        }, this.onMotion = BB => {
          const OB = BB.rotationRate;
          if (!OB || null === OB.alpha && null === OB.beta && null === OB.gamma) return;
          const GB = null === this.lastEventMs ? 0 : (BB.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = BB.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: UB(OB, mB()),
            accel: null
          }, GB, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof KB().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const BB = KB().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof BB) return void this.listen();
        let OB;
        this.disarmGestureRequest();
        try {
          OB = await BB.call(DeviceMotionEvent)
        } catch (GB) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), GB
        }
        this.wanted && ("granted" === OB ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
    const FB = "controllerGyroStatusChanged",
      iB = {
        Rm: 0,
        Wm: 0
      },
      LB = BB => {
        var OB, GB;
        return "undefined" === typeof document || (null === (OB = null === (GB = document.featurePolicy) || void 0 === GB ? void 0 : GB.allowsFeature(BB)) || void 0 === OB || OB)
      };
    class gB {
      constructor() {
        this.processor = new nB, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = BB => {
          const OB = BB.gyroAiming && jB.g.hasConnectedPad();
          var GB, YB;
          OB !== this.phoneRunning && (this.phoneRunning = OB, OB ? null === (GB = this.phone) || void 0 === GB || GB.start() : null === (YB = this.phone) || void 0 === YB || YB.stop());
          if (BB.gyroAiming !== this.running) {
            var DB, QB;
            if (this.running = BB.gyroAiming, this.running) null === (DB = this.hid) || void 0 === DB || DB.start().catch((BB => {
              console.warn("Could not open motion controllers", BB)
            }));
            else null === (QB = this.hid) || void 0 === QB || QB.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          DB.o.tM(FB, this.getStatus())
        };
        const BB = (() => {
            var BB;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (BB = navigator.hid) && void 0 !== BB ? BB : null
          })(),
          OB = LB("hid");
        this.hidBlocked = null !== BB && !OB, this.hid = BB && OB ? new kB(BB, ((BB, OB, GB) => {
          this.lastHidReadingMs = performance.now(), this.feed(BB, OB, "player", GB)
        }), this.publishStatus) : null;
        const GB = LB("accelerometer") && LB("gyroscope");
        this.phoneBlocked = uB() && !GB, this.phone = uB() && GB ? new IB(((BB, OB, GB) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(BB, OB, "local", GB)
        }), this.publishStatus) : null, DB.o.subscribe(JB.g, this.syncWithSettings), jB.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, JB.k)()), this.publishStatus()
        })), this.syncWithSettings((0, JB.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var BB, OB, GB, YB;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (BB = null === (OB = this.hid) || void 0 === OB ? void 0 : OB.getConnectedKinds()) && void 0 !== BB ? BB : [],
          phoneMotion: null !== (GB = null === (YB = this.phone) || void 0 === YB ? void 0 : YB.getState()) && void 0 !== GB ? GB : "off",
          padConnected: jB.g.hasConnectedPad()
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
        const OB = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const GB = (0, JB.k)();
        return GB.gyroAiming && (BB => {
          let {
            activation: OB,
            isHeld: GB,
            useButton: YB,
            gyroButton: DB
          } = BB;
          return "always" === OB || GB("aiming" === OB ? YB : DB)
        })({
          activation: GB.gyroActivation,
          isHeld: BB => yB.c.isButtonHeld(BB),
          useButton: (0, oB.h)("use"),
          gyroButton: GB.gyroButton
        }) ? ((BB, OB) => ({
          Rm: -BB.yawDeg * OB * PB,
          Wm: -BB.pitchDeg * OB * PB
        }))(OB, GB.gyroSensitivity) : iB
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(BB, OB) {
        this.feed(BB, OB, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(BB, OB, GB, YB) {
        this.source !== YB && (this.processor.reset(), this.source = YB);
        const DB = this.processor.process(BB, OB, GB);
        this.pendingYawDeg += DB.yawDeg, this.pendingPitchDeg += DB.pitchDeg
      }
    }
    let rB = null;
    const XB = () => (rB || (rB = new gB), rB),
      wB = () => {
        const [BB, OB] = (0, YB.useState)((() => XB().getStatus()));
        return (0, QB.f)(FB, OB), (0, YB.useEffect)((() => {
          OB(XB().getStatus())
        }), []), BB
      }
  },
  9520: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => WB,
      d: () => VB,
      e: () => yB,
      h: () => YB,
      k: () => jB,
      n: () => JB,
      p: () => MB,
      s: () => RB,
      u: () => ZB,
      w: () => nB,
      x: () => SB
    });
    const YB = BB => "dualShock4" === BB || "dualSense" === BB,
      DB = 1356,
      QB = 1406,
      oB = [{
        vendorId: DB,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: DB,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: DB,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: DB,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: DB,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: QB,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: QB,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: QB,
        productId: 8199,
        kind: "joyConRight"
      }],
      jB = oB.map((BB => {
        let {
          vendorId: OB,
          productId: GB
        } = BB;
        return {
          vendorId: OB,
          productId: GB
        }
      })),
      yB = (BB, OB) => {
        var GB, YB;
        return null !== (GB = null === (YB = oB.find((GB => GB.vendorId === BB && GB.productId === OB))) || void 0 === YB ? void 0 : YB.kind) && void 0 !== GB ? GB : null
      },
      JB = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      MB = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      PB = 2e3 / 32767,
      zB = 1 / 8192,
      lB = 936 / 13371,
      pB = (BB, OB, GB) => ({
        x: BB.getInt16(OB, !0) * GB,
        y: BB.getInt16(OB + 2, !0) * GB,
        z: BB.getInt16(OB + 4, !0) * GB
      }),
      qB = BB => 0 === BB.x && 0 === BB.y && 0 === BB.z,
      ZB = (BB, OB, GB) => null === OB ? null : "dualShock4" === BB ? 16 * (GB - OB & 65535) / 3 / 1e6 : (GB - OB >>> 0) / 3 / 1e6,
      NB = (BB, OB) => "joyConRight" === OB ? {
        x: BB.y,
        y: -BB.z,
        z: -BB.x
      } : {
        x: -BB.y,
        y: BB.z,
        z: -BB.x
      },
      RB = (BB, OB, GB, DB) => YB(BB) ? ((BB, OB, GB, YB) => {
        const DB = ((BB, OB, GB) => "dualShock4" === BB ? 1 === OB && GB >= 63 ? 0 : 17 === OB && GB >= 65 ? 2 : null : 1 === OB && GB >= 62 ? 0 : 49 === OB && GB >= 63 ? 1 : null)(BB, OB, GB.byteLength);
        if (null === DB) return null;
        if (2976 === YB && 1 === OB && 0 !== (4 & GB.getUint8(30))) return null;
        const QB = DB + ("dualShock4" === BB ? 12 : 15),
          oB = pB(GB, QB, PB),
          jB = pB(GB, QB + 6, zB);
        return qB(oB) && qB(jB) ? null : {
          readings: [{
            gyro: oB,
            accel: jB
          }],
          dtSec: null,
          sensorClock: "dualShock4" === BB ? GB.getUint16(DB + 9, !0) : GB.getUint32(DB + 27, !0)
        }
      })(BB, OB, GB, DB) : ((BB, OB, GB) => {
        if (48 !== OB && 49 !== OB || GB.byteLength < 48) return null;
        const YB = [];
        for (let DB = 0; DB < 3; DB++) {
          const OB = pB(GB, 12 + 12 * DB, 244e-6),
            QB = pB(GB, 18 + 12 * DB, lB);
          if (qB(QB) && qB(OB)) return null;
          YB.push({
            gyro: NB(QB, BB),
            accel: NB(OB, BB)
          })
        }
        return {
          readings: YB,
          dtSec: .005,
          sensorClock: null
        }
      })(BB, OB, GB),
      WB = 1,
      AB = [0, 1, 64, 64, 0, 1, 64, 64],
      VB = (BB, OB, GB) => new Uint8Array([15 & BB, ...AB, OB, ...GB]),
      SB = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      nB = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8919: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => gB,
      f: () => aB,
      j: () => SB,
      k: () => lB.j,
      m: () => wB,
      p: () => XB,
      q: () => nB,
      s: () => EB,
      w: () => lB.p,
      A: () => lB.s,
      D: () => eB,
      G: () => lB.y,
      K: () => IB
    });
    var YB = GB(56),
      DB = GB(16),
      QB = GB(25),
      oB = GB(1480),
      jB = GB(1293),
      yB = GB(8902),
      JB = GB(8924),
      MB = GB(8885),
      PB = GB(8870),
      zB = GB(8932),
      lB = GB(1434),
      pB = GB(8878),
      qB = GB(9322),
      ZB = GB(4787),
      NB = GB(104);
    class RB {
      constructor(BB) {
        this.deps = BB, this.pads = new Map
      }
      observe(BB, OB, GB) {
        if (!this.deps.touchOnly) return;
        const YB = this.pads.get(OB.id);
        "proven" !== YB && GB ? (this.pads.set(OB.id, "proven"), void 0 !== YB && this.deps.onReleased(OB, BB, BB.timestampMs - YB)) : void 0 === YB && (this.pads.set(OB.id, BB.timestampMs), this.deps.onHeld(OB, BB)), this.deps.setMayHide("proven" === this.pads.get(OB.id))
      }
    }
    const WB = BB => BB.values.flatMap(((BB, OB) => BB >= pB.Y ? [String(OB)] : [])).join(",") || "none",
      AB = (BB, OB, YB, DB, QB) => {
        const oB = (0, lB.f)(),
          jB = document.visibilityState,
          yB = document.hasFocus();
        Promise.all([Promise.resolve().then((() => GB(3262))), Promise.resolve().then((() => GB(1308))), Promise.resolve().then((() => GB(120)))]).then((GB => {
          let [{
            logControllerHudHoldToGtag: JB
          }, {
            logClientLineFromEveryPage: MB
          }, {
            siteUsed: PB
          }] = GB;
          JB(BB, OB.family, null === QB ? void 0 : Math.round(QB / 1e3)), MB(`touch HUD pad ${BB}`, VB(OB, YB, DB, QB, oB, jB, yB, PB))
        }), (() => {}))
      },
      VB = (BB, OB, GB, YB, DB, QB, oB, jB) => {
        var yB;
        const JB = {
          pad_id: BB.id.slice(0, 120),
          pad_family: BB.family,
          pad_mapping: null !== (yB = null === GB || void 0 === GB ? void 0 : GB.mapping) && void 0 !== yB ? yB : "unread",
          pad_axes: GB ? String(GB.axes.length) : "unread",
          pad_buttons: GB ? String(GB.buttons.length) : "unread",
          pressed: WB(OB),
          ms_since_touch: null === DB ? "none" : String(Math.round(OB.timestampMs - DB)),
          visibility: QB,
          focused: String(oB),
          site: jB
        };
        return null !== YB && (JB.held_ms = String(Math.round(YB))), JB
      };
    const SB = BB => !BB.repeat && !(0, qB.e)(BB.key),
      nB = "PadHidesCursor";
    let UB = !1;
    const fB = BB => {
        BB !== UB && (UB = BB, document.documentElement.classList.toggle(nB, BB))
      },
      kB = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(BB) {
          let OB = !1,
            GB = !1;
          BB.values.forEach(((BB, YB) => {
            const DB = BB >= (this.buttonsDown[YB] ? pB._ : pB.Y);
            DB && !this.buttonsDown[YB] && (OB = !0, GB = !0), this.buttonsDown[YB] = DB
          }));
          return [BB.leftStick, BB.rightStick].forEach(((BB, YB) => {
            const DB = this.stickAnchors[YB];
            Math.hypot(BB.x, BB.y) < (DB ? pB._ : .3) ? this.stickAnchors[YB] = null : (!DB || Math.hypot(BB.x - DB.x, BB.y - DB.y) >= .3) && (this.stickAnchors[YB] = {
              x: BB.x,
              y: BB.y
            }, OB = !0, GB ||= !DB)
          })), OB && (this.lastActivityMs = BB.timestampMs), this.onlyMovedOn = OB && !GB, OB
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
      dB = (KB = () => PB.g.getActiveGamepad(), new RB({
        touchOnly: "touchOnly" === (0, NB.d)(),
        setMayHide: lB.q,
        onHeld: (BB, OB) => {
          AB("sJ", BB, OB, KB(), null)
        },
        onReleased: (BB, OB, GB) => {
          AB("released", BB, OB, KB(), GB)
        }
      }));
    var KB;
    let uB = null,
      mB = !1;
    const IB = () => mB;
    let FB = null,
      iB = !1,
      LB = null;
    const gB = () => LB;
    let rB = !1;
    const XB = (BB, OB) => {
        if (!kB.observe(BB)) return !1;
        if (dB.observe(BB, OB, kB.isStickOffRest()), rB && kB.wasOnlyMoveOn() && !(0, lB.j)()) return !1;
        rB = !1, mB = !1;
        const GB = !(0, lB.j)();
        return GB && (uB = BB, LB = !UB && iB && FB ? {
          ...FB
        } : null), iB = !1, (0, lB.p)("gamepad"), fB(!0), (0, zB.h)((0, yB.o)()), GB
      },
      wB = BB => !(0, lB.j)() || BB === uB,
      EB = () => {
        kB.reset()
      },
      cB = () => {
        const BB = DB.c.get("activeInputDevice"),
          OB = "gamepad" === BB ? PB.g.getActivePad() : null;
        return {
          device: BB,
          inGame: (0, jB.q)(),
          padMovesMouse: null !== OB && (0, MB.c)(OB.id)
        }
      },
      hB = BB => {
        document.pointerLockElement ? FB = null : (FB ??= {
          x: 0,
          y: 0
        }, FB.x = BB.clientX, FB.y = BB.clientY)
      },
      aB = () => {
        const BB = new ZB.c,
          OB = OB => {
            BB.reset(), rB = !1, (0, lB.p)(OB)
          },
          GB = BB => {
            if (BB.isTrusted) {
              if (BB instanceof KeyboardEvent) {
                if ((0, lB.n)(BB), !SB(BB)) return;
                mB = !0
              }
              if (BB instanceof PointerEvent && "touch" === BB.pointerType) return FB = null, void OB("touch");
              BB instanceof PointerEvent && (hB(BB), iB = !0), ("pointerdown" !== BB.type || (BB => {
                let {
                  device: OB,
                  inGame: GB,
                  padMovesMouse: YB
                } = BB;
                return !("gamepad" === OB && YB && GB)
              })(cB())) && OB("keyboardMouse")
            }
          },
          YB = BB => {
            BB.isTrusted && (FB = null, OB("touch"))
          },
          oB = BB => {
            BB.isTrusted && "touch" !== BB.pointerType && !BB.relatedTarget && (FB = null)
          },
          jB = GB => {
            if (!GB.isTrusted || "touch" === GB.pointerType) return;
            hB(GB);
            const YB = GB.movementX || 0,
              QB = GB.movementY || 0;
            if (0 === YB && 0 === QB) return;
            if (iB = !0, fB(!1), "keyboardMouse" === DB.c.get("activeInputDevice")) return;
            const oB = kB.isHolding(GB.timeStamp),
              jB = cB(),
              yB = (BB => {
                let {
                  device: OB,
                  inGame: GB,
                  padMovesMouse: YB,
                  padHolding: DB
                } = BB;
                return ("gamepad" !== OB || !YB) && "keyboardMouse" !== OB && (GB || !DB)
              })({
                ...jB,
                inGame: jB.inGame && (0, JB.i)(),
                padHolding: oB
              });
            yB && BB.add(YB, QB, GB.timeStamp) && (OB("keyboardMouse"), rB = kB.isStickOffRest())
          },
          yB = BB => {
            fB("gamepad" === BB)
          },
          MB = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", GB, MB), window.addEventListener("pointerdown", GB, MB), window.addEventListener("wheel", GB, MB), window.addEventListener("touchstart", YB, MB), window.addEventListener("pointermove", jB, MB), window.addEventListener("pointerout", oB, MB);
        const PB = QB.o.subscribe("appManagerUpdated|activeInputDevice", yB);
        return yB(DB.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", GB, MB), window.removeEventListener("pointerdown", GB, MB), window.removeEventListener("wheel", GB, MB), window.removeEventListener("touchstart", YB, MB), window.removeEventListener("pointermove", jB, MB), window.removeEventListener("pointerout", oB, MB), FB = null, QB.o.unsubscribe(PB), fB(!1)
        }
      },
      eB = () => {
        const [BB, OB] = (0, YB.useState)(yB.o);
        return (0, oB.f)(yB.c, (() => {
          OB((0, yB.o)())
        })), (0, oB.f)(PB.c, (() => {
          OB((0, yB.o)())
        })), BB
      }
  },
  8906: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      g: () => DB
    });
    const YB = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      DB = BB => YB.includes(BB)
  },
  9365: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => QB,
      j: () => yB,
      l: () => jB
    });
    var YB = GB(1480),
      DB = GB(1450);
    const QB = "controllerInventoryCursorChanged",
      oB = {
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
      jB = () => {
        var BB, OB;
        return (0, YB.i)(QB, null !== (BB = null === (OB = (0, DB.f)()) || void 0 === OB ? void 0 : OB.getInventoryCursorState()) && void 0 !== BB ? BB : oB)
      },
      yB = () => {
        var BB, OB;
        return null !== (BB = null === (OB = (0, DB.f)()) || void 0 === OB ? void 0 : OB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  9363: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB,
      e: () => jB,
      i: () => yB,
      j: () => oB,
      m: () => QB,
      n: () => MB,
      o: () => PB
    });
    let YB = null;
    const DB = new Set,
      QB = BB => (YB = BB, () => {
        if (YB === BB) {
          YB = null;
          for (const BB of DB) BB()
        }
      }),
      oB = BB => (DB.add(BB), () => {
        DB.delete(BB)
      }),
      jB = () => YB,
      yB = () => null !== YB;
    let JB = null;
    const MB = BB => {
        JB = BB
      },
      PB = () => {
        const BB = JB;
        return JB = null, BB
      },
      zB = (BB, OB) => {
        var GB, YB;
        return null !== (GB = null !== (YB = BB.find((BB => BB.element === OB))) && void 0 !== YB ? YB : BB.find((BB => BB.element.contains(OB)))) && void 0 !== GB ? GB : null
      }
  },
  9370: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      e: () => oB
    });
    var YB = GB(56);
    const DB = new WeakMap,
      QB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = DB.get(BB)) || void 0 === GB ? void 0 : GB.current) && void 0 !== OB ? OB : null
      },
      oB = (BB, OB) => {
        const GB = (0, YB.useRef)(OB);
        GB.current = OB;
        const QB = (0, YB.useRef)(null);
        (0, YB.useEffect)((() => {
          const OB = BB.current,
            YB = QB.current;
          OB !== YB && (YB && DB.get(YB) === GB && DB.delete(YB), QB.current = OB, OB && DB.set(OB, GB))
        })), (0, YB.useEffect)((() => () => {
          const BB = QB.current;
          BB && DB.get(BB) === GB && DB.delete(BB), QB.current = null
        }), [])
      }
  },
  9485: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => JB,
      f: () => PB,
      h: () => MB,
      j: () => yB,
      l: () => lB
    });
    var YB = GB(25),
      DB = GB(2117),
      QB = GB(1450),
      oB = GB(1434);
    const jB = BB => {
        var OB, GB;
        return (0, oB.j)() && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getGlyphForNoaAction(BB)) && void 0 !== OB ? OB : null
      },
      yB = "controllerGlyph:",
      JB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconName(BB)) && void 0 !== OB ? OB : `${yB}xbox/${BB}`
      },
      MB = BB => BB.startsWith(yB),
      PB = BB => {
        var OB, GB;
        return MB(BB) && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconUrl(BB)) && void 0 !== OB ? OB : null
      },
      zB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", oB.d, DB.h, DB.e],
      lB = BB => {
        const OB = zB.map((OB => YB.o.subscribe(OB, BB)));
        return () => {
          for (const BB of OB) YB.o.unsubscribe(BB)
        }
      }
  },
  9346: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => YB
    });
    const YB = "controllerOpenKeyboard",
      DB = "controllerKeyboardVisible"
  },
  8924: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB,
      i: () => MB,
      j: () => yB,
      m: () => jB
    });
    var YB = GB(16),
      DB = GB(1699),
      QB = GB(1825);
    const oB = new Map,
      jB = (BB, OB) => (oB.has(BB) && console.warn(`Gameplay blocker "${BB}" registered twice; the newer one replaces it.`), oB.set(BB, OB), () => {
        oB.get(BB) === OB && oB.delete(BB)
      }),
      yB = () => (0, QB.c)(document.activeElement),
      JB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [OB, GB] of oB)
          if (!BB.includes(OB) && GB()) return OB;
        return null
      },
      MB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === YB.c.get("gameState") && (!(0, DB.r)() && (!yB() && null === JB(BB)))
      }
  },
  8878: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => QB,
      E: () => PB,
      G: () => WB,
      H: () => uB,
      L: () => AB,
      P: () => NB,
      R: () => ZB,
      V: () => JB,
      Y: () => zB,
      _: () => lB,
      bb: () => DB,
      db: () => YB,
      e: () => IB,
      eb: () => SB,
      hb: () => dB,
      i: () => KB,
      kb: () => mB,
      m: () => MB,
      n: () => yB,
      nb: () => VB,
      p: () => jB,
      r: () => UB,
      t: () => RB,
      x: () => nB
    });
    const YB = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      DB = YB.length,
      QB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(DB).fill(0),
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
      oB = Object.fromEntries(YB.map(((BB, OB) => [BB, OB]))),
      jB = BB => oB[BB],
      yB = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const YB = Math.hypot(BB.x, BB.y);
        if (YB <= OB) return {
          x: 0,
          y: 0
        };
        const DB = Math.min(1, (YB - OB) / Math.max(1e-4, GB - OB));
        return {
          x: BB.x / YB * DB,
          y: BB.y / YB * DB
        }
      },
      JB = ["exponential", "linear", "boost"],
      MB = (BB, OB) => {
        const GB = Math.hypot(BB.x, BB.y);
        if (0 === GB) return {
          x: 0,
          y: 0
        };
        const YB = ((BB, OB) => {
          const GB = Math.max(0, Math.min(1, BB));
          return "linear" === OB ? GB : GB * GB
        })(GB, OB);
        return {
          x: BB.x / GB * YB,
          y: BB.y / GB * YB
        }
      },
      PB = .5,
      zB = .3,
      lB = .2,
      pB = jB("LT"),
      qB = jB("RT"),
      ZB = BB => BB === pB || BB === qB,
      NB = (BB, OB) => {
        const GB = jB(OB);
        return ZB(GB) ? BB[GB] > .35 : BB[GB] >= PB
      },
      RB = (BB, OB) => BB.map(((BB, GB) => ZB(GB) ? OB[GB] ? BB > .35 : BB >= .55 : BB >= PB)),
      WB = ["Up", "Down", "Left", "Right"],
      AB = BB => WB.includes(BB),
      VB = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(BB.x, BB.y) < OB ? null : Math.abs(BB.x) > Math.abs(BB.y) ? BB.x > 0 ? "Right" : "Left" : BB.y > 0 ? "Down" : "Up"
      },
      SB = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      nB = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      UB = ["default", "slow", "off"],
      fB = 800,
      kB = 250,
      dB = (BB, OB) => "off" === OB ? null : "slow" === OB ? {
        initialDelayMs: Math.max(BB.initialDelayMs, fB),
        intervalMs: Math.max(BB.intervalMs, kB)
      } : BB;
    class KB {
      constructor(BB) {
        this.readTiming = BB, this.sJ = !1, this.timing = null, this.nextFireMs = 0
      }
      update(BB, OB) {
        return BB ? this.sJ ? !!(this.timing && OB >= this.nextFireMs) && (this.nextFireMs = OB + this.timing.intervalMs, !0) : (this.sJ = !0, this.timing = this.readTiming(), this.nextFireMs = OB + (null !== (GB = null === (YB = this.timing) || void 0 === YB ? void 0 : YB.initialDelayMs) && void 0 !== GB ? GB : 0), !0) : (this.sJ = !1, !1);
        var GB, YB
      }
      reset() {
        this.sJ = !1
      }
    }
    const uB = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      mB = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class IB {
      constructor(BB) {
        this.timer = BB, this.direction = null
      }
      update(BB, OB) {
        return BB !== this.direction && (this.timer.reset(), this.direction = BB), this.timer.update(null !== BB, OB) ? BB : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9376: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => QB
    });
    let YB = -1 / 0;
    const DB = () => {
        YB = performance.now()
      },
      QB = BB => performance.now() - YB < BB
  },
  9328: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => QB
    });
    var YB = GB(8902),
      DB = GB(8878);
    const QB = BB => (0, DB.hb)(BB, (0, YB.k)().buttonRepeat),
      oB = BB => new DB.i((() => QB(BB)))
  },
  8913: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      d: () => QB,
      e: () => jB
    });
    var YB = GB(25),
      DB = GB(8902);
    const QB = (BB, OB) => "OpenShop" === BB ? "shop" === OB : "OpenLobbyLeaderboard" !== BB || "leaderboard" === OB;
    let oB = !1;
    const jB = BB => {
        BB !== oB && (oB = BB, YB.o.tM(DB.c, (0, DB.k)()))
      },
      yB = () => ((BB, OB) => "shop" === BB && OB ? "shop" : "leaderboard")((0, DB.k)().leaderboardButton, oB)
  },
  8909: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => RB,
      B: () => jB,
      F: () => VB,
      G: () => zB,
      J: () => lB,
      M: () => PB,
      N: () => AB,
      O: () => JB,
      Q: () => NB,
      R: () => kB,
      U: () => WB,
      V: () => qB,
      W: () => ZB,
      Y: () => pB,
      bb: () => mB,
      c: () => iB,
      eb: () => QB,
      f: () => gB,
      gb: () => SB,
      hb: () => LB,
      j: () => dB,
      l: () => oB,
      lb: () => UB,
      n: () => fB,
      q: () => nB,
      s: () => IB,
      t: () => FB,
      w: () => MB,
      x: () => yB
    });
    var YB = GB(8896),
      DB = GB(8878);
    const QB = {
        min: 25,
        max: 500,
        step: 5
      },
      oB = {
        min: 25,
        max: 100,
        step: 5
      },
      jB = {
        min: 0,
        max: .4,
        step: .01
      },
      yB = {
        min: 25,
        max: 300,
        step: 5
      },
      JB = {
        min: .5,
        max: 6,
        step: .1
      },
      MB = (BB, OB) => {
        if (!Number.isFinite(BB)) return OB.min;
        const GB = OB.min + Math.round((BB - OB.min) / OB.step) * OB.step,
          YB = Math.min(OB.max, Math.max(OB.min, GB));
        return Math.round(1e3 * YB) / 1e3
      },
      PB = BB => `${Math.round(BB)}%`,
      zB = BB => PB(100 * BB),
      lB = BB => `${BB.toFixed(1)}\xd7`,
      pB = [{
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
      qB = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      ZB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      NB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      RB = [{
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
      AB = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      VB = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      SB = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      nB = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      UB = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      fB = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      kB = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      dB = {
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
      KB = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      uB = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      mB = YB.d.map((BB => {
        let {
          group: OB,
          actions: GB
        } = BB;
        const YB = GB.map((BB => ({
          kind: "action",
          action: BB
        })));
        return {
          titleKey: KB[OB],
          rows: "gameplay" === OB ? [...uB, ...YB] : YB
        }
      })),
      IB = DB.db.filter((BB => "Home" !== BB)),
      FB = 1e4;
    class iB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = BB, this.openButton = OB, this.accepts = GB, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(BB, OB) {
        var GB;
        this.updateIgnored(BB, OB);
        const YB = OB - (null !== (GB = this.startMs) && void 0 !== GB ? GB : OB) >= 250;
        for (const DB of IB)
          if (DB !== this.cancelButton && YB && !this.ignoredUntilMs.has(DB) && BB.wasPressed(DB) && this.accepts(DB)) return {
            kind: "bind",
            button: DB
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (BB.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = OB
        }
        return null === this.cancelDownAtMs ? null : BB.isHeld(this.cancelButton) && OB - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : BB.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(BB) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (BB - this.cancelDownAtMs) / 700)
      }
      updateIgnored(BB, OB) {
        if (null === this.startMs) {
          this.startMs = OB;
          for (const OB of IB) BB.isDown(OB) && this.ignoredUntilMs.set(OB, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, OB + 250)
        }
        for (const [GB, YB] of this.ignoredUntilMs) {
          const DB = BB.isDown(GB);
          YB === 1 / 0 ? DB || GB !== this.openButton ? DB || this.ignoredUntilMs.delete(GB) : this.ignoredUntilMs.set(GB, OB + 250) : OB >= YB ? this.ignoredUntilMs.delete(GB) : DB && this.ignoredUntilMs.set(GB, 1 / 0)
        }
      }
    }
    const LB = 6e3;
    class gB {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(BB, OB) {
        let {
          pressed: GB,
          sJ: YB
        } = BB;
        if (GB) {
          const BB = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== BB && OB - BB < 1500 ? [...this.pressesAtMs, OB] : [OB], this.pressesAtMs.length >= 3) return 1
        }
        return YB ? (this.downAtMs ??= OB, Math.min(1, (OB - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  5515: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(56);
    const DB = new WeakMap,
      QB = BB => {
        var OB;
        const GB = BB.closest("[data-pad-slider]");
        return GB && null !== (OB = DB.get(GB)) && void 0 !== OB ? OB : null
      },
      oB = (BB, OB) => {
        const GB = (0, YB.useRef)(OB);
        GB.current = OB, (0, YB.useEffect)((() => {
          if (BB.current) return ((BB, OB) => (DB.set(BB, OB), () => {
            DB.get(BB) === OB && DB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              GB.current.adjust(BB)
            },
            setFraction: BB => {
              GB.current.setFraction(BB)
            },
            endDrag: () => {
              GB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  9478: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      f: () => oB,
      i: () => QB,
      m: () => YB,
      p: () => jB,
      q: () => JB,
      s: () => MB
    });
    const YB = "controllerActionWheelOpen",
      DB = "controllerActionWheelAim",
      QB = "controllerActionWheelCommit",
      oB = "controllerActionWheelClose",
      jB = "controllerActionWheelPick";
    let yB = !1;
    const JB = () => yB,
      MB = BB => {
        yB = BB
      }
  },
  9472: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => DB
    });
    let YB = 0;
    const DB = () => {
        YB++
      },
      QB = () => YB
  },
  9384: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      i: () => DB,
      k: () => oB,
      n: () => QB,
      r: () => YB,
      t: () => JB
    });
    const YB = "controllerQuickChatWheelOpen",
      DB = "controllerQuickChatWheelAim",
      QB = "controllerQuickChatWheelCommit",
      oB = "controllerQuickChatWheelClose";
    let jB = !1;
    const yB = () => jB,
      JB = BB => {
        jB = BB
      }
  },
  9397: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      g: () => DB
    });
    var YB = GB(25);
    const DB = "localBlockBroken";

    function QB() {
      return {
        onPlayerChangeBlock(BB, OB, GB, QB, oB, jB) {
          "Air" === jB && YB.o.tM(DB)
        }
      }
    }
  },
  9545: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      h: () => yB
    });
    var YB = GB(16),
      DB = GB(1350),
      QB = GB(92);
    const oB = {
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

    function jB() {
      return (0, QB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, OB) {
        var GB;
        if (!this.deps.enabled()) return;
        const YB = oB[BB],
          DB = null !== OB && void 0 !== OB ? OB : YB.pattern;
        if (null === DB) return void console.warn("No vibration pattern for", BB);
        const QB = this.deps.now();
        QB - this.lastAnyAt < 40 && YB.priority < this.playingPriority || QB - (null !== (GB = this.lastAt.get(BB)) && void 0 !== GB ? GB : -1 / 0) < YB.minGapMs || QB < this.playingUntil && YB.priority < this.playingPriority || (this.lastAt.set(BB, QB), this.lastAnyAt = QB, this.playingUntil = QB + DB.reduce(((BB, OB) => BB + OB), 0), this.playingPriority = YB.priority, this.deps.vibrate(DB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => jB() && YB.c.get("isTouchScreen") && YB.c.get("clientEscMenuOptions").vibration && !(0, DB.f)()
    })
  },
  9394: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(1255);

    function DB(BB, OB) {
      var GB, DB;
      try {
        const GB = (0, YB.c)();
        if ("function" === typeof GB) {
          const YB = new GB(BB, OB);
          if (YB.type === BB) return YB
        }
      } catch {}
      const QB = document.createEvent("Event");
      return QB.initEvent(BB, null !== (GB = null === OB || void 0 === OB ? void 0 : OB.bubbles) && void 0 !== GB && GB, null !== (DB = null === OB || void 0 === OB ? void 0 : OB.cancelable) && void 0 !== DB && DB), QB
    }
  },
  9439: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(9448),
      DB = GB(641),
      QB = GB(120);

    function oB(BB) {
      var OB, GB;
      if ((0, DB.Q)(BB)) return !0;
      const oB = null !== (OB = null === (GB = QB.siteUsedData[QB.siteUsed]) || void 0 === GB ? void 0 : GB.adConfig.showRewardedAds) && void 0 !== OB && OB;
      for (const DB in BB) {
        const OB = BB[DB];
        if (null !== OB && void 0 !== OB && OB.items)
          for (const BB in OB.items)
            if ((0, YB.h)(OB.items[BB], oB)) return !1
      }
      return !0
    }
  },
  9448: (BB, OB, GB) => {
    function YB(BB, OB) {
      return !BB.hidden && (OB || !BB.isRewardedAd)
    }

    function DB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function QB(BB, OB) {
      var GB;
      if ("dropdown" === (null === (GB = BB.userInput) || void 0 === GB ? void 0 : GB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const GB of BB.userInput.dropdownOptions)
          if (DB(GB) === OB) return "object" === typeof GB ? GB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", OB)
      }
      return BB.cost
    }

    function oB(BB, OB, GB) {
      var YB;
      const DB = null !== (YB = GB.excludedPlayers) && void 0 !== YB ? YB : [OB];
      return BB.filter((BB => !DB.includes(BB)))
    }
    GB.d(OB, {
      b: () => QB,
      f: () => DB,
      g: () => oB,
      h: () => YB
    })
  },
  9482: () => {},
  8943: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8947: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8955: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8960: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8965: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8967: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8970: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8972: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8975: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8978: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8981: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8985: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8991: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8998: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9002: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9009: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9017: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9021: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9023: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9031: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9034: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9036: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9042: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9045: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9052: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9061: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9066: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9071: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9077: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9081: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9088: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9090: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9095: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9097: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9105: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9107: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9116: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9120: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9122: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9127: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9131: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9135: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9137: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9143: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9151: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9160: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9165: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9174: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9180: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9189: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9196: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9199: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9202: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9207: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9211: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9216: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9222: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9227: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9234: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9241: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9247: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9256: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9259: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9261: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9265: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9269: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9274: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9279: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9287: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9294: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9299: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9306: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9309: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9311: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9320: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
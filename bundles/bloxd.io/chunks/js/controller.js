export const id = 28;
export const ids = [28];
export const modules = {
  8193: (BB, jB, zB) => {
    var QB = {
      "./nintendo/A.svg": 8200,
      "./nintendo/B.svg": 8209,
      "./nintendo/Down.svg": 8216,
      "./nintendo/Home.svg": 8225,
      "./nintendo/LB.svg": 8231,
      "./nintendo/LS.svg": 8238,
      "./nintendo/LT.svg": 8247,
      "./nintendo/Left.svg": 8250,
      "./nintendo/LeftStick.svg": 8252,
      "./nintendo/Menu.svg": 8260,
      "./nintendo/RB.svg": 8263,
      "./nintendo/RS.svg": 8266,
      "./nintendo/RT.svg": 8272,
      "./nintendo/Right.svg": 8277,
      "./nintendo/RightStick.svg": 8284,
      "./nintendo/Up.svg": 8287,
      "./nintendo/View.svg": 8290,
      "./nintendo/X.svg": 8298,
      "./nintendo/Y.svg": 8305,
      "./playstation/A.svg": 8314,
      "./playstation/B.svg": 8323,
      "./playstation/Down.svg": 8325,
      "./playstation/Home.svg": 8327,
      "./playstation/LB.svg": 8330,
      "./playstation/LS.svg": 8336,
      "./playstation/LT.svg": 8340,
      "./playstation/Left.svg": 8342,
      "./playstation/LeftStick.svg": 8349,
      "./playstation/Menu.svg": 8357,
      "./playstation/RB.svg": 8361,
      "./playstation/RS.svg": 8365,
      "./playstation/RT.svg": 8370,
      "./playstation/Right.svg": 8378,
      "./playstation/RightStick.svg": 8385,
      "./playstation/Up.svg": 8387,
      "./playstation/View.svg": 8396,
      "./playstation/X.svg": 8404,
      "./playstation/Y.svg": 8410,
      "./steamdeck/A.svg": 8417,
      "./steamdeck/B.svg": 8424,
      "./steamdeck/Down.svg": 8432,
      "./steamdeck/Home.svg": 8441,
      "./steamdeck/LB.svg": 8448,
      "./steamdeck/LS.svg": 8456,
      "./steamdeck/LT.svg": 8464,
      "./steamdeck/Left.svg": 8468,
      "./steamdeck/LeftStick.svg": 8472,
      "./steamdeck/Menu.svg": 8477,
      "./steamdeck/RB.svg": 8482,
      "./steamdeck/RS.svg": 8484,
      "./steamdeck/RT.svg": 8492,
      "./steamdeck/Right.svg": 8497,
      "./steamdeck/RightStick.svg": 8502,
      "./steamdeck/Up.svg": 8505,
      "./steamdeck/View.svg": 8507,
      "./steamdeck/X.svg": 8512,
      "./steamdeck/Y.svg": 8520,
      "./xbox/A.svg": 8525,
      "./xbox/B.svg": 8533,
      "./xbox/Down.svg": 8540,
      "./xbox/Home.svg": 8549,
      "./xbox/LB.svg": 8558,
      "./xbox/LS.svg": 8564,
      "./xbox/LT.svg": 8570,
      "./xbox/Left.svg": 8578,
      "./xbox/LeftStick.svg": 8580,
      "./xbox/Menu.svg": 8582,
      "./xbox/RB.svg": 8591,
      "./xbox/RS.svg": 8599,
      "./xbox/RT.svg": 8601,
      "./xbox/Right.svg": 8604,
      "./xbox/RightStick.svg": 8612,
      "./xbox/Up.svg": 8616,
      "./xbox/View.svg": 8625,
      "./xbox/X.svg": 8632,
      "./xbox/Y.svg": 8639
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 8193
  },
  8776: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => DB,
      h: () => qB,
      l: () => fB
    });
    var QB = zB(62),
      nB = zB(4664),
      dB = zB(1169),
      IB = zB(1471),
      NB = zB(31),
      uB = zB(3536),
      UB = zB(2304),
      aB = zB(1270),
      pB = zB(2667),
      rB = zB(1982),
      sB = zB(2025),
      JB = zB(1240),
      mB = zB(28),
      yB = zB(1664),
      kB = zB(1091),
      GB = zB.n(kB),
      LB = zB(8785),
      gB = zB(8792),
      tB = zB(8795),
      SB = zB(8718),
      MB = zB(8798),
      EB = (zB(8805), zB(1148));
    let iB = null;

    function qB() {
      return null !== iB
    }

    function fB() {
      return "pad" === iB
    }

    function oB() {
      return "inGame" === mB.c.get("gameState") && !(0, yB.m)()
    }

    function HB(BB) {
      return (0, gB.o)(BB, aB.n, gB.c, gB.d, gB.f)
    }
    const DB = (0, QB.memo)((function() {
      const {
        t: BB
      } = (0, JB.D)(), {
        userContext: jB
      } = (0, dB.d)(), [zB, mB] = (0, QB.useState)(null), [kB, qB] = (0, QB.useState)(null), fB = (0, QB.useRef)(null), DB = (0, QB.useCallback)((BB => {
        fB.current = BB, qB(BB)
      }), []), FB = (0, QB.useRef)(0), YB = (0, QB.useRef)(null), VB = (0, QB.useRef)({
        x: 0,
        y: 0
      }), [hB, XB] = (0, QB.useState)(0), ZB = (0, QB.useMemo)((() => function(BB) {
        const jB = [];
        for (let QB = 0; QB < aB.n; QB++) {
          var zB;
          jB.push(null !== (zB = BB[QB]) && void 0 !== zB ? zB : null)
        }
        return jB
      }((0, pB.j)(jB.getPlayerCosmetics().emote))), [jB, hB]);
      (0, sB.d)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.Wd)) && XB((BB => BB + 1))
      }));
      const AB = (0, QB.useRef)(!1),
        TB = (0, QB.useCallback)((function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, tB.f)(), AB.current = jB, VB.current = {
            x: 0,
            y: 0
          }, DB(null), mB(BB)
        }), [DB]),
        PB = (0, QB.useCallback)((() => {
          mB(null), DB(null), VB.current = {
            x: 0,
            y: 0
          }
        }), [DB]),
        WB = (0, QB.useCallback)((BB => {
          if (Date.now() < FB.current) return;
          const jB = (0, UB.f)(BB),
            zB = !!jB.holdUntilMove,
            QB = zB ? 600 : Math.ceil(1e3 * jB.animation.animation_length / UB.b) + 200;
          FB.current = Date.now() + QB, YB.current = BB, rB.gameBridge.send("playEmote", BB), rB.gameBridge.send("applyTemporaryThirdPerson", zB ? {} : {
            durationMs: QB
          })
        }), []);
      (0, IB.f)("requestToggleEmoteWheel", (() => {
        null === zB ? oB() && TB("click") : PB()
      })), (0, IB.f)("requestEmoteWheelHoldOpen", (() => {
        null === zB && oB() && TB((0, LB.d)() ? "hold" : "click")
      })), (0, IB.f)("requestEmoteWheelPadOpen", (BB => {
        null !== zB || !oB() || (0, SB.d)() || (0, MB.j)() || TB("pad", BB)
      })), (0, IB.f)("requestEmoteRepeatLast", (() => {
        if (null !== zB || !oB() || (0, SB.d)() || (0, MB.j)()) return;
        const BB = YB.current;
        null !== BB && ZB.includes(BB) ? WB(BB) : TB("pad", !0)
      }));
      const eB = () => {
        const BB = fB.current,
          jB = null !== BB ? ZB[BB] : null;
        null !== jB && "pad" === zB && Date.now() < FB.current || (PB(), null !== jB && WB(jB))
      };
      (0, IB.f)("emoteWheelPadAim", (BB => {
        if ("pad" !== zB) return;
        const jB = (0, gB.x)(BB, aB.n, fB.current);
        DB(null !== jB && null !== ZB[jB] ? jB : null)
      })), (0, IB.f)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== zB || BB && AB.current || eB()
      })), (0, IB.f)("appManagerUpdated|activeInputDevice", (BB => {
        null !== zB && "pad" === zB !== ("gamepad" === BB) && PB()
      })), (0, QB.useLayoutEffect)((() => (iB = zB, (0, uB.v)("emoteWheel", "pad" === zB), NB.n.Ly(uB.p), () => {
        iB = null, (0, uB.v)("emoteWheel", !1), NB.n.Ly(uB.p)
      })), [zB]), (0, IB.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === zB && eB()
      })), (0, IB.f)("requestEmoteWheelClose", (() => {
        null !== zB && PB()
      })), (0, IB.f)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && PB()
      }));
      const lB = () => {
        (0, yB.m)() && PB()
      };
      if ((0, IB.f)("appManagerUpdated|openEverythingMenuName", lB), (0, IB.f)("appManagerUpdated|openInGameMenuName", lB), (0, IB.f)("pointerLockUpdate", (BB => {
          BB || "hold" !== zB || PB()
        })), (0, QB.useEffect)((() => {
          if (null === zB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), PB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [zB, PB]), (0, nB.c)(!0, "click" === zB, "EmoteWheelOverlay"), (0, QB.useEffect)((() => {
          if ("hold" === zB) return rB.gameBridge.send("holdEmoteWheel", !0), () => {
            rB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [zB]), (0, QB.useEffect)((() => {
          if ("hold" !== zB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            jB = gB.n * BB,
            QB = gB.l * BB,
            nB = BB => {
              let zB = VB.current.x + BB.movementX,
                nB = VB.current.y + BB.movementY;
              const dB = Math.hypot(zB, nB);
              if (dB > jB) {
                const BB = jB / dB;
                zB *= BB, nB *= BB
              }
              VB.current = {
                x: zB,
                y: nB
              }, DB(function(BB, jB, zB, QB) {
                if (Math.hypot(BB, jB) < zB) return null;
                const nB = (0, gB.s)(BB, jB, aB.n);
                return null === QB[nB] ? null : nB
              }(zB, nB, QB, ZB))
            };
          return document.addEventListener("mousemove", nB), () => {
            document.removeEventListener("mousemove", nB)
          }
        }), [zB, ZB, DB]), null === zB) return null;
      const wB = "hold" === zB || "pad" === zB,
        xB = null !== kB ? ZB[kB] : null,
        KB = null !== xB ? (0, UB.f)(xB).displayName : BB("emotes:pickEmote");
      return (0, EB.jsx)("div", {
        className: GB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === zB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && PB()
        },
        children: (0, EB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * gB.n + "rem",
            height: 2 * gB.n + "rem"
          },
          children: [(0, EB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${gB.i} ${gB.i}`,
            children: [ZB.map(((jB, zB) => {
              const QB = null !== jB,
                nB = wB && zB === kB;
              return (0, EB.jsx)("path", {
                d: HB(zB),
                className: GB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: nB,
                  EmoteWheelWedgeDisabled: !QB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== jB && (BB => {
                    PB(), WB(BB)
                  })(jB)
                },
                "aria-label": null !== jB ? (0, UB.f)(jB).displayName : BB("emotes:emptySlot")
              }, zB)
            })), (0, EB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: gB.c,
              cy: gB.c,
              r: gB.f
            }), (0, EB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: gB.c,
              cy: gB.c,
              r: gB.d
            }), wB && null !== kB && (0, EB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: HB(kB)
            })]
          }), ZB.map(((BB, jB) => {
            const zB = null !== BB,
              QB = wB && jB === kB,
              nB = (0, gB.t)(jB, aB.n),
              dB = gB.b * Math.cos(nB),
              IB = gB.b * Math.sin(nB);
            return (0, EB.jsx)("div", {
              className: GB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: QB,
                EmoteWheelSlotIconDisabled: !zB
              }),
              style: {
                left: `calc(50% + ${dB}rem)`,
                top: `calc(50% + ${IB}rem)`,
                backgroundImage: zB ? `url(/textures/charSkins/previews/emote_${BB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, jB)
          })), (0, EB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: KB
          })]
        })
      })
    }))
  },
  8910: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => kB,
      d: () => gB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(2585),
      IB = zB(3517);
    const NB = 6,
      uB = 4;

    function UB(BB) {
      let {
        slotsLeft: jB,
        slotsRight: zB,
        width: QB,
        height: nB,
        zoneRight: dB,
        rowTop: IB,
        besideBottom: UB,
        obstacles: aB
      } = BB;
      const pB = Math.max(0, Math.floor(zB - jB - QB)),
        rB = null === dB ? 0 : Math.min(pB, Math.max(0, Math.ceil(dB + NB - jB))),
        sB = jB + rB - NB,
        JB = jB + rB + QB + NB,
        mB = aB.filter((BB => BB.left < JB && BB.right > sB));
      let yB = UB;
      for (let NB = 0; NB <= mB.length; NB++) {
        const BB = mB.filter((BB => BB.top < yB + uB && BB.bottom > yB - nB - uB));
        if (0 === BB.length) break;
        yB = Math.min(...BB.map((BB => BB.top))) - uB
      }
      return {
        shift: rB,
        rise: yB === UB ? null : Math.ceil(IB - yB)
      }
    }

    function aB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function pB(BB) {
      return function(BB) {
        const jB = [],
          zB = (BB, QB) => {
            const nB = BB.getBoundingClientRect();
            if (nB.width > 0 && nB.height > 0) jB.push(BB);
            else if (QB < 2)
              for (const jB of Array.from(BB.children)) zB(jB, QB + 1)
          };
        for (const QB of BB) zB(QB, 0);
        return jB
      }(aB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function rB(BB) {
      var jB;
      const zB = BB.getBoundingClientRect();
      if (0 === zB.width) return null;
      const QB = null === (jB = BB.parentElement) || void 0 === jB ? void 0 : jB.getBoundingClientRect();
      return QB && QB.width > 0 ? Math.min(zB.right, QB.left + QB.width * sB) : zB.right
    }
    const sB = .35,
      JB = new WeakMap,
      mB = ".BottomScreenMessage, [role='status']",
      yB = new WeakMap;

    function kB(BB) {
      GB(BB) && GB(BB)
    }

    function GB(BB) {
      var jB, zB, QB, nB, dB, IB;
      const NB = BB.documentElement.classList;
      if (!NB.contains("TouchHotbar") || NB.contains("TouchHotbarKeysAbove") || NB.contains("HudMove-inventory") || NB.contains("HudLocked-inventory") || null === (jB = BB.defaultView) || void 0 === jB || null === (zB = jB.matchMedia) || void 0 === zB || !zB.call(jB, LB).matches) return !1;
      const aB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        sB = null === aB || void 0 === aB ? void 0 : aB.parentElement,
        kB = null === aB || void 0 === aB ? void 0 : aB.closest(".BottomMiddleElements"),
        GB = null === kB || void 0 === kB ? void 0 : kB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!aB || !sB || !kB || !GB || kB.classList.contains("TouchInventoryOpen")) return !1;
      const gB = aB.getBoundingClientRect();
      if (0 === gB.width) return !1;
      const tB = BB.querySelector(".JoystickZone"),
        SB = GB.getBoundingClientRect(),
        MB = sB.getBoundingClientRect().top,
        EB = null === (QB = kB.querySelector(":scope > .AuraBarWrapper")) || void 0 === QB ? void 0 : QB.getBoundingClientRect(),
        iB = pB(kB),
        qB = {
          slotsLeft: SB.left,
          slotsRight: SB.right,
          width: gB.width,
          height: gB.height,
          zoneRight: tB ? rB(tB) : null,
          rowTop: MB,
          besideBottom: (EB && EB.height > 0 ? EB.top : MB) - uB,
          obstacles: iB.map((BB => BB.getBoundingClientRect()))
        },
        fB = UB({
          ...qB,
          obstacles: iB.filter((BB => !BB.matches(mB))).map((BB => BB.getBoundingClientRect()))
        }),
        oB = BB.defaultView,
        HB = `${null===oB||void 0===oB?void 0:oB.innerWidth}x${null===oB||void 0===oB?void 0:oB.innerHeight}:${fB.shift}:${Math.round(gB.width)}:${Math.round(MB)}`,
        DB = yB.get(kB),
        FB = (null === DB || void 0 === DB ? void 0 : DB.at) === HB ? (YB = DB.rise, VB = fB.rise, null === YB ? VB : null === VB ? YB : Math.max(YB, VB)) : fB.rise;
      var YB, VB;
      const hB = UB({
          ...qB,
          besideBottom: null === FB ? qB.besideBottom : MB - FB
        }),
        XB = {
          shift: fB.shift,
          rise: null !== (nB = hB.rise) && void 0 !== nB ? nB : FB
        },
        ZB = JB.get(kB);
      return (null !== (dB = null === ZB || void 0 === ZB ? void 0 : ZB.shift) && void 0 !== dB ? dB : 0) === XB.shift && yB.set(kB, {
        at: HB,
        rise: FB
      }), (null === ZB || void 0 === ZB ? void 0 : ZB.shift) !== XB.shift && kB.style.setProperty("--touch-shop-above-shift", `${XB.shift}px`), (null === ZB || void 0 === ZB ? void 0 : ZB.rise) !== XB.rise && (kB.classList.toggle("ShopAboveUp", null !== XB.rise), null === XB.rise ? kB.style.removeProperty("--touch-shop-above-rise") : kB.style.setProperty("--touch-shop-above-rise", `${XB.rise}px`)), JB.set(kB, XB), (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.shift) && void 0 !== IB ? IB : 0) !== XB.shift
    }
    const LB = "(orientation: landscape) and (max-height: 500px)";

    function gB(BB, jB, zB) {
      (0, QB.useLayoutEffect)((() => {
        var jB;
        const QB = null === (jB = BB.current) || void 0 === jB ? void 0 : jB.closest(".BottomMiddleElements");
        if (!QB || zB) return;
        const NB = new ResizeObserver((() => {
            sB(!1)
          })),
          uB = () => {
            NB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const jB of [BB, QB, QB.querySelector(".HotBarGameItemsContainer"), ...pB(QB)]) jB && NB.observe(jB)
          };
        let UB = null,
          rB = !1;
        const sB = BB => {
            rB ||= BB, UB ??= requestAnimationFrame((() => {
              UB = null, rB && (rB = !1, uB()), kB(document)
            }))
          },
          JB = new MutationObserver((() => {
            sB(!0)
          }));
        JB.observe(QB, {
          childList: !0
        });
        for (const BB of aB(QB)) JB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        kB(document), uB();
        const mB = () => {
            sB(!0)
          },
          yB = [(0, nB.q)(dB.f, mB), (0, nB.q)(IB.b, mB)];
        return () => {
          null !== UB && cancelAnimationFrame(UB), NB.disconnect(), JB.disconnect();
          for (const BB of yB) BB()
        }
      }), [BB, jB, zB])
    }
  },
  5078: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => JB,
      c: () => LB,
      f: () => mB,
      i: () => GB
    });
    var QB = zB(62),
      nB = zB(5081),
      dB = zB(4478),
      IB = zB(1388),
      NB = zB(5097),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1381),
      pB = zB(1778),
      rB = zB(5101),
      sB = zB(1148);

    function JB(BB) {
      let {
        label: jB,
        onClick: zB,
        checked: QB,
        circleInfoText: nB,
        className: NB,
        disabled: uB,
        note: aB
      } = BB;
      return (0, sB.jsxs)("div", {
        "aria-disabled": uB || void 0,
        "data-pad-focusable": !0,
        className: UB()("SettingBox CheckboxContainer", {
          [NB]: NB,
          SettingBoxDisabled: uB
        }),
        onClick: () => {
          uB || zB(!QB)
        },
        children: [(0, sB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, sB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, sB.jsx)(dB.e, {
              className: "SettingsCheckbox",
              checked: QB,
              disabled: uB,
              onChange: () => {}
            })
          }), (0, sB.jsxs)("div", {
            className: "CheckboxText",
            children: [jB, nB && (0, sB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, sB.jsx)(IB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nB
              })
            })]
          })]
        }), aB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: aB
        })]
      })
    }

    function mB(BB) {
      let {
        name: jB,
        onChange: zB,
        min: nB,
        max: dB,
        step: NB,
        initValue: uB,
        circleInfoText: aB,
        format: pB,
        className: rB,
        padStep: JB,
        disabled: mB = !1,
        selectableMax: yB,
        cappedNote: GB,
        onChangeComplete: LB
      } = BB;
      const [gB, tB] = (0, QB.useState)(uB), SB = (0, QB.useRef)(uB);
      (0, QB.useEffect)((() => {
        SB.current = uB, tB(uB)
      }), [uB]);
      const MB = void 0 !== yB && yB < dB,
        EB = MB ? {
          "--slider-selectable": (yB - nB) / (dB - nB)
        } : void 0;
      return (0, sB.jsxs)("div", {
        className: UB()("SettingBox SettingsSliderDiv", {
          [rB]: rB,
          SettingBoxDisabled: mB,
          SliderCapped: MB
        }),
        style: EB,
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [`${jB}: ${pB?pB(gB):gB}`, aB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: aB
          })]
        }), (0, sB.jsx)("div", {
          className: "SliderDiv",
          children: (0, sB.jsx)(kB, {
            value: gB,
            min: nB,
            max: dB,
            step: NB,
            onChange: BB => {
              if (MB && BB >= yB && gB === yB) return;
              const jB = MB ? Math.min(BB, yB) : BB;
              SB.current = jB, tB(jB), zB(jB)
            },
            onChangeComplete: LB && (() => {
              LB(SB.current)
            }),
            format: pB,
            padStep: JB,
            disabled: mB
          })
        }), MB && GB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: GB
        })]
      })
    }
    const yB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function kB(BB) {
      var jB;
      let {
        value: zB,
        min: dB,
        max: IB,
        step: NB,
        onChange: uB,
        orientation: UB,
        reverse: aB,
        setIsChanging: pB,
        tooltip: JB,
        labels: mB,
        handleLabel: kB,
        format: GB,
        onChangeStart: LB,
        onChangeComplete: gB,
        padStep: tB,
        disabled: SB = !1
      } = BB;
      const MB = (0, QB.useRef)(null),
        EB = (0, QB.useRef)(null);
      (0, QB.useLayoutEffect)((() => {
        var BB, jB, zB;
        const QB = null !== (BB = null === (jB = MB.current) || void 0 === jB ? void 0 : jB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === QB || void 0 === QB || QB.setAttribute("data-pad-slider", ""), null === QB || void 0 === QB || QB.setAttribute("data-pad-focusable", ""), null === QB || void 0 === QB || null === (zB = QB.querySelector(".rangeslider__handle")) || void 0 === zB || zB.setAttribute("data-pad-slider-handle", ""), EB.current = QB
      }), []), (0, QB.useLayoutEffect)((() => {
        var BB, jB;
        SB ? null === (BB = EB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (jB = EB.current) || void 0 === jB || jB.removeAttribute("aria-disabled")
      }), [SB]);
      const iB = (null !== (jB = String(NB).split(".")[1]) && void 0 !== jB ? jB : "").length,
        qB = BB => {
          const jB = Number((Math.round((BB - dB) / NB) * NB + dB).toFixed(iB));
          return Math.min(IB, Math.max(dB, jB))
        },
        fB = (0, QB.useRef)(gB);
      fB.current = gB, (0, QB.useEffect)((() => {
        const BB = MB.current;
        if (!BB) return;
        const jB = BB => {
          var jB;
          yB.has(BB.key) && (null === (jB = fB.current) || void 0 === jB || jB.call(fB))
        };
        return BB.addEventListener("keyup", jB), () => {
          BB.removeEventListener("keyup", jB)
        }
      }), []);
      const oB = (0, QB.useRef)(!1);
      return (0, rB.e)(EB, {
        adjust: BB => {
          if (SB) return;
          const jB = null !== tB && void 0 !== tB ? tB : Math.max(NB, Math.round((IB - dB) / 20 / NB) * NB),
            QB = qB(zB + BB * jB * (aB ? -1 : 1));
          QB !== zB && (null === LB || void 0 === LB || LB(), uB(QB), null === gB || void 0 === gB || gB())
        },
        setFraction: BB => {
          if (SB) return;
          const jB = qB(dB + (aB ? 1 - BB : BB) * (IB - dB));
          jB !== zB && (oB.current || (oB.current = !0, null === LB || void 0 === LB || LB()), uB(jB))
        },
        endDrag: () => {
          oB.current && (oB.current = !1, null === gB || void 0 === gB || gB())
        }
      }), (0, sB.jsx)("div", {
        ref: MB,
        style: {
          display: "contents"
        },
        children: (0, sB.jsx)(nB.c, {
          value: zB,
          min: dB,
          max: IB,
          step: NB,
          onChange: uB,
          orientation: UB,
          reverse: aB,
          tooltip: JB,
          labels: mB,
          handleLabel: kB,
          format: GB,
          onChangeStart: () => {
            null === LB || void 0 === LB || LB(), null === pB || void 0 === pB || pB(!0)
          },
          onChangeComplete: () => {
            null === pB || void 0 === pB || pB(!1), null === gB || void 0 === gB || gB()
          }
        })
      })
    }
    async function GB() {
      const BB = aB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, pB.reloadBloxd)()
    }

    function LB(BB) {
      let {
        label: jB,
        options: zB,
        value: QB,
        onChange: nB,
        circleInfoText: dB
      } = BB;
      return (0, sB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [jB, dB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: dB
          })]
        }), (0, sB.jsx)(NB.e, {
          ariaLabel: jB,
          options: zB,
          value: QB,
          onChange: nB
        })]
      })
    }
  },
  5097: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1148);

    function IB(BB) {
      let {
        options: jB,
        value: zB,
        onChange: QB,
        ariaLabel: IB,
        className: NB,
        reselectable: uB = !1,
        keepsFocus: UB = !1,
        padTabs: aB
      } = BB;
      const pB = void 0 !== aB;
      return (0, dB.jsx)("div", {
        className: nB()("SegmentedToggle", NB),
        role: "group",
        "aria-label": IB,
        "data-pad-tabs": aB,
        children: jB.map((BB => {
          const jB = BB.value === zB;
          return (0, dB.jsx)("button", {
            type: "button",
            "aria-pressed": jB,
            "data-pad-tab": pB || void 0,
            "data-pad-selected": pB && jB ? "true" : void 0,
            "data-pad-default-focus": pB && jB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: nB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: jB
            }),
            onMouseDown: UB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              jB && !uB || QB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  8740: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => dB
    });
    var QB = zB(2046);
    const nB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      dB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && nB.test(BB.keycode),
      IB = BB => "Space" === BB ? "_" : QB.e[BB]
  },
  8785: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(28);

    function nB() {
      return !QB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8901: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => rB,
      C: () => UB,
      G: () => JB,
      H: () => dB,
      d: () => nB,
      e: () => NB,
      h: () => QB,
      j: () => mB,
      l: () => sB,
      p: () => aB,
      t: () => IB,
      u: () => yB,
      x: () => pB,
      y: () => uB
    });
    const QB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function nB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function dB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, jB) => ({
        left: Math.min(BB.left, jB.left),
        top: Math.min(BB.top, jB.top),
        right: Math.max(BB.right, jB.right),
        bottom: Math.max(BB.bottom, jB.bottom)
      })))
    }

    function IB(BB, jB) {
      const zB = Math.max(0, (jB - (BB.right - BB.left)) / 2),
        QB = Math.max(0, (jB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - zB,
        top: BB.top - QB,
        right: BB.right + zB,
        bottom: BB.bottom + QB
      }
    }

    function NB(BB, jB) {
      return jB.x >= BB.left && jB.x <= BB.right && jB.y >= BB.top && jB.y <= BB.bottom
    }

    function uB(BB, jB, zB) {
      let QB = null,
        dB = 1 / 0;
      for (const {
          id: nB,
          box: IB
        }
        of jB) {
        const jB = (IB.right - IB.left) * (IB.bottom - IB.top);
        NB(IB, BB) && jB < dB && (dB = jB, QB = nB)
      }
      if (null !== QB) return QB;
      let uB = 1 / 0;
      for (const {
          id: UB,
          box: aB
        }
        of jB) {
        if (!NB(IB(aB, zB), BB)) continue;
        const jB = nB(aB),
          dB = Math.hypot(BB.x - jB.x, BB.y - jB.y);
        dB < uB && (uB = dB, QB = UB)
      }
      return QB
    }

    function UB(BB, jB, zB) {
      return {
        left: zB.left,
        top: zB.top,
        right: BB - zB.right,
        bottom: jB - zB.bottom
      }
    }

    function aB(BB, jB, zB, QB) {
      const nB = (BB, jB, zB) => Math.max(Math.min(jB, 0), Math.min(Math.max(zB, 0), BB));
      return {
        x: nB(jB, QB.left - BB.left, QB.right - BB.right),
        y: nB(zB, QB.top - BB.top, QB.bottom - BB.bottom)
      }
    }

    function pB(BB, jB, zB, QB, nB) {
      const dB = BB.dx * QB + jB,
        IB = BB.dy * nB + zB,
        NB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: NB(dB / QB),
        dy: NB(IB / nB)
      }
    }

    function rB(BB, jB, zB, QB) {
      return jB <= 0 || zB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / jB, QB / zB))
    }

    function sB(BB, jB, zB) {
      return Math.min(BB.right, jB.right) - Math.max(BB.left, jB.left) > zB && Math.min(BB.bottom, jB.bottom) - Math.max(BB.top, jB.top) > zB
    }

    function JB(BB, jB) {
      const zB = (BB, jB, zB, QB) => jB - BB > QB - zB ? zB - BB > jB - QB ? QB - jB : zB - BB : BB < zB ? zB - BB : jB > QB ? QB - jB : 0;
      return {
        x: zB(BB.left, BB.right, jB.left, jB.right),
        y: zB(BB.top, BB.bottom, jB.top, jB.bottom)
      }
    }

    function mB(BB, jB, zB) {
      return sB(BB, {
        left: 0,
        top: 0,
        right: jB,
        bottom: zB
      }, 0)
    }

    function yB(BB, jB) {
      let {
        avoid: zB = null,
        bounds: QB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, nB = 0, dB = 1 / 0;
      return BB.forEach(((BB, IB) => {
        const NB = jB.filter((jB => sB(BB, jB, 0))).length,
          uB = null !== QB && (BB.left < QB.left || BB.top < QB.top || BB.right > QB.right || BB.bottom > QB.bottom),
          UB = NB + (zB && sB(BB, zB, 0) ? 1e3 : 0) + (uB ? 1e6 : 0);
        UB < dB && (nB = IB, dB = UB)
      })), nB
    }
  },
  8907: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      e: () => dB,
      f: () => nB,
      j: () => IB,
      l: () => pB,
      m: () => aB,
      n: () => UB,
      p: () => uB
    });
    var QB = zB(2559);
    const nB = ["J", "C", "A", "P", "U", "X", "G"],
      dB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function IB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const NB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: QB.F,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function uB(BB, jB, zB) {
      const QB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!QB) return NB;
      const dB = {},
        IB = {};
      for (const NB of nB) {
        const BB = QB.querySelector(`.TouchSlot${NB} > .TouchKey`);
        if (BB) {
          var uB, UB;
          dB[NB] = BB.cloneNode(!0);
          const jB = (null !== (uB = null === (UB = BB.querySelector(".TouchKeyLabel")) || void 0 === UB ? void 0 : UB.textContent) && void 0 !== uB ? uB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          jB && (IB[NB] = jB)
        }
      }
      const aB = jB => {
          const zB = BB.querySelector(`.InGameUi ${jB}`);
          return null !== zB && !zB.classList.contains("Hidden")
        },
        pB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(dB).length > 0 ? dB : null,
        names: IB,
        shop: aB(".TouchInventoryKey.ShopKey"),
        bag: aB(".TouchInventoryKey.BagKey"),
        sprint: aB(".TouchSprintHit"),
        items: pB.length > 0 ? pB : null,
        rowIcons: jB,
        pinnedIcons: zB
      }
    }

    function UB(BB, jB) {
      const zB = {};
      for (const QB of [...IB(jB), "G"]) {
        const jB = BB.names[QB];
        jB && (zB[dB[QB]] = jB)
      }
      return zB
    }

    function aB(BB, jB) {
      const {
        faces: zB
      } = BB;
      if (null === zB) return [];
      const QB = new Set(Object.keys(zB).map((BB => dB[BB])));
      return IB(jB).filter((BB => !QB.has(dB[BB])))
    }

    function pB(BB, jB) {
      BB.replaceChildren(...[...jB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  8792: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      c: () => NB,
      d: () => UB,
      f: () => uB,
      i: () => IB,
      l: () => nB,
      n: () => QB,
      o: () => JB,
      s: () => pB,
      t: () => aB,
      w: () => rB,
      x: () => sB
    });
    const QB = 14,
      nB = 6,
      dB = (QB + nB) / 2,
      IB = 200,
      NB = IB / 2,
      uB = IB / 2 - 1,
      UB = nB / QB * (IB / 2),
      aB = (BB, jB) => -Math.PI / 2 + 2 * BB * Math.PI / jB,
      pB = (BB, jB, zB) => {
        const QB = 2 * Math.PI / zB;
        return (Math.round((Math.atan2(jB, BB) + Math.PI / 2) / QB) % zB + zB) % zB
      },
      rB = .5,
      sB = (BB, jB, zB) => Math.hypot(BB.x, BB.y) < rB ? zB : pB(BB.x, BB.y, jB),
      JB = (BB, jB, zB, QB, nB) => {
        const dB = Math.PI / jB,
          IB = aB(BB, jB),
          NB = IB - dB,
          uB = IB + dB,
          UB = (BB, jB) => `${zB+BB*Math.cos(jB)} ${zB+BB*Math.sin(jB)}`;
        return [`M ${UB(QB,NB)}`, `L ${UB(nB,NB)}`, `A ${nB} ${nB} 0 0 1 ${UB(nB,uB)}`, `L ${UB(QB,uB)}`, `A ${QB} ${QB} 0 0 0 ${UB(QB,NB)}`, "Z"].join(" ")
      }
  },
  8830: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(62),
      nB = zB(8769),
      dB = zB(2516);

    function IB() {
      const BB = (0, dB.i)("shopInfo"),
        [, jB] = (0, QB.useReducer)((BB => BB + 1), 0);
      return (0, dB.h)("shopInfo", jB), !(0, nB.b)(BB)
    }
  },
  8150: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB,
      m: () => rB,
      p: () => pB,
      q: () => UB,
      s: () => NB,
      u: () => QB,
      w: () => sB,
      y: () => JB
    });
    const QB = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      nB = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: QB
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      dB = {
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
      IB = ["pickBlock", "perspective"],
      NB = BB => IB.includes(BB) ? IB : [BB],
      uB = Object.fromEntries(nB.flatMap((BB => {
        let {
          group: jB,
          actions: zB
        } = BB;
        return zB.map((BB => [BB, jB]))
      }))),
      UB = BB => uB[BB],
      aB = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      pB = BB => {
        var jB;
        return [UB(BB), ...null !== (jB = aB[BB]) && void 0 !== jB ? jB : []]
      },
      rB = new Set(["menu", "inventory", "keyboard"]),
      sB = {
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
      JB = new Set(["forward", "backward", "left", "right"])
  },
  8145: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => DB,
      C: () => EB,
      F: () => LB,
      G: () => qB,
      I: () => aB,
      K: () => iB,
      O: () => HB,
      c: () => GB,
      f: () => tB,
      h: () => rB,
      l: () => sB,
      o: () => FB,
      s: () => oB,
      u: () => fB,
      w: () => gB
    });
    var QB = zB(8150),
      nB = zB(8155),
      dB = zB(8131),
      IB = zB(8165);
    const NB = BB => "pickBlock" === BB ? "perspective" : BB,
      uB = (BB, jB) => {
        var zB;
        const nB = NB(jB);
        return null !== (zB = BB[nB]) && void 0 !== zB ? zB : QB.i[nB]
      },
      UB = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((BB => {
        let [jB, zB] = BB;
        return [
          [jB, zB],
          [zB, jB]
        ]
      }))),
      aB = (BB, jB) => null !== BB && void 0 !== BB ? BB : "nintendo" === jB,
      pB = BB => aB((0, nB.j)().swapConfirmBack, (0, nB.m)()) && UB.get(BB) || BB,
      rB = BB => uB((0, nB.j)().bindings, pB(BB)),
      sB = BB => QB.i[pB(BB)],
      JB = Object.keys(QB.i),
      mB = BB => "gameplay" === (0, QB.q)(BB) ? ["gameplay"] : (0, QB.p)(BB),
      yB = (BB, jB) => {
        const zB = mB(jB);
        return mB(BB).some((BB => zB.includes(BB)))
      },
      kB = (BB, jB, zB) => {
        const nB = uB(BB, jB),
          IB = new Set((0, QB.s)(jB)),
          UB = [...IB];
        for (let QB = UB.pop(); QB; QB = UB.pop())
          for (const jB of JB) {
            const dB = uB(BB, jB);
            IB.has(jB) || dB !== zB && dB !== nB || !yB(QB, jB) || (IB.add(jB), UB.push(jB))
          }
        const aB = {
          ...BB
        };
        for (const pB of IB) {
          const jB = uB(BB, pB) === nB ? zB : nB,
            IB = (0, QB.p)(pB).some((BB => QB.m.has(BB)));
          if ((0, dB.O)(jB) && IB) return null;
          aB[NB(pB)] = jB
        }
        for (const dB of Object.keys(aB)) aB[dB] === QB.i[dB] && delete aB[dB];
        return aB
      },
      GB = (BB, jB) => null !== kB((0, nB.j)().bindings, pB(BB), jB),
      LB = (BB, jB) => {
        if (rB(BB) === jB) return !0;
        const zB = kB((0, nB.j)().bindings, pB(BB), jB);
        return !!zB && ((0, nB.o)({
          bindings: zB
        }), !0)
      },
      gB = (BB, jB) => {
        const zB = (0, QB.s)(jB);
        return JB.filter((jB => NB(jB) === jB && !zB.includes(jB) && uB(BB, pB(jB)) !== rB(jB)))
      },
      tB = ["southpaw", "triggersSwapped"],
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
      MB = BB => Object.keys(SB[BB]),
      EB = (BB, jB) => "southpaw" === BB ? jB.swapSticks : MB(BB).every((zB => uB(jB.bindings, zB) === SB[BB][zB])),
      iB = (BB, jB) => {
        const zB = (0, nB.j)();
        let dB = zB.bindings;
        for (const nB of MB(BB)) {
          const zB = jB ? SB[BB][nB] : QB.i[nB];
          if (dB = kB(dB, nB, zB), !dB) return !1
        }
        return (0, nB.o)({
          swapSticks: "southpaw" === BB ? jB : zB.swapSticks,
          bindings: dB
        }), !0
      },
      qB = () => {
        (0, nB.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      fB = () => (0, nB.j)().swapSticks ? "RightStick" : "LeftStick",
      oB = () => (0, nB.j)().swapSticks ? "LeftStick" : "RightStick",
      HB = BB => (0, nB.j)().swapSticks && (0, dB.O)(BB),
      DB = BB => HB(BB) ? fB() : oB(),
      FB = BB => {
        if (QB.y.has(BB)) return fB();
        const jB = QB.w[BB];
        return jB && ("leaderboard" !== jB || (0, IB.g)(BB, (0, IB.c)())) ? rB(jB) : null
      }
  },
  8117: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ControllerCategory: () => EN,
      ControllerGlyph: () => Sn,
      ControllerRoot: () => EI,
      PadLobbyShortcuts: () => WI,
      PadSneakChip: () => FI,
      PadTooltip: () => VI,
      attachPressToContinue: () => bI,
      getBoundButton: () => aB.h,
      getControllerSettings: () => rB.j,
      getGlyphForNoaAction: () => aB.o,
      getInventoryCursorState: () => qN,
      getMenuShortcutButton: () => wz,
      getPadGlyphIconName: () => oI,
      getPadGlyphIconUrl: () => HI,
      getPadRepeatTiming: () => mB.c,
      handOverPadFocus: () => oN,
      hasActivePad: () => iN,
      isPadSteppingSlots: () => fN
    });
    const QB = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var nB = zB(1240),
      dB = zB(1442),
      IB = zB(8122),
      NB = zB(83),
      uB = zB(28),
      UB = zB(31),
      aB = zB(8145),
      pB = zB(8173),
      rB = zB(8155),
      sB = zB(8179),
      JB = zB(8131),
      mB = zB(8652),
      yB = zB(8655),
      kB = zB(1694);
    const GB = (BB, jB, zB) => Math.max(jB, Math.min(zB, BB)),
      LB = BB => Math.min(BB.width, BB.height) / 720,
      gB = BB => Math.max(.15, BB);
    class tB {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(BB, jB) {
        const zB = Math.hypot(BB.x, BB.y) >= (BB => Math.max(.3, BB))(jB);
        return this.locked ? (this.locked = zB, !1) : zB
      }
    }
    const SB = (BB, jB) => {
        const zB = GB(jB.dtMs, 0, 100),
          QB = zB / 1e3,
          nB = LB(jB.viewport) * (jB.cursorSpeedPercent / 100),
          dB = (0, JB.k)(jB.stick, gB(jB.moveDeadzone)),
          IB = Math.hypot(dB.x, dB.y),
          NB = ((BB, jB, zB) => {
            if (jB < .3) return 0;
            const QB = zB / 350;
            return jB >= .85 ? Math.min(1, BB + QB) : Math.max(0, BB - QB)
          })(BB.speedRamp, IB, zB);
        let uB = BB.x,
          UB = BB.y;
        if (IB > 0) {
          const BB = .45 + .55 * NB,
            zB = jB.context.overInteractive ? .45 : 1,
            aB = 1400 * (BB => {
              const jB = GB(BB, 0, 1);
              return .3 * jB + .7 * jB * jB
            })(IB) * nB * BB * zB;
          uB += dB.x / IB * aB * QB, UB += dB.y / IB * aB * QB
        }
        const aB = Math.hypot(jB.dpad.x, jB.dpad.y);
        if (aB > 0) {
          const BB = 500 * nB;
          uB += jB.dpad.x / aB * BB * QB, UB += jB.dpad.y / aB * BB * QB
        }
        const pB = jB.context.magnetTarget;
        if (pB && IB < .3 && 0 === aB) {
          const BB = ((BB, jB, zB, QB, nB) => {
            const dB = jB.x - BB.x,
              IB = jB.y - BB.y,
              NB = Math.hypot(dB, IB);
            if (0 === NB) return {
              x: 0,
              y: 0
            };
            const uB = Math.min(NB, nB * (1 - QB / .3));
            let UB = dB / NB * uB,
              aB = IB / NB * uB;
            if (QB > 0) {
              const BB = zB.x / QB,
                jB = zB.y / QB,
                nB = UB * BB + aB * jB;
              nB < 0 && (UB -= nB * BB, aB -= nB * jB)
            }
            return {
              x: UB,
              y: aB
            }
          })({
            x: uB,
            y: UB
          }, pB, dB, IB, 120 * LB(jB.viewport) * QB);
          uB += BB.x, UB += BB.y
        }
        return {
          x: GB(uB, 0, Math.max(0, jB.viewport.width - 1)),
          y: GB(UB, 0, Math.max(0, jB.viewport.height - 1)),
          speedRamp: NB
        }
      },
      MB = BB => {
        const jB = (0, JB.k)(BB, .2);
        return 0 !== jB.x || 0 !== jB.y
      },
      EB = (BB, jB) => {
        const zB = (0, JB.k)(BB, .2),
          QB = Math.hypot(zB.x, zB.y);
        if (0 === QB) return {
          x: 0,
          y: 0
        };
        const nB = QB * QB * 1600,
          dB = GB(jB, 0, 100) / 1e3;
        return {
          x: zB.x / QB * nB * dB,
          y: zB.y / QB * nB * dB
        }
      },
      iB = (BB, jB) => "y" === jB ? BB.scrollHeight > BB.clientHeight + 1 : BB.scrollWidth > BB.clientWidth + 1,
      qB = (BB, jB) => {
        if (!iB(BB, jB)) return !1;
        const zB = getComputedStyle(BB),
          QB = "y" === jB ? zB.overflowY : zB.overflowX;
        return "auto" === QB || "scroll" === QB
      },
      fB = (BB, jB, zB) => {
        for (let dB = BB instanceof HTMLElement ? BB : null !== (QB = null === BB || void 0 === BB ? void 0 : BB.parentElement) && void 0 !== QB ? QB : null; dB; dB = dB.parentElement) {
          var QB;
          if (qB(dB, jB)) return dB;
          if (dB === zB) return null
        }
        if (zB) return null;
        const nB = document.scrollingElement;
        return nB instanceof HTMLElement && iB(nB, jB) ? nB : null
      },
      oB = new WeakMap,
      HB = (BB, jB) => {
        const zB = performance.now(),
          QB = oB.get(BB);
        if (QB && QB.axis === jB && zB - QB.atMs < 500 && (!QB.container || QB.container.isConnected)) return QB.container;
        const nB = DB(BB, jB);
        return oB.set(BB, {
          axis: jB,
          atMs: zB,
          container: nB
        }), nB
      },
      DB = (BB, jB) => {
        let zB = qB(BB, jB) ? BB : null,
          QB = zB ? zB.clientWidth * zB.clientHeight : 0;
        for (const nB of BB.querySelectorAll("*")) {
          const BB = nB.clientWidth * nB.clientHeight;
          BB > QB && qB(nB, jB) && (zB = nB, QB = BB)
        }
        return zB
      },
      FB = (BB, jB, zB) => "y" === jB ? zB < 0 ? BB.scrollTop > 0 : BB.scrollTop + BB.clientHeight < BB.scrollHeight - 1 : zB < 0 ? BB.scrollLeft > 0 : BB.scrollLeft + BB.clientWidth < BB.scrollWidth - 1,
      YB = (BB, jB, zB) => {
        "y" === jB ? BB.scrollBy({
          top: zB,
          behavior: "instant"
        }) : BB.scrollBy({
          left: zB,
          behavior: "instant"
        })
      },
      VB = BB => {
        if (!BB || BB === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const jB = BB.getBoundingClientRect(),
          zB = Math.max(0, jB.left),
          QB = Math.max(0, jB.top);
        return new DOMRect(zB, QB, Math.min(window.innerWidth, jB.right) - zB, Math.min(window.innerHeight, jB.bottom) - QB)
      },
      hB = (BB, jB) => BB.left < jB.right && jB.left < BB.right && BB.top < jB.bottom && jB.top < BB.bottom;
    var XB = zB(62),
      ZB = zB(1091),
      AB = zB.n(ZB),
      TB = zB(1148);
    let PB = 0,
      WB = !1;
    class eB {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(BB) {
        this.element = BB, this.shownKey = "", this.gap = null
      }
      show(BB) {
        const jB = this.element;
        if (!jB) return;
        const zB = BB ? this.keepOnScreen(jB, BB) : null,
          QB = zB ? `${zB.left},${zB.top},${zB.width},${zB.height}` : "";
        if (QB === this.shownKey) return;
        const nB = "" === this.shownKey;
        this.shownKey = QB, jB.classList.toggle("Visible", null !== zB), zB && (jB.classList.toggle("Snap", nB), jB.style.width = `${zB.width}px`, jB.style.height = `${zB.height}px`, jB.style.transform = `translate(${zB.left}px, ${zB.top}px)`, nB && (jB.offsetWidth, jB.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(BB, jB) {
        var zB;
        const QB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!WB){WB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(BB),new ResizeObserver((()=>{PB++})).observe(BB)}return String(PB)})()}`;
        (null === (zB = this.gap) || void 0 === zB ? void 0 : zB.key) !== QB && (this.gap = {
          px: parseFloat(getComputedStyle(BB).paddingLeft) || 0,
          key: QB
        });
        const nB = this.gap.px + 2,
          dB = Math.max(jB.left, nB),
          IB = Math.max(jB.top, nB),
          NB = Math.min(jB.left + jB.width, window.innerWidth - nB),
          uB = Math.min(jB.top + jB.height, window.innerHeight - nB);
        return NB <= dB || uB <= IB ? jB : {
          left: dB,
          top: IB,
          width: NB - dB,
          height: uB - IB
        }
      }
    }
    const lB = BB => {
      let {
        placer: jB,
        className: zB
      } = BB;
      const QB = (0, XB.useCallback)((BB => {
        jB.setElement(BB)
      }), [jB]);
      return (0, TB.jsx)("div", {
        ref: QB,
        className: AB()("PadReticle", zB),
        "aria-hidden": !0
      })
    };
    var wB = zB(8658);
    const xB = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const KB = new class {
      constructor() {
        this.state = xB, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(BB) {
        if (jB = this.state, zB = BB, (jB.visible || zB.visible) && (jB.visible !== zB.visible || jB.x !== zB.x || jB.y !== zB.y || jB.pressed !== zB.pressed)) {
          var jB, zB;
          this.state = BB;
          for (const jB of this.listeners) jB(BB)
        }
      }
      hide() {
        this.set(xB)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    };
    var CB = zB(8671);
    const cB = (BB, jB) => {
        let {
          kind: zB,
          holding: QB,
          hasPress: nB,
          hasBack: dB,
          slotHasItem: IB
        } = jB;
        switch (BB) {
          case "primary":
            return "slot" === zB ? "slotPrimary" : "recipe" === zB || "button" === zB ? nB ? "pressPrimary" : "click" : "textField" === zB ? "openKeyboard" : null;
          case "secondary":
            return "slot" === zB ? "slotSecondary" : "button" !== zB && "recipe" !== zB || !nB ? null : "pressSecondary";
          case "quickMove":
            return "slot" === zB && IB ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === zB && IB && !QB ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return QB ? "cancel" : dB ? "pressBack" : "close"
        }
      },
      bB = BB => {
        const jB = [];
        if (BB.hotbarPicking) return jB.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), jB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), jB;
        if (BB.holding) "slot" === BB.kind ? (jB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), jB.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === BB.kind && jB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), jB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), jB.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), BB.openButtonCloses && jB.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var zB;
          "slot" === BB.kind && BB.slotHasItem ? (jB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), jB.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), jB.push({
            actions: ["inventoryQuickMove"],
            labelKey: BB.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), jB.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), jB.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== BB.kind && "recipe" !== BB.kind || !BB.pressHints ? "button" === BB.kind || "recipe" === BB.kind ? jB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === BB.kind && jB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (BB.pressHints.primary && jB.push({
            actions: ["inventoryPrimary"],
            labelKey: BB.pressHints.primary
          }), BB.pressHints.secondary && jB.push({
            actions: ["inventorySecondary"],
            labelKey: BB.pressHints.secondary
          }));
          const QB = null === (zB = BB.pressHints) || void 0 === zB ? void 0 : zB.back;
          QB && jB.push({
            actions: ["inventoryClose"],
            labelKey: QB
          });
          const nB = [];
          BB.openButtonCloses && nB.push("inventory"), QB || nB.push("inventoryClose"), nB.length > 0 && jB.push({
            actions: nB,
            labelKey: "inventoryClose"
          })
        }
        return jB.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), BB.hasCategories ? jB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : BB.hasList && jB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), jB
      };
    var vB = zB(8685),
      RB = zB(8680);
    class OB {
      constructor(BB) {
        this.probes = BB, this.byContainer = new Map, this.byParent = new Map
      }
      find(BB, jB) {
        const zB = fB(BB, "y", jB);
        if (!zB) return null;
        let QB = this.byContainer.get(zB);
        return QB || (this.probes.push({
          element: zB,
          rect: Qj(zB.getBoundingClientRect())
        }), QB = {
          container: zB,
          box: VB(zB),
          group: zj(zB)
        }, this.byContainer.set(zB, QB)), QB
      }
      findForParent(BB, jB) {
        let zB = this.byParent.get(BB);
        return void 0 === zB && (zB = this.find(BB, jB), this.byParent.set(BB, zB)), zB
      }
    }
    const Bj = new WeakMap;
    let jj = 0;
    const zj = BB => {
        let jB = Bj.get(BB);
        return jB || (jB = "el:" + jj++, Bj.set(BB, jB)), jB
      },
      Qj = BB => ({
        left: BB.left,
        top: BB.top,
        width: BB.width,
        height: BB.height
      }),
      nj = BB => BB.width > 0 && BB.height > 0,
      dj = (BB, jB) => nj(BB) && BB.left + BB.width > 0 && BB.top + BB.height > 0 && BB.left < jB.width && BB.top < jB.height,
      Ij = (BB, jB, zB) => {
        const QB = BB.top + BB.height / 2;
        return dj(BB, jB) && (!zB || QB >= zB.top && QB <= zB.bottom)
      },
      Nj = BB => ({
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }),
      uj = (BB, jB, zB) => BB < 0 ? zB >= 0 ? 0 : jB - 1 : ((BB + zB) % jB + jB) % jB,
      Uj = BB => "Left" === BB || "Right" === BB,
      aj = (BB, jB, zB) => {
        const QB = Uj(zB),
          nB = QB ? BB.top : BB.left,
          dB = QB ? BB.height : BB.width,
          IB = QB ? jB.top : jB.left,
          NB = QB ? jB.height : jB.width,
          uB = Math.max(0, Math.max(IB - (nB + dB), nB - (IB + NB)));
        return dB > 1.5 * NB ? {
          gap: uB,
          offset: Math.max(0, IB - nB) + .1 * Math.max(0, nB - IB)
        } : {
          gap: uB,
          offset: Math.abs(IB + NB / 2 - (nB + dB / 2))
        }
      },
      pj = (BB, jB, zB) => {
        const QB = ((BB, jB, zB) => {
          const QB = Nj(BB),
            nB = Nj(jB),
            dB = Uj(zB) ? Math.min(BB.width, jB.width) / 4 : Math.min(BB.height, jB.height) / 4;
          switch (zB) {
            case "Right":
              return nB.x - QB.x >= dB ? Math.max(0, jB.left - (BB.left + BB.width)) : null;
            case "Left":
              return QB.x - nB.x >= dB ? Math.max(0, BB.left - (jB.left + jB.width)) : null;
            case "Down":
              return nB.y - QB.y >= dB ? Math.max(0, jB.top - (BB.top + BB.height)) : null;
            case "Up":
              return QB.y - nB.y >= dB ? Math.max(0, BB.top - (jB.top + jB.height)) : null
          }
        })(BB, jB, zB);
        if (null === QB) return null;
        const nB = aj(BB, jB, zB);
        return QB + 3 * nB.gap + .5 * nB.offset
      },
      rj = (BB, jB) => jB.visible || null !== jB.scrollGroup && jB.scrollGroup === BB.scrollGroup,
      sj = (BB, jB, zB, QB) => {
        let nB = null,
          dB = 1 / 0;
        for (const IB of jB) {
          if (IB.key === BB.key || !rj(BB, IB) || !QB(IB)) continue;
          const jB = pj(BB.rect, IB.rect, zB);
          null !== jB && jB < dB && (nB = IB, dB = jB)
        }
        return nB
      },
      Jj = (BB, jB, zB) => {
        const QB = sj(BB, jB, zB, (() => !0));
        if (!QB || Uj(zB) || null === BB.scrollGroup || QB.scrollGroup === BB.scrollGroup) return QB;
        const nB = sj(BB, jB, zB, (jB => 0 === aj(BB.rect, jB.rect, zB).gap));
        return null !== nB && void 0 !== nB ? nB : QB
      },
      mj = (BB, jB, zB) => {
        let QB = null,
          nB = 1 / 0;
        for (const dB of jB) {
          if (!dB.visible || zB && !zB(dB)) continue;
          const jB = Nj(dB.rect),
            IB = Math.hypot(jB.x - BB.x, jB.y - BB.y);
          IB < nB && (QB = dB, nB = IB)
        }
        return QB
      },
      yj = BB => {
        const {
          rect: jB,
          clip: zB
        } = BB;
        if (!zB) return jB;
        const QB = Math.max(jB.left, zB.left),
          nB = Math.max(jB.top, zB.top);
        return {
          left: QB,
          top: nB,
          width: Math.min(jB.left + jB.width, zB.left + zB.width) - QB,
          height: Math.min(jB.top + jB.height, zB.top + zB.height) - nB
        }
      },
      kj = (BB, jB) => jB.x >= BB.left && jB.x < BB.left + BB.width && jB.y >= BB.top && jB.y < BB.top + BB.height,
      Gj = (BB, jB) => {
        let zB = null,
          QB = 1 / 0;
        for (const nB of jB) {
          const jB = yj(nB);
          (nB.visible || nB.clip) && kj(jB, BB) && (jB.width * jB.height < QB && (zB = nB, QB = jB.width * jB.height))
        }
        return zB
      },
      Lj = BB => {
        let jB = null;
        for (const zB of BB) {
          if (!zB.visible) continue;
          if (!jB) {
            jB = zB;
            continue
          }
          const BB = Math.min(jB.rect.height, zB.rect.height) / 2,
            QB = zB.rect.top - jB.rect.top;
          (QB < -BB || Math.abs(QB) <= BB && zB.rect.left < jB.rect.left) && (jB = zB)
        }
        return jB
      },
      gj = (BB, jB, zB, QB, nB) => {
        const dB = nB % jB,
          IB = Math.floor(nB / jB);
        return {
          left: BB.left + dB * zB,
          top: BB.top + IB * QB,
          width: BB.width,
          height: BB.height
        }
      },
      tj = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Sj = ".LazyLoadedItemWrapper",
      Mj = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Ej = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      ij = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      qj = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || (0, RB.y)(BB) ? "info" : (0, wB.J)(BB) ? "textField" : "button",
      fj = (BB, jB) => "slot" === jB ? Number(BB.getAttribute("data-inven-idx")) : null,
      oj = BB => BB.matches(Sj) ? BB.querySelector(Mj) : BB,
      Hj = BB => {
        var jB, zB;
        return {
          element: BB,
          recipe: null !== (jB = BB && (null === (zB = oj(BB)) || void 0 === zB ? void 0 : zB.getAttribute("data-recipe-key"))) && void 0 !== jB ? jB : null
        }
      },
      Dj = BB => {
        const jB = oj(BB);
        if (!jB) return {
          kind: "pending",
          idx: null
        };
        const zB = qj(jB);
        return {
          kind: zB,
          idx: fj(jB, zB)
        }
      },
      Fj = BB => {
        const jB = [];
        for (const [zB, QB] of Ej) {
          BB.matches(QB) && jB.push([zB, BB]);
          for (const nB of BB.querySelectorAll(QB)) jB.push([zB, nB])
        }
        return jB
      },
      Yj = (BB, jB) => {
        for (const [zB, QB] of BB)
          if (QB.contains(jB)) return zB;
        return "other"
      },
      Vj = (BB, jB, zB, QB, nB, dB, IB, NB) => {
        var uB;
        const UB = BB.children,
          aB = Qj(UB[0].getBoundingClientRect()),
          pB = [{
            element: UB[0],
            rect: aB
          }];
        if (dB.push(pB[0]), 0 === aB.width || 0 === aB.height) return;
        let rB = 1;
        for (; rB < UB.length && Math.abs(UB[rB].getBoundingClientRect().top - aB.top) < 1;) rB++;
        const sB = BB => {
            const jB = {
              element: UB[BB],
              rect: Qj(UB[BB].getBoundingClientRect())
            };
            return dB.push(jB), pB.push(jB), jB.rect
          },
          JB = rB > 1 ? sB(1).left - aB.left : aB.width,
          mB = UB.length > rB ? sB(rB).top - aB.top : aB.height,
          yB = IB.find(BB, jB);
        let kB = null;
        if (yB) {
          var GB;
          const {
            container: BB,
            box: jB
          } = yB;
          kB = null !== (GB = NB.get(BB)) && void 0 !== GB ? GB : null, kB || (kB = {
            top: BB.scrollTop,
            left: BB.scrollLeft,
            box: jB,
            viewport: QB,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, NB.set(BB, kB)), kB.probes.push(...pB)
        }
        const LB = nB.length;
        for (let MB = 0; MB < UB.length; MB++) {
          var gB, tB, SB;
          const BB = UB[MB],
            jB = gj(aB, rB, JB, mB, MB),
            dB = BB.firstElementChild ? BB.querySelector(Mj) : null,
            IB = dB ? qj(dB) : "pending";
          nB.push({
            key: zj(BB),
            rect: jB,
            panel: zB,
            scrollGroup: null !== (gB = null === yB || void 0 === yB ? void 0 : yB.group) && void 0 !== gB ? gB : null,
            visible: Ij(jB, QB, null === yB || void 0 === yB ? void 0 : yB.box),
            clip: null !== (tB = null === yB || void 0 === yB ? void 0 : yB.box) && void 0 !== tB ? tB : null,
            element: BB,
            kind: IB,
            idx: dB ? fj(dB, IB) : null,
            scrollContainer: null !== (SB = null === yB || void 0 === yB ? void 0 : yB.container) && void 0 !== SB ? SB : null
          })
        }
        null === (uB = kB) || void 0 === uB || uB.targets.push(...nB.slice(LB))
      },
      hj = BB => BB instanceof Element && null !== BB.closest(Sj),
      Xj = BB => null !== BB.scrollContainer && hj(BB.element);
    class Zj {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(BB, jB, zB, QB) {
        this.latched = {
          source: BB,
          focusKey: jB,
          sinceMs: zB,
          hold: {
            id: ++this.presses,
            holdMs: QB
          }
        }
      }
      update(BB, jB, zB) {
        const QB = this.latched;
        return QB ? BB && jB === QB.focusKey ? zB - QB.sinceMs < QB.hold.holdMs ? null : (this.latched = null, QB.source) : (this.latched = null, null) : null
      }
      getHold() {
        var BB, jB;
        return null !== (BB = null === (jB = this.latched) || void 0 === jB ? void 0 : jB.hold) && void 0 !== BB ? BB : null
      }
      reset() {
        this.latched = null
      }
    }
    var Aj = zB(8691);
    const Tj = {
        kind: "none"
      },
      Pj = BB => ({
        x: BB.clientX,
        y: BB.clientY
      }),
      Wj = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class ej {
      constructor() {
        this.hovered = Tj, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(BB, jB, zB, QB, nB) {
        const dB = null !== jB ? {
            kind: "slot",
            idx: jB
          } : zB ? {
            kind: "element",
            element: zB
          } : Tj,
          IB = `${nB}|${Math.round(QB.clientX)},${Math.round(QB.clientY)}`,
          NB = (uB = this.hovered, UB = dB, "slot" === uB.kind && "slot" === UB.kind ? uB.idx === UB.idx : "element" === uB.kind && "element" === UB.kind ? uB.element === UB.element : uB.kind === UB.kind);
        var uB, UB;
        if (NB && IB === this.signature) return;
        const aB = !NB || nB !== this.holding || "" === this.signature;
        this.signature = IB, this.holding = nB, this.lastPoint = QB;
        const pB = this.hovered;
        if (this.hovered = dB, "slot" === dB.kind) return this.leaveElement(pB, null, QB), void(aB ? BB.hover(dB.idx, QB) : BB.moveTo(QB));
        if (NB) return void("element" === dB.kind ? (0, wB.q)(dB.element, dB.element, Pj(QB)) : BB.hover(null, QB));
        BB.hover(null, QB);
        const rB = "element" === dB.kind ? dB.element : null;
        "element" === pB.kind ? (0, wB.q)(pB.element, rB, Pj(QB)) : rB && (0, wB.q)(null, rB, Pj(QB))
      }
      invalidate() {
        this.signature = ""
      }
      clear(BB) {
        const jB = this.hovered;
        this.hovered = Tj, this.signature = "", "none" !== jB.kind && (this.leaveElement(jB, null, this.lastPoint), BB && "slot" === jB.kind && BB.hover(null, this.lastPoint))
      }
      leaveElement(BB, jB, zB) {
        "element" === BB.kind && (0, wB.q)(BB.element, jB, Pj(zB))
      }
    }
    class lj {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(BB, jB) {
        MB(BB) && (this.lastTiltedMs = jB)
      }
      allowsClick(BB) {
        return BB - this.lastTiltedMs > 150
      }
    }
    class wj {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(BB) {
        return 0 !== (0, JB.k)(BB, .2).y
      }
      step(BB, jB, zB) {
        BB !== this.container && (this.container = BB, this.remainder = 0);
        const QB = EB(jB, zB).y;
        if (0 === QB) return this.remainder = 0, !1;
        const nB = this.remainder + QB,
          dB = Math.trunc(nB);
        if (this.remainder = nB - dB, 0 === dB) return !1;
        const IB = BB.scrollTop;
        return BB.scrollTop = IB + dB, BB.scrollTop !== IB
      }
      current() {
        var BB;
        return null !== (BB = this.container) && void 0 !== BB && BB.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var xj = zB(8698);
    const Kj = "[data-pad-inventory-default]",
      Cj = ".HotBarGameItemsContainer .InvenItem.Selected",
      cj = {
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
      bj = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      vj = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Rj = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Oj = [...vj, ...Rj],
      Bz = () => {
        return BB = (0, aB.h)("inventory"), !Oj.map(aB.h).includes(BB) && !(0, JB.O)(BB);
        var BB
      },
      jz = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      zz = (BB, jB) => {
        const zB = !(null === jB || void 0 === jB || !jB.isHolding());
        return function(BB, jB) {
          const zB = BB.find((BB => BB.visible && jB(BB)));
          if (zB) return zB;
          for (var QB = arguments.length, nB = new Array(QB > 2 ? QB - 2 : 0), dB = 2; dB < QB; dB++) nB[dB - 2] = arguments[dB];
          for (const IB of nB) {
            const jB = Lj(BB.filter(IB));
            if (jB) return jB
          }
          return Lj(BB)
        }(BB, (BB => {
          const {
            element: jB
          } = BB;
          return jB.matches(Kj) || null !== jB.querySelector(Kj) || jB.matches(Cj)
        }), (BB => "slot" === BB.kind ? zB || null !== BB.idx && !(null === jB || void 0 === jB || !jB.hasItemAt(BB.idx)) : "recipe" === BB.kind || "pending" === BB.kind), (BB => "slot" === BB.kind || "button" === BB.kind))
      };
    class Qz {
      constructor() {
        this.set = null, this.observer = new MutationObserver((BB => {
          BB.some((BB => !hj(BB.target))) && (this.set = null)
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
              jB = [];
            let zB = !1;
            const QB = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              nB = new Map,
              dB = new OB(jB);
            for (const pB of document.querySelectorAll(tj)) {
              const aB = Fj(pB);
              zB ||= null !== pB.querySelector(".CreativeCategoryTab");
              for (const zB of pB.querySelectorAll(`${Sj}:first-child`)) {
                const IB = zB.parentElement;
                Vj(IB, pB, Yj(aB, IB), QB, BB, jB, dB, nB)
              }
              for (const zB of pB.querySelectorAll(Mj)) {
                var IB, NB, uB, UB;
                if (zB.closest(Sj) || zB.closest("[data-pad-ignore]")) continue;
                const rB = null === (IB = zB.parentElement) || void 0 === IB ? void 0 : IB.closest(Mj);
                if (rB && pB.contains(rB)) continue;
                const sB = qj(zB),
                  JB = fj(zB, sB);
                if (-1 === JB) continue;
                const mB = Qj(zB.getBoundingClientRect());
                jB.push({
                  element: zB,
                  rect: mB
                });
                const yB = dB.findForParent(zB.parentElement, pB),
                  kB = yB && !nB.has(yB.container) ? yB : null;
                (kB ? nj(mB) : dj(mB, QB)) && BB.push({
                  key: zj(zB),
                  rect: mB,
                  panel: Yj(aB, zB),
                  scrollGroup: null !== (NB = null === kB || void 0 === kB ? void 0 : kB.group) && void 0 !== NB ? NB : null,
                  visible: Ij(mB, QB, null === kB || void 0 === kB ? void 0 : kB.box),
                  clip: null !== (uB = null === kB || void 0 === kB ? void 0 : kB.box) && void 0 !== uB ? uB : null,
                  element: zB,
                  kind: sB,
                  idx: JB,
                  scrollContainer: null !== (UB = null === kB || void 0 === kB ? void 0 : kB.container) && void 0 !== UB ? UB : null
                })
              }
            }
            for (const [pB, rB] of nB) rB.holdsOthers = jB.some((BB => BB.element !== pB && pB.contains(BB.element) && !BB.element.closest(Sj)));
            const aB = new Map;
            for (const pB of BB) aB.set(pB.element, pB);
            return {
              targets: BB,
              byElement: aB,
              hasCategories: zB,
              probes: jB,
              scrollers: nB
            }
          })(), this.observer.disconnect();
          for (const BB of document.querySelectorAll(tj)) this.observer.observe(BB, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(BB) {
        !this.set || BB instanceof Element && ((BB, jB) => {
          const zB = BB.scrollers.get(jB);
          if (!zB || zB.holdsOthers || jB.scrollLeft !== zB.left) return !1;
          const QB = jB.scrollTop - zB.top;
          if (0 === QB) return !0;
          zB.top = jB.scrollTop;
          for (const nB of zB.probes) nB.rect.top -= QB;
          for (const nB of zB.targets) nB.rect.top -= QB, nB.visible = Ij(nB.rect, zB.viewport, zB.box);
          return !0
        })(this.set, BB) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((BB => {
          return jB = BB.rect, zB = BB.element.getBoundingClientRect(), !(jB.left === zB.left && jB.top === zB.top && jB.width === zB.width && jB.height === zB.height);
          var jB, zB
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const nz = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(JB.J.map((BB => [BB, (0, mB.b)(JB.N)]))), this.stickRepeat = new JB.c((0, mB.b)(JB.gb)), this.pageUpTimer = (0, mB.b)(JB.cb), this.pageDownTimer = (0, mB.b)(JB.cb), this.stickGate = new tB, this.pointer = null, this.activePress = null, this.dropLatch = new Zj, this.scroller = new wj, this.scrollStickClick = new lj, this.hover = new ej, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new eB, this.targets = new Qz, this.hasCategories = !1, this.wasShowing = !1, this.state = Aj.b, this.isActive = () => (0, vB.h)(), this.isShowing = () => "inventory" === pB.c.getActiveConsumerName() && (0, sB.m)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, vB.f)()), (0, vB.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var BB;
            this.reopenSlotIdx = null !== (BB = this.focused ? Dj(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, vB.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = BB => {
            (0, NB.unstable_batchedUpdates)((() => {
              this.frame(BB)
            }))
          }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, kB.q)(BB) && this.isShowing(), this.noteRealPointer = BB => {
            BB instanceof MouseEvent && BB.isTrusted && !(0, kB.q)(BB) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = BB.clientX, this.lastRealPointer.y = BB.clientY)
          }, this.wakePressActs = BB => {
            var jB;
            return BB === (0, aB.h)("inventoryClose") ? !(null !== (jB = (0, vB.f)()) && void 0 !== jB && jB.isHolding()) : !(BB !== (0, aB.h)("inventory") || !Bz()) || ((0, JB.O)(BB) ? this.isNavButton(BB) : Rj.some((jB => (0, aB.h)(jB) === BB)))
          }
        }
        frame(BB) {
          var jB, zB, QB, nB, dB;
          const IB = (0, vB.f)();
          if (!(0, sB.m)()) return void(this.wasShowing && (this.endInteraction(IB), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === IB || void 0 === IB || !IB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, rB.j)().inventoryNavigation || this.pointer || this.engagePointer();
          const NB = performance.now();
          this.handleNavigation(BB, NB), this.handlePanels(BB), this.handlePaging(BB, NB), this.handleScroll(BB), this.handleButtons(BB, NB, IB), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const uB = this.ensureFocus(),
            UB = this.focusContext(IB);
          this.ring.show(uB);
          const pB = "slot" === UB.kind ? UB.idx : null,
            JB = null !== (jB = null === (zB = UB.actionElement) || void 0 === zB ? void 0 : zB.querySelector(".DoCraftItem")) && void 0 !== jB ? jB : UB.actionElement;
          this.pointer ? (this.hover.sync(IB, pB, JB, ((BB, jB) => {
            const zB = jB ? Wj() : 0;
            return {
              clientX: BB.x - zB,
              clientY: BB.y - zB
            }
          })(this.pointer, UB.holding), UB.holding), KB.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: BB.isHeld((0, aB.h)("inventoryPrimary"))
          })) : uB && this.focused && this.hover.sync(IB, pB, JB, ((BB, jB) => {
            if (!jB) return {
              clientX: BB.left + BB.width - 10,
              clientY: BB.top + BB.height / 2 - 10
            };
            const zB = Wj();
            return {
              clientX: BB.left + BB.width / 2 - zB,
              clientY: BB.top + BB.height / 2 - zB
            }
          })(uB, UB.holding), UB.holding), this.publishState({
            showing: !0,
            kind: UB.kind,
            holding: UB.holding,
            slotHasItem: UB.slotHasItem,
            pressHints: null !== (QB = null === (nB = UB.press) || void 0 === nB ? void 0 : nB.hints) && void 0 !== QB ? QB : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Xj(this.focusTarget),
            openButtonCloses: Bz(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === UB.kind && !(null === (dB = UB.actionElement) || void 0 === dB || !dB.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(BB) {
          var jB;
          const zB = (0, sB.e)();
          if (!zB) return;
          this.targets.revalidate();
          const QB = this.getTargets().targets;
          this.setFocus(null !== (jB = Gj(zB, QB)) && void 0 !== jB ? jB : BB ? mj(zB, QB, (BB => {
            let {
              rect: jB
            } = BB;
            const QB = Math.max(jB.left - zB.x, 0, zB.x - (jB.left + jB.width)),
              nB = Math.max(jB.top - zB.y, 0, zB.y - (jB.top + jB.height));
            return Math.hypot(QB, nB) <= Math.min(jB.width, jB.height) / 2
          })) : null, !1), "cursor" === (0, rB.j)().inventoryNavigation && (this.pointer = {
            x: zB.x,
            y: zB.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const BB = this.lastRealPointer;
          if (!BB || "keyboardMouse" !== uB.c.get("activeInputDevice")) return;
          const jB = document.elementFromPoint(BB.x, BB.y);
          jB && (0, wB.q)(null, jB, BB)
        }
        endInteraction(BB) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const jB of this.dpadTimers.values()) jB.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(Aj.b)
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
          if (null === BB || void 0 === BB || !BB.isConnected || !BB.closest(tj)) return null;
          const jB = BB.getBoundingClientRect();
          return jB.width > 0 && jB.height > 0 ? {
            left: jB.left,
            top: jB.top,
            width: jB.width,
            height: jB.height
          } : null
        }
        ensureFocus() {
          const BB = this.readFocusRect();
          if (BB || this.pointer) return BB;
          const {
            targets: jB,
            byElement: zB
          } = this.getTargets();
          let QB = null,
            nB = !1;
          if (this.lastRect) QB = mj(Nj(this.lastRect), jB);
          else {
            var dB, IB;
            const BB = ((BB, jB) => {
                const zB = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return zB ? zz(BB.filter((BB => zB.contains(BB.element))), jB) : null
              })(jB, (0, vB.f)()),
              NB = jB.find((BB => null !== BB.idx && BB.idx === this.reopenSlotIdx)),
              uB = document.querySelector(Cj);
            nB = null !== BB || void 0 !== NB, QB = null !== (dB = null !== (IB = null !== BB && void 0 !== BB ? BB : NB) && void 0 !== IB ? IB : uB && zB.get(uB)) && void 0 !== dB ? dB : Lj(jB)
          }
          return this.setFocus(QB, nB), this.lastRect
        }
        setFocus(BB) {
          let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          BB && (this.focused = BB.element, this.focusTarget = BB, this.panelMemory.set(BB.panel, BB.element), jB && BB.scrollContainer && ((BB, jB) => {
            const zB = BB.getBoundingClientRect(),
              QB = VB(jB),
              nB = jB.scrollTop;
            return zB.top < QB.top ? jB.scrollTop -= QB.top - zB.top : zB.bottom > QB.bottom && (jB.scrollTop += zB.bottom - QB.bottom), jB.scrollTop !== nB
          })(BB.element, BB.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, rB.j)().inventoryNavigation) {
              if (this.lastRect) {
                const BB = Nj(this.lastRect);
                this.pointer = {
                  x: BB.x,
                  y: BB.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const BB = this.lastRect ? Nj(this.lastRect) : {
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
          this.pointer = null, KB.hide()
        }
        hoverAtPointer() {
          var BB;
          const jB = Gj(this.pointer, this.getTargets().targets);
          this.focusTarget = jB, (null === jB || void 0 === jB ? void 0 : jB.element) !== this.focused && (this.focused = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.element) && void 0 !== BB ? BB : null, jB && (this.panelMemory.set(jB.panel, jB.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(BB, jB) {
          const zB = this.focusTarget,
            QB = zB && (0, rB.j)().cursorMagnetism ? Nj(yj(zB)) : null;
          this.pointer = SB(this.pointer, {
            stick: BB.leftStick,
            moveDeadzone: (0, rB.j)().moveDeadzone,
            dpad: jB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, rB.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: QB
            }
          })
        }
        move(BB) {
          this.targets.revalidate();
          const jB = this.currentTarget();
          jB && this.setFocus(Jj(jB, this.getTargets().targets, BB))
        }
        step(BB) {
          const jB = this.pointer;
          if (jB && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((BB, jB, zB) => {
            var QB;
            const nB = {
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
            return null !== (QB = Jj(nB, jB, zB)) && void 0 !== QB ? QB : mj(BB, jB)
          })(jB, this.getTargets().targets, BB));
          this.move(BB)
        }
        isNavButton(BB) {
          return !vj.some((jB => (0, aB.h)(jB) === BB)) && !(BB === (0, aB.h)("inventory") && Bz())
        }
        handleNavigation(BB, jB) {
          const zB = (0, rB.j)().inventoryNavigation,
            QB = {
              x: 0,
              y: 0
            };
          let nB = null;
          for (const uB of JB.J) {
            const dB = this.isNavButton(uB) && BB.isHeld(uB);
            dB && (QB.x += cj[uB].x, QB.y += cj[uB].y), this.dpadTimers.get(uB).update(dB, jB) && "cursor" !== zB && (nB ??= uB)
          }
          const dB = this.stickGate.update(BB.leftStick, (0, rB.j)().moveDeadzone);
          if (nB && (this.step(nB), this.stickGate.lock()), "slot" !== zB) {
            const jB = ((BB, jB, zB, QB) => "hybrid" !== BB ? "cursor" === BB : !QB && (jB || zB))(zB, null !== this.pointer, dB, null !== nB);
            return jB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === zB ? QB : {
              x: 0,
              y: 0
            }))
          }
          const IB = (0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone),
            NB = this.stickRepeat.update(dB ? (0, JB.ib)(IB) : null, jB);
          NB && this.move(NB)
        }
        applyCategoryPlace() {
          const BB = this.placeAfterCategory;
          if (!BB) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const jB = mj(Nj(BB.rect), this.getTargets().targets, (jB => jB.scrollGroup === BB.scrollGroup));
          this.setFocus(jB, !1)
        }
        applyFocusRequest() {
          const BB = (0, vB.r)();
          BB && (this.targets.invalidate(), this.setFocus((0, vB.c)(this.getTargets().targets, BB)))
        }
        handlePanels(BB) {
          var jB, zB, QB;
          const nB = BB.wasPressed((0, aB.h)("inventoryPanelPrevious")),
            dB = BB.wasPressed((0, aB.h)("inventoryPanelNext"));
          if (!nB && !dB) return;
          const {
            targets: IB
          } = this.getTargets(), NB = (uB = ((BB, jB) => {
            const zB = [];
            for (const nB of BB) nB.visible && !zB.includes(nB.panel) && zB.push(nB.panel);
            const QB = BB => {
              const QB = jB.indexOf(BB);
              return -1 === QB ? jB.length + zB.indexOf(BB) : QB
            };
            return zB.sort(((BB, jB) => QB(BB) - QB(jB)))
          })(IB, ij), UB = null !== (jB = null === (zB = this.focusTarget) || void 0 === zB ? void 0 : zB.panel) && void 0 !== jB ? jB : null, pB = dB ? 1 : -1, 0 === uB.length ? null : uB[uj(null === UB ? -1 : uB.indexOf(UB), uB.length, pB)]);
          var uB, UB, pB;
          if (null === NB) return;
          const rB = this.panelMemory.get(NB),
            sB = IB.filter((BB => BB.panel === NB)),
            JB = null !== (QB = sB.find((BB => BB.element === rB && BB.visible))) && void 0 !== QB ? QB : zz(sB, (0, vB.f)());
          this.setFocus(JB)
        }
        handlePaging(BB, jB) {
          const zB = (0, aB.h)("menuPageUp"),
            QB = (0, aB.h)("menuPageDown"),
            nB = this.pageUpTimer.update(BB.isHeld(zB), jB),
            dB = this.pageDownTimer.update(BB.isHeld(QB), jB);
          if (!nB && !dB) return;
          const IB = dB ? 1 : -1;
          if (!BB.wasPressed(dB ? QB : zB) && this.hasCategories) return;
          if ((BB => {
              const jB = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === jB.length) return !1;
              const zB = jB.findIndex((BB => BB.classList.contains("Selected"))),
                QB = jB[uj(zB, jB.length, BB)];
              return (0, wB.o)(QB, (0, wB.x)(QB)), !0
            })(IB)) {
            var NB, uB;
            this.targets.invalidate();
            const BB = null !== (NB = null === (uB = this.focusTarget) || void 0 === uB ? void 0 : uB.scrollGroup) && void 0 !== NB ? NB : null,
              jB = this.readFocusRect();
            return void(this.placeAfterCategory = null !== BB && jB && !this.pointer ? {
              rect: jB,
              scrollGroup: BB
            } : null)
          }
          const {
            targets: UB
          } = this.getTargets(), pB = this.currentTarget(), rB = pB && Xj(pB) ? pB : UB.find((BB => Xj(BB) && BB.visible));
          if (!rB) return;
          const sB = ((BB, jB, zB, QB) => {
            if (null === BB.scrollGroup) return null;
            const nB = Nj(BB.rect),
              dB = nB.x,
              IB = nB.y + ("Down" === zB ? QB : -QB);
            let NB = null,
              uB = 1 / 0;
            for (const UB of jB) {
              if (UB.scrollGroup !== BB.scrollGroup || UB.key === BB.key) continue;
              const jB = Nj(UB.rect);
              if ("Down" === zB ? jB.y <= nB.y : jB.y >= nB.y) continue;
              const QB = Math.hypot(jB.x - dB, jB.y - IB);
              QB < uB && (NB = UB, uB = QB)
            }
            return NB
          })(rB, UB, IB > 0 ? "Down" : "Up", rB.scrollContainer.clientHeight);
          this.setFocus(null !== sB && void 0 !== sB ? sB : rB)
        }
        handleScroll(BB) {
          var jB, zB, QB, nB, dB, IB;
          if (!this.scroller.isScrolling(BB.rightStick)) return void this.scroller.reset();
          const {
            targets: NB
          } = this.getTargets(), uB = this.pointer, UB = !uB && this.focusTarget && Xj(this.focusTarget) ? this.focusTarget.scrollContainer : null, aB = uB && (null === (jB = NB.find((BB => BB.clip && kj(BB.clip, uB)))) || void 0 === jB ? void 0 : jB.scrollContainer), pB = null !== (zB = null !== (QB = null !== (nB = this.scroller.current()) && void 0 !== nB ? nB : aB) && void 0 !== QB ? QB : UB) && void 0 !== zB ? zB : null === (dB = NB.find(Xj)) || void 0 === dB ? void 0 : dB.scrollContainer;
          if (!pB || !this.scroller.step(pB, BB.rightStick, BB.dtMs)) return;
          this.targets.scrolled(pB);
          const rB = uB || (null === (IB = this.focusTarget) || void 0 === IB ? void 0 : IB.scrollContainer) !== pB ? null : this.readFocusRect();
          if (!rB) return;
          const sB = VB(pB),
            JB = Nj(rB);
          if (JB.y < sB.top || JB.y > sB.bottom) {
            const BB = this.focusTarget.scrollGroup,
              jB = mj(JB, this.getTargets().targets, (jB => jB.scrollGroup === BB));
            this.setFocus(jB, !1)
          }
        }
        focusContext(BB) {
          const {
            kind: jB,
            idx: zB
          } = this.focused ? Dj(this.focused) : {
            kind: null,
            idx: null
          }, QB = this.focused ? oj(this.focused) : null, nB = QB ? (0, xj.b)(QB) : null;
          return {
            kind: jB,
            idx: zB,
            actionElement: QB,
            press: nB,
            hasPress: null !== nB,
            hasBack: !(null === nB || void 0 === nB || !nB.back),
            holding: BB.isHolding(),
            slotHasItem: null !== zB && BB.hasItemAt(zB)
          }
        }
        handleButtons(BB, jB, zB) {
          var QB, nB;
          if (!this.activePress || BB.isHeld(this.activePress.button) && (QB = this.activePress.target, nB = this.focused, null !== QB.recipe ? Hj(nB).recipe === QB.recipe : nB === QB.element) || this.releasePress(), this.scrollStickClick.update(BB.rightStick, jB), !this.handleHotbarPick(BB, zB)) {
            for (const [QB, nB] of bj) {
              const dB = (0, aB.h)(nB);
              if (!BB.wasPressed(dB) || "openButton" === QB && !Bz()) continue;
              if ("RS" === dB && !this.scrollStickClick.allowsClick(jB)) continue;
              const IB = this.focusContext(zB),
                NB = cB(QB, IB);
              NB && this.runIntent(NB, IB, dB, zB)
            }
            this.handleDrop(BB, jB, zB)
          }
        }
        handleHotbarPick(BB, jB) {
          const zB = this.hotbarPick;
          if (!zB) return !1;
          const QB = BB.wasPressed((0, aB.h)("inventoryPrimary")) || BB.wasPressed((0, aB.h)("inventoryHotbarSwap"));
          if (!QB && !BB.wasPressed((0, aB.h)("inventoryClose")) && !jB.isHolding()) return !(BB.wasPressed((0, aB.h)("inventory")) && Bz());
          const nB = this.focusTarget;
          QB && "hotbar" === (null === nB || void 0 === nB ? void 0 : nB.panel) && null !== nB.idx && nB.idx !== zB.idx && (jB.swapWithHotbar(nB.idx, zB.idx), this.afterAction()), this.hotbarPick = null;
          const dB = zB.element.isConnected ? this.getTargets().byElement.get(zB.element) : void 0;
          return dB && this.setFocus(dB), !0
        }
        startHotbarPick(BB) {
          var jB;
          const {
            targets: zB,
            byElement: QB
          } = this.getTargets(), nB = document.querySelector(Cj), dB = null !== (jB = nB && QB.get(nB)) && void 0 !== jB ? jB : zB.find((BB => "hotbar" === BB.panel));
          dB && this.focused && (this.hotbarPick = {
            idx: BB,
            element: this.focused
          }, this.setFocus(dB))
        }
        focusKey() {
          return this.focused ? zj(this.focused) : null
        }
        handleDrop(BB, jB, zB) {
          const QB = (0, aB.h)("inventoryDrop");
          if (BB.wasPressed(QB)) {
            const BB = (nB = this.focusContext(zB)).holding ? {
              kind: "DN"
            } : "slot" === nB.kind && nB.slotHasItem && null !== nB.idx ? {
              kind: "slot",
              idx: nB.idx
            } : null;
            return void(BB && (this.dropFrom(BB, !1, zB), this.dropLatch.press(BB, this.focusKey(), jB, yB.c[(0, rB.j)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var nB;
          const dB = this.dropLatch.update(BB.isHeld(QB), this.focusKey(), jB);
          dB && ((BB, jB, zB) => "DN" === BB.kind ? jB : !jB && zB(BB.idx))(dB, zB.isHolding(), zB.hasItemAt) && (this.dropFrom(dB, !0, zB), this.afterAction())
        }
        dropFrom(BB, jB, zB) {
          "DN" === BB.kind ? zB.dropHeld(jB, this.slotPoint()) : zB.dropSlot(BB.idx, jB)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (BB => {
            const jB = Nj(BB);
            return {
              clientX: jB.x,
              clientY: jB.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(BB, jB, zB, QB) {
          const nB = jB.idx,
            dB = jB.actionElement;
          switch (dB && jz.has(BB) && (0, kB.x)(dB), BB) {
            case "slotPrimary":
              QB.primary(nB, this.slotPoint());
              break;
            case "slotSecondary":
              QB.secondary(nB, this.slotPoint());
              break;
            case "slotQuickMove":
              QB.quickMove(nB, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(nB);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(jB.press, "pressPrimary" === BB ? "primary" : "secondary", zB);
              break;
            case "click":
              (0, wB.o)(dB, (0, wB.x)(dB));
              break;
            case "openKeyboard":
              (0, wB.J)(dB) && (0, wB.H)(dB);
              break;
            case "pressBack":
              jB.press.back();
              break;
            case "cancel":
              QB.cancel();
              break;
            case "close":
              return this.releasePress(), void QB.close()
          }
          this.afterAction()
        }
        startPress(BB, jB, zB) {
          this.releasePress(), BB.press(jB) && (this.activePress = {
            handlers: BB,
            button: zB,
            target: Hj(this.focused)
          })
        }
        releasePress() {
          var BB, jB, zB;
          null === (BB = this.activePress) || void 0 === BB || null === (jB = (zB = BB.handlers).release) || void 0 === jB || jB.call(zB), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(BB) {
          ((BB, jB) => {
            var zB, QB, nB, dB, IB, NB;
            return BB.showing === jB.showing && BB.kind === jB.kind && BB.holding === jB.holding && BB.slotHasItem === jB.slotHasItem && (null === (zB = BB.pressHints) || void 0 === zB ? void 0 : zB.primary) === (null === (QB = jB.pressHints) || void 0 === QB ? void 0 : QB.primary) && (null === (nB = BB.pressHints) || void 0 === nB ? void 0 : nB.secondary) === (null === (dB = jB.pressHints) || void 0 === dB ? void 0 : dB.secondary) && (null === (IB = BB.pressHints) || void 0 === IB ? void 0 : IB.back) === (null === (NB = jB.pressHints) || void 0 === NB ? void 0 : NB.back) && BB.hasCategories === jB.hasCategories && BB.hasList === jB.hasList && BB.openButtonCloses === jB.openButtonCloses && BB.steppingSlots === jB.steppingSlots && BB.hotbarPicking === jB.hotbarPicking && BB.quickMoveToHotbar === jB.quickMoveToHotbar && BB.dropStackHold === jB.dropStackHold
          })(BB, this.state) || (this.state = BB, UB.n.Ly(Aj.f, BB))
        }
      },
      dz = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Iz = zB(8704),
      Nz = zB(363),
      uz = zB(1664),
      Uz = zB(8150);
    const az = "[data-pad-secondary]",
      pz = BB => BB instanceof HTMLElement && (0, RB.s)(BB) && !(0, RB.y)(BB),
      rz = BB => {
        const jB = BB.querySelector(az);
        if (jB && pz(jB)) return jB;
        for (const nB of null !== (zB = null === (QB = BB.parentElement) || void 0 === QB ? void 0 : QB.children) && void 0 !== zB ? zB : []) {
          var zB, QB;
          if (nB !== BB && nB.matches(az) && pz(nB)) return nB
        }
        return null
      },
      sz = (BB, jB, zB, QB) => Math.max(0, Math.max(BB, zB) - Math.min(jB, QB)),
      Jz = (BB, jB, zB, QB) => Math.max(0, Math.min(jB, QB) - Math.max(BB, zB)),
      mz = (BB, jB, zB) => {
        const QB = (BB.left + BB.right) / 2,
          nB = (BB.top + BB.bottom) / 2,
          dB = (jB.left + jB.right) / 2,
          IB = (jB.top + jB.bottom) / 2;
        if ("Left" === zB || "Right" === zB) {
          const NB = "Right" === zB ? 1 : -1;
          return {
            forwardGap: "Right" === zB ? jB.left - BB.right : BB.left - jB.right,
            centreForward: (dB - QB) * NB,
            sidewaysGap: sz(BB.top, BB.bottom, jB.top, jB.bottom),
            sidewaysOverlap: Jz(BB.top, BB.bottom, jB.top, jB.bottom),
            centreSideways: Math.abs(IB - nB),
            startSideways: Math.abs(jB.top - BB.top),
            fromSidewaysSize: BB.bottom - BB.top,
            toSidewaysSize: jB.bottom - jB.top,
            toLength: jB.right - jB.left
          }
        }
        const NB = "Down" === zB ? 1 : -1;
        return {
          forwardGap: "Down" === zB ? jB.top - BB.bottom : BB.top - jB.bottom,
          centreForward: (IB - nB) * NB,
          sidewaysGap: sz(BB.left, BB.right, jB.left, jB.right),
          sidewaysOverlap: Jz(BB.left, BB.right, jB.left, jB.right),
          centreSideways: Math.abs(dB - QB),
          startSideways: Math.abs(jB.left - BB.left),
          fromSidewaysSize: BB.right - BB.left,
          toSidewaysSize: jB.right - jB.left,
          toLength: jB.bottom - jB.top
        }
      },
      yz = BB => BB.centreForward > .5 && BB.forwardGap >= -BB.toLength / 2,
      kz = BB => {
        const jB = BB.sidewaysOverlap > 0 ? 0 : 2 * BB.fromSidewaysSize,
          zB = BB.fromSidewaysSize > 1.5 * BB.toSidewaysSize ? BB.startSideways : BB.centreSideways;
        return Math.max(0, BB.forwardGap) + 3 * BB.sidewaysGap + jB + .1 * zB
      },
      Gz = (BB, jB) => Jz(BB.top, BB.bottom, jB.top, jB.bottom) > 0 || jB.bottom - jB.top > jB.right - jB.left,
      Lz = (BB, jB, zB, QB, nB, dB) => {
        const IB = nB ? tz(BB, jB, zB, nB) : new Set,
          NB = Mz(BB, jB, zB, IB);
        return NB < 0 && IB.size > 0 && dB ? gz(BB, jB, zB, dB) : QB && NB >= 0 ? Sz(BB, jB, zB, QB, NB, IB) : NB
      },
      gz = (BB, jB, zB, QB) => {
        const nB = new Set,
          dB = Mz(BB, jB, "Up", nB) >= 0,
          IB = Mz(BB, jB, "Down", nB) >= 0,
          NB = new Set;
        return jB.forEach(((jB, zB) => {
          const nB = jB.top + jB.bottom < BB.top + BB.bottom;
          QB[zB] && !(nB ? dB : IB) || NB.add(zB)
        })), Mz(BB, jB, zB, NB)
      },
      tz = (BB, jB, zB, QB) => {
        const nB = new Set;
        return "Left" !== zB && "Right" !== zB || jB.forEach(((jB, zB) => {
          QB[zB] && Jz(BB.top, BB.bottom, jB.top, jB.bottom) <= 0 && nB.add(zB)
        })), nB
      },
      Sz = (BB, jB, zB, QB, nB, dB) => {
        const IB = mz(BB, jB[nB], zB).forwardGap;
        let NB = nB,
          uB = QB[nB],
          UB = 1 / 0;
        return jB.forEach(((jB, aB) => {
          const pB = QB[aB];
          if (dB.has(aB) || pB < uB || pB === uB && NB === nB) return;
          const rB = mz(BB, jB, zB);
          if (!yz(rB) || rB.forwardGap < 0 || rB.forwardGap >= IB) return;
          const sB = kz(rB);
          (pB > uB || sB < UB) && (NB = aB, uB = pB, UB = sB)
        })), NB
      },
      Mz = (BB, jB, zB, QB) => {
        let nB = -1,
          dB = 1 / 0;
        if (jB.forEach(((jB, IB) => {
            const NB = ((BB, jB, zB) => {
              const QB = mz(BB, jB, zB);
              if (!yz(QB)) return null;
              const nB = Math.max(0, QB.forwardGap);
              return QB.sidewaysOverlap <= 0 && QB.sidewaysGap > 2 * (nB + 1) ? null : kz(QB)
            })(BB, jB, zB);
            null !== NB && NB < dB && !QB.has(IB) && (dB = NB, nB = IB)
          })), nB < 0) return -1;
        const IB = jB[nB],
          NB = mz(BB, IB, zB).forwardGap;
        let uB = NB,
          UB = nB;
        return jB.forEach(((jB, dB) => {
          if (dB === nB || QB.has(dB) || !((BB, jB, zB) => {
              const QB = "Left" === zB || "Right" === zB,
                nB = QB ? Jz(BB.top, BB.bottom, jB.top, jB.bottom) : Jz(BB.left, BB.right, jB.left, jB.right),
                dB = QB ? Math.min(BB.bottom - BB.top, jB.bottom - jB.top) : Math.min(BB.right - BB.left, jB.right - jB.left);
              return nB > 0 && nB >= dB / 2
            })(jB, IB, zB)) return;
          const aB = mz(BB, jB, zB);
          yz(aB) && aB.forwardGap + aB.toLength <= NB + 1 && aB.forwardGap < uB && (uB = aB.forwardGap, UB = dB)
        })), UB
      },
      Ez = (BB, jB) => {
        let zB = -1,
          QB = 1 / 0;
        return jB.forEach(((jB, nB) => {
          const dB = Math.max(jB.left - BB.x, 0, BB.x - jB.right),
            IB = Math.max(jB.top - BB.y, 0, BB.y - jB.bottom),
            NB = Math.hypot(dB, IB);
          NB < QB && (QB = NB, zB = nB)
        })), zB
      },
      iz = (BB, jB) => {
        const zB = Math.min(BB.bottom - BB.top, jB.bottom - jB.top) / 2;
        return Math.abs(BB.top - jB.top) > zB ? BB.top - jB.top : BB.left - jB.left
      },
      qz = BB => {
        let jB = -1;
        for (let zB = 0; zB < BB.length; zB++)(jB < 0 || iz(BB[zB], BB[jB]) < 0) && (jB = zB);
        return jB
      };
    var fz = zB(1718),
      oz = zB(8711),
      Hz = zB(8718);
    const Dz = BB => {
        if ("death" !== BB || "inGame" !== uB.c.get("gameState") || "off" === (0, rB.j)().quickChat || null === (0, fz.e)()) return !1;
        const jB = (0, aB.h)("chat");
        return jB !== (0, aB.h)("menuConfirm") && jB !== (0, aB.h)("menuBack")
      },
      Fz = new oz.e;
    var Yz = zB(4383),
      Vz = zB(8722),
      hz = zB(8724);
    const Xz = BB => {
        let jB = null;
        for (const zB of BB.querySelectorAll("[data-pad-tabs]"))(0, RB.s)(zB) && (!jB || Number(zB.dataset.padTabs) < Number(jB.dataset.padTabs)) && (jB = zB);
        return jB
      },
      Zz = (BB, jB, zB, QB) => {
        BB.focusWhenFound((() => {
          const nB = BB.pickInitial(jB);
          if (nB && !zB.has(nB) && (null === QB || void 0 === QB || !QB.contains(nB))) return nB;
          const dB = ((BB, jB) => {
              const zB = jB => BB.getEnabledCandidates(jB).filter((BB => !BB.closest("[data-pad-tabs]")));
              for (const QB of (0, RB.h)(jB)) {
                const BB = zB(QB);
                if (BB.length > 0) return BB
              }
              return zB(jB)
            })(BB, jB).filter((BB => !zB.has(BB))),
            IB = qz(dB.map((BB => BB.getBoundingClientRect())));
          return IB >= 0 ? dB[IB] : null
        }), 3e3)
      },
      Az = (BB, jB, zB, QB) => {
        var nB;
        const dB = ((BB, jB) => {
          if (0 === BB.length) return null;
          const zB = BB.findIndex((BB => "true" === BB.dataset.padSelected));
          return zB < 0 ? jB > 0 ? BB[0] : BB[BB.length - 1] : BB[(zB + jB + BB.length) % BB.length]
        })([...zB.querySelectorAll("[data-pad-tab]")].filter((BB => (0, RB.s)(BB) && !(0, RB.y)(BB))), QB);
        if (!dB) return;
        const IB = null !== (nB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== nB ? nB : null,
          NB = !(null === IB || void 0 === IB || !IB.isConnected) && zB.contains(IB),
          uB = BB && !NB ? new Set(BB.getEnabledCandidates(jB)) : null;
        (0, wB.b)(dB), BB && (uB ? Zz(BB, jB, uB, zB) : BB.setFocus(dB, {
          byUser: !0
        }))
      },
      Tz = BB => {
        var jB;
        const zB = VB(null !== (jB = fB(BB, "x")) && void 0 !== jB ? jB : BB),
          QB = (0, RB.f)(BB).filter((BB => !(0, RB.y)(BB))),
          nB = QB.filter((BB => hB(BB.getBoundingClientRect(), zB)));
        return (nB.length > 0 ? nB : QB).sort(((BB, jB) => iz(BB.getBoundingClientRect(), jB.getBoundingClientRect())))
      },
      Pz = (BB, jB, zB) => {
        const QB = [...jB.querySelectorAll("[data-pad-row]")].filter(RB.s),
          nB = BB.getFocused(),
          dB = nB ? QB.findIndex((BB => BB.contains(nB))) : -1;
        let IB = 0,
          NB = zB > 0 ? 0 : QB.length - 1;
        if (dB >= 0 && nB) IB = Math.max(0, Tz(QB[dB]).indexOf(nB)), NB = dB + zB;
        else if (nB) {
          const BB = nB.getBoundingClientRect(),
            jB = QB.map((jB => {
              const QB = jB.getBoundingClientRect();
              return zB > 0 ? QB.top >= BB.top : QB.bottom <= BB.bottom
            }));
          NB = zB > 0 ? jB.indexOf(!0) : jB.lastIndexOf(!0)
        }
        for (let uB = NB; uB >= 0 && uB < QB.length; uB += zB) {
          const jB = Tz(QB[uB]);
          if (jB.length > 0) return void BB.setFocus(jB[Math.min(IB, jB.length - 1)], {
            byUser: !0
          })
        }
      },
      Wz = (BB, jB, zB) => {
        var QB, nB;
        const dB = null !== (QB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== QB ? QB : null,
          IB = null !== dB && void 0 !== dB && dB.closest("[data-pad-row]") ? "x" : "y",
          NB = null !== (nB = dB ? fB(dB, IB, jB) : null) && void 0 !== nB ? nB : HB(jB, IB);
        if (!NB) return;
        const uB = dB ? (0, wB.x)(dB) : null;
        if (YB(NB, IB, zB * ("y" === IB ? NB.clientHeight : NB.clientWidth) * .85), !BB || !uB) return;
        const UB = VB(NB),
          aB = BB.getEnabledCandidates(jB).filter((BB => NB.contains(BB) && hB(BB.getBoundingClientRect(), UB))),
          pB = Ez(uB, aB.map((BB => BB.getBoundingClientRect())));
        pB >= 0 && BB.setFocus(aB[pB], {
          scroll: !1,
          byUser: !0
        })
      };
    let ez = null;
    const lz = (BB, jB) => {
        var zB, QB;
        const nB = jB.querySelector("[data-pad-friends-column]"),
          dB = BB.getFocused();
        if (!nB || !dB || !nB.contains(dB)) return !1;
        const IB = BB.getEnabledCandidates(jB).filter((BB => !nB.contains(BB))),
          NB = Ez((0, wB.x)(dB), IB.map((BB => BB.getBoundingClientRect()))),
          uB = null === (zB = ez) || void 0 === zB ? void 0 : zB.deref();
        return BB.setFocus(null !== uB && void 0 !== uB && uB.isConnected ? uB : null !== (QB = IB[NB]) && void 0 !== QB ? QB : null, {
          byUser: !0
        }), !0
      },
      wz = BB => {
        const jB = (0, aB.h)(BB);
        return (0, JB.O)(jB) || Uz.u.some((BB => (0, aB.h)(BB) === jB)) ? null : jB
      },
      xz = (BB, jB) => {
        const zB = wz(jB);
        return null !== zB && BB.wasPressed(zB)
      },
      Kz = function(BB, jB, zB) {
        let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nB = (BB => {
            var jB, zB;
            return null !== (jB = null === (zB = Xz(BB)) || void 0 === zB ? void 0 : zB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== jB ? jB : null
          })(jB),
          dB = BB && nB ? new Set(BB.getEnabledCandidates(jB)) : null;
        (0, Iz.e)(), zB === Nz.o.SETTINGS && (0, uz.g)(uB.c.get("openEverythingMenuName")) ? uB.c.set({
          openEverythingMenuName: zB
        }) : (0, uz.t)((0, hz.e)("padMenuShortcut"), zB, QB), BB && dB && nB && Zz(BB, jB, dB, nB.closest("[data-pad-tabs]"))
      },
      Cz = BB => null !== BB.closest(".Dropdown-root") || null !== BB.querySelector(".Dropdown-root.is-open"),
      cz = BB => null !== (0, Vz.e)() && "popup" !== BB.layer.kind && !Xz(BB.root) && !Cz(BB.root),
      bz = (0, mB.b)(JB.cb),
      vz = (0, mB.b)(JB.cb),
      Rz = (BB, jB, zB) => {
        if (((BB, jB) => {
            const zB = (0, aB.h)("chat");
            return Dz(jB) && BB.isHeld(zB) ? "hold" === Fz.update(BB.wasPressed(zB), BB.isHeld(zB), performance.now(), yB.c[(0, rB.j)().tapHoldTime].wheelMs) && (pB.c.consumeButton(zB), UB.n.Ly(Hz.i), !0) : (Fz.release(), !1)
          })(jB, zB.layer.kind)) return !0;
        const QB = zB.root;
        for (const [IB, NB] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (jB.wasPressed((0, aB.h)(IB))) {
            const jB = Cz(QB) ? null : Xz(QB);
            if (jB) Az(BB, QB, jB, NB);
            else if (cz(zB)) {
              var nB;
              const jB = BB ? new Set(BB.getEnabledCandidates(QB)) : null;
              null !== (nB = (0, Vz.e)()) && void 0 !== nB && nB(NB) && BB && jB && Zz(BB, QB, jB, null)
            } else BB && Pz(BB, QB, NB);
            return !0
          } for (const [IB, NB, uB] of [
            ["menuPageUp", -1, bz],
            ["menuPageDown", 1, vz]
          ]) {
          const zB = (0, aB.h)(IB);
          if (jB.wasPressed(zB) && uB.reset(), uB.update(jB.isHeld(zB), performance.now())) return Wz(BB, QB, NB), !0
        }
        const dB = "popup" === zB.layer.kind;
        return xz(jB, "pause") ? (dB || (0, uz.q)() && "menu" !== zB.layer.kind || Kz(BB, QB, (0, uz.q)() ? Nz.o.SETTINGS : (0, Yz.b)()), !0) : !!xz(jB, "leaderboard") && ("home" === zB.layer.kind ? (BB => {
          const jB = [...BB.querySelectorAll("[data-pad-notifications]")].find(RB.s);
          jB && (0, wB.b)(jB)
        })(QB) : dB || Kz(BB, QB, Nz.o.LOBBY_LEADERBOARD, "inGame" === uB.c.get("gameState")), !0)
      },
      Oz = (BB, jB, zB) => {
        if (Rz(BB, jB, zB)) return !0;
        const QB = "home" === zB.layer.kind;
        if (jB.wasPressed((0, aB.h)("menuSecondary"))) {
          const jB = BB.getFocused(),
            nB = jB ? rz(jB) : null;
          if (nB) return (0, wB.b)(nB), !0;
          if (QB) {
            const jB = zB.root.querySelector("[data-pad-search] input");
            return jB && (0, RB.v)(jB, zB.root) ? (BB.setFocus(jB, {
              byUser: !0
            }), (0, wB.b)(jB)) : uB.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!QB || !xz(jB, "inventory")) && (((BB, jB) => {
          var zB, QB;
          const nB = jB.querySelector("[data-pad-friends-column]");
          if (!nB || !(0, RB.s)(nB)) return void(0, uz.t)((0, hz.e)("padMenuShortcut"), Nz.o.SOCIAL);
          if (lz(BB, jB)) return;
          const dB = null !== (zB = null === (QB = nB.querySelector("[data-pad-friends-start]")) || void 0 === QB ? void 0 : QB.getBoundingClientRect().top) && void 0 !== zB ? zB : -1 / 0,
            IB = BB.getEnabledCandidates(nB),
            NB = IB.filter((BB => BB.getBoundingClientRect().top >= dB)),
            uB = NB.length > 0 ? NB : IB,
            UB = qz(uB.map((BB => BB.getBoundingClientRect())));
          BB.setFocus(UB >= 0 ? uB[UB] : null, {
            byUser: !0
          })
        })(BB, zB.root), !0)
      },
      BQ = BB => {
        var jB, zB, QB;
        const nB = (0, wB.z)(BB);
        if (null !== nB) return nB;
        const dB = (null !== (jB = null !== (zB = null !== (QB = BB.getAttribute("aria-label")) && void 0 !== QB ? QB : BB.getAttribute("title")) && void 0 !== zB ? zB : BB.textContent) && void 0 !== jB ? jB : "").replace(/\s+/g, " ").trim();
        return dB ? `${BB.tagName}:${dB.slice(0,100)}` : null
      };
    class jQ {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(BB) {
        const jB = this.history.indexOf(BB);
        if (jB >= 0) {
          for (const BB of this.history.splice(jB + 1)) this.remembered.delete(BB);
          return !0
        }
        return this.remembered.delete(BB), this.history.push(BB), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(BB) {
        this.remembered.delete(BB);
        const jB = this.history.indexOf(BB);
        jB >= 0 && this.history.splice(jB, 1)
      }
      remember(BB, jB, zB, QB) {
        const nB = BQ(jB),
          dB = (0, wB.z)(jB),
          IB = null !== dB && ((BB, jB) => {
            let zB = 0;
            for (const QB of BB.querySelectorAll("[data-pad-key], [href]"))
              if ((QB.getAttribute("data-pad-key") === jB || QB.getAttribute("href") === jB) && (zB++, zB > 1)) return !0;
            return !1
          })(zB, dB) ? Math.max(0, this.twins(QB(), dB).indexOf(jB)) : 0;
        this.remembered.set(BB, {
          element: new WeakRef(jB),
          identity: nB,
          ordinal: IB
        })
      }
      has(BB) {
        return this.remembered.has(BB)
      }
      recall(BB, jB) {
        var zB, QB;
        const nB = this.remembered.get(BB);
        if (!nB) return null;
        const dB = nB.element.deref();
        if (dB && jB.includes(dB)) return dB;
        if (null === nB.identity) return null;
        const IB = this.twins(jB, nB.identity);
        return null !== (zB = null !== (QB = IB[nB.ordinal]) && void 0 !== QB ? QB : IB[0]) && void 0 !== zB ? zB : null
      }
      twins(BB, jB) {
        return BB.filter((BB => BQ(BB) === jB))
      }
    }
    var zQ = zB(1306);
    const QQ = BB => {
        const jB = [];
        let zB = BB;
        for (; zB && zB !== document.body;) {
          const BB = getComputedStyle(zB).zIndex;
          "auto" !== BB && jB.push(Number(BB) || 0), zB = zB.parentElement
        }
        return jB.reverse()
      },
      nQ = (BB, jB) => {
        const zB = ((BB, jB) => {
          const zB = Math.max(BB.length, jB.length);
          for (let dB = 0; dB < zB; dB++) {
            var QB, nB;
            const zB = (null !== (QB = BB[dB]) && void 0 !== QB ? QB : 0) - (null !== (nB = jB[dB]) && void 0 !== nB ? nB : 0);
            if (0 !== zB) return zB
          }
          return 0
        })(QQ(BB), QQ(jB));
        if (0 !== zB) return zB > 0;
        if (BB.contains(jB)) return !1;
        if (jB.contains(BB)) return !0;
        const QB = BB.compareDocumentPosition(jB);
        return !!(QB & Node.DOCUMENT_POSITION_PRECEDING) || !(QB & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      dQ = (BB, jB) => {
        var zB;
        return null !== (zB = nQ(BB.root, jB.root)) && void 0 !== zB ? zB : BB.order > jB.order
      },
      IQ = (BB, jB) => jB.some((jB => !jB.contains(BB) && !BB.contains(jB) && !0 === nQ(jB, BB)));
    let NQ = null,
      uQ = null,
      UQ = -1;
    const aQ = () => {
        var BB;
        const jB = null === (BB = document.timeline) || void 0 === BB ? void 0 : BB.currentTime,
          zB = "number" === typeof jB ? jB : null;
        if (null !== zB && zB === uQ && UQ === (0, zQ.d)()) return NQ;
        let QB = null;
        const nB = [],
          dB = [...document.querySelectorAll("[data-pad-covers]")].filter(RB.s);
        for (const IB of (0, zQ.g)()) {
          const BB = IB.getRoot(),
            jB = !!BB && (0, RB.s)(BB) && !IQ(BB, dB);
          if (IB.shown && !jB && nB.push(IB), IB.shown = jB, !BB || !jB) continue;
          const zB = {
            layer: IB,
            root: BB,
            order: IB.order
          };
          QB && !dQ(zB, QB) || (QB = zB)
        }
        NQ = QB, uQ = zB, UQ = (0, zQ.d)();
        for (const IB of nB)(0, zQ.h)(IB);
        return NQ
      },
      pQ = () => {
        const BB = aQ();
        return !(null === BB || void 0 === BB || !BB.layer.close) && (BB.layer.close(), uQ = null, !0)
      },
      rQ = () => {
        var BB, jB;
        return null !== (BB = null === (jB = aQ()) || void 0 === jB ? void 0 : jB.root) && void 0 !== BB ? BB : null
      },
      sQ = BB => BB ? {
        ...BB,
        root: rQ()
      } : null;
    let JQ = null,
      mQ = null,
      yQ = (0, rB.j)().menuNavigation,
      kQ = null;
    const GQ = new tB;
    let LQ = null;
    UB.n.subscribe(rB.g, (() => {
      const BB = (0, rB.j)().menuNavigation;
      BB !== yQ && (yQ = BB, JQ = null, mQ = null)
    }));
    const gQ = () => {
        var BB;
        return null !== (BB = JQ) && void 0 !== BB ? BB : (0, rB.j)().menuNavigation
      },
      tQ = BB => {
        if (iQ()) {
          if (kQ = sQ(BB), "hybrid" === gQ()) return GQ.lock(), void(mQ = mQ ? null : rQ());
          JQ = "focus" === gQ() ? "cursor" : "focus"
        }
      },
      SQ = () => {
        const BB = kQ;
        return kQ = null, BB
      };
    let MQ = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const EQ = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const zB = MQ.root === BB,
          QB = zB ? MQ.firstSeenMs : jB,
          nB = MQ.has || jB - QB > 1e3;
        return (!zB || !nB || jB - MQ.atMs > 250) && (MQ = {
          root: BB,
          firstSeenMs: QB,
          atMs: jB,
          has: (0, RB.l)(BB)
        }), MQ.has
      },
      iQ = () => {
        const BB = rQ();
        return null !== BB && EQ(BB)
      },
      qQ = () => {
        const BB = aQ();
        return mQ && (null === BB || void 0 === BB ? void 0 : BB.root) !== mQ && (mQ = null), (BB => {
          let {
            mode: jB,
            hasLayer: zB,
            hasCandidates: QB,
            hybridCursorEngaged: nB
          } = BB;
          return zB ? "cursor" !== jB && QB() ? "hybrid" === jB && nB ? "cursor" : "focus" : "cursor" : null
        })({
          mode: gQ(),
          hasLayer: null !== BB,
          hasCandidates: () => null !== BB && EQ(BB.root),
          hybridCursorEngaged: null !== mQ
        })
      },
      fQ = () => "hybrid" === gQ() && iQ(),
      oQ = "pad-focused";
    var HQ = zB(4666),
      DQ = zB(5101);
    const FQ = "[data-pad-destructive]",
      YQ = `${FQ}, [data-pad-back]`,
      VQ = BB => ({
        rect: BB.getBoundingClientRect(),
        destructive: BB.matches(FQ),
        closes: null !== BB.closest("[data-pad-close-button]"),
        unavailable: BB.matches("[data-pad-unavailable]")
      }),
      hQ = BB => {
        let {
          destructive: jB,
          closes: zB,
          unavailable: QB
        } = BB;
        return jB ? zB ? 2 : 3 : QB ? 1 : 0
      },
      XQ = BB => {
        let jB = -1;
        for (let zB = 0; zB < BB.length; zB++) {
          if (jB < 0) {
            jB = zB;
            continue
          }
          const QB = BB[zB],
            nB = BB[jB];
          hQ(QB) === hQ(nB) ? iz(QB.rect, nB.rect) < 0 && (jB = zB) : hQ(QB) < hQ(nB) && (jB = zB)
        }
        return jB
      },
      ZQ = "[data-pad-tabs]",
      AQ = "[data-pad-tab]",
      TQ = (BB, jB) => {
        const zB = BB.querySelector(`${AQ}[data-pad-selected='true']`);
        return zB && jB.includes(zB) ? zB : null
      },
      PQ = (BB, jB) => {
        let zB = jB;
        for (let QB = jB.parentElement; QB && !QB.contains(BB); QB = QB.parentElement) zB = QB;
        return zB
      };
    class WQ {
      constructor() {
        this.contentReturn = null
      }
      redirect(BB, jB, zB, QB) {
        var nB, dB;
        const IB = BB.closest(ZQ),
          NB = jB.closest(ZQ);
        var uB;
        if (NB && NB !== IB) return IB || (this.contentReturn = new WeakRef(BB)), null !== (uB = TQ(NB, zB)) && void 0 !== uB ? uB : jB;
        if (!IB || NB) return jB;
        const UB = PQ(BB, jB),
          aB = null === (nB = this.contentReturn) || void 0 === nB ? void 0 : nB.deref();
        return aB && UB.contains(aB) && zB.includes(aB) ? aB : null !== (dB = this.pickRegionStart(UB, fB(jB, "y", QB), zB)) && void 0 !== dB ? dB : jB
      }
      findTabContent(BB, jB, zB) {
        const QB = BB.closest(ZQ);
        if (!QB || !BB.matches(AQ) || QB.contains(jB)) return null;
        const nB = jB.closest(ZQ);
        if (nB && Number(nB.dataset.padTabs) <= Number(QB.dataset.padTabs)) return null;
        const dB = PQ(BB, jB);
        return zB.some((BB => dB.contains(BB) && !BB.closest(YQ))) || !jB.closest(YQ) ? dB : null
      }
      pickContentStart(BB, jB, zB) {
        return this.contentReturn = null, this.pickRegionStart(BB, fB(BB, "y", zB), jB)
      }
      pickReplacedContentStart(BB, jB, zB, QB) {
        if (!jB.contains(BB)) return null;
        const nB = PQ(jB, BB),
          dB = zB.filter((BB => jB.contains(BB) && !nB.contains(BB) && !BB.closest(YQ)));
        return 0 === dB.length ? null : (this.contentReturn = null, this.pickRegionStart(jB, fB(dB[0], "y", QB), dB))
      }
      backToStrip(BB, jB, zB) {
        if (BB.closest(ZQ)) return null;
        const QB = Xz(zB);
        for (const nB of zB.querySelectorAll(ZQ)) {
          if (Number(nB.dataset.padTabs) <= 1 || nB === QB) continue;
          const dB = TQ(nB, jB),
            IB = dB ? PQ(BB, nB).parentElement : null;
          if (dB && IB && IB !== zB && zB.contains(IB)) return this.contentReturn = new WeakRef(BB), dB
        }
        return null
      }
      pickRegionStart(BB, jB, zB) {
        const QB = VB(jB),
          nB = BB => {
            const jB = zB.filter((jB => BB.contains(jB) && !jB.closest(ZQ) && hB(jB.getBoundingClientRect(), QB))),
              nB = XQ(jB.map(VQ));
            return nB >= 0 ? jB[nB] : null
          };
        for (const dB of (0, RB.h)(BB)) {
          const BB = nB(dB);
          if (BB) return BB
        }
        for (const dB of BB.querySelectorAll(ZQ)) {
          const BB = TQ(dB, zB);
          if (BB) return BB
        }
        return nB(BB)
      }
    }
    const eQ = "[data-pad-default-focus], .Dropdown-option.is-selected",
      lQ = ".Dropdown-root.is-open > .Dropdown-menu",
      wQ = "[data-pad-no-step-in]",
      xQ = "[data-pad-tabs]",
      KQ = "[data-pad-press-area]",
      CQ = BB => {
        let jB = BB;
        for (let zB = 0; jB && zB <= 4; zB++, jB = jB.parentElement) {
          const zB = jB.querySelector(".CircleInfo");
          if (zB) return jB === BB || jB.querySelectorAll(RB.e).length <= 1 ? zB : null;
          if (jB !== BB && jB.querySelectorAll(RB.e).length > 1) return null
        }
        return null
      },
      cQ = (BB, jB, zB) => {
        (0, wB.q)(BB, jB, zB);
        const QB = null !== BB && void 0 !== BB && BB.isConnected ? CQ(BB) : null,
          nB = CQ(jB);
        QB !== nB && (0, wB.q)(QB, nB, nB ? (0, wB.x)(nB) : zB, {
          leaveBelow: BB,
          enterBelow: jB
        })
      },
      bQ = BB => BB.getBoundingClientRect(),
      vQ = (BB, jB, zB) => {
        const QB = new Set(zB);
        for (let nB = BB; nB; nB = nB === jB ? null : nB.parentElement)
          if (QB.has(nB)) return nB;
        return null
      },
      RQ = (BB, jB) => !BB.root || BB.root === jB || jB.matches(lQ) && BB.root.contains(jB);
    const OQ = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new jQ, this.tabStripNav = new WQ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, mB.b)(JB.y), this.dpadRepeats = new Map(JB.J.map((BB => [BB, (0, mB.b)(JB.N)]))), this.stickRepeat = new JB.c((0, mB.b)(JB.gb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const BB = pB.c.register({
            name: "focus",
            isActive: () => (0, sB.m)() && "focus" === qQ(),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: BB => (0, pB.f)(BB) || BB === (0, aB.h)("menuConfirm") && (0, wB.F)((0, sB.e)())
          }),
          jB = (0, zQ.l)((BB => {
            const jB = (0, zQ.r)(BB);
            null === BB.memoryKey && this.memory.forget(jB), jB === this.layerKey && (this.layerKey = null)
          }));
        let zB = -1 / 0;
        const QB = IB.f.onFrame((BB => {
            (0, sB.m)() || BB.timestampMs - zB < 100 || (zB = BB.timestampMs, aQ())
          })),
          nB = BB => {
            BB.isTrusted && BB.target instanceof Element && IB.f.getActivePad() && this.noteChosenStop(BB.target)
          };
        return document.addEventListener("click", nB, !0), () => {
          BB(), jB(), QB(), document.removeEventListener("click", nB, !0), this.deactivate()
        }
      }
      noteChosenStop(BB) {
        var jB, zB;
        const QB = aQ();
        if (!QB || !QB.root.contains(BB)) return;
        const nB = null !== (jB = null === (zB = BB.closest(".Dropdown-root")) || void 0 === zB ? void 0 : zB.querySelector(".Dropdown-control")) && void 0 !== jB ? jB : BB,
          dB = vQ(nB, QB.root, this.getEnabledCandidates(QB.root));
        if (!dB) return;
        const IB = (0, zQ.r)(QB.layer);
        IB === this.layerKey && QB.root === this.layerRoot || this.beginLayer(QB, IB), this.wasActive ? this.setFocus(dB, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = dB, this.lastFocusedCentre = (0, wB.x)(dB), this.rememberFocus(dB), this.notify())
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
          this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && cQ(this.focused, null, (0, wB.x)(this.focused)), this.notify()
        }
      }
      setFocus(BB) {
        var jB;
        let {
          scroll: zB = !0,
          byUser: QB = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (QB && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), BB === this.focused) return;
        const nB = null !== (jB = this.focused) && void 0 !== jB && jB.isConnected ? this.focused : null;
        if (this.focused = BB, BB) {
          zB && (BB.classList.add(oQ), BB.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), QB && ((BB, jB) => {
            const zB = jB.closest("[data-pad-friends-column]");
            zB && BB && !zB.contains(BB) && (ez = new WeakRef(BB))
          })(nB, BB);
          const jB = (0, wB.x)(BB);
          this.lastFocusedCentre = jB, this.movedInLayer && this.rememberFocus(BB), cQ(nB, BB, jB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && (0, wB.b)(BB)
        } else nB && cQ(nB, null, (0, wB.x)(nB));
        this.notify()
      }
      rememberFocus(BB) {
        const jB = this.layerRoot;
        this.layerKey && jB && this.memory.remember(this.layerKey, BB, jB, (() => this.getEnabledCandidates(jB)))
      }
      noteCursorActivation(BB) {
        const jB = aQ();
        if (!jB || !jB.root.contains(BB)) return;
        const zB = this.getEnabledCandidates(jB.root),
          QB = new Set(zB);
        let nB = BB;
        for (; nB && !QB.has(nB);) nB = nB === jB.root ? null : nB.parentElement;
        if (!(nB instanceof HTMLElement)) return;
        const dB = (0, zQ.r)(jB.layer);
        this.memory.enter(dB), this.memory.remember(dB, nB, jB.root, (() => zB))
      }
      notePageEnteredByCursor(BB) {
        return this.memory.enter(BB)
      }
      recallStop(BB, jB) {
        return this.findRemembered(BB, jB)
      }
      focusWhenFound(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: BB,
          untilMs: performance.now() + jB,
          holdWhile: zB
        }
      }
      getEnabledCandidates(BB) {
        return (0, RB.f)(BB).filter((BB => !(0, RB.y)(BB)))
      }
      onFrame(BB) {
        var jB;
        const zB = aQ();
        if (!zB) return;
        const QB = null !== (jB = this.findOpenDropdown(zB)) && void 0 !== jB ? jB : zB,
          nB = performance.now(),
          dB = (0, zQ.r)(QB.layer);
        if (dB !== this.layerKey || QB.root !== this.layerRoot) {
          const jB = this.focused;
          if (null !== this.layerKey && QB.root === this.layerRoot && jB && (0, RB.v)(jB, QB.root)) this.continueLayer(dB, jB), this.wasActive || this.resume(QB.root, nB);
          else {
            const jB = !this.wasActive && !BB.wokeDevice,
              IB = "death" === this.layerKind || jB,
              NB = this.enterLayer(QB, dB);
            "popup" !== QB.layer.kind || QB !== zB || NB ? "menu" === QB.layer.kind && IB && "inGame" === uB.c.get("gameState") && !(0, Iz.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = nB + HQ.d) : (this.pressGuardExtends = jB, this.pressGuardUntilMs = nB + (jB ? HQ.d : IB ? 500 : 250))
          }
        } else this.wasActive || this.resume(QB.root, nB);
        if (this.layerKind = QB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(QB.root), this.validateFocus(QB, nB), nB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, aB.h)("menuConfirm")) || BB.wasPressed((0, aB.h)("menuBack"))) && (this.pressGuardUntilMs = nB + HQ.d), nB >= this.pressGuardUntilMs && this.handleButtons(BB, QB)) return;
        const IB = "hybrid" === gQ();
        if (IB && (BB => {
            const jB = rQ();
            return jB !== LQ && (LQ = jB, GQ.lock()), GQ.update(BB, (0, rB.j)().moveDeadzone)
          })(BB.leftStick)) return NB = this.getHandoff(), kQ = sQ(NB), mQ = rQ(), void pB.c.handOffHeldInput();
        var NB;
        this.handleDirections(BB, QB, nB, !IB), this.handleScroll(BB, QB)
      }
      findOpenDropdown(BB) {
        const jB = BB.root.querySelector(lQ);
        if (!jB || !(0, RB.s)(jB)) return null;
        let zB = this.dropdownLayers.get(jB);
        return zB || (this.dropdownLayerCounter++, zB = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: BB.layer.kind,
          getRoot: () => jB,
          close: () => {
            (0, wB.k)(jB)
          },
          memoryKey: null
        }, this.dropdownLayers.set(jB, zB)), {
          layer: zB,
          root: jB,
          order: BB.order
        }
      }
      focusPointedStop(BB) {
        const jB = (0, sB.e)(),
          zB = jB ? document.elementFromPoint(jB.x, jB.y) : null;
        if (!zB || !BB.contains(zB)) return;
        const QB = vQ(zB, BB, this.getEnabledCandidates(BB));
        QB && this.setFocus(QB, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(BB, jB) {
        const zB = this.beginLayer(BB, jB),
          QB = SQ();
        return QB && RQ(QB, BB.root) ? (this.takeOver(BB.root, QB, this.enteredLayerAtMs), zB) : (this.restoreLayerFocus(BB.root, zB), zB)
      }
      beginLayer(BB, jB) {
        return this.layerKey = jB, this.layerRoot = BB.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(jB)
      }
      restoreLayerFocus(BB, jB) {
        const zB = jB && this.layerKey ? this.findRemembered(BB, this.layerKey) : null;
        this.restoredFromMemory = null !== zB, this.setFocus(null !== zB && void 0 !== zB ? zB : this.pickInitial(BB, {
          waitForContent: !0
        }))
      }
      continueLayer(BB, jB) {
        this.layerKey = BB;
        const zB = this.memory.enter(BB);
        this.restoreOnFocusLoss = zB, this.movedInLayer && !zB && this.rememberFocus(jB)
      }
      resume(BB, jB) {
        var zB;
        const QB = SQ();
        QB && RQ(QB, BB) ? this.takeOver(BB, QB, jB) : null !== (zB = this.focused) && void 0 !== zB && zB.isConnected && cQ(null, this.focused, (0, wB.x)(this.focused))
      }
      pickPreferred(BB) {
        var jB;
        return null !== (jB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== jB ? jB : this.pickInitial(BB, {
          waitForContent: !0
        })
      }
      findRemembered(BB, jB) {
        return this.memory.has(jB) ? this.memory.recall(jB, this.getEnabledCandidates(BB)) : null
      }
      getHandoff() {
        var BB, jB, zB;
        const QB = null !== (BB = this.focused) && void 0 !== BB && BB.isConnected ? this.focused : null,
          nB = null !== (jB = this.layerRoot) && void 0 !== jB && jB.isConnected ? this.layerRoot : null;
        return {
          point: QB ? (0, wB.x)(QB) : null !== (zB = this.lastFocusedCentre) && void 0 !== zB ? zB : this.getLayerStartPoint(nB),
          element: QB,
          direction: null
        }
      }
      getLayerStartPoint(BB) {
        if (!BB) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const jB = this.pickInitial(BB, {
          includeDisabled: !0
        });
        return (0, wB.x)(null !== jB && void 0 !== jB ? jB : BB)
      }
      takeOver(BB, jB, zB) {
        const {
          element: QB,
          direction: nB,
          point: dB
        } = jB, IB = QB instanceof HTMLElement && (0, RB.v)(QB, BB) ? QB : null;
        if (!nB) {
          const jB = this.focused;
          return IB ? this.setFocus(IB, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(BB, dB), void(this.focused && this.focused === jB && this.focused.isConnected && cQ(null, this.focused, (0, wB.x)(this.focused)))
        }
        if (this.dpadRepeats.get(nB).update(!0, zB), IB) return this.setFocus(IB, {
          scroll: !1,
          byUser: !0
        }), void this.move(BB, nB, zB, !0);
        const NB = this.getEnabledCandidates(BB),
          uB = NB.map(bQ),
          UB = Lz(new DOMRect(dB.x, dB.y, 0, 0), uB, nB),
          aB = UB >= 0 ? UB : Ez(dB, uB);
        this.setFocus(aB >= 0 ? NB[aB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      focusNearest(BB, jB) {
        const zB = this.getEnabledCandidates(BB),
          QB = Ez(jB, zB.map(bQ));
        this.setFocus(QB >= 0 ? zB[QB] : this.pickInitial(BB), {
          byUser: !0
        })
      }
      pickDefault(BB) {
        let {
          includeDisabled: jB = !1,
          exclude: zB = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const QB = [...BB.querySelectorAll(eQ)].filter((QB => (null === zB || void 0 === zB || !zB.has(QB)) && (jB ? (0, RB.A)(QB, BB) : (0, RB.v)(QB, BB)))),
          nB = XQ(QB.map(VQ));
        return nB >= 0 ? QB[nB] : null
      }
      pickNewAreaStart(BB, jB) {
        const zB = [...BB.querySelectorAll(KQ)].filter(RB.s);
        for (const QB of [...(0, RB.h)(BB), ...zB]) {
          if (jB.has(QB)) continue;
          const BB = this.getEnabledCandidates(QB),
            zB = XQ(BB.map(VQ));
          if (zB >= 0) return BB[zB]
        }
        return null
      }
      pickInitial(BB) {
        let {
          includeDisabled: jB = !1,
          waitForContent: zB = !1,
          enteredAtMs: QB = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nB = this.pickDefault(BB, {
          includeDisabled: jB
        });
        if (nB) return nB;
        const dB = BB => jB ? (0, RB.f)(BB) : this.getEnabledCandidates(BB);
        let IB = [];
        for (const rB of (0, RB.h)(BB))
          if (IB = dB(rB), IB.length > 0) break;
        if (0 === IB.length) {
          if (zB && performance.now() - QB < 1e4 && (0, RB.p)(BB)) return null;
          IB = dB(BB)
        }
        const NB = IB.map(bQ),
          uB = VB(null),
          UB = IB.filter(((BB, jB) => hB(NB[jB], uB))),
          aB = UB.length > 0 ? UB : IB,
          pB = XQ(aB.map(VQ));
        return pB >= 0 ? aB[pB] : null
      }
      validateFocus(BB, jB) {
        if (this.pendingFocus) {
          var zB, QB;
          const nB = this.pendingFocus.find();
          if (nB && (0, RB.v)(nB, BB.root)) return this.pendingFocus = null, void this.setFocus(nB, {
            byUser: !0
          });
          jB > this.pendingFocus.untilMs && (null === (zB = (QB = this.pendingFocus).holdWhile) || void 0 === zB || !zB.call(QB)) && (this.pendingFocus = null)
        }
        const nB = this.focused,
          dB = !!nB && (0, RB.v)(nB, BB.root);
        if (!(!dB && nB && nB === this.lastActivated && jB - this.lastActivatedAtMs < 5e3 && BB.root.contains(nB) && (0, RB.s)(nB) && (0, RB.y)(nB))) {
          if (!dB && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = jB, void this.restoreLayerFocus(BB.root, !0);
          if ((!dB || !this.movedInLayer && !this.scrolledInLayer) && !(jB - this.lastRefocusCheckMs < (dB ? 200 : 50)))
            if (this.lastRefocusCheckMs = jB, dB) {
              const zB = jB - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(BB.root) : null,
                QB = null !== zB && void 0 !== zB ? zB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
              QB && QB !== nB && this.setFocus(QB)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const jB = this.pendingFocus;
                return this.focusNearest(BB.root, this.lastFocusedCentre), void(this.pendingFocus = jB)
              }
              this.setFocus(this.pickPreferred(BB.root))
            }
        }
      }
      handleButtons(BB, jB) {
        if (BB.wasPressed((0, aB.h)("menuToggleCursor"))) return tQ(this.getHandoff()), !0;
        if (BB.wasPressed((0, aB.h)("menuBack"))) {
          const BB = (0, wB.k)(jB.root);
          return BB ? this.setFocus(BB, {
            byUser: !0
          }) : lz(this, jB.root) || ((0, wB.f)(jB.root) ? this.returnToOpener(jB.root) : this.backToStrip(jB.root) || pQ()), !0
        }
        const zB = (0, aB.h)("menuConfirm");
        var QB, nB;
        BB.wasPressed(zB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (QB = null === (nB = this.focused) || void 0 === nB ? void 0 : nB.getAttribute("data-pad-repeat")) && void 0 !== QB ? QB : null, this.confirmRepeated = BB.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (BB.wasReleased(zB)) {
          const BB = this.confirmPressedOn;
          if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !(0, RB.y)(BB)) {
            const zB = BB.matches("[data-pad-tab]") ? BB.closest(xQ) : null;
            zB ? this.enterTab(BB, zB, jB.root, performance.now()) : this.activate(BB)
          }
          return !0
        }
        return this.repeatConfirm(BB, zB), Oz(this, BB, jB)
      }
      repeatConfirm(BB, jB) {
        const zB = this.confirmPressedOn;
        zB && null !== this.confirmRepeatKey && BB.isHeld(jB) && (zB === this.focused && zB.isConnected && !(0, RB.y)(zB) && zB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? zB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(zB)) : this.confirmRepeatKey = null)
      }
      backToStrip(BB) {
        const jB = this.focused;
        if (!(0, rB.j)().menuBackToCategories) return !1;
        const zB = null !== jB && void 0 !== jB && jB.isConnected ? this.tabStripNav.backToStrip(jB, this.getEnabledCandidates(BB), BB) : null;
        return zB && this.setFocus(zB, {
          byUser: !0
        }), null !== zB
      }
      returnToOpener(BB) {
        const jB = this.lastActivatedKey;
        jB && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var zB;
          return null !== (zB = this.getEnabledCandidates(BB).find((BB => (0, wB.z)(BB) === jB))) && void 0 !== zB ? zB : null
        })))
      }
      activate(BB) {
        var jB;
        if ((0, DQ.d)(BB) || (0, wB.B)(BB)) return;
        this.lastActivatedKey = null !== (jB = (0, wB.z)(BB)) && void 0 !== jB ? jB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
        const zB = this.layerRoot;
        if (zB) {
          const jB = new Set(zB.querySelectorAll(eQ)),
            QB = new Set(zB.querySelectorAll(`[data-pad-initial-area], ${KQ}`)),
            nB = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var nB;
            return (0, RB.v)(BB, zB) ? null : null !== (nB = this.pickDefault(zB, {
              exclude: jB
            })) && void 0 !== nB ? nB : this.pickNewAreaStart(zB, QB)
          }), 5e3, (() => BB.isConnected && (0, RB.y)(BB) && performance.now() - nB < 6e4))
        }(0, wB.b)(BB), (0, wB.g)(BB)
      }
      handleDirections(BB, jB, zB, QB) {
        const nB = Dz(jB.layer.kind) ? (0, aB.h)("chat") : null;
        for (const NB of JB.J) {
          this.dpadRepeats.get(NB).update(BB.isHeld(NB), zB) && (NB !== nB || BB.wasPressed(NB)) && this.move(jB.root, NB, zB, !0)
        }
        const dB = QB ? (0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          IB = this.stickRepeat.update((0, JB.ib)(dB), zB);
        if (IB && this.move(jB.root, IB, zB, !0), this.retryMove && zB >= this.retryMove.atMs) {
          const {
            direction: BB
          } = this.retryMove;
          this.retryMove = null, this.move(jB.root, BB, zB, !1)
        }
      }
      move(BB, jB, zB, QB) {
        var nB;
        let dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (nB = this.tabOpenWait) || void 0 === nB ? void 0 : nB.wait) && jB === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const IB = this.focused;
        if (!IB || !IB.isConnected) {
          const jB = this.pickInitial(BB);
          return void(jB && this.setFocus(jB, {
            byUser: !0
          }))
        }
        const NB = "Left" === jB || "Right" === jB,
          uB = NB ? (0, DQ.d)(IB) : null;
        if (uB) return void uB.adjust("Left" === jB ? -1 : 1);
        const UB = BB => null !== BB.closest("[data-pad-friends-column]"),
          aB = UB(IB),
          pB = bQ(IB),
          rB = NB || IB.closest(xQ) ? null : (BB => {
            const jB = new Map;
            return zB => {
              const QB = zB.closest(xQ);
              if (!QB) return !1;
              let nB = jB.get(QB);
              if (void 0 === nB) {
                const zB = bQ(QB);
                nB = Gz(BB, zB) && (zB.right <= BB.left || zB.left >= BB.right), jB.set(QB, nB)
              }
              return nB
            }
          })(pB),
          sB = null !== IB.closest(wQ),
          JB = this.getEnabledCandidates(BB).filter((BB => BB !== IB && (NB || UB(BB) === aB) && !(null !== rB && void 0 !== rB && rB(BB)) && (sB || !BB.closest(wQ)))),
          mB = JB.map(bQ),
          yB = fB(IB, "y", BB),
          kB = VB(yB);
        if (!dB && !hB(pB, kB)) {
          const BB = JB.filter(((BB, jB) => hB(mB[jB], kB)));
          if (BB.length > 0) {
            const jB = {
              x: kB.left + kB.width / 2,
              y: kB.top + kB.height / 2
            };
            return void this.setFocus(BB[Ez(jB, BB.map(bQ))], {
              byUser: !0
            })
          }
        }
        const GB = NB ? ((BB, jB, zB) => {
            const QB = bQ(BB),
              nB = BB.closest(xQ),
              dB = nB ? bQ(nB) : null;
            return jB.map(((jB, IB) => {
              const NB = zB[IB];
              if (NB.bottom > QB.top && NB.top < QB.bottom) return !0;
              const uB = jB.closest(xQ);
              if (nB && dB) return uB !== nB && (null !== uB || NB.bottom <= dB.top || NB.top >= dB.bottom);
              if (uB) return !Gz(QB, bQ(uB));
              let UB = BB;
              for (let zB = BB.parentElement; zB && !zB.contains(jB); zB = zB.parentElement) UB = zB;
              const aB = bQ(UB);
              return NB.right > aB.left && NB.left < aB.right
            }))
          })(IB, JB, mB) : void 0,
          LB = NB && !IB.closest(xQ) ? (BB => BB.map((BB => !BB.closest(YQ))))(JB) : void 0,
          gB = ((BB, jB) => {
            const zB = [];
            for (let nB = BB; nB; nB = nB.parentElement) zB.push(nB);
            const QB = new Map;
            return zB.forEach(((BB, jB) => {
              QB.set(BB, zB.length - 1 - jB)
            })), jB.map((BB => {
              for (let jB = BB; jB; jB = jB.parentElement) {
                const BB = QB.get(jB);
                if (void 0 !== BB) return BB
              }
              return -1
            }))
          })(IB, JB),
          tB = NB ? "x" : "y",
          SB = fB(IB, tB, BB);
        let MB = Lz(pB, mB, jB, gB, GB, LB);
        if (MB >= 0 && SB && !SB.contains(JB[MB])) {
          const BB = JB.flatMap(((BB, jB) => SB.contains(BB) ? [jB] : [])),
            zB = jB => jB && BB.map((BB => jB[BB])),
            QB = Lz(pB, BB.map((BB => mB[BB])), jB, BB.map((BB => gB[BB])), zB(GB), zB(LB));
          MB = QB >= 0 ? BB[QB] : MB
        }
        if (MB >= 0) return void this.moveTo(IB, JB[MB], JB, BB, jB, dB);
        if (!QB) return;
        const EB = "Right" === jB || "Down" === jB ? 1 : -1;
        if (SB && FB(SB, tB, EB)) {
          const BB = "y" === tB ? SB.clientHeight : SB.clientWidth;
          YB(SB, tB, EB * BB * .5), this.retryMove = {
            direction: jB,
            atMs: zB + 80
          }
        }
      }
      moveTo(BB, jB, zB, QB, nB, dB) {
        const IB = this.tabStripNav.findTabContent(BB, jB, zB);
        IB && "true" !== BB.dataset.padSelected ? this.openTab(BB, IB, QB, nB) : dB && !IB || this.setFocus(this.tabStripNav.redirect(BB, jB, zB, QB), {
          byUser: !0
        })
      }
      openTab(BB, jB, zB, QB) {
        const nB = jB.parentElement;
        (0, wB.b)(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : jB.isConnected ? this.tabStripNav.pickContentStart(jB, this.getEnabledCandidates(zB), zB) : nB ? this.tabStripNav.pickReplacedContentStart(BB, nB, this.getEnabledCandidates(zB), zB) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: QB
        }
      }
      enterTab(BB, jB, zB, QB) {
        this.move(zB, (BB => {
          const jB = [...BB.querySelectorAll(AQ)].filter((jB => jB.closest(ZQ) === BB));
          if (jB.length >= 2) {
            const BB = jB[0].getBoundingClientRect(),
              zB = jB[1].getBoundingClientRect();
            return Math.abs(zB.top - BB.top) > Math.abs(zB.left - BB.left) ? "Right" : "Down"
          }
          const zB = BB.getBoundingClientRect();
          return zB.height > zB.width ? "Right" : "Down"
        })(jB), QB, !1, !0), this.focused !== BB || this.pendingFocus || this.activate(BB)
      }
      handleScroll(BB, jB) {
        const zB = (0, JB.k)(BB.rightStick, .2);
        if (0 === zB.x && 0 === zB.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const QB = BB.dtMs / 1e3;
        for (const dB of ["x", "y"]) {
          var nB;
          const BB = zB[dB];
          if (0 === BB) continue;
          const IB = null !== (nB = fB(this.focused, dB, jB.root)) && void 0 !== nB ? nB : HB(jB.root, dB);
          if (!IB) continue;
          const NB = Math.sign(BB) * BB * BB * 1500 * QB + this.scrollRemainder[dB],
            uB = Math.trunc(NB);
          this.scrollRemainder[dB] = NB - uB, 0 !== uB && (YB(IB, dB, uB), this.scrolledInLayer = !0)
        }
      }
    };
    var Bn = zB(8184);
    var jn = zB(8727);
    const zn = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Qn = {
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
          ...zn,
          minIntervalMs: 1e3
        },
        preview: {
          ...zn,
          minIntervalMs: 0
        }
      };
    const nn = new class {
        constructor(BB) {
          this.deps = BB, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = BB => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", BB))
          }
        }
        play(BB, jB) {
          const zB = Qn[BB];
          if (!this.deps.isVibrationOn() || zB.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const QB = this.lastPlayedMs[BB];
          if (void 0 !== QB && jB - QB < zB.minIntervalMs) return !1;
          const nB = this.deps.getActuator();
          if (!nB) return !1;
          this.lastPlayedMs[BB] = jB;
          const {
            duration: dB,
            strongMagnitude: IB,
            weakMagnitude: NB
          } = zB;
          try {
            nB.playEffect("dual-rumble", {
              duration: dB,
              strongMagnitude: IB,
              weakMagnitude: NB
            }).catch(this.logFailure)
          } catch (uB) {
            this.logFailure(uB)
          }
          return !0
        }
      }({
        getActuator: () => (BB => {
          const jB = null === BB || void 0 === BB ? void 0 : BB.vibrationActuator;
          return "function" === typeof(null === jB || void 0 === jB ? void 0 : jB.playEffect) ? jB : null
        })(IB.f.getActiveGamepad()),
        isVibrationOn: () => (0, rB.j)().vibration,
        isPadInUse: sB.m
      }),
      dn = BB => {
        nn.play(BB, performance.now())
      };
    var In = zB(8187),
      Nn = zB(3015),
      un = zB(125),
      Un = zB(41),
      an = zB(701);
    class pn {
      constructor(BB) {
        this.deps = BB
      }
      check() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const jB = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!jB) return "skipped";
        const zB = BB ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === zB || this.deps.readReportedVisitId() === zB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(zB), this.deps.JJ(jB, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const rn = "controllerUsageReportedVisit";
    var sn = zB(1381),
      Jn = zB(1778),
      mn = zB(690),
      yn = zB(1471),
      kn = zB(1284);
    const Gn = BB => ({
        translationKey: `controller:${BB}`
      }),
      Ln = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Gn("padButtonView"),
        Menu: Gn("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Gn("padButtonDpadUp"),
        Down: Gn("padButtonDpadDown"),
        Left: Gn("padButtonDpadLeft"),
        Right: Gn("padButtonDpadRight"),
        Home: Gn("padButtonHome"),
        LeftStick: Gn("padButtonLeftStick"),
        RightStick: Gn("padButtonRightStick")
      },
      gn = {
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
          View: Gn("padButtonCreate"),
          Menu: Gn("padButtonOptions")
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
      tn = (BB, jB) => {
        var zB;
        const QB = null !== (zB = gn[BB][jB]) && void 0 !== zB ? zB : Ln[jB];
        return "string" === typeof QB ? QB : (0, nB.z)(kn.c.get().getCurrentLanguageCode(), QB.translationKey)
      },
      Sn = BB => {
        let {
          glyph: jB,
          family: zB,
          className: QB
        } = BB;
        const nB = (0, sB.F)(),
          dB = null !== zB && void 0 !== zB ? zB : nB,
          IB = (0, In.f)(dB, jB);
        return (0, TB.jsx)("span", {
          className: AB()("ControllerGlyph", QB),
          role: "img",
          "aria-label": tn(dB, jB),
          style: {
            "--pad-glyph-mask": `url(${IB})`,
            "--pad-glyph-aspect": (0, In.b)(dB, jB)
          }
        })
      };
    var Mn = zB(1952);
    const En = BB => {
      let {
        action: jB
      } = BB;
      const {
        t: zB
      } = (0, nB.D)();
      switch (jB.kind) {
        case "reload":
          return (0, TB.jsx)("span", {
            children: zB("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, TB.jsx)(Mn.e, {
            text: jB.description ? [{
              icon: jB.icon
            }, ` ${jB.description}`] : [{
              icon: jB.icon
            }]
          });
        case "touchButton":
          return (0, TB.jsx)(Mn.e, {
            text: jB.label
          })
      }
    };
    var qn = zB(8730);
    const fn = BB => {
      let {
        hold: jB
      } = BB;
      return (0, TB.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${jB.holdMs}ms`
        },
        children: (0, TB.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, jB.id)
    };
    var Hn = zB(8750),
      Dn = zB(8759),
      Fn = zB(8761),
      Yn = zB(8747);
    const Vn = () => {
        const {
          gameState: BB
        } = (0, uB.m)(["gameState"]), jB = (0, sB.B)(), [QB, nB] = (0, XB.useState)(!1), [dB, IB] = (0, XB.useState)(!1);
        return (0, XB.useEffect)((() => {
          "inGame" === BB && nB(!0)
        }), [BB]), (0, XB.useEffect)((() => {
          if (!QB) return;
          let BB = null,
            jB = !1;
          return (mn.E ? Promise.all([zB.e(73), zB.e(90), zB.e(273), zB.e(191), zB.e(229), zB.e(228), zB.e(89)]).then((() => zB(40637))).then((BB => BB.startWasmPadGameplay)) : Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(98), zB.e(76), zB.e(75), zB.e(74), zB.e(187), zB.e(233), zB.e(78), zB.e(90), zB.e(188), zB.e(227), zB.e(97), zB.e(239), zB.e(230), zB.e(246), zB.e(121), zB.e(215), zB.e(87), zB.e(247), zB.e(77), zB.e(160), zB.e(248), zB.e(229), zB.e(200)]).then((() => zB(40756))).then((BB => BB.startPadGameplay))).then((zB => {
            jB || (BB = zB())
          })).catch((BB => {
            console.error("Pad gameplay failed to load", BB), jB || IB(!0)
          })), () => {
            var zB;
            jB = !0, null === (zB = BB) || void 0 === zB || zB()
          }
        }), [QB]), (0, XB.useEffect)((() => {
          dB && jB && (IB(!1), sn.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((BB => {
            !0 === BB && (0, Jn.reloadBloxd)()
          })))
        }), [dB, jB]), (0, TB.jsxs)(TB.Fragment, {
          children: [(0, TB.jsx)(hn, {}), (0, TB.jsx)(Xn, {}), (0, TB.jsx)(Zn, {})]
        })
      },
      hn = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, sB.B)(), {
          gameState: zB,
          isUiHidden: QB
        } = (0, uB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: dB
        } = (0, rB.p)(), IB = (0, qn.d)(), NB = (0, qn.h)(), [UB, pB] = (0, XB.useState)(Fn.d);
        return (0, yn.f)(Yn.p, pB), !jB || dB || QB || "inGame" !== zB || !IB && !UB ? null : (0, TB.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [IB && (0, TB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, TB.jsx)(Sn, {
              glyph: (0, aB.h)("actionButton")
            }), (0, TB.jsx)(En, {
              action: IB
            }), NB && (0, TB.jsx)("span", {
              className: "PadActionHintMore",
              children: BB("controller:gameplayActionWheelHint")
            })]
          }), UB && (0, TB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, TB.jsx)(Sn, {
              glyph: (0, aB.h)("pickBlock")
            }), (0, TB.jsx)("span", {
              children: BB("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Xn = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, sB.B)(), {
          gameState: zB,
          isUiHidden: QB
        } = (0, uB.m)(["gameState", "isUiHidden"]), [dB, IB] = (0, XB.useState)(Hn.b);
        return (0, yn.f)(Yn.n, IB), jB && !QB && "inGame" === zB && dB ? (0, TB.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, TB.jsx)("span", {
            children: BB("controller:gameplayDropStack")
          }), (0, TB.jsx)(fn, {
            hold: dB
          })]
        }) : null
      },
      Zn = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, sB.B)(), {
          gameState: zB,
          isUiHidden: QB
        } = (0, uB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: dB
        } = (0, rB.p)(), [IB, NB] = (0, XB.useState)(Dn.e);
        return (0, yn.f)(Yn.m, NB), jB && !QB && "inGame" === zB && IB ? (0, TB.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!dB && (0, TB.jsx)(Sn, {
            glyph: (0, aB.h)("attack")
          }), (0, TB.jsx)("span", {
            children: BB("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var An = zB(8769),
      Tn = zB(2006),
      Pn = zB(2516),
      Wn = zB(8165);
    const en = BB => BB && !(0, An.b)(Tn.c.get("shopInfo")),
      wn = () => {
        const BB = "inGame" === (0, uB.m)(["gameState"]).gameState;
        return (0, Pn.h)("shopInfo", (() => {
          (0, Wn.k)(en(BB))
        })), (0, XB.useEffect)((() => {
          (0, Wn.k)(en(BB))
        }), [BB]), null
      },
      xn = () => {
        const {
          t: BB
        } = (0, nB.D)(), {
          hideButtonHints: jB
        } = (0, rB.p)();
        (0, sB.F)();
        const zB = (0, Aj.l)();
        return (0, XB.useEffect)((() => (() => {
          const BB = pB.c.register({
              name: "inventory",
              isActive: nz.isActive,
              onFrame: nz.onFrame,
              onDeactivate: nz.onDeactivate,
              wakePressActs: nz.wakePressActs
            }),
            jB = BB => {
              nz.noteRealPointer(BB), nz.shouldBlockRealPointer(BB) && BB.stopPropagation()
            };
          for (const IB of dz) window.addEventListener(IB, jB, !0);
          const zB = (0, vB.l)((() => {
              "inventory" !== pB.c.getActiveConsumerName() && nz.forgetSurface()
            })),
            QB = BB => {
              const jB = BB.target;
              (0, sB.m)() && (0, CB.f)(jB) && jB.closest(tj) && (0, vB.h)() && (0, vB.o)(jB)
            };
          document.addEventListener("focusout", QB, !0);
          const {
            invalidate: nB,
            onScroll: dB
          } = nz.targets;
          return document.addEventListener("scroll", dB, !0), window.addEventListener("resize", nB), () => {
            BB(), zB();
            for (const BB of dz) window.removeEventListener(BB, jB, !0);
            document.removeEventListener("scroll", dB, !0), document.removeEventListener("focusout", QB, !0), window.removeEventListener("resize", nB), nz.targets.disconnect()
          }
        })()), []), (0, TB.jsxs)(TB.Fragment, {
          children: [(0, TB.jsx)(lB, {
            placer: nz.ring,
            className: "InventorySlotCursorRing"
          }), zB.showing && !jB && (0, TB.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: bB(zB).map((jB => {
              let {
                actions: QB,
                labelKey: nB
              } = jB;
              return (0, TB.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [QB.map((BB => (0, TB.jsx)(Sn, {
                  glyph: (0, aB.h)(BB)
                }, BB))), (0, TB.jsx)("span", {
                  children: BB(`controller:${nB}`)
                }), "inventoryDrop" === nB && zB.dropStackHold && (0, TB.jsx)(fn, {
                  hold: zB.dropStackHold
                })]
              }, nB)
            }))
          })]
        })
      },
      Kn = [{
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
      Cn = BB => Array.from(BB).map((BB => ({
        type: "char",
        char: BB,
        width: 1
      }))),
      cn = function(BB) {
        return {
          type: "command",
          command: BB,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      bn = [cn("page", 2), cn("otherPage"), cn("caretLeft"), cn("space", 3), cn("caretRight"), cn("close", 1.5), cn("submit", 1.5)],
      vn = [cn("page", 2), cn("otherPage"), cn("caretLeft"), cn("space", 2), cn("caretRight"), cn("newline"), cn("close", 1.5), cn("submit", 1.5)],
      Rn = [
        [...Cn("1234567890"), cn("backspace")], Cn("qwertyuiop/"), Cn("asdfghjkl'?"), [cn("shift", 2), ...Cn("zxcvbnm,.")]
      ],
      On = [
        [...Cn("1234567890"), cn("backspace")], Cn("!@#$%^&*()/"), Cn('-_=+[]{};:"'), Cn("~`|\\<>'\u20ac\xa3,.")
      ],
      Bd = {
        letters: Rn,
        accents: [
          [...Cn("1234567890"), cn("backspace")], Cn("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Cn("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [cn("shift", 2), ...Cn("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: On
      },
      jd = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      zd = (BB, jB) => "letters" === BB ? jB ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === BB ? "symbols" : "accents"
      },
      Qd = function(BB, jB) {
        const zB = ((BB, jB) => [...Bd[BB], jB ? vn : bn])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === jB) return zB;
        const QB = Math.min(2, nd(zB[0]) / jB);
        return [Array.from({
          length: jB
        }, ((BB, jB) => ({
          type: "phrase",
          phraseIndex: jB,
          width: QB
        }))), ...zB]
      },
      nd = BB => BB.reduce(((BB, jB) => BB + jB.width), 0),
      dd = BB => Math.max(...BB.map(nd)),
      Id = (BB, jB) => {
        const zB = BB[jB.row];
        let QB = (dd(BB) - nd(zB)) / 2;
        for (let nB = 0; nB < jB.col; nB++) QB += zB[nB].width;
        return QB + zB[jB.col].width / 2
      },
      Nd = (BB, jB, zB) => {
        let QB = 0,
          nB = 1 / 0;
        for (let dB = 0; dB < BB[jB].length; dB++) {
          const IB = Math.abs(Id(BB, {
            row: jB,
            col: dB
          }) - zB);
          IB < nB - 1e-9 && (QB = dB, nB = IB)
        }
        return QB
      },
      ud = (BB, jB) => {
        const zB = Math.max(0, Math.min(BB.length - 1, jB.row));
        return {
          row: zB,
          col: Math.max(0, Math.min(BB[zB].length - 1, jB.col))
        }
      },
      Ud = (BB, jB, zB) => "once" === BB && jB - zB <= 400 ? "caps" : "off" === BB ? "once" : "off",
      pd = (BB, jB) => "once" === BB && (BB => BB.toLowerCase() !== BB.toUpperCase())(jB) ? "off" : BB,
      rd = (BB, jB, zB) => {
        if ("symbols" === jB || "off" === zB) return BB;
        const QB = BB.toUpperCase();
        return 1 === QB.length ? QB : BB
      };
    var sd = zB(8646);
    const Jd = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const md = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(BB) {
          return !(BB - this.lastSendMs < 2e3) && (this.lastSendMs = BB, !0)
        }
      },
      yd = {
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
      kd = ["zN", "nameTag"],
      Gd = BB => {
        const jB = BB.target instanceof HTMLTextAreaElement && !kd.includes(BB.kind);
        return Qd(BB.page, "chat" === BB.kind ? Jd.length : 0, jB)
      },
      Ld = BB => {
        const jB = BB.getBoundingClientRect(),
          zB = window.innerHeight,
          QB = jB.top + jB.height / 2 < zB / 2 ? "bottom" : "top",
          nB = "bottom" === QB ? zB - jB.bottom - 6 : jB.top - 6;
        return {
          placement: QB,
          maxHeightPx: Math.min(.46 * zB, Math.max(.3 * zB, nB))
        }
      },
      gd = BB => {
        (0, fz.h)(BB) ? (0, fz.e)().close(): (OQ.noteChosenStop(BB), BB.blur())
      };
    class td {
      constructor(BB) {
        this.host = BB, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(BB, jB) {
        this.phraseTexts = BB, this.phrasesFill = jB
      }
      pressKey(BB) {
        const jB = this.host.getState(),
          zB = Gd(jB),
          QB = zB[BB.row][BB.col];
        this.host.setState({
          ...jB,
          focus: BB,
          preferredX: Id(zB, BB)
        }), "char" === QB.type ? this.typeChar(QB.char) : "command" === QB.type ? this.runCommand(QB.command) : this.sendPhrase(QB.phraseIndex)
      }
      runCommand(BB) {
        const jB = this.host.getState();
        switch (BB) {
          case "backspace":
            (0, CB.b)(jB.target);
            break;
          case "space":
            (0, CB.e)(jB.target, " ");
            break;
          case "newline":
            (0, CB.e)(jB.target, "\n");
            break;
          case "caretLeft":
            (0, CB.i)(jB.target, -1);
            break;
          case "caretRight":
            (0, CB.i)(jB.target, 1);
            break;
          case "shift": {
            const BB = performance.now();
            this.host.setState({
              ...jB,
              shift: Ud(jB.shift, BB, this.lastShiftPressMs)
            }), this.lastShiftPressMs = BB;
            break
          }
          case "page":
          case "otherPage": {
            const zB = zd(jB.page, jB.accentsFirst)[BB];
            this.host.setState({
              ...jB,
              page: zB,
              focus: ud(Gd({
                ...jB,
                page: zB
              }), jB.focus)
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
            (0, fz.h)(jB.target) && (0, fz.e)().selectNextChannel()
        }
      }
      submit() {
        var BB, jB;
        const {
          target: zB
        } = this.host.getState();
        this.host.hide(), (0, fz.h)(zB) ? (0, fz.e)().submit() : (OQ.noteChosenStop(zB), null === (BB = (jB = (0, fz.g)(zB)).submit) || void 0 === BB || BB.call(jB), document.activeElement === zB && zB.blur())
      }
      close() {
        const {
          target: BB
        } = this.host.getState();
        this.host.hide(), gd(BB)
      }
      typeChar(BB) {
        const {
          target: jB,
          page: zB,
          shift: QB
        } = this.host.getState();
        (0, CB.e)(jB, rd(BB, zB, QB)), this.host.setState({
          ...this.host.getState(),
          shift: pd(QB, BB)
        })
      }
      sendPhrase(BB) {
        if (this.phrasesFill) {
          const {
            target: jB
          } = this.host.getState(), zB = this.phraseTexts[BB];
          zB && (jB.setSelectionRange(0, jB.value.length), (0, CB.e)(jB, zB))
        } else md.claim(performance.now()) && (this.host.hide(), (0, fz.e)().sendLine(this.phraseTexts[BB]))
      }
    }
    var Sd = zB(8665);
    const Md = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ed = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class qd {
      constructor(BB, jB) {
        this.host = BB, this.editor = jB, this.lastDirection = null, this.navRepeat = new JB.c((0, mB.b)(Md)), this.commandRepeats = new Map(Kn.filter((BB => {
          let {
            repeats: jB
          } = BB;
          return jB
        })).map((BB => {
          let {
            command: jB
          } = BB;
          return [jB, (0, mB.b)(Ed)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const BB of this.commandRepeats.values()) BB.reset()
      }
      onVisibleFrame(BB) {
        const jB = performance.now();
        for (const {
            command: nB,
            action: dB
          }
          of Kn) {
          const zB = (0, aB.h)(dB),
            QB = this.commandRepeats.get(nB);
          if ((QB ? QB.update(BB.isHeld(zB), jB) : BB.wasPressed(zB)) && (this.editor.runCommand(nB), !this.host.getState().visible)) return
        }
        if (BB.wasPressed((0, aB.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const zB = this.readNavDirection(BB);
        this.lastDirection = zB;
        const QB = this.navRepeat.update(zB, jB);
        QB && this.navigate(QB)
      }
      onHiddenFrame(BB, jB) {
        var zB;
        if (BB.wasPressed((0, aB.h)("keyboardClose"))) return void gd(jB);
        const QB = (0, aB.h)("keyboardType");
        if (BB.wasPressed(QB)) return pB.c.consumeButton(QB), void this.host.open(jB);
        const nB = this.readNavDirection(BB),
          dB = null !== nB && nB !== this.lastDirection;
        if (this.lastDirection = nB, !dB || (0, fz.h)(jB)) return;
        const IB = (null === (zB = aQ()) || void 0 === zB ? void 0 : zB.root.contains(jB)) || null !== jB.closest(".EntireInventoryWrapper");
        gd(jB), IB && pB.c.handOffHeldInput()
      }
      navigate(BB) {
        const jB = this.host.getState();
        if ("Up" === BB && 0 === jB.focus.row && "chat" === jB.kind) return (0, fz.e)().stepHistory(), void this.host.setState({
          ...jB
        });
        const zB = ((BB, jB, zB, QB) => {
          if ("Left" === zB || "Right" === zB) {
            const QB = BB[jB.row].length,
              nB = (jB.col + ("Right" === zB ? 1 : -1) + QB) % QB,
              dB = {
                row: jB.row,
                col: nB
              };
            return {
              pos: dB,
              preferredX: Id(BB, dB)
            }
          }
          const nB = (jB.row + ("Down" === zB ? 1 : -1) + BB.length) % BB.length;
          return {
            pos: {
              row: nB,
              col: Nd(BB, nB, QB)
            },
            preferredX: QB
          }
        })(Gd(jB), jB.focus, BB, jB.preferredX);
        this.host.setState({
          ...jB,
          focus: zB.pos,
          preferredX: zB.preferredX
        })
      }
      readNavDirection(BB) {
        for (const jB of JB.J)
          if (BB.isHeld(jB)) return jB;
        return (0, JB.ib)((0, JB.k)(BB.leftStick, (0, rB.j)().moveDeadzone))
      }
    }
    const fd = ["Up", "Down", "Left", "Right"],
      od = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Hd = new class {
      constructor() {
        this.state = yd, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new td(this), this.padInput = new qd(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(BB) {
        const jB = BB.visible !== this.state.visible;
        this.state = BB;
        for (const zB of this.listeners) zB();
        jB && UB.n.Ly(Sd.b, BB.visible)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      install() {
        const BB = pB.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, CB.f)(document.activeElement),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: BB => fd.includes(BB) || !this.state.visible && BB === (0, aB.h)("keyboardType")
          }),
          jB = BB => {
            const jB = BB.target;
            (0, CB.f)(jB) && (jB === this.pendingChatInput || (0, sB.m)() ? this.open(jB) : this.state.visible && jB !== this.state.target && (this.ownedField = null, this.hide()))
          },
          zB = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          QB = BB => {
            BB.isTrusted && this.state.visible && (BB => !BB.repeat && !od.has(BB.key) && !(0, sd.b)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
          },
          nB = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Ld(this.state.target)
            })
          };
        document.addEventListener("focusin", jB, !0), document.addEventListener("focusout", zB, !0), window.addEventListener("keydown", QB, !0), window.addEventListener("resize", nB);
        const dB = UB.n.subscribe(Yn.e, (() => {
            this.openChat()
          })),
          IB = UB.n.subscribe(Sd.f, (BB => {
            this.openForField(BB)
          }));
        return () => {
          BB(), document.removeEventListener("focusin", jB, !0), document.removeEventListener("focusout", zB, !0), window.removeEventListener("keydown", QB, !0), window.removeEventListener("resize", nB), UB.n.unsubscribe(dB), UB.n.unsubscribe(IB), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const BB = (0, fz.e)();
        BB ? document.activeElement !== BB.input ? (this.clearPendingChat(), this.pendingChatInput = BB.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), BB.open()) : this.open(BB.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(BB) {
        (0, CB.f)(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
      }
      open(BB) {
        var jB;
        if (this.clearPendingChat(), this.ownedField = BB, this.state.visible && this.state.target === BB) return;
        this.restoreInputMode(), (0, CB.l)(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
        const zB = {
          ...yd,
          visible: !0,
          target: BB,
          kind: (0, fz.h)(BB) ? "chat" : null !== (jB = (0, fz.g)(BB).kind) && void 0 !== jB ? jB : null,
          accentsFirst: (QB = kn.c.get().getCurrentLanguageCode(), jd.has(QB)),
          ...Ld(BB)
        };
        var QB;
        const nB = Gd(zB),
          dB = ((BB, jB) => {
            for (let zB = 0; zB < BB.length; zB++) {
              const QB = BB[zB].findIndex((BB => "char" === BB.type && BB.char === jB));
              if (-1 !== QB) return {
                row: zB,
                col: QB
              }
            }
            return null
          })(nB, "q");
        this.padInput.reset(), this.setState({
          ...zB,
          focus: dB,
          preferredX: Id(nB, dB)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(yd))
      }
      onFrame(BB) {
        if (this.releaseLostField()) return;
        const jB = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(BB) : (0, CB.f)(jB) && this.padInput.onHiddenFrame(BB, jB)
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
    var Dd = zB(3738);
    const Fd = new Map(Kn.map((BB => {
        let {
          command: jB,
          action: zB
        } = BB;
        return [jB, zB]
      }))),
      Yd = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Vd = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        zN: "controller:keyboardTargetBookTitle"
      },
      hd = BB => {
        const jB = (() => {
          const [, BB] = (0, XB.useReducer)((BB => BB + 1), 0);
          return BB
        })();
        (0, XB.useEffect)((() => {
          if (!BB) return;
          const zB = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const nB of zB) BB.addEventListener(nB, jB);
          document.addEventListener("selectionchange", jB);
          const QB = new MutationObserver(jB);
          return QB.observe(BB, {
            attributeFilter: ["placeholder"]
          }), () => {
            QB.disconnect();
            for (const QB of zB) BB.removeEventListener(QB, jB);
            document.removeEventListener("selectionchange", jB)
          }
        }), [BB, jB])
      },
      Xd = BB => {
        BB.preventDefault()
      },
      Zd = BB => {
        "mouse" !== BB.pointerType && BB.preventDefault()
      },
      Ad = () => {
        var BB;
        const {
          t: jB
        } = (0, nB.D)(), zB = (() => {
          const [BB, jB] = (0, XB.useState)(Hd.getState());
          return (0, XB.useEffect)((() => Hd.subscribe((() => {
            jB(Hd.getState())
          }))), []), BB
        })(), QB = (0, sB.B)(), dB = (0, XB.useRef)(null);
        (0, rB.p)(), (0, sB.F)(), (0, XB.useEffect)((() => {
          const BB = Hd.install(),
            jB = null;
          return () => {
            BB(), null === jB || void 0 === jB || jB()
          }
        }), []);
        const IB = (0, XB.useMemo)((() => Jd.map((BB => jB(BB)))), [jB]),
          NB = zB.visible && "chat" === zB.kind ? zB.target : null;
        hd(NB);
        const uB = null !== (BB = null === NB || void 0 === NB ? void 0 : NB.value) && void 0 !== BB ? BB : "",
          UB = ((BB, jB, zB) => {
            if (!BB.startsWith("/")) return [];
            const QB = [];
            for (let nB = jB.length - 1; nB >= 0 && QB.length < zB; nB--) {
              const zB = jB[nB].trim();
              zB.startsWith(BB) && zB !== BB && !QB.includes(zB) && QB.push(zB)
            }
            return QB
          })(uB, uB.startsWith("/") ? (0, Dd.g)() : [], Jd.length),
          pB = uB.startsWith("/"),
          JB = pB ? Jd.map(((BB, jB) => {
            var zB;
            return null !== (zB = UB[jB]) && void 0 !== zB ? zB : ""
          })) : IB;
        if ((0, XB.useEffect)((() => {
            Hd.editor.setPhraseRow(JB, pB)
          })), (0, XB.useEffect)((() => {
            const BB = dB.current;
            if (BB) return BB.addEventListener("touchstart", Xd, {
              passive: !1
            }), () => {
              BB.removeEventListener("touchstart", Xd)
            }
          }), [zB.visible]), !zB.visible) return null;
        const mB = Gd(zB),
          yB = dd(mB),
          kB = BB => "char" === BB.type ? rd(BB.char, zB.page, zB.shift) : "phrase" === BB.type ? JB[BB.phraseIndex] : (BB => {
            switch (BB) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === zB.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Yd[zd(zB.page, zB.accentsFirst)[BB]];
              case "space":
                return jB("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return jB("chat" === zB.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(BB.command),
          GB = BB => {
            Hd.editor.pressKey(BB)
          };
        return (0, TB.jsxs)("div", {
          ref: dB,
          className: AB()(fz.p, "top" === zB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: zB.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": mB.length,
            "--pad-keyboard-height": `${zB.maxHeightPx}px`
          },
          onPointerDown: Zd,
          onMouseDown: Xd,
          children: [(0, TB.jsx)(Td, {
            target: zB.target,
            label: zB.kind ? jB(Vd[zB.kind]) : zB.target.placeholder || jB("controller:keyboardTargetText")
          }), (0, TB.jsx)("div", {
            className: "PadKeyboardRows",
            children: mB.map(((BB, jB) => (0, TB.jsx)("div", {
              className: AB()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === BB[0].type
              }),
              children: BB.map(((BB, nB) => {
                const dB = QB && zB.focus.row === jB && zB.focus.col === nB,
                  IB = "command" === BB.type ? Fd.get(BB.command) : void 0;
                return (0, TB.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: BB.width / yB * 100 + "%"
                  },
                  children: (0, TB.jsxs)("div", {
                    className: AB()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: dB,
                      PadKeyboardKeyCommand: "command" === BB.type,
                      PadKeyboardKeyPhrase: "phrase" === BB.type,
                      PadKeyboardKeyActive: "command" === BB.type && "shift" === BB.command && "off" !== zB.shift,
                      PadKeyboardKeySubmit: "command" === BB.type && "submit" === BB.command
                    }),
                    role: "button",
                    onClick: () => {
                      GB({
                        row: jB,
                        col: nB
                      })
                    },
                    onTouchEnd: BB => {
                      var zB, QB;
                      BB.preventDefault(), zB = BB.changedTouches[0], QB = BB.currentTarget.getBoundingClientRect(), zB && zB.clientX >= QB.left && zB.clientX <= QB.right && zB.clientY >= QB.top && zB.clientY <= QB.bottom && GB({
                        row: jB,
                        col: nB
                      })
                    },
                    children: [(0, TB.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: kB(BB)
                    }), QB && IB && (0, TB.jsx)(Sn, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, aB.h)(IB)
                    })]
                  })
                }, nB)
              }))
            }, jB)))
          })]
        })
      },
      Td = BB => {
        let {
          target: jB,
          label: zB
        } = BB;
        hd(jB);
        const QB = (0, XB.useRef)(null),
          nB = (0, XB.useRef)(null),
          dB = jB instanceof HTMLTextAreaElement;
        (0, XB.useLayoutEffect)((() => {
          const BB = QB.current,
            jB = nB.current;
          dB ? BB.scrollTop = jB.offsetTop - BB.clientHeight / 2 : BB.scrollLeft = jB.offsetLeft - BB.clientWidth / 2
        }));
        const {
          value: IB,
          start: NB,
          end: uB
        } = (0, CB.p)(jB), UB = "password" === jB.type ? "\u2022".repeat(IB.length) : IB;
        return (0, TB.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, TB.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: zB
          }), (0, TB.jsxs)("div", {
            ref: QB,
            className: AB()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: dB
            }),
            children: [(0, TB.jsx)("span", {
              children: UB.slice(0, NB)
            }), (0, TB.jsx)("span", {
              ref: nB,
              className: "PadKeyboardCaret"
            }), NB !== uB && (0, TB.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: UB.slice(NB, uB)
            }), (0, TB.jsx)("span", {
              children: UB.slice(uB)
            }), 0 === UB.length && jB.placeholder && jB.placeholder !== zB && (0, TB.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: jB.placeholder
            })]
          })]
        })
      };
    var Pd = zB(1418),
      Wd = zB(3536);
    const ed = function() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return jB.map(aB.h)
      },
      ld = (BB, jB) => {
        const zB = wz(BB);
        return zB ? [{
          glyphs: [zB],
          labelKey: jB
        }] : []
      },
      wd = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      xd = "--pad-hint-bar-clearance",
      Kd = "[data-pad-hint-bar-avoid]",
      Cd = BB => {
        const jB = [];
        for (const zB of BB)(0, RB.s)(zB) && jB.push(zB.getBoundingClientRect());
        return jB
      },
      cd = BB => {
        if (!BB) return null;
        const jB = aQ(),
          zB = jB ? Cd(((BB, jB) => {
            const zB = BB.closest(Kd);
            return zB ? [zB] : ("popup" === jB ? document : BB).querySelectorAll(Kd)
          })(jB.root, jB.layer.kind)) : [],
          QB = !jB || jB.root.hasAttribute("data-pad-shows-hud");
        if (((0, Wd.l)(null === jB || void 0 === jB ? void 0 : jB.layer.kind, (0, Wd.m)()) || QB) && zB.push(...Cd(document.querySelectorAll(wd.join(",")))), 0 === zB.length) return null;
        const {
          width: nB,
          height: dB
        } = BB.getBoundingClientRect(), IB = window.innerHeight - 8, NB = (0, Wd.s)(IB, {
          width: nB,
          height: dB
        }, window.innerWidth / 2, zB, 8);
        return NB === IB ? null : Math.round(window.innerHeight - NB)
      },
      bd = BB => {
        const jB = document.documentElement.style,
          zB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
        jB.getPropertyValue(xd) !== zB && (zB ? jB.setProperty(xd, zB) : jB.removeProperty(xd))
      },
      vd = () => {
        const {
          t: BB
        } = (0, nB.D)(), {
          hideButtonHints: jB
        } = (0, rB.p)(), zB = (0, sB.B)(), [QB, dB] = (0, XB.useState)(!1), [IB, UB] = (0, XB.useState)([]), [mB, yB] = (0, XB.useState)(null), kB = (0, XB.useRef)(null), GB = (0, XB.useRef)(null);
        (0, yn.f)(Sd.b, (BB => {
          dB(BB)
        })), (0, yn.f)(Wd.p, (() => {
          var BB;
          null === (BB = GB.current) || void 0 === BB || BB.call(GB)
        }));
        const LB = zB && !jB && !QB;
        return (0, XB.useEffect)((() => {
          if (!LB) return;
          let BB = null;
          const jB = () => {
            const jB = (() => {
                var BB;
                const jB = pB.c.getActiveConsumerName(),
                  zB = (0, Wd.h)();
                if (zB) {
                  const BB = (0, aB.h)(zB),
                    jB = "emoteWheel" === zB && "wheel" === (0, rB.j)().emoteButton || !(0, JB.P)(pB.c.getLastFrame().values, BB) ? {
                      glyphs: ed("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [BB],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, aB.A)(BB)],
                    labelKey: "controller:wheelChoose"
                  }, jB, {
                    glyphs: ed("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const QB = aQ();
                if (!QB || "focus" !== jB && "cursor" !== jB) return (0, Wd.e)(aB.h);
                const nB = [],
                  dB = {
                    glyphs: ed("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  IB = (0, wB.w)(QB.root),
                  NB = IB ? !(0, RB.y)(IB) : Boolean(QB.layer.close),
                  UB = !IB && QB.layer.closeLabelKey ? QB.layer.closeLabelKey : dB.labelKey,
                  sB = NB ? [{
                    ...dB,
                    labelKey: UB
                  }] : [],
                  mB = Dz(QB.layer.kind) ? [{
                    glyphs: ed("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === jB) return nB.push({
                  glyphs: ed("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), nB.push({
                  glyphs: ed("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), nB.push(...sB), nB.push(...mB), nB.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), iQ() && nB.push({
                  glyphs: ed("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), nB;
                const yB = OQ.getFocused();
                yB && (0, DQ.d)(yB) ? nB.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : yB && (0, wB.B)(yB) ? nB.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : nB.push({
                  glyphs: ed("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const kB = yB ? null === (BB = rz(yB)) || void 0 === BB ? void 0 : BB.dataset.padSecondary : void 0;
                kB && nB.push({
                  glyphs: ed("menuSecondary"),
                  labelKey: kB
                }), nB.push(...null !== yB && void 0 !== yB && yB.closest("[data-pad-friends-column]") ? [dB] : sB), nB.push(...mB);
                const GB = "home" === QB.layer.kind;
                Cz(QB.root) || !Xz(QB.root) && !cz(QB) ? GB && nB.push({
                  glyphs: ed("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : nB.push({
                  glyphs: ed("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), GB && (nB.push(...ld("inventory", "controller:menusFriends")), kB || nB.push({
                  glyphs: ed("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), nB.push(...ld("pause", "controller:menusSettings")), nB.push(...ld("leaderboard", "controller:menusNotifications")));
                const LB = uB.c.get("openEverythingMenuName");
                return "inGame" === uB.c.get("gameState") && "popup" !== QB.layer.kind && null !== LB && ((0, uz.g)(LB) ? nB.push(...ld("leaderboard", "controller:menusClose")) : LB !== Nz.o.LOBBY_LEADERBOARD && nB.push(...ld("leaderboard", "controller:menusLobby"))), nB.push({
                  glyphs: ed("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), nB
              })(),
              zB = cd(kB.current),
              QB = ((BB, jB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${jB}`)(jB, zB);
            QB !== BB && (BB = QB, (0, NB.unstable_batchedUpdates)((() => {
              UB(jB), yB(zB)
            }))), bd(kB.current)
          };
          jB(), GB.current = jB;
          const zB = requestAnimationFrame(jB),
            QB = setInterval(jB, 150);
          return () => {
            GB.current = null, cancelAnimationFrame(zB), clearInterval(QB), bd(null)
          }
        }), [LB]), (0, XB.useLayoutEffect)((() => {
          if (!LB) return;
          if (0 === IB.length) return void bd(null);
          const BB = cd(kB.current);
          BB === mB ? bd(kB.current) : yB(BB)
        }), [LB, IB, mB]), LB && 0 !== IB.length ? (0, TB.jsx)("div", {
          ref: kB,
          className: "PadButtonHintBar SmallTextBold",
          style: null === mB ? void 0 : {
            bottom: mB
          },
          "aria-hidden": !0,
          children: IB.map((jB => (0, TB.jsxs)("div", {
            className: "PadButtonHint",
            children: [jB.glyphs.map((BB => (0, TB.jsx)(Sn, {
              glyph: BB,
              className: "PadButtonHintGlyph"
            }, BB))), (0, TB.jsx)("span", {
              children: BB(jB.labelKey)
            })]
          }, jB.labelKey)))
        }) : null
      };
    var Rd = zB(1786);
    const Od = [RB.e, "label", "[data-pad-slider]"].join(","),
      BI = "data-pad-cursor-probe",
      jI = BB => {
        var jB;
        const zB = (BB => {
          const jB = [];
          for (let QB = BB; QB && QB !== document.body && QB !== document.documentElement && (jB.push(QB), !(jB.length > 8)); QB = QB.parentElement);
          const zB = document.documentElement.classList.contains(sB.q) ? jB[jB.length - 1] : void 0;
          null === zB || void 0 === zB || zB.setAttribute(BI, "");
          try {
            return jB.map((BB => ({
              element: BB,
              cursor: getComputedStyle(BB).cursor
            })))
          } finally {
            null === zB || void 0 === zB || zB.removeAttribute(BI)
          }
        })(BB);
        if ("pointer" !== (null === (jB = zB[0]) || void 0 === jB ? void 0 : jB.cursor)) return null;
        let QB = 0;
        for (; QB + 1 < zB.length && "pointer" === zB[QB + 1].cursor;) QB++;
        return zB[QB].element
      },
      zI = (BB, jB, zB, QB) => {
        const nB = QB.root.contains(BB) ? QB.root : null;
        for (let dB = BB; dB && dB !== document.body && dB !== document.documentElement; dB = dB.parentElement) {
          if (dB instanceof HTMLElement && qB(dB, jB) && FB(dB, jB, zB)) return dB;
          if (dB === nB) break
        }
        return "home" === QB.layer.kind || "gamePage" === QB.layer.kind ? ((BB, jB) => {
          const zB = document.scrollingElement;
          return zB instanceof HTMLElement && ![document.documentElement, document.body].some((jB => {
            const zB = getComputedStyle(jB),
              QB = "y" === BB ? zB.overflowY : zB.overflowX;
            return "hidden" === QB || "clip" === QB
          })) && FB(zB, BB, jB) ? zB : null
        })(jB, zB) : null
      };
    const QI = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, mB.b)(JB.y), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const BB = pB.c.register({
              name: "cursor",
              isActive: () => "cursor" === qQ(),
              onFrame: BB => {
                this.onFrame(BB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: BB => (0, pB.f)(BB) || BB === (0, aB.h)("menuConfirm") && (0, wB.F)((0, sB.e)())
            }),
            jB = (0, zQ.l)((BB => {
              const jB = BB.getRoot();
              jB && this.layerPoints.delete(jB), jB === this.layerRoot && (this.layerRoot = null)
            })),
            zB = UB.n.subscribe("appManagerUpdated|activeInputDevice", (BB => {
              "gamepad" !== BB && this.active && !this.hidden && this.hide()
            }));
          return () => {
            BB(), jB(), UB.n.unsubscribe(zB), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, sB.m)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Ly()
        }
        activate(BB) {
          this.active = !0, this.hidden = !1;
          const jB = SQ();
          !jB || jB.root && jB.root !== BB.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(BB), this.jumpTo(jB.point))
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
          }, this.Ly())
        }
        onFrame(BB) {
          const jB = aQ();
          if (!jB) return;
          if (this.active || this.activate(jB), this.followPage(jB)) return;
          this.followLayer(jB);
          const zB = BB.wokeDevice ? (0, sB.e)() : null;
          if (zB && this.jumpTo(zB), !(0, sB.m)()) return void this.hide();
          const QB = (0, aB.h)("menuToggleCursor");
          if (BB.wasPressed(QB)) return pB.c.consumeButton(QB), void tQ(this.getHandoff(null));
          if (this.handBackToFocus(BB)) return;
          const nB = (0, aB.h)("menuConfirm"),
            dB = (0, aB.h)("menuSecondary");
          if (BB.wasPressed((0, aB.h)("menuBack"))) return (0, wB.k)(jB.root) || (0, wB.f)(jB.root) || pQ(), void this.Ly();
          if (Rz(null, BB, jB)) return BB.wasReleased(nB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, nB)), void this.Ly();
          if (document.pointerLockElement) return void this.hide();
          const IB = fQ() ? {
              x: 0,
              y: 0
            } : (BB => {
              const jB = (BB, jB) => (BB ? 1 : 0) - (jB ? 1 : 0);
              return {
                x: jB(BB.isHeld("Right"), BB.isHeld("Left")),
                y: jB(BB.isHeld("Down"), BB.isHeld("Up"))
              }
            })(BB),
            NB = (0, rB.j)().moveDeadzone,
            uB = ((BB, jB) => {
              const zB = (0, JB.k)(BB, gB(jB));
              return Math.hypot(zB.x, zB.y)
            })(BB.leftStick, NB) > 0 || 0 !== IB.x || 0 !== IB.y;
          if (this.hidden) {
            const jB = BB.wasPressed(nB),
              zB = BB.wasPressed(dB);
            if (!uB && !MB(BB.rightStick) && !jB && !zB && !BB.wokeDevice) return void this.Ly();
            if (this.hidden = !1, this.updateHit(!1), jB || zB) return jB && (this.press = {
              kind: "ignored"
            }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Ly()
          }
          this.movePendingPageStart(uB);
          const UB = this.getPoint();
          this.state = SB(this.state, {
            stick: BB.leftStick,
            moveDeadzone: NB,
            dpad: IB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, rB.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const mB = this.state.x !== UB.x || this.state.y !== UB.y,
            yB = [nB, dB].some((jB => BB.wasPressed(jB) || BB.wasReleased(jB)));
          (mB || yB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(mB), this.updateConfirm(BB, nB), this.updateSecondary(BB, dB), this.updateScroll(BB, jB), this.Ly()
        }
        followPage(BB) {
          const jB = "home" === BB.layer.kind || "gamePage" === BB.layer.kind,
            zB = this.page;
          if (this.page = jB ? {
              key: (0, zQ.r)(BB.layer),
              root: BB.root
            } : null, !this.page || !zB || zB.root !== BB.root || zB.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(BB), "hybrid" === gQ()) return kQ = null, mQ = null, GQ.lock(), !0;
          const {
            key: QB
          } = this.page;
          return this.pendingPageStart = {
            root: BB.root,
            key: QB,
            returning: OQ.notePageEnteredByCursor(QB),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(BB) {
          const jB = this.pendingPageStart;
          if (!jB) return;
          if (BB || jB.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const zB = jB.returning ? OQ.recallStop(jB.root, jB.key) : null;
          if (!zB && jB.returning && performance.now() - jB.enteredAtMs < 1e3) return;
          const QB = null !== zB && void 0 !== zB ? zB : OQ.pickInitial(jB.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: jB.enteredAtMs
          });
          QB && (this.pendingPageStart = null, this.jumpTo((0, wB.x)(QB)))
        }
        setLayer(BB) {
          this.layerRoot = BB.root, this.layerOrder = BB.order
        }
        followLayer(BB) {
          var jB;
          if (BB.root === this.layerRoot) return;
          null !== (jB = this.layerRoot) && void 0 !== jB && jB.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const zB = this.layerPoints.get(BB.root),
            QB = zB && BB.order <= this.layerOrder ? zB : OQ.getLayerStartPoint(BB.root);
          this.setLayer(BB), this.jumpTo(QB)
        }
        getHandoff(BB) {
          var jB;
          return {
            point: this.getPoint(),
            element: null !== (jB = this.interactive) && void 0 !== jB ? jB : this.findDraggedSliderNearby(),
            direction: BB
          }
        }
        findDraggedSliderNearby() {
          const BB = this.draggedSlider;
          if (null === BB || void 0 === BB || !BB.isConnected) return null;
          const jB = BB.getBoundingClientRect(),
            {
              y: zB
            } = this.getPoint();
          return zB >= jB.top - 40 && zB <= jB.bottom + 40 ? BB : null
        }
        handBackToFocus(BB) {
          if (!fQ()) return !1;
          const jB = JB.J.find((jB => BB.wasPressed(jB)));
          return !!jB && (zB = this.getHandoff(jB), kQ = sQ(zB), mQ = null, GQ.lock(), pB.c.handOffHeldInput(), !0);
          var zB
        }
        getAssistContext() {
          const BB = this.interactive;
          if (null === BB || void 0 === BB || !BB.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const jB = BB.getBoundingClientRect();
          if (jB.width > .4 * window.innerWidth || jB.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const zB = (0, rB.j)().cursorMagnetism && !(0, Rd.e)(BB) && !BB.closest("[data-pad-slider]"),
            QB = this.magnet && this.magnet !== BB && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : jB;
          return {
            overInteractive: !0,
            magnetTarget: zB ? {
              x: QB.left + QB.width / 2,
              y: QB.top + QB.height / 2
            } : null
          }
        }
        updateHit(BB) {
          this.lastHitTestMs = performance.now();
          const jB = this.getPoint(),
            zB = document.elementFromPoint(jB.x, jB.y),
            QB = zB && !(0, kB.m)(zB) && (BB => {
              var jB;
              const zB = aQ();
              return !(zB && !zB.root.contains(BB) && !BB.closest(".tooltip-container")) || !(null !== (jB = document.getElementById("root")) && void 0 !== jB && jB.contains(BB))
            })(zB) ? zB : null;
          if (QB !== this.hit) return (0, wB.q)(this.hit, QB, jB), this.hit = QB, void this.setInteractive(QB ? (BB => {
            const jB = BB.closest(Od);
            if (jB) {
              var zB, QB;
              const BB = null !== (zB = null === (QB = jB.parentElement) || void 0 === QB ? void 0 : QB.closest("[data-pad-focusable]")) && void 0 !== zB ? zB : jB;
              return (0, RB.y)(BB) ? {
                element: null,
                magnet: null
              } : {
                element: BB,
                magnet: jB
              }
            }
            const nB = jI(BB);
            return {
              element: nB,
              magnet: nB
            }
          })(QB) : {
            element: null,
            magnet: null
          });
          BB && QB && (0, wB.q)(QB, QB, jB)
        }
        setInteractive(BB) {
          let {
            element: jB,
            magnet: zB
          } = BB;
          this.interactive = jB, this.magnet = zB
        }
        clearHover() {
          this.hit && (0, wB.q)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const BB = this.hit;
          if (!BB || (0, wB.B)(BB)) return {
            kind: "ignored"
          };
          const jB = (0, DQ.d)(BB),
            zB = BB.closest("[data-pad-slider]");
          return jB && zB ? {
            kind: "slider",
            slider: zB,
            adjuster: jB
          } : ((0, wB.s)(BB, this.getPoint()), {
            kind: "pointer",
            target: BB
          })
        }
        applySliderFraction(BB) {
          var jB;
          const zB = BB.slider.getBoundingClientRect(),
            QB = zB.height > zB.width,
            nB = null === (jB = BB.slider.querySelector("[data-pad-slider-handle]")) || void 0 === jB ? void 0 : jB.getBoundingClientRect(),
            dB = nB ? QB ? nB.height : nB.width : 0,
            IB = (QB ? zB.height : zB.width) - dB;
          if (IB <= 0) return;
          const NB = QB ? zB.bottom - dB / 2 - this.state.y : this.state.x - zB.left - dB / 2;
          BB.adjuster.setFraction(Math.max(0, Math.min(1, NB / IB)))
        }
        updateConfirm(BB, jB) {
          BB.wasPressed(jB) && (this.press = BB.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const zB = this.press;
          if (!zB) return;
          if (BB.isHeld(jB)) return "slider" === zB.kind && this.applySliderFraction(zB), void this.updateRepeat();
          this.press = null;
          const QB = this.repeated;
          if (this.endRepeat(), !BB.wasReleased(jB)) return void this.endPressWithoutClick(zB);
          const nB = this.getPoint(),
            dB = this.hit;
          if ("slider" === zB.kind && zB.adjuster.endDrag(), "pointer" === zB.kind) {
            const BB = null !== dB && void 0 !== dB ? dB : zB.target.isConnected ? zB.target : null;
            BB && (0, wB.v)(BB, nB);
            const jB = dB && zB.target.isConnected && !QB ? ((BB, jB) => {
              for (let zB = BB; zB; zB = zB.parentElement)
                if (zB.contains(jB)) return zB;
              return null
            })(zB.target, dB) : null;
            jB && (OQ.noteCursorActivation(jB), (0, kB.d)(jB, new MouseEvent("click", (0, wB.M)(nB, 0, 0))), (0, wB.g)(jB), (0, wB.J)(jB) && (0, wB.H)(jB))
          }
        }
        beginRepeat() {
          var BB, jB, zB;
          const QB = null !== (BB = null === (jB = this.hit) || void 0 === jB ? void 0 : jB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
          this.repeatStop = QB, this.repeatKey = null !== (zB = null === QB || void 0 === QB ? void 0 : QB.getAttribute("data-pad-repeat")) && void 0 !== zB ? zB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const BB = this.repeatStop;
          if (!BB) return;
          const jB = this.hit;
          BB.isConnected && !(0, RB.y)(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && jB && BB.contains(jB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, OQ.noteCursorActivation(BB), (0, kB.d)(BB, new MouseEvent("click", (0, wB.M)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(BB) {
          "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && (0, wB.v)(BB.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(BB, jB) {
          BB.wasPressed(jB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(jB) && (this.secondaryArmed = !1, BB.wasReleased(jB) && this.hit && (0, wB.o)(this.hit, this.getPoint(), 2))
        }
        updateScroll(BB, jB) {
          const zB = EB(BB.rightStick, BB.dtMs);
          if (0 === zB.x && 0 === zB.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + zB.x,
            y: this.scrollRemainder.y + zB.y
          };
          const QB = Math.trunc(this.scrollRemainder.x),
            nB = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - QB,
            y: this.scrollRemainder.y - nB
          };
          const dB = this.hit;
          if (!dB) return;
          let IB = !1;
          if (0 !== nB) {
            const BB = zI(dB, "y", nB > 0 ? 1 : -1, jB);
            BB && (BB.scrollBy({
              top: nB,
              behavior: "instant"
            }), IB = !0)
          }
          if (0 !== QB) {
            const BB = zI(dB, "x", QB > 0 ? 1 : -1, jB);
            BB && (BB.scrollBy({
              left: QB,
              behavior: "instant"
            }), IB = !0)
          }
          IB && (this.lastHitTestMs = -1 / 0)
        }
        Ly() {
          KB.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      nI = () => {
        const BB = (0, XB.useMemo)((() => new eB), []),
          jB = (0, sB.B)();
        return (0, XB.useEffect)((() => {
          if (!jB) return;
          let zB = 0,
            QB = {
              of: null,
              atMs: 0,
              list: []
            };
          const nB = document.getElementsByClassName(oQ),
            dB = BB => {
              for (const jB of [...nB]) jB !== BB && jB.classList.remove(oQ)
            },
            IB = () => {
              var jB;
              zB = requestAnimationFrame(IB);
              const nB = (() => {
                const BB = OQ.getFocused();
                if (OQ.isActive() && null !== BB && void 0 !== BB && BB.isConnected) return BB;
                const jB = QI.getHighlighted();
                return null !== jB && void 0 !== jB && jB.isConnected ? jB : null
              })();
              dB(nB), nB && !nB.classList.contains(oQ) && nB.classList.add(oQ);
              const NB = null !== (jB = null === nB || void 0 === nB ? void 0 : nB.closest("[data-pad-reticle-box]")) && void 0 !== jB ? jB : nB;
              BB.show(NB ? ((BB, jB) => {
                let zB = BB.left,
                  QB = BB.top,
                  nB = BB.right,
                  dB = BB.bottom;
                for (const IB of jB) {
                  if (!IB) continue;
                  const BB = VB(IB);
                  zB = Math.max(zB, BB.left), QB = Math.max(QB, BB.top), nB = Math.min(nB, BB.right), dB = Math.min(dB, BB.bottom)
                }
                return nB <= zB || dB <= QB ? null : {
                  left: zB,
                  top: QB,
                  width: nB - zB,
                  height: dB - QB
                }
              })(NB.getBoundingClientRect(), (BB => {
                const jB = performance.now();
                return (QB.of !== BB || jB - QB.atMs > 500) && (QB = {
                  of: BB,
                  atMs: jB,
                  list: [fB(BB, "y"), fB(BB, "x")]
                }), QB.list
              })(NB)) : null)
            };
          return zB = requestAnimationFrame(IB), () => {
            cancelAnimationFrame(zB), dB(null), BB.hide()
          }
        }), [jB, BB]), (0, TB.jsx)(lB, {
          placer: BB,
          className: "PadFocusRing"
        })
      },
      dI = (BB, jB) => {
        BB.style.transform = `translate3d(${jB.x}px, ${jB.y}px, 0)`, BB.classList.toggle("Visible", jB.visible), BB.classList.toggle("Pressed", jB.pressed)
      },
      II = () => {
        const BB = (0, XB.useRef)(null);
        return (0, XB.useEffect)((() => {
          const jB = KB.subscribe((jB => {
            BB.current && dI(BB.current, jB)
          }));
          return BB.current && dI(BB.current, KB.get()), jB
        }), []), (0, TB.jsx)("div", {
          ref: BB,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, TB.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      NI = "#ncmp__modal.ncmp__active",
      uI = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(NI) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(NI),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      UI = "PadOverThirdParty",
      aI = new Set(uI.map((BB => BB.id))),
      pI = () => {
        const BB = uI.map((BB => {
            let {
              id: jB,
              find: zB,
              startSelectors: QB
            } = BB;
            return (0, zQ.p)({
              id: jB,
              kind: "popup",
              getRoot: () => {
                const BB = zB(),
                  jB = BB ? ((BB, jB) => {
                    var zB;
                    for (const QB of jB) {
                      const jB = BB.querySelector(QB);
                      if (jB) return jB
                    }
                    return null !== (zB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== zB ? zB : null
                  })(BB, QB) : null;
                if (BB && jB && !jB.hasAttribute("data-pad-default-focus")) {
                  for (const jB of BB.querySelectorAll("[data-pad-default-focus]")) jB.removeAttribute("data-pad-default-focus");
                  for (const jB of BB.querySelectorAll("[data-pad-hint-bar-avoid]")) jB.removeAttribute("data-pad-hint-bar-avoid");
                  jB.setAttribute("data-pad-default-focus", ""), ((BB, jB) => {
                    let zB = BB;
                    for (let QB = BB.parentElement; QB && jB.contains(QB) && !(QB.getBoundingClientRect().height >= window.innerHeight / 2); QB = QB.parentElement) zB = QB;
                    return zB
                  })(jB, BB).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return BB
              },
              close: null,
              memoryKey: null
            })
          })),
          jB = document.documentElement,
          zB = IB.f.onFrame((() => {
            const BB = (0, sB.m)() ? aQ() : null,
              zB = !!BB && (QB = BB.layer, aI.has(QB.id));
            var QB;
            jB.classList.contains(UI) !== zB && jB.classList.toggle(UI, zB)
          }));
        return () => {
          for (const jB of BB) jB();
          zB(), jB.classList.remove(UI)
        }
      },
      rI = "PadLargePointer",
      sI = () => {
        (0, XB.useEffect)((() => {
          const BB = (0, kB.i)(document.body),
            jB = OQ.install(),
            zB = QI.install(),
            QB = pI();
          return () => {
            BB(), jB(), zB(), QB()
          }
        }), []);
        const {
          largePointer: BB
        } = (0, rB.p)(), jB = (0, Pd.u)() && BB;
        return (0, XB.useEffect)((() => {
          if (jB) return document.documentElement.classList.add(rI), () => {
            document.documentElement.classList.remove(rI)
          }
        }), [jB]), (0, NB.createPortal)((0, TB.jsxs)(TB.Fragment, {
          children: [(0, TB.jsx)(vd, {}), (0, TB.jsx)(nI, {}), (0, TB.jsx)(II, {})]
        }), document.body)
      };
    var JI = zB(8776),
      mI = zB(8798),
      yI = zB(8792);
    zB(8805);
    const kI = (BB, jB) => {
        const [zB, QB] = (0, XB.useState)(!1), [nB, dB] = (0, XB.useState)(null), IB = (0, XB.useRef)(null), NB = (0, XB.useCallback)((BB => {
          IB.current = BB, dB(BB)
        }), []), uB = (0, XB.useCallback)((() => {
          QB(!1), NB(null)
        }), [NB]), aB = (0, XB.useCallback)((() => {
          QB(!0)
        }), []), pB = (0, XB.useCallback)(((BB, jB) => {
          NB((0, yI.x)(BB, jB, IB.current))
        }), [NB]);
        (0, XB.useLayoutEffect)((() => (jB(zB), (0, Wd.v)(BB, zB), UB.n.Ly(Wd.p), () => {
          jB(!1), (0, Wd.v)(BB, !1), UB.n.Ly(Wd.p)
        })), [zB, BB, jB]), (0, yn.f)("appManagerUpdated|activeInputDevice", (BB => {
          "gamepad" !== BB && uB()
        })), (0, yn.f)("appManagerUpdated|gameState", (BB => {
          "inGame" !== BB && uB()
        }));
        const rB = () => {
          (0, uz.m)() && uB()
        };
        return (0, yn.f)("appManagerUpdated|openEverythingMenuName", rB), (0, yn.f)("appManagerUpdated|openInGameMenuName", rB), {
          open: zB,
          picked: nB,
          pickedRef: IB,
          show: aB,
          aim: pB,
          close: uB
        }
      },
      GI = BB => {
        let {
          className: jB,
          slotCount: zB,
          picked: QB,
          slotLabel: nB,
          renderSlot: dB,
          centre: IB
        } = BB;
        const NB = Array.from({
          length: zB
        }, ((BB, jB) => jB));
        return (0, TB.jsx)("div", {
          className: AB()("EmoteWheelOverlay PadRadialWheel", jB),
          children: (0, TB.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * yI.n + "rem",
              height: 2 * yI.n + "rem"
            },
            children: [(0, TB.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${yI.i} ${yI.i}`,
              children: [NB.map((BB => (0, TB.jsx)("path", {
                d: (0, yI.o)(BB, zB, yI.c, yI.d, yI.f),
                className: AB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: BB === QB
                }),
                "aria-label": nB(BB)
              }, BB))), (0, TB.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: yI.c,
                cy: yI.c,
                r: yI.f
              }), (0, TB.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: yI.c,
                cy: yI.c,
                r: yI.d
              }), null !== QB && (0, TB.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, yI.o)(QB, zB, yI.c, yI.d, yI.f)
              })]
            }), NB.map((BB => {
              const jB = (0, yI.t)(BB, zB);
              return (0, TB.jsx)("div", {
                className: AB()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: BB === QB
                }),
                style: {
                  left: `calc(50% + ${yI.b*Math.cos(jB)}rem)`,
                  top: `calc(50% + ${yI.b*Math.sin(jB)}rem)`
                },
                "aria-hidden": !0,
                children: dB(BB)
              }, BB)
            })), (0, TB.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: IB
            })]
          })
        })
      },
      LI = Jd.length,
      gI = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = kI("chat", Hz.k), zB = (0, XB.useMemo)((() => Jd.map((jB => BB(jB)))), [BB]);
        return (0, yn.f)(Hz.i, (() => {
          jB.open || (0, JI.h)() || (0, mI.j)() || "inGame" !== uB.c.get("gameState") || (0, uz.m)() || !(0, fz.e)() || jB.show()
        })), (0, yn.f)(Hz.e, (BB => {
          jB.open && jB.aim(BB, LI)
        })), (0, yn.f)(Hz.h, (() => {
          var BB;
          if (!jB.open) return;
          const QB = jB.pickedRef.current;
          null !== QB ? md.claim(performance.now()) && (jB.close(), null === (BB = (0, fz.e)()) || void 0 === BB || BB.sendLine(zB[QB])) : jB.close()
        })), (0, yn.f)(Hz.f, jB.close), jB.open ? (0, TB.jsx)(GI, {
          className: "QuickChatWheel",
          slotCount: LI,
          picked: jB.picked,
          slotLabel: BB => zB[BB],
          renderSlot: BB => zB[BB],
          centre: null !== jB.picked ? zB[jB.picked] : BB("controller:quickChatPick")
        }) : null
      },
      tI = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = kI("actionButton", mI.k), [zB, QB] = (0, XB.useState)([]);
        if ((0, yn.f)(mI.f, (BB => {
            jB.open || (0, JI.h)() || (0, Hz.d)() || "inGame" !== uB.c.get("gameState") || (0, uz.m)() || (QB(BB), jB.show())
          })), (0, yn.f)(mI.b, (BB => {
            jB.open && jB.aim(BB, zB.length)
          })), (0, yn.f)(mI.e, (() => {
            if (!jB.open) return;
            const BB = jB.pickedRef.current;
            jB.close(), null !== BB && UB.n.Ly(mI.g, zB[BB])
          })), (0, yn.f)(mI.c, jB.close), !jB.open) return null;
        const dB = null !== jB.picked ? zB[jB.picked] : null;
        return (0, TB.jsx)(GI, {
          className: "ActionWheel",
          slotCount: zB.length,
          picked: jB.picked,
          slotLabel: jB => {
            const QB = zB[jB];
            return "reload" === QB.kind ? BB("controller:gameplayReload") : "customButton" === QB.kind ? QB.description || QB.icon : "touchButton" === QB.kind && "string" === typeof QB.label ? QB.label : ""
          },
          renderSlot: BB => (0, TB.jsx)(En, {
            action: zB[BB]
          }),
          centre: dB ? (0, TB.jsx)(En, {
            action: dB
          }) : BB("controller:actionWheelPick")
        })
      };
    var SI = zB(106);
    const MI = () => ((0, XB.useEffect)((() => {
        var BB, jB;
        const zB = (0, kB.i)(document.getElementById("root")),
          QB = (0, sB.g)(),
          nB = (() => {
            const BB = [UB.n.subscribe(jn.c, (() => {
                dn("blockBreak")
              })), UB.n.subscribe("damagedByOtherPlayer", (() => {
                dn("damage")
              })), UB.n.subscribe("yourAttackHit", (BB => {
                let {
                  hitSelf: jB
                } = BB;
                jB || dn("hit")
              }))],
              jB = IB.f.onActivePadChanged((BB => {
                BB && dn("connect")
              }));
            return () => {
              for (const jB of BB) UB.n.unsubscribe(jB);
              jB()
            }
          })(),
          dB = (() => {
            const BB = new pn({
              getVisitId: an.h,
              peekVisitId: an.peekVisitSessionId,
              readReportedVisitId: () => {
                const BB = Un.k.getItem(rn);
                return "string" === typeof BB ? BB : null
              },
              writeReportedVisitId: BB => {
                Un.k.setItem(rn, BB)
              },
              isPadActive: sB.m,
              getPadFamily: () => {
                var BB, jB;
                return null !== (BB = null === (jB = IB.f.getActivePad()) || void 0 === jB ? void 0 : jB.family) && void 0 !== BB ? BB : null
              },
              canReport: Nn.isBloxdGa4Ready,
              getInputType: un.c,
              JJ: Nn.logControllerUsedToGtag
            });
            let jB = 0,
              zB = null;
            const QB = nB => {
                null === zB && ("notReady" !== BB.check(nB) || null !== zB || jB >= 20 || (jB++, zB = setTimeout((() => {
                  zB = null, QB(!1)
                }), 3e3)))
              },
              nB = UB.n.subscribe("appManagerUpdated|activeInputDevice", (() => {
                QB(!0)
              })),
              dB = (0, an.n)((() => {
                jB = 0, QB(!0)
              }));
            return () => {
              UB.n.unsubscribe(nB), dB(), null !== zB && clearTimeout(zB)
            }
          })(),
          NB = IB.f.onFrame(((BB, jB, zB) => {
            const QB = (0, sB.o)(BB, zB);
            pB.c.dispatch(BB, jB, QB)
          }));
        let aB = null !== (BB = null === (jB = IB.f.getActivePad()) || void 0 === jB ? void 0 : jB.family) && void 0 !== BB ? BB : null;
        const JB = IB.f.onActivePadChanged((BB => {
            var jB, zB;
            (pB.c.reset(), (0, sB.u)(), UB.n.Ly(IB.d, BB), (null !== (jB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== jB ? jB : null) !== aB) && (aB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== zB ? zB : null, UB.n.Ly(rB.e, (0, rB.j)()));
            !BB && (0, sB.m)() && (0, sB.x)(uB.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          mB = () => {
            "visible" !== document.visibilityState && pB.c.clear()
          },
          yB = () => {
            pB.c.clear()
          };
        document.addEventListener("visibilitychange", mB), window.addEventListener("blur", yB), IB.f.start(), (0, In.k)();
        const GB = null;
        return () => {
          zB(), QB(), nB(), dB(), NB(), JB(), document.removeEventListener("visibilitychange", mB), window.removeEventListener("blur", yB), IB.f.stop(), null === GB || void 0 === GB || GB()
        }
      }), []), (0, TB.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, TB.jsx)(Vn, {}), (0, TB.jsx)(wn, {}), (0, TB.jsx)(xn, {}), (0, TB.jsx)(Ad, {}), (0, TB.jsx)(sI, {}), (0, TB.jsx)(gI, {}), (0, TB.jsx)(tI, {})]
      })),
      EI = () => SI.featureFlags.useControllerSupport ? (0, TB.jsx)(MI, {}) : null;
    var iI = zB(8160),
      qI = zB(8814);
    const fI = new Set(In.g),
      oI = BB => `${qI.n}${(0,rB.m)()}/${BB}`,
      HI = BB => {
        if (!(0, qI.m)(BB)) return null;
        const [jB, zB] = BB.slice(qI.n.length).split("/");
        return (0, iI.h)(jB) && fI.has(zB) ? (0, In.f)(jB, zB) : null
      };
    var DI = zB(8821);
    const FI = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, sB.B)(), {
          gameState: zB,
          isUiHidden: QB
        } = (0, uB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: dB,
          sneakMode: IB
        } = (0, rB.p)(), [NB, UB] = (0, XB.useState)(DI.b);
        return (0, yn.f)(Yn.t, UB), jB && !QB && "inGame" === zB && NB ? (0, TB.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!dB && (0, TB.jsx)(Sn, {
            glyph: (0, aB.h)("toggle" === IB ? "sneak" : "sneakToggle")
          }), (0, TB.jsx)("span", {
            children: BB("controller:gameplaySneaking")
          })]
        }) : null
      },
      YI = 12,
      VI = BB => {
        let {
          trigger: jB,
          className: zB,
          children: QB
        } = BB;
        const nB = (0, XB.useRef)(null);
        return (0, XB.useEffect)((() => {
          let BB = 0;
          const zB = fB(jB, "y"),
            QB = () => {
              BB = requestAnimationFrame(QB);
              const dB = nB.current;
              if (!dB || null === jB || void 0 === jB || !jB.isConnected) return;
              const {
                left: IB,
                top: NB
              } = function(BB, jB, zB) {
                let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const dB = BB.left + BB.width / 2,
                  IB = Math.max(YI, zB.width - YI - jB.width),
                  NB = Math.min(Math.max(dB - jB.width / 2, YI), IB),
                  uB = zB.height - QB;
                let UB = 0,
                  aB = uB;
                if (nB) {
                  const BB = Math.max(0, nB.top),
                    QB = Math.min(uB, nB.bottom);
                  QB - BB >= Math.max(zB.height / 2, jB.height + 24) && (UB = BB, aB = QB)
                }
                const pB = BB.top + BB.height / 2 < (UB + aB) / 2 ? aB - YI - jB.height : UB + YI;
                return {
                  left: NB,
                  top: Math.max(YI, pB)
                }
              }(jB.getBoundingClientRect(), {
                width: dB.offsetWidth,
                height: dB.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(xd)) || 0, null !== zB && void 0 !== zB && zB.isConnected ? zB.getBoundingClientRect() : null);
              dB.style.transform = `translate3d(${Math.round(IB)}px, ${Math.round(NB)}px, 0)`, dB.style.visibility = "visible"
            };
          return QB(), () => {
            cancelAnimationFrame(BB)
          }
        }), [jB]), (0, TB.jsx)("div", {
          ref: nB,
          className: zB,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: QB
        })
      };
    var hI = zB(1108),
      XI = zB(8830),
      ZI = zB(1478),
      AI = zB(8839),
      TI = zB(8841);
    const PI = {
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
      WI = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, sB.B)(), zB = (0, XI.b)(), QB = (0, Pn.i)("_tasks"), dB = (0, Pn.i)("_availableLeaderboards");
        if (!jB) return null;
        const IB = (BB => {
          let {
            hasShop: jB,
            hasTasksOrLeaderboards: zB,
            canInvite: QB
          } = BB;
          const nB = [];
          return jB && nB.push("shop"), zB && nB.push("tasks"), QB && nB.push("invite"), nB.push("leave"), nB
        })({
          hasShop: zB,
          hasTasksOrLeaderboards: !(!QB && !dB),
          canInvite: !!SI.featureFlags.canUseInviteLinks
        });
        return (0, TB.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: IB.map((jB => {
            const {
              icon: zB,
              labelKey: QB
            } = PI[jB], nB = "leave" === jB ? ZI.G : ZI.f;
            return (0, TB.jsx)(nB, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (BB => {
                  switch (BB) {
                    case "shop":
                      return UB.n.Ly(TI.k), void uB.c.set({
                        openEverythingMenuName: Nz.o.SHOP
                      });
                    case "tasks":
                      return void UB.n.Ly("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void UB.n.Ly("toggleMenu", "inviteLink");
                    case "leave":
                      (0, AI.c)()
                  }
                })(jB)
              },
              children: (0, TB.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, TB.jsx)(hI.c, {
                  name: zB
                }), (0, TB.jsx)("span", {
                  children: BB(QB)
                })]
              })
            }, jB)
          }))
        })
      };
    var eI = zB(2033);
    const lI = JB.F,
      wI = ["forward", "backward", "left", "right", "sprint"],
      xI = BB => BB.ctrlKey || BB.altKey || "Alt" === BB.key || "ArrowUp" === BB.key || "ArrowDown" === BB.key || "Tab" === BB.code || "/" === BB.key || "Slash" === BB.code;
    class KI {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(JB._).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(BB) {
        this.armed = BB
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || jB ? !BB.repeat && this.swallowedKeys.delete(BB.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(BB.code),
          continues: !1
        } : "Escape" === BB.key || BB.repeat && !this.swallowedKeys.has(BB.code) ? {
          swallow: !1,
          continues: !1
        } : zB ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(BB.code), {
          swallow: !0,
          continues: (0, sB.i)(BB)
        })
      }
      onKeyUp(BB) {
        return this.swallowedKeys.delete(BB.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nB = (0, JB.u)(BB.values, this.previousHeld),
          dB = null === zB ? -1 : (0, JB.o)(zB),
          IB = dB >= 0 && nB[dB] && !this.previousHeld[dB],
          NB = nB.some(((BB, jB) => BB && !this.previousHeld[jB] && jB !== dB)),
          uB = Math.hypot(BB.leftStick.x, BB.leftStick.y) >= lI,
          UB = Math.hypot(BB.rightStick.x, BB.rightStick.y) >= lI,
          aB = uB && !this.leftStickWasPressed || UB && !this.rightStickWasPressed;
        this.previousHeld = nB, this.leftStickWasPressed = uB, this.rightStickWasPressed = UB;
        let pB = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, pB = !0);
        const rB = !jB && IB && !QB,
          sB = !rB && this.armed && !jB && (NB || aB);
        return (rB || sB) && (this.consumeNextFrame = !0, this.consumeAfterContinue = sB, pB = !0), {
          continues: sB,
          back: rB,
          consumeHeld: pB
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const CI = new Set([...eI.l, ...eI.E]),
      cI = BB => ((BB, jB, zB) => {
        const QB = Object.keys(jB).filter((QB => !zB.has(QB) && jB[QB].includes(BB)));
        return QB.length > 0 && QB.every((BB => wI.includes(BB)))
      })(BB, eI.w, CI),
      bI = (BB, jB, zB) => {
        const QB = new KI,
          nB = BB => {
            if (!BB.isTrusted) return;
            const {
              swallow: zB,
              continues: nB
            } = QB.onKeyDown(BB, !(0, sB.H)(BB) || (0, Bn.j)() || (0, uz.m)(), cI(BB.code));
            zB && (BB.stopImmediatePropagation(), xI(BB) && BB.preventDefault()), nB && ((0, sB.x)("keyboardMouse"), jB())
          },
          dB = BB => {
            BB.isTrusted && QB.onKeyUp(BB) && (BB.stopImmediatePropagation(), xI(BB) && BB.preventDefault())
          },
          NB = () => {
            QB.forgetKeys()
          };
        window.addEventListener("keydown", nB, !0), window.addEventListener("keyup", dB, !0), window.addEventListener("blur", NB);
        const uB = IB.f.onFrame((BB => {
            const nB = pB.c.getActiveConsumerName(),
              dB = zB(),
              IB = dB ? (0, aB.h)("menuBack") : null,
              NB = null !== nB && "gameplay" !== nB,
              {
                continues: uB,
                back: UB,
                consumeHeld: JB
              } = QB.onPadFrame(BB, NB, IB, (0, sB.n)(BB));
            if (JB) {
              const BB = (0, rB.j)().swapSticks ? "right" : "left";
              pB.c.consumeAllHeld(QB.consumeLeavesMoveStick() ? BB : null)
            }
            UB ? null === dB || void 0 === dB || dB() : uB && jB()
          })),
          UB = (0, Bn.n)(`pressToContinue:${BB}`, (() => QB.blocksGameplay()));
        return {
          setArmed: BB => {
            QB.setArmed(BB)
          },
          dispose: () => {
            window.removeEventListener("keydown", nB, !0), window.removeEventListener("keyup", dB, !0), window.removeEventListener("blur", NB), uB(), UB()
          }
        }
      };
    var vI = zB(5078),
      RI = zB(3545),
      OI = zB(3252),
      BN = zB(8162);
    const jN = BB => {
        let {
          text: jB
        } = BB;
        return (0, TB.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: jB
        })
      },
      zN = BB => {
        let {
          label: jB,
          hint: zB,
          options: QB,
          value: dB,
          onChange: IB
        } = BB;
        const {
          t: NB
        } = (0, nB.D)();
        return (0, TB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, TB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, TB.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, TB.jsx)("div", {
                className: "SliderText",
                children: jB
              }), zB && (0, TB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: zB
              })]
            }), (0, TB.jsx)(OI.e, {
              options: QB.map((BB => ({
                label: "label" in BB ? BB.label : NB(BB.labelKey),
                value: BB.value
              }))),
              value: dB,
              onChange: BB => {
                IB(BB.value)
              }
            })]
          })
        })
      },
      QN = BB => {
        let {
          settingKey: jB,
          label: zB,
          range: QB,
          format: nB
        } = BB;
        const dB = (0, rB.p)();
        return (0, TB.jsx)(vI.f, {
          name: zB,
          min: QB.min,
          max: QB.max,
          step: QB.step,
          padStep: QB.step,
          initValue: dB[jB],
          format: nB,
          onChange: BB => {
            (0, rB.o)({
              [jB]: (0, BN.x)(BB, QB)
            })
          }
        })
      };
    var nN = zB(8850),
      dN = zB(8859);
    const IN = BB => BB instanceof DOMException && ("SecurityError" === BB.name || "NotAllowedError" === BB.name),
      NN = BB => {
        const [jB] = [...BB.controllers].sort(((BB, jB) => dN.n[BB] - dN.n[jB]));
        return dN.j[jB]
      },
      uN = BB => {
        (0, nN.b)().allowPhoneMotion().catch((jB => {
          BB && IN(jB) ? BB() : console.warn("Could not enable the motion sensor", jB)
        }))
      },
      UN = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      aN = BB => {
        let {
          status: jB
        } = BB;
        const {
          t: zB
        } = (0, nB.D)(), [QB, dB] = (0, XB.useState)(null), IB = `${jB.controllers.join(",")}|${jB.phoneMotion}`;
        (0, XB.useEffect)((() => {
          dB(null)
        }), [IB]);
        const NB = () => {
          (0, nN.b)().connectController().then((BB => {
            dB(BB > 0 ? "openFailed" : null)
          })).catch((BB => {
            IN(BB) ? dB("needsClick") : console.warn("Could not connect motion controller", BB)
          }))
        };
        if (jB.hidSupported) {
          let BB = zB("controller:settingsGyroConnectHint");
          return "needsClick" === QB ? BB = zB("controller:settingsGyroConnectNeedsClick") : "openFailed" === QB ? BB = zB("controller:settingsGyroOpenFailed") : jB.controllers.length > 0 && (BB = zB("controller:settingsGyroConnected", {
            name: NN(jB)
          })), (0, TB.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, TB.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, TB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: BB
              }), (0, TB.jsx)(ZI.f, {
                onClick: NB,
                children: zB("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === jB.phoneMotion) return (0, TB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, TB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === QB && (0, TB.jsx)("div", {
              className: "ControllerSettingsHint",
              children: zB("controller:settingsGyroAllowNeedsTap")
            }), (0, TB.jsx)(ZI.f, {
              onClick: () => {
                uN((() => {
                  dB("needsTap")
                }))
              },
              children: zB("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const uB = UN[jB.phoneMotion];
        return uB ? (0, TB.jsx)("div", {
          className: "ControllerSettingsHint",
          children: zB(uB)
        }) : null
      },
      pN = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, rB.p)(), zB = (0, nN.d)(), QB = (0, sB.F)(), dB = !zB.hidSupported && zB.phoneSupported && !zB.padConnected, IB = (zB.hidSupported || zB.phoneSupported) && !dB, NB = (0, aB.h)("pause");
        return (0, TB.jsxs)(TB.Fragment, {
          children: [(0, TB.jsx)(jN, {
            text: BB("controller:settingsGyro")
          }), dB && (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroPhoneNeedsController")
          }), !IB && !dB && (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB(zB.hidBlocked || zB.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), IB && (0, TB.jsx)(vI.b, {
            label: BB(zB.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: jB.gyroAiming,
            onClick: BB => {
              var jB, zB;
              (0, rB.o)({
                gyroAiming: BB
              });
              const QB = null === (jB = null === (zB = navigator.userActivation) || void 0 === zB ? void 0 : zB.isActive) || void 0 === jB || jB;
              if (!BB || !QB) return;
              const nB = (0, nN.b)(),
                dB = nB.getStatus();
              dB.hidSupported ? nB.connectControllerIfNoneGranted().catch((BB => {
                console.warn("Motion controller picker unavailable", BB)
              })) : "needsPermission" === dB.phoneMotion && uN()
            },
            circleInfoText: BB(zB.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), IB && zB.hidSupported && (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroSteamHint")
          }), IB && jB.gyroAiming && (0, TB.jsxs)(TB.Fragment, {
            children: [(0, TB.jsx)(aN, {
              status: zB
            }), (0, TB.jsx)(QN, {
              settingKey: "gyroSensitivity",
              label: BB("controller:settingsGyroSensitivity"),
              range: BN.N,
              format: BN.F
            }), (0, TB.jsx)(zN, {
              label: BB("controller:settingsGyroActivation"),
              hint: "aiming" === jB.gyroActivation && (0, TB.jsx)(RI.e, {
                text: BB("controller:settingsGyroAimingHint", {
                  button: RI.f
                }),
                glyph: (0, aB.h)("use")
              }),
              options: BN.J,
              value: jB.gyroActivation,
              onChange: BB => {
                (0, rB.o)({
                  gyroActivation: BB
                })
              }
            }), "button" === jB.gyroActivation && (0, TB.jsx)(zN, {
              label: BB("controller:settingsGyroButton"),
              hint: BB("controller:settingsGyroButtonHint"),
              options: BN.q.filter((BB => BB !== NB || BB === jB.gyroButton)).map((BB => ({
                label: tn(QB, BB),
                value: BB
              }))),
              value: jB.gyroButton,
              onChange: BB => {
                (0, rB.o)({
                  gyroButton: BB
                })
              }
            })]
          })]
        })
      };
    var rN = zB(1901);
    const sN = () => {
      const {
        t: BB
      } = (0, nB.D)(), jB = (0, rB.p)(), zB = (0, sB.F)();
      return (0, TB.jsxs)(TB.Fragment, {
        children: [(0, TB.jsx)(jN, {
          text: BB("controller:settingsAccessibility")
        }), (0, TB.jsx)(vI.b, {
          label: BB("controller:settingsSwapConfirmBack"),
          checked: (0, aB.I)(jB.swapConfirmBack, zB),
          onClick: BB => {
            (0, rB.o)({
              swapConfirmBack: BB === (0, aB.I)(null, zB) ? null : BB
            }), rN.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: BB("controller:settingsSwapConfirmBackInfo")
        }), (0, TB.jsx)(zN, {
          label: BB("controller:settingsButtonRepeat"),
          hint: BB("controller:settingsButtonRepeatHint"),
          options: BN.o,
          value: jB.buttonRepeat,
          onChange: BB => {
            (0, rB.o)({
              buttonRepeat: BB
            })
          }
        }), (0, TB.jsx)(zN, {
          label: BB("controller:settingsTapHoldTime"),
          hint: BB("controller:settingsTapHoldTimeHint"),
          options: BN.ob,
          value: jB.tapHoldTime,
          onChange: BB => {
            (0, rB.o)({
              tapHoldTime: BB
            })
          }
        }), (0, TB.jsx)(zN, {
          label: BB("controller:settingsEmoteButton"),
          hint: BB("wheel" === jB.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: BN.B,
          value: jB.emoteButton,
          onChange: BB => {
            (0, rB.o)({
              emoteButton: BB
            })
          }
        }), (0, TB.jsx)(zN, {
          label: BB("controller:settingsAttackMode"),
          hint: BB("toggle" === jB.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: BN.m,
          value: jB.attackMode,
          onChange: BB => {
            (0, rB.o)({
              attackMode: BB
            })
          }
        }), (0, TB.jsx)(vI.b, {
          label: BB("controller:settingsLargePointer"),
          checked: jB.largePointer,
          onClick: BB => {
            (0, rB.o)({
              largePointer: BB
            })
          },
          circleInfoText: BB("controller:settingsLargePointerInfo")
        })]
      })
    };
    var JN = zB(8867);
    const mN = new class {
        constructor(BB) {
          this.router = BB, this.current = null
        }
        claim(BB, jB) {
          const zB = this.current;
          zB && (this.current = null, zB.release(), zB.onTakenOver());
          const QB = this.router.register({
              ...BB,
              name: "capture"
            }),
            nB = {
              release: QB,
              onTakenOver: jB
            };
          return this.current = nB, () => {
            this.current === nB && (this.current = null), QB()
          }
        }
      }(pB.c),
      yN = BB => {
        (0, XB.useEffect)((() => {
          if (!BB) return;
          const jB = BB();
          let zB = !1;
          const QB = () => {
              zB || (zB = !0, jB.onEnd())
            },
            nB = mN.claim({
              isActive: () => !zB,
              onFrame: BB => {
                jB.onFrame(BB, QB)
              }
            }, QB),
            dB = void 0 === jB.timeoutMs ? void 0 : window.setTimeout(QB, jB.timeoutMs),
            IB = BB => {
              "Escape" === BB.key && (BB.preventDefault(), BB.stopPropagation(), QB())
            };
          return window.addEventListener("keydown", IB, !0), () => {
            zB = !0, nB(), window.clearTimeout(dB), window.removeEventListener("keydown", IB, !0)
          }
        }), [BB])
      },
      kN = BB => {
        let {
          row: jB,
          capturing: zB,
          onCapture: QB,
          holdFillRef: dB,
          onRebind: IB,
          swapped: NB
        } = BB;
        const {
          t: uB
        } = (0, nB.D)();
        if ("fixed" === jB.kind) return (0, TB.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, TB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, TB.jsx)("div", {
              className: "ControlName",
              children: uB(jB.labelKey)
            }), (0, TB.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, TB.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, TB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, TB.jsx)(Sn, {
                    glyph: "move" === jB.stick ? (0, aB.u)() : (0, aB.s)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: UB
        } = jB, pB = (0, aB.h)(UB), rB = (0, aB.l)(UB), sB = pB !== rB && (0, aB.c)(UB, rB);
        return (0, TB.jsxs)("div", {
          className: AB()("ControlRow PadControlRow", {
            Capturing: zB
          }),
          children: [(0, TB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, TB.jsx)("div", {
              className: "ControlName",
              children: uB(BN.h[UB])
            }), (0, TB.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!zB && (0, TB.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, TB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    QB(UB)
                  },
                  children: (0, TB.jsx)(Sn, {
                    glyph: pB
                  })
                }), sB && (0, TB.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: uB("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    IB(UB, rB)
                  },
                  children: (0, TB.jsx)(hI.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), zB && (0, TB.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, TB.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, TB.jsx)("span", {
                    children: uB("controller:settingsCapturePrompt")
                  }), (0, TB.jsx)("div", {
                    ref: dB,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, TB.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    QB(null)
                  },
                  children: "\xd7"
                })]
              }), zB && (0, TB.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, TB.jsx)(RI.e, {
                  text: uB((0, aB.c)(UB, (0, aB.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: RI.f
                  }),
                  glyph: (0, aB.h)("menuBack")
                })
              })]
            })]
          }), NB.map((BB => (0, TB.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, TB.jsx)(RI.e, {
              text: uB("controller:settingsSwapNotice", {
                action: uB(BN.h[BB]),
                button: RI.f
              }),
              glyph: (0, aB.h)(BB)
            })
          }, BB))), zB && (0, TB.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${BN.t}ms`
            }
          })]
        })
      },
      GN = [],
      LN = BB => {
        let {
          layoutSetting: jB
        } = BB;
        const {
          t: zB
        } = (0, nB.D)(), QB = (0, rB.p)();
        (0, sB.F)();
        const dB = (0, XB.useRef)(null),
          [IB, NB] = (0, XB.useState)(null),
          uB = (0, XB.useCallback)(((BB, jB) => {
            const zB = (0, rB.j)().bindings;
            (0, aB.F)(BB, jB);
            const QB = (0, aB.w)(zB, BB);
            NB(QB.length > 0 ? {
              action: BB,
              swapped: QB
            } : null)
          }), []),
          [UB, mB] = ((BB, jB) => {
            const [zB, QB] = (0, XB.useState)(null), nB = (0, XB.useMemo)((() => zB ? () => {
              const nB = (0, aB.h)("menuBack"),
                dB = new BN.b(nB, (0, aB.h)("menuConfirm"), (BB => (0, aB.c)(zB, BB)));
              return {
                onFrame: (QB, IB) => {
                  var NB;
                  const uB = QB.frame.timestampMs,
                    UB = dB.update({
                      ...QB,
                      isDown: BB => (0, JB.P)(QB.frame.values, BB)
                    }, uB);
                  null === (NB = BB.current) || void 0 === NB || NB.style.setProperty("width", 100 * dB.getBindHoldProgress(uB) + "%"), UB && ("bind" === UB.kind ? (pB.c.consumeButton(UB.button), jB(zB, UB.button)) : pB.c.consumeButton(nB), IB())
                },
                onEnd: () => {
                  QB(null)
                },
                timeoutMs: BN.t
              }
            } : null), [zB, BB, jB]);
            return yN(nB), [zB, QB]
          })(dB, uB),
          yB = BB => {
            BB && NB(null), mB(BB)
          };
        (0, XB.useEffect)((() => {
          if (!IB) return;
          const BB = window.setTimeout((() => {
            NB(null)
          }), BN.lb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [IB]);
        const kB = !QB.swapSticks && 0 === Object.keys(QB.bindings).length;
        return (0, TB.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, TB.jsx)("div", {
            className: "SliderText",
            children: zB("controller:settingsRemap")
          }), (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zB("controller:settingsRemapHint")
          }), (0, TB.jsx)(ZI.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: kB,
            onClick: () => {
              yB(null), NB(null), (0, aB.G)()
            },
            children: zB("controller:settingsResetAll")
          }), jB, BN.bb.map(((BB, jB) => (0, TB.jsx)(JN.c, {
            title: zB(BB.titleKey),
            defaultOpen: 0 === jB,
            children: BB.rows.map((BB => (0, TB.jsx)(kN, {
              row: BB,
              capturing: "action" === BB.kind && BB.action === UB,
              onCapture: yB,
              holdFillRef: dB,
              onRebind: uB,
              swapped: "action" === BB.kind && (null === IB || void 0 === IB ? void 0 : IB.action) === BB.action ? IB.swapped : GN
            }, "action" === BB.kind ? BB.action : BB.labelKey)))
          }, BB.titleKey)))]
        })
      },
      gN = BB => {
        let {
          deadzone: jB,
          dotRef: zB,
          labelKey: QB
        } = BB;
        const {
          t: dB
        } = (0, nB.D)();
        return (0, TB.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, TB.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, TB.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * jB + "%",
                height: 100 * jB + "%"
              }
            }), (0, TB.jsx)("div", {
              ref: zB,
              className: "ControllerTesterDot"
            })]
          }), (0, TB.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: dB(QB)
          })]
        })
      },
      tN = (BB, jB, zB, QB) => {
        var nB;
        BB && (BB.style.left = 50 + 50 * Math.max(-1, Math.min(1, jB.x)) + "%", BB.style.top = 50 + 50 * Math.max(-1, Math.min(1, jB.y)) + "%", null === (nB = BB.parentElement) || void 0 === nB || nB.classList.toggle("Active", QB || Math.hypot(jB.x, jB.y) > zB))
      },
      SN = BB => {
        const jB = {
            deadzone: BB.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          zB = {
            deadzone: BB.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return BB.swapSticks ? {
          left: zB,
          right: jB
        } : {
          left: jB,
          right: zB
        }
      },
      MN = () => {
        const {
          t: BB
        } = (0, nB.D)(), jB = (() => {
          const [BB, jB] = (0, XB.useState)((() => IB.f.getActivePad()));
          return (0, yn.f)(IB.d, (() => {
            jB(IB.f.getActivePad())
          })), BB
        })(), zB = SN((0, rB.p)()), QB = (0, XB.useRef)(null), dB = (0, XB.useRef)(null), NB = (0, XB.useRef)([]), uB = (0, XB.useRef)(null), UB = (0, XB.useRef)(null), [sB, mB] = (BB => {
          const [jB, zB] = (0, XB.useState)(!1), QB = (0, XB.useMemo)((() => jB ? () => {
            const jB = (0, aB.h)("menuBack"),
              QB = new BN.d;
            return {
              onFrame: (zB, nB) => {
                var dB;
                const IB = QB.update({
                  pressed: zB.wasPressed(jB),
                  DN: zB.isHeld(jB)
                }, zB.frame.timestampMs);
                null === (dB = BB.current) || void 0 === dB || dB.style.setProperty("width", 100 * IB + "%"), IB >= 1 && (pB.c.consumeButton(jB), nB())
              },
              onEnd: () => {
                zB(!1)
              }
            }
          } : null), [jB, BB]);
          return yN(QB), [jB, zB]
        })(dB);
        (0, XB.useEffect)((() => {
          const BB = BB => {
            for (const zB of JB.$) {
              const jB = (0, JB.o)(zB),
                QB = NB.current[jB];
              if (!QB) continue;
              const nB = BB.values[jB];
              QB.classList.toggle("Pressed", nB >= JB.F), (0, JB.Q)(jB) && QB.style.setProperty("--trigger-fill", `${Math.round(100*nB)}%`)
            }
            const jB = SN((0, rB.j)());
            tN(uB.current, BB.leftStick, jB.left.deadzone, BB.values[(0, JB.o)("LS")] >= JB.F), tN(UB.current, BB.rightStick, jB.right.deadzone, BB.values[(0, JB.o)("RS")] >= JB.F)
          };
          return jB || BB((0, JB.B)()), IB.f.onFrame(BB)
        }), [jB]), (0, XB.useEffect)((() => {
          jB || mB(!1)
        }), [jB, mB]), (0, XB.useEffect)((() => {
          var BB;
          sB && (null === (BB = QB.current) || void 0 === BB || BB.scrollIntoView({
            block: "nearest"
          }))
        }), [sB]);
        const yB = BN.Y.find((BB => BB.value === (null === jB || void 0 === jB ? void 0 : jB.family)));
        return (0, TB.jsxs)("div", {
          ref: QB,
          className: AB()("SettingBox ControllerTester", {
            Testing: sB
          }),
          children: [(0, TB.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, TB.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [jB && (0, TB.jsx)("div", {
                children: BB("controller:settingsTesterFamily", {
                  family: yB ? BB(yB.labelKey) : jB.family
                })
              }), jB && (0, TB.jsx)("div", {
                className: "ControllerTesterPadId",
                children: jB.id
              }), !jB && (0, TB.jsx)("div", {
                children: BB("controller:settingsTesterNoPad")
              })]
            }), (jB || sB) && (0, TB.jsx)(ZI.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                mB(!sB)
              },
              children: BB(sB ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), jB && !sB && (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsTesterHint")
          }), sB && (0, TB.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, TB.jsx)(RI.e, {
              text: BB("controller:settingsTesterTesting", {
                button: RI.f
              }),
              glyph: (0, aB.h)("menuBack")
            }), (0, TB.jsx)("div", {
              ref: dB,
              className: "ControllerTesterExitFill"
            })]
          }), (0, TB.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, TB.jsx)(gN, {
              deadzone: zB.left.deadzone,
              dotRef: uB,
              labelKey: zB.left.labelKey
            }), (0, TB.jsx)("div", {
              className: "ControllerTesterButtons",
              children: JB.$.map((BB => {
                const zB = (0, JB.o)(BB);
                return (0, TB.jsx)("div", {
                  ref: BB => {
                    NB.current[zB] = BB
                  },
                  className: (0, JB.Q)(zB) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, TB.jsx)(Sn, {
                    glyph: BB,
                    family: null === jB || void 0 === jB ? void 0 : jB.family
                  })
                }, BB)
              }))
            }), (0, TB.jsx)(gN, {
              deadzone: zB.right.deadzone,
              dotRef: UB,
              labelKey: zB.right.labelKey
            })]
          })]
        })
      },
      EN = (0, XB.memo)((function() {
        const {
          t: BB
        } = (0, nB.D)(), jB = (0, rB.p)(), [zB, QB] = (0, XB.useState)(!1);
        return (0, XB.useEffect)((() => {
          if (!zB) return;
          const BB = window.setTimeout((() => {
            QB(!1)
          }), BN.lb);
          return () => {
            window.clearTimeout(BB)
          }
        }), [zB]), (0, TB.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, TB.jsx)(jN, {
            text: BB("controller:settingsLook")
          }), (0, TB.jsx)(QN, {
            settingKey: "lookSensitivityX",
            label: BB("controller:settingsLookSensitivityX"),
            range: BN.fb,
            format: BN.I
          }), (0, TB.jsx)(QN, {
            settingKey: "lookSensitivityY",
            label: BB("controller:settingsLookSensitivityY"),
            range: BN.fb,
            format: BN.I
          }), (0, TB.jsx)(QN, {
            settingKey: "aimLookSensitivity",
            label: BB("controller:settingsAimLookSensitivity"),
            range: BN.i,
            format: BN.I
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsLookCurve"),
            hint: BB("controller:settingsLookCurveHint"),
            options: BN.W,
            value: jB.lookCurve,
            onChange: BB => {
              (0, rB.o)({
                lookCurve: BB
              })
            }
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsInvertLookX"),
            checked: jB.invertLookX,
            onClick: BB => {
              (0, rB.o)({
                invertLookX: BB
              })
            }
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsInvertLookY"),
            checked: jB.invertLookY,
            onClick: BB => {
              (0, rB.o)({
                invertLookY: BB
              })
            }
          }), (0, TB.jsx)(QN, {
            settingKey: "lookDeadzone",
            label: BB("controller:settingsLookDeadzone"),
            range: BN.A,
            format: BN.C
          }), (0, TB.jsx)(pN, {}), (0, TB.jsx)(jN, {
            text: BB("controller:settingsMovement")
          }), (0, TB.jsx)(QN, {
            settingKey: "moveDeadzone",
            label: BB("controller:settingsMoveDeadzone"),
            range: BN.A,
            format: BN.C
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsAutoSprint"),
            checked: jB.autoSprint,
            onClick: BB => {
              (0, rB.o)({
                autoSprint: BB
              })
            },
            circleInfoText: BB("controller:settingsAutoSprintInfo")
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsSneak"),
            options: BN.jb,
            value: jB.sneakMode,
            onChange: BB => {
              (0, rB.o)({
                sneakMode: BB
              })
            }
          }), (0, TB.jsx)(jN, {
            text: BB("controller:settingsButtons")
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsPromptFamily"),
            options: BN.Y,
            value: jB.promptFamily,
            onChange: BB => {
              (0, rB.o)({
                promptFamily: BB
              })
            }
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsHideButtonHints"),
            checked: jB.hideButtonHints,
            onClick: BB => {
              (0, rB.o)({
                hideButtonHints: BB
              })
            }
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsVibration"),
            checked: jB.vibration,
            onClick: BB => {
              (0, rB.o)({
                vibration: BB
              }), BB && dn("preview")
            }
          }), (0, TB.jsx)(QN, {
            settingKey: "cursorSpeed",
            label: BB("controller:settingsCursorSpeed"),
            range: BN.z,
            format: BN.I
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsCursorMagnetism"),
            checked: jB.cursorMagnetism,
            onClick: BB => {
              (0, rB.o)({
                cursorMagnetism: BB
              })
            }
          }), (0, TB.jsx)(vI.b, {
            label: BB("controller:settingsMenuBackToCategories"),
            checked: jB.menuBackToCategories,
            onClick: BB => {
              (0, rB.o)({
                menuBackToCategories: BB
              })
            }
          }), (0, TB.jsx)(LN, {
            layoutSetting: (0, TB.jsxs)(TB.Fragment, {
              children: [aB.f.map((zB => (0, TB.jsx)(vI.b, {
                label: BB(BN.S[zB]),
                checked: (0, aB.C)(zB, jB),
                onClick: BB => {
                  QB(!(0, aB.K)(zB, BB))
                }
              }, zB))), zB && (0, TB.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: BB("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, TB.jsx)(sN, {}), (0, TB.jsx)(jN, {
            text: BB("controller:settingsAlternatives")
          }), (0, TB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsAlternativesHint")
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsMenuNavigation"),
            hint: BB("controller:settingsMenuNavigationHint"),
            options: BN.X,
            value: jB.menuNavigation,
            onChange: BB => {
              (0, rB.o)({
                menuNavigation: BB
              })
            }
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsInventoryNavigation"),
            hint: BB("controller:settingsInventoryNavigationHint"),
            options: BN.P,
            value: jB.inventoryNavigation,
            onChange: BB => {
              (0, rB.o)({
                inventoryNavigation: BB
              })
            }
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsQuickChat"),
            hint: BB("controller:settingsQuickChatHint"),
            options: BN.Z,
            value: jB.quickChat,
            onChange: BB => {
              (0, rB.o)({
                quickChat: BB
              })
            }
          }), (0, TB.jsx)(zN, {
            label: BB("controller:settingsLeaderboardButton"),
            hint: BB("controller:settingsLeaderboardButtonHint"),
            options: BN.T,
            value: jB.leaderboardButton,
            onChange: BB => {
              (0, rB.o)({
                leaderboardButton: BB
              })
            }
          }), (0, TB.jsx)(jN, {
            text: BB("controller:settingsTester")
          }), (0, TB.jsx)(MN, {})]
        })
      }));
    (0, nB.d)(QB);
    for (const HN of (0, dB.j)()) HN.connected ? IB.f.handleConnectionEvent(HN) : IB.f.handleDisconnectionEvent(HN);
    const iN = () => null !== IB.f.getActivePad(),
      qN = () => nz.getState(),
      fN = () => nz.isSteppingSlots(),
      oN = (BB, jB) => {
        const zB = OQ.getFocused();
        OQ.isActive() && zB && BB.contains(zB) && OQ.setFocus(jB, {
          scroll: !1
        })
      }
  },
  8139: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => uB,
      g: () => UB
    });
    var QB = zB(1450),
      nB = zB(1448);
    const dB = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      IB = "28de",
      NB = new Set(["1205"]),
      uB = (BB, jB) => {
        const zB = (0, QB.d)(BB);
        if ((null === zB || void 0 === zB ? void 0 : zB.vendor) === IB) return NB.has(zB.product) ? "steamdeck" : "xbox";
        if (zB && dB[zB.vendor]) return dB[zB.vendor];
        if ((0, nB.d)(BB)) return "nintendo";
        const uB = `${BB} ${null!==jB&&void 0!==jB?jB:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(uB) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(uB) ? "nintendo" : /steam deck/.test(uB) ? "steamdeck" : "xbox"
      },
      UB = BB => {
        var jB;
        return (null === (jB = (0, QB.d)(BB)) || void 0 === jB ? void 0 : jB.vendor) === IB
      }
  },
  8173: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      f: () => NB
    });
    var QB = zB(8131);
    const nB = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      dB = new Set(["capture", "gameplay"]),
      IB = ["Up", "Down", "Left", "Right"],
      NB = BB => IB.includes(BB),
      uB = .25;
    const UB = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.DN = new Array(QB._).fill(!1), this.previousHeld = new Array(QB._).fill(!1), this.consumedButtons = new Array(QB._).fill(!1), this.suppressedReleases = new Array(QB._).fill(!1), this.wakeOwned = new Array(QB._).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, QB.B)()
      }
      register(BB) {
        return this.consumers.has(BB.name) && console.warn(`Controller consumer "${BB.name}" registered twice; the newer one replaces it.`), this.consumers.set(BB.name, BB), () => {
          var jB;
          this.consumers.get(BB.name) === BB && (this.activeName === BB.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (jB = this.peek) || void 0 === jB ? void 0 : jB.over) === BB.name && (this.peek = null), this.consumers.delete(BB.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(BB) {
        return this.DN[(0, QB.o)(BB)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.DN = new Array(QB._).fill(!1), this.previousHeld = new Array(QB._).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, QB.B)()
      }
      dispatch(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = BB, this.previousHeld = this.DN, this.DN = (0, QB.u)(BB.values, this.previousHeld);
        for (let dB = 0; dB < QB._; dB++) this.suppressedReleases[dB] = !this.DN[dB] && this.consumedButtons[dB], this.DN[dB] || (this.consumedButtons[dB] = !1), this.wakeOwned[dB] && (this.DN[dB] ? (this.consumedButtons[dB] = !0, this.wakeOwned[dB] = !1) : BB.values[dB] < QB.W && (this.wakeOwned[dB] = !1));
        Math.hypot(BB.leftStick.x, BB.leftStick.y) < uB && (this.leftStickConsumed = !1), Math.hypot(BB.rightStick.x, BB.rightStick.y) < uB && (this.rightStickConsumed = !1);
        const nB = this.pickActive();
        if ((null === nB || void 0 === nB ? void 0 : nB.name) !== this.activeName) {
          var IB, NB, UB, aB, pB, rB;
          const BB = this.activeName,
            jB = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            zB = null !== (IB = null === nB || void 0 === nB || null === (NB = nB.peek) || void 0 === NB ? void 0 : NB.call(nB)) && void 0 !== IB ? IB : null,
            dB = null === BB && !!zB && !(null === (UB = this.consumers.get(zB.over)) || void 0 === UB || !UB.onPeekFrame),
            uB = zB && (zB.over === BB || dB) ? zB : null,
            sB = null !== this.peek && this.peek.over === (null === nB || void 0 === nB ? void 0 : nB.name) ? this.peek : null;
          this.deactivateCurrent(null !== uB, null !== sB), this.activeName = null !== (aB = null === nB || void 0 === nB ? void 0 : nB.name) && void 0 !== aB ? aB : null, null === BB || this.handOffPending || this.consumeAllHeld();
          const JB = null === (pB = null !== uB && void 0 !== uB ? uB : sB) || void 0 === pB ? void 0 : pB.stick;
          "left" === JB && jB.left ? this.leftStickConsumed = !1 : "right" === JB && jB.right && (this.rightStickConsumed = !1), this.peek = uB, nB || null === BB ? nB && (null === (rB = this.idleResume) || void 0 === rB ? void 0 : rB.name) === nB.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: BB,
            left: jB.left && this.leftStickConsumed,
            right: jB.right && this.rightStickConsumed
          }, nB && (this.idleResume = null);
          for (let nB = 0; nB < QB._; nB++) this.previousHeld[nB] && !this.DN[nB] && (this.suppressedReleases[nB] = !0)
        }
        var sB, JB;
        (this.handOffPending = !1, nB) && (zB && !dB.has(nB.name) && this.consumeWakePress(nB), nB.onFrame(this.buildInput(BB, jB, zB)), this.peek && (null === (sB = this.consumers.get(this.peek.over)) || void 0 === sB || null === (JB = sB.onPeekFrame) || void 0 === JB || JB.call(sB, this.buildInput(BB, jB, !1, this.peek.stick))))
      }
      consumeWakePress(BB) {
        for (let nB = 0; nB < QB._; nB++) {
          var jB, zB;
          const dB = QB.$[nB];
          (null !== (jB = null === (zB = BB.wakePressActs) || void 0 === zB ? void 0 : zB.call(BB, dB)) && void 0 !== jB ? jB : IB.includes(dB)) || (this.DN[nB] ? this.consumedButtons[nB] = !0 : this.lastFrame.values[nB] >= QB.V && (this.wakeOwned[nB] = !0))
        }
      }
      pickActive() {
        for (const BB of nB) {
          const jB = this.consumers.get(BB);
          if (jB && jB.isActive()) return jB
        }
        return null
      }
      deactivateCurrent() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var zB, QB, nB, dB;
        this.activeName && (null === (zB = this.consumers.get(this.activeName)) || void 0 === zB || null === (QB = zB.onDeactivate) || void 0 === QB || QB.call(zB, BB));
        this.peek && !jB && (null === (nB = this.consumers.get(this.peek.over)) || void 0 === nB || null === (dB = nB.onDeactivate) || void 0 === dB || dB.call(nB, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let nB = 0; nB < QB._; nB++) this.DN[nB] && (this.consumedButtons[nB] = !0);
        const {
          leftStick: jB,
          rightStick: zB
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== BB && (this.leftStickConsumed || Math.hypot(jB.x, jB.y) >= uB), this.rightStickConsumed = "right" !== BB && (this.rightStickConsumed || Math.hypot(zB.x, zB.y) >= uB)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(BB) {
        const jB = (0, QB.o)(BB);
        this.DN[jB] && (this.consumedButtons[jB] = !0)
      }
      buildInput(BB, jB, zB, nB) {
        const dB = this.DN,
          IB = this.previousHeld,
          NB = nB ? new Array(QB._).fill(!0) : [...this.consumedButtons],
          uB = nB ? NB : [...this.suppressedReleases],
          UB = !this.leftStickConsumed && (!nB || "left" === nB),
          aB = !this.rightStickConsumed && (!nB || "right" === nB);
        return {
          frame: BB,
          dtMs: jB,
          isHeld: BB => {
            const jB = (0, QB.o)(BB);
            return dB[jB] && !NB[jB]
          },
          wasPressed: BB => {
            const jB = (0, QB.o)(BB);
            return dB[jB] && !IB[jB] && !NB[jB]
          },
          wasReleased: BB => {
            const jB = (0, QB.o)(BB);
            return !dB[jB] && IB[jB] && !uB[jB]
          },
          value: jB => {
            const zB = (0, QB.o)(jB);
            return NB[zB] ? 0 : BB.values[zB]
          },
          leftStick: UB ? BB.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: aB ? BB.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: zB
        }
      }
    }
  },
  8155: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => pB.e,
      g: () => pB.g,
      j: () => fB,
      m: () => oB,
      o: () => HB,
      p: () => DB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(1471),
      IB = zB(41),
      NB = zB(8160),
      uB = zB(8131),
      UB = zB(8150),
      aB = zB(8122),
      pB = zB(2065),
      rB = zB(8162);
    const sB = {
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
      JB = "controllerSettings",
      mB = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      yB = ["auto", ...NB.e],
      kB = (BB, jB) => "string" === typeof jB && BB.includes(jB),
      GB = BB => jB => "number" === typeof jB && Number.isFinite(jB) ? (0, rB.x)(jB, BB) : void 0,
      LB = BB => "boolean" === typeof BB ? BB : void 0,
      gB = BB => jB => kB(BB, jB) ? jB : void 0,
      tB = {
        lookSensitivityX: GB(rB.fb),
        lookSensitivityY: GB(rB.fb),
        aimLookSensitivity: GB(rB.i),
        invertLookX: LB,
        invertLookY: LB,
        lookCurve: gB(uB.R),
        lookDeadzone: GB(rB.A),
        moveDeadzone: GB(rB.A),
        swapSticks: LB,
        autoSprint: LB,
        sneakMode: gB(["toggle", "hold"]),
        tapHoldTime: gB(["short", "medium", "long"]),
        attackMode: gB(["hold", "toggle"]),
        promptFamily: gB(yB),
        hideButtonHints: LB,
        vibration: LB,
        cursorSpeed: GB(rB.z),
        cursorMagnetism: LB,
        buttonRepeat: gB(uB.s),
        largePointer: LB,
        menuBackToCategories: LB,
        swapConfirmBack: LB,
        menuNavigation: gB(["hybrid", "focus", "cursor"]),
        inventoryNavigation: gB(["hybrid", "slot", "cursor"]),
        quickChat: gB(["wheel", "off"]),
        leaderboardButton: gB(["shop", "leaderboard"]),
        gyroAiming: LB,
        gyroSensitivity: GB(rB.N),
        gyroActivation: gB(["always", "aiming", "button"]),
        gyroButton: gB(uB.$),
        emoteButton: gB(["tapHold", "wheel"])
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
      MB = BB => {
        const jB = {};
        if ("object" !== typeof BB || null === BB) return jB;
        for (const [zB, QB] of Object.entries(BB)) Object.prototype.hasOwnProperty.call(UB.i, zB) && kB(uB.$, QB) && (jB[zB] = QB);
        return jB
      },
      EB = BB => {
        const jB = {};
        for (const zB of Object.keys(sB))("bindings" === zB ? Object.keys(BB.bindings).length > 0 : BB[zB] !== sB[zB]) && (jB[zB] = BB[zB]);
        0 !== Object.keys(jB).length ? IB.j.setItem(JB, jB) : IB.j.removeItem(JB)
      };
    let iB = (() => {
        const BB = IB.j.getItem(JB),
          jB = (BB => {
            const jB = "object" === typeof BB && null !== BB ? BB : {},
              zB = {
                ...sB,
                bindings: MB(jB.bindings)
              };
            for (const nB of Object.keys(tB)) {
              const BB = tB[nB](jB[nB]);
              void 0 !== BB && (zB[nB] = BB)
            }
            const QB = Object.keys(jB).filter((BB => !!Object.prototype.hasOwnProperty.call(sB, BB) && ("bindings" === BB ? "object" !== typeof jB.bindings || null === jB.bindings || Object.keys(jB.bindings).length !== Object.keys(zB.bindings).length : zB[BB] !== jB[BB])));
            return QB.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${QB.join(", ")}`), zB
          })(BB);
        return null !== BB && void 0 !== BB && EB(jB), jB
      })(),
      qB = {
        ...iB,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const BB = {},
            jB = new URLSearchParams(window.location.search);
          for (const {
              param: zB,
              key: QB
            }
            of SB) {
            const nB = tB[QB](jB.get(zB));
            void 0 !== nB && (BB[QB] = nB)
          }
          return BB
        })()
      };
    const fB = () => qB,
      oB = () => {
        var BB, jB;
        const zB = fB().promptFamily;
        return "auto" !== zB ? zB : null !== (BB = null === (jB = aB.f.getActivePad()) || void 0 === jB ? void 0 : jB.family) && void 0 !== BB ? BB : "xbox"
      },
      HB = BB => {
        const jB = qB;
        iB = {
          ...iB,
          ...BB
        }, EB(iB), qB = {
          ...qB,
          ...BB
        }, (BB => {
          nB.n.Ly(pB.g, qB), mB.some((jB => BB[jB] !== qB[jB])) && nB.n.Ly(pB.e, qB)
        })(jB)
      },
      DB = () => {
        const [BB, jB] = (0, QB.useState)(qB);
        return (0, dB.f)(pB.g, jB), BB
      }
  },
  8646: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    const QB = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      nB = BB => QB.has(BB)
  },
  8122: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => mB.d,
      f: () => LB
    });
    var QB = zB(8131),
      nB = zB(8139);
    const dB = .1,
      IB = .3;
    class NB {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(BB, jB) {
        const zB = null === this.lastMs ? 0 : Math.min(Math.max(0, jB - this.lastMs), 100);
        this.lastMs = jB;
        const QB = Math.hypot(BB.x, BB.y);
        if (QB >= IB) return this.anchor = null, void(this.returning = !0);
        QB >= dB || (this.returning = !1);
        const nB = this.anchor;
        if (!nB || Math.hypot(BB.x - nB.x, BB.y - nB.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: BB.x,
          y: BB.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += zB, this.steadyMs < 1e3) return;
        const NB = Math.max(QB, Math.hypot(nB.x, nB.y));
        NB < dB ? this.deadzone = 0 : this.returning && (this.deadzone = NB + .05, this.anchorLearned = !0)
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
    const uB = (BB, jB) => {
        var zB, QB;
        return null !== (zB = BB && (null === (QB = Object.getOwnPropertyDescriptor(BB, jB)) || void 0 === QB ? void 0 : QB.get)) && void 0 !== zB ? zB : null
      },
      UB = BB => {
        const jB = BB.vendorName;
        return "string" === typeof jB ? jB : void 0
      },
      aB = ((BB, jB) => {
        const zB = uB(BB, "index"),
          QB = uB(BB, "id"),
          nB = uB(BB, "connected"),
          dB = uB(BB, "mapping"),
          IB = uB(BB, "buttons"),
          NB = uB(BB, "axes"),
          aB = uB(jB, "pressed"),
          pB = uB(jB, "value");
        return zB && QB && nB && dB && IB && NB && aB && pB ? BB => {
          const jB = IB.call(BB),
            uB = NB.call(BB),
            rB = {
              index: Number(zB.call(BB)),
              id: String(QB.call(BB)),
              connected: !0 === nB.call(BB),
              mapping: String(dB.call(BB)),
              buttons: [],
              axes: [],
              vendorName: UB(BB)
            };
          for (let zB = 0; zB < jB.length; zB++) rB.buttons.push({
            pressed: !0 === aB.call(jB[zB]),
            value: Number(pB.call(jB[zB]))
          });
          for (let zB = 0; zB < uB.length; zB++) rB.axes.push(Number(uB[zB]));
          return rB
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      pB = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var rB = zB(1446),
      sB = zB(1448);
    const JB = BB => ({
      pressed: BB,
      value: BB ? 1 : 0
    });
    var mB = zB(2065);
    const yB = IB,
      kB = BB => {
        const jB = new Array(QB._).fill(0);
        for (let zB = 0; zB < QB._ && zB < BB.buttons.length; zB++) {
          const nB = BB.buttons[zB];
          jB[zB] = nB.pressed && !(0, QB.Q)(zB) ? Math.max(nB.value, QB.F) : nB.value
        }
        return jB
      },
      GB = (BB, jB) => {
        var zB, QB;
        return {
          x: null !== (zB = BB.axes[jB]) && void 0 !== zB ? zB : 0,
          y: null !== (QB = BB.axes[jB + 1]) && void 0 !== QB ? QB : 0
        }
      };
    const LB = new class {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aB;
        this.readGamepads = BB, this.requireTrustedPads = jB, this.nativeReader = zB, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = BB => {
          BB.isTrusted && this.trustedIndices.add(BB.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = BB => {
          this.trustedIndices.delete(BB.gamepad.index)
        }, this.vp = BB => {
          if (this.rafId = 0, !this.running) return;
          const jB = 0 === this.lastTimestampMs ? 16 : Math.min(100, BB - this.lastTimestampMs);
          this.lastTimestampMs = BB;
          try {
            this.poll(BB, jB)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.vp))
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
          jB = BB ? this.readPad(BB) : null;
        return jB && jB.id === this.activeInfo.id ? BB : null
      }
      poll(BB, jB) {
        var zB, nB;
        const dB = this.readPads();
        let IB = null,
          uB = !1;
        const UB = [],
          aB = Math.max(dB.length, this.slots.length);
        for (let LB = 0; LB < aB; LB++) {
          var pB;
          const jB = LB < dB.length ? dB[LB] : null,
            zB = jB ? this.readPad(jB) : null;
          if (!zB || !zB.connected || !this.isUsable(zB)) {
            this.slots[LB] = null;
            continue
          }
          let nB = this.slots[LB];
          nB && nB.id === zB.id || (nB = {
            id: zB.id,
            DN: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new NB,
            rightRest: new NB
          }, this.slots[LB] = nB);
          const aB = GB(zB, 0),
            rB = GB(zB, 2);
          !nB.leftSettled && Math.hypot(aB.x, aB.y) < yB && (nB.leftSettled = !0), !nB.rightSettled && Math.hypot(rB.x, rB.y) < yB && (nB.rightSettled = !0), nB.leftRest.observe(aB, BB), nB.rightRest.observe(rB, BB);
          const sB = kB(zB),
            JB = (0, QB.u)(sB, nB.DN),
            mB = nB.DN,
            gB = JB.map(((BB, jB) => BB && !mB[jB]));
          nB.DN = JB;
          const tB = {
            pad: zB,
            slot: nB,
            values: sB
          };
          LB === (null === (pB = this.activeInfo) || void 0 === pB ? void 0 : pB.index) && zB.id === this.activeInfo.id ? (IB = tB, uB = gB.includes(!0)) : gB.includes(!0) && UB.push({
            polled: tB,
            rose: gB
          })
        }
        const rB = this.slots.some((BB => null !== BB));
        if (rB !== this.anyPadConnected) {
          this.anyPadConnected = rB;
          for (const BB of this.connectedListeners) BB()
        }
        const sB = null !== (zB = null === (nB = IB) || void 0 === nB ? void 0 : nB.slot.DN) && void 0 !== zB ? zB : [],
          JB = uB ? void 0 : UB.find((BB => {
            let {
              rose: jB
            } = BB;
            return jB.some(((BB, jB) => BB && !sB[jB]))
          }));
        if (JB ? (IB = JB.polled, this.setActive(JB.polled.pad)) : this.activeInfo && !IB && this.setActive(null), !IB || !this.activeInfo) return;
        const mB = ((BB, jB) => {
          let {
            pad: zB,
            slot: nB,
            values: dB
          } = BB;
          const IB = (0, QB.B)(jB);
          return IB.values = dB, nB.leftSettled && (IB.leftStick = nB.leftRest.apply(GB(zB, 0))), nB.rightSettled && (IB.rightStick = nB.rightRest.apply(GB(zB, 2))), IB
        })(IB, BB);
        for (const QB of this.frameListeners) QB(mB, jB, this.activeInfo)
      }
      readPad(BB) {
        const jB = this.readSnapshot(BB);
        return jB && (0, sB.e)(jB) ? (BB => {
          const jB = jB => {
              var zB;
              return null !== (zB = BB.buttons[jB]) && void 0 !== zB ? zB : JB(!1)
            },
            zB = jB => {
              var zB;
              return null !== (zB = BB.axes[jB]) && void 0 !== zB ? zB : 0
            },
            QB = BB.axes.length > 9,
            nB = QB ? (BB => {
              const jB = 0 !== BB;
              return {
                up: jB && (BB >= -1 && BB < -.7 || BB >= .95 && BB <= 1),
                right: jB && BB >= -.75 && BB < -.1,
                down: jB && BB >= -.2 && BB < .45,
                left: jB && BB >= .4 && BB <= 1
              }
            })(zB(9)) : {
              up: zB(5) < -.5,
              down: zB(5) > .5,
              left: zB(4) < -.5,
              right: zB(4) > .5
            };
          return {
            ...BB,
            mapping: "standard",
            buttons: [jB(1), jB(2), jB(0), jB(3), jB(4), jB(5), jB(6), jB(7), jB(8), jB(9), jB(10), jB(11), JB(nB.up), JB(nB.down), JB(nB.left), JB(nB.right), jB(12)],
            axes: [zB(0), zB(1), zB(2), zB(QB ? 5 : 3)]
          }
        })(jB) : jB
      }
      readSnapshot(BB) {
        if (this.nativeReader) try {
          return this.nativeReader(BB)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (BB => {
          const jB = BB;
          return {
            index: jB.index,
            id: jB.id,
            connected: jB.connected,
            mapping: jB.mapping,
            buttons: Array.from(jB.buttons, (BB => ({
              pressed: BB.pressed,
              value: BB.value
            }))),
            axes: Array.from(jB.axes),
            vendorName: UB(BB)
          }
        })(BB)
      }
      isUsable(BB) {
        return !(0, rB.g)(BB.id) && ("standard" !== BB.mapping ? (this.warnedNonStandardIds.has(BB.id) || (this.warnedNonStandardIds.add(BB.id), console.warn(`Controller "${BB.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(BB.index))
      }
      setActive(BB) {
        this.activeInfo = BB ? {
          index: BB.index,
          id: BB.id,
          family: (0, nB.e)(BB.id, BB.vendorName)
        } : null;
        for (const jB of this.connectionListeners) jB(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (BB) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", BB)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.vp))
      }
    }((() => pB ? pB.call(navigator) : []), !0);
    LB.listenForConnections()
  },
  8733: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => IB,
      j: () => NB,
      l: () => nB
    });
    var QB = zB(8740);
    const nB = BB => {
        const jB = [];
        BB.holdingGun && jB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && jB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const dB of null !== (zB = null === (nB = BB.customButtons) || void 0 === nB ? void 0 : nB.filter(QB.f)) && void 0 !== zB ? zB : []) {
          var zB, nB;
          jB.push({
            kind: "customButton",
            id: dB.id,
            icon: dB.icon,
            description: dB.description
          })
        }
        return jB
      },
      dB = BB => BB.length >= 2,
      IB = BB => "specialAction" !== BB.kind,
      NB = (BB, jB) => {
        if (null === BB || null === jB) return BB === jB;
        if (BB.kind !== jB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === jB.action;
          case "customButton":
            return BB.id === jB.id && BB.icon === jB.icon;
          case "touchButton":
            return BB.label === jB.label
        }
      }
  },
  8655: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    const QB = {
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
  8730: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      c: () => sB,
      d: () => pB,
      h: () => JB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(1471),
      IB = zB(8733),
      NB = zB(8747);
    let uB = null;
    const UB = () => uB,
      aB = BB => {
        (0, IB.j)(uB, BB) || (uB = BB, nB.n.Ly(NB.g, uB))
      },
      pB = () => {
        const [BB, jB] = (0, QB.useState)(UB);
        return (0, dB.f)(NB.g, jB), BB
      };
    let rB = !1;
    const sB = BB => {
        BB !== rB && (rB = BB, nB.n.Ly(NB.k, BB))
      },
      JB = () => {
        const [BB, jB] = (0, QB.useState)(rB);
        return (0, dB.f)(NB.k, jB), BB
      }
  },
  8759: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      f: () => NB
    });
    var QB = zB(31),
      nB = zB(8747);
    let dB = !1;
    const IB = () => dB,
      NB = BB => {
        BB !== dB && (dB = BB, QB.n.Ly(nB.m, dB))
      }
  },
  8750: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB,
      d: () => uB
    });
    var QB = zB(31),
      nB = zB(8747);
    let dB = null,
      IB = 0;
    const NB = () => dB,
      uB = BB => {
        null === BB && null === dB || (dB = null === BB ? null : {
          id: ++IB,
          holdMs: BB
        }, QB.n.Ly(nB.n, dB))
      }
  },
  8747: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      g: () => QB,
      k: () => nB,
      m: () => NB,
      n: () => uB,
      p: () => UB,
      t: () => IB
    });
    const QB = "controllerActionHintChanged",
      nB = "controllerActionWheelHintChanged",
      dB = "controllerOpenChat",
      IB = "controllerSneakToggledChanged",
      NB = "controllerAttackLatchedChanged",
      uB = "controllerDropStackHoldChanged",
      UB = "controllerPickBlockHintChanged"
  },
  8761: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      e: () => NB
    });
    var QB = zB(31),
      nB = zB(8747);
    let dB = !1;
    const IB = () => dB,
      NB = BB => {
        BB !== dB && (dB = BB, QB.n.Ly(nB.p, dB))
      }
  },
  8821: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => NB
    });
    var QB = zB(31),
      nB = zB(8747);
    let dB = !1;
    const IB = () => dB,
      NB = BB => {
        BB !== dB && (dB = BB, QB.n.Ly(nB.t, dB))
      }
  },
  8711: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor() {
        this.downAtMs = null
      }
      update(BB, jB, zB, QB) {
        if (BB) return this.downAtMs = zB, null;
        if (null === this.downAtMs) return null;
        const nB = zB - this.downAtMs >= QB;
        return jB ? nB ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, nB ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8187: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      f: () => rB,
      g: () => NB,
      k: () => LB,
      m: () => GB
    });
    var QB = zB(41),
      nB = zB(8160),
      dB = zB(8131);
    const IB = (() => {
        try {
          return zB(8193)
        } catch {
          return null
        }
      })(),
      NB = [...dB.$, "LeftStick", "RightStick"],
      uB = new Map,
      UB = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      aB = (new Set(Object.values(UB)), {
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
      pB = (BB, jB) => {
        var zB, QB;
        return null !== (zB = null === (QB = aB[UB[BB]]) || void 0 === QB ? void 0 : QB[jB]) && void 0 !== zB ? zB : 1
      },
      rB = (BB, jB) => {
        const zB = `./${UB[BB]}/${jB}.svg`;
        let QB = uB.get(zB);
        return void 0 === QB && (QB = IB ? IB(zB) : "", uB.set(zB, QB)), QB
      },
      sB = new Set,
      JB = [],
      mB = BB => {
        if (!sB.has(BB)) {
          sB.add(BB);
          for (const jB of NB) {
            const zB = rB(BB, jB);
            if (zB) {
              const BB = new Image;
              BB.crossOrigin = "anonymous", BB.src = zB, JB.push(BB)
            }
          }
        }
      },
      yB = "controllerGlyphFamily";
    let kB = null;
    const GB = BB => {
        BB !== kB && (kB = BB, QB.j.setItem(yB, BB), mB(BB))
      },
      LB = () => {
        const BB = QB.j.getItem(yB);
        (0, nB.h)(BB) && BB !== kB && (kB = BB, mB(BB))
      }
  },
  8850: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => AB,
      d: () => TB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(1471),
      IB = zB(8145),
      NB = zB(8122),
      uB = zB(8173),
      UB = zB(8155);
    const aB = {
        x: 0,
        y: 0,
        z: 0
      },
      pB = Math.PI / 180,
      rB = BB => Math.hypot(BB.x, BB.y, BB.z),
      sB = (BB, jB) => ({
        x: BB.x * jB,
        y: BB.y * jB,
        z: BB.z * jB
      }),
      JB = (BB, jB) => ({
        x: BB.x + jB.x,
        y: BB.y + jB.y,
        z: BB.z + jB.z
      }),
      mB = (BB, jB) => ({
        x: BB.x - jB.x,
        y: BB.y - jB.y,
        z: BB.z - jB.z
      }),
      yB = BB => {
        const jB = rB(BB);
        return 0 === jB ? aB : sB(BB, 1 / jB)
      },
      kB = BB => ({
        min: {
          ...BB
        },
        max: {
          ...BB
        }
      }),
      GB = (BB, jB) => ({
        min: {
          x: Math.min(BB.min.x, jB.x),
          y: Math.min(BB.min.y, jB.y),
          z: Math.min(BB.min.z, jB.z)
        },
        max: {
          x: Math.max(BB.max.x, jB.x),
          y: Math.max(BB.max.y, jB.y),
          z: Math.max(BB.max.z, jB.z)
        }
      }),
      LB = (BB, jB) => BB.max.x - BB.min.x <= jB && BB.max.y - BB.min.y <= jB && BB.max.z - BB.min.z <= jB;
    class gB {
      constructor() {
        this.bias = aB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = aB, this.windowSec = 0
      }
      update(BB) {
        const jB = this.gyroRange ? GB(this.gyroRange, BB.gyro) : kB(BB.gyro),
          zB = BB.accel ? this.accelRange ? GB(this.accelRange, BB.accel) : kB(BB.accel) : null;
        if (!LB(jB, 1) || zB && !LB(zB, .01)) return void this.restartWindow(BB);
        if (this.gyroRange = jB, this.accelRange = zB, this.sum = JB(this.sum, sB(BB.gyro, BB.dtSec)), this.windowSec += BB.dtSec, this.windowSec < 1) return;
        const QB = sB(this.sum, 1 / this.windowSec);
        if (rB(QB) > 5) return;
        const nB = mB(QB, this.bias);
        let dB = 0;
        !this.calibrated || this.windowSec >= 3 ? dB = 1 : rB(nB) <= 1 && (dB = Math.min(1, BB.dtSec / 1)), this.bias = JB(this.bias, sB(nB, dB)), this.calibrated = this.calibrated || dB > 0
      }
      correct(BB) {
        return mB(BB, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = aB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = aB, this.windowSec = 0
      }
      restartWindow(BB) {
        this.gyroRange = kB(BB.gyro), this.accelRange = BB.accel ? kB(BB.accel) : null, this.sum = aB, this.windowSec = 0
      }
    }
    class tB {
      constructor() {
        this.down = null
      }
      update(BB, jB, zB) {
        const QB = yB(sB(jB, -1));
        if (!this.down) return this.down = QB, QB;
        const nB = sB(BB, pB * zB),
          dB = this.down,
          IB = {
            x: dB.x - (nB.y * dB.z - nB.z * dB.y),
            y: dB.y - (nB.z * dB.x - nB.x * dB.z),
            z: dB.z - (nB.x * dB.y - nB.y * dB.x)
          },
          NB = 0 === rB(QB) ? 0 : Math.min(1, zB / .25);
        var uB, UB;
        return this.down = yB((UB = NB, JB(uB = IB, sB(mB(QB, uB), UB)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class SB {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(BB, jB, zB) {
        const QB = Math.hypot(BB, jB),
          nB = Math.max(0, Math.min(1, (QB - 2) / 2)),
          dB = {
            yaw: BB * (1 - nB),
            pitch: jB * (1 - nB),
            dtSec: zB
          };
        for (this.entries.push(dB), this.windowSec += zB; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let IB = 0,
          NB = 0;
        for (const UB of this.entries) IB += UB.yaw * UB.dtSec, NB += UB.pitch * UB.dtSec;
        const uB = this.windowSec > 0 ? {
          yaw: IB / this.windowSec,
          pitch: NB / this.windowSec
        } : {
          yaw: dB.yaw,
          pitch: dB.pitch
        };
        return {
          yaw: BB * nB + uB.yaw,
          pitch: jB * nB + uB.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class MB {
      constructor() {
        this.calibrator = new gB, this.gravity = new tB, this.smoother = new SB
      }
      process(BB, jB, zB) {
        const QB = Math.max(0, Math.min(.05, jB));
        this.calibrator.update({
          ...BB,
          dtSec: QB
        });
        const nB = this.calibrator.correct(BB.gyro);
        let dB = nB.y;
        "player" === zB && BB.accel && (dB = ((BB, jB) => {
          const zB = BB.y * jB.y + BB.z * jB.z;
          return -Math.sign(zB) * Math.min(1.41 * Math.abs(zB), Math.hypot(BB.y, BB.z))
        })(nB, this.gravity.update(nB, BB.accel, QB)));
        const IB = this.smoother.apply(dB, nB.x, QB),
          NB = ((BB, jB) => {
            const zB = Math.hypot(BB, jB);
            if (zB >= 1) return {
              yaw: BB,
              pitch: jB
            };
            const QB = zB / 1;
            return {
              yaw: BB * QB,
              pitch: jB * QB
            }
          })(IB.yaw, IB.pitch);
        return {
          yawDeg: NB.yaw * QB,
          pitchDeg: NB.pitch * QB
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
    const EB = (BB, jB) => {
      var zB, QB, nB;
      const dB = jB * pB,
        IB = null !== (zB = BB.beta) && void 0 !== zB ? zB : 0,
        NB = null !== (QB = BB.gamma) && void 0 !== QB ? QB : 0;
      return {
        x: IB * Math.cos(dB) - NB * Math.sin(dB),
        y: IB * Math.sin(dB) + NB * Math.cos(dB),
        z: null !== (nB = BB.alpha) && void 0 !== nB ? nB : 0
      }
    };
    var iB = zB(8859);
    class qB {
      constructor(BB, jB, zB) {
        this.hid = BB, this.sink = jB, this.onControllersChanged = zB, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = BB => {
          this.openController(BB.device).catch((BB => {
            console.warn("Could not open motion controller", BB)
          }))
        }, this.onDisconnect = BB => {
          this.opening.has(BB.device) && this.disconnectedWhileOpening.add(BB.device);
          const jB = this.controllers.get(BB.device);
          jB && (this.forget(jB), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const BB = await this.hid.getDevices();
        for (const jB of BB) await this.openController(jB).catch((BB => {
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
          filters: iB.h
        });
        let jB = 0;
        for (const zB of BB) await this.openController(zB).catch((BB => {
          console.warn("Could not open motion controller", BB), jB++
        }));
        return jB
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((BB => null !== (0, iB.e)(BB.vendorId, BB.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((BB => BB.kind))
      }
      forget(BB) {
        BB.device.removeEventListener("inputreport", BB.onReport), this.controllers.get(BB.device) === BB && this.controllers.delete(BB.device)
      }
      async openController(BB) {
        const jB = (0, iB.e)(BB.vendorId, BB.productId);
        if (!jB || !this.running || this.controllers.has(BB) || this.opening.has(BB)) return;
        this.opening.add(BB);
        let zB = !1;
        try {
          BB.opened || await BB.open()
        } finally {
          this.opening.delete(BB), zB = this.disconnectedWhileOpening.delete(BB)
        }
        if (zB) return void BB.close().catch((BB => {
          console.debug("Could not close an unplugged motion controller", BB)
        }));
        if (!this.running) return;
        const QB = {
          device: BB,
          kind: jB,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: BB => {
            this.onReport(QB, BB)
          }
        };
        this.controllers.set(BB, QB), BB.addEventListener("inputreport", QB.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(QB)
        } catch (nB) {
          console.warn(`Could not turn on motion for ${jB}`, nB), this.controllers.get(BB) === QB && (this.forget(QB), this.onControllersChanged())
        }
      }
      async enableMotion(BB) {
        let {
          device: jB,
          kind: zB
        } = BB;
        if ((0, iB.f)(zB))
          for (const QB of iB.t[zB]) await jB.receiveFeatureReport(QB).catch((BB => {
            console.debug(`Motion controller feature report ${QB} unavailable`, BB)
          }));
        else
          for (let QB = 0; QB < 2; QB++)
            for (const {
                subcommand: BB,
                args: zB
              }
              of iB.v) await jB.sendReport(iB.w, (0, iB.d)(this.switchPacketCounter++, BB, zB)), await new Promise((BB => {
              setTimeout(BB, 60)
            }))
      }
      onReport(BB, jB) {
        const zB = (0, iB.q)(BB.kind, jB.reportId, jB.data, BB.device.productId);
        if (!zB) return;
        const QB = null === BB.lastEventMs ? 0 : (jB.timeStamp - BB.lastEventMs) / 1e3;
        BB.lastEventMs = jB.timeStamp;
        let nB = zB.dtSec;
        if (null !== nB && QB > 0 && (nB = Math.max(.001, Math.min(.017, QB / zB.readings.length))), null === nB && null !== zB.sensorClock && (0, iB.f)(BB.kind)) {
          const jB = (0, iB.s)(BB.kind, BB.lastClock, zB.sensorClock);
          BB.lastClock = zB.sensorClock, nB = 0 === jB ? null : jB
        }
        if (BB.lastReadingMs = jB.timeStamp, this.isPreferred(BB, jB.timeStamp))
          for (const IB of zB.readings) {
            var dB;
            this.sink(IB, null !== (dB = nB) && void 0 !== dB ? dB : QB, `hid${BB.openedOrder}`)
          }
      }
      isPreferred(BB, jB) {
        const zB = BB => 1e6 * iB.n[BB.kind] + BB.openedOrder;
        for (const QB of this.controllers.values())
          if (QB !== BB && jB - QB.lastReadingMs < 500 && zB(QB) < zB(BB)) return !1;
        return !0
      }
    }
    var fB = zB(106);
    const oB = () => DeviceMotionEvent,
      HB = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, fB.isMobile)(),
      DB = () => {
        var BB;
        const jB = null === (BB = window.screen.orientation) || void 0 === BB ? void 0 : BB.angle;
        return "number" === typeof jB ? jB : "number" === typeof window.orientation ? window.orientation : 0
      };
    class FB {
      constructor(BB, jB) {
        this.sink = BB, this.onStateChanged = jB, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((BB => {
            console.warn("Could not enable the motion sensor", BB)
          }))
        }, this.onMotion = BB => {
          const jB = BB.rotationRate;
          if (!jB || null === jB.alpha && null === jB.beta && null === jB.gamma) return;
          const zB = null === this.lastEventMs ? 0 : (BB.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = BB.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: EB(jB, DB()),
            accel: null
          }, zB, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof oB().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const BB = oB().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof BB) return void this.listen();
        let jB;
        this.disarmGestureRequest();
        try {
          jB = await BB.call(DeviceMotionEvent)
        } catch (zB) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), zB
        }
        this.wanted && ("granted" === jB ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
    const YB = "controllerGyroStatusChanged",
      VB = {
        bD: 0,
        RD: 0
      },
      hB = BB => {
        var jB, zB;
        return "undefined" === typeof document || (null === (jB = null === (zB = document.featurePolicy) || void 0 === zB ? void 0 : zB.allowsFeature(BB)) || void 0 === jB || jB)
      };
    class XB {
      constructor() {
        this.processor = new MB, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = BB => {
          const jB = BB.gyroAiming && NB.f.hasConnectedPad();
          var zB, QB;
          jB !== this.phoneRunning && (this.phoneRunning = jB, jB ? null === (zB = this.phone) || void 0 === zB || zB.start() : null === (QB = this.phone) || void 0 === QB || QB.stop());
          if (BB.gyroAiming !== this.running) {
            var nB, dB;
            if (this.running = BB.gyroAiming, this.running) null === (nB = this.hid) || void 0 === nB || nB.start().catch((BB => {
              console.warn("Could not open motion controllers", BB)
            }));
            else null === (dB = this.hid) || void 0 === dB || dB.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          nB.n.Ly(YB, this.getStatus())
        };
        const BB = (() => {
            var BB;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (BB = navigator.hid) && void 0 !== BB ? BB : null
          })(),
          jB = hB("hid");
        this.hidBlocked = null !== BB && !jB, this.hid = BB && jB ? new qB(BB, ((BB, jB, zB) => {
          this.lastHidReadingMs = performance.now(), this.feed(BB, jB, "player", zB)
        }), this.publishStatus) : null;
        const zB = hB("accelerometer") && hB("gyroscope");
        this.phoneBlocked = HB() && !zB, this.phone = HB() && zB ? new FB(((BB, jB, zB) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(BB, jB, "local", zB)
        }), this.publishStatus) : null, nB.n.subscribe(UB.g, this.syncWithSettings), NB.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, UB.j)()), this.publishStatus()
        })), this.syncWithSettings((0, UB.j)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var BB, jB, zB, QB;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (BB = null === (jB = this.hid) || void 0 === jB ? void 0 : jB.getConnectedKinds()) && void 0 !== BB ? BB : [],
          phoneMotion: null !== (zB = null === (QB = this.phone) || void 0 === QB ? void 0 : QB.getState()) && void 0 !== zB ? zB : "off",
          padConnected: NB.f.hasConnectedPad()
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
        const jB = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const zB = (0, UB.j)();
        return zB.gyroAiming && (BB => {
          let {
            activation: jB,
            isHeld: zB,
            useButton: QB,
            gyroButton: nB
          } = BB;
          return "always" === jB || zB("aiming" === jB ? QB : nB)
        })({
          activation: zB.gyroActivation,
          isHeld: BB => uB.c.isButtonHeld(BB),
          useButton: (0, IB.h)("use"),
          gyroButton: zB.gyroButton
        }) ? ((BB, jB) => ({
          bD: -BB.yawDeg * jB * pB,
          RD: -BB.pitchDeg * jB * pB
        }))(jB, zB.gyroSensitivity) : VB
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(BB, jB) {
        this.feed(BB, jB, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(BB, jB, zB, QB) {
        this.source !== QB && (this.processor.reset(), this.source = QB);
        const nB = this.processor.process(BB, jB, zB);
        this.pendingYawDeg += nB.yawDeg, this.pendingPitchDeg += nB.pitchDeg
      }
    }
    let ZB = null;
    const AB = () => (ZB || (ZB = new XB), ZB),
      TB = () => {
        const [BB, jB] = (0, QB.useState)((() => AB().getStatus()));
        return (0, dB.f)(YB, jB), (0, QB.useEffect)((() => {
          jB(AB().getStatus())
        }), []), BB
      }
  },
  8859: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => tB,
      e: () => uB,
      f: () => QB,
      h: () => NB,
      j: () => UB,
      n: () => aB,
      q: () => GB,
      s: () => yB,
      t: () => MB,
      v: () => SB,
      w: () => LB
    });
    const QB = BB => "dualShock4" === BB || "dualSense" === BB,
      nB = 1356,
      dB = 1406,
      IB = [{
        vendorId: nB,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: nB,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: nB,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: nB,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: nB,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: dB,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: dB,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: dB,
        productId: 8199,
        kind: "joyConRight"
      }],
      NB = IB.map((BB => {
        let {
          vendorId: jB,
          productId: zB
        } = BB;
        return {
          vendorId: jB,
          productId: zB
        }
      })),
      uB = (BB, jB) => {
        var zB, QB;
        return null !== (zB = null === (QB = IB.find((zB => zB.vendorId === BB && zB.productId === jB))) || void 0 === QB ? void 0 : QB.kind) && void 0 !== zB ? zB : null
      },
      UB = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      aB = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      pB = 2e3 / 32767,
      rB = 1 / 8192,
      sB = 936 / 13371,
      JB = (BB, jB, zB) => ({
        x: BB.getInt16(jB, !0) * zB,
        y: BB.getInt16(jB + 2, !0) * zB,
        z: BB.getInt16(jB + 4, !0) * zB
      }),
      mB = BB => 0 === BB.x && 0 === BB.y && 0 === BB.z,
      yB = (BB, jB, zB) => null === jB ? null : "dualShock4" === BB ? 16 * (zB - jB & 65535) / 3 / 1e6 : (zB - jB >>> 0) / 3 / 1e6,
      kB = (BB, jB) => "joyConRight" === jB ? {
        x: BB.y,
        y: -BB.z,
        z: -BB.x
      } : {
        x: -BB.y,
        y: BB.z,
        z: -BB.x
      },
      GB = (BB, jB, zB, nB) => QB(BB) ? ((BB, jB, zB, QB) => {
        const nB = ((BB, jB, zB) => "dualShock4" === BB ? 1 === jB && zB >= 63 ? 0 : 17 === jB && zB >= 65 ? 2 : null : 1 === jB && zB >= 62 ? 0 : 49 === jB && zB >= 63 ? 1 : null)(BB, jB, zB.byteLength);
        if (null === nB) return null;
        if (2976 === QB && 1 === jB && 0 !== (4 & zB.getUint8(30))) return null;
        const dB = nB + ("dualShock4" === BB ? 12 : 15),
          IB = JB(zB, dB, pB),
          NB = JB(zB, dB + 6, rB);
        return mB(IB) && mB(NB) ? null : {
          readings: [{
            gyro: IB,
            accel: NB
          }],
          dtSec: null,
          sensorClock: "dualShock4" === BB ? zB.getUint16(nB + 9, !0) : zB.getUint32(nB + 27, !0)
        }
      })(BB, jB, zB, nB) : ((BB, jB, zB) => {
        if (48 !== jB && 49 !== jB || zB.byteLength < 48) return null;
        const QB = [];
        for (let nB = 0; nB < 3; nB++) {
          const jB = JB(zB, 12 + 12 * nB, 244e-6),
            dB = JB(zB, 18 + 12 * nB, sB);
          if (mB(dB) && mB(jB)) return null;
          QB.push({
            gyro: kB(dB, BB),
            accel: kB(jB, BB)
          })
        }
        return {
          readings: QB,
          dtSec: .005,
          sensorClock: null
        }
      })(BB, jB, zB),
      LB = 1,
      gB = [0, 1, 64, 64, 0, 1, 64, 64],
      tB = (BB, jB, zB) => new Uint8Array([15 & BB, ...gB, jB, ...zB]),
      SB = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      MB = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8179: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => XB,
      g: () => lB,
      i: () => SB,
      m: () => sB.l,
      n: () => TB,
      o: () => AB,
      q: () => MB,
      u: () => PB,
      x: () => sB.q,
      B: () => sB.u,
      F: () => wB,
      H: () => sB.C,
      L: () => FB
    });
    var QB = zB(62),
      nB = zB(28),
      dB = zB(31),
      IB = zB(1471),
      NB = zB(1316),
      uB = zB(8155),
      UB = zB(8184),
      aB = zB(8139),
      pB = zB(8122),
      rB = zB(8187),
      sB = zB(1418),
      JB = zB(8131),
      mB = zB(8646),
      yB = zB(4494),
      kB = zB(125);
    class GB {
      constructor(BB) {
        this.deps = BB, this.pads = new Map
      }
      observe(BB, jB, zB) {
        if (!this.deps.touchOnly) return;
        const QB = this.pads.get(jB.id);
        "proven" !== QB && zB ? (this.pads.set(jB.id, "proven"), void 0 !== QB && this.deps.onReleased(jB, BB, BB.timestampMs - QB)) : void 0 === QB && (this.pads.set(jB.id, BB.timestampMs), this.deps.onHeld(jB, BB)), this.deps.setMayHide("proven" === this.pads.get(jB.id))
      }
    }
    const LB = BB => BB.values.flatMap(((BB, jB) => BB >= JB.V ? [String(jB)] : [])).join(",") || "none",
      gB = (BB, jB, QB, nB, dB) => {
        const IB = (0, sB.d)(),
          NB = document.visibilityState,
          uB = document.hasFocus();
        Promise.all([Promise.resolve().then((() => zB(3015))), Promise.resolve().then((() => zB(1121))), Promise.resolve().then((() => zB(145)))]).then((zB => {
          let [{
            logControllerHudHoldToGtag: UB
          }, {
            logClientLineFromEveryPage: aB
          }, {
            siteUsed: pB
          }] = zB;
          UB(BB, jB.family, null === dB ? void 0 : Math.round(dB / 1e3)), aB(`touch HUD pad ${BB}`, tB(jB, QB, nB, dB, IB, NB, uB, pB))
        }), (() => {}))
      },
      tB = (BB, jB, zB, QB, nB, dB, IB, NB) => {
        var uB;
        const UB = {
          pad_id: BB.id.slice(0, 120),
          pad_family: BB.family,
          pad_mapping: null !== (uB = null === zB || void 0 === zB ? void 0 : zB.mapping) && void 0 !== uB ? uB : "unread",
          pad_axes: zB ? String(zB.axes.length) : "unread",
          pad_buttons: zB ? String(zB.buttons.length) : "unread",
          pressed: LB(jB),
          ms_since_touch: null === nB ? "none" : String(Math.round(jB.timestampMs - nB)),
          visibility: dB,
          focused: String(IB),
          site: NB
        };
        return null !== QB && (UB.held_ms = String(Math.round(QB))), UB
      };
    const SB = BB => !BB.repeat && !(0, mB.b)(BB.key),
      MB = "PadHidesCursor";
    let EB = !1;
    const iB = BB => {
        BB !== EB && (EB = BB, document.documentElement.classList.toggle(MB, BB))
      },
      qB = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(BB) {
          let jB = !1,
            zB = !1;
          BB.values.forEach(((BB, QB) => {
            const nB = BB >= (this.buttonsDown[QB] ? JB.W : JB.V);
            nB && !this.buttonsDown[QB] && (jB = !0, zB = !0), this.buttonsDown[QB] = nB
          }));
          return [BB.leftStick, BB.rightStick].forEach(((BB, QB) => {
            const nB = this.stickAnchors[QB];
            Math.hypot(BB.x, BB.y) < (nB ? JB.W : .3) ? this.stickAnchors[QB] = null : (!nB || Math.hypot(BB.x - nB.x, BB.y - nB.y) >= .3) && (this.stickAnchors[QB] = {
              x: BB.x,
              y: BB.y
            }, jB = !0, zB ||= !nB)
          })), jB && (this.lastActivityMs = BB.timestampMs), this.onlyMovedOn = jB && !zB, jB
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
      fB = (oB = () => pB.f.getActiveGamepad(), new GB({
        touchOnly: "touchOnly" === (0, kB.c)(),
        setMayHide: sB.t,
        onHeld: (BB, jB) => {
          gB("DN", BB, jB, oB(), null)
        },
        onReleased: (BB, jB, zB) => {
          gB("released", BB, jB, oB(), zB)
        }
      }));
    var oB;
    let HB = null,
      DB = !1;
    const FB = () => DB;
    let YB = null,
      VB = !1,
      hB = null;
    const XB = () => hB;
    let ZB = !1;
    const AB = (BB, jB) => {
        if (!qB.observe(BB)) return !1;
        if (fB.observe(BB, jB, qB.isStickOffRest()), ZB && qB.wasOnlyMoveOn() && !(0, sB.l)()) return !1;
        ZB = !1, DB = !1;
        const zB = !(0, sB.l)();
        return zB && (HB = BB, hB = !EB && VB && YB ? {
          ...YB
        } : null), VB = !1, (0, sB.q)("gamepad"), iB(!0), (0, rB.m)((0, uB.m)()), zB
      },
      TB = BB => !(0, sB.l)() || BB === HB,
      PB = () => {
        qB.reset()
      },
      WB = () => {
        const BB = nB.c.get("activeInputDevice"),
          jB = "gamepad" === BB ? pB.f.getActivePad() : null;
        return {
          device: BB,
          inGame: (0, NB.y)(),
          padMovesMouse: null !== jB && (0, aB.g)(jB.id)
        }
      },
      eB = BB => {
        document.pointerLockElement ? YB = null : (YB ??= {
          x: 0,
          y: 0
        }, YB.x = BB.clientX, YB.y = BB.clientY)
      },
      lB = () => {
        const BB = new yB.d,
          jB = jB => {
            BB.reset(), ZB = !1, (0, sB.q)(jB)
          },
          zB = BB => {
            if (BB.isTrusted) {
              if (BB instanceof KeyboardEvent) {
                if ((0, sB.o)(BB), !SB(BB)) return;
                DB = !0
              }
              if (BB instanceof PointerEvent && "touch" === BB.pointerType) return YB = null, void jB("touch");
              BB instanceof PointerEvent && (eB(BB), VB = !0), ("pointerdown" !== BB.type || (BB => {
                let {
                  device: jB,
                  inGame: zB,
                  padMovesMouse: QB
                } = BB;
                return !("gamepad" === jB && QB && zB)
              })(WB())) && jB("keyboardMouse")
            }
          },
          QB = BB => {
            BB.isTrusted && (YB = null, jB("touch"))
          },
          IB = BB => {
            BB.isTrusted && "touch" !== BB.pointerType && !BB.relatedTarget && (YB = null)
          },
          NB = zB => {
            if (!zB.isTrusted || "touch" === zB.pointerType) return;
            eB(zB);
            const QB = zB.movementX || 0,
              dB = zB.movementY || 0;
            if (0 === QB && 0 === dB) return;
            if (VB = !0, iB(!1), "keyboardMouse" === nB.c.get("activeInputDevice")) return;
            const IB = qB.isHolding(zB.timeStamp),
              NB = WB(),
              uB = (BB => {
                let {
                  device: jB,
                  inGame: zB,
                  padMovesMouse: QB,
                  padHolding: nB
                } = BB;
                return ("gamepad" !== jB || !QB) && "keyboardMouse" !== jB && (zB || !nB)
              })({
                ...NB,
                inGame: NB.inGame && (0, UB.f)(),
                padHolding: IB
              });
            uB && BB.add(QB, dB, zB.timeStamp) && (jB("keyboardMouse"), ZB = qB.isStickOffRest())
          },
          uB = BB => {
            iB("gamepad" === BB)
          },
          aB = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", zB, aB), window.addEventListener("pointerdown", zB, aB), window.addEventListener("wheel", zB, aB), window.addEventListener("touchstart", QB, aB), window.addEventListener("pointermove", NB, aB), window.addEventListener("pointerout", IB, aB);
        const pB = dB.n.subscribe("appManagerUpdated|activeInputDevice", uB);
        return uB(nB.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", zB, aB), window.removeEventListener("pointerdown", zB, aB), window.removeEventListener("wheel", zB, aB), window.removeEventListener("touchstart", QB, aB), window.removeEventListener("pointermove", NB, aB), window.removeEventListener("pointerout", IB, aB), YB = null, dB.n.unsubscribe(pB), iB(!1)
        }
      },
      wB = () => {
        const [BB, jB] = (0, QB.useState)(uB.m);
        return (0, IB.f)(uB.e, (() => {
          jB((0, uB.m)())
        })), (0, IB.f)(pB.d, (() => {
          jB((0, uB.m)())
        })), BB
      }
  },
  8160: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      h: () => nB
    });
    const QB = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      nB = BB => QB.includes(BB)
  },
  8691: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => dB,
      h: () => uB,
      l: () => NB
    });
    var QB = zB(1471),
      nB = zB(1442);
    const dB = "controllerInventoryCursorChanged",
      IB = {
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
      NB = () => {
        var BB, jB;
        return (0, QB.h)(dB, null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.getInventoryCursorState()) && void 0 !== BB ? BB : IB)
      },
      uB = () => {
        var BB, jB;
        return null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  8685: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      f: () => NB,
      h: () => uB,
      l: () => IB,
      m: () => dB,
      o: () => aB,
      r: () => pB
    });
    let QB = null;
    const nB = new Set,
      dB = BB => (QB = BB, () => {
        if (QB === BB) {
          QB = null;
          for (const BB of nB) BB()
        }
      }),
      IB = BB => (nB.add(BB), () => {
        nB.delete(BB)
      }),
      NB = () => QB,
      uB = () => null !== QB;
    let UB = null;
    const aB = BB => {
        UB = BB
      },
      pB = () => {
        const BB = UB;
        return UB = null, BB
      },
      rB = (BB, jB) => {
        var zB, QB;
        return null !== (zB = null !== (QB = BB.find((BB => BB.element === jB))) && void 0 !== QB ? QB : BB.find((BB => BB.element.contains(jB)))) && void 0 !== zB ? zB : null
      }
  },
  8698: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      f: () => IB
    });
    var QB = zB(62);
    const nB = new WeakMap,
      dB = BB => {
        var jB, zB;
        return null !== (jB = null === (zB = nB.get(BB)) || void 0 === zB ? void 0 : zB.current) && void 0 !== jB ? jB : null
      },
      IB = (BB, jB) => {
        const zB = (0, QB.useRef)(jB);
        zB.current = jB;
        const dB = (0, QB.useRef)(null);
        (0, QB.useEffect)((() => {
          const jB = BB.current,
            QB = dB.current;
          jB !== QB && (QB && nB.get(QB) === zB && nB.delete(QB), dB.current = jB, jB && nB.set(jB, zB))
        })), (0, QB.useEffect)((() => () => {
          const BB = dB.current;
          BB && nB.get(BB) === zB && nB.delete(BB), dB.current = null
        }), [])
      }
  },
  8814: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      e: () => UB,
      i: () => pB,
      m: () => aB,
      n: () => uB,
      r: () => sB
    });
    var QB = zB(31),
      nB = zB(2065),
      dB = zB(1442),
      IB = zB(1418);
    const NB = BB => {
        var jB, zB;
        return (0, IB.l)() && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getGlyphForNoaAction(BB)) && void 0 !== jB ? jB : null
      },
      uB = "controllerGlyph:",
      UB = BB => {
        var jB, zB;
        return null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconName(BB)) && void 0 !== jB ? jB : `${uB}xbox/${BB}`
      },
      aB = BB => BB.startsWith(uB),
      pB = BB => {
        var jB, zB;
        return aB(BB) && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconUrl(BB)) && void 0 !== jB ? jB : null
      },
      rB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", IB.b, nB.e, nB.d],
      sB = BB => {
        const jB = rB.map((jB => QB.n.subscribe(jB, BB)));
        return () => {
          for (const BB of jB) QB.n.unsubscribe(BB)
        }
      }
  },
  8665: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      f: () => QB
    });
    const QB = "controllerOpenKeyboard",
      nB = "controllerKeyboardVisible"
  },
  8184: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      f: () => aB,
      j: () => uB,
      n: () => NB
    });
    var QB = zB(28),
      nB = zB(1664),
      dB = zB(1786);
    const IB = new Map,
      NB = (BB, jB) => (IB.has(BB) && console.warn(`Gameplay blocker "${BB}" registered twice; the newer one replaces it.`), IB.set(BB, jB), () => {
        IB.get(BB) === jB && IB.delete(BB)
      }),
      uB = () => (0, dB.e)(document.activeElement),
      UB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [jB, zB] of IB)
          if (!BB.includes(jB) && zB()) return jB;
        return null
      },
      aB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === QB.c.get("gameState") && (!(0, nB.m)() && (!uB() && null === UB(BB)))
      }
  },
  8131: (BB, jB, zB) => {
    zB.d(jB, {
      $: () => QB,
      B: () => dB,
      F: () => pB,
      J: () => LB,
      N: () => HB,
      O: () => gB,
      P: () => kB,
      Q: () => yB,
      R: () => UB,
      V: () => rB,
      W: () => sB,
      _: () => nB,
      c: () => FB,
      cb: () => SB,
      db: () => fB,
      e: () => oB,
      gb: () => DB,
      i: () => aB,
      ib: () => tB,
      k: () => uB,
      o: () => NB,
      s: () => EB,
      u: () => GB,
      y: () => MB
    });
    const QB = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      nB = QB.length,
      dB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(nB).fill(0),
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
      IB = Object.fromEntries(QB.map(((BB, jB) => [BB, jB]))),
      NB = BB => IB[BB],
      uB = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const QB = Math.hypot(BB.x, BB.y);
        if (QB <= jB) return {
          x: 0,
          y: 0
        };
        const nB = Math.min(1, (QB - jB) / Math.max(1e-4, zB - jB));
        return {
          x: BB.x / QB * nB,
          y: BB.y / QB * nB
        }
      },
      UB = ["exponential", "linear", "boost"],
      aB = (BB, jB) => {
        const zB = Math.hypot(BB.x, BB.y);
        if (0 === zB) return {
          x: 0,
          y: 0
        };
        const QB = ((BB, jB) => {
          const zB = Math.max(0, Math.min(1, BB));
          return "linear" === jB ? zB : zB * zB
        })(zB, jB);
        return {
          x: BB.x / zB * QB,
          y: BB.y / zB * QB
        }
      },
      pB = .5,
      rB = .3,
      sB = .2,
      JB = NB("LT"),
      mB = NB("RT"),
      yB = BB => BB === JB || BB === mB,
      kB = (BB, jB) => {
        const zB = NB(jB);
        return yB(zB) ? BB[zB] > .35 : BB[zB] >= pB
      },
      GB = (BB, jB) => BB.map(((BB, zB) => yB(zB) ? jB[zB] ? BB > .35 : BB >= .55 : BB >= pB)),
      LB = ["Up", "Down", "Left", "Right"],
      gB = BB => LB.includes(BB),
      tB = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(BB.x, BB.y) < jB ? null : Math.abs(BB.x) > Math.abs(BB.y) ? BB.x > 0 ? "Right" : "Left" : BB.y > 0 ? "Down" : "Up"
      },
      SB = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      MB = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      EB = ["default", "slow", "off"],
      iB = 800,
      qB = 250,
      fB = (BB, jB) => "off" === jB ? null : "slow" === jB ? {
        initialDelayMs: Math.max(BB.initialDelayMs, iB),
        intervalMs: Math.max(BB.intervalMs, qB)
      } : BB;
    class oB {
      constructor(BB) {
        this.readTiming = BB, this.DN = !1, this.timing = null, this.nextFireMs = 0
      }
      update(BB, jB) {
        return BB ? this.DN ? !!(this.timing && jB >= this.nextFireMs) && (this.nextFireMs = jB + this.timing.intervalMs, !0) : (this.DN = !0, this.timing = this.readTiming(), this.nextFireMs = jB + (null !== (zB = null === (QB = this.timing) || void 0 === QB ? void 0 : QB.initialDelayMs) && void 0 !== zB ? zB : 0), !0) : (this.DN = !1, !1);
        var zB, QB
      }
      reset() {
        this.DN = !1
      }
    }
    const HB = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      DB = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class FB {
      constructor(BB) {
        this.timer = BB, this.direction = null
      }
      update(BB, jB) {
        return BB !== this.direction && (this.timer.reset(), this.direction = BB), this.timer.update(null !== BB, jB) ? BB : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8704: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB
    });
    let QB = -1 / 0;
    const nB = () => {
        QB = performance.now()
      },
      dB = BB => performance.now() - QB < BB
  },
  8652: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      c: () => dB
    });
    var QB = zB(8155),
      nB = zB(8131);
    const dB = BB => (0, nB.db)(BB, (0, QB.j)().buttonRepeat),
      IB = BB => new nB.e((() => dB(BB)))
  },
  8165: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      g: () => dB,
      k: () => NB
    });
    var QB = zB(31),
      nB = zB(8155);
    const dB = (BB, jB) => "OpenShop" === BB ? "shop" === jB : "OpenLobbyLeaderboard" !== BB || "leaderboard" === jB;
    let IB = !1;
    const NB = BB => {
        BB !== IB && (IB = BB, QB.n.Ly(nB.e, (0, nB.j)()))
      },
      uB = () => ((BB, jB) => "shop" === BB && jB ? "shop" : "leaderboard")((0, nB.j)().leaderboardButton, IB)
  },
  8162: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => NB,
      B: () => tB,
      C: () => rB,
      F: () => sB,
      I: () => pB,
      J: () => gB,
      N: () => UB,
      P: () => kB,
      S: () => qB,
      T: () => LB,
      W: () => mB,
      X: () => yB,
      Y: () => JB,
      Z: () => GB,
      b: () => VB,
      bb: () => DB,
      d: () => XB,
      fb: () => dB,
      h: () => fB,
      i: () => IB,
      jb: () => SB,
      lb: () => hB,
      m: () => iB,
      o: () => MB,
      ob: () => EB,
      q: () => FB,
      t: () => YB,
      x: () => aB,
      z: () => uB
    });
    var QB = zB(8150),
      nB = zB(8131);
    const dB = {
        min: 25,
        max: 500,
        step: 5
      },
      IB = {
        min: 25,
        max: 100,
        step: 5
      },
      NB = {
        min: 0,
        max: .4,
        step: .01
      },
      uB = {
        min: 25,
        max: 300,
        step: 5
      },
      UB = {
        min: .5,
        max: 6,
        step: .1
      },
      aB = (BB, jB) => {
        if (!Number.isFinite(BB)) return jB.min;
        const zB = jB.min + Math.round((BB - jB.min) / jB.step) * jB.step,
          QB = Math.min(jB.max, Math.max(jB.min, zB));
        return Math.round(1e3 * QB) / 1e3
      },
      pB = BB => `${Math.round(BB)}%`,
      rB = BB => pB(100 * BB),
      sB = BB => `${BB.toFixed(1)}\xd7`,
      JB = [{
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
      mB = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      yB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      kB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      GB = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      LB = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      gB = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      tB = [{
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
      MB = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      EB = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      iB = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      qB = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      fB = {
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
      oB = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      HB = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      DB = QB.e.map((BB => {
        let {
          group: jB,
          actions: zB
        } = BB;
        const QB = zB.map((BB => ({
          kind: "action",
          action: BB
        })));
        return {
          titleKey: oB[jB],
          rows: "gameplay" === jB ? [...HB, ...QB] : QB
        }
      })),
      FB = nB.$.filter((BB => "Home" !== BB)),
      YB = 1e4;
    class VB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = BB, this.openButton = jB, this.accepts = zB, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(BB, jB) {
        var zB;
        this.updateIgnored(BB, jB);
        const QB = jB - (null !== (zB = this.startMs) && void 0 !== zB ? zB : jB) >= 250;
        for (const nB of FB)
          if (nB !== this.cancelButton && QB && !this.ignoredUntilMs.has(nB) && BB.wasPressed(nB) && this.accepts(nB)) return {
            kind: "bind",
            button: nB
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (BB.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = jB
        }
        return null === this.cancelDownAtMs ? null : BB.isHeld(this.cancelButton) && jB - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : BB.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(BB) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (BB - this.cancelDownAtMs) / 700)
      }
      updateIgnored(BB, jB) {
        if (null === this.startMs) {
          this.startMs = jB;
          for (const jB of FB) BB.isDown(jB) && this.ignoredUntilMs.set(jB, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, jB + 250)
        }
        for (const [zB, QB] of this.ignoredUntilMs) {
          const nB = BB.isDown(zB);
          QB === 1 / 0 ? nB || zB !== this.openButton ? nB || this.ignoredUntilMs.delete(zB) : this.ignoredUntilMs.set(zB, jB + 250) : jB >= QB ? this.ignoredUntilMs.delete(zB) : nB && this.ignoredUntilMs.set(zB, 1 / 0)
        }
      }
    }
    const hB = 6e3;
    class XB {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(BB, jB) {
        let {
          pressed: zB,
          DN: QB
        } = BB;
        if (zB) {
          const BB = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== BB && jB - BB < 1500 ? [...this.pressesAtMs, jB] : [jB], this.pressesAtMs.length >= 3) return 1
        }
        return QB ? (this.downAtMs ??= jB, Math.min(1, (jB - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  5101: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      e: () => IB
    });
    var QB = zB(62);
    const nB = new WeakMap,
      dB = BB => {
        var jB;
        const zB = BB.closest("[data-pad-slider]");
        return zB && null !== (jB = nB.get(zB)) && void 0 !== jB ? jB : null
      },
      IB = (BB, jB) => {
        const zB = (0, QB.useRef)(jB);
        zB.current = jB, (0, QB.useEffect)((() => {
          if (BB.current) return ((BB, jB) => (nB.set(BB, jB), () => {
            nB.get(BB) === jB && nB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              zB.current.adjust(BB)
            },
            setFraction: BB => {
              zB.current.setFraction(BB)
            },
            endDrag: () => {
              zB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  8798: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => IB,
      e: () => dB,
      f: () => QB,
      g: () => NB,
      j: () => UB,
      k: () => aB
    });
    const QB = "controllerActionWheelOpen",
      nB = "controllerActionWheelAim",
      dB = "controllerActionWheelCommit",
      IB = "controllerActionWheelClose",
      NB = "controllerActionWheelPick";
    let uB = !1;
    const UB = () => uB,
      aB = BB => {
        uB = BB
      }
  },
  8795: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      f: () => nB
    });
    let QB = 0;
    const nB = () => {
        QB++
      },
      dB = () => QB
  },
  8718: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      e: () => nB,
      f: () => IB,
      h: () => dB,
      i: () => QB,
      k: () => UB
    });
    const QB = "controllerQuickChatWheelOpen",
      nB = "controllerQuickChatWheelAim",
      dB = "controllerQuickChatWheelCommit",
      IB = "controllerQuickChatWheelClose";
    let NB = !1;
    const uB = () => NB,
      UB = BB => {
        NB = BB
      }
  },
  8727: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      c: () => nB
    });
    var QB = zB(31);
    const nB = "localBlockBroken";

    function dB() {
      return {
        onPlayerChangeBlock(BB, jB, zB, dB, IB, NB) {
          "Air" === NB && QB.n.Ly(nB)
        }
      }
    }
  },
  8888: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => uB
    });
    var QB = zB(28),
      nB = zB(1357),
      dB = zB(106);
    const IB = {
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

    function NB() {
      return (0, dB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const uB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, jB) {
        var zB;
        if (!this.deps.enabled()) return;
        const QB = IB[BB],
          nB = null !== jB && void 0 !== jB ? jB : QB.pattern;
        if (null === nB) return void console.warn("No vibration pattern for", BB);
        const dB = this.deps.now();
        dB - this.lastAnyAt < 40 && QB.priority < this.playingPriority || dB - (null !== (zB = this.lastAt.get(BB)) && void 0 !== zB ? zB : -1 / 0) < QB.minGapMs || dB < this.playingUntil && QB.priority < this.playingPriority || (this.lastAt.set(BB, dB), this.lastAnyAt = dB, this.playingUntil = dB + nB.reduce(((BB, jB) => BB + jB), 0), this.playingPriority = QB.priority, this.deps.vibrate(nB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => NB() && QB.c.get("isTouchScreen") && QB.c.get("clientEscMenuOptions").vibration && !(0, nB.e)()
    })
  },
  8724: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(1289);

    function nB(BB, jB) {
      var zB, nB;
      try {
        const zB = (0, QB.e)();
        if ("function" === typeof zB) {
          const QB = new zB(BB, jB);
          if (QB.type === BB) return QB
        }
      } catch {}
      const dB = document.createEvent("Event");
      return dB.initEvent(BB, null !== (zB = null === jB || void 0 === jB ? void 0 : jB.bubbles) && void 0 !== zB && zB, null !== (nB = null === jB || void 0 === jB ? void 0 : jB.cancelable) && void 0 !== nB && nB), dB
    }
  },
  8769: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(8773),
      nB = zB(658),
      dB = zB(145);

    function IB(BB) {
      var jB, zB;
      if ((0, nB.I)(BB)) return !0;
      const IB = null !== (jB = null === (zB = dB.siteUsedData[dB.siteUsed]) || void 0 === zB ? void 0 : zB.adConfig.showRewardedAds) && void 0 !== jB && jB;
      for (const nB in BB) {
        const jB = BB[nB];
        if (null !== jB && void 0 !== jB && jB.items)
          for (const BB in jB.items)
            if ((0, QB.h)(jB.items[BB], IB)) return !1
      }
      return !0
    }
  },
  8773: (BB, jB, zB) => {
    function QB(BB, jB) {
      return !BB.hidden && (jB || !BB.isRewardedAd)
    }

    function nB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function dB(BB, jB) {
      var zB;
      if ("dropdown" === (null === (zB = BB.userInput) || void 0 === zB ? void 0 : zB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const zB of BB.userInput.dropdownOptions)
          if (nB(zB) === jB) return "object" === typeof zB ? zB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", jB)
      }
      return BB.cost
    }

    function IB(BB, jB, zB) {
      var QB;
      const nB = null !== (QB = zB.excludedPlayers) && void 0 !== QB ? QB : [jB];
      return BB.filter((BB => !nB.includes(BB)))
    }
    zB.d(jB, {
      b: () => dB,
      d: () => nB,
      g: () => IB,
      h: () => QB
    })
  },
  8805: () => {},
  8200: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8209: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8216: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8225: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8231: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8238: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8247: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8250: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8252: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8260: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8263: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8266: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8272: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8277: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8284: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8287: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8290: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8298: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8305: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8314: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8323: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8325: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8327: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8330: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8336: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8340: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8342: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8349: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8357: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8361: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8365: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8370: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8378: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8385: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8387: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8396: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8404: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8410: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8417: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8424: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8432: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8441: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8448: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8456: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8464: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8468: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8472: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8477: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8482: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8484: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8492: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8497: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8502: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8505: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8507: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8512: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8520: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8525: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8533: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8540: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8549: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8558: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8564: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8570: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8578: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8580: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8582: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8591: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8599: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8601: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8604: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8612: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8616: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8625: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8632: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8639: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
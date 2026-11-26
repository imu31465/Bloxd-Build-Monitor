export const id = 33;
export const ids = [33];
export const modules = {
  9408: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => RV,
      e: () => MV,
      i: () => zV
    });
    var JV = xV(62),
      YV = xV(5020),
      UV = xV(1168),
      yV = xV(1542),
      pV = xV(32),
      QV = xV(3866),
      nV = xV(2388),
      wV = xV(1269),
      ZV = xV(2822),
      vV = xV(2051),
      rV = xV(2100),
      kV = xV(1220),
      bV = xV(27),
      EV = xV(1725),
      BV = xV(1146),
      jV = xV.n(BV),
      qV = xV(9413),
      tV = xV(9416),
      FV = xV(9420),
      TV = xV(9333),
      PV = xV(9422),
      AV = xV(3515),
      NV = (xV(9424), xV(1321));
    let XV = null;

    function MV() {
      return null !== XV
    }

    function zV() {
      return "pad" === XV
    }

    function GV() {
      return "inGame" === bV.b.get("gameState") && !(0, EV.n)()
    }

    function WV(VV) {
      return (0, tV.s)(VV, wV.k, tV.e, tV.g, tV.h)
    }
    const RV = (0, JV.memo)((function() {
      const {
        t: VV
      } = (0, kV.A)(), {
        userContext: eV
      } = (0, UV.d)(), [xV, bV] = (0, JV.useState)(null), [BV, MV] = (0, JV.useState)(null), zV = (0, JV.useRef)(null), RV = (0, JV.useCallback)((VV => {
        zV.current = VV, MV(VV)
      }), []), gV = (0, JV.useRef)(0), DV = (0, JV.useRef)(null), iV = (0, JV.useRef)({
        x: 0,
        y: 0
      }), [CV, aV] = (0, JV.useState)(0), oV = (0, JV.useMemo)((() => function(VV) {
        const eV = [];
        for (let JV = 0; JV < wV.k; JV++) {
          var xV;
          eV.push(null !== (xV = VV[JV]) && void 0 !== xV ? xV : null)
        }
        return eV
      }((0, ZV.f)(eV.getPlayerCosmetics().emote))), [eV, CV]);
      (0, rV.c)("cosmeticsUpdated", (VV => {
        VV.some((VV => VV.local && "emote" === VV.YJ)) && aV((VV => VV + 1))
      }));
      const cV = (0, JV.useRef)(!1),
        hV = (0, JV.useCallback)((function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === VV && (0, FV.g)(), cV.current = eV, iV.current = {
            x: 0,
            y: 0
          }, RV(null), bV(VV)
        }), [RV]),
        lV = (0, JV.useCallback)((() => {
          bV(null), RV(null), iV.current = {
            x: 0,
            y: 0
          }
        }), [RV]),
        LV = (0, JV.useCallback)((VV => {
          if (Date.now() < gV.current) return;
          const eV = (0, nV.j)(VV),
            xV = !!eV.holdUntilMove,
            JV = xV ? 600 : Math.ceil(1e3 * eV.animation.animation_length / nV.d) + 200;
          gV.current = Date.now() + JV, DV.current = VV, vV.gameBridge.send("playEmote", VV), vV.gameBridge.send("applyTemporaryThirdPerson", xV ? {} : {
            durationMs: JV
          })
        }), []);
      (0, yV.g)("requestToggleEmoteWheel", (() => {
        null === xV ? GV() && hV("click") : lV()
      })), (0, yV.g)("requestEmoteWheelHoldOpen", (() => {
        null === xV && GV() && hV((0, qV.d)() ? "hold" : "click")
      })), (0, yV.g)("requestEmoteWheelPadOpen", (VV => {
        null !== xV || !GV() || (0, TV.c)() || (0, PV.r)() || hV("pad", VV)
      })), (0, yV.g)("requestEmoteRepeatLast", (() => {
        if (null !== xV || !GV() || (0, TV.c)() || (0, PV.r)()) return;
        const VV = DV.current;
        null !== VV && oV.includes(VV) ? LV(VV) : hV("pad", !0)
      }));
      const fV = () => {
        const VV = zV.current,
          eV = null !== VV ? oV[VV] : null;
        null !== eV && "pad" === xV && Date.now() < gV.current || (lV(), null !== eV && LV(eV))
      };
      (0, yV.g)("emoteWheelPadAim", (VV => {
        if ("pad" !== xV) return;
        const eV = (0, tV.D)(VV, wV.k, zV.current);
        RV(null !== eV && null !== oV[eV] ? eV : null)
      })), (0, yV.g)("requestEmoteWheelPadCommit", (VV => {
        "pad" !== xV || VV && cV.current || fV()
      })), (0, yV.g)("appManagerUpdated|activeInputDevice", (VV => {
        null !== xV && "pad" === xV !== ("gamepad" === VV) && lV()
      })), (0, JV.useLayoutEffect)((() => (XV = xV, (0, QV.v)("emoteWheel", "pad" === xV), pV.h.QZ(QV.n), () => {
        XV = null, (0, QV.v)("emoteWheel", !1), pV.h.QZ(QV.n)
      })), [xV]), (0, yV.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === xV && fV()
      })), (0, yV.g)("requestEmoteWheelClose", (() => {
        null !== xV && lV()
      })), (0, yV.g)("appManagerUpdated|gameState", (VV => {
        "inGame" !== VV && lV()
      }));
      const mV = () => {
        (0, EV.n)() && lV()
      };
      if ((0, yV.g)("appManagerUpdated|openEverythingMenuName", mV), (0, yV.g)("appManagerUpdated|openInGameMenuName", mV), (0, yV.g)("pointerLockUpdate", (VV => {
          VV || "hold" !== xV || lV()
        })), (0, JV.useEffect)((() => {
          if (null === xV) return;
          const VV = VV => {
            "Escape" === VV.key && (VV.stopImmediatePropagation(), VV.preventDefault(), lV())
          };
          return document.addEventListener("keydown", VV, !0), () => {
            document.removeEventListener("keydown", VV, !0)
          }
        }), [xV, lV]), (0, YV.b)(!0, "click" === xV, "EmoteWheelOverlay"), (0, JV.useEffect)((() => {
          if ("hold" === xV) return vV.gameBridge.send("holdEmoteWheel", !0), () => {
            vV.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [xV]), (0, JV.useEffect)((() => {
          if ("hold" !== xV) return;
          const VV = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            eV = tV.q * VV,
            JV = tV.p * VV,
            YV = VV => {
              let xV = iV.current.x + VV.movementX,
                YV = iV.current.y + VV.movementY;
              const UV = Math.hypot(xV, YV);
              if (UV > eV) {
                const VV = eV / UV;
                xV *= VV, YV *= VV
              }
              iV.current = {
                x: xV,
                y: YV
              }, RV(function(VV, eV, xV, JV) {
                if (Math.hypot(VV, eV) < xV) return null;
                const YV = (0, tV.w)(VV, eV, wV.k);
                return null === JV[YV] ? null : YV
              }(xV, YV, JV, oV))
            };
          return document.addEventListener("mousemove", YV), () => {
            document.removeEventListener("mousemove", YV)
          }
        }), [xV, oV, RV]), null === xV) return null;
      const KV = "hold" === xV || "pad" === xV,
        HV = null !== BV ? oV[BV] : null,
        uV = null !== HV ? (0, nV.j)(HV).displayName : VV("emotes:pickEmote");
      return (0, NV.jsx)("div", {
        className: jV()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === xV
        }),
        onMouseDown: VV => {
          VV.target === VV.currentTarget && lV()
        },
        children: (0, NV.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * tV.q + "rem",
            height: 2 * tV.q + "rem"
          },
          children: [(0, NV.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${tV.l} ${tV.l}`,
            children: [oV.map(((eV, xV) => {
              const JV = null !== eV,
                YV = KV && xV === BV;
              return (0, NV.jsx)("path", {
                d: WV(xV),
                className: jV()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: YV,
                  EmoteWheelWedgeDisabled: !JV
                }),
                onClick: VV => {
                  VV.stopPropagation(), null !== eV && (VV => {
                    lV(), LV(VV)
                  })(eV)
                },
                "aria-label": null !== eV ? (0, nV.j)(eV).displayName : VV("emotes:emptySlot")
              }, xV)
            })), (0, NV.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: tV.e,
              cy: tV.e,
              r: tV.h
            }), (0, NV.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: tV.e,
              cy: tV.e,
              r: tV.g
            }), KV && null !== BV && (0, NV.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: WV(BV)
            })]
          }), oV.map(((VV, eV) => {
            const xV = null !== VV,
              JV = KV && eV === BV,
              YV = (0, tV.A)(eV, wV.k),
              UV = tV.d * Math.cos(YV),
              yV = tV.d * Math.sin(YV);
            return (0, NV.jsx)("div", {
              className: jV()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: JV,
                EmoteWheelSlotIconDisabled: !xV
              }),
              style: {
                left: `calc(50% + ${UV}rem)`,
                top: `calc(50% + ${yV}rem)`,
                backgroundImage: xV ? `url(${(0,AV.g)("emote",VV)})` : void 0
              },
              "aria-hidden": !0
            }, eV)
          })), (0, NV.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: uV
          })]
        })
      })
    }))
  },
  9513: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => XV,
      e: () => GV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(2752),
      yV = xV(3848);
    const pV = 6,
      QV = 4,
      nV = ["HudMove-inventory", "HudLocked-inventory"];

    function wV(VV) {
      let {
        left: eV,
        right: xV,
        height: JV,
        rowTop: YV,
        besideBottom: UV,
        obstacles: yV
      } = VV;
      const nV = yV.filter((VV => VV.left < xV + pV && VV.right > eV - pV));
      let wV = UV;
      for (let pV = 0; pV <= nV.length; pV++) {
        const VV = nV.filter((VV => VV.top < wV + QV && VV.bottom > wV - JV - QV));
        if (0 === VV.length) break;
        wV = Math.min(...VV.map((VV => VV.top))) - QV
      }
      return wV === UV ? null : Math.ceil(YV - wV)
    }

    function ZV(VV) {
      return Array.from(VV.children).filter((VV => !VV.classList.contains("HotBarRow")))
    }

    function vV(VV) {
      return function(VV) {
        const eV = [],
          xV = (VV, JV) => {
            const YV = VV.getBoundingClientRect();
            if (YV.width > 0 && YV.height > 0) eV.push(VV);
            else if (JV < 2)
              for (const eV of Array.from(VV.children)) xV(eV, JV + 1)
          };
        for (const JV of VV) xV(JV, 0);
        return eV
      }(ZV(VV).flatMap((VV => VV.classList.contains("AuraBarWrapper") ? [] : VV.classList.contains("BottomScreenStatBarList") ? Array.from(VV.children) : [VV])))
    }

    function rV(VV, eV) {
      var xV;
      const JV = null === (xV = VV.querySelector(":scope > .AuraBarWrapper")) || void 0 === xV ? void 0 : xV.getBoundingClientRect();
      return (JV && JV.height > 0 ? JV.top : eV) - QV
    }
    const kV = ".BottomScreenMessage, [role='status']";

    function bV(VV, eV, xV, JV, YV) {
      const UV = VV => VV.map((VV => VV.getBoundingClientRect())),
        yV = wV({
          ...xV,
          obstacles: UV(xV.obstacles.filter((VV => !VV.matches(kV))))
        }),
        pV = eV.ownerDocument.defaultView,
        QV = `${null===pV||void 0===pV?void 0:pV.innerWidth}x${null===pV||void 0===pV?void 0:pV.innerHeight}:${JV}:${Math.round(xV.rowTop)}`,
        nV = VV.get(eV),
        ZV = (null === nV || void 0 === nV ? void 0 : nV.at) === QV ? (vV = nV.rise, rV = yV, null === vV ? rV : null === rV ? vV : Math.max(vV, rV)) : yV;
      var vV, rV;
      const bV = wV({
        ...xV,
        besideBottom: null === ZV ? xV.besideBottom : xV.rowTop - ZV,
        obstacles: UV(xV.obstacles)
      });
      return YV && VV.set(eV, {
        at: QV,
        rise: ZV
      }), null !== bV && void 0 !== bV ? bV : ZV
    }

    function EV(VV, eV, xV, JV) {
      VV.classList.toggle(eV, null !== JV), null === JV ? VV.style.removeProperty(xV) : VV.style.setProperty(xV, `${JV}px`)
    }
    const BV = new WeakMap,
      jV = new WeakMap,
      qV = "(orientation: portrait) and (max-width: 600px)";

    function tV(VV, eV) {
      const xV = VV.getBoundingClientRect();
      if (0 === xV.width) return null;
      const JV = [xV, ...Array.from(VV.children).filter((VV => !(VV => eV.contains(VV.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(VV))).map((VV => VV.getBoundingClientRect())).filter((VV => VV.width > 0))];
      return {
        left: Math.min(...JV.map((VV => VV.left))),
        top: Math.min(...JV.map((VV => VV.top))),
        right: Math.max(...JV.map((VV => VV.right))),
        bottom: Math.max(...JV.map((VV => VV.bottom)))
      }
    }

    function FV(VV) {
      let {
        slotsLeft: eV,
        slotsRight: xV,
        width: JV,
        zoneRight: YV
      } = VV;
      const UV = Math.max(0, Math.floor(xV - eV - JV));
      return null === YV ? 0 : Math.min(UV, Math.max(0, Math.ceil(YV + pV - eV)))
    }

    function TV(VV) {
      var eV;
      const xV = VV.getBoundingClientRect();
      if (0 === xV.width) return null;
      const JV = null === (eV = VV.parentElement) || void 0 === eV ? void 0 : eV.getBoundingClientRect();
      return JV && JV.width > 0 ? Math.min(xV.right, JV.left + JV.width * PV) : xV.right
    }
    const PV = .35,
      AV = new WeakMap,
      NV = new WeakMap;

    function XV(VV) {
      MV(VV) && MV(VV),
        function(VV) {
          var eV, xV;
          const JV = VV.documentElement.classList;
          if (!JV.contains("TouchHotbar") || !JV.contains("TouchHotbarKeysAbove") || nV.some((VV => JV.contains(VV))) || !1 !== (null === (eV = VV.defaultView) || void 0 === eV || null === (xV = eV.matchMedia) || void 0 === xV ? void 0 : xV.call(eV, qV).matches)) return;
          const YV = VV.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            UV = null === YV || void 0 === YV ? void 0 : YV.closest(".BottomMiddleElements"),
            yV = null === YV || void 0 === YV ? void 0 : YV.parentElement;
          if (!YV || !UV || !yV || UV.classList.contains("TouchInventoryOpen") || YV.querySelector("[data-pressing]")) return;
          const pV = tV(YV, JV),
            QV = yV.getBoundingClientRect().top,
            wV = pV && bV(BV, UV, {
              left: pV.left,
              right: pV.right,
              height: pV.bottom - pV.top,
              rowTop: QV,
              besideBottom: rV(UV, QV),
              obstacles: vV(UV).filter((VV => !VV.classList.contains("BottomScreenMessage")))
            }, `${Math.round(pV.left)}:${Math.round(pV.right-pV.left)}x${Math.round(pV.bottom-pV.top)}`, !0);
          jV.has(UV) && jV.get(UV) === wV || (EV(UV, "KeysAboveUp", "--touch-keys-above-rise", wV), jV.set(UV, wV))
        }(VV)
    }

    function MV(VV) {
      var eV, xV, JV, YV;
      const UV = VV.documentElement.classList;
      if (!UV.contains("TouchHotbar") || UV.contains("TouchHotbarKeysAbove") || nV.some((VV => UV.contains(VV))) || null === (eV = VV.defaultView) || void 0 === eV || null === (xV = eV.matchMedia) || void 0 === xV || !xV.call(eV, zV).matches) return !1;
      const yV = VV.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        pV = null === yV || void 0 === yV ? void 0 : yV.parentElement,
        QV = null === yV || void 0 === yV ? void 0 : yV.closest(".BottomMiddleElements"),
        wV = null === QV || void 0 === QV ? void 0 : QV.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!yV || !pV || !QV || !wV || QV.classList.contains("TouchInventoryOpen")) return !1;
      const ZV = yV.getBoundingClientRect();
      if (0 === ZV.width) return !1;
      const kV = VV.querySelector(".JoystickZone"),
        BV = wV.getBoundingClientRect(),
        jV = pV.getBoundingClientRect().top,
        qV = FV({
          slotsLeft: BV.left,
          slotsRight: BV.right,
          width: ZV.width,
          zoneRight: kV ? TV(kV) : null
        }),
        tV = AV.get(QV),
        PV = BV.left + qV,
        XV = {
          shift: qV,
          rise: bV(NV, QV, {
            left: PV,
            right: PV + ZV.width,
            height: ZV.height,
            rowTop: jV,
            besideBottom: rV(QV, jV),
            obstacles: vV(QV)
          }, `${qV}:${Math.round(ZV.width)}`, (null !== (JV = null === tV || void 0 === tV ? void 0 : tV.shift) && void 0 !== JV ? JV : 0) === qV)
        };
      return (null === tV || void 0 === tV ? void 0 : tV.shift) !== XV.shift && QV.style.setProperty("--touch-shop-above-shift", `${XV.shift}px`), (null === tV || void 0 === tV ? void 0 : tV.rise) !== XV.rise && EV(QV, "ShopAboveUp", "--touch-shop-above-rise", XV.rise), AV.set(QV, XV), (null !== (YV = null === tV || void 0 === tV ? void 0 : tV.shift) && void 0 !== YV ? YV : 0) !== XV.shift
    }
    const zV = "(orientation: landscape) and (max-height: 500px)";

    function GV(VV, eV, xV) {
      (0, JV.useLayoutEffect)((() => {
        var eV;
        const JV = null === (eV = VV.current) || void 0 === eV ? void 0 : eV.closest(".BottomMiddleElements");
        if (!JV || xV) return;
        const pV = new ResizeObserver((() => {
            rV(!1)
          })),
          QV = () => {
            pV.disconnect();
            const VV = document.querySelector(".JoystickZone");
            for (const eV of [VV, JV, JV.querySelector(".HotBarGameItemsContainer"), ...vV(JV)]) eV && pV.observe(eV)
          };
        let nV = null,
          wV = !1;
        const rV = VV => {
            wV ||= VV, nV ??= requestAnimationFrame((() => {
              nV = null, wV && (wV = !1, QV()), XV(document)
            }))
          },
          kV = new MutationObserver((() => {
            rV(!0)
          }));
        kV.observe(JV, {
          childList: !0
        });
        for (const VV of ZV(JV)) kV.observe(VV, {
          childList: !0,
          subtree: !0
        });
        XV(document), QV();
        const bV = () => {
            rV(!0)
          },
          EV = [(0, YV.i)(UV.e, bV), (0, YV.i)(yV.b, bV)],
          BV = new MutationObserver((() => {
            rV(!1)
          }));
        return VV.current && BV.observe(VV.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          BV.disconnect(), null !== nV && cancelAnimationFrame(nV), pV.disconnect(), kV.disconnect();
          for (const VV of EV) VV()
        }
      }), [VV, eV, xV])
    }
  },
  5500: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => kV,
      i: () => tV,
      m: () => bV,
      q: () => qV
    });
    var JV = xV(62),
      YV = xV(5508),
      UV = xV(4795),
      yV = xV(1446),
      pV = xV(5529),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1439),
      ZV = xV(1838),
      vV = xV(5536),
      rV = xV(1321);

    function kV(VV) {
      let {
        label: eV,
        onClick: xV,
        checked: JV,
        circleInfoText: YV,
        className: pV,
        disabled: QV,
        note: wV
      } = VV;
      return (0, rV.jsxs)("div", {
        "aria-disabled": QV || void 0,
        "data-pad-focusable": !0,
        className: nV()("SettingBox CheckboxContainer", {
          [pV]: pV,
          SettingBoxDisabled: QV
        }),
        onClick: () => {
          QV || xV(!JV)
        },
        children: [(0, rV.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rV.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rV.jsx)(UV.b, {
              className: "SettingsCheckbox",
              checked: JV,
              disabled: QV,
              onChange: () => {}
            })
          }), (0, rV.jsxs)("div", {
            className: "CheckboxText",
            children: [eV, YV && (0, rV.jsx)("span", {
              onClick: VV => VV.stopPropagation(),
              children: (0, rV.jsx)(yV.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: YV
              })
            })]
          })]
        }), wV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: wV
        })]
      })
    }

    function bV(VV) {
      let {
        name: eV,
        onChange: xV,
        min: YV,
        max: UV,
        step: pV,
        initValue: QV,
        circleInfoText: wV,
        format: ZV,
        className: vV,
        padStep: kV,
        disabled: bV = !1,
        selectableMax: EV,
        cappedNote: BV,
        onChangeComplete: qV
      } = VV;
      const [tV, FV] = (0, JV.useState)(QV), TV = (0, JV.useRef)(QV);
      (0, JV.useEffect)((() => {
        TV.current = QV, FV(QV)
      }), [QV]);
      const PV = void 0 !== EV && EV < UV,
        AV = PV ? {
          "--slider-selectable": (EV - YV) / (UV - YV)
        } : void 0;
      return (0, rV.jsxs)("div", {
        className: nV()("SettingBox SettingsSliderDiv", {
          [vV]: vV,
          SettingBoxDisabled: bV,
          SliderCapped: PV
        }),
        style: AV,
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [`${eV}: ${ZV?ZV(tV):tV}`, wV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: wV
          })]
        }), (0, rV.jsx)("div", {
          className: "SliderDiv",
          children: (0, rV.jsx)(jV, {
            value: tV,
            min: YV,
            max: UV,
            step: pV,
            onChange: VV => {
              if (PV && VV >= EV && tV === EV) return;
              const eV = PV ? Math.min(VV, EV) : VV;
              TV.current = eV, FV(eV), xV(eV)
            },
            onChangeComplete: qV && (() => {
              qV(TV.current)
            }),
            format: ZV,
            padStep: kV,
            disabled: bV
          })
        }), PV && BV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: BV
        })]
      })
    }
    const EV = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function BV(VV) {
      var eV;
      return (null !== (eV = String(VV).split(".")[1]) && void 0 !== eV ? eV : "").length
    }

    function jV(VV) {
      let {
        value: eV,
        min: xV,
        max: UV,
        step: yV,
        onChange: pV,
        orientation: QV,
        reverse: nV,
        setIsChanging: wV,
        tooltip: ZV,
        labels: kV,
        handleLabel: bV,
        format: jV,
        onChangeStart: qV,
        onChangeComplete: tV,
        padStep: FV,
        disabled: TV = !1
      } = VV;
      const PV = (0, JV.useRef)(null),
        AV = (0, JV.useRef)(null);
      (0, JV.useLayoutEffect)((() => {
        var VV, eV, xV;
        const JV = null !== (VV = null === (eV = PV.current) || void 0 === eV ? void 0 : eV.querySelector(".rangeslider")) && void 0 !== VV ? VV : null;
        null === JV || void 0 === JV || JV.setAttribute("data-pad-slider", ""), null === JV || void 0 === JV || JV.setAttribute("data-pad-focusable", ""), null === JV || void 0 === JV || null === (xV = JV.querySelector(".rangeslider__handle")) || void 0 === xV || xV.setAttribute("data-pad-slider-handle", ""), AV.current = JV
      }), []), (0, JV.useLayoutEffect)((() => {
        var VV, eV;
        TV ? null === (VV = AV.current) || void 0 === VV || VV.setAttribute("aria-disabled", "true") : null === (eV = AV.current) || void 0 === eV || eV.removeAttribute("aria-disabled")
      }), [TV]);
      const NV = Math.max(BV(yV), BV(xV)),
        XV = VV => {
          if (VV >= UV) return UV;
          if (VV <= xV) return xV;
          const eV = Number((Math.round((VV - xV) / yV) * yV + xV).toFixed(NV));
          return Math.min(UV, Math.max(xV, eV))
        },
        MV = (0, JV.useRef)(tV);
      MV.current = tV, (0, JV.useEffect)((() => {
        const VV = PV.current;
        if (!VV) return;
        const eV = VV => {
          var eV;
          EV.has(VV.key) && (null === (eV = MV.current) || void 0 === eV || eV.call(MV))
        };
        return VV.addEventListener("keyup", eV), () => {
          VV.removeEventListener("keyup", eV)
        }
      }), []);
      const zV = (0, JV.useRef)(!1);
      return (0, vV.h)(AV, {
        adjust: VV => {
          if (TV) return;
          const JV = null !== FV && void 0 !== FV ? FV : Math.max(yV, Math.round((UV - xV) / 20 / yV) * yV),
            YV = XV(eV + VV * JV * (nV ? -1 : 1));
          YV !== eV && (null === qV || void 0 === qV || qV(), pV(YV), null === tV || void 0 === tV || tV())
        },
        setFraction: VV => {
          if (TV) return;
          const JV = XV(xV + (nV ? 1 - VV : VV) * (UV - xV));
          JV !== eV && (zV.current || (zV.current = !0, null === qV || void 0 === qV || qV()), pV(JV))
        },
        endDrag: () => {
          zV.current && (zV.current = !1, null === tV || void 0 === tV || tV())
        }
      }), (0, rV.jsx)("div", {
        ref: PV,
        style: {
          display: "contents"
        },
        children: (0, rV.jsx)(YV.e, {
          value: eV,
          min: xV,
          max: UV,
          step: yV,
          onChange: VV => {
            pV(XV(VV))
          },
          orientation: QV,
          reverse: nV,
          tooltip: ZV,
          labels: kV,
          handleLabel: bV,
          format: jV,
          onChangeStart: () => {
            null === qV || void 0 === qV || qV(), null === wV || void 0 === wV || wV(!0)
          },
          onChangeComplete: () => {
            null === wV || void 0 === wV || wV(!1), null === tV || void 0 === tV || tV()
          }
        })
      })
    }
    async function qV() {
      const VV = wV.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await VV.getResult() && (0, ZV.reloadBloxd)()
    }

    function tV(VV) {
      let {
        label: eV,
        options: xV,
        value: JV,
        onChange: YV,
        circleInfoText: UV
      } = VV;
      return (0, rV.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [eV, UV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: UV
          })]
        }), (0, rV.jsx)(pV.b, {
          ariaLabel: eV,
          options: xV,
          value: JV,
          onChange: YV
        })]
      })
    }
  },
  5529: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1321);

    function yV(VV) {
      let {
        options: eV,
        value: xV,
        onChange: JV,
        ariaLabel: yV,
        className: pV,
        reselectable: QV = !1,
        keepsFocus: nV = !1,
        padTabs: wV
      } = VV;
      const ZV = void 0 !== wV;
      return (0, UV.jsx)("div", {
        className: YV()("SegmentedToggle", pV),
        role: "group",
        "aria-label": yV,
        "data-pad-tabs": wV,
        children: eV.map((VV => {
          const eV = VV.value === xV;
          return (0, UV.jsx)("button", {
            type: "button",
            "aria-pressed": eV,
            "data-pad-tab": ZV || void 0,
            "data-pad-selected": ZV && eV ? "true" : void 0,
            "data-pad-default-focus": ZV && eV || void 0,
            "aria-label": VV.ariaLabel,
            title: VV.ariaLabel,
            className: YV()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: eV
            }),
            onMouseDown: nV ? VV => {
              VV.preventDefault()
            } : void 0,
            onClick: () => {
              eV && !QV || JV(VV.value)
            },
            children: VV.label
          }, VV.value)
        }))
      })
    }
  },
  9363: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => UV
    });
    var JV = xV(2130);
    const YV = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      UV = VV => "string" === typeof VV.icon && "" !== VV.icon && "string" === typeof VV.keycode && YV.test(VV.keycode),
      yV = VV => "Space" === VV ? "_" : JV.g[VV]
  },
  9413: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(27);

    function YV() {
      return !JV.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9500: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => vV,
      E: () => nV,
      F: () => kV,
      I: () => UV,
      d: () => YV,
      g: () => pV,
      h: () => JV,
      l: () => bV,
      p: () => rV,
      q: () => wV,
      t: () => yV,
      u: () => EV,
      w: () => ZV,
      x: () => QV
    });
    const JV = VV => ({
      left: VV.left,
      top: VV.top,
      right: VV.right,
      bottom: VV.bottom
    });

    function YV(VV) {
      return {
        x: (VV.left + VV.right) / 2,
        y: (VV.top + VV.bottom) / 2
      }
    }

    function UV(VV) {
      return 0 === VV.length ? null : VV.reduce(((VV, eV) => ({
        left: Math.min(VV.left, eV.left),
        top: Math.min(VV.top, eV.top),
        right: Math.max(VV.right, eV.right),
        bottom: Math.max(VV.bottom, eV.bottom)
      })))
    }

    function yV(VV, eV) {
      const xV = Math.max(0, (eV - (VV.right - VV.left)) / 2),
        JV = Math.max(0, (eV - (VV.bottom - VV.top)) / 2);
      return {
        left: VV.left - xV,
        top: VV.top - JV,
        right: VV.right + xV,
        bottom: VV.bottom + JV
      }
    }

    function pV(VV, eV) {
      return eV.x >= VV.left && eV.x <= VV.right && eV.y >= VV.top && eV.y <= VV.bottom
    }

    function QV(VV, eV, xV) {
      let JV = null,
        UV = 1 / 0;
      for (const {
          id: YV,
          box: yV
        }
        of eV) {
        const eV = (yV.right - yV.left) * (yV.bottom - yV.top);
        pV(yV, VV) && eV < UV && (UV = eV, JV = YV)
      }
      if (null !== JV) return JV;
      let QV = 1 / 0;
      for (const {
          id: nV,
          box: wV
        }
        of eV) {
        if (!pV(yV(wV, xV), VV)) continue;
        const eV = YV(wV),
          UV = Math.hypot(VV.x - eV.x, VV.y - eV.y);
        UV < QV && (QV = UV, JV = nV)
      }
      return JV
    }

    function nV(VV, eV, xV) {
      return {
        left: xV.left,
        top: xV.top,
        right: VV - xV.right,
        bottom: eV - xV.bottom
      }
    }

    function wV(VV, eV, xV, JV) {
      const YV = (VV, eV, xV) => Math.max(Math.min(eV, 0), Math.min(Math.max(xV, 0), VV));
      return {
        x: YV(eV, JV.left - VV.left, JV.right - VV.right),
        y: YV(xV, JV.top - VV.top, JV.bottom - VV.bottom)
      }
    }

    function ZV(VV, eV, xV, JV, YV) {
      const UV = VV.dx * JV + eV,
        yV = VV.dy * YV + xV,
        pV = VV => Math.max(-1, Math.min(1, VV));
      return {
        dx: pV(UV / JV),
        dy: pV(yV / YV)
      }
    }

    function vV(VV, eV, xV, JV) {
      return eV <= 0 || xV <= 0 ? 1 : Math.max(.05, Math.min(1, VV / eV, JV / xV))
    }

    function rV(VV, eV, xV) {
      return Math.min(VV.right, eV.right) - Math.max(VV.left, eV.left) > xV && Math.min(VV.bottom, eV.bottom) - Math.max(VV.top, eV.top) > xV
    }

    function kV(VV, eV) {
      const xV = (VV, eV, xV, JV) => eV - VV > JV - xV ? xV - VV > eV - JV ? JV - eV : xV - VV : VV < xV ? xV - VV : eV > JV ? JV - eV : 0;
      return {
        x: xV(VV.left, VV.right, eV.left, eV.right),
        y: xV(VV.top, VV.bottom, eV.top, eV.bottom)
      }
    }

    function bV(VV, eV, xV) {
      return rV(VV, {
        left: 0,
        top: 0,
        right: eV,
        bottom: xV
      }, 0)
    }

    function EV(VV, eV) {
      let {
        avoid: xV = null,
        bounds: JV = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, YV = 0, UV = 1 / 0;
      return VV.forEach(((VV, yV) => {
        const pV = eV.filter((eV => rV(VV, eV, 0))).length,
          QV = null !== JV && (VV.left < JV.left || VV.top < JV.top || VV.right > JV.right || VV.bottom > JV.bottom),
          nV = pV + (xV && rV(VV, xV, 0) ? 1e3 : 0) + (QV ? 1e6 : 0);
        nV < UV && (YV = yV, UV = nV)
      })), YV
    }
  },
  9491: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => ZV,
      b: () => pV,
      f: () => tV,
      i: () => qV,
      j: () => jV,
      n: () => QV,
      o: () => kV,
      q: () => wV,
      r: () => TV,
      u: () => FV,
      x: () => nV,
      y: () => rV,
      z: () => vV
    });
    var JV = xV(9500),
      YV = xV(2729);
    const UV = {
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
        ...Object.fromEntries(YV.G.map((VV => [VV, "menu"])))
      },
      yV = VV => YV.z.filter((eV => UV[eV] === VV)),
      pV = new Set(yV("cluster")),
      QV = new Set(yV("inventory")),
      nV = VV => "inventory" === VV || QV.has(VV),
      wV = VV => {
        const eV = UV[VV];
        return void 0 === eV ? [] : [eV, ...wV(eV)]
      },
      ZV = VV => [VV, ...wV(VV)],
      vV = (VV, eV, xV) => "shop" === VV && eV ? xV("inventory") ? ["inventory"] : xV("bag") ? [VV, "bag"] : [VV] : [VV],
      rV = (VV, eV, xV, YV) => {
        const UV = VV => {
          const UV = eV[VV],
            {
              x: yV,
              y: pV
            } = UV && YV(VV) ? (0, JV.F)(UV, xV) : {
              x: 0,
              y: 0
            };
          return UV && {
            left: UV.left + yV,
            top: UV.top + pV,
            right: UV.right + yV,
            bottom: UV.bottom + pV
          }
        };
        return VV.flatMap((VV => {
          const yV = eV[VV];
          if ("inventory" !== VV || !yV || yV.right - yV.left <= xV.right - xV.left && yV.bottom - yV.top <= xV.bottom - xV.top) return [VV];
          const [pV, QV] = [UV("shop"), UV("bag")];
          return pV && QV && !(0, JV.p)(pV, QV, 0) ? ["shop", "bag"].filter(YV) : [VV]
        }))
      },
      kV = new Map([
        ["cluster", pV],
        ["inventory", QV]
      ]),
      bV = ["cluster"],
      EV = [...bV, ...YV.z.filter((VV => !bV.includes(VV) && !UV[VV]))],
      BV = VV => [VV, ...yV(VV).flatMap(BV)],
      jV = EV.flatMap(BV).map((VV => ({
        id: VV,
        label: `hudLayout:${VV}`,
        ...YV.y[VV],
        parent: UV[VV]
      }))),
      qV = Object.fromEntries(jV.map((VV => [VV.id, VV]))),
      tV = "data-hud-el";

    function FV(VV, eV, xV, JV) {
      const YV = xV(function(VV, eV) {
          return "attack" !== VV || eV ? qV[VV].label : "hudLayout:attackContext"
        }(VV, eV)),
        UV = JV[VV];
      return UV ? xV("hudLayout:slotWithKey", {
        slot: YV,
        key: UV
      }) : YV
    }

    function TV(VV, eV, xV, JV) {
      return VV.map((VV => FV(VV, eV, xV, JV))).join(", ")
    }
  },
  9506: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      g: () => UV,
      i: () => YV,
      l: () => yV,
      m: () => ZV,
      n: () => wV,
      q: () => nV,
      u: () => QV
    });
    var JV = xV(2729);
    const YV = ["J", "C", "A", "P", "U", "X", "G"],
      UV = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function yV(VV) {
      return VV ? ["X"] : ["P", "X"]
    }
    const pV = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: JV.G,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function QV(VV, eV, xV) {
      const JV = VV.querySelector(".InGameUi .TouchComponentsButtons");
      if (!JV) return pV;
      const UV = {},
        yV = {};
      for (const pV of YV) {
        const VV = JV.querySelector(`.TouchSlot${pV} > .TouchKey`);
        if (VV) {
          var QV, nV;
          UV[pV] = VV.cloneNode(!0);
          const eV = (null !== (QV = null === (nV = VV.querySelector(".TouchKeyLabel")) || void 0 === nV ? void 0 : nV.textContent) && void 0 !== QV ? QV : "").split(/\s+/).filter((VV => !/[\d\xd7]/.test(VV))).join(" ");
          eV && (yV[pV] = eV)
        }
      }
      const wV = eV => {
          const xV = VV.querySelector(`.InGameUi ${eV}`);
          return null !== xV && !xV.classList.contains("Hidden")
        },
        ZV = [...VV.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((VV => VV.cloneNode(!0)));
      return {
        faces: Object.keys(UV).length > 0 ? UV : null,
        names: yV,
        shop: wV(".TouchInventoryKey.ShopKey"),
        bag: wV(".TouchInventoryKey.BagKey"),
        sprint: wV(".TouchSprintHit"),
        items: ZV.length > 0 ? ZV : null,
        rowIcons: eV,
        pinnedIcons: xV
      }
    }

    function nV(VV, eV) {
      const xV = {};
      for (const JV of [...yV(eV), "G"]) {
        const eV = VV.names[JV];
        eV && (xV[UV[JV]] = eV)
      }
      return xV
    }

    function wV(VV, eV) {
      const {
        faces: xV
      } = VV;
      if (null === xV) return [];
      const JV = new Set(Object.keys(xV).map((VV => UV[VV])));
      return yV(eV).filter((VV => !JV.has(UV[VV])))
    }

    function ZV(VV, eV) {
      VV.replaceChildren(...[...eV.childNodes].map((VV => VV.cloneNode(!0))))
    }
  },
  9503: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      c: () => nV
    });
    var JV = xV(9500),
      YV = xV(9491),
      UV = xV(2729),
      yV = xV(2736);
    const pV = 2,
      QV = (VV, eV, xV) => {
        const JV = (0, YV.q)(eV).includes(VV) ? VV : (0, YV.q)(VV).includes(eV) ? eV : null;
        if (null === JV || "joystick" === JV) return !1;
        const pV = JV === VV ? eV : VV;
        if ("menu" === JV) return (0, yV.v)(pV, xV.hudElements[pV]);
        if ("hotbar" !== JV || !(0, YV.x)(pV)) return !0;
        if ((0, UV.Q)(xV.hudElements[pV]) || (0, UV.Q)(xV.hudElements.inventory)) return !1;
        return !(xV.hudLocked.includes(pV) || xV.hudLocked.includes("inventory")) || (0, UV.P)(xV.hudElements.hotbar)
      };

    function nV(VV, eV, xV, nV) {
      const wV = VV => (0, YV.A)(VV).some((VV => (0, UV.v)(xV.hudElements, VV) || (0, yV.t)(VV, xV, nV)));
      if (wV(VV)) return [];
      const ZV = VV => {
          var eV, JV;
          return "bag" === VV && 1 !== (null !== (eV = null === (JV = xV.hudElements.shop) || void 0 === JV ? void 0 : JV[2]) && void 0 !== eV ? eV : 1) || (0, YV.A)(VV).some((VV => void 0 !== xV.hudElements[VV]))
        },
        vV = YV.o.get(VV),
        rV = eV.filter((eV => {
          let {
            id: xV
          } = eV;
          return vV ? vV.has(xV) && !wV(xV) : xV === VV
        })),
        kV = new Set;
      for (const YV of eV) YV.id === VV || null !== vV && void 0 !== vV && vV.has(YV.id) || kV.has(YV.id) || wV(YV.id) || rV.some((VV => {
        let {
          id: eV,
          box: UV
        } = VV;
        return !QV(eV, YV.id, xV) && (ZV(eV) || ZV(YV.id)) && (0, JV.p)(UV, YV.box, pV)
      })) && kV.add(YV.id);
      return [...kV]
    }
  },
  9416: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => wV,
      C: () => vV,
      D: () => rV,
      d: () => UV,
      e: () => pV,
      g: () => nV,
      h: () => QV,
      l: () => yV,
      p: () => YV,
      q: () => JV,
      s: () => kV,
      w: () => ZV
    });
    const JV = 14,
      YV = 6,
      UV = (JV + YV) / 2,
      yV = 200,
      pV = yV / 2,
      QV = yV / 2 - 1,
      nV = YV / JV * (yV / 2),
      wV = (VV, eV) => -Math.PI / 2 + 2 * VV * Math.PI / eV,
      ZV = (VV, eV, xV) => {
        const JV = 2 * Math.PI / xV;
        return (Math.round((Math.atan2(eV, VV) + Math.PI / 2) / JV) % xV + xV) % xV
      },
      vV = .5,
      rV = (VV, eV, xV) => Math.hypot(VV.x, VV.y) < vV ? xV : ZV(VV.x, VV.y, eV),
      kV = (VV, eV, xV, JV, YV) => {
        const UV = Math.PI / eV,
          yV = wV(VV, eV),
          pV = yV - UV,
          QV = yV + UV,
          nV = (VV, eV) => `${xV+VV*Math.cos(eV)} ${xV+VV*Math.sin(eV)}`;
        return [`M ${nV(JV,pV)}`, `L ${nV(YV,pV)}`, `A ${YV} ${YV} 0 0 1 ${nV(YV,QV)}`, `L ${nV(JV,QV)}`, `A ${JV} ${JV} 0 0 0 ${nV(JV,pV)}`, "Z"].join(" ")
      }
  },
  9438: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(62),
      YV = xV(9396),
      UV = xV(2693);

    function yV() {
      const VV = (0, UV.j)("shopInfo"),
        [, eV] = (0, JV.useReducer)((VV => VV + 1), 0);
      return (0, UV.g)("shopInfo", eV), !(0, YV.c)(VV)
    }
  },
  8804: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      d: () => UV,
      e: () => vV,
      i: () => ZV,
      j: () => nV,
      l: () => pV,
      n: () => JV,
      o: () => rV,
      s: () => kV
    });
    const JV = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      YV = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: JV
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      UV = {
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
      yV = ["pickBlock", "perspective"],
      pV = VV => yV.includes(VV) ? yV : [VV],
      QV = Object.fromEntries(YV.flatMap((VV => {
        let {
          group: eV,
          actions: xV
        } = VV;
        return xV.map((VV => [VV, eV]))
      }))),
      nV = VV => QV[VV],
      wV = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      ZV = VV => {
        var eV;
        return [nV(VV), ...null !== (eV = wV[VV]) && void 0 !== eV ? eV : []]
      },
      vV = new Set(["menu", "inventory", "keyboard"]),
      rV = {
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
      kV = new Set(["forward", "backward", "left", "right"])
  },
  8796: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => qV,
      D: () => XV,
      E: () => wV,
      H: () => NV,
      L: () => GV,
      b: () => jV,
      f: () => FV,
      i: () => vV,
      j: () => rV,
      m: () => RV,
      o: () => zV,
      r: () => MV,
      v: () => tV,
      w: () => WV,
      y: () => AV
    });
    var JV = xV(8804),
      YV = xV(8811),
      UV = xV(8786),
      yV = xV(8828);
    const pV = VV => "pickBlock" === VV ? "perspective" : VV,
      QV = (VV, eV) => {
        var xV;
        const YV = pV(eV);
        return null !== (xV = VV[YV]) && void 0 !== xV ? xV : JV.d[YV]
      },
      nV = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((VV => {
        let [eV, xV] = VV;
        return [
          [eV, xV],
          [xV, eV]
        ]
      }))),
      wV = (VV, eV) => null !== VV && void 0 !== VV ? VV : "nintendo" === eV,
      ZV = VV => wV((0, YV.i)().swapConfirmBack, (0, YV.j)()) && nV.get(VV) || VV,
      vV = VV => QV((0, YV.i)().bindings, ZV(VV)),
      rV = VV => JV.d[ZV(VV)],
      kV = Object.keys(JV.d),
      bV = VV => "gameplay" === (0, JV.j)(VV) ? ["gameplay"] : (0, JV.i)(VV),
      EV = (VV, eV) => {
        const xV = bV(eV);
        return bV(VV).some((VV => xV.includes(VV)))
      },
      BV = (VV, eV, xV) => {
        const YV = QV(VV, eV),
          yV = new Set((0, JV.l)(eV)),
          nV = [...yV];
        for (let JV = nV.pop(); JV; JV = nV.pop())
          for (const eV of kV) {
            const UV = QV(VV, eV);
            yV.has(eV) || UV !== xV && UV !== YV || !EV(JV, eV) || (yV.add(eV), nV.push(eV))
          }
        const wV = {
          ...VV
        };
        for (const ZV of yV) {
          const eV = QV(VV, ZV) === YV ? xV : YV,
            yV = (0, JV.i)(ZV).some((VV => JV.e.has(VV)));
          if ((0, UV.J)(eV) && yV) return null;
          wV[pV(ZV)] = eV
        }
        for (const UV of Object.keys(wV)) wV[UV] === JV.d[UV] && delete wV[UV];
        return wV
      },
      jV = (VV, eV) => null !== BV((0, YV.i)().bindings, ZV(VV), eV),
      qV = (VV, eV) => {
        if (vV(VV) === eV) return !0;
        const xV = BV((0, YV.i)().bindings, ZV(VV), eV);
        return !!xV && ((0, YV.n)({
          bindings: xV
        }), !0)
      },
      tV = (VV, eV) => {
        const xV = (0, JV.l)(eV);
        return kV.filter((eV => pV(eV) === eV && !xV.includes(eV) && QV(VV, ZV(eV)) !== vV(eV)))
      },
      FV = ["southpaw", "triggersSwapped"],
      TV = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      PV = VV => Object.keys(TV[VV]),
      AV = (VV, eV) => "southpaw" === VV ? eV.swapSticks : PV(VV).every((xV => QV(eV.bindings, xV) === TV[VV][xV])),
      NV = (VV, eV) => {
        const xV = (0, YV.i)();
        let UV = xV.bindings;
        for (const YV of PV(VV)) {
          const xV = eV ? TV[VV][YV] : JV.d[YV];
          if (UV = BV(UV, YV, xV), !UV) return !1
        }
        return (0, YV.n)({
          swapSticks: "southpaw" === VV ? eV : xV.swapSticks,
          bindings: UV
        }), !0
      },
      XV = () => {
        (0, YV.n)({
          swapSticks: !1,
          bindings: {}
        })
      },
      MV = () => (0, YV.i)().swapSticks ? "RightStick" : "LeftStick",
      zV = () => (0, YV.i)().swapSticks ? "LeftStick" : "RightStick",
      GV = VV => (0, YV.i)().swapSticks && (0, UV.J)(VV),
      WV = VV => GV(VV) ? MV() : zV(),
      RV = VV => {
        if (JV.s.has(VV)) return MV();
        const eV = JV.o[VV];
        return eV && ("leaderboard" !== eV || (0, yV.e)(VV, (0, yV.c)())) ? vV(eV) : null
      }
  },
  8771: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ControllerCategory: () => qp,
      ControllerGlyph: () => TY,
      ControllerRoot: () => qy,
      PadLobbyShortcuts: () => Cy,
      PadSneakChip: () => Xy,
      PadTooltip: () => zy,
      attachPressToContinue: () => my,
      getBoundButton: () => wV.i,
      getControllerSettings: () => vV.i,
      getGlyphForNoaAction: () => wV.m,
      getInventoryCursorState: () => Fp,
      getMenuShortcutButton: () => mx,
      getPadGlyphIconName: () => Py,
      getPadGlyphIconUrl: () => Ay,
      getPadRepeatTiming: () => bV.h,
      handOverPadFocus: () => Pp,
      hasActivePad: () => tp,
      isPadSteppingSlots: () => Tp
    });
    const JV = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var YV = xV(1220),
      UV = xV(1493),
      yV = xV(8777),
      pV = xV(78),
      QV = xV(27),
      nV = xV(32),
      wV = xV(8796),
      ZV = xV(8831),
      vV = xV(8811),
      rV = xV(8836),
      kV = xV(8786),
      bV = xV(9276),
      EV = xV(9281),
      BV = xV(1764);
    const jV = (VV, eV, xV) => Math.max(eV, Math.min(xV, VV)),
      qV = VV => Math.min(VV.width, VV.height) / 720,
      tV = VV => Math.max(.15, VV);
    class FV {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(VV, eV) {
        const xV = Math.hypot(VV.x, VV.y) >= (VV => Math.max(.3, VV))(eV);
        return this.locked ? (this.locked = xV, !1) : xV
      }
    }
    const TV = (VV, eV) => {
        const xV = jV(eV.dtMs, 0, 100),
          JV = xV / 1e3,
          YV = qV(eV.viewport) * (eV.cursorSpeedPercent / 100),
          UV = (0, kV.k)(eV.stick, tV(eV.moveDeadzone)),
          yV = Math.hypot(UV.x, UV.y),
          pV = ((VV, eV, xV) => {
            if (eV < .3) return 0;
            const JV = xV / 350;
            return eV >= .85 ? Math.min(1, VV + JV) : Math.max(0, VV - JV)
          })(VV.speedRamp, yV, xV);
        let QV = VV.x,
          nV = VV.y;
        if (yV > 0) {
          const VV = .45 + .55 * pV,
            xV = eV.context.overInteractive ? .45 : 1,
            wV = 1400 * (VV => {
              const eV = jV(VV, 0, 1);
              return .3 * eV + .7 * eV * eV
            })(yV) * YV * VV * xV;
          QV += UV.x / yV * wV * JV, nV += UV.y / yV * wV * JV
        }
        const wV = Math.hypot(eV.dpad.x, eV.dpad.y);
        if (wV > 0) {
          const VV = 500 * YV;
          QV += eV.dpad.x / wV * VV * JV, nV += eV.dpad.y / wV * VV * JV
        }
        const ZV = eV.context.magnetTarget;
        if (ZV && yV < .3 && 0 === wV) {
          const VV = ((VV, eV, xV, JV, YV) => {
            const UV = eV.x - VV.x,
              yV = eV.y - VV.y,
              pV = Math.hypot(UV, yV);
            if (0 === pV) return {
              x: 0,
              y: 0
            };
            const QV = Math.min(pV, YV * (1 - JV / .3));
            let nV = UV / pV * QV,
              wV = yV / pV * QV;
            if (JV > 0) {
              const VV = xV.x / JV,
                eV = xV.y / JV,
                YV = nV * VV + wV * eV;
              YV < 0 && (nV -= YV * VV, wV -= YV * eV)
            }
            return {
              x: nV,
              y: wV
            }
          })({
            x: QV,
            y: nV
          }, ZV, UV, yV, 120 * qV(eV.viewport) * JV);
          QV += VV.x, nV += VV.y
        }
        return {
          x: jV(QV, 0, Math.max(0, eV.viewport.width - 1)),
          y: jV(nV, 0, Math.max(0, eV.viewport.height - 1)),
          speedRamp: pV
        }
      },
      PV = VV => {
        const eV = (0, kV.k)(VV, .2);
        return 0 !== eV.x || 0 !== eV.y
      },
      AV = (VV, eV) => {
        const xV = (0, kV.k)(VV, .2),
          JV = Math.hypot(xV.x, xV.y);
        if (0 === JV) return {
          x: 0,
          y: 0
        };
        const YV = JV * JV * 1600,
          UV = jV(eV, 0, 100) / 1e3;
        return {
          x: xV.x / JV * YV * UV,
          y: xV.y / JV * YV * UV
        }
      },
      NV = (VV, eV) => "y" === eV ? VV.scrollHeight > VV.clientHeight + 1 : VV.scrollWidth > VV.clientWidth + 1,
      XV = (VV, eV) => {
        if (!NV(VV, eV)) return !1;
        const xV = getComputedStyle(VV),
          JV = "y" === eV ? xV.overflowY : xV.overflowX;
        return "auto" === JV || "scroll" === JV
      },
      MV = (VV, eV, xV) => {
        for (let UV = VV instanceof HTMLElement ? VV : null !== (JV = null === VV || void 0 === VV ? void 0 : VV.parentElement) && void 0 !== JV ? JV : null; UV; UV = UV.parentElement) {
          var JV;
          if (XV(UV, eV)) return UV;
          if (UV === xV) return null
        }
        if (xV) return null;
        const YV = document.scrollingElement;
        return YV instanceof HTMLElement && NV(YV, eV) ? YV : null
      },
      zV = new WeakMap,
      GV = (VV, eV) => {
        const xV = performance.now(),
          JV = zV.get(VV);
        if (JV && JV.axis === eV && xV - JV.atMs < 500 && (!JV.container || JV.container.isConnected)) return JV.container;
        const YV = WV(VV, eV);
        return zV.set(VV, {
          axis: eV,
          atMs: xV,
          container: YV
        }), YV
      },
      WV = (VV, eV) => {
        let xV = XV(VV, eV) ? VV : null,
          JV = xV ? xV.clientWidth * xV.clientHeight : 0;
        for (const YV of VV.querySelectorAll("*")) {
          const VV = YV.clientWidth * YV.clientHeight;
          VV > JV && XV(YV, eV) && (xV = YV, JV = VV)
        }
        return xV
      },
      RV = (VV, eV, xV) => "y" === eV ? xV < 0 ? VV.scrollTop > 0 : VV.scrollTop + VV.clientHeight < VV.scrollHeight - 1 : xV < 0 ? VV.scrollLeft > 0 : VV.scrollLeft + VV.clientWidth < VV.scrollWidth - 1,
      gV = (VV, eV, xV) => {
        "y" === eV ? VV.scrollBy({
          top: xV,
          behavior: "instant"
        }) : VV.scrollBy({
          left: xV,
          behavior: "instant"
        })
      },
      DV = VV => {
        if (!VV || VV === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const eV = VV.getBoundingClientRect(),
          xV = Math.max(0, eV.left),
          JV = Math.max(0, eV.top);
        return new DOMRect(xV, JV, Math.min(window.innerWidth, eV.right) - xV, Math.min(window.innerHeight, eV.bottom) - JV)
      },
      iV = (VV, eV) => VV.left < eV.right && eV.left < VV.right && VV.top < eV.bottom && eV.top < VV.bottom;
    var CV = xV(62),
      aV = xV(1146),
      oV = xV.n(aV),
      cV = xV(1321);
    let hV = 0,
      lV = !1;
    class LV {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(VV) {
        this.element = VV, this.shownKey = "", this.gap = null
      }
      show(VV) {
        const eV = this.element;
        if (!eV) return;
        const xV = VV ? this.keepOnScreen(eV, VV) : null,
          JV = xV ? `${xV.left},${xV.top},${xV.width},${xV.height}` : "";
        if (JV === this.shownKey) return;
        const YV = "" === this.shownKey;
        this.shownKey = JV, eV.classList.toggle("Visible", null !== xV), xV && (eV.classList.toggle("Snap", YV), eV.style.width = `${xV.width}px`, eV.style.height = `${xV.height}px`, eV.style.transform = `translate(${xV.left}px, ${xV.top}px)`, YV && (eV.offsetWidth, eV.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(VV, eV) {
        var xV;
        const JV = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!lV){lV=!0;const VV=document.createElement("div");VV.setAttribute("aria-hidden","true"),VV.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(VV),new ResizeObserver((()=>{hV++})).observe(VV)}return String(hV)})()}`;
        (null === (xV = this.gap) || void 0 === xV ? void 0 : xV.key) !== JV && (this.gap = {
          px: parseFloat(getComputedStyle(VV).paddingLeft) || 0,
          key: JV
        });
        const YV = this.gap.px + 2,
          UV = Math.max(eV.left, YV),
          yV = Math.max(eV.top, YV),
          pV = Math.min(eV.left + eV.width, window.innerWidth - YV),
          QV = Math.min(eV.top + eV.height, window.innerHeight - YV);
        return pV <= UV || QV <= yV ? eV : {
          left: UV,
          top: yV,
          width: pV - UV,
          height: QV - yV
        }
      }
    }
    const fV = VV => {
      let {
        placer: eV,
        className: xV
      } = VV;
      const JV = (0, CV.useCallback)((VV => {
        eV.setElement(VV)
      }), [eV]);
      return (0, cV.jsx)("div", {
        ref: JV,
        className: oV()("PadReticle", xV),
        "aria-hidden": !0
      })
    };
    var mV = xV(9284);
    const KV = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const HV = new class {
      constructor() {
        this.state = KV, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(VV) {
        if (eV = this.state, xV = VV, (eV.visible || xV.visible) && (eV.visible !== xV.visible || eV.x !== xV.x || eV.y !== xV.y || eV.pressed !== xV.pressed)) {
          var eV, xV;
          this.state = VV;
          for (const eV of this.listeners) eV(VV)
        }
      }
      hide() {
        this.set(KV)
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
    };
    var uV = xV(9301);
    const sV = (VV, eV) => {
        let {
          kind: xV,
          holding: JV,
          hasPress: YV,
          hasBack: UV,
          slotHasItem: yV
        } = eV;
        switch (VV) {
          case "primary":
            return "slot" === xV ? "slotPrimary" : "recipe" === xV || "button" === xV ? YV ? "pressPrimary" : "click" : "textField" === xV ? "openKeyboard" : null;
          case "secondary":
            return "slot" === xV ? "slotSecondary" : "button" !== xV && "recipe" !== xV || !YV ? null : "pressSecondary";
          case "quickMove":
            return "slot" === xV && yV ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === xV && yV && !JV ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return JV ? "cancel" : UV ? "pressBack" : "close"
        }
      },
      SV = VV => {
        const eV = [];
        if (VV.hotbarPicking) return eV.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), eV.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), eV;
        if (VV.holding) "slot" === VV.kind ? (eV.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), eV.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === VV.kind && eV.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), eV.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), eV.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), VV.openButtonCloses && eV.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var xV;
          "slot" === VV.kind && VV.slotHasItem ? (eV.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), eV.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), eV.push({
            actions: ["inventoryQuickMove"],
            labelKey: VV.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), eV.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), eV.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== VV.kind && "recipe" !== VV.kind || !VV.pressHints ? "button" === VV.kind || "recipe" === VV.kind ? eV.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === VV.kind && eV.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (VV.pressHints.primary && eV.push({
            actions: ["inventoryPrimary"],
            labelKey: VV.pressHints.primary
          }), VV.pressHints.secondary && eV.push({
            actions: ["inventorySecondary"],
            labelKey: VV.pressHints.secondary
          }));
          const JV = null === (xV = VV.pressHints) || void 0 === xV ? void 0 : xV.back;
          JV && eV.push({
            actions: ["inventoryClose"],
            labelKey: JV
          });
          const YV = [];
          VV.openButtonCloses && YV.push("inventory"), JV || YV.push("inventoryClose"), YV.length > 0 && eV.push({
            actions: YV,
            labelKey: "inventoryClose"
          })
        }
        return eV.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), VV.hasCategories ? eV.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : VV.hasList && eV.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), eV
      };
    var IV = xV(9306),
      dV = xV(2550);
    class OV {
      constructor(VV) {
        this.probes = VV, this.byContainer = new Map, this.byParent = new Map
      }
      find(VV, eV) {
        const xV = MV(VV, "y", eV);
        if (!xV) return null;
        let JV = this.byContainer.get(xV);
        return JV || (this.probes.push({
          element: xV,
          rect: Je(xV.getBoundingClientRect())
        }), JV = {
          container: xV,
          box: DV(xV),
          group: xe(xV)
        }, this.byContainer.set(xV, JV)), JV
      }
      findForParent(VV, eV) {
        let xV = this.byParent.get(VV);
        return void 0 === xV && (xV = this.find(VV, eV), this.byParent.set(VV, xV)), xV
      }
    }
    const Ve = new WeakMap;
    let ee = 0;
    const xe = VV => {
        let eV = Ve.get(VV);
        return eV || (eV = "el:" + ee++, Ve.set(VV, eV)), eV
      },
      Je = VV => ({
        left: VV.left,
        top: VV.top,
        width: VV.width,
        height: VV.height
      }),
      Ye = VV => VV.width > 0 && VV.height > 0,
      Ue = (VV, eV) => Ye(VV) && VV.left + VV.width > 0 && VV.top + VV.height > 0 && VV.left < eV.width && VV.top < eV.height,
      ye = (VV, eV, xV) => {
        const JV = VV.top + VV.height / 2;
        return Ue(VV, eV) && (!xV || JV >= xV.top && JV <= xV.bottom)
      },
      pe = VV => ({
        x: VV.left + VV.width / 2,
        y: VV.top + VV.height / 2
      }),
      Qe = (VV, eV, xV) => VV < 0 ? xV >= 0 ? 0 : eV - 1 : ((VV + xV) % eV + eV) % eV,
      ne = VV => "Left" === VV || "Right" === VV,
      we = (VV, eV, xV) => {
        const JV = ne(xV),
          YV = JV ? VV.top : VV.left,
          UV = JV ? VV.height : VV.width,
          yV = JV ? eV.top : eV.left,
          pV = JV ? eV.height : eV.width,
          QV = Math.max(0, Math.max(yV - (YV + UV), YV - (yV + pV)));
        return UV > 1.5 * pV ? {
          gap: QV,
          offset: Math.max(0, yV - YV) + .1 * Math.max(0, YV - yV)
        } : {
          gap: QV,
          offset: Math.abs(yV + pV / 2 - (YV + UV / 2))
        }
      },
      Ze = (VV, eV, xV) => {
        const JV = ((VV, eV, xV) => {
          const JV = pe(VV),
            YV = pe(eV),
            UV = ne(xV) ? Math.min(VV.width, eV.width) / 4 : Math.min(VV.height, eV.height) / 4;
          switch (xV) {
            case "Right":
              return YV.x - JV.x >= UV ? Math.max(0, eV.left - (VV.left + VV.width)) : null;
            case "Left":
              return JV.x - YV.x >= UV ? Math.max(0, VV.left - (eV.left + eV.width)) : null;
            case "Down":
              return YV.y - JV.y >= UV ? Math.max(0, eV.top - (VV.top + VV.height)) : null;
            case "Up":
              return JV.y - YV.y >= UV ? Math.max(0, VV.top - (eV.top + eV.height)) : null
          }
        })(VV, eV, xV);
        if (null === JV) return null;
        const YV = we(VV, eV, xV);
        return JV + 3 * YV.gap + .5 * YV.offset
      },
      ve = (VV, eV) => eV.visible || null !== eV.scrollGroup && eV.scrollGroup === VV.scrollGroup,
      re = (VV, eV, xV, JV) => {
        let YV = null,
          UV = 1 / 0;
        for (const yV of eV) {
          if (yV.key === VV.key || !ve(VV, yV) || !JV(yV)) continue;
          const eV = Ze(VV.rect, yV.rect, xV);
          null !== eV && eV < UV && (YV = yV, UV = eV)
        }
        return YV
      },
      ke = (VV, eV, xV) => {
        const JV = re(VV, eV, xV, (() => !0));
        if (!JV || ne(xV) || null === VV.scrollGroup || JV.scrollGroup === VV.scrollGroup) return JV;
        const YV = re(VV, eV, xV, (eV => 0 === we(VV.rect, eV.rect, xV).gap));
        return null !== YV && void 0 !== YV ? YV : JV
      },
      be = (VV, eV, xV) => {
        let JV = null,
          YV = 1 / 0;
        for (const UV of eV) {
          if (!UV.visible || xV && !xV(UV)) continue;
          const eV = pe(UV.rect),
            yV = Math.hypot(eV.x - VV.x, eV.y - VV.y);
          yV < YV && (JV = UV, YV = yV)
        }
        return JV
      },
      Ee = VV => {
        const {
          rect: eV,
          clip: xV
        } = VV;
        if (!xV) return eV;
        const JV = Math.max(eV.left, xV.left),
          YV = Math.max(eV.top, xV.top);
        return {
          left: JV,
          top: YV,
          width: Math.min(eV.left + eV.width, xV.left + xV.width) - JV,
          height: Math.min(eV.top + eV.height, xV.top + xV.height) - YV
        }
      },
      Be = (VV, eV) => eV.x >= VV.left && eV.x < VV.left + VV.width && eV.y >= VV.top && eV.y < VV.top + VV.height,
      je = (VV, eV) => {
        let xV = null,
          JV = 1 / 0;
        for (const YV of eV) {
          const eV = Ee(YV);
          (YV.visible || YV.clip) && Be(eV, VV) && (eV.width * eV.height < JV && (xV = YV, JV = eV.width * eV.height))
        }
        return xV
      },
      qe = VV => {
        let eV = null;
        for (const xV of VV) {
          if (!xV.visible) continue;
          if (!eV) {
            eV = xV;
            continue
          }
          const VV = Math.min(eV.rect.height, xV.rect.height) / 2,
            JV = xV.rect.top - eV.rect.top;
          (JV < -VV || Math.abs(JV) <= VV && xV.rect.left < eV.rect.left) && (eV = xV)
        }
        return eV
      },
      te = (VV, eV, xV, JV, YV) => {
        const UV = YV % eV,
          yV = Math.floor(YV / eV);
        return {
          left: VV.left + UV * xV,
          top: VV.top + yV * JV,
          width: VV.width,
          height: VV.height
        }
      },
      Fe = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Te = ".LazyLoadedItemWrapper",
      Pe = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Ae = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Ne = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Xe = VV => VV.hasAttribute("data-inven-idx") ? "slot" : VV.hasAttribute("data-recipe-key") ? "recipe" : VV.hasAttribute("data-craft-ingredient") || (0, dV.v)(VV) ? "info" : (0, mV.M)(VV) ? "textField" : "button",
      Me = (VV, eV) => "slot" === eV ? Number(VV.getAttribute("data-inven-idx")) : null,
      ze = VV => VV.matches(Te) ? VV.querySelector(Pe) : VV,
      Ge = VV => {
        var eV, xV;
        return {
          element: VV,
          recipe: null !== (eV = VV && (null === (xV = ze(VV)) || void 0 === xV ? void 0 : xV.getAttribute("data-recipe-key"))) && void 0 !== eV ? eV : null
        }
      },
      We = VV => {
        const eV = ze(VV);
        if (!eV) return {
          kind: "pending",
          idx: null
        };
        const xV = Xe(eV);
        return {
          kind: xV,
          idx: Me(eV, xV)
        }
      },
      Re = VV => {
        const eV = [];
        for (const [xV, JV] of Ae) {
          VV.matches(JV) && eV.push([xV, VV]);
          for (const YV of VV.querySelectorAll(JV)) eV.push([xV, YV])
        }
        return eV
      },
      ge = (VV, eV) => {
        for (const [xV, JV] of VV)
          if (JV.contains(eV)) return xV;
        return "other"
      },
      De = (VV, eV, xV, JV, YV, UV, yV, pV) => {
        var QV;
        const nV = VV.children,
          wV = Je(nV[0].getBoundingClientRect()),
          ZV = [{
            element: nV[0],
            rect: wV
          }];
        if (UV.push(ZV[0]), 0 === wV.width || 0 === wV.height) return;
        let vV = 1;
        for (; vV < nV.length && Math.abs(nV[vV].getBoundingClientRect().top - wV.top) < 1;) vV++;
        const rV = VV => {
            const eV = {
              element: nV[VV],
              rect: Je(nV[VV].getBoundingClientRect())
            };
            return UV.push(eV), ZV.push(eV), eV.rect
          },
          kV = vV > 1 ? rV(1).left - wV.left : wV.width,
          bV = nV.length > vV ? rV(vV).top - wV.top : wV.height,
          EV = yV.find(VV, eV);
        let BV = null;
        if (EV) {
          var jV;
          const {
            container: VV,
            box: eV
          } = EV;
          BV = null !== (jV = pV.get(VV)) && void 0 !== jV ? jV : null, BV || (BV = {
            top: VV.scrollTop,
            left: VV.scrollLeft,
            box: eV,
            viewport: JV,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, pV.set(VV, BV)), BV.probes.push(...ZV)
        }
        const qV = YV.length;
        for (let PV = 0; PV < nV.length; PV++) {
          var tV, FV, TV;
          const VV = nV[PV],
            eV = te(wV, vV, kV, bV, PV),
            UV = VV.firstElementChild ? VV.querySelector(Pe) : null,
            yV = UV ? Xe(UV) : "pending";
          YV.push({
            key: xe(VV),
            rect: eV,
            panel: xV,
            scrollGroup: null !== (tV = null === EV || void 0 === EV ? void 0 : EV.group) && void 0 !== tV ? tV : null,
            visible: ye(eV, JV, null === EV || void 0 === EV ? void 0 : EV.box),
            clip: null !== (FV = null === EV || void 0 === EV ? void 0 : EV.box) && void 0 !== FV ? FV : null,
            element: VV,
            kind: yV,
            idx: UV ? Me(UV, yV) : null,
            scrollContainer: null !== (TV = null === EV || void 0 === EV ? void 0 : EV.container) && void 0 !== TV ? TV : null
          })
        }
        null === (QV = BV) || void 0 === QV || QV.targets.push(...YV.slice(qV))
      },
      ie = VV => VV instanceof Element && null !== VV.closest(Te),
      Ce = VV => null !== VV.scrollContainer && ie(VV.element);
    class ae {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(VV, eV, xV, JV) {
        this.latched = {
          source: VV,
          focusKey: eV,
          sinceMs: xV,
          hold: {
            id: ++this.presses,
            holdMs: JV
          }
        }
      }
      update(VV, eV, xV) {
        const JV = this.latched;
        return JV ? VV && eV === JV.focusKey ? xV - JV.sinceMs < JV.hold.holdMs ? null : (this.latched = null, JV.source) : (this.latched = null, null) : null
      }
      getHold() {
        var VV, eV;
        return null !== (VV = null === (eV = this.latched) || void 0 === eV ? void 0 : eV.hold) && void 0 !== VV ? VV : null
      }
      reset() {
        this.latched = null
      }
    }
    var oe = xV(9315);
    const ce = {
        kind: "none"
      },
      he = VV => ({
        x: VV.clientX,
        y: VV.clientY
      }),
      le = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Le {
      constructor() {
        this.hovered = ce, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(VV, eV, xV, JV, YV) {
        const UV = null !== eV ? {
            kind: "slot",
            idx: eV
          } : xV ? {
            kind: "element",
            element: xV
          } : ce,
          yV = `${YV}|${Math.round(JV.clientX)},${Math.round(JV.clientY)}`,
          pV = (QV = this.hovered, nV = UV, "slot" === QV.kind && "slot" === nV.kind ? QV.idx === nV.idx : "element" === QV.kind && "element" === nV.kind ? QV.element === nV.element : QV.kind === nV.kind);
        var QV, nV;
        if (pV && yV === this.signature) return;
        const wV = !pV || YV !== this.holding || "" === this.signature;
        this.signature = yV, this.holding = YV, this.lastPoint = JV;
        const ZV = this.hovered;
        if (this.hovered = UV, "slot" === UV.kind) return this.leaveElement(ZV, null, JV), void(wV ? VV.hover(UV.idx, JV) : VV.moveTo(JV));
        if (pV) return void("element" === UV.kind ? (0, mV.r)(UV.element, UV.element, he(JV)) : VV.hover(null, JV));
        VV.hover(null, JV);
        const vV = "element" === UV.kind ? UV.element : null;
        "element" === ZV.kind ? (0, mV.r)(ZV.element, vV, he(JV)) : vV && (0, mV.r)(null, vV, he(JV))
      }
      invalidate() {
        this.signature = ""
      }
      clear(VV) {
        const eV = this.hovered;
        this.hovered = ce, this.signature = "", "none" !== eV.kind && (this.leaveElement(eV, null, this.lastPoint), VV && "slot" === eV.kind && VV.hover(null, this.lastPoint))
      }
      leaveElement(VV, eV, xV) {
        "element" === VV.kind && (0, mV.r)(VV.element, eV, he(xV))
      }
    }
    class fe {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(VV, eV) {
        PV(VV) && (this.lastTiltedMs = eV)
      }
      allowsClick(VV) {
        return VV - this.lastTiltedMs > 150
      }
    }
    class me {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(VV) {
        return 0 !== (0, kV.k)(VV, .2).y
      }
      step(VV, eV, xV) {
        VV !== this.container && (this.container = VV, this.remainder = 0);
        const JV = AV(eV, xV).y;
        if (0 === JV) return this.remainder = 0, !1;
        const YV = this.remainder + JV,
          UV = Math.trunc(YV);
        if (this.remainder = YV - UV, 0 === UV) return !1;
        const yV = VV.scrollTop;
        return VV.scrollTop = yV + UV, VV.scrollTop !== yV
      }
      current() {
        var VV;
        return null !== (VV = this.container) && void 0 !== VV && VV.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Ke = xV(9318);
    const He = "[data-pad-inventory-default]",
      ue = ".HotBarGameItemsContainer .InvenItem.Selected",
      se = {
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
      Se = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Ie = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      de = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Oe = [...Ie, ...de],
      Vx = () => {
        return VV = (0, wV.i)("inventory"), !Oe.map(wV.i).includes(VV) && !(0, kV.J)(VV);
        var VV
      },
      ex = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      xx = (VV, eV) => {
        const xV = !(null === eV || void 0 === eV || !eV.isHolding());
        return function(VV, eV) {
          const xV = VV.find((VV => VV.visible && eV(VV)));
          if (xV) return xV;
          for (var JV = arguments.length, YV = new Array(JV > 2 ? JV - 2 : 0), UV = 2; UV < JV; UV++) YV[UV - 2] = arguments[UV];
          for (const yV of YV) {
            const eV = qe(VV.filter(yV));
            if (eV) return eV
          }
          return qe(VV)
        }(VV, (VV => {
          const {
            element: eV
          } = VV;
          return eV.matches(He) || null !== eV.querySelector(He) || eV.matches(ue)
        }), (VV => "slot" === VV.kind ? xV || null !== VV.idx && !(null === eV || void 0 === eV || !eV.hasItemAt(VV.idx)) : "recipe" === VV.kind || "pending" === VV.kind), (VV => "slot" === VV.kind || "button" === VV.kind))
      };
    class Jx {
      constructor() {
        this.set = null, this.observer = new MutationObserver((VV => {
          VV.some((VV => !ie(VV.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = VV => {
          this.scrolled(VV.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const VV = [],
              eV = [];
            let xV = !1;
            const JV = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              YV = new Map,
              UV = new OV(eV);
            for (const ZV of document.querySelectorAll(Fe)) {
              const wV = Re(ZV);
              xV ||= null !== ZV.querySelector(".CreativeCategoryTab");
              for (const xV of ZV.querySelectorAll(`${Te}:first-child`)) {
                const yV = xV.parentElement;
                De(yV, ZV, ge(wV, yV), JV, VV, eV, UV, YV)
              }
              for (const xV of ZV.querySelectorAll(Pe)) {
                var yV, pV, QV, nV;
                if (xV.closest(Te) || xV.closest("[data-pad-ignore]")) continue;
                const vV = null === (yV = xV.parentElement) || void 0 === yV ? void 0 : yV.closest(Pe);
                if (vV && ZV.contains(vV)) continue;
                const rV = Xe(xV),
                  kV = Me(xV, rV);
                if (-1 === kV) continue;
                const bV = Je(xV.getBoundingClientRect());
                eV.push({
                  element: xV,
                  rect: bV
                });
                const EV = UV.findForParent(xV.parentElement, ZV),
                  BV = EV && !YV.has(EV.container) ? EV : null;
                (BV ? Ye(bV) : Ue(bV, JV)) && VV.push({
                  key: xe(xV),
                  rect: bV,
                  panel: ge(wV, xV),
                  scrollGroup: null !== (pV = null === BV || void 0 === BV ? void 0 : BV.group) && void 0 !== pV ? pV : null,
                  visible: ye(bV, JV, null === BV || void 0 === BV ? void 0 : BV.box),
                  clip: null !== (QV = null === BV || void 0 === BV ? void 0 : BV.box) && void 0 !== QV ? QV : null,
                  element: xV,
                  kind: rV,
                  idx: kV,
                  scrollContainer: null !== (nV = null === BV || void 0 === BV ? void 0 : BV.container) && void 0 !== nV ? nV : null
                })
              }
            }
            for (const [ZV, vV] of YV) vV.holdsOthers = eV.some((VV => VV.element !== ZV && ZV.contains(VV.element) && !VV.element.closest(Te)));
            const wV = new Map;
            for (const ZV of VV) wV.set(ZV.element, ZV);
            return {
              targets: VV,
              byElement: wV,
              hasCategories: xV,
              probes: eV,
              scrollers: YV
            }
          })(), this.observer.disconnect();
          for (const VV of document.querySelectorAll(Fe)) this.observer.observe(VV, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(VV) {
        !this.set || VV instanceof Element && ((VV, eV) => {
          const xV = VV.scrollers.get(eV);
          if (!xV || xV.holdsOthers || eV.scrollLeft !== xV.left) return !1;
          const JV = eV.scrollTop - xV.top;
          if (0 === JV) return !0;
          xV.top = eV.scrollTop;
          for (const YV of xV.probes) YV.rect.top -= JV;
          for (const YV of xV.targets) YV.rect.top -= JV, YV.visible = ye(YV.rect, xV.viewport, xV.box);
          return !0
        })(this.set, VV) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((VV => {
          return eV = VV.rect, xV = VV.element.getBoundingClientRect(), !(eV.left === xV.left && eV.top === xV.top && eV.width === xV.width && eV.height === xV.height);
          var eV, xV
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Yx = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(kV.F.map((VV => [VV, (0, bV.e)(kV.H)]))), this.stickRepeat = new kV.d((0, bV.e)(kV.fb)), this.pageUpTimer = (0, bV.e)(kV.ab), this.pageDownTimer = (0, bV.e)(kV.ab), this.stickGate = new FV, this.pointer = null, this.activePress = null, this.dropLatch = new ae, this.scroller = new me, this.scrollStickClick = new fe, this.hover = new Le, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new LV, this.targets = new Jx, this.hasCategories = !1, this.wasShowing = !1, this.state = oe.e, this.isActive = () => (0, IV.e)(), this.isShowing = () => "inventory" === ZV.c.getActiveConsumerName() && (0, rV.j)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, IV.d)()), (0, IV.e)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var VV;
            this.reopenSlotIdx = null !== (VV = this.focused ? We(this.focused).idx : null) && void 0 !== VV ? VV : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, IV.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = VV => {
            (0, pV.unstable_batchedUpdates)((() => {
              this.frame(VV)
            }))
          }, this.shouldBlockRealPointer = VV => VV.isTrusted && !(0, BV.u)(VV) && this.isShowing(), this.noteRealPointer = VV => {
            VV instanceof MouseEvent && VV.isTrusted && !(0, BV.u)(VV) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = VV.clientX, this.lastRealPointer.y = VV.clientY)
          }, this.wakePressActs = VV => {
            var eV;
            return VV === (0, wV.i)("inventoryClose") ? !(null !== (eV = (0, IV.d)()) && void 0 !== eV && eV.isHolding()) : !(VV !== (0, wV.i)("inventory") || !Vx()) || ((0, kV.J)(VV) ? this.isNavButton(VV) : de.some((eV => (0, wV.i)(eV) === VV)))
          }
        }
        frame(VV) {
          var eV, xV, JV, YV, UV;
          const yV = (0, IV.d)();
          if (!(0, rV.j)()) return void(this.wasShowing && (this.endInteraction(yV), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), VV.wokeDevice && this.focusWakePointer(!(null === yV || void 0 === yV || !yV.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, vV.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const pV = performance.now();
          this.handleNavigation(VV, pV), this.handlePanels(VV), this.handlePaging(VV, pV), this.handleScroll(VV), this.handleButtons(VV, pV, yV), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const QV = this.ensureFocus(),
            nV = this.focusContext(yV);
          this.ring.show(QV);
          const ZV = "slot" === nV.kind ? nV.idx : null,
            kV = null !== (eV = null === (xV = nV.actionElement) || void 0 === xV ? void 0 : xV.querySelector(".DoCraftItem")) && void 0 !== eV ? eV : nV.actionElement;
          this.pointer ? (this.hover.sync(yV, ZV, kV, ((VV, eV) => {
            const xV = eV ? le() : 0;
            return {
              clientX: VV.x - xV,
              clientY: VV.y - xV
            }
          })(this.pointer, nV.holding), nV.holding), HV.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: VV.isHeld((0, wV.i)("inventoryPrimary"))
          })) : QV && this.focused && this.hover.sync(yV, ZV, kV, ((VV, eV) => {
            if (!eV) return {
              clientX: VV.left + VV.width - 10,
              clientY: VV.top + VV.height / 2 - 10
            };
            const xV = le();
            return {
              clientX: VV.left + VV.width / 2 - xV,
              clientY: VV.top + VV.height / 2 - xV
            }
          })(QV, nV.holding), nV.holding), this.publishState({
            showing: !0,
            kind: nV.kind,
            holding: nV.holding,
            slotHasItem: nV.slotHasItem,
            pressHints: null !== (JV = null === (YV = nV.press) || void 0 === YV ? void 0 : YV.hints) && void 0 !== JV ? JV : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Ce(this.focusTarget),
            openButtonCloses: Vx(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === nV.kind && !(null === (UV = nV.actionElement) || void 0 === UV || !UV.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(VV) {
          var eV;
          const xV = (0, rV.e)();
          if (!xV) return;
          this.targets.revalidate();
          const JV = this.getTargets().targets;
          this.setFocus(null !== (eV = je(xV, JV)) && void 0 !== eV ? eV : VV ? be(xV, JV, (VV => {
            let {
              rect: eV
            } = VV;
            const JV = Math.max(eV.left - xV.x, 0, xV.x - (eV.left + eV.width)),
              YV = Math.max(eV.top - xV.y, 0, xV.y - (eV.top + eV.height));
            return Math.hypot(JV, YV) <= Math.min(eV.width, eV.height) / 2
          })) : null, !1), "cursor" === (0, vV.i)().inventoryNavigation && (this.pointer = {
            x: xV.x,
            y: xV.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const VV = this.lastRealPointer;
          if (!VV || "keyboardMouse" !== QV.b.get("activeInputDevice")) return;
          const eV = document.elementFromPoint(VV.x, VV.y);
          eV && (0, mV.r)(null, eV, VV)
        }
        endInteraction(VV) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const eV of this.dpadTimers.values()) eV.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(VV), this.ring.hide(), this.releasePointer(), this.publishState(oe.e)
        }
        getTargets() {
          const VV = this.targets.get();
          return this.hasCategories = VV.hasCategories, VV
        }
        currentTarget() {
          var VV;
          return this.focused && null !== (VV = this.getTargets().byElement.get(this.focused)) && void 0 !== VV ? VV : null
        }
        readFocusRect() {
          const VV = this.focused;
          if (null === VV || void 0 === VV || !VV.isConnected || !VV.closest(Fe)) return null;
          const eV = VV.getBoundingClientRect();
          return eV.width > 0 && eV.height > 0 ? {
            left: eV.left,
            top: eV.top,
            width: eV.width,
            height: eV.height
          } : null
        }
        ensureFocus() {
          const VV = this.readFocusRect();
          if (VV || this.pointer) return VV;
          const {
            targets: eV,
            byElement: xV
          } = this.getTargets();
          let JV = null,
            YV = !1;
          if (this.lastRect) JV = be(pe(this.lastRect), eV);
          else {
            var UV, yV;
            const VV = ((VV, eV) => {
                const xV = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return xV ? xx(VV.filter((VV => xV.contains(VV.element))), eV) : null
              })(eV, (0, IV.d)()),
              pV = eV.find((VV => null !== VV.idx && VV.idx === this.reopenSlotIdx)),
              QV = document.querySelector(ue);
            YV = null !== VV || void 0 !== pV, JV = null !== (UV = null !== (yV = null !== VV && void 0 !== VV ? VV : pV) && void 0 !== yV ? yV : QV && xV.get(QV)) && void 0 !== UV ? UV : qe(eV)
          }
          return this.setFocus(JV, YV), this.lastRect
        }
        setFocus(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          VV && (this.focused = VV.element, this.focusTarget = VV, this.panelMemory.set(VV.panel, VV.element), eV && VV.scrollContainer && ((VV, eV) => {
            const xV = VV.getBoundingClientRect(),
              JV = DV(eV),
              YV = eV.scrollTop;
            return xV.top < JV.top ? eV.scrollTop -= JV.top - xV.top : xV.bottom > JV.bottom && (eV.scrollTop += xV.bottom - JV.bottom), eV.scrollTop !== YV
          })(VV.element, VV.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, vV.i)().inventoryNavigation) {
              if (this.lastRect) {
                const VV = pe(this.lastRect);
                this.pointer = {
                  x: VV.x,
                  y: VV.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const VV = this.lastRect ? pe(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: VV.x,
            y: VV.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, HV.hide()
        }
        hoverAtPointer() {
          var VV;
          const eV = je(this.pointer, this.getTargets().targets);
          this.focusTarget = eV, (null === eV || void 0 === eV ? void 0 : eV.element) !== this.focused && (this.focused = null !== (VV = null === eV || void 0 === eV ? void 0 : eV.element) && void 0 !== VV ? VV : null, eV && (this.panelMemory.set(eV.panel, eV.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(VV, eV) {
          const xV = this.focusTarget,
            JV = xV && (0, vV.i)().cursorMagnetism ? pe(Ee(xV)) : null;
          this.pointer = TV(this.pointer, {
            stick: VV.leftStick,
            moveDeadzone: (0, vV.i)().moveDeadzone,
            dpad: eV,
            dtMs: VV.dtMs,
            cursorSpeedPercent: (0, vV.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: JV
            }
          })
        }
        move(VV) {
          this.targets.revalidate();
          const eV = this.currentTarget();
          eV && this.setFocus(ke(eV, this.getTargets().targets, VV))
        }
        step(VV) {
          const eV = this.pointer;
          if (eV && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((VV, eV, xV) => {
            var JV;
            const YV = {
              key: "",
              rect: {
                left: VV.x,
                top: VV.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (JV = ke(YV, eV, xV)) && void 0 !== JV ? JV : be(VV, eV)
          })(eV, this.getTargets().targets, VV));
          this.move(VV)
        }
        isNavButton(VV) {
          return !Ie.some((eV => (0, wV.i)(eV) === VV)) && !(VV === (0, wV.i)("inventory") && Vx())
        }
        handleNavigation(VV, eV) {
          const xV = (0, vV.i)().inventoryNavigation,
            JV = {
              x: 0,
              y: 0
            };
          let YV = null;
          for (const QV of kV.F) {
            const UV = this.isNavButton(QV) && VV.isHeld(QV);
            UV && (JV.x += se[QV].x, JV.y += se[QV].y), this.dpadTimers.get(QV).update(UV, eV) && "cursor" !== xV && (YV ??= QV)
          }
          const UV = this.stickGate.update(VV.leftStick, (0, vV.i)().moveDeadzone);
          if (YV && (this.step(YV), this.stickGate.lock()), "slot" !== xV) {
            const eV = ((VV, eV, xV, JV) => "hybrid" !== VV ? "cursor" === VV : !JV && (eV || xV))(xV, null !== this.pointer, UV, null !== YV);
            return eV && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(VV, "cursor" === xV ? JV : {
              x: 0,
              y: 0
            }))
          }
          const yV = (0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone),
            pV = this.stickRepeat.update(UV ? (0, kV.gb)(yV) : null, eV);
          pV && this.move(pV)
        }
        applyCategoryPlace() {
          const VV = this.placeAfterCategory;
          if (!VV) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const eV = be(pe(VV.rect), this.getTargets().targets, (eV => eV.scrollGroup === VV.scrollGroup));
          this.setFocus(eV, !1)
        }
        applyFocusRequest() {
          const VV = (0, IV.o)();
          VV && (this.targets.invalidate(), this.setFocus((0, IV.c)(this.getTargets().targets, VV)))
        }
        handlePanels(VV) {
          var eV, xV, JV;
          const YV = VV.wasPressed((0, wV.i)("inventoryPanelPrevious")),
            UV = VV.wasPressed((0, wV.i)("inventoryPanelNext"));
          if (!YV && !UV) return;
          const {
            targets: yV
          } = this.getTargets(), pV = (QV = ((VV, eV) => {
            const xV = [];
            for (const YV of VV) YV.visible && !xV.includes(YV.panel) && xV.push(YV.panel);
            const JV = VV => {
              const JV = eV.indexOf(VV);
              return -1 === JV ? eV.length + xV.indexOf(VV) : JV
            };
            return xV.sort(((VV, eV) => JV(VV) - JV(eV)))
          })(yV, Ne), nV = null !== (eV = null === (xV = this.focusTarget) || void 0 === xV ? void 0 : xV.panel) && void 0 !== eV ? eV : null, ZV = UV ? 1 : -1, 0 === QV.length ? null : QV[Qe(null === nV ? -1 : QV.indexOf(nV), QV.length, ZV)]);
          var QV, nV, ZV;
          if (null === pV) return;
          const vV = this.panelMemory.get(pV),
            rV = yV.filter((VV => VV.panel === pV)),
            kV = null !== (JV = rV.find((VV => VV.element === vV && VV.visible))) && void 0 !== JV ? JV : xx(rV, (0, IV.d)());
          this.setFocus(kV)
        }
        handlePaging(VV, eV) {
          const xV = (0, wV.i)("menuPageUp"),
            JV = (0, wV.i)("menuPageDown"),
            YV = this.pageUpTimer.update(VV.isHeld(xV), eV),
            UV = this.pageDownTimer.update(VV.isHeld(JV), eV);
          if (!YV && !UV) return;
          const yV = UV ? 1 : -1;
          if (!VV.wasPressed(UV ? JV : xV) && this.hasCategories) return;
          if ((VV => {
              const eV = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === eV.length) return !1;
              const xV = eV.findIndex((VV => VV.classList.contains("Selected"))),
                JV = eV[Qe(xV, eV.length, VV)];
              return (0, mV.q)(JV, (0, mV.D)(JV)), !0
            })(yV)) {
            var pV, QV;
            this.targets.invalidate();
            const VV = null !== (pV = null === (QV = this.focusTarget) || void 0 === QV ? void 0 : QV.scrollGroup) && void 0 !== pV ? pV : null,
              eV = this.readFocusRect();
            return void(this.placeAfterCategory = null !== VV && eV && !this.pointer ? {
              rect: eV,
              scrollGroup: VV
            } : null)
          }
          const {
            targets: nV
          } = this.getTargets(), ZV = this.currentTarget(), vV = ZV && Ce(ZV) ? ZV : nV.find((VV => Ce(VV) && VV.visible));
          if (!vV) return;
          const rV = ((VV, eV, xV, JV) => {
            if (null === VV.scrollGroup) return null;
            const YV = pe(VV.rect),
              UV = YV.x,
              yV = YV.y + ("Down" === xV ? JV : -JV);
            let pV = null,
              QV = 1 / 0;
            for (const nV of eV) {
              if (nV.scrollGroup !== VV.scrollGroup || nV.key === VV.key) continue;
              const eV = pe(nV.rect);
              if ("Down" === xV ? eV.y <= YV.y : eV.y >= YV.y) continue;
              const JV = Math.hypot(eV.x - UV, eV.y - yV);
              JV < QV && (pV = nV, QV = JV)
            }
            return pV
          })(vV, nV, yV > 0 ? "Down" : "Up", vV.scrollContainer.clientHeight);
          this.setFocus(null !== rV && void 0 !== rV ? rV : vV)
        }
        handleScroll(VV) {
          var eV, xV, JV, YV, UV, yV;
          if (!this.scroller.isScrolling(VV.rightStick)) return void this.scroller.reset();
          const {
            targets: pV
          } = this.getTargets(), QV = this.pointer, nV = !QV && this.focusTarget && Ce(this.focusTarget) ? this.focusTarget.scrollContainer : null, wV = QV && (null === (eV = pV.find((VV => VV.clip && Be(VV.clip, QV)))) || void 0 === eV ? void 0 : eV.scrollContainer), ZV = null !== (xV = null !== (JV = null !== (YV = this.scroller.current()) && void 0 !== YV ? YV : wV) && void 0 !== JV ? JV : nV) && void 0 !== xV ? xV : null === (UV = pV.find(Ce)) || void 0 === UV ? void 0 : UV.scrollContainer;
          if (!ZV || !this.scroller.step(ZV, VV.rightStick, VV.dtMs)) return;
          this.targets.scrolled(ZV);
          const vV = QV || (null === (yV = this.focusTarget) || void 0 === yV ? void 0 : yV.scrollContainer) !== ZV ? null : this.readFocusRect();
          if (!vV) return;
          const rV = DV(ZV),
            kV = pe(vV);
          if (kV.y < rV.top || kV.y > rV.bottom) {
            const VV = this.focusTarget.scrollGroup,
              eV = be(kV, this.getTargets().targets, (eV => eV.scrollGroup === VV));
            this.setFocus(eV, !1)
          }
        }
        focusContext(VV) {
          const {
            kind: eV,
            idx: xV
          } = this.focused ? We(this.focused) : {
            kind: null,
            idx: null
          }, JV = this.focused ? ze(this.focused) : null, YV = JV ? (0, Ke.d)(JV) : null;
          return {
            kind: eV,
            idx: xV,
            actionElement: JV,
            press: YV,
            hasPress: null !== YV,
            hasBack: !(null === YV || void 0 === YV || !YV.back),
            holding: VV.isHolding(),
            slotHasItem: null !== xV && VV.hasItemAt(xV)
          }
        }
        handleButtons(VV, eV, xV) {
          var JV, YV;
          if (!this.activePress || VV.isHeld(this.activePress.button) && (JV = this.activePress.target, YV = this.focused, null !== JV.recipe ? Ge(YV).recipe === JV.recipe : YV === JV.element) || this.releasePress(), this.scrollStickClick.update(VV.rightStick, eV), !this.handleHotbarPick(VV, xV)) {
            for (const [JV, YV] of Se) {
              const UV = (0, wV.i)(YV);
              if (!VV.wasPressed(UV) || "openButton" === JV && !Vx()) continue;
              if ("RS" === UV && !this.scrollStickClick.allowsClick(eV)) continue;
              const yV = this.focusContext(xV),
                pV = sV(JV, yV);
              pV && this.runIntent(pV, yV, UV, xV)
            }
            this.handleDrop(VV, eV, xV)
          }
        }
        handleHotbarPick(VV, eV) {
          const xV = this.hotbarPick;
          if (!xV) return !1;
          const JV = VV.wasPressed((0, wV.i)("inventoryPrimary")) || VV.wasPressed((0, wV.i)("inventoryHotbarSwap"));
          if (!JV && !VV.wasPressed((0, wV.i)("inventoryClose")) && !eV.isHolding()) return !(VV.wasPressed((0, wV.i)("inventory")) && Vx());
          const YV = this.focusTarget;
          JV && "hotbar" === (null === YV || void 0 === YV ? void 0 : YV.panel) && null !== YV.idx && YV.idx !== xV.idx && (eV.swapWithHotbar(YV.idx, xV.idx), this.afterAction()), this.hotbarPick = null;
          const UV = xV.element.isConnected ? this.getTargets().byElement.get(xV.element) : void 0;
          return UV && this.setFocus(UV), !0
        }
        startHotbarPick(VV) {
          var eV;
          const {
            targets: xV,
            byElement: JV
          } = this.getTargets(), YV = document.querySelector(ue), UV = null !== (eV = YV && JV.get(YV)) && void 0 !== eV ? eV : xV.find((VV => "hotbar" === VV.panel));
          UV && this.focused && (this.hotbarPick = {
            idx: VV,
            element: this.focused
          }, this.setFocus(UV))
        }
        focusKey() {
          return this.focused ? xe(this.focused) : null
        }
        handleDrop(VV, eV, xV) {
          const JV = (0, wV.i)("inventoryDrop");
          if (VV.wasPressed(JV)) {
            const VV = (YV = this.focusContext(xV)).holding ? {
              kind: "hn"
            } : "slot" === YV.kind && YV.slotHasItem && null !== YV.idx ? {
              kind: "slot",
              idx: YV.idx
            } : null;
            return void(VV && (this.dropFrom(VV, !1, xV), this.dropLatch.press(VV, this.focusKey(), eV, EV.b[(0, vV.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var YV;
          const UV = this.dropLatch.update(VV.isHeld(JV), this.focusKey(), eV);
          UV && ((VV, eV, xV) => "hn" === VV.kind ? eV : !eV && xV(VV.idx))(UV, xV.isHolding(), xV.hasItemAt) && (this.dropFrom(UV, !0, xV), this.afterAction())
        }
        dropFrom(VV, eV, xV) {
          "hn" === VV.kind ? xV.dropHeld(eV, this.slotPoint()) : xV.dropSlot(VV.idx, eV)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (VV => {
            const eV = pe(VV);
            return {
              clientX: eV.x,
              clientY: eV.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(VV, eV, xV, JV) {
          const YV = eV.idx,
            UV = eV.actionElement;
          switch (UV && ex.has(VV) && (0, BV.x)(UV), VV) {
            case "slotPrimary":
              JV.primary(YV, this.slotPoint());
              break;
            case "slotSecondary":
              JV.secondary(YV, this.slotPoint());
              break;
            case "slotQuickMove":
              JV.quickMove(YV, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(YV);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(eV.press, "pressPrimary" === VV ? "primary" : "secondary", xV);
              break;
            case "click":
              (0, mV.q)(UV, (0, mV.D)(UV));
              break;
            case "openKeyboard":
              (0, mV.M)(UV) && (0, mV.L)(UV);
              break;
            case "pressBack":
              eV.press.back();
              break;
            case "cancel":
              JV.cancel();
              break;
            case "close":
              return this.releasePress(), void JV.close()
          }
          this.afterAction()
        }
        startPress(VV, eV, xV) {
          this.releasePress(), VV.press(eV) && (this.activePress = {
            handlers: VV,
            button: xV,
            target: Ge(this.focused)
          })
        }
        releasePress() {
          var VV, eV, xV;
          null === (VV = this.activePress) || void 0 === VV || null === (eV = (xV = VV.handlers).release) || void 0 === eV || eV.call(xV), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(VV) {
          ((VV, eV) => {
            var xV, JV, YV, UV, yV, pV;
            return VV.showing === eV.showing && VV.kind === eV.kind && VV.holding === eV.holding && VV.slotHasItem === eV.slotHasItem && (null === (xV = VV.pressHints) || void 0 === xV ? void 0 : xV.primary) === (null === (JV = eV.pressHints) || void 0 === JV ? void 0 : JV.primary) && (null === (YV = VV.pressHints) || void 0 === YV ? void 0 : YV.secondary) === (null === (UV = eV.pressHints) || void 0 === UV ? void 0 : UV.secondary) && (null === (yV = VV.pressHints) || void 0 === yV ? void 0 : yV.back) === (null === (pV = eV.pressHints) || void 0 === pV ? void 0 : pV.back) && VV.hasCategories === eV.hasCategories && VV.hasList === eV.hasList && VV.openButtonCloses === eV.openButtonCloses && VV.steppingSlots === eV.steppingSlots && VV.hotbarPicking === eV.hotbarPicking && VV.quickMoveToHotbar === eV.quickMoveToHotbar && VV.dropStackHold === eV.dropStackHold
          })(VV, this.state) || (this.state = VV, nV.h.QZ(oe.g, VV))
        }
      },
      Ux = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var yx = xV(9320),
      px = xV(364),
      Qx = xV(1725),
      nx = xV(8804);
    const wx = "[data-pad-secondary]",
      Zx = VV => VV instanceof HTMLElement && (0, dV.n)(VV) && !(0, dV.v)(VV),
      vx = VV => {
        const eV = VV.querySelector(wx);
        if (eV && Zx(eV)) return eV;
        for (const YV of null !== (xV = null === (JV = VV.parentElement) || void 0 === JV ? void 0 : JV.children) && void 0 !== xV ? xV : []) {
          var xV, JV;
          if (YV !== VV && YV.matches(wx) && Zx(YV)) return YV
        }
        return null
      },
      rx = (VV, eV, xV, JV) => Math.max(0, Math.max(VV, xV) - Math.min(eV, JV)),
      kx = (VV, eV, xV, JV) => Math.max(0, Math.min(eV, JV) - Math.max(VV, xV)),
      bx = (VV, eV, xV) => {
        const JV = (VV.left + VV.right) / 2,
          YV = (VV.top + VV.bottom) / 2,
          UV = (eV.left + eV.right) / 2,
          yV = (eV.top + eV.bottom) / 2;
        if ("Left" === xV || "Right" === xV) {
          const pV = "Right" === xV ? 1 : -1;
          return {
            forwardGap: "Right" === xV ? eV.left - VV.right : VV.left - eV.right,
            centreForward: (UV - JV) * pV,
            sidewaysGap: rx(VV.top, VV.bottom, eV.top, eV.bottom),
            sidewaysOverlap: kx(VV.top, VV.bottom, eV.top, eV.bottom),
            centreSideways: Math.abs(yV - YV),
            startSideways: Math.abs(eV.top - VV.top),
            fromSidewaysSize: VV.bottom - VV.top,
            toSidewaysSize: eV.bottom - eV.top,
            toLength: eV.right - eV.left
          }
        }
        const pV = "Down" === xV ? 1 : -1;
        return {
          forwardGap: "Down" === xV ? eV.top - VV.bottom : VV.top - eV.bottom,
          centreForward: (yV - YV) * pV,
          sidewaysGap: rx(VV.left, VV.right, eV.left, eV.right),
          sidewaysOverlap: kx(VV.left, VV.right, eV.left, eV.right),
          centreSideways: Math.abs(UV - JV),
          startSideways: Math.abs(eV.left - VV.left),
          fromSidewaysSize: VV.right - VV.left,
          toSidewaysSize: eV.right - eV.left,
          toLength: eV.bottom - eV.top
        }
      },
      Ex = VV => VV.centreForward > .5 && VV.forwardGap >= -VV.toLength / 2,
      Bx = VV => {
        const eV = VV.sidewaysOverlap > 0 ? 0 : 2 * VV.fromSidewaysSize,
          xV = VV.fromSidewaysSize > 1.5 * VV.toSidewaysSize ? VV.startSideways : VV.centreSideways;
        return Math.max(0, VV.forwardGap) + 3 * VV.sidewaysGap + eV + .1 * xV
      },
      jx = (VV, eV) => kx(VV.top, VV.bottom, eV.top, eV.bottom) > 0 || eV.bottom - eV.top > eV.right - eV.left,
      qx = (VV, eV, xV, JV, YV, UV) => {
        const yV = YV ? Fx(VV, eV, xV, YV) : new Set,
          pV = Px(VV, eV, xV, yV);
        return pV < 0 && yV.size > 0 && UV ? tx(VV, eV, xV, UV) : JV && pV >= 0 ? Tx(VV, eV, xV, JV, pV, yV) : pV
      },
      tx = (VV, eV, xV, JV) => {
        const YV = new Set,
          UV = Px(VV, eV, "Up", YV) >= 0,
          yV = Px(VV, eV, "Down", YV) >= 0,
          pV = new Set;
        return eV.forEach(((eV, xV) => {
          const YV = eV.top + eV.bottom < VV.top + VV.bottom;
          JV[xV] && !(YV ? UV : yV) || pV.add(xV)
        })), Px(VV, eV, xV, pV)
      },
      Fx = (VV, eV, xV, JV) => {
        const YV = new Set;
        return "Left" !== xV && "Right" !== xV || eV.forEach(((eV, xV) => {
          JV[xV] && kx(VV.top, VV.bottom, eV.top, eV.bottom) <= 0 && YV.add(xV)
        })), YV
      },
      Tx = (VV, eV, xV, JV, YV, UV) => {
        const yV = bx(VV, eV[YV], xV).forwardGap;
        let pV = YV,
          QV = JV[YV],
          nV = 1 / 0;
        return eV.forEach(((eV, wV) => {
          const ZV = JV[wV];
          if (UV.has(wV) || ZV < QV || ZV === QV && pV === YV) return;
          const vV = bx(VV, eV, xV);
          if (!Ex(vV) || vV.forwardGap < 0 || vV.forwardGap >= yV) return;
          const rV = Bx(vV);
          (ZV > QV || rV < nV) && (pV = wV, QV = ZV, nV = rV)
        })), pV
      },
      Px = (VV, eV, xV, JV) => {
        let YV = -1,
          UV = 1 / 0;
        if (eV.forEach(((eV, yV) => {
            const pV = ((VV, eV, xV) => {
              const JV = bx(VV, eV, xV);
              if (!Ex(JV)) return null;
              const YV = Math.max(0, JV.forwardGap);
              return JV.sidewaysOverlap <= 0 && JV.sidewaysGap > 2 * (YV + 1) ? null : Bx(JV)
            })(VV, eV, xV);
            null !== pV && pV < UV && !JV.has(yV) && (UV = pV, YV = yV)
          })), YV < 0) return -1;
        const yV = eV[YV],
          pV = bx(VV, yV, xV).forwardGap;
        let QV = pV,
          nV = YV;
        return eV.forEach(((eV, UV) => {
          if (UV === YV || JV.has(UV) || !((VV, eV, xV) => {
              const JV = "Left" === xV || "Right" === xV,
                YV = JV ? kx(VV.top, VV.bottom, eV.top, eV.bottom) : kx(VV.left, VV.right, eV.left, eV.right),
                UV = JV ? Math.min(VV.bottom - VV.top, eV.bottom - eV.top) : Math.min(VV.right - VV.left, eV.right - eV.left);
              return YV > 0 && YV >= UV / 2
            })(eV, yV, xV)) return;
          const wV = bx(VV, eV, xV);
          Ex(wV) && wV.forwardGap + wV.toLength <= pV + 1 && wV.forwardGap < QV && (QV = wV.forwardGap, nV = UV)
        })), nV
      },
      Ax = (VV, eV) => {
        let xV = -1,
          JV = 1 / 0;
        return eV.forEach(((eV, YV) => {
          const UV = Math.max(eV.left - VV.x, 0, VV.x - eV.right),
            yV = Math.max(eV.top - VV.y, 0, VV.y - eV.bottom),
            pV = Math.hypot(UV, yV);
          pV < JV && (JV = pV, xV = YV)
        })), xV
      },
      Nx = (VV, eV) => {
        const xV = Math.min(VV.bottom - VV.top, eV.bottom - eV.top) / 2;
        return Math.abs(VV.top - eV.top) > xV ? VV.top - eV.top : VV.left - eV.left
      },
      Xx = VV => {
        let eV = -1;
        for (let xV = 0; xV < VV.length; xV++)(eV < 0 || Nx(VV[xV], VV[eV]) < 0) && (eV = xV);
        return eV
      };
    var Mx = xV(1775),
      zx = xV(9326),
      Gx = xV(9333);
    const Wx = VV => {
        if ("death" !== VV || "inGame" !== QV.b.get("gameState") || "off" === (0, vV.i)().quickChat || null === (0, Mx.e)()) return !1;
        const eV = (0, wV.i)("chat");
        return eV !== (0, wV.i)("menuConfirm") && eV !== (0, wV.i)("menuBack")
      },
      Rx = new zx.d;
    var gx = xV(4690),
      Dx = xV(9335),
      ix = xV(9338);
    const Cx = VV => {
        let eV = null;
        for (const xV of VV.querySelectorAll("[data-pad-tabs]"))(0, dV.n)(xV) && (!eV || Number(xV.dataset.padTabs) < Number(eV.dataset.padTabs)) && (eV = xV);
        return eV
      },
      ax = (VV, eV, xV, JV) => {
        VV.focusWhenFound((() => {
          const YV = VV.pickInitial(eV);
          if (YV && !xV.has(YV) && (null === JV || void 0 === JV || !JV.contains(YV))) return YV;
          const UV = ((VV, eV) => {
              const xV = eV => VV.getEnabledCandidates(eV).filter((VV => !VV.closest("[data-pad-tabs]")));
              for (const JV of (0, dV.h)(eV)) {
                const VV = xV(JV);
                if (VV.length > 0) return VV
              }
              return xV(eV)
            })(VV, eV).filter((VV => !xV.has(VV))),
            yV = Xx(UV.map((VV => VV.getBoundingClientRect())));
          return yV >= 0 ? UV[yV] : null
        }), 3e3)
      },
      ox = (VV, eV, xV, JV) => {
        var YV;
        const UV = ((VV, eV) => {
          if (0 === VV.length) return null;
          const xV = VV.findIndex((VV => "true" === VV.dataset.padSelected));
          return xV < 0 ? eV > 0 ? VV[0] : VV[VV.length - 1] : VV[(xV + eV + VV.length) % VV.length]
        })([...xV.querySelectorAll("[data-pad-tab]")].filter((VV => (0, dV.n)(VV) && !(0, dV.v)(VV))), JV);
        if (!UV) return;
        const yV = null !== (YV = null === VV || void 0 === VV ? void 0 : VV.getFocused()) && void 0 !== YV ? YV : null,
          pV = !(null === yV || void 0 === yV || !yV.isConnected) && xV.contains(yV),
          QV = VV && !pV ? new Set(VV.getEnabledCandidates(eV)) : null;
        (0, mV.c)(UV), VV && (QV ? ax(VV, eV, QV, xV) : VV.setFocus(UV, {
          byUser: !0
        }))
      },
      cx = VV => {
        var eV;
        const xV = DV(null !== (eV = MV(VV, "x")) && void 0 !== eV ? eV : VV),
          JV = (0, dV.f)(VV).filter((VV => !(0, dV.v)(VV))),
          YV = JV.filter((VV => iV(VV.getBoundingClientRect(), xV)));
        return (YV.length > 0 ? YV : JV).sort(((VV, eV) => Nx(VV.getBoundingClientRect(), eV.getBoundingClientRect())))
      },
      hx = (VV, eV, xV) => {
        const JV = [...eV.querySelectorAll("[data-pad-row]")].filter(dV.n),
          YV = VV.getFocused(),
          UV = YV ? JV.findIndex((VV => VV.contains(YV))) : -1;
        let yV = 0,
          pV = xV > 0 ? 0 : JV.length - 1;
        if (UV >= 0 && YV) yV = Math.max(0, cx(JV[UV]).indexOf(YV)), pV = UV + xV;
        else if (YV) {
          const VV = YV.getBoundingClientRect(),
            eV = JV.map((eV => {
              const JV = eV.getBoundingClientRect();
              return xV > 0 ? JV.top >= VV.top : JV.bottom <= VV.bottom
            }));
          pV = xV > 0 ? eV.indexOf(!0) : eV.lastIndexOf(!0)
        }
        for (let QV = pV; QV >= 0 && QV < JV.length; QV += xV) {
          const eV = cx(JV[QV]);
          if (eV.length > 0) return void VV.setFocus(eV[Math.min(yV, eV.length - 1)], {
            byUser: !0
          })
        }
      },
      lx = (VV, eV, xV) => {
        var JV, YV;
        const UV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.getFocused()) && void 0 !== JV ? JV : null,
          yV = null !== UV && void 0 !== UV && UV.closest("[data-pad-row]") ? "x" : "y",
          pV = null !== (YV = UV ? MV(UV, yV, eV) : null) && void 0 !== YV ? YV : GV(eV, yV);
        if (!pV) return;
        const QV = UV ? (0, mV.D)(UV) : null;
        if (gV(pV, yV, xV * ("y" === yV ? pV.clientHeight : pV.clientWidth) * .85), !VV || !QV) return;
        const nV = DV(pV),
          wV = VV.getEnabledCandidates(eV).filter((VV => pV.contains(VV) && iV(VV.getBoundingClientRect(), nV))),
          ZV = Ax(QV, wV.map((VV => VV.getBoundingClientRect())));
        ZV >= 0 && VV.setFocus(wV[ZV], {
          scroll: !1,
          byUser: !0
        })
      };
    let Lx = null;
    const fx = (VV, eV) => {
        var xV, JV;
        const YV = eV.querySelector("[data-pad-friends-column]"),
          UV = VV.getFocused();
        if (!YV || !UV || !YV.contains(UV)) return !1;
        const yV = VV.getEnabledCandidates(eV).filter((VV => !YV.contains(VV))),
          pV = Ax((0, mV.D)(UV), yV.map((VV => VV.getBoundingClientRect()))),
          QV = null === (xV = Lx) || void 0 === xV ? void 0 : xV.deref();
        return VV.setFocus(null !== QV && void 0 !== QV && QV.isConnected ? QV : null !== (JV = yV[pV]) && void 0 !== JV ? JV : null, {
          byUser: !0
        }), !0
      },
      mx = VV => {
        const eV = (0, wV.i)(VV);
        return (0, kV.J)(eV) || nx.n.some((VV => (0, wV.i)(VV) === eV)) ? null : eV
      },
      Kx = (VV, eV) => {
        const xV = mx(eV);
        return null !== xV && VV.wasPressed(xV)
      },
      Hx = function(VV, eV, xV) {
        let JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const YV = (VV => {
            var eV, xV;
            return null !== (eV = null === (xV = Cx(VV)) || void 0 === xV ? void 0 : xV.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== eV ? eV : null
          })(eV),
          UV = VV && YV ? new Set(VV.getEnabledCandidates(eV)) : null;
        (0, yx.d)(), xV === px.q.SETTINGS && (0, Qx.k)(QV.b.get("openEverythingMenuName")) ? QV.b.set({
          openEverythingMenuName: xV
        }) : (0, Qx.t)((0, ix.c)("padMenuShortcut"), xV, JV), VV && UV && YV && ax(VV, eV, UV, YV.closest("[data-pad-tabs]"))
      },
      ux = VV => null !== VV.closest(".Dropdown-root") || null !== VV.querySelector(".Dropdown-root.is-open"),
      sx = VV => null !== (0, Dx.c)() && "popup" !== VV.layer.kind && !Cx(VV.root) && !ux(VV.root),
      Sx = (0, bV.e)(kV.ab),
      Ix = (0, bV.e)(kV.ab),
      dx = (VV, eV, xV) => {
        if (((VV, eV) => {
            const xV = (0, wV.i)("chat");
            return Wx(eV) && VV.isHeld(xV) ? "hold" === Rx.update(VV.wasPressed(xV), VV.isHeld(xV), performance.now(), EV.b[(0, vV.i)().tapHoldTime].wheelMs) && (ZV.c.consumeButton(xV), nV.h.QZ(Gx.o), !0) : (Rx.release(), !1)
          })(eV, xV.layer.kind)) return !0;
        const JV = xV.root;
        for (const [yV, pV] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (eV.wasPressed((0, wV.i)(yV))) {
            const eV = ux(JV) ? null : Cx(JV);
            if (eV) ox(VV, JV, eV, pV);
            else if (sx(xV)) {
              var YV;
              const eV = VV ? new Set(VV.getEnabledCandidates(JV)) : null;
              null !== (YV = (0, Dx.c)()) && void 0 !== YV && YV(pV) && VV && eV && ax(VV, JV, eV, null)
            } else VV && hx(VV, JV, pV);
            return !0
          } for (const [yV, pV, QV] of [
            ["menuPageUp", -1, Sx],
            ["menuPageDown", 1, Ix]
          ]) {
          const xV = (0, wV.i)(yV);
          if (eV.wasPressed(xV) && QV.reset(), QV.update(eV.isHeld(xV), performance.now())) return lx(VV, JV, pV), !0
        }
        const UV = "popup" === xV.layer.kind;
        return Kx(eV, "pause") ? (UV || (0, Qx.q)() && "menu" !== xV.layer.kind || Hx(VV, JV, (0, Qx.q)() ? px.q.SETTINGS : (0, gx.b)()), !0) : !!Kx(eV, "leaderboard") && ("home" === xV.layer.kind ? (VV => {
          const eV = [...VV.querySelectorAll("[data-pad-notifications]")].find(dV.n);
          eV && (0, mV.c)(eV)
        })(JV) : UV || Hx(VV, JV, px.q.LOBBY_LEADERBOARD, "inGame" === QV.b.get("gameState")), !0)
      },
      Ox = (VV, eV, xV) => {
        if (dx(VV, eV, xV)) return !0;
        const JV = "home" === xV.layer.kind;
        if (eV.wasPressed((0, wV.i)("menuSecondary"))) {
          const eV = VV.getFocused(),
            YV = eV ? vx(eV) : null;
          if (YV) return (0, mV.c)(YV), !0;
          if (JV) {
            const eV = xV.root.querySelector("[data-pad-search] input");
            return eV && (0, dV.r)(eV, xV.root) ? (VV.setFocus(eV, {
              byUser: !0
            }), (0, mV.c)(eV)) : QV.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!JV || !Kx(eV, "inventory")) && (((VV, eV) => {
          var xV, JV;
          const YV = eV.querySelector("[data-pad-friends-column]");
          if (!YV || !(0, dV.n)(YV)) return void(0, Qx.t)((0, ix.c)("padMenuShortcut"), px.q.SOCIAL);
          if (fx(VV, eV)) return;
          const UV = null !== (xV = null === (JV = YV.querySelector("[data-pad-friends-start]")) || void 0 === JV ? void 0 : JV.getBoundingClientRect().top) && void 0 !== xV ? xV : -1 / 0,
            yV = VV.getEnabledCandidates(YV),
            pV = yV.filter((VV => VV.getBoundingClientRect().top >= UV)),
            QV = pV.length > 0 ? pV : yV,
            nV = Xx(QV.map((VV => VV.getBoundingClientRect())));
          VV.setFocus(nV >= 0 ? QV[nV] : null, {
            byUser: !0
          })
        })(VV, xV.root), !0)
      },
      VJ = VV => {
        var eV, xV, JV;
        const YV = (0, mV.F)(VV);
        if (null !== YV) return YV;
        const UV = (null !== (eV = null !== (xV = null !== (JV = VV.getAttribute("aria-label")) && void 0 !== JV ? JV : VV.getAttribute("title")) && void 0 !== xV ? xV : VV.textContent) && void 0 !== eV ? eV : "").replace(/\s+/g, " ").trim();
        return UV ? `${VV.tagName}:${UV.slice(0,100)}` : null
      };
    class eJ {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(VV) {
        const eV = this.history.indexOf(VV);
        if (eV >= 0) {
          for (const VV of this.history.splice(eV + 1)) this.remembered.delete(VV);
          return !0
        }
        return this.remembered.delete(VV), this.history.push(VV), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(VV) {
        this.remembered.delete(VV);
        const eV = this.history.indexOf(VV);
        eV >= 0 && this.history.splice(eV, 1)
      }
      remember(VV, eV, xV, JV) {
        const YV = VJ(eV),
          UV = (0, mV.F)(eV),
          yV = null !== UV && ((VV, eV) => {
            let xV = 0;
            for (const JV of VV.querySelectorAll("[data-pad-key], [href]"))
              if ((JV.getAttribute("data-pad-key") === eV || JV.getAttribute("href") === eV) && (xV++, xV > 1)) return !0;
            return !1
          })(xV, UV) ? Math.max(0, this.twins(JV(), UV).indexOf(eV)) : 0;
        this.remembered.set(VV, {
          element: new WeakRef(eV),
          identity: YV,
          ordinal: yV
        })
      }
      has(VV) {
        return this.remembered.has(VV)
      }
      recall(VV, eV) {
        var xV, JV;
        const YV = this.remembered.get(VV);
        if (!YV) return null;
        const UV = YV.element.deref();
        if (UV && eV.includes(UV)) return UV;
        if (null === YV.identity) return null;
        const yV = this.twins(eV, YV.identity);
        return null !== (xV = null !== (JV = yV[YV.ordinal]) && void 0 !== JV ? JV : yV[0]) && void 0 !== xV ? xV : null
      }
      twins(VV, eV) {
        return VV.filter((VV => VJ(VV) === eV))
      }
    }
    var xJ = xV(1309);
    const JJ = VV => {
        const eV = [];
        let xV = VV;
        for (; xV && xV !== document.body;) {
          const VV = getComputedStyle(xV).zIndex;
          "auto" !== VV && eV.push(Number(VV) || 0), xV = xV.parentElement
        }
        return eV.reverse()
      },
      YJ = (VV, eV) => {
        const xV = ((VV, eV) => {
          const xV = Math.max(VV.length, eV.length);
          for (let UV = 0; UV < xV; UV++) {
            var JV, YV;
            const xV = (null !== (JV = VV[UV]) && void 0 !== JV ? JV : 0) - (null !== (YV = eV[UV]) && void 0 !== YV ? YV : 0);
            if (0 !== xV) return xV
          }
          return 0
        })(JJ(VV), JJ(eV));
        if (0 !== xV) return xV > 0;
        if (VV.contains(eV)) return !1;
        if (eV.contains(VV)) return !0;
        const JV = VV.compareDocumentPosition(eV);
        return !!(JV & Node.DOCUMENT_POSITION_PRECEDING) || !(JV & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      UJ = (VV, eV) => {
        var xV;
        return null !== (xV = YJ(VV.root, eV.root)) && void 0 !== xV ? xV : VV.order > eV.order
      },
      yJ = (VV, eV) => eV.some((eV => !eV.contains(VV) && !VV.contains(eV) && !0 === YJ(eV, VV)));
    let pJ = null,
      QJ = null,
      nJ = -1;
    const wJ = () => {
        var VV;
        const eV = null === (VV = document.timeline) || void 0 === VV ? void 0 : VV.currentTime,
          xV = "number" === typeof eV ? eV : null;
        if (null !== xV && xV === QJ && nJ === (0, xJ.b)()) return pJ;
        let JV = null;
        const YV = [],
          UV = [...document.querySelectorAll("[data-pad-covers]")].filter(dV.n);
        for (const yV of (0, xJ.f)()) {
          const VV = yV.getRoot(),
            eV = !!VV && (0, dV.n)(VV) && !yJ(VV, UV);
          if (yV.shown && !eV && YV.push(yV), yV.shown = eV, !VV || !eV) continue;
          const xV = {
            layer: yV,
            root: VV,
            order: yV.order
          };
          JV && !UJ(xV, JV) || (JV = xV)
        }
        pJ = JV, QJ = xV, nJ = (0, xJ.b)();
        for (const yV of YV)(0, xJ.g)(yV);
        return pJ
      },
      ZJ = () => {
        const VV = wJ();
        return !(null === VV || void 0 === VV || !VV.layer.close) && (VV.layer.close(), QJ = null, !0)
      },
      vJ = () => {
        var VV, eV;
        return null !== (VV = null === (eV = wJ()) || void 0 === eV ? void 0 : eV.root) && void 0 !== VV ? VV : null
      },
      rJ = VV => VV ? {
        ...VV,
        root: vJ()
      } : null;
    let kJ = null,
      bJ = null,
      EJ = (0, vV.i)().menuNavigation,
      BJ = null;
    const jJ = new FV;
    let qJ = null;
    nV.h.subscribe(vV.g, (() => {
      const VV = (0, vV.i)().menuNavigation;
      VV !== EJ && (EJ = VV, kJ = null, bJ = null)
    }));
    const tJ = () => {
        var VV;
        return null !== (VV = kJ) && void 0 !== VV ? VV : (0, vV.i)().menuNavigation
      },
      FJ = VV => {
        if (NJ()) {
          if (BJ = rJ(VV), "hybrid" === tJ()) return jJ.lock(), void(bJ = bJ ? null : vJ());
          kJ = "focus" === tJ() ? "cursor" : "focus"
        }
      },
      TJ = () => {
        const VV = BJ;
        return BJ = null, VV
      };
    let PJ = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const AJ = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const xV = PJ.root === VV,
          JV = xV ? PJ.firstSeenMs : eV,
          YV = PJ.has || eV - JV > 1e3;
        return (!xV || !YV || eV - PJ.atMs > 250) && (PJ = {
          root: VV,
          firstSeenMs: JV,
          atMs: eV,
          has: (0, dV.k)(VV)
        }), PJ.has
      },
      NJ = () => {
        const VV = vJ();
        return null !== VV && AJ(VV)
      },
      XJ = () => {
        const VV = wJ();
        return bJ && (null === VV || void 0 === VV ? void 0 : VV.root) !== bJ && (bJ = null), (VV => {
          let {
            mode: eV,
            hasLayer: xV,
            hasCandidates: JV,
            hybridCursorEngaged: YV
          } = VV;
          return xV ? "cursor" !== eV && JV() ? "hybrid" === eV && YV ? "cursor" : "focus" : "cursor" : null
        })({
          mode: tJ(),
          hasLayer: null !== VV,
          hasCandidates: () => null !== VV && AJ(VV.root),
          hybridCursorEngaged: null !== bJ
        })
      },
      MJ = () => "hybrid" === tJ() && NJ(),
      zJ = "pad-focused";
    var GJ = xV(5029),
      WJ = xV(5536);
    const RJ = "[data-pad-destructive]",
      gJ = `${RJ}, [data-pad-back]`,
      DJ = VV => ({
        rect: VV.getBoundingClientRect(),
        destructive: VV.matches(RJ),
        closes: null !== VV.closest("[data-pad-close-button]"),
        unavailable: VV.matches("[data-pad-unavailable]")
      }),
      iJ = VV => {
        let {
          destructive: eV,
          closes: xV,
          unavailable: JV
        } = VV;
        return eV ? xV ? 2 : 3 : JV ? 1 : 0
      },
      CJ = VV => {
        let eV = -1;
        for (let xV = 0; xV < VV.length; xV++) {
          if (eV < 0) {
            eV = xV;
            continue
          }
          const JV = VV[xV],
            YV = VV[eV];
          iJ(JV) === iJ(YV) ? Nx(JV.rect, YV.rect) < 0 && (eV = xV) : iJ(JV) < iJ(YV) && (eV = xV)
        }
        return eV
      },
      aJ = "[data-pad-tabs]",
      oJ = "[data-pad-tab]",
      cJ = (VV, eV) => {
        const xV = VV.querySelector(`${oJ}[data-pad-selected='true']`);
        return xV && eV.includes(xV) ? xV : null
      },
      hJ = (VV, eV) => {
        let xV = eV;
        for (let JV = eV.parentElement; JV && !JV.contains(VV); JV = JV.parentElement) xV = JV;
        return xV
      };
    class lJ {
      constructor() {
        this.contentReturn = null
      }
      redirect(VV, eV, xV, JV) {
        var YV, UV;
        const yV = VV.closest(aJ),
          pV = eV.closest(aJ);
        var QV;
        if (pV && pV !== yV) return yV || (this.contentReturn = new WeakRef(VV)), null !== (QV = cJ(pV, xV)) && void 0 !== QV ? QV : eV;
        if (!yV || pV) return eV;
        const nV = hJ(VV, eV),
          wV = null === (YV = this.contentReturn) || void 0 === YV ? void 0 : YV.deref();
        return wV && nV.contains(wV) && xV.includes(wV) ? wV : null !== (UV = this.pickRegionStart(nV, MV(eV, "y", JV), xV)) && void 0 !== UV ? UV : eV
      }
      findTabContent(VV, eV, xV) {
        const JV = VV.closest(aJ);
        if (!JV || !VV.matches(oJ) || JV.contains(eV)) return null;
        const YV = eV.closest(aJ);
        if (YV && Number(YV.dataset.padTabs) <= Number(JV.dataset.padTabs)) return null;
        const UV = hJ(VV, eV);
        return xV.some((VV => UV.contains(VV) && !VV.closest(gJ))) || !eV.closest(gJ) ? UV : null
      }
      pickContentStart(VV, eV, xV) {
        return this.contentReturn = null, this.pickRegionStart(VV, MV(VV, "y", xV), eV)
      }
      pickReplacedContentStart(VV, eV, xV, JV) {
        if (!eV.contains(VV)) return null;
        const YV = hJ(eV, VV),
          UV = xV.filter((VV => eV.contains(VV) && !YV.contains(VV) && !VV.closest(gJ)));
        return 0 === UV.length ? null : (this.contentReturn = null, this.pickRegionStart(eV, MV(UV[0], "y", JV), UV))
      }
      backToStrip(VV, eV, xV) {
        if (VV.closest(aJ)) return null;
        const JV = Cx(xV);
        for (const YV of xV.querySelectorAll(aJ)) {
          if (Number(YV.dataset.padTabs) <= 1 || YV === JV) continue;
          const UV = cJ(YV, eV),
            yV = UV ? hJ(VV, YV).parentElement : null;
          if (UV && yV && yV !== xV && xV.contains(yV)) return this.contentReturn = new WeakRef(VV), UV
        }
        return null
      }
      pickRegionStart(VV, eV, xV) {
        const JV = DV(eV),
          YV = VV => {
            const eV = xV.filter((eV => VV.contains(eV) && !eV.closest(aJ) && iV(eV.getBoundingClientRect(), JV))),
              YV = CJ(eV.map(DJ));
            return YV >= 0 ? eV[YV] : null
          };
        for (const UV of (0, dV.h)(VV)) {
          const VV = YV(UV);
          if (VV) return VV
        }
        for (const UV of VV.querySelectorAll(aJ)) {
          const VV = cJ(UV, xV);
          if (VV) return VV
        }
        return YV(VV)
      }
    }
    const LJ = "[data-pad-default-focus], .Dropdown-option.is-selected",
      fJ = ".Dropdown-root.is-open > .Dropdown-menu",
      mJ = "[data-pad-no-step-in]",
      KJ = "[data-pad-tabs]",
      HJ = "[data-pad-press-area]",
      uJ = VV => {
        let eV = VV;
        for (let xV = 0; eV && xV <= 4; xV++, eV = eV.parentElement) {
          const xV = eV.querySelector(".CircleInfo");
          if (xV) return eV === VV || eV.querySelectorAll(dV.c).length <= 1 ? xV : null;
          if (eV !== VV && eV.querySelectorAll(dV.c).length > 1) return null
        }
        return null
      },
      sJ = (VV, eV, xV) => {
        (0, mV.r)(VV, eV, xV);
        const JV = null !== VV && void 0 !== VV && VV.isConnected ? uJ(VV) : null,
          YV = uJ(eV);
        JV !== YV && (0, mV.r)(JV, YV, YV ? (0, mV.D)(YV) : xV, {
          leaveBelow: VV,
          enterBelow: eV
        })
      },
      SJ = VV => VV.getBoundingClientRect(),
      IJ = (VV, eV, xV) => {
        const JV = new Set(xV);
        for (let YV = VV; YV; YV = YV === eV ? null : YV.parentElement)
          if (JV.has(YV)) return YV;
        return null
      },
      dJ = (VV, eV) => !VV.root || VV.root === eV || eV.matches(fJ) && VV.root.contains(eV);
    const OJ = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new eJ, this.tabStripNav = new lJ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, bV.e)(kV.v), this.dpadRepeats = new Map(kV.F.map((VV => [VV, (0, bV.e)(kV.H)]))), this.stickRepeat = new kV.d((0, bV.e)(kV.fb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const VV = ZV.c.register({
            name: "focus",
            isActive: () => (0, rV.j)() && "focus" === XJ(),
            onFrame: VV => {
              this.onFrame(VV)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: VV => (0, ZV.g)(VV) || VV === (0, wV.i)("menuConfirm") && (0, mV.K)((0, rV.e)())
          }),
          eV = (0, xJ.k)((VV => {
            const eV = (0, xJ.r)(VV);
            null === VV.memoryKey && this.memory.forget(eV), eV === this.layerKey && (this.layerKey = null)
          }));
        let xV = -1 / 0;
        const JV = yV.f.onFrame((VV => {
            (0, rV.j)() || VV.timestampMs - xV < 100 || (xV = VV.timestampMs, wJ())
          })),
          YV = VV => {
            VV.isTrusted && VV.target instanceof Element && yV.f.getActivePad() && this.noteChosenStop(VV.target)
          };
        return document.addEventListener("click", YV, !0), () => {
          VV(), eV(), JV(), document.removeEventListener("click", YV, !0), this.deactivate()
        }
      }
      noteChosenStop(VV) {
        var eV, xV;
        const JV = wJ();
        if (!JV || !JV.root.contains(VV)) return;
        const YV = null !== (eV = null === (xV = VV.closest(".Dropdown-root")) || void 0 === xV ? void 0 : xV.querySelector(".Dropdown-control")) && void 0 !== eV ? eV : VV,
          UV = IJ(YV, JV.root, this.getEnabledCandidates(JV.root));
        if (!UV) return;
        const yV = (0, xJ.r)(JV.layer);
        yV === this.layerKey && JV.root === this.layerRoot || this.beginLayer(JV, yV), this.wasActive ? this.setFocus(UV, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = UV, this.lastFocusedCentre = (0, mV.D)(UV), this.rememberFocus(UV), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      notify() {
        for (const VV of this.listeners) VV()
      }
      deactivate() {
        var VV;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const VV of this.dpadRepeats.values()) VV.reset();
          this.stickRepeat.reset(), null !== (VV = this.focused) && void 0 !== VV && VV.isConnected && sJ(this.focused, null, (0, mV.D)(this.focused)), this.notify()
        }
      }
      setFocus(VV) {
        var eV;
        let {
          scroll: xV = !0,
          byUser: JV = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (JV && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), VV === this.focused) return;
        const YV = null !== (eV = this.focused) && void 0 !== eV && eV.isConnected ? this.focused : null;
        if (this.focused = VV, VV) {
          xV && (VV.classList.add(zJ), VV.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), JV && ((VV, eV) => {
            const xV = eV.closest("[data-pad-friends-column]");
            xV && VV && !xV.contains(VV) && (Lx = new WeakRef(VV))
          })(YV, VV);
          const eV = (0, mV.D)(VV);
          this.lastFocusedCentre = eV, this.movedInLayer && this.rememberFocus(VV), sJ(YV, VV, eV), "false" === VV.getAttribute("aria-pressed") && VV.closest("[data-pad-select-on-focus]") && (0, mV.c)(VV)
        } else YV && sJ(YV, null, (0, mV.D)(YV));
        this.notify()
      }
      rememberFocus(VV) {
        const eV = this.layerRoot;
        this.layerKey && eV && this.memory.remember(this.layerKey, VV, eV, (() => this.getEnabledCandidates(eV)))
      }
      noteCursorActivation(VV) {
        const eV = wJ();
        if (!eV || !eV.root.contains(VV)) return;
        const xV = this.getEnabledCandidates(eV.root),
          JV = new Set(xV);
        let YV = VV;
        for (; YV && !JV.has(YV);) YV = YV === eV.root ? null : YV.parentElement;
        if (!(YV instanceof HTMLElement)) return;
        const UV = (0, xJ.r)(eV.layer);
        this.memory.enter(UV), this.memory.remember(UV, YV, eV.root, (() => xV))
      }
      notePageEnteredByCursor(VV) {
        return this.memory.enter(VV)
      }
      recallStop(VV, eV) {
        return this.findRemembered(VV, eV)
      }
      focusWhenFound(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: VV,
          untilMs: performance.now() + eV,
          holdWhile: xV
        }
      }
      getEnabledCandidates(VV) {
        return (0, dV.f)(VV).filter((VV => !(0, dV.v)(VV)))
      }
      onFrame(VV) {
        var eV;
        const xV = wJ();
        if (!xV) return;
        const JV = null !== (eV = this.findOpenDropdown(xV)) && void 0 !== eV ? eV : xV,
          YV = performance.now(),
          UV = (0, xJ.r)(JV.layer);
        if (UV !== this.layerKey || JV.root !== this.layerRoot) {
          const eV = this.focused;
          if (null !== this.layerKey && JV.root === this.layerRoot && eV && (0, dV.r)(eV, JV.root)) this.continueLayer(UV, eV), this.wasActive || this.resume(JV.root, YV);
          else {
            const eV = !this.wasActive && !VV.wokeDevice,
              yV = "death" === this.layerKind || eV,
              pV = this.enterLayer(JV, UV);
            "popup" !== JV.layer.kind || JV !== xV || pV ? "menu" === JV.layer.kind && yV && "inGame" === QV.b.get("gameState") && !(0, yx.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = YV + GJ.e) : (this.pressGuardExtends = eV, this.pressGuardUntilMs = YV + (eV ? GJ.e : yV ? 500 : 250))
          }
        } else this.wasActive || this.resume(JV.root, YV);
        if (this.layerKind = JV.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), VV.wokeDevice && this.focusPointedStop(JV.root), this.validateFocus(JV, YV), YV < this.pressGuardUntilMs && this.pressGuardExtends && (VV.wasPressed((0, wV.i)("menuConfirm")) || VV.wasPressed((0, wV.i)("menuBack"))) && (this.pressGuardUntilMs = YV + GJ.e), YV >= this.pressGuardUntilMs && this.handleButtons(VV, JV)) return;
        const yV = "hybrid" === tJ();
        if (yV && (VV => {
            const eV = vJ();
            return eV !== qJ && (qJ = eV, jJ.lock()), jJ.update(VV, (0, vV.i)().moveDeadzone)
          })(VV.leftStick)) return pV = this.getHandoff(), BJ = rJ(pV), bJ = vJ(), void ZV.c.handOffHeldInput();
        var pV;
        this.handleDirections(VV, JV, YV, !yV), this.handleScroll(VV, JV)
      }
      findOpenDropdown(VV) {
        const eV = VV.root.querySelector(fJ);
        if (!eV || !(0, dV.n)(eV)) return null;
        let xV = this.dropdownLayers.get(eV);
        return xV || (this.dropdownLayerCounter++, xV = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: VV.layer.kind,
          getRoot: () => eV,
          close: () => {
            (0, mV.m)(eV)
          },
          memoryKey: null
        }, this.dropdownLayers.set(eV, xV)), {
          layer: xV,
          root: eV,
          order: VV.order
        }
      }
      focusPointedStop(VV) {
        const eV = (0, rV.e)(),
          xV = eV ? document.elementFromPoint(eV.x, eV.y) : null;
        if (!xV || !VV.contains(xV)) return;
        const JV = IJ(xV, VV, this.getEnabledCandidates(VV));
        JV && this.setFocus(JV, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(VV, eV) {
        const xV = this.beginLayer(VV, eV),
          JV = TJ();
        return JV && dJ(JV, VV.root) ? (this.takeOver(VV.root, JV, this.enteredLayerAtMs), xV) : (this.restoreLayerFocus(VV.root, xV), xV)
      }
      beginLayer(VV, eV) {
        return this.layerKey = eV, this.layerRoot = VV.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(eV)
      }
      restoreLayerFocus(VV, eV) {
        const xV = eV && this.layerKey ? this.findRemembered(VV, this.layerKey) : null;
        this.restoredFromMemory = null !== xV, this.setFocus(null !== xV && void 0 !== xV ? xV : this.pickInitial(VV, {
          waitForContent: !0
        }))
      }
      continueLayer(VV, eV) {
        this.layerKey = VV;
        const xV = this.memory.enter(VV);
        this.restoreOnFocusLoss = xV, this.movedInLayer && !xV && this.rememberFocus(eV)
      }
      resume(VV, eV) {
        var xV;
        const JV = TJ();
        JV && dJ(JV, VV) ? this.takeOver(VV, JV, eV) : null !== (xV = this.focused) && void 0 !== xV && xV.isConnected && sJ(null, this.focused, (0, mV.D)(this.focused))
      }
      pickPreferred(VV) {
        var eV;
        return null !== (eV = this.layerKey ? this.findRemembered(VV, this.layerKey) : null) && void 0 !== eV ? eV : this.pickInitial(VV, {
          waitForContent: !0
        })
      }
      findRemembered(VV, eV) {
        return this.memory.has(eV) ? this.memory.recall(eV, this.getEnabledCandidates(VV)) : null
      }
      getHandoff() {
        var VV, eV, xV;
        const JV = null !== (VV = this.focused) && void 0 !== VV && VV.isConnected ? this.focused : null,
          YV = null !== (eV = this.layerRoot) && void 0 !== eV && eV.isConnected ? this.layerRoot : null;
        return {
          point: JV ? (0, mV.D)(JV) : null !== (xV = this.lastFocusedCentre) && void 0 !== xV ? xV : this.getLayerStartPoint(YV),
          element: JV,
          direction: null
        }
      }
      getLayerStartPoint(VV) {
        if (!VV) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const eV = this.pickInitial(VV, {
          includeDisabled: !0
        });
        return (0, mV.D)(null !== eV && void 0 !== eV ? eV : VV)
      }
      takeOver(VV, eV, xV) {
        const {
          element: JV,
          direction: YV,
          point: UV
        } = eV, yV = JV instanceof HTMLElement && (0, dV.r)(JV, VV) ? JV : null;
        if (!YV) {
          const eV = this.focused;
          return yV ? this.setFocus(yV, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(VV, UV), void(this.focused && this.focused === eV && this.focused.isConnected && sJ(null, this.focused, (0, mV.D)(this.focused)))
        }
        if (this.dpadRepeats.get(YV).update(!0, xV), yV) return this.setFocus(yV, {
          scroll: !1,
          byUser: !0
        }), void this.move(VV, YV, xV, !0);
        const pV = this.getEnabledCandidates(VV),
          QV = pV.map(SJ),
          nV = qx(new DOMRect(UV.x, UV.y, 0, 0), QV, YV),
          wV = nV >= 0 ? nV : Ax(UV, QV);
        this.setFocus(wV >= 0 ? pV[wV] : this.pickInitial(VV), {
          byUser: !0
        })
      }
      focusNearest(VV, eV) {
        const xV = this.getEnabledCandidates(VV),
          JV = Ax(eV, xV.map(SJ));
        this.setFocus(JV >= 0 ? xV[JV] : this.pickInitial(VV), {
          byUser: !0
        })
      }
      pickDefault(VV) {
        let {
          includeDisabled: eV = !1,
          exclude: xV = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const JV = [...VV.querySelectorAll(LJ)].filter((JV => (null === xV || void 0 === xV || !xV.has(JV)) && (eV ? (0, dV.x)(JV, VV) : (0, dV.r)(JV, VV)))),
          YV = CJ(JV.map(DJ));
        return YV >= 0 ? JV[YV] : null
      }
      pickNewAreaStart(VV, eV) {
        const xV = [...VV.querySelectorAll(HJ)].filter(dV.n);
        for (const JV of [...(0, dV.h)(VV), ...xV]) {
          if (eV.has(JV)) continue;
          const VV = this.getEnabledCandidates(JV),
            xV = CJ(VV.map(DJ));
          if (xV >= 0) return VV[xV]
        }
        return null
      }
      pickInitial(VV) {
        let {
          includeDisabled: eV = !1,
          waitForContent: xV = !1,
          enteredAtMs: JV = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const YV = this.pickDefault(VV, {
          includeDisabled: eV
        });
        if (YV) return YV;
        const UV = VV => eV ? (0, dV.f)(VV) : this.getEnabledCandidates(VV);
        let yV = [];
        for (const vV of (0, dV.h)(VV))
          if (yV = UV(vV), yV.length > 0) break;
        if (0 === yV.length) {
          if (xV && performance.now() - JV < 1e4 && (0, dV.m)(VV)) return null;
          yV = UV(VV)
        }
        const pV = yV.map(SJ),
          QV = DV(null),
          nV = yV.filter(((VV, eV) => iV(pV[eV], QV))),
          wV = nV.length > 0 ? nV : yV,
          ZV = CJ(wV.map(DJ));
        return ZV >= 0 ? wV[ZV] : null
      }
      validateFocus(VV, eV) {
        if (this.pendingFocus) {
          var xV, JV;
          const YV = this.pendingFocus.find();
          if (YV && (0, dV.r)(YV, VV.root)) return this.pendingFocus = null, void this.setFocus(YV, {
            byUser: !0
          });
          eV > this.pendingFocus.untilMs && (null === (xV = (JV = this.pendingFocus).holdWhile) || void 0 === xV || !xV.call(JV)) && (this.pendingFocus = null)
        }
        const YV = this.focused,
          UV = !!YV && (0, dV.r)(YV, VV.root);
        if (!(!UV && YV && YV === this.lastActivated && eV - this.lastActivatedAtMs < 5e3 && VV.root.contains(YV) && (0, dV.n)(YV) && (0, dV.v)(YV))) {
          if (!UV && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = eV, void this.restoreLayerFocus(VV.root, !0);
          if ((!UV || !this.movedInLayer && !this.scrolledInLayer) && !(eV - this.lastRefocusCheckMs < (UV ? 200 : 50)))
            if (this.lastRefocusCheckMs = eV, UV) {
              const xV = eV - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(VV.root) : null,
                JV = null !== xV && void 0 !== xV ? xV : this.restoredFromMemory ? null : this.pickDefault(VV.root);
              JV && JV !== YV && this.setFocus(JV)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const eV = this.pendingFocus;
                return this.focusNearest(VV.root, this.lastFocusedCentre), void(this.pendingFocus = eV)
              }
              this.setFocus(this.pickPreferred(VV.root))
            }
        }
      }
      handleButtons(VV, eV) {
        if (VV.wasPressed((0, wV.i)("menuToggleCursor"))) return FJ(this.getHandoff()), !0;
        if (VV.wasPressed((0, wV.i)("menuBack"))) {
          const VV = (0, mV.m)(eV.root);
          return VV ? this.setFocus(VV, {
            byUser: !0
          }) : fx(this, eV.root) || ((0, mV.g)(eV.root) ? this.returnToOpener(eV.root) : this.backToStrip(eV.root) || ZJ()), !0
        }
        const xV = (0, wV.i)("menuConfirm");
        var JV, YV;
        VV.wasPressed(xV) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (JV = null === (YV = this.focused) || void 0 === YV ? void 0 : YV.getAttribute("data-pad-repeat")) && void 0 !== JV ? JV : null, this.confirmRepeated = VV.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (VV.wasReleased(xV)) {
          const VV = this.confirmPressedOn;
          if (this.confirmPressedOn = null, VV && !this.confirmRepeated && VV === this.focused && VV.isConnected && !(0, dV.v)(VV)) {
            const xV = VV.matches("[data-pad-tab]") ? VV.closest(KJ) : null;
            xV ? this.enterTab(VV, xV, eV.root, performance.now()) : this.activate(VV)
          }
          return !0
        }
        return this.repeatConfirm(VV, xV), Ox(this, VV, eV)
      }
      repeatConfirm(VV, eV) {
        const xV = this.confirmPressedOn;
        xV && null !== this.confirmRepeatKey && VV.isHeld(eV) && (xV === this.focused && xV.isConnected && !(0, dV.v)(xV) && xV.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? xV.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(xV)) : this.confirmRepeatKey = null)
      }
      backToStrip(VV) {
        const eV = this.focused;
        if (!(0, vV.i)().menuBackToCategories) return !1;
        const xV = null !== eV && void 0 !== eV && eV.isConnected ? this.tabStripNav.backToStrip(eV, this.getEnabledCandidates(VV), VV) : null;
        return xV && this.setFocus(xV, {
          byUser: !0
        }), null !== xV
      }
      returnToOpener(VV) {
        const eV = this.lastActivatedKey;
        eV && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var xV;
          return null !== (xV = this.getEnabledCandidates(VV).find((VV => (0, mV.F)(VV) === eV))) && void 0 !== xV ? xV : null
        })))
      }
      activate(VV) {
        var eV;
        if ((0, WJ.e)(VV) || (0, mV.G)(VV)) return;
        this.lastActivatedKey = null !== (eV = (0, mV.F)(VV)) && void 0 !== eV ? eV : this.lastActivatedKey, this.lastActivated = VV, this.lastActivatedAtMs = performance.now(), this.rememberFocus(VV);
        const xV = this.layerRoot;
        if (xV) {
          const eV = new Set(xV.querySelectorAll(LJ)),
            JV = new Set(xV.querySelectorAll(`[data-pad-initial-area], ${HJ}`)),
            YV = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var YV;
            return (0, dV.r)(VV, xV) ? null : null !== (YV = this.pickDefault(xV, {
              exclude: eV
            })) && void 0 !== YV ? YV : this.pickNewAreaStart(xV, JV)
          }), 5e3, (() => VV.isConnected && (0, dV.v)(VV) && performance.now() - YV < 6e4))
        }(0, mV.c)(VV), (0, mV.k)(VV)
      }
      handleDirections(VV, eV, xV, JV) {
        const YV = Wx(eV.layer.kind) ? (0, wV.i)("chat") : null;
        for (const pV of kV.F) {
          this.dpadRepeats.get(pV).update(VV.isHeld(pV), xV) && (pV !== YV || VV.wasPressed(pV)) && this.move(eV.root, pV, xV, !0)
        }
        const UV = JV ? (0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          yV = this.stickRepeat.update((0, kV.gb)(UV), xV);
        if (yV && this.move(eV.root, yV, xV, !0), this.retryMove && xV >= this.retryMove.atMs) {
          const {
            direction: VV
          } = this.retryMove;
          this.retryMove = null, this.move(eV.root, VV, xV, !1)
        }
      }
      move(VV, eV, xV, JV) {
        var YV;
        let UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (YV = this.tabOpenWait) || void 0 === YV ? void 0 : YV.wait) && eV === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const yV = this.focused;
        if (!yV || !yV.isConnected) {
          const eV = this.pickInitial(VV);
          return void(eV && this.setFocus(eV, {
            byUser: !0
          }))
        }
        const pV = "Left" === eV || "Right" === eV,
          QV = pV ? (0, WJ.e)(yV) : null;
        if (QV) return void QV.adjust("Left" === eV ? -1 : 1);
        const nV = VV => null !== VV.closest("[data-pad-friends-column]"),
          wV = nV(yV),
          ZV = SJ(yV),
          vV = pV || yV.closest(KJ) ? null : (VV => {
            const eV = new Map;
            return xV => {
              const JV = xV.closest(KJ);
              if (!JV) return !1;
              let YV = eV.get(JV);
              if (void 0 === YV) {
                const xV = SJ(JV);
                YV = jx(VV, xV) && (xV.right <= VV.left || xV.left >= VV.right), eV.set(JV, YV)
              }
              return YV
            }
          })(ZV),
          rV = null !== yV.closest(mJ),
          kV = this.getEnabledCandidates(VV).filter((VV => VV !== yV && (pV || nV(VV) === wV) && !(null !== vV && void 0 !== vV && vV(VV)) && (rV || !VV.closest(mJ)))),
          bV = kV.map(SJ),
          EV = MV(yV, "y", VV),
          BV = DV(EV);
        if (!UV && !iV(ZV, BV)) {
          const VV = kV.filter(((VV, eV) => iV(bV[eV], BV)));
          if (VV.length > 0) {
            const eV = {
              x: BV.left + BV.width / 2,
              y: BV.top + BV.height / 2
            };
            return void this.setFocus(VV[Ax(eV, VV.map(SJ))], {
              byUser: !0
            })
          }
        }
        const jV = pV ? ((VV, eV, xV) => {
            const JV = SJ(VV),
              YV = VV.closest(KJ),
              UV = YV ? SJ(YV) : null;
            return eV.map(((eV, yV) => {
              const pV = xV[yV];
              if (pV.bottom > JV.top && pV.top < JV.bottom) return !0;
              const QV = eV.closest(KJ);
              if (YV && UV) return QV !== YV && (null !== QV || pV.bottom <= UV.top || pV.top >= UV.bottom);
              if (QV) return !jx(JV, SJ(QV));
              let nV = VV;
              for (let xV = VV.parentElement; xV && !xV.contains(eV); xV = xV.parentElement) nV = xV;
              const wV = SJ(nV);
              return pV.right > wV.left && pV.left < wV.right
            }))
          })(yV, kV, bV) : void 0,
          qV = pV && !yV.closest(KJ) ? (VV => VV.map((VV => !VV.closest(gJ))))(kV) : void 0,
          tV = ((VV, eV) => {
            const xV = [];
            for (let YV = VV; YV; YV = YV.parentElement) xV.push(YV);
            const JV = new Map;
            return xV.forEach(((VV, eV) => {
              JV.set(VV, xV.length - 1 - eV)
            })), eV.map((VV => {
              for (let eV = VV; eV; eV = eV.parentElement) {
                const VV = JV.get(eV);
                if (void 0 !== VV) return VV
              }
              return -1
            }))
          })(yV, kV),
          FV = pV ? "x" : "y",
          TV = MV(yV, FV, VV);
        let PV = qx(ZV, bV, eV, tV, jV, qV);
        if (PV >= 0 && TV && !TV.contains(kV[PV])) {
          const VV = kV.flatMap(((VV, eV) => TV.contains(VV) ? [eV] : [])),
            xV = eV => eV && VV.map((VV => eV[VV])),
            JV = qx(ZV, VV.map((VV => bV[VV])), eV, VV.map((VV => tV[VV])), xV(jV), xV(qV));
          PV = JV >= 0 ? VV[JV] : PV
        }
        if (PV >= 0) return void this.moveTo(yV, kV[PV], kV, VV, eV, UV);
        if (!JV) return;
        const AV = "Right" === eV || "Down" === eV ? 1 : -1;
        if (TV && RV(TV, FV, AV)) {
          const VV = "y" === FV ? TV.clientHeight : TV.clientWidth;
          gV(TV, FV, AV * VV * .5), this.retryMove = {
            direction: eV,
            atMs: xV + 80
          }
        }
      }
      moveTo(VV, eV, xV, JV, YV, UV) {
        const yV = this.tabStripNav.findTabContent(VV, eV, xV);
        yV && "true" !== VV.dataset.padSelected ? this.openTab(VV, yV, JV, YV) : UV && !yV || this.setFocus(this.tabStripNav.redirect(VV, eV, xV, JV), {
          byUser: !0
        })
      }
      openTab(VV, eV, xV, JV) {
        const YV = eV.parentElement;
        (0, mV.c)(VV), this.focusWhenFound((() => "true" !== VV.dataset.padSelected ? null : eV.isConnected ? this.tabStripNav.pickContentStart(eV, this.getEnabledCandidates(xV), xV) : YV ? this.tabStripNav.pickReplacedContentStart(VV, YV, this.getEnabledCandidates(xV), xV) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: JV
        }
      }
      enterTab(VV, eV, xV, JV) {
        this.move(xV, (VV => {
          const eV = [...VV.querySelectorAll(oJ)].filter((eV => eV.closest(aJ) === VV));
          if (eV.length >= 2) {
            const VV = eV[0].getBoundingClientRect(),
              xV = eV[1].getBoundingClientRect();
            return Math.abs(xV.top - VV.top) > Math.abs(xV.left - VV.left) ? "Right" : "Down"
          }
          const xV = VV.getBoundingClientRect();
          return xV.height > xV.width ? "Right" : "Down"
        })(eV), JV, !1, !0), this.focused !== VV || this.pendingFocus || this.activate(VV)
      }
      handleScroll(VV, eV) {
        const xV = (0, kV.k)(VV.rightStick, .2);
        if (0 === xV.x && 0 === xV.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const JV = VV.dtMs / 1e3;
        for (const UV of ["x", "y"]) {
          var YV;
          const VV = xV[UV];
          if (0 === VV) continue;
          const yV = null !== (YV = MV(this.focused, UV, eV.root)) && void 0 !== YV ? YV : GV(eV.root, UV);
          if (!yV) continue;
          const pV = Math.sign(VV) * VV * VV * 1500 * JV + this.scrollRemainder[UV],
            QV = Math.trunc(pV);
          this.scrollRemainder[UV] = pV - QV, 0 !== QV && (gV(yV, UV, QV), this.scrolledInLayer = !0)
        }
      }
    };
    var VY = xV(8843);
    var eY = xV(9340);
    const xY = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      JY = {
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
          ...xY,
          minIntervalMs: 1e3
        },
        preview: {
          ...xY,
          minIntervalMs: 0
        }
      };
    const YY = new class {
        constructor(VV) {
          this.deps = VV, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = VV => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", VV))
          }
        }
        play(VV, eV) {
          const xV = JY[VV];
          if (!this.deps.isVibrationOn() || xV.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const JV = this.lastPlayedMs[VV];
          if (void 0 !== JV && eV - JV < xV.minIntervalMs) return !1;
          const YV = this.deps.getActuator();
          if (!YV) return !1;
          this.lastPlayedMs[VV] = eV;
          const {
            duration: UV,
            strongMagnitude: yV,
            weakMagnitude: pV
          } = xV;
          try {
            YV.playEffect("dual-rumble", {
              duration: UV,
              strongMagnitude: yV,
              weakMagnitude: pV
            }).catch(this.logFailure)
          } catch (QV) {
            this.logFailure(QV)
          }
          return !0
        }
      }({
        getActuator: () => (VV => {
          const eV = null === VV || void 0 === VV ? void 0 : VV.vibrationActuator;
          return "function" === typeof(null === eV || void 0 === eV ? void 0 : eV.playEffect) ? eV : null
        })(yV.f.getActiveGamepad()),
        isVibrationOn: () => (0, vV.i)().vibration,
        isPadInUse: rV.j
      }),
      UY = VV => {
        YY.play(VV, performance.now())
      };
    var yY = xV(8852),
      pY = xV(3245),
      QY = xV(115),
      nY = xV(40),
      wY = xV(701);
    class ZY {
      constructor(VV) {
        this.deps = VV
      }
      check() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const eV = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!eV) return "skipped";
        const xV = VV ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === xV || this.deps.readReportedVisitId() === xV ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(xV), this.deps.EZ(eV, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const vY = "controllerUsageReportedVisit";
    var rY = xV(1439),
      kY = xV(1838),
      bY = xV(686),
      EY = xV(1542),
      BY = xV(1279);
    const jY = VV => ({
        translationKey: `controller:${VV}`
      }),
      qY = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: jY("padButtonView"),
        Menu: jY("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: jY("padButtonDpadUp"),
        Down: jY("padButtonDpadDown"),
        Left: jY("padButtonDpadLeft"),
        Right: jY("padButtonDpadRight"),
        Home: jY("padButtonHome"),
        LeftStick: jY("padButtonLeftStick"),
        RightStick: jY("padButtonRightStick")
      },
      tY = {
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
          View: jY("padButtonCreate"),
          Menu: jY("padButtonOptions")
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
      FY = (VV, eV) => {
        var xV;
        const JV = null !== (xV = tY[VV][eV]) && void 0 !== xV ? xV : qY[eV];
        return "string" === typeof JV ? JV : (0, YV.u)(BY.c.get().getCurrentLanguageCode(), JV.translationKey)
      },
      TY = VV => {
        let {
          glyph: eV,
          family: xV,
          className: JV
        } = VV;
        const YV = (0, rV.x)(),
          UV = null !== xV && void 0 !== xV ? xV : YV,
          yV = (0, yY.g)(UV, eV);
        return (0, cV.jsx)("span", {
          className: oV()("ControllerGlyph", JV),
          role: "img",
          "aria-label": FY(UV, eV),
          style: {
            "--pad-glyph-mask": `url(${yV})`,
            "--pad-glyph-aspect": (0, yY.d)(UV, eV)
          }
        })
      };
    var PY = xV(2021);
    const AY = VV => {
      let {
        action: eV
      } = VV;
      const {
        t: xV
      } = (0, YV.A)();
      switch (eV.kind) {
        case "reload":
          return (0, cV.jsx)("span", {
            children: xV("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, cV.jsx)(PY.b, {
            text: eV.description ? [{
              icon: eV.icon
            }, ` ${eV.description}`] : [{
              icon: eV.icon
            }]
          });
        case "touchButton":
          return (0, cV.jsx)(PY.b, {
            text: eV.label
          })
      }
    };
    var NY = xV(9346);
    const XY = VV => {
      let {
        hold: eV
      } = VV;
      return (0, cV.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${eV.holdMs}ms`
        },
        children: (0, cV.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, eV.id)
    };
    var MY = xV(9379),
      zY = xV(9386),
      GY = xV(9390),
      WY = xV(9372);
    const RY = () => {
        const {
          gameState: VV
        } = (0, QV.l)(["gameState"]), eV = (0, rV.w)(), [JV, YV] = (0, CV.useState)(!1), [UV, yV] = (0, CV.useState)(!1);
        return (0, CV.useEffect)((() => {
          "inGame" === VV && YV(!0)
        }), [VV]), (0, CV.useEffect)((() => {
          if (!JV) return;
          let VV = null,
            eV = !1;
          return (bY.I ? Promise.all([xV.e(84), xV.e(103), xV.e(296), xV.e(205), xV.e(247), xV.e(246), xV.e(102)]).then((() => xV(41821))).then((VV => VV.startWasmPadGameplay)) : Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(111), xV.e(87), xV.e(85), xV.e(86), xV.e(201), xV.e(251), xV.e(89), xV.e(103), xV.e(202), xV.e(245), xV.e(109), xV.e(257), xV.e(248), xV.e(264), xV.e(233), xV.e(223), xV.e(100), xV.e(265), xV.e(88), xV.e(174), xV.e(266), xV.e(247), xV.e(214)]).then((() => xV(41946))).then((VV => VV.startPadGameplay))).then((xV => {
            eV || (VV = xV())
          })).catch((VV => {
            console.error("Pad gameplay failed to load", VV), eV || yV(!0)
          })), () => {
            var xV;
            eV = !0, null === (xV = VV) || void 0 === xV || xV()
          }
        }), [JV]), (0, CV.useEffect)((() => {
          UV && eV && (yV(!1), rY.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((VV => {
            !0 === VV && (0, kY.reloadBloxd)()
          })))
        }), [UV, eV]), (0, cV.jsxs)(cV.Fragment, {
          children: [(0, cV.jsx)(gY, {}), (0, cV.jsx)(DY, {}), (0, cV.jsx)(iY, {})]
        })
      },
      gY = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, rV.w)(), {
          gameState: xV,
          isUiHidden: JV
        } = (0, QV.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: UV
        } = (0, vV.p)(), yV = (0, NY.e)(), pV = (0, NY.f)(), [nV, ZV] = (0, CV.useState)(GY.e);
        return (0, EY.g)(WY.n, ZV), !eV || UV || JV || "inGame" !== xV || !yV && !nV ? null : (0, cV.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [yV && (0, cV.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, cV.jsx)(TY, {
              glyph: (0, wV.i)("actionButton")
            }), (0, cV.jsx)(AY, {
              action: yV
            }), pV && (0, cV.jsx)("span", {
              className: "PadActionHintMore",
              children: VV("controller:gameplayActionWheelHint")
            })]
          }), nV && (0, cV.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, cV.jsx)(TY, {
              glyph: (0, wV.i)("pickBlock")
            }), (0, cV.jsx)("span", {
              children: VV("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      DY = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, rV.w)(), {
          gameState: xV,
          isUiHidden: JV
        } = (0, QV.l)(["gameState", "isUiHidden"]), [UV, yV] = (0, CV.useState)(MY.e);
        return (0, EY.g)(WY.l, yV), eV && !JV && "inGame" === xV && UV ? (0, cV.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, cV.jsx)("span", {
            children: VV("controller:gameplayDropStack")
          }), (0, cV.jsx)(XY, {
            hold: UV
          })]
        }) : null
      },
      iY = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, rV.w)(), {
          gameState: xV,
          isUiHidden: JV
        } = (0, QV.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: UV
        } = (0, vV.p)(), [yV, pV] = (0, CV.useState)(zY.c);
        return (0, EY.g)(WY.j, pV), eV && !JV && "inGame" === xV && yV ? (0, cV.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!UV && (0, cV.jsx)(TY, {
            glyph: (0, wV.i)("attack")
          }), (0, cV.jsx)("span", {
            children: VV("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var CY = xV(9396),
      aY = xV(2080),
      oY = xV(2693),
      cY = xV(8828);
    const hY = VV => VV && !(0, CY.c)(aY.c.get("shopInfo")),
      lY = () => {
        const VV = "inGame" === (0, QV.l)(["gameState"]).gameState;
        return (0, oY.g)("shopInfo", (() => {
          (0, cY.h)(hY(VV))
        })), (0, CV.useEffect)((() => {
          (0, cY.h)(hY(VV))
        }), [VV]), null
      },
      LY = () => {
        const {
          t: VV
        } = (0, YV.A)(), {
          hideButtonHints: eV
        } = (0, vV.p)();
        (0, rV.x)();
        const xV = (0, oe.o)();
        return (0, CV.useEffect)((() => (() => {
          const VV = ZV.c.register({
              name: "inventory",
              isActive: Yx.isActive,
              onFrame: Yx.onFrame,
              onDeactivate: Yx.onDeactivate,
              wakePressActs: Yx.wakePressActs
            }),
            eV = VV => {
              Yx.noteRealPointer(VV), Yx.shouldBlockRealPointer(VV) && VV.stopPropagation()
            };
          for (const yV of Ux) window.addEventListener(yV, eV, !0);
          const xV = (0, IV.h)((() => {
              "inventory" !== ZV.c.getActiveConsumerName() && Yx.forgetSurface()
            })),
            JV = VV => {
              const eV = VV.target;
              (0, rV.j)() && (0, uV.h)(eV) && eV.closest(Fe) && (0, IV.e)() && (0, IV.l)(eV)
            };
          document.addEventListener("focusout", JV, !0);
          const {
            invalidate: YV,
            onScroll: UV
          } = Yx.targets;
          return document.addEventListener("scroll", UV, !0), window.addEventListener("resize", YV), () => {
            VV(), xV();
            for (const VV of Ux) window.removeEventListener(VV, eV, !0);
            document.removeEventListener("scroll", UV, !0), document.removeEventListener("focusout", JV, !0), window.removeEventListener("resize", YV), Yx.targets.disconnect()
          }
        })()), []), (0, cV.jsxs)(cV.Fragment, {
          children: [(0, cV.jsx)(fV, {
            placer: Yx.ring,
            className: "InventorySlotCursorRing"
          }), xV.showing && !eV && (0, cV.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: SV(xV).map((eV => {
              let {
                actions: JV,
                labelKey: YV
              } = eV;
              return (0, cV.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [JV.map((VV => (0, cV.jsx)(TY, {
                  glyph: (0, wV.i)(VV)
                }, VV))), (0, cV.jsx)("span", {
                  children: VV(`controller:${YV}`)
                }), "inventoryDrop" === YV && xV.dropStackHold && (0, cV.jsx)(XY, {
                  hold: xV.dropStackHold
                })]
              }, YV)
            }))
          })]
        })
      },
      fY = [{
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
      mY = VV => Array.from(VV).map((VV => ({
        type: "char",
        char: VV,
        width: 1
      }))),
      KY = function(VV) {
        return {
          type: "command",
          command: VV,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      HY = [KY("page", 2), KY("otherPage"), KY("caretLeft"), KY("space", 3), KY("caretRight"), KY("close", 1.5), KY("submit", 1.5)],
      uY = [KY("page", 2), KY("otherPage"), KY("caretLeft"), KY("space", 2), KY("caretRight"), KY("newline"), KY("close", 1.5), KY("submit", 1.5)],
      sY = [
        [...mY("1234567890"), KY("backspace")], mY("qwertyuiop/"), mY("asdfghjkl'?"), [KY("shift", 2), ...mY("zxcvbnm,.")]
      ],
      SY = [
        [...mY("1234567890"), KY("backspace")], mY("!@#$%^&*()/"), mY('-_=+[]{};:"'), mY("~`|\\<>'\u20ac\xa3,.")
      ],
      IY = {
        letters: sY,
        accents: [
          [...mY("1234567890"), KY("backspace")], mY("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), mY("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [KY("shift", 2), ...mY("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: SY
      },
      dY = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      OY = (VV, eV) => "letters" === VV ? eV ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === VV ? "symbols" : "accents"
      },
      VU = function(VV, eV) {
        const xV = ((VV, eV) => [...IY[VV], eV ? uY : HY])(VV, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === eV) return xV;
        const JV = Math.min(2, eU(xV[0]) / eV);
        return [Array.from({
          length: eV
        }, ((VV, eV) => ({
          type: "phrase",
          phraseIndex: eV,
          width: JV
        }))), ...xV]
      },
      eU = VV => VV.reduce(((VV, eV) => VV + eV.width), 0),
      xU = VV => Math.max(...VV.map(eU)),
      JU = (VV, eV) => {
        const xV = VV[eV.row];
        let JV = (xU(VV) - eU(xV)) / 2;
        for (let YV = 0; YV < eV.col; YV++) JV += xV[YV].width;
        return JV + xV[eV.col].width / 2
      },
      YU = (VV, eV, xV) => {
        let JV = 0,
          YV = 1 / 0;
        for (let UV = 0; UV < VV[eV].length; UV++) {
          const yV = Math.abs(JU(VV, {
            row: eV,
            col: UV
          }) - xV);
          yV < YV - 1e-9 && (JV = UV, YV = yV)
        }
        return JV
      },
      UU = (VV, eV) => {
        const xV = Math.max(0, Math.min(VV.length - 1, eV.row));
        return {
          row: xV,
          col: Math.max(0, Math.min(VV[xV].length - 1, eV.col))
        }
      },
      yU = (VV, eV, xV) => "once" === VV && eV - xV <= 400 ? "caps" : "off" === VV ? "once" : "off",
      pU = (VV, eV) => "once" === VV && (VV => VV.toLowerCase() !== VV.toUpperCase())(eV) ? "off" : VV,
      QU = (VV, eV, xV) => {
        if ("symbols" === eV || "off" === xV) return VV;
        const JV = VV.toUpperCase();
        return 1 === JV.length ? JV : VV
      };
    var nU = xV(9274);
    const wU = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const ZU = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(VV) {
          return !(VV - this.lastSendMs < 2e3) && (this.lastSendMs = VV, !0)
        }
      },
      vU = {
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
      rU = ["vn", "nameTag"],
      kU = VV => {
        const eV = VV.target instanceof HTMLTextAreaElement && !rU.includes(VV.kind);
        return VU(VV.page, "chat" === VV.kind ? wU.length : 0, eV)
      },
      bU = VV => {
        const eV = VV.getBoundingClientRect(),
          xV = window.innerHeight,
          JV = eV.top + eV.height / 2 < xV / 2 ? "bottom" : "top",
          YV = "bottom" === JV ? xV - eV.bottom - 6 : eV.top - 6;
        return {
          placement: JV,
          maxHeightPx: Math.min(.46 * xV, Math.max(.3 * xV, YV))
        }
      },
      EU = VV => {
        (0, Mx.l)(VV) ? (0, Mx.e)().close(): (OJ.noteChosenStop(VV), VV.blur())
      };
    class BU {
      constructor(VV) {
        this.host = VV, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(VV, eV) {
        this.phraseTexts = VV, this.phrasesFill = eV
      }
      pressKey(VV) {
        const eV = this.host.getState(),
          xV = kU(eV),
          JV = xV[VV.row][VV.col];
        this.host.setState({
          ...eV,
          focus: VV,
          preferredX: JU(xV, VV)
        }), "char" === JV.type ? this.typeChar(JV.char) : "command" === JV.type ? this.runCommand(JV.command) : this.sendPhrase(JV.phraseIndex)
      }
      runCommand(VV) {
        const eV = this.host.getState();
        switch (VV) {
          case "backspace":
            (0, uV.b)(eV.target);
            break;
          case "space":
            (0, uV.f)(eV.target, " ");
            break;
          case "newline":
            (0, uV.f)(eV.target, "\n");
            break;
          case "caretLeft":
            (0, uV.l)(eV.target, -1);
            break;
          case "caretRight":
            (0, uV.l)(eV.target, 1);
            break;
          case "shift": {
            const VV = performance.now();
            this.host.setState({
              ...eV,
              shift: yU(eV.shift, VV, this.lastShiftPressMs)
            }), this.lastShiftPressMs = VV;
            break
          }
          case "page":
          case "otherPage": {
            const xV = OY(eV.page, eV.accentsFirst)[VV];
            this.host.setState({
              ...eV,
              page: xV,
              focus: UU(kU({
                ...eV,
                page: xV
              }), eV.focus)
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
            (0, Mx.l)(eV.target) && (0, Mx.e)().selectNextChannel()
        }
      }
      submit() {
        var VV, eV;
        const {
          target: xV
        } = this.host.getState();
        this.host.hide(), (0, Mx.l)(xV) ? (0, Mx.e)().submit() : (OJ.noteChosenStop(xV), null === (VV = (eV = (0, Mx.i)(xV)).submit) || void 0 === VV || VV.call(eV), document.activeElement === xV && xV.blur())
      }
      close() {
        const {
          target: VV
        } = this.host.getState();
        this.host.hide(), EU(VV)
      }
      typeChar(VV) {
        const {
          target: eV,
          page: xV,
          shift: JV
        } = this.host.getState();
        (0, uV.f)(eV, QU(VV, xV, JV)), this.host.setState({
          ...this.host.getState(),
          shift: pU(JV, VV)
        })
      }
      sendPhrase(VV) {
        if (this.phrasesFill) {
          const {
            target: eV
          } = this.host.getState(), xV = this.phraseTexts[VV];
          xV && (eV.setSelectionRange(0, eV.value.length), (0, uV.f)(eV, xV))
        } else ZU.claim(performance.now()) && (this.host.hide(), (0, Mx.e)().sendLine(this.phraseTexts[VV]))
      }
    }
    var jU = xV(9293);
    const qU = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      tU = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class FU {
      constructor(VV, eV) {
        this.host = VV, this.editor = eV, this.lastDirection = null, this.navRepeat = new kV.d((0, bV.e)(qU)), this.commandRepeats = new Map(fY.filter((VV => {
          let {
            repeats: eV
          } = VV;
          return eV
        })).map((VV => {
          let {
            command: eV
          } = VV;
          return [eV, (0, bV.e)(tU)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const VV of this.commandRepeats.values()) VV.reset()
      }
      onVisibleFrame(VV) {
        const eV = performance.now();
        for (const {
            command: YV,
            action: UV
          }
          of fY) {
          const xV = (0, wV.i)(UV),
            JV = this.commandRepeats.get(YV);
          if ((JV ? JV.update(VV.isHeld(xV), eV) : VV.wasPressed(xV)) && (this.editor.runCommand(YV), !this.host.getState().visible)) return
        }
        if (VV.wasPressed((0, wV.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const xV = this.readNavDirection(VV);
        this.lastDirection = xV;
        const JV = this.navRepeat.update(xV, eV);
        JV && this.navigate(JV)
      }
      onHiddenFrame(VV, eV) {
        var xV;
        if (VV.wasPressed((0, wV.i)("keyboardClose"))) return void EU(eV);
        const JV = (0, wV.i)("keyboardType");
        if (VV.wasPressed(JV)) return ZV.c.consumeButton(JV), void this.host.open(eV);
        const YV = this.readNavDirection(VV),
          UV = null !== YV && YV !== this.lastDirection;
        if (this.lastDirection = YV, !UV || (0, Mx.l)(eV)) return;
        const yV = (null === (xV = wJ()) || void 0 === xV ? void 0 : xV.root.contains(eV)) || null !== eV.closest(".EntireInventoryWrapper");
        EU(eV), yV && ZV.c.handOffHeldInput()
      }
      navigate(VV) {
        const eV = this.host.getState();
        if ("Up" === VV && 0 === eV.focus.row && "chat" === eV.kind) return (0, Mx.e)().stepHistory(), void this.host.setState({
          ...eV
        });
        const xV = ((VV, eV, xV, JV) => {
          if ("Left" === xV || "Right" === xV) {
            const JV = VV[eV.row].length,
              YV = (eV.col + ("Right" === xV ? 1 : -1) + JV) % JV,
              UV = {
                row: eV.row,
                col: YV
              };
            return {
              pos: UV,
              preferredX: JU(VV, UV)
            }
          }
          const YV = (eV.row + ("Down" === xV ? 1 : -1) + VV.length) % VV.length;
          return {
            pos: {
              row: YV,
              col: YU(VV, YV, JV)
            },
            preferredX: JV
          }
        })(kU(eV), eV.focus, VV, eV.preferredX);
        this.host.setState({
          ...eV,
          focus: xV.pos,
          preferredX: xV.preferredX
        })
      }
      readNavDirection(VV) {
        for (const eV of kV.F)
          if (VV.isHeld(eV)) return eV;
        return (0, kV.gb)((0, kV.k)(VV.leftStick, (0, vV.i)().moveDeadzone))
      }
    }
    const TU = ["Up", "Down", "Left", "Right"],
      PU = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const AU = new class {
      constructor() {
        this.state = vU, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new BU(this), this.padInput = new FU(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(VV) {
        const eV = VV.visible !== this.state.visible;
        this.state = VV;
        for (const xV of this.listeners) xV();
        eV && nV.h.QZ(jU.e, VV.visible)
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      install() {
        const VV = ZV.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, uV.h)(document.activeElement),
            onFrame: VV => {
              this.onFrame(VV)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: VV => TU.includes(VV) || !this.state.visible && VV === (0, wV.i)("keyboardType")
          }),
          eV = VV => {
            const eV = VV.target;
            (0, uV.h)(eV) && (eV === this.pendingChatInput || (0, rV.j)() ? this.open(eV) : this.state.visible && eV !== this.state.target && (this.ownedField = null, this.hide()))
          },
          xV = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          JV = VV => {
            VV.isTrusted && this.state.visible && (VV => !VV.repeat && !PU.has(VV.key) && !(0, nU.d)(VV.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(VV.key))(VV) && this.hide()
          },
          YV = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...bU(this.state.target)
            })
          };
        document.addEventListener("focusin", eV, !0), document.addEventListener("focusout", xV, !0), window.addEventListener("keydown", JV, !0), window.addEventListener("resize", YV);
        const UV = nV.h.subscribe(WY.d, (() => {
            this.openChat()
          })),
          yV = nV.h.subscribe(jU.f, (VV => {
            this.openForField(VV)
          }));
        return () => {
          VV(), document.removeEventListener("focusin", eV, !0), document.removeEventListener("focusout", xV, !0), window.removeEventListener("keydown", JV, !0), window.removeEventListener("resize", YV), nV.h.unsubscribe(UV), nV.h.unsubscribe(yV), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const VV = (0, Mx.e)();
        VV ? document.activeElement !== VV.input ? (this.clearPendingChat(), this.pendingChatInput = VV.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), VV.open()) : this.open(VV.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(VV) {
        (0, uV.h)(VV) ? (document.activeElement !== VV && VV.focus(), document.activeElement === VV && this.open(VV)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", VV)
      }
      open(VV) {
        var eV;
        if (this.clearPendingChat(), this.ownedField = VV, this.state.visible && this.state.target === VV) return;
        this.restoreInputMode(), (0, uV.m)(VV), this.savedInputMode = VV.getAttribute("inputmode"), VV.setAttribute("inputmode", "none");
        const xV = {
          ...vU,
          visible: !0,
          target: VV,
          kind: (0, Mx.l)(VV) ? "chat" : null !== (eV = (0, Mx.i)(VV).kind) && void 0 !== eV ? eV : null,
          accentsFirst: (JV = BY.c.get().getCurrentLanguageCode(), dY.has(JV)),
          ...bU(VV)
        };
        var JV;
        const YV = kU(xV),
          UV = ((VV, eV) => {
            for (let xV = 0; xV < VV.length; xV++) {
              const JV = VV[xV].findIndex((VV => "char" === VV.type && VV.char === eV));
              if (-1 !== JV) return {
                row: xV,
                col: JV
              }
            }
            return null
          })(YV, "q");
        this.padInput.reset(), this.setState({
          ...xV,
          focus: UV,
          preferredX: JU(YV, UV)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(vU))
      }
      onFrame(VV) {
        if (this.releaseLostField()) return;
        const eV = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(VV) : (0, uV.h)(eV) && this.padInput.onHiddenFrame(VV, eV)
      }
      releaseLostField() {
        const VV = this.ownedField;
        return !(null === VV || VV.isConnected && document.activeElement === VV) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: VV
        } = this.state;
        VV && (null === this.savedInputMode ? VV.removeAttribute("inputmode") : VV.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var NU = xV(3054);
    const XU = new Map(fY.map((VV => {
        let {
          command: eV,
          action: xV
        } = VV;
        return [eV, xV]
      }))),
      MU = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      zU = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        vn: "controller:keyboardTargetBookTitle"
      },
      GU = VV => {
        const eV = (() => {
          const [, VV] = (0, CV.useReducer)((VV => VV + 1), 0);
          return VV
        })();
        (0, CV.useEffect)((() => {
          if (!VV) return;
          const xV = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const YV of xV) VV.addEventListener(YV, eV);
          document.addEventListener("selectionchange", eV);
          const JV = new MutationObserver(eV);
          return JV.observe(VV, {
            attributeFilter: ["placeholder"]
          }), () => {
            JV.disconnect();
            for (const JV of xV) VV.removeEventListener(JV, eV);
            document.removeEventListener("selectionchange", eV)
          }
        }), [VV, eV])
      },
      WU = VV => {
        VV.preventDefault()
      },
      RU = VV => {
        "mouse" !== VV.pointerType && VV.preventDefault()
      },
      gU = () => {
        var VV;
        const {
          t: eV
        } = (0, YV.A)(), xV = (() => {
          const [VV, eV] = (0, CV.useState)(AU.getState());
          return (0, CV.useEffect)((() => AU.subscribe((() => {
            eV(AU.getState())
          }))), []), VV
        })(), JV = (0, rV.w)(), UV = (0, CV.useRef)(null);
        (0, vV.p)(), (0, rV.x)(), (0, CV.useEffect)((() => {
          const VV = AU.install(),
            eV = null;
          return () => {
            VV(), null === eV || void 0 === eV || eV()
          }
        }), []);
        const yV = (0, CV.useMemo)((() => wU.map((VV => eV(VV)))), [eV]),
          pV = xV.visible && "chat" === xV.kind ? xV.target : null;
        GU(pV);
        const QV = null !== (VV = null === pV || void 0 === pV ? void 0 : pV.value) && void 0 !== VV ? VV : "",
          nV = ((VV, eV, xV) => {
            if (!VV.startsWith("/")) return [];
            const JV = [];
            for (let YV = eV.length - 1; YV >= 0 && JV.length < xV; YV--) {
              const xV = eV[YV].trim();
              xV.startsWith(VV) && xV !== VV && !JV.includes(xV) && JV.push(xV)
            }
            return JV
          })(QV, QV.startsWith("/") ? (0, NU.i)() : [], wU.length),
          ZV = QV.startsWith("/"),
          kV = ZV ? wU.map(((VV, eV) => {
            var xV;
            return null !== (xV = nV[eV]) && void 0 !== xV ? xV : ""
          })) : yV;
        if ((0, CV.useEffect)((() => {
            AU.editor.setPhraseRow(kV, ZV)
          })), (0, CV.useEffect)((() => {
            const VV = UV.current;
            if (VV) return VV.addEventListener("touchstart", WU, {
              passive: !1
            }), () => {
              VV.removeEventListener("touchstart", WU)
            }
          }), [xV.visible]), !xV.visible) return null;
        const bV = kU(xV),
          EV = xU(bV),
          BV = VV => "char" === VV.type ? QU(VV.char, xV.page, xV.shift) : "phrase" === VV.type ? kV[VV.phraseIndex] : (VV => {
            switch (VV) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === xV.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return MU[OY(xV.page, xV.accentsFirst)[VV]];
              case "space":
                return eV("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return eV("chat" === xV.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(VV.command),
          jV = VV => {
            AU.editor.pressKey(VV)
          };
        return (0, cV.jsxs)("div", {
          ref: UV,
          className: oV()(Mx.r, "top" === xV.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: xV.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": bV.length,
            "--pad-keyboard-height": `${xV.maxHeightPx}px`
          },
          onPointerDown: RU,
          onMouseDown: WU,
          children: [(0, cV.jsx)(DU, {
            target: xV.target,
            label: xV.kind ? eV(zU[xV.kind]) : xV.target.placeholder || eV("controller:keyboardTargetText")
          }), (0, cV.jsx)("div", {
            className: "PadKeyboardRows",
            children: bV.map(((VV, eV) => (0, cV.jsx)("div", {
              className: oV()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === VV[0].type
              }),
              children: VV.map(((VV, YV) => {
                const UV = JV && xV.focus.row === eV && xV.focus.col === YV,
                  yV = "command" === VV.type ? XU.get(VV.command) : void 0;
                return (0, cV.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: VV.width / EV * 100 + "%"
                  },
                  children: (0, cV.jsxs)("div", {
                    className: oV()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: UV,
                      PadKeyboardKeyCommand: "command" === VV.type,
                      PadKeyboardKeyPhrase: "phrase" === VV.type,
                      PadKeyboardKeyActive: "command" === VV.type && "shift" === VV.command && "off" !== xV.shift,
                      PadKeyboardKeySubmit: "command" === VV.type && "submit" === VV.command
                    }),
                    role: "button",
                    onClick: () => {
                      jV({
                        row: eV,
                        col: YV
                      })
                    },
                    onTouchEnd: VV => {
                      var xV, JV;
                      VV.preventDefault(), xV = VV.changedTouches[0], JV = VV.currentTarget.getBoundingClientRect(), xV && xV.clientX >= JV.left && xV.clientX <= JV.right && xV.clientY >= JV.top && xV.clientY <= JV.bottom && jV({
                        row: eV,
                        col: YV
                      })
                    },
                    children: [(0, cV.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: BV(VV)
                    }), JV && yV && (0, cV.jsx)(TY, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, wV.i)(yV)
                    })]
                  })
                }, YV)
              }))
            }, eV)))
          })]
        })
      },
      DU = VV => {
        let {
          target: eV,
          label: xV
        } = VV;
        GU(eV);
        const JV = (0, CV.useRef)(null),
          YV = (0, CV.useRef)(null),
          UV = eV instanceof HTMLTextAreaElement;
        (0, CV.useLayoutEffect)((() => {
          const VV = JV.current,
            eV = YV.current;
          UV ? VV.scrollTop = eV.offsetTop - VV.clientHeight / 2 : VV.scrollLeft = eV.offsetLeft - VV.clientWidth / 2
        }));
        const {
          value: yV,
          start: pV,
          end: QV
        } = (0, uV.o)(eV), nV = "password" === eV.type ? "\u2022".repeat(yV.length) : yV;
        return (0, cV.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, cV.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: xV
          }), (0, cV.jsxs)("div", {
            ref: JV,
            className: oV()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: UV
            }),
            children: [(0, cV.jsx)("span", {
              children: nV.slice(0, pV)
            }), (0, cV.jsx)("span", {
              ref: YV,
              className: "PadKeyboardCaret"
            }), pV !== QV && (0, cV.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: nV.slice(pV, QV)
            }), (0, cV.jsx)("span", {
              children: nV.slice(QV)
            }), 0 === nV.length && eV.placeholder && eV.placeholder !== xV && (0, cV.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: eV.placeholder
            })]
          })]
        })
      };
    var iU = xV(1473),
      CU = xV(3866);
    const aU = function() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return eV.map(wV.i)
      },
      oU = (VV, eV) => {
        const xV = mx(VV);
        return xV ? [{
          glyphs: [xV],
          labelKey: eV
        }] : []
      },
      cU = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      hU = "--pad-hint-bar-clearance",
      lU = "[data-pad-hint-bar-avoid]",
      LU = VV => {
        const eV = [];
        for (const xV of VV)(0, dV.n)(xV) && eV.push(xV.getBoundingClientRect());
        return eV
      },
      fU = VV => {
        if (!VV) return null;
        const eV = wJ(),
          xV = eV ? LU(((VV, eV) => {
            const xV = VV.closest(lU);
            return xV ? [xV] : ("popup" === eV ? document : VV).querySelectorAll(lU)
          })(eV.root, eV.layer.kind)) : [],
          JV = !eV || eV.root.hasAttribute("data-pad-shows-hud");
        if (((0, CU.h)(null === eV || void 0 === eV ? void 0 : eV.layer.kind, (0, CU.k)()) || JV) && xV.push(...LU(document.querySelectorAll(cU.join(",")))), 0 === xV.length) return null;
        const {
          width: YV,
          height: UV
        } = VV.getBoundingClientRect(), yV = window.innerHeight - 8, pV = (0, CU.r)(yV, {
          width: YV,
          height: UV
        }, window.innerWidth / 2, xV, 8);
        return pV === yV ? null : Math.round(window.innerHeight - pV)
      },
      mU = VV => {
        const eV = document.documentElement.style,
          xV = VV ? `${Math.round(window.innerHeight-VV.getBoundingClientRect().top)}px` : "";
        eV.getPropertyValue(hU) !== xV && (xV ? eV.setProperty(hU, xV) : eV.removeProperty(hU))
      },
      KU = () => {
        const {
          t: VV
        } = (0, YV.A)(), {
          hideButtonHints: eV
        } = (0, vV.p)(), xV = (0, rV.w)(), [JV, UV] = (0, CV.useState)(!1), [yV, nV] = (0, CV.useState)([]), [bV, EV] = (0, CV.useState)(null), BV = (0, CV.useRef)(null), jV = (0, CV.useRef)(null);
        (0, EY.g)(jU.e, (VV => {
          UV(VV)
        })), (0, EY.g)(CU.n, (() => {
          var VV;
          null === (VV = jV.current) || void 0 === VV || VV.call(jV)
        }));
        const qV = xV && !eV && !JV;
        return (0, CV.useEffect)((() => {
          if (!qV) return;
          let VV = null;
          const eV = () => {
            const eV = (() => {
                var VV;
                const eV = ZV.c.getActiveConsumerName(),
                  xV = (0, CU.e)();
                if (xV) {
                  const VV = (0, wV.i)(xV),
                    eV = "emoteWheel" === xV && "wheel" === (0, vV.i)().emoteButton || !(0, kV.M)(ZV.c.getLastFrame().values, VV) ? {
                      glyphs: aU("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [VV],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, wV.w)(VV)],
                    labelKey: "controller:wheelChoose"
                  }, eV, {
                    glyphs: aU("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const JV = wJ();
                if (!JV || "focus" !== eV && "cursor" !== eV) return (0, CU.c)(wV.i);
                const YV = [],
                  UV = {
                    glyphs: aU("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  yV = (0, mV.B)(JV.root),
                  pV = yV ? !(0, dV.v)(yV) : Boolean(JV.layer.close),
                  nV = !yV && JV.layer.closeLabelKey ? JV.layer.closeLabelKey : UV.labelKey,
                  rV = pV ? [{
                    ...UV,
                    labelKey: nV
                  }] : [],
                  bV = Wx(JV.layer.kind) ? [{
                    glyphs: aU("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === eV) return YV.push({
                  glyphs: aU("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), YV.push({
                  glyphs: aU("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), YV.push(...rV), YV.push(...bV), YV.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), NJ() && YV.push({
                  glyphs: aU("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), YV;
                const EV = OJ.getFocused();
                EV && (0, WJ.e)(EV) ? YV.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : EV && (0, mV.G)(EV) ? YV.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : YV.push({
                  glyphs: aU("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const BV = EV ? null === (VV = vx(EV)) || void 0 === VV ? void 0 : VV.dataset.padSecondary : void 0;
                BV && YV.push({
                  glyphs: aU("menuSecondary"),
                  labelKey: BV
                }), YV.push(...null !== EV && void 0 !== EV && EV.closest("[data-pad-friends-column]") ? [UV] : rV), YV.push(...bV);
                const jV = "home" === JV.layer.kind;
                ux(JV.root) || !Cx(JV.root) && !sx(JV) ? jV && YV.push({
                  glyphs: aU("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : YV.push({
                  glyphs: aU("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), jV && (YV.push(...oU("inventory", "controller:menusFriends")), BV || YV.push({
                  glyphs: aU("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), YV.push(...oU("pause", "controller:menusSettings")), YV.push(...oU("leaderboard", "controller:menusNotifications")));
                const qV = QV.b.get("openEverythingMenuName");
                return "inGame" === QV.b.get("gameState") && "popup" !== JV.layer.kind && null !== qV && ((0, Qx.k)(qV) ? YV.push(...oU("leaderboard", "controller:menusClose")) : qV !== px.q.LOBBY_LEADERBOARD && YV.push(...oU("leaderboard", "controller:menusLobby"))), YV.push({
                  glyphs: aU("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), YV
              })(),
              xV = fU(BV.current),
              JV = ((VV, eV) => `${VV.map((VV=>`${VV.glyphs.join("+")}:${VV.labelKey}`)).join("|")}@${eV}`)(eV, xV);
            JV !== VV && (VV = JV, (0, pV.unstable_batchedUpdates)((() => {
              nV(eV), EV(xV)
            }))), mU(BV.current)
          };
          eV(), jV.current = eV;
          const xV = requestAnimationFrame(eV),
            JV = setInterval(eV, 150);
          return () => {
            jV.current = null, cancelAnimationFrame(xV), clearInterval(JV), mU(null)
          }
        }), [qV]), (0, CV.useLayoutEffect)((() => {
          if (!qV) return;
          if (0 === yV.length) return void mU(null);
          const VV = fU(BV.current);
          VV === bV ? mU(BV.current) : EV(VV)
        }), [qV, yV, bV]), qV && 0 !== yV.length ? (0, cV.jsx)("div", {
          ref: BV,
          className: "PadButtonHintBar SmallTextBold",
          style: null === bV ? void 0 : {
            bottom: bV
          },
          "aria-hidden": !0,
          children: yV.map((eV => (0, cV.jsxs)("div", {
            className: "PadButtonHint",
            children: [eV.glyphs.map((VV => (0, cV.jsx)(TY, {
              glyph: VV,
              className: "PadButtonHintGlyph"
            }, VV))), (0, cV.jsx)("span", {
              children: VV(eV.labelKey)
            })]
          }, eV.labelKey)))
        }) : null
      };
    var HU = xV(1840);
    const uU = [dV.c, "label", "[data-pad-slider]"].join(","),
      sU = "data-pad-cursor-probe",
      SU = VV => {
        var eV;
        const xV = (VV => {
          const eV = [];
          for (let JV = VV; JV && JV !== document.body && JV !== document.documentElement && (eV.push(JV), !(eV.length > 8)); JV = JV.parentElement);
          const xV = document.documentElement.classList.contains(rV.p) ? eV[eV.length - 1] : void 0;
          null === xV || void 0 === xV || xV.setAttribute(sU, "");
          try {
            return eV.map((VV => ({
              element: VV,
              cursor: getComputedStyle(VV).cursor
            })))
          } finally {
            null === xV || void 0 === xV || xV.removeAttribute(sU)
          }
        })(VV);
        if ("pointer" !== (null === (eV = xV[0]) || void 0 === eV ? void 0 : eV.cursor)) return null;
        let JV = 0;
        for (; JV + 1 < xV.length && "pointer" === xV[JV + 1].cursor;) JV++;
        return xV[JV].element
      },
      IU = (VV, eV, xV, JV) => {
        const YV = JV.root.contains(VV) ? JV.root : null;
        for (let UV = VV; UV && UV !== document.body && UV !== document.documentElement; UV = UV.parentElement) {
          if (UV instanceof HTMLElement && XV(UV, eV) && RV(UV, eV, xV)) return UV;
          if (UV === YV) break
        }
        return "home" === JV.layer.kind || "gamePage" === JV.layer.kind ? ((VV, eV) => {
          const xV = document.scrollingElement;
          return xV instanceof HTMLElement && ![document.documentElement, document.body].some((eV => {
            const xV = getComputedStyle(eV),
              JV = "y" === VV ? xV.overflowY : xV.overflowX;
            return "hidden" === JV || "clip" === JV
          })) && RV(xV, VV, eV) ? xV : null
        })(eV, xV) : null
      };
    const dU = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, bV.e)(kV.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const VV = ZV.c.register({
              name: "cursor",
              isActive: () => "cursor" === XJ(),
              onFrame: VV => {
                this.onFrame(VV)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: VV => (0, ZV.g)(VV) || VV === (0, wV.i)("menuConfirm") && (0, mV.K)((0, rV.e)())
            }),
            eV = (0, xJ.k)((VV => {
              const eV = VV.getRoot();
              eV && this.layerPoints.delete(eV), eV === this.layerRoot && (this.layerRoot = null)
            })),
            xV = nV.h.subscribe("appManagerUpdated|activeInputDevice", (VV => {
              "gamepad" !== VV && this.active && !this.hidden && this.hide()
            }));
          return () => {
            VV(), eV(), nV.h.unsubscribe(xV), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, rV.j)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.QZ()
        }
        activate(VV) {
          this.active = !0, this.hidden = !1;
          const eV = TJ();
          !eV || eV.root && eV.root !== VV.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(VV), this.jumpTo(eV.point))
        }
        jumpTo(VV) {
          this.state = {
            x: VV.x,
            y: VV.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.QZ())
        }
        onFrame(VV) {
          const eV = wJ();
          if (!eV) return;
          if (this.active || this.activate(eV), this.followPage(eV)) return;
          this.followLayer(eV);
          const xV = VV.wokeDevice ? (0, rV.e)() : null;
          if (xV && this.jumpTo(xV), !(0, rV.j)()) return void this.hide();
          const JV = (0, wV.i)("menuToggleCursor");
          if (VV.wasPressed(JV)) return ZV.c.consumeButton(JV), void FJ(this.getHandoff(null));
          if (this.handBackToFocus(VV)) return;
          const YV = (0, wV.i)("menuConfirm"),
            UV = (0, wV.i)("menuSecondary");
          if (VV.wasPressed((0, wV.i)("menuBack"))) return (0, mV.m)(eV.root) || (0, mV.g)(eV.root) || ZJ(), void this.QZ();
          if (dx(null, VV, eV)) return VV.wasReleased(YV) && this.press && (this.updateHit(!1), this.updateConfirm(VV, YV)), void this.QZ();
          if (document.pointerLockElement) return void this.hide();
          const yV = MJ() ? {
              x: 0,
              y: 0
            } : (VV => {
              const eV = (VV, eV) => (VV ? 1 : 0) - (eV ? 1 : 0);
              return {
                x: eV(VV.isHeld("Right"), VV.isHeld("Left")),
                y: eV(VV.isHeld("Down"), VV.isHeld("Up"))
              }
            })(VV),
            pV = (0, vV.i)().moveDeadzone,
            QV = ((VV, eV) => {
              const xV = (0, kV.k)(VV, tV(eV));
              return Math.hypot(xV.x, xV.y)
            })(VV.leftStick, pV) > 0 || 0 !== yV.x || 0 !== yV.y;
          if (this.hidden) {
            const eV = VV.wasPressed(YV),
              xV = VV.wasPressed(UV);
            if (!QV && !PV(VV.rightStick) && !eV && !xV && !VV.wokeDevice) return void this.QZ();
            if (this.hidden = !1, this.updateHit(!1), eV || xV) return eV && (this.press = {
              kind: "ignored"
            }, VV.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.QZ()
          }
          this.movePendingPageStart(QV);
          const nV = this.getPoint();
          this.state = TV(this.state, {
            stick: VV.leftStick,
            moveDeadzone: pV,
            dpad: yV,
            dtMs: VV.dtMs,
            cursorSpeedPercent: (0, vV.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const bV = this.state.x !== nV.x || this.state.y !== nV.y,
            EV = [YV, UV].some((eV => VV.wasPressed(eV) || VV.wasReleased(eV)));
          (bV || EV || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(bV), this.updateConfirm(VV, YV), this.updateSecondary(VV, UV), this.updateScroll(VV, eV), this.QZ()
        }
        followPage(VV) {
          const eV = "home" === VV.layer.kind || "gamePage" === VV.layer.kind,
            xV = this.page;
          if (this.page = eV ? {
              key: (0, xJ.r)(VV.layer),
              root: VV.root
            } : null, !this.page || !xV || xV.root !== VV.root || xV.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(VV), "hybrid" === tJ()) return BJ = null, bJ = null, jJ.lock(), !0;
          const {
            key: JV
          } = this.page;
          return this.pendingPageStart = {
            root: VV.root,
            key: JV,
            returning: OJ.notePageEnteredByCursor(JV),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(VV) {
          const eV = this.pendingPageStart;
          if (!eV) return;
          if (VV || eV.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const xV = eV.returning ? OJ.recallStop(eV.root, eV.key) : null;
          if (!xV && eV.returning && performance.now() - eV.enteredAtMs < 1e3) return;
          const JV = null !== xV && void 0 !== xV ? xV : OJ.pickInitial(eV.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: eV.enteredAtMs
          });
          JV && (this.pendingPageStart = null, this.jumpTo((0, mV.D)(JV)))
        }
        setLayer(VV) {
          this.layerRoot = VV.root, this.layerOrder = VV.order
        }
        followLayer(VV) {
          var eV;
          if (VV.root === this.layerRoot) return;
          null !== (eV = this.layerRoot) && void 0 !== eV && eV.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const xV = this.layerPoints.get(VV.root),
            JV = xV && VV.order <= this.layerOrder ? xV : OJ.getLayerStartPoint(VV.root);
          this.setLayer(VV), this.jumpTo(JV)
        }
        getHandoff(VV) {
          var eV;
          return {
            point: this.getPoint(),
            element: null !== (eV = this.interactive) && void 0 !== eV ? eV : this.findDraggedSliderNearby(),
            direction: VV
          }
        }
        findDraggedSliderNearby() {
          const VV = this.draggedSlider;
          if (null === VV || void 0 === VV || !VV.isConnected) return null;
          const eV = VV.getBoundingClientRect(),
            {
              y: xV
            } = this.getPoint();
          return xV >= eV.top - 40 && xV <= eV.bottom + 40 ? VV : null
        }
        handBackToFocus(VV) {
          if (!MJ()) return !1;
          const eV = kV.F.find((eV => VV.wasPressed(eV)));
          return !!eV && (xV = this.getHandoff(eV), BJ = rJ(xV), bJ = null, jJ.lock(), ZV.c.handOffHeldInput(), !0);
          var xV
        }
        getAssistContext() {
          const VV = this.interactive;
          if (null === VV || void 0 === VV || !VV.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const eV = VV.getBoundingClientRect();
          if (eV.width > .4 * window.innerWidth || eV.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const xV = (0, vV.i)().cursorMagnetism && !(0, HU.b)(VV) && !VV.closest("[data-pad-slider]"),
            JV = this.magnet && this.magnet !== VV && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : eV;
          return {
            overInteractive: !0,
            magnetTarget: xV ? {
              x: JV.left + JV.width / 2,
              y: JV.top + JV.height / 2
            } : null
          }
        }
        updateHit(VV) {
          this.lastHitTestMs = performance.now();
          const eV = this.getPoint(),
            xV = document.elementFromPoint(eV.x, eV.y),
            JV = xV && !(0, BV.q)(xV) && (VV => {
              var eV;
              const xV = wJ();
              return !(xV && !xV.root.contains(VV) && !VV.closest(".tooltip-container")) || !(null !== (eV = document.getElementById("root")) && void 0 !== eV && eV.contains(VV))
            })(xV) ? xV : null;
          if (JV !== this.hit) return (0, mV.r)(this.hit, JV, eV), this.hit = JV, void this.setInteractive(JV ? (VV => {
            const eV = VV.closest(uU);
            if (eV) {
              var xV, JV;
              const VV = null !== (xV = null === (JV = eV.parentElement) || void 0 === JV ? void 0 : JV.closest("[data-pad-focusable]")) && void 0 !== xV ? xV : eV;
              return (0, dV.v)(VV) ? {
                element: null,
                magnet: null
              } : {
                element: VV,
                magnet: eV
              }
            }
            const YV = SU(VV);
            return {
              element: YV,
              magnet: YV
            }
          })(JV) : {
            element: null,
            magnet: null
          });
          VV && JV && (0, mV.r)(JV, JV, eV)
        }
        setInteractive(VV) {
          let {
            element: eV,
            magnet: xV
          } = VV;
          this.interactive = eV, this.magnet = xV
        }
        clearHover() {
          this.hit && (0, mV.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const VV = this.hit;
          if (!VV || (0, mV.G)(VV)) return {
            kind: "ignored"
          };
          const eV = (0, WJ.e)(VV),
            xV = VV.closest("[data-pad-slider]");
          return eV && xV ? {
            kind: "slider",
            slider: xV,
            adjuster: eV
          } : ((0, mV.u)(VV, this.getPoint()), {
            kind: "pointer",
            target: VV
          })
        }
        applySliderFraction(VV) {
          var eV;
          const xV = VV.slider.getBoundingClientRect(),
            JV = xV.height > xV.width,
            YV = null === (eV = VV.slider.querySelector("[data-pad-slider-handle]")) || void 0 === eV ? void 0 : eV.getBoundingClientRect(),
            UV = YV ? JV ? YV.height : YV.width : 0,
            yV = (JV ? xV.height : xV.width) - UV;
          if (yV <= 0) return;
          const pV = JV ? xV.bottom - UV / 2 - this.state.y : this.state.x - xV.left - UV / 2;
          VV.adjuster.setFraction(Math.max(0, Math.min(1, pV / yV)))
        }
        updateConfirm(VV, eV) {
          VV.wasPressed(eV) && (this.press = VV.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const xV = this.press;
          if (!xV) return;
          if (VV.isHeld(eV)) return "slider" === xV.kind && this.applySliderFraction(xV), void this.updateRepeat();
          this.press = null;
          const JV = this.repeated;
          if (this.endRepeat(), !VV.wasReleased(eV)) return void this.endPressWithoutClick(xV);
          const YV = this.getPoint(),
            UV = this.hit;
          if ("slider" === xV.kind && xV.adjuster.endDrag(), "pointer" === xV.kind) {
            const VV = null !== UV && void 0 !== UV ? UV : xV.target.isConnected ? xV.target : null;
            VV && (0, mV.y)(VV, YV);
            const eV = UV && xV.target.isConnected && !JV ? ((VV, eV) => {
              for (let xV = VV; xV; xV = xV.parentElement)
                if (xV.contains(eV)) return xV;
              return null
            })(xV.target, UV) : null;
            eV && (OJ.noteCursorActivation(eV), (0, BV.f)(eV, new MouseEvent("click", (0, mV.O)(YV, 0, 0))), (0, mV.k)(eV), (0, mV.M)(eV) && (0, mV.L)(eV))
          }
        }
        beginRepeat() {
          var VV, eV, xV;
          const JV = null !== (VV = null === (eV = this.hit) || void 0 === eV ? void 0 : eV.closest("[data-pad-repeat]")) && void 0 !== VV ? VV : null;
          this.repeatStop = JV, this.repeatKey = null !== (xV = null === JV || void 0 === JV ? void 0 : JV.getAttribute("data-pad-repeat")) && void 0 !== xV ? xV : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const VV = this.repeatStop;
          if (!VV) return;
          const eV = this.hit;
          VV.isConnected && !(0, dV.v)(VV) && VV.getAttribute("data-pad-repeat") === this.repeatKey && eV && VV.contains(eV) ? VV.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, OJ.noteCursorActivation(VV), (0, BV.f)(VV, new MouseEvent("click", (0, mV.O)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(VV) {
          "slider" === VV.kind && VV.adjuster.endDrag(), "pointer" === VV.kind && VV.target.isConnected && (0, mV.y)(VV.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(VV, eV) {
          VV.wasPressed(eV) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !VV.isHeld(eV) && (this.secondaryArmed = !1, VV.wasReleased(eV) && this.hit && (0, mV.q)(this.hit, this.getPoint(), 2))
        }
        updateScroll(VV, eV) {
          const xV = AV(VV.rightStick, VV.dtMs);
          if (0 === xV.x && 0 === xV.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + xV.x,
            y: this.scrollRemainder.y + xV.y
          };
          const JV = Math.trunc(this.scrollRemainder.x),
            YV = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - JV,
            y: this.scrollRemainder.y - YV
          };
          const UV = this.hit;
          if (!UV) return;
          let yV = !1;
          if (0 !== YV) {
            const VV = IU(UV, "y", YV > 0 ? 1 : -1, eV);
            VV && (VV.scrollBy({
              top: YV,
              behavior: "instant"
            }), yV = !0)
          }
          if (0 !== JV) {
            const VV = IU(UV, "x", JV > 0 ? 1 : -1, eV);
            VV && (VV.scrollBy({
              left: JV,
              behavior: "instant"
            }), yV = !0)
          }
          yV && (this.lastHitTestMs = -1 / 0)
        }
        QZ() {
          HV.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      OU = () => {
        const VV = (0, CV.useMemo)((() => new LV), []),
          eV = (0, rV.w)();
        return (0, CV.useEffect)((() => {
          if (!eV) return;
          let xV = 0,
            JV = {
              of: null,
              atMs: 0,
              list: []
            };
          const YV = document.getElementsByClassName(zJ),
            UV = VV => {
              for (const eV of [...YV]) eV !== VV && eV.classList.remove(zJ)
            },
            yV = () => {
              var eV;
              xV = requestAnimationFrame(yV);
              const YV = (() => {
                const VV = OJ.getFocused();
                if (OJ.isActive() && null !== VV && void 0 !== VV && VV.isConnected) return VV;
                const eV = dU.getHighlighted();
                return null !== eV && void 0 !== eV && eV.isConnected ? eV : null
              })();
              UV(YV), YV && !YV.classList.contains(zJ) && YV.classList.add(zJ);
              const pV = null !== (eV = null === YV || void 0 === YV ? void 0 : YV.closest("[data-pad-reticle-box]")) && void 0 !== eV ? eV : YV;
              VV.show(pV ? ((VV, eV) => {
                let xV = VV.left,
                  JV = VV.top,
                  YV = VV.right,
                  UV = VV.bottom;
                for (const yV of eV) {
                  if (!yV) continue;
                  const VV = DV(yV);
                  xV = Math.max(xV, VV.left), JV = Math.max(JV, VV.top), YV = Math.min(YV, VV.right), UV = Math.min(UV, VV.bottom)
                }
                return YV <= xV || UV <= JV ? null : {
                  left: xV,
                  top: JV,
                  width: YV - xV,
                  height: UV - JV
                }
              })(pV.getBoundingClientRect(), (VV => {
                const eV = performance.now();
                return (JV.of !== VV || eV - JV.atMs > 500) && (JV = {
                  of: VV,
                  atMs: eV,
                  list: [MV(VV, "y"), MV(VV, "x")]
                }), JV.list
              })(pV)) : null)
            };
          return xV = requestAnimationFrame(yV), () => {
            cancelAnimationFrame(xV), UV(null), VV.hide()
          }
        }), [eV, VV]), (0, cV.jsx)(fV, {
          placer: VV,
          className: "PadFocusRing"
        })
      },
      Vy = (VV, eV) => {
        VV.style.transform = `translate3d(${eV.x}px, ${eV.y}px, 0)`, VV.classList.toggle("Visible", eV.visible), VV.classList.toggle("Pressed", eV.pressed)
      },
      ey = () => {
        const VV = (0, CV.useRef)(null);
        return (0, CV.useEffect)((() => {
          const eV = HV.subscribe((eV => {
            VV.current && Vy(VV.current, eV)
          }));
          return VV.current && Vy(VV.current, HV.get()), eV
        }), []), (0, cV.jsx)("div", {
          ref: VV,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, cV.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      xy = "#ncmp__modal.ncmp__active",
      Jy = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(xy) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(xy),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Yy = "PadOverThirdParty",
      Uy = new Set(Jy.map((VV => VV.id))),
      yy = () => {
        const VV = Jy.map((VV => {
            let {
              id: eV,
              find: xV,
              startSelectors: JV
            } = VV;
            return (0, xJ.o)({
              id: eV,
              kind: "popup",
              getRoot: () => {
                const VV = xV(),
                  eV = VV ? ((VV, eV) => {
                    var xV;
                    for (const JV of eV) {
                      const eV = VV.querySelector(JV);
                      if (eV) return eV
                    }
                    return null !== (xV = [...VV.querySelectorAll("button")].find((VV => !VV.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== xV ? xV : null
                  })(VV, JV) : null;
                if (VV && eV && !eV.hasAttribute("data-pad-default-focus")) {
                  for (const eV of VV.querySelectorAll("[data-pad-default-focus]")) eV.removeAttribute("data-pad-default-focus");
                  for (const eV of VV.querySelectorAll("[data-pad-hint-bar-avoid]")) eV.removeAttribute("data-pad-hint-bar-avoid");
                  eV.setAttribute("data-pad-default-focus", ""), ((VV, eV) => {
                    let xV = VV;
                    for (let JV = VV.parentElement; JV && eV.contains(JV) && !(JV.getBoundingClientRect().height >= window.innerHeight / 2); JV = JV.parentElement) xV = JV;
                    return xV
                  })(eV, VV).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return VV
              },
              close: null,
              memoryKey: null
            })
          })),
          eV = document.documentElement,
          xV = yV.f.onFrame((() => {
            const VV = (0, rV.j)() ? wJ() : null,
              xV = !!VV && (JV = VV.layer, Uy.has(JV.id));
            var JV;
            eV.classList.contains(Yy) !== xV && eV.classList.toggle(Yy, xV)
          }));
        return () => {
          for (const eV of VV) eV();
          xV(), eV.classList.remove(Yy)
        }
      },
      py = "PadLargePointer",
      Qy = () => {
        (0, CV.useEffect)((() => {
          const VV = (0, BV.l)(document.body),
            eV = OJ.install(),
            xV = dU.install(),
            JV = yy();
          return () => {
            VV(), eV(), xV(), JV()
          }
        }), []);
        const {
          largePointer: VV
        } = (0, vV.p)(), eV = (0, iU.E)() && VV;
        return (0, CV.useEffect)((() => {
          if (eV) return document.documentElement.classList.add(py), () => {
            document.documentElement.classList.remove(py)
          }
        }), [eV]), (0, pV.createPortal)((0, cV.jsxs)(cV.Fragment, {
          children: [(0, cV.jsx)(KU, {}), (0, cV.jsx)(OU, {}), (0, cV.jsx)(ey, {})]
        }), document.body)
      };
    var ny = xV(9408),
      wy = xV(9422),
      Zy = xV(9416);
    xV(9424);
    const vy = (VV, eV) => {
        const [xV, JV] = (0, CV.useState)(!1), [YV, UV] = (0, CV.useState)(null), yV = (0, CV.useRef)(null), pV = (0, CV.useCallback)((VV => {
          yV.current = VV, UV(VV)
        }), []), QV = (0, CV.useCallback)((() => {
          JV(!1), pV(null)
        }), [pV]), wV = (0, CV.useCallback)((() => {
          JV(!0)
        }), []), ZV = (0, CV.useCallback)(((VV, eV) => {
          pV((0, Zy.D)(VV, eV, yV.current))
        }), [pV]);
        (0, CV.useLayoutEffect)((() => (eV(xV), (0, CU.v)(VV, xV), nV.h.QZ(CU.n), () => {
          eV(!1), (0, CU.v)(VV, !1), nV.h.QZ(CU.n)
        })), [xV, VV, eV]), (0, EY.g)("appManagerUpdated|activeInputDevice", (VV => {
          "gamepad" !== VV && QV()
        })), (0, EY.g)("appManagerUpdated|gameState", (VV => {
          "inGame" !== VV && QV()
        }));
        const vV = () => {
          (0, Qx.n)() && QV()
        };
        return (0, EY.g)("appManagerUpdated|openEverythingMenuName", vV), (0, EY.g)("appManagerUpdated|openInGameMenuName", vV), {
          open: xV,
          picked: YV,
          pickedRef: yV,
          show: wV,
          aim: ZV,
          close: QV
        }
      },
      ry = VV => {
        let {
          className: eV,
          slotCount: xV,
          picked: JV,
          slotLabel: YV,
          renderSlot: UV,
          centre: yV
        } = VV;
        const pV = Array.from({
          length: xV
        }, ((VV, eV) => eV));
        return (0, cV.jsx)("div", {
          className: oV()("EmoteWheelOverlay PadRadialWheel", eV),
          children: (0, cV.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Zy.q + "rem",
              height: 2 * Zy.q + "rem"
            },
            children: [(0, cV.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Zy.l} ${Zy.l}`,
              children: [pV.map((VV => (0, cV.jsx)("path", {
                d: (0, Zy.s)(VV, xV, Zy.e, Zy.g, Zy.h),
                className: oV()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: VV === JV
                }),
                "aria-label": YV(VV)
              }, VV))), (0, cV.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Zy.e,
                cy: Zy.e,
                r: Zy.h
              }), (0, cV.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Zy.e,
                cy: Zy.e,
                r: Zy.g
              }), null !== JV && (0, cV.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Zy.s)(JV, xV, Zy.e, Zy.g, Zy.h)
              })]
            }), pV.map((VV => {
              const eV = (0, Zy.A)(VV, xV);
              return (0, cV.jsx)("div", {
                className: oV()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: VV === JV
                }),
                style: {
                  left: `calc(50% + ${Zy.d*Math.cos(eV)}rem)`,
                  top: `calc(50% + ${Zy.d*Math.sin(eV)}rem)`
                },
                "aria-hidden": !0,
                children: UV(VV)
              }, VV)
            })), (0, cV.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: yV
            })]
          })
        })
      },
      ky = wU.length,
      by = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = vy("chat", Gx.s), xV = (0, CV.useMemo)((() => wU.map((eV => VV(eV)))), [VV]);
        return (0, EY.g)(Gx.o, (() => {
          eV.open || (0, ny.e)() || (0, wy.r)() || "inGame" !== QV.b.get("gameState") || (0, Qx.n)() || !(0, Mx.e)() || eV.show()
        })), (0, EY.g)(Gx.f, (VV => {
          eV.open && eV.aim(VV, ky)
        })), (0, EY.g)(Gx.k, (() => {
          var VV;
          if (!eV.open) return;
          const JV = eV.pickedRef.current;
          null !== JV ? ZU.claim(performance.now()) && (eV.close(), null === (VV = (0, Mx.e)()) || void 0 === VV || VV.sendLine(xV[JV])) : eV.close()
        })), (0, EY.g)(Gx.g, eV.close), eV.open ? (0, cV.jsx)(ry, {
          className: "QuickChatWheel",
          slotCount: ky,
          picked: eV.picked,
          slotLabel: VV => xV[VV],
          renderSlot: VV => xV[VV],
          centre: null !== eV.picked ? xV[eV.picked] : VV("controller:quickChatPick")
        }) : null
      },
      Ey = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = vy("actionButton", wy.s), [xV, JV] = (0, CV.useState)([]);
        if ((0, EY.g)(wy.j, (VV => {
            eV.open || (0, ny.e)() || (0, Gx.c)() || "inGame" !== QV.b.get("gameState") || (0, Qx.n)() || (JV(VV), eV.show())
          })), (0, EY.g)(wy.d, (VV => {
            eV.open && eV.aim(VV, xV.length)
          })), (0, EY.g)(wy.g, (() => {
            if (!eV.open) return;
            const VV = eV.pickedRef.current;
            eV.close(), null !== VV && nV.h.QZ(wy.n, xV[VV])
          })), (0, EY.g)(wy.f, eV.close), !eV.open) return null;
        const UV = null !== eV.picked ? xV[eV.picked] : null;
        return (0, cV.jsx)(ry, {
          className: "ActionWheel",
          slotCount: xV.length,
          picked: eV.picked,
          slotLabel: eV => {
            const JV = xV[eV];
            return "reload" === JV.kind ? VV("controller:gameplayReload") : "customButton" === JV.kind ? JV.description || JV.icon : "touchButton" === JV.kind && "string" === typeof JV.label ? JV.label : ""
          },
          renderSlot: VV => (0, cV.jsx)(AY, {
            action: xV[VV]
          }),
          centre: UV ? (0, cV.jsx)(AY, {
            action: UV
          }) : VV("controller:actionWheelPick")
        })
      };
    var By = xV(99);
    const jy = () => ((0, CV.useEffect)((() => {
        var VV, eV;
        const xV = (0, BV.l)(document.getElementById("root")),
          JV = (0, rV.h)(),
          YV = (() => {
            const VV = [nV.h.subscribe(eY.d, (() => {
                UY("blockBreak")
              })), nV.h.subscribe("damagedByOtherPlayer", (() => {
                UY("damage")
              })), nV.h.subscribe("yourAttackHit", (VV => {
                let {
                  hitSelf: eV
                } = VV;
                eV || UY("hit")
              }))],
              eV = yV.f.onActivePadChanged((VV => {
                VV && UY("connect")
              }));
            return () => {
              for (const eV of VV) nV.h.unsubscribe(eV);
              eV()
            }
          })(),
          UV = (() => {
            const VV = new ZY({
              getVisitId: wY.f,
              peekVisitId: wY.peekVisitSessionId,
              readReportedVisitId: () => {
                const VV = nY.q.getItem(vY);
                return "string" === typeof VV ? VV : null
              },
              writeReportedVisitId: VV => {
                nY.q.setItem(vY, VV)
              },
              isPadActive: rV.j,
              getPadFamily: () => {
                var VV, eV;
                return null !== (VV = null === (eV = yV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : null
              },
              canReport: pY.isBloxdGa4Ready,
              getInputType: QY.c,
              EZ: pY.logControllerUsedToGtag
            });
            let eV = 0,
              xV = null;
            const JV = YV => {
                null === xV && ("notReady" !== VV.check(YV) || null !== xV || eV >= 20 || (eV++, xV = setTimeout((() => {
                  xV = null, JV(!1)
                }), 3e3)))
              },
              YV = nV.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
                JV(!0)
              })),
              UV = (0, wY.n)((() => {
                eV = 0, JV(!0)
              }));
            return () => {
              nV.h.unsubscribe(YV), UV(), null !== xV && clearTimeout(xV)
            }
          })(),
          pV = yV.f.onFrame(((VV, eV, xV) => {
            const JV = (0, rV.l)(VV, xV);
            ZV.c.dispatch(VV, eV, JV)
          }));
        let wV = null !== (VV = null === (eV = yV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : null;
        const kV = yV.f.onActivePadChanged((VV => {
            var eV, xV;
            (ZV.c.reset(), (0, rV.r)(), nV.h.QZ(yV.c, VV), (null !== (eV = null === VV || void 0 === VV ? void 0 : VV.family) && void 0 !== eV ? eV : null) !== wV) && (wV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.family) && void 0 !== xV ? xV : null, nV.h.QZ(vV.c, (0, vV.i)()));
            !VV && (0, rV.j)() && (0, rV.u)(QV.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          bV = () => {
            "visible" !== document.visibilityState && ZV.c.clear()
          },
          EV = () => {
            ZV.c.clear()
          };
        document.addEventListener("visibilitychange", bV), window.addEventListener("blur", EV), yV.f.start(), (0, yY.j)();
        const jV = null;
        return () => {
          xV(), JV(), YV(), UV(), pV(), kV(), document.removeEventListener("visibilitychange", bV), window.removeEventListener("blur", EV), yV.f.stop(), null === jV || void 0 === jV || jV()
        }
      }), []), (0, cV.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, cV.jsx)(RY, {}), (0, cV.jsx)(lY, {}), (0, cV.jsx)(LY, {}), (0, cV.jsx)(gU, {}), (0, cV.jsx)(Qy, {}), (0, cV.jsx)(by, {}), (0, cV.jsx)(Ey, {})]
      })),
      qy = () => By.featureFlags.useControllerSupport ? (0, cV.jsx)(jy, {}) : null;
    var ty = xV(8816),
      Fy = xV(9428);
    const Ty = new Set(yY.i),
      Py = VV => `${Fy.m}${(0,vV.j)()}/${VV}`,
      Ay = VV => {
        if (!(0, Fy.i)(VV)) return null;
        const [eV, xV] = VV.slice(Fy.m.length).split("/");
        return (0, ty.h)(eV) && Ty.has(xV) ? (0, yY.g)(eV, xV) : null
      };
    var Ny = xV(9435);
    const Xy = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, rV.w)(), {
          gameState: xV,
          isUiHidden: JV
        } = (0, QV.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: UV,
          sneakMode: yV
        } = (0, vV.p)(), [pV, nV] = (0, CV.useState)(Ny.d);
        return (0, EY.g)(WY.o, nV), eV && !JV && "inGame" === xV && pV ? (0, cV.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!UV && (0, cV.jsx)(TY, {
            glyph: (0, wV.i)("toggle" === yV ? "sneak" : "sneakToggle")
          }), (0, cV.jsx)("span", {
            children: VV("controller:gameplaySneaking")
          })]
        }) : null
      },
      My = 12,
      zy = VV => {
        let {
          trigger: eV,
          className: xV,
          children: JV
        } = VV;
        const YV = (0, CV.useRef)(null);
        return (0, CV.useEffect)((() => {
          let VV = 0;
          const xV = MV(eV, "y"),
            JV = () => {
              VV = requestAnimationFrame(JV);
              const UV = YV.current;
              if (!UV || null === eV || void 0 === eV || !eV.isConnected) return;
              const {
                left: yV,
                top: pV
              } = function(VV, eV, xV) {
                let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const UV = VV.left + VV.width / 2,
                  yV = Math.max(My, xV.width - My - eV.width),
                  pV = Math.min(Math.max(UV - eV.width / 2, My), yV),
                  QV = xV.height - JV;
                let nV = 0,
                  wV = QV;
                if (YV) {
                  const VV = Math.max(0, YV.top),
                    JV = Math.min(QV, YV.bottom);
                  JV - VV >= Math.max(xV.height / 2, eV.height + 24) && (nV = VV, wV = JV)
                }
                const ZV = VV.top + VV.height / 2 < (nV + wV) / 2 ? wV - My - eV.height : nV + My;
                return {
                  left: pV,
                  top: Math.max(My, ZV)
                }
              }(eV.getBoundingClientRect(), {
                width: UV.offsetWidth,
                height: UV.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(hU)) || 0, null !== xV && void 0 !== xV && xV.isConnected ? xV.getBoundingClientRect() : null);
              UV.style.transform = `translate3d(${Math.round(yV)}px, ${Math.round(pV)}px, 0)`, UV.style.visibility = "visible"
            };
          return JV(), () => {
            cancelAnimationFrame(VV)
          }
        }), [eV]), (0, cV.jsx)("div", {
          ref: YV,
          className: xV,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: JV
        })
      };
    var Gy = xV(1414),
      Wy = xV(9438),
      Ry = xV(1551),
      gy = xV(9445),
      Dy = xV(9453);
    const iy = {
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
      Cy = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, rV.w)(), xV = (0, Wy.c)(), JV = (0, oY.j)("_tasks"), UV = (0, oY.j)("_availableLeaderboards");
        if (!eV) return null;
        const yV = (VV => {
          let {
            hasShop: eV,
            hasTasksOrLeaderboards: xV,
            canInvite: JV
          } = VV;
          const YV = [];
          return eV && YV.push("shop"), xV && YV.push("tasks"), JV && YV.push("invite"), YV.push("leave"), YV
        })({
          hasShop: xV,
          hasTasksOrLeaderboards: !(!JV && !UV),
          canInvite: !!By.featureFlags.canUseInviteLinks
        });
        return (0, cV.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: yV.map((eV => {
            const {
              icon: xV,
              labelKey: JV
            } = iy[eV], YV = "leave" === eV ? Ry.E : Ry.f;
            return (0, cV.jsx)(YV, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (VV => {
                  switch (VV) {
                    case "shop":
                      return nV.h.QZ(Dy.h), void QV.b.set({
                        openEverythingMenuName: px.q.SHOP
                      });
                    case "tasks":
                      return void nV.h.QZ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void nV.h.QZ("toggleMenu", "inviteLink");
                    case "leave":
                      (0, gy.e)()
                  }
                })(eV)
              },
              children: (0, cV.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, cV.jsx)(Gy.b, {
                  name: xV
                }), (0, cV.jsx)("span", {
                  children: VV(JV)
                })]
              })
            }, eV)
          }))
        })
      };
    var ay = xV(2116);
    const oy = kV.C,
      cy = ["forward", "backward", "left", "right", "sprint"],
      hy = VV => VV.ctrlKey || VV.altKey || "Alt" === VV.key || "ArrowUp" === VV.key || "ArrowDown" === VV.key || "Tab" === VV.code || "/" === VV.key || "Slash" === VV.code;
    class ly {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(kV.X).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(VV) {
        this.armed = VV
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || eV ? !VV.repeat && this.swallowedKeys.delete(VV.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(VV.code),
          continues: !1
        } : "Escape" === VV.key || VV.repeat && !this.swallowedKeys.has(VV.code) ? {
          swallow: !1,
          continues: !1
        } : xV ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(VV.code), {
          swallow: !0,
          continues: (0, rV.i)(VV)
        })
      }
      onKeyUp(VV) {
        return this.swallowedKeys.delete(VV.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const YV = (0, kV.t)(VV.values, this.previousHeld),
          UV = null === xV ? -1 : (0, kV.n)(xV),
          yV = UV >= 0 && YV[UV] && !this.previousHeld[UV],
          pV = YV.some(((VV, eV) => VV && !this.previousHeld[eV] && eV !== UV)),
          QV = Math.hypot(VV.leftStick.x, VV.leftStick.y) >= oy,
          nV = Math.hypot(VV.rightStick.x, VV.rightStick.y) >= oy,
          wV = QV && !this.leftStickWasPressed || nV && !this.rightStickWasPressed;
        this.previousHeld = YV, this.leftStickWasPressed = QV, this.rightStickWasPressed = nV;
        let ZV = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, ZV = !0);
        const vV = !eV && yV && !JV,
          rV = !vV && this.armed && !eV && (pV || wV);
        return (vV || rV) && (this.consumeNextFrame = !0, this.consumeAfterContinue = rV, ZV = !0), {
          continues: rV,
          back: vV,
          consumeHeld: ZV
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Ly = new Set([...ay.k, ...ay.z]),
      fy = VV => ((VV, eV, xV) => {
        const JV = Object.keys(eV).filter((JV => !xV.has(JV) && eV[JV].includes(VV)));
        return JV.length > 0 && JV.every((VV => cy.includes(VV)))
      })(VV, ay.t, Ly),
      my = (VV, eV, xV) => {
        const JV = new ly,
          YV = VV => {
            if (!VV.isTrusted) return;
            const {
              swallow: xV,
              continues: YV
            } = JV.onKeyDown(VV, !(0, rV.y)(VV) || (0, VY.l)() || (0, Qx.n)(), fy(VV.code));
            xV && (VV.stopImmediatePropagation(), hy(VV) && VV.preventDefault()), YV && ((0, rV.u)("keyboardMouse"), eV())
          },
          UV = VV => {
            VV.isTrusted && JV.onKeyUp(VV) && (VV.stopImmediatePropagation(), hy(VV) && VV.preventDefault())
          },
          pV = () => {
            JV.forgetKeys()
          };
        window.addEventListener("keydown", YV, !0), window.addEventListener("keyup", UV, !0), window.addEventListener("blur", pV);
        const QV = yV.f.onFrame((VV => {
            const YV = ZV.c.getActiveConsumerName(),
              UV = xV(),
              yV = UV ? (0, wV.i)("menuBack") : null,
              pV = null !== YV && "gameplay" !== YV,
              {
                continues: QV,
                back: nV,
                consumeHeld: kV
              } = JV.onPadFrame(VV, pV, yV, (0, rV.k)(VV));
            if (kV) {
              const VV = (0, vV.i)().swapSticks ? "right" : "left";
              ZV.c.consumeAllHeld(JV.consumeLeavesMoveStick() ? VV : null)
            }
            nV ? null === UV || void 0 === UV || UV() : QV && eV()
          })),
          nV = (0, VY.o)(`pressToContinue:${VV}`, (() => JV.blocksGameplay()));
        return {
          setArmed: VV => {
            JV.setArmed(VV)
          },
          dispose: () => {
            window.removeEventListener("keydown", YV, !0), window.removeEventListener("keyup", UV, !0), window.removeEventListener("blur", pV), QV(), nV()
          }
        }
      };
    var Ky = xV(5500),
      Hy = xV(3872),
      uy = xV(3551),
      sy = xV(8825);
    const Sy = VV => {
        let {
          text: eV
        } = VV;
        return (0, cV.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: eV
        })
      },
      Iy = VV => {
        let {
          label: eV,
          hint: xV,
          options: JV,
          value: UV,
          onChange: yV
        } = VV;
        const {
          t: pV
        } = (0, YV.A)();
        return (0, cV.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, cV.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, cV.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, cV.jsx)("div", {
                className: "SliderText",
                children: eV
              }), xV && (0, cV.jsx)("div", {
                className: "ControllerSettingsHint",
                children: xV
              })]
            }), (0, cV.jsx)(uy.c, {
              options: JV.map((VV => ({
                label: "label" in VV ? VV.label : pV(VV.labelKey),
                value: VV.value
              }))),
              value: UV,
              onChange: VV => {
                yV(VV.value)
              }
            })]
          })
        })
      },
      dy = VV => {
        let {
          settingKey: eV,
          label: xV,
          range: JV,
          format: YV
        } = VV;
        const UV = (0, vV.p)();
        return (0, cV.jsx)(Ky.m, {
          name: xV,
          min: JV.min,
          max: JV.max,
          step: JV.step,
          padStep: JV.step,
          initValue: UV[eV],
          format: YV,
          onChange: VV => {
            (0, vV.n)({
              [eV]: (0, sy.w)(VV, JV)
            })
          }
        })
      };
    var Oy = xV(9462),
      Vp = xV(9467);
    const ep = VV => VV instanceof DOMException && ("SecurityError" === VV.name || "NotAllowedError" === VV.name),
      xp = VV => {
        const [eV] = [...VV.controllers].sort(((VV, eV) => Vp.q[VV] - Vp.q[eV]));
        return Vp.o[eV]
      },
      Jp = VV => {
        (0, Oy.c)().allowPhoneMotion().catch((eV => {
          VV && ep(eV) ? VV() : console.warn("Could not enable the motion sensor", eV)
        }))
      },
      Yp = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Up = VV => {
        let {
          status: eV
        } = VV;
        const {
          t: xV
        } = (0, YV.A)(), [JV, UV] = (0, CV.useState)(null), yV = `${eV.controllers.join(",")}|${eV.phoneMotion}`;
        (0, CV.useEffect)((() => {
          UV(null)
        }), [yV]);
        const pV = () => {
          (0, Oy.c)().connectController().then((VV => {
            UV(VV > 0 ? "openFailed" : null)
          })).catch((VV => {
            ep(VV) ? UV("needsClick") : console.warn("Could not connect motion controller", VV)
          }))
        };
        if (eV.hidSupported) {
          let VV = xV("controller:settingsGyroConnectHint");
          return "needsClick" === JV ? VV = xV("controller:settingsGyroConnectNeedsClick") : "openFailed" === JV ? VV = xV("controller:settingsGyroOpenFailed") : eV.controllers.length > 0 && (VV = xV("controller:settingsGyroConnected", {
            name: xp(eV)
          })), (0, cV.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, cV.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, cV.jsx)("div", {
                className: "ControllerSettingsHint",
                children: VV
              }), (0, cV.jsx)(Ry.f, {
                onClick: pV,
                children: xV("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === eV.phoneMotion) return (0, cV.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, cV.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === JV && (0, cV.jsx)("div", {
              className: "ControllerSettingsHint",
              children: xV("controller:settingsGyroAllowNeedsTap")
            }), (0, cV.jsx)(Ry.f, {
              onClick: () => {
                Jp((() => {
                  UV("needsTap")
                }))
              },
              children: xV("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const QV = Yp[eV.phoneMotion];
        return QV ? (0, cV.jsx)("div", {
          className: "ControllerSettingsHint",
          children: xV(QV)
        }) : null
      },
      yp = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, vV.p)(), xV = (0, Oy.e)(), JV = (0, rV.x)(), UV = !xV.hidSupported && xV.phoneSupported && !xV.padConnected, yV = (xV.hidSupported || xV.phoneSupported) && !UV, pV = (0, wV.i)("pause");
        return (0, cV.jsxs)(cV.Fragment, {
          children: [(0, cV.jsx)(Sy, {
            text: VV("controller:settingsGyro")
          }), UV && (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: VV("controller:settingsGyroPhoneNeedsController")
          }), !yV && !UV && (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: VV(xV.hidBlocked || xV.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), yV && (0, cV.jsx)(Ky.e, {
            label: VV(xV.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: eV.gyroAiming,
            onClick: VV => {
              var eV, xV;
              (0, vV.n)({
                gyroAiming: VV
              });
              const JV = null === (eV = null === (xV = navigator.userActivation) || void 0 === xV ? void 0 : xV.isActive) || void 0 === eV || eV;
              if (!VV || !JV) return;
              const YV = (0, Oy.c)(),
                UV = YV.getStatus();
              UV.hidSupported ? YV.connectControllerIfNoneGranted().catch((VV => {
                console.warn("Motion controller picker unavailable", VV)
              })) : "needsPermission" === UV.phoneMotion && Jp()
            },
            circleInfoText: VV(xV.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), yV && xV.hidSupported && (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: VV("controller:settingsGyroSteamHint")
          }), yV && eV.gyroAiming && (0, cV.jsxs)(cV.Fragment, {
            children: [(0, cV.jsx)(Up, {
              status: xV
            }), (0, cV.jsx)(dy, {
              settingKey: "gyroSensitivity",
              label: VV("controller:settingsGyroSensitivity"),
              range: sy.R,
              format: sy.H
            }), (0, cV.jsx)(Iy, {
              label: VV("controller:settingsGyroActivation"),
              hint: "aiming" === eV.gyroActivation && (0, cV.jsx)(Hy.e, {
                text: VV("controller:settingsGyroAimingHint", {
                  button: Hy.g
                }),
                glyph: (0, wV.i)("use")
              }),
              options: sy.O,
              value: eV.gyroActivation,
              onChange: VV => {
                (0, vV.n)({
                  gyroActivation: VV
                })
              }
            }), "button" === eV.gyroActivation && (0, cV.jsx)(Iy, {
              label: VV("controller:settingsGyroButton"),
              hint: VV("controller:settingsGyroButtonHint"),
              options: sy.t.filter((VV => VV !== pV || VV === eV.gyroButton)).map((VV => ({
                label: FY(JV, VV),
                value: VV
              }))),
              value: eV.gyroButton,
              onChange: VV => {
                (0, vV.n)({
                  gyroButton: VV
                })
              }
            })]
          })]
        })
      };
    var pp = xV(1976);
    const Qp = () => {
      const {
        t: VV
      } = (0, YV.A)(), eV = (0, vV.p)(), xV = (0, rV.x)();
      return (0, cV.jsxs)(cV.Fragment, {
        children: [(0, cV.jsx)(Sy, {
          text: VV("controller:settingsAccessibility")
        }), (0, cV.jsx)(Ky.e, {
          label: VV("controller:settingsSwapConfirmBack"),
          checked: (0, wV.E)(eV.swapConfirmBack, xV),
          onClick: VV => {
            (0, vV.n)({
              swapConfirmBack: VV === (0, wV.E)(null, xV) ? null : VV
            }), pp.e.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: VV("controller:settingsSwapConfirmBackInfo")
        }), (0, cV.jsx)(Iy, {
          label: VV("controller:settingsButtonRepeat"),
          hint: VV("controller:settingsButtonRepeatHint"),
          options: sy.r,
          value: eV.buttonRepeat,
          onChange: VV => {
            (0, vV.n)({
              buttonRepeat: VV
            })
          }
        }), (0, cV.jsx)(Iy, {
          label: VV("controller:settingsTapHoldTime"),
          hint: VV("controller:settingsTapHoldTimeHint"),
          options: sy.qb,
          value: eV.tapHoldTime,
          onChange: VV => {
            (0, vV.n)({
              tapHoldTime: VV
            })
          }
        }), (0, cV.jsx)(Iy, {
          label: VV("controller:settingsEmoteButton"),
          hint: VV("wheel" === eV.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: sy.D,
          value: eV.emoteButton,
          onChange: VV => {
            (0, vV.n)({
              emoteButton: VV
            })
          }
        }), (0, cV.jsx)(Iy, {
          label: VV("controller:settingsAttackMode"),
          hint: VV("toggle" === eV.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: sy.o,
          value: eV.attackMode,
          onChange: VV => {
            (0, vV.n)({
              attackMode: VV
            })
          }
        }), (0, cV.jsx)(Ky.e, {
          label: VV("controller:settingsLargePointer"),
          checked: eV.largePointer,
          onClick: VV => {
            (0, vV.n)({
              largePointer: VV
            })
          },
          circleInfoText: VV("controller:settingsLargePointerInfo")
        })]
      })
    };
    var np = xV(9469);
    const wp = new class {
        constructor(VV) {
          this.router = VV, this.current = null
        }
        claim(VV, eV) {
          const xV = this.current;
          xV && (this.current = null, xV.release(), xV.onTakenOver());
          const JV = this.router.register({
              ...VV,
              name: "capture"
            }),
            YV = {
              release: JV,
              onTakenOver: eV
            };
          return this.current = YV, () => {
            this.current === YV && (this.current = null), JV()
          }
        }
      }(ZV.c),
      Zp = VV => {
        (0, CV.useEffect)((() => {
          if (!VV) return;
          const eV = VV();
          let xV = !1;
          const JV = () => {
              xV || (xV = !0, eV.onEnd())
            },
            YV = wp.claim({
              isActive: () => !xV,
              onFrame: VV => {
                eV.onFrame(VV, JV)
              }
            }, JV),
            UV = void 0 === eV.timeoutMs ? void 0 : window.setTimeout(JV, eV.timeoutMs),
            yV = VV => {
              "Escape" === VV.key && (VV.preventDefault(), VV.stopPropagation(), JV())
            };
          return window.addEventListener("keydown", yV, !0), () => {
            xV = !0, YV(), window.clearTimeout(UV), window.removeEventListener("keydown", yV, !0)
          }
        }), [VV])
      },
      vp = VV => {
        let {
          row: eV,
          capturing: xV,
          onCapture: JV,
          holdFillRef: UV,
          onRebind: yV,
          swapped: pV
        } = VV;
        const {
          t: QV
        } = (0, YV.A)();
        if ("fixed" === eV.kind) return (0, cV.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, cV.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, cV.jsx)("div", {
              className: "ControlName",
              children: QV(eV.labelKey)
            }), (0, cV.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, cV.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, cV.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, cV.jsx)(TY, {
                    glyph: "move" === eV.stick ? (0, wV.r)() : (0, wV.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: nV
        } = eV, ZV = (0, wV.i)(nV), vV = (0, wV.j)(nV), rV = ZV !== vV && (0, wV.b)(nV, vV);
        return (0, cV.jsxs)("div", {
          className: oV()("ControlRow PadControlRow", {
            Capturing: xV
          }),
          children: [(0, cV.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, cV.jsx)("div", {
              className: "ControlName",
              children: QV(sy.g[nV])
            }), (0, cV.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!xV && (0, cV.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, cV.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    JV(nV)
                  },
                  children: (0, cV.jsx)(TY, {
                    glyph: ZV
                  })
                }), rV && (0, cV.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: QV("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yV(nV, vV)
                  },
                  children: (0, cV.jsx)(Gy.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), xV && (0, cV.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, cV.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, cV.jsx)("span", {
                    children: QV("controller:settingsCapturePrompt")
                  }), (0, cV.jsx)("div", {
                    ref: UV,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, cV.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    JV(null)
                  },
                  children: "\xd7"
                })]
              }), xV && (0, cV.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, cV.jsx)(Hy.e, {
                  text: QV((0, wV.b)(nV, (0, wV.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Hy.g
                  }),
                  glyph: (0, wV.i)("menuBack")
                })
              })]
            })]
          }), pV.map((VV => (0, cV.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, cV.jsx)(Hy.e, {
              text: QV("controller:settingsSwapNotice", {
                action: QV(sy.g[VV]),
                button: Hy.g
              }),
              glyph: (0, wV.i)(VV)
            })
          }, VV))), xV && (0, cV.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${sy.v}ms`
            }
          })]
        })
      },
      rp = [],
      kp = VV => {
        let {
          layoutSetting: eV
        } = VV;
        const {
          t: xV
        } = (0, YV.A)(), JV = (0, vV.p)();
        (0, rV.x)();
        const UV = (0, CV.useRef)(null),
          [yV, pV] = (0, CV.useState)(null),
          QV = (0, CV.useCallback)(((VV, eV) => {
            const xV = (0, vV.i)().bindings;
            (0, wV.C)(VV, eV);
            const JV = (0, wV.v)(xV, VV);
            pV(JV.length > 0 ? {
              action: VV,
              swapped: JV
            } : null)
          }), []),
          [nV, bV] = ((VV, eV) => {
            const [xV, JV] = (0, CV.useState)(null), YV = (0, CV.useMemo)((() => xV ? () => {
              const YV = (0, wV.i)("menuBack"),
                UV = new sy.d(YV, (0, wV.i)("menuConfirm"), (VV => (0, wV.b)(xV, VV)));
              return {
                onFrame: (JV, yV) => {
                  var pV;
                  const QV = JV.frame.timestampMs,
                    nV = UV.update({
                      ...JV,
                      isDown: VV => (0, kV.M)(JV.frame.values, VV)
                    }, QV);
                  null === (pV = VV.current) || void 0 === pV || pV.style.setProperty("width", 100 * UV.getBindHoldProgress(QV) + "%"), nV && ("bind" === nV.kind ? (ZV.c.consumeButton(nV.button), eV(xV, nV.button)) : ZV.c.consumeButton(YV), yV())
                },
                onEnd: () => {
                  JV(null)
                },
                timeoutMs: sy.v
              }
            } : null), [xV, VV, eV]);
            return Zp(YV), [xV, JV]
          })(UV, QV),
          EV = VV => {
            VV && pV(null), bV(VV)
          };
        (0, CV.useEffect)((() => {
          if (!yV) return;
          const VV = window.setTimeout((() => {
            pV(null)
          }), sy.nb);
          return () => {
            window.clearTimeout(VV)
          }
        }), [yV]);
        const BV = !JV.swapSticks && 0 === Object.keys(JV.bindings).length;
        return (0, cV.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, cV.jsx)("div", {
            className: "SliderText",
            children: xV("controller:settingsRemap")
          }), (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: xV("controller:settingsRemapHint")
          }), (0, cV.jsx)(Ry.E, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: BV,
            onClick: () => {
              EV(null), pV(null), (0, wV.D)()
            },
            children: xV("controller:settingsResetAll")
          }), eV, sy.gb.map(((VV, eV) => (0, cV.jsx)(np.c, {
            title: xV(VV.titleKey),
            defaultOpen: 0 === eV,
            children: VV.rows.map((VV => (0, cV.jsx)(vp, {
              row: VV,
              capturing: "action" === VV.kind && VV.action === nV,
              onCapture: EV,
              holdFillRef: UV,
              onRebind: QV,
              swapped: "action" === VV.kind && (null === yV || void 0 === yV ? void 0 : yV.action) === VV.action ? yV.swapped : rp
            }, "action" === VV.kind ? VV.action : VV.labelKey)))
          }, VV.titleKey)))]
        })
      },
      bp = VV => {
        let {
          deadzone: eV,
          dotRef: xV,
          labelKey: JV
        } = VV;
        const {
          t: UV
        } = (0, YV.A)();
        return (0, cV.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, cV.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, cV.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * eV + "%",
                height: 100 * eV + "%"
              }
            }), (0, cV.jsx)("div", {
              ref: xV,
              className: "ControllerTesterDot"
            })]
          }), (0, cV.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: UV(JV)
          })]
        })
      },
      Ep = (VV, eV, xV, JV) => {
        var YV;
        VV && (VV.style.left = 50 + 50 * Math.max(-1, Math.min(1, eV.x)) + "%", VV.style.top = 50 + 50 * Math.max(-1, Math.min(1, eV.y)) + "%", null === (YV = VV.parentElement) || void 0 === YV || YV.classList.toggle("Active", JV || Math.hypot(eV.x, eV.y) > xV))
      },
      Bp = VV => {
        const eV = {
            deadzone: VV.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          xV = {
            deadzone: VV.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return VV.swapSticks ? {
          left: xV,
          right: eV
        } : {
          left: eV,
          right: xV
        }
      },
      jp = () => {
        const {
          t: VV
        } = (0, YV.A)(), eV = (() => {
          const [VV, eV] = (0, CV.useState)((() => yV.f.getActivePad()));
          return (0, EY.g)(yV.c, (() => {
            eV(yV.f.getActivePad())
          })), VV
        })(), xV = Bp((0, vV.p)()), JV = (0, CV.useRef)(null), UV = (0, CV.useRef)(null), pV = (0, CV.useRef)([]), QV = (0, CV.useRef)(null), nV = (0, CV.useRef)(null), [rV, bV] = (VV => {
          const [eV, xV] = (0, CV.useState)(!1), JV = (0, CV.useMemo)((() => eV ? () => {
            const eV = (0, wV.i)("menuBack"),
              JV = new sy.e;
            return {
              onFrame: (xV, YV) => {
                var UV;
                const yV = JV.update({
                  pressed: xV.wasPressed(eV),
                  hn: xV.isHeld(eV)
                }, xV.frame.timestampMs);
                null === (UV = VV.current) || void 0 === UV || UV.style.setProperty("width", 100 * yV + "%"), yV >= 1 && (ZV.c.consumeButton(eV), YV())
              },
              onEnd: () => {
                xV(!1)
              }
            }
          } : null), [eV, VV]);
          return Zp(JV), [eV, xV]
        })(UV);
        (0, CV.useEffect)((() => {
          const VV = VV => {
            for (const xV of kV._) {
              const eV = (0, kV.n)(xV),
                JV = pV.current[eV];
              if (!JV) continue;
              const YV = VV.values[eV];
              JV.classList.toggle("Pressed", YV >= kV.C), (0, kV.P)(eV) && JV.style.setProperty("--trigger-fill", `${Math.round(100*YV)}%`)
            }
            const eV = Bp((0, vV.i)());
            Ep(QV.current, VV.leftStick, eV.left.deadzone, VV.values[(0, kV.n)("LS")] >= kV.C), Ep(nV.current, VV.rightStick, eV.right.deadzone, VV.values[(0, kV.n)("RS")] >= kV.C)
          };
          return eV || VV((0, kV.z)()), yV.f.onFrame(VV)
        }), [eV]), (0, CV.useEffect)((() => {
          eV || bV(!1)
        }), [eV, bV]), (0, CV.useEffect)((() => {
          var VV;
          rV && (null === (VV = JV.current) || void 0 === VV || VV.scrollIntoView({
            block: "nearest"
          }))
        }), [rV]);
        const EV = sy.cb.find((VV => VV.value === (null === eV || void 0 === eV ? void 0 : eV.family)));
        return (0, cV.jsxs)("div", {
          ref: JV,
          className: oV()("SettingBox ControllerTester", {
            Testing: rV
          }),
          children: [(0, cV.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, cV.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [eV && (0, cV.jsx)("div", {
                children: VV("controller:settingsTesterFamily", {
                  family: EV ? VV(EV.labelKey) : eV.family
                })
              }), eV && (0, cV.jsx)("div", {
                className: "ControllerTesterPadId",
                children: eV.id
              }), !eV && (0, cV.jsx)("div", {
                children: VV("controller:settingsTesterNoPad")
              })]
            }), (eV || rV) && (0, cV.jsx)(Ry.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                bV(!rV)
              },
              children: VV(rV ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), eV && !rV && (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: VV("controller:settingsTesterHint")
          }), rV && (0, cV.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, cV.jsx)(Hy.e, {
              text: VV("controller:settingsTesterTesting", {
                button: Hy.g
              }),
              glyph: (0, wV.i)("menuBack")
            }), (0, cV.jsx)("div", {
              ref: UV,
              className: "ControllerTesterExitFill"
            })]
          }), (0, cV.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, cV.jsx)(bp, {
              deadzone: xV.left.deadzone,
              dotRef: QV,
              labelKey: xV.left.labelKey
            }), (0, cV.jsx)("div", {
              className: "ControllerTesterButtons",
              children: kV._.map((VV => {
                const xV = (0, kV.n)(VV);
                return (0, cV.jsx)("div", {
                  ref: VV => {
                    pV.current[xV] = VV
                  },
                  className: (0, kV.P)(xV) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, cV.jsx)(TY, {
                    glyph: VV,
                    family: null === eV || void 0 === eV ? void 0 : eV.family
                  })
                }, VV)
              }))
            }), (0, cV.jsx)(bp, {
              deadzone: xV.right.deadzone,
              dotRef: nV,
              labelKey: xV.right.labelKey
            })]
          })]
        })
      },
      qp = (0, CV.memo)((function() {
        const {
          t: VV
        } = (0, YV.A)(), eV = (0, vV.p)(), [xV, JV] = (0, CV.useState)(!1);
        return (0, CV.useEffect)((() => {
          if (!xV) return;
          const VV = window.setTimeout((() => {
            JV(!1)
          }), sy.nb);
          return () => {
            window.clearTimeout(VV)
          }
        }), [xV]), (0, cV.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, cV.jsx)(Sy, {
            text: VV("controller:settingsLook")
          }), (0, cV.jsx)(dy, {
            settingKey: "lookSensitivityX",
            label: VV("controller:settingsLookSensitivityX"),
            range: sy.ib,
            format: sy.L
          }), (0, cV.jsx)(dy, {
            settingKey: "lookSensitivityY",
            label: VV("controller:settingsLookSensitivityY"),
            range: sy.ib,
            format: sy.L
          }), (0, cV.jsx)(dy, {
            settingKey: "aimLookSensitivity",
            label: VV("controller:settingsAimLookSensitivity"),
            range: sy.k,
            format: sy.L
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsLookCurve"),
            hint: VV("controller:settingsLookCurveHint"),
            options: sy.Z,
            value: eV.lookCurve,
            onChange: VV => {
              (0, vV.n)({
                lookCurve: VV
              })
            }
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsInvertLookX"),
            checked: eV.invertLookX,
            onClick: VV => {
              (0, vV.n)({
                invertLookX: VV
              })
            }
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsInvertLookY"),
            checked: eV.invertLookY,
            onClick: VV => {
              (0, vV.n)({
                invertLookY: VV
              })
            }
          }), (0, cV.jsx)(dy, {
            settingKey: "lookDeadzone",
            label: VV("controller:settingsLookDeadzone"),
            range: sy.C,
            format: sy.G
          }), (0, cV.jsx)(yp, {}), (0, cV.jsx)(Sy, {
            text: VV("controller:settingsMovement")
          }), (0, cV.jsx)(dy, {
            settingKey: "moveDeadzone",
            label: VV("controller:settingsMoveDeadzone"),
            range: sy.C,
            format: sy.G
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsAutoSprint"),
            checked: eV.autoSprint,
            onClick: VV => {
              (0, vV.n)({
                autoSprint: VV
              })
            },
            circleInfoText: VV("controller:settingsAutoSprintInfo")
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsSneak"),
            options: sy.jb,
            value: eV.sneakMode,
            onChange: VV => {
              (0, vV.n)({
                sneakMode: VV
              })
            }
          }), (0, cV.jsx)(Sy, {
            text: VV("controller:settingsButtons")
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsPromptFamily"),
            options: sy.cb,
            value: eV.promptFamily,
            onChange: VV => {
              (0, vV.n)({
                promptFamily: VV
              })
            }
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsHideButtonHints"),
            checked: eV.hideButtonHints,
            onClick: VV => {
              (0, vV.n)({
                hideButtonHints: VV
              })
            }
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsVibration"),
            checked: eV.vibration,
            onClick: VV => {
              (0, vV.n)({
                vibration: VV
              }), VV && UY("preview")
            }
          }), (0, cV.jsx)(dy, {
            settingKey: "cursorSpeed",
            label: VV("controller:settingsCursorSpeed"),
            range: sy.z,
            format: sy.L
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsCursorMagnetism"),
            checked: eV.cursorMagnetism,
            onClick: VV => {
              (0, vV.n)({
                cursorMagnetism: VV
              })
            }
          }), (0, cV.jsx)(Ky.e, {
            label: VV("controller:settingsMenuBackToCategories"),
            checked: eV.menuBackToCategories,
            onClick: VV => {
              (0, vV.n)({
                menuBackToCategories: VV
              })
            }
          }), (0, cV.jsx)(kp, {
            layoutSetting: (0, cV.jsxs)(cV.Fragment, {
              children: [wV.f.map((xV => (0, cV.jsx)(Ky.e, {
                label: VV(sy.W[xV]),
                checked: (0, wV.y)(xV, eV),
                onClick: VV => {
                  JV(!(0, wV.H)(xV, VV))
                }
              }, xV))), xV && (0, cV.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: VV("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, cV.jsx)(Qp, {}), (0, cV.jsx)(Sy, {
            text: VV("controller:settingsAlternatives")
          }), (0, cV.jsx)("div", {
            className: "ControllerSettingsHint",
            children: VV("controller:settingsAlternativesHint")
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsMenuNavigation"),
            hint: VV("controller:settingsMenuNavigationHint"),
            options: sy.$,
            value: eV.menuNavigation,
            onChange: VV => {
              (0, vV.n)({
                menuNavigation: VV
              })
            }
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsInventoryNavigation"),
            hint: VV("controller:settingsInventoryNavigationHint"),
            options: sy.S,
            value: eV.inventoryNavigation,
            onChange: VV => {
              (0, vV.n)({
                inventoryNavigation: VV
              })
            }
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsQuickChat"),
            hint: VV("controller:settingsQuickChatHint"),
            options: sy.db,
            value: eV.quickChat,
            onChange: VV => {
              (0, vV.n)({
                quickChat: VV
              })
            }
          }), (0, cV.jsx)(Iy, {
            label: VV("controller:settingsLeaderboardButton"),
            hint: VV("controller:settingsLeaderboardButtonHint"),
            options: sy.Y,
            value: eV.leaderboardButton,
            onChange: VV => {
              (0, vV.n)({
                leaderboardButton: VV
              })
            }
          }), (0, cV.jsx)(Sy, {
            text: VV("controller:settingsTester")
          }), (0, cV.jsx)(jp, {})]
        })
      }));
    (0, YV.c)(JV);
    for (const Ap of (0, UV.q)()) Ap.connected ? yV.f.handleConnectionEvent(Ap) : yV.f.handleDisconnectionEvent(Ap);
    const tp = () => null !== yV.f.getActivePad(),
      Fp = () => Yx.getState(),
      Tp = () => Yx.isSteppingSlots(),
      Pp = (VV, eV) => {
        const xV = OJ.getFocused();
        OJ.isActive() && xV && VV.contains(xV) && OJ.setFocus(eV, {
          scroll: !1
        })
      }
  },
  8792: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV,
      i: () => nV
    });
    var JV = xV(1519),
      YV = xV(1510);
    const UV = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      yV = "28de",
      pV = new Set(["1205"]),
      QV = (VV, eV) => {
        const xV = (0, JV.d)(VV);
        if ((null === xV || void 0 === xV ? void 0 : xV.vendor) === yV) return pV.has(xV.product) ? "steamdeck" : "xbox";
        if (xV && UV[xV.vendor]) return UV[xV.vendor];
        if ((0, YV.e)(VV)) return "nintendo";
        const QV = `${VV} ${null!==eV&&void 0!==eV?eV:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(QV) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(QV) ? "nintendo" : /steam deck/.test(QV) ? "steamdeck" : "xbox"
      },
      nV = VV => {
        var eV;
        return (null === (eV = (0, JV.d)(VV)) || void 0 === eV ? void 0 : eV.vendor) === yV
      }
  },
  8831: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      g: () => pV
    });
    var JV = xV(8786);
    const YV = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      UV = new Set(["capture", "gameplay"]),
      yV = ["Up", "Down", "Left", "Right"],
      pV = VV => yV.includes(VV),
      QV = .25;
    const nV = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.hn = new Array(JV.X).fill(!1), this.previousHeld = new Array(JV.X).fill(!1), this.consumedButtons = new Array(JV.X).fill(!1), this.suppressedReleases = new Array(JV.X).fill(!1), this.wakeOwned = new Array(JV.X).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, JV.z)()
      }
      register(VV) {
        return this.consumers.has(VV.name) && console.warn(`Controller consumer "${VV.name}" registered twice; the newer one replaces it.`), this.consumers.set(VV.name, VV), () => {
          var eV;
          this.consumers.get(VV.name) === VV && (this.activeName === VV.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (eV = this.peek) || void 0 === eV ? void 0 : eV.over) === VV.name && (this.peek = null), this.consumers.delete(VV.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(VV) {
        return this.hn[(0, JV.n)(VV)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.hn = new Array(JV.X).fill(!1), this.previousHeld = new Array(JV.X).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, JV.z)()
      }
      dispatch(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = VV, this.previousHeld = this.hn, this.hn = (0, JV.t)(VV.values, this.previousHeld);
        for (let UV = 0; UV < JV.X; UV++) this.suppressedReleases[UV] = !this.hn[UV] && this.consumedButtons[UV], this.hn[UV] || (this.consumedButtons[UV] = !1), this.wakeOwned[UV] && (this.hn[UV] ? (this.consumedButtons[UV] = !0, this.wakeOwned[UV] = !1) : VV.values[UV] < JV.W && (this.wakeOwned[UV] = !1));
        Math.hypot(VV.leftStick.x, VV.leftStick.y) < QV && (this.leftStickConsumed = !1), Math.hypot(VV.rightStick.x, VV.rightStick.y) < QV && (this.rightStickConsumed = !1);
        const YV = this.pickActive();
        if ((null === YV || void 0 === YV ? void 0 : YV.name) !== this.activeName) {
          var yV, pV, nV, wV, ZV, vV;
          const VV = this.activeName,
            eV = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            xV = null !== (yV = null === YV || void 0 === YV || null === (pV = YV.peek) || void 0 === pV ? void 0 : pV.call(YV)) && void 0 !== yV ? yV : null,
            UV = null === VV && !!xV && !(null === (nV = this.consumers.get(xV.over)) || void 0 === nV || !nV.onPeekFrame),
            QV = xV && (xV.over === VV || UV) ? xV : null,
            rV = null !== this.peek && this.peek.over === (null === YV || void 0 === YV ? void 0 : YV.name) ? this.peek : null;
          this.deactivateCurrent(null !== QV, null !== rV), this.activeName = null !== (wV = null === YV || void 0 === YV ? void 0 : YV.name) && void 0 !== wV ? wV : null, null === VV || this.handOffPending || this.consumeAllHeld();
          const kV = null === (ZV = null !== QV && void 0 !== QV ? QV : rV) || void 0 === ZV ? void 0 : ZV.stick;
          "left" === kV && eV.left ? this.leftStickConsumed = !1 : "right" === kV && eV.right && (this.rightStickConsumed = !1), this.peek = QV, YV || null === VV ? YV && (null === (vV = this.idleResume) || void 0 === vV ? void 0 : vV.name) === YV.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: VV,
            left: eV.left && this.leftStickConsumed,
            right: eV.right && this.rightStickConsumed
          }, YV && (this.idleResume = null);
          for (let YV = 0; YV < JV.X; YV++) this.previousHeld[YV] && !this.hn[YV] && (this.suppressedReleases[YV] = !0)
        }
        var rV, kV;
        (this.handOffPending = !1, YV) && (xV && !UV.has(YV.name) && this.consumeWakePress(YV), YV.onFrame(this.buildInput(VV, eV, xV)), this.peek && (null === (rV = this.consumers.get(this.peek.over)) || void 0 === rV || null === (kV = rV.onPeekFrame) || void 0 === kV || kV.call(rV, this.buildInput(VV, eV, !1, this.peek.stick))))
      }
      consumeWakePress(VV) {
        for (let YV = 0; YV < JV.X; YV++) {
          var eV, xV;
          const UV = JV._[YV];
          (null !== (eV = null === (xV = VV.wakePressActs) || void 0 === xV ? void 0 : xV.call(VV, UV)) && void 0 !== eV ? eV : yV.includes(UV)) || (this.hn[YV] ? this.consumedButtons[YV] = !0 : this.lastFrame.values[YV] >= JV.S && (this.wakeOwned[YV] = !0))
        }
      }
      pickActive() {
        for (const VV of YV) {
          const eV = this.consumers.get(VV);
          if (eV && eV.isActive()) return eV
        }
        return null
      }
      deactivateCurrent() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var xV, JV, YV, UV;
        this.activeName && (null === (xV = this.consumers.get(this.activeName)) || void 0 === xV || null === (JV = xV.onDeactivate) || void 0 === JV || JV.call(xV, VV));
        this.peek && !eV && (null === (YV = this.consumers.get(this.peek.over)) || void 0 === YV || null === (UV = YV.onDeactivate) || void 0 === UV || UV.call(YV, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let YV = 0; YV < JV.X; YV++) this.hn[YV] && (this.consumedButtons[YV] = !0);
        const {
          leftStick: eV,
          rightStick: xV
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== VV && (this.leftStickConsumed || Math.hypot(eV.x, eV.y) >= QV), this.rightStickConsumed = "right" !== VV && (this.rightStickConsumed || Math.hypot(xV.x, xV.y) >= QV)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(VV) {
        const eV = (0, JV.n)(VV);
        this.hn[eV] && (this.consumedButtons[eV] = !0)
      }
      buildInput(VV, eV, xV, YV) {
        const UV = this.hn,
          yV = this.previousHeld,
          pV = YV ? new Array(JV.X).fill(!0) : [...this.consumedButtons],
          QV = YV ? pV : [...this.suppressedReleases],
          nV = !this.leftStickConsumed && (!YV || "left" === YV),
          wV = !this.rightStickConsumed && (!YV || "right" === YV);
        return {
          frame: VV,
          dtMs: eV,
          isHeld: VV => {
            const eV = (0, JV.n)(VV);
            return UV[eV] && !pV[eV]
          },
          wasPressed: VV => {
            const eV = (0, JV.n)(VV);
            return UV[eV] && !yV[eV] && !pV[eV]
          },
          wasReleased: VV => {
            const eV = (0, JV.n)(VV);
            return !UV[eV] && yV[eV] && !QV[eV]
          },
          value: eV => {
            const xV = (0, JV.n)(eV);
            return pV[xV] ? 0 : VV.values[xV]
          },
          leftStick: nV ? VV.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: wV ? VV.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: xV
        }
      }
    }
  },
  8811: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV.f,
      g: () => ZV.i,
      i: () => MV,
      j: () => zV,
      n: () => GV,
      p: () => WV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(1542),
      yV = xV(40),
      pV = xV(8816),
      QV = xV(8786),
      nV = xV(8804),
      wV = xV(8777),
      ZV = xV(2147),
      vV = xV(8825);
    const rV = {
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
      kV = "controllerSettings",
      bV = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      EV = ["auto", ...pV.d],
      BV = (VV, eV) => "string" === typeof eV && VV.includes(eV),
      jV = VV => eV => "number" === typeof eV && Number.isFinite(eV) ? (0, vV.w)(eV, VV) : void 0,
      qV = VV => "boolean" === typeof VV ? VV : void 0,
      tV = VV => eV => BV(VV, eV) ? eV : void 0,
      FV = {
        lookSensitivityX: jV(vV.ib),
        lookSensitivityY: jV(vV.ib),
        aimLookSensitivity: jV(vV.k),
        invertLookX: qV,
        invertLookY: qV,
        lookCurve: tV(QV.Q),
        lookDeadzone: jV(vV.C),
        moveDeadzone: jV(vV.C),
        swapSticks: qV,
        autoSprint: qV,
        sneakMode: tV(["toggle", "hold"]),
        tapHoldTime: tV(["short", "medium", "long"]),
        attackMode: tV(["hold", "toggle"]),
        promptFamily: tV(EV),
        hideButtonHints: qV,
        vibration: qV,
        cursorSpeed: jV(vV.z),
        cursorMagnetism: qV,
        buttonRepeat: tV(QV.r),
        largePointer: qV,
        menuBackToCategories: qV,
        swapConfirmBack: qV,
        menuNavigation: tV(["hybrid", "focus", "cursor"]),
        inventoryNavigation: tV(["hybrid", "slot", "cursor"]),
        quickChat: tV(["wheel", "off"]),
        leaderboardButton: tV(["shop", "leaderboard"]),
        gyroAiming: qV,
        gyroSensitivity: jV(vV.R),
        gyroActivation: tV(["always", "aiming", "button"]),
        gyroButton: tV(QV._),
        emoteButton: tV(["tapHold", "wheel"])
      },
      TV = [{
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
      PV = VV => {
        const eV = {};
        if ("object" !== typeof VV || null === VV) return eV;
        for (const [xV, JV] of Object.entries(VV)) Object.prototype.hasOwnProperty.call(nV.d, xV) && BV(QV._, JV) && (eV[xV] = JV);
        return eV
      },
      AV = VV => {
        const eV = {};
        for (const xV of Object.keys(rV))("bindings" === xV ? Object.keys(VV.bindings).length > 0 : VV[xV] !== rV[xV]) && (eV[xV] = VV[xV]);
        0 !== Object.keys(eV).length ? yV.m.setItem(kV, eV) : yV.m.removeItem(kV)
      };
    let NV = (() => {
        const VV = yV.m.getItem(kV),
          eV = (VV => {
            const eV = "object" === typeof VV && null !== VV ? VV : {},
              xV = {
                ...rV,
                bindings: PV(eV.bindings)
              };
            for (const YV of Object.keys(FV)) {
              const VV = FV[YV](eV[YV]);
              void 0 !== VV && (xV[YV] = VV)
            }
            const JV = Object.keys(eV).filter((VV => !!Object.prototype.hasOwnProperty.call(rV, VV) && ("bindings" === VV ? "object" !== typeof eV.bindings || null === eV.bindings || Object.keys(eV.bindings).length !== Object.keys(xV.bindings).length : xV[VV] !== eV[VV])));
            return JV.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${JV.join(", ")}`), xV
          })(VV);
        return null !== VV && void 0 !== VV && AV(eV), eV
      })(),
      XV = {
        ...NV,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const VV = {},
            eV = new URLSearchParams(window.location.search);
          for (const {
              param: xV,
              key: JV
            }
            of TV) {
            const YV = FV[JV](eV.get(xV));
            void 0 !== YV && (VV[JV] = YV)
          }
          return VV
        })()
      };
    const MV = () => XV,
      zV = () => {
        var VV, eV;
        const xV = MV().promptFamily;
        return "auto" !== xV ? xV : null !== (VV = null === (eV = wV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : "xbox"
      },
      GV = VV => {
        const eV = XV;
        NV = {
          ...NV,
          ...VV
        }, AV(NV), XV = {
          ...XV,
          ...VV
        }, (VV => {
          YV.h.QZ(ZV.i, XV), bV.some((eV => VV[eV] !== XV[eV])) && YV.h.QZ(ZV.f, XV)
        })(eV)
      },
      WV = () => {
        const [VV, eV] = (0, JV.useState)(XV);
        return (0, UV.g)(ZV.i, eV), VV
      }
  },
  9274: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    const JV = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      YV = VV => JV.has(VV)
  },
  8777: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => bV.d,
      f: () => qV
    });
    var JV = xV(8786),
      YV = xV(8792);
    const UV = .1,
      yV = .3;
    class pV {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(VV, eV) {
        const xV = null === this.lastMs ? 0 : Math.min(Math.max(0, eV - this.lastMs), 100);
        this.lastMs = eV;
        const JV = Math.hypot(VV.x, VV.y);
        if (JV >= yV) return this.anchor = null, void(this.returning = !0);
        JV >= UV || (this.returning = !1);
        const YV = this.anchor;
        if (!YV || Math.hypot(VV.x - YV.x, VV.y - YV.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: VV.x,
          y: VV.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += xV, this.steadyMs < 1e3) return;
        const pV = Math.max(JV, Math.hypot(YV.x, YV.y));
        pV < UV ? this.deadzone = 0 : this.returning && (this.deadzone = pV + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(VV) {
        return Math.hypot(VV.x, VV.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : VV
      }
    }
    const QV = (VV, eV) => {
        var xV, JV;
        return null !== (xV = VV && (null === (JV = Object.getOwnPropertyDescriptor(VV, eV)) || void 0 === JV ? void 0 : JV.get)) && void 0 !== xV ? xV : null
      },
      nV = VV => {
        const eV = VV.vendorName;
        return "string" === typeof eV ? eV : void 0
      },
      wV = ((VV, eV) => {
        const xV = QV(VV, "index"),
          JV = QV(VV, "id"),
          YV = QV(VV, "connected"),
          UV = QV(VV, "mapping"),
          yV = QV(VV, "buttons"),
          pV = QV(VV, "axes"),
          wV = QV(eV, "pressed"),
          ZV = QV(eV, "value");
        return xV && JV && YV && UV && yV && pV && wV && ZV ? VV => {
          const eV = yV.call(VV),
            QV = pV.call(VV),
            vV = {
              index: Number(xV.call(VV)),
              id: String(JV.call(VV)),
              connected: !0 === YV.call(VV),
              mapping: String(UV.call(VV)),
              buttons: [],
              axes: [],
              vendorName: nV(VV)
            };
          for (let xV = 0; xV < eV.length; xV++) vV.buttons.push({
            pressed: !0 === wV.call(eV[xV]),
            value: Number(ZV.call(eV[xV]))
          });
          for (let xV = 0; xV < QV.length; xV++) vV.axes.push(Number(QV[xV]));
          return vV
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      ZV = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var vV = xV(1501),
      rV = xV(1510);
    const kV = VV => ({
      pressed: VV,
      value: VV ? 1 : 0
    });
    var bV = xV(2147);
    const EV = yV,
      BV = VV => {
        const eV = new Array(JV.X).fill(0);
        for (let xV = 0; xV < JV.X && xV < VV.buttons.length; xV++) {
          const YV = VV.buttons[xV];
          eV[xV] = YV.pressed && !(0, JV.P)(xV) ? Math.max(YV.value, JV.C) : YV.value
        }
        return eV
      },
      jV = (VV, eV) => {
        var xV, JV;
        return {
          x: null !== (xV = VV.axes[eV]) && void 0 !== xV ? xV : 0,
          y: null !== (JV = VV.axes[eV + 1]) && void 0 !== JV ? JV : 0
        }
      };
    const qV = new class {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wV;
        this.readGamepads = VV, this.requireTrustedPads = eV, this.nativeReader = xV, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = VV => {
          VV.isTrusted && this.trustedIndices.add(VV.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = VV => {
          this.trustedIndices.delete(VV.gamepad.index)
        }, this.iZ = VV => {
          if (this.rafId = 0, !this.running) return;
          const eV = 0 === this.lastTimestampMs ? 16 : Math.min(100, VV - this.lastTimestampMs);
          this.lastTimestampMs = VV;
          try {
            this.poll(VV, eV)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.iZ))
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
      onFrame(VV) {
        return this.frameListeners.add(VV), () => {
          this.frameListeners.delete(VV)
        }
      }
      onActivePadChanged(VV) {
        return this.connectionListeners.add(VV), () => {
          this.connectionListeners.delete(VV)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(VV) {
        return this.connectedListeners.add(VV), () => {
          this.connectedListeners.delete(VV)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const VV = this.readPads()[this.activeInfo.index],
          eV = VV ? this.readPad(VV) : null;
        return eV && eV.id === this.activeInfo.id ? VV : null
      }
      poll(VV, eV) {
        var xV, YV;
        const UV = this.readPads();
        let yV = null,
          QV = !1;
        const nV = [],
          wV = Math.max(UV.length, this.slots.length);
        for (let qV = 0; qV < wV; qV++) {
          var ZV;
          const eV = qV < UV.length ? UV[qV] : null,
            xV = eV ? this.readPad(eV) : null;
          if (!xV || !xV.connected || !this.isUsable(xV)) {
            this.slots[qV] = null;
            continue
          }
          let YV = this.slots[qV];
          YV && YV.id === xV.id || (YV = {
            id: xV.id,
            hn: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new pV,
            rightRest: new pV
          }, this.slots[qV] = YV);
          const wV = jV(xV, 0),
            vV = jV(xV, 2);
          !YV.leftSettled && Math.hypot(wV.x, wV.y) < EV && (YV.leftSettled = !0), !YV.rightSettled && Math.hypot(vV.x, vV.y) < EV && (YV.rightSettled = !0), YV.leftRest.observe(wV, VV), YV.rightRest.observe(vV, VV);
          const rV = BV(xV),
            kV = (0, JV.t)(rV, YV.hn),
            bV = YV.hn,
            tV = kV.map(((VV, eV) => VV && !bV[eV]));
          YV.hn = kV;
          const FV = {
            pad: xV,
            slot: YV,
            values: rV
          };
          qV === (null === (ZV = this.activeInfo) || void 0 === ZV ? void 0 : ZV.index) && xV.id === this.activeInfo.id ? (yV = FV, QV = tV.includes(!0)) : tV.includes(!0) && nV.push({
            polled: FV,
            rose: tV
          })
        }
        const vV = this.slots.some((VV => null !== VV));
        if (vV !== this.anyPadConnected) {
          this.anyPadConnected = vV;
          for (const VV of this.connectedListeners) VV()
        }
        const rV = null !== (xV = null === (YV = yV) || void 0 === YV ? void 0 : YV.slot.hn) && void 0 !== xV ? xV : [],
          kV = QV ? void 0 : nV.find((VV => {
            let {
              rose: eV
            } = VV;
            return eV.some(((VV, eV) => VV && !rV[eV]))
          }));
        if (kV ? (yV = kV.polled, this.setActive(kV.polled.pad)) : this.activeInfo && !yV && this.setActive(null), !yV || !this.activeInfo) return;
        const bV = ((VV, eV) => {
          let {
            pad: xV,
            slot: YV,
            values: UV
          } = VV;
          const yV = (0, JV.z)(eV);
          return yV.values = UV, YV.leftSettled && (yV.leftStick = YV.leftRest.apply(jV(xV, 0))), YV.rightSettled && (yV.rightStick = YV.rightRest.apply(jV(xV, 2))), yV
        })(yV, VV);
        for (const JV of this.frameListeners) JV(bV, eV, this.activeInfo)
      }
      readPad(VV) {
        const eV = this.readSnapshot(VV);
        return eV && (0, rV.g)(eV) ? (VV => {
          const eV = eV => {
              var xV;
              return null !== (xV = VV.buttons[eV]) && void 0 !== xV ? xV : kV(!1)
            },
            xV = eV => {
              var xV;
              return null !== (xV = VV.axes[eV]) && void 0 !== xV ? xV : 0
            },
            JV = VV.axes.length > 9,
            YV = JV ? (VV => {
              const eV = 0 !== VV;
              return {
                up: eV && (VV >= -1 && VV < -.7 || VV >= .95 && VV <= 1),
                right: eV && VV >= -.75 && VV < -.1,
                down: eV && VV >= -.2 && VV < .45,
                left: eV && VV >= .4 && VV <= 1
              }
            })(xV(9)) : {
              up: xV(5) < -.5,
              down: xV(5) > .5,
              left: xV(4) < -.5,
              right: xV(4) > .5
            };
          return {
            ...VV,
            mapping: "standard",
            buttons: [eV(1), eV(2), eV(0), eV(3), eV(4), eV(5), eV(6), eV(7), eV(8), eV(9), eV(10), eV(11), kV(YV.up), kV(YV.down), kV(YV.left), kV(YV.right), eV(12)],
            axes: [xV(0), xV(1), xV(2), xV(JV ? 5 : 3)]
          }
        })(eV) : eV
      }
      readSnapshot(VV) {
        if (this.nativeReader) try {
          return this.nativeReader(VV)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (VV => {
          const eV = VV;
          return {
            index: eV.index,
            id: eV.id,
            connected: eV.connected,
            mapping: eV.mapping,
            buttons: Array.from(eV.buttons, (VV => ({
              pressed: VV.pressed,
              value: VV.value
            }))),
            axes: Array.from(eV.axes),
            vendorName: nV(VV)
          }
        })(VV)
      }
      isUsable(VV) {
        return !(0, vV.d)(VV.id) && ("standard" !== VV.mapping ? (this.warnedNonStandardIds.has(VV.id) || (this.warnedNonStandardIds.add(VV.id), console.warn(`Controller "${VV.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(VV.index))
      }
      setActive(VV) {
        this.activeInfo = VV ? {
          index: VV.index,
          id: VV.id,
          family: (0, YV.e)(VV.id, VV.vendorName)
        } : null;
        for (const eV of this.connectionListeners) eV(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (VV) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", VV)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.iZ))
      }
    }((() => ZV ? ZV.call(navigator) : []), !0);
    qV.listenForConnections()
  },
  9355: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      c: () => yV,
      e: () => pV,
      h: () => YV
    });
    var JV = xV(9363);
    const YV = VV => {
        const eV = [];
        VV.holdingGun && eV.push({
          kind: "reload"
        }), VV.touchscreenActionButton && eV.push({
          kind: "touchButton",
          label: VV.touchscreenActionButton
        });
        for (const UV of null !== (xV = null === (YV = VV.customButtons) || void 0 === YV ? void 0 : YV.filter(JV.d)) && void 0 !== xV ? xV : []) {
          var xV, YV;
          eV.push({
            kind: "customButton",
            id: UV.id,
            icon: UV.icon,
            description: UV.description
          })
        }
        return eV
      },
      UV = VV => VV.length >= 2,
      yV = VV => "specialAction" !== VV.kind,
      pV = (VV, eV) => {
        if (null === VV || null === eV) return VV === eV;
        if (VV.kind !== eV.kind) return !1;
        switch (VV.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return VV.action === eV.action;
          case "customButton":
            return VV.id === eV.id && VV.icon === eV.icon;
          case "touchButton":
            return VV.label === eV.label
        }
      }
  },
  9281: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
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
  9346: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      d: () => rV,
      e: () => ZV,
      f: () => kV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(1542),
      yV = xV(9355),
      pV = xV(9372);
    let QV = null;
    const nV = () => QV,
      wV = VV => {
        (0, yV.e)(QV, VV) || (QV = VV, YV.h.QZ(pV.e, QV))
      },
      ZV = () => {
        const [VV, eV] = (0, JV.useState)(nV);
        return (0, UV.g)(pV.e, eV), VV
      };
    let vV = !1;
    const rV = VV => {
        VV !== vV && (vV = VV, YV.h.QZ(pV.h, VV))
      },
      kV = () => {
        const [VV, eV] = (0, JV.useState)(vV);
        return (0, UV.g)(pV.h, eV), VV
      }
  },
  9386: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      e: () => pV
    });
    var JV = xV(32),
      YV = xV(9372);
    let UV = !1;
    const yV = () => UV,
      pV = VV => {
        VV !== UV && (UV = VV, JV.h.QZ(YV.j, UV))
      }
  },
  9379: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      f: () => QV
    });
    var JV = xV(32),
      YV = xV(9372);
    let UV = null,
      yV = 0;
    const pV = () => UV,
      QV = VV => {
        null === VV && null === UV || (UV = null === VV ? null : {
          id: ++yV,
          holdMs: VV
        }, JV.h.QZ(YV.l, UV))
      }
  },
  9372: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => JV,
      h: () => YV,
      j: () => pV,
      l: () => QV,
      n: () => nV,
      o: () => yV
    });
    const JV = "controllerActionHintChanged",
      YV = "controllerActionWheelHintChanged",
      UV = "controllerOpenChat",
      yV = "controllerSneakToggledChanged",
      pV = "controllerAttackLatchedChanged",
      QV = "controllerDropStackHoldChanged",
      nV = "controllerPickBlockHintChanged"
  },
  9390: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      f: () => pV
    });
    var JV = xV(32),
      YV = xV(9372);
    let UV = !1;
    const yV = () => UV,
      pV = VV => {
        VV !== UV && (UV = VV, JV.h.QZ(YV.n, UV))
      }
  },
  9435: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      h: () => pV
    });
    var JV = xV(32),
      YV = xV(9372);
    let UV = !1;
    const yV = () => UV,
      pV = VV => {
        VV !== UV && (UV = VV, JV.h.QZ(YV.o, UV))
      }
  },
  9326: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        this.downAtMs = null
      }
      update(VV, eV, xV, JV) {
        if (VV) return this.downAtMs = xV, null;
        if (null === this.downAtMs) return null;
        const YV = xV - this.downAtMs >= JV;
        return eV ? YV ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, YV ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8852: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      g: () => vV,
      i: () => pV,
      j: () => qV,
      n: () => jV
    });
    var JV = xV(40),
      YV = xV(8816),
      UV = xV(8786);
    const yV = (() => {
        try {
          return xV(8859)
        } catch {
          return null
        }
      })(),
      pV = [...UV._, "LeftStick", "RightStick"],
      QV = new Map,
      nV = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      wV = (new Set(Object.values(nV)), {
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
      ZV = (VV, eV) => {
        var xV, JV;
        return null !== (xV = null === (JV = wV[nV[VV]]) || void 0 === JV ? void 0 : JV[eV]) && void 0 !== xV ? xV : 1
      },
      vV = (VV, eV) => {
        const xV = `./${nV[VV]}/${eV}.svg`;
        let JV = QV.get(xV);
        return void 0 === JV && (JV = yV ? yV(xV) : "", QV.set(xV, JV)), JV
      },
      rV = new Set,
      kV = [],
      bV = VV => {
        if (!rV.has(VV)) {
          rV.add(VV);
          for (const eV of pV) {
            const xV = vV(VV, eV);
            if (xV) {
              const VV = new Image;
              VV.crossOrigin = "anonymous", VV.src = xV, kV.push(VV)
            }
          }
        }
      },
      EV = "controllerGlyphFamily";
    let BV = null;
    const jV = VV => {
        VV !== BV && (BV = VV, JV.m.setItem(EV, VV), bV(VV))
      },
      qV = () => {
        const VV = JV.m.getItem(EV);
        (0, YV.h)(VV) && VV !== BV && (BV = VV, bV(VV))
      }
  },
  9462: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => oV,
      e: () => cV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(1542),
      yV = xV(8796),
      pV = xV(8777),
      QV = xV(8831),
      nV = xV(8811);
    const wV = {
        x: 0,
        y: 0,
        z: 0
      },
      ZV = Math.PI / 180,
      vV = VV => Math.hypot(VV.x, VV.y, VV.z),
      rV = (VV, eV) => ({
        x: VV.x * eV,
        y: VV.y * eV,
        z: VV.z * eV
      }),
      kV = (VV, eV) => ({
        x: VV.x + eV.x,
        y: VV.y + eV.y,
        z: VV.z + eV.z
      }),
      bV = (VV, eV) => ({
        x: VV.x - eV.x,
        y: VV.y - eV.y,
        z: VV.z - eV.z
      }),
      EV = VV => {
        const eV = vV(VV);
        return 0 === eV ? wV : rV(VV, 1 / eV)
      },
      BV = VV => ({
        min: {
          ...VV
        },
        max: {
          ...VV
        }
      }),
      jV = (VV, eV) => ({
        min: {
          x: Math.min(VV.min.x, eV.x),
          y: Math.min(VV.min.y, eV.y),
          z: Math.min(VV.min.z, eV.z)
        },
        max: {
          x: Math.max(VV.max.x, eV.x),
          y: Math.max(VV.max.y, eV.y),
          z: Math.max(VV.max.z, eV.z)
        }
      }),
      qV = (VV, eV) => VV.max.x - VV.min.x <= eV && VV.max.y - VV.min.y <= eV && VV.max.z - VV.min.z <= eV;
    class tV {
      constructor() {
        this.bias = wV, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = wV, this.windowSec = 0
      }
      update(VV) {
        const eV = this.gyroRange ? jV(this.gyroRange, VV.gyro) : BV(VV.gyro),
          xV = VV.accel ? this.accelRange ? jV(this.accelRange, VV.accel) : BV(VV.accel) : null;
        if (!qV(eV, 1) || xV && !qV(xV, .01)) return void this.restartWindow(VV);
        if (this.gyroRange = eV, this.accelRange = xV, this.sum = kV(this.sum, rV(VV.gyro, VV.dtSec)), this.windowSec += VV.dtSec, this.windowSec < 1) return;
        const JV = rV(this.sum, 1 / this.windowSec);
        if (vV(JV) > 5) return;
        const YV = bV(JV, this.bias);
        let UV = 0;
        !this.calibrated || this.windowSec >= 3 ? UV = 1 : vV(YV) <= 1 && (UV = Math.min(1, VV.dtSec / 1)), this.bias = kV(this.bias, rV(YV, UV)), this.calibrated = this.calibrated || UV > 0
      }
      correct(VV) {
        return bV(VV, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = wV, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = wV, this.windowSec = 0
      }
      restartWindow(VV) {
        this.gyroRange = BV(VV.gyro), this.accelRange = VV.accel ? BV(VV.accel) : null, this.sum = wV, this.windowSec = 0
      }
    }
    class FV {
      constructor() {
        this.down = null
      }
      update(VV, eV, xV) {
        const JV = EV(rV(eV, -1));
        if (!this.down) return this.down = JV, JV;
        const YV = rV(VV, ZV * xV),
          UV = this.down,
          yV = {
            x: UV.x - (YV.y * UV.z - YV.z * UV.y),
            y: UV.y - (YV.z * UV.x - YV.x * UV.z),
            z: UV.z - (YV.x * UV.y - YV.y * UV.x)
          },
          pV = 0 === vV(JV) ? 0 : Math.min(1, xV / .25);
        var QV, nV;
        return this.down = EV((nV = pV, kV(QV = yV, rV(bV(JV, QV), nV)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class TV {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(VV, eV, xV) {
        const JV = Math.hypot(VV, eV),
          YV = Math.max(0, Math.min(1, (JV - 2) / 2)),
          UV = {
            yaw: VV * (1 - YV),
            pitch: eV * (1 - YV),
            dtSec: xV
          };
        for (this.entries.push(UV), this.windowSec += xV; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let yV = 0,
          pV = 0;
        for (const nV of this.entries) yV += nV.yaw * nV.dtSec, pV += nV.pitch * nV.dtSec;
        const QV = this.windowSec > 0 ? {
          yaw: yV / this.windowSec,
          pitch: pV / this.windowSec
        } : {
          yaw: UV.yaw,
          pitch: UV.pitch
        };
        return {
          yaw: VV * YV + QV.yaw,
          pitch: eV * YV + QV.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class PV {
      constructor() {
        this.calibrator = new tV, this.gravity = new FV, this.smoother = new TV
      }
      process(VV, eV, xV) {
        const JV = Math.max(0, Math.min(.05, eV));
        this.calibrator.update({
          ...VV,
          dtSec: JV
        });
        const YV = this.calibrator.correct(VV.gyro);
        let UV = YV.y;
        "player" === xV && VV.accel && (UV = ((VV, eV) => {
          const xV = VV.y * eV.y + VV.z * eV.z;
          return -Math.sign(xV) * Math.min(1.41 * Math.abs(xV), Math.hypot(VV.y, VV.z))
        })(YV, this.gravity.update(YV, VV.accel, JV)));
        const yV = this.smoother.apply(UV, YV.x, JV),
          pV = ((VV, eV) => {
            const xV = Math.hypot(VV, eV);
            if (xV >= 1) return {
              yaw: VV,
              pitch: eV
            };
            const JV = xV / 1;
            return {
              yaw: VV * JV,
              pitch: eV * JV
            }
          })(yV.yaw, yV.pitch);
        return {
          yawDeg: pV.yaw * JV,
          pitchDeg: pV.pitch * JV
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
    const AV = (VV, eV) => {
      var xV, JV, YV;
      const UV = eV * ZV,
        yV = null !== (xV = VV.beta) && void 0 !== xV ? xV : 0,
        pV = null !== (JV = VV.gamma) && void 0 !== JV ? JV : 0;
      return {
        x: yV * Math.cos(UV) - pV * Math.sin(UV),
        y: yV * Math.sin(UV) + pV * Math.cos(UV),
        z: null !== (YV = VV.alpha) && void 0 !== YV ? YV : 0
      }
    };
    var NV = xV(9467);
    class XV {
      constructor(VV, eV, xV) {
        this.hid = VV, this.sink = eV, this.onControllersChanged = xV, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = VV => {
          this.openController(VV.device).catch((VV => {
            console.warn("Could not open motion controller", VV)
          }))
        }, this.onDisconnect = VV => {
          this.opening.has(VV.device) && this.disconnectedWhileOpening.add(VV.device);
          const eV = this.controllers.get(VV.device);
          eV && (this.forget(eV), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const VV = await this.hid.getDevices();
        for (const eV of VV) await this.openController(eV).catch((VV => {
          console.warn("Could not open motion controller", VV)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const VV of [...this.controllers.values()]) this.forget(VV);
        this.onControllersChanged()
      }
      async request() {
        const VV = await this.hid.requestDevice({
          filters: NV.l
        });
        let eV = 0;
        for (const xV of VV) await this.openController(xV).catch((VV => {
          console.warn("Could not open motion controller", VV), eV++
        }));
        return eV
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((VV => null !== (0, NV.g)(VV.vendorId, VV.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((VV => VV.kind))
      }
      forget(VV) {
        VV.device.removeEventListener("inputreport", VV.onReport), this.controllers.get(VV.device) === VV && this.controllers.delete(VV.device)
      }
      async openController(VV) {
        const eV = (0, NV.g)(VV.vendorId, VV.productId);
        if (!eV || !this.running || this.controllers.has(VV) || this.opening.has(VV)) return;
        this.opening.add(VV);
        let xV = !1;
        try {
          VV.opened || await VV.open()
        } finally {
          this.opening.delete(VV), xV = this.disconnectedWhileOpening.delete(VV)
        }
        if (xV) return void VV.close().catch((VV => {
          console.debug("Could not close an unplugged motion controller", VV)
        }));
        if (!this.running) return;
        const JV = {
          device: VV,
          kind: eV,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: VV => {
            this.onReport(JV, VV)
          }
        };
        this.controllers.set(VV, JV), VV.addEventListener("inputreport", JV.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(JV)
        } catch (YV) {
          console.warn(`Could not turn on motion for ${eV}`, YV), this.controllers.get(VV) === JV && (this.forget(JV), this.onControllersChanged())
        }
      }
      async enableMotion(VV) {
        let {
          device: eV,
          kind: xV
        } = VV;
        if ((0, NV.k)(xV))
          for (const JV of NV.v[xV]) await eV.receiveFeatureReport(JV).catch((VV => {
            console.debug(`Motion controller feature report ${JV} unavailable`, VV)
          }));
        else
          for (let JV = 0; JV < 2; JV++)
            for (const {
                subcommand: VV,
                args: xV
              }
              of NV.x) await eV.sendReport(NV.A, (0, NV.e)(this.switchPacketCounter++, VV, xV)), await new Promise((VV => {
              setTimeout(VV, 60)
            }))
      }
      onReport(VV, eV) {
        const xV = (0, NV.r)(VV.kind, eV.reportId, eV.data, VV.device.productId);
        if (!xV) return;
        const JV = null === VV.lastEventMs ? 0 : (eV.timeStamp - VV.lastEventMs) / 1e3;
        VV.lastEventMs = eV.timeStamp;
        let YV = xV.dtSec;
        if (null !== YV && JV > 0 && (YV = Math.max(.001, Math.min(.017, JV / xV.readings.length))), null === YV && null !== xV.sensorClock && (0, NV.k)(VV.kind)) {
          const eV = (0, NV.u)(VV.kind, VV.lastClock, xV.sensorClock);
          VV.lastClock = xV.sensorClock, YV = 0 === eV ? null : eV
        }
        if (VV.lastReadingMs = eV.timeStamp, this.isPreferred(VV, eV.timeStamp))
          for (const yV of xV.readings) {
            var UV;
            this.sink(yV, null !== (UV = YV) && void 0 !== UV ? UV : JV, `hid${VV.openedOrder}`)
          }
      }
      isPreferred(VV, eV) {
        const xV = VV => 1e6 * NV.q[VV.kind] + VV.openedOrder;
        for (const JV of this.controllers.values())
          if (JV !== VV && eV - JV.lastReadingMs < 500 && xV(JV) < xV(VV)) return !1;
        return !0
      }
    }
    var MV = xV(99);
    const zV = () => DeviceMotionEvent,
      GV = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, MV.isMobile)(),
      WV = () => {
        var VV;
        const eV = null === (VV = window.screen.orientation) || void 0 === VV ? void 0 : VV.angle;
        return "number" === typeof eV ? eV : "number" === typeof window.orientation ? window.orientation : 0
      };
    class RV {
      constructor(VV, eV) {
        this.sink = VV, this.onStateChanged = eV, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((VV => {
            console.warn("Could not enable the motion sensor", VV)
          }))
        }, this.onMotion = VV => {
          const eV = VV.rotationRate;
          if (!eV || null === eV.alpha && null === eV.beta && null === eV.gamma) return;
          const xV = null === this.lastEventMs ? 0 : (VV.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = VV.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: AV(eV, WV()),
            accel: null
          }, xV, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof zV().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const VV = zV().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof VV) return void this.listen();
        let eV;
        this.disarmGestureRequest();
        try {
          eV = await VV.call(DeviceMotionEvent)
        } catch (xV) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), xV
        }
        this.wanted && ("granted" === eV ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(VV) {
        this.state !== VV && (this.state = VV, this.onStateChanged())
      }
    }
    const gV = "controllerGyroStatusChanged",
      DV = {
        uR: 0,
        eD: 0
      },
      iV = VV => {
        var eV, xV;
        return "undefined" === typeof document || (null === (eV = null === (xV = document.featurePolicy) || void 0 === xV ? void 0 : xV.allowsFeature(VV)) || void 0 === eV || eV)
      };
    class CV {
      constructor() {
        this.processor = new PV, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = VV => {
          const eV = VV.gyroAiming && pV.f.hasConnectedPad();
          var xV, JV;
          eV !== this.phoneRunning && (this.phoneRunning = eV, eV ? null === (xV = this.phone) || void 0 === xV || xV.start() : null === (JV = this.phone) || void 0 === JV || JV.stop());
          if (VV.gyroAiming !== this.running) {
            var YV, UV;
            if (this.running = VV.gyroAiming, this.running) null === (YV = this.hid) || void 0 === YV || YV.start().catch((VV => {
              console.warn("Could not open motion controllers", VV)
            }));
            else null === (UV = this.hid) || void 0 === UV || UV.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          YV.h.QZ(gV, this.getStatus())
        };
        const VV = (() => {
            var VV;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (VV = navigator.hid) && void 0 !== VV ? VV : null
          })(),
          eV = iV("hid");
        this.hidBlocked = null !== VV && !eV, this.hid = VV && eV ? new XV(VV, ((VV, eV, xV) => {
          this.lastHidReadingMs = performance.now(), this.feed(VV, eV, "player", xV)
        }), this.publishStatus) : null;
        const xV = iV("accelerometer") && iV("gyroscope");
        this.phoneBlocked = GV() && !xV, this.phone = GV() && xV ? new RV(((VV, eV, xV) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(VV, eV, "local", xV)
        }), this.publishStatus) : null, YV.h.subscribe(nV.g, this.syncWithSettings), pV.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, nV.i)()), this.publishStatus()
        })), this.syncWithSettings((0, nV.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var VV, eV, xV, JV;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (VV = null === (eV = this.hid) || void 0 === eV ? void 0 : eV.getConnectedKinds()) && void 0 !== VV ? VV : [],
          phoneMotion: null !== (xV = null === (JV = this.phone) || void 0 === JV ? void 0 : JV.getState()) && void 0 !== xV ? xV : "off",
          padConnected: pV.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var VV;
        await (null === (VV = this.phone) || void 0 === VV ? void 0 : VV.requestPermission())
      }
      drainLookDelta() {
        const VV = performance.now();
        VV - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = VV;
        const eV = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const xV = (0, nV.i)();
        return xV.gyroAiming && (VV => {
          let {
            activation: eV,
            isHeld: xV,
            useButton: JV,
            gyroButton: YV
          } = VV;
          return "always" === eV || xV("aiming" === eV ? JV : YV)
        })({
          activation: xV.gyroActivation,
          isHeld: VV => QV.c.isButtonHeld(VV),
          useButton: (0, yV.i)("use"),
          gyroButton: xV.gyroButton
        }) ? ((VV, eV) => ({
          uR: -VV.yawDeg * eV * ZV,
          eD: -VV.pitchDeg * eV * ZV
        }))(eV, xV.gyroSensitivity) : DV
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(VV, eV) {
        this.feed(VV, eV, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(VV, eV, xV, JV) {
        this.source !== JV && (this.processor.reset(), this.source = JV);
        const YV = this.processor.process(VV, eV, xV);
        this.pendingYawDeg += YV.yawDeg, this.pendingPitchDeg += YV.pitchDeg
      }
    }
    let aV = null;
    const oV = () => (aV || (aV = new CV), aV),
      cV = () => {
        const [VV, eV] = (0, JV.useState)((() => oV().getStatus()));
        return (0, UV.g)(gV, eV), (0, JV.useEffect)((() => {
          eV(oV().getStatus())
        }), []), VV
      }
  },
  9467: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => qV,
      e: () => FV,
      g: () => QV,
      k: () => JV,
      l: () => pV,
      o: () => nV,
      q: () => wV,
      r: () => jV,
      u: () => EV,
      v: () => PV,
      x: () => TV
    });
    const JV = VV => "dualShock4" === VV || "dualSense" === VV,
      YV = 1356,
      UV = 1406,
      yV = [{
        vendorId: YV,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: YV,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: YV,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: YV,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: YV,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: UV,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: UV,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: UV,
        productId: 8199,
        kind: "joyConRight"
      }],
      pV = yV.map((VV => {
        let {
          vendorId: eV,
          productId: xV
        } = VV;
        return {
          vendorId: eV,
          productId: xV
        }
      })),
      QV = (VV, eV) => {
        var xV, JV;
        return null !== (xV = null === (JV = yV.find((xV => xV.vendorId === VV && xV.productId === eV))) || void 0 === JV ? void 0 : JV.kind) && void 0 !== xV ? xV : null
      },
      nV = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      wV = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      ZV = 2e3 / 32767,
      vV = 1 / 8192,
      rV = 936 / 13371,
      kV = (VV, eV, xV) => ({
        x: VV.getInt16(eV, !0) * xV,
        y: VV.getInt16(eV + 2, !0) * xV,
        z: VV.getInt16(eV + 4, !0) * xV
      }),
      bV = VV => 0 === VV.x && 0 === VV.y && 0 === VV.z,
      EV = (VV, eV, xV) => null === eV ? null : "dualShock4" === VV ? 16 * (xV - eV & 65535) / 3 / 1e6 : (xV - eV >>> 0) / 3 / 1e6,
      BV = (VV, eV) => "joyConRight" === eV ? {
        x: VV.y,
        y: -VV.z,
        z: -VV.x
      } : {
        x: -VV.y,
        y: VV.z,
        z: -VV.x
      },
      jV = (VV, eV, xV, YV) => JV(VV) ? ((VV, eV, xV, JV) => {
        const YV = ((VV, eV, xV) => "dualShock4" === VV ? 1 === eV && xV >= 63 ? 0 : 17 === eV && xV >= 65 ? 2 : null : 1 === eV && xV >= 62 ? 0 : 49 === eV && xV >= 63 ? 1 : null)(VV, eV, xV.byteLength);
        if (null === YV) return null;
        if (2976 === JV && 1 === eV && 0 !== (4 & xV.getUint8(30))) return null;
        const UV = YV + ("dualShock4" === VV ? 12 : 15),
          yV = kV(xV, UV, ZV),
          pV = kV(xV, UV + 6, vV);
        return bV(yV) && bV(pV) ? null : {
          readings: [{
            gyro: yV,
            accel: pV
          }],
          dtSec: null,
          sensorClock: "dualShock4" === VV ? xV.getUint16(YV + 9, !0) : xV.getUint32(YV + 27, !0)
        }
      })(VV, eV, xV, YV) : ((VV, eV, xV) => {
        if (48 !== eV && 49 !== eV || xV.byteLength < 48) return null;
        const JV = [];
        for (let YV = 0; YV < 3; YV++) {
          const eV = kV(xV, 12 + 12 * YV, 244e-6),
            UV = kV(xV, 18 + 12 * YV, rV);
          if (bV(UV) && bV(eV)) return null;
          JV.push({
            gyro: BV(UV, VV),
            accel: BV(eV, VV)
          })
        }
        return {
          readings: JV,
          dtSec: .005,
          sensorClock: null
        }
      })(VV, eV, xV),
      qV = 1,
      tV = [0, 1, 64, 64, 0, 1, 64, 64],
      FV = (VV, eV, xV) => new Uint8Array([15 & VV, ...tV, eV, ...xV]),
      TV = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      PV = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8836: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => CV,
      h: () => fV,
      i: () => TV,
      j: () => rV.m,
      k: () => cV,
      l: () => oV,
      p: () => PV,
      r: () => hV,
      u: () => rV.w,
      w: () => rV.E,
      x: () => mV,
      y: () => rV.L,
      A: () => RV
    });
    var JV = xV(62),
      YV = xV(27),
      UV = xV(32),
      yV = xV(1542),
      pV = xV(1332),
      QV = xV(8811),
      nV = xV(8843),
      wV = xV(8792),
      ZV = xV(8777),
      vV = xV(8852),
      rV = xV(1473),
      kV = xV(8786),
      bV = xV(9274),
      EV = xV(4807),
      BV = xV(115);
    class jV {
      constructor(VV) {
        this.deps = VV, this.pads = new Map
      }
      observe(VV, eV, xV) {
        if (!this.deps.touchOnly) return;
        const JV = this.pads.get(eV.id);
        "proven" !== JV && xV ? (this.pads.set(eV.id, "proven"), void 0 !== JV && this.deps.onReleased(eV, VV, VV.timestampMs - JV)) : void 0 === JV && (this.pads.set(eV.id, VV.timestampMs), this.deps.onHeld(eV, VV)), this.deps.setMayHide("proven" === this.pads.get(eV.id))
      }
    }
    const qV = VV => VV.values.flatMap(((VV, eV) => VV >= kV.S ? [String(eV)] : [])).join(",") || "none",
      tV = (VV, eV, JV, YV, UV) => {
        const yV = (0, rV.i)(),
          pV = document.visibilityState,
          QV = document.hasFocus();
        Promise.all([Promise.resolve().then((() => xV(3245))), Promise.resolve().then((() => xV(1353))), Promise.resolve().then((() => xV(138)))]).then((xV => {
          let [{
            logControllerHudHoldToGtag: nV
          }, {
            logClientLineFromEveryPage: wV
          }, {
            siteUsed: ZV
          }] = xV;
          nV(VV, eV.family, null === UV ? void 0 : Math.round(UV / 1e3)), wV(`touch HUD pad ${VV}`, FV(eV, JV, YV, UV, yV, pV, QV, ZV))
        }), (() => {}))
      },
      FV = (VV, eV, xV, JV, YV, UV, yV, pV) => {
        var QV;
        const nV = {
          pad_id: VV.id.slice(0, 120),
          pad_family: VV.family,
          pad_mapping: null !== (QV = null === xV || void 0 === xV ? void 0 : xV.mapping) && void 0 !== QV ? QV : "unread",
          pad_axes: xV ? String(xV.axes.length) : "unread",
          pad_buttons: xV ? String(xV.buttons.length) : "unread",
          pressed: qV(eV),
          ms_since_touch: null === YV ? "none" : String(Math.round(eV.timestampMs - YV)),
          visibility: UV,
          focused: String(yV),
          site: pV
        };
        return null !== JV && (nV.held_ms = String(Math.round(JV))), nV
      };
    const TV = VV => !VV.repeat && !(0, bV.d)(VV.key),
      PV = "PadHidesCursor";
    let AV = !1;
    const NV = VV => {
        VV !== AV && (AV = VV, document.documentElement.classList.toggle(PV, VV))
      },
      XV = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(VV) {
          let eV = !1,
            xV = !1;
          VV.values.forEach(((VV, JV) => {
            const YV = VV >= (this.buttonsDown[JV] ? kV.W : kV.S);
            YV && !this.buttonsDown[JV] && (eV = !0, xV = !0), this.buttonsDown[JV] = YV
          }));
          return [VV.leftStick, VV.rightStick].forEach(((VV, JV) => {
            const YV = this.stickAnchors[JV];
            Math.hypot(VV.x, VV.y) < (YV ? kV.W : .3) ? this.stickAnchors[JV] = null : (!YV || Math.hypot(VV.x - YV.x, VV.y - YV.y) >= .3) && (this.stickAnchors[JV] = {
              x: VV.x,
              y: VV.y
            }, eV = !0, xV ||= !YV)
          })), eV && (this.lastActivityMs = VV.timestampMs), this.onlyMovedOn = eV && !xV, eV
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(VV) {
          return !(VV - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((VV => VV)) || this.stickAnchors.some((VV => null !== VV)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((VV => null !== VV))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      MV = (zV = () => ZV.f.getActiveGamepad(), new jV({
        touchOnly: "touchOnly" === (0, BV.c)(),
        setMayHide: rV.A,
        onHeld: (VV, eV) => {
          tV("hn", VV, eV, zV(), null)
        },
        onReleased: (VV, eV, xV) => {
          tV("released", VV, eV, zV(), xV)
        }
      }));
    var zV;
    let GV = null,
      WV = !1;
    const RV = () => WV;
    let gV = null,
      DV = !1,
      iV = null;
    const CV = () => iV;
    let aV = !1;
    const oV = (VV, eV) => {
        if (!XV.observe(VV)) return !1;
        if (MV.observe(VV, eV, XV.isStickOffRest()), aV && XV.wasOnlyMoveOn() && !(0, rV.m)()) return !1;
        aV = !1, WV = !1;
        const xV = !(0, rV.m)();
        return xV && (GV = VV, iV = !AV && DV && gV ? {
          ...gV
        } : null), DV = !1, (0, rV.w)("gamepad"), NV(!0), (0, vV.n)((0, QV.j)()), xV
      },
      cV = VV => !(0, rV.m)() || VV === GV,
      hV = () => {
        XV.reset()
      },
      lV = () => {
        const VV = YV.b.get("activeInputDevice"),
          eV = "gamepad" === VV ? ZV.f.getActivePad() : null;
        return {
          device: VV,
          inGame: (0, pV.r)(),
          padMovesMouse: null !== eV && (0, wV.i)(eV.id)
        }
      },
      LV = VV => {
        document.pointerLockElement ? gV = null : (gV ??= {
          x: 0,
          y: 0
        }, gV.x = VV.clientX, gV.y = VV.clientY)
      },
      fV = () => {
        const VV = new EV.c,
          eV = eV => {
            VV.reset(), aV = !1, (0, rV.w)(eV)
          },
          xV = VV => {
            if (VV.isTrusted) {
              if (VV instanceof KeyboardEvent) {
                if ((0, rV.u)(VV), !TV(VV)) return;
                WV = !0
              }
              if (VV instanceof PointerEvent && "touch" === VV.pointerType) return gV = null, void eV("touch");
              VV instanceof PointerEvent && (LV(VV), DV = !0), ("pointerdown" !== VV.type || (VV => {
                let {
                  device: eV,
                  inGame: xV,
                  padMovesMouse: JV
                } = VV;
                return !("gamepad" === eV && JV && xV)
              })(lV())) && eV("keyboardMouse")
            }
          },
          JV = VV => {
            VV.isTrusted && (gV = null, eV("touch"))
          },
          yV = VV => {
            VV.isTrusted && "touch" !== VV.pointerType && !VV.relatedTarget && (gV = null)
          },
          pV = xV => {
            if (!xV.isTrusted || "touch" === xV.pointerType) return;
            LV(xV);
            const JV = xV.movementX || 0,
              UV = xV.movementY || 0;
            if (0 === JV && 0 === UV) return;
            if (DV = !0, NV(!1), "keyboardMouse" === YV.b.get("activeInputDevice")) return;
            const yV = XV.isHolding(xV.timeStamp),
              pV = lV(),
              QV = (VV => {
                let {
                  device: eV,
                  inGame: xV,
                  padMovesMouse: JV,
                  padHolding: YV
                } = VV;
                return ("gamepad" !== eV || !JV) && "keyboardMouse" !== eV && (xV || !YV)
              })({
                ...pV,
                inGame: pV.inGame && (0, nV.h)(),
                padHolding: yV
              });
            QV && VV.add(JV, UV, xV.timeStamp) && (eV("keyboardMouse"), aV = XV.isStickOffRest())
          },
          QV = VV => {
            NV("gamepad" === VV)
          },
          wV = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", xV, wV), window.addEventListener("pointerdown", xV, wV), window.addEventListener("wheel", xV, wV), window.addEventListener("touchstart", JV, wV), window.addEventListener("pointermove", pV, wV), window.addEventListener("pointerout", yV, wV);
        const ZV = UV.h.subscribe("appManagerUpdated|activeInputDevice", QV);
        return QV(YV.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", xV, wV), window.removeEventListener("pointerdown", xV, wV), window.removeEventListener("wheel", xV, wV), window.removeEventListener("touchstart", JV, wV), window.removeEventListener("pointermove", pV, wV), window.removeEventListener("pointerout", yV, wV), gV = null, UV.h.unsubscribe(ZV), NV(!1)
        }
      },
      mV = () => {
        const [VV, eV] = (0, JV.useState)(QV.j);
        return (0, yV.g)(QV.c, (() => {
          eV((0, QV.j)())
        })), (0, yV.g)(ZV.c, (() => {
          eV((0, QV.j)())
        })), VV
      }
  },
  8816: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      h: () => YV
    });
    const JV = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      YV = VV => JV.includes(VV)
  },
  9315: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      g: () => UV,
      k: () => QV,
      o: () => pV
    });
    var JV = xV(1542),
      YV = xV(1493);
    const UV = "controllerInventoryCursorChanged",
      yV = {
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
      pV = () => {
        var VV, eV;
        return (0, JV.j)(UV, null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.getInventoryCursorState()) && void 0 !== VV ? VV : yV)
      },
      QV = () => {
        var VV, eV;
        return null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.isPadSteppingSlots()) && void 0 !== VV && VV
      }
  },
  9306: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => vV,
      d: () => pV,
      e: () => QV,
      h: () => yV,
      i: () => UV,
      l: () => wV,
      o: () => ZV
    });
    let JV = null;
    const YV = new Set,
      UV = VV => (JV = VV, () => {
        if (JV === VV) {
          JV = null;
          for (const VV of YV) VV()
        }
      }),
      yV = VV => (YV.add(VV), () => {
        YV.delete(VV)
      }),
      pV = () => JV,
      QV = () => null !== JV;
    let nV = null;
    const wV = VV => {
        nV = VV
      },
      ZV = () => {
        const VV = nV;
        return nV = null, VV
      },
      vV = (VV, eV) => {
        var xV, JV;
        return null !== (xV = null !== (JV = VV.find((VV => VV.element === eV))) && void 0 !== JV ? JV : VV.find((VV => VV.element.contains(eV)))) && void 0 !== xV ? xV : null
      }
  },
  9318: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV
    });
    var JV = xV(62);
    const YV = new WeakMap,
      UV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = YV.get(VV)) || void 0 === xV ? void 0 : xV.current) && void 0 !== eV ? eV : null
      },
      yV = (VV, eV) => {
        const xV = (0, JV.useRef)(eV);
        xV.current = eV;
        const UV = (0, JV.useRef)(null);
        (0, JV.useEffect)((() => {
          const eV = VV.current,
            JV = UV.current;
          eV !== JV && (JV && YV.get(JV) === xV && YV.delete(JV), UV.current = eV, eV && YV.set(eV, xV))
        })), (0, JV.useEffect)((() => () => {
          const VV = UV.current;
          VV && YV.get(VV) === xV && YV.delete(VV), UV.current = null
        }), [])
      }
  },
  9428: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      e: () => nV,
      g: () => ZV,
      i: () => wV,
      m: () => QV,
      q: () => rV
    });
    var JV = xV(32),
      YV = xV(2147),
      UV = xV(1493),
      yV = xV(1473);
    const pV = VV => {
        var eV, xV;
        return (0, yV.m)() && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getGlyphForNoaAction(VV)) && void 0 !== eV ? eV : null
      },
      QV = "controllerGlyph:",
      nV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconName(VV)) && void 0 !== eV ? eV : `${QV}xbox/${VV}`
      },
      wV = VV => VV.startsWith(QV),
      ZV = VV => {
        var eV, xV;
        return wV(VV) && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconUrl(VV)) && void 0 !== eV ? eV : null
      },
      vV = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yV.e, YV.f, YV.d],
      rV = VV => {
        const eV = vV.map((eV => JV.h.subscribe(eV, VV)));
        return () => {
          for (const VV of eV) JV.h.unsubscribe(VV)
        }
      }
  },
  9293: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      f: () => JV
    });
    const JV = "controllerOpenKeyboard",
      YV = "controllerKeyboardVisible"
  },
  8843: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      h: () => wV,
      l: () => QV,
      o: () => pV
    });
    var JV = xV(27),
      YV = xV(1725),
      UV = xV(1840);
    const yV = new Map,
      pV = (VV, eV) => (yV.has(VV) && console.warn(`Gameplay blocker "${VV}" registered twice; the newer one replaces it.`), yV.set(VV, eV), () => {
        yV.get(VV) === eV && yV.delete(VV)
      }),
      QV = () => (0, UV.b)(document.activeElement),
      nV = function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [eV, xV] of yV)
          if (!VV.includes(eV) && xV()) return eV;
        return null
      },
      wV = function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === JV.b.get("gameState") && (!(0, YV.n)() && (!QV() && null === nV(VV)))
      }
  },
  8786: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => ZV,
      F: () => qV,
      H: () => GV,
      J: () => tV,
      M: () => BV,
      P: () => EV,
      Q: () => nV,
      S: () => vV,
      W: () => rV,
      X: () => YV,
      _: () => JV,
      ab: () => TV,
      d: () => RV,
      db: () => MV,
      f: () => zV,
      fb: () => WV,
      gb: () => FV,
      j: () => wV,
      k: () => QV,
      n: () => pV,
      r: () => AV,
      t: () => jV,
      v: () => PV,
      z: () => UV
    });
    const JV = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      YV = JV.length,
      UV = function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(YV).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: VV
        }
      },
      yV = Object.fromEntries(JV.map(((VV, eV) => [VV, eV]))),
      pV = VV => yV[VV],
      QV = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const JV = Math.hypot(VV.x, VV.y);
        if (JV <= eV) return {
          x: 0,
          y: 0
        };
        const YV = Math.min(1, (JV - eV) / Math.max(1e-4, xV - eV));
        return {
          x: VV.x / JV * YV,
          y: VV.y / JV * YV
        }
      },
      nV = ["exponential", "linear", "boost"],
      wV = (VV, eV) => {
        const xV = Math.hypot(VV.x, VV.y);
        if (0 === xV) return {
          x: 0,
          y: 0
        };
        const JV = ((VV, eV) => {
          const xV = Math.max(0, Math.min(1, VV));
          return "linear" === eV ? xV : xV * xV
        })(xV, eV);
        return {
          x: VV.x / xV * JV,
          y: VV.y / xV * JV
        }
      },
      ZV = .5,
      vV = .3,
      rV = .2,
      kV = pV("LT"),
      bV = pV("RT"),
      EV = VV => VV === kV || VV === bV,
      BV = (VV, eV) => {
        const xV = pV(eV);
        return EV(xV) ? VV[xV] > .35 : VV[xV] >= ZV
      },
      jV = (VV, eV) => VV.map(((VV, xV) => EV(xV) ? eV[xV] ? VV > .35 : VV >= .55 : VV >= ZV)),
      qV = ["Up", "Down", "Left", "Right"],
      tV = VV => qV.includes(VV),
      FV = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(VV.x, VV.y) < eV ? null : Math.abs(VV.x) > Math.abs(VV.y) ? VV.x > 0 ? "Right" : "Left" : VV.y > 0 ? "Down" : "Up"
      },
      TV = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      PV = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      AV = ["default", "slow", "off"],
      NV = 800,
      XV = 250,
      MV = (VV, eV) => "off" === eV ? null : "slow" === eV ? {
        initialDelayMs: Math.max(VV.initialDelayMs, NV),
        intervalMs: Math.max(VV.intervalMs, XV)
      } : VV;
    class zV {
      constructor(VV) {
        this.readTiming = VV, this.hn = !1, this.timing = null, this.nextFireMs = 0
      }
      update(VV, eV) {
        return VV ? this.hn ? !!(this.timing && eV >= this.nextFireMs) && (this.nextFireMs = eV + this.timing.intervalMs, !0) : (this.hn = !0, this.timing = this.readTiming(), this.nextFireMs = eV + (null !== (xV = null === (JV = this.timing) || void 0 === JV ? void 0 : JV.initialDelayMs) && void 0 !== xV ? xV : 0), !0) : (this.hn = !1, !1);
        var xV, JV
      }
      reset() {
        this.hn = !1
      }
    }
    const GV = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      WV = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class RV {
      constructor(VV) {
        this.timer = VV, this.direction = null
      }
      update(VV, eV) {
        return VV !== this.direction && (this.timer.reset(), this.direction = VV), this.timer.update(null !== VV, eV) ? VV : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9320: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      e: () => UV
    });
    let JV = -1 / 0;
    const YV = () => {
        JV = performance.now()
      },
      UV = VV => performance.now() - JV < VV
  },
  9276: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      h: () => UV
    });
    var JV = xV(8811),
      YV = xV(8786);
    const UV = VV => (0, YV.db)(VV, (0, JV.i)().buttonRepeat),
      yV = VV => new YV.f((() => UV(VV)))
  },
  8828: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      e: () => UV,
      h: () => pV
    });
    var JV = xV(32),
      YV = xV(8811);
    const UV = (VV, eV) => "OpenShop" === VV ? "shop" === eV : "OpenLobbyLeaderboard" !== VV || "leaderboard" === eV;
    let yV = !1;
    const pV = VV => {
        VV !== yV && (yV = VV, JV.h.QZ(YV.c, (0, YV.i)()))
      },
      QV = () => ((VV, eV) => "shop" === VV && eV ? "shop" : "leaderboard")((0, YV.i)().leaderboardButton, yV)
  },
  8825: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => EV,
      C: () => pV,
      D: () => FV,
      G: () => vV,
      H: () => rV,
      L: () => ZV,
      O: () => tV,
      R: () => nV,
      S: () => BV,
      W: () => XV,
      Y: () => qV,
      Z: () => bV,
      cb: () => kV,
      d: () => DV,
      db: () => jV,
      e: () => CV,
      g: () => MV,
      gb: () => WV,
      ib: () => UV,
      jb: () => TV,
      k: () => yV,
      nb: () => iV,
      o: () => NV,
      qb: () => AV,
      r: () => PV,
      t: () => RV,
      v: () => gV,
      w: () => wV,
      z: () => QV
    });
    var JV = xV(8804),
      YV = xV(8786);
    const UV = {
        min: 25,
        max: 500,
        step: 5
      },
      yV = {
        min: 25,
        max: 100,
        step: 5
      },
      pV = {
        min: 0,
        max: .4,
        step: .01
      },
      QV = {
        min: 25,
        max: 300,
        step: 5
      },
      nV = {
        min: .5,
        max: 6,
        step: .1
      },
      wV = (VV, eV) => {
        if (!Number.isFinite(VV)) return eV.min;
        const xV = eV.min + Math.round((VV - eV.min) / eV.step) * eV.step,
          JV = Math.min(eV.max, Math.max(eV.min, xV));
        return Math.round(1e3 * JV) / 1e3
      },
      ZV = VV => `${Math.round(VV)}%`,
      vV = VV => ZV(100 * VV),
      rV = VV => `${VV.toFixed(1)}\xd7`,
      kV = [{
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
      bV = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      EV = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      BV = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      jV = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      qV = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      tV = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      FV = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      TV = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      PV = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      AV = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      NV = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      XV = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      MV = {
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
      zV = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      GV = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      WV = JV.b.map((VV => {
        let {
          group: eV,
          actions: xV
        } = VV;
        const JV = xV.map((VV => ({
          kind: "action",
          action: VV
        })));
        return {
          titleKey: zV[eV],
          rows: "gameplay" === eV ? [...GV, ...JV] : JV
        }
      })),
      RV = YV._.filter((VV => "Home" !== VV)),
      gV = 1e4;
    class DV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = VV, this.openButton = eV, this.accepts = xV, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(VV, eV) {
        var xV;
        this.updateIgnored(VV, eV);
        const JV = eV - (null !== (xV = this.startMs) && void 0 !== xV ? xV : eV) >= 250;
        for (const YV of RV)
          if (YV !== this.cancelButton && JV && !this.ignoredUntilMs.has(YV) && VV.wasPressed(YV) && this.accepts(YV)) return {
            kind: "bind",
            button: YV
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (VV.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = eV
        }
        return null === this.cancelDownAtMs ? null : VV.isHeld(this.cancelButton) && eV - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : VV.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(VV) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (VV - this.cancelDownAtMs) / 700)
      }
      updateIgnored(VV, eV) {
        if (null === this.startMs) {
          this.startMs = eV;
          for (const eV of RV) VV.isDown(eV) && this.ignoredUntilMs.set(eV, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, eV + 250)
        }
        for (const [xV, JV] of this.ignoredUntilMs) {
          const YV = VV.isDown(xV);
          JV === 1 / 0 ? YV || xV !== this.openButton ? YV || this.ignoredUntilMs.delete(xV) : this.ignoredUntilMs.set(xV, eV + 250) : eV >= JV ? this.ignoredUntilMs.delete(xV) : YV && this.ignoredUntilMs.set(xV, 1 / 0)
        }
      }
    }
    const iV = 6e3;
    class CV {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(VV, eV) {
        let {
          pressed: xV,
          hn: JV
        } = VV;
        if (xV) {
          const VV = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== VV && eV - VV < 1500 ? [...this.pressesAtMs, eV] : [eV], this.pressesAtMs.length >= 3) return 1
        }
        return JV ? (this.downAtMs ??= eV, Math.min(1, (eV - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  5536: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => yV
    });
    var JV = xV(62);
    const YV = new WeakMap,
      UV = VV => {
        var eV;
        const xV = VV.closest("[data-pad-slider]");
        return xV && null !== (eV = YV.get(xV)) && void 0 !== eV ? eV : null
      },
      yV = (VV, eV) => {
        const xV = (0, JV.useRef)(eV);
        xV.current = eV, (0, JV.useEffect)((() => {
          if (VV.current) return ((VV, eV) => (YV.set(VV, eV), () => {
            YV.get(VV) === eV && YV.delete(VV)
          }))(VV.current, {
            adjust: VV => {
              xV.current.adjust(VV)
            },
            setFraction: VV => {
              xV.current.setFraction(VV)
            },
            endDrag: () => {
              xV.current.endDrag()
            }
          })
        }), [VV])
      }
  },
  9422: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => yV,
      g: () => UV,
      j: () => JV,
      n: () => pV,
      r: () => nV,
      s: () => wV
    });
    const JV = "controllerActionWheelOpen",
      YV = "controllerActionWheelAim",
      UV = "controllerActionWheelCommit",
      yV = "controllerActionWheelClose",
      pV = "controllerActionWheelPick";
    let QV = !1;
    const nV = () => QV,
      wV = VV => {
        QV = VV
      }
  },
  9420: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      g: () => YV
    });
    let JV = 0;
    const YV = () => {
        JV++
      },
      UV = () => JV
  },
  9333: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      f: () => YV,
      g: () => yV,
      k: () => UV,
      o: () => JV,
      s: () => nV
    });
    const JV = "controllerQuickChatWheelOpen",
      YV = "controllerQuickChatWheelAim",
      UV = "controllerQuickChatWheelCommit",
      yV = "controllerQuickChatWheelClose";
    let pV = !1;
    const QV = () => pV,
      nV = VV => {
        pV = VV
      }
  },
  9340: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => YV
    });
    var JV = xV(32);
    const YV = "localBlockBroken";

    function UV() {
      return {
        onPlayerChangeBlock(VV, eV, xV, UV, yV, pV) {
          "Air" === pV && JV.h.QZ(YV)
        }
      }
    }
  },
  9477: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      g: () => QV
    });
    var JV = xV(27),
      YV = xV(1391),
      UV = xV(99);
    const yV = {
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

    function pV() {
      return (0, UV.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QV = new class {
      constructor(VV) {
        this.deps = VV, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(VV, eV) {
        var xV;
        if (!this.deps.enabled()) return;
        const JV = yV[VV],
          YV = null !== eV && void 0 !== eV ? eV : JV.pattern;
        if (null === YV) return void console.warn("No vibration pattern for", VV);
        const UV = this.deps.now();
        UV - this.lastAnyAt < 40 && JV.priority < this.playingPriority || UV - (null !== (xV = this.lastAt.get(VV)) && void 0 !== xV ? xV : -1 / 0) < JV.minGapMs || UV < this.playingUntil && JV.priority < this.playingPriority || (this.lastAt.set(VV, UV), this.lastAnyAt = UV, this.playingUntil = UV + YV.reduce(((VV, eV) => VV + eV), 0), this.playingPriority = JV.priority, this.deps.vibrate(YV))
      }
    }({
      vibrate: VV => {
        navigator.vibrate([...VV])
      },
      now: () => performance.now(),
      enabled: () => pV() && JV.b.get("isTouchScreen") && JV.b.get("clientEscMenuOptions").vibration && !(0, YV.f)()
    })
  },
  9338: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(1283);

    function YV(VV, eV) {
      var xV, YV;
      try {
        const xV = (0, JV.d)();
        if ("function" === typeof xV) {
          const JV = new xV(VV, eV);
          if (JV.type === VV) return JV
        }
      } catch {}
      const UV = document.createEvent("Event");
      return UV.initEvent(VV, null !== (xV = null === eV || void 0 === eV ? void 0 : eV.bubbles) && void 0 !== xV && xV, null !== (YV = null === eV || void 0 === eV ? void 0 : eV.cancelable) && void 0 !== YV && YV), UV
    }
  },
  9396: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(9403),
      YV = xV(657),
      UV = xV(138);

    function yV(VV) {
      var eV, xV;
      if ((0, YV.J)(VV)) return !0;
      const yV = null !== (eV = null === (xV = UV.siteUsedData[UV.siteUsed]) || void 0 === xV ? void 0 : xV.adConfig.showRewardedAds) && void 0 !== eV && eV;
      for (const YV in VV) {
        const eV = VV[YV];
        if (null !== eV && void 0 !== eV && eV.items)
          for (const VV in eV.items)
            if ((0, JV.p)(eV.items[VV], yV)) return !1
      }
      return !0
    }
  },
  9403: (VV, eV, xV) => {
    function JV(VV, eV) {
      return !VV.hidden && (eV || !VV.isRewardedAd)
    }

    function YV(VV) {
      return "object" === typeof VV ? VV.option : VV
    }

    function UV(VV, eV) {
      var xV;
      if ("dropdown" === (null === (xV = VV.userInput) || void 0 === xV ? void 0 : xV.type) && "object" === typeof VV.userInput.dropdownOptions[0]) {
        for (const xV of VV.userInput.dropdownOptions)
          if (YV(xV) === eV) return "object" === typeof xV ? xV.cost : VV.cost;
        console.error("Didn't find matching option for dropdown item. Item:", VV, "input:", eV)
      }
      return VV.cost
    }

    function yV(VV, eV, xV) {
      var JV;
      const YV = null !== (JV = xV.excludedPlayers) && void 0 !== JV ? JV : [eV];
      return VV.filter((VV => !YV.includes(VV)))
    }
    xV.d(eV, {
      e: () => UV,
      h: () => YV,
      l: () => yV,
      p: () => JV
    })
  },
  9424: () => {},
  8859: (VV, eV, xV) => {
    var JV = {
      "./nintendo/A.svg": 8866,
      "./nintendo/B.svg": 8873,
      "./nintendo/Down.svg": 8878,
      "./nintendo/Home.svg": 8884,
      "./nintendo/LB.svg": 8886,
      "./nintendo/LS.svg": 8889,
      "./nintendo/LT.svg": 8897,
      "./nintendo/Left.svg": 8904,
      "./nintendo/LeftStick.svg": 8913,
      "./nintendo/Menu.svg": 8922,
      "./nintendo/RB.svg": 8930,
      "./nintendo/RS.svg": 8936,
      "./nintendo/RT.svg": 8938,
      "./nintendo/Right.svg": 8944,
      "./nintendo/RightStick.svg": 8953,
      "./nintendo/Up.svg": 8958,
      "./nintendo/View.svg": 8960,
      "./nintendo/X.svg": 8965,
      "./nintendo/Y.svg": 8972,
      "./playstation/A.svg": 8976,
      "./playstation/B.svg": 8978,
      "./playstation/Down.svg": 8986,
      "./playstation/Home.svg": 8995,
      "./playstation/LB.svg": 8999,
      "./playstation/LS.svg": 9007,
      "./playstation/LT.svg": 9009,
      "./playstation/Left.svg": 9018,
      "./playstation/LeftStick.svg": 9022,
      "./playstation/Menu.svg": 9024,
      "./playstation/RB.svg": 9028,
      "./playstation/RS.svg": 9032,
      "./playstation/RT.svg": 9039,
      "./playstation/Right.svg": 9046,
      "./playstation/RightStick.svg": 9052,
      "./playstation/Up.svg": 9054,
      "./playstation/View.svg": 9059,
      "./playstation/X.svg": 9061,
      "./playstation/Y.svg": 9063,
      "./steamdeck/A.svg": 9070,
      "./steamdeck/B.svg": 9073,
      "./steamdeck/Down.svg": 9078,
      "./steamdeck/Home.svg": 9081,
      "./steamdeck/LB.svg": 9083,
      "./steamdeck/LS.svg": 9089,
      "./steamdeck/LT.svg": 9093,
      "./steamdeck/Left.svg": 9101,
      "./steamdeck/LeftStick.svg": 9108,
      "./steamdeck/Menu.svg": 9111,
      "./steamdeck/RB.svg": 9118,
      "./steamdeck/RS.svg": 9127,
      "./steamdeck/RT.svg": 9133,
      "./steamdeck/Right.svg": 9142,
      "./steamdeck/RightStick.svg": 9148,
      "./steamdeck/Up.svg": 9152,
      "./steamdeck/View.svg": 9160,
      "./steamdeck/X.svg": 9169,
      "./steamdeck/Y.svg": 9172,
      "./xbox/A.svg": 9178,
      "./xbox/B.svg": 9182,
      "./xbox/Down.svg": 9191,
      "./xbox/Home.svg": 9194,
      "./xbox/LB.svg": 9200,
      "./xbox/LS.svg": 9206,
      "./xbox/LT.svg": 9209,
      "./xbox/Left.svg": 9217,
      "./xbox/LeftStick.svg": 9219,
      "./xbox/Menu.svg": 9223,
      "./xbox/RB.svg": 9225,
      "./xbox/RS.svg": 9232,
      "./xbox/RT.svg": 9238,
      "./xbox/Right.svg": 9242,
      "./xbox/RightStick.svg": 9248,
      "./xbox/Up.svg": 9255,
      "./xbox/View.svg": 9258,
      "./xbox/X.svg": 9262,
      "./xbox/Y.svg": 9268
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 8859
  },
  8866: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8873: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8878: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8884: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8886: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8889: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8897: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8904: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8913: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8922: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8930: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8936: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8938: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8944: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8953: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8958: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8960: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8965: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8972: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8976: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8978: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8986: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8995: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8999: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9007: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9009: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9018: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9022: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9024: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9028: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9032: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9039: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9046: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9052: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9054: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9059: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9061: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9063: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9070: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9073: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9078: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9081: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9083: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9089: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9093: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9101: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9108: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9111: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9118: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9127: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9133: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9142: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9148: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9152: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9160: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9169: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9172: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9178: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9182: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9191: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9194: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9200: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9206: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9209: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9217: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9219: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9223: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9225: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9232: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9238: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9242: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9248: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9255: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9258: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9262: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9268: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
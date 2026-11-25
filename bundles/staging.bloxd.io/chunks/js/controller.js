export const id = 28;
export const ids = [28];
export const modules = {
  9023: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => It,
      e: () => Wt,
      h: () => St
    });
    var Ot = Vt(63),
      qt = Vt(4677),
      Dt = Vt(1218),
      mt = Vt(1554),
      dt = Vt(31),
      jt = Vt(3490),
      Ht = Vt(2295),
      Xt = Vt(1325),
      Qt = Vt(2652),
      lt = Vt(2024),
      Et = Vt(2063),
      ft = Vt(1286),
      wt = Vt(26),
      yt = Vt(1732),
      Nt = Vt(1140),
      Mt = Vt.n(Nt),
      bt = Vt(9032),
      Jt = Vt(9035),
      Ct = Vt(9037),
      ut = Vt(8929),
      Kt = Vt(9039),
      ht = (Vt(9042), Vt(1188));
    let vt = null;

    function Wt() {
      return null !== vt
    }

    function St() {
      return "pad" === vt
    }

    function ct() {
      return "inGame" === wt.b.get("gameState") && !(0, yt.q)()
    }

    function Rt(tt) {
      return (0, Jt.t)(tt, Xt.r, Jt.e, Jt.f, Jt.i)
    }
    const It = (0, Ot.memo)((function() {
      const {
        t: tt
      } = (0, ft.H)(), {
        userContext: et
      } = (0, Dt.d)(), [Vt, wt] = (0, Ot.useState)(null), [Nt, Wt] = (0, Ot.useState)(null), St = (0, Ot.useRef)(null), It = (0, Ot.useCallback)((tt => {
        St.current = tt, Wt(tt)
      }), []), Pt = (0, Ot.useRef)(0), Zt = (0, Ot.useRef)(null), Lt = (0, Ot.useRef)({
        x: 0,
        y: 0
      }), [Ft, kt] = (0, Ot.useState)(0), Gt = (0, Ot.useMemo)((() => function(tt) {
        const et = [];
        for (let Ot = 0; Ot < Xt.r; Ot++) {
          var Vt;
          et.push(null !== (Vt = tt[Ot]) && void 0 !== Vt ? Vt : null)
        }
        return et
      }((0, Qt.h)(et.getPlayerCosmetics().emote))), [et, Ft]);
      (0, Et.e)("cosmeticsUpdated", (tt => {
        tt.some((tt => tt.local && "emote" === tt.kD)) && kt((tt => tt + 1))
      }));
      const zt = (0, Ot.useRef)(!1),
        ot = (0, Ot.useCallback)((function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === tt && (0, Ct.e)(), zt.current = et, Lt.current = {
            x: 0,
            y: 0
          }, It(null), wt(tt)
        }), [It]),
        rt = (0, Ot.useCallback)((() => {
          wt(null), It(null), Lt.current = {
            x: 0,
            y: 0
          }
        }), [It]),
        Ut = (0, Ot.useCallback)((tt => {
          if (Date.now() < Pt.current) return;
          const et = (0, Ht.j)(tt),
            Vt = !!et.holdUntilMove,
            Ot = Vt ? 600 : Math.ceil(1e3 * et.animation.animation_length / Ht.d) + 200;
          Pt.current = Date.now() + Ot, Zt.current = tt, lt.gameBridge.send("playEmote", tt), lt.gameBridge.send("applyTemporaryThirdPerson", Vt ? {} : {
            durationMs: Ot
          })
        }), []);
      (0, mt.f)("requestToggleEmoteWheel", (() => {
        null === Vt ? ct() && ot("click") : rt()
      })), (0, mt.f)("requestEmoteWheelHoldOpen", (() => {
        null === Vt && ct() && ot((0, bt.b)() ? "hold" : "click")
      })), (0, mt.f)("requestEmoteWheelPadOpen", (tt => {
        null !== Vt || !ct() || (0, ut.b)() || (0, Kt.o)() || ot("pad", tt)
      })), (0, mt.f)("requestEmoteRepeatLast", (() => {
        if (null !== Vt || !ct() || (0, ut.b)() || (0, Kt.o)()) return;
        const tt = Zt.current;
        null !== tt && Gt.includes(tt) ? Ut(tt) : ot("pad", !0)
      }));
      const At = () => {
        const tt = St.current,
          et = null !== tt ? Gt[tt] : null;
        null !== et && "pad" === Vt && Date.now() < Pt.current || (rt(), null !== et && Ut(et))
      };
      (0, mt.f)("emoteWheelPadAim", (tt => {
        if ("pad" !== Vt) return;
        const et = (0, Jt.D)(tt, Xt.r, St.current);
        It(null !== et && null !== Gt[et] ? et : null)
      })), (0, mt.f)("requestEmoteWheelPadCommit", (tt => {
        "pad" !== Vt || tt && zt.current || At()
      })), (0, mt.f)("appManagerUpdated|activeInputDevice", (tt => {
        null !== Vt && "pad" === Vt !== ("gamepad" === tt) && rt()
      })), (0, Ot.useLayoutEffect)((() => (vt = Vt, (0, jt.w)("emoteWheel", "pad" === Vt), dt.j.sw(jt.o), () => {
        vt = null, (0, jt.w)("emoteWheel", !1), dt.j.sw(jt.o)
      })), [Vt]), (0, mt.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Vt && At()
      })), (0, mt.f)("requestEmoteWheelClose", (() => {
        null !== Vt && rt()
      })), (0, mt.f)("appManagerUpdated|gameState", (tt => {
        "inGame" !== tt && rt()
      }));
      const it = () => {
        (0, yt.q)() && rt()
      };
      if ((0, mt.f)("appManagerUpdated|openEverythingMenuName", it), (0, mt.f)("appManagerUpdated|openInGameMenuName", it), (0, mt.f)("pointerLockUpdate", (tt => {
          tt || "hold" !== Vt || rt()
        })), (0, Ot.useEffect)((() => {
          if (null === Vt) return;
          const tt = tt => {
            "Escape" === tt.key && (tt.stopImmediatePropagation(), tt.preventDefault(), rt())
          };
          return document.addEventListener("keydown", tt, !0), () => {
            document.removeEventListener("keydown", tt, !0)
          }
        }), [Vt, rt]), (0, qt.d)(!0, "click" === Vt, "EmoteWheelOverlay"), (0, Ot.useEffect)((() => {
          if ("hold" === Vt) return lt.gameBridge.send("holdEmoteWheel", !0), () => {
            lt.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Vt]), (0, Ot.useEffect)((() => {
          if ("hold" !== Vt) return;
          const tt = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            et = Jt.q * tt,
            Ot = Jt.m * tt,
            qt = tt => {
              let Vt = Lt.current.x + tt.movementX,
                qt = Lt.current.y + tt.movementY;
              const Dt = Math.hypot(Vt, qt);
              if (Dt > et) {
                const tt = et / Dt;
                Vt *= tt, qt *= tt
              }
              Lt.current = {
                x: Vt,
                y: qt
              }, It(function(tt, et, Vt, Ot) {
                if (Math.hypot(tt, et) < Vt) return null;
                const qt = (0, Jt.u)(tt, et, Xt.r);
                return null === Ot[qt] ? null : qt
              }(Vt, qt, Ot, Gt))
            };
          return document.addEventListener("mousemove", qt), () => {
            document.removeEventListener("mousemove", qt)
          }
        }), [Vt, Gt, It]), null === Vt) return null;
      const Yt = "hold" === Vt || "pad" === Vt,
        Bt = null !== Nt ? Gt[Nt] : null,
        pt = null !== Bt ? (0, Ht.j)(Bt).displayName : tt("emotes:pickEmote");
      return (0, ht.jsx)("div", {
        className: Mt()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Vt
        }),
        onMouseDown: tt => {
          tt.target === tt.currentTarget && rt()
        },
        children: (0, ht.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Jt.q + "rem",
            height: 2 * Jt.q + "rem"
          },
          children: [(0, ht.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Jt.j} ${Jt.j}`,
            children: [Gt.map(((et, Vt) => {
              const Ot = null !== et,
                qt = Yt && Vt === Nt;
              return (0, ht.jsx)("path", {
                d: Rt(Vt),
                className: Mt()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qt,
                  EmoteWheelWedgeDisabled: !Ot
                }),
                onClick: tt => {
                  tt.stopPropagation(), null !== et && (tt => {
                    rt(), Ut(tt)
                  })(et)
                },
                "aria-label": null !== et ? (0, Ht.j)(et).displayName : tt("emotes:emptySlot")
              }, Vt)
            })), (0, ht.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Jt.e,
              cy: Jt.e,
              r: Jt.i
            }), (0, ht.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Jt.e,
              cy: Jt.e,
              r: Jt.f
            }), Yt && null !== Nt && (0, ht.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Rt(Nt)
            })]
          }), Gt.map(((tt, et) => {
            const Vt = null !== tt,
              Ot = Yt && et === Nt,
              qt = (0, Jt.x)(et, Xt.r),
              Dt = Jt.c * Math.cos(qt),
              mt = Jt.c * Math.sin(qt);
            return (0, ht.jsx)("div", {
              className: Mt()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Ot,
                EmoteWheelSlotIconDisabled: !Vt
              }),
              style: {
                left: `calc(50% + ${Dt}rem)`,
                top: `calc(50% + ${mt}rem)`,
                backgroundImage: Vt ? `url(/textures/charSkins/previews/emote_${tt}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, et)
          })), (0, ht.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: pt
          })]
        })
      })
    }))
  },
  9126: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Nt,
      f: () => Jt
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(2569),
      mt = Vt(3478);
    const dt = 6,
      jt = 4;

    function Ht(tt) {
      let {
        slotsLeft: et,
        slotsRight: Vt,
        width: Ot,
        height: qt,
        zoneRight: Dt,
        rowTop: mt,
        besideBottom: Ht,
        obstacles: Xt
      } = tt;
      const Qt = Math.max(0, Math.floor(Vt - et - Ot)),
        lt = null === Dt ? 0 : Math.min(Qt, Math.max(0, Math.ceil(Dt + dt - et))),
        Et = et + lt - dt,
        ft = et + lt + Ot + dt,
        wt = Xt.filter((tt => tt.left < ft && tt.right > Et));
      let yt = Ht;
      for (let dt = 0; dt <= wt.length; dt++) {
        const tt = wt.filter((tt => tt.top < yt + jt && tt.bottom > yt - qt - jt));
        if (0 === tt.length) break;
        yt = Math.min(...tt.map((tt => tt.top))) - jt
      }
      return {
        shift: lt,
        rise: yt === Ht ? null : Math.ceil(mt - yt)
      }
    }

    function Xt(tt) {
      return Array.from(tt.children).filter((tt => !tt.classList.contains("HotBarRow")))
    }

    function Qt(tt) {
      return function(tt) {
        const et = [],
          Vt = (tt, Ot) => {
            const qt = tt.getBoundingClientRect();
            if (qt.width > 0 && qt.height > 0) et.push(tt);
            else if (Ot < 2)
              for (const et of Array.from(tt.children)) Vt(et, Ot + 1)
          };
        for (const Ot of tt) Vt(Ot, 0);
        return et
      }(Xt(tt).flatMap((tt => tt.classList.contains("AuraBarWrapper") ? [] : tt.classList.contains("BottomScreenStatBarList") ? Array.from(tt.children) : [tt])))
    }

    function lt(tt) {
      var et;
      const Vt = tt.getBoundingClientRect();
      if (0 === Vt.width) return null;
      const Ot = null === (et = tt.parentElement) || void 0 === et ? void 0 : et.getBoundingClientRect();
      return Ot && Ot.width > 0 ? Math.min(Vt.right, Ot.left + Ot.width * Et) : Vt.right
    }
    const Et = .35,
      ft = new WeakMap,
      wt = ".BottomScreenMessage, [role='status']",
      yt = new WeakMap;

    function Nt(tt) {
      Mt(tt) && Mt(tt)
    }

    function Mt(tt) {
      var et, Vt, Ot, qt, Dt, mt;
      const dt = tt.documentElement.classList;
      if (!dt.contains("TouchHotbar") || dt.contains("TouchHotbarKeysAbove") || dt.contains("HudMove-inventory") || dt.contains("HudLocked-inventory") || null === (et = tt.defaultView) || void 0 === et || null === (Vt = et.matchMedia) || void 0 === Vt || !Vt.call(et, bt).matches) return !1;
      const Xt = tt.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Et = null === Xt || void 0 === Xt ? void 0 : Xt.parentElement,
        Nt = null === Xt || void 0 === Xt ? void 0 : Xt.closest(".BottomMiddleElements"),
        Mt = null === Nt || void 0 === Nt ? void 0 : Nt.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Xt || !Et || !Nt || !Mt || Nt.classList.contains("TouchInventoryOpen")) return !1;
      const Jt = Xt.getBoundingClientRect();
      if (0 === Jt.width) return !1;
      const Ct = tt.querySelector(".JoystickZone"),
        ut = Mt.getBoundingClientRect(),
        Kt = Et.getBoundingClientRect().top,
        ht = null === (Ot = Nt.querySelector(":scope > .AuraBarWrapper")) || void 0 === Ot ? void 0 : Ot.getBoundingClientRect(),
        vt = Qt(Nt),
        Wt = {
          slotsLeft: ut.left,
          slotsRight: ut.right,
          width: Jt.width,
          height: Jt.height,
          zoneRight: Ct ? lt(Ct) : null,
          rowTop: Kt,
          besideBottom: (ht && ht.height > 0 ? ht.top : Kt) - jt,
          obstacles: vt.map((tt => tt.getBoundingClientRect()))
        },
        St = Ht({
          ...Wt,
          obstacles: vt.filter((tt => !tt.matches(wt))).map((tt => tt.getBoundingClientRect()))
        }),
        ct = tt.defaultView,
        Rt = `${null===ct||void 0===ct?void 0:ct.innerWidth}x${null===ct||void 0===ct?void 0:ct.innerHeight}:${St.shift}:${Math.round(Jt.width)}:${Math.round(Kt)}`,
        It = yt.get(Nt),
        Pt = (null === It || void 0 === It ? void 0 : It.at) === Rt ? (Zt = It.rise, Lt = St.rise, null === Zt ? Lt : null === Lt ? Zt : Math.max(Zt, Lt)) : St.rise;
      var Zt, Lt;
      const Ft = Ht({
          ...Wt,
          besideBottom: null === Pt ? Wt.besideBottom : Kt - Pt
        }),
        kt = {
          shift: St.shift,
          rise: null !== (qt = Ft.rise) && void 0 !== qt ? qt : Pt
        },
        Gt = ft.get(Nt);
      return (null !== (Dt = null === Gt || void 0 === Gt ? void 0 : Gt.shift) && void 0 !== Dt ? Dt : 0) === kt.shift && yt.set(Nt, {
        at: Rt,
        rise: Pt
      }), (null === Gt || void 0 === Gt ? void 0 : Gt.shift) !== kt.shift && Nt.style.setProperty("--touch-shop-above-shift", `${kt.shift}px`), (null === Gt || void 0 === Gt ? void 0 : Gt.rise) !== kt.rise && (Nt.classList.toggle("ShopAboveUp", null !== kt.rise), null === kt.rise ? Nt.style.removeProperty("--touch-shop-above-rise") : Nt.style.setProperty("--touch-shop-above-rise", `${kt.rise}px`)), ft.set(Nt, kt), (null !== (mt = null === Gt || void 0 === Gt ? void 0 : Gt.shift) && void 0 !== mt ? mt : 0) !== kt.shift
    }
    const bt = "(orientation: landscape) and (max-height: 500px)";

    function Jt(tt, et, Vt) {
      (0, Ot.useLayoutEffect)((() => {
        var et;
        const Ot = null === (et = tt.current) || void 0 === et ? void 0 : et.closest(".BottomMiddleElements");
        if (!Ot || Vt) return;
        const dt = new ResizeObserver((() => {
            Et(!1)
          })),
          jt = () => {
            dt.disconnect();
            const tt = document.querySelector(".JoystickZone");
            for (const et of [tt, Ot, Ot.querySelector(".HotBarGameItemsContainer"), ...Qt(Ot)]) et && dt.observe(et)
          };
        let Ht = null,
          lt = !1;
        const Et = tt => {
            lt ||= tt, Ht ??= requestAnimationFrame((() => {
              Ht = null, lt && (lt = !1, jt()), Nt(document)
            }))
          },
          ft = new MutationObserver((() => {
            Et(!0)
          }));
        ft.observe(Ot, {
          childList: !0
        });
        for (const tt of Xt(Ot)) ft.observe(tt, {
          childList: !0,
          subtree: !0
        });
        Nt(document), jt();
        const wt = () => {
            Et(!0)
          },
          yt = [(0, qt.n)(Dt.h, wt), (0, qt.n)(mt.c, wt)];
        return () => {
          null !== Ht && cancelAnimationFrame(Ht), dt.disconnect(), ft.disconnect();
          for (const tt of yt) tt()
        }
      }), [tt, et, Vt])
    }
  },
  5155: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ft,
      e: () => bt,
      f: () => wt,
      j: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(5162),
      Dt = Vt(4475),
      mt = Vt(1464),
      dt = Vt(5186),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1450),
      Qt = Vt(1826),
      lt = Vt(5194),
      Et = Vt(1188);

    function ft(tt) {
      let {
        label: et,
        onClick: Vt,
        checked: Ot,
        circleInfoText: qt,
        className: dt,
        disabled: jt,
        note: Xt
      } = tt;
      return (0, Et.jsxs)("div", {
        "aria-disabled": jt || void 0,
        "data-pad-focusable": !0,
        className: Ht()("SettingBox CheckboxContainer", {
          [dt]: dt,
          SettingBoxDisabled: jt
        }),
        onClick: () => {
          jt || Vt(!Ot)
        },
        children: [(0, Et.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Et.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Et.jsx)(Dt.b, {
              className: "SettingsCheckbox",
              checked: Ot,
              disabled: jt,
              onChange: () => {}
            })
          }), (0, Et.jsxs)("div", {
            className: "CheckboxText",
            children: [et, qt && (0, Et.jsx)("span", {
              onClick: tt => tt.stopPropagation(),
              children: (0, Et.jsx)(mt.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qt
              })
            })]
          })]
        }), Xt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Xt
        })]
      })
    }

    function wt(tt) {
      let {
        name: et,
        onChange: Vt,
        min: qt,
        max: Dt,
        step: dt,
        initValue: jt,
        circleInfoText: Xt,
        format: Qt,
        className: lt,
        padStep: ft,
        disabled: wt = !1,
        selectableMax: yt,
        cappedNote: Mt,
        onChangeComplete: bt
      } = tt;
      const [Jt, Ct] = (0, Ot.useState)(jt), ut = (0, Ot.useRef)(jt);
      (0, Ot.useEffect)((() => {
        ut.current = jt, Ct(jt)
      }), [jt]);
      const Kt = void 0 !== yt && yt < Dt,
        ht = Kt ? {
          "--slider-selectable": (yt - qt) / (Dt - qt)
        } : void 0;
      return (0, Et.jsxs)("div", {
        className: Ht()("SettingBox SettingsSliderDiv", {
          [lt]: lt,
          SettingBoxDisabled: wt,
          SliderCapped: Kt
        }),
        style: ht,
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [`${et}: ${Qt?Qt(Jt):Jt}`, Xt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xt
          })]
        }), (0, Et.jsx)("div", {
          className: "SliderDiv",
          children: (0, Et.jsx)(Nt, {
            value: Jt,
            min: qt,
            max: Dt,
            step: dt,
            onChange: tt => {
              if (Kt && tt >= yt && Jt === yt) return;
              const et = Kt ? Math.min(tt, yt) : tt;
              ut.current = et, Ct(et), Vt(et)
            },
            onChangeComplete: bt && (() => {
              bt(ut.current)
            }),
            format: Qt,
            padStep: ft,
            disabled: wt
          })
        }), Kt && Mt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Mt
        })]
      })
    }
    const yt = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Nt(tt) {
      var et;
      let {
        value: Vt,
        min: Dt,
        max: mt,
        step: dt,
        onChange: jt,
        orientation: Ht,
        reverse: Xt,
        setIsChanging: Qt,
        tooltip: ft,
        labels: wt,
        handleLabel: Nt,
        format: Mt,
        onChangeStart: bt,
        onChangeComplete: Jt,
        padStep: Ct,
        disabled: ut = !1
      } = tt;
      const Kt = (0, Ot.useRef)(null),
        ht = (0, Ot.useRef)(null);
      (0, Ot.useLayoutEffect)((() => {
        var tt, et, Vt;
        const Ot = null !== (tt = null === (et = Kt.current) || void 0 === et ? void 0 : et.querySelector(".rangeslider")) && void 0 !== tt ? tt : null;
        null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-slider", ""), null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-focusable", ""), null === Ot || void 0 === Ot || null === (Vt = Ot.querySelector(".rangeslider__handle")) || void 0 === Vt || Vt.setAttribute("data-pad-slider-handle", ""), ht.current = Ot
      }), []), (0, Ot.useLayoutEffect)((() => {
        var tt, et;
        ut ? null === (tt = ht.current) || void 0 === tt || tt.setAttribute("aria-disabled", "true") : null === (et = ht.current) || void 0 === et || et.removeAttribute("aria-disabled")
      }), [ut]);
      const vt = (null !== (et = String(dt).split(".")[1]) && void 0 !== et ? et : "").length,
        Wt = tt => {
          const et = Number((Math.round((tt - Dt) / dt) * dt + Dt).toFixed(vt));
          return Math.min(mt, Math.max(Dt, et))
        },
        St = (0, Ot.useRef)(Jt);
      St.current = Jt, (0, Ot.useEffect)((() => {
        const tt = Kt.current;
        if (!tt) return;
        const et = tt => {
          var et;
          yt.has(tt.key) && (null === (et = St.current) || void 0 === et || et.call(St))
        };
        return tt.addEventListener("keyup", et), () => {
          tt.removeEventListener("keyup", et)
        }
      }), []);
      const ct = (0, Ot.useRef)(!1);
      return (0, lt.i)(ht, {
        adjust: tt => {
          if (ut) return;
          const et = null !== Ct && void 0 !== Ct ? Ct : Math.max(dt, Math.round((mt - Dt) / 20 / dt) * dt),
            Ot = Wt(Vt + tt * et * (Xt ? -1 : 1));
          Ot !== Vt && (null === bt || void 0 === bt || bt(), jt(Ot), null === Jt || void 0 === Jt || Jt())
        },
        setFraction: tt => {
          if (ut) return;
          const et = Wt(Dt + (Xt ? 1 - tt : tt) * (mt - Dt));
          et !== Vt && (ct.current || (ct.current = !0, null === bt || void 0 === bt || bt()), jt(et))
        },
        endDrag: () => {
          ct.current && (ct.current = !1, null === Jt || void 0 === Jt || Jt())
        }
      }), (0, Et.jsx)("div", {
        ref: Kt,
        style: {
          display: "contents"
        },
        children: (0, Et.jsx)(qt.d, {
          value: Vt,
          min: Dt,
          max: mt,
          step: dt,
          onChange: jt,
          orientation: Ht,
          reverse: Xt,
          tooltip: ft,
          labels: wt,
          handleLabel: Nt,
          format: Mt,
          onChangeStart: () => {
            null === bt || void 0 === bt || bt(), null === Qt || void 0 === Qt || Qt(!0)
          },
          onChangeComplete: () => {
            null === Qt || void 0 === Qt || Qt(!1), null === Jt || void 0 === Jt || Jt()
          }
        })
      })
    }
    async function Mt() {
      const tt = Xt.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await tt.getResult() && (0, Qt.reloadBloxd)()
    }

    function bt(tt) {
      let {
        label: et,
        options: Vt,
        value: Ot,
        onChange: qt,
        circleInfoText: Dt
      } = tt;
      return (0, Et.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [et, Dt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dt
          })]
        }), (0, Et.jsx)(dt.c, {
          ariaLabel: et,
          options: Vt,
          value: Ot,
          onChange: qt
        })]
      })
    }
  },
  5186: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1188);

    function mt(tt) {
      let {
        options: et,
        value: Vt,
        onChange: Ot,
        ariaLabel: mt,
        className: dt,
        reselectable: jt = !1,
        keepsFocus: Ht = !1,
        padTabs: Xt
      } = tt;
      const Qt = void 0 !== Xt;
      return (0, Dt.jsx)("div", {
        className: qt()("SegmentedToggle", dt),
        role: "group",
        "aria-label": mt,
        "data-pad-tabs": Xt,
        children: et.map((tt => {
          const et = tt.value === Vt;
          return (0, Dt.jsx)("button", {
            type: "button",
            "aria-pressed": et,
            "data-pad-tab": Qt || void 0,
            "data-pad-selected": Qt && et ? "true" : void 0,
            "data-pad-default-focus": Qt && et || void 0,
            "aria-label": tt.ariaLabel,
            title: tt.ariaLabel,
            className: qt()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: et
            }),
            onMouseDown: Ht ? tt => {
              tt.preventDefault()
            } : void 0,
            onClick: () => {
              et && !jt || Ot(tt.value)
            },
            children: tt.label
          }, tt.value)
        }))
      })
    }
  },
  8972: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      h: () => Dt
    });
    var Ot = Vt(2082);
    const qt = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Dt = tt => "string" === typeof tt.icon && "" !== tt.icon && "string" === typeof tt.keycode && qt.test(tt.keycode),
      mt = tt => "Space" === tt ? "_" : Ot.j[tt]
  },
  9032: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(26);

    function qt() {
      return !Ot.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9114: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => Ht,
      C: () => ft,
      G: () => Dt,
      d: () => qt,
      e: () => dt,
      f: () => Ot,
      h: () => wt,
      k: () => Et,
      n: () => Xt,
      o: () => mt,
      q: () => yt,
      r: () => Qt,
      v: () => jt,
      x: () => lt
    });
    const Ot = tt => ({
      left: tt.left,
      top: tt.top,
      right: tt.right,
      bottom: tt.bottom
    });

    function qt(tt) {
      return {
        x: (tt.left + tt.right) / 2,
        y: (tt.top + tt.bottom) / 2
      }
    }

    function Dt(tt) {
      return 0 === tt.length ? null : tt.reduce(((tt, et) => ({
        left: Math.min(tt.left, et.left),
        top: Math.min(tt.top, et.top),
        right: Math.max(tt.right, et.right),
        bottom: Math.max(tt.bottom, et.bottom)
      })))
    }

    function mt(tt, et) {
      const Vt = Math.max(0, (et - (tt.right - tt.left)) / 2),
        Ot = Math.max(0, (et - (tt.bottom - tt.top)) / 2);
      return {
        left: tt.left - Vt,
        top: tt.top - Ot,
        right: tt.right + Vt,
        bottom: tt.bottom + Ot
      }
    }

    function dt(tt, et) {
      return et.x >= tt.left && et.x <= tt.right && et.y >= tt.top && et.y <= tt.bottom
    }

    function jt(tt, et, Vt) {
      let Ot = null,
        Dt = 1 / 0;
      for (const {
          id: qt,
          box: mt
        }
        of et) {
        const et = (mt.right - mt.left) * (mt.bottom - mt.top);
        dt(mt, tt) && et < Dt && (Dt = et, Ot = qt)
      }
      if (null !== Ot) return Ot;
      let jt = 1 / 0;
      for (const {
          id: Ht,
          box: Xt
        }
        of et) {
        if (!dt(mt(Xt, Vt), tt)) continue;
        const et = qt(Xt),
          Dt = Math.hypot(tt.x - et.x, tt.y - et.y);
        Dt < jt && (jt = Dt, Ot = Ht)
      }
      return Ot
    }

    function Ht(tt, et, Vt) {
      return {
        left: Vt.left,
        top: Vt.top,
        right: tt - Vt.right,
        bottom: et - Vt.bottom
      }
    }

    function Xt(tt, et, Vt, Ot) {
      const qt = (tt, et, Vt) => Math.max(Math.min(et, 0), Math.min(Math.max(Vt, 0), tt));
      return {
        x: qt(et, Ot.left - tt.left, Ot.right - tt.right),
        y: qt(Vt, Ot.top - tt.top, Ot.bottom - tt.bottom)
      }
    }

    function Qt(tt, et, Vt, Ot, qt) {
      const Dt = tt.dx * Ot + et,
        mt = tt.dy * qt + Vt,
        dt = tt => Math.max(-1, Math.min(1, tt));
      return {
        dx: dt(Dt / Ot),
        dy: dt(mt / qt)
      }
    }

    function lt(tt, et, Vt, Ot) {
      return et <= 0 || Vt <= 0 ? 1 : Math.max(.05, Math.min(1, tt / et, Ot / Vt))
    }

    function Et(tt, et, Vt) {
      return Math.min(tt.right, et.right) - Math.max(tt.left, et.left) > Vt && Math.min(tt.bottom, et.bottom) - Math.max(tt.top, et.top) > Vt
    }

    function ft(tt, et) {
      const Vt = (tt, et, Vt, Ot) => et - tt > Ot - Vt ? Vt - tt > et - Ot ? Ot - et : Vt - tt : tt < Vt ? Vt - tt : et > Ot ? Ot - et : 0;
      return {
        x: Vt(tt.left, tt.right, et.left, et.right),
        y: Vt(tt.top, tt.bottom, et.top, et.bottom)
      }
    }

    function wt(tt, et, Vt) {
      return Et(tt, {
        left: 0,
        top: 0,
        right: et,
        bottom: Vt
      }, 0)
    }

    function yt(tt, et) {
      let {
        avoid: Vt = null,
        bounds: Ot = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qt = 0, Dt = 1 / 0;
      return tt.forEach(((tt, mt) => {
        const dt = et.filter((et => Et(tt, et, 0))).length,
          jt = null !== Ot && (tt.left < Ot.left || tt.top < Ot.top || tt.right > Ot.right || tt.bottom > Ot.bottom),
          Ht = dt + (Vt && Et(tt, Vt, 0) ? 1e3 : 0) + (jt ? 1e6 : 0);
        Ht < Dt && (qt = mt, Dt = Ht)
      })), qt
    }
  },
  9120: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      f: () => Dt,
      g: () => qt,
      i: () => mt,
      m: () => Qt,
      n: () => Xt,
      r: () => Ht,
      t: () => jt
    });
    var Ot = Vt(2537);
    const qt = ["J", "C", "A", "P", "U", "X", "G"],
      Dt = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function mt(tt) {
      return tt ? ["X"] : ["P", "X"]
    }
    const dt = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Ot.y,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function jt(tt, et, Vt) {
      const Ot = tt.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Ot) return dt;
      const Dt = {},
        mt = {};
      for (const dt of qt) {
        const tt = Ot.querySelector(`.TouchSlot${dt} > .TouchKey`);
        if (tt) {
          var jt, Ht;
          Dt[dt] = tt.cloneNode(!0);
          const et = (null !== (jt = null === (Ht = tt.querySelector(".TouchKeyLabel")) || void 0 === Ht ? void 0 : Ht.textContent) && void 0 !== jt ? jt : "").split(/\s+/).filter((tt => !/[\d\xd7]/.test(tt))).join(" ");
          et && (mt[dt] = et)
        }
      }
      const Xt = et => {
          const Vt = tt.querySelector(`.InGameUi ${et}`);
          return null !== Vt && !Vt.classList.contains("Hidden")
        },
        Qt = [...tt.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((tt => tt.cloneNode(!0)));
      return {
        faces: Object.keys(Dt).length > 0 ? Dt : null,
        names: mt,
        shop: Xt(".TouchInventoryKey.ShopKey"),
        bag: Xt(".TouchInventoryKey.BagKey"),
        sprint: Xt(".TouchSprintHit"),
        items: Qt.length > 0 ? Qt : null,
        rowIcons: et,
        pinnedIcons: Vt
      }
    }

    function Ht(tt, et) {
      const Vt = {};
      for (const Ot of [...mt(et), "G"]) {
        const et = tt.names[Ot];
        et && (Vt[Dt[Ot]] = et)
      }
      return Vt
    }

    function Xt(tt, et) {
      const {
        faces: Vt
      } = tt;
      if (null === Vt) return [];
      const Ot = new Set(Object.keys(Vt).map((tt => Dt[tt])));
      return mt(et).filter((tt => !Ot.has(Dt[tt])))
    }

    function Qt(tt, et) {
      tt.replaceChildren(...[...et.childNodes].map((tt => tt.cloneNode(!0))))
    }
  },
  9035: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => lt,
      D: () => Et,
      c: () => Dt,
      e: () => dt,
      f: () => Ht,
      i: () => jt,
      j: () => mt,
      m: () => qt,
      q: () => Ot,
      t: () => ft,
      u: () => Qt,
      x: () => Xt
    });
    const Ot = 14,
      qt = 6,
      Dt = (Ot + qt) / 2,
      mt = 200,
      dt = mt / 2,
      jt = mt / 2 - 1,
      Ht = qt / Ot * (mt / 2),
      Xt = (tt, et) => -Math.PI / 2 + 2 * tt * Math.PI / et,
      Qt = (tt, et, Vt) => {
        const Ot = 2 * Math.PI / Vt;
        return (Math.round((Math.atan2(et, tt) + Math.PI / 2) / Ot) % Vt + Vt) % Vt
      },
      lt = .5,
      Et = (tt, et, Vt) => Math.hypot(tt.x, tt.y) < lt ? Vt : Qt(tt.x, tt.y, et),
      ft = (tt, et, Vt, Ot, qt) => {
        const Dt = Math.PI / et,
          mt = Xt(tt, et),
          dt = mt - Dt,
          jt = mt + Dt,
          Ht = (tt, et) => `${Vt+tt*Math.cos(et)} ${Vt+tt*Math.sin(et)}`;
        return [`M ${Ht(Ot,dt)}`, `L ${Ht(qt,dt)}`, `A ${qt} ${qt} 0 0 1 ${Ht(qt,jt)}`, `L ${Ht(Ot,jt)}`, `A ${Ot} ${Ot} 0 0 0 ${Ht(Ot,dt)}`, "Z"].join(" ")
      }
  },
  9056: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(63),
      qt = Vt(9005),
      Dt = Vt(2498);

    function mt() {
      const tt = (0, Dt.i)("shopInfo"),
        [, et] = (0, Ot.useReducer)((tt => tt + 1), 0);
      return (0, Dt.h)("shopInfo", et), !(0, qt.c)(tt)
    }
  },
  8392: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      f: () => Dt,
      g: () => lt,
      i: () => Qt,
      j: () => Ht,
      n: () => dt,
      q: () => Ot,
      r: () => Et,
      t: () => ft
    });
    const Ot = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      qt = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Ot
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Dt = {
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
      mt = ["pickBlock", "perspective"],
      dt = tt => mt.includes(tt) ? mt : [tt],
      jt = Object.fromEntries(qt.flatMap((tt => {
        let {
          group: et,
          actions: Vt
        } = tt;
        return Vt.map((tt => [tt, et]))
      }))),
      Ht = tt => jt[tt],
      Xt = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Qt = tt => {
        var et;
        return [Ht(tt), ...null !== (et = Xt[tt]) && void 0 !== et ? et : []]
      },
      lt = new Set(["menu", "inventory", "keyboard"]),
      Et = {
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
      ft = new Set(["forward", "backward", "left", "right"])
  },
  8390: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => It,
      C: () => ht,
      E: () => bt,
      H: () => Wt,
      J: () => Xt,
      K: () => vt,
      O: () => Rt,
      e: () => Mt,
      h: () => Ct,
      i: () => lt,
      k: () => Et,
      o: () => Pt,
      s: () => ct,
      v: () => St,
      x: () => Jt
    });
    var Ot = Vt(8392),
      qt = Vt(8397),
      Dt = Vt(8377),
      mt = Vt(8411);
    const dt = tt => "pickBlock" === tt ? "perspective" : tt,
      jt = (tt, et) => {
        var Vt;
        const qt = dt(et);
        return null !== (Vt = tt[qt]) && void 0 !== Vt ? Vt : Ot.f[qt]
      },
      Ht = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((tt => {
        let [et, Vt] = tt;
        return [
          [et, Vt],
          [Vt, et]
        ]
      }))),
      Xt = (tt, et) => null !== tt && void 0 !== tt ? tt : "nintendo" === et,
      Qt = tt => Xt((0, qt.i)().swapConfirmBack, (0, qt.l)()) && Ht.get(tt) || tt,
      lt = tt => jt((0, qt.i)().bindings, Qt(tt)),
      Et = tt => Ot.f[Qt(tt)],
      ft = Object.keys(Ot.f),
      wt = tt => "gameplay" === (0, Ot.j)(tt) ? ["gameplay"] : (0, Ot.i)(tt),
      yt = (tt, et) => {
        const Vt = wt(et);
        return wt(tt).some((tt => Vt.includes(tt)))
      },
      Nt = (tt, et, Vt) => {
        const qt = jt(tt, et),
          mt = new Set((0, Ot.n)(et)),
          Ht = [...mt];
        for (let Ot = Ht.pop(); Ot; Ot = Ht.pop())
          for (const et of ft) {
            const Dt = jt(tt, et);
            mt.has(et) || Dt !== Vt && Dt !== qt || !yt(Ot, et) || (mt.add(et), Ht.push(et))
          }
        const Xt = {
          ...tt
        };
        for (const Qt of mt) {
          const et = jt(tt, Qt) === qt ? Vt : qt,
            mt = (0, Ot.i)(Qt).some((tt => Ot.g.has(tt)));
          if ((0, Dt.H)(et) && mt) return null;
          Xt[dt(Qt)] = et
        }
        for (const Dt of Object.keys(Xt)) Xt[Dt] === Ot.f[Dt] && delete Xt[Dt];
        return Xt
      },
      Mt = (tt, et) => null !== Nt((0, qt.i)().bindings, Qt(tt), et),
      bt = (tt, et) => {
        if (lt(tt) === et) return !0;
        const Vt = Nt((0, qt.i)().bindings, Qt(tt), et);
        return !!Vt && ((0, qt.p)({
          bindings: Vt
        }), !0)
      },
      Jt = (tt, et) => {
        const Vt = (0, Ot.n)(et);
        return ft.filter((et => dt(et) === et && !Vt.includes(et) && jt(tt, Qt(et)) !== lt(et)))
      },
      Ct = ["southpaw", "triggersSwapped"],
      ut = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Kt = tt => Object.keys(ut[tt]),
      ht = (tt, et) => "southpaw" === tt ? et.swapSticks : Kt(tt).every((Vt => jt(et.bindings, Vt) === ut[tt][Vt])),
      vt = (tt, et) => {
        const Vt = (0, qt.i)();
        let Dt = Vt.bindings;
        for (const qt of Kt(tt)) {
          const Vt = et ? ut[tt][qt] : Ot.f[qt];
          if (Dt = Nt(Dt, qt, Vt), !Dt) return !1
        }
        return (0, qt.p)({
          swapSticks: "southpaw" === tt ? et : Vt.swapSticks,
          bindings: Dt
        }), !0
      },
      Wt = () => {
        (0, qt.p)({
          swapSticks: !1,
          bindings: {}
        })
      },
      St = () => (0, qt.i)().swapSticks ? "RightStick" : "LeftStick",
      ct = () => (0, qt.i)().swapSticks ? "LeftStick" : "RightStick",
      Rt = tt => (0, qt.i)().swapSticks && (0, Dt.H)(tt),
      It = tt => Rt(tt) ? St() : ct(),
      Pt = tt => {
        if (Ot.t.has(tt)) return St();
        const et = Ot.r[tt];
        return et && ("leaderboard" !== et || (0, mt.e)(tt, (0, mt.b)())) ? lt(et) : null
      }
  },
  8368: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ControllerCategory: () => Cd,
      ControllerGlyph: () => uq,
      ControllerRoot: () => bm,
      PadLobbyShortcuts: () => Gm,
      PadSneakChip: () => Sm,
      PadTooltip: () => Rm,
      attachPressToContinue: () => Bm,
      getBoundButton: () => Xt.i,
      getControllerSettings: () => lt.i,
      getGlyphForNoaAction: () => Xt.o,
      getInventoryCursorState: () => Kd,
      getMenuShortcutButton: () => YV,
      getPadGlyphIconName: () => Km,
      getPadGlyphIconUrl: () => hm,
      getPadRepeatTiming: () => wt.f,
      handOverPadFocus: () => vd,
      hasActivePad: () => ud,
      isPadSteppingSlots: () => hd
    });
    const Ot = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var qt = Vt(1286),
      Dt = Vt(1513),
      mt = Vt(8375),
      dt = Vt(83),
      jt = Vt(26),
      Ht = Vt(31),
      Xt = Vt(8390),
      Qt = Vt(8414),
      lt = Vt(8397),
      Et = Vt(8420),
      ft = Vt(8377),
      wt = Vt(8861),
      yt = Vt(8868),
      Nt = Vt(1764);
    const Mt = (tt, et, Vt) => Math.max(et, Math.min(Vt, tt)),
      bt = tt => Math.min(tt.width, tt.height) / 720,
      Jt = tt => Math.max(.15, tt);
    class Ct {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(tt, et) {
        const Vt = Math.hypot(tt.x, tt.y) >= (tt => Math.max(.3, tt))(et);
        return this.locked ? (this.locked = Vt, !1) : Vt
      }
    }
    const ut = (tt, et) => {
        const Vt = Mt(et.dtMs, 0, 100),
          Ot = Vt / 1e3,
          qt = bt(et.viewport) * (et.cursorSpeedPercent / 100),
          Dt = (0, ft.k)(et.stick, Jt(et.moveDeadzone)),
          mt = Math.hypot(Dt.x, Dt.y),
          dt = ((tt, et, Vt) => {
            if (et < .3) return 0;
            const Ot = Vt / 350;
            return et >= .85 ? Math.min(1, tt + Ot) : Math.max(0, tt - Ot)
          })(tt.speedRamp, mt, Vt);
        let jt = tt.x,
          Ht = tt.y;
        if (mt > 0) {
          const tt = .45 + .55 * dt,
            Vt = et.context.overInteractive ? .45 : 1,
            Xt = 1400 * (tt => {
              const et = Mt(tt, 0, 1);
              return .3 * et + .7 * et * et
            })(mt) * qt * tt * Vt;
          jt += Dt.x / mt * Xt * Ot, Ht += Dt.y / mt * Xt * Ot
        }
        const Xt = Math.hypot(et.dpad.x, et.dpad.y);
        if (Xt > 0) {
          const tt = 500 * qt;
          jt += et.dpad.x / Xt * tt * Ot, Ht += et.dpad.y / Xt * tt * Ot
        }
        const Qt = et.context.magnetTarget;
        if (Qt && mt < .3 && 0 === Xt) {
          const tt = ((tt, et, Vt, Ot, qt) => {
            const Dt = et.x - tt.x,
              mt = et.y - tt.y,
              dt = Math.hypot(Dt, mt);
            if (0 === dt) return {
              x: 0,
              y: 0
            };
            const jt = Math.min(dt, qt * (1 - Ot / .3));
            let Ht = Dt / dt * jt,
              Xt = mt / dt * jt;
            if (Ot > 0) {
              const tt = Vt.x / Ot,
                et = Vt.y / Ot,
                qt = Ht * tt + Xt * et;
              qt < 0 && (Ht -= qt * tt, Xt -= qt * et)
            }
            return {
              x: Ht,
              y: Xt
            }
          })({
            x: jt,
            y: Ht
          }, Qt, Dt, mt, 120 * bt(et.viewport) * Ot);
          jt += tt.x, Ht += tt.y
        }
        return {
          x: Mt(jt, 0, Math.max(0, et.viewport.width - 1)),
          y: Mt(Ht, 0, Math.max(0, et.viewport.height - 1)),
          speedRamp: dt
        }
      },
      Kt = tt => {
        const et = (0, ft.k)(tt, .2);
        return 0 !== et.x || 0 !== et.y
      },
      ht = (tt, et) => {
        const Vt = (0, ft.k)(tt, .2),
          Ot = Math.hypot(Vt.x, Vt.y);
        if (0 === Ot) return {
          x: 0,
          y: 0
        };
        const qt = Ot * Ot * 1600,
          Dt = Mt(et, 0, 100) / 1e3;
        return {
          x: Vt.x / Ot * qt * Dt,
          y: Vt.y / Ot * qt * Dt
        }
      },
      vt = (tt, et) => "y" === et ? tt.scrollHeight > tt.clientHeight + 1 : tt.scrollWidth > tt.clientWidth + 1,
      Wt = (tt, et) => {
        if (!vt(tt, et)) return !1;
        const Vt = getComputedStyle(tt),
          Ot = "y" === et ? Vt.overflowY : Vt.overflowX;
        return "auto" === Ot || "scroll" === Ot
      },
      St = (tt, et, Vt) => {
        for (let Dt = tt instanceof HTMLElement ? tt : null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.parentElement) && void 0 !== Ot ? Ot : null; Dt; Dt = Dt.parentElement) {
          var Ot;
          if (Wt(Dt, et)) return Dt;
          if (Dt === Vt) return null
        }
        if (Vt) return null;
        const qt = document.scrollingElement;
        return qt instanceof HTMLElement && vt(qt, et) ? qt : null
      },
      ct = new WeakMap,
      Rt = (tt, et) => {
        const Vt = performance.now(),
          Ot = ct.get(tt);
        if (Ot && Ot.axis === et && Vt - Ot.atMs < 500 && (!Ot.container || Ot.container.isConnected)) return Ot.container;
        const qt = It(tt, et);
        return ct.set(tt, {
          axis: et,
          atMs: Vt,
          container: qt
        }), qt
      },
      It = (tt, et) => {
        let Vt = Wt(tt, et) ? tt : null,
          Ot = Vt ? Vt.clientWidth * Vt.clientHeight : 0;
        for (const qt of tt.querySelectorAll("*")) {
          const tt = qt.clientWidth * qt.clientHeight;
          tt > Ot && Wt(qt, et) && (Vt = qt, Ot = tt)
        }
        return Vt
      },
      Pt = (tt, et, Vt) => "y" === et ? Vt < 0 ? tt.scrollTop > 0 : tt.scrollTop + tt.clientHeight < tt.scrollHeight - 1 : Vt < 0 ? tt.scrollLeft > 0 : tt.scrollLeft + tt.clientWidth < tt.scrollWidth - 1,
      Zt = (tt, et, Vt) => {
        "y" === et ? tt.scrollBy({
          top: Vt,
          behavior: "instant"
        }) : tt.scrollBy({
          left: Vt,
          behavior: "instant"
        })
      },
      Lt = tt => {
        if (!tt || tt === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const et = tt.getBoundingClientRect(),
          Vt = Math.max(0, et.left),
          Ot = Math.max(0, et.top);
        return new DOMRect(Vt, Ot, Math.min(window.innerWidth, et.right) - Vt, Math.min(window.innerHeight, et.bottom) - Ot)
      },
      Ft = (tt, et) => tt.left < et.right && et.left < tt.right && tt.top < et.bottom && et.top < tt.bottom;
    var kt = Vt(63),
      Gt = Vt(1140),
      zt = Vt.n(Gt),
      ot = Vt(1188);
    let rt = 0,
      Ut = !1;
    class At {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(tt) {
        this.element = tt, this.shownKey = "", this.gap = null
      }
      show(tt) {
        const et = this.element;
        if (!et) return;
        const Vt = tt ? this.keepOnScreen(et, tt) : null,
          Ot = Vt ? `${Vt.left},${Vt.top},${Vt.width},${Vt.height}` : "";
        if (Ot === this.shownKey) return;
        const qt = "" === this.shownKey;
        this.shownKey = Ot, et.classList.toggle("Visible", null !== Vt), Vt && (et.classList.toggle("Snap", qt), et.style.width = `${Vt.width}px`, et.style.height = `${Vt.height}px`, et.style.transform = `translate(${Vt.left}px, ${Vt.top}px)`, qt && (et.offsetWidth, et.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(tt, et) {
        var Vt;
        const Ot = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Ut){Ut=!0;const tt=document.createElement("div");tt.setAttribute("aria-hidden","true"),tt.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(tt),new ResizeObserver((()=>{rt++})).observe(tt)}return String(rt)})()}`;
        (null === (Vt = this.gap) || void 0 === Vt ? void 0 : Vt.key) !== Ot && (this.gap = {
          px: parseFloat(getComputedStyle(tt).paddingLeft) || 0,
          key: Ot
        });
        const qt = this.gap.px + 2,
          Dt = Math.max(et.left, qt),
          mt = Math.max(et.top, qt),
          dt = Math.min(et.left + et.width, window.innerWidth - qt),
          jt = Math.min(et.top + et.height, window.innerHeight - qt);
        return dt <= Dt || jt <= mt ? et : {
          left: Dt,
          top: mt,
          width: dt - Dt,
          height: jt - mt
        }
      }
    }
    const it = tt => {
      let {
        placer: et,
        className: Vt
      } = tt;
      const Ot = (0, kt.useCallback)((tt => {
        et.setElement(tt)
      }), [et]);
      return (0, ot.jsx)("div", {
        ref: Ot,
        className: zt()("PadReticle", Vt),
        "aria-hidden": !0
      })
    };
    var Yt = Vt(8874);
    const Bt = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const pt = new class {
      constructor() {
        this.state = Bt, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(tt) {
        if (et = this.state, Vt = tt, (et.visible || Vt.visible) && (et.visible !== Vt.visible || et.x !== Vt.x || et.y !== Vt.y || et.pressed !== Vt.pressed)) {
          var et, Vt;
          this.state = tt;
          for (const et of this.listeners) et(tt)
        }
      }
      hide() {
        this.set(Bt)
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
    };
    var xt = Vt(8888);
    const Tt = (tt, et) => {
        let {
          kind: Vt,
          holding: Ot,
          hasPress: qt,
          hasBack: Dt,
          slotHasItem: mt
        } = et;
        switch (tt) {
          case "primary":
            return "slot" === Vt ? "slotPrimary" : "recipe" === Vt || "button" === Vt ? qt ? "pressPrimary" : "click" : "textField" === Vt ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Vt ? "slotSecondary" : "button" !== Vt && "recipe" !== Vt || !qt ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Vt && mt ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Vt && mt && !Ot ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Ot ? "cancel" : Dt ? "pressBack" : "close"
        }
      },
      gt = tt => {
        const et = [];
        if (tt.hotbarPicking) return et.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), et.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), et;
        if (tt.holding) "slot" === tt.kind ? (et.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), et.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === tt.kind && et.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), et.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), et.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), tt.openButtonCloses && et.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Vt;
          "slot" === tt.kind && tt.slotHasItem ? (et.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), et.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), et.push({
            actions: ["inventoryQuickMove"],
            labelKey: tt.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), et.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), et.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== tt.kind && "recipe" !== tt.kind || !tt.pressHints ? "button" === tt.kind || "recipe" === tt.kind ? et.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === tt.kind && et.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (tt.pressHints.primary && et.push({
            actions: ["inventoryPrimary"],
            labelKey: tt.pressHints.primary
          }), tt.pressHints.secondary && et.push({
            actions: ["inventorySecondary"],
            labelKey: tt.pressHints.secondary
          }));
          const Ot = null === (Vt = tt.pressHints) || void 0 === Vt ? void 0 : Vt.back;
          Ot && et.push({
            actions: ["inventoryClose"],
            labelKey: Ot
          });
          const qt = [];
          tt.openButtonCloses && qt.push("inventory"), Ot || qt.push("inventoryClose"), qt.length > 0 && et.push({
            actions: qt,
            labelKey: "inventoryClose"
          })
        }
        return et.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), tt.hasCategories ? et.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : tt.hasList && et.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), et
      };
    var st = Vt(8899),
      nt = Vt(8893);
    class te {
      constructor(tt) {
        this.probes = tt, this.byContainer = new Map, this.byParent = new Map
      }
      find(tt, et) {
        const Vt = St(tt, "y", et);
        if (!Vt) return null;
        let Ot = this.byContainer.get(Vt);
        return Ot || (this.probes.push({
          element: Vt,
          rect: qe(Vt.getBoundingClientRect())
        }), Ot = {
          container: Vt,
          box: Lt(Vt),
          group: Oe(Vt)
        }, this.byContainer.set(Vt, Ot)), Ot
      }
      findForParent(tt, et) {
        let Vt = this.byParent.get(tt);
        return void 0 === Vt && (Vt = this.find(tt, et), this.byParent.set(tt, Vt)), Vt
      }
    }
    const ee = new WeakMap;
    let Ve = 0;
    const Oe = tt => {
        let et = ee.get(tt);
        return et || (et = "el:" + Ve++, ee.set(tt, et)), et
      },
      qe = tt => ({
        left: tt.left,
        top: tt.top,
        width: tt.width,
        height: tt.height
      }),
      De = tt => tt.width > 0 && tt.height > 0,
      me = (tt, et) => De(tt) && tt.left + tt.width > 0 && tt.top + tt.height > 0 && tt.left < et.width && tt.top < et.height,
      de = (tt, et, Vt) => {
        const Ot = tt.top + tt.height / 2;
        return me(tt, et) && (!Vt || Ot >= Vt.top && Ot <= Vt.bottom)
      },
      je = tt => ({
        x: tt.left + tt.width / 2,
        y: tt.top + tt.height / 2
      }),
      He = (tt, et, Vt) => tt < 0 ? Vt >= 0 ? 0 : et - 1 : ((tt + Vt) % et + et) % et,
      Xe = tt => "Left" === tt || "Right" === tt,
      Qe = (tt, et, Vt) => {
        const Ot = Xe(Vt),
          qt = Ot ? tt.top : tt.left,
          Dt = Ot ? tt.height : tt.width,
          mt = Ot ? et.top : et.left,
          dt = Ot ? et.height : et.width,
          jt = Math.max(0, Math.max(mt - (qt + Dt), qt - (mt + dt)));
        return Dt > 1.5 * dt ? {
          gap: jt,
          offset: Math.max(0, mt - qt) + .1 * Math.max(0, qt - mt)
        } : {
          gap: jt,
          offset: Math.abs(mt + dt / 2 - (qt + Dt / 2))
        }
      },
      le = (tt, et, Vt) => {
        const Ot = ((tt, et, Vt) => {
          const Ot = je(tt),
            qt = je(et),
            Dt = Xe(Vt) ? Math.min(tt.width, et.width) / 4 : Math.min(tt.height, et.height) / 4;
          switch (Vt) {
            case "Right":
              return qt.x - Ot.x >= Dt ? Math.max(0, et.left - (tt.left + tt.width)) : null;
            case "Left":
              return Ot.x - qt.x >= Dt ? Math.max(0, tt.left - (et.left + et.width)) : null;
            case "Down":
              return qt.y - Ot.y >= Dt ? Math.max(0, et.top - (tt.top + tt.height)) : null;
            case "Up":
              return Ot.y - qt.y >= Dt ? Math.max(0, tt.top - (et.top + et.height)) : null
          }
        })(tt, et, Vt);
        if (null === Ot) return null;
        const qt = Qe(tt, et, Vt);
        return Ot + 3 * qt.gap + .5 * qt.offset
      },
      Ee = (tt, et) => et.visible || null !== et.scrollGroup && et.scrollGroup === tt.scrollGroup,
      fe = (tt, et, Vt, Ot) => {
        let qt = null,
          Dt = 1 / 0;
        for (const mt of et) {
          if (mt.key === tt.key || !Ee(tt, mt) || !Ot(mt)) continue;
          const et = le(tt.rect, mt.rect, Vt);
          null !== et && et < Dt && (qt = mt, Dt = et)
        }
        return qt
      },
      we = (tt, et, Vt) => {
        const Ot = fe(tt, et, Vt, (() => !0));
        if (!Ot || Xe(Vt) || null === tt.scrollGroup || Ot.scrollGroup === tt.scrollGroup) return Ot;
        const qt = fe(tt, et, Vt, (et => 0 === Qe(tt.rect, et.rect, Vt).gap));
        return null !== qt && void 0 !== qt ? qt : Ot
      },
      ye = (tt, et, Vt) => {
        let Ot = null,
          qt = 1 / 0;
        for (const Dt of et) {
          if (!Dt.visible || Vt && !Vt(Dt)) continue;
          const et = je(Dt.rect),
            mt = Math.hypot(et.x - tt.x, et.y - tt.y);
          mt < qt && (Ot = Dt, qt = mt)
        }
        return Ot
      },
      Ne = tt => {
        const {
          rect: et,
          clip: Vt
        } = tt;
        if (!Vt) return et;
        const Ot = Math.max(et.left, Vt.left),
          qt = Math.max(et.top, Vt.top);
        return {
          left: Ot,
          top: qt,
          width: Math.min(et.left + et.width, Vt.left + Vt.width) - Ot,
          height: Math.min(et.top + et.height, Vt.top + Vt.height) - qt
        }
      },
      ae = (tt, et) => et.x >= tt.left && et.x < tt.left + tt.width && et.y >= tt.top && et.y < tt.top + tt.height,
      Me = (tt, et) => {
        let Vt = null,
          Ot = 1 / 0;
        for (const qt of et) {
          const et = Ne(qt);
          (qt.visible || qt.clip) && ae(et, tt) && (et.width * et.height < Ot && (Vt = qt, Ot = et.width * et.height))
        }
        return Vt
      },
      be = tt => {
        let et = null;
        for (const Vt of tt) {
          if (!Vt.visible) continue;
          if (!et) {
            et = Vt;
            continue
          }
          const tt = Math.min(et.rect.height, Vt.rect.height) / 2,
            Ot = Vt.rect.top - et.rect.top;
          (Ot < -tt || Math.abs(Ot) <= tt && Vt.rect.left < et.rect.left) && (et = Vt)
        }
        return et
      },
      Je = (tt, et, Vt, Ot, qt) => {
        const Dt = qt % et,
          mt = Math.floor(qt / et);
        return {
          left: tt.left + Dt * Vt,
          top: tt.top + mt * Ot,
          width: tt.width,
          height: tt.height
        }
      },
      Ce = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      ue = ".LazyLoadedItemWrapper",
      Ke = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      he = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      ve = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      We = tt => tt.hasAttribute("data-inven-idx") ? "slot" : tt.hasAttribute("data-recipe-key") ? "recipe" : tt.hasAttribute("data-craft-ingredient") || (0, nt.z)(tt) ? "info" : (0, Yt.H)(tt) ? "textField" : "button",
      Se = (tt, et) => "slot" === et ? Number(tt.getAttribute("data-inven-idx")) : null,
      ce = tt => tt.matches(ue) ? tt.querySelector(Ke) : tt,
      Re = tt => {
        var et, Vt;
        return {
          element: tt,
          recipe: null !== (et = tt && (null === (Vt = ce(tt)) || void 0 === Vt ? void 0 : Vt.getAttribute("data-recipe-key"))) && void 0 !== et ? et : null
        }
      },
      Ie = tt => {
        const et = ce(tt);
        if (!et) return {
          kind: "pending",
          idx: null
        };
        const Vt = We(et);
        return {
          kind: Vt,
          idx: Se(et, Vt)
        }
      },
      Pe = tt => {
        const et = [];
        for (const [Vt, Ot] of he) {
          tt.matches(Ot) && et.push([Vt, tt]);
          for (const qt of tt.querySelectorAll(Ot)) et.push([Vt, qt])
        }
        return et
      },
      Ze = (tt, et) => {
        for (const [Vt, Ot] of tt)
          if (Ot.contains(et)) return Vt;
        return "other"
      },
      Le = (tt, et, Vt, Ot, qt, Dt, mt, dt) => {
        var jt;
        const Ht = tt.children,
          Xt = qe(Ht[0].getBoundingClientRect()),
          Qt = [{
            element: Ht[0],
            rect: Xt
          }];
        if (Dt.push(Qt[0]), 0 === Xt.width || 0 === Xt.height) return;
        let lt = 1;
        for (; lt < Ht.length && Math.abs(Ht[lt].getBoundingClientRect().top - Xt.top) < 1;) lt++;
        const Et = tt => {
            const et = {
              element: Ht[tt],
              rect: qe(Ht[tt].getBoundingClientRect())
            };
            return Dt.push(et), Qt.push(et), et.rect
          },
          ft = lt > 1 ? Et(1).left - Xt.left : Xt.width,
          wt = Ht.length > lt ? Et(lt).top - Xt.top : Xt.height,
          yt = mt.find(tt, et);
        let Nt = null;
        if (yt) {
          var Mt;
          const {
            container: tt,
            box: et
          } = yt;
          Nt = null !== (Mt = dt.get(tt)) && void 0 !== Mt ? Mt : null, Nt || (Nt = {
            top: tt.scrollTop,
            left: tt.scrollLeft,
            box: et,
            viewport: Ot,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, dt.set(tt, Nt)), Nt.probes.push(...Qt)
        }
        const bt = qt.length;
        for (let Kt = 0; Kt < Ht.length; Kt++) {
          var Jt, Ct, ut;
          const tt = Ht[Kt],
            et = Je(Xt, lt, ft, wt, Kt),
            Dt = tt.firstElementChild ? tt.querySelector(Ke) : null,
            mt = Dt ? We(Dt) : "pending";
          qt.push({
            key: Oe(tt),
            rect: et,
            panel: Vt,
            scrollGroup: null !== (Jt = null === yt || void 0 === yt ? void 0 : yt.group) && void 0 !== Jt ? Jt : null,
            visible: de(et, Ot, null === yt || void 0 === yt ? void 0 : yt.box),
            clip: null !== (Ct = null === yt || void 0 === yt ? void 0 : yt.box) && void 0 !== Ct ? Ct : null,
            element: tt,
            kind: mt,
            idx: Dt ? Se(Dt, mt) : null,
            scrollContainer: null !== (ut = null === yt || void 0 === yt ? void 0 : yt.container) && void 0 !== ut ? ut : null
          })
        }
        null === (jt = Nt) || void 0 === jt || jt.targets.push(...qt.slice(bt))
      },
      Fe = tt => tt instanceof Element && null !== tt.closest(ue),
      ke = tt => null !== tt.scrollContainer && Fe(tt.element);
    class Ge {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(tt, et, Vt, Ot) {
        this.latched = {
          source: tt,
          focusKey: et,
          sinceMs: Vt,
          hold: {
            id: ++this.presses,
            holdMs: Ot
          }
        }
      }
      update(tt, et, Vt) {
        const Ot = this.latched;
        return Ot ? tt && et === Ot.focusKey ? Vt - Ot.sinceMs < Ot.hold.holdMs ? null : (this.latched = null, Ot.source) : (this.latched = null, null) : null
      }
      getHold() {
        var tt, et;
        return null !== (tt = null === (et = this.latched) || void 0 === et ? void 0 : et.hold) && void 0 !== tt ? tt : null
      }
      reset() {
        this.latched = null
      }
    }
    var ze = Vt(8908);
    const oe = {
        kind: "none"
      },
      re = tt => ({
        x: tt.clientX,
        y: tt.clientY
      }),
      Ue = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Ae {
      constructor() {
        this.hovered = oe, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(tt, et, Vt, Ot, qt) {
        const Dt = null !== et ? {
            kind: "slot",
            idx: et
          } : Vt ? {
            kind: "element",
            element: Vt
          } : oe,
          mt = `${qt}|${Math.round(Ot.clientX)},${Math.round(Ot.clientY)}`,
          dt = (jt = this.hovered, Ht = Dt, "slot" === jt.kind && "slot" === Ht.kind ? jt.idx === Ht.idx : "element" === jt.kind && "element" === Ht.kind ? jt.element === Ht.element : jt.kind === Ht.kind);
        var jt, Ht;
        if (dt && mt === this.signature) return;
        const Xt = !dt || qt !== this.holding || "" === this.signature;
        this.signature = mt, this.holding = qt, this.lastPoint = Ot;
        const Qt = this.hovered;
        if (this.hovered = Dt, "slot" === Dt.kind) return this.leaveElement(Qt, null, Ot), void(Xt ? tt.hover(Dt.idx, Ot) : tt.moveTo(Ot));
        if (dt) return void("element" === Dt.kind ? (0, Yt.j)(Dt.element, Dt.element, re(Ot)) : tt.hover(null, Ot));
        tt.hover(null, Ot);
        const lt = "element" === Dt.kind ? Dt.element : null;
        "element" === Qt.kind ? (0, Yt.j)(Qt.element, lt, re(Ot)) : lt && (0, Yt.j)(null, lt, re(Ot))
      }
      invalidate() {
        this.signature = ""
      }
      clear(tt) {
        const et = this.hovered;
        this.hovered = oe, this.signature = "", "none" !== et.kind && (this.leaveElement(et, null, this.lastPoint), tt && "slot" === et.kind && tt.hover(null, this.lastPoint))
      }
      leaveElement(tt, et, Vt) {
        "element" === tt.kind && (0, Yt.j)(tt.element, et, re(Vt))
      }
    }
    class ie {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(tt, et) {
        Kt(tt) && (this.lastTiltedMs = et)
      }
      allowsClick(tt) {
        return tt - this.lastTiltedMs > 150
      }
    }
    class Ye {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(tt) {
        return 0 !== (0, ft.k)(tt, .2).y
      }
      step(tt, et, Vt) {
        tt !== this.container && (this.container = tt, this.remainder = 0);
        const Ot = ht(et, Vt).y;
        if (0 === Ot) return this.remainder = 0, !1;
        const qt = this.remainder + Ot,
          Dt = Math.trunc(qt);
        if (this.remainder = qt - Dt, 0 === Dt) return !1;
        const mt = tt.scrollTop;
        return tt.scrollTop = mt + Dt, tt.scrollTop !== mt
      }
      current() {
        var tt;
        return null !== (tt = this.container) && void 0 !== tt && tt.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Be = Vt(8912);
    const pe = "[data-pad-inventory-default]",
      xe = ".HotBarGameItemsContainer .InvenItem.Selected",
      Te = {
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
      ge = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      se = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      ne = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      tV = [...se, ...ne],
      eV = () => {
        return tt = (0, Xt.i)("inventory"), !tV.map(Xt.i).includes(tt) && !(0, ft.H)(tt);
        var tt
      },
      VV = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      OV = (tt, et) => {
        const Vt = !(null === et || void 0 === et || !et.isHolding());
        return function(tt, et) {
          const Vt = tt.find((tt => tt.visible && et(tt)));
          if (Vt) return Vt;
          for (var Ot = arguments.length, qt = new Array(Ot > 2 ? Ot - 2 : 0), Dt = 2; Dt < Ot; Dt++) qt[Dt - 2] = arguments[Dt];
          for (const mt of qt) {
            const et = be(tt.filter(mt));
            if (et) return et
          }
          return be(tt)
        }(tt, (tt => {
          const {
            element: et
          } = tt;
          return et.matches(pe) || null !== et.querySelector(pe) || et.matches(xe)
        }), (tt => "slot" === tt.kind ? Vt || null !== tt.idx && !(null === et || void 0 === et || !et.hasItemAt(tt.idx)) : "recipe" === tt.kind || "pending" === tt.kind), (tt => "slot" === tt.kind || "button" === tt.kind))
      };
    class qV {
      constructor() {
        this.set = null, this.observer = new MutationObserver((tt => {
          tt.some((tt => !Fe(tt.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = tt => {
          this.scrolled(tt.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const tt = [],
              et = [];
            let Vt = !1;
            const Ot = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              qt = new Map,
              Dt = new te(et);
            for (const Qt of document.querySelectorAll(Ce)) {
              const Xt = Pe(Qt);
              Vt ||= null !== Qt.querySelector(".CreativeCategoryTab");
              for (const Vt of Qt.querySelectorAll(`${ue}:first-child`)) {
                const mt = Vt.parentElement;
                Le(mt, Qt, Ze(Xt, mt), Ot, tt, et, Dt, qt)
              }
              for (const Vt of Qt.querySelectorAll(Ke)) {
                var mt, dt, jt, Ht;
                if (Vt.closest(ue) || Vt.closest("[data-pad-ignore]")) continue;
                const lt = null === (mt = Vt.parentElement) || void 0 === mt ? void 0 : mt.closest(Ke);
                if (lt && Qt.contains(lt)) continue;
                const Et = We(Vt),
                  ft = Se(Vt, Et);
                if (-1 === ft) continue;
                const wt = qe(Vt.getBoundingClientRect());
                et.push({
                  element: Vt,
                  rect: wt
                });
                const yt = Dt.findForParent(Vt.parentElement, Qt),
                  Nt = yt && !qt.has(yt.container) ? yt : null;
                (Nt ? De(wt) : me(wt, Ot)) && tt.push({
                  key: Oe(Vt),
                  rect: wt,
                  panel: Ze(Xt, Vt),
                  scrollGroup: null !== (dt = null === Nt || void 0 === Nt ? void 0 : Nt.group) && void 0 !== dt ? dt : null,
                  visible: de(wt, Ot, null === Nt || void 0 === Nt ? void 0 : Nt.box),
                  clip: null !== (jt = null === Nt || void 0 === Nt ? void 0 : Nt.box) && void 0 !== jt ? jt : null,
                  element: Vt,
                  kind: Et,
                  idx: ft,
                  scrollContainer: null !== (Ht = null === Nt || void 0 === Nt ? void 0 : Nt.container) && void 0 !== Ht ? Ht : null
                })
              }
            }
            for (const [Qt, lt] of qt) lt.holdsOthers = et.some((tt => tt.element !== Qt && Qt.contains(tt.element) && !tt.element.closest(ue)));
            const Xt = new Map;
            for (const Qt of tt) Xt.set(Qt.element, Qt);
            return {
              targets: tt,
              byElement: Xt,
              hasCategories: Vt,
              probes: et,
              scrollers: qt
            }
          })(), this.observer.disconnect();
          for (const tt of document.querySelectorAll(Ce)) this.observer.observe(tt, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(tt) {
        !this.set || tt instanceof Element && ((tt, et) => {
          const Vt = tt.scrollers.get(et);
          if (!Vt || Vt.holdsOthers || et.scrollLeft !== Vt.left) return !1;
          const Ot = et.scrollTop - Vt.top;
          if (0 === Ot) return !0;
          Vt.top = et.scrollTop;
          for (const qt of Vt.probes) qt.rect.top -= Ot;
          for (const qt of Vt.targets) qt.rect.top -= Ot, qt.visible = de(qt.rect, Vt.viewport, Vt.box);
          return !0
        })(this.set, tt) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((tt => {
          return et = tt.rect, Vt = tt.element.getBoundingClientRect(), !(et.left === Vt.left && et.top === Vt.top && et.width === Vt.width && et.height === Vt.height);
          var et, Vt
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const DV = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(ft.D.map((tt => [tt, (0, wt.c)(ft.F)]))), this.stickRepeat = new ft.c((0, wt.c)(ft.eb)), this.pageUpTimer = (0, wt.c)(ft._), this.pageDownTimer = (0, wt.c)(ft._), this.stickGate = new Ct, this.pointer = null, this.activePress = null, this.dropLatch = new Ge, this.scroller = new Ye, this.scrollStickClick = new ie, this.hover = new Ae, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new At, this.targets = new qV, this.hasCategories = !1, this.wasShowing = !1, this.state = ze.d, this.isActive = () => (0, st.m)(), this.isShowing = () => "inventory" === Qt.c.getActiveConsumerName() && (0, Et.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, st.i)()), (0, st.m)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var tt;
            this.reopenSlotIdx = null !== (tt = this.focused ? Ie(this.focused).idx : null) && void 0 !== tt ? tt : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, st.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = tt => {
            (0, dt.unstable_batchedUpdates)((() => {
              this.frame(tt)
            }))
          }, this.shouldBlockRealPointer = tt => tt.isTrusted && !(0, Nt.m)(tt) && this.isShowing(), this.noteRealPointer = tt => {
            tt instanceof MouseEvent && tt.isTrusted && !(0, Nt.m)(tt) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = tt.clientX, this.lastRealPointer.y = tt.clientY)
          }, this.wakePressActs = tt => {
            var et;
            return tt === (0, Xt.i)("inventoryClose") ? !(null !== (et = (0, st.i)()) && void 0 !== et && et.isHolding()) : !(tt !== (0, Xt.i)("inventory") || !eV()) || ((0, ft.H)(tt) ? this.isNavButton(tt) : ne.some((et => (0, Xt.i)(et) === tt)))
          }
        }
        frame(tt) {
          var et, Vt, Ot, qt, Dt;
          const mt = (0, st.i)();
          if (!(0, Et.k)()) return void(this.wasShowing && (this.endInteraction(mt), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), tt.wokeDevice && this.focusWakePointer(!(null === mt || void 0 === mt || !mt.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, lt.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const dt = performance.now();
          this.handleNavigation(tt, dt), this.handlePanels(tt), this.handlePaging(tt, dt), this.handleScroll(tt), this.handleButtons(tt, dt, mt), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const jt = this.ensureFocus(),
            Ht = this.focusContext(mt);
          this.ring.show(jt);
          const Qt = "slot" === Ht.kind ? Ht.idx : null,
            ft = null !== (et = null === (Vt = Ht.actionElement) || void 0 === Vt ? void 0 : Vt.querySelector(".DoCraftItem")) && void 0 !== et ? et : Ht.actionElement;
          this.pointer ? (this.hover.sync(mt, Qt, ft, ((tt, et) => {
            const Vt = et ? Ue() : 0;
            return {
              clientX: tt.x - Vt,
              clientY: tt.y - Vt
            }
          })(this.pointer, Ht.holding), Ht.holding), pt.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: tt.isHeld((0, Xt.i)("inventoryPrimary"))
          })) : jt && this.focused && this.hover.sync(mt, Qt, ft, ((tt, et) => {
            if (!et) return {
              clientX: tt.left + tt.width - 10,
              clientY: tt.top + tt.height / 2 - 10
            };
            const Vt = Ue();
            return {
              clientX: tt.left + tt.width / 2 - Vt,
              clientY: tt.top + tt.height / 2 - Vt
            }
          })(jt, Ht.holding), Ht.holding), this.publishState({
            showing: !0,
            kind: Ht.kind,
            holding: Ht.holding,
            slotHasItem: Ht.slotHasItem,
            pressHints: null !== (Ot = null === (qt = Ht.press) || void 0 === qt ? void 0 : qt.hints) && void 0 !== Ot ? Ot : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && ke(this.focusTarget),
            openButtonCloses: eV(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Ht.kind && !(null === (Dt = Ht.actionElement) || void 0 === Dt || !Dt.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(tt) {
          var et;
          const Vt = (0, Et.d)();
          if (!Vt) return;
          this.targets.revalidate();
          const Ot = this.getTargets().targets;
          this.setFocus(null !== (et = Me(Vt, Ot)) && void 0 !== et ? et : tt ? ye(Vt, Ot, (tt => {
            let {
              rect: et
            } = tt;
            const Ot = Math.max(et.left - Vt.x, 0, Vt.x - (et.left + et.width)),
              qt = Math.max(et.top - Vt.y, 0, Vt.y - (et.top + et.height));
            return Math.hypot(Ot, qt) <= Math.min(et.width, et.height) / 2
          })) : null, !1), "cursor" === (0, lt.i)().inventoryNavigation && (this.pointer = {
            x: Vt.x,
            y: Vt.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const tt = this.lastRealPointer;
          if (!tt || "keyboardMouse" !== jt.b.get("activeInputDevice")) return;
          const et = document.elementFromPoint(tt.x, tt.y);
          et && (0, Yt.j)(null, et, tt)
        }
        endInteraction(tt) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const et of this.dpadTimers.values()) et.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(tt), this.ring.hide(), this.releasePointer(), this.publishState(ze.d)
        }
        getTargets() {
          const tt = this.targets.get();
          return this.hasCategories = tt.hasCategories, tt
        }
        currentTarget() {
          var tt;
          return this.focused && null !== (tt = this.getTargets().byElement.get(this.focused)) && void 0 !== tt ? tt : null
        }
        readFocusRect() {
          const tt = this.focused;
          if (null === tt || void 0 === tt || !tt.isConnected || !tt.closest(Ce)) return null;
          const et = tt.getBoundingClientRect();
          return et.width > 0 && et.height > 0 ? {
            left: et.left,
            top: et.top,
            width: et.width,
            height: et.height
          } : null
        }
        ensureFocus() {
          const tt = this.readFocusRect();
          if (tt || this.pointer) return tt;
          const {
            targets: et,
            byElement: Vt
          } = this.getTargets();
          let Ot = null,
            qt = !1;
          if (this.lastRect) Ot = ye(je(this.lastRect), et);
          else {
            var Dt, mt;
            const tt = ((tt, et) => {
                const Vt = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Vt ? OV(tt.filter((tt => Vt.contains(tt.element))), et) : null
              })(et, (0, st.i)()),
              dt = et.find((tt => null !== tt.idx && tt.idx === this.reopenSlotIdx)),
              jt = document.querySelector(xe);
            qt = null !== tt || void 0 !== dt, Ot = null !== (Dt = null !== (mt = null !== tt && void 0 !== tt ? tt : dt) && void 0 !== mt ? mt : jt && Vt.get(jt)) && void 0 !== Dt ? Dt : be(et)
          }
          return this.setFocus(Ot, qt), this.lastRect
        }
        setFocus(tt) {
          let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          tt && (this.focused = tt.element, this.focusTarget = tt, this.panelMemory.set(tt.panel, tt.element), et && tt.scrollContainer && ((tt, et) => {
            const Vt = tt.getBoundingClientRect(),
              Ot = Lt(et),
              qt = et.scrollTop;
            return Vt.top < Ot.top ? et.scrollTop -= Ot.top - Vt.top : Vt.bottom > Ot.bottom && (et.scrollTop += Vt.bottom - Ot.bottom), et.scrollTop !== qt
          })(tt.element, tt.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, lt.i)().inventoryNavigation) {
              if (this.lastRect) {
                const tt = je(this.lastRect);
                this.pointer = {
                  x: tt.x,
                  y: tt.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const tt = this.lastRect ? je(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: tt.x,
            y: tt.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, pt.hide()
        }
        hoverAtPointer() {
          var tt;
          const et = Me(this.pointer, this.getTargets().targets);
          this.focusTarget = et, (null === et || void 0 === et ? void 0 : et.element) !== this.focused && (this.focused = null !== (tt = null === et || void 0 === et ? void 0 : et.element) && void 0 !== tt ? tt : null, et && (this.panelMemory.set(et.panel, et.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(tt, et) {
          const Vt = this.focusTarget,
            Ot = Vt && (0, lt.i)().cursorMagnetism ? je(Ne(Vt)) : null;
          this.pointer = ut(this.pointer, {
            stick: tt.leftStick,
            moveDeadzone: (0, lt.i)().moveDeadzone,
            dpad: et,
            dtMs: tt.dtMs,
            cursorSpeedPercent: (0, lt.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Ot
            }
          })
        }
        move(tt) {
          this.targets.revalidate();
          const et = this.currentTarget();
          et && this.setFocus(we(et, this.getTargets().targets, tt))
        }
        step(tt) {
          const et = this.pointer;
          if (et && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((tt, et, Vt) => {
            var Ot;
            const qt = {
              key: "",
              rect: {
                left: tt.x,
                top: tt.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Ot = we(qt, et, Vt)) && void 0 !== Ot ? Ot : ye(tt, et)
          })(et, this.getTargets().targets, tt));
          this.move(tt)
        }
        isNavButton(tt) {
          return !se.some((et => (0, Xt.i)(et) === tt)) && !(tt === (0, Xt.i)("inventory") && eV())
        }
        handleNavigation(tt, et) {
          const Vt = (0, lt.i)().inventoryNavigation,
            Ot = {
              x: 0,
              y: 0
            };
          let qt = null;
          for (const jt of ft.D) {
            const Dt = this.isNavButton(jt) && tt.isHeld(jt);
            Dt && (Ot.x += Te[jt].x, Ot.y += Te[jt].y), this.dpadTimers.get(jt).update(Dt, et) && "cursor" !== Vt && (qt ??= jt)
          }
          const Dt = this.stickGate.update(tt.leftStick, (0, lt.i)().moveDeadzone);
          if (qt && (this.step(qt), this.stickGate.lock()), "slot" !== Vt) {
            const et = ((tt, et, Vt, Ot) => "hybrid" !== tt ? "cursor" === tt : !Ot && (et || Vt))(Vt, null !== this.pointer, Dt, null !== qt);
            return et && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(tt, "cursor" === Vt ? Ot : {
              x: 0,
              y: 0
            }))
          }
          const mt = (0, ft.k)(tt.leftStick, (0, lt.i)().moveDeadzone),
            dt = this.stickRepeat.update(Dt ? (0, ft.hb)(mt) : null, et);
          dt && this.move(dt)
        }
        applyCategoryPlace() {
          const tt = this.placeAfterCategory;
          if (!tt) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const et = ye(je(tt.rect), this.getTargets().targets, (et => et.scrollGroup === tt.scrollGroup));
          this.setFocus(et, !1)
        }
        applyFocusRequest() {
          const tt = (0, st.t)();
          tt && (this.targets.invalidate(), this.setFocus((0, st.e)(this.getTargets().targets, tt)))
        }
        handlePanels(tt) {
          var et, Vt, Ot;
          const qt = tt.wasPressed((0, Xt.i)("inventoryPanelPrevious")),
            Dt = tt.wasPressed((0, Xt.i)("inventoryPanelNext"));
          if (!qt && !Dt) return;
          const {
            targets: mt
          } = this.getTargets(), dt = (jt = ((tt, et) => {
            const Vt = [];
            for (const qt of tt) qt.visible && !Vt.includes(qt.panel) && Vt.push(qt.panel);
            const Ot = tt => {
              const Ot = et.indexOf(tt);
              return -1 === Ot ? et.length + Vt.indexOf(tt) : Ot
            };
            return Vt.sort(((tt, et) => Ot(tt) - Ot(et)))
          })(mt, ve), Ht = null !== (et = null === (Vt = this.focusTarget) || void 0 === Vt ? void 0 : Vt.panel) && void 0 !== et ? et : null, Qt = Dt ? 1 : -1, 0 === jt.length ? null : jt[He(null === Ht ? -1 : jt.indexOf(Ht), jt.length, Qt)]);
          var jt, Ht, Qt;
          if (null === dt) return;
          const lt = this.panelMemory.get(dt),
            Et = mt.filter((tt => tt.panel === dt)),
            ft = null !== (Ot = Et.find((tt => tt.element === lt && tt.visible))) && void 0 !== Ot ? Ot : OV(Et, (0, st.i)());
          this.setFocus(ft)
        }
        handlePaging(tt, et) {
          const Vt = (0, Xt.i)("menuPageUp"),
            Ot = (0, Xt.i)("menuPageDown"),
            qt = this.pageUpTimer.update(tt.isHeld(Vt), et),
            Dt = this.pageDownTimer.update(tt.isHeld(Ot), et);
          if (!qt && !Dt) return;
          const mt = Dt ? 1 : -1;
          if (!tt.wasPressed(Dt ? Ot : Vt) && this.hasCategories) return;
          if ((tt => {
              const et = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === et.length) return !1;
              const Vt = et.findIndex((tt => tt.classList.contains("Selected"))),
                Ot = et[He(Vt, et.length, tt)];
              return (0, Yt.h)(Ot, (0, Yt.t)(Ot)), !0
            })(mt)) {
            var dt, jt;
            this.targets.invalidate();
            const tt = null !== (dt = null === (jt = this.focusTarget) || void 0 === jt ? void 0 : jt.scrollGroup) && void 0 !== dt ? dt : null,
              et = this.readFocusRect();
            return void(this.placeAfterCategory = null !== tt && et && !this.pointer ? {
              rect: et,
              scrollGroup: tt
            } : null)
          }
          const {
            targets: Ht
          } = this.getTargets(), Qt = this.currentTarget(), lt = Qt && ke(Qt) ? Qt : Ht.find((tt => ke(tt) && tt.visible));
          if (!lt) return;
          const Et = ((tt, et, Vt, Ot) => {
            if (null === tt.scrollGroup) return null;
            const qt = je(tt.rect),
              Dt = qt.x,
              mt = qt.y + ("Down" === Vt ? Ot : -Ot);
            let dt = null,
              jt = 1 / 0;
            for (const Ht of et) {
              if (Ht.scrollGroup !== tt.scrollGroup || Ht.key === tt.key) continue;
              const et = je(Ht.rect);
              if ("Down" === Vt ? et.y <= qt.y : et.y >= qt.y) continue;
              const Ot = Math.hypot(et.x - Dt, et.y - mt);
              Ot < jt && (dt = Ht, jt = Ot)
            }
            return dt
          })(lt, Ht, mt > 0 ? "Down" : "Up", lt.scrollContainer.clientHeight);
          this.setFocus(null !== Et && void 0 !== Et ? Et : lt)
        }
        handleScroll(tt) {
          var et, Vt, Ot, qt, Dt, mt;
          if (!this.scroller.isScrolling(tt.rightStick)) return void this.scroller.reset();
          const {
            targets: dt
          } = this.getTargets(), jt = this.pointer, Ht = !jt && this.focusTarget && ke(this.focusTarget) ? this.focusTarget.scrollContainer : null, Xt = jt && (null === (et = dt.find((tt => tt.clip && ae(tt.clip, jt)))) || void 0 === et ? void 0 : et.scrollContainer), Qt = null !== (Vt = null !== (Ot = null !== (qt = this.scroller.current()) && void 0 !== qt ? qt : Xt) && void 0 !== Ot ? Ot : Ht) && void 0 !== Vt ? Vt : null === (Dt = dt.find(ke)) || void 0 === Dt ? void 0 : Dt.scrollContainer;
          if (!Qt || !this.scroller.step(Qt, tt.rightStick, tt.dtMs)) return;
          this.targets.scrolled(Qt);
          const lt = jt || (null === (mt = this.focusTarget) || void 0 === mt ? void 0 : mt.scrollContainer) !== Qt ? null : this.readFocusRect();
          if (!lt) return;
          const Et = Lt(Qt),
            ft = je(lt);
          if (ft.y < Et.top || ft.y > Et.bottom) {
            const tt = this.focusTarget.scrollGroup,
              et = ye(ft, this.getTargets().targets, (et => et.scrollGroup === tt));
            this.setFocus(et, !1)
          }
        }
        focusContext(tt) {
          const {
            kind: et,
            idx: Vt
          } = this.focused ? Ie(this.focused) : {
            kind: null,
            idx: null
          }, Ot = this.focused ? ce(this.focused) : null, qt = Ot ? (0, Be.d)(Ot) : null;
          return {
            kind: et,
            idx: Vt,
            actionElement: Ot,
            press: qt,
            hasPress: null !== qt,
            hasBack: !(null === qt || void 0 === qt || !qt.back),
            holding: tt.isHolding(),
            slotHasItem: null !== Vt && tt.hasItemAt(Vt)
          }
        }
        handleButtons(tt, et, Vt) {
          var Ot, qt;
          if (!this.activePress || tt.isHeld(this.activePress.button) && (Ot = this.activePress.target, qt = this.focused, null !== Ot.recipe ? Re(qt).recipe === Ot.recipe : qt === Ot.element) || this.releasePress(), this.scrollStickClick.update(tt.rightStick, et), !this.handleHotbarPick(tt, Vt)) {
            for (const [Ot, qt] of ge) {
              const Dt = (0, Xt.i)(qt);
              if (!tt.wasPressed(Dt) || "openButton" === Ot && !eV()) continue;
              if ("RS" === Dt && !this.scrollStickClick.allowsClick(et)) continue;
              const mt = this.focusContext(Vt),
                dt = Tt(Ot, mt);
              dt && this.runIntent(dt, mt, Dt, Vt)
            }
            this.handleDrop(tt, et, Vt)
          }
        }
        handleHotbarPick(tt, et) {
          const Vt = this.hotbarPick;
          if (!Vt) return !1;
          const Ot = tt.wasPressed((0, Xt.i)("inventoryPrimary")) || tt.wasPressed((0, Xt.i)("inventoryHotbarSwap"));
          if (!Ot && !tt.wasPressed((0, Xt.i)("inventoryClose")) && !et.isHolding()) return !(tt.wasPressed((0, Xt.i)("inventory")) && eV());
          const qt = this.focusTarget;
          Ot && "hotbar" === (null === qt || void 0 === qt ? void 0 : qt.panel) && null !== qt.idx && qt.idx !== Vt.idx && (et.swapWithHotbar(qt.idx, Vt.idx), this.afterAction()), this.hotbarPick = null;
          const Dt = Vt.element.isConnected ? this.getTargets().byElement.get(Vt.element) : void 0;
          return Dt && this.setFocus(Dt), !0
        }
        startHotbarPick(tt) {
          var et;
          const {
            targets: Vt,
            byElement: Ot
          } = this.getTargets(), qt = document.querySelector(xe), Dt = null !== (et = qt && Ot.get(qt)) && void 0 !== et ? et : Vt.find((tt => "hotbar" === tt.panel));
          Dt && this.focused && (this.hotbarPick = {
            idx: tt,
            element: this.focused
          }, this.setFocus(Dt))
        }
        focusKey() {
          return this.focused ? Oe(this.focused) : null
        }
        handleDrop(tt, et, Vt) {
          const Ot = (0, Xt.i)("inventoryDrop");
          if (tt.wasPressed(Ot)) {
            const tt = (qt = this.focusContext(Vt)).holding ? {
              kind: "Pd"
            } : "slot" === qt.kind && qt.slotHasItem && null !== qt.idx ? {
              kind: "slot",
              idx: qt.idx
            } : null;
            return void(tt && (this.dropFrom(tt, !1, Vt), this.dropLatch.press(tt, this.focusKey(), et, yt.b[(0, lt.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var qt;
          const Dt = this.dropLatch.update(tt.isHeld(Ot), this.focusKey(), et);
          Dt && ((tt, et, Vt) => "Pd" === tt.kind ? et : !et && Vt(tt.idx))(Dt, Vt.isHolding(), Vt.hasItemAt) && (this.dropFrom(Dt, !0, Vt), this.afterAction())
        }
        dropFrom(tt, et, Vt) {
          "Pd" === tt.kind ? Vt.dropHeld(et, this.slotPoint()) : Vt.dropSlot(tt.idx, et)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (tt => {
            const et = je(tt);
            return {
              clientX: et.x,
              clientY: et.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(tt, et, Vt, Ot) {
          const qt = et.idx,
            Dt = et.actionElement;
          switch (Dt && VV.has(tt) && (0, Nt.r)(Dt), tt) {
            case "slotPrimary":
              Ot.primary(qt, this.slotPoint());
              break;
            case "slotSecondary":
              Ot.secondary(qt, this.slotPoint());
              break;
            case "slotQuickMove":
              Ot.quickMove(qt, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(qt);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(et.press, "pressPrimary" === tt ? "primary" : "secondary", Vt);
              break;
            case "click":
              (0, Yt.h)(Dt, (0, Yt.t)(Dt));
              break;
            case "openKeyboard":
              (0, Yt.H)(Dt) && (0, Yt.F)(Dt);
              break;
            case "pressBack":
              et.press.back();
              break;
            case "cancel":
              Ot.cancel();
              break;
            case "close":
              return this.releasePress(), void Ot.close()
          }
          this.afterAction()
        }
        startPress(tt, et, Vt) {
          this.releasePress(), tt.press(et) && (this.activePress = {
            handlers: tt,
            button: Vt,
            target: Re(this.focused)
          })
        }
        releasePress() {
          var tt, et, Vt;
          null === (tt = this.activePress) || void 0 === tt || null === (et = (Vt = tt.handlers).release) || void 0 === et || et.call(Vt), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(tt) {
          ((tt, et) => {
            var Vt, Ot, qt, Dt, mt, dt;
            return tt.showing === et.showing && tt.kind === et.kind && tt.holding === et.holding && tt.slotHasItem === et.slotHasItem && (null === (Vt = tt.pressHints) || void 0 === Vt ? void 0 : Vt.primary) === (null === (Ot = et.pressHints) || void 0 === Ot ? void 0 : Ot.primary) && (null === (qt = tt.pressHints) || void 0 === qt ? void 0 : qt.secondary) === (null === (Dt = et.pressHints) || void 0 === Dt ? void 0 : Dt.secondary) && (null === (mt = tt.pressHints) || void 0 === mt ? void 0 : mt.back) === (null === (dt = et.pressHints) || void 0 === dt ? void 0 : dt.back) && tt.hasCategories === et.hasCategories && tt.hasList === et.hasList && tt.openButtonCloses === et.openButtonCloses && tt.steppingSlots === et.steppingSlots && tt.hotbarPicking === et.hotbarPicking && tt.quickMoveToHotbar === et.quickMoveToHotbar && tt.dropStackHold === et.dropStackHold
          })(tt, this.state) || (this.state = tt, Ht.j.sw(ze.g, tt))
        }
      },
      mV = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var dV = Vt(8919),
      jV = Vt(377),
      HV = Vt(1732),
      XV = Vt(8392);
    const QV = "[data-pad-secondary]",
      lV = tt => tt instanceof HTMLElement && (0, nt.r)(tt) && !(0, nt.z)(tt),
      EV = tt => {
        const et = tt.querySelector(QV);
        if (et && lV(et)) return et;
        for (const qt of null !== (Vt = null === (Ot = tt.parentElement) || void 0 === Ot ? void 0 : Ot.children) && void 0 !== Vt ? Vt : []) {
          var Vt, Ot;
          if (qt !== tt && qt.matches(QV) && lV(qt)) return qt
        }
        return null
      },
      fV = (tt, et, Vt, Ot) => Math.max(0, Math.max(tt, Vt) - Math.min(et, Ot)),
      wV = (tt, et, Vt, Ot) => Math.max(0, Math.min(et, Ot) - Math.max(tt, Vt)),
      yV = (tt, et, Vt) => {
        const Ot = (tt.left + tt.right) / 2,
          qt = (tt.top + tt.bottom) / 2,
          Dt = (et.left + et.right) / 2,
          mt = (et.top + et.bottom) / 2;
        if ("Left" === Vt || "Right" === Vt) {
          const dt = "Right" === Vt ? 1 : -1;
          return {
            forwardGap: "Right" === Vt ? et.left - tt.right : tt.left - et.right,
            centreForward: (Dt - Ot) * dt,
            sidewaysGap: fV(tt.top, tt.bottom, et.top, et.bottom),
            sidewaysOverlap: wV(tt.top, tt.bottom, et.top, et.bottom),
            centreSideways: Math.abs(mt - qt),
            startSideways: Math.abs(et.top - tt.top),
            fromSidewaysSize: tt.bottom - tt.top,
            toSidewaysSize: et.bottom - et.top,
            toLength: et.right - et.left
          }
        }
        const dt = "Down" === Vt ? 1 : -1;
        return {
          forwardGap: "Down" === Vt ? et.top - tt.bottom : tt.top - et.bottom,
          centreForward: (mt - qt) * dt,
          sidewaysGap: fV(tt.left, tt.right, et.left, et.right),
          sidewaysOverlap: wV(tt.left, tt.right, et.left, et.right),
          centreSideways: Math.abs(Dt - Ot),
          startSideways: Math.abs(et.left - tt.left),
          fromSidewaysSize: tt.right - tt.left,
          toSidewaysSize: et.right - et.left,
          toLength: et.bottom - et.top
        }
      },
      NV = tt => tt.centreForward > .5 && tt.forwardGap >= -tt.toLength / 2,
      aV = tt => {
        const et = tt.sidewaysOverlap > 0 ? 0 : 2 * tt.fromSidewaysSize,
          Vt = tt.fromSidewaysSize > 1.5 * tt.toSidewaysSize ? tt.startSideways : tt.centreSideways;
        return Math.max(0, tt.forwardGap) + 3 * tt.sidewaysGap + et + .1 * Vt
      },
      MV = (tt, et) => wV(tt.top, tt.bottom, et.top, et.bottom) > 0 || et.bottom - et.top > et.right - et.left,
      bV = (tt, et, Vt, Ot, qt, Dt) => {
        const mt = qt ? CV(tt, et, Vt, qt) : new Set,
          dt = KV(tt, et, Vt, mt);
        return dt < 0 && mt.size > 0 && Dt ? JV(tt, et, Vt, Dt) : Ot && dt >= 0 ? uV(tt, et, Vt, Ot, dt, mt) : dt
      },
      JV = (tt, et, Vt, Ot) => {
        const qt = new Set,
          Dt = KV(tt, et, "Up", qt) >= 0,
          mt = KV(tt, et, "Down", qt) >= 0,
          dt = new Set;
        return et.forEach(((et, Vt) => {
          const qt = et.top + et.bottom < tt.top + tt.bottom;
          Ot[Vt] && !(qt ? Dt : mt) || dt.add(Vt)
        })), KV(tt, et, Vt, dt)
      },
      CV = (tt, et, Vt, Ot) => {
        const qt = new Set;
        return "Left" !== Vt && "Right" !== Vt || et.forEach(((et, Vt) => {
          Ot[Vt] && wV(tt.top, tt.bottom, et.top, et.bottom) <= 0 && qt.add(Vt)
        })), qt
      },
      uV = (tt, et, Vt, Ot, qt, Dt) => {
        const mt = yV(tt, et[qt], Vt).forwardGap;
        let dt = qt,
          jt = Ot[qt],
          Ht = 1 / 0;
        return et.forEach(((et, Xt) => {
          const Qt = Ot[Xt];
          if (Dt.has(Xt) || Qt < jt || Qt === jt && dt === qt) return;
          const lt = yV(tt, et, Vt);
          if (!NV(lt) || lt.forwardGap < 0 || lt.forwardGap >= mt) return;
          const Et = aV(lt);
          (Qt > jt || Et < Ht) && (dt = Xt, jt = Qt, Ht = Et)
        })), dt
      },
      KV = (tt, et, Vt, Ot) => {
        let qt = -1,
          Dt = 1 / 0;
        if (et.forEach(((et, mt) => {
            const dt = ((tt, et, Vt) => {
              const Ot = yV(tt, et, Vt);
              if (!NV(Ot)) return null;
              const qt = Math.max(0, Ot.forwardGap);
              return Ot.sidewaysOverlap <= 0 && Ot.sidewaysGap > 2 * (qt + 1) ? null : aV(Ot)
            })(tt, et, Vt);
            null !== dt && dt < Dt && !Ot.has(mt) && (Dt = dt, qt = mt)
          })), qt < 0) return -1;
        const mt = et[qt],
          dt = yV(tt, mt, Vt).forwardGap;
        let jt = dt,
          Ht = qt;
        return et.forEach(((et, Dt) => {
          if (Dt === qt || Ot.has(Dt) || !((tt, et, Vt) => {
              const Ot = "Left" === Vt || "Right" === Vt,
                qt = Ot ? wV(tt.top, tt.bottom, et.top, et.bottom) : wV(tt.left, tt.right, et.left, et.right),
                Dt = Ot ? Math.min(tt.bottom - tt.top, et.bottom - et.top) : Math.min(tt.right - tt.left, et.right - et.left);
              return qt > 0 && qt >= Dt / 2
            })(et, mt, Vt)) return;
          const Xt = yV(tt, et, Vt);
          NV(Xt) && Xt.forwardGap + Xt.toLength <= dt + 1 && Xt.forwardGap < jt && (jt = Xt.forwardGap, Ht = Dt)
        })), Ht
      },
      hV = (tt, et) => {
        let Vt = -1,
          Ot = 1 / 0;
        return et.forEach(((et, qt) => {
          const Dt = Math.max(et.left - tt.x, 0, tt.x - et.right),
            mt = Math.max(et.top - tt.y, 0, tt.y - et.bottom),
            dt = Math.hypot(Dt, mt);
          dt < Ot && (Ot = dt, Vt = qt)
        })), Vt
      },
      vV = (tt, et) => {
        const Vt = Math.min(tt.bottom - tt.top, et.bottom - et.top) / 2;
        return Math.abs(tt.top - et.top) > Vt ? tt.top - et.top : tt.left - et.left
      },
      WV = tt => {
        let et = -1;
        for (let Vt = 0; Vt < tt.length; Vt++)(et < 0 || vV(tt[Vt], tt[et]) < 0) && (et = Vt);
        return et
      };
    var SV = Vt(1779),
      cV = Vt(8927),
      RV = Vt(8929);
    const IV = tt => {
        if ("death" !== tt || "inGame" !== jt.b.get("gameState") || "off" === (0, lt.i)().quickChat || null === (0, SV.d)()) return !1;
        const et = (0, Xt.i)("chat");
        return et !== (0, Xt.i)("menuConfirm") && et !== (0, Xt.i)("menuBack")
      },
      PV = new cV.b;
    var ZV = Vt(4392),
      LV = Vt(8936),
      FV = Vt(8943);
    const kV = tt => {
        let et = null;
        for (const Vt of tt.querySelectorAll("[data-pad-tabs]"))(0, nt.r)(Vt) && (!et || Number(Vt.dataset.padTabs) < Number(et.dataset.padTabs)) && (et = Vt);
        return et
      },
      GV = (tt, et, Vt, Ot) => {
        tt.focusWhenFound((() => {
          const qt = tt.pickInitial(et);
          if (qt && !Vt.has(qt) && (null === Ot || void 0 === Ot || !Ot.contains(qt))) return qt;
          const Dt = ((tt, et) => {
              const Vt = et => tt.getEnabledCandidates(et).filter((tt => !tt.closest("[data-pad-tabs]")));
              for (const Ot of (0, nt.i)(et)) {
                const tt = Vt(Ot);
                if (tt.length > 0) return tt
              }
              return Vt(et)
            })(tt, et).filter((tt => !Vt.has(tt))),
            mt = WV(Dt.map((tt => tt.getBoundingClientRect())));
          return mt >= 0 ? Dt[mt] : null
        }), 3e3)
      },
      zV = (tt, et, Vt, Ot) => {
        var qt;
        const Dt = ((tt, et) => {
          if (0 === tt.length) return null;
          const Vt = tt.findIndex((tt => "true" === tt.dataset.padSelected));
          return Vt < 0 ? et > 0 ? tt[0] : tt[tt.length - 1] : tt[(Vt + et + tt.length) % tt.length]
        })([...Vt.querySelectorAll("[data-pad-tab]")].filter((tt => (0, nt.r)(tt) && !(0, nt.z)(tt))), Ot);
        if (!Dt) return;
        const mt = null !== (qt = null === tt || void 0 === tt ? void 0 : tt.getFocused()) && void 0 !== qt ? qt : null,
          dt = !(null === mt || void 0 === mt || !mt.isConnected) && Vt.contains(mt),
          jt = tt && !dt ? new Set(tt.getEnabledCandidates(et)) : null;
        (0, Yt.b)(Dt), tt && (jt ? GV(tt, et, jt, Vt) : tt.setFocus(Dt, {
          byUser: !0
        }))
      },
      oV = tt => {
        var et;
        const Vt = Lt(null !== (et = St(tt, "x")) && void 0 !== et ? et : tt),
          Ot = (0, nt.h)(tt).filter((tt => !(0, nt.z)(tt))),
          qt = Ot.filter((tt => Ft(tt.getBoundingClientRect(), Vt)));
        return (qt.length > 0 ? qt : Ot).sort(((tt, et) => vV(tt.getBoundingClientRect(), et.getBoundingClientRect())))
      },
      rV = (tt, et, Vt) => {
        const Ot = [...et.querySelectorAll("[data-pad-row]")].filter(nt.r),
          qt = tt.getFocused(),
          Dt = qt ? Ot.findIndex((tt => tt.contains(qt))) : -1;
        let mt = 0,
          dt = Vt > 0 ? 0 : Ot.length - 1;
        if (Dt >= 0 && qt) mt = Math.max(0, oV(Ot[Dt]).indexOf(qt)), dt = Dt + Vt;
        else if (qt) {
          const tt = qt.getBoundingClientRect(),
            et = Ot.map((et => {
              const Ot = et.getBoundingClientRect();
              return Vt > 0 ? Ot.top >= tt.top : Ot.bottom <= tt.bottom
            }));
          dt = Vt > 0 ? et.indexOf(!0) : et.lastIndexOf(!0)
        }
        for (let jt = dt; jt >= 0 && jt < Ot.length; jt += Vt) {
          const et = oV(Ot[jt]);
          if (et.length > 0) return void tt.setFocus(et[Math.min(mt, et.length - 1)], {
            byUser: !0
          })
        }
      },
      UV = (tt, et, Vt) => {
        var Ot, qt;
        const Dt = null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.getFocused()) && void 0 !== Ot ? Ot : null,
          mt = null !== Dt && void 0 !== Dt && Dt.closest("[data-pad-row]") ? "x" : "y",
          dt = null !== (qt = Dt ? St(Dt, mt, et) : null) && void 0 !== qt ? qt : Rt(et, mt);
        if (!dt) return;
        const jt = Dt ? (0, Yt.t)(Dt) : null;
        if (Zt(dt, mt, Vt * ("y" === mt ? dt.clientHeight : dt.clientWidth) * .85), !tt || !jt) return;
        const Ht = Lt(dt),
          Xt = tt.getEnabledCandidates(et).filter((tt => dt.contains(tt) && Ft(tt.getBoundingClientRect(), Ht))),
          Qt = hV(jt, Xt.map((tt => tt.getBoundingClientRect())));
        Qt >= 0 && tt.setFocus(Xt[Qt], {
          scroll: !1,
          byUser: !0
        })
      };
    let AV = null;
    const iV = (tt, et) => {
        var Vt, Ot;
        const qt = et.querySelector("[data-pad-friends-column]"),
          Dt = tt.getFocused();
        if (!qt || !Dt || !qt.contains(Dt)) return !1;
        const mt = tt.getEnabledCandidates(et).filter((tt => !qt.contains(tt))),
          dt = hV((0, Yt.t)(Dt), mt.map((tt => tt.getBoundingClientRect()))),
          jt = null === (Vt = AV) || void 0 === Vt ? void 0 : Vt.deref();
        return tt.setFocus(null !== jt && void 0 !== jt && jt.isConnected ? jt : null !== (Ot = mt[dt]) && void 0 !== Ot ? Ot : null, {
          byUser: !0
        }), !0
      },
      YV = tt => {
        const et = (0, Xt.i)(tt);
        return (0, ft.H)(et) || XV.q.some((tt => (0, Xt.i)(tt) === et)) ? null : et
      },
      BV = (tt, et) => {
        const Vt = YV(et);
        return null !== Vt && tt.wasPressed(Vt)
      },
      pV = function(tt, et, Vt) {
        let Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qt = (tt => {
            var et, Vt;
            return null !== (et = null === (Vt = kV(tt)) || void 0 === Vt ? void 0 : Vt.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== et ? et : null
          })(et),
          Dt = tt && qt ? new Set(tt.getEnabledCandidates(et)) : null;
        (0, dV.c)(), Vt === jV.o.SETTINGS && (0, HV.l)(jt.b.get("openEverythingMenuName")) ? jt.b.set({
          openEverythingMenuName: Vt
        }) : (0, HV.y)((0, FV.b)("padMenuShortcut"), Vt, Ot), tt && Dt && qt && GV(tt, et, Dt, qt.closest("[data-pad-tabs]"))
      },
      xV = tt => null !== tt.closest(".Dropdown-root") || null !== tt.querySelector(".Dropdown-root.is-open"),
      TV = tt => null !== (0, LV.c)() && "popup" !== tt.layer.kind && !kV(tt.root) && !xV(tt.root),
      gV = (0, wt.c)(ft._),
      sV = (0, wt.c)(ft._),
      nV = (tt, et, Vt) => {
        if (((tt, et) => {
            const Vt = (0, Xt.i)("chat");
            return IV(et) && tt.isHeld(Vt) ? "hold" === PV.update(tt.wasPressed(Vt), tt.isHeld(Vt), performance.now(), yt.b[(0, lt.i)().tapHoldTime].wheelMs) && (Qt.c.consumeButton(Vt), Ht.j.sw(RV.j), !0) : (PV.release(), !1)
          })(et, Vt.layer.kind)) return !0;
        const Ot = Vt.root;
        for (const [mt, dt] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (et.wasPressed((0, Xt.i)(mt))) {
            const et = xV(Ot) ? null : kV(Ot);
            if (et) zV(tt, Ot, et, dt);
            else if (TV(Vt)) {
              var qt;
              const et = tt ? new Set(tt.getEnabledCandidates(Ot)) : null;
              null !== (qt = (0, LV.c)()) && void 0 !== qt && qt(dt) && tt && et && GV(tt, Ot, et, null)
            } else tt && rV(tt, Ot, dt);
            return !0
          } for (const [mt, dt, jt] of [
            ["menuPageUp", -1, gV],
            ["menuPageDown", 1, sV]
          ]) {
          const Vt = (0, Xt.i)(mt);
          if (et.wasPressed(Vt) && jt.reset(), jt.update(et.isHeld(Vt), performance.now())) return UV(tt, Ot, dt), !0
        }
        const Dt = "popup" === Vt.layer.kind;
        return BV(et, "pause") ? (Dt || (0, HV.u)() && "menu" !== Vt.layer.kind || pV(tt, Ot, (0, HV.u)() ? jV.o.SETTINGS : (0, ZV.b)()), !0) : !!BV(et, "leaderboard") && ("home" === Vt.layer.kind ? (tt => {
          const et = [...tt.querySelectorAll("[data-pad-notifications]")].find(nt.r);
          et && (0, Yt.b)(et)
        })(Ot) : Dt || pV(tt, Ot, jV.o.LOBBY_LEADERBOARD, "inGame" === jt.b.get("gameState")), !0)
      },
      tO = (tt, et, Vt) => {
        if (nV(tt, et, Vt)) return !0;
        const Ot = "home" === Vt.layer.kind;
        if (et.wasPressed((0, Xt.i)("menuSecondary"))) {
          const et = tt.getFocused(),
            qt = et ? EV(et) : null;
          if (qt) return (0, Yt.b)(qt), !0;
          if (Ot) {
            const et = Vt.root.querySelector("[data-pad-search] input");
            return et && (0, nt.v)(et, Vt.root) ? (tt.setFocus(et, {
              byUser: !0
            }), (0, Yt.b)(et)) : jt.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Ot || !BV(et, "inventory")) && (((tt, et) => {
          var Vt, Ot;
          const qt = et.querySelector("[data-pad-friends-column]");
          if (!qt || !(0, nt.r)(qt)) return void(0, HV.y)((0, FV.b)("padMenuShortcut"), jV.o.SOCIAL);
          if (iV(tt, et)) return;
          const Dt = null !== (Vt = null === (Ot = qt.querySelector("[data-pad-friends-start]")) || void 0 === Ot ? void 0 : Ot.getBoundingClientRect().top) && void 0 !== Vt ? Vt : -1 / 0,
            mt = tt.getEnabledCandidates(qt),
            dt = mt.filter((tt => tt.getBoundingClientRect().top >= Dt)),
            jt = dt.length > 0 ? dt : mt,
            Ht = WV(jt.map((tt => tt.getBoundingClientRect())));
          tt.setFocus(Ht >= 0 ? jt[Ht] : null, {
            byUser: !0
          })
        })(tt, Vt.root), !0)
      },
      eO = tt => {
        var et, Vt, Ot;
        const qt = (0, Yt.x)(tt);
        if (null !== qt) return qt;
        const Dt = (null !== (et = null !== (Vt = null !== (Ot = tt.getAttribute("aria-label")) && void 0 !== Ot ? Ot : tt.getAttribute("title")) && void 0 !== Vt ? Vt : tt.textContent) && void 0 !== et ? et : "").replace(/\s+/g, " ").trim();
        return Dt ? `${tt.tagName}:${Dt.slice(0,100)}` : null
      };
    class VO {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(tt) {
        const et = this.history.indexOf(tt);
        if (et >= 0) {
          for (const tt of this.history.splice(et + 1)) this.remembered.delete(tt);
          return !0
        }
        return this.remembered.delete(tt), this.history.push(tt), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(tt) {
        this.remembered.delete(tt);
        const et = this.history.indexOf(tt);
        et >= 0 && this.history.splice(et, 1)
      }
      remember(tt, et, Vt, Ot) {
        const qt = eO(et),
          Dt = (0, Yt.x)(et),
          mt = null !== Dt && ((tt, et) => {
            let Vt = 0;
            for (const Ot of tt.querySelectorAll("[data-pad-key], [href]"))
              if ((Ot.getAttribute("data-pad-key") === et || Ot.getAttribute("href") === et) && (Vt++, Vt > 1)) return !0;
            return !1
          })(Vt, Dt) ? Math.max(0, this.twins(Ot(), Dt).indexOf(et)) : 0;
        this.remembered.set(tt, {
          element: new WeakRef(et),
          identity: qt,
          ordinal: mt
        })
      }
      has(tt) {
        return this.remembered.has(tt)
      }
      recall(tt, et) {
        var Vt, Ot;
        const qt = this.remembered.get(tt);
        if (!qt) return null;
        const Dt = qt.element.deref();
        if (Dt && et.includes(Dt)) return Dt;
        if (null === qt.identity) return null;
        const mt = this.twins(et, qt.identity);
        return null !== (Vt = null !== (Ot = mt[qt.ordinal]) && void 0 !== Ot ? Ot : mt[0]) && void 0 !== Vt ? Vt : null
      }
      twins(tt, et) {
        return tt.filter((tt => eO(tt) === et))
      }
    }
    var OO = Vt(1371);
    const qO = tt => {
        const et = [];
        let Vt = tt;
        for (; Vt && Vt !== document.body;) {
          const tt = getComputedStyle(Vt).zIndex;
          "auto" !== tt && et.push(Number(tt) || 0), Vt = Vt.parentElement
        }
        return et.reverse()
      },
      DO = (tt, et) => {
        const Vt = ((tt, et) => {
          const Vt = Math.max(tt.length, et.length);
          for (let Dt = 0; Dt < Vt; Dt++) {
            var Ot, qt;
            const Vt = (null !== (Ot = tt[Dt]) && void 0 !== Ot ? Ot : 0) - (null !== (qt = et[Dt]) && void 0 !== qt ? qt : 0);
            if (0 !== Vt) return Vt
          }
          return 0
        })(qO(tt), qO(et));
        if (0 !== Vt) return Vt > 0;
        if (tt.contains(et)) return !1;
        if (et.contains(tt)) return !0;
        const Ot = tt.compareDocumentPosition(et);
        return !!(Ot & Node.DOCUMENT_POSITION_PRECEDING) || !(Ot & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      mO = (tt, et) => {
        var Vt;
        return null !== (Vt = DO(tt.root, et.root)) && void 0 !== Vt ? Vt : tt.order > et.order
      },
      dO = (tt, et) => et.some((et => !et.contains(tt) && !tt.contains(et) && !0 === DO(et, tt)));
    let jO = null,
      HO = null,
      XO = -1;
    const QO = () => {
        var tt;
        const et = null === (tt = document.timeline) || void 0 === tt ? void 0 : tt.currentTime,
          Vt = "number" === typeof et ? et : null;
        if (null !== Vt && Vt === HO && XO === (0, OO.e)()) return jO;
        let Ot = null;
        const qt = [],
          Dt = [...document.querySelectorAll("[data-pad-covers]")].filter(nt.r);
        for (const mt of (0, OO.i)()) {
          const tt = mt.getRoot(),
            et = !!tt && (0, nt.r)(tt) && !dO(tt, Dt);
          if (mt.shown && !et && qt.push(mt), mt.shown = et, !tt || !et) continue;
          const Vt = {
            layer: mt,
            root: tt,
            order: mt.order
          };
          Ot && !mO(Vt, Ot) || (Ot = Vt)
        }
        jO = Ot, HO = Vt, XO = (0, OO.e)();
        for (const mt of qt)(0, OO.l)(mt);
        return jO
      },
      lO = () => {
        const tt = QO();
        return !(null === tt || void 0 === tt || !tt.layer.close) && (tt.layer.close(), HO = null, !0)
      },
      EO = () => {
        var tt, et;
        return null !== (tt = null === (et = QO()) || void 0 === et ? void 0 : et.root) && void 0 !== tt ? tt : null
      },
      fO = tt => tt ? {
        ...tt,
        root: EO()
      } : null;
    let wO = null,
      yO = null,
      NO = (0, lt.i)().menuNavigation,
      aO = null;
    const MO = new Ct;
    let bO = null;
    Ht.j.subscribe(lt.g, (() => {
      const tt = (0, lt.i)().menuNavigation;
      tt !== NO && (NO = tt, wO = null, yO = null)
    }));
    const JO = () => {
        var tt;
        return null !== (tt = wO) && void 0 !== tt ? tt : (0, lt.i)().menuNavigation
      },
      CO = tt => {
        if (vO()) {
          if (aO = fO(tt), "hybrid" === JO()) return MO.lock(), void(yO = yO ? null : EO());
          wO = "focus" === JO() ? "cursor" : "focus"
        }
      },
      uO = () => {
        const tt = aO;
        return aO = null, tt
      };
    let KO = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const hO = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Vt = KO.root === tt,
          Ot = Vt ? KO.firstSeenMs : et,
          qt = KO.has || et - Ot > 1e3;
        return (!Vt || !qt || et - KO.atMs > 250) && (KO = {
          root: tt,
          firstSeenMs: Ot,
          atMs: et,
          has: (0, nt.l)(tt)
        }), KO.has
      },
      vO = () => {
        const tt = EO();
        return null !== tt && hO(tt)
      },
      WO = () => {
        const tt = QO();
        return yO && (null === tt || void 0 === tt ? void 0 : tt.root) !== yO && (yO = null), (tt => {
          let {
            mode: et,
            hasLayer: Vt,
            hasCandidates: Ot,
            hybridCursorEngaged: qt
          } = tt;
          return Vt ? "cursor" !== et && Ot() ? "hybrid" === et && qt ? "cursor" : "focus" : "cursor" : null
        })({
          mode: JO(),
          hasLayer: null !== tt,
          hasCandidates: () => null !== tt && hO(tt.root),
          hybridCursorEngaged: null !== yO
        })
      },
      SO = () => "hybrid" === JO() && vO(),
      cO = "pad-focused";
    var RO = Vt(4686),
      IO = Vt(5194);
    const PO = "[data-pad-destructive]",
      ZO = `${PO}, [data-pad-back]`,
      LO = tt => ({
        rect: tt.getBoundingClientRect(),
        destructive: tt.matches(PO),
        closes: null !== tt.closest("[data-pad-close-button]"),
        unavailable: tt.matches("[data-pad-unavailable]")
      }),
      FO = tt => {
        let {
          destructive: et,
          closes: Vt,
          unavailable: Ot
        } = tt;
        return et ? Vt ? 2 : 3 : Ot ? 1 : 0
      },
      kO = tt => {
        let et = -1;
        for (let Vt = 0; Vt < tt.length; Vt++) {
          if (et < 0) {
            et = Vt;
            continue
          }
          const Ot = tt[Vt],
            qt = tt[et];
          FO(Ot) === FO(qt) ? vV(Ot.rect, qt.rect) < 0 && (et = Vt) : FO(Ot) < FO(qt) && (et = Vt)
        }
        return et
      },
      GO = "[data-pad-tabs]",
      zO = "[data-pad-tab]",
      oO = (tt, et) => {
        const Vt = tt.querySelector(`${zO}[data-pad-selected='true']`);
        return Vt && et.includes(Vt) ? Vt : null
      },
      rO = (tt, et) => {
        let Vt = et;
        for (let Ot = et.parentElement; Ot && !Ot.contains(tt); Ot = Ot.parentElement) Vt = Ot;
        return Vt
      };
    class UO {
      constructor() {
        this.contentReturn = null
      }
      redirect(tt, et, Vt, Ot) {
        var qt, Dt;
        const mt = tt.closest(GO),
          dt = et.closest(GO);
        var jt;
        if (dt && dt !== mt) return mt || (this.contentReturn = new WeakRef(tt)), null !== (jt = oO(dt, Vt)) && void 0 !== jt ? jt : et;
        if (!mt || dt) return et;
        const Ht = rO(tt, et),
          Xt = null === (qt = this.contentReturn) || void 0 === qt ? void 0 : qt.deref();
        return Xt && Ht.contains(Xt) && Vt.includes(Xt) ? Xt : null !== (Dt = this.pickRegionStart(Ht, St(et, "y", Ot), Vt)) && void 0 !== Dt ? Dt : et
      }
      findTabContent(tt, et, Vt) {
        const Ot = tt.closest(GO);
        if (!Ot || !tt.matches(zO) || Ot.contains(et)) return null;
        const qt = et.closest(GO);
        if (qt && Number(qt.dataset.padTabs) <= Number(Ot.dataset.padTabs)) return null;
        const Dt = rO(tt, et);
        return Vt.some((tt => Dt.contains(tt) && !tt.closest(ZO))) || !et.closest(ZO) ? Dt : null
      }
      pickContentStart(tt, et, Vt) {
        return this.contentReturn = null, this.pickRegionStart(tt, St(tt, "y", Vt), et)
      }
      pickReplacedContentStart(tt, et, Vt, Ot) {
        if (!et.contains(tt)) return null;
        const qt = rO(et, tt),
          Dt = Vt.filter((tt => et.contains(tt) && !qt.contains(tt) && !tt.closest(ZO)));
        return 0 === Dt.length ? null : (this.contentReturn = null, this.pickRegionStart(et, St(Dt[0], "y", Ot), Dt))
      }
      backToStrip(tt, et, Vt) {
        if (tt.closest(GO)) return null;
        const Ot = kV(Vt);
        for (const qt of Vt.querySelectorAll(GO)) {
          if (Number(qt.dataset.padTabs) <= 1 || qt === Ot) continue;
          const Dt = oO(qt, et),
            mt = Dt ? rO(tt, qt).parentElement : null;
          if (Dt && mt && mt !== Vt && Vt.contains(mt)) return this.contentReturn = new WeakRef(tt), Dt
        }
        return null
      }
      pickRegionStart(tt, et, Vt) {
        const Ot = Lt(et),
          qt = tt => {
            const et = Vt.filter((et => tt.contains(et) && !et.closest(GO) && Ft(et.getBoundingClientRect(), Ot))),
              qt = kO(et.map(LO));
            return qt >= 0 ? et[qt] : null
          };
        for (const Dt of (0, nt.i)(tt)) {
          const tt = qt(Dt);
          if (tt) return tt
        }
        for (const Dt of tt.querySelectorAll(GO)) {
          const tt = oO(Dt, Vt);
          if (tt) return tt
        }
        return qt(tt)
      }
    }
    const AO = "[data-pad-default-focus], .Dropdown-option.is-selected",
      iO = ".Dropdown-root.is-open > .Dropdown-menu",
      YO = "[data-pad-no-step-in]",
      BO = "[data-pad-tabs]",
      pO = "[data-pad-press-area]",
      xO = tt => {
        let et = tt;
        for (let Vt = 0; et && Vt <= 4; Vt++, et = et.parentElement) {
          const Vt = et.querySelector(".CircleInfo");
          if (Vt) return et === tt || et.querySelectorAll(nt.d).length <= 1 ? Vt : null;
          if (et !== tt && et.querySelectorAll(nt.d).length > 1) return null
        }
        return null
      },
      TO = (tt, et, Vt) => {
        (0, Yt.j)(tt, et, Vt);
        const Ot = null !== tt && void 0 !== tt && tt.isConnected ? xO(tt) : null,
          qt = xO(et);
        Ot !== qt && (0, Yt.j)(Ot, qt, qt ? (0, Yt.t)(qt) : Vt, {
          leaveBelow: tt,
          enterBelow: et
        })
      },
      gO = tt => tt.getBoundingClientRect(),
      sO = (tt, et, Vt) => {
        const Ot = new Set(Vt);
        for (let qt = tt; qt; qt = qt === et ? null : qt.parentElement)
          if (Ot.has(qt)) return qt;
        return null
      },
      nO = (tt, et) => !tt.root || tt.root === et || et.matches(iO) && tt.root.contains(et);
    const tq = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new VO, this.tabStripNav = new UO, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, wt.c)(ft.v), this.dpadRepeats = new Map(ft.D.map((tt => [tt, (0, wt.c)(ft.F)]))), this.stickRepeat = new ft.c((0, wt.c)(ft.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const tt = Qt.c.register({
            name: "focus",
            isActive: () => (0, Et.k)() && "focus" === WO(),
            onFrame: tt => {
              this.onFrame(tt)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: tt => (0, Qt.g)(tt) || tt === (0, Xt.i)("menuConfirm") && (0, Yt.C)((0, Et.d)())
          }),
          et = (0, OO.p)((tt => {
            const et = (0, OO.u)(tt);
            null === tt.memoryKey && this.memory.forget(et), et === this.layerKey && (this.layerKey = null)
          }));
        let Vt = -1 / 0;
        const Ot = mt.e.onFrame((tt => {
            (0, Et.k)() || tt.timestampMs - Vt < 100 || (Vt = tt.timestampMs, QO())
          })),
          qt = tt => {
            tt.isTrusted && tt.target instanceof Element && mt.e.getActivePad() && this.noteChosenStop(tt.target)
          };
        return document.addEventListener("click", qt, !0), () => {
          tt(), et(), Ot(), document.removeEventListener("click", qt, !0), this.deactivate()
        }
      }
      noteChosenStop(tt) {
        var et, Vt;
        const Ot = QO();
        if (!Ot || !Ot.root.contains(tt)) return;
        const qt = null !== (et = null === (Vt = tt.closest(".Dropdown-root")) || void 0 === Vt ? void 0 : Vt.querySelector(".Dropdown-control")) && void 0 !== et ? et : tt,
          Dt = sO(qt, Ot.root, this.getEnabledCandidates(Ot.root));
        if (!Dt) return;
        const mt = (0, OO.u)(Ot.layer);
        mt === this.layerKey && Ot.root === this.layerRoot || this.beginLayer(Ot, mt), this.wasActive ? this.setFocus(Dt, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Dt, this.lastFocusedCentre = (0, Yt.t)(Dt), this.rememberFocus(Dt), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
      deactivate() {
        var tt;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const tt of this.dpadRepeats.values()) tt.reset();
          this.stickRepeat.reset(), null !== (tt = this.focused) && void 0 !== tt && tt.isConnected && TO(this.focused, null, (0, Yt.t)(this.focused)), this.notify()
        }
      }
      setFocus(tt) {
        var et;
        let {
          scroll: Vt = !0,
          byUser: Ot = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Ot && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), tt === this.focused) return;
        const qt = null !== (et = this.focused) && void 0 !== et && et.isConnected ? this.focused : null;
        if (this.focused = tt, tt) {
          Vt && (tt.classList.add(cO), tt.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Ot && ((tt, et) => {
            const Vt = et.closest("[data-pad-friends-column]");
            Vt && tt && !Vt.contains(tt) && (AV = new WeakRef(tt))
          })(qt, tt);
          const et = (0, Yt.t)(tt);
          this.lastFocusedCentre = et, this.movedInLayer && this.rememberFocus(tt), TO(qt, tt, et), "false" === tt.getAttribute("aria-pressed") && tt.closest("[data-pad-select-on-focus]") && (0, Yt.b)(tt)
        } else qt && TO(qt, null, (0, Yt.t)(qt));
        this.notify()
      }
      rememberFocus(tt) {
        const et = this.layerRoot;
        this.layerKey && et && this.memory.remember(this.layerKey, tt, et, (() => this.getEnabledCandidates(et)))
      }
      noteCursorActivation(tt) {
        const et = QO();
        if (!et || !et.root.contains(tt)) return;
        const Vt = this.getEnabledCandidates(et.root),
          Ot = new Set(Vt);
        let qt = tt;
        for (; qt && !Ot.has(qt);) qt = qt === et.root ? null : qt.parentElement;
        if (!(qt instanceof HTMLElement)) return;
        const Dt = (0, OO.u)(et.layer);
        this.memory.enter(Dt), this.memory.remember(Dt, qt, et.root, (() => Vt))
      }
      notePageEnteredByCursor(tt) {
        return this.memory.enter(tt)
      }
      recallStop(tt, et) {
        return this.findRemembered(tt, et)
      }
      focusWhenFound(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: tt,
          untilMs: performance.now() + et,
          holdWhile: Vt
        }
      }
      getEnabledCandidates(tt) {
        return (0, nt.h)(tt).filter((tt => !(0, nt.z)(tt)))
      }
      onFrame(tt) {
        var et;
        const Vt = QO();
        if (!Vt) return;
        const Ot = null !== (et = this.findOpenDropdown(Vt)) && void 0 !== et ? et : Vt,
          qt = performance.now(),
          Dt = (0, OO.u)(Ot.layer);
        if (Dt !== this.layerKey || Ot.root !== this.layerRoot) {
          const et = this.focused;
          if (null !== this.layerKey && Ot.root === this.layerRoot && et && (0, nt.v)(et, Ot.root)) this.continueLayer(Dt, et), this.wasActive || this.resume(Ot.root, qt);
          else {
            const et = !this.wasActive && !tt.wokeDevice,
              mt = "death" === this.layerKind || et,
              dt = this.enterLayer(Ot, Dt);
            "popup" !== Ot.layer.kind || Ot !== Vt || dt ? "menu" === Ot.layer.kind && mt && "inGame" === jt.b.get("gameState") && !(0, dV.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = qt + RO.c) : (this.pressGuardExtends = et, this.pressGuardUntilMs = qt + (et ? RO.c : mt ? 500 : 250))
          }
        } else this.wasActive || this.resume(Ot.root, qt);
        if (this.layerKind = Ot.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), tt.wokeDevice && this.focusPointedStop(Ot.root), this.validateFocus(Ot, qt), qt < this.pressGuardUntilMs && this.pressGuardExtends && (tt.wasPressed((0, Xt.i)("menuConfirm")) || tt.wasPressed((0, Xt.i)("menuBack"))) && (this.pressGuardUntilMs = qt + RO.c), qt >= this.pressGuardUntilMs && this.handleButtons(tt, Ot)) return;
        const mt = "hybrid" === JO();
        if (mt && (tt => {
            const et = EO();
            return et !== bO && (bO = et, MO.lock()), MO.update(tt, (0, lt.i)().moveDeadzone)
          })(tt.leftStick)) return dt = this.getHandoff(), aO = fO(dt), yO = EO(), void Qt.c.handOffHeldInput();
        var dt;
        this.handleDirections(tt, Ot, qt, !mt), this.handleScroll(tt, Ot)
      }
      findOpenDropdown(tt) {
        const et = tt.root.querySelector(iO);
        if (!et || !(0, nt.r)(et)) return null;
        let Vt = this.dropdownLayers.get(et);
        return Vt || (this.dropdownLayerCounter++, Vt = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: tt.layer.kind,
          getRoot: () => et,
          close: () => {
            (0, Yt.e)(et)
          },
          memoryKey: null
        }, this.dropdownLayers.set(et, Vt)), {
          layer: Vt,
          root: et,
          order: tt.order
        }
      }
      focusPointedStop(tt) {
        const et = (0, Et.d)(),
          Vt = et ? document.elementFromPoint(et.x, et.y) : null;
        if (!Vt || !tt.contains(Vt)) return;
        const Ot = sO(Vt, tt, this.getEnabledCandidates(tt));
        Ot && this.setFocus(Ot, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(tt, et) {
        const Vt = this.beginLayer(tt, et),
          Ot = uO();
        return Ot && nO(Ot, tt.root) ? (this.takeOver(tt.root, Ot, this.enteredLayerAtMs), Vt) : (this.restoreLayerFocus(tt.root, Vt), Vt)
      }
      beginLayer(tt, et) {
        return this.layerKey = et, this.layerRoot = tt.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(et)
      }
      restoreLayerFocus(tt, et) {
        const Vt = et && this.layerKey ? this.findRemembered(tt, this.layerKey) : null;
        this.restoredFromMemory = null !== Vt, this.setFocus(null !== Vt && void 0 !== Vt ? Vt : this.pickInitial(tt, {
          waitForContent: !0
        }))
      }
      continueLayer(tt, et) {
        this.layerKey = tt;
        const Vt = this.memory.enter(tt);
        this.restoreOnFocusLoss = Vt, this.movedInLayer && !Vt && this.rememberFocus(et)
      }
      resume(tt, et) {
        var Vt;
        const Ot = uO();
        Ot && nO(Ot, tt) ? this.takeOver(tt, Ot, et) : null !== (Vt = this.focused) && void 0 !== Vt && Vt.isConnected && TO(null, this.focused, (0, Yt.t)(this.focused))
      }
      pickPreferred(tt) {
        var et;
        return null !== (et = this.layerKey ? this.findRemembered(tt, this.layerKey) : null) && void 0 !== et ? et : this.pickInitial(tt, {
          waitForContent: !0
        })
      }
      findRemembered(tt, et) {
        return this.memory.has(et) ? this.memory.recall(et, this.getEnabledCandidates(tt)) : null
      }
      getHandoff() {
        var tt, et, Vt;
        const Ot = null !== (tt = this.focused) && void 0 !== tt && tt.isConnected ? this.focused : null,
          qt = null !== (et = this.layerRoot) && void 0 !== et && et.isConnected ? this.layerRoot : null;
        return {
          point: Ot ? (0, Yt.t)(Ot) : null !== (Vt = this.lastFocusedCentre) && void 0 !== Vt ? Vt : this.getLayerStartPoint(qt),
          element: Ot,
          direction: null
        }
      }
      getLayerStartPoint(tt) {
        if (!tt) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const et = this.pickInitial(tt, {
          includeDisabled: !0
        });
        return (0, Yt.t)(null !== et && void 0 !== et ? et : tt)
      }
      takeOver(tt, et, Vt) {
        const {
          element: Ot,
          direction: qt,
          point: Dt
        } = et, mt = Ot instanceof HTMLElement && (0, nt.v)(Ot, tt) ? Ot : null;
        if (!qt) {
          const et = this.focused;
          return mt ? this.setFocus(mt, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(tt, Dt), void(this.focused && this.focused === et && this.focused.isConnected && TO(null, this.focused, (0, Yt.t)(this.focused)))
        }
        if (this.dpadRepeats.get(qt).update(!0, Vt), mt) return this.setFocus(mt, {
          scroll: !1,
          byUser: !0
        }), void this.move(tt, qt, Vt, !0);
        const dt = this.getEnabledCandidates(tt),
          jt = dt.map(gO),
          Ht = bV(new DOMRect(Dt.x, Dt.y, 0, 0), jt, qt),
          Xt = Ht >= 0 ? Ht : hV(Dt, jt);
        this.setFocus(Xt >= 0 ? dt[Xt] : this.pickInitial(tt), {
          byUser: !0
        })
      }
      focusNearest(tt, et) {
        const Vt = this.getEnabledCandidates(tt),
          Ot = hV(et, Vt.map(gO));
        this.setFocus(Ot >= 0 ? Vt[Ot] : this.pickInitial(tt), {
          byUser: !0
        })
      }
      pickDefault(tt) {
        let {
          includeDisabled: et = !1,
          exclude: Vt = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ot = [...tt.querySelectorAll(AO)].filter((Ot => (null === Vt || void 0 === Vt || !Vt.has(Ot)) && (et ? (0, nt.C)(Ot, tt) : (0, nt.v)(Ot, tt)))),
          qt = kO(Ot.map(LO));
        return qt >= 0 ? Ot[qt] : null
      }
      pickNewAreaStart(tt, et) {
        const Vt = [...tt.querySelectorAll(pO)].filter(nt.r);
        for (const Ot of [...(0, nt.i)(tt), ...Vt]) {
          if (et.has(Ot)) continue;
          const tt = this.getEnabledCandidates(Ot),
            Vt = kO(tt.map(LO));
          if (Vt >= 0) return tt[Vt]
        }
        return null
      }
      pickInitial(tt) {
        let {
          includeDisabled: et = !1,
          waitForContent: Vt = !1,
          enteredAtMs: Ot = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const qt = this.pickDefault(tt, {
          includeDisabled: et
        });
        if (qt) return qt;
        const Dt = tt => et ? (0, nt.h)(tt) : this.getEnabledCandidates(tt);
        let mt = [];
        for (const lt of (0, nt.i)(tt))
          if (mt = Dt(lt), mt.length > 0) break;
        if (0 === mt.length) {
          if (Vt && performance.now() - Ot < 1e4 && (0, nt.o)(tt)) return null;
          mt = Dt(tt)
        }
        const dt = mt.map(gO),
          jt = Lt(null),
          Ht = mt.filter(((tt, et) => Ft(dt[et], jt))),
          Xt = Ht.length > 0 ? Ht : mt,
          Qt = kO(Xt.map(LO));
        return Qt >= 0 ? Xt[Qt] : null
      }
      validateFocus(tt, et) {
        if (this.pendingFocus) {
          var Vt, Ot;
          const qt = this.pendingFocus.find();
          if (qt && (0, nt.v)(qt, tt.root)) return this.pendingFocus = null, void this.setFocus(qt, {
            byUser: !0
          });
          et > this.pendingFocus.untilMs && (null === (Vt = (Ot = this.pendingFocus).holdWhile) || void 0 === Vt || !Vt.call(Ot)) && (this.pendingFocus = null)
        }
        const qt = this.focused,
          Dt = !!qt && (0, nt.v)(qt, tt.root);
        if (!(!Dt && qt && qt === this.lastActivated && et - this.lastActivatedAtMs < 5e3 && tt.root.contains(qt) && (0, nt.r)(qt) && (0, nt.z)(qt))) {
          if (!Dt && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = et, void this.restoreLayerFocus(tt.root, !0);
          if ((!Dt || !this.movedInLayer && !this.scrolledInLayer) && !(et - this.lastRefocusCheckMs < (Dt ? 200 : 50)))
            if (this.lastRefocusCheckMs = et, Dt) {
              const Vt = et - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(tt.root) : null,
                Ot = null !== Vt && void 0 !== Vt ? Vt : this.restoredFromMemory ? null : this.pickDefault(tt.root);
              Ot && Ot !== qt && this.setFocus(Ot)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const et = this.pendingFocus;
                return this.focusNearest(tt.root, this.lastFocusedCentre), void(this.pendingFocus = et)
              }
              this.setFocus(this.pickPreferred(tt.root))
            }
        }
      }
      handleButtons(tt, et) {
        if (tt.wasPressed((0, Xt.i)("menuToggleCursor"))) return CO(this.getHandoff()), !0;
        if (tt.wasPressed((0, Xt.i)("menuBack"))) {
          const tt = (0, Yt.e)(et.root);
          return tt ? this.setFocus(tt, {
            byUser: !0
          }) : iV(this, et.root) || ((0, Yt.c)(et.root) ? this.returnToOpener(et.root) : this.backToStrip(et.root) || lO()), !0
        }
        const Vt = (0, Xt.i)("menuConfirm");
        var Ot, qt;
        tt.wasPressed(Vt) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Ot = null === (qt = this.focused) || void 0 === qt ? void 0 : qt.getAttribute("data-pad-repeat")) && void 0 !== Ot ? Ot : null, this.confirmRepeated = tt.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (tt.wasReleased(Vt)) {
          const tt = this.confirmPressedOn;
          if (this.confirmPressedOn = null, tt && !this.confirmRepeated && tt === this.focused && tt.isConnected && !(0, nt.z)(tt)) {
            const Vt = tt.matches("[data-pad-tab]") ? tt.closest(BO) : null;
            Vt ? this.enterTab(tt, Vt, et.root, performance.now()) : this.activate(tt)
          }
          return !0
        }
        return this.repeatConfirm(tt, Vt), tO(this, tt, et)
      }
      repeatConfirm(tt, et) {
        const Vt = this.confirmPressedOn;
        Vt && null !== this.confirmRepeatKey && tt.isHeld(et) && (Vt === this.focused && Vt.isConnected && !(0, nt.z)(Vt) && Vt.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Vt.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Vt)) : this.confirmRepeatKey = null)
      }
      backToStrip(tt) {
        const et = this.focused;
        if (!(0, lt.i)().menuBackToCategories) return !1;
        const Vt = null !== et && void 0 !== et && et.isConnected ? this.tabStripNav.backToStrip(et, this.getEnabledCandidates(tt), tt) : null;
        return Vt && this.setFocus(Vt, {
          byUser: !0
        }), null !== Vt
      }
      returnToOpener(tt) {
        const et = this.lastActivatedKey;
        et && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Vt;
          return null !== (Vt = this.getEnabledCandidates(tt).find((tt => (0, Yt.x)(tt) === et))) && void 0 !== Vt ? Vt : null
        })))
      }
      activate(tt) {
        var et;
        if ((0, IO.e)(tt) || (0, Yt.y)(tt)) return;
        this.lastActivatedKey = null !== (et = (0, Yt.x)(tt)) && void 0 !== et ? et : this.lastActivatedKey, this.lastActivated = tt, this.lastActivatedAtMs = performance.now(), this.rememberFocus(tt);
        const Vt = this.layerRoot;
        if (Vt) {
          const et = new Set(Vt.querySelectorAll(AO)),
            Ot = new Set(Vt.querySelectorAll(`[data-pad-initial-area], ${pO}`)),
            qt = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var qt;
            return (0, nt.v)(tt, Vt) ? null : null !== (qt = this.pickDefault(Vt, {
              exclude: et
            })) && void 0 !== qt ? qt : this.pickNewAreaStart(Vt, Ot)
          }), 5e3, (() => tt.isConnected && (0, nt.z)(tt) && performance.now() - qt < 6e4))
        }(0, Yt.b)(tt), (0, Yt.d)(tt)
      }
      handleDirections(tt, et, Vt, Ot) {
        const qt = IV(et.layer.kind) ? (0, Xt.i)("chat") : null;
        for (const dt of ft.D) {
          this.dpadRepeats.get(dt).update(tt.isHeld(dt), Vt) && (dt !== qt || tt.wasPressed(dt)) && this.move(et.root, dt, Vt, !0)
        }
        const Dt = Ot ? (0, ft.k)(tt.leftStick, (0, lt.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          mt = this.stickRepeat.update((0, ft.hb)(Dt), Vt);
        if (mt && this.move(et.root, mt, Vt, !0), this.retryMove && Vt >= this.retryMove.atMs) {
          const {
            direction: tt
          } = this.retryMove;
          this.retryMove = null, this.move(et.root, tt, Vt, !1)
        }
      }
      move(tt, et, Vt, Ot) {
        var qt;
        let Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (qt = this.tabOpenWait) || void 0 === qt ? void 0 : qt.wait) && et === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const mt = this.focused;
        if (!mt || !mt.isConnected) {
          const et = this.pickInitial(tt);
          return void(et && this.setFocus(et, {
            byUser: !0
          }))
        }
        const dt = "Left" === et || "Right" === et,
          jt = dt ? (0, IO.e)(mt) : null;
        if (jt) return void jt.adjust("Left" === et ? -1 : 1);
        const Ht = tt => null !== tt.closest("[data-pad-friends-column]"),
          Xt = Ht(mt),
          Qt = gO(mt),
          lt = dt || mt.closest(BO) ? null : (tt => {
            const et = new Map;
            return Vt => {
              const Ot = Vt.closest(BO);
              if (!Ot) return !1;
              let qt = et.get(Ot);
              if (void 0 === qt) {
                const Vt = gO(Ot);
                qt = MV(tt, Vt) && (Vt.right <= tt.left || Vt.left >= tt.right), et.set(Ot, qt)
              }
              return qt
            }
          })(Qt),
          Et = null !== mt.closest(YO),
          ft = this.getEnabledCandidates(tt).filter((tt => tt !== mt && (dt || Ht(tt) === Xt) && !(null !== lt && void 0 !== lt && lt(tt)) && (Et || !tt.closest(YO)))),
          wt = ft.map(gO),
          yt = St(mt, "y", tt),
          Nt = Lt(yt);
        if (!Dt && !Ft(Qt, Nt)) {
          const tt = ft.filter(((tt, et) => Ft(wt[et], Nt)));
          if (tt.length > 0) {
            const et = {
              x: Nt.left + Nt.width / 2,
              y: Nt.top + Nt.height / 2
            };
            return void this.setFocus(tt[hV(et, tt.map(gO))], {
              byUser: !0
            })
          }
        }
        const Mt = dt ? ((tt, et, Vt) => {
            const Ot = gO(tt),
              qt = tt.closest(BO),
              Dt = qt ? gO(qt) : null;
            return et.map(((et, mt) => {
              const dt = Vt[mt];
              if (dt.bottom > Ot.top && dt.top < Ot.bottom) return !0;
              const jt = et.closest(BO);
              if (qt && Dt) return jt !== qt && (null !== jt || dt.bottom <= Dt.top || dt.top >= Dt.bottom);
              if (jt) return !MV(Ot, gO(jt));
              let Ht = tt;
              for (let Vt = tt.parentElement; Vt && !Vt.contains(et); Vt = Vt.parentElement) Ht = Vt;
              const Xt = gO(Ht);
              return dt.right > Xt.left && dt.left < Xt.right
            }))
          })(mt, ft, wt) : void 0,
          bt = dt && !mt.closest(BO) ? (tt => tt.map((tt => !tt.closest(ZO))))(ft) : void 0,
          Jt = ((tt, et) => {
            const Vt = [];
            for (let qt = tt; qt; qt = qt.parentElement) Vt.push(qt);
            const Ot = new Map;
            return Vt.forEach(((tt, et) => {
              Ot.set(tt, Vt.length - 1 - et)
            })), et.map((tt => {
              for (let et = tt; et; et = et.parentElement) {
                const tt = Ot.get(et);
                if (void 0 !== tt) return tt
              }
              return -1
            }))
          })(mt, ft),
          Ct = dt ? "x" : "y",
          ut = St(mt, Ct, tt);
        let Kt = bV(Qt, wt, et, Jt, Mt, bt);
        if (Kt >= 0 && ut && !ut.contains(ft[Kt])) {
          const tt = ft.flatMap(((tt, et) => ut.contains(tt) ? [et] : [])),
            Vt = et => et && tt.map((tt => et[tt])),
            Ot = bV(Qt, tt.map((tt => wt[tt])), et, tt.map((tt => Jt[tt])), Vt(Mt), Vt(bt));
          Kt = Ot >= 0 ? tt[Ot] : Kt
        }
        if (Kt >= 0) return void this.moveTo(mt, ft[Kt], ft, tt, et, Dt);
        if (!Ot) return;
        const ht = "Right" === et || "Down" === et ? 1 : -1;
        if (ut && Pt(ut, Ct, ht)) {
          const tt = "y" === Ct ? ut.clientHeight : ut.clientWidth;
          Zt(ut, Ct, ht * tt * .5), this.retryMove = {
            direction: et,
            atMs: Vt + 80
          }
        }
      }
      moveTo(tt, et, Vt, Ot, qt, Dt) {
        const mt = this.tabStripNav.findTabContent(tt, et, Vt);
        mt && "true" !== tt.dataset.padSelected ? this.openTab(tt, mt, Ot, qt) : Dt && !mt || this.setFocus(this.tabStripNav.redirect(tt, et, Vt, Ot), {
          byUser: !0
        })
      }
      openTab(tt, et, Vt, Ot) {
        const qt = et.parentElement;
        (0, Yt.b)(tt), this.focusWhenFound((() => "true" !== tt.dataset.padSelected ? null : et.isConnected ? this.tabStripNav.pickContentStart(et, this.getEnabledCandidates(Vt), Vt) : qt ? this.tabStripNav.pickReplacedContentStart(tt, qt, this.getEnabledCandidates(Vt), Vt) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Ot
        }
      }
      enterTab(tt, et, Vt, Ot) {
        this.move(Vt, (tt => {
          const et = [...tt.querySelectorAll(zO)].filter((et => et.closest(GO) === tt));
          if (et.length >= 2) {
            const tt = et[0].getBoundingClientRect(),
              Vt = et[1].getBoundingClientRect();
            return Math.abs(Vt.top - tt.top) > Math.abs(Vt.left - tt.left) ? "Right" : "Down"
          }
          const Vt = tt.getBoundingClientRect();
          return Vt.height > Vt.width ? "Right" : "Down"
        })(et), Ot, !1, !0), this.focused !== tt || this.pendingFocus || this.activate(tt)
      }
      handleScroll(tt, et) {
        const Vt = (0, ft.k)(tt.rightStick, .2);
        if (0 === Vt.x && 0 === Vt.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Ot = tt.dtMs / 1e3;
        for (const Dt of ["x", "y"]) {
          var qt;
          const tt = Vt[Dt];
          if (0 === tt) continue;
          const mt = null !== (qt = St(this.focused, Dt, et.root)) && void 0 !== qt ? qt : Rt(et.root, Dt);
          if (!mt) continue;
          const dt = Math.sign(tt) * tt * tt * 1500 * Ot + this.scrollRemainder[Dt],
            jt = Math.trunc(dt);
          this.scrollRemainder[Dt] = dt - jt, 0 !== jt && (Zt(mt, Dt, jt), this.scrolledInLayer = !0)
        }
      }
    };
    var eq = Vt(8426);
    var Vq = Vt(8952);
    const Oq = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      qq = {
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
          ...Oq,
          minIntervalMs: 1e3
        },
        preview: {
          ...Oq,
          minIntervalMs: 0
        }
      };
    const Dq = new class {
        constructor(tt) {
          this.deps = tt, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = tt => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", tt))
          }
        }
        play(tt, et) {
          const Vt = qq[tt];
          if (!this.deps.isVibrationOn() || Vt.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Ot = this.lastPlayedMs[tt];
          if (void 0 !== Ot && et - Ot < Vt.minIntervalMs) return !1;
          const qt = this.deps.getActuator();
          if (!qt) return !1;
          this.lastPlayedMs[tt] = et;
          const {
            duration: Dt,
            strongMagnitude: mt,
            weakMagnitude: dt
          } = Vt;
          try {
            qt.playEffect("dual-rumble", {
              duration: Dt,
              strongMagnitude: mt,
              weakMagnitude: dt
            }).catch(this.logFailure)
          } catch (jt) {
            this.logFailure(jt)
          }
          return !0
        }
      }({
        getActuator: () => (tt => {
          const et = null === tt || void 0 === tt ? void 0 : tt.vibrationActuator;
          return "function" === typeof(null === et || void 0 === et ? void 0 : et.playEffect) ? et : null
        })(mt.e.getActiveGamepad()),
        isVibrationOn: () => (0, lt.i)().vibration,
        isPadInUse: Et.k
      }),
      mq = tt => {
        Dq.play(tt, performance.now())
      };
    var dq = Vt(8431),
      jq = Vt(2990),
      Hq = Vt(129),
      Xq = Vt(39),
      Qq = Vt(738);
    class lq {
      constructor(tt) {
        this.deps = tt
      }
      check() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const et = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!et) return "skipped";
        const Vt = tt ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Vt || this.deps.readReportedVisitId() === Vt ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Vt), this.deps.iE(et, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Eq = "controllerUsageReportedVisit";
    var fq = Vt(1450),
      wq = Vt(1826),
      yq = Vt(725),
      Nq = Vt(1554),
      aq = Vt(1338);
    const Mq = tt => ({
        translationKey: `controller:${tt}`
      }),
      bq = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Mq("padButtonView"),
        Menu: Mq("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Mq("padButtonDpadUp"),
        Down: Mq("padButtonDpadDown"),
        Left: Mq("padButtonDpadLeft"),
        Right: Mq("padButtonDpadRight"),
        Home: Mq("padButtonHome"),
        LeftStick: Mq("padButtonLeftStick"),
        RightStick: Mq("padButtonRightStick")
      },
      Jq = {
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
          View: Mq("padButtonCreate"),
          Menu: Mq("padButtonOptions")
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
      Cq = (tt, et) => {
        var Vt;
        const Ot = null !== (Vt = Jq[tt][et]) && void 0 !== Vt ? Vt : bq[et];
        return "string" === typeof Ot ? Ot : (0, qt.A)(aq.e.get().getCurrentLanguageCode(), Ot.translationKey)
      },
      uq = tt => {
        let {
          glyph: et,
          family: Vt,
          className: Ot
        } = tt;
        const qt = (0, Et.E)(),
          Dt = null !== Vt && void 0 !== Vt ? Vt : qt,
          mt = (0, dq.c)(Dt, et);
        return (0, ot.jsx)("span", {
          className: zt()("ControllerGlyph", Ot),
          role: "img",
          "aria-label": Cq(Dt, et),
          style: {
            "--pad-glyph-mask": `url(${mt})`,
            "--pad-glyph-aspect": (0, dq.b)(Dt, et)
          }
        })
      };
    var Kq = Vt(2001);
    const hq = tt => {
      let {
        action: et
      } = tt;
      const {
        t: Vt
      } = (0, qt.H)();
      switch (et.kind) {
        case "reload":
          return (0, ot.jsx)("span", {
            children: Vt("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, ot.jsx)(Kq.e, {
            text: et.description ? [{
              icon: et.icon
            }, ` ${et.description}`] : [{
              icon: et.icon
            }]
          });
        case "touchButton":
          return (0, ot.jsx)(Kq.e, {
            text: et.label
          })
      }
    };
    var vq = Vt(8959);
    const Wq = tt => {
      let {
        hold: et
      } = tt;
      return (0, ot.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${et.holdMs}ms`
        },
        children: (0, ot.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, et.id)
    };
    var Sq = Vt(8982),
      cq = Vt(8989),
      Rq = Vt(8998),
      Iq = Vt(8980);
    const Pq = () => {
        const {
          gameState: tt
        } = (0, jt.k)(["gameState"]), et = (0, Et.A)(), [Ot, qt] = (0, kt.useState)(!1), [Dt, mt] = (0, kt.useState)(!1);
        return (0, kt.useEffect)((() => {
          "inGame" === tt && qt(!0)
        }), [tt]), (0, kt.useEffect)((() => {
          if (!Ot) return;
          let tt = null,
            et = !1;
          return (yq.K ? Promise.all([Vt.e(73), Vt.e(90), Vt.e(273), Vt.e(191), Vt.e(229), Vt.e(228), Vt.e(89)]).then((() => Vt(40719))).then((tt => tt.startWasmPadGameplay)) : Promise.all([Vt.e(73), Vt.e(237), Vt.e(236), Vt.e(98), Vt.e(76), Vt.e(75), Vt.e(74), Vt.e(187), Vt.e(233), Vt.e(78), Vt.e(90), Vt.e(188), Vt.e(227), Vt.e(97), Vt.e(239), Vt.e(230), Vt.e(246), Vt.e(121), Vt.e(215), Vt.e(87), Vt.e(247), Vt.e(77), Vt.e(160), Vt.e(248), Vt.e(229), Vt.e(200)]).then((() => Vt(40865))).then((tt => tt.startPadGameplay))).then((Vt => {
            et || (tt = Vt())
          })).catch((tt => {
            console.error("Pad gameplay failed to load", tt), et || mt(!0)
          })), () => {
            var Vt;
            et = !0, null === (Vt = tt) || void 0 === Vt || Vt()
          }
        }), [Ot]), (0, kt.useEffect)((() => {
          Dt && et && (mt(!1), fq.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((tt => {
            !0 === tt && (0, wq.reloadBloxd)()
          })))
        }), [Dt, et]), (0, ot.jsxs)(ot.Fragment, {
          children: [(0, ot.jsx)(Zq, {}), (0, ot.jsx)(Lq, {}), (0, ot.jsx)(Fq, {})]
        })
      },
      Zq = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, Et.A)(), {
          gameState: Vt,
          isUiHidden: Ot
        } = (0, jt.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: Dt
        } = (0, lt.q)(), mt = (0, vq.l)(), dt = (0, vq.p)(), [Ht, Qt] = (0, kt.useState)(Rq.c);
        return (0, Nq.f)(Iq.n, Qt), !et || Dt || Ot || "inGame" !== Vt || !mt && !Ht ? null : (0, ot.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [mt && (0, ot.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ot.jsx)(uq, {
              glyph: (0, Xt.i)("actionButton")
            }), (0, ot.jsx)(hq, {
              action: mt
            }), dt && (0, ot.jsx)("span", {
              className: "PadActionHintMore",
              children: tt("controller:gameplayActionWheelHint")
            })]
          }), Ht && (0, ot.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ot.jsx)(uq, {
              glyph: (0, Xt.i)("pickBlock")
            }), (0, ot.jsx)("span", {
              children: tt("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Lq = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, Et.A)(), {
          gameState: Vt,
          isUiHidden: Ot
        } = (0, jt.k)(["gameState", "isUiHidden"]), [Dt, mt] = (0, kt.useState)(Sq.b);
        return (0, Nq.f)(Iq.m, mt), et && !Ot && "inGame" === Vt && Dt ? (0, ot.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, ot.jsx)("span", {
            children: tt("controller:gameplayDropStack")
          }), (0, ot.jsx)(Wq, {
            hold: Dt
          })]
        }) : null
      },
      Fq = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, Et.A)(), {
          gameState: Vt,
          isUiHidden: Ot
        } = (0, jt.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: Dt
        } = (0, lt.q)(), [mt, dt] = (0, kt.useState)(cq.d);
        return (0, Nq.f)(Iq.k, dt), et && !Ot && "inGame" === Vt && mt ? (0, ot.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Dt && (0, ot.jsx)(uq, {
            glyph: (0, Xt.i)("attack")
          }), (0, ot.jsx)("span", {
            children: tt("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var kq = Vt(9005),
      Gq = Vt(2043),
      zq = Vt(2498),
      oq = Vt(8411);
    const rq = tt => tt && !(0, kq.c)(Gq.b.get("shopInfo")),
      Uq = () => {
        const tt = "inGame" === (0, jt.k)(["gameState"]).gameState;
        return (0, zq.h)("shopInfo", (() => {
          (0, oq.i)(rq(tt))
        })), (0, kt.useEffect)((() => {
          (0, oq.i)(rq(tt))
        }), [tt]), null
      },
      Aq = () => {
        const {
          t: tt
        } = (0, qt.H)(), {
          hideButtonHints: et
        } = (0, lt.q)();
        (0, Et.E)();
        const Vt = (0, ze.l)();
        return (0, kt.useEffect)((() => (() => {
          const tt = Qt.c.register({
              name: "inventory",
              isActive: DV.isActive,
              onFrame: DV.onFrame,
              onDeactivate: DV.onDeactivate,
              wakePressActs: DV.wakePressActs
            }),
            et = tt => {
              DV.noteRealPointer(tt), DV.shouldBlockRealPointer(tt) && tt.stopPropagation()
            };
          for (const mt of mV) window.addEventListener(mt, et, !0);
          const Vt = (0, st.o)((() => {
              "inventory" !== Qt.c.getActiveConsumerName() && DV.forgetSurface()
            })),
            Ot = tt => {
              const et = tt.target;
              (0, Et.k)() && (0, xt.g)(et) && et.closest(Ce) && (0, st.m)() && (0, st.r)(et)
            };
          document.addEventListener("focusout", Ot, !0);
          const {
            invalidate: qt,
            onScroll: Dt
          } = DV.targets;
          return document.addEventListener("scroll", Dt, !0), window.addEventListener("resize", qt), () => {
            tt(), Vt();
            for (const tt of mV) window.removeEventListener(tt, et, !0);
            document.removeEventListener("scroll", Dt, !0), document.removeEventListener("focusout", Ot, !0), window.removeEventListener("resize", qt), DV.targets.disconnect()
          }
        })()), []), (0, ot.jsxs)(ot.Fragment, {
          children: [(0, ot.jsx)(it, {
            placer: DV.ring,
            className: "InventorySlotCursorRing"
          }), Vt.showing && !et && (0, ot.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: gt(Vt).map((et => {
              let {
                actions: Ot,
                labelKey: qt
              } = et;
              return (0, ot.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Ot.map((tt => (0, ot.jsx)(uq, {
                  glyph: (0, Xt.i)(tt)
                }, tt))), (0, ot.jsx)("span", {
                  children: tt(`controller:${qt}`)
                }), "inventoryDrop" === qt && Vt.dropStackHold && (0, ot.jsx)(Wq, {
                  hold: Vt.dropStackHold
                })]
              }, qt)
            }))
          })]
        })
      },
      iq = [{
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
      Yq = tt => Array.from(tt).map((tt => ({
        type: "char",
        char: tt,
        width: 1
      }))),
      Bq = function(tt) {
        return {
          type: "command",
          command: tt,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      pq = [Bq("page", 2), Bq("otherPage"), Bq("caretLeft"), Bq("space", 3), Bq("caretRight"), Bq("close", 1.5), Bq("submit", 1.5)],
      xq = [Bq("page", 2), Bq("otherPage"), Bq("caretLeft"), Bq("space", 2), Bq("caretRight"), Bq("newline"), Bq("close", 1.5), Bq("submit", 1.5)],
      Tq = [
        [...Yq("1234567890"), Bq("backspace")], Yq("qwertyuiop/"), Yq("asdfghjkl'?"), [Bq("shift", 2), ...Yq("zxcvbnm,.")]
      ],
      gq = [
        [...Yq("1234567890"), Bq("backspace")], Yq("!@#$%^&*()/"), Yq('-_=+[]{};:"'), Yq("~`|\\<>'\u20ac\xa3,.")
      ],
      sq = {
        letters: Tq,
        accents: [
          [...Yq("1234567890"), Bq("backspace")], Yq("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Yq("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Bq("shift", 2), ...Yq("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: gq
      },
      nq = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      tD = (tt, et) => "letters" === tt ? et ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === tt ? "symbols" : "accents"
      },
      eD = function(tt, et) {
        const Vt = ((tt, et) => [...sq[tt], et ? xq : pq])(tt, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === et) return Vt;
        const Ot = Math.min(2, VD(Vt[0]) / et);
        return [Array.from({
          length: et
        }, ((tt, et) => ({
          type: "phrase",
          phraseIndex: et,
          width: Ot
        }))), ...Vt]
      },
      VD = tt => tt.reduce(((tt, et) => tt + et.width), 0),
      OD = tt => Math.max(...tt.map(VD)),
      qD = (tt, et) => {
        const Vt = tt[et.row];
        let Ot = (OD(tt) - VD(Vt)) / 2;
        for (let qt = 0; qt < et.col; qt++) Ot += Vt[qt].width;
        return Ot + Vt[et.col].width / 2
      },
      DD = (tt, et, Vt) => {
        let Ot = 0,
          qt = 1 / 0;
        for (let Dt = 0; Dt < tt[et].length; Dt++) {
          const mt = Math.abs(qD(tt, {
            row: et,
            col: Dt
          }) - Vt);
          mt < qt - 1e-9 && (Ot = Dt, qt = mt)
        }
        return Ot
      },
      mD = (tt, et) => {
        const Vt = Math.max(0, Math.min(tt.length - 1, et.row));
        return {
          row: Vt,
          col: Math.max(0, Math.min(tt[Vt].length - 1, et.col))
        }
      },
      dD = (tt, et, Vt) => "once" === tt && et - Vt <= 400 ? "caps" : "off" === tt ? "once" : "off",
      jD = (tt, et) => "once" === tt && (tt => tt.toLowerCase() !== tt.toUpperCase())(et) ? "off" : tt,
      HD = (tt, et, Vt) => {
        if ("symbols" === et || "off" === Vt) return tt;
        const Ot = tt.toUpperCase();
        return 1 === Ot.length ? Ot : tt
      };
    var XD = Vt(8859);
    const QD = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const lD = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(tt) {
          return !(tt - this.lastSendMs < 2e3) && (this.lastSendMs = tt, !0)
        }
      },
      ED = {
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
      fD = ["td", "nameTag"],
      wD = tt => {
        const et = tt.target instanceof HTMLTextAreaElement && !fD.includes(tt.kind);
        return eD(tt.page, "chat" === tt.kind ? QD.length : 0, et)
      },
      yD = tt => {
        const et = tt.getBoundingClientRect(),
          Vt = window.innerHeight,
          Ot = et.top + et.height / 2 < Vt / 2 ? "bottom" : "top",
          qt = "bottom" === Ot ? Vt - et.bottom - 6 : et.top - 6;
        return {
          placement: Ot,
          maxHeightPx: Math.min(.46 * Vt, Math.max(.3 * Vt, qt))
        }
      },
      ND = tt => {
        (0, SV.f)(tt) ? (0, SV.d)().close(): (tq.noteChosenStop(tt), tt.blur())
      };
    class aD {
      constructor(tt) {
        this.host = tt, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(tt, et) {
        this.phraseTexts = tt, this.phrasesFill = et
      }
      pressKey(tt) {
        const et = this.host.getState(),
          Vt = wD(et),
          Ot = Vt[tt.row][tt.col];
        this.host.setState({
          ...et,
          focus: tt,
          preferredX: qD(Vt, tt)
        }), "char" === Ot.type ? this.typeChar(Ot.char) : "command" === Ot.type ? this.runCommand(Ot.command) : this.sendPhrase(Ot.phraseIndex)
      }
      runCommand(tt) {
        const et = this.host.getState();
        switch (tt) {
          case "backspace":
            (0, xt.b)(et.target);
            break;
          case "space":
            (0, xt.c)(et.target, " ");
            break;
          case "newline":
            (0, xt.c)(et.target, "\n");
            break;
          case "caretLeft":
            (0, xt.j)(et.target, -1);
            break;
          case "caretRight":
            (0, xt.j)(et.target, 1);
            break;
          case "shift": {
            const tt = performance.now();
            this.host.setState({
              ...et,
              shift: dD(et.shift, tt, this.lastShiftPressMs)
            }), this.lastShiftPressMs = tt;
            break
          }
          case "page":
          case "otherPage": {
            const Vt = tD(et.page, et.accentsFirst)[tt];
            this.host.setState({
              ...et,
              page: Vt,
              focus: mD(wD({
                ...et,
                page: Vt
              }), et.focus)
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
            (0, SV.f)(et.target) && (0, SV.d)().selectNextChannel()
        }
      }
      submit() {
        var tt, et;
        const {
          target: Vt
        } = this.host.getState();
        this.host.hide(), (0, SV.f)(Vt) ? (0, SV.d)().submit() : (tq.noteChosenStop(Vt), null === (tt = (et = (0, SV.e)(Vt)).submit) || void 0 === tt || tt.call(et), document.activeElement === Vt && Vt.blur())
      }
      close() {
        const {
          target: tt
        } = this.host.getState();
        this.host.hide(), ND(tt)
      }
      typeChar(tt) {
        const {
          target: et,
          page: Vt,
          shift: Ot
        } = this.host.getState();
        (0, xt.c)(et, HD(tt, Vt, Ot)), this.host.setState({
          ...this.host.getState(),
          shift: jD(Ot, tt)
        })
      }
      sendPhrase(tt) {
        if (this.phrasesFill) {
          const {
            target: et
          } = this.host.getState(), Vt = this.phraseTexts[tt];
          Vt && (et.setSelectionRange(0, et.value.length), (0, xt.c)(et, Vt))
        } else lD.claim(performance.now()) && (this.host.hide(), (0, SV.d)().sendLine(this.phraseTexts[tt]))
      }
    }
    var MD = Vt(8880);
    const bD = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      JD = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class CD {
      constructor(tt, et) {
        this.host = tt, this.editor = et, this.lastDirection = null, this.navRepeat = new ft.c((0, wt.c)(bD)), this.commandRepeats = new Map(iq.filter((tt => {
          let {
            repeats: et
          } = tt;
          return et
        })).map((tt => {
          let {
            command: et
          } = tt;
          return [et, (0, wt.c)(JD)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const tt of this.commandRepeats.values()) tt.reset()
      }
      onVisibleFrame(tt) {
        const et = performance.now();
        for (const {
            command: qt,
            action: Dt
          }
          of iq) {
          const Vt = (0, Xt.i)(Dt),
            Ot = this.commandRepeats.get(qt);
          if ((Ot ? Ot.update(tt.isHeld(Vt), et) : tt.wasPressed(Vt)) && (this.editor.runCommand(qt), !this.host.getState().visible)) return
        }
        if (tt.wasPressed((0, Xt.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Vt = this.readNavDirection(tt);
        this.lastDirection = Vt;
        const Ot = this.navRepeat.update(Vt, et);
        Ot && this.navigate(Ot)
      }
      onHiddenFrame(tt, et) {
        var Vt;
        if (tt.wasPressed((0, Xt.i)("keyboardClose"))) return void ND(et);
        const Ot = (0, Xt.i)("keyboardType");
        if (tt.wasPressed(Ot)) return Qt.c.consumeButton(Ot), void this.host.open(et);
        const qt = this.readNavDirection(tt),
          Dt = null !== qt && qt !== this.lastDirection;
        if (this.lastDirection = qt, !Dt || (0, SV.f)(et)) return;
        const mt = (null === (Vt = QO()) || void 0 === Vt ? void 0 : Vt.root.contains(et)) || null !== et.closest(".EntireInventoryWrapper");
        ND(et), mt && Qt.c.handOffHeldInput()
      }
      navigate(tt) {
        const et = this.host.getState();
        if ("Up" === tt && 0 === et.focus.row && "chat" === et.kind) return (0, SV.d)().stepHistory(), void this.host.setState({
          ...et
        });
        const Vt = ((tt, et, Vt, Ot) => {
          if ("Left" === Vt || "Right" === Vt) {
            const Ot = tt[et.row].length,
              qt = (et.col + ("Right" === Vt ? 1 : -1) + Ot) % Ot,
              Dt = {
                row: et.row,
                col: qt
              };
            return {
              pos: Dt,
              preferredX: qD(tt, Dt)
            }
          }
          const qt = (et.row + ("Down" === Vt ? 1 : -1) + tt.length) % tt.length;
          return {
            pos: {
              row: qt,
              col: DD(tt, qt, Ot)
            },
            preferredX: Ot
          }
        })(wD(et), et.focus, tt, et.preferredX);
        this.host.setState({
          ...et,
          focus: Vt.pos,
          preferredX: Vt.preferredX
        })
      }
      readNavDirection(tt) {
        for (const et of ft.D)
          if (tt.isHeld(et)) return et;
        return (0, ft.hb)((0, ft.k)(tt.leftStick, (0, lt.i)().moveDeadzone))
      }
    }
    const uD = ["Up", "Down", "Left", "Right"],
      KD = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const hD = new class {
      constructor() {
        this.state = ED, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new aD(this), this.padInput = new CD(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(tt) {
        const et = tt.visible !== this.state.visible;
        this.state = tt;
        for (const Vt of this.listeners) Vt();
        et && Ht.j.sw(MD.e, tt.visible)
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      install() {
        const tt = Qt.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, xt.g)(document.activeElement),
            onFrame: tt => {
              this.onFrame(tt)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: tt => uD.includes(tt) || !this.state.visible && tt === (0, Xt.i)("keyboardType")
          }),
          et = tt => {
            const et = tt.target;
            (0, xt.g)(et) && (et === this.pendingChatInput || (0, Et.k)() ? this.open(et) : this.state.visible && et !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Vt = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Ot = tt => {
            tt.isTrusted && this.state.visible && (tt => !tt.repeat && !KD.has(tt.key) && !(0, XD.b)(tt.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(tt.key))(tt) && this.hide()
          },
          qt = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...yD(this.state.target)
            })
          };
        document.addEventListener("focusin", et, !0), document.addEventListener("focusout", Vt, !0), window.addEventListener("keydown", Ot, !0), window.addEventListener("resize", qt);
        const Dt = Ht.j.subscribe(Iq.b, (() => {
            this.openChat()
          })),
          mt = Ht.j.subscribe(MD.i, (tt => {
            this.openForField(tt)
          }));
        return () => {
          tt(), document.removeEventListener("focusin", et, !0), document.removeEventListener("focusout", Vt, !0), window.removeEventListener("keydown", Ot, !0), window.removeEventListener("resize", qt), Ht.j.unsubscribe(Dt), Ht.j.unsubscribe(mt), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const tt = (0, SV.d)();
        tt ? document.activeElement !== tt.input ? (this.clearPendingChat(), this.pendingChatInput = tt.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), tt.open()) : this.open(tt.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(tt) {
        (0, xt.g)(tt) ? (document.activeElement !== tt && tt.focus(), document.activeElement === tt && this.open(tt)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", tt)
      }
      open(tt) {
        var et;
        if (this.clearPendingChat(), this.ownedField = tt, this.state.visible && this.state.target === tt) return;
        this.restoreInputMode(), (0, xt.l)(tt), this.savedInputMode = tt.getAttribute("inputmode"), tt.setAttribute("inputmode", "none");
        const Vt = {
          ...ED,
          visible: !0,
          target: tt,
          kind: (0, SV.f)(tt) ? "chat" : null !== (et = (0, SV.e)(tt).kind) && void 0 !== et ? et : null,
          accentsFirst: (Ot = aq.e.get().getCurrentLanguageCode(), nq.has(Ot)),
          ...yD(tt)
        };
        var Ot;
        const qt = wD(Vt),
          Dt = ((tt, et) => {
            for (let Vt = 0; Vt < tt.length; Vt++) {
              const Ot = tt[Vt].findIndex((tt => "char" === tt.type && tt.char === et));
              if (-1 !== Ot) return {
                row: Vt,
                col: Ot
              }
            }
            return null
          })(qt, "q");
        this.padInput.reset(), this.setState({
          ...Vt,
          focus: Dt,
          preferredX: qD(qt, Dt)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(ED))
      }
      onFrame(tt) {
        if (this.releaseLostField()) return;
        const et = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(tt) : (0, xt.g)(et) && this.padInput.onHiddenFrame(tt, et)
      }
      releaseLostField() {
        const tt = this.ownedField;
        return !(null === tt || tt.isConnected && document.activeElement === tt) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: tt
        } = this.state;
        tt && (null === this.savedInputMode ? tt.removeAttribute("inputmode") : tt.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var vD = Vt(3695);
    const WD = new Map(iq.map((tt => {
        let {
          command: et,
          action: Vt
        } = tt;
        return [et, Vt]
      }))),
      SD = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      cD = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        td: "controller:keyboardTargetBookTitle"
      },
      RD = tt => {
        const et = (() => {
          const [, tt] = (0, kt.useReducer)((tt => tt + 1), 0);
          return tt
        })();
        (0, kt.useEffect)((() => {
          if (!tt) return;
          const Vt = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const qt of Vt) tt.addEventListener(qt, et);
          document.addEventListener("selectionchange", et);
          const Ot = new MutationObserver(et);
          return Ot.observe(tt, {
            attributeFilter: ["placeholder"]
          }), () => {
            Ot.disconnect();
            for (const Ot of Vt) tt.removeEventListener(Ot, et);
            document.removeEventListener("selectionchange", et)
          }
        }), [tt, et])
      },
      ID = tt => {
        tt.preventDefault()
      },
      PD = tt => {
        "mouse" !== tt.pointerType && tt.preventDefault()
      },
      ZD = () => {
        var tt;
        const {
          t: et
        } = (0, qt.H)(), Vt = (() => {
          const [tt, et] = (0, kt.useState)(hD.getState());
          return (0, kt.useEffect)((() => hD.subscribe((() => {
            et(hD.getState())
          }))), []), tt
        })(), Ot = (0, Et.A)(), Dt = (0, kt.useRef)(null);
        (0, lt.q)(), (0, Et.E)(), (0, kt.useEffect)((() => {
          const tt = hD.install(),
            et = null;
          return () => {
            tt(), null === et || void 0 === et || et()
          }
        }), []);
        const mt = (0, kt.useMemo)((() => QD.map((tt => et(tt)))), [et]),
          dt = Vt.visible && "chat" === Vt.kind ? Vt.target : null;
        RD(dt);
        const jt = null !== (tt = null === dt || void 0 === dt ? void 0 : dt.value) && void 0 !== tt ? tt : "",
          Ht = ((tt, et, Vt) => {
            if (!tt.startsWith("/")) return [];
            const Ot = [];
            for (let qt = et.length - 1; qt >= 0 && Ot.length < Vt; qt--) {
              const Vt = et[qt].trim();
              Vt.startsWith(tt) && Vt !== tt && !Ot.includes(Vt) && Ot.push(Vt)
            }
            return Ot
          })(jt, jt.startsWith("/") ? (0, vD.e)() : [], QD.length),
          Qt = jt.startsWith("/"),
          ft = Qt ? QD.map(((tt, et) => {
            var Vt;
            return null !== (Vt = Ht[et]) && void 0 !== Vt ? Vt : ""
          })) : mt;
        if ((0, kt.useEffect)((() => {
            hD.editor.setPhraseRow(ft, Qt)
          })), (0, kt.useEffect)((() => {
            const tt = Dt.current;
            if (tt) return tt.addEventListener("touchstart", ID, {
              passive: !1
            }), () => {
              tt.removeEventListener("touchstart", ID)
            }
          }), [Vt.visible]), !Vt.visible) return null;
        const wt = wD(Vt),
          yt = OD(wt),
          Nt = tt => "char" === tt.type ? HD(tt.char, Vt.page, Vt.shift) : "phrase" === tt.type ? ft[tt.phraseIndex] : (tt => {
            switch (tt) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Vt.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return SD[tD(Vt.page, Vt.accentsFirst)[tt]];
              case "space":
                return et("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return et("chat" === Vt.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(tt.command),
          Mt = tt => {
            hD.editor.pressKey(tt)
          };
        return (0, ot.jsxs)("div", {
          ref: Dt,
          className: zt()(SV.l, "top" === Vt.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Vt.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": wt.length,
            "--pad-keyboard-height": `${Vt.maxHeightPx}px`
          },
          onPointerDown: PD,
          onMouseDown: ID,
          children: [(0, ot.jsx)(LD, {
            target: Vt.target,
            label: Vt.kind ? et(cD[Vt.kind]) : Vt.target.placeholder || et("controller:keyboardTargetText")
          }), (0, ot.jsx)("div", {
            className: "PadKeyboardRows",
            children: wt.map(((tt, et) => (0, ot.jsx)("div", {
              className: zt()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === tt[0].type
              }),
              children: tt.map(((tt, qt) => {
                const Dt = Ot && Vt.focus.row === et && Vt.focus.col === qt,
                  mt = "command" === tt.type ? WD.get(tt.command) : void 0;
                return (0, ot.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: tt.width / yt * 100 + "%"
                  },
                  children: (0, ot.jsxs)("div", {
                    className: zt()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Dt,
                      PadKeyboardKeyCommand: "command" === tt.type,
                      PadKeyboardKeyPhrase: "phrase" === tt.type,
                      PadKeyboardKeyActive: "command" === tt.type && "shift" === tt.command && "off" !== Vt.shift,
                      PadKeyboardKeySubmit: "command" === tt.type && "submit" === tt.command
                    }),
                    role: "button",
                    onClick: () => {
                      Mt({
                        row: et,
                        col: qt
                      })
                    },
                    onTouchEnd: tt => {
                      var Vt, Ot;
                      tt.preventDefault(), Vt = tt.changedTouches[0], Ot = tt.currentTarget.getBoundingClientRect(), Vt && Vt.clientX >= Ot.left && Vt.clientX <= Ot.right && Vt.clientY >= Ot.top && Vt.clientY <= Ot.bottom && Mt({
                        row: et,
                        col: qt
                      })
                    },
                    children: [(0, ot.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Nt(tt)
                    }), Ot && mt && (0, ot.jsx)(uq, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Xt.i)(mt)
                    })]
                  })
                }, qt)
              }))
            }, et)))
          })]
        })
      },
      LD = tt => {
        let {
          target: et,
          label: Vt
        } = tt;
        RD(et);
        const Ot = (0, kt.useRef)(null),
          qt = (0, kt.useRef)(null),
          Dt = et instanceof HTMLTextAreaElement;
        (0, kt.useLayoutEffect)((() => {
          const tt = Ot.current,
            et = qt.current;
          Dt ? tt.scrollTop = et.offsetTop - tt.clientHeight / 2 : tt.scrollLeft = et.offsetLeft - tt.clientWidth / 2
        }));
        const {
          value: mt,
          start: dt,
          end: jt
        } = (0, xt.n)(et), Ht = "password" === et.type ? "\u2022".repeat(mt.length) : mt;
        return (0, ot.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, ot.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Vt
          }), (0, ot.jsxs)("div", {
            ref: Ot,
            className: zt()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Dt
            }),
            children: [(0, ot.jsx)("span", {
              children: Ht.slice(0, dt)
            }), (0, ot.jsx)("span", {
              ref: qt,
              className: "PadKeyboardCaret"
            }), dt !== jt && (0, ot.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Ht.slice(dt, jt)
            }), (0, ot.jsx)("span", {
              children: Ht.slice(jt)
            }), 0 === Ht.length && et.placeholder && et.placeholder !== Vt && (0, ot.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: et.placeholder
            })]
          })]
        })
      };
    var FD = Vt(1492),
      kD = Vt(3490);
    const GD = function() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return et.map(Xt.i)
      },
      zD = (tt, et) => {
        const Vt = YV(tt);
        return Vt ? [{
          glyphs: [Vt],
          labelKey: et
        }] : []
      },
      oD = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      rD = "--pad-hint-bar-clearance",
      UD = "[data-pad-hint-bar-avoid]",
      AD = tt => {
        const et = [];
        for (const Vt of tt)(0, nt.r)(Vt) && et.push(Vt.getBoundingClientRect());
        return et
      },
      iD = tt => {
        if (!tt) return null;
        const et = QO(),
          Vt = et ? AD(((tt, et) => {
            const Vt = tt.closest(UD);
            return Vt ? [Vt] : ("popup" === et ? document : tt).querySelectorAll(UD)
          })(et.root, et.layer.kind)) : [],
          Ot = !et || et.root.hasAttribute("data-pad-shows-hud");
        if (((0, kD.i)(null === et || void 0 === et ? void 0 : et.layer.kind, (0, kD.l)()) || Ot) && Vt.push(...AD(document.querySelectorAll(oD.join(",")))), 0 === Vt.length) return null;
        const {
          width: qt,
          height: Dt
        } = tt.getBoundingClientRect(), mt = window.innerHeight - 8, dt = (0, kD.q)(mt, {
          width: qt,
          height: Dt
        }, window.innerWidth / 2, Vt, 8);
        return dt === mt ? null : Math.round(window.innerHeight - dt)
      },
      YD = tt => {
        const et = document.documentElement.style,
          Vt = tt ? `${Math.round(window.innerHeight-tt.getBoundingClientRect().top)}px` : "";
        et.getPropertyValue(rD) !== Vt && (Vt ? et.setProperty(rD, Vt) : et.removeProperty(rD))
      },
      BD = () => {
        const {
          t: tt
        } = (0, qt.H)(), {
          hideButtonHints: et
        } = (0, lt.q)(), Vt = (0, Et.A)(), [Ot, Dt] = (0, kt.useState)(!1), [mt, Ht] = (0, kt.useState)([]), [wt, yt] = (0, kt.useState)(null), Nt = (0, kt.useRef)(null), Mt = (0, kt.useRef)(null);
        (0, Nq.f)(MD.e, (tt => {
          Dt(tt)
        })), (0, Nq.f)(kD.o, (() => {
          var tt;
          null === (tt = Mt.current) || void 0 === tt || tt.call(Mt)
        }));
        const bt = Vt && !et && !Ot;
        return (0, kt.useEffect)((() => {
          if (!bt) return;
          let tt = null;
          const et = () => {
            const et = (() => {
                var tt;
                const et = Qt.c.getActiveConsumerName(),
                  Vt = (0, kD.f)();
                if (Vt) {
                  const tt = (0, Xt.i)(Vt),
                    et = "emoteWheel" === Vt && "wheel" === (0, lt.i)().emoteButton || !(0, ft.J)(Qt.c.getLastFrame().values, tt) ? {
                      glyphs: GD("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [tt],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Xt.A)(tt)],
                    labelKey: "controller:wheelChoose"
                  }, et, {
                    glyphs: GD("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Ot = QO();
                if (!Ot || "focus" !== et && "cursor" !== et) return (0, kD.e)(Xt.i);
                const qt = [],
                  Dt = {
                    glyphs: GD("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  mt = (0, Yt.q)(Ot.root),
                  dt = mt ? !(0, nt.z)(mt) : Boolean(Ot.layer.close),
                  Ht = !mt && Ot.layer.closeLabelKey ? Ot.layer.closeLabelKey : Dt.labelKey,
                  Et = dt ? [{
                    ...Dt,
                    labelKey: Ht
                  }] : [],
                  wt = IV(Ot.layer.kind) ? [{
                    glyphs: GD("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === et) return qt.push({
                  glyphs: GD("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), qt.push({
                  glyphs: GD("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), qt.push(...Et), qt.push(...wt), qt.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), vO() && qt.push({
                  glyphs: GD("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), qt;
                const yt = tq.getFocused();
                yt && (0, IO.e)(yt) ? qt.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : yt && (0, Yt.y)(yt) ? qt.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : qt.push({
                  glyphs: GD("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Nt = yt ? null === (tt = EV(yt)) || void 0 === tt ? void 0 : tt.dataset.padSecondary : void 0;
                Nt && qt.push({
                  glyphs: GD("menuSecondary"),
                  labelKey: Nt
                }), qt.push(...null !== yt && void 0 !== yt && yt.closest("[data-pad-friends-column]") ? [Dt] : Et), qt.push(...wt);
                const Mt = "home" === Ot.layer.kind;
                xV(Ot.root) || !kV(Ot.root) && !TV(Ot) ? Mt && qt.push({
                  glyphs: GD("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : qt.push({
                  glyphs: GD("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Mt && (qt.push(...zD("inventory", "controller:menusFriends")), Nt || qt.push({
                  glyphs: GD("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), qt.push(...zD("pause", "controller:menusSettings")), qt.push(...zD("leaderboard", "controller:menusNotifications")));
                const bt = jt.b.get("openEverythingMenuName");
                return "inGame" === jt.b.get("gameState") && "popup" !== Ot.layer.kind && null !== bt && ((0, HV.l)(bt) ? qt.push(...zD("leaderboard", "controller:menusClose")) : bt !== jV.o.LOBBY_LEADERBOARD && qt.push(...zD("leaderboard", "controller:menusLobby"))), qt.push({
                  glyphs: GD("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), qt
              })(),
              Vt = iD(Nt.current),
              Ot = ((tt, et) => `${tt.map((tt=>`${tt.glyphs.join("+")}:${tt.labelKey}`)).join("|")}@${et}`)(et, Vt);
            Ot !== tt && (tt = Ot, (0, dt.unstable_batchedUpdates)((() => {
              Ht(et), yt(Vt)
            }))), YD(Nt.current)
          };
          et(), Mt.current = et;
          const Vt = requestAnimationFrame(et),
            Ot = setInterval(et, 150);
          return () => {
            Mt.current = null, cancelAnimationFrame(Vt), clearInterval(Ot), YD(null)
          }
        }), [bt]), (0, kt.useLayoutEffect)((() => {
          if (!bt) return;
          if (0 === mt.length) return void YD(null);
          const tt = iD(Nt.current);
          tt === wt ? YD(Nt.current) : yt(tt)
        }), [bt, mt, wt]), bt && 0 !== mt.length ? (0, ot.jsx)("div", {
          ref: Nt,
          className: "PadButtonHintBar SmallTextBold",
          style: null === wt ? void 0 : {
            bottom: wt
          },
          "aria-hidden": !0,
          children: mt.map((et => (0, ot.jsxs)("div", {
            className: "PadButtonHint",
            children: [et.glyphs.map((tt => (0, ot.jsx)(uq, {
              glyph: tt,
              className: "PadButtonHintGlyph"
            }, tt))), (0, ot.jsx)("span", {
              children: tt(et.labelKey)
            })]
          }, et.labelKey)))
        }) : null
      };
    var pD = Vt(1832);
    const xD = [nt.d, "label", "[data-pad-slider]"].join(","),
      TD = "data-pad-cursor-probe",
      gD = tt => {
        var et;
        const Vt = (tt => {
          const et = [];
          for (let Ot = tt; Ot && Ot !== document.body && Ot !== document.documentElement && (et.push(Ot), !(et.length > 8)); Ot = Ot.parentElement);
          const Vt = document.documentElement.classList.contains(Et.u) ? et[et.length - 1] : void 0;
          null === Vt || void 0 === Vt || Vt.setAttribute(TD, "");
          try {
            return et.map((tt => ({
              element: tt,
              cursor: getComputedStyle(tt).cursor
            })))
          } finally {
            null === Vt || void 0 === Vt || Vt.removeAttribute(TD)
          }
        })(tt);
        if ("pointer" !== (null === (et = Vt[0]) || void 0 === et ? void 0 : et.cursor)) return null;
        let Ot = 0;
        for (; Ot + 1 < Vt.length && "pointer" === Vt[Ot + 1].cursor;) Ot++;
        return Vt[Ot].element
      },
      sD = (tt, et, Vt, Ot) => {
        const qt = Ot.root.contains(tt) ? Ot.root : null;
        for (let Dt = tt; Dt && Dt !== document.body && Dt !== document.documentElement; Dt = Dt.parentElement) {
          if (Dt instanceof HTMLElement && Wt(Dt, et) && Pt(Dt, et, Vt)) return Dt;
          if (Dt === qt) break
        }
        return "home" === Ot.layer.kind || "gamePage" === Ot.layer.kind ? ((tt, et) => {
          const Vt = document.scrollingElement;
          return Vt instanceof HTMLElement && ![document.documentElement, document.body].some((et => {
            const Vt = getComputedStyle(et),
              Ot = "y" === tt ? Vt.overflowY : Vt.overflowX;
            return "hidden" === Ot || "clip" === Ot
          })) && Pt(Vt, tt, et) ? Vt : null
        })(et, Vt) : null
      };
    const nD = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, wt.c)(ft.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const tt = Qt.c.register({
              name: "cursor",
              isActive: () => "cursor" === WO(),
              onFrame: tt => {
                this.onFrame(tt)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: tt => (0, Qt.g)(tt) || tt === (0, Xt.i)("menuConfirm") && (0, Yt.C)((0, Et.d)())
            }),
            et = (0, OO.p)((tt => {
              const et = tt.getRoot();
              et && this.layerPoints.delete(et), et === this.layerRoot && (this.layerRoot = null)
            })),
            Vt = Ht.j.subscribe("appManagerUpdated|activeInputDevice", (tt => {
              "gamepad" !== tt && this.active && !this.hidden && this.hide()
            }));
          return () => {
            tt(), et(), Ht.j.unsubscribe(Vt), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Et.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.sw()
        }
        activate(tt) {
          this.active = !0, this.hidden = !1;
          const et = uO();
          !et || et.root && et.root !== tt.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(tt), this.jumpTo(et.point))
        }
        jumpTo(tt) {
          this.state = {
            x: tt.x,
            y: tt.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.sw())
        }
        onFrame(tt) {
          const et = QO();
          if (!et) return;
          if (this.active || this.activate(et), this.followPage(et)) return;
          this.followLayer(et);
          const Vt = tt.wokeDevice ? (0, Et.d)() : null;
          if (Vt && this.jumpTo(Vt), !(0, Et.k)()) return void this.hide();
          const Ot = (0, Xt.i)("menuToggleCursor");
          if (tt.wasPressed(Ot)) return Qt.c.consumeButton(Ot), void CO(this.getHandoff(null));
          if (this.handBackToFocus(tt)) return;
          const qt = (0, Xt.i)("menuConfirm"),
            Dt = (0, Xt.i)("menuSecondary");
          if (tt.wasPressed((0, Xt.i)("menuBack"))) return (0, Yt.e)(et.root) || (0, Yt.c)(et.root) || lO(), void this.sw();
          if (nV(null, tt, et)) return tt.wasReleased(qt) && this.press && (this.updateHit(!1), this.updateConfirm(tt, qt)), void this.sw();
          if (document.pointerLockElement) return void this.hide();
          const mt = SO() ? {
              x: 0,
              y: 0
            } : (tt => {
              const et = (tt, et) => (tt ? 1 : 0) - (et ? 1 : 0);
              return {
                x: et(tt.isHeld("Right"), tt.isHeld("Left")),
                y: et(tt.isHeld("Down"), tt.isHeld("Up"))
              }
            })(tt),
            dt = (0, lt.i)().moveDeadzone,
            jt = ((tt, et) => {
              const Vt = (0, ft.k)(tt, Jt(et));
              return Math.hypot(Vt.x, Vt.y)
            })(tt.leftStick, dt) > 0 || 0 !== mt.x || 0 !== mt.y;
          if (this.hidden) {
            const et = tt.wasPressed(qt),
              Vt = tt.wasPressed(Dt);
            if (!jt && !Kt(tt.rightStick) && !et && !Vt && !tt.wokeDevice) return void this.sw();
            if (this.hidden = !1, this.updateHit(!1), et || Vt) return et && (this.press = {
              kind: "ignored"
            }, tt.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.sw()
          }
          this.movePendingPageStart(jt);
          const Ht = this.getPoint();
          this.state = ut(this.state, {
            stick: tt.leftStick,
            moveDeadzone: dt,
            dpad: mt,
            dtMs: tt.dtMs,
            cursorSpeedPercent: (0, lt.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const wt = this.state.x !== Ht.x || this.state.y !== Ht.y,
            yt = [qt, Dt].some((et => tt.wasPressed(et) || tt.wasReleased(et)));
          (wt || yt || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(wt), this.updateConfirm(tt, qt), this.updateSecondary(tt, Dt), this.updateScroll(tt, et), this.sw()
        }
        followPage(tt) {
          const et = "home" === tt.layer.kind || "gamePage" === tt.layer.kind,
            Vt = this.page;
          if (this.page = et ? {
              key: (0, OO.u)(tt.layer),
              root: tt.root
            } : null, !this.page || !Vt || Vt.root !== tt.root || Vt.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(tt), "hybrid" === JO()) return aO = null, yO = null, MO.lock(), !0;
          const {
            key: Ot
          } = this.page;
          return this.pendingPageStart = {
            root: tt.root,
            key: Ot,
            returning: tq.notePageEnteredByCursor(Ot),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(tt) {
          const et = this.pendingPageStart;
          if (!et) return;
          if (tt || et.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Vt = et.returning ? tq.recallStop(et.root, et.key) : null;
          if (!Vt && et.returning && performance.now() - et.enteredAtMs < 1e3) return;
          const Ot = null !== Vt && void 0 !== Vt ? Vt : tq.pickInitial(et.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: et.enteredAtMs
          });
          Ot && (this.pendingPageStart = null, this.jumpTo((0, Yt.t)(Ot)))
        }
        setLayer(tt) {
          this.layerRoot = tt.root, this.layerOrder = tt.order
        }
        followLayer(tt) {
          var et;
          if (tt.root === this.layerRoot) return;
          null !== (et = this.layerRoot) && void 0 !== et && et.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Vt = this.layerPoints.get(tt.root),
            Ot = Vt && tt.order <= this.layerOrder ? Vt : tq.getLayerStartPoint(tt.root);
          this.setLayer(tt), this.jumpTo(Ot)
        }
        getHandoff(tt) {
          var et;
          return {
            point: this.getPoint(),
            element: null !== (et = this.interactive) && void 0 !== et ? et : this.findDraggedSliderNearby(),
            direction: tt
          }
        }
        findDraggedSliderNearby() {
          const tt = this.draggedSlider;
          if (null === tt || void 0 === tt || !tt.isConnected) return null;
          const et = tt.getBoundingClientRect(),
            {
              y: Vt
            } = this.getPoint();
          return Vt >= et.top - 40 && Vt <= et.bottom + 40 ? tt : null
        }
        handBackToFocus(tt) {
          if (!SO()) return !1;
          const et = ft.D.find((et => tt.wasPressed(et)));
          return !!et && (Vt = this.getHandoff(et), aO = fO(Vt), yO = null, MO.lock(), Qt.c.handOffHeldInput(), !0);
          var Vt
        }
        getAssistContext() {
          const tt = this.interactive;
          if (null === tt || void 0 === tt || !tt.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const et = tt.getBoundingClientRect();
          if (et.width > .4 * window.innerWidth || et.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Vt = (0, lt.i)().cursorMagnetism && !(0, pD.c)(tt) && !tt.closest("[data-pad-slider]"),
            Ot = this.magnet && this.magnet !== tt && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : et;
          return {
            overInteractive: !0,
            magnetTarget: Vt ? {
              x: Ot.left + Ot.width / 2,
              y: Ot.top + Ot.height / 2
            } : null
          }
        }
        updateHit(tt) {
          this.lastHitTestMs = performance.now();
          const et = this.getPoint(),
            Vt = document.elementFromPoint(et.x, et.y),
            Ot = Vt && !(0, Nt.l)(Vt) && (tt => {
              var et;
              const Vt = QO();
              return !(Vt && !Vt.root.contains(tt) && !tt.closest(".tooltip-container")) || !(null !== (et = document.getElementById("root")) && void 0 !== et && et.contains(tt))
            })(Vt) ? Vt : null;
          if (Ot !== this.hit) return (0, Yt.j)(this.hit, Ot, et), this.hit = Ot, void this.setInteractive(Ot ? (tt => {
            const et = tt.closest(xD);
            if (et) {
              var Vt, Ot;
              const tt = null !== (Vt = null === (Ot = et.parentElement) || void 0 === Ot ? void 0 : Ot.closest("[data-pad-focusable]")) && void 0 !== Vt ? Vt : et;
              return (0, nt.z)(tt) ? {
                element: null,
                magnet: null
              } : {
                element: tt,
                magnet: et
              }
            }
            const qt = gD(tt);
            return {
              element: qt,
              magnet: qt
            }
          })(Ot) : {
            element: null,
            magnet: null
          });
          tt && Ot && (0, Yt.j)(Ot, Ot, et)
        }
        setInteractive(tt) {
          let {
            element: et,
            magnet: Vt
          } = tt;
          this.interactive = et, this.magnet = Vt
        }
        clearHover() {
          this.hit && (0, Yt.j)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const tt = this.hit;
          if (!tt || (0, Yt.y)(tt)) return {
            kind: "ignored"
          };
          const et = (0, IO.e)(tt),
            Vt = tt.closest("[data-pad-slider]");
          return et && Vt ? {
            kind: "slider",
            slider: Vt,
            adjuster: et
          } : ((0, Yt.k)(tt, this.getPoint()), {
            kind: "pointer",
            target: tt
          })
        }
        applySliderFraction(tt) {
          var et;
          const Vt = tt.slider.getBoundingClientRect(),
            Ot = Vt.height > Vt.width,
            qt = null === (et = tt.slider.querySelector("[data-pad-slider-handle]")) || void 0 === et ? void 0 : et.getBoundingClientRect(),
            Dt = qt ? Ot ? qt.height : qt.width : 0,
            mt = (Ot ? Vt.height : Vt.width) - Dt;
          if (mt <= 0) return;
          const dt = Ot ? Vt.bottom - Dt / 2 - this.state.y : this.state.x - Vt.left - Dt / 2;
          tt.adjuster.setFraction(Math.max(0, Math.min(1, dt / mt)))
        }
        updateConfirm(tt, et) {
          tt.wasPressed(et) && (this.press = tt.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Vt = this.press;
          if (!Vt) return;
          if (tt.isHeld(et)) return "slider" === Vt.kind && this.applySliderFraction(Vt), void this.updateRepeat();
          this.press = null;
          const Ot = this.repeated;
          if (this.endRepeat(), !tt.wasReleased(et)) return void this.endPressWithoutClick(Vt);
          const qt = this.getPoint(),
            Dt = this.hit;
          if ("slider" === Vt.kind && Vt.adjuster.endDrag(), "pointer" === Vt.kind) {
            const tt = null !== Dt && void 0 !== Dt ? Dt : Vt.target.isConnected ? Vt.target : null;
            tt && (0, Yt.m)(tt, qt);
            const et = Dt && Vt.target.isConnected && !Ot ? ((tt, et) => {
              for (let Vt = tt; Vt; Vt = Vt.parentElement)
                if (Vt.contains(et)) return Vt;
              return null
            })(Vt.target, Dt) : null;
            et && (tq.noteCursorActivation(et), (0, Nt.c)(et, new MouseEvent("click", (0, Yt.K)(qt, 0, 0))), (0, Yt.d)(et), (0, Yt.H)(et) && (0, Yt.F)(et))
          }
        }
        beginRepeat() {
          var tt, et, Vt;
          const Ot = null !== (tt = null === (et = this.hit) || void 0 === et ? void 0 : et.closest("[data-pad-repeat]")) && void 0 !== tt ? tt : null;
          this.repeatStop = Ot, this.repeatKey = null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.getAttribute("data-pad-repeat")) && void 0 !== Vt ? Vt : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const tt = this.repeatStop;
          if (!tt) return;
          const et = this.hit;
          tt.isConnected && !(0, nt.z)(tt) && tt.getAttribute("data-pad-repeat") === this.repeatKey && et && tt.contains(et) ? tt.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, tq.noteCursorActivation(tt), (0, Nt.c)(tt, new MouseEvent("click", (0, Yt.K)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(tt) {
          "slider" === tt.kind && tt.adjuster.endDrag(), "pointer" === tt.kind && tt.target.isConnected && (0, Yt.m)(tt.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(tt, et) {
          tt.wasPressed(et) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !tt.isHeld(et) && (this.secondaryArmed = !1, tt.wasReleased(et) && this.hit && (0, Yt.h)(this.hit, this.getPoint(), 2))
        }
        updateScroll(tt, et) {
          const Vt = ht(tt.rightStick, tt.dtMs);
          if (0 === Vt.x && 0 === Vt.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Vt.x,
            y: this.scrollRemainder.y + Vt.y
          };
          const Ot = Math.trunc(this.scrollRemainder.x),
            qt = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Ot,
            y: this.scrollRemainder.y - qt
          };
          const Dt = this.hit;
          if (!Dt) return;
          let mt = !1;
          if (0 !== qt) {
            const tt = sD(Dt, "y", qt > 0 ? 1 : -1, et);
            tt && (tt.scrollBy({
              top: qt,
              behavior: "instant"
            }), mt = !0)
          }
          if (0 !== Ot) {
            const tt = sD(Dt, "x", Ot > 0 ? 1 : -1, et);
            tt && (tt.scrollBy({
              left: Ot,
              behavior: "instant"
            }), mt = !0)
          }
          mt && (this.lastHitTestMs = -1 / 0)
        }
        sw() {
          pt.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      tm = () => {
        const tt = (0, kt.useMemo)((() => new At), []),
          et = (0, Et.A)();
        return (0, kt.useEffect)((() => {
          if (!et) return;
          let Vt = 0,
            Ot = {
              of: null,
              atMs: 0,
              list: []
            };
          const qt = document.getElementsByClassName(cO),
            Dt = tt => {
              for (const et of [...qt]) et !== tt && et.classList.remove(cO)
            },
            mt = () => {
              var et;
              Vt = requestAnimationFrame(mt);
              const qt = (() => {
                const tt = tq.getFocused();
                if (tq.isActive() && null !== tt && void 0 !== tt && tt.isConnected) return tt;
                const et = nD.getHighlighted();
                return null !== et && void 0 !== et && et.isConnected ? et : null
              })();
              Dt(qt), qt && !qt.classList.contains(cO) && qt.classList.add(cO);
              const dt = null !== (et = null === qt || void 0 === qt ? void 0 : qt.closest("[data-pad-reticle-box]")) && void 0 !== et ? et : qt;
              tt.show(dt ? ((tt, et) => {
                let Vt = tt.left,
                  Ot = tt.top,
                  qt = tt.right,
                  Dt = tt.bottom;
                for (const mt of et) {
                  if (!mt) continue;
                  const tt = Lt(mt);
                  Vt = Math.max(Vt, tt.left), Ot = Math.max(Ot, tt.top), qt = Math.min(qt, tt.right), Dt = Math.min(Dt, tt.bottom)
                }
                return qt <= Vt || Dt <= Ot ? null : {
                  left: Vt,
                  top: Ot,
                  width: qt - Vt,
                  height: Dt - Ot
                }
              })(dt.getBoundingClientRect(), (tt => {
                const et = performance.now();
                return (Ot.of !== tt || et - Ot.atMs > 500) && (Ot = {
                  of: tt,
                  atMs: et,
                  list: [St(tt, "y"), St(tt, "x")]
                }), Ot.list
              })(dt)) : null)
            };
          return Vt = requestAnimationFrame(mt), () => {
            cancelAnimationFrame(Vt), Dt(null), tt.hide()
          }
        }), [et, tt]), (0, ot.jsx)(it, {
          placer: tt,
          className: "PadFocusRing"
        })
      },
      em = (tt, et) => {
        tt.style.transform = `translate3d(${et.x}px, ${et.y}px, 0)`, tt.classList.toggle("Visible", et.visible), tt.classList.toggle("Pressed", et.pressed)
      },
      Vm = () => {
        const tt = (0, kt.useRef)(null);
        return (0, kt.useEffect)((() => {
          const et = pt.subscribe((et => {
            tt.current && em(tt.current, et)
          }));
          return tt.current && em(tt.current, pt.get()), et
        }), []), (0, ot.jsx)("div", {
          ref: tt,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, ot.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Om = "#ncmp__modal.ncmp__active",
      qm = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Om) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Om),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Dm = "PadOverThirdParty",
      mm = new Set(qm.map((tt => tt.id))),
      dm = () => {
        const tt = qm.map((tt => {
            let {
              id: et,
              find: Vt,
              startSelectors: Ot
            } = tt;
            return (0, OO.s)({
              id: et,
              kind: "popup",
              getRoot: () => {
                const tt = Vt(),
                  et = tt ? ((tt, et) => {
                    var Vt;
                    for (const Ot of et) {
                      const et = tt.querySelector(Ot);
                      if (et) return et
                    }
                    return null !== (Vt = [...tt.querySelectorAll("button")].find((tt => !tt.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Vt ? Vt : null
                  })(tt, Ot) : null;
                if (tt && et && !et.hasAttribute("data-pad-default-focus")) {
                  for (const et of tt.querySelectorAll("[data-pad-default-focus]")) et.removeAttribute("data-pad-default-focus");
                  for (const et of tt.querySelectorAll("[data-pad-hint-bar-avoid]")) et.removeAttribute("data-pad-hint-bar-avoid");
                  et.setAttribute("data-pad-default-focus", ""), ((tt, et) => {
                    let Vt = tt;
                    for (let Ot = tt.parentElement; Ot && et.contains(Ot) && !(Ot.getBoundingClientRect().height >= window.innerHeight / 2); Ot = Ot.parentElement) Vt = Ot;
                    return Vt
                  })(et, tt).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return tt
              },
              close: null,
              memoryKey: null
            })
          })),
          et = document.documentElement,
          Vt = mt.e.onFrame((() => {
            const tt = (0, Et.k)() ? QO() : null,
              Vt = !!tt && (Ot = tt.layer, mm.has(Ot.id));
            var Ot;
            et.classList.contains(Dm) !== Vt && et.classList.toggle(Dm, Vt)
          }));
        return () => {
          for (const et of tt) et();
          Vt(), et.classList.remove(Dm)
        }
      },
      jm = "PadLargePointer",
      Hm = () => {
        (0, kt.useEffect)((() => {
          const tt = (0, Nt.f)(document.body),
            et = tq.install(),
            Vt = nD.install(),
            Ot = dm();
          return () => {
            tt(), et(), Vt(), Ot()
          }
        }), []);
        const {
          largePointer: tt
        } = (0, lt.q)(), et = (0, FD.v)() && tt;
        return (0, kt.useEffect)((() => {
          if (et) return document.documentElement.classList.add(jm), () => {
            document.documentElement.classList.remove(jm)
          }
        }), [et]), (0, dt.createPortal)((0, ot.jsxs)(ot.Fragment, {
          children: [(0, ot.jsx)(BD, {}), (0, ot.jsx)(tm, {}), (0, ot.jsx)(Vm, {})]
        }), document.body)
      };
    var Xm = Vt(9023),
      Qm = Vt(9039),
      lm = Vt(9035);
    Vt(9042);
    const Em = (tt, et) => {
        const [Vt, Ot] = (0, kt.useState)(!1), [qt, Dt] = (0, kt.useState)(null), mt = (0, kt.useRef)(null), dt = (0, kt.useCallback)((tt => {
          mt.current = tt, Dt(tt)
        }), []), jt = (0, kt.useCallback)((() => {
          Ot(!1), dt(null)
        }), [dt]), Xt = (0, kt.useCallback)((() => {
          Ot(!0)
        }), []), Qt = (0, kt.useCallback)(((tt, et) => {
          dt((0, lm.D)(tt, et, mt.current))
        }), [dt]);
        (0, kt.useLayoutEffect)((() => (et(Vt), (0, kD.w)(tt, Vt), Ht.j.sw(kD.o), () => {
          et(!1), (0, kD.w)(tt, !1), Ht.j.sw(kD.o)
        })), [Vt, tt, et]), (0, Nq.f)("appManagerUpdated|activeInputDevice", (tt => {
          "gamepad" !== tt && jt()
        })), (0, Nq.f)("appManagerUpdated|gameState", (tt => {
          "inGame" !== tt && jt()
        }));
        const lt = () => {
          (0, HV.q)() && jt()
        };
        return (0, Nq.f)("appManagerUpdated|openEverythingMenuName", lt), (0, Nq.f)("appManagerUpdated|openInGameMenuName", lt), {
          open: Vt,
          picked: qt,
          pickedRef: mt,
          show: Xt,
          aim: Qt,
          close: jt
        }
      },
      fm = tt => {
        let {
          className: et,
          slotCount: Vt,
          picked: Ot,
          slotLabel: qt,
          renderSlot: Dt,
          centre: mt
        } = tt;
        const dt = Array.from({
          length: Vt
        }, ((tt, et) => et));
        return (0, ot.jsx)("div", {
          className: zt()("EmoteWheelOverlay PadRadialWheel", et),
          children: (0, ot.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * lm.q + "rem",
              height: 2 * lm.q + "rem"
            },
            children: [(0, ot.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${lm.j} ${lm.j}`,
              children: [dt.map((tt => (0, ot.jsx)("path", {
                d: (0, lm.t)(tt, Vt, lm.e, lm.f, lm.i),
                className: zt()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: tt === Ot
                }),
                "aria-label": qt(tt)
              }, tt))), (0, ot.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: lm.e,
                cy: lm.e,
                r: lm.i
              }), (0, ot.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: lm.e,
                cy: lm.e,
                r: lm.f
              }), null !== Ot && (0, ot.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, lm.t)(Ot, Vt, lm.e, lm.f, lm.i)
              })]
            }), dt.map((tt => {
              const et = (0, lm.x)(tt, Vt);
              return (0, ot.jsx)("div", {
                className: zt()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: tt === Ot
                }),
                style: {
                  left: `calc(50% + ${lm.c*Math.cos(et)}rem)`,
                  top: `calc(50% + ${lm.c*Math.sin(et)}rem)`
                },
                "aria-hidden": !0,
                children: Dt(tt)
              }, tt)
            })), (0, ot.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: mt
            })]
          })
        })
      },
      wm = QD.length,
      ym = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = Em("chat", RV.n), Vt = (0, kt.useMemo)((() => QD.map((et => tt(et)))), [tt]);
        return (0, Nq.f)(RV.j, (() => {
          et.open || (0, Xm.e)() || (0, Qm.o)() || "inGame" !== jt.b.get("gameState") || (0, HV.q)() || !(0, SV.d)() || et.show()
        })), (0, Nq.f)(RV.d, (tt => {
          et.open && et.aim(tt, wm)
        })), (0, Nq.f)(RV.g, (() => {
          var tt;
          if (!et.open) return;
          const Ot = et.pickedRef.current;
          null !== Ot ? lD.claim(performance.now()) && (et.close(), null === (tt = (0, SV.d)()) || void 0 === tt || tt.sendLine(Vt[Ot])) : et.close()
        })), (0, Nq.f)(RV.e, et.close), et.open ? (0, ot.jsx)(fm, {
          className: "QuickChatWheel",
          slotCount: wm,
          picked: et.picked,
          slotLabel: tt => Vt[tt],
          renderSlot: tt => Vt[tt],
          centre: null !== et.picked ? Vt[et.picked] : tt("controller:quickChatPick")
        }) : null
      },
      Nm = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = Em("actionButton", Qm.r), [Vt, Ot] = (0, kt.useState)([]);
        if ((0, Nq.f)(Qm.i, (tt => {
            et.open || (0, Xm.e)() || (0, RV.b)() || "inGame" !== jt.b.get("gameState") || (0, HV.q)() || (Ot(tt), et.show())
          })), (0, Nq.f)(Qm.d, (tt => {
            et.open && et.aim(tt, Vt.length)
          })), (0, Nq.f)(Qm.h, (() => {
            if (!et.open) return;
            const tt = et.pickedRef.current;
            et.close(), null !== tt && Ht.j.sw(Qm.l, Vt[tt])
          })), (0, Nq.f)(Qm.g, et.close), !et.open) return null;
        const Dt = null !== et.picked ? Vt[et.picked] : null;
        return (0, ot.jsx)(fm, {
          className: "ActionWheel",
          slotCount: Vt.length,
          picked: et.picked,
          slotLabel: et => {
            const Ot = Vt[et];
            return "reload" === Ot.kind ? tt("controller:gameplayReload") : "customButton" === Ot.kind ? Ot.description || Ot.icon : "touchButton" === Ot.kind && "string" === typeof Ot.label ? Ot.label : ""
          },
          renderSlot: tt => (0, ot.jsx)(hq, {
            action: Vt[tt]
          }),
          centre: Dt ? (0, ot.jsx)(hq, {
            action: Dt
          }) : tt("controller:actionWheelPick")
        })
      };
    var am = Vt(106);
    const Mm = () => ((0, kt.useEffect)((() => {
        var tt, et;
        const Vt = (0, Nt.f)(document.getElementById("root")),
          Ot = (0, Et.e)(),
          qt = (() => {
            const tt = [Ht.j.subscribe(Vq.d, (() => {
                mq("blockBreak")
              })), Ht.j.subscribe("damagedByOtherPlayer", (() => {
                mq("damage")
              })), Ht.j.subscribe("yourAttackHit", (tt => {
                let {
                  hitSelf: et
                } = tt;
                et || mq("hit")
              }))],
              et = mt.e.onActivePadChanged((tt => {
                tt && mq("connect")
              }));
            return () => {
              for (const et of tt) Ht.j.unsubscribe(et);
              et()
            }
          })(),
          Dt = (() => {
            const tt = new lq({
              getVisitId: Qq.e,
              peekVisitId: Qq.peekVisitSessionId,
              readReportedVisitId: () => {
                const tt = Xq.h.getItem(Eq);
                return "string" === typeof tt ? tt : null
              },
              writeReportedVisitId: tt => {
                Xq.h.setItem(Eq, tt)
              },
              isPadActive: Et.k,
              getPadFamily: () => {
                var tt, et;
                return null !== (tt = null === (et = mt.e.getActivePad()) || void 0 === et ? void 0 : et.family) && void 0 !== tt ? tt : null
              },
              canReport: jq.isBloxdGa4Ready,
              getInputType: Hq.d,
              iE: jq.logControllerUsedToGtag
            });
            let et = 0,
              Vt = null;
            const Ot = qt => {
                null === Vt && ("notReady" !== tt.check(qt) || null !== Vt || et >= 20 || (et++, Vt = setTimeout((() => {
                  Vt = null, Ot(!1)
                }), 3e3)))
              },
              qt = Ht.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Ot(!0)
              })),
              Dt = (0, Qq.m)((() => {
                et = 0, Ot(!0)
              }));
            return () => {
              Ht.j.unsubscribe(qt), Dt(), null !== Vt && clearTimeout(Vt)
            }
          })(),
          dt = mt.e.onFrame(((tt, et, Vt) => {
            const Ot = (0, Et.q)(tt, Vt);
            Qt.c.dispatch(tt, et, Ot)
          }));
        let Xt = null !== (tt = null === (et = mt.e.getActivePad()) || void 0 === et ? void 0 : et.family) && void 0 !== tt ? tt : null;
        const ft = mt.e.onActivePadChanged((tt => {
            var et, Vt;
            (Qt.c.reset(), (0, Et.v)(), Ht.j.sw(mt.d, tt), (null !== (et = null === tt || void 0 === tt ? void 0 : tt.family) && void 0 !== et ? et : null) !== Xt) && (Xt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.family) && void 0 !== Vt ? Vt : null, Ht.j.sw(lt.d, (0, lt.i)()));
            !tt && (0, Et.k)() && (0, Et.w)(jt.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          wt = () => {
            "visible" !== document.visibilityState && Qt.c.clear()
          },
          yt = () => {
            Qt.c.clear()
          };
        document.addEventListener("visibilitychange", wt), window.addEventListener("blur", yt), mt.e.start(), (0, dq.i)();
        const Mt = null;
        return () => {
          Vt(), Ot(), qt(), Dt(), dt(), ft(), document.removeEventListener("visibilitychange", wt), window.removeEventListener("blur", yt), mt.e.stop(), null === Mt || void 0 === Mt || Mt()
        }
      }), []), (0, ot.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, ot.jsx)(Pq, {}), (0, ot.jsx)(Uq, {}), (0, ot.jsx)(Aq, {}), (0, ot.jsx)(ZD, {}), (0, ot.jsx)(Hm, {}), (0, ot.jsx)(ym, {}), (0, ot.jsx)(Nm, {})]
      })),
      bm = () => am.featureFlags.useControllerSupport ? (0, ot.jsx)(Mm, {}) : null;
    var Jm = Vt(8400),
      Cm = Vt(9050);
    const um = new Set(dq.e),
      Km = tt => `${Cm.l}${(0,lt.l)()}/${tt}`,
      hm = tt => {
        if (!(0, Cm.j)(tt)) return null;
        const [et, Vt] = tt.slice(Cm.l.length).split("/");
        return (0, Jm.f)(et) && um.has(Vt) ? (0, dq.c)(et, Vt) : null
      };
    var Wm = Vt(9052);
    const Sm = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, Et.A)(), {
          gameState: Vt,
          isUiHidden: Ot
        } = (0, jt.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: Dt,
          sneakMode: mt
        } = (0, lt.q)(), [dt, Ht] = (0, kt.useState)(Wm.c);
        return (0, Nq.f)(Iq.p, Ht), et && !Ot && "inGame" === Vt && dt ? (0, ot.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Dt && (0, ot.jsx)(uq, {
            glyph: (0, Xt.i)("toggle" === mt ? "sneak" : "sneakToggle")
          }), (0, ot.jsx)("span", {
            children: tt("controller:gameplaySneaking")
          })]
        }) : null
      },
      cm = 12,
      Rm = tt => {
        let {
          trigger: et,
          className: Vt,
          children: Ot
        } = tt;
        const qt = (0, kt.useRef)(null);
        return (0, kt.useEffect)((() => {
          let tt = 0;
          const Vt = St(et, "y"),
            Ot = () => {
              tt = requestAnimationFrame(Ot);
              const Dt = qt.current;
              if (!Dt || null === et || void 0 === et || !et.isConnected) return;
              const {
                left: mt,
                top: dt
              } = function(tt, et, Vt) {
                let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Dt = tt.left + tt.width / 2,
                  mt = Math.max(cm, Vt.width - cm - et.width),
                  dt = Math.min(Math.max(Dt - et.width / 2, cm), mt),
                  jt = Vt.height - Ot;
                let Ht = 0,
                  Xt = jt;
                if (qt) {
                  const tt = Math.max(0, qt.top),
                    Ot = Math.min(jt, qt.bottom);
                  Ot - tt >= Math.max(Vt.height / 2, et.height + 24) && (Ht = tt, Xt = Ot)
                }
                const Qt = tt.top + tt.height / 2 < (Ht + Xt) / 2 ? Xt - cm - et.height : Ht + cm;
                return {
                  left: dt,
                  top: Math.max(cm, Qt)
                }
              }(et.getBoundingClientRect(), {
                width: Dt.offsetWidth,
                height: Dt.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(rD)) || 0, null !== Vt && void 0 !== Vt && Vt.isConnected ? Vt.getBoundingClientRect() : null);
              Dt.style.transform = `translate3d(${Math.round(mt)}px, ${Math.round(dt)}px, 0)`, Dt.style.visibility = "visible"
            };
          return Ot(), () => {
            cancelAnimationFrame(tt)
          }
        }), [et]), (0, ot.jsx)("div", {
          ref: qt,
          className: Vt,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Ot
        })
      };
    var Im = Vt(1152),
      Pm = Vt(9056),
      Zm = Vt(1556),
      Lm = Vt(9063),
      Fm = Vt(9065);
    const km = {
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
      Gm = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, Et.A)(), Vt = (0, Pm.e)(), Ot = (0, zq.i)("_tasks"), Dt = (0, zq.i)("_availableLeaderboards");
        if (!et) return null;
        const mt = (tt => {
          let {
            hasShop: et,
            hasTasksOrLeaderboards: Vt,
            canInvite: Ot
          } = tt;
          const qt = [];
          return et && qt.push("shop"), Vt && qt.push("tasks"), Ot && qt.push("invite"), qt.push("leave"), qt
        })({
          hasShop: Vt,
          hasTasksOrLeaderboards: !(!Ot && !Dt),
          canInvite: !!am.featureFlags.canUseInviteLinks
        });
        return (0, ot.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: mt.map((et => {
            const {
              icon: Vt,
              labelKey: Ot
            } = km[et], qt = "leave" === et ? Zm.G : Zm.f;
            return (0, ot.jsx)(qt, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (tt => {
                  switch (tt) {
                    case "shop":
                      return Ht.j.sw(Fm.j), void jt.b.set({
                        openEverythingMenuName: jV.o.SHOP
                      });
                    case "tasks":
                      return void Ht.j.sw("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Ht.j.sw("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Lm.b)()
                  }
                })(et)
              },
              children: (0, ot.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, ot.jsx)(Im.b, {
                  name: Vt
                }), (0, ot.jsx)("span", {
                  children: tt(Ot)
                })]
              })
            }, et)
          }))
        })
      };
    var zm = Vt(2074);
    const om = ft.B,
      rm = ["forward", "backward", "left", "right", "sprint"],
      Um = tt => tt.ctrlKey || tt.altKey || "Alt" === tt.key || "ArrowUp" === tt.key || "ArrowDown" === tt.key || "Tab" === tt.code || "/" === tt.key || "Slash" === tt.code;
    class Am {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(ft.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(tt) {
        this.armed = tt
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || et ? !tt.repeat && this.swallowedKeys.delete(tt.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(tt.code),
          continues: !1
        } : "Escape" === tt.key || tt.repeat && !this.swallowedKeys.has(tt.code) ? {
          swallow: !1,
          continues: !1
        } : Vt ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(tt.code), {
          swallow: !0,
          continues: (0, Et.g)(tt)
        })
      }
      onKeyUp(tt) {
        return this.swallowedKeys.delete(tt.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qt = (0, ft.t)(tt.values, this.previousHeld),
          Dt = null === Vt ? -1 : (0, ft.m)(Vt),
          mt = Dt >= 0 && qt[Dt] && !this.previousHeld[Dt],
          dt = qt.some(((tt, et) => tt && !this.previousHeld[et] && et !== Dt)),
          jt = Math.hypot(tt.leftStick.x, tt.leftStick.y) >= om,
          Ht = Math.hypot(tt.rightStick.x, tt.rightStick.y) >= om,
          Xt = jt && !this.leftStickWasPressed || Ht && !this.rightStickWasPressed;
        this.previousHeld = qt, this.leftStickWasPressed = jt, this.rightStickWasPressed = Ht;
        let Qt = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Qt = !0);
        const lt = !et && mt && !Ot,
          Et = !lt && this.armed && !et && (dt || Xt);
        return (lt || Et) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Et, Qt = !0), {
          continues: Et,
          back: lt,
          consumeHeld: Qt
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const im = new Set([...zm.h, ...zm.C]),
      Ym = tt => ((tt, et, Vt) => {
        const Ot = Object.keys(et).filter((Ot => !Vt.has(Ot) && et[Ot].includes(tt)));
        return Ot.length > 0 && Ot.every((tt => rm.includes(tt)))
      })(tt, zm.r, im),
      Bm = (tt, et, Vt) => {
        const Ot = new Am,
          qt = tt => {
            if (!tt.isTrusted) return;
            const {
              swallow: Vt,
              continues: qt
            } = Ot.onKeyDown(tt, !(0, Et.G)(tt) || (0, eq.g)() || (0, HV.q)(), Ym(tt.code));
            Vt && (tt.stopImmediatePropagation(), Um(tt) && tt.preventDefault()), qt && ((0, Et.w)("keyboardMouse"), et())
          },
          Dt = tt => {
            tt.isTrusted && Ot.onKeyUp(tt) && (tt.stopImmediatePropagation(), Um(tt) && tt.preventDefault())
          },
          dt = () => {
            Ot.forgetKeys()
          };
        window.addEventListener("keydown", qt, !0), window.addEventListener("keyup", Dt, !0), window.addEventListener("blur", dt);
        const jt = mt.e.onFrame((tt => {
            const qt = Qt.c.getActiveConsumerName(),
              Dt = Vt(),
              mt = Dt ? (0, Xt.i)("menuBack") : null,
              dt = null !== qt && "gameplay" !== qt,
              {
                continues: jt,
                back: Ht,
                consumeHeld: ft
              } = Ot.onPadFrame(tt, dt, mt, (0, Et.m)(tt));
            if (ft) {
              const tt = (0, lt.i)().swapSticks ? "right" : "left";
              Qt.c.consumeAllHeld(Ot.consumeLeavesMoveStick() ? tt : null)
            }
            Ht ? null === Dt || void 0 === Dt || Dt() : jt && et()
          })),
          Ht = (0, eq.i)(`pressToContinue:${tt}`, (() => Ot.blocksGameplay()));
        return {
          setArmed: tt => {
            Ot.setArmed(tt)
          },
          dispose: () => {
            window.removeEventListener("keydown", qt, !0), window.removeEventListener("keyup", Dt, !0), window.removeEventListener("blur", dt), jt(), Ht()
          }
        }
      };
    var pm = Vt(5155),
      xm = Vt(3493),
      Tm = Vt(3192),
      gm = Vt(8405);
    const sm = tt => {
        let {
          text: et
        } = tt;
        return (0, ot.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: et
        })
      },
      nm = tt => {
        let {
          label: et,
          hint: Vt,
          options: Ot,
          value: Dt,
          onChange: mt
        } = tt;
        const {
          t: dt
        } = (0, qt.H)();
        return (0, ot.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ot.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, ot.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, ot.jsx)("div", {
                className: "SliderText",
                children: et
              }), Vt && (0, ot.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Vt
              })]
            }), (0, ot.jsx)(Tm.e, {
              options: Ot.map((tt => ({
                label: "label" in tt ? tt.label : dt(tt.labelKey),
                value: tt.value
              }))),
              value: Dt,
              onChange: tt => {
                mt(tt.value)
              }
            })]
          })
        })
      },
      td = tt => {
        let {
          settingKey: et,
          label: Vt,
          range: Ot,
          format: qt
        } = tt;
        const Dt = (0, lt.q)();
        return (0, ot.jsx)(pm.f, {
          name: Vt,
          min: Ot.min,
          max: Ot.max,
          step: Ot.step,
          padStep: Ot.step,
          initValue: Dt[et],
          format: qt,
          onChange: tt => {
            (0, lt.p)({
              [et]: (0, gm.C)(tt, Ot)
            })
          }
        })
      };
    var ed = Vt(9068),
      Vd = Vt(9075);
    const Od = tt => tt instanceof DOMException && ("SecurityError" === tt.name || "NotAllowedError" === tt.name),
      qd = tt => {
        const [et] = [...tt.controllers].sort(((tt, et) => Vd.i[tt] - Vd.i[et]));
        return Vd.h[et]
      },
      Dd = tt => {
        (0, ed.c)().allowPhoneMotion().catch((et => {
          tt && Od(et) ? tt() : console.warn("Could not enable the motion sensor", et)
        }))
      },
      md = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      dd = tt => {
        let {
          status: et
        } = tt;
        const {
          t: Vt
        } = (0, qt.H)(), [Ot, Dt] = (0, kt.useState)(null), mt = `${et.controllers.join(",")}|${et.phoneMotion}`;
        (0, kt.useEffect)((() => {
          Dt(null)
        }), [mt]);
        const dt = () => {
          (0, ed.c)().connectController().then((tt => {
            Dt(tt > 0 ? "openFailed" : null)
          })).catch((tt => {
            Od(tt) ? Dt("needsClick") : console.warn("Could not connect motion controller", tt)
          }))
        };
        if (et.hidSupported) {
          let tt = Vt("controller:settingsGyroConnectHint");
          return "needsClick" === Ot ? tt = Vt("controller:settingsGyroConnectNeedsClick") : "openFailed" === Ot ? tt = Vt("controller:settingsGyroOpenFailed") : et.controllers.length > 0 && (tt = Vt("controller:settingsGyroConnected", {
            name: qd(et)
          })), (0, ot.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, ot.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, ot.jsx)("div", {
                className: "ControllerSettingsHint",
                children: tt
              }), (0, ot.jsx)(Zm.f, {
                onClick: dt,
                children: Vt("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === et.phoneMotion) return (0, ot.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ot.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Ot && (0, ot.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Vt("controller:settingsGyroAllowNeedsTap")
            }), (0, ot.jsx)(Zm.f, {
              onClick: () => {
                Dd((() => {
                  Dt("needsTap")
                }))
              },
              children: Vt("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const jt = md[et.phoneMotion];
        return jt ? (0, ot.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Vt(jt)
        }) : null
      },
      jd = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, lt.q)(), Vt = (0, ed.f)(), Ot = (0, Et.E)(), Dt = !Vt.hidSupported && Vt.phoneSupported && !Vt.padConnected, mt = (Vt.hidSupported || Vt.phoneSupported) && !Dt, dt = (0, Xt.i)("pause");
        return (0, ot.jsxs)(ot.Fragment, {
          children: [(0, ot.jsx)(sm, {
            text: tt("controller:settingsGyro")
          }), Dt && (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: tt("controller:settingsGyroPhoneNeedsController")
          }), !mt && !Dt && (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: tt(Vt.hidBlocked || Vt.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), mt && (0, ot.jsx)(pm.c, {
            label: tt(Vt.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: et.gyroAiming,
            onClick: tt => {
              var et, Vt;
              (0, lt.p)({
                gyroAiming: tt
              });
              const Ot = null === (et = null === (Vt = navigator.userActivation) || void 0 === Vt ? void 0 : Vt.isActive) || void 0 === et || et;
              if (!tt || !Ot) return;
              const qt = (0, ed.c)(),
                Dt = qt.getStatus();
              Dt.hidSupported ? qt.connectControllerIfNoneGranted().catch((tt => {
                console.warn("Motion controller picker unavailable", tt)
              })) : "needsPermission" === Dt.phoneMotion && Dd()
            },
            circleInfoText: tt(Vt.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), mt && Vt.hidSupported && (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: tt("controller:settingsGyroSteamHint")
          }), mt && et.gyroAiming && (0, ot.jsxs)(ot.Fragment, {
            children: [(0, ot.jsx)(dd, {
              status: Vt
            }), (0, ot.jsx)(td, {
              settingKey: "gyroSensitivity",
              label: tt("controller:settingsGyroSensitivity"),
              range: gm._,
              format: gm.T
            }), (0, ot.jsx)(nm, {
              label: tt("controller:settingsGyroActivation"),
              hint: "aiming" === et.gyroActivation && (0, ot.jsx)(xm.b, {
                text: tt("controller:settingsGyroAimingHint", {
                  button: xm.f
                }),
                glyph: (0, Xt.i)("use")
              }),
              options: gm.X,
              value: et.gyroActivation,
              onChange: tt => {
                (0, lt.p)({
                  gyroActivation: tt
                })
              }
            }), "button" === et.gyroActivation && (0, ot.jsx)(nm, {
              label: tt("controller:settingsGyroButton"),
              hint: tt("controller:settingsGyroButtonHint"),
              options: gm.v.filter((tt => tt !== dt || tt === et.gyroButton)).map((tt => ({
                label: Cq(Ot, tt),
                value: tt
              }))),
              value: et.gyroButton,
              onChange: tt => {
                (0, lt.p)({
                  gyroButton: tt
                })
              }
            })]
          })]
        })
      };
    var Hd = Vt(1950);
    const Xd = () => {
      const {
        t: tt
      } = (0, qt.H)(), et = (0, lt.q)(), Vt = (0, Et.E)();
      return (0, ot.jsxs)(ot.Fragment, {
        children: [(0, ot.jsx)(sm, {
          text: tt("controller:settingsAccessibility")
        }), (0, ot.jsx)(pm.c, {
          label: tt("controller:settingsSwapConfirmBack"),
          checked: (0, Xt.J)(et.swapConfirmBack, Vt),
          onClick: tt => {
            (0, lt.p)({
              swapConfirmBack: tt === (0, Xt.J)(null, Vt) ? null : tt
            }), Hd.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: tt("controller:settingsSwapConfirmBackInfo")
        }), (0, ot.jsx)(nm, {
          label: tt("controller:settingsButtonRepeat"),
          hint: tt("controller:settingsButtonRepeatHint"),
          options: gm.r,
          value: et.buttonRepeat,
          onChange: tt => {
            (0, lt.p)({
              buttonRepeat: tt
            })
          }
        }), (0, ot.jsx)(nm, {
          label: tt("controller:settingsTapHoldTime"),
          hint: tt("controller:settingsTapHoldTimeHint"),
          options: gm.Bb,
          value: et.tapHoldTime,
          onChange: tt => {
            (0, lt.p)({
              tapHoldTime: tt
            })
          }
        }), (0, ot.jsx)(nm, {
          label: tt("controller:settingsEmoteButton"),
          hint: tt("wheel" === et.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: gm.M,
          value: et.emoteButton,
          onChange: tt => {
            (0, lt.p)({
              emoteButton: tt
            })
          }
        }), (0, ot.jsx)(nm, {
          label: tt("controller:settingsAttackMode"),
          hint: tt("toggle" === et.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: gm.p,
          value: et.attackMode,
          onChange: tt => {
            (0, lt.p)({
              attackMode: tt
            })
          }
        }), (0, ot.jsx)(pm.c, {
          label: tt("controller:settingsLargePointer"),
          checked: et.largePointer,
          onClick: tt => {
            (0, lt.p)({
              largePointer: tt
            })
          },
          circleInfoText: tt("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Qd = Vt(9082);
    const ld = new class {
        constructor(tt) {
          this.router = tt, this.current = null
        }
        claim(tt, et) {
          const Vt = this.current;
          Vt && (this.current = null, Vt.release(), Vt.onTakenOver());
          const Ot = this.router.register({
              ...tt,
              name: "capture"
            }),
            qt = {
              release: Ot,
              onTakenOver: et
            };
          return this.current = qt, () => {
            this.current === qt && (this.current = null), Ot()
          }
        }
      }(Qt.c),
      Ed = tt => {
        (0, kt.useEffect)((() => {
          if (!tt) return;
          const et = tt();
          let Vt = !1;
          const Ot = () => {
              Vt || (Vt = !0, et.onEnd())
            },
            qt = ld.claim({
              isActive: () => !Vt,
              onFrame: tt => {
                et.onFrame(tt, Ot)
              }
            }, Ot),
            Dt = void 0 === et.timeoutMs ? void 0 : window.setTimeout(Ot, et.timeoutMs),
            mt = tt => {
              "Escape" === tt.key && (tt.preventDefault(), tt.stopPropagation(), Ot())
            };
          return window.addEventListener("keydown", mt, !0), () => {
            Vt = !0, qt(), window.clearTimeout(Dt), window.removeEventListener("keydown", mt, !0)
          }
        }), [tt])
      },
      fd = tt => {
        let {
          row: et,
          capturing: Vt,
          onCapture: Ot,
          holdFillRef: Dt,
          onRebind: mt,
          swapped: dt
        } = tt;
        const {
          t: jt
        } = (0, qt.H)();
        if ("fixed" === et.kind) return (0, ot.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, ot.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ot.jsx)("div", {
              className: "ControlName",
              children: jt(et.labelKey)
            }), (0, ot.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, ot.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, ot.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, ot.jsx)(uq, {
                    glyph: "move" === et.stick ? (0, Xt.v)() : (0, Xt.s)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Ht
        } = et, Qt = (0, Xt.i)(Ht), lt = (0, Xt.k)(Ht), Et = Qt !== lt && (0, Xt.e)(Ht, lt);
        return (0, ot.jsxs)("div", {
          className: zt()("ControlRow PadControlRow", {
            Capturing: Vt
          }),
          children: [(0, ot.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ot.jsx)("div", {
              className: "ControlName",
              children: jt(gm.k[Ht])
            }), (0, ot.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Vt && (0, ot.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, ot.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ot(Ht)
                  },
                  children: (0, ot.jsx)(uq, {
                    glyph: Qt
                  })
                }), Et && (0, ot.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: jt("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    mt(Ht, lt)
                  },
                  children: (0, ot.jsx)(Im.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), Vt && (0, ot.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, ot.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, ot.jsx)("span", {
                    children: jt("controller:settingsCapturePrompt")
                  }), (0, ot.jsx)("div", {
                    ref: Dt,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, ot.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ot(null)
                  },
                  children: "\xd7"
                })]
              }), Vt && (0, ot.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, ot.jsx)(xm.b, {
                  text: jt((0, Xt.e)(Ht, (0, Xt.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: xm.f
                  }),
                  glyph: (0, Xt.i)("menuBack")
                })
              })]
            })]
          }), dt.map((tt => (0, ot.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, ot.jsx)(xm.b, {
              text: jt("controller:settingsSwapNotice", {
                action: jt(gm.k[tt]),
                button: xm.f
              }),
              glyph: (0, Xt.i)(tt)
            })
          }, tt))), Vt && (0, ot.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${gm.y}ms`
            }
          })]
        })
      },
      wd = [],
      yd = tt => {
        let {
          layoutSetting: et
        } = tt;
        const {
          t: Vt
        } = (0, qt.H)(), Ot = (0, lt.q)();
        (0, Et.E)();
        const Dt = (0, kt.useRef)(null),
          [mt, dt] = (0, kt.useState)(null),
          jt = (0, kt.useCallback)(((tt, et) => {
            const Vt = (0, lt.i)().bindings;
            (0, Xt.E)(tt, et);
            const Ot = (0, Xt.x)(Vt, tt);
            dt(Ot.length > 0 ? {
              action: tt,
              swapped: Ot
            } : null)
          }), []),
          [Ht, wt] = ((tt, et) => {
            const [Vt, Ot] = (0, kt.useState)(null), qt = (0, kt.useMemo)((() => Vt ? () => {
              const qt = (0, Xt.i)("menuBack"),
                Dt = new gm.e(qt, (0, Xt.i)("menuConfirm"), (tt => (0, Xt.e)(Vt, tt)));
              return {
                onFrame: (Ot, mt) => {
                  var dt;
                  const jt = Ot.frame.timestampMs,
                    Ht = Dt.update({
                      ...Ot,
                      isDown: tt => (0, ft.J)(Ot.frame.values, tt)
                    }, jt);
                  null === (dt = tt.current) || void 0 === dt || dt.style.setProperty("width", 100 * Dt.getBindHoldProgress(jt) + "%"), Ht && ("bind" === Ht.kind ? (Qt.c.consumeButton(Ht.button), et(Vt, Ht.button)) : Qt.c.consumeButton(qt), mt())
                },
                onEnd: () => {
                  Ot(null)
                },
                timeoutMs: gm.y
              }
            } : null), [Vt, tt, et]);
            return Ed(qt), [Vt, Ot]
          })(Dt, jt),
          yt = tt => {
            tt && dt(null), wt(tt)
          };
        (0, kt.useEffect)((() => {
          if (!mt) return;
          const tt = window.setTimeout((() => {
            dt(null)
          }), gm.zb);
          return () => {
            window.clearTimeout(tt)
          }
        }), [mt]);
        const Nt = !Ot.swapSticks && 0 === Object.keys(Ot.bindings).length;
        return (0, ot.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, ot.jsx)("div", {
            className: "SliderText",
            children: Vt("controller:settingsRemap")
          }), (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Vt("controller:settingsRemapHint")
          }), (0, ot.jsx)(Zm.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Nt,
            onClick: () => {
              yt(null), dt(null), (0, Xt.H)()
            },
            children: Vt("controller:settingsResetAll")
          }), et, gm.vb.map(((tt, et) => (0, ot.jsx)(Qd.c, {
            title: Vt(tt.titleKey),
            defaultOpen: 0 === et,
            children: tt.rows.map((tt => (0, ot.jsx)(fd, {
              row: tt,
              capturing: "action" === tt.kind && tt.action === Ht,
              onCapture: yt,
              holdFillRef: Dt,
              onRebind: jt,
              swapped: "action" === tt.kind && (null === mt || void 0 === mt ? void 0 : mt.action) === tt.action ? mt.swapped : wd
            }, "action" === tt.kind ? tt.action : tt.labelKey)))
          }, tt.titleKey)))]
        })
      },
      Nd = tt => {
        let {
          deadzone: et,
          dotRef: Vt,
          labelKey: Ot
        } = tt;
        const {
          t: Dt
        } = (0, qt.H)();
        return (0, ot.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, ot.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, ot.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * et + "%",
                height: 100 * et + "%"
              }
            }), (0, ot.jsx)("div", {
              ref: Vt,
              className: "ControllerTesterDot"
            })]
          }), (0, ot.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Dt(Ot)
          })]
        })
      },
      Md = (tt, et, Vt, Ot) => {
        var qt;
        tt && (tt.style.left = 50 + 50 * Math.max(-1, Math.min(1, et.x)) + "%", tt.style.top = 50 + 50 * Math.max(-1, Math.min(1, et.y)) + "%", null === (qt = tt.parentElement) || void 0 === qt || qt.classList.toggle("Active", Ot || Math.hypot(et.x, et.y) > Vt))
      },
      bd = tt => {
        const et = {
            deadzone: tt.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Vt = {
            deadzone: tt.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return tt.swapSticks ? {
          left: Vt,
          right: et
        } : {
          left: et,
          right: Vt
        }
      },
      Jd = () => {
        const {
          t: tt
        } = (0, qt.H)(), et = (() => {
          const [tt, et] = (0, kt.useState)((() => mt.e.getActivePad()));
          return (0, Nq.f)(mt.d, (() => {
            et(mt.e.getActivePad())
          })), tt
        })(), Vt = bd((0, lt.q)()), Ot = (0, kt.useRef)(null), Dt = (0, kt.useRef)(null), dt = (0, kt.useRef)([]), jt = (0, kt.useRef)(null), Ht = (0, kt.useRef)(null), [Et, wt] = (tt => {
          const [et, Vt] = (0, kt.useState)(!1), Ot = (0, kt.useMemo)((() => et ? () => {
            const et = (0, Xt.i)("menuBack"),
              Ot = new gm.h;
            return {
              onFrame: (Vt, qt) => {
                var Dt;
                const mt = Ot.update({
                  pressed: Vt.wasPressed(et),
                  Pd: Vt.isHeld(et)
                }, Vt.frame.timestampMs);
                null === (Dt = tt.current) || void 0 === Dt || Dt.style.setProperty("width", 100 * mt + "%"), mt >= 1 && (Qt.c.consumeButton(et), qt())
              },
              onEnd: () => {
                Vt(!1)
              }
            }
          } : null), [et, tt]);
          return Ed(Ot), [et, Vt]
        })(Dt);
        (0, kt.useEffect)((() => {
          const tt = tt => {
            for (const Vt of ft.X) {
              const et = (0, ft.m)(Vt),
                Ot = dt.current[et];
              if (!Ot) continue;
              const qt = tt.values[et];
              Ot.classList.toggle("Pressed", qt >= ft.B), (0, ft.L)(et) && Ot.style.setProperty("--trigger-fill", `${Math.round(100*qt)}%`)
            }
            const et = bd((0, lt.i)());
            Md(jt.current, tt.leftStick, et.left.deadzone, tt.values[(0, ft.m)("LS")] >= ft.B), Md(Ht.current, tt.rightStick, et.right.deadzone, tt.values[(0, ft.m)("RS")] >= ft.B)
          };
          return et || tt((0, ft.y)()), mt.e.onFrame(tt)
        }), [et]), (0, kt.useEffect)((() => {
          et || wt(!1)
        }), [et, wt]), (0, kt.useEffect)((() => {
          var tt;
          Et && (null === (tt = Ot.current) || void 0 === tt || tt.scrollIntoView({
            block: "nearest"
          }))
        }), [Et]);
        const yt = gm.rb.find((tt => tt.value === (null === et || void 0 === et ? void 0 : et.family)));
        return (0, ot.jsxs)("div", {
          ref: Ot,
          className: zt()("SettingBox ControllerTester", {
            Testing: Et
          }),
          children: [(0, ot.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, ot.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [et && (0, ot.jsx)("div", {
                children: tt("controller:settingsTesterFamily", {
                  family: yt ? tt(yt.labelKey) : et.family
                })
              }), et && (0, ot.jsx)("div", {
                className: "ControllerTesterPadId",
                children: et.id
              }), !et && (0, ot.jsx)("div", {
                children: tt("controller:settingsTesterNoPad")
              })]
            }), (et || Et) && (0, ot.jsx)(Zm.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                wt(!Et)
              },
              children: tt(Et ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), et && !Et && (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: tt("controller:settingsTesterHint")
          }), Et && (0, ot.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, ot.jsx)(xm.b, {
              text: tt("controller:settingsTesterTesting", {
                button: xm.f
              }),
              glyph: (0, Xt.i)("menuBack")
            }), (0, ot.jsx)("div", {
              ref: Dt,
              className: "ControllerTesterExitFill"
            })]
          }), (0, ot.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, ot.jsx)(Nd, {
              deadzone: Vt.left.deadzone,
              dotRef: jt,
              labelKey: Vt.left.labelKey
            }), (0, ot.jsx)("div", {
              className: "ControllerTesterButtons",
              children: ft.X.map((tt => {
                const Vt = (0, ft.m)(tt);
                return (0, ot.jsx)("div", {
                  ref: tt => {
                    dt.current[Vt] = tt
                  },
                  className: (0, ft.L)(Vt) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, ot.jsx)(uq, {
                    glyph: tt,
                    family: null === et || void 0 === et ? void 0 : et.family
                  })
                }, tt)
              }))
            }), (0, ot.jsx)(Nd, {
              deadzone: Vt.right.deadzone,
              dotRef: Ht,
              labelKey: Vt.right.labelKey
            })]
          })]
        })
      },
      Cd = (0, kt.memo)((function() {
        const {
          t: tt
        } = (0, qt.H)(), et = (0, lt.q)(), [Vt, Ot] = (0, kt.useState)(!1);
        return (0, kt.useEffect)((() => {
          if (!Vt) return;
          const tt = window.setTimeout((() => {
            Ot(!1)
          }), gm.zb);
          return () => {
            window.clearTimeout(tt)
          }
        }), [Vt]), (0, ot.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, ot.jsx)(sm, {
            text: tt("controller:settingsLook")
          }), (0, ot.jsx)(td, {
            settingKey: "lookSensitivityX",
            label: tt("controller:settingsLookSensitivityX"),
            range: gm.wb,
            format: gm.U
          }), (0, ot.jsx)(td, {
            settingKey: "lookSensitivityY",
            label: tt("controller:settingsLookSensitivityY"),
            range: gm.wb,
            format: gm.U
          }), (0, ot.jsx)(td, {
            settingKey: "aimLookSensitivity",
            label: tt("controller:settingsAimLookSensitivity"),
            range: gm.n,
            format: gm.U
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsLookCurve"),
            hint: tt("controller:settingsLookCurveHint"),
            options: gm.jb,
            value: et.lookCurve,
            onChange: tt => {
              (0, lt.p)({
                lookCurve: tt
              })
            }
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsInvertLookX"),
            checked: et.invertLookX,
            onClick: tt => {
              (0, lt.p)({
                invertLookX: tt
              })
            }
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsInvertLookY"),
            checked: et.invertLookY,
            onClick: tt => {
              (0, lt.p)({
                invertLookY: tt
              })
            }
          }), (0, ot.jsx)(td, {
            settingKey: "lookDeadzone",
            label: tt("controller:settingsLookDeadzone"),
            range: gm.K,
            format: gm.P
          }), (0, ot.jsx)(jd, {}), (0, ot.jsx)(sm, {
            text: tt("controller:settingsMovement")
          }), (0, ot.jsx)(td, {
            settingKey: "moveDeadzone",
            label: tt("controller:settingsMoveDeadzone"),
            range: gm.K,
            format: gm.P
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsAutoSprint"),
            checked: et.autoSprint,
            onClick: tt => {
              (0, lt.p)({
                autoSprint: tt
              })
            },
            circleInfoText: tt("controller:settingsAutoSprintInfo")
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsSneak"),
            options: gm.xb,
            value: et.sneakMode,
            onChange: tt => {
              (0, lt.p)({
                sneakMode: tt
              })
            }
          }), (0, ot.jsx)(sm, {
            text: tt("controller:settingsButtons")
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsPromptFamily"),
            options: gm.rb,
            value: et.promptFamily,
            onChange: tt => {
              (0, lt.p)({
                promptFamily: tt
              })
            }
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsHideButtonHints"),
            checked: et.hideButtonHints,
            onClick: tt => {
              (0, lt.p)({
                hideButtonHints: tt
              })
            }
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsVibration"),
            checked: et.vibration,
            onClick: tt => {
              (0, lt.p)({
                vibration: tt
              }), tt && mq("preview")
            }
          }), (0, ot.jsx)(td, {
            settingKey: "cursorSpeed",
            label: tt("controller:settingsCursorSpeed"),
            range: gm.G,
            format: gm.U
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsCursorMagnetism"),
            checked: et.cursorMagnetism,
            onClick: tt => {
              (0, lt.p)({
                cursorMagnetism: tt
              })
            }
          }), (0, ot.jsx)(pm.c, {
            label: tt("controller:settingsMenuBackToCategories"),
            checked: et.menuBackToCategories,
            onClick: tt => {
              (0, lt.p)({
                menuBackToCategories: tt
              })
            }
          }), (0, ot.jsx)(yd, {
            layoutSetting: (0, ot.jsxs)(ot.Fragment, {
              children: [Xt.h.map((Vt => (0, ot.jsx)(pm.c, {
                label: tt(gm.db[Vt]),
                checked: (0, Xt.C)(Vt, et),
                onClick: tt => {
                  Ot(!(0, Xt.K)(Vt, tt))
                }
              }, Vt))), Vt && (0, ot.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: tt("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, ot.jsx)(Xd, {}), (0, ot.jsx)(sm, {
            text: tt("controller:settingsAlternatives")
          }), (0, ot.jsx)("div", {
            className: "ControllerSettingsHint",
            children: tt("controller:settingsAlternativesHint")
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsMenuNavigation"),
            hint: tt("controller:settingsMenuNavigationHint"),
            options: gm.nb,
            value: et.menuNavigation,
            onChange: tt => {
              (0, lt.p)({
                menuNavigation: tt
              })
            }
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsInventoryNavigation"),
            hint: tt("controller:settingsInventoryNavigationHint"),
            options: gm.ab,
            value: et.inventoryNavigation,
            onChange: tt => {
              (0, lt.p)({
                inventoryNavigation: tt
              })
            }
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsQuickChat"),
            hint: tt("controller:settingsQuickChatHint"),
            options: gm.sb,
            value: et.quickChat,
            onChange: tt => {
              (0, lt.p)({
                quickChat: tt
              })
            }
          }), (0, ot.jsx)(nm, {
            label: tt("controller:settingsLeaderboardButton"),
            hint: tt("controller:settingsLeaderboardButtonHint"),
            options: gm.fb,
            value: et.leaderboardButton,
            onChange: tt => {
              (0, lt.p)({
                leaderboardButton: tt
              })
            }
          }), (0, ot.jsx)(sm, {
            text: tt("controller:settingsTester")
          }), (0, ot.jsx)(Jd, {})]
        })
      }));
    (0, qt.d)(Ot);
    for (const Wd of (0, Dt.n)()) Wd.connected ? mt.e.handleConnectionEvent(Wd) : mt.e.handleDisconnectionEvent(Wd);
    const ud = () => null !== mt.e.getActivePad(),
      Kd = () => DV.getState(),
      hd = () => DV.isSteppingSlots(),
      vd = (tt, et) => {
        const Vt = tq.getFocused();
        tq.isActive() && Vt && tt.contains(Vt) && tq.setFocus(et, {
          scroll: !1
        })
      }
  },
  8383: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      f: () => Ht
    });
    var Ot = Vt(1537),
      qt = Vt(1530);
    const Dt = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      mt = "28de",
      dt = new Set(["1205"]),
      jt = (tt, et) => {
        const Vt = (0, Ot.c)(tt);
        if ((null === Vt || void 0 === Vt ? void 0 : Vt.vendor) === mt) return dt.has(Vt.product) ? "steamdeck" : "xbox";
        if (Vt && Dt[Vt.vendor]) return Dt[Vt.vendor];
        if ((0, qt.b)(tt)) return "nintendo";
        const jt = `${tt} ${null!==et&&void 0!==et?et:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(jt) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(jt) ? "nintendo" : /steam deck/.test(jt) ? "steamdeck" : "xbox"
      },
      Ht = tt => {
        var et;
        return (null === (et = (0, Ot.c)(tt)) || void 0 === et ? void 0 : et.vendor) === mt
      }
  },
  8414: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      g: () => dt
    });
    var Ot = Vt(8377);
    const qt = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Dt = new Set(["capture", "gameplay"]),
      mt = ["Up", "Down", "Left", "Right"],
      dt = tt => mt.includes(tt),
      jt = .25;
    const Ht = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Pd = new Array(Ot.V).fill(!1), this.previousHeld = new Array(Ot.V).fill(!1), this.consumedButtons = new Array(Ot.V).fill(!1), this.suppressedReleases = new Array(Ot.V).fill(!1), this.wakeOwned = new Array(Ot.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Ot.y)()
      }
      register(tt) {
        return this.consumers.has(tt.name) && console.warn(`Controller consumer "${tt.name}" registered twice; the newer one replaces it.`), this.consumers.set(tt.name, tt), () => {
          var et;
          this.consumers.get(tt.name) === tt && (this.activeName === tt.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (et = this.peek) || void 0 === et ? void 0 : et.over) === tt.name && (this.peek = null), this.consumers.delete(tt.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(tt) {
        return this.Pd[(0, Ot.m)(tt)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Pd = new Array(Ot.V).fill(!1), this.previousHeld = new Array(Ot.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Ot.y)()
      }
      dispatch(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = tt, this.previousHeld = this.Pd, this.Pd = (0, Ot.t)(tt.values, this.previousHeld);
        for (let Dt = 0; Dt < Ot.V; Dt++) this.suppressedReleases[Dt] = !this.Pd[Dt] && this.consumedButtons[Dt], this.Pd[Dt] || (this.consumedButtons[Dt] = !1), this.wakeOwned[Dt] && (this.Pd[Dt] ? (this.consumedButtons[Dt] = !0, this.wakeOwned[Dt] = !1) : tt.values[Dt] < Ot.R && (this.wakeOwned[Dt] = !1));
        Math.hypot(tt.leftStick.x, tt.leftStick.y) < jt && (this.leftStickConsumed = !1), Math.hypot(tt.rightStick.x, tt.rightStick.y) < jt && (this.rightStickConsumed = !1);
        const qt = this.pickActive();
        if ((null === qt || void 0 === qt ? void 0 : qt.name) !== this.activeName) {
          var mt, dt, Ht, Xt, Qt, lt;
          const tt = this.activeName,
            et = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Vt = null !== (mt = null === qt || void 0 === qt || null === (dt = qt.peek) || void 0 === dt ? void 0 : dt.call(qt)) && void 0 !== mt ? mt : null,
            Dt = null === tt && !!Vt && !(null === (Ht = this.consumers.get(Vt.over)) || void 0 === Ht || !Ht.onPeekFrame),
            jt = Vt && (Vt.over === tt || Dt) ? Vt : null,
            Et = null !== this.peek && this.peek.over === (null === qt || void 0 === qt ? void 0 : qt.name) ? this.peek : null;
          this.deactivateCurrent(null !== jt, null !== Et), this.activeName = null !== (Xt = null === qt || void 0 === qt ? void 0 : qt.name) && void 0 !== Xt ? Xt : null, null === tt || this.handOffPending || this.consumeAllHeld();
          const ft = null === (Qt = null !== jt && void 0 !== jt ? jt : Et) || void 0 === Qt ? void 0 : Qt.stick;
          "left" === ft && et.left ? this.leftStickConsumed = !1 : "right" === ft && et.right && (this.rightStickConsumed = !1), this.peek = jt, qt || null === tt ? qt && (null === (lt = this.idleResume) || void 0 === lt ? void 0 : lt.name) === qt.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: tt,
            left: et.left && this.leftStickConsumed,
            right: et.right && this.rightStickConsumed
          }, qt && (this.idleResume = null);
          for (let qt = 0; qt < Ot.V; qt++) this.previousHeld[qt] && !this.Pd[qt] && (this.suppressedReleases[qt] = !0)
        }
        var Et, ft;
        (this.handOffPending = !1, qt) && (Vt && !Dt.has(qt.name) && this.consumeWakePress(qt), qt.onFrame(this.buildInput(tt, et, Vt)), this.peek && (null === (Et = this.consumers.get(this.peek.over)) || void 0 === Et || null === (ft = Et.onPeekFrame) || void 0 === ft || ft.call(Et, this.buildInput(tt, et, !1, this.peek.stick))))
      }
      consumeWakePress(tt) {
        for (let qt = 0; qt < Ot.V; qt++) {
          var et, Vt;
          const Dt = Ot.X[qt];
          (null !== (et = null === (Vt = tt.wakePressActs) || void 0 === Vt ? void 0 : Vt.call(tt, Dt)) && void 0 !== et ? et : mt.includes(Dt)) || (this.Pd[qt] ? this.consumedButtons[qt] = !0 : this.lastFrame.values[qt] >= Ot.O && (this.wakeOwned[qt] = !0))
        }
      }
      pickActive() {
        for (const tt of qt) {
          const et = this.consumers.get(tt);
          if (et && et.isActive()) return et
        }
        return null
      }
      deactivateCurrent() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Vt, Ot, qt, Dt;
        this.activeName && (null === (Vt = this.consumers.get(this.activeName)) || void 0 === Vt || null === (Ot = Vt.onDeactivate) || void 0 === Ot || Ot.call(Vt, tt));
        this.peek && !et && (null === (qt = this.consumers.get(this.peek.over)) || void 0 === qt || null === (Dt = qt.onDeactivate) || void 0 === Dt || Dt.call(qt, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let qt = 0; qt < Ot.V; qt++) this.Pd[qt] && (this.consumedButtons[qt] = !0);
        const {
          leftStick: et,
          rightStick: Vt
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== tt && (this.leftStickConsumed || Math.hypot(et.x, et.y) >= jt), this.rightStickConsumed = "right" !== tt && (this.rightStickConsumed || Math.hypot(Vt.x, Vt.y) >= jt)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(tt) {
        const et = (0, Ot.m)(tt);
        this.Pd[et] && (this.consumedButtons[et] = !0)
      }
      buildInput(tt, et, Vt, qt) {
        const Dt = this.Pd,
          mt = this.previousHeld,
          dt = qt ? new Array(Ot.V).fill(!0) : [...this.consumedButtons],
          jt = qt ? dt : [...this.suppressedReleases],
          Ht = !this.leftStickConsumed && (!qt || "left" === qt),
          Xt = !this.rightStickConsumed && (!qt || "right" === qt);
        return {
          frame: tt,
          dtMs: et,
          isHeld: tt => {
            const et = (0, Ot.m)(tt);
            return Dt[et] && !dt[et]
          },
          wasPressed: tt => {
            const et = (0, Ot.m)(tt);
            return Dt[et] && !mt[et] && !dt[et]
          },
          wasReleased: tt => {
            const et = (0, Ot.m)(tt);
            return !Dt[et] && mt[et] && !jt[et]
          },
          value: et => {
            const Vt = (0, Ot.m)(et);
            return dt[Vt] ? 0 : tt.values[Vt]
          },
          leftStick: Ht ? tt.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Xt ? tt.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Vt
        }
      }
    }
  },
  8397: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt.f,
      g: () => Qt.h,
      i: () => St,
      l: () => ct,
      p: () => Rt,
      q: () => It
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(1554),
      mt = Vt(39),
      dt = Vt(8400),
      jt = Vt(8377),
      Ht = Vt(8392),
      Xt = Vt(8375),
      Qt = Vt(2096),
      lt = Vt(8405);
    const Et = {
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
      ft = "controllerSettings",
      wt = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      yt = ["auto", ...dt.c],
      Nt = (tt, et) => "string" === typeof et && tt.includes(et),
      Mt = tt => et => "number" === typeof et && Number.isFinite(et) ? (0, lt.C)(et, tt) : void 0,
      bt = tt => "boolean" === typeof tt ? tt : void 0,
      Jt = tt => et => Nt(tt, et) ? et : void 0,
      Ct = {
        lookSensitivityX: Mt(lt.wb),
        lookSensitivityY: Mt(lt.wb),
        aimLookSensitivity: Mt(lt.n),
        invertLookX: bt,
        invertLookY: bt,
        lookCurve: Jt(jt.M),
        lookDeadzone: Mt(lt.K),
        moveDeadzone: Mt(lt.K),
        swapSticks: bt,
        autoSprint: bt,
        sneakMode: Jt(["toggle", "hold"]),
        tapHoldTime: Jt(["short", "medium", "long"]),
        attackMode: Jt(["hold", "toggle"]),
        promptFamily: Jt(yt),
        hideButtonHints: bt,
        vibration: bt,
        cursorSpeed: Mt(lt.G),
        cursorMagnetism: bt,
        buttonRepeat: Jt(jt.p),
        largePointer: bt,
        menuBackToCategories: bt,
        swapConfirmBack: bt,
        menuNavigation: Jt(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Jt(["hybrid", "slot", "cursor"]),
        quickChat: Jt(["wheel", "off"]),
        leaderboardButton: Jt(["shop", "leaderboard"]),
        gyroAiming: bt,
        gyroSensitivity: Mt(lt._),
        gyroActivation: Jt(["always", "aiming", "button"]),
        gyroButton: Jt(jt.X),
        emoteButton: Jt(["tapHold", "wheel"])
      },
      ut = [{
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
      Kt = tt => {
        const et = {};
        if ("object" !== typeof tt || null === tt) return et;
        for (const [Vt, Ot] of Object.entries(tt)) Object.prototype.hasOwnProperty.call(Ht.f, Vt) && Nt(jt.X, Ot) && (et[Vt] = Ot);
        return et
      },
      ht = tt => {
        const et = {};
        for (const Vt of Object.keys(Et))("bindings" === Vt ? Object.keys(tt.bindings).length > 0 : tt[Vt] !== Et[Vt]) && (et[Vt] = tt[Vt]);
        0 !== Object.keys(et).length ? mt.e.setItem(ft, et) : mt.e.removeItem(ft)
      };
    let vt = (() => {
        const tt = mt.e.getItem(ft),
          et = (tt => {
            const et = "object" === typeof tt && null !== tt ? tt : {},
              Vt = {
                ...Et,
                bindings: Kt(et.bindings)
              };
            for (const qt of Object.keys(Ct)) {
              const tt = Ct[qt](et[qt]);
              void 0 !== tt && (Vt[qt] = tt)
            }
            const Ot = Object.keys(et).filter((tt => !!Object.prototype.hasOwnProperty.call(Et, tt) && ("bindings" === tt ? "object" !== typeof et.bindings || null === et.bindings || Object.keys(et.bindings).length !== Object.keys(Vt.bindings).length : Vt[tt] !== et[tt])));
            return Ot.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Ot.join(", ")}`), Vt
          })(tt);
        return null !== tt && void 0 !== tt && ht(et), et
      })(),
      Wt = {
        ...vt,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const tt = {},
            et = new URLSearchParams(window.location.search);
          for (const {
              param: Vt,
              key: Ot
            }
            of ut) {
            const qt = Ct[Ot](et.get(Vt));
            void 0 !== qt && (tt[Ot] = qt)
          }
          return tt
        })()
      };
    const St = () => Wt,
      ct = () => {
        var tt, et;
        const Vt = St().promptFamily;
        return "auto" !== Vt ? Vt : null !== (tt = null === (et = Xt.e.getActivePad()) || void 0 === et ? void 0 : et.family) && void 0 !== tt ? tt : "xbox"
      },
      Rt = tt => {
        const et = Wt;
        vt = {
          ...vt,
          ...tt
        }, ht(vt), Wt = {
          ...Wt,
          ...tt
        }, (tt => {
          qt.j.sw(Qt.h, Wt), wt.some((et => tt[et] !== Wt[et])) && qt.j.sw(Qt.f, Wt)
        })(et)
      },
      It = () => {
        const [tt, et] = (0, Ot.useState)(Wt);
        return (0, Dt.f)(Qt.h, et), tt
      }
  },
  8859: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    const Ot = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      qt = tt => Ot.has(tt)
  },
  8375: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => wt.e,
      e: () => bt
    });
    var Ot = Vt(8377),
      qt = Vt(8383);
    const Dt = .1,
      mt = .3;
    class dt {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(tt, et) {
        const Vt = null === this.lastMs ? 0 : Math.min(Math.max(0, et - this.lastMs), 100);
        this.lastMs = et;
        const Ot = Math.hypot(tt.x, tt.y);
        if (Ot >= mt) return this.anchor = null, void(this.returning = !0);
        Ot >= Dt || (this.returning = !1);
        const qt = this.anchor;
        if (!qt || Math.hypot(tt.x - qt.x, tt.y - qt.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: tt.x,
          y: tt.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Vt, this.steadyMs < 1e3) return;
        const dt = Math.max(Ot, Math.hypot(qt.x, qt.y));
        dt < Dt ? this.deadzone = 0 : this.returning && (this.deadzone = dt + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(tt) {
        return Math.hypot(tt.x, tt.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : tt
      }
    }
    const jt = (tt, et) => {
        var Vt, Ot;
        return null !== (Vt = tt && (null === (Ot = Object.getOwnPropertyDescriptor(tt, et)) || void 0 === Ot ? void 0 : Ot.get)) && void 0 !== Vt ? Vt : null
      },
      Ht = tt => {
        const et = tt.vendorName;
        return "string" === typeof et ? et : void 0
      },
      Xt = ((tt, et) => {
        const Vt = jt(tt, "index"),
          Ot = jt(tt, "id"),
          qt = jt(tt, "connected"),
          Dt = jt(tt, "mapping"),
          mt = jt(tt, "buttons"),
          dt = jt(tt, "axes"),
          Xt = jt(et, "pressed"),
          Qt = jt(et, "value");
        return Vt && Ot && qt && Dt && mt && dt && Xt && Qt ? tt => {
          const et = mt.call(tt),
            jt = dt.call(tt),
            lt = {
              index: Number(Vt.call(tt)),
              id: String(Ot.call(tt)),
              connected: !0 === qt.call(tt),
              mapping: String(Dt.call(tt)),
              buttons: [],
              axes: [],
              vendorName: Ht(tt)
            };
          for (let Vt = 0; Vt < et.length; Vt++) lt.buttons.push({
            pressed: !0 === Xt.call(et[Vt]),
            value: Number(Qt.call(et[Vt]))
          });
          for (let Vt = 0; Vt < jt.length; Vt++) lt.axes.push(Number(jt[Vt]));
          return lt
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Qt = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var lt = Vt(1521),
      Et = Vt(1530);
    const ft = tt => ({
      pressed: tt,
      value: tt ? 1 : 0
    });
    var wt = Vt(2096);
    const yt = mt,
      Nt = tt => {
        const et = new Array(Ot.V).fill(0);
        for (let Vt = 0; Vt < Ot.V && Vt < tt.buttons.length; Vt++) {
          const qt = tt.buttons[Vt];
          et[Vt] = qt.pressed && !(0, Ot.L)(Vt) ? Math.max(qt.value, Ot.B) : qt.value
        }
        return et
      },
      Mt = (tt, et) => {
        var Vt, Ot;
        return {
          x: null !== (Vt = tt.axes[et]) && void 0 !== Vt ? Vt : 0,
          y: null !== (Ot = tt.axes[et + 1]) && void 0 !== Ot ? Ot : 0
        }
      };
    const bt = new class {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xt;
        this.readGamepads = tt, this.requireTrustedPads = et, this.nativeReader = Vt, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = tt => {
          tt.isTrusted && this.trustedIndices.add(tt.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = tt => {
          this.trustedIndices.delete(tt.gamepad.index)
        }, this.BQ = tt => {
          if (this.rafId = 0, !this.running) return;
          const et = 0 === this.lastTimestampMs ? 16 : Math.min(100, tt - this.lastTimestampMs);
          this.lastTimestampMs = tt;
          try {
            this.poll(tt, et)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.BQ))
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
      onFrame(tt) {
        return this.frameListeners.add(tt), () => {
          this.frameListeners.delete(tt)
        }
      }
      onActivePadChanged(tt) {
        return this.connectionListeners.add(tt), () => {
          this.connectionListeners.delete(tt)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(tt) {
        return this.connectedListeners.add(tt), () => {
          this.connectedListeners.delete(tt)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const tt = this.readPads()[this.activeInfo.index],
          et = tt ? this.readPad(tt) : null;
        return et && et.id === this.activeInfo.id ? tt : null
      }
      poll(tt, et) {
        var Vt, qt;
        const Dt = this.readPads();
        let mt = null,
          jt = !1;
        const Ht = [],
          Xt = Math.max(Dt.length, this.slots.length);
        for (let bt = 0; bt < Xt; bt++) {
          var Qt;
          const et = bt < Dt.length ? Dt[bt] : null,
            Vt = et ? this.readPad(et) : null;
          if (!Vt || !Vt.connected || !this.isUsable(Vt)) {
            this.slots[bt] = null;
            continue
          }
          let qt = this.slots[bt];
          qt && qt.id === Vt.id || (qt = {
            id: Vt.id,
            Pd: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new dt,
            rightRest: new dt
          }, this.slots[bt] = qt);
          const Xt = Mt(Vt, 0),
            lt = Mt(Vt, 2);
          !qt.leftSettled && Math.hypot(Xt.x, Xt.y) < yt && (qt.leftSettled = !0), !qt.rightSettled && Math.hypot(lt.x, lt.y) < yt && (qt.rightSettled = !0), qt.leftRest.observe(Xt, tt), qt.rightRest.observe(lt, tt);
          const Et = Nt(Vt),
            ft = (0, Ot.t)(Et, qt.Pd),
            wt = qt.Pd,
            Jt = ft.map(((tt, et) => tt && !wt[et]));
          qt.Pd = ft;
          const Ct = {
            pad: Vt,
            slot: qt,
            values: Et
          };
          bt === (null === (Qt = this.activeInfo) || void 0 === Qt ? void 0 : Qt.index) && Vt.id === this.activeInfo.id ? (mt = Ct, jt = Jt.includes(!0)) : Jt.includes(!0) && Ht.push({
            polled: Ct,
            rose: Jt
          })
        }
        const lt = this.slots.some((tt => null !== tt));
        if (lt !== this.anyPadConnected) {
          this.anyPadConnected = lt;
          for (const tt of this.connectedListeners) tt()
        }
        const Et = null !== (Vt = null === (qt = mt) || void 0 === qt ? void 0 : qt.slot.Pd) && void 0 !== Vt ? Vt : [],
          ft = jt ? void 0 : Ht.find((tt => {
            let {
              rose: et
            } = tt;
            return et.some(((tt, et) => tt && !Et[et]))
          }));
        if (ft ? (mt = ft.polled, this.setActive(ft.polled.pad)) : this.activeInfo && !mt && this.setActive(null), !mt || !this.activeInfo) return;
        const wt = ((tt, et) => {
          let {
            pad: Vt,
            slot: qt,
            values: Dt
          } = tt;
          const mt = (0, Ot.y)(et);
          return mt.values = Dt, qt.leftSettled && (mt.leftStick = qt.leftRest.apply(Mt(Vt, 0))), qt.rightSettled && (mt.rightStick = qt.rightRest.apply(Mt(Vt, 2))), mt
        })(mt, tt);
        for (const Ot of this.frameListeners) Ot(wt, et, this.activeInfo)
      }
      readPad(tt) {
        const et = this.readSnapshot(tt);
        return et && (0, Et.d)(et) ? (tt => {
          const et = et => {
              var Vt;
              return null !== (Vt = tt.buttons[et]) && void 0 !== Vt ? Vt : ft(!1)
            },
            Vt = et => {
              var Vt;
              return null !== (Vt = tt.axes[et]) && void 0 !== Vt ? Vt : 0
            },
            Ot = tt.axes.length > 9,
            qt = Ot ? (tt => {
              const et = 0 !== tt;
              return {
                up: et && (tt >= -1 && tt < -.7 || tt >= .95 && tt <= 1),
                right: et && tt >= -.75 && tt < -.1,
                down: et && tt >= -.2 && tt < .45,
                left: et && tt >= .4 && tt <= 1
              }
            })(Vt(9)) : {
              up: Vt(5) < -.5,
              down: Vt(5) > .5,
              left: Vt(4) < -.5,
              right: Vt(4) > .5
            };
          return {
            ...tt,
            mapping: "standard",
            buttons: [et(1), et(2), et(0), et(3), et(4), et(5), et(6), et(7), et(8), et(9), et(10), et(11), ft(qt.up), ft(qt.down), ft(qt.left), ft(qt.right), et(12)],
            axes: [Vt(0), Vt(1), Vt(2), Vt(Ot ? 5 : 3)]
          }
        })(et) : et
      }
      readSnapshot(tt) {
        if (this.nativeReader) try {
          return this.nativeReader(tt)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (tt => {
          const et = tt;
          return {
            index: et.index,
            id: et.id,
            connected: et.connected,
            mapping: et.mapping,
            buttons: Array.from(et.buttons, (tt => ({
              pressed: tt.pressed,
              value: tt.value
            }))),
            axes: Array.from(et.axes),
            vendorName: Ht(tt)
          }
        })(tt)
      }
      isUsable(tt) {
        return !(0, lt.f)(tt.id) && ("standard" !== tt.mapping ? (this.warnedNonStandardIds.has(tt.id) || (this.warnedNonStandardIds.add(tt.id), console.warn(`Controller "${tt.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(tt.index))
      }
      setActive(tt) {
        this.activeInfo = tt ? {
          index: tt.index,
          id: tt.id,
          family: (0, qt.b)(tt.id, tt.vendorName)
        } : null;
        for (const et of this.connectionListeners) et(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (tt) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", tt)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.BQ))
      }
    }((() => Qt ? Qt.call(navigator) : []), !0);
    bt.listenForConnections()
  },
  8964: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      g: () => mt,
      k: () => dt,
      m: () => qt
    });
    var Ot = Vt(8972);
    const qt = tt => {
        const et = [];
        tt.holdingGun && et.push({
          kind: "reload"
        }), tt.touchscreenActionButton && et.push({
          kind: "touchButton",
          label: tt.touchscreenActionButton
        });
        for (const Dt of null !== (Vt = null === (qt = tt.customButtons) || void 0 === qt ? void 0 : qt.filter(Ot.h)) && void 0 !== Vt ? Vt : []) {
          var Vt, qt;
          et.push({
            kind: "customButton",
            id: Dt.id,
            icon: Dt.icon,
            description: Dt.description
          })
        }
        return et
      },
      Dt = tt => tt.length >= 2,
      mt = tt => "specialAction" !== tt.kind,
      dt = (tt, et) => {
        if (null === tt || null === et) return tt === et;
        if (tt.kind !== et.kind) return !1;
        switch (tt.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return tt.action === et.action;
          case "customButton":
            return tt.id === et.id && tt.icon === et.icon;
          case "touchButton":
            return tt.label === et.label
        }
      }
  },
  8868: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    const Ot = {
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
  8959: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      h: () => Et,
      l: () => Qt,
      p: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(1554),
      mt = Vt(8964),
      dt = Vt(8980);
    let jt = null;
    const Ht = () => jt,
      Xt = tt => {
        (0, mt.k)(jt, tt) || (jt = tt, qt.j.sw(dt.e, jt))
      },
      Qt = () => {
        const [tt, et] = (0, Ot.useState)(Ht);
        return (0, Dt.f)(dt.e, et), tt
      };
    let lt = !1;
    const Et = tt => {
        tt !== lt && (lt = tt, qt.j.sw(dt.i, tt))
      },
      ft = () => {
        const [tt, et] = (0, Ot.useState)(lt);
        return (0, Dt.f)(dt.i, et), tt
      }
  },
  8989: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      h: () => dt
    });
    var Ot = Vt(31),
      qt = Vt(8980);
    let Dt = !1;
    const mt = () => Dt,
      dt = tt => {
        tt !== Dt && (Dt = tt, Ot.j.sw(qt.k, Dt))
      }
  },
  8982: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => jt
    });
    var Ot = Vt(31),
      qt = Vt(8980);
    let Dt = null,
      mt = 0;
    const dt = () => Dt,
      jt = tt => {
        null === tt && null === Dt || (Dt = null === tt ? null : {
          id: ++mt,
          holdMs: tt
        }, Ot.j.sw(qt.m, Dt))
      }
  },
  8980: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      e: () => Ot,
      i: () => qt,
      k: () => dt,
      m: () => jt,
      n: () => Ht,
      p: () => mt
    });
    const Ot = "controllerActionHintChanged",
      qt = "controllerActionWheelHintChanged",
      Dt = "controllerOpenChat",
      mt = "controllerSneakToggledChanged",
      dt = "controllerAttackLatchedChanged",
      jt = "controllerDropStackHoldChanged",
      Ht = "controllerPickBlockHintChanged"
  },
  8998: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      d: () => dt
    });
    var Ot = Vt(31),
      qt = Vt(8980);
    let Dt = !1;
    const mt = () => Dt,
      dt = tt => {
        tt !== Dt && (Dt = tt, Ot.j.sw(qt.n, Dt))
      }
  },
  9052: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      d: () => dt
    });
    var Ot = Vt(31),
      qt = Vt(8980);
    let Dt = !1;
    const mt = () => Dt,
      dt = tt => {
        tt !== Dt && (Dt = tt, Ot.j.sw(qt.p, Dt))
      }
  },
  8927: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor() {
        this.downAtMs = null
      }
      update(tt, et, Vt, Ot) {
        if (tt) return this.downAtMs = Vt, null;
        if (null === this.downAtMs) return null;
        const qt = Vt - this.downAtMs >= Ot;
        return et ? qt ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, qt ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8431: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      c: () => lt,
      e: () => dt,
      i: () => bt,
      j: () => Mt
    });
    var Ot = Vt(39),
      qt = Vt(8400),
      Dt = Vt(8377);
    const mt = (() => {
        try {
          return Vt(8436)
        } catch {
          return null
        }
      })(),
      dt = [...Dt.X, "LeftStick", "RightStick"],
      jt = new Map,
      Ht = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Xt = (new Set(Object.values(Ht)), {
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
      Qt = (tt, et) => {
        var Vt, Ot;
        return null !== (Vt = null === (Ot = Xt[Ht[tt]]) || void 0 === Ot ? void 0 : Ot[et]) && void 0 !== Vt ? Vt : 1
      },
      lt = (tt, et) => {
        const Vt = `./${Ht[tt]}/${et}.svg`;
        let Ot = jt.get(Vt);
        return void 0 === Ot && (Ot = mt ? mt(Vt) : "", jt.set(Vt, Ot)), Ot
      },
      Et = new Set,
      ft = [],
      wt = tt => {
        if (!Et.has(tt)) {
          Et.add(tt);
          for (const et of dt) {
            const Vt = lt(tt, et);
            if (Vt) {
              const tt = new Image;
              tt.crossOrigin = "anonymous", tt.src = Vt, ft.push(tt)
            }
          }
        }
      },
      yt = "controllerGlyphFamily";
    let Nt = null;
    const Mt = tt => {
        tt !== Nt && (Nt = tt, Ot.e.setItem(yt, tt), wt(tt))
      },
      bt = () => {
        const tt = Ot.e.getItem(yt);
        (0, qt.f)(tt) && tt !== Nt && (Nt = tt, wt(tt))
      }
  },
  9068: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => zt,
      f: () => ot
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(1554),
      mt = Vt(8390),
      dt = Vt(8375),
      jt = Vt(8414),
      Ht = Vt(8397);
    const Xt = {
        x: 0,
        y: 0,
        z: 0
      },
      Qt = Math.PI / 180,
      lt = tt => Math.hypot(tt.x, tt.y, tt.z),
      Et = (tt, et) => ({
        x: tt.x * et,
        y: tt.y * et,
        z: tt.z * et
      }),
      ft = (tt, et) => ({
        x: tt.x + et.x,
        y: tt.y + et.y,
        z: tt.z + et.z
      }),
      wt = (tt, et) => ({
        x: tt.x - et.x,
        y: tt.y - et.y,
        z: tt.z - et.z
      }),
      yt = tt => {
        const et = lt(tt);
        return 0 === et ? Xt : Et(tt, 1 / et)
      },
      Nt = tt => ({
        min: {
          ...tt
        },
        max: {
          ...tt
        }
      }),
      Mt = (tt, et) => ({
        min: {
          x: Math.min(tt.min.x, et.x),
          y: Math.min(tt.min.y, et.y),
          z: Math.min(tt.min.z, et.z)
        },
        max: {
          x: Math.max(tt.max.x, et.x),
          y: Math.max(tt.max.y, et.y),
          z: Math.max(tt.max.z, et.z)
        }
      }),
      bt = (tt, et) => tt.max.x - tt.min.x <= et && tt.max.y - tt.min.y <= et && tt.max.z - tt.min.z <= et;
    class Jt {
      constructor() {
        this.bias = Xt, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Xt, this.windowSec = 0
      }
      update(tt) {
        const et = this.gyroRange ? Mt(this.gyroRange, tt.gyro) : Nt(tt.gyro),
          Vt = tt.accel ? this.accelRange ? Mt(this.accelRange, tt.accel) : Nt(tt.accel) : null;
        if (!bt(et, 1) || Vt && !bt(Vt, .01)) return void this.restartWindow(tt);
        if (this.gyroRange = et, this.accelRange = Vt, this.sum = ft(this.sum, Et(tt.gyro, tt.dtSec)), this.windowSec += tt.dtSec, this.windowSec < 1) return;
        const Ot = Et(this.sum, 1 / this.windowSec);
        if (lt(Ot) > 5) return;
        const qt = wt(Ot, this.bias);
        let Dt = 0;
        !this.calibrated || this.windowSec >= 3 ? Dt = 1 : lt(qt) <= 1 && (Dt = Math.min(1, tt.dtSec / 1)), this.bias = ft(this.bias, Et(qt, Dt)), this.calibrated = this.calibrated || Dt > 0
      }
      correct(tt) {
        return wt(tt, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Xt, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Xt, this.windowSec = 0
      }
      restartWindow(tt) {
        this.gyroRange = Nt(tt.gyro), this.accelRange = tt.accel ? Nt(tt.accel) : null, this.sum = Xt, this.windowSec = 0
      }
    }
    class Ct {
      constructor() {
        this.down = null
      }
      update(tt, et, Vt) {
        const Ot = yt(Et(et, -1));
        if (!this.down) return this.down = Ot, Ot;
        const qt = Et(tt, Qt * Vt),
          Dt = this.down,
          mt = {
            x: Dt.x - (qt.y * Dt.z - qt.z * Dt.y),
            y: Dt.y - (qt.z * Dt.x - qt.x * Dt.z),
            z: Dt.z - (qt.x * Dt.y - qt.y * Dt.x)
          },
          dt = 0 === lt(Ot) ? 0 : Math.min(1, Vt / .25);
        var jt, Ht;
        return this.down = yt((Ht = dt, ft(jt = mt, Et(wt(Ot, jt), Ht)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class ut {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(tt, et, Vt) {
        const Ot = Math.hypot(tt, et),
          qt = Math.max(0, Math.min(1, (Ot - 2) / 2)),
          Dt = {
            yaw: tt * (1 - qt),
            pitch: et * (1 - qt),
            dtSec: Vt
          };
        for (this.entries.push(Dt), this.windowSec += Vt; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let mt = 0,
          dt = 0;
        for (const Ht of this.entries) mt += Ht.yaw * Ht.dtSec, dt += Ht.pitch * Ht.dtSec;
        const jt = this.windowSec > 0 ? {
          yaw: mt / this.windowSec,
          pitch: dt / this.windowSec
        } : {
          yaw: Dt.yaw,
          pitch: Dt.pitch
        };
        return {
          yaw: tt * qt + jt.yaw,
          pitch: et * qt + jt.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Kt {
      constructor() {
        this.calibrator = new Jt, this.gravity = new Ct, this.smoother = new ut
      }
      process(tt, et, Vt) {
        const Ot = Math.max(0, Math.min(.05, et));
        this.calibrator.update({
          ...tt,
          dtSec: Ot
        });
        const qt = this.calibrator.correct(tt.gyro);
        let Dt = qt.y;
        "player" === Vt && tt.accel && (Dt = ((tt, et) => {
          const Vt = tt.y * et.y + tt.z * et.z;
          return -Math.sign(Vt) * Math.min(1.41 * Math.abs(Vt), Math.hypot(tt.y, tt.z))
        })(qt, this.gravity.update(qt, tt.accel, Ot)));
        const mt = this.smoother.apply(Dt, qt.x, Ot),
          dt = ((tt, et) => {
            const Vt = Math.hypot(tt, et);
            if (Vt >= 1) return {
              yaw: tt,
              pitch: et
            };
            const Ot = Vt / 1;
            return {
              yaw: tt * Ot,
              pitch: et * Ot
            }
          })(mt.yaw, mt.pitch);
        return {
          yawDeg: dt.yaw * Ot,
          pitchDeg: dt.pitch * Ot
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
    const ht = (tt, et) => {
      var Vt, Ot, qt;
      const Dt = et * Qt,
        mt = null !== (Vt = tt.beta) && void 0 !== Vt ? Vt : 0,
        dt = null !== (Ot = tt.gamma) && void 0 !== Ot ? Ot : 0;
      return {
        x: mt * Math.cos(Dt) - dt * Math.sin(Dt),
        y: mt * Math.sin(Dt) + dt * Math.cos(Dt),
        z: null !== (qt = tt.alpha) && void 0 !== qt ? qt : 0
      }
    };
    var vt = Vt(9075);
    class Wt {
      constructor(tt, et, Vt) {
        this.hid = tt, this.sink = et, this.onControllersChanged = Vt, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = tt => {
          this.openController(tt.device).catch((tt => {
            console.warn("Could not open motion controller", tt)
          }))
        }, this.onDisconnect = tt => {
          this.opening.has(tt.device) && this.disconnectedWhileOpening.add(tt.device);
          const et = this.controllers.get(tt.device);
          et && (this.forget(et), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const tt = await this.hid.getDevices();
        for (const et of tt) await this.openController(et).catch((tt => {
          console.warn("Could not open motion controller", tt)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const tt of [...this.controllers.values()]) this.forget(tt);
        this.onControllersChanged()
      }
      async request() {
        const tt = await this.hid.requestDevice({
          filters: vt.e
        });
        let et = 0;
        for (const Vt of tt) await this.openController(Vt).catch((tt => {
          console.warn("Could not open motion controller", tt), et++
        }));
        return et
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((tt => null !== (0, vt.c)(tt.vendorId, tt.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((tt => tt.kind))
      }
      forget(tt) {
        tt.device.removeEventListener("inputreport", tt.onReport), this.controllers.get(tt.device) === tt && this.controllers.delete(tt.device)
      }
      async openController(tt) {
        const et = (0, vt.c)(tt.vendorId, tt.productId);
        if (!et || !this.running || this.controllers.has(tt) || this.opening.has(tt)) return;
        this.opening.add(tt);
        let Vt = !1;
        try {
          tt.opened || await tt.open()
        } finally {
          this.opening.delete(tt), Vt = this.disconnectedWhileOpening.delete(tt)
        }
        if (Vt) return void tt.close().catch((tt => {
          console.debug("Could not close an unplugged motion controller", tt)
        }));
        if (!this.running) return;
        const Ot = {
          device: tt,
          kind: et,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: tt => {
            this.onReport(Ot, tt)
          }
        };
        this.controllers.set(tt, Ot), tt.addEventListener("inputreport", Ot.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Ot)
        } catch (qt) {
          console.warn(`Could not turn on motion for ${et}`, qt), this.controllers.get(tt) === Ot && (this.forget(Ot), this.onControllersChanged())
        }
      }
      async enableMotion(tt) {
        let {
          device: et,
          kind: Vt
        } = tt;
        if ((0, vt.d)(Vt))
          for (const Ot of vt.o[Vt]) await et.receiveFeatureReport(Ot).catch((tt => {
            console.debug(`Motion controller feature report ${Ot} unavailable`, tt)
          }));
        else
          for (let Ot = 0; Ot < 2; Ot++)
            for (const {
                subcommand: tt,
                args: Vt
              }
              of vt.q) await et.sendReport(vt.u, (0, vt.b)(this.switchPacketCounter++, tt, Vt)), await new Promise((tt => {
              setTimeout(tt, 60)
            }))
      }
      onReport(tt, et) {
        const Vt = (0, vt.k)(tt.kind, et.reportId, et.data, tt.device.productId);
        if (!Vt) return;
        const Ot = null === tt.lastEventMs ? 0 : (et.timeStamp - tt.lastEventMs) / 1e3;
        tt.lastEventMs = et.timeStamp;
        let qt = Vt.dtSec;
        if (null !== qt && Ot > 0 && (qt = Math.max(.001, Math.min(.017, Ot / Vt.readings.length))), null === qt && null !== Vt.sensorClock && (0, vt.d)(tt.kind)) {
          const et = (0, vt.m)(tt.kind, tt.lastClock, Vt.sensorClock);
          tt.lastClock = Vt.sensorClock, qt = 0 === et ? null : et
        }
        if (tt.lastReadingMs = et.timeStamp, this.isPreferred(tt, et.timeStamp))
          for (const mt of Vt.readings) {
            var Dt;
            this.sink(mt, null !== (Dt = qt) && void 0 !== Dt ? Dt : Ot, `hid${tt.openedOrder}`)
          }
      }
      isPreferred(tt, et) {
        const Vt = tt => 1e6 * vt.i[tt.kind] + tt.openedOrder;
        for (const Ot of this.controllers.values())
          if (Ot !== tt && et - Ot.lastReadingMs < 500 && Vt(Ot) < Vt(tt)) return !1;
        return !0
      }
    }
    var St = Vt(106);
    const ct = () => DeviceMotionEvent,
      Rt = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, St.isMobile)(),
      It = () => {
        var tt;
        const et = null === (tt = window.screen.orientation) || void 0 === tt ? void 0 : tt.angle;
        return "number" === typeof et ? et : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Pt {
      constructor(tt, et) {
        this.sink = tt, this.onStateChanged = et, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((tt => {
            console.warn("Could not enable the motion sensor", tt)
          }))
        }, this.onMotion = tt => {
          const et = tt.rotationRate;
          if (!et || null === et.alpha && null === et.beta && null === et.gamma) return;
          const Vt = null === this.lastEventMs ? 0 : (tt.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = tt.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: ht(et, It()),
            accel: null
          }, Vt, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof ct().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const tt = ct().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof tt) return void this.listen();
        let et;
        this.disarmGestureRequest();
        try {
          et = await tt.call(DeviceMotionEvent)
        } catch (Vt) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Vt
        }
        this.wanted && ("granted" === et ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(tt) {
        this.state !== tt && (this.state = tt, this.onStateChanged())
      }
    }
    const Zt = "controllerGyroStatusChanged",
      Lt = {
        JR: 0,
        uR: 0
      },
      Ft = tt => {
        var et, Vt;
        return "undefined" === typeof document || (null === (et = null === (Vt = document.featurePolicy) || void 0 === Vt ? void 0 : Vt.allowsFeature(tt)) || void 0 === et || et)
      };
    class kt {
      constructor() {
        this.processor = new Kt, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = tt => {
          const et = tt.gyroAiming && dt.e.hasConnectedPad();
          var Vt, Ot;
          et !== this.phoneRunning && (this.phoneRunning = et, et ? null === (Vt = this.phone) || void 0 === Vt || Vt.start() : null === (Ot = this.phone) || void 0 === Ot || Ot.stop());
          if (tt.gyroAiming !== this.running) {
            var qt, Dt;
            if (this.running = tt.gyroAiming, this.running) null === (qt = this.hid) || void 0 === qt || qt.start().catch((tt => {
              console.warn("Could not open motion controllers", tt)
            }));
            else null === (Dt = this.hid) || void 0 === Dt || Dt.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          qt.j.sw(Zt, this.getStatus())
        };
        const tt = (() => {
            var tt;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (tt = navigator.hid) && void 0 !== tt ? tt : null
          })(),
          et = Ft("hid");
        this.hidBlocked = null !== tt && !et, this.hid = tt && et ? new Wt(tt, ((tt, et, Vt) => {
          this.lastHidReadingMs = performance.now(), this.feed(tt, et, "player", Vt)
        }), this.publishStatus) : null;
        const Vt = Ft("accelerometer") && Ft("gyroscope");
        this.phoneBlocked = Rt() && !Vt, this.phone = Rt() && Vt ? new Pt(((tt, et, Vt) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(tt, et, "local", Vt)
        }), this.publishStatus) : null, qt.j.subscribe(Ht.g, this.syncWithSettings), dt.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Ht.i)()), this.publishStatus()
        })), this.syncWithSettings((0, Ht.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var tt, et, Vt, Ot;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (tt = null === (et = this.hid) || void 0 === et ? void 0 : et.getConnectedKinds()) && void 0 !== tt ? tt : [],
          phoneMotion: null !== (Vt = null === (Ot = this.phone) || void 0 === Ot ? void 0 : Ot.getState()) && void 0 !== Vt ? Vt : "off",
          padConnected: dt.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var tt;
        await (null === (tt = this.phone) || void 0 === tt ? void 0 : tt.requestPermission())
      }
      drainLookDelta() {
        const tt = performance.now();
        tt - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = tt;
        const et = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Vt = (0, Ht.i)();
        return Vt.gyroAiming && (tt => {
          let {
            activation: et,
            isHeld: Vt,
            useButton: Ot,
            gyroButton: qt
          } = tt;
          return "always" === et || Vt("aiming" === et ? Ot : qt)
        })({
          activation: Vt.gyroActivation,
          isHeld: tt => jt.c.isButtonHeld(tt),
          useButton: (0, mt.i)("use"),
          gyroButton: Vt.gyroButton
        }) ? ((tt, et) => ({
          JR: -tt.yawDeg * et * Qt,
          uR: -tt.pitchDeg * et * Qt
        }))(et, Vt.gyroSensitivity) : Lt
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(tt, et) {
        this.feed(tt, et, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(tt, et, Vt, Ot) {
        this.source !== Ot && (this.processor.reset(), this.source = Ot);
        const qt = this.processor.process(tt, et, Vt);
        this.pendingYawDeg += qt.yawDeg, this.pendingPitchDeg += qt.pitchDeg
      }
    }
    let Gt = null;
    const zt = () => (Gt || (Gt = new kt), Gt),
      ot = () => {
        const [tt, et] = (0, Ot.useState)((() => zt().getStatus()));
        return (0, Dt.f)(Zt, et), (0, Ot.useEffect)((() => {
          et(zt().getStatus())
        }), []), tt
      }
  },
  9075: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ct,
      c: () => jt,
      d: () => Ot,
      e: () => dt,
      h: () => Ht,
      i: () => Xt,
      k: () => Mt,
      m: () => yt,
      o: () => Kt,
      q: () => ut,
      u: () => bt
    });
    const Ot = tt => "dualShock4" === tt || "dualSense" === tt,
      qt = 1356,
      Dt = 1406,
      mt = [{
        vendorId: qt,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: qt,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: qt,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: qt,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: qt,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Dt,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Dt,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Dt,
        productId: 8199,
        kind: "joyConRight"
      }],
      dt = mt.map((tt => {
        let {
          vendorId: et,
          productId: Vt
        } = tt;
        return {
          vendorId: et,
          productId: Vt
        }
      })),
      jt = (tt, et) => {
        var Vt, Ot;
        return null !== (Vt = null === (Ot = mt.find((Vt => Vt.vendorId === tt && Vt.productId === et))) || void 0 === Ot ? void 0 : Ot.kind) && void 0 !== Vt ? Vt : null
      },
      Ht = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Xt = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Qt = 2e3 / 32767,
      lt = 1 / 8192,
      Et = 936 / 13371,
      ft = (tt, et, Vt) => ({
        x: tt.getInt16(et, !0) * Vt,
        y: tt.getInt16(et + 2, !0) * Vt,
        z: tt.getInt16(et + 4, !0) * Vt
      }),
      wt = tt => 0 === tt.x && 0 === tt.y && 0 === tt.z,
      yt = (tt, et, Vt) => null === et ? null : "dualShock4" === tt ? 16 * (Vt - et & 65535) / 3 / 1e6 : (Vt - et >>> 0) / 3 / 1e6,
      Nt = (tt, et) => "joyConRight" === et ? {
        x: tt.y,
        y: -tt.z,
        z: -tt.x
      } : {
        x: -tt.y,
        y: tt.z,
        z: -tt.x
      },
      Mt = (tt, et, Vt, qt) => Ot(tt) ? ((tt, et, Vt, Ot) => {
        const qt = ((tt, et, Vt) => "dualShock4" === tt ? 1 === et && Vt >= 63 ? 0 : 17 === et && Vt >= 65 ? 2 : null : 1 === et && Vt >= 62 ? 0 : 49 === et && Vt >= 63 ? 1 : null)(tt, et, Vt.byteLength);
        if (null === qt) return null;
        if (2976 === Ot && 1 === et && 0 !== (4 & Vt.getUint8(30))) return null;
        const Dt = qt + ("dualShock4" === tt ? 12 : 15),
          mt = ft(Vt, Dt, Qt),
          dt = ft(Vt, Dt + 6, lt);
        return wt(mt) && wt(dt) ? null : {
          readings: [{
            gyro: mt,
            accel: dt
          }],
          dtSec: null,
          sensorClock: "dualShock4" === tt ? Vt.getUint16(qt + 9, !0) : Vt.getUint32(qt + 27, !0)
        }
      })(tt, et, Vt, qt) : ((tt, et, Vt) => {
        if (48 !== et && 49 !== et || Vt.byteLength < 48) return null;
        const Ot = [];
        for (let qt = 0; qt < 3; qt++) {
          const et = ft(Vt, 12 + 12 * qt, 244e-6),
            Dt = ft(Vt, 18 + 12 * qt, Et);
          if (wt(Dt) && wt(et)) return null;
          Ot.push({
            gyro: Nt(Dt, tt),
            accel: Nt(et, tt)
          })
        }
        return {
          readings: Ot,
          dtSec: .005,
          sensorClock: null
        }
      })(tt, et, Vt),
      bt = 1,
      Jt = [0, 1, 64, 64, 0, 1, 64, 64],
      Ct = (tt, et, Vt) => new Uint8Array([15 & tt, ...Jt, et, ...Vt]),
      ut = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Kt = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8420: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => kt,
      e: () => it,
      g: () => ut,
      k: () => Et.j,
      m: () => ot,
      q: () => zt,
      u: () => Kt,
      v: () => rt,
      w: () => Et.q,
      A: () => Et.v,
      E: () => Yt,
      G: () => Et.C,
      H: () => Pt
    });
    var Ot = Vt(63),
      qt = Vt(26),
      Dt = Vt(31),
      mt = Vt(1554),
      dt = Vt(1387),
      jt = Vt(8397),
      Ht = Vt(8426),
      Xt = Vt(8383),
      Qt = Vt(8375),
      lt = Vt(8431),
      Et = Vt(1492),
      ft = Vt(8377),
      wt = Vt(8859),
      yt = Vt(4489),
      Nt = Vt(129);
    class Mt {
      constructor(tt) {
        this.deps = tt, this.pads = new Map
      }
      observe(tt, et, Vt) {
        if (!this.deps.touchOnly) return;
        const Ot = this.pads.get(et.id);
        "proven" !== Ot && Vt ? (this.pads.set(et.id, "proven"), void 0 !== Ot && this.deps.onReleased(et, tt, tt.timestampMs - Ot)) : void 0 === Ot && (this.pads.set(et.id, tt.timestampMs), this.deps.onHeld(et, tt)), this.deps.setMayHide("proven" === this.pads.get(et.id))
      }
    }
    const bt = tt => tt.values.flatMap(((tt, et) => tt >= ft.O ? [String(et)] : [])).join(",") || "none",
      Jt = (tt, et, Ot, qt, Dt) => {
        const mt = (0, Et.d)(),
          dt = document.visibilityState,
          jt = document.hasFocus();
        Promise.all([Promise.resolve().then((() => Vt(2990))), Promise.resolve().then((() => Vt(1167))), Promise.resolve().then((() => Vt(153)))]).then((Vt => {
          let [{
            logControllerHudHoldToGtag: Ht
          }, {
            logClientLineFromEveryPage: Xt
          }, {
            siteUsed: Qt
          }] = Vt;
          Ht(tt, et.family, null === Dt ? void 0 : Math.round(Dt / 1e3)), Xt(`touch HUD pad ${tt}`, Ct(et, Ot, qt, Dt, mt, dt, jt, Qt))
        }), (() => {}))
      },
      Ct = (tt, et, Vt, Ot, qt, Dt, mt, dt) => {
        var jt;
        const Ht = {
          pad_id: tt.id.slice(0, 120),
          pad_family: tt.family,
          pad_mapping: null !== (jt = null === Vt || void 0 === Vt ? void 0 : Vt.mapping) && void 0 !== jt ? jt : "unread",
          pad_axes: Vt ? String(Vt.axes.length) : "unread",
          pad_buttons: Vt ? String(Vt.buttons.length) : "unread",
          pressed: bt(et),
          ms_since_touch: null === qt ? "none" : String(Math.round(et.timestampMs - qt)),
          visibility: Dt,
          focused: String(mt),
          site: dt
        };
        return null !== Ot && (Ht.held_ms = String(Math.round(Ot))), Ht
      };
    const ut = tt => !tt.repeat && !(0, wt.b)(tt.key),
      Kt = "PadHidesCursor";
    let ht = !1;
    const vt = tt => {
        tt !== ht && (ht = tt, document.documentElement.classList.toggle(Kt, tt))
      },
      Wt = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(tt) {
          let et = !1,
            Vt = !1;
          tt.values.forEach(((tt, Ot) => {
            const qt = tt >= (this.buttonsDown[Ot] ? ft.R : ft.O);
            qt && !this.buttonsDown[Ot] && (et = !0, Vt = !0), this.buttonsDown[Ot] = qt
          }));
          return [tt.leftStick, tt.rightStick].forEach(((tt, Ot) => {
            const qt = this.stickAnchors[Ot];
            Math.hypot(tt.x, tt.y) < (qt ? ft.R : .3) ? this.stickAnchors[Ot] = null : (!qt || Math.hypot(tt.x - qt.x, tt.y - qt.y) >= .3) && (this.stickAnchors[Ot] = {
              x: tt.x,
              y: tt.y
            }, et = !0, Vt ||= !qt)
          })), et && (this.lastActivityMs = tt.timestampMs), this.onlyMovedOn = et && !Vt, et
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(tt) {
          return !(tt - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((tt => tt)) || this.stickAnchors.some((tt => null !== tt)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((tt => null !== tt))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      St = (ct = () => Qt.e.getActiveGamepad(), new Mt({
        touchOnly: "touchOnly" === (0, Nt.d)(),
        setMayHide: Et.s,
        onHeld: (tt, et) => {
          Jt("Pd", tt, et, ct(), null)
        },
        onReleased: (tt, et, Vt) => {
          Jt("released", tt, et, ct(), Vt)
        }
      }));
    var ct;
    let Rt = null,
      It = !1;
    const Pt = () => It;
    let Zt = null,
      Lt = !1,
      Ft = null;
    const kt = () => Ft;
    let Gt = !1;
    const zt = (tt, et) => {
        if (!Wt.observe(tt)) return !1;
        if (St.observe(tt, et, Wt.isStickOffRest()), Gt && Wt.wasOnlyMoveOn() && !(0, Et.j)()) return !1;
        Gt = !1, It = !1;
        const Vt = !(0, Et.j)();
        return Vt && (Rt = tt, Ft = !ht && Lt && Zt ? {
          ...Zt
        } : null), Lt = !1, (0, Et.q)("gamepad"), vt(!0), (0, lt.j)((0, jt.l)()), Vt
      },
      ot = tt => !(0, Et.j)() || tt === Rt,
      rt = () => {
        Wt.reset()
      },
      Ut = () => {
        const tt = qt.b.get("activeInputDevice"),
          et = "gamepad" === tt ? Qt.e.getActivePad() : null;
        return {
          device: tt,
          inGame: (0, dt.r)(),
          padMovesMouse: null !== et && (0, Xt.f)(et.id)
        }
      },
      At = tt => {
        document.pointerLockElement ? Zt = null : (Zt ??= {
          x: 0,
          y: 0
        }, Zt.x = tt.clientX, Zt.y = tt.clientY)
      },
      it = () => {
        const tt = new yt.c,
          et = et => {
            tt.reset(), Gt = !1, (0, Et.q)(et)
          },
          Vt = tt => {
            if (tt.isTrusted) {
              if (tt instanceof KeyboardEvent) {
                if ((0, Et.p)(tt), !ut(tt)) return;
                It = !0
              }
              if (tt instanceof PointerEvent && "touch" === tt.pointerType) return Zt = null, void et("touch");
              tt instanceof PointerEvent && (At(tt), Lt = !0), ("pointerdown" !== tt.type || (tt => {
                let {
                  device: et,
                  inGame: Vt,
                  padMovesMouse: Ot
                } = tt;
                return !("gamepad" === et && Ot && Vt)
              })(Ut())) && et("keyboardMouse")
            }
          },
          Ot = tt => {
            tt.isTrusted && (Zt = null, et("touch"))
          },
          mt = tt => {
            tt.isTrusted && "touch" !== tt.pointerType && !tt.relatedTarget && (Zt = null)
          },
          dt = Vt => {
            if (!Vt.isTrusted || "touch" === Vt.pointerType) return;
            At(Vt);
            const Ot = Vt.movementX || 0,
              Dt = Vt.movementY || 0;
            if (0 === Ot && 0 === Dt) return;
            if (Lt = !0, vt(!1), "keyboardMouse" === qt.b.get("activeInputDevice")) return;
            const mt = Wt.isHolding(Vt.timeStamp),
              dt = Ut(),
              jt = (tt => {
                let {
                  device: et,
                  inGame: Vt,
                  padMovesMouse: Ot,
                  padHolding: qt
                } = tt;
                return ("gamepad" !== et || !Ot) && "keyboardMouse" !== et && (Vt || !qt)
              })({
                ...dt,
                inGame: dt.inGame && (0, Ht.e)(),
                padHolding: mt
              });
            jt && tt.add(Ot, Dt, Vt.timeStamp) && (et("keyboardMouse"), Gt = Wt.isStickOffRest())
          },
          jt = tt => {
            vt("gamepad" === tt)
          },
          Xt = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Vt, Xt), window.addEventListener("pointerdown", Vt, Xt), window.addEventListener("wheel", Vt, Xt), window.addEventListener("touchstart", Ot, Xt), window.addEventListener("pointermove", dt, Xt), window.addEventListener("pointerout", mt, Xt);
        const Qt = Dt.j.subscribe("appManagerUpdated|activeInputDevice", jt);
        return jt(qt.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Vt, Xt), window.removeEventListener("pointerdown", Vt, Xt), window.removeEventListener("wheel", Vt, Xt), window.removeEventListener("touchstart", Ot, Xt), window.removeEventListener("pointermove", dt, Xt), window.removeEventListener("pointerout", mt, Xt), Zt = null, Dt.j.unsubscribe(Qt), vt(!1)
        }
      },
      Yt = () => {
        const [tt, et] = (0, Ot.useState)(jt.l);
        return (0, mt.f)(jt.d, (() => {
          et((0, jt.l)())
        })), (0, mt.f)(Qt.d, (() => {
          et((0, jt.l)())
        })), tt
      }
  },
  8400: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      f: () => qt
    });
    const Ot = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      qt = tt => Ot.includes(tt)
  },
  8908: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      g: () => Dt,
      k: () => jt,
      l: () => dt
    });
    var Ot = Vt(1554),
      qt = Vt(1513);
    const Dt = "controllerInventoryCursorChanged",
      mt = {
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
      dt = () => {
        var tt, et;
        return (0, Ot.h)(Dt, null !== (tt = null === (et = (0, qt.g)()) || void 0 === et ? void 0 : et.getInventoryCursorState()) && void 0 !== tt ? tt : mt)
      },
      jt = () => {
        var tt, et;
        return null !== (tt = null === (et = (0, qt.g)()) || void 0 === et ? void 0 : et.isPadSteppingSlots()) && void 0 !== tt && tt
      }
  },
  8899: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      i: () => dt,
      m: () => jt,
      o: () => mt,
      p: () => Dt,
      r: () => Xt,
      t: () => Qt
    });
    let Ot = null;
    const qt = new Set,
      Dt = tt => (Ot = tt, () => {
        if (Ot === tt) {
          Ot = null;
          for (const tt of qt) tt()
        }
      }),
      mt = tt => (qt.add(tt), () => {
        qt.delete(tt)
      }),
      dt = () => Ot,
      jt = () => null !== Ot;
    let Ht = null;
    const Xt = tt => {
        Ht = tt
      },
      Qt = () => {
        const tt = Ht;
        return Ht = null, tt
      },
      lt = (tt, et) => {
        var Vt, Ot;
        return null !== (Vt = null !== (Ot = tt.find((tt => tt.element === et))) && void 0 !== Ot ? Ot : tt.find((tt => tt.element.contains(et)))) && void 0 !== Vt ? Vt : null
      }
  },
  8912: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => mt
    });
    var Ot = Vt(63);
    const qt = new WeakMap,
      Dt = tt => {
        var et, Vt;
        return null !== (et = null === (Vt = qt.get(tt)) || void 0 === Vt ? void 0 : Vt.current) && void 0 !== et ? et : null
      },
      mt = (tt, et) => {
        const Vt = (0, Ot.useRef)(et);
        Vt.current = et;
        const Dt = (0, Ot.useRef)(null);
        (0, Ot.useEffect)((() => {
          const et = tt.current,
            Ot = Dt.current;
          et !== Ot && (Ot && qt.get(Ot) === Vt && qt.delete(Ot), Dt.current = et, et && qt.set(et, Vt))
        })), (0, Ot.useEffect)((() => () => {
          const tt = Dt.current;
          tt && qt.get(tt) === Vt && qt.delete(tt), Dt.current = null
        }), [])
      }
  },
  9050: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      e: () => Ht,
      f: () => Qt,
      j: () => Xt,
      l: () => jt,
      n: () => Et
    });
    var Ot = Vt(31),
      qt = Vt(2096),
      Dt = Vt(1513),
      mt = Vt(1492);
    const dt = tt => {
        var et, Vt;
        return (0, mt.j)() && null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getGlyphForNoaAction(tt)) && void 0 !== et ? et : null
      },
      jt = "controllerGlyph:",
      Ht = tt => {
        var et, Vt;
        return null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getPadGlyphIconName(tt)) && void 0 !== et ? et : `${jt}xbox/${tt}`
      },
      Xt = tt => tt.startsWith(jt),
      Qt = tt => {
        var et, Vt;
        return Xt(tt) && null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getPadGlyphIconUrl(tt)) && void 0 !== et ? et : null
      },
      lt = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", mt.c, qt.f, qt.e],
      Et = tt => {
        const et = lt.map((et => Ot.j.subscribe(et, tt)));
        return () => {
          for (const tt of et) Ot.j.unsubscribe(tt)
        }
      }
  },
  8880: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Ot
    });
    const Ot = "controllerOpenKeyboard",
      qt = "controllerKeyboardVisible"
  },
  8426: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      e: () => Xt,
      g: () => jt,
      i: () => dt
    });
    var Ot = Vt(26),
      qt = Vt(1732),
      Dt = Vt(1832);
    const mt = new Map,
      dt = (tt, et) => (mt.has(tt) && console.warn(`Gameplay blocker "${tt}" registered twice; the newer one replaces it.`), mt.set(tt, et), () => {
        mt.get(tt) === et && mt.delete(tt)
      }),
      jt = () => (0, Dt.c)(document.activeElement),
      Ht = function() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [et, Vt] of mt)
          if (!tt.includes(et) && Vt()) return et;
        return null
      },
      Xt = function() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Ot.b.get("gameState") && (!(0, qt.q)() && (!jt() && null === Ht(tt)))
      }
  },
  8377: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => Qt,
      D: () => bt,
      F: () => Rt,
      H: () => Jt,
      J: () => Nt,
      L: () => yt,
      M: () => Ht,
      O: () => lt,
      R: () => Et,
      V: () => qt,
      X: () => Ot,
      _: () => ut,
      c: () => Pt,
      cb: () => St,
      e: () => ct,
      eb: () => It,
      hb: () => Ct,
      i: () => Xt,
      k: () => jt,
      m: () => dt,
      p: () => ht,
      t: () => Mt,
      v: () => Kt,
      y: () => Dt
    });
    const Ot = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      qt = Ot.length,
      Dt = function() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(qt).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: tt
        }
      },
      mt = Object.fromEntries(Ot.map(((tt, et) => [tt, et]))),
      dt = tt => mt[tt],
      jt = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Ot = Math.hypot(tt.x, tt.y);
        if (Ot <= et) return {
          x: 0,
          y: 0
        };
        const qt = Math.min(1, (Ot - et) / Math.max(1e-4, Vt - et));
        return {
          x: tt.x / Ot * qt,
          y: tt.y / Ot * qt
        }
      },
      Ht = ["exponential", "linear", "boost"],
      Xt = (tt, et) => {
        const Vt = Math.hypot(tt.x, tt.y);
        if (0 === Vt) return {
          x: 0,
          y: 0
        };
        const Ot = ((tt, et) => {
          const Vt = Math.max(0, Math.min(1, tt));
          return "linear" === et ? Vt : Vt * Vt
        })(Vt, et);
        return {
          x: tt.x / Vt * Ot,
          y: tt.y / Vt * Ot
        }
      },
      Qt = .5,
      lt = .3,
      Et = .2,
      ft = dt("LT"),
      wt = dt("RT"),
      yt = tt => tt === ft || tt === wt,
      Nt = (tt, et) => {
        const Vt = dt(et);
        return yt(Vt) ? tt[Vt] > .35 : tt[Vt] >= Qt
      },
      Mt = (tt, et) => tt.map(((tt, Vt) => yt(Vt) ? et[Vt] ? tt > .35 : tt >= .55 : tt >= Qt)),
      bt = ["Up", "Down", "Left", "Right"],
      Jt = tt => bt.includes(tt),
      Ct = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(tt.x, tt.y) < et ? null : Math.abs(tt.x) > Math.abs(tt.y) ? tt.x > 0 ? "Right" : "Left" : tt.y > 0 ? "Down" : "Up"
      },
      ut = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Kt = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      ht = ["default", "slow", "off"],
      vt = 800,
      Wt = 250,
      St = (tt, et) => "off" === et ? null : "slow" === et ? {
        initialDelayMs: Math.max(tt.initialDelayMs, vt),
        intervalMs: Math.max(tt.intervalMs, Wt)
      } : tt;
    class ct {
      constructor(tt) {
        this.readTiming = tt, this.Pd = !1, this.timing = null, this.nextFireMs = 0
      }
      update(tt, et) {
        return tt ? this.Pd ? !!(this.timing && et >= this.nextFireMs) && (this.nextFireMs = et + this.timing.intervalMs, !0) : (this.Pd = !0, this.timing = this.readTiming(), this.nextFireMs = et + (null !== (Vt = null === (Ot = this.timing) || void 0 === Ot ? void 0 : Ot.initialDelayMs) && void 0 !== Vt ? Vt : 0), !0) : (this.Pd = !1, !1);
        var Vt, Ot
      }
      reset() {
        this.Pd = !1
      }
    }
    const Rt = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      It = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Pt {
      constructor(tt) {
        this.timer = tt, this.direction = null
      }
      update(tt, et) {
        return tt !== this.direction && (this.timer.reset(), this.direction = tt), this.timer.update(null !== tt, et) ? tt : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8919: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      f: () => Dt
    });
    let Ot = -1 / 0;
    const qt = () => {
        Ot = performance.now()
      },
      Dt = tt => performance.now() - Ot < tt
  },
  8861: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      f: () => Dt
    });
    var Ot = Vt(8397),
      qt = Vt(8377);
    const Dt = tt => (0, qt.cb)(tt, (0, Ot.i)().buttonRepeat),
      mt = tt => new qt.e((() => Dt(tt)))
  },
  8411: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      e: () => Dt,
      i: () => dt
    });
    var Ot = Vt(31),
      qt = Vt(8397);
    const Dt = (tt, et) => "OpenShop" === tt ? "shop" === et : "OpenLobbyLeaderboard" !== tt || "leaderboard" === et;
    let mt = !1;
    const dt = tt => {
        tt !== mt && (mt = tt, Ot.j.sw(qt.d, (0, qt.i)()))
      },
      jt = () => ((tt, et) => "shop" === tt && et ? "shop" : "leaderboard")((0, qt.i)().leaderboardButton, mt)
  },
  8405: (tt, et, Vt) => {
    Vt.d(et, {
      Bb: () => ht,
      C: () => Xt,
      G: () => jt,
      K: () => dt,
      M: () => Ct,
      P: () => lt,
      T: () => Et,
      U: () => Qt,
      X: () => Jt,
      _: () => Ht,
      ab: () => Nt,
      db: () => Wt,
      e: () => Lt,
      fb: () => bt,
      h: () => kt,
      jb: () => wt,
      k: () => St,
      n: () => mt,
      nb: () => yt,
      p: () => vt,
      r: () => Kt,
      rb: () => ft,
      sb: () => Mt,
      v: () => Pt,
      vb: () => It,
      wb: () => Dt,
      xb: () => ut,
      y: () => Zt,
      zb: () => Ft
    });
    var Ot = Vt(8392),
      qt = Vt(8377);
    const Dt = {
        min: 25,
        max: 500,
        step: 5
      },
      mt = {
        min: 25,
        max: 100,
        step: 5
      },
      dt = {
        min: 0,
        max: .4,
        step: .01
      },
      jt = {
        min: 25,
        max: 300,
        step: 5
      },
      Ht = {
        min: .5,
        max: 6,
        step: .1
      },
      Xt = (tt, et) => {
        if (!Number.isFinite(tt)) return et.min;
        const Vt = et.min + Math.round((tt - et.min) / et.step) * et.step,
          Ot = Math.min(et.max, Math.max(et.min, Vt));
        return Math.round(1e3 * Ot) / 1e3
      },
      Qt = tt => `${Math.round(tt)}%`,
      lt = tt => Qt(100 * tt),
      Et = tt => `${tt.toFixed(1)}\xd7`,
      ft = [{
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
      wt = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      yt = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Nt = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Mt = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      bt = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Jt = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Ct = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      ut = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Kt = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      ht = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      vt = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Wt = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      St = {
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
      ct = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Rt = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      It = Ot.e.map((tt => {
        let {
          group: et,
          actions: Vt
        } = tt;
        const Ot = Vt.map((tt => ({
          kind: "action",
          action: tt
        })));
        return {
          titleKey: ct[et],
          rows: "gameplay" === et ? [...Rt, ...Ot] : Ot
        }
      })),
      Pt = qt.X.filter((tt => "Home" !== tt)),
      Zt = 1e4;
    class Lt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = tt, this.openButton = et, this.accepts = Vt, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(tt, et) {
        var Vt;
        this.updateIgnored(tt, et);
        const Ot = et - (null !== (Vt = this.startMs) && void 0 !== Vt ? Vt : et) >= 250;
        for (const qt of Pt)
          if (qt !== this.cancelButton && Ot && !this.ignoredUntilMs.has(qt) && tt.wasPressed(qt) && this.accepts(qt)) return {
            kind: "bind",
            button: qt
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (tt.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = et
        }
        return null === this.cancelDownAtMs ? null : tt.isHeld(this.cancelButton) && et - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : tt.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(tt) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (tt - this.cancelDownAtMs) / 700)
      }
      updateIgnored(tt, et) {
        if (null === this.startMs) {
          this.startMs = et;
          for (const et of Pt) tt.isDown(et) && this.ignoredUntilMs.set(et, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, et + 250)
        }
        for (const [Vt, Ot] of this.ignoredUntilMs) {
          const qt = tt.isDown(Vt);
          Ot === 1 / 0 ? qt || Vt !== this.openButton ? qt || this.ignoredUntilMs.delete(Vt) : this.ignoredUntilMs.set(Vt, et + 250) : et >= Ot ? this.ignoredUntilMs.delete(Vt) : qt && this.ignoredUntilMs.set(Vt, 1 / 0)
        }
      }
    }
    const Ft = 6e3;
    class kt {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(tt, et) {
        let {
          pressed: Vt,
          Pd: Ot
        } = tt;
        if (Vt) {
          const tt = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== tt && et - tt < 1500 ? [...this.pressesAtMs, et] : [et], this.pressesAtMs.length >= 3) return 1
        }
        return Ot ? (this.downAtMs ??= et, Math.min(1, (et - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  5194: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt
    });
    var Ot = Vt(63);
    const qt = new WeakMap,
      Dt = tt => {
        var et;
        const Vt = tt.closest("[data-pad-slider]");
        return Vt && null !== (et = qt.get(Vt)) && void 0 !== et ? et : null
      },
      mt = (tt, et) => {
        const Vt = (0, Ot.useRef)(et);
        Vt.current = et, (0, Ot.useEffect)((() => {
          if (tt.current) return ((tt, et) => (qt.set(tt, et), () => {
            qt.get(tt) === et && qt.delete(tt)
          }))(tt.current, {
            adjust: tt => {
              Vt.current.adjust(tt)
            },
            setFraction: tt => {
              Vt.current.setFraction(tt)
            },
            endDrag: () => {
              Vt.current.endDrag()
            }
          })
        }), [tt])
      }
  },
  9039: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => mt,
      h: () => Dt,
      i: () => Ot,
      l: () => dt,
      o: () => Ht,
      r: () => Xt
    });
    const Ot = "controllerActionWheelOpen",
      qt = "controllerActionWheelAim",
      Dt = "controllerActionWheelCommit",
      mt = "controllerActionWheelClose",
      dt = "controllerActionWheelPick";
    let jt = !1;
    const Ht = () => jt,
      Xt = tt => {
        jt = tt
      }
  },
  9037: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      e: () => qt
    });
    let Ot = 0;
    const qt = () => {
        Ot++
      },
      Dt = () => Ot
  },
  8929: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      d: () => qt,
      e: () => mt,
      g: () => Dt,
      j: () => Ot,
      n: () => Ht
    });
    const Ot = "controllerQuickChatWheelOpen",
      qt = "controllerQuickChatWheelAim",
      Dt = "controllerQuickChatWheelCommit",
      mt = "controllerQuickChatWheelClose";
    let dt = !1;
    const jt = () => dt,
      Ht = tt => {
        dt = tt
      }
  },
  8952: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => qt
    });
    var Ot = Vt(31);
    const qt = "localBlockBroken";

    function Dt() {
      return {
        onPlayerChangeBlock(tt, et, Vt, Dt, mt, dt) {
          "Air" === dt && Ot.j.sw(qt)
        }
      }
    }
  },
  9101: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => jt
    });
    var Ot = Vt(26),
      qt = Vt(1423),
      Dt = Vt(106);
    const mt = {
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

    function dt() {
      return (0, Dt.isMobile)() && "function" === typeof navigator.vibrate
    }
    const jt = new class {
      constructor(tt) {
        this.deps = tt, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(tt, et) {
        var Vt;
        if (!this.deps.enabled()) return;
        const Ot = mt[tt],
          qt = null !== et && void 0 !== et ? et : Ot.pattern;
        if (null === qt) return void console.warn("No vibration pattern for", tt);
        const Dt = this.deps.now();
        Dt - this.lastAnyAt < 40 && Ot.priority < this.playingPriority || Dt - (null !== (Vt = this.lastAt.get(tt)) && void 0 !== Vt ? Vt : -1 / 0) < Ot.minGapMs || Dt < this.playingUntil && Ot.priority < this.playingPriority || (this.lastAt.set(tt, Dt), this.lastAnyAt = Dt, this.playingUntil = Dt + qt.reduce(((tt, et) => tt + et), 0), this.playingPriority = Ot.priority, this.deps.vibrate(qt))
      }
    }({
      vibrate: tt => {
        navigator.vibrate([...tt])
      },
      now: () => performance.now(),
      enabled: () => dt() && Ot.b.get("isTouchScreen") && Ot.b.get("clientEscMenuOptions").vibration && !(0, qt.d)()
    })
  },
  8943: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(1345);

    function qt(tt, et) {
      var Vt, qt;
      try {
        const Vt = (0, Ot.e)();
        if ("function" === typeof Vt) {
          const Ot = new Vt(tt, et);
          if (Ot.type === tt) return Ot
        }
      } catch {}
      const Dt = document.createEvent("Event");
      return Dt.initEvent(tt, null !== (Vt = null === et || void 0 === et ? void 0 : et.bubbles) && void 0 !== Vt && Vt, null !== (qt = null === et || void 0 === et ? void 0 : et.cancelable) && void 0 !== qt && qt), Dt
    }
  },
  9005: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(9014),
      qt = Vt(710),
      Dt = Vt(153);

    function mt(tt) {
      var et, Vt;
      if ((0, qt.B)(tt)) return !0;
      const mt = null !== (et = null === (Vt = Dt.siteUsedData[Dt.siteUsed]) || void 0 === Vt ? void 0 : Vt.adConfig.showRewardedAds) && void 0 !== et && et;
      for (const qt in tt) {
        const et = tt[qt];
        if (null !== et && void 0 !== et && et.items)
          for (const tt in et.items)
            if ((0, Ot.m)(et.items[tt], mt)) return !1
      }
      return !0
    }
  },
  9014: (tt, et, Vt) => {
    function Ot(tt, et) {
      return !tt.hidden && (et || !tt.isRewardedAd)
    }

    function qt(tt) {
      return "object" === typeof tt ? tt.option : tt
    }

    function Dt(tt, et) {
      var Vt;
      if ("dropdown" === (null === (Vt = tt.userInput) || void 0 === Vt ? void 0 : Vt.type) && "object" === typeof tt.userInput.dropdownOptions[0]) {
        for (const Vt of tt.userInput.dropdownOptions)
          if (qt(Vt) === et) return "object" === typeof Vt ? Vt.cost : tt.cost;
        console.error("Didn't find matching option for dropdown item. Item:", tt, "input:", et)
      }
      return tt.cost
    }

    function mt(tt, et, Vt) {
      var Ot;
      const qt = null !== (Ot = Vt.excludedPlayers) && void 0 !== Ot ? Ot : [et];
      return tt.filter((tt => !qt.includes(tt)))
    }
    Vt.d(et, {
      d: () => Dt,
      e: () => qt,
      i: () => mt,
      m: () => Ot
    })
  },
  9042: () => {},
  8436: (tt, et, Vt) => {
    var Ot = {
      "./nintendo/A.svg": 8438,
      "./nintendo/B.svg": 8447,
      "./nintendo/Down.svg": 8455,
      "./nintendo/Home.svg": 8459,
      "./nintendo/LB.svg": 8464,
      "./nintendo/LS.svg": 8467,
      "./nintendo/LT.svg": 8475,
      "./nintendo/Left.svg": 8477,
      "./nintendo/LeftStick.svg": 8479,
      "./nintendo/Menu.svg": 8486,
      "./nintendo/RB.svg": 8491,
      "./nintendo/RS.svg": 8498,
      "./nintendo/RT.svg": 8501,
      "./nintendo/Right.svg": 8510,
      "./nintendo/RightStick.svg": 8514,
      "./nintendo/Up.svg": 8523,
      "./nintendo/View.svg": 8530,
      "./nintendo/X.svg": 8533,
      "./nintendo/Y.svg": 8541,
      "./playstation/A.svg": 8547,
      "./playstation/B.svg": 8552,
      "./playstation/Down.svg": 8561,
      "./playstation/Home.svg": 8567,
      "./playstation/LB.svg": 8571,
      "./playstation/LS.svg": 8574,
      "./playstation/LT.svg": 8576,
      "./playstation/Left.svg": 8584,
      "./playstation/LeftStick.svg": 8589,
      "./playstation/Menu.svg": 8595,
      "./playstation/RB.svg": 8601,
      "./playstation/RS.svg": 8604,
      "./playstation/RT.svg": 8606,
      "./playstation/Right.svg": 8609,
      "./playstation/RightStick.svg": 8614,
      "./playstation/Up.svg": 8621,
      "./playstation/View.svg": 8630,
      "./playstation/X.svg": 8638,
      "./playstation/Y.svg": 8641,
      "./steamdeck/A.svg": 8650,
      "./steamdeck/B.svg": 8653,
      "./steamdeck/Down.svg": 8655,
      "./steamdeck/Home.svg": 8664,
      "./steamdeck/LB.svg": 8666,
      "./steamdeck/LS.svg": 8674,
      "./steamdeck/LT.svg": 8676,
      "./steamdeck/Left.svg": 8683,
      "./steamdeck/LeftStick.svg": 8688,
      "./steamdeck/Menu.svg": 8691,
      "./steamdeck/RB.svg": 8696,
      "./steamdeck/RS.svg": 8701,
      "./steamdeck/RT.svg": 8705,
      "./steamdeck/Right.svg": 8708,
      "./steamdeck/RightStick.svg": 8711,
      "./steamdeck/Up.svg": 8719,
      "./steamdeck/View.svg": 8722,
      "./steamdeck/X.svg": 8728,
      "./steamdeck/Y.svg": 8735,
      "./xbox/A.svg": 8737,
      "./xbox/B.svg": 8746,
      "./xbox/Down.svg": 8753,
      "./xbox/Home.svg": 8757,
      "./xbox/LB.svg": 8766,
      "./xbox/LS.svg": 8771,
      "./xbox/LT.svg": 8773,
      "./xbox/Left.svg": 8782,
      "./xbox/LeftStick.svg": 8791,
      "./xbox/Menu.svg": 8798,
      "./xbox/RB.svg": 8807,
      "./xbox/RS.svg": 8810,
      "./xbox/RT.svg": 8812,
      "./xbox/Right.svg": 8814,
      "./xbox/RightStick.svg": 8822,
      "./xbox/Up.svg": 8828,
      "./xbox/View.svg": 8836,
      "./xbox/X.svg": 8841,
      "./xbox/Y.svg": 8850
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 8436
  },
  8438: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8447: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8455: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8459: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8464: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8467: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8475: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8477: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8479: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8486: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8491: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8498: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8501: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8510: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8514: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8523: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8530: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8533: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8541: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8547: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8552: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8561: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8567: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8571: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8574: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8576: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8584: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8589: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8595: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8601: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8604: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8606: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8609: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8614: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8621: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8630: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8638: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8641: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8650: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8653: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8655: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8664: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8666: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8674: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8676: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8683: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8688: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8691: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8696: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8701: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8705: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8708: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8711: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8719: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8722: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8728: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8735: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8737: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8746: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8753: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8757: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8766: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8771: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8773: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8782: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8791: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8798: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8807: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8810: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8812: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8814: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8822: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8828: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8836: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8841: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8850: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
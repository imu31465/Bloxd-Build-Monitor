export const id = 28;
export const ids = [28];
export const modules = {
  8997: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => mu,
      h: () => au,
      i: () => Pu
    });
    var su = ju(58),
      Uu = ju(4726),
      Zu = ju(1178),
      Xu = ju(1499),
      lu = ju(24),
      qu = ju(3620),
      fu = ju(2338),
      Cu = ju(1298),
      bu = ju(2690),
      cu = ju(1986),
      Nu = ju(2027),
      Ou = ju(1244),
      Yu = ju(22),
      hu = ju(1687),
      Du = ju(1105),
      gu = ju.n(Du),
      Mu = ju(9006),
      eu = ju(9013),
      Gu = ju(9015),
      pu = ju(8933),
      wu = ju(9017),
      Ju = (ju(9026), ju(1154));
    let du = null;

    function au() {
      return null !== du
    }

    function Pu() {
      return "pad" === du
    }

    function ou() {
      return "inGame" === Yu.d.get("gameState") && !(0, hu.s)()
    }

    function ku(uu) {
      return (0, eu.q)(uu, Cu.n, eu.f, eu.h, eu.i)
    }
    const mu = (0, su.memo)((function() {
      const {
        t: uu
      } = (0, Ou.A)(), {
        userContext: Eu
      } = (0, Zu.c)(), [ju, Yu] = (0, su.useState)(null), [Du, au] = (0, su.useState)(null), Pu = (0, su.useRef)(null), mu = (0, su.useCallback)((uu => {
        Pu.current = uu, au(uu)
      }), []), vu = (0, su.useRef)(0), Ku = (0, su.useRef)(null), Vu = (0, su.useRef)({
        x: 0,
        y: 0
      }), [ru, Qu] = (0, su.useState)(0), iu = (0, su.useMemo)((() => function(uu) {
        const Eu = [];
        for (let su = 0; su < Cu.n; su++) {
          var ju;
          Eu.push(null !== (ju = uu[su]) && void 0 !== ju ? ju : null)
        }
        return Eu
      }((0, bu.f)(Eu.getPlayerCosmetics().emote))), [Eu, ru]);
      (0, Nu.b)("cosmeticsUpdated", (uu => {
        uu.some((uu => uu.local && "emote" === uu.iZ)) && Qu((uu => uu + 1))
      }));
      const Wu = (0, su.useRef)(!1),
        Su = (0, su.useCallback)((function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === uu && (0, Gu.g)(), Wu.current = Eu, Vu.current = {
            x: 0,
            y: 0
          }, mu(null), Yu(uu)
        }), [mu]),
        Iu = (0, su.useCallback)((() => {
          Yu(null), mu(null), Vu.current = {
            x: 0,
            y: 0
          }
        }), [mu]),
        Fu = (0, su.useCallback)((uu => {
          if (Date.now() < vu.current) return;
          const Eu = (0, fu.k)(uu),
            ju = !!Eu.holdUntilMove,
            su = ju ? 600 : Math.ceil(1e3 * Eu.animation.animation_length / fu.e) + 200;
          vu.current = Date.now() + su, Ku.current = uu, cu.gameBridge.send("playEmote", uu), cu.gameBridge.send("applyTemporaryThirdPerson", ju ? {} : {
            durationMs: su
          })
        }), []);
      (0, Xu.f)("requestToggleEmoteWheel", (() => {
        null === ju ? ou() && Su("click") : Iu()
      })), (0, Xu.f)("requestEmoteWheelHoldOpen", (() => {
        null === ju && ou() && Su((0, Mu.c)() ? "hold" : "click")
      })), (0, Xu.f)("requestEmoteWheelPadOpen", (uu => {
        null !== ju || !ou() || (0, pu.d)() || (0, wu.o)() || Su("pad", uu)
      })), (0, Xu.f)("requestEmoteRepeatLast", (() => {
        if (null !== ju || !ou() || (0, pu.d)() || (0, wu.o)()) return;
        const uu = Ku.current;
        null !== uu && iu.includes(uu) ? Fu(uu) : Su("pad", !0)
      }));
      const Bu = () => {
        const uu = Pu.current,
          Eu = null !== uu ? iu[uu] : null;
        null !== Eu && "pad" === ju && Date.now() < vu.current || (Iu(), null !== Eu && Fu(Eu))
      };
      (0, Xu.f)("emoteWheelPadAim", (uu => {
        if ("pad" !== ju) return;
        const Eu = (0, eu.y)(uu, Cu.n, Pu.current);
        mu(null !== Eu && null !== iu[Eu] ? Eu : null)
      })), (0, Xu.f)("requestEmoteWheelPadCommit", (uu => {
        "pad" !== ju || uu && Wu.current || Bu()
      })), (0, Xu.f)("appManagerUpdated|activeInputDevice", (uu => {
        null !== ju && "pad" === ju !== ("gamepad" === uu) && Iu()
      })), (0, su.useLayoutEffect)((() => (du = ju, (0, qu.z)("emoteWheel", "pad" === ju), lu.h.TY(qu.r), () => {
        du = null, (0, qu.z)("emoteWheel", !1), lu.h.TY(qu.r)
      })), [ju]), (0, Xu.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ju && Bu()
      })), (0, Xu.f)("requestEmoteWheelClose", (() => {
        null !== ju && Iu()
      })), (0, Xu.f)("appManagerUpdated|gameState", (uu => {
        "inGame" !== uu && Iu()
      }));
      const Lu = () => {
        (0, hu.s)() && Iu()
      };
      if ((0, Xu.f)("appManagerUpdated|openEverythingMenuName", Lu), (0, Xu.f)("appManagerUpdated|openInGameMenuName", Lu), (0, Xu.f)("pointerLockUpdate", (uu => {
          uu || "hold" !== ju || Iu()
        })), (0, su.useEffect)((() => {
          if (null === ju) return;
          const uu = uu => {
            "Escape" === uu.key && (uu.stopImmediatePropagation(), uu.preventDefault(), Iu())
          };
          return document.addEventListener("keydown", uu, !0), () => {
            document.removeEventListener("keydown", uu, !0)
          }
        }), [ju, Iu]), (0, Uu.e)(!0, "click" === ju, "EmoteWheelOverlay"), (0, su.useEffect)((() => {
          if ("hold" === ju) return cu.gameBridge.send("holdEmoteWheel", !0), () => {
            cu.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ju]), (0, su.useEffect)((() => {
          if ("hold" !== ju) return;
          const uu = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Eu = eu.n * uu,
            su = eu.l * uu,
            Uu = uu => {
              let ju = Vu.current.x + uu.movementX,
                Uu = Vu.current.y + uu.movementY;
              const Zu = Math.hypot(ju, Uu);
              if (Zu > Eu) {
                const uu = Eu / Zu;
                ju *= uu, Uu *= uu
              }
              Vu.current = {
                x: ju,
                y: Uu
              }, mu(function(uu, Eu, ju, su) {
                if (Math.hypot(uu, Eu) < ju) return null;
                const Uu = (0, eu.s)(uu, Eu, Cu.n);
                return null === su[Uu] ? null : Uu
              }(ju, Uu, su, iu))
            };
          return document.addEventListener("mousemove", Uu), () => {
            document.removeEventListener("mousemove", Uu)
          }
        }), [ju, iu, mu]), null === ju) return null;
      const tu = "hold" === ju || "pad" === ju,
        xu = null !== Du ? iu[Du] : null,
        Tu = null !== xu ? (0, fu.k)(xu).displayName : uu("emotes:pickEmote");
      return (0, Ju.jsx)("div", {
        className: gu()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ju
        }),
        onMouseDown: uu => {
          uu.target === uu.currentTarget && Iu()
        },
        children: (0, Ju.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * eu.n + "rem",
            height: 2 * eu.n + "rem"
          },
          children: [(0, Ju.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${eu.j} ${eu.j}`,
            children: [iu.map(((Eu, ju) => {
              const su = null !== Eu,
                Uu = tu && ju === Du;
              return (0, Ju.jsx)("path", {
                d: ku(ju),
                className: gu()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Uu,
                  EmoteWheelWedgeDisabled: !su
                }),
                onClick: uu => {
                  uu.stopPropagation(), null !== Eu && (uu => {
                    Iu(), Fu(uu)
                  })(Eu)
                },
                "aria-label": null !== Eu ? (0, fu.k)(Eu).displayName : uu("emotes:emptySlot")
              }, ju)
            })), (0, Ju.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: eu.f,
              cy: eu.f,
              r: eu.i
            }), (0, Ju.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: eu.f,
              cy: eu.f,
              r: eu.h
            }), tu && null !== Du && (0, Ju.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: ku(Du)
            })]
          }), iu.map(((uu, Eu) => {
            const ju = null !== uu,
              su = tu && Eu === Du,
              Uu = (0, eu.u)(Eu, Cu.n),
              Zu = eu.c * Math.cos(Uu),
              Xu = eu.c * Math.sin(Uu);
            return (0, Ju.jsx)("div", {
              className: gu()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: su,
                EmoteWheelSlotIconDisabled: !ju
              }),
              style: {
                left: `calc(50% + ${Zu}rem)`,
                top: `calc(50% + ${Xu}rem)`,
                backgroundImage: ju ? `url(/textures/charSkins/previews/emote_${uu}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Eu)
          })), (0, Ju.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Tu
          })]
        })
      })
    }))
  },
  9118: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Du,
      h: () => eu
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(2610),
      Xu = ju(3601);
    const lu = 6,
      qu = 4;

    function fu(uu) {
      let {
        slotsLeft: Eu,
        slotsRight: ju,
        width: su,
        height: Uu,
        zoneRight: Zu,
        rowTop: Xu,
        besideBottom: fu,
        obstacles: Cu
      } = uu;
      const bu = Math.max(0, Math.floor(ju - Eu - su)),
        cu = null === Zu ? 0 : Math.min(bu, Math.max(0, Math.ceil(Zu + lu - Eu))),
        Nu = Eu + cu - lu,
        Ou = Eu + cu + su + lu,
        Yu = Cu.filter((uu => uu.left < Ou && uu.right > Nu));
      let hu = fu;
      for (let lu = 0; lu <= Yu.length; lu++) {
        const uu = Yu.filter((uu => uu.top < hu + qu && uu.bottom > hu - Uu - qu));
        if (0 === uu.length) break;
        hu = Math.min(...uu.map((uu => uu.top))) - qu
      }
      return {
        shift: cu,
        rise: hu === fu ? null : Math.ceil(Xu - hu)
      }
    }

    function Cu(uu) {
      return Array.from(uu.children).filter((uu => !uu.classList.contains("HotBarRow")))
    }

    function bu(uu) {
      return function(uu) {
        const Eu = [],
          ju = (uu, su) => {
            const Uu = uu.getBoundingClientRect();
            if (Uu.width > 0 && Uu.height > 0) Eu.push(uu);
            else if (su < 2)
              for (const Eu of Array.from(uu.children)) ju(Eu, su + 1)
          };
        for (const su of uu) ju(su, 0);
        return Eu
      }(Cu(uu).flatMap((uu => uu.classList.contains("AuraBarWrapper") ? [] : uu.classList.contains("BottomScreenStatBarList") ? Array.from(uu.children) : [uu])))
    }

    function cu(uu) {
      var Eu;
      const ju = uu.getBoundingClientRect();
      if (0 === ju.width) return null;
      const su = null === (Eu = uu.parentElement) || void 0 === Eu ? void 0 : Eu.getBoundingClientRect();
      return su && su.width > 0 ? Math.min(ju.right, su.left + su.width * Nu) : ju.right
    }
    const Nu = .35,
      Ou = new WeakMap,
      Yu = ".BottomScreenMessage, [role='status']",
      hu = new WeakMap;

    function Du(uu) {
      gu(uu) && gu(uu)
    }

    function gu(uu) {
      var Eu, ju, su, Uu, Zu, Xu;
      const lu = uu.documentElement.classList;
      if (!lu.contains("TouchHotbar") || lu.contains("TouchHotbarKeysAbove") || lu.contains("HudMove-inventory") || lu.contains("HudLocked-inventory") || null === (Eu = uu.defaultView) || void 0 === Eu || null === (ju = Eu.matchMedia) || void 0 === ju || !ju.call(Eu, Mu).matches) return !1;
      const Cu = uu.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Nu = null === Cu || void 0 === Cu ? void 0 : Cu.parentElement,
        Du = null === Cu || void 0 === Cu ? void 0 : Cu.closest(".BottomMiddleElements"),
        gu = null === Du || void 0 === Du ? void 0 : Du.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Cu || !Nu || !Du || !gu || Du.classList.contains("TouchInventoryOpen")) return !1;
      const eu = Cu.getBoundingClientRect();
      if (0 === eu.width) return !1;
      const Gu = uu.querySelector(".JoystickZone"),
        pu = gu.getBoundingClientRect(),
        wu = Nu.getBoundingClientRect().top,
        Ju = null === (su = Du.querySelector(":scope > .AuraBarWrapper")) || void 0 === su ? void 0 : su.getBoundingClientRect(),
        du = bu(Du),
        au = {
          slotsLeft: pu.left,
          slotsRight: pu.right,
          width: eu.width,
          height: eu.height,
          zoneRight: Gu ? cu(Gu) : null,
          rowTop: wu,
          besideBottom: (Ju && Ju.height > 0 ? Ju.top : wu) - qu,
          obstacles: du.map((uu => uu.getBoundingClientRect()))
        },
        Pu = fu({
          ...au,
          obstacles: du.filter((uu => !uu.matches(Yu))).map((uu => uu.getBoundingClientRect()))
        }),
        ou = uu.defaultView,
        ku = `${null===ou||void 0===ou?void 0:ou.innerWidth}x${null===ou||void 0===ou?void 0:ou.innerHeight}:${Pu.shift}:${Math.round(eu.width)}:${Math.round(wu)}`,
        mu = hu.get(Du),
        vu = (null === mu || void 0 === mu ? void 0 : mu.at) === ku ? (Ku = mu.rise, Vu = Pu.rise, null === Ku ? Vu : null === Vu ? Ku : Math.max(Ku, Vu)) : Pu.rise;
      var Ku, Vu;
      const ru = fu({
          ...au,
          besideBottom: null === vu ? au.besideBottom : wu - vu
        }),
        Qu = {
          shift: Pu.shift,
          rise: null !== (Uu = ru.rise) && void 0 !== Uu ? Uu : vu
        },
        iu = Ou.get(Du);
      return (null !== (Zu = null === iu || void 0 === iu ? void 0 : iu.shift) && void 0 !== Zu ? Zu : 0) === Qu.shift && hu.set(Du, {
        at: ku,
        rise: vu
      }), (null === iu || void 0 === iu ? void 0 : iu.shift) !== Qu.shift && Du.style.setProperty("--touch-shop-above-shift", `${Qu.shift}px`), (null === iu || void 0 === iu ? void 0 : iu.rise) !== Qu.rise && (Du.classList.toggle("ShopAboveUp", null !== Qu.rise), null === Qu.rise ? Du.style.removeProperty("--touch-shop-above-rise") : Du.style.setProperty("--touch-shop-above-rise", `${Qu.rise}px`)), Ou.set(Du, Qu), (null !== (Xu = null === iu || void 0 === iu ? void 0 : iu.shift) && void 0 !== Xu ? Xu : 0) !== Qu.shift
    }
    const Mu = "(orientation: landscape) and (max-height: 500px)";

    function eu(uu, Eu, ju) {
      (0, su.useLayoutEffect)((() => {
        var Eu;
        const su = null === (Eu = uu.current) || void 0 === Eu ? void 0 : Eu.closest(".BottomMiddleElements");
        if (!su || ju) return;
        const lu = new ResizeObserver((() => {
            Nu(!1)
          })),
          qu = () => {
            lu.disconnect();
            const uu = document.querySelector(".JoystickZone");
            for (const Eu of [uu, su, su.querySelector(".HotBarGameItemsContainer"), ...bu(su)]) Eu && lu.observe(Eu)
          };
        let fu = null,
          cu = !1;
        const Nu = uu => {
            cu ||= uu, fu ??= requestAnimationFrame((() => {
              fu = null, cu && (cu = !1, qu()), Du(document)
            }))
          },
          Ou = new MutationObserver((() => {
            Nu(!0)
          }));
        Ou.observe(su, {
          childList: !0
        });
        for (const uu of Cu(su)) Ou.observe(uu, {
          childList: !0,
          subtree: !0
        });
        Du(document), qu();
        const Yu = () => {
            Nu(!0)
          },
          hu = [(0, Uu.l)(Zu.d, Yu), (0, Uu.l)(Xu.b, Yu)];
        return () => {
          null !== fu && cancelAnimationFrame(fu), lu.disconnect(), Ou.disconnect();
          for (const uu of hu) uu()
        }
      }), [uu, Eu, ju])
    }
  },
  5155: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou,
      f: () => Mu,
      h: () => Yu,
      l: () => gu
    });
    var su = ju(58),
      Uu = ju(5158),
      Zu = ju(4528),
      Xu = ju(1419),
      lu = ju(5179),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(1405),
      bu = ju(1779),
      cu = ju(5182),
      Nu = ju(1154);

    function Ou(uu) {
      let {
        label: Eu,
        onClick: ju,
        checked: su,
        circleInfoText: Uu,
        className: lu,
        disabled: qu,
        note: Cu
      } = uu;
      return (0, Nu.jsxs)("div", {
        "aria-disabled": qu || void 0,
        "data-pad-focusable": !0,
        className: fu()("SettingBox CheckboxContainer", {
          [lu]: lu,
          SettingBoxDisabled: qu
        }),
        onClick: () => {
          qu || ju(!su)
        },
        children: [(0, Nu.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nu.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nu.jsx)(Zu.d, {
              className: "SettingsCheckbox",
              checked: su,
              disabled: qu,
              onChange: () => {}
            })
          }), (0, Nu.jsxs)("div", {
            className: "CheckboxText",
            children: [Eu, Uu && (0, Nu.jsx)("span", {
              onClick: uu => uu.stopPropagation(),
              children: (0, Nu.jsx)(Xu.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Uu
              })
            })]
          })]
        }), Cu && (0, Nu.jsx)("div", {
          className: "SettingNote",
          children: Cu
        })]
      })
    }

    function Yu(uu) {
      let {
        name: Eu,
        onChange: ju,
        min: Uu,
        max: Zu,
        step: lu,
        initValue: qu,
        circleInfoText: Cu,
        format: bu,
        className: cu,
        padStep: Ou,
        disabled: Yu = !1,
        selectableMax: hu,
        cappedNote: gu,
        onChangeComplete: Mu
      } = uu;
      const [eu, Gu] = (0, su.useState)(qu), pu = (0, su.useRef)(qu);
      (0, su.useEffect)((() => {
        pu.current = qu, Gu(qu)
      }), [qu]);
      const wu = void 0 !== hu && hu < Zu,
        Ju = wu ? {
          "--slider-selectable": (hu - Uu) / (Zu - Uu)
        } : void 0;
      return (0, Nu.jsxs)("div", {
        className: fu()("SettingBox SettingsSliderDiv", {
          [cu]: cu,
          SettingBoxDisabled: Yu,
          SliderCapped: wu
        }),
        style: Ju,
        children: [(0, Nu.jsxs)("div", {
          className: "SliderText",
          children: [`${Eu}: ${bu?bu(eu):eu}`, Cu && (0, Nu.jsx)(Xu.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Cu
          })]
        }), (0, Nu.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nu.jsx)(Du, {
            value: eu,
            min: Uu,
            max: Zu,
            step: lu,
            onChange: uu => {
              if (wu && uu >= hu && eu === hu) return;
              const Eu = wu ? Math.min(uu, hu) : uu;
              pu.current = Eu, Gu(Eu), ju(Eu)
            },
            onChangeComplete: Mu && (() => {
              Mu(pu.current)
            }),
            format: bu,
            padStep: Ou,
            disabled: Yu
          })
        }), wu && gu && (0, Nu.jsx)("div", {
          className: "SettingNote",
          children: gu
        })]
      })
    }
    const hu = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Du(uu) {
      var Eu;
      let {
        value: ju,
        min: Zu,
        max: Xu,
        step: lu,
        onChange: qu,
        orientation: fu,
        reverse: Cu,
        setIsChanging: bu,
        tooltip: Ou,
        labels: Yu,
        handleLabel: Du,
        format: gu,
        onChangeStart: Mu,
        onChangeComplete: eu,
        padStep: Gu,
        disabled: pu = !1
      } = uu;
      const wu = (0, su.useRef)(null),
        Ju = (0, su.useRef)(null);
      (0, su.useLayoutEffect)((() => {
        var uu, Eu, ju;
        const su = null !== (uu = null === (Eu = wu.current) || void 0 === Eu ? void 0 : Eu.querySelector(".rangeslider")) && void 0 !== uu ? uu : null;
        null === su || void 0 === su || su.setAttribute("data-pad-slider", ""), null === su || void 0 === su || su.setAttribute("data-pad-focusable", ""), null === su || void 0 === su || null === (ju = su.querySelector(".rangeslider__handle")) || void 0 === ju || ju.setAttribute("data-pad-slider-handle", ""), Ju.current = su
      }), []), (0, su.useLayoutEffect)((() => {
        var uu, Eu;
        pu ? null === (uu = Ju.current) || void 0 === uu || uu.setAttribute("aria-disabled", "true") : null === (Eu = Ju.current) || void 0 === Eu || Eu.removeAttribute("aria-disabled")
      }), [pu]);
      const du = (null !== (Eu = String(lu).split(".")[1]) && void 0 !== Eu ? Eu : "").length,
        au = uu => {
          const Eu = Number((Math.round((uu - Zu) / lu) * lu + Zu).toFixed(du));
          return Math.min(Xu, Math.max(Zu, Eu))
        },
        Pu = (0, su.useRef)(eu);
      Pu.current = eu, (0, su.useEffect)((() => {
        const uu = wu.current;
        if (!uu) return;
        const Eu = uu => {
          var Eu;
          hu.has(uu.key) && (null === (Eu = Pu.current) || void 0 === Eu || Eu.call(Pu))
        };
        return uu.addEventListener("keyup", Eu), () => {
          uu.removeEventListener("keyup", Eu)
        }
      }), []);
      const ou = (0, su.useRef)(!1);
      return (0, cu.e)(Ju, {
        adjust: uu => {
          if (pu) return;
          const Eu = null !== Gu && void 0 !== Gu ? Gu : Math.max(lu, Math.round((Xu - Zu) / 20 / lu) * lu),
            su = au(ju + uu * Eu * (Cu ? -1 : 1));
          su !== ju && (null === Mu || void 0 === Mu || Mu(), qu(su), null === eu || void 0 === eu || eu())
        },
        setFraction: uu => {
          if (pu) return;
          const Eu = au(Zu + (Cu ? 1 - uu : uu) * (Xu - Zu));
          Eu !== ju && (ou.current || (ou.current = !0, null === Mu || void 0 === Mu || Mu()), qu(Eu))
        },
        endDrag: () => {
          ou.current && (ou.current = !1, null === eu || void 0 === eu || eu())
        }
      }), (0, Nu.jsx)("div", {
        ref: wu,
        style: {
          display: "contents"
        },
        children: (0, Nu.jsx)(Uu.c, {
          value: ju,
          min: Zu,
          max: Xu,
          step: lu,
          onChange: qu,
          orientation: fu,
          reverse: Cu,
          tooltip: Ou,
          labels: Yu,
          handleLabel: Du,
          format: gu,
          onChangeStart: () => {
            null === Mu || void 0 === Mu || Mu(), null === bu || void 0 === bu || bu(!0)
          },
          onChangeComplete: () => {
            null === bu || void 0 === bu || bu(!1), null === eu || void 0 === eu || eu()
          }
        })
      })
    }
    async function gu() {
      const uu = Cu.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await uu.getResult() && (0, bu.reloadBloxd)()
    }

    function Mu(uu) {
      let {
        label: Eu,
        options: ju,
        value: su,
        onChange: Uu,
        circleInfoText: Zu
      } = uu;
      return (0, Nu.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nu.jsxs)("div", {
          className: "SliderText",
          children: [Eu, Zu && (0, Nu.jsx)(Xu.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Zu
          })]
        }), (0, Nu.jsx)(lu.c, {
          ariaLabel: Eu,
          options: ju,
          value: su,
          onChange: Uu
        })]
      })
    }
  },
  5179: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1154);

    function Xu(uu) {
      let {
        options: Eu,
        value: ju,
        onChange: su,
        ariaLabel: Xu,
        className: lu,
        reselectable: qu = !1,
        keepsFocus: fu = !1,
        padTabs: Cu
      } = uu;
      const bu = void 0 !== Cu;
      return (0, Zu.jsx)("div", {
        className: Uu()("SegmentedToggle", lu),
        role: "group",
        "aria-label": Xu,
        "data-pad-tabs": Cu,
        children: Eu.map((uu => {
          const Eu = uu.value === ju;
          return (0, Zu.jsx)("button", {
            type: "button",
            "aria-pressed": Eu,
            "data-pad-tab": bu || void 0,
            "data-pad-selected": bu && Eu ? "true" : void 0,
            "data-pad-default-focus": bu && Eu || void 0,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Uu()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eu
            }),
            onMouseDown: fu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Eu && !qu || su(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  8968: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      e: () => Zu
    });
    var su = ju(2045);
    const Uu = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Zu = uu => "string" === typeof uu.icon && "" !== uu.icon && "string" === typeof uu.keycode && Uu.test(uu.keycode),
      Xu = uu => "Space" === uu ? "_" : su.h[uu]
  },
  9006: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(22);

    function Uu() {
      return !su.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9103: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => qu,
      D: () => cu,
      G: () => fu,
      J: () => Ou,
      M: () => Zu,
      e: () => Uu,
      g: () => lu,
      k: () => su,
      m: () => Yu,
      q: () => Nu,
      r: () => Cu,
      u: () => Xu,
      v: () => hu,
      y: () => bu
    });
    const su = uu => ({
      left: uu.left,
      top: uu.top,
      right: uu.right,
      bottom: uu.bottom
    });

    function Uu(uu) {
      return {
        x: (uu.left + uu.right) / 2,
        y: (uu.top + uu.bottom) / 2
      }
    }

    function Zu(uu) {
      return 0 === uu.length ? null : uu.reduce(((uu, Eu) => ({
        left: Math.min(uu.left, Eu.left),
        top: Math.min(uu.top, Eu.top),
        right: Math.max(uu.right, Eu.right),
        bottom: Math.max(uu.bottom, Eu.bottom)
      })))
    }

    function Xu(uu, Eu) {
      const ju = Math.max(0, (Eu - (uu.right - uu.left)) / 2),
        su = Math.max(0, (Eu - (uu.bottom - uu.top)) / 2);
      return {
        left: uu.left - ju,
        top: uu.top - su,
        right: uu.right + ju,
        bottom: uu.bottom + su
      }
    }

    function lu(uu, Eu) {
      return Eu.x >= uu.left && Eu.x <= uu.right && Eu.y >= uu.top && Eu.y <= uu.bottom
    }

    function qu(uu, Eu, ju) {
      let su = null,
        Zu = 1 / 0;
      for (const {
          id: Uu,
          box: Xu
        }
        of Eu) {
        const Eu = (Xu.right - Xu.left) * (Xu.bottom - Xu.top);
        lu(Xu, uu) && Eu < Zu && (Zu = Eu, su = Uu)
      }
      if (null !== su) return su;
      let qu = 1 / 0;
      for (const {
          id: fu,
          box: Cu
        }
        of Eu) {
        if (!lu(Xu(Cu, ju), uu)) continue;
        const Eu = Uu(Cu),
          Zu = Math.hypot(uu.x - Eu.x, uu.y - Eu.y);
        Zu < qu && (qu = Zu, su = fu)
      }
      return su
    }

    function fu(uu, Eu, ju) {
      return {
        left: ju.left,
        top: ju.top,
        right: uu - ju.right,
        bottom: Eu - ju.bottom
      }
    }

    function Cu(uu, Eu, ju, su) {
      const Uu = (uu, Eu, ju) => Math.max(Math.min(Eu, 0), Math.min(Math.max(ju, 0), uu));
      return {
        x: Uu(Eu, su.left - uu.left, su.right - uu.right),
        y: Uu(ju, su.top - uu.top, su.bottom - uu.bottom)
      }
    }

    function bu(uu, Eu, ju, su, Uu) {
      const Zu = uu.dx * su + Eu,
        Xu = uu.dy * Uu + ju,
        lu = uu => Math.max(-1, Math.min(1, uu));
      return {
        dx: lu(Zu / su),
        dy: lu(Xu / Uu)
      }
    }

    function cu(uu, Eu, ju, su) {
      return Eu <= 0 || ju <= 0 ? 1 : Math.max(.05, Math.min(1, uu / Eu, su / ju))
    }

    function Nu(uu, Eu, ju) {
      return Math.min(uu.right, Eu.right) - Math.max(uu.left, Eu.left) > ju && Math.min(uu.bottom, Eu.bottom) - Math.max(uu.top, Eu.top) > ju
    }

    function Ou(uu, Eu) {
      const ju = (uu, Eu, ju, su) => Eu - uu > su - ju ? ju - uu > Eu - su ? su - Eu : ju - uu : uu < ju ? ju - uu : Eu > su ? su - Eu : 0;
      return {
        x: ju(uu.left, uu.right, Eu.left, Eu.right),
        y: ju(uu.top, uu.bottom, Eu.top, Eu.bottom)
      }
    }

    function Yu(uu, Eu, ju) {
      return Nu(uu, {
        left: 0,
        top: 0,
        right: Eu,
        bottom: ju
      }, 0)
    }

    function hu(uu, Eu) {
      let {
        avoid: ju = null,
        bounds: su = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Uu = 0, Zu = 1 / 0;
      return uu.forEach(((uu, Xu) => {
        const lu = Eu.filter((Eu => Nu(uu, Eu, 0))).length,
          qu = null !== su && (uu.left < su.left || uu.top < su.top || uu.right > su.right || uu.bottom > su.bottom),
          fu = lu + (ju && Nu(uu, ju, 0) ? 1e3 : 0) + (qu ? 1e6 : 0);
        fu < Zu && (Uu = Xu, Zu = fu)
      })), Uu
    }
  },
  9110: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu,
      f: () => Zu,
      j: () => Uu,
      l: () => Xu,
      o: () => bu,
      q: () => Cu,
      r: () => fu,
      t: () => qu
    });
    var su = ju(2581);
    const Uu = ["J", "C", "A", "P", "U", "X", "G"],
      Zu = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Xu(uu) {
      return uu ? ["X"] : ["P", "X"]
    }
    const lu = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: su.D,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function qu(uu, Eu, ju) {
      const su = uu.querySelector(".InGameUi .TouchComponentsButtons");
      if (!su) return lu;
      const Zu = {},
        Xu = {};
      for (const lu of Uu) {
        const uu = su.querySelector(`.TouchSlot${lu} > .TouchKey`);
        if (uu) {
          var qu, fu;
          Zu[lu] = uu.cloneNode(!0);
          const Eu = (null !== (qu = null === (fu = uu.querySelector(".TouchKeyLabel")) || void 0 === fu ? void 0 : fu.textContent) && void 0 !== qu ? qu : "").split(/\s+/).filter((uu => !/[\d\xd7]/.test(uu))).join(" ");
          Eu && (Xu[lu] = Eu)
        }
      }
      const Cu = Eu => {
          const ju = uu.querySelector(`.InGameUi ${Eu}`);
          return null !== ju && !ju.classList.contains("Hidden")
        },
        bu = [...uu.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((uu => uu.cloneNode(!0)));
      return {
        faces: Object.keys(Zu).length > 0 ? Zu : null,
        names: Xu,
        shop: Cu(".TouchInventoryKey.ShopKey"),
        bag: Cu(".TouchInventoryKey.BagKey"),
        sprint: Cu(".TouchSprintHit"),
        items: bu.length > 0 ? bu : null,
        rowIcons: Eu,
        pinnedIcons: ju
      }
    }

    function fu(uu, Eu) {
      const ju = {};
      for (const su of [...Xu(Eu), "G"]) {
        const Eu = uu.names[su];
        Eu && (ju[Zu[su]] = Eu)
      }
      return ju
    }

    function Cu(uu, Eu) {
      const {
        faces: ju
      } = uu;
      if (null === ju) return [];
      const su = new Set(Object.keys(ju).map((uu => Zu[uu])));
      return Xu(Eu).filter((uu => !su.has(Zu[uu])))
    }

    function bu(uu, Eu) {
      uu.replaceChildren(...[...Eu.childNodes].map((uu => uu.cloneNode(!0))))
    }
  },
  9013: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      f: () => lu,
      h: () => fu,
      i: () => qu,
      j: () => Xu,
      l: () => Uu,
      n: () => su,
      q: () => Ou,
      s: () => bu,
      u: () => Cu,
      w: () => cu,
      y: () => Nu
    });
    const su = 14,
      Uu = 6,
      Zu = (su + Uu) / 2,
      Xu = 200,
      lu = Xu / 2,
      qu = Xu / 2 - 1,
      fu = Uu / su * (Xu / 2),
      Cu = (uu, Eu) => -Math.PI / 2 + 2 * uu * Math.PI / Eu,
      bu = (uu, Eu, ju) => {
        const su = 2 * Math.PI / ju;
        return (Math.round((Math.atan2(Eu, uu) + Math.PI / 2) / su) % ju + ju) % ju
      },
      cu = .5,
      Nu = (uu, Eu, ju) => Math.hypot(uu.x, uu.y) < cu ? ju : bu(uu.x, uu.y, Eu),
      Ou = (uu, Eu, ju, su, Uu) => {
        const Zu = Math.PI / Eu,
          Xu = Cu(uu, Eu),
          lu = Xu - Zu,
          qu = Xu + Zu,
          fu = (uu, Eu) => `${ju+uu*Math.cos(Eu)} ${ju+uu*Math.sin(Eu)}`;
        return [`M ${fu(su,lu)}`, `L ${fu(Uu,lu)}`, `A ${Uu} ${Uu} 0 0 1 ${fu(Uu,qu)}`, `L ${fu(su,qu)}`, `A ${su} ${su} 0 0 0 ${fu(su,lu)}`, "Z"].join(" ")
      }
  },
  9036: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(58),
      Uu = ju(8992),
      Zu = ju(2543);

    function Xu() {
      const uu = (0, Zu.h)("shopInfo"),
        [, Eu] = (0, su.useReducer)((uu => uu + 1), 0);
      return (0, Zu.e)("shopInfo", Eu), !(0, Uu.b)(uu)
    }
  },
  8405: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      f: () => Zu,
      h: () => cu,
      i: () => bu,
      j: () => fu,
      m: () => lu,
      o: () => su,
      q: () => Nu,
      s: () => Ou
    });
    const su = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Uu = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: su
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Zu = {
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
      Xu = ["pickBlock", "perspective"],
      lu = uu => Xu.includes(uu) ? Xu : [uu],
      qu = Object.fromEntries(Uu.flatMap((uu => {
        let {
          group: Eu,
          actions: ju
        } = uu;
        return ju.map((uu => [uu, Eu]))
      }))),
      fu = uu => qu[uu],
      Cu = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      bu = uu => {
        var Eu;
        return [fu(uu), ...null !== (Eu = Cu[uu]) && void 0 !== Eu ? Eu : []]
      },
      cu = new Set(["menu", "inventory", "keyboard"]),
      Nu = {
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
      Ou = new Set(["forward", "backward", "left", "right"])
  },
  8398: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => au,
      C: () => Cu,
      E: () => du,
      G: () => ku,
      c: () => gu,
      e: () => Gu,
      i: () => cu,
      l: () => Nu,
      n: () => vu,
      o: () => ou,
      r: () => Pu,
      s: () => eu,
      u: () => mu,
      x: () => Ju,
      y: () => Mu
    });
    var su = ju(8405),
      Uu = ju(8411),
      Zu = ju(8383),
      Xu = ju(8430);
    const lu = uu => "pickBlock" === uu ? "perspective" : uu,
      qu = (uu, Eu) => {
        var ju;
        const Uu = lu(Eu);
        return null !== (ju = uu[Uu]) && void 0 !== ju ? ju : su.f[Uu]
      },
      fu = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((uu => {
        let [Eu, ju] = uu;
        return [
          [Eu, ju],
          [ju, Eu]
        ]
      }))),
      Cu = (uu, Eu) => null !== uu && void 0 !== uu ? uu : "nintendo" === Eu,
      bu = uu => Cu((0, Uu.f)().swapConfirmBack, (0, Uu.i)()) && fu.get(uu) || uu,
      cu = uu => qu((0, Uu.f)().bindings, bu(uu)),
      Nu = uu => su.f[bu(uu)],
      Ou = Object.keys(su.f),
      Yu = uu => "gameplay" === (0, su.j)(uu) ? ["gameplay"] : (0, su.i)(uu),
      hu = (uu, Eu) => {
        const ju = Yu(Eu);
        return Yu(uu).some((uu => ju.includes(uu)))
      },
      Du = (uu, Eu, ju) => {
        const Uu = qu(uu, Eu),
          Xu = new Set((0, su.m)(Eu)),
          fu = [...Xu];
        for (let su = fu.pop(); su; su = fu.pop())
          for (const Eu of Ou) {
            const Zu = qu(uu, Eu);
            Xu.has(Eu) || Zu !== ju && Zu !== Uu || !hu(su, Eu) || (Xu.add(Eu), fu.push(Eu))
          }
        const Cu = {
          ...uu
        };
        for (const bu of Xu) {
          const Eu = qu(uu, bu) === Uu ? ju : Uu,
            Xu = (0, su.i)(bu).some((uu => su.h.has(uu)));
          if ((0, Zu.I)(Eu) && Xu) return null;
          Cu[lu(bu)] = Eu
        }
        for (const Zu of Object.keys(Cu)) Cu[Zu] === su.f[Zu] && delete Cu[Zu];
        return Cu
      },
      gu = (uu, Eu) => null !== Du((0, Uu.f)().bindings, bu(uu), Eu),
      Mu = (uu, Eu) => {
        if (cu(uu) === Eu) return !0;
        const ju = Du((0, Uu.f)().bindings, bu(uu), Eu);
        return !!ju && ((0, Uu.j)({
          bindings: ju
        }), !0)
      },
      eu = (uu, Eu) => {
        const ju = (0, su.m)(Eu);
        return Ou.filter((Eu => lu(Eu) === Eu && !ju.includes(Eu) && qu(uu, bu(Eu)) !== cu(Eu)))
      },
      Gu = ["southpaw", "triggersSwapped"],
      pu = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      wu = uu => Object.keys(pu[uu]),
      Ju = (uu, Eu) => "southpaw" === uu ? Eu.swapSticks : wu(uu).every((ju => qu(Eu.bindings, ju) === pu[uu][ju])),
      du = (uu, Eu) => {
        const ju = (0, Uu.f)();
        let Zu = ju.bindings;
        for (const Uu of wu(uu)) {
          const ju = Eu ? pu[uu][Uu] : su.f[Uu];
          if (Zu = Du(Zu, Uu, ju), !Zu) return !1
        }
        return (0, Uu.j)({
          swapSticks: "southpaw" === uu ? Eu : ju.swapSticks,
          bindings: Zu
        }), !0
      },
      au = () => {
        (0, Uu.j)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Pu = () => (0, Uu.f)().swapSticks ? "RightStick" : "LeftStick",
      ou = () => (0, Uu.f)().swapSticks ? "LeftStick" : "RightStick",
      ku = uu => (0, Uu.f)().swapSticks && (0, Zu.I)(uu),
      mu = uu => ku(uu) ? Pu() : ou(),
      vu = uu => {
        if (su.s.has(uu)) return Pu();
        const Eu = su.q[uu];
        return Eu && ("leaderboard" !== Eu || (0, Xu.e)(uu, (0, Xu.c)())) ? cu(Eu) : null
      }
  },
  8376: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ControllerCategory: () => Gl,
      ControllerGlyph: () => JU,
      ControllerRoot: () => GX,
      PadLobbyShortcuts: () => WX,
      PadSneakChip: () => oX,
      PadTooltip: () => mX,
      attachPressToContinue: () => TX,
      getBoundButton: () => Cu.i,
      getControllerSettings: () => cu.f,
      getGlyphForNoaAction: () => Cu.n,
      getInventoryCursorState: () => wl,
      getMenuShortcutButton: () => tj,
      getPadGlyphIconName: () => dX,
      getPadGlyphIconUrl: () => aX,
      getPadRepeatTiming: () => Yu.f,
      handOverPadFocus: () => dl,
      hasActivePad: () => pl,
      isPadSteppingSlots: () => Jl
    });
    const su = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Uu = ju(1244),
      Zu = ju(1461),
      Xu = ju(8378),
      lu = ju(65),
      qu = ju(22),
      fu = ju(24),
      Cu = ju(8398),
      bu = ju(8437),
      cu = ju(8411),
      Nu = ju(8443),
      Ou = ju(8383),
      Yu = ju(8876),
      hu = ju(8881),
      Du = ju(1710);
    const gu = (uu, Eu, ju) => Math.max(Eu, Math.min(ju, uu)),
      Mu = uu => Math.min(uu.width, uu.height) / 720,
      eu = uu => Math.max(.15, uu);
    class Gu {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(uu, Eu) {
        const ju = Math.hypot(uu.x, uu.y) >= (uu => Math.max(.3, uu))(Eu);
        return this.locked ? (this.locked = ju, !1) : ju
      }
    }
    const pu = (uu, Eu) => {
        const ju = gu(Eu.dtMs, 0, 100),
          su = ju / 1e3,
          Uu = Mu(Eu.viewport) * (Eu.cursorSpeedPercent / 100),
          Zu = (0, Ou.i)(Eu.stick, eu(Eu.moveDeadzone)),
          Xu = Math.hypot(Zu.x, Zu.y),
          lu = ((uu, Eu, ju) => {
            if (Eu < .3) return 0;
            const su = ju / 350;
            return Eu >= .85 ? Math.min(1, uu + su) : Math.max(0, uu - su)
          })(uu.speedRamp, Xu, ju);
        let qu = uu.x,
          fu = uu.y;
        if (Xu > 0) {
          const uu = .45 + .55 * lu,
            ju = Eu.context.overInteractive ? .45 : 1,
            Cu = 1400 * (uu => {
              const Eu = gu(uu, 0, 1);
              return .3 * Eu + .7 * Eu * Eu
            })(Xu) * Uu * uu * ju;
          qu += Zu.x / Xu * Cu * su, fu += Zu.y / Xu * Cu * su
        }
        const Cu = Math.hypot(Eu.dpad.x, Eu.dpad.y);
        if (Cu > 0) {
          const uu = 500 * Uu;
          qu += Eu.dpad.x / Cu * uu * su, fu += Eu.dpad.y / Cu * uu * su
        }
        const bu = Eu.context.magnetTarget;
        if (bu && Xu < .3 && 0 === Cu) {
          const uu = ((uu, Eu, ju, su, Uu) => {
            const Zu = Eu.x - uu.x,
              Xu = Eu.y - uu.y,
              lu = Math.hypot(Zu, Xu);
            if (0 === lu) return {
              x: 0,
              y: 0
            };
            const qu = Math.min(lu, Uu * (1 - su / .3));
            let fu = Zu / lu * qu,
              Cu = Xu / lu * qu;
            if (su > 0) {
              const uu = ju.x / su,
                Eu = ju.y / su,
                Uu = fu * uu + Cu * Eu;
              Uu < 0 && (fu -= Uu * uu, Cu -= Uu * Eu)
            }
            return {
              x: fu,
              y: Cu
            }
          })({
            x: qu,
            y: fu
          }, bu, Zu, Xu, 120 * Mu(Eu.viewport) * su);
          qu += uu.x, fu += uu.y
        }
        return {
          x: gu(qu, 0, Math.max(0, Eu.viewport.width - 1)),
          y: gu(fu, 0, Math.max(0, Eu.viewport.height - 1)),
          speedRamp: lu
        }
      },
      wu = uu => {
        const Eu = (0, Ou.i)(uu, .2);
        return 0 !== Eu.x || 0 !== Eu.y
      },
      Ju = (uu, Eu) => {
        const ju = (0, Ou.i)(uu, .2),
          su = Math.hypot(ju.x, ju.y);
        if (0 === su) return {
          x: 0,
          y: 0
        };
        const Uu = su * su * 1600,
          Zu = gu(Eu, 0, 100) / 1e3;
        return {
          x: ju.x / su * Uu * Zu,
          y: ju.y / su * Uu * Zu
        }
      },
      du = (uu, Eu) => "y" === Eu ? uu.scrollHeight > uu.clientHeight + 1 : uu.scrollWidth > uu.clientWidth + 1,
      au = (uu, Eu) => {
        if (!du(uu, Eu)) return !1;
        const ju = getComputedStyle(uu),
          su = "y" === Eu ? ju.overflowY : ju.overflowX;
        return "auto" === su || "scroll" === su
      },
      Pu = (uu, Eu, ju) => {
        for (let Zu = uu instanceof HTMLElement ? uu : null !== (su = null === uu || void 0 === uu ? void 0 : uu.parentElement) && void 0 !== su ? su : null; Zu; Zu = Zu.parentElement) {
          var su;
          if (au(Zu, Eu)) return Zu;
          if (Zu === ju) return null
        }
        if (ju) return null;
        const Uu = document.scrollingElement;
        return Uu instanceof HTMLElement && du(Uu, Eu) ? Uu : null
      },
      ou = new WeakMap,
      ku = (uu, Eu) => {
        const ju = performance.now(),
          su = ou.get(uu);
        if (su && su.axis === Eu && ju - su.atMs < 500 && (!su.container || su.container.isConnected)) return su.container;
        const Uu = mu(uu, Eu);
        return ou.set(uu, {
          axis: Eu,
          atMs: ju,
          container: Uu
        }), Uu
      },
      mu = (uu, Eu) => {
        let ju = au(uu, Eu) ? uu : null,
          su = ju ? ju.clientWidth * ju.clientHeight : 0;
        for (const Uu of uu.querySelectorAll("*")) {
          const uu = Uu.clientWidth * Uu.clientHeight;
          uu > su && au(Uu, Eu) && (ju = Uu, su = uu)
        }
        return ju
      },
      vu = (uu, Eu, ju) => "y" === Eu ? ju < 0 ? uu.scrollTop > 0 : uu.scrollTop + uu.clientHeight < uu.scrollHeight - 1 : ju < 0 ? uu.scrollLeft > 0 : uu.scrollLeft + uu.clientWidth < uu.scrollWidth - 1,
      Ku = (uu, Eu, ju) => {
        "y" === Eu ? uu.scrollBy({
          top: ju,
          behavior: "instant"
        }) : uu.scrollBy({
          left: ju,
          behavior: "instant"
        })
      },
      Vu = uu => {
        if (!uu || uu === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Eu = uu.getBoundingClientRect(),
          ju = Math.max(0, Eu.left),
          su = Math.max(0, Eu.top);
        return new DOMRect(ju, su, Math.min(window.innerWidth, Eu.right) - ju, Math.min(window.innerHeight, Eu.bottom) - su)
      },
      ru = (uu, Eu) => uu.left < Eu.right && Eu.left < uu.right && uu.top < Eu.bottom && Eu.top < uu.bottom;
    var Qu = ju(58),
      iu = ju(1105),
      Wu = ju.n(iu),
      Su = ju(1154);
    let Iu = 0,
      Fu = !1;
    class Bu {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(uu) {
        this.element = uu, this.shownKey = "", this.gap = null
      }
      show(uu) {
        const Eu = this.element;
        if (!Eu) return;
        const ju = uu ? this.keepOnScreen(Eu, uu) : null,
          su = ju ? `${ju.left},${ju.top},${ju.width},${ju.height}` : "";
        if (su === this.shownKey) return;
        const Uu = "" === this.shownKey;
        this.shownKey = su, Eu.classList.toggle("Visible", null !== ju), ju && (Eu.classList.toggle("Snap", Uu), Eu.style.width = `${ju.width}px`, Eu.style.height = `${ju.height}px`, Eu.style.transform = `translate(${ju.left}px, ${ju.top}px)`, Uu && (Eu.offsetWidth, Eu.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(uu, Eu) {
        var ju;
        const su = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Fu){Fu=!0;const uu=document.createElement("div");uu.setAttribute("aria-hidden","true"),uu.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(uu),new ResizeObserver((()=>{Iu++})).observe(uu)}return String(Iu)})()}`;
        (null === (ju = this.gap) || void 0 === ju ? void 0 : ju.key) !== su && (this.gap = {
          px: parseFloat(getComputedStyle(uu).paddingLeft) || 0,
          key: su
        });
        const Uu = this.gap.px + 2,
          Zu = Math.max(Eu.left, Uu),
          Xu = Math.max(Eu.top, Uu),
          lu = Math.min(Eu.left + Eu.width, window.innerWidth - Uu),
          qu = Math.min(Eu.top + Eu.height, window.innerHeight - Uu);
        return lu <= Zu || qu <= Xu ? Eu : {
          left: Zu,
          top: Xu,
          width: lu - Zu,
          height: qu - Xu
        }
      }
    }
    const Lu = uu => {
      let {
        placer: Eu,
        className: ju
      } = uu;
      const su = (0, Qu.useCallback)((uu => {
        Eu.setElement(uu)
      }), [Eu]);
      return (0, Su.jsx)("div", {
        ref: su,
        className: Wu()("PadReticle", ju),
        "aria-hidden": !0
      })
    };
    var tu = ju(8889);
    const xu = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Tu = new class {
      constructor() {
        this.state = xu, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(uu) {
        if (Eu = this.state, ju = uu, (Eu.visible || ju.visible) && (Eu.visible !== ju.visible || Eu.x !== ju.x || Eu.y !== ju.y || Eu.pressed !== ju.pressed)) {
          var Eu, ju;
          this.state = uu;
          for (const Eu of this.listeners) Eu(uu)
        }
      }
      hide() {
        this.set(xu)
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    };
    var Hu = ju(8896);
    const Au = (uu, Eu) => {
        let {
          kind: ju,
          holding: su,
          hasPress: Uu,
          hasBack: Zu,
          slotHasItem: Xu
        } = Eu;
        switch (uu) {
          case "primary":
            return "slot" === ju ? "slotPrimary" : "recipe" === ju || "button" === ju ? Uu ? "pressPrimary" : "click" : "textField" === ju ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ju ? "slotSecondary" : "button" !== ju && "recipe" !== ju || !Uu ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ju && Xu ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ju && Xu && !su ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return su ? "cancel" : Zu ? "pressBack" : "close"
        }
      },
      nu = uu => {
        const Eu = [];
        if (uu.hotbarPicking) return Eu.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Eu.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Eu;
        if (uu.holding) "slot" === uu.kind ? (Eu.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Eu.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === uu.kind && Eu.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Eu.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Eu.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), uu.openButtonCloses && Eu.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ju;
          "slot" === uu.kind && uu.slotHasItem ? (Eu.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Eu.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Eu.push({
            actions: ["inventoryQuickMove"],
            labelKey: uu.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Eu.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Eu.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== uu.kind && "recipe" !== uu.kind || !uu.pressHints ? "button" === uu.kind || "recipe" === uu.kind ? Eu.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === uu.kind && Eu.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (uu.pressHints.primary && Eu.push({
            actions: ["inventoryPrimary"],
            labelKey: uu.pressHints.primary
          }), uu.pressHints.secondary && Eu.push({
            actions: ["inventorySecondary"],
            labelKey: uu.pressHints.secondary
          }));
          const su = null === (ju = uu.pressHints) || void 0 === ju ? void 0 : ju.back;
          su && Eu.push({
            actions: ["inventoryClose"],
            labelKey: su
          });
          const Uu = [];
          uu.openButtonCloses && Uu.push("inventory"), su || Uu.push("inventoryClose"), Uu.length > 0 && Eu.push({
            actions: Uu,
            labelKey: "inventoryClose"
          })
        }
        return Eu.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), uu.hasCategories ? Eu.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : uu.hasList && Eu.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Eu
      };
    var yu = ju(8903),
      zu = ju(8899);
    class Ru {
      constructor(uu) {
        this.probes = uu, this.byContainer = new Map, this.byParent = new Map
      }
      find(uu, Eu) {
        const ju = Pu(uu, "y", Eu);
        if (!ju) return null;
        let su = this.byContainer.get(ju);
        return su || (this.probes.push({
          element: ju,
          rect: sE(ju.getBoundingClientRect())
        }), su = {
          container: ju,
          box: Vu(ju),
          group: jE(ju)
        }, this.byContainer.set(ju, su)), su
      }
      findForParent(uu, Eu) {
        let ju = this.byParent.get(uu);
        return void 0 === ju && (ju = this.find(uu, Eu), this.byParent.set(uu, ju)), ju
      }
    }
    const uE = new WeakMap;
    let EE = 0;
    const jE = uu => {
        let Eu = uE.get(uu);
        return Eu || (Eu = "el:" + EE++, uE.set(uu, Eu)), Eu
      },
      sE = uu => ({
        left: uu.left,
        top: uu.top,
        width: uu.width,
        height: uu.height
      }),
      UE = uu => uu.width > 0 && uu.height > 0,
      ZE = (uu, Eu) => UE(uu) && uu.left + uu.width > 0 && uu.top + uu.height > 0 && uu.left < Eu.width && uu.top < Eu.height,
      XE = (uu, Eu, ju) => {
        const su = uu.top + uu.height / 2;
        return ZE(uu, Eu) && (!ju || su >= ju.top && su <= ju.bottom)
      },
      lE = uu => ({
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2
      }),
      qE = (uu, Eu, ju) => uu < 0 ? ju >= 0 ? 0 : Eu - 1 : ((uu + ju) % Eu + Eu) % Eu,
      fE = uu => "Left" === uu || "Right" === uu,
      CE = (uu, Eu, ju) => {
        const su = fE(ju),
          Uu = su ? uu.top : uu.left,
          Zu = su ? uu.height : uu.width,
          Xu = su ? Eu.top : Eu.left,
          lu = su ? Eu.height : Eu.width,
          qu = Math.max(0, Math.max(Xu - (Uu + Zu), Uu - (Xu + lu)));
        return Zu > 1.5 * lu ? {
          gap: qu,
          offset: Math.max(0, Xu - Uu) + .1 * Math.max(0, Uu - Xu)
        } : {
          gap: qu,
          offset: Math.abs(Xu + lu / 2 - (Uu + Zu / 2))
        }
      },
      bE = (uu, Eu, ju) => {
        const su = ((uu, Eu, ju) => {
          const su = lE(uu),
            Uu = lE(Eu),
            Zu = fE(ju) ? Math.min(uu.width, Eu.width) / 4 : Math.min(uu.height, Eu.height) / 4;
          switch (ju) {
            case "Right":
              return Uu.x - su.x >= Zu ? Math.max(0, Eu.left - (uu.left + uu.width)) : null;
            case "Left":
              return su.x - Uu.x >= Zu ? Math.max(0, uu.left - (Eu.left + Eu.width)) : null;
            case "Down":
              return Uu.y - su.y >= Zu ? Math.max(0, Eu.top - (uu.top + uu.height)) : null;
            case "Up":
              return su.y - Uu.y >= Zu ? Math.max(0, uu.top - (Eu.top + Eu.height)) : null
          }
        })(uu, Eu, ju);
        if (null === su) return null;
        const Uu = CE(uu, Eu, ju);
        return su + 3 * Uu.gap + .5 * Uu.offset
      },
      cE = (uu, Eu) => Eu.visible || null !== Eu.scrollGroup && Eu.scrollGroup === uu.scrollGroup,
      NE = (uu, Eu, ju, su) => {
        let Uu = null,
          Zu = 1 / 0;
        for (const Xu of Eu) {
          if (Xu.key === uu.key || !cE(uu, Xu) || !su(Xu)) continue;
          const Eu = bE(uu.rect, Xu.rect, ju);
          null !== Eu && Eu < Zu && (Uu = Xu, Zu = Eu)
        }
        return Uu
      },
      OE = (uu, Eu, ju) => {
        const su = NE(uu, Eu, ju, (() => !0));
        if (!su || fE(ju) || null === uu.scrollGroup || su.scrollGroup === uu.scrollGroup) return su;
        const Uu = NE(uu, Eu, ju, (Eu => 0 === CE(uu.rect, Eu.rect, ju).gap));
        return null !== Uu && void 0 !== Uu ? Uu : su
      },
      YE = (uu, Eu, ju) => {
        let su = null,
          Uu = 1 / 0;
        for (const Zu of Eu) {
          if (!Zu.visible || ju && !ju(Zu)) continue;
          const Eu = lE(Zu.rect),
            Xu = Math.hypot(Eu.x - uu.x, Eu.y - uu.y);
          Xu < Uu && (su = Zu, Uu = Xu)
        }
        return su
      },
      hE = uu => {
        const {
          rect: Eu,
          clip: ju
        } = uu;
        if (!ju) return Eu;
        const su = Math.max(Eu.left, ju.left),
          Uu = Math.max(Eu.top, ju.top);
        return {
          left: su,
          top: Uu,
          width: Math.min(Eu.left + Eu.width, ju.left + ju.width) - su,
          height: Math.min(Eu.top + Eu.height, ju.top + ju.height) - Uu
        }
      },
      DE = (uu, Eu) => Eu.x >= uu.left && Eu.x < uu.left + uu.width && Eu.y >= uu.top && Eu.y < uu.top + uu.height,
      gE = (uu, Eu) => {
        let ju = null,
          su = 1 / 0;
        for (const Uu of Eu) {
          const Eu = hE(Uu);
          (Uu.visible || Uu.clip) && DE(Eu, uu) && (Eu.width * Eu.height < su && (ju = Uu, su = Eu.width * Eu.height))
        }
        return ju
      },
      ME = uu => {
        let Eu = null;
        for (const ju of uu) {
          if (!ju.visible) continue;
          if (!Eu) {
            Eu = ju;
            continue
          }
          const uu = Math.min(Eu.rect.height, ju.rect.height) / 2,
            su = ju.rect.top - Eu.rect.top;
          (su < -uu || Math.abs(su) <= uu && ju.rect.left < Eu.rect.left) && (Eu = ju)
        }
        return Eu
      },
      eE = (uu, Eu, ju, su, Uu) => {
        const Zu = Uu % Eu,
          Xu = Math.floor(Uu / Eu);
        return {
          left: uu.left + Zu * ju,
          top: uu.top + Xu * su,
          width: uu.width,
          height: uu.height
        }
      },
      GE = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      pE = ".LazyLoadedItemWrapper",
      wE = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      JE = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      dE = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      aE = uu => uu.hasAttribute("data-inven-idx") ? "slot" : uu.hasAttribute("data-recipe-key") ? "recipe" : uu.hasAttribute("data-craft-ingredient") || (0, zu.r)(uu) ? "info" : (0, tu.L)(uu) ? "textField" : "button",
      PE = (uu, Eu) => "slot" === Eu ? Number(uu.getAttribute("data-inven-idx")) : null,
      oE = uu => uu.matches(pE) ? uu.querySelector(wE) : uu,
      kE = uu => {
        var Eu, ju;
        return {
          element: uu,
          recipe: null !== (Eu = uu && (null === (ju = oE(uu)) || void 0 === ju ? void 0 : ju.getAttribute("data-recipe-key"))) && void 0 !== Eu ? Eu : null
        }
      },
      mE = uu => {
        const Eu = oE(uu);
        if (!Eu) return {
          kind: "pending",
          idx: null
        };
        const ju = aE(Eu);
        return {
          kind: ju,
          idx: PE(Eu, ju)
        }
      },
      vE = uu => {
        const Eu = [];
        for (const [ju, su] of JE) {
          uu.matches(su) && Eu.push([ju, uu]);
          for (const Uu of uu.querySelectorAll(su)) Eu.push([ju, Uu])
        }
        return Eu
      },
      KE = (uu, Eu) => {
        for (const [ju, su] of uu)
          if (su.contains(Eu)) return ju;
        return "other"
      },
      VE = (uu, Eu, ju, su, Uu, Zu, Xu, lu) => {
        var qu;
        const fu = uu.children,
          Cu = sE(fu[0].getBoundingClientRect()),
          bu = [{
            element: fu[0],
            rect: Cu
          }];
        if (Zu.push(bu[0]), 0 === Cu.width || 0 === Cu.height) return;
        let cu = 1;
        for (; cu < fu.length && Math.abs(fu[cu].getBoundingClientRect().top - Cu.top) < 1;) cu++;
        const Nu = uu => {
            const Eu = {
              element: fu[uu],
              rect: sE(fu[uu].getBoundingClientRect())
            };
            return Zu.push(Eu), bu.push(Eu), Eu.rect
          },
          Ou = cu > 1 ? Nu(1).left - Cu.left : Cu.width,
          Yu = fu.length > cu ? Nu(cu).top - Cu.top : Cu.height,
          hu = Xu.find(uu, Eu);
        let Du = null;
        if (hu) {
          var gu;
          const {
            container: uu,
            box: Eu
          } = hu;
          Du = null !== (gu = lu.get(uu)) && void 0 !== gu ? gu : null, Du || (Du = {
            top: uu.scrollTop,
            left: uu.scrollLeft,
            box: Eu,
            viewport: su,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, lu.set(uu, Du)), Du.probes.push(...bu)
        }
        const Mu = Uu.length;
        for (let wu = 0; wu < fu.length; wu++) {
          var eu, Gu, pu;
          const uu = fu[wu],
            Eu = eE(Cu, cu, Ou, Yu, wu),
            Zu = uu.firstElementChild ? uu.querySelector(wE) : null,
            Xu = Zu ? aE(Zu) : "pending";
          Uu.push({
            key: jE(uu),
            rect: Eu,
            panel: ju,
            scrollGroup: null !== (eu = null === hu || void 0 === hu ? void 0 : hu.group) && void 0 !== eu ? eu : null,
            visible: XE(Eu, su, null === hu || void 0 === hu ? void 0 : hu.box),
            clip: null !== (Gu = null === hu || void 0 === hu ? void 0 : hu.box) && void 0 !== Gu ? Gu : null,
            element: uu,
            kind: Xu,
            idx: Zu ? PE(Zu, Xu) : null,
            scrollContainer: null !== (pu = null === hu || void 0 === hu ? void 0 : hu.container) && void 0 !== pu ? pu : null
          })
        }
        null === (qu = Du) || void 0 === qu || qu.targets.push(...Uu.slice(Mu))
      },
      rE = uu => uu instanceof Element && null !== uu.closest(pE),
      QE = uu => null !== uu.scrollContainer && rE(uu.element);
    class iE {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(uu, Eu, ju, su) {
        this.latched = {
          source: uu,
          focusKey: Eu,
          sinceMs: ju,
          hold: {
            id: ++this.presses,
            holdMs: su
          }
        }
      }
      update(uu, Eu, ju) {
        const su = this.latched;
        return su ? uu && Eu === su.focusKey ? ju - su.sinceMs < su.hold.holdMs ? null : (this.latched = null, su.source) : (this.latched = null, null) : null
      }
      getHold() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.latched) || void 0 === Eu ? void 0 : Eu.hold) && void 0 !== uu ? uu : null
      }
      reset() {
        this.latched = null
      }
    }
    var WE = ju(8909);
    const SE = {
        kind: "none"
      },
      IE = uu => ({
        x: uu.clientX,
        y: uu.clientY
      }),
      FE = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class BE {
      constructor() {
        this.hovered = SE, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(uu, Eu, ju, su, Uu) {
        const Zu = null !== Eu ? {
            kind: "slot",
            idx: Eu
          } : ju ? {
            kind: "element",
            element: ju
          } : SE,
          Xu = `${Uu}|${Math.round(su.clientX)},${Math.round(su.clientY)}`,
          lu = (qu = this.hovered, fu = Zu, "slot" === qu.kind && "slot" === fu.kind ? qu.idx === fu.idx : "element" === qu.kind && "element" === fu.kind ? qu.element === fu.element : qu.kind === fu.kind);
        var qu, fu;
        if (lu && Xu === this.signature) return;
        const Cu = !lu || Uu !== this.holding || "" === this.signature;
        this.signature = Xu, this.holding = Uu, this.lastPoint = su;
        const bu = this.hovered;
        if (this.hovered = Zu, "slot" === Zu.kind) return this.leaveElement(bu, null, su), void(Cu ? uu.hover(Zu.idx, su) : uu.moveTo(su));
        if (lu) return void("element" === Zu.kind ? (0, tu.o)(Zu.element, Zu.element, IE(su)) : uu.hover(null, su));
        uu.hover(null, su);
        const cu = "element" === Zu.kind ? Zu.element : null;
        "element" === bu.kind ? (0, tu.o)(bu.element, cu, IE(su)) : cu && (0, tu.o)(null, cu, IE(su))
      }
      invalidate() {
        this.signature = ""
      }
      clear(uu) {
        const Eu = this.hovered;
        this.hovered = SE, this.signature = "", "none" !== Eu.kind && (this.leaveElement(Eu, null, this.lastPoint), uu && "slot" === Eu.kind && uu.hover(null, this.lastPoint))
      }
      leaveElement(uu, Eu, ju) {
        "element" === uu.kind && (0, tu.o)(uu.element, Eu, IE(ju))
      }
    }
    class LE {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(uu, Eu) {
        wu(uu) && (this.lastTiltedMs = Eu)
      }
      allowsClick(uu) {
        return uu - this.lastTiltedMs > 150
      }
    }
    class tE {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(uu) {
        return 0 !== (0, Ou.i)(uu, .2).y
      }
      step(uu, Eu, ju) {
        uu !== this.container && (this.container = uu, this.remainder = 0);
        const su = Ju(Eu, ju).y;
        if (0 === su) return this.remainder = 0, !1;
        const Uu = this.remainder + su,
          Zu = Math.trunc(Uu);
        if (this.remainder = Uu - Zu, 0 === Zu) return !1;
        const Xu = uu.scrollTop;
        return uu.scrollTop = Xu + Zu, uu.scrollTop !== Xu
      }
      current() {
        var uu;
        return null !== (uu = this.container) && void 0 !== uu && uu.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var xE = ju(8915);
    const TE = "[data-pad-inventory-default]",
      HE = ".HotBarGameItemsContainer .InvenItem.Selected",
      AE = {
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
      nE = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      yE = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      zE = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      RE = [...yE, ...zE],
      uj = () => {
        return uu = (0, Cu.i)("inventory"), !RE.map(Cu.i).includes(uu) && !(0, Ou.I)(uu);
        var uu
      },
      Ej = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      jj = (uu, Eu) => {
        const ju = !(null === Eu || void 0 === Eu || !Eu.isHolding());
        return function(uu, Eu) {
          const ju = uu.find((uu => uu.visible && Eu(uu)));
          if (ju) return ju;
          for (var su = arguments.length, Uu = new Array(su > 2 ? su - 2 : 0), Zu = 2; Zu < su; Zu++) Uu[Zu - 2] = arguments[Zu];
          for (const Xu of Uu) {
            const Eu = ME(uu.filter(Xu));
            if (Eu) return Eu
          }
          return ME(uu)
        }(uu, (uu => {
          const {
            element: Eu
          } = uu;
          return Eu.matches(TE) || null !== Eu.querySelector(TE) || Eu.matches(HE)
        }), (uu => "slot" === uu.kind ? ju || null !== uu.idx && !(null === Eu || void 0 === Eu || !Eu.hasItemAt(uu.idx)) : "recipe" === uu.kind || "pending" === uu.kind), (uu => "slot" === uu.kind || "button" === uu.kind))
      };
    class sj {
      constructor() {
        this.set = null, this.observer = new MutationObserver((uu => {
          uu.some((uu => !rE(uu.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = uu => {
          this.scrolled(uu.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const uu = [],
              Eu = [];
            let ju = !1;
            const su = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Uu = new Map,
              Zu = new Ru(Eu);
            for (const bu of document.querySelectorAll(GE)) {
              const Cu = vE(bu);
              ju ||= null !== bu.querySelector(".CreativeCategoryTab");
              for (const ju of bu.querySelectorAll(`${pE}:first-child`)) {
                const Xu = ju.parentElement;
                VE(Xu, bu, KE(Cu, Xu), su, uu, Eu, Zu, Uu)
              }
              for (const ju of bu.querySelectorAll(wE)) {
                var Xu, lu, qu, fu;
                if (ju.closest(pE) || ju.closest("[data-pad-ignore]")) continue;
                const cu = null === (Xu = ju.parentElement) || void 0 === Xu ? void 0 : Xu.closest(wE);
                if (cu && bu.contains(cu)) continue;
                const Nu = aE(ju),
                  Ou = PE(ju, Nu);
                if (-1 === Ou) continue;
                const Yu = sE(ju.getBoundingClientRect());
                Eu.push({
                  element: ju,
                  rect: Yu
                });
                const hu = Zu.findForParent(ju.parentElement, bu),
                  Du = hu && !Uu.has(hu.container) ? hu : null;
                (Du ? UE(Yu) : ZE(Yu, su)) && uu.push({
                  key: jE(ju),
                  rect: Yu,
                  panel: KE(Cu, ju),
                  scrollGroup: null !== (lu = null === Du || void 0 === Du ? void 0 : Du.group) && void 0 !== lu ? lu : null,
                  visible: XE(Yu, su, null === Du || void 0 === Du ? void 0 : Du.box),
                  clip: null !== (qu = null === Du || void 0 === Du ? void 0 : Du.box) && void 0 !== qu ? qu : null,
                  element: ju,
                  kind: Nu,
                  idx: Ou,
                  scrollContainer: null !== (fu = null === Du || void 0 === Du ? void 0 : Du.container) && void 0 !== fu ? fu : null
                })
              }
            }
            for (const [bu, cu] of Uu) cu.holdsOthers = Eu.some((uu => uu.element !== bu && bu.contains(uu.element) && !uu.element.closest(pE)));
            const Cu = new Map;
            for (const bu of uu) Cu.set(bu.element, bu);
            return {
              targets: uu,
              byElement: Cu,
              hasCategories: ju,
              probes: Eu,
              scrollers: Uu
            }
          })(), this.observer.disconnect();
          for (const uu of document.querySelectorAll(GE)) this.observer.observe(uu, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(uu) {
        !this.set || uu instanceof Element && ((uu, Eu) => {
          const ju = uu.scrollers.get(Eu);
          if (!ju || ju.holdsOthers || Eu.scrollLeft !== ju.left) return !1;
          const su = Eu.scrollTop - ju.top;
          if (0 === su) return !0;
          ju.top = Eu.scrollTop;
          for (const Uu of ju.probes) Uu.rect.top -= su;
          for (const Uu of ju.targets) Uu.rect.top -= su, Uu.visible = XE(Uu.rect, ju.viewport, ju.box);
          return !0
        })(this.set, uu) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((uu => {
          return Eu = uu.rect, ju = uu.element.getBoundingClientRect(), !(Eu.left === ju.left && Eu.top === ju.top && Eu.width === ju.width && Eu.height === ju.height);
          var Eu, ju
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Uj = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Ou.D.map((uu => [uu, (0, Yu.b)(Ou.E)]))), this.stickRepeat = new Ou.b((0, Yu.b)(Ou.jb)), this.pageUpTimer = (0, Yu.b)(Ou.eb), this.pageDownTimer = (0, Yu.b)(Ou.eb), this.stickGate = new Gu, this.pointer = null, this.activePress = null, this.dropLatch = new iE, this.scroller = new tE, this.scrollStickClick = new LE, this.hover = new BE, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Bu, this.targets = new sj, this.hasCategories = !1, this.wasShowing = !1, this.state = WE.b, this.isActive = () => (0, yu.h)(), this.isShowing = () => "inventory" === bu.d.getActiveConsumerName() && (0, Nu.l)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, yu.e)()), (0, yu.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var uu;
            this.reopenSlotIdx = null !== (uu = this.focused ? mE(this.focused).idx : null) && void 0 !== uu ? uu : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, yu.p)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = uu => {
            (0, lu.unstable_batchedUpdates)((() => {
              this.frame(uu)
            }))
          }, this.shouldBlockRealPointer = uu => uu.isTrusted && !(0, Du.s)(uu) && this.isShowing(), this.noteRealPointer = uu => {
            uu instanceof MouseEvent && uu.isTrusted && !(0, Du.s)(uu) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = uu.clientX, this.lastRealPointer.y = uu.clientY)
          }, this.wakePressActs = uu => {
            var Eu;
            return uu === (0, Cu.i)("inventoryClose") ? !(null !== (Eu = (0, yu.e)()) && void 0 !== Eu && Eu.isHolding()) : !(uu !== (0, Cu.i)("inventory") || !uj()) || ((0, Ou.I)(uu) ? this.isNavButton(uu) : zE.some((Eu => (0, Cu.i)(Eu) === uu)))
          }
        }
        frame(uu) {
          var Eu, ju, su, Uu, Zu;
          const Xu = (0, yu.e)();
          if (!(0, Nu.l)()) return void(this.wasShowing && (this.endInteraction(Xu), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), uu.wokeDevice && this.focusWakePointer(!(null === Xu || void 0 === Xu || !Xu.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, cu.f)().inventoryNavigation || this.pointer || this.engagePointer();
          const lu = performance.now();
          this.handleNavigation(uu, lu), this.handlePanels(uu), this.handlePaging(uu, lu), this.handleScroll(uu), this.handleButtons(uu, lu, Xu), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const qu = this.ensureFocus(),
            fu = this.focusContext(Xu);
          this.ring.show(qu);
          const bu = "slot" === fu.kind ? fu.idx : null,
            Ou = null !== (Eu = null === (ju = fu.actionElement) || void 0 === ju ? void 0 : ju.querySelector(".DoCraftItem")) && void 0 !== Eu ? Eu : fu.actionElement;
          this.pointer ? (this.hover.sync(Xu, bu, Ou, ((uu, Eu) => {
            const ju = Eu ? FE() : 0;
            return {
              clientX: uu.x - ju,
              clientY: uu.y - ju
            }
          })(this.pointer, fu.holding), fu.holding), Tu.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: uu.isHeld((0, Cu.i)("inventoryPrimary"))
          })) : qu && this.focused && this.hover.sync(Xu, bu, Ou, ((uu, Eu) => {
            if (!Eu) return {
              clientX: uu.left + uu.width - 10,
              clientY: uu.top + uu.height / 2 - 10
            };
            const ju = FE();
            return {
              clientX: uu.left + uu.width / 2 - ju,
              clientY: uu.top + uu.height / 2 - ju
            }
          })(qu, fu.holding), fu.holding), this.publishState({
            showing: !0,
            kind: fu.kind,
            holding: fu.holding,
            slotHasItem: fu.slotHasItem,
            pressHints: null !== (su = null === (Uu = fu.press) || void 0 === Uu ? void 0 : Uu.hints) && void 0 !== su ? su : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && QE(this.focusTarget),
            openButtonCloses: uj(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === fu.kind && !(null === (Zu = fu.actionElement) || void 0 === Zu || !Zu.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(uu) {
          var Eu;
          const ju = (0, Nu.e)();
          if (!ju) return;
          this.targets.revalidate();
          const su = this.getTargets().targets;
          this.setFocus(null !== (Eu = gE(ju, su)) && void 0 !== Eu ? Eu : uu ? YE(ju, su, (uu => {
            let {
              rect: Eu
            } = uu;
            const su = Math.max(Eu.left - ju.x, 0, ju.x - (Eu.left + Eu.width)),
              Uu = Math.max(Eu.top - ju.y, 0, ju.y - (Eu.top + Eu.height));
            return Math.hypot(su, Uu) <= Math.min(Eu.width, Eu.height) / 2
          })) : null, !1), "cursor" === (0, cu.f)().inventoryNavigation && (this.pointer = {
            x: ju.x,
            y: ju.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const uu = this.lastRealPointer;
          if (!uu || "keyboardMouse" !== qu.d.get("activeInputDevice")) return;
          const Eu = document.elementFromPoint(uu.x, uu.y);
          Eu && (0, tu.o)(null, Eu, uu)
        }
        endInteraction(uu) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Eu of this.dpadTimers.values()) Eu.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(uu), this.ring.hide(), this.releasePointer(), this.publishState(WE.b)
        }
        getTargets() {
          const uu = this.targets.get();
          return this.hasCategories = uu.hasCategories, uu
        }
        currentTarget() {
          var uu;
          return this.focused && null !== (uu = this.getTargets().byElement.get(this.focused)) && void 0 !== uu ? uu : null
        }
        readFocusRect() {
          const uu = this.focused;
          if (null === uu || void 0 === uu || !uu.isConnected || !uu.closest(GE)) return null;
          const Eu = uu.getBoundingClientRect();
          return Eu.width > 0 && Eu.height > 0 ? {
            left: Eu.left,
            top: Eu.top,
            width: Eu.width,
            height: Eu.height
          } : null
        }
        ensureFocus() {
          const uu = this.readFocusRect();
          if (uu || this.pointer) return uu;
          const {
            targets: Eu,
            byElement: ju
          } = this.getTargets();
          let su = null,
            Uu = !1;
          if (this.lastRect) su = YE(lE(this.lastRect), Eu);
          else {
            var Zu, Xu;
            const uu = ((uu, Eu) => {
                const ju = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ju ? jj(uu.filter((uu => ju.contains(uu.element))), Eu) : null
              })(Eu, (0, yu.e)()),
              lu = Eu.find((uu => null !== uu.idx && uu.idx === this.reopenSlotIdx)),
              qu = document.querySelector(HE);
            Uu = null !== uu || void 0 !== lu, su = null !== (Zu = null !== (Xu = null !== uu && void 0 !== uu ? uu : lu) && void 0 !== Xu ? Xu : qu && ju.get(qu)) && void 0 !== Zu ? Zu : ME(Eu)
          }
          return this.setFocus(su, Uu), this.lastRect
        }
        setFocus(uu) {
          let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          uu && (this.focused = uu.element, this.focusTarget = uu, this.panelMemory.set(uu.panel, uu.element), Eu && uu.scrollContainer && ((uu, Eu) => {
            const ju = uu.getBoundingClientRect(),
              su = Vu(Eu),
              Uu = Eu.scrollTop;
            return ju.top < su.top ? Eu.scrollTop -= su.top - ju.top : ju.bottom > su.bottom && (Eu.scrollTop += ju.bottom - su.bottom), Eu.scrollTop !== Uu
          })(uu.element, uu.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, cu.f)().inventoryNavigation) {
              if (this.lastRect) {
                const uu = lE(this.lastRect);
                this.pointer = {
                  x: uu.x,
                  y: uu.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const uu = this.lastRect ? lE(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: uu.x,
            y: uu.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Tu.hide()
        }
        hoverAtPointer() {
          var uu;
          const Eu = gE(this.pointer, this.getTargets().targets);
          this.focusTarget = Eu, (null === Eu || void 0 === Eu ? void 0 : Eu.element) !== this.focused && (this.focused = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.element) && void 0 !== uu ? uu : null, Eu && (this.panelMemory.set(Eu.panel, Eu.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(uu, Eu) {
          const ju = this.focusTarget,
            su = ju && (0, cu.f)().cursorMagnetism ? lE(hE(ju)) : null;
          this.pointer = pu(this.pointer, {
            stick: uu.leftStick,
            moveDeadzone: (0, cu.f)().moveDeadzone,
            dpad: Eu,
            dtMs: uu.dtMs,
            cursorSpeedPercent: (0, cu.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: su
            }
          })
        }
        move(uu) {
          this.targets.revalidate();
          const Eu = this.currentTarget();
          Eu && this.setFocus(OE(Eu, this.getTargets().targets, uu))
        }
        step(uu) {
          const Eu = this.pointer;
          if (Eu && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((uu, Eu, ju) => {
            var su;
            const Uu = {
              key: "",
              rect: {
                left: uu.x,
                top: uu.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (su = OE(Uu, Eu, ju)) && void 0 !== su ? su : YE(uu, Eu)
          })(Eu, this.getTargets().targets, uu));
          this.move(uu)
        }
        isNavButton(uu) {
          return !yE.some((Eu => (0, Cu.i)(Eu) === uu)) && !(uu === (0, Cu.i)("inventory") && uj())
        }
        handleNavigation(uu, Eu) {
          const ju = (0, cu.f)().inventoryNavigation,
            su = {
              x: 0,
              y: 0
            };
          let Uu = null;
          for (const qu of Ou.D) {
            const Zu = this.isNavButton(qu) && uu.isHeld(qu);
            Zu && (su.x += AE[qu].x, su.y += AE[qu].y), this.dpadTimers.get(qu).update(Zu, Eu) && "cursor" !== ju && (Uu ??= qu)
          }
          const Zu = this.stickGate.update(uu.leftStick, (0, cu.f)().moveDeadzone);
          if (Uu && (this.step(Uu), this.stickGate.lock()), "slot" !== ju) {
            const Eu = ((uu, Eu, ju, su) => "hybrid" !== uu ? "cursor" === uu : !su && (Eu || ju))(ju, null !== this.pointer, Zu, null !== Uu);
            return Eu && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(uu, "cursor" === ju ? su : {
              x: 0,
              y: 0
            }))
          }
          const Xu = (0, Ou.i)(uu.leftStick, (0, cu.f)().moveDeadzone),
            lu = this.stickRepeat.update(Zu ? (0, Ou.mb)(Xu) : null, Eu);
          lu && this.move(lu)
        }
        applyCategoryPlace() {
          const uu = this.placeAfterCategory;
          if (!uu) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Eu = YE(lE(uu.rect), this.getTargets().targets, (Eu => Eu.scrollGroup === uu.scrollGroup));
          this.setFocus(Eu, !1)
        }
        applyFocusRequest() {
          const uu = (0, yu.p)();
          uu && (this.targets.invalidate(), this.setFocus((0, yu.b)(this.getTargets().targets, uu)))
        }
        handlePanels(uu) {
          var Eu, ju, su;
          const Uu = uu.wasPressed((0, Cu.i)("inventoryPanelPrevious")),
            Zu = uu.wasPressed((0, Cu.i)("inventoryPanelNext"));
          if (!Uu && !Zu) return;
          const {
            targets: Xu
          } = this.getTargets(), lu = (qu = ((uu, Eu) => {
            const ju = [];
            for (const Uu of uu) Uu.visible && !ju.includes(Uu.panel) && ju.push(Uu.panel);
            const su = uu => {
              const su = Eu.indexOf(uu);
              return -1 === su ? Eu.length + ju.indexOf(uu) : su
            };
            return ju.sort(((uu, Eu) => su(uu) - su(Eu)))
          })(Xu, dE), fu = null !== (Eu = null === (ju = this.focusTarget) || void 0 === ju ? void 0 : ju.panel) && void 0 !== Eu ? Eu : null, bu = Zu ? 1 : -1, 0 === qu.length ? null : qu[qE(null === fu ? -1 : qu.indexOf(fu), qu.length, bu)]);
          var qu, fu, bu;
          if (null === lu) return;
          const cu = this.panelMemory.get(lu),
            Nu = Xu.filter((uu => uu.panel === lu)),
            Ou = null !== (su = Nu.find((uu => uu.element === cu && uu.visible))) && void 0 !== su ? su : jj(Nu, (0, yu.e)());
          this.setFocus(Ou)
        }
        handlePaging(uu, Eu) {
          const ju = (0, Cu.i)("menuPageUp"),
            su = (0, Cu.i)("menuPageDown"),
            Uu = this.pageUpTimer.update(uu.isHeld(ju), Eu),
            Zu = this.pageDownTimer.update(uu.isHeld(su), Eu);
          if (!Uu && !Zu) return;
          const Xu = Zu ? 1 : -1;
          if (!uu.wasPressed(Zu ? su : ju) && this.hasCategories) return;
          if ((uu => {
              const Eu = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Eu.length) return !1;
              const ju = Eu.findIndex((uu => uu.classList.contains("Selected"))),
                su = Eu[qE(ju, Eu.length, uu)];
              return (0, tu.m)(su, (0, tu.A)(su)), !0
            })(Xu)) {
            var lu, qu;
            this.targets.invalidate();
            const uu = null !== (lu = null === (qu = this.focusTarget) || void 0 === qu ? void 0 : qu.scrollGroup) && void 0 !== lu ? lu : null,
              Eu = this.readFocusRect();
            return void(this.placeAfterCategory = null !== uu && Eu && !this.pointer ? {
              rect: Eu,
              scrollGroup: uu
            } : null)
          }
          const {
            targets: fu
          } = this.getTargets(), bu = this.currentTarget(), cu = bu && QE(bu) ? bu : fu.find((uu => QE(uu) && uu.visible));
          if (!cu) return;
          const Nu = ((uu, Eu, ju, su) => {
            if (null === uu.scrollGroup) return null;
            const Uu = lE(uu.rect),
              Zu = Uu.x,
              Xu = Uu.y + ("Down" === ju ? su : -su);
            let lu = null,
              qu = 1 / 0;
            for (const fu of Eu) {
              if (fu.scrollGroup !== uu.scrollGroup || fu.key === uu.key) continue;
              const Eu = lE(fu.rect);
              if ("Down" === ju ? Eu.y <= Uu.y : Eu.y >= Uu.y) continue;
              const su = Math.hypot(Eu.x - Zu, Eu.y - Xu);
              su < qu && (lu = fu, qu = su)
            }
            return lu
          })(cu, fu, Xu > 0 ? "Down" : "Up", cu.scrollContainer.clientHeight);
          this.setFocus(null !== Nu && void 0 !== Nu ? Nu : cu)
        }
        handleScroll(uu) {
          var Eu, ju, su, Uu, Zu, Xu;
          if (!this.scroller.isScrolling(uu.rightStick)) return void this.scroller.reset();
          const {
            targets: lu
          } = this.getTargets(), qu = this.pointer, fu = !qu && this.focusTarget && QE(this.focusTarget) ? this.focusTarget.scrollContainer : null, Cu = qu && (null === (Eu = lu.find((uu => uu.clip && DE(uu.clip, qu)))) || void 0 === Eu ? void 0 : Eu.scrollContainer), bu = null !== (ju = null !== (su = null !== (Uu = this.scroller.current()) && void 0 !== Uu ? Uu : Cu) && void 0 !== su ? su : fu) && void 0 !== ju ? ju : null === (Zu = lu.find(QE)) || void 0 === Zu ? void 0 : Zu.scrollContainer;
          if (!bu || !this.scroller.step(bu, uu.rightStick, uu.dtMs)) return;
          this.targets.scrolled(bu);
          const cu = qu || (null === (Xu = this.focusTarget) || void 0 === Xu ? void 0 : Xu.scrollContainer) !== bu ? null : this.readFocusRect();
          if (!cu) return;
          const Nu = Vu(bu),
            Ou = lE(cu);
          if (Ou.y < Nu.top || Ou.y > Nu.bottom) {
            const uu = this.focusTarget.scrollGroup,
              Eu = YE(Ou, this.getTargets().targets, (Eu => Eu.scrollGroup === uu));
            this.setFocus(Eu, !1)
          }
        }
        focusContext(uu) {
          const {
            kind: Eu,
            idx: ju
          } = this.focused ? mE(this.focused) : {
            kind: null,
            idx: null
          }, su = this.focused ? oE(this.focused) : null, Uu = su ? (0, xE.b)(su) : null;
          return {
            kind: Eu,
            idx: ju,
            actionElement: su,
            press: Uu,
            hasPress: null !== Uu,
            hasBack: !(null === Uu || void 0 === Uu || !Uu.back),
            holding: uu.isHolding(),
            slotHasItem: null !== ju && uu.hasItemAt(ju)
          }
        }
        handleButtons(uu, Eu, ju) {
          var su, Uu;
          if (!this.activePress || uu.isHeld(this.activePress.button) && (su = this.activePress.target, Uu = this.focused, null !== su.recipe ? kE(Uu).recipe === su.recipe : Uu === su.element) || this.releasePress(), this.scrollStickClick.update(uu.rightStick, Eu), !this.handleHotbarPick(uu, ju)) {
            for (const [su, Uu] of nE) {
              const Zu = (0, Cu.i)(Uu);
              if (!uu.wasPressed(Zu) || "openButton" === su && !uj()) continue;
              if ("RS" === Zu && !this.scrollStickClick.allowsClick(Eu)) continue;
              const Xu = this.focusContext(ju),
                lu = Au(su, Xu);
              lu && this.runIntent(lu, Xu, Zu, ju)
            }
            this.handleDrop(uu, Eu, ju)
          }
        }
        handleHotbarPick(uu, Eu) {
          const ju = this.hotbarPick;
          if (!ju) return !1;
          const su = uu.wasPressed((0, Cu.i)("inventoryPrimary")) || uu.wasPressed((0, Cu.i)("inventoryHotbarSwap"));
          if (!su && !uu.wasPressed((0, Cu.i)("inventoryClose")) && !Eu.isHolding()) return !(uu.wasPressed((0, Cu.i)("inventory")) && uj());
          const Uu = this.focusTarget;
          su && "hotbar" === (null === Uu || void 0 === Uu ? void 0 : Uu.panel) && null !== Uu.idx && Uu.idx !== ju.idx && (Eu.swapWithHotbar(Uu.idx, ju.idx), this.afterAction()), this.hotbarPick = null;
          const Zu = ju.element.isConnected ? this.getTargets().byElement.get(ju.element) : void 0;
          return Zu && this.setFocus(Zu), !0
        }
        startHotbarPick(uu) {
          var Eu;
          const {
            targets: ju,
            byElement: su
          } = this.getTargets(), Uu = document.querySelector(HE), Zu = null !== (Eu = Uu && su.get(Uu)) && void 0 !== Eu ? Eu : ju.find((uu => "hotbar" === uu.panel));
          Zu && this.focused && (this.hotbarPick = {
            idx: uu,
            element: this.focused
          }, this.setFocus(Zu))
        }
        focusKey() {
          return this.focused ? jE(this.focused) : null
        }
        handleDrop(uu, Eu, ju) {
          const su = (0, Cu.i)("inventoryDrop");
          if (uu.wasPressed(su)) {
            const uu = (Uu = this.focusContext(ju)).holding ? {
              kind: "dl"
            } : "slot" === Uu.kind && Uu.slotHasItem && null !== Uu.idx ? {
              kind: "slot",
              idx: Uu.idx
            } : null;
            return void(uu && (this.dropFrom(uu, !1, ju), this.dropLatch.press(uu, this.focusKey(), Eu, hu.b[(0, cu.f)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Uu;
          const Zu = this.dropLatch.update(uu.isHeld(su), this.focusKey(), Eu);
          Zu && ((uu, Eu, ju) => "dl" === uu.kind ? Eu : !Eu && ju(uu.idx))(Zu, ju.isHolding(), ju.hasItemAt) && (this.dropFrom(Zu, !0, ju), this.afterAction())
        }
        dropFrom(uu, Eu, ju) {
          "dl" === uu.kind ? ju.dropHeld(Eu, this.slotPoint()) : ju.dropSlot(uu.idx, Eu)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (uu => {
            const Eu = lE(uu);
            return {
              clientX: Eu.x,
              clientY: Eu.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(uu, Eu, ju, su) {
          const Uu = Eu.idx,
            Zu = Eu.actionElement;
          switch (Zu && Ej.has(uu) && (0, Du.u)(Zu), uu) {
            case "slotPrimary":
              su.primary(Uu, this.slotPoint());
              break;
            case "slotSecondary":
              su.secondary(Uu, this.slotPoint());
              break;
            case "slotQuickMove":
              su.quickMove(Uu, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Uu);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Eu.press, "pressPrimary" === uu ? "primary" : "secondary", ju);
              break;
            case "click":
              (0, tu.m)(Zu, (0, tu.A)(Zu));
              break;
            case "openKeyboard":
              (0, tu.L)(Zu) && (0, tu.I)(Zu);
              break;
            case "pressBack":
              Eu.press.back();
              break;
            case "cancel":
              su.cancel();
              break;
            case "close":
              return this.releasePress(), void su.close()
          }
          this.afterAction()
        }
        startPress(uu, Eu, ju) {
          this.releasePress(), uu.press(Eu) && (this.activePress = {
            handlers: uu,
            button: ju,
            target: kE(this.focused)
          })
        }
        releasePress() {
          var uu, Eu, ju;
          null === (uu = this.activePress) || void 0 === uu || null === (Eu = (ju = uu.handlers).release) || void 0 === Eu || Eu.call(ju), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(uu) {
          ((uu, Eu) => {
            var ju, su, Uu, Zu, Xu, lu;
            return uu.showing === Eu.showing && uu.kind === Eu.kind && uu.holding === Eu.holding && uu.slotHasItem === Eu.slotHasItem && (null === (ju = uu.pressHints) || void 0 === ju ? void 0 : ju.primary) === (null === (su = Eu.pressHints) || void 0 === su ? void 0 : su.primary) && (null === (Uu = uu.pressHints) || void 0 === Uu ? void 0 : Uu.secondary) === (null === (Zu = Eu.pressHints) || void 0 === Zu ? void 0 : Zu.secondary) && (null === (Xu = uu.pressHints) || void 0 === Xu ? void 0 : Xu.back) === (null === (lu = Eu.pressHints) || void 0 === lu ? void 0 : lu.back) && uu.hasCategories === Eu.hasCategories && uu.hasList === Eu.hasList && uu.openButtonCloses === Eu.openButtonCloses && uu.steppingSlots === Eu.steppingSlots && uu.hotbarPicking === Eu.hotbarPicking && uu.quickMoveToHotbar === Eu.quickMoveToHotbar && uu.dropStackHold === Eu.dropStackHold
          })(uu, this.state) || (this.state = uu, fu.h.TY(WE.e, uu))
        }
      },
      Zj = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Xj = ju(8922),
      lj = ju(337),
      qj = ju(1687),
      fj = ju(8405);
    const Cj = "[data-pad-secondary]",
      bj = uu => uu instanceof HTMLElement && (0, zu.m)(uu) && !(0, zu.r)(uu),
      cj = uu => {
        const Eu = uu.querySelector(Cj);
        if (Eu && bj(Eu)) return Eu;
        for (const Uu of null !== (ju = null === (su = uu.parentElement) || void 0 === su ? void 0 : su.children) && void 0 !== ju ? ju : []) {
          var ju, su;
          if (Uu !== uu && Uu.matches(Cj) && bj(Uu)) return Uu
        }
        return null
      },
      Nj = (uu, Eu, ju, su) => Math.max(0, Math.max(uu, ju) - Math.min(Eu, su)),
      Oj = (uu, Eu, ju, su) => Math.max(0, Math.min(Eu, su) - Math.max(uu, ju)),
      Yj = (uu, Eu, ju) => {
        const su = (uu.left + uu.right) / 2,
          Uu = (uu.top + uu.bottom) / 2,
          Zu = (Eu.left + Eu.right) / 2,
          Xu = (Eu.top + Eu.bottom) / 2;
        if ("Left" === ju || "Right" === ju) {
          const lu = "Right" === ju ? 1 : -1;
          return {
            forwardGap: "Right" === ju ? Eu.left - uu.right : uu.left - Eu.right,
            centreForward: (Zu - su) * lu,
            sidewaysGap: Nj(uu.top, uu.bottom, Eu.top, Eu.bottom),
            sidewaysOverlap: Oj(uu.top, uu.bottom, Eu.top, Eu.bottom),
            centreSideways: Math.abs(Xu - Uu),
            startSideways: Math.abs(Eu.top - uu.top),
            fromSidewaysSize: uu.bottom - uu.top,
            toSidewaysSize: Eu.bottom - Eu.top,
            toLength: Eu.right - Eu.left
          }
        }
        const lu = "Down" === ju ? 1 : -1;
        return {
          forwardGap: "Down" === ju ? Eu.top - uu.bottom : uu.top - Eu.bottom,
          centreForward: (Xu - Uu) * lu,
          sidewaysGap: Nj(uu.left, uu.right, Eu.left, Eu.right),
          sidewaysOverlap: Oj(uu.left, uu.right, Eu.left, Eu.right),
          centreSideways: Math.abs(Zu - su),
          startSideways: Math.abs(Eu.left - uu.left),
          fromSidewaysSize: uu.right - uu.left,
          toSidewaysSize: Eu.right - Eu.left,
          toLength: Eu.bottom - Eu.top
        }
      },
      hj = uu => uu.centreForward > .5 && uu.forwardGap >= -uu.toLength / 2,
      Dj = uu => {
        const Eu = uu.sidewaysOverlap > 0 ? 0 : 2 * uu.fromSidewaysSize,
          ju = uu.fromSidewaysSize > 1.5 * uu.toSidewaysSize ? uu.startSideways : uu.centreSideways;
        return Math.max(0, uu.forwardGap) + 3 * uu.sidewaysGap + Eu + .1 * ju
      },
      gj = (uu, Eu) => Oj(uu.top, uu.bottom, Eu.top, Eu.bottom) > 0 || Eu.bottom - Eu.top > Eu.right - Eu.left,
      Mj = (uu, Eu, ju, su, Uu, Zu) => {
        const Xu = Uu ? Gj(uu, Eu, ju, Uu) : new Set,
          lu = wj(uu, Eu, ju, Xu);
        return lu < 0 && Xu.size > 0 && Zu ? ej(uu, Eu, ju, Zu) : su && lu >= 0 ? pj(uu, Eu, ju, su, lu, Xu) : lu
      },
      ej = (uu, Eu, ju, su) => {
        const Uu = new Set,
          Zu = wj(uu, Eu, "Up", Uu) >= 0,
          Xu = wj(uu, Eu, "Down", Uu) >= 0,
          lu = new Set;
        return Eu.forEach(((Eu, ju) => {
          const Uu = Eu.top + Eu.bottom < uu.top + uu.bottom;
          su[ju] && !(Uu ? Zu : Xu) || lu.add(ju)
        })), wj(uu, Eu, ju, lu)
      },
      Gj = (uu, Eu, ju, su) => {
        const Uu = new Set;
        return "Left" !== ju && "Right" !== ju || Eu.forEach(((Eu, ju) => {
          su[ju] && Oj(uu.top, uu.bottom, Eu.top, Eu.bottom) <= 0 && Uu.add(ju)
        })), Uu
      },
      pj = (uu, Eu, ju, su, Uu, Zu) => {
        const Xu = Yj(uu, Eu[Uu], ju).forwardGap;
        let lu = Uu,
          qu = su[Uu],
          fu = 1 / 0;
        return Eu.forEach(((Eu, Cu) => {
          const bu = su[Cu];
          if (Zu.has(Cu) || bu < qu || bu === qu && lu === Uu) return;
          const cu = Yj(uu, Eu, ju);
          if (!hj(cu) || cu.forwardGap < 0 || cu.forwardGap >= Xu) return;
          const Nu = Dj(cu);
          (bu > qu || Nu < fu) && (lu = Cu, qu = bu, fu = Nu)
        })), lu
      },
      wj = (uu, Eu, ju, su) => {
        let Uu = -1,
          Zu = 1 / 0;
        if (Eu.forEach(((Eu, Xu) => {
            const lu = ((uu, Eu, ju) => {
              const su = Yj(uu, Eu, ju);
              if (!hj(su)) return null;
              const Uu = Math.max(0, su.forwardGap);
              return su.sidewaysOverlap <= 0 && su.sidewaysGap > 2 * (Uu + 1) ? null : Dj(su)
            })(uu, Eu, ju);
            null !== lu && lu < Zu && !su.has(Xu) && (Zu = lu, Uu = Xu)
          })), Uu < 0) return -1;
        const Xu = Eu[Uu],
          lu = Yj(uu, Xu, ju).forwardGap;
        let qu = lu,
          fu = Uu;
        return Eu.forEach(((Eu, Zu) => {
          if (Zu === Uu || su.has(Zu) || !((uu, Eu, ju) => {
              const su = "Left" === ju || "Right" === ju,
                Uu = su ? Oj(uu.top, uu.bottom, Eu.top, Eu.bottom) : Oj(uu.left, uu.right, Eu.left, Eu.right),
                Zu = su ? Math.min(uu.bottom - uu.top, Eu.bottom - Eu.top) : Math.min(uu.right - uu.left, Eu.right - Eu.left);
              return Uu > 0 && Uu >= Zu / 2
            })(Eu, Xu, ju)) return;
          const Cu = Yj(uu, Eu, ju);
          hj(Cu) && Cu.forwardGap + Cu.toLength <= lu + 1 && Cu.forwardGap < qu && (qu = Cu.forwardGap, fu = Zu)
        })), fu
      },
      Jj = (uu, Eu) => {
        let ju = -1,
          su = 1 / 0;
        return Eu.forEach(((Eu, Uu) => {
          const Zu = Math.max(Eu.left - uu.x, 0, uu.x - Eu.right),
            Xu = Math.max(Eu.top - uu.y, 0, uu.y - Eu.bottom),
            lu = Math.hypot(Zu, Xu);
          lu < su && (su = lu, ju = Uu)
        })), ju
      },
      dj = (uu, Eu) => {
        const ju = Math.min(uu.bottom - uu.top, Eu.bottom - Eu.top) / 2;
        return Math.abs(uu.top - Eu.top) > ju ? uu.top - Eu.top : uu.left - Eu.left
      },
      aj = uu => {
        let Eu = -1;
        for (let ju = 0; ju < uu.length; ju++)(Eu < 0 || dj(uu[ju], uu[Eu]) < 0) && (Eu = ju);
        return Eu
      };
    var Pj = ju(1727),
      oj = ju(8924),
      kj = ju(8933);
    const mj = uu => {
        if ("death" !== uu || "inGame" !== qu.d.get("gameState") || "off" === (0, cu.f)().quickChat || null === (0, Pj.c)()) return !1;
        const Eu = (0, Cu.i)("chat");
        return Eu !== (0, Cu.i)("menuConfirm") && Eu !== (0, Cu.i)("menuBack")
      },
      vj = new oj.e;
    var Kj = ju(4460),
      Vj = ju(8942),
      rj = ju(8944);
    const Qj = uu => {
        let Eu = null;
        for (const ju of uu.querySelectorAll("[data-pad-tabs]"))(0, zu.m)(ju) && (!Eu || Number(ju.dataset.padTabs) < Number(Eu.dataset.padTabs)) && (Eu = ju);
        return Eu
      },
      ij = (uu, Eu, ju, su) => {
        uu.focusWhenFound((() => {
          const Uu = uu.pickInitial(Eu);
          if (Uu && !ju.has(Uu) && (null === su || void 0 === su || !su.contains(Uu))) return Uu;
          const Zu = ((uu, Eu) => {
              const ju = Eu => uu.getEnabledCandidates(Eu).filter((uu => !uu.closest("[data-pad-tabs]")));
              for (const su of (0, zu.g)(Eu)) {
                const uu = ju(su);
                if (uu.length > 0) return uu
              }
              return ju(Eu)
            })(uu, Eu).filter((uu => !ju.has(uu))),
            Xu = aj(Zu.map((uu => uu.getBoundingClientRect())));
          return Xu >= 0 ? Zu[Xu] : null
        }), 3e3)
      },
      Wj = (uu, Eu, ju, su) => {
        var Uu;
        const Zu = ((uu, Eu) => {
          if (0 === uu.length) return null;
          const ju = uu.findIndex((uu => "true" === uu.dataset.padSelected));
          return ju < 0 ? Eu > 0 ? uu[0] : uu[uu.length - 1] : uu[(ju + Eu + uu.length) % uu.length]
        })([...ju.querySelectorAll("[data-pad-tab]")].filter((uu => (0, zu.m)(uu) && !(0, zu.r)(uu))), su);
        if (!Zu) return;
        const Xu = null !== (Uu = null === uu || void 0 === uu ? void 0 : uu.getFocused()) && void 0 !== Uu ? Uu : null,
          lu = !(null === Xu || void 0 === Xu || !Xu.isConnected) && ju.contains(Xu),
          qu = uu && !lu ? new Set(uu.getEnabledCandidates(Eu)) : null;
        (0, tu.b)(Zu), uu && (qu ? ij(uu, Eu, qu, ju) : uu.setFocus(Zu, {
          byUser: !0
        }))
      },
      Sj = uu => {
        var Eu;
        const ju = Vu(null !== (Eu = Pu(uu, "x")) && void 0 !== Eu ? Eu : uu),
          su = (0, zu.c)(uu).filter((uu => !(0, zu.r)(uu))),
          Uu = su.filter((uu => ru(uu.getBoundingClientRect(), ju)));
        return (Uu.length > 0 ? Uu : su).sort(((uu, Eu) => dj(uu.getBoundingClientRect(), Eu.getBoundingClientRect())))
      },
      Ij = (uu, Eu, ju) => {
        const su = [...Eu.querySelectorAll("[data-pad-row]")].filter(zu.m),
          Uu = uu.getFocused(),
          Zu = Uu ? su.findIndex((uu => uu.contains(Uu))) : -1;
        let Xu = 0,
          lu = ju > 0 ? 0 : su.length - 1;
        if (Zu >= 0 && Uu) Xu = Math.max(0, Sj(su[Zu]).indexOf(Uu)), lu = Zu + ju;
        else if (Uu) {
          const uu = Uu.getBoundingClientRect(),
            Eu = su.map((Eu => {
              const su = Eu.getBoundingClientRect();
              return ju > 0 ? su.top >= uu.top : su.bottom <= uu.bottom
            }));
          lu = ju > 0 ? Eu.indexOf(!0) : Eu.lastIndexOf(!0)
        }
        for (let qu = lu; qu >= 0 && qu < su.length; qu += ju) {
          const Eu = Sj(su[qu]);
          if (Eu.length > 0) return void uu.setFocus(Eu[Math.min(Xu, Eu.length - 1)], {
            byUser: !0
          })
        }
      },
      Fj = (uu, Eu, ju) => {
        var su, Uu;
        const Zu = null !== (su = null === uu || void 0 === uu ? void 0 : uu.getFocused()) && void 0 !== su ? su : null,
          Xu = null !== Zu && void 0 !== Zu && Zu.closest("[data-pad-row]") ? "x" : "y",
          lu = null !== (Uu = Zu ? Pu(Zu, Xu, Eu) : null) && void 0 !== Uu ? Uu : ku(Eu, Xu);
        if (!lu) return;
        const qu = Zu ? (0, tu.A)(Zu) : null;
        if (Ku(lu, Xu, ju * ("y" === Xu ? lu.clientHeight : lu.clientWidth) * .85), !uu || !qu) return;
        const fu = Vu(lu),
          Cu = uu.getEnabledCandidates(Eu).filter((uu => lu.contains(uu) && ru(uu.getBoundingClientRect(), fu))),
          bu = Jj(qu, Cu.map((uu => uu.getBoundingClientRect())));
        bu >= 0 && uu.setFocus(Cu[bu], {
          scroll: !1,
          byUser: !0
        })
      };
    let Bj = null;
    const Lj = (uu, Eu) => {
        var ju, su;
        const Uu = Eu.querySelector("[data-pad-friends-column]"),
          Zu = uu.getFocused();
        if (!Uu || !Zu || !Uu.contains(Zu)) return !1;
        const Xu = uu.getEnabledCandidates(Eu).filter((uu => !Uu.contains(uu))),
          lu = Jj((0, tu.A)(Zu), Xu.map((uu => uu.getBoundingClientRect()))),
          qu = null === (ju = Bj) || void 0 === ju ? void 0 : ju.deref();
        return uu.setFocus(null !== qu && void 0 !== qu && qu.isConnected ? qu : null !== (su = Xu[lu]) && void 0 !== su ? su : null, {
          byUser: !0
        }), !0
      },
      tj = uu => {
        const Eu = (0, Cu.i)(uu);
        return (0, Ou.I)(Eu) || fj.o.some((uu => (0, Cu.i)(uu) === Eu)) ? null : Eu
      },
      xj = (uu, Eu) => {
        const ju = tj(Eu);
        return null !== ju && uu.wasPressed(ju)
      },
      Tj = function(uu, Eu, ju) {
        let su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Uu = (uu => {
            var Eu, ju;
            return null !== (Eu = null === (ju = Qj(uu)) || void 0 === ju ? void 0 : ju.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Eu ? Eu : null
          })(Eu),
          Zu = uu && Uu ? new Set(uu.getEnabledCandidates(Eu)) : null;
        (0, Xj.d)(), ju === lj.o.SETTINGS && (0, qj.l)(qu.d.get("openEverythingMenuName")) ? qu.d.set({
          openEverythingMenuName: ju
        }) : (0, qj.x)((0, rj.b)("padMenuShortcut"), ju, su), uu && Zu && Uu && ij(uu, Eu, Zu, Uu.closest("[data-pad-tabs]"))
      },
      Hj = uu => null !== uu.closest(".Dropdown-root") || null !== uu.querySelector(".Dropdown-root.is-open"),
      Aj = uu => null !== (0, Vj.d)() && "popup" !== uu.layer.kind && !Qj(uu.root) && !Hj(uu.root),
      nj = (0, Yu.b)(Ou.eb),
      yj = (0, Yu.b)(Ou.eb),
      zj = (uu, Eu, ju) => {
        if (((uu, Eu) => {
            const ju = (0, Cu.i)("chat");
            return mj(Eu) && uu.isHeld(ju) ? "hold" === vj.update(uu.wasPressed(ju), uu.isHeld(ju), performance.now(), hu.b[(0, cu.f)().tapHoldTime].wheelMs) && (bu.d.consumeButton(ju), fu.h.TY(kj.k), !0) : (vj.release(), !1)
          })(Eu, ju.layer.kind)) return !0;
        const su = ju.root;
        for (const [Xu, lu] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Eu.wasPressed((0, Cu.i)(Xu))) {
            const Eu = Hj(su) ? null : Qj(su);
            if (Eu) Wj(uu, su, Eu, lu);
            else if (Aj(ju)) {
              var Uu;
              const Eu = uu ? new Set(uu.getEnabledCandidates(su)) : null;
              null !== (Uu = (0, Vj.d)()) && void 0 !== Uu && Uu(lu) && uu && Eu && ij(uu, su, Eu, null)
            } else uu && Ij(uu, su, lu);
            return !0
          } for (const [Xu, lu, qu] of [
            ["menuPageUp", -1, nj],
            ["menuPageDown", 1, yj]
          ]) {
          const ju = (0, Cu.i)(Xu);
          if (Eu.wasPressed(ju) && qu.reset(), qu.update(Eu.isHeld(ju), performance.now())) return Fj(uu, su, lu), !0
        }
        const Zu = "popup" === ju.layer.kind;
        return xj(Eu, "pause") ? (Zu || (0, qj.t)() && "menu" !== ju.layer.kind || Tj(uu, su, (0, qj.t)() ? lj.o.SETTINGS : (0, Kj.e)()), !0) : !!xj(Eu, "leaderboard") && ("home" === ju.layer.kind ? (uu => {
          const Eu = [...uu.querySelectorAll("[data-pad-notifications]")].find(zu.m);
          Eu && (0, tu.b)(Eu)
        })(su) : Zu || Tj(uu, su, lj.o.LOBBY_LEADERBOARD, "inGame" === qu.d.get("gameState")), !0)
      },
      Rj = (uu, Eu, ju) => {
        if (zj(uu, Eu, ju)) return !0;
        const su = "home" === ju.layer.kind;
        if (Eu.wasPressed((0, Cu.i)("menuSecondary"))) {
          const Eu = uu.getFocused(),
            Uu = Eu ? cj(Eu) : null;
          if (Uu) return (0, tu.b)(Uu), !0;
          if (su) {
            const Eu = ju.root.querySelector("[data-pad-search] input");
            return Eu && (0, zu.q)(Eu, ju.root) ? (uu.setFocus(Eu, {
              byUser: !0
            }), (0, tu.b)(Eu)) : qu.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!su || !xj(Eu, "inventory")) && (((uu, Eu) => {
          var ju, su;
          const Uu = Eu.querySelector("[data-pad-friends-column]");
          if (!Uu || !(0, zu.m)(Uu)) return void(0, qj.x)((0, rj.b)("padMenuShortcut"), lj.o.SOCIAL);
          if (Lj(uu, Eu)) return;
          const Zu = null !== (ju = null === (su = Uu.querySelector("[data-pad-friends-start]")) || void 0 === su ? void 0 : su.getBoundingClientRect().top) && void 0 !== ju ? ju : -1 / 0,
            Xu = uu.getEnabledCandidates(Uu),
            lu = Xu.filter((uu => uu.getBoundingClientRect().top >= Zu)),
            qu = lu.length > 0 ? lu : Xu,
            fu = aj(qu.map((uu => uu.getBoundingClientRect())));
          uu.setFocus(fu >= 0 ? qu[fu] : null, {
            byUser: !0
          })
        })(uu, ju.root), !0)
      },
      us = uu => {
        var Eu, ju, su;
        const Uu = (0, tu.C)(uu);
        if (null !== Uu) return Uu;
        const Zu = (null !== (Eu = null !== (ju = null !== (su = uu.getAttribute("aria-label")) && void 0 !== su ? su : uu.getAttribute("title")) && void 0 !== ju ? ju : uu.textContent) && void 0 !== Eu ? Eu : "").replace(/\s+/g, " ").trim();
        return Zu ? `${uu.tagName}:${Zu.slice(0,100)}` : null
      };
    class Es {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(uu) {
        const Eu = this.history.indexOf(uu);
        if (Eu >= 0) {
          for (const uu of this.history.splice(Eu + 1)) this.remembered.delete(uu);
          return !0
        }
        return this.remembered.delete(uu), this.history.push(uu), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(uu) {
        this.remembered.delete(uu);
        const Eu = this.history.indexOf(uu);
        Eu >= 0 && this.history.splice(Eu, 1)
      }
      remember(uu, Eu, ju, su) {
        const Uu = us(Eu),
          Zu = (0, tu.C)(Eu),
          Xu = null !== Zu && ((uu, Eu) => {
            let ju = 0;
            for (const su of uu.querySelectorAll("[data-pad-key], [href]"))
              if ((su.getAttribute("data-pad-key") === Eu || su.getAttribute("href") === Eu) && (ju++, ju > 1)) return !0;
            return !1
          })(ju, Zu) ? Math.max(0, this.twins(su(), Zu).indexOf(Eu)) : 0;
        this.remembered.set(uu, {
          element: new WeakRef(Eu),
          identity: Uu,
          ordinal: Xu
        })
      }
      has(uu) {
        return this.remembered.has(uu)
      }
      recall(uu, Eu) {
        var ju, su;
        const Uu = this.remembered.get(uu);
        if (!Uu) return null;
        const Zu = Uu.element.deref();
        if (Zu && Eu.includes(Zu)) return Zu;
        if (null === Uu.identity) return null;
        const Xu = this.twins(Eu, Uu.identity);
        return null !== (ju = null !== (su = Xu[Uu.ordinal]) && void 0 !== su ? su : Xu[0]) && void 0 !== ju ? ju : null
      }
      twins(uu, Eu) {
        return uu.filter((uu => us(uu) === Eu))
      }
    }
    var ss = ju(1330);
    const Us = uu => {
        const Eu = [];
        let ju = uu;
        for (; ju && ju !== document.body;) {
          const uu = getComputedStyle(ju).zIndex;
          "auto" !== uu && Eu.push(Number(uu) || 0), ju = ju.parentElement
        }
        return Eu.reverse()
      },
      Zs = (uu, Eu) => {
        const ju = ((uu, Eu) => {
          const ju = Math.max(uu.length, Eu.length);
          for (let Zu = 0; Zu < ju; Zu++) {
            var su, Uu;
            const ju = (null !== (su = uu[Zu]) && void 0 !== su ? su : 0) - (null !== (Uu = Eu[Zu]) && void 0 !== Uu ? Uu : 0);
            if (0 !== ju) return ju
          }
          return 0
        })(Us(uu), Us(Eu));
        if (0 !== ju) return ju > 0;
        if (uu.contains(Eu)) return !1;
        if (Eu.contains(uu)) return !0;
        const su = uu.compareDocumentPosition(Eu);
        return !!(su & Node.DOCUMENT_POSITION_PRECEDING) || !(su & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Xs = (uu, Eu) => {
        var ju;
        return null !== (ju = Zs(uu.root, Eu.root)) && void 0 !== ju ? ju : uu.order > Eu.order
      },
      ls = (uu, Eu) => Eu.some((Eu => !Eu.contains(uu) && !uu.contains(Eu) && !0 === Zs(Eu, uu)));
    let qs = null,
      fs = null,
      Cs = -1;
    const bs = () => {
        var uu;
        const Eu = null === (uu = document.timeline) || void 0 === uu ? void 0 : uu.currentTime,
          ju = "number" === typeof Eu ? Eu : null;
        if (null !== ju && ju === fs && Cs === (0, ss.d)()) return qs;
        let su = null;
        const Uu = [],
          Zu = [...document.querySelectorAll("[data-pad-covers]")].filter(zu.m);
        for (const Xu of (0, ss.h)()) {
          const uu = Xu.getRoot(),
            Eu = !!uu && (0, zu.m)(uu) && !ls(uu, Zu);
          if (Xu.shown && !Eu && Uu.push(Xu), Xu.shown = Eu, !uu || !Eu) continue;
          const ju = {
            layer: Xu,
            root: uu,
            order: Xu.order
          };
          su && !Xs(ju, su) || (su = ju)
        }
        qs = su, fs = ju, Cs = (0, ss.d)();
        for (const Xu of Uu)(0, ss.j)(Xu);
        return qs
      },
      cs = () => {
        const uu = bs();
        return !(null === uu || void 0 === uu || !uu.layer.close) && (uu.layer.close(), fs = null, !0)
      },
      Ns = () => {
        var uu, Eu;
        return null !== (uu = null === (Eu = bs()) || void 0 === Eu ? void 0 : Eu.root) && void 0 !== uu ? uu : null
      },
      Os = uu => uu ? {
        ...uu,
        root: Ns()
      } : null;
    let Ys = null,
      hs = null,
      Ds = (0, cu.f)().menuNavigation,
      gs = null;
    const Ms = new Gu;
    let es = null;
    fu.h.subscribe(cu.e, (() => {
      const uu = (0, cu.f)().menuNavigation;
      uu !== Ds && (Ds = uu, Ys = null, hs = null)
    }));
    const Gs = () => {
        var uu;
        return null !== (uu = Ys) && void 0 !== uu ? uu : (0, cu.f)().menuNavigation
      },
      ps = uu => {
        if (Ps()) {
          if (gs = Os(uu), "hybrid" === Gs()) return Ms.lock(), void(hs = hs ? null : Ns());
          Ys = "focus" === Gs() ? "cursor" : "focus"
        }
      },
      ws = () => {
        const uu = gs;
        return gs = null, uu
      };
    let ds = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const as = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ju = ds.root === uu,
          su = ju ? ds.firstSeenMs : Eu,
          Uu = ds.has || Eu - su > 1e3;
        return (!ju || !Uu || Eu - ds.atMs > 250) && (ds = {
          root: uu,
          firstSeenMs: su,
          atMs: Eu,
          has: (0, zu.i)(uu)
        }), ds.has
      },
      Ps = () => {
        const uu = Ns();
        return null !== uu && as(uu)
      },
      os = () => {
        const uu = bs();
        return hs && (null === uu || void 0 === uu ? void 0 : uu.root) !== hs && (hs = null), (uu => {
          let {
            mode: Eu,
            hasLayer: ju,
            hasCandidates: su,
            hybridCursorEngaged: Uu
          } = uu;
          return ju ? "cursor" !== Eu && su() ? "hybrid" === Eu && Uu ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Gs(),
          hasLayer: null !== uu,
          hasCandidates: () => null !== uu && as(uu.root),
          hybridCursorEngaged: null !== hs
        })
      },
      ks = () => "hybrid" === Gs() && Ps(),
      ms = "pad-focused";
    var vs = ju(4732),
      Ks = ju(5182);
    const Vs = "[data-pad-destructive]",
      rs = `${Vs}, [data-pad-back]`,
      Qs = uu => ({
        rect: uu.getBoundingClientRect(),
        destructive: uu.matches(Vs),
        closes: null !== uu.closest("[data-pad-close-button]"),
        unavailable: uu.matches("[data-pad-unavailable]")
      }),
      is = uu => {
        let {
          destructive: Eu,
          closes: ju,
          unavailable: su
        } = uu;
        return Eu ? ju ? 2 : 3 : su ? 1 : 0
      },
      Ws = uu => {
        let Eu = -1;
        for (let ju = 0; ju < uu.length; ju++) {
          if (Eu < 0) {
            Eu = ju;
            continue
          }
          const su = uu[ju],
            Uu = uu[Eu];
          is(su) === is(Uu) ? dj(su.rect, Uu.rect) < 0 && (Eu = ju) : is(su) < is(Uu) && (Eu = ju)
        }
        return Eu
      },
      Ss = "[data-pad-tabs]",
      Is = "[data-pad-tab]",
      Fs = (uu, Eu) => {
        const ju = uu.querySelector(`${Is}[data-pad-selected='true']`);
        return ju && Eu.includes(ju) ? ju : null
      },
      Bs = (uu, Eu) => {
        let ju = Eu;
        for (let su = Eu.parentElement; su && !su.contains(uu); su = su.parentElement) ju = su;
        return ju
      };
    class Ls {
      constructor() {
        this.contentReturn = null
      }
      redirect(uu, Eu, ju, su) {
        var Uu, Zu;
        const Xu = uu.closest(Ss),
          lu = Eu.closest(Ss);
        var qu;
        if (lu && lu !== Xu) return Xu || (this.contentReturn = new WeakRef(uu)), null !== (qu = Fs(lu, ju)) && void 0 !== qu ? qu : Eu;
        if (!Xu || lu) return Eu;
        const fu = Bs(uu, Eu),
          Cu = null === (Uu = this.contentReturn) || void 0 === Uu ? void 0 : Uu.deref();
        return Cu && fu.contains(Cu) && ju.includes(Cu) ? Cu : null !== (Zu = this.pickRegionStart(fu, Pu(Eu, "y", su), ju)) && void 0 !== Zu ? Zu : Eu
      }
      findTabContent(uu, Eu, ju) {
        const su = uu.closest(Ss);
        if (!su || !uu.matches(Is) || su.contains(Eu)) return null;
        const Uu = Eu.closest(Ss);
        if (Uu && Number(Uu.dataset.padTabs) <= Number(su.dataset.padTabs)) return null;
        const Zu = Bs(uu, Eu);
        return ju.some((uu => Zu.contains(uu) && !uu.closest(rs))) || !Eu.closest(rs) ? Zu : null
      }
      pickContentStart(uu, Eu, ju) {
        return this.contentReturn = null, this.pickRegionStart(uu, Pu(uu, "y", ju), Eu)
      }
      pickReplacedContentStart(uu, Eu, ju, su) {
        if (!Eu.contains(uu)) return null;
        const Uu = Bs(Eu, uu),
          Zu = ju.filter((uu => Eu.contains(uu) && !Uu.contains(uu) && !uu.closest(rs)));
        return 0 === Zu.length ? null : (this.contentReturn = null, this.pickRegionStart(Eu, Pu(Zu[0], "y", su), Zu))
      }
      backToStrip(uu, Eu, ju) {
        if (uu.closest(Ss)) return null;
        const su = Qj(ju);
        for (const Uu of ju.querySelectorAll(Ss)) {
          if (Number(Uu.dataset.padTabs) <= 1 || Uu === su) continue;
          const Zu = Fs(Uu, Eu),
            Xu = Zu ? Bs(uu, Uu).parentElement : null;
          if (Zu && Xu && Xu !== ju && ju.contains(Xu)) return this.contentReturn = new WeakRef(uu), Zu
        }
        return null
      }
      pickRegionStart(uu, Eu, ju) {
        const su = Vu(Eu),
          Uu = uu => {
            const Eu = ju.filter((Eu => uu.contains(Eu) && !Eu.closest(Ss) && ru(Eu.getBoundingClientRect(), su))),
              Uu = Ws(Eu.map(Qs));
            return Uu >= 0 ? Eu[Uu] : null
          };
        for (const Zu of (0, zu.g)(uu)) {
          const uu = Uu(Zu);
          if (uu) return uu
        }
        for (const Zu of uu.querySelectorAll(Ss)) {
          const uu = Fs(Zu, ju);
          if (uu) return uu
        }
        return Uu(uu)
      }
    }
    const ts = "[data-pad-default-focus], .Dropdown-option.is-selected",
      xs = ".Dropdown-root.is-open > .Dropdown-menu",
      Ts = "[data-pad-no-step-in]",
      Hs = "[data-pad-tabs]",
      As = "[data-pad-press-area]",
      ns = uu => {
        let Eu = uu;
        for (let ju = 0; Eu && ju <= 4; ju++, Eu = Eu.parentElement) {
          const ju = Eu.querySelector(".CircleInfo");
          if (ju) return Eu === uu || Eu.querySelectorAll(zu.b).length <= 1 ? ju : null;
          if (Eu !== uu && Eu.querySelectorAll(zu.b).length > 1) return null
        }
        return null
      },
      ys = (uu, Eu, ju) => {
        (0, tu.o)(uu, Eu, ju);
        const su = null !== uu && void 0 !== uu && uu.isConnected ? ns(uu) : null,
          Uu = ns(Eu);
        su !== Uu && (0, tu.o)(su, Uu, Uu ? (0, tu.A)(Uu) : ju, {
          leaveBelow: uu,
          enterBelow: Eu
        })
      },
      zs = uu => uu.getBoundingClientRect(),
      Rs = (uu, Eu, ju) => {
        const su = new Set(ju);
        for (let Uu = uu; Uu; Uu = Uu === Eu ? null : Uu.parentElement)
          if (su.has(Uu)) return Uu;
        return null
      },
      uU = (uu, Eu) => !uu.root || uu.root === Eu || Eu.matches(xs) && uu.root.contains(Eu);
    const EU = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Es, this.tabStripNav = new Ls, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Yu.b)(Ou.v), this.dpadRepeats = new Map(Ou.D.map((uu => [uu, (0, Yu.b)(Ou.E)]))), this.stickRepeat = new Ou.b((0, Yu.b)(Ou.jb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const uu = bu.d.register({
            name: "focus",
            isActive: () => (0, Nu.l)() && "focus" === os(),
            onFrame: uu => {
              this.onFrame(uu)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: uu => (0, bu.e)(uu) || uu === (0, Cu.i)("menuConfirm") && (0, tu.G)((0, Nu.e)())
          }),
          Eu = (0, ss.l)((uu => {
            const Eu = (0, ss.s)(uu);
            null === uu.memoryKey && this.memory.forget(Eu), Eu === this.layerKey && (this.layerKey = null)
          }));
        let ju = -1 / 0;
        const su = Xu.e.onFrame((uu => {
            (0, Nu.l)() || uu.timestampMs - ju < 100 || (ju = uu.timestampMs, bs())
          })),
          Uu = uu => {
            uu.isTrusted && uu.target instanceof Element && Xu.e.getActivePad() && this.noteChosenStop(uu.target)
          };
        return document.addEventListener("click", Uu, !0), () => {
          uu(), Eu(), su(), document.removeEventListener("click", Uu, !0), this.deactivate()
        }
      }
      noteChosenStop(uu) {
        var Eu, ju;
        const su = bs();
        if (!su || !su.root.contains(uu)) return;
        const Uu = null !== (Eu = null === (ju = uu.closest(".Dropdown-root")) || void 0 === ju ? void 0 : ju.querySelector(".Dropdown-control")) && void 0 !== Eu ? Eu : uu,
          Zu = Rs(Uu, su.root, this.getEnabledCandidates(su.root));
        if (!Zu) return;
        const Xu = (0, ss.s)(su.layer);
        Xu === this.layerKey && su.root === this.layerRoot || this.beginLayer(su, Xu), this.wasActive ? this.setFocus(Zu, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Zu, this.lastFocusedCentre = (0, tu.A)(Zu), this.rememberFocus(Zu), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      deactivate() {
        var uu;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const uu of this.dpadRepeats.values()) uu.reset();
          this.stickRepeat.reset(), null !== (uu = this.focused) && void 0 !== uu && uu.isConnected && ys(this.focused, null, (0, tu.A)(this.focused)), this.notify()
        }
      }
      setFocus(uu) {
        var Eu;
        let {
          scroll: ju = !0,
          byUser: su = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (su && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), uu === this.focused) return;
        const Uu = null !== (Eu = this.focused) && void 0 !== Eu && Eu.isConnected ? this.focused : null;
        if (this.focused = uu, uu) {
          ju && (uu.classList.add(ms), uu.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), su && ((uu, Eu) => {
            const ju = Eu.closest("[data-pad-friends-column]");
            ju && uu && !ju.contains(uu) && (Bj = new WeakRef(uu))
          })(Uu, uu);
          const Eu = (0, tu.A)(uu);
          this.lastFocusedCentre = Eu, this.movedInLayer && this.rememberFocus(uu), ys(Uu, uu, Eu), "false" === uu.getAttribute("aria-pressed") && uu.closest("[data-pad-select-on-focus]") && (0, tu.b)(uu)
        } else Uu && ys(Uu, null, (0, tu.A)(Uu));
        this.notify()
      }
      rememberFocus(uu) {
        const Eu = this.layerRoot;
        this.layerKey && Eu && this.memory.remember(this.layerKey, uu, Eu, (() => this.getEnabledCandidates(Eu)))
      }
      noteCursorActivation(uu) {
        const Eu = bs();
        if (!Eu || !Eu.root.contains(uu)) return;
        const ju = this.getEnabledCandidates(Eu.root),
          su = new Set(ju);
        let Uu = uu;
        for (; Uu && !su.has(Uu);) Uu = Uu === Eu.root ? null : Uu.parentElement;
        if (!(Uu instanceof HTMLElement)) return;
        const Zu = (0, ss.s)(Eu.layer);
        this.memory.enter(Zu), this.memory.remember(Zu, Uu, Eu.root, (() => ju))
      }
      notePageEnteredByCursor(uu) {
        return this.memory.enter(uu)
      }
      recallStop(uu, Eu) {
        return this.findRemembered(uu, Eu)
      }
      focusWhenFound(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: uu,
          untilMs: performance.now() + Eu,
          holdWhile: ju
        }
      }
      getEnabledCandidates(uu) {
        return (0, zu.c)(uu).filter((uu => !(0, zu.r)(uu)))
      }
      onFrame(uu) {
        var Eu;
        const ju = bs();
        if (!ju) return;
        const su = null !== (Eu = this.findOpenDropdown(ju)) && void 0 !== Eu ? Eu : ju,
          Uu = performance.now(),
          Zu = (0, ss.s)(su.layer);
        if (Zu !== this.layerKey || su.root !== this.layerRoot) {
          const Eu = this.focused;
          if (null !== this.layerKey && su.root === this.layerRoot && Eu && (0, zu.q)(Eu, su.root)) this.continueLayer(Zu, Eu), this.wasActive || this.resume(su.root, Uu);
          else {
            const Eu = !this.wasActive && !uu.wokeDevice,
              Xu = "death" === this.layerKind || Eu,
              lu = this.enterLayer(su, Zu);
            "popup" !== su.layer.kind || su !== ju || lu ? "menu" === su.layer.kind && Xu && "inGame" === qu.d.get("gameState") && !(0, Xj.h)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Uu + vs.e) : (this.pressGuardExtends = Eu, this.pressGuardUntilMs = Uu + (Eu ? vs.e : Xu ? 500 : 250))
          }
        } else this.wasActive || this.resume(su.root, Uu);
        if (this.layerKind = su.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), uu.wokeDevice && this.focusPointedStop(su.root), this.validateFocus(su, Uu), Uu < this.pressGuardUntilMs && this.pressGuardExtends && (uu.wasPressed((0, Cu.i)("menuConfirm")) || uu.wasPressed((0, Cu.i)("menuBack"))) && (this.pressGuardUntilMs = Uu + vs.e), Uu >= this.pressGuardUntilMs && this.handleButtons(uu, su)) return;
        const Xu = "hybrid" === Gs();
        if (Xu && (uu => {
            const Eu = Ns();
            return Eu !== es && (es = Eu, Ms.lock()), Ms.update(uu, (0, cu.f)().moveDeadzone)
          })(uu.leftStick)) return lu = this.getHandoff(), gs = Os(lu), hs = Ns(), void bu.d.handOffHeldInput();
        var lu;
        this.handleDirections(uu, su, Uu, !Xu), this.handleScroll(uu, su)
      }
      findOpenDropdown(uu) {
        const Eu = uu.root.querySelector(xs);
        if (!Eu || !(0, zu.m)(Eu)) return null;
        let ju = this.dropdownLayers.get(Eu);
        return ju || (this.dropdownLayerCounter++, ju = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: uu.layer.kind,
          getRoot: () => Eu,
          close: () => {
            (0, tu.j)(Eu)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Eu, ju)), {
          layer: ju,
          root: Eu,
          order: uu.order
        }
      }
      focusPointedStop(uu) {
        const Eu = (0, Nu.e)(),
          ju = Eu ? document.elementFromPoint(Eu.x, Eu.y) : null;
        if (!ju || !uu.contains(ju)) return;
        const su = Rs(ju, uu, this.getEnabledCandidates(uu));
        su && this.setFocus(su, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(uu, Eu) {
        const ju = this.beginLayer(uu, Eu),
          su = ws();
        return su && uU(su, uu.root) ? (this.takeOver(uu.root, su, this.enteredLayerAtMs), ju) : (this.restoreLayerFocus(uu.root, ju), ju)
      }
      beginLayer(uu, Eu) {
        return this.layerKey = Eu, this.layerRoot = uu.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Eu)
      }
      restoreLayerFocus(uu, Eu) {
        const ju = Eu && this.layerKey ? this.findRemembered(uu, this.layerKey) : null;
        this.restoredFromMemory = null !== ju, this.setFocus(null !== ju && void 0 !== ju ? ju : this.pickInitial(uu, {
          waitForContent: !0
        }))
      }
      continueLayer(uu, Eu) {
        this.layerKey = uu;
        const ju = this.memory.enter(uu);
        this.restoreOnFocusLoss = ju, this.movedInLayer && !ju && this.rememberFocus(Eu)
      }
      resume(uu, Eu) {
        var ju;
        const su = ws();
        su && uU(su, uu) ? this.takeOver(uu, su, Eu) : null !== (ju = this.focused) && void 0 !== ju && ju.isConnected && ys(null, this.focused, (0, tu.A)(this.focused))
      }
      pickPreferred(uu) {
        var Eu;
        return null !== (Eu = this.layerKey ? this.findRemembered(uu, this.layerKey) : null) && void 0 !== Eu ? Eu : this.pickInitial(uu, {
          waitForContent: !0
        })
      }
      findRemembered(uu, Eu) {
        return this.memory.has(Eu) ? this.memory.recall(Eu, this.getEnabledCandidates(uu)) : null
      }
      getHandoff() {
        var uu, Eu, ju;
        const su = null !== (uu = this.focused) && void 0 !== uu && uu.isConnected ? this.focused : null,
          Uu = null !== (Eu = this.layerRoot) && void 0 !== Eu && Eu.isConnected ? this.layerRoot : null;
        return {
          point: su ? (0, tu.A)(su) : null !== (ju = this.lastFocusedCentre) && void 0 !== ju ? ju : this.getLayerStartPoint(Uu),
          element: su,
          direction: null
        }
      }
      getLayerStartPoint(uu) {
        if (!uu) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Eu = this.pickInitial(uu, {
          includeDisabled: !0
        });
        return (0, tu.A)(null !== Eu && void 0 !== Eu ? Eu : uu)
      }
      takeOver(uu, Eu, ju) {
        const {
          element: su,
          direction: Uu,
          point: Zu
        } = Eu, Xu = su instanceof HTMLElement && (0, zu.q)(su, uu) ? su : null;
        if (!Uu) {
          const Eu = this.focused;
          return Xu ? this.setFocus(Xu, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(uu, Zu), void(this.focused && this.focused === Eu && this.focused.isConnected && ys(null, this.focused, (0, tu.A)(this.focused)))
        }
        if (this.dpadRepeats.get(Uu).update(!0, ju), Xu) return this.setFocus(Xu, {
          scroll: !1,
          byUser: !0
        }), void this.move(uu, Uu, ju, !0);
        const lu = this.getEnabledCandidates(uu),
          qu = lu.map(zs),
          fu = Mj(new DOMRect(Zu.x, Zu.y, 0, 0), qu, Uu),
          Cu = fu >= 0 ? fu : Jj(Zu, qu);
        this.setFocus(Cu >= 0 ? lu[Cu] : this.pickInitial(uu), {
          byUser: !0
        })
      }
      focusNearest(uu, Eu) {
        const ju = this.getEnabledCandidates(uu),
          su = Jj(Eu, ju.map(zs));
        this.setFocus(su >= 0 ? ju[su] : this.pickInitial(uu), {
          byUser: !0
        })
      }
      pickDefault(uu) {
        let {
          includeDisabled: Eu = !1,
          exclude: ju = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const su = [...uu.querySelectorAll(ts)].filter((su => (null === ju || void 0 === ju || !ju.has(su)) && (Eu ? (0, zu.u)(su, uu) : (0, zu.q)(su, uu)))),
          Uu = Ws(su.map(Qs));
        return Uu >= 0 ? su[Uu] : null
      }
      pickNewAreaStart(uu, Eu) {
        const ju = [...uu.querySelectorAll(As)].filter(zu.m);
        for (const su of [...(0, zu.g)(uu), ...ju]) {
          if (Eu.has(su)) continue;
          const uu = this.getEnabledCandidates(su),
            ju = Ws(uu.map(Qs));
          if (ju >= 0) return uu[ju]
        }
        return null
      }
      pickInitial(uu) {
        let {
          includeDisabled: Eu = !1,
          waitForContent: ju = !1,
          enteredAtMs: su = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Uu = this.pickDefault(uu, {
          includeDisabled: Eu
        });
        if (Uu) return Uu;
        const Zu = uu => Eu ? (0, zu.c)(uu) : this.getEnabledCandidates(uu);
        let Xu = [];
        for (const cu of (0, zu.g)(uu))
          if (Xu = Zu(cu), Xu.length > 0) break;
        if (0 === Xu.length) {
          if (ju && performance.now() - su < 1e4 && (0, zu.l)(uu)) return null;
          Xu = Zu(uu)
        }
        const lu = Xu.map(zs),
          qu = Vu(null),
          fu = Xu.filter(((uu, Eu) => ru(lu[Eu], qu))),
          Cu = fu.length > 0 ? fu : Xu,
          bu = Ws(Cu.map(Qs));
        return bu >= 0 ? Cu[bu] : null
      }
      validateFocus(uu, Eu) {
        if (this.pendingFocus) {
          var ju, su;
          const Uu = this.pendingFocus.find();
          if (Uu && (0, zu.q)(Uu, uu.root)) return this.pendingFocus = null, void this.setFocus(Uu, {
            byUser: !0
          });
          Eu > this.pendingFocus.untilMs && (null === (ju = (su = this.pendingFocus).holdWhile) || void 0 === ju || !ju.call(su)) && (this.pendingFocus = null)
        }
        const Uu = this.focused,
          Zu = !!Uu && (0, zu.q)(Uu, uu.root);
        if (!(!Zu && Uu && Uu === this.lastActivated && Eu - this.lastActivatedAtMs < 5e3 && uu.root.contains(Uu) && (0, zu.m)(Uu) && (0, zu.r)(Uu))) {
          if (!Zu && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Eu, void this.restoreLayerFocus(uu.root, !0);
          if ((!Zu || !this.movedInLayer && !this.scrolledInLayer) && !(Eu - this.lastRefocusCheckMs < (Zu ? 200 : 50)))
            if (this.lastRefocusCheckMs = Eu, Zu) {
              const ju = Eu - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(uu.root) : null,
                su = null !== ju && void 0 !== ju ? ju : this.restoredFromMemory ? null : this.pickDefault(uu.root);
              su && su !== Uu && this.setFocus(su)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Eu = this.pendingFocus;
                return this.focusNearest(uu.root, this.lastFocusedCentre), void(this.pendingFocus = Eu)
              }
              this.setFocus(this.pickPreferred(uu.root))
            }
        }
      }
      handleButtons(uu, Eu) {
        if (uu.wasPressed((0, Cu.i)("menuToggleCursor"))) return ps(this.getHandoff()), !0;
        if (uu.wasPressed((0, Cu.i)("menuBack"))) {
          const uu = (0, tu.j)(Eu.root);
          return uu ? this.setFocus(uu, {
            byUser: !0
          }) : Lj(this, Eu.root) || ((0, tu.c)(Eu.root) ? this.returnToOpener(Eu.root) : this.backToStrip(Eu.root) || cs()), !0
        }
        const ju = (0, Cu.i)("menuConfirm");
        var su, Uu;
        uu.wasPressed(ju) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (su = null === (Uu = this.focused) || void 0 === Uu ? void 0 : Uu.getAttribute("data-pad-repeat")) && void 0 !== su ? su : null, this.confirmRepeated = uu.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (uu.wasReleased(ju)) {
          const uu = this.confirmPressedOn;
          if (this.confirmPressedOn = null, uu && !this.confirmRepeated && uu === this.focused && uu.isConnected && !(0, zu.r)(uu)) {
            const ju = uu.matches("[data-pad-tab]") ? uu.closest(Hs) : null;
            ju ? this.enterTab(uu, ju, Eu.root, performance.now()) : this.activate(uu)
          }
          return !0
        }
        return this.repeatConfirm(uu, ju), Rj(this, uu, Eu)
      }
      repeatConfirm(uu, Eu) {
        const ju = this.confirmPressedOn;
        ju && null !== this.confirmRepeatKey && uu.isHeld(Eu) && (ju === this.focused && ju.isConnected && !(0, zu.r)(ju) && ju.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ju.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ju)) : this.confirmRepeatKey = null)
      }
      backToStrip(uu) {
        const Eu = this.focused;
        if (!(0, cu.f)().menuBackToCategories) return !1;
        const ju = null !== Eu && void 0 !== Eu && Eu.isConnected ? this.tabStripNav.backToStrip(Eu, this.getEnabledCandidates(uu), uu) : null;
        return ju && this.setFocus(ju, {
          byUser: !0
        }), null !== ju
      }
      returnToOpener(uu) {
        const Eu = this.lastActivatedKey;
        Eu && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var ju;
          return null !== (ju = this.getEnabledCandidates(uu).find((uu => (0, tu.C)(uu) === Eu))) && void 0 !== ju ? ju : null
        })))
      }
      activate(uu) {
        var Eu;
        if ((0, Ks.b)(uu) || (0, tu.F)(uu)) return;
        this.lastActivatedKey = null !== (Eu = (0, tu.C)(uu)) && void 0 !== Eu ? Eu : this.lastActivatedKey, this.lastActivated = uu, this.lastActivatedAtMs = performance.now(), this.rememberFocus(uu);
        const ju = this.layerRoot;
        if (ju) {
          const Eu = new Set(ju.querySelectorAll(ts)),
            su = new Set(ju.querySelectorAll(`[data-pad-initial-area], ${As}`)),
            Uu = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Uu;
            return (0, zu.q)(uu, ju) ? null : null !== (Uu = this.pickDefault(ju, {
              exclude: Eu
            })) && void 0 !== Uu ? Uu : this.pickNewAreaStart(ju, su)
          }), 5e3, (() => uu.isConnected && (0, zu.r)(uu) && performance.now() - Uu < 6e4))
        }(0, tu.b)(uu), (0, tu.g)(uu)
      }
      handleDirections(uu, Eu, ju, su) {
        const Uu = mj(Eu.layer.kind) ? (0, Cu.i)("chat") : null;
        for (const lu of Ou.D) {
          this.dpadRepeats.get(lu).update(uu.isHeld(lu), ju) && (lu !== Uu || uu.wasPressed(lu)) && this.move(Eu.root, lu, ju, !0)
        }
        const Zu = su ? (0, Ou.i)(uu.leftStick, (0, cu.f)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Xu = this.stickRepeat.update((0, Ou.mb)(Zu), ju);
        if (Xu && this.move(Eu.root, Xu, ju, !0), this.retryMove && ju >= this.retryMove.atMs) {
          const {
            direction: uu
          } = this.retryMove;
          this.retryMove = null, this.move(Eu.root, uu, ju, !1)
        }
      }
      move(uu, Eu, ju, su) {
        var Uu;
        let Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Uu = this.tabOpenWait) || void 0 === Uu ? void 0 : Uu.wait) && Eu === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Xu = this.focused;
        if (!Xu || !Xu.isConnected) {
          const Eu = this.pickInitial(uu);
          return void(Eu && this.setFocus(Eu, {
            byUser: !0
          }))
        }
        const lu = "Left" === Eu || "Right" === Eu,
          qu = lu ? (0, Ks.b)(Xu) : null;
        if (qu) return void qu.adjust("Left" === Eu ? -1 : 1);
        const fu = uu => null !== uu.closest("[data-pad-friends-column]"),
          Cu = fu(Xu),
          bu = zs(Xu),
          cu = lu || Xu.closest(Hs) ? null : (uu => {
            const Eu = new Map;
            return ju => {
              const su = ju.closest(Hs);
              if (!su) return !1;
              let Uu = Eu.get(su);
              if (void 0 === Uu) {
                const ju = zs(su);
                Uu = gj(uu, ju) && (ju.right <= uu.left || ju.left >= uu.right), Eu.set(su, Uu)
              }
              return Uu
            }
          })(bu),
          Nu = null !== Xu.closest(Ts),
          Ou = this.getEnabledCandidates(uu).filter((uu => uu !== Xu && (lu || fu(uu) === Cu) && !(null !== cu && void 0 !== cu && cu(uu)) && (Nu || !uu.closest(Ts)))),
          Yu = Ou.map(zs),
          hu = Pu(Xu, "y", uu),
          Du = Vu(hu);
        if (!Zu && !ru(bu, Du)) {
          const uu = Ou.filter(((uu, Eu) => ru(Yu[Eu], Du)));
          if (uu.length > 0) {
            const Eu = {
              x: Du.left + Du.width / 2,
              y: Du.top + Du.height / 2
            };
            return void this.setFocus(uu[Jj(Eu, uu.map(zs))], {
              byUser: !0
            })
          }
        }
        const gu = lu ? ((uu, Eu, ju) => {
            const su = zs(uu),
              Uu = uu.closest(Hs),
              Zu = Uu ? zs(Uu) : null;
            return Eu.map(((Eu, Xu) => {
              const lu = ju[Xu];
              if (lu.bottom > su.top && lu.top < su.bottom) return !0;
              const qu = Eu.closest(Hs);
              if (Uu && Zu) return qu !== Uu && (null !== qu || lu.bottom <= Zu.top || lu.top >= Zu.bottom);
              if (qu) return !gj(su, zs(qu));
              let fu = uu;
              for (let ju = uu.parentElement; ju && !ju.contains(Eu); ju = ju.parentElement) fu = ju;
              const Cu = zs(fu);
              return lu.right > Cu.left && lu.left < Cu.right
            }))
          })(Xu, Ou, Yu) : void 0,
          Mu = lu && !Xu.closest(Hs) ? (uu => uu.map((uu => !uu.closest(rs))))(Ou) : void 0,
          eu = ((uu, Eu) => {
            const ju = [];
            for (let Uu = uu; Uu; Uu = Uu.parentElement) ju.push(Uu);
            const su = new Map;
            return ju.forEach(((uu, Eu) => {
              su.set(uu, ju.length - 1 - Eu)
            })), Eu.map((uu => {
              for (let Eu = uu; Eu; Eu = Eu.parentElement) {
                const uu = su.get(Eu);
                if (void 0 !== uu) return uu
              }
              return -1
            }))
          })(Xu, Ou),
          Gu = lu ? "x" : "y",
          pu = Pu(Xu, Gu, uu);
        let wu = Mj(bu, Yu, Eu, eu, gu, Mu);
        if (wu >= 0 && pu && !pu.contains(Ou[wu])) {
          const uu = Ou.flatMap(((uu, Eu) => pu.contains(uu) ? [Eu] : [])),
            ju = Eu => Eu && uu.map((uu => Eu[uu])),
            su = Mj(bu, uu.map((uu => Yu[uu])), Eu, uu.map((uu => eu[uu])), ju(gu), ju(Mu));
          wu = su >= 0 ? uu[su] : wu
        }
        if (wu >= 0) return void this.moveTo(Xu, Ou[wu], Ou, uu, Eu, Zu);
        if (!su) return;
        const Ju = "Right" === Eu || "Down" === Eu ? 1 : -1;
        if (pu && vu(pu, Gu, Ju)) {
          const uu = "y" === Gu ? pu.clientHeight : pu.clientWidth;
          Ku(pu, Gu, Ju * uu * .5), this.retryMove = {
            direction: Eu,
            atMs: ju + 80
          }
        }
      }
      moveTo(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this.tabStripNav.findTabContent(uu, Eu, ju);
        Xu && "true" !== uu.dataset.padSelected ? this.openTab(uu, Xu, su, Uu) : Zu && !Xu || this.setFocus(this.tabStripNav.redirect(uu, Eu, ju, su), {
          byUser: !0
        })
      }
      openTab(uu, Eu, ju, su) {
        const Uu = Eu.parentElement;
        (0, tu.b)(uu), this.focusWhenFound((() => "true" !== uu.dataset.padSelected ? null : Eu.isConnected ? this.tabStripNav.pickContentStart(Eu, this.getEnabledCandidates(ju), ju) : Uu ? this.tabStripNav.pickReplacedContentStart(uu, Uu, this.getEnabledCandidates(ju), ju) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: su
        }
      }
      enterTab(uu, Eu, ju, su) {
        this.move(ju, (uu => {
          const Eu = [...uu.querySelectorAll(Is)].filter((Eu => Eu.closest(Ss) === uu));
          if (Eu.length >= 2) {
            const uu = Eu[0].getBoundingClientRect(),
              ju = Eu[1].getBoundingClientRect();
            return Math.abs(ju.top - uu.top) > Math.abs(ju.left - uu.left) ? "Right" : "Down"
          }
          const ju = uu.getBoundingClientRect();
          return ju.height > ju.width ? "Right" : "Down"
        })(Eu), su, !1, !0), this.focused !== uu || this.pendingFocus || this.activate(uu)
      }
      handleScroll(uu, Eu) {
        const ju = (0, Ou.i)(uu.rightStick, .2);
        if (0 === ju.x && 0 === ju.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const su = uu.dtMs / 1e3;
        for (const Zu of ["x", "y"]) {
          var Uu;
          const uu = ju[Zu];
          if (0 === uu) continue;
          const Xu = null !== (Uu = Pu(this.focused, Zu, Eu.root)) && void 0 !== Uu ? Uu : ku(Eu.root, Zu);
          if (!Xu) continue;
          const lu = Math.sign(uu) * uu * uu * 1500 * su + this.scrollRemainder[Zu],
            qu = Math.trunc(lu);
          this.scrollRemainder[Zu] = lu - qu, 0 !== qu && (Ku(Xu, Zu, qu), this.scrolledInLayer = !0)
        }
      }
    };
    var jU = ju(8447);
    var sU = ju(8947);
    const UU = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      ZU = {
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
          ...UU,
          minIntervalMs: 1e3
        },
        preview: {
          ...UU,
          minIntervalMs: 0
        }
      };
    const XU = new class {
        constructor(uu) {
          this.deps = uu, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = uu => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", uu))
          }
        }
        play(uu, Eu) {
          const ju = ZU[uu];
          if (!this.deps.isVibrationOn() || ju.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const su = this.lastPlayedMs[uu];
          if (void 0 !== su && Eu - su < ju.minIntervalMs) return !1;
          const Uu = this.deps.getActuator();
          if (!Uu) return !1;
          this.lastPlayedMs[uu] = Eu;
          const {
            duration: Zu,
            strongMagnitude: Xu,
            weakMagnitude: lu
          } = ju;
          try {
            Uu.playEffect("dual-rumble", {
              duration: Zu,
              strongMagnitude: Xu,
              weakMagnitude: lu
            }).catch(this.logFailure)
          } catch (qu) {
            this.logFailure(qu)
          }
          return !0
        }
      }({
        getActuator: () => (uu => {
          const Eu = null === uu || void 0 === uu ? void 0 : uu.vibrationActuator;
          return "function" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.playEffect) ? Eu : null
        })(Xu.e.getActiveGamepad()),
        isVibrationOn: () => (0, cu.f)().vibration,
        isPadInUse: Nu.l
      }),
      lU = uu => {
        XU.play(uu, performance.now())
      };
    var qU = ju(8452),
      fU = ju(3074),
      CU = ju(107),
      bU = ju(31),
      cU = ju(701);
    class NU {
      constructor(uu) {
        this.deps = uu
      }
      check() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Eu = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Eu) return "skipped";
        const ju = uu ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ju || this.deps.readReportedVisitId() === ju ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ju), this.deps.HN(Eu, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const OU = "controllerUsageReportedVisit";
    var YU = ju(1405),
      hU = ju(1779),
      DU = ju(680),
      gU = ju(1499),
      MU = ju(1303);
    const eU = uu => ({
        translationKey: `controller:${uu}`
      }),
      GU = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: eU("padButtonView"),
        Menu: eU("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: eU("padButtonDpadUp"),
        Down: eU("padButtonDpadDown"),
        Left: eU("padButtonDpadLeft"),
        Right: eU("padButtonDpadRight"),
        Home: eU("padButtonHome"),
        LeftStick: eU("padButtonLeftStick"),
        RightStick: eU("padButtonRightStick")
      },
      pU = {
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
          View: eU("padButtonCreate"),
          Menu: eU("padButtonOptions")
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
      wU = (uu, Eu) => {
        var ju;
        const su = null !== (ju = pU[uu][Eu]) && void 0 !== ju ? ju : GU[Eu];
        return "string" === typeof su ? su : (0, Uu.x)(MU.h.get().getCurrentLanguageCode(), su.translationKey)
      },
      JU = uu => {
        let {
          glyph: Eu,
          family: ju,
          className: su
        } = uu;
        const Uu = (0, Nu.D)(),
          Zu = null !== ju && void 0 !== ju ? ju : Uu,
          Xu = (0, qU.f)(Zu, Eu);
        return (0, Su.jsx)("span", {
          className: Wu()("ControllerGlyph", su),
          role: "img",
          "aria-label": wU(Zu, Eu),
          style: {
            "--pad-glyph-mask": `url(${Xu})`,
            "--pad-glyph-aspect": (0, qU.e)(Zu, Eu)
          }
        })
      };
    var dU = ju(1964);
    const aU = uu => {
      let {
        action: Eu
      } = uu;
      const {
        t: ju
      } = (0, Uu.A)();
      switch (Eu.kind) {
        case "reload":
          return (0, Su.jsx)("span", {
            children: ju("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Su.jsx)(dU.d, {
            text: Eu.description ? [{
              icon: Eu.icon
            }, ` ${Eu.description}`] : [{
              icon: Eu.icon
            }]
          });
        case "touchButton":
          return (0, Su.jsx)(dU.d, {
            text: Eu.label
          })
      }
    };
    var PU = ju(8956);
    const oU = uu => {
      let {
        hold: Eu
      } = uu;
      return (0, Su.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Eu.holdMs}ms`
        },
        children: (0, Su.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Eu.id)
    };
    var kU = ju(8977),
      mU = ju(8980),
      vU = ju(8988),
      KU = ju(8973);
    const VU = () => {
        const {
          gameState: uu
        } = (0, qu.l)(["gameState"]), Eu = (0, Nu.C)(), [su, Uu] = (0, Qu.useState)(!1), [Zu, Xu] = (0, Qu.useState)(!1);
        return (0, Qu.useEffect)((() => {
          "inGame" === uu && Uu(!0)
        }), [uu]), (0, Qu.useEffect)((() => {
          if (!su) return;
          let uu = null,
            Eu = !1;
          return (DU.y ? Promise.all([ju.e(73), ju.e(90), ju.e(273), ju.e(191), ju.e(229), ju.e(228), ju.e(89)]).then((() => ju(40793))).then((uu => uu.startWasmPadGameplay)) : Promise.all([ju.e(73), ju.e(237), ju.e(236), ju.e(98), ju.e(76), ju.e(75), ju.e(74), ju.e(187), ju.e(233), ju.e(78), ju.e(90), ju.e(188), ju.e(227), ju.e(97), ju.e(239), ju.e(230), ju.e(246), ju.e(121), ju.e(215), ju.e(87), ju.e(247), ju.e(77), ju.e(160), ju.e(248), ju.e(229), ju.e(200)]).then((() => ju(40923))).then((uu => uu.startPadGameplay))).then((ju => {
            Eu || (uu = ju())
          })).catch((uu => {
            console.error("Pad gameplay failed to load", uu), Eu || Xu(!0)
          })), () => {
            var ju;
            Eu = !0, null === (ju = uu) || void 0 === ju || ju()
          }
        }), [su]), (0, Qu.useEffect)((() => {
          Zu && Eu && (Xu(!1), YU.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((uu => {
            !0 === uu && (0, hU.reloadBloxd)()
          })))
        }), [Zu, Eu]), (0, Su.jsxs)(Su.Fragment, {
          children: [(0, Su.jsx)(rU, {}), (0, Su.jsx)(QU, {}), (0, Su.jsx)(iU, {})]
        })
      },
      rU = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, Nu.C)(), {
          gameState: ju,
          isUiHidden: su
        } = (0, qu.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: Zu
        } = (0, cu.n)(), Xu = (0, PU.i)(), lu = (0, PU.k)(), [fu, bu] = (0, Qu.useState)(vU.b);
        return (0, gU.f)(KU.r, bu), !Eu || Zu || su || "inGame" !== ju || !Xu && !fu ? null : (0, Su.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Xu && (0, Su.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Su.jsx)(JU, {
              glyph: (0, Cu.i)("actionButton")
            }), (0, Su.jsx)(aU, {
              action: Xu
            }), lu && (0, Su.jsx)("span", {
              className: "PadActionHintMore",
              children: uu("controller:gameplayActionWheelHint")
            })]
          }), fu && (0, Su.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Su.jsx)(JU, {
              glyph: (0, Cu.i)("pickBlock")
            }), (0, Su.jsx)("span", {
              children: uu("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      QU = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, Nu.C)(), {
          gameState: ju,
          isUiHidden: su
        } = (0, qu.l)(["gameState", "isUiHidden"]), [Zu, Xu] = (0, Qu.useState)(kU.c);
        return (0, gU.f)(KU.q, Xu), Eu && !su && "inGame" === ju && Zu ? (0, Su.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Su.jsx)("span", {
            children: uu("controller:gameplayDropStack")
          }), (0, Su.jsx)(oU, {
            hold: Zu
          })]
        }) : null
      },
      iU = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, Nu.C)(), {
          gameState: ju,
          isUiHidden: su
        } = (0, qu.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: Zu
        } = (0, cu.n)(), [Xu, lu] = (0, Qu.useState)(mU.e);
        return (0, gU.f)(KU.m, lu), Eu && !su && "inGame" === ju && Xu ? (0, Su.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Zu && (0, Su.jsx)(JU, {
            glyph: (0, Cu.i)("attack")
          }), (0, Su.jsx)("span", {
            children: uu("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var WU = ju(8992),
      SU = ju(2011),
      IU = ju(2543),
      FU = ju(8430);
    const BU = uu => uu && !(0, WU.b)(SU.e.get("shopInfo")),
      LU = () => {
        const uu = "inGame" === (0, qu.l)(["gameState"]).gameState;
        return (0, IU.e)("shopInfo", (() => {
          (0, FU.g)(BU(uu))
        })), (0, Qu.useEffect)((() => {
          (0, FU.g)(BU(uu))
        }), [uu]), null
      },
      tU = () => {
        const {
          t: uu
        } = (0, Uu.A)(), {
          hideButtonHints: Eu
        } = (0, cu.n)();
        (0, Nu.D)();
        const ju = (0, WE.h)();
        return (0, Qu.useEffect)((() => (() => {
          const uu = bu.d.register({
              name: "inventory",
              isActive: Uj.isActive,
              onFrame: Uj.onFrame,
              onDeactivate: Uj.onDeactivate,
              wakePressActs: Uj.wakePressActs
            }),
            Eu = uu => {
              Uj.noteRealPointer(uu), Uj.shouldBlockRealPointer(uu) && uu.stopPropagation()
            };
          for (const Xu of Zj) window.addEventListener(Xu, Eu, !0);
          const ju = (0, yu.j)((() => {
              "inventory" !== bu.d.getActiveConsumerName() && Uj.forgetSurface()
            })),
            su = uu => {
              const Eu = uu.target;
              (0, Nu.l)() && (0, Hu.h)(Eu) && Eu.closest(GE) && (0, yu.h)() && (0, yu.n)(Eu)
            };
          document.addEventListener("focusout", su, !0);
          const {
            invalidate: Uu,
            onScroll: Zu
          } = Uj.targets;
          return document.addEventListener("scroll", Zu, !0), window.addEventListener("resize", Uu), () => {
            uu(), ju();
            for (const uu of Zj) window.removeEventListener(uu, Eu, !0);
            document.removeEventListener("scroll", Zu, !0), document.removeEventListener("focusout", su, !0), window.removeEventListener("resize", Uu), Uj.targets.disconnect()
          }
        })()), []), (0, Su.jsxs)(Su.Fragment, {
          children: [(0, Su.jsx)(Lu, {
            placer: Uj.ring,
            className: "InventorySlotCursorRing"
          }), ju.showing && !Eu && (0, Su.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: nu(ju).map((Eu => {
              let {
                actions: su,
                labelKey: Uu
              } = Eu;
              return (0, Su.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [su.map((uu => (0, Su.jsx)(JU, {
                  glyph: (0, Cu.i)(uu)
                }, uu))), (0, Su.jsx)("span", {
                  children: uu(`controller:${Uu}`)
                }), "inventoryDrop" === Uu && ju.dropStackHold && (0, Su.jsx)(oU, {
                  hold: ju.dropStackHold
                })]
              }, Uu)
            }))
          })]
        })
      },
      xU = [{
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
      TU = uu => Array.from(uu).map((uu => ({
        type: "char",
        char: uu,
        width: 1
      }))),
      HU = function(uu) {
        return {
          type: "command",
          command: uu,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      AU = [HU("page", 2), HU("otherPage"), HU("caretLeft"), HU("space", 3), HU("caretRight"), HU("close", 1.5), HU("submit", 1.5)],
      nU = [HU("page", 2), HU("otherPage"), HU("caretLeft"), HU("space", 2), HU("caretRight"), HU("newline"), HU("close", 1.5), HU("submit", 1.5)],
      yU = [
        [...TU("1234567890"), HU("backspace")], TU("qwertyuiop/"), TU("asdfghjkl'?"), [HU("shift", 2), ...TU("zxcvbnm,.")]
      ],
      zU = [
        [...TU("1234567890"), HU("backspace")], TU("!@#$%^&*()/"), TU('-_=+[]{};:"'), TU("~`|\\<>'\u20ac\xa3,.")
      ],
      RU = {
        letters: yU,
        accents: [
          [...TU("1234567890"), HU("backspace")], TU("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), TU("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [HU("shift", 2), ...TU("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: zU
      },
      uZ = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      EZ = (uu, Eu) => "letters" === uu ? Eu ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === uu ? "symbols" : "accents"
      },
      jZ = function(uu, Eu) {
        const ju = ((uu, Eu) => [...RU[uu], Eu ? nU : AU])(uu, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Eu) return ju;
        const su = Math.min(2, sZ(ju[0]) / Eu);
        return [Array.from({
          length: Eu
        }, ((uu, Eu) => ({
          type: "phrase",
          phraseIndex: Eu,
          width: su
        }))), ...ju]
      },
      sZ = uu => uu.reduce(((uu, Eu) => uu + Eu.width), 0),
      UZ = uu => Math.max(...uu.map(sZ)),
      ZZ = (uu, Eu) => {
        const ju = uu[Eu.row];
        let su = (UZ(uu) - sZ(ju)) / 2;
        for (let Uu = 0; Uu < Eu.col; Uu++) su += ju[Uu].width;
        return su + ju[Eu.col].width / 2
      },
      XZ = (uu, Eu, ju) => {
        let su = 0,
          Uu = 1 / 0;
        for (let Zu = 0; Zu < uu[Eu].length; Zu++) {
          const Xu = Math.abs(ZZ(uu, {
            row: Eu,
            col: Zu
          }) - ju);
          Xu < Uu - 1e-9 && (su = Zu, Uu = Xu)
        }
        return su
      },
      lZ = (uu, Eu) => {
        const ju = Math.max(0, Math.min(uu.length - 1, Eu.row));
        return {
          row: ju,
          col: Math.max(0, Math.min(uu[ju].length - 1, Eu.col))
        }
      },
      qZ = (uu, Eu, ju) => "once" === uu && Eu - ju <= 400 ? "caps" : "off" === uu ? "once" : "off",
      fZ = (uu, Eu) => "once" === uu && (uu => uu.toLowerCase() !== uu.toUpperCase())(Eu) ? "off" : uu,
      CZ = (uu, Eu, ju) => {
        if ("symbols" === Eu || "off" === ju) return uu;
        const su = uu.toUpperCase();
        return 1 === su.length ? su : uu
      };
    var bZ = ju(8872);
    const cZ = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const NZ = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(uu) {
          return !(uu - this.lastSendMs < 2e3) && (this.lastSendMs = uu, !0)
        }
      },
      OZ = {
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
      YZ = ["yX", "nameTag"],
      hZ = uu => {
        const Eu = uu.target instanceof HTMLTextAreaElement && !YZ.includes(uu.kind);
        return jZ(uu.page, "chat" === uu.kind ? cZ.length : 0, Eu)
      },
      DZ = uu => {
        const Eu = uu.getBoundingClientRect(),
          ju = window.innerHeight,
          su = Eu.top + Eu.height / 2 < ju / 2 ? "bottom" : "top",
          Uu = "bottom" === su ? ju - Eu.bottom - 6 : Eu.top - 6;
        return {
          placement: su,
          maxHeightPx: Math.min(.46 * ju, Math.max(.3 * ju, Uu))
        }
      },
      gZ = uu => {
        (0, Pj.i)(uu) ? (0, Pj.c)().close(): (EU.noteChosenStop(uu), uu.blur())
      };
    class MZ {
      constructor(uu) {
        this.host = uu, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(uu, Eu) {
        this.phraseTexts = uu, this.phrasesFill = Eu
      }
      pressKey(uu) {
        const Eu = this.host.getState(),
          ju = hZ(Eu),
          su = ju[uu.row][uu.col];
        this.host.setState({
          ...Eu,
          focus: uu,
          preferredX: ZZ(ju, uu)
        }), "char" === su.type ? this.typeChar(su.char) : "command" === su.type ? this.runCommand(su.command) : this.sendPhrase(su.phraseIndex)
      }
      runCommand(uu) {
        const Eu = this.host.getState();
        switch (uu) {
          case "backspace":
            (0, Hu.e)(Eu.target);
            break;
          case "space":
            (0, Hu.f)(Eu.target, " ");
            break;
          case "newline":
            (0, Hu.f)(Eu.target, "\n");
            break;
          case "caretLeft":
            (0, Hu.k)(Eu.target, -1);
            break;
          case "caretRight":
            (0, Hu.k)(Eu.target, 1);
            break;
          case "shift": {
            const uu = performance.now();
            this.host.setState({
              ...Eu,
              shift: qZ(Eu.shift, uu, this.lastShiftPressMs)
            }), this.lastShiftPressMs = uu;
            break
          }
          case "page":
          case "otherPage": {
            const ju = EZ(Eu.page, Eu.accentsFirst)[uu];
            this.host.setState({
              ...Eu,
              page: ju,
              focus: lZ(hZ({
                ...Eu,
                page: ju
              }), Eu.focus)
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
            (0, Pj.i)(Eu.target) && (0, Pj.c)().selectNextChannel()
        }
      }
      submit() {
        var uu, Eu;
        const {
          target: ju
        } = this.host.getState();
        this.host.hide(), (0, Pj.i)(ju) ? (0, Pj.c)().submit() : (EU.noteChosenStop(ju), null === (uu = (Eu = (0, Pj.e)(ju)).submit) || void 0 === uu || uu.call(Eu), document.activeElement === ju && ju.blur())
      }
      close() {
        const {
          target: uu
        } = this.host.getState();
        this.host.hide(), gZ(uu)
      }
      typeChar(uu) {
        const {
          target: Eu,
          page: ju,
          shift: su
        } = this.host.getState();
        (0, Hu.f)(Eu, CZ(uu, ju, su)), this.host.setState({
          ...this.host.getState(),
          shift: fZ(su, uu)
        })
      }
      sendPhrase(uu) {
        if (this.phrasesFill) {
          const {
            target: Eu
          } = this.host.getState(), ju = this.phraseTexts[uu];
          ju && (Eu.setSelectionRange(0, Eu.value.length), (0, Hu.f)(Eu, ju))
        } else NZ.claim(performance.now()) && (this.host.hide(), (0, Pj.c)().sendLine(this.phraseTexts[uu]))
      }
    }
    var eZ = ju(8891);
    const GZ = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      pZ = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class wZ {
      constructor(uu, Eu) {
        this.host = uu, this.editor = Eu, this.lastDirection = null, this.navRepeat = new Ou.b((0, Yu.b)(GZ)), this.commandRepeats = new Map(xU.filter((uu => {
          let {
            repeats: Eu
          } = uu;
          return Eu
        })).map((uu => {
          let {
            command: Eu
          } = uu;
          return [Eu, (0, Yu.b)(pZ)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const uu of this.commandRepeats.values()) uu.reset()
      }
      onVisibleFrame(uu) {
        const Eu = performance.now();
        for (const {
            command: Uu,
            action: Zu
          }
          of xU) {
          const ju = (0, Cu.i)(Zu),
            su = this.commandRepeats.get(Uu);
          if ((su ? su.update(uu.isHeld(ju), Eu) : uu.wasPressed(ju)) && (this.editor.runCommand(Uu), !this.host.getState().visible)) return
        }
        if (uu.wasPressed((0, Cu.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ju = this.readNavDirection(uu);
        this.lastDirection = ju;
        const su = this.navRepeat.update(ju, Eu);
        su && this.navigate(su)
      }
      onHiddenFrame(uu, Eu) {
        var ju;
        if (uu.wasPressed((0, Cu.i)("keyboardClose"))) return void gZ(Eu);
        const su = (0, Cu.i)("keyboardType");
        if (uu.wasPressed(su)) return bu.d.consumeButton(su), void this.host.open(Eu);
        const Uu = this.readNavDirection(uu),
          Zu = null !== Uu && Uu !== this.lastDirection;
        if (this.lastDirection = Uu, !Zu || (0, Pj.i)(Eu)) return;
        const Xu = (null === (ju = bs()) || void 0 === ju ? void 0 : ju.root.contains(Eu)) || null !== Eu.closest(".EntireInventoryWrapper");
        gZ(Eu), Xu && bu.d.handOffHeldInput()
      }
      navigate(uu) {
        const Eu = this.host.getState();
        if ("Up" === uu && 0 === Eu.focus.row && "chat" === Eu.kind) return (0, Pj.c)().stepHistory(), void this.host.setState({
          ...Eu
        });
        const ju = ((uu, Eu, ju, su) => {
          if ("Left" === ju || "Right" === ju) {
            const su = uu[Eu.row].length,
              Uu = (Eu.col + ("Right" === ju ? 1 : -1) + su) % su,
              Zu = {
                row: Eu.row,
                col: Uu
              };
            return {
              pos: Zu,
              preferredX: ZZ(uu, Zu)
            }
          }
          const Uu = (Eu.row + ("Down" === ju ? 1 : -1) + uu.length) % uu.length;
          return {
            pos: {
              row: Uu,
              col: XZ(uu, Uu, su)
            },
            preferredX: su
          }
        })(hZ(Eu), Eu.focus, uu, Eu.preferredX);
        this.host.setState({
          ...Eu,
          focus: ju.pos,
          preferredX: ju.preferredX
        })
      }
      readNavDirection(uu) {
        for (const Eu of Ou.D)
          if (uu.isHeld(Eu)) return Eu;
        return (0, Ou.mb)((0, Ou.i)(uu.leftStick, (0, cu.f)().moveDeadzone))
      }
    }
    const JZ = ["Up", "Down", "Left", "Right"],
      dZ = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const aZ = new class {
      constructor() {
        this.state = OZ, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new MZ(this), this.padInput = new wZ(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(uu) {
        const Eu = uu.visible !== this.state.visible;
        this.state = uu;
        for (const ju of this.listeners) ju();
        Eu && fu.h.TY(eZ.d, uu.visible)
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      install() {
        const uu = bu.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Hu.h)(document.activeElement),
            onFrame: uu => {
              this.onFrame(uu)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: uu => JZ.includes(uu) || !this.state.visible && uu === (0, Cu.i)("keyboardType")
          }),
          Eu = uu => {
            const Eu = uu.target;
            (0, Hu.h)(Eu) && (Eu === this.pendingChatInput || (0, Nu.l)() ? this.open(Eu) : this.state.visible && Eu !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ju = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          su = uu => {
            uu.isTrusted && this.state.visible && (uu => !uu.repeat && !dZ.has(uu.key) && !(0, bZ.b)(uu.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(uu.key))(uu) && this.hide()
          },
          Uu = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...DZ(this.state.target)
            })
          };
        document.addEventListener("focusin", Eu, !0), document.addEventListener("focusout", ju, !0), window.addEventListener("keydown", su, !0), window.addEventListener("resize", Uu);
        const Zu = fu.h.subscribe(KU.e, (() => {
            this.openChat()
          })),
          Xu = fu.h.subscribe(eZ.h, (uu => {
            this.openForField(uu)
          }));
        return () => {
          uu(), document.removeEventListener("focusin", Eu, !0), document.removeEventListener("focusout", ju, !0), window.removeEventListener("keydown", su, !0), window.removeEventListener("resize", Uu), fu.h.unsubscribe(Zu), fu.h.unsubscribe(Xu), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const uu = (0, Pj.c)();
        uu ? document.activeElement !== uu.input ? (this.clearPendingChat(), this.pendingChatInput = uu.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), uu.open()) : this.open(uu.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(uu) {
        (0, Hu.h)(uu) ? (document.activeElement !== uu && uu.focus(), document.activeElement === uu && this.open(uu)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", uu)
      }
      open(uu) {
        var Eu;
        if (this.clearPendingChat(), this.ownedField = uu, this.state.visible && this.state.target === uu) return;
        this.restoreInputMode(), (0, Hu.m)(uu), this.savedInputMode = uu.getAttribute("inputmode"), uu.setAttribute("inputmode", "none");
        const ju = {
          ...OZ,
          visible: !0,
          target: uu,
          kind: (0, Pj.i)(uu) ? "chat" : null !== (Eu = (0, Pj.e)(uu).kind) && void 0 !== Eu ? Eu : null,
          accentsFirst: (su = MU.h.get().getCurrentLanguageCode(), uZ.has(su)),
          ...DZ(uu)
        };
        var su;
        const Uu = hZ(ju),
          Zu = ((uu, Eu) => {
            for (let ju = 0; ju < uu.length; ju++) {
              const su = uu[ju].findIndex((uu => "char" === uu.type && uu.char === Eu));
              if (-1 !== su) return {
                row: ju,
                col: su
              }
            }
            return null
          })(Uu, "q");
        this.padInput.reset(), this.setState({
          ...ju,
          focus: Zu,
          preferredX: ZZ(Uu, Zu)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(OZ))
      }
      onFrame(uu) {
        if (this.releaseLostField()) return;
        const Eu = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(uu) : (0, Hu.h)(Eu) && this.padInput.onHiddenFrame(uu, Eu)
      }
      releaseLostField() {
        const uu = this.ownedField;
        return !(null === uu || uu.isConnected && document.activeElement === uu) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: uu
        } = this.state;
        uu && (null === this.savedInputMode ? uu.removeAttribute("inputmode") : uu.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var PZ = ju(3825);
    const oZ = new Map(xU.map((uu => {
        let {
          command: Eu,
          action: ju
        } = uu;
        return [Eu, ju]
      }))),
      kZ = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      mZ = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        yX: "controller:keyboardTargetBookTitle"
      },
      vZ = uu => {
        const Eu = (() => {
          const [, uu] = (0, Qu.useReducer)((uu => uu + 1), 0);
          return uu
        })();
        (0, Qu.useEffect)((() => {
          if (!uu) return;
          const ju = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Uu of ju) uu.addEventListener(Uu, Eu);
          document.addEventListener("selectionchange", Eu);
          const su = new MutationObserver(Eu);
          return su.observe(uu, {
            attributeFilter: ["placeholder"]
          }), () => {
            su.disconnect();
            for (const su of ju) uu.removeEventListener(su, Eu);
            document.removeEventListener("selectionchange", Eu)
          }
        }), [uu, Eu])
      },
      KZ = uu => {
        uu.preventDefault()
      },
      VZ = uu => {
        "mouse" !== uu.pointerType && uu.preventDefault()
      },
      rZ = () => {
        var uu;
        const {
          t: Eu
        } = (0, Uu.A)(), ju = (() => {
          const [uu, Eu] = (0, Qu.useState)(aZ.getState());
          return (0, Qu.useEffect)((() => aZ.subscribe((() => {
            Eu(aZ.getState())
          }))), []), uu
        })(), su = (0, Nu.C)(), Zu = (0, Qu.useRef)(null);
        (0, cu.n)(), (0, Nu.D)(), (0, Qu.useEffect)((() => {
          const uu = aZ.install(),
            Eu = null;
          return () => {
            uu(), null === Eu || void 0 === Eu || Eu()
          }
        }), []);
        const Xu = (0, Qu.useMemo)((() => cZ.map((uu => Eu(uu)))), [Eu]),
          lu = ju.visible && "chat" === ju.kind ? ju.target : null;
        vZ(lu);
        const qu = null !== (uu = null === lu || void 0 === lu ? void 0 : lu.value) && void 0 !== uu ? uu : "",
          fu = ((uu, Eu, ju) => {
            if (!uu.startsWith("/")) return [];
            const su = [];
            for (let Uu = Eu.length - 1; Uu >= 0 && su.length < ju; Uu--) {
              const ju = Eu[Uu].trim();
              ju.startsWith(uu) && ju !== uu && !su.includes(ju) && su.push(ju)
            }
            return su
          })(qu, qu.startsWith("/") ? (0, PZ.f)() : [], cZ.length),
          bu = qu.startsWith("/"),
          Ou = bu ? cZ.map(((uu, Eu) => {
            var ju;
            return null !== (ju = fu[Eu]) && void 0 !== ju ? ju : ""
          })) : Xu;
        if ((0, Qu.useEffect)((() => {
            aZ.editor.setPhraseRow(Ou, bu)
          })), (0, Qu.useEffect)((() => {
            const uu = Zu.current;
            if (uu) return uu.addEventListener("touchstart", KZ, {
              passive: !1
            }), () => {
              uu.removeEventListener("touchstart", KZ)
            }
          }), [ju.visible]), !ju.visible) return null;
        const Yu = hZ(ju),
          hu = UZ(Yu),
          Du = uu => "char" === uu.type ? CZ(uu.char, ju.page, ju.shift) : "phrase" === uu.type ? Ou[uu.phraseIndex] : (uu => {
            switch (uu) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ju.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return kZ[EZ(ju.page, ju.accentsFirst)[uu]];
              case "space":
                return Eu("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Eu("chat" === ju.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(uu.command),
          gu = uu => {
            aZ.editor.pressKey(uu)
          };
        return (0, Su.jsxs)("div", {
          ref: Zu,
          className: Wu()(Pj.o, "top" === ju.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ju.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Yu.length,
            "--pad-keyboard-height": `${ju.maxHeightPx}px`
          },
          onPointerDown: VZ,
          onMouseDown: KZ,
          children: [(0, Su.jsx)(QZ, {
            target: ju.target,
            label: ju.kind ? Eu(mZ[ju.kind]) : ju.target.placeholder || Eu("controller:keyboardTargetText")
          }), (0, Su.jsx)("div", {
            className: "PadKeyboardRows",
            children: Yu.map(((uu, Eu) => (0, Su.jsx)("div", {
              className: Wu()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === uu[0].type
              }),
              children: uu.map(((uu, Uu) => {
                const Zu = su && ju.focus.row === Eu && ju.focus.col === Uu,
                  Xu = "command" === uu.type ? oZ.get(uu.command) : void 0;
                return (0, Su.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: uu.width / hu * 100 + "%"
                  },
                  children: (0, Su.jsxs)("div", {
                    className: Wu()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Zu,
                      PadKeyboardKeyCommand: "command" === uu.type,
                      PadKeyboardKeyPhrase: "phrase" === uu.type,
                      PadKeyboardKeyActive: "command" === uu.type && "shift" === uu.command && "off" !== ju.shift,
                      PadKeyboardKeySubmit: "command" === uu.type && "submit" === uu.command
                    }),
                    role: "button",
                    onClick: () => {
                      gu({
                        row: Eu,
                        col: Uu
                      })
                    },
                    onTouchEnd: uu => {
                      var ju, su;
                      uu.preventDefault(), ju = uu.changedTouches[0], su = uu.currentTarget.getBoundingClientRect(), ju && ju.clientX >= su.left && ju.clientX <= su.right && ju.clientY >= su.top && ju.clientY <= su.bottom && gu({
                        row: Eu,
                        col: Uu
                      })
                    },
                    children: [(0, Su.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Du(uu)
                    }), su && Xu && (0, Su.jsx)(JU, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Cu.i)(Xu)
                    })]
                  })
                }, Uu)
              }))
            }, Eu)))
          })]
        })
      },
      QZ = uu => {
        let {
          target: Eu,
          label: ju
        } = uu;
        vZ(Eu);
        const su = (0, Qu.useRef)(null),
          Uu = (0, Qu.useRef)(null),
          Zu = Eu instanceof HTMLTextAreaElement;
        (0, Qu.useLayoutEffect)((() => {
          const uu = su.current,
            Eu = Uu.current;
          Zu ? uu.scrollTop = Eu.offsetTop - uu.clientHeight / 2 : uu.scrollLeft = Eu.offsetLeft - uu.clientWidth / 2
        }));
        const {
          value: Xu,
          start: lu,
          end: qu
        } = (0, Hu.o)(Eu), fu = "password" === Eu.type ? "\u2022".repeat(Xu.length) : Xu;
        return (0, Su.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Su.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ju
          }), (0, Su.jsxs)("div", {
            ref: su,
            className: Wu()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Zu
            }),
            children: [(0, Su.jsx)("span", {
              children: fu.slice(0, lu)
            }), (0, Su.jsx)("span", {
              ref: Uu,
              className: "PadKeyboardCaret"
            }), lu !== qu && (0, Su.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: fu.slice(lu, qu)
            }), (0, Su.jsx)("span", {
              children: fu.slice(qu)
            }), 0 === fu.length && Eu.placeholder && Eu.placeholder !== ju && (0, Su.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Eu.placeholder
            })]
          })]
        })
      };
    var iZ = ju(1443),
      WZ = ju(3620);
    const SZ = function() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return Eu.map(Cu.i)
      },
      IZ = (uu, Eu) => {
        const ju = tj(uu);
        return ju ? [{
          glyphs: [ju],
          labelKey: Eu
        }] : []
      },
      FZ = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      BZ = "--pad-hint-bar-clearance",
      LZ = "[data-pad-hint-bar-avoid]",
      tZ = uu => {
        const Eu = [];
        for (const ju of uu)(0, zu.m)(ju) && Eu.push(ju.getBoundingClientRect());
        return Eu
      },
      xZ = uu => {
        if (!uu) return null;
        const Eu = bs(),
          ju = Eu ? tZ(((uu, Eu) => {
            const ju = uu.closest(LZ);
            return ju ? [ju] : ("popup" === Eu ? document : uu).querySelectorAll(LZ)
          })(Eu.root, Eu.layer.kind)) : [],
          su = !Eu || Eu.root.hasAttribute("data-pad-shows-hud");
        if (((0, WZ.j)(null === Eu || void 0 === Eu ? void 0 : Eu.layer.kind, (0, WZ.n)()) || su) && ju.push(...tZ(document.querySelectorAll(FZ.join(",")))), 0 === ju.length) return null;
        const {
          width: Uu,
          height: Zu
        } = uu.getBoundingClientRect(), Xu = window.innerHeight - 8, lu = (0, WZ.t)(Xu, {
          width: Uu,
          height: Zu
        }, window.innerWidth / 2, ju, 8);
        return lu === Xu ? null : Math.round(window.innerHeight - lu)
      },
      TZ = uu => {
        const Eu = document.documentElement.style,
          ju = uu ? `${Math.round(window.innerHeight-uu.getBoundingClientRect().top)}px` : "";
        Eu.getPropertyValue(BZ) !== ju && (ju ? Eu.setProperty(BZ, ju) : Eu.removeProperty(BZ))
      },
      HZ = () => {
        const {
          t: uu
        } = (0, Uu.A)(), {
          hideButtonHints: Eu
        } = (0, cu.n)(), ju = (0, Nu.C)(), [su, Zu] = (0, Qu.useState)(!1), [Xu, fu] = (0, Qu.useState)([]), [Yu, hu] = (0, Qu.useState)(null), Du = (0, Qu.useRef)(null), gu = (0, Qu.useRef)(null);
        (0, gU.f)(eZ.d, (uu => {
          Zu(uu)
        })), (0, gU.f)(WZ.r, (() => {
          var uu;
          null === (uu = gu.current) || void 0 === uu || uu.call(gu)
        }));
        const Mu = ju && !Eu && !su;
        return (0, Qu.useEffect)((() => {
          if (!Mu) return;
          let uu = null;
          const Eu = () => {
            const Eu = (() => {
                var uu;
                const Eu = bu.d.getActiveConsumerName(),
                  ju = (0, WZ.f)();
                if (ju) {
                  const uu = (0, Cu.i)(ju),
                    Eu = "emoteWheel" === ju && "wheel" === (0, cu.f)().emoteButton || !(0, Ou.L)(bu.d.getLastFrame().values, uu) ? {
                      glyphs: SZ("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [uu],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Cu.u)(uu)],
                    labelKey: "controller:wheelChoose"
                  }, Eu, {
                    glyphs: SZ("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const su = bs();
                if (!su || "focus" !== Eu && "cursor" !== Eu) return (0, WZ.e)(Cu.i);
                const Uu = [],
                  Zu = {
                    glyphs: SZ("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Xu = (0, tu.x)(su.root),
                  lu = Xu ? !(0, zu.r)(Xu) : Boolean(su.layer.close),
                  fu = !Xu && su.layer.closeLabelKey ? su.layer.closeLabelKey : Zu.labelKey,
                  Nu = lu ? [{
                    ...Zu,
                    labelKey: fu
                  }] : [],
                  Yu = mj(su.layer.kind) ? [{
                    glyphs: SZ("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Eu) return Uu.push({
                  glyphs: SZ("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Uu.push({
                  glyphs: SZ("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Uu.push(...Nu), Uu.push(...Yu), Uu.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Ps() && Uu.push({
                  glyphs: SZ("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Uu;
                const hu = EU.getFocused();
                hu && (0, Ks.b)(hu) ? Uu.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : hu && (0, tu.F)(hu) ? Uu.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Uu.push({
                  glyphs: SZ("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Du = hu ? null === (uu = cj(hu)) || void 0 === uu ? void 0 : uu.dataset.padSecondary : void 0;
                Du && Uu.push({
                  glyphs: SZ("menuSecondary"),
                  labelKey: Du
                }), Uu.push(...null !== hu && void 0 !== hu && hu.closest("[data-pad-friends-column]") ? [Zu] : Nu), Uu.push(...Yu);
                const gu = "home" === su.layer.kind;
                Hj(su.root) || !Qj(su.root) && !Aj(su) ? gu && Uu.push({
                  glyphs: SZ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Uu.push({
                  glyphs: SZ("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), gu && (Uu.push(...IZ("inventory", "controller:menusFriends")), Du || Uu.push({
                  glyphs: SZ("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Uu.push(...IZ("pause", "controller:menusSettings")), Uu.push(...IZ("leaderboard", "controller:menusNotifications")));
                const Mu = qu.d.get("openEverythingMenuName");
                return "inGame" === qu.d.get("gameState") && "popup" !== su.layer.kind && null !== Mu && ((0, qj.l)(Mu) ? Uu.push(...IZ("leaderboard", "controller:menusClose")) : Mu !== lj.o.LOBBY_LEADERBOARD && Uu.push(...IZ("leaderboard", "controller:menusLobby"))), Uu.push({
                  glyphs: SZ("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Uu
              })(),
              ju = xZ(Du.current),
              su = ((uu, Eu) => `${uu.map((uu=>`${uu.glyphs.join("+")}:${uu.labelKey}`)).join("|")}@${Eu}`)(Eu, ju);
            su !== uu && (uu = su, (0, lu.unstable_batchedUpdates)((() => {
              fu(Eu), hu(ju)
            }))), TZ(Du.current)
          };
          Eu(), gu.current = Eu;
          const ju = requestAnimationFrame(Eu),
            su = setInterval(Eu, 150);
          return () => {
            gu.current = null, cancelAnimationFrame(ju), clearInterval(su), TZ(null)
          }
        }), [Mu]), (0, Qu.useLayoutEffect)((() => {
          if (!Mu) return;
          if (0 === Xu.length) return void TZ(null);
          const uu = xZ(Du.current);
          uu === Yu ? TZ(Du.current) : hu(uu)
        }), [Mu, Xu, Yu]), Mu && 0 !== Xu.length ? (0, Su.jsx)("div", {
          ref: Du,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Yu ? void 0 : {
            bottom: Yu
          },
          "aria-hidden": !0,
          children: Xu.map((Eu => (0, Su.jsxs)("div", {
            className: "PadButtonHint",
            children: [Eu.glyphs.map((uu => (0, Su.jsx)(JU, {
              glyph: uu,
              className: "PadButtonHintGlyph"
            }, uu))), (0, Su.jsx)("span", {
              children: uu(Eu.labelKey)
            })]
          }, Eu.labelKey)))
        }) : null
      };
    var AZ = ju(1787);
    const nZ = [zu.b, "label", "[data-pad-slider]"].join(","),
      yZ = "data-pad-cursor-probe",
      zZ = uu => {
        var Eu;
        const ju = (uu => {
          const Eu = [];
          for (let su = uu; su && su !== document.body && su !== document.documentElement && (Eu.push(su), !(Eu.length > 8)); su = su.parentElement);
          const ju = document.documentElement.classList.contains(Nu.q) ? Eu[Eu.length - 1] : void 0;
          null === ju || void 0 === ju || ju.setAttribute(yZ, "");
          try {
            return Eu.map((uu => ({
              element: uu,
              cursor: getComputedStyle(uu).cursor
            })))
          } finally {
            null === ju || void 0 === ju || ju.removeAttribute(yZ)
          }
        })(uu);
        if ("pointer" !== (null === (Eu = ju[0]) || void 0 === Eu ? void 0 : Eu.cursor)) return null;
        let su = 0;
        for (; su + 1 < ju.length && "pointer" === ju[su + 1].cursor;) su++;
        return ju[su].element
      },
      RZ = (uu, Eu, ju, su) => {
        const Uu = su.root.contains(uu) ? su.root : null;
        for (let Zu = uu; Zu && Zu !== document.body && Zu !== document.documentElement; Zu = Zu.parentElement) {
          if (Zu instanceof HTMLElement && au(Zu, Eu) && vu(Zu, Eu, ju)) return Zu;
          if (Zu === Uu) break
        }
        return "home" === su.layer.kind || "gamePage" === su.layer.kind ? ((uu, Eu) => {
          const ju = document.scrollingElement;
          return ju instanceof HTMLElement && ![document.documentElement, document.body].some((Eu => {
            const ju = getComputedStyle(Eu),
              su = "y" === uu ? ju.overflowY : ju.overflowX;
            return "hidden" === su || "clip" === su
          })) && vu(ju, uu, Eu) ? ju : null
        })(Eu, ju) : null
      };
    const uX = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Yu.b)(Ou.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const uu = bu.d.register({
              name: "cursor",
              isActive: () => "cursor" === os(),
              onFrame: uu => {
                this.onFrame(uu)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: uu => (0, bu.e)(uu) || uu === (0, Cu.i)("menuConfirm") && (0, tu.G)((0, Nu.e)())
            }),
            Eu = (0, ss.l)((uu => {
              const Eu = uu.getRoot();
              Eu && this.layerPoints.delete(Eu), Eu === this.layerRoot && (this.layerRoot = null)
            })),
            ju = fu.h.subscribe("appManagerUpdated|activeInputDevice", (uu => {
              "gamepad" !== uu && this.active && !this.hidden && this.hide()
            }));
          return () => {
            uu(), Eu(), fu.h.unsubscribe(ju), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Nu.l)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.TY()
        }
        activate(uu) {
          this.active = !0, this.hidden = !1;
          const Eu = ws();
          !Eu || Eu.root && Eu.root !== uu.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(uu), this.jumpTo(Eu.point))
        }
        jumpTo(uu) {
          this.state = {
            x: uu.x,
            y: uu.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.TY())
        }
        onFrame(uu) {
          const Eu = bs();
          if (!Eu) return;
          if (this.active || this.activate(Eu), this.followPage(Eu)) return;
          this.followLayer(Eu);
          const ju = uu.wokeDevice ? (0, Nu.e)() : null;
          if (ju && this.jumpTo(ju), !(0, Nu.l)()) return void this.hide();
          const su = (0, Cu.i)("menuToggleCursor");
          if (uu.wasPressed(su)) return bu.d.consumeButton(su), void ps(this.getHandoff(null));
          if (this.handBackToFocus(uu)) return;
          const Uu = (0, Cu.i)("menuConfirm"),
            Zu = (0, Cu.i)("menuSecondary");
          if (uu.wasPressed((0, Cu.i)("menuBack"))) return (0, tu.j)(Eu.root) || (0, tu.c)(Eu.root) || cs(), void this.TY();
          if (zj(null, uu, Eu)) return uu.wasReleased(Uu) && this.press && (this.updateHit(!1), this.updateConfirm(uu, Uu)), void this.TY();
          if (document.pointerLockElement) return void this.hide();
          const Xu = ks() ? {
              x: 0,
              y: 0
            } : (uu => {
              const Eu = (uu, Eu) => (uu ? 1 : 0) - (Eu ? 1 : 0);
              return {
                x: Eu(uu.isHeld("Right"), uu.isHeld("Left")),
                y: Eu(uu.isHeld("Down"), uu.isHeld("Up"))
              }
            })(uu),
            lu = (0, cu.f)().moveDeadzone,
            qu = ((uu, Eu) => {
              const ju = (0, Ou.i)(uu, eu(Eu));
              return Math.hypot(ju.x, ju.y)
            })(uu.leftStick, lu) > 0 || 0 !== Xu.x || 0 !== Xu.y;
          if (this.hidden) {
            const Eu = uu.wasPressed(Uu),
              ju = uu.wasPressed(Zu);
            if (!qu && !wu(uu.rightStick) && !Eu && !ju && !uu.wokeDevice) return void this.TY();
            if (this.hidden = !1, this.updateHit(!1), Eu || ju) return Eu && (this.press = {
              kind: "ignored"
            }, uu.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.TY()
          }
          this.movePendingPageStart(qu);
          const fu = this.getPoint();
          this.state = pu(this.state, {
            stick: uu.leftStick,
            moveDeadzone: lu,
            dpad: Xu,
            dtMs: uu.dtMs,
            cursorSpeedPercent: (0, cu.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Yu = this.state.x !== fu.x || this.state.y !== fu.y,
            hu = [Uu, Zu].some((Eu => uu.wasPressed(Eu) || uu.wasReleased(Eu)));
          (Yu || hu || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Yu), this.updateConfirm(uu, Uu), this.updateSecondary(uu, Zu), this.updateScroll(uu, Eu), this.TY()
        }
        followPage(uu) {
          const Eu = "home" === uu.layer.kind || "gamePage" === uu.layer.kind,
            ju = this.page;
          if (this.page = Eu ? {
              key: (0, ss.s)(uu.layer),
              root: uu.root
            } : null, !this.page || !ju || ju.root !== uu.root || ju.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(uu), "hybrid" === Gs()) return gs = null, hs = null, Ms.lock(), !0;
          const {
            key: su
          } = this.page;
          return this.pendingPageStart = {
            root: uu.root,
            key: su,
            returning: EU.notePageEnteredByCursor(su),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(uu) {
          const Eu = this.pendingPageStart;
          if (!Eu) return;
          if (uu || Eu.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ju = Eu.returning ? EU.recallStop(Eu.root, Eu.key) : null;
          if (!ju && Eu.returning && performance.now() - Eu.enteredAtMs < 1e3) return;
          const su = null !== ju && void 0 !== ju ? ju : EU.pickInitial(Eu.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Eu.enteredAtMs
          });
          su && (this.pendingPageStart = null, this.jumpTo((0, tu.A)(su)))
        }
        setLayer(uu) {
          this.layerRoot = uu.root, this.layerOrder = uu.order
        }
        followLayer(uu) {
          var Eu;
          if (uu.root === this.layerRoot) return;
          null !== (Eu = this.layerRoot) && void 0 !== Eu && Eu.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ju = this.layerPoints.get(uu.root),
            su = ju && uu.order <= this.layerOrder ? ju : EU.getLayerStartPoint(uu.root);
          this.setLayer(uu), this.jumpTo(su)
        }
        getHandoff(uu) {
          var Eu;
          return {
            point: this.getPoint(),
            element: null !== (Eu = this.interactive) && void 0 !== Eu ? Eu : this.findDraggedSliderNearby(),
            direction: uu
          }
        }
        findDraggedSliderNearby() {
          const uu = this.draggedSlider;
          if (null === uu || void 0 === uu || !uu.isConnected) return null;
          const Eu = uu.getBoundingClientRect(),
            {
              y: ju
            } = this.getPoint();
          return ju >= Eu.top - 40 && ju <= Eu.bottom + 40 ? uu : null
        }
        handBackToFocus(uu) {
          if (!ks()) return !1;
          const Eu = Ou.D.find((Eu => uu.wasPressed(Eu)));
          return !!Eu && (ju = this.getHandoff(Eu), gs = Os(ju), hs = null, Ms.lock(), bu.d.handOffHeldInput(), !0);
          var ju
        }
        getAssistContext() {
          const uu = this.interactive;
          if (null === uu || void 0 === uu || !uu.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Eu = uu.getBoundingClientRect();
          if (Eu.width > .4 * window.innerWidth || Eu.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ju = (0, cu.f)().cursorMagnetism && !(0, AZ.e)(uu) && !uu.closest("[data-pad-slider]"),
            su = this.magnet && this.magnet !== uu && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Eu;
          return {
            overInteractive: !0,
            magnetTarget: ju ? {
              x: su.left + su.width / 2,
              y: su.top + su.height / 2
            } : null
          }
        }
        updateHit(uu) {
          this.lastHitTestMs = performance.now();
          const Eu = this.getPoint(),
            ju = document.elementFromPoint(Eu.x, Eu.y),
            su = ju && !(0, Du.q)(ju) && (uu => {
              var Eu;
              const ju = bs();
              return !(ju && !ju.root.contains(uu) && !uu.closest(".tooltip-container")) || !(null !== (Eu = document.getElementById("root")) && void 0 !== Eu && Eu.contains(uu))
            })(ju) ? ju : null;
          if (su !== this.hit) return (0, tu.o)(this.hit, su, Eu), this.hit = su, void this.setInteractive(su ? (uu => {
            const Eu = uu.closest(nZ);
            if (Eu) {
              var ju, su;
              const uu = null !== (ju = null === (su = Eu.parentElement) || void 0 === su ? void 0 : su.closest("[data-pad-focusable]")) && void 0 !== ju ? ju : Eu;
              return (0, zu.r)(uu) ? {
                element: null,
                magnet: null
              } : {
                element: uu,
                magnet: Eu
              }
            }
            const Uu = zZ(uu);
            return {
              element: Uu,
              magnet: Uu
            }
          })(su) : {
            element: null,
            magnet: null
          });
          uu && su && (0, tu.o)(su, su, Eu)
        }
        setInteractive(uu) {
          let {
            element: Eu,
            magnet: ju
          } = uu;
          this.interactive = Eu, this.magnet = ju
        }
        clearHover() {
          this.hit && (0, tu.o)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const uu = this.hit;
          if (!uu || (0, tu.F)(uu)) return {
            kind: "ignored"
          };
          const Eu = (0, Ks.b)(uu),
            ju = uu.closest("[data-pad-slider]");
          return Eu && ju ? {
            kind: "slider",
            slider: ju,
            adjuster: Eu
          } : ((0, tu.q)(uu, this.getPoint()), {
            kind: "pointer",
            target: uu
          })
        }
        applySliderFraction(uu) {
          var Eu;
          const ju = uu.slider.getBoundingClientRect(),
            su = ju.height > ju.width,
            Uu = null === (Eu = uu.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Eu ? void 0 : Eu.getBoundingClientRect(),
            Zu = Uu ? su ? Uu.height : Uu.width : 0,
            Xu = (su ? ju.height : ju.width) - Zu;
          if (Xu <= 0) return;
          const lu = su ? ju.bottom - Zu / 2 - this.state.y : this.state.x - ju.left - Zu / 2;
          uu.adjuster.setFraction(Math.max(0, Math.min(1, lu / Xu)))
        }
        updateConfirm(uu, Eu) {
          uu.wasPressed(Eu) && (this.press = uu.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ju = this.press;
          if (!ju) return;
          if (uu.isHeld(Eu)) return "slider" === ju.kind && this.applySliderFraction(ju), void this.updateRepeat();
          this.press = null;
          const su = this.repeated;
          if (this.endRepeat(), !uu.wasReleased(Eu)) return void this.endPressWithoutClick(ju);
          const Uu = this.getPoint(),
            Zu = this.hit;
          if ("slider" === ju.kind && ju.adjuster.endDrag(), "pointer" === ju.kind) {
            const uu = null !== Zu && void 0 !== Zu ? Zu : ju.target.isConnected ? ju.target : null;
            uu && (0, tu.u)(uu, Uu);
            const Eu = Zu && ju.target.isConnected && !su ? ((uu, Eu) => {
              for (let ju = uu; ju; ju = ju.parentElement)
                if (ju.contains(Eu)) return ju;
              return null
            })(ju.target, Zu) : null;
            Eu && (EU.noteCursorActivation(Eu), (0, Du.e)(Eu, new MouseEvent("click", (0, tu.P)(Uu, 0, 0))), (0, tu.g)(Eu), (0, tu.L)(Eu) && (0, tu.I)(Eu))
          }
        }
        beginRepeat() {
          var uu, Eu, ju;
          const su = null !== (uu = null === (Eu = this.hit) || void 0 === Eu ? void 0 : Eu.closest("[data-pad-repeat]")) && void 0 !== uu ? uu : null;
          this.repeatStop = su, this.repeatKey = null !== (ju = null === su || void 0 === su ? void 0 : su.getAttribute("data-pad-repeat")) && void 0 !== ju ? ju : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const uu = this.repeatStop;
          if (!uu) return;
          const Eu = this.hit;
          uu.isConnected && !(0, zu.r)(uu) && uu.getAttribute("data-pad-repeat") === this.repeatKey && Eu && uu.contains(Eu) ? uu.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, EU.noteCursorActivation(uu), (0, Du.e)(uu, new MouseEvent("click", (0, tu.P)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(uu) {
          "slider" === uu.kind && uu.adjuster.endDrag(), "pointer" === uu.kind && uu.target.isConnected && (0, tu.u)(uu.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(uu, Eu) {
          uu.wasPressed(Eu) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !uu.isHeld(Eu) && (this.secondaryArmed = !1, uu.wasReleased(Eu) && this.hit && (0, tu.m)(this.hit, this.getPoint(), 2))
        }
        updateScroll(uu, Eu) {
          const ju = Ju(uu.rightStick, uu.dtMs);
          if (0 === ju.x && 0 === ju.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ju.x,
            y: this.scrollRemainder.y + ju.y
          };
          const su = Math.trunc(this.scrollRemainder.x),
            Uu = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - su,
            y: this.scrollRemainder.y - Uu
          };
          const Zu = this.hit;
          if (!Zu) return;
          let Xu = !1;
          if (0 !== Uu) {
            const uu = RZ(Zu, "y", Uu > 0 ? 1 : -1, Eu);
            uu && (uu.scrollBy({
              top: Uu,
              behavior: "instant"
            }), Xu = !0)
          }
          if (0 !== su) {
            const uu = RZ(Zu, "x", su > 0 ? 1 : -1, Eu);
            uu && (uu.scrollBy({
              left: su,
              behavior: "instant"
            }), Xu = !0)
          }
          Xu && (this.lastHitTestMs = -1 / 0)
        }
        TY() {
          Tu.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      EX = () => {
        const uu = (0, Qu.useMemo)((() => new Bu), []),
          Eu = (0, Nu.C)();
        return (0, Qu.useEffect)((() => {
          if (!Eu) return;
          let ju = 0,
            su = {
              of: null,
              atMs: 0,
              list: []
            };
          const Uu = document.getElementsByClassName(ms),
            Zu = uu => {
              for (const Eu of [...Uu]) Eu !== uu && Eu.classList.remove(ms)
            },
            Xu = () => {
              var Eu;
              ju = requestAnimationFrame(Xu);
              const Uu = (() => {
                const uu = EU.getFocused();
                if (EU.isActive() && null !== uu && void 0 !== uu && uu.isConnected) return uu;
                const Eu = uX.getHighlighted();
                return null !== Eu && void 0 !== Eu && Eu.isConnected ? Eu : null
              })();
              Zu(Uu), Uu && !Uu.classList.contains(ms) && Uu.classList.add(ms);
              const lu = null !== (Eu = null === Uu || void 0 === Uu ? void 0 : Uu.closest("[data-pad-reticle-box]")) && void 0 !== Eu ? Eu : Uu;
              uu.show(lu ? ((uu, Eu) => {
                let ju = uu.left,
                  su = uu.top,
                  Uu = uu.right,
                  Zu = uu.bottom;
                for (const Xu of Eu) {
                  if (!Xu) continue;
                  const uu = Vu(Xu);
                  ju = Math.max(ju, uu.left), su = Math.max(su, uu.top), Uu = Math.min(Uu, uu.right), Zu = Math.min(Zu, uu.bottom)
                }
                return Uu <= ju || Zu <= su ? null : {
                  left: ju,
                  top: su,
                  width: Uu - ju,
                  height: Zu - su
                }
              })(lu.getBoundingClientRect(), (uu => {
                const Eu = performance.now();
                return (su.of !== uu || Eu - su.atMs > 500) && (su = {
                  of: uu,
                  atMs: Eu,
                  list: [Pu(uu, "y"), Pu(uu, "x")]
                }), su.list
              })(lu)) : null)
            };
          return ju = requestAnimationFrame(Xu), () => {
            cancelAnimationFrame(ju), Zu(null), uu.hide()
          }
        }), [Eu, uu]), (0, Su.jsx)(Lu, {
          placer: uu,
          className: "PadFocusRing"
        })
      },
      jX = (uu, Eu) => {
        uu.style.transform = `translate3d(${Eu.x}px, ${Eu.y}px, 0)`, uu.classList.toggle("Visible", Eu.visible), uu.classList.toggle("Pressed", Eu.pressed)
      },
      sX = () => {
        const uu = (0, Qu.useRef)(null);
        return (0, Qu.useEffect)((() => {
          const Eu = Tu.subscribe((Eu => {
            uu.current && jX(uu.current, Eu)
          }));
          return uu.current && jX(uu.current, Tu.get()), Eu
        }), []), (0, Su.jsx)("div", {
          ref: uu,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Su.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      UX = "#ncmp__modal.ncmp__active",
      ZX = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(UX) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(UX),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      XX = "PadOverThirdParty",
      lX = new Set(ZX.map((uu => uu.id))),
      qX = () => {
        const uu = ZX.map((uu => {
            let {
              id: Eu,
              find: ju,
              startSelectors: su
            } = uu;
            return (0, ss.p)({
              id: Eu,
              kind: "popup",
              getRoot: () => {
                const uu = ju(),
                  Eu = uu ? ((uu, Eu) => {
                    var ju;
                    for (const su of Eu) {
                      const Eu = uu.querySelector(su);
                      if (Eu) return Eu
                    }
                    return null !== (ju = [...uu.querySelectorAll("button")].find((uu => !uu.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ju ? ju : null
                  })(uu, su) : null;
                if (uu && Eu && !Eu.hasAttribute("data-pad-default-focus")) {
                  for (const Eu of uu.querySelectorAll("[data-pad-default-focus]")) Eu.removeAttribute("data-pad-default-focus");
                  for (const Eu of uu.querySelectorAll("[data-pad-hint-bar-avoid]")) Eu.removeAttribute("data-pad-hint-bar-avoid");
                  Eu.setAttribute("data-pad-default-focus", ""), ((uu, Eu) => {
                    let ju = uu;
                    for (let su = uu.parentElement; su && Eu.contains(su) && !(su.getBoundingClientRect().height >= window.innerHeight / 2); su = su.parentElement) ju = su;
                    return ju
                  })(Eu, uu).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return uu
              },
              close: null,
              memoryKey: null
            })
          })),
          Eu = document.documentElement,
          ju = Xu.e.onFrame((() => {
            const uu = (0, Nu.l)() ? bs() : null,
              ju = !!uu && (su = uu.layer, lX.has(su.id));
            var su;
            Eu.classList.contains(XX) !== ju && Eu.classList.toggle(XX, ju)
          }));
        return () => {
          for (const Eu of uu) Eu();
          ju(), Eu.classList.remove(XX)
        }
      },
      fX = "PadLargePointer",
      CX = () => {
        (0, Qu.useEffect)((() => {
          const uu = (0, Du.l)(document.body),
            Eu = EU.install(),
            ju = uX.install(),
            su = qX();
          return () => {
            uu(), Eu(), ju(), su()
          }
        }), []);
        const {
          largePointer: uu
        } = (0, cu.n)(), Eu = (0, iZ.t)() && uu;
        return (0, Qu.useEffect)((() => {
          if (Eu) return document.documentElement.classList.add(fX), () => {
            document.documentElement.classList.remove(fX)
          }
        }), [Eu]), (0, lu.createPortal)((0, Su.jsxs)(Su.Fragment, {
          children: [(0, Su.jsx)(HZ, {}), (0, Su.jsx)(EX, {}), (0, Su.jsx)(sX, {})]
        }), document.body)
      };
    var bX = ju(8997),
      cX = ju(9017),
      NX = ju(9013);
    ju(9026);
    const OX = (uu, Eu) => {
        const [ju, su] = (0, Qu.useState)(!1), [Uu, Zu] = (0, Qu.useState)(null), Xu = (0, Qu.useRef)(null), lu = (0, Qu.useCallback)((uu => {
          Xu.current = uu, Zu(uu)
        }), []), qu = (0, Qu.useCallback)((() => {
          su(!1), lu(null)
        }), [lu]), Cu = (0, Qu.useCallback)((() => {
          su(!0)
        }), []), bu = (0, Qu.useCallback)(((uu, Eu) => {
          lu((0, NX.y)(uu, Eu, Xu.current))
        }), [lu]);
        (0, Qu.useLayoutEffect)((() => (Eu(ju), (0, WZ.z)(uu, ju), fu.h.TY(WZ.r), () => {
          Eu(!1), (0, WZ.z)(uu, !1), fu.h.TY(WZ.r)
        })), [ju, uu, Eu]), (0, gU.f)("appManagerUpdated|activeInputDevice", (uu => {
          "gamepad" !== uu && qu()
        })), (0, gU.f)("appManagerUpdated|gameState", (uu => {
          "inGame" !== uu && qu()
        }));
        const cu = () => {
          (0, qj.s)() && qu()
        };
        return (0, gU.f)("appManagerUpdated|openEverythingMenuName", cu), (0, gU.f)("appManagerUpdated|openInGameMenuName", cu), {
          open: ju,
          picked: Uu,
          pickedRef: Xu,
          show: Cu,
          aim: bu,
          close: qu
        }
      },
      YX = uu => {
        let {
          className: Eu,
          slotCount: ju,
          picked: su,
          slotLabel: Uu,
          renderSlot: Zu,
          centre: Xu
        } = uu;
        const lu = Array.from({
          length: ju
        }, ((uu, Eu) => Eu));
        return (0, Su.jsx)("div", {
          className: Wu()("EmoteWheelOverlay PadRadialWheel", Eu),
          children: (0, Su.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * NX.n + "rem",
              height: 2 * NX.n + "rem"
            },
            children: [(0, Su.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${NX.j} ${NX.j}`,
              children: [lu.map((uu => (0, Su.jsx)("path", {
                d: (0, NX.q)(uu, ju, NX.f, NX.h, NX.i),
                className: Wu()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: uu === su
                }),
                "aria-label": Uu(uu)
              }, uu))), (0, Su.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: NX.f,
                cy: NX.f,
                r: NX.i
              }), (0, Su.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: NX.f,
                cy: NX.f,
                r: NX.h
              }), null !== su && (0, Su.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, NX.q)(su, ju, NX.f, NX.h, NX.i)
              })]
            }), lu.map((uu => {
              const Eu = (0, NX.u)(uu, ju);
              return (0, Su.jsx)("div", {
                className: Wu()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: uu === su
                }),
                style: {
                  left: `calc(50% + ${NX.c*Math.cos(Eu)}rem)`,
                  top: `calc(50% + ${NX.c*Math.sin(Eu)}rem)`
                },
                "aria-hidden": !0,
                children: Zu(uu)
              }, uu)
            })), (0, Su.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Xu
            })]
          })
        })
      },
      hX = cZ.length,
      DX = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = OX("chat", kj.m), ju = (0, Qu.useMemo)((() => cZ.map((Eu => uu(Eu)))), [uu]);
        return (0, gU.f)(kj.k, (() => {
          Eu.open || (0, bX.h)() || (0, cX.o)() || "inGame" !== qu.d.get("gameState") || (0, qj.s)() || !(0, Pj.c)() || Eu.show()
        })), (0, gU.f)(kj.f, (uu => {
          Eu.open && Eu.aim(uu, hX)
        })), (0, gU.f)(kj.h, (() => {
          var uu;
          if (!Eu.open) return;
          const su = Eu.pickedRef.current;
          null !== su ? NZ.claim(performance.now()) && (Eu.close(), null === (uu = (0, Pj.c)()) || void 0 === uu || uu.sendLine(ju[su])) : Eu.close()
        })), (0, gU.f)(kj.g, Eu.close), Eu.open ? (0, Su.jsx)(YX, {
          className: "QuickChatWheel",
          slotCount: hX,
          picked: Eu.picked,
          slotLabel: uu => ju[uu],
          renderSlot: uu => ju[uu],
          centre: null !== Eu.picked ? ju[Eu.picked] : uu("controller:quickChatPick")
        }) : null
      },
      gX = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = OX("actionButton", cX.q), [ju, su] = (0, Qu.useState)([]);
        if ((0, gU.f)(cX.l, (uu => {
            Eu.open || (0, bX.h)() || (0, kj.d)() || "inGame" !== qu.d.get("gameState") || (0, qj.s)() || (su(uu), Eu.show())
          })), (0, gU.f)(cX.e, (uu => {
            Eu.open && Eu.aim(uu, ju.length)
          })), (0, gU.f)(cX.h, (() => {
            if (!Eu.open) return;
            const uu = Eu.pickedRef.current;
            Eu.close(), null !== uu && fu.h.TY(cX.n, ju[uu])
          })), (0, gU.f)(cX.f, Eu.close), !Eu.open) return null;
        const Zu = null !== Eu.picked ? ju[Eu.picked] : null;
        return (0, Su.jsx)(YX, {
          className: "ActionWheel",
          slotCount: ju.length,
          picked: Eu.picked,
          slotLabel: Eu => {
            const su = ju[Eu];
            return "reload" === su.kind ? uu("controller:gameplayReload") : "customButton" === su.kind ? su.description || su.icon : "touchButton" === su.kind && "string" === typeof su.label ? su.label : ""
          },
          renderSlot: uu => (0, Su.jsx)(aU, {
            action: ju[uu]
          }),
          centre: Zu ? (0, Su.jsx)(aU, {
            action: Zu
          }) : uu("controller:actionWheelPick")
        })
      };
    var MX = ju(91);
    const eX = () => ((0, Qu.useEffect)((() => {
        var uu, Eu;
        const ju = (0, Du.l)(document.getElementById("root")),
          su = (0, Nu.f)(),
          Uu = (() => {
            const uu = [fu.h.subscribe(sU.g, (() => {
                lU("blockBreak")
              })), fu.h.subscribe("damagedByOtherPlayer", (() => {
                lU("damage")
              })), fu.h.subscribe("yourAttackHit", (uu => {
                let {
                  hitSelf: Eu
                } = uu;
                Eu || lU("hit")
              }))],
              Eu = Xu.e.onActivePadChanged((uu => {
                uu && lU("connect")
              }));
            return () => {
              for (const Eu of uu) fu.h.unsubscribe(Eu);
              Eu()
            }
          })(),
          Zu = (() => {
            const uu = new NU({
              getVisitId: cU.f,
              peekVisitId: cU.peekVisitSessionId,
              readReportedVisitId: () => {
                const uu = bU.l.getItem(OU);
                return "string" === typeof uu ? uu : null
              },
              writeReportedVisitId: uu => {
                bU.l.setItem(OU, uu)
              },
              isPadActive: Nu.l,
              getPadFamily: () => {
                var uu, Eu;
                return null !== (uu = null === (Eu = Xu.e.getActivePad()) || void 0 === Eu ? void 0 : Eu.family) && void 0 !== uu ? uu : null
              },
              canReport: fU.isBloxdGa4Ready,
              getInputType: CU.c,
              HN: fU.logControllerUsedToGtag
            });
            let Eu = 0,
              ju = null;
            const su = Uu => {
                null === ju && ("notReady" !== uu.check(Uu) || null !== ju || Eu >= 20 || (Eu++, ju = setTimeout((() => {
                  ju = null, su(!1)
                }), 3e3)))
              },
              Uu = fu.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
                su(!0)
              })),
              Zu = (0, cU.n)((() => {
                Eu = 0, su(!0)
              }));
            return () => {
              fu.h.unsubscribe(Uu), Zu(), null !== ju && clearTimeout(ju)
            }
          })(),
          lu = Xu.e.onFrame(((uu, Eu, ju) => {
            const su = (0, Nu.p)(uu, ju);
            bu.d.dispatch(uu, Eu, su)
          }));
        let Cu = null !== (uu = null === (Eu = Xu.e.getActivePad()) || void 0 === Eu ? void 0 : Eu.family) && void 0 !== uu ? uu : null;
        const Ou = Xu.e.onActivePadChanged((uu => {
            var Eu, ju;
            (bu.d.reset(), (0, Nu.u)(), fu.h.TY(Xu.c, uu), (null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.family) && void 0 !== Eu ? Eu : null) !== Cu) && (Cu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.family) && void 0 !== ju ? ju : null, fu.h.TY(cu.d, (0, cu.f)()));
            !uu && (0, Nu.l)() && (0, Nu.y)(qu.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Yu = () => {
            "visible" !== document.visibilityState && bu.d.clear()
          },
          hu = () => {
            bu.d.clear()
          };
        document.addEventListener("visibilitychange", Yu), window.addEventListener("blur", hu), Xu.e.start(), (0, qU.l)();
        const gu = null;
        return () => {
          ju(), su(), Uu(), Zu(), lu(), Ou(), document.removeEventListener("visibilitychange", Yu), window.removeEventListener("blur", hu), Xu.e.stop(), null === gu || void 0 === gu || gu()
        }
      }), []), (0, Su.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Su.jsx)(VU, {}), (0, Su.jsx)(LU, {}), (0, Su.jsx)(tU, {}), (0, Su.jsx)(rZ, {}), (0, Su.jsx)(CX, {}), (0, Su.jsx)(DX, {}), (0, Su.jsx)(gX, {})]
      })),
      GX = () => MX.featureFlags.useControllerSupport ? (0, Su.jsx)(eX, {}) : null;
    var pX = ju(8419),
      wX = ju(9032);
    const JX = new Set(qU.j),
      dX = uu => `${wX.n}${(0,cu.i)()}/${uu}`,
      aX = uu => {
        if (!(0, wX.k)(uu)) return null;
        const [Eu, ju] = uu.slice(wX.n.length).split("/");
        return (0, pX.e)(Eu) && JX.has(ju) ? (0, qU.f)(Eu, ju) : null
      };
    var PX = ju(9034);
    const oX = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, Nu.C)(), {
          gameState: ju,
          isUiHidden: su
        } = (0, qu.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: Zu,
          sneakMode: Xu
        } = (0, cu.n)(), [lu, fu] = (0, Qu.useState)(PX.e);
        return (0, gU.f)(KU.v, fu), Eu && !su && "inGame" === ju && lu ? (0, Su.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Zu && (0, Su.jsx)(JU, {
            glyph: (0, Cu.i)("toggle" === Xu ? "sneak" : "sneakToggle")
          }), (0, Su.jsx)("span", {
            children: uu("controller:gameplaySneaking")
          })]
        }) : null
      },
      kX = 12,
      mX = uu => {
        let {
          trigger: Eu,
          className: ju,
          children: su
        } = uu;
        const Uu = (0, Qu.useRef)(null);
        return (0, Qu.useEffect)((() => {
          let uu = 0;
          const ju = Pu(Eu, "y"),
            su = () => {
              uu = requestAnimationFrame(su);
              const Zu = Uu.current;
              if (!Zu || null === Eu || void 0 === Eu || !Eu.isConnected) return;
              const {
                left: Xu,
                top: lu
              } = function(uu, Eu, ju) {
                let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Zu = uu.left + uu.width / 2,
                  Xu = Math.max(kX, ju.width - kX - Eu.width),
                  lu = Math.min(Math.max(Zu - Eu.width / 2, kX), Xu),
                  qu = ju.height - su;
                let fu = 0,
                  Cu = qu;
                if (Uu) {
                  const uu = Math.max(0, Uu.top),
                    su = Math.min(qu, Uu.bottom);
                  su - uu >= Math.max(ju.height / 2, Eu.height + 24) && (fu = uu, Cu = su)
                }
                const bu = uu.top + uu.height / 2 < (fu + Cu) / 2 ? Cu - kX - Eu.height : fu + kX;
                return {
                  left: lu,
                  top: Math.max(kX, bu)
                }
              }(Eu.getBoundingClientRect(), {
                width: Zu.offsetWidth,
                height: Zu.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(BZ)) || 0, null !== ju && void 0 !== ju && ju.isConnected ? ju.getBoundingClientRect() : null);
              Zu.style.transform = `translate3d(${Math.round(Xu)}px, ${Math.round(lu)}px, 0)`, Zu.style.visibility = "visible"
            };
          return su(), () => {
            cancelAnimationFrame(uu)
          }
        }), [Eu]), (0, Su.jsx)("div", {
          ref: Uu,
          className: ju,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: su
        })
      };
    var vX = ju(1116),
      KX = ju(9036),
      VX = ju(1506),
      rX = ju(9043),
      QX = ju(9047);
    const iX = {
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
      WX = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, Nu.C)(), ju = (0, KX.b)(), su = (0, IU.h)("_tasks"), Zu = (0, IU.h)("_availableLeaderboards");
        if (!Eu) return null;
        const Xu = (uu => {
          let {
            hasShop: Eu,
            hasTasksOrLeaderboards: ju,
            canInvite: su
          } = uu;
          const Uu = [];
          return Eu && Uu.push("shop"), ju && Uu.push("tasks"), su && Uu.push("invite"), Uu.push("leave"), Uu
        })({
          hasShop: ju,
          hasTasksOrLeaderboards: !(!su && !Zu),
          canInvite: !!MX.featureFlags.canUseInviteLinks
        });
        return (0, Su.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Xu.map((Eu => {
            const {
              icon: ju,
              labelKey: su
            } = iX[Eu], Uu = "leave" === Eu ? VX.R : VX.f;
            return (0, Su.jsx)(Uu, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (uu => {
                  switch (uu) {
                    case "shop":
                      return fu.h.TY(QX.k), void qu.d.set({
                        openEverythingMenuName: lj.o.SHOP
                      });
                    case "tasks":
                      return void fu.h.TY("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void fu.h.TY("toggleMenu", "inviteLink");
                    case "leave":
                      (0, rX.e)()
                  }
                })(Eu)
              },
              children: (0, Su.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Su.jsx)(vX.e, {
                  name: ju
                }), (0, Su.jsx)("span", {
                  children: uu(su)
                })]
              })
            }, Eu)
          }))
        })
      };
    var SX = ju(2040);
    const IX = Ou.z,
      FX = ["forward", "backward", "left", "right", "sprint"],
      BX = uu => uu.ctrlKey || uu.altKey || "Alt" === uu.key || "ArrowUp" === uu.key || "ArrowDown" === uu.key || "Tab" === uu.code || "/" === uu.key || "Slash" === uu.code;
    class LX {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Ou._).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(uu) {
        this.armed = uu
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Eu ? !uu.repeat && this.swallowedKeys.delete(uu.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(uu.code),
          continues: !1
        } : "Escape" === uu.key || uu.repeat && !this.swallowedKeys.has(uu.code) ? {
          swallow: !1,
          continues: !1
        } : ju ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(uu.code), {
          swallow: !0,
          continues: (0, Nu.j)(uu)
        })
      }
      onKeyUp(uu) {
        return this.swallowedKeys.delete(uu.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Uu = (0, Ou.s)(uu.values, this.previousHeld),
          Zu = null === ju ? -1 : (0, Ou.k)(ju),
          Xu = Zu >= 0 && Uu[Zu] && !this.previousHeld[Zu],
          lu = Uu.some(((uu, Eu) => uu && !this.previousHeld[Eu] && Eu !== Zu)),
          qu = Math.hypot(uu.leftStick.x, uu.leftStick.y) >= IX,
          fu = Math.hypot(uu.rightStick.x, uu.rightStick.y) >= IX,
          Cu = qu && !this.leftStickWasPressed || fu && !this.rightStickWasPressed;
        this.previousHeld = Uu, this.leftStickWasPressed = qu, this.rightStickWasPressed = fu;
        let bu = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, bu = !0);
        const cu = !Eu && Xu && !su,
          Nu = !cu && this.armed && !Eu && (lu || Cu);
        return (cu || Nu) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Nu, bu = !0), {
          continues: Nu,
          back: cu,
          consumeHeld: bu
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const tX = new Set([...SX.n, ...SX.D]),
      xX = uu => ((uu, Eu, ju) => {
        const su = Object.keys(Eu).filter((su => !ju.has(su) && Eu[su].includes(uu)));
        return su.length > 0 && su.every((uu => FX.includes(uu)))
      })(uu, SX.z, tX),
      TX = (uu, Eu, ju) => {
        const su = new LX,
          Uu = uu => {
            if (!uu.isTrusted) return;
            const {
              swallow: ju,
              continues: Uu
            } = su.onKeyDown(uu, !(0, Nu.E)(uu) || (0, jU.l)() || (0, qj.s)(), xX(uu.code));
            ju && (uu.stopImmediatePropagation(), BX(uu) && uu.preventDefault()), Uu && ((0, Nu.y)("keyboardMouse"), Eu())
          },
          Zu = uu => {
            uu.isTrusted && su.onKeyUp(uu) && (uu.stopImmediatePropagation(), BX(uu) && uu.preventDefault())
          },
          lu = () => {
            su.forgetKeys()
          };
        window.addEventListener("keydown", Uu, !0), window.addEventListener("keyup", Zu, !0), window.addEventListener("blur", lu);
        const qu = Xu.e.onFrame((uu => {
            const Uu = bu.d.getActiveConsumerName(),
              Zu = ju(),
              Xu = Zu ? (0, Cu.i)("menuBack") : null,
              lu = null !== Uu && "gameplay" !== Uu,
              {
                continues: qu,
                back: fu,
                consumeHeld: Ou
              } = su.onPadFrame(uu, lu, Xu, (0, Nu.n)(uu));
            if (Ou) {
              const uu = (0, cu.f)().swapSticks ? "right" : "left";
              bu.d.consumeAllHeld(su.consumeLeavesMoveStick() ? uu : null)
            }
            fu ? null === Zu || void 0 === Zu || Zu() : qu && Eu()
          })),
          fu = (0, jU.p)(`pressToContinue:${uu}`, (() => su.blocksGameplay()));
        return {
          setArmed: uu => {
            su.setArmed(uu)
          },
          dispose: () => {
            window.removeEventListener("keydown", Uu, !0), window.removeEventListener("keyup", Zu, !0), window.removeEventListener("blur", lu), qu(), fu()
          }
        }
      };
    var HX = ju(5155),
      AX = ju(3623),
      nX = ju(3309),
      yX = ju(8426);
    const zX = uu => {
        let {
          text: Eu
        } = uu;
        return (0, Su.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Eu
        })
      },
      RX = uu => {
        let {
          label: Eu,
          hint: ju,
          options: su,
          value: Zu,
          onChange: Xu
        } = uu;
        const {
          t: lu
        } = (0, Uu.A)();
        return (0, Su.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Su.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Su.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Su.jsx)("div", {
                className: "SliderText",
                children: Eu
              }), ju && (0, Su.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ju
              })]
            }), (0, Su.jsx)(nX.c, {
              options: su.map((uu => ({
                label: "label" in uu ? uu.label : lu(uu.labelKey),
                value: uu.value
              }))),
              value: Zu,
              onChange: uu => {
                Xu(uu.value)
              }
            })]
          })
        })
      },
      ul = uu => {
        let {
          settingKey: Eu,
          label: ju,
          range: su,
          format: Uu
        } = uu;
        const Zu = (0, cu.n)();
        return (0, Su.jsx)(HX.h, {
          name: ju,
          min: su.min,
          max: su.max,
          step: su.step,
          padStep: su.step,
          initValue: Zu[Eu],
          format: Uu,
          onChange: uu => {
            (0, cu.j)({
              [Eu]: (0, yX.x)(uu, su)
            })
          }
        })
      };
    var El = ju(9056),
      jl = ju(9065);
    const sl = uu => uu instanceof DOMException && ("SecurityError" === uu.name || "NotAllowedError" === uu.name),
      Ul = uu => {
        const [Eu] = [...uu.controllers].sort(((uu, Eu) => jl.t[uu] - jl.t[Eu]));
        return jl.q[Eu]
      },
      Zl = uu => {
        (0, El.b)().allowPhoneMotion().catch((Eu => {
          uu && sl(Eu) ? uu() : console.warn("Could not enable the motion sensor", Eu)
        }))
      },
      Xl = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      ll = uu => {
        let {
          status: Eu
        } = uu;
        const {
          t: ju
        } = (0, Uu.A)(), [su, Zu] = (0, Qu.useState)(null), Xu = `${Eu.controllers.join(",")}|${Eu.phoneMotion}`;
        (0, Qu.useEffect)((() => {
          Zu(null)
        }), [Xu]);
        const lu = () => {
          (0, El.b)().connectController().then((uu => {
            Zu(uu > 0 ? "openFailed" : null)
          })).catch((uu => {
            sl(uu) ? Zu("needsClick") : console.warn("Could not connect motion controller", uu)
          }))
        };
        if (Eu.hidSupported) {
          let uu = ju("controller:settingsGyroConnectHint");
          return "needsClick" === su ? uu = ju("controller:settingsGyroConnectNeedsClick") : "openFailed" === su ? uu = ju("controller:settingsGyroOpenFailed") : Eu.controllers.length > 0 && (uu = ju("controller:settingsGyroConnected", {
            name: Ul(Eu)
          })), (0, Su.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Su.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Su.jsx)("div", {
                className: "ControllerSettingsHint",
                children: uu
              }), (0, Su.jsx)(VX.f, {
                onClick: lu,
                children: ju("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Eu.phoneMotion) return (0, Su.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Su.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === su && (0, Su.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ju("controller:settingsGyroAllowNeedsTap")
            }), (0, Su.jsx)(VX.f, {
              onClick: () => {
                Zl((() => {
                  Zu("needsTap")
                }))
              },
              children: ju("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const qu = Xl[Eu.phoneMotion];
        return qu ? (0, Su.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ju(qu)
        }) : null
      },
      ql = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, cu.n)(), ju = (0, El.e)(), su = (0, Nu.D)(), Zu = !ju.hidSupported && ju.phoneSupported && !ju.padConnected, Xu = (ju.hidSupported || ju.phoneSupported) && !Zu, lu = (0, Cu.i)("pause");
        return (0, Su.jsxs)(Su.Fragment, {
          children: [(0, Su.jsx)(zX, {
            text: uu("controller:settingsGyro")
          }), Zu && (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsGyroPhoneNeedsController")
          }), !Xu && !Zu && (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu(ju.hidBlocked || ju.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Xu && (0, Su.jsx)(HX.b, {
            label: uu(ju.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Eu.gyroAiming,
            onClick: uu => {
              var Eu, ju;
              (0, cu.j)({
                gyroAiming: uu
              });
              const su = null === (Eu = null === (ju = navigator.userActivation) || void 0 === ju ? void 0 : ju.isActive) || void 0 === Eu || Eu;
              if (!uu || !su) return;
              const Uu = (0, El.b)(),
                Zu = Uu.getStatus();
              Zu.hidSupported ? Uu.connectControllerIfNoneGranted().catch((uu => {
                console.warn("Motion controller picker unavailable", uu)
              })) : "needsPermission" === Zu.phoneMotion && Zl()
            },
            circleInfoText: uu(ju.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Xu && ju.hidSupported && (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsGyroSteamHint")
          }), Xu && Eu.gyroAiming && (0, Su.jsxs)(Su.Fragment, {
            children: [(0, Su.jsx)(ll, {
              status: ju
            }), (0, Su.jsx)(ul, {
              settingKey: "gyroSensitivity",
              label: uu("controller:settingsGyroSensitivity"),
              range: yX.U,
              format: yX.L
            }), (0, Su.jsx)(RX, {
              label: uu("controller:settingsGyroActivation"),
              hint: "aiming" === Eu.gyroActivation && (0, Su.jsx)(AX.d, {
                text: uu("controller:settingsGyroAimingHint", {
                  button: AX.e
                }),
                glyph: (0, Cu.i)("use")
              }),
              options: yX.Q,
              value: Eu.gyroActivation,
              onChange: uu => {
                (0, cu.j)({
                  gyroActivation: uu
                })
              }
            }), "button" === Eu.gyroActivation && (0, Su.jsx)(RX, {
              label: uu("controller:settingsGyroButton"),
              hint: uu("controller:settingsGyroButtonHint"),
              options: yX.t.filter((uu => uu !== lu || uu === Eu.gyroButton)).map((uu => ({
                label: wU(su, uu),
                value: uu
              }))),
              value: Eu.gyroButton,
              onChange: uu => {
                (0, cu.j)({
                  gyroButton: uu
                })
              }
            })]
          })]
        })
      };
    var fl = ju(1906);
    const Cl = () => {
      const {
        t: uu
      } = (0, Uu.A)(), Eu = (0, cu.n)(), ju = (0, Nu.D)();
      return (0, Su.jsxs)(Su.Fragment, {
        children: [(0, Su.jsx)(zX, {
          text: uu("controller:settingsAccessibility")
        }), (0, Su.jsx)(HX.b, {
          label: uu("controller:settingsSwapConfirmBack"),
          checked: (0, Cu.C)(Eu.swapConfirmBack, ju),
          onClick: uu => {
            (0, cu.j)({
              swapConfirmBack: uu === (0, Cu.C)(null, ju) ? null : uu
            }), fl.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: uu("controller:settingsSwapConfirmBackInfo")
        }), (0, Su.jsx)(RX, {
          label: uu("controller:settingsButtonRepeat"),
          hint: uu("controller:settingsButtonRepeatHint"),
          options: yX.q,
          value: Eu.buttonRepeat,
          onChange: uu => {
            (0, cu.j)({
              buttonRepeat: uu
            })
          }
        }), (0, Su.jsx)(RX, {
          label: uu("controller:settingsTapHoldTime"),
          hint: uu("controller:settingsTapHoldTimeHint"),
          options: yX.ub,
          value: Eu.tapHoldTime,
          onChange: uu => {
            (0, cu.j)({
              tapHoldTime: uu
            })
          }
        }), (0, Su.jsx)(RX, {
          label: uu("controller:settingsEmoteButton"),
          hint: uu("wheel" === Eu.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: yX.E,
          value: Eu.emoteButton,
          onChange: uu => {
            (0, cu.j)({
              emoteButton: uu
            })
          }
        }), (0, Su.jsx)(RX, {
          label: uu("controller:settingsAttackMode"),
          hint: uu("toggle" === Eu.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: yX.o,
          value: Eu.attackMode,
          onChange: uu => {
            (0, cu.j)({
              attackMode: uu
            })
          }
        }), (0, Su.jsx)(HX.b, {
          label: uu("controller:settingsLargePointer"),
          checked: Eu.largePointer,
          onClick: uu => {
            (0, cu.j)({
              largePointer: uu
            })
          },
          circleInfoText: uu("controller:settingsLargePointerInfo")
        })]
      })
    };
    var bl = ju(9067);
    const cl = new class {
        constructor(uu) {
          this.router = uu, this.current = null
        }
        claim(uu, Eu) {
          const ju = this.current;
          ju && (this.current = null, ju.release(), ju.onTakenOver());
          const su = this.router.register({
              ...uu,
              name: "capture"
            }),
            Uu = {
              release: su,
              onTakenOver: Eu
            };
          return this.current = Uu, () => {
            this.current === Uu && (this.current = null), su()
          }
        }
      }(bu.d),
      Nl = uu => {
        (0, Qu.useEffect)((() => {
          if (!uu) return;
          const Eu = uu();
          let ju = !1;
          const su = () => {
              ju || (ju = !0, Eu.onEnd())
            },
            Uu = cl.claim({
              isActive: () => !ju,
              onFrame: uu => {
                Eu.onFrame(uu, su)
              }
            }, su),
            Zu = void 0 === Eu.timeoutMs ? void 0 : window.setTimeout(su, Eu.timeoutMs),
            Xu = uu => {
              "Escape" === uu.key && (uu.preventDefault(), uu.stopPropagation(), su())
            };
          return window.addEventListener("keydown", Xu, !0), () => {
            ju = !0, Uu(), window.clearTimeout(Zu), window.removeEventListener("keydown", Xu, !0)
          }
        }), [uu])
      },
      Ol = uu => {
        let {
          row: Eu,
          capturing: ju,
          onCapture: su,
          holdFillRef: Zu,
          onRebind: Xu,
          swapped: lu
        } = uu;
        const {
          t: qu
        } = (0, Uu.A)();
        if ("fixed" === Eu.kind) return (0, Su.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Su.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Su.jsx)("div", {
              className: "ControlName",
              children: qu(Eu.labelKey)
            }), (0, Su.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Su.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Su.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Su.jsx)(JU, {
                    glyph: "move" === Eu.stick ? (0, Cu.r)() : (0, Cu.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: fu
        } = Eu, bu = (0, Cu.i)(fu), cu = (0, Cu.l)(fu), Nu = bu !== cu && (0, Cu.c)(fu, cu);
        return (0, Su.jsxs)("div", {
          className: Wu()("ControlRow PadControlRow", {
            Capturing: ju
          }),
          children: [(0, Su.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Su.jsx)("div", {
              className: "ControlName",
              children: qu(yX.h[fu])
            }), (0, Su.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ju && (0, Su.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Su.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    su(fu)
                  },
                  children: (0, Su.jsx)(JU, {
                    glyph: bu
                  })
                }), Nu && (0, Su.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: qu("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Xu(fu, cu)
                  },
                  children: (0, Su.jsx)(vX.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), ju && (0, Su.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Su.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Su.jsx)("span", {
                    children: qu("controller:settingsCapturePrompt")
                  }), (0, Su.jsx)("div", {
                    ref: Zu,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Su.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    su(null)
                  },
                  children: "\xd7"
                })]
              }), ju && (0, Su.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Su.jsx)(AX.d, {
                  text: qu((0, Cu.c)(fu, (0, Cu.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: AX.e
                  }),
                  glyph: (0, Cu.i)("menuBack")
                })
              })]
            })]
          }), lu.map((uu => (0, Su.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Su.jsx)(AX.d, {
              text: qu("controller:settingsSwapNotice", {
                action: qu(yX.h[uu]),
                button: AX.e
              }),
              glyph: (0, Cu.i)(uu)
            })
          }, uu))), ju && (0, Su.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${yX.v}ms`
            }
          })]
        })
      },
      Yl = [],
      hl = uu => {
        let {
          layoutSetting: Eu
        } = uu;
        const {
          t: ju
        } = (0, Uu.A)(), su = (0, cu.n)();
        (0, Nu.D)();
        const Zu = (0, Qu.useRef)(null),
          [Xu, lu] = (0, Qu.useState)(null),
          qu = (0, Qu.useCallback)(((uu, Eu) => {
            const ju = (0, cu.f)().bindings;
            (0, Cu.y)(uu, Eu);
            const su = (0, Cu.s)(ju, uu);
            lu(su.length > 0 ? {
              action: uu,
              swapped: su
            } : null)
          }), []),
          [fu, Yu] = ((uu, Eu) => {
            const [ju, su] = (0, Qu.useState)(null), Uu = (0, Qu.useMemo)((() => ju ? () => {
              const Uu = (0, Cu.i)("menuBack"),
                Zu = new yX.b(Uu, (0, Cu.i)("menuConfirm"), (uu => (0, Cu.c)(ju, uu)));
              return {
                onFrame: (su, Xu) => {
                  var lu;
                  const qu = su.frame.timestampMs,
                    fu = Zu.update({
                      ...su,
                      isDown: uu => (0, Ou.L)(su.frame.values, uu)
                    }, qu);
                  null === (lu = uu.current) || void 0 === lu || lu.style.setProperty("width", 100 * Zu.getBindHoldProgress(qu) + "%"), fu && ("bind" === fu.kind ? (bu.d.consumeButton(fu.button), Eu(ju, fu.button)) : bu.d.consumeButton(Uu), Xu())
                },
                onEnd: () => {
                  su(null)
                },
                timeoutMs: yX.v
              }
            } : null), [ju, uu, Eu]);
            return Nl(Uu), [ju, su]
          })(Zu, qu),
          hu = uu => {
            uu && lu(null), Yu(uu)
          };
        (0, Qu.useEffect)((() => {
          if (!Xu) return;
          const uu = window.setTimeout((() => {
            lu(null)
          }), yX.tb);
          return () => {
            window.clearTimeout(uu)
          }
        }), [Xu]);
        const Du = !su.swapSticks && 0 === Object.keys(su.bindings).length;
        return (0, Su.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Su.jsx)("div", {
            className: "SliderText",
            children: ju("controller:settingsRemap")
          }), (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ju("controller:settingsRemapHint")
          }), (0, Su.jsx)(VX.R, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Du,
            onClick: () => {
              hu(null), lu(null), (0, Cu.B)()
            },
            children: ju("controller:settingsResetAll")
          }), Eu, yX.mb.map(((uu, Eu) => (0, Su.jsx)(bl.b, {
            title: ju(uu.titleKey),
            defaultOpen: 0 === Eu,
            children: uu.rows.map((uu => (0, Su.jsx)(Ol, {
              row: uu,
              capturing: "action" === uu.kind && uu.action === fu,
              onCapture: hu,
              holdFillRef: Zu,
              onRebind: qu,
              swapped: "action" === uu.kind && (null === Xu || void 0 === Xu ? void 0 : Xu.action) === uu.action ? Xu.swapped : Yl
            }, "action" === uu.kind ? uu.action : uu.labelKey)))
          }, uu.titleKey)))]
        })
      },
      Dl = uu => {
        let {
          deadzone: Eu,
          dotRef: ju,
          labelKey: su
        } = uu;
        const {
          t: Zu
        } = (0, Uu.A)();
        return (0, Su.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Su.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Su.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Eu + "%",
                height: 100 * Eu + "%"
              }
            }), (0, Su.jsx)("div", {
              ref: ju,
              className: "ControllerTesterDot"
            })]
          }), (0, Su.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Zu(su)
          })]
        })
      },
      gl = (uu, Eu, ju, su) => {
        var Uu;
        uu && (uu.style.left = 50 + 50 * Math.max(-1, Math.min(1, Eu.x)) + "%", uu.style.top = 50 + 50 * Math.max(-1, Math.min(1, Eu.y)) + "%", null === (Uu = uu.parentElement) || void 0 === Uu || Uu.classList.toggle("Active", su || Math.hypot(Eu.x, Eu.y) > ju))
      },
      Ml = uu => {
        const Eu = {
            deadzone: uu.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ju = {
            deadzone: uu.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return uu.swapSticks ? {
          left: ju,
          right: Eu
        } : {
          left: Eu,
          right: ju
        }
      },
      el = () => {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (() => {
          const [uu, Eu] = (0, Qu.useState)((() => Xu.e.getActivePad()));
          return (0, gU.f)(Xu.c, (() => {
            Eu(Xu.e.getActivePad())
          })), uu
        })(), ju = Ml((0, cu.n)()), su = (0, Qu.useRef)(null), Zu = (0, Qu.useRef)(null), lu = (0, Qu.useRef)([]), qu = (0, Qu.useRef)(null), fu = (0, Qu.useRef)(null), [Nu, Yu] = (uu => {
          const [Eu, ju] = (0, Qu.useState)(!1), su = (0, Qu.useMemo)((() => Eu ? () => {
            const Eu = (0, Cu.i)("menuBack"),
              su = new yX.f;
            return {
              onFrame: (ju, Uu) => {
                var Zu;
                const Xu = su.update({
                  pressed: ju.wasPressed(Eu),
                  dl: ju.isHeld(Eu)
                }, ju.frame.timestampMs);
                null === (Zu = uu.current) || void 0 === Zu || Zu.style.setProperty("width", 100 * Xu + "%"), Xu >= 1 && (bu.d.consumeButton(Eu), Uu())
              },
              onEnd: () => {
                ju(!1)
              }
            }
          } : null), [Eu, uu]);
          return Nl(su), [Eu, ju]
        })(Zu);
        (0, Qu.useEffect)((() => {
          const uu = uu => {
            for (const ju of Ou.bb) {
              const Eu = (0, Ou.k)(ju),
                su = lu.current[Eu];
              if (!su) continue;
              const Uu = uu.values[Eu];
              su.classList.toggle("Pressed", Uu >= Ou.z), (0, Ou.P)(Eu) && su.style.setProperty("--trigger-fill", `${Math.round(100*Uu)}%`)
            }
            const Eu = Ml((0, cu.f)());
            gl(qu.current, uu.leftStick, Eu.left.deadzone, uu.values[(0, Ou.k)("LS")] >= Ou.z), gl(fu.current, uu.rightStick, Eu.right.deadzone, uu.values[(0, Ou.k)("RS")] >= Ou.z)
          };
          return Eu || uu((0, Ou.x)()), Xu.e.onFrame(uu)
        }), [Eu]), (0, Qu.useEffect)((() => {
          Eu || Yu(!1)
        }), [Eu, Yu]), (0, Qu.useEffect)((() => {
          var uu;
          Nu && (null === (uu = su.current) || void 0 === uu || uu.scrollIntoView({
            block: "nearest"
          }))
        }), [Nu]);
        const hu = yX.ib.find((uu => uu.value === (null === Eu || void 0 === Eu ? void 0 : Eu.family)));
        return (0, Su.jsxs)("div", {
          ref: su,
          className: Wu()("SettingBox ControllerTester", {
            Testing: Nu
          }),
          children: [(0, Su.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Su.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Eu && (0, Su.jsx)("div", {
                children: uu("controller:settingsTesterFamily", {
                  family: hu ? uu(hu.labelKey) : Eu.family
                })
              }), Eu && (0, Su.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Eu.id
              }), !Eu && (0, Su.jsx)("div", {
                children: uu("controller:settingsTesterNoPad")
              })]
            }), (Eu || Nu) && (0, Su.jsx)(VX.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Yu(!Nu)
              },
              children: uu(Nu ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Eu && !Nu && (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsTesterHint")
          }), Nu && (0, Su.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Su.jsx)(AX.d, {
              text: uu("controller:settingsTesterTesting", {
                button: AX.e
              }),
              glyph: (0, Cu.i)("menuBack")
            }), (0, Su.jsx)("div", {
              ref: Zu,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Su.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Su.jsx)(Dl, {
              deadzone: ju.left.deadzone,
              dotRef: qu,
              labelKey: ju.left.labelKey
            }), (0, Su.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Ou.bb.map((uu => {
                const ju = (0, Ou.k)(uu);
                return (0, Su.jsx)("div", {
                  ref: uu => {
                    lu.current[ju] = uu
                  },
                  className: (0, Ou.P)(ju) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Su.jsx)(JU, {
                    glyph: uu,
                    family: null === Eu || void 0 === Eu ? void 0 : Eu.family
                  })
                }, uu)
              }))
            }), (0, Su.jsx)(Dl, {
              deadzone: ju.right.deadzone,
              dotRef: fu,
              labelKey: ju.right.labelKey
            })]
          })]
        })
      },
      Gl = (0, Qu.memo)((function() {
        const {
          t: uu
        } = (0, Uu.A)(), Eu = (0, cu.n)(), [ju, su] = (0, Qu.useState)(!1);
        return (0, Qu.useEffect)((() => {
          if (!ju) return;
          const uu = window.setTimeout((() => {
            su(!1)
          }), yX.tb);
          return () => {
            window.clearTimeout(uu)
          }
        }), [ju]), (0, Su.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Su.jsx)(zX, {
            text: uu("controller:settingsLook")
          }), (0, Su.jsx)(ul, {
            settingKey: "lookSensitivityX",
            label: uu("controller:settingsLookSensitivityX"),
            range: yX.nb,
            format: yX.O
          }), (0, Su.jsx)(ul, {
            settingKey: "lookSensitivityY",
            label: uu("controller:settingsLookSensitivityY"),
            range: yX.nb,
            format: yX.O
          }), (0, Su.jsx)(ul, {
            settingKey: "aimLookSensitivity",
            label: uu("controller:settingsAimLookSensitivity"),
            range: yX.k,
            format: yX.O
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsLookCurve"),
            hint: uu("controller:settingsLookCurveHint"),
            options: yX.eb,
            value: Eu.lookCurve,
            onChange: uu => {
              (0, cu.j)({
                lookCurve: uu
              })
            }
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsInvertLookX"),
            checked: Eu.invertLookX,
            onClick: uu => {
              (0, cu.j)({
                invertLookX: uu
              })
            }
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsInvertLookY"),
            checked: Eu.invertLookY,
            onClick: uu => {
              (0, cu.j)({
                invertLookY: uu
              })
            }
          }), (0, Su.jsx)(ul, {
            settingKey: "lookDeadzone",
            label: uu("controller:settingsLookDeadzone"),
            range: yX.C,
            format: yX.I
          }), (0, Su.jsx)(ql, {}), (0, Su.jsx)(zX, {
            text: uu("controller:settingsMovement")
          }), (0, Su.jsx)(ul, {
            settingKey: "moveDeadzone",
            label: uu("controller:settingsMoveDeadzone"),
            range: yX.C,
            format: yX.I
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsAutoSprint"),
            checked: Eu.autoSprint,
            onClick: uu => {
              (0, cu.j)({
                autoSprint: uu
              })
            },
            circleInfoText: uu("controller:settingsAutoSprintInfo")
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsSneak"),
            options: yX.rb,
            value: Eu.sneakMode,
            onChange: uu => {
              (0, cu.j)({
                sneakMode: uu
              })
            }
          }), (0, Su.jsx)(zX, {
            text: uu("controller:settingsButtons")
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsPromptFamily"),
            options: yX.ib,
            value: Eu.promptFamily,
            onChange: uu => {
              (0, cu.j)({
                promptFamily: uu
              })
            }
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsHideButtonHints"),
            checked: Eu.hideButtonHints,
            onClick: uu => {
              (0, cu.j)({
                hideButtonHints: uu
              })
            }
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsVibration"),
            checked: Eu.vibration,
            onClick: uu => {
              (0, cu.j)({
                vibration: uu
              }), uu && lU("preview")
            }
          }), (0, Su.jsx)(ul, {
            settingKey: "cursorSpeed",
            label: uu("controller:settingsCursorSpeed"),
            range: yX.z,
            format: yX.O
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsCursorMagnetism"),
            checked: Eu.cursorMagnetism,
            onClick: uu => {
              (0, cu.j)({
                cursorMagnetism: uu
              })
            }
          }), (0, Su.jsx)(HX.b, {
            label: uu("controller:settingsMenuBackToCategories"),
            checked: Eu.menuBackToCategories,
            onClick: uu => {
              (0, cu.j)({
                menuBackToCategories: uu
              })
            }
          }), (0, Su.jsx)(hl, {
            layoutSetting: (0, Su.jsxs)(Su.Fragment, {
              children: [Cu.e.map((ju => (0, Su.jsx)(HX.b, {
                label: uu(yX.Z[ju]),
                checked: (0, Cu.x)(ju, Eu),
                onClick: uu => {
                  su(!(0, Cu.E)(ju, uu))
                }
              }, ju))), ju && (0, Su.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: uu("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Su.jsx)(Cl, {}), (0, Su.jsx)(zX, {
            text: uu("controller:settingsAlternatives")
          }), (0, Su.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsAlternativesHint")
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsMenuNavigation"),
            hint: uu("controller:settingsMenuNavigationHint"),
            options: yX.hb,
            value: Eu.menuNavigation,
            onChange: uu => {
              (0, cu.j)({
                menuNavigation: uu
              })
            }
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsInventoryNavigation"),
            hint: uu("controller:settingsInventoryNavigationHint"),
            options: yX.Y,
            value: Eu.inventoryNavigation,
            onChange: uu => {
              (0, cu.j)({
                inventoryNavigation: uu
              })
            }
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsQuickChat"),
            hint: uu("controller:settingsQuickChatHint"),
            options: yX.lb,
            value: Eu.quickChat,
            onChange: uu => {
              (0, cu.j)({
                quickChat: uu
              })
            }
          }), (0, Su.jsx)(RX, {
            label: uu("controller:settingsLeaderboardButton"),
            hint: uu("controller:settingsLeaderboardButtonHint"),
            options: yX.ab,
            value: Eu.leaderboardButton,
            onChange: uu => {
              (0, cu.j)({
                leaderboardButton: uu
              })
            }
          }), (0, Su.jsx)(zX, {
            text: uu("controller:settingsTester")
          }), (0, Su.jsx)(el, {})]
        })
      }));
    (0, Uu.d)(su);
    for (const al of (0, Zu.n)()) al.connected ? Xu.e.handleConnectionEvent(al) : Xu.e.handleDisconnectionEvent(al);
    const pl = () => null !== Xu.e.getActivePad(),
      wl = () => Uj.getState(),
      Jl = () => Uj.isSteppingSlots(),
      dl = (uu, Eu) => {
        const ju = EU.getFocused();
        EU.isActive() && ju && uu.contains(ju) && EU.setFocus(Eu, {
          scroll: !1
        })
      }
  },
  8391: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      c: () => fu
    });
    var su = ju(1480),
      Uu = ju(1473);
    const Zu = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Xu = "28de",
      lu = new Set(["1205"]),
      qu = (uu, Eu) => {
        const ju = (0, su.b)(uu);
        if ((null === ju || void 0 === ju ? void 0 : ju.vendor) === Xu) return lu.has(ju.product) ? "steamdeck" : "xbox";
        if (ju && Zu[ju.vendor]) return Zu[ju.vendor];
        if ((0, Uu.b)(uu)) return "nintendo";
        const qu = `${uu} ${null!==Eu&&void 0!==Eu?Eu:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(qu) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(qu) ? "nintendo" : /steam deck/.test(qu) ? "steamdeck" : "xbox"
      },
      fu = uu => {
        var Eu;
        return (null === (Eu = (0, su.b)(uu)) || void 0 === Eu ? void 0 : Eu.vendor) === Xu
      }
  },
  8437: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      e: () => lu
    });
    var su = ju(8383);
    const Uu = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Zu = new Set(["capture", "gameplay"]),
      Xu = ["Up", "Down", "Left", "Right"],
      lu = uu => Xu.includes(uu),
      qu = .25;
    const fu = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.dl = new Array(su._).fill(!1), this.previousHeld = new Array(su._).fill(!1), this.consumedButtons = new Array(su._).fill(!1), this.suppressedReleases = new Array(su._).fill(!1), this.wakeOwned = new Array(su._).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, su.x)()
      }
      register(uu) {
        return this.consumers.has(uu.name) && console.warn(`Controller consumer "${uu.name}" registered twice; the newer one replaces it.`), this.consumers.set(uu.name, uu), () => {
          var Eu;
          this.consumers.get(uu.name) === uu && (this.activeName === uu.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Eu = this.peek) || void 0 === Eu ? void 0 : Eu.over) === uu.name && (this.peek = null), this.consumers.delete(uu.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(uu) {
        return this.dl[(0, su.k)(uu)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.dl = new Array(su._).fill(!1), this.previousHeld = new Array(su._).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, su.x)()
      }
      dispatch(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = uu, this.previousHeld = this.dl, this.dl = (0, su.s)(uu.values, this.previousHeld);
        for (let Zu = 0; Zu < su._; Zu++) this.suppressedReleases[Zu] = !this.dl[Zu] && this.consumedButtons[Zu], this.dl[Zu] || (this.consumedButtons[Zu] = !1), this.wakeOwned[Zu] && (this.dl[Zu] ? (this.consumedButtons[Zu] = !0, this.wakeOwned[Zu] = !1) : uu.values[Zu] < su.X && (this.wakeOwned[Zu] = !1));
        Math.hypot(uu.leftStick.x, uu.leftStick.y) < qu && (this.leftStickConsumed = !1), Math.hypot(uu.rightStick.x, uu.rightStick.y) < qu && (this.rightStickConsumed = !1);
        const Uu = this.pickActive();
        if ((null === Uu || void 0 === Uu ? void 0 : Uu.name) !== this.activeName) {
          var Xu, lu, fu, Cu, bu, cu;
          const uu = this.activeName,
            Eu = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ju = null !== (Xu = null === Uu || void 0 === Uu || null === (lu = Uu.peek) || void 0 === lu ? void 0 : lu.call(Uu)) && void 0 !== Xu ? Xu : null,
            Zu = null === uu && !!ju && !(null === (fu = this.consumers.get(ju.over)) || void 0 === fu || !fu.onPeekFrame),
            qu = ju && (ju.over === uu || Zu) ? ju : null,
            Nu = null !== this.peek && this.peek.over === (null === Uu || void 0 === Uu ? void 0 : Uu.name) ? this.peek : null;
          this.deactivateCurrent(null !== qu, null !== Nu), this.activeName = null !== (Cu = null === Uu || void 0 === Uu ? void 0 : Uu.name) && void 0 !== Cu ? Cu : null, null === uu || this.handOffPending || this.consumeAllHeld();
          const Ou = null === (bu = null !== qu && void 0 !== qu ? qu : Nu) || void 0 === bu ? void 0 : bu.stick;
          "left" === Ou && Eu.left ? this.leftStickConsumed = !1 : "right" === Ou && Eu.right && (this.rightStickConsumed = !1), this.peek = qu, Uu || null === uu ? Uu && (null === (cu = this.idleResume) || void 0 === cu ? void 0 : cu.name) === Uu.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: uu,
            left: Eu.left && this.leftStickConsumed,
            right: Eu.right && this.rightStickConsumed
          }, Uu && (this.idleResume = null);
          for (let Uu = 0; Uu < su._; Uu++) this.previousHeld[Uu] && !this.dl[Uu] && (this.suppressedReleases[Uu] = !0)
        }
        var Nu, Ou;
        (this.handOffPending = !1, Uu) && (ju && !Zu.has(Uu.name) && this.consumeWakePress(Uu), Uu.onFrame(this.buildInput(uu, Eu, ju)), this.peek && (null === (Nu = this.consumers.get(this.peek.over)) || void 0 === Nu || null === (Ou = Nu.onPeekFrame) || void 0 === Ou || Ou.call(Nu, this.buildInput(uu, Eu, !1, this.peek.stick))))
      }
      consumeWakePress(uu) {
        for (let Uu = 0; Uu < su._; Uu++) {
          var Eu, ju;
          const Zu = su.bb[Uu];
          (null !== (Eu = null === (ju = uu.wakePressActs) || void 0 === ju ? void 0 : ju.call(uu, Zu)) && void 0 !== Eu ? Eu : Xu.includes(Zu)) || (this.dl[Uu] ? this.consumedButtons[Uu] = !0 : this.lastFrame.values[Uu] >= su.V && (this.wakeOwned[Uu] = !0))
        }
      }
      pickActive() {
        for (const uu of Uu) {
          const Eu = this.consumers.get(uu);
          if (Eu && Eu.isActive()) return Eu
        }
        return null
      }
      deactivateCurrent() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ju, su, Uu, Zu;
        this.activeName && (null === (ju = this.consumers.get(this.activeName)) || void 0 === ju || null === (su = ju.onDeactivate) || void 0 === su || su.call(ju, uu));
        this.peek && !Eu && (null === (Uu = this.consumers.get(this.peek.over)) || void 0 === Uu || null === (Zu = Uu.onDeactivate) || void 0 === Zu || Zu.call(Uu, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Uu = 0; Uu < su._; Uu++) this.dl[Uu] && (this.consumedButtons[Uu] = !0);
        const {
          leftStick: Eu,
          rightStick: ju
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== uu && (this.leftStickConsumed || Math.hypot(Eu.x, Eu.y) >= qu), this.rightStickConsumed = "right" !== uu && (this.rightStickConsumed || Math.hypot(ju.x, ju.y) >= qu)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(uu) {
        const Eu = (0, su.k)(uu);
        this.dl[Eu] && (this.consumedButtons[Eu] = !0)
      }
      buildInput(uu, Eu, ju, Uu) {
        const Zu = this.dl,
          Xu = this.previousHeld,
          lu = Uu ? new Array(su._).fill(!0) : [...this.consumedButtons],
          qu = Uu ? lu : [...this.suppressedReleases],
          fu = !this.leftStickConsumed && (!Uu || "left" === Uu),
          Cu = !this.rightStickConsumed && (!Uu || "right" === Uu);
        return {
          frame: uu,
          dtMs: Eu,
          isHeld: uu => {
            const Eu = (0, su.k)(uu);
            return Zu[Eu] && !lu[Eu]
          },
          wasPressed: uu => {
            const Eu = (0, su.k)(uu);
            return Zu[Eu] && !Xu[Eu] && !lu[Eu]
          },
          wasReleased: uu => {
            const Eu = (0, su.k)(uu);
            return !Zu[Eu] && Xu[Eu] && !qu[Eu]
          },
          value: Eu => {
            const ju = (0, su.k)(Eu);
            return lu[ju] ? 0 : uu.values[ju]
          },
          leftStick: fu ? uu.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Cu ? uu.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ju
        }
      }
    }
  },
  8411: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu.e,
      e: () => bu.i,
      f: () => Pu,
      i: () => ou,
      j: () => ku,
      n: () => mu
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(1499),
      Xu = ju(31),
      lu = ju(8419),
      qu = ju(8383),
      fu = ju(8405),
      Cu = ju(8378),
      bu = ju(2065),
      cu = ju(8426);
    const Nu = {
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
      Ou = "controllerSettings",
      Yu = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      hu = ["auto", ...lu.d],
      Du = (uu, Eu) => "string" === typeof Eu && uu.includes(Eu),
      gu = uu => Eu => "number" === typeof Eu && Number.isFinite(Eu) ? (0, cu.x)(Eu, uu) : void 0,
      Mu = uu => "boolean" === typeof uu ? uu : void 0,
      eu = uu => Eu => Du(uu, Eu) ? Eu : void 0,
      Gu = {
        lookSensitivityX: gu(cu.nb),
        lookSensitivityY: gu(cu.nb),
        aimLookSensitivity: gu(cu.k),
        invertLookX: Mu,
        invertLookY: Mu,
        lookCurve: eu(qu.R),
        lookDeadzone: gu(cu.C),
        moveDeadzone: gu(cu.C),
        swapSticks: Mu,
        autoSprint: Mu,
        sneakMode: eu(["toggle", "hold"]),
        tapHoldTime: eu(["short", "medium", "long"]),
        attackMode: eu(["hold", "toggle"]),
        promptFamily: eu(hu),
        hideButtonHints: Mu,
        vibration: Mu,
        cursorSpeed: gu(cu.z),
        cursorMagnetism: Mu,
        buttonRepeat: eu(qu.o),
        largePointer: Mu,
        menuBackToCategories: Mu,
        swapConfirmBack: Mu,
        menuNavigation: eu(["hybrid", "focus", "cursor"]),
        inventoryNavigation: eu(["hybrid", "slot", "cursor"]),
        quickChat: eu(["wheel", "off"]),
        leaderboardButton: eu(["shop", "leaderboard"]),
        gyroAiming: Mu,
        gyroSensitivity: gu(cu.U),
        gyroActivation: eu(["always", "aiming", "button"]),
        gyroButton: eu(qu.bb),
        emoteButton: eu(["tapHold", "wheel"])
      },
      pu = [{
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
      wu = uu => {
        const Eu = {};
        if ("object" !== typeof uu || null === uu) return Eu;
        for (const [ju, su] of Object.entries(uu)) Object.prototype.hasOwnProperty.call(fu.f, ju) && Du(qu.bb, su) && (Eu[ju] = su);
        return Eu
      },
      Ju = uu => {
        const Eu = {};
        for (const ju of Object.keys(Nu))("bindings" === ju ? Object.keys(uu.bindings).length > 0 : uu[ju] !== Nu[ju]) && (Eu[ju] = uu[ju]);
        0 !== Object.keys(Eu).length ? Xu.k.setItem(Ou, Eu) : Xu.k.removeItem(Ou)
      };
    let du = (() => {
        const uu = Xu.k.getItem(Ou),
          Eu = (uu => {
            const Eu = "object" === typeof uu && null !== uu ? uu : {},
              ju = {
                ...Nu,
                bindings: wu(Eu.bindings)
              };
            for (const Uu of Object.keys(Gu)) {
              const uu = Gu[Uu](Eu[Uu]);
              void 0 !== uu && (ju[Uu] = uu)
            }
            const su = Object.keys(Eu).filter((uu => !!Object.prototype.hasOwnProperty.call(Nu, uu) && ("bindings" === uu ? "object" !== typeof Eu.bindings || null === Eu.bindings || Object.keys(Eu.bindings).length !== Object.keys(ju.bindings).length : ju[uu] !== Eu[uu])));
            return su.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${su.join(", ")}`), ju
          })(uu);
        return null !== uu && void 0 !== uu && Ju(Eu), Eu
      })(),
      au = {
        ...du,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const uu = {},
            Eu = new URLSearchParams(window.location.search);
          for (const {
              param: ju,
              key: su
            }
            of pu) {
            const Uu = Gu[su](Eu.get(ju));
            void 0 !== Uu && (uu[su] = Uu)
          }
          return uu
        })()
      };
    const Pu = () => au,
      ou = () => {
        var uu, Eu;
        const ju = Pu().promptFamily;
        return "auto" !== ju ? ju : null !== (uu = null === (Eu = Cu.e.getActivePad()) || void 0 === Eu ? void 0 : Eu.family) && void 0 !== uu ? uu : "xbox"
      },
      ku = uu => {
        const Eu = au;
        du = {
          ...du,
          ...uu
        }, Ju(du), au = {
          ...au,
          ...uu
        }, (uu => {
          Uu.h.TY(bu.i, au), Yu.some((Eu => uu[Eu] !== au[Eu])) && Uu.h.TY(bu.e, au)
        })(Eu)
      },
      mu = () => {
        const [uu, Eu] = (0, su.useState)(au);
        return (0, Zu.f)(bu.i, Eu), uu
      }
  },
  8872: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    const su = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Uu = uu => su.has(uu)
  },
  8378: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Yu.c,
      e: () => Mu
    });
    var su = ju(8383),
      Uu = ju(8391);
    const Zu = .1,
      Xu = .3;
    class lu {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(uu, Eu) {
        const ju = null === this.lastMs ? 0 : Math.min(Math.max(0, Eu - this.lastMs), 100);
        this.lastMs = Eu;
        const su = Math.hypot(uu.x, uu.y);
        if (su >= Xu) return this.anchor = null, void(this.returning = !0);
        su >= Zu || (this.returning = !1);
        const Uu = this.anchor;
        if (!Uu || Math.hypot(uu.x - Uu.x, uu.y - Uu.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: uu.x,
          y: uu.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ju, this.steadyMs < 1e3) return;
        const lu = Math.max(su, Math.hypot(Uu.x, Uu.y));
        lu < Zu ? this.deadzone = 0 : this.returning && (this.deadzone = lu + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(uu) {
        return Math.hypot(uu.x, uu.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : uu
      }
    }
    const qu = (uu, Eu) => {
        var ju, su;
        return null !== (ju = uu && (null === (su = Object.getOwnPropertyDescriptor(uu, Eu)) || void 0 === su ? void 0 : su.get)) && void 0 !== ju ? ju : null
      },
      fu = uu => {
        const Eu = uu.vendorName;
        return "string" === typeof Eu ? Eu : void 0
      },
      Cu = ((uu, Eu) => {
        const ju = qu(uu, "index"),
          su = qu(uu, "id"),
          Uu = qu(uu, "connected"),
          Zu = qu(uu, "mapping"),
          Xu = qu(uu, "buttons"),
          lu = qu(uu, "axes"),
          Cu = qu(Eu, "pressed"),
          bu = qu(Eu, "value");
        return ju && su && Uu && Zu && Xu && lu && Cu && bu ? uu => {
          const Eu = Xu.call(uu),
            qu = lu.call(uu),
            cu = {
              index: Number(ju.call(uu)),
              id: String(su.call(uu)),
              connected: !0 === Uu.call(uu),
              mapping: String(Zu.call(uu)),
              buttons: [],
              axes: [],
              vendorName: fu(uu)
            };
          for (let ju = 0; ju < Eu.length; ju++) cu.buttons.push({
            pressed: !0 === Cu.call(Eu[ju]),
            value: Number(bu.call(Eu[ju]))
          });
          for (let ju = 0; ju < qu.length; ju++) cu.axes.push(Number(qu[ju]));
          return cu
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      bu = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var cu = ju(1466),
      Nu = ju(1473);
    const Ou = uu => ({
      pressed: uu,
      value: uu ? 1 : 0
    });
    var Yu = ju(2065);
    const hu = Xu,
      Du = uu => {
        const Eu = new Array(su._).fill(0);
        for (let ju = 0; ju < su._ && ju < uu.buttons.length; ju++) {
          const Uu = uu.buttons[ju];
          Eu[ju] = Uu.pressed && !(0, su.P)(ju) ? Math.max(Uu.value, su.z) : Uu.value
        }
        return Eu
      },
      gu = (uu, Eu) => {
        var ju, su;
        return {
          x: null !== (ju = uu.axes[Eu]) && void 0 !== ju ? ju : 0,
          y: null !== (su = uu.axes[Eu + 1]) && void 0 !== su ? su : 0
        }
      };
    const Mu = new class {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cu;
        this.readGamepads = uu, this.requireTrustedPads = Eu, this.nativeReader = ju, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = uu => {
          uu.isTrusted && this.trustedIndices.add(uu.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = uu => {
          this.trustedIndices.delete(uu.gamepad.index)
        }, this.Tb = uu => {
          if (this.rafId = 0, !this.running) return;
          const Eu = 0 === this.lastTimestampMs ? 16 : Math.min(100, uu - this.lastTimestampMs);
          this.lastTimestampMs = uu;
          try {
            this.poll(uu, Eu)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Tb))
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
      onFrame(uu) {
        return this.frameListeners.add(uu), () => {
          this.frameListeners.delete(uu)
        }
      }
      onActivePadChanged(uu) {
        return this.connectionListeners.add(uu), () => {
          this.connectionListeners.delete(uu)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(uu) {
        return this.connectedListeners.add(uu), () => {
          this.connectedListeners.delete(uu)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const uu = this.readPads()[this.activeInfo.index],
          Eu = uu ? this.readPad(uu) : null;
        return Eu && Eu.id === this.activeInfo.id ? uu : null
      }
      poll(uu, Eu) {
        var ju, Uu;
        const Zu = this.readPads();
        let Xu = null,
          qu = !1;
        const fu = [],
          Cu = Math.max(Zu.length, this.slots.length);
        for (let Mu = 0; Mu < Cu; Mu++) {
          var bu;
          const Eu = Mu < Zu.length ? Zu[Mu] : null,
            ju = Eu ? this.readPad(Eu) : null;
          if (!ju || !ju.connected || !this.isUsable(ju)) {
            this.slots[Mu] = null;
            continue
          }
          let Uu = this.slots[Mu];
          Uu && Uu.id === ju.id || (Uu = {
            id: ju.id,
            dl: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new lu,
            rightRest: new lu
          }, this.slots[Mu] = Uu);
          const Cu = gu(ju, 0),
            cu = gu(ju, 2);
          !Uu.leftSettled && Math.hypot(Cu.x, Cu.y) < hu && (Uu.leftSettled = !0), !Uu.rightSettled && Math.hypot(cu.x, cu.y) < hu && (Uu.rightSettled = !0), Uu.leftRest.observe(Cu, uu), Uu.rightRest.observe(cu, uu);
          const Nu = Du(ju),
            Ou = (0, su.s)(Nu, Uu.dl),
            Yu = Uu.dl,
            eu = Ou.map(((uu, Eu) => uu && !Yu[Eu]));
          Uu.dl = Ou;
          const Gu = {
            pad: ju,
            slot: Uu,
            values: Nu
          };
          Mu === (null === (bu = this.activeInfo) || void 0 === bu ? void 0 : bu.index) && ju.id === this.activeInfo.id ? (Xu = Gu, qu = eu.includes(!0)) : eu.includes(!0) && fu.push({
            polled: Gu,
            rose: eu
          })
        }
        const cu = this.slots.some((uu => null !== uu));
        if (cu !== this.anyPadConnected) {
          this.anyPadConnected = cu;
          for (const uu of this.connectedListeners) uu()
        }
        const Nu = null !== (ju = null === (Uu = Xu) || void 0 === Uu ? void 0 : Uu.slot.dl) && void 0 !== ju ? ju : [],
          Ou = qu ? void 0 : fu.find((uu => {
            let {
              rose: Eu
            } = uu;
            return Eu.some(((uu, Eu) => uu && !Nu[Eu]))
          }));
        if (Ou ? (Xu = Ou.polled, this.setActive(Ou.polled.pad)) : this.activeInfo && !Xu && this.setActive(null), !Xu || !this.activeInfo) return;
        const Yu = ((uu, Eu) => {
          let {
            pad: ju,
            slot: Uu,
            values: Zu
          } = uu;
          const Xu = (0, su.x)(Eu);
          return Xu.values = Zu, Uu.leftSettled && (Xu.leftStick = Uu.leftRest.apply(gu(ju, 0))), Uu.rightSettled && (Xu.rightStick = Uu.rightRest.apply(gu(ju, 2))), Xu
        })(Xu, uu);
        for (const su of this.frameListeners) su(Yu, Eu, this.activeInfo)
      }
      readPad(uu) {
        const Eu = this.readSnapshot(uu);
        return Eu && (0, Nu.e)(Eu) ? (uu => {
          const Eu = Eu => {
              var ju;
              return null !== (ju = uu.buttons[Eu]) && void 0 !== ju ? ju : Ou(!1)
            },
            ju = Eu => {
              var ju;
              return null !== (ju = uu.axes[Eu]) && void 0 !== ju ? ju : 0
            },
            su = uu.axes.length > 9,
            Uu = su ? (uu => {
              const Eu = 0 !== uu;
              return {
                up: Eu && (uu >= -1 && uu < -.7 || uu >= .95 && uu <= 1),
                right: Eu && uu >= -.75 && uu < -.1,
                down: Eu && uu >= -.2 && uu < .45,
                left: Eu && uu >= .4 && uu <= 1
              }
            })(ju(9)) : {
              up: ju(5) < -.5,
              down: ju(5) > .5,
              left: ju(4) < -.5,
              right: ju(4) > .5
            };
          return {
            ...uu,
            mapping: "standard",
            buttons: [Eu(1), Eu(2), Eu(0), Eu(3), Eu(4), Eu(5), Eu(6), Eu(7), Eu(8), Eu(9), Eu(10), Eu(11), Ou(Uu.up), Ou(Uu.down), Ou(Uu.left), Ou(Uu.right), Eu(12)],
            axes: [ju(0), ju(1), ju(2), ju(su ? 5 : 3)]
          }
        })(Eu) : Eu
      }
      readSnapshot(uu) {
        if (this.nativeReader) try {
          return this.nativeReader(uu)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (uu => {
          const Eu = uu;
          return {
            index: Eu.index,
            id: Eu.id,
            connected: Eu.connected,
            mapping: Eu.mapping,
            buttons: Array.from(Eu.buttons, (uu => ({
              pressed: uu.pressed,
              value: uu.value
            }))),
            axes: Array.from(Eu.axes),
            vendorName: fu(uu)
          }
        })(uu)
      }
      isUsable(uu) {
        return !(0, cu.g)(uu.id) && ("standard" !== uu.mapping ? (this.warnedNonStandardIds.has(uu.id) || (this.warnedNonStandardIds.add(uu.id), console.warn(`Controller "${uu.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(uu.index))
      }
      setActive(uu) {
        this.activeInfo = uu ? {
          index: uu.index,
          id: uu.id,
          family: (0, Uu.b)(uu.id, uu.vendorName)
        } : null;
        for (const Eu of this.connectionListeners) Eu(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (uu) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", uu)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Tb))
      }
    }((() => bu ? bu.call(navigator) : []), !0);
    Mu.listenForConnections()
  },
  8961: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      e: () => Xu,
      f: () => lu,
      g: () => Uu
    });
    var su = ju(8968);
    const Uu = uu => {
        const Eu = [];
        uu.holdingGun && Eu.push({
          kind: "reload"
        }), uu.touchscreenActionButton && Eu.push({
          kind: "touchButton",
          label: uu.touchscreenActionButton
        });
        for (const Zu of null !== (ju = null === (Uu = uu.customButtons) || void 0 === Uu ? void 0 : Uu.filter(su.e)) && void 0 !== ju ? ju : []) {
          var ju, Uu;
          Eu.push({
            kind: "customButton",
            id: Zu.id,
            icon: Zu.icon,
            description: Zu.description
          })
        }
        return Eu
      },
      Zu = uu => uu.length >= 2,
      Xu = uu => "specialAction" !== uu.kind,
      lu = (uu, Eu) => {
        if (null === uu || null === Eu) return uu === Eu;
        if (uu.kind !== Eu.kind) return !1;
        switch (uu.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return uu.action === Eu.action;
          case "customButton":
            return uu.id === Eu.id && uu.icon === Eu.icon;
          case "touchButton":
            return uu.label === Eu.label
        }
      }
  },
  8881: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    const su = {
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
  8956: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      g: () => Nu,
      i: () => bu,
      k: () => Ou
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(1499),
      Xu = ju(8961),
      lu = ju(8973);
    let qu = null;
    const fu = () => qu,
      Cu = uu => {
        (0, Xu.f)(qu, uu) || (qu = uu, Uu.h.TY(lu.g, qu))
      },
      bu = () => {
        const [uu, Eu] = (0, su.useState)(fu);
        return (0, Zu.f)(lu.g, Eu), uu
      };
    let cu = !1;
    const Nu = uu => {
        uu !== cu && (cu = uu, Uu.h.TY(lu.i, uu))
      },
      Ou = () => {
        const [uu, Eu] = (0, su.useState)(cu);
        return (0, Zu.f)(lu.i, Eu), uu
      }
  },
  8980: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => lu
    });
    var su = ju(24),
      Uu = ju(8973);
    let Zu = !1;
    const Xu = () => Zu,
      lu = uu => {
        uu !== Zu && (Zu = uu, su.h.TY(Uu.m, Zu))
      }
  },
  8977: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      g: () => qu
    });
    var su = ju(24),
      Uu = ju(8973);
    let Zu = null,
      Xu = 0;
    const lu = () => Zu,
      qu = uu => {
        null === uu && null === Zu || (Zu = null === uu ? null : {
          id: ++Xu,
          holdMs: uu
        }, su.h.TY(Uu.q, Zu))
      }
  },
  8973: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      g: () => su,
      i: () => Uu,
      m: () => lu,
      q: () => qu,
      r: () => fu,
      v: () => Xu
    });
    const su = "controllerActionHintChanged",
      Uu = "controllerActionWheelHintChanged",
      Zu = "controllerOpenChat",
      Xu = "controllerSneakToggledChanged",
      lu = "controllerAttackLatchedChanged",
      qu = "controllerDropStackHoldChanged",
      fu = "controllerPickBlockHintChanged"
  },
  8988: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => lu
    });
    var su = ju(24),
      Uu = ju(8973);
    let Zu = !1;
    const Xu = () => Zu,
      lu = uu => {
        uu !== Zu && (Zu = uu, su.h.TY(Uu.r, Zu))
      }
  },
  9034: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      g: () => lu
    });
    var su = ju(24),
      Uu = ju(8973);
    let Zu = !1;
    const Xu = () => Zu,
      lu = uu => {
        uu !== Zu && (Zu = uu, su.h.TY(Uu.v, Zu))
      }
  },
  8924: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor() {
        this.downAtMs = null
      }
      update(uu, Eu, ju, su) {
        if (uu) return this.downAtMs = ju, null;
        if (null === this.downAtMs) return null;
        const Uu = ju - this.downAtMs >= su;
        return Eu ? Uu ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Uu ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8452: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => bu,
      f: () => cu,
      j: () => lu,
      l: () => Mu,
      o: () => gu
    });
    var su = ju(31),
      Uu = ju(8419),
      Zu = ju(8383);
    const Xu = (() => {
        try {
          return ju(8455)
        } catch {
          return null
        }
      })(),
      lu = [...Zu.bb, "LeftStick", "RightStick"],
      qu = new Map,
      fu = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Cu = (new Set(Object.values(fu)), {
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
      bu = (uu, Eu) => {
        var ju, su;
        return null !== (ju = null === (su = Cu[fu[uu]]) || void 0 === su ? void 0 : su[Eu]) && void 0 !== ju ? ju : 1
      },
      cu = (uu, Eu) => {
        const ju = `./${fu[uu]}/${Eu}.svg`;
        let su = qu.get(ju);
        return void 0 === su && (su = Xu ? Xu(ju) : "", qu.set(ju, su)), su
      },
      Nu = new Set,
      Ou = [],
      Yu = uu => {
        if (!Nu.has(uu)) {
          Nu.add(uu);
          for (const Eu of lu) {
            const ju = cu(uu, Eu);
            if (ju) {
              const uu = new Image;
              uu.crossOrigin = "anonymous", uu.src = ju, Ou.push(uu)
            }
          }
        }
      },
      hu = "controllerGlyphFamily";
    let Du = null;
    const gu = uu => {
        uu !== Du && (Du = uu, su.k.setItem(hu, uu), Yu(uu))
      },
      Mu = () => {
        const uu = su.k.getItem(hu);
        (0, Uu.e)(uu) && uu !== Du && (Du = uu, Yu(uu))
      }
  },
  9056: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Wu,
      e: () => Su
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(1499),
      Xu = ju(8398),
      lu = ju(8378),
      qu = ju(8437),
      fu = ju(8411);
    const Cu = {
        x: 0,
        y: 0,
        z: 0
      },
      bu = Math.PI / 180,
      cu = uu => Math.hypot(uu.x, uu.y, uu.z),
      Nu = (uu, Eu) => ({
        x: uu.x * Eu,
        y: uu.y * Eu,
        z: uu.z * Eu
      }),
      Ou = (uu, Eu) => ({
        x: uu.x + Eu.x,
        y: uu.y + Eu.y,
        z: uu.z + Eu.z
      }),
      Yu = (uu, Eu) => ({
        x: uu.x - Eu.x,
        y: uu.y - Eu.y,
        z: uu.z - Eu.z
      }),
      hu = uu => {
        const Eu = cu(uu);
        return 0 === Eu ? Cu : Nu(uu, 1 / Eu)
      },
      Du = uu => ({
        min: {
          ...uu
        },
        max: {
          ...uu
        }
      }),
      gu = (uu, Eu) => ({
        min: {
          x: Math.min(uu.min.x, Eu.x),
          y: Math.min(uu.min.y, Eu.y),
          z: Math.min(uu.min.z, Eu.z)
        },
        max: {
          x: Math.max(uu.max.x, Eu.x),
          y: Math.max(uu.max.y, Eu.y),
          z: Math.max(uu.max.z, Eu.z)
        }
      }),
      Mu = (uu, Eu) => uu.max.x - uu.min.x <= Eu && uu.max.y - uu.min.y <= Eu && uu.max.z - uu.min.z <= Eu;
    class eu {
      constructor() {
        this.bias = Cu, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Cu, this.windowSec = 0
      }
      update(uu) {
        const Eu = this.gyroRange ? gu(this.gyroRange, uu.gyro) : Du(uu.gyro),
          ju = uu.accel ? this.accelRange ? gu(this.accelRange, uu.accel) : Du(uu.accel) : null;
        if (!Mu(Eu, 1) || ju && !Mu(ju, .01)) return void this.restartWindow(uu);
        if (this.gyroRange = Eu, this.accelRange = ju, this.sum = Ou(this.sum, Nu(uu.gyro, uu.dtSec)), this.windowSec += uu.dtSec, this.windowSec < 1) return;
        const su = Nu(this.sum, 1 / this.windowSec);
        if (cu(su) > 5) return;
        const Uu = Yu(su, this.bias);
        let Zu = 0;
        !this.calibrated || this.windowSec >= 3 ? Zu = 1 : cu(Uu) <= 1 && (Zu = Math.min(1, uu.dtSec / 1)), this.bias = Ou(this.bias, Nu(Uu, Zu)), this.calibrated = this.calibrated || Zu > 0
      }
      correct(uu) {
        return Yu(uu, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Cu, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Cu, this.windowSec = 0
      }
      restartWindow(uu) {
        this.gyroRange = Du(uu.gyro), this.accelRange = uu.accel ? Du(uu.accel) : null, this.sum = Cu, this.windowSec = 0
      }
    }
    class Gu {
      constructor() {
        this.down = null
      }
      update(uu, Eu, ju) {
        const su = hu(Nu(Eu, -1));
        if (!this.down) return this.down = su, su;
        const Uu = Nu(uu, bu * ju),
          Zu = this.down,
          Xu = {
            x: Zu.x - (Uu.y * Zu.z - Uu.z * Zu.y),
            y: Zu.y - (Uu.z * Zu.x - Uu.x * Zu.z),
            z: Zu.z - (Uu.x * Zu.y - Uu.y * Zu.x)
          },
          lu = 0 === cu(su) ? 0 : Math.min(1, ju / .25);
        var qu, fu;
        return this.down = hu((fu = lu, Ou(qu = Xu, Nu(Yu(su, qu), fu)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class pu {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(uu, Eu, ju) {
        const su = Math.hypot(uu, Eu),
          Uu = Math.max(0, Math.min(1, (su - 2) / 2)),
          Zu = {
            yaw: uu * (1 - Uu),
            pitch: Eu * (1 - Uu),
            dtSec: ju
          };
        for (this.entries.push(Zu), this.windowSec += ju; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Xu = 0,
          lu = 0;
        for (const fu of this.entries) Xu += fu.yaw * fu.dtSec, lu += fu.pitch * fu.dtSec;
        const qu = this.windowSec > 0 ? {
          yaw: Xu / this.windowSec,
          pitch: lu / this.windowSec
        } : {
          yaw: Zu.yaw,
          pitch: Zu.pitch
        };
        return {
          yaw: uu * Uu + qu.yaw,
          pitch: Eu * Uu + qu.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class wu {
      constructor() {
        this.calibrator = new eu, this.gravity = new Gu, this.smoother = new pu
      }
      process(uu, Eu, ju) {
        const su = Math.max(0, Math.min(.05, Eu));
        this.calibrator.update({
          ...uu,
          dtSec: su
        });
        const Uu = this.calibrator.correct(uu.gyro);
        let Zu = Uu.y;
        "player" === ju && uu.accel && (Zu = ((uu, Eu) => {
          const ju = uu.y * Eu.y + uu.z * Eu.z;
          return -Math.sign(ju) * Math.min(1.41 * Math.abs(ju), Math.hypot(uu.y, uu.z))
        })(Uu, this.gravity.update(Uu, uu.accel, su)));
        const Xu = this.smoother.apply(Zu, Uu.x, su),
          lu = ((uu, Eu) => {
            const ju = Math.hypot(uu, Eu);
            if (ju >= 1) return {
              yaw: uu,
              pitch: Eu
            };
            const su = ju / 1;
            return {
              yaw: uu * su,
              pitch: Eu * su
            }
          })(Xu.yaw, Xu.pitch);
        return {
          yawDeg: lu.yaw * su,
          pitchDeg: lu.pitch * su
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
    const Ju = (uu, Eu) => {
      var ju, su, Uu;
      const Zu = Eu * bu,
        Xu = null !== (ju = uu.beta) && void 0 !== ju ? ju : 0,
        lu = null !== (su = uu.gamma) && void 0 !== su ? su : 0;
      return {
        x: Xu * Math.cos(Zu) - lu * Math.sin(Zu),
        y: Xu * Math.sin(Zu) + lu * Math.cos(Zu),
        z: null !== (Uu = uu.alpha) && void 0 !== Uu ? Uu : 0
      }
    };
    var du = ju(9065);
    class au {
      constructor(uu, Eu, ju) {
        this.hid = uu, this.sink = Eu, this.onControllersChanged = ju, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = uu => {
          this.openController(uu.device).catch((uu => {
            console.warn("Could not open motion controller", uu)
          }))
        }, this.onDisconnect = uu => {
          this.opening.has(uu.device) && this.disconnectedWhileOpening.add(uu.device);
          const Eu = this.controllers.get(uu.device);
          Eu && (this.forget(Eu), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const uu = await this.hid.getDevices();
        for (const Eu of uu) await this.openController(Eu).catch((uu => {
          console.warn("Could not open motion controller", uu)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const uu of [...this.controllers.values()]) this.forget(uu);
        this.onControllersChanged()
      }
      async request() {
        const uu = await this.hid.requestDevice({
          filters: du.m
        });
        let Eu = 0;
        for (const ju of uu) await this.openController(ju).catch((uu => {
          console.warn("Could not open motion controller", uu), Eu++
        }));
        return Eu
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((uu => null !== (0, du.h)(uu.vendorId, uu.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((uu => uu.kind))
      }
      forget(uu) {
        uu.device.removeEventListener("inputreport", uu.onReport), this.controllers.get(uu.device) === uu && this.controllers.delete(uu.device)
      }
      async openController(uu) {
        const Eu = (0, du.h)(uu.vendorId, uu.productId);
        if (!Eu || !this.running || this.controllers.has(uu) || this.opening.has(uu)) return;
        this.opening.add(uu);
        let ju = !1;
        try {
          uu.opened || await uu.open()
        } finally {
          this.opening.delete(uu), ju = this.disconnectedWhileOpening.delete(uu)
        }
        if (ju) return void uu.close().catch((uu => {
          console.debug("Could not close an unplugged motion controller", uu)
        }));
        if (!this.running) return;
        const su = {
          device: uu,
          kind: Eu,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: uu => {
            this.onReport(su, uu)
          }
        };
        this.controllers.set(uu, su), uu.addEventListener("inputreport", su.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(su)
        } catch (Uu) {
          console.warn(`Could not turn on motion for ${Eu}`, Uu), this.controllers.get(uu) === su && (this.forget(su), this.onControllersChanged())
        }
      }
      async enableMotion(uu) {
        let {
          device: Eu,
          kind: ju
        } = uu;
        if ((0, du.i)(ju))
          for (const su of du.z[ju]) await Eu.receiveFeatureReport(su).catch((uu => {
            console.debug(`Motion controller feature report ${su} unavailable`, uu)
          }));
        else
          for (let su = 0; su < 2; su++)
            for (const {
                subcommand: uu,
                args: ju
              }
              of du.A) await Eu.sendReport(du.B, (0, du.e)(this.switchPacketCounter++, uu, ju)), await new Promise((uu => {
              setTimeout(uu, 60)
            }))
      }
      onReport(uu, Eu) {
        const ju = (0, du.w)(uu.kind, Eu.reportId, Eu.data, uu.device.productId);
        if (!ju) return;
        const su = null === uu.lastEventMs ? 0 : (Eu.timeStamp - uu.lastEventMs) / 1e3;
        uu.lastEventMs = Eu.timeStamp;
        let Uu = ju.dtSec;
        if (null !== Uu && su > 0 && (Uu = Math.max(.001, Math.min(.017, su / ju.readings.length))), null === Uu && null !== ju.sensorClock && (0, du.i)(uu.kind)) {
          const Eu = (0, du.y)(uu.kind, uu.lastClock, ju.sensorClock);
          uu.lastClock = ju.sensorClock, Uu = 0 === Eu ? null : Eu
        }
        if (uu.lastReadingMs = Eu.timeStamp, this.isPreferred(uu, Eu.timeStamp))
          for (const Xu of ju.readings) {
            var Zu;
            this.sink(Xu, null !== (Zu = Uu) && void 0 !== Zu ? Zu : su, `hid${uu.openedOrder}`)
          }
      }
      isPreferred(uu, Eu) {
        const ju = uu => 1e6 * du.t[uu.kind] + uu.openedOrder;
        for (const su of this.controllers.values())
          if (su !== uu && Eu - su.lastReadingMs < 500 && ju(su) < ju(uu)) return !1;
        return !0
      }
    }
    var Pu = ju(91);
    const ou = () => DeviceMotionEvent,
      ku = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Pu.isMobile)(),
      mu = () => {
        var uu;
        const Eu = null === (uu = window.screen.orientation) || void 0 === uu ? void 0 : uu.angle;
        return "number" === typeof Eu ? Eu : "number" === typeof window.orientation ? window.orientation : 0
      };
    class vu {
      constructor(uu, Eu) {
        this.sink = uu, this.onStateChanged = Eu, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((uu => {
            console.warn("Could not enable the motion sensor", uu)
          }))
        }, this.onMotion = uu => {
          const Eu = uu.rotationRate;
          if (!Eu || null === Eu.alpha && null === Eu.beta && null === Eu.gamma) return;
          const ju = null === this.lastEventMs ? 0 : (uu.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = uu.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Ju(Eu, mu()),
            accel: null
          }, ju, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof ou().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const uu = ou().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof uu) return void this.listen();
        let Eu;
        this.disarmGestureRequest();
        try {
          Eu = await uu.call(DeviceMotionEvent)
        } catch (ju) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ju
        }
        this.wanted && ("granted" === Eu ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(uu) {
        this.state !== uu && (this.state = uu, this.onStateChanged())
      }
    }
    const Ku = "controllerGyroStatusChanged",
      Vu = {
        hK: 0,
        VK: 0
      },
      ru = uu => {
        var Eu, ju;
        return "undefined" === typeof document || (null === (Eu = null === (ju = document.featurePolicy) || void 0 === ju ? void 0 : ju.allowsFeature(uu)) || void 0 === Eu || Eu)
      };
    class Qu {
      constructor() {
        this.processor = new wu, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = uu => {
          const Eu = uu.gyroAiming && lu.e.hasConnectedPad();
          var ju, su;
          Eu !== this.phoneRunning && (this.phoneRunning = Eu, Eu ? null === (ju = this.phone) || void 0 === ju || ju.start() : null === (su = this.phone) || void 0 === su || su.stop());
          if (uu.gyroAiming !== this.running) {
            var Uu, Zu;
            if (this.running = uu.gyroAiming, this.running) null === (Uu = this.hid) || void 0 === Uu || Uu.start().catch((uu => {
              console.warn("Could not open motion controllers", uu)
            }));
            else null === (Zu = this.hid) || void 0 === Zu || Zu.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Uu.h.TY(Ku, this.getStatus())
        };
        const uu = (() => {
            var uu;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (uu = navigator.hid) && void 0 !== uu ? uu : null
          })(),
          Eu = ru("hid");
        this.hidBlocked = null !== uu && !Eu, this.hid = uu && Eu ? new au(uu, ((uu, Eu, ju) => {
          this.lastHidReadingMs = performance.now(), this.feed(uu, Eu, "player", ju)
        }), this.publishStatus) : null;
        const ju = ru("accelerometer") && ru("gyroscope");
        this.phoneBlocked = ku() && !ju, this.phone = ku() && ju ? new vu(((uu, Eu, ju) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(uu, Eu, "local", ju)
        }), this.publishStatus) : null, Uu.h.subscribe(fu.e, this.syncWithSettings), lu.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, fu.f)()), this.publishStatus()
        })), this.syncWithSettings((0, fu.f)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var uu, Eu, ju, su;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (uu = null === (Eu = this.hid) || void 0 === Eu ? void 0 : Eu.getConnectedKinds()) && void 0 !== uu ? uu : [],
          phoneMotion: null !== (ju = null === (su = this.phone) || void 0 === su ? void 0 : su.getState()) && void 0 !== ju ? ju : "off",
          padConnected: lu.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var uu;
        await (null === (uu = this.phone) || void 0 === uu ? void 0 : uu.requestPermission())
      }
      drainLookDelta() {
        const uu = performance.now();
        uu - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = uu;
        const Eu = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ju = (0, fu.f)();
        return ju.gyroAiming && (uu => {
          let {
            activation: Eu,
            isHeld: ju,
            useButton: su,
            gyroButton: Uu
          } = uu;
          return "always" === Eu || ju("aiming" === Eu ? su : Uu)
        })({
          activation: ju.gyroActivation,
          isHeld: uu => qu.d.isButtonHeld(uu),
          useButton: (0, Xu.i)("use"),
          gyroButton: ju.gyroButton
        }) ? ((uu, Eu) => ({
          hK: -uu.yawDeg * Eu * bu,
          VK: -uu.pitchDeg * Eu * bu
        }))(Eu, ju.gyroSensitivity) : Vu
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(uu, Eu) {
        this.feed(uu, Eu, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(uu, Eu, ju, su) {
        this.source !== su && (this.processor.reset(), this.source = su);
        const Uu = this.processor.process(uu, Eu, ju);
        this.pendingYawDeg += Uu.yawDeg, this.pendingPitchDeg += Uu.pitchDeg
      }
    }
    let iu = null;
    const Wu = () => (iu || (iu = new Qu), iu),
      Su = () => {
        const [uu, Eu] = (0, su.useState)((() => Wu().getStatus()));
        return (0, Zu.f)(Ku, Eu), (0, su.useEffect)((() => {
          Eu(Wu().getStatus())
        }), []), uu
      }
  },
  9065: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => pu,
      B: () => Mu,
      e: () => Gu,
      h: () => qu,
      i: () => su,
      m: () => lu,
      q: () => fu,
      t: () => Cu,
      w: () => gu,
      y: () => hu,
      z: () => wu
    });
    const su = uu => "dualShock4" === uu || "dualSense" === uu,
      Uu = 1356,
      Zu = 1406,
      Xu = [{
        vendorId: Uu,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Uu,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Uu,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Uu,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Uu,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Zu,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Zu,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Zu,
        productId: 8199,
        kind: "joyConRight"
      }],
      lu = Xu.map((uu => {
        let {
          vendorId: Eu,
          productId: ju
        } = uu;
        return {
          vendorId: Eu,
          productId: ju
        }
      })),
      qu = (uu, Eu) => {
        var ju, su;
        return null !== (ju = null === (su = Xu.find((ju => ju.vendorId === uu && ju.productId === Eu))) || void 0 === su ? void 0 : su.kind) && void 0 !== ju ? ju : null
      },
      fu = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Cu = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      bu = 2e3 / 32767,
      cu = 1 / 8192,
      Nu = 936 / 13371,
      Ou = (uu, Eu, ju) => ({
        x: uu.getInt16(Eu, !0) * ju,
        y: uu.getInt16(Eu + 2, !0) * ju,
        z: uu.getInt16(Eu + 4, !0) * ju
      }),
      Yu = uu => 0 === uu.x && 0 === uu.y && 0 === uu.z,
      hu = (uu, Eu, ju) => null === Eu ? null : "dualShock4" === uu ? 16 * (ju - Eu & 65535) / 3 / 1e6 : (ju - Eu >>> 0) / 3 / 1e6,
      Du = (uu, Eu) => "joyConRight" === Eu ? {
        x: uu.y,
        y: -uu.z,
        z: -uu.x
      } : {
        x: -uu.y,
        y: uu.z,
        z: -uu.x
      },
      gu = (uu, Eu, ju, Uu) => su(uu) ? ((uu, Eu, ju, su) => {
        const Uu = ((uu, Eu, ju) => "dualShock4" === uu ? 1 === Eu && ju >= 63 ? 0 : 17 === Eu && ju >= 65 ? 2 : null : 1 === Eu && ju >= 62 ? 0 : 49 === Eu && ju >= 63 ? 1 : null)(uu, Eu, ju.byteLength);
        if (null === Uu) return null;
        if (2976 === su && 1 === Eu && 0 !== (4 & ju.getUint8(30))) return null;
        const Zu = Uu + ("dualShock4" === uu ? 12 : 15),
          Xu = Ou(ju, Zu, bu),
          lu = Ou(ju, Zu + 6, cu);
        return Yu(Xu) && Yu(lu) ? null : {
          readings: [{
            gyro: Xu,
            accel: lu
          }],
          dtSec: null,
          sensorClock: "dualShock4" === uu ? ju.getUint16(Uu + 9, !0) : ju.getUint32(Uu + 27, !0)
        }
      })(uu, Eu, ju, Uu) : ((uu, Eu, ju) => {
        if (48 !== Eu && 49 !== Eu || ju.byteLength < 48) return null;
        const su = [];
        for (let Uu = 0; Uu < 3; Uu++) {
          const Eu = Ou(ju, 12 + 12 * Uu, 244e-6),
            Zu = Ou(ju, 18 + 12 * Uu, Nu);
          if (Yu(Zu) && Yu(Eu)) return null;
          su.push({
            gyro: Du(Zu, uu),
            accel: Du(Eu, uu)
          })
        }
        return {
          readings: su,
          dtSec: .005,
          sensorClock: null
        }
      })(uu, Eu, ju),
      Mu = 1,
      eu = [0, 1, 64, 64, 0, 1, 64, 64],
      Gu = (uu, Eu, ju) => new Uint8Array([15 & uu, ...eu, Eu, ...ju]),
      pu = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      wu = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8443: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Qu,
      f: () => Lu,
      j: () => pu,
      l: () => Nu.g,
      n: () => Su,
      p: () => Wu,
      q: () => wu,
      u: () => Iu,
      y: () => Nu.p,
      C: () => Nu.t,
      D: () => tu,
      E: () => Nu.z,
      F: () => vu
    });
    var su = ju(58),
      Uu = ju(22),
      Zu = ju(24),
      Xu = ju(1499),
      lu = ju(1343),
      qu = ju(8411),
      fu = ju(8447),
      Cu = ju(8391),
      bu = ju(8378),
      cu = ju(8452),
      Nu = ju(1443),
      Ou = ju(8383),
      Yu = ju(8872),
      hu = ju(4540),
      Du = ju(107);
    class gu {
      constructor(uu) {
        this.deps = uu, this.pads = new Map
      }
      observe(uu, Eu, ju) {
        if (!this.deps.touchOnly) return;
        const su = this.pads.get(Eu.id);
        "proven" !== su && ju ? (this.pads.set(Eu.id, "proven"), void 0 !== su && this.deps.onReleased(Eu, uu, uu.timestampMs - su)) : void 0 === su && (this.pads.set(Eu.id, uu.timestampMs), this.deps.onHeld(Eu, uu)), this.deps.setMayHide("proven" === this.pads.get(Eu.id))
      }
    }
    const Mu = uu => uu.values.flatMap(((uu, Eu) => uu >= Ou.V ? [String(Eu)] : [])).join(",") || "none",
      eu = (uu, Eu, su, Uu, Zu) => {
        const Xu = (0, Nu.d)(),
          lu = document.visibilityState,
          qu = document.hasFocus();
        Promise.all([Promise.resolve().then((() => ju(3074))), Promise.resolve().then((() => ju(1128))), Promise.resolve().then((() => ju(131)))]).then((ju => {
          let [{
            logControllerHudHoldToGtag: fu
          }, {
            logClientLineFromEveryPage: Cu
          }, {
            siteUsed: bu
          }] = ju;
          fu(uu, Eu.family, null === Zu ? void 0 : Math.round(Zu / 1e3)), Cu(`touch HUD pad ${uu}`, Gu(Eu, su, Uu, Zu, Xu, lu, qu, bu))
        }), (() => {}))
      },
      Gu = (uu, Eu, ju, su, Uu, Zu, Xu, lu) => {
        var qu;
        const fu = {
          pad_id: uu.id.slice(0, 120),
          pad_family: uu.family,
          pad_mapping: null !== (qu = null === ju || void 0 === ju ? void 0 : ju.mapping) && void 0 !== qu ? qu : "unread",
          pad_axes: ju ? String(ju.axes.length) : "unread",
          pad_buttons: ju ? String(ju.buttons.length) : "unread",
          pressed: Mu(Eu),
          ms_since_touch: null === Uu ? "none" : String(Math.round(Eu.timestampMs - Uu)),
          visibility: Zu,
          focused: String(Xu),
          site: lu
        };
        return null !== su && (fu.held_ms = String(Math.round(su))), fu
      };
    const pu = uu => !uu.repeat && !(0, Yu.b)(uu.key),
      wu = "PadHidesCursor";
    let Ju = !1;
    const du = uu => {
        uu !== Ju && (Ju = uu, document.documentElement.classList.toggle(wu, uu))
      },
      au = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(uu) {
          let Eu = !1,
            ju = !1;
          uu.values.forEach(((uu, su) => {
            const Uu = uu >= (this.buttonsDown[su] ? Ou.X : Ou.V);
            Uu && !this.buttonsDown[su] && (Eu = !0, ju = !0), this.buttonsDown[su] = Uu
          }));
          return [uu.leftStick, uu.rightStick].forEach(((uu, su) => {
            const Uu = this.stickAnchors[su];
            Math.hypot(uu.x, uu.y) < (Uu ? Ou.X : .3) ? this.stickAnchors[su] = null : (!Uu || Math.hypot(uu.x - Uu.x, uu.y - Uu.y) >= .3) && (this.stickAnchors[su] = {
              x: uu.x,
              y: uu.y
            }, Eu = !0, ju ||= !Uu)
          })), Eu && (this.lastActivityMs = uu.timestampMs), this.onlyMovedOn = Eu && !ju, Eu
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(uu) {
          return !(uu - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((uu => uu)) || this.stickAnchors.some((uu => null !== uu)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((uu => null !== uu))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      Pu = (ou = () => bu.e.getActiveGamepad(), new gu({
        touchOnly: "touchOnly" === (0, Du.c)(),
        setMayHide: Nu.r,
        onHeld: (uu, Eu) => {
          eu("dl", uu, Eu, ou(), null)
        },
        onReleased: (uu, Eu, ju) => {
          eu("released", uu, Eu, ou(), ju)
        }
      }));
    var ou;
    let ku = null,
      mu = !1;
    const vu = () => mu;
    let Ku = null,
      Vu = !1,
      ru = null;
    const Qu = () => ru;
    let iu = !1;
    const Wu = (uu, Eu) => {
        if (!au.observe(uu)) return !1;
        if (Pu.observe(uu, Eu, au.isStickOffRest()), iu && au.wasOnlyMoveOn() && !(0, Nu.g)()) return !1;
        iu = !1, mu = !1;
        const ju = !(0, Nu.g)();
        return ju && (ku = uu, ru = !Ju && Vu && Ku ? {
          ...Ku
        } : null), Vu = !1, (0, Nu.p)("gamepad"), du(!0), (0, cu.o)((0, qu.i)()), ju
      },
      Su = uu => !(0, Nu.g)() || uu === ku,
      Iu = () => {
        au.reset()
      },
      Fu = () => {
        const uu = Uu.d.get("activeInputDevice"),
          Eu = "gamepad" === uu ? bu.e.getActivePad() : null;
        return {
          device: uu,
          inGame: (0, lu.w)(),
          padMovesMouse: null !== Eu && (0, Cu.c)(Eu.id)
        }
      },
      Bu = uu => {
        document.pointerLockElement ? Ku = null : (Ku ??= {
          x: 0,
          y: 0
        }, Ku.x = uu.clientX, Ku.y = uu.clientY)
      },
      Lu = () => {
        const uu = new hu.d,
          Eu = Eu => {
            uu.reset(), iu = !1, (0, Nu.p)(Eu)
          },
          ju = uu => {
            if (uu.isTrusted) {
              if (uu instanceof KeyboardEvent) {
                if ((0, Nu.m)(uu), !pu(uu)) return;
                mu = !0
              }
              if (uu instanceof PointerEvent && "touch" === uu.pointerType) return Ku = null, void Eu("touch");
              uu instanceof PointerEvent && (Bu(uu), Vu = !0), ("pointerdown" !== uu.type || (uu => {
                let {
                  device: Eu,
                  inGame: ju,
                  padMovesMouse: su
                } = uu;
                return !("gamepad" === Eu && su && ju)
              })(Fu())) && Eu("keyboardMouse")
            }
          },
          su = uu => {
            uu.isTrusted && (Ku = null, Eu("touch"))
          },
          Xu = uu => {
            uu.isTrusted && "touch" !== uu.pointerType && !uu.relatedTarget && (Ku = null)
          },
          lu = ju => {
            if (!ju.isTrusted || "touch" === ju.pointerType) return;
            Bu(ju);
            const su = ju.movementX || 0,
              Zu = ju.movementY || 0;
            if (0 === su && 0 === Zu) return;
            if (Vu = !0, du(!1), "keyboardMouse" === Uu.d.get("activeInputDevice")) return;
            const Xu = au.isHolding(ju.timeStamp),
              lu = Fu(),
              qu = (uu => {
                let {
                  device: Eu,
                  inGame: ju,
                  padMovesMouse: su,
                  padHolding: Uu
                } = uu;
                return ("gamepad" !== Eu || !su) && "keyboardMouse" !== Eu && (ju || !Uu)
              })({
                ...lu,
                inGame: lu.inGame && (0, fu.h)(),
                padHolding: Xu
              });
            qu && uu.add(su, Zu, ju.timeStamp) && (Eu("keyboardMouse"), iu = au.isStickOffRest())
          },
          qu = uu => {
            du("gamepad" === uu)
          },
          Cu = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ju, Cu), window.addEventListener("pointerdown", ju, Cu), window.addEventListener("wheel", ju, Cu), window.addEventListener("touchstart", su, Cu), window.addEventListener("pointermove", lu, Cu), window.addEventListener("pointerout", Xu, Cu);
        const bu = Zu.h.subscribe("appManagerUpdated|activeInputDevice", qu);
        return qu(Uu.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ju, Cu), window.removeEventListener("pointerdown", ju, Cu), window.removeEventListener("wheel", ju, Cu), window.removeEventListener("touchstart", su, Cu), window.removeEventListener("pointermove", lu, Cu), window.removeEventListener("pointerout", Xu, Cu), Ku = null, Zu.h.unsubscribe(bu), du(!1)
        }
      },
      tu = () => {
        const [uu, Eu] = (0, su.useState)(qu.i);
        return (0, Xu.f)(qu.d, (() => {
          Eu((0, qu.i)())
        })), (0, Xu.f)(bu.c, (() => {
          Eu((0, qu.i)())
        })), uu
      }
  },
  8419: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      e: () => Uu
    });
    const su = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Uu = uu => su.includes(uu)
  },
  8909: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Zu,
      g: () => qu,
      h: () => lu
    });
    var su = ju(1499),
      Uu = ju(1461);
    const Zu = "controllerInventoryCursorChanged",
      Xu = {
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
      lu = () => {
        var uu, Eu;
        return (0, su.g)(Zu, null !== (uu = null === (Eu = (0, Uu.e)()) || void 0 === Eu ? void 0 : Eu.getInventoryCursorState()) && void 0 !== uu ? uu : Xu)
      },
      qu = () => {
        var uu, Eu;
        return null !== (uu = null === (Eu = (0, Uu.e)()) || void 0 === Eu ? void 0 : Eu.isPadSteppingSlots()) && void 0 !== uu && uu
      }
  },
  8903: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      e: () => lu,
      h: () => qu,
      j: () => Xu,
      m: () => Zu,
      n: () => Cu,
      p: () => bu
    });
    let su = null;
    const Uu = new Set,
      Zu = uu => (su = uu, () => {
        if (su === uu) {
          su = null;
          for (const uu of Uu) uu()
        }
      }),
      Xu = uu => (Uu.add(uu), () => {
        Uu.delete(uu)
      }),
      lu = () => su,
      qu = () => null !== su;
    let fu = null;
    const Cu = uu => {
        fu = uu
      },
      bu = () => {
        const uu = fu;
        return fu = null, uu
      },
      cu = (uu, Eu) => {
        var ju, su;
        return null !== (ju = null !== (su = uu.find((uu => uu.element === Eu))) && void 0 !== su ? su : uu.find((uu => uu.element.contains(Eu)))) && void 0 !== ju ? ju : null
      }
  },
  8915: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      c: () => Xu
    });
    var su = ju(58);
    const Uu = new WeakMap,
      Zu = uu => {
        var Eu, ju;
        return null !== (Eu = null === (ju = Uu.get(uu)) || void 0 === ju ? void 0 : ju.current) && void 0 !== Eu ? Eu : null
      },
      Xu = (uu, Eu) => {
        const ju = (0, su.useRef)(Eu);
        ju.current = Eu;
        const Zu = (0, su.useRef)(null);
        (0, su.useEffect)((() => {
          const Eu = uu.current,
            su = Zu.current;
          Eu !== su && (su && Uu.get(su) === ju && Uu.delete(su), Zu.current = Eu, Eu && Uu.set(Eu, ju))
        })), (0, su.useEffect)((() => () => {
          const uu = Zu.current;
          uu && Uu.get(uu) === ju && Uu.delete(uu), Zu.current = null
        }), [])
      }
  },
  9032: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      h: () => fu,
      i: () => bu,
      k: () => Cu,
      n: () => qu,
      q: () => Nu
    });
    var su = ju(24),
      Uu = ju(2065),
      Zu = ju(1461),
      Xu = ju(1443);
    const lu = uu => {
        var Eu, ju;
        return (0, Xu.g)() && null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getGlyphForNoaAction(uu)) && void 0 !== Eu ? Eu : null
      },
      qu = "controllerGlyph:",
      fu = uu => {
        var Eu, ju;
        return null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getPadGlyphIconName(uu)) && void 0 !== Eu ? Eu : `${qu}xbox/${uu}`
      },
      Cu = uu => uu.startsWith(qu),
      bu = uu => {
        var Eu, ju;
        return Cu(uu) && null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getPadGlyphIconUrl(uu)) && void 0 !== Eu ? Eu : null
      },
      cu = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xu.b, Uu.e, Uu.c],
      Nu = uu => {
        const Eu = cu.map((Eu => su.h.subscribe(Eu, uu)));
        return () => {
          for (const uu of Eu) su.h.unsubscribe(uu)
        }
      }
  },
  8891: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      h: () => su
    });
    const su = "controllerOpenKeyboard",
      Uu = "controllerKeyboardVisible"
  },
  8447: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      h: () => Cu,
      l: () => qu,
      p: () => lu
    });
    var su = ju(22),
      Uu = ju(1687),
      Zu = ju(1787);
    const Xu = new Map,
      lu = (uu, Eu) => (Xu.has(uu) && console.warn(`Gameplay blocker "${uu}" registered twice; the newer one replaces it.`), Xu.set(uu, Eu), () => {
        Xu.get(uu) === Eu && Xu.delete(uu)
      }),
      qu = () => (0, Zu.e)(document.activeElement),
      fu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Eu, ju] of Xu)
          if (!uu.includes(Eu) && ju()) return Eu;
        return null
      },
      Cu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === su.d.get("gameState") && (!(0, Uu.s)() && (!qu() && null === fu(uu)))
      }
  },
  8383: (uu, Eu, ju) => {
    ju.d(Eu, {
      D: () => Mu,
      E: () => ku,
      I: () => eu,
      L: () => Du,
      P: () => hu,
      R: () => fu,
      V: () => cu,
      X: () => Nu,
      _: () => Uu,
      b: () => vu,
      bb: () => su,
      e: () => ou,
      eb: () => pu,
      f: () => Cu,
      fb: () => Pu,
      i: () => qu,
      jb: () => mu,
      k: () => lu,
      mb: () => Gu,
      o: () => Ju,
      s: () => gu,
      v: () => wu,
      x: () => Zu,
      z: () => bu
    });
    const su = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Uu = su.length,
      Zu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Uu).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: uu
        }
      },
      Xu = Object.fromEntries(su.map(((uu, Eu) => [uu, Eu]))),
      lu = uu => Xu[uu],
      qu = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const su = Math.hypot(uu.x, uu.y);
        if (su <= Eu) return {
          x: 0,
          y: 0
        };
        const Uu = Math.min(1, (su - Eu) / Math.max(1e-4, ju - Eu));
        return {
          x: uu.x / su * Uu,
          y: uu.y / su * Uu
        }
      },
      fu = ["exponential", "linear", "boost"],
      Cu = (uu, Eu) => {
        const ju = Math.hypot(uu.x, uu.y);
        if (0 === ju) return {
          x: 0,
          y: 0
        };
        const su = ((uu, Eu) => {
          const ju = Math.max(0, Math.min(1, uu));
          return "linear" === Eu ? ju : ju * ju
        })(ju, Eu);
        return {
          x: uu.x / ju * su,
          y: uu.y / ju * su
        }
      },
      bu = .5,
      cu = .3,
      Nu = .2,
      Ou = lu("LT"),
      Yu = lu("RT"),
      hu = uu => uu === Ou || uu === Yu,
      Du = (uu, Eu) => {
        const ju = lu(Eu);
        return hu(ju) ? uu[ju] > .35 : uu[ju] >= bu
      },
      gu = (uu, Eu) => uu.map(((uu, ju) => hu(ju) ? Eu[ju] ? uu > .35 : uu >= .55 : uu >= bu)),
      Mu = ["Up", "Down", "Left", "Right"],
      eu = uu => Mu.includes(uu),
      Gu = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(uu.x, uu.y) < Eu ? null : Math.abs(uu.x) > Math.abs(uu.y) ? uu.x > 0 ? "Right" : "Left" : uu.y > 0 ? "Down" : "Up"
      },
      pu = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      wu = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Ju = ["default", "slow", "off"],
      du = 800,
      au = 250,
      Pu = (uu, Eu) => "off" === Eu ? null : "slow" === Eu ? {
        initialDelayMs: Math.max(uu.initialDelayMs, du),
        intervalMs: Math.max(uu.intervalMs, au)
      } : uu;
    class ou {
      constructor(uu) {
        this.readTiming = uu, this.dl = !1, this.timing = null, this.nextFireMs = 0
      }
      update(uu, Eu) {
        return uu ? this.dl ? !!(this.timing && Eu >= this.nextFireMs) && (this.nextFireMs = Eu + this.timing.intervalMs, !0) : (this.dl = !0, this.timing = this.readTiming(), this.nextFireMs = Eu + (null !== (ju = null === (su = this.timing) || void 0 === su ? void 0 : su.initialDelayMs) && void 0 !== ju ? ju : 0), !0) : (this.dl = !1, !1);
        var ju, su
      }
      reset() {
        this.dl = !1
      }
    }
    const ku = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      mu = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class vu {
      constructor(uu) {
        this.timer = uu, this.direction = null
      }
      update(uu, Eu) {
        return uu !== this.direction && (this.timer.reset(), this.direction = uu), this.timer.update(null !== uu, Eu) ? uu : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8922: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      h: () => Zu
    });
    let su = -1 / 0;
    const Uu = () => {
        su = performance.now()
      },
      Zu = uu => performance.now() - su < uu
  },
  8876: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      f: () => Zu
    });
    var su = ju(8411),
      Uu = ju(8383);
    const Zu = uu => (0, Uu.fb)(uu, (0, su.f)().buttonRepeat),
      Xu = uu => new Uu.e((() => Zu(uu)))
  },
  8430: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu,
      e: () => Zu,
      g: () => lu
    });
    var su = ju(24),
      Uu = ju(8411);
    const Zu = (uu, Eu) => "OpenShop" === uu ? "shop" === Eu : "OpenLobbyLeaderboard" !== uu || "leaderboard" === Eu;
    let Xu = !1;
    const lu = uu => {
        uu !== Xu && (Xu = uu, su.h.TY(Uu.d, (0, Uu.f)()))
      },
      qu = () => ((uu, Eu) => "shop" === uu && Eu ? "shop" : "leaderboard")((0, Uu.f)().leaderboardButton, Xu)
  },
  8426: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => lu,
      E: () => Gu,
      I: () => cu,
      L: () => Nu,
      O: () => bu,
      Q: () => eu,
      U: () => fu,
      Y: () => Du,
      Z: () => au,
      ab: () => Mu,
      b: () => Vu,
      eb: () => Yu,
      f: () => Qu,
      h: () => Pu,
      hb: () => hu,
      ib: () => Ou,
      k: () => Xu,
      lb: () => gu,
      mb: () => mu,
      nb: () => Zu,
      o: () => du,
      q: () => wu,
      rb: () => pu,
      t: () => vu,
      tb: () => ru,
      ub: () => Ju,
      v: () => Ku,
      x: () => Cu,
      z: () => qu
    });
    var su = ju(8405),
      Uu = ju(8383);
    const Zu = {
        min: 25,
        max: 500,
        step: 5
      },
      Xu = {
        min: 25,
        max: 100,
        step: 5
      },
      lu = {
        min: 0,
        max: .4,
        step: .01
      },
      qu = {
        min: 25,
        max: 300,
        step: 5
      },
      fu = {
        min: .5,
        max: 6,
        step: .1
      },
      Cu = (uu, Eu) => {
        if (!Number.isFinite(uu)) return Eu.min;
        const ju = Eu.min + Math.round((uu - Eu.min) / Eu.step) * Eu.step,
          su = Math.min(Eu.max, Math.max(Eu.min, ju));
        return Math.round(1e3 * su) / 1e3
      },
      bu = uu => `${Math.round(uu)}%`,
      cu = uu => bu(100 * uu),
      Nu = uu => `${uu.toFixed(1)}\xd7`,
      Ou = [{
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
      Yu = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      hu = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Du = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      gu = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Mu = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      eu = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Gu = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      pu = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      wu = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Ju = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      du = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      au = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Pu = {
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
      ou = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      ku = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      mu = su.b.map((uu => {
        let {
          group: Eu,
          actions: ju
        } = uu;
        const su = ju.map((uu => ({
          kind: "action",
          action: uu
        })));
        return {
          titleKey: ou[Eu],
          rows: "gameplay" === Eu ? [...ku, ...su] : su
        }
      })),
      vu = Uu.bb.filter((uu => "Home" !== uu)),
      Ku = 1e4;
    class Vu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = uu, this.openButton = Eu, this.accepts = ju, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(uu, Eu) {
        var ju;
        this.updateIgnored(uu, Eu);
        const su = Eu - (null !== (ju = this.startMs) && void 0 !== ju ? ju : Eu) >= 250;
        for (const Uu of vu)
          if (Uu !== this.cancelButton && su && !this.ignoredUntilMs.has(Uu) && uu.wasPressed(Uu) && this.accepts(Uu)) return {
            kind: "bind",
            button: Uu
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (uu.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Eu
        }
        return null === this.cancelDownAtMs ? null : uu.isHeld(this.cancelButton) && Eu - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : uu.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(uu) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (uu - this.cancelDownAtMs) / 700)
      }
      updateIgnored(uu, Eu) {
        if (null === this.startMs) {
          this.startMs = Eu;
          for (const Eu of vu) uu.isDown(Eu) && this.ignoredUntilMs.set(Eu, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Eu + 250)
        }
        for (const [ju, su] of this.ignoredUntilMs) {
          const Uu = uu.isDown(ju);
          su === 1 / 0 ? Uu || ju !== this.openButton ? Uu || this.ignoredUntilMs.delete(ju) : this.ignoredUntilMs.set(ju, Eu + 250) : Eu >= su ? this.ignoredUntilMs.delete(ju) : Uu && this.ignoredUntilMs.set(ju, 1 / 0)
        }
      }
    }
    const ru = 6e3;
    class Qu {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(uu, Eu) {
        let {
          pressed: ju,
          dl: su
        } = uu;
        if (ju) {
          const uu = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== uu && Eu - uu < 1500 ? [...this.pressesAtMs, Eu] : [Eu], this.pressesAtMs.length >= 3) return 1
        }
        return su ? (this.downAtMs ??= Eu, Math.min(1, (Eu - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  5182: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      e: () => Xu
    });
    var su = ju(58);
    const Uu = new WeakMap,
      Zu = uu => {
        var Eu;
        const ju = uu.closest("[data-pad-slider]");
        return ju && null !== (Eu = Uu.get(ju)) && void 0 !== Eu ? Eu : null
      },
      Xu = (uu, Eu) => {
        const ju = (0, su.useRef)(Eu);
        ju.current = Eu, (0, su.useEffect)((() => {
          if (uu.current) return ((uu, Eu) => (Uu.set(uu, Eu), () => {
            Uu.get(uu) === Eu && Uu.delete(uu)
          }))(uu.current, {
            adjust: uu => {
              ju.current.adjust(uu)
            },
            setFraction: uu => {
              ju.current.setFraction(uu)
            },
            endDrag: () => {
              ju.current.endDrag()
            }
          })
        }), [uu])
      }
  },
  9017: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Xu,
      h: () => Zu,
      l: () => su,
      n: () => lu,
      o: () => fu,
      q: () => Cu
    });
    const su = "controllerActionWheelOpen",
      Uu = "controllerActionWheelAim",
      Zu = "controllerActionWheelCommit",
      Xu = "controllerActionWheelClose",
      lu = "controllerActionWheelPick";
    let qu = !1;
    const fu = () => qu,
      Cu = uu => {
        qu = uu
      }
  },
  9015: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      g: () => Uu
    });
    let su = 0;
    const Uu = () => {
        su++
      },
      Zu = () => su
  },
  8933: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      f: () => Uu,
      g: () => Xu,
      h: () => Zu,
      k: () => su,
      m: () => fu
    });
    const su = "controllerQuickChatWheelOpen",
      Uu = "controllerQuickChatWheelAim",
      Zu = "controllerQuickChatWheelCommit",
      Xu = "controllerQuickChatWheelClose";
    let lu = !1;
    const qu = () => lu,
      fu = uu => {
        lu = uu
      }
  },
  8947: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      g: () => Uu
    });
    var su = ju(24);
    const Uu = "localBlockBroken";

    function Zu() {
      return {
        onPlayerChangeBlock(uu, Eu, ju, Zu, Xu, lu) {
          "Air" === lu && su.h.TY(Uu)
        }
      }
    }
  },
  9091: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => qu
    });
    var su = ju(22),
      Uu = ju(1369),
      Zu = ju(91);
    const Xu = {
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

    function lu() {
      return (0, Zu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Eu) {
        var ju;
        if (!this.deps.enabled()) return;
        const su = Xu[uu],
          Uu = null !== Eu && void 0 !== Eu ? Eu : su.pattern;
        if (null === Uu) return void console.warn("No vibration pattern for", uu);
        const Zu = this.deps.now();
        Zu - this.lastAnyAt < 40 && su.priority < this.playingPriority || Zu - (null !== (ju = this.lastAt.get(uu)) && void 0 !== ju ? ju : -1 / 0) < su.minGapMs || Zu < this.playingUntil && su.priority < this.playingPriority || (this.lastAt.set(uu, Zu), this.lastAnyAt = Zu, this.playingUntil = Zu + Uu.reduce(((uu, Eu) => uu + Eu), 0), this.playingPriority = su.priority, this.deps.vibrate(Uu))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => lu() && su.d.get("isTouchScreen") && su.d.get("clientEscMenuOptions").vibration && !(0, Uu.c)()
    })
  },
  8944: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(1309);

    function Uu(uu, Eu) {
      var ju, Uu;
      try {
        const ju = (0, su.e)();
        if ("function" === typeof ju) {
          const su = new ju(uu, Eu);
          if (su.type === uu) return su
        }
      } catch {}
      const Zu = document.createEvent("Event");
      return Zu.initEvent(uu, null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.bubbles) && void 0 !== ju && ju, null !== (Uu = null === Eu || void 0 === Eu ? void 0 : Eu.cancelable) && void 0 !== Uu && Uu), Zu
    }
  },
  8992: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(8995),
      Uu = ju(649),
      Zu = ju(131);

    function Xu(uu) {
      var Eu, ju;
      if ((0, Uu.H)(uu)) return !0;
      const Xu = null !== (Eu = null === (ju = Zu.siteUsedData[Zu.siteUsed]) || void 0 === ju ? void 0 : ju.adConfig.showRewardedAds) && void 0 !== Eu && Eu;
      for (const Uu in uu) {
        const Eu = uu[Uu];
        if (null !== Eu && void 0 !== Eu && Eu.items)
          for (const uu in Eu.items)
            if ((0, su.l)(Eu.items[uu], Xu)) return !1
      }
      return !0
    }
  },
  8995: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return !uu.hidden && (Eu || !uu.isRewardedAd)
    }

    function Uu(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Zu(uu, Eu) {
      var ju;
      if ("dropdown" === (null === (ju = uu.userInput) || void 0 === ju ? void 0 : ju.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const ju of uu.userInput.dropdownOptions)
          if (Uu(ju) === Eu) return "object" === typeof ju ? ju.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Eu)
      }
      return uu.cost
    }

    function Xu(uu, Eu, ju) {
      var su;
      const Uu = null !== (su = ju.excludedPlayers) && void 0 !== su ? su : [Eu];
      return uu.filter((uu => !Uu.includes(uu)))
    }
    ju.d(Eu, {
      d: () => Zu,
      g: () => Uu,
      j: () => Xu,
      l: () => su
    })
  },
  9026: () => {},
  8455: (uu, Eu, ju) => {
    var su = {
      "./nintendo/A.svg": 8462,
      "./nintendo/B.svg": 8471,
      "./nintendo/Down.svg": 8473,
      "./nintendo/Home.svg": 8476,
      "./nintendo/LB.svg": 8484,
      "./nintendo/LS.svg": 8490,
      "./nintendo/LT.svg": 8495,
      "./nintendo/Left.svg": 8499,
      "./nintendo/LeftStick.svg": 8507,
      "./nintendo/Menu.svg": 8509,
      "./nintendo/RB.svg": 8511,
      "./nintendo/RS.svg": 8519,
      "./nintendo/RT.svg": 8524,
      "./nintendo/Right.svg": 8531,
      "./nintendo/RightStick.svg": 8536,
      "./nintendo/Up.svg": 8541,
      "./nintendo/View.svg": 8548,
      "./nintendo/X.svg": 8553,
      "./nintendo/Y.svg": 8556,
      "./playstation/A.svg": 8559,
      "./playstation/B.svg": 8562,
      "./playstation/Down.svg": 8568,
      "./playstation/Home.svg": 8570,
      "./playstation/LB.svg": 8575,
      "./playstation/LS.svg": 8582,
      "./playstation/LT.svg": 8588,
      "./playstation/Left.svg": 8596,
      "./playstation/LeftStick.svg": 8601,
      "./playstation/Menu.svg": 8605,
      "./playstation/RB.svg": 8607,
      "./playstation/RS.svg": 8612,
      "./playstation/RT.svg": 8615,
      "./playstation/Right.svg": 8623,
      "./playstation/RightStick.svg": 8631,
      "./playstation/Up.svg": 8638,
      "./playstation/View.svg": 8646,
      "./playstation/X.svg": 8649,
      "./playstation/Y.svg": 8652,
      "./steamdeck/A.svg": 8661,
      "./steamdeck/B.svg": 8667,
      "./steamdeck/Down.svg": 8672,
      "./steamdeck/Home.svg": 8681,
      "./steamdeck/LB.svg": 8686,
      "./steamdeck/LS.svg": 8694,
      "./steamdeck/LT.svg": 8696,
      "./steamdeck/Left.svg": 8700,
      "./steamdeck/LeftStick.svg": 8702,
      "./steamdeck/Menu.svg": 8708,
      "./steamdeck/RB.svg": 8712,
      "./steamdeck/RS.svg": 8718,
      "./steamdeck/RT.svg": 8726,
      "./steamdeck/Right.svg": 8731,
      "./steamdeck/RightStick.svg": 8740,
      "./steamdeck/Up.svg": 8743,
      "./steamdeck/View.svg": 8745,
      "./steamdeck/X.svg": 8749,
      "./steamdeck/Y.svg": 8754,
      "./xbox/A.svg": 8756,
      "./xbox/B.svg": 8761,
      "./xbox/Down.svg": 8768,
      "./xbox/Home.svg": 8772,
      "./xbox/LB.svg": 8776,
      "./xbox/LS.svg": 8778,
      "./xbox/LT.svg": 8784,
      "./xbox/Left.svg": 8793,
      "./xbox/LeftStick.svg": 8797,
      "./xbox/Menu.svg": 8805,
      "./xbox/RB.svg": 8812,
      "./xbox/RS.svg": 8818,
      "./xbox/RT.svg": 8824,
      "./xbox/Right.svg": 8833,
      "./xbox/RightStick.svg": 8842,
      "./xbox/Up.svg": 8850,
      "./xbox/View.svg": 8853,
      "./xbox/X.svg": 8860,
      "./xbox/Y.svg": 8867
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 8455
  },
  8462: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8471: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8473: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8476: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8484: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8490: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8495: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8499: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8507: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8509: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8511: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8519: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8524: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8531: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8536: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8541: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8548: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8553: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8556: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8559: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8562: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8568: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8570: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8575: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8582: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8588: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8596: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8601: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8605: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8607: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8612: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8615: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8623: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8631: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8638: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8646: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8649: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8652: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8661: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8667: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8672: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8681: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8686: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8694: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8696: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8700: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8702: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8708: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8712: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8718: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8726: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8731: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8740: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8743: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8745: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8749: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8754: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8756: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8761: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8768: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8772: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8776: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8778: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8784: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8793: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8797: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8805: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8812: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8818: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8824: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8833: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8842: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8850: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8853: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8860: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8867: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
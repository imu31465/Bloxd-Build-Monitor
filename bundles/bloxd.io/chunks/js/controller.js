export const id = 33;
export const ids = [33];
export const modules = {
  9518: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ye,
      f: () => we,
      g: () => De
    });
    var ye = He(59),
      be = He(4937),
      Me = He(1075),
      Ke = He(1432),
      Ue = He(27),
      Fe = He(3773),
      Je = He(2284),
      oe = He(1189),
      Re = He(2683),
      ke = He(1983),
      qe = He(2029),
      fe = He(1127),
      Te = He(18),
      pe = He(1620),
      Xe = He(1053),
      ze = He.n(Xe),
      Be = He(9521),
      Ee = He(9529),
      ge = He(9531),
      Oe = He(9443),
      de = He(9539),
      We = He(3406),
      te = (He(9548), He(1228));
    let Ze = null;

    function we() {
      return null !== Ze
    }

    function De() {
      return "pad" === Ze
    }

    function Pe() {
      return "inGame" === Te.e.get("gameState") && !(0, pe.o)()
    }

    function Ae(ee) {
      return (0, Ee.u)(ee, oe.n, Ee.g, Ee.i, Ee.m)
    }
    const Ye = (0, ye.memo)((function() {
      const {
        t: ee
      } = (0, fe.v)(), {
        userContext: ie
      } = (0, Me.b)(), [He, Te] = (0, ye.useState)(null), [Xe, we] = (0, ye.useState)(null), De = (0, ye.useRef)(null), Ye = (0, ye.useCallback)((ee => {
        De.current = ee, we(ee)
      }), []), Ve = (0, ye.useRef)(0), ae = (0, ye.useRef)(null), ce = (0, ye.useRef)({
        x: 0,
        y: 0
      }), [xe, Le] = (0, ye.useState)(0), Ce = (0, ye.useMemo)((() => function(ee) {
        const ie = [];
        for (let ye = 0; ye < oe.n; ye++) {
          var He;
          ie.push(null !== (He = ee[ye]) && void 0 !== He ? He : null)
        }
        return ie
      }((0, Re.i)(ie.getPlayerCosmetics().emote))), [ie, xe]);
      (0, qe.e)("cosmeticsUpdated", (ee => {
        ee.some((ee => ee.local && "emote" === ee.te)) && Le((ee => ee + 1))
      }));
      const ve = (0, ye.useRef)(!1),
        ue = (0, ye.useCallback)((function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === ee && (0, ge.g)(), ve.current = ie, ce.current = {
            x: 0,
            y: 0
          }, Ye(null), Te(ee)
        }), [Ye]),
        me = (0, ye.useCallback)((() => {
          Te(null), Ye(null), ce.current = {
            x: 0,
            y: 0
          }
        }), [Ye]),
        le = (0, ye.useCallback)((ee => {
          if (Date.now() < Ve.current) return;
          const ie = (0, Je.l)(ee),
            He = !!ie.holdUntilMove,
            ye = He ? 600 : Math.ceil(1e3 * ie.animation.animation_length / Je.e) + 200;
          Ve.current = Date.now() + ye, ae.current = ee, ke.gameBridge.send("playEmote", ee), ke.gameBridge.send("applyTemporaryThirdPerson", He ? {} : {
            durationMs: ye
          })
        }), []);
      (0, Ke.f)("requestToggleEmoteWheel", (() => {
        null === He ? Pe() && ue("click") : me()
      })), (0, Ke.f)("requestEmoteWheelHoldOpen", (() => {
        null === He && Pe() && ue((0, Be.e)() ? "hold" : "click")
      })), (0, Ke.f)("requestEmoteWheelPadOpen", (ee => {
        null !== He || !Pe() || (0, Oe.e)() || (0, de.q)() || ue("pad", ee)
      })), (0, Ke.f)("requestEmoteRepeatLast", (() => {
        if (null !== He || !Pe() || (0, Oe.e)() || (0, de.q)()) return;
        const ee = ae.current;
        null !== ee && Ce.includes(ee) ? le(ee) : ue("pad", !0)
      }));
      const Se = () => {
        const ee = De.current,
          ie = null !== ee ? Ce[ee] : null;
        null !== ie && "pad" === He && Date.now() < Ve.current || (me(), null !== ie && le(ie))
      };
      (0, Ke.f)("emoteWheelPadAim", (ee => {
        if ("pad" !== He) return;
        const ie = (0, Ee.E)(ee, oe.n, De.current);
        Ye(null !== ie && null !== Ce[ie] ? ie : null)
      })), (0, Ke.f)("requestEmoteWheelPadCommit", (ee => {
        "pad" !== He || ee && ve.current || Se()
      })), (0, Ke.f)("appManagerUpdated|activeInputDevice", (ee => {
        null !== He && "pad" === He !== ("gamepad" === ee) && me()
      })), (0, ye.useLayoutEffect)((() => (Ze = He, (0, Fe.q)("emoteWheel", "pad" === He), Ue.h.yR(Fe.l), () => {
        Ze = null, (0, Fe.q)("emoteWheel", !1), Ue.h.yR(Fe.l)
      })), [He]), (0, Ke.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === He && Se()
      })), (0, Ke.f)("requestEmoteWheelClose", (() => {
        null !== He && me()
      })), (0, Ke.f)("appManagerUpdated|gameState", (ee => {
        "inGame" !== ee && me()
      }));
      const ne = () => {
        (0, pe.o)() && me()
      };
      if ((0, Ke.f)("appManagerUpdated|openEverythingMenuName", ne), (0, Ke.f)("appManagerUpdated|openInGameMenuName", ne), (0, Ke.f)("pointerLockUpdate", (ee => {
          ee || "hold" !== He || me()
        })), (0, ye.useEffect)((() => {
          if (null === He) return;
          const ee = ee => {
            "Escape" === ee.key && (ee.stopImmediatePropagation(), ee.preventDefault(), me())
          };
          return document.addEventListener("keydown", ee, !0), () => {
            document.removeEventListener("keydown", ee, !0)
          }
        }), [He, me]), (0, be.e)(!0, "click" === He, "EmoteWheelOverlay"), (0, ye.useEffect)((() => {
          if ("hold" === He) return ke.gameBridge.send("holdEmoteWheel", !0), () => {
            ke.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [He]), (0, ye.useEffect)((() => {
          if ("hold" !== He) return;
          const ee = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ie = Ee.s * ee,
            ye = Ee.q * ee,
            be = ee => {
              let He = ce.current.x + ee.movementX,
                be = ce.current.y + ee.movementY;
              const Me = Math.hypot(He, be);
              if (Me > ie) {
                const ee = ie / Me;
                He *= ee, be *= ee
              }
              ce.current = {
                x: He,
                y: be
              }, Ye(function(ee, ie, He, ye) {
                if (Math.hypot(ee, ie) < He) return null;
                const be = (0, Ee.x)(ee, ie, oe.n);
                return null === ye[be] ? null : be
              }(He, be, ye, Ce))
            };
          return document.addEventListener("mousemove", be), () => {
            document.removeEventListener("mousemove", be)
          }
        }), [He, Ce, Ye]), null === He) return null;
      const je = "hold" === He || "pad" === He,
        se = null !== Xe ? Ce[Xe] : null,
        Ie = null !== se ? (0, Je.l)(se).displayName : ee("emotes:pickEmote");
      return (0, te.jsx)("div", {
        className: ze()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === He
        }),
        onMouseDown: ee => {
          ee.target === ee.currentTarget && me()
        },
        children: (0, te.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Ee.s + "rem",
            height: 2 * Ee.s + "rem"
          },
          children: [(0, te.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Ee.p} ${Ee.p}`,
            children: [Ce.map(((ie, He) => {
              const ye = null !== ie,
                be = je && He === Xe;
              return (0, te.jsx)("path", {
                d: Ae(He),
                className: ze()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: be,
                  EmoteWheelWedgeDisabled: !ye
                }),
                onClick: ee => {
                  ee.stopPropagation(), null !== ie && (ee => {
                    me(), le(ee)
                  })(ie)
                },
                "aria-label": null !== ie ? (0, Je.l)(ie).displayName : ee("emotes:emptySlot")
              }, He)
            })), (0, te.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Ee.g,
              cy: Ee.g,
              r: Ee.m
            }), (0, te.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Ee.g,
              cy: Ee.g,
              r: Ee.i
            }), je && null !== Xe && (0, te.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Ae(Xe)
            })]
          }), Ce.map(((ee, ie) => {
            const He = null !== ee,
              ye = je && ie === Xe,
              be = (0, Ee.z)(ie, oe.n),
              Me = Ee.e * Math.cos(be),
              Ke = Ee.e * Math.sin(be);
            return (0, te.jsx)("div", {
              className: ze()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: ye,
                EmoteWheelSlotIconDisabled: !He
              }),
              style: {
                left: `calc(50% + ${Me}rem)`,
                top: `calc(50% + ${Ke}rem)`,
                backgroundImage: He ? `url(${(0,We.g)("emote",ee)})` : void 0
              },
              "aria-hidden": !0
            }, ie)
          })), (0, te.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Ie
          })]
        })
      })
    }))
  },
  9654: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ze,
      h: () => Pe
    });
    var ye = He(59),
      be = He(27),
      Me = He(2591),
      Ke = He(3760);
    const Ue = 6,
      Fe = 4,
      Je = ["HudMove-inventory", "HudLocked-inventory"];

    function oe(ee) {
      let {
        left: ie,
        right: He,
        height: ye,
        rowTop: be,
        besideBottom: Me,
        obstacles: Ke
      } = ee;
      const Je = Ke.filter((ee => ee.left < He + Ue && ee.right > ie - Ue));
      let oe = Me;
      for (let Ue = 0; Ue <= Je.length; Ue++) {
        const ee = Je.filter((ee => ee.top < oe + Fe && ee.bottom > oe - ye - Fe));
        if (0 === ee.length) break;
        oe = Math.min(...ee.map((ee => ee.top))) - Fe
      }
      return oe === Me ? null : Math.ceil(be - oe)
    }

    function Re(ee) {
      return Array.from(ee.children).filter((ee => !ee.classList.contains("HotBarRow")))
    }

    function ke(ee) {
      return function(ee) {
        const ie = [],
          He = (ee, ye) => {
            const be = ee.getBoundingClientRect();
            if (be.width > 0 && be.height > 0) ie.push(ee);
            else if (ye < 2)
              for (const ie of Array.from(ee.children)) He(ie, ye + 1)
          };
        for (const ye of ee) He(ye, 0);
        return ie
      }(Re(ee).flatMap((ee => ee.classList.contains("AuraBarWrapper") ? [] : ee.classList.contains("BottomScreenStatBarList") ? Array.from(ee.children) : [ee])))
    }

    function qe(ee, ie) {
      var He;
      const ye = null === (He = ee.querySelector(":scope > .AuraBarWrapper")) || void 0 === He ? void 0 : He.getBoundingClientRect();
      return (ye && ye.height > 0 ? ye.top : ie) - Fe
    }
    const fe = ".BottomScreenMessage, [role='status']";

    function Te(ee, ie, He, ye, be) {
      const Me = ee => ee.map((ee => ee.getBoundingClientRect())),
        Ke = oe({
          ...He,
          obstacles: Me(He.obstacles.filter((ee => !ee.matches(fe))))
        }),
        Ue = ie.ownerDocument.defaultView,
        Fe = `${null===Ue||void 0===Ue?void 0:Ue.innerWidth}x${null===Ue||void 0===Ue?void 0:Ue.innerHeight}:${ye}:${Math.round(He.rowTop)}`,
        Je = ee.get(ie),
        Re = (null === Je || void 0 === Je ? void 0 : Je.at) === Fe ? (ke = Je.rise, qe = Ke, null === ke ? qe : null === qe ? ke : Math.max(ke, qe)) : Ke;
      var ke, qe;
      const Te = oe({
        ...He,
        besideBottom: null === Re ? He.besideBottom : He.rowTop - Re,
        obstacles: Me(He.obstacles)
      });
      return be && ee.set(ie, {
        at: Fe,
        rise: Re
      }), null !== Te && void 0 !== Te ? Te : Re
    }

    function pe(ee, ie, He, ye) {
      ee.classList.toggle(ie, null !== ye), null === ye ? ee.style.removeProperty(He) : ee.style.setProperty(He, `${ye}px`)
    }
    const Xe = new WeakMap,
      ze = new WeakMap,
      Be = "(orientation: portrait) and (max-width: 600px)";

    function Ee(ee, ie) {
      const He = ee.getBoundingClientRect();
      if (0 === He.width) return null;
      const ye = [He, ...Array.from(ee.children).filter((ee => !(ee => ie.contains(ee.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(ee))).map((ee => ee.getBoundingClientRect())).filter((ee => ee.width > 0))];
      return {
        left: Math.min(...ye.map((ee => ee.left))),
        top: Math.min(...ye.map((ee => ee.top))),
        right: Math.max(...ye.map((ee => ee.right))),
        bottom: Math.max(...ye.map((ee => ee.bottom)))
      }
    }

    function ge(ee) {
      let {
        slotsLeft: ie,
        slotsRight: He,
        width: ye,
        zoneRight: be
      } = ee;
      const Me = Math.max(0, Math.floor(He - ie - ye));
      return null === be ? 0 : Math.min(Me, Math.max(0, Math.ceil(be + Ue - ie)))
    }

    function Oe(ee) {
      var ie;
      const He = ee.getBoundingClientRect();
      if (0 === He.width) return null;
      const ye = null === (ie = ee.parentElement) || void 0 === ie ? void 0 : ie.getBoundingClientRect();
      return ye && ye.width > 0 ? Math.min(He.right, ye.left + ye.width * de) : He.right
    }
    const de = .35,
      We = new WeakMap,
      te = new WeakMap;

    function Ze(ee) {
      we(ee) && we(ee),
        function(ee) {
          var ie, He;
          const ye = ee.documentElement.classList;
          if (!ye.contains("TouchHotbar") || !ye.contains("TouchHotbarKeysAbove") || Je.some((ee => ye.contains(ee))) || !1 !== (null === (ie = ee.defaultView) || void 0 === ie || null === (He = ie.matchMedia) || void 0 === He ? void 0 : He.call(ie, Be).matches)) return;
          const be = ee.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            Me = null === be || void 0 === be ? void 0 : be.closest(".BottomMiddleElements"),
            Ke = null === be || void 0 === be ? void 0 : be.parentElement;
          if (!be || !Me || !Ke || Me.classList.contains("TouchInventoryOpen") || be.querySelector("[data-pressing]")) return;
          const Ue = Ee(be, ye),
            Fe = Ke.getBoundingClientRect().top,
            oe = Ue && Te(Xe, Me, {
              left: Ue.left,
              right: Ue.right,
              height: Ue.bottom - Ue.top,
              rowTop: Fe,
              besideBottom: qe(Me, Fe),
              obstacles: ke(Me).filter((ee => !ee.classList.contains("BottomScreenMessage")))
            }, `${Math.round(Ue.left)}:${Math.round(Ue.right-Ue.left)}x${Math.round(Ue.bottom-Ue.top)}`, !0);
          ze.has(Me) && ze.get(Me) === oe || (pe(Me, "KeysAboveUp", "--touch-keys-above-rise", oe), ze.set(Me, oe))
        }(ee)
    }

    function we(ee) {
      var ie, He, ye, be;
      const Me = ee.documentElement.classList;
      if (!Me.contains("TouchHotbar") || Me.contains("TouchHotbarKeysAbove") || Je.some((ee => Me.contains(ee))) || null === (ie = ee.defaultView) || void 0 === ie || null === (He = ie.matchMedia) || void 0 === He || !He.call(ie, De).matches) return !1;
      const Ke = ee.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Ue = null === Ke || void 0 === Ke ? void 0 : Ke.parentElement,
        Fe = null === Ke || void 0 === Ke ? void 0 : Ke.closest(".BottomMiddleElements"),
        oe = null === Fe || void 0 === Fe ? void 0 : Fe.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Ke || !Ue || !Fe || !oe || Fe.classList.contains("TouchInventoryOpen")) return !1;
      const Re = Ke.getBoundingClientRect();
      if (0 === Re.width) return !1;
      const fe = ee.querySelector(".JoystickZone"),
        Xe = oe.getBoundingClientRect(),
        ze = Ue.getBoundingClientRect().top,
        Be = ge({
          slotsLeft: Xe.left,
          slotsRight: Xe.right,
          width: Re.width,
          zoneRight: fe ? Oe(fe) : null
        }),
        Ee = We.get(Fe),
        de = Xe.left + Be,
        Ze = {
          shift: Be,
          rise: Te(te, Fe, {
            left: de,
            right: de + Re.width,
            height: Re.height,
            rowTop: ze,
            besideBottom: qe(Fe, ze),
            obstacles: ke(Fe)
          }, `${Be}:${Math.round(Re.width)}`, (null !== (ye = null === Ee || void 0 === Ee ? void 0 : Ee.shift) && void 0 !== ye ? ye : 0) === Be)
        };
      return (null === Ee || void 0 === Ee ? void 0 : Ee.shift) !== Ze.shift && Fe.style.setProperty("--touch-shop-above-shift", `${Ze.shift}px`), (null === Ee || void 0 === Ee ? void 0 : Ee.rise) !== Ze.rise && pe(Fe, "ShopAboveUp", "--touch-shop-above-rise", Ze.rise), We.set(Fe, Ze), (null !== (be = null === Ee || void 0 === Ee ? void 0 : Ee.shift) && void 0 !== be ? be : 0) !== Ze.shift
    }
    const De = "(orientation: landscape) and (max-height: 500px)";

    function Pe(ee, ie, He) {
      (0, ye.useLayoutEffect)((() => {
        var ie;
        const ye = null === (ie = ee.current) || void 0 === ie ? void 0 : ie.closest(".BottomMiddleElements");
        if (!ye || He) return;
        const Ue = new ResizeObserver((() => {
            qe(!1)
          })),
          Fe = () => {
            Ue.disconnect();
            const ee = document.querySelector(".JoystickZone");
            for (const ie of [ee, ye, ye.querySelector(".HotBarGameItemsContainer"), ...ke(ye)]) ie && Ue.observe(ie)
          };
        let Je = null,
          oe = !1;
        const qe = ee => {
            oe ||= ee, Je ??= requestAnimationFrame((() => {
              Je = null, oe && (oe = !1, Fe()), Ze(document)
            }))
          },
          fe = new MutationObserver((() => {
            qe(!0)
          }));
        fe.observe(ye, {
          childList: !0
        });
        for (const ee of Re(ye)) fe.observe(ee, {
          childList: !0,
          subtree: !0
        });
        Ze(document), Fe();
        const Te = () => {
            qe(!0)
          },
          pe = [(0, be.j)(Me.f, Te), (0, be.j)(Ke.c, Te)],
          Xe = new MutationObserver((() => {
            qe(!1)
          }));
        return ee.current && Xe.observe(ee.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          Xe.disconnect(), null !== Je && cancelAnimationFrame(Je), Ue.disconnect(), fe.disconnect();
          for (const ee of pe) ee()
        }
      }), [ee, ie, He])
    }
  },
  5501: (ee, ie, He) => {
    He.d(ie, {
      c: () => fe,
      e: () => Ee,
      f: () => Te,
      j: () => Be
    });
    var ye = He(59),
      be = He(5510),
      Me = He(4729),
      Ke = He(1351),
      Ue = He(5537),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1340),
      Re = He(1768),
      ke = He(5544),
      qe = He(1228);

    function fe(ee) {
      let {
        label: ie,
        onClick: He,
        checked: ye,
        circleInfoText: be,
        className: Ue,
        disabled: Fe,
        note: oe
      } = ee;
      return (0, qe.jsxs)("div", {
        "aria-disabled": Fe || void 0,
        "data-pad-focusable": !0,
        className: Je()("SettingBox CheckboxContainer", {
          [Ue]: Ue,
          SettingBoxDisabled: Fe
        }),
        onClick: () => {
          Fe || He(!ye)
        },
        children: [(0, qe.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, qe.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, qe.jsx)(Me.d, {
              className: "SettingsCheckbox",
              checked: ye,
              disabled: Fe,
              onChange: () => {}
            })
          }), (0, qe.jsxs)("div", {
            className: "CheckboxText",
            children: [ie, be && (0, qe.jsx)("span", {
              onClick: ee => ee.stopPropagation(),
              children: (0, qe.jsx)(Ke.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: be
              })
            })]
          })]
        }), oe && (0, qe.jsx)("div", {
          className: "SettingNote",
          children: oe
        })]
      })
    }

    function Te(ee) {
      let {
        name: ie,
        onChange: He,
        min: be,
        max: Me,
        step: Ue,
        initValue: Fe,
        circleInfoText: oe,
        format: Re,
        className: ke,
        padStep: fe,
        disabled: Te = !1,
        selectableMax: pe,
        cappedNote: Xe,
        note: Be,
        onChangeComplete: Ee
      } = ee;
      const [ge, Oe] = (0, ye.useState)(Fe), de = (0, ye.useRef)(Fe);
      (0, ye.useEffect)((() => {
        de.current = Fe, Oe(Fe)
      }), [Fe]);
      const We = void 0 !== pe && pe < Me,
        te = We ? {
          "--slider-selectable": (pe - be) / (Me - be)
        } : void 0,
        Ze = We && Xe ? Xe : Be;
      return (0, qe.jsxs)("div", {
        className: Je()("SettingBox SettingsSliderDiv", {
          [ke]: ke,
          SettingBoxDisabled: Te,
          SliderCapped: We
        }),
        style: te,
        children: [(0, qe.jsxs)("div", {
          className: "SliderText",
          children: [`${ie}: ${Re?Re(ge):ge}`, oe && (0, qe.jsx)(Ke.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oe
          })]
        }), (0, qe.jsx)("div", {
          className: "SliderDiv",
          children: (0, qe.jsx)(ze, {
            value: ge,
            min: be,
            max: Me,
            step: Ue,
            onChange: ee => {
              if (We && ee >= pe && ge === pe) return;
              const ie = We ? Math.min(ee, pe) : ee;
              de.current = ie, Oe(ie), He(ie)
            },
            onChangeComplete: Ee && (() => {
              Ee(de.current)
            }),
            format: Re,
            padStep: fe,
            disabled: Te
          })
        }), Ze && (0, qe.jsx)("div", {
          className: "SettingNote",
          children: Ze
        })]
      })
    }
    const pe = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Xe(ee) {
      var ie;
      return (null !== (ie = String(ee).split(".")[1]) && void 0 !== ie ? ie : "").length
    }

    function ze(ee) {
      let {
        value: ie,
        min: He,
        max: Me,
        step: Ke,
        onChange: Ue,
        orientation: Fe,
        reverse: Je,
        setIsChanging: oe,
        tooltip: Re,
        labels: fe,
        handleLabel: Te,
        format: ze,
        onChangeStart: Be,
        onChangeComplete: Ee,
        padStep: ge,
        disabled: Oe = !1
      } = ee;
      const de = (0, ye.useRef)(null),
        We = (0, ye.useRef)(null);
      (0, ye.useLayoutEffect)((() => {
        var ee, ie, He;
        const ye = null !== (ee = null === (ie = de.current) || void 0 === ie ? void 0 : ie.querySelector(".rangeslider")) && void 0 !== ee ? ee : null;
        null === ye || void 0 === ye || ye.setAttribute("data-pad-slider", ""), null === ye || void 0 === ye || ye.setAttribute("data-pad-focusable", ""), null === ye || void 0 === ye || null === (He = ye.querySelector(".rangeslider__handle")) || void 0 === He || He.setAttribute("data-pad-slider-handle", ""), We.current = ye
      }), []), (0, ye.useLayoutEffect)((() => {
        var ee, ie;
        Oe ? null === (ee = We.current) || void 0 === ee || ee.setAttribute("aria-disabled", "true") : null === (ie = We.current) || void 0 === ie || ie.removeAttribute("aria-disabled")
      }), [Oe]);
      const te = Math.max(Xe(Ke), Xe(He)),
        Ze = ee => {
          if (ee >= Me) return Me;
          if (ee <= He) return He;
          const ie = Number((Math.round((ee - He) / Ke) * Ke + He).toFixed(te));
          return Math.min(Me, Math.max(He, ie))
        },
        we = (0, ye.useRef)(Ee);
      we.current = Ee, (0, ye.useEffect)((() => {
        const ee = de.current;
        if (!ee) return;
        const ie = ee => {
          var ie;
          pe.has(ee.key) && (null === (ie = we.current) || void 0 === ie || ie.call(we))
        };
        return ee.addEventListener("keyup", ie), () => {
          ee.removeEventListener("keyup", ie)
        }
      }), []);
      const De = (0, ye.useRef)(!1);
      return (0, ke.d)(We, {
        adjust: ee => {
          if (Oe) return;
          const ye = null !== ge && void 0 !== ge ? ge : Math.max(Ke, Math.round((Me - He) / 20 / Ke) * Ke),
            be = Ze(ie + ee * ye * (Je ? -1 : 1));
          be !== ie && (null === Be || void 0 === Be || Be(), Ue(be), null === Ee || void 0 === Ee || Ee())
        },
        setFraction: ee => {
          if (Oe) return;
          const ye = Ze(He + (Je ? 1 - ee : ee) * (Me - He));
          ye !== ie && (De.current || (De.current = !0, null === Be || void 0 === Be || Be()), Ue(ye))
        },
        endDrag: () => {
          De.current && (De.current = !1, null === Ee || void 0 === Ee || Ee())
        }
      }), (0, qe.jsx)("div", {
        ref: de,
        style: {
          display: "contents"
        },
        children: (0, qe.jsx)(be.c, {
          value: ie,
          min: He,
          max: Me,
          step: Ke,
          onChange: ee => {
            Ue(Ze(ee))
          },
          orientation: Fe,
          reverse: Je,
          tooltip: Re,
          labels: fe,
          handleLabel: Te,
          format: ze,
          onChangeStart: () => {
            null === Be || void 0 === Be || Be(), null === oe || void 0 === oe || oe(!0)
          },
          onChangeComplete: () => {
            null === oe || void 0 === oe || oe(!1), null === Ee || void 0 === Ee || Ee()
          }
        })
      })
    }
    async function Be() {
      const ee = oe.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await ee.getResult() && (0, Re.reloadBloxd)()
    }

    function Ee(ee) {
      let {
        label: ie,
        options: He,
        value: ye,
        onChange: be,
        circleInfoText: Me
      } = ee;
      return (0, qe.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, qe.jsxs)("div", {
          className: "SliderText",
          children: [ie, Me && (0, qe.jsx)(Ke.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Me
          })]
        }), (0, qe.jsx)(Ue.b, {
          ariaLabel: ie,
          options: He,
          value: ye,
          onChange: be
        })]
      })
    }
  },
  5537: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1228);

    function Ke(ee) {
      let {
        options: ie,
        value: He,
        onChange: ye,
        ariaLabel: Ke,
        className: Ue,
        reselectable: Fe = !1,
        keepsFocus: Je = !1,
        padTabs: oe
      } = ee;
      const Re = void 0 !== oe;
      return (0, Me.jsx)("div", {
        className: be()("SegmentedToggle", Ue),
        role: "group",
        "aria-label": Ke,
        "data-pad-tabs": oe,
        children: ie.map((ee => {
          const ie = ee.value === He;
          return (0, Me.jsx)("button", {
            type: "button",
            "aria-pressed": ie,
            "data-pad-tab": Re || void 0,
            "data-pad-selected": Re && ie ? "true" : void 0,
            "data-pad-default-focus": Re && ie || void 0,
            "aria-label": ee.ariaLabel,
            title: ee.ariaLabel,
            className: be()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ie
            }),
            onMouseDown: Je ? ee => {
              ee.preventDefault()
            } : void 0,
            onClick: () => {
              ie && !Fe || ye(ee.value)
            },
            children: ee.label
          }, ee.value)
        }))
      })
    }
  },
  9476: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    var ye = He(2054);
    const be = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Me = ee => "string" === typeof ee.icon && "" !== ee.icon && "string" === typeof ee.keycode && be.test(ee.keycode),
      Ke = ee => "Space" === ee ? "_" : ye.k[ee]
  },
  9521: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(18);

    function be() {
      return !ye.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9629: (ee, ie, He) => {
    He.d(ie, {
      A: () => Re,
      E: () => Fe,
      G: () => ke,
      I: () => Je,
      K: () => fe,
      N: () => Me,
      d: () => be,
      g: () => Ue,
      i: () => ye,
      k: () => Te,
      n: () => qe,
      r: () => oe,
      u: () => Ke,
      y: () => pe
    });
    const ye = ee => ({
      left: ee.left,
      top: ee.top,
      right: ee.right,
      bottom: ee.bottom
    });

    function be(ee) {
      return {
        x: (ee.left + ee.right) / 2,
        y: (ee.top + ee.bottom) / 2
      }
    }

    function Me(ee) {
      return 0 === ee.length ? null : ee.reduce(((ee, ie) => ({
        left: Math.min(ee.left, ie.left),
        top: Math.min(ee.top, ie.top),
        right: Math.max(ee.right, ie.right),
        bottom: Math.max(ee.bottom, ie.bottom)
      })))
    }

    function Ke(ee, ie) {
      const He = Math.max(0, (ie - (ee.right - ee.left)) / 2),
        ye = Math.max(0, (ie - (ee.bottom - ee.top)) / 2);
      return {
        left: ee.left - He,
        top: ee.top - ye,
        right: ee.right + He,
        bottom: ee.bottom + ye
      }
    }

    function Ue(ee, ie) {
      return ie.x >= ee.left && ie.x <= ee.right && ie.y >= ee.top && ie.y <= ee.bottom
    }

    function Fe(ee, ie, He) {
      let ye = null,
        Me = 1 / 0;
      for (const {
          id: be,
          box: Ke
        }
        of ie) {
        const ie = (Ke.right - Ke.left) * (Ke.bottom - Ke.top);
        Ue(Ke, ee) && ie < Me && (Me = ie, ye = be)
      }
      if (null !== ye) return ye;
      let Fe = 1 / 0;
      for (const {
          id: Je,
          box: oe
        }
        of ie) {
        if (!Ue(Ke(oe, He), ee)) continue;
        const ie = be(oe),
          Me = Math.hypot(ee.x - ie.x, ee.y - ie.y);
        Me < Fe && (Fe = Me, ye = Je)
      }
      return ye
    }

    function Je(ee, ie, He) {
      return {
        left: He.left,
        top: He.top,
        right: ee - He.right,
        bottom: ie - He.bottom
      }
    }

    function oe(ee, ie, He, ye) {
      const be = (ee, ie, He) => Math.max(Math.min(ie, 0), Math.min(Math.max(He, 0), ee));
      return {
        x: be(ie, ye.left - ee.left, ye.right - ee.right),
        y: be(He, ye.top - ee.top, ye.bottom - ee.bottom)
      }
    }

    function Re(ee, ie, He, ye, be) {
      const Me = ee.dx * ye + ie,
        Ke = ee.dy * be + He,
        Ue = ee => Math.max(-1, Math.min(1, ee));
      return {
        dx: Ue(Me / ye),
        dy: Ue(Ke / be)
      }
    }

    function ke(ee, ie, He, ye) {
      return ie <= 0 || He <= 0 ? 1 : Math.max(.05, Math.min(1, ee / ie, ye / He))
    }

    function qe(ee, ie, He) {
      return Math.min(ee.right, ie.right) - Math.max(ee.left, ie.left) > He && Math.min(ee.bottom, ie.bottom) - Math.max(ee.top, ie.top) > He
    }

    function fe(ee, ie) {
      const He = (ee, ie, He, ye) => ie - ee > ye - He ? He - ee > ie - ye ? ye - ie : He - ee : ee < He ? He - ee : ie > ye ? ye - ie : 0;
      return {
        x: He(ee.left, ee.right, ie.left, ie.right),
        y: He(ee.top, ee.bottom, ie.top, ie.bottom)
      }
    }

    function Te(ee, ie, He) {
      return qe(ee, {
        left: 0,
        top: 0,
        right: ie,
        bottom: He
      }, 0)
    }

    function pe(ee, ie) {
      let {
        avoid: He = null,
        bounds: ye = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, be = 0, Me = 1 / 0;
      return ee.forEach(((ee, Ke) => {
        const Ue = ie.filter((ie => qe(ee, ie, 0))).length,
          Fe = null !== ye && (ee.left < ye.left || ee.top < ye.top || ee.right > ye.right || ee.bottom > ye.bottom),
          Je = Ue + (He && qe(ee, He, 0) ? 1e3 : 0) + (Fe ? 1e6 : 0);
        Je < Me && (be = Ke, Me = Je)
      })), be
    }
  },
  9620: (ee, ie, He) => {
    He.d(ie, {
      B: () => ge,
      E: () => Je,
      F: () => qe,
      J: () => ke,
      M: () => Re,
      e: () => Ue,
      h: () => Ee,
      l: () => Be,
      p: () => ze,
      q: () => Fe,
      s: () => fe,
      u: () => oe,
      y: () => Oe
    });
    var ye = He(9629),
      be = He(2560);
    const Me = {
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
        ...Object.fromEntries(be.A.map((ee => [ee, "menu"])))
      },
      Ke = ee => be.t.filter((ie => Me[ie] === ee)),
      Ue = new Set(Ke("cluster")),
      Fe = new Set(Ke("inventory")),
      Je = ee => "inventory" === ee || Fe.has(ee),
      oe = ee => {
        const ie = Me[ee];
        return void 0 === ie ? [] : [ie, ...oe(ie)]
      },
      Re = ee => [ee, ...oe(ee)],
      ke = (ee, ie, He) => "shop" === ee && ie ? He("inventory") ? ["inventory"] : He("bag") ? [ee, "bag"] : [ee] : [ee],
      qe = (ee, ie, He, be) => {
        const Me = ee => {
          const Me = ie[ee],
            {
              x: Ke,
              y: Ue
            } = Me && be(ee) ? (0, ye.K)(Me, He) : {
              x: 0,
              y: 0
            };
          return Me && {
            left: Me.left + Ke,
            top: Me.top + Ue,
            right: Me.right + Ke,
            bottom: Me.bottom + Ue
          }
        };
        return ee.flatMap((ee => {
          const Ke = ie[ee];
          if ("inventory" !== ee || !Ke || Ke.right - Ke.left <= He.right - He.left && Ke.bottom - Ke.top <= He.bottom - He.top) return [ee];
          const [Ue, Fe] = [Me("shop"), Me("bag")];
          return Ue && Fe && !(0, ye.n)(Ue, Fe, 0) ? ["shop", "bag"].filter(be) : [ee]
        }))
      },
      fe = new Map([
        ["cluster", Ue],
        ["inventory", Fe]
      ]),
      Te = ["cluster"],
      pe = [...Te, ...be.t.filter((ee => !Te.includes(ee) && !Me[ee]))],
      Xe = ee => [ee, ...Ke(ee).flatMap(Xe)],
      ze = pe.flatMap(Xe).map((ee => ({
        id: ee,
        label: `hudLayout:${ee}`,
        ...be.q[ee],
        parent: Me[ee]
      }))),
      Be = Object.fromEntries(ze.map((ee => [ee.id, ee]))),
      Ee = "data-hud-el";

    function ge(ee, ie, He, ye) {
      const be = He(function(ee, ie) {
          return "attack" !== ee || ie ? Be[ee].label : "hudLayout:attackContext"
        }(ee, ie)),
        Me = ye[ee];
      return Me ? He("hudLayout:slotWithKey", {
        slot: be,
        key: Me
      }) : be
    }

    function Oe(ee, ie, He, ye) {
      return ee.map((ee => ge(ee, ie, He, ye))).join(", ")
    }
  },
  9645: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Me,
      e: () => be,
      g: () => Ke,
      j: () => Re,
      l: () => oe,
      n: () => Je,
      r: () => Fe
    });
    var ye = He(2560);
    const be = ["J", "C", "A", "P", "U", "X", "G"],
      Me = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Ke(ee) {
      return ee ? ["X"] : ["P", "X"]
    }
    const Ue = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: ye.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function Fe(ee, ie, He) {
      const ye = ee.querySelector(".InGameUi .TouchComponentsButtons");
      if (!ye) return Ue;
      const Me = {},
        Ke = {};
      for (const Ue of be) {
        const ee = ye.querySelector(`.TouchSlot${Ue} > .TouchKey`);
        if (ee) {
          var Fe, Je;
          Me[Ue] = ee.cloneNode(!0);
          const ie = (null !== (Fe = null === (Je = ee.querySelector(".TouchKeyLabel")) || void 0 === Je ? void 0 : Je.textContent) && void 0 !== Fe ? Fe : "").split(/\s+/).filter((ee => !/[\d\xd7]/.test(ee))).join(" ");
          ie && (Ke[Ue] = ie)
        }
      }
      const oe = ie => {
          const He = ee.querySelector(`.InGameUi ${ie}`);
          return null !== He && !He.classList.contains("Hidden")
        },
        Re = [...ee.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((ee => ee.cloneNode(!0)));
      return {
        faces: Object.keys(Me).length > 0 ? Me : null,
        names: Ke,
        shop: oe(".TouchInventoryKey.ShopKey"),
        bag: oe(".TouchInventoryKey.BagKey"),
        sprint: oe(".TouchSprintHit"),
        items: Re.length > 0 ? Re : null,
        rowIcons: ie,
        pinnedIcons: He
      }
    }

    function Je(ee, ie) {
      const He = {};
      for (const ye of [...Ke(ie), "G"]) {
        const ie = ee.names[ye];
        ie && (He[Me[ye]] = ie)
      }
      return He
    }

    function oe(ee, ie) {
      const {
        faces: He
      } = ee;
      if (null === He) return [];
      const ye = new Set(Object.keys(He).map((ee => Me[ee])));
      return Ke(ie).filter((ee => !ye.has(Me[ee])))
    }

    function Re(ee, ie) {
      ee.replaceChildren(...[...ie.childNodes].map((ee => ee.cloneNode(!0))))
    }
  },
  9637: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      f: () => Je
    });
    var ye = He(9629),
      be = He(9620),
      Me = He(2560),
      Ke = He(2565);
    const Ue = 2,
      Fe = (ee, ie, He) => {
        const ye = (0, be.u)(ie).includes(ee) ? ee : (0, be.u)(ee).includes(ie) ? ie : null;
        if (null === ye || "joystick" === ye) return !1;
        const Ue = ye === ee ? ie : ee;
        if ("menu" === ye) return (0, Ke.u)(Ue, He.hudElements[Ue]);
        if ("hotbar" !== ye || !(0, be.E)(Ue)) return !0;
        if ((0, Me.K)(He.hudElements[Ue]) || (0, Me.K)(He.hudElements.inventory)) return !1;
        return !(He.hudLocked.includes(Ue) || He.hudLocked.includes("inventory")) || (0, Me.I)(He.hudElements.hotbar)
      };

    function Je(ee, ie, He, Je) {
      const oe = ee => (0, be.M)(ee).some((ee => (0, Me.m)(He.hudElements, ee) || (0, Ke.t)(ee, He, Je)));
      if (oe(ee)) return [];
      const Re = ee => {
          var ie, ye;
          return "bag" === ee && 1 !== (null !== (ie = null === (ye = He.hudElements.shop) || void 0 === ye ? void 0 : ye[2]) && void 0 !== ie ? ie : 1) || (0, be.M)(ee).some((ee => void 0 !== He.hudElements[ee]))
        },
        ke = be.s.get(ee),
        qe = ie.filter((ie => {
          let {
            id: He
          } = ie;
          return ke ? ke.has(He) && !oe(He) : He === ee
        })),
        fe = new Set;
      for (const be of ie) be.id === ee || null !== ke && void 0 !== ke && ke.has(be.id) || fe.has(be.id) || oe(be.id) || qe.some((ee => {
        let {
          id: ie,
          box: Me
        } = ee;
        return !Fe(ie, be.id, He) && (Re(ie) || Re(be.id)) && (0, ye.n)(Me, be.box, Ue)
      })) && fe.add(be.id);
      return [...fe]
    }
  },
  9529: (ee, ie, He) => {
    He.d(ie, {
      A: () => ke,
      E: () => qe,
      e: () => Me,
      g: () => Ue,
      i: () => Je,
      m: () => Fe,
      p: () => Ke,
      q: () => be,
      s: () => ye,
      u: () => fe,
      x: () => Re,
      z: () => oe
    });
    const ye = 14,
      be = 6,
      Me = (ye + be) / 2,
      Ke = 200,
      Ue = Ke / 2,
      Fe = Ke / 2 - 1,
      Je = be / ye * (Ke / 2),
      oe = (ee, ie) => -Math.PI / 2 + 2 * ee * Math.PI / ie,
      Re = (ee, ie, He) => {
        const ye = 2 * Math.PI / He;
        return (Math.round((Math.atan2(ie, ee) + Math.PI / 2) / ye) % He + He) % He
      },
      ke = .5,
      qe = (ee, ie, He) => Math.hypot(ee.x, ee.y) < ke ? He : Re(ee.x, ee.y, ie),
      fe = (ee, ie, He, ye, be) => {
        const Me = Math.PI / ie,
          Ke = oe(ee, ie),
          Ue = Ke - Me,
          Fe = Ke + Me,
          Je = (ee, ie) => `${He+ee*Math.cos(ie)} ${He+ee*Math.sin(ie)}`;
        return [`M ${Je(ye,Ue)}`, `L ${Je(be,Ue)}`, `A ${be} ${be} 0 0 1 ${Je(be,Fe)}`, `L ${Je(ye,Fe)}`, `A ${ye} ${ye} 0 0 0 ${Je(ye,Ue)}`, "Z"].join(" ")
      }
  },
  9566: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(59),
      be = He(9505),
      Me = He(2532);

    function Ke() {
      const ee = (0, Me.i)("shopInfo"),
        [, ie] = (0, ye.useReducer)((ee => ee + 1), 0);
      return (0, Me.g)("shopInfo", ie), !(0, be.b)(ee)
    }
  },
  8932: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me,
      i: () => ke,
      j: () => Re,
      l: () => Je,
      m: () => Ue,
      n: () => ye,
      q: () => qe,
      u: () => fe
    });
    const ye = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      be = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: ye
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Me = {
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
      Ke = ["pickBlock", "perspective"],
      Ue = ee => Ke.includes(ee) ? Ke : [ee],
      Fe = Object.fromEntries(be.flatMap((ee => {
        let {
          group: ie,
          actions: He
        } = ee;
        return He.map((ee => [ee, ie]))
      }))),
      Je = ee => Fe[ee],
      oe = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Re = ee => {
        var ie;
        return [Je(ee), ...null !== (ie = oe[ee]) && void 0 !== ie ? ie : []]
      },
      ke = new Set(["menu", "inventory", "keyboard"]),
      qe = {
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
      fe = new Set(["forward", "backward", "left", "right"])
  },
  8926: (ee, ie, He) => {
    He.d(ie, {
      A: () => Ze,
      C: () => oe,
      F: () => te,
      H: () => Pe,
      b: () => ze,
      f: () => ge,
      j: () => ke,
      l: () => qe,
      m: () => Ye,
      o: () => De,
      p: () => we,
      t: () => Ee,
      w: () => Ae,
      x: () => We,
      z: () => Be
    });
    var ye = He(8932),
      be = He(8935),
      Me = He(8912),
      Ke = He(8946);
    const Ue = ee => "pickBlock" === ee ? "perspective" : ee,
      Fe = (ee, ie) => {
        var He;
        const be = Ue(ie);
        return null !== (He = ee[be]) && void 0 !== He ? He : ye.g[be]
      },
      Je = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((ee => {
        let [ie, He] = ee;
        return [
          [ie, He],
          [He, ie]
        ]
      }))),
      oe = (ee, ie) => null !== ee && void 0 !== ee ? ee : "nintendo" === ie,
      Re = ee => oe((0, be.h)().swapConfirmBack, (0, be.k)()) && Je.get(ee) || ee,
      ke = ee => Fe((0, be.h)().bindings, Re(ee)),
      qe = ee => ye.g[Re(ee)],
      fe = Object.keys(ye.g),
      Te = ee => "gameplay" === (0, ye.l)(ee) ? ["gameplay"] : (0, ye.j)(ee),
      pe = (ee, ie) => {
        const He = Te(ie);
        return Te(ee).some((ee => He.includes(ee)))
      },
      Xe = (ee, ie, He) => {
        const be = Fe(ee, ie),
          Ke = new Set((0, ye.m)(ie)),
          Je = [...Ke];
        for (let ye = Je.pop(); ye; ye = Je.pop())
          for (const ie of fe) {
            const Me = Fe(ee, ie);
            Ke.has(ie) || Me !== He && Me !== be || !pe(ye, ie) || (Ke.add(ie), Je.push(ie))
          }
        const oe = {
          ...ee
        };
        for (const Re of Ke) {
          const ie = Fe(ee, Re) === be ? He : be,
            Ke = (0, ye.j)(Re).some((ee => ye.i.has(ee)));
          if ((0, Me.H)(ie) && Ke) return null;
          oe[Ue(Re)] = ie
        }
        for (const Me of Object.keys(oe)) oe[Me] === ye.g[Me] && delete oe[Me];
        return oe
      },
      ze = (ee, ie) => null !== Xe((0, be.h)().bindings, Re(ee), ie),
      Be = (ee, ie) => {
        if (ke(ee) === ie) return !0;
        const He = Xe((0, be.h)().bindings, Re(ee), ie);
        return !!He && ((0, be.l)({
          bindings: He
        }), !0)
      },
      Ee = (ee, ie) => {
        const He = (0, ye.m)(ie);
        return fe.filter((ie => Ue(ie) === ie && !He.includes(ie) && Fe(ee, Re(ie)) !== ke(ie)))
      },
      ge = ["southpaw", "triggersSwapped"],
      Oe = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      de = ee => Object.keys(Oe[ee]),
      We = (ee, ie) => "southpaw" === ee ? ie.swapSticks : de(ee).every((He => Fe(ie.bindings, He) === Oe[ee][He])),
      te = (ee, ie) => {
        const He = (0, be.h)();
        let Me = He.bindings;
        for (const be of de(ee)) {
          const He = ie ? Oe[ee][be] : ye.g[be];
          if (Me = Xe(Me, be, He), !Me) return !1
        }
        return (0, be.l)({
          swapSticks: "southpaw" === ee ? ie : He.swapSticks,
          bindings: Me
        }), !0
      },
      Ze = () => {
        (0, be.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      we = () => (0, be.h)().swapSticks ? "RightStick" : "LeftStick",
      De = () => (0, be.h)().swapSticks ? "LeftStick" : "RightStick",
      Pe = ee => (0, be.h)().swapSticks && (0, Me.H)(ee),
      Ae = ee => Pe(ee) ? we() : De(),
      Ye = ee => {
        if (ye.u.has(ee)) return we();
        const ie = ye.q[ee];
        return ie && ("leaderboard" !== ie || (0, Ke.e)(ee, (0, Ke.c)())) ? ke(ie) : null
      }
  },
  8900: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ControllerCategory: () => EU,
      ControllerGlyph: () => Wb,
      ControllerRoot: () => EK,
      PadLobbyShortcuts: () => LK,
      PadSneakChip: () => wK,
      PadTooltip: () => PK,
      attachPressToContinue: () => jK,
      getBoundButton: () => oe.j,
      getControllerSettings: () => ke.h,
      getGlyphForNoaAction: () => oe.m,
      getInventoryCursorState: () => OU,
      getMenuShortcutButton: () => sH,
      getPadGlyphIconName: () => WK,
      getPadGlyphIconUrl: () => tK,
      getPadRepeatTiming: () => Te.d,
      handOverPadFocus: () => WU,
      hasActivePad: () => gU,
      isPadSteppingSlots: () => dU
    });
    const ye = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var be = He(1127),
      Me = He(1403),
      Ke = He(8907),
      Ue = He(77),
      Fe = He(18),
      Je = He(27),
      oe = He(8926),
      Re = He(8954),
      ke = He(8935),
      qe = He(8962),
      fe = He(8912),
      Te = He(9392),
      pe = He(9400),
      Xe = He(1657);
    const ze = (ee, ie, He) => Math.max(ie, Math.min(He, ee)),
      Be = ee => Math.min(ee.width, ee.height) / 720,
      Ee = ee => Math.max(.15, ee);
    class ge {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(ee, ie) {
        const He = Math.hypot(ee.x, ee.y) >= (ee => Math.max(.3, ee))(ie);
        return this.locked ? (this.locked = He, !1) : He
      }
    }
    const Oe = (ee, ie) => {
        const He = ze(ie.dtMs, 0, 100),
          ye = He / 1e3,
          be = Be(ie.viewport) * (ie.cursorSpeedPercent / 100),
          Me = (0, fe.k)(ie.stick, Ee(ie.moveDeadzone)),
          Ke = Math.hypot(Me.x, Me.y),
          Ue = ((ee, ie, He) => {
            if (ie < .3) return 0;
            const ye = He / 350;
            return ie >= .85 ? Math.min(1, ee + ye) : Math.max(0, ee - ye)
          })(ee.speedRamp, Ke, He);
        let Fe = ee.x,
          Je = ee.y;
        if (Ke > 0) {
          const ee = .45 + .55 * Ue,
            He = ie.context.overInteractive ? .45 : 1,
            oe = 1400 * (ee => {
              const ie = ze(ee, 0, 1);
              return .3 * ie + .7 * ie * ie
            })(Ke) * be * ee * He;
          Fe += Me.x / Ke * oe * ye, Je += Me.y / Ke * oe * ye
        }
        const oe = Math.hypot(ie.dpad.x, ie.dpad.y);
        if (oe > 0) {
          const ee = 500 * be;
          Fe += ie.dpad.x / oe * ee * ye, Je += ie.dpad.y / oe * ee * ye
        }
        const Re = ie.context.magnetTarget;
        if (Re && Ke < .3 && 0 === oe) {
          const ee = ((ee, ie, He, ye, be) => {
            const Me = ie.x - ee.x,
              Ke = ie.y - ee.y,
              Ue = Math.hypot(Me, Ke);
            if (0 === Ue) return {
              x: 0,
              y: 0
            };
            const Fe = Math.min(Ue, be * (1 - ye / .3));
            let Je = Me / Ue * Fe,
              oe = Ke / Ue * Fe;
            if (ye > 0) {
              const ee = He.x / ye,
                ie = He.y / ye,
                be = Je * ee + oe * ie;
              be < 0 && (Je -= be * ee, oe -= be * ie)
            }
            return {
              x: Je,
              y: oe
            }
          })({
            x: Fe,
            y: Je
          }, Re, Me, Ke, 120 * Be(ie.viewport) * ye);
          Fe += ee.x, Je += ee.y
        }
        return {
          x: ze(Fe, 0, Math.max(0, ie.viewport.width - 1)),
          y: ze(Je, 0, Math.max(0, ie.viewport.height - 1)),
          speedRamp: Ue
        }
      },
      de = ee => {
        const ie = (0, fe.k)(ee, .2);
        return 0 !== ie.x || 0 !== ie.y
      },
      We = (ee, ie) => {
        const He = (0, fe.k)(ee, .2),
          ye = Math.hypot(He.x, He.y);
        if (0 === ye) return {
          x: 0,
          y: 0
        };
        const be = ye * ye * 1600,
          Me = ze(ie, 0, 100) / 1e3;
        return {
          x: He.x / ye * be * Me,
          y: He.y / ye * be * Me
        }
      },
      te = (ee, ie) => "y" === ie ? ee.scrollHeight > ee.clientHeight + 1 : ee.scrollWidth > ee.clientWidth + 1,
      Ze = (ee, ie) => {
        if (!te(ee, ie)) return !1;
        const He = getComputedStyle(ee),
          ye = "y" === ie ? He.overflowY : He.overflowX;
        return "auto" === ye || "scroll" === ye
      },
      we = (ee, ie, He) => {
        for (let Me = ee instanceof HTMLElement ? ee : null !== (ye = null === ee || void 0 === ee ? void 0 : ee.parentElement) && void 0 !== ye ? ye : null; Me; Me = Me.parentElement) {
          var ye;
          if (Ze(Me, ie)) return Me;
          if (Me === He) return null
        }
        if (He) return null;
        const be = document.scrollingElement;
        return be instanceof HTMLElement && te(be, ie) ? be : null
      },
      De = new WeakMap,
      Pe = (ee, ie) => {
        const He = performance.now(),
          ye = De.get(ee);
        if (ye && ye.axis === ie && He - ye.atMs < 500 && (!ye.container || ye.container.isConnected)) return ye.container;
        const be = Ae(ee, ie);
        return De.set(ee, {
          axis: ie,
          atMs: He,
          container: be
        }), be
      },
      Ae = (ee, ie) => {
        let He = Ze(ee, ie) ? ee : null,
          ye = He ? He.clientWidth * He.clientHeight : 0;
        for (const be of ee.querySelectorAll("*")) {
          const ee = be.clientWidth * be.clientHeight;
          ee > ye && Ze(be, ie) && (He = be, ye = ee)
        }
        return He
      },
      Ye = (ee, ie, He) => "y" === ie ? He < 0 ? ee.scrollTop > 0 : ee.scrollTop + ee.clientHeight < ee.scrollHeight - 1 : He < 0 ? ee.scrollLeft > 0 : ee.scrollLeft + ee.clientWidth < ee.scrollWidth - 1,
      Ve = (ee, ie, He) => {
        "y" === ie ? ee.scrollBy({
          top: He,
          behavior: "instant"
        }) : ee.scrollBy({
          left: He,
          behavior: "instant"
        })
      },
      ae = ee => {
        if (!ee || ee === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const ie = ee.getBoundingClientRect(),
          He = Math.max(0, ie.left),
          ye = Math.max(0, ie.top);
        return new DOMRect(He, ye, Math.min(window.innerWidth, ie.right) - He, Math.min(window.innerHeight, ie.bottom) - ye)
      },
      ce = (ee, ie) => ee.left < ie.right && ie.left < ee.right && ee.top < ie.bottom && ie.top < ee.bottom;
    var xe = He(59),
      Le = He(1053),
      Ce = He.n(Le),
      ve = He(1228);
    let ue = 0,
      me = !1;
    class le {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(ee) {
        this.element = ee, this.shownKey = "", this.gap = null
      }
      show(ee) {
        const ie = this.element;
        if (!ie) return;
        const He = ee ? this.keepOnScreen(ie, ee) : null,
          ye = He ? `${He.left},${He.top},${He.width},${He.height}` : "";
        if (ye === this.shownKey) return;
        const be = "" === this.shownKey;
        this.shownKey = ye, ie.classList.toggle("Visible", null !== He), He && (ie.classList.toggle("Snap", be), ie.style.width = `${He.width}px`, ie.style.height = `${He.height}px`, ie.style.transform = `translate(${He.left}px, ${He.top}px)`, be && (ie.offsetWidth, ie.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(ee, ie) {
        var He;
        const ye = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!me){me=!0;const ee=document.createElement("div");ee.setAttribute("aria-hidden","true"),ee.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(ee),new ResizeObserver((()=>{ue++})).observe(ee)}return String(ue)})()}`;
        (null === (He = this.gap) || void 0 === He ? void 0 : He.key) !== ye && (this.gap = {
          px: parseFloat(getComputedStyle(ee).paddingLeft) || 0,
          key: ye
        });
        const be = this.gap.px + 2,
          Me = Math.max(ie.left, be),
          Ke = Math.max(ie.top, be),
          Ue = Math.min(ie.left + ie.width, window.innerWidth - be),
          Fe = Math.min(ie.top + ie.height, window.innerHeight - be);
        return Ue <= Me || Fe <= Ke ? ie : {
          left: Me,
          top: Ke,
          width: Ue - Me,
          height: Fe - Ke
        }
      }
    }
    const Se = ee => {
      let {
        placer: ie,
        className: He
      } = ee;
      const ye = (0, xe.useCallback)((ee => {
        ie.setElement(ee)
      }), [ie]);
      return (0, ve.jsx)("div", {
        ref: ye,
        className: Ce()("PadReticle", He),
        "aria-hidden": !0
      })
    };
    var ne = He(9408);
    const je = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const se = new class {
      constructor() {
        this.state = je, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(ee) {
        if (ie = this.state, He = ee, (ie.visible || He.visible) && (ie.visible !== He.visible || ie.x !== He.x || ie.y !== He.y || ie.pressed !== He.pressed)) {
          var ie, He;
          this.state = ee;
          for (const ie of this.listeners) ie(ee)
        }
      }
      hide() {
        this.set(je)
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
    };
    var Ie = He(9418);
    const he = (ee, ie) => {
        let {
          kind: He,
          holding: ye,
          hasPress: be,
          hasBack: Me,
          slotHasItem: Ke
        } = ie;
        switch (ee) {
          case "primary":
            return "slot" === He ? "slotPrimary" : "recipe" === He || "button" === He ? be ? "pressPrimary" : "click" : "textField" === He ? "openKeyboard" : null;
          case "secondary":
            return "slot" === He ? "slotSecondary" : "button" !== He && "recipe" !== He || !be ? null : "pressSecondary";
          case "quickMove":
            return "slot" === He && Ke ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === He && Ke && !ye ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return ye ? "cancel" : Me ? "pressBack" : "close"
        }
      },
      Ne = ee => {
        const ie = [];
        if (ee.hotbarPicking) return ie.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), ie.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), ie;
        if (ee.holding) "slot" === ee.kind ? (ie.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), ie.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === ee.kind && ie.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), ie.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), ie.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), ee.openButtonCloses && ie.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var He;
          "slot" === ee.kind && ee.slotHasItem ? (ie.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), ie.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), ie.push({
            actions: ["inventoryQuickMove"],
            labelKey: ee.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), ie.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), ie.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== ee.kind && "recipe" !== ee.kind || !ee.pressHints ? "button" === ee.kind || "recipe" === ee.kind ? ie.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === ee.kind && ie.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (ee.pressHints.primary && ie.push({
            actions: ["inventoryPrimary"],
            labelKey: ee.pressHints.primary
          }), ee.pressHints.secondary && ie.push({
            actions: ["inventorySecondary"],
            labelKey: ee.pressHints.secondary
          }));
          const ye = null === (He = ee.pressHints) || void 0 === He ? void 0 : He.back;
          ye && ie.push({
            actions: ["inventoryClose"],
            labelKey: ye
          });
          const be = [];
          ee.openButtonCloses && be.push("inventory"), ye || be.push("inventoryClose"), be.length > 0 && ie.push({
            actions: be,
            labelKey: "inventoryClose"
          })
        }
        return ie.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), ee.hasCategories ? ie.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : ee.hasList && ie.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), ie
      };
    var Ge = He(9426),
      re = He(2450);
    class Qe {
      constructor(ee) {
        this.probes = ee, this.byContainer = new Map, this.byParent = new Map
      }
      find(ee, ie) {
        const He = we(ee, "y", ie);
        if (!He) return null;
        let ye = this.byContainer.get(He);
        return ye || (this.probes.push({
          element: He,
          rect: yi(He.getBoundingClientRect())
        }), ye = {
          container: He,
          box: ae(He),
          group: Hi(He)
        }, this.byContainer.set(He, ye)), ye
      }
      findForParent(ee, ie) {
        let He = this.byParent.get(ee);
        return void 0 === He && (He = this.find(ee, ie), this.byParent.set(ee, He)), He
      }
    }
    const ei = new WeakMap;
    let ii = 0;
    const Hi = ee => {
        let ie = ei.get(ee);
        return ie || (ie = "el:" + ii++, ei.set(ee, ie)), ie
      },
      yi = ee => ({
        left: ee.left,
        top: ee.top,
        width: ee.width,
        height: ee.height
      }),
      bi = ee => ee.width > 0 && ee.height > 0,
      Mi = (ee, ie) => bi(ee) && ee.left + ee.width > 0 && ee.top + ee.height > 0 && ee.left < ie.width && ee.top < ie.height,
      Ki = (ee, ie, He) => {
        const ye = ee.top + ee.height / 2;
        return Mi(ee, ie) && (!He || ye >= He.top && ye <= He.bottom)
      },
      Ui = ee => ({
        x: ee.left + ee.width / 2,
        y: ee.top + ee.height / 2
      }),
      Fi = (ee, ie, He) => ee < 0 ? He >= 0 ? 0 : ie - 1 : ((ee + He) % ie + ie) % ie,
      Ji = ee => "Left" === ee || "Right" === ee,
      oi = (ee, ie, He) => {
        const ye = Ji(He),
          be = ye ? ee.top : ee.left,
          Me = ye ? ee.height : ee.width,
          Ke = ye ? ie.top : ie.left,
          Ue = ye ? ie.height : ie.width,
          Fe = Math.max(0, Math.max(Ke - (be + Me), be - (Ke + Ue)));
        return Me > 1.5 * Ue ? {
          gap: Fe,
          offset: Math.max(0, Ke - be) + .1 * Math.max(0, be - Ke)
        } : {
          gap: Fe,
          offset: Math.abs(Ke + Ue / 2 - (be + Me / 2))
        }
      },
      Ri = (ee, ie, He) => {
        const ye = ((ee, ie, He) => {
          const ye = Ui(ee),
            be = Ui(ie),
            Me = Ji(He) ? Math.min(ee.width, ie.width) / 4 : Math.min(ee.height, ie.height) / 4;
          switch (He) {
            case "Right":
              return be.x - ye.x >= Me ? Math.max(0, ie.left - (ee.left + ee.width)) : null;
            case "Left":
              return ye.x - be.x >= Me ? Math.max(0, ee.left - (ie.left + ie.width)) : null;
            case "Down":
              return be.y - ye.y >= Me ? Math.max(0, ie.top - (ee.top + ee.height)) : null;
            case "Up":
              return ye.y - be.y >= Me ? Math.max(0, ee.top - (ie.top + ie.height)) : null
          }
        })(ee, ie, He);
        if (null === ye) return null;
        const be = oi(ee, ie, He);
        return ye + 3 * be.gap + .5 * be.offset
      },
      ki = (ee, ie) => ie.visible || null !== ie.scrollGroup && ie.scrollGroup === ee.scrollGroup,
      qi = (ee, ie, He, ye) => {
        let be = null,
          Me = 1 / 0;
        for (const Ke of ie) {
          if (Ke.key === ee.key || !ki(ee, Ke) || !ye(Ke)) continue;
          const ie = Ri(ee.rect, Ke.rect, He);
          null !== ie && ie < Me && (be = Ke, Me = ie)
        }
        return be
      },
      fi = (ee, ie, He) => {
        const ye = qi(ee, ie, He, (() => !0));
        if (!ye || Ji(He) || null === ee.scrollGroup || ye.scrollGroup === ee.scrollGroup) return ye;
        const be = qi(ee, ie, He, (ie => 0 === oi(ee.rect, ie.rect, He).gap));
        return null !== be && void 0 !== be ? be : ye
      },
      Ti = (ee, ie, He) => {
        let ye = null,
          be = 1 / 0;
        for (const Me of ie) {
          if (!Me.visible || He && !He(Me)) continue;
          const ie = Ui(Me.rect),
            Ke = Math.hypot(ie.x - ee.x, ie.y - ee.y);
          Ke < be && (ye = Me, be = Ke)
        }
        return ye
      },
      Xi = ee => {
        const {
          rect: ie,
          clip: He
        } = ee;
        if (!He) return ie;
        const ye = Math.max(ie.left, He.left),
          be = Math.max(ie.top, He.top);
        return {
          left: ye,
          top: be,
          width: Math.min(ie.left + ie.width, He.left + He.width) - ye,
          height: Math.min(ie.top + ie.height, He.top + He.height) - be
        }
      },
      zi = (ee, ie) => ie.x >= ee.left && ie.x < ee.left + ee.width && ie.y >= ee.top && ie.y < ee.top + ee.height,
      Bi = (ee, ie) => {
        let He = null,
          ye = 1 / 0;
        for (const be of ie) {
          const ie = Xi(be);
          (be.visible || be.clip) && zi(ie, ee) && (ie.width * ie.height < ye && (He = be, ye = ie.width * ie.height))
        }
        return He
      },
      Ei = ee => {
        let ie = null;
        for (const He of ee) {
          if (!He.visible) continue;
          if (!ie) {
            ie = He;
            continue
          }
          const ee = Math.min(ie.rect.height, He.rect.height) / 2,
            ye = He.rect.top - ie.rect.top;
          (ye < -ee || Math.abs(ye) <= ee && He.rect.left < ie.rect.left) && (ie = He)
        }
        return ie
      },
      gi = (ee, ie, He, ye, be) => {
        const Me = be % ie,
          Ke = Math.floor(be / ie);
        return {
          left: ee.left + Me * He,
          top: ee.top + Ke * ye,
          width: ee.width,
          height: ee.height
        }
      },
      Oi = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      di = ".LazyLoadedItemWrapper",
      Wi = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      ti = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Zi = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      wi = ee => ee.hasAttribute("data-inven-idx") ? "slot" : ee.hasAttribute("data-recipe-key") ? "recipe" : ee.hasAttribute("data-craft-ingredient") || (0, re.r)(ee) ? "info" : (0, ne.N)(ee) ? "textField" : "button",
      Di = (ee, ie) => "slot" === ie ? Number(ee.getAttribute("data-inven-idx")) : null,
      Pi = ee => ee.matches(di) ? ee.querySelector(Wi) : ee,
      Ai = ee => {
        var ie, He;
        return {
          element: ee,
          recipe: null !== (ie = ee && (null === (He = Pi(ee)) || void 0 === He ? void 0 : He.getAttribute("data-recipe-key"))) && void 0 !== ie ? ie : null
        }
      },
      Yi = ee => {
        const ie = Pi(ee);
        if (!ie) return {
          kind: "pending",
          idx: null
        };
        const He = wi(ie);
        return {
          kind: He,
          idx: Di(ie, He)
        }
      },
      Vi = ee => {
        const ie = [];
        for (const [He, ye] of ti) {
          ee.matches(ye) && ie.push([He, ee]);
          for (const be of ee.querySelectorAll(ye)) ie.push([He, be])
        }
        return ie
      },
      ai = (ee, ie) => {
        for (const [He, ye] of ee)
          if (ye.contains(ie)) return He;
        return "other"
      },
      ci = (ee, ie, He, ye, be, Me, Ke, Ue) => {
        var Fe;
        const Je = ee.children,
          oe = yi(Je[0].getBoundingClientRect()),
          Re = [{
            element: Je[0],
            rect: oe
          }];
        if (Me.push(Re[0]), 0 === oe.width || 0 === oe.height) return;
        let ke = 1;
        for (; ke < Je.length && Math.abs(Je[ke].getBoundingClientRect().top - oe.top) < 1;) ke++;
        const qe = ee => {
            const ie = {
              element: Je[ee],
              rect: yi(Je[ee].getBoundingClientRect())
            };
            return Me.push(ie), Re.push(ie), ie.rect
          },
          fe = ke > 1 ? qe(1).left - oe.left : oe.width,
          Te = Je.length > ke ? qe(ke).top - oe.top : oe.height,
          pe = Ke.find(ee, ie);
        let Xe = null;
        if (pe) {
          var ze;
          const {
            container: ee,
            box: ie
          } = pe;
          Xe = null !== (ze = Ue.get(ee)) && void 0 !== ze ? ze : null, Xe || (Xe = {
            top: ee.scrollTop,
            left: ee.scrollLeft,
            box: ie,
            viewport: ye,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Ue.set(ee, Xe)), Xe.probes.push(...Re)
        }
        const Be = be.length;
        for (let de = 0; de < Je.length; de++) {
          var Ee, ge, Oe;
          const ee = Je[de],
            ie = gi(oe, ke, fe, Te, de),
            Me = ee.firstElementChild ? ee.querySelector(Wi) : null,
            Ke = Me ? wi(Me) : "pending";
          be.push({
            key: Hi(ee),
            rect: ie,
            panel: He,
            scrollGroup: null !== (Ee = null === pe || void 0 === pe ? void 0 : pe.group) && void 0 !== Ee ? Ee : null,
            visible: Ki(ie, ye, null === pe || void 0 === pe ? void 0 : pe.box),
            clip: null !== (ge = null === pe || void 0 === pe ? void 0 : pe.box) && void 0 !== ge ? ge : null,
            element: ee,
            kind: Ke,
            idx: Me ? Di(Me, Ke) : null,
            scrollContainer: null !== (Oe = null === pe || void 0 === pe ? void 0 : pe.container) && void 0 !== Oe ? Oe : null
          })
        }
        null === (Fe = Xe) || void 0 === Fe || Fe.targets.push(...be.slice(Be))
      },
      xi = ee => ee instanceof Element && null !== ee.closest(di),
      Li = ee => null !== ee.scrollContainer && xi(ee.element);
    class Ci {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(ee, ie, He, ye) {
        this.latched = {
          source: ee,
          focusKey: ie,
          sinceMs: He,
          hold: {
            id: ++this.presses,
            holdMs: ye
          }
        }
      }
      update(ee, ie, He) {
        const ye = this.latched;
        return ye ? ee && ie === ye.focusKey ? He - ye.sinceMs < ye.hold.holdMs ? null : (this.latched = null, ye.source) : (this.latched = null, null) : null
      }
      getHold() {
        var ee, ie;
        return null !== (ee = null === (ie = this.latched) || void 0 === ie ? void 0 : ie.hold) && void 0 !== ee ? ee : null
      }
      reset() {
        this.latched = null
      }
    }
    var vi = He(9428);
    const ui = {
        kind: "none"
      },
      mi = ee => ({
        x: ee.clientX,
        y: ee.clientY
      }),
      li = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Si {
      constructor() {
        this.hovered = ui, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(ee, ie, He, ye, be) {
        const Me = null !== ie ? {
            kind: "slot",
            idx: ie
          } : He ? {
            kind: "element",
            element: He
          } : ui,
          Ke = `${be}|${Math.round(ye.clientX)},${Math.round(ye.clientY)}`,
          Ue = (Fe = this.hovered, Je = Me, "slot" === Fe.kind && "slot" === Je.kind ? Fe.idx === Je.idx : "element" === Fe.kind && "element" === Je.kind ? Fe.element === Je.element : Fe.kind === Je.kind);
        var Fe, Je;
        if (Ue && Ke === this.signature) return;
        const oe = !Ue || be !== this.holding || "" === this.signature;
        this.signature = Ke, this.holding = be, this.lastPoint = ye;
        const Re = this.hovered;
        if (this.hovered = Me, "slot" === Me.kind) return this.leaveElement(Re, null, ye), void(oe ? ee.hover(Me.idx, ye) : ee.moveTo(ye));
        if (Ue) return void("element" === Me.kind ? (0, ne.t)(Me.element, Me.element, mi(ye)) : ee.hover(null, ye));
        ee.hover(null, ye);
        const ke = "element" === Me.kind ? Me.element : null;
        "element" === Re.kind ? (0, ne.t)(Re.element, ke, mi(ye)) : ke && (0, ne.t)(null, ke, mi(ye))
      }
      invalidate() {
        this.signature = ""
      }
      clear(ee) {
        const ie = this.hovered;
        this.hovered = ui, this.signature = "", "none" !== ie.kind && (this.leaveElement(ie, null, this.lastPoint), ee && "slot" === ie.kind && ee.hover(null, this.lastPoint))
      }
      leaveElement(ee, ie, He) {
        "element" === ee.kind && (0, ne.t)(ee.element, ie, mi(He))
      }
    }
    class ni {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(ee, ie) {
        de(ee) && (this.lastTiltedMs = ie)
      }
      allowsClick(ee) {
        return ee - this.lastTiltedMs > 150
      }
    }
    class ji {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(ee) {
        return 0 !== (0, fe.k)(ee, .2).y
      }
      step(ee, ie, He) {
        ee !== this.container && (this.container = ee, this.remainder = 0);
        const ye = We(ie, He).y;
        if (0 === ye) return this.remainder = 0, !1;
        const be = this.remainder + ye,
          Me = Math.trunc(be);
        if (this.remainder = be - Me, 0 === Me) return !1;
        const Ke = ee.scrollTop;
        return ee.scrollTop = Ke + Me, ee.scrollTop !== Ke
      }
      current() {
        var ee;
        return null !== (ee = this.container) && void 0 !== ee && ee.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var si = He(9430);
    const Ii = "[data-pad-inventory-default]",
      Ni = ".HotBarGameItemsContainer .InvenItem.Selected",
      Gi = {
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
      ri = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Qi = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      eH = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      iH = [...Qi, ...eH],
      HH = () => {
        return ee = (0, oe.j)("inventory"), !iH.map(oe.j).includes(ee) && !(0, fe.H)(ee);
        var ee
      },
      yH = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      bH = (ee, ie) => {
        const He = !(null === ie || void 0 === ie || !ie.isHolding());
        return function(ee, ie) {
          const He = ee.find((ee => ee.visible && ie(ee)));
          if (He) return He;
          for (var ye = arguments.length, be = new Array(ye > 2 ? ye - 2 : 0), Me = 2; Me < ye; Me++) be[Me - 2] = arguments[Me];
          for (const Ke of be) {
            const ie = Ei(ee.filter(Ke));
            if (ie) return ie
          }
          return Ei(ee)
        }(ee, (ee => {
          const {
            element: ie
          } = ee;
          return ie.matches(Ii) || null !== ie.querySelector(Ii) || ie.matches(Ni)
        }), (ee => "slot" === ee.kind ? He || null !== ee.idx && !(null === ie || void 0 === ie || !ie.hasItemAt(ee.idx)) : "recipe" === ee.kind || "pending" === ee.kind), (ee => "slot" === ee.kind || "button" === ee.kind))
      };
    class MH {
      constructor() {
        this.set = null, this.observer = new MutationObserver((ee => {
          ee.some((ee => !xi(ee.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = ee => {
          this.scrolled(ee.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const ee = [],
              ie = [];
            let He = !1;
            const ye = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              be = new Map,
              Me = new Qe(ie);
            for (const Re of document.querySelectorAll(Oi)) {
              const oe = Vi(Re);
              He ||= null !== Re.querySelector(".CreativeCategoryTab");
              for (const He of Re.querySelectorAll(`${di}:first-child`)) {
                const Ke = He.parentElement;
                ci(Ke, Re, ai(oe, Ke), ye, ee, ie, Me, be)
              }
              for (const He of Re.querySelectorAll(Wi)) {
                var Ke, Ue, Fe, Je;
                if (He.closest(di) || He.closest("[data-pad-ignore]")) continue;
                const ke = null === (Ke = He.parentElement) || void 0 === Ke ? void 0 : Ke.closest(Wi);
                if (ke && Re.contains(ke)) continue;
                const qe = wi(He),
                  fe = Di(He, qe);
                if (-1 === fe) continue;
                const Te = yi(He.getBoundingClientRect());
                ie.push({
                  element: He,
                  rect: Te
                });
                const pe = Me.findForParent(He.parentElement, Re),
                  Xe = pe && !be.has(pe.container) ? pe : null;
                (Xe ? bi(Te) : Mi(Te, ye)) && ee.push({
                  key: Hi(He),
                  rect: Te,
                  panel: ai(oe, He),
                  scrollGroup: null !== (Ue = null === Xe || void 0 === Xe ? void 0 : Xe.group) && void 0 !== Ue ? Ue : null,
                  visible: Ki(Te, ye, null === Xe || void 0 === Xe ? void 0 : Xe.box),
                  clip: null !== (Fe = null === Xe || void 0 === Xe ? void 0 : Xe.box) && void 0 !== Fe ? Fe : null,
                  element: He,
                  kind: qe,
                  idx: fe,
                  scrollContainer: null !== (Je = null === Xe || void 0 === Xe ? void 0 : Xe.container) && void 0 !== Je ? Je : null
                })
              }
            }
            for (const [Re, ke] of be) ke.holdsOthers = ie.some((ee => ee.element !== Re && Re.contains(ee.element) && !ee.element.closest(di)));
            const oe = new Map;
            for (const Re of ee) oe.set(Re.element, Re);
            return {
              targets: ee,
              byElement: oe,
              hasCategories: He,
              probes: ie,
              scrollers: be
            }
          })(), this.observer.disconnect();
          for (const ee of document.querySelectorAll(Oi)) this.observer.observe(ee, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(ee) {
        !this.set || ee instanceof Element && ((ee, ie) => {
          const He = ee.scrollers.get(ie);
          if (!He || He.holdsOthers || ie.scrollLeft !== He.left) return !1;
          const ye = ie.scrollTop - He.top;
          if (0 === ye) return !0;
          He.top = ie.scrollTop;
          for (const be of He.probes) be.rect.top -= ye;
          for (const be of He.targets) be.rect.top -= ye, be.visible = Ki(be.rect, He.viewport, He.box);
          return !0
        })(this.set, ee) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((ee => {
          return ie = ee.rect, He = ee.element.getBoundingClientRect(), !(ie.left === He.left && ie.top === He.top && ie.width === He.width && ie.height === He.height);
          var ie, He
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const KH = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(fe.A.map((ee => [ee, (0, Te.b)(fe.D)]))), this.stickRepeat = new fe.e((0, Te.b)(fe.cb)), this.pageUpTimer = (0, Te.b)(fe.Z), this.pageDownTimer = (0, Te.b)(fe.Z), this.stickGate = new ge, this.pointer = null, this.activePress = null, this.dropLatch = new Ci, this.scroller = new ji, this.scrollStickClick = new ni, this.hover = new Si, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new le, this.targets = new MH, this.hasCategories = !1, this.wasShowing = !1, this.state = vi.c, this.isActive = () => (0, Ge.i)(), this.isShowing = () => "inventory" === Re.d.getActiveConsumerName() && (0, qe.l)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Ge.e)()), (0, Ge.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var ee;
            this.reopenSlotIdx = null !== (ee = this.focused ? Yi(this.focused).idx : null) && void 0 !== ee ? ee : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Ge.u)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = ee => {
            (0, Ue.unstable_batchedUpdates)((() => {
              this.frame(ee)
            }))
          }, this.shouldBlockRealPointer = ee => ee.isTrusted && !(0, Xe.q)(ee) && this.isShowing(), this.noteRealPointer = ee => {
            ee instanceof MouseEvent && ee.isTrusted && !(0, Xe.q)(ee) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = ee.clientX, this.lastRealPointer.y = ee.clientY)
          }, this.wakePressActs = ee => {
            var ie;
            return ee === (0, oe.j)("inventoryClose") ? !(null !== (ie = (0, Ge.e)()) && void 0 !== ie && ie.isHolding()) : !(ee !== (0, oe.j)("inventory") || !HH()) || ((0, fe.H)(ee) ? this.isNavButton(ee) : eH.some((ie => (0, oe.j)(ie) === ee)))
          }
        }
        frame(ee) {
          var ie, He, ye, be, Me;
          const Ke = (0, Ge.e)();
          if (!(0, qe.l)()) return void(this.wasShowing && (this.endInteraction(Ke), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), ee.wokeDevice && this.focusWakePointer(!(null === Ke || void 0 === Ke || !Ke.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, ke.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const Ue = performance.now();
          this.handleNavigation(ee, Ue), this.handlePanels(ee), this.handlePaging(ee, Ue), this.handleScroll(ee), this.handleButtons(ee, Ue, Ke), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Fe = this.ensureFocus(),
            Je = this.focusContext(Ke);
          this.ring.show(Fe);
          const Re = "slot" === Je.kind ? Je.idx : null,
            fe = null !== (ie = null === (He = Je.actionElement) || void 0 === He ? void 0 : He.querySelector(".DoCraftItem")) && void 0 !== ie ? ie : Je.actionElement;
          this.pointer ? (this.hover.sync(Ke, Re, fe, ((ee, ie) => {
            const He = ie ? li() : 0;
            return {
              clientX: ee.x - He,
              clientY: ee.y - He
            }
          })(this.pointer, Je.holding), Je.holding), se.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: ee.isHeld((0, oe.j)("inventoryPrimary"))
          })) : Fe && this.focused && this.hover.sync(Ke, Re, fe, ((ee, ie) => {
            if (!ie) return {
              clientX: ee.left + ee.width - 10,
              clientY: ee.top + ee.height / 2 - 10
            };
            const He = li();
            return {
              clientX: ee.left + ee.width / 2 - He,
              clientY: ee.top + ee.height / 2 - He
            }
          })(Fe, Je.holding), Je.holding), this.publishState({
            showing: !0,
            kind: Je.kind,
            holding: Je.holding,
            slotHasItem: Je.slotHasItem,
            pressHints: null !== (ye = null === (be = Je.press) || void 0 === be ? void 0 : be.hints) && void 0 !== ye ? ye : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Li(this.focusTarget),
            openButtonCloses: HH(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Je.kind && !(null === (Me = Je.actionElement) || void 0 === Me || !Me.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(ee) {
          var ie;
          const He = (0, qe.e)();
          if (!He) return;
          this.targets.revalidate();
          const ye = this.getTargets().targets;
          this.setFocus(null !== (ie = Bi(He, ye)) && void 0 !== ie ? ie : ee ? Ti(He, ye, (ee => {
            let {
              rect: ie
            } = ee;
            const ye = Math.max(ie.left - He.x, 0, He.x - (ie.left + ie.width)),
              be = Math.max(ie.top - He.y, 0, He.y - (ie.top + ie.height));
            return Math.hypot(ye, be) <= Math.min(ie.width, ie.height) / 2
          })) : null, !1), "cursor" === (0, ke.h)().inventoryNavigation && (this.pointer = {
            x: He.x,
            y: He.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const ee = this.lastRealPointer;
          if (!ee || "keyboardMouse" !== Fe.e.get("activeInputDevice")) return;
          const ie = document.elementFromPoint(ee.x, ee.y);
          ie && (0, ne.t)(null, ie, ee)
        }
        endInteraction(ee) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const ie of this.dpadTimers.values()) ie.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(ee), this.ring.hide(), this.releasePointer(), this.publishState(vi.c)
        }
        getTargets() {
          const ee = this.targets.get();
          return this.hasCategories = ee.hasCategories, ee
        }
        currentTarget() {
          var ee;
          return this.focused && null !== (ee = this.getTargets().byElement.get(this.focused)) && void 0 !== ee ? ee : null
        }
        readFocusRect() {
          const ee = this.focused;
          if (null === ee || void 0 === ee || !ee.isConnected || !ee.closest(Oi)) return null;
          const ie = ee.getBoundingClientRect();
          return ie.width > 0 && ie.height > 0 ? {
            left: ie.left,
            top: ie.top,
            width: ie.width,
            height: ie.height
          } : null
        }
        ensureFocus() {
          const ee = this.readFocusRect();
          if (ee || this.pointer) return ee;
          const {
            targets: ie,
            byElement: He
          } = this.getTargets();
          let ye = null,
            be = !1;
          if (this.lastRect) ye = Ti(Ui(this.lastRect), ie);
          else {
            var Me, Ke;
            const ee = ((ee, ie) => {
                const He = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return He ? bH(ee.filter((ee => He.contains(ee.element))), ie) : null
              })(ie, (0, Ge.e)()),
              Ue = ie.find((ee => null !== ee.idx && ee.idx === this.reopenSlotIdx)),
              Fe = document.querySelector(Ni);
            be = null !== ee || void 0 !== Ue, ye = null !== (Me = null !== (Ke = null !== ee && void 0 !== ee ? ee : Ue) && void 0 !== Ke ? Ke : Fe && He.get(Fe)) && void 0 !== Me ? Me : Ei(ie)
          }
          return this.setFocus(ye, be), this.lastRect
        }
        setFocus(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          ee && (this.focused = ee.element, this.focusTarget = ee, this.panelMemory.set(ee.panel, ee.element), ie && ee.scrollContainer && ((ee, ie) => {
            const He = ee.getBoundingClientRect(),
              ye = ae(ie),
              be = ie.scrollTop;
            return He.top < ye.top ? ie.scrollTop -= ye.top - He.top : He.bottom > ye.bottom && (ie.scrollTop += He.bottom - ye.bottom), ie.scrollTop !== be
          })(ee.element, ee.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, ke.h)().inventoryNavigation) {
              if (this.lastRect) {
                const ee = Ui(this.lastRect);
                this.pointer = {
                  x: ee.x,
                  y: ee.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const ee = this.lastRect ? Ui(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: ee.x,
            y: ee.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, se.hide()
        }
        hoverAtPointer() {
          var ee;
          const ie = Bi(this.pointer, this.getTargets().targets);
          this.focusTarget = ie, (null === ie || void 0 === ie ? void 0 : ie.element) !== this.focused && (this.focused = null !== (ee = null === ie || void 0 === ie ? void 0 : ie.element) && void 0 !== ee ? ee : null, ie && (this.panelMemory.set(ie.panel, ie.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(ee, ie) {
          const He = this.focusTarget,
            ye = He && (0, ke.h)().cursorMagnetism ? Ui(Xi(He)) : null;
          this.pointer = Oe(this.pointer, {
            stick: ee.leftStick,
            moveDeadzone: (0, ke.h)().moveDeadzone,
            dpad: ie,
            dtMs: ee.dtMs,
            cursorSpeedPercent: (0, ke.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: ye
            }
          })
        }
        move(ee) {
          this.targets.revalidate();
          const ie = this.currentTarget();
          ie && this.setFocus(fi(ie, this.getTargets().targets, ee))
        }
        step(ee) {
          const ie = this.pointer;
          if (ie && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((ee, ie, He) => {
            var ye;
            const be = {
              key: "",
              rect: {
                left: ee.x,
                top: ee.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (ye = fi(be, ie, He)) && void 0 !== ye ? ye : Ti(ee, ie)
          })(ie, this.getTargets().targets, ee));
          this.move(ee)
        }
        isNavButton(ee) {
          return !Qi.some((ie => (0, oe.j)(ie) === ee)) && !(ee === (0, oe.j)("inventory") && HH())
        }
        handleNavigation(ee, ie) {
          const He = (0, ke.h)().inventoryNavigation,
            ye = {
              x: 0,
              y: 0
            };
          let be = null;
          for (const Fe of fe.A) {
            const Me = this.isNavButton(Fe) && ee.isHeld(Fe);
            Me && (ye.x += Gi[Fe].x, ye.y += Gi[Fe].y), this.dpadTimers.get(Fe).update(Me, ie) && "cursor" !== He && (be ??= Fe)
          }
          const Me = this.stickGate.update(ee.leftStick, (0, ke.h)().moveDeadzone);
          if (be && (this.step(be), this.stickGate.lock()), "slot" !== He) {
            const ie = ((ee, ie, He, ye) => "hybrid" !== ee ? "cursor" === ee : !ye && (ie || He))(He, null !== this.pointer, Me, null !== be);
            return ie && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(ee, "cursor" === He ? ye : {
              x: 0,
              y: 0
            }))
          }
          const Ke = (0, fe.k)(ee.leftStick, (0, ke.h)().moveDeadzone),
            Ue = this.stickRepeat.update(Me ? (0, fe.gb)(Ke) : null, ie);
          Ue && this.move(Ue)
        }
        applyCategoryPlace() {
          const ee = this.placeAfterCategory;
          if (!ee) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const ie = Ti(Ui(ee.rect), this.getTargets().targets, (ie => ie.scrollGroup === ee.scrollGroup));
          this.setFocus(ie, !1)
        }
        applyFocusRequest() {
          const ee = (0, Ge.u)();
          ee && (this.targets.invalidate(), this.setFocus((0, Ge.d)(this.getTargets().targets, ee)))
        }
        handlePanels(ee) {
          var ie, He, ye;
          const be = ee.wasPressed((0, oe.j)("inventoryPanelPrevious")),
            Me = ee.wasPressed((0, oe.j)("inventoryPanelNext"));
          if (!be && !Me) return;
          const {
            targets: Ke
          } = this.getTargets(), Ue = (Fe = ((ee, ie) => {
            const He = [];
            for (const be of ee) be.visible && !He.includes(be.panel) && He.push(be.panel);
            const ye = ee => {
              const ye = ie.indexOf(ee);
              return -1 === ye ? ie.length + He.indexOf(ee) : ye
            };
            return He.sort(((ee, ie) => ye(ee) - ye(ie)))
          })(Ke, Zi), Je = null !== (ie = null === (He = this.focusTarget) || void 0 === He ? void 0 : He.panel) && void 0 !== ie ? ie : null, Re = Me ? 1 : -1, 0 === Fe.length ? null : Fe[Fi(null === Je ? -1 : Fe.indexOf(Je), Fe.length, Re)]);
          var Fe, Je, Re;
          if (null === Ue) return;
          const ke = this.panelMemory.get(Ue),
            qe = Ke.filter((ee => ee.panel === Ue)),
            fe = null !== (ye = qe.find((ee => ee.element === ke && ee.visible))) && void 0 !== ye ? ye : bH(qe, (0, Ge.e)());
          this.setFocus(fe)
        }
        handlePaging(ee, ie) {
          const He = (0, oe.j)("menuPageUp"),
            ye = (0, oe.j)("menuPageDown"),
            be = this.pageUpTimer.update(ee.isHeld(He), ie),
            Me = this.pageDownTimer.update(ee.isHeld(ye), ie);
          if (!be && !Me) return;
          const Ke = Me ? 1 : -1;
          if (!ee.wasPressed(Me ? ye : He) && this.hasCategories) return;
          if ((ee => {
              const ie = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === ie.length) return !1;
              const He = ie.findIndex((ee => ee.classList.contains("Selected"))),
                ye = ie[Fi(He, ie.length, ee)];
              return (0, ne.s)(ye, (0, ne.E)(ye)), !0
            })(Ke)) {
            var Ue, Fe;
            this.targets.invalidate();
            const ee = null !== (Ue = null === (Fe = this.focusTarget) || void 0 === Fe ? void 0 : Fe.scrollGroup) && void 0 !== Ue ? Ue : null,
              ie = this.readFocusRect();
            return void(this.placeAfterCategory = null !== ee && ie && !this.pointer ? {
              rect: ie,
              scrollGroup: ee
            } : null)
          }
          const {
            targets: Je
          } = this.getTargets(), Re = this.currentTarget(), ke = Re && Li(Re) ? Re : Je.find((ee => Li(ee) && ee.visible));
          if (!ke) return;
          const qe = ((ee, ie, He, ye) => {
            if (null === ee.scrollGroup) return null;
            const be = Ui(ee.rect),
              Me = be.x,
              Ke = be.y + ("Down" === He ? ye : -ye);
            let Ue = null,
              Fe = 1 / 0;
            for (const Je of ie) {
              if (Je.scrollGroup !== ee.scrollGroup || Je.key === ee.key) continue;
              const ie = Ui(Je.rect);
              if ("Down" === He ? ie.y <= be.y : ie.y >= be.y) continue;
              const ye = Math.hypot(ie.x - Me, ie.y - Ke);
              ye < Fe && (Ue = Je, Fe = ye)
            }
            return Ue
          })(ke, Je, Ke > 0 ? "Down" : "Up", ke.scrollContainer.clientHeight);
          this.setFocus(null !== qe && void 0 !== qe ? qe : ke)
        }
        handleScroll(ee) {
          var ie, He, ye, be, Me, Ke;
          if (!this.scroller.isScrolling(ee.rightStick)) return void this.scroller.reset();
          const {
            targets: Ue
          } = this.getTargets(), Fe = this.pointer, Je = !Fe && this.focusTarget && Li(this.focusTarget) ? this.focusTarget.scrollContainer : null, oe = Fe && (null === (ie = Ue.find((ee => ee.clip && zi(ee.clip, Fe)))) || void 0 === ie ? void 0 : ie.scrollContainer), Re = null !== (He = null !== (ye = null !== (be = this.scroller.current()) && void 0 !== be ? be : oe) && void 0 !== ye ? ye : Je) && void 0 !== He ? He : null === (Me = Ue.find(Li)) || void 0 === Me ? void 0 : Me.scrollContainer;
          if (!Re || !this.scroller.step(Re, ee.rightStick, ee.dtMs)) return;
          this.targets.scrolled(Re);
          const ke = Fe || (null === (Ke = this.focusTarget) || void 0 === Ke ? void 0 : Ke.scrollContainer) !== Re ? null : this.readFocusRect();
          if (!ke) return;
          const qe = ae(Re),
            fe = Ui(ke);
          if (fe.y < qe.top || fe.y > qe.bottom) {
            const ee = this.focusTarget.scrollGroup,
              ie = Ti(fe, this.getTargets().targets, (ie => ie.scrollGroup === ee));
            this.setFocus(ie, !1)
          }
        }
        focusContext(ee) {
          const {
            kind: ie,
            idx: He
          } = this.focused ? Yi(this.focused) : {
            kind: null,
            idx: null
          }, ye = this.focused ? Pi(this.focused) : null, be = ye ? (0, si.e)(ye) : null;
          return {
            kind: ie,
            idx: He,
            actionElement: ye,
            press: be,
            hasPress: null !== be,
            hasBack: !(null === be || void 0 === be || !be.back),
            holding: ee.isHolding(),
            slotHasItem: null !== He && ee.hasItemAt(He)
          }
        }
        handleButtons(ee, ie, He) {
          var ye, be;
          if (!this.activePress || ee.isHeld(this.activePress.button) && (ye = this.activePress.target, be = this.focused, null !== ye.recipe ? Ai(be).recipe === ye.recipe : be === ye.element) || this.releasePress(), this.scrollStickClick.update(ee.rightStick, ie), !this.handleHotbarPick(ee, He)) {
            for (const [ye, be] of ri) {
              const Me = (0, oe.j)(be);
              if (!ee.wasPressed(Me) || "openButton" === ye && !HH()) continue;
              if ("RS" === Me && !this.scrollStickClick.allowsClick(ie)) continue;
              const Ke = this.focusContext(He),
                Ue = he(ye, Ke);
              Ue && this.runIntent(Ue, Ke, Me, He)
            }
            this.handleDrop(ee, ie, He)
          }
        }
        handleHotbarPick(ee, ie) {
          const He = this.hotbarPick;
          if (!He) return !1;
          const ye = ee.wasPressed((0, oe.j)("inventoryPrimary")) || ee.wasPressed((0, oe.j)("inventoryHotbarSwap"));
          if (!ye && !ee.wasPressed((0, oe.j)("inventoryClose")) && !ie.isHolding()) return !(ee.wasPressed((0, oe.j)("inventory")) && HH());
          const be = this.focusTarget;
          ye && "hotbar" === (null === be || void 0 === be ? void 0 : be.panel) && null !== be.idx && be.idx !== He.idx && (ie.swapWithHotbar(be.idx, He.idx), this.afterAction()), this.hotbarPick = null;
          const Me = He.element.isConnected ? this.getTargets().byElement.get(He.element) : void 0;
          return Me && this.setFocus(Me), !0
        }
        startHotbarPick(ee) {
          var ie;
          const {
            targets: He,
            byElement: ye
          } = this.getTargets(), be = document.querySelector(Ni), Me = null !== (ie = be && ye.get(be)) && void 0 !== ie ? ie : He.find((ee => "hotbar" === ee.panel));
          Me && this.focused && (this.hotbarPick = {
            idx: ee,
            element: this.focused
          }, this.setFocus(Me))
        }
        focusKey() {
          return this.focused ? Hi(this.focused) : null
        }
        handleDrop(ee, ie, He) {
          const ye = (0, oe.j)("inventoryDrop");
          if (ee.wasPressed(ye)) {
            const ee = (be = this.focusContext(He)).holding ? {
              kind: "lJ"
            } : "slot" === be.kind && be.slotHasItem && null !== be.idx ? {
              kind: "slot",
              idx: be.idx
            } : null;
            return void(ee && (this.dropFrom(ee, !1, He), this.dropLatch.press(ee, this.focusKey(), ie, pe.d[(0, ke.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var be;
          const Me = this.dropLatch.update(ee.isHeld(ye), this.focusKey(), ie);
          Me && ((ee, ie, He) => "lJ" === ee.kind ? ie : !ie && He(ee.idx))(Me, He.isHolding(), He.hasItemAt) && (this.dropFrom(Me, !0, He), this.afterAction())
        }
        dropFrom(ee, ie, He) {
          "lJ" === ee.kind ? He.dropHeld(ie, this.slotPoint()) : He.dropSlot(ee.idx, ie)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (ee => {
            const ie = Ui(ee);
            return {
              clientX: ie.x,
              clientY: ie.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(ee, ie, He, ye) {
          const be = ie.idx,
            Me = ie.actionElement;
          switch (Me && yH.has(ee) && (0, Xe.v)(Me), ee) {
            case "slotPrimary":
              ye.primary(be, this.slotPoint());
              break;
            case "slotSecondary":
              ye.secondary(be, this.slotPoint());
              break;
            case "slotQuickMove":
              ye.quickMove(be, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(be);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(ie.press, "pressPrimary" === ee ? "primary" : "secondary", He);
              break;
            case "click":
              (0, ne.s)(Me, (0, ne.E)(Me));
              break;
            case "openKeyboard":
              (0, ne.N)(Me) && (0, ne.L)(Me);
              break;
            case "pressBack":
              ie.press.back();
              break;
            case "cancel":
              ye.cancel();
              break;
            case "close":
              return this.releasePress(), void ye.close()
          }
          this.afterAction()
        }
        startPress(ee, ie, He) {
          this.releasePress(), ee.press(ie) && (this.activePress = {
            handlers: ee,
            button: He,
            target: Ai(this.focused)
          })
        }
        releasePress() {
          var ee, ie, He;
          null === (ee = this.activePress) || void 0 === ee || null === (ie = (He = ee.handlers).release) || void 0 === ie || ie.call(He), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(ee) {
          ((ee, ie) => {
            var He, ye, be, Me, Ke, Ue;
            return ee.showing === ie.showing && ee.kind === ie.kind && ee.holding === ie.holding && ee.slotHasItem === ie.slotHasItem && (null === (He = ee.pressHints) || void 0 === He ? void 0 : He.primary) === (null === (ye = ie.pressHints) || void 0 === ye ? void 0 : ye.primary) && (null === (be = ee.pressHints) || void 0 === be ? void 0 : be.secondary) === (null === (Me = ie.pressHints) || void 0 === Me ? void 0 : Me.secondary) && (null === (Ke = ee.pressHints) || void 0 === Ke ? void 0 : Ke.back) === (null === (Ue = ie.pressHints) || void 0 === Ue ? void 0 : Ue.back) && ee.hasCategories === ie.hasCategories && ee.hasList === ie.hasList && ee.openButtonCloses === ie.openButtonCloses && ee.steppingSlots === ie.steppingSlots && ee.hotbarPicking === ie.hotbarPicking && ee.quickMoveToHotbar === ie.quickMoveToHotbar && ee.dropStackHold === ie.dropStackHold
          })(ee, this.state) || (this.state = ee, Je.h.yR(vi.e, ee))
        }
      },
      UH = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var FH = He(9434),
      JH = He(335),
      oH = He(1620),
      RH = He(8932);
    const kH = "[data-pad-secondary]",
      qH = ee => ee instanceof HTMLElement && (0, re.k)(ee) && !(0, re.r)(ee),
      fH = ee => {
        const ie = ee.querySelector(kH);
        if (ie && qH(ie)) return ie;
        for (const be of null !== (He = null === (ye = ee.parentElement) || void 0 === ye ? void 0 : ye.children) && void 0 !== He ? He : []) {
          var He, ye;
          if (be !== ee && be.matches(kH) && qH(be)) return be
        }
        return null
      },
      TH = (ee, ie, He, ye) => Math.max(0, Math.max(ee, He) - Math.min(ie, ye)),
      pH = (ee, ie, He, ye) => Math.max(0, Math.min(ie, ye) - Math.max(ee, He)),
      XH = (ee, ie, He) => {
        const ye = (ee.left + ee.right) / 2,
          be = (ee.top + ee.bottom) / 2,
          Me = (ie.left + ie.right) / 2,
          Ke = (ie.top + ie.bottom) / 2;
        if ("Left" === He || "Right" === He) {
          const Ue = "Right" === He ? 1 : -1;
          return {
            forwardGap: "Right" === He ? ie.left - ee.right : ee.left - ie.right,
            centreForward: (Me - ye) * Ue,
            sidewaysGap: TH(ee.top, ee.bottom, ie.top, ie.bottom),
            sidewaysOverlap: pH(ee.top, ee.bottom, ie.top, ie.bottom),
            centreSideways: Math.abs(Ke - be),
            startSideways: Math.abs(ie.top - ee.top),
            fromSidewaysSize: ee.bottom - ee.top,
            toSidewaysSize: ie.bottom - ie.top,
            toLength: ie.right - ie.left
          }
        }
        const Ue = "Down" === He ? 1 : -1;
        return {
          forwardGap: "Down" === He ? ie.top - ee.bottom : ee.top - ie.bottom,
          centreForward: (Ke - be) * Ue,
          sidewaysGap: TH(ee.left, ee.right, ie.left, ie.right),
          sidewaysOverlap: pH(ee.left, ee.right, ie.left, ie.right),
          centreSideways: Math.abs(Me - ye),
          startSideways: Math.abs(ie.left - ee.left),
          fromSidewaysSize: ee.right - ee.left,
          toSidewaysSize: ie.right - ie.left,
          toLength: ie.bottom - ie.top
        }
      },
      zH = ee => ee.centreForward > .5 && ee.forwardGap >= -ee.toLength / 2,
      BH = ee => {
        const ie = ee.sidewaysOverlap > 0 ? 0 : 2 * ee.fromSidewaysSize,
          He = ee.fromSidewaysSize > 1.5 * ee.toSidewaysSize ? ee.startSideways : ee.centreSideways;
        return Math.max(0, ee.forwardGap) + 3 * ee.sidewaysGap + ie + .1 * He
      },
      EH = (ee, ie) => pH(ee.top, ee.bottom, ie.top, ie.bottom) > 0 || ie.bottom - ie.top > ie.right - ie.left,
      gH = (ee, ie, He, ye, be, Me) => {
        const Ke = be ? dH(ee, ie, He, be) : new Set,
          Ue = tH(ee, ie, He, Ke);
        return Ue < 0 && Ke.size > 0 && Me ? OH(ee, ie, He, Me) : ye && Ue >= 0 ? WH(ee, ie, He, ye, Ue, Ke) : Ue
      },
      OH = (ee, ie, He, ye) => {
        const be = new Set,
          Me = tH(ee, ie, "Up", be) >= 0,
          Ke = tH(ee, ie, "Down", be) >= 0,
          Ue = new Set;
        return ie.forEach(((ie, He) => {
          const be = ie.top + ie.bottom < ee.top + ee.bottom;
          ye[He] && !(be ? Me : Ke) || Ue.add(He)
        })), tH(ee, ie, He, Ue)
      },
      dH = (ee, ie, He, ye) => {
        const be = new Set;
        return "Left" !== He && "Right" !== He || ie.forEach(((ie, He) => {
          ye[He] && pH(ee.top, ee.bottom, ie.top, ie.bottom) <= 0 && be.add(He)
        })), be
      },
      WH = (ee, ie, He, ye, be, Me) => {
        const Ke = XH(ee, ie[be], He).forwardGap;
        let Ue = be,
          Fe = ye[be],
          Je = 1 / 0;
        return ie.forEach(((ie, oe) => {
          const Re = ye[oe];
          if (Me.has(oe) || Re < Fe || Re === Fe && Ue === be) return;
          const ke = XH(ee, ie, He);
          if (!zH(ke) || ke.forwardGap < 0 || ke.forwardGap >= Ke) return;
          const qe = BH(ke);
          (Re > Fe || qe < Je) && (Ue = oe, Fe = Re, Je = qe)
        })), Ue
      },
      tH = (ee, ie, He, ye) => {
        let be = -1,
          Me = 1 / 0;
        if (ie.forEach(((ie, Ke) => {
            const Ue = ((ee, ie, He) => {
              const ye = XH(ee, ie, He);
              if (!zH(ye)) return null;
              const be = Math.max(0, ye.forwardGap);
              return ye.sidewaysOverlap <= 0 && ye.sidewaysGap > 2 * (be + 1) ? null : BH(ye)
            })(ee, ie, He);
            null !== Ue && Ue < Me && !ye.has(Ke) && (Me = Ue, be = Ke)
          })), be < 0) return -1;
        const Ke = ie[be],
          Ue = XH(ee, Ke, He).forwardGap;
        let Fe = Ue,
          Je = be;
        return ie.forEach(((ie, Me) => {
          if (Me === be || ye.has(Me) || !((ee, ie, He) => {
              const ye = "Left" === He || "Right" === He,
                be = ye ? pH(ee.top, ee.bottom, ie.top, ie.bottom) : pH(ee.left, ee.right, ie.left, ie.right),
                Me = ye ? Math.min(ee.bottom - ee.top, ie.bottom - ie.top) : Math.min(ee.right - ee.left, ie.right - ie.left);
              return be > 0 && be >= Me / 2
            })(ie, Ke, He)) return;
          const oe = XH(ee, ie, He);
          zH(oe) && oe.forwardGap + oe.toLength <= Ue + 1 && oe.forwardGap < Fe && (Fe = oe.forwardGap, Je = Me)
        })), Je
      },
      ZH = (ee, ie) => {
        let He = -1,
          ye = 1 / 0;
        return ie.forEach(((ie, be) => {
          const Me = Math.max(ie.left - ee.x, 0, ee.x - ie.right),
            Ke = Math.max(ie.top - ee.y, 0, ee.y - ie.bottom),
            Ue = Math.hypot(Me, Ke);
          Ue < ye && (ye = Ue, He = be)
        })), He
      },
      wH = (ee, ie) => {
        const He = Math.min(ee.bottom - ee.top, ie.bottom - ie.top) / 2;
        return Math.abs(ee.top - ie.top) > He ? ee.top - ie.top : ee.left - ie.left
      },
      DH = ee => {
        let ie = -1;
        for (let He = 0; He < ee.length; He++)(ie < 0 || wH(ee[He], ee[ie]) < 0) && (ie = He);
        return ie
      };
    var PH = He(1677),
      AH = He(9440),
      YH = He(9443);
    const VH = ee => {
        if ("death" !== ee || "inGame" !== Fe.e.get("gameState") || "off" === (0, ke.h)().quickChat || null === (0, PH.e)()) return !1;
        const ie = (0, oe.j)("chat");
        return ie !== (0, oe.j)("menuConfirm") && ie !== (0, oe.j)("menuBack")
      },
      aH = new AH.c;
    var cH = He(4653),
      xH = He(9446),
      LH = He(9451);
    const CH = ee => {
        let ie = null;
        for (const He of ee.querySelectorAll("[data-pad-tabs]"))(0, re.k)(He) && (!ie || Number(He.dataset.padTabs) < Number(ie.dataset.padTabs)) && (ie = He);
        return ie
      },
      vH = (ee, ie, He, ye) => {
        ee.focusWhenFound((() => {
          const be = ee.pickInitial(ie);
          if (be && !He.has(be) && (null === ye || void 0 === ye || !ye.contains(be))) return be;
          const Me = ((ee, ie) => {
              const He = ie => ee.getEnabledCandidates(ie).filter((ee => !ee.closest("[data-pad-tabs]")));
              for (const ye of (0, re.g)(ie)) {
                const ee = He(ye);
                if (ee.length > 0) return ee
              }
              return He(ie)
            })(ee, ie).filter((ee => !He.has(ee))),
            Ke = DH(Me.map((ee => ee.getBoundingClientRect())));
          return Ke >= 0 ? Me[Ke] : null
        }), 3e3)
      },
      uH = (ee, ie, He, ye) => {
        var be;
        const Me = ((ee, ie) => {
          if (0 === ee.length) return null;
          const He = ee.findIndex((ee => "true" === ee.dataset.padSelected));
          return He < 0 ? ie > 0 ? ee[0] : ee[ee.length - 1] : ee[(He + ie + ee.length) % ee.length]
        })([...He.querySelectorAll("[data-pad-tab]")].filter((ee => (0, re.k)(ee) && !(0, re.r)(ee))), ye);
        if (!Me) return;
        const Ke = null !== (be = null === ee || void 0 === ee ? void 0 : ee.getFocused()) && void 0 !== be ? be : null,
          Ue = !(null === Ke || void 0 === Ke || !Ke.isConnected) && He.contains(Ke),
          Fe = ee && !Ue ? new Set(ee.getEnabledCandidates(ie)) : null;
        (0, ne.d)(Me), ee && (Fe ? vH(ee, ie, Fe, He) : ee.setFocus(Me, {
          byUser: !0
        }))
      },
      mH = ee => {
        var ie;
        const He = ae(null !== (ie = we(ee, "x")) && void 0 !== ie ? ie : ee),
          ye = (0, re.d)(ee).filter((ee => !(0, re.r)(ee))),
          be = ye.filter((ee => ce(ee.getBoundingClientRect(), He)));
        return (be.length > 0 ? be : ye).sort(((ee, ie) => wH(ee.getBoundingClientRect(), ie.getBoundingClientRect())))
      },
      lH = (ee, ie, He) => {
        const ye = [...ie.querySelectorAll("[data-pad-row]")].filter(re.k),
          be = ee.getFocused(),
          Me = be ? ye.findIndex((ee => ee.contains(be))) : -1;
        let Ke = 0,
          Ue = He > 0 ? 0 : ye.length - 1;
        if (Me >= 0 && be) Ke = Math.max(0, mH(ye[Me]).indexOf(be)), Ue = Me + He;
        else if (be) {
          const ee = be.getBoundingClientRect(),
            ie = ye.map((ie => {
              const ye = ie.getBoundingClientRect();
              return He > 0 ? ye.top >= ee.top : ye.bottom <= ee.bottom
            }));
          Ue = He > 0 ? ie.indexOf(!0) : ie.lastIndexOf(!0)
        }
        for (let Fe = Ue; Fe >= 0 && Fe < ye.length; Fe += He) {
          const ie = mH(ye[Fe]);
          if (ie.length > 0) return void ee.setFocus(ie[Math.min(Ke, ie.length - 1)], {
            byUser: !0
          })
        }
      },
      SH = (ee, ie, He) => {
        var ye, be;
        const Me = null !== (ye = null === ee || void 0 === ee ? void 0 : ee.getFocused()) && void 0 !== ye ? ye : null,
          Ke = null !== Me && void 0 !== Me && Me.closest("[data-pad-row]") ? "x" : "y",
          Ue = null !== (be = Me ? we(Me, Ke, ie) : null) && void 0 !== be ? be : Pe(ie, Ke);
        if (!Ue) return;
        const Fe = Me ? (0, ne.E)(Me) : null;
        if (Ve(Ue, Ke, He * ("y" === Ke ? Ue.clientHeight : Ue.clientWidth) * .85), !ee || !Fe) return;
        const Je = ae(Ue),
          oe = ee.getEnabledCandidates(ie).filter((ee => Ue.contains(ee) && ce(ee.getBoundingClientRect(), Je))),
          Re = ZH(Fe, oe.map((ee => ee.getBoundingClientRect())));
        Re >= 0 && ee.setFocus(oe[Re], {
          scroll: !1,
          byUser: !0
        })
      };
    let nH = null;
    const jH = (ee, ie) => {
        var He, ye;
        const be = ie.querySelector("[data-pad-friends-column]"),
          Me = ee.getFocused();
        if (!be || !Me || !be.contains(Me)) return !1;
        const Ke = ee.getEnabledCandidates(ie).filter((ee => !be.contains(ee))),
          Ue = ZH((0, ne.E)(Me), Ke.map((ee => ee.getBoundingClientRect()))),
          Fe = null === (He = nH) || void 0 === He ? void 0 : He.deref();
        return ee.setFocus(null !== Fe && void 0 !== Fe && Fe.isConnected ? Fe : null !== (ye = Ke[Ue]) && void 0 !== ye ? ye : null, {
          byUser: !0
        }), !0
      },
      sH = ee => {
        const ie = (0, oe.j)(ee);
        return (0, fe.H)(ie) || RH.n.some((ee => (0, oe.j)(ee) === ie)) ? null : ie
      },
      IH = (ee, ie) => {
        const He = sH(ie);
        return null !== He && ee.wasPressed(He)
      },
      hH = function(ee, ie, He) {
        let ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const be = (ee => {
            var ie, He;
            return null !== (ie = null === (He = CH(ee)) || void 0 === He ? void 0 : He.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ie ? ie : null
          })(ie),
          Me = ee && be ? new Set(ee.getEnabledCandidates(ie)) : null;
        (0, FH.d)(), He === JH.r.SETTINGS && (0, oH.j)(Fe.e.get("openEverythingMenuName")) ? Fe.e.set({
          openEverythingMenuName: He
        }) : (0, oH.u)((0, LH.d)("padMenuShortcut"), He, ye), ee && Me && be && vH(ee, ie, Me, be.closest("[data-pad-tabs]"))
      },
      NH = ee => null !== ee.closest(".Dropdown-root") || null !== ee.querySelector(".Dropdown-root.is-open"),
      GH = ee => null !== (0, xH.c)() && "popup" !== ee.layer.kind && !CH(ee.root) && !NH(ee.root),
      rH = (0, Te.b)(fe.Z),
      QH = (0, Te.b)(fe.Z),
      ey = (ee, ie, He) => {
        if (((ee, ie) => {
            const He = (0, oe.j)("chat");
            return VH(ie) && ee.isHeld(He) ? "hold" === aH.update(ee.wasPressed(He), ee.isHeld(He), performance.now(), pe.d[(0, ke.h)().tapHoldTime].wheelMs) && (Re.d.consumeButton(He), Je.h.yR(YH.o), !0) : (aH.release(), !1)
          })(ie, He.layer.kind)) return !0;
        const ye = He.root;
        for (const [Ke, Ue] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (ie.wasPressed((0, oe.j)(Ke))) {
            const ie = NH(ye) ? null : CH(ye);
            if (ie) uH(ee, ye, ie, Ue);
            else if (GH(He)) {
              var be;
              const ie = ee ? new Set(ee.getEnabledCandidates(ye)) : null;
              null !== (be = (0, xH.c)()) && void 0 !== be && be(Ue) && ee && ie && vH(ee, ye, ie, null)
            } else ee && lH(ee, ye, Ue);
            return !0
          } for (const [Ke, Ue, Fe] of [
            ["menuPageUp", -1, rH],
            ["menuPageDown", 1, QH]
          ]) {
          const He = (0, oe.j)(Ke);
          if (ie.wasPressed(He) && Fe.reset(), Fe.update(ie.isHeld(He), performance.now())) return SH(ee, ye, Ue), !0
        }
        const Me = "popup" === He.layer.kind;
        return IH(ie, "pause") ? (Me || (0, oH.q)() && "menu" !== He.layer.kind || hH(ee, ye, (0, oH.q)() ? JH.r.SETTINGS : (0, cH.b)()), !0) : !!IH(ie, "leaderboard") && ("home" === He.layer.kind ? (ee => {
          const ie = [...ee.querySelectorAll("[data-pad-notifications]")].find(re.k);
          ie && (0, ne.d)(ie)
        })(ye) : Me || hH(ee, ye, JH.r.LOBBY_LEADERBOARD, "inGame" === Fe.e.get("gameState")), !0)
      },
      iy = (ee, ie, He) => {
        if (ey(ee, ie, He)) return !0;
        const ye = "home" === He.layer.kind;
        if (ie.wasPressed((0, oe.j)("menuSecondary"))) {
          const ie = ee.getFocused(),
            be = ie ? fH(ie) : null;
          if (be) return (0, ne.d)(be), !0;
          if (ye) {
            const ie = He.root.querySelector("[data-pad-search] input");
            return ie && (0, re.n)(ie, He.root) ? (ee.setFocus(ie, {
              byUser: !0
            }), (0, ne.d)(ie)) : Fe.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!ye || !IH(ie, "inventory")) && (((ee, ie) => {
          var He, ye;
          const be = ie.querySelector("[data-pad-friends-column]");
          if (!be || !(0, re.k)(be)) return void(0, oH.u)((0, LH.d)("padMenuShortcut"), JH.r.SOCIAL);
          if (jH(ee, ie)) return;
          const Me = null !== (He = null === (ye = be.querySelector("[data-pad-friends-start]")) || void 0 === ye ? void 0 : ye.getBoundingClientRect().top) && void 0 !== He ? He : -1 / 0,
            Ke = ee.getEnabledCandidates(be),
            Ue = Ke.filter((ee => ee.getBoundingClientRect().top >= Me)),
            Fe = Ue.length > 0 ? Ue : Ke,
            Je = DH(Fe.map((ee => ee.getBoundingClientRect())));
          ee.setFocus(Je >= 0 ? Fe[Je] : null, {
            byUser: !0
          })
        })(ee, He.root), !0)
      },
      Hy = ee => {
        var ie, He, ye;
        const be = (0, ne.G)(ee);
        if (null !== be) return be;
        const Me = (null !== (ie = null !== (He = null !== (ye = ee.getAttribute("aria-label")) && void 0 !== ye ? ye : ee.getAttribute("title")) && void 0 !== He ? He : ee.textContent) && void 0 !== ie ? ie : "").replace(/\s+/g, " ").trim();
        return Me ? `${ee.tagName}:${Me.slice(0,100)}` : null
      };
    class yy {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(ee) {
        const ie = this.history.indexOf(ee);
        if (ie >= 0) {
          for (const ee of this.history.splice(ie + 1)) this.remembered.delete(ee);
          return !0
        }
        return this.remembered.delete(ee), this.history.push(ee), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(ee) {
        this.remembered.delete(ee);
        const ie = this.history.indexOf(ee);
        ie >= 0 && this.history.splice(ie, 1)
      }
      remember(ee, ie, He, ye) {
        const be = Hy(ie),
          Me = (0, ne.G)(ie),
          Ke = null !== Me && ((ee, ie) => {
            let He = 0;
            for (const ye of ee.querySelectorAll("[data-pad-key], [href]"))
              if ((ye.getAttribute("data-pad-key") === ie || ye.getAttribute("href") === ie) && (He++, He > 1)) return !0;
            return !1
          })(He, Me) ? Math.max(0, this.twins(ye(), Me).indexOf(ie)) : 0;
        this.remembered.set(ee, {
          element: new WeakRef(ie),
          identity: be,
          ordinal: Ke
        })
      }
      has(ee) {
        return this.remembered.has(ee)
      }
      recall(ee, ie) {
        var He, ye;
        const be = this.remembered.get(ee);
        if (!be) return null;
        const Me = be.element.deref();
        if (Me && ie.includes(Me)) return Me;
        if (null === be.identity) return null;
        const Ke = this.twins(ie, be.identity);
        return null !== (He = null !== (ye = Ke[be.ordinal]) && void 0 !== ye ? ye : Ke[0]) && void 0 !== He ? He : null
      }
      twins(ee, ie) {
        return ee.filter((ee => Hy(ee) === ie))
      }
    }
    var by = He(1215);
    const My = ee => {
        const ie = [];
        let He = ee;
        for (; He && He !== document.body;) {
          const ee = getComputedStyle(He).zIndex;
          "auto" !== ee && ie.push(Number(ee) || 0), He = He.parentElement
        }
        return ie.reverse()
      },
      Ky = (ee, ie) => {
        const He = ((ee, ie) => {
          const He = Math.max(ee.length, ie.length);
          for (let Me = 0; Me < He; Me++) {
            var ye, be;
            const He = (null !== (ye = ee[Me]) && void 0 !== ye ? ye : 0) - (null !== (be = ie[Me]) && void 0 !== be ? be : 0);
            if (0 !== He) return He
          }
          return 0
        })(My(ee), My(ie));
        if (0 !== He) return He > 0;
        if (ee.contains(ie)) return !1;
        if (ie.contains(ee)) return !0;
        const ye = ee.compareDocumentPosition(ie);
        return !!(ye & Node.DOCUMENT_POSITION_PRECEDING) || !(ye & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Uy = (ee, ie) => {
        var He;
        return null !== (He = Ky(ee.root, ie.root)) && void 0 !== He ? He : ee.order > ie.order
      },
      Fy = (ee, ie) => ie.some((ie => !ie.contains(ee) && !ee.contains(ie) && !0 === Ky(ie, ee)));
    let Jy = null,
      oy = null,
      Ry = -1;
    const ky = () => {
        var ee;
        const ie = null === (ee = document.timeline) || void 0 === ee ? void 0 : ee.currentTime,
          He = "number" === typeof ie ? ie : null;
        if (null !== He && He === oy && Ry === (0, by.b)()) return Jy;
        let ye = null;
        const be = [],
          Me = [...document.querySelectorAll("[data-pad-covers]")].filter(re.k);
        for (const Ke of (0, by.e)()) {
          const ee = Ke.getRoot(),
            ie = !!ee && (0, re.k)(ee) && !Fy(ee, Me);
          if (Ke.shown && !ie && be.push(Ke), Ke.shown = ie, !ee || !ie) continue;
          const He = {
            layer: Ke,
            root: ee,
            order: Ke.order
          };
          ye && !Uy(He, ye) || (ye = He)
        }
        Jy = ye, oy = He, Ry = (0, by.b)();
        for (const Ke of be)(0, by.i)(Ke);
        return Jy
      },
      qy = () => {
        const ee = ky();
        return !(null === ee || void 0 === ee || !ee.layer.close) && (ee.layer.close(), oy = null, !0)
      },
      fy = () => {
        var ee, ie;
        return null !== (ee = null === (ie = ky()) || void 0 === ie ? void 0 : ie.root) && void 0 !== ee ? ee : null
      },
      Ty = ee => ee ? {
        ...ee,
        root: fy()
      } : null;
    let py = null,
      Xy = null,
      zy = (0, ke.h)().menuNavigation,
      By = null;
    const Ey = new ge;
    let gy = null;
    Je.h.subscribe(ke.g, (() => {
      const ee = (0, ke.h)().menuNavigation;
      ee !== zy && (zy = ee, py = null, Xy = null)
    }));
    const Oy = () => {
        var ee;
        return null !== (ee = py) && void 0 !== ee ? ee : (0, ke.h)().menuNavigation
      },
      dy = ee => {
        if (wy()) {
          if (By = Ty(ee), "hybrid" === Oy()) return Ey.lock(), void(Xy = Xy ? null : fy());
          py = "focus" === Oy() ? "cursor" : "focus"
        }
      },
      Wy = () => {
        const ee = By;
        return By = null, ee
      };
    let ty = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Zy = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const He = ty.root === ee,
          ye = He ? ty.firstSeenMs : ie,
          be = ty.has || ie - ye > 1e3;
        return (!He || !be || ie - ty.atMs > 250) && (ty = {
          root: ee,
          firstSeenMs: ye,
          atMs: ie,
          has: (0, re.i)(ee)
        }), ty.has
      },
      wy = () => {
        const ee = fy();
        return null !== ee && Zy(ee)
      },
      Dy = () => {
        const ee = ky();
        return Xy && (null === ee || void 0 === ee ? void 0 : ee.root) !== Xy && (Xy = null), (ee => {
          let {
            mode: ie,
            hasLayer: He,
            hasCandidates: ye,
            hybridCursorEngaged: be
          } = ee;
          return He ? "cursor" !== ie && ye() ? "hybrid" === ie && be ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Oy(),
          hasLayer: null !== ee,
          hasCandidates: () => null !== ee && Zy(ee.root),
          hybridCursorEngaged: null !== Xy
        })
      },
      Py = () => "hybrid" === Oy() && wy(),
      Ay = "pad-focused";
    var Yy = He(4940),
      Vy = He(5544);
    const ay = "[data-pad-destructive]",
      cy = `${ay}, [data-pad-back]`,
      xy = ee => ({
        rect: ee.getBoundingClientRect(),
        destructive: ee.matches(ay),
        closes: null !== ee.closest("[data-pad-close-button]"),
        unavailable: ee.matches("[data-pad-unavailable]")
      }),
      Ly = ee => {
        let {
          destructive: ie,
          closes: He,
          unavailable: ye
        } = ee;
        return ie ? He ? 2 : 3 : ye ? 1 : 0
      },
      Cy = ee => {
        let ie = -1;
        for (let He = 0; He < ee.length; He++) {
          if (ie < 0) {
            ie = He;
            continue
          }
          const ye = ee[He],
            be = ee[ie];
          Ly(ye) === Ly(be) ? wH(ye.rect, be.rect) < 0 && (ie = He) : Ly(ye) < Ly(be) && (ie = He)
        }
        return ie
      },
      vy = "[data-pad-tabs]",
      uy = "[data-pad-tab]",
      my = (ee, ie) => {
        const He = ee.querySelector(`${uy}[data-pad-selected='true']`);
        return He && ie.includes(He) ? He : null
      },
      ly = (ee, ie) => {
        let He = ie;
        for (let ye = ie.parentElement; ye && !ye.contains(ee); ye = ye.parentElement) He = ye;
        return He
      };
    class Sy {
      constructor() {
        this.contentReturn = null
      }
      redirect(ee, ie, He, ye) {
        var be, Me;
        const Ke = ee.closest(vy),
          Ue = ie.closest(vy);
        var Fe;
        if (Ue && Ue !== Ke) return Ke || (this.contentReturn = new WeakRef(ee)), null !== (Fe = my(Ue, He)) && void 0 !== Fe ? Fe : ie;
        if (!Ke || Ue) return ie;
        const Je = ly(ee, ie),
          oe = null === (be = this.contentReturn) || void 0 === be ? void 0 : be.deref();
        return oe && Je.contains(oe) && He.includes(oe) ? oe : null !== (Me = this.pickRegionStart(Je, we(ie, "y", ye), He)) && void 0 !== Me ? Me : ie
      }
      findTabContent(ee, ie, He) {
        const ye = ee.closest(vy);
        if (!ye || !ee.matches(uy) || ye.contains(ie)) return null;
        const be = ie.closest(vy);
        if (be && Number(be.dataset.padTabs) <= Number(ye.dataset.padTabs)) return null;
        const Me = ly(ee, ie);
        return He.some((ee => Me.contains(ee) && !ee.closest(cy))) || !ie.closest(cy) ? Me : null
      }
      pickContentStart(ee, ie, He) {
        return this.contentReturn = null, this.pickRegionStart(ee, we(ee, "y", He), ie)
      }
      pickReplacedContentStart(ee, ie, He, ye) {
        if (!ie.contains(ee)) return null;
        const be = ly(ie, ee),
          Me = He.filter((ee => ie.contains(ee) && !be.contains(ee) && !ee.closest(cy)));
        return 0 === Me.length ? null : (this.contentReturn = null, this.pickRegionStart(ie, we(Me[0], "y", ye), Me))
      }
      backToStrip(ee, ie, He) {
        if (ee.closest(vy)) return null;
        const ye = CH(He);
        for (const be of He.querySelectorAll(vy)) {
          if (Number(be.dataset.padTabs) <= 1 || be === ye) continue;
          const Me = my(be, ie),
            Ke = Me ? ly(ee, be).parentElement : null;
          if (Me && Ke && Ke !== He && He.contains(Ke)) return this.contentReturn = new WeakRef(ee), Me
        }
        return null
      }
      pickRegionStart(ee, ie, He) {
        const ye = ae(ie),
          be = ee => {
            const ie = He.filter((ie => ee.contains(ie) && !ie.closest(vy) && ce(ie.getBoundingClientRect(), ye))),
              be = Cy(ie.map(xy));
            return be >= 0 ? ie[be] : null
          };
        for (const Me of (0, re.g)(ee)) {
          const ee = be(Me);
          if (ee) return ee
        }
        for (const Me of ee.querySelectorAll(vy)) {
          const ee = my(Me, He);
          if (ee) return ee
        }
        return be(ee)
      }
    }
    const ny = "[data-pad-default-focus], .Dropdown-option.is-selected",
      jy = ".Dropdown-root.is-open > .Dropdown-menu",
      sy = "[data-pad-no-step-in]",
      Iy = "[data-pad-tabs]",
      hy = "[data-pad-press-area]",
      Ny = ee => {
        let ie = ee;
        for (let He = 0; ie && He <= 4; He++, ie = ie.parentElement) {
          const He = ie.querySelector(".CircleInfo");
          if (He) return ie === ee || ie.querySelectorAll(re.b).length <= 1 ? He : null;
          if (ie !== ee && ie.querySelectorAll(re.b).length > 1) return null
        }
        return null
      },
      Gy = (ee, ie, He) => {
        (0, ne.t)(ee, ie, He);
        const ye = null !== ee && void 0 !== ee && ee.isConnected ? Ny(ee) : null,
          be = Ny(ie);
        ye !== be && (0, ne.t)(ye, be, be ? (0, ne.E)(be) : He, {
          leaveBelow: ee,
          enterBelow: ie
        })
      },
      ry = ee => ee.getBoundingClientRect(),
      Qy = (ee, ie, He) => {
        const ye = new Set(He);
        for (let be = ee; be; be = be === ie ? null : be.parentElement)
          if (ye.has(be)) return be;
        return null
      },
      eb = (ee, ie) => !ee.root || ee.root === ie || ie.matches(jy) && ee.root.contains(ie);
    const ib = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new yy, this.tabStripNav = new Sy, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Te.b)(fe.s), this.dpadRepeats = new Map(fe.A.map((ee => [ee, (0, Te.b)(fe.D)]))), this.stickRepeat = new fe.e((0, Te.b)(fe.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const ee = Re.d.register({
            name: "focus",
            isActive: () => (0, qe.l)() && "focus" === Dy(),
            onFrame: ee => {
              this.onFrame(ee)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: ee => (0, Re.f)(ee) || ee === (0, oe.j)("menuConfirm") && (0, ne.K)((0, qe.e)())
          }),
          ie = (0, by.l)((ee => {
            const ie = (0, by.r)(ee);
            null === ee.memoryKey && this.memory.forget(ie), ie === this.layerKey && (this.layerKey = null)
          }));
        let He = -1 / 0;
        const ye = Ke.g.onFrame((ee => {
            (0, qe.l)() || ee.timestampMs - He < 100 || (He = ee.timestampMs, ky())
          })),
          be = ee => {
            ee.isTrusted && ee.target instanceof Element && Ke.g.getActivePad() && this.noteChosenStop(ee.target)
          };
        return document.addEventListener("click", be, !0), () => {
          ee(), ie(), ye(), document.removeEventListener("click", be, !0), this.deactivate()
        }
      }
      noteChosenStop(ee) {
        var ie, He;
        const ye = ky();
        if (!ye || !ye.root.contains(ee)) return;
        const be = null !== (ie = null === (He = ee.closest(".Dropdown-root")) || void 0 === He ? void 0 : He.querySelector(".Dropdown-control")) && void 0 !== ie ? ie : ee,
          Me = Qy(be, ye.root, this.getEnabledCandidates(ye.root));
        if (!Me) return;
        const Ke = (0, by.r)(ye.layer);
        Ke === this.layerKey && ye.root === this.layerRoot || this.beginLayer(ye, Ke), this.wasActive ? this.setFocus(Me, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Me, this.lastFocusedCentre = (0, ne.E)(Me), this.rememberFocus(Me), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
      deactivate() {
        var ee;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const ee of this.dpadRepeats.values()) ee.reset();
          this.stickRepeat.reset(), null !== (ee = this.focused) && void 0 !== ee && ee.isConnected && Gy(this.focused, null, (0, ne.E)(this.focused)), this.notify()
        }
      }
      setFocus(ee) {
        var ie;
        let {
          scroll: He = !0,
          byUser: ye = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ye && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), ee === this.focused) return;
        const be = null !== (ie = this.focused) && void 0 !== ie && ie.isConnected ? this.focused : null;
        if (this.focused = ee, ee) {
          He && (ee.classList.add(Ay), ee.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), ye && ((ee, ie) => {
            const He = ie.closest("[data-pad-friends-column]");
            He && ee && !He.contains(ee) && (nH = new WeakRef(ee))
          })(be, ee);
          const ie = (0, ne.E)(ee);
          this.lastFocusedCentre = ie, this.movedInLayer && this.rememberFocus(ee), Gy(be, ee, ie), "false" === ee.getAttribute("aria-pressed") && ee.closest("[data-pad-select-on-focus]") && (0, ne.d)(ee)
        } else be && Gy(be, null, (0, ne.E)(be));
        this.notify()
      }
      rememberFocus(ee) {
        const ie = this.layerRoot;
        this.layerKey && ie && this.memory.remember(this.layerKey, ee, ie, (() => this.getEnabledCandidates(ie)))
      }
      noteCursorActivation(ee) {
        const ie = ky();
        if (!ie || !ie.root.contains(ee)) return;
        const He = this.getEnabledCandidates(ie.root),
          ye = new Set(He);
        let be = ee;
        for (; be && !ye.has(be);) be = be === ie.root ? null : be.parentElement;
        if (!(be instanceof HTMLElement)) return;
        const Me = (0, by.r)(ie.layer);
        this.memory.enter(Me), this.memory.remember(Me, be, ie.root, (() => He))
      }
      notePageEnteredByCursor(ee) {
        return this.memory.enter(ee)
      }
      recallStop(ee, ie) {
        return this.findRemembered(ee, ie)
      }
      focusWhenFound(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: ee,
          untilMs: performance.now() + ie,
          holdWhile: He
        }
      }
      getEnabledCandidates(ee) {
        return (0, re.d)(ee).filter((ee => !(0, re.r)(ee)))
      }
      onFrame(ee) {
        var ie;
        const He = ky();
        if (!He) return;
        const ye = null !== (ie = this.findOpenDropdown(He)) && void 0 !== ie ? ie : He,
          be = performance.now(),
          Me = (0, by.r)(ye.layer);
        if (Me !== this.layerKey || ye.root !== this.layerRoot) {
          const ie = this.focused;
          if (null !== this.layerKey && ye.root === this.layerRoot && ie && (0, re.n)(ie, ye.root)) this.continueLayer(Me, ie), this.wasActive || this.resume(ye.root, be);
          else {
            const ie = !this.wasActive && !ee.wokeDevice,
              Ke = "death" === this.layerKind || ie,
              Ue = this.enterLayer(ye, Me);
            "popup" !== ye.layer.kind || ye !== He || Ue ? "menu" === ye.layer.kind && Ke && "inGame" === Fe.e.get("gameState") && !(0, FH.h)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = be + Yy.c) : (this.pressGuardExtends = ie, this.pressGuardUntilMs = be + (ie ? Yy.c : Ke ? 500 : 250))
          }
        } else this.wasActive || this.resume(ye.root, be);
        if (this.layerKind = ye.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), ee.wokeDevice && this.focusPointedStop(ye.root), this.validateFocus(ye, be), be < this.pressGuardUntilMs && this.pressGuardExtends && (ee.wasPressed((0, oe.j)("menuConfirm")) || ee.wasPressed((0, oe.j)("menuBack"))) && (this.pressGuardUntilMs = be + Yy.c), be >= this.pressGuardUntilMs && this.handleButtons(ee, ye)) return;
        const Ke = "hybrid" === Oy();
        if (Ke && (ee => {
            const ie = fy();
            return ie !== gy && (gy = ie, Ey.lock()), Ey.update(ee, (0, ke.h)().moveDeadzone)
          })(ee.leftStick)) return Ue = this.getHandoff(), By = Ty(Ue), Xy = fy(), void Re.d.handOffHeldInput();
        var Ue;
        this.handleDirections(ee, ye, be, !Ke), this.handleScroll(ee, ye)
      }
      findOpenDropdown(ee) {
        const ie = ee.root.querySelector(jy);
        if (!ie || !(0, re.k)(ie)) return null;
        let He = this.dropdownLayers.get(ie);
        return He || (this.dropdownLayerCounter++, He = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: ee.layer.kind,
          getRoot: () => ie,
          close: () => {
            (0, ne.p)(ie)
          },
          memoryKey: null
        }, this.dropdownLayers.set(ie, He)), {
          layer: He,
          root: ie,
          order: ee.order
        }
      }
      focusPointedStop(ee) {
        const ie = (0, qe.e)(),
          He = ie ? document.elementFromPoint(ie.x, ie.y) : null;
        if (!He || !ee.contains(He)) return;
        const ye = Qy(He, ee, this.getEnabledCandidates(ee));
        ye && this.setFocus(ye, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(ee, ie) {
        const He = this.beginLayer(ee, ie),
          ye = Wy();
        return ye && eb(ye, ee.root) ? (this.takeOver(ee.root, ye, this.enteredLayerAtMs), He) : (this.restoreLayerFocus(ee.root, He), He)
      }
      beginLayer(ee, ie) {
        return this.layerKey = ie, this.layerRoot = ee.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(ie)
      }
      restoreLayerFocus(ee, ie) {
        const He = ie && this.layerKey ? this.findRemembered(ee, this.layerKey) : null;
        this.restoredFromMemory = null !== He, this.setFocus(null !== He && void 0 !== He ? He : this.pickInitial(ee, {
          waitForContent: !0
        }))
      }
      continueLayer(ee, ie) {
        this.layerKey = ee;
        const He = this.memory.enter(ee);
        this.restoreOnFocusLoss = He, this.movedInLayer && !He && this.rememberFocus(ie)
      }
      resume(ee, ie) {
        var He;
        const ye = Wy();
        ye && eb(ye, ee) ? this.takeOver(ee, ye, ie) : null !== (He = this.focused) && void 0 !== He && He.isConnected && Gy(null, this.focused, (0, ne.E)(this.focused))
      }
      pickPreferred(ee) {
        var ie;
        return null !== (ie = this.layerKey ? this.findRemembered(ee, this.layerKey) : null) && void 0 !== ie ? ie : this.pickInitial(ee, {
          waitForContent: !0
        })
      }
      findRemembered(ee, ie) {
        return this.memory.has(ie) ? this.memory.recall(ie, this.getEnabledCandidates(ee)) : null
      }
      getHandoff() {
        var ee, ie, He;
        const ye = null !== (ee = this.focused) && void 0 !== ee && ee.isConnected ? this.focused : null,
          be = null !== (ie = this.layerRoot) && void 0 !== ie && ie.isConnected ? this.layerRoot : null;
        return {
          point: ye ? (0, ne.E)(ye) : null !== (He = this.lastFocusedCentre) && void 0 !== He ? He : this.getLayerStartPoint(be),
          element: ye,
          direction: null
        }
      }
      getLayerStartPoint(ee) {
        if (!ee) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const ie = this.pickInitial(ee, {
          includeDisabled: !0
        });
        return (0, ne.E)(null !== ie && void 0 !== ie ? ie : ee)
      }
      takeOver(ee, ie, He) {
        const {
          element: ye,
          direction: be,
          point: Me
        } = ie, Ke = ye instanceof HTMLElement && (0, re.n)(ye, ee) ? ye : null;
        if (!be) {
          const ie = this.focused;
          return Ke ? this.setFocus(Ke, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(ee, Me), void(this.focused && this.focused === ie && this.focused.isConnected && Gy(null, this.focused, (0, ne.E)(this.focused)))
        }
        if (this.dpadRepeats.get(be).update(!0, He), Ke) return this.setFocus(Ke, {
          scroll: !1,
          byUser: !0
        }), void this.move(ee, be, He, !0);
        const Ue = this.getEnabledCandidates(ee),
          Fe = Ue.map(ry),
          Je = gH(new DOMRect(Me.x, Me.y, 0, 0), Fe, be),
          oe = Je >= 0 ? Je : ZH(Me, Fe);
        this.setFocus(oe >= 0 ? Ue[oe] : this.pickInitial(ee), {
          byUser: !0
        })
      }
      focusNearest(ee, ie) {
        const He = this.getEnabledCandidates(ee),
          ye = ZH(ie, He.map(ry));
        this.setFocus(ye >= 0 ? He[ye] : this.pickInitial(ee), {
          byUser: !0
        })
      }
      pickDefault(ee) {
        let {
          includeDisabled: ie = !1,
          exclude: He = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ye = [...ee.querySelectorAll(ny)].filter((ye => (null === He || void 0 === He || !He.has(ye)) && (ie ? (0, re.t)(ye, ee) : (0, re.n)(ye, ee)))),
          be = Cy(ye.map(xy));
        return be >= 0 ? ye[be] : null
      }
      pickNewAreaStart(ee, ie) {
        const He = [...ee.querySelectorAll(hy)].filter(re.k);
        for (const ye of [...(0, re.g)(ee), ...He]) {
          if (ie.has(ye)) continue;
          const ee = this.getEnabledCandidates(ye),
            He = Cy(ee.map(xy));
          if (He >= 0) return ee[He]
        }
        return null
      }
      pickInitial(ee) {
        let {
          includeDisabled: ie = !1,
          waitForContent: He = !1,
          enteredAtMs: ye = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const be = this.pickDefault(ee, {
          includeDisabled: ie
        });
        if (be) return be;
        const Me = ee => ie ? (0, re.d)(ee) : this.getEnabledCandidates(ee);
        let Ke = [];
        for (const ke of (0, re.g)(ee))
          if (Ke = Me(ke), Ke.length > 0) break;
        if (0 === Ke.length) {
          if (He && performance.now() - ye < 1e4 && (0, re.j)(ee)) return null;
          Ke = Me(ee)
        }
        const Ue = Ke.map(ry),
          Fe = ae(null),
          Je = Ke.filter(((ee, ie) => ce(Ue[ie], Fe))),
          oe = Je.length > 0 ? Je : Ke,
          Re = Cy(oe.map(xy));
        return Re >= 0 ? oe[Re] : null
      }
      validateFocus(ee, ie) {
        if (this.pendingFocus) {
          var He, ye;
          const be = this.pendingFocus.find();
          if (be && (0, re.n)(be, ee.root)) return this.pendingFocus = null, void this.setFocus(be, {
            byUser: !0
          });
          ie > this.pendingFocus.untilMs && (null === (He = (ye = this.pendingFocus).holdWhile) || void 0 === He || !He.call(ye)) && (this.pendingFocus = null)
        }
        const be = this.focused,
          Me = !!be && (0, re.n)(be, ee.root);
        if (!(!Me && be && be === this.lastActivated && ie - this.lastActivatedAtMs < 5e3 && ee.root.contains(be) && (0, re.k)(be) && (0, re.r)(be))) {
          if (!Me && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = ie, void this.restoreLayerFocus(ee.root, !0);
          if ((!Me || !this.movedInLayer && !this.scrolledInLayer) && !(ie - this.lastRefocusCheckMs < (Me ? 200 : 50)))
            if (this.lastRefocusCheckMs = ie, Me) {
              const He = ie - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(ee.root) : null,
                ye = null !== He && void 0 !== He ? He : this.restoredFromMemory ? null : this.pickDefault(ee.root);
              ye && ye !== be && this.setFocus(ye)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const ie = this.pendingFocus;
                return this.focusNearest(ee.root, this.lastFocusedCentre), void(this.pendingFocus = ie)
              }
              this.setFocus(this.pickPreferred(ee.root))
            }
        }
      }
      handleButtons(ee, ie) {
        if (ee.wasPressed((0, oe.j)("menuToggleCursor"))) return dy(this.getHandoff()), !0;
        if (ee.wasPressed((0, oe.j)("menuBack"))) {
          const ee = (0, ne.p)(ie.root);
          return ee ? this.setFocus(ee, {
            byUser: !0
          }) : jH(this, ie.root) || ((0, ne.h)(ie.root) ? this.returnToOpener(ie.root) : this.backToStrip(ie.root) || qy()), !0
        }
        const He = (0, oe.j)("menuConfirm");
        var ye, be;
        ee.wasPressed(He) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (ye = null === (be = this.focused) || void 0 === be ? void 0 : be.getAttribute("data-pad-repeat")) && void 0 !== ye ? ye : null, this.confirmRepeated = ee.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (ee.wasReleased(He)) {
          const ee = this.confirmPressedOn;
          if (this.confirmPressedOn = null, ee && !this.confirmRepeated && ee === this.focused && ee.isConnected && !(0, re.r)(ee)) {
            const He = ee.matches("[data-pad-tab]") ? ee.closest(Iy) : null;
            He ? this.enterTab(ee, He, ie.root, performance.now()) : this.activate(ee)
          }
          return !0
        }
        return this.repeatConfirm(ee, He), iy(this, ee, ie)
      }
      repeatConfirm(ee, ie) {
        const He = this.confirmPressedOn;
        He && null !== this.confirmRepeatKey && ee.isHeld(ie) && (He === this.focused && He.isConnected && !(0, re.r)(He) && He.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? He.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(He)) : this.confirmRepeatKey = null)
      }
      backToStrip(ee) {
        const ie = this.focused;
        if (!(0, ke.h)().menuBackToCategories) return !1;
        const He = null !== ie && void 0 !== ie && ie.isConnected ? this.tabStripNav.backToStrip(ie, this.getEnabledCandidates(ee), ee) : null;
        return He && this.setFocus(He, {
          byUser: !0
        }), null !== He
      }
      returnToOpener(ee) {
        const ie = this.lastActivatedKey;
        ie && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var He;
          return null !== (He = this.getEnabledCandidates(ee).find((ee => (0, ne.G)(ee) === ie))) && void 0 !== He ? He : null
        })))
      }
      activate(ee) {
        var ie;
        if ((0, Vy.b)(ee) || (0, ne.J)(ee)) return;
        this.lastActivatedKey = null !== (ie = (0, ne.G)(ee)) && void 0 !== ie ? ie : this.lastActivatedKey, this.lastActivated = ee, this.lastActivatedAtMs = performance.now(), this.rememberFocus(ee);
        const He = this.layerRoot;
        if (He) {
          const ie = new Set(He.querySelectorAll(ny)),
            ye = new Set(He.querySelectorAll(`[data-pad-initial-area], ${hy}`)),
            be = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var be;
            return (0, re.n)(ee, He) ? null : null !== (be = this.pickDefault(He, {
              exclude: ie
            })) && void 0 !== be ? be : this.pickNewAreaStart(He, ye)
          }), 5e3, (() => ee.isConnected && (0, re.r)(ee) && performance.now() - be < 6e4))
        }(0, ne.d)(ee), (0, ne.l)(ee)
      }
      handleDirections(ee, ie, He, ye) {
        const be = VH(ie.layer.kind) ? (0, oe.j)("chat") : null;
        for (const Ue of fe.A) {
          this.dpadRepeats.get(Ue).update(ee.isHeld(Ue), He) && (Ue !== be || ee.wasPressed(Ue)) && this.move(ie.root, Ue, He, !0)
        }
        const Me = ye ? (0, fe.k)(ee.leftStick, (0, ke.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Ke = this.stickRepeat.update((0, fe.gb)(Me), He);
        if (Ke && this.move(ie.root, Ke, He, !0), this.retryMove && He >= this.retryMove.atMs) {
          const {
            direction: ee
          } = this.retryMove;
          this.retryMove = null, this.move(ie.root, ee, He, !1)
        }
      }
      move(ee, ie, He, ye) {
        var be;
        let Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (be = this.tabOpenWait) || void 0 === be ? void 0 : be.wait) && ie === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Ke = this.focused;
        if (!Ke || !Ke.isConnected) {
          const ie = this.pickInitial(ee);
          return void(ie && this.setFocus(ie, {
            byUser: !0
          }))
        }
        const Ue = "Left" === ie || "Right" === ie,
          Fe = Ue ? (0, Vy.b)(Ke) : null;
        if (Fe) return void Fe.adjust("Left" === ie ? -1 : 1);
        const Je = ee => null !== ee.closest("[data-pad-friends-column]"),
          oe = Je(Ke),
          Re = ry(Ke),
          ke = Ue || Ke.closest(Iy) ? null : (ee => {
            const ie = new Map;
            return He => {
              const ye = He.closest(Iy);
              if (!ye) return !1;
              let be = ie.get(ye);
              if (void 0 === be) {
                const He = ry(ye);
                be = EH(ee, He) && (He.right <= ee.left || He.left >= ee.right), ie.set(ye, be)
              }
              return be
            }
          })(Re),
          qe = null !== Ke.closest(sy),
          fe = this.getEnabledCandidates(ee).filter((ee => ee !== Ke && (Ue || Je(ee) === oe) && !(null !== ke && void 0 !== ke && ke(ee)) && (qe || !ee.closest(sy)))),
          Te = fe.map(ry),
          pe = we(Ke, "y", ee),
          Xe = ae(pe);
        if (!Me && !ce(Re, Xe)) {
          const ee = fe.filter(((ee, ie) => ce(Te[ie], Xe)));
          if (ee.length > 0) {
            const ie = {
              x: Xe.left + Xe.width / 2,
              y: Xe.top + Xe.height / 2
            };
            return void this.setFocus(ee[ZH(ie, ee.map(ry))], {
              byUser: !0
            })
          }
        }
        const ze = Ue ? ((ee, ie, He) => {
            const ye = ry(ee),
              be = ee.closest(Iy),
              Me = be ? ry(be) : null;
            return ie.map(((ie, Ke) => {
              const Ue = He[Ke];
              if (Ue.bottom > ye.top && Ue.top < ye.bottom) return !0;
              const Fe = ie.closest(Iy);
              if (be && Me) return Fe !== be && (null !== Fe || Ue.bottom <= Me.top || Ue.top >= Me.bottom);
              if (Fe) return !EH(ye, ry(Fe));
              let Je = ee;
              for (let He = ee.parentElement; He && !He.contains(ie); He = He.parentElement) Je = He;
              const oe = ry(Je);
              return Ue.right > oe.left && Ue.left < oe.right
            }))
          })(Ke, fe, Te) : void 0,
          Be = Ue && !Ke.closest(Iy) ? (ee => ee.map((ee => !ee.closest(cy))))(fe) : void 0,
          Ee = ((ee, ie) => {
            const He = [];
            for (let be = ee; be; be = be.parentElement) He.push(be);
            const ye = new Map;
            return He.forEach(((ee, ie) => {
              ye.set(ee, He.length - 1 - ie)
            })), ie.map((ee => {
              for (let ie = ee; ie; ie = ie.parentElement) {
                const ee = ye.get(ie);
                if (void 0 !== ee) return ee
              }
              return -1
            }))
          })(Ke, fe),
          ge = Ue ? "x" : "y",
          Oe = we(Ke, ge, ee);
        let de = gH(Re, Te, ie, Ee, ze, Be);
        if (de >= 0 && Oe && !Oe.contains(fe[de])) {
          const ee = fe.flatMap(((ee, ie) => Oe.contains(ee) ? [ie] : [])),
            He = ie => ie && ee.map((ee => ie[ee])),
            ye = gH(Re, ee.map((ee => Te[ee])), ie, ee.map((ee => Ee[ee])), He(ze), He(Be));
          de = ye >= 0 ? ee[ye] : de
        }
        if (de >= 0) return void this.moveTo(Ke, fe[de], fe, ee, ie, Me);
        if (!ye) return;
        const We = "Right" === ie || "Down" === ie ? 1 : -1;
        if (Oe && Ye(Oe, ge, We)) {
          const ee = "y" === ge ? Oe.clientHeight : Oe.clientWidth;
          Ve(Oe, ge, We * ee * .5), this.retryMove = {
            direction: ie,
            atMs: He + 80
          }
        }
      }
      moveTo(ee, ie, He, ye, be, Me) {
        const Ke = this.tabStripNav.findTabContent(ee, ie, He);
        Ke && "true" !== ee.dataset.padSelected ? this.openTab(ee, Ke, ye, be) : Me && !Ke || this.setFocus(this.tabStripNav.redirect(ee, ie, He, ye), {
          byUser: !0
        })
      }
      openTab(ee, ie, He, ye) {
        const be = ie.parentElement;
        (0, ne.d)(ee), this.focusWhenFound((() => "true" !== ee.dataset.padSelected ? null : ie.isConnected ? this.tabStripNav.pickContentStart(ie, this.getEnabledCandidates(He), He) : be ? this.tabStripNav.pickReplacedContentStart(ee, be, this.getEnabledCandidates(He), He) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: ye
        }
      }
      enterTab(ee, ie, He, ye) {
        this.move(He, (ee => {
          const ie = [...ee.querySelectorAll(uy)].filter((ie => ie.closest(vy) === ee));
          if (ie.length >= 2) {
            const ee = ie[0].getBoundingClientRect(),
              He = ie[1].getBoundingClientRect();
            return Math.abs(He.top - ee.top) > Math.abs(He.left - ee.left) ? "Right" : "Down"
          }
          const He = ee.getBoundingClientRect();
          return He.height > He.width ? "Right" : "Down"
        })(ie), ye, !1, !0), this.focused !== ee || this.pendingFocus || this.activate(ee)
      }
      handleScroll(ee, ie) {
        const He = (0, fe.k)(ee.rightStick, .2);
        if (0 === He.x && 0 === He.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const ye = ee.dtMs / 1e3;
        for (const Me of ["x", "y"]) {
          var be;
          const ee = He[Me];
          if (0 === ee) continue;
          const Ke = null !== (be = we(this.focused, Me, ie.root)) && void 0 !== be ? be : Pe(ie.root, Me);
          if (!Ke) continue;
          const Ue = Math.sign(ee) * ee * ee * 1500 * ye + this.scrollRemainder[Me],
            Fe = Math.trunc(Ue);
          this.scrollRemainder[Me] = Ue - Fe, 0 !== Fe && (Ve(Ke, Me, Fe), this.scrolledInLayer = !0)
        }
      }
    };
    var Hb = He(8971);
    var yb = He(9453);
    const bb = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Mb = {
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
          ...bb,
          minIntervalMs: 1e3
        },
        preview: {
          ...bb,
          minIntervalMs: 0
        }
      };
    const Kb = new class {
        constructor(ee) {
          this.deps = ee, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = ee => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", ee))
          }
        }
        play(ee, ie) {
          const He = Mb[ee];
          if (!this.deps.isVibrationOn() || He.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const ye = this.lastPlayedMs[ee];
          if (void 0 !== ye && ie - ye < He.minIntervalMs) return !1;
          const be = this.deps.getActuator();
          if (!be) return !1;
          this.lastPlayedMs[ee] = ie;
          const {
            duration: Me,
            strongMagnitude: Ke,
            weakMagnitude: Ue
          } = He;
          try {
            be.playEffect("dual-rumble", {
              duration: Me,
              strongMagnitude: Ke,
              weakMagnitude: Ue
            }).catch(this.logFailure)
          } catch (Fe) {
            this.logFailure(Fe)
          }
          return !0
        }
      }({
        getActuator: () => (ee => {
          const ie = null === ee || void 0 === ee ? void 0 : ee.vibrationActuator;
          return "function" === typeof(null === ie || void 0 === ie ? void 0 : ie.playEffect) ? ie : null
        })(Ke.g.getActiveGamepad()),
        isVibrationOn: () => (0, ke.h)().vibration,
        isPadInUse: qe.l
      }),
      Ub = ee => {
        Kb.play(ee, performance.now())
      };
    var Fb = He(8979),
      Jb = He(3142),
      ob = He(107),
      Rb = He(35),
      kb = He(660);
    class qb {
      constructor(ee) {
        this.deps = ee
      }
      check() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ie = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!ie) return "skipped";
        const He = ee ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === He || this.deps.readReportedVisitId() === He ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(He), this.deps.RR(ie, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const fb = "controllerUsageReportedVisit";
    var Tb = He(1340),
      pb = He(1768),
      Xb = He(645),
      zb = He(1432),
      Bb = He(1196);
    const Eb = ee => ({
        translationKey: `controller:${ee}`
      }),
      gb = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Eb("padButtonView"),
        Menu: Eb("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Eb("padButtonDpadUp"),
        Down: Eb("padButtonDpadDown"),
        Left: Eb("padButtonDpadLeft"),
        Right: Eb("padButtonDpadRight"),
        Home: Eb("padButtonHome"),
        LeftStick: Eb("padButtonLeftStick"),
        RightStick: Eb("padButtonRightStick")
      },
      Ob = {
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
          View: Eb("padButtonCreate"),
          Menu: Eb("padButtonOptions")
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
      db = (ee, ie) => {
        var He;
        const ye = null !== (He = Ob[ee][ie]) && void 0 !== He ? He : gb[ie];
        return "string" === typeof ye ? ye : (0, be.s)(Bb.f.get().getCurrentLanguageCode(), ye.translationKey)
      },
      Wb = ee => {
        let {
          glyph: ie,
          family: He,
          className: ye
        } = ee;
        const be = (0, qe.z)(),
          Me = null !== He && void 0 !== He ? He : be,
          Ke = (0, Fb.g)(Me, ie);
        return (0, ve.jsx)("span", {
          className: Ce()("ControllerGlyph", ye),
          role: "img",
          "aria-label": db(Me, ie),
          style: {
            "--pad-glyph-mask": `url(${Ke})`,
            "--pad-glyph-aspect": (0, Fb.d)(Me, ie)
          }
        })
      };
    var tb = He(1956);
    const Zb = ee => {
      let {
        action: ie
      } = ee;
      const {
        t: He
      } = (0, be.v)();
      switch (ie.kind) {
        case "reload":
          return (0, ve.jsx)("span", {
            children: He("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, ve.jsx)(tb.e, {
            text: ie.description ? [{
              icon: ie.icon
            }, ` ${ie.description}`] : [{
              icon: ie.icon
            }]
          });
        case "touchButton":
          return (0, ve.jsx)(tb.e, {
            text: ie.label
          })
      }
    };
    var wb = He(9461);
    const Db = ee => {
      let {
        hold: ie
      } = ee;
      return (0, ve.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${ie.holdMs}ms`
        },
        children: (0, ve.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, ie.id)
    };
    var Pb = He(9487),
      Ab = He(9495),
      Yb = He(9499),
      Vb = He(9483);
    const ab = () => {
        const {
          gameState: ee
        } = (0, Fe.m)(["gameState"]), ie = (0, qe.x)(), [ye, be] = (0, xe.useState)(!1), [Me, Ke] = (0, xe.useState)(!1);
        return (0, xe.useEffect)((() => {
          "inGame" === ee && be(!0)
        }), [ee]), (0, xe.useEffect)((() => {
          if (!ye) return;
          let ee = null,
            ie = !1;
          return (Xb.I ? Promise.all([He.e(84), He.e(103), He.e(300), He.e(207), He.e(251), He.e(250), He.e(102)]).then((() => He(41658))).then((ee => ee.startWasmPadGameplay)) : Promise.all([He.e(84), He.e(259), He.e(258), He.e(111), He.e(87), He.e(85), He.e(86), He.e(203), He.e(255), He.e(89), He.e(103), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(234), He.e(219), He.e(100), He.e(269), He.e(88), He.e(243), He.e(174), He.e(251), He.e(175)]).then((() => He(41768))).then((ee => ee.startPadGameplay))).then((He => {
            ie || (ee = He())
          })).catch((ee => {
            console.error("Pad gameplay failed to load", ee), ie || Ke(!0)
          })), () => {
            var He;
            ie = !0, null === (He = ee) || void 0 === He || He()
          }
        }), [ye]), (0, xe.useEffect)((() => {
          Me && ie && (Ke(!1), Tb.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((ee => {
            !0 === ee && (0, pb.reloadBloxd)()
          })))
        }), [Me, ie]), (0, ve.jsxs)(ve.Fragment, {
          children: [(0, ve.jsx)(cb, {}), (0, ve.jsx)(xb, {}), (0, ve.jsx)(Lb, {})]
        })
      },
      cb = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, qe.x)(), {
          gameState: He,
          isUiHidden: ye
        } = (0, Fe.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: Me
        } = (0, ke.p)(), Ke = (0, wb.f)(), Ue = (0, wb.i)(), [Je, Re] = (0, xe.useState)(Yb.b);
        return (0, zb.f)(Vb.q, Re), !ie || Me || ye || "inGame" !== He || !Ke && !Je ? null : (0, ve.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Ke && (0, ve.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ve.jsx)(Wb, {
              glyph: (0, oe.j)("actionButton")
            }), (0, ve.jsx)(Zb, {
              action: Ke
            }), Ue && (0, ve.jsx)("span", {
              className: "PadActionHintMore",
              children: ee("controller:gameplayActionWheelHint")
            })]
          }), Je && (0, ve.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ve.jsx)(Wb, {
              glyph: (0, oe.j)("pickBlock")
            }), (0, ve.jsx)("span", {
              children: ee("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      xb = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, qe.x)(), {
          gameState: He,
          isUiHidden: ye
        } = (0, Fe.m)(["gameState", "isUiHidden"]), [Me, Ke] = (0, xe.useState)(Pb.d);
        return (0, zb.f)(Vb.o, Ke), ie && !ye && "inGame" === He && Me ? (0, ve.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, ve.jsx)("span", {
            children: ee("controller:gameplayDropStack")
          }), (0, ve.jsx)(Db, {
            hold: Me
          })]
        }) : null
      },
      Lb = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, qe.x)(), {
          gameState: He,
          isUiHidden: ye
        } = (0, Fe.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: Me
        } = (0, ke.p)(), [Ke, Ue] = (0, xe.useState)(Ab.b);
        return (0, zb.f)(Vb.k, Ue), ie && !ye && "inGame" === He && Ke ? (0, ve.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Me && (0, ve.jsx)(Wb, {
            glyph: (0, oe.j)("attack")
          }), (0, ve.jsx)("span", {
            children: ee("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Cb = He(9505),
      vb = He(2018),
      ub = He(2532),
      mb = He(8946);
    const lb = ee => ee && !(0, Cb.b)(vb.c.get("shopInfo")),
      Sb = () => {
        const ee = "inGame" === (0, Fe.m)(["gameState"]).gameState;
        return (0, ub.g)("shopInfo", (() => {
          (0, mb.f)(lb(ee))
        })), (0, xe.useEffect)((() => {
          (0, mb.f)(lb(ee))
        }), [ee]), null
      },
      nb = () => {
        const {
          t: ee
        } = (0, be.v)(), {
          hideButtonHints: ie
        } = (0, ke.p)();
        (0, qe.z)();
        const He = (0, vi.j)();
        return (0, xe.useEffect)((() => (() => {
          const ee = Re.d.register({
              name: "inventory",
              isActive: KH.isActive,
              onFrame: KH.onFrame,
              onDeactivate: KH.onDeactivate,
              wakePressActs: KH.wakePressActs
            }),
            ie = ee => {
              KH.noteRealPointer(ee), KH.shouldBlockRealPointer(ee) && ee.stopPropagation()
            };
          for (const Ke of UH) window.addEventListener(Ke, ie, !0);
          const He = (0, Ge.m)((() => {
              "inventory" !== Re.d.getActiveConsumerName() && KH.forgetSurface()
            })),
            ye = ee => {
              const ie = ee.target;
              (0, qe.l)() && (0, Ie.g)(ie) && ie.closest(Oi) && (0, Ge.i)() && (0, Ge.r)(ie)
            };
          document.addEventListener("focusout", ye, !0);
          const {
            invalidate: be,
            onScroll: Me
          } = KH.targets;
          return document.addEventListener("scroll", Me, !0), window.addEventListener("resize", be), () => {
            ee(), He();
            for (const ee of UH) window.removeEventListener(ee, ie, !0);
            document.removeEventListener("scroll", Me, !0), document.removeEventListener("focusout", ye, !0), window.removeEventListener("resize", be), KH.targets.disconnect()
          }
        })()), []), (0, ve.jsxs)(ve.Fragment, {
          children: [(0, ve.jsx)(Se, {
            placer: KH.ring,
            className: "InventorySlotCursorRing"
          }), He.showing && !ie && (0, ve.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Ne(He).map((ie => {
              let {
                actions: ye,
                labelKey: be
              } = ie;
              return (0, ve.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [ye.map((ee => (0, ve.jsx)(Wb, {
                  glyph: (0, oe.j)(ee)
                }, ee))), (0, ve.jsx)("span", {
                  children: ee(`controller:${be}`)
                }), "inventoryDrop" === be && He.dropStackHold && (0, ve.jsx)(Db, {
                  hold: He.dropStackHold
                })]
              }, be)
            }))
          })]
        })
      },
      jb = [{
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
      sb = ee => Array.from(ee).map((ee => ({
        type: "char",
        char: ee,
        width: 1
      }))),
      Ib = function(ee) {
        return {
          type: "command",
          command: ee,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      hb = [Ib("page", 2), Ib("otherPage"), Ib("caretLeft"), Ib("space", 3), Ib("caretRight"), Ib("close", 1.5), Ib("submit", 1.5)],
      Nb = [Ib("page", 2), Ib("otherPage"), Ib("caretLeft"), Ib("space", 2), Ib("caretRight"), Ib("newline"), Ib("close", 1.5), Ib("submit", 1.5)],
      Gb = [
        [...sb("1234567890"), Ib("backspace")], sb("qwertyuiop/"), sb("asdfghjkl'?"), [Ib("shift", 2), ...sb("zxcvbnm,.")]
      ],
      rb = [
        [...sb("1234567890"), Ib("backspace")], sb("!@#$%^&*()/"), sb('-_=+[]{};:"'), sb("~`|\\<>'\u20ac\xa3,.")
      ],
      Qb = {
        letters: Gb,
        accents: [
          [...sb("1234567890"), Ib("backspace")], sb("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), sb("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Ib("shift", 2), ...sb("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: rb
      },
      eM = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      iM = (ee, ie) => "letters" === ee ? ie ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === ee ? "symbols" : "accents"
      },
      HM = function(ee, ie) {
        const He = ((ee, ie) => [...Qb[ee], ie ? Nb : hb])(ee, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === ie) return He;
        const ye = Math.min(2, yM(He[0]) / ie);
        return [Array.from({
          length: ie
        }, ((ee, ie) => ({
          type: "phrase",
          phraseIndex: ie,
          width: ye
        }))), ...He]
      },
      yM = ee => ee.reduce(((ee, ie) => ee + ie.width), 0),
      bM = ee => Math.max(...ee.map(yM)),
      MM = (ee, ie) => {
        const He = ee[ie.row];
        let ye = (bM(ee) - yM(He)) / 2;
        for (let be = 0; be < ie.col; be++) ye += He[be].width;
        return ye + He[ie.col].width / 2
      },
      KM = (ee, ie, He) => {
        let ye = 0,
          be = 1 / 0;
        for (let Me = 0; Me < ee[ie].length; Me++) {
          const Ke = Math.abs(MM(ee, {
            row: ie,
            col: Me
          }) - He);
          Ke < be - 1e-9 && (ye = Me, be = Ke)
        }
        return ye
      },
      UM = (ee, ie) => {
        const He = Math.max(0, Math.min(ee.length - 1, ie.row));
        return {
          row: He,
          col: Math.max(0, Math.min(ee[He].length - 1, ie.col))
        }
      },
      FM = (ee, ie, He) => "once" === ee && ie - He <= 400 ? "caps" : "off" === ee ? "once" : "off",
      JM = (ee, ie) => "once" === ee && (ee => ee.toLowerCase() !== ee.toUpperCase())(ie) ? "off" : ee,
      oM = (ee, ie, He) => {
        if ("symbols" === ie || "off" === He) return ee;
        const ye = ee.toUpperCase();
        return 1 === ye.length ? ye : ee
      };
    var RM = He(9389);
    const kM = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const qM = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(ee) {
          return !(ee - this.lastSendMs < 2e3) && (this.lastSendMs = ee, !0)
        }
      },
      fM = {
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
      TM = ["EJ", "nameTag"],
      pM = ee => {
        const ie = ee.target instanceof HTMLTextAreaElement && !TM.includes(ee.kind);
        return HM(ee.page, "chat" === ee.kind ? kM.length : 0, ie)
      },
      XM = ee => {
        const ie = ee.getBoundingClientRect(),
          He = window.innerHeight,
          ye = ie.top + ie.height / 2 < He / 2 ? "bottom" : "top",
          be = "bottom" === ye ? He - ie.bottom - 6 : ie.top - 6;
        return {
          placement: ye,
          maxHeightPx: Math.min(.46 * He, Math.max(.3 * He, be))
        }
      },
      zM = ee => {
        (0, PH.g)(ee) ? (0, PH.e)().close(): (ib.noteChosenStop(ee), ee.blur())
      };
    class BM {
      constructor(ee) {
        this.host = ee, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(ee, ie) {
        this.phraseTexts = ee, this.phrasesFill = ie
      }
      pressKey(ee) {
        const ie = this.host.getState(),
          He = pM(ie),
          ye = He[ee.row][ee.col];
        this.host.setState({
          ...ie,
          focus: ee,
          preferredX: MM(He, ee)
        }), "char" === ye.type ? this.typeChar(ye.char) : "command" === ye.type ? this.runCommand(ye.command) : this.sendPhrase(ye.phraseIndex)
      }
      runCommand(ee) {
        const ie = this.host.getState();
        switch (ee) {
          case "backspace":
            (0, Ie.d)(ie.target);
            break;
          case "space":
            (0, Ie.f)(ie.target, " ");
            break;
          case "newline":
            (0, Ie.f)(ie.target, "\n");
            break;
          case "caretLeft":
            (0, Ie.h)(ie.target, -1);
            break;
          case "caretRight":
            (0, Ie.h)(ie.target, 1);
            break;
          case "shift": {
            const ee = performance.now();
            this.host.setState({
              ...ie,
              shift: FM(ie.shift, ee, this.lastShiftPressMs)
            }), this.lastShiftPressMs = ee;
            break
          }
          case "page":
          case "otherPage": {
            const He = iM(ie.page, ie.accentsFirst)[ee];
            this.host.setState({
              ...ie,
              page: He,
              focus: UM(pM({
                ...ie,
                page: He
              }), ie.focus)
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
            (0, PH.g)(ie.target) && (0, PH.e)().selectNextChannel()
        }
      }
      submit() {
        var ee, ie;
        const {
          target: He
        } = this.host.getState();
        this.host.hide(), (0, PH.g)(He) ? (0, PH.e)().submit() : (ib.noteChosenStop(He), null === (ee = (ie = (0, PH.f)(He)).submit) || void 0 === ee || ee.call(ie), document.activeElement === He && He.blur())
      }
      close() {
        const {
          target: ee
        } = this.host.getState();
        this.host.hide(), zM(ee)
      }
      typeChar(ee) {
        const {
          target: ie,
          page: He,
          shift: ye
        } = this.host.getState();
        (0, Ie.f)(ie, oM(ee, He, ye)), this.host.setState({
          ...this.host.getState(),
          shift: JM(ye, ee)
        })
      }
      sendPhrase(ee) {
        if (this.phrasesFill) {
          const {
            target: ie
          } = this.host.getState(), He = this.phraseTexts[ee];
          He && (ie.setSelectionRange(0, ie.value.length), (0, Ie.f)(ie, He))
        } else qM.claim(performance.now()) && (this.host.hide(), (0, PH.e)().sendLine(this.phraseTexts[ee]))
      }
    }
    var EM = He(9413);
    const gM = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      OM = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class dM {
      constructor(ee, ie) {
        this.host = ee, this.editor = ie, this.lastDirection = null, this.navRepeat = new fe.e((0, Te.b)(gM)), this.commandRepeats = new Map(jb.filter((ee => {
          let {
            repeats: ie
          } = ee;
          return ie
        })).map((ee => {
          let {
            command: ie
          } = ee;
          return [ie, (0, Te.b)(OM)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const ee of this.commandRepeats.values()) ee.reset()
      }
      onVisibleFrame(ee) {
        const ie = performance.now();
        for (const {
            command: be,
            action: Me
          }
          of jb) {
          const He = (0, oe.j)(Me),
            ye = this.commandRepeats.get(be);
          if ((ye ? ye.update(ee.isHeld(He), ie) : ee.wasPressed(He)) && (this.editor.runCommand(be), !this.host.getState().visible)) return
        }
        if (ee.wasPressed((0, oe.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const He = this.readNavDirection(ee);
        this.lastDirection = He;
        const ye = this.navRepeat.update(He, ie);
        ye && this.navigate(ye)
      }
      onHiddenFrame(ee, ie) {
        var He;
        if (ee.wasPressed((0, oe.j)("keyboardClose"))) return void zM(ie);
        const ye = (0, oe.j)("keyboardType");
        if (ee.wasPressed(ye)) return Re.d.consumeButton(ye), void this.host.open(ie);
        const be = this.readNavDirection(ee),
          Me = null !== be && be !== this.lastDirection;
        if (this.lastDirection = be, !Me || (0, PH.g)(ie)) return;
        const Ke = (null === (He = ky()) || void 0 === He ? void 0 : He.root.contains(ie)) || null !== ie.closest(".EntireInventoryWrapper");
        zM(ie), Ke && Re.d.handOffHeldInput()
      }
      navigate(ee) {
        const ie = this.host.getState();
        if ("Up" === ee && 0 === ie.focus.row && "chat" === ie.kind) return (0, PH.e)().stepHistory(), void this.host.setState({
          ...ie
        });
        const He = ((ee, ie, He, ye) => {
          if ("Left" === He || "Right" === He) {
            const ye = ee[ie.row].length,
              be = (ie.col + ("Right" === He ? 1 : -1) + ye) % ye,
              Me = {
                row: ie.row,
                col: be
              };
            return {
              pos: Me,
              preferredX: MM(ee, Me)
            }
          }
          const be = (ie.row + ("Down" === He ? 1 : -1) + ee.length) % ee.length;
          return {
            pos: {
              row: be,
              col: KM(ee, be, ye)
            },
            preferredX: ye
          }
        })(pM(ie), ie.focus, ee, ie.preferredX);
        this.host.setState({
          ...ie,
          focus: He.pos,
          preferredX: He.preferredX
        })
      }
      readNavDirection(ee) {
        for (const ie of fe.A)
          if (ee.isHeld(ie)) return ie;
        return (0, fe.gb)((0, fe.k)(ee.leftStick, (0, ke.h)().moveDeadzone))
      }
    }
    const WM = ["Up", "Down", "Left", "Right"],
      tM = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const ZM = new class {
      constructor() {
        this.state = fM, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new BM(this), this.padInput = new dM(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(ee) {
        const ie = ee.visible !== this.state.visible;
        this.state = ee;
        for (const He of this.listeners) He();
        ie && Je.h.yR(EM.c, ee.visible)
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      install() {
        const ee = Re.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Ie.g)(document.activeElement),
            onFrame: ee => {
              this.onFrame(ee)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: ee => WM.includes(ee) || !this.state.visible && ee === (0, oe.j)("keyboardType")
          }),
          ie = ee => {
            const ie = ee.target;
            (0, Ie.g)(ie) && (ie === this.pendingChatInput || (0, qe.l)() ? this.open(ie) : this.state.visible && ie !== this.state.target && (this.ownedField = null, this.hide()))
          },
          He = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          ye = ee => {
            ee.isTrusted && this.state.visible && (ee => !ee.repeat && !tM.has(ee.key) && !(0, RM.d)(ee.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(ee.key))(ee) && this.hide()
          },
          be = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...XM(this.state.target)
            })
          };
        document.addEventListener("focusin", ie, !0), document.addEventListener("focusout", He, !0), window.addEventListener("keydown", ye, !0), window.addEventListener("resize", be);
        const Me = Je.h.subscribe(Vb.e, (() => {
            this.openChat()
          })),
          Ke = Je.h.subscribe(EM.e, (ee => {
            this.openForField(ee)
          }));
        return () => {
          ee(), document.removeEventListener("focusin", ie, !0), document.removeEventListener("focusout", He, !0), window.removeEventListener("keydown", ye, !0), window.removeEventListener("resize", be), Je.h.unsubscribe(Me), Je.h.unsubscribe(Ke), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const ee = (0, PH.e)();
        ee ? document.activeElement !== ee.input ? (this.clearPendingChat(), this.pendingChatInput = ee.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), ee.open()) : this.open(ee.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(ee) {
        (0, Ie.g)(ee) ? (document.activeElement !== ee && ee.focus(), document.activeElement === ee && this.open(ee)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", ee)
      }
      open(ee) {
        var ie;
        if (this.clearPendingChat(), this.ownedField = ee, this.state.visible && this.state.target === ee) return;
        this.restoreInputMode(), (0, Ie.k)(ee), this.savedInputMode = ee.getAttribute("inputmode"), ee.setAttribute("inputmode", "none");
        const He = {
          ...fM,
          visible: !0,
          target: ee,
          kind: (0, PH.g)(ee) ? "chat" : null !== (ie = (0, PH.f)(ee).kind) && void 0 !== ie ? ie : null,
          accentsFirst: (ye = Bb.f.get().getCurrentLanguageCode(), eM.has(ye)),
          ...XM(ee)
        };
        var ye;
        const be = pM(He),
          Me = ((ee, ie) => {
            for (let He = 0; He < ee.length; He++) {
              const ye = ee[He].findIndex((ee => "char" === ee.type && ee.char === ie));
              if (-1 !== ye) return {
                row: He,
                col: ye
              }
            }
            return null
          })(be, "q");
        this.padInput.reset(), this.setState({
          ...He,
          focus: Me,
          preferredX: MM(be, Me)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(fM))
      }
      onFrame(ee) {
        if (this.releaseLostField()) return;
        const ie = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(ee) : (0, Ie.g)(ie) && this.padInput.onHiddenFrame(ee, ie)
      }
      releaseLostField() {
        const ee = this.ownedField;
        return !(null === ee || ee.isConnected && document.activeElement === ee) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: ee
        } = this.state;
        ee && (null === this.savedInputMode ? ee.removeAttribute("inputmode") : ee.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var wM = He(2930);
    const DM = new Map(jb.map((ee => {
        let {
          command: ie,
          action: He
        } = ee;
        return [ie, He]
      }))),
      PM = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      AM = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        EJ: "controller:keyboardTargetBookTitle"
      },
      YM = ee => {
        const ie = (() => {
          const [, ee] = (0, xe.useReducer)((ee => ee + 1), 0);
          return ee
        })();
        (0, xe.useEffect)((() => {
          if (!ee) return;
          const He = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const be of He) ee.addEventListener(be, ie);
          document.addEventListener("selectionchange", ie);
          const ye = new MutationObserver(ie);
          return ye.observe(ee, {
            attributeFilter: ["placeholder"]
          }), () => {
            ye.disconnect();
            for (const ye of He) ee.removeEventListener(ye, ie);
            document.removeEventListener("selectionchange", ie)
          }
        }), [ee, ie])
      },
      VM = ee => {
        ee.preventDefault()
      },
      aM = ee => {
        "mouse" !== ee.pointerType && ee.preventDefault()
      },
      cM = () => {
        var ee;
        const {
          t: ie
        } = (0, be.v)(), He = (() => {
          const [ee, ie] = (0, xe.useState)(ZM.getState());
          return (0, xe.useEffect)((() => ZM.subscribe((() => {
            ie(ZM.getState())
          }))), []), ee
        })(), ye = (0, qe.x)(), Me = (0, xe.useRef)(null);
        (0, ke.p)(), (0, qe.z)(), (0, xe.useEffect)((() => {
          const ee = ZM.install(),
            ie = null;
          return () => {
            ee(), null === ie || void 0 === ie || ie()
          }
        }), []);
        const Ke = (0, xe.useMemo)((() => kM.map((ee => ie(ee)))), [ie]),
          Ue = He.visible && "chat" === He.kind ? He.target : null;
        YM(Ue);
        const Fe = null !== (ee = null === Ue || void 0 === Ue ? void 0 : Ue.value) && void 0 !== ee ? ee : "",
          Je = ((ee, ie, He) => {
            if (!ee.startsWith("/")) return [];
            const ye = [];
            for (let be = ie.length - 1; be >= 0 && ye.length < He; be--) {
              const He = ie[be].trim();
              He.startsWith(ee) && He !== ee && !ye.includes(He) && ye.push(He)
            }
            return ye
          })(Fe, Fe.startsWith("/") ? (0, wM.f)() : [], kM.length),
          Re = Fe.startsWith("/"),
          fe = Re ? kM.map(((ee, ie) => {
            var He;
            return null !== (He = Je[ie]) && void 0 !== He ? He : ""
          })) : Ke;
        if ((0, xe.useEffect)((() => {
            ZM.editor.setPhraseRow(fe, Re)
          })), (0, xe.useEffect)((() => {
            const ee = Me.current;
            if (ee) return ee.addEventListener("touchstart", VM, {
              passive: !1
            }), () => {
              ee.removeEventListener("touchstart", VM)
            }
          }), [He.visible]), !He.visible) return null;
        const Te = pM(He),
          pe = bM(Te),
          Xe = ee => "char" === ee.type ? oM(ee.char, He.page, He.shift) : "phrase" === ee.type ? fe[ee.phraseIndex] : (ee => {
            switch (ee) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === He.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return PM[iM(He.page, He.accentsFirst)[ee]];
              case "space":
                return ie("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return ie("chat" === He.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(ee.command),
          ze = ee => {
            ZM.editor.pressKey(ee)
          };
        return (0, ve.jsxs)("div", {
          ref: Me,
          className: Ce()(PH.j, "top" === He.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: He.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Te.length,
            "--pad-keyboard-height": `${He.maxHeightPx}px`
          },
          onPointerDown: aM,
          onMouseDown: VM,
          children: [(0, ve.jsx)(xM, {
            target: He.target,
            label: He.kind ? ie(AM[He.kind]) : He.target.placeholder || ie("controller:keyboardTargetText")
          }), (0, ve.jsx)("div", {
            className: "PadKeyboardRows",
            children: Te.map(((ee, ie) => (0, ve.jsx)("div", {
              className: Ce()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === ee[0].type
              }),
              children: ee.map(((ee, be) => {
                const Me = ye && He.focus.row === ie && He.focus.col === be,
                  Ke = "command" === ee.type ? DM.get(ee.command) : void 0;
                return (0, ve.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: ee.width / pe * 100 + "%"
                  },
                  children: (0, ve.jsxs)("div", {
                    className: Ce()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Me,
                      PadKeyboardKeyCommand: "command" === ee.type,
                      PadKeyboardKeyPhrase: "phrase" === ee.type,
                      PadKeyboardKeyActive: "command" === ee.type && "shift" === ee.command && "off" !== He.shift,
                      PadKeyboardKeySubmit: "command" === ee.type && "submit" === ee.command
                    }),
                    role: "button",
                    onClick: () => {
                      ze({
                        row: ie,
                        col: be
                      })
                    },
                    onTouchEnd: ee => {
                      var He, ye;
                      ee.preventDefault(), He = ee.changedTouches[0], ye = ee.currentTarget.getBoundingClientRect(), He && He.clientX >= ye.left && He.clientX <= ye.right && He.clientY >= ye.top && He.clientY <= ye.bottom && ze({
                        row: ie,
                        col: be
                      })
                    },
                    children: [(0, ve.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Xe(ee)
                    }), ye && Ke && (0, ve.jsx)(Wb, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, oe.j)(Ke)
                    })]
                  })
                }, be)
              }))
            }, ie)))
          })]
        })
      },
      xM = ee => {
        let {
          target: ie,
          label: He
        } = ee;
        YM(ie);
        const ye = (0, xe.useRef)(null),
          be = (0, xe.useRef)(null),
          Me = ie instanceof HTMLTextAreaElement;
        (0, xe.useLayoutEffect)((() => {
          const ee = ye.current,
            ie = be.current;
          Me ? ee.scrollTop = ie.offsetTop - ee.clientHeight / 2 : ee.scrollLeft = ie.offsetLeft - ee.clientWidth / 2
        }));
        const {
          value: Ke,
          start: Ue,
          end: Fe
        } = (0, Ie.m)(ie), Je = "password" === ie.type ? "\u2022".repeat(Ke.length) : Ke;
        return (0, ve.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, ve.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: He
          }), (0, ve.jsxs)("div", {
            ref: ye,
            className: Ce()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Me
            }),
            children: [(0, ve.jsx)("span", {
              children: Je.slice(0, Ue)
            }), (0, ve.jsx)("span", {
              ref: be,
              className: "PadKeyboardCaret"
            }), Ue !== Fe && (0, ve.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Je.slice(Ue, Fe)
            }), (0, ve.jsx)("span", {
              children: Je.slice(Fe)
            }), 0 === Je.length && ie.placeholder && ie.placeholder !== He && (0, ve.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: ie.placeholder
            })]
          })]
        })
      };
    var LM = He(1385),
      CM = He(3773);
    const vM = function() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return ie.map(oe.j)
      },
      uM = (ee, ie) => {
        const He = sH(ee);
        return He ? [{
          glyphs: [He],
          labelKey: ie
        }] : []
      },
      mM = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      lM = "--pad-hint-bar-clearance",
      SM = "[data-pad-hint-bar-avoid]",
      nM = ee => {
        const ie = [];
        for (const He of ee)(0, re.k)(He) && ie.push(He.getBoundingClientRect());
        return ie
      },
      jM = ee => {
        if (!ee) return null;
        const ie = ky(),
          He = ie ? nM(((ee, ie) => {
            const He = ee.closest(SM);
            return He ? [He] : ("popup" === ie ? document : ee).querySelectorAll(SM)
          })(ie.root, ie.layer.kind)) : [],
          ye = !ie || ie.root.hasAttribute("data-pad-shows-hud");
        if (((0, CM.i)(null === ie || void 0 === ie ? void 0 : ie.layer.kind, (0, CM.k)()) || ye) && He.push(...nM(document.querySelectorAll(mM.join(",")))), 0 === He.length) return null;
        const {
          width: be,
          height: Me
        } = ee.getBoundingClientRect(), Ke = window.innerHeight - 8, Ue = (0, CM.m)(Ke, {
          width: be,
          height: Me
        }, window.innerWidth / 2, He, 8);
        return Ue === Ke ? null : Math.round(window.innerHeight - Ue)
      },
      sM = ee => {
        const ie = document.documentElement.style,
          He = ee ? `${Math.round(window.innerHeight-ee.getBoundingClientRect().top)}px` : "";
        ie.getPropertyValue(lM) !== He && (He ? ie.setProperty(lM, He) : ie.removeProperty(lM))
      },
      IM = () => {
        const {
          t: ee
        } = (0, be.v)(), {
          hideButtonHints: ie
        } = (0, ke.p)(), He = (0, qe.x)(), [ye, Me] = (0, xe.useState)(!1), [Ke, Je] = (0, xe.useState)([]), [Te, pe] = (0, xe.useState)(null), Xe = (0, xe.useRef)(null), ze = (0, xe.useRef)(null);
        (0, zb.f)(EM.c, (ee => {
          Me(ee)
        })), (0, zb.f)(CM.l, (() => {
          var ee;
          null === (ee = ze.current) || void 0 === ee || ee.call(ze)
        }));
        const Be = He && !ie && !ye;
        return (0, xe.useEffect)((() => {
          if (!Be) return;
          let ee = null;
          const ie = () => {
            const ie = (() => {
                var ee;
                const ie = Re.d.getActiveConsumerName(),
                  He = (0, CM.g)();
                if (He) {
                  const ee = (0, oe.j)(He),
                    ie = "emoteWheel" === He && "wheel" === (0, ke.h)().emoteButton || !(0, fe.L)(Re.d.getLastFrame().values, ee) ? {
                      glyphs: vM("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [ee],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, oe.w)(ee)],
                    labelKey: "controller:wheelChoose"
                  }, ie, {
                    glyphs: vM("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const ye = ky();
                if (!ye || "focus" !== ie && "cursor" !== ie) return (0, CM.c)(oe.j);
                const be = [],
                  Me = {
                    glyphs: vM("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Ke = (0, ne.B)(ye.root),
                  Ue = Ke ? !(0, re.r)(Ke) : Boolean(ye.layer.close),
                  Je = !Ke && ye.layer.closeLabelKey ? ye.layer.closeLabelKey : Me.labelKey,
                  qe = Ue ? [{
                    ...Me,
                    labelKey: Je
                  }] : [],
                  Te = VH(ye.layer.kind) ? [{
                    glyphs: vM("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === ie) return be.push({
                  glyphs: vM("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), be.push({
                  glyphs: vM("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), be.push(...qe), be.push(...Te), be.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), wy() && be.push({
                  glyphs: vM("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), be;
                const pe = ib.getFocused();
                pe && (0, Vy.b)(pe) ? be.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : pe && (0, ne.J)(pe) ? be.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : be.push({
                  glyphs: vM("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Xe = pe ? null === (ee = fH(pe)) || void 0 === ee ? void 0 : ee.dataset.padSecondary : void 0;
                Xe && be.push({
                  glyphs: vM("menuSecondary"),
                  labelKey: Xe
                }), be.push(...null !== pe && void 0 !== pe && pe.closest("[data-pad-friends-column]") ? [Me] : qe), be.push(...Te);
                const ze = "home" === ye.layer.kind;
                NH(ye.root) || !CH(ye.root) && !GH(ye) ? ze && be.push({
                  glyphs: vM("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : be.push({
                  glyphs: vM("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), ze && (be.push(...uM("inventory", "controller:menusFriends")), Xe || be.push({
                  glyphs: vM("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), be.push(...uM("pause", "controller:menusSettings")), be.push(...uM("leaderboard", "controller:menusNotifications")));
                const Be = Fe.e.get("openEverythingMenuName");
                return "inGame" === Fe.e.get("gameState") && "popup" !== ye.layer.kind && null !== Be && ((0, oH.j)(Be) ? be.push(...uM("leaderboard", "controller:menusClose")) : Be !== JH.r.LOBBY_LEADERBOARD && be.push(...uM("leaderboard", "controller:menusLobby"))), be.push({
                  glyphs: vM("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), be
              })(),
              He = jM(Xe.current),
              ye = ((ee, ie) => `${ee.map((ee=>`${ee.glyphs.join("+")}:${ee.labelKey}`)).join("|")}@${ie}`)(ie, He);
            ye !== ee && (ee = ye, (0, Ue.unstable_batchedUpdates)((() => {
              Je(ie), pe(He)
            }))), sM(Xe.current)
          };
          ie(), ze.current = ie;
          const He = requestAnimationFrame(ie),
            ye = setInterval(ie, 150);
          return () => {
            ze.current = null, cancelAnimationFrame(He), clearInterval(ye), sM(null)
          }
        }), [Be]), (0, xe.useLayoutEffect)((() => {
          if (!Be) return;
          if (0 === Ke.length) return void sM(null);
          const ee = jM(Xe.current);
          ee === Te ? sM(Xe.current) : pe(ee)
        }), [Be, Ke, Te]), Be && 0 !== Ke.length ? (0, ve.jsx)("div", {
          ref: Xe,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Te ? void 0 : {
            bottom: Te
          },
          "aria-hidden": !0,
          children: Ke.map((ie => (0, ve.jsxs)("div", {
            className: "PadButtonHint",
            children: [ie.glyphs.map((ee => (0, ve.jsx)(Wb, {
              glyph: ee,
              className: "PadButtonHintGlyph"
            }, ee))), (0, ve.jsx)("span", {
              children: ee(ie.labelKey)
            })]
          }, ie.labelKey)))
        }) : null
      };
    var hM = He(1774);
    const NM = [re.b, "label", "[data-pad-slider]"].join(","),
      GM = "data-pad-cursor-probe",
      rM = ee => {
        var ie;
        const He = (ee => {
          const ie = [];
          for (let ye = ee; ye && ye !== document.body && ye !== document.documentElement && (ie.push(ye), !(ie.length > 8)); ye = ye.parentElement);
          const He = document.documentElement.classList.contains(qe.r) ? ie[ie.length - 1] : void 0;
          null === He || void 0 === He || He.setAttribute(GM, "");
          try {
            return ie.map((ee => ({
              element: ee,
              cursor: getComputedStyle(ee).cursor
            })))
          } finally {
            null === He || void 0 === He || He.removeAttribute(GM)
          }
        })(ee);
        if ("pointer" !== (null === (ie = He[0]) || void 0 === ie ? void 0 : ie.cursor)) return null;
        let ye = 0;
        for (; ye + 1 < He.length && "pointer" === He[ye + 1].cursor;) ye++;
        return He[ye].element
      },
      QM = (ee, ie, He, ye) => {
        const be = ye.root.contains(ee) ? ye.root : null;
        for (let Me = ee; Me && Me !== document.body && Me !== document.documentElement; Me = Me.parentElement) {
          if (Me instanceof HTMLElement && Ze(Me, ie) && Ye(Me, ie, He)) return Me;
          if (Me === be) break
        }
        return "home" === ye.layer.kind || "gamePage" === ye.layer.kind ? ((ee, ie) => {
          const He = document.scrollingElement;
          return He instanceof HTMLElement && ![document.documentElement, document.body].some((ie => {
            const He = getComputedStyle(ie),
              ye = "y" === ee ? He.overflowY : He.overflowX;
            return "hidden" === ye || "clip" === ye
          })) && Ye(He, ee, ie) ? He : null
        })(ie, He) : null
      };
    const eK = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Te.b)(fe.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const ee = Re.d.register({
              name: "cursor",
              isActive: () => "cursor" === Dy(),
              onFrame: ee => {
                this.onFrame(ee)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: ee => (0, Re.f)(ee) || ee === (0, oe.j)("menuConfirm") && (0, ne.K)((0, qe.e)())
            }),
            ie = (0, by.l)((ee => {
              const ie = ee.getRoot();
              ie && this.layerPoints.delete(ie), ie === this.layerRoot && (this.layerRoot = null)
            })),
            He = Je.h.subscribe("appManagerUpdated|activeInputDevice", (ee => {
              "gamepad" !== ee && this.active && !this.hidden && this.hide()
            }));
          return () => {
            ee(), ie(), Je.h.unsubscribe(He), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, qe.l)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.yR()
        }
        activate(ee) {
          this.active = !0, this.hidden = !1;
          const ie = Wy();
          !ie || ie.root && ie.root !== ee.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(ee), this.jumpTo(ie.point))
        }
        jumpTo(ee) {
          this.state = {
            x: ee.x,
            y: ee.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.yR())
        }
        onFrame(ee) {
          const ie = ky();
          if (!ie) return;
          if (this.active || this.activate(ie), this.followPage(ie)) return;
          this.followLayer(ie);
          const He = ee.wokeDevice ? (0, qe.e)() : null;
          if (He && this.jumpTo(He), !(0, qe.l)()) return void this.hide();
          const ye = (0, oe.j)("menuToggleCursor");
          if (ee.wasPressed(ye)) return Re.d.consumeButton(ye), void dy(this.getHandoff(null));
          if (this.handBackToFocus(ee)) return;
          const be = (0, oe.j)("menuConfirm"),
            Me = (0, oe.j)("menuSecondary");
          if (ee.wasPressed((0, oe.j)("menuBack"))) return (0, ne.p)(ie.root) || (0, ne.h)(ie.root) || qy(), void this.yR();
          if (ey(null, ee, ie)) return ee.wasReleased(be) && this.press && (this.updateHit(!1), this.updateConfirm(ee, be)), void this.yR();
          if (document.pointerLockElement) return void this.hide();
          const Ke = Py() ? {
              x: 0,
              y: 0
            } : (ee => {
              const ie = (ee, ie) => (ee ? 1 : 0) - (ie ? 1 : 0);
              return {
                x: ie(ee.isHeld("Right"), ee.isHeld("Left")),
                y: ie(ee.isHeld("Down"), ee.isHeld("Up"))
              }
            })(ee),
            Ue = (0, ke.h)().moveDeadzone,
            Fe = ((ee, ie) => {
              const He = (0, fe.k)(ee, Ee(ie));
              return Math.hypot(He.x, He.y)
            })(ee.leftStick, Ue) > 0 || 0 !== Ke.x || 0 !== Ke.y;
          if (this.hidden) {
            const ie = ee.wasPressed(be),
              He = ee.wasPressed(Me);
            if (!Fe && !de(ee.rightStick) && !ie && !He && !ee.wokeDevice) return void this.yR();
            if (this.hidden = !1, this.updateHit(!1), ie || He) return ie && (this.press = {
              kind: "ignored"
            }, ee.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.yR()
          }
          this.movePendingPageStart(Fe);
          const Je = this.getPoint();
          this.state = Oe(this.state, {
            stick: ee.leftStick,
            moveDeadzone: Ue,
            dpad: Ke,
            dtMs: ee.dtMs,
            cursorSpeedPercent: (0, ke.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Te = this.state.x !== Je.x || this.state.y !== Je.y,
            pe = [be, Me].some((ie => ee.wasPressed(ie) || ee.wasReleased(ie)));
          (Te || pe || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Te), this.updateConfirm(ee, be), this.updateSecondary(ee, Me), this.updateScroll(ee, ie), this.yR()
        }
        followPage(ee) {
          const ie = "home" === ee.layer.kind || "gamePage" === ee.layer.kind,
            He = this.page;
          if (this.page = ie ? {
              key: (0, by.r)(ee.layer),
              root: ee.root
            } : null, !this.page || !He || He.root !== ee.root || He.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(ee), "hybrid" === Oy()) return By = null, Xy = null, Ey.lock(), !0;
          const {
            key: ye
          } = this.page;
          return this.pendingPageStart = {
            root: ee.root,
            key: ye,
            returning: ib.notePageEnteredByCursor(ye),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(ee) {
          const ie = this.pendingPageStart;
          if (!ie) return;
          if (ee || ie.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const He = ie.returning ? ib.recallStop(ie.root, ie.key) : null;
          if (!He && ie.returning && performance.now() - ie.enteredAtMs < 1e3) return;
          const ye = null !== He && void 0 !== He ? He : ib.pickInitial(ie.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: ie.enteredAtMs
          });
          ye && (this.pendingPageStart = null, this.jumpTo((0, ne.E)(ye)))
        }
        setLayer(ee) {
          this.layerRoot = ee.root, this.layerOrder = ee.order
        }
        followLayer(ee) {
          var ie;
          if (ee.root === this.layerRoot) return;
          null !== (ie = this.layerRoot) && void 0 !== ie && ie.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const He = this.layerPoints.get(ee.root),
            ye = He && ee.order <= this.layerOrder ? He : ib.getLayerStartPoint(ee.root);
          this.setLayer(ee), this.jumpTo(ye)
        }
        getHandoff(ee) {
          var ie;
          return {
            point: this.getPoint(),
            element: null !== (ie = this.interactive) && void 0 !== ie ? ie : this.findDraggedSliderNearby(),
            direction: ee
          }
        }
        findDraggedSliderNearby() {
          const ee = this.draggedSlider;
          if (null === ee || void 0 === ee || !ee.isConnected) return null;
          const ie = ee.getBoundingClientRect(),
            {
              y: He
            } = this.getPoint();
          return He >= ie.top - 40 && He <= ie.bottom + 40 ? ee : null
        }
        handBackToFocus(ee) {
          if (!Py()) return !1;
          const ie = fe.A.find((ie => ee.wasPressed(ie)));
          return !!ie && (He = this.getHandoff(ie), By = Ty(He), Xy = null, Ey.lock(), Re.d.handOffHeldInput(), !0);
          var He
        }
        getAssistContext() {
          const ee = this.interactive;
          if (null === ee || void 0 === ee || !ee.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ie = ee.getBoundingClientRect();
          if (ie.width > .4 * window.innerWidth || ie.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const He = (0, ke.h)().cursorMagnetism && !(0, hM.e)(ee) && !ee.closest("[data-pad-slider]"),
            ye = this.magnet && this.magnet !== ee && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : ie;
          return {
            overInteractive: !0,
            magnetTarget: He ? {
              x: ye.left + ye.width / 2,
              y: ye.top + ye.height / 2
            } : null
          }
        }
        updateHit(ee) {
          this.lastHitTestMs = performance.now();
          const ie = this.getPoint(),
            He = document.elementFromPoint(ie.x, ie.y),
            ye = He && !(0, Xe.n)(He) && (ee => {
              var ie;
              const He = ky();
              return !(He && !He.root.contains(ee) && !ee.closest(".tooltip-container")) || !(null !== (ie = document.getElementById("root")) && void 0 !== ie && ie.contains(ee))
            })(He) ? He : null;
          if (ye !== this.hit) return (0, ne.t)(this.hit, ye, ie), this.hit = ye, void this.setInteractive(ye ? (ee => {
            const ie = ee.closest(NM);
            if (ie) {
              var He, ye;
              const ee = null !== (He = null === (ye = ie.parentElement) || void 0 === ye ? void 0 : ye.closest("[data-pad-focusable]")) && void 0 !== He ? He : ie;
              return (0, re.r)(ee) ? {
                element: null,
                magnet: null
              } : {
                element: ee,
                magnet: ie
              }
            }
            const be = rM(ee);
            return {
              element: be,
              magnet: be
            }
          })(ye) : {
            element: null,
            magnet: null
          });
          ee && ye && (0, ne.t)(ye, ye, ie)
        }
        setInteractive(ee) {
          let {
            element: ie,
            magnet: He
          } = ee;
          this.interactive = ie, this.magnet = He
        }
        clearHover() {
          this.hit && (0, ne.t)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const ee = this.hit;
          if (!ee || (0, ne.J)(ee)) return {
            kind: "ignored"
          };
          const ie = (0, Vy.b)(ee),
            He = ee.closest("[data-pad-slider]");
          return ie && He ? {
            kind: "slider",
            slider: He,
            adjuster: ie
          } : ((0, ne.v)(ee, this.getPoint()), {
            kind: "pointer",
            target: ee
          })
        }
        applySliderFraction(ee) {
          var ie;
          const He = ee.slider.getBoundingClientRect(),
            ye = He.height > He.width,
            be = null === (ie = ee.slider.querySelector("[data-pad-slider-handle]")) || void 0 === ie ? void 0 : ie.getBoundingClientRect(),
            Me = be ? ye ? be.height : be.width : 0,
            Ke = (ye ? He.height : He.width) - Me;
          if (Ke <= 0) return;
          const Ue = ye ? He.bottom - Me / 2 - this.state.y : this.state.x - He.left - Me / 2;
          ee.adjuster.setFraction(Math.max(0, Math.min(1, Ue / Ke)))
        }
        updateConfirm(ee, ie) {
          ee.wasPressed(ie) && (this.press = ee.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const He = this.press;
          if (!He) return;
          if (ee.isHeld(ie)) return "slider" === He.kind && this.applySliderFraction(He), void this.updateRepeat();
          this.press = null;
          const ye = this.repeated;
          if (this.endRepeat(), !ee.wasReleased(ie)) return void this.endPressWithoutClick(He);
          const be = this.getPoint(),
            Me = this.hit;
          if ("slider" === He.kind && He.adjuster.endDrag(), "pointer" === He.kind) {
            const ee = null !== Me && void 0 !== Me ? Me : He.target.isConnected ? He.target : null;
            ee && (0, ne.z)(ee, be);
            const ie = Me && He.target.isConnected && !ye ? ((ee, ie) => {
              for (let He = ee; He; He = He.parentElement)
                if (He.contains(ie)) return He;
              return null
            })(He.target, Me) : null;
            ie && (ib.noteCursorActivation(ie), (0, Xe.e)(ie, new MouseEvent("click", (0, ne.Q)(be, 0, 0))), (0, ne.l)(ie), (0, ne.N)(ie) && (0, ne.L)(ie))
          }
        }
        beginRepeat() {
          var ee, ie, He;
          const ye = null !== (ee = null === (ie = this.hit) || void 0 === ie ? void 0 : ie.closest("[data-pad-repeat]")) && void 0 !== ee ? ee : null;
          this.repeatStop = ye, this.repeatKey = null !== (He = null === ye || void 0 === ye ? void 0 : ye.getAttribute("data-pad-repeat")) && void 0 !== He ? He : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const ee = this.repeatStop;
          if (!ee) return;
          const ie = this.hit;
          ee.isConnected && !(0, re.r)(ee) && ee.getAttribute("data-pad-repeat") === this.repeatKey && ie && ee.contains(ie) ? ee.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, ib.noteCursorActivation(ee), (0, Xe.e)(ee, new MouseEvent("click", (0, ne.Q)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(ee) {
          "slider" === ee.kind && ee.adjuster.endDrag(), "pointer" === ee.kind && ee.target.isConnected && (0, ne.z)(ee.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(ee, ie) {
          ee.wasPressed(ie) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !ee.isHeld(ie) && (this.secondaryArmed = !1, ee.wasReleased(ie) && this.hit && (0, ne.s)(this.hit, this.getPoint(), 2))
        }
        updateScroll(ee, ie) {
          const He = We(ee.rightStick, ee.dtMs);
          if (0 === He.x && 0 === He.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + He.x,
            y: this.scrollRemainder.y + He.y
          };
          const ye = Math.trunc(this.scrollRemainder.x),
            be = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - ye,
            y: this.scrollRemainder.y - be
          };
          const Me = this.hit;
          if (!Me) return;
          let Ke = !1;
          if (0 !== be) {
            const ee = QM(Me, "y", be > 0 ? 1 : -1, ie);
            ee && (ee.scrollBy({
              top: be,
              behavior: "instant"
            }), Ke = !0)
          }
          if (0 !== ye) {
            const ee = QM(Me, "x", ye > 0 ? 1 : -1, ie);
            ee && (ee.scrollBy({
              left: ye,
              behavior: "instant"
            }), Ke = !0)
          }
          Ke && (this.lastHitTestMs = -1 / 0)
        }
        yR() {
          se.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      iK = () => {
        const ee = (0, xe.useMemo)((() => new le), []),
          ie = (0, qe.x)();
        return (0, xe.useEffect)((() => {
          if (!ie) return;
          let He = 0,
            ye = {
              of: null,
              atMs: 0,
              list: []
            };
          const be = document.getElementsByClassName(Ay),
            Me = ee => {
              for (const ie of [...be]) ie !== ee && ie.classList.remove(Ay)
            },
            Ke = () => {
              var ie;
              He = requestAnimationFrame(Ke);
              const be = (() => {
                const ee = ib.getFocused();
                if (ib.isActive() && null !== ee && void 0 !== ee && ee.isConnected) return ee;
                const ie = eK.getHighlighted();
                return null !== ie && void 0 !== ie && ie.isConnected ? ie : null
              })();
              Me(be), be && !be.classList.contains(Ay) && be.classList.add(Ay);
              const Ue = null !== (ie = null === be || void 0 === be ? void 0 : be.closest("[data-pad-reticle-box]")) && void 0 !== ie ? ie : be;
              ee.show(Ue ? ((ee, ie) => {
                let He = ee.left,
                  ye = ee.top,
                  be = ee.right,
                  Me = ee.bottom;
                for (const Ke of ie) {
                  if (!Ke) continue;
                  const ee = ae(Ke);
                  He = Math.max(He, ee.left), ye = Math.max(ye, ee.top), be = Math.min(be, ee.right), Me = Math.min(Me, ee.bottom)
                }
                return be <= He || Me <= ye ? null : {
                  left: He,
                  top: ye,
                  width: be - He,
                  height: Me - ye
                }
              })(Ue.getBoundingClientRect(), (ee => {
                const ie = performance.now();
                return (ye.of !== ee || ie - ye.atMs > 500) && (ye = {
                  of: ee,
                  atMs: ie,
                  list: [we(ee, "y"), we(ee, "x")]
                }), ye.list
              })(Ue)) : null)
            };
          return He = requestAnimationFrame(Ke), () => {
            cancelAnimationFrame(He), Me(null), ee.hide()
          }
        }), [ie, ee]), (0, ve.jsx)(Se, {
          placer: ee,
          className: "PadFocusRing"
        })
      },
      HK = (ee, ie) => {
        ee.style.transform = `translate3d(${ie.x}px, ${ie.y}px, 0)`, ee.classList.toggle("Visible", ie.visible), ee.classList.toggle("Pressed", ie.pressed)
      },
      yK = () => {
        const ee = (0, xe.useRef)(null);
        return (0, xe.useEffect)((() => {
          const ie = se.subscribe((ie => {
            ee.current && HK(ee.current, ie)
          }));
          return ee.current && HK(ee.current, se.get()), ie
        }), []), (0, ve.jsx)("div", {
          ref: ee,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, ve.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      bK = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      MK = "PadOverThirdParty",
      KK = new Set(bK.map((ee => ee.id))),
      UK = () => {
        const ee = bK.map((ee => {
            let {
              id: ie,
              find: He,
              startSelectors: ye
            } = ee;
            return (0, by.p)({
              id: ie,
              kind: "popup",
              getRoot: () => {
                const ee = He(),
                  ie = ee ? ((ee, ie) => {
                    var He;
                    for (const ye of ie) {
                      const ie = ee.querySelector(ye);
                      if (ie) return ie
                    }
                    return null !== (He = [...ee.querySelectorAll("button")].find((ee => !ee.matches(".fc-cta-consent")))) && void 0 !== He ? He : null
                  })(ee, ye) : null;
                if (ee && ie && !ie.hasAttribute("data-pad-default-focus")) {
                  for (const ie of ee.querySelectorAll("[data-pad-default-focus]")) ie.removeAttribute("data-pad-default-focus");
                  for (const ie of ee.querySelectorAll("[data-pad-hint-bar-avoid]")) ie.removeAttribute("data-pad-hint-bar-avoid");
                  ie.setAttribute("data-pad-default-focus", ""), ((ee, ie) => {
                    let He = ee;
                    for (let ye = ee.parentElement; ye && ie.contains(ye) && !(ye.getBoundingClientRect().height >= window.innerHeight / 2); ye = ye.parentElement) He = ye;
                    return He
                  })(ie, ee).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return ee
              },
              close: null,
              memoryKey: null
            })
          })),
          ie = document.documentElement,
          He = Ke.g.onFrame((() => {
            const ee = (0, qe.l)() ? ky() : null,
              He = !!ee && (ye = ee.layer, KK.has(ye.id));
            var ye;
            ie.classList.contains(MK) !== He && ie.classList.toggle(MK, He)
          }));
        return () => {
          for (const ie of ee) ie();
          He(), ie.classList.remove(MK)
        }
      },
      FK = "PadLargePointer",
      JK = () => {
        (0, xe.useEffect)((() => {
          const ee = (0, Xe.k)(document.body),
            ie = ib.install(),
            He = eK.install(),
            ye = UK();
          return () => {
            ee(), ie(), He(), ye()
          }
        }), []);
        const {
          largePointer: ee
        } = (0, ke.p)(), ie = (0, LM.A)() && ee;
        return (0, xe.useEffect)((() => {
          if (ie) return document.documentElement.classList.add(FK), () => {
            document.documentElement.classList.remove(FK)
          }
        }), [ie]), (0, Ue.createPortal)((0, ve.jsxs)(ve.Fragment, {
          children: [(0, ve.jsx)(IM, {}), (0, ve.jsx)(iK, {}), (0, ve.jsx)(yK, {})]
        }), document.body)
      };
    var oK = He(9518),
      RK = He(9539),
      kK = He(9529);
    He(9548);
    const qK = (ee, ie) => {
        const [He, ye] = (0, xe.useState)(!1), [be, Me] = (0, xe.useState)(null), Ke = (0, xe.useRef)(null), Ue = (0, xe.useCallback)((ee => {
          Ke.current = ee, Me(ee)
        }), []), Fe = (0, xe.useCallback)((() => {
          ye(!1), Ue(null)
        }), [Ue]), oe = (0, xe.useCallback)((() => {
          ye(!0)
        }), []), Re = (0, xe.useCallback)(((ee, ie) => {
          Ue((0, kK.E)(ee, ie, Ke.current))
        }), [Ue]);
        (0, xe.useLayoutEffect)((() => (ie(He), (0, CM.q)(ee, He), Je.h.yR(CM.l), () => {
          ie(!1), (0, CM.q)(ee, !1), Je.h.yR(CM.l)
        })), [He, ee, ie]), (0, zb.f)("appManagerUpdated|activeInputDevice", (ee => {
          "gamepad" !== ee && Fe()
        })), (0, zb.f)("appManagerUpdated|gameState", (ee => {
          "inGame" !== ee && Fe()
        }));
        const ke = () => {
          (0, oH.o)() && Fe()
        };
        return (0, zb.f)("appManagerUpdated|openEverythingMenuName", ke), (0, zb.f)("appManagerUpdated|openInGameMenuName", ke), {
          open: He,
          picked: be,
          pickedRef: Ke,
          show: oe,
          aim: Re,
          close: Fe
        }
      },
      fK = ee => {
        let {
          className: ie,
          slotCount: He,
          picked: ye,
          slotLabel: be,
          renderSlot: Me,
          centre: Ke
        } = ee;
        const Ue = Array.from({
          length: He
        }, ((ee, ie) => ie));
        return (0, ve.jsx)("div", {
          className: Ce()("EmoteWheelOverlay PadRadialWheel", ie),
          children: (0, ve.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * kK.s + "rem",
              height: 2 * kK.s + "rem"
            },
            children: [(0, ve.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${kK.p} ${kK.p}`,
              children: [Ue.map((ee => (0, ve.jsx)("path", {
                d: (0, kK.u)(ee, He, kK.g, kK.i, kK.m),
                className: Ce()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: ee === ye
                }),
                "aria-label": be(ee)
              }, ee))), (0, ve.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: kK.g,
                cy: kK.g,
                r: kK.m
              }), (0, ve.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: kK.g,
                cy: kK.g,
                r: kK.i
              }), null !== ye && (0, ve.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, kK.u)(ye, He, kK.g, kK.i, kK.m)
              })]
            }), Ue.map((ee => {
              const ie = (0, kK.z)(ee, He);
              return (0, ve.jsx)("div", {
                className: Ce()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: ee === ye
                }),
                style: {
                  left: `calc(50% + ${kK.e*Math.cos(ie)}rem)`,
                  top: `calc(50% + ${kK.e*Math.sin(ie)}rem)`
                },
                "aria-hidden": !0,
                children: Me(ee)
              }, ee)
            })), (0, ve.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Ke
            })]
          })
        })
      },
      TK = kM.length,
      pK = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = qK("chat", YH.r), He = (0, xe.useMemo)((() => kM.map((ie => ee(ie)))), [ee]);
        return (0, zb.f)(YH.o, (() => {
          ie.open || (0, oK.f)() || (0, RK.q)() || "inGame" !== Fe.e.get("gameState") || (0, oH.o)() || !(0, PH.e)() || ie.show()
        })), (0, zb.f)(YH.g, (ee => {
          ie.open && ie.aim(ee, TK)
        })), (0, zb.f)(YH.m, (() => {
          var ee;
          if (!ie.open) return;
          const ye = ie.pickedRef.current;
          null !== ye ? qM.claim(performance.now()) && (ie.close(), null === (ee = (0, PH.e)()) || void 0 === ee || ee.sendLine(He[ye])) : ie.close()
        })), (0, zb.f)(YH.k, ie.close), ie.open ? (0, ve.jsx)(fK, {
          className: "QuickChatWheel",
          slotCount: TK,
          picked: ie.picked,
          slotLabel: ee => He[ee],
          renderSlot: ee => He[ee],
          centre: null !== ie.picked ? He[ie.picked] : ee("controller:quickChatPick")
        }) : null
      },
      XK = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = qK("actionButton", RK.u), [He, ye] = (0, xe.useState)([]);
        if ((0, zb.f)(RK.m, (ee => {
            ie.open || (0, oK.f)() || (0, YH.e)() || "inGame" !== Fe.e.get("gameState") || (0, oH.o)() || (ye(ee), ie.show())
          })), (0, zb.f)(RK.d, (ee => {
            ie.open && ie.aim(ee, He.length)
          })), (0, zb.f)(RK.i, (() => {
            if (!ie.open) return;
            const ee = ie.pickedRef.current;
            ie.close(), null !== ee && Je.h.yR(RK.o, He[ee])
          })), (0, zb.f)(RK.f, ie.close), !ie.open) return null;
        const Me = null !== ie.picked ? He[ie.picked] : null;
        return (0, ve.jsx)(fK, {
          className: "ActionWheel",
          slotCount: He.length,
          picked: ie.picked,
          slotLabel: ie => {
            const ye = He[ie];
            return "reload" === ye.kind ? ee("controller:gameplayReload") : "customButton" === ye.kind ? ye.description || ye.icon : "touchButton" === ye.kind && "string" === typeof ye.label ? ye.label : ""
          },
          renderSlot: ee => (0, ve.jsx)(Zb, {
            action: He[ee]
          }),
          centre: Me ? (0, ve.jsx)(Zb, {
            action: Me
          }) : ee("controller:actionWheelPick")
        })
      };
    var zK = He(97);
    const BK = () => ((0, xe.useEffect)((() => {
        var ee, ie;
        const He = (0, Xe.k)(document.getElementById("root")),
          ye = (0, qe.h)(),
          be = (() => {
            const ee = [Je.h.subscribe(yb.f, (() => {
                Ub("blockBreak")
              })), Je.h.subscribe("damagedByOtherPlayer", (() => {
                Ub("damage")
              })), Je.h.subscribe("yourAttackHit", (ee => {
                let {
                  hitSelf: ie
                } = ee;
                ie || Ub("hit")
              }))],
              ie = Ke.g.onActivePadChanged((ee => {
                ee && Ub("connect")
              }));
            return () => {
              for (const ie of ee) Je.h.unsubscribe(ie);
              ie()
            }
          })(),
          Me = (() => {
            const ee = new qb({
              getVisitId: kb.getVisitSessionId,
              peekVisitId: kb.peekVisitSessionId,
              readReportedVisitId: () => {
                const ee = Rb.m.getItem(fb);
                return "string" === typeof ee ? ee : null
              },
              writeReportedVisitId: ee => {
                Rb.m.setItem(fb, ee)
              },
              isPadActive: qe.l,
              getPadFamily: () => {
                var ee, ie;
                return null !== (ee = null === (ie = Ke.g.getActivePad()) || void 0 === ie ? void 0 : ie.family) && void 0 !== ee ? ee : null
              },
              canReport: Jb.isBloxdGa4Ready,
              getInputType: ob.b,
              RR: Jb.logControllerUsedToGtag
            });
            let ie = 0,
              He = null;
            const ye = be => {
                null === He && ("notReady" !== ee.check(be) || null !== He || ie >= 20 || (ie++, He = setTimeout((() => {
                  He = null, ye(!1)
                }), 3e3)))
              },
              be = Je.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
                ye(!0)
              })),
              Me = (0, kb.onVisitStarted)((() => {
                ie = 0, ye(!0)
              }));
            return () => {
              Je.h.unsubscribe(be), Me(), null !== He && clearTimeout(He)
            }
          })(),
          Ue = Ke.g.onFrame(((ee, ie, He) => {
            const ye = (0, qe.o)(ee, He);
            Re.d.dispatch(ee, ie, ye)
          }));
        let oe = null !== (ee = null === (ie = Ke.g.getActivePad()) || void 0 === ie ? void 0 : ie.family) && void 0 !== ee ? ee : null;
        const fe = Ke.g.onActivePadChanged((ee => {
            var ie, He;
            (Re.d.reset(), (0, qe.s)(), Je.h.yR(Ke.c, ee), (null !== (ie = null === ee || void 0 === ee ? void 0 : ee.family) && void 0 !== ie ? ie : null) !== oe) && (oe = null !== (He = null === ee || void 0 === ee ? void 0 : ee.family) && void 0 !== He ? He : null, Je.h.yR(ke.c, (0, ke.h)()));
            !ee && (0, qe.l)() && (0, qe.t)(Fe.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Te = () => {
            "visible" !== document.visibilityState && Re.d.clear()
          },
          pe = () => {
            Re.d.clear()
          };
        document.addEventListener("visibilitychange", Te), window.addEventListener("blur", pe), Ke.g.start(), (0, Fb.m)();
        const ze = null;
        return () => {
          He(), ye(), be(), Me(), Ue(), fe(), document.removeEventListener("visibilitychange", Te), window.removeEventListener("blur", pe), Ke.g.stop(), null === ze || void 0 === ze || ze()
        }
      }), []), (0, ve.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, ve.jsx)(ab, {}), (0, ve.jsx)(Sb, {}), (0, ve.jsx)(nb, {}), (0, ve.jsx)(cM, {}), (0, ve.jsx)(JK, {}), (0, ve.jsx)(pK, {}), (0, ve.jsx)(XK, {})]
      })),
      EK = () => zK.featureFlags.useControllerSupport ? (0, ve.jsx)(BK, {}) : null;
    var gK = He(8940),
      OK = He(9555);
    const dK = new Set(Fb.k),
      WK = ee => `${OK.m}${(0,ke.k)()}/${ee}`,
      tK = ee => {
        if (!(0, OK.l)(ee)) return null;
        const [ie, He] = ee.slice(OK.m.length).split("/");
        return (0, gK.f)(ie) && dK.has(He) ? (0, Fb.g)(ie, He) : null
      };
    var ZK = He(9558);
    const wK = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, qe.x)(), {
          gameState: He,
          isUiHidden: ye
        } = (0, Fe.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: Me,
          sneakMode: Ke
        } = (0, ke.p)(), [Ue, Je] = (0, xe.useState)(ZK.e);
        return (0, zb.f)(Vb.s, Je), ie && !ye && "inGame" === He && Ue ? (0, ve.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Me && (0, ve.jsx)(Wb, {
            glyph: (0, oe.j)("toggle" === Ke ? "sneak" : "sneakToggle")
          }), (0, ve.jsx)("span", {
            children: ee("controller:gameplaySneaking")
          })]
        }) : null
      },
      DK = 12,
      PK = ee => {
        let {
          trigger: ie,
          className: He,
          children: ye
        } = ee;
        const be = (0, xe.useRef)(null);
        return (0, xe.useEffect)((() => {
          let ee = 0;
          const He = we(ie, "y"),
            ye = () => {
              ee = requestAnimationFrame(ye);
              const Me = be.current;
              if (!Me || null === ie || void 0 === ie || !ie.isConnected) return;
              const {
                left: Ke,
                top: Ue
              } = function(ee, ie, He) {
                let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Me = ee.left + ee.width / 2,
                  Ke = Math.max(DK, He.width - DK - ie.width),
                  Ue = Math.min(Math.max(Me - ie.width / 2, DK), Ke),
                  Fe = He.height - ye;
                let Je = 0,
                  oe = Fe;
                if (be) {
                  const ee = Math.max(0, be.top),
                    ye = Math.min(Fe, be.bottom);
                  ye - ee >= Math.max(He.height / 2, ie.height + 24) && (Je = ee, oe = ye)
                }
                const Re = ee.top + ee.height / 2 < (Je + oe) / 2 ? oe - DK - ie.height : Je + DK;
                return {
                  left: Ue,
                  top: Math.max(DK, Re)
                }
              }(ie.getBoundingClientRect(), {
                width: Me.offsetWidth,
                height: Me.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(lM)) || 0, null !== He && void 0 !== He && He.isConnected ? He.getBoundingClientRect() : null);
              Me.style.transform = `translate3d(${Math.round(Ke)}px, ${Math.round(Ue)}px, 0)`, Me.style.visibility = "visible"
            };
          return ye(), () => {
            cancelAnimationFrame(ee)
          }
        }), [ie]), (0, ve.jsx)("div", {
          ref: be,
          className: He,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: ye
        })
      };
    var AK = He(1323),
      YK = He(9566),
      VK = He(1438),
      aK = He(9570),
      cK = He(9575);
    const xK = {
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
      LK = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, qe.x)(), He = (0, YK.b)(), ye = (0, ub.i)("_tasks"), Me = (0, ub.i)("_availableLeaderboards");
        if (!ie) return null;
        const Ke = (ee => {
          let {
            hasShop: ie,
            hasTasksOrLeaderboards: He,
            canInvite: ye
          } = ee;
          const be = [];
          return ie && be.push("shop"), He && be.push("tasks"), ye && be.push("invite"), be.push("leave"), be
        })({
          hasShop: He,
          hasTasksOrLeaderboards: !(!ye && !Me),
          canInvite: !!zK.featureFlags.canUseInviteLinks
        });
        return (0, ve.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Ke.map((ie => {
            const {
              icon: He,
              labelKey: ye
            } = xK[ie], be = "leave" === ie ? VK.G : VK.c;
            return (0, ve.jsx)(be, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (ee => {
                  switch (ee) {
                    case "shop":
                      return Je.h.yR(cK.m), void Fe.e.set({
                        openEverythingMenuName: JH.r.SHOP
                      });
                    case "tasks":
                      return void Je.h.yR("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Je.h.yR("toggleMenu", "inviteLink");
                    case "leave":
                      (0, aK.c)()
                  }
                })(ie)
              },
              children: (0, ve.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, ve.jsx)(AK.e, {
                  name: He
                }), (0, ve.jsx)("span", {
                  children: ee(ye)
                })]
              })
            }, ie)
          }))
        })
      };
    var CK = He(2046);
    const vK = fe.w,
      uK = ["forward", "backward", "left", "right", "sprint"],
      mK = ee => ee.ctrlKey || ee.altKey || "Alt" === ee.key || "ArrowUp" === ee.key || "ArrowDown" === ee.key || "Tab" === ee.code || "/" === ee.key || "Slash" === ee.code;
    class lK {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(fe.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(ee) {
        this.armed = ee
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || ie ? !ee.repeat && this.swallowedKeys.delete(ee.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(ee.code),
          continues: !1
        } : "Escape" === ee.key || ee.repeat && !this.swallowedKeys.has(ee.code) ? {
          swallow: !1,
          continues: !1
        } : He ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(ee.code), {
          swallow: !0,
          continues: (0, qe.i)(ee)
        })
      }
      onKeyUp(ee) {
        return this.swallowedKeys.delete(ee.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const be = (0, fe.q)(ee.values, this.previousHeld),
          Me = null === He ? -1 : (0, fe.l)(He),
          Ke = Me >= 0 && be[Me] && !this.previousHeld[Me],
          Ue = be.some(((ee, ie) => ee && !this.previousHeld[ie] && ie !== Me)),
          Fe = Math.hypot(ee.leftStick.x, ee.leftStick.y) >= vK,
          Je = Math.hypot(ee.rightStick.x, ee.rightStick.y) >= vK,
          oe = Fe && !this.leftStickWasPressed || Je && !this.rightStickWasPressed;
        this.previousHeld = be, this.leftStickWasPressed = Fe, this.rightStickWasPressed = Je;
        let Re = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Re = !0);
        const ke = !ie && Ke && !ye,
          qe = !ke && this.armed && !ie && (Ue || oe);
        return (ke || qe) && (this.consumeNextFrame = !0, this.consumeAfterContinue = qe, Re = !0), {
          continues: qe,
          back: ke,
          consumeHeld: Re
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const SK = new Set([...CK.j, ...CK.B]),
      nK = ee => ((ee, ie, He) => {
        const ye = Object.keys(ie).filter((ye => !He.has(ye) && ie[ye].includes(ee)));
        return ye.length > 0 && ye.every((ee => uK.includes(ee)))
      })(ee, CK.q, SK),
      jK = (ee, ie, He) => {
        const ye = new lK,
          be = ee => {
            if (!ee.isTrusted) return;
            const {
              swallow: He,
              continues: be
            } = ye.onKeyDown(ee, !(0, qe.B)(ee) || (0, Hb.e)() || (0, oH.o)(), nK(ee.code));
            He && (ee.stopImmediatePropagation(), mK(ee) && ee.preventDefault()), be && ((0, qe.t)("keyboardMouse"), ie())
          },
          Me = ee => {
            ee.isTrusted && ye.onKeyUp(ee) && (ee.stopImmediatePropagation(), mK(ee) && ee.preventDefault())
          },
          Ue = () => {
            ye.forgetKeys()
          };
        window.addEventListener("keydown", be, !0), window.addEventListener("keyup", Me, !0), window.addEventListener("blur", Ue);
        const Fe = Ke.g.onFrame((ee => {
            const be = Re.d.getActiveConsumerName(),
              Me = He(),
              Ke = Me ? (0, oe.j)("menuBack") : null,
              Ue = null !== be && "gameplay" !== be,
              {
                continues: Fe,
                back: Je,
                consumeHeld: fe
              } = ye.onPadFrame(ee, Ue, Ke, (0, qe.m)(ee));
            if (fe) {
              const ee = (0, ke.h)().swapSticks ? "right" : "left";
              Re.d.consumeAllHeld(ye.consumeLeavesMoveStick() ? ee : null)
            }
            Je ? null === Me || void 0 === Me || Me() : Fe && ie()
          })),
          Je = (0, Hb.g)(`pressToContinue:${ee}`, (() => ye.blocksGameplay()));
        return {
          setArmed: ee => {
            ye.setArmed(ee)
          },
          dispose: () => {
            window.removeEventListener("keydown", be, !0), window.removeEventListener("keyup", Me, !0), window.removeEventListener("blur", Ue), Fe(), Je()
          }
        }
      };
    var sK = He(5501),
      IK = He(3779),
      hK = He(3442),
      NK = He(8944);
    const GK = ee => {
        let {
          text: ie
        } = ee;
        return (0, ve.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: ie
        })
      },
      rK = ee => {
        let {
          label: ie,
          hint: He,
          options: ye,
          value: Me,
          onChange: Ke
        } = ee;
        const {
          t: Ue
        } = (0, be.v)();
        return (0, ve.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ve.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, ve.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, ve.jsx)("div", {
                className: "SliderText",
                children: ie
              }), He && (0, ve.jsx)("div", {
                className: "ControllerSettingsHint",
                children: He
              })]
            }), (0, ve.jsx)(hK.e, {
              options: ye.map((ee => ({
                label: "label" in ee ? ee.label : Ue(ee.labelKey),
                value: ee.value
              }))),
              value: Me,
              onChange: ee => {
                Ke(ee.value)
              }
            })]
          })
        })
      },
      QK = ee => {
        let {
          settingKey: ie,
          label: He,
          range: ye,
          format: be
        } = ee;
        const Me = (0, ke.p)();
        return (0, ve.jsx)(sK.f, {
          name: He,
          min: ye.min,
          max: ye.max,
          step: ye.step,
          padStep: ye.step,
          initValue: Me[ie],
          format: be,
          onChange: ee => {
            (0, ke.l)({
              [ie]: (0, NK.q)(ee, ye)
            })
          }
        })
      };
    var eU = He(9584),
      iU = He(9588);
    const HU = ee => ee instanceof DOMException && ("SecurityError" === ee.name || "NotAllowedError" === ee.name),
      yU = ee => {
        const [ie] = [...ee.controllers].sort(((ee, ie) => iU.i[ee] - iU.i[ie]));
        return iU.h[ie]
      },
      bU = ee => {
        (0, eU.d)().allowPhoneMotion().catch((ie => {
          ee && HU(ie) ? ee() : console.warn("Could not enable the motion sensor", ie)
        }))
      },
      MU = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      KU = ee => {
        let {
          status: ie
        } = ee;
        const {
          t: He
        } = (0, be.v)(), [ye, Me] = (0, xe.useState)(null), Ke = `${ie.controllers.join(",")}|${ie.phoneMotion}`;
        (0, xe.useEffect)((() => {
          Me(null)
        }), [Ke]);
        const Ue = () => {
          (0, eU.d)().connectController().then((ee => {
            Me(ee > 0 ? "openFailed" : null)
          })).catch((ee => {
            HU(ee) ? Me("needsClick") : console.warn("Could not connect motion controller", ee)
          }))
        };
        if (ie.hidSupported) {
          let ee = He("controller:settingsGyroConnectHint");
          return "needsClick" === ye ? ee = He("controller:settingsGyroConnectNeedsClick") : "openFailed" === ye ? ee = He("controller:settingsGyroOpenFailed") : ie.controllers.length > 0 && (ee = He("controller:settingsGyroConnected", {
            name: yU(ie)
          })), (0, ve.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, ve.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, ve.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ee
              }), (0, ve.jsx)(VK.c, {
                onClick: Ue,
                children: He("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === ie.phoneMotion) return (0, ve.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ve.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === ye && (0, ve.jsx)("div", {
              className: "ControllerSettingsHint",
              children: He("controller:settingsGyroAllowNeedsTap")
            }), (0, ve.jsx)(VK.c, {
              onClick: () => {
                bU((() => {
                  Me("needsTap")
                }))
              },
              children: He("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Fe = MU[ie.phoneMotion];
        return Fe ? (0, ve.jsx)("div", {
          className: "ControllerSettingsHint",
          children: He(Fe)
        }) : null
      },
      UU = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, ke.p)(), He = (0, eU.g)(), ye = (0, qe.z)(), Me = !He.hidSupported && He.phoneSupported && !He.padConnected, Ke = (He.hidSupported || He.phoneSupported) && !Me, Ue = (0, oe.j)("pause");
        return (0, ve.jsxs)(ve.Fragment, {
          children: [(0, ve.jsx)(GK, {
            text: ee("controller:settingsGyro")
          }), Me && (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ee("controller:settingsGyroPhoneNeedsController")
          }), !Ke && !Me && (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ee(He.hidBlocked || He.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Ke && (0, ve.jsx)(sK.c, {
            label: ee(He.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: ie.gyroAiming,
            onClick: ee => {
              var ie, He;
              (0, ke.l)({
                gyroAiming: ee
              });
              const ye = null === (ie = null === (He = navigator.userActivation) || void 0 === He ? void 0 : He.isActive) || void 0 === ie || ie;
              if (!ee || !ye) return;
              const be = (0, eU.d)(),
                Me = be.getStatus();
              Me.hidSupported ? be.connectControllerIfNoneGranted().catch((ee => {
                console.warn("Motion controller picker unavailable", ee)
              })) : "needsPermission" === Me.phoneMotion && bU()
            },
            circleInfoText: ee(He.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Ke && He.hidSupported && (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ee("controller:settingsGyroSteamHint")
          }), Ke && ie.gyroAiming && (0, ve.jsxs)(ve.Fragment, {
            children: [(0, ve.jsx)(KU, {
              status: He
            }), (0, ve.jsx)(QK, {
              settingKey: "gyroSensitivity",
              label: ee("controller:settingsGyroSensitivity"),
              range: NK.K,
              format: NK.C
            }), (0, ve.jsx)(rK, {
              label: ee("controller:settingsGyroActivation"),
              hint: "aiming" === ie.gyroActivation && (0, ve.jsx)(IK.e, {
                text: ee("controller:settingsGyroAimingHint", {
                  button: IK.g
                }),
                glyph: (0, oe.j)("use")
              }),
              options: NK.I,
              value: ie.gyroActivation,
              onChange: ee => {
                (0, ke.l)({
                  gyroActivation: ee
                })
              }
            }), "button" === ie.gyroActivation && (0, ve.jsx)(rK, {
              label: ee("controller:settingsGyroButton"),
              hint: ee("controller:settingsGyroButtonHint"),
              options: NK.m.filter((ee => ee !== Ue || ee === ie.gyroButton)).map((ee => ({
                label: db(ye, ee),
                value: ee
              }))),
              value: ie.gyroButton,
              onChange: ee => {
                (0, ke.l)({
                  gyroButton: ee
                })
              }
            })]
          })]
        })
      };
    var FU = He(1913);
    const JU = () => {
      const {
        t: ee
      } = (0, be.v)(), ie = (0, ke.p)(), He = (0, qe.z)();
      return (0, ve.jsxs)(ve.Fragment, {
        children: [(0, ve.jsx)(GK, {
          text: ee("controller:settingsAccessibility")
        }), (0, ve.jsx)(sK.c, {
          label: ee("controller:settingsSwapConfirmBack"),
          checked: (0, oe.C)(ie.swapConfirmBack, He),
          onClick: ee => {
            (0, ke.l)({
              swapConfirmBack: ee === (0, oe.C)(null, He) ? null : ee
            }), FU.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: ee("controller:settingsSwapConfirmBackInfo")
        }), (0, ve.jsx)(rK, {
          label: ee("controller:settingsButtonRepeat"),
          hint: ee("controller:settingsButtonRepeatHint"),
          options: NK.l,
          value: ie.buttonRepeat,
          onChange: ee => {
            (0, ke.l)({
              buttonRepeat: ee
            })
          }
        }), (0, ve.jsx)(rK, {
          label: ee("controller:settingsTapHoldTime"),
          hint: ee("controller:settingsTapHoldTimeHint"),
          options: NK.tb,
          value: ie.tapHoldTime,
          onChange: ee => {
            (0, ke.l)({
              tapHoldTime: ee
            })
          }
        }), (0, ve.jsx)(rK, {
          label: ee("controller:settingsEmoteButton"),
          hint: ee("wheel" === ie.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: NK.w,
          value: ie.emoteButton,
          onChange: ee => {
            (0, ke.l)({
              emoteButton: ee
            })
          }
        }), (0, ve.jsx)(rK, {
          label: ee("controller:settingsAttackMode"),
          hint: ee("toggle" === ie.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: NK.k,
          value: ie.attackMode,
          onChange: ee => {
            (0, ke.l)({
              attackMode: ee
            })
          }
        }), (0, ve.jsx)(sK.c, {
          label: ee("controller:settingsLargePointer"),
          checked: ie.largePointer,
          onClick: ee => {
            (0, ke.l)({
              largePointer: ee
            })
          },
          circleInfoText: ee("controller:settingsLargePointerInfo")
        })]
      })
    };
    var oU = He(9595);
    const RU = new class {
        constructor(ee) {
          this.router = ee, this.current = null
        }
        claim(ee, ie) {
          const He = this.current;
          He && (this.current = null, He.release(), He.onTakenOver());
          const ye = this.router.register({
              ...ee,
              name: "capture"
            }),
            be = {
              release: ye,
              onTakenOver: ie
            };
          return this.current = be, () => {
            this.current === be && (this.current = null), ye()
          }
        }
      }(Re.d),
      kU = ee => {
        (0, xe.useEffect)((() => {
          if (!ee) return;
          const ie = ee();
          let He = !1;
          const ye = () => {
              He || (He = !0, ie.onEnd())
            },
            be = RU.claim({
              isActive: () => !He,
              onFrame: ee => {
                ie.onFrame(ee, ye)
              }
            }, ye),
            Me = void 0 === ie.timeoutMs ? void 0 : window.setTimeout(ye, ie.timeoutMs),
            Ke = ee => {
              "Escape" === ee.key && (ee.preventDefault(), ee.stopPropagation(), ye())
            };
          return window.addEventListener("keydown", Ke, !0), () => {
            He = !0, be(), window.clearTimeout(Me), window.removeEventListener("keydown", Ke, !0)
          }
        }), [ee])
      },
      qU = ee => {
        let {
          row: ie,
          capturing: He,
          onCapture: ye,
          holdFillRef: Me,
          onRebind: Ke,
          swapped: Ue
        } = ee;
        const {
          t: Fe
        } = (0, be.v)();
        if ("fixed" === ie.kind) return (0, ve.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, ve.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ve.jsx)("div", {
              className: "ControlName",
              children: Fe(ie.labelKey)
            }), (0, ve.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, ve.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, ve.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, ve.jsx)(Wb, {
                    glyph: "move" === ie.stick ? (0, oe.p)() : (0, oe.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Je
        } = ie, Re = (0, oe.j)(Je), ke = (0, oe.l)(Je), qe = Re !== ke && (0, oe.b)(Je, ke);
        return (0, ve.jsxs)("div", {
          className: Ce()("ControlRow PadControlRow", {
            Capturing: He
          }),
          children: [(0, ve.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ve.jsx)("div", {
              className: "ControlName",
              children: Fe(NK.e[Je])
            }), (0, ve.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!He && (0, ve.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, ve.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    ye(Je)
                  },
                  children: (0, ve.jsx)(Wb, {
                    glyph: Re
                  })
                }), qe && (0, ve.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Fe("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ke(Je, ke)
                  },
                  children: (0, ve.jsx)(AK.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), He && (0, ve.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, ve.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, ve.jsx)("span", {
                    children: Fe("controller:settingsCapturePrompt")
                  }), (0, ve.jsx)("div", {
                    ref: Me,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, ve.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    ye(null)
                  },
                  children: "\xd7"
                })]
              }), He && (0, ve.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, ve.jsx)(IK.e, {
                  text: Fe((0, oe.b)(Je, (0, oe.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: IK.g
                  }),
                  glyph: (0, oe.j)("menuBack")
                })
              })]
            })]
          }), Ue.map((ee => (0, ve.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, ve.jsx)(IK.e, {
              text: Fe("controller:settingsSwapNotice", {
                action: Fe(NK.e[ee]),
                button: IK.g
              }),
              glyph: (0, oe.j)(ee)
            })
          }, ee))), He && (0, ve.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${NK.n}ms`
            }
          })]
        })
      },
      fU = [],
      TU = ee => {
        let {
          layoutSetting: ie
        } = ee;
        const {
          t: He
        } = (0, be.v)(), ye = (0, ke.p)();
        (0, qe.z)();
        const Me = (0, xe.useRef)(null),
          [Ke, Ue] = (0, xe.useState)(null),
          Fe = (0, xe.useCallback)(((ee, ie) => {
            const He = (0, ke.h)().bindings;
            (0, oe.z)(ee, ie);
            const ye = (0, oe.t)(He, ee);
            Ue(ye.length > 0 ? {
              action: ee,
              swapped: ye
            } : null)
          }), []),
          [Je, Te] = ((ee, ie) => {
            const [He, ye] = (0, xe.useState)(null), be = (0, xe.useMemo)((() => He ? () => {
              const be = (0, oe.j)("menuBack"),
                Me = new NK.c(be, (0, oe.j)("menuConfirm"), (ee => (0, oe.b)(He, ee)));
              return {
                onFrame: (ye, Ke) => {
                  var Ue;
                  const Fe = ye.frame.timestampMs,
                    Je = Me.update({
                      ...ye,
                      isDown: ee => (0, fe.L)(ye.frame.values, ee)
                    }, Fe);
                  null === (Ue = ee.current) || void 0 === Ue || Ue.style.setProperty("width", 100 * Me.getBindHoldProgress(Fe) + "%"), Je && ("bind" === Je.kind ? (Re.d.consumeButton(Je.button), ie(He, Je.button)) : Re.d.consumeButton(be), Ke())
                },
                onEnd: () => {
                  ye(null)
                },
                timeoutMs: NK.n
              }
            } : null), [He, ee, ie]);
            return kU(be), [He, ye]
          })(Me, Fe),
          pe = ee => {
            ee && Ue(null), Te(ee)
          };
        (0, xe.useEffect)((() => {
          if (!Ke) return;
          const ee = window.setTimeout((() => {
            Ue(null)
          }), NK.sb);
          return () => {
            window.clearTimeout(ee)
          }
        }), [Ke]);
        const Xe = !ye.swapSticks && 0 === Object.keys(ye.bindings).length;
        return (0, ve.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, ve.jsx)("div", {
            className: "SliderText",
            children: He("controller:settingsRemap")
          }), (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: He("controller:settingsRemapHint")
          }), (0, ve.jsx)(VK.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Xe,
            onClick: () => {
              pe(null), Ue(null), (0, oe.A)()
            },
            children: He("controller:settingsResetAll")
          }), ie, NK.jb.map(((ee, ie) => (0, ve.jsx)(oU.b, {
            title: He(ee.titleKey),
            defaultOpen: 0 === ie,
            children: ee.rows.map((ee => (0, ve.jsx)(qU, {
              row: ee,
              capturing: "action" === ee.kind && ee.action === Je,
              onCapture: pe,
              holdFillRef: Me,
              onRebind: Fe,
              swapped: "action" === ee.kind && (null === Ke || void 0 === Ke ? void 0 : Ke.action) === ee.action ? Ke.swapped : fU
            }, "action" === ee.kind ? ee.action : ee.labelKey)))
          }, ee.titleKey)))]
        })
      },
      pU = ee => {
        let {
          deadzone: ie,
          dotRef: He,
          labelKey: ye
        } = ee;
        const {
          t: Me
        } = (0, be.v)();
        return (0, ve.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, ve.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, ve.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * ie + "%",
                height: 100 * ie + "%"
              }
            }), (0, ve.jsx)("div", {
              ref: He,
              className: "ControllerTesterDot"
            })]
          }), (0, ve.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Me(ye)
          })]
        })
      },
      XU = (ee, ie, He, ye) => {
        var be;
        ee && (ee.style.left = 50 + 50 * Math.max(-1, Math.min(1, ie.x)) + "%", ee.style.top = 50 + 50 * Math.max(-1, Math.min(1, ie.y)) + "%", null === (be = ee.parentElement) || void 0 === be || be.classList.toggle("Active", ye || Math.hypot(ie.x, ie.y) > He))
      },
      zU = ee => {
        const ie = {
            deadzone: ee.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          He = {
            deadzone: ee.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return ee.swapSticks ? {
          left: He,
          right: ie
        } : {
          left: ie,
          right: He
        }
      },
      BU = () => {
        const {
          t: ee
        } = (0, be.v)(), ie = (() => {
          const [ee, ie] = (0, xe.useState)((() => Ke.g.getActivePad()));
          return (0, zb.f)(Ke.c, (() => {
            ie(Ke.g.getActivePad())
          })), ee
        })(), He = zU((0, ke.p)()), ye = (0, xe.useRef)(null), Me = (0, xe.useRef)(null), Ue = (0, xe.useRef)([]), Fe = (0, xe.useRef)(null), Je = (0, xe.useRef)(null), [qe, Te] = (ee => {
          const [ie, He] = (0, xe.useState)(!1), ye = (0, xe.useMemo)((() => ie ? () => {
            const ie = (0, oe.j)("menuBack"),
              ye = new NK.d;
            return {
              onFrame: (He, be) => {
                var Me;
                const Ke = ye.update({
                  pressed: He.wasPressed(ie),
                  lJ: He.isHeld(ie)
                }, He.frame.timestampMs);
                null === (Me = ee.current) || void 0 === Me || Me.style.setProperty("width", 100 * Ke + "%"), Ke >= 1 && (Re.d.consumeButton(ie), be())
              },
              onEnd: () => {
                He(!1)
              }
            }
          } : null), [ie, ee]);
          return kU(ye), [ie, He]
        })(Me);
        (0, xe.useEffect)((() => {
          const ee = ee => {
            for (const He of fe.W) {
              const ie = (0, fe.l)(He),
                ye = Ue.current[ie];
              if (!ye) continue;
              const be = ee.values[ie];
              ye.classList.toggle("Pressed", be >= fe.w), (0, fe.N)(ie) && ye.style.setProperty("--trigger-fill", `${Math.round(100*be)}%`)
            }
            const ie = zU((0, ke.h)());
            XU(Fe.current, ee.leftStick, ie.left.deadzone, ee.values[(0, fe.l)("LS")] >= fe.w), XU(Je.current, ee.rightStick, ie.right.deadzone, ee.values[(0, fe.l)("RS")] >= fe.w)
          };
          return ie || ee((0, fe.u)()), Ke.g.onFrame(ee)
        }), [ie]), (0, xe.useEffect)((() => {
          ie || Te(!1)
        }), [ie, Te]), (0, xe.useEffect)((() => {
          var ee;
          qe && (null === (ee = ye.current) || void 0 === ee || ee.scrollIntoView({
            block: "nearest"
          }))
        }), [qe]);
        const pe = NK.bb.find((ee => ee.value === (null === ie || void 0 === ie ? void 0 : ie.family)));
        return (0, ve.jsxs)("div", {
          ref: ye,
          className: Ce()("SettingBox ControllerTester", {
            Testing: qe
          }),
          children: [(0, ve.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, ve.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [ie && (0, ve.jsx)("div", {
                children: ee("controller:settingsTesterFamily", {
                  family: pe ? ee(pe.labelKey) : ie.family
                })
              }), ie && (0, ve.jsx)("div", {
                className: "ControllerTesterPadId",
                children: ie.id
              }), !ie && (0, ve.jsx)("div", {
                children: ee("controller:settingsTesterNoPad")
              })]
            }), (ie || qe) && (0, ve.jsx)(VK.c, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Te(!qe)
              },
              children: ee(qe ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), ie && !qe && (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ee("controller:settingsTesterHint")
          }), qe && (0, ve.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, ve.jsx)(IK.e, {
              text: ee("controller:settingsTesterTesting", {
                button: IK.g
              }),
              glyph: (0, oe.j)("menuBack")
            }), (0, ve.jsx)("div", {
              ref: Me,
              className: "ControllerTesterExitFill"
            })]
          }), (0, ve.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, ve.jsx)(pU, {
              deadzone: He.left.deadzone,
              dotRef: Fe,
              labelKey: He.left.labelKey
            }), (0, ve.jsx)("div", {
              className: "ControllerTesterButtons",
              children: fe.W.map((ee => {
                const He = (0, fe.l)(ee);
                return (0, ve.jsx)("div", {
                  ref: ee => {
                    Ue.current[He] = ee
                  },
                  className: (0, fe.N)(He) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, ve.jsx)(Wb, {
                    glyph: ee,
                    family: null === ie || void 0 === ie ? void 0 : ie.family
                  })
                }, ee)
              }))
            }), (0, ve.jsx)(pU, {
              deadzone: He.right.deadzone,
              dotRef: Je,
              labelKey: He.right.labelKey
            })]
          })]
        })
      },
      EU = (0, xe.memo)((function() {
        const {
          t: ee
        } = (0, be.v)(), ie = (0, ke.p)(), [He, ye] = (0, xe.useState)(!1);
        return (0, xe.useEffect)((() => {
          if (!He) return;
          const ee = window.setTimeout((() => {
            ye(!1)
          }), NK.sb);
          return () => {
            window.clearTimeout(ee)
          }
        }), [He]), (0, ve.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, ve.jsx)(GK, {
            text: ee("controller:settingsLook")
          }), (0, ve.jsx)(QK, {
            settingKey: "lookSensitivityX",
            label: ee("controller:settingsLookSensitivityX"),
            range: NK.kb,
            format: NK.F
          }), (0, ve.jsx)(QK, {
            settingKey: "lookSensitivityY",
            label: ee("controller:settingsLookSensitivityY"),
            range: NK.kb,
            format: NK.F
          }), (0, ve.jsx)(QK, {
            settingKey: "aimLookSensitivity",
            label: ee("controller:settingsAimLookSensitivity"),
            range: NK.h,
            format: NK.F
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsLookCurve"),
            hint: ee("controller:settingsLookCurveHint"),
            options: NK.X,
            value: ie.lookCurve,
            onChange: ee => {
              (0, ke.l)({
                lookCurve: ee
              })
            }
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsInvertLookX"),
            checked: ie.invertLookX,
            onClick: ee => {
              (0, ke.l)({
                invertLookX: ee
              })
            }
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsInvertLookY"),
            checked: ie.invertLookY,
            onClick: ee => {
              (0, ke.l)({
                invertLookY: ee
              })
            }
          }), (0, ve.jsx)(QK, {
            settingKey: "lookDeadzone",
            label: ee("controller:settingsLookDeadzone"),
            range: NK.t,
            format: NK.z
          }), (0, ve.jsx)(UU, {}), (0, ve.jsx)(GK, {
            text: ee("controller:settingsMovement")
          }), (0, ve.jsx)(QK, {
            settingKey: "moveDeadzone",
            label: ee("controller:settingsMoveDeadzone"),
            range: NK.t,
            format: NK.z
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsAutoSprint"),
            checked: ie.autoSprint,
            onClick: ee => {
              (0, ke.l)({
                autoSprint: ee
              })
            },
            circleInfoText: ee("controller:settingsAutoSprintInfo")
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsSneak"),
            options: NK.ob,
            value: ie.sneakMode,
            onChange: ee => {
              (0, ke.l)({
                sneakMode: ee
              })
            }
          }), (0, ve.jsx)(GK, {
            text: ee("controller:settingsButtons")
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsPromptFamily"),
            options: NK.bb,
            value: ie.promptFamily,
            onChange: ee => {
              (0, ke.l)({
                promptFamily: ee
              })
            }
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsHideButtonHints"),
            checked: ie.hideButtonHints,
            onClick: ee => {
              (0, ke.l)({
                hideButtonHints: ee
              })
            }
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsVibration"),
            checked: ie.vibration,
            onClick: ee => {
              (0, ke.l)({
                vibration: ee
              }), ee && Ub("preview")
            }
          }), (0, ve.jsx)(QK, {
            settingKey: "cursorSpeed",
            label: ee("controller:settingsCursorSpeed"),
            range: NK.r,
            format: NK.F
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsCursorMagnetism"),
            checked: ie.cursorMagnetism,
            onClick: ee => {
              (0, ke.l)({
                cursorMagnetism: ee
              })
            }
          }), (0, ve.jsx)(sK.c, {
            label: ee("controller:settingsMenuBackToCategories"),
            checked: ie.menuBackToCategories,
            onClick: ee => {
              (0, ke.l)({
                menuBackToCategories: ee
              })
            }
          }), (0, ve.jsx)(TU, {
            layoutSetting: (0, ve.jsxs)(ve.Fragment, {
              children: [oe.f.map((He => (0, ve.jsx)(sK.c, {
                label: ee(NK.R[He]),
                checked: (0, oe.x)(He, ie),
                onClick: ee => {
                  ye(!(0, oe.F)(He, ee))
                }
              }, He))), He && (0, ve.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: ee("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, ve.jsx)(JU, {}), (0, ve.jsx)(GK, {
            text: ee("controller:settingsAlternatives")
          }), (0, ve.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ee("controller:settingsAlternativesHint")
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsMenuNavigation"),
            hint: ee("controller:settingsMenuNavigationHint"),
            options: NK.$,
            value: ie.menuNavigation,
            onChange: ee => {
              (0, ke.l)({
                menuNavigation: ee
              })
            }
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsInventoryNavigation"),
            hint: ee("controller:settingsInventoryNavigationHint"),
            options: NK.O,
            value: ie.inventoryNavigation,
            onChange: ee => {
              (0, ke.l)({
                inventoryNavigation: ee
              })
            }
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsQuickChat"),
            hint: ee("controller:settingsQuickChatHint"),
            options: NK.fb,
            value: ie.quickChat,
            onChange: ee => {
              (0, ke.l)({
                quickChat: ee
              })
            }
          }), (0, ve.jsx)(rK, {
            label: ee("controller:settingsLeaderboardButton"),
            hint: ee("controller:settingsLeaderboardButtonHint"),
            options: NK.U,
            value: ie.leaderboardButton,
            onChange: ee => {
              (0, ke.l)({
                leaderboardButton: ee
              })
            }
          }), (0, ve.jsx)(GK, {
            text: ee("controller:settingsTester")
          }), (0, ve.jsx)(BU, {})]
        })
      }));
    (0, be.c)(ye);
    for (const tU of (0, Me.m)()) tU.connected ? Ke.g.handleConnectionEvent(tU) : Ke.g.handleDisconnectionEvent(tU);
    const gU = () => null !== Ke.g.getActivePad(),
      OU = () => KH.getState(),
      dU = () => KH.isSteppingSlots(),
      WU = (ee, ie) => {
        const He = ib.getFocused();
        ib.isActive() && He && ee.contains(He) && ib.setFocus(ie, {
          scroll: !1
        })
      }
  },
  8917: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      e: () => Je
    });
    var ye = He(1419),
      be = He(1412);
    const Me = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Ke = "28de",
      Ue = new Set(["1205"]),
      Fe = (ee, ie) => {
        const He = (0, ye.b)(ee);
        if ((null === He || void 0 === He ? void 0 : He.vendor) === Ke) return Ue.has(He.product) ? "steamdeck" : "xbox";
        if (He && Me[He.vendor]) return Me[He.vendor];
        if ((0, be.e)(ee)) return "nintendo";
        const Fe = `${ee} ${null!==ie&&void 0!==ie?ie:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Fe) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Fe) ? "nintendo" : /steam deck/.test(Fe) ? "steamdeck" : "xbox"
      },
      Je = ee => {
        var ie;
        return (null === (ie = (0, ye.b)(ee)) || void 0 === ie ? void 0 : ie.vendor) === Ke
      }
  },
  8954: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je,
      f: () => Ue
    });
    var ye = He(8912);
    const be = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Me = new Set(["capture", "gameplay"]),
      Ke = ["Up", "Down", "Left", "Right"],
      Ue = ee => Ke.includes(ee),
      Fe = .25;
    const Je = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.lJ = new Array(ye.V).fill(!1), this.previousHeld = new Array(ye.V).fill(!1), this.consumedButtons = new Array(ye.V).fill(!1), this.suppressedReleases = new Array(ye.V).fill(!1), this.wakeOwned = new Array(ye.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, ye.u)()
      }
      register(ee) {
        return this.consumers.has(ee.name) && console.warn(`Controller consumer "${ee.name}" registered twice; the newer one replaces it.`), this.consumers.set(ee.name, ee), () => {
          var ie;
          this.consumers.get(ee.name) === ee && (this.activeName === ee.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (ie = this.peek) || void 0 === ie ? void 0 : ie.over) === ee.name && (this.peek = null), this.consumers.delete(ee.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(ee) {
        return this.lJ[(0, ye.l)(ee)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.lJ = new Array(ye.V).fill(!1), this.previousHeld = new Array(ye.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, ye.u)()
      }
      dispatch(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = ee, this.previousHeld = this.lJ, this.lJ = (0, ye.q)(ee.values, this.previousHeld);
        for (let Me = 0; Me < ye.V; Me++) this.suppressedReleases[Me] = !this.lJ[Me] && this.consumedButtons[Me], this.lJ[Me] || (this.consumedButtons[Me] = !1), this.wakeOwned[Me] && (this.lJ[Me] ? (this.consumedButtons[Me] = !0, this.wakeOwned[Me] = !1) : ee.values[Me] < ye.U && (this.wakeOwned[Me] = !1));
        Math.hypot(ee.leftStick.x, ee.leftStick.y) < Fe && (this.leftStickConsumed = !1), Math.hypot(ee.rightStick.x, ee.rightStick.y) < Fe && (this.rightStickConsumed = !1);
        const be = this.pickActive();
        if ((null === be || void 0 === be ? void 0 : be.name) !== this.activeName) {
          var Ke, Ue, Je, oe, Re, ke;
          const ee = this.activeName,
            ie = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            He = null !== (Ke = null === be || void 0 === be || null === (Ue = be.peek) || void 0 === Ue ? void 0 : Ue.call(be)) && void 0 !== Ke ? Ke : null,
            Me = null === ee && !!He && !(null === (Je = this.consumers.get(He.over)) || void 0 === Je || !Je.onPeekFrame),
            Fe = He && (He.over === ee || Me) ? He : null,
            qe = null !== this.peek && this.peek.over === (null === be || void 0 === be ? void 0 : be.name) ? this.peek : null;
          this.deactivateCurrent(null !== Fe, null !== qe), this.activeName = null !== (oe = null === be || void 0 === be ? void 0 : be.name) && void 0 !== oe ? oe : null, null === ee || this.handOffPending || this.consumeAllHeld();
          const fe = null === (Re = null !== Fe && void 0 !== Fe ? Fe : qe) || void 0 === Re ? void 0 : Re.stick;
          "left" === fe && ie.left ? this.leftStickConsumed = !1 : "right" === fe && ie.right && (this.rightStickConsumed = !1), this.peek = Fe, be || null === ee ? be && (null === (ke = this.idleResume) || void 0 === ke ? void 0 : ke.name) === be.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: ee,
            left: ie.left && this.leftStickConsumed,
            right: ie.right && this.rightStickConsumed
          }, be && (this.idleResume = null);
          for (let be = 0; be < ye.V; be++) this.previousHeld[be] && !this.lJ[be] && (this.suppressedReleases[be] = !0)
        }
        var qe, fe;
        (this.handOffPending = !1, be) && (He && !Me.has(be.name) && this.consumeWakePress(be), be.onFrame(this.buildInput(ee, ie, He)), this.peek && (null === (qe = this.consumers.get(this.peek.over)) || void 0 === qe || null === (fe = qe.onPeekFrame) || void 0 === fe || fe.call(qe, this.buildInput(ee, ie, !1, this.peek.stick))))
      }
      consumeWakePress(ee) {
        for (let be = 0; be < ye.V; be++) {
          var ie, He;
          const Me = ye.W[be];
          (null !== (ie = null === (He = ee.wakePressActs) || void 0 === He ? void 0 : He.call(ee, Me)) && void 0 !== ie ? ie : Ke.includes(Me)) || (this.lJ[be] ? this.consumedButtons[be] = !0 : this.lastFrame.values[be] >= ye.S && (this.wakeOwned[be] = !0))
        }
      }
      pickActive() {
        for (const ee of be) {
          const ie = this.consumers.get(ee);
          if (ie && ie.isActive()) return ie
        }
        return null
      }
      deactivateCurrent() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var He, ye, be, Me;
        this.activeName && (null === (He = this.consumers.get(this.activeName)) || void 0 === He || null === (ye = He.onDeactivate) || void 0 === ye || ye.call(He, ee));
        this.peek && !ie && (null === (be = this.consumers.get(this.peek.over)) || void 0 === be || null === (Me = be.onDeactivate) || void 0 === Me || Me.call(be, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let be = 0; be < ye.V; be++) this.lJ[be] && (this.consumedButtons[be] = !0);
        const {
          leftStick: ie,
          rightStick: He
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== ee && (this.leftStickConsumed || Math.hypot(ie.x, ie.y) >= Fe), this.rightStickConsumed = "right" !== ee && (this.rightStickConsumed || Math.hypot(He.x, He.y) >= Fe)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(ee) {
        const ie = (0, ye.l)(ee);
        this.lJ[ie] && (this.consumedButtons[ie] = !0)
      }
      buildInput(ee, ie, He, be) {
        const Me = this.lJ,
          Ke = this.previousHeld,
          Ue = be ? new Array(ye.V).fill(!0) : [...this.consumedButtons],
          Fe = be ? Ue : [...this.suppressedReleases],
          Je = !this.leftStickConsumed && (!be || "left" === be),
          oe = !this.rightStickConsumed && (!be || "right" === be);
        return {
          frame: ee,
          dtMs: ie,
          isHeld: ee => {
            const ie = (0, ye.l)(ee);
            return Me[ie] && !Ue[ie]
          },
          wasPressed: ee => {
            const ie = (0, ye.l)(ee);
            return Me[ie] && !Ke[ie] && !Ue[ie]
          },
          wasReleased: ee => {
            const ie = (0, ye.l)(ee);
            return !Me[ie] && Ke[ie] && !Fe[ie]
          },
          value: ie => {
            const He = (0, ye.l)(ie);
            return Ue[He] ? 0 : ee.values[He]
          },
          leftStick: Je ? ee.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: oe ? ee.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: He
        }
      }
    }
  },
  8935: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re.f,
      g: () => Re.g,
      h: () => we,
      k: () => De,
      l: () => Pe,
      p: () => Ae
    });
    var ye = He(59),
      be = He(27),
      Me = He(1432),
      Ke = He(35),
      Ue = He(8940),
      Fe = He(8912),
      Je = He(8932),
      oe = He(8907),
      Re = He(2068),
      ke = He(8944);
    const qe = {
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
      fe = "controllerSettings",
      Te = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      pe = ["auto", ...Ue.c],
      Xe = (ee, ie) => "string" === typeof ie && ee.includes(ie),
      ze = ee => ie => "number" === typeof ie && Number.isFinite(ie) ? (0, ke.q)(ie, ee) : void 0,
      Be = ee => "boolean" === typeof ee ? ee : void 0,
      Ee = ee => ie => Xe(ee, ie) ? ie : void 0,
      ge = {
        lookSensitivityX: ze(ke.kb),
        lookSensitivityY: ze(ke.kb),
        aimLookSensitivity: ze(ke.h),
        invertLookX: Be,
        invertLookY: Be,
        lookCurve: Ee(Fe.Q),
        lookDeadzone: ze(ke.t),
        moveDeadzone: ze(ke.t),
        swapSticks: Be,
        autoSprint: Be,
        sneakMode: Ee(["toggle", "hold"]),
        tapHoldTime: Ee(["short", "medium", "long"]),
        attackMode: Ee(["hold", "toggle"]),
        promptFamily: Ee(pe),
        hideButtonHints: Be,
        vibration: Be,
        cursorSpeed: ze(ke.r),
        cursorMagnetism: Be,
        buttonRepeat: Ee(Fe.n),
        largePointer: Be,
        menuBackToCategories: Be,
        swapConfirmBack: Be,
        menuNavigation: Ee(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Ee(["hybrid", "slot", "cursor"]),
        quickChat: Ee(["wheel", "off"]),
        leaderboardButton: Ee(["shop", "leaderboard"]),
        gyroAiming: Be,
        gyroSensitivity: ze(ke.K),
        gyroActivation: Ee(["always", "aiming", "button"]),
        gyroButton: Ee(Fe.W),
        emoteButton: Ee(["tapHold", "wheel"])
      },
      Oe = [{
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
      de = ee => {
        const ie = {};
        if ("object" !== typeof ee || null === ee) return ie;
        for (const [He, ye] of Object.entries(ee)) Object.prototype.hasOwnProperty.call(Je.g, He) && Xe(Fe.W, ye) && (ie[He] = ye);
        return ie
      },
      We = ee => {
        const ie = {};
        for (const He of Object.keys(qe))("bindings" === He ? Object.keys(ee.bindings).length > 0 : ee[He] !== qe[He]) && (ie[He] = ee[He]);
        0 !== Object.keys(ie).length ? Ke.i.setItem(fe, ie) : Ke.i.removeItem(fe)
      };
    let te = (() => {
        const ee = Ke.i.getItem(fe),
          ie = (ee => {
            const ie = "object" === typeof ee && null !== ee ? ee : {},
              He = {
                ...qe,
                bindings: de(ie.bindings)
              };
            for (const be of Object.keys(ge)) {
              const ee = ge[be](ie[be]);
              void 0 !== ee && (He[be] = ee)
            }
            const ye = Object.keys(ie).filter((ee => !!Object.prototype.hasOwnProperty.call(qe, ee) && ("bindings" === ee ? "object" !== typeof ie.bindings || null === ie.bindings || Object.keys(ie.bindings).length !== Object.keys(He.bindings).length : He[ee] !== ie[ee])));
            return ye.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${ye.join(", ")}`), He
          })(ee);
        return null !== ee && void 0 !== ee && We(ie), ie
      })(),
      Ze = {
        ...te,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const ee = {},
            ie = new URLSearchParams(window.location.search);
          for (const {
              param: He,
              key: ye
            }
            of Oe) {
            const be = ge[ye](ie.get(He));
            void 0 !== be && (ee[ye] = be)
          }
          return ee
        })()
      };
    const we = () => Ze,
      De = () => {
        var ee, ie;
        const He = we().promptFamily;
        return "auto" !== He ? He : null !== (ee = null === (ie = oe.g.getActivePad()) || void 0 === ie ? void 0 : ie.family) && void 0 !== ee ? ee : "xbox"
      },
      Pe = ee => {
        const ie = Ze;
        te = {
          ...te,
          ...ee
        }, We(te), Ze = {
          ...Ze,
          ...ee
        }, (ee => {
          be.h.yR(Re.g, Ze), Te.some((ie => ee[ie] !== Ze[ie])) && be.h.yR(Re.f, Ze)
        })(ie)
      },
      Ae = () => {
        const [ee, ie] = (0, ye.useState)(Ze);
        return (0, Me.f)(Re.g, ie), ee
      }
  },
  9389: (ee, ie, He) => {
    He.d(ie, {
      d: () => be
    });
    const ye = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      be = ee => ye.has(ee)
  },
  8907: (ee, ie, He) => {
    He.d(ie, {
      c: () => Te.e,
      g: () => Be
    });
    var ye = He(8912),
      be = He(8917);
    const Me = .1,
      Ke = .3;
    class Ue {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(ee, ie) {
        const He = null === this.lastMs ? 0 : Math.min(Math.max(0, ie - this.lastMs), 100);
        this.lastMs = ie;
        const ye = Math.hypot(ee.x, ee.y);
        if (ye >= Ke) return this.anchor = null, void(this.returning = !0);
        ye >= Me || (this.returning = !1);
        const be = this.anchor;
        if (!be || Math.hypot(ee.x - be.x, ee.y - be.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: ee.x,
          y: ee.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += He, this.steadyMs < 1e3) return;
        const Ue = Math.max(ye, Math.hypot(be.x, be.y));
        Ue < Me ? this.deadzone = 0 : this.returning && (this.deadzone = Ue + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(ee) {
        return Math.hypot(ee.x, ee.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : ee
      }
    }
    const Fe = (ee, ie) => {
        var He, ye;
        return null !== (He = ee && (null === (ye = Object.getOwnPropertyDescriptor(ee, ie)) || void 0 === ye ? void 0 : ye.get)) && void 0 !== He ? He : null
      },
      Je = ee => {
        const ie = ee.vendorName;
        return "string" === typeof ie ? ie : void 0
      },
      oe = ((ee, ie) => {
        const He = Fe(ee, "index"),
          ye = Fe(ee, "id"),
          be = Fe(ee, "connected"),
          Me = Fe(ee, "mapping"),
          Ke = Fe(ee, "buttons"),
          Ue = Fe(ee, "axes"),
          oe = Fe(ie, "pressed"),
          Re = Fe(ie, "value");
        return He && ye && be && Me && Ke && Ue && oe && Re ? ee => {
          const ie = Ke.call(ee),
            Fe = Ue.call(ee),
            ke = {
              index: Number(He.call(ee)),
              id: String(ye.call(ee)),
              connected: !0 === be.call(ee),
              mapping: String(Me.call(ee)),
              buttons: [],
              axes: [],
              vendorName: Je(ee)
            };
          for (let He = 0; He < ie.length; He++) ke.buttons.push({
            pressed: !0 === oe.call(ie[He]),
            value: Number(Re.call(ie[He]))
          });
          for (let He = 0; He < Fe.length; He++) ke.axes.push(Number(Fe[He]));
          return ke
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Re = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var ke = He(1408),
      qe = He(1412);
    const fe = ee => ({
      pressed: ee,
      value: ee ? 1 : 0
    });
    var Te = He(2068);
    const pe = Ke,
      Xe = ee => {
        const ie = new Array(ye.V).fill(0);
        for (let He = 0; He < ye.V && He < ee.buttons.length; He++) {
          const be = ee.buttons[He];
          ie[He] = be.pressed && !(0, ye.N)(He) ? Math.max(be.value, ye.w) : be.value
        }
        return ie
      },
      ze = (ee, ie) => {
        var He, ye;
        return {
          x: null !== (He = ee.axes[ie]) && void 0 !== He ? He : 0,
          y: null !== (ye = ee.axes[ie + 1]) && void 0 !== ye ? ye : 0
        }
      };
    const Be = new class {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oe;
        this.readGamepads = ee, this.requireTrustedPads = ie, this.nativeReader = He, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = ee => {
          ee.isTrusted && this.trustedIndices.add(ee.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = ee => {
          this.trustedIndices.delete(ee.gamepad.index)
        }, this.YR = ee => {
          if (this.rafId = 0, !this.running) return;
          const ie = 0 === this.lastTimestampMs ? 16 : Math.min(100, ee - this.lastTimestampMs);
          this.lastTimestampMs = ee;
          try {
            this.poll(ee, ie)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.YR))
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
      onFrame(ee) {
        return this.frameListeners.add(ee), () => {
          this.frameListeners.delete(ee)
        }
      }
      onActivePadChanged(ee) {
        return this.connectionListeners.add(ee), () => {
          this.connectionListeners.delete(ee)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(ee) {
        return this.connectedListeners.add(ee), () => {
          this.connectedListeners.delete(ee)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const ee = this.readPads()[this.activeInfo.index],
          ie = ee ? this.readPad(ee) : null;
        return ie && ie.id === this.activeInfo.id ? ee : null
      }
      poll(ee, ie) {
        var He, be;
        const Me = this.readPads();
        let Ke = null,
          Fe = !1;
        const Je = [],
          oe = Math.max(Me.length, this.slots.length);
        for (let Be = 0; Be < oe; Be++) {
          var Re;
          const ie = Be < Me.length ? Me[Be] : null,
            He = ie ? this.readPad(ie) : null;
          if (!He || !He.connected || !this.isUsable(He)) {
            this.slots[Be] = null;
            continue
          }
          let be = this.slots[Be];
          be && be.id === He.id || (be = {
            id: He.id,
            lJ: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Ue,
            rightRest: new Ue
          }, this.slots[Be] = be);
          const oe = ze(He, 0),
            ke = ze(He, 2);
          !be.leftSettled && Math.hypot(oe.x, oe.y) < pe && (be.leftSettled = !0), !be.rightSettled && Math.hypot(ke.x, ke.y) < pe && (be.rightSettled = !0), be.leftRest.observe(oe, ee), be.rightRest.observe(ke, ee);
          const qe = Xe(He),
            fe = (0, ye.q)(qe, be.lJ),
            Te = be.lJ,
            Ee = fe.map(((ee, ie) => ee && !Te[ie]));
          be.lJ = fe;
          const ge = {
            pad: He,
            slot: be,
            values: qe
          };
          Be === (null === (Re = this.activeInfo) || void 0 === Re ? void 0 : Re.index) && He.id === this.activeInfo.id ? (Ke = ge, Fe = Ee.includes(!0)) : Ee.includes(!0) && Je.push({
            polled: ge,
            rose: Ee
          })
        }
        const ke = this.slots.some((ee => null !== ee));
        if (ke !== this.anyPadConnected) {
          this.anyPadConnected = ke;
          for (const ee of this.connectedListeners) ee()
        }
        const qe = null !== (He = null === (be = Ke) || void 0 === be ? void 0 : be.slot.lJ) && void 0 !== He ? He : [],
          fe = Fe ? void 0 : Je.find((ee => {
            let {
              rose: ie
            } = ee;
            return ie.some(((ee, ie) => ee && !qe[ie]))
          }));
        if (fe ? (Ke = fe.polled, this.setActive(fe.polled.pad)) : this.activeInfo && !Ke && this.setActive(null), !Ke || !this.activeInfo) return;
        const Te = ((ee, ie) => {
          let {
            pad: He,
            slot: be,
            values: Me
          } = ee;
          const Ke = (0, ye.u)(ie);
          return Ke.values = Me, be.leftSettled && (Ke.leftStick = be.leftRest.apply(ze(He, 0))), be.rightSettled && (Ke.rightStick = be.rightRest.apply(ze(He, 2))), Ke
        })(Ke, ee);
        for (const ye of this.frameListeners) ye(Te, ie, this.activeInfo)
      }
      readPad(ee) {
        const ie = this.readSnapshot(ee);
        return ie && (0, qe.g)(ie) ? (ee => {
          const ie = ie => {
              var He;
              return null !== (He = ee.buttons[ie]) && void 0 !== He ? He : fe(!1)
            },
            He = ie => {
              var He;
              return null !== (He = ee.axes[ie]) && void 0 !== He ? He : 0
            },
            ye = ee.axes.length > 9,
            be = ye ? (ee => {
              const ie = 0 !== ee;
              return {
                up: ie && (ee >= -1 && ee < -.7 || ee >= .95 && ee <= 1),
                right: ie && ee >= -.75 && ee < -.1,
                down: ie && ee >= -.2 && ee < .45,
                left: ie && ee >= .4 && ee <= 1
              }
            })(He(9)) : {
              up: He(5) < -.5,
              down: He(5) > .5,
              left: He(4) < -.5,
              right: He(4) > .5
            };
          return {
            ...ee,
            mapping: "standard",
            buttons: [ie(1), ie(2), ie(0), ie(3), ie(4), ie(5), ie(6), ie(7), ie(8), ie(9), ie(10), ie(11), fe(be.up), fe(be.down), fe(be.left), fe(be.right), ie(12)],
            axes: [He(0), He(1), He(2), He(ye ? 5 : 3)]
          }
        })(ie) : ie
      }
      readSnapshot(ee) {
        if (this.nativeReader) try {
          return this.nativeReader(ee)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (ee => {
          const ie = ee;
          return {
            index: ie.index,
            id: ie.id,
            connected: ie.connected,
            mapping: ie.mapping,
            buttons: Array.from(ie.buttons, (ee => ({
              pressed: ee.pressed,
              value: ee.value
            }))),
            axes: Array.from(ie.axes),
            vendorName: Je(ee)
          }
        })(ee)
      }
      isUsable(ee) {
        return !(0, ke.h)(ee.id) && ("standard" !== ee.mapping ? (this.warnedNonStandardIds.has(ee.id) || (this.warnedNonStandardIds.add(ee.id), console.warn(`Controller "${ee.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(ee.index))
      }
      setActive(ee) {
        this.activeInfo = ee ? {
          index: ee.index,
          id: ee.id,
          family: (0, be.c)(ee.id, ee.vendorName)
        } : null;
        for (const ie of this.connectionListeners) ie(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (ee) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", ee)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.YR))
      }
    }((() => Re ? Re.call(navigator) : []), !0);
    Be.listenForConnections()
  },
  9469: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => Ke,
      i: () => Ue,
      j: () => be
    });
    var ye = He(9476);
    const be = ee => {
        const ie = [];
        ee.holdingGun && ie.push({
          kind: "reload"
        }), ee.touchscreenActionButton && ie.push({
          kind: "touchButton",
          label: ee.touchscreenActionButton
        });
        for (const Me of null !== (He = null === (be = ee.customButtons) || void 0 === be ? void 0 : be.filter(ye.g)) && void 0 !== He ? He : []) {
          var He, be;
          ie.push({
            kind: "customButton",
            id: Me.id,
            icon: Me.icon,
            description: Me.description
          })
        }
        return ie
      },
      Me = ee => ee.length >= 2,
      Ke = ee => "specialAction" !== ee.kind,
      Ue = (ee, ie) => {
        if (null === ee || null === ie) return ee === ie;
        if (ee.kind !== ie.kind) return !1;
        switch (ee.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return ee.action === ie.action;
          case "customButton":
            return ee.id === ie.id && ee.icon === ie.icon;
          case "touchButton":
            return ee.label === ie.label
        }
      }
  },
  9400: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
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
  9461: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      c: () => qe,
      f: () => Re,
      i: () => fe
    });
    var ye = He(59),
      be = He(27),
      Me = He(1432),
      Ke = He(9469),
      Ue = He(9483);
    let Fe = null;
    const Je = () => Fe,
      oe = ee => {
        (0, Ke.i)(Fe, ee) || (Fe = ee, be.h.yR(Ue.g, Fe))
      },
      Re = () => {
        const [ee, ie] = (0, ye.useState)(Je);
        return (0, Me.f)(Ue.g, ie), ee
      };
    let ke = !1;
    const qe = ee => {
        ee !== ke && (ke = ee, be.h.yR(Ue.h, ee))
      },
      fe = () => {
        const [ee, ie] = (0, ye.useState)(ke);
        return (0, Me.f)(Ue.h, ie), ee
      }
  },
  9495: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      e: () => Ue
    });
    var ye = He(27),
      be = He(9483);
    let Me = !1;
    const Ke = () => Me,
      Ue = ee => {
        ee !== Me && (Me = ee, ye.h.yR(be.k, Me))
      }
  },
  9487: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Fe
    });
    var ye = He(27),
      be = He(9483);
    let Me = null,
      Ke = 0;
    const Ue = () => Me,
      Fe = ee => {
        null === ee && null === Me || (Me = null === ee ? null : {
          id: ++Ke,
          holdMs: ee
        }, ye.h.yR(be.o, Me))
      }
  },
  9483: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => ye,
      h: () => be,
      k: () => Ue,
      o: () => Fe,
      q: () => Je,
      s: () => Ke
    });
    const ye = "controllerActionHintChanged",
      be = "controllerActionWheelHintChanged",
      Me = "controllerOpenChat",
      Ke = "controllerSneakToggledChanged",
      Ue = "controllerAttackLatchedChanged",
      Fe = "controllerDropStackHoldChanged",
      Je = "controllerPickBlockHintChanged"
  },
  9499: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      e: () => Ue
    });
    var ye = He(27),
      be = He(9483);
    let Me = !1;
    const Ke = () => Me,
      Ue = ee => {
        ee !== Me && (Me = ee, ye.h.yR(be.q, Me))
      }
  },
  9558: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Ue
    });
    var ye = He(27),
      be = He(9483);
    let Me = !1;
    const Ke = () => Me,
      Ue = ee => {
        ee !== Me && (Me = ee, ye.h.yR(be.s, Me))
      }
  },
  9440: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      constructor() {
        this.downAtMs = null
      }
      update(ee, ie, He, ye) {
        if (ee) return this.downAtMs = He, null;
        if (null === this.downAtMs) return null;
        const be = He - this.downAtMs >= ye;
        return ie ? be ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, be ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8979: (ee, ie, He) => {
    He.d(ie, {
      d: () => Re,
      g: () => ke,
      k: () => Ue,
      m: () => Be,
      q: () => ze
    });
    var ye = He(35),
      be = He(8940),
      Me = He(8912);
    const Ke = (() => {
        try {
          return He(8982)
        } catch {
          return null
        }
      })(),
      Ue = [...Me.W, "LeftStick", "RightStick"],
      Fe = new Map,
      Je = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      oe = (new Set(Object.values(Je)), {
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
      Re = (ee, ie) => {
        var He, ye;
        return null !== (He = null === (ye = oe[Je[ee]]) || void 0 === ye ? void 0 : ye[ie]) && void 0 !== He ? He : 1
      },
      ke = (ee, ie) => {
        const He = `./${Je[ee]}/${ie}.svg`;
        let ye = Fe.get(He);
        return void 0 === ye && (ye = Ke ? Ke(He) : "", Fe.set(He, ye)), ye
      },
      qe = new Set,
      fe = [],
      Te = ee => {
        if (!qe.has(ee)) {
          qe.add(ee);
          for (const ie of Ue) {
            const He = ke(ee, ie);
            if (He) {
              const ee = new Image;
              ee.crossOrigin = "anonymous", ee.src = He, fe.push(ee)
            }
          }
        }
      },
      pe = "controllerGlyphFamily";
    let Xe = null;
    const ze = ee => {
        ee !== Xe && (Xe = ee, ye.i.setItem(pe, ee), Te(ee))
      },
      Be = () => {
        const ee = ye.i.getItem(pe);
        (0, be.f)(ee) && ee !== Xe && (Xe = ee, Te(ee))
      }
  },
  9584: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ce,
      g: () => ve
    });
    var ye = He(59),
      be = He(27),
      Me = He(1432),
      Ke = He(8926),
      Ue = He(8907),
      Fe = He(8954),
      Je = He(8935);
    const oe = {
        x: 0,
        y: 0,
        z: 0
      },
      Re = Math.PI / 180,
      ke = ee => Math.hypot(ee.x, ee.y, ee.z),
      qe = (ee, ie) => ({
        x: ee.x * ie,
        y: ee.y * ie,
        z: ee.z * ie
      }),
      fe = (ee, ie) => ({
        x: ee.x + ie.x,
        y: ee.y + ie.y,
        z: ee.z + ie.z
      }),
      Te = (ee, ie) => ({
        x: ee.x - ie.x,
        y: ee.y - ie.y,
        z: ee.z - ie.z
      }),
      pe = ee => {
        const ie = ke(ee);
        return 0 === ie ? oe : qe(ee, 1 / ie)
      },
      Xe = ee => ({
        min: {
          ...ee
        },
        max: {
          ...ee
        }
      }),
      ze = (ee, ie) => ({
        min: {
          x: Math.min(ee.min.x, ie.x),
          y: Math.min(ee.min.y, ie.y),
          z: Math.min(ee.min.z, ie.z)
        },
        max: {
          x: Math.max(ee.max.x, ie.x),
          y: Math.max(ee.max.y, ie.y),
          z: Math.max(ee.max.z, ie.z)
        }
      }),
      Be = (ee, ie) => ee.max.x - ee.min.x <= ie && ee.max.y - ee.min.y <= ie && ee.max.z - ee.min.z <= ie;
    class Ee {
      constructor() {
        this.bias = oe, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = oe, this.windowSec = 0
      }
      update(ee) {
        const ie = this.gyroRange ? ze(this.gyroRange, ee.gyro) : Xe(ee.gyro),
          He = ee.accel ? this.accelRange ? ze(this.accelRange, ee.accel) : Xe(ee.accel) : null;
        if (!Be(ie, 1) || He && !Be(He, .01)) return void this.restartWindow(ee);
        if (this.gyroRange = ie, this.accelRange = He, this.sum = fe(this.sum, qe(ee.gyro, ee.dtSec)), this.windowSec += ee.dtSec, this.windowSec < 1) return;
        const ye = qe(this.sum, 1 / this.windowSec);
        if (ke(ye) > 5) return;
        const be = Te(ye, this.bias);
        let Me = 0;
        !this.calibrated || this.windowSec >= 3 ? Me = 1 : ke(be) <= 1 && (Me = Math.min(1, ee.dtSec / 1)), this.bias = fe(this.bias, qe(be, Me)), this.calibrated = this.calibrated || Me > 0
      }
      correct(ee) {
        return Te(ee, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = oe, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = oe, this.windowSec = 0
      }
      restartWindow(ee) {
        this.gyroRange = Xe(ee.gyro), this.accelRange = ee.accel ? Xe(ee.accel) : null, this.sum = oe, this.windowSec = 0
      }
    }
    class ge {
      constructor() {
        this.down = null
      }
      update(ee, ie, He) {
        const ye = pe(qe(ie, -1));
        if (!this.down) return this.down = ye, ye;
        const be = qe(ee, Re * He),
          Me = this.down,
          Ke = {
            x: Me.x - (be.y * Me.z - be.z * Me.y),
            y: Me.y - (be.z * Me.x - be.x * Me.z),
            z: Me.z - (be.x * Me.y - be.y * Me.x)
          },
          Ue = 0 === ke(ye) ? 0 : Math.min(1, He / .25);
        var Fe, Je;
        return this.down = pe((Je = Ue, fe(Fe = Ke, qe(Te(ye, Fe), Je)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Oe {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(ee, ie, He) {
        const ye = Math.hypot(ee, ie),
          be = Math.max(0, Math.min(1, (ye - 2) / 2)),
          Me = {
            yaw: ee * (1 - be),
            pitch: ie * (1 - be),
            dtSec: He
          };
        for (this.entries.push(Me), this.windowSec += He; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Ke = 0,
          Ue = 0;
        for (const Je of this.entries) Ke += Je.yaw * Je.dtSec, Ue += Je.pitch * Je.dtSec;
        const Fe = this.windowSec > 0 ? {
          yaw: Ke / this.windowSec,
          pitch: Ue / this.windowSec
        } : {
          yaw: Me.yaw,
          pitch: Me.pitch
        };
        return {
          yaw: ee * be + Fe.yaw,
          pitch: ie * be + Fe.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class de {
      constructor() {
        this.calibrator = new Ee, this.gravity = new ge, this.smoother = new Oe
      }
      process(ee, ie, He) {
        const ye = Math.max(0, Math.min(.05, ie));
        this.calibrator.update({
          ...ee,
          dtSec: ye
        });
        const be = this.calibrator.correct(ee.gyro);
        let Me = be.y;
        "player" === He && ee.accel && (Me = ((ee, ie) => {
          const He = ee.y * ie.y + ee.z * ie.z;
          return -Math.sign(He) * Math.min(1.41 * Math.abs(He), Math.hypot(ee.y, ee.z))
        })(be, this.gravity.update(be, ee.accel, ye)));
        const Ke = this.smoother.apply(Me, be.x, ye),
          Ue = ((ee, ie) => {
            const He = Math.hypot(ee, ie);
            if (He >= 1) return {
              yaw: ee,
              pitch: ie
            };
            const ye = He / 1;
            return {
              yaw: ee * ye,
              pitch: ie * ye
            }
          })(Ke.yaw, Ke.pitch);
        return {
          yawDeg: Ue.yaw * ye,
          pitchDeg: Ue.pitch * ye
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
    const We = (ee, ie) => {
      var He, ye, be;
      const Me = ie * Re,
        Ke = null !== (He = ee.beta) && void 0 !== He ? He : 0,
        Ue = null !== (ye = ee.gamma) && void 0 !== ye ? ye : 0;
      return {
        x: Ke * Math.cos(Me) - Ue * Math.sin(Me),
        y: Ke * Math.sin(Me) + Ue * Math.cos(Me),
        z: null !== (be = ee.alpha) && void 0 !== be ? be : 0
      }
    };
    var te = He(9588);
    class Ze {
      constructor(ee, ie, He) {
        this.hid = ee, this.sink = ie, this.onControllersChanged = He, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = ee => {
          this.openController(ee.device).catch((ee => {
            console.warn("Could not open motion controller", ee)
          }))
        }, this.onDisconnect = ee => {
          this.opening.has(ee.device) && this.disconnectedWhileOpening.add(ee.device);
          const ie = this.controllers.get(ee.device);
          ie && (this.forget(ie), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const ee = await this.hid.getDevices();
        for (const ie of ee) await this.openController(ie).catch((ee => {
          console.warn("Could not open motion controller", ee)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const ee of [...this.controllers.values()]) this.forget(ee);
        this.onControllersChanged()
      }
      async request() {
        const ee = await this.hid.requestDevice({
          filters: te.g
        });
        let ie = 0;
        for (const He of ee) await this.openController(He).catch((ee => {
          console.warn("Could not open motion controller", ee), ie++
        }));
        return ie
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((ee => null !== (0, te.c)(ee.vendorId, ee.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((ee => ee.kind))
      }
      forget(ee) {
        ee.device.removeEventListener("inputreport", ee.onReport), this.controllers.get(ee.device) === ee && this.controllers.delete(ee.device)
      }
      async openController(ee) {
        const ie = (0, te.c)(ee.vendorId, ee.productId);
        if (!ie || !this.running || this.controllers.has(ee) || this.opening.has(ee)) return;
        this.opening.add(ee);
        let He = !1;
        try {
          ee.opened || await ee.open()
        } finally {
          this.opening.delete(ee), He = this.disconnectedWhileOpening.delete(ee)
        }
        if (He) return void ee.close().catch((ee => {
          console.debug("Could not close an unplugged motion controller", ee)
        }));
        if (!this.running) return;
        const ye = {
          device: ee,
          kind: ie,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: ee => {
            this.onReport(ye, ee)
          }
        };
        this.controllers.set(ee, ye), ee.addEventListener("inputreport", ye.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(ye)
        } catch (be) {
          console.warn(`Could not turn on motion for ${ie}`, be), this.controllers.get(ee) === ye && (this.forget(ye), this.onControllersChanged())
        }
      }
      async enableMotion(ee) {
        let {
          device: ie,
          kind: He
        } = ee;
        if ((0, te.d)(He))
          for (const ye of te.q[He]) await ie.receiveFeatureReport(ye).catch((ee => {
            console.debug(`Motion controller feature report ${ye} unavailable`, ee)
          }));
        else
          for (let ye = 0; ye < 2; ye++)
            for (const {
                subcommand: ee,
                args: He
              }
              of te.t) await ie.sendReport(te.u, (0, te.b)(this.switchPacketCounter++, ee, He)), await new Promise((ee => {
              setTimeout(ee, 60)
            }))
      }
      onReport(ee, ie) {
        const He = (0, te.j)(ee.kind, ie.reportId, ie.data, ee.device.productId);
        if (!He) return;
        const ye = null === ee.lastEventMs ? 0 : (ie.timeStamp - ee.lastEventMs) / 1e3;
        ee.lastEventMs = ie.timeStamp;
        let be = He.dtSec;
        if (null !== be && ye > 0 && (be = Math.max(.001, Math.min(.017, ye / He.readings.length))), null === be && null !== He.sensorClock && (0, te.d)(ee.kind)) {
          const ie = (0, te.n)(ee.kind, ee.lastClock, He.sensorClock);
          ee.lastClock = He.sensorClock, be = 0 === ie ? null : ie
        }
        if (ee.lastReadingMs = ie.timeStamp, this.isPreferred(ee, ie.timeStamp))
          for (const Ke of He.readings) {
            var Me;
            this.sink(Ke, null !== (Me = be) && void 0 !== Me ? Me : ye, `hid${ee.openedOrder}`)
          }
      }
      isPreferred(ee, ie) {
        const He = ee => 1e6 * te.i[ee.kind] + ee.openedOrder;
        for (const ye of this.controllers.values())
          if (ye !== ee && ie - ye.lastReadingMs < 500 && He(ye) < He(ee)) return !1;
        return !0
      }
    }
    var we = He(97);
    const De = () => DeviceMotionEvent,
      Pe = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, we.isMobile)(),
      Ae = () => {
        var ee;
        const ie = null === (ee = window.screen.orientation) || void 0 === ee ? void 0 : ee.angle;
        return "number" === typeof ie ? ie : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Ye {
      constructor(ee, ie) {
        this.sink = ee, this.onStateChanged = ie, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((ee => {
            console.warn("Could not enable the motion sensor", ee)
          }))
        }, this.onMotion = ee => {
          const ie = ee.rotationRate;
          if (!ie || null === ie.alpha && null === ie.beta && null === ie.gamma) return;
          const He = null === this.lastEventMs ? 0 : (ee.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = ee.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: We(ie, Ae()),
            accel: null
          }, He, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof De().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const ee = De().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof ee) return void this.listen();
        let ie;
        this.disarmGestureRequest();
        try {
          ie = await ee.call(DeviceMotionEvent)
        } catch (He) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), He
        }
        this.wanted && ("granted" === ie ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(ee) {
        this.state !== ee && (this.state = ee, this.onStateChanged())
      }
    }
    const Ve = "controllerGyroStatusChanged",
      ae = {
        XV: 0,
        zV: 0
      },
      ce = ee => {
        var ie, He;
        return "undefined" === typeof document || (null === (ie = null === (He = document.featurePolicy) || void 0 === He ? void 0 : He.allowsFeature(ee)) || void 0 === ie || ie)
      };
    class xe {
      constructor() {
        this.processor = new de, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = ee => {
          const ie = ee.gyroAiming && Ue.g.hasConnectedPad();
          var He, ye;
          ie !== this.phoneRunning && (this.phoneRunning = ie, ie ? null === (He = this.phone) || void 0 === He || He.start() : null === (ye = this.phone) || void 0 === ye || ye.stop());
          if (ee.gyroAiming !== this.running) {
            var be, Me;
            if (this.running = ee.gyroAiming, this.running) null === (be = this.hid) || void 0 === be || be.start().catch((ee => {
              console.warn("Could not open motion controllers", ee)
            }));
            else null === (Me = this.hid) || void 0 === Me || Me.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          be.h.yR(Ve, this.getStatus())
        };
        const ee = (() => {
            var ee;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (ee = navigator.hid) && void 0 !== ee ? ee : null
          })(),
          ie = ce("hid");
        this.hidBlocked = null !== ee && !ie, this.hid = ee && ie ? new Ze(ee, ((ee, ie, He) => {
          this.lastHidReadingMs = performance.now(), this.feed(ee, ie, "player", He)
        }), this.publishStatus) : null;
        const He = ce("accelerometer") && ce("gyroscope");
        this.phoneBlocked = Pe() && !He, this.phone = Pe() && He ? new Ye(((ee, ie, He) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(ee, ie, "local", He)
        }), this.publishStatus) : null, be.h.subscribe(Je.g, this.syncWithSettings), Ue.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Je.h)()), this.publishStatus()
        })), this.syncWithSettings((0, Je.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var ee, ie, He, ye;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (ee = null === (ie = this.hid) || void 0 === ie ? void 0 : ie.getConnectedKinds()) && void 0 !== ee ? ee : [],
          phoneMotion: null !== (He = null === (ye = this.phone) || void 0 === ye ? void 0 : ye.getState()) && void 0 !== He ? He : "off",
          padConnected: Ue.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var ee;
        await (null === (ee = this.phone) || void 0 === ee ? void 0 : ee.requestPermission())
      }
      drainLookDelta() {
        const ee = performance.now();
        ee - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = ee;
        const ie = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const He = (0, Je.h)();
        return He.gyroAiming && (ee => {
          let {
            activation: ie,
            isHeld: He,
            useButton: ye,
            gyroButton: be
          } = ee;
          return "always" === ie || He("aiming" === ie ? ye : be)
        })({
          activation: He.gyroActivation,
          isHeld: ee => Fe.d.isButtonHeld(ee),
          useButton: (0, Ke.j)("use"),
          gyroButton: He.gyroButton
        }) ? ((ee, ie) => ({
          XV: -ee.yawDeg * ie * Re,
          zV: -ee.pitchDeg * ie * Re
        }))(ie, He.gyroSensitivity) : ae
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(ee, ie) {
        this.feed(ee, ie, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(ee, ie, He, ye) {
        this.source !== ye && (this.processor.reset(), this.source = ye);
        const be = this.processor.process(ee, ie, He);
        this.pendingYawDeg += be.yawDeg, this.pendingPitchDeg += be.pitchDeg
      }
    }
    let Le = null;
    const Ce = () => (Le || (Le = new xe), Le),
      ve = () => {
        const [ee, ie] = (0, ye.useState)((() => Ce().getStatus()));
        return (0, Me.f)(Ve, ie), (0, ye.useEffect)((() => {
          ie(Ce().getStatus())
        }), []), ee
      }
  },
  9588: (ee, ie, He) => {
    He.d(ie, {
      b: () => ge,
      c: () => Fe,
      d: () => ye,
      g: () => Ue,
      h: () => Je,
      i: () => oe,
      j: () => ze,
      n: () => pe,
      q: () => de,
      t: () => Oe,
      u: () => Be
    });
    const ye = ee => "dualShock4" === ee || "dualSense" === ee,
      be = 1356,
      Me = 1406,
      Ke = [{
        vendorId: be,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: be,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: be,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: be,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: be,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Me,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Me,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Me,
        productId: 8199,
        kind: "joyConRight"
      }],
      Ue = Ke.map((ee => {
        let {
          vendorId: ie,
          productId: He
        } = ee;
        return {
          vendorId: ie,
          productId: He
        }
      })),
      Fe = (ee, ie) => {
        var He, ye;
        return null !== (He = null === (ye = Ke.find((He => He.vendorId === ee && He.productId === ie))) || void 0 === ye ? void 0 : ye.kind) && void 0 !== He ? He : null
      },
      Je = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      oe = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Re = 2e3 / 32767,
      ke = 1 / 8192,
      qe = 936 / 13371,
      fe = (ee, ie, He) => ({
        x: ee.getInt16(ie, !0) * He,
        y: ee.getInt16(ie + 2, !0) * He,
        z: ee.getInt16(ie + 4, !0) * He
      }),
      Te = ee => 0 === ee.x && 0 === ee.y && 0 === ee.z,
      pe = (ee, ie, He) => null === ie ? null : "dualShock4" === ee ? 16 * (He - ie & 65535) / 3 / 1e6 : (He - ie >>> 0) / 3 / 1e6,
      Xe = (ee, ie) => "joyConRight" === ie ? {
        x: ee.y,
        y: -ee.z,
        z: -ee.x
      } : {
        x: -ee.y,
        y: ee.z,
        z: -ee.x
      },
      ze = (ee, ie, He, be) => ye(ee) ? ((ee, ie, He, ye) => {
        const be = ((ee, ie, He) => "dualShock4" === ee ? 1 === ie && He >= 63 ? 0 : 17 === ie && He >= 65 ? 2 : null : 1 === ie && He >= 62 ? 0 : 49 === ie && He >= 63 ? 1 : null)(ee, ie, He.byteLength);
        if (null === be) return null;
        if (2976 === ye && 1 === ie && 0 !== (4 & He.getUint8(30))) return null;
        const Me = be + ("dualShock4" === ee ? 12 : 15),
          Ke = fe(He, Me, Re),
          Ue = fe(He, Me + 6, ke);
        return Te(Ke) && Te(Ue) ? null : {
          readings: [{
            gyro: Ke,
            accel: Ue
          }],
          dtSec: null,
          sensorClock: "dualShock4" === ee ? He.getUint16(be + 9, !0) : He.getUint32(be + 27, !0)
        }
      })(ee, ie, He, be) : ((ee, ie, He) => {
        if (48 !== ie && 49 !== ie || He.byteLength < 48) return null;
        const ye = [];
        for (let be = 0; be < 3; be++) {
          const ie = fe(He, 12 + 12 * be, 244e-6),
            Me = fe(He, 18 + 12 * be, qe);
          if (Te(Me) && Te(ie)) return null;
          ye.push({
            gyro: Xe(Me, ee),
            accel: Xe(ie, ee)
          })
        }
        return {
          readings: ye,
          dtSec: .005,
          sensorClock: null
        }
      })(ee, ie, He),
      Be = 1,
      Ee = [0, 1, 64, 64, 0, 1, 64, 64],
      ge = (ee, ie, He) => new Uint8Array([15 & ee, ...Ee, ie, ...He]),
      Oe = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      de = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8962: (ee, ie, He) => {
    He.d(ie, {
      e: () => xe,
      h: () => Se,
      i: () => Oe,
      l: () => qe.n,
      m: () => ve,
      o: () => Ce,
      r: () => de,
      s: () => ue,
      t: () => qe.w,
      x: () => qe.A,
      z: () => ne,
      B: () => qe.F,
      E: () => Ye
    });
    var ye = He(59),
      be = He(18),
      Me = He(27),
      Ke = He(1432),
      Ue = He(1246),
      Fe = He(8935),
      Je = He(8971),
      oe = He(8917),
      Re = He(8907),
      ke = He(8979),
      qe = He(1385),
      fe = He(8912),
      Te = He(9389),
      pe = He(4745),
      Xe = He(107);
    class ze {
      constructor(ee) {
        this.deps = ee, this.pads = new Map
      }
      observe(ee, ie, He) {
        if (!this.deps.touchOnly) return;
        const ye = this.pads.get(ie.id);
        "proven" !== ye && He ? (this.pads.set(ie.id, "proven"), void 0 !== ye && this.deps.onReleased(ie, ee, ee.timestampMs - ye)) : void 0 === ye && (this.pads.set(ie.id, ee.timestampMs), this.deps.onHeld(ie, ee)), this.deps.setMayHide("proven" === this.pads.get(ie.id))
      }
    }
    const Be = ee => ee.values.flatMap(((ee, ie) => ee >= fe.S ? [String(ie)] : [])).join(",") || "none",
      Ee = (ee, ie, ye, be, Me) => {
        const Ke = (0, qe.g)(),
          Ue = document.visibilityState,
          Fe = document.hasFocus();
        Promise.all([Promise.resolve().then((() => He(3142))), Promise.resolve().then((() => He(1268))), Promise.resolve().then((() => He(125)))]).then((He => {
          let [{
            logControllerHudHoldToGtag: Je
          }, {
            logClientLineFromEveryPage: oe
          }, {
            siteUsed: Re
          }] = He;
          Je(ee, ie.family, null === Me ? void 0 : Math.round(Me / 1e3)), oe(`touch HUD pad ${ee}`, ge(ie, ye, be, Me, Ke, Ue, Fe, Re))
        }), (() => {}))
      },
      ge = (ee, ie, He, ye, be, Me, Ke, Ue) => {
        var Fe;
        const Je = {
          pad_id: ee.id.slice(0, 120),
          pad_family: ee.family,
          pad_mapping: null !== (Fe = null === He || void 0 === He ? void 0 : He.mapping) && void 0 !== Fe ? Fe : "unread",
          pad_axes: He ? String(He.axes.length) : "unread",
          pad_buttons: He ? String(He.buttons.length) : "unread",
          pressed: Be(ie),
          ms_since_touch: null === be ? "none" : String(Math.round(ie.timestampMs - be)),
          visibility: Me,
          focused: String(Ke),
          site: Ue
        };
        return null !== ye && (Je.held_ms = String(Math.round(ye))), Je
      };
    const Oe = ee => !ee.repeat && !(0, Te.d)(ee.key),
      de = "PadHidesCursor";
    let We = !1;
    const te = ee => {
        ee !== We && (We = ee, document.documentElement.classList.toggle(de, ee))
      },
      Ze = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(ee) {
          let ie = !1,
            He = !1;
          ee.values.forEach(((ee, ye) => {
            const be = ee >= (this.buttonsDown[ye] ? fe.U : fe.S);
            be && !this.buttonsDown[ye] && (ie = !0, He = !0), this.buttonsDown[ye] = be
          }));
          return [ee.leftStick, ee.rightStick].forEach(((ee, ye) => {
            const be = this.stickAnchors[ye];
            Math.hypot(ee.x, ee.y) < (be ? fe.U : .3) ? this.stickAnchors[ye] = null : (!be || Math.hypot(ee.x - be.x, ee.y - be.y) >= .3) && (this.stickAnchors[ye] = {
              x: ee.x,
              y: ee.y
            }, ie = !0, He ||= !be)
          })), ie && (this.lastActivityMs = ee.timestampMs), this.onlyMovedOn = ie && !He, ie
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(ee) {
          return !(ee - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((ee => ee)) || this.stickAnchors.some((ee => null !== ee)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((ee => null !== ee))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      we = (De = () => Re.g.getActiveGamepad(), new ze({
        touchOnly: "touchOnly" === (0, Xe.b)(),
        setMayHide: qe.x,
        onHeld: (ee, ie) => {
          Ee("lJ", ee, ie, De(), null)
        },
        onReleased: (ee, ie, He) => {
          Ee("released", ee, ie, De(), He)
        }
      }));
    var De;
    let Pe = null,
      Ae = !1;
    const Ye = () => Ae;
    let Ve = null,
      ae = !1,
      ce = null;
    const xe = () => ce;
    let Le = !1;
    const Ce = (ee, ie) => {
        if (!Ze.observe(ee)) return !1;
        if (we.observe(ee, ie, Ze.isStickOffRest()), Le && Ze.wasOnlyMoveOn() && !(0, qe.n)()) return !1;
        Le = !1, Ae = !1;
        const He = !(0, qe.n)();
        return He && (Pe = ee, ce = !We && ae && Ve ? {
          ...Ve
        } : null), ae = !1, (0, qe.w)("gamepad"), te(!0), (0, ke.q)((0, Fe.k)()), He
      },
      ve = ee => !(0, qe.n)() || ee === Pe,
      ue = () => {
        Ze.reset()
      },
      me = () => {
        const ee = be.e.get("activeInputDevice"),
          ie = "gamepad" === ee ? Re.g.getActivePad() : null;
        return {
          device: ee,
          inGame: (0, Ue.x)(),
          padMovesMouse: null !== ie && (0, oe.e)(ie.id)
        }
      },
      le = ee => {
        document.pointerLockElement ? Ve = null : (Ve ??= {
          x: 0,
          y: 0
        }, Ve.x = ee.clientX, Ve.y = ee.clientY)
      },
      Se = () => {
        const ee = new pe.d,
          ie = ie => {
            ee.reset(), Le = !1, (0, qe.w)(ie)
          },
          He = ee => {
            if (ee.isTrusted) {
              if (ee instanceof KeyboardEvent) {
                if ((0, qe.t)(ee), !Oe(ee)) return;
                Ae = !0
              }
              if (ee instanceof PointerEvent && "touch" === ee.pointerType) return Ve = null, void ie("touch");
              ee instanceof PointerEvent && (le(ee), ae = !0), ("pointerdown" !== ee.type || (ee => {
                let {
                  device: ie,
                  inGame: He,
                  padMovesMouse: ye
                } = ee;
                return !("gamepad" === ie && ye && He)
              })(me())) && ie("keyboardMouse")
            }
          },
          ye = ee => {
            ee.isTrusted && (Ve = null, ie("touch"))
          },
          Ke = ee => {
            ee.isTrusted && "touch" !== ee.pointerType && !ee.relatedTarget && (Ve = null)
          },
          Ue = He => {
            if (!He.isTrusted || "touch" === He.pointerType) return;
            le(He);
            const ye = He.movementX || 0,
              Me = He.movementY || 0;
            if (0 === ye && 0 === Me) return;
            if (ae = !0, te(!1), "keyboardMouse" === be.e.get("activeInputDevice")) return;
            const Ke = Ze.isHolding(He.timeStamp),
              Ue = me(),
              Fe = (ee => {
                let {
                  device: ie,
                  inGame: He,
                  padMovesMouse: ye,
                  padHolding: be
                } = ee;
                return ("gamepad" !== ie || !ye) && "keyboardMouse" !== ie && (He || !be)
              })({
                ...Ue,
                inGame: Ue.inGame && (0, Je.d)(),
                padHolding: Ke
              });
            Fe && ee.add(ye, Me, He.timeStamp) && (ie("keyboardMouse"), Le = Ze.isStickOffRest())
          },
          Fe = ee => {
            te("gamepad" === ee)
          },
          oe = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", He, oe), window.addEventListener("pointerdown", He, oe), window.addEventListener("wheel", He, oe), window.addEventListener("touchstart", ye, oe), window.addEventListener("pointermove", Ue, oe), window.addEventListener("pointerout", Ke, oe);
        const Re = Me.h.subscribe("appManagerUpdated|activeInputDevice", Fe);
        return Fe(be.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", He, oe), window.removeEventListener("pointerdown", He, oe), window.removeEventListener("wheel", He, oe), window.removeEventListener("touchstart", ye, oe), window.removeEventListener("pointermove", Ue, oe), window.removeEventListener("pointerout", Ke, oe), Ve = null, Me.h.unsubscribe(Re), te(!1)
        }
      },
      ne = () => {
        const [ee, ie] = (0, ye.useState)(Fe.k);
        return (0, Ke.f)(Fe.c, (() => {
          ie((0, Fe.k)())
        })), (0, Ke.f)(Re.c, (() => {
          ie((0, Fe.k)())
        })), ee
      }
  },
  8940: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      f: () => be
    });
    const ye = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      be = ee => ye.includes(ee)
  },
  9428: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      e: () => Me,
      h: () => Fe,
      j: () => Ue
    });
    var ye = He(1432),
      be = He(1403);
    const Me = "controllerInventoryCursorChanged",
      Ke = {
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
      Ue = () => {
        var ee, ie;
        return (0, ye.j)(Me, null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.getInventoryCursorState()) && void 0 !== ee ? ee : Ke)
      },
      Fe = () => {
        var ee, ie;
        return null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.isPadSteppingSlots()) && void 0 !== ee && ee
      }
  },
  9426: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      e: () => Ue,
      i: () => Fe,
      m: () => Ke,
      o: () => Me,
      r: () => oe,
      u: () => Re
    });
    let ye = null;
    const be = new Set,
      Me = ee => (ye = ee, () => {
        if (ye === ee) {
          ye = null;
          for (const ee of be) ee()
        }
      }),
      Ke = ee => (be.add(ee), () => {
        be.delete(ee)
      }),
      Ue = () => ye,
      Fe = () => null !== ye;
    let Je = null;
    const oe = ee => {
        Je = ee
      },
      Re = () => {
        const ee = Je;
        return Je = null, ee
      },
      ke = (ee, ie) => {
        var He, ye;
        return null !== (He = null !== (ye = ee.find((ee => ee.element === ie))) && void 0 !== ye ? ye : ee.find((ee => ee.element.contains(ie)))) && void 0 !== He ? He : null
      }
  },
  9430: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => Ke
    });
    var ye = He(59);
    const be = new WeakMap,
      Me = ee => {
        var ie, He;
        return null !== (ie = null === (He = be.get(ee)) || void 0 === He ? void 0 : He.current) && void 0 !== ie ? ie : null
      },
      Ke = (ee, ie) => {
        const He = (0, ye.useRef)(ie);
        He.current = ie;
        const Me = (0, ye.useRef)(null);
        (0, ye.useEffect)((() => {
          const ie = ee.current,
            ye = Me.current;
          ie !== ye && (ye && be.get(ye) === He && be.delete(ye), Me.current = ie, ie && be.set(ie, He))
        })), (0, ye.useEffect)((() => () => {
          const ee = Me.current;
          ee && be.get(ee) === He && be.delete(ee), Me.current = null
        }), [])
      }
  },
  9555: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      g: () => Je,
      h: () => Re,
      l: () => oe,
      m: () => Fe,
      n: () => qe
    });
    var ye = He(27),
      be = He(2068),
      Me = He(1403),
      Ke = He(1385);
    const Ue = ee => {
        var ie, He;
        return (0, Ke.n)() && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getGlyphForNoaAction(ee)) && void 0 !== ie ? ie : null
      },
      Fe = "controllerGlyph:",
      Je = ee => {
        var ie, He;
        return null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconName(ee)) && void 0 !== ie ? ie : `${Fe}xbox/${ee}`
      },
      oe = ee => ee.startsWith(Fe),
      Re = ee => {
        var ie, He;
        return oe(ee) && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconUrl(ee)) && void 0 !== ie ? ie : null
      },
      ke = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Ke.c, be.f, be.e],
      qe = ee => {
        const ie = ke.map((ie => ye.h.subscribe(ie, ee)));
        return () => {
          for (const ee of ie) ye.h.unsubscribe(ee)
        }
      }
  },
  9413: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    const ye = "controllerOpenKeyboard",
      be = "controllerKeyboardVisible"
  },
  8971: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => oe,
      e: () => Fe,
      g: () => Ue
    });
    var ye = He(18),
      be = He(1620),
      Me = He(1774);
    const Ke = new Map,
      Ue = (ee, ie) => (Ke.has(ee) && console.warn(`Gameplay blocker "${ee}" registered twice; the newer one replaces it.`), Ke.set(ee, ie), () => {
        Ke.get(ee) === ie && Ke.delete(ee)
      }),
      Fe = () => (0, Me.e)(document.activeElement),
      Je = function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [ie, He] of Ke)
          if (!ee.includes(ie) && He()) return ie;
        return null
      },
      oe = function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === ye.e.get("gameState") && (!(0, be.o)() && (!Fe() && null === Je(ee)))
      }
  },
  8912: (ee, ie, He) => {
    He.d(ie, {
      A: () => Be,
      D: () => Pe,
      H: () => Ee,
      L: () => Xe,
      N: () => pe,
      Q: () => Je,
      S: () => ke,
      U: () => qe,
      V: () => be,
      W: () => ye,
      Z: () => Oe,
      bb: () => we,
      cb: () => Ae,
      e: () => Ye,
      f: () => De,
      g: () => oe,
      gb: () => ge,
      k: () => Fe,
      l: () => Ue,
      n: () => We,
      q: () => ze,
      s: () => de,
      u: () => Me,
      w: () => Re
    });
    const ye = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      be = ye.length,
      Me = function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(be).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: ee
        }
      },
      Ke = Object.fromEntries(ye.map(((ee, ie) => [ee, ie]))),
      Ue = ee => Ke[ee],
      Fe = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const ye = Math.hypot(ee.x, ee.y);
        if (ye <= ie) return {
          x: 0,
          y: 0
        };
        const be = Math.min(1, (ye - ie) / Math.max(1e-4, He - ie));
        return {
          x: ee.x / ye * be,
          y: ee.y / ye * be
        }
      },
      Je = ["exponential", "linear", "boost"],
      oe = (ee, ie) => {
        const He = Math.hypot(ee.x, ee.y);
        if (0 === He) return {
          x: 0,
          y: 0
        };
        const ye = ((ee, ie) => {
          const He = Math.max(0, Math.min(1, ee));
          return "linear" === ie ? He : He * He
        })(He, ie);
        return {
          x: ee.x / He * ye,
          y: ee.y / He * ye
        }
      },
      Re = .5,
      ke = .3,
      qe = .2,
      fe = Ue("LT"),
      Te = Ue("RT"),
      pe = ee => ee === fe || ee === Te,
      Xe = (ee, ie) => {
        const He = Ue(ie);
        return pe(He) ? ee[He] > .35 : ee[He] >= Re
      },
      ze = (ee, ie) => ee.map(((ee, He) => pe(He) ? ie[He] ? ee > .35 : ee >= .55 : ee >= Re)),
      Be = ["Up", "Down", "Left", "Right"],
      Ee = ee => Be.includes(ee),
      ge = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(ee.x, ee.y) < ie ? null : Math.abs(ee.x) > Math.abs(ee.y) ? ee.x > 0 ? "Right" : "Left" : ee.y > 0 ? "Down" : "Up"
      },
      Oe = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      de = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      We = ["default", "slow", "off"],
      te = 800,
      Ze = 250,
      we = (ee, ie) => "off" === ie ? null : "slow" === ie ? {
        initialDelayMs: Math.max(ee.initialDelayMs, te),
        intervalMs: Math.max(ee.intervalMs, Ze)
      } : ee;
    class De {
      constructor(ee) {
        this.readTiming = ee, this.lJ = !1, this.timing = null, this.nextFireMs = 0
      }
      update(ee, ie) {
        return ee ? this.lJ ? !!(this.timing && ie >= this.nextFireMs) && (this.nextFireMs = ie + this.timing.intervalMs, !0) : (this.lJ = !0, this.timing = this.readTiming(), this.nextFireMs = ie + (null !== (He = null === (ye = this.timing) || void 0 === ye ? void 0 : ye.initialDelayMs) && void 0 !== He ? He : 0), !0) : (this.lJ = !1, !1);
        var He, ye
      }
      reset() {
        this.lJ = !1
      }
    }
    const Pe = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Ae = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Ye {
      constructor(ee) {
        this.timer = ee, this.direction = null
      }
      update(ee, ie) {
        return ee !== this.direction && (this.timer.reset(), this.direction = ee), this.timer.update(null !== ee, ie) ? ee : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9434: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Me
    });
    let ye = -1 / 0;
    const be = () => {
        ye = performance.now()
      },
      Me = ee => performance.now() - ye < ee
  },
  9392: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => Me
    });
    var ye = He(8935),
      be = He(8912);
    const Me = ee => (0, be.bb)(ee, (0, ye.h)().buttonRepeat),
      Ke = ee => new be.f((() => Me(ee)))
  },
  8946: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      e: () => Me,
      f: () => Ue
    });
    var ye = He(27),
      be = He(8935);
    const Me = (ee, ie) => "OpenShop" === ee ? "shop" === ie : "OpenLobbyLeaderboard" !== ee || "leaderboard" === ie;
    let Ke = !1;
    const Ue = ee => {
        ee !== Ke && (Ke = ee, ye.h.yR(be.c, (0, be.h)()))
      },
      Fe = () => ((ee, ie) => "shop" === ee && ie ? "shop" : "leaderboard")((0, be.h)().leaderboardButton, Ke)
  },
  8944: (ee, ie, He) => {
    He.d(ie, {
      $: () => pe,
      C: () => qe,
      F: () => Re,
      I: () => Ee,
      K: () => Je,
      O: () => Xe,
      R: () => Ze,
      U: () => Be,
      X: () => Te,
      bb: () => fe,
      c: () => ae,
      d: () => xe,
      e: () => we,
      fb: () => ze,
      h: () => Ke,
      jb: () => Ae,
      k: () => te,
      kb: () => Me,
      l: () => de,
      m: () => Ye,
      n: () => Ve,
      ob: () => Oe,
      q: () => oe,
      r: () => Fe,
      sb: () => ce,
      t: () => Ue,
      tb: () => We,
      w: () => ge,
      z: () => ke
    });
    var ye = He(8932),
      be = He(8912);
    const Me = {
        min: 25,
        max: 500,
        step: 5
      },
      Ke = {
        min: 25,
        max: 100,
        step: 5
      },
      Ue = {
        min: 0,
        max: .4,
        step: .01
      },
      Fe = {
        min: 25,
        max: 300,
        step: 5
      },
      Je = {
        min: .5,
        max: 6,
        step: .1
      },
      oe = (ee, ie) => {
        if (!Number.isFinite(ee)) return ie.min;
        const He = ie.min + Math.round((ee - ie.min) / ie.step) * ie.step,
          ye = Math.min(ie.max, Math.max(ie.min, He));
        return Math.round(1e3 * ye) / 1e3
      },
      Re = ee => `${Math.round(ee)}%`,
      ke = ee => Re(100 * ee),
      qe = ee => `${ee.toFixed(1)}\xd7`,
      fe = [{
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
      Te = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      pe = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Xe = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      ze = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Be = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Ee = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      ge = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Oe = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      de = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      We = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      te = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Ze = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      we = {
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
      De = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Pe = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Ae = ye.e.map((ee => {
        let {
          group: ie,
          actions: He
        } = ee;
        const ye = He.map((ee => ({
          kind: "action",
          action: ee
        })));
        return {
          titleKey: De[ie],
          rows: "gameplay" === ie ? [...Pe, ...ye] : ye
        }
      })),
      Ye = be.W.filter((ee => "Home" !== ee)),
      Ve = 1e4;
    class ae {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = ee, this.openButton = ie, this.accepts = He, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(ee, ie) {
        var He;
        this.updateIgnored(ee, ie);
        const ye = ie - (null !== (He = this.startMs) && void 0 !== He ? He : ie) >= 250;
        for (const be of Ye)
          if (be !== this.cancelButton && ye && !this.ignoredUntilMs.has(be) && ee.wasPressed(be) && this.accepts(be)) return {
            kind: "bind",
            button: be
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (ee.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = ie
        }
        return null === this.cancelDownAtMs ? null : ee.isHeld(this.cancelButton) && ie - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : ee.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(ee) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (ee - this.cancelDownAtMs) / 700)
      }
      updateIgnored(ee, ie) {
        if (null === this.startMs) {
          this.startMs = ie;
          for (const ie of Ye) ee.isDown(ie) && this.ignoredUntilMs.set(ie, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, ie + 250)
        }
        for (const [He, ye] of this.ignoredUntilMs) {
          const be = ee.isDown(He);
          ye === 1 / 0 ? be || He !== this.openButton ? be || this.ignoredUntilMs.delete(He) : this.ignoredUntilMs.set(He, ie + 250) : ie >= ye ? this.ignoredUntilMs.delete(He) : be && this.ignoredUntilMs.set(He, 1 / 0)
        }
      }
    }
    const ce = 6e3;
    class xe {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(ee, ie) {
        let {
          pressed: He,
          lJ: ye
        } = ee;
        if (He) {
          const ee = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== ee && ie - ee < 1500 ? [...this.pressesAtMs, ie] : [ie], this.pressesAtMs.length >= 3) return 1
        }
        return ye ? (this.downAtMs ??= ie, Math.min(1, (ie - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  5544: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => Ke
    });
    var ye = He(59);
    const be = new WeakMap,
      Me = ee => {
        var ie;
        const He = ee.closest("[data-pad-slider]");
        return He && null !== (ie = be.get(He)) && void 0 !== ie ? ie : null
      },
      Ke = (ee, ie) => {
        const He = (0, ye.useRef)(ie);
        He.current = ie, (0, ye.useEffect)((() => {
          if (ee.current) return ((ee, ie) => (be.set(ee, ie), () => {
            be.get(ee) === ie && be.delete(ee)
          }))(ee.current, {
            adjust: ee => {
              He.current.adjust(ee)
            },
            setFraction: ee => {
              He.current.setFraction(ee)
            },
            endDrag: () => {
              He.current.endDrag()
            }
          })
        }), [ee])
      }
  },
  9539: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      f: () => Ke,
      i: () => Me,
      m: () => ye,
      o: () => Ue,
      q: () => Je,
      u: () => oe
    });
    const ye = "controllerActionWheelOpen",
      be = "controllerActionWheelAim",
      Me = "controllerActionWheelCommit",
      Ke = "controllerActionWheelClose",
      Ue = "controllerActionWheelPick";
    let Fe = !1;
    const Je = () => Fe,
      oe = ee => {
        Fe = ee
      }
  },
  9531: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = 0;
    const be = () => {
        ye++
      },
      Me = () => ye
  },
  9443: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => be,
      k: () => Ke,
      m: () => Me,
      o: () => ye,
      r: () => Je
    });
    const ye = "controllerQuickChatWheelOpen",
      be = "controllerQuickChatWheelAim",
      Me = "controllerQuickChatWheelCommit",
      Ke = "controllerQuickChatWheelClose";
    let Ue = !1;
    const Fe = () => Ue,
      Je = ee => {
        Ue = ee
      }
  },
  9453: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      f: () => be
    });
    var ye = He(27);
    const be = "localBlockBroken";

    function Me() {
      return {
        onPlayerChangeBlock(ee, ie, He, Me, Ke, Ue) {
          "Air" === Ue && ye.h.yR(be)
        }
      }
    }
  },
  9609: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Fe
    });
    var ye = He(18),
      be = He(1305),
      Me = He(97);
    const Ke = {
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

    function Ue() {
      return (0, Me.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Fe = new class {
      constructor(ee) {
        this.deps = ee, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(ee, ie) {
        var He;
        if (!this.deps.enabled()) return;
        const ye = Ke[ee],
          be = null !== ie && void 0 !== ie ? ie : ye.pattern;
        if (null === be) return void console.warn("No vibration pattern for", ee);
        const Me = this.deps.now();
        Me - this.lastAnyAt < 40 && ye.priority < this.playingPriority || Me - (null !== (He = this.lastAt.get(ee)) && void 0 !== He ? He : -1 / 0) < ye.minGapMs || Me < this.playingUntil && ye.priority < this.playingPriority || (this.lastAt.set(ee, Me), this.lastAnyAt = Me, this.playingUntil = Me + be.reduce(((ee, ie) => ee + ie), 0), this.playingPriority = ye.priority, this.deps.vibrate(be))
      }
    }({
      vibrate: ee => {
        navigator.vibrate([...ee])
      },
      now: () => performance.now(),
      enabled: () => Ue() && ye.e.get("isTouchScreen") && ye.e.get("clientEscMenuOptions").vibration && !(0, be.g)()
    })
  },
  9451: (ee, ie, He) => {
    He.d(ie, {
      d: () => be
    });
    var ye = He(1198);

    function be(ee, ie) {
      var He, be;
      try {
        const He = (0, ye.c)();
        if ("function" === typeof He) {
          const ye = new He(ee, ie);
          if (ye.type === ee) return ye
        }
      } catch {}
      const Me = document.createEvent("Event");
      return Me.initEvent(ee, null !== (He = null === ie || void 0 === ie ? void 0 : ie.bubbles) && void 0 !== He && He, null !== (be = null === ie || void 0 === ie ? void 0 : ie.cancelable) && void 0 !== be && be), Me
    }
  },
  9505: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(9509),
      be = He(610),
      Me = He(125);

    function Ke(ee) {
      var ie, He;
      if ((0, be.P)(ee)) return !0;
      const Ke = null !== (ie = null === (He = Me.siteUsedData[Me.siteUsed]) || void 0 === He ? void 0 : He.adConfig.showRewardedAds) && void 0 !== ie && ie;
      for (const be in ee) {
        const ie = ee[be];
        if (null !== ie && void 0 !== ie && ie.items)
          for (const ee in ie.items)
            if ((0, ye.i)(ie.items[ee], Ke)) return !1
      }
      return !0
    }
  },
  9509: (ee, ie, He) => {
    function ye(ee, ie) {
      return !ee.hidden && (ie || !ee.isRewardedAd)
    }

    function be(ee) {
      return "object" === typeof ee ? ee.option : ee
    }

    function Me(ee, ie) {
      var He;
      if ("dropdown" === (null === (He = ee.userInput) || void 0 === He ? void 0 : He.type) && "object" === typeof ee.userInput.dropdownOptions[0]) {
        for (const He of ee.userInput.dropdownOptions)
          if (be(He) === ie) return "object" === typeof He ? He.cost : ee.cost;
        console.error("Didn't find matching option for dropdown item. Item:", ee, "input:", ie)
      }
      return ee.cost
    }

    function Ke(ee, ie, He) {
      var ye;
      const be = null !== (ye = He.excludedPlayers) && void 0 !== ye ? ye : [ie];
      return ee.filter((ee => !be.includes(ee)))
    }
    He.d(ie, {
      d: () => Me,
      f: () => be,
      h: () => Ke,
      i: () => ye
    })
  },
  9548: () => {},
  8982: (ee, ie, He) => {
    var ye = {
      "./nintendo/A.svg": 8987,
      "./nintendo/B.svg": 8996,
      "./nintendo/Down.svg": 8998,
      "./nintendo/Home.svg": 9004,
      "./nintendo/LB.svg": 9011,
      "./nintendo/LS.svg": 9014,
      "./nintendo/LT.svg": 9016,
      "./nintendo/Left.svg": 9020,
      "./nintendo/LeftStick.svg": 9024,
      "./nintendo/Menu.svg": 9033,
      "./nintendo/RB.svg": 9037,
      "./nintendo/RS.svg": 9042,
      "./nintendo/RT.svg": 9049,
      "./nintendo/Right.svg": 9058,
      "./nintendo/RightStick.svg": 9062,
      "./nintendo/Up.svg": 9069,
      "./nintendo/View.svg": 9072,
      "./nintendo/X.svg": 9074,
      "./nintendo/Y.svg": 9083,
      "./playstation/A.svg": 9085,
      "./playstation/B.svg": 9093,
      "./playstation/Down.svg": 9098,
      "./playstation/Home.svg": 9106,
      "./playstation/LB.svg": 9114,
      "./playstation/LS.svg": 9117,
      "./playstation/LT.svg": 9124,
      "./playstation/Left.svg": 9126,
      "./playstation/LeftStick.svg": 9130,
      "./playstation/Menu.svg": 9134,
      "./playstation/RB.svg": 9139,
      "./playstation/RS.svg": 9146,
      "./playstation/RT.svg": 9152,
      "./playstation/Right.svg": 9161,
      "./playstation/RightStick.svg": 9165,
      "./playstation/Up.svg": 9173,
      "./playstation/View.svg": 9178,
      "./playstation/X.svg": 9183,
      "./playstation/Y.svg": 9186,
      "./steamdeck/A.svg": 9188,
      "./steamdeck/B.svg": 9195,
      "./steamdeck/Down.svg": 9204,
      "./steamdeck/Home.svg": 9207,
      "./steamdeck/LB.svg": 9216,
      "./steamdeck/LS.svg": 9219,
      "./steamdeck/LT.svg": 9221,
      "./steamdeck/Left.svg": 9226,
      "./steamdeck/LeftStick.svg": 9230,
      "./steamdeck/Menu.svg": 9233,
      "./steamdeck/RB.svg": 9242,
      "./steamdeck/RS.svg": 9249,
      "./steamdeck/RT.svg": 9251,
      "./steamdeck/Right.svg": 9253,
      "./steamdeck/RightStick.svg": 9256,
      "./steamdeck/Up.svg": 9263,
      "./steamdeck/View.svg": 9267,
      "./steamdeck/X.svg": 9269,
      "./steamdeck/Y.svg": 9278,
      "./xbox/A.svg": 9286,
      "./xbox/B.svg": 9292,
      "./xbox/Down.svg": 9297,
      "./xbox/Home.svg": 9299,
      "./xbox/LB.svg": 9305,
      "./xbox/LS.svg": 9309,
      "./xbox/LT.svg": 9315,
      "./xbox/Left.svg": 9322,
      "./xbox/LeftStick.svg": 9329,
      "./xbox/Menu.svg": 9331,
      "./xbox/RB.svg": 9335,
      "./xbox/RS.svg": 9339,
      "./xbox/RT.svg": 9343,
      "./xbox/Right.svg": 9345,
      "./xbox/RightStick.svg": 9352,
      "./xbox/Up.svg": 9360,
      "./xbox/View.svg": 9365,
      "./xbox/X.svg": 9374,
      "./xbox/Y.svg": 9383
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 8982
  },
  8987: (ee, ie, He) => {
    ee.exports = He.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8996: (ee, ie, He) => {
    ee.exports = He.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8998: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9004: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9011: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9014: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9016: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9020: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9024: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9033: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9037: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9042: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9049: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9058: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9062: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9069: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9072: (ee, ie, He) => {
    ee.exports = He.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9074: (ee, ie, He) => {
    ee.exports = He.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9083: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9085: (ee, ie, He) => {
    ee.exports = He.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9093: (ee, ie, He) => {
    ee.exports = He.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9098: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9106: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9114: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9117: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9124: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9126: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9130: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9134: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9139: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9146: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9152: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9161: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9165: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9173: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9178: (ee, ie, He) => {
    ee.exports = He.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9183: (ee, ie, He) => {
    ee.exports = He.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9186: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9188: (ee, ie, He) => {
    ee.exports = He.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9195: (ee, ie, He) => {
    ee.exports = He.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9207: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9216: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9219: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9221: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9226: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9230: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9233: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9242: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9249: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9251: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9253: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9256: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9263: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9267: (ee, ie, He) => {
    ee.exports = He.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9269: (ee, ie, He) => {
    ee.exports = He.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9278: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9286: (ee, ie, He) => {
    ee.exports = He.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9292: (ee, ie, He) => {
    ee.exports = He.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9297: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9299: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9305: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9309: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9315: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9322: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9329: (ee, ie, He) => {
    ee.exports = He.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9331: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9335: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9339: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9343: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9345: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9352: (ee, ie, He) => {
    ee.exports = He.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9365: (ee, ie, He) => {
    ee.exports = He.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9374: (ee, ie, He) => {
    ee.exports = He.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9383: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
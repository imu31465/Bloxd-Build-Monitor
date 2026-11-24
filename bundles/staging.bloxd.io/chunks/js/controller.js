export const id = 28;
export const ids = [28];
export const modules = {
  8726: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => em,
      g: () => Zm,
      k: () => km
    });
    var hm = fm(59),
      Am = fm(4481),
      am = fm(1160),
      xm = fm(1449),
      wm = fm(31),
      Dm = fm(3427),
      im = fm(2216),
      Rm = fm(1247),
      pm = fm(2543),
      Em = fm(1905),
      om = fm(1946),
      Om = fm(1208),
      Ym = fm(23),
      qm = fm(1635),
      jm = fm(1080),
      Vm = fm.n(jm),
      Im = fm(8730),
      Km = fm(8739),
      Qm = fm(8745),
      nm = fm(8652),
      Jm = fm(8752),
      cm = (fm(8761), fm(1135));
    let zm = null;

    function Zm() {
      return null !== zm
    }

    function km() {
      return "pad" === zm
    }

    function bm() {
      return "inGame" === Ym.c.get("gameState") && !(0, qm.n)()
    }

    function Sm(mm) {
      return (0, Km.u)(mm, Rm.k, Km.h, Km.k, Km.n)
    }
    const em = (0, hm.memo)((function() {
      const {
        t: mm
      } = (0, Om.A)(), {
        userContext: Tm
      } = (0, am.e)(), [fm, Ym] = (0, hm.useState)(null), [jm, Zm] = (0, hm.useState)(null), km = (0, hm.useRef)(null), em = (0, hm.useCallback)((mm => {
        km.current = mm, Zm(mm)
      }), []), Nm = (0, hm.useRef)(0), Gm = (0, hm.useRef)(null), Xm = (0, hm.useRef)({
        x: 0,
        y: 0
      }), [Pm, Hm] = (0, hm.useState)(0), ym = (0, hm.useMemo)((() => function(mm) {
        const Tm = [];
        for (let hm = 0; hm < Rm.k; hm++) {
          var fm;
          Tm.push(null !== (fm = mm[hm]) && void 0 !== fm ? fm : null)
        }
        return Tm
      }((0, pm.h)(Tm.getPlayerCosmetics().emote))), [Tm, Pm]);
      (0, om.e)("cosmeticsUpdated", (mm => {
        mm.some((mm => mm.local && "emote" === mm.Sh)) && Hm((mm => mm + 1))
      }));
      const Cm = (0, hm.useRef)(!1),
        rm = (0, hm.useCallback)((function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === mm && (0, Qm.f)(), Cm.current = Tm, Xm.current = {
            x: 0,
            y: 0
          }, em(null), Ym(mm)
        }), [em]),
        sm = (0, hm.useCallback)((() => {
          Ym(null), em(null), Xm.current = {
            x: 0,
            y: 0
          }
        }), [em]),
        lm = (0, hm.useCallback)((mm => {
          if (Date.now() < Nm.current) return;
          const Tm = (0, im.i)(mm),
            fm = !!Tm.holdUntilMove,
            hm = fm ? 600 : Math.ceil(1e3 * Tm.animation.animation_length / im.c) + 200;
          Nm.current = Date.now() + hm, Gm.current = mm, Em.gameBridge.send("playEmote", mm), Em.gameBridge.send("applyTemporaryThirdPerson", fm ? {} : {
            durationMs: hm
          })
        }), []);
      (0, xm.g)("requestToggleEmoteWheel", (() => {
        null === fm ? bm() && rm("click") : sm()
      })), (0, xm.g)("requestEmoteWheelHoldOpen", (() => {
        null === fm && bm() && rm((0, Im.d)() ? "hold" : "click")
      })), (0, xm.g)("requestEmoteWheelPadOpen", (mm => {
        null !== fm || !bm() || (0, nm.c)() || (0, Jm.s)() || rm("pad", mm)
      })), (0, xm.g)("requestEmoteRepeatLast", (() => {
        if (null !== fm || !bm() || (0, nm.c)() || (0, Jm.s)()) return;
        const mm = Gm.current;
        null !== mm && ym.includes(mm) ? lm(mm) : rm("pad", !0)
      }));
      const Mm = () => {
        const mm = km.current,
          Tm = null !== mm ? ym[mm] : null;
        null !== Tm && "pad" === fm && Date.now() < Nm.current || (sm(), null !== Tm && lm(Tm))
      };
      (0, xm.g)("emoteWheelPadAim", (mm => {
        if ("pad" !== fm) return;
        const Tm = (0, Km.E)(mm, Rm.k, km.current);
        em(null !== Tm && null !== ym[Tm] ? Tm : null)
      })), (0, xm.g)("requestEmoteWheelPadCommit", (mm => {
        "pad" !== fm || mm && Cm.current || Mm()
      })), (0, xm.g)("appManagerUpdated|activeInputDevice", (mm => {
        null !== fm && "pad" === fm !== ("gamepad" === mm) && sm()
      })), (0, hm.useLayoutEffect)((() => (zm = fm, (0, Dm.u)("emoteWheel", "pad" === fm), wm.j.gp(Dm.o), () => {
        zm = null, (0, Dm.u)("emoteWheel", !1), wm.j.gp(Dm.o)
      })), [fm]), (0, xm.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === fm && Mm()
      })), (0, xm.g)("requestEmoteWheelClose", (() => {
        null !== fm && sm()
      })), (0, xm.g)("appManagerUpdated|gameState", (mm => {
        "inGame" !== mm && sm()
      }));
      const um = () => {
        (0, qm.n)() && sm()
      };
      if ((0, xm.g)("appManagerUpdated|openEverythingMenuName", um), (0, xm.g)("appManagerUpdated|openInGameMenuName", um), (0, xm.g)("pointerLockUpdate", (mm => {
          mm || "hold" !== fm || sm()
        })), (0, hm.useEffect)((() => {
          if (null === fm) return;
          const mm = mm => {
            "Escape" === mm.key && (mm.stopImmediatePropagation(), mm.preventDefault(), sm())
          };
          return document.addEventListener("keydown", mm, !0), () => {
            document.removeEventListener("keydown", mm, !0)
          }
        }), [fm, sm]), (0, Am.d)(!0, "click" === fm, "EmoteWheelOverlay"), (0, hm.useEffect)((() => {
          if ("hold" === fm) return Em.gameBridge.send("holdEmoteWheel", !0), () => {
            Em.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [fm]), (0, hm.useEffect)((() => {
          if ("hold" !== fm) return;
          const mm = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Tm = Km.r * mm,
            hm = Km.q * mm,
            Am = mm => {
              let fm = Xm.current.x + mm.movementX,
                Am = Xm.current.y + mm.movementY;
              const am = Math.hypot(fm, Am);
              if (am > Tm) {
                const mm = Tm / am;
                fm *= mm, Am *= mm
              }
              Xm.current = {
                x: fm,
                y: Am
              }, em(function(mm, Tm, fm, hm) {
                if (Math.hypot(mm, Tm) < fm) return null;
                const Am = (0, Km.w)(mm, Tm, Rm.k);
                return null === hm[Am] ? null : Am
              }(fm, Am, hm, ym))
            };
          return document.addEventListener("mousemove", Am), () => {
            document.removeEventListener("mousemove", Am)
          }
        }), [fm, ym, em]), null === fm) return null;
      const Bm = "hold" === fm || "pad" === fm,
        Lm = null !== jm ? ym[jm] : null,
        tm = null !== Lm ? (0, im.i)(Lm).displayName : mm("emotes:pickEmote");
      return (0, cm.jsx)("div", {
        className: Vm()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === fm
        }),
        onMouseDown: mm => {
          mm.target === mm.currentTarget && sm()
        },
        children: (0, cm.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Km.r + "rem",
            height: 2 * Km.r + "rem"
          },
          children: [(0, cm.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Km.o} ${Km.o}`,
            children: [ym.map(((Tm, fm) => {
              const hm = null !== Tm,
                Am = Bm && fm === jm;
              return (0, cm.jsx)("path", {
                d: Sm(fm),
                className: Vm()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Am,
                  EmoteWheelWedgeDisabled: !hm
                }),
                onClick: mm => {
                  mm.stopPropagation(), null !== Tm && (mm => {
                    sm(), lm(mm)
                  })(Tm)
                },
                "aria-label": null !== Tm ? (0, im.i)(Tm).displayName : mm("emotes:emptySlot")
              }, fm)
            })), (0, cm.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Km.h,
              cy: Km.h,
              r: Km.n
            }), (0, cm.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Km.h,
              cy: Km.h,
              r: Km.k
            }), Bm && null !== jm && (0, cm.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Sm(jm)
            })]
          }), ym.map(((mm, Tm) => {
            const fm = null !== mm,
              hm = Bm && Tm === jm,
              Am = (0, Km.x)(Tm, Rm.k),
              am = Km.d * Math.cos(Am),
              xm = Km.d * Math.sin(Am);
            return (0, cm.jsx)("div", {
              className: Vm()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: hm,
                EmoteWheelSlotIconDisabled: !fm
              }),
              style: {
                left: `calc(50% + ${am}rem)`,
                top: `calc(50% + ${xm}rem)`,
                backgroundImage: fm ? `url(/textures/charSkins/previews/emote_${mm}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Tm)
          })), (0, cm.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: tm
          })]
        })
      })
    }))
  },
  4954: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Om,
      i: () => Im,
      m: () => Ym,
      o: () => Vm
    });
    var hm = fm(59),
      Am = fm(4957),
      am = fm(4304),
      xm = fm(1362),
      wm = fm(4970),
      Dm = fm(1080),
      im = fm.n(Dm),
      Rm = fm(1354),
      pm = fm(1713),
      Em = fm(4974),
      om = fm(1135);

    function Om(mm) {
      let {
        label: Tm,
        onClick: fm,
        checked: hm,
        circleInfoText: Am,
        className: wm,
        disabled: Dm,
        note: Rm
      } = mm;
      return (0, om.jsxs)("div", {
        "aria-disabled": Dm || void 0,
        "data-pad-focusable": !0,
        className: im()("SettingBox CheckboxContainer", {
          [wm]: wm,
          SettingBoxDisabled: Dm
        }),
        onClick: () => {
          Dm || fm(!hm)
        },
        children: [(0, om.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, om.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, om.jsx)(am.b, {
              className: "SettingsCheckbox",
              checked: hm,
              disabled: Dm,
              onChange: () => {}
            })
          }), (0, om.jsxs)("div", {
            className: "CheckboxText",
            children: [Tm, Am && (0, om.jsx)("span", {
              onClick: mm => mm.stopPropagation(),
              children: (0, om.jsx)(xm.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Am
              })
            })]
          })]
        }), Rm && (0, om.jsx)("div", {
          className: "SettingNote",
          children: Rm
        })]
      })
    }

    function Ym(mm) {
      let {
        name: Tm,
        onChange: fm,
        min: Am,
        max: am,
        step: wm,
        initValue: Dm,
        circleInfoText: Rm,
        format: pm,
        className: Em,
        padStep: Om,
        disabled: Ym = !1,
        selectableMax: qm,
        cappedNote: Vm,
        onChangeComplete: Im
      } = mm;
      const [Km, Qm] = (0, hm.useState)(Dm), nm = (0, hm.useRef)(Dm);
      (0, hm.useEffect)((() => {
        nm.current = Dm, Qm(Dm)
      }), [Dm]);
      const Jm = void 0 !== qm && qm < am,
        cm = Jm ? {
          "--slider-selectable": (qm - Am) / (am - Am)
        } : void 0;
      return (0, om.jsxs)("div", {
        className: im()("SettingBox SettingsSliderDiv", {
          [Em]: Em,
          SettingBoxDisabled: Ym,
          SliderCapped: Jm
        }),
        style: cm,
        children: [(0, om.jsxs)("div", {
          className: "SliderText",
          children: [`${Tm}: ${pm?pm(Km):Km}`, Rm && (0, om.jsx)(xm.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Rm
          })]
        }), (0, om.jsx)("div", {
          className: "SliderDiv",
          children: (0, om.jsx)(jm, {
            value: Km,
            min: Am,
            max: am,
            step: wm,
            onChange: mm => {
              if (Jm && mm >= qm && Km === qm) return;
              const Tm = Jm ? Math.min(mm, qm) : mm;
              nm.current = Tm, Qm(Tm), fm(Tm)
            },
            onChangeComplete: Im && (() => {
              Im(nm.current)
            }),
            format: pm,
            padStep: Om,
            disabled: Ym
          })
        }), Jm && Vm && (0, om.jsx)("div", {
          className: "SettingNote",
          children: Vm
        })]
      })
    }
    const qm = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function jm(mm) {
      var Tm;
      let {
        value: fm,
        min: am,
        max: xm,
        step: wm,
        onChange: Dm,
        orientation: im,
        reverse: Rm,
        setIsChanging: pm,
        tooltip: Om,
        labels: Ym,
        handleLabel: jm,
        format: Vm,
        onChangeStart: Im,
        onChangeComplete: Km,
        padStep: Qm,
        disabled: nm = !1
      } = mm;
      const Jm = (0, hm.useRef)(null),
        cm = (0, hm.useRef)(null);
      (0, hm.useLayoutEffect)((() => {
        var mm, Tm, fm;
        const hm = null !== (mm = null === (Tm = Jm.current) || void 0 === Tm ? void 0 : Tm.querySelector(".rangeslider")) && void 0 !== mm ? mm : null;
        null === hm || void 0 === hm || hm.setAttribute("data-pad-slider", ""), null === hm || void 0 === hm || hm.setAttribute("data-pad-focusable", ""), null === hm || void 0 === hm || null === (fm = hm.querySelector(".rangeslider__handle")) || void 0 === fm || fm.setAttribute("data-pad-slider-handle", ""), cm.current = hm
      }), []), (0, hm.useLayoutEffect)((() => {
        var mm, Tm;
        nm ? null === (mm = cm.current) || void 0 === mm || mm.setAttribute("aria-disabled", "true") : null === (Tm = cm.current) || void 0 === Tm || Tm.removeAttribute("aria-disabled")
      }), [nm]);
      const zm = (null !== (Tm = String(wm).split(".")[1]) && void 0 !== Tm ? Tm : "").length,
        Zm = mm => {
          const Tm = Number((Math.round((mm - am) / wm) * wm + am).toFixed(zm));
          return Math.min(xm, Math.max(am, Tm))
        },
        km = (0, hm.useRef)(Km);
      km.current = Km, (0, hm.useEffect)((() => {
        const mm = Jm.current;
        if (!mm) return;
        const Tm = mm => {
          var Tm;
          qm.has(mm.key) && (null === (Tm = km.current) || void 0 === Tm || Tm.call(km))
        };
        return mm.addEventListener("keyup", Tm), () => {
          mm.removeEventListener("keyup", Tm)
        }
      }), []);
      const bm = (0, hm.useRef)(!1);
      return (0, Em.d)(cm, {
        adjust: mm => {
          if (nm) return;
          const Tm = null !== Qm && void 0 !== Qm ? Qm : Math.max(wm, Math.round((xm - am) / 20 / wm) * wm),
            hm = Zm(fm + mm * Tm * (Rm ? -1 : 1));
          hm !== fm && (null === Im || void 0 === Im || Im(), Dm(hm), null === Km || void 0 === Km || Km())
        },
        setFraction: mm => {
          if (nm) return;
          const Tm = Zm(am + (Rm ? 1 - mm : mm) * (xm - am));
          Tm !== fm && (bm.current || (bm.current = !0, null === Im || void 0 === Im || Im()), Dm(Tm))
        },
        endDrag: () => {
          bm.current && (bm.current = !1, null === Km || void 0 === Km || Km())
        }
      }), (0, om.jsx)("div", {
        ref: Jm,
        style: {
          display: "contents"
        },
        children: (0, om.jsx)(Am.d, {
          value: fm,
          min: am,
          max: xm,
          step: wm,
          onChange: Dm,
          orientation: im,
          reverse: Rm,
          tooltip: Om,
          labels: Ym,
          handleLabel: jm,
          format: Vm,
          onChangeStart: () => {
            null === Im || void 0 === Im || Im(), null === pm || void 0 === pm || pm(!0)
          },
          onChangeComplete: () => {
            null === pm || void 0 === pm || pm(!1), null === Km || void 0 === Km || Km()
          }
        })
      })
    }
    async function Vm() {
      const mm = Rm.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await mm.getResult() && (0, pm.reloadBloxd)()
    }

    function Im(mm) {
      let {
        label: Tm,
        options: fm,
        value: hm,
        onChange: Am,
        circleInfoText: am
      } = mm;
      return (0, om.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, om.jsxs)("div", {
          className: "SliderText",
          children: [Tm, am && (0, om.jsx)(xm.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: am
          })]
        }), (0, om.jsx)(wm.b, {
          ariaLabel: Tm,
          options: fm,
          value: hm,
          onChange: Am
        })]
      })
    }
  },
  4970: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1135);

    function xm(mm) {
      let {
        options: Tm,
        value: fm,
        onChange: hm,
        ariaLabel: xm,
        className: wm,
        reselectable: Dm = !1,
        keepsFocus: im = !1,
        padTabs: Rm
      } = mm;
      const pm = void 0 !== Rm;
      return (0, am.jsx)("div", {
        className: Am()("SegmentedToggle", wm),
        role: "group",
        "aria-label": xm,
        "data-pad-tabs": Rm,
        children: Tm.map((mm => {
          const Tm = mm.value === fm;
          return (0, am.jsx)("button", {
            type: "button",
            "aria-pressed": Tm,
            "data-pad-tab": pm || void 0,
            "data-pad-selected": pm && Tm ? "true" : void 0,
            "data-pad-default-focus": pm && Tm || void 0,
            "aria-label": mm.ariaLabel,
            title: mm.ariaLabel,
            className: Am()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Tm
            }),
            onMouseDown: im ? mm => {
              mm.preventDefault()
            } : void 0,
            onClick: () => {
              Tm && !Dm || hm(mm.value)
            },
            children: mm.label
          }, mm.value)
        }))
      })
    }
  },
  8712: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => pm,
      g: () => Om,
      k: () => Ym,
      l: () => om,
      n: () => Em
    });
    var hm = fm(59),
      Am = fm(8721),
      am = fm(31),
      xm = fm(1905),
      wm = fm(37),
      Dm = fm(1268),
      im = fm(1928);
    const Rm = 50;
    const pm = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = mm => {
          if (0 === this.listeners.size) {
            var Tm, fm;
            this.state = {
              ...this.state,
              channel: null !== (Tm = null === (fm = im.b.get("chatChannels")) || void 0 === fm ? void 0 : fm[0]) && void 0 !== Tm ? Tm : null
            };
            const mm = am.j.subscribe("reportPlayer", (mm => {
              let {
                playerEId: Tm
              } = mm;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Tm]
              })
            }));
            this.stopListening = [xm.gameBridge.subscribe("chatReceived", (mm => {
              let {
                serverChatMsgId: Tm,
                content: fm,
                author: hm
              } = mm;
              this.addMessage(Tm, fm, hm)
            })), () => {
              am.j.unsubscribe(mm)
            }, im.b.subscribe("chatChannels", (mm => {
              var Tm;
              this.setState({
                ...this.state,
                channel: null !== (Tm = null === mm || void 0 === mm ? void 0 : mm[0]) && void 0 !== Tm ? Tm : null
              })
            }))]
          }
          return this.listeners.add(mm), () => {
            if (this.listeners.delete(mm), 0 === this.listeners.size) {
              for (const mm of this.stopListening) mm();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hm = {
          serverChatMsgId: mm,
          content: Tm,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: fm
        };
        this.setState({
          ...this.state,
          messages: [hm, ...this.state.messages].slice(0, Am.e)
        })
      }
      selectNextChannel() {
        const mm = im.b.get("chatChannels");
        if (mm) {
          const Tm = mm.findIndex((mm => {
            var Tm;
            return mm.channelName === (null === (Tm = this.state.channel) || void 0 === Tm ? void 0 : Tm.channelName)
          }));
          this.setState({
            ...this.state,
            channel: mm[(Tm + 1) % mm.length]
          })
        }
      }
      setState(mm) {
        this.state = mm;
        for (const Tm of this.listeners) Tm()
      }
    };

    function Em() {
      const [mm, Tm] = (0, hm.useState)(pm.getState);
      return (0, hm.useEffect)((() => {
        const mm = pm.subscribe((() => {
          Tm(pm.getState())
        }));
        return Tm(pm.getState()), mm
      }), []), mm
    }

    function om(mm) {
      var Tm, fm;
      if (mm.startsWith("/report")) {
        var hm;
        const Tm = null !== (hm = mm.replace("/report", "").trim().split(" ")[0]) && void 0 !== hm ? hm : "";
        if ("" === Tm) return void pm.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const fm = xm.gameBridge.latest("players"),
          Am = xm.gameBridge.latest("hiddenPlayerNames"),
          wm = mm => {
            var hm, am;
            const xm = null !== (hm = null === (am = fm.byId[mm]) || void 0 === am ? void 0 : am.name) && void 0 !== hm ? hm : null;
            return null !== xm && (xm === Tm || (0, Dm.c)(xm, Am) === Tm)
          };
        if (null !== fm.localId && wm(fm.localId)) return void pm.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const mm of fm.ids)
          if (wm(mm)) return am.j.gp("OpenReportMenu", {
            playerEId: mm,
            playerName: fm.byId[mm].name,
            Hi: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        pm.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      xm.gameBridge.send("sendChatMessage", {
          Hi: mm,
          channelName: null !== (Tm = null === (fm = pm.getState().channel) || void 0 === fm ? void 0 : fm.channelName) && void 0 !== Tm ? Tm : null
        }),
        function(mm) {
          var Tm;
          const fm = null !== (Tm = wm.g.getItem("recentlySentChatMsgs")) && void 0 !== Tm ? Tm : [];
          fm.push(mm), fm.length > Rm && fm.shift();
          wm.g.setItem("recentlySentChatMsgs", fm)
        }(mm)
    }

    function Om() {
      var mm;
      return null !== (mm = wm.g.getItem("recentlySentChatMsgs")) && void 0 !== mm ? mm : []
    }

    function Ym(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const hm = null !== (Tm = wm.g.getItem("recentlySentChatMsgs")) && void 0 !== Tm ? Tm : [],
        Am = hm.length + 1,
        am = fm ? (mm % Am + Am) % Am : Math.min(hm.length, Math.max(0, mm));
      return {
        stepsBack: am,
        text: 0 === am ? "" : hm[hm.length - am]
      }
    }
  },
  8677: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      d: () => am
    });
    var hm = fm(1971);
    const Am = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      am = mm => "string" === typeof mm.icon && "" !== mm.icon && "string" === typeof mm.keycode && Am.test(mm.keycode),
      xm = mm => "Space" === mm ? "_" : hm.g[mm]
  },
  8730: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(23);

    function Am() {
      return !hm.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8739: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => Em,
      E: () => om,
      d: () => am,
      h: () => wm,
      k: () => im,
      n: () => Dm,
      o: () => xm,
      q: () => Am,
      r: () => hm,
      u: () => Om,
      w: () => pm,
      x: () => Rm
    });
    const hm = 14,
      Am = 6,
      am = (hm + Am) / 2,
      xm = 200,
      wm = xm / 2,
      Dm = xm / 2 - 1,
      im = Am / hm * (xm / 2),
      Rm = (mm, Tm) => -Math.PI / 2 + 2 * mm * Math.PI / Tm,
      pm = (mm, Tm, fm) => {
        const hm = 2 * Math.PI / fm;
        return (Math.round((Math.atan2(Tm, mm) + Math.PI / 2) / hm) % fm + fm) % fm
      },
      Em = .5,
      om = (mm, Tm, fm) => Math.hypot(mm.x, mm.y) < Em ? fm : pm(mm.x, mm.y, Tm),
      Om = (mm, Tm, fm, hm, Am) => {
        const am = Math.PI / Tm,
          xm = Rm(mm, Tm),
          wm = xm - am,
          Dm = xm + am,
          im = (mm, Tm) => `${fm+mm*Math.cos(Tm)} ${fm+mm*Math.sin(Tm)}`;
        return [`M ${im(hm,wm)}`, `L ${im(Am,wm)}`, `A ${Am} ${Am} 0 0 1 ${im(Am,Dm)}`, `L ${im(hm,Dm)}`, `A ${hm} ${hm} 0 0 0 ${im(hm,wm)}`, "Z"].join(" ")
      }
  },
  8780: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm = fm(59),
      Am = fm(8702),
      am = fm(2391);

    function xm() {
      const mm = (0, am.g)("shopInfo"),
        [, Tm] = (0, hm.useReducer)((mm => mm + 1), 0);
      return (0, am.c)("shopInfo", Tm), !(0, Am.e)(mm)
    }
  },
  8086: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      h: () => am,
      j: () => Em,
      k: () => pm,
      m: () => im,
      o: () => wm,
      s: () => hm,
      t: () => om,
      u: () => Om
    });
    const hm = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Am = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: hm
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      am = {
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
      xm = ["pickBlock", "perspective"],
      wm = mm => xm.includes(mm) ? xm : [mm],
      Dm = Object.fromEntries(Am.flatMap((mm => {
        let {
          group: Tm,
          actions: fm
        } = mm;
        return fm.map((mm => [mm, Tm]))
      }))),
      im = mm => Dm[mm],
      Rm = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      pm = mm => {
        var Tm;
        return [im(mm), ...null !== (Tm = Rm[mm]) && void 0 !== Tm ? Tm : []]
      },
      Em = new Set(["menu", "inventory", "keyboard"]),
      om = {
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
      Om = new Set(["forward", "backward", "left", "right"])
  },
  8080: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => em,
      C: () => cm,
      F: () => Im,
      J: () => Zm,
      K: () => Rm,
      L: () => zm,
      P: () => Sm,
      d: () => Vm,
      g: () => Qm,
      k: () => Em,
      n: () => om,
      q: () => Nm,
      r: () => bm,
      u: () => km,
      y: () => Km
    });
    var hm = fm(8086),
      Am = fm(8088),
      am = fm(8066),
      xm = fm(8107);
    const wm = mm => "pickBlock" === mm ? "perspective" : mm,
      Dm = (mm, Tm) => {
        var fm;
        const Am = wm(Tm);
        return null !== (fm = mm[Am]) && void 0 !== fm ? fm : hm.h[Am]
      },
      im = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((mm => {
        let [Tm, fm] = mm;
        return [
          [Tm, fm],
          [fm, Tm]
        ]
      }))),
      Rm = (mm, Tm) => null !== mm && void 0 !== mm ? mm : "nintendo" === Tm,
      pm = mm => Rm((0, Am.f)().swapConfirmBack, (0, Am.g)()) && im.get(mm) || mm,
      Em = mm => Dm((0, Am.f)().bindings, pm(mm)),
      om = mm => hm.h[pm(mm)],
      Om = Object.keys(hm.h),
      Ym = mm => "gameplay" === (0, hm.m)(mm) ? ["gameplay"] : (0, hm.k)(mm),
      qm = (mm, Tm) => {
        const fm = Ym(Tm);
        return Ym(mm).some((mm => fm.includes(mm)))
      },
      jm = (mm, Tm, fm) => {
        const Am = Dm(mm, Tm),
          xm = new Set((0, hm.o)(Tm)),
          im = [...xm];
        for (let hm = im.pop(); hm; hm = im.pop())
          for (const Tm of Om) {
            const am = Dm(mm, Tm);
            xm.has(Tm) || am !== fm && am !== Am || !qm(hm, Tm) || (xm.add(Tm), im.push(Tm))
          }
        const Rm = {
          ...mm
        };
        for (const pm of xm) {
          const Tm = Dm(mm, pm) === Am ? fm : Am,
            xm = (0, hm.k)(pm).some((mm => hm.j.has(mm)));
          if ((0, am.L)(Tm) && xm) return null;
          Rm[wm(pm)] = Tm
        }
        for (const am of Object.keys(Rm)) Rm[am] === hm.h[am] && delete Rm[am];
        return Rm
      },
      Vm = (mm, Tm) => null !== jm((0, Am.f)().bindings, pm(mm), Tm),
      Im = (mm, Tm) => {
        if (Em(mm) === Tm) return !0;
        const fm = jm((0, Am.f)().bindings, pm(mm), Tm);
        return !!fm && ((0, Am.j)({
          bindings: fm
        }), !0)
      },
      Km = (mm, Tm) => {
        const fm = (0, hm.o)(Tm);
        return Om.filter((Tm => wm(Tm) === Tm && !fm.includes(Tm) && Dm(mm, pm(Tm)) !== Em(Tm)))
      },
      Qm = ["southpaw", "triggersSwapped"],
      nm = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Jm = mm => Object.keys(nm[mm]),
      cm = (mm, Tm) => "southpaw" === mm ? Tm.swapSticks : Jm(mm).every((fm => Dm(Tm.bindings, fm) === nm[mm][fm])),
      zm = (mm, Tm) => {
        const fm = (0, Am.f)();
        let am = fm.bindings;
        for (const Am of Jm(mm)) {
          const fm = Tm ? nm[mm][Am] : hm.h[Am];
          if (am = jm(am, Am, fm), !am) return !1
        }
        return (0, Am.j)({
          swapSticks: "southpaw" === mm ? Tm : fm.swapSticks,
          bindings: am
        }), !0
      },
      Zm = () => {
        (0, Am.j)({
          swapSticks: !1,
          bindings: {}
        })
      },
      km = () => (0, Am.f)().swapSticks ? "RightStick" : "LeftStick",
      bm = () => (0, Am.f)().swapSticks ? "LeftStick" : "RightStick",
      Sm = mm => (0, Am.f)().swapSticks && (0, am.L)(mm),
      em = mm => Sm(mm) ? km() : bm(),
      Nm = mm => {
        if (hm.u.has(mm)) return km();
        const Tm = hm.t[mm];
        return Tm && ("leaderboard" !== Tm || (0, xm.f)(mm, (0, xm.d)())) ? Em(Tm) : null
      }
  },
  8057: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ControllerCategory: () => nw,
      ControllerGlyph: () => zA,
      ControllerRoot: () => nx,
      PadLobbyShortcuts: () => rx,
      PadSneakChip: () => Sx,
      PadTooltip: () => Nx,
      attachPressToContinue: () => tx,
      getBoundButton: () => Rm.k,
      getControllerSettings: () => Em.f,
      getGlyphForNoaAction: () => Rm.q,
      getInventoryCursorState: () => zw,
      getMenuShortcutButton: () => tf,
      getPadGlyphIconName: () => Zx,
      getPadGlyphIconUrl: () => kx,
      getPadRepeatTiming: () => Ym.d,
      handOverPadFocus: () => kw,
      hasActivePad: () => Jw,
      isPadSteppingSlots: () => Zw
    });
    const hm = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Am = fm(1208),
      am = fm(1406),
      xm = fm(8059),
      wm = fm(77),
      Dm = fm(23),
      im = fm(31),
      Rm = fm(8080),
      pm = fm(8110),
      Em = fm(8088),
      om = fm(8118),
      Om = fm(8066),
      Ym = fm(8585),
      qm = fm(8593),
      jm = fm(1668);
    const Vm = (mm, Tm, fm) => Math.max(Tm, Math.min(fm, mm)),
      Im = mm => Math.min(mm.width, mm.height) / 720,
      Km = mm => Math.max(.15, mm);
    class Qm {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(mm, Tm) {
        const fm = Math.hypot(mm.x, mm.y) >= (mm => Math.max(.3, mm))(Tm);
        return this.locked ? (this.locked = fm, !1) : fm
      }
    }
    const nm = (mm, Tm) => {
        const fm = Vm(Tm.dtMs, 0, 100),
          hm = fm / 1e3,
          Am = Im(Tm.viewport) * (Tm.cursorSpeedPercent / 100),
          am = (0, Om.n)(Tm.stick, Km(Tm.moveDeadzone)),
          xm = Math.hypot(am.x, am.y),
          wm = ((mm, Tm, fm) => {
            if (Tm < .3) return 0;
            const hm = fm / 350;
            return Tm >= .85 ? Math.min(1, mm + hm) : Math.max(0, mm - hm)
          })(mm.speedRamp, xm, fm);
        let Dm = mm.x,
          im = mm.y;
        if (xm > 0) {
          const mm = .45 + .55 * wm,
            fm = Tm.context.overInteractive ? .45 : 1,
            Rm = 1400 * (mm => {
              const Tm = Vm(mm, 0, 1);
              return .3 * Tm + .7 * Tm * Tm
            })(xm) * Am * mm * fm;
          Dm += am.x / xm * Rm * hm, im += am.y / xm * Rm * hm
        }
        const Rm = Math.hypot(Tm.dpad.x, Tm.dpad.y);
        if (Rm > 0) {
          const mm = 500 * Am;
          Dm += Tm.dpad.x / Rm * mm * hm, im += Tm.dpad.y / Rm * mm * hm
        }
        const pm = Tm.context.magnetTarget;
        if (pm && xm < .3 && 0 === Rm) {
          const mm = ((mm, Tm, fm, hm, Am) => {
            const am = Tm.x - mm.x,
              xm = Tm.y - mm.y,
              wm = Math.hypot(am, xm);
            if (0 === wm) return {
              x: 0,
              y: 0
            };
            const Dm = Math.min(wm, Am * (1 - hm / .3));
            let im = am / wm * Dm,
              Rm = xm / wm * Dm;
            if (hm > 0) {
              const mm = fm.x / hm,
                Tm = fm.y / hm,
                Am = im * mm + Rm * Tm;
              Am < 0 && (im -= Am * mm, Rm -= Am * Tm)
            }
            return {
              x: im,
              y: Rm
            }
          })({
            x: Dm,
            y: im
          }, pm, am, xm, 120 * Im(Tm.viewport) * hm);
          Dm += mm.x, im += mm.y
        }
        return {
          x: Vm(Dm, 0, Math.max(0, Tm.viewport.width - 1)),
          y: Vm(im, 0, Math.max(0, Tm.viewport.height - 1)),
          speedRamp: wm
        }
      },
      Jm = mm => {
        const Tm = (0, Om.n)(mm, .2);
        return 0 !== Tm.x || 0 !== Tm.y
      },
      cm = (mm, Tm) => {
        const fm = (0, Om.n)(mm, .2),
          hm = Math.hypot(fm.x, fm.y);
        if (0 === hm) return {
          x: 0,
          y: 0
        };
        const Am = hm * hm * 1600,
          am = Vm(Tm, 0, 100) / 1e3;
        return {
          x: fm.x / hm * Am * am,
          y: fm.y / hm * Am * am
        }
      },
      zm = (mm, Tm) => "y" === Tm ? mm.scrollHeight > mm.clientHeight + 1 : mm.scrollWidth > mm.clientWidth + 1,
      Zm = (mm, Tm) => {
        if (!zm(mm, Tm)) return !1;
        const fm = getComputedStyle(mm),
          hm = "y" === Tm ? fm.overflowY : fm.overflowX;
        return "auto" === hm || "scroll" === hm
      },
      km = (mm, Tm, fm) => {
        for (let am = mm instanceof HTMLElement ? mm : null !== (hm = null === mm || void 0 === mm ? void 0 : mm.parentElement) && void 0 !== hm ? hm : null; am; am = am.parentElement) {
          var hm;
          if (Zm(am, Tm)) return am;
          if (am === fm) return null
        }
        if (fm) return null;
        const Am = document.scrollingElement;
        return Am instanceof HTMLElement && zm(Am, Tm) ? Am : null
      },
      bm = new WeakMap,
      Sm = (mm, Tm) => {
        const fm = performance.now(),
          hm = bm.get(mm);
        if (hm && hm.axis === Tm && fm - hm.atMs < 500 && (!hm.container || hm.container.isConnected)) return hm.container;
        const Am = em(mm, Tm);
        return bm.set(mm, {
          axis: Tm,
          atMs: fm,
          container: Am
        }), Am
      },
      em = (mm, Tm) => {
        let fm = Zm(mm, Tm) ? mm : null,
          hm = fm ? fm.clientWidth * fm.clientHeight : 0;
        for (const Am of mm.querySelectorAll("*")) {
          const mm = Am.clientWidth * Am.clientHeight;
          mm > hm && Zm(Am, Tm) && (fm = Am, hm = mm)
        }
        return fm
      },
      Nm = (mm, Tm, fm) => "y" === Tm ? fm < 0 ? mm.scrollTop > 0 : mm.scrollTop + mm.clientHeight < mm.scrollHeight - 1 : fm < 0 ? mm.scrollLeft > 0 : mm.scrollLeft + mm.clientWidth < mm.scrollWidth - 1,
      Gm = (mm, Tm, fm) => {
        "y" === Tm ? mm.scrollBy({
          top: fm,
          behavior: "instant"
        }) : mm.scrollBy({
          left: fm,
          behavior: "instant"
        })
      },
      Xm = mm => {
        if (!mm || mm === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Tm = mm.getBoundingClientRect(),
          fm = Math.max(0, Tm.left),
          hm = Math.max(0, Tm.top);
        return new DOMRect(fm, hm, Math.min(window.innerWidth, Tm.right) - fm, Math.min(window.innerHeight, Tm.bottom) - hm)
      },
      Pm = (mm, Tm) => mm.left < Tm.right && Tm.left < mm.right && mm.top < Tm.bottom && Tm.top < mm.bottom;
    var Hm = fm(59),
      ym = fm(1080),
      Cm = fm.n(ym),
      rm = fm(1135);
    let sm = 0,
      lm = !1;
    class Mm {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(mm) {
        this.element = mm, this.shownKey = "", this.gap = null
      }
      show(mm) {
        const Tm = this.element;
        if (!Tm) return;
        const fm = mm ? this.keepOnScreen(Tm, mm) : null,
          hm = fm ? `${fm.left},${fm.top},${fm.width},${fm.height}` : "";
        if (hm === this.shownKey) return;
        const Am = "" === this.shownKey;
        this.shownKey = hm, Tm.classList.toggle("Visible", null !== fm), fm && (Tm.classList.toggle("Snap", Am), Tm.style.width = `${fm.width}px`, Tm.style.height = `${fm.height}px`, Tm.style.transform = `translate(${fm.left}px, ${fm.top}px)`, Am && (Tm.offsetWidth, Tm.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(mm, Tm) {
        var fm;
        const hm = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!lm){lm=!0;const mm=document.createElement("div");mm.setAttribute("aria-hidden","true"),mm.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(mm),new ResizeObserver((()=>{sm++})).observe(mm)}return String(sm)})()}`;
        (null === (fm = this.gap) || void 0 === fm ? void 0 : fm.key) !== hm && (this.gap = {
          px: parseFloat(getComputedStyle(mm).paddingLeft) || 0,
          key: hm
        });
        const Am = this.gap.px + 2,
          am = Math.max(Tm.left, Am),
          xm = Math.max(Tm.top, Am),
          wm = Math.min(Tm.left + Tm.width, window.innerWidth - Am),
          Dm = Math.min(Tm.top + Tm.height, window.innerHeight - Am);
        return wm <= am || Dm <= xm ? Tm : {
          left: am,
          top: xm,
          width: wm - am,
          height: Dm - xm
        }
      }
    }
    const um = mm => {
      let {
        placer: Tm,
        className: fm
      } = mm;
      const hm = (0, Hm.useCallback)((mm => {
        Tm.setElement(mm)
      }), [Tm]);
      return (0, rm.jsx)("div", {
        ref: hm,
        className: Cm()("PadReticle", fm),
        "aria-hidden": !0
      })
    };
    var Bm = fm(8601);
    const Lm = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const tm = new class {
      constructor() {
        this.state = Lm, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(mm) {
        if (Tm = this.state, fm = mm, (Tm.visible || fm.visible) && (Tm.visible !== fm.visible || Tm.x !== fm.x || Tm.y !== fm.y || Tm.pressed !== fm.pressed)) {
          var Tm, fm;
          this.state = mm;
          for (const Tm of this.listeners) Tm(mm)
        }
      }
      hide() {
        this.set(Lm)
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
    };
    var Um = fm(8606);
    const dm = (mm, Tm) => {
        let {
          kind: fm,
          holding: hm,
          hasPress: Am,
          hasBack: am,
          slotHasItem: xm
        } = Tm;
        switch (mm) {
          case "primary":
            return "slot" === fm ? "slotPrimary" : "recipe" === fm || "button" === fm ? Am ? "pressPrimary" : "click" : "textField" === fm ? "openKeyboard" : null;
          case "secondary":
            return "slot" === fm ? "slotSecondary" : "button" !== fm && "recipe" !== fm || !Am ? null : "pressSecondary";
          case "quickMove":
            return "slot" === fm && xm ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === fm && xm && !hm ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return hm ? "cancel" : am ? "pressBack" : "close"
        }
      },
      gm = mm => {
        const Tm = [];
        if (mm.hotbarPicking) return Tm.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Tm.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Tm;
        if (mm.holding) "slot" === mm.kind ? (Tm.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Tm.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === mm.kind && Tm.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Tm.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Tm.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), mm.openButtonCloses && Tm.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var fm;
          "slot" === mm.kind && mm.slotHasItem ? (Tm.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Tm.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Tm.push({
            actions: ["inventoryQuickMove"],
            labelKey: mm.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Tm.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Tm.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== mm.kind && "recipe" !== mm.kind || !mm.pressHints ? "button" === mm.kind || "recipe" === mm.kind ? Tm.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === mm.kind && Tm.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (mm.pressHints.primary && Tm.push({
            actions: ["inventoryPrimary"],
            labelKey: mm.pressHints.primary
          }), mm.pressHints.secondary && Tm.push({
            actions: ["inventorySecondary"],
            labelKey: mm.pressHints.secondary
          }));
          const hm = null === (fm = mm.pressHints) || void 0 === fm ? void 0 : fm.back;
          hm && Tm.push({
            actions: ["inventoryClose"],
            labelKey: hm
          });
          const Am = [];
          mm.openButtonCloses && Am.push("inventory"), hm || Am.push("inventoryClose"), Am.length > 0 && Tm.push({
            actions: Am,
            labelKey: "inventoryClose"
          })
        }
        return Tm.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), mm.hasCategories ? Tm.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : mm.hasList && Tm.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Tm
      };
    var Wm = fm(8622),
      Fm = fm(8613);
    class mT {
      constructor(mm) {
        this.probes = mm, this.byContainer = new Map, this.byParent = new Map
      }
      find(mm, Tm) {
        const fm = km(mm, "y", Tm);
        if (!fm) return null;
        let hm = this.byContainer.get(fm);
        return hm || (this.probes.push({
          element: fm,
          rect: AT(fm.getBoundingClientRect())
        }), hm = {
          container: fm,
          box: Xm(fm),
          group: hT(fm)
        }, this.byContainer.set(fm, hm)), hm
      }
      findForParent(mm, Tm) {
        let fm = this.byParent.get(mm);
        return void 0 === fm && (fm = this.find(mm, Tm), this.byParent.set(mm, fm)), fm
      }
    }
    const TT = new WeakMap;
    let fT = 0;
    const hT = mm => {
        let Tm = TT.get(mm);
        return Tm || (Tm = "el:" + fT++, TT.set(mm, Tm)), Tm
      },
      AT = mm => ({
        left: mm.left,
        top: mm.top,
        width: mm.width,
        height: mm.height
      }),
      aT = mm => mm.width > 0 && mm.height > 0,
      xT = (mm, Tm) => aT(mm) && mm.left + mm.width > 0 && mm.top + mm.height > 0 && mm.left < Tm.width && mm.top < Tm.height,
      wT = (mm, Tm, fm) => {
        const hm = mm.top + mm.height / 2;
        return xT(mm, Tm) && (!fm || hm >= fm.top && hm <= fm.bottom)
      },
      DT = mm => ({
        x: mm.left + mm.width / 2,
        y: mm.top + mm.height / 2
      }),
      iT = (mm, Tm, fm) => mm < 0 ? fm >= 0 ? 0 : Tm - 1 : ((mm + fm) % Tm + Tm) % Tm,
      RT = mm => "Left" === mm || "Right" === mm,
      pT = (mm, Tm, fm) => {
        const hm = RT(fm),
          Am = hm ? mm.top : mm.left,
          am = hm ? mm.height : mm.width,
          xm = hm ? Tm.top : Tm.left,
          wm = hm ? Tm.height : Tm.width,
          Dm = Math.max(0, Math.max(xm - (Am + am), Am - (xm + wm)));
        return am > 1.5 * wm ? {
          gap: Dm,
          offset: Math.max(0, xm - Am) + .1 * Math.max(0, Am - xm)
        } : {
          gap: Dm,
          offset: Math.abs(xm + wm / 2 - (Am + am / 2))
        }
      },
      ET = (mm, Tm, fm) => {
        const hm = ((mm, Tm, fm) => {
          const hm = DT(mm),
            Am = DT(Tm),
            am = RT(fm) ? Math.min(mm.width, Tm.width) / 4 : Math.min(mm.height, Tm.height) / 4;
          switch (fm) {
            case "Right":
              return Am.x - hm.x >= am ? Math.max(0, Tm.left - (mm.left + mm.width)) : null;
            case "Left":
              return hm.x - Am.x >= am ? Math.max(0, mm.left - (Tm.left + Tm.width)) : null;
            case "Down":
              return Am.y - hm.y >= am ? Math.max(0, Tm.top - (mm.top + mm.height)) : null;
            case "Up":
              return hm.y - Am.y >= am ? Math.max(0, mm.top - (Tm.top + Tm.height)) : null
          }
        })(mm, Tm, fm);
        if (null === hm) return null;
        const Am = pT(mm, Tm, fm);
        return hm + 3 * Am.gap + .5 * Am.offset
      },
      oT = (mm, Tm) => Tm.visible || null !== Tm.scrollGroup && Tm.scrollGroup === mm.scrollGroup,
      OT = (mm, Tm, fm, hm) => {
        let Am = null,
          am = 1 / 0;
        for (const xm of Tm) {
          if (xm.key === mm.key || !oT(mm, xm) || !hm(xm)) continue;
          const Tm = ET(mm.rect, xm.rect, fm);
          null !== Tm && Tm < am && (Am = xm, am = Tm)
        }
        return Am
      },
      YT = (mm, Tm, fm) => {
        const hm = OT(mm, Tm, fm, (() => !0));
        if (!hm || RT(fm) || null === mm.scrollGroup || hm.scrollGroup === mm.scrollGroup) return hm;
        const Am = OT(mm, Tm, fm, (Tm => 0 === pT(mm.rect, Tm.rect, fm).gap));
        return null !== Am && void 0 !== Am ? Am : hm
      },
      qT = (mm, Tm, fm) => {
        let hm = null,
          Am = 1 / 0;
        for (const am of Tm) {
          if (!am.visible || fm && !fm(am)) continue;
          const Tm = DT(am.rect),
            xm = Math.hypot(Tm.x - mm.x, Tm.y - mm.y);
          xm < Am && (hm = am, Am = xm)
        }
        return hm
      },
      jT = mm => {
        const {
          rect: Tm,
          clip: fm
        } = mm;
        if (!fm) return Tm;
        const hm = Math.max(Tm.left, fm.left),
          Am = Math.max(Tm.top, fm.top);
        return {
          left: hm,
          top: Am,
          width: Math.min(Tm.left + Tm.width, fm.left + fm.width) - hm,
          height: Math.min(Tm.top + Tm.height, fm.top + fm.height) - Am
        }
      },
      VT = (mm, Tm) => Tm.x >= mm.left && Tm.x < mm.left + mm.width && Tm.y >= mm.top && Tm.y < mm.top + mm.height,
      IT = (mm, Tm) => {
        let fm = null,
          hm = 1 / 0;
        for (const Am of Tm) {
          const Tm = jT(Am);
          (Am.visible || Am.clip) && VT(Tm, mm) && (Tm.width * Tm.height < hm && (fm = Am, hm = Tm.width * Tm.height))
        }
        return fm
      },
      KT = mm => {
        let Tm = null;
        for (const fm of mm) {
          if (!fm.visible) continue;
          if (!Tm) {
            Tm = fm;
            continue
          }
          const mm = Math.min(Tm.rect.height, fm.rect.height) / 2,
            hm = fm.rect.top - Tm.rect.top;
          (hm < -mm || Math.abs(hm) <= mm && fm.rect.left < Tm.rect.left) && (Tm = fm)
        }
        return Tm
      },
      QT = (mm, Tm, fm, hm, Am) => {
        const am = Am % Tm,
          xm = Math.floor(Am / Tm);
        return {
          left: mm.left + am * fm,
          top: mm.top + xm * hm,
          width: mm.width,
          height: mm.height
        }
      },
      nT = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      JT = ".LazyLoadedItemWrapper",
      cT = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      zT = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      ZT = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      kT = mm => mm.hasAttribute("data-inven-idx") ? "slot" : mm.hasAttribute("data-recipe-key") ? "recipe" : mm.hasAttribute("data-craft-ingredient") || (0, Fm.u)(mm) ? "info" : (0, Bm.K)(mm) ? "textField" : "button",
      bT = (mm, Tm) => "slot" === Tm ? Number(mm.getAttribute("data-inven-idx")) : null,
      ST = mm => mm.matches(JT) ? mm.querySelector(cT) : mm,
      eT = mm => {
        var Tm, fm;
        return {
          element: mm,
          recipe: null !== (Tm = mm && (null === (fm = ST(mm)) || void 0 === fm ? void 0 : fm.getAttribute("data-recipe-key"))) && void 0 !== Tm ? Tm : null
        }
      },
      NT = mm => {
        const Tm = ST(mm);
        if (!Tm) return {
          kind: "pending",
          idx: null
        };
        const fm = kT(Tm);
        return {
          kind: fm,
          idx: bT(Tm, fm)
        }
      },
      GT = mm => {
        const Tm = [];
        for (const [fm, hm] of zT) {
          mm.matches(hm) && Tm.push([fm, mm]);
          for (const Am of mm.querySelectorAll(hm)) Tm.push([fm, Am])
        }
        return Tm
      },
      XT = (mm, Tm) => {
        for (const [fm, hm] of mm)
          if (hm.contains(Tm)) return fm;
        return "other"
      },
      PT = (mm, Tm, fm, hm, Am, am, xm, wm) => {
        var Dm;
        const im = mm.children,
          Rm = AT(im[0].getBoundingClientRect()),
          pm = [{
            element: im[0],
            rect: Rm
          }];
        if (am.push(pm[0]), 0 === Rm.width || 0 === Rm.height) return;
        let Em = 1;
        for (; Em < im.length && Math.abs(im[Em].getBoundingClientRect().top - Rm.top) < 1;) Em++;
        const om = mm => {
            const Tm = {
              element: im[mm],
              rect: AT(im[mm].getBoundingClientRect())
            };
            return am.push(Tm), pm.push(Tm), Tm.rect
          },
          Om = Em > 1 ? om(1).left - Rm.left : Rm.width,
          Ym = im.length > Em ? om(Em).top - Rm.top : Rm.height,
          qm = xm.find(mm, Tm);
        let jm = null;
        if (qm) {
          var Vm;
          const {
            container: mm,
            box: Tm
          } = qm;
          jm = null !== (Vm = wm.get(mm)) && void 0 !== Vm ? Vm : null, jm || (jm = {
            top: mm.scrollTop,
            left: mm.scrollLeft,
            box: Tm,
            viewport: hm,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, wm.set(mm, jm)), jm.probes.push(...pm)
        }
        const Im = Am.length;
        for (let Jm = 0; Jm < im.length; Jm++) {
          var Km, Qm, nm;
          const mm = im[Jm],
            Tm = QT(Rm, Em, Om, Ym, Jm),
            am = mm.firstElementChild ? mm.querySelector(cT) : null,
            xm = am ? kT(am) : "pending";
          Am.push({
            key: hT(mm),
            rect: Tm,
            panel: fm,
            scrollGroup: null !== (Km = null === qm || void 0 === qm ? void 0 : qm.group) && void 0 !== Km ? Km : null,
            visible: wT(Tm, hm, null === qm || void 0 === qm ? void 0 : qm.box),
            clip: null !== (Qm = null === qm || void 0 === qm ? void 0 : qm.box) && void 0 !== Qm ? Qm : null,
            element: mm,
            kind: xm,
            idx: am ? bT(am, xm) : null,
            scrollContainer: null !== (nm = null === qm || void 0 === qm ? void 0 : qm.container) && void 0 !== nm ? nm : null
          })
        }
        null === (Dm = jm) || void 0 === Dm || Dm.targets.push(...Am.slice(Im))
      },
      HT = mm => mm instanceof Element && null !== mm.closest(JT),
      yT = mm => null !== mm.scrollContainer && HT(mm.element);
    class CT {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(mm, Tm, fm, hm) {
        this.latched = {
          source: mm,
          focusKey: Tm,
          sinceMs: fm,
          hold: {
            id: ++this.presses,
            holdMs: hm
          }
        }
      }
      update(mm, Tm, fm) {
        const hm = this.latched;
        return hm ? mm && Tm === hm.focusKey ? fm - hm.sinceMs < hm.hold.holdMs ? null : (this.latched = null, hm.source) : (this.latched = null, null) : null
      }
      getHold() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.latched) || void 0 === Tm ? void 0 : Tm.hold) && void 0 !== mm ? mm : null
      }
      reset() {
        this.latched = null
      }
    }
    var rT = fm(8630);
    const sT = {
        kind: "none"
      },
      lT = mm => ({
        x: mm.clientX,
        y: mm.clientY
      }),
      MT = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class uT {
      constructor() {
        this.hovered = sT, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(mm, Tm, fm, hm, Am) {
        const am = null !== Tm ? {
            kind: "slot",
            idx: Tm
          } : fm ? {
            kind: "element",
            element: fm
          } : sT,
          xm = `${Am}|${Math.round(hm.clientX)},${Math.round(hm.clientY)}`,
          wm = (Dm = this.hovered, im = am, "slot" === Dm.kind && "slot" === im.kind ? Dm.idx === im.idx : "element" === Dm.kind && "element" === im.kind ? Dm.element === im.element : Dm.kind === im.kind);
        var Dm, im;
        if (wm && xm === this.signature) return;
        const Rm = !wm || Am !== this.holding || "" === this.signature;
        this.signature = xm, this.holding = Am, this.lastPoint = hm;
        const pm = this.hovered;
        if (this.hovered = am, "slot" === am.kind) return this.leaveElement(pm, null, hm), void(Rm ? mm.hover(am.idx, hm) : mm.moveTo(hm));
        if (wm) return void("element" === am.kind ? (0, Bm.m)(am.element, am.element, lT(hm)) : mm.hover(null, hm));
        mm.hover(null, hm);
        const Em = "element" === am.kind ? am.element : null;
        "element" === pm.kind ? (0, Bm.m)(pm.element, Em, lT(hm)) : Em && (0, Bm.m)(null, Em, lT(hm))
      }
      invalidate() {
        this.signature = ""
      }
      clear(mm) {
        const Tm = this.hovered;
        this.hovered = sT, this.signature = "", "none" !== Tm.kind && (this.leaveElement(Tm, null, this.lastPoint), mm && "slot" === Tm.kind && mm.hover(null, this.lastPoint))
      }
      leaveElement(mm, Tm, fm) {
        "element" === mm.kind && (0, Bm.m)(mm.element, Tm, lT(fm))
      }
    }
    class BT {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(mm, Tm) {
        Jm(mm) && (this.lastTiltedMs = Tm)
      }
      allowsClick(mm) {
        return mm - this.lastTiltedMs > 150
      }
    }
    class LT {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(mm) {
        return 0 !== (0, Om.n)(mm, .2).y
      }
      step(mm, Tm, fm) {
        mm !== this.container && (this.container = mm, this.remainder = 0);
        const hm = cm(Tm, fm).y;
        if (0 === hm) return this.remainder = 0, !1;
        const Am = this.remainder + hm,
          am = Math.trunc(Am);
        if (this.remainder = Am - am, 0 === am) return !1;
        const xm = mm.scrollTop;
        return mm.scrollTop = xm + am, mm.scrollTop !== xm
      }
      current() {
        var mm;
        return null !== (mm = this.container) && void 0 !== mm && mm.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var vT = fm(8633);
    const tT = "[data-pad-inventory-default]",
      UT = ".HotBarGameItemsContainer .InvenItem.Selected",
      dT = {
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
      gT = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      WT = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      FT = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      mf = [...WT, ...FT],
      Tf = () => {
        return mm = (0, Rm.k)("inventory"), !mf.map(Rm.k).includes(mm) && !(0, Om.L)(mm);
        var mm
      },
      ff = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      hf = (mm, Tm) => {
        const fm = !(null === Tm || void 0 === Tm || !Tm.isHolding());
        return function(mm, Tm) {
          const fm = mm.find((mm => mm.visible && Tm(mm)));
          if (fm) return fm;
          for (var hm = arguments.length, Am = new Array(hm > 2 ? hm - 2 : 0), am = 2; am < hm; am++) Am[am - 2] = arguments[am];
          for (const xm of Am) {
            const Tm = KT(mm.filter(xm));
            if (Tm) return Tm
          }
          return KT(mm)
        }(mm, (mm => {
          const {
            element: Tm
          } = mm;
          return Tm.matches(tT) || null !== Tm.querySelector(tT) || Tm.matches(UT)
        }), (mm => "slot" === mm.kind ? fm || null !== mm.idx && !(null === Tm || void 0 === Tm || !Tm.hasItemAt(mm.idx)) : "recipe" === mm.kind || "pending" === mm.kind), (mm => "slot" === mm.kind || "button" === mm.kind))
      };
    class Af {
      constructor() {
        this.set = null, this.observer = new MutationObserver((mm => {
          mm.some((mm => !HT(mm.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = mm => {
          this.scrolled(mm.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const mm = [],
              Tm = [];
            let fm = !1;
            const hm = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Am = new Map,
              am = new mT(Tm);
            for (const pm of document.querySelectorAll(nT)) {
              const Rm = GT(pm);
              fm ||= null !== pm.querySelector(".CreativeCategoryTab");
              for (const fm of pm.querySelectorAll(`${JT}:first-child`)) {
                const xm = fm.parentElement;
                PT(xm, pm, XT(Rm, xm), hm, mm, Tm, am, Am)
              }
              for (const fm of pm.querySelectorAll(cT)) {
                var xm, wm, Dm, im;
                if (fm.closest(JT) || fm.closest("[data-pad-ignore]")) continue;
                const Em = null === (xm = fm.parentElement) || void 0 === xm ? void 0 : xm.closest(cT);
                if (Em && pm.contains(Em)) continue;
                const om = kT(fm),
                  Om = bT(fm, om);
                if (-1 === Om) continue;
                const Ym = AT(fm.getBoundingClientRect());
                Tm.push({
                  element: fm,
                  rect: Ym
                });
                const qm = am.findForParent(fm.parentElement, pm),
                  jm = qm && !Am.has(qm.container) ? qm : null;
                (jm ? aT(Ym) : xT(Ym, hm)) && mm.push({
                  key: hT(fm),
                  rect: Ym,
                  panel: XT(Rm, fm),
                  scrollGroup: null !== (wm = null === jm || void 0 === jm ? void 0 : jm.group) && void 0 !== wm ? wm : null,
                  visible: wT(Ym, hm, null === jm || void 0 === jm ? void 0 : jm.box),
                  clip: null !== (Dm = null === jm || void 0 === jm ? void 0 : jm.box) && void 0 !== Dm ? Dm : null,
                  element: fm,
                  kind: om,
                  idx: Om,
                  scrollContainer: null !== (im = null === jm || void 0 === jm ? void 0 : jm.container) && void 0 !== im ? im : null
                })
              }
            }
            for (const [pm, Em] of Am) Em.holdsOthers = Tm.some((mm => mm.element !== pm && pm.contains(mm.element) && !mm.element.closest(JT)));
            const Rm = new Map;
            for (const pm of mm) Rm.set(pm.element, pm);
            return {
              targets: mm,
              byElement: Rm,
              hasCategories: fm,
              probes: Tm,
              scrollers: Am
            }
          })(), this.observer.disconnect();
          for (const mm of document.querySelectorAll(nT)) this.observer.observe(mm, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(mm) {
        !this.set || mm instanceof Element && ((mm, Tm) => {
          const fm = mm.scrollers.get(Tm);
          if (!fm || fm.holdsOthers || Tm.scrollLeft !== fm.left) return !1;
          const hm = Tm.scrollTop - fm.top;
          if (0 === hm) return !0;
          fm.top = Tm.scrollTop;
          for (const Am of fm.probes) Am.rect.top -= hm;
          for (const Am of fm.targets) Am.rect.top -= hm, Am.visible = wT(Am.rect, fm.viewport, fm.box);
          return !0
        })(this.set, mm) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((mm => {
          return Tm = mm.rect, fm = mm.element.getBoundingClientRect(), !(Tm.left === fm.left && Tm.top === fm.top && Tm.width === fm.width && Tm.height === fm.height);
          var Tm, fm
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const af = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Om.G.map((mm => [mm, (0, Ym.c)(Om.H)]))), this.stickRepeat = new Om.e((0, Ym.c)(Om.cb)), this.pageUpTimer = (0, Ym.c)(Om.ab), this.pageDownTimer = (0, Ym.c)(Om.ab), this.stickGate = new Qm, this.pointer = null, this.activePress = null, this.dropLatch = new CT, this.scroller = new LT, this.scrollStickClick = new BT, this.hover = new uT, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Mm, this.targets = new Af, this.hasCategories = !1, this.wasShowing = !1, this.state = rT.c, this.isActive = () => (0, Wm.i)(), this.isShowing = () => "inventory" === pm.d.getActiveConsumerName() && (0, om.m)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Wm.f)()), (0, Wm.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var mm;
            this.reopenSlotIdx = null !== (mm = this.focused ? NT(this.focused).idx : null) && void 0 !== mm ? mm : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Wm.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = mm => {
            (0, wm.unstable_batchedUpdates)((() => {
              this.frame(mm)
            }))
          }, this.shouldBlockRealPointer = mm => mm.isTrusted && !(0, jm.s)(mm) && this.isShowing(), this.noteRealPointer = mm => {
            mm instanceof MouseEvent && mm.isTrusted && !(0, jm.s)(mm) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = mm.clientX, this.lastRealPointer.y = mm.clientY)
          }, this.wakePressActs = mm => {
            var Tm;
            return mm === (0, Rm.k)("inventoryClose") ? !(null !== (Tm = (0, Wm.f)()) && void 0 !== Tm && Tm.isHolding()) : !(mm !== (0, Rm.k)("inventory") || !Tf()) || ((0, Om.L)(mm) ? this.isNavButton(mm) : FT.some((Tm => (0, Rm.k)(Tm) === mm)))
          }
        }
        frame(mm) {
          var Tm, fm, hm, Am, am;
          const xm = (0, Wm.f)();
          if (!(0, om.m)()) return void(this.wasShowing && (this.endInteraction(xm), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), mm.wokeDevice && this.focusWakePointer(!(null === xm || void 0 === xm || !xm.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Em.f)().inventoryNavigation || this.pointer || this.engagePointer();
          const wm = performance.now();
          this.handleNavigation(mm, wm), this.handlePanels(mm), this.handlePaging(mm, wm), this.handleScroll(mm), this.handleButtons(mm, wm, xm), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Dm = this.ensureFocus(),
            im = this.focusContext(xm);
          this.ring.show(Dm);
          const pm = "slot" === im.kind ? im.idx : null,
            Om = null !== (Tm = null === (fm = im.actionElement) || void 0 === fm ? void 0 : fm.querySelector(".DoCraftItem")) && void 0 !== Tm ? Tm : im.actionElement;
          this.pointer ? (this.hover.sync(xm, pm, Om, ((mm, Tm) => {
            const fm = Tm ? MT() : 0;
            return {
              clientX: mm.x - fm,
              clientY: mm.y - fm
            }
          })(this.pointer, im.holding), im.holding), tm.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: mm.isHeld((0, Rm.k)("inventoryPrimary"))
          })) : Dm && this.focused && this.hover.sync(xm, pm, Om, ((mm, Tm) => {
            if (!Tm) return {
              clientX: mm.left + mm.width - 10,
              clientY: mm.top + mm.height / 2 - 10
            };
            const fm = MT();
            return {
              clientX: mm.left + mm.width / 2 - fm,
              clientY: mm.top + mm.height / 2 - fm
            }
          })(Dm, im.holding), im.holding), this.publishState({
            showing: !0,
            kind: im.kind,
            holding: im.holding,
            slotHasItem: im.slotHasItem,
            pressHints: null !== (hm = null === (Am = im.press) || void 0 === Am ? void 0 : Am.hints) && void 0 !== hm ? hm : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && yT(this.focusTarget),
            openButtonCloses: Tf(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === im.kind && !(null === (am = im.actionElement) || void 0 === am || !am.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(mm) {
          var Tm;
          const fm = (0, om.b)();
          if (!fm) return;
          this.targets.revalidate();
          const hm = this.getTargets().targets;
          this.setFocus(null !== (Tm = IT(fm, hm)) && void 0 !== Tm ? Tm : mm ? qT(fm, hm, (mm => {
            let {
              rect: Tm
            } = mm;
            const hm = Math.max(Tm.left - fm.x, 0, fm.x - (Tm.left + Tm.width)),
              Am = Math.max(Tm.top - fm.y, 0, fm.y - (Tm.top + Tm.height));
            return Math.hypot(hm, Am) <= Math.min(Tm.width, Tm.height) / 2
          })) : null, !1), "cursor" === (0, Em.f)().inventoryNavigation && (this.pointer = {
            x: fm.x,
            y: fm.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const mm = this.lastRealPointer;
          if (!mm || "keyboardMouse" !== Dm.c.get("activeInputDevice")) return;
          const Tm = document.elementFromPoint(mm.x, mm.y);
          Tm && (0, Bm.m)(null, Tm, mm)
        }
        endInteraction(mm) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Tm of this.dpadTimers.values()) Tm.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(mm), this.ring.hide(), this.releasePointer(), this.publishState(rT.c)
        }
        getTargets() {
          const mm = this.targets.get();
          return this.hasCategories = mm.hasCategories, mm
        }
        currentTarget() {
          var mm;
          return this.focused && null !== (mm = this.getTargets().byElement.get(this.focused)) && void 0 !== mm ? mm : null
        }
        readFocusRect() {
          const mm = this.focused;
          if (null === mm || void 0 === mm || !mm.isConnected || !mm.closest(nT)) return null;
          const Tm = mm.getBoundingClientRect();
          return Tm.width > 0 && Tm.height > 0 ? {
            left: Tm.left,
            top: Tm.top,
            width: Tm.width,
            height: Tm.height
          } : null
        }
        ensureFocus() {
          const mm = this.readFocusRect();
          if (mm || this.pointer) return mm;
          const {
            targets: Tm,
            byElement: fm
          } = this.getTargets();
          let hm = null,
            Am = !1;
          if (this.lastRect) hm = qT(DT(this.lastRect), Tm);
          else {
            var am, xm;
            const mm = ((mm, Tm) => {
                const fm = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return fm ? hf(mm.filter((mm => fm.contains(mm.element))), Tm) : null
              })(Tm, (0, Wm.f)()),
              wm = Tm.find((mm => null !== mm.idx && mm.idx === this.reopenSlotIdx)),
              Dm = document.querySelector(UT);
            Am = null !== mm || void 0 !== wm, hm = null !== (am = null !== (xm = null !== mm && void 0 !== mm ? mm : wm) && void 0 !== xm ? xm : Dm && fm.get(Dm)) && void 0 !== am ? am : KT(Tm)
          }
          return this.setFocus(hm, Am), this.lastRect
        }
        setFocus(mm) {
          let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          mm && (this.focused = mm.element, this.focusTarget = mm, this.panelMemory.set(mm.panel, mm.element), Tm && mm.scrollContainer && ((mm, Tm) => {
            const fm = mm.getBoundingClientRect(),
              hm = Xm(Tm),
              Am = Tm.scrollTop;
            return fm.top < hm.top ? Tm.scrollTop -= hm.top - fm.top : fm.bottom > hm.bottom && (Tm.scrollTop += fm.bottom - hm.bottom), Tm.scrollTop !== Am
          })(mm.element, mm.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Em.f)().inventoryNavigation) {
              if (this.lastRect) {
                const mm = DT(this.lastRect);
                this.pointer = {
                  x: mm.x,
                  y: mm.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const mm = this.lastRect ? DT(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: mm.x,
            y: mm.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, tm.hide()
        }
        hoverAtPointer() {
          var mm;
          const Tm = IT(this.pointer, this.getTargets().targets);
          this.focusTarget = Tm, (null === Tm || void 0 === Tm ? void 0 : Tm.element) !== this.focused && (this.focused = null !== (mm = null === Tm || void 0 === Tm ? void 0 : Tm.element) && void 0 !== mm ? mm : null, Tm && (this.panelMemory.set(Tm.panel, Tm.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(mm, Tm) {
          const fm = this.focusTarget,
            hm = fm && (0, Em.f)().cursorMagnetism ? DT(jT(fm)) : null;
          this.pointer = nm(this.pointer, {
            stick: mm.leftStick,
            moveDeadzone: (0, Em.f)().moveDeadzone,
            dpad: Tm,
            dtMs: mm.dtMs,
            cursorSpeedPercent: (0, Em.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: hm
            }
          })
        }
        move(mm) {
          this.targets.revalidate();
          const Tm = this.currentTarget();
          Tm && this.setFocus(YT(Tm, this.getTargets().targets, mm))
        }
        step(mm) {
          const Tm = this.pointer;
          if (Tm && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((mm, Tm, fm) => {
            var hm;
            const Am = {
              key: "",
              rect: {
                left: mm.x,
                top: mm.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (hm = YT(Am, Tm, fm)) && void 0 !== hm ? hm : qT(mm, Tm)
          })(Tm, this.getTargets().targets, mm));
          this.move(mm)
        }
        isNavButton(mm) {
          return !WT.some((Tm => (0, Rm.k)(Tm) === mm)) && !(mm === (0, Rm.k)("inventory") && Tf())
        }
        handleNavigation(mm, Tm) {
          const fm = (0, Em.f)().inventoryNavigation,
            hm = {
              x: 0,
              y: 0
            };
          let Am = null;
          for (const Dm of Om.G) {
            const am = this.isNavButton(Dm) && mm.isHeld(Dm);
            am && (hm.x += dT[Dm].x, hm.y += dT[Dm].y), this.dpadTimers.get(Dm).update(am, Tm) && "cursor" !== fm && (Am ??= Dm)
          }
          const am = this.stickGate.update(mm.leftStick, (0, Em.f)().moveDeadzone);
          if (Am && (this.step(Am), this.stickGate.lock()), "slot" !== fm) {
            const Tm = ((mm, Tm, fm, hm) => "hybrid" !== mm ? "cursor" === mm : !hm && (Tm || fm))(fm, null !== this.pointer, am, null !== Am);
            return Tm && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(mm, "cursor" === fm ? hm : {
              x: 0,
              y: 0
            }))
          }
          const xm = (0, Om.n)(mm.leftStick, (0, Em.f)().moveDeadzone),
            wm = this.stickRepeat.update(am ? (0, Om.gb)(xm) : null, Tm);
          wm && this.move(wm)
        }
        applyCategoryPlace() {
          const mm = this.placeAfterCategory;
          if (!mm) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Tm = qT(DT(mm.rect), this.getTargets().targets, (Tm => Tm.scrollGroup === mm.scrollGroup));
          this.setFocus(Tm, !1)
        }
        applyFocusRequest() {
          const mm = (0, Wm.s)();
          mm && (this.targets.invalidate(), this.setFocus((0, Wm.d)(this.getTargets().targets, mm)))
        }
        handlePanels(mm) {
          var Tm, fm, hm;
          const Am = mm.wasPressed((0, Rm.k)("inventoryPanelPrevious")),
            am = mm.wasPressed((0, Rm.k)("inventoryPanelNext"));
          if (!Am && !am) return;
          const {
            targets: xm
          } = this.getTargets(), wm = (Dm = ((mm, Tm) => {
            const fm = [];
            for (const Am of mm) Am.visible && !fm.includes(Am.panel) && fm.push(Am.panel);
            const hm = mm => {
              const hm = Tm.indexOf(mm);
              return -1 === hm ? Tm.length + fm.indexOf(mm) : hm
            };
            return fm.sort(((mm, Tm) => hm(mm) - hm(Tm)))
          })(xm, ZT), im = null !== (Tm = null === (fm = this.focusTarget) || void 0 === fm ? void 0 : fm.panel) && void 0 !== Tm ? Tm : null, pm = am ? 1 : -1, 0 === Dm.length ? null : Dm[iT(null === im ? -1 : Dm.indexOf(im), Dm.length, pm)]);
          var Dm, im, pm;
          if (null === wm) return;
          const Em = this.panelMemory.get(wm),
            om = xm.filter((mm => mm.panel === wm)),
            Om = null !== (hm = om.find((mm => mm.element === Em && mm.visible))) && void 0 !== hm ? hm : hf(om, (0, Wm.f)());
          this.setFocus(Om)
        }
        handlePaging(mm, Tm) {
          const fm = (0, Rm.k)("menuPageUp"),
            hm = (0, Rm.k)("menuPageDown"),
            Am = this.pageUpTimer.update(mm.isHeld(fm), Tm),
            am = this.pageDownTimer.update(mm.isHeld(hm), Tm);
          if (!Am && !am) return;
          const xm = am ? 1 : -1;
          if (!mm.wasPressed(am ? hm : fm) && this.hasCategories) return;
          if ((mm => {
              const Tm = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Tm.length) return !1;
              const fm = Tm.findIndex((mm => mm.classList.contains("Selected"))),
                hm = Tm[iT(fm, Tm.length, mm)];
              return (0, Bm.l)(hm, (0, Bm.y)(hm)), !0
            })(xm)) {
            var wm, Dm;
            this.targets.invalidate();
            const mm = null !== (wm = null === (Dm = this.focusTarget) || void 0 === Dm ? void 0 : Dm.scrollGroup) && void 0 !== wm ? wm : null,
              Tm = this.readFocusRect();
            return void(this.placeAfterCategory = null !== mm && Tm && !this.pointer ? {
              rect: Tm,
              scrollGroup: mm
            } : null)
          }
          const {
            targets: im
          } = this.getTargets(), pm = this.currentTarget(), Em = pm && yT(pm) ? pm : im.find((mm => yT(mm) && mm.visible));
          if (!Em) return;
          const om = ((mm, Tm, fm, hm) => {
            if (null === mm.scrollGroup) return null;
            const Am = DT(mm.rect),
              am = Am.x,
              xm = Am.y + ("Down" === fm ? hm : -hm);
            let wm = null,
              Dm = 1 / 0;
            for (const im of Tm) {
              if (im.scrollGroup !== mm.scrollGroup || im.key === mm.key) continue;
              const Tm = DT(im.rect);
              if ("Down" === fm ? Tm.y <= Am.y : Tm.y >= Am.y) continue;
              const hm = Math.hypot(Tm.x - am, Tm.y - xm);
              hm < Dm && (wm = im, Dm = hm)
            }
            return wm
          })(Em, im, xm > 0 ? "Down" : "Up", Em.scrollContainer.clientHeight);
          this.setFocus(null !== om && void 0 !== om ? om : Em)
        }
        handleScroll(mm) {
          var Tm, fm, hm, Am, am, xm;
          if (!this.scroller.isScrolling(mm.rightStick)) return void this.scroller.reset();
          const {
            targets: wm
          } = this.getTargets(), Dm = this.pointer, im = !Dm && this.focusTarget && yT(this.focusTarget) ? this.focusTarget.scrollContainer : null, Rm = Dm && (null === (Tm = wm.find((mm => mm.clip && VT(mm.clip, Dm)))) || void 0 === Tm ? void 0 : Tm.scrollContainer), pm = null !== (fm = null !== (hm = null !== (Am = this.scroller.current()) && void 0 !== Am ? Am : Rm) && void 0 !== hm ? hm : im) && void 0 !== fm ? fm : null === (am = wm.find(yT)) || void 0 === am ? void 0 : am.scrollContainer;
          if (!pm || !this.scroller.step(pm, mm.rightStick, mm.dtMs)) return;
          this.targets.scrolled(pm);
          const Em = Dm || (null === (xm = this.focusTarget) || void 0 === xm ? void 0 : xm.scrollContainer) !== pm ? null : this.readFocusRect();
          if (!Em) return;
          const om = Xm(pm),
            Om = DT(Em);
          if (Om.y < om.top || Om.y > om.bottom) {
            const mm = this.focusTarget.scrollGroup,
              Tm = qT(Om, this.getTargets().targets, (Tm => Tm.scrollGroup === mm));
            this.setFocus(Tm, !1)
          }
        }
        focusContext(mm) {
          const {
            kind: Tm,
            idx: fm
          } = this.focused ? NT(this.focused) : {
            kind: null,
            idx: null
          }, hm = this.focused ? ST(this.focused) : null, Am = hm ? (0, vT.d)(hm) : null;
          return {
            kind: Tm,
            idx: fm,
            actionElement: hm,
            press: Am,
            hasPress: null !== Am,
            hasBack: !(null === Am || void 0 === Am || !Am.back),
            holding: mm.isHolding(),
            slotHasItem: null !== fm && mm.hasItemAt(fm)
          }
        }
        handleButtons(mm, Tm, fm) {
          var hm, Am;
          if (!this.activePress || mm.isHeld(this.activePress.button) && (hm = this.activePress.target, Am = this.focused, null !== hm.recipe ? eT(Am).recipe === hm.recipe : Am === hm.element) || this.releasePress(), this.scrollStickClick.update(mm.rightStick, Tm), !this.handleHotbarPick(mm, fm)) {
            for (const [hm, Am] of gT) {
              const am = (0, Rm.k)(Am);
              if (!mm.wasPressed(am) || "openButton" === hm && !Tf()) continue;
              if ("RS" === am && !this.scrollStickClick.allowsClick(Tm)) continue;
              const xm = this.focusContext(fm),
                wm = dm(hm, xm);
              wm && this.runIntent(wm, xm, am, fm)
            }
            this.handleDrop(mm, Tm, fm)
          }
        }
        handleHotbarPick(mm, Tm) {
          const fm = this.hotbarPick;
          if (!fm) return !1;
          const hm = mm.wasPressed((0, Rm.k)("inventoryPrimary")) || mm.wasPressed((0, Rm.k)("inventoryHotbarSwap"));
          if (!hm && !mm.wasPressed((0, Rm.k)("inventoryClose")) && !Tm.isHolding()) return !(mm.wasPressed((0, Rm.k)("inventory")) && Tf());
          const Am = this.focusTarget;
          hm && "hotbar" === (null === Am || void 0 === Am ? void 0 : Am.panel) && null !== Am.idx && Am.idx !== fm.idx && (Tm.swapWithHotbar(Am.idx, fm.idx), this.afterAction()), this.hotbarPick = null;
          const am = fm.element.isConnected ? this.getTargets().byElement.get(fm.element) : void 0;
          return am && this.setFocus(am), !0
        }
        startHotbarPick(mm) {
          var Tm;
          const {
            targets: fm,
            byElement: hm
          } = this.getTargets(), Am = document.querySelector(UT), am = null !== (Tm = Am && hm.get(Am)) && void 0 !== Tm ? Tm : fm.find((mm => "hotbar" === mm.panel));
          am && this.focused && (this.hotbarPick = {
            idx: mm,
            element: this.focused
          }, this.setFocus(am))
        }
        focusKey() {
          return this.focused ? hT(this.focused) : null
        }
        handleDrop(mm, Tm, fm) {
          const hm = (0, Rm.k)("inventoryDrop");
          if (mm.wasPressed(hm)) {
            const mm = (Am = this.focusContext(fm)).holding ? {
              kind: "ni"
            } : "slot" === Am.kind && Am.slotHasItem && null !== Am.idx ? {
              kind: "slot",
              idx: Am.idx
            } : null;
            return void(mm && (this.dropFrom(mm, !1, fm), this.dropLatch.press(mm, this.focusKey(), Tm, qm.c[(0, Em.f)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Am;
          const am = this.dropLatch.update(mm.isHeld(hm), this.focusKey(), Tm);
          am && ((mm, Tm, fm) => "ni" === mm.kind ? Tm : !Tm && fm(mm.idx))(am, fm.isHolding(), fm.hasItemAt) && (this.dropFrom(am, !0, fm), this.afterAction())
        }
        dropFrom(mm, Tm, fm) {
          "ni" === mm.kind ? fm.dropHeld(Tm, this.slotPoint()) : fm.dropSlot(mm.idx, Tm)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (mm => {
            const Tm = DT(mm);
            return {
              clientX: Tm.x,
              clientY: Tm.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(mm, Tm, fm, hm) {
          const Am = Tm.idx,
            am = Tm.actionElement;
          switch (am && ff.has(mm) && (0, jm.y)(am), mm) {
            case "slotPrimary":
              hm.primary(Am, this.slotPoint());
              break;
            case "slotSecondary":
              hm.secondary(Am, this.slotPoint());
              break;
            case "slotQuickMove":
              hm.quickMove(Am, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Am);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Tm.press, "pressPrimary" === mm ? "primary" : "secondary", fm);
              break;
            case "click":
              (0, Bm.l)(am, (0, Bm.y)(am));
              break;
            case "openKeyboard":
              (0, Bm.K)(am) && (0, Bm.H)(am);
              break;
            case "pressBack":
              Tm.press.back();
              break;
            case "cancel":
              hm.cancel();
              break;
            case "close":
              return this.releasePress(), void hm.close()
          }
          this.afterAction()
        }
        startPress(mm, Tm, fm) {
          this.releasePress(), mm.press(Tm) && (this.activePress = {
            handlers: mm,
            button: fm,
            target: eT(this.focused)
          })
        }
        releasePress() {
          var mm, Tm, fm;
          null === (mm = this.activePress) || void 0 === mm || null === (Tm = (fm = mm.handlers).release) || void 0 === Tm || Tm.call(fm), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(mm) {
          ((mm, Tm) => {
            var fm, hm, Am, am, xm, wm;
            return mm.showing === Tm.showing && mm.kind === Tm.kind && mm.holding === Tm.holding && mm.slotHasItem === Tm.slotHasItem && (null === (fm = mm.pressHints) || void 0 === fm ? void 0 : fm.primary) === (null === (hm = Tm.pressHints) || void 0 === hm ? void 0 : hm.primary) && (null === (Am = mm.pressHints) || void 0 === Am ? void 0 : Am.secondary) === (null === (am = Tm.pressHints) || void 0 === am ? void 0 : am.secondary) && (null === (xm = mm.pressHints) || void 0 === xm ? void 0 : xm.back) === (null === (wm = Tm.pressHints) || void 0 === wm ? void 0 : wm.back) && mm.hasCategories === Tm.hasCategories && mm.hasList === Tm.hasList && mm.openButtonCloses === Tm.openButtonCloses && mm.steppingSlots === Tm.steppingSlots && mm.hotbarPicking === Tm.hotbarPicking && mm.quickMoveToHotbar === Tm.quickMoveToHotbar && mm.dropStackHold === Tm.dropStackHold
          })(mm, this.state) || (this.state = mm, im.j.gp(rT.f, mm))
        }
      },
      xf = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var wf = fm(8639),
      Df = fm(339),
      Rf = fm(1635),
      pf = fm(8086);
    const Ef = "[data-pad-secondary]",
      of = mm => mm instanceof HTMLElement && (0, Fm.n)(mm) && !(0, Fm.u)(mm),
      Of = mm => {
        const Tm = mm.querySelector(Ef);
        if (Tm && of(Tm)) return Tm;
        for (const Am of null !== (fm = null === (hm = mm.parentElement) || void 0 === hm ? void 0 : hm.children) && void 0 !== fm ? fm : []) {
          var fm, hm;
          if (Am !== mm && Am.matches(Ef) && of(Am)) return Am
        }
        return null
      },
      Yf = (mm, Tm, fm, hm) => Math.max(0, Math.max(mm, fm) - Math.min(Tm, hm)),
      qf = (mm, Tm, fm, hm) => Math.max(0, Math.min(Tm, hm) - Math.max(mm, fm)),
      jf = (mm, Tm, fm) => {
        const hm = (mm.left + mm.right) / 2,
          Am = (mm.top + mm.bottom) / 2,
          am = (Tm.left + Tm.right) / 2,
          xm = (Tm.top + Tm.bottom) / 2;
        if ("Left" === fm || "Right" === fm) {
          const wm = "Right" === fm ? 1 : -1;
          return {
            forwardGap: "Right" === fm ? Tm.left - mm.right : mm.left - Tm.right,
            centreForward: (am - hm) * wm,
            sidewaysGap: Yf(mm.top, mm.bottom, Tm.top, Tm.bottom),
            sidewaysOverlap: qf(mm.top, mm.bottom, Tm.top, Tm.bottom),
            centreSideways: Math.abs(xm - Am),
            startSideways: Math.abs(Tm.top - mm.top),
            fromSidewaysSize: mm.bottom - mm.top,
            toSidewaysSize: Tm.bottom - Tm.top,
            toLength: Tm.right - Tm.left
          }
        }
        const wm = "Down" === fm ? 1 : -1;
        return {
          forwardGap: "Down" === fm ? Tm.top - mm.bottom : mm.top - Tm.bottom,
          centreForward: (xm - Am) * wm,
          sidewaysGap: Yf(mm.left, mm.right, Tm.left, Tm.right),
          sidewaysOverlap: qf(mm.left, mm.right, Tm.left, Tm.right),
          centreSideways: Math.abs(am - hm),
          startSideways: Math.abs(Tm.left - mm.left),
          fromSidewaysSize: mm.right - mm.left,
          toSidewaysSize: Tm.right - Tm.left,
          toLength: Tm.bottom - Tm.top
        }
      },
      Vf = mm => mm.centreForward > .5 && mm.forwardGap >= -mm.toLength / 2,
      If = mm => {
        const Tm = mm.sidewaysOverlap > 0 ? 0 : 2 * mm.fromSidewaysSize,
          fm = mm.fromSidewaysSize > 1.5 * mm.toSidewaysSize ? mm.startSideways : mm.centreSideways;
        return Math.max(0, mm.forwardGap) + 3 * mm.sidewaysGap + Tm + .1 * fm
      },
      Kf = (mm, Tm) => qf(mm.top, mm.bottom, Tm.top, Tm.bottom) > 0 || Tm.bottom - Tm.top > Tm.right - Tm.left,
      Qf = (mm, Tm, fm, hm, Am, am) => {
        const xm = Am ? Jf(mm, Tm, fm, Am) : new Set,
          wm = Zf(mm, Tm, fm, xm);
        return wm < 0 && xm.size > 0 && am ? nf(mm, Tm, fm, am) : hm && wm >= 0 ? zf(mm, Tm, fm, hm, wm, xm) : wm
      },
      nf = (mm, Tm, fm, hm) => {
        const Am = new Set,
          am = Zf(mm, Tm, "Up", Am) >= 0,
          xm = Zf(mm, Tm, "Down", Am) >= 0,
          wm = new Set;
        return Tm.forEach(((Tm, fm) => {
          const Am = Tm.top + Tm.bottom < mm.top + mm.bottom;
          hm[fm] && !(Am ? am : xm) || wm.add(fm)
        })), Zf(mm, Tm, fm, wm)
      },
      Jf = (mm, Tm, fm, hm) => {
        const Am = new Set;
        return "Left" !== fm && "Right" !== fm || Tm.forEach(((Tm, fm) => {
          hm[fm] && qf(mm.top, mm.bottom, Tm.top, Tm.bottom) <= 0 && Am.add(fm)
        })), Am
      },
      zf = (mm, Tm, fm, hm, Am, am) => {
        const xm = jf(mm, Tm[Am], fm).forwardGap;
        let wm = Am,
          Dm = hm[Am],
          im = 1 / 0;
        return Tm.forEach(((Tm, Rm) => {
          const pm = hm[Rm];
          if (am.has(Rm) || pm < Dm || pm === Dm && wm === Am) return;
          const Em = jf(mm, Tm, fm);
          if (!Vf(Em) || Em.forwardGap < 0 || Em.forwardGap >= xm) return;
          const om = If(Em);
          (pm > Dm || om < im) && (wm = Rm, Dm = pm, im = om)
        })), wm
      },
      Zf = (mm, Tm, fm, hm) => {
        let Am = -1,
          am = 1 / 0;
        if (Tm.forEach(((Tm, xm) => {
            const wm = ((mm, Tm, fm) => {
              const hm = jf(mm, Tm, fm);
              if (!Vf(hm)) return null;
              const Am = Math.max(0, hm.forwardGap);
              return hm.sidewaysOverlap <= 0 && hm.sidewaysGap > 2 * (Am + 1) ? null : If(hm)
            })(mm, Tm, fm);
            null !== wm && wm < am && !hm.has(xm) && (am = wm, Am = xm)
          })), Am < 0) return -1;
        const xm = Tm[Am],
          wm = jf(mm, xm, fm).forwardGap;
        let Dm = wm,
          im = Am;
        return Tm.forEach(((Tm, am) => {
          if (am === Am || hm.has(am) || !((mm, Tm, fm) => {
              const hm = "Left" === fm || "Right" === fm,
                Am = hm ? qf(mm.top, mm.bottom, Tm.top, Tm.bottom) : qf(mm.left, mm.right, Tm.left, Tm.right),
                am = hm ? Math.min(mm.bottom - mm.top, Tm.bottom - Tm.top) : Math.min(mm.right - mm.left, Tm.right - Tm.left);
              return Am > 0 && Am >= am / 2
            })(Tm, xm, fm)) return;
          const Rm = jf(mm, Tm, fm);
          Vf(Rm) && Rm.forwardGap + Rm.toLength <= wm + 1 && Rm.forwardGap < Dm && (Dm = Rm.forwardGap, im = am)
        })), im
      },
      kf = (mm, Tm) => {
        let fm = -1,
          hm = 1 / 0;
        return Tm.forEach(((Tm, Am) => {
          const am = Math.max(Tm.left - mm.x, 0, mm.x - Tm.right),
            xm = Math.max(Tm.top - mm.y, 0, mm.y - Tm.bottom),
            wm = Math.hypot(am, xm);
          wm < hm && (hm = wm, fm = Am)
        })), fm
      },
      bf = (mm, Tm) => {
        const fm = Math.min(mm.bottom - mm.top, Tm.bottom - Tm.top) / 2;
        return Math.abs(mm.top - Tm.top) > fm ? mm.top - Tm.top : mm.left - Tm.left
      },
      Sf = mm => {
        let Tm = -1;
        for (let fm = 0; fm < mm.length; fm++)(Tm < 0 || bf(mm[fm], mm[Tm]) < 0) && (Tm = fm);
        return Tm
      };
    var ef = fm(1678),
      Nf = fm(8646),
      Gf = fm(8652);
    const Xf = mm => {
        if ("death" !== mm || "inGame" !== Dm.c.get("gameState") || "off" === (0, Em.f)().quickChat || null === (0, ef.c)()) return !1;
        const Tm = (0, Rm.k)("chat");
        return Tm !== (0, Rm.k)("menuConfirm") && Tm !== (0, Rm.k)("menuBack")
      },
      Pf = new Nf.b;
    var Hf = fm(4216),
      yf = fm(8654),
      Cf = fm(8663);
    const rf = mm => {
        let Tm = null;
        for (const fm of mm.querySelectorAll("[data-pad-tabs]"))(0, Fm.n)(fm) && (!Tm || Number(fm.dataset.padTabs) < Number(Tm.dataset.padTabs)) && (Tm = fm);
        return Tm
      },
      sf = (mm, Tm, fm, hm) => {
        mm.focusWhenFound((() => {
          const Am = mm.pickInitial(Tm);
          if (Am && !fm.has(Am) && (null === hm || void 0 === hm || !hm.contains(Am))) return Am;
          const am = ((mm, Tm) => {
              const fm = Tm => mm.getEnabledCandidates(Tm).filter((mm => !mm.closest("[data-pad-tabs]")));
              for (const hm of (0, Fm.j)(Tm)) {
                const mm = fm(hm);
                if (mm.length > 0) return mm
              }
              return fm(Tm)
            })(mm, Tm).filter((mm => !fm.has(mm))),
            xm = Sf(am.map((mm => mm.getBoundingClientRect())));
          return xm >= 0 ? am[xm] : null
        }), 3e3)
      },
      lf = (mm, Tm, fm, hm) => {
        var Am;
        const am = ((mm, Tm) => {
          if (0 === mm.length) return null;
          const fm = mm.findIndex((mm => "true" === mm.dataset.padSelected));
          return fm < 0 ? Tm > 0 ? mm[0] : mm[mm.length - 1] : mm[(fm + Tm + mm.length) % mm.length]
        })([...fm.querySelectorAll("[data-pad-tab]")].filter((mm => (0, Fm.n)(mm) && !(0, Fm.u)(mm))), hm);
        if (!am) return;
        const xm = null !== (Am = null === mm || void 0 === mm ? void 0 : mm.getFocused()) && void 0 !== Am ? Am : null,
          wm = !(null === xm || void 0 === xm || !xm.isConnected) && fm.contains(xm),
          Dm = mm && !wm ? new Set(mm.getEnabledCandidates(Tm)) : null;
        (0, Bm.e)(am), mm && (Dm ? sf(mm, Tm, Dm, fm) : mm.setFocus(am, {
          byUser: !0
        }))
      },
      Mf = mm => {
        var Tm;
        const fm = Xm(null !== (Tm = km(mm, "x")) && void 0 !== Tm ? Tm : mm),
          hm = (0, Fm.f)(mm).filter((mm => !(0, Fm.u)(mm))),
          Am = hm.filter((mm => Pm(mm.getBoundingClientRect(), fm)));
        return (Am.length > 0 ? Am : hm).sort(((mm, Tm) => bf(mm.getBoundingClientRect(), Tm.getBoundingClientRect())))
      },
      uf = (mm, Tm, fm) => {
        const hm = [...Tm.querySelectorAll("[data-pad-row]")].filter(Fm.n),
          Am = mm.getFocused(),
          am = Am ? hm.findIndex((mm => mm.contains(Am))) : -1;
        let xm = 0,
          wm = fm > 0 ? 0 : hm.length - 1;
        if (am >= 0 && Am) xm = Math.max(0, Mf(hm[am]).indexOf(Am)), wm = am + fm;
        else if (Am) {
          const mm = Am.getBoundingClientRect(),
            Tm = hm.map((Tm => {
              const hm = Tm.getBoundingClientRect();
              return fm > 0 ? hm.top >= mm.top : hm.bottom <= mm.bottom
            }));
          wm = fm > 0 ? Tm.indexOf(!0) : Tm.lastIndexOf(!0)
        }
        for (let Dm = wm; Dm >= 0 && Dm < hm.length; Dm += fm) {
          const Tm = Mf(hm[Dm]);
          if (Tm.length > 0) return void mm.setFocus(Tm[Math.min(xm, Tm.length - 1)], {
            byUser: !0
          })
        }
      },
      Bf = (mm, Tm, fm) => {
        var hm, Am;
        const am = null !== (hm = null === mm || void 0 === mm ? void 0 : mm.getFocused()) && void 0 !== hm ? hm : null,
          xm = null !== am && void 0 !== am && am.closest("[data-pad-row]") ? "x" : "y",
          wm = null !== (Am = am ? km(am, xm, Tm) : null) && void 0 !== Am ? Am : Sm(Tm, xm);
        if (!wm) return;
        const Dm = am ? (0, Bm.y)(am) : null;
        if (Gm(wm, xm, fm * ("y" === xm ? wm.clientHeight : wm.clientWidth) * .85), !mm || !Dm) return;
        const im = Xm(wm),
          Rm = mm.getEnabledCandidates(Tm).filter((mm => wm.contains(mm) && Pm(mm.getBoundingClientRect(), im))),
          pm = kf(Dm, Rm.map((mm => mm.getBoundingClientRect())));
        pm >= 0 && mm.setFocus(Rm[pm], {
          scroll: !1,
          byUser: !0
        })
      };
    let Lf = null;
    const vf = (mm, Tm) => {
        var fm, hm;
        const Am = Tm.querySelector("[data-pad-friends-column]"),
          am = mm.getFocused();
        if (!Am || !am || !Am.contains(am)) return !1;
        const xm = mm.getEnabledCandidates(Tm).filter((mm => !Am.contains(mm))),
          wm = kf((0, Bm.y)(am), xm.map((mm => mm.getBoundingClientRect()))),
          Dm = null === (fm = Lf) || void 0 === fm ? void 0 : fm.deref();
        return mm.setFocus(null !== Dm && void 0 !== Dm && Dm.isConnected ? Dm : null !== (hm = xm[wm]) && void 0 !== hm ? hm : null, {
          byUser: !0
        }), !0
      },
      tf = mm => {
        const Tm = (0, Rm.k)(mm);
        return (0, Om.L)(Tm) || pf.s.some((mm => (0, Rm.k)(mm) === Tm)) ? null : Tm
      },
      Uf = (mm, Tm) => {
        const fm = tf(Tm);
        return null !== fm && mm.wasPressed(fm)
      },
      df = function(mm, Tm, fm) {
        let hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Am = (mm => {
            var Tm, fm;
            return null !== (Tm = null === (fm = rf(mm)) || void 0 === fm ? void 0 : fm.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Tm ? Tm : null
          })(Tm),
          am = mm && Am ? new Set(mm.getEnabledCandidates(Tm)) : null;
        (0, wf.b)(), fm === Df.n.SETTINGS && (0, Rf.i)(Dm.c.get("openEverythingMenuName")) ? Dm.c.set({
          openEverythingMenuName: fm
        }) : (0, Rf.t)((0, Cf.b)("padMenuShortcut"), fm, hm), mm && am && Am && sf(mm, Tm, am, Am.closest("[data-pad-tabs]"))
      },
      gf = mm => null !== mm.closest(".Dropdown-root") || null !== mm.querySelector(".Dropdown-root.is-open"),
      Wf = mm => null !== (0, yf.d)() && "popup" !== mm.layer.kind && !rf(mm.root) && !gf(mm.root),
      Ff = (0, Ym.c)(Om.ab),
      mh = (0, Ym.c)(Om.ab),
      Th = (mm, Tm, fm) => {
        if (((mm, Tm) => {
            const fm = (0, Rm.k)("chat");
            return Xf(Tm) && mm.isHeld(fm) ? "hold" === Pf.update(mm.wasPressed(fm), mm.isHeld(fm), performance.now(), qm.c[(0, Em.f)().tapHoldTime].wheelMs) && (pm.d.consumeButton(fm), im.j.gp(Gf.n), !0) : (Pf.release(), !1)
          })(Tm, fm.layer.kind)) return !0;
        const hm = fm.root;
        for (const [xm, wm] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Tm.wasPressed((0, Rm.k)(xm))) {
            const Tm = gf(hm) ? null : rf(hm);
            if (Tm) lf(mm, hm, Tm, wm);
            else if (Wf(fm)) {
              var Am;
              const Tm = mm ? new Set(mm.getEnabledCandidates(hm)) : null;
              null !== (Am = (0, yf.d)()) && void 0 !== Am && Am(wm) && mm && Tm && sf(mm, hm, Tm, null)
            } else mm && uf(mm, hm, wm);
            return !0
          } for (const [xm, wm, Dm] of [
            ["menuPageUp", -1, Ff],
            ["menuPageDown", 1, mh]
          ]) {
          const fm = (0, Rm.k)(xm);
          if (Tm.wasPressed(fm) && Dm.reset(), Dm.update(Tm.isHeld(fm), performance.now())) return Bf(mm, hm, wm), !0
        }
        const am = "popup" === fm.layer.kind;
        return Uf(Tm, "pause") ? (am || (0, Rf.o)() && "menu" !== fm.layer.kind || df(mm, hm, (0, Rf.o)() ? Df.n.SETTINGS : (0, Hf.b)()), !0) : !!Uf(Tm, "leaderboard") && ("home" === fm.layer.kind ? (mm => {
          const Tm = [...mm.querySelectorAll("[data-pad-notifications]")].find(Fm.n);
          Tm && (0, Bm.e)(Tm)
        })(hm) : am || df(mm, hm, Df.n.LOBBY_LEADERBOARD, "inGame" === Dm.c.get("gameState")), !0)
      },
      fh = (mm, Tm, fm) => {
        if (Th(mm, Tm, fm)) return !0;
        const hm = "home" === fm.layer.kind;
        if (Tm.wasPressed((0, Rm.k)("menuSecondary"))) {
          const Tm = mm.getFocused(),
            Am = Tm ? Of(Tm) : null;
          if (Am) return (0, Bm.e)(Am), !0;
          if (hm) {
            const Tm = fm.root.querySelector("[data-pad-search] input");
            return Tm && (0, Fm.r)(Tm, fm.root) ? (mm.setFocus(Tm, {
              byUser: !0
            }), (0, Bm.e)(Tm)) : Dm.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!hm || !Uf(Tm, "inventory")) && (((mm, Tm) => {
          var fm, hm;
          const Am = Tm.querySelector("[data-pad-friends-column]");
          if (!Am || !(0, Fm.n)(Am)) return void(0, Rf.t)((0, Cf.b)("padMenuShortcut"), Df.n.SOCIAL);
          if (vf(mm, Tm)) return;
          const am = null !== (fm = null === (hm = Am.querySelector("[data-pad-friends-start]")) || void 0 === hm ? void 0 : hm.getBoundingClientRect().top) && void 0 !== fm ? fm : -1 / 0,
            xm = mm.getEnabledCandidates(Am),
            wm = xm.filter((mm => mm.getBoundingClientRect().top >= am)),
            Dm = wm.length > 0 ? wm : xm,
            im = Sf(Dm.map((mm => mm.getBoundingClientRect())));
          mm.setFocus(im >= 0 ? Dm[im] : null, {
            byUser: !0
          })
        })(mm, fm.root), !0)
      },
      hh = mm => {
        var Tm, fm, hm;
        const Am = (0, Bm.B)(mm);
        if (null !== Am) return Am;
        const am = (null !== (Tm = null !== (fm = null !== (hm = mm.getAttribute("aria-label")) && void 0 !== hm ? hm : mm.getAttribute("title")) && void 0 !== fm ? fm : mm.textContent) && void 0 !== Tm ? Tm : "").replace(/\s+/g, " ").trim();
        return am ? `${mm.tagName}:${am.slice(0,100)}` : null
      };
    class Ah {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(mm) {
        const Tm = this.history.indexOf(mm);
        if (Tm >= 0) {
          for (const mm of this.history.splice(Tm + 1)) this.remembered.delete(mm);
          return !0
        }
        return this.remembered.delete(mm), this.history.push(mm), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(mm) {
        this.remembered.delete(mm);
        const Tm = this.history.indexOf(mm);
        Tm >= 0 && this.history.splice(Tm, 1)
      }
      remember(mm, Tm, fm, hm) {
        const Am = hh(Tm),
          am = (0, Bm.B)(Tm),
          xm = null !== am && ((mm, Tm) => {
            let fm = 0;
            for (const hm of mm.querySelectorAll("[data-pad-key], [href]"))
              if ((hm.getAttribute("data-pad-key") === Tm || hm.getAttribute("href") === Tm) && (fm++, fm > 1)) return !0;
            return !1
          })(fm, am) ? Math.max(0, this.twins(hm(), am).indexOf(Tm)) : 0;
        this.remembered.set(mm, {
          element: new WeakRef(Tm),
          identity: Am,
          ordinal: xm
        })
      }
      has(mm) {
        return this.remembered.has(mm)
      }
      recall(mm, Tm) {
        var fm, hm;
        const Am = this.remembered.get(mm);
        if (!Am) return null;
        const am = Am.element.deref();
        if (am && Tm.includes(am)) return am;
        if (null === Am.identity) return null;
        const xm = this.twins(Tm, Am.identity);
        return null !== (fm = null !== (hm = xm[Am.ordinal]) && void 0 !== hm ? hm : xm[0]) && void 0 !== fm ? fm : null
      }
      twins(mm, Tm) {
        return mm.filter((mm => hh(mm) === Tm))
      }
    }
    var ah = fm(1281);
    const xh = mm => {
        const Tm = [];
        let fm = mm;
        for (; fm && fm !== document.body;) {
          const mm = getComputedStyle(fm).zIndex;
          "auto" !== mm && Tm.push(Number(mm) || 0), fm = fm.parentElement
        }
        return Tm.reverse()
      },
      wh = (mm, Tm) => {
        const fm = ((mm, Tm) => {
          const fm = Math.max(mm.length, Tm.length);
          for (let am = 0; am < fm; am++) {
            var hm, Am;
            const fm = (null !== (hm = mm[am]) && void 0 !== hm ? hm : 0) - (null !== (Am = Tm[am]) && void 0 !== Am ? Am : 0);
            if (0 !== fm) return fm
          }
          return 0
        })(xh(mm), xh(Tm));
        if (0 !== fm) return fm > 0;
        if (mm.contains(Tm)) return !1;
        if (Tm.contains(mm)) return !0;
        const hm = mm.compareDocumentPosition(Tm);
        return !!(hm & Node.DOCUMENT_POSITION_PRECEDING) || !(hm & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Dh = (mm, Tm) => {
        var fm;
        return null !== (fm = wh(mm.root, Tm.root)) && void 0 !== fm ? fm : mm.order > Tm.order
      },
      ih = (mm, Tm) => Tm.some((Tm => !Tm.contains(mm) && !mm.contains(Tm) && !0 === wh(Tm, mm)));
    let Rh = null,
      ph = null,
      Eh = -1;
    const oh = () => {
        var mm;
        const Tm = null === (mm = document.timeline) || void 0 === mm ? void 0 : mm.currentTime,
          fm = "number" === typeof Tm ? Tm : null;
        if (null !== fm && fm === ph && Eh === (0, ah.d)()) return Rh;
        let hm = null;
        const Am = [],
          am = [...document.querySelectorAll("[data-pad-covers]")].filter(Fm.n);
        for (const xm of (0, ah.f)()) {
          const mm = xm.getRoot(),
            Tm = !!mm && (0, Fm.n)(mm) && !ih(mm, am);
          if (xm.shown && !Tm && Am.push(xm), xm.shown = Tm, !mm || !Tm) continue;
          const fm = {
            layer: xm,
            root: mm,
            order: xm.order
          };
          hm && !Dh(fm, hm) || (hm = fm)
        }
        Rh = hm, ph = fm, Eh = (0, ah.d)();
        for (const xm of Am)(0, ah.i)(xm);
        return Rh
      },
      Oh = () => {
        const mm = oh();
        return !(null === mm || void 0 === mm || !mm.layer.close) && (mm.layer.close(), ph = null, !0)
      },
      Yh = () => {
        var mm, Tm;
        return null !== (mm = null === (Tm = oh()) || void 0 === Tm ? void 0 : Tm.root) && void 0 !== mm ? mm : null
      },
      qh = mm => mm ? {
        ...mm,
        root: Yh()
      } : null;
    let jh = null,
      Vh = null,
      Ih = (0, Em.f)().menuNavigation,
      Kh = null;
    const Qh = new Qm;
    let nh = null;
    im.j.subscribe(Em.c, (() => {
      const mm = (0, Em.f)().menuNavigation;
      mm !== Ih && (Ih = mm, jh = null, Vh = null)
    }));
    const Jh = () => {
        var mm;
        return null !== (mm = jh) && void 0 !== mm ? mm : (0, Em.f)().menuNavigation
      },
      ch = mm => {
        if (bh()) {
          if (Kh = qh(mm), "hybrid" === Jh()) return Qh.lock(), void(Vh = Vh ? null : Yh());
          jh = "focus" === Jh() ? "cursor" : "focus"
        }
      },
      zh = () => {
        const mm = Kh;
        return Kh = null, mm
      };
    let Zh = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const kh = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const fm = Zh.root === mm,
          hm = fm ? Zh.firstSeenMs : Tm,
          Am = Zh.has || Tm - hm > 1e3;
        return (!fm || !Am || Tm - Zh.atMs > 250) && (Zh = {
          root: mm,
          firstSeenMs: hm,
          atMs: Tm,
          has: (0, Fm.k)(mm)
        }), Zh.has
      },
      bh = () => {
        const mm = Yh();
        return null !== mm && kh(mm)
      },
      Sh = () => {
        const mm = oh();
        return Vh && (null === mm || void 0 === mm ? void 0 : mm.root) !== Vh && (Vh = null), (mm => {
          let {
            mode: Tm,
            hasLayer: fm,
            hasCandidates: hm,
            hybridCursorEngaged: Am
          } = mm;
          return fm ? "cursor" !== Tm && hm() ? "hybrid" === Tm && Am ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Jh(),
          hasLayer: null !== mm,
          hasCandidates: () => null !== mm && kh(mm.root),
          hybridCursorEngaged: null !== Vh
        })
      },
      eh = () => "hybrid" === Jh() && bh(),
      Nh = "pad-focused";
    var Gh = fm(4490),
      Xh = fm(4974);
    const Ph = "[data-pad-destructive]",
      Hh = `${Ph}, [data-pad-back]`,
      yh = mm => ({
        rect: mm.getBoundingClientRect(),
        destructive: mm.matches(Ph),
        closes: null !== mm.closest("[data-pad-close-button]"),
        unavailable: mm.matches("[data-pad-unavailable]")
      }),
      Ch = mm => {
        let {
          destructive: Tm,
          closes: fm,
          unavailable: hm
        } = mm;
        return Tm ? fm ? 2 : 3 : hm ? 1 : 0
      },
      rh = mm => {
        let Tm = -1;
        for (let fm = 0; fm < mm.length; fm++) {
          if (Tm < 0) {
            Tm = fm;
            continue
          }
          const hm = mm[fm],
            Am = mm[Tm];
          Ch(hm) === Ch(Am) ? bf(hm.rect, Am.rect) < 0 && (Tm = fm) : Ch(hm) < Ch(Am) && (Tm = fm)
        }
        return Tm
      },
      sh = "[data-pad-tabs]",
      lh = "[data-pad-tab]",
      Mh = (mm, Tm) => {
        const fm = mm.querySelector(`${lh}[data-pad-selected='true']`);
        return fm && Tm.includes(fm) ? fm : null
      },
      uh = (mm, Tm) => {
        let fm = Tm;
        for (let hm = Tm.parentElement; hm && !hm.contains(mm); hm = hm.parentElement) fm = hm;
        return fm
      };
    class Bh {
      constructor() {
        this.contentReturn = null
      }
      redirect(mm, Tm, fm, hm) {
        var Am, am;
        const xm = mm.closest(sh),
          wm = Tm.closest(sh);
        var Dm;
        if (wm && wm !== xm) return xm || (this.contentReturn = new WeakRef(mm)), null !== (Dm = Mh(wm, fm)) && void 0 !== Dm ? Dm : Tm;
        if (!xm || wm) return Tm;
        const im = uh(mm, Tm),
          Rm = null === (Am = this.contentReturn) || void 0 === Am ? void 0 : Am.deref();
        return Rm && im.contains(Rm) && fm.includes(Rm) ? Rm : null !== (am = this.pickRegionStart(im, km(Tm, "y", hm), fm)) && void 0 !== am ? am : Tm
      }
      findTabContent(mm, Tm, fm) {
        const hm = mm.closest(sh);
        if (!hm || !mm.matches(lh) || hm.contains(Tm)) return null;
        const Am = Tm.closest(sh);
        if (Am && Number(Am.dataset.padTabs) <= Number(hm.dataset.padTabs)) return null;
        const am = uh(mm, Tm);
        return fm.some((mm => am.contains(mm) && !mm.closest(Hh))) || !Tm.closest(Hh) ? am : null
      }
      pickContentStart(mm, Tm, fm) {
        return this.contentReturn = null, this.pickRegionStart(mm, km(mm, "y", fm), Tm)
      }
      pickReplacedContentStart(mm, Tm, fm, hm) {
        if (!Tm.contains(mm)) return null;
        const Am = uh(Tm, mm),
          am = fm.filter((mm => Tm.contains(mm) && !Am.contains(mm) && !mm.closest(Hh)));
        return 0 === am.length ? null : (this.contentReturn = null, this.pickRegionStart(Tm, km(am[0], "y", hm), am))
      }
      backToStrip(mm, Tm, fm) {
        if (mm.closest(sh)) return null;
        const hm = rf(fm);
        for (const Am of fm.querySelectorAll(sh)) {
          if (Number(Am.dataset.padTabs) <= 1 || Am === hm) continue;
          const am = Mh(Am, Tm),
            xm = am ? uh(mm, Am).parentElement : null;
          if (am && xm && xm !== fm && fm.contains(xm)) return this.contentReturn = new WeakRef(mm), am
        }
        return null
      }
      pickRegionStart(mm, Tm, fm) {
        const hm = Xm(Tm),
          Am = mm => {
            const Tm = fm.filter((Tm => mm.contains(Tm) && !Tm.closest(sh) && Pm(Tm.getBoundingClientRect(), hm))),
              Am = rh(Tm.map(yh));
            return Am >= 0 ? Tm[Am] : null
          };
        for (const am of (0, Fm.j)(mm)) {
          const mm = Am(am);
          if (mm) return mm
        }
        for (const am of mm.querySelectorAll(sh)) {
          const mm = Mh(am, fm);
          if (mm) return mm
        }
        return Am(mm)
      }
    }
    const Lh = "[data-pad-default-focus], .Dropdown-option.is-selected",
      vh = ".Dropdown-root.is-open > .Dropdown-menu",
      th = "[data-pad-no-step-in]",
      Uh = "[data-pad-tabs]",
      dh = "[data-pad-press-area]",
      gh = mm => {
        let Tm = mm;
        for (let fm = 0; Tm && fm <= 4; fm++, Tm = Tm.parentElement) {
          const fm = Tm.querySelector(".CircleInfo");
          if (fm) return Tm === mm || Tm.querySelectorAll(Fm.d).length <= 1 ? fm : null;
          if (Tm !== mm && Tm.querySelectorAll(Fm.d).length > 1) return null
        }
        return null
      },
      Wh = (mm, Tm, fm) => {
        (0, Bm.m)(mm, Tm, fm);
        const hm = null !== mm && void 0 !== mm && mm.isConnected ? gh(mm) : null,
          Am = gh(Tm);
        hm !== Am && (0, Bm.m)(hm, Am, Am ? (0, Bm.y)(Am) : fm, {
          leaveBelow: mm,
          enterBelow: Tm
        })
      },
      Fh = mm => mm.getBoundingClientRect(),
      mA = (mm, Tm, fm) => {
        const hm = new Set(fm);
        for (let Am = mm; Am; Am = Am === Tm ? null : Am.parentElement)
          if (hm.has(Am)) return Am;
        return null
      },
      TA = (mm, Tm) => !mm.root || mm.root === Tm || Tm.matches(vh) && mm.root.contains(Tm);
    const fA = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Ah, this.tabStripNav = new Bh, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Ym.c)(Om.y), this.dpadRepeats = new Map(Om.G.map((mm => [mm, (0, Ym.c)(Om.H)]))), this.stickRepeat = new Om.e((0, Ym.c)(Om.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const mm = pm.d.register({
            name: "focus",
            isActive: () => (0, om.m)() && "focus" === Sh(),
            onFrame: mm => {
              this.onFrame(mm)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: mm => (0, pm.g)(mm) || mm === (0, Rm.k)("menuConfirm") && (0, Bm.G)((0, om.b)())
          }),
          Tm = (0, ah.l)((mm => {
            const Tm = (0, ah.r)(mm);
            null === mm.memoryKey && this.memory.forget(Tm), Tm === this.layerKey && (this.layerKey = null)
          }));
        let fm = -1 / 0;
        const hm = xm.g.onFrame((mm => {
            (0, om.m)() || mm.timestampMs - fm < 100 || (fm = mm.timestampMs, oh())
          })),
          Am = mm => {
            mm.isTrusted && mm.target instanceof Element && xm.g.getActivePad() && this.noteChosenStop(mm.target)
          };
        return document.addEventListener("click", Am, !0), () => {
          mm(), Tm(), hm(), document.removeEventListener("click", Am, !0), this.deactivate()
        }
      }
      noteChosenStop(mm) {
        var Tm, fm;
        const hm = oh();
        if (!hm || !hm.root.contains(mm)) return;
        const Am = null !== (Tm = null === (fm = mm.closest(".Dropdown-root")) || void 0 === fm ? void 0 : fm.querySelector(".Dropdown-control")) && void 0 !== Tm ? Tm : mm,
          am = mA(Am, hm.root, this.getEnabledCandidates(hm.root));
        if (!am) return;
        const xm = (0, ah.r)(hm.layer);
        xm === this.layerKey && hm.root === this.layerRoot || this.beginLayer(hm, xm), this.wasActive ? this.setFocus(am, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = am, this.lastFocusedCentre = (0, Bm.y)(am), this.rememberFocus(am), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
      deactivate() {
        var mm;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const mm of this.dpadRepeats.values()) mm.reset();
          this.stickRepeat.reset(), null !== (mm = this.focused) && void 0 !== mm && mm.isConnected && Wh(this.focused, null, (0, Bm.y)(this.focused)), this.notify()
        }
      }
      setFocus(mm) {
        var Tm;
        let {
          scroll: fm = !0,
          byUser: hm = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (hm && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), mm === this.focused) return;
        const Am = null !== (Tm = this.focused) && void 0 !== Tm && Tm.isConnected ? this.focused : null;
        if (this.focused = mm, mm) {
          fm && (mm.classList.add(Nh), mm.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), hm && ((mm, Tm) => {
            const fm = Tm.closest("[data-pad-friends-column]");
            fm && mm && !fm.contains(mm) && (Lf = new WeakRef(mm))
          })(Am, mm);
          const Tm = (0, Bm.y)(mm);
          this.lastFocusedCentre = Tm, this.movedInLayer && this.rememberFocus(mm), Wh(Am, mm, Tm), "false" === mm.getAttribute("aria-pressed") && mm.closest("[data-pad-select-on-focus]") && (0, Bm.e)(mm)
        } else Am && Wh(Am, null, (0, Bm.y)(Am));
        this.notify()
      }
      rememberFocus(mm) {
        const Tm = this.layerRoot;
        this.layerKey && Tm && this.memory.remember(this.layerKey, mm, Tm, (() => this.getEnabledCandidates(Tm)))
      }
      noteCursorActivation(mm) {
        const Tm = oh();
        if (!Tm || !Tm.root.contains(mm)) return;
        const fm = this.getEnabledCandidates(Tm.root),
          hm = new Set(fm);
        let Am = mm;
        for (; Am && !hm.has(Am);) Am = Am === Tm.root ? null : Am.parentElement;
        if (!(Am instanceof HTMLElement)) return;
        const am = (0, ah.r)(Tm.layer);
        this.memory.enter(am), this.memory.remember(am, Am, Tm.root, (() => fm))
      }
      notePageEnteredByCursor(mm) {
        return this.memory.enter(mm)
      }
      recallStop(mm, Tm) {
        return this.findRemembered(mm, Tm)
      }
      focusWhenFound(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: mm,
          untilMs: performance.now() + Tm,
          holdWhile: fm
        }
      }
      getEnabledCandidates(mm) {
        return (0, Fm.f)(mm).filter((mm => !(0, Fm.u)(mm)))
      }
      onFrame(mm) {
        var Tm;
        const fm = oh();
        if (!fm) return;
        const hm = null !== (Tm = this.findOpenDropdown(fm)) && void 0 !== Tm ? Tm : fm,
          Am = performance.now(),
          am = (0, ah.r)(hm.layer);
        if (am !== this.layerKey || hm.root !== this.layerRoot) {
          const Tm = this.focused;
          if (null !== this.layerKey && hm.root === this.layerRoot && Tm && (0, Fm.r)(Tm, hm.root)) this.continueLayer(am, Tm), this.wasActive || this.resume(hm.root, Am);
          else {
            const Tm = !this.wasActive && !mm.wokeDevice,
              xm = "death" === this.layerKind || Tm,
              wm = this.enterLayer(hm, am);
            "popup" !== hm.layer.kind || hm !== fm || wm ? "menu" === hm.layer.kind && xm && "inGame" === Dm.c.get("gameState") && !(0, wf.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Am + Gh.c) : (this.pressGuardExtends = Tm, this.pressGuardUntilMs = Am + (Tm ? Gh.c : xm ? 500 : 250))
          }
        } else this.wasActive || this.resume(hm.root, Am);
        if (this.layerKind = hm.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), mm.wokeDevice && this.focusPointedStop(hm.root), this.validateFocus(hm, Am), Am < this.pressGuardUntilMs && this.pressGuardExtends && (mm.wasPressed((0, Rm.k)("menuConfirm")) || mm.wasPressed((0, Rm.k)("menuBack"))) && (this.pressGuardUntilMs = Am + Gh.c), Am >= this.pressGuardUntilMs && this.handleButtons(mm, hm)) return;
        const xm = "hybrid" === Jh();
        if (xm && (mm => {
            const Tm = Yh();
            return Tm !== nh && (nh = Tm, Qh.lock()), Qh.update(mm, (0, Em.f)().moveDeadzone)
          })(mm.leftStick)) return wm = this.getHandoff(), Kh = qh(wm), Vh = Yh(), void pm.d.handOffHeldInput();
        var wm;
        this.handleDirections(mm, hm, Am, !xm), this.handleScroll(mm, hm)
      }
      findOpenDropdown(mm) {
        const Tm = mm.root.querySelector(vh);
        if (!Tm || !(0, Fm.n)(Tm)) return null;
        let fm = this.dropdownLayers.get(Tm);
        return fm || (this.dropdownLayerCounter++, fm = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: mm.layer.kind,
          getRoot: () => Tm,
          close: () => {
            (0, Bm.i)(Tm)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Tm, fm)), {
          layer: fm,
          root: Tm,
          order: mm.order
        }
      }
      focusPointedStop(mm) {
        const Tm = (0, om.b)(),
          fm = Tm ? document.elementFromPoint(Tm.x, Tm.y) : null;
        if (!fm || !mm.contains(fm)) return;
        const hm = mA(fm, mm, this.getEnabledCandidates(mm));
        hm && this.setFocus(hm, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(mm, Tm) {
        const fm = this.beginLayer(mm, Tm),
          hm = zh();
        return hm && TA(hm, mm.root) ? (this.takeOver(mm.root, hm, this.enteredLayerAtMs), fm) : (this.restoreLayerFocus(mm.root, fm), fm)
      }
      beginLayer(mm, Tm) {
        return this.layerKey = Tm, this.layerRoot = mm.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Tm)
      }
      restoreLayerFocus(mm, Tm) {
        const fm = Tm && this.layerKey ? this.findRemembered(mm, this.layerKey) : null;
        this.restoredFromMemory = null !== fm, this.setFocus(null !== fm && void 0 !== fm ? fm : this.pickInitial(mm, {
          waitForContent: !0
        }))
      }
      continueLayer(mm, Tm) {
        this.layerKey = mm;
        const fm = this.memory.enter(mm);
        this.restoreOnFocusLoss = fm, this.movedInLayer && !fm && this.rememberFocus(Tm)
      }
      resume(mm, Tm) {
        var fm;
        const hm = zh();
        hm && TA(hm, mm) ? this.takeOver(mm, hm, Tm) : null !== (fm = this.focused) && void 0 !== fm && fm.isConnected && Wh(null, this.focused, (0, Bm.y)(this.focused))
      }
      pickPreferred(mm) {
        var Tm;
        return null !== (Tm = this.layerKey ? this.findRemembered(mm, this.layerKey) : null) && void 0 !== Tm ? Tm : this.pickInitial(mm, {
          waitForContent: !0
        })
      }
      findRemembered(mm, Tm) {
        return this.memory.has(Tm) ? this.memory.recall(Tm, this.getEnabledCandidates(mm)) : null
      }
      getHandoff() {
        var mm, Tm, fm;
        const hm = null !== (mm = this.focused) && void 0 !== mm && mm.isConnected ? this.focused : null,
          Am = null !== (Tm = this.layerRoot) && void 0 !== Tm && Tm.isConnected ? this.layerRoot : null;
        return {
          point: hm ? (0, Bm.y)(hm) : null !== (fm = this.lastFocusedCentre) && void 0 !== fm ? fm : this.getLayerStartPoint(Am),
          element: hm,
          direction: null
        }
      }
      getLayerStartPoint(mm) {
        if (!mm) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Tm = this.pickInitial(mm, {
          includeDisabled: !0
        });
        return (0, Bm.y)(null !== Tm && void 0 !== Tm ? Tm : mm)
      }
      takeOver(mm, Tm, fm) {
        const {
          element: hm,
          direction: Am,
          point: am
        } = Tm, xm = hm instanceof HTMLElement && (0, Fm.r)(hm, mm) ? hm : null;
        if (!Am) {
          const Tm = this.focused;
          return xm ? this.setFocus(xm, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(mm, am), void(this.focused && this.focused === Tm && this.focused.isConnected && Wh(null, this.focused, (0, Bm.y)(this.focused)))
        }
        if (this.dpadRepeats.get(Am).update(!0, fm), xm) return this.setFocus(xm, {
          scroll: !1,
          byUser: !0
        }), void this.move(mm, Am, fm, !0);
        const wm = this.getEnabledCandidates(mm),
          Dm = wm.map(Fh),
          im = Qf(new DOMRect(am.x, am.y, 0, 0), Dm, Am),
          Rm = im >= 0 ? im : kf(am, Dm);
        this.setFocus(Rm >= 0 ? wm[Rm] : this.pickInitial(mm), {
          byUser: !0
        })
      }
      focusNearest(mm, Tm) {
        const fm = this.getEnabledCandidates(mm),
          hm = kf(Tm, fm.map(Fh));
        this.setFocus(hm >= 0 ? fm[hm] : this.pickInitial(mm), {
          byUser: !0
        })
      }
      pickDefault(mm) {
        let {
          includeDisabled: Tm = !1,
          exclude: fm = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hm = [...mm.querySelectorAll(Lh)].filter((hm => (null === fm || void 0 === fm || !fm.has(hm)) && (Tm ? (0, Fm.y)(hm, mm) : (0, Fm.r)(hm, mm)))),
          Am = rh(hm.map(yh));
        return Am >= 0 ? hm[Am] : null
      }
      pickNewAreaStart(mm, Tm) {
        const fm = [...mm.querySelectorAll(dh)].filter(Fm.n);
        for (const hm of [...(0, Fm.j)(mm), ...fm]) {
          if (Tm.has(hm)) continue;
          const mm = this.getEnabledCandidates(hm),
            fm = rh(mm.map(yh));
          if (fm >= 0) return mm[fm]
        }
        return null
      }
      pickInitial(mm) {
        let {
          includeDisabled: Tm = !1,
          waitForContent: fm = !1,
          enteredAtMs: hm = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Am = this.pickDefault(mm, {
          includeDisabled: Tm
        });
        if (Am) return Am;
        const am = mm => Tm ? (0, Fm.f)(mm) : this.getEnabledCandidates(mm);
        let xm = [];
        for (const Em of (0, Fm.j)(mm))
          if (xm = am(Em), xm.length > 0) break;
        if (0 === xm.length) {
          if (fm && performance.now() - hm < 1e4 && (0, Fm.m)(mm)) return null;
          xm = am(mm)
        }
        const wm = xm.map(Fh),
          Dm = Xm(null),
          im = xm.filter(((mm, Tm) => Pm(wm[Tm], Dm))),
          Rm = im.length > 0 ? im : xm,
          pm = rh(Rm.map(yh));
        return pm >= 0 ? Rm[pm] : null
      }
      validateFocus(mm, Tm) {
        if (this.pendingFocus) {
          var fm, hm;
          const Am = this.pendingFocus.find();
          if (Am && (0, Fm.r)(Am, mm.root)) return this.pendingFocus = null, void this.setFocus(Am, {
            byUser: !0
          });
          Tm > this.pendingFocus.untilMs && (null === (fm = (hm = this.pendingFocus).holdWhile) || void 0 === fm || !fm.call(hm)) && (this.pendingFocus = null)
        }
        const Am = this.focused,
          am = !!Am && (0, Fm.r)(Am, mm.root);
        if (!(!am && Am && Am === this.lastActivated && Tm - this.lastActivatedAtMs < 5e3 && mm.root.contains(Am) && (0, Fm.n)(Am) && (0, Fm.u)(Am))) {
          if (!am && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Tm, void this.restoreLayerFocus(mm.root, !0);
          if ((!am || !this.movedInLayer && !this.scrolledInLayer) && !(Tm - this.lastRefocusCheckMs < (am ? 200 : 50)))
            if (this.lastRefocusCheckMs = Tm, am) {
              const fm = Tm - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(mm.root) : null,
                hm = null !== fm && void 0 !== fm ? fm : this.restoredFromMemory ? null : this.pickDefault(mm.root);
              hm && hm !== Am && this.setFocus(hm)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Tm = this.pendingFocus;
                return this.focusNearest(mm.root, this.lastFocusedCentre), void(this.pendingFocus = Tm)
              }
              this.setFocus(this.pickPreferred(mm.root))
            }
        }
      }
      handleButtons(mm, Tm) {
        if (mm.wasPressed((0, Rm.k)("menuToggleCursor"))) return ch(this.getHandoff()), !0;
        if (mm.wasPressed((0, Rm.k)("menuBack"))) {
          const mm = (0, Bm.i)(Tm.root);
          return mm ? this.setFocus(mm, {
            byUser: !0
          }) : vf(this, Tm.root) || ((0, Bm.f)(Tm.root) ? this.returnToOpener(Tm.root) : this.backToStrip(Tm.root) || Oh()), !0
        }
        const fm = (0, Rm.k)("menuConfirm");
        var hm, Am;
        mm.wasPressed(fm) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (hm = null === (Am = this.focused) || void 0 === Am ? void 0 : Am.getAttribute("data-pad-repeat")) && void 0 !== hm ? hm : null, this.confirmRepeated = mm.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (mm.wasReleased(fm)) {
          const mm = this.confirmPressedOn;
          if (this.confirmPressedOn = null, mm && !this.confirmRepeated && mm === this.focused && mm.isConnected && !(0, Fm.u)(mm)) {
            const fm = mm.matches("[data-pad-tab]") ? mm.closest(Uh) : null;
            fm ? this.enterTab(mm, fm, Tm.root, performance.now()) : this.activate(mm)
          }
          return !0
        }
        return this.repeatConfirm(mm, fm), fh(this, mm, Tm)
      }
      repeatConfirm(mm, Tm) {
        const fm = this.confirmPressedOn;
        fm && null !== this.confirmRepeatKey && mm.isHeld(Tm) && (fm === this.focused && fm.isConnected && !(0, Fm.u)(fm) && fm.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? fm.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(fm)) : this.confirmRepeatKey = null)
      }
      backToStrip(mm) {
        const Tm = this.focused;
        if (!(0, Em.f)().menuBackToCategories) return !1;
        const fm = null !== Tm && void 0 !== Tm && Tm.isConnected ? this.tabStripNav.backToStrip(Tm, this.getEnabledCandidates(mm), mm) : null;
        return fm && this.setFocus(fm, {
          byUser: !0
        }), null !== fm
      }
      returnToOpener(mm) {
        const Tm = this.lastActivatedKey;
        Tm && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var fm;
          return null !== (fm = this.getEnabledCandidates(mm).find((mm => (0, Bm.B)(mm) === Tm))) && void 0 !== fm ? fm : null
        })))
      }
      activate(mm) {
        var Tm;
        if ((0, Xh.c)(mm) || (0, Bm.F)(mm)) return;
        this.lastActivatedKey = null !== (Tm = (0, Bm.B)(mm)) && void 0 !== Tm ? Tm : this.lastActivatedKey, this.lastActivated = mm, this.lastActivatedAtMs = performance.now(), this.rememberFocus(mm);
        const fm = this.layerRoot;
        if (fm) {
          const Tm = new Set(fm.querySelectorAll(Lh)),
            hm = new Set(fm.querySelectorAll(`[data-pad-initial-area], ${dh}`)),
            Am = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Am;
            return (0, Fm.r)(mm, fm) ? null : null !== (Am = this.pickDefault(fm, {
              exclude: Tm
            })) && void 0 !== Am ? Am : this.pickNewAreaStart(fm, hm)
          }), 5e3, (() => mm.isConnected && (0, Fm.u)(mm) && performance.now() - Am < 6e4))
        }(0, Bm.e)(mm), (0, Bm.g)(mm)
      }
      handleDirections(mm, Tm, fm, hm) {
        const Am = Xf(Tm.layer.kind) ? (0, Rm.k)("chat") : null;
        for (const wm of Om.G) {
          this.dpadRepeats.get(wm).update(mm.isHeld(wm), fm) && (wm !== Am || mm.wasPressed(wm)) && this.move(Tm.root, wm, fm, !0)
        }
        const am = hm ? (0, Om.n)(mm.leftStick, (0, Em.f)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          xm = this.stickRepeat.update((0, Om.gb)(am), fm);
        if (xm && this.move(Tm.root, xm, fm, !0), this.retryMove && fm >= this.retryMove.atMs) {
          const {
            direction: mm
          } = this.retryMove;
          this.retryMove = null, this.move(Tm.root, mm, fm, !1)
        }
      }
      move(mm, Tm, fm, hm) {
        var Am;
        let am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Am = this.tabOpenWait) || void 0 === Am ? void 0 : Am.wait) && Tm === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const xm = this.focused;
        if (!xm || !xm.isConnected) {
          const Tm = this.pickInitial(mm);
          return void(Tm && this.setFocus(Tm, {
            byUser: !0
          }))
        }
        const wm = "Left" === Tm || "Right" === Tm,
          Dm = wm ? (0, Xh.c)(xm) : null;
        if (Dm) return void Dm.adjust("Left" === Tm ? -1 : 1);
        const im = mm => null !== mm.closest("[data-pad-friends-column]"),
          Rm = im(xm),
          pm = Fh(xm),
          Em = wm || xm.closest(Uh) ? null : (mm => {
            const Tm = new Map;
            return fm => {
              const hm = fm.closest(Uh);
              if (!hm) return !1;
              let Am = Tm.get(hm);
              if (void 0 === Am) {
                const fm = Fh(hm);
                Am = Kf(mm, fm) && (fm.right <= mm.left || fm.left >= mm.right), Tm.set(hm, Am)
              }
              return Am
            }
          })(pm),
          om = null !== xm.closest(th),
          Om = this.getEnabledCandidates(mm).filter((mm => mm !== xm && (wm || im(mm) === Rm) && !(null !== Em && void 0 !== Em && Em(mm)) && (om || !mm.closest(th)))),
          Ym = Om.map(Fh),
          qm = km(xm, "y", mm),
          jm = Xm(qm);
        if (!am && !Pm(pm, jm)) {
          const mm = Om.filter(((mm, Tm) => Pm(Ym[Tm], jm)));
          if (mm.length > 0) {
            const Tm = {
              x: jm.left + jm.width / 2,
              y: jm.top + jm.height / 2
            };
            return void this.setFocus(mm[kf(Tm, mm.map(Fh))], {
              byUser: !0
            })
          }
        }
        const Vm = wm ? ((mm, Tm, fm) => {
            const hm = Fh(mm),
              Am = mm.closest(Uh),
              am = Am ? Fh(Am) : null;
            return Tm.map(((Tm, xm) => {
              const wm = fm[xm];
              if (wm.bottom > hm.top && wm.top < hm.bottom) return !0;
              const Dm = Tm.closest(Uh);
              if (Am && am) return Dm !== Am && (null !== Dm || wm.bottom <= am.top || wm.top >= am.bottom);
              if (Dm) return !Kf(hm, Fh(Dm));
              let im = mm;
              for (let fm = mm.parentElement; fm && !fm.contains(Tm); fm = fm.parentElement) im = fm;
              const Rm = Fh(im);
              return wm.right > Rm.left && wm.left < Rm.right
            }))
          })(xm, Om, Ym) : void 0,
          Im = wm && !xm.closest(Uh) ? (mm => mm.map((mm => !mm.closest(Hh))))(Om) : void 0,
          Km = ((mm, Tm) => {
            const fm = [];
            for (let Am = mm; Am; Am = Am.parentElement) fm.push(Am);
            const hm = new Map;
            return fm.forEach(((mm, Tm) => {
              hm.set(mm, fm.length - 1 - Tm)
            })), Tm.map((mm => {
              for (let Tm = mm; Tm; Tm = Tm.parentElement) {
                const mm = hm.get(Tm);
                if (void 0 !== mm) return mm
              }
              return -1
            }))
          })(xm, Om),
          Qm = wm ? "x" : "y",
          nm = km(xm, Qm, mm);
        let Jm = Qf(pm, Ym, Tm, Km, Vm, Im);
        if (Jm >= 0 && nm && !nm.contains(Om[Jm])) {
          const mm = Om.flatMap(((mm, Tm) => nm.contains(mm) ? [Tm] : [])),
            fm = Tm => Tm && mm.map((mm => Tm[mm])),
            hm = Qf(pm, mm.map((mm => Ym[mm])), Tm, mm.map((mm => Km[mm])), fm(Vm), fm(Im));
          Jm = hm >= 0 ? mm[hm] : Jm
        }
        if (Jm >= 0) return void this.moveTo(xm, Om[Jm], Om, mm, Tm, am);
        if (!hm) return;
        const cm = "Right" === Tm || "Down" === Tm ? 1 : -1;
        if (nm && Nm(nm, Qm, cm)) {
          const mm = "y" === Qm ? nm.clientHeight : nm.clientWidth;
          Gm(nm, Qm, cm * mm * .5), this.retryMove = {
            direction: Tm,
            atMs: fm + 80
          }
        }
      }
      moveTo(mm, Tm, fm, hm, Am, am) {
        const xm = this.tabStripNav.findTabContent(mm, Tm, fm);
        xm && "true" !== mm.dataset.padSelected ? this.openTab(mm, xm, hm, Am) : am && !xm || this.setFocus(this.tabStripNav.redirect(mm, Tm, fm, hm), {
          byUser: !0
        })
      }
      openTab(mm, Tm, fm, hm) {
        const Am = Tm.parentElement;
        (0, Bm.e)(mm), this.focusWhenFound((() => "true" !== mm.dataset.padSelected ? null : Tm.isConnected ? this.tabStripNav.pickContentStart(Tm, this.getEnabledCandidates(fm), fm) : Am ? this.tabStripNav.pickReplacedContentStart(mm, Am, this.getEnabledCandidates(fm), fm) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: hm
        }
      }
      enterTab(mm, Tm, fm, hm) {
        this.move(fm, (mm => {
          const Tm = [...mm.querySelectorAll(lh)].filter((Tm => Tm.closest(sh) === mm));
          if (Tm.length >= 2) {
            const mm = Tm[0].getBoundingClientRect(),
              fm = Tm[1].getBoundingClientRect();
            return Math.abs(fm.top - mm.top) > Math.abs(fm.left - mm.left) ? "Right" : "Down"
          }
          const fm = mm.getBoundingClientRect();
          return fm.height > fm.width ? "Right" : "Down"
        })(Tm), hm, !1, !0), this.focused !== mm || this.pendingFocus || this.activate(mm)
      }
      handleScroll(mm, Tm) {
        const fm = (0, Om.n)(mm.rightStick, .2);
        if (0 === fm.x && 0 === fm.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const hm = mm.dtMs / 1e3;
        for (const am of ["x", "y"]) {
          var Am;
          const mm = fm[am];
          if (0 === mm) continue;
          const xm = null !== (Am = km(this.focused, am, Tm.root)) && void 0 !== Am ? Am : Sm(Tm.root, am);
          if (!xm) continue;
          const wm = Math.sign(mm) * mm * mm * 1500 * hm + this.scrollRemainder[am],
            Dm = Math.trunc(wm);
          this.scrollRemainder[am] = wm - Dm, 0 !== Dm && (Gm(xm, am, Dm), this.scrolledInLayer = !0)
        }
      }
    };
    var hA = fm(8120);
    var AA = fm(8666);
    const aA = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      xA = {
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
          ...aA,
          minIntervalMs: 1e3
        },
        preview: {
          ...aA,
          minIntervalMs: 0
        }
      };
    const wA = new class {
        constructor(mm) {
          this.deps = mm, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = mm => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", mm))
          }
        }
        play(mm, Tm) {
          const fm = xA[mm];
          if (!this.deps.isVibrationOn() || fm.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const hm = this.lastPlayedMs[mm];
          if (void 0 !== hm && Tm - hm < fm.minIntervalMs) return !1;
          const Am = this.deps.getActuator();
          if (!Am) return !1;
          this.lastPlayedMs[mm] = Tm;
          const {
            duration: am,
            strongMagnitude: xm,
            weakMagnitude: wm
          } = fm;
          try {
            Am.playEffect("dual-rumble", {
              duration: am,
              strongMagnitude: xm,
              weakMagnitude: wm
            }).catch(this.logFailure)
          } catch (Dm) {
            this.logFailure(Dm)
          }
          return !0
        }
      }({
        getActuator: () => (mm => {
          const Tm = null === mm || void 0 === mm ? void 0 : mm.vibrationActuator;
          return "function" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.playEffect) ? Tm : null
        })(xm.g.getActiveGamepad()),
        isVibrationOn: () => (0, Em.f)().vibration,
        isPadInUse: om.m
      }),
      DA = mm => {
        wA.play(mm, performance.now())
      };
    var iA = fm(8127),
      RA = fm(2903),
      pA = fm(115),
      EA = fm(37),
      oA = fm(690);
    class OA {
      constructor(mm) {
        this.deps = mm
      }
      check() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Tm = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Tm) return "skipped";
        const fm = mm ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === fm || this.deps.readReportedVisitId() === fm ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(fm), this.deps.IO(Tm, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const YA = "controllerUsageReportedVisit";
    var qA = fm(1354),
      jA = fm(1713),
      VA = fm(675),
      IA = fm(1449),
      KA = fm(1259);
    const QA = mm => ({
        translationKey: `controller:${mm}`
      }),
      nA = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: QA("padButtonView"),
        Menu: QA("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: QA("padButtonDpadUp"),
        Down: QA("padButtonDpadDown"),
        Left: QA("padButtonDpadLeft"),
        Right: QA("padButtonDpadRight"),
        Home: QA("padButtonHome"),
        LeftStick: QA("padButtonLeftStick"),
        RightStick: QA("padButtonRightStick")
      },
      JA = {
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
          View: QA("padButtonCreate"),
          Menu: QA("padButtonOptions")
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
      cA = (mm, Tm) => {
        var fm;
        const hm = null !== (fm = JA[mm][Tm]) && void 0 !== fm ? fm : nA[Tm];
        return "string" === typeof hm ? hm : (0, Am.w)(KA.e.get().getCurrentLanguageCode(), hm.translationKey)
      },
      zA = mm => {
        let {
          glyph: Tm,
          family: fm,
          className: hm
        } = mm;
        const Am = (0, om.A)(),
          am = null !== fm && void 0 !== fm ? fm : Am,
          xm = (0, iA.f)(am, Tm);
        return (0, rm.jsx)("span", {
          className: Cm()("ControllerGlyph", hm),
          role: "img",
          "aria-label": cA(am, Tm),
          style: {
            "--pad-glyph-mask": `url(${xm})`,
            "--pad-glyph-aspect": (0, iA.d)(am, Tm)
          }
        })
      };
    var ZA = fm(1884);
    const kA = mm => {
      let {
        action: Tm
      } = mm;
      const {
        t: fm
      } = (0, Am.A)();
      switch (Tm.kind) {
        case "reload":
          return (0, rm.jsx)("span", {
            children: fm("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, rm.jsx)(ZA.b, {
            text: Tm.description ? [{
              icon: Tm.icon
            }, ` ${Tm.description}`] : [{
              icon: Tm.icon
            }]
          });
        case "touchButton":
          return (0, rm.jsx)(ZA.b, {
            text: Tm.label
          })
      }
    };
    var bA = fm(8668);
    const SA = mm => {
      let {
        hold: Tm
      } = mm;
      return (0, rm.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Tm.holdMs}ms`
        },
        children: (0, rm.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Tm.id)
    };
    var eA = fm(8688),
      NA = fm(8697),
      GA = fm(8699),
      XA = fm(8683);
    const PA = () => {
        const {
          gameState: mm
        } = (0, Dm.m)(["gameState"]), Tm = (0, om.z)(), [hm, Am] = (0, Hm.useState)(!1), [am, xm] = (0, Hm.useState)(!1);
        return (0, Hm.useEffect)((() => {
          "inGame" === mm && Am(!0)
        }), [mm]), (0, Hm.useEffect)((() => {
          if (!hm) return;
          let mm = null,
            Tm = !1;
          return (VA.A ? Promise.all([fm.e(72), fm.e(89), fm.e(269), fm.e(189), fm.e(224), fm.e(223), fm.e(88)]).then((() => fm(40630))).then((mm => mm.startWasmPadGameplay)) : Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(96), fm.e(75), fm.e(74), fm.e(73), fm.e(185), fm.e(228), fm.e(77), fm.e(89), fm.e(186), fm.e(222), fm.e(95), fm.e(225), fm.e(240), fm.e(120), fm.e(211), fm.e(86), fm.e(241), fm.e(76), fm.e(119), fm.e(242), fm.e(224), fm.e(158)]).then((() => fm(40749))).then((mm => mm.startPadGameplay))).then((fm => {
            Tm || (mm = fm())
          })).catch((mm => {
            console.error("Pad gameplay failed to load", mm), Tm || xm(!0)
          })), () => {
            var fm;
            Tm = !0, null === (fm = mm) || void 0 === fm || fm()
          }
        }), [hm]), (0, Hm.useEffect)((() => {
          am && Tm && (xm(!1), qA.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((mm => {
            !0 === mm && (0, jA.reloadBloxd)()
          })))
        }), [am, Tm]), (0, rm.jsxs)(rm.Fragment, {
          children: [(0, rm.jsx)(HA, {}), (0, rm.jsx)(yA, {}), (0, rm.jsx)(CA, {})]
        })
      },
      HA = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, om.z)(), {
          gameState: fm,
          isUiHidden: hm
        } = (0, Dm.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: am
        } = (0, Em.n)(), xm = (0, bA.k)(), wm = (0, bA.n)(), [im, pm] = (0, Hm.useState)(GA.e);
        return (0, IA.g)(XA.k, pm), !Tm || am || hm || "inGame" !== fm || !xm && !im ? null : (0, rm.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [xm && (0, rm.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, rm.jsx)(zA, {
              glyph: (0, Rm.k)("actionButton")
            }), (0, rm.jsx)(kA, {
              action: xm
            }), wm && (0, rm.jsx)("span", {
              className: "PadActionHintMore",
              children: mm("controller:gameplayActionWheelHint")
            })]
          }), im && (0, rm.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, rm.jsx)(zA, {
              glyph: (0, Rm.k)("pickBlock")
            }), (0, rm.jsx)("span", {
              children: mm("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      yA = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, om.z)(), {
          gameState: fm,
          isUiHidden: hm
        } = (0, Dm.m)(["gameState", "isUiHidden"]), [am, xm] = (0, Hm.useState)(eA.b);
        return (0, IA.g)(XA.i, xm), Tm && !hm && "inGame" === fm && am ? (0, rm.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, rm.jsx)("span", {
            children: mm("controller:gameplayDropStack")
          }), (0, rm.jsx)(SA, {
            hold: am
          })]
        }) : null
      },
      CA = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, om.z)(), {
          gameState: fm,
          isUiHidden: hm
        } = (0, Dm.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: am
        } = (0, Em.n)(), [xm, wm] = (0, Hm.useState)(NA.c);
        return (0, IA.g)(XA.h, wm), Tm && !hm && "inGame" === fm && xm ? (0, rm.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!am && (0, rm.jsx)(zA, {
            glyph: (0, Rm.k)("attack")
          }), (0, rm.jsx)("span", {
            children: mm("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var rA = fm(8702),
      sA = fm(1928),
      lA = fm(2391),
      MA = fm(8107);
    const uA = mm => mm && !(0, rA.e)(sA.b.get("shopInfo")),
      BA = () => {
        const mm = "inGame" === (0, Dm.m)(["gameState"]).gameState;
        return (0, lA.c)("shopInfo", (() => {
          (0, MA.j)(uA(mm))
        })), (0, Hm.useEffect)((() => {
          (0, MA.j)(uA(mm))
        }), [mm]), null
      },
      LA = () => {
        const {
          t: mm
        } = (0, Am.A)(), {
          hideButtonHints: Tm
        } = (0, Em.n)();
        (0, om.A)();
        const fm = (0, rT.l)();
        return (0, Hm.useEffect)((() => (() => {
          const mm = pm.d.register({
              name: "inventory",
              isActive: af.isActive,
              onFrame: af.onFrame,
              onDeactivate: af.onDeactivate,
              wakePressActs: af.wakePressActs
            }),
            Tm = mm => {
              af.noteRealPointer(mm), af.shouldBlockRealPointer(mm) && mm.stopPropagation()
            };
          for (const xm of xf) window.addEventListener(xm, Tm, !0);
          const fm = (0, Wm.m)((() => {
              "inventory" !== pm.d.getActiveConsumerName() && af.forgetSurface()
            })),
            hm = mm => {
              const Tm = mm.target;
              (0, om.m)() && (0, Um.k)(Tm) && Tm.closest(nT) && (0, Wm.i)() && (0, Wm.p)(Tm)
            };
          document.addEventListener("focusout", hm, !0);
          const {
            invalidate: Am,
            onScroll: am
          } = af.targets;
          return document.addEventListener("scroll", am, !0), window.addEventListener("resize", Am), () => {
            mm(), fm();
            for (const mm of xf) window.removeEventListener(mm, Tm, !0);
            document.removeEventListener("scroll", am, !0), document.removeEventListener("focusout", hm, !0), window.removeEventListener("resize", Am), af.targets.disconnect()
          }
        })()), []), (0, rm.jsxs)(rm.Fragment, {
          children: [(0, rm.jsx)(um, {
            placer: af.ring,
            className: "InventorySlotCursorRing"
          }), fm.showing && !Tm && (0, rm.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: gm(fm).map((Tm => {
              let {
                actions: hm,
                labelKey: Am
              } = Tm;
              return (0, rm.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [hm.map((mm => (0, rm.jsx)(zA, {
                  glyph: (0, Rm.k)(mm)
                }, mm))), (0, rm.jsx)("span", {
                  children: mm(`controller:${Am}`)
                }), "inventoryDrop" === Am && fm.dropStackHold && (0, rm.jsx)(SA, {
                  hold: fm.dropStackHold
                })]
              }, Am)
            }))
          })]
        })
      },
      vA = [{
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
      tA = mm => Array.from(mm).map((mm => ({
        type: "char",
        char: mm,
        width: 1
      }))),
      UA = function(mm) {
        return {
          type: "command",
          command: mm,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      dA = [UA("page", 2), UA("otherPage"), UA("caretLeft"), UA("space", 3), UA("caretRight"), UA("close", 1.5), UA("submit", 1.5)],
      gA = [UA("page", 2), UA("otherPage"), UA("caretLeft"), UA("space", 2), UA("caretRight"), UA("newline"), UA("close", 1.5), UA("submit", 1.5)],
      WA = [
        [...tA("1234567890"), UA("backspace")], tA("qwertyuiop/"), tA("asdfghjkl'?"), [UA("shift", 2), ...tA("zxcvbnm,.")]
      ],
      FA = [
        [...tA("1234567890"), UA("backspace")], tA("!@#$%^&*()/"), tA('-_=+[]{};:"'), tA("~`|\\<>'\u20ac\xa3,.")
      ],
      ma = {
        letters: WA,
        accents: [
          [...tA("1234567890"), UA("backspace")], tA("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), tA("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [UA("shift", 2), ...tA("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: FA
      },
      Ta = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      fa = (mm, Tm) => "letters" === mm ? Tm ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === mm ? "symbols" : "accents"
      },
      ha = function(mm, Tm) {
        const fm = ((mm, Tm) => [...ma[mm], Tm ? gA : dA])(mm, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Tm) return fm;
        const hm = Math.min(2, Aa(fm[0]) / Tm);
        return [Array.from({
          length: Tm
        }, ((mm, Tm) => ({
          type: "phrase",
          phraseIndex: Tm,
          width: hm
        }))), ...fm]
      },
      Aa = mm => mm.reduce(((mm, Tm) => mm + Tm.width), 0),
      aa = mm => Math.max(...mm.map(Aa)),
      xa = (mm, Tm) => {
        const fm = mm[Tm.row];
        let hm = (aa(mm) - Aa(fm)) / 2;
        for (let Am = 0; Am < Tm.col; Am++) hm += fm[Am].width;
        return hm + fm[Tm.col].width / 2
      },
      wa = (mm, Tm, fm) => {
        let hm = 0,
          Am = 1 / 0;
        for (let am = 0; am < mm[Tm].length; am++) {
          const xm = Math.abs(xa(mm, {
            row: Tm,
            col: am
          }) - fm);
          xm < Am - 1e-9 && (hm = am, Am = xm)
        }
        return hm
      },
      Da = (mm, Tm) => {
        const fm = Math.max(0, Math.min(mm.length - 1, Tm.row));
        return {
          row: fm,
          col: Math.max(0, Math.min(mm[fm].length - 1, Tm.col))
        }
      },
      ia = (mm, Tm, fm) => "once" === mm && Tm - fm <= 400 ? "caps" : "off" === mm ? "once" : "off",
      Ra = (mm, Tm) => "once" === mm && (mm => mm.toLowerCase() !== mm.toUpperCase())(Tm) ? "off" : mm,
      pa = (mm, Tm, fm) => {
        if ("symbols" === Tm || "off" === fm) return mm;
        const hm = mm.toUpperCase();
        return 1 === hm.length ? hm : mm
      };
    var Ea = fm(8580);
    const oa = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Oa = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(mm) {
          return !(mm - this.lastSendMs < 2e3) && (this.lastSendMs = mm, !0)
        }
      },
      Ya = {
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
      qa = ["zi", "nameTag"],
      ja = mm => {
        const Tm = mm.target instanceof HTMLTextAreaElement && !qa.includes(mm.kind);
        return ha(mm.page, "chat" === mm.kind ? oa.length : 0, Tm)
      },
      Va = mm => {
        const Tm = mm.getBoundingClientRect(),
          fm = window.innerHeight,
          hm = Tm.top + Tm.height / 2 < fm / 2 ? "bottom" : "top",
          Am = "bottom" === hm ? fm - Tm.bottom - 6 : Tm.top - 6;
        return {
          placement: hm,
          maxHeightPx: Math.min(.46 * fm, Math.max(.3 * fm, Am))
        }
      },
      Ia = mm => {
        (0, ef.g)(mm) ? (0, ef.c)().close(): (fA.noteChosenStop(mm), mm.blur())
      };
    class Ka {
      constructor(mm) {
        this.host = mm, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(mm, Tm) {
        this.phraseTexts = mm, this.phrasesFill = Tm
      }
      pressKey(mm) {
        const Tm = this.host.getState(),
          fm = ja(Tm),
          hm = fm[mm.row][mm.col];
        this.host.setState({
          ...Tm,
          focus: mm,
          preferredX: xa(fm, mm)
        }), "char" === hm.type ? this.typeChar(hm.char) : "command" === hm.type ? this.runCommand(hm.command) : this.sendPhrase(hm.phraseIndex)
      }
      runCommand(mm) {
        const Tm = this.host.getState();
        switch (mm) {
          case "backspace":
            (0, Um.e)(Tm.target);
            break;
          case "space":
            (0, Um.h)(Tm.target, " ");
            break;
          case "newline":
            (0, Um.h)(Tm.target, "\n");
            break;
          case "caretLeft":
            (0, Um.l)(Tm.target, -1);
            break;
          case "caretRight":
            (0, Um.l)(Tm.target, 1);
            break;
          case "shift": {
            const mm = performance.now();
            this.host.setState({
              ...Tm,
              shift: ia(Tm.shift, mm, this.lastShiftPressMs)
            }), this.lastShiftPressMs = mm;
            break
          }
          case "page":
          case "otherPage": {
            const fm = fa(Tm.page, Tm.accentsFirst)[mm];
            this.host.setState({
              ...Tm,
              page: fm,
              focus: Da(ja({
                ...Tm,
                page: fm
              }), Tm.focus)
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
            (0, ef.g)(Tm.target) && (0, ef.c)().selectNextChannel()
        }
      }
      submit() {
        var mm, Tm;
        const {
          target: fm
        } = this.host.getState();
        this.host.hide(), (0, ef.g)(fm) ? (0, ef.c)().submit() : (fA.noteChosenStop(fm), null === (mm = (Tm = (0, ef.f)(fm)).submit) || void 0 === mm || mm.call(Tm), document.activeElement === fm && fm.blur())
      }
      close() {
        const {
          target: mm
        } = this.host.getState();
        this.host.hide(), Ia(mm)
      }
      typeChar(mm) {
        const {
          target: Tm,
          page: fm,
          shift: hm
        } = this.host.getState();
        (0, Um.h)(Tm, pa(mm, fm, hm)), this.host.setState({
          ...this.host.getState(),
          shift: Ra(hm, mm)
        })
      }
      sendPhrase(mm) {
        if (this.phrasesFill) {
          const {
            target: Tm
          } = this.host.getState(), fm = this.phraseTexts[mm];
          fm && (Tm.setSelectionRange(0, Tm.value.length), (0, Um.h)(Tm, fm))
        } else Oa.claim(performance.now()) && (this.host.hide(), (0, ef.c)().sendLine(this.phraseTexts[mm]))
      }
    }
    var Qa = fm(8603);
    const na = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ja = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class ca {
      constructor(mm, Tm) {
        this.host = mm, this.editor = Tm, this.lastDirection = null, this.navRepeat = new Om.e((0, Ym.c)(na)), this.commandRepeats = new Map(vA.filter((mm => {
          let {
            repeats: Tm
          } = mm;
          return Tm
        })).map((mm => {
          let {
            command: Tm
          } = mm;
          return [Tm, (0, Ym.c)(Ja)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const mm of this.commandRepeats.values()) mm.reset()
      }
      onVisibleFrame(mm) {
        const Tm = performance.now();
        for (const {
            command: Am,
            action: am
          }
          of vA) {
          const fm = (0, Rm.k)(am),
            hm = this.commandRepeats.get(Am);
          if ((hm ? hm.update(mm.isHeld(fm), Tm) : mm.wasPressed(fm)) && (this.editor.runCommand(Am), !this.host.getState().visible)) return
        }
        if (mm.wasPressed((0, Rm.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const fm = this.readNavDirection(mm);
        this.lastDirection = fm;
        const hm = this.navRepeat.update(fm, Tm);
        hm && this.navigate(hm)
      }
      onHiddenFrame(mm, Tm) {
        var fm;
        if (mm.wasPressed((0, Rm.k)("keyboardClose"))) return void Ia(Tm);
        const hm = (0, Rm.k)("keyboardType");
        if (mm.wasPressed(hm)) return pm.d.consumeButton(hm), void this.host.open(Tm);
        const Am = this.readNavDirection(mm),
          am = null !== Am && Am !== this.lastDirection;
        if (this.lastDirection = Am, !am || (0, ef.g)(Tm)) return;
        const xm = (null === (fm = oh()) || void 0 === fm ? void 0 : fm.root.contains(Tm)) || null !== Tm.closest(".EntireInventoryWrapper");
        Ia(Tm), xm && pm.d.handOffHeldInput()
      }
      navigate(mm) {
        const Tm = this.host.getState();
        if ("Up" === mm && 0 === Tm.focus.row && "chat" === Tm.kind) return (0, ef.c)().stepHistory(), void this.host.setState({
          ...Tm
        });
        const fm = ((mm, Tm, fm, hm) => {
          if ("Left" === fm || "Right" === fm) {
            const hm = mm[Tm.row].length,
              Am = (Tm.col + ("Right" === fm ? 1 : -1) + hm) % hm,
              am = {
                row: Tm.row,
                col: Am
              };
            return {
              pos: am,
              preferredX: xa(mm, am)
            }
          }
          const Am = (Tm.row + ("Down" === fm ? 1 : -1) + mm.length) % mm.length;
          return {
            pos: {
              row: Am,
              col: wa(mm, Am, hm)
            },
            preferredX: hm
          }
        })(ja(Tm), Tm.focus, mm, Tm.preferredX);
        this.host.setState({
          ...Tm,
          focus: fm.pos,
          preferredX: fm.preferredX
        })
      }
      readNavDirection(mm) {
        for (const Tm of Om.G)
          if (mm.isHeld(Tm)) return Tm;
        return (0, Om.gb)((0, Om.n)(mm.leftStick, (0, Em.f)().moveDeadzone))
      }
    }
    const za = ["Up", "Down", "Left", "Right"],
      Za = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const ka = new class {
      constructor() {
        this.state = Ya, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Ka(this), this.padInput = new ca(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(mm) {
        const Tm = mm.visible !== this.state.visible;
        this.state = mm;
        for (const fm of this.listeners) fm();
        Tm && im.j.gp(Qa.e, mm.visible)
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      install() {
        const mm = pm.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Um.k)(document.activeElement),
            onFrame: mm => {
              this.onFrame(mm)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: mm => za.includes(mm) || !this.state.visible && mm === (0, Rm.k)("keyboardType")
          }),
          Tm = mm => {
            const Tm = mm.target;
            (0, Um.k)(Tm) && (Tm === this.pendingChatInput || (0, om.m)() ? this.open(Tm) : this.state.visible && Tm !== this.state.target && (this.ownedField = null, this.hide()))
          },
          fm = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          hm = mm => {
            mm.isTrusted && this.state.visible && (mm => !mm.repeat && !Za.has(mm.key) && !(0, Ea.c)(mm.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(mm.key))(mm) && this.hide()
          },
          Am = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Va(this.state.target)
            })
          };
        document.addEventListener("focusin", Tm, !0), document.addEventListener("focusout", fm, !0), window.addEventListener("keydown", hm, !0), window.addEventListener("resize", Am);
        const am = im.j.subscribe(XA.b, (() => {
            this.openChat()
          })),
          xm = im.j.subscribe(Qa.h, (mm => {
            this.openForField(mm)
          }));
        return () => {
          mm(), document.removeEventListener("focusin", Tm, !0), document.removeEventListener("focusout", fm, !0), window.removeEventListener("keydown", hm, !0), window.removeEventListener("resize", Am), im.j.unsubscribe(am), im.j.unsubscribe(xm), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const mm = (0, ef.c)();
        mm ? document.activeElement !== mm.input ? (this.clearPendingChat(), this.pendingChatInput = mm.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), mm.open()) : this.open(mm.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(mm) {
        (0, Um.k)(mm) ? (document.activeElement !== mm && mm.focus(), document.activeElement === mm && this.open(mm)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", mm)
      }
      open(mm) {
        var Tm;
        if (this.clearPendingChat(), this.ownedField = mm, this.state.visible && this.state.target === mm) return;
        this.restoreInputMode(), (0, Um.o)(mm), this.savedInputMode = mm.getAttribute("inputmode"), mm.setAttribute("inputmode", "none");
        const fm = {
          ...Ya,
          visible: !0,
          target: mm,
          kind: (0, ef.g)(mm) ? "chat" : null !== (Tm = (0, ef.f)(mm).kind) && void 0 !== Tm ? Tm : null,
          accentsFirst: (hm = KA.e.get().getCurrentLanguageCode(), Ta.has(hm)),
          ...Va(mm)
        };
        var hm;
        const Am = ja(fm),
          am = ((mm, Tm) => {
            for (let fm = 0; fm < mm.length; fm++) {
              const hm = mm[fm].findIndex((mm => "char" === mm.type && mm.char === Tm));
              if (-1 !== hm) return {
                row: fm,
                col: hm
              }
            }
            return null
          })(Am, "q");
        this.padInput.reset(), this.setState({
          ...fm,
          focus: am,
          preferredX: xa(Am, am)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Ya))
      }
      onFrame(mm) {
        if (this.releaseLostField()) return;
        const Tm = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(mm) : (0, Um.k)(Tm) && this.padInput.onHiddenFrame(mm, Tm)
      }
      releaseLostField() {
        const mm = this.ownedField;
        return !(null === mm || mm.isConnected && document.activeElement === mm) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: mm
        } = this.state;
        mm && (null === this.savedInputMode ? mm.removeAttribute("inputmode") : mm.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var ba = fm(8712);
    const Sa = new Map(vA.map((mm => {
        let {
          command: Tm,
          action: fm
        } = mm;
        return [Tm, fm]
      }))),
      ea = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Na = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        zi: "controller:keyboardTargetBookTitle"
      },
      Ga = mm => {
        const Tm = (() => {
          const [, mm] = (0, Hm.useReducer)((mm => mm + 1), 0);
          return mm
        })();
        (0, Hm.useEffect)((() => {
          if (!mm) return;
          const fm = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Am of fm) mm.addEventListener(Am, Tm);
          document.addEventListener("selectionchange", Tm);
          const hm = new MutationObserver(Tm);
          return hm.observe(mm, {
            attributeFilter: ["placeholder"]
          }), () => {
            hm.disconnect();
            for (const hm of fm) mm.removeEventListener(hm, Tm);
            document.removeEventListener("selectionchange", Tm)
          }
        }), [mm, Tm])
      },
      Xa = mm => {
        mm.preventDefault()
      },
      Pa = mm => {
        "mouse" !== mm.pointerType && mm.preventDefault()
      },
      Ha = () => {
        var mm;
        const {
          t: Tm
        } = (0, Am.A)(), fm = (() => {
          const [mm, Tm] = (0, Hm.useState)(ka.getState());
          return (0, Hm.useEffect)((() => ka.subscribe((() => {
            Tm(ka.getState())
          }))), []), mm
        })(), hm = (0, om.z)(), am = (0, Hm.useRef)(null);
        (0, Em.n)(), (0, om.A)(), (0, Hm.useEffect)((() => {
          const mm = ka.install(),
            Tm = null;
          return () => {
            mm(), null === Tm || void 0 === Tm || Tm()
          }
        }), []);
        const xm = (0, Hm.useMemo)((() => oa.map((mm => Tm(mm)))), [Tm]),
          wm = fm.visible && "chat" === fm.kind ? fm.target : null;
        Ga(wm);
        const Dm = null !== (mm = null === wm || void 0 === wm ? void 0 : wm.value) && void 0 !== mm ? mm : "",
          im = ((mm, Tm, fm) => {
            if (!mm.startsWith("/")) return [];
            const hm = [];
            for (let Am = Tm.length - 1; Am >= 0 && hm.length < fm; Am--) {
              const fm = Tm[Am].trim();
              fm.startsWith(mm) && fm !== mm && !hm.includes(fm) && hm.push(fm)
            }
            return hm
          })(Dm, Dm.startsWith("/") ? (0, ba.g)() : [], oa.length),
          pm = Dm.startsWith("/"),
          Om = pm ? oa.map(((mm, Tm) => {
            var fm;
            return null !== (fm = im[Tm]) && void 0 !== fm ? fm : ""
          })) : xm;
        if ((0, Hm.useEffect)((() => {
            ka.editor.setPhraseRow(Om, pm)
          })), (0, Hm.useEffect)((() => {
            const mm = am.current;
            if (mm) return mm.addEventListener("touchstart", Xa, {
              passive: !1
            }), () => {
              mm.removeEventListener("touchstart", Xa)
            }
          }), [fm.visible]), !fm.visible) return null;
        const Ym = ja(fm),
          qm = aa(Ym),
          jm = mm => "char" === mm.type ? pa(mm.char, fm.page, fm.shift) : "phrase" === mm.type ? Om[mm.phraseIndex] : (mm => {
            switch (mm) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === fm.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return ea[fa(fm.page, fm.accentsFirst)[mm]];
              case "space":
                return Tm("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Tm("chat" === fm.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(mm.command),
          Vm = mm => {
            ka.editor.pressKey(mm)
          };
        return (0, rm.jsxs)("div", {
          ref: am,
          className: Cm()(ef.m, "top" === fm.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: fm.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Ym.length,
            "--pad-keyboard-height": `${fm.maxHeightPx}px`
          },
          onPointerDown: Pa,
          onMouseDown: Xa,
          children: [(0, rm.jsx)(ya, {
            target: fm.target,
            label: fm.kind ? Tm(Na[fm.kind]) : fm.target.placeholder || Tm("controller:keyboardTargetText")
          }), (0, rm.jsx)("div", {
            className: "PadKeyboardRows",
            children: Ym.map(((mm, Tm) => (0, rm.jsx)("div", {
              className: Cm()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === mm[0].type
              }),
              children: mm.map(((mm, Am) => {
                const am = hm && fm.focus.row === Tm && fm.focus.col === Am,
                  xm = "command" === mm.type ? Sa.get(mm.command) : void 0;
                return (0, rm.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: mm.width / qm * 100 + "%"
                  },
                  children: (0, rm.jsxs)("div", {
                    className: Cm()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: am,
                      PadKeyboardKeyCommand: "command" === mm.type,
                      PadKeyboardKeyPhrase: "phrase" === mm.type,
                      PadKeyboardKeyActive: "command" === mm.type && "shift" === mm.command && "off" !== fm.shift,
                      PadKeyboardKeySubmit: "command" === mm.type && "submit" === mm.command
                    }),
                    role: "button",
                    onClick: () => {
                      Vm({
                        row: Tm,
                        col: Am
                      })
                    },
                    onTouchEnd: mm => {
                      var fm, hm;
                      mm.preventDefault(), fm = mm.changedTouches[0], hm = mm.currentTarget.getBoundingClientRect(), fm && fm.clientX >= hm.left && fm.clientX <= hm.right && fm.clientY >= hm.top && fm.clientY <= hm.bottom && Vm({
                        row: Tm,
                        col: Am
                      })
                    },
                    children: [(0, rm.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: jm(mm)
                    }), hm && xm && (0, rm.jsx)(zA, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Rm.k)(xm)
                    })]
                  })
                }, Am)
              }))
            }, Tm)))
          })]
        })
      },
      ya = mm => {
        let {
          target: Tm,
          label: fm
        } = mm;
        Ga(Tm);
        const hm = (0, Hm.useRef)(null),
          Am = (0, Hm.useRef)(null),
          am = Tm instanceof HTMLTextAreaElement;
        (0, Hm.useLayoutEffect)((() => {
          const mm = hm.current,
            Tm = Am.current;
          am ? mm.scrollTop = Tm.offsetTop - mm.clientHeight / 2 : mm.scrollLeft = Tm.offsetLeft - mm.clientWidth / 2
        }));
        const {
          value: xm,
          start: wm,
          end: Dm
        } = (0, Um.p)(Tm), im = "password" === Tm.type ? "\u2022".repeat(xm.length) : xm;
        return (0, rm.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, rm.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: fm
          }), (0, rm.jsxs)("div", {
            ref: hm,
            className: Cm()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: am
            }),
            children: [(0, rm.jsx)("span", {
              children: im.slice(0, wm)
            }), (0, rm.jsx)("span", {
              ref: Am,
              className: "PadKeyboardCaret"
            }), wm !== Dm && (0, rm.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: im.slice(wm, Dm)
            }), (0, rm.jsx)("span", {
              children: im.slice(Dm)
            }), 0 === im.length && Tm.placeholder && Tm.placeholder !== fm && (0, rm.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Tm.placeholder
            })]
          })]
        })
      };
    var Ca = fm(1389),
      ra = fm(3427);
    const sa = function() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return Tm.map(Rm.k)
      },
      la = (mm, Tm) => {
        const fm = tf(mm);
        return fm ? [{
          glyphs: [fm],
          labelKey: Tm
        }] : []
      },
      Ma = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      ua = "--pad-hint-bar-clearance",
      Ba = "[data-pad-hint-bar-avoid]",
      La = mm => {
        const Tm = [];
        for (const fm of mm)(0, Fm.n)(fm) && Tm.push(fm.getBoundingClientRect());
        return Tm
      },
      va = mm => {
        if (!mm) return null;
        const Tm = oh(),
          fm = Tm ? La(((mm, Tm) => {
            const fm = mm.closest(Ba);
            return fm ? [fm] : ("popup" === Tm ? document : mm).querySelectorAll(Ba)
          })(Tm.root, Tm.layer.kind)) : [],
          hm = !Tm || Tm.root.hasAttribute("data-pad-shows-hud");
        if (((0, ra.j)(null === Tm || void 0 === Tm ? void 0 : Tm.layer.kind, (0, ra.k)()) || hm) && fm.push(...La(document.querySelectorAll(Ma.join(",")))), 0 === fm.length) return null;
        const {
          width: Am,
          height: am
        } = mm.getBoundingClientRect(), xm = window.innerHeight - 8, wm = (0, ra.q)(xm, {
          width: Am,
          height: am
        }, window.innerWidth / 2, fm, 8);
        return wm === xm ? null : Math.round(window.innerHeight - wm)
      },
      ta = mm => {
        const Tm = document.documentElement.style,
          fm = mm ? `${Math.round(window.innerHeight-mm.getBoundingClientRect().top)}px` : "";
        Tm.getPropertyValue(ua) !== fm && (fm ? Tm.setProperty(ua, fm) : Tm.removeProperty(ua))
      },
      Ua = () => {
        const {
          t: mm
        } = (0, Am.A)(), {
          hideButtonHints: Tm
        } = (0, Em.n)(), fm = (0, om.z)(), [hm, am] = (0, Hm.useState)(!1), [xm, im] = (0, Hm.useState)([]), [Ym, qm] = (0, Hm.useState)(null), jm = (0, Hm.useRef)(null), Vm = (0, Hm.useRef)(null);
        (0, IA.g)(Qa.e, (mm => {
          am(mm)
        })), (0, IA.g)(ra.o, (() => {
          var mm;
          null === (mm = Vm.current) || void 0 === mm || mm.call(Vm)
        }));
        const Im = fm && !Tm && !hm;
        return (0, Hm.useEffect)((() => {
          if (!Im) return;
          let mm = null;
          const Tm = () => {
            const Tm = (() => {
                var mm;
                const Tm = pm.d.getActiveConsumerName(),
                  fm = (0, ra.g)();
                if (fm) {
                  const mm = (0, Rm.k)(fm),
                    Tm = "emoteWheel" === fm && "wheel" === (0, Em.f)().emoteButton || !(0, Om.N)(pm.d.getLastFrame().values, mm) ? {
                      glyphs: sa("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [mm],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Rm.B)(mm)],
                    labelKey: "controller:wheelChoose"
                  }, Tm, {
                    glyphs: sa("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const hm = oh();
                if (!hm || "focus" !== Tm && "cursor" !== Tm) return (0, ra.e)(Rm.k);
                const Am = [],
                  am = {
                    glyphs: sa("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  xm = (0, Bm.u)(hm.root),
                  wm = xm ? !(0, Fm.u)(xm) : Boolean(hm.layer.close),
                  im = !xm && hm.layer.closeLabelKey ? hm.layer.closeLabelKey : am.labelKey,
                  om = wm ? [{
                    ...am,
                    labelKey: im
                  }] : [],
                  Ym = Xf(hm.layer.kind) ? [{
                    glyphs: sa("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Tm) return Am.push({
                  glyphs: sa("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Am.push({
                  glyphs: sa("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Am.push(...om), Am.push(...Ym), Am.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), bh() && Am.push({
                  glyphs: sa("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Am;
                const qm = fA.getFocused();
                qm && (0, Xh.c)(qm) ? Am.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : qm && (0, Bm.F)(qm) ? Am.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Am.push({
                  glyphs: sa("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const jm = qm ? null === (mm = Of(qm)) || void 0 === mm ? void 0 : mm.dataset.padSecondary : void 0;
                jm && Am.push({
                  glyphs: sa("menuSecondary"),
                  labelKey: jm
                }), Am.push(...null !== qm && void 0 !== qm && qm.closest("[data-pad-friends-column]") ? [am] : om), Am.push(...Ym);
                const Vm = "home" === hm.layer.kind;
                gf(hm.root) || !rf(hm.root) && !Wf(hm) ? Vm && Am.push({
                  glyphs: sa("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Am.push({
                  glyphs: sa("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Vm && (Am.push(...la("inventory", "controller:menusFriends")), jm || Am.push({
                  glyphs: sa("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Am.push(...la("pause", "controller:menusSettings")), Am.push(...la("leaderboard", "controller:menusNotifications")));
                const Im = Dm.c.get("openEverythingMenuName");
                return "inGame" === Dm.c.get("gameState") && "popup" !== hm.layer.kind && null !== Im && ((0, Rf.i)(Im) ? Am.push(...la("leaderboard", "controller:menusClose")) : Im !== Df.n.LOBBY_LEADERBOARD && Am.push(...la("leaderboard", "controller:menusLobby"))), Am.push({
                  glyphs: sa("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Am
              })(),
              fm = va(jm.current),
              hm = ((mm, Tm) => `${mm.map((mm=>`${mm.glyphs.join("+")}:${mm.labelKey}`)).join("|")}@${Tm}`)(Tm, fm);
            hm !== mm && (mm = hm, (0, wm.unstable_batchedUpdates)((() => {
              im(Tm), qm(fm)
            }))), ta(jm.current)
          };
          Tm(), Vm.current = Tm;
          const fm = requestAnimationFrame(Tm),
            hm = setInterval(Tm, 150);
          return () => {
            Vm.current = null, cancelAnimationFrame(fm), clearInterval(hm), ta(null)
          }
        }), [Im]), (0, Hm.useLayoutEffect)((() => {
          if (!Im) return;
          if (0 === xm.length) return void ta(null);
          const mm = va(jm.current);
          mm === Ym ? ta(jm.current) : qm(mm)
        }), [Im, xm, Ym]), Im && 0 !== xm.length ? (0, rm.jsx)("div", {
          ref: jm,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Ym ? void 0 : {
            bottom: Ym
          },
          "aria-hidden": !0,
          children: xm.map((Tm => (0, rm.jsxs)("div", {
            className: "PadButtonHint",
            children: [Tm.glyphs.map((mm => (0, rm.jsx)(zA, {
              glyph: mm,
              className: "PadButtonHintGlyph"
            }, mm))), (0, rm.jsx)("span", {
              children: mm(Tm.labelKey)
            })]
          }, Tm.labelKey)))
        }) : null
      };
    var da = fm(1722);
    const ga = [Fm.d, "label", "[data-pad-slider]"].join(","),
      Wa = "data-pad-cursor-probe",
      Fa = mm => {
        var Tm;
        const fm = (mm => {
          const Tm = [];
          for (let hm = mm; hm && hm !== document.body && hm !== document.documentElement && (Tm.push(hm), !(Tm.length > 8)); hm = hm.parentElement);
          const fm = document.documentElement.classList.contains(om.r) ? Tm[Tm.length - 1] : void 0;
          null === fm || void 0 === fm || fm.setAttribute(Wa, "");
          try {
            return Tm.map((mm => ({
              element: mm,
              cursor: getComputedStyle(mm).cursor
            })))
          } finally {
            null === fm || void 0 === fm || fm.removeAttribute(Wa)
          }
        })(mm);
        if ("pointer" !== (null === (Tm = fm[0]) || void 0 === Tm ? void 0 : Tm.cursor)) return null;
        let hm = 0;
        for (; hm + 1 < fm.length && "pointer" === fm[hm + 1].cursor;) hm++;
        return fm[hm].element
      },
      mx = (mm, Tm, fm, hm) => {
        const Am = hm.root.contains(mm) ? hm.root : null;
        for (let am = mm; am && am !== document.body && am !== document.documentElement; am = am.parentElement) {
          if (am instanceof HTMLElement && Zm(am, Tm) && Nm(am, Tm, fm)) return am;
          if (am === Am) break
        }
        return "home" === hm.layer.kind || "gamePage" === hm.layer.kind ? ((mm, Tm) => {
          const fm = document.scrollingElement;
          return fm instanceof HTMLElement && ![document.documentElement, document.body].some((Tm => {
            const fm = getComputedStyle(Tm),
              hm = "y" === mm ? fm.overflowY : fm.overflowX;
            return "hidden" === hm || "clip" === hm
          })) && Nm(fm, mm, Tm) ? fm : null
        })(Tm, fm) : null
      };
    const Tx = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Ym.c)(Om.y), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const mm = pm.d.register({
              name: "cursor",
              isActive: () => "cursor" === Sh(),
              onFrame: mm => {
                this.onFrame(mm)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: mm => (0, pm.g)(mm) || mm === (0, Rm.k)("menuConfirm") && (0, Bm.G)((0, om.b)())
            }),
            Tm = (0, ah.l)((mm => {
              const Tm = mm.getRoot();
              Tm && this.layerPoints.delete(Tm), Tm === this.layerRoot && (this.layerRoot = null)
            })),
            fm = im.j.subscribe("appManagerUpdated|activeInputDevice", (mm => {
              "gamepad" !== mm && this.active && !this.hidden && this.hide()
            }));
          return () => {
            mm(), Tm(), im.j.unsubscribe(fm), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, om.m)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.gp()
        }
        activate(mm) {
          this.active = !0, this.hidden = !1;
          const Tm = zh();
          !Tm || Tm.root && Tm.root !== mm.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(mm), this.jumpTo(Tm.point))
        }
        jumpTo(mm) {
          this.state = {
            x: mm.x,
            y: mm.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.gp())
        }
        onFrame(mm) {
          const Tm = oh();
          if (!Tm) return;
          if (this.active || this.activate(Tm), this.followPage(Tm)) return;
          this.followLayer(Tm);
          const fm = mm.wokeDevice ? (0, om.b)() : null;
          if (fm && this.jumpTo(fm), !(0, om.m)()) return void this.hide();
          const hm = (0, Rm.k)("menuToggleCursor");
          if (mm.wasPressed(hm)) return pm.d.consumeButton(hm), void ch(this.getHandoff(null));
          if (this.handBackToFocus(mm)) return;
          const Am = (0, Rm.k)("menuConfirm"),
            am = (0, Rm.k)("menuSecondary");
          if (mm.wasPressed((0, Rm.k)("menuBack"))) return (0, Bm.i)(Tm.root) || (0, Bm.f)(Tm.root) || Oh(), void this.gp();
          if (Th(null, mm, Tm)) return mm.wasReleased(Am) && this.press && (this.updateHit(!1), this.updateConfirm(mm, Am)), void this.gp();
          if (document.pointerLockElement) return void this.hide();
          const xm = eh() ? {
              x: 0,
              y: 0
            } : (mm => {
              const Tm = (mm, Tm) => (mm ? 1 : 0) - (Tm ? 1 : 0);
              return {
                x: Tm(mm.isHeld("Right"), mm.isHeld("Left")),
                y: Tm(mm.isHeld("Down"), mm.isHeld("Up"))
              }
            })(mm),
            wm = (0, Em.f)().moveDeadzone,
            Dm = ((mm, Tm) => {
              const fm = (0, Om.n)(mm, Km(Tm));
              return Math.hypot(fm.x, fm.y)
            })(mm.leftStick, wm) > 0 || 0 !== xm.x || 0 !== xm.y;
          if (this.hidden) {
            const Tm = mm.wasPressed(Am),
              fm = mm.wasPressed(am);
            if (!Dm && !Jm(mm.rightStick) && !Tm && !fm && !mm.wokeDevice) return void this.gp();
            if (this.hidden = !1, this.updateHit(!1), Tm || fm) return Tm && (this.press = {
              kind: "ignored"
            }, mm.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.gp()
          }
          this.movePendingPageStart(Dm);
          const im = this.getPoint();
          this.state = nm(this.state, {
            stick: mm.leftStick,
            moveDeadzone: wm,
            dpad: xm,
            dtMs: mm.dtMs,
            cursorSpeedPercent: (0, Em.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Ym = this.state.x !== im.x || this.state.y !== im.y,
            qm = [Am, am].some((Tm => mm.wasPressed(Tm) || mm.wasReleased(Tm)));
          (Ym || qm || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Ym), this.updateConfirm(mm, Am), this.updateSecondary(mm, am), this.updateScroll(mm, Tm), this.gp()
        }
        followPage(mm) {
          const Tm = "home" === mm.layer.kind || "gamePage" === mm.layer.kind,
            fm = this.page;
          if (this.page = Tm ? {
              key: (0, ah.r)(mm.layer),
              root: mm.root
            } : null, !this.page || !fm || fm.root !== mm.root || fm.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(mm), "hybrid" === Jh()) return Kh = null, Vh = null, Qh.lock(), !0;
          const {
            key: hm
          } = this.page;
          return this.pendingPageStart = {
            root: mm.root,
            key: hm,
            returning: fA.notePageEnteredByCursor(hm),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(mm) {
          const Tm = this.pendingPageStart;
          if (!Tm) return;
          if (mm || Tm.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const fm = Tm.returning ? fA.recallStop(Tm.root, Tm.key) : null;
          if (!fm && Tm.returning && performance.now() - Tm.enteredAtMs < 1e3) return;
          const hm = null !== fm && void 0 !== fm ? fm : fA.pickInitial(Tm.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Tm.enteredAtMs
          });
          hm && (this.pendingPageStart = null, this.jumpTo((0, Bm.y)(hm)))
        }
        setLayer(mm) {
          this.layerRoot = mm.root, this.layerOrder = mm.order
        }
        followLayer(mm) {
          var Tm;
          if (mm.root === this.layerRoot) return;
          null !== (Tm = this.layerRoot) && void 0 !== Tm && Tm.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const fm = this.layerPoints.get(mm.root),
            hm = fm && mm.order <= this.layerOrder ? fm : fA.getLayerStartPoint(mm.root);
          this.setLayer(mm), this.jumpTo(hm)
        }
        getHandoff(mm) {
          var Tm;
          return {
            point: this.getPoint(),
            element: null !== (Tm = this.interactive) && void 0 !== Tm ? Tm : this.findDraggedSliderNearby(),
            direction: mm
          }
        }
        findDraggedSliderNearby() {
          const mm = this.draggedSlider;
          if (null === mm || void 0 === mm || !mm.isConnected) return null;
          const Tm = mm.getBoundingClientRect(),
            {
              y: fm
            } = this.getPoint();
          return fm >= Tm.top - 40 && fm <= Tm.bottom + 40 ? mm : null
        }
        handBackToFocus(mm) {
          if (!eh()) return !1;
          const Tm = Om.G.find((Tm => mm.wasPressed(Tm)));
          return !!Tm && (fm = this.getHandoff(Tm), Kh = qh(fm), Vh = null, Qh.lock(), pm.d.handOffHeldInput(), !0);
          var fm
        }
        getAssistContext() {
          const mm = this.interactive;
          if (null === mm || void 0 === mm || !mm.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Tm = mm.getBoundingClientRect();
          if (Tm.width > .4 * window.innerWidth || Tm.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const fm = (0, Em.f)().cursorMagnetism && !(0, da.b)(mm) && !mm.closest("[data-pad-slider]"),
            hm = this.magnet && this.magnet !== mm && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Tm;
          return {
            overInteractive: !0,
            magnetTarget: fm ? {
              x: hm.left + hm.width / 2,
              y: hm.top + hm.height / 2
            } : null
          }
        }
        updateHit(mm) {
          this.lastHitTestMs = performance.now();
          const Tm = this.getPoint(),
            fm = document.elementFromPoint(Tm.x, Tm.y),
            hm = fm && !(0, jm.q)(fm) && (mm => {
              var Tm;
              const fm = oh();
              return !(fm && !fm.root.contains(mm) && !mm.closest(".tooltip-container")) || !(null !== (Tm = document.getElementById("root")) && void 0 !== Tm && Tm.contains(mm))
            })(fm) ? fm : null;
          if (hm !== this.hit) return (0, Bm.m)(this.hit, hm, Tm), this.hit = hm, void this.setInteractive(hm ? (mm => {
            const Tm = mm.closest(ga);
            if (Tm) {
              var fm, hm;
              const mm = null !== (fm = null === (hm = Tm.parentElement) || void 0 === hm ? void 0 : hm.closest("[data-pad-focusable]")) && void 0 !== fm ? fm : Tm;
              return (0, Fm.u)(mm) ? {
                element: null,
                magnet: null
              } : {
                element: mm,
                magnet: Tm
              }
            }
            const Am = Fa(mm);
            return {
              element: Am,
              magnet: Am
            }
          })(hm) : {
            element: null,
            magnet: null
          });
          mm && hm && (0, Bm.m)(hm, hm, Tm)
        }
        setInteractive(mm) {
          let {
            element: Tm,
            magnet: fm
          } = mm;
          this.interactive = Tm, this.magnet = fm
        }
        clearHover() {
          this.hit && (0, Bm.m)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const mm = this.hit;
          if (!mm || (0, Bm.F)(mm)) return {
            kind: "ignored"
          };
          const Tm = (0, Xh.c)(mm),
            fm = mm.closest("[data-pad-slider]");
          return Tm && fm ? {
            kind: "slider",
            slider: fm,
            adjuster: Tm
          } : ((0, Bm.p)(mm, this.getPoint()), {
            kind: "pointer",
            target: mm
          })
        }
        applySliderFraction(mm) {
          var Tm;
          const fm = mm.slider.getBoundingClientRect(),
            hm = fm.height > fm.width,
            Am = null === (Tm = mm.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Tm ? void 0 : Tm.getBoundingClientRect(),
            am = Am ? hm ? Am.height : Am.width : 0,
            xm = (hm ? fm.height : fm.width) - am;
          if (xm <= 0) return;
          const wm = hm ? fm.bottom - am / 2 - this.state.y : this.state.x - fm.left - am / 2;
          mm.adjuster.setFraction(Math.max(0, Math.min(1, wm / xm)))
        }
        updateConfirm(mm, Tm) {
          mm.wasPressed(Tm) && (this.press = mm.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const fm = this.press;
          if (!fm) return;
          if (mm.isHeld(Tm)) return "slider" === fm.kind && this.applySliderFraction(fm), void this.updateRepeat();
          this.press = null;
          const hm = this.repeated;
          if (this.endRepeat(), !mm.wasReleased(Tm)) return void this.endPressWithoutClick(fm);
          const Am = this.getPoint(),
            am = this.hit;
          if ("slider" === fm.kind && fm.adjuster.endDrag(), "pointer" === fm.kind) {
            const mm = null !== am && void 0 !== am ? am : fm.target.isConnected ? fm.target : null;
            mm && (0, Bm.s)(mm, Am);
            const Tm = am && fm.target.isConnected && !hm ? ((mm, Tm) => {
              for (let fm = mm; fm; fm = fm.parentElement)
                if (fm.contains(Tm)) return fm;
              return null
            })(fm.target, am) : null;
            Tm && (fA.noteCursorActivation(Tm), (0, jm.f)(Tm, new MouseEvent("click", (0, Bm.O)(Am, 0, 0))), (0, Bm.g)(Tm), (0, Bm.K)(Tm) && (0, Bm.H)(Tm))
          }
        }
        beginRepeat() {
          var mm, Tm, fm;
          const hm = null !== (mm = null === (Tm = this.hit) || void 0 === Tm ? void 0 : Tm.closest("[data-pad-repeat]")) && void 0 !== mm ? mm : null;
          this.repeatStop = hm, this.repeatKey = null !== (fm = null === hm || void 0 === hm ? void 0 : hm.getAttribute("data-pad-repeat")) && void 0 !== fm ? fm : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const mm = this.repeatStop;
          if (!mm) return;
          const Tm = this.hit;
          mm.isConnected && !(0, Fm.u)(mm) && mm.getAttribute("data-pad-repeat") === this.repeatKey && Tm && mm.contains(Tm) ? mm.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, fA.noteCursorActivation(mm), (0, jm.f)(mm, new MouseEvent("click", (0, Bm.O)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(mm) {
          "slider" === mm.kind && mm.adjuster.endDrag(), "pointer" === mm.kind && mm.target.isConnected && (0, Bm.s)(mm.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(mm, Tm) {
          mm.wasPressed(Tm) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !mm.isHeld(Tm) && (this.secondaryArmed = !1, mm.wasReleased(Tm) && this.hit && (0, Bm.l)(this.hit, this.getPoint(), 2))
        }
        updateScroll(mm, Tm) {
          const fm = cm(mm.rightStick, mm.dtMs);
          if (0 === fm.x && 0 === fm.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + fm.x,
            y: this.scrollRemainder.y + fm.y
          };
          const hm = Math.trunc(this.scrollRemainder.x),
            Am = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - hm,
            y: this.scrollRemainder.y - Am
          };
          const am = this.hit;
          if (!am) return;
          let xm = !1;
          if (0 !== Am) {
            const mm = mx(am, "y", Am > 0 ? 1 : -1, Tm);
            mm && (mm.scrollBy({
              top: Am,
              behavior: "instant"
            }), xm = !0)
          }
          if (0 !== hm) {
            const mm = mx(am, "x", hm > 0 ? 1 : -1, Tm);
            mm && (mm.scrollBy({
              left: hm,
              behavior: "instant"
            }), xm = !0)
          }
          xm && (this.lastHitTestMs = -1 / 0)
        }
        gp() {
          tm.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      fx = () => {
        const mm = (0, Hm.useMemo)((() => new Mm), []),
          Tm = (0, om.z)();
        return (0, Hm.useEffect)((() => {
          if (!Tm) return;
          let fm = 0,
            hm = {
              of: null,
              atMs: 0,
              list: []
            };
          const Am = document.getElementsByClassName(Nh),
            am = mm => {
              for (const Tm of [...Am]) Tm !== mm && Tm.classList.remove(Nh)
            },
            xm = () => {
              var Tm;
              fm = requestAnimationFrame(xm);
              const Am = (() => {
                const mm = fA.getFocused();
                if (fA.isActive() && null !== mm && void 0 !== mm && mm.isConnected) return mm;
                const Tm = Tx.getHighlighted();
                return null !== Tm && void 0 !== Tm && Tm.isConnected ? Tm : null
              })();
              am(Am), Am && !Am.classList.contains(Nh) && Am.classList.add(Nh);
              const wm = null !== (Tm = null === Am || void 0 === Am ? void 0 : Am.closest("[data-pad-reticle-box]")) && void 0 !== Tm ? Tm : Am;
              mm.show(wm ? ((mm, Tm) => {
                let fm = mm.left,
                  hm = mm.top,
                  Am = mm.right,
                  am = mm.bottom;
                for (const xm of Tm) {
                  if (!xm) continue;
                  const mm = Xm(xm);
                  fm = Math.max(fm, mm.left), hm = Math.max(hm, mm.top), Am = Math.min(Am, mm.right), am = Math.min(am, mm.bottom)
                }
                return Am <= fm || am <= hm ? null : {
                  left: fm,
                  top: hm,
                  width: Am - fm,
                  height: am - hm
                }
              })(wm.getBoundingClientRect(), (mm => {
                const Tm = performance.now();
                return (hm.of !== mm || Tm - hm.atMs > 500) && (hm = {
                  of: mm,
                  atMs: Tm,
                  list: [km(mm, "y"), km(mm, "x")]
                }), hm.list
              })(wm)) : null)
            };
          return fm = requestAnimationFrame(xm), () => {
            cancelAnimationFrame(fm), am(null), mm.hide()
          }
        }), [Tm, mm]), (0, rm.jsx)(um, {
          placer: mm,
          className: "PadFocusRing"
        })
      },
      hx = (mm, Tm) => {
        mm.style.transform = `translate3d(${Tm.x}px, ${Tm.y}px, 0)`, mm.classList.toggle("Visible", Tm.visible), mm.classList.toggle("Pressed", Tm.pressed)
      },
      Ax = () => {
        const mm = (0, Hm.useRef)(null);
        return (0, Hm.useEffect)((() => {
          const Tm = tm.subscribe((Tm => {
            mm.current && hx(mm.current, Tm)
          }));
          return mm.current && hx(mm.current, tm.get()), Tm
        }), []), (0, rm.jsx)("div", {
          ref: mm,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, rm.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      ax = "#ncmp__modal.ncmp__active",
      xx = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(ax) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(ax),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      wx = "PadOverThirdParty",
      Dx = new Set(xx.map((mm => mm.id))),
      ix = () => {
        const mm = xx.map((mm => {
            let {
              id: Tm,
              find: fm,
              startSelectors: hm
            } = mm;
            return (0, ah.o)({
              id: Tm,
              kind: "popup",
              getRoot: () => {
                const mm = fm(),
                  Tm = mm ? ((mm, Tm) => {
                    var fm;
                    for (const hm of Tm) {
                      const Tm = mm.querySelector(hm);
                      if (Tm) return Tm
                    }
                    return null !== (fm = [...mm.querySelectorAll("button")].find((mm => !mm.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== fm ? fm : null
                  })(mm, hm) : null;
                if (mm && Tm && !Tm.hasAttribute("data-pad-default-focus")) {
                  for (const Tm of mm.querySelectorAll("[data-pad-default-focus]")) Tm.removeAttribute("data-pad-default-focus");
                  for (const Tm of mm.querySelectorAll("[data-pad-hint-bar-avoid]")) Tm.removeAttribute("data-pad-hint-bar-avoid");
                  Tm.setAttribute("data-pad-default-focus", ""), ((mm, Tm) => {
                    let fm = mm;
                    for (let hm = mm.parentElement; hm && Tm.contains(hm) && !(hm.getBoundingClientRect().height >= window.innerHeight / 2); hm = hm.parentElement) fm = hm;
                    return fm
                  })(Tm, mm).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return mm
              },
              close: null,
              memoryKey: null
            })
          })),
          Tm = document.documentElement,
          fm = xm.g.onFrame((() => {
            const mm = (0, om.m)() ? oh() : null,
              fm = !!mm && (hm = mm.layer, Dx.has(hm.id));
            var hm;
            Tm.classList.contains(wx) !== fm && Tm.classList.toggle(wx, fm)
          }));
        return () => {
          for (const Tm of mm) Tm();
          fm(), Tm.classList.remove(wx)
        }
      },
      Rx = "PadLargePointer",
      px = () => {
        (0, Hm.useEffect)((() => {
          const mm = (0, jm.i)(document.body),
            Tm = fA.install(),
            fm = Tx.install(),
            hm = ix();
          return () => {
            mm(), Tm(), fm(), hm()
          }
        }), []);
        const {
          largePointer: mm
        } = (0, Em.n)(), Tm = (0, Ca.t)() && mm;
        return (0, Hm.useEffect)((() => {
          if (Tm) return document.documentElement.classList.add(Rx), () => {
            document.documentElement.classList.remove(Rx)
          }
        }), [Tm]), (0, wm.createPortal)((0, rm.jsxs)(rm.Fragment, {
          children: [(0, rm.jsx)(Ua, {}), (0, rm.jsx)(fx, {}), (0, rm.jsx)(Ax, {})]
        }), document.body)
      };
    var Ex = fm(8726),
      ox = fm(8752),
      Ox = fm(8739);
    fm(8761);
    const Yx = (mm, Tm) => {
        const [fm, hm] = (0, Hm.useState)(!1), [Am, am] = (0, Hm.useState)(null), xm = (0, Hm.useRef)(null), wm = (0, Hm.useCallback)((mm => {
          xm.current = mm, am(mm)
        }), []), Dm = (0, Hm.useCallback)((() => {
          hm(!1), wm(null)
        }), [wm]), Rm = (0, Hm.useCallback)((() => {
          hm(!0)
        }), []), pm = (0, Hm.useCallback)(((mm, Tm) => {
          wm((0, Ox.E)(mm, Tm, xm.current))
        }), [wm]);
        (0, Hm.useLayoutEffect)((() => (Tm(fm), (0, ra.u)(mm, fm), im.j.gp(ra.o), () => {
          Tm(!1), (0, ra.u)(mm, !1), im.j.gp(ra.o)
        })), [fm, mm, Tm]), (0, IA.g)("appManagerUpdated|activeInputDevice", (mm => {
          "gamepad" !== mm && Dm()
        })), (0, IA.g)("appManagerUpdated|gameState", (mm => {
          "inGame" !== mm && Dm()
        }));
        const Em = () => {
          (0, Rf.n)() && Dm()
        };
        return (0, IA.g)("appManagerUpdated|openEverythingMenuName", Em), (0, IA.g)("appManagerUpdated|openInGameMenuName", Em), {
          open: fm,
          picked: Am,
          pickedRef: xm,
          show: Rm,
          aim: pm,
          close: Dm
        }
      },
      qx = mm => {
        let {
          className: Tm,
          slotCount: fm,
          picked: hm,
          slotLabel: Am,
          renderSlot: am,
          centre: xm
        } = mm;
        const wm = Array.from({
          length: fm
        }, ((mm, Tm) => Tm));
        return (0, rm.jsx)("div", {
          className: Cm()("EmoteWheelOverlay PadRadialWheel", Tm),
          children: (0, rm.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Ox.r + "rem",
              height: 2 * Ox.r + "rem"
            },
            children: [(0, rm.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Ox.o} ${Ox.o}`,
              children: [wm.map((mm => (0, rm.jsx)("path", {
                d: (0, Ox.u)(mm, fm, Ox.h, Ox.k, Ox.n),
                className: Cm()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: mm === hm
                }),
                "aria-label": Am(mm)
              }, mm))), (0, rm.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Ox.h,
                cy: Ox.h,
                r: Ox.n
              }), (0, rm.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Ox.h,
                cy: Ox.h,
                r: Ox.k
              }), null !== hm && (0, rm.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Ox.u)(hm, fm, Ox.h, Ox.k, Ox.n)
              })]
            }), wm.map((mm => {
              const Tm = (0, Ox.x)(mm, fm);
              return (0, rm.jsx)("div", {
                className: Cm()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: mm === hm
                }),
                style: {
                  left: `calc(50% + ${Ox.d*Math.cos(Tm)}rem)`,
                  top: `calc(50% + ${Ox.d*Math.sin(Tm)}rem)`
                },
                "aria-hidden": !0,
                children: am(mm)
              }, mm)
            })), (0, rm.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: xm
            })]
          })
        })
      },
      jx = oa.length,
      Vx = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = Yx("chat", Gf.o), fm = (0, Hm.useMemo)((() => oa.map((Tm => mm(Tm)))), [mm]);
        return (0, IA.g)(Gf.n, (() => {
          Tm.open || (0, Ex.g)() || (0, ox.s)() || "inGame" !== Dm.c.get("gameState") || (0, Rf.n)() || !(0, ef.c)() || Tm.show()
        })), (0, IA.g)(Gf.g, (mm => {
          Tm.open && Tm.aim(mm, jx)
        })), (0, IA.g)(Gf.l, (() => {
          var mm;
          if (!Tm.open) return;
          const hm = Tm.pickedRef.current;
          null !== hm ? Oa.claim(performance.now()) && (Tm.close(), null === (mm = (0, ef.c)()) || void 0 === mm || mm.sendLine(fm[hm])) : Tm.close()
        })), (0, IA.g)(Gf.i, Tm.close), Tm.open ? (0, rm.jsx)(qx, {
          className: "QuickChatWheel",
          slotCount: jx,
          picked: Tm.picked,
          slotLabel: mm => fm[mm],
          renderSlot: mm => fm[mm],
          centre: null !== Tm.picked ? fm[Tm.picked] : mm("controller:quickChatPick")
        }) : null
      },
      Ix = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = Yx("actionButton", ox.u), [fm, hm] = (0, Hm.useState)([]);
        if ((0, IA.g)(ox.l, (mm => {
            Tm.open || (0, Ex.g)() || (0, Gf.c)() || "inGame" !== Dm.c.get("gameState") || (0, Rf.n)() || (hm(mm), Tm.show())
          })), (0, IA.g)(ox.c, (mm => {
            Tm.open && Tm.aim(mm, fm.length)
          })), (0, IA.g)(ox.h, (() => {
            if (!Tm.open) return;
            const mm = Tm.pickedRef.current;
            Tm.close(), null !== mm && im.j.gp(ox.p, fm[mm])
          })), (0, IA.g)(ox.d, Tm.close), !Tm.open) return null;
        const am = null !== Tm.picked ? fm[Tm.picked] : null;
        return (0, rm.jsx)(qx, {
          className: "ActionWheel",
          slotCount: fm.length,
          picked: Tm.picked,
          slotLabel: Tm => {
            const hm = fm[Tm];
            return "reload" === hm.kind ? mm("controller:gameplayReload") : "customButton" === hm.kind ? hm.description || hm.icon : "touchButton" === hm.kind && "string" === typeof hm.label ? hm.label : ""
          },
          renderSlot: mm => (0, rm.jsx)(kA, {
            action: fm[mm]
          }),
          centre: am ? (0, rm.jsx)(kA, {
            action: am
          }) : mm("controller:actionWheelPick")
        })
      };
    var Kx = fm(105);
    const Qx = () => ((0, Hm.useEffect)((() => {
        var mm, Tm;
        const fm = (0, jm.i)(document.getElementById("root")),
          hm = (0, om.f)(),
          Am = (() => {
            const mm = [im.j.subscribe(AA.f, (() => {
                DA("blockBreak")
              })), im.j.subscribe("damagedByOtherPlayer", (() => {
                DA("damage")
              })), im.j.subscribe("yourAttackHit", (mm => {
                let {
                  hitSelf: Tm
                } = mm;
                Tm || DA("hit")
              }))],
              Tm = xm.g.onActivePadChanged((mm => {
                mm && DA("connect")
              }));
            return () => {
              for (const Tm of mm) im.j.unsubscribe(Tm);
              Tm()
            }
          })(),
          am = (() => {
            const mm = new OA({
              getVisitId: oA.f,
              peekVisitId: oA.peekVisitSessionId,
              readReportedVisitId: () => {
                const mm = EA.k.getItem(YA);
                return "string" === typeof mm ? mm : null
              },
              writeReportedVisitId: mm => {
                EA.k.setItem(YA, mm)
              },
              isPadActive: om.m,
              getPadFamily: () => {
                var mm, Tm;
                return null !== (mm = null === (Tm = xm.g.getActivePad()) || void 0 === Tm ? void 0 : Tm.family) && void 0 !== mm ? mm : null
              },
              canReport: RA.k,
              getInputType: pA.d,
              IO: RA.s
            });
            let Tm = 0,
              fm = null;
            const hm = Am => {
                null === fm && ("notReady" !== mm.check(Am) || null !== fm || Tm >= 20 || (Tm++, fm = setTimeout((() => {
                  fm = null, hm(!1)
                }), 3e3)))
              },
              Am = im.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                hm(!0)
              })),
              am = (0, oA.l)((() => {
                Tm = 0, hm(!0)
              }));
            return () => {
              im.j.unsubscribe(Am), am(), null !== fm && clearTimeout(fm)
            }
          })(),
          wm = xm.g.onFrame(((mm, Tm) => {
            const fm = (0, om.q)(mm);
            pm.d.dispatch(mm, Tm, fm)
          }));
        let Rm = null !== (mm = null === (Tm = xm.g.getActivePad()) || void 0 === Tm ? void 0 : Tm.family) && void 0 !== mm ? mm : null;
        const Om = xm.g.onActivePadChanged((mm => {
            var Tm, fm;
            (pm.d.reset(), (0, om.t)(), im.j.gp(xm.c, mm), (null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.family) && void 0 !== Tm ? Tm : null) !== Rm) && (Rm = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.family) && void 0 !== fm ? fm : null, im.j.gp(Em.b, (0, Em.f)()));
            !mm && (0, om.m)() && (0, om.x)(Dm.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Ym = () => {
            "visible" !== document.visibilityState && pm.d.clear()
          },
          qm = () => {
            pm.d.clear()
          };
        document.addEventListener("visibilitychange", Ym), window.addEventListener("blur", qm), xm.g.start(), (0, iA.j)();
        const Vm = null;
        return () => {
          fm(), hm(), Am(), am(), wm(), Om(), document.removeEventListener("visibilitychange", Ym), window.removeEventListener("blur", qm), xm.g.stop(), null === Vm || void 0 === Vm || Vm()
        }
      }), []), (0, rm.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, rm.jsx)(PA, {}), (0, rm.jsx)(BA, {}), (0, rm.jsx)(LA, {}), (0, rm.jsx)(Ha, {}), (0, rm.jsx)(px, {}), (0, rm.jsx)(Vx, {}), (0, rm.jsx)(Ix, {})]
      })),
      nx = () => Kx.featureFlags.useControllerSupport ? (0, rm.jsx)(Qx, {}) : null;
    var Jx = fm(8091),
      cx = fm(8770);
    const zx = new Set(iA.h),
      Zx = mm => `${cx.h}${(0,Em.g)()}/${mm}`,
      kx = mm => {
        if (!(0, cx.g)(mm)) return null;
        const [Tm, fm] = mm.slice(cx.h.length).split("/");
        return (0, Jx.h)(Tm) && zx.has(fm) ? (0, iA.f)(Tm, fm) : null
      };
    var bx = fm(8778);
    const Sx = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, om.z)(), {
          gameState: fm,
          isUiHidden: hm
        } = (0, Dm.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: am,
          sneakMode: xm
        } = (0, Em.n)(), [wm, im] = (0, Hm.useState)(bx.b);
        return (0, IA.g)(XA.o, im), Tm && !hm && "inGame" === fm && wm ? (0, rm.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!am && (0, rm.jsx)(zA, {
            glyph: (0, Rm.k)("toggle" === xm ? "sneak" : "sneakToggle")
          }), (0, rm.jsx)("span", {
            children: mm("controller:gameplaySneaking")
          })]
        }) : null
      },
      ex = 12,
      Nx = mm => {
        let {
          trigger: Tm,
          className: fm,
          children: hm
        } = mm;
        const Am = (0, Hm.useRef)(null);
        return (0, Hm.useEffect)((() => {
          let mm = 0;
          const fm = km(Tm, "y"),
            hm = () => {
              mm = requestAnimationFrame(hm);
              const am = Am.current;
              if (!am || null === Tm || void 0 === Tm || !Tm.isConnected) return;
              const {
                left: xm,
                top: wm
              } = function(mm, Tm, fm) {
                let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const am = mm.left + mm.width / 2,
                  xm = Math.max(ex, fm.width - ex - Tm.width),
                  wm = Math.min(Math.max(am - Tm.width / 2, ex), xm),
                  Dm = fm.height - hm;
                let im = 0,
                  Rm = Dm;
                if (Am) {
                  const mm = Math.max(0, Am.top),
                    hm = Math.min(Dm, Am.bottom);
                  hm - mm >= Math.max(fm.height / 2, Tm.height + 24) && (im = mm, Rm = hm)
                }
                const pm = mm.top + mm.height / 2 < (im + Rm) / 2 ? Rm - ex - Tm.height : im + ex;
                return {
                  left: wm,
                  top: Math.max(ex, pm)
                }
              }(Tm.getBoundingClientRect(), {
                width: am.offsetWidth,
                height: am.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(ua)) || 0, null !== fm && void 0 !== fm && fm.isConnected ? fm.getBoundingClientRect() : null);
              am.style.transform = `translate3d(${Math.round(xm)}px, ${Math.round(wm)}px, 0)`, am.style.visibility = "visible"
            };
          return hm(), () => {
            cancelAnimationFrame(mm)
          }
        }), [Tm]), (0, rm.jsx)("div", {
          ref: Am,
          className: fm,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: hm
        })
      };
    var Gx = fm(1089),
      Xx = fm(8780),
      Px = fm(1454),
      Hx = fm(8785),
      yx = fm(8788);
    const Cx = {
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
      rx = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, om.z)(), fm = (0, Xx.d)(), hm = (0, lA.g)("_tasks"), am = (0, lA.g)("_availableLeaderboards");
        if (!Tm) return null;
        const xm = (mm => {
          let {
            hasShop: Tm,
            hasTasksOrLeaderboards: fm,
            canInvite: hm
          } = mm;
          const Am = [];
          return Tm && Am.push("shop"), fm && Am.push("tasks"), hm && Am.push("invite"), Am.push("leave"), Am
        })({
          hasShop: fm,
          hasTasksOrLeaderboards: !(!hm && !am),
          canInvite: !!Kx.featureFlags.canUseInviteLinks
        });
        return (0, rm.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: xm.map((Tm => {
            const {
              icon: fm,
              labelKey: hm
            } = Cx[Tm], Am = "leave" === Tm ? Px.O : Px.e;
            return (0, rm.jsx)(Am, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (mm => {
                  switch (mm) {
                    case "shop":
                      return im.j.gp(yx.g), void Dm.c.set({
                        openEverythingMenuName: Df.n.SHOP
                      });
                    case "tasks":
                      return void im.j.gp("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void im.j.gp("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Hx.b)()
                  }
                })(Tm)
              },
              children: (0, rm.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, rm.jsx)(Gx.c, {
                  name: fm
                }), (0, rm.jsx)("span", {
                  children: mm(hm)
                })]
              })
            }, Tm)
          }))
        })
      };
    var sx = fm(1957);
    const lx = Om.F,
      Mx = ["forward", "backward", "left", "right", "sprint"],
      ux = mm => mm.ctrlKey || mm.altKey || "Alt" === mm.key || "ArrowUp" === mm.key || "ArrowDown" === mm.key || "Tab" === mm.code || "/" === mm.key || "Slash" === mm.code;
    class Bx {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Om.Z).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(mm) {
        this.armed = mm
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Tm ? !mm.repeat && this.swallowedKeys.delete(mm.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(mm.code),
          continues: !1
        } : "Escape" === mm.key || mm.repeat && !this.swallowedKeys.has(mm.code) ? {
          swallow: !1,
          continues: !1
        } : fm ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(mm.code), {
          swallow: !0,
          continues: (0, om.i)(mm)
        })
      }
      onKeyUp(mm) {
        return this.swallowedKeys.delete(mm.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Am = (0, Om.w)(mm.values, this.previousHeld),
          am = null === fm ? -1 : (0, Om.p)(fm),
          xm = am >= 0 && Am[am] && !this.previousHeld[am],
          wm = Am.some(((mm, Tm) => mm && !this.previousHeld[Tm] && Tm !== am)),
          Dm = Math.hypot(mm.leftStick.x, mm.leftStick.y) >= lx,
          im = Math.hypot(mm.rightStick.x, mm.rightStick.y) >= lx,
          Rm = Dm && !this.leftStickWasPressed || im && !this.rightStickWasPressed;
        this.previousHeld = Am, this.leftStickWasPressed = Dm, this.rightStickWasPressed = im;
        let pm = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, pm = !0);
        const Em = !Tm && xm && !hm,
          om = !Em && this.armed && !Tm && (wm || Rm);
        return (Em || om) && (this.consumeNextFrame = !0, this.consumeAfterContinue = om, pm = !0), {
          continues: om,
          back: Em,
          consumeHeld: pm
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Lx = new Set([...sx.j, ...sx.x]),
      vx = mm => ((mm, Tm, fm) => {
        const hm = Object.keys(Tm).filter((hm => !fm.has(hm) && Tm[hm].includes(mm)));
        return hm.length > 0 && hm.every((mm => Mx.includes(mm)))
      })(mm, sx.r, Lx),
      tx = (mm, Tm, fm) => {
        const hm = new Bx,
          Am = mm => {
            if (!mm.isTrusted) return;
            const {
              swallow: fm,
              continues: Am
            } = hm.onKeyDown(mm, !(0, om.E)(mm) || (0, hA.h)() || (0, Rf.n)(), vx(mm.code));
            fm && (mm.stopImmediatePropagation(), ux(mm) && mm.preventDefault()), Am && ((0, om.x)("keyboardMouse"), Tm())
          },
          am = mm => {
            mm.isTrusted && hm.onKeyUp(mm) && (mm.stopImmediatePropagation(), ux(mm) && mm.preventDefault())
          },
          wm = () => {
            hm.forgetKeys()
          };
        window.addEventListener("keydown", Am, !0), window.addEventListener("keyup", am, !0), window.addEventListener("blur", wm);
        const Dm = xm.g.onFrame((mm => {
            const Am = pm.d.getActiveConsumerName(),
              am = fm(),
              xm = am ? (0, Rm.k)("menuBack") : null,
              wm = null !== Am && "gameplay" !== Am,
              {
                continues: Dm,
                back: im,
                consumeHeld: Om
              } = hm.onPadFrame(mm, wm, xm, (0, om.p)(mm));
            if (Om) {
              const mm = (0, Em.f)().swapSticks ? "right" : "left";
              pm.d.consumeAllHeld(hm.consumeLeavesMoveStick() ? mm : null)
            }
            im ? null === am || void 0 === am || am() : Dm && Tm()
          })),
          im = (0, hA.j)(`pressToContinue:${mm}`, (() => hm.blocksGameplay()));
        return {
          setArmed: mm => {
            hm.setArmed(mm)
          },
          dispose: () => {
            window.removeEventListener("keydown", Am, !0), window.removeEventListener("keyup", am, !0), window.removeEventListener("blur", wm), Dm(), im()
          }
        }
      };
    var Ux = fm(4954),
      dx = fm(3433),
      gx = fm(3127),
      Wx = fm(8098);
    const Fx = mm => {
        let {
          text: Tm
        } = mm;
        return (0, rm.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Tm
        })
      },
      mw = mm => {
        let {
          label: Tm,
          hint: fm,
          options: hm,
          value: am,
          onChange: xm
        } = mm;
        const {
          t: wm
        } = (0, Am.A)();
        return (0, rm.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, rm.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, rm.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, rm.jsx)("div", {
                className: "SliderText",
                children: Tm
              }), fm && (0, rm.jsx)("div", {
                className: "ControllerSettingsHint",
                children: fm
              })]
            }), (0, rm.jsx)(gx.d, {
              options: hm.map((mm => ({
                label: "label" in mm ? mm.label : wm(mm.labelKey),
                value: mm.value
              }))),
              value: am,
              onChange: mm => {
                xm(mm.value)
              }
            })]
          })
        })
      },
      Tw = mm => {
        let {
          settingKey: Tm,
          label: fm,
          range: hm,
          format: Am
        } = mm;
        const am = (0, Em.n)();
        return (0, rm.jsx)(Ux.m, {
          name: fm,
          min: hm.min,
          max: hm.max,
          step: hm.step,
          padStep: hm.step,
          initValue: am[Tm],
          format: Am,
          onChange: mm => {
            (0, Em.j)({
              [Tm]: (0, Wx.w)(mm, hm)
            })
          }
        })
      };
    var fw = fm(8792),
      hw = fm(8799);
    const Aw = mm => mm instanceof DOMException && ("SecurityError" === mm.name || "NotAllowedError" === mm.name),
      aw = mm => {
        const [Tm] = [...mm.controllers].sort(((mm, Tm) => hw.k[mm] - hw.k[Tm]));
        return hw.i[Tm]
      },
      xw = mm => {
        (0, fw.b)().allowPhoneMotion().catch((Tm => {
          mm && Aw(Tm) ? mm() : console.warn("Could not enable the motion sensor", Tm)
        }))
      },
      ww = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Dw = mm => {
        let {
          status: Tm
        } = mm;
        const {
          t: fm
        } = (0, Am.A)(), [hm, am] = (0, Hm.useState)(null), xm = `${Tm.controllers.join(",")}|${Tm.phoneMotion}`;
        (0, Hm.useEffect)((() => {
          am(null)
        }), [xm]);
        const wm = () => {
          (0, fw.b)().connectController().then((mm => {
            am(mm > 0 ? "openFailed" : null)
          })).catch((mm => {
            Aw(mm) ? am("needsClick") : console.warn("Could not connect motion controller", mm)
          }))
        };
        if (Tm.hidSupported) {
          let mm = fm("controller:settingsGyroConnectHint");
          return "needsClick" === hm ? mm = fm("controller:settingsGyroConnectNeedsClick") : "openFailed" === hm ? mm = fm("controller:settingsGyroOpenFailed") : Tm.controllers.length > 0 && (mm = fm("controller:settingsGyroConnected", {
            name: aw(Tm)
          })), (0, rm.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, rm.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, rm.jsx)("div", {
                className: "ControllerSettingsHint",
                children: mm
              }), (0, rm.jsx)(Px.e, {
                onClick: wm,
                children: fm("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Tm.phoneMotion) return (0, rm.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, rm.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === hm && (0, rm.jsx)("div", {
              className: "ControllerSettingsHint",
              children: fm("controller:settingsGyroAllowNeedsTap")
            }), (0, rm.jsx)(Px.e, {
              onClick: () => {
                xw((() => {
                  am("needsTap")
                }))
              },
              children: fm("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Dm = ww[Tm.phoneMotion];
        return Dm ? (0, rm.jsx)("div", {
          className: "ControllerSettingsHint",
          children: fm(Dm)
        }) : null
      },
      iw = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, Em.n)(), fm = (0, fw.c)(), hm = (0, om.A)(), am = !fm.hidSupported && fm.phoneSupported && !fm.padConnected, xm = (fm.hidSupported || fm.phoneSupported) && !am, wm = (0, Rm.k)("pause");
        return (0, rm.jsxs)(rm.Fragment, {
          children: [(0, rm.jsx)(Fx, {
            text: mm("controller:settingsGyro")
          }), am && (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mm("controller:settingsGyroPhoneNeedsController")
          }), !xm && !am && (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mm(fm.hidBlocked || fm.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), xm && (0, rm.jsx)(Ux.e, {
            label: mm(fm.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Tm.gyroAiming,
            onClick: mm => {
              var Tm, fm;
              (0, Em.j)({
                gyroAiming: mm
              });
              const hm = null === (Tm = null === (fm = navigator.userActivation) || void 0 === fm ? void 0 : fm.isActive) || void 0 === Tm || Tm;
              if (!mm || !hm) return;
              const Am = (0, fw.b)(),
                am = Am.getStatus();
              am.hidSupported ? Am.connectControllerIfNoneGranted().catch((mm => {
                console.warn("Motion controller picker unavailable", mm)
              })) : "needsPermission" === am.phoneMotion && xw()
            },
            circleInfoText: mm(fm.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), xm && fm.hidSupported && (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mm("controller:settingsGyroSteamHint")
          }), xm && Tm.gyroAiming && (0, rm.jsxs)(rm.Fragment, {
            children: [(0, rm.jsx)(Dw, {
              status: fm
            }), (0, rm.jsx)(Tw, {
              settingKey: "gyroSensitivity",
              label: mm("controller:settingsGyroSensitivity"),
              range: Wx.X,
              format: Wx.N
            }), (0, rm.jsx)(mw, {
              label: mm("controller:settingsGyroActivation"),
              hint: "aiming" === Tm.gyroActivation && (0, rm.jsx)(dx.e, {
                text: mm("controller:settingsGyroAimingHint", {
                  button: dx.f
                }),
                glyph: (0, Rm.k)("use")
              }),
              options: Wx.V,
              value: Tm.gyroActivation,
              onChange: mm => {
                (0, Em.j)({
                  gyroActivation: mm
                })
              }
            }), "button" === Tm.gyroActivation && (0, rm.jsx)(mw, {
              label: mm("controller:settingsGyroButton"),
              hint: mm("controller:settingsGyroButtonHint"),
              options: Wx.r.filter((mm => mm !== wm || mm === Tm.gyroButton)).map((mm => ({
                label: cA(hm, mm),
                value: mm
              }))),
              value: Tm.gyroButton,
              onChange: mm => {
                (0, Em.j)({
                  gyroButton: mm
                })
              }
            })]
          })]
        })
      };
    var Rw = fm(1842);
    const pw = () => {
      const {
        t: mm
      } = (0, Am.A)(), Tm = (0, Em.n)(), fm = (0, om.A)();
      return (0, rm.jsxs)(rm.Fragment, {
        children: [(0, rm.jsx)(Fx, {
          text: mm("controller:settingsAccessibility")
        }), (0, rm.jsx)(Ux.e, {
          label: mm("controller:settingsSwapConfirmBack"),
          checked: (0, Rm.K)(Tm.swapConfirmBack, fm),
          onClick: mm => {
            (0, Em.j)({
              swapConfirmBack: mm === (0, Rm.K)(null, fm) ? null : mm
            }), Rw.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: mm("controller:settingsSwapConfirmBackInfo")
        }), (0, rm.jsx)(mw, {
          label: mm("controller:settingsButtonRepeat"),
          hint: mm("controller:settingsButtonRepeatHint"),
          options: Wx.o,
          value: Tm.buttonRepeat,
          onChange: mm => {
            (0, Em.j)({
              buttonRepeat: mm
            })
          }
        }), (0, rm.jsx)(mw, {
          label: mm("controller:settingsTapHoldTime"),
          hint: mm("controller:settingsTapHoldTimeHint"),
          options: Wx.Ab,
          value: Tm.tapHoldTime,
          onChange: mm => {
            (0, Em.j)({
              tapHoldTime: mm
            })
          }
        }), (0, rm.jsx)(mw, {
          label: mm("controller:settingsEmoteButton"),
          hint: mm("wheel" === Tm.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Wx.G,
          value: Tm.emoteButton,
          onChange: mm => {
            (0, Em.j)({
              emoteButton: mm
            })
          }
        }), (0, rm.jsx)(mw, {
          label: mm("controller:settingsAttackMode"),
          hint: mm("toggle" === Tm.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Wx.l,
          value: Tm.attackMode,
          onChange: mm => {
            (0, Em.j)({
              attackMode: mm
            })
          }
        }), (0, rm.jsx)(Ux.e, {
          label: mm("controller:settingsLargePointer"),
          checked: Tm.largePointer,
          onClick: mm => {
            (0, Em.j)({
              largePointer: mm
            })
          },
          circleInfoText: mm("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Ew = fm(8806);
    const ow = new class {
        constructor(mm) {
          this.router = mm, this.current = null
        }
        claim(mm, Tm) {
          const fm = this.current;
          fm && (this.current = null, fm.release(), fm.onTakenOver());
          const hm = this.router.register({
              ...mm,
              name: "capture"
            }),
            Am = {
              release: hm,
              onTakenOver: Tm
            };
          return this.current = Am, () => {
            this.current === Am && (this.current = null), hm()
          }
        }
      }(pm.d),
      Ow = mm => {
        (0, Hm.useEffect)((() => {
          if (!mm) return;
          const Tm = mm();
          let fm = !1;
          const hm = () => {
              fm || (fm = !0, Tm.onEnd())
            },
            Am = ow.claim({
              isActive: () => !fm,
              onFrame: mm => {
                Tm.onFrame(mm, hm)
              }
            }, hm),
            am = void 0 === Tm.timeoutMs ? void 0 : window.setTimeout(hm, Tm.timeoutMs),
            xm = mm => {
              "Escape" === mm.key && (mm.preventDefault(), mm.stopPropagation(), hm())
            };
          return window.addEventListener("keydown", xm, !0), () => {
            fm = !0, Am(), window.clearTimeout(am), window.removeEventListener("keydown", xm, !0)
          }
        }), [mm])
      },
      Yw = mm => {
        let {
          row: Tm,
          capturing: fm,
          onCapture: hm,
          holdFillRef: am,
          onRebind: xm,
          swapped: wm
        } = mm;
        const {
          t: Dm
        } = (0, Am.A)();
        if ("fixed" === Tm.kind) return (0, rm.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, rm.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, rm.jsx)("div", {
              className: "ControlName",
              children: Dm(Tm.labelKey)
            }), (0, rm.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, rm.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, rm.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, rm.jsx)(zA, {
                    glyph: "move" === Tm.stick ? (0, Rm.u)() : (0, Rm.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: im
        } = Tm, pm = (0, Rm.k)(im), Em = (0, Rm.n)(im), om = pm !== Em && (0, Rm.d)(im, Em);
        return (0, rm.jsxs)("div", {
          className: Cm()("ControlRow PadControlRow", {
            Capturing: fm
          }),
          children: [(0, rm.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, rm.jsx)("div", {
              className: "ControlName",
              children: Dm(Wx.h[im])
            }), (0, rm.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!fm && (0, rm.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, rm.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hm(im)
                  },
                  children: (0, rm.jsx)(zA, {
                    glyph: pm
                  })
                }), om && (0, rm.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Dm("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    xm(im, Em)
                  },
                  children: (0, rm.jsx)(Gx.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), fm && (0, rm.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, rm.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, rm.jsx)("span", {
                    children: Dm("controller:settingsCapturePrompt")
                  }), (0, rm.jsx)("div", {
                    ref: am,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, rm.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hm(null)
                  },
                  children: "\xd7"
                })]
              }), fm && (0, rm.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, rm.jsx)(dx.e, {
                  text: Dm((0, Rm.d)(im, (0, Rm.k)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: dx.f
                  }),
                  glyph: (0, Rm.k)("menuBack")
                })
              })]
            })]
          }), wm.map((mm => (0, rm.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, rm.jsx)(dx.e, {
              text: Dm("controller:settingsSwapNotice", {
                action: Dm(Wx.h[mm]),
                button: dx.f
              }),
              glyph: (0, Rm.k)(mm)
            })
          }, mm))), fm && (0, rm.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Wx.u}ms`
            }
          })]
        })
      },
      qw = [],
      jw = mm => {
        let {
          layoutSetting: Tm
        } = mm;
        const {
          t: fm
        } = (0, Am.A)(), hm = (0, Em.n)();
        (0, om.A)();
        const am = (0, Hm.useRef)(null),
          [xm, wm] = (0, Hm.useState)(null),
          Dm = (0, Hm.useCallback)(((mm, Tm) => {
            const fm = (0, Em.f)().bindings;
            (0, Rm.F)(mm, Tm);
            const hm = (0, Rm.y)(fm, mm);
            wm(hm.length > 0 ? {
              action: mm,
              swapped: hm
            } : null)
          }), []),
          [im, Ym] = ((mm, Tm) => {
            const [fm, hm] = (0, Hm.useState)(null), Am = (0, Hm.useMemo)((() => fm ? () => {
              const Am = (0, Rm.k)("menuBack"),
                am = new Wx.c(Am, (0, Rm.k)("menuConfirm"), (mm => (0, Rm.d)(fm, mm)));
              return {
                onFrame: (hm, xm) => {
                  var wm;
                  const Dm = hm.frame.timestampMs,
                    im = am.update({
                      ...hm,
                      isDown: mm => (0, Om.N)(hm.frame.values, mm)
                    }, Dm);
                  null === (wm = mm.current) || void 0 === wm || wm.style.setProperty("width", 100 * am.getBindHoldProgress(Dm) + "%"), im && ("bind" === im.kind ? (pm.d.consumeButton(im.button), Tm(fm, im.button)) : pm.d.consumeButton(Am), xm())
                },
                onEnd: () => {
                  hm(null)
                },
                timeoutMs: Wx.u
              }
            } : null), [fm, mm, Tm]);
            return Ow(Am), [fm, hm]
          })(am, Dm),
          qm = mm => {
            mm && wm(null), Ym(mm)
          };
        (0, Hm.useEffect)((() => {
          if (!xm) return;
          const mm = window.setTimeout((() => {
            wm(null)
          }), Wx.wb);
          return () => {
            window.clearTimeout(mm)
          }
        }), [xm]);
        const jm = !hm.swapSticks && 0 === Object.keys(hm.bindings).length;
        return (0, rm.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, rm.jsx)("div", {
            className: "SliderText",
            children: fm("controller:settingsRemap")
          }), (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: fm("controller:settingsRemapHint")
          }), (0, rm.jsx)(Px.O, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: jm,
            onClick: () => {
              qm(null), wm(null), (0, Rm.J)()
            },
            children: fm("controller:settingsResetAll")
          }), Tm, Wx.ob.map(((mm, Tm) => (0, rm.jsx)(Ew.b, {
            title: fm(mm.titleKey),
            defaultOpen: 0 === Tm,
            children: mm.rows.map((mm => (0, rm.jsx)(Yw, {
              row: mm,
              capturing: "action" === mm.kind && mm.action === im,
              onCapture: qm,
              holdFillRef: am,
              onRebind: Dm,
              swapped: "action" === mm.kind && (null === xm || void 0 === xm ? void 0 : xm.action) === mm.action ? xm.swapped : qw
            }, "action" === mm.kind ? mm.action : mm.labelKey)))
          }, mm.titleKey)))]
        })
      },
      Vw = mm => {
        let {
          deadzone: Tm,
          dotRef: fm,
          labelKey: hm
        } = mm;
        const {
          t: am
        } = (0, Am.A)();
        return (0, rm.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, rm.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, rm.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Tm + "%",
                height: 100 * Tm + "%"
              }
            }), (0, rm.jsx)("div", {
              ref: fm,
              className: "ControllerTesterDot"
            })]
          }), (0, rm.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: am(hm)
          })]
        })
      },
      Iw = (mm, Tm, fm, hm) => {
        var Am;
        mm && (mm.style.left = 50 + 50 * Math.max(-1, Math.min(1, Tm.x)) + "%", mm.style.top = 50 + 50 * Math.max(-1, Math.min(1, Tm.y)) + "%", null === (Am = mm.parentElement) || void 0 === Am || Am.classList.toggle("Active", hm || Math.hypot(Tm.x, Tm.y) > fm))
      },
      Kw = mm => {
        const Tm = {
            deadzone: mm.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          fm = {
            deadzone: mm.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return mm.swapSticks ? {
          left: fm,
          right: Tm
        } : {
          left: Tm,
          right: fm
        }
      },
      Qw = () => {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (() => {
          const [mm, Tm] = (0, Hm.useState)((() => xm.g.getActivePad()));
          return (0, IA.g)(xm.c, (() => {
            Tm(xm.g.getActivePad())
          })), mm
        })(), fm = Kw((0, Em.n)()), hm = (0, Hm.useRef)(null), am = (0, Hm.useRef)(null), wm = (0, Hm.useRef)([]), Dm = (0, Hm.useRef)(null), im = (0, Hm.useRef)(null), [om, Ym] = (mm => {
          const [Tm, fm] = (0, Hm.useState)(!1), hm = (0, Hm.useMemo)((() => Tm ? () => {
            const Tm = (0, Rm.k)("menuBack"),
              hm = new Wx.f;
            return {
              onFrame: (fm, Am) => {
                var am;
                const xm = hm.update({
                  pressed: fm.wasPressed(Tm),
                  ni: fm.isHeld(Tm)
                }, fm.frame.timestampMs);
                null === (am = mm.current) || void 0 === am || am.style.setProperty("width", 100 * xm + "%"), xm >= 1 && (pm.d.consumeButton(Tm), Am())
              },
              onEnd: () => {
                fm(!1)
              }
            }
          } : null), [Tm, mm]);
          return Ow(hm), [Tm, fm]
        })(am);
        (0, Hm.useEffect)((() => {
          const mm = mm => {
            for (const fm of Om._) {
              const Tm = (0, Om.p)(fm),
                hm = wm.current[Tm];
              if (!hm) continue;
              const Am = mm.values[Tm];
              hm.classList.toggle("Pressed", Am >= Om.F), (0, Om.O)(Tm) && hm.style.setProperty("--trigger-fill", `${Math.round(100*Am)}%`)
            }
            const Tm = Kw((0, Em.f)());
            Iw(Dm.current, mm.leftStick, Tm.left.deadzone, mm.values[(0, Om.p)("LS")] >= Om.F), Iw(im.current, mm.rightStick, Tm.right.deadzone, mm.values[(0, Om.p)("RS")] >= Om.F)
          };
          return Tm || mm((0, Om.B)()), xm.g.onFrame(mm)
        }), [Tm]), (0, Hm.useEffect)((() => {
          Tm || Ym(!1)
        }), [Tm, Ym]), (0, Hm.useEffect)((() => {
          var mm;
          om && (null === (mm = hm.current) || void 0 === mm || mm.scrollIntoView({
            block: "nearest"
          }))
        }), [om]);
        const qm = Wx.hb.find((mm => mm.value === (null === Tm || void 0 === Tm ? void 0 : Tm.family)));
        return (0, rm.jsxs)("div", {
          ref: hm,
          className: Cm()("SettingBox ControllerTester", {
            Testing: om
          }),
          children: [(0, rm.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, rm.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Tm && (0, rm.jsx)("div", {
                children: mm("controller:settingsTesterFamily", {
                  family: qm ? mm(qm.labelKey) : Tm.family
                })
              }), Tm && (0, rm.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Tm.id
              }), !Tm && (0, rm.jsx)("div", {
                children: mm("controller:settingsTesterNoPad")
              })]
            }), (Tm || om) && (0, rm.jsx)(Px.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Ym(!om)
              },
              children: mm(om ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Tm && !om && (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mm("controller:settingsTesterHint")
          }), om && (0, rm.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, rm.jsx)(dx.e, {
              text: mm("controller:settingsTesterTesting", {
                button: dx.f
              }),
              glyph: (0, Rm.k)("menuBack")
            }), (0, rm.jsx)("div", {
              ref: am,
              className: "ControllerTesterExitFill"
            })]
          }), (0, rm.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, rm.jsx)(Vw, {
              deadzone: fm.left.deadzone,
              dotRef: Dm,
              labelKey: fm.left.labelKey
            }), (0, rm.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Om._.map((mm => {
                const fm = (0, Om.p)(mm);
                return (0, rm.jsx)("div", {
                  ref: mm => {
                    wm.current[fm] = mm
                  },
                  className: (0, Om.O)(fm) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, rm.jsx)(zA, {
                    glyph: mm,
                    family: null === Tm || void 0 === Tm ? void 0 : Tm.family
                  })
                }, mm)
              }))
            }), (0, rm.jsx)(Vw, {
              deadzone: fm.right.deadzone,
              dotRef: im,
              labelKey: fm.right.labelKey
            })]
          })]
        })
      },
      nw = (0, Hm.memo)((function() {
        const {
          t: mm
        } = (0, Am.A)(), Tm = (0, Em.n)(), [fm, hm] = (0, Hm.useState)(!1);
        return (0, Hm.useEffect)((() => {
          if (!fm) return;
          const mm = window.setTimeout((() => {
            hm(!1)
          }), Wx.wb);
          return () => {
            window.clearTimeout(mm)
          }
        }), [fm]), (0, rm.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, rm.jsx)(Fx, {
            text: mm("controller:settingsLook")
          }), (0, rm.jsx)(Tw, {
            settingKey: "lookSensitivityX",
            label: mm("controller:settingsLookSensitivityX"),
            range: Wx.pb,
            format: Wx.R
          }), (0, rm.jsx)(Tw, {
            settingKey: "lookSensitivityY",
            label: mm("controller:settingsLookSensitivityY"),
            range: Wx.pb,
            format: Wx.R
          }), (0, rm.jsx)(Tw, {
            settingKey: "aimLookSensitivity",
            label: mm("controller:settingsAimLookSensitivity"),
            range: Wx.k,
            format: Wx.R
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsLookCurve"),
            hint: mm("controller:settingsLookCurveHint"),
            options: Wx.fb,
            value: Tm.lookCurve,
            onChange: mm => {
              (0, Em.j)({
                lookCurve: mm
              })
            }
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsInvertLookX"),
            checked: Tm.invertLookX,
            onClick: mm => {
              (0, Em.j)({
                invertLookX: mm
              })
            }
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsInvertLookY"),
            checked: Tm.invertLookY,
            onClick: mm => {
              (0, Em.j)({
                invertLookY: mm
              })
            }
          }), (0, rm.jsx)(Tw, {
            settingKey: "lookDeadzone",
            label: mm("controller:settingsLookDeadzone"),
            range: Wx.C,
            format: Wx.K
          }), (0, rm.jsx)(iw, {}), (0, rm.jsx)(Fx, {
            text: mm("controller:settingsMovement")
          }), (0, rm.jsx)(Tw, {
            settingKey: "moveDeadzone",
            label: mm("controller:settingsMoveDeadzone"),
            range: Wx.C,
            format: Wx.K
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsAutoSprint"),
            checked: Tm.autoSprint,
            onClick: mm => {
              (0, Em.j)({
                autoSprint: mm
              })
            },
            circleInfoText: mm("controller:settingsAutoSprintInfo")
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsSneak"),
            options: Wx.sb,
            value: Tm.sneakMode,
            onChange: mm => {
              (0, Em.j)({
                sneakMode: mm
              })
            }
          }), (0, rm.jsx)(Fx, {
            text: mm("controller:settingsButtons")
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsPromptFamily"),
            options: Wx.hb,
            value: Tm.promptFamily,
            onChange: mm => {
              (0, Em.j)({
                promptFamily: mm
              })
            }
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsHideButtonHints"),
            checked: Tm.hideButtonHints,
            onClick: mm => {
              (0, Em.j)({
                hideButtonHints: mm
              })
            }
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsVibration"),
            checked: Tm.vibration,
            onClick: mm => {
              (0, Em.j)({
                vibration: mm
              }), mm && DA("preview")
            }
          }), (0, rm.jsx)(Tw, {
            settingKey: "cursorSpeed",
            label: mm("controller:settingsCursorSpeed"),
            range: Wx.y,
            format: Wx.R
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsCursorMagnetism"),
            checked: Tm.cursorMagnetism,
            onClick: mm => {
              (0, Em.j)({
                cursorMagnetism: mm
              })
            }
          }), (0, rm.jsx)(Ux.e, {
            label: mm("controller:settingsMenuBackToCategories"),
            checked: Tm.menuBackToCategories,
            onClick: mm => {
              (0, Em.j)({
                menuBackToCategories: mm
              })
            }
          }), (0, rm.jsx)(jw, {
            layoutSetting: (0, rm.jsxs)(rm.Fragment, {
              children: [Rm.g.map((fm => (0, rm.jsx)(Ux.e, {
                label: mm(Wx.ab[fm]),
                checked: (0, Rm.C)(fm, Tm),
                onClick: mm => {
                  hm(!(0, Rm.L)(fm, mm))
                }
              }, fm))), fm && (0, rm.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: mm("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, rm.jsx)(pw, {}), (0, rm.jsx)(Fx, {
            text: mm("controller:settingsAlternatives")
          }), (0, rm.jsx)("div", {
            className: "ControllerSettingsHint",
            children: mm("controller:settingsAlternativesHint")
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsMenuNavigation"),
            hint: mm("controller:settingsMenuNavigationHint"),
            options: Wx.gb,
            value: Tm.menuNavigation,
            onChange: mm => {
              (0, Em.j)({
                menuNavigation: mm
              })
            }
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsInventoryNavigation"),
            hint: mm("controller:settingsInventoryNavigationHint"),
            options: Wx.Y,
            value: Tm.inventoryNavigation,
            onChange: mm => {
              (0, Em.j)({
                inventoryNavigation: mm
              })
            }
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsQuickChat"),
            hint: mm("controller:settingsQuickChatHint"),
            options: Wx.kb,
            value: Tm.quickChat,
            onChange: mm => {
              (0, Em.j)({
                quickChat: mm
              })
            }
          }), (0, rm.jsx)(mw, {
            label: mm("controller:settingsLeaderboardButton"),
            hint: mm("controller:settingsLeaderboardButtonHint"),
            options: Wx.db,
            value: Tm.leaderboardButton,
            onChange: mm => {
              (0, Em.j)({
                leaderboardButton: mm
              })
            }
          }), (0, rm.jsx)(Fx, {
            text: mm("controller:settingsTester")
          }), (0, rm.jsx)(Qw, {})]
        })
      }));
    (0, Am.d)(hm);
    for (const bw of (0, am.p)()) bw.connected ? xm.g.handleConnectionEvent(bw) : xm.g.handleDisconnectionEvent(bw);
    const Jw = () => null !== xm.g.getActivePad(),
      zw = () => af.getState(),
      Zw = () => af.isSteppingSlots(),
      kw = (mm, Tm) => {
        const fm = fA.getFocused();
        fA.isActive() && fm && mm.contains(fm) && fA.setFocus(Tm, {
          scroll: !1
        })
      }
  },
  8072: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      c: () => im
    });
    var hm = fm(1425),
      Am = fm(1418);
    const am = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      xm = "28de",
      wm = new Set(["1205"]),
      Dm = (mm, Tm) => {
        const fm = (0, hm.d)(mm);
        if ((null === fm || void 0 === fm ? void 0 : fm.vendor) === xm) return wm.has(fm.product) ? "steamdeck" : "xbox";
        if (fm && am[fm.vendor]) return am[fm.vendor];
        if ((0, Am.c)(mm)) return "nintendo";
        const Dm = `${mm} ${null!==Tm&&void 0!==Tm?Tm:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Dm) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Dm) ? "nintendo" : /steam deck/.test(Dm) ? "steamdeck" : "xbox"
      },
      im = mm => {
        var Tm;
        return (null === (Tm = (0, hm.d)(mm)) || void 0 === Tm ? void 0 : Tm.vendor) === xm
      }
  },
  8110: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      g: () => wm
    });
    var hm = fm(8066);
    const Am = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      am = new Set(["capture", "gameplay"]),
      xm = ["Up", "Down", "Left", "Right"],
      wm = mm => xm.includes(mm),
      Dm = .25;
    const im = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.ni = new Array(hm.Z).fill(!1), this.previousHeld = new Array(hm.Z).fill(!1), this.consumedButtons = new Array(hm.Z).fill(!1), this.suppressedReleases = new Array(hm.Z).fill(!1), this.wakeOwned = new Array(hm.Z).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, hm.B)()
      }
      register(mm) {
        return this.consumers.has(mm.name) && console.warn(`Controller consumer "${mm.name}" registered twice; the newer one replaces it.`), this.consumers.set(mm.name, mm), () => {
          var Tm;
          this.consumers.get(mm.name) === mm && (this.activeName === mm.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Tm = this.peek) || void 0 === Tm ? void 0 : Tm.over) === mm.name && (this.peek = null), this.consumers.delete(mm.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(mm) {
        return this.ni[(0, hm.p)(mm)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.ni = new Array(hm.Z).fill(!1), this.previousHeld = new Array(hm.Z).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, hm.B)()
      }
      dispatch(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = mm, this.previousHeld = this.ni, this.ni = (0, hm.w)(mm.values, this.previousHeld);
        for (let am = 0; am < hm.Z; am++) this.suppressedReleases[am] = !this.ni[am] && this.consumedButtons[am], this.ni[am] || (this.consumedButtons[am] = !1), this.wakeOwned[am] && (this.ni[am] ? (this.consumedButtons[am] = !0, this.wakeOwned[am] = !1) : mm.values[am] < hm.Y && (this.wakeOwned[am] = !1));
        Math.hypot(mm.leftStick.x, mm.leftStick.y) < Dm && (this.leftStickConsumed = !1), Math.hypot(mm.rightStick.x, mm.rightStick.y) < Dm && (this.rightStickConsumed = !1);
        const Am = this.pickActive();
        if ((null === Am || void 0 === Am ? void 0 : Am.name) !== this.activeName) {
          var xm, wm, im, Rm, pm, Em;
          const mm = this.activeName,
            Tm = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            fm = null !== (xm = null === Am || void 0 === Am || null === (wm = Am.peek) || void 0 === wm ? void 0 : wm.call(Am)) && void 0 !== xm ? xm : null,
            am = null === mm && !!fm && !(null === (im = this.consumers.get(fm.over)) || void 0 === im || !im.onPeekFrame),
            Dm = fm && (fm.over === mm || am) ? fm : null,
            om = null !== this.peek && this.peek.over === (null === Am || void 0 === Am ? void 0 : Am.name) ? this.peek : null;
          this.deactivateCurrent(null !== Dm, null !== om), this.activeName = null !== (Rm = null === Am || void 0 === Am ? void 0 : Am.name) && void 0 !== Rm ? Rm : null, null === mm || this.handOffPending || this.consumeAllHeld();
          const Om = null === (pm = null !== Dm && void 0 !== Dm ? Dm : om) || void 0 === pm ? void 0 : pm.stick;
          "left" === Om && Tm.left ? this.leftStickConsumed = !1 : "right" === Om && Tm.right && (this.rightStickConsumed = !1), this.peek = Dm, Am || null === mm ? Am && (null === (Em = this.idleResume) || void 0 === Em ? void 0 : Em.name) === Am.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: mm,
            left: Tm.left && this.leftStickConsumed,
            right: Tm.right && this.rightStickConsumed
          }, Am && (this.idleResume = null);
          for (let Am = 0; Am < hm.Z; Am++) this.previousHeld[Am] && !this.ni[Am] && (this.suppressedReleases[Am] = !0)
        }
        var om, Om;
        (this.handOffPending = !1, Am) && (fm && !am.has(Am.name) && this.consumeWakePress(Am), Am.onFrame(this.buildInput(mm, Tm, fm)), this.peek && (null === (om = this.consumers.get(this.peek.over)) || void 0 === om || null === (Om = om.onPeekFrame) || void 0 === Om || Om.call(om, this.buildInput(mm, Tm, !1, this.peek.stick))))
      }
      consumeWakePress(mm) {
        for (let Am = 0; Am < hm.Z; Am++) {
          var Tm, fm;
          const am = hm._[Am];
          (null !== (Tm = null === (fm = mm.wakePressActs) || void 0 === fm ? void 0 : fm.call(mm, am)) && void 0 !== Tm ? Tm : xm.includes(am)) || (this.ni[Am] ? this.consumedButtons[Am] = !0 : this.lastFrame.values[Am] >= hm.V && (this.wakeOwned[Am] = !0))
        }
      }
      pickActive() {
        for (const mm of Am) {
          const Tm = this.consumers.get(mm);
          if (Tm && Tm.isActive()) return Tm
        }
        return null
      }
      deactivateCurrent() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var fm, hm, Am, am;
        this.activeName && (null === (fm = this.consumers.get(this.activeName)) || void 0 === fm || null === (hm = fm.onDeactivate) || void 0 === hm || hm.call(fm, mm));
        this.peek && !Tm && (null === (Am = this.consumers.get(this.peek.over)) || void 0 === Am || null === (am = Am.onDeactivate) || void 0 === am || am.call(Am, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Am = 0; Am < hm.Z; Am++) this.ni[Am] && (this.consumedButtons[Am] = !0);
        const {
          leftStick: Tm,
          rightStick: fm
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== mm && (this.leftStickConsumed || Math.hypot(Tm.x, Tm.y) >= Dm), this.rightStickConsumed = "right" !== mm && (this.rightStickConsumed || Math.hypot(fm.x, fm.y) >= Dm)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(mm) {
        const Tm = (0, hm.p)(mm);
        this.ni[Tm] && (this.consumedButtons[Tm] = !0)
      }
      buildInput(mm, Tm, fm, Am) {
        const am = this.ni,
          xm = this.previousHeld,
          wm = Am ? new Array(hm.Z).fill(!0) : [...this.consumedButtons],
          Dm = Am ? wm : [...this.suppressedReleases],
          im = !this.leftStickConsumed && (!Am || "left" === Am),
          Rm = !this.rightStickConsumed && (!Am || "right" === Am);
        return {
          frame: mm,
          dtMs: Tm,
          isHeld: mm => {
            const Tm = (0, hm.p)(mm);
            return am[Tm] && !wm[Tm]
          },
          wasPressed: mm => {
            const Tm = (0, hm.p)(mm);
            return am[Tm] && !xm[Tm] && !wm[Tm]
          },
          wasReleased: mm => {
            const Tm = (0, hm.p)(mm);
            return !am[Tm] && xm[Tm] && !Dm[Tm]
          },
          value: Tm => {
            const fm = (0, hm.p)(Tm);
            return wm[fm] ? 0 : mm.values[fm]
          },
          leftStick: im ? mm.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Rm ? mm.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: fm
        }
      }
    }
  },
  8088: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm.g,
      c: () => pm.i,
      f: () => km,
      g: () => bm,
      j: () => Sm,
      n: () => em
    });
    var hm = fm(59),
      Am = fm(31),
      am = fm(1449),
      xm = fm(37),
      wm = fm(8091),
      Dm = fm(8066),
      im = fm(8086),
      Rm = fm(8059),
      pm = fm(1987),
      Em = fm(8098);
    const om = {
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
      Om = "controllerSettings",
      Ym = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      qm = ["auto", ...wm.e],
      jm = (mm, Tm) => "string" === typeof Tm && mm.includes(Tm),
      Vm = mm => Tm => "number" === typeof Tm && Number.isFinite(Tm) ? (0, Em.w)(Tm, mm) : void 0,
      Im = mm => "boolean" === typeof mm ? mm : void 0,
      Km = mm => Tm => jm(mm, Tm) ? Tm : void 0,
      Qm = {
        lookSensitivityX: Vm(Em.pb),
        lookSensitivityY: Vm(Em.pb),
        aimLookSensitivity: Vm(Em.k),
        invertLookX: Im,
        invertLookY: Im,
        lookCurve: Km(Dm.R),
        lookDeadzone: Vm(Em.C),
        moveDeadzone: Vm(Em.C),
        swapSticks: Im,
        autoSprint: Im,
        sneakMode: Km(["toggle", "hold"]),
        tapHoldTime: Km(["short", "medium", "long"]),
        attackMode: Km(["hold", "toggle"]),
        promptFamily: Km(qm),
        hideButtonHints: Im,
        vibration: Im,
        cursorSpeed: Vm(Em.y),
        cursorMagnetism: Im,
        buttonRepeat: Km(Dm.s),
        largePointer: Im,
        menuBackToCategories: Im,
        swapConfirmBack: Im,
        menuNavigation: Km(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Km(["hybrid", "slot", "cursor"]),
        quickChat: Km(["wheel", "off"]),
        leaderboardButton: Km(["shop", "leaderboard"]),
        gyroAiming: Im,
        gyroSensitivity: Vm(Em.X),
        gyroActivation: Km(["always", "aiming", "button"]),
        gyroButton: Km(Dm._),
        emoteButton: Km(["tapHold", "wheel"])
      },
      nm = [{
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
      Jm = mm => {
        const Tm = {};
        if ("object" !== typeof mm || null === mm) return Tm;
        for (const [fm, hm] of Object.entries(mm)) Object.prototype.hasOwnProperty.call(im.h, fm) && jm(Dm._, hm) && (Tm[fm] = hm);
        return Tm
      },
      cm = mm => {
        const Tm = {};
        for (const fm of Object.keys(om))("bindings" === fm ? Object.keys(mm.bindings).length > 0 : mm[fm] !== om[fm]) && (Tm[fm] = mm[fm]);
        0 !== Object.keys(Tm).length ? xm.g.setItem(Om, Tm) : xm.g.removeItem(Om)
      };
    let zm = (() => {
        const mm = xm.g.getItem(Om),
          Tm = (mm => {
            const Tm = "object" === typeof mm && null !== mm ? mm : {},
              fm = {
                ...om,
                bindings: Jm(Tm.bindings)
              };
            for (const Am of Object.keys(Qm)) {
              const mm = Qm[Am](Tm[Am]);
              void 0 !== mm && (fm[Am] = mm)
            }
            const hm = Object.keys(Tm).filter((mm => !!Object.prototype.hasOwnProperty.call(om, mm) && ("bindings" === mm ? "object" !== typeof Tm.bindings || null === Tm.bindings || Object.keys(Tm.bindings).length !== Object.keys(fm.bindings).length : fm[mm] !== Tm[mm])));
            return hm.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${hm.join(", ")}`), fm
          })(mm);
        return null !== mm && void 0 !== mm && cm(Tm), Tm
      })(),
      Zm = {
        ...zm,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const mm = {},
            Tm = new URLSearchParams(window.location.search);
          for (const {
              param: fm,
              key: hm
            }
            of nm) {
            const Am = Qm[hm](Tm.get(fm));
            void 0 !== Am && (mm[hm] = Am)
          }
          return mm
        })()
      };
    const km = () => Zm,
      bm = () => {
        var mm, Tm;
        const fm = km().promptFamily;
        return "auto" !== fm ? fm : null !== (mm = null === (Tm = Rm.g.getActivePad()) || void 0 === Tm ? void 0 : Tm.family) && void 0 !== mm ? mm : "xbox"
      },
      Sm = mm => {
        const Tm = Zm;
        zm = {
          ...zm,
          ...mm
        }, cm(zm), Zm = {
          ...Zm,
          ...mm
        }, (mm => {
          Am.j.gp(pm.i, Zm), Ym.some((Tm => mm[Tm] !== Zm[Tm])) && Am.j.gp(pm.g, Zm)
        })(Tm)
      },
      em = () => {
        const [mm, Tm] = (0, hm.useState)(Zm);
        return (0, am.g)(pm.i, Tm), mm
      }
  },
  8580: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    const hm = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Am = mm => hm.has(mm)
  },
  8059: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Ym.c,
      g: () => Im
    });
    var hm = fm(8066),
      Am = fm(8072);
    const am = .1,
      xm = .3;
    class wm {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(mm, Tm) {
        const fm = null === this.lastMs ? 0 : Math.min(Math.max(0, Tm - this.lastMs), 100);
        this.lastMs = Tm;
        const hm = Math.hypot(mm.x, mm.y);
        if (hm >= xm) return this.anchor = null, void(this.returning = !0);
        hm >= am || (this.returning = !1);
        const Am = this.anchor;
        if (!Am || Math.hypot(mm.x - Am.x, mm.y - Am.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: mm.x,
          y: mm.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += fm, this.steadyMs < 1e3) return;
        const wm = Math.max(hm, Math.hypot(Am.x, Am.y));
        wm < am ? this.deadzone = 0 : this.returning && (this.deadzone = wm + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(mm) {
        return Math.hypot(mm.x, mm.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : mm
      }
    }
    const Dm = (mm, Tm) => {
        var fm, hm;
        return null !== (fm = mm && (null === (hm = Object.getOwnPropertyDescriptor(mm, Tm)) || void 0 === hm ? void 0 : hm.get)) && void 0 !== fm ? fm : null
      },
      im = mm => {
        const Tm = mm.vendorName;
        return "string" === typeof Tm ? Tm : void 0
      },
      Rm = ((mm, Tm) => {
        const fm = Dm(mm, "index"),
          hm = Dm(mm, "id"),
          Am = Dm(mm, "connected"),
          am = Dm(mm, "mapping"),
          xm = Dm(mm, "buttons"),
          wm = Dm(mm, "axes"),
          Rm = Dm(Tm, "pressed"),
          pm = Dm(Tm, "value");
        return fm && hm && Am && am && xm && wm && Rm && pm ? mm => {
          const Tm = xm.call(mm),
            Dm = wm.call(mm),
            Em = {
              index: Number(fm.call(mm)),
              id: String(hm.call(mm)),
              connected: !0 === Am.call(mm),
              mapping: String(am.call(mm)),
              buttons: [],
              axes: [],
              vendorName: im(mm)
            };
          for (let fm = 0; fm < Tm.length; fm++) Em.buttons.push({
            pressed: !0 === Rm.call(Tm[fm]),
            value: Number(pm.call(Tm[fm]))
          });
          for (let fm = 0; fm < Dm.length; fm++) Em.axes.push(Number(Dm[fm]));
          return Em
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      pm = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Em = fm(1409),
      om = fm(1418);
    const Om = mm => ({
      pressed: mm,
      value: mm ? 1 : 0
    });
    var Ym = fm(1987);
    const qm = xm,
      jm = mm => {
        const Tm = new Array(hm.Z).fill(0);
        for (let fm = 0; fm < hm.Z && fm < mm.buttons.length; fm++) {
          const Am = mm.buttons[fm];
          Tm[fm] = Am.pressed && !(0, hm.O)(fm) ? Math.max(Am.value, hm.F) : Am.value
        }
        return Tm
      },
      Vm = (mm, Tm) => {
        var fm, hm;
        return {
          x: null !== (fm = mm.axes[Tm]) && void 0 !== fm ? fm : 0,
          y: null !== (hm = mm.axes[Tm + 1]) && void 0 !== hm ? hm : 0
        }
      };
    const Im = new class {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rm;
        this.readGamepads = mm, this.requireTrustedPads = Tm, this.nativeReader = fm, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = mm => {
          mm.isTrusted && this.trustedIndices.add(mm.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = mm => {
          this.trustedIndices.delete(mm.gamepad.index)
        }, this.DE = mm => {
          if (this.rafId = 0, !this.running) return;
          const Tm = 0 === this.lastTimestampMs ? 16 : Math.min(100, mm - this.lastTimestampMs);
          this.lastTimestampMs = mm;
          try {
            this.poll(mm, Tm)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.DE))
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
      onFrame(mm) {
        return this.frameListeners.add(mm), () => {
          this.frameListeners.delete(mm)
        }
      }
      onActivePadChanged(mm) {
        return this.connectionListeners.add(mm), () => {
          this.connectionListeners.delete(mm)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(mm) {
        return this.connectedListeners.add(mm), () => {
          this.connectedListeners.delete(mm)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const mm = this.readPads()[this.activeInfo.index],
          Tm = mm ? this.readPad(mm) : null;
        return Tm && Tm.id === this.activeInfo.id ? mm : null
      }
      poll(mm, Tm) {
        var fm, Am;
        const am = this.readPads();
        let xm = null,
          Dm = !1;
        const im = [],
          Rm = Math.max(am.length, this.slots.length);
        for (let Im = 0; Im < Rm; Im++) {
          var pm;
          const Tm = Im < am.length ? am[Im] : null,
            fm = Tm ? this.readPad(Tm) : null;
          if (!fm || !fm.connected || !this.isUsable(fm)) {
            this.slots[Im] = null;
            continue
          }
          let Am = this.slots[Im];
          Am && Am.id === fm.id || (Am = {
            id: fm.id,
            ni: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new wm,
            rightRest: new wm
          }, this.slots[Im] = Am);
          const Rm = Vm(fm, 0),
            Em = Vm(fm, 2);
          !Am.leftSettled && Math.hypot(Rm.x, Rm.y) < qm && (Am.leftSettled = !0), !Am.rightSettled && Math.hypot(Em.x, Em.y) < qm && (Am.rightSettled = !0), Am.leftRest.observe(Rm, mm), Am.rightRest.observe(Em, mm);
          const om = jm(fm),
            Om = (0, hm.w)(om, Am.ni),
            Ym = Am.ni,
            Km = Om.map(((mm, Tm) => mm && !Ym[Tm]));
          Am.ni = Om;
          const Qm = {
            pad: fm,
            slot: Am,
            values: om
          };
          Im === (null === (pm = this.activeInfo) || void 0 === pm ? void 0 : pm.index) && fm.id === this.activeInfo.id ? (xm = Qm, Dm = Km.includes(!0)) : Km.includes(!0) && im.push({
            polled: Qm,
            rose: Km
          })
        }
        const Em = this.slots.some((mm => null !== mm));
        if (Em !== this.anyPadConnected) {
          this.anyPadConnected = Em;
          for (const mm of this.connectedListeners) mm()
        }
        const om = null !== (fm = null === (Am = xm) || void 0 === Am ? void 0 : Am.slot.ni) && void 0 !== fm ? fm : [],
          Om = Dm ? void 0 : im.find((mm => {
            let {
              rose: Tm
            } = mm;
            return Tm.some(((mm, Tm) => mm && !om[Tm]))
          }));
        if (Om ? (xm = Om.polled, this.setActive(Om.polled.pad)) : this.activeInfo && !xm && this.setActive(null), !xm || !this.activeInfo) return;
        const Ym = ((mm, Tm) => {
          let {
            pad: fm,
            slot: Am,
            values: am
          } = mm;
          const xm = (0, hm.B)(Tm);
          return xm.values = am, Am.leftSettled && (xm.leftStick = Am.leftRest.apply(Vm(fm, 0))), Am.rightSettled && (xm.rightStick = Am.rightRest.apply(Vm(fm, 2))), xm
        })(xm, mm);
        for (const hm of this.frameListeners) hm(Ym, Tm, this.activeInfo)
      }
      readPad(mm) {
        const Tm = this.readSnapshot(mm);
        return Tm && (0, om.g)(Tm) ? (mm => {
          const Tm = Tm => {
              var fm;
              return null !== (fm = mm.buttons[Tm]) && void 0 !== fm ? fm : Om(!1)
            },
            fm = Tm => {
              var fm;
              return null !== (fm = mm.axes[Tm]) && void 0 !== fm ? fm : 0
            },
            hm = mm.axes.length > 9,
            Am = hm ? (mm => {
              const Tm = 0 !== mm;
              return {
                up: Tm && (mm >= -1 && mm < -.7 || mm >= .95 && mm <= 1),
                right: Tm && mm >= -.75 && mm < -.1,
                down: Tm && mm >= -.2 && mm < .45,
                left: Tm && mm >= .4 && mm <= 1
              }
            })(fm(9)) : {
              up: fm(5) < -.5,
              down: fm(5) > .5,
              left: fm(4) < -.5,
              right: fm(4) > .5
            };
          return {
            ...mm,
            mapping: "standard",
            buttons: [Tm(1), Tm(2), Tm(0), Tm(3), Tm(4), Tm(5), Tm(6), Tm(7), Tm(8), Tm(9), Tm(10), Tm(11), Om(Am.up), Om(Am.down), Om(Am.left), Om(Am.right), Tm(12)],
            axes: [fm(0), fm(1), fm(2), fm(hm ? 5 : 3)]
          }
        })(Tm) : Tm
      }
      readSnapshot(mm) {
        if (this.nativeReader) try {
          return this.nativeReader(mm)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (mm => {
          const Tm = mm;
          return {
            index: Tm.index,
            id: Tm.id,
            connected: Tm.connected,
            mapping: Tm.mapping,
            buttons: Array.from(Tm.buttons, (mm => ({
              pressed: mm.pressed,
              value: mm.value
            }))),
            axes: Array.from(Tm.axes),
            vendorName: im(mm)
          }
        })(mm)
      }
      isUsable(mm) {
        return !(0, Em.f)(mm.id) && ("standard" !== mm.mapping ? (this.warnedNonStandardIds.has(mm.id) || (this.warnedNonStandardIds.add(mm.id), console.warn(`Controller "${mm.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(mm.index))
      }
      setActive(mm) {
        this.activeInfo = mm ? {
          index: mm.index,
          id: mm.id,
          family: (0, Am.b)(mm.id, mm.vendorName)
        } : null;
        for (const Tm of this.connectionListeners) Tm(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (mm) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", mm)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.DE))
      }
    }((() => pm ? pm.call(navigator) : []), !0);
    Im.listenForConnections()
  },
  8672: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      e: () => xm,
      h: () => wm,
      l: () => Am
    });
    var hm = fm(8677);
    const Am = mm => {
        const Tm = [];
        mm.holdingGun && Tm.push({
          kind: "reload"
        }), mm.touchscreenActionButton && Tm.push({
          kind: "touchButton",
          label: mm.touchscreenActionButton
        });
        for (const am of null !== (fm = null === (Am = mm.customButtons) || void 0 === Am ? void 0 : Am.filter(hm.d)) && void 0 !== fm ? fm : []) {
          var fm, Am;
          Tm.push({
            kind: "customButton",
            id: am.id,
            icon: am.icon,
            description: am.description
          })
        }
        return Tm
      },
      am = mm => mm.length >= 2,
      xm = mm => "specialAction" !== mm.kind,
      wm = (mm, Tm) => {
        if (null === mm || null === Tm) return mm === Tm;
        if (mm.kind !== Tm.kind) return !1;
        switch (mm.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return mm.action === Tm.action;
          case "customButton":
            return mm.id === Tm.id && mm.icon === Tm.icon;
          case "touchButton":
            return mm.label === Tm.label
        }
      }
  },
  8593: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = {
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
  8668: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm,
      h: () => om,
      k: () => pm,
      n: () => Om
    });
    var hm = fm(59),
      Am = fm(31),
      am = fm(1449),
      xm = fm(8672),
      wm = fm(8683);
    let Dm = null;
    const im = () => Dm,
      Rm = mm => {
        (0, xm.h)(Dm, mm) || (Dm = mm, Am.j.gp(wm.c, Dm))
      },
      pm = () => {
        const [mm, Tm] = (0, hm.useState)(im);
        return (0, am.g)(wm.c, Tm), mm
      };
    let Em = !1;
    const om = mm => {
        mm !== Em && (Em = mm, Am.j.gp(wm.d, mm))
      },
      Om = () => {
        const [mm, Tm] = (0, hm.useState)(Em);
        return (0, am.g)(wm.d, Tm), mm
      }
  },
  8697: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      g: () => wm
    });
    var hm = fm(31),
      Am = fm(8683);
    let am = !1;
    const xm = () => am,
      wm = mm => {
        mm !== am && (am = mm, hm.j.gp(Am.h, am))
      }
  },
  8688: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => Dm
    });
    var hm = fm(31),
      Am = fm(8683);
    let am = null,
      xm = 0;
    const wm = () => am,
      Dm = mm => {
        null === mm && null === am || (am = null === mm ? null : {
          id: ++xm,
          holdMs: mm
        }, hm.j.gp(Am.i, am))
      }
  },
  8683: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      c: () => hm,
      d: () => Am,
      h: () => wm,
      i: () => Dm,
      k: () => im,
      o: () => xm
    });
    const hm = "controllerActionHintChanged",
      Am = "controllerActionWheelHintChanged",
      am = "controllerOpenChat",
      xm = "controllerSneakToggledChanged",
      wm = "controllerAttackLatchedChanged",
      Dm = "controllerDropStackHoldChanged",
      im = "controllerPickBlockHintChanged"
  },
  8699: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => wm
    });
    var hm = fm(31),
      Am = fm(8683);
    let am = !1;
    const xm = () => am,
      wm = mm => {
        mm !== am && (am = mm, hm.j.gp(Am.k, am))
      }
  },
  8778: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      f: () => wm
    });
    var hm = fm(31),
      Am = fm(8683);
    let am = !1;
    const xm = () => am,
      wm = mm => {
        mm !== am && (am = mm, hm.j.gp(Am.o, am))
      }
  },
  8646: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor() {
        this.downAtMs = null
      }
      update(mm, Tm, fm, hm) {
        if (mm) return this.downAtMs = fm, null;
        if (null === this.downAtMs) return null;
        const Am = fm - this.downAtMs >= hm;
        return Tm ? Am ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Am ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8127: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => pm,
      f: () => Em,
      h: () => wm,
      j: () => Im,
      m: () => Vm
    });
    var hm = fm(37),
      Am = fm(8091),
      am = fm(8066);
    const xm = (() => {
        try {
          return fm(8134)
        } catch {
          return null
        }
      })(),
      wm = [...am._, "LeftStick", "RightStick"],
      Dm = new Map,
      im = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Rm = (new Set(Object.values(im)), {
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
      pm = (mm, Tm) => {
        var fm, hm;
        return null !== (fm = null === (hm = Rm[im[mm]]) || void 0 === hm ? void 0 : hm[Tm]) && void 0 !== fm ? fm : 1
      },
      Em = (mm, Tm) => {
        const fm = `./${im[mm]}/${Tm}.svg`;
        let hm = Dm.get(fm);
        return void 0 === hm && (hm = xm ? xm(fm) : "", Dm.set(fm, hm)), hm
      },
      om = new Set,
      Om = [],
      Ym = mm => {
        if (!om.has(mm)) {
          om.add(mm);
          for (const Tm of wm) {
            const fm = Em(mm, Tm);
            if (fm) {
              const mm = new Image;
              mm.crossOrigin = "anonymous", mm.src = fm, Om.push(mm)
            }
          }
        }
      },
      qm = "controllerGlyphFamily";
    let jm = null;
    const Vm = mm => {
        mm !== jm && (jm = mm, hm.g.setItem(qm, mm), Ym(mm))
      },
      Im = () => {
        const mm = hm.g.getItem(qm);
        (0, Am.h)(mm) && mm !== jm && (jm = mm, Ym(mm))
      }
  },
  8792: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Cm,
      c: () => rm
    });
    var hm = fm(59),
      Am = fm(31),
      am = fm(1449),
      xm = fm(8080),
      wm = fm(8059),
      Dm = fm(8110),
      im = fm(8088);
    const Rm = {
        x: 0,
        y: 0,
        z: 0
      },
      pm = Math.PI / 180,
      Em = mm => Math.hypot(mm.x, mm.y, mm.z),
      om = (mm, Tm) => ({
        x: mm.x * Tm,
        y: mm.y * Tm,
        z: mm.z * Tm
      }),
      Om = (mm, Tm) => ({
        x: mm.x + Tm.x,
        y: mm.y + Tm.y,
        z: mm.z + Tm.z
      }),
      Ym = (mm, Tm) => ({
        x: mm.x - Tm.x,
        y: mm.y - Tm.y,
        z: mm.z - Tm.z
      }),
      qm = mm => {
        const Tm = Em(mm);
        return 0 === Tm ? Rm : om(mm, 1 / Tm)
      },
      jm = mm => ({
        min: {
          ...mm
        },
        max: {
          ...mm
        }
      }),
      Vm = (mm, Tm) => ({
        min: {
          x: Math.min(mm.min.x, Tm.x),
          y: Math.min(mm.min.y, Tm.y),
          z: Math.min(mm.min.z, Tm.z)
        },
        max: {
          x: Math.max(mm.max.x, Tm.x),
          y: Math.max(mm.max.y, Tm.y),
          z: Math.max(mm.max.z, Tm.z)
        }
      }),
      Im = (mm, Tm) => mm.max.x - mm.min.x <= Tm && mm.max.y - mm.min.y <= Tm && mm.max.z - mm.min.z <= Tm;
    class Km {
      constructor() {
        this.bias = Rm, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Rm, this.windowSec = 0
      }
      update(mm) {
        const Tm = this.gyroRange ? Vm(this.gyroRange, mm.gyro) : jm(mm.gyro),
          fm = mm.accel ? this.accelRange ? Vm(this.accelRange, mm.accel) : jm(mm.accel) : null;
        if (!Im(Tm, 1) || fm && !Im(fm, .01)) return void this.restartWindow(mm);
        if (this.gyroRange = Tm, this.accelRange = fm, this.sum = Om(this.sum, om(mm.gyro, mm.dtSec)), this.windowSec += mm.dtSec, this.windowSec < 1) return;
        const hm = om(this.sum, 1 / this.windowSec);
        if (Em(hm) > 5) return;
        const Am = Ym(hm, this.bias);
        let am = 0;
        !this.calibrated || this.windowSec >= 3 ? am = 1 : Em(Am) <= 1 && (am = Math.min(1, mm.dtSec / 1)), this.bias = Om(this.bias, om(Am, am)), this.calibrated = this.calibrated || am > 0
      }
      correct(mm) {
        return Ym(mm, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Rm, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Rm, this.windowSec = 0
      }
      restartWindow(mm) {
        this.gyroRange = jm(mm.gyro), this.accelRange = mm.accel ? jm(mm.accel) : null, this.sum = Rm, this.windowSec = 0
      }
    }
    class Qm {
      constructor() {
        this.down = null
      }
      update(mm, Tm, fm) {
        const hm = qm(om(Tm, -1));
        if (!this.down) return this.down = hm, hm;
        const Am = om(mm, pm * fm),
          am = this.down,
          xm = {
            x: am.x - (Am.y * am.z - Am.z * am.y),
            y: am.y - (Am.z * am.x - Am.x * am.z),
            z: am.z - (Am.x * am.y - Am.y * am.x)
          },
          wm = 0 === Em(hm) ? 0 : Math.min(1, fm / .25);
        var Dm, im;
        return this.down = qm((im = wm, Om(Dm = xm, om(Ym(hm, Dm), im)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class nm {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(mm, Tm, fm) {
        const hm = Math.hypot(mm, Tm),
          Am = Math.max(0, Math.min(1, (hm - 2) / 2)),
          am = {
            yaw: mm * (1 - Am),
            pitch: Tm * (1 - Am),
            dtSec: fm
          };
        for (this.entries.push(am), this.windowSec += fm; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let xm = 0,
          wm = 0;
        for (const im of this.entries) xm += im.yaw * im.dtSec, wm += im.pitch * im.dtSec;
        const Dm = this.windowSec > 0 ? {
          yaw: xm / this.windowSec,
          pitch: wm / this.windowSec
        } : {
          yaw: am.yaw,
          pitch: am.pitch
        };
        return {
          yaw: mm * Am + Dm.yaw,
          pitch: Tm * Am + Dm.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Jm {
      constructor() {
        this.calibrator = new Km, this.gravity = new Qm, this.smoother = new nm
      }
      process(mm, Tm, fm) {
        const hm = Math.max(0, Math.min(.05, Tm));
        this.calibrator.update({
          ...mm,
          dtSec: hm
        });
        const Am = this.calibrator.correct(mm.gyro);
        let am = Am.y;
        "player" === fm && mm.accel && (am = ((mm, Tm) => {
          const fm = mm.y * Tm.y + mm.z * Tm.z;
          return -Math.sign(fm) * Math.min(1.41 * Math.abs(fm), Math.hypot(mm.y, mm.z))
        })(Am, this.gravity.update(Am, mm.accel, hm)));
        const xm = this.smoother.apply(am, Am.x, hm),
          wm = ((mm, Tm) => {
            const fm = Math.hypot(mm, Tm);
            if (fm >= 1) return {
              yaw: mm,
              pitch: Tm
            };
            const hm = fm / 1;
            return {
              yaw: mm * hm,
              pitch: Tm * hm
            }
          })(xm.yaw, xm.pitch);
        return {
          yawDeg: wm.yaw * hm,
          pitchDeg: wm.pitch * hm
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
    const cm = (mm, Tm) => {
      var fm, hm, Am;
      const am = Tm * pm,
        xm = null !== (fm = mm.beta) && void 0 !== fm ? fm : 0,
        wm = null !== (hm = mm.gamma) && void 0 !== hm ? hm : 0;
      return {
        x: xm * Math.cos(am) - wm * Math.sin(am),
        y: xm * Math.sin(am) + wm * Math.cos(am),
        z: null !== (Am = mm.alpha) && void 0 !== Am ? Am : 0
      }
    };
    var zm = fm(8799);
    class Zm {
      constructor(mm, Tm, fm) {
        this.hid = mm, this.sink = Tm, this.onControllersChanged = fm, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = mm => {
          this.openController(mm.device).catch((mm => {
            console.warn("Could not open motion controller", mm)
          }))
        }, this.onDisconnect = mm => {
          this.opening.has(mm.device) && this.disconnectedWhileOpening.add(mm.device);
          const Tm = this.controllers.get(mm.device);
          Tm && (this.forget(Tm), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const mm = await this.hid.getDevices();
        for (const Tm of mm) await this.openController(Tm).catch((mm => {
          console.warn("Could not open motion controller", mm)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const mm of [...this.controllers.values()]) this.forget(mm);
        this.onControllersChanged()
      }
      async request() {
        const mm = await this.hid.requestDevice({
          filters: zm.g
        });
        let Tm = 0;
        for (const fm of mm) await this.openController(fm).catch((mm => {
          console.warn("Could not open motion controller", mm), Tm++
        }));
        return Tm
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((mm => null !== (0, zm.c)(mm.vendorId, mm.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((mm => mm.kind))
      }
      forget(mm) {
        mm.device.removeEventListener("inputreport", mm.onReport), this.controllers.get(mm.device) === mm && this.controllers.delete(mm.device)
      }
      async openController(mm) {
        const Tm = (0, zm.c)(mm.vendorId, mm.productId);
        if (!Tm || !this.running || this.controllers.has(mm) || this.opening.has(mm)) return;
        this.opening.add(mm);
        let fm = !1;
        try {
          mm.opened || await mm.open()
        } finally {
          this.opening.delete(mm), fm = this.disconnectedWhileOpening.delete(mm)
        }
        if (fm) return void mm.close().catch((mm => {
          console.debug("Could not close an unplugged motion controller", mm)
        }));
        if (!this.running) return;
        const hm = {
          device: mm,
          kind: Tm,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: mm => {
            this.onReport(hm, mm)
          }
        };
        this.controllers.set(mm, hm), mm.addEventListener("inputreport", hm.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(hm)
        } catch (Am) {
          console.warn(`Could not turn on motion for ${Tm}`, Am), this.controllers.get(mm) === hm && (this.forget(hm), this.onControllersChanged())
        }
      }
      async enableMotion(mm) {
        let {
          device: Tm,
          kind: fm
        } = mm;
        if ((0, zm.f)(fm))
          for (const hm of zm.q[fm]) await Tm.receiveFeatureReport(hm).catch((mm => {
            console.debug(`Motion controller feature report ${hm} unavailable`, mm)
          }));
        else
          for (let hm = 0; hm < 2; hm++)
            for (const {
                subcommand: mm,
                args: fm
              }
              of zm.t) await Tm.sendReport(zm.u, (0, zm.b)(this.switchPacketCounter++, mm, fm)), await new Promise((mm => {
              setTimeout(mm, 60)
            }))
      }
      onReport(mm, Tm) {
        const fm = (0, zm.m)(mm.kind, Tm.reportId, Tm.data, mm.device.productId);
        if (!fm) return;
        const hm = null === mm.lastEventMs ? 0 : (Tm.timeStamp - mm.lastEventMs) / 1e3;
        mm.lastEventMs = Tm.timeStamp;
        let Am = fm.dtSec;
        if (null !== Am && hm > 0 && (Am = Math.max(.001, Math.min(.017, hm / fm.readings.length))), null === Am && null !== fm.sensorClock && (0, zm.f)(mm.kind)) {
          const Tm = (0, zm.o)(mm.kind, mm.lastClock, fm.sensorClock);
          mm.lastClock = fm.sensorClock, Am = 0 === Tm ? null : Tm
        }
        if (mm.lastReadingMs = Tm.timeStamp, this.isPreferred(mm, Tm.timeStamp))
          for (const xm of fm.readings) {
            var am;
            this.sink(xm, null !== (am = Am) && void 0 !== am ? am : hm, `hid${mm.openedOrder}`)
          }
      }
      isPreferred(mm, Tm) {
        const fm = mm => 1e6 * zm.k[mm.kind] + mm.openedOrder;
        for (const hm of this.controllers.values())
          if (hm !== mm && Tm - hm.lastReadingMs < 500 && fm(hm) < fm(mm)) return !1;
        return !0
      }
    }
    var km = fm(105);
    const bm = () => DeviceMotionEvent,
      Sm = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, km.isMobile)(),
      em = () => {
        var mm;
        const Tm = null === (mm = window.screen.orientation) || void 0 === mm ? void 0 : mm.angle;
        return "number" === typeof Tm ? Tm : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Nm {
      constructor(mm, Tm) {
        this.sink = mm, this.onStateChanged = Tm, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((mm => {
            console.warn("Could not enable the motion sensor", mm)
          }))
        }, this.onMotion = mm => {
          const Tm = mm.rotationRate;
          if (!Tm || null === Tm.alpha && null === Tm.beta && null === Tm.gamma) return;
          const fm = null === this.lastEventMs ? 0 : (mm.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = mm.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: cm(Tm, em()),
            accel: null
          }, fm, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof bm().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const mm = bm().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof mm) return void this.listen();
        let Tm;
        this.disarmGestureRequest();
        try {
          Tm = await mm.call(DeviceMotionEvent)
        } catch (fm) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), fm
        }
        this.wanted && ("granted" === Tm ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(mm) {
        this.state !== mm && (this.state = mm, this.onStateChanged())
      }
    }
    const Gm = "controllerGyroStatusChanged",
      Xm = {
        XN: 0,
        yN: 0
      },
      Pm = mm => {
        var Tm, fm;
        return "undefined" === typeof document || (null === (Tm = null === (fm = document.featurePolicy) || void 0 === fm ? void 0 : fm.allowsFeature(mm)) || void 0 === Tm || Tm)
      };
    class Hm {
      constructor() {
        this.processor = new Jm, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = mm => {
          const Tm = mm.gyroAiming && wm.g.hasConnectedPad();
          var fm, hm;
          Tm !== this.phoneRunning && (this.phoneRunning = Tm, Tm ? null === (fm = this.phone) || void 0 === fm || fm.start() : null === (hm = this.phone) || void 0 === hm || hm.stop());
          if (mm.gyroAiming !== this.running) {
            var Am, am;
            if (this.running = mm.gyroAiming, this.running) null === (Am = this.hid) || void 0 === Am || Am.start().catch((mm => {
              console.warn("Could not open motion controllers", mm)
            }));
            else null === (am = this.hid) || void 0 === am || am.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Am.j.gp(Gm, this.getStatus())
        };
        const mm = (() => {
            var mm;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (mm = navigator.hid) && void 0 !== mm ? mm : null
          })(),
          Tm = Pm("hid");
        this.hidBlocked = null !== mm && !Tm, this.hid = mm && Tm ? new Zm(mm, ((mm, Tm, fm) => {
          this.lastHidReadingMs = performance.now(), this.feed(mm, Tm, "player", fm)
        }), this.publishStatus) : null;
        const fm = Pm("accelerometer") && Pm("gyroscope");
        this.phoneBlocked = Sm() && !fm, this.phone = Sm() && fm ? new Nm(((mm, Tm, fm) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(mm, Tm, "local", fm)
        }), this.publishStatus) : null, Am.j.subscribe(im.c, this.syncWithSettings), wm.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, im.f)()), this.publishStatus()
        })), this.syncWithSettings((0, im.f)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var mm, Tm, fm, hm;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (mm = null === (Tm = this.hid) || void 0 === Tm ? void 0 : Tm.getConnectedKinds()) && void 0 !== mm ? mm : [],
          phoneMotion: null !== (fm = null === (hm = this.phone) || void 0 === hm ? void 0 : hm.getState()) && void 0 !== fm ? fm : "off",
          padConnected: wm.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var mm;
        await (null === (mm = this.phone) || void 0 === mm ? void 0 : mm.requestPermission())
      }
      drainLookDelta() {
        const mm = performance.now();
        mm - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = mm;
        const Tm = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const fm = (0, im.f)();
        return fm.gyroAiming && (mm => {
          let {
            activation: Tm,
            isHeld: fm,
            useButton: hm,
            gyroButton: Am
          } = mm;
          return "always" === Tm || fm("aiming" === Tm ? hm : Am)
        })({
          activation: fm.gyroActivation,
          isHeld: mm => Dm.d.isButtonHeld(mm),
          useButton: (0, xm.k)("use"),
          gyroButton: fm.gyroButton
        }) ? ((mm, Tm) => ({
          XN: -mm.yawDeg * Tm * pm,
          yN: -mm.pitchDeg * Tm * pm
        }))(Tm, fm.gyroSensitivity) : Xm
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(mm, Tm) {
        this.feed(mm, Tm, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(mm, Tm, fm, hm) {
        this.source !== hm && (this.processor.reset(), this.source = hm);
        const Am = this.processor.process(mm, Tm, fm);
        this.pendingYawDeg += Am.yawDeg, this.pendingPitchDeg += Am.pitchDeg
      }
    }
    let ym = null;
    const Cm = () => (ym || (ym = new Hm), ym),
      rm = () => {
        const [mm, Tm] = (0, hm.useState)((() => Cm().getStatus()));
        return (0, am.g)(Gm, Tm), (0, hm.useEffect)((() => {
          Tm(Cm().getStatus())
        }), []), mm
      }
  },
  8799: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Qm,
      c: () => Dm,
      f: () => hm,
      g: () => wm,
      i: () => im,
      k: () => Rm,
      m: () => Vm,
      o: () => qm,
      q: () => Jm,
      t: () => nm,
      u: () => Im
    });
    const hm = mm => "dualShock4" === mm || "dualSense" === mm,
      Am = 1356,
      am = 1406,
      xm = [{
        vendorId: Am,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Am,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Am,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Am,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Am,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: am,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: am,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: am,
        productId: 8199,
        kind: "joyConRight"
      }],
      wm = xm.map((mm => {
        let {
          vendorId: Tm,
          productId: fm
        } = mm;
        return {
          vendorId: Tm,
          productId: fm
        }
      })),
      Dm = (mm, Tm) => {
        var fm, hm;
        return null !== (fm = null === (hm = xm.find((fm => fm.vendorId === mm && fm.productId === Tm))) || void 0 === hm ? void 0 : hm.kind) && void 0 !== fm ? fm : null
      },
      im = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Rm = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      pm = 2e3 / 32767,
      Em = 1 / 8192,
      om = 936 / 13371,
      Om = (mm, Tm, fm) => ({
        x: mm.getInt16(Tm, !0) * fm,
        y: mm.getInt16(Tm + 2, !0) * fm,
        z: mm.getInt16(Tm + 4, !0) * fm
      }),
      Ym = mm => 0 === mm.x && 0 === mm.y && 0 === mm.z,
      qm = (mm, Tm, fm) => null === Tm ? null : "dualShock4" === mm ? 16 * (fm - Tm & 65535) / 3 / 1e6 : (fm - Tm >>> 0) / 3 / 1e6,
      jm = (mm, Tm) => "joyConRight" === Tm ? {
        x: mm.y,
        y: -mm.z,
        z: -mm.x
      } : {
        x: -mm.y,
        y: mm.z,
        z: -mm.x
      },
      Vm = (mm, Tm, fm, Am) => hm(mm) ? ((mm, Tm, fm, hm) => {
        const Am = ((mm, Tm, fm) => "dualShock4" === mm ? 1 === Tm && fm >= 63 ? 0 : 17 === Tm && fm >= 65 ? 2 : null : 1 === Tm && fm >= 62 ? 0 : 49 === Tm && fm >= 63 ? 1 : null)(mm, Tm, fm.byteLength);
        if (null === Am) return null;
        if (2976 === hm && 1 === Tm && 0 !== (4 & fm.getUint8(30))) return null;
        const am = Am + ("dualShock4" === mm ? 12 : 15),
          xm = Om(fm, am, pm),
          wm = Om(fm, am + 6, Em);
        return Ym(xm) && Ym(wm) ? null : {
          readings: [{
            gyro: xm,
            accel: wm
          }],
          dtSec: null,
          sensorClock: "dualShock4" === mm ? fm.getUint16(Am + 9, !0) : fm.getUint32(Am + 27, !0)
        }
      })(mm, Tm, fm, Am) : ((mm, Tm, fm) => {
        if (48 !== Tm && 49 !== Tm || fm.byteLength < 48) return null;
        const hm = [];
        for (let Am = 0; Am < 3; Am++) {
          const Tm = Om(fm, 12 + 12 * Am, 244e-6),
            am = Om(fm, 18 + 12 * Am, om);
          if (Ym(am) && Ym(Tm)) return null;
          hm.push({
            gyro: jm(am, mm),
            accel: jm(Tm, mm)
          })
        }
        return {
          readings: hm,
          dtSec: .005,
          sensorClock: null
        }
      })(mm, Tm, fm),
      Im = 1,
      Km = [0, 1, 64, 64, 0, 1, 64, 64],
      Qm = (mm, Tm, fm) => new Uint8Array([15 & mm, ...Km, Tm, ...fm]),
      nm = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Jm = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8118: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => bm,
      f: () => Hm,
      i: () => jm,
      m: () => om.h,
      p: () => Nm,
      q: () => em,
      r: () => Vm,
      t: () => Gm,
      x: () => om.r,
      z: () => om.t,
      A: () => ym,
      E: () => om.x,
      F: () => cm
    });
    var hm = fm(59),
      Am = fm(23),
      am = fm(31),
      xm = fm(1449),
      wm = fm(1286),
      Dm = fm(8088),
      im = fm(8120),
      Rm = fm(8072),
      pm = fm(8059),
      Em = fm(8127),
      om = fm(1389),
      Om = fm(8066),
      Ym = fm(8580),
      qm = fm(4316);
    const jm = mm => !mm.repeat && !(0, Ym.c)(mm.key),
      Vm = "PadHidesCursor";
    let Im = !1;
    const Km = mm => {
        mm !== Im && (Im = mm, document.documentElement.classList.toggle(Vm, mm))
      },
      Qm = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(mm) {
          let Tm = !1,
            fm = !1;
          mm.values.forEach(((mm, hm) => {
            const Am = mm >= (this.buttonsDown[hm] ? Om.Y : Om.V);
            Am && !this.buttonsDown[hm] && (Tm = !0, fm = !0), this.buttonsDown[hm] = Am
          }));
          return [mm.leftStick, mm.rightStick].forEach(((mm, hm) => {
            const Am = this.stickAnchors[hm];
            Math.hypot(mm.x, mm.y) < (Am ? Om.Y : .3) ? this.stickAnchors[hm] = null : (!Am || Math.hypot(mm.x - Am.x, mm.y - Am.y) >= .3) && (this.stickAnchors[hm] = {
              x: mm.x,
              y: mm.y
            }, Tm = !0, fm ||= !Am)
          })), Tm && (this.lastActivityMs = mm.timestampMs), this.onlyMovedOn = Tm && !fm, Tm
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(mm) {
          return !(mm - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((mm => mm)) || this.stickAnchors.some((mm => null !== mm)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((mm => null !== mm))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let nm = null,
      Jm = !1;
    const cm = () => Jm;
    let zm = null,
      Zm = !1,
      km = null;
    const bm = () => km;
    let Sm = !1;
    const em = mm => {
        if (!Qm.observe(mm)) return !1;
        if (Sm && Qm.wasOnlyMoveOn() && !(0, om.h)()) return !1;
        Sm = !1, Jm = !1;
        const Tm = !(0, om.h)();
        return Tm && (nm = mm, km = !Im && Zm && zm ? {
          ...zm
        } : null), Zm = !1, (0, om.r)("gamepad"), Km(!0), (0, Em.m)((0, Dm.g)()), Tm
      },
      Nm = mm => !(0, om.h)() || mm === nm,
      Gm = () => {
        Qm.reset()
      },
      Xm = () => {
        const mm = Am.c.get("activeInputDevice"),
          Tm = "gamepad" === mm ? pm.g.getActivePad() : null;
        return {
          device: mm,
          inGame: (0, wm.r)(),
          padMovesMouse: null !== Tm && (0, Rm.c)(Tm.id)
        }
      },
      Pm = mm => {
        document.pointerLockElement ? zm = null : (zm ??= {
          x: 0,
          y: 0
        }, zm.x = mm.clientX, zm.y = mm.clientY)
      },
      Hm = () => {
        const mm = new qm.d,
          Tm = Tm => {
            mm.reset(), Sm = !1, (0, om.r)(Tm)
          },
          fm = mm => {
            if (mm.isTrusted) {
              if (mm instanceof KeyboardEvent) {
                if ((0, om.o)(mm), !jm(mm)) return;
                Jm = !0
              }
              if (mm instanceof PointerEvent && "touch" === mm.pointerType) return zm = null, void Tm("touch");
              mm instanceof PointerEvent && (Pm(mm), Zm = !0), ("pointerdown" !== mm.type || (mm => {
                let {
                  device: Tm,
                  inGame: fm,
                  padMovesMouse: hm
                } = mm;
                return !("gamepad" === Tm && hm && fm)
              })(Xm())) && Tm("keyboardMouse")
            }
          },
          hm = mm => {
            mm.isTrusted && (zm = null, Tm("touch"))
          },
          xm = mm => {
            mm.isTrusted && "touch" !== mm.pointerType && !mm.relatedTarget && (zm = null)
          },
          wm = fm => {
            if (!fm.isTrusted || "touch" === fm.pointerType) return;
            Pm(fm);
            const hm = fm.movementX || 0,
              am = fm.movementY || 0;
            if (0 === hm && 0 === am) return;
            if (Zm = !0, Km(!1), "keyboardMouse" === Am.c.get("activeInputDevice")) return;
            const xm = Qm.isHolding(fm.timeStamp),
              wm = Xm(),
              Dm = (mm => {
                let {
                  device: Tm,
                  inGame: fm,
                  padMovesMouse: hm,
                  padHolding: Am
                } = mm;
                return ("gamepad" !== Tm || !hm) && "keyboardMouse" !== Tm && (fm || !Am)
              })({
                ...wm,
                inGame: wm.inGame && (0, im.g)(),
                padHolding: xm
              });
            Dm && mm.add(hm, am, fm.timeStamp) && (Tm("keyboardMouse"), Sm = Qm.isStickOffRest())
          },
          Dm = mm => {
            Km("gamepad" === mm)
          },
          Rm = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", fm, Rm), window.addEventListener("pointerdown", fm, Rm), window.addEventListener("wheel", fm, Rm), window.addEventListener("touchstart", hm, Rm), window.addEventListener("pointermove", wm, Rm), window.addEventListener("pointerout", xm, Rm);
        const pm = am.j.subscribe("appManagerUpdated|activeInputDevice", Dm);
        return Dm(Am.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", fm, Rm), window.removeEventListener("pointerdown", fm, Rm), window.removeEventListener("wheel", fm, Rm), window.removeEventListener("touchstart", hm, Rm), window.removeEventListener("pointermove", wm, Rm), window.removeEventListener("pointerout", xm, Rm), zm = null, am.j.unsubscribe(pm), Km(!1)
        }
      },
      ym = () => {
        const [mm, Tm] = (0, hm.useState)(Dm.g);
        return (0, xm.g)(Dm.b, (() => {
          Tm((0, Dm.g)())
        })), (0, xm.g)(pm.c, (() => {
          Tm((0, Dm.g)())
        })), mm
      }
  },
  8091: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      h: () => Am
    });
    const hm = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Am = mm => hm.includes(mm)
  },
  8630: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      f: () => am,
      j: () => Dm,
      l: () => wm
    });
    var hm = fm(1449),
      Am = fm(1406);
    const am = "controllerInventoryCursorChanged",
      xm = {
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
      wm = () => {
        var mm, Tm;
        return (0, hm.i)(am, null !== (mm = null === (Tm = (0, Am.g)()) || void 0 === Tm ? void 0 : Tm.getInventoryCursorState()) && void 0 !== mm ? mm : xm)
      },
      Dm = () => {
        var mm, Tm;
        return null !== (mm = null === (Tm = (0, Am.g)()) || void 0 === Tm ? void 0 : Tm.isPadSteppingSlots()) && void 0 !== mm && mm
      }
  },
  8622: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em,
      f: () => wm,
      i: () => Dm,
      m: () => xm,
      o: () => am,
      p: () => Rm,
      s: () => pm
    });
    let hm = null;
    const Am = new Set,
      am = mm => (hm = mm, () => {
        if (hm === mm) {
          hm = null;
          for (const mm of Am) mm()
        }
      }),
      xm = mm => (Am.add(mm), () => {
        Am.delete(mm)
      }),
      wm = () => hm,
      Dm = () => null !== hm;
    let im = null;
    const Rm = mm => {
        im = mm
      },
      pm = () => {
        const mm = im;
        return im = null, mm
      },
      Em = (mm, Tm) => {
        var fm, hm;
        return null !== (fm = null !== (hm = mm.find((mm => mm.element === Tm))) && void 0 !== hm ? hm : mm.find((mm => mm.element.contains(Tm)))) && void 0 !== fm ? fm : null
      }
  },
  8633: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => xm
    });
    var hm = fm(59);
    const Am = new WeakMap,
      am = mm => {
        var Tm, fm;
        return null !== (Tm = null === (fm = Am.get(mm)) || void 0 === fm ? void 0 : fm.current) && void 0 !== Tm ? Tm : null
      },
      xm = (mm, Tm) => {
        const fm = (0, hm.useRef)(Tm);
        fm.current = Tm;
        const am = (0, hm.useRef)(null);
        (0, hm.useEffect)((() => {
          const Tm = mm.current,
            hm = am.current;
          Tm !== hm && (hm && Am.get(hm) === fm && Am.delete(hm), am.current = Tm, Tm && Am.set(Tm, fm))
        })), (0, hm.useEffect)((() => () => {
          const mm = am.current;
          mm && Am.get(mm) === fm && Am.delete(mm), am.current = null
        }), [])
      }
  },
  8770: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      d: () => im,
      f: () => pm,
      g: () => Rm,
      h: () => Dm,
      j: () => om
    });
    var hm = fm(31),
      Am = fm(1987),
      am = fm(1406),
      xm = fm(1389);
    const wm = mm => {
        var Tm, fm;
        return (0, xm.h)() && null !== (Tm = null === (fm = (0, am.g)()) || void 0 === fm ? void 0 : fm.getGlyphForNoaAction(mm)) && void 0 !== Tm ? Tm : null
      },
      Dm = "controllerGlyph:",
      im = mm => {
        var Tm, fm;
        return null !== (Tm = null === (fm = (0, am.g)()) || void 0 === fm ? void 0 : fm.getPadGlyphIconName(mm)) && void 0 !== Tm ? Tm : `${Dm}xbox/${mm}`
      },
      Rm = mm => mm.startsWith(Dm),
      pm = mm => {
        var Tm, fm;
        return Rm(mm) && null !== (Tm = null === (fm = (0, am.g)()) || void 0 === fm ? void 0 : fm.getPadGlyphIconUrl(mm)) && void 0 !== Tm ? Tm : null
      },
      Em = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", xm.e, Am.g, Am.c],
      om = mm => {
        const Tm = Em.map((Tm => hm.j.subscribe(Tm, mm)));
        return () => {
          for (const mm of Tm) hm.j.unsubscribe(mm)
        }
      }
  },
  8120: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im,
      g: () => Rm,
      h: () => Dm,
      j: () => wm
    });
    var hm = fm(23),
      Am = fm(1635),
      am = fm(1722);
    const xm = new Map,
      wm = (mm, Tm) => (xm.has(mm) && console.warn(`Gameplay blocker "${mm}" registered twice; the newer one replaces it.`), xm.set(mm, Tm), () => {
        xm.get(mm) === Tm && xm.delete(mm)
      }),
      Dm = () => (0, am.b)(document.activeElement),
      im = function() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Tm, fm] of xm)
          if (!mm.includes(Tm) && fm()) return Tm;
        return null
      },
      Rm = function() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === hm.c.get("gameState") && (!(0, Am.n)() && (!Dm() && null === im(mm)))
      }
  },
  8066: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => am,
      F: () => pm,
      G: () => Im,
      H: () => Sm,
      L: () => Km,
      N: () => jm,
      O: () => qm,
      R: () => im,
      V: () => Em,
      Y: () => om,
      Z: () => Am,
      _: () => hm,
      ab: () => nm,
      bb: () => km,
      cb: () => em,
      e: () => Nm,
      gb: () => Qm,
      h: () => bm,
      l: () => Rm,
      n: () => Dm,
      p: () => wm,
      s: () => cm,
      w: () => Vm,
      y: () => Jm
    });
    const hm = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Am = hm.length,
      am = function() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Am).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: mm
        }
      },
      xm = Object.fromEntries(hm.map(((mm, Tm) => [mm, Tm]))),
      wm = mm => xm[mm],
      Dm = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const hm = Math.hypot(mm.x, mm.y);
        if (hm <= Tm) return {
          x: 0,
          y: 0
        };
        const Am = Math.min(1, (hm - Tm) / Math.max(1e-4, fm - Tm));
        return {
          x: mm.x / hm * Am,
          y: mm.y / hm * Am
        }
      },
      im = ["exponential", "linear", "boost"],
      Rm = (mm, Tm) => {
        const fm = Math.hypot(mm.x, mm.y);
        if (0 === fm) return {
          x: 0,
          y: 0
        };
        const hm = ((mm, Tm) => {
          const fm = Math.max(0, Math.min(1, mm));
          return "linear" === Tm ? fm : fm * fm
        })(fm, Tm);
        return {
          x: mm.x / fm * hm,
          y: mm.y / fm * hm
        }
      },
      pm = .5,
      Em = .3,
      om = .2,
      Om = wm("LT"),
      Ym = wm("RT"),
      qm = mm => mm === Om || mm === Ym,
      jm = (mm, Tm) => {
        const fm = wm(Tm);
        return qm(fm) ? mm[fm] > .35 : mm[fm] >= pm
      },
      Vm = (mm, Tm) => mm.map(((mm, fm) => qm(fm) ? Tm[fm] ? mm > .35 : mm >= .55 : mm >= pm)),
      Im = ["Up", "Down", "Left", "Right"],
      Km = mm => Im.includes(mm),
      Qm = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(mm.x, mm.y) < Tm ? null : Math.abs(mm.x) > Math.abs(mm.y) ? mm.x > 0 ? "Right" : "Left" : mm.y > 0 ? "Down" : "Up"
      },
      nm = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Jm = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      cm = ["default", "slow", "off"],
      zm = 800,
      Zm = 250,
      km = (mm, Tm) => "off" === Tm ? null : "slow" === Tm ? {
        initialDelayMs: Math.max(mm.initialDelayMs, zm),
        intervalMs: Math.max(mm.intervalMs, Zm)
      } : mm;
    class bm {
      constructor(mm) {
        this.readTiming = mm, this.ni = !1, this.timing = null, this.nextFireMs = 0
      }
      update(mm, Tm) {
        return mm ? this.ni ? !!(this.timing && Tm >= this.nextFireMs) && (this.nextFireMs = Tm + this.timing.intervalMs, !0) : (this.ni = !0, this.timing = this.readTiming(), this.nextFireMs = Tm + (null !== (fm = null === (hm = this.timing) || void 0 === hm ? void 0 : hm.initialDelayMs) && void 0 !== fm ? fm : 0), !0) : (this.ni = !1, !1);
        var fm, hm
      }
      reset() {
        this.ni = !1
      }
    }
    const Sm = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      em = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Nm {
      constructor(mm) {
        this.timer = mm, this.direction = null
      }
      update(mm, Tm) {
        return mm !== this.direction && (this.timer.reset(), this.direction = mm), this.timer.update(null !== mm, Tm) ? mm : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8639: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      d: () => am
    });
    let hm = -1 / 0;
    const Am = () => {
        hm = performance.now()
      },
      am = mm => performance.now() - hm < mm
  },
  8585: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      d: () => am
    });
    var hm = fm(8088),
      Am = fm(8066);
    const am = mm => (0, Am.bb)(mm, (0, hm.f)().buttonRepeat),
      xm = mm => new Am.h((() => am(mm)))
  },
  8107: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Dm,
      f: () => am,
      j: () => wm
    });
    var hm = fm(31),
      Am = fm(8088);
    const am = (mm, Tm) => "OpenShop" === mm ? "shop" === Tm : "OpenLobbyLeaderboard" !== mm || "leaderboard" === Tm;
    let xm = !1;
    const wm = mm => {
        mm !== xm && (xm = mm, hm.j.gp(Am.b, (0, Am.f)()))
      },
      Dm = () => ((mm, Tm) => "shop" === mm && Tm ? "shop" : "leaderboard")((0, Am.f)().leaderboardButton, xm)
  },
  8098: (mm, Tm, fm) => {
    fm.d(Tm, {
      Ab: () => cm,
      C: () => wm,
      G: () => Qm,
      K: () => Em,
      N: () => om,
      R: () => pm,
      V: () => Km,
      X: () => im,
      Y: () => jm,
      ab: () => Zm,
      c: () => Xm,
      db: () => Im,
      f: () => Hm,
      fb: () => Ym,
      gb: () => qm,
      h: () => km,
      hb: () => Om,
      k: () => xm,
      kb: () => Vm,
      l: () => zm,
      o: () => Jm,
      ob: () => em,
      pb: () => am,
      r: () => Nm,
      sb: () => nm,
      u: () => Gm,
      w: () => Rm,
      wb: () => Pm,
      y: () => Dm
    });
    var hm = fm(8086),
      Am = fm(8066);
    const am = {
        min: 25,
        max: 500,
        step: 5
      },
      xm = {
        min: 25,
        max: 100,
        step: 5
      },
      wm = {
        min: 0,
        max: .4,
        step: .01
      },
      Dm = {
        min: 25,
        max: 300,
        step: 5
      },
      im = {
        min: .5,
        max: 6,
        step: .1
      },
      Rm = (mm, Tm) => {
        if (!Number.isFinite(mm)) return Tm.min;
        const fm = Tm.min + Math.round((mm - Tm.min) / Tm.step) * Tm.step,
          hm = Math.min(Tm.max, Math.max(Tm.min, fm));
        return Math.round(1e3 * hm) / 1e3
      },
      pm = mm => `${Math.round(mm)}%`,
      Em = mm => pm(100 * mm),
      om = mm => `${mm.toFixed(1)}\xd7`,
      Om = [{
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
      Ym = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      qm = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      jm = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Vm = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Im = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Km = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Qm = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      nm = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Jm = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      cm = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      zm = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Zm = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      km = {
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
      bm = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Sm = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      em = hm.d.map((mm => {
        let {
          group: Tm,
          actions: fm
        } = mm;
        const hm = fm.map((mm => ({
          kind: "action",
          action: mm
        })));
        return {
          titleKey: bm[Tm],
          rows: "gameplay" === Tm ? [...Sm, ...hm] : hm
        }
      })),
      Nm = Am._.filter((mm => "Home" !== mm)),
      Gm = 1e4;
    class Xm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = mm, this.openButton = Tm, this.accepts = fm, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(mm, Tm) {
        var fm;
        this.updateIgnored(mm, Tm);
        const hm = Tm - (null !== (fm = this.startMs) && void 0 !== fm ? fm : Tm) >= 250;
        for (const Am of Nm)
          if (Am !== this.cancelButton && hm && !this.ignoredUntilMs.has(Am) && mm.wasPressed(Am) && this.accepts(Am)) return {
            kind: "bind",
            button: Am
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (mm.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Tm
        }
        return null === this.cancelDownAtMs ? null : mm.isHeld(this.cancelButton) && Tm - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : mm.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(mm) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (mm - this.cancelDownAtMs) / 700)
      }
      updateIgnored(mm, Tm) {
        if (null === this.startMs) {
          this.startMs = Tm;
          for (const Tm of Nm) mm.isDown(Tm) && this.ignoredUntilMs.set(Tm, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Tm + 250)
        }
        for (const [fm, hm] of this.ignoredUntilMs) {
          const Am = mm.isDown(fm);
          hm === 1 / 0 ? Am || fm !== this.openButton ? Am || this.ignoredUntilMs.delete(fm) : this.ignoredUntilMs.set(fm, Tm + 250) : Tm >= hm ? this.ignoredUntilMs.delete(fm) : Am && this.ignoredUntilMs.set(fm, 1 / 0)
        }
      }
    }
    const Pm = 6e3;
    class Hm {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(mm, Tm) {
        let {
          pressed: fm,
          ni: hm
        } = mm;
        if (fm) {
          const mm = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== mm && Tm - mm < 1500 ? [...this.pressesAtMs, Tm] : [Tm], this.pressesAtMs.length >= 3) return 1
        }
        return hm ? (this.downAtMs ??= Tm, Math.min(1, (Tm - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8654: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Am
    });
    let hm = null;
    const Am = function(mm) {
        const Tm = {
          cycle: mm,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hm = Tm, () => {
          hm === Tm && (hm = null)
        }
      },
      am = () => {
        var mm;
        return null !== (mm = hm) && void 0 !== mm && mm.canCycle() ? hm.cycle : null
      }
  },
  4974: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => xm
    });
    var hm = fm(59);
    const Am = new WeakMap,
      am = mm => {
        var Tm;
        const fm = mm.closest("[data-pad-slider]");
        return fm && null !== (Tm = Am.get(fm)) && void 0 !== Tm ? Tm : null
      },
      xm = (mm, Tm) => {
        const fm = (0, hm.useRef)(Tm);
        fm.current = Tm, (0, hm.useEffect)((() => {
          if (mm.current) return ((mm, Tm) => (Am.set(mm, Tm), () => {
            Am.get(mm) === Tm && Am.delete(mm)
          }))(mm.current, {
            adjust: mm => {
              fm.current.adjust(mm)
            },
            setFraction: mm => {
              fm.current.setFraction(mm)
            },
            endDrag: () => {
              fm.current.endDrag()
            }
          })
        }), [mm])
      }
  },
  8752: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      d: () => xm,
      h: () => am,
      l: () => hm,
      p: () => wm,
      s: () => im,
      u: () => Rm
    });
    const hm = "controllerActionWheelOpen",
      Am = "controllerActionWheelAim",
      am = "controllerActionWheelCommit",
      xm = "controllerActionWheelClose",
      wm = "controllerActionWheelPick";
    let Dm = !1;
    const im = () => Dm,
      Rm = mm => {
        Dm = mm
      }
  },
  8745: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      f: () => Am
    });
    let hm = 0;
    const Am = () => {
        hm++
      },
      am = () => hm
  },
  8652: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      g: () => Am,
      i: () => xm,
      l: () => am,
      n: () => hm,
      o: () => im
    });
    const hm = "controllerQuickChatWheelOpen",
      Am = "controllerQuickChatWheelAim",
      am = "controllerQuickChatWheelCommit",
      xm = "controllerQuickChatWheelClose";
    let wm = !1;
    const Dm = () => wm,
      im = mm => {
        wm = mm
      }
  },
  8666: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      f: () => Am
    });
    var hm = fm(31);
    const Am = "localBlockBroken";

    function am() {
      return {
        onPlayerChangeBlock(mm, Tm, fm, am, xm, wm) {
          "Air" === wm && hm.j.gp(Am)
        }
      }
    }
  },
  8663: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    var hm = fm(1266);

    function Am(mm, Tm) {
      var fm, Am;
      try {
        const fm = (0, hm.d)();
        if ("function" === typeof fm) {
          const hm = new fm(mm, Tm);
          if (hm.type === mm) return hm
        }
      } catch {}
      const am = document.createEvent("Event");
      return am.initEvent(mm, null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.bubbles) && void 0 !== fm && fm, null !== (Am = null === Tm || void 0 === Tm ? void 0 : Tm.cancelable) && void 0 !== Am && Am), am
    }
  },
  8702: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(8709),
      Am = fm(653),
      am = fm(135);

    function xm(mm) {
      var Tm, fm;
      if ((0, Am.H)(mm)) return !0;
      const xm = null !== (Tm = null === (fm = am.k[am.q]) || void 0 === fm ? void 0 : fm.adConfig.showRewardedAds) && void 0 !== Tm && Tm;
      for (const Am in mm) {
        const Tm = mm[Am];
        if (null !== Tm && void 0 !== Tm && Tm.items)
          for (const mm in Tm.items)
            if ((0, hm.l)(Tm.items[mm], xm)) return !1
      }
      return !0
    }
  },
  8721: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => hm
    });
    const hm = 100;

    function Am(mm) {
      let {
        translationKeys: Tm = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return mm.map((mm => {
        var fm;
        return null !== (fm = function(mm, Tm) {
          if ("string" === typeof mm) return mm;
          const fm = "str" in mm ? mm.str : mm;
          if ("string" === typeof fm) return fm;
          if ("entityName" in fm) return fm.entityName;
          if (Tm && "translationKey" in fm) return `{${fm.translationKey}${void 0===fm.params?"":` ${JSON.stringify(fm.params)}`}}`;
          return null
        }(mm, Tm)) && void 0 !== fm ? fm : " "
      })).join("")
    }
  },
  8761: () => {},
  8134: (mm, Tm, fm) => {
    var hm = {
      "./nintendo/A.svg": 8140,
      "./nintendo/B.svg": 8147,
      "./nintendo/Down.svg": 8151,
      "./nintendo/Home.svg": 8156,
      "./nintendo/LB.svg": 8159,
      "./nintendo/LS.svg": 8168,
      "./nintendo/LT.svg": 8174,
      "./nintendo/Left.svg": 8180,
      "./nintendo/LeftStick.svg": 8182,
      "./nintendo/Menu.svg": 8185,
      "./nintendo/RB.svg": 8194,
      "./nintendo/RS.svg": 8198,
      "./nintendo/RT.svg": 8202,
      "./nintendo/Right.svg": 8211,
      "./nintendo/RightStick.svg": 8217,
      "./nintendo/Up.svg": 8219,
      "./nintendo/View.svg": 8223,
      "./nintendo/X.svg": 8227,
      "./nintendo/Y.svg": 8229,
      "./playstation/A.svg": 8234,
      "./playstation/B.svg": 8239,
      "./playstation/Down.svg": 8247,
      "./playstation/Home.svg": 8255,
      "./playstation/LB.svg": 8258,
      "./playstation/LS.svg": 8266,
      "./playstation/LT.svg": 8274,
      "./playstation/Left.svg": 8280,
      "./playstation/LeftStick.svg": 8285,
      "./playstation/Menu.svg": 8294,
      "./playstation/RB.svg": 8301,
      "./playstation/RS.svg": 8305,
      "./playstation/RT.svg": 8311,
      "./playstation/Right.svg": 8320,
      "./playstation/RightStick.svg": 8325,
      "./playstation/Up.svg": 8332,
      "./playstation/View.svg": 8341,
      "./playstation/X.svg": 8348,
      "./playstation/Y.svg": 8353,
      "./steamdeck/A.svg": 8355,
      "./steamdeck/B.svg": 8364,
      "./steamdeck/Down.svg": 8368,
      "./steamdeck/Home.svg": 8376,
      "./steamdeck/LB.svg": 8385,
      "./steamdeck/LS.svg": 8393,
      "./steamdeck/LT.svg": 8398,
      "./steamdeck/Left.svg": 8400,
      "./steamdeck/LeftStick.svg": 8409,
      "./steamdeck/Menu.svg": 8414,
      "./steamdeck/RB.svg": 8422,
      "./steamdeck/RS.svg": 8430,
      "./steamdeck/RT.svg": 8439,
      "./steamdeck/Right.svg": 8442,
      "./steamdeck/RightStick.svg": 8448,
      "./steamdeck/Up.svg": 8457,
      "./steamdeck/View.svg": 8461,
      "./steamdeck/X.svg": 8466,
      "./steamdeck/Y.svg": 8475,
      "./xbox/A.svg": 8483,
      "./xbox/B.svg": 8488,
      "./xbox/Down.svg": 8491,
      "./xbox/Home.svg": 8496,
      "./xbox/LB.svg": 8505,
      "./xbox/LS.svg": 8514,
      "./xbox/LT.svg": 8517,
      "./xbox/Left.svg": 8522,
      "./xbox/LeftStick.svg": 8524,
      "./xbox/Menu.svg": 8528,
      "./xbox/RB.svg": 8535,
      "./xbox/RS.svg": 8541,
      "./xbox/RT.svg": 8544,
      "./xbox/Right.svg": 8548,
      "./xbox/RightStick.svg": 8552,
      "./xbox/Up.svg": 8557,
      "./xbox/View.svg": 8563,
      "./xbox/X.svg": 8565,
      "./xbox/Y.svg": 8573
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 8134
  },
  8140: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8147: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8151: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8156: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8159: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8168: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8174: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8180: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8182: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8185: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8194: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8198: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8202: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8211: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8217: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8219: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8223: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8227: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8229: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8234: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8239: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8247: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8255: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8258: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8266: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8274: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8280: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8285: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8294: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8301: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8305: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8311: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8320: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8325: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8332: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8341: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8348: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8353: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8355: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8364: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8368: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8376: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8385: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8393: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8398: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8400: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8409: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8414: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8422: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8430: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8439: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8442: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8448: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8457: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8461: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8466: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8475: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8483: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8488: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8491: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8496: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8505: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8514: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8517: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8522: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8524: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8528: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8535: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8541: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8544: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8548: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8552: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8557: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8563: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8565: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8573: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);